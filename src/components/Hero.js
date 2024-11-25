"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 1.5, ease: "easeInOut" } }
  }

  const textPathVariants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1, transition: { duration: 3, ease: "easeInOut" } }
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Left line */}
      <motion.div
        className="absolute left-0 top-1/2 w-[calc(50%-28vmin)] h-0.5 bg-white origin-left"
        variants={lineVariants}
        initial="hidden"
        animate="visible"
      >
        <span className="absolute left-4 -top-6 text-white text-sm">Build</span>
      </motion.div>

      {/* Right line */}
      <motion.div
        className="absolute right-0 top-1/2 w-[calc(50%-28vmin)] h-0.5 bg-white origin-right"
        variants={lineVariants}
        initial="hidden"
        animate="visible"
      >
        <span className="absolute right-4 -top-6 text-white text-sm">Automate</span>
      </motion.div>

      {/* Bottom line */}
      <motion.div
        className="absolute bottom-[150px] tablet:bottom-[120px] laptop:bottom-0 left-1/2 h-[calc(30%-28vmin)] tablet:h-[calc(45%-40vmin)]  laptop:h-[calc(50%-28vmin)] w-0.5 bg-white origin-bottom"
        variants={lineVariants}
        initial="hidden"
        animate="visible"
      >
        <span className="absolute -left-3 bottom-5 tablet:bottom-3 laptop:bottom-5 text-white text-sm whitespace-nowrap transform rotate-90">Rebuild</span>
      </motion.div>

      {/* Overlapping circles and moving text */}
      <div className="absolute inset-0 w-[55vmin] h-[55vmin] m-auto">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
          {/* Three overlapping circles */}
          <motion.circle
            cx="50"
            cy="40"
            r="30"
            fill="none"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="0.2"
            opacity="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.circle
            cx="40"
            cy="55"
            r="30"
            fill="none"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="0.2"
            opacity="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          />
          <motion.circle
            cx="60"
            cy="55"
            r="30"
            fill="none"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="0.2"
            opacity="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
          />

          {/* Curved text for top circle */}
          <path id="topCirclePath" d="M 20 40 A 30 30 0 0 1 80 40" fill="none" />
          <motion.text
            fontSize="5"
            fill="rgba(220, 38, 38, 1)"
            opacity="0.7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <textPath href="#topCirclePath" startOffset="50%" textAnchor="middle">
              Website
            </textPath>
          </motion.text>

          {/* Curved text for bottom-left circle (southwest, outer quadrant) */}
          <path id="bottomLeftCirclePath" d="M 10 55 A 30 30 0 0 0 40 85" fill="none" />
          <motion.text
            fontSize="5"
            fill="rgba(247, 220, 111, 1)"
            opacity="0.7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 1 }}
          >
            <textPath href="#bottomLeftCirclePath" startOffset="50%" textAnchor="middle">
              Workflow
            </textPath>
          </motion.text>

          {/* Curved text for bottom-right circle (southeast, outer quadrant) */}
          <path id="bottomRightCirclePath" d="M 60 85 A 30 30 0 0 0 90 55" fill="none" />
          <motion.text
            fontSize="5"
            fill="rgba(255, 105, 180, 1)"
            opacity="0.7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9, duration: 1 }}
          >
            <textPath href="#bottomRightCirclePath" startOffset="50%" textAnchor="middle">
              Software
            </textPath>
          </motion.text>


          {/* Bottom semicircle for moving text */}
          <motion.path
            d="M 0.5 50 A 35 35 0 0 0 100 50"
            fill="none"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="0.5"
            strokeDasharray="4 2"
            initial="hidden"
            animate="visible"
            variants={textPathVariants}
          />

          {/* Center text */}
          <motion.text
            x="50"
            y="50"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize="6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            Business Freedom
          </motion.text>
        </svg>
      </div>
    </div>
  )
}