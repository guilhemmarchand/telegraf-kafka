#!/usr/bin/env bash
#set -x

# for Mac OS X
export COPYFILE_DISABLE=true

PWD=`pwd`
app="telegraf-kafka"
cp -a ../${app} .
version=`grep 'version =' ${app}/default/app.conf | awk '{print $3}' | sed 's/\.//g'`

rm -f *.tgz
find . -name "*.pyc" -type f | xargs rm -f
find . -name "*.py" -type f | xargs chmod go-x
tar -czf ${app}_${version}.tgz --exclude=${app}/local --exclude=${app}/backup --exclude=${app}/metadata/local.meta --exclude=${app}/lookups/lookup_file_backups --exclude=${app}/default.old* --exclude='./.*'  --exclude='.[^/]*' --exclude="._*" ${app}

sha256=$(sha256sum ${app}_${version}.tgz)
echo "Wrote: ${sha256}"
echo ${sha256} > release-sha256.txt

rm -rf ${app}
exit 0
