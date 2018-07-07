const animation = bodymovin.loadAnimation({
    container: document.getElementById('sm'),
    path: '../data.json',
    loop: false,
    renderer: 'svg',
    autoplay: true,
    name: 'SpeechMore'
});

animation.setSpeed(0.9);
