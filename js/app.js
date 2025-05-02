function clearChecklist(id) {
  const form = document.getElementById(id);
  const checkboxes = form.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(box => box.checked = false);
}


// Ripple effect for .main-button and .sub-button

document.querySelectorAll('.main-button, .sub-button').forEach(button => {
  button.addEventListener('click', function (e) {
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  });
});
