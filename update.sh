#!/bin/sh

rsync -avz -e "ssh -i /Users/jguerra/documentos/dutoViz/dutoVizNew.pem" *.html css ico img js papers ubuntu@54.225.66.99:/var/www/johnguerra.co
