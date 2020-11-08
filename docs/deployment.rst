Deployment & Upgrades
#####################

Deployment matrix
=================

+----------------------+---------------------+
| Splunk roles         | required            |
+======================+=====================+
| Search head          |   yes               |
+----------------------+---------------------+
| Indexer tiers        |   no                |
+----------------------+---------------------+

If Splunk search heads are running in Search Head Cluster (SHC), the Splunk application must be deployed by the SHC deployer.

The deployment and configuration requires the creation of a dedicated metric index (by default called **telegraf_kafka**), see the implementation section.

Dependencies
============

**The appplication depends on:**

- Horseshoe Meter - Custom Visualization, Splunk Base: https://splunkbase.splunk.com/app/3166

Initial deployment
==================

**The deployment of the Splunk application for Kafka monitoring with Telegraf is straight forward:**

- Using the application manager in Splunk Web (Settings / Manages apps)

- Extracting the content of the tgz archive in the "apps" directory of Splunk

- For SHC configurations (Search Head Cluster), extract the tgz content in the SHC deployer and publish the SHC bundle

Upgrades
========

Upgrading the Splunk application is pretty much the same operation than the initial deployment.

Upgrades of the components
==========================

Upgrading the different components (Telegraf, Jolokia, etc.) rely on each of the technologies, please consult the deployment main pages.
