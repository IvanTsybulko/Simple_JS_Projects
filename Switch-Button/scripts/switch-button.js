function switchButton() {
  const buttonElement = document.querySelector('.OnOff');

  if(buttonElement.innerText === 'On')
  {
    buttonElement.innerHTML = 'Off';
    buttonElement.classList.add('is-off');
  }
  else
    {
      buttonElement.innerHTML = 'On';
      buttonElement.classList.remove('is-off');
    }
}

function switchLightblub()
{
  var blub = document.getElementById('js.lightblub');
  const buttonElement = document.querySelector('.OnOff');

  if(buttonElement.innerHTML === 'On')
    blub.src = "images/on.png";
  else
    blub.src = "images/off.png";
}