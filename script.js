
function validateForm() {
  let namePattern = new RegExp('([A-Z])\w+');
  let form = document.forms['basicForm'];
  if (namePattern.test(form['firstname'].value) === false) {
    form['firstname'].className = 'invalid';
    return false;
  }
  if (namePattern.test(form['lastname'].value) === false) {
    form['lastname'].className = 'invalid';
    return false;
  }
  return true;
}
