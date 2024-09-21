import {JobAd} from "../../../../common/types.ts"

export const JobCard = (job: JobAd) => {
    return (
        <div className={"flex flex-col border-2 border-slate-800 rounded-xl"}>
            <div
                className={"flex justify-between border-b-2 border-slate-800 px-6 py-2 bg-gradient-to-r from-indigo-300 from-10% via-sky-500 via-30% to-emerald-300 to-90% rounded-t-xl"}>
                <h2 className={"font-bold"}>{job.jobtitle}</h2>
                <p className={"text-slate-500"}>{job.city} ({job.region})</p>
            </div>
            <div className={"px-6 py-2 border-b-2 border-slate-800"}>
                <ul className={"list-disc"}>
                    <li><span className={"underline font-bold"}>company</span>: {job.company}</li>
                    <li><span className={"underline"}>sector</span>: {job.sector}</li>
                    <li><span className={"underline"}>description</span>: <span
                        dangerouslySetInnerHTML={{__html: `${job.description}...`}}/></li>
                </ul>
            </div>
            <div className={"px-6 py-2 flex justify-end"}>
                <a className={"flex text-indigo-600 font-bold underline"} href={job.link} target={"_blank"}
                    rel={"noreferrer nofollow noopener"}>See the job...</a>
            </div>
        </div>
    )
}
