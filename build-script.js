const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './dist/ngElement/runtime.js',
        './dist/ngElement/polyfills.js',
        './dist/ngElement/main.js'
    ]


    await fs.ensureDir('elements')

    await concat(files, 'elements/my-element.js')
})();