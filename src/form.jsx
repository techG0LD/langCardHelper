import React, { useState } from 'react';

const SimpleForm = ({ onSubmit, expected, inputValue, setInputValue, isCorrect, setIsCorrect }) => {
  const handleChange = (e) => {
    setInputValue(e.target.value);
    setIsCorrect(null); // clear feedback while typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = inputValue.trim().toLowerCase();
    const expectedTrimmed = expected.trim().toLowerCase();

    if (trimmed) {
      const correct = trimmed === expectedTrimmed;
      setIsCorrect(correct);
      onSubmit(inputValue);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter English phrase..."
        style={{
          border: '2px solid',
          borderColor:
            isCorrect === null ? '#ccc' : isCorrect ? 'green' : 'red',
          outline: 'none',
          padding: '0.5rem',
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};



export default SimpleForm;
