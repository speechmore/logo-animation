## How to install my SpeechMore animation:
1. Drag the folder `images` and file `data.json` into your site directory, then change the path to the path of the `data.json` file, then make a `<div>` container and give it an id, for this example I'm using the id `test`
```html
<div id="test">
</div>
```
2.  Add the code below to the bottom of the page or in between`<head>` and `</head>` tag like so:
**Head:**
```html
<!DOCTYPE html>
<html>
<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/4.13.0/bodymovin.min.js" type="text/javascript"></script>
    <script>
        var animation = bodymovin.loadAnimation({
                container: document.getElementById('sm'),
                path: 'data.json', // Assuming it's in the root
                loop: false,
                renderer: 'svg',
                autoplay: true,
                name: "SpeechMore",
        })
        animation.setSpeed(0.9);
    </script>
</head>
<body>
 <!-- Code here -->
</body>
</html>
```
Or for the bottom of the page:
```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>
 <!-- Code here -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/4.13.0/bodymovin.min.js" type="text/javascript"></script>
    <script>
        var animation = bodymovin.loadAnimation({
                container: document.getElementById('sm'),
                path: 'data.json', // Assuming it's in the root
                loop: false,
                renderer: 'svg',
                autoplay: true,
                name: "SpeechMore",
        })
        animation.setSpeed(0.9);
    </script>
</body>
</html>
```
3. Add CSS if you want, as it is treated just like any other SVG

And that's it, if you want to customize the JavaScript that I have provided here is the documentation:
https://github.com/airbnb/lottie-web
