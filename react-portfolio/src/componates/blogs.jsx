const blogs = [
    {
        title: "rem vs em vs px - Which Unit Should You Use?",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=85"
    },
    {
        title: "What is Z-Index? Why Elements Overlap",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1000&q=85"
    },
    {
        title: "Flexbox: flex-grow & flex-shrink",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1000&q=85"
    },
    {
        title: "GitHub: A Simple Guide for Beginners",
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1000&q=85"
    }
];

export default function Blogs() {
    return (
        <section id="blogs" className="blogs-section">
            <div className="blogs-inner">
                <h2>Blogs</h2>
                <div className="blogs-grid">
                    {blogs.map((blog) => (
                        <a
                            className="blog-card"
                            href={blog.image}
                            key={blog.title}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Open ${blog.title} article`}
                        >
                            <div className="blog-image">
                                <img src={blog.image} alt="" loading="lazy" />
                            </div>
                            <h3>{blog.title}</h3>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
