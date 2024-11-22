import './Blog.css'
import { Link } from 'react-router-dom'; 

function Blog() {
    const posts = [
        {
            id: 1,
            image: '/images/ferenc-almasi-c8h0n7fSTqs-unsplash.jpg',
            title: 'Learning React', 
            content: 'React is a powerful JavaScript library for building user interfaces', 
            author: 'John Doe',
            date: '2024-11-18',
            time: '11.00 AM'
        },
           
        {
            id: 2,
            image: '/images/lautaro-andreani-UYsBCu9RP3Y-unsplash.jpg',
            title: 'Getting Started with Vite', 
            content: 'Vite makes development fast and simple', 
            author: 'Jane Smith',
            date: '2024-11-18',
            time: '11.00 AM'
        }
    ]
    return (
        <div className='blog'>
         <h1>Blog Posts</h1>
         <div className='grid'>
         {posts.map((post, index) => (
            <div key={index} className='card'>
                <img src={post.image} alt={post.title}  className='w-full h-40 object-cover rounded-md mb-4'/>
                <h2>{post.title}</h2>
                <p><b>by {post.author} </b> </p>
                <Link to={`/blog/${post.id}`} state={ post} className='text-blue-500 hover:underline mt-2 block'>
                    Read More
                </Link>
            </div>
         ))}
         </div>
        </div>
       );
}

export default Blog;