import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const Calculator: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculateAngelNumber = (value: string): number => {
    // Remove any non-numeric characters
    const numbers = value.replace(/\D/g, '');
    
    if (!numbers) return 0;

    // Keep reducing until we get a single digit or master number
    let sum = numbers.split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    
    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
      sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    }

    return sum;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) {
      toast.error('Te rugăm să introduci o valoare');
      return;
    }

    const angelNumber = calculateAngelNumber(input);
    setResult(angelNumber);
    toast.success('Numărul tău angelic a fost calculat!');
  };

  return (
    <>
      <Helmet>
        <title>Calculator Numere Angelice | Descoperă Numărul Tău Angelic</title>
        <meta
          name="description"
          content="Calculează-ți numărul angelic personal folosind data nașterii, numele sau orice număr semnificativ din viața ta."
        />
      </Helmet>

      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
          Calculator Numere Angelice
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="input" className="block text-gray-700 font-medium mb-2">
                Introdu o valoare (dată sau număr)
              </label>
              <input
                type="text"
                id="input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Ex: 12.03.1990"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-colors"
            >
              Calculează Numărul Angelic
            </button>
          </form>
        </div>

        {result !== null && (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Numărul tău angelic este:
            </h2>
            <Link
              to={`/semnificatia-numarului-angelic-${result}`}
              className="inline-block text-4xl font-bold text-purple-600 hover:text-purple-700 transition-colors"
            >
              {result}
            </Link>
            <p className="mt-4 text-gray-600">
              Click pe număr pentru a descoperi semnificația sa completă.
            </p>
          </div>
        )}

        <div className="mt-12 prose prose-purple mx-auto">
          <h2>Cum să folosești calculatorul?</h2>
          <p>
            Poți introduce orice valoare semnificativă din viața ta pentru a-ți descoperi
            numărul angelic personal:
          </p>
          <ul>
            <li>Data nașterii (ex: 12.03.1990)</li>
            <li>Numere care apar frecvent în viața ta</li>
            <li>Numere de telefon</li>
            <li>Adrese sau alte numere semnificative</li>
          </ul>
          <p>
            Calculatorul va reduce numărul la o singură cifră sau la un număr maestru
            (11, 22, 33), dezvăluindu-ți astfel mesajul angelic personal.
          </p>
        </div>
      </div>
    </>
  );
};

export default Calculator; 