import {
    Mail,
    Phone,
    Map,
    Linkedin,
    Instagram,
    Facebook,
    Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useLanguage } from "../context/useLanguage";

export const ContactSection = () => {
    const { t } = useLanguage();
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: t.contact.toastTitle,
                description: t.contact.toastDescription,
            });
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <section
            id="contact"
            className="py-24 px-4 relative bg-secondary/30 scroll-mt-24"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {t.contact.titlePrefix}{" "}
                    <span className="text-primary">
                        {t.contact.titleHighlight}
                    </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    {t.contact.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            {t.contact.infoTitle}
                        </h3>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">
                                        {t.contact.email}
                                    </h4>
                                    <a
                                        href="mailto:takahiroasami02@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        takahiroasami02@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">
                                        {t.contact.phone}
                                    </h4>
                                    <a
                                        href="tel:(438)-728-7314"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        (438) 728-7314
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Map className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">
                                        {t.contact.location}
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Montreal, QC, Canada
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">
                                {t.contact.connect}
                            </h4>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.linkedin.com/in/takahiro-asami-76171b293/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Linkedin />
                                </a>
                                <a
                                    href="https://www.instagram.com/real_takahiro"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Instagram />
                                </a>
                                <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Facebook />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">
                            {t.contact.formTitle}
                        </h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    {t.contact.nameLabel}
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder={t.contact.namePlaceholder}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    {t.contact.emailLabel}
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder={t.contact.emailPlaceholder}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    {t.contact.messageLabel}
                                </label>
                                <textarea
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder={t.contact.messagePlaceholder}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2"
                                )}
                            >
                                {isSubmitting
                                    ? t.contact.sending
                                    : t.contact.send}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
