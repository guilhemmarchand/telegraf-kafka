Implementation
##############

*Data collection diagram overview:*

.. image:: img/draw.io/overview_diagram.png
   :alt: overview_diagram
   :align: center

Splunk configuration
====================

Index definition
----------------

**The application relies by default on the creation of a metrics index called "telegraf_kafka":**

*indexes.conf example with no Splunk volume:*::

   [telegraf_kafka]
   coldPath = $SPLUNK_DB/telegraf_kafka/colddb
   datatype = metric
   homePath = $SPLUNK_DB/telegraf_kafka/db
   thawedPath = $SPLUNK_DB/telegraf_kafka/thaweddb

*indexes.conf example with Splunk volumes:*::

   [telegraf_kafka]
   coldPath = volume:cold/telegraf_kafka/colddb
   datatype = metric
   homePath = volume:primary/telegraf_kafka/db
   thawedPath = $SPLUNK_DB/telegraf_kafka/thaweddb

In a Splunk distributed configuration (cluster of indexers), this configuration stands on the cluster master node.

All Splunk searches included in the added refer to the utilisation of a macro called **"telegraf_kafka_index"** configured in:

* telegraf-kafka/default/macros.conf

If you wish to use a different index model, this macro shall be customized to override the default model.

Metrics ingestion
=================

**Please following the ITSI module documentation:**

https://da-itsi-telegraf-kafka.readthedocs.io/en/latest/kafka_monitoring.html

**It not required but strongly recommended, ensure to have the Splunk Metrics Workspace application installed to get the best experience:**

https://splunkbase.splunk.com/app/4192/

If the application is installed, the Metrics link will show up automatically in the Splunk application menu.

Notes: Verify the minimal Splunk version required for this Workspace application, Splunk versions prior to 7.1 are not supported currently.
