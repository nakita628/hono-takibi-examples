<h1 id="api-v1">API V1 v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

VersionEye is a cross-platform search engine for free/libre/open source software libraries.

Base URLs:

* <a href="https://www.versioneye.com">https://www.versioneye.com</a>

* <a href="http://localhost:8080">http://localhost:8080</a>

# Authentication

* API Key (api_key)
    - Parameter Name: **apiKey**, in: header.

<h1 id="api-v1-scans">Scans</h1>

## Retrieves all scans

> Code samples

```bash
curl https://example.com/api/v1/scans \
  -H 'Accept: application/json' \
  -H "apiKey: ${API_KEY}"
```

`GET /api/v1/scans`

<h3 id="retrieves-all-scans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|none|
|per_page|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "result": {
    "current_page": 1,
    "max_pages": 6,
    "organisation": "versioneye",
    "per_page": 50,
    "project_filter": null,
    "project_scans": [
      {
        "created_at": "2021-03-13T15:40:07.236Z",
        "dependencies_count": 999,
        "file_count": 2,
        "file_ids": [
          "604cdcd7319f0564a8648683",
          "604cdcd7319f0564a86486e6"
        ],
        "id": "604cdcd7319f0564a8648682",
        "license_unknown_count": 0,
        "license_violations_count": 0,
        "name": "ve-web",
        "outdated_count": 330,
        "outdated_perc_count": 33,
        "post_process": false,
        "source": "API",
        "sv_count": 0,
        "unknown_count": 0
      },
      {
        "created_at": "2021-03-13T15:35:37.015Z",
        "dependencies_count": 31,
        "file_count": 1,
        "file_ids": [
          "604cdbc9319f0564a8648662"
        ],
        "id": "604cdbc9319f0564a8648661",
        "license_unknown_count": 0,
        "license_violations_count": 0,
        "name": "ve-core",
        "outdated_count": 0,
        "outdated_perc_count": 0,
        "post_process": false,
        "source": "API",
        "sv_count": 0,
        "unknown_count": 0
      }
    ],
    "total_count": 253
  }
}
```

<h3 id="retrieves-all-scans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|scans found|None|
|404|Not Found|scans not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieves a project scan result

> Code samples

```bash
curl https://example.com/api/v1/scans/string \
  -H 'Accept: application/json' \
  -H "apiKey: ${API_KEY}"
```

`GET /api/v1/scans/{id}`

<h3 id="retrieves-a-project-scan-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "created_at": "2021-03-13T15:35:37.015Z",
  "dependencies_count": 31,
  "file_count": 1,
  "file_ids": [
    "604cdbc9319f0564a8648662"
  ],
  "license_unknown_count": 0,
  "license_violations_count": 0,
  "name": "ve-core",
  "outdated_count": 0,
  "outdated_perc_count": 0,
  "post_process": false,
  "sv_count": 0,
  "unknown_count": 0
}
```

<h3 id="retrieves-a-project-scan-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|scan found|None|
|404|Not Found|scan not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieves a file object, containing information about dependencies in the file

> Code samples

```bash
curl https://example.com/api/v1/scans/string/files/string \
  -H 'Accept: application/json' \
  -H "apiKey: ${API_KEY}"
```

`GET /api/v1/scans/{id}/files/{file_id}`

<h3 id="retrieves-a-file-object-containing-information-about-dependencies-in-the-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|file_id|path|string|true|none|
|per_page|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "component_whitelist_id": "",
  "created_at": "2021-03-13T15:35:37.022Z",
  "current_page": 1,
  "dependencies": [
    {
      "branch": null,
      "commit_sha": null,
      "comparator": "=",
      "created_at": "2021-03-13T15:35:37.091Z",
      "ext_link": null,
      "id": "604cdbc9319f0564a8648677",
      "lang_key": "Ruby/activemodel",
      "lang_keyver": "Ruby/activemodel/6.1.3",
      "lang_name": "Ruby/activemodel",
      "language": "Ruby",
      "license_concatenation": "OR",
      "license_violation": false,
      "licenses": [
        {
          "name": "MIT",
          "on_component_whitelist": false,
          "on_license_whitelist": true
        }
      ],
      "name": "activemodel",
      "outdated": false,
      "prod_key": "activemodel",
      "release": false,
      "repo_fullname": null,
      "repo_ref": null,
      "scope": "compile",
      "stability": "",
      "tag": null,
      "unknown_license": false,
      "updated_at": "2021-03-13T15:35:37.091Z",
      "version_current": "6.1.3",
      "version_label": "6.1.3",
      "version_requested": "6.1.3",
      "whitelisted": false
    }
  ],
  "dependencies_count": 31,
  "dependency_manager": "gem",
  "file_name": "Gemfile.lock",
  "id": "604cdbc9319f0564a8648662",
  "language": "Ruby",
  "license_unknown_count": 0,
  "license_violations_count": 0,
  "license_whitelist_id": "5f929939ac7df80001ffeba5",
  "max_pages": 1,
  "outdated_count": 0,
  "outdated_perc_count": 0,
  "parsing_errors": [],
  "per_page": 50,
  "post_process": false,
  "scopes": [
    "compile"
  ],
  "sec_count": 0,
  "sv_count": 0,
  "unknown_count": 0
}
```

<h3 id="retrieves-a-file-object-containing-information-about-dependencies-in-the-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|file found|None|
|404|Not Found|file not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>
