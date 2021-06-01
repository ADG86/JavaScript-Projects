function validateForm() { //for a form with multiple fields, there is a need for multiple variables to be defined
    var fn = document.forms["contact_form"]["fname"].value;
    var ln = document.forms["contact_form"]["lname"].value;
    var ag = document.forms["contact_form"]["age"].value;
    if (fn == "") { //having multiple "if" statements is needed to verify each part of the form with the function
        alert("First name must be filled out");
        return false;
    }
    if (ln == "") {
        alert("Last name must be filled out");
        return false;
    }
    if (ag == "") {
        alert("Age name must be filled out");
        return false;
    }
  }