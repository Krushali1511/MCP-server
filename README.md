# 🧠 HeadStarter MCP Server – Notion Automation

This MCP (Model Context Protocol) server gives AI-friendly access to Notion using natural language prompts.  
Built using **Next.js**, **TypeScript**, and **@notionhq/client**, this project was created by **Krushali Chauhan** as part of an internship at **HeadStarter**.

---

## 🚀 Add to Cursor (Optional)

To connect this server with Cursor or another AI tool, paste the following JSON into Cursor Settings → MCP → Add MCP Server:

json
{
  "mcpServers": {
    "HeadStarter-MCP": {
      "url": "https://your-vercel-url.vercel.app/sse"
    }
  }
}
🧩 Features
✅ Supported Actions
Create Notion Pages via natural language

Extract and structure title and content

Real-time response via JSON

Coming soon: Google Docs & GitHub integration

🧰 Available Tools
query-notion-page
Creates a Notion page using extracted title and content.

Parameters:
title (string): Title of the Notion page

content (string): Page content (plain text)

Example:
json
Copy code
{
  "tool": "query-notion-page",
  "parameters": {
    "title": "To Do List",
    "content": "Gym, Sleep, Study"
  }
}
🛠️ Setup
📁 Environment Variables (.env.local)
env
Copy code
NOTION_SECRET=your-notion-secret
NOTION_DATABASE_ID=your-database-id
Create a Notion integration at https://www.notion.com/my-integrations

Share your Notion database with that integration

📦 Installation
bash
Copy code
git clone https://github.com/your-username/headstarter-mcp-server.git
cd headstarter-mcp-server
npm install
npm run dev
🧪 Test Example (via curl)
bash
Copy code
curl -X POST http://localhost:3000/api/mcp \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Create a Notion page titled To Do List and content Gym, Sleep, Study"}'
You will receive a pageId in the response, confirming the page was created in Notion.



⚙️ Technical Stack
Layer	Tech Used
Frontend	Next.js + TypeScript
Backend	API Route + Notion SDK
Prompt Logic	Basic parsing
Hosting	Vercel (recommended)

👩‍💻 Author
Krushali Chauhan
HeadStarter Intern | Sheridan College 🇨🇦





