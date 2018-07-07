## How to install my SpeechMore animation

1. Download `images` and `data.json`

2. Install [bodymovin](https://npmjs.com/package/bodymovin)

    ```
    npm install bodymovin --save-dev
    ```

3. Add this JavaScript code:

    ```js
    import bodymovin from 'bodymovin';
    import animationData from './data.json';

    for (let asset of animationData.assets) {
        asset.p = require(`./images/${p}`);
        delete asset.u;
    }

    const animation = bodymovin.loadAnimation({
        container: /* An element to mount the animation in */ document.querySelector('.logo-animation'),
        animationData,
        loop: false,
        renderer: 'svg',
        autoplay: true,
        name: 'SpeechMore'
    });

    animation.setSpeed(0.9);
    ```

Bodymovin documentation: https://github.com/airbnb/lottie-web.
