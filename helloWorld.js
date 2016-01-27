
$(function(){
  var transform = function(text){
    if(!text){return text;}
    //replace all forms of 'the' with 'the fucking'
    text = text.replace(/The /g, "The fucking ");
    text = text.replace(/THE /g, "THE FUCKING ");
    text = text.replace(/ the /g, " the fucking ");
    return text;
  };

  var fuck = function(){
    console.log("wassup");
    var textContainers = $("p");
    textContainers.each(function(){
      var c = $(this);
      c.text(transform(c.text()));
    });
  };
  console.log($("#fuck-btn"));
  fuck();
  $("#fuck-btn").on("click", fuck);
});
