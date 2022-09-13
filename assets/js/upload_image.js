function readURL(input) {
    if (input.files && input.files[0]) {
        reader = new FileReader()

        reader.onload = (e) => {
            $('#imageResult')
                .attr('src', e.target.result)
        }
        reader.readAsDataURL(input.files[0])
    }
}

$(() => {
    $('#upload').on('change', () => {
        readURL(input)
    })
})


input = document.getElementById('upload')
infoArea = document.getElementById('upload-label')

input.addEventListener('change', showFileName)
function showFileName(event) {
    input = event.srcElement
    fileName = input.files[0].name
    infoArea.textContent = 'File name: ' + fileName
}
