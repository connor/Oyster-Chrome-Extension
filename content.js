var title = document.querySelector('#productTitle').textContent;
var author = document.querySelector('.contributorNameID').textContent;
chrome.runtime.sendMessage({data: {author: author, title: title}}, function(response) {});
