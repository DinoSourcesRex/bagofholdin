#!/bin/sh
files=$(find "./.." -type f -name '*.spec*')
errored=false

echo "Checking for focused tests"

for file in $files
do
    if grep -E "fdescribe|fit" $file; [ $? -eq 0 ]; then
        echo "-Focusing a test in the file $file"
        errored=true
    fi
done

if $errored; then
    echo "Some tests were focused"
    exit 1
else
    echo "No tests were focused"
fi