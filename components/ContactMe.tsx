import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;  
};

type Props = {};

function ContactMe({}: Props) {
   const  { register, handleSubmit } = useForm<Inputs>();

   const onSubmit: SubmitHandler<Inputs> = (formData) => (
     window.location.href = `mailto:doladepo128@gmail.com?subject={formData.subject}body={formData.message}`  
       //console.log(formData);
   ) 
   

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-14 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact
        </h3>

        <div className='flex flex-col space-y-50'>
        <h4 className='text-4xl font-semibold text-center py-10'>
          I have got just what you need.{" "}
          <span className='decoration-[#F7AB0A]/50 underline'>Let's talk.</span>  
        </h4>

        <div>
            <div className='flex items-center  space-x-5 justify-center'>
               <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
               <p className='text-2xl'>+123657908</p> 
            </div>
            
            <div className='flex items-center space-x-5 justify-center'>
               <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
               <p className='text-2xl'>doladepo128@gmail.com</p> 
            </div>

            <div className='flex items-center space-x-5 justify-center'>
               <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
               <p className='text-2xl'>123 Developer lane</p> 
            </div>

        </div>

         <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
            <div className='flex space-x-2'>
              <input {...register("name")} 
                    placeholder="Name" 
                    className='contactInput' 
                    type="text" 
                    />

              <input {...register("email")} 
                      placeholder='Email' 
                      className='contactInput' 
                      type="text" 
                      />
            </div>
            
            <input {...register("subject")} 
                   placeholder='subject' 
                    className='contactInput' 
                    type='text' 
                    />

            <textarea {...register("message")} 
                        placeholder='Message' 
                        className='contactInput' 
                        />
            <button type='submit' className="bg-[#F7A80A] py-5 px-10 rounded-md text-black font-bold text-lg">
              Submit  
            </button>
        </form>
        </div>
        </div>
  );
}

export default ContactMe;