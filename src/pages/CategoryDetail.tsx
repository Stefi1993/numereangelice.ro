import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ChevronRight } from 'lucide-react';

// Define categories for angel numbers (same as in Category.tsx)
const categories = [
  {
    id: 'master',
    title: 'Numere Master',
    description: 'Numerele master (11, 22, 33) sunt cele mai puternice și au o vibrație spirituală intensă.',
    numbers: [11, 22, 33],
    color: 'purple',
    longDescription: 'Numerele master sunt considerate cele mai puternice și mai semnificative în numerologie. Ele conțin o vibrație spirituală intensă și sunt adesea asociate cu un potențial spiritual ridicat. Când aceste numere apar în viața ta, indică faptul că ești pe calea corectă și că îngerii te ghidează spre un scop mai înalt.',
  },
  {
    id: 'triple',
    title: 'Numere Triple',
    description: 'Numerele triple (111, 222, 333, etc.) sunt mesaje clare de la îngeri care necesită atenție imediată.',
    numbers: [111, 222, 333, 444, 555, 666, 777, 888, 999],
    color: 'blue',
    longDescription: 'Numerele triple sunt formate din aceeași cifră repetată de trei ori. Ele sunt mesaje clare și directe de la îngeri care necesită atenție imediată. Fiecare număr triple are propria sa vibrație și semnificație, dar toate indică o conexiune puternică cu lumea spirituală și un mesaj important pentru tine.',
  },
  {
    id: 'repeating',
    title: 'Numere Repetitive',
    description: 'Numerele repetitive (1212, 2323, etc.) indică cicluri și pattern-uri în viața ta.',
    numbers: [1212, 2323, 3434, 4545, 5656, 6767, 7878, 8989],
    color: 'green',
    longDescription: 'Numerele repetitive sunt formate din două cifre care se repetă. Ele indică cicluri și pattern-uri în viața ta și sugerează că anumite situații sau lecții se pot repeta până când le înveți pe deplin. Aceste numere te încurajează să fii atent la pattern-urile din viața ta și să înveți din experiențe.',
  },
  {
    id: 'sequential',
    title: 'Numere Secvențiale',
    description: 'Numerele secvențiale (123, 234, 345, etc.) indică progres și evoluție.',
    numbers: [123, 234, 345, 456, 567, 678, 789],
    color: 'amber',
    longDescription: 'Numerele secvențiale sunt formate din cifre consecutive. Ele indică progres, evoluție și mișcare înainte. Când aceste numere apar în viața ta, sugerează că ești pe calea corectă și că progresezi în mod natural spre scopurile tale. Ele te încurajează să continui în direcția în care te afli.',
  },
  {
    id: 'mirror',
    title: 'Numere Oglindă',
    description: 'Numerele oglindă (1001, 2002, 3003, etc.) reflectă dualitatea și echilibrul.',
    numbers: [1001, 2002, 3003, 4004, 5005, 6006, 7007, 8008, 9009],
    color: 'pink',
    longDescription: 'Numerele oglindă sunt formate din aceeași cifră la început și la sfârșit, cu zerouri sau alte cifre în mijloc. Ele reflectă conceptul de dualitate și echilibru. Când aceste numere apar în viața ta, sugerează că este important să găsești echilibrul între diferite aspecte ale vieții tale, cum ar fi spiritual și material, interior și exterior.',
  },
];

const CategoryDetail: React.FC = () => {
  const { categoryId } = useParams<Record<string, string | undefined>>();
  
  // Find the category based on the ID
  const category = categories.find(cat => cat.id === categoryId);
  
  // If category not found, show a message
  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Categoria nu a fost găsită
        </h1>
        <p className="text-gray-600 mb-8">
          Ne pare rău, dar categoria pe care o cauți nu există.
        </p>
        <Link 
          to="/categorii" 
          className="inline-flex items-center text-purple-600 hover:text-purple-800"
        >
          <ArrowLeft size={16} className="mr-1" />
          Înapoi la categorii
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{category.title} | Numere Angelice</title>
        <meta 
          name="description" 
          content={`Explorează semnificația ${category.title.toLowerCase()}. ${category.description}`} 
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link 
            to="/categorii" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft size={16} className="mr-1" />
            Înapoi la categorii
          </Link>
        </div>

        <header className={`bg-${category.color}-50 rounded-lg p-8 mb-12 border border-${category.color}-200`}>
          <h1 className={`text-4xl font-bold text-${category.color}-800 mb-4`}>
            {category.title}
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            {category.description}
          </p>
          <p className="text-gray-600">
            {category.longDescription}
          </p>
        </header>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Numere în această categorie
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {category.numbers.map((num) => (
              <Link 
                key={num} 
                to={`/numar-angelic/${num}`}
                className={`p-4 bg-white rounded-lg shadow-sm border border-${category.color}-200 hover:shadow-md transition-shadow duration-200 text-center`}
              >
                <span className={`text-2xl font-bold text-${category.color}-700`}>
                  {num}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Cum să interpretezi {category.title.toLowerCase()}
          </h2>
          <p className="text-gray-700 mb-6">
            Când observi {category.title.toLowerCase()} în viața ta, este important să acorzi atenție contextului
            și la sentimentele pe care le simți. Iată câteva sfaturi pentru interpretarea acestor numere:
          </p>
          
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Contextul apariției
              </h3>
              <p className="text-gray-600">
                Fiecare număr angelic poate avea o semnificație diferită în funcție de contextul în care apare.
                De exemplu, dacă vezi un număr master în timpul unei decizii importante, acesta poate indica
                că ești pe calea corectă.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Intuiția ta
              </h3>
              <p className="text-gray-600">
                Ascultă de intuiția ta când interpretezi numerele angelice. Dacă un număr îți atrage atenția
                și simți o conexiune specială cu el, acesta poate avea o semnificație personală.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Frecvența apariției
              </h3>
              <p className="text-gray-600">
                Cu cât un număr apare mai des, cu atât mesajul este mai urgent și mai important.
                Dacă vezi același număr în mod repetat, acorda-i atenție specială.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/calculator" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
          >
            Calculează numărul tău angelic
            <ChevronRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default CategoryDetail; 