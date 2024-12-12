export interface Experience{
    jobExperience: Job[]
}

export interface Job{
    startDate:string,
    sendDate:string,
    companyName: string,
    jobTitle: string,
    teamName: string,
    jobFunctions: Record<string,string[]>
}


