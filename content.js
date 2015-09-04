var titleNode = document.querySelector('#productTitle');
var authorNode = document.querySelector('.contributorNameID');

var authorNodes = document.querySelectorAll('.contributorNameID');

if (authorNodes == null) {
    authorNodes = document.querySelectorAll('.author a');
}

var authorList = [];
for (var i = 0; i < authorNodes.length; i++) {
    var author = authorNodes[i].textContent.toUpperCase();
    authorList[i] = author;
}

if (!titleNode) {
    titleNode = document.querySelector('.kindleBanner i');
}

if (!authorNode) {
    authorNode = document.querySelector('.author a');
}

var title = titleNode.textContent;
var author = authorNode.textContent;

chrome.runtime.sendMessage({data: {author: author, title: title, authorList: authorList}}, function(response) {});
