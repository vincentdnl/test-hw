import env from "./env"
import {JobsResponse, Token} from "../../../../common/types"

const BASE_API = "https://api.jobijoba.com/v3/fr"

export const login = async (): Promise<Token> => {
    // TODO: handle errors
    const response = await fetch(`${BASE_API}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            client_id: env.JOBIJOBA_CLIENT_ID,
            client_secret: env.JOBIJOBA_CLIENT_SECRET,
        }),
    })
    return await response.json()
}

export const fetchJobs = async (token: string, job: string): Promise<JobsResponse> => {
    // TODO: handle errors
    const params = new URLSearchParams({
        what: job,
        where: "Bordeaux",
        limit: "2"
    })

    const url = `${BASE_API}/ads/search?${params}`

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })

    return await response.json()
}
