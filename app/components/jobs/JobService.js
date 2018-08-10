import Job from "../../models/Job.js"

let jobs = []

export default class JobService {
    constructor() {

    }

    getjobs() {
        let jobsCopy = []

        jobs.forEach(job => {
            jobsCopy.push(new job(
                job.category,
                job.yearsExperience,
                job.location,
                job.pay,
                job.benefits,
                job.hours
            ))
        })
        return jobsCopy
    }

    addjob(formData) {
        let newjob = new job(
            formData.category.value,
            formData.yearsExperience.value,
            formData.location.value,
            formData.pay.value,
            formData.benefits.value,
            formData.hours.value
        )
        jobs.push(newjob)
        console.log(jobs)

    }
}