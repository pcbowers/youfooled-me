function rickroll() {
  window.umami.trackEvent("rickroll-succeeded", { type: "rickroll" });
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

rickroll();

setTimeout(() => {
  window.umami.trackEvent("rickroll-avoided", { type: "rickroll" });
}, 1000);
