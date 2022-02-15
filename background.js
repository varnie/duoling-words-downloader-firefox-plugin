function clickHandler(tab) {
    function onExecuted(returned_val) {
        if (Array.isArray(returned_val) && returned_val.length > 0) {
            var src_data = returned_val[0]

            const BOM = new Uint8Array([0xEF, 0xBB, 0xBF]);
            var blob = new Blob([BOM, src_data.join("\n")], {
                encoding: 'UTF-8',
                type: 'text/plain;charset=UTF-8'
            });
            var url = URL.createObjectURL(blob);

            browser.downloads.download({
                url: url,
                filename: 'duolingo_words.txt',
                conflictAction: 'uniquify'
            }).then(function(val) {
                console.log(`Started downloading: ${val}`);
            }, function (val) {
                console.log(`Download failed: ${val}`);
            });
        } else {
            console.log("invalid data received")
        }
    }

    browser.tabs.executeScript({
        file: "scraper.js"
    }).then(onExecuted, function(error){
        console.log(`Error: ${error}`);
    });
}

browser.pageAction.onClicked.addListener(clickHandler);
