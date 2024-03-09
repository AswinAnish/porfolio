import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import GraphemeSplitter from 'grapheme-splitter'; // npm i grapheme-splitter
 
const splitter = new GraphemeSplitter();


const AboutSection = () => {
  return (
    
    
    <section className="et-slide" id="tab-es6">
     <TypeAnimation
        splitter={(str) => splitter.splitGraphemes(str)}
        sequence={[
          'Hello👋',
          2000,
          'Ciao✨',
          2000,
          '你好🐉',
          2000,
          'Здравейте🪆',
          2000,
          'Hola💃🏽',
          2000,
          'Bonjour🗼',
          2000,
          'नमस्ते🙏',
          2000,
          'こんにちは🏮',
          2000
          


        ]}
        style={{ fontSize: '2em' }}
        repeat={Infinity}
      />
      <hr/>
      <hr/>
    <div className="glassmorphic-card">
      <div>

      </div>
      <div className='rectangle-container'>
        <blockquote className="blockquote mb-0">
          <p>I'm a passionate engineer who is on the hunt for an opportunity to work as well as have fun and to have a demanding work environment that will inspire to evolve further and strive to acquire more skills in order to advance in the field</p>
                
          
        </blockquote>
      </div>
    </div>
    </section>
    
    
  );
};

export default AboutSection;
