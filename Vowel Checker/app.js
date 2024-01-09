function checkVowel() {
    let text = document.getElementById("inputText").value;
    let vowelCount = 0;

    //convert text into lowerCase
    text = text.toLowerCase();

    for (let i = 0; i < text.length; i++) {
        let char = text.charAt(i);
        if (Vowel(char)) {
            vowelCount++;
        }
    }
    let result = document.getElementById("result");
    result.textContent = `Total Vowels: ${vowelCount}`;
}

function Vowel(char) {
    const vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(char);
}

// let btn = document.getElementById("btn");
// btn.addEventListener("click",checkVowel());