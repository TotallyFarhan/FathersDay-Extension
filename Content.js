let babaImages = [
    chrome.extension.getURL("images/baba1.jpeg"),
    chrome.extension.getURL("images/baba2.jpeg"),
    chrome.extension.getURL("images/baba3.jpeg"),
    chrome.extension.getURL("images/baba4.jpeg"),
    chrome.extension.getURL("images/baba5.jpeg"),
    chrome.extension.getURL("images/baba6.jpeg"),
    chrome.extension.getURL("images/baba8.jpeg"),
    chrome.extension.getURL("images/baba9.jpeg")
]



const images = document.getElementsByTagName("img");
for(let i = 0; i < images.length; i ++) {
    let index = Math.floor(Math.random() * babaImages.length);
    images[i].src = babaImages[index];
}