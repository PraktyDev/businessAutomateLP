"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useEffect } from "react"
import axios from "axios"
import { toast } from "sonner"
import { Oval  } from 'react-loader-spinner'


const formSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
  })
  

const DataForm = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: '',
        },
      })
      
      const { reset } = form
      const { isDirty, isValid, isSubmitting, isSubmitSuccessful } = form.formState
     
      const onSubmit = async (values) => {
        const scriptURL = `https://script.google.com/macros/s/AKfycbz7OD2u7cSXkhbxIyYecw9wVRCy4cOapNbYh9bXsYxbkPrVTCB6RZf8J9N4mmR2lJV6Mg/exec`

        try {
          const formData = new URLSearchParams(values).toString()
          await axios.post(scriptURL, formData, { headers: { "Content-Type": "application/x-www-form-urlencoded" }, mode: 'no-cors' })
          toast('Requested Successfully')
        } catch (error) {
          toast("Request failed, try again later")
        }
      }
    
      useEffect(()=>{
        if(isSubmitSuccessful){
          reset()
        }
      },[isSubmitSuccessful, reset])

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="z-50 flex flex-col items-center gap-3">
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input className='bg-white w-[350px] tablet:w-[400px] laptop:w-[300px]' placeholder="Your Email Address" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button className='bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 font-semibold hover:opacity-90' type="submit" disabled={!isDirty || !isValid} >
          {isSubmitting 
          ? <div className="flex gap-3 items-center justify-center"><Oval visible={true} height="18" width="18" color="white" ariaLabel="oval-loading" /> <p>Requesting...</p></div>
          : <div>Request</div>
          }
      </Button>
    </form>
  </Form>
  )
}

export default DataForm