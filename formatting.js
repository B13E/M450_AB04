// Diese Funktion gibt das letzte Element eines Arrays zurück
function getLastElement(array) {
    return array[array.length - 1];
}

// Diese Funktion überprüft, ob ein Wort ein Palindrom ist
function isPalindrome(word) {
    // Das Wort wird umgekehrt, indem es in einzelne Buchstaben aufgeteilt, umgekehrt und wieder zusammengefügt wird
    const reversedWord = word.split('').reverse().join('');
    // Das ursprüngliche Wort wird mit der umgekehrten Version verglichen
    return word === reversedWord;
}

// Diese Funktion gibt einen Satz zurück, in dem das erste Zeichen jedes Wortes großgeschrieben ist
function capitalizeWords(sentence) {
    // Der Satz wird in Wörter aufgeteilt, jedes Wort wird formatiert und dann wieder zu einem Satz zusammengefügt
    return sentence.split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

// Diese Funktion gibt die Länge des längsten Wortes in einem Satz zurück
function lengthOfLongestWord(sentence) {
    // Der Satz wird in Wörter aufgeteilt
    const words = sentence.split(' ');
    let maxLength = 0;
    // Durchlaufen aller Wörter im Satz und Aktualisieren der maximalen Länge, wenn ein längeres Wort gefunden wird
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }P
    return maxLength; // Die Länge des längsten Wortes wird zurückgegeben
}

// Exportieren der Funktionen, um sie in anderen Modulen verwenden zu können
module.exports = { getLastElement, isPalindrome, capitalizeWords, lengthOfLongestWord };
