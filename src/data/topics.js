// -----------------------------------------------------------------------
// TOPICS
// This is the master list of maths topic areas used throughout the site
// (quick-help cards, filters, breadcrumbs, topic pages).
//
// To add a new topic area: add an object below with a unique `slug`.
// `symbol` is a short piece of maths notation used as a subtle visual motif
// next to the topic — keep it to a few characters.
// -----------------------------------------------------------------------

export const topics = [
  {
    slug: 'number',
    name: 'Number',
    short: 'Number',
    symbol: '÷',
    description: 'Place value, the four operations, factors, primes, powers and roots.',
  },
  {
    slug: 'fdp',
    name: 'Fractions, Decimals & Percentages',
    short: 'FDP',
    symbol: '%',
    description: 'Converting between fractions, decimals and percentages, and working with all three.',
  },
  {
    slug: 'ratio',
    name: 'Ratio & Proportion',
    short: 'Ratio',
    symbol: ':',
    description: 'Sharing in a ratio, proportion, scale factors and rates of change.',
  },
  {
    slug: 'algebra',
    name: 'Algebra',
    short: 'Algebra',
    symbol: 'x²',
    description: 'Equations, expressions, sequences, graphs and manipulating formulae.',
  },
  {
    slug: 'geometry',
    name: 'Geometry & Measures',
    short: 'Geometry',
    symbol: '△',
    description: 'Angles, area, perimeter, volume, Pythagoras, trigonometry and transformations.',
  },
  {
    slug: 'stats',
    name: 'Statistics & Probability',
    short: 'Stats',
    symbol: 'x̄',
    description: 'Averages, spread, charts, sampling and probability.',
  },
];

export function getTopic(slug) {
  return topics.find((t) => t.slug === slug);
}
