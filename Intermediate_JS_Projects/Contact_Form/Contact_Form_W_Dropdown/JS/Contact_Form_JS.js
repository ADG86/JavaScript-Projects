function validateForm() {
    var x = document.forms["contact_form"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }