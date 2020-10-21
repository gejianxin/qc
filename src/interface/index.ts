interface User {
    isLogin: boolean,
    name: string,
    cell: number,
    department: string,
};

interface Subject {
    member: User[],
    title: string,
    type: string,
    startDate: Date,
    endDate: Date,
    benefit: number,
}

export { User, Subject };