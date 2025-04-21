import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Heart, Briefcase, Sparkles, Calculator, BookOpen, Search, ChevronRight, Moon, Clock, Bed, Calendar, History } from 'lucide-react';
import { toast } from 'sonner';

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [calculatedNumber, setCalculatedNumber] = useState<number | null>(null);
  const [calculatorInput, setCalculatorInput] = useState('');
  const [calculatorResult, setCalculatorResult] = useState<number | null>(null);
  const navigate = useNavigate();

  // Generate SEO-friendly content
  const pageTitle = 'Numere Angelice | Descoperă Semnificația Numerelor Divine';
  const pageDescription = 'Explorează semnificațiile numerelor angelice și descoperă mesajele pe care îngerii îți transmit prin intermediul acestor numere speciale.';
  const pageKeywords = [
    'numere angelice',
    'semnificatii numere angelice',
    'numere ingeri',
    'numerologie',
    'ghid numere angelice',
    'mesaje ingeri',
    'numere divine',
    'semnificatii spirituale',
    'calculator numere angelice',
    'ghid complet numere angelice'
  ];

  // Popular angel numbers
  const popularNumbers = [
    { number: 1, category: 'Special', color: 'purple', link: '/semnificatia-numarului-angelic-1' },
    { number: 11, category: 'Master', color: 'purple' },
    { number: 22, category: 'Master', color: 'purple' },
    { number: 33, category: 'Master', color: 'purple' },
    { number: 44, category: 'Master', color: 'purple' },
    { number: 55, category: 'Master', color: 'purple' },
    { number: 66, category: 'Master', color: 'purple' },
    { number: 77, category: 'Master', color: 'purple' },
    { number: 88, category: 'Master', color: 'purple' },
    { number: 99, category: 'Master', color: 'purple' },
    { number: 111, category: 'Special', color: 'blue' },
    { number: 222, category: 'Special', color: 'blue' },
    { number: 333, category: 'Special', color: 'blue' },
    { number: 444, category: 'Special', color: 'blue' },
    { number: 555, category: 'Special', color: 'blue' },
    { number: 666, category: 'Special', color: 'blue' },
    { number: 777, category: 'Special', color: 'blue' },
    { number: 888, category: 'Special', color: 'blue' },
    { number: 999, category: 'Special', color: 'blue' },
    { number: 123, category: 'Sequential', color: 'green' },
    { number: 234, category: 'Sequential', color: 'green' },
    { number: 345, category: 'Sequential', color: 'green' },
    { number: 456, category: 'Sequential', color: 'green' },
    { number: 567, category: 'Sequential', color: 'green' },
    { number: 678, category: 'Sequential', color: 'green' },
    { number: 789, category: 'Sequential', color: 'green' },
    { number: 101, category: 'Mirror', color: 'pink' },
    { number: 202, category: 'Mirror', color: 'pink' },
    { number: 303, category: 'Mirror', color: 'pink' },
    { number: 404, category: 'Mirror', color: 'pink' },
    { number: 505, category: 'Mirror', color: 'pink' },
    { number: 606, category: 'Mirror', color: 'pink' },
    { number: 707, category: 'Mirror', color: 'pink' },
    { number: 808, category: 'Mirror', color: 'pink' },
    { number: 909, category: 'Mirror', color: 'pink' }
  ];

  // Number ranges for category selection
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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Check if the search query is a number
      const number = parseInt(searchQuery.trim(), 10);
      if (!isNaN(number)) {
        // Special case for number 1
        if (number === 1) {
          navigate('/semnificatia-numarului-angelic-1');
          return;
        }
        
        // Find the appropriate range page
        const range = numberRanges.find(range => number >= range.start && number <= range.end);
        if (range) {
          navigate(range.path);
        } else {
          // Default to 0-99 range if no matching range found
          navigate('/numerele-angelice-de-la-0-la-99');
        }
      } else {
        // Default to 0-99 range if not a valid number
        navigate('/numerele-angelice-de-la-0-la-99');
      }
    }
  };

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

  const handleCalculatorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!calculatorInput.trim()) {
      toast.error('Te rugăm să introduci o valoare');
      return;
    }

    const angelNumber = calculateAngelNumber(calculatorInput);
    setCalculatorResult(angelNumber);
    toast.success('Numărul tău angelic a fost calculat!');
  };

  const getColorClass = (color: string) => {
    switch (color) {
      case 'purple': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'blue': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'green': return 'bg-green-100 text-green-700 border-green-200';
      case 'pink': return 'bg-pink-100 text-pink-700 border-pink-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords.join(', ')} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="/src/images/numere-angelice-hero.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="/src/images/numere-angelice-hero.jpg" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Numere Angelice
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Descoperă semnificațiile numerelor angelice și mesajele pe care îngerii îți transmit prin intermediul acestor numere speciale.
          </p>
        </section>

        {/* Search Section */}
        <section className="mb-16 bg-white p-8 rounded-xl shadow-md border border-purple-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Caută un Număr Angelic
          </h2>
          <p className="text-gray-600 mb-6 text-center max-w-2xl mx-auto">
            Introdu numărul angelic pe care dorești să-l explorezi.
          </p>
          <form onSubmit={handleSearch} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="number"
                  min="0"
                  max="999"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Introdu un număr între 0 și 999"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Caută
              </button>
            </div>
            <div className="mt-3 text-sm text-gray-500 text-center">
              Exemplu: "11", "222", "333", "444"
            </div>
          </form>
        </section>

        {/* Number Ranges Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Explorează După Intervale
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {numberRanges.map((range) => (
              <Link
                key={range.start}
                to={range.path}
                className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:translate-y-[-4px] border border-purple-100 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4 group-hover:bg-purple-200 transition-colors">
                      <span className="text-xl font-bold text-purple-700">{range.start}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {range.start} - {range.end}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 pl-16">
                    Numerele Angelice de la {range.start} la {range.end}
                  </p>
                  <div className="flex items-center text-purple-600 font-medium pl-16">
                    <span>Explorează</span>
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Popular Numbers Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Numere Angelice Populare
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Numerele Master</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <Link 
                  to="/semnificatia-numarului-angelic-11" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  11
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-22" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  22
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-33" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  33
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-44" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  44
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-55" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  55
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-66" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  66
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-77" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  77
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-88" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  88
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-99" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  99
                </Link>
              </div>
              <p className="text-gray-600">
                Această secvență indică o perioadă de transformare spirituală profundă și manifestare.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Numerele Oglindă</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <Link 
                  to="/semnificatia-numarului-angelic-12" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  12
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-21" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  21
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-101" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  101
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-202" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  202
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-303" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  303
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-404" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  404
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-505" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  505
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-606" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  606
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-707" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  707
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-808" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  808
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-909" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  909
                </Link>
              </div>
              <p className="text-gray-600">
                Această combinație sugerează că trebuie să privești situația din două perspective diferite.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Numerele de Stabilitate</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <Link 
                  to="/semnificatia-numarului-angelic-44" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  44
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-55" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  55
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-66" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  66
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-144" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  144
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-155" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  155
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-166" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  166
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-244" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  244
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-255" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  255
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-266" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  266
                </Link>
              </div>
              <p className="text-gray-600">
                Această secvență indică o perioadă de consolidare și armonie în viața ta.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Numerele de Completare</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <Link 
                  to="/semnificatia-numarului-angelic-77" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  77
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-88" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  88
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-99" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  99
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-177" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  177
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-188" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  188
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-199" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  199
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-277" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  277
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-288" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  288
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-299" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  299
                </Link>
              </div>
              <p className="text-gray-600">
                Această combinație sugerează că un ciclu se apropie de finalizare.
              </p>
            </div>
          </div>
          
          {/* New section for 111-999 numbers */}
          <div className="mt-12 bg-white p-8 rounded-xl shadow-md border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Numere Angelice Speciale</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/semnificatia-numarului-angelic-111" 
                className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg text-lg font-medium hover:bg-purple-200 transition-colors"
              >
                111
              </Link>
              <Link 
                to="/semnificatia-numarului-angelic-222" 
                className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg text-lg font-medium hover:bg-purple-200 transition-colors"
              >
                222
              </Link>
              <Link 
                to="/semnificatia-numarului-angelic-333" 
                className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg text-lg font-medium hover:bg-purple-200 transition-colors"
              >
                333
              </Link>
              <Link 
                to="/semnificatia-numarului-angelic-444" 
                className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg text-lg font-medium hover:bg-purple-200 transition-colors"
              >
                444
              </Link>
              <Link 
                to="/semnificatia-numarului-angelic-555" 
                className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg text-lg font-medium hover:bg-purple-200 transition-colors"
              >
                555
              </Link>
              <Link 
                to="/semnificatia-numarului-angelic-666" 
                className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg text-lg font-medium hover:bg-purple-200 transition-colors"
              >
                666
              </Link>
              <Link 
                to="/semnificatia-numarului-angelic-777" 
                className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg text-lg font-medium hover:bg-purple-200 transition-colors"
              >
                777
              </Link>
              <Link 
                to="/semnificatia-numarului-angelic-888" 
                className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg text-lg font-medium hover:bg-purple-200 transition-colors"
              >
                888
              </Link>
              <Link 
                to="/semnificatia-numarului-angelic-999" 
                className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg text-lg font-medium hover:bg-purple-200 transition-colors"
              >
                999
              </Link>
            </div>
            <p className="text-gray-600 text-center mt-6">
              Aceste numere reprezintă mesaje puternice de la îngerii păzitori și indică transformări spirituale majore.
            </p>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="mb-16 bg-white p-8 rounded-xl shadow-md border border-purple-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Calculator Numere Angelice
          </h2>
          <p className="text-gray-600 mb-6 text-center max-w-2xl mx-auto">
            Poți introduce orice valoare semnificativă din viața ta pentru a-ți descoperi numărul angelic personal:
          </p>
          <div className="max-w-xl mx-auto">
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <form onSubmit={handleCalculatorSubmit} className="space-y-6">
                <div>
                  <label htmlFor="calculatorInput" className="block text-gray-700 font-medium mb-2">
                    Introdu o valoare (dată sau număr)
                  </label>
                  <input
                    type="text"
                    id="calculatorInput"
                    value={calculatorInput}
                    onChange={(e) => setCalculatorInput(e.target.value)}
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
              
              {calculatorResult !== null && (
                <div className="text-center mt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Numărul tău angelic este:
                  </h3>
                  <Link
                    to={calculatorResult === 1 ? '/semnificatia-numarului-angelic-1' : `/semnificatia-numarului-angelic-${calculatorResult}`}
                    className="inline-block text-3xl font-bold text-purple-600 hover:text-purple-700 transition-colors"
                  >
                    {calculatorResult}
                  </Link>
                  <p className="mt-2 text-gray-600">
                    Click pe număr pentru a descoperi semnificația sa completă.
                  </p>
                </div>
              )}
              
              <div className="mt-6 prose prose-purple">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Cum să folosești calculatorul?</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Data nașterii (ex: 12.03.1990)</li>
                  <li>Numere care apar frecvent în viața ta</li>
                  <li>Numere de telefon</li>
                  <li>Adrese sau alte numere semnificative</li>
                </ul>
                <p className="mt-3 text-gray-600">
                  Calculatorul va reduce numărul la o singură cifră sau la un număr maestru (11, 22, 33), dezvăluindu-ți astfel mesajul angelic personal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md border border-purple-100">
            <div className="text-purple-600 mb-4">
              <Sparkles size={32} />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Ghidare Spirituală</h2>
            <p className="text-gray-600">
              Numerele angelice oferă ghidare spirituală și suport în momentele importante ale vieții tale.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-purple-100">
            <div className="text-purple-600 mb-4">
              <BookOpen size={32} />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Înțelegere Personală</h2>
            <p className="text-gray-600">
              Descoperă semnificațiile personale ale numerelor angelice și cum se aplică în viața ta.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-purple-100">
            <div className="text-purple-600 mb-4">
              <Calculator size={32} />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Dezvoltare Spirituală</h2>
            <p className="text-gray-600">
              Folosește numerele angelice pentru a-ți dezvolta conexiunea spirituală și intuiția.
            </p>
          </div>
        </section>

        {/* SomnulPerfect Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Explorează și Alte Resurse
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="https://somnperfect.ro"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-md border border-indigo-100 hover:shadow-lg transition-all hover:translate-y-[-2px] group"
            >
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <Moon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">somnperfect.ro</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Calculeaza Orele de Somn - Descoperă ciclurile tale de somn și îmbunătățește calitatea odihnei.
              </p>
              <div className="flex items-center text-indigo-600 font-medium">
                <span>Explorează →</span>
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
            <a
              href="https://istoria-zilei.ro"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-md border border-indigo-100 hover:shadow-lg transition-all hover:translate-y-[-2px] group"
            >
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <History className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Istoria Zilei</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Descoperă ce s-a întâmplat astăzi în istorie - evenimente, persoane și momente importante.
              </p>
              <div className="flex items-center text-indigo-600 font-medium">
                <span>Explorează →</span>
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
            <a
              href="https://ziadenastere.ro"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-md border border-indigo-100 hover:shadow-lg transition-all hover:translate-y-[-2px] group"
            >
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <Calendar className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Ziua Nașterii</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Descoperă totul despre ziua ta - caracteristici, personalitate și destin.
              </p>
              <div className="flex items-center text-indigo-600 font-medium">
                <span>Explorează →</span>
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home; 