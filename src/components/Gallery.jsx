"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
export default function Gallery({ collection }) {
  const [counter, setCounter] = useState(0)
  const ref = useRef(0)
  const [loaded, setLoaded] = useState(false)

  const slideLeft = () => {
    counter > 0 ? setCounter(counter - 1) : setCounter(collection.length - 1)
    setLoaded(false)
  }

  const slideRight = () => {
    counter < collection.length - 1 ? setCounter(counter + 1) : setCounter(0)
    setLoaded(false)
  }

  function onPanStart(_, info) {
    ref.current = info.point.x
  }
  function onPanEnd(_, info) {
    if (info.point.x < ref.current) {
      slideRight()
    } else if (info.point.x > ref.current) {
      slideLeft()
    }
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center flex-col lg:hidden overflow-hidden">
      <div className="flex items-center justify-center gap-2">
        <div>
          <button onClick={slideLeft}>
            <svg
              className="mt-[-2.5rem] w-4 h-4 mx-2 text-gray-400"
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
              <div className="flex flex-col items-center justify-end gap-1 text-sm">
                <motion.img
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 2 }}
                  src={obra.imageUrl}
                  alt={obra.title}
                  className="inline-block object-cover overflow-hidden max-h-[68vh]"
                  onPanStart={onPanStart}
                  onPanEnd={onPanEnd}
                  onLoad={() => setLoaded(true)}
                />
                {loaded && (
                  <motion.div
                    variants={{
                      hidden: { x: -50, opacity: 0 },
                      visible: { x: 0, opacity: 1 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1 }}
                    className="text-center"
                  >
                    <h1 className="text-neutral-600">{obra.title}</h1>
                    <p className="text-neutral-400">{obra.description}</p>
                  </motion.div>
                )}
              </div>
            )}
          </AnimatePresence>
        ))}
        <div>
          <button onClick={slideRight}>
            <svg
              className="mt-[-2.5rem] w-4 h-4 mx-2 text-gray-400"
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

      <ul className="flex items-center justify-center gap-3 mt-6">
        {collection?.map((_, index) => (
          <button
            key={index}
            onClick={() => setCounter(index)}
          >
            <li
              className={`h-1 w-1 rounded-full  ${
                counter == index ? "bg-gray-600" : "bg-gray-300"
              }`}
            />
          </button>
        ))}
      </ul>
    </div>
  )
}
