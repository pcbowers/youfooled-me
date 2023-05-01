setTimeout(async () => {
  await window.umami.track('rickroll-succeeded', { type: 'rickroll' });
  window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
}, 50);
