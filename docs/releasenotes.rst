Release notes
#############

==============
Version 1.1.40
==============

- Feature: OS Main KPIs views in each component dashboard
- Change: navigation bar review

==============
Version 1.1.39
==============

- Feature: Improvements on Confluent Interceptor UI and related Overview page subcomponents

==============
Version 1.1.38
==============

- Feature: Integration with Confluent Interceptor Monitoring for producers and consumers advanced lag monitoring with Confluent
- Change: Kafka Smart Monitoring goes Dark theme!
- Change: When no Kafka Connect source or sink connector have been detected, show the aggregated single form in black rather than yellow
- Fix: Issue #64 - mMissing double quotes in the flush interval telegraf config UI generator #64
- Fix: Issue #66 - Missing dot in telegraf config for Kafka Connect #66
- Fix: Issue #67 - Bad image file path in broker view #67

==============
Version 1.1.37
==============

CAUTION: Zookeeper metric collection switches from Telegraf plugin to JMX for easier and more consistent metric collection across all the components.
If you were using the application prior to this version, please update your configuration to collect metrics via JMX.

See: https://telegraf-kafka.readthedocs.io/en/latest/implementation.html

- Fix: Show Kafka Connect tasks return empty results in home page
- Fix: The usage of unit makes single form content way too small in different views

==============
Version 1.1.36
==============

CAUTION: Zookeeper metric collection switches from Telegraf plugin to JMX for easier and more consistent metric collection across all the components.
If you were using the application prior to this version, please update your configuration to collect metrics via JMX.

See: https://telegraf-kafka.readthedocs.io/en/latest/implementation.html

- Fix: Avoid mcatalog calls with metric_name as metric_name, some versions of Splunk will incorrectly complain about this, and this causes appinpsect failures in Splunk Base

==============
Version 1.1.35
==============

CAUTION: Zookeeper metric collection switches from Telegraf plugin to JMX for easier and more consistent metric collection across all the components.
If you were using the application prior to this version, please update your configuration to collect metrics via JMX.

See: https://telegraf-kafka.readthedocs.io/en/latest/implementation.html

- change: Zookeeper metric collection switches from Telegraf plugin to JMX collection via Jolokia Telegraf input
- fix: Topic entity dashboard should break by topic rather than per broker, fix aggregation when any selected
- fix: Burrow does not show up in Overview page
- fix: Telegraf configuration helper UI is broken, and update for Zookeeper collection
- fix: appinspect warnings
- fix: Increase time range of searches in Overview page to better cover longer time between measures
- fix: Kafka Connect connectors discovery does not preserve a non default monitoring_state

==============
Version 1.1.34
==============

 - unpublished

==============
Version 1.1.33
==============

CAUTION: Zookeeper metric collection switches from Telegraf plugin to JMX for easier and more consistent metric collection across all the components.
If you were using the application prior to this version, please update your configuration to collect metrics via JMX.

See: https://telegraf-kafka.readthedocs.io/en/latest/implementation.html

- change: Zookeeper metric collection switches from Telegraf plugin to JMX collection via Jolokia Telegraf input
- fix: Topic entity dashboard should break by topic rather than per broker, fix aggregation when any selected
- fix: Burrow does not show up in Overview page
- fix: Telegraf configuration helper UI is broken, and update for Zookeeper collection
- fix: appinspect warnings
- fix: Increase time range of searches in Overview page to better cover longer time between measures

==============
Version 1.1.32
==============

CAUTION: Zookeeper metric collection switches from Telegraf plugin to JMX for easier and more consistent metric collection across all the components.
If you were using the application prior to this version, please update your configuration to collect metrics via JMX.

See: https://telegraf-kafka.readthedocs.io/en/latest/implementation.html

- change: Zookeeper metric collection switches from Telegraf plugin to JMX collection via Jolokia Telegraf input
- fix: Topic entity dashboard should break by topic rather than per broker, fix aggregation when any selected
- fix: Burrow does not show up in Overview page
- fix: Telegraf configuration helper UI is broken, and update for Zookeeper collection
- fix: appinspect warnings

==============
Version 1.1.31
==============

CAUTION: Zookeeper metric collection switches from Telegraf plugin to JMX for easier and more consistent metric collection across all the components.
If you were using the application prior to this version, please update your configuration to collect metrics via JMX.

See: https://telegraf-kafka.readthedocs.io/en/latest/implementation.html

- change: Zookeeper metric collection switches from Telegraf plugin to JMX collection via Jolokia Telegraf input
- fix: Topic entity dashboard should break by topic rather than per broker, fix aggregation when any selected
- fix: Burrow does not show up in Overview page
- fix: Telegraf configuration helper UI is broken, and update for Zookeeper collection

==============
Version 1.1.30
==============

- fix: Realtime traffic In and Out refer to the same field in Overview for Kafka Brokers

==============
Version 1.1.29
==============

- fix: Realtime traffic In and Out refer to the same field in Kafka broker entity view

==============
Version 1.1.28
==============

- feature: Improvement of the maintenance mode with start date time selection capability and automatic scheduling

==============
Version 1.1.27
==============

- fix: Drilldown link broken for Kafka Broker view from dynamic Brokers overview in main Overview dashboards, or Kafka Brokers dashboard (change introduced in 1.1.26)

==============
Version 1.1.26
==============

- fix: The total number of Kafka Connect connectors reported in Alerting management UI is incorrect if connectors have the same ID across multiple tenants
- fix: Cleaning / deletion of unused css and js objects
- feature: Improved table icons rendering with courtesy of Chrys Younger
- feature: Improved Broker overview panels in Overview and Brokers views

==============
Version 1.1.25
==============

- fix: Regression introduced in version 1.1.21 impacts the Kafka Connect tasks inventory if a task is inactive or removed for a long period
- fix: Incorrect number of connectors reported in Alerting managing interface if connectors have the same names across environments

==============
Version 1.1.24
==============

- feature: Introducing logs mapping macros used in entity views to provide customization capabilities for logs integration

==============
Version 1.1.23
==============

- fix: Missing env/label filters in entity views impact results if multiple env/label and ANY selected

==============
Version 1.1.22
==============

- fix: Improves searches for Connected experience dashboard for Kafka Connect (listing connectors in alert)
- fix: Improves Telegraf configuration generator modal window rendering and adds link button to documentation
- fix: Missing env / label filtering in show tasks in alert button from Overview
- feature: Add dynamic view inclusion in menu for Connected Experience custom dashboards

==============
Version 1.1.21
==============

- feature: Introduction of the Telegraf configuration generator, a guided user interface that generates the telegraf.conf configuration files depending on your requirements
- feature: Adding new Audit menu with builtin Audit dashboard for scheduled performance and daily volume indexing analysis
- feature: Use bootstrap buttons in Overview rather than custom buttons design
- feature: Adding active button in Overview to show Kafka Connect tasks in alert (tasks not reporting)
- feature: Adding drilldown from single in Overview / Kafka Connect health views for failed connectors / failed tasks
- feature: Store the last operational time of Kafka Connect connectors in the KVstore, update at inventory / alert run time, return when an alert triggers
- fix: Lag field missing in table from Splunk Connected experience Burrow dashboard due to typo

==============
Version 1.1.20
==============

- fix: Remove any console.log (even while these are commented) in javascript to avoid manual check from appinspect

==============
Version 1.1.19
==============

- fix: Static index reference in new Splunk Connected experience Kafka Connect dashboard
- fix: lag field name type in new Splunk Connected experience Burrow dashboard
- fix: Remove restart required after installation to allow installation in Splunk Cloud via Self-services (SSAI)
- feature: Adding Splunk Connected experience mobile dashboard for Zookeeper health

==============
Version 1.1.18
==============

- feature: Introduction of the builtin kafka_admin role
- feature: Provides default kafka_admin role member write access to the application name space and the KVstore based lookup collections
- feature: Introduction of the Connected Experience dashboards, Health overview dashboards designed to be used with Splunk Connected Experience and Splunk Cloud Gateway (Splunk Mobile, Splunk TV)
- fix: Static indexes references in Kafka Connect and Kafka Burrow dashboards

==============
Version 1.1.17
==============

- fix: Expose units for Zookeeper latency metrics in Overview and entity view
- feature: Introducing the smart component enablement, which allows enabling / disabling a Kafka component to be visible from the Overview, to be managed via the configuration user interface
- feature: Expose Zookeeper leader and Broker active controller in Overview dashboard when mono tenancy (environment) detected or selected
- feature: Configuration checker, detect incomplete installation (Kafka inventory not updated) when loading Overview, and provide modal update user interaction
- fix: Prevents multiple endpoint calls in Alerting User Interface management in Ajax

==============
Version 1.1.16
==============

- feature: Spinner during update / rebuild of KVstore collections within the management of embedded alerting UI
- feature: Manage unprivileged user access to the UI, and proper error handling due to lack of permission against the KVstore collections
- fix: Improved handling of topics / connectors / consumers discovery reports
- feature: Kafka Brokers OOTB alerts and Kafka Connect connector or task startup failure detected are not linked to a monitoring_state that can be deactivated via the KVstore collections
- feature: Configuration error checker which verifies at overview loading page for unsupported tags in env/label such as white spaces.

==============
Version 1.1.15
==============

- feature: Major improvements of the user experience with the management of embedded alerting via modal contextual user interactions
- feature: Maintenance mode is now time conditioned with an end of maintenance period requested via UI calendar during activation
- feature: Migration to native modal windows for user interactions in the alerting management user interface (removal of bootbox js plugin)
- feature: Default schedule change of the maintenance mode status verification report
- feature: Request Splunk restart by default in app.conf
- fix: Kafka Connect tasks that are paused do not properly affect the aggregated state single form in Overview
- fix: Burrow task single form in Overview page results in appendcols related error in Overview page within Splunk 7.0.x
- fix: Regression in Kafka Connect task listing for Splunk 7.0.x in PostProcess search due to append (introduced by Alerting Management UI)
- fix: Regression in dynamic table overview for Kafka Connect status per task in Overview (introduced by 1.1.14)

==============
Version 1.1.14
==============

- feature: Major improvements of the user experience with the management of embedded alerting via modal contextual user interactions
- feature: Maintenance mode is now time conditioned with an end of maintenance period requested via UI calendar during activation
- feature: Migration to native modal windows for user interactions in the alerting management user interface (removal of bootbox js plugin)
- feature: Default schedule change of the maintenance mode status verification report
- feature: Request Splunk restart by default in app.conf
- fix: Kafka Connect tasks that are paused do not properly affect the aggregated state single form in Overview
- fix: Add Kafka Connect tasks in the dynamic table tasks overview if the tasks are listed as monitored in the collection, and the tasks do not report metrics currently (collection stopped, tasks were removed but not from collection)
- fix: Burrow task single form in Overview page results in appendcols related error in Overview page within Splunk 7.0.x

==============
Version 1.1.13
==============

- fix: Static span is defined in Burrow detailed view charts
- fix: Prevents removed Burrow consumers to appear as low range when latest metrics available are part of the selected time range
- fix: Missing group by statement for Burrow consumers monitoring in OOTB alert, generates unexpected output containing OK consumers, while alerts are correctly justified for ERR consumers

Version 1.1.12
==============

- feature: Adding drilldown to single forms for Offline and Under-replicated partitions in Overview and Kafka Brokers entities views
- fix: ISR Shrinking missing env/label/broker filters in Kafka broker entity view
- feature: Better table rendering in Kafka broker entity view for Under-replicated partitions

Version 1.1.11
==============

- feature: Improvement of the Alerting framework management interface with tabs categorization, capability to update and reset collections on demand, alert activation summary, UI experience greatly improved
- fix: Prevent low range state for Kafka Connect tasks that were recently deleted in tasks overview
- fix: Improve Kafka Connect tasks table in Kafka Connect entity view
- fix: Pastel red color for under-replicated partitions in topics views
- fix: Properly order per topic/partitions in broker entity table view
- fix: Prevents a failing component that was unreachable for a long period to be entirely removed from the infrastructure collection, replaced by a disabled_autoforced monitoring_state value if downtime>24 hours
- fix: Preserve _key_id of KVstore collections during updates for kafka_infra_inventory / kafka_infra_nodes_inventory lookups

Version 1.1.10
==============

- fix: Static index references instead of macro usage in Kafka Connect entity view, Kafka Connect status report and drilldown links
- fix: Switch to dopdown selector for env/label in Overview to avoid multiselect issues with forwarding tokens to dashboards

Version 1.1.9
=============

- fix: Static index reference instead of macro usage in Kafka Connect report

Version 1.1.8
=============

- feature: Improvements of the Kafka Connect task status overview report
- feature: Add icon ranges and filters for Kafka Connect task status overview from Overview main dashboard, configure drilldown from table to entity views

Version 1.1.7
=============

- feature: Add input text filter for Consumers in UI Monitoring management
- fix: Non working filters for Consumers / partitions in UI Burrow
- feature: Map monitoring_state in Consumers status preview in Overview

Version 1.1.6
=============

- fix: incompatibility for ksql-server with latest Confluent release (5.1.x) due to metric name changes in JMX model
- feature: avoid no results returned by single in Overview page for Burrow when no consumers are yet added to the monitored collection

Version 1.1.5
=============

Burrow integration: Kafka Consumer Lag monitoring

- feature: Integration of Burrow, new Burrow consumer lag monitoring UIs
- feature: Management of Kafka consumers state within the alerting framework
- feature: Integration of Burrow consumers state within the Overview UI
- feature: Schedule Kvstore collection update reports (infra, topics, tasks, consumers) on a per 4 hours basis
- fix: Prevents user from attempting to disable maintenance mode when already disabled, and vice-versa
- fix: Properly sort Connect tasks statuses on Overview page to show Unknown status when tasks are missing but monitored

The Burrow integration provides advanced threshold less lag monitoring for Kafka Consumers, such as Kafka Connect connectors and Kafka Streams.


Version 1.1.4
=============

Burrow integration: Kafka Consumer Lag monitoring

- feature: Integration of Burrow, new Burrow consumer lag monitoring UIs
- feature: Management of Kafka consumers state within the alerting framework
- feature: Integration of Burrow consumers state within the Overview UI
- feature: Schedule Kvstore collection update reports (infra, topics, tasks, consumers) on a per 4 hours basis
- fix: Prevents user from attempting to disable maintenance mode when already disabled, and vice-versa

The Burrow integration provides advanced threshold less lag monitoring for Kafka Consumers, such as Kafka Connect connectors and Kafka Streams.

Version 1.1.3
=============

- fix: Properly order partitions in new Brokers detailed UI
- fix: Allows selection of special topics in entity topic view

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
