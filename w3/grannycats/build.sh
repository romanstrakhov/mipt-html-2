#!/bin/bash
rm task.zip
zip -r task.zip * -x task.md build.sh .DS_Store img/.DS_Store cat-names.txt

