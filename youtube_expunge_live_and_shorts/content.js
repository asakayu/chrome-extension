
function expunge(){
    document.querySelectorAll("#dismissible.style-scope ytd-grid-video-renderer").forEach( node => {
        // console.log(node)

        const liveText = node.querySelector("#metadata-line")?.children[1]?.textContent
        if(!liveText){ return; }
        if(liveText.match("配信済み")){
            // console.log(node)
            node.remove()
            return;
        }
        const title = node.querySelector("#video-title")?.getAttribute("href")
        if(title.match("/shorts/")){
            // console.log(node)
            node.remove()
            return;
        }
    })

}

http://once-and-only.com/programing/javascript/js%E3%81%A7%E5%AF%BE%E8%B1%A1%E3%81%AEdom%E3%81%8C%E5%87%BA%E7%8F%BE%E3%81%99%E3%82%8B%E3%81%BE%E3%81%A7%E5%BE%85%E3%81%A4%EF%BC%88javascript%EF%BC%89/
function waitForElement(selector, callback, intervalMs=50, timeoutMs=5000) {
    const startTimeInMs = Date.now();
    findLoop();

    function findLoop() {
        if (document.querySelector(selector) != null) {
            callback();
            return;
        } else {
            setTimeout(() => {
                if (timeoutMs && Date.now() - startTimeInMs > timeoutMs) return;
                findLoop();
            }, intervalMs);
        }
    }
}
function start(){
    const selector = "#dismissible.style-scope ytd-grid-video-renderer"
    waitForElement(selector, expunge)
}
window.addEventListener('load', start, false)