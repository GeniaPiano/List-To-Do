window.addEventListener('load', () =>{
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const taskSection = document.querySelector('#tasks');
    console.log(form);

    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        
        const task = input.value;
        if (!task){return}
         else {
            const taskDiv = document.createElement("div");
            taskDiv.classList.add("task");

            const taskContent = document.createElement("div");
            taskContent.classList.add("content");
            

            taskDiv.appendChild(taskContent);

            const taskInputEl = document.createElement('input');
            taskInputEl.classList.add('text'); 
            taskInputEl.type = ("text");
            taskInputEl.value = task;
            taskInputEl.setAttribute("readonly", "readonly")

            taskContent.appendChild(taskInputEl);        


            input.value="";

            const actionsDiv = document.createElement('div');
            actionsDiv.classList.add("actions");

            const doneBtn = document.createElement('button');
            doneBtn.classList.add("done");
            doneBtn.addEventListener('click', ()=>{
            doneBtn.innerHTML === ""? doneBtn.innerHTML = "v": doneBtn.innerHTML = "";

            })
            

            const editBtn = document.createElement('button');
            editBtn.classList.add("edit");
            editBtn.innerHTML = "Edit"

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete');
            deleteBtn.innerHTML = "Delete"
            

            actionsDiv.appendChild(doneBtn);
            actionsDiv.appendChild(editBtn);
            actionsDiv.appendChild(deleteBtn);
            taskDiv.appendChild(actionsDiv);
            taskSection.appendChild(taskDiv);

            input.value="";

            editBtn.addEventListener('click', () =>{
               if (editBtn.innerText.toLowerCase() == "edit") {
                taskInputEl.removeAttribute("readonly");
                taskInputEl.focus();
                editBtn.innerText = "Save";
               } else {
                taskInputEl.setAttribute('readonly', 'readonly');
                editBtn.innerText = "Edit";
               }

            });

            deleteBtn.addEventListener('click', ()=> {
                taskSection.removeChild(taskDiv);
            })
            


        }
    })

})

