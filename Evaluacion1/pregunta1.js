const edad = () => {
    años =new Date().getFullYear() - parseInt(document.getElementById("age"))
    return años
}
edad()