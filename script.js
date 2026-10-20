const userProfile = {
  name: "Karima",        
  birthYear: 2007,          
  isDeveloper: true,        
  hobbies: ["volleyball", "reading", "drawing"], 
};

console.log("User Profile:", userProfile);


function displayProfile() {

    const currentYear = new Date().getFullYear();
    const currentAge = currentYear - userProfile.birthYear;
    const totalMonths = currentAge * 12;
    const hobbiesCount = userProfile.hobbies.length;

    console.log("Current Year:", currentYear);
    console.log("Current Age:", currentAge);
    console.log("Total Months:", totalMonths);
    console.log("Number of Hobbies:", hobbiesCount);

    const infoDiv = document.getElementById("profile-info");
    if (infoDiv) {
         infoDiv.textContent = `Hello, ${userProfile.name}! You are ${currentAge} years old (${totalMonths} months). You have ${hobbiesCount} hobbies.`;
    }

}


displayProfile();


const form = document.getElementById("profile-form");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const newName = document.getElementById("username").value;
    const newBirthYear = Number(document.getElementById("birth-year").value);

    userProfile.name = newName;
    userProfile.birthYear = newBirthYear;

    displayProfile();
    
    form.reset();
});


const hobbyInput = document.getElementById("hobby-input");
const addBtn = document.getElementById("add-btn");
const removeBtn = document.getElementById("remove-btn");
const hobbyList = document.getElementById("hobby-list");


addBtn.addEventListener("click", () => {
    
    const hobbyText = hobbyInput.value.trim(); 

    if (hobbyText === "") {
        alert("Please enter a hobby first!");
        return;
    }

    const newLi = document.createElement("li");
    
    newLi.textContent = hobbyText;
    
    hobbyList.appendChild(newLi);

    hobbyInput.value = "";
});


removeBtn.addEventListener("click", () => {
    
    if (hobbyList.lastElementChild) {
        hobbyList.lastElementChild.remove();
    } else {
        alert("The list is already empty!");
    }
});