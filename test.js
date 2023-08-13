const {tencent, netease} = require("./api");
const ejs = require("ejs");
const {renderFile} = require("./utils");





async function test(){
    let ten = await tencent('995083162')
    let net = await netease('309153929')
    let people = ['geddy', 'neil', 'alex']
    // let html = ejs.render('<%- dat[0].id %>', {dat: dat})
    // console.log(html)

    console.log(net)

    renderFile('templates/meting.ejs', {ten: ten, net: net})
}
// let dat = tencent('995083162')

// this.renderFile('templates/meting.ejs', dat)
test()