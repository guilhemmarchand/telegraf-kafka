require(['jquery',
    "splunkjs/mvc/utils",
    "splunkjs/mvc/searchmanager"
], function($,
    utils,
    SearchManager) {

    // Simple verification to internal access
    var desiredSearchName = "checkaudit"
    if (typeof splunkjs.mvc.Components.getInstance(desiredSearchName) == "object") {
        splunkjs.mvc.Components.revokeInstance(desiredSearchName)
    }
    var sm = new SearchManager({
        "id": desiredSearchName,
        "cancelOnUnload": true,
        "latest_time": "",
        "status_buckets": 0,
        "earliest_time": "-15m",
        "search": "search index=_internal | head 100",
        "app": utils.getCurrentApp(),
        "preview": true,
        "runWhenTimeIsUndefined": false,
        "autostart": true
    }, {
        tokens: true,
        tokenNamespace: "submitted"
    });
    sm.on('search:done', function(properties) {
        var searchName = properties.content.request.label
        if (properties.content.resultCount == 0) {
            // Show no data modal
            $("#modal_check_nodata").modal()
        }
    });
})