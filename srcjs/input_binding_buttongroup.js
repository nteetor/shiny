var buttonGroupInputBinding = new InputBinding();

$.extend(buttonGroupInputBinding, {
  find: function(scope) {
    return $(scope).find(".action-button-group");
  },
  _value: null,
  getValue: function(el) {
    return this._value;
  }
});
