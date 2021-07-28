import {MajorBuilder} from "../MajorBuilder.js";

//Executar todos os testes com 'npm test'

describe("Build a major scale", () => {
    
    test("should build a major note scale", () => {
        const input = "F#";
        const output = "F#,G#,A#,B,C#,D#,F,F#";     // let input = "F#"

        const majorBuilder = new MajorBuilder();
        expect(majorBuilder.buildScale(input)).toBe(output);

    });

    test("should build a major chord", () => {
        const input = "D";
        const output = "D,F#,A";
        const majorBuilder = new MajorBuilder();
        expect(majorBuilder.buildChord(majorBuilder.buildScale(input))).toBe(output);
    });

});