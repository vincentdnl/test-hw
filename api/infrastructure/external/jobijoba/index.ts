import env from "./env"

type Token = { token: string }

const BASE_API = 'https://api.jobijoba.com/v3/fr'

export const login = async (): Promise<Token> => {
    // TODO: handle errors
    const response = await fetch(`${BASE_API}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            client_id: env.JOBIJOBA_CLIENT_ID,
            client_secret: env.JOBIJOBA_CLIENT_SECRET,
        }),
    })
    return await response.json()
}

type JobAd = {
    id: string;
    link: string;
    title: string;
    description: string;
    publicationDate: string;
    coordinates: string;
    city: string;
    postalCode: string;
    department: string;
    region: string;
    sector: string;
    jobtitle: string;
    company: string;
    contractType: string[];
    salary: string;
}

type JobData = {
    total: number;
    ads: JobAd[];
}

type JobsResponse = {
    code: number;
    message: string;
    data: JobData;
}

export const fetchJobs = async (token: string, job: string): Promise<JobsResponse> => {
    // TODO: handle errors
    const params = new URLSearchParams({
        what: job,
        where: 'Bordeaux',
        limit: '2'
    })

    const url = `${BASE_API}/ads/search?${params}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    return await response.json()
}
