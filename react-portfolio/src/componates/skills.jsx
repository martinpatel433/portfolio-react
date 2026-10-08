const skills = [
    { name: "HTML", level: "Semantic structure", mark: "5", tone: "blue" },
    { name: "CSS", level: "Responsive styling", mark: "CSS", tone: "indigo" },
    { name: "JavaScript", level: "Interactive experiences", mark: "JS", tone: "yellow" },
    { name: "Bootstrap", level: "Fast UI systems", mark: "B", tone: "violet" },
    { name: "React", level: "Component architecture", mark: "R", tone: "cyan" },
    { name: "Git", level: "Version control", mark: "G", tone: "orange" }
];

export default function Skills() {
    return (
        <section id="skills" className="skills-section">
            <div className="skills-inner">
                <div className="skills-heading">
                    <p className="skills-eyebrow">What I work with</p>
                    <h2>My Skills</h2>
                    <p>Tools and technologies I use to turn ideas into clean, responsive web experiences.</p>
                </div>

                <div className="skills-grid">
                    {skills.map((skill) => (
                        <div className="skill-card" key={skill.name}>
                            <div className={`skill-mark ${skill.tone}`} aria-hidden="true">{skill.mark}</div>
                            <div>
                                <h3>{skill.name}</h3>
                                <p>{skill.level}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
