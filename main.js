let avoidedRickRoll = true;

setTimeout(() => {
  avoidedRickRoll = false;
  window.umami.trackEvent("rickroll-succeeded", { type: "rickroll" });
  console.log("You've been Rickrolled!");
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}, 0);

setTimeout(() => {
  if (avoidedRickRoll) {
    window.umami.trackEvent("rickroll-avoided", { type: "rickroll" });
    console.log("You avoided being Rickrolled!");
  }
}, 1000);
