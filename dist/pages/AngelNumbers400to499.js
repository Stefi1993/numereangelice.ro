import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, ChevronDown, ChevronUp, Heart, DollarSign, Star, Zap, Shield, Sparkles, Target, Lightbulb, Trophy } from 'lucide-react';
const AngelNumbers400to499 = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('all');
    const [showFilters, setShowFilters] = useState(false);
    const navigate = useNavigate();
    // Generate numbers from 400 to 499
    const numbers = Array.from({ length: 100 }, (_, i) => i + 400);
    // SEO-friendly content
    const pageTitle = 'Numerele Angelice de la 400 la 499 | Ghid Complet cu Semnificații';
    const pageDescription = 'Descoperă semnificația numerelor angelice de la 400 la 499. Ghid complet cu interpretări pentru fiecare număr angelic, inclusiv semnificații spirituale, în dragoste și carieră.';
    const pageKeywords = 'numere angelice 400-499, semnificatia numerelor angelice, numere angelice dragoste, numere angelice abundenta, numere angelice spiritualitate';
    // Frequent numbers with their categories and icons
    const frequentNumbers = [
        { number: 444, category: 'Spiritualitate', icon: Sparkles, color: 'purple' },
        { number: 456, category: 'Progres', icon: Target, color: 'blue' },
        { number: 468, category: 'Abundență', icon: DollarSign, color: 'green' },
        { number: 477, category: 'Schimbare', icon: Zap, color: 'yellow' },
        { number: 488, category: 'Dragoste', icon: Heart, color: 'pink' },
        { number: 499, category: 'Înțelepciune', icon: Lightbulb, color: 'indigo' },
        { number: 422, category: 'Abundență', icon: DollarSign, color: 'green' },
        { number: 433, category: 'Completare', icon: Trophy, color: 'amber' }
    ];
    // Popular combinations
    const popularCombinations = [
        { number: '401', category: 'Început Nou', icon: Star, color: 'yellow' },
        { number: '411', category: 'Pace', icon: Shield, color: 'blue' },
        { number: '421', category: 'Creativitate', icon: Sparkles, color: 'purple' },
        { number: '431', category: 'Stabilitate', icon: Target, color: 'green' },
        { number: '441', category: 'Schimbare', icon: Zap, color: 'yellow' },
        { number: '451', category: 'Armonie', icon: Heart, color: 'pink' },
        { number: '461', category: 'Înțelepciune', icon: Lightbulb, color: 'indigo' },
        { number: '471', category: 'Abundență', icon: DollarSign, color: 'green' },
        { number: '481', category: 'Completare', icon: Trophy, color: 'amber' }
    ];
    const handleSearch = (e) => {
        e.preventDefault();
        const num = parseInt(searchQuery);
        if (!isNaN(num) && num >= 400 && num <= 499) {
            navigate(`/semnificatia-numarului-angelic-${num}`);
        }
        else {
            navigate('/numerele-angelice-de-la-400-la-499');
        }
    };
    const getColorClasses = (color) => {
        switch (color) {
            case 'purple': return 'bg-purple-50 text-purple-700 border-purple-200';
            case 'blue': return 'bg-blue-50 text-blue-700 border-blue-200';
            case 'green': return 'bg-green-50 text-green-700 border-green-200';
            case 'yellow': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
            case 'pink': return 'bg-pink-50 text-pink-700 border-pink-200';
            case 'indigo': return 'bg-indigo-50 text-indigo-700 border-indigo-200';
            case 'amber': return 'bg-amber-50 text-amber-700 border-amber-200';
            default: return 'bg-gray-50 text-gray-700 border-gray-200';
        }
    };
    const getNumberType = (number) => {
        if (number % 11 === 0)
            return 'master';
        if (number % 10 === 0)
            return 'special';
        if (number % 9 === 0)
            return 'powerful';
        return 'regular';
    };
    const filteredNumbers = activeFilter === 'all'
        ? numbers
        : numbers.filter(num => {
            if (activeFilter === 'master')
                return num % 11 === 0;
            if (activeFilter === 'special')
                return num % 10 === 0;
            if (activeFilter === 'powerful')
                return num % 9 === 0;
            return true;
        });
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: pageTitle }), _jsx("meta", { name: "description", content: pageDescription }), _jsx("meta", { name: "keywords", content: pageKeywords })] }), _jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsx("h1", { className: "text-3xl md:text-4xl font-bold text-center mb-6", children: "Numerele Angelice de la 400 la 499" }), _jsx("p", { className: "text-lg text-center text-gray-600 mb-8 max-w-3xl mx-auto", children: "Descoper\u0103 semnifica\u021Bia numerelor angelice de la 400 la 499. Fiecare num\u0103r poart\u0103 un mesaj unic de la \u00EEngerii p\u0103zitori." }), _jsxs("div", { className: "max-w-2xl mx-auto mb-12 bg-white rounded-lg shadow-md p-6", children: [_jsx("h2", { className: "text-xl font-semibold mb-4 text-center", children: "Caut\u0103 un Num\u0103r Angelic" }), _jsxs("form", { onSubmit: handleSearch, className: "flex gap-2", children: [_jsx("input", { type: "text", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), placeholder: "Introdu un num\u0103r \u00EEntre 400 \u0219i 499", className: "flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" }), _jsx("button", { type: "submit", className: "bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors", children: _jsx(Search, { className: "w-5 h-5" }) })] })] }), _jsxs("div", { className: "bg-white rounded-lg shadow-md p-6 mb-12", children: [_jsx("h2", { className: "text-xl font-semibold mb-4", children: "Ghid Rapid de Referin\u021B\u0103" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold mb-3 text-gray-800", children: "Categorii de Numere" }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "w-4 h-4 rounded-full bg-purple-500 mr-2" }), _jsx("span", { className: "text-sm", children: "Numere Master (444, 455, 466)" })] }), _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "w-4 h-4 rounded-full bg-blue-500 mr-2" }), _jsx("span", { className: "text-sm", children: "Numere Speciale (400, 410, 420)" })] }), _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "w-4 h-4 rounded-full bg-green-500 mr-2" }), _jsx("span", { className: "text-sm", children: "Numere Puternice (405, 414, 423)" })] }), _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "w-4 h-4 rounded-full bg-pink-500 mr-2" }), _jsx("span", { className: "text-sm", children: "Numere Oglind\u0103 (401, 411, 421)" })] }), _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "w-4 h-4 rounded-full bg-gray-400 mr-2" }), _jsx("span", { className: "text-sm", children: "Numere Angelice Standard" })] })] })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold mb-3 text-gray-800", children: "Cum s\u0103 Interpretezi Numerele" }), _jsxs("ul", { className: "text-sm space-y-2 list-disc pl-4", children: [_jsx("li", { children: "Acorda aten\u021Bie contextului \u00EEn care vezi num\u0103rul" }), _jsx("li", { children: "Observ\u0103 emo\u021Biile pe care le sim\u021Bi c\u00E2nd vezi num\u0103rul" }), _jsx("li", { children: "Identific\u0103 pattern-urile care apar \u00EEn via\u021Ba ta" }), _jsx("li", { children: "Folose\u0219te intui\u021Bia ta pentru interpretare" }), _jsx("li", { children: "Combin\u0103 mai multe numere pentru mesaje complexe" })] })] })] })] }), _jsxs("div", { className: "mb-12", children: [_jsx("h2", { className: "text-2xl font-semibold mb-6", children: "Numere Angelice Frecvente" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: frequentNumbers.map(({ number, category, icon: Icon, color }) => (_jsxs(Link, { to: `/semnificatia-numarului-angelic-${number}`, className: `group p-6 rounded-lg border transition-transform hover:scale-105 ${getColorClasses(color)}`, children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: `p-2 rounded-full bg-white mr-3 ${color === 'purple' ? 'text-purple-600' : color === 'blue' ? 'text-blue-600' : color === 'green' ? 'text-green-600' : color === 'yellow' ? 'text-yellow-600' : color === 'pink' ? 'text-pink-600' : color === 'indigo' ? 'text-indigo-600' : 'text-amber-600'}`, children: _jsx(Icon, { className: "w-5 h-5" }) }), _jsx("h3", { className: "text-2xl font-bold", children: number })] }), _jsx("span", { className: "text-sm font-medium px-3 py-1 rounded-full bg-white", children: category })] }), _jsxs("p", { className: "text-sm opacity-80", children: [number === 444 && "Număr master de spiritualitate și intuiție", number === 456 && "Număr secvențial de progres și evoluție", number === 468 && "Număr de abundență și prosperitate", number === 477 && "Număr de schimbare și transformare", number === 488 && "Număr de dragoste și armonie", number === 499 && "Număr de înțelepciune și claritate spirituală", number === 422 && "Număr de abundență materială și spirituală", number === 433 && "Număr de completare și finalizare"] }), _jsx("div", { className: "mt-4 flex justify-end", children: _jsx("span", { className: "text-sm font-medium group-hover:underline", children: "Exploreaz\u0103 \u2192" }) })] }, number))) })] }), _jsxs("div", { className: "mb-12", children: [_jsx("h2", { className: "text-2xl font-semibold mb-6", children: "Combina\u021Bii Populare" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "bg-white p-6 rounded-xl shadow-md border border-purple-100", children: [_jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "Numerele Master" }), _jsxs("div", { className: "flex flex-wrap gap-2 mb-4", children: [_jsx(Link, { to: "/semnificatia-numarului-angelic-444", className: "px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors", children: "444" }), _jsx(Link, { to: "/semnificatia-numarului-angelic-455", className: "px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors", children: "455" }), _jsx(Link, { to: "/semnificatia-numarului-angelic-466", className: "px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors", children: "466" })] }), _jsx("p", { className: "text-gray-600", children: "Aceast\u0103 secven\u021B\u0103 indic\u0103 o perioad\u0103 de transformare spiritual\u0103 profund\u0103 \u0219i manifestare." })] }), _jsxs("div", { className: "bg-white p-6 rounded-xl shadow-md border border-purple-100", children: [_jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "Numerele Oglind\u0103" }), _jsxs("div", { className: "flex flex-wrap gap-2 mb-4", children: [_jsx(Link, { to: "/semnificatia-numarului-angelic-401", className: "px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors", children: "401" }), _jsx(Link, { to: "/semnificatia-numarului-angelic-411", className: "px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors", children: "411" }), _jsx(Link, { to: "/semnificatia-numarului-angelic-421", className: "px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors", children: "421" })] }), _jsx("p", { className: "text-gray-600", children: "Aceast\u0103 combina\u021Bie sugereaz\u0103 c\u0103 trebuie s\u0103 prive\u0219ti situa\u021Bia din dou\u0103 perspective diferite." })] }), _jsxs("div", { className: "bg-white p-6 rounded-xl shadow-md border border-purple-100", children: [_jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "Numerele de Stabilitate" }), _jsxs("div", { className: "flex flex-wrap gap-2 mb-4", children: [_jsx(Link, { to: "/semnificatia-numarului-angelic-431", className: "px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors", children: "431" }), _jsx(Link, { to: "/semnificatia-numarului-angelic-441", className: "px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors", children: "441" }), _jsx(Link, { to: "/semnificatia-numarului-angelic-451", className: "px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors", children: "451" })] }), _jsx("p", { className: "text-gray-600", children: "Aceast\u0103 secven\u021B\u0103 indic\u0103 o perioad\u0103 de consolidare \u0219i armonie \u00EEn via\u021Ba ta." })] }), _jsxs("div", { className: "bg-white p-6 rounded-xl shadow-md border border-purple-100", children: [_jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "Numerele de Completare" }), _jsxs("div", { className: "flex flex-wrap gap-2 mb-4", children: [_jsx(Link, { to: "/semnificatia-numarului-angelic-461", className: "px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors", children: "461" }), _jsx(Link, { to: "/semnificatia-numarului-angelic-471", className: "px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors", children: "471" }), _jsx(Link, { to: "/semnificatia-numarului-angelic-481", className: "px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors", children: "481" })] }), _jsx("p", { className: "text-gray-600", children: "Aceast\u0103 combina\u021Bie sugereaz\u0103 c\u0103 un ciclu se apropie de finalizare." })] })] })] }), _jsxs("div", { className: "mb-8", children: [_jsxs("button", { onClick: () => setShowFilters(!showFilters), className: "flex items-center gap-2 text-gray-600 hover:text-gray-900", children: [_jsx(Filter, { className: "w-5 h-5" }), _jsx("span", { children: "Filtreaz\u0103 Numerele" }), showFilters ? _jsx(ChevronUp, { className: "w-4 h-4" }) : _jsx(ChevronDown, { className: "w-4 h-4" })] }), showFilters && (_jsxs("div", { className: "mt-4 flex flex-wrap gap-2", children: [_jsx("button", { onClick: () => setActiveFilter('all'), className: `px-4 py-2 rounded-full text-sm ${activeFilter === 'all'
                                            ? 'bg-purple-600 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`, children: "Toate Numerele" }), _jsx("button", { onClick: () => setActiveFilter('master'), className: `px-4 py-2 rounded-full text-sm ${activeFilter === 'master'
                                            ? 'bg-purple-600 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`, children: "Numere Master" }), _jsx("button", { onClick: () => setActiveFilter('special'), className: `px-4 py-2 rounded-full text-sm ${activeFilter === 'special'
                                            ? 'bg-purple-600 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`, children: "Numere Speciale" }), _jsx("button", { onClick: () => setActiveFilter('powerful'), className: `px-4 py-2 rounded-full text-sm ${activeFilter === 'powerful'
                                            ? 'bg-purple-600 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`, children: "Numere Puternice" })] }))] }), _jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4", children: filteredNumbers.map((number) => {
                            const type = getNumberType(number);
                            const isMaster = type === 'master';
                            const isSpecial = type === 'special';
                            const isPowerful = type === 'powerful';
                            return (_jsxs(Link, { to: `/semnificatia-numarului-angelic-${number}`, className: `p-4 rounded-lg border text-center transition-transform hover:scale-105 ${isMaster
                                    ? 'bg-purple-50 border-purple-200 text-purple-700'
                                    : isSpecial
                                        ? 'bg-blue-50 border-blue-200 text-blue-700'
                                        : isPowerful
                                            ? 'bg-green-50 border-green-200 text-green-700'
                                            : 'bg-gray-50 border-gray-200 text-gray-700'}`, children: [_jsx("span", { className: "font-semibold text-lg", children: number }), isMaster && _jsx("div", { className: "text-xs mt-1", children: "Num\u0103r Master" }), isSpecial && _jsx("div", { className: "text-xs mt-1", children: "Num\u0103r Special" }), isPowerful && _jsx("div", { className: "text-xs mt-1", children: "Num\u0103r Puternic" })] }, number));
                        }) }), _jsxs("div", { className: "mt-12 bg-white rounded-lg shadow-md p-6", children: [_jsx("h2", { className: "text-xl font-semibold mb-4", children: "Cum s\u0103 Interpretezi Numerele Angelice" }), _jsxs("div", { className: "prose max-w-none", children: [_jsx("p", { children: "Numerele angelice sunt mesaje de la \u00EEngerii p\u0103zitori care ne ghideaz\u0103 \u00EEn via\u021Ba noastr\u0103. C\u00E2nd vezi un num\u0103r angelic, este important s\u0103:" }), _jsxs("ul", { children: [_jsx("li", { children: "Fie atent la contextul \u00EEn care apare num\u0103rul" }), _jsx("li", { children: "Notezi sentimentele \u0219i g\u00E2ndurile tale \u00EEn acel moment" }), _jsx("li", { children: "Meditezi asupra semnifica\u021Biei num\u0103rului" }), _jsx("li", { children: "Ac\u021Bionezi conform ghid\u0103rii primite" })] }), _jsx("p", { children: "Fiecare num\u0103r angelic poart\u0103 un mesaj unic \u0219i personal. De\u0219i exist\u0103 interpret\u0103ri generale, semnifica\u021Bia exact\u0103 poate varia \u00EEn func\u021Bie de circumstan\u021Bele tale." })] })] })] })] }));
};
export default AngelNumbers400to499;
