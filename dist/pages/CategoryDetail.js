import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ChevronRight } from 'lucide-react';
// Define categories for angel numbers (same as in Category.tsx)
const categories = [
    {
        id: 'master',
        title: 'Numere Master',
        description: 'Numerele master (11, 22, 33) sunt cele mai puternice și au o vibrație spirituală intensă.',
        numbers: [11, 22, 33],
        color: 'purple',
        longDescription: 'Numerele master sunt considerate cele mai puternice și mai semnificative în numerologie. Ele conțin o vibrație spirituală intensă și sunt adesea asociate cu un potențial spiritual ridicat. Când aceste numere apar în viața ta, indică faptul că ești pe calea corectă și că îngerii te ghidează spre un scop mai înalt.',
    },
    {
        id: 'triple',
        title: 'Numere Triple',
        description: 'Numerele triple (111, 222, 333, etc.) sunt mesaje clare de la îngeri care necesită atenție imediată.',
        numbers: [111, 222, 333, 444, 555, 666, 777, 888, 999],
        color: 'blue',
        longDescription: 'Numerele triple sunt formate din aceeași cifră repetată de trei ori. Ele sunt mesaje clare și directe de la îngeri care necesită atenție imediată. Fiecare număr triple are propria sa vibrație și semnificație, dar toate indică o conexiune puternică cu lumea spirituală și un mesaj important pentru tine.',
    },
    {
        id: 'repeating',
        title: 'Numere Repetitive',
        description: 'Numerele repetitive (1212, 2323, etc.) indică cicluri și pattern-uri în viața ta.',
        numbers: [1212, 2323, 3434, 4545, 5656, 6767, 7878, 8989],
        color: 'green',
        longDescription: 'Numerele repetitive sunt formate din două cifre care se repetă. Ele indică cicluri și pattern-uri în viața ta și sugerează că anumite situații sau lecții se pot repeta până când le înveți pe deplin. Aceste numere te încurajează să fii atent la pattern-urile din viața ta și să înveți din experiențe.',
    },
    {
        id: 'sequential',
        title: 'Numere Secvențiale',
        description: 'Numerele secvențiale (123, 234, 345, etc.) indică progres și evoluție.',
        numbers: [123, 234, 345, 456, 567, 678, 789],
        color: 'amber',
        longDescription: 'Numerele secvențiale sunt formate din cifre consecutive. Ele indică progres, evoluție și mișcare înainte. Când aceste numere apar în viața ta, sugerează că ești pe calea corectă și că progresezi în mod natural spre scopurile tale. Ele te încurajează să continui în direcția în care te afli.',
    },
    {
        id: 'mirror',
        title: 'Numere Oglindă',
        description: 'Numerele oglindă (1001, 2002, 3003, etc.) reflectă dualitatea și echilibrul.',
        numbers: [1001, 2002, 3003, 4004, 5005, 6006, 7007, 8008, 9009],
        color: 'pink',
        longDescription: 'Numerele oglindă sunt formate din aceeași cifră la început și la sfârșit, cu zerouri sau alte cifre în mijloc. Ele reflectă conceptul de dualitate și echilibru. Când aceste numere apar în viața ta, sugerează că este important să găsești echilibrul între diferite aspecte ale vieții tale, cum ar fi spiritual și material, interior și exterior.',
    },
];
const CategoryDetail = () => {
    const { categoryId } = useParams();
    // Find the category based on the ID
    const category = categories.find(cat => cat.id === categoryId);
    // If category not found, show a message
    if (!category) {
        return (_jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center", children: [_jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-4", children: "Categoria nu a fost g\u0103sit\u0103" }), _jsx("p", { className: "text-gray-600 mb-8", children: "Ne pare r\u0103u, dar categoria pe care o cau\u021Bi nu exist\u0103." }), _jsxs(Link, { to: "/categorii", className: "inline-flex items-center text-purple-600 hover:text-purple-800", children: [_jsx(ArrowLeft, { size: 16, className: "mr-1" }), "\u00CEnapoi la categorii"] })] }));
    }
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsxs("title", { children: [category.title, " | Numere Angelice"] }), _jsx("meta", { name: "description", content: `Explorează semnificația ${category.title.toLowerCase()}. ${category.description}` })] }), _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [_jsx("div", { className: "mb-8", children: _jsxs(Link, { to: "/categorii", className: "inline-flex items-center text-gray-600 hover:text-gray-900", children: [_jsx(ArrowLeft, { size: 16, className: "mr-1" }), "\u00CEnapoi la categorii"] }) }), _jsxs("header", { className: `bg-${category.color}-50 rounded-lg p-8 mb-12 border border-${category.color}-200`, children: [_jsx("h1", { className: `text-4xl font-bold text-${category.color}-800 mb-4`, children: category.title }), _jsx("p", { className: "text-xl text-gray-700 mb-6", children: category.description }), _jsx("p", { className: "text-gray-600", children: category.longDescription })] }), _jsxs("div", { className: "mb-12", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Numere \u00EEn aceast\u0103 categorie" }), _jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4", children: category.numbers.map((num) => (_jsx(Link, { to: `/numar-angelic/${num}`, className: `p-4 bg-white rounded-lg shadow-sm border border-${category.color}-200 hover:shadow-md transition-shadow duration-200 text-center`, children: _jsx("span", { className: `text-2xl font-bold text-${category.color}-700`, children: num }) }, num))) })] }), _jsxs("div", { className: "bg-gray-50 rounded-lg p-8 border border-gray-200", children: [_jsxs("h2", { className: "text-2xl font-bold text-gray-900 mb-4", children: ["Cum s\u0103 interpretezi ", category.title.toLowerCase()] }), _jsxs("p", { className: "text-gray-700 mb-6", children: ["C\u00E2nd observi ", category.title.toLowerCase(), " \u00EEn via\u021Ba ta, este important s\u0103 acorzi aten\u021Bie contextului \u0219i la sentimentele pe care le sim\u021Bi. Iat\u0103 c\u00E2teva sfaturi pentru interpretarea acestor numere:"] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "bg-white p-6 rounded-lg shadow-sm border border-gray-200", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-800 mb-2", children: "Contextul apari\u021Biei" }), _jsx("p", { className: "text-gray-600", children: "Fiecare num\u0103r angelic poate avea o semnifica\u021Bie diferit\u0103 \u00EEn func\u021Bie de contextul \u00EEn care apare. De exemplu, dac\u0103 vezi un num\u0103r master \u00EEn timpul unei decizii importante, acesta poate indica c\u0103 e\u0219ti pe calea corect\u0103." })] }), _jsxs("div", { className: "bg-white p-6 rounded-lg shadow-sm border border-gray-200", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-800 mb-2", children: "Intui\u021Bia ta" }), _jsx("p", { className: "text-gray-600", children: "Ascult\u0103 de intui\u021Bia ta c\u00E2nd interpretezi numerele angelice. Dac\u0103 un num\u0103r \u00EE\u021Bi atrage aten\u021Bia \u0219i sim\u021Bi o conexiune special\u0103 cu el, acesta poate avea o semnifica\u021Bie personal\u0103." })] }), _jsxs("div", { className: "bg-white p-6 rounded-lg shadow-sm border border-gray-200", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-800 mb-2", children: "Frecven\u021Ba apari\u021Biei" }), _jsx("p", { className: "text-gray-600", children: "Cu c\u00E2t un num\u0103r apare mai des, cu at\u00E2t mesajul este mai urgent \u0219i mai important. Dac\u0103 vezi acela\u0219i num\u0103r \u00EEn mod repetat, acorda-i aten\u021Bie special\u0103." })] })] })] }), _jsx("div", { className: "mt-12 text-center", children: _jsxs(Link, { to: "/calculator", className: "inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700", children: ["Calculeaz\u0103 num\u0103rul t\u0103u angelic", _jsx(ChevronRight, { size: 16, className: "ml-2" })] }) })] })] }));
};
export default CategoryDetail;
