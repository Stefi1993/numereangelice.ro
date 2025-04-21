export interface AngelNumber {
  number: number;
  title: string;
  description: string;
  spiritualMeaning: string;
  loveMeaning: string;
  careerMeaning: string;
  isMasterNumber: boolean;
  isTripleNumber: boolean;
  keywords: string[];
  usageAdvice: string;
}

export interface AngelNumberRange {
  start: number;
  end: number;
  title: string;
  description: string;
}

export interface AngelNumberCategory {
  range: AngelNumberRange;
  numbers: AngelNumber[];
} 