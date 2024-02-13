import { AppState } from "../AppState.js";
import { generateId } from "../utils/GenerateId.js";


export class NoteFile {
    constructor (data) {
        this.id = generateId()
        console.log('Generated Id', this.id)
        this.name = data.name
        this.body = data.body

        this.color = data.color
        // FIXME in order for these to persist using local storage, your dates will have to be updated. Reference Grgeslist and Redacted
        this.createdAt = data.createdAt == undefined ? new Date() : new Date(data.createdAt)
        this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : new Date()
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
        // FIXME make textarea larger

        // TODO after saving color to model, use that somewhere in your active template. (reference gregslist)

        // TODO put onblur handler on text area, and call your updateNoteFile method here. Reference redacted updateCaseFile very heavily

        return `
      <div class="p-5 card">
        <div class="d-flex">
          <h2 class=" me-4"> ${this.name} </h2>
        </div>
        <div class=" justify-content-between mb-4 align-items-center">
         
          <p class="mb-0">Notes Created: ${AppState.noteFiles.length}</p>
          <p class="mb-0">${this.getCreatedAtString()}</p>
          <p>${this.getUpdatedAtString()}</p>
        </div>
        <textarea onblur="app.NotesController.updateNoteFile()" style = "height: 200px;" id="noteBody" class="form-control fs-5" style = "background-color: ${this.color};">${this.body}</textarea>
        <button onclick="app.NotesController.deleteNote('${this.id}')" class="btn btn-danger ms-auto">Delete</button>
      </div>
        `
    }

    getCreatedAtString() {
        return `Created at: ${this.createdAt.toLocaleString()}`;
    }

    getUpdatedAtString() {
        return `Updated at: ${this.updatedAt.toLocaleString()}`;
    }

    
}