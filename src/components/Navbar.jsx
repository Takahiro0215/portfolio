import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/useLanguage";
import { ThemeToggle } from "@/components/ThemeToggle";

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
            setIsScrolled(window.scrollY > 10);
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
                {/* Logo */}
                <a
                    href="#hero"
                    className="text-xl font-bold text-primary flex items-center"
                >
                    <span className="text-glow text-foreground">Takahiro</span>
                    &nbsp;Portfolio
                </a>

                {/* ===== Desktop ===== */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item.key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors"
                        >
                            {t.nav[item.key]}
                        </a>
                    ))}

                    {/* Language (desktop) */}
                    <div className="flex items-center gap-2">
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

                    {/* Theme (desktop) */}
                    <ThemeToggle />
                </div>

                {/* ===== Mobile button ===== */}
                <button
                    onClick={() => setIsMenuOpen((p) => !p)}
                    className="md:hidden p-2 z-50"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* ===== Mobile menu ===== */}
                <div
                    className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex items-center justify-center md:hidden transition-all",
                        isMenuOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col items-center space-y-8 text-xl">
                        {navItems.map((item) => (
                            <a
                                key={item.key}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-foreground/80 hover:text-primary"
                            >
                                {t.nav[item.key]}
                            </a>
                        ))}

                        {/* Language (mobile) */}
                        <div className="flex items-center gap-4 pt-6 border-t border-border w-full justify-center">
                            <button
                                onClick={() => {
                                    switchLanguage("en");
                                    setIsMenuOpen(false);
                                }}
                                className={
                                    lang === "en"
                                        ? "text-primary font-semibold"
                                        : "text-foreground/60"
                                }
                            >
                                EN
                            </button>
                            <span className="text-foreground/40">|</span>
                            <button
                                onClick={() => {
                                    switchLanguage("fr");
                                    setIsMenuOpen(false);
                                }}
                                className={
                                    lang === "fr"
                                        ? "text-primary font-semibold"
                                        : "text-foreground/60"
                                }
                            >
                                FR
                            </button>
                        </div>

                        {/* Theme (mobile) */}
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
};
