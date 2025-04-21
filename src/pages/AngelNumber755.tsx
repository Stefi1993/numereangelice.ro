import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Search } from 'lucide-react';
import { toast } from 'sonner';

const AngelNumber755: React.FC = () => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('/src/articole/numar_angelic_755_generated.txt');
        if (!response.ok) {
          throw new Error('Failed to fetch content');
        }
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error('Error fetching content:', error);
        toast.error('Nu am putut încărca conținutul. Vă rugăm să încercați din nou.');
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Semnificația numărului angelic 755',
          text: 'Descoperă semnificația numărului angelic 755',
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success('Link-ul a fost copiat în clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const number = parseInt(searchQuery.trim(), 10);
      if (!isNaN(number) && number >= 0 && number <= 999) {
        if (number === 755) {
          // Already on the page for this number
          toast.info('Ești deja pe pagina numărului angelic 755');
        } else {
          navigate(`/semnificatia-numarului-angelic-${number}`);
        }
      } else {
        toast.error('Te rugăm să introduci un număr valid între 0 și 999');
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Semnificația numărului angelic 755 | Mesajul Îngerilor</title>
        <meta name="description" content="Descoperă semnificația profundă a numărului angelic 755 și mesajul special pe care îngerii îl transmit prin intermediul acestui număr." />
        <meta name="keywords" content="număr angelic 755, semnificație 755, mesaj îngeri 755, semnificatia numarului 755, numarul angelic 755, de ce vad numarul 755, semnificatia numarului angelic 755, Mesajul ingerilor prin intermediul numarului 755, Semnificatie spirituala 755, numerologie 755, numar inger 755" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Semnificația numărului angelic 755 | Mesajul Îngerilor" />
        <meta property="og:description" content="Descoperă semnificația profundă a numărului angelic 755 și mesajul special pe care îngerii îl transmit prin intermediul acestui număr." />
        <meta property="og:image" content="/src/images/semnificatia-numarului-angelic-755.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Semnificația numărului angelic 755 | Mesajul Îngerilor" />
        <meta name="twitter:description" content="Descoperă semnificația profundă a numărului angelic 755 și mesajul special pe care îngerii îl transmit prin intermediul acestui număr." />
        <meta name="twitter:image" content="/src/images/semnificatia-numarului-angelic-755.jpg" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center text-purple-600 hover:text-purple-800 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Înapoi
          </button>
          <button 
            onClick={handleShare}
            className="flex items-center text-purple-600 hover:text-purple-800 transition-colors"
          >
            <Share2 className="mr-2" size={20} />
            Distribuie
          </button>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          Semnificația numărului angelic 755
        </h1>

        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <img 
            src="/src/images/semnificatia-numarului-angelic-755.jpg" 
            alt="Semnificația numărului angelic 755" 
            className="w-full h-auto object-cover"
          />
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : (
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}

        <div className="mt-12 bg-purple-50 p-6 rounded-xl border border-purple-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Alte Numere Angelice Populare</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
            {[11, 22, 33, 111, 222, 333, 444, 555].map((number) => (
              <button
                key={number}
                onClick={() => navigate(`/semnificatia-numarului-angelic-${number}`)}
                className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center font-medium text-purple-700 border border-purple-100"
              >
                {number}
              </button>
            ))}
          </div>
          
          {/* Search Section */}
          <div className="mt-6 pt-6 border-t border-purple-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Caută un Număr Angelic (0-999)</h3>
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2">
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
            </form>
            <p className="mt-2 text-sm text-gray-500">
              Exemplu: "11", "222", "333", "444"
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AngelNumber755;
