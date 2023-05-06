function validateName(){

   var name = document.formDetails.formName.value;
   if(name.length == 0){
    document.getElementById("NameError").innerHTML = "Name is required";
   }
   else{
      document.getElementById("NameError").innerHTML = " ";
   }

}

function validateInputFeilds(){
   var name = document.formDetails.formName.value;
   var email = document.formDetails.formEmail.value;
   var role = document.formDetails.formInput.value;
   
   if(name.length > 0 && email.length >0 && role.length > 0){
      document.getElementById("OnSubmit").innerHTML = " ";
   }

}

function validateEmail(){

   var email = document.formDetails.formEmail.value;
   let regex = /^([a-zA-Z0-9\.-]+)@([a-z0-9-]+)\.([a-z\.]{3,10})$/;


   if(email.length == 0){
      document.getElementById("EmailError").innerHTML = "Email is required";
     }else if(!email.match(regex)){
      document.getElementById("EmailError").innerHTML = "Enter a valid Email";
     }else{
      document.getElementById("EmailError").innerHTML = " ";
     }
}

function validateText(){
   var role = document.formDetails.formInput.value;
   if(role.length == 0){
    document.getElementById("RoleError").innerHTML = "Role is required";
    return false;
   }else{
      document.getElementById("RoleError").innerHTML = " ";
   }

}


function browseFiles(){
   var fileName = document.getElementById("GetFile").value;
   document.getElementById("ResumeError").innerHTML =  fileName;
}

function getPromoCode() {
   var value = document.getElementById("StateProvince");
   var promo = value.options[value.selectedIndex].text;
   value.options[0].disabled = true;
   document.getElementById("PromoCode").value = promo+"-PROMO";
}

function validateCareerSubmit(){

   var name = document.getElementById("CareersName").value;
   var email = document.getElementById("CareersEmail").value;
   var role = document.getElementById("CareersRole").value;
   var file = document.getElementById("FileUpload").value;

   if(name.length == 0 || email.length == 0 || role.length == 0 ){
      validateName();
      validateEmail();
      validateText();
      document.getElementById("OnSubmit").innerHTML = "Please fill all the required fields below";
      return false;
   }else if(file.length == 0){
      return false;
   }
   else{
      alert("Form Submitted");
   }

}

function getFileName(){
   var file = document.getElementById("GetFile").value.split("\\").pop();

   document.getElementById("FileUpload").value = file;
}

function validateContactSubmit(){
   var name = document.getElementById("GetName").value;
   var email = document.getElementById("GetEmail").value;
   var org = document.getElementById("GetOrg").value;

   if(name.length == 0 || email.length == 0 || org.length == 0){
      validateName();
      validateEmail();
      validateText();
      document.getElementById("OnSubmit").innerHTML = "Please fill all the required fields below";
      return false;
   }
   else{
      alert("Form Submitted.")
   }
}

function resetForm(){
   document.getElementById("ContactForm").reset();
   document.getElementById("NameError").innerHTML = " ";
   document.getElementById("EmailError").innerHTML = " ";
   document.getElementById("RoleError").innerHTML = " ";
   document.getElementById("OnSubmit").innerHTML = " ";
}
