// 1. Write a function that determines if a string starts with an upper-case letter.



// 2. Write a function in a language of your choosing that removes punctuation as fast as possible from an array of strings.



// 3. Write a function that reverses the words in a sentence.



// 4. Write a single line of JavaScript that returns the total impact score of all articles in the following "documents" array
function get_impact_score(citations,year) {
	let yhat = 0.015 * year + 27;	
	return citations - yhat;
}

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

