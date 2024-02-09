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

        _drawNotes()
    }
}