import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const AngelNumberRange = () => {
    const { start, end } = useParams();
    // Generate SEO-friendly content based on the range
    const pageTitle = `Numere Angelice de la ${start} la ${end}`;
    const pageDescription = `Explorează semnificațiile numerelor angelice de la ${start} la ${end}. Descoperă mesajele divine și ghidarea spirituală pe care aceste numere le poartă.`;
    const pageKeywords = [
        `numere angelice ${start}-${end}`,
        `semnificatii numere ${start}-${end}`,
        `mesaje ingeri ${start}-${end}`,
        `numerologie ${start}-${end}`,
        `numere ingeri ${start}-${end}`,
        `semnificatia numerelor ${start}-${end}`,
        `ghidare spirituala ${start}-${end}`,
        `numere divine ${start}-${end}`,
        `semnificatii numerelor angelice ${start}-${end}`,
        `Mesajele ingerilor prin intermediul numerelor ${start}-${end}`
    ];
    // Generate array of numbers in the range
    const numbers = Array.from({ length: Number(end) - Number(start) + 1 }, (_, i) => Number(start) + i);
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: pageTitle }), _jsx("meta", { name: "description", content: pageDescription }), _jsx("meta", { name: "keywords", content: pageKeywords.join(', ') }), _jsx("meta", { property: "og:type", content: "website" }), _jsx("meta", { property: "og:title", content: pageTitle }), _jsx("meta", { property: "og:description", content: pageDescription }), _jsx("meta", { name: "twitter:card", content: "summary" }), _jsx("meta", { name: "twitter:title", content: pageTitle }), _jsx("meta", { name: "twitter:description", content: pageDescription })] }), _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsxs("header", { className: "text-center mb-12", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4", children: pageTitle }), _jsx("p", { className: "text-xl text-gray-600", children: "Exploreaz\u0103 semnifica\u021Biile numerelor angelice din acest interval" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: numbers.map((number) => (_jsxs(Link, { to: `/semnificatia-numarului-angelic-${number}`, className: "block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow", children: [_jsxs("h2", { className: "text-2xl font-bold text-purple-600 mb-2", children: ["Num\u0103rul Angelic ", number] }), _jsxs("p", { className: "text-gray-600", children: ["Descoper\u0103 semnifica\u021Bia \u0219i mesajele divine ale num\u0103rului ", number] })] }, number))) }), _jsx("div", { className: "my-8 p-4 bg-gray-100 text-center rounded-lg", children: "Spa\u021Biu pentru reclam\u0103" })] })] }));
};
export default AngelNumberRange;
