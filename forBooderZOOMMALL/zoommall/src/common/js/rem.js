/**
 * Created by Administrator on 2017/9/5.
 */



(function(){
  var width = document.documentElement.clientWidth;
  var styleNode = document.createElement('style')
  styleNode.innerHTML = "html{font-size:" + (width/16) + "px!important}";
  document.head.appendChild(styleNode);
})();
