document.addEventListener('DOMContentLoaded', function() {
  const quantityInput = document.getElementById('quantity');
  const productSelect = document.getElementById('product');
  const calculateButton = document.getElementById('calculate');
  const resultParagraph = document.getElementById('result');

  calculateButton.addEventListener('click', () => {
    const quantity = parseInt(quantityInput.value);
    const price = parseInt(productSelect.value);

    if (quantity <= 0 || isNaN(quantity)) {
      resultParagraph.textContent = 'Некорректное количество товара!';
      return;
    }

    const totalCost = quantity * price;
    resultParagraph.textContent = `Стоимость заказа: ${totalCost.toFixed(2)} руб.`;
  });
});

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Попытайтесь позже. Данные некуда отправлять");
})

function setCursorPosition(pos, e) {
  e.focus();
  if (e.setSelectionRange) e.setSelectionRange(pos, pos);
  else if (e.createTextRange) {
    var range = e.createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    range.select()
  }
}

function mask(e) {
  var matrix = this.placeholder, x
  i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
  def.length >= val.length && (val = def);
  matrix = matrix.replace(/[_\d]/g, function (a) {
    return val.charAt(i++) || "_"
  });
  this.value = matrix;
  i = matrix.lastIndexOf(val.substr(-1));
  i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
  setCursorPosition(i, this)
}

window.addEventListener("DOMContentLoaded", function () {
  var input = document.querySelector("#phone");
  input.addEventListener("input", mask, false);
});

$(document).ready(function () {
  $("#Form").validate({
    rules: {
      phone: {
        required: true,
        phoneRU: true
      }
    },
    messages: {
      phone: {
        required: "Пожалуйста, введите номер телефона.",
        phoneRU: "Неверный формат номера телефона."
      }
    }
  });
});
