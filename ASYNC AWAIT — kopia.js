async function getDogImage() {
    const response = await fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
    const data = await response.json()
    console.log(data)
}

getDogImage()