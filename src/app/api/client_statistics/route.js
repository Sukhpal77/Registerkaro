import { query } from '../../db/connection.js';  

export async function GET() {
  try {
    const result = await query("SELECT * FROM client_statistics");
    const stats = result.rows;
    
    return new Response(JSON.stringify(stats), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch statistics" }),
      { status: 500 }
    );
  }
}
