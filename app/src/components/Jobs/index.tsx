import {useEffect, useState} from "react"
import {JobAd, JobsResponse} from "../../../../common/types.ts"
import {Loading} from "../Loading"
import {JobCard} from "../JobCard"

const BASE_API_URL = "http://localhost:3001"
export const Jobs = () => {
    const [jobs, setJobs] = useState<JobAd[]>([])

    useEffect(() => {
        (async () => {
            const response = await fetch(`${BASE_API_URL}/jobs`)
            const responseJson = await response.json() as JobsResponse
            setJobs(responseJson.data.ads)
        })().then()
    })

    return (
        jobs.length === 0
            ? <Loading/>
            : <div className={"flex flex-col gap-4"}>
                {
                    jobs.map((job) => (
                        <JobCard {...job}/>
                    ))
                }
            </div>
    )
}
