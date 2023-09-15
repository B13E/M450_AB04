// Diese Funktion entfernt doppelte Werte aus einem Array und gibt ein neues Array mit eindeutigen Werten zurück
function uniqueValues(array) {
  return [...new Set(array)];
}

// Diese Funktion berechnet die Häufigkeit jedes Buchstabens in einem Wort und gibt ein Objekt mit den Buchstaben und ihrer Häufigkeit zurück
function letterFrequency(word) {
  const frequency = {};

  for (const letter of word) {
    if (frequency[letter]) {
      frequency[letter]++;
    } else {
      frequency[letter] = 1;
    }
  }
  return frequency;
}

// Diese Funktion sortiert ein Array von Objekten nach einem angegebenen Schlüssel (key)
function sortByKey(array, key) {
  return array.sort((a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });
}

// Diese Funktion erstellt eine tiefe Kopie eines Objekts mithilfe der JSON-Methode
function deepClone(object) {
  return JSON.parse(JSON.stringify(object));
}

// Diese Funktion findet die Schnittmenge zweier Arrays und gibt ein neues Array mit den gemeinsamen Elementen zurück
function intersection(array1, array2) {
  return array1.filter(value => array2.includes(value));
}

// Diese Funktion führt eine Division a / b durch und wirft einen Fehler, wenn b keine Zahl ist oder 0 ist
function divide(a, b) {
  if (typeof b !== 'number' || b === 0) {
    throw new Error('Der Teiler b muss eine Zahl sein und darf nicht 0 sein.');
  }
  return a / b;
}

// Exportieren der Funktionen, um sie in anderen Modulen verwenden zu können
module.exports = { uniqueValues, letterFrequency, sortByKey, deepClone, intersection, divide };
