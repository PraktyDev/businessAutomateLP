"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import DataForm from "@/components/DataForm"
import Hero from "@/components/Hero"
import Pros from "@/components/Pros"

const page = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <>
    <section className="flex flex-col relative w-full h-screen overflow-hidden">
      <div 
        ref={ref}
        className="mt-28 tablet:mt-20 laptop:mt-14 text-white flex flex-col gap-2 justify-center items-center"
      >
        <motion.span 
          className="text-center text-xl tablet:text-2xl laptop:text-3xl font-semibold bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          BE FREED FROM THE SHACKLES OF BUSINESS
        </motion.span>
        <motion.span 
          className="text-base tablet:text-lg laptop:text-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          You can setup things that will run without you, freeing up your time.<br />
          Get Started with Business Automation, Keeping It Simple Stupid (K.I.S.S)
        </motion.span>
      </div>

      <Hero />
      <div className="z-10 hidden laptop:flex flex-col justify-between items-center laptop:absolute laptop:bottom-10 laptop:right-16">
        <div className="w-[300px] text-white py-4 text-justify">
          Get a personalized K.I.S.S formula for your business automation success. Enter your email below
        </div>
        <DataForm />
      </div>

      <div className="hidden laptop:flex flex-col justify-between items-left laptop:absolute laptop:bottom-10 laptop:left-10">
        <h1 className="text-white font-semibold text-base">Frequently Asked Questions (FAQs)</h1>
        <Pros />
      </div>
    </section>
    <section className="-mt-40 tablet:-mt-28 laptop:-mt-40 pb-10 px-5">
      <div className="laptop:hidden flex flex-col justify-between items-center">
        <div className="w-full text-white tablet:px-0 py-4 text-center">
          Get a personalized K.I.S.S formula for your business automation success.<br />Enter your email below
        </div>

        <DataForm />
      </div>

      <div className="laptop:hidden flex flex-col justify-between items-center mt-10">
        <h1 className="text-white font-semibold text-base">Frequently Asked Questions (FAQs)</h1>
        <Pros />
      </div>
    </section>
    </>
  )
}

export default page