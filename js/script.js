
const form = document.querySelector('#form')
const searchfield = document.querySelector('#searchfield')

form.addEventListener('submit', renderGifs)


    /* 
        user enters key word
        on submit
        add keyword to api url
        loop through all objects 
            create img tag 
            add src
            add class
            append
    */

function renderGifs(e) {
    e.preventDefault()
    const keyword = searchfield.value
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=dXEg9tx5ZJvJFMyxlI6ocE8zXoMEiQsi&q=${keyword}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
    .then(response => response.json())
    .then(data => {
        let objLen = Object.keys(data.data).length
        if (objLen < 50) {
            objLen = 50
        }
        for (let i = 0; i < objLen - 1; i++) {
           document.querySelector('#gifs').innerHTML += `
            <div class="gifs_container">
                    <img src="${data.data[i].images.original.url}" alt="">
                </div>
            `
        }
    })
    searchfield.value = ''

}