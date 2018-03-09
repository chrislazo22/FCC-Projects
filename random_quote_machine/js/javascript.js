function getQuote(){
  $.ajax({
    url: '/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
    success: function(data) {
      var post = data.shift();
      $('#quote-content').html(post.content);
    }
  })
}

$(document).ready(function(){
  getQuote();
  $('#new-quote').on('click', getQuote);
});
