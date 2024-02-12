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
        AppState.on('activeNoteFile', _drawActiveNote)
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

    // updateNoteFile() {
    //     console.log('blurred input');
    
    //     const textAreaElement = document.getElementById('noteFileTextArea')
    
    //     // @ts-ignore
    //     console.log('text content from textarea', textAreaElement.value);
    
    //     // NOTE pulls out the text content currently stored in the textarea tag
    //     // @ts-ignore
    //     const updatedNoteFileBody = textAreaElement.value
    
    //     notesService.updateNoteFile(updatedNoteFileBody)
    
    //   }

    deleteNote(noteId) {
        const confirmed = confirm('Are you sure you want to delete this note?');
        if (confirmed) {
            const index = AppState.noteFiles.findIndex(note => note.id === noteId);
            if (index !== -1) {
                AppState.noteFiles.splice(index, 1);
                _drawNotes();
            }
        }
    }
}