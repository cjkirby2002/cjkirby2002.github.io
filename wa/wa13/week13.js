let HR = {
    "employees" : [{
        "first name" : "Sam",
        "department" : "Tech",
        "designation" : "Manager",
        "salary" : 40000,
        "raise eligible" : true
    },
    
    {
        "first name" : "Mary",
        "department" : "Finance",
        "designation" : "Trainee",
        "salary" : 18500,
        "raise eligible" : true
    },

    {
        "first name" : "Bill",
        "department" : "HR",
        "designation" : "Executive",
        "salary" : 21200,
        "raise eligible" : false
    }
    ]
}

let company = {
    "companyInfo" :[{
        "company name" : "Tech Stars",
        "website" : "www.techstars.site",
        "employees" : HR["employees"]
    }]
}
// Question 1
console.log(HR["employees"]);

// Question 2
console.log(company["companyInfo"]);

// Question 3
HR["employees"].push(
    {
    "first name" : "Anna",
    "department" : "Tech",
    "designation" : "Executive",
    "salary" : 25600,
    "raise eligible" : false
});
console.log(HR["employees"][3]); //both work 
//console.log(company["companyInfo"][0]["employees"][HR["employees"].length -1]);

// Question 4
let totalSalary = 0;
for (let i =0; i < HR ["employees"].length; i++) {
    totalSalary += HR["employees"][i]["salary"];
}
console.log(totalSalary);

function raiseElligible () {
    if (HR["employees"])

}

