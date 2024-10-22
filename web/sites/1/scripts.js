document.addEventListener('DOMContentLoaded', function() {
      const quantityInput = document.getElementById('quantity');
      const serviceTypeRadios = document.querySelectorAll('input[name="serviceType"]');
      const productOptionsSelect = document.getElementById('productOption');
      const productPropertyCheck = document.getElementById('productPropertyCheck');
      const resultParagraph = document.getElementById('result');

      const productOptionsContainer = document.getElementById('productOptions');
      const productPropertyContainer = document.getElementById('productProperty');

      function calculateTotalCost() {
        const quantity = parseInt(quantityInput.value);
        let basePrice = 0;
        let optionPrice = 0;
        let propertyPrice = 0;

        for (const radio of serviceTypeRadios) {
          if (radio.checked) {
            basePrice = parseInt(radio.value);
          }
        }

        if (productOptionsSelect) {
          optionPrice = parseInt(productOptionsSelect.value);
        }

        if (productPropertyCheck) {
          propertyPrice = productPropertyCheck.checked ? parseInt(productPropertyCheck.value) : 0;
        }

        const totalCost = (basePrice + optionPrice) * quantity + propertyPrice;
        resultParagraph.textContent = `Стоимость заказа: ${totalCost.toFixed(2)} руб.`;
      }

      function updateForm() {
        for (const radio of serviceTypeRadios) {
          if (radio.checked) {
            const serviceType = parseInt(radio.value);
            switch (serviceType) {
              case 100:
                productOptionsContainer.style.display = 'none';
                productPropertyContainer.style.display = 'none';
                break;
              case 150:
                productOptionsContainer.style.display = 'block';
                productPropertyContainer.style.display = 'none';
                break;
              case 200:
                productOptionsContainer.style.display = 'none';
                productPropertyContainer.style.display = 'block';
                break;
                case 250:
                productOptionsContainer.style.display = 'block';
                productPropertyContainer.style.display = 'block';
                break;
            }
          }
        }
        calculateTotalCost(); // Пересчет при изменении типа услуги
      }

      // При загрузке страницы и изменении типа услуги
      updateForm();

      // При изменении количества, опции или свойства
      quantityInput.addEventListener('input', calculateTotalCost);
      productOptionsSelect.addEventListener('change', calculateTotalCost);
      productPropertyCheck.addEventListener('change', calculateTotalCost);

      for (const radio of serviceTypeRadios) {
        radio.addEventListener('change', updateForm);
      }
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

