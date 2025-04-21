import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Despre Noi</h3>
            <p className="text-gray-600">
              Descoperă semnificația numerelor angelice și mesajele divine ascunse în cifrele care apar în viața ta.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Link-uri Utile</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/calculator" className="text-gray-600 hover:text-purple-700">
                  Calculator Numere Angelice
                </Link>
              </li>
              <li>
                <a
                  href="https://somnulperfect.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-700"
                >
                  Somnul Perfect
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@numere-angelice.ro"
                  className="text-gray-600 hover:text-purple-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {currentYear} Numere Angelice. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 