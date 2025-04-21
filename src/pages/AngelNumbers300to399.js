import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, ChevronDown, ChevronUp, Heart, DollarSign, Star, Zap, Crown, Shield, Sparkles, Target, Lightbulb, Trophy } from 'lucide-react';
const AngelNumbers300to399 = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('all');
    const [showFilters, setShowFilters] = useState(false);
    const navigate = useNavigate();
    // Generate numbers from 300 to 399
    const numbers = Array.from({ length: 100 }, (_, i) => i + 300);
    // SEO-friendly content
    const pageTitle = 'Numerele Angelice de la 300 la 399 | Ghid Complet cu Semnificații';
    const pageDescription = 'Descoperă semnificația numerelor angelice de la 300 la 399. Ghid complet cu interpretări pentru fiecare număr angelic, inclusiv semnificații spirituale, în dragoste și carieră.';
    const pageKeywords = 'numere angelice 300-399, semnificatia numerelor angelice, numere angelice dragoste, numere angelice abundenta, numere angelice spiritualitate';
    // Frequent numbers with their categories and icons
    const frequentNumbers = [
        { number: 333, category: 'Spiritualitate', icon: Sparkles, color: 'purple' },
        { number: 322, category: 'Progres', icon: Target, color: 'blue' },
        { number: 311, category: 'Abundență', icon: DollarSign, color: 'green' },
        { number: 300, category: 'Schimbare', icon: Zap, color: 'yellow' },
        { number: 344, category: 'Dragoste', icon: Heart, color: 'pink' },
        { number: 355, category: 'Înțelepciune', icon: Lightbulb, color: 'indigo' },
        { number: 366, category: 'Abundență', icon: DollarSign, color: 'green' },
        { number: 377, category: 'Completare', icon: Trophy, color: 'amber' }
    ];
    // Popular combinations
    const popularCombinations = [
        { number: '301', category: 'Început Nou', icon: Star, color: 'yellow' },
        { number: '321', category: 'Pace', icon: Shield, color: 'blue' },
        { number: '331', category: 'Creativitate', icon: Sparkles, color: 'purple' },
        { number: '341', category: 'Stabilitate', icon: Target, color: 'green' },
        { number: '351', category: 'Schimbare', icon: Zap, color: 'yellow' },
        { number: '361', category: 'Armonie', icon: Heart, color: 'pink' },
        { number: '371', category: 'Înțelepciune', icon: Lightbulb, color: 'indigo' },
        { number: '381', category: 'Abundență', icon: DollarSign, color: 'green' },
        { number: '391', category: 'Completare', icon: Trophy, color: 'amber' }
    ];
    const handleSearch = (e) => {
        e.preventDefault();
        const num = parseInt(searchQuery);
        if (!isNaN(num) && num >= 300 && num <= 399) {
            navigate(`/semnificatia-numarului-angelic-${num}`);
        }
        else {
            navigate('/numerele-angelice-de-la-300-la-399');
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
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: pageTitle }), _jsx("meta", { name: "description", content: pageDescription }), _jsx("meta", { name: "keywords", content: pageKeywords })] }), _jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsx("h1", { className: "text-3xl md:text-4xl font-bold text-center mb-6", children: "Numerele Angelice de la 300 la 399" }), _jsx("p", { className: "text-lg text-center text-gray-600 mb-8 max-w-3xl mx-auto", children: "Descoper\u0103 semnifica\u021Bia numerelor angelice de la 300 la 399. Fiecare num\u0103r poart\u0103 un mesaj unic de la \u00EEngerii p\u0103zitori." }), _jsxs("div", { className: "max-w-2xl mx-auto mb-12 bg-white rounded-lg shadow-md p-6", children: [_jsx("h2", { className: "text-xl font-semibold mb-4 text-center", children: "Caut\u0103 un Num\u0103r Angelic" }), _jsxs("form", { onSubmit: handleSearch, className: "flex gap-2", children: [_jsx("input", { type: "text", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), placeholder: "Introdu un num\u0103r \u00EEntre 300 \u0219i 399", className: "flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" }), _jsx("button", { type: "submit", className: "bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors", children: _jsx(Search, { className: "w-5 h-5" }) })] })] }), _jsxs("div", { className: "bg-white rounded-lg shadow-md p-6 mb-12", children: [_jsx("h2", { className: "text-xl font-semibold mb-4", children: "Ghid Rapid de Referin\u021B\u0103" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold mb-3 text-gray-800", children: "Categorii de Numere" }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "w-4 h-4 rounded-full bg-purple-500 mr-2" }), _jsx("span", { className: "text-sm", children: "Numere Master (333, 344, 355)" })] }), _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "w-4 h-4 rounded-full bg-blue-500 mr-2" }), _jsx("span", { className: "text-sm", children: "Numere Speciale (300, 310, 320)" })] }), _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "w-4 h-4 rounded-full bg-green-500 mr-2" }), _jsx("span", { className: "text-sm", children: "Numere Puternice (306, 315, 324)" })] }), _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "w-4 h-4 rounded-full bg-pink-500 mr-2" }), _jsx("span", { className: "text-sm", children: "Numere Oglind\u0103 (301, 321, 331)" })] }), _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "w-4 h-4 rounded-full bg-gray-400 mr-2" }), _jsx("span", { className: "text-sm", children: "Numere Angelice Standard" })] })] })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold mb-3 text-gray-800", children: "Cum s\u0103 Interpretezi Numerele" }), _jsxs("ul", { className: "text-sm space-y-2 list-disc pl-4", children: [_jsx("li", { children: "Acorda aten\u021Bie contextului \u00EEn care vezi num\u0103rul" }), _jsx("li", { children: "Observ\u0103 emo\u021Biile pe care le sim\u021Bi c\u00E2nd vezi num\u0103rul" }), _jsx("li", { children: "Identific\u0103 pattern-urile care apar \u00EEn via\u021Ba ta" }), _jsx("li", { children: "Folose\u0219te intui\u021Bia ta pentru interpretare" }), _jsx("li", { children: "Combin\u0103 mai multe numere pentru mesaje complexe" })] })] })] })] }), _jsxs("div", { className: "mb-12", children: [_jsx("h2", { className: "text-2xl font-semibold mb-6", children: "Numere Angelice Frecvente" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: frequentNumbers.map(({ number, category, icon: Icon, color }) => (_jsxs(Link, { to: `/semnificatia-numarului-angelic-${number}`, className: `group p-6 rounded-lg border transition-transform hover:scale-105 ${getColorClasses(color)}`, children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: `p-2 rounded-full bg-white mr-3 ${color === 'purple' ? 'text-purple-600' : color === 'blue' ? 'text-blue-600' : color === 'green' ? 'text-green-600' : color === 'yellow' ? 'text-yellow-600' : color === 'pink' ? 'text-pink-600' : color === 'indigo' ? 'text-indigo-600' : 'text-amber-600'}`, children: _jsx(Icon, { className: "w-5 h-5" }) }), _jsx("h3", { className: "text-2xl font-bold", children: number })] }), _jsx("span", { className: "text-sm font-medium px-3 py-1 rounded-full bg-white", children: category })] }), _jsxs("p", { className: "text-sm opacity-80", children: [number === 333 && "Număr master de spiritualitate și intuiție", number === 322 && "Număr secvențial de progres și evoluție", number === 311 && "Număr de abundență și prosperitate", number === 300 && "Număr de schimbare și transformare", number === 344 && "Număr de dragoste și armonie", number === 355 && "Număr de înțelepciune și claritate spirituală", number === 366 && "Număr de abundență materială și spirituală", number === 377 && "Număr de completare și finalizare"] }), _jsx("div", { className: "mt-4 flex justify-end", children: _jsx("span", { className: "text-sm font-medium group-hover:underline", children: "Exploreaz\u0103 \u2192" }) })] }, number))) })] }), _jsxs("div", { className: "mb-12", children: [_jsx("h2", { className: "text-2xl font-semibold mb-6", children: "Combina\u021Bii Populare" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "bg-white p-6 rounded-xl shadow-md border border-purple-100", children: [_jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "Numerele Master" }), _jsxs("div", { className: "flex flex-wrap gap-2 mb-4", children: [_jsx(Link, { to: "/semnificatia-numarului-angelic-333", className: "px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors", children: "333" }), _jsx(Link, { to: "/semnificatia-numarului-angelic-344", className: "px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors", children: "344" }), _jsx(Link, { to: "/semnificatia-numarului-angelic-355", className: "px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors", children: "355" })] }), _jsx("p", { className: "text-gray-600", children: "Aceast\u0103 secven\u021B\u0103 indic\u0103 o perioad\u0103 de transformare spiritual\u0103 profund\u0103 \u0219i manifestare." })] }), _jsxs("div", { className: "bg-white p-6 rounded-xl shadow-md border border-blue-100", children: [_jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "Numerele Oglind\u0103" }), _jsxs("div", { className: "flex flex-wrap gap-2 mb-4", children: [_jsx(Link, { to: "/semnificatia-numarului-angelic-301", className: "px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors", children: "301" }), _jsx(Link, { to: "/semnificatia-numarului-angelic-321", className: "px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors", children: "321" }), _jsx(Link, { to: "/semnificatia-numarului-angelic-331", className: "px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors", children: "331" })] }), _jsx("p", { className: "text-gray-600", children: "Aceste numere indic\u0103 o perioad\u0103 de reflectare \u0219i echilibru \u00EEn via\u021Ba ta." })] }), _jsxs("div", { className: "bg-white p-6 rounded-xl shadow-md border border-green-100", children: [_jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "Numerele de Stabilitate" }), _jsxs("div", { className: "flex flex-wrap gap-2 mb-4", children: [_jsx(Link, { to: "/semnificatia-numarului-angelic-341", className: "px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium hover:bg-green-200 transition-colors", children: "341" }), _jsx(Link, { to: "/semnificatia-numarului-angelic-351", className: "px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium hover:bg-green-200 transition-colors", children: "351" }), _jsx(Link, { to: "/semnificatia-numarului-angelic-361", className: "px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium hover:bg-green-200 transition-colors", children: "361" })] }), _jsx("p", { className: "text-gray-600", children: "Aceast\u0103 secven\u021B\u0103 indic\u0103 o perioad\u0103 de stabilitate \u0219i echilibru \u00EEn via\u021Ba ta." })] }), _jsxs("div", { className: "bg-white p-6 rounded-xl shadow-md border border-amber-100", children: [_jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "Numerele de Completare" }), _jsxs("div", { className: "flex flex-wrap gap-2 mb-4", children: [_jsx(Link, { to: "/semnificatia-numarului-angelic-371", className: "px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium hover:bg-amber-200 transition-colors", children: "371" }), _jsx(Link, { to: "/semnificatia-numarului-angelic-381", className: "px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium hover:bg-amber-200 transition-colors", children: "381" }), _jsx(Link, { to: "/semnificatia-numarului-angelic-391", className: "px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium hover:bg-amber-200 transition-colors", children: "391" })] }), _jsx("p", { className: "text-gray-600", children: "Aceast\u0103 secven\u021B\u0103 indic\u0103 o perioad\u0103 de completare \u0219i finalizare a ciclurilor de via\u021B\u0103." })] })] })] }), _jsxs("div", { className: "mb-8", children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsx("h2", { className: "text-2xl font-semibold", children: "Toate Numerele Angelice" }), _jsxs("button", { onClick: () => setShowFilters(!showFilters), className: "flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors", children: [_jsx(Filter, { className: "w-4 h-4" }), _jsx("span", { children: "Filtreaz\u0103" }), showFilters ? _jsx(ChevronUp, { className: "w-4 h-4" }) : _jsx(ChevronDown, { className: "w-4 h-4" })] })] }), showFilters && (_jsx("div", { className: "bg-white p-4 rounded-lg shadow-md mb-6", children: _jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsx("button", { onClick: () => setActiveFilter('all'), className: `px-4 py-2 rounded-full text-sm font-medium ${activeFilter === 'all'
                                                ? 'bg-purple-600 text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`, children: "Toate" }), _jsxs("button", { onClick: () => setActiveFilter('master'), className: `px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 ${activeFilter === 'master'
                                                ? 'bg-purple-600 text-white'
                                                : 'bg-purple-100 text-purple-700 hover:bg-purple-200'}`, children: [_jsx(Crown, { className: "w-4 h-4" }), "Numere Master"] }), _jsxs("button", { onClick: () => setActiveFilter('special'), className: `px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 ${activeFilter === 'special'
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}`, children: [_jsx(Star, { className: "w-4 h-4" }), "Numere Speciale"] }), _jsxs("button", { onClick: () => setActiveFilter('powerful'), className: `px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 ${activeFilter === 'powerful'
                                                ? 'bg-green-600 text-white'
                                                : 'bg-green-100 text-green-700 hover:bg-green-200'}`, children: [_jsx(Zap, { className: "w-4 h-4" }), "Numere Puternice"] })] }) })), _jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4", children: filteredNumbers.map((number) => {
                                    const type = getNumberType(number);
                                    const colorClass = type === 'master'
                                        ? 'bg-purple-50 text-purple-700 border-purple-200'
                                        : type === 'special'
                                            ? 'bg-blue-50 text-blue-700 border-blue-200'
                                            : type === 'powerful'
                                                ? 'bg-green-50 text-green-700 border-green-200'
                                                : 'bg-gray-50 text-gray-700 border-gray-200';
                                    return (_jsx(Link, { to: `/semnificatia-numarului-angelic-${number}`, className: `group p-6 rounded-lg border transition-all duration-300 hover:scale-105 hover:shadow-md ${colorClass}`, children: _jsxs("div", { className: "flex flex-col items-center justify-center h-full", children: [_jsxs("div", { className: "flex items-center justify-center mb-2", children: [type === 'master' && _jsx(Crown, { className: "w-5 h-5 mr-2 text-purple-500" }), type === 'special' && _jsx(Star, { className: "w-5 h-5 mr-2 text-blue-500" }), type === 'powerful' && _jsx(Zap, { className: "w-5 h-5 mr-2 text-green-500" }), type === 'regular' && _jsx(Sparkles, { className: "w-5 h-5 mr-2 text-gray-500" }), _jsx("span", { className: "text-2xl font-bold", children: number })] }), _jsxs("div", { className: "text-xs opacity-70 mt-1", children: [type === 'master' && 'Număr Master', type === 'special' && 'Număr Special', type === 'powerful' && 'Număr Puternic', type === 'regular' && 'Număr Angelic'] }), _jsx("div", { className: "mt-3 opacity-0 group-hover:opacity-100 transition-opacity", children: _jsx(Sparkles, { className: "w-4 h-4 text-purple-500" }) })] }) }, number));
                                }) })] }), _jsxs("div", { className: "bg-white rounded-lg shadow-md p-6", children: [_jsx("h2", { className: "text-xl font-semibold mb-4", children: "Cum s\u0103 Interpretezi Numerele Angelice" }), _jsxs("div", { className: "prose max-w-none", children: [_jsx("p", { className: "text-gray-600 mb-4", children: "Numerele angelice de la 300 la 399 poart\u0103 mesaje specifice despre evolu\u021Bia spiritual\u0103, transformarea personal\u0103 \u0219i alinierea cu scopul t\u0103u divin. Aceste numere sunt deosebit de puternice \u00EEn perioadele de tranzi\u021Bie \u0219i schimbare." }), _jsx("h3", { className: "text-lg font-semibold text-gray-800 mb-2", children: "Sfaturi pentru Interpretare" }), _jsxs("ul", { className: "text-sm space-y-2 list-disc pl-4 text-gray-600", children: [_jsx("li", { children: "Observ\u0103 frecven\u021Ba cu care apar anumite numere" }), _jsx("li", { children: "Noteaz\u0103 contextul \u0219i emo\u021Biile asociate" }), _jsx("li", { children: "Mediteaz\u0103 asupra semnifica\u021Biei lor" }), _jsx("li", { children: "Asociaz\u0103 numerele cu situa\u021Biile din via\u021Ba ta" })] })] })] })] })] }));
};
export default AngelNumbers300to399;
