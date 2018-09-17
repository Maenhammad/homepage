const ErrorDisplay = require('../../show_errors');
const POST_API = 'https://rixguajbg3.execute-api.us-east-1.amazonaws.com/dev/details';

const BankingDetailsForm = Backbone.View.extend({

  el: 'form.unsubscribe-form',

  events: {
    'submit': 'submit',
  },

  initialize() {
    window.el = this;
  },

  showMessage() {
    $('div.banking_details_form-fields').hide();
    $('div.confirmation-message').show();
  },

  submit(e) {
    e.preventDefault();

    let data = {};

    ['email', 'paypal_email', 'bic', 'iban', 'address'].forEach( field => {
      data[field] = this.$(`textarea[name="${field}"], input[name="${field}"]`).val();
    });

    this.$('.button').addClass("button--disabled");

    $.ajax({
      url: POST_API,
      data: JSON.stringify(data),
      dataType: "json",
      contentType: 'application/json',
      method: 'POST',
    })
    .done( (resp) => this.showMessage() );
  },
});

module.exports = BankingDetailsForm;
