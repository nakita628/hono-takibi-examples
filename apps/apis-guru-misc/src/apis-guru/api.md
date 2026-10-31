<h1 id="apisguru">APIs.guru v2.2.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Wikipedia for Web APIs. Repository of API definitions in OpenAPI format.
**Warning**: If you want to be notified about changes in advance please join our [Slack channel](https://join.slack.com/t/mermade/shared_invite/zt-g78g7xir-MLE_CTCcXCdfJfG3CJe9qA).
Client sample: [[Demo]](https://apis.guru/simple-ui) [[Repo]](https://github.com/APIs-guru/simple-ui)

Base URLs:

* <a href="https://api.apis.guru/v2">https://api.apis.guru/v2</a>

Email: <a href="mailto:mike.ralphson@gmail.com">APIs.guru</a> 
Web: <a href="https://APIs.guru">APIs.guru</a> 
License: <a href="https://github.com/APIs-guru/openapi-directory#licenses">CC0 1.0</a>

<a href="https://github.com/APIs-guru/openapi-directory/blob/master/API.md">External documentation</a>

<h1 id="apisguru-apis">APIs</h1>

Actions relating to APIs in the collection

## List all APIs

<a id="opIdlistAPIs"></a>

> Code samples

```bash
curl https://example.com/list.json \
  -H 'Accept: application/json'
```

`GET /list.json`

List all APIs in the directory.
Returns links to the OpenAPI definitions for each API in the directory.
If API exist in multiple versions `preferred` one is explicitly marked.
Some basic info from the OpenAPI definition is cached inside each object.
This allows you to generate some simple views without needing to fetch the OpenAPI definition for each API.


> Example responses

> 200 Response

```json
{
  "googleapis.com:drive": {
    "added": "2015-02-22T20:00:45.000Z",
    "preferred": "v3",
    "versions": {
      "v2": {
        "added": "2015-02-22T20:00:45.000Z",
        "info": {
          "title": "Drive",
          "version": "v2",
          "x-apiClientRegistration": {
            "url": "https://console.developers.google.com"
          },
          "x-logo": {
            "url": "https://api.apis.guru/v2/cache/logo/https_www.gstatic.com_images_icons_material_product_2x_drive_32dp.png"
          },
          "x-origin": {
            "format": "google",
            "url": "https://www.googleapis.com/discovery/v1/apis/drive/v2/rest",
            "version": "v1"
          },
          "x-preferred": false,
          "x-providerName": "googleapis.com",
          "x-serviceName": "drive"
        },
        "swaggerUrl": "https://api.apis.guru/v2/specs/googleapis.com/drive/v2/swagger.json",
        "swaggerYamlUrl": "https://api.apis.guru/v2/specs/googleapis.com/drive/v2/swagger.yaml",
        "updated": "2016-06-17T00:21:44.000Z"
      },
      "v3": {
        "added": "2015-12-12T00:25:13.000Z",
        "info": {
          "title": "Drive",
          "version": "v3",
          "x-apiClientRegistration": {
            "url": "https://console.developers.google.com"
          },
          "x-logo": {
            "url": "https://api.apis.guru/v2/cache/logo/https_www.gstatic.com_images_icons_material_product_2x_drive_32dp.png"
          },
          "x-origin": {
            "format": "google",
            "url": "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
            "version": "v1"
          },
          "x-preferred": true,
          "x-providerName": "googleapis.com",
          "x-serviceName": "drive"
        },
        "swaggerUrl": "https://api.apis.guru/v2/specs/googleapis.com/drive/v3/swagger.json",
        "swaggerYamlUrl": "https://api.apis.guru/v2/specs/googleapis.com/drive/v3/swagger.yaml",
        "updated": "2016-06-17T00:21:44.000Z"
      }
    }
  }
}
```

<h3 id="list-all-apis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[APIs](#schemaapis)|

<aside class="success">
This operation does not require authentication
</aside>

## Get basic metrics

<a id="opIdgetMetrics"></a>

> Code samples

```bash
curl https://example.com/metrics.json \
  -H 'Accept: application/json'
```

`GET /metrics.json`

Some basic metrics for the entire directory.
Just stunning numbers to put on a front page and are intended purely for WoW effect :)


> Example responses

> 200 Response

```json
{
  "datasets": [],
  "fixedPct": 22,
  "fixes": 81119,
  "invalid": 598,
  "issues": 28,
  "numAPIs": 2501,
  "numDrivers": 10,
  "numEndpoints": 106448,
  "numProviders": 659,
  "numSpecs": 3329,
  "stars": 2429,
  "thisWeek": {
    "added": 45,
    "updated": 171
  },
  "unofficial": 25,
  "unreachable": 123
}
```

<h3 id="get-basic-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Metrics](#schemametrics)|

<aside class="success">
This operation does not require authentication
</aside>

## List all providers

<a id="opIdgetProviders"></a>

> Code samples

```bash
curl https://example.com/providers.json \
  -H 'Accept: application/json'
```

`GET /providers.json`

List all the providers in the directory


> Example responses

> 200 Response

```json
{
  "data": [
    "string"
  ]
}
```

<h3 id="list-all-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-all-providers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve one version of a particular API

<a id="opIdgetAPI"></a>

> Code samples

```bash
curl https://example.com/specs/apis.guru/2.1.0.json \
  -H 'Accept: application/json'
```

`GET /specs/{provider}/{api}.json`

Returns the API entry for one specific version of an API where there is no serviceName.

<h3 id="retrieve-one-version-of-a-particular-api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|provider|path|string|true|none|
|api|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "added": "1970-01-01T00:00:00Z",
  "preferred": "string",
  "versions": {
    "property1": {
      "added": "1970-01-01T00:00:00Z",
      "externalDocs": {},
      "info": {},
      "link": "http://example.com",
      "openapiVer": "string",
      "swaggerUrl": "http://example.com",
      "swaggerYamlUrl": "http://example.com",
      "updated": "1970-01-01T00:00:00Z"
    },
    "property2": {
      "added": "1970-01-01T00:00:00Z",
      "externalDocs": {},
      "info": {},
      "link": "http://example.com",
      "openapiVer": "string",
      "swaggerUrl": "http://example.com",
      "swaggerYamlUrl": "http://example.com",
      "updated": "1970-01-01T00:00:00Z"
    }
  }
}
```

<h3 id="retrieve-one-version-of-a-particular-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API](#schemaapi)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve one version of a particular API with a serviceName.

<a id="opIdgetServiceAPI"></a>

> Code samples

```bash
curl https://example.com/specs/apis.guru/graph/2.1.0.json \
  -H 'Accept: application/json'
```

`GET /specs/{provider}/{service}/{api}.json`

Returns the API entry for one specific version of an API where there is a serviceName.

<h3 id="retrieve-one-version-of-a-particular-api-with-a-servicename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|provider|path|string|true|none|
|service|path|string|true|none|
|api|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "added": "1970-01-01T00:00:00Z",
  "preferred": "string",
  "versions": {
    "property1": {
      "added": "1970-01-01T00:00:00Z",
      "externalDocs": {},
      "info": {},
      "link": "http://example.com",
      "openapiVer": "string",
      "swaggerUrl": "http://example.com",
      "swaggerYamlUrl": "http://example.com",
      "updated": "1970-01-01T00:00:00Z"
    },
    "property2": {
      "added": "1970-01-01T00:00:00Z",
      "externalDocs": {},
      "info": {},
      "link": "http://example.com",
      "openapiVer": "string",
      "swaggerUrl": "http://example.com",
      "swaggerYamlUrl": "http://example.com",
      "updated": "1970-01-01T00:00:00Z"
    }
  }
}
```

<h3 id="retrieve-one-version-of-a-particular-api-with-a-servicename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[API](#schemaapi)|

<aside class="success">
This operation does not require authentication
</aside>

## List all APIs for a particular provider

<a id="opIdgetProvider"></a>

> Code samples

```bash
curl https://example.com/apis.guru.json \
  -H 'Accept: application/json'
```

`GET /{provider}.json`

List all APIs in the directory for a particular providerName
Returns links to the individual API entry for each API.


<h3 id="list-all-apis-for-a-particular-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|provider|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "googleapis.com:drive": {
    "added": "2015-02-22T20:00:45.000Z",
    "preferred": "v3",
    "versions": {
      "v2": {
        "added": "2015-02-22T20:00:45.000Z",
        "info": {
          "title": "Drive",
          "version": "v2",
          "x-apiClientRegistration": {
            "url": "https://console.developers.google.com"
          },
          "x-logo": {
            "url": "https://api.apis.guru/v2/cache/logo/https_www.gstatic.com_images_icons_material_product_2x_drive_32dp.png"
          },
          "x-origin": {
            "format": "google",
            "url": "https://www.googleapis.com/discovery/v1/apis/drive/v2/rest",
            "version": "v1"
          },
          "x-preferred": false,
          "x-providerName": "googleapis.com",
          "x-serviceName": "drive"
        },
        "swaggerUrl": "https://api.apis.guru/v2/specs/googleapis.com/drive/v2/swagger.json",
        "swaggerYamlUrl": "https://api.apis.guru/v2/specs/googleapis.com/drive/v2/swagger.yaml",
        "updated": "2016-06-17T00:21:44.000Z"
      },
      "v3": {
        "added": "2015-12-12T00:25:13.000Z",
        "info": {
          "title": "Drive",
          "version": "v3",
          "x-apiClientRegistration": {
            "url": "https://console.developers.google.com"
          },
          "x-logo": {
            "url": "https://api.apis.guru/v2/cache/logo/https_www.gstatic.com_images_icons_material_product_2x_drive_32dp.png"
          },
          "x-origin": {
            "format": "google",
            "url": "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
            "version": "v1"
          },
          "x-preferred": true,
          "x-providerName": "googleapis.com",
          "x-serviceName": "drive"
        },
        "swaggerUrl": "https://api.apis.guru/v2/specs/googleapis.com/drive/v3/swagger.json",
        "swaggerYamlUrl": "https://api.apis.guru/v2/specs/googleapis.com/drive/v3/swagger.yaml",
        "updated": "2016-06-17T00:21:44.000Z"
      }
    }
  }
}
```

<h3 id="list-all-apis-for-a-particular-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[APIs](#schemaapis)|

<aside class="success">
This operation does not require authentication
</aside>

## List all serviceNames for a particular provider

<a id="opIdgetServices"></a>

> Code samples

```bash
curl https://example.com/apis.guru/services.json \
  -H 'Accept: application/json'
```

`GET /{provider}/services.json`

List all serviceNames in the directory for a particular providerName


<h3 id="list-all-servicenames-for-a-particular-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|provider|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    "string"
  ]
}
```

<h3 id="list-all-servicenames-for-a-particular-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="list-all-servicenames-for-a-particular-provider-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_API">API</h2>
<!-- backwards compatibility -->
<a id="schemaapi"></a>
<a id="schema_API"></a>
<a id="tocSapi"></a>
<a id="tocsapi"></a>

```json
{
  "added": "1970-01-01T00:00:00Z",
  "preferred": "string",
  "versions": {
    "property1": {
      "added": "1970-01-01T00:00:00Z",
      "externalDocs": {},
      "info": {},
      "link": "http://example.com",
      "openapiVer": "string",
      "swaggerUrl": "http://example.com",
      "swaggerYamlUrl": "http://example.com",
      "updated": "1970-01-01T00:00:00Z"
    },
    "property2": {
      "added": "1970-01-01T00:00:00Z",
      "externalDocs": {},
      "info": {},
      "link": "http://example.com",
      "openapiVer": "string",
      "swaggerUrl": "http://example.com",
      "swaggerYamlUrl": "http://example.com",
      "updated": "1970-01-01T00:00:00Z"
    }
  }
}
```

Meta information about API

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|added|string(date-time)|true|none|Timestamp when the API was first added to the directory|
|preferred|string|true|none|Recommended version|
|versions|object|true|none|List of supported versions of the API|

<h2 id="tocS_APIs">APIs</h2>
<!-- backwards compatibility -->
<a id="schemaapis"></a>
<a id="schema_APIs"></a>
<a id="tocSapis"></a>
<a id="tocsapis"></a>

```json
{
  "googleapis.com:drive": {
    "added": "2015-02-22T20:00:45.000Z",
    "preferred": "v3",
    "versions": {
      "v2": {
        "added": "2015-02-22T20:00:45.000Z",
        "info": {
          "title": "Drive",
          "version": "v2",
          "x-apiClientRegistration": {
            "url": "https://console.developers.google.com"
          },
          "x-logo": {
            "url": "https://api.apis.guru/v2/cache/logo/https_www.gstatic.com_images_icons_material_product_2x_drive_32dp.png"
          },
          "x-origin": {
            "format": "google",
            "url": "https://www.googleapis.com/discovery/v1/apis/drive/v2/rest",
            "version": "v1"
          },
          "x-preferred": false,
          "x-providerName": "googleapis.com",
          "x-serviceName": "drive"
        },
        "swaggerUrl": "https://api.apis.guru/v2/specs/googleapis.com/drive/v2/swagger.json",
        "swaggerYamlUrl": "https://api.apis.guru/v2/specs/googleapis.com/drive/v2/swagger.yaml",
        "updated": "2016-06-17T00:21:44.000Z"
      },
      "v3": {
        "added": "2015-12-12T00:25:13.000Z",
        "info": {
          "title": "Drive",
          "version": "v3",
          "x-apiClientRegistration": {
            "url": "https://console.developers.google.com"
          },
          "x-logo": {
            "url": "https://api.apis.guru/v2/cache/logo/https_www.gstatic.com_images_icons_material_product_2x_drive_32dp.png"
          },
          "x-origin": {
            "format": "google",
            "url": "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
            "version": "v1"
          },
          "x-preferred": true,
          "x-providerName": "googleapis.com",
          "x-serviceName": "drive"
        },
        "swaggerUrl": "https://api.apis.guru/v2/specs/googleapis.com/drive/v3/swagger.json",
        "swaggerYamlUrl": "https://api.apis.guru/v2/specs/googleapis.com/drive/v3/swagger.yaml",
        "updated": "2016-06-17T00:21:44.000Z"
      }
    }
  }
}
```

List of API details.
It is a JSON object with API IDs(`<provider>[:<service>]`) as keys.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[API](#schemaapi)|false|none|Meta information about API|

<h2 id="tocS_ApiVersion">ApiVersion</h2>
<!-- backwards compatibility -->
<a id="schemaapiversion"></a>
<a id="schema_ApiVersion"></a>
<a id="tocSapiversion"></a>
<a id="tocsapiversion"></a>

```json
{
  "added": "1970-01-01T00:00:00Z",
  "externalDocs": {},
  "info": {},
  "link": "http://example.com",
  "openapiVer": "string",
  "swaggerUrl": "http://example.com",
  "swaggerYamlUrl": "http://example.com",
  "updated": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|added|string(date-time)|true|none|Timestamp when the version was added|
|externalDocs|object|false|none|Copy of `externalDocs` section from OpenAPI definition|
|info|object|true|none|Copy of `info` section from OpenAPI definition|
|link|string(url)|false|none|Link to the individual API entry for this API|
|openapiVer|string|true|none|The value of the `openapi` or `swagger` property of the source definition|
|swaggerUrl|string(url)|true|none|URL to OpenAPI definition in JSON format|
|swaggerYamlUrl|string(url)|true|none|URL to OpenAPI definition in YAML format|
|updated|string(date-time)|true|none|Timestamp when the version was updated|

<h2 id="tocS_Metrics">Metrics</h2>
<!-- backwards compatibility -->
<a id="schemametrics"></a>
<a id="schema_Metrics"></a>
<a id="tocSmetrics"></a>
<a id="tocsmetrics"></a>

```json
{
  "datasets": [],
  "fixedPct": 22,
  "fixes": 81119,
  "invalid": 598,
  "issues": 28,
  "numAPIs": 2501,
  "numDrivers": 10,
  "numEndpoints": 106448,
  "numProviders": 659,
  "numSpecs": 3329,
  "stars": 2429,
  "thisWeek": {
    "added": 45,
    "updated": 171
  },
  "unofficial": 25,
  "unreachable": 123
}
```

List of basic metrics

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasets|[object]|false|none|Data used for charting etc|
|fixedPct|integer|false|none|Percentage of all APIs where auto fixes have been applied|
|fixes|integer|false|none|Total number of fixes applied across all APIs|
|invalid|integer|false|none|Number of newly invalid APIs|
|issues|integer|false|none|Open GitHub issues on our main repo|
|numAPIs|integer|true|none|Number of unique APIs|
|numDrivers|integer|false|none|Number of methods of API retrieval|
|numEndpoints|integer|true|none|Total number of endpoints inside all definitions|
|numProviders|integer|false|none|Number of API providers in directory|
|numSpecs|integer|true|none|Number of API definitions including different versions of the same API|
|stars|integer|false|none|GitHub stars for our main repo|
|thisWeek|object|false|none|Summary totals for the last 7 days|
|unofficial|integer|false|none|Number of unofficial APIs|
|unreachable|integer|false|none|Number of unreachable (4XX,5XX status) APIs|
