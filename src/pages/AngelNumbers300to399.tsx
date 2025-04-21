import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, ChevronDown, ChevronUp, Heart, DollarSign, Star, Zap, Crown, Shield, Sparkles, Target, Compass, Lightbulb, Gem, Award, Trophy, Medal, Gift, Diamond } from 'lucide-react';

const AngelNumbers300to399: React.FC = () => {
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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const num = parseInt(searchQuery);
    if (!isNaN(num) && num >= 300 && num <= 399) {
      navigate(`/semnificatia-numarului-angelic-${num}`);
    } else {
      navigate('/numerele-angelice-de-la-300-la-399');
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
          Numerele Angelice de la 300 la 399
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Descoperă semnificația numerelor angelice de la 300 la 399. Fiecare număr poartă un mesaj unic de la îngerii păzitori.
        </p>

        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-center">Caută un Număr Angelic</h2>
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Introdu un număr între 300 și 399"
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
                  <span className="text-sm">Numere Master (333, 344, 355)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-sm">Numere Speciale (300, 310, 320)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm">Numere Puternice (306, 315, 324)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-pink-500 mr-2"></div>
                  <span className="text-sm">Numere Oglindă (301, 321, 331)</span>
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
                  {number === 333 && "Număr master de spiritualitate și intuiție"}
                  {number === 322 && "Număr secvențial de progres și evoluție"}
                  {number === 311 && "Număr de abundență și prosperitate"}
                  {number === 300 && "Număr de schimbare și transformare"}
                  {number === 344 && "Număr de dragoste și armonie"}
                  {number === 355 && "Număr de înțelepciune și claritate spirituală"}
                  {number === 366 && "Număr de abundență materială și spirituală"}
                  {number === 377 && "Număr de completare și finalizare"}
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
                  to="/semnificatia-numarului-angelic-333" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  333
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-344" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  344
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-355" 
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                >
                  355
                </Link>
              </div>
              <p className="text-gray-600">
                Această secvență indică o perioadă de transformare spirituală profundă și manifestare.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Numerele Oglindă</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <Link 
                  to="/semnificatia-numarului-angelic-301" 
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                >
                  301
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-321" 
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                >
                  321
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-331" 
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                >
                  331
                </Link>
              </div>
              <p className="text-gray-600">
                Aceste numere indică o perioadă de reflectare și echilibru în viața ta.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-green-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Numerele de Stabilitate</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <Link 
                  to="/semnificatia-numarului-angelic-341" 
                  className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium hover:bg-green-200 transition-colors"
                >
                  341
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-351" 
                  className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium hover:bg-green-200 transition-colors"
                >
                  351
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-361" 
                  className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium hover:bg-green-200 transition-colors"
                >
                  361
                </Link>
              </div>
              <p className="text-gray-600">
                Această secvență indică o perioadă de stabilitate și echilibru în viața ta.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-amber-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Numerele de Completare</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <Link 
                  to="/semnificatia-numarului-angelic-371" 
                  className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium hover:bg-amber-200 transition-colors"
                >
                  371
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-381" 
                  className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium hover:bg-amber-200 transition-colors"
                >
                  381
                </Link>
                <Link 
                  to="/semnificatia-numarului-angelic-391" 
                  className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium hover:bg-amber-200 transition-colors"
                >
                  391
                </Link>
              </div>
              <p className="text-gray-600">
                Această secvență indică o perioadă de completare și finalizare a ciclurilor de viață.
              </p>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Toate Numerele Angelice</h2>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Filter className="w-4 h-4" />
              <span>Filtrează</span>
              {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {showFilters && (
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    activeFilter === 'all' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Toate
                </button>
                <button
                  onClick={() => setActiveFilter('master')}
                  className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 ${
                    activeFilter === 'master' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                  }`}
                >
                  <Crown className="w-4 h-4" />
                  Numere Master
                </button>
                <button
                  onClick={() => setActiveFilter('special')}
                  className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 ${
                    activeFilter === 'special' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  }`}
                >
                  <Star className="w-4 h-4" />
                  Numere Speciale
                </button>
                <button
                  onClick={() => setActiveFilter('powerful')}
                  className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 ${
                    activeFilter === 'powerful' 
                      ? 'bg-green-600 text-white' 
                      : 'bg-green-100 text-green-700 hover:bg-green-200'
                  }`}
                >
                  <Zap className="w-4 h-4" />
                  Numere Puternice
                </button>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredNumbers.map((number) => {
              const type = getNumberType(number);
              const colorClass = type === 'master' 
                ? 'bg-purple-50 text-purple-700 border-purple-200' 
                : type === 'special' 
                  ? 'bg-blue-50 text-blue-700 border-blue-200' 
                  : type === 'powerful' 
                    ? 'bg-green-50 text-green-700 border-green-200' 
                    : 'bg-gray-50 text-gray-700 border-gray-200';
              
              return (
                <Link
                  key={number}
                  to={`/semnificatia-numarului-angelic-${number}`}
                  className={`group p-6 rounded-lg border transition-all duration-300 hover:scale-105 hover:shadow-md ${colorClass}`}
                >
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="flex items-center justify-center mb-2">
                      {type === 'master' && <Crown className="w-5 h-5 mr-2 text-purple-500" />}
                      {type === 'special' && <Star className="w-5 h-5 mr-2 text-blue-500" />}
                      {type === 'powerful' && <Zap className="w-5 h-5 mr-2 text-green-500" />}
                      {type === 'regular' && <Sparkles className="w-5 h-5 mr-2 text-gray-500" />}
                      <span className="text-2xl font-bold">{number}</span>
                    </div>
                    <div className="text-xs opacity-70 mt-1">
                      {type === 'master' && 'Număr Master'}
                      {type === 'special' && 'Număr Special'}
                      {type === 'powerful' && 'Număr Puternic'}
                      {type === 'regular' && 'Număr Angelic'}
                    </div>
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Sparkles className="w-4 h-4 text-purple-500" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Educational Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Cum să Interpretezi Numerele Angelice</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              Numerele angelice de la 300 la 399 poartă mesaje specifice despre evoluția spirituală, 
              transformarea personală și alinierea cu scopul tău divin. Aceste numere sunt deosebit 
              de puternice în perioadele de tranziție și schimbare.
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Sfaturi pentru Interpretare</h3>
            <ul className="text-sm space-y-2 list-disc pl-4 text-gray-600">
              <li>Observă frecvența cu care apar anumite numere</li>
              <li>Notează contextul și emoțiile asociate</li>
              <li>Meditează asupra semnificației lor</li>
              <li>Asociază numerele cu situațiile din viața ta</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AngelNumbers300to399; 