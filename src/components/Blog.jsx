import './Blog.css'

function Blog() {
    const posts = [
        {title: 'Learning React', content: 'React is a powerful JavaScript library for building user interfaces', author: 'John Doe'},
        {title: 'Getting Started with Vite', content: 'Vite makes development fast and simple', author: 'Jane Smith'}
    ]
    return (
        <div className='blog'>
         <h1>Blog Posts</h1>
         <div className='grid'>
         {posts.map((post, index) => (
            <div key={index} className='card'>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <p><b>by {post.author}</b></p>
            </div>
         ))}
         </div>
        </div>
       );
}

export default Blog;