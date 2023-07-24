// <===================GLOBAL======================>

// DECLEAR VARIABLE TO GET THE INPUT AND SAVE IT IN THIS VARIABLE
var siteNameInpuit = document.getElementById("siteName");
var siteURLInput = document.getElementById("siteURL");

//SEARCH INPUT
var inputData = document.getElementById("searchInput");

// DECLEAR AN EMPTY ARRY TO PUSH THE OBJECT IN
var sitesContainer=[];


// GET DATA FROM LOCAL-STORAGE & PUT THIS DATA IN THE ARRY THEN DISPLAY IT
if(localStorage.getItem("sites") != null){
    sitesContainer = JSON.parse(localStorage.getItem("sites"));
    dispaly();
}

// <===================GLOBAL======================>

// TAKE VALUES FROM INPUTS AND SAVE THEM IN THE OBJECT & PUSH IN THE ARRY&LOCAL-STORAGE & DISPLAY THIS DATA
function addSite(){

   var site={
        name : siteNameInpuit.value,
        URL : siteURLInput.value
    }

    for(var i=0 ; i<sitesContainer.length ; i++){
        if(sitesContainer[i].name.toLowerCase()==site.name.toLowerCase()){
            alert("This site already exists!");
            clearForm();
            return;
        }
    }

    //Anthor solution
    // if (sitesContainer.some(e => e.name == site.name)) {
    //     alert("This site already exists!");
    //     clearForm();
    //     return;
    // }

    if(site.name && site.URL){
        sitesContainer.push(site);
        localStorage.setItem("sites",JSON.stringify(sitesContainer));
    }
    else
    alert("Please Enter Inputs Data!")
   
    // console.log(sitesContainer);
    dispaly()
    clearForm()
}

// FUNCTION TO GET THE VALUES FROM AN ARRY AND DISPLAY IT IN THE BROWSER
function dispaly(){

    var cartona = "";

    for(var i=0 ; i<sitesContainer.length ;i++){
        cartona+=`  
        <tr class="text-center">
        <td>${i}</td>
        <td>${sitesContainer[i].name}</td>
        <td><button class="btn btn-outline-warning hover"><a href="${sitesContainer[i].URL}" target="_blank" >Visit</a></button></td>
        <td><button class="btn btn-outline-danger" onclick="deleteSite(${i})">Delete</button></td>
    </tr>`
    }

    document.getElementById("tableData").innerHTML = cartona;
}

// FUNCTION THAT DELETE THE ROW WHEN I PRESS THE DELETE BUTTON THE FUNCTION DELETE THE ROW & DELETE IT FORM LOCALSTORAGE
function deleteSite(elemntNumber){
    sitesContainer.splice(elemntNumber,1);
    localStorage.setItem("sites",JSON.stringify(sitesContainer));
    dispaly()
}

//FUNCTION THAT SEARCH ABOUT ANY ROW BY TYPING THE NAME OF THE WEBSITE
function searchSite(){
    var cartona = "";
    var term = inputData.value;
    for(var i=0 ; i<sitesContainer.length ;i++){
        
        if(sitesContainer[i].name.toLowerCase().includes(term.toLowerCase()) ){
            cartona+=`  
        <tr class="text-center">
        <td>${i}</td>
        <td>${sitesContainer[i].name}</td>
        <td><button class="btn btn-outline-warning">Visit</button></td>
        <td><button class="btn btn-outline-danger" onclick="deleteSite(${i})">Delete</button></td>
    </tr>`
        }

    }

    document.getElementById("tableData").innerHTML = cartona;
}

function clearForm(){
    siteNameInpuit.value="";
    siteURLInput.value="";
}













