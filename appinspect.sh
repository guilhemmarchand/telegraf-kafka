#!/bin/bash

splunk-appinspect inspect `ls telegraf-kafka_*.tgz | head -1` --mode precert --included-tags splunk_appinspect
