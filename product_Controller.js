const { database } = require("./config/db")

// const employeeDetails =[
//     {
//       "firstName": "John",
//       "lastName": "Doe",
//       "salary": 25000,
//       "department": "HR",
//       "lastCompany": "X",
//       "lastSalary": 10000,
//       "overallExp": 2,
//       "contactInfo": 1234567890,
//       "yearGrad": 2016,
//       "gradStream": "CSE"
//     },
//     {
//       "firstName": "Rohan",
//       "lastName": "Jame",
//       "salary": 30000,
//       "department": "Technical",
//       "lastCompany": "Y",
//       "lastSalary": 15000,
//       "overallExp": 1,
//       "contactInfo": 1234567860,
//       "yearGrad": 2015,
//       "gradStream": "CSE"
//     },
//     {
//       "firstName": "Jame",
//       "lastName": "Doe",
//       "salary": 35000,
//       "department": "Accounts",
//       "lastCompany": "Z",
//       "lastSalary": 20000,
//       "overallExp": 1,
//       "contactInfo": 123567890,
//       "yearGrad": 2019,
//       "gradStream": "ECE"
//     },
//     {
//       "firstName": "Sao",
//       "lastName": "Avika",
//       "salary": 30000,
//       "department": "Sales",
//       "lastCompany": "Y",
//       "lastSalary": 15000,
//       "overallExp": 2,
//       "contactInfo": 1234567860,
//       "yearGrad": 2015,
//       "gradStream": "CSE"
//     },
//     {
//       "firstName": "Jame",
//       "lastName": "roh",
//       "salary": 35000,
//       "department": "Accounts",
//       "lastCompany": "Z",
//       "lastSalary": 15000,
//       "overallExp": 2,
//       "contactInfo": 123567890,
//       "yearGrad": 2019,
//       "gradStream": "EEE"
//     },
//     {
//       "firstName": "Rohan",
//       "lastName": "Jame",
//       "salary": 30000,
//       "department": "Technical",
//       "lastCompany": "Y",
//       "lastSalary": 15000,
//       "overallExp": 1,
//       "contactInfo": 1234567860,
//       "yearGrad": 2015,
//       "gradStream": "CSE"
//     },
//     {
//       "firstName": "Jame",
//       "lastName": "Doe",
//       "salary": 35000,
//       "department": "Accounts",
//       "lastCompany": "Z",
//       "lastSalary": 15000,
//       "overallExp": 2,
//       "contactInfo": 123567890,
//       "yearGrad": 2019,
//       "gradStream": "EEE"
//     },
//     {
//       "firstName": "Rohan",
//       "lastName": "Jame",
//       "salary": 30000,
//       "department": "Technical",
//       "lastCompany": "Y",
//       "lastSalary": 15000,
//       "overallExp": 1,
//       "contactInfo": 1234567860,
//       "yearGrad": 2015,
//       "gradStream": "CSE"
//     },
//     {
//       "firstName": "Jame",
//       "lastName": "Doe",
//       "salary": 35000,
//       "department": "Accounts",
//       "lastCompany": "Z",
//       "lastSalary": 15000,
//       "overallExp": 2,
//       "contactInfo": 123567890,
//       "yearGrad": 2019,
//       "gradStream": "EEE"
//     },
//     {
//       "firstName": "Rohan",
//       "lastName": "Jame",
//       "salary": 30000,
//       "department": "Technical",
//       "lastCompany": "Y",
//       "lastSalary": 15000,
//       "overallExp": 1,
//       "contactInfo": 1234567860,
//       "yearGrad": 2015,
//       "gradStream": "CSE"
//     },
//     {
//       "firstName": "Jame",
//       "lastName": "Doe",
//       "salary": 35000,
//       "department": "Accounts",
//       "lastCompany": "Z",
//       "lastSalary": 15000,
//       "overallExp": 2,
//       "contactInfo": 123567890,
//       "yearGrad": 2019,
//       "gradStream": "EEE"
//     },
//     {
//       "firstName": "Sao",
//       "lastName": "Avika",
//       "salary": 30000,
//       "department": "Sales",
//       "lastCompany": "Y",
//       "lastSalary": 15000,
//       "overallExp": 2,
//       "contactInfo": 1234567860,
//       "yearGrad": 2015,
//       "gradStream": "CSE"
//     },
//     {
//       "firstName": "Jame",
//       "lastName": "Doe",
//       "salary": 35000,
//       "department": "Accounts",
//       "lastCompany": "Z",
//       "lastSalary": 15000,
//       "overallExp": 2,
//       "contactInfo": 123567890,
//       "yearGrad": 2019,
//       "gradStream": "EEE"
//     }
//   ]
  

const employee= database.collection("employee")

// const addProductInStore= async (req,res) =>{
//     const employeeDetails = req.body;
//     const data = await employee.insertMany(employeeDetails)
//     console.log(data)
//     res.send({ msg: "added data ", data: data})
// }

// const updatePriceOfSingleProduct = async (req,res) =>{
//     // const data = await employee.updateOne({})
//     res.send("updated data")
// }

const getAllEmployees = async (req, res) => {
  const employees = await employee.find({}).toArray();
  res.send({ msg: "All employees", data: employees });
}

const getHighSalaryEmployees = async (req, res) => {
  const highSalaryEmployees = await employee.find({ salary: { $gt: 30000 } }).toArray();
  res.send({ msg: "Employees with a salary > 30000", data: highSalaryEmployees });
}

const getExperiencedEmployees = async (req, res) => {
  const experiencedEmployees = await employee.find({ overallExp: { $gt: 2 } }).toArray();
  res.send({ msg: "Experienced employees (exp > 2 years)", data: experiencedEmployees });
}


const getRecentGraduatesWithExperience = async (req, res) => {
  const recentGraduatesWithExperience = await employee.find({
    yearGrad: { $gt: 2015 },
    overallExp: { $gt: 1 }
  }).toArray();
  res.send({ msg: "Recent graduates with exp > 1 year", data: recentGraduatesWithExperience });
}

const updateHighSalaryEmployees = async (req, res) => {
  const filter = { salary: { $gt: 70000 } };
  const update = { $set: { salary: 65000 } };
  const result = await employee.updateMany(filter, update);
  res.send({ msg: "Updated high salary employees", data: result.modifiedCount });
}

const deleteEmployeesFromCompanyY = async (req, res) => {
  const filter = { lastCompany: "Y" };
  const result = await employee.deleteMany(filter);
  res.send({ msg: "Deleted employees from company Y", data: result.deletedCount });
}


module.exports = { getAllEmployees, getHighSalaryEmployees, getExperiencedEmployees, getRecentGraduatesWithExperience, updateHighSalaryEmployees, deleteEmployeesFromCompanyY}