import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Search, Star, Sparkles, Heart, Zap, ChevronRight, Filter, Download, Info, X } from 'lucide-react';
const AngelNumbers0to99 = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState(null);
    const [showFilters, setShowFilters] = useState(false);
    const navigate = useNavigate();
    // Generate an array of numbers from 0 to 99
    const numbers = Array.from({ length: 100 }, (_, i) => i);
    // Generate SEO-friendly content
    const pageTitle = 'Numerele Angelice de la 0 la 99 - Semnificații Complete';
    const pageDescription = 'Explorează semnificațiile complete ale numerelor angelice de la 0 la 99. Descoperă mesajele pe care îngerii îți transmit prin intermediul acestor numere speciale.';
    const pageKeywords = [
        'numere angelice',
        'semnificatii numere angelice',
        'numere ingeri',
        'numerologie',
        'ghid numere angelice',
        'mesaje ingeri',
        'numere divine',
        'semnificatii spirituale',
        'ghid complet numere angelice',
        'numere de la 0 la 99'
    ];
    // Define frequent numbers with their categories and icons
    const frequentNumbers = [
        { number: 11, category: 'Spiritualitate', icon: _jsx(Sparkles, { size: 20 }), color: 'purple' },
        { number: 22, category: 'Abundență', icon: _jsx(Zap, { size: 20 }), color: 'amber' },
        { number: 33, category: 'Spiritualitate', icon: _jsx(Sparkles, { size: 20 }), color: 'purple' },
        { number: 44, category: 'Stabilitate', icon: _jsx(Star, { size: 20 }), color: 'blue' },
        { number: 55, category: 'Schimbare', icon: _jsx(Zap, { size: 20 }), color: 'amber' },
        { number: 66, category: 'Dragoste', icon: _jsx(Heart, { size: 20 }), color: 'pink' },
        { number: 77, category: 'Spiritualitate', icon: _jsx(Sparkles, { size: 20 }), color: 'purple' },
        { number: 88, category: 'Abundență', icon: _jsx(Zap, { size: 20 }), color: 'amber' },
        { number: 99, category: 'Completare', icon: _jsx(Star, { size: 20 }), color: 'blue' }
    ];
    // Define popular combinations
    const popularCombinations = [
        { numbers: [11, 22, 33], name: 'Numerele Master', description: 'Această secvență indică o perioadă de transformare spirituală profundă și manifestare.' },
        { numbers: [12, 21], name: 'Numerele Oglindă', description: 'Această combinație sugerează că trebuie să privești situația din două perspective diferite.' },
        { numbers: [44, 55, 66], name: 'Numerele de Stabilitate', description: 'Această secvență indică o perioadă de consolidare și armonie în viața ta.' },
        { numbers: [77, 88, 99], name: 'Numerele de Completare', description: 'Această combinație sugerează că un ciclu se apropie de finalizare.' }
    ];
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // Check if the search query is a number
            const number = parseInt(searchQuery.trim(), 10);
            if (!isNaN(number) && number >= 0 && number <= 99) {
                navigate(`/semnificatia-numarului-angelic-${number}`);
            }
        }
    };
    // Get color classes based on category
    const getColorClasses = (color) => {
        switch (color) {
            case 'purple':
                return 'bg-purple-50 hover:bg-purple-100 text-purple-700 border-purple-200';
            case 'amber':
                return 'bg-amber-50 hover:bg-amber-100 text-amber-700 border-amber-200';
            case 'blue':
                return 'bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200';
            case 'pink':
                return 'bg-pink-50 hover:bg-pink-100 text-pink-700 border-pink-200';
            default:
                return 'bg-purple-50 hover:bg-purple-100 text-purple-700 border-purple-200';
        }
    };
    // Get number type and color
    const getNumberType = (num) => {
        // Master numbers
        if ([11, 22, 33].includes(num)) {
            return { type: 'Număr Master', color: 'purple' };
        }
        // Repeating numbers
        if (num % 11 === 0 && num !== 0) {
            return { type: 'Număr Repetitiv', color: 'amber' };
        }
        // Sequential numbers
        if ([12, 23, 34, 45, 56, 67, 78, 89].includes(num)) {
            return { type: 'Număr Secvențial', color: 'blue' };
        }
        // Mirror numbers
        if ([10, 20, 30, 40, 50, 60, 70, 80, 90].includes(num)) {
            return { type: 'Număr Oglindă', color: 'pink' };
        }
        // Regular numbers
        return { type: 'Număr Angelic', color: 'gray' };
    };
    // Filter numbers based on active filter
    const filteredNumbers = useMemo(() => {
        if (!activeFilter)
            return numbers;
        return numbers.filter(num => {
            const { type } = getNumberType(num);
            return type === activeFilter;
        });
    }, [numbers, activeFilter]);
    // Define filter options
    const filterOptions = [
        { label: 'Toate Numerele', value: null },
        { label: 'Numere Master', value: 'Număr Master' },
        { label: 'Numere Repetitive', value: 'Număr Repetitiv' },
        { label: 'Numere Secvențiale', value: 'Număr Secvențial' },
        { label: 'Numere Oglindă', value: 'Număr Oglindă' },
        { label: 'Numere Angelice', value: 'Număr Angelic' }
    ];
    // Update the getNumberLink function to handle the special case for number 1
    const getNumberLink = (number) => {
        // Special case for number 1
        if (number === 1) {
            return '/semnificatia-numarului-angelic-1';
        }
        // For other numbers, use the standard format
        return `/semnificatia-numarului-angelic-${number}`;
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: pageTitle }), _jsx("meta", { name: "description", content: pageDescription }), _jsx("meta", { name: "keywords", content: pageKeywords.join(', ') }), _jsx("meta", { property: "og:type", content: "website" }), _jsx("meta", { property: "og:title", content: pageTitle }), _jsx("meta", { property: "og:description", content: pageDescription }), _jsx("meta", { property: "og:image", content: "/images/numere-angelice-0-99.jpg" }), _jsx("meta", { name: "twitter:card", content: "summary_large_image" }), _jsx("meta", { name: "twitter:title", content: pageTitle }), _jsx("meta", { name: "twitter:description", content: pageDescription }), _jsx("meta", { name: "twitter:image", content: "/images/numere-angelice-0-99.jpg" })] }), _jsxs("div", { className: "max-w-7xl mx-auto px-4 py-8", children: [_jsxs("header", { className: "text-center mb-12", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4", children: "Numerele Angelice de la 0 la 99" }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Exploreaz\u0103 semnifica\u021Biile complete ale numerelor angelice de la 0 la 99. Descoper\u0103 mesajele pe care \u00EEngerii \u00EE\u021Bi transmit prin intermediul acestor numere speciale." })] }), _jsxs("section", { className: "mb-12 bg-white p-8 rounded-xl shadow-md border border-purple-100", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-4 text-center", children: "Caut\u0103 un Num\u0103r Angelic" }), _jsx("p", { className: "text-gray-600 mb-6 text-center max-w-2xl mx-auto", children: "Introdu num\u0103rul angelic pe care dore\u0219ti s\u0103-l explorezi." }), _jsx("form", { onSubmit: handleSearch, className: "max-w-xl mx-auto", children: _jsxs("div", { className: "flex flex-col sm:flex-row gap-2", children: [_jsxs("div", { className: "relative flex-grow", children: [_jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: _jsx(Search, { className: "h-5 w-5 text-gray-400" }) }), _jsx("input", { type: "text", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), placeholder: "Introdu un num\u0103r (0-99)...", className: "block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500" })] }), _jsx("button", { type: "submit", className: "bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors", children: "Caut\u0103" })] }) })] }), _jsxs("section", { className: "mb-12 bg-white p-6 rounded-xl shadow-md border border-blue-100", children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsxs("h2", { className: "text-2xl font-bold text-gray-900 flex items-center", children: [_jsx(Info, { className: "mr-2 text-blue-600", size: 24 }), "Ghid Rapid de Referin\u021B\u0103"] }), _jsxs("button", { onClick: () => setShowFilters(!showFilters), className: "flex items-center text-purple-600 hover:text-purple-800", children: [showFilters ? _jsx(X, { size: 20 }) : _jsx(Filter, { size: 20 }), _jsx("span", { className: "ml-1", children: showFilters ? 'Ascunde Filtre' : 'Filtrează' })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold mb-3 text-gray-800", children: "Tipuri de Numere" }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "w-4 h-4 rounded-full bg-purple-500 mr-2" }), _jsx("span", { className: "text-sm", children: "Numere Master (11, 22, 33)" })] }), _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "w-4 h-4 rounded-full bg-amber-500 mr-2" }), _jsx("span", { className: "text-sm", children: "Numere Repetitive (44, 55, 66, 77, 88, 99)" })] }), _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "w-4 h-4 rounded-full bg-blue-500 mr-2" }), _jsx("span", { className: "text-sm", children: "Numere Secven\u021Biale (12, 23, 34, etc.)" })] }), _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "w-4 h-4 rounded-full bg-pink-500 mr-2" }), _jsx("span", { className: "text-sm", children: "Numere Oglind\u0103 (10, 20, 30, etc.)" })] }), _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "w-4 h-4 rounded-full bg-gray-400 mr-2" }), _jsx("span", { className: "text-sm", children: "Numere Angelice Standard" })] })] })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold mb-3 text-gray-800", children: "Cum s\u0103 Interpretezi Numerele" }), _jsxs("ul", { className: "text-sm space-y-2 list-disc pl-4", children: [_jsx("li", { children: "Acorda aten\u021Bie contextului \u00EEn care vezi num\u0103rul" }), _jsx("li", { children: "Observ\u0103 emo\u021Biile pe care le sim\u021Bi c\u00E2nd vezi num\u0103rul" }), _jsx("li", { children: "Identific\u0103 pattern-urile care apar \u00EEn via\u021Ba ta" }), _jsx("li", { children: "Folose\u0219te intui\u021Bia ta pentru interpretare" }), _jsx("li", { children: "Combin\u0103 mai multe numere pentru mesaje complexe" })] })] })] }), showFilters && (_jsxs("div", { className: "mt-6 pt-4 border-t border-gray-200", children: [_jsx("h3", { className: "text-lg font-semibold mb-3 text-gray-800", children: "Filtreaz\u0103 Numerele" }), _jsx("div", { className: "flex flex-wrap gap-2", children: filterOptions.map((option) => (_jsx("button", { onClick: () => setActiveFilter(option.value), className: `px-3 py-1 rounded-full text-sm font-medium transition-colors ${activeFilter === option.value
                                                ? 'bg-purple-600 text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`, children: option.label }, option.value || 'all'))) })] }))] }), _jsxs("section", { className: "mb-12", children: [_jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-6 text-center", children: "Numere Angelice Frecvente" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", children: frequentNumbers.map((item) => (_jsxs(Link, { to: `/semnificatia-numarului-angelic-${item.number}`, className: `group p-6 rounded-xl shadow-md border transition-all duration-300 transform hover:scale-105 ${getColorClasses(item.color)}`, children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: `p-2 rounded-full bg-white mr-3 ${item.color === 'purple' ? 'text-purple-600' : item.color === 'amber' ? 'text-amber-600' : item.color === 'blue' ? 'text-blue-600' : 'text-pink-600'}`, children: item.icon }), _jsx("h3", { className: "text-2xl font-bold", children: item.number })] }), _jsx("span", { className: "text-sm font-medium px-3 py-1 rounded-full bg-white", children: item.category })] }), _jsxs("p", { className: "text-sm opacity-80", children: [item.number === 11 && "Număr master de spiritualitate și intuiție", item.number === 22 && "Număr master de abundență și manifestare", item.number === 33 && "Număr master de guvernare și expresie", item.number === 44 && "Număr de stabilitate și fundație puternică", item.number === 55 && "Număr de schimbare și transformare", item.number === 66 && "Număr de dragoste și armonie", item.number === 77 && "Număr de spiritualitate și înțelepciune", item.number === 88 && "Număr de abundență și prosperitate", item.number === 99 && "Număr de completare și finalizare"] }), _jsx("div", { className: "mt-4 flex justify-end", children: _jsx("span", { className: "text-sm font-medium group-hover:underline", children: "Exploreaz\u0103 \u2192" }) })] }, item.number))) })] }), _jsxs("section", { className: "mb-12", children: [_jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-6 text-center", children: "Combina\u021Bii Populare de Numere" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: popularCombinations.map((combo, index) => (_jsxs("div", { className: "bg-white p-6 rounded-xl shadow-md border border-purple-100", children: [_jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: combo.name }), _jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: combo.numbers.map((num) => (_jsx(Link, { to: `/semnificatia-numarului-angelic-${num}`, className: "px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors", children: num }, num))) }), _jsx("p", { className: "text-gray-600", children: combo.description })] }, index))) })] }), _jsxs("section", { className: "mb-12", children: [_jsxs("div", { className: "flex justify-between items-center mb-6", children: [_jsx("h2", { className: "text-3xl font-bold text-gray-900", children: activeFilter ? `Numerele de tip "${activeFilter}"` : 'Toate Numerele Angelice' }), _jsxs("a", { href: "/ghid-numere-angelice.pdf", download: true, className: "flex items-center text-purple-600 hover:text-purple-800", children: [_jsx(Download, { size: 20 }), _jsx("span", { className: "ml-1", children: "Descarc\u0103 Ghidul" })] })] }), _jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4", children: filteredNumbers.map((num) => {
                                    const { type, color } = getNumberType(num);
                                    const colorClasses = getColorClasses(color);
                                    return (_jsx(Link, { to: getNumberLink(num), className: `group p-4 rounded-lg shadow-md border transition-all duration-300 transform hover:scale-105 ${colorClasses}`, children: _jsxs("div", { className: "flex flex-col items-center", children: [_jsx("h2", { className: "text-2xl font-bold mb-1", children: num }), _jsx("p", { className: "text-xs font-medium mb-2", children: type }), _jsxs("div", { className: "mt-2 flex items-center text-xs opacity-0 group-hover:opacity-100 transition-opacity", children: [_jsx("span", { children: "Vezi semnifica\u021Bia" }), _jsx(ChevronRight, { size: 14, className: "ml-1" })] })] }) }, num));
                                }) })] }), _jsxs("div", { className: "bg-white p-6 md:p-10 rounded-xl shadow-md border border-blue-100", children: [_jsx("h2", { className: "text-2xl font-bold text-blue-700 mb-4", children: "Cum s\u0103 Interpretezi Numerele Angelice" }), _jsxs("div", { className: "prose prose-lg max-w-none", children: [_jsx("p", { className: "mb-4", children: "Numerele angelice sunt mesaje de la \u00EEngerii p\u0103zitori care apar \u00EEn via\u021Ba ta pentru a-\u021Bi oferi ghidare \u0219i suport. C\u00E2nd vezi repetat un num\u0103r specific, este un semn c\u0103 \u00EEngerii \u00EEncearc\u0103 s\u0103-\u021Bi transmit\u0103 un mesaj important." }), _jsx("p", { className: "mb-4", children: "Pentru a interpreta corect numerele angelice, acorda aten\u021Bie urm\u0103toarelor aspecte:" }), _jsxs("ul", { className: "list-disc pl-6 mb-4", children: [_jsx("li", { className: "mb-2", children: "Contextul \u00EEn care vezi num\u0103rul (unde, c\u00E2nd, ce f\u0103ceai)" }), _jsx("li", { className: "mb-2", children: "Emo\u021Biile pe care le sim\u021Bi c\u00E2nd vezi num\u0103rul" }), _jsx("li", { className: "mb-2", children: "Pattern-urile care apar \u00EEn via\u021Ba ta \u00EEn perioada respectiv\u0103" }), _jsx("li", { className: "mb-2", children: "Intui\u021Bia ta \u0219i mesajele pe care le prime\u0219ti \u00EEn medita\u021Bie sau rug\u0103ciune" })] }), _jsx("p", { children: "Amint\u0103-te c\u0103 numerele angelice sunt un instrument de comunicare \u0219i ghidare, nu de predic\u021Bie. Ei \u00EE\u021Bi ofer\u0103 sugestii \u0219i suport, dar tu e\u0219ti cel care ia deciziile finale \u00EEn via\u021Ba ta." })] })] }), _jsx("div", { className: "my-8 p-4 bg-gray-100 text-center rounded-lg", children: "Spa\u021Biu pentru reclam\u0103" })] })] }));
};
export default AngelNumbers0to99;
