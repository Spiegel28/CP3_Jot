import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";



function _drawNotes() {
    console.log('drawing notes');

    const noteFiles = AppState.noteFiles

    let htmlString = ''

    noteFiles.forEach(noteFile => htmlString += noteFile.NoteListHTML)

    setHTML('noteFileList', htmlString)
}

export class NotesController {
    constructor() {
        console.log('Notes loaded')

        // notesService.loadNotesFromLocalStorage() this will be used later. added for now

        _drawNotes()

        AppState.on('notes', _drawNotes)
    }

    createNote() {
        try{
            event.preventDefault()
            console.log('creating note');

            const form =event.target

            console.log('targeted event', form);

            const noteFormData = getFormData(form)

            console.log('here is your note object', noteFormData)

            notesService.createNote(carFormData)

        }
    }
}