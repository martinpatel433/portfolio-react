import { ArrowRight } from 'lucide-react';

export default function Slider() {
    return (
        <section id="home">
            <div>
                <div>
                    <div>
                        <div>
                            <span>FRONTEND DEVELOPER</span>
                            <h1>Hi, I am Martin. I build clean digital experiences.</h1>
                            <p>I create simple, responsive, and user-friendly websites with modern web technologies.</p>
                            <div>
                                <a href="#portfolio">View My Work <ArrowRight size={16} /></a>
                                <a href="#contact">Contact Me</a>
                            </div>
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85" alt="Martin's web development workspace" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
