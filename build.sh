#!/usr/bin/env bash
# set -x

PWD=`pwd`
app="telegraf-kafka"
version=`grep 'version =' telegraf-kafka/default/app.conf | awk '{print $3}' | sed 's/\.//g'`

tar -czf ${app}_${version}.tgz telegraf-kafka --exclude=telegraf-kafka/local --exclude=telegraf-kafka/metadata/local.meta --exclude=telegraf-kafka/lookups/lookup_file_backups
echo "Wrote: ${app}_${version}.tgz"

exit 0
