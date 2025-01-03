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

    // Fallback data for client_statistics if the database is unavailable
    const fallbackStats = [
      { label: 'Customers', value: '1M+' },
      { label: 'Years of Excellence', value: '12+' },
      { label: 'R&D Engineers', value: '41+' },
      { label: 'Countries', value: '78+' },
      { label: 'Partners', value: '3287+' },
      { label: 'Awards Received', value: '41+' },
      { label: 'Projects Completed', value: '5000+' },
      { label: 'Happy Clients', value: '100K+' },
    ];

    // Return the fallback data if the database query fails
    return new Response(JSON.stringify(fallbackStats), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
}
