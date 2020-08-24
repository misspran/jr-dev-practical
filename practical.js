// 1. Write a function that determines if a string starts with an upper-case letter.
const startsWithUpper = (str) => {
  if (typeof str !== 'string' || str === '') return false;
  const [first] = str
  return first.toLowerCase() === first
}


// 2. Write a function in a language of your choosing that removes punctuation as fast as possible from an array of strings.
const punctuation = /,;!?./g
const removePunctuation = (strings) => {
  if (strings.length === 0) return [];
  return strings.map(str => {
    str.replace(punctuation)
  })
}



// 3. Write a single line of JavaScript that returns the total impact score of all articles in the following "documents" array
function get_impact_score(citations,year) {
	let yhat = 0.015 * year + 27;	
	return citations - yhat;
}

const totalImpactScore =
  documents.reduce((result, { year, citations, doc_type }) =>
  doc_type === 'Article'
    ? result + get_impact_score(citations, year)
    : result
  , 0)

const documents = [
  {
    id: 5,
    title: "Modélisation d'impacts multiples par méthode semi analytique pour la simulation de procédés de mise en compression",
    year: 2019,
    citations: 56,
    doc_type: "Article"
  },
  {
    id: 82,
    title: "Machine and method for reproducing images with photoconductive ink",
    year: 2017,
    citations: 293,
    doc_type: "Patent"
  },
  {
    id: 22,
    name: "INFERRING MOBILE ELEMENTS IN S. CEREVISIAE STRAINS",
    year: 2016,
    citations: 97,
    doc_type: "Article"
  },
  {
    id: 15,
    name: "Cam-follower construction",
    year: 2018,
    citations: 23,
    doc_type: "Patent"
  },
  {
    id: 11,
    name: "Cytological and histological changes in lymphocytes influence of ionizing radiation on health workers",
    year: 2012,
    citations: 337,
    doc_type: "Article"
  }
];



// 4. Using vanilla HTML and CSS, code a table that will present the data in the "documents" array from question 4.




// 5. Imagine a reddit-style website where users can post comments, reply to
// other user's comments, reply to replies, and upvote comments. How would you
// write a recursive function that sums the upvotes for a top-level comment and
// all nested replies?
// interface Comment {
//   message: string;
//   upvotes: number;
//   subcomments: Comment[]
// }

const sumUpvotes = (comment) => {
  let totalUpvotes = comment.upvotes;
  if (comment.subcomments.length) {
    const first = comment.subcomments[0];
    totalUpvotes += sumUpvotes(first)
  } else {
    return totalUpvotes;
  }
  return totalUpvotes;
}


