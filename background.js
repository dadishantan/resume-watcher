chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension Installed");
  });
  
  // In a real-world case, this would be triggered when the resume is viewed (via backend)
  function showNotification(name) {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icons/icon48.png",
      title: "Resume Viewed",
      message: `${name} opened your resume.`
    });
  }
  