import { majorScaleBuilder } from "../buildMajorScale";
import { majorChordBuilder } from "../buildMajorChord";

import {MajorBuilder} from "../MajorBuilder";

//Executar todos os testes com 'npm test'

describe("Build a major scale", () => {
    
    test("should build a major note scale", () => {
        /*
        const input = "F#";

        //expected
        //const output = "C#,D#,F,F#,G#,A#,C,C#";   // let input = "C#"
        //const output = "C,D,E,F,G,A,B,C";         // let input = "C"
        //const output = "B,C#,D#,E,F#,G#,A#,B";    // let input = "B"
        const output = "F#,G#,A#,B,C#,D#,F,F#";     // let input = "F#"

        expect(majorScaleBuilder(input)).toBe(output);
        */
        const input = "F#";
        const output = "F#,G#,A#,B,C#,D#,F,F#";     // let input = "F#"

        const majorBuilder = new MajorBuilder();
        expect(majorBuilder.buildScale(input)).toBe(output);

    });

    test("should build a major chord", () => {
        
        //const scale = majorScaleBuilder(input);

        const input = "D";
        const output = "D,F#,A";
        const majorBuilder = new MajorBuilder();
        expect(majorBuilder.buildChord(majorBuilder.buildScale(input))).toBe(output);
    });

});