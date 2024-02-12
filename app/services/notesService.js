import { AppState } from "../AppState.js";
import { NoteFile } from "../models/NoteFile.js";
import { loadState, saveState } from "../utils/Store.js";


// TODO these look written correctly, make sure you are calling _saveNoteFiles at the correct time (create, update, delete)
function _saveNoteFiles () {
    saveState('noteFiles', AppState.noteFiles)
}

function _loadNoteFiles() {
    const noteFilesFromLocalStorage = loadState('noteFiles', [NoteFile])
    AppState.noteFiles = noteFilesFromLocalStorage
}

class NotesService {

    constructor() {
        // TODO comment this back in when you can save noteFiles succesfully
        // _loadNoteFiles() 
    }

    createNote(noteFormData) {

        const newNote = new NoteFile(noteFormData)

        console.log('pojo', noteFormData);

        console.log('NEW NOTE', newNote)

        AppState.noteFiles.push(newNote)

        // _saveNoteFile() will add this later 


    }

    updateNoteFile(updatedNoteFileBody) {
        const activeNoteFile = AppState.activeNoteFile
    
        // NOTE updates body
        activeNoteFile.body = updatedNoteFileBody
        // NOTE updates timestamp
        activeNoteFile.updatedAt = new Date()
    
        // _saveNoteFiles()

        AppState.emit('activeNoteFile')
      }

    setActiveNoteFile(noteFileId){
        console.log(noteFileId);
        const foundNote = AppState.noteFiles.find(noteFile => noteFile.id == noteFileId)

        console.log('setting active note')

        AppState.activeNoteFile = foundNote

        AppState.emit('activeNoteFile')
    }
}

export const notesService = new NotesService()