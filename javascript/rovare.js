const textInputForName = document.querySelector('#yourName')
const submitButton = document.querySelector('#submit')
const messageDiv = document.querySelector('#messageDiv')

submitButton.addEventListener('click', () => {
  const name = textInputForName.value
  const greeting = 'Hej'
  const greetingRovarSprak = translateToRovarSprak(greeting)
  const namnRovarsprak = translateToRovarSprak(name)
  messageDiv.innerText = (greetingRovarSprak + ' ' + namnRovarsprak + '!')
  showRovarImage()
})

const translateToRovarSprak = (textToTranslate) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'å', 'ä', 'ö']
  let rovarSprak = ''
  for (const letter of textToTranslate) {
    if (vowels.includes(letter)) {
      rovarSprak += letter
    } else {
      rovarSprak += letter + 'o' + letter
    }
  }
  return rovarSprak
}

const showRovarImage = () => {
  const rovarImage = document.querySelector('#rovarImage')
  rovarImage.classList.remove('d-none')
}
