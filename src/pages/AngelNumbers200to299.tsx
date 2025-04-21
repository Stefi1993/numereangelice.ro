import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, ChevronDown, ChevronUp, Heart, DollarSign, Star, Zap, Crown, Shield, Sparkles, Target, Compass, Lightbulb, Gem, Award, Trophy, Medal, Gift, Diamond } from 'lucide-react';

const AngelNumbers200to299: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();

  // Generate numbers from 200 to 299
  const numbers = Array.from({ length: 100 }, (_, i) => i + 200);

  // SEO-friendly content
  const pageTitle = 'Numerele Angelice de la 200 la 299 | Ghid Complet cu Semnificații';
  const pageDescription = 'Descoperă semnificația numerelor angelice de la 200 la 299. Ghid complet cu interpretări pentru fiecare număr angelic, inclusiv semnificații spirituale, în dragoste și carieră.';
  const pageKeywords = 'numere angelice 200-299, semnificatia numerelor angelice, numere angelice dragoste, numere angelice abundenta, numere angelice spiritualitate';

  // Frequent numbers with their categories and icons
  const frequentNumbers = [
    { number: 222, category: 'Spiritualitate', icon: Sparkles, color: 'purple' },
    { number: 234, category: 'Progres', icon: Target, color: 'blue' },
    { number: 255, category: 'Abundență', icon: DollarSign, color: 'green' },
    { number: 266, category: 'Dragoste', icon: Heart, color: 'pink' },
    { number: 277, category: 'Înțelepciune', icon: Lightbulb, color: 'indigo' },
    { number: 288, category: 'Abundență', icon: DollarSign, color: 'green' },
    { number: 299, category: 'Completare', icon: Trophy, color: 'amber' }
  ];

  // Popular combinations
  const popularCombinations = [
    { number: '201', category: 'Început Nou', icon: Star, color: 'yellow' },
    { number: '211', category: 'Pace', icon: Shield, color: 'blue' },
    { number: '221', category: 'Creativitate', icon: Sparkles, color: 'purple' },
    { number: '231', category: 'Stabilitate', icon: Target, color: 'green' },
    { number: '241', category: 'Schimbare', icon: Zap, color: 'yellow' },
    { number: '251', category: 'Armonie', icon: Heart, color: 'pink' },
    { number: '261', category: 'Înțelepciune', icon: Lightbulb, color: 'indigo' },
    { number: '271', category: 'Abundență', icon: DollarSign, color: 'green' },
    { number: '281', category: 'Completare', icon: Trophy, color: 'amber' }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const num = parseInt(searchQuery);
    if (!isNaN(num) && num >= 200 && num <= 299) {
      navigate(`/semnificatia-numarului-angelic-${num}`);
    } else {
      navigate('/numerele-angelice-de-la-200-la-299');
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
          Numerele Angelice de la 200 la 299
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Descoperă semnificația numerelor angelice de la 200 la 299. Fiecare număr poartă un mesaj unic de la îngerii păzitori.
        </p>

        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-center">Caută un Număr Angelic</h2>
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Introdu un număr între 200 și 299"
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
                  <span className="text-sm">Numere Master (222, 233, 244)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-sm">Numere Speciale (200, 210, 220)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm">Numere Puternice (207, 216, 225)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-pink-500 mr-2"></div>
                  <span className="text-sm">Numere Oglindă (201, 211, 221)</span>
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
                className={`group block p-6 rounded-lg border transition-transform hover:scale-105 ${getColorClasses(color)}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-6 h-6" />
                  <div>
                    <h3 className="font-semibold text-lg">Numărul {number}</h3>
                    <span className="text-sm font-medium">{category}</span>
                  </div>
                </div>
                <p className="text-sm">
                  {number === 222 && "Număr master de spiritualitate și intuiție"}
                  {number === 234 && "Număr secvențial de progres și evoluție"}
                  {number === 255 && "Număr de abundență și prosperitate"}
                  {number === 266 && "Număr de dragoste și armonie"}
                  {number === 277 && "Număr de înțelepciune și claritate spirituală"}
                  {number === 288 && "Număr de abundență materială și spirituală"}
                  {number === 299 && "Număr de completare și finalizare"}
                </p>
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
                  to="/semnificatia-numarului-angelic-222" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  222
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-233" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  233
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-244" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  244
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
                  to="/semnificatia-numarului-angelic-201" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  201
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-211" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  211
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-221" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  221
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

export default AngelNumbers200to299; 