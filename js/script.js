fetch('https://api.giphy.com/v1/gifs/search?api_key=dXEg9tx5ZJvJFMyxlI6ocE8zXoMEiQsi&q=cat&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips')
    .then(response => response.json())
    .then(data => {
        const imgSrc = data.data[0].images.original.url
        const gif = document.createElement('img')
        gif.src = imgSrc
        console.log(gif)
        document.querySelector('#gifs').appendChild(gif)
    })