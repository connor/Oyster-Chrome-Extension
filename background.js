function checkForValidUrl(tab, data) {
    var title = data.title;
    var author = data.author;
    var url = 'https://www.oysterbooks.com/api/books/search?q=' + title;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.onreadystatechange = function(){
        if (xhr.status === 200 && this.readyState === 4) {
            response = JSON.parse(xhr.responseText);
            var _title = response[1].title;
            var _author = response[1].author;
            var url = response[1].url;
            if (_title === title && _author === author) {
                chrome.pageAction.show(tab.id);
                chrome.pageAction.onClicked.addListener(function(tab) {
                    chrome.tabs.create({url: url, active: true});
                });
            }
        }
    };
    xhr.send();
};

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        checkForValidUrl(sender.tab, request.data)
    }
);
