Docker testing templates
########################

**Docker compose templates are provided in the following repository:**

https://github.com/guilhemmarchand/kafka-docker-splunk

**Using the docker templates allows you to create a full pre-configured Kafka environment with docker, just in 30 seconds.**

*Example:*

- 3 x nodes Zookeeper cluster
- 3 x nodes Apache Kafka brokers cluster
- 3 x nodes Apache Kafka connect cluster
- 1 x Splunk standalone server running in docker
- 1 x LinkedIn Kafka monitor node
- 1 x Telegraf collector container to collect metrics from Zookeeper, Kafka brokers
- 1 x Telegraf collector container to collect metrics from Kafka Connect (including source and sink tasks)
- 1 x Telegraf collector container to collect metrics from LinkedIn Kafka monitor

.. image:: img/draw.io/docker_template.png
   :alt: docker_template
   :align: center

**Start the template, have a very short coffee (approx. 30 sec), open Splunk, install the Metrics workspace app and observe the magic happening !**

.. image:: img/docker-templates.png
   :alt: docker-templates.png
   :align: center
