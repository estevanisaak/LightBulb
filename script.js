addEventListener('load', () => {
    const lightBulb = document.getElementById('lightBulb')
    const btnOnOff = document.getElementById('btnOnOff')

    function turnOnOff() {
        if (document.body.style.backgroundColor === 'white'){
            document.body.style.backgroundColor = 'black'
            lightBulb.src = 'https://s3-sa-east-1.amazonaws.com/lcpi/a13955a2-2ea4-4cbb-b830-105b3b372c37.png'
            btnOnOff.textContent = 'Turn On'
        } else {
            document.body.style.backgroundColor = 'white'
            lightBulb.src = 'https://s3-sa-east-1.amazonaws.com/lcpi/a16304a9-bdb8-4b13-b159-6ca988a581da.png'
            btnOnOff.textContent = 'Turn Off'
        }
    }

    btnOnOff.addEventListener('click', turnOnOff)
})