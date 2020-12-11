// First Excersice 
const template = document.querySelector("#Exs1-2")
const regExp = new RegExp(/\'/, 'gi')
const regExp2 = new RegExp(/\S[a-zA-Z]\"[a-zA-Z]/, 'gi')
const text = " Lorem 'ipsum' 'dolor' aren\'t sit amet."

//Second Excersice
template.innerHTML = text.replace(regExp, '"')
template.innerHTML += text.replace(regExp2, "en't")



// Third Excersise
// A
const regName = new RegExp(/^[a-zA-Z]+$/ )
const regTel = new RegExp(/\+\d\(\d+\)\d+\-\d+/)
const regEmail = new RegExp(/([a-zA-Z\.\-0-9]+)\@[a-z-A-Z]+\.[a-zA-Z]+/)
const regComment = new RegExp(/ [a-zA-Z\.\@\-\=\$\#]+/)
const name = document.querySelector('#nameValid')
const tel = document.querySelector("#phoneValid")
const email = document.querySelector('#emailValid')
const comment = document.querySelector('#commentValid')

name.addEventListener('input', (evt) => {
    validationFn1(regName, evt)   
})
tel.addEventListener('input', (evt) => {
    validationFn1(regTel, evt)
})
email.addEventListener('input', (evt) => {
    validationFn1(regEmail, evt)
})
validationFn1 = (el, evt) => {
        if(el.test(evt.target.value) == true) {
            validation.innerHTML = validationFn(true)
            validation.style.color = 'black'
        } else {
            validation.style.color = 'red'
            validation.innerHTML = validationFn()
        }
}
validationFn = (boolean) => {
        if(boolean) {
            return `Валидация прошла успешно.`
        } else {
            return `Валидация не прошла.`
        }
}





