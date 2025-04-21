import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Search } from 'lucide-react';
import { toast } from 'sonner';
import { FC } from 'react';

const AngelNumber416: FC = () => {
    const [content, setContent] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const navigate = useNavigate();
    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await fetch('/src/articole/numar_angelic_416_generated.txt');
                if (!response.ok) {
                    throw new Error('Failed to fetch content');
                }
                const text = await response.text();
                setContent(text);
            }
            catch (error) {
                console.error('Error fetching content:', error);
                toast.error('Nu am putut încărca conținutul. Vă rugăm să încercați din nou.');
            }
            finally {
                setLoading(false);
            }
        };
        fetchContent();
    }, []);
    const handleShare = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: 'Semnificația numărului angelic 416',
                    text: 'Descoperă semnificația numărului angelic 416',
                    url: window.location.href,
                });
            }
            else {
                await navigator.clipboard.writeText(window.location.href);
                toast.success('Link-ul a fost copiat în clipboard!');
            }
        }
        catch (error) {
            console.error('Error sharing:', error);
        }
    };
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            const number = parseInt(searchQuery.trim(), 10);
            if (!isNaN(number) && number >= 0 && number <= 999) {
                if (number === 416) {
                    // Already on the page for this number
                    toast.info('Ești deja pe pagina numărului angelic 416');
                }
                else {
                    navigate(`/semnificatia-numarului-angelic-${number}`);
                }
            }
            else {
                toast.error('Te rugăm să introduci un număr valid între 0 și 999');
            }
        }
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "Semnifica\u021Bia num\u0103rului angelic 416 | Mesajul \u00CEngerilor" }), _jsx("meta", { name: "description", content: "Descoper\u0103 semnifica\u021Bia profund\u0103 a num\u0103rului angelic 416 \u0219i mesajul special pe care \u00EEngerii \u00EEl transmit prin intermediul acestui num\u0103r." }), _jsx("meta", { name: "keywords", content: "num\u0103r angelic 416, semnifica\u021Bie 416, mesaj \u00EEngeri 416, semnificatia numarului 416, numarul angelic 416, de ce vad numarul 416, semnificatia numarului angelic 416, Mesajul ingerilor prin intermediul numarului 416, Semnificatie spirituala 416, numerologie 416, numar inger 416" }), _jsx("meta", { property: "og:type", content: "article" }), _jsx("meta", { property: "og:title", content: "Semnifica\u021Bia num\u0103rului angelic 416 | Mesajul \u00CEngerilor" }), _jsx("meta", { property: "og:description", content: "Descoper\u0103 semnifica\u021Bia profund\u0103 a num\u0103rului angelic 416 \u0219i mesajul special pe care \u00EEngerii \u00EEl transmit prin intermediul acestui num\u0103r." }), _jsx("meta", { property: "og:image", content: "/src/images/semnificatia-numarului-angelic-416.jpg" }), _jsx("meta", { name: "twitter:card", content: "summary_large_image" }), _jsx("meta", { name: "twitter:title", content: "Semnifica\u021Bia num\u0103rului angelic 416 | Mesajul \u00CEngerilor" }), _jsx("meta", { name: "twitter:description", content: "Descoper\u0103 semnifica\u021Bia profund\u0103 a num\u0103rului angelic 416 \u0219i mesajul special pe care \u00EEngerii \u00EEl transmit prin intermediul acestui num\u0103r." }), _jsx("meta", { name: "twitter:image", content: "/src/images/semnificatia-numarului-angelic-416.jpg" })] }), _jsxs("div", { className: "max-w-4xl mx-auto px-4 py-8", children: [_jsxs("div", { className: "mb-6 flex items-center justify-between", children: [_jsxs("button", { onClick: () => navigate(-1), className: "flex items-center text-purple-600 hover:text-purple-800 transition-colors", children: [_jsx(ArrowLeft, { className: "mr-2", size: 20 }), "\u00CEnapoi"] }), _jsxs("button", { onClick: handleShare, className: "flex items-center text-purple-600 hover:text-purple-800 transition-colors", children: [_jsx(Share2, { className: "mr-2", size: 20 }), "Distribuie"] })] }), _jsx("h1", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center", children: "Semnifica\u021Bia num\u0103rului angelic 416" }), _jsx("div", { className: "bg-white rounded-xl shadow-md overflow-hidden mb-8", children: _jsx("img", { src: "/src/images/semnificatia-numarului-angelic-416.jpg", alt: "Semnifica\u021Bia num\u0103rului angelic 416", className: "w-full h-auto object-cover" }) }), loading ? (_jsx("div", { className: "flex justify-center items-center py-12", children: _jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500" }) })) : (_jsx("div", { className: "prose prose-lg max-w-none", dangerouslySetInnerHTML: { __html: content } })), _jsxs("div", { className: "mt-12 bg-purple-50 p-6 rounded-xl border border-purple-100", children: [_jsx("h2", { className: "text-xl font-bold text-gray-900 mb-4", children: "Alte Numere Angelice Populare" }), _jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6", children: [11, 22, 33, 111, 222, 333, 444, 555].map((number) => (_jsx("button", { onClick: () => navigate(`/semnificatia-numarului-angelic-${number}`), className: "bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center font-medium text-purple-700 border border-purple-100", children: number }, number))) }), _jsxs("div", { className: "mt-6 pt-6 border-t border-purple-200", children: [_jsx("h3", { className: "text-lg font-bold text-gray-900 mb-4", children: "Caut\u0103 un Num\u0103r Angelic (0-999)" }), _jsxs("form", { onSubmit: handleSearch, className: "flex flex-col sm:flex-row gap-2", children: [_jsxs("div", { className: "relative flex-grow", children: [_jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: _jsx(Search, { className: "h-5 w-5 text-gray-400" }) }), _jsx("input", { type: "number", min: "0", max: "999", value: searchQuery, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value), placeholder: "Introdu un num\u0103r \u00EEntre 0 \u0219i 999", className: "block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500" })] }), _jsx("button", { type: "submit", className: "bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors", children: "Caut\u0103" })] }), _jsx("p", { className: "mt-2 text-sm text-gray-500", children: "Exemplu: \"11\", \"222\", \"333\", \"444\"" })] })] })] })] }));
};
export default AngelNumber416;
