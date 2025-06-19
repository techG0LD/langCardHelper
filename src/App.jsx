import { useState } from 'react'
import './App.css'
import Card from './card'

const cardsData = [
  { eng: "Hello", jap: "Konnichiwa", pro: "kon-nee-chee-wah"},
  { eng: "Thank You", jap: "Arigato Gozaimasu", pro: "ah-ree-gah-toh goh-zah-ee-mahs"},
  { eng: "Excuse Me, Sorry, Thank You", jap: "Sumimasen", pro: "soo-mee-mah-sen"},
  { eng: "Where is…?", jap: "Doko desu ka?", pro: "doh-koh dess kah"},
  { eng: "Goodbye", jap: "Sayonara", pro: "sah-yoh-nah-rah"},
  { eng: "Delicious", jap: "Oishii", pro: "oh-ee-shee"},
  { eng: "Do you speak English?", jap: "Eigo o hanasemasu ka?", pro: "ay-goh oh hah-nah-seh-mahs kah"},
  { eng: "Yes", jap: "Hai", pro: "Ha-i"},
  { eng: "My name is ___", jap: "Watashi no namae wa ___ desu", pro: "wah-tah-shee noh nah-mah-eh wah ___ dess"},
  { eng: "How much is that?", jap: "Sore wa ikura desu ka?", pro: "so-re wa ee-koo-rah dess kah"},
];


function App() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNextCard = () => {
    const randomIndex = Math.floor(Math.random() * cardsData.length);
    setCurrentIndex(randomIndex);
    setIsFlipped(false); // reset flip
  };

  const currentCard = cardsData[currentIndex];
  const [count, setCount] = useState(0)

  return (
    
    <div className='app'>
      <div className='header'>
        <h1>Ten Japanese phrases </h1>
        <h2>Learn to say a few phrases in Japanese</h2>
        <p>Number of cards: {cardsData.length}</p>
      </div>

      <div className="card-container">
        <div className="card">
          <Card
          eng={currentCard.eng}
          jap={currentCard.jap}
          pro={currentCard.pro}
          isFlipped={isFlipped}
          onClick={handleCardClick}
          />
        </div>
      </div><button onClick={handleNextCard}>
          Next phrase
        </button>
    </div>
  )
}

export default App
