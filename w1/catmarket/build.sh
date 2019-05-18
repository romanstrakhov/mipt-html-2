#!/bin/bash
rm task.zip
zip -r task.zip * -x *.js dev.html *.txt build.sh
