  function calculate() {

    /* tax codes */

    var Tax1060L = 10600;

    /* national insurance */
    var NIAllowance = 8060;

    /* values */
    var mySalary = document.getElementById('salary').value; 
    var myBox2 = document.getElementById('box2').value;
    var result = document.getElementById('result'); 
    var myResult = mySalary / 12;
    
    /* taxable income */
    var taxableIncome = mySalary - Tax1060L;
    var yearlyTax = taxableIncome / 100 * 20;
    var monthlyTax = yearlyTax / 12;

    /* national insurance */
    var NIincome = mySalary - NIAllowance;
    var yearlyNI = NIincome / 100 * 12;
    var monthlyNI = yearlyNI / 12;

    var mySalaryDeductions = monthlyTax + monthlyNI;
    var SalaryAfterDeductions = myResult - mySalaryDeductions;

    /* expenses */

    var foodShopping = document.getElementById('food').value;
    var foodMonthly = foodShopping * 4;

    var CarInsurance = document.getElementById('car').value;
    var CarInsuranceMonthly = CarInsurance / 12;

    var OtherOutgoings = document.getElementById('monthly').value;

    var FoodandCar = foodMonthly + CarInsuranceMonthly;
    var TotalMonthlyOutgoings = OtherOutgoings + FoodandCar;

    var SalaryAfterAll = SalaryAfterDeductions - TotalMonthlyOutgoings;


    /*input results */
    result.value = myResult;
    resulttax.value = monthlyTax;
    resultni.value = monthlyNI;
    deductions.value = mySalaryDeductions;
    afterdeductions.value = SalaryAfterDeductions;
    foodshoppingtotal.value = foodMonthly;
    dividedcarinsurance.value = CarInsuranceMonthly;
    othermonthlyoutgoings.value = OtherOutgoings;
      
    
  }