#!/bin/sh

rsync -avz --progress -e "ssh -i /Users/aguerra/documentos/dutoViz/dutoVizNew.pem" * ubuntu@johnguerra.co:/var/www/johnguerra.co
