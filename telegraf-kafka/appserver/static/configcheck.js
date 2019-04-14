require(['jquery',
    "splunkjs/mvc/utils",
    "splunkjs/mvc/searchmanager"
], function($,
    utils,
    SearchManager) {

    // Verify tags (env, label) are using supported patterns, aka no white spaces or tabs
    // If tag check operation is successful, verify if installation is complete via the state of the Kafka inventory KVstore based lookup
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
                        // Verify if the Kafka Inventory collection is configured
                        var desiredSearchName = "checkinventory"
                        if (typeof splunkjs.mvc.Components.getInstance(desiredSearchName) == "object") {
                            splunkjs.mvc.Components.revokeInstance(desiredSearchName)
                        }
                        var sm = new SearchManager({
                            "id": desiredSearchName,
                            "cancelOnUnload": true,
                            "latest_time": "",
                            "status_buckets": 0,
                            "earliest_time": "-5m",
                            "search": "| inputlookup kafka_infra_inventory",
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
                                $("#modal_time_to_configure").modal()

                                require(['splunkjs/mvc/simplexml/ready!'], function() {
                                    require(['splunkjs/ready!', 'splunkjs/mvc'], function(mvc) {

                                        // For each button with the class "custom-sub-nav"
                                        $('.update-collection').each(function() {
                                            var $btn_group = $(this);

                                            /* for each button in this nav:
                                                    - Cliking on the button: create the token "data-token-name" with attribute value "data-token-value"
                                                    - Button has been clicked already and the user click on it again: removes the token "data-token-name"
                                            */
                                            $btn_group.find('#btn_modal_update_collection').on('click', function() {
                                                //console.log("Update now triggers.");

                                                $("#loadingGray").remove()
                                                $("body").append('<div id="loadingGray" style="background: #e9e9e9; display: block; position: fixed; z-index: 100; top: 0; right: 0; bottom: 0; left: 0; height: 100%; opacity: 0.8;"><div style="width: 100%; margin-top: 250px; padding-bottom: 50px; text-align: center;"><p style="font-size: 18pt; font-weight: bolder;">Updating the KVstore collection...</p></div><div id="spinner"></div></div>')

                                                require(["jquery",
                                                        "/static/app/telegraf-kafka/spin.js"
                                                    ],
                                                    function($,
                                                        Spinner
                                                    ) {
                                                        new Spinner({
                                                            lines: 12,
                                                            position: "relative"
                                                        }).spin(document.getElementById('spinner'));
                                                    })

                                                var desiredSearchName = "updateCollection"
                                                if (typeof splunkjs.mvc.Components.getInstance(desiredSearchName) == "object") {
                                                    splunkjs.mvc.Components.revokeInstance(desiredSearchName)
                                                }
                                                var sm = new SearchManager({
                                                    "id": desiredSearchName,
                                                    "cancelOnUnload": true,
                                                    "latest_time": "",
                                                    "status_buckets": 0,
                                                    "earliest_time": "-4h",
                                                    "search": "| savedsearch \"Update Kafka Infrastructure components inventory\"",
                                                    "app": utils.getCurrentApp(),
                                                    "preview": true,
                                                    "runWhenTimeIsUndefined": false,
                                                    "autostart": true
                                                }, {
                                                    tokens: true,
                                                    tokenNamespace: "submitted"
                                                });

                                                sm.on('search:error', function(properties) {
                                                    $("#loadingGray").remove()
                                                    $("#modal_update_collection_noresults").modal()
                                                });

                                                sm.on('search:fail', function(properties) {
                                                    $("#loadingGray").remove()
                                                    $("#modal_update_collection_noresults").modal()
                                                });

                                                sm.on('search:done', function(properties) {
                                                    var searchName = properties.content.request.label
                                                    if (properties.content.resultCount == 0) {
                                                        //console.log(searchName, "gave no results", properties)
                                                        // Show no data modal
                                                        //$("#modal_check_nodata").modal()
                                                        $("#loadingGray").remove()
                                                        $("#modal_update_collection_noresults").modal()
                                                    } else {
                                                        //console.log(searchName, "gave results", properties)
                                                        $("#loadingGray").remove()
                                                        $("#modal_update_collection_done").modal()

                                                        // For each button with the class "custom-sub-nav"
                                                        $('.dashboard-refresh').each(function() {
                                                            var $btn_group = $(this);

                                                            /* for each button in this nav:
                                                                    - Cliking on the button: create the token "data-token-name" with attribute value "data-token-value"
                                                                    - Button has been clicked already and the user click on it again: removes the token "data-token-name"
                                                            */
                                                            $btn_group.find('#btn_modal_reload').on('click', function() {
                                                                document.location.reload();
                                                            })
                                                        })
                                                    }
                                                })
                                            });
                                        });

                                    });

                                });
                            }
                        })
                        return;
                    }
                }
            })
        }
    });
})