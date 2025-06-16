const title = document.querySelector('input[name="title"]');
const description = document.querySelector('textarea');
const submitBtn = document.querySelector('#submit');
const notesList = document.querySelector('#displayNotes');

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const currentTitle = title.value.trim();
    const currentDescription = description.value.trim();

    if (currentTitle === "" || currentDescription === "") {
        alert("Please fill in both fields.");
        return;
    }

    const newNote = document.createElement('div');
    newNote.className = "notes";

    const newTitle = document.createElement('h3');
    newTitle.className = "title";
    newTitle.innerText = currentTitle;

    const newDescription = document.createElement('p');
    newDescription.className = "description";
    newDescription.innerText = currentDescription;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = "delete-btn";
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener('click', () => {
        notesList.removeChild(newNote);
    });

    const updateBtn = document.createElement('button');
    updateBtn.className = "update-btn";
    updateBtn.innerText = "Update";
    updateBtn.addEventListener('click', () => {
        const editTitle = document.createElement('input');
        editTitle.type = 'text';
        editTitle.value = newTitle.innerText;

        const editDesc = document.createElement('textarea');
        editDesc.value = newDescription.innerText;

        const okBtn = document.createElement('button');
        okBtn.innerText = 'OK';
        okBtn.className = 'ok-btn';

        okBtn.addEventListener('click', () => {
            newTitle.innerText = editTitle.value;
            newDescription.innerText = editDesc.value;

            newNote.replaceChild(newTitle, editTitle);
            newNote.replaceChild(newDescription, editDesc);
            newNote.replaceChild(updateBtn, okBtn);
        });

     
        newNote.replaceChild(editTitle, newTitle);
        newNote.replaceChild(editDesc, newDescription);
        newNote.replaceChild(okBtn, updateBtn);
    });

    newNote.appendChild(newTitle);
    newNote.appendChild(newDescription);
    newNote.appendChild(deleteBtn);
    newNote.appendChild(updateBtn);

    notesList.appendChild(newNote);

    title.value = "";
    description.value = "";
});
