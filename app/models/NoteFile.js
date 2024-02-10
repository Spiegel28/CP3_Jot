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

    get ActiveNoteListHTML() {
        return `
      <div class="p-5">
        <div class="d-flex">
          <h2 class="me-4">title</h2>
        </div>
        <div class="d-flex justify-content-between mb-4 align-items-center">
          <h3 class="mb-0">Last Accessed 12/12/2012 at 11:54 AM</h3>
        </div>
        <p class="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quos in, voluptas perspiciatis
          omnis, dolore quia
          distinctio ipsam excepturi ipsa consequuntur animi est nemo minima rem, voluptatum necessitatibus libero
          quibusdam! Culpa modi quis autem ratione aut, blanditiis ipsam quibusdam quaerat ea voluptate quia, incidunt
          earum ipsa molestias veritatis, odit adipisci.</p>
      </div>
        `
    }
}