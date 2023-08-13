const {tencent, netease} = require("./api");
const ejs = require("ejs");
const {renderFile} = require("./utils");
const path = require('path');

module.exports = async function (locals) {
    let ten = await tencent('995083162')
    let net = await netease('309153929')
    return renderFile(path.join(__dirname, 'templates/meting.ejs'), {ten: ten, net: net}
    ).then(renderedData => {
        return {
            path: 'meting/index.html',
            data: Object.assign({
                title: 'music list',
                content: renderedData,
                slug: `slug`
            }, ''),
            layout: ['page', 'post']
        };
    })
}