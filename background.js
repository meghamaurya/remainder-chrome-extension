chrome.alarms.onAlarm.addListener(() => {
    chrome.notifications.create(
        {
            type: "basic",
            iconUrl: "favicon.png",
            title: "Stay Hydrated",
            siltent: false
        },
        () => { }
    )
})

chrome.runtime.onMessage.addListener(
    function (request, sender) {
        console.log(request);
        if (request.time)
            createAlarm();
    }
);

function createAlarm() {
    chrome.alarms.create(
        "drink_water",
        {
            delayInMinutes: 1,
            periodInMinutes: 1
        }
    )
}