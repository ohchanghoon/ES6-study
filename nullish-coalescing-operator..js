// Nullish-Coalescing-operator
// ❌ Bad Code
function printMessage(text) {
  let message = text;
  if (text === null || text === undefined) {
    message = 'Nothing to display 😀';
  }
  console.log(message);
}

printMessage('hello');
printMessage(null);
printMessage(undefined);

// ✅ Good Code
function printMessage(text) {
  const message = text ?? 'Nothing to display 😀';
  console.log(message);
}

//  default parameter is only for undefined
function printMessage(text = 'Nothing to display 😀') {
  console.log(text);
}

printMessage('hello');
printMessage(null);
printMessage(undefined);
printMessage(0);
