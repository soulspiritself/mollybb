import type { Milestone, Topic } from './types';

export const EXAM = {
  head: ['Question', 'Marks', 'Assesses', 'What it asks'],
  rows: [
    ['1 or 2 (choice)', '30', 'AO1 5, AO2 10, AO3 15', 'Period-study essay. Half the marks are for using ancient sources critically.'],
    ['3', '20', 'AO1 5, AO4 15', 'An unseen passage from a modern historian: how convincing is this interpretation?'],
    ['4', '12', 'AO1 6, AO3 6', 'How useful are the given ancient sources (one to four) for a stated question.'],
    ['5 or 6 (choice)', '36', 'AO1 6, AO2 12, AO3 18', 'Depth-study essay. Half the marks again for source use.'],
  ],
};

export const TOPICS: Topic[] = [
  {
    title: 'Relations between Greek states and between Greek and non-Greek states, 492 to 404 BC',
    weeks: 'Terms 1 and 2, weeks 1 to 21 (period study, compulsory)',
    intro: 'A century in two acts. First the Persian Wars: Marathon, Thermopylae, Salamis, Plataea, told by Herodotus with all the stories and all the doubts. Then the rise of Athens from leader of an anti-Persian league to master of an empire, the growing fear in Sparta, and the Peloponnesian War that ends with Athens starved into surrender in 404, told by Thucydides and finished by Xenophon. The exam wants the story, but it wants more the ability to say why Herodotus tells it one way and Thucydides another.',
    reading: 'Herodotus 6 to 9 (selections); Thucydides 1 to 8 (selections, 1.89 to 118 in full); Xenophon Hellenica 1.4 to 2.1; LACTOR 1; the Serpent Column; Persian inscriptions.',
    practice: 'AO3 paragraph every week from week 2; M1 essay week 5; M2 Section A week 10; M3 essay week 13; M4 Section A week 21.',
  },
  {
    title: 'The Culture and Politics of Athens, c.460 to 399 BC',
    weeks: 'Term 3, weeks 22 to 34 (depth study)',
    intro: 'Inside the city while the period study happens outside it. Ephialtes strips the old aristocratic council of power, Pericles builds the Parthenon and pays the jurors, the sophists teach young men to argue anything, Aristophanes mocks all of them on stage, and in 399 the restored democracy executes Socrates. The sources are richer and stranger here: a comedy, a tragedy, a hostile pamphlet, a philosopher’s memoir of his teacher’s trial, and the stones of the Acropolis. Shares most of its texts with the Classical Civ option Democracy and the Athenians.',
    reading: 'Aristotle Athenian Constitution 23 to 28; Thucydides 2.34 to 46, 3.36 to 50; Old Oligarch; Gorgias; Plutarch Pericles, Nicias, Alcibiades extracts; Plato Apology and Republic 6; Aristophanes Wasps, Knights, Clouds extracts; LACTOR 12; Euripides Hippolytus; the Periclean building programme.',
    practice: 'M5 essay week 25; M6 essay week 31; full paper mock week 33.',
  },
  {
    title: 'The Breakdown of the Late Republic, 88 to 31 BC',
    weeks: 'Term 4, weeks 35 to 48 (depth study)',
    intro: 'Sixty years in which Rome’s republic tore itself apart. Sulla marches on the city, Pompey and Crassus and Caesar carve up power, Cicero talks and writes without pause, Catiline plots, Clodius runs gangs in the streets, Caesar crosses the Rubicon and is stabbed, and Octavian and Antony fight to the finish at Actium. Cicero’s letters are the star source: the only day-by-day private record of any period of ancient history. This runs alongside Imperial Image, and ends exactly where the Julio-Claudian period study begins.',
    reading: 'LACTOR 3 and 7; Cicero Selected Letters nos. 3, 10, 15, 16, 22, 25, 59, 67, 68, 113, 114, 118; the OCR booklet (Appian, Philippic 2, Sallust Catiline, Plutarch Sulla, Pompey, Caesar, Antony, Suetonius Julius and Augustus); eight prescribed denarii.',
    practice: 'M7 essay week 38; M8 essay week 43; Section B in the January mocks.',
  },
  {
    title: 'The Julio-Claudian Emperors, 31 BC to AD 68',
    weeks: 'Term 5, weeks 51 to 59 (period study, compulsory)',
    intro: 'Five emperors and the invention of a system. Augustus builds the principate and manages the succession; Tiberius inherits it and retreats to Capri; Gaius is murdered after four years; Claudius is found behind a curtain and conquers Britain; Nero kills his mother and the dynasty ends with his suicide. The sources are Tacitus, who despised the whole system and wrote the best prose in Latin, and Suetonius, who collected the gossip. Much of the Augustus material is already familiar from Imperial Image, so the term moves fast.',
    reading: 'Suetonius and Tacitus Annals, prescribed chapters; Dio 53; LACTOR 15, 17, 19.',
    practice: 'M9 essay week 53; M10 essay week 58; full papers in the April mocks.',
  },
];

export const T1 = {
  head: ['Week', 'Content and reading', 'Practice'],
  rows: [
    { week: 1, cells: ['1', 'Overview. Source cards for Herodotus and Thucydides begun. Map of the Greek world and Persian empire. Timeline 546 to 404 on the wall. Herodotus 6.42 to 49.', ''] },
    { week: 2, cells: ['2', 'Marathon: Herodotus 6.94 to 117, 6.120 to 124. Persian aims (LACTOR 16 inscriptions).', 'AO3 paragraph on Herodotus’ Marathon numbers'] },
    { week: 3, cells: ['3', 'Xerxes’ invasion: Herodotus 7 selections (planning, Hellenic League, Thermopylae).', 'Source log entries; AO3 paragraph on the Thermopylae narrative'] },
    { week: 4, cells: ['4', 'Artemisium and Salamis: Herodotus 8 selections. Themistocles.', '12-mark source utility question (past paper)'] },
    { week: 5, cells: ['5', 'Plataea and Mycale: Herodotus 9 selections. The Serpent Column.', '<span class="ms">M1</span> 30-mark period essay, 45 min'] },
    { week: 6, cells: ['6', 'Why the Greeks won, why the Persians lost. Herodotus’ purpose and the Persian perspective.', 'First AO4 question, 20 marks, 30 min'] },
    { week: 7, cells: ['7', 'Formation of the Delian League: Thucydides 1.89 to 99; Aristotle Athenian Constitution 23; LACTOR 1.', 'AO3 paragraph: Thucydides on the League’s origins'] },
    { week: 8, cells: ['8', 'From League to empire: Thucydides 1.98 to 118; Naxos, Thasos, Eurymedon, Egypt; the Chalkis decree.', 'Source log'] },
    { week: 9, cells: ['9', 'Sparta and Athens 478 to 446: the helot revolt, Cimon, Ephialtes, the First Peloponnesian War, the Thirty Years’ Peace. Plutarch extracts.', '12-mark question on the Chalkis decree'] },
    { week: 10, cells: ['10', 'The Peace of Callias debate. Term review.', '<span class="ms">M2</span> Section A (Q1 30 marks plus Q3 20 marks), 75 min'] },
  ],
};

export const T2 = {
  head: ['Week', 'Content and reading', 'Practice'],
  rows: [
    { week: 11, cells: ['11', 'The nature of the empire: tribute, cleruchies, garrisons, courts. LACTOR 1 decrees; the Old Oligarch on empire.', 'AO3 paragraph on inscriptions as evidence'] },
    { week: 12, cells: ['12', 'Causes of the war: Thucydides 1 (Corcyra, Potidaea, the Megarian decree, 1.23, 1.88, 1.118). Plutarch Pericles 30 to 31.', '12-mark source question'] },
    { week: 13, cells: ['13', 'The Archidamian War 431 to 421: Thucydides 2 (strategy, plague), 4 (Pylos, Sphacteria).', '<span class="ms">M3</span> 30-mark essay'] },
    { week: 14, cells: ['14', 'Mytilene and Melos: Thucydides 3.36 to 50, 5 (the Melian dialogue). The Peace of Nicias.', 'AO4 question on an “Athenian imperialism” passage'] },
    { week: 15, cells: ['15', 'The Sicilian expedition: Thucydides 6 and 7 selections. Alcibiades.', 'AO3 paragraph on Thucydides’ speeches as evidence'] },
    { week: 16, cells: ['16', 'Persia returns: Thucydides 8 selections, Persian funding, Sparta’s fleet.', 'Source log'] },
    { week: 17, cells: ['17', 'The end: Xenophon Hellenica 1.4 to 2.1 (Arginusae, Aegospotami, the siege of Athens). Source card for Xenophon.', '12-mark question on Xenophon'] },
    { week: 18, cells: ['18', 'Thematic review 1: Athens and Sparta as rivals 478 to 404.', 'Plan five past essay questions'] },
    { week: 19, cells: ['19', 'Thematic review 2: Greeks and Persians 492 to 404.', 'Plan five past essay questions'] },
    { week: 20, cells: ['20', 'Interpretations workshop: three past Q3 passages and their mark schemes.', 'Two AO4 answers, timed'] },
    { week: 21, cells: ['21', 'Term review.', '<span class="ms">M4</span> full Section A under timed conditions'] },
  ],
};

export const T3 = {
  head: ['Week', 'Content and reading', 'Practice'],
  rows: [
    { week: 22, cells: ['22', 'Ephialtes and the radical democracy: Aristotle Athenian Constitution 23 to 28; Plutarch Pericles 4 to 6, 11 to 16.', 'Source cards for Aristotle and Plutarch'] },
    { week: 23, cells: ['23', 'Pericles’ Athens: Thucydides 2.34 to 46 (Funeral Speech); Plutarch Pericles 30 to 32, 36 to 37.', 'AO3 paragraph on the Funeral Speech'] },
    { week: 24, cells: ['24', 'The building programme: Acropolis, Agora, Odeon, Sounion. Plutarch Pericles 12 to 14 on cost and criticism.', 'Archaeology as a source: 12-mark question'] },
    { week: 25, cells: ['25', 'The Old Oligarch complete (LACTOR 2).', '<span class="ms">M5</span> 36-mark depth essay'] },
    { week: 26, cells: ['26', 'Comedy as evidence: Aristophanes Knights 147 to 395, Wasps 891 to 1008. Cleon and the demagogues; Thucydides 3.36 to 50 (Mytilene).', 'AO3 paragraph on comedy'] },
    { week: 27, cells: ['27', 'The sophists and the new education: Gorgias Encomium of Helen; Aristophanes Clouds 92 to 118, 365 to 381, 814 to 1302; LACTOR 12 (Plato Protagoras, Gorgias, Hippias Major extracts).', 'Source log'] },
    { week: 28, cells: ['28', 'Socrates: Plato Apology in full; Republic 6.488 to 489, 493.', 'Paragraph: why was Socrates executed?'] },
    { week: 29, cells: ['29', 'Religion and society: Euripides Hippolytus; LACTOR 12 (Thesmophoriazusae, Xenophon Memorabilia, Poroi); the Herms and Mysteries scandal, Plutarch Alcibiades 19 to 20.', '12-mark question'] },
    { week: 30, cells: ['30', 'Alcibiades and Nicias: Plutarch Nicias 3, 11; Alcibiades 10, 16, 34. The ostracism of Hyperbolus.', 'AO3 paragraph on Plutarch’s method'] },
    { week: 31, cells: ['31', '411 and 404: the oligarchic coups, the Thirty, the restoration of 403, the trial of Socrates in 399. Aristotle Athenian Constitution 28.', '<span class="ms">M6</span> 36-mark essay'] },
    { week: 32, cells: ['32', 'Review by theme: democracy in practice; leadership; culture and intellectual life; religion; Athens at war.', 'Plan eight past depth-study questions'] },
    { week: 33, cells: ['33', 'End-of-year mock: full H407/12 paper, 2h 30m.', 'Mark, debrief, action list'] },
    { week: 34, cells: ['34', 'Debrief. Choose the Roman depth study finally. Summer reading: Suetonius Augustus and Julius Caesar, plus the Late Republic chapters of the Bloomsbury Rome book.', ''] },
  ],
};

export const T4 = {
  head: ['Week', 'Content and reading', 'Practice'],
  rows: [
    { week: 35, cells: ['35', 'Rome’s constitution and the problems of 133 to 88 in outline. Source cards for Cicero, Sallust, Plutarch, Appian, Suetonius, Caesar.', 'Timeline 88 to 31 on the wall'] },
    { week: 36, cells: ['36', 'Sulla: Plutarch Sulla 7 to 10, 31; Appian; the Sullan settlement. Denarius of Sulla.', 'AO3 paragraph on Plutarch’s Sulla'] },
    { week: 37, cells: ['37', 'Pompey and Crassus 78 to 62: Plutarch Pompey 14 to 15, 20; Cicero In Verrem 1.35 to 47; the lex Gabinia and lex Manilia.', '12-mark source question'] },
    { week: 38, cells: ['38', 'Catiline 63: Sallust Catiline 10 to 16, 18 to 21, 33 to 39, 51 to 54; Cicero In Catilinam 2 and 4; de lege agraria 2.7 to 10.', '<span class="ms">M7</span> 36-mark essay'] },
    { week: 39, cells: ['39', 'How to win an election: Quintus Cicero Commentariolum 13 to 24. Cicero letters 3, 10, 15.', 'AO3 paragraph on letters as evidence'] },
    { week: 40, cells: ['40', 'The First Triumvirate 60 to 56: Plutarch Caesar 13 to 14, Pompey 47 to 48; Suetonius Julius 28 to 33; letters 16, 22, 25; pro Sestio 96 to 105.', 'Source log'] },
    { week: 41, cells: ['41', 'Rome in chaos 58 to 50: Clodius and Milo; letters 59, 67, 68.', '12-mark question'] },
    { week: 42, cells: ['42', 'The road to civil war 50 to 49: Caesar Civil War 1.1 to 5, 1.7; Plutarch Caesar 29 to 32; letters 113, 114.', 'AO4 question: was the civil war inevitable?'] },
    { week: 43, cells: ['43', 'Caesar’s dictatorship and death: Suetonius Julius 38 to 43; Plutarch Caesar 57 to 58; letter 118; denarii of Caesar and Brutus.', '<span class="ms">M8</span> 36-mark essay'] },
    { week: 44, cells: ['44', '44 to 43: Cicero Philippic 2.88 to 97; Appian Civil Wars 3.43 to 51, 3.74 to 75, 3.80 to 81, 3.86 to 94; Suetonius Augustus 26 to 28.', 'AO3 paragraph on the Philippic as evidence'] },
    { week: 45, cells: ['45', 'The Second Triumvirate and proscriptions: Appian 5.12 to 13; Plutarch Antony 54 to 56; denarii of Antony and Octavian.', '12-mark question'] },
    { week: 46, cells: ['46', 'Actium and the end, 32 to 31: Appian 5.127 to 132; Plutarch Antony; Suetonius Augustus.', 'Source log completed'] },
    { week: 47, cells: ['47', 'Why the Republic fell: armies, ambition, violence, the Senate’s failure, the urban plebs, provincial wealth.', 'Plan eight past depth questions'] },
    { week: 48, cells: ['48', 'Prepare for the January mocks.', ''] },
  ],
};

export const T5 = {
  head: ['Week', 'Content and reading', 'Practice'],
  rows: [
    { week: 49, cells: ['49 to 50', 'January mock series: H407/12 in full; H407/21 Section B only.', ''] },
    { week: 51, cells: ['51', 'Augustus 1: the settlements of 27 and 23; Res Gestae; Dio 53.11 to 13, 16 to 17; Tacitus Annals 1.2 to 15. Source cards for Tacitus, Dio, Velleius.', 'AO3 paragraph on Tacitus’ verdict on Augustus'] },
    { week: 52, cells: ['52', 'Augustus 2: succession, family, army, provinces. Suetonius Augustus; Velleius; coins and inscriptions in LACTOR 17.', '12-mark question'] },
    { week: 53, cells: ['53', 'Tiberius: Tacitus Annals 1 to 4 and 6 selections; Suetonius Tiberius; Velleius. Sejanus.', '<span class="ms">M9</span> 30-mark essay'] },
    { week: 54, cells: ['54', 'Gaius: Suetonius Gaius; Dio (LACTOR 15); Josephus and Philo (LACTOR 19).', 'AO4 question on a “mad Caligula” passage'] },
    { week: 55, cells: ['55', 'Claudius 1: accession; Suetonius Claudius; the letter to the Alexandrians; Britain.', 'Source log'] },
    { week: 56, cells: ['56', 'Claudius 2 and Agrippina: Annals 11 and 12; Messalina; the freedmen.', '12-mark question'] },
    { week: 57, cells: ['57', 'Nero 1: Annals 14.1 to 16 (the murder of Agrippina); Seneca and Burrus; the quinquennium. Suetonius Nero.', 'AO3 paragraph on Tacitus’ Nero'] },
    { week: 58, cells: ['58', 'Nero 2: Annals 15.37 to 44 (the fire and the Christians), 15.48 to 74 (the Pisonian conspiracy); the fall of 68; coins.', '<span class="ms">M10</span> 30-mark essay'] },
    { week: 59, cells: ['59', 'Themes across five emperors: the principate as a system; the Senate; the army and Praetorians; the imperial family and women; the provinces; Suetonius versus Tacitus.', 'AO4 question; plan eight past period essays'] },
  ],
};

export const MILESTONES: Milestone[] = [
  { code: 'M1', week: 5, when: 'Nov 2026', format: '30-mark essay, 45 min', question: 'How far do the sources support the view that Greek victory in 480 to 479 was due to Athenian leadership?', note: 'Herodotus on Themistocles, on Sparta at Thermopylae and Plataea, and his own pro-Athenian judgement at 7.139; weigh the Serpent Column’s list of cities.' },
  { code: 'M2', week: 10, when: 'Dec 2026', format: 'Section A (Q1 and Q3), 75 min', question: 'The most recent OCR H407/12 Section A.' },
  { code: 'M3', week: 13, when: 'Jan 2027', format: '30-mark essay, 45 min', question: 'To what extent was Athens responsible for the outbreak of the Peloponnesian War?', note: 'Thucydides 1.23 against the specific grievances; Plutarch’s gossip about Pericles and Aspasia; a judgement on the “truest cause”.' },
  { code: 'M4', week: 21, when: 'Mar 2027', format: 'Full Section A, 75 min', question: 'The best available past paper.' },
  { code: 'M5', week: 25, when: 'May 2027', format: '36-mark essay, 55 min', question: 'How far do the sources support the view that Athenian democracy in this period was really the rule of the poor over the rich?', note: 'The Old Oligarch against Thucydides 2.37 and 2.65; Aristotle on pay for jurors; Aristophanes Wasps.' },
  { code: 'M6', week: 31, when: 'Jun 2027', format: '36-mark essay, 55 min', question: '“Athens’ intellectual culture was the cause of its political failure.” How far do the sources support this view?', note: 'Clouds, Apology, Gorgias, Thucydides on Alcibiades, Plutarch.' },
  { code: 'M7', week: 38, when: 'Sep 2027', format: '36-mark essay, 55 min', question: 'How far do the sources support the view that the Catilinarian conspiracy was a genuine threat to the Republic?', note: 'Sallust’s moralising purpose against Cicero’s self-interest, and what the two agree on.' },
  { code: 'M8', week: 43, when: 'Nov 2027', format: '36-mark essay, 55 min', question: '“Caesar destroyed the Republic; he did not merely inherit its collapse.” How far do the sources support this view?' },
  { code: 'M9', week: 53, when: 'Feb 2028', format: '30-mark essay, 45 min', question: 'How far do the sources support the view that Tiberius was a good emperor badly served by the sources?', note: 'Velleius against Tacitus and Suetonius; the Sejanus problem.' },
  { code: 'M10', week: 58, when: 'Mar 2028', format: '30-mark essay, 45 min', question: '“The Julio-Claudian principate collapsed because of the personalities of the emperors rather than the weaknesses of the system.” How far do you agree?' },
];
