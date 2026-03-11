import { useNavigate, useSearchParams } from "react-router-dom"
import { ChevronLeftIcon } from "lucide-react";
import Title from "../components/Title";

function TaskPage(){
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const title = searchParams.get("title")
    const description = searchParams.get("description")

    return(
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
            <div className='w-[500px] space-y-4'>
                <div className="flex gap-3 justify-center relative">
                    <button onClick={() => navigate(-1)} className="absolute left-0 top-0 bottom-0 text-slate-100"><ChevronLeftIcon /></button>
                    <Title>Detalhes da task</Title>

                </div>
                <div className="flex flex-col gap-4 bg-slate-400 p-4 rounded-md">
                    <h1 className="text-3xl text-slate-900 font-bold text-center">{title}</h1>
                    <h2 className="text-2xl text-slate-800 text-center bg-slate-200 rounded-md p-5">{description}</h2>
                </div>
            </div>
            
        </div>
    )
}

export default TaskPage