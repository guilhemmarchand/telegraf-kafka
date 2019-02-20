Release notes
#############

Version 1.1.2
=============

- feature: New Brokers/Brokers details, Topics/Topics details UIs inspired from Yahoo kafka-manager
- feature: Allows environment and label selection from Overview, propagates tokens across all UIs
- fix: Incorrect number of partitions reported within Brokers entity view when multiple Brokers are selected

Version 1.1.1
=============

- fix: Static index called in report Kafka monitoring - tasks status report

Version 1.1.0
=============

**CAUTION: Breaking changes, telegraf modification is required to provide global tags for env and label dimensions!**

https://da-itsi-telegraf-kafka.readthedocs.io/en/latest/kafka_monitoring.html#telegraf-output-configuration

**Upgrade path:**

- Upgrade telegraf configuration to provide the env and label tags
- Upgrade the application

**Features/fixes:**

- feature: Multi-environment / Multi-dc support via env and label tagging at Telegraf metric level, allows embedded management of any number of environment and/or additional sub-dividing notion (multi-env, multi-dc...)
- feature: New kvstore collection to allow monitoring of services in a container environment philosophy based on the number of active nodes per role rather than their identity
- feature: Update of the Alerting Management User Interface
- feature: New OOTB Alerting based on active nodes numbers per role
- feature: Refreshed Overview page with layers icons, additional overview in page views
- feature: New applications icons
- fix: Various fixes and improvements

Version 1.0.12
==============
- fix: Improve detection of Kafka Connect tasks not successfully running on the Overview page
- fix: Drilldown on single forms for Kafka Connect tasks

Version 1.0.11
==============
- fix: Management interface toggle panels not working (bad reference in js)
- fix: Management interface disable maintenance button not showing up properly in Splunk 7.0.x
- fix: Preset a default value for maintenance mode status
- fix: share lookups, transforms and macros at system level by default

Version 1.0.10
==============

- Unpublished

Version 1.0.9
=============
- feature: Added OOTB Alert for under-replicated partitions per topics
- feature: Management interface for embedded Kafka alerting
- feature: Enabling / Deactivating maintenance mode through UI for alerting management

Version 1.0.8
=============

- feature: Out of the box alerting templates for Kafka infrastructure
- fix: Kafka Connect aggregated states issues in Overview page

Version 1.0.7
=============
- feature: Out of the box alerts for Kafka Infrastructure
- feature: Support for Confluent ksql-server
- feature: Support for Confluent kafka-rest
- feature: Overview home page improvements
- feature: event logging integration with the TA-kafka-streaming-platform
- fix: minor fixes and improvements in views

Version 1.0.6
=============
- fix: Typo in Overview

Version 1.0.5
=============
- feature: Confluent schema-registry support

Version 1.0.4
=============
- fix: inverted filters for source/task in Overview
- fix: dropdown replaced by multiselect and key per connector/task in source/sink views

Version 1.0.3
=============
- fix: Overview page, link for topic management should be under brokers category

Version 1.0.2
=============

- various: logo update

Version 1.0.1
=============

- fix: missing link for Kafka topics reporting

Version 1.0.0
=============

- initial and first public release
