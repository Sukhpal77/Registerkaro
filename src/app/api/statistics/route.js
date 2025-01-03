import { query } from '../../db/connection.js';  

export async function GET() {
  try {
    const result = await query(
      "SELECT * FROM statistics WHERE id = $1",
      [1]
    );
    const stats = result.rows[0];

    if (stats) {
      return new Response(JSON.stringify(stats), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({ error: "Statistics not found" }),
      { status: 404 }
    );
  } catch (error) {
    console.error(error);

    const defaultData = {
      customer_rating: 4.5,
      clients: 2000,
      financial_stability: 99.8,
    };

    return new Response(
      JSON.stringify(defaultData),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }
}
