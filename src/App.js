import React, { Component } from 'react';
import './App.css';

const QUOTES = [
  {
    quote: 'The best coders understand the basics of coding, deeply.',
    author: 'Fikayo Adepoju'
  },
  {
    quote: 'Work until your name becomes your CV.',
    author: 'Prosper Otemuyiwa'
  },
  {
    quote: "Life isn’t about getting and having, it’s about giving and being.", 
    author: "Kevin Kruse"
  },
  {
    quote: "Whatever the mind of man can conceive and believe, it can achieve.", 
    author: "Napoleon Hill"
  },
  {
    quote: "Strive not to be a success, but rather to be of value.", 
    author: "Albert Einstein"
  },
  {
    quote: "Two roads diverged in a wood, and I—I took the one…raveled by, And that has made all the difference.", 
    author: "Robert Frost"
  },
  {
    quote: "I attribute my success to this: I never gave or took any excuse.", 
    author: "Florence Nightingale"
  },
  {
    quote: "You miss 100% of the shots you don’t take.", 
    author: "Wayne Gretzky"
  },
  {
    quote: "I’ve missed more than 9000 shots in my career. I’v…over again in my life. And that is why I succeed.", 
    author: "Michael Jordan"
  },
  {
    quote: "The most difficult thing is the decision to act, the rest is merely tenacity.", 
    author: "Amelia Earhart"
  },
  {
    quote: "Every strike brings me closer to the next home run.", 
    author: "Babe Ruth"
  },
  {
    quote: "Definiteness of purpose is the starting point of all achievement.", 
    author: "W. Clement Stone"
  }

];

class RandomQuoteMachine extends Component {

  state = {quote: ''}

  getRandomQuote = () => {
    const randQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    this.setState({
      quote: randQuote
    });
    return randQuote;
  }
  
  changeQuote = () => {
    this.setState({
      quote: this.getRandomQuote()
    })    
  }

  componentDidMount() {
    this.getRandomQuote();
  }

  render() {
    const {quote} = this.state;
    return (
      <div id="quote-box">
        <QuoteBox quote={quote.quote} changeQuote={this.changeQuote} />
        <AuthorBox author={quote.author}/>
      </div>
    );
  }
}

function QuoteBox({quote, changeQuote}) {
    return (
      <div className="quotes">
        <p id="text">{quote}</p>
        <Tweet quote={quote}/>
        <button id="new-quote" onClick={changeQuote}>New Quote</button>
      </div>
    )
}

function Tweet({quote}) {
  return (
    <a className="tweet" href={`https://twitter.com/intent/tweet?text= ${encodeURIComponent(quote)}` }>
      <button id="tweet-quote" >Tweet</button>
    </a>
  )
}

function AuthorBox({author}) {
  return (
    <div id="author">
      <p>{author}</p>
    </div>
  )
}


export default RandomQuoteMachine;



