import type { Milestone, Topic } from './types';

export const EXAM = {
  head: ['Paper', 'Time', 'Marks', 'Weight', 'Structure'],
  rows: [
    ['H408/11 The World of the Hero', '2h 30m', '100', '40%', 'Section A Homer (Odyssey): 10-mark passage question, 20-mark essay. Section B Aeneid: the same. Section C: a Homer passage and a Virgil passage, then a 30-mark comparative essay that must use secondary scholarship.'],
    ['H408/22 Imperial Image', '1h 45m', '75', '30%', 'Section A compulsory: short answers and commentary on a literary and a visual stimulus, then a 20-mark essay. Section B: one 30-mark essay from a choice of two.'],
    ['H408/34 Democracy and the Athenians', '1h 45m', '75', '30%', 'As above, plus a 10-mark question on a key thinker (Solon, Cleisthenes or a named author).'],
  ],
};

export const TOPICS: Topic[] = [
  {
    title: 'The Odyssey',
    weeks: 'Term 1, weeks 1 to 10',
    intro: 'Homer’s poem about getting home. Odysseus has been away twenty years; his son is a boy, his wife is besieged by suitors, and the gods are divided about him. The prescribed books cover his wanderings (5 to 13) and the return to Ithaca (16 to 23). You already know the story, so this pass is about how it is told: who speaks, what the similes do, where the poet withholds and reveals, and what the poem thinks a hero owes to gods, guests and family.',
    reading: 'Books 1, 5 to 13, 16 to 19, 21 to 23 in Rieu (Penguin) or Kline (free online). One book sheet per book.',
    practice: 'One eight-minute analytical paragraph a week; a 10-mark passage question by week 4; M1 essay in week 6; M2 Section A in week 10.',
  },
  {
    title: 'The Aeneid',
    weeks: 'Term 2, weeks 11 to 21',
    intro: 'Virgil’s answer to Homer, written for Augustus after a century of civil war. Aeneas carries the Trojan survivors to Italy because the gods say so, and the poem asks what that duty costs: Dido, Pallas, Turnus, and Aeneas himself. Read every book with two questions open. What does this say about Rome? And is Virgil celebrating or mourning?',
    reading: 'Books 1, 2, 4, 6, 7, 8, 9, 10, 11, 12 in West (Penguin) or Kline. Context lesson in week 11 before book 1.',
    practice: 'Weekly paragraph; M3 essay in week 14; the first Section C comparative essay (M4) in week 21.',
  },
  {
    title: 'Democracy and the Athenians',
    weeks: 'Term 3, weeks 22 to 34',
    intro: 'How the world’s first democracy worked, and what Athenians themselves said for and against it. The sources are tragedy (Aeschylus, Euripides), comedy (Aristophanes, a lot of it), history (Thucydides), philosophy (Plato) and a hostile pamphlet (the Old Oligarch). The key thinkers are Solon and Cleisthenes. This runs alongside the Ancient History Athens depth study, and most of the texts are shared: read them once, use them twice.',
    reading: 'The OCR literary-sources booklet has every prescribed passage. Textbook: Bloomsbury Components 31 and 34.',
    practice: '10-mark idea question in week 23; M5 essay in week 25; M6 full paper in week 32.',
  },
  {
    title: 'Imperial Image',
    weeks: 'Term 4, weeks 35 to 48',
    intro: 'How Augustus built and sold his public image: coins, the Ara Pacis, his Forum, the Prima Porta statue, the poets he patronised, and his own account of his deeds in the Res Gestae. The question is never just "what does this show" but "who was it for, what was it hiding, and did it work". Ancient History covers the Late Republic this term, which supplies the reason the image was needed.',
    reading: 'The OCR literary-sources booklet (Res Gestae, Horace, Propertius, Ovid, Suetonius). Textbook: Bloomsbury Components 21 and 22. The visual sources are all on museum websites.',
    practice: 'Coin sheet in week 35; M7 essay in week 39; M8 full paper in week 47.',
  },
];

export const T1 = {
  head: ['Week', 'Read', 'Practice'],
  rows: [
    { week: 1, cells: ['1', 'Book 1. Set up book sheets. Download past papers, mark schemes and examiners’ reports.', 'Half a page: what this poem is about, in your own words.'] },
    { week: 2, cells: ['2', 'Books 5, 6 (Calypso, Nausicaa)', 'Paragraph: the gods in book 5'] },
    { week: 3, cells: ['3', 'Books 7, 8 (Phaeacians, Demodocus)', 'Paragraph: xenia in Scheria'] },
    { week: 4, cells: ['4', 'Book 9 (Cyclops)', 'Paragraph: Odysseus as hero. First 10-mark passage question.'] },
    { week: 5, cells: ['5', 'Books 10, 11 (Circe, the Underworld)', 'Paragraph: what the Underworld says about heroism'] },
    { week: 6, cells: ['6', 'Books 12, 13 (Sirens, Scylla, Ithaca)', '<span class="ms">M1</span> 20-mark essay, 35 min'] },
    { week: 7, cells: ['7', 'Books 16, 17 (Telemachus, Eumaeus, the beggar)', 'Paragraph: the beggar and the suitors'] },
    { week: 8, cells: ['8', 'Books 18, 19 (Penelope, the scar)', 'Paragraph: Penelope’s intelligence'] },
    { week: 9, cells: ['9', 'Books 21, 22 (the bow, the slaughter)', 'Paragraph: is the slaughter justified?'] },
    { week: 10, cells: ['10', 'Book 23. Whole-poem review across the book sheets.', '<span class="ms">M2</span> Section A of a past paper (10 + 20 marks), 50 min'] },
  ],
};

export const T2 = {
  head: ['Week', 'Read', 'Practice'],
  rows: [
    { week: 11, cells: ['11', 'Book 1. Context lesson: Augustus, the civil wars, Virgil’s commission.', 'Paragraph: Jupiter’s prophecy and Augustan purpose'] },
    { week: 12, cells: ['12', 'Book 2 (the fall of Troy)', 'Paragraph: pietas in book 2'] },
    { week: 13, cells: ['13', 'Book 4 (Dido)', 'Paragraph: is Aeneas to blame?'] },
    { week: 14, cells: ['14', 'Book 6 (the Underworld, the parade of heroes)', '<span class="ms">M3</span> 20-mark essay'] },
    { week: 15, cells: ['15', 'Book 7 (Italy, Allecto, the catalogue)', 'Paragraph: furor'] },
    { week: 16, cells: ['16', 'Book 8 (Evander, the shield)', 'Paragraph: the shield and Actium'] },
    { week: 17, cells: ['17', 'Book 9 (Nisus and Euryalus)', 'Paragraph: the cost of war'] },
    { week: 18, cells: ['18', 'Book 10 (Pallas, Lausus, Mezentius)', 'Paragraph: Aeneas’s rage'] },
    { week: 19, cells: ['19', 'Book 11 (Camilla, the truce)', 'Paragraph: Turnus as Achilles or Hector'] },
    { week: 20, cells: ['20', 'Book 12 (the duel, the ending)', 'Comparative paragraph: the two endings'] },
    { week: 21, cells: ['21', 'Whole-poem review. Scholars’ card for Virgil.', '<span class="ms">M4</span> Section C comparative essay, 30 marks, 55 min'] },
  ],
};

export const T3 = {
  head: ['Week', 'Content', 'Practice'],
  rows: [
    { week: 22, cells: ['22', 'The constitution: Solon, Cleisthenes, Ephialtes, Pericles. Assembly, Council, courts, ostracism, lot versus election.', 'Timeline and vocabulary sheet (demos, isonomia, boule, ekklesia, dikasteria, strategoi)'] },
    { week: 23, cells: ['23', 'Solon and Cleisthenes as ideas', '10-mark idea question on Solon'] },
    { week: 24, cells: ['24', 'Aeschylus Eumenides 674 to 710; Euripides Suppliants 399 to 456', 'Paragraph: tragedy as a defence of democracy'] },
    { week: 25, cells: ['25', 'Thucydides 2.36 to 42 (Funeral Speech), 2.65', '<span class="ms">M5</span> 20-mark essay'] },
    { week: 26, cells: ['26', 'The Old Oligarch, all prescribed sections', 'Paragraph: his argument and his bias'] },
    { week: 27, cells: ['27', 'Aristophanes Knights 147 to 395; Wasps 471 to 712, 824 to 862, 891 to 994', 'Paragraph: how comedy criticises the demos'] },
    { week: 28, cells: ['28', 'Acharnians 1 to 203; Peace 729 to 760; Frogs 686 to 737', 'Paragraph: does Aristophanes hate democracy or demagogues?'] },
    { week: 29, cells: ['29', 'Ecclesiazusae 1 to 310', 'Paragraph: women and the Assembly as satire'] },
    { week: 30, cells: ['30', 'Plato Republic 6.485 to 487a, 6.488 to 489 (ship of state), 6.493 (the beast)', 'Paragraph: Plato’s case against democracy'] },
    { week: 31, cells: ['31', 'Democracy and empire; democracy at war; the coups of 411 and 404', '10-mark stimulus question'] },
    { week: 32, cells: ['32', 'Review: for and against, source by source', '<span class="ms">M6</span> full H408/34 paper, 1h 45m'] },
    { week: 33, cells: ['33 to 34', 'Consolidate. Summer reading: Suetonius Augustus.', 'End-of-year review'] },
  ],
};

export const T4 = {
  head: ['Week', 'Content', 'Practice'],
  rows: [
    { week: 35, cells: ['35', 'Context 44 to 27 BC. Names and titles: Octavian, Caesar, Augustus, princeps, imperator. The seven prescribed coins.', 'Coin sheet: obverse, reverse, message, date'] },
    { week: 36, cells: ['36', 'Res Gestae in full, with the textbook commentary', 'Paragraph: what the Res Gestae leaves out'] },
    { week: 37, cells: ['37', 'Suetonius Augustus 7 to 11, 17, 20 to 22, 26, 28 to 29', 'Paragraph: Suetonius as evidence for image-making'] },
    { week: 38, cells: ['38', 'Suetonius Augustus 31, 34, 53, 56 to 58, 64 to 65, 68 to 71, 95', '10-mark literary stimulus question'] },
    { week: 39, cells: ['39', 'Horace Epode 9, Odes 1.37 (Cleopatra), 3.14', '<span class="ms">M7</span> 20-mark essay'] },
    { week: 40, cells: ['40', 'Horace Odes 3.6, 4.4, 4.15, Carmen Saeculare', 'Paragraph: moral legislation and poetry'] },
    { week: 41, cells: ['41', 'Propertius 3.4, 3.11, 3.12, 4.6', 'Paragraph: does Propertius resist or serve?'] },
    { week: 42, cells: ['42', 'Ovid Metamorphoses 15.745 to 870 (the apotheosis of Caesar)', 'Paragraph: Julius Caesar in the image of Augustus'] },
    { week: 43, cells: ['43', 'Prima Porta Augustus, Head of Livia, Kalabsha Gate relief', 'Visual stimulus question, 10 marks'] },
    { week: 44, cells: ['44', 'The Ara Pacis in detail', 'Paragraph: family, peace, piety on the Ara Pacis'] },
    { week: 45, cells: ['45', 'Forum of Augustus, Mausoleum, Sebasteion at Aphrodisias', 'Paragraph: the image in the provinces'] },
    { week: 46, cells: ['46', 'Aeneid 1.257 to 296, 6.752 to 806, 8.671 to 731 as propaganda', 'Comparative paragraph'] },
    { week: 47, cells: ['47', 'Review by theme: peace, piety, family, victory, divinity, the restored Republic', '<span class="ms">M8</span> full H408/22 paper, 1h 45m'] },
    { week: 48, cells: ['48', 'Revision cards for all three components', 'Prepare for the January mocks'] },
  ],
};

export const MILESTONES: Milestone[] = [
  { code: 'M1', week: 6, when: 'Nov 2026', format: '20-mark essay, 35 min', question: '“The gods in the Odyssey are more interested in their own honour than in justice.” How far do you agree?', note: 'A good answer uses Athene’s partisanship, Poseidon’s grudge, Zeus’s speech in book 1 on Aegisthus, and Helios in book 12, and reaches a judgement rather than listing.' },
  { code: 'M2', week: 10, when: 'Dec 2026', format: 'Section A of a past paper, 50 min', question: 'The most recent OCR H408/11 Odyssey questions.', note: 'Mark with the OCR mark scheme and the levels grid.' },
  { code: 'M3', week: 14, when: 'Jan 2027', format: '20-mark essay, 35 min', question: 'How far does Virgil present Aeneas as a hero we are meant to admire?', note: 'Contrast books 2 and 4 with 10 and 12; use the Augustan context without letting it replace the text.' },
  { code: 'M4', week: 21, when: 'Mar 2027', format: 'Section C comparative essay, 30 marks, 55 min', question: '“Homer’s heroes fight for themselves; Virgil’s hero fights for the future.” To what extent do you agree?', note: 'Must quote two scholars and use both poems evenly. Examiners’ reports say Section C fails when candidates write two separate essays; mark for integration.' },
  { code: 'M5', week: 25, when: 'May 2027', format: '20-mark essay, 35 min', question: 'How convincing is Pericles’ picture of Athenian democracy in the Funeral Speech?', note: 'Treat the speech as Thucydides’ composition; test it against the Old Oligarch and Aristophanes; know what 2.65 says about Pericles’ successors.' },
  { code: 'M6', week: 32, when: 'Jun 2027', format: 'Full H408/34 paper, 1h 45m', question: 'The most recent OCR Democracy and the Athenians paper.' },
  { code: 'M7', week: 39, when: 'Oct 2027', format: '20-mark essay, 35 min', question: 'How successfully did Augustus use literature to shape his public image?', note: 'Distinguish commissioned praise (Horace 4.15) from ambivalence (Propertius); use the Res Gestae as Augustus’s own voice.' },
  { code: 'M8', week: 47, when: 'Dec 2027', format: 'Full H408/22 paper, 1h 45m', question: 'The most recent OCR Imperial Image paper.' },
];

export const LEVELS = {
  head: ['Level', 'Marks of 20', 'Marks of 30', 'What it looks like'],
  rows: [
    ['5', '17 to 20', '25 to 30', 'Argues from sentence one. A precise text reference in every paragraph. The opposite view considered and answered. In Section C, both poems woven together and scholars named.'],
    ['4', '13 to 16', '19 to 24', 'Clear argument and good references, but some paragraphs describe; the counter-view is raised and dropped.'],
    ['3', '9 to 12', '13 to 18', 'Relevant knowledge, mostly narrative; the argument appears in the conclusion.'],
    ['2', '5 to 8', '7 to 12', 'Generalised, few references, some inaccuracy.'],
    ['1', '1 to 4', '1 to 6', 'Very limited.'],
  ],
};
