require(['jquery',
    "splunkjs/mvc/utils",
    "splunkjs/mvc/searchmanager"
], function($,
    utils,
    SearchManager) {
    var desiredSearchName = "checktags"
    if (typeof splunkjs.mvc.Components.getInstance(desiredSearchName) == "object") {
        splunkjs.mvc.Components.revokeInstance(desiredSearchName)
    }
    var sm = new SearchManager({
        "id": desiredSearchName,
        "cancelOnUnload": true,
        "latest_time": "",
        "status_buckets": 0,
        "earliest_time": "-5m",
        "search": "| mcatalog values(env) as env values(label) as label where `telegraf_kafka_index` | eval env_is_valid=if(match(env, \"\\s\"), \"false\", \"true\"), label_is_valid=if(match(label, \"\\s\"), \"false\", \"true\") | fields env_is_valid, label_is_valid",
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
            //console.log(searchName, "gave no results", properties)
            // Show no data modal
            $("#modal_check_nodata").modal()
        } else {
            var results = splunkjs.mvc.Components.getInstance(searchName).data('results', {
                output_mode: 'json',
                count: 0
            });
            results.on("data", function(properties) {
                var searchName = properties.attributes.manager.id
                var data = properties.data().results
                var env_is_valid
                var label_is_valid
                for (var i = 0; i < data.length; i++) {
                    env_is_valid = data[i].env_is_valid
                    label_is_valid = data[i].label_is_valid
                    //console.log("env_is_valid is: " + env_is_valid + " label_is_valid is: " + label_is_valid)
                    if (env_is_valid == "false" || label_is_valid == "false") {
                        //console.log("configCheck failed")
                        $("#modal_tagcheck_error").modal()
                    } else {
                        //console.log("configCheck passed")
                        return;
                    }
                }
            })
        }
    });
})