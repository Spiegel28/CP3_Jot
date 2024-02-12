import { generateId } from "../utils/GenerateId.js";


export class NoteFile {
    constructor (data) {
        this.id = generateId()
        console.log('Generated Id', this.id)
        this.name = data.name
        this.body = data.body
        this.lastAccessed = new Date()
        this.isActive = false 
    }

    

    get NoteListHTML() {
        return `
          <div class = "d-flex p-3">
            <p onclick="app.NotesController.setActiveNoteFile('${this.id}')" class="fs-1 selectable" role = "button">${this.name}</p>
          </div>
      </div>
        `
    }

    get ActiveNoteListHTML() {
        return `
      <div class="p-5">
        <div class="d-flex">
          <h2 class=" me-4"> ${this.name} </h2>
        </div>
        <div class="d-flex justify-content-between mb-4 align-items-center">
          <h3 class="mb-0">Time</h3>
        </div>
        <textarea id="noteBody" class="fs-5">${this.body}</textarea>
        <button onclick="app.NotesController.deleteNote('${this.id}')" class="btn btn-danger ms-auto">Delete</button>
      </div>
        `
    }

    // getNoteBody() {
    //     if(this.id)
    // }
}