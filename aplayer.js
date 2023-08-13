const ap = new APlayer({
    container: document.getElementById('aplayer'),
    audio: [{
        name: 'name',
        artist: 'artist',
        // url: 'https://echeverra.cn/wp-content/uploads/2022/05/周杰伦-半岛铁盒.mp3',
        // url: 'http://127.0.0.1:5244/ali_o/30-Interest/1-Music/Steerner%20-%20Sky.mp3',
        url: 'http://127.0.0.1:5244/d/ali_o/30-Interest/1-Music/2-Japanese/%E6%A6%8A%E5%8E%9F%E3%82%86%E3%81%84%20-%20%E5%88%BB%E5%8F%B8%E3%83%AB%E5%8D%81%E4%BA%8C%E3%83%8E%E7%9B%9F%E7%B4%84.mp3?sign=J29grKhrYx7FdlupXrvVfhJO0vBfzbBK09Uv5FcUVjM=:0',
        cover: 'cover.jpg'
    }]
});

ap.init();