import DataForm from "@/components/DataForm"
import Hero from "@/components/Hero"

const page = () => {
  return (
    <>
    <section className="flex flex-col relative w-full h-screen overflow-hidden">
      <div className="mt-14 -mb-32 text-white flex flex-col gap-2 justify-center items-center">
        <span className="text-xl tablet:text-2xl laptop:text-3xl font-semibold bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text">BE FREED FROM THE SHACKLES OF BUSINESS</span>
        <span className="text-lg tablet:text-xl text-center">You can setup things that will run without you, freeing up your time.<br />Get Started with Business Automation, Keeping It Simple Stupid (K.I.S.S)</span>
      </div>

      <Hero />
      <div className="hidden laptop:flex flex-col justify-between items-center laptop:absolute laptop:bottom-10 laptop:right-16">
        <div className="w-[300px] text-white py-4 text-justify">
          Get a personalized K.I.S.S formula for your business automation success. Enter your email below
        </div>
        <DataForm />
      </div>
    </section>
    <section className="pb-10 laptop:pb-0">
      <div className="laptop:hidden flex flex-col justify-between items-center">
        <div className="w-full tablet:w-[450px] text-white px-20 tablet:px-0 py-4 text-center">
          Get a personalized K.I.S.S formula for your business automation success. Enter your email below
        </div>
        <DataForm />
      </div>
    </section>
    </>
  )
}

export default page