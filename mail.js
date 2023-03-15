  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB8aXvWzifjUSBH8V6JpaVJ-CHmU-G6tBE",
    authDomain: "sponsor-form.firebaseapp.com",
    databaseURL: "https://sponsor-form-default-rtdb.firebaseio.com",
    projectId: "sponsor-form",
    storageBucket: "sponsor-form.appspot.com",
    messagingSenderId: "990131916311",
    appId: "1:990131916311:web:1ebcc641d22549368bd652"
  };
// initiliaze firebase
  firebase.initializeApp(firebaseConfig);

 // refernece database
 
const sponsorFormDB= firebase.database().ref('sponsorForm')

document.getElementById("sponsorForm").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();

var cname=getElementVal("name");
var emailid=getElementVal("email");
var phone=getElementVal("phoneno");
var msg=getElementVal("message");

saveMessage(cname, emailid, phone, msg );

document.querySelector('.alert').style.display="block";

    setTimeout(()=>{
        document.querySelector('.alert').style.display="none";

    },2000);


}

const saveMessage=(cname, emailid, phone, msg ) => {
    var newSponsorForm = sponsorFormDB.push();
     
    newSponsorForm.set({
        cname:cname,
        emailid: emailid,
        phone:phone,
        msg:msg,
    });

    document.getElementById('sponsorForm').reset();
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
}