export class MajorBuilder {

    notes = [{id: "C", name: "Dó"}
                , {id: "C#", name: "Dó sustenido"}
                , {id: "D", name: "Ré"}
                , {id: "D#", name: "Ré sustenido"}
                , {id: "E", name: "Mi"}
                , {id: "F", name: "Fá"}
                , {id: "F#", name: "Fá sustenido"}
                , {id: "G", name: "Sol"}
                , {id: "G#", name: "Sol sustenido"}
                , {id: "A", name: "Lá"}
                , {id: "A#", name: "Lá sustenido"}
                , {id: "B", name: "Si"}
              ]

    _findNextNoteMajorScale(currentNote, currentNoteGrade) {
        const currentNoteIndex = this.notes.findIndex(x => x.id === currentNote);
        const grade = currentNoteGrade;
        if (grade == 3 || grade == 7) {
          // calc half
          const semitone = currentNoteIndex + 1;
          if (semitone > (this.notes.length-1)) {
            return this.notes[0].id;
          } else {
            return this.notes[semitone].id;
          }
        } else {
            //calc whole
            const tone = currentNoteIndex + 2;
            if (tone > (this.notes.length-1)) {
              return this.notes[tone - this.notes.length].id;
            } else {
              return this.notes[tone].id;
            }
        }
    }
      
    buildScale(startNote) {
        let currentNote = startNote;
        let scale = currentNote;
        for (let i=1; i<7; i++) {
          let nextNote = this._findNextNoteMajorScale(currentNote, i);
          scale += "," + nextNote;
          currentNote = nextNote;
        }
        scale += "," + startNote;
        return scale;      
    }

    buildChord(scale) {
        const scaleArray = scale.split(",");
        const chord = scaleArray[0] + "," + scaleArray[2] + "," + scaleArray[4];
        return chord;
    }
}
