import "./App.css"
import {useEffect, useState} from "react"
import {JobAd, JobsResponse} from "../../common/types.ts"

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
        <>
            {
                jobs.map((job) => (
                    <div>job: {job.id}</div>
                ))
            }
        </>
    )
}

export default App
