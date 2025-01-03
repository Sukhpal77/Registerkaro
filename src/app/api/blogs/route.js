import { query } from '../../db/connection.js';  

export async function GET() {
  try {
    const result = await query(
      "SELECT * FROM blogs"
    );
    const blogs = result.rows;
    
    return new Response(JSON.stringify(blogs), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch blogs" }),
      { status: 500 }
    );
  }
}