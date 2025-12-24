import { Briefcase, Code, User } from "lucide-react";
import { useLanguage } from "../context/useLanguage";

export const AboutSection = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-24 px-4 relative scroll-mt-24">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    {t.about.titlePrefix}{" "}
                    <span className="text-primary">
                        {t.about.titleHighlight}
                    </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            {t.about.subtitle}
                        </h3>

                        <p className="text-muted-foreground">
                            {t.about.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {t.about.ctaContact}
                            </a>

                            <a
                                href="/cv/Takahiro_Asami_CV_Frontend.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                {t.about.ctaCV}
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        {t.about.cards.frontend.title}
                                    </h4>
                                    <p className="text-muted-foreground">
                                        {t.about.cards.frontend.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        {t.about.cards.backend.title}
                                    </h4>
                                    <p className="text-muted-foreground">
                                        {t.about.cards.backend.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        {t.about.cards.learning.title}
                                    </h4>
                                    <p className="text-muted-foreground">
                                        {t.about.cards.learning.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
