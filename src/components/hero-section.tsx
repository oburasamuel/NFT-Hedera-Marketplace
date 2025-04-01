// import Link from 'next/link';
// import { Button } from './ui/button';

// export function HeroSection() {
//   return (
//     <section className="hero-gradient py-28 px-4 flex flex-col items-center justify-center text-center">
//       <h1 className="lovechild-font text-4xl md:text-5xl lg:text-6xl mb-8 max-w-4xl">
//         Collect, Create & Sell<br />
//         a Piece of History
//       </h1>
//       <Button size="lg" asChild>
//         <Link href="/explore">Explore artwork</Link>
//       </Button>
//     </section>
//   );
// }


'use client'
import Link from 'next/link';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const words = ["Hedera-powered NFT marketplace", "Collect, Create & Sell", "A Piece of History"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
      {/* Diagonal Background Effect with Custom Image */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center clip-diagonal"
        style={{ backgroundImage: "url('https://ext.same-assets.com/1148739856/2729828328.jpeg')", filter: "brightness(0.6)" }}
      ></div>
      
      {/* Navbar */}
      <div className="absolute top-6 left-10 text-lg font-semibold tracking-wider text-white">NFT</div>
      <div className="absolute top-6 right-10 cursor-pointer">
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </div>
      
      {/* Animated Hero Text */}
      <motion.h1 
        key={index} 
        className="text-5xl md:text-6xl lg:text-7xl font-bold relative z-10 max-w-4xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        {words[index]}
      </motion.h1>
      
      {/* Button */}
      <Button size="lg" className="mt-8 bg-white text-black py-3 px-6 rounded-full shadow-lg hover:bg-gray-300 transition relative z-10" asChild>
        <Link href="/search">Explore artwork</Link>
      </Button>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 animate-bounce text-white text-sm tracking-wide">SCROLL DOWN</div>
    </section>
  );
}

