const textInputForName = document.querySelector('#yourName')
const submitButton = document.querySelector('#submit')

submitButton.addEventListener('click', () => {
  const name = textInputForName.value
  const greeting = 'Hej'
  const greetingRovarSprak = translateToRovarSprak(greeting)
  const namnRovarsprak = translateToRovarSprak(name)
  console.log(greetingRovarSprak + ' ' + namnRovarsprak)
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
