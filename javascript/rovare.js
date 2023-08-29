const textInputForName = document.querySelector('#yourName')
const submitButton = document.querySelector('#submit')

submitButton.addEventListener('click', () => {
  const name = textInputForName.value
  const greeting = `Hej ${name}!`
  console.log(greeting)
})
