import React, { useState } from "react";
import picture1 from "./assests/picture1.jpg";
import picture2 from "./assests/picture2.jpg";
import picture3 from "./assests/picture3.jpg";
import picture4 from "./assests/picture4.jpg";
import picture5 from "./assests/picture5.jpg";
import { motion } from "framer-motion";
import home from "./assests/home1.jpg";

function App() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardsWidth = {
    expanded: {
      width: "600px",
    },
    collapsed: {
      width: "100px",
    },
  };

  const cardsImages = [picture1, picture2, picture3, picture4, picture5];

  const cardsDesc = [
    "A breathtaking landscape unfolds before your eyes, where majestic mountains tower above a serene lake, framed by towering trees and crowned by the gentle cascade of a small waterfall.",
    "Beneath weathered stones, a rugged, frozen expanse stretches out, preserving the traces of time's passage.",
    "An enchanting forest vista, featuring a picturesque wooden hanging bridge that gracefully spans the lush, green canopy.",
    "Sunlight cascades through a natural cleft in the ancient rock formation, casting a warm, enchanting glow.",
    "A solitary tall tree emerges from the dawn mist, standing sentinel over the mysterious depths of the dark forest.",
  ];
  return (
    <>
      <section
        style={{ backgroundImage: `url(${home})` }}
        className="py-16 pb-[300px] bg-cover"
      >
        {/* title */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <h1 className="text-5xl font-bold text-gray-800 text-center ">
            Nature at its Best!
          </h1> */}
        </div>
        {/* images */}
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-5">
          {[0, 1, 2, 3, 4].map((index) => (
            <motion.div
              className={`card h-[500px] bg-cover bg-center rounded-[40px]  ${
                index === expandedIndex ? "expanded" : ""
              }`}
              key={index}
              variants={cardsWidth}
              initial="collapsed"
              animate={index === expandedIndex ? "expanded" : "collapsed"}
              transition={{ duration: 0.5 }}
              onClick={() => {
                handleClick(index);
              }}
              style={{ backgroundImage: `url(${cardsImages[index]})` }}
            >
              <div className="card-content h-full flex flex-col justify-end">
                <div className="card-footer rounded-b-[20px] bg-red-300 bg-opacity-75 min-h-[100px] flex flex-col justify-center items-center">
                  <h2 className="font-bold text-black text-center">
                    {" "}
                    View {index + 1}
                  </h2>
                  {index === expandedIndex && (
                    <p className="mt-2 text-black font-semibold text-center ">
                      {cardsDesc[index]}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
