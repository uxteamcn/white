

	$.jribbble.setToken('1b1504f42efa2dae75fc27332ebc1ad69e11b2425325ab83e5a9916dc5e8dcbf');

    /*
      Jribbble methods make ajax requests to the Dribbble API. When
      the requests complete, a Promise is returned. Use `then` to take an action
      on the response from the server.
    */
    $.jribbble.users('wenjunliao').shots({per_page: 20}).then(function(shots) {
  var html = [];

      shots.forEach(function(shot) {
        // See the Dribbble docs for all available shot properties.
        html.push('<li class="shots--shot col-lg-3 col-md-4 col-sm-6">');
        html.push('<a href="' + shot.html_url + '">');
        html.push('<img class="img-responsive" src="' + shot.images.normal + '">');
        html.push('</a></li>');
      });

      $('.shots').html(html.join(''));
    });
