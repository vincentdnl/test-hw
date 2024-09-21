export type Token = { token: string }
export type JobAd = {
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
export type JobsResponse = {
    code: number;
    message: string;
    data: JobData;
}