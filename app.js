
const verses = [
    {
        text: "I can do all things through Christ which strengtheneth me.",
        reference: "Philippians 4:13 (KJV)"
    },
    {
        text: "The Lord is my shepherd; I shall not want.",
        reference: "Psalm 23:1 (KJV)"
    },
    {
        text: "Be strong and of a good courage; be not afraid.",
        reference: "Joshua 1:9 (KJV)"
    },
    {
        text: "Trust in the Lord with all thine heart.",
        reference: "Proverbs 3:5 (KJV)"
    },
    {
        text: "Let all your things be done with charity.",
        reference: "1 Corinthians 16:14 (KJV)"
    }
];

const verseText = document.getElementById("verse");
const verseReference = document.getElementById("reference");
const newVerseButton = document.getElementById("newVerse");

let currentVerse = 0;

newVerseButton.addEventListener("click", function () {
    currentVerse = (currentVerse + 1) % verses.length;

    verseText.textContent = '"' + verses[currentVerse].text + '"';
    verseReference.textContent = verses[currentVerse].reference;
});
