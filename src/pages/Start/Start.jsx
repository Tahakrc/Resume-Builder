import { Link } from "react-router-dom/dist/umd/react-router-dom.development"

const Start = () => {
    return (
        <div className="h-screen w-screen">
            <div className="container  w-full h-full ">
                <div className="flex  items-center h-full w-full ">
                    <div className="flex flex-col justify-start items-center px-10">
                        <h1 className="text-5xl font-bold text-slate-100 px-10">Build Your Resume</h1>
                        <h2 className="text-4xl font-semibold text-slate-100 capitalize m-20"> Easily create your own CV in minutes</h2>
                        <Link to={"/Personal"} className="text-2xl text-slate-100 border-2 px-4 py-2 rounded-xl bg-slate-400 font-semibold" >

                            Click to Build
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Start