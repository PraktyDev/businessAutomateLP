import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

const Pros = () => {
  return (
    <Accordion type="single" collapsible className="w-full laptop:px-0 laptop:w-[350px] text-white">
      <AccordionItem value="item-1">
        <AccordionTrigger>Would this really free up my time?</AccordionTrigger>
        <AccordionContent>
          Yes, Absolutely. You can setup things that will run without you - freeing up your time.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Would this help save money?</AccordionTrigger>
        <AccordionContent>
          Up to 50% - 80% of the things your staff do can be automated. You can substitute that with automation and save a ton on staff expenses.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How do i get started?</AccordionTrigger>
        <AccordionContent>
          You can get started by requesting for a personalized K.I.S.S formula for your business by entering your email, afterwhich you will receive a message from us to help us understand your business and your need for automation better.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Do I need to rebuild my website?</AccordionTrigger>
        <AccordionContent>
          If your old website does it, then you don't need to rebuild.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default Pros