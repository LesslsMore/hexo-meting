const fs = require('hexo-fs');
const path = require('path');
const log = require('./utils').log

let init_from_console = false

const options = {
    options: [
        {name: '-b, --books', desc: 'Generate meting books only'},
        {name: '-m, --movies', desc: 'Generate meting movies only'},
        {name: '-g, --games', desc: 'Generate meting games only'},
        {name: '-s, --musics', desc: 'Generate meting musics only'},
        {name: '-t, --tvs', desc: 'Generate meting tvs only'}
    ]
}

// Register `hexo meting`
hexo.extend.console.register('meting', 'Generate pages from meting', options, function (args) {
    init_from_console = true

    // if (!this.config.meting) {
    //     log.info("No meting config specified")
    //     return
    // }
    // if (!this.config.meting.token) {
    //     log.info("No meting token specified")
    //     return
    // }
    log.info('meting')
    hexo.extend.generator.register('enabled_type', function (locals) {
        // locals.meting_type = enabled_type
        return require(`./generator`).call(this, locals)
    });

    const self = this;

    //Generate files
    self.load().then(function () {
        const publicDir = self.public_dir;
        let id = 'meting/index.html'
        fs.mkdirSync(path.join(publicDir, id.replace("index.html", "")), {recursive: true})

        self.route.get(id) && self.route.get(id)._data().then(function (contents) {
            fs.writeFile(path.join(publicDir, id), contents);
            log.info("Generated: %s", id);
        });
    });
});
