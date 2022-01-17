import { initialPageLoad } from  "./initial.js";

function returnHome() {
    let allContent = document.getElementById('content');

    while (allContent.firstChild) {
        allContent.removeChild(allContent.firstChild);
    }

    initialPageLoad();
}

export {returnHome}