setTimeout(async () => {
  await window.umami.trackEvent("rickroll-avoided", { type: "rickroll" });
}, 1000);
