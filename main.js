const scriptURL = 'https://script.google.com/macros/s/AKfycbyt_A7p1a0gWIrqNP7RL-BD4NtVPxxOxdE6RJOyppIQ31FDUQ330kyzbSkLde7yoOW-Kw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

function isInputNumber(evt){
                
  var ch = String.fromCharCode(evt.which);
  
  if(!(/[0-9]/.test(ch))){
      evt.preventDefault();
  }
}