// -----------------------------------------------------------------------
// RESOURCES — THE MAIN CONTENT FILE
// -----------------------------------------------------------------------
// Every maths "skill" on the site (e.g. Percentage Increase) is one object
// in the array below. A single skill can power a One Minute Guide, a video
// Tutorial and a Practice set, all from one entry — you don't need to
// duplicate anything.
//
// HOW TO ADD A NEW SKILL
// -----------------------------------------------------------------------
// 1. Copy an existing object below and change every field.
// 2. `slug` must be unique and URL-safe (lowercase-with-hyphens). It
//    controls the page address, e.g. slug "reverse-percentages" becomes
//    /guides/reverse-percentages, /tutorials/reverse-percentages and
//    /practice/reverse-percentages automatically.
// 3. `topic` must match a slug from src/data/topics.js.
// 4. To add a YouTube tutorial, paste the video ID (the part of the URL
//    after "watch?v=") into `videoId`. Leave it as an empty string ""
//    until you have a video — the site will show a friendly placeholder.
// 5. `guide` holds the One Minute Guide text as an array of short
//    paragraphs (each string becomes one paragraph) plus an optional
//    `workedExample`.
// 6. `practiceQuestions` is an array of { q, a } pairs. Keep questions 1-3
//    straightforward, 4-6 applied, and anything after that reasoning /
//    challenge — see `practiceQuestions` below for the pattern.
// 7. `nextResource` and `relatedResources` take other skills' `slug`
//    values and are used to build the "Next skill" and "Related skills"
//    links at the bottom of each resource page.
// -----------------------------------------------------------------------

export const resources = [
  {
    id: 1,
    slug: 'percentage-of-an-amount',
    title: 'Finding a Percentage of an Amount',
    topic: 'fdp',
    subtopic: 'Percentages',
    resourceType: ['guide', 'tutorial', 'practice'],
    difficulty: 'Foundation',
    gcseTier: ['foundation', 'higher'],
    description: 'Use the multiplier method to find any percentage of a quantity.',
    keywords: ['percentage of an amount', 'find 10%', 'find a percentage', 'multiplier', 'percent of'],
    videoId: '',
    videoLength: '3 min',
    guide: {
      summary: 'Turn the percentage into a decimal multiplier, then multiply.',
      paragraphs: [
        'To find a percentage of an amount, write the percentage as a decimal — this is called the multiplier — then multiply it by the amount.',
        'To get the multiplier, divide the percentage by 100. For example, 15% becomes 15 ÷ 100 = 0.15.',
        'Once you have the multiplier, multiply it by the original amount to get your answer.',
      ],
      workedExample: {
        question: 'Find 15% of £60.',
        steps: [
          'Convert 15% to a multiplier: 15 ÷ 100 = 0.15',
          'Multiply by the amount: 0.15 × £60 = £9',
        ],
        answer: '£9',
      },
    },
    commonMistake: 'Dividing the amount by the percentage instead of multiplying — remember, the multiplier is always less than 1 for percentages under 100%.',
    practiceQuestions: [
      { q: 'Find 10% of £80.', a: '£8' },
      { q: 'Find 25% of 60 kg.', a: '15 kg' },
      { q: 'Find 40% of £250.', a: '£100' },
      { q: 'Find 8% of £350.', a: '£28' },
      { q: 'Find 17.5% of £220.', a: '£38.50' },
      { q: 'A jacket costs £64. Find 35% of this price.', a: '£22.40' },
      { q: 'A school has 640 pupils. 62.5% walk to school. How many pupils walk to school?', a: '400 pupils' },
    ],
    nextResource: 'percentage-increase',
    relatedResources: ['percentage-increase', 'percentage-decrease', 'converting-fdp'],
  },

  {
    id: 2,
    slug: 'percentage-increase',
    title: 'Percentage Increase',
    topic: 'fdp',
    subtopic: 'Percentages',
    resourceType: ['guide', 'tutorial', 'practice'],
    difficulty: 'Foundation',
    gcseTier: ['foundation', 'higher'],
    description: 'Increase an amount by a percentage in a single calculation using a multiplier.',
    keywords: ['percentage increase', 'increase by a percentage', 'add percentage', 'multiplier method', 'grow by percent'],
    videoId: '',
    videoLength: '4 min',
    guide: {
      summary: 'Build a multiplier greater than 1, then multiply the original amount by it.',
      paragraphs: [
        'To increase an amount by a percentage, first work out what 100% plus the percentage increase is, then convert that to a multiplier.',
        'For a 20% increase, the new amount is 100% + 20% = 120% of the original, so the multiplier is 1.2.',
        'Multiply the original amount by this multiplier to get the new, increased amount in one step — you do not need to work out the increase separately and add it on.',
      ],
      workedExample: {
        question: 'Increase £40 by 20%.',
        steps: [
          '100% + 20% = 120%, so the multiplier is 1.2',
          'Multiply: £40 × 1.2 = £48',
        ],
        answer: '£48',
      },
    },
    commonMistake: 'Finding the 20% and stopping there, giving £8 as the final answer, instead of adding it back on to get £48. The multiplier method avoids this because it gives the final amount directly.',
    practiceQuestions: [
      { q: 'Increase £50 by 10%.', a: '£55' },
      { q: 'Increase 80 kg by 25%.', a: '100 kg' },
      { q: 'Increase £120 by 15%.', a: '£138' },
      { q: 'A salary of £24,000 increases by 4%. Find the new salary.', a: '£24,960' },
      { q: 'A rectangle has an area of 45 cm². The area increases by 8%. Find the new area.', a: '48.6 cm²' },
      { q: 'A price of £70 is increased by 12%, then increased again by 5% the following year. Find the final price.', a: '£82.32' },
    ],
    nextResource: 'percentage-decrease',
    relatedResources: ['percentage-of-an-amount', 'percentage-decrease', 'percentage-change'],
  },

  {
    id: 3,
    slug: 'percentage-decrease',
    title: 'Percentage Decrease',
    topic: 'fdp',
    subtopic: 'Percentages',
    resourceType: ['guide', 'tutorial', 'practice'],
    difficulty: 'Foundation',
    gcseTier: ['foundation', 'higher'],
    description: 'Decrease an amount by a percentage in a single calculation using a multiplier.',
    keywords: ['percentage decrease', 'decrease by a percentage', 'take away percentage', 'discount', 'reduce by percent', 'sale price'],
    videoId: '',
    videoLength: '4 min',
    guide: {
      summary: 'Build a multiplier less than 1, then multiply the original amount by it.',
      paragraphs: [
        'To decrease an amount by a percentage, work out what 100% minus the percentage decrease is, then convert that to a multiplier.',
        'For a 30% decrease, the new amount is 100% − 30% = 70% of the original, so the multiplier is 0.7.',
        'Multiply the original amount by this multiplier to get the new, decreased amount directly — useful for sale prices and discounts.',
      ],
      workedExample: {
        question: 'A £90 jacket is reduced by 30% in a sale. Find the sale price.',
        steps: [
          '100% − 30% = 70%, so the multiplier is 0.7',
          'Multiply: £90 × 0.7 = £63',
        ],
        answer: '£63',
      },
    },
    commonMistake: 'Subtracting 30 from £90 instead of finding 30% of £90 and taking that away — always find the percentage of the original amount first.',
    practiceQuestions: [
      { q: 'Decrease £60 by 10%.', a: '£54' },
      { q: 'Decrease 200 g by 15%.', a: '170 g' },
      { q: 'A £45 top is reduced by 20% in a sale. Find the sale price.', a: '£36' },
      { q: 'A car worth £8,000 depreciates by 12% in a year. Find its new value.', a: '£7,040' },
      { q: 'A population of 3,200 falls by 7.5%. Find the new population.', a: '2,960' },
      { q: 'A £150 item is reduced by 20%, then reduced by a further 10% in a second sale. Find the final price.', a: '£108' },
    ],
    nextResource: 'percentage-change',
    relatedResources: ['percentage-increase', 'percentage-of-an-amount', 'percentage-change'],
  },

  {
    id: 4,
    slug: 'percentage-change',
    title: 'Percentage Change',
    topic: 'fdp',
    subtopic: 'Percentages',
    resourceType: ['guide', 'practice'],
    difficulty: 'Higher',
    gcseTier: ['foundation', 'higher'],
    description: 'Work out the percentage change between an original and a new value.',
    keywords: ['percentage change', 'find difference percentage', 'percentage profit', 'percentage loss'],
    videoId: '',
    videoLength: '',
    guide: {
      summary: 'Percentage change = (change ÷ original amount) × 100.',
      paragraphs: [
        'Percentage change tells you how big a change is compared to the original amount, given as a percentage.',
        'Work out the actual change (new amount minus original amount), divide by the original amount, then multiply by 100.',
        'If the new amount is smaller than the original, the change will come out negative — this represents a percentage decrease (or loss).',
      ],
      workedExample: {
        question: 'A house is bought for £180,000 and sold for £207,000. Find the percentage change.',
        steps: [
          'Change = £207,000 − £180,000 = £27,000',
          'Percentage change = (27,000 ÷ 180,000) × 100',
          '= 15%',
        ],
        answer: '15% increase',
      },
    },
    commonMistake: 'Dividing by the new amount instead of the original amount — percentage change always uses the original (starting) value as the denominator.',
    practiceQuestions: [
      { q: 'A price rises from £40 to £50. Find the percentage change.', a: '25% increase' },
      { q: 'A mass falls from 80 kg to 68 kg. Find the percentage change.', a: '15% decrease' },
      { q: 'A shop buys a bike for £120 and sells it for £150. Find the percentage profit.', a: '25%' },
      { q: 'A phone bought for £600 is sold for £420. Find the percentage loss.', a: '30%' },
      { q: 'A company\'s profits go from £2.4 million to £2.7 million. Find the percentage increase to 1 d.p.', a: '12.5%' },
    ],
    nextResource: 'reverse-percentages',
    relatedResources: ['percentage-increase', 'percentage-decrease', 'reverse-percentages'],
  },

  {
    id: 5,
    slug: 'reverse-percentages',
    title: 'Reverse Percentages',
    topic: 'fdp',
    subtopic: 'Percentages',
    resourceType: ['guide', 'tutorial'],
    difficulty: 'Higher',
    gcseTier: ['higher'],
    description: 'Find the original amount before a percentage increase or decrease was applied using a calculator and multiplier.',
    keywords: ['reverse percentage', 'original amount', 'before the sale', 'undo a percentage', 'calculator', 'multiplier'],
    videoId: '',
    videoLength: '5 min',
    guideImage: '/guides/reverse-percentages-calculator.webp',
    guideImageAlt: 'SEND-friendly Reverse Percentages one minute guide showing four steps: read the question, find the percentage left, divide by the multiplier, and check. Includes a worked example finding the original price of a coat costing £69 after a 15% discount.',
    guideDownload: '/guides/reverse-percentages-calculator.pptx',
    guide: {
      summary: 'Reverse percentages usually mean divide by the multiplier, not subtract.',
      paragraphs: [
        'First, read the question carefully and decide whether the final amount is after an increase or a decrease.',
        'Find the percentage represented by the final amount. After an increase, add the percentage to 100%. After a decrease, take the percentage away from 100%. Then convert this percentage to a decimal multiplier.',
        'To find the original amount, divide the final amount by the multiplier. Check by multiplying your original amount by the multiplier to see if you get the final amount.',
      ],
      workedExample: {
        question: 'A coat costs £69 after a 15% discount. Find the original price.',
        steps: [
          '15% discount means 85% is left',
          'Multiplier = 0.85',
          'Original price = £69 ÷ 0.85 = £81.176…',
          'Round to the nearest penny: £81.18',
          'Check: £81.18 × 0.85 ≈ £69.00',
        ],
        answer: '£81.18',
      },
    },
    commonMistake: 'Subtracting the percentage from the final amount. The percentage change was calculated from the original amount, so reverse percentage questions usually require you to divide by the multiplier.',
    practiceQuestions: [
      { q: 'A phone costs £92 after a 20% discount. What was the original price?', a: '£115' },
      { q: 'After a 10% increase, a value is £110. Find the original value.', a: '£100' },
      { q: 'A sale price of £64 is after a 20% decrease. Find the original price.', a: '£80' },
      { q: 'A population of 4,830 is after a 15% increase on last year. Find last year\'s population.', a: '4,200' },
      { q: 'A jacket now costs £51 after a 15% discount. Find the original price.', a: '£60' },
      { q: 'Including 20% VAT, a laptop costs £660. Find the price before VAT.', a: '£550' },
    ],
    nextResource: 'converting-fdp',
    relatedResources: ['percentage-change', 'percentage-decrease', 'percentage-increase'],
  },

  {
    id: 6,
    slug: 'converting-fdp',
    title: 'Converting Fractions, Decimals & Percentages',
    topic: 'fdp',
    subtopic: 'FDP conversion',
    resourceType: ['guide', 'tutorial', 'practice'],
    difficulty: 'Foundation',
    gcseTier: ['foundation', 'higher'],
    description: 'Move confidently between fractions, decimals and percentages.',
    keywords: ['fraction to decimal', 'decimal to percentage', 'convert fractions decimals percentages', 'fdp'],
    videoId: '',
    videoLength: '3 min',
    guide: {
      summary: 'Fractions, decimals and percentages are three ways of writing the same value.',
      paragraphs: [
        'To convert a fraction to a decimal, divide the numerator by the denominator.',
        'To convert a decimal to a percentage, multiply by 100 (this usually just moves the decimal point two places right).',
        'To convert a percentage to a fraction, write it over 100 and simplify.',
      ],
      workedExample: {
        question: 'Write 3/8 as a decimal and a percentage.',
        steps: [
          'Divide: 3 ÷ 8 = 0.375',
          'Multiply by 100: 0.375 × 100 = 37.5%',
        ],
        answer: '0.375 and 37.5%',
      },
    },
    commonMistake: 'Forgetting to move the decimal point when converting between decimals and percentages — 0.4 is 40%, not 4%.',
    practiceQuestions: [
      { q: 'Write 1/4 as a decimal.', a: '0.25' },
      { q: 'Write 0.6 as a percentage.', a: '60%' },
      { q: 'Write 45% as a fraction in its simplest form.', a: '9/20' },
      { q: 'Write 7/20 as a percentage.', a: '35%' },
      { q: 'Order these from smallest to largest: 0.7, 68%, 3/4.', a: '68%, 0.7, 3/4' },
    ],
    nextResource: 'fractions-of-amounts',
    relatedResources: ['percentage-of-an-amount', 'adding-fractions', 'ordering-fdp'],
  },

  {
    id: 7,
    slug: 'fractions-of-amounts',
    title: 'Fractions of Amounts',
    topic: 'fdp',
    subtopic: 'Fractions',
    resourceType: ['guide', 'tutorial', 'practice'],
    difficulty: 'Foundation',
    gcseTier: ['foundation', 'higher'],
    description: 'Find a fraction of a quantity by dividing then multiplying.',
    keywords: ['fraction of an amount', 'find a fraction of', 'divide then multiply'],
    videoId: '',
    videoLength: '3 min',
    guide: {
      summary: 'Divide by the denominator, then multiply by the numerator.',
      paragraphs: [
        'To find a fraction of an amount, first divide the amount by the denominator (the bottom number) to find one part.',
        'Then multiply that answer by the numerator (the top number) to find how many parts you need.',
      ],
      workedExample: {
        question: 'Find 3/5 of 40.',
        steps: [
          'Divide by the denominator: 40 ÷ 5 = 8',
          'Multiply by the numerator: 8 × 3 = 24',
        ],
        answer: '24',
      },
    },
    commonMistake: 'Multiplying by the denominator instead of the numerator, or forgetting to divide first — always find one part before finding several parts.',
    practiceQuestions: [
      { q: 'Find 1/4 of 32.', a: '8' },
      { q: 'Find 2/3 of 21.', a: '14' },
      { q: 'Find 3/8 of 64.', a: '24' },
      { q: 'Find 5/6 of 90 kg.', a: '75 kg' },
      { q: 'A journey is 240 miles. 5/8 of it has been driven. How many miles are left?', a: '90 miles' },
    ],
    nextResource: 'adding-fractions',
    relatedResources: ['converting-fdp', 'adding-fractions', 'multiplying-fractions'],
  },

  {
    id: 8,
    slug: 'adding-fractions',
    title: 'Adding Fractions',
    topic: 'fdp',
    subtopic: 'Fractions',
    resourceType: ['guide', 'tutorial', 'practice'],
    difficulty: 'Foundation',
    gcseTier: ['foundation', 'higher'],
    description: 'Add fractions with different denominators using a common denominator.',
    keywords: ['adding fractions', 'common denominator', 'add fractions different denominators'],
    videoId: '',
    videoLength: '4 min',
    guide: {
      summary: 'Find a common denominator, convert each fraction, then add the numerators.',
      paragraphs: [
        'Fractions can only be added directly when they have the same denominator, so the first step is to find a common denominator — often the lowest common multiple of the two denominators.',
        'Convert each fraction to an equivalent fraction with this common denominator, keeping the value the same.',
        'Add the numerators together and keep the denominator the same. Simplify your answer if possible.',
      ],
      workedExample: {
        question: 'Work out 1/3 + 1/4.',
        steps: [
          'Common denominator of 3 and 4 is 12',
          'Convert: 1/3 = 4/12 and 1/4 = 3/12',
          'Add numerators: 4/12 + 3/12 = 7/12',
        ],
        answer: '7/12',
      },
    },
    commonMistake: 'Adding the denominators as well as the numerators — the denominator only changes when you convert to a common denominator, not when you add.',
    practiceQuestions: [
      { q: 'Work out 1/2 + 1/4.', a: '3/4' },
      { q: 'Work out 2/5 + 1/3.', a: '11/15' },
      { q: 'Work out 3/8 + 1/4.', a: '5/8' },
      { q: 'Work out 1 1/2 + 2/3.', a: '2 1/6' },
      { q: 'Work out 5/6 − 1/4.', a: '7/12' },
    ],
    nextResource: 'multiplying-fractions',
    relatedResources: ['fractions-of-amounts', 'multiplying-fractions', 'converting-fdp'],
  },

  {
    id: 9,
    slug: 'multiplying-fractions',
    title: 'Multiplying Fractions',
    topic: 'fdp',
    subtopic: 'Fractions',
    resourceType: ['guide', 'practice'],
    difficulty: 'Foundation',
    gcseTier: ['foundation', 'higher'],
    description: 'Multiply fractions by multiplying numerators and denominators separately.',
    keywords: ['multiplying fractions', 'times fractions together'],
    videoId: '',
    videoLength: '',
    guide: {
      summary: 'Multiply the numerators together, then multiply the denominators together.',
      paragraphs: [
        'Unlike adding fractions, you do not need a common denominator to multiply them.',
        'Multiply the two numerators to get the new numerator, and multiply the two denominators to get the new denominator.',
        'Simplify the answer if possible — it can help to simplify (cancel) before multiplying too.',
      ],
      workedExample: {
        question: 'Work out 2/3 × 3/5.',
        steps: [
          'Multiply numerators: 2 × 3 = 6',
          'Multiply denominators: 3 × 5 = 15',
          'Simplify 6/15: divide top and bottom by 3',
        ],
        answer: '2/5',
      },
    },
    commonMistake: 'Trying to find a common denominator before multiplying — this is only needed for adding and subtracting fractions, not multiplying.',
    practiceQuestions: [
      { q: 'Work out 1/2 × 1/3.', a: '1/6' },
      { q: 'Work out 2/5 × 3/4.', a: '3/10' },
      { q: 'Work out 3/7 × 2/9.', a: '2/21' },
      { q: 'Work out 4/5 × 5/8.', a: '1/2' },
      { q: 'Work out 1 1/2 × 2/3.', a: '1' },
    ],
    nextResource: 'sharing-in-a-ratio',
    relatedResources: ['adding-fractions', 'fractions-of-amounts'],
  },

  {
    id: 10,
    slug: 'sharing-in-a-ratio',
    title: 'Sharing in a Ratio',
    topic: 'ratio',
    subtopic: 'Ratio',
    resourceType: ['guide', 'tutorial', 'practice'],
    difficulty: 'Foundation',
    gcseTier: ['foundation', 'higher'],
    description: 'Split an amount into parts according to a given ratio.',
    keywords: ['ratio sharing', 'share in a ratio', 'divide in a ratio', 'split ratio'],
    videoId: '',
    videoLength: '4 min',
    guide: {
      summary: 'Find the total number of parts, work out the value of one part, then scale up.',
      paragraphs: [
        'Add together the numbers in the ratio to find the total number of parts.',
        'Divide the total amount by the total number of parts to find the value of one part.',
        'Multiply the value of one part by each number in the ratio to find each share.',
      ],
      workedExample: {
        question: 'Share £60 in the ratio 2:3.',
        steps: [
          'Total parts: 2 + 3 = 5',
          'Value of one part: £60 ÷ 5 = £12',
          'Shares: 2 × £12 = £24 and 3 × £12 = £36',
        ],
        answer: '£24 and £36',
      },
    },
    commonMistake: 'Dividing the total by the number of terms in the ratio (e.g. by 2) instead of the total number of parts (e.g. by 5) — always add the ratio numbers first.',
    practiceQuestions: [
      { q: 'Share £40 in the ratio 1:3.', a: '£10 and £30' },
      { q: 'Share 90 sweets in the ratio 4:5.', a: '40 and 50' },
      { q: 'Share £120 in the ratio 2:3:5.', a: '£24, £36 and £60' },
      { q: 'A recipe uses flour and sugar in the ratio 5:2. There is 350 g in total. How much flour is used?', a: '250 g' },
      { q: 'Two amounts are shared in the ratio 3:7. The smaller amount is £45. Find the total amount shared.', a: '£150' },
    ],
    nextResource: 'simplifying-ratio',
    relatedResources: ['simplifying-ratio', 'fractions-of-amounts'],
  },

  {
    id: 11,
    slug: 'simplifying-ratio',
    title: 'Simplifying Ratio',
    topic: 'ratio',
    subtopic: 'Ratio',
    resourceType: ['guide', 'practice'],
    difficulty: 'Foundation',
    gcseTier: ['foundation', 'higher'],
    description: 'Write a ratio in its simplest form by dividing by common factors.',
    keywords: ['simplify a ratio', 'simplest form ratio', 'ratio simplifying'],
    videoId: '',
    videoLength: '',
    guide: {
      summary: 'Divide every part of the ratio by the highest common factor.',
      paragraphs: [
        'A ratio is in its simplest form when there is no whole number that divides into every part of it, other than 1.',
        'Find the highest common factor (HCF) of the numbers in the ratio, then divide each number by it.',
        'If the ratio contains units, make sure they are the same before simplifying.',
      ],
      workedExample: {
        question: 'Simplify the ratio 18:24.',
        steps: [
          'HCF of 18 and 24 is 6',
          'Divide both parts by 6: 18 ÷ 6 = 3, 24 ÷ 6 = 4',
        ],
        answer: '3:4',
      },
    },
    commonMistake: 'Simplifying ratios with different units without converting them first, e.g. treating 50p:£2 as 50:2 instead of converting to 50p:200p.',
    practiceQuestions: [
      { q: 'Simplify 10:15.', a: '2:3' },
      { q: 'Simplify 24:36.', a: '2:3' },
      { q: 'Simplify 400 g : 1 kg.', a: '2:5' },
      { q: 'Simplify 45 minutes : 2 hours.', a: '3:8' },
      { q: 'Simplify 12:18:30.', a: '2:3:5' },
    ],
    nextResource: 'sharing-in-a-ratio',
    relatedResources: ['sharing-in-a-ratio'],
  },

  {
    id: 12,
    slug: 'solving-linear-equations',
    title: 'Solving Linear Equations',
    topic: 'algebra',
    subtopic: 'Equations',
    resourceType: ['guide', 'tutorial', 'practice'],
    difficulty: 'Foundation',
    gcseTier: ['foundation', 'higher'],
    description: 'Solve equations with an unknown on one side using inverse operations.',
    keywords: ['solving equations', 'linear equations', 'solve for x', 'inverse operations'],
    videoId: '',
    videoLength: '5 min',
    guide: {
      summary: 'Do the same operation to both sides to get the unknown on its own.',
      paragraphs: [
        'An equation stays balanced as long as you do exactly the same thing to both sides.',
        'Use inverse operations to undo what has been done to the unknown, working outwards step by step, until the unknown is on its own.',
        'Check your answer by substituting it back into the original equation.',
      ],
      workedExample: {
        question: 'Solve 3x + 5 = 20.',
        steps: [
          'Subtract 5 from both sides: 3x = 15',
          'Divide both sides by 3: x = 5',
        ],
        answer: 'x = 5',
      },
    },
    commonMistake: 'Only applying an operation to one side of the equation — whatever you do to one side, you must do to the other to keep it balanced.',
    practiceQuestions: [
      { q: 'Solve x + 7 = 12.', a: 'x = 5' },
      { q: 'Solve 4x = 24.', a: 'x = 6' },
      { q: 'Solve 2x − 3 = 11.', a: 'x = 7' },
      { q: 'Solve 5x + 4 = 29.', a: 'x = 5' },
      { q: 'Solve 3(x + 2) = 21.', a: 'x = 5' },
      { q: 'Solve 4x + 3 = 2x + 15.', a: 'x = 6' },
    ],
    nextResource: 'expanding-brackets',
    relatedResources: ['expanding-brackets', 'factorising', 'nth-term'],
  },

  {
    id: 13,
    slug: 'expanding-brackets',
    title: 'Expanding Brackets',
    topic: 'algebra',
    subtopic: 'Expressions',
    resourceType: ['guide', 'practice'],
    difficulty: 'Foundation',
    gcseTier: ['foundation', 'higher'],
    description: 'Multiply out brackets by multiplying every term inside by the term outside.',
    keywords: ['expanding brackets', 'multiply out brackets', 'distributive law'],
    videoId: '',
    videoLength: '',
    guide: {
      summary: 'Multiply the term outside the bracket by every term inside it.',
      paragraphs: [
        'To expand a bracket, multiply the term outside by each term inside separately, then simplify by collecting like terms if needed.',
        'Pay close attention to negative signs — a negative outside the bracket flips the sign of every term inside.',
      ],
      workedExample: {
        question: 'Expand 4(2x − 3).',
        steps: [
          'Multiply 4 by 2x: 8x',
          'Multiply 4 by −3: −12',
        ],
        answer: '8x − 12',
      },
    },
    commonMistake: 'Only multiplying the first term inside the bracket and forgetting the second — every term inside must be multiplied by the term outside.',
    practiceQuestions: [
      { q: 'Expand 3(x + 4).', a: '3x + 12' },
      { q: 'Expand 5(2x − 1).', a: '10x − 5' },
      { q: 'Expand −2(3x + 4).', a: '−6x − 8' },
      { q: 'Expand and simplify 3(x + 2) + 2(x − 1).', a: '5x + 4' },
      { q: 'Expand x(x + 5).', a: 'x² + 5x' },
    ],
    nextResource: 'factorising',
    relatedResources: ['solving-linear-equations', 'factorising'],
  },

  {
    id: 14,
    slug: 'factorising',
    title: 'Factorising',
    topic: 'algebra',
    subtopic: 'Expressions',
    resourceType: ['guide', 'tutorial', 'practice'],
    difficulty: 'Higher',
    gcseTier: ['foundation', 'higher'],
    description: 'Write an expression as a product by taking out a common factor.',
    keywords: ['factorising', 'factorise an expression', 'common factor algebra'],
    videoId: '',
    videoLength: '4 min',
    guide: {
      summary: 'Factorising is the reverse of expanding — find the highest common factor and put it outside a bracket.',
      paragraphs: [
        'To factorise, find the highest common factor (HCF) of every term in the expression.',
        'Write the HCF outside a bracket, then work out what each term must be divided by to fit inside the bracket.',
        'Check your answer by expanding it back out — you should get the original expression.',
      ],
      workedExample: {
        question: 'Factorise 6x + 9.',
        steps: [
          'HCF of 6x and 9 is 3',
          'Write 3 outside a bracket: 3( )',
          'Divide each term by 3: 2x and 3',
        ],
        answer: '3(2x + 3)',
      },
    },
    commonMistake: 'Not taking out the highest common factor — for example writing 2(3x + 4.5) instead of the fully factorised 6x + 9 with whole-number terms inside the bracket.',
    practiceQuestions: [
      { q: 'Factorise 4x + 8.', a: '4(x + 2)' },
      { q: 'Factorise 10x − 15.', a: '5(2x − 3)' },
      { q: 'Factorise x² + 5x.', a: 'x(x + 5)' },
      { q: 'Factorise 6x² + 9x.', a: '3x(2x + 3)' },
      { q: 'Factorise x² + 7x + 12.', a: '(x + 3)(x + 4)' },
    ],
    nextResource: 'nth-term',
    relatedResources: ['expanding-brackets', 'solving-linear-equations'],
  },

  {
    id: 15,
    slug: 'nth-term',
    title: 'Finding the Nth Term',
    topic: 'algebra',
    subtopic: 'Sequences',
    resourceType: ['guide', 'tutorial', 'practice'],
    difficulty: 'Foundation',
    gcseTier: ['foundation', 'higher'],
    description: 'Find the formula for the nth term of a linear sequence.',
    keywords: ['nth term', 'nth term formula', 'sequences', 'linear sequence rule'],
    videoId: '',
    videoLength: '4 min',
    guide: {
      summary: 'Find the common difference, then adjust so the formula gives the right first term.',
      paragraphs: [
        'For a linear (arithmetic) sequence, first find the common difference between consecutive terms — this becomes the coefficient of n.',
        'Write dn (where d is the common difference), then work out what needs to be added or subtracted so that when n = 1, the formula gives the first term of the sequence.',
      ],
      workedExample: {
        question: 'Find the nth term of 5, 8, 11, 14, ...',
        steps: [
          'Common difference: 3, so start with 3n',
          'When n = 1, 3n = 3, but the first term is 5, so add 2',
        ],
        answer: '3n + 2',
      },
    },
    commonMistake: 'Using the first term as the number added or subtracted, instead of checking what makes n = 1 give the correct first term.',
    practiceQuestions: [
      { q: 'Find the nth term of 2, 5, 8, 11, ...', a: '3n − 1' },
      { q: 'Find the nth term of 4, 9, 14, 19, ...', a: '5n − 1' },
      { q: 'Find the nth term of 20, 17, 14, 11, ...', a: '23 − 3n' },
      { q: 'Find the nth term of 6, 10, 14, 18, ...', a: '4n + 2' },
      { q: 'The nth term of a sequence is 4n + 3. Find the 12th term.', a: '51' },
    ],
    nextResource: 'standard-form',
    relatedResources: ['solving-linear-equations', 'factorising'],
  },

  {
    id: 16,
    slug: 'standard-form',
    title: 'Standard Form',
    topic: 'number',
    subtopic: 'Powers & Standard Form',
    resourceType: ['guide', 'practice'],
    difficulty: 'Higher',
    gcseTier: ['foundation', 'higher'],
    description: 'Write very large or very small numbers using standard form (a × 10ⁿ).',
    keywords: ['standard form', 'standard index form', 'scientific notation'],
    videoId: '',
    videoLength: '',
    guide: {
      summary: 'Standard form is written as a × 10ⁿ, where 1 ≤ a < 10.',
      paragraphs: [
        'A number in standard form is written as a × 10ⁿ, where a is between 1 and 10, and n is an integer (a whole number, positive or negative).',
        'For large numbers, count how many places the decimal point moves to get a between 1 and 10 — this gives a positive power of 10.',
        'For small numbers (less than 1), the power of 10 is negative.',
      ],
      workedExample: {
        question: 'Write 47,000 in standard form.',
        steps: [
          'Move the decimal point so there is one digit before it: 4.7',
          'Count how many places it moved: 4 places',
        ],
        answer: '4.7 × 10⁴',
      },
    },
    commonMistake: 'Writing a number where the first factor is not between 1 and 10, e.g. 47 × 10³ instead of the correct standard form 4.7 × 10⁴.',
    practiceQuestions: [
      { q: 'Write 8,200 in standard form.', a: '8.2 × 10³' },
      { q: 'Write 0.00035 in standard form.', a: '3.5 × 10⁻⁴' },
      { q: 'Write 3.6 × 10⁵ as an ordinary number.', a: '360,000' },
      { q: 'Write 2.1 × 10⁻³ as an ordinary number.', a: '0.0021' },
      { q: 'Work out (3 × 10⁴) × (2 × 10³), giving your answer in standard form.', a: '6 × 10⁷' },
    ],
    nextResource: 'pythagoras',
    relatedResources: ['nth-term'],
  },

  {
    id: 17,
    slug: 'pythagoras',
    title: "Pythagoras' Theorem",
    topic: 'geometry',
    subtopic: 'Right-angled triangles',
    resourceType: ['guide', 'tutorial', 'practice'],
    difficulty: 'Foundation',
    gcseTier: ['foundation', 'higher'],
    description: 'Find a missing side of a right-angled triangle using a² + b² = c².',
    keywords: ['pythagoras', "pythagoras' theorem", 'missing side triangle', 'hypotenuse'],
    videoId: '',
    videoLength: '5 min',
    guide: {
      summary: 'a² + b² = c², where c is always the hypotenuse (the longest side).',
      paragraphs: [
        "Pythagoras' theorem connects the three sides of a right-angled triangle: a² + b² = c², where c is the hypotenuse, the longest side, opposite the right angle.",
        'To find the hypotenuse, square both known sides, add them together, then square root the result.',
        'To find a shorter side, square both known sides, subtract the smaller from the larger, then square root the result.',
      ],
      workedExample: {
        question: 'A right-angled triangle has shorter sides of 6 cm and 8 cm. Find the hypotenuse.',
        steps: [
          'Square both sides: 6² = 36, 8² = 64',
          'Add: 36 + 64 = 100',
          'Square root: √100 = 10',
        ],
        answer: '10 cm',
      },
    },
    commonMistake: 'Adding the squares when finding a shorter side instead of subtracting — you only add when finding the hypotenuse.',
    practiceQuestions: [
      { q: 'A right-angled triangle has shorter sides 3 cm and 4 cm. Find the hypotenuse.', a: '5 cm' },
      { q: 'A right-angled triangle has shorter sides 5 cm and 12 cm. Find the hypotenuse.', a: '13 cm' },
      { q: 'A right-angled triangle has hypotenuse 13 cm and one shorter side 5 cm. Find the other shorter side.', a: '12 cm' },
      { q: 'A ladder 6.5 m long leans against a wall, reaching 6 m up. How far is the base from the wall?', a: '2.5 m' },
      { q: 'A rectangle measures 9 cm by 12 cm. Find the length of its diagonal.', a: '15 cm' },
    ],
    nextResource: 'area-of-a-circle',
    relatedResources: ['area-of-a-circle'],
  },

  {
    id: 18,
    slug: 'area-of-a-circle',
    title: 'Area of a Circle',
    topic: 'geometry',
    subtopic: 'Circles',
    resourceType: ['guide', 'practice'],
    difficulty: 'Foundation',
    gcseTier: ['foundation', 'higher'],
    description: 'Use A = πr² to find the area of a circle from its radius or diameter.',
    keywords: ['area of a circle', 'circle area formula', 'radius', 'pi r squared'],
    videoId: '',
    videoLength: '',
    guide: {
      summary: 'Area = π × radius². Remember to halve the diameter first if that is what you are given.',
      paragraphs: [
        'The area of a circle is found using the formula A = πr², where r is the radius.',
        'If you are given the diameter instead of the radius, halve it first before using the formula.',
        'Unless told otherwise, use the π button on your calculator rather than rounding π to 3.14 early, to keep your answer accurate.',
      ],
      workedExample: {
        question: 'Find the area of a circle with radius 5 cm. Give your answer to 1 d.p.',
        steps: [
          'A = πr²',
          'A = π × 5²',
          'A = π × 25',
        ],
        answer: '78.5 cm²',
      },
    },
    commonMistake: 'Using the diameter directly in the formula instead of halving it to get the radius first.',
    practiceQuestions: [
      { q: 'Find the area of a circle with radius 4 cm. Give your answer to 1 d.p.', a: '50.3 cm²' },
      { q: 'Find the area of a circle with diameter 10 cm. Give your answer to 1 d.p.', a: '78.5 cm²' },
      { q: 'Find the area of a circle with radius 7 cm in terms of π.', a: '49π cm²' },
      { q: 'A circular pond has a radius of 3.5 m. Find its area to 1 d.p.', a: '38.5 m²' },
    ],
    nextResource: 'pythagoras',
    relatedResources: ['pythagoras'],
  },

  {
    id: 19,
    slug: 'mean-median-mode-range',
    title: 'Mean, Median, Mode and Range',
    topic: 'stats',
    subtopic: 'Averages',
    resourceType: ['guide', 'tutorial', 'practice'],
    difficulty: 'Foundation',
    gcseTier: ['foundation', 'higher'],
    description: 'Calculate the three averages and the range for a set of data.',
    keywords: ['mean median mode range', 'averages', 'find the mean', 'find the median'],
    videoId: '',
    videoLength: '4 min',
    guide: {
      summary: 'Mean = total ÷ how many. Median = middle value when ordered. Mode = most common. Range = largest − smallest.',
      paragraphs: [
        'The mean is found by adding all the values together and dividing by how many values there are.',
        'The median is the middle value once the data has been put in order — if there are two middle values, find the mean of those two.',
        'The mode is the value that appears most often, and the range is the largest value minus the smallest value.',
      ],
      workedExample: {
        question: 'Find the mean, median, mode and range of: 4, 7, 4, 9, 6.',
        steps: [
          'Mean: (4 + 7 + 4 + 9 + 6) ÷ 5 = 30 ÷ 5 = 6',
          'Ordered: 4, 4, 6, 7, 9 → median = 6',
          'Mode = 4 (appears twice)',
          'Range = 9 − 4 = 5',
        ],
        answer: 'Mean 6, median 6, mode 4, range 5',
      },
    },
    commonMistake: 'Forgetting to put the data in order before finding the median — the values must be ordered first, or the middle value will be wrong.',
    practiceQuestions: [
      { q: 'Find the mean of: 3, 5, 8, 10, 9.', a: '7' },
      { q: 'Find the median of: 12, 7, 15, 9, 11.', a: '11' },
      { q: 'Find the mode of: 2, 3, 3, 5, 3, 6.', a: '3' },
      { q: 'Find the range of: 14, 8, 22, 5, 17.', a: '17' },
      { q: 'Five numbers have a mean of 8. Four of them are 5, 9, 10 and 6. Find the fifth number.', a: '10' },
    ],
    nextResource: 'nth-term',
    relatedResources: [],
  },

  {
    id: 20,
    slug: 'direct-proportion-constructing-formulae',
    title: 'Direct Proportion – Constructing Formulae',
    topic: 'ratio',
    subtopic: 'Direct proportion',
    resourceType: ['tutorial'],
    difficulty: 'Higher',
    gcseTier: ['higher'],
    description: 'Learn how to construct an equation for direct proportion.',
    keywords: ['direct proportion', 'constructing formula', 'constructing equations', 'y = kx', 'constant of proportionality'],
    videoId: '',
    videoFile: '/tutorials/direct-proportion-constructing-equations.mp4',
    videoLength: '8 min',
    relatedResources: [],
  },

];

// Convenience lookups -----------------------------------------------------

export function getResource(slug) {
  return resources.find((r) => r.slug === slug);
}

export function getResourcesByType(type) {
  return resources.filter((r) => r.resourceType.includes(type));
}

export function getResourcesByTopic(topicSlug) {
  return resources.filter((r) => r.topic === topicSlug);
}

export function getResourcesByTier(tier) {
  return resources.filter((r) => r.gcseTier.includes(tier));
}
