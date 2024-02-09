import { NoteFile } from './models/NoteFile.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  noteFiles = [
    new NoteFile({
      name: 'Day 1',
      body: 'Today I learned all of this stuff and more'
    }),
    new NoteFile({
      name: 'Day 2',
      body: 'Today was so much harder than day 1'
    })
  ]
  
}

export const AppState = createObservableProxy(new ObservableAppState())