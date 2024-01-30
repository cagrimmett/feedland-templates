console.log('Made with FeedLand - https://feedland.com'); 

var ribbon = document.createElement('div'); 
ribbon.classList.add('ribbon'); 
ribbon.innerHTML = '<a href=\"https://feedland.com\" target=\"_blank\">Made with FeedLand</a></div>'; 
document.getElementsByClassName('divPageBody')[0].appendChild(ribbon);
