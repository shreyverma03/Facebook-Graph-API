$(document).ready(function()
{
	var myFacebookToken='EAACEdEose0cBAG8gp4U0kjotnBJyZBijU9QxBONZCxa1xXuGpIr9ttoX1QSjKFolNP2vIs7kyZBCKETGZB9W6zZBx5SYo4l0AnBigG3ybVjPRLrk1OfZBllbmn3Vf2ZAoTm4hjiHE79aIO7pebh5Cjlw7nIkJ7Tf54zYFPUwUuVlqpztMwrvJLxIuOnLj71qxoZD';
    $.ajax('https://graph.facebook.com/me?fields=picture,posts,name&access_token='+myFacebookToken,{
                success : function(response){
                        console.log(response.posts);
                        var post;
                        var z=1;
                   for(post=0;post<10;post++){
                        
						//console.log('#post'+(z++));
                       if(response.posts.data[post].story!=undefined ||response.posts.data[post].story!=null )
                        {
                      $('#post'+(z++)).text(response.posts.data[post].story);
                        }
                       //console.log();

                    }
                },
                 error : function(request,errorType,errorMessage){
                    alert(request);
                    alert(errorType);
                    document.write('<h2>'+response.userMessage+'</h2>')
                }
            }//end argument list 
        );
    }
);