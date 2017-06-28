
$(document).ready(function()
{
$("a").click(function()
{
 var myFacebookToken='EAACEdEose0cBAG8gp4U0kjotnBJyZBijU9QxBONZCxa1xXuGpIr9ttoX1QSjKFolNP2vIs7kyZBCKETGZB9W6zZBx5SYo4l0AnBigG3ybVjPRLrk1OfZBllbmn3Vf2ZAoTm4hjiHE79aIO7pebh5Cjlw7nIkJ7Tf54zYFPUwUuVlqpztMwrvJLxIuOnLj71qxoZD';
 $.ajax('https://graph.facebook.com/me?access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    $("#email").text(response.email);
                    $("#bday").text(response.birthday);
                    $("#about").text(response.quotes);
                    $("#pid").html('<a style="background-color:yellow;font-size:1em;position:relative;" target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                    $("#city").text(response.hometown.name);
                    $("#name").text(response.name);
                    $("#relationship").text(response.relationship_status);
                    $("#education").html('<h4 style="background-color:yellow;">'+response.education[0].school.name+'</h4><h4 style="background-color:yellow;position:relative;">'+response.education[1].school.name+'</h4>');
                   
                     $("#photo").html('<img  style="height:90%;width:60%;" class="img-responsive" src=http://graph.facebook.com/'+response.id+'/picture>');


                },
                 error : function(request,errorType,errorMessage){
                    console.log(request);
                    console.log(errorType);
                    document.write('<h2>'+response.userMessage+'</h2>')
                }
            }//end argument list 



    );// end ajax call 
}
);   // end ajax call 
}
);