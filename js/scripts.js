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
         
            $("#ma1").hover(function() {
            $(".myfirstwork1").show();
             } , function() {
                $(".myfirstwork1").hide();
            });

            $("#ma2").hover(function() {
            $(".myfirstwork2").show();
             } , function() {
                $(".myfirstwork2").hide();
            });

            $("#ma3").hover(function() {
            $(".myfirstwork3").show();
             } , function() {
                $(".myfirstwork3").hide();
            });

             $("#ma4").hover(function() {
            $(".myfirstwork4").show();
             } , function() {
                $(".myfirstwork4").hide();
            });
 
            $("#ma5").hover(function() {
            $(".myfirstwork5").show();
             } , function() {
                $(".myfirstwork5").hide();
            });
            
            $("#ma6").hover(function() {
            $(".myfirstwork6").show();
             } , function() {
                $(".myfirstwork6").hide();
            });

            $("#ma7").hover(function() {
            $(".myfirstwork7").show();
             } , function() {
                $(".myfirstwork7").hide();
            });

             $("#ma8").hover(function() {
            $(".myfirstwork8").show();
             } , function() {
                $(".myfirstwork8").hide();
            });

           $(".form-control").click(function() {
          $("#initially-showing").alert("johndoe we have received your message. Thank you fro reaching out to us.");
        });

      });
  