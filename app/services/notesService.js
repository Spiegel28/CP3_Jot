import { AppState } from "../AppState.js";
import { NoteFile } from "../models/NoteFile.js";
import { loadState, saveState } from "../utils/Store.js";


// function _saveNoteFiles () {
//     saveState('noteFiles', AppState.noteFiles)
// }

// function _loadNoteFiles() {
//     const noteFilesFromLocalStorage = loadState('noteFiles', [NoteFile])
//     AppState.noteFiles = noteFilesFromLocalStorage
// }

class NotesService {

    constructor() {
        // _loadNoteFiles() 
    }

    createNote(noteFormData) {

        const newNote = new NoteFile(noteFormData)

        console.log('pojo', noteFormData);

        console.log('NEW NOTE', newNote)

        AppState.noteFiles.push(newNote)

        // _saveNoteFile() will add this later 


    }

    setActiveNoteFile(noteFileId){
        const foundNote = AppState.noteFiles.find(noteFile => noteFileId == noteFileId)

        console.log('setting active note')

        AppState.activeNoteFile = foundNote
    }
}

export const notesService = new NotesService()