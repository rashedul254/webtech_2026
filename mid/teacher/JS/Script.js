console.log("Validation Script Loaded Successfully");

// ==========================================
// 1. PROFILE UPDATE FORM VALIDATION
// ==========================================
function collect_profile_data()
{
    let fName = validFirstName();
    let lName = validLastName();
    let empId = validEmpID();
    let email = validTeacherEmail();
    let pass = validNewPassword();
    let cPass = validConfirmPassword();

    if(fName && lName && empId && email && pass && cPass) {
        return true;
    }
    return false;
}

function validFirstName()
{
    let val = document.getElementById("FirstName").value;
    let error = document.getElementById("FirstNameError");
    
    if(val == "")
    {
        error.innerHTML = "* Please!! Enter First Name";
        return false;
    }
    else if(val.length < 3)
    {
        error.innerHTML = "First Name Must Carry At Least 3 Characters";
        return false;
    }
    else
    {
        error.innerHTML = "First Name: " + val;
        return true;
    }
}

function validLastName()
{
    let val = document.getElementById("LastName").value;
    let error = document.getElementById("LastNameError");
    
    if(val == "")
    {
        error.innerHTML = "* Please!! Enter Last Name";
        return false;
    }
    else
    {
        error.innerHTML = "Last Name: " + val;
        return true;
    }
}

function validEmpID()
{
    let val = document.getElementById("EmpID").value;
    let error = document.getElementById("EmpIDError");
    
    if(val == "")
    {
        error.innerHTML = "* Please!! Enter Employee ID";
        return false;
    }
    else
    {
        error.innerHTML = "Employee ID: " + val;
        return true;
    }
}

function validTeacherEmail()
{
    let val = document.getElementById("TeacherEmail").value;
    let error = document.getElementById("EmailError");
    
    if(val == "")
    {
        error.innerHTML = "* Please!! Enter Email Address";
        return false;
    }
    else
    {
        error.innerHTML = "Email: " + val;
        return true;
    }
}

function validNewPassword()
{
    let val = document.getElementById("NewPassword").value;
    let error = document.getElementById("PassError");
    
    if(val == "")
    {
        error.innerHTML = "* Please!! Enter New Password";
        return false;
    }
    else if(val.length < 6)
    {
        error.innerHTML = "Password Must Be At Least 6 Characters";
        return false;
    }
    else
    {
        error.innerHTML = "Password Validated";
        return true;
    }
}

function validConfirmPassword()
{
    let passVal = document.getElementById("NewPassword").value;
    let cPassVal = document.getElementById("ConfirmPassword").value;
    let error = document.getElementById("CPassError");
    
    if(cPassVal == "")
    {
        error.innerHTML = "* Please!! Confirm Your Password";
        return false;
    }
    else if(cPassVal !== passVal)
    {
        error.innerHTML = "Passwords Do Not Match!";
        return false;
    }
    else
    {
        error.innerHTML = "Password Matched";
        return true;
    }
}


// ==========================================
// 2. POST ASSIGNMENT FORM VALIDATION
// ==========================================
function collect_assignment_data()
{
    let title = validAssignTitle();
    let course = validAsgnCourse();
    let deadline = validDeadline();
    let instructions = validInstructions();

    if(title && course && deadline && instructions) {
        return true;
    }
    return false;
}

function validAssignTitle()
{
    let val = document.getElementById("AssignTitle").value;
    let error = document.getElementById("TitleError");
    
    if(val == "")
    {
        error.innerHTML = "* Please!! Enter Assignment Title";
        return false;
    }
    else if(val.length < 5)
    {
        error.innerHTML = "Title Must Carry At Least 5 Characters";
        return false;
    }
    else
    {
        error.innerHTML = "Assignment Title: " + val;
        return true;
    }
}

function validAsgnCourse()
{
    let val = document.getElementById("AsgnCourse").value;
    let error = document.getElementById("CourseError");
    
    if(val == "" || val == "Select Option")
    {
        error.innerHTML = "* Please!! Select a Course";
        return false;
    }
    else
    {
        error.innerHTML = "Selected Course: " + val;
        return true;
    }
}

function validDeadline()
{
    let val = document.getElementById("Deadline").value;
    let error = document.getElementById("DateError");
    
    if(val == "")
    {
        error.innerHTML = "* Please!! Select a Deadline Date";
        return false;
    }
    else
    {
        error.innerHTML = "Deadline: " + val;
        return true;
    }
}

function validInstructions()
{
    let val = document.getElementById("Instructions").value;
    let error = document.getElementById("InstructionError");
    
    if(val == "")
    {
        error.innerHTML = "* Please!! Enter Instructions";
        return false;
    }
    else
    {
        error.innerHTML = "Instructions Added Successfully";
        return true;
    }
}