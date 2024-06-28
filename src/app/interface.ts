export interface Template {
    name: string
    email: string
    phone: number
    url1: string
    url2: string
    skills: []
    qualifications:{title:string, desc:string, grade:string}[]
    projects:{title: string, desc:string}[]
    achievements: { title: string, description: string }[]; 
  }