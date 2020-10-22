$("#loadingGray").remove()
$("body").append('<div id="loadingGray" style="background: #e9e9e9; display: block; position: fixed; z-index: 100; top: 0; right: 0; bottom: 0; left: 0; height: 100%; opacity: 0.4;"><div style="width: 100%; margin-top: 250px; padding-bottom: 50px; text-align: center;"><p style="font-size: 30px; font-weight: bolder; color: black;">Loading Kafka Overview, please wait...</p></div><div id="spinner"></div></div>')

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
