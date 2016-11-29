chrome.browserAction.onClicked.addListener(function(){

   xmlhttp=new XMLHttpRequest();
   xmlhttp.onreadystatechange=function()
   {
       if (xmlhttp.readyState==4 && xmlhttp.status==200)
       {
           var dataArray = xmlhttp.responseText.split("\n");
           var randomIndex = Math.floor(Math.random() * dataArray.length);
           chrome.tabs.create({ url: dataArray[randomIndex] });
       }
   }
   var theUrl = "https://raw.githubusercontent.com/abdelhai/devblogs/master/dataset";
   xmlhttp.open("GET", theUrl, false );
   xmlhttp.send();

});
