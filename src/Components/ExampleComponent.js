import React, { useRef, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
  const animatedTextRef = useRef();

  useEffect(() => {
    // Optionally, you can use the `animatedTextRef` to access the animated text element
    // and perform any additional actions after the animation starts.

    // Example: Change text color after the animation starts
    animatedTextRef.current.style.color = 'blue';
  }, []);

  return (
    <h3>
      <span id="static-text">I'm a </span>
      <span ref={animatedTextRef} id="animated-text"></span>
      <TypeAnimation
        sequence={[
          'Developer',
          650, // Adjust the speed here, smaller values make the animation faster
          'Gamer',
          650,
          'Freelancer',
          650
        ]}
        wrapper="span"
        speed={1}  // Setting speed to 1 for the fastest animation
        repeat={Infinity}
      />
    </h3>
  );
};

export default ExampleComponent;
