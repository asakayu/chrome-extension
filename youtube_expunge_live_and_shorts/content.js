

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
function start(){
    const selector = "#dismissible.style-scope ytd-grid-video-renderer"
    waitForElement(selector, expunge)
}
window.addEventListener('load', start, false)