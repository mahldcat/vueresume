export interface Experience{
    jobExperience: Job[]
}

export interface Job{
    startDate:string,
    endDate:string,
    companyName: string,
    jobTitle: string,
    teamName: string,
    summary: string,
    jobFunctions: Map<string,string[]>
}


