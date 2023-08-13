const ejs = require("ejs");
const {tencent} = require("./api");
// const {renderFile} = require("./utils");

module.exports.log = require('hexo-log')({
    debug: false,
    silent: false
});

module.exports.renderFile = (file, data) => {
    return new Promise(resolve => {
        ejs.renderFile(file, data, (err, result) => {
            if (err) {
                module.exports.log.error(err);
                resolve('')
            } else {
                // console.log(result)
                
                resolve(result);
            }
        });
    });
}

