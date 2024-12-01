export interface EmployeeData {
    id: number;
    name: string;
    clockIn: string;
    clockOut: string;
    overtime: string;
    location: string;
    note: string;
  }
  
  export const employees: EmployeeData[] = [
    {
      id: 1,
      name: "Bagus Fikri",
      clockIn: "10:02 AM",
      clockOut: "07:00 PM",
      overtime: "2h 12m",
      location: "Jl. Jendral Sudirman",
      note: "Discussed mutual value propositions."
    },
    {
      id: 2,
      name: "Ihdizen",
      clockIn: "09:30 AM",
      clockOut: "07:12 PM",
      overtime: "-",
      location: "Jl. Ahmad Yani",
      note: "Tyneisha is already lined up for the project."
    },
    // Add more employee data as needed
  ];
  