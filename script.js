


window.onload = function ()
{
  var press_me_btn = document.getElementById("press_me");
  press_me_btn.onclick = displaySpinner;
  press_me.onclick = displaySpinner;
}


function displaySpinner()
{
  console.log("button pressed");

  var originalHTML = $('#press_me').html();

  $('#press_me').html(
        //`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Loading...`
        `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>` + originalHTML
      );


      function hideSpinner()
      {
        $('#press_me').html(originalHTML);
      }

       setTimeout(hideSpinner, 1000);

}
