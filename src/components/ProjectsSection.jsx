import { ArrowRight, Github } from "lucide-react";
import { useLanguage } from "../context/useLanguage";

const projects = [
    {
        id: "portfolio",
        image: "/projects/portfolio.png",
        tags: [
            "React",
            "Vite",
            "JavaScript",
            "Tailwind CSS",
            "Context API",
            "i18n",
        ],
        githubUrl: "#",
    },
    {
        id: "quiz",
        image: "/projects/quiz1.png",
        tags: ["HTML", "CSS", "JavaScript", "React"],
        githubUrl: "#",
    },
    {
        id: "recipes",
        image: "/projects/recette1.png",
        tags: ["HTML", "CSS", "TypeScript", "Angular"],
        githubUrl: "#",
    },
];

export const ProjectSection = () => {
    const { t } = useLanguage();

    return (
        <section id="projects" className="py-24 px-4 relative scroll-mt-24">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {t.projects.titlePrefix}{" "}
                    <span className="text-primary">
                        {t.projects.titleHighlight}
                    </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    {t.projects.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={t.projects.items[project.id].title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-2">
                                    {t.projects.items[project.id].title}
                                </h3>

                                <p className="text-muted-foreground text-sm mb-4">
                                    {t.projects.items[project.id].description}
                                </p>

                                <div className="flex justify-between items-center">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/Takahiro0215"
                    >
                        {t.projects.githubButton}
                        <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};
