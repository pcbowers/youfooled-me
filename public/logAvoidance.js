setTimeout(async () => {
  await window.umami.track('rickroll-avoided', { type: 'rickroll' });
}, 1000);
