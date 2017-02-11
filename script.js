
function validateForm() {
  let form = document.forms['basicForm'];
  if ( form['firstname'].value === '' ) {
    form['firstname'].appendChild('<div>not valid</div>');
    form['firstname']
    return false;
  }
  return true;
}
