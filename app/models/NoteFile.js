import { generateId } from "../utils/GenerateId.js";


export class NoteFile {
    constructor (data) {
        this.id = generateId()
        this.name = data.name
        this.body = data.body
        this.lastAccessed = new Date()
    }

    get NoteListHTML() {
        return `
          <div class="d-flex p-3">
            <div class="fs-1">${this.name}</div>
          </div>
      </div>
        `
    }
}