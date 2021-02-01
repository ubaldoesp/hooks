import './App.css';
import React, { useState, useEffect } from 'react'
import data from './quote.json'
import {FaTwitter} from 'react-icons/fa'
import { FaQuoteLeft } from "react-icons/fa";


const Quotes = ({color, colorButton }) =>{
  const [thisQuotes,setQuotes]= useState('')
  const [thisAuthor,setAuthor]= useState('')
  

  useEffect(()=>{
    getQuotes()
  }, [])

  const getQuotes = () =>{
    
    let quotesData= data.quotes
    let random = Math.floor(Math.random()*quotesData.length)
    let randomQuotes = quotesData[random]
    setQuotes(randomQuotes.quote)
    setAuthor(randomQuotes.author)
  } 

  

  const handleQuotes = () =>{
    getQuotes()
  }

  return(
    
  <div className="body" >
    <div className="card">
      
      <h3><span><FaQuoteLeft/></span>{thisQuotes}</h3>
      <p className="author">---{thisAuthor}</p>
      <div className="buttons">
        <a href={`https://twitter.com/intent/tweet?text=${thisQuotes}${thisAuthor}`} target="blank"  style={{backgroundColor: colorButton}}>
          <FaTwitter style={{width:"20px"}}/>
        </a>
        <button onClick={() => {handleQuotes() 
        color() } } style={{backgroundColor: colorButton}}>Next Quote</button>
      </div>
    </div>
  </div>)
}



function App() {
  const [thisColor,setColor]= useState("#845ec2")

  const handleGetColor = () =>{
    //  const color =["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9","0"]
      const random = "#" + Math.floor(Math.random()* 16777215).toString(16)
      setColor(random)
      console.log(thisColor)
  
    } 
  return (
    <div className="app" style={{backgroundColor: thisColor}}>
      <Quotes color={handleGetColor} colorButton={thisColor}/>

    </div>
  );
}

export default App;
