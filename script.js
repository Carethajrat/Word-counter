      let wordCounter = document.getElementById("word-counter");
      let charCounter = document.getElementById("char-counter");
      let text = document.getElementById("input-text");
      text.addEventListener("input", () => {
        charCounter.textContent = text.value.length;
        charCounter.classList.add("display-text");
        let txt = text.value.trim();
        wordCounter.textContent = txt
          .split(/\s+/)
          .filter((item) => item).length;
        wordCounter.classList.add("display-text");
      });
      charCounter.textContent = charCounter;
      wordCounter.textContent = wordCounter;
  