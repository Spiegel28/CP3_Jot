import { AppState } from "../AppState.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";
import { getFormData } from "../utils/FormHandler.js";
import { notesService } from "../services/notesService.js";



function _drawNotes() {
    console.log('drawing notes');

    const noteFiles = AppState.noteFiles

    let htmlString = ''

    noteFiles.forEach(noteFile => htmlString += noteFile.NoteListHTML)

    setHTML('noteFileList', htmlString)
}

function _drawActiveNote() {
    const noteFile = AppState.activeNoteFile
    console.log('drawing active note', noteFile)

    setHTML('noteFileDetails', noteFile.ActiveNoteListHTML)
}

export class NotesController {
    constructor() {
        console.log('Notes loaded')

        // notesService.loadNotesFromLocalStorage() this will be used later. added for now

        _drawNotes()

        AppState.on('noteFiles', _drawNotes)
        AppState.on('activeNoteFiles', _drawActiveNote)
    }

    createNote() {
        try{
            event.preventDefault()
            console.log('creating note');

            const form = event.target

            console.log('targeted event', form);

            const noteFormData = getFormData(form)

            console.log('here is your note object', noteFormData)

            notesService.createNote(noteFormData)

            // @ts-ignore
            form.reset()

        } catch (error) {
            console.error(error);
            Pop.error(error.message)
        }
    }

    setActiveNoteFile(noteFileId) {
        notesService.setActiveNoteFile(noteFileId)
    }
}