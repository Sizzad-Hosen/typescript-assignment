
function multiplyValue(value:number, multiplier?:number  ): number {
if(multiplier ===undefined){
    return value*2;
}
return value*multiplier;
}




type InputType = string | number | boolean;

function processInput( input: InputType ): string | number {
    if (typeof input === "string") {
      
        return input.trim().toLowerCase();
    }
    else if (typeof input === "number") {
      
        return input * 10;
   
              }


    else {
    
        return input ? "Active" : "Inactive";
    }
}







function formatCoordinate(coordinate: readonly [number, number, string]
): string {

    const [latitude, longitude, locationName] = coordinate;

    return `"Location: ${locationName} (${latitude}, ${longitude})"`;
}



formatCoordinate([23.81, 90.41, "Dhaka"]);
  formatCoordinate([22.35, 91.78, "Chittagong"]);



function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();


}




interface Course{
    title:string;
    students:number;
    isPublished:boolean;
}

   function getPopularCourses( courses:Course[], minStudents:number):Course[] {

return courses.filter(course=> course.students >= minStudents &&course.isPublished);

}
const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];






      function pluckValues<T,   K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map(item => item[key]);
}

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];







class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;


    }

    getDetails(): string {
        return `"Employee: ${this.name}, Base Salary: ${this.baseSalary}"`;
    
    
    }
         }

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary );
        this.department = department;
    }

    getRoleInfo(): string {
        return `"Manager of ${this.department}: ${this.name}"`;
    }
}

       const manager = new Manager("Alice", 50000, "Engineering");





 async function validateAgeAsync(age: number  ): Promise<string> {

    return new Promise<string>((resolve, reject) => {

        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
        }


        else {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }


    });

}

