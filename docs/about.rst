About
=====

* Author: Guilhem Marchand

* First release published in October 2018

* Purposes:

**The Splunk application for Kafka Smart Monitoring leverages the best components to provide a key layer monitoring for your Kafka infrastructure :**

* Telegraf from Influxdata (https://github.com/influxdata/telegraf)

* Jolokia for the remote JMX collection over http (https://jolokia.org)

* Telegraf Jolokia2 input plugin (https://github.com/influxdata/telegraf/tree/master/plugins/inputs/jolokia2)

* Telegraf Zookeeper input plugin (https://github.com/influxdata/telegraf/tree/master/plugins/inputs/zookeeper)

* LinkedIn Kafka monitor to provide end to end monitoring (https://github.com/linkedin/kafka-monitor)

* Kafka Consumers lag monitoring with Burrow (https://github.com/linkedin/Burrow)

**An ITSI module is also available:** https://da-itsi-telegraf-kafka.readthedocs.io

.. image:: img/draw.io/overview_diagram.png
   :alt: overview_diagram
   :align: center
