import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Search, Star, Sparkles, Heart, Briefcase, Zap, ChevronRight, Filter, Download, Info, X } from 'lucide-react';

const AngelNumbers0to99: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
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
    { number: 11, category: 'Spiritualitate', icon: <Sparkles size={20} />, color: 'purple' },
    { number: 22, category: 'Abundență', icon: <Zap size={20} />, color: 'amber' },
    { number: 33, category: 'Spiritualitate', icon: <Sparkles size={20} />, color: 'purple' },
    { number: 44, category: 'Stabilitate', icon: <Star size={20} />, color: 'blue' },
    { number: 55, category: 'Schimbare', icon: <Zap size={20} />, color: 'amber' },
    { number: 66, category: 'Dragoste', icon: <Heart size={20} />, color: 'pink' },
    { number: 77, category: 'Spiritualitate', icon: <Sparkles size={20} />, color: 'purple' },
    { number: 88, category: 'Abundență', icon: <Zap size={20} />, color: 'amber' },
    { number: 99, category: 'Completare', icon: <Star size={20} />, color: 'blue' }
  ];

  // Define popular combinations
  const popularCombinations = [
    { numbers: [11, 22, 33], name: 'Numerele Master', description: 'Această secvență indică o perioadă de transformare spirituală profundă și manifestare.' },
    { numbers: [12, 21], name: 'Numerele Oglindă', description: 'Această combinație sugerează că trebuie să privești situația din două perspective diferite.' },
    { numbers: [44, 55, 66], name: 'Numerele de Stabilitate', description: 'Această secvență indică o perioadă de consolidare și armonie în viața ta.' },
    { numbers: [77, 88, 99], name: 'Numerele de Completare', description: 'Această combinație sugerează că un ciclu se apropie de finalizare.' }
  ];

  const handleSearch = (e: React.FormEvent) => {
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
  const getColorClasses = (color: string) => {
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
  const getNumberType = (num: number) => {
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
    if (!activeFilter) return numbers;
    
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
  const getNumberLink = (number: number) => {
    // Special case for number 1
    if (number === 1) {
      return '/semnificatia-numarului-angelic-1';
    }
    
    // For other numbers, use the standard format
    return `/semnificatia-numarului-angelic-${number}`;
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
        <meta property="og:image" content="/src/images/numere-angelice-0-99.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="/src/images/numere-angelice-0-99.jpg" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Numerele Angelice de la 0 la 99
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explorează semnificațiile complete ale numerelor angelice de la 0 la 99. 
            Descoperă mesajele pe care îngerii îți transmit prin intermediul acestor numere speciale.
          </p>
        </header>

        {/* Search Section */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-md border border-purple-100">
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
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Introdu un număr (0-99)..."
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
          </form>
        </section>

        {/* Quick Reference Guide */}
        <section className="mb-12 bg-white p-6 rounded-xl shadow-md border border-blue-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <Info className="mr-2 text-blue-600" size={24} />
              Ghid Rapid de Referință
            </h2>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center text-purple-600 hover:text-purple-800"
            >
              {showFilters ? <X size={20} /> : <Filter size={20} />}
              <span className="ml-1">{showFilters ? 'Ascunde Filtre' : 'Filtrează'}</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Tipuri de Numere</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-purple-500 mr-2"></div>
                  <span className="text-sm">Numere Master (11, 22, 33)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-amber-500 mr-2"></div>
                  <span className="text-sm">Numere Repetitive (44, 55, 66, 77, 88, 99)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-sm">Numere Secvențiale (12, 23, 34, etc.)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-pink-500 mr-2"></div>
                  <span className="text-sm">Numere Oglindă (10, 20, 30, etc.)</span>
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
          
          {showFilters && (
            <div className="mt-6 pt-4 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Filtrează Numerele</h3>
              <div className="flex flex-wrap gap-2">
                {filterOptions.map((option) => (
                  <button
                    key={option.value || 'all'}
                    onClick={() => setActiveFilter(option.value)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      activeFilter === option.value
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Frequent Numbers Section - Enhanced */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Numere Angelice Frecvente
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {frequentNumbers.map((item) => (
              <Link
                key={item.number}
                to={`/semnificatia-numarului-angelic-${item.number}`}
                className={`group p-6 rounded-xl shadow-md border transition-all duration-300 transform hover:scale-105 ${getColorClasses(item.color)}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`p-2 rounded-full bg-white mr-3 ${item.color === 'purple' ? 'text-purple-600' : item.color === 'amber' ? 'text-amber-600' : item.color === 'blue' ? 'text-blue-600' : 'text-pink-600'}`}>
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{item.number}</h3>
                  </div>
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-white">
                    {item.category}
                  </span>
                </div>
                <p className="text-sm opacity-80">
                  {item.number === 11 && "Număr master de spiritualitate și intuiție"}
                  {item.number === 22 && "Număr master de abundență și manifestare"}
                  {item.number === 33 && "Număr master de guvernare și expresie"}
                  {item.number === 44 && "Număr de stabilitate și fundație puternică"}
                  {item.number === 55 && "Număr de schimbare și transformare"}
                  {item.number === 66 && "Număr de dragoste și armonie"}
                  {item.number === 77 && "Număr de spiritualitate și înțelepciune"}
                  {item.number === 88 && "Număr de abundență și prosperitate"}
                  {item.number === 99 && "Număr de completare și finalizare"}
                </p>
                <div className="mt-4 flex justify-end">
                  <span className="text-sm font-medium group-hover:underline">
                    Explorează →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Popular Combinations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Combinații Populare de Numere
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularCombinations.map((combo, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-purple-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{combo.name}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {combo.numbers.map((num) => (
                    <Link
                      key={num}
                      to={`/semnificatia-numarului-angelic-${num}`}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                    >
                      {num}
                    </Link>
                  ))}
                </div>
                <p className="text-gray-600">{combo.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* All Numbers Grid - Enhanced */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">
              {activeFilter ? `Numerele de tip "${activeFilter}"` : 'Toate Numerele Angelice'}
            </h2>
            <a 
              href="/ghid-numere-angelice.pdf" 
              download
              className="flex items-center text-purple-600 hover:text-purple-800"
            >
              <Download size={20} />
              <span className="ml-1">Descarcă Ghidul</span>
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredNumbers.map((num) => {
              const { type, color } = getNumberType(num);
              const colorClasses = getColorClasses(color);
              
              return (
                <Link
                  key={num}
                  to={getNumberLink(num)}
                  className={`group p-4 rounded-lg shadow-md border transition-all duration-300 transform hover:scale-105 ${colorClasses}`}
                >
                  <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold mb-1">{num}</h2>
                    <p className="text-xs font-medium mb-2">{type}</p>
                    <div className="mt-2 flex items-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Vezi semnificația</span>
                      <ChevronRight size={14} className="ml-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <div className="bg-white p-6 md:p-10 rounded-xl shadow-md border border-blue-100">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Cum să Interpretezi Numerele Angelice</h2>
          <div className="prose prose-lg max-w-none">
            <p className="mb-4">
              Numerele angelice sunt mesaje de la îngerii păzitori care apar în viața ta pentru a-ți oferi ghidare și suport.
              Când vezi repetat un număr specific, este un semn că îngerii încearcă să-ți transmită un mesaj important.
            </p>
            <p className="mb-4">
              Pentru a interpreta corect numerele angelice, acorda atenție următoarelor aspecte:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Contextul în care vezi numărul (unde, când, ce făceai)</li>
              <li className="mb-2">Emoțiile pe care le simți când vezi numărul</li>
              <li className="mb-2">Pattern-urile care apar în viața ta în perioada respectivă</li>
              <li className="mb-2">Intuiția ta și mesajele pe care le primești în meditație sau rugăciune</li>
            </ul>
            <p>
              Amintă-te că numerele angelice sunt un instrument de comunicare și ghidare, nu de predicție.
              Ei îți oferă sugestii și suport, dar tu ești cel care ia deciziile finale în viața ta.
            </p>
          </div>
        </div>

        {/* Ad Placeholder */}
        <div className="my-8 p-4 bg-gray-100 text-center rounded-lg">
          Spațiu pentru reclamă
        </div>
      </div>
    </>
  );
};

export default AngelNumbers0to99; 