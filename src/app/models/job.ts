// here define the model of Class Job
export class Job{
    constructor(
        public _id: string,
        public title: string,
        public description: string,
        public keywords: string,
        public location: string 
    ){}

}

