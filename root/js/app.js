function clearChecklist(id) {
  const form = document.getElementById(id);
  const checkboxes = form.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(box => box.checked = false);
}