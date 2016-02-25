#!/bin/sh

rsync -avzu --progress -e "ssh -i /Users/aguerra/documentos/dutoViz/dutoVizNew.pem" *.html css ico img js papers *.pdf new ubuntu@johnguerra.co:/var/www/johnguerra.co
