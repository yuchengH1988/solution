function ErrorMessage (message) {
  this.name = 'ErrorMessage';
  this.message = message;
}

ErrorMessage.prototype = new Error();
ErrorMessage.prototype.constructor = ErrorMessage;

ErrorMessage.prototype.showError = function () {
  return this.name + ': ' + this.message ;
}

exports.ErrorMessage = ErrorMessage
