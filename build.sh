#!/usr/bin/env bash
#set -x

PWD=`pwd`
app="telegraf-kafka"
version=`grep 'version =' telegraf-kafka/default/app.conf | awk '{print $3}' | sed 's/\.//g'`

rm -f *.tgz
tar -cvzf ${app}_${version}.tgz --exclude=telegraf-kafka/local --exclude=telegraf-kafka/metadata/local.meta --exclude=telegraf-kafka/lookups/lookup_file_backups telegraf-kafka
echo "Wrote: ${app}_${version}.tgz"

exit 0
