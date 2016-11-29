var NoteManager = (function() {
  //Private State
  var notes = [];

  function addNoteToState(note) {
    notes.push(note);
  }

  function addNoteToDOM(note) {
    if(!!note.length) {
      $('#notes').append("<li class='note'>" + note + "</li>")
    }
  }

  function addNote(note) {
    addNoteToState(note);
    addNoteToDOM(note)
    //Clear textfield
    $('input#note').val("") 
  }

  function loadData(data) {
    notes = notes.concat(data);
  }

  function init() {
    //Display existing notes
    for(var i = 0; i < notes.length; i++) {
      addNoteToDOM(notes[i]);
    }

    //Add note from text input on enter
    $('input#note').keypress(function(event) {
      if(event.keyCode === 13) {
        var note = $('input#note').val();
        addNote(note)
      }
    });

    //Add note from text input when user clicks 'Add Note'
    $('#add_note').on('click', function() {
      var note = $('input#note').val();
      addNote(note);
    });

    //Add active class to clicked note
    $('.note').on('click', function() {
      console.log("this = ", this);
      $(this).toggleClass('highlighted');
    });
  }

  var publicAPI = {
    loadData: loadData,
    init: init
  };

  return publicAPI;
})();

var defaultNotes = [
  "first note",
  "second note",
  "third note"
];

NoteManager.loadData(defaultNotes);

$(document).ready(NoteManager.init());
