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
        const scriptURL = `https://script.google.com/macros/s/AKfycbyxXGmM3Ok0wZx5NpAwgNHBKjI-GypHx8cTVJ9BByrMr4jpG1kfeNM2YZR2fOOEyx6mqQ/exec`

        try {
          await axios.post(scriptURL, values, { headers: { "Content-Type": "application/json" } })
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
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center gap-3">
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input className='bg-white w-[300px]' placeholder="Your Email Address" {...field} />
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