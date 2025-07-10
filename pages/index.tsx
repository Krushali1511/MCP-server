import { useState } from "react"

export default function Home() {
  const [input, setInput] = useState("")
  const [response, setResponse] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setResponse(null)

    // Extract title and content from the prompt
    const match = input.match(/Create a Notion page titled (.+?) and content (.+)/i)
    const title = match?.[1] || "Untitled"
    const content = match?.[2] || "No content provided"

    try {
      const res = await fetch("/api/mcp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tool: "notion",
          input: {
            title,
            content,
          },
          auth: null,
        }),
      })

      const data = await res.json()
      setResponse(JSON.stringify(data, null, 2))
    } catch (err) {
      setResponse("❌ Error: Failed to connect.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <h1>🚀 MCP </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">Prompt:</label>
        <textarea
          id="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g., Create a Notion page titled Hello and content This is from MCP"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {response && (
        <div className="response">
          <strong>Response:</strong>
          <pre>{response}</pre>
        </div>
      )}
    </div>
  )
}
