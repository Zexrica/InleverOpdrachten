// Opdracht 1
const lapRounds = {
    time: [55.99, 63.00, 63.01, 54.01, 62.79, 52.88, 53.10, 54.12]
};

// Opdracht 2
const teachers = [
    {
        name: "Loek",
        profession: "Teacher",
        brand: "Linux"
    },
    {
        name: "Daan",
        profession: "Teacher",
        brand: "Arduino"
    },
    {
        name: "Rimmert",
        profession: "Teacher",
        brand: "Apple"
    },
]
teachers[0].hoursPerWeek = 40
teachers[0].salary = 2500
teachers[1].hoursPerWeek = 40
teachers[1].salary = 2800
teachers[2].hoursPerWeek = 40
teachers[2].salary = 3000

teachers.forEach(element => {
    element.salaryPerHour = Math.round(element.salary/(element.hoursPerWeek*4)*100)/100
    console.log(`I have a ${element.profession} named ${element.name} and he likes to work on a ${element.brand} computer, he earns €${element.salaryPerHour} per hour`)    
});


console.table(teachers)