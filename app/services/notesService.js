import { AppState } from "../AppState.js";
import { NoteFile } from "../models/NoteFile.js";
import { saveState } from "../utils/Store.js";

// function _saveNotesInLocalStorage() {
//     saveState('notes', AppState.noteFiles)  will use later 
// }


class NotesService {

    createNote(noteFormData) {

        const newNote = new NoteFile(noteFormData)

        console.log('pojo', noteFormData);

        console.log('NEW NOTE', newNote)

        AppState.noteFiles.push(newNote)

        // _saveNotesInLocalStorage() will add this later 


    }
}

export const notesService = new NotesService()