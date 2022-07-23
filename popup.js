
const btn = document.getElementById('btn');
btn.addEventListener("click", () => {
    chrome.runtime.sendMessage({ time: "1" }, function (response) {
        console.log(response, "hi");
    })
})