// lib/notion.ts

import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_SECRET });

export async function handleNotion(input: any, auth: any) {
  try {
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID!,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: input.title || "Untitled",
              },
            },
          ],
        },
      },
      children: [
        {
          object: "block",
          type: "paragraph",
          paragraph: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: input.content || "No content provided",
                },
              },
            ],
          },
        },
      ],
    });

    return {
      pageId: response.id,
      status: "success",
    };
  } catch (error: any) {
    throw new Error(`Notion API error: ${error.message}`);
  }
}
