import { useState } from 'react';
import './App.css';
import Card from './card';
import SimpleForm from './form';

const originalData = [
  { eng: "Hello", jap: "Konnichiwa", pro: "kon-nee-chee-wah" },
  { eng: "Thank You", jap: "Arigato Gozaimasu", pro: "ah-ree-gah-toh goh-zah-ee-mahs" },
  { eng: "Excuse Me, Sorry, Thank You", jap: "Sumimasen", pro: "soo-mee-mah-sen" },
  { eng: "Where is…?", jap: "Doko desu ka?", pro: "doh-koh dess kah" },
  { eng: "Goodbye", jap: "Sayonara", pro: "sah-yoh-nah-rah" },
  { eng: "Delicious", jap: "Oishii", pro: "oh-ee-shee" },
  { eng: "Do you speak English?", jap: "Eigo o hanasemasu ka?", pro: "ay-goh oh hah-nah-seh-mahs kah" },
  { eng: "Yes", jap: "Hai", pro: "Ha-i" },
  { eng: "My name is ___", jap: "Watashi no namae wa ___ desu", pro: "wah-tah-shee noh nah-mah-eh wah ___ dess" },
  { eng: "How much is that?", jap: "Sore wa ikura desu ka?", pro: "so-re wa ee-koo-rah dess kah" },
];

function App() {
  const [cards, setCards] = useState(originalData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  
  const [inputValue, setInputValue] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

const handleNext = () => {
  if (currentIndex < cards.length - 1) {
    setCurrentIndex(currentIndex + 1);
    setIsFlipped(false);
    setInputValue('');
    setIsCorrect(null);  // Reset feedback state
  }
};

const handleBack = () => {
  if (currentIndex > 0) {
    setCurrentIndex(currentIndex - 1);
    setIsFlipped(false);
    setInputValue('');
    setIsCorrect(null);
  }
};

const handleShuffle = () => {
  const shuffled = [...cards].sort(() => Math.random() - 0.5);
  setCards(shuffled);
  setCurrentIndex(0);
  setIsFlipped(false);
  setInputValue('');
  setIsCorrect(null);
};


  const currentCard = cards[currentIndex];

  return (
    <div className="app">
      <div className="header">
        <h1>Ten Japanese phrases</h1>
        <h2>Learn to say a few phrases in Japanese</h2>
        <p>Number of cards: {cards.length}</p>
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
      </div>

      <SimpleForm
        expected={currentCard.eng}
        inputValue={inputValue}
        setInputValue={setInputValue}
        isCorrect={isCorrect}
        setIsCorrect={setIsCorrect}
        onSubmit={(value) => console.log('Submitted:', value)}
      />



      <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
        <button
          onClick={handleBack}
          disabled={currentIndex === 0}
          style={{
            opacity: currentIndex === 0 ? 0.5 : 1,
            cursor: currentIndex === 0 ? 'not-allowed' : 'pointer'
          }}
        >
          ⬅ Back
        </button>

        <button onClick={handleShuffle}>🔀 Shuffle</button>

        <button
          onClick={handleNext}
          disabled={currentIndex === cards.length - 1}
          style={{
            opacity: currentIndex === cards.length - 1 ? 0.5 : 1,
            cursor: currentIndex === cards.length - 1 ? 'not-allowed' : 'pointer'
          }}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}

export default App;
