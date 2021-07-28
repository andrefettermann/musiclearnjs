/*
var noteLetter = document.getElementById("note");
var run = document.getElementById("run");
var major_scale = document.getElementById("major_scale");
var major_chord = document.getElementById("major_chord");

run.addEventListener("click", function() {
    //alert(noteLetter.value);
    let note = noteLetter.value;

    let majorScale = buildMajorScale(note);
    let majorChord = buildMajorChord(majorScale);

    major_scale.innerText = "Major scale for " + note + " is " + majorScale;    
    major_chord.innerText = "Major chord for " + note + " is " + majorChord;    
    
});
*/
import {MajorBuilder} from "./MajorBuilder.js";

const noteLetter = document.getElementById("note");
const run = document.getElementById("run");
const major_scale = document.getElementById("major_scale");
const major_chord = document.getElementById("major_chord");

run.addEventListener("click", function() {
    const majorBuilder = new MajorBuilder();

    const note = noteLetter.value;

    const majorScale = majorBuilder.buildScale(note);
    const majorChord = majorBuilder.buildChord(majorScale);

    major_scale.innerText = "Major scale for " + note + " is " + majorScale;    
    major_chord.innerText = "Major chord for " + note + " is " + majorChord;    
    
});
