const wavedef = "M452.5 522C414.392 522 383 491.108 383 453L383 178.554C383 178.554 414 218.05 452.5 178.554C491 139.058 522 178.554 522 178.554L522 453C522 491.108 490.608 522 452.5 522Z";
const waveframe2 = "M452.5 522C414.392 522 383 491.108 383 453L383 178.554C383 178.554 413 148 452.5 178.554C492 209.108 522 178.554 522 178.554L522 453C522 491.108 490.608 522 452.5 522V522Z";
anime({
    targets: '.barseg',
    d:wavedef,
    d:waveframe2,
    easing: 'easeInOutSine',
    duration: 1000,
    direction: 'alternate',
    loop: true
  });
  anime({
    targets: '.toggleSw',
    translateX: 60,
    easing: 'easeInOutQuad',
    delay: 5000,
    duration: 1000,
    direction: 'alternate',
    loop: true
  });
