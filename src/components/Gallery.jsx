"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
export default function Gallery({ collection }) {
  const [counter, setCounter] = useState(0)

  const slideLeft = () => {
    counter > 0 ? setCounter(counter - 1) : setCounter(collection.length - 1)
  }

  const slideRight = () => {
    counter < collection.length - 1 ? setCounter(counter + 1) : setCounter(0)
  }
  return (
    <div className="mt-[-100px] h-screen flex items-center justify-center lg:hidden">
      <div>
        <button onClick={slideLeft}>
          <svg
            className="mt-[-3rem] w-4 h-4 mx-2 text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
            />
          </svg>
        </button>
      </div>
      {collection?.map((obra, index) => (
        <AnimatePresence key={obra.id}>
          {counter == index && (
            <div className="flex flex-col items-center justify-end gap-1">
              <motion.img
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1 }}
                src={obra.imageUrl}
                alt={obra.title}
                // className="grayscale w-[100px] h-[150px] object-cover inline-block cursor-pointer hover:grayscale-0"
                className="inline-block object-cover overflow-hidden"
              />
              <h1 className="text-lg text-neutral-600">{obra.title}</h1>
              <p className="text-neutral-400">{obra.description}</p>
            </div>
          )}
        </AnimatePresence>
      ))}
      <div>
        <button onClick={slideRight}>
          <svg
            className="mt-[-3rem] w-4 h-4 mx-2 text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
