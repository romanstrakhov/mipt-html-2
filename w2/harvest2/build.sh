#!/bin/bash
rm task.zip
zip -r task.zip * -x images/originals/* task.md ./*.png build.sh products.json images/.DS_Store test.html

