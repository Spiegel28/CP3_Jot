import { generateId } from "../utils/GenerateId.js";


export class NoteFile {
    constructor (data) {
        this.id = generateId()
        this.title = this.title
        this.body = data.body
        this.lastAccessed = new Date()
    }

    get NoteListHTML() {
        return `
        <div class="notes__sidebar">
        <button class = "notes__list" type="button">Add Note</button>
          <div class="">
            <div class="fs-1">Lecture Notes</div>
            <div class="fs-1">Lecture Notes</div>
            <div class="fs-1">Lecture Notes</div>
          </div>
      </div>
        `
    }
}