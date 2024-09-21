import {useEffect, useState} from "react"
import {JobAd, JobsResponse} from "../../../../common/types.ts"
import {Loading} from "../Loading"
import {JobCard} from "../JobCard"

const BASE_API_URL = "http://localhost:3001"
export const Jobs = () => {
    const [jobs, setJobs] = useState<JobAd[]>([])
    const [page, setPage] = useState<number>(1)

    useEffect(() => {
        (async () => {
            const response = await fetch(`${BASE_API_URL}/jobs?page=${page.toString()}`)
            const responseJson = await response.json() as JobsResponse
            setJobs(responseJson.data.ads)
        })().then()
    }, [page])

    return (
        <>
            <div className={"mb-12"}>
                {
                    jobs.length === 0
                        ? <Loading/>
                        : <div className={"flex flex-col gap-4"}>
                            {
                                jobs.map((job) => (
                                    <JobCard {...job}/>
                                ))
                            }
                        </div>
                }
            </div>
            <div className={"flex justify-between"}>
                <button
                    disabled={page === 1}
                    className={"bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 disabled:bg-gray-500"}
                    onClick={() => {
                        setJobs([])
                        setPage(page - 1)
                    }}
                >
                    previous
                </button>
                <button>page: {page}</button>
                <button
                    className={"bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 disabled:bg-gray-500"}
                    onClick={() => {
                        setJobs([])
                        setPage(page + 1)
                    }}
                >
                    next
                </button>
            </div>
        </>
    )
}
