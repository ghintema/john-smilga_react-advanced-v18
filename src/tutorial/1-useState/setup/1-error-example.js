import React from 'react';
import { useState } from 'react';

const ErrorExample = () => {

  const [title, setTitle] = useState('first title')

  const titles = ['first title', 
                  'second title',
                  'third title',
                  'yet another title',
                  'and one final last title',
                  'no, there is just one more']

  const handleClick = () => { 
    // const rand = Math.floor(Math.random()*6);
    // setTitle(titles[rand]);

    if( title ==='first title') {
      setTitle('second title')
    } else {
      setTitle('first title');
    }
    console.log(title) // attention: This logs the OLD state for title. NOT the new one.
  }
  
  console.log('render')
  return (
    <>
      <h2>{title}</h2>
      <button type="button" onClick={handleClick} className="btn">ClickMe</button>
    </>
  );
};

export default ErrorExample;
