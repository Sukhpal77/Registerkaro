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

    // Fallback data when the database fails
    const fallbackClients = [
      {
        name: 'TechSolutions Inc.',
        logo: '/img/TechSolutions.png',
        director: 'John Doe',
        description: 'A leading tech company specializing in software development.',
        website: 'https://www.techsolutions.com',
        email: 'contact@techsolutions.com',
        phone: '+1 800 555 0101',
      },
      {
        name: 'GreenLeaf Technologies',
        logo: '/img/GreenLeaf.jpeg',
        director: 'Jane Smith',
        description: 'A global leader in the finance sector.',
        website: 'https://www.greenleaftech.com',
        email: 'info@greenleaftech.com',
        phone: '+1 800 555 0102',
      },
      {
        name: 'Quantum Innovations',
        logo: '/img/Quantum.png',
        director: 'Mike Johnson',
        description: 'Innovative solutions for the healthcare industry.',
        website: 'https://www.quantuminnovations.com',
        email: 'support@quantuminnovations.com',
        phone: '+1 800 555 0103',
      },
      {
        name: 'BlueSky Enterprises',
        logo: '/img/BlueSky.webp',
        director: 'Sara Williams',
        description: 'A multinational consumer goods company.',
        website: 'https://www.blueskyenterprises.com',
        email: 'hello@blueskyenterprises.com',
        phone: '+1 800 555 0104',
      },
      {
        name: 'SilverStone Ventures',
        logo: '/img/SilverStone.png',
        director: 'David Brown',
        description: 'Pioneering in energy-efficient technologies.',
        website: 'https://www.silverstoneventures.com',
        email: 'contact@silverstoneventures.com',
        phone: '+1 800 555 0105',
      },
      {
        name: 'Phoenix Labs',
        logo: '/img/Phoenix.png',
        director: 'Emily Davis',
        description: 'Transforming education through digital learning platforms.',
        website: 'https://www.phoenixlabs.com',
        email: 'info@phoenixlabs.com',
        phone: '+1 800 555 0106',
      },
    ];

    // Return the fallback data if the database query fails
    return new Response(JSON.stringify(fallbackClients), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
}
