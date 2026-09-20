export interface Week {
  n: number;           // teaching week number, 1 = Mon 5 Oct 2026
  mon: string;         // ISO Monday date
  term: string;        // 'T1' .. 'T6'
  label?: string;      // optional headline, e.g. 'Maths exam week'
  cc: string;          // Classical Civilisation focus
  ah: string;          // Ancient History focus
  rs: string;          // Religious Studies focus
  maths: string;       // Maths focus
  friday?: string;     // Friday timed piece
  event?: string;      // milestone / logistics
}

export interface Break {
  from: string;        // ISO Monday
  to: string;          // ISO Sunday
  label: string;
  note?: string;
}

export interface Milestone {
  code: string;        // 'M1'
  week: number;
  when: string;        // 'Nov 2026'
  format: string;      // '20-mark essay, 35 min'
  question: string;
  note?: string;
}

export interface Person {
  id: string;
  name: string;
  dates: string;
  role: string;
  bio: string;
  tags?: string[];
}

export interface Topic {
  title: string;
  weeks: string;
  intro: string;       // one-paragraph orientation for the student
  reading?: string;
  practice?: string;
}

export interface Resource {
  title: string;
  url?: string;
  note?: string;
  isbn?: string;
}
