const { getAllEmployees, getHighSalaryEmployees, getExperiencedEmployees, getRecentGraduatesWithExperience, updateHighSalaryEmployees, deleteEmployeesFromCompanyY } = require("./product_Controller");

const route = require('express').Router();

// route.post("/addproductinstore", addProductInStore);
// route.put("/updateSingleProduct", updatePriceOfSingleProduct);
// { getAllEmployees, getHighSalaryEmployees, getExperiencedEmployees, getRecentGraduatesWithExperience, updateHighSalaryEmployees, deleteEmployeesFromCompanyY}

route.get("/getAllEmployees",getAllEmployees)
route.get("/getHighSal",getHighSalaryEmployees)
route.get("/getAllExp",getExperiencedEmployees)
route.get("/getRecEmp",getRecentGraduatesWithExperience)
route.get("/updateEmp",updateHighSalaryEmployees)
route.get("/deleteEmp",deleteEmployeesFromCompanyY)


module.exports = { route };
