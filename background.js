chrome.app.runtime.onLaunched.addListener(function(launchData) {
    var opt = {
        width: 1024,
        height: 640
    };

    chrome.app.window.create('index.html', opt, function (win) {
        win.launchData = launchData;
    });
});


chrome.app.runtime.onLaunched.addListener(function(launchData) {
    var opt = {
    	// frame: "none",
        width: 505,
        height: 600
    };

    chrome.app.window.create('sandbox.html', opt, function (win) {
        win.launchData = launchData;
    });

});
