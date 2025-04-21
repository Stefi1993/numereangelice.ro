import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp, Search, Star, Filter, X, Info } from 'lucide-react';
const Category = () => {
    // Define number ranges
    const numberRanges = [
        { start: 0, end: 99, label: 'Numerele Angelice de la 0 la 99', path: '/numerele-angelice-de-la-0-la-99' },
        { start: 100, end: 199, label: 'Numerele Angelice de la 100 la 199', path: '/numerele-angelice-de-la-100-la-199' },
        { start: 200, end: 299, label: 'Numerele Angelice de la 200 la 299', path: '/numerele-angelice-de-la-200-la-299' },
        { start: 300, end: 399, label: 'Numerele Angelice de la 300 la 399', path: '/numerele-angelice-de-la-300-la-399' },
        { start: 400, end: 499, label: 'Numerele Angelice de la 400 la 499', path: '/numerele-angelice-de-la-400-la-499' },
        { start: 500, end: 599, label: 'Numerele Angelice de la 500 la 599', path: '/numerele-angelice-de-la-500-la-599' },
        { start: 600, end: 699, label: 'Numerele Angelice de la 600 la 699', path: '/numerele-angelice-de-la-600-la-699' },
        { start: 700, end: 799, label: 'Numerele Angelice de la 700 la 799', path: '/numerele-angelice-de-la-700-la-799' },
        { start: 800, end: 899, label: 'Numerele Angelice de la 800 la 899', path: '/numerele-angelice-de-la-800-la-899' },
        { start: 900, end: 999, label: 'Numerele Angelice de la 900 la 999', path: '/numerele-angelice-de-la-900-la-999' }
    ];
    // Define special numbers with their categories and colors
    const specialNumbers = {
        // Master Numbers
        master: [11, 22, 33, 44, 55, 66, 77, 88, 99, 111, 222, 333, 444, 555, 666, 777, 888, 999],
        // Mirror Numbers - reduced for 0-99 range
        mirror: [
            // Most significant mirror numbers in 0-99 range
            12, 21, 13, 31, 23, 32, 34, 43, 45, 54, 56, 65, 67, 76, 78, 87, 89, 98,
            // Three-digit mirror numbers
            101, 202, 303, 404, 505, 606, 707, 808, 909
        ],
        // Repeating Numbers
        repeating: [111, 222, 333, 444, 555, 666, 777, 888, 999],
        // Ascending Numbers
        ascending: [123, 234, 345, 456, 567, 678, 789],
        // Descending Numbers
        descending: [321, 432, 543, 654, 765, 876, 987]
    };
    // Sample number significances for preview
    const numberSignificances = {
        0: "Început, potențial infinit, cicluri complete",
        1: "Început nou, independență, leadership",
        2: "Parteneriat, echilibru, cooperare",
        3: "Creativitate, expresie, bucurie",
        4: "Stabilitate, fundație, organizare",
        5: "Libertate, schimbare, aventură",
        6: "Responsabilitate, armonie, familie",
        7: "Spiritualitate, intuiție, înțelepciune",
        8: "Abundență, putere, succes material",
        9: "Completare, finalizare, transformare",
        11: "Număr Master - Intuiție sporită și conexiune spirituală",
        22: "Număr Master - Manifestare și realizare a viselor",
        33: "Număr Master - Ghidare spirituală și compasiune",
        111: "Alineare cu scopul tău și manifestare rapidă",
        222: "Echilibru și armonie în viața ta",
        333: "Prezența îngerilor și protecție divină",
        444: "Stabilitate și fundație puternică",
        555: "Schimbare majoră și transformare",
        666: "Echilibrare între material și spiritual",
        777: "Binecuvântări și noroc spiritual",
        888: "Abundență și prosperitate",
        999: "Finalizare și încheierea ciclurilor"
    };
    // State for search, expanded sections, and filters
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedSections, setExpandedSections] = useState([0]); // Default first section expanded
    const [activeFilters, setActiveFilters] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [hoveredNumber, setHoveredNumber] = useState(null);
    // Toggle section expansion
    const toggleSection = (index) => {
        setExpandedSections(prev => prev.includes(index)
            ? prev.filter(i => i !== index)
            : [...prev, index]);
    };
    // Toggle filter
    const toggleFilter = (filter) => {
        setActiveFilters(prev => prev.includes(filter)
            ? prev.filter(f => f !== filter)
            : [...prev, filter]);
    };
    // Filter numbers based on search query and active filters
    const filterNumbers = (start, end) => {
        let numbers = Array.from({ length: end - start + 1 }, (_, i) => start + i);
        // Apply search filter
        if (searchQuery) {
            numbers = numbers.filter(num => num.toString().includes(searchQuery));
        }
        // Apply category filters
        if (activeFilters.length > 0) {
            numbers = numbers.filter(num => {
                return activeFilters.some(filter => {
                    if (filter === 'master' && specialNumbers.master.includes(num))
                        return true;
                    if (filter === 'mirror' && specialNumbers.mirror.includes(num))
                        return true;
                    if (filter === 'repeating' && specialNumbers.repeating.includes(num))
                        return true;
                    if (filter === 'ascending' && specialNumbers.ascending.includes(num))
                        return true;
                    if (filter === 'descending' && specialNumbers.descending.includes(num))
                        return true;
                    return false;
                });
            });
        }
        return numbers;
    };
    // Check if a number is special and get its category
    const getNumberCategory = (num) => {
        if (specialNumbers.master.includes(num))
            return 'master';
        if (specialNumbers.mirror.includes(num))
            return 'mirror';
        if (specialNumbers.repeating.includes(num))
            return 'repeating';
        if (specialNumbers.ascending.includes(num))
            return 'ascending';
        if (specialNumbers.descending.includes(num))
            return 'descending';
        return null;
    };
    // Get color class based on category
    const getColorClass = (category) => {
        switch (category) {
            case 'master':
                return 'bg-gradient-to-br from-purple-100 to-purple-50 text-purple-800 border border-purple-200';
            case 'mirror':
                return 'bg-gradient-to-br from-blue-100 to-blue-50 text-blue-800 border border-blue-200';
            case 'repeating':
                return 'bg-gradient-to-br from-green-100 to-green-50 text-green-800 border border-green-200';
            case 'ascending':
                return 'bg-gradient-to-br from-yellow-100 to-yellow-50 text-yellow-800 border border-yellow-200';
            case 'descending':
                return 'bg-gradient-to-br from-red-100 to-red-50 text-red-800 border border-red-200';
            default:
                return 'bg-gradient-to-br from-white to-gray-50 text-purple-600 border border-gray-200';
        }
    };
    // Get label for special numbers
    const getSpecialLabel = (category) => {
        switch (category) {
            case 'master':
                return 'Număr Master';
            case 'mirror':
                return 'Număr Oglindă';
            case 'repeating':
                return 'Număr Repetitiv';
            case 'ascending':
                return 'Număr Ascendent';
            case 'descending':
                return 'Număr Descendent';
            default:
                return '';
        }
    };
    // Get significance for a number
    const getNumberSignificance = (num) => {
        return numberSignificances[num] || "Semnificație specifică pentru acest număr angelic";
    };
    // Scroll to section
    const scrollToSection = (index) => {
        const element = document.getElementById(`section-${index}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            toggleSection(index);
        }
    };
    // Update the getNumberLink function to handle the special case for number 1
    const getNumberLink = (number) => {
        // Special case for number 1
        if (number === 1) {
            return '/semnificatia-numarului-angelic-1';
        }
        // For other numbers, find the appropriate range
        const range = numberRanges.find(range => number >= range.start && number <= range.end);
        return range ? range.path : '/numerele-angelice-de-la-0-la-99';
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "Toate Numerele Angelice | 0-999" }), _jsx("meta", { name: "description", content: "Exploreaz\u0103 toate numerele angelice de la 0 la 999. Descoper\u0103 semnifica\u021Biile \u0219i mesajele divine ascunse \u00EEn fiecare num\u0103r." }), _jsx("meta", { name: "keywords", content: "toate numerele angelice, numere angelice 0-999, semnificatii numere, mesaje ingeri, numerologie" }), _jsx("meta", { property: "og:type", content: "website" }), _jsx("meta", { property: "og:title", content: "Toate Numerele Angelice | 0-999" }), _jsx("meta", { property: "og:description", content: "Exploreaz\u0103 toate numerele angelice de la 0 la 999. Descoper\u0103 semnifica\u021Biile \u0219i mesajele divine ascunse \u00EEn fiecare num\u0103r." }), _jsx("meta", { name: "twitter:card", content: "summary" }), _jsx("meta", { name: "twitter:title", content: "Toate Numerele Angelice | 0-999" }), _jsx("meta", { name: "twitter:description", content: "Exploreaz\u0103 toate numerele angelice de la 0 la 999. Descoper\u0103 semnifica\u021Biile \u0219i mesajele divine ascunse \u00EEn fiecare num\u0103r." })] }), _jsxs("div", { className: "max-w-6xl mx-auto px-4 py-12", children: [_jsxs("header", { className: "text-center mb-12", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4", children: "Toate Numerele Angelice" }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto mb-8", children: "Exploreaz\u0103 toate numerele angelice de la 0 la 999 pentru a descoperi semnifica\u021Biile \u0219i mesajele divine ascunse \u00EEn fiecare num\u0103r." }), _jsxs("div", { className: "max-w-md mx-auto relative mb-6", children: [_jsxs("div", { className: "relative", children: [_jsx("input", { type: "text", placeholder: "Caut\u0103 un num\u0103r angelic...", className: "w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value) }), _jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400", size: 20 })] }), searchQuery && (_jsx("button", { onClick: () => setSearchQuery(''), className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700", children: _jsx(X, { size: 18 }) }))] }), _jsx("div", { className: "flex justify-center mb-4", children: _jsxs("button", { onClick: () => setShowFilters(!showFilters), className: "flex items-center space-x-2 px-4 py-2 bg-purple-100 text-purple-800 rounded-lg hover:bg-purple-200 transition-colors", children: [_jsx(Filter, { size: 18 }), _jsx("span", { children: "Filtreaz\u0103 Numerele" })] }) }), showFilters && (_jsxs("div", { className: "max-w-md mx-auto bg-white p-4 rounded-lg shadow-md mb-6", children: [_jsx("h3", { className: "text-lg font-semibold mb-3", children: "Filtreaz\u0103 dup\u0103 tip" }), _jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2", children: [_jsxs("button", { onClick: () => toggleFilter('master'), className: `flex items-center space-x-2 p-2 rounded-lg text-sm ${activeFilters.includes('master')
                                                    ? 'bg-purple-100 text-purple-800 border border-purple-300'
                                                    : 'bg-gray-100 text-gray-700 border border-gray-200'}`, children: [_jsx("div", { className: "w-3 h-3 rounded-full bg-purple-100 border border-purple-300" }), _jsx("span", { children: "Numere Master" })] }), _jsxs("button", { onClick: () => toggleFilter('mirror'), className: `flex items-center space-x-2 p-2 rounded-lg text-sm ${activeFilters.includes('mirror')
                                                    ? 'bg-blue-100 text-blue-800 border border-blue-300'
                                                    : 'bg-gray-100 text-gray-700 border border-gray-200'}`, children: [_jsx("div", { className: "w-3 h-3 rounded-full bg-blue-100 border border-blue-300" }), _jsx("span", { children: "Numere Oglind\u0103" })] }), _jsxs("button", { onClick: () => toggleFilter('repeating'), className: `flex items-center space-x-2 p-2 rounded-lg text-sm ${activeFilters.includes('repeating')
                                                    ? 'bg-green-100 text-green-800 border border-green-300'
                                                    : 'bg-gray-100 text-gray-700 border border-gray-200'}`, children: [_jsx("div", { className: "w-3 h-3 rounded-full bg-green-100 border border-green-300" }), _jsx("span", { children: "Numere Repetitive" })] }), _jsxs("button", { onClick: () => toggleFilter('ascending'), className: `flex items-center space-x-2 p-2 rounded-lg text-sm ${activeFilters.includes('ascending')
                                                    ? 'bg-yellow-100 text-yellow-800 border border-yellow-300'
                                                    : 'bg-gray-100 text-gray-700 border border-gray-200'}`, children: [_jsx("div", { className: "w-3 h-3 rounded-full bg-yellow-100 border border-yellow-300" }), _jsx("span", { children: "Numere Ascendente" })] }), _jsxs("button", { onClick: () => toggleFilter('descending'), className: `flex items-center space-x-2 p-2 rounded-lg text-sm ${activeFilters.includes('descending')
                                                    ? 'bg-red-100 text-red-800 border border-red-300'
                                                    : 'bg-gray-100 text-gray-700 border border-gray-200'}`, children: [_jsx("div", { className: "w-3 h-3 rounded-full bg-red-100 border border-red-300" }), _jsx("span", { children: "Numere Descendente" })] })] }), activeFilters.length > 0 && (_jsx("div", { className: "mt-3 flex justify-end", children: _jsx("button", { onClick: () => setActiveFilters([]), className: "text-sm text-purple-600 hover:text-purple-800", children: "Reseteaz\u0103 filtrele" }) }))] }))] }), _jsx("div", { className: "mb-8 overflow-x-auto", children: _jsx("div", { className: "flex space-x-2 min-w-max pb-2", children: numberRanges.map((range, index) => (_jsx("button", { onClick: () => scrollToSection(index), className: `px-3 py-2 rounded-lg text-sm whitespace-nowrap ${expandedSections.includes(index)
                                    ? 'bg-purple-100 text-purple-800 border border-purple-300'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`, children: range.label }, index))) }) }), _jsxs("div", { className: "mb-8 p-4 bg-white rounded-lg shadow-md", children: [_jsx("h3", { className: "text-lg font-semibold mb-3 text-center", children: "Legenda Numerelor Speciale" }), _jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("div", { className: `w-4 h-4 rounded-full bg-purple-100 border border-purple-300` }), _jsx("span", { className: "text-sm", children: "Numere Master" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("div", { className: `w-4 h-4 rounded-full bg-blue-100 border border-blue-300` }), _jsx("span", { className: "text-sm", children: "Numere Oglind\u0103" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("div", { className: `w-4 h-4 rounded-full bg-green-100 border border-green-300` }), _jsx("span", { className: "text-sm", children: "Numere Repetitive" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("div", { className: `w-4 h-4 rounded-full bg-yellow-100 border border-yellow-300` }), _jsx("span", { className: "text-sm", children: "Numere Ascendente" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("div", { className: `w-4 h-4 rounded-full bg-red-100 border border-red-300` }), _jsx("span", { className: "text-sm", children: "Numere Descendente" })] })] })] }), _jsx("div", { className: "space-y-4", children: numberRanges.map((range, index) => {
                            const numbers = filterNumbers(range.start, range.end);
                            const isExpanded = expandedSections.includes(index);
                            return (_jsxs("div", { id: `section-${index}`, className: "bg-white rounded-lg shadow-md overflow-hidden", children: [_jsxs("button", { onClick: () => toggleSection(index), className: "w-full flex items-center justify-between p-4 bg-purple-50 hover:bg-purple-100 transition-colors", children: [_jsx("h2", { className: "text-xl font-semibold text-purple-800", children: range.label }), isExpanded ? (_jsx(ChevronUp, { className: "text-purple-600", size: 24 })) : (_jsx(ChevronDown, { className: "text-purple-600", size: 24 }))] }), isExpanded && (_jsx("div", { className: "p-4", children: numbers.length > 0 ? (_jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3", children: numbers.map((number) => {
                                                const category = getNumberCategory(number);
                                                const colorClass = getColorClass(category);
                                                const specialLabel = getSpecialLabel(category);
                                                return (_jsxs("div", { className: "relative group", onMouseEnter: () => setHoveredNumber(number), onMouseLeave: () => setHoveredNumber(null), children: [_jsx(Link, { to: getNumberLink(number), className: `block p-4 rounded-lg border transition-all duration-200 hover:shadow-md hover:scale-105 ${colorClass}`, children: _jsxs("div", { className: "flex flex-col items-center justify-center", children: [_jsx("span", { className: "text-2xl font-bold mb-1", children: number }), category && (_jsx("div", { className: "absolute -top-2 -right-2 z-10", children: _jsx("div", { className: "bg-yellow-400 rounded-full p-1 shadow-sm", children: _jsx(Star, { size: 16, className: "text-white fill-white" }) }) })), specialLabel && (_jsx("div", { className: "text-xs font-medium mt-1 opacity-90", children: specialLabel }))] }) }), hoveredNumber === number && (_jsx("div", { className: "absolute z-20 left-0 right-0 mt-1 p-3 bg-white rounded-lg shadow-lg border border-gray-200 text-xs transform transition-all duration-200 scale-100 opacity-100", children: _jsxs("div", { className: "flex items-start", children: [_jsx(Info, { size: 14, className: "text-purple-500 mt-0.5 mr-1 flex-shrink-0" }), _jsx("p", { className: "font-medium", children: getNumberSignificance(number) })] }) }))] }, number));
                                            }) })) : (_jsxs("p", { className: "text-center text-gray-500 py-4", children: ["Nu s-au g\u0103sit numere care s\u0103 con\u021Bin\u0103 \"", searchQuery, "\" \u00EEn acest interval."] })) }))] }, index));
                        }) }), _jsxs("section", { className: "mt-16 bg-gray-50 p-8 rounded-lg", children: [_jsx("h2", { className: "text-3xl font-bold text-center mb-6", children: "Cum s\u0103 Folose\u0219ti Numerele Angelice" }), _jsxs("div", { className: "prose prose-lg mx-auto", children: [_jsx("p", { children: "Numerele angelice sunt mesaje divine care ne ajut\u0103 s\u0103 \u00EEn\u021Belegem mai bine via\u021Ba \u0219i s\u0103 facem alegeri mai bune. Fiecare num\u0103r are o vibra\u021Bie \u0219i o semnifica\u021Bie unic\u0103 care poate oferi ghidare \u00EEn diferite aspecte ale vie\u021Bii." }), _jsx("p", { children: "C\u00E2nd un num\u0103r angelic apare \u00EEn mod repetat \u00EEn via\u021Ba ta, este un semn c\u0103 \u00EEngerii \u00EEncearc\u0103 s\u0103-\u021Bi transmit\u0103 un mesaj important. Fiecare num\u0103r poate fi interpretat individual sau \u00EEn combina\u021Bie cu alte numere pentru a oferi un mesaj mai complex." }), _jsx("p", { children: "Numerele speciale, cum ar fi numerele master, numerele oglind\u0103 sau numerele repetitive, poart\u0103 mesaje deosebit de puternice \u0219i ar trebui s\u0103 le acorzi o aten\u021Bie special\u0103 c\u00E2nd le vezi." })] })] }), _jsx("div", { className: "my-8 p-4 bg-gray-100 text-center rounded-lg", children: "Spa\u021Biu pentru reclam\u0103" })] })] }));
};
export default Category;
