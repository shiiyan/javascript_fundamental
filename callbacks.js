function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask("Do you agree?", showOK, showCancel);

function showOK() {
  alert("You agreed.");
}

function showCancel() {
  alert("You canceled the execution.");
}
