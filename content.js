var titleNode = document.querySelector('#productTitle');
var authorNode = document.querySelector('.contributorNameID');

if (!titleNode) {
    titleNode = document.querySelector('.kindleBanner i')
}

if (!authorNode) {
    authorNode = document.querySelector('.contributorNameTrigger a')
}

var title = titleNode.textContent;
var author = authorNode.textContent;

chrome.runtime.sendMessage({data: {author: author, title: title}}, function(response) {});
