import type { Lesson } from './types';
import { NUMBER } from './lessons-number';
import { MEASURES } from './lessons-measures';
import { DATA } from './lessons-data';

export const MODULE_NAMES: Record<string, string> = {
  X: 'Exam craft', N1: 'Numbers', N2: 'Fractions', N3: 'Decimals', N4: 'Percentages', N5: 'Ratio and proportion', N6: 'Formulas',
  M1: 'Money', M2: 'Units and time', M3: 'Perimeter, area, volume', M4: 'Scale, coordinates, 3D', H1: 'Averages', H2: 'Charts and probability',
};

export const LESSONS: Lesson[] = [...NUMBER, ...MEASURES, ...DATA];

export const lessonsForWeek = (n: number) => LESSONS.filter((l) => l.weeks.includes(n));
export const lessonUrl = (l: Lesson) => `/study/maths/lessons/${l.slug}/`;
