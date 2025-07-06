#!/usr/bin/env bash

if [[ ${CF_PAGES} -eq 1 ]]; then
    if [[ ${CF_PAGES_BRANCH} == "master" ]]; then
        hugo --gc --minify --baseURL "https://${BASE_URL:=my-site-bu8.pages.dev}"
    else
        echo "URL: https://${CF_PAGES_BRANCH}.${BASE_URL}"
        hugo --gc --minify --baseURL "https://${CF_PAGES_BRANCH}.${BASE_URL:=my-site-bu8.pages.dev}"
    fi
fi

if [[ ${WORKERS_CI} -eq 1 ]]; then
    if [[ ${WORKERS_CI_BRANCH} == "master" ]]; then
        hugo --gc --minify --baseURL "https://$BASE_URL"
    else
        echo "URL: ${WORKERS_CI_URL:=https://preview-$BASE_URL}"
        hugo --gc --minify --baseURL ${WORKERS_CI_URL:="https://preview-$BASE_URL"}
    fi
fi
