import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Calculator, List, ChevronDown } from 'lucide-react';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isNumbersDropdownOpen, setIsNumbersDropdownOpen] = useState(false);
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
        { start: 900, end: 999, label: 'Numerele Angelice de la 900 la 999', path: '/numerele-angelice-de-la-900-la-999' },
    ];
    return (_jsx("header", { className: "bg-white shadow-md", children: _jsxs("nav", { className: "container mx-auto px-4 py-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx(Link, { to: "/", className: "text-2xl font-bold text-purple-700", children: "Numere Angelice" }), _jsx("button", { onClick: () => setIsMenuOpen(!isMenuOpen), className: "md:hidden p-2", "aria-label": "Toggle menu", children: isMenuOpen ? _jsx(X, { size: 24 }) : _jsx(Menu, { size: 24 }) }), _jsxs("div", { className: "hidden md:flex items-center space-x-8", children: [_jsxs("div", { className: "relative", children: [_jsxs("button", { className: "flex items-center space-x-1 text-gray-700 hover:text-purple-700", onClick: () => setIsNumbersDropdownOpen(!isNumbersDropdownOpen), children: [_jsx("span", { children: "Numere" }), _jsx(ChevronDown, { size: 16 })] }), isNumbersDropdownOpen && (_jsx("div", { className: "absolute z-10 left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1", children: numberRanges.map(({ start, end, label, path }) => (_jsx(Link, { to: path, className: "block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50", onClick: () => setIsNumbersDropdownOpen(false), children: label }, start))) }))] }), _jsxs(Link, { to: "/toate-numerele-angelice", className: "flex items-center space-x-2 text-gray-700 hover:text-purple-700", children: [_jsx(List, { size: 20 }), _jsx("span", { children: "Toate Numerele" })] }), _jsxs(Link, { to: "/calculator", className: "flex items-center space-x-2 text-gray-700 hover:text-purple-700", children: [_jsx(Calculator, { size: 20 }), _jsx("span", { children: "Calculator" })] })] })] }), isMenuOpen && (_jsx("div", { className: "md:hidden mt-4", children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("h3", { className: "font-medium text-gray-900 px-2", children: "Numere" }), numberRanges.map(({ start, end, label, path }) => (_jsx(Link, { to: path, className: "block px-2 py-1 text-gray-700 hover:bg-purple-50", onClick: () => setIsMenuOpen(false), children: label }, start)))] }), _jsxs(Link, { to: "/toate-numerele-angelice", className: "flex items-center space-x-2 px-2 py-1 text-gray-700 hover:bg-purple-50", onClick: () => setIsMenuOpen(false), children: [_jsx(List, { size: 20 }), _jsx("span", { children: "Toate Numerele" })] }), _jsxs(Link, { to: "/calculator", className: "flex items-center space-x-2 px-2 py-1 text-gray-700 hover:bg-purple-50", onClick: () => setIsMenuOpen(false), children: [_jsx(Calculator, { size: 20 }), _jsx("span", { children: "Calculator" })] })] }) }))] }) }));
};
export default Header;
