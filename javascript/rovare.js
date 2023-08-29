// Variables for the anonymous function
const textInputForName = document.querySelector('#yourName')
const submitButton = document.querySelector('#submit')
const messageDiv = document.querySelector('#messageDiv')

// Eventlistener for the button
submitButton.addEventListener('click', () => {
  const name = textInputForName.value
  const greeting = 'Hej'
  const greetingRovarSprak = translateToRovarSprak(greeting)
  const nameRovarsprak = translateToRovarSprak(name)
  messageDiv.innerText = (greetingRovarSprak + ' ' + nameRovarsprak + '!')
  showRovarImage()
})

/**
 * Function that translates a text to rovarsprak
 *
 * @param {string} textToTranslate
 * @return {string} rovarsPrak
 */
const translateToRovarSprak = (textToTranslate) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'å', 'ä', 'ö']
  let rovarSprak = ''
  for (const letter of textToTranslate) {
    if (vowels.includes(letter)) {
      rovarSprak += letter
    } else {
      rovarSprak += letter + 'o' + letter.toLowerCase()
    }
  }
  return rovarSprak
}

// Function that shows the rovar image
const showRovarImage = () => {
  const rovarImage = document.querySelector('#rovarImage')
  rovarImage.classList.remove('d-none')
}
