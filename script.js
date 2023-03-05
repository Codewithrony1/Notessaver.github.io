const addbtn = document.querySelector("#add")

const updatelocalstorage = () =>{

const textareadata = document.querySelectorAll("textarea")
const notes = [];
textareadata.forEach((note)=>{
    return notes.push(note.value)
})
console.log(notes)

localStorage.setItem("notes",JSON.stringify(notes))
}



const addnewnote = (text = "")=>{

    const note = document.createElement("div");
    note.classList.add("note");


const htmldata = `
    <div class="operation">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
   
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class=" ${text ? "hidden":""}"></textarea>
     `

note.insertAdjacentHTML("afterbegin",htmldata);
console.log(note);

const editbtn = note.querySelector(".edit")
const delbtn = note.querySelector(".delete")
const maindiv = note.querySelector(".main")
const textarea = note.querySelector("textarea")

// deleting the node 
delbtn.addEventListener("click",()=>{
    note.remove();
    updatelocalstorage();
})

//toggle  using edi btn

textarea.value = text;
maindiv.innerHTML = text;


editbtn.addEventListener("click", ()=>{
    maindiv.classList.toggle("hidden")
    textarea.classList.toggle("hidden")
})

textarea.addEventListener("change",(event)=>{
    const value = event.target.value;
    maindiv.innerHTML = value;

    updatelocalstorage();
})



document.body.appendChild(note)




}

// getting data back from localstorage
 const notes = JSON.parse(localStorage.getItem("notes"))
 if(notes){notes.forEach((note)=>{addnewnote(note)})}


addbtn.addEventListener("click",()=>addnewnote());
