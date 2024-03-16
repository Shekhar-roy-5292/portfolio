import React, { useEffect } from 'react'
import Typed from 'typed.js';
const TypedJsControl = () => {
    useEffect(() => {
        const options = {
          strings: ["Learner", "Coder", "Web Designer", "Full-stack Developer"],
          typeSpeed: 150,
          backSpeed: 150,
          loop: true,
        };
    
        const typed = new Typed('.autotype', options);
    
        return () => {
          // Clean up the Typed instance on component unmount
          typed.destroy();
        };
      }, []); // Ensure the effect runs only once on component mount
    
      return (
        <div className="autotype"></div>
      );
}

export default TypedJsControl