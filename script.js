function calculateNote() {
    //declaring variables
    let lowestFret = parseInt(document.getElementById("lowestFret").value);
    let highestFret = parseInt(document.getElementById("highestFret").value);
    document.getElementById("lowestChoice").innerHTML = lowestFret;
    document.getElementById("highestChoice").innerHTML = highestFret;
    const randomFret = Math.floor(Math.random() * (highestFret - lowestFret + 1))
    const fretNumber = randomFret + lowestFret;
    const stringNumber = Math.floor(Math.random() * 6);
    const stringArr = ["High E", "B", "G", "D", "A", "Low E"];
    const stringChoice = stringArr[stringNumber];
    const notesArr = ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b", "c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b", "c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b"];
    let noteOnString = "";

    // figuring out notes 

    if (stringNumber == 0) {
        noteOnString = notesArr[4 + fretNumber];
        document.getElementById("highE").innerHTML = `E --${fretNumber}--`;
    } else if (stringNumber == 1) {
        noteOnString = notesArr[11 + fretNumber];
        document.getElementById("B").innerHTML = `B --${fretNumber}--`;
    } else if (stringNumber == 2) {
        noteOnString = notesArr[7 + fretNumber];
        document.getElementById("G").innerHTML = `G --${fretNumber}--`;
    } else if (stringNumber == 3) {
        noteOnString = notesArr[2 + fretNumber];
        document.getElementById("D").innerHTML = `D --${fretNumber}--`;
    } else if (stringNumber == 4) {
        noteOnString = notesArr[9 + fretNumber];
        document.getElementById("A").innerHTML = `A --${fretNumber}--`;
    } else if (stringNumber > 4) {
        noteOnString = notesArr[4 + fretNumber];
        document.getElementById("lowE").innerHTML = `E --${fretNumber}--`;
    };

    // play notes

    let audioUrl = "";
    const arrLE = ["E2", "F2", "Gb2", "G2", "Ab2", "A2", "Bb2", "B2", "C3", "Db3", "D3", "Eb3", "E3", "F3", "Gb34", "G3", "Ab3", "A3", "Bb3", "B3", "C4", "Db4", "D4"];
    const arrA = ["A2", "Bb2", "B2", "C3", "Db3", "D3", "Eb3", "E3", "F3", "Gb3", "G3", "Ab3", "A3", "Bb3", "B3", "C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4"];
    const arrD = ["D3", "Eb3", "E3", "F3", "Gb3", "G3", "Ab3", "A3", "Bb3", "B3", "C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4", "B4", "C5"];
    const arrG = ["G3", "Ab3", "A3", "Bb3", "B3", "C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4", "B4", "C5", "Db5", "D5", "Eb5", "E5", "F5"];
    const arrB = ["B3", "C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4", "B4", "C5", "Db5", "D5", "Eb5", "E5", "F5", "Gb4", "G4", "Ab4", "A4"];
    const arrHE = ["E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4", "B4", "C5", "Db5", "D5", "Eb5", "E5", "F5", "Gb5", "G5", "Ab5", "A5", "Bb5", "B5", "C6", "Db6", "D6"];

    if (stringChoice == "Low E") {
        audioUrl = ("./notes/" + arrLE[fretNumber] + ".mp3");
    }
    else if (stringChoice == "A") {
        audioUrl = ("./notes/" + arrA[fretNumber] + ".mp3");

    }
    else if (stringChoice == "D") {
        audioUrl = ("./notes/" + arrD[fretNumber] + ".mp3");

    }
    else if (stringChoice == "G") {
        audioUrl = ("./notes/" + arrG[fretNumber] + ".mp3");

    }
    else if (stringChoice == "B") {
        audioUrl = ("./notes/" + arrB[fretNumber] + ".mp3");

    } else if (stringChoice == "High E") {
        audioUrl = ("./notes/" + arrHE[fretNumber] + ".mp3");

    }
    console.log(audioUrl);
    let audio = new Audio(audioUrl);
    audio.play();

    //writing results in DOM
    document.getElementById("string").innerHTML = `String: ${stringChoice}`;
    document.getElementById("fret").innerHTML = `Fret: ${fretNumber}`;
    document.getElementById("note").innerHTML = `Note: ${noteOnString}`;
}

function update() {
    let x = document.getElementById("lowestFret").value;
    let y = document.getElementById("highestFret").value;

    document.getElementById("lowestChoice").innerText = x;
    document.getElementById("highestChoice").innerText = y;
}

function runProgram() {

    document.getElementById("highE").innerHTML = "E ------";
    document.getElementById("B").innerHTML = "B ------";
    document.getElementById("G").innerHTML = "G ------";
    document.getElementById("D").innerHTML = "D ------";
    document.getElementById("A").innerHTML = "A ------";
    document.getElementById("lowE").innerHTML = "E ------";

    calculateNote();

}

const generateButton = document.getElementById("generate");
generateButton.addEventListener("click", runProgram);


