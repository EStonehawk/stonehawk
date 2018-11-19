

      // Function to open modal
      function openModal1(){
        simpleModal1.style.display = 'block';
      }

      function openModal2(){
        simpleModal2.style.display = 'block';
      }

      function openModal3(){
        simpleModal3.style.display = 'block';
      }

      // Function to close modal
      function closeModal1(){
        simpleModal1.style.display = 'none';
      }

      function closeModal2(){
        simpleModal2.style.display = 'none';
      }

      function closeModal3(){
        simpleModal3.style.display = 'none';
      }


      paypal.Button.render({

             // Set your environment

             env: 'sandbox', // sandbox | production

             // Specify the style of the button

             style: {
                 label: 'checkout',  // checkout | credit | pay | buynow | generic
                 size:  'responsive', // small | medium | large | responsive
                 shape: 'pill',   // pill | rect
                 color: 'gold'   // gold | blue | silver | black
             },

             // PayPal Client IDs - replace with your own
             // Create a PayPal app: https://developer.paypal.com/developer/applications/create

             client: {
                 sandbox:    'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
                 production: '<insert production client id>'
             },

             // Wait for the PayPal button to be clicked

             payment: function(data, actions) {
                 return actions.payment.create({
                     payment: {
                         transactions: [
                             {
                                 amount: { total: '0.01', currency: 'USD' }
                             }
                         ]
                     }
                 });
             },

             // Wait for the payment to be authorized by the customer

             onAuthorize: function(data, actions) {
                 return actions.payment.execute().then(function() {
                     window.alert('Payment Complete!');
                 });
             }

         }, '#paypal-button-container1');

         paypal.Button.render({

          // Set your environment

          env: 'sandbox', // sandbox | production

          // Specify the style of the button

          style: {
              label: 'checkout',  // checkout | credit | pay | buynow | generic
              size:  'responsive', // small | medium | large | responsive
              shape: 'pill',   // pill | rect
              color: 'gold'   // gold | blue | silver | black
          },

          // PayPal Client IDs - replace with your own
          // Create a PayPal app: https://developer.paypal.com/developer/applications/create

          client: {
              sandbox:    'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
              production: '<insert production client id>'
          },

          // Wait for the PayPal button to be clicked

          payment: function(data, actions) {
              return actions.payment.create({
                  payment: {
                      transactions: [
                          {
                              amount: { total: '0.01', currency: 'USD' }
                          }
                      ]
                  }
              });
          },

          // Wait for the payment to be authorized by the customer

          onAuthorize: function(data, actions) {
              return actions.payment.execute().then(function() {
                  window.alert('Payment Complete!');
              });
          }

      }, '#paypal-button-container2');


      paypal.Button.render({

             // Set your environment

             env: 'sandbox', // sandbox | production

             // Specify the style of the button

             style: {
                 label: 'checkout',  // checkout | credit | pay | buynow | generic
                 size:  'responsive', // small | medium | large | responsive
                 shape: 'pill',   // pill | rect
                 color: 'gold'   // gold | blue | silver | black
             },

             // PayPal Client IDs - replace with your own
             // Create a PayPal app: https://developer.paypal.com/developer/applications/create

             client: {
                 sandbox:    'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
                 production: '<insert production client id>'
             },

             // Wait for the PayPal button to be clicked

             payment: function(data, actions) {
                 return actions.payment.create({
                     payment: {
                         transactions: [
                             {
                                 amount: { total: '0.01', currency: 'USD' }
                             }
                         ]
                     }
                 });
             },

             // Wait for the payment to be authorized by the customer

             onAuthorize: function(data, actions) {
                 return actions.payment.execute().then(function() {
                     window.alert('Payment Complete!');
                 });
             }

         }, '#paypal-button-container3');

    $(document).ready(function() {
      'use strict';

      $('.portfolio').on('click', function() {
        $(this).siblings('.hovereffect').toggleClass('hovered');
        $(this).toggleClass('hovered');
      });
    });
