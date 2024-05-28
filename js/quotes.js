var quotes = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: "― Oscar Wilde",
  },

  {
    quote: "“You only live once, but if you do it right, once is enough.”",
    author: "― Mae West",
  },

  {
    quote: "“If you tell the truth, you don't have to remember anything.”",
    author: "― Mark Twain",
  },

  {
    quote: "“A friend is someone who knows all about you and still loves you.”",
    author: "― Elbert Hubbard",
  },

  {
    quote:
      "“To live is the rarest thing in the world. Most people exist, that is all.”“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    author: "― Mahatma Gandhi",
  },

  {
    quote:
      "“It is better to be hated for what you are than to be loved for what you are not.”",
    author: "― Andre Gide",
  },

  {
    quote:
      "“The fool doth think he is wise, but the wise man knows himself to be a fool.”",
    author: "― William Shakespeare",
  },

  {
    quote: "“Life is what happens to us while we are making other plans.”",
    author: "― Allen Saunders",
  },

  {
    quote:
      "“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.”",
    author: "― Bill Keane",
  },

  {
    quote: "“I have not failed. I've just found 10,000 ways that won't work.”",
    author: "― Thomas A. Edison",
  },
];

var previousIndex = -1;

function newQuote() {
  var randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === previousIndex);

  previousIndex = randomIndex;

  document.getElementById("quoteResult").innerHTML = quotes[randomIndex].quote;
  document.getElementById("quoteAuthor").innerHTML = quotes[randomIndex].author;
}
