import './Blog.css'

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
                <p>{post.content}</p>
                <p><b>by {post.author} </b> - {post.date} at {post.time}</p>
            </div>
         ))}
         </div>
        </div>
       );
}

export default Blog;