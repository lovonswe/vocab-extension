chrome.storage.local.get(["vocabList"], (result) => {
    const vocabList = result.vocabList || [];
    const ul = document.getElementById("wordList");
    vocabList.forEach(word => {
      const li = document.createElement("li");
      li.textContent = word;
      ul.appendChild(li);
    });
  });
  