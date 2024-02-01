const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe:"enter the title of the note which you want to remove",
            demandOption: true,
            type:'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
})

// list command
yargs.command({
    command: 'list',
    describe: 'List your all notes',
    handler() {
        const Notes = notes.listNotes();
        console.log(Notes);
    }
})

// modify command
yargs.command({
    command:"modify",
    decription:"to modify an existing note",
    builder:{
        title:{
            describe:"Provide the title of note to modify",
            demandOption: true,
            type: 'string'
        },
        modification:{
            describe: "enter the modification you want to make",
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        const modificationArray = argv.modification.split(',');
        notes.modifyNote(argv.title, modificationArray);
    }
})


// get command
yargs.command({
    command: 'get',
    describe: 'Get a note',
    builder: {
        title:{
            describe:"Enter the title of Note to fetch",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log(notes.getNote(argv.title));
    }
})

yargs.parse()