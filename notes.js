const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body)=> {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note)=> note.title === title)
    const duplicateNote = notes.find((note)=> note.title === title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

const removeNote =(title)=>{
    const existingNotes = loadNotes();
    const requiredNotes = existingNotes.filter((note)=> title !==note.title);
    if(existingNotes.length != requiredNotes.length){
        saveNotes(requiredNotes);
        console.log(chalk.bgGreen('Notes Removed!'));
    }else{
        console.log(chalk.bgRed(`no note found!`));
    }
}

const saveNotes =(notes)=> {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes =()=> {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const getNote = (title)=>{
    const allNotes = loadNotes();
   const note = allNotes.find((note)=>note.title === title);
   if(note){
    return note;
   }else{
    console.log(chalk.bgRed("Unable to find the Note"));
   }
}

const modifyNote = (title, modification)=>{
    const note = getNote(title);
    
    if(!note){
        console.log('Enter the existing note title to modify');
    }else{
        removeNote(note.title);
        addNote(modification[0], modification[1]);
    }
}


module.exports = {
    addNote: addNote,
    removeNote:removeNote,
    listNotes: loadNotes,
    getNote: getNote,
    modifyNote:modifyNote
}