import { query } from '../../db/connection.js';

export async function GET() {
  try {
    // Attempt to fetch blogs from the database
    const result = await query("SELECT * FROM blogs");
    const blogs = result.rows;

    // Return blogs if data is successfully fetched
    return new Response(JSON.stringify(blogs), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);

    // Fallback data if the database is unavailable
    const fallbackBlogs = [
      {
        author: 'Prabhash Mishra',
        date: '2023-01-01',
        title: 'Small Business & Startup',
        description: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
        tags: ['Tax & Audit', 'Management'],
        image: '/img/blog1.png',
      },
      {
        author: 'Mahesh Kumar',
        date: '2023-01-01',
        title: 'Scale-Up Company Offer',
        description: 'Mental models are simple expressions of complex processes or relationships.',
        tags: ['Tax', 'Research', 'Compliance'],
        image: '/img/blog2.png',
      },
      {
        author: 'Rakhi Verma',
        date: '2023-01-01',
        title: 'Growing Business Package',
        description: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
        tags: ['Audit', 'Money Back'],
        image: '/img/blog1.png',
      },
      {
        author: 'Karan Kumar',
        date: '2023-01-01',
        title: 'Scale-Up Company Offer',
        description: 'Collaboration can make our teams stronger, and our individual designs better.',
        tags: ['Money', 'Management'],
        image: '/img/blog4.png',
      },
      {
        author: 'Richa Singh',
        date: '2023-01-01',
        title: 'Scale-Up Company Offer',
        description: 'JavaScript frameworks make development easy with extensive features and functionalities.',
        tags: ['Tax Return', 'News', 'Audit'],
        image: '/img/blog5.png',
      },
      {
        author: 'Miss Nora',
        date: '2023-01-01',
        title: 'Scale-Up Company Offer',
        description: 'Starting a community doesn’t need to be complicated, but how do you get started?',
        tags: ['Private Limited Company', 'Customer Success'],
        image: '/img/blog6.png',
      },
    ];

    // Return fallback data if the database query fails
    return new Response(JSON.stringify(fallbackBlogs), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
}
