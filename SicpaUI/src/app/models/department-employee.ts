export interface DepartmentEmployee{
    id:number;
    created_by: string;
    created_date: string;
    modified_by: string;
    modified_date: string;
    status: boolean;
    id_department: number;
    id_employee: number;
    department: Department;
    employee: Employee;
}
export interface Department {
    id:            number;
    created_by:    string;
    created_date:  Date;
    modified_by:   string;
    modified_date: Date;
    status:        boolean;
    description:   string;
    name:          string;
    phone:         string;
    id_enterprise: number;
}

export interface Employee {
    id:            number;
    created_by:    string;
    created_date:  Date;
    modified_by:   string;
    modified_date: Date;
    status:        boolean;
    age:           number;
    email:         string;
    name:          string;
    position:      string;
    surname:       string;
}