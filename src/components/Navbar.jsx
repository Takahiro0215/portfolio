import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/useLanguage";

const navItems = [
    { key: "home", href: "#hero" },
    { key: "about", href: "#about" },
    { key: "skills", href: "#skills" },
    { key: "projects", href: "#projects" },
    { key: "contact", href: "#contact" },
];

export const Navbar = () => {
    const { lang, t, switchLanguage } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <nav
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                isScrolled
                    ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
                    : "py-5"
            )}
        >
            <div className="container flex items-center justify-between">
                <a
                    className="text-xl font-bold text-primary flex items-center"
                    href="#hero"
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">
                            Takahiro
                        </span>
                        Portfolio
                    </span>
                </a>

                {/* desktop */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            {t.nav[item.key]}
                        </a>
                    ))}

                    <div className="hidden md:flex items-center gap-2 ml-6">
                        <button
                            onClick={() => switchLanguage("en")}
                            className={`text-sm ${
                                lang === "en"
                                    ? "text-primary font-semibold"
                                    : "text-foreground/60"
                            }`}
                        >
                            EN
                        </button>

                        <span className="text-foreground/40">|</span>

                        <button
                            onClick={() => switchLanguage("fr")}
                            className={`text-sm ${
                                lang === "fr"
                                    ? "text-primary font-semibold"
                                    : "text-foreground/60"
                            }`}
                        >
                            FR
                        </button>
                    </div>
                </div>

                {/* mobile */}

                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
                </button>

                <div
                    className={cn(
                        "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t.nav[item.key]}
                            </a>
                        ))}

                        <div className="hidden md:flex items-center gap-2 ml-6">
                            <button
                                onClick={() => switchLanguage("en")}
                                className={`text-sm ${
                                    lang === "en"
                                        ? "text-primary font-semibold"
                                        : "text-foreground/60"
                                }`}
                            >
                                EN
                            </button>

                            <span className="text-foreground/40">|</span>

                            <button
                                onClick={() => switchLanguage("fr")}
                                className={`text-sm ${
                                    lang === "fr"
                                        ? "text-primary font-semibold"
                                        : "text-foreground/60"
                                }`}
                            >
                                FR
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
