require(['jquery',
    "splunkjs/mvc/utils",
    "splunkjs/mvc/searchmanager"
], function($,
    utils,
    SearchManager) {
    var desiredSearchName = "checktags"
    if (typeof splunkjs.mvc.Components.getInstance(desiredSearchName) == "object") {
        // console.log(desiredSearchName, "already exists. This probably means you're copy-pasting the same code repeatedly, and so we will clear out the old object for convenience")
        splunkjs.mvc.Components.revokeInstance(desiredSearchName)
    }
    var sm = new SearchManager({
        "id": desiredSearchName,
        "cancelOnUnload": true,
        "latest_time": "",
        "status_buckets": 0,
        "earliest_time": "-5m",
        "search": "| mcatalog values(env) as env values(label) as label where `telegraf_kafka_index` | eval env_is_valid=if(match(env, \"\s\"), \"false\", \"true\"), label_is_valid=if(match(label, \"\s\"), \"false\", \"true\") | where env_is_value=\"false\" OR label_is_valid=\"false\"",
        "app": utils.getCurrentApp(),
        "preview": true,
        "runWhenTimeIsUndefined": false,
        "autostart": true
    }, { tokens: true, tokenNamespace: "submitted" });
    // To manually check the status at any time, open the Javascript Console and run splunkjs.mvc.Components.getInstance("exampleSearch1") -- particularly accessing attributes.data
    // You will also find fun methods like splunkjs.mvc.Components.getInstance("exampleSearch1").startSearch() and others.
    sm.on('search:done', function(properties) {
        var searchName = properties.content.request.label
        if (properties.content.resultCount != 0) {
            $("#modal_tagcheck_error").modal()
        }
    });
})