import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AngelNumberRange: React.FC = () => {
  const { start, end } = useParams<Record<string, string | undefined>>();

  // Generate SEO-friendly content based on the range
  const pageTitle = `Numere Angelice de la ${start} la ${end}`;
  const pageDescription = `Explorează semnificațiile numerelor angelice de la ${start} la ${end}. Descoperă mesajele divine și ghidarea spirituală pe care aceste numere le poartă.`;
  const pageKeywords = [
    `numere angelice ${start}-${end}`,
    `semnificatii numere ${start}-${end}`,
    `mesaje ingeri ${start}-${end}`,
    `numerologie ${start}-${end}`,
    `numere ingeri ${start}-${end}`,
    `semnificatia numerelor ${start}-${end}`,
    `ghidare spirituala ${start}-${end}`,
    `numere divine ${start}-${end}`,
    `semnificatii numerelor angelice ${start}-${end}`,
    `Mesajele ingerilor prin intermediul numerelor ${start}-${end}`
  ];

  // Generate array of numbers in the range
  const numbers = Array.from(
    { length: Number(end) - Number(start) + 1 },
    (_, i) => Number(start) + i
  );

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
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {pageTitle}
          </h1>
          <p className="text-xl text-gray-600">
            Explorează semnificațiile numerelor angelice din acest interval
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {numbers.map((number) => (
            <Link
              key={number}
              to={`/semnificatia-numarului-angelic-${number}`}
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-bold text-purple-600 mb-2">
                Numărul Angelic {number}
              </h2>
              <p className="text-gray-600">
                Descoperă semnificația și mesajele divine ale numărului {number}
              </p>
            </Link>
          ))}
        </div>

        {/* Ad Placeholder */}
        <div className="my-8 p-4 bg-gray-100 text-center rounded-lg">
          Spațiu pentru reclamă
        </div>
      </div>
    </>
  );
};

export default AngelNumberRange; 