import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
    const calculateAngelNumber = (value) => {
        // Remove any non-numeric characters
        const numbers = value.replace(/\D/g, '');
        if (!numbers)
            return 0;
        // Keep reducing until we get a single digit or master number
        let sum = numbers.split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
        while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
            sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
        }
        return sum;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) {
            toast.error('Te rugăm să introduci o valoare');
            return;
        }
        const angelNumber = calculateAngelNumber(input);
        setResult(angelNumber);
        toast.success('Numărul tău angelic a fost calculat!');
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "Calculator Numere Angelice | Descoper\u0103 Num\u0103rul T\u0103u Angelic" }), _jsx("meta", { name: "description", content: "Calculeaz\u0103-\u021Bi num\u0103rul angelic personal folosind data na\u0219terii, numele sau orice num\u0103r semnificativ din via\u021Ba ta." })] }), _jsxs("div", { className: "max-w-2xl mx-auto", children: [_jsx("h1", { className: "text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8", children: "Calculator Numere Angelice" }), _jsx("div", { className: "bg-white rounded-lg shadow-md p-6 mb-8", children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "input", className: "block text-gray-700 font-medium mb-2", children: "Introdu o valoare (dat\u0103 sau num\u0103r)" }), _jsx("input", { type: "text", id: "input", value: input, onChange: (e) => setInput(e.target.value), className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent", placeholder: "Ex: 12.03.1990" })] }), _jsx("button", { type: "submit", className: "w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-colors", children: "Calculeaz\u0103 Num\u0103rul Angelic" })] }) }), result !== null && (_jsxs("div", { className: "text-center", children: [_jsx("h2", { className: "text-2xl font-semibold text-gray-900 mb-4", children: "Num\u0103rul t\u0103u angelic este:" }), _jsx(Link, { to: `/semnificatia-numarului-angelic-${result}`, className: "inline-block text-4xl font-bold text-purple-600 hover:text-purple-700 transition-colors", children: result }), _jsx("p", { className: "mt-4 text-gray-600", children: "Click pe num\u0103r pentru a descoperi semnifica\u021Bia sa complet\u0103." })] })), _jsxs("div", { className: "mt-12 prose prose-purple mx-auto", children: [_jsx("h2", { children: "Cum s\u0103 folose\u0219ti calculatorul?" }), _jsx("p", { children: "Po\u021Bi introduce orice valoare semnificativ\u0103 din via\u021Ba ta pentru a-\u021Bi descoperi num\u0103rul angelic personal:" }), _jsxs("ul", { children: [_jsx("li", { children: "Data na\u0219terii (ex: 12.03.1990)" }), _jsx("li", { children: "Numere care apar frecvent \u00EEn via\u021Ba ta" }), _jsx("li", { children: "Numere de telefon" }), _jsx("li", { children: "Adrese sau alte numere semnificative" })] }), _jsx("p", { children: "Calculatorul va reduce num\u0103rul la o singur\u0103 cifr\u0103 sau la un num\u0103r maestru (11, 22, 33), dezv\u0103luindu-\u021Bi astfel mesajul angelic personal." })] })] })] }));
};
export default Calculator;
