#!/bin/sh


rsync -avzgu --delete --partial -e "ssh -i /Users/aguerra/documentos/dutoViz/dutoVizNew.pem" * ubuntu@johnguerra.co:/var/www/johnguerra.co
