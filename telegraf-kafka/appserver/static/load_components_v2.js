require(['jquery',
    "splunkjs/mvc/utils",
    "splunkjs/mvc/searchmanager"
], function($,
    utils,
    SearchManager) {

    // Dynamically load the Kafka components to be visible depending on the content of the configuration KVstore based collection
    var desiredSearchName = "loadConfig"
    if (typeof splunkjs.mvc.Components.getInstance(desiredSearchName) == "object") {
        splunkjs.mvc.Components.revokeInstance(desiredSearchName)
    }
    var sm = new SearchManager({
        "id": desiredSearchName,
        "cancelOnUnload": true,
        "latest_time": "",
        "status_buckets": 0,
        "earliest_time": "-5m",
        "search": "| inputlookup telegraf_kafka_configuration",
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
            // If the search did not return any result, most likely the setup is not completed
            // All components will be activated by default, and a modal information window will popup

            require(['splunkjs/mvc/simplexml/ready!'], function() {
                require(['splunkjs/ready!', 'splunkjs/mvc'], function(mvc) {

                    var defaultTokenModel = mvc.Components.getInstance('default', {
                        create: true
                    });
                    var submittedTokenModel = mvc.Components.getInstance('submitted', {
                        create: true
                    });

                    function setToken(name, value) {
                        defaultTokenModel.set(name, value);
                        submittedTokenModel.set(name, value);
                    }

                    function getToken(name) {
                        var ret = null;

                        if (defaultTokenModel.get(name) != undefined) {
                            ret = defaultTokenModel.get(name);
                        } else if (submittedTokenModel.get(name) != undefined) {
                            ret = submittedTokenModel.get(name);
                        }

                        return ret;
                    }

                    function unsetToken(name) {
                        defaultTokenModel.unset(name);
                        submittedTokenModel.unset(name);
                    }

                    var load_zookeeper = true;
                    var load_kafka_broker = true;
                    var load_kafka_connect = true;
                    var load_kafka_burrow = true;
                    var load_confluent_interceptor = true;
                    var load_confluent_kafka_rest = true;
                    var load_confluent_ksql_server = true;
                    var load_confluent_schema_registry = true;

                    if (load_zookeeper) {
                        tk_name = "load_zookeeper"
                        setToken(tk_name, "true");
                    } else {
                        tk_name = "load_zookeeper"
                        unsetToken(tk_name);
                    }

                    if (load_kafka_broker) {
                        tk_name = "load_kafka_broker"
                        setToken(tk_name, "true");
                    } else {
                        tk_name = "load_kafka_broker"
                        unsetToken(tk_name);
                    }

                    if (load_kafka_connect) {
                        tk_name = "load_kafka_connect"
                        setToken(tk_name, "true");
                    } else {
                        tk_name = "load_kafka_connect"
                        unsetToken(tk_name);
                    }

                    if (load_kafka_burrow) {
                        tk_name = "load_kafka_burrow"
                        setToken(tk_name, "true");
                    } else {
                        tk_name = "load_kafka_burrow"
                        unsetToken(tk_name);
                    }

                    if (load_confluent_interceptor) {
                        tk_name = "load_confluent_interceptor"
                        setToken(tk_name, "true");
                    } else {
                        tk_name = "load_confluent_interceptor"
                        unsetToken(tk_name);
                    }

                    if (load_confluent_kafka_rest) {
                        tk_name = "load_confluent_kafka_rest"
                        setToken(tk_name, "true");
                    } else {
                        tk_name = "load_confluent_kafka_rest"
                        unsetToken(tk_name);
                    }

                    if (load_confluent_ksql_server) {
                        tk_name = "load_confluent_ksql_server"
                        setToken(tk_name, "true");
                    } else {
                        tk_name = "load_confluent_ksql_server"
                        unsetToken(tk_name);
                    }

                    if (load_confluent_schema_registry) {
                        tk_name = "load_confluent_schema_registry"
                        setToken(tk_name, "true");
                    } else {
                        tk_name = "load_confluent_schema_registry"
                        unsetToken(tk_name);
                    }

                    $("#loadingGray").remove()

                    // Silently run the init search
                    var desiredSearchName = "initConfig"
                    if (typeof splunkjs.mvc.Components.getInstance(desiredSearchName) == "object") {
                        splunkjs.mvc.Components.revokeInstance(desiredSearchName)
                    }
                    var sm = new SearchManager({
                        "id": desiredSearchName,
                        "cancelOnUnload": true,
                        "latest_time": "",
                        "status_buckets": 0,
                        "earliest_time": "-5m",
                        "search": "| savedsearch telegraf-kafka-configuration-init",
                        "app": utils.getCurrentApp(),
                        "preview": true,
                        "runWhenTimeIsUndefined": false,
                        "autostart": true
                    }, {
                        tokens: true,
                        tokenNamespace: "submitted"
                    });

                });

            });

        } else {
            var results = splunkjs.mvc.Components.getInstance(searchName).data('results', {
                output_mode: 'json',
                count: 0
            });
            results.on("data", function(properties) {

                require(['splunkjs/mvc/simplexml/ready!'], function() {
                    require(['splunkjs/ready!', 'splunkjs/mvc'], function(mvc) {

                        var defaultTokenModel = mvc.Components.getInstance('default', {
                            create: true
                        });
                        var submittedTokenModel = mvc.Components.getInstance('submitted', {
                            create: true
                        });

                        function setToken(name, value) {
                            defaultTokenModel.set(name, value);
                            submittedTokenModel.set(name, value);
                        }

                        function getToken(name) {
                            var ret = null;

                            if (defaultTokenModel.get(name) != undefined) {
                                ret = defaultTokenModel.get(name);
                            } else if (submittedTokenModel.get(name) != undefined) {
                                ret = submittedTokenModel.get(name);
                            }

                            return ret;
                        }

                        function unsetToken(name) {
                            defaultTokenModel.unset(name);
                            submittedTokenModel.unset(name);
                        }

                        var searchName = properties.attributes.manager.id
                        var data = properties.data().results
                        var component_label
                        var component_state

                        var load_zookeeper = false;
                        var load_kafka_broker = false;
                        var load_kafka_connect = false;
                        var load_kafka_burrow = false;
                        var load_confluent_interceptor = false;
                        var load_confluent_kafka_rest = false;
                        var load_confluent_ksql_server = false;
                        var load_confluent_schema_registry = false;

                        for (var i = 0; i < data.length; i++) {
                            component_label = data[i].label
                            component_state = data[i].state

                            // Zookeeper
                            if (component_label == "Zookeeper" && component_state == "enabled") {
                                load_zookeeper = true;
                            }

                            // Kafka_Broker
                            if (component_label == "Kafka_Broker" && component_state == "enabled") {
                                load_kafka_broker = true;
                            }

                            // Kafka_Connect
                            if (component_label == "Kafka_Connect" && component_state == "enabled") {
                                load_kafka_connect = true;
                            }

                            // Kafka_Burrow
                            if (component_label == "Kafka_Burrow" && component_state == "enabled") {
                                load_kafka_burrow = true;
                            }

                            // Confluent_Interceptor
                            if (component_label == "Confluent_Interceptor" && component_state == "enabled") {
                                load_confluent_interceptor = true;
                            }

                            // Confluent_Kafka_Rest
                            if (component_label == "Confluent_Kafka_Rest" && component_state == "enabled") {
                                load_confluent_kafka_rest = true;
                            }

                            // Confluent_ksql_server
                            if (component_label == "Confluent_ksql_server" && component_state == "enabled") {
                                load_confluent_ksql_server = true;
                            }

                            // Confluent_Schema_Registry
                            if (component_label == "Confluent_Schema_Registry" && component_state == "enabled") {
                                load_confluent_schema_registry = true;
                            }

                        }

                        if (load_zookeeper) {
                            tk_name = "load_zookeeper"
                            setToken(tk_name, "true");
                        } else {
                            tk_name = "load_zookeeper"
                            unsetToken(tk_name);
                        }

                        if (load_kafka_broker) {
                            tk_name = "load_kafka_broker"
                            setToken(tk_name, "true");
                        } else {
                            tk_name = "load_kafka_broker"
                            unsetToken(tk_name);
                        }

                        if (load_kafka_connect) {
                            tk_name = "load_kafka_connect"
                            setToken(tk_name, "true");
                        } else {
                            tk_name = "load_kafka_connect"
                            unsetToken(tk_name);
                        }

                        if (load_kafka_burrow) {
                            tk_name = "load_kafka_burrow"
                            setToken(tk_name, "true");
                        } else {
                            tk_name = "load_kafka_burrow"
                            unsetToken(tk_name);
                        }

                        if (load_confluent_interceptor) {
                            tk_name = "load_confluent_interceptor"
                            setToken(tk_name, "true");
                        } else {
                            tk_name = "load_confluent_interceptor"
                            unsetToken(tk_name);
                        }

                        if (load_confluent_kafka_rest) {
                            tk_name = "load_confluent_kafka_rest"
                            setToken(tk_name, "true");
                        } else {
                            tk_name = "load_confluent_kafka_rest"
                            unsetToken(tk_name);
                        }

                        if (load_confluent_ksql_server) {
                            tk_name = "load_confluent_ksql_server"
                            setToken(tk_name, "true");
                        } else {
                            tk_name = "load_confluent_ksql_server"
                            unsetToken(tk_name);
                        }

                        if (load_confluent_schema_registry) {
                            tk_name = "load_confluent_schema_registry"
                            setToken(tk_name, "true");
                        } else {
                            tk_name = "load_confluent_schema_registry"
                            unsetToken(tk_name);
                        }

                    });

                });

            })
        }

        $("#loadingGray").remove()

        // end search done
    });
})