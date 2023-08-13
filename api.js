const axios = require('axios');

module.exports.netease = async function netease(id) {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `http://localhost:3000/user/playlist?uid=${id}`,
        headers: { }
      };

      let dat = []
      
      await axios.request(config)
      .then((response) => {
      //   console.log(JSON.stringify(response.data));
        let p = response.data['playlist']
        p.forEach(el => {
          let name = el['name']
          let id = el['id']
          let tmp =`<option value="${id}">${name}</option>`
          // console.log(tmp)
          dat.push({
            id: id,
            name: name
          })
        });
      //   console.log(p)
      })
      .catch((error) => {
        console.log(error);
      });

      return dat
}

module.exports.tencent = async function tencent(id) {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `http://localhost:3300/user/songlist?id=${id}`,
        headers: { }
      };

    let dat = []

    await axios.request(config)
    .then((response) => {
        let l = response.data['data']['list']
        // console.log(l)
        
        l.forEach(el => {
            let name = el['diss_name']
            let id = el['tid']
            let tmp =`<option value="${id}">${name}</option>`
            // console.log(tmp)
            if (id !== 0){
              dat.push({
                id: id,
                name: name
              })
            }
          });
    })
    .catch((error) => {
    console.log(error);
    });
    return dat
}

function tencentc() {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:3300/user/collect/songlist?id=995083162',
        headers: { }
      };
      
    axios.request(config)
    .then((response) => {
        let l = response.data['data']['list']
        l.forEach(el => {
            let name = el['dissname']
            let id = el['dissid']
            let tmp =`<option value="${id}">${name}</option>`
            console.log(tmp)
          });
    })
    .catch((error) => {
    console.log(error);
    });
}


// 309153929
// netease()
// async function test() {
//   let dat = await tencent('995083162')
//   console.log(dat)
// }

// test()
// tencentc()


