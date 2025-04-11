chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "addToDictionary",
      title: "Add to My Dictionary",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "addToDictionary") {
      const selectedWord = info.selectionText;
      chrome.storage.local.get(["vocabList"], (result) => {
        const vocabList = result.vocabList || [];
        if (!vocabList.includes(selectedWord)) {
          vocabList.push(selectedWord);
          chrome.storage.local.set({ vocabList });
        }
      });
    }
  });
  