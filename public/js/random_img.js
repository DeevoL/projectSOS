
let accessKey = "_aEgMk1RoA4wLvWMbV5O6Q1lKfHvY0IX08dKy4-syzQ";
let apiKey = "AIzaSyB0VKpQEtX1YqWREyfA7tbxgBWevOeCgZc";    

let body = document.getElementsByTagName('body')[0];


document.getElementById('generate').addEventListener('click', function (event) {
    let req = new XMLHttpRequest();
    req.open('GET', 'https://api.unsplash.com/photos/random?query=ocean&client_id=' + accessKey, true);
    

    req.addEventListener('load', function () {
        if (req.status >= 200 && req.status < 400) {
            let res = JSON.parse(req.responseText);
            console.log(res)
            let img =  document.getElementById("random-img");
           img.src = res.urls.full
           img.alt = res.urls.full
           document.getElementById("img-link").href = res.urls.full
           let download_button = document.getElementById("download")
           download_button.href = res.links.download
           download_button.download = res.links.download
           download_button.innerHTML = "Download Photo by " + res.user.name + " on Unsplash" 
        }
        else {
        console.log('Error with request:' + req.statusText);
    }
})
    req.send();
    event.preventDefault();
})
