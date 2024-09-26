    const notesContainer = document.querySelector(".notes-container");
    const notesBtn = document.querySelector(".btn");
    let notes = document.querySelectorAll(".input-box");
    

    //3.) function to store the text in local storage
    function updateStorage(){
        localStorage.setItem("notes",notesContainer.innerHTML);
    }


    //4.) function to show contents of the page after reload if something is there
    function showNotes(){
        notesContainer.innerHTML=localStorage.getItem("notes");
    }
    showNotes();


    //1.) want to display notes when click the create notes button
    notesBtn.addEventListener("click", () => {
        let inputBox = document.createElement("P");
        let img = document.createElement("img");
        inputBox.className = "input-box";
        inputBox.setAttribute("contenteditable", "true");
        img.src = "delete.png";
        notesContainer.appendChild(inputBox).appendChild(img);

    })

    //2.) now we want the notes  to be deleted when we click delete image
    notesContainer.addEventListener("click",function(e){
        if(e.target.tagName=="IMG"){
            e.target.parentElement.remove();
            localStorage.clear();
        }
        //now if the text is written then store it in locla storage
        else if(e.target.tagName=="P"){
            notes=document.querySelectorAll(".input-box");
            notes.forEach(nt=>{
                nt.onkeyup=function(){
                    updateStorage();
                }
            })
        }
    })

    //5.) rewritting the enter meaning for the particular field
    /*document.addEventListener("keydown",event=>{
        if(event.key==="Enter"){
            document.execCommand("insertLineBreak");
            event.preventDefault();
        }
    })*/


    //UNDER THIS ALL THE EXTRA INFORMATION RELATED TO THE PROJECT CODE AND FUCNTION OR PROPERTIES USED



