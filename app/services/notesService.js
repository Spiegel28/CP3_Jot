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

    // updateNoteFile(updatedNoteFileBody) {
    //     const activeNoteFile = AppState.activeNoteFile
    
    //     // NOTE updates body
    //     activeNoteFile.body = updatedNoteFileBody
    //     // NOTE updates timestamp
    //     activeNoteFile.updatedAt = new Date()
    
    //     // _saveNoteFiles()

    //     AppState.emit('activeNoteFile')
    //   }

    setActiveNoteFile(noteFileId){
        const foundNote = AppState.noteFiles.find(noteFile => noteFileId === noteFileId)

        console.log('setting active note')

        AppState.activeNoteFile = foundNote

        AppState.emit('activeNoteFile')
    }
}

export const notesService = new NotesService()