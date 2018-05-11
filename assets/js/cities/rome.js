$.ajax({
    url : 'https://api.unsplash.com/photos/random?collections=2097310&fit=clip&w=1920&h=1080&client_id=yourunsplashAPIkeygoeshere',
    type : 'GET',
    dataType : 'json',
    success : function(data) {
      console.log(data);
          
      // Get photo url
      var imageurl = data.urls.custom;
      // Get photographer name
      var photog = data.user.name;
      // Get link to photographer portfolio
      var photogurl = data.user.links.html;
      
      
      // Hide the images on load
      $('.image-container').hide();
  
      // Get a random image from Unsplash and fade it in on load
      $('.rome').css({
        // serves a random image from this collection on Unsplash.com
        'background-image' : 'url(' + imageurl + ')'
      }).fadeIn(1500);
      
   // Credit photographer in main menu
   $('.photog-credit').html('Photog // <a href="' + photogurl + '?utm_source=yourunsplashappnamegoeshere&utm_medium=referral&utm_campaign=api-credit" target="_blank">' + photog + '</a>');
}

});
