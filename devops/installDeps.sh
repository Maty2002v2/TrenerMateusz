#!/bin/bash

parent_dir_name=$(basename $PWD)
docker exec -i trenermateusz_php_1 composer update
