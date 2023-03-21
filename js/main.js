function navigate(id) {
    let activePages = document.getElementsByClassName('active')
    for (let page of activePages) {
        page.classList.remove('active')
    }
    let newPage = document.getElementById(id)
    newPage.classList.add('active')
}