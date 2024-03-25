import React from 'react';
import "./App.css";
import LeftNavbar from './components/navbar/left_navbar';
import RightNavbar from './components/navbar/right_navbar';
import CursorBall from './components/cursor/cursor';
import ColoredSmokeBackground from './ColoredSmokeBackground';

function App() {
  return (
    <div className="App">
      <CursorBall/>
      <LeftNavbar />
      <ColoredSmokeBackground/>
     
        <div className="hero-section">
          <div className='intro'>
            <h6>IRAM ABID</h6>
            <h1>Person I =<span style={{ color: 'red' }}> new</span> Person( );<br/> <div id="in-while"><span style={{ color: 'red' }}>while</span> ( I.Alive ) &#123; <br/> I.WakeUp( ); <br/> I.Eat( ); <br/>I.Code( );<br/>I.Sleep( );  &#125;</div></h1></div>
        </div>

        <div className="about-me">
        <div id="about-heading"><h3>ABOUT ME</h3></div>
        <div id="about-content"><p className='about-para'>I'm a diligent and detail-focused CSE student with a passion for crafting seamless web applications. As a dedicated Full-Stack Developer, I strive for perfection and delight in solving intricate challenges.</p>
        </div>
        </div>
        <div className="what-i-do">
          <div className="what-i-do-heading"><h3>WHAT I DO?</h3></div>
          <div className='line'><p className='what-i-do-para'>3D </p></div>
          <div className='line'><p className='what-i-do-para'>VISUAL</p></div>
          <div className='line'><p className='what-i-do-para'>MOTION</p></div>
          <div className='line'><p className='what-i-do-para'>PRODUCT</p></div>
          <div className='line'><p className='what-i-do-para'>TUTORIAL</p></div>

        </div>
    
     
      <RightNavbar />
      
    </div>
  );
}

export default App;
