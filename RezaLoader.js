
+function($, window, document, undefined){
  var container = '<div class="toast-wrap"></div>';
  var context = '<div class="toast-content"></div>';
  var wrapSelector = ".toast-wrap";
  var toastSelector = ".toast-content";
  var styles = '.toast-wrap{position:fixed;top:0;left:0;right:0;bottom:0;z-index:9999;margin:auto;background:rgba(0,0,0,.2);}.toast-content{position:absolute;top: 50%;left: 50%;-webkit-transform: translate(-50%,-50%);-moz-transform: translate(-50%,-50%);-ms-transform: translate(-50%,-50%);-o-transform: translate(-50%,-50%);transform: translate(-50%,-50%);padding: 10px;background:rgba(0, 0, 0, 0.00);color:#fff;-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;max-width: 300px;min-width: 54px;text-align:center;cursor: default;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}.toast-img{display:block;max-width: 35px;max-height: 35px;margin: 0 auto 5px;}.success{display:block;width: 12px;height: 20px;border-right:6px solid #fff;border-bottom: 8px solid #fff;transform: rotate(45deg);-webkit-transform:rotate(45deg);margin: 0 auto 5px;}.error{display:block;width: 24px;height: 24px;font-size: 20px;color:rgba(255,255,255,.8);border:2px solid rgba(255,255,255,.8);border-radius: 50%;-webkit-border-radius: 50%;margin: 0 auto 5px;line-height:20px;text-align: center}.loading{position:relative;margin: 0 auto 5px;display:block;width:20px;height: 20px;border: 2px solid #fff;border-radius: 50%;-webkit-border-radius: 50%;animation: loading 1s linear infinite;}.loading:before{content: "";display: block;position: absolute;top: -5px;left: 0;width: 10px;height: 10px;background: #fff;border-radius: 50%; }@keyframes loading{0%{transform: rotate(0deg);}50%{transform: rotate(180deg);}100%{transform: rotate(360deg);}}@-webkit-keyframes loading{0%{-webkit-transform: rotate(0deg);}50%{-webkit-transform: rotate(180deg);}100%{-webkit-transform: rotate(360deg);}}';
  var Toast = {
    default : {
      "title": "Loading...", // <String>..."
      "icon": "loading", // <String> "success", "loading", "none", "error"，"loading"
      "image": "", // <String>，image  icon
      "duration": 1500, // <Number>：1500
    },
    showToast: function (opt) {
      var _this = this;
      this.options = $.extend({}, this.default, opt);
      var wrap = $("body").append(container);
      $(wrapSelector).append(context);
      $("<style></style>").text(styles).appendTo($(wrapSelector));
      if(this.options.image !== ""){
        $(toastSelector).append('<img src="'+this.options.image+'" class="toast-img" alt="toast...">');
      } else {
          var befDiv = $(toastSelector).append('<span class="toast-icon"></span>');
          var Div = $(befDiv).append('<div ></div>');
          
        switch(this.options.icon){
          case "success":
            $(".toast-icon").addClass('success');
            break;
          case "error":
            $(".toast-icon").addClass('error');
            $(".toast-icon").html("&times;");
            break;
          case "loader":
              $(Div).addClass('RezaLoaderPulse');
              $(Div).append('<div></div><div></div>')
                break;
          case "none":
            $(".toast-icon").remove();
            break;
          default:
            $(".toast-icon").addClass('loading');
            break;
        }
      }

      if ($(".loaderTitle").length) {
          $(".loaderTitle").remove();
      }
    
      $("body").find('.toast-wrap').append('<p class="loaderTitle" style="position:relative;top:53%;text-align:center;color:white"></p>').find('p').html(this.options.title);

      if(this.options.duration>0){
        setTimeout(function(){
          _this.hideToast();
        }, this.options.duration);
      }
    },
    hideToast: function(){
      if($(wrapSelector).length){
        $(wrapSelector).fadeOut(500);
        setTimeout(function(){
          $(wrapSelector).empty().remove()
        },1000);
      } else {
        return;
      }
    }
  };
  $.Toast = Toast;
}(jQuery, window, document);
