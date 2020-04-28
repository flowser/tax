const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .copyDirectory('node_modules/@fortawesome/fontawesome-free/webfonts', 'public/webfonts')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('./tailwind.config.js')],
    });

if (mix.inProduction()) {
    mix.version();
}
mix.browserSync('itaxi.test');

   // npm i @fortawesome/fontawesome-free
// npm i icheck-bootstrap
// npm install moment --save
// npm i overlayscrollbars
// npm install tailwindcss
// npm i vform
// npm i vue-phone-number-input
// npm install vue-router

