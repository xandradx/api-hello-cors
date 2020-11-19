for i in *.yaml; do sed  "s/node/${1}/g" ${i} |kubectl apply -f - ; done
