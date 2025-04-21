import { AngelNumber, AngelNumberRange, AngelNumberCategory } from '../types/angelNumber';

export const angelNumberRanges: AngelNumberRange[] = [
  {
    start: 0,
    end: 99,
    title: 'Numere Angelice 0-99',
    description: 'Numerele de bază care formează fundația mesajelor angelice.',
  },
  {
    start: 100,
    end: 199,
    title: 'Numere Angelice 100-199',
    description: 'Numere care indică începuturi și transformări spirituale.',
  },
  {
    start: 200,
    end: 299,
    title: 'Numere Angelice 200-299',
    description: 'Mesaje despre echilibru și armonie în viață.',
  },
  {
    start: 300,
    end: 399,
    title: 'Numere Angelice 300-399',
    description: 'Ghidare pentru creștere personală și spirituală.',
  },
  {
    start: 400,
    end: 499,
    title: 'Numere Angelice 400-499',
    description: 'Mesaje despre stabilitate și fundație solidă.',
  },
  {
    start: 500,
    end: 599,
    title: 'Numere Angelice 500-599',
    description: 'Semnale pentru schimbări majore în viață.',
  },
  {
    start: 600,
    end: 699,
    title: 'Numere Angelice 600-699',
    description: 'Echilibru între material și spiritual.',
  },
  {
    start: 700,
    end: 799,
    title: 'Numere Angelice 700-799',
    description: 'Mesaje despre înțelepciune și iluminare.',
  },
  {
    start: 800,
    end: 899,
    title: 'Numere Angelice 800-899',
    description: 'Abundență și prosperitate spirituală.',
  },
  {
    start: 900,
    end: 999,
    title: 'Numere Angelice 900-999',
    description: 'Finalizare și împlinire spirituală.',
  },
];

// Sample angel numbers data - expand this with more numbers
export const angelNumbers: AngelNumber[] = [
  {
    number: 111,
    title: 'Numărul Angelic 111',
    description: 'Numărul 111 este un semn puternic de manifestare și creație. Este un moment perfect pentru a-ți seta intențiile și a începe noi proiecte.',
    spiritualMeaning: 'Reprezintă alinierea cu energia divină și deschiderea către noi începuturi spirituale.',
    loveMeaning: 'În dragoste, 111 indică începutul unei noi etape sau relații semnificative.',
    careerMeaning: 'Este momentul perfect pentru a începe noi proiecte sau a face schimbări în carieră.',
    isMasterNumber: false,
    isTripleNumber: true,
    keywords: ['Manifestare', 'Creație', 'Început', 'Aliniere', 'Oportunitate'],
    usageAdvice: 'Când vezi 111, oprește-te și setează-ți intențiile pentru ceea ce dorești să creezi în viața ta.',
  },
  {
    number: 222,
    title: 'Numărul Angelic 222',
    description: 'Numărul 222 este un semn de echilibru, armonie și sincronicitate în viața ta.',
    spiritualMeaning: 'Indică prezența ghizilor spirituali și confirmarea că ești pe calea corectă.',
    loveMeaning: 'Reprezintă armonie în relații și parteneriate.',
    careerMeaning: 'Sugerează colaborări fructuoase și echilibru între muncă și viața personală.',
    isMasterNumber: false,
    isTripleNumber: true,
    keywords: ['Echilibru', 'Armonie', 'Sincronicitate', 'Parteneriat', 'Dualitate'],
    usageAdvice: 'Folosește energia lui 222 pentru a crea mai multă armonie în toate aspectele vieții tale.',
  },
  {
    number: 333,
    title: 'Numărul Angelic 333',
    description: 'Numărul 333 este un semn de protecție divină și creativitate amplificată.',
    spiritualMeaning: 'Reprezintă prezența Maeștrilor Ascensionați și suport spiritual puternic.',
    loveMeaning: 'Indică creștere și expansiune în relații, precum și exprimarea creativă a iubirii.',
    careerMeaning: 'Este un semn să-ți folosești creativitatea în carieră și să ai încredere în abilitățile tale.',
    isMasterNumber: false,
    isTripleNumber: true,
    keywords: ['Creativitate', 'Protecție', 'Expresie', 'Creștere', 'Ghidare'],
    usageAdvice: 'Când vezi 333, este momentul să-ți exprimi creativitatea și să ai încredere în ghidarea divină.',
  },
];

// Helper function to get angel number data
export const getAngelNumber = (number: number): AngelNumber | undefined => {
  return angelNumbers.find((an) => an.number === number);
};

// Helper function to get angel numbers in a range
export const getAngelNumbersInRange = (start: number, end: number): AngelNumber[] => {
  return angelNumbers.filter((an) => an.number >= start && an.number <= end);
};

// Helper function to get range data
export const getAngelNumberRange = (start: number): AngelNumberRange | undefined => {
  return angelNumberRanges.find((range) => range.start === start);
}; 