import { useState } from "react"
import React from "react"
import toast from "react-hot-toast"
import excelFileUpload from "../utils/excelFileUpload.js";
import {useForm} from "react-hook-form"
function FileUpload(){
    const [file,setFile]=useState();
    const {register,handleSubmit,formState:{errors}}=useForm();
    const Submit=async(data)=>{
        console.log("Hello")
        
        try{
            const res=await excelFileUpload(file,data.Subject,data.Body);
            if(res){
            toast.success("Done");
            }
            setFile(null);
        }
        catch(error){
            return toast.error(error.message);
        }
    }
    return(
        <>
        <div className=" bg-base-200 w-screen h-screen flex flex-col items-center pt-10">
            <h1 className="text-3xl font-bold md:text-5xl md:font-bold">Automate Marketing</h1>
            <h2 className="md:mt-3 md:text-xl"> Fast,Free and reliable way to send Emails</h2>

        <form onSubmit={handleSubmit(Submit)} className="w-80 h-72 flex justify-center ">
            <div className="p-2 w-[100%] mt-[20px] space-y-3">

            <div className="h-20 bg-green-600 hover:bg-green-500 cursor-pointer rounded-xl items-center">
                    <label className="w-[100%] h-[100%] flex justify-center items-center hover:cursor-pointer">
                    <div className="text-xl text-white font-bold">Select Excel File</div>
                    <input id="inputFile" type="file" onChange={(e)=>{
                        setFile(e.target.files[0]);
                    }} className="hidden"/>
                    </label>
            </div>
            {file && (
                <div className="flex justify-end text-violet-500 font-semibold">
                    <span className="">{file.name} is selected</span>
                    <button
                    onClick={() => setFile(null)}
                    className="ml-1"
                    title="Remove file"
                    >
                    ❌
                    </button>

                </div>
            )}
            <input 
            type="text" id="Subject" {...register("Subject",{required:"Subject is required"})}placeholder="Subject of the Email" className={`ml-12 bg-transparent outline-none border ${
                errors.Subject?"border-red-400 ring-red-300":""
            }focus:ring-2 focus:ring-gray-400 rounded `}/>
            {errors.Subject && <div className="text-red-500 ml-12">{errors.Subject.message}</div>}

            <textarea type="text" id="Body" {...register("Body",{required:"Body is required"})}placeholder="Email Body" className={`ml-12 bg-transparent outline-none border ${
                errors.Body?" border-red-400 ring-red-300":""
            }focus:ring-2 focus:ring-gray-400 rounded `}/>
            {errors.Body && <div className="text-red-500 ml-12 ">{errors.Body.message}</div>}
           

            <div className="flex justify-center">
                <button className="bg-red-300 p-2 rounded-xl hover:cursor-pointer hover:bg-red-400">Send Emails</button>
            </div>
                    </div>
        </form>
                    </div>
        </>
    )
}

export default FileUpload;
