
  //JavaScript SDK for facebook comments
  (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v3.2&appId=254111845261754&autoLogAppEvents=1';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



    function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginRight = "250px";
      }

    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginRight = "0";
      }

      //scroll to id

    $(document).ready(function() {
    $("a").on("click", function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;

        $("html, body").animate({
          scrollTop: $(hash).offset().top
            },
            800,
            function() {
            window.location.hash = hash;
            }
          );
        }
      });
    });

      //back to top
    window.onscroll = function() {
     scrollFunction();
      };

      function scrollFunction() {
        if (
          document.body.scrollTop > 1000 ||
          document.documentElement.scrollTop > 1000
        ) {
          document.getElementById("myBtn").style.display = "block";
        } else {
          document.getElementById("myBtn").style.display = "none";
        }
      }


$('#ticketModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggers the modal
  var recipient = button.data('pay') // Extract info from data-* attributes

  var modal = $(this)
  modal.find('.modal-title').text('Buy Tickets for ' + recipient)

})
