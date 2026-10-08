
export default function Work() {
    const projects = [
        {
            title: "Flipkart Copy",
            category: "HTML",
            image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=1200&q=85"
        },
        {
            title: "Casino Website",
            category: "HTML",
            image: "https://images.unsplash.com/photo-1518893883800-45cd0954574b?auto=format&fit=crop&w=1200&q=85"
        },
        {
            title: "Chess Board",
            category: "HTML / CSS",
            image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&w=1200&q=85"
        },
        {
            title: "Netflix Replica",
            category: "HTML / CSS / Bootstrap",
            image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=1200&q=85"
        },
        {
            title: "E-Grocery Super Market",
            category: "HTML / CSS",
            image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85"
        },
        {
            title: "PrimeVideos Replica",
            category: "HTML / CSS",
            image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=85"
        }
    ];

    return (
        <section id="portfolio">
            <div>
                <div>
                    <h2>My Work</h2>
                    <div />
                    <p>A selection of websites and interfaces I have built while learning and working with modern frontend technologies.</p>
                </div>

                <div className="work-grid">
                    {projects.map((project) => (
                        <a key={project.title} className="work-card" href={project.image} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} project preview`}>
                            <div className="work-image">
                                <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
                            </div>
                            <div className="work-caption">
                                <h3>{project.title}</h3>
                                <p>{project.category}</p>
                            </div>
                            
                        </a>

                        
                    ))}
                </div>
            </div>
        </section>
    );
}
