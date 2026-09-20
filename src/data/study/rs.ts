import type { Milestone, Topic } from './types';

export const PAPERS = {
  head: ['Paper', 'Content', 'Format'],
  rows: [
    ['H573/01 Philosophy of Religion', 'Nine topics', '2 hours, 120 marks, 33.3%. Four essays set, answer three, 40 marks each.'],
    ['H573/02 Religion and Ethics', 'Nine topics', 'Same format.'],
    ['H573/03 Developments in Christian Thought', 'Twelve topics', 'Same format.'],
  ],
};

export const PHIL: Topic[] = [
  { title: '1. Ancient philosophical influences', weeks: 'Weeks 1 to 2', intro: 'Plato says the real world is the world of Forms, and this one is shadows on a cave wall. Aristotle says the real world is this one, explained by four causes and moved by a Prime Mover. Everything else in the course argues with one of them.' },
  { title: '2. Soul, mind and body', weeks: 'Weeks 4 to 5', intro: 'Is there a soul, and if so what is it? Plato’s immortal charioteer, Aristotle’s soul as the form of the body, Descartes’ two substances, and Dawkins’ answer that there is only the body.' },
  { title: '3. Arguments based on observation', weeks: 'Weeks 7 to 8', intro: 'Look at the world: it seems designed (Paley’s watch, Aquinas’s Fifth Way) and it seems to need a cause (Aquinas’s first three Ways). Hume answers both before Paley has finished speaking, and Darwin answers design.' },
  { title: '4. Arguments based on reason', weeks: 'Weeks 8 to 9', intro: 'Anselm’s ontological argument: the idea of God guarantees God’s existence. Gaunilo’s perfect island, Descartes’ restatement, and Kant’s objection that existence is not a predicate.' },
  { title: '5. Religious experience', weeks: 'Weeks 12 to 13', intro: 'Mystical and conversion experiences: William James’s four marks, Swinburne’s principles of credulity and testimony, and the physiological and psychological explanations that say it is all in the brain.' },
  { title: '6. The problem of evil', weeks: 'Weeks 15 to 16', intro: 'If God is all-powerful and all-loving, why is there evil? The logical and evidential forms of the problem; Augustine’s answer (privation and the Fall) and Hick’s (soul-making).' },
  { title: '7. The nature or attributes of God', weeks: 'Weeks 31 to 32', intro: 'What omnipotence, omniscience, benevolence and eternity mean, and whether they fit together. Boethius and Anselm on a timeless God; Swinburne on an everlasting one; the free-will problem.' },
  { title: '8. Religious language: negative, analogical, symbolic', weeks: 'Weeks 35 to 36', intro: 'How can human words describe God? Say only what God is not (via negativa); use analogy (Aquinas); use symbols (Tillich).' },
  { title: '9. Religious language: twentieth-century perspectives', weeks: 'Weeks 37 to 38', intro: 'Ayer says religious statements are meaningless; Flew says they cannot be falsified; Hare and Mitchell reply; Wittgenstein says meaning is use within a language game. The spec asks whether Wittgenstein beats Aquinas.' },
];

export const ETHICS: Topic[] = [
  { title: '1. Natural Law', weeks: 'Weeks 2 to 3', intro: 'Aquinas: everything has a purpose (telos), and reason can read the moral law off human nature. Four tiers of law, the primary precepts, secondary precepts, double effect.' },
  { title: '2. Situation Ethics', weeks: 'Weeks 5 to 6', intro: 'Fletcher: the only rule is love (agape); everything else is a guideline that love may override. Six propositions, four working principles.' },
  { title: '3. Kantian ethics', weeks: 'Weeks 11 to 12', intro: 'Duty for its own sake; act only on maxims you could will to be universal; treat people never merely as means. The three postulates: freedom, immortality, God.' },
  { title: '4. Utilitarianism', weeks: 'Weeks 14 to 15', intro: 'Bentham: the greatest happiness for the greatest number, measured by the hedonic calculus. Mill: higher and lower pleasures, rules that generally maximise happiness.' },
  { title: '5. Euthanasia', weeks: 'Weeks 17 to 18', intro: 'Sanctity of life versus quality of life; voluntary and non-voluntary euthanasia; what Natural Law and Situation Ethics each say and whether either is adequate.' },
  { title: '6. Business ethics', weeks: 'Weeks 29 to 30', intro: 'Corporate social responsibility, whistle-blowing, whether good ethics is good business, globalisation. Kant and utilitarianism applied.' },
  { title: '7. Meta-ethics', weeks: 'Weeks 19 to 20', intro: 'What does "good" mean? Naturalism (a fact about the world), intuitionism (Moore: known directly, undefinable), emotivism (Ayer: an expression of feeling).' },
  { title: '8. Conscience', weeks: 'Weeks 39 to 41', intro: 'Aquinas: conscience is reason working out right from wrong (synderesis and conscientia). Freud: it is the super-ego, the internalised parent. Which explains guilt better?' },
  { title: '9. Sexual ethics', weeks: 'Week 42', intro: 'Premarital and extramarital sex, homosexuality; how religious teaching has developed and how secular thinking has changed it. All four normative theories applied.' },
];

export const CHRISTIAN: Topic[] = [
  { title: '1. Augustine on human nature', weeks: 'Weeks 22 to 23', intro: 'The Fall, original sin, concupiscence, the divided will, and grace as the only cure. Too pessimistic, or just honest?' },
  { title: '2. Death and the afterlife', weeks: 'Weeks 23 to 24', intro: 'Heaven, hell, purgatory; election and universalism; whether the parable of the sheep and goats is literal; whether hell is compatible with a loving God.' },
  { title: '3. Knowledge of God’s existence', weeks: 'Weeks 25 to 26', intro: 'Natural theology (Aquinas, Calvin’s sense of the divine) against revealed theology (Barth’s "Nein!"). Can reason reach God at all?' },
  { title: '4. The person of Jesus Christ', weeks: 'Weeks 27 to 28', intro: 'Jesus as Son of God, as teacher of wisdom, as liberator. The miracles, the moral teaching, the challenge to authority. Which title fits the evidence?' },
  { title: '5. Christian moral principles', weeks: 'Weeks 43 to 44', intro: 'Where does Christian ethics come from: the Bible alone, the Bible with Church and reason, or love alone? Whether the Bible can be a moral authority at all.' },
  { title: '6. Christian moral action', weeks: 'Weeks 45 to 46', intro: 'Bonhoeffer: costly grace, the Confessing Church, Finkenwalde, and the decision to join the plot against Hitler. Duty to God against duty to the state.' },
  { title: '7. Religious pluralism and theology', weeks: 'Weeks 51 to 52', intro: 'Exclusivism, inclusivism (Rahner’s anonymous Christians), pluralism (Hick). Can only Christians be saved?' },
  { title: '8. Religious pluralism and society', weeks: 'Weeks 52 to 53', intro: 'Multi-faith Britain, inter-faith dialogue, the Church of England’s Sharing the Gospel of Salvation. Should Christians convert or converse?' },
  { title: '9. Gender and society', weeks: 'Weeks 54 to 55', intro: 'Changing roles of men and women, the family, and Christian responses from complementarianism to full equality.' },
  { title: '10. Gender and theology', weeks: 'Weeks 54 to 55', intro: 'Ruether: Christianity can be reformed (Jesus as liberator, God/ess). Daly: it cannot ("if God is male, the male is God").' },
  { title: '11. The challenge of secularism', weeks: 'Weeks 56 to 57', intro: 'Freud (religion as neurosis), Dawkins (religion as harm), secular humanism; whether Christianity should fight secularism or is itself a cause of it.' },
  { title: '12. Liberation theology and Marx', weeks: 'Weeks 58 to 59', intro: 'Gutiérrez and the preferential option for the poor; structural sin; orthopraxis. Has liberation theology borrowed too much from Marx?' },
];

export const MILESTONES: Milestone[] = [
  { code: 'M1', week: 6, when: 'Nov 2026', format: '40-mark essay, 40 min', question: '“Agape is not a sufficient basis for ethics.” Discuss.', note: 'Marked with the full six-level grid, AO1 and AO2 separately.' },
  { code: 'M2', week: 10, when: 'Dec 2026', format: 'Two essays from a past Philosophy paper, 80 min', question: 'Two questions from the most recent H573/01 paper on topics covered.' },
  { code: 'M3', week: 15, when: 'Feb 2027', format: '40-mark essay, 40 min', question: '“Utilitarianism is the most practical ethical theory.” Discuss.' },
  { code: 'M4', week: 21, when: 'Mar 2027', format: 'Two essays, one per paper, 80 min', question: 'One Philosophy and one Ethics question from past papers.' },
  { code: 'M5', week: 25, when: 'May 2027', format: '40-mark essay, 40 min', question: '“Natural theology is a better route to knowledge of God than revealed theology.” Discuss.' },
  { code: 'M6', week: 33, when: 'Jul 2027', format: 'Full H573/02 Ethics paper, 2 hours', question: 'The most recent OCR Religion and Ethics paper.' },
  { code: 'M7', week: 38, when: 'Sep 2027', format: '40-mark essay, 40 min', question: '“Religious language is meaningless.” Discuss.' },
  { code: 'M8', week: 44, when: 'Nov 2027', format: '40-mark essay, 40 min', question: '“Bonhoeffer’s teaching on obedience has no relevance today.” Discuss.' },
  { code: 'M9', week: 55, when: 'Feb 2028', format: '40-mark essay, 40 min', question: '“Christianity cannot be reconciled with feminism.” Discuss.' },
  { code: 'M10', week: 58, when: 'Mar 2028', format: '40-mark essay, 40 min', question: '“Liberation theology has engaged too much with Marx.” Discuss.' },
];

export const LEVELS = {
  head: ['Level', 'AO1 (of 16)', 'AO2 (of 24)', 'Test'],
  rows: [
    ['6', '14 to 16', '21 to 24', 'Nothing wrong, nothing important missing, scholars precise. Argues throughout; every view weighed against an objection and answered; the conclusion is earned.'],
    ['5', '11 to 13', '17 to 20', 'Accurate and detailed with minor gaps. Clear argument, some weighing, good conclusion.'],
    ['4', '8 to 10', '13 to 16', 'Correct but generic. Views presented competently; evaluation mostly in the conclusion.'],
    ['3', '5 to 7', '9 to 12', 'Some accurate knowledge, thin. Some evaluation, unsupported judgement.'],
    ['2', '3 to 4', '5 to 8', 'Limited, some errors. Assertion rather than argument.'],
    ['1', '1 to 2', '1 to 4', 'Very limited.'],
  ],
};

// One full essay per topic, in the week shown. Weeks are teaching-week ranges.
export const ESSAYS: { weeks: string; topic: string; essay: string; milestone?: string }[] = [
  { weeks: 'Weeks', topic: 'Topic', essay: 'Essay written' },
  { weeks: '1 to 2', topic: 'Phil 1: Plato and Aristotle', essay: '"Plato’s theory of Forms is more convincing than Aristotle’s account of reality." Discuss.' },
  { weeks: '2 to 3', topic: 'Ethics 1: Natural Law', essay: '"Natural Law is the best approach to ethical decision-making." Discuss.' },
  { weeks: '4 to 5', topic: 'Phil 2: Soul, mind and body', essay: '"Dualism is a better account of the mind than materialism." Discuss.' },
  { weeks: '5 to 6', topic: 'Ethics 2: Situation Ethics', essay: '"Agape is not a sufficient basis for ethics." Discuss.', milestone: 'M1' },
  { weeks: '7 to 8', topic: 'Phil 3: Arguments from observation', essay: '"The teleological argument fails because of Hume’s criticisms." Discuss.' },
  { weeks: '8 to 9', topic: 'Phil 4: Arguments from reason', essay: '"The ontological argument is a valid proof of God’s existence." Discuss.' },
  { weeks: '10', topic: 'Review', essay: 'two essays from a past Philosophy paper, 80 min', milestone: 'M2' },
  { weeks: '11 to 12', topic: 'Ethics 3: Kant', essay: '"Kant’s ethics is too rigid to be useful." Discuss.' },
  { weeks: '12 to 13', topic: 'Phil 5: Religious experience', essay: '"Religious experiences are only ever psychological." Discuss.' },
  { weeks: '14 to 15', topic: 'Ethics 4: Utilitarianism', essay: '"Utilitarianism is the most practical ethical theory." Discuss.', milestone: 'M3' },
  { weeks: '15 to 16', topic: 'Phil 6: Problem of evil', essay: '"Hick’s soul-making theodicy is more successful than Augustine’s." Discuss.' },
  { weeks: '17 to 18', topic: 'Ethics 5: Euthanasia', essay: '"Natural Law gives a better response to euthanasia than Situation Ethics." Discuss.' },
  { weeks: '19 to 20', topic: 'Ethics 7: Meta-ethics', essay: '"Ethical statements are merely expressions of emotion." Discuss.' },
  { weeks: '21', topic: 'Review', essay: 'two essays, one per paper, 80 min', milestone: 'M4' },
  { weeks: '22 to 23', topic: 'Christian 1: Augustine', essay: '"Augustine’s view of human nature is too pessimistic." Discuss.' },
  { weeks: '23 to 24', topic: 'Christian 2: Death and afterlife', essay: '"Hell is incompatible with a loving God." Discuss.' },
  { weeks: '25 to 26', topic: 'Christian 3: Knowledge of God', essay: '"Natural theology is a better route to knowledge of God than revealed theology." Discuss.', milestone: 'M5' },
  { weeks: '27 to 28', topic: 'Christian 4: Jesus', essay: '"Jesus was primarily a teacher of wisdom." Discuss.' },
  { weeks: '29 to 30', topic: 'Ethics 6: Business ethics', essay: '"Kantian ethics is more useful than utilitarianism for business." Discuss.' },
  { weeks: '31 to 32', topic: 'Phil 7: Nature of God', essay: '"An eternal God cannot know the future and leave humans free." Discuss.' },
  { weeks: '33', topic: 'End-of-year mock', essay: 'full Ethics paper, 2 hours', milestone: 'M6' },
  { weeks: '35 to 36', topic: 'Phil 8: Religious language', essay: '"Aquinas’ analogy is the best way of talking about God." Discuss.' },
  { weeks: '37 to 38', topic: 'Phil 9: Twentieth-century language', essay: '"Religious language is meaningless." Discuss.', milestone: 'M7' },
  { weeks: '39 to 41', topic: 'Ethics 8: Conscience', essay: '"Freud’s account of conscience is more convincing than Aquinas’." Discuss.' },
  { weeks: '42', topic: 'Ethics 9: Sexual ethics', essay: '"Religious views on sexual ethics are no longer relevant." Discuss.' },
  { weeks: '43 to 44', topic: 'Christian 5: Moral principles', essay: '"The Bible is the only authority for Christian ethics." Discuss.' },
  { weeks: '45 to 46', topic: 'Christian 6: Bonhoeffer', essay: '"Bonhoeffer’s teaching on obedience has no relevance today." Discuss.', milestone: 'M8' },
  { weeks: '49 to 50', topic: 'January mocks', essay: 'Full Philosophy and Ethics papers; half a Christian Thought paper' },
  { weeks: '51 to 52', topic: 'Christian 7: Pluralism and theology', essay: '"Hick’s pluralism undermines Christian belief." Discuss.' },
  { weeks: '52 to 53', topic: 'Christian 8: Pluralism and society', essay: '"Inter-faith dialogue is essential for Christianity today." Discuss.' },
  { weeks: '54 to 55', topic: 'Christian 9 and 10: Gender', essay: '"Christianity cannot be reconciled with feminism." Discuss.', milestone: 'M9' },
  { weeks: '56 to 57', topic: 'Christian 11: Secularism', essay: '"Secularism is a threat to Christianity." Discuss.' },
  { weeks: '58 to 59', topic: 'Christian 12: Liberation theology', essay: '"Liberation theology has engaged too much with Marx." Discuss.', milestone: 'M10' },
];
