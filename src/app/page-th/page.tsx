'use client'
import {redirect} from "next/navigation";


const page = ()=>{




    return (
        <div>
            <h1>Client</h1>
            <button type="button"
                    onClick={()=>{redirect('/page-tow')}}
                    className="text-white bg-bluclassName hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">page Tow
            </button>
            <button type="button"
                    onClick={()=>{redirect('/')}}
                    className="text-white bg-bluclassName hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">page One
            </button>

            <h1>Page TH</h1>
        </div>
    )
}
export default page