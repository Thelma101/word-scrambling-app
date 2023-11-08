function scrambleWords() {
    const originalText = document.getElementById("originalText").value;
    const wordToScramble = document.getElementById("wordToScramble").value;

    if (!originalText || !wordToScramble) {
        alert("Please enter both text and word to scramble.");
        return;
    }

    // Create a regex pattern to match the word globally and case-insensitively
    const wordPattern = new RegExp(`\\b${wordToScramble}\\b`, "gi");

    // Scramble the text by replacing the matched word with asterisks of the same length
    const scrambledText = originalText.replace(wordPattern, match => '*'.repeat(match.length));

    // Update the content of the "scrambledText" element
    const scrambledTextElement = document.getElementById("scrambledText");
    scrambledTextElement.textContent = scrambledText;
}
