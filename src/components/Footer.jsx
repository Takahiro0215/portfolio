import { ArrowUp } from "lucide-react";
import { useLanguage } from "../context/useLanguage";

export const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="py-8 px-4 bg-card border-t border-border mt-12">
            <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground text-center sm:text-left">
                    &copy; {new Date().getFullYear()} Takahiro Asami.{" "}
                    {t.footer.rights}
                </p>

                <a
                    href="#hero"
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                    aria-label="Back to top"
                >
                    <ArrowUp size={20} />
                </a>
            </div>
        </footer>
    );
};
