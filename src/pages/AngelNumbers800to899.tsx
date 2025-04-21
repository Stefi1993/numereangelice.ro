import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, ChevronDown, ChevronUp, Heart, DollarSign, Star, Zap, Crown, Shield, Sparkles, Target, Compass, Lightbulb, Gem, Award, Trophy, Medal, Gift, Diamond } from 'lucide-react';

const AngelNumbers800to899: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();

  // Generate numbers from 800 to 899
  const numbers = Array.from({ length: 100 }, (_, i) => i + 800);

  // SEO-friendly content
  const pageTitle = 'Numerele Angelice de la 800 la 899 | Ghid Complet cu Semnificații';
  const pageDescription = 'Descoperă semnificația numerelor angelice de la 800 la 899. Ghid complet cu interpretări pentru fiecare număr angelic, inclusiv semnificații spirituale, în dragoste și carieră.';
  const pageKeywords = 'numere angelice 800-899, semnificatia numerelor angelice, numere angelice dragoste, numere angelice abundenta, numere angelice spiritualitate';

  // Frequent numbers with their categories and icons
  const frequentNumbers = [
    { number: 811, category: 'Spiritualitate', icon: Sparkles, color: 'purple' },
    { number: 822, category: 'Progres', icon: Target, color: 'blue' },
    { number: 833, category: 'Abundență', icon: DollarSign, color: 'green' },
    { number: 844, category: 'Schimbare', icon: Zap, color: 'yellow' },
    { number: 855, category: 'Dragoste', icon: Heart, color: 'pink' },
    { number: 866, category: 'Înțelepciune', icon: Lightbulb, color: 'indigo' },
    { number: 877, category: 'Abundență', icon: DollarSign, color: 'green' },
    { number: 888, category: 'Completare', icon: Trophy, color: 'amber' }
  ];

  // Popular combinations
  const popularCombinations = [
    { number: '801', category: 'Început Nou', icon: Star, color: 'yellow' },
    { number: '811', category: 'Pace', icon: Shield, color: 'blue' },
    { number: '821', category: 'Creativitate', icon: Sparkles, color: 'purple' },
    { number: '831', category: 'Stabilitate', icon: Target, color: 'green' },
    { number: '841', category: 'Schimbare', icon: Zap, color: 'yellow' },
    { number: '851', category: 'Armonie', icon: Heart, color: 'pink' },
    { number: '861', category: 'Înțelepciune', icon: Lightbulb, color: 'indigo' },
    { number: '871', category: 'Abundență', icon: DollarSign, color: 'green' },
    { number: '881', category: 'Completare', icon: Trophy, color: 'amber' }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const num = parseInt(searchQuery);
    if (!isNaN(num) && num >= 800 && num <= 899) {
      navigate(`/semnificatia-numarului-angelic-${num}`);
    } else {
      navigate('/numerele-angelice-de-la-800-la-899');
    }
  };

  const getColorClasses = (color: string) => {
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

  const getNumberType = (number: number) => {
    if (number % 11 === 0) return 'master';
    if (number % 10 === 0) return 'special';
    if (number % 9 === 0) return 'powerful';
    return 'regular';
  };

  const filteredNumbers = activeFilter === 'all' 
    ? numbers 
    : numbers.filter(num => {
        if (activeFilter === 'master') return num % 11 === 0;
        if (activeFilter === 'special') return num % 10 === 0;
        if (activeFilter === 'powerful') return num % 9 === 0;
        return true;
      });

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Numerele Angelice de la 800 la 899
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Descoperă semnificația numerelor angelice de la 800 la 899. Fiecare număr poartă un mesaj unic de la îngerii păzitori.
        </p>

        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-center">Caută un Număr Angelic</h2>
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Introdu un număr între 800 și 899"
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Quick Reference Guide */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-xl font-semibold mb-4">Ghid Rapid de Referință</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Categorii de Numere</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-purple-500 mr-2"></div>
                  <span className="text-sm">Numere Master (811, 822, 833)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-sm">Numere Speciale (800, 810, 820)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm">Numere Puternice (808, 817, 826)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-pink-500 mr-2"></div>
                  <span className="text-sm">Numere Oglindă (801, 811, 821)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-gray-400 mr-2"></div>
                  <span className="text-sm">Numere Angelice Standard</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Cum să Interpretezi Numerele</h3>
              <ul className="text-sm space-y-2 list-disc pl-4">
                <li>Acorda atenție contextului în care vezi numărul</li>
                <li>Observă emoțiile pe care le simți când vezi numărul</li>
                <li>Identifică pattern-urile care apar în viața ta</li>
                <li>Folosește intuiția ta pentru interpretare</li>
                <li>Combină mai multe numere pentru mesaje complexe</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Frequent Numbers Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Numere Angelice Frecvente</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {frequentNumbers.map(({ number, category, icon: Icon, color }) => (
              <Link
                key={number}
                to={`/semnificatia-numarului-angelic-${number}`}
                className={`group p-6 rounded-lg border transition-transform hover:scale-105 ${getColorClasses(color)}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`p-2 rounded-full bg-white mr-3 ${color === 'purple' ? 'text-purple-600' : color === 'blue' ? 'text-blue-600' : color === 'green' ? 'text-green-600' : color === 'yellow' ? 'text-yellow-600' : color === 'pink' ? 'text-pink-600' : color === 'indigo' ? 'text-indigo-600' : 'text-amber-600'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-bold">{number}</h3>
                  </div>
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-white">
                    {category}
                  </span>
                </div>
                <p className="text-sm opacity-80">
                  {number === 811 && "Număr master de spiritualitate și intuiție"}
                  {number === 822 && "Număr secvențial de progres și evoluție"}
                  {number === 833 && "Număr de abundență și prosperitate"}
                  {number === 844 && "Număr de schimbare și transformare"}
                  {number === 855 && "Număr de dragoste și armonie"}
                  {number === 866 && "Număr de înțelepciune și claritate spirituală"}
                  {number === 877 && "Număr de abundență materială și spirituală"}
                  {number === 888 && "Număr de completare și finalizare"}
                </p>
                <div className="mt-4 flex justify-end">
                  <span className="text-sm font-medium group-hover:underline">
                    Explorează →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Popular Combinations */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Combinații Populare</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Numerele Master</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <Link 
                  to="/semnificatia-numarului-angelic-811" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  811
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-822" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  822
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-833" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  833
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
                  to="/semnificatia-numarului-angelic-801" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  801
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-811" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  811
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-821" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  821
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
                  to="/semnificatia-numarului-angelic-831" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  831
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-841" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  841
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-851" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  851
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
                  to="/semnificatia-numarului-angelic-861" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  861
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-871" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  871
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-881" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  881
                </Link>
              </div>
              <p className="text-gray-600">
                Această combinație sugerează că un ciclu se apropie de finalizare.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <Filter className="w-5 h-5" />
            <span>Filtrează Numerele</span>
            {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          
          {showFilters && (
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-full text-sm ${
                  activeFilter === 'all'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Toate Numerele
              </button>
              <button
                onClick={() => setActiveFilter('master')}
                className={`px-4 py-2 rounded-full text-sm ${
                  activeFilter === 'master'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Numere Master
              </button>
              <button
                onClick={() => setActiveFilter('special')}
                className={`px-4 py-2 rounded-full text-sm ${
                  activeFilter === 'special'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Numere Speciale
              </button>
              <button
                onClick={() => setActiveFilter('powerful')}
                className={`px-4 py-2 rounded-full text-sm ${
                  activeFilter === 'powerful'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Numere Puternice
              </button>
            </div>
          )}
        </div>

        {/* All Numbers Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredNumbers.map((number) => {
            const type = getNumberType(number);
            const isMaster = type === 'master';
            const isSpecial = type === 'special';
            const isPowerful = type === 'powerful';

            return (
              <Link
                key={number}
                to={`/semnificatia-numarului-angelic-${number}`}
                className={`p-4 rounded-lg border text-center transition-transform hover:scale-105 ${
                  isMaster
                    ? 'bg-purple-50 border-purple-200 text-purple-700'
                    : isSpecial
                    ? 'bg-blue-50 border-blue-200 text-blue-700'
                    : isPowerful
                    ? 'bg-green-50 border-green-200 text-green-700'
                    : 'bg-gray-50 border-gray-200 text-gray-700'
                }`}
              >
                <span className="font-semibold text-lg">{number}</span>
                {isMaster && <div className="text-xs mt-1">Număr Master</div>}
                {isSpecial && <div className="text-xs mt-1">Număr Special</div>}
                {isPowerful && <div className="text-xs mt-1">Număr Puternic</div>}
              </Link>
            );
          })}
        </div>

        {/* Educational Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Cum să Interpretezi Numerele Angelice</h2>
          <div className="prose max-w-none">
            <p>
              Numerele angelice sunt mesaje de la îngerii păzitori care ne ghidează în viața noastră. 
              Când vezi un număr angelic, este important să:
            </p>
            <ul>
              <li>Fie atent la contextul în care apare numărul</li>
              <li>Notezi sentimentele și gândurile tale în acel moment</li>
              <li>Meditezi asupra semnificației numărului</li>
              <li>Acționezi conform ghidării primite</li>
            </ul>
            <p>
              Fiecare număr angelic poartă un mesaj unic și personal. 
              Deși există interpretări generale, semnificația exactă poate varia în funcție de circumstanțele tale.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AngelNumbers800to899; 