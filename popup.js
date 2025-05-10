document.getElementById("generate").addEventListener("click", () => {
    const name = document.getElementById("name").value.trim();
    if (!name) return;
  
    const uniqueURL = `https://yourdomain.com/resume?viewer=${encodeURIComponent(name)}&t=${Date.now()}`;
    document.getElementById("link").innerText = uniqueURL;
  
    // Optionally store it in localStorage or backend
  });
  