(function($) {
    "use strict";

    $(document).ready(function() {
        $("#download").on("click", function() {
            // url
            var twitter_url = $("#url").val();

            if (validate_twitter_url(twitter_url)) {
                $("#spin").show();
            } else {
                alert('Please enter a valid Twitter post url');
                $("#spin").hide();
                return false;
            }
        });

        function validate_twitter_url(url) {
          const twitterPostUrlRegex = /http(s)?:\/\/((www\.)|(mobile\.))?twitter\.com\/([a-z0-9_]{1,20})\/status\/([0-9])/im
          return twitterPostUrlRegex.test(url);
        }
    });

})(jQuery);
