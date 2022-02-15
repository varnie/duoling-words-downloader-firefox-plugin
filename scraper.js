var tbl = document.body.getElementsByTagName("table")
if (tbl && tbl.length === 1) {
    tbl = tbl[0];
    var thead = tbl.getElementsByTagName("thead")
    if (thead && thead.length === 1) {
        var ths = thead[0].getElementsByTagName("th")
        if (ths && ths.length === 4) {
            if (ths[0].textContent.toLowerCase() === "word") {
                var words = [];
                for (var i = 1; i < tbl.rows.length; i++) {
                    var first_col = tbl.rows[i].cells[0];
                    var word = first_col.textContent.toLowerCase().trim();
                    words.push(word);
                }
                var unique_words = [...new Set(words)];
                unique_words;
            }
        }
    }
}