import "./App.css"
import {useEffect, useState} from "react"
import {JobAd, JobsResponse} from "../../common/types.ts"
import {JobCard} from "./components/JobCard"

const BASE_API_URL = "http://localhost:3001"

function App() {
    const [jobs, setJobs] = useState<JobAd[]>([])

    useEffect(() => {
        (async () => {
            const response = await fetch(`${BASE_API_URL}/jobs`)
            const responseJson = await response.json() as JobsResponse
            setJobs(responseJson.data.ads)
        })().then()
    })

    return (
        <main className={"container mx-auto px-4 py-8 text-slate-900"}>
            <h1 className={"text-4xl mb-12"}>Find the best jobs near <span className={"font-bold text-indigo-600"}>Bordeaux</span>!</h1>
            <div className={"flex flex-col gap-4"}>
                {
                    jobs.map((job) => (
                        <JobCard {...job}/>
                    ))
                }
            </div>
        </main>
    )
}

export default App
