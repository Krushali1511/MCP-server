// pages/api/mcp.ts

import type { NextApiRequest, NextApiResponse } from 'next'
import { handleNotion } from '../../lib/notion'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' })
  }

  const { tool, input, auth } = req.body

  if (!tool || !input) {
    return res.status(400).json({ error: 'Missing tool or input in request body' })
  }

  try {
    let response

    if (tool === 'notion') {
      response = await handleNotion(input, auth)
    } else {
      return res.status(400).json({ error: `Unsupported tool: ${tool}` })
    }

    return res.status(200).json({
      status: 'success',
      tool_response: response,
      message: `${tool} task completed successfully`,
    })
  } catch (error: any) {
    console.error('MCP Handler Error:', error)
    return res.status(500).json({
      status: 'error',
      message: error.message || 'Internal server error',
    })
  }
}
