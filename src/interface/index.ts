interface User {
    isLogin: boolean,
    name: string,
    cell: number,
    department: string,
}

interface Subject {
    member: User[],
    title: string,
    type: string,
    startDate: Date,
    endDate: Date,
    benefit: number,
}

interface RuleProp {
    type: 'required' | 'email',
    message: string,
}

export { User, Subject }
export type RulesProp = RuleProp[]