<h1 id="swagger-api-rest-for-patrowl-engines">Swagger API-REST for Patrowl Engines v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is the API documentation for Patrowl Engines usage.

Base URLs:

* <a href="http://patrowl.local">http://patrowl.local</a>

* <a href="http://localhost:5001/engines/nmap/">http://localhost:5001/engines/nmap/</a>

* <a href="http://localhost:5004/engines/ssllabs/">http://localhost:5004/engines/ssllabs/</a>

* <a href="http://localhost:5005/engines/arachni/">http://localhost:5005/engines/arachni/</a>

* <a href="http://localhost:5006/engines/owl_dns/">http://localhost:5006/engines/owl_dns/</a>

* <a href="http://localhost:5007/engines/virustotal/">http://localhost:5007/engines/virustotal/</a>

* <a href="http://localhost:5008/engines/urlvoid/">http://localhost:5008/engines/urlvoid/</a>

* <a href="http://localhost:5009/engines/cortex/">http://localhost:5009/engines/cortex/</a>

* <a href="http://localhost:5012/engines/owl_leaks/">http://localhost:5012/engines/owl_leaks/</a>

* <a href="http://localhost:5013/engines/owl_code/">http://localhost:5013/engines/owl_code/</a>

* <a href="http://localhost:5014/engines/sslscan/">http://localhost:5014/engines/sslscan/</a>

Email: <a href="mailto:getsupport@patrowl.io">getsupport@patrowl.io</a> 
License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

<a href="https://github.com/Patrowl/PatrowlDocs">Find out more about Patrowl</a>

<h1 id="swagger-api-rest-for-patrowl-engines-patrowl-engine">patrowl-engine</h1>

SSLScan API documentation

<a href="https://github.com/Patrowl/PatrowlDocs">Find out more</a>

## Index page

<a id="opIdgetDefaultPage"></a>

> Code samples

```bash
curl https://example.com/ \
  -H 'Accept: application/json'
```

`GET /`

Return index page

> Example responses

> 200 Response

```json
{
  "page": "string",
  "status": "string"
}
```

<h3 id="index-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiResponse](#schemaapiresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Clean all scans

<a id="opIdCleanScansPage"></a>

> Code samples

```bash
curl https://example.com/clean \
  -H 'Accept: application/json'
```

`GET /clean`

Clean all current scans.

> Example responses

> 200 Response

```json
{
  "page": "string",
  "status": "string"
}
```

<h3 id="clean-all-scans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiResponse](#schemaapiresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Clean scan

<a id="opIdCleanScanPage"></a>

> Code samples

```bash
curl https://example.com/clean/0 \
  -H 'Accept: application/json'
```

`GET /clean/{scanId}`

Clean scan identified by id.

<h3 id="clean-scan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scanId|path|integer|true|Numeric ID of the scan to clean|

> Example responses

> 200 Response

```json
{
  "page": "string",
  "status": "string"
}
```

<h3 id="clean-scan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiResponse](#schemaapiresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get findings on finished scans

<a id="opIdGetFindingPage"></a>

> Code samples

```bash
curl https://example.com/getfindings/0 \
  -H 'Accept: application/json'
```

`GET /getfindings/{scanId}`

Get findings on finished scans.

<h3 id="get-findings-on-finished-scans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scanId|path|integer|true|Numeric ID of the scan to get findings|

> Example responses

> 200 Response

```json
[
  {
    "confidence": "string",
    "description": "string",
    "issue_id": 0,
    "meta_links": [
      "string"
    ],
    "meta_risk": {
      "cvss_base_score": [
        "string"
      ],
      "cvss_vector": [
        "string"
      ],
      "exploit_available": [
        "string"
      ],
      "exploitability_ease": [
        "string"
      ],
      "patch_publication_date": [
        "string"
      ]
    },
    "meta_tags": [
      "string"
    ],
    "meta_vuln_refs": {
      "bid": [
        "string"
      ],
      "cpe": [
        "string"
      ],
      "cve": [
        "string"
      ],
      "cwe": [
        "string"
      ]
    },
    "raw": "string",
    "severity": "info",
    "solution": "string",
    "target_addrs": [
      "string"
    ],
    "target_proto": [
      "string"
    ],
    "timestamp": "1970-01-01T00:00:00Z",
    "title": "string",
    "type": "string"
  }
]
```

<h3 id="get-findings-on-finished-scans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Findings](#schemafindings)|

<aside class="success">
This operation does not require authentication
</aside>

## Engine info page

<a id="opIdgetInfoPage"></a>

> Code samples

```bash
curl https://example.com/info \
  -H 'Accept: application/json'
```

`GET /info`

Return information on engine.

> Example responses

> 200 Response

```json
{
  "page": "string",
  "status": "string"
}
```

<h3 id="engine-info-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiResponse](#schemaapiresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Liveness page

<a id="opIdgetLivenessPage"></a>

> Code samples

```bash
curl https://example.com/liveness
```

`GET /liveness`

Return liveness page

<h3 id="liveness-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

## Readiness page

<a id="opIdgetReadinessPage"></a>

> Code samples

```bash
curl https://example.com/readiness
```

`GET /readiness`

Return liveness page

<h3 id="readiness-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

## Configuration reloading page

<a id="opIdreloadConfigurationPage"></a>

> Code samples

```bash
curl https://example.com/reloadconfig \
  -H 'Accept: application/json'
```

`GET /reloadconfig`

Reload the configuration file.

> Example responses

> 200 Response

```json
{
  "page": "string",
  "status": "string"
}
```

<h3 id="configuration-reloading-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiResponse](#schemaapiresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Start a new scan

<a id="opIdStartScanPage"></a>

> Code samples

```bash
curl https://example.com/startscan \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "assets": [
      {
        "criticity": "low",
        "datatype": "ip",
        "id": "3",
        "value": "8.8.8.8"
      }
    ],
    "options": {},
    "scan_id": 1
  }'
```

`POST /startscan`

Start a new scan.

> Body parameter

```json
{
  "assets": [
    {
      "criticity": "low",
      "datatype": "ip",
      "id": "3",
      "value": "8.8.8.8"
    }
  ],
  "options": {},
  "scan_id": 1
}
```

<h3 id="start-a-new-scan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ScanDefinition](#schemascandefinition)|true|none|
|» assets|body|[object]|false|none|
|» » criticity|body|string|false|none|
|» » datatype|body|string|false|none|
|» » id|body|string|false|none|
|» » value|body|string|false|none|
|» options|body|object|false|none|
|» scan_id|body|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » criticity|low|
|» » criticity|medium|
|» » criticity|high|
|» » datatype|ip|
|» » datatype|ip-range|
|» » datatype|ip-subnet|
|» » datatype|fqdn|
|» » datatype|domain|
|» » datatype|url|
|» » datatype|keyword|
|» » datatype|person|
|» » datatype|organisation|
|» » datatype|path|
|» » datatype|application|

> Example responses

> 200 Response

```json
{
  "page": "string",
  "status": "string"
}
```

<h3 id="start-a-new-scan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiResponse](#schemaapiresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Status on all scans

<a id="opIdStatusScansPage"></a>

> Code samples

```bash
curl https://example.com/status \
  -H 'Accept: application/json'
```

`GET /status`

Status all current scans.

> Example responses

> 200 Response

```json
{
  "page": "string",
  "status": "string"
}
```

<h3 id="status-on-all-scans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiResponse](#schemaapiresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Status of a scan

<a id="opIdStatusScanPage"></a>

> Code samples

```bash
curl https://example.com/status/0 \
  -H 'Accept: application/json'
```

`GET /status/{scanId}`

Status of a scan identified by id.

<h3 id="status-of-a-scan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scanId|path|integer|true|Numeric ID of the scan to get status|

> Example responses

> 200 Response

```json
{
  "page": "string",
  "status": "string"
}
```

<h3 id="status-of-a-scan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiResponse](#schemaapiresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Stop a scan

<a id="opIdStopScanPage"></a>

> Code samples

```bash
curl https://example.com/stop/0 \
  -H 'Accept: application/json'
```

`GET /stop/{scanId}`

Stop a scan identified by id.

<h3 id="stop-a-scan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scanId|path|integer|true|Numeric ID of the scan to stop|

> Example responses

> 200 Response

```json
{
  "page": "string",
  "status": "string"
}
```

<h3 id="stop-a-scan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiResponse](#schemaapiresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Stop all scans

<a id="opIdStopScansPage"></a>

> Code samples

```bash
curl https://example.com/stopscans \
  -H 'Accept: application/json'
```

`GET /stopscans`

Stop all current scans.

> Example responses

> 200 Response

```json
{
  "page": "string",
  "status": "string"
}
```

<h3 id="stop-all-scans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiResponse](#schemaapiresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Test page

<a id="opIdgetTestPage"></a>

> Code samples

```bash
curl https://example.com/test
```

`GET /test`

Return test page

<h3 id="test-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ApiResponse">ApiResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapiresponse"></a>
<a id="schema_ApiResponse"></a>
<a id="tocSapiresponse"></a>
<a id="tocsapiresponse"></a>

```json
{
  "page": "string",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|string|false|none|none|
|status|string|false|none|none|

<h2 id="tocS_Findings">Findings</h2>
<!-- backwards compatibility -->
<a id="schemafindings"></a>
<a id="schema_Findings"></a>
<a id="tocSfindings"></a>
<a id="tocsfindings"></a>

```json
[
  {
    "confidence": "string",
    "description": "string",
    "issue_id": 0,
    "meta_links": [
      "string"
    ],
    "meta_risk": {
      "cvss_base_score": [
        "string"
      ],
      "cvss_vector": [
        "string"
      ],
      "exploit_available": [
        "string"
      ],
      "exploitability_ease": [
        "string"
      ],
      "patch_publication_date": [
        "string"
      ]
    },
    "meta_tags": [
      "string"
    ],
    "meta_vuln_refs": {
      "bid": [
        "string"
      ],
      "cpe": [
        "string"
      ],
      "cve": [
        "string"
      ],
      "cwe": [
        "string"
      ]
    },
    "raw": "string",
    "severity": "info",
    "solution": "string",
    "target_addrs": [
      "string"
    ],
    "target_proto": [
      "string"
    ],
    "timestamp": "1970-01-01T00:00:00Z",
    "title": "string",
    "type": "string"
  }
]
```

<h2 id="tocS_ScanDefinition">ScanDefinition</h2>
<!-- backwards compatibility -->
<a id="schemascandefinition"></a>
<a id="schema_ScanDefinition"></a>
<a id="tocSscandefinition"></a>
<a id="tocsscandefinition"></a>

```json
{
  "assets": [
    {
      "criticity": "low",
      "datatype": "ip",
      "id": "3",
      "value": "8.8.8.8"
    }
  ],
  "options": {},
  "scan_id": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets|[object]|false|none|none|
|options|object|false|none|none|
|scan_id|integer|false|none|none|
