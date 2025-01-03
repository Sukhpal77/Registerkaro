import { query } from '../../db/connection.js';

export async function GET() {
  try {
    const result = await query("SELECT * FROM clients");
    const clients = result.rows;
    
    return new Response(JSON.stringify(clients), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch clients" }),
      { status: 500 }
    );
  }
}
