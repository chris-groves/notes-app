function testNoteObjectStoresTextOfANote() {
  var note = new Note('my favourite language is JavaScript');
  assert.isTrue(note.text === 'my favourite language is JavaScript');
};

testNoteObjectStoresTextOfANote();
