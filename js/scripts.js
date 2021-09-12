      $(document).ready(function() {

        //design click
        $(".designclick").click(function() {
          $("#initially-showing").toggle();
          $("#initially-hidden").toggle();
        });

          //development click
          $(".developmentclick").click(function() {
          $("#start-showing").toggle();
          $("#start-hidden").toggle();
        });


          //product management click
          $(".productmanagement").click(function() {
          $("#fast-showing").toggle();
          $("#fast-hidden").toggle();
        });
         

            $("#ma3").hover(function() {
            $(".myfirstwork").show();
             } , function() {
                $(".myfirstwork").hide();
            });
      });
    ma