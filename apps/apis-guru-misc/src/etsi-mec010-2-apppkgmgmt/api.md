<h1 id="etsi-gs-mec-010-2---part-2-application-lifecycle-rules-and-requirements-management">ETSI GS MEC 010-2 - Part 2: Application lifecycle, rules and requirements management v2.1.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

ETSI GS MEC 010-2 - Part 2: Application lifecycle, rules and requirements management described using OpenAPI.

Base URLs:

* <a href="http://etsi.local">http://etsi.local</a>

* <a href="https://localhost/app_pkgm/v1">https://localhost/app_pkgm/v1</a>

Email: <a href="mailto:cti_support@etsi.org">ETSI Forge</a> 
Web: <a href="https://forge.etsi.org/rep/mec/gs010-2-app-pkg-lcm-api">ETSI Forge</a> 
License: <a href="https://forge.etsi.org/legal-matters">BSD-3-Clause</a>

<a href="https://www.etsi.org/deliver/etsi_gs/MEC/001_099/01002/02.01.01_60/gs_MEC01002v020101p.pdf">ETSI GS MEC 010-2 - Part 2: Application lifecycle, rules and requirements management, v2.1.1</a>

<h1 id="etsi-gs-mec-010-2---part-2-application-lifecycle-rules-and-requirements-management-app-pkgm">app-pkgm</h1>

App Package management

## Queries information relating to on-boarded application packages in the MEO

<a id="opIdapp_packagesGET"></a>

> Code samples

```bash
curl https://example.com/app_packages \
  -H 'Accept: application/json'
```

`GET /app_packages`

queries information relating to on-boarded application packages in the MEO

<h3 id="queries-information-relating-to-on-boarded-application-packages-in-the-meo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|Attribute-based filtering parameters according to ETSI GS MEC 009|
|all_fields|query|string|false|Include all complex attributes in the response.|
|fields|query|string|false|Complex attributes of AppPkgInfo to be included into the response|
|exclude_fields|query|string|false|Complex attributes of AppPkgInfo to be excluded from the response.|
|exclude_default|query|string|false|Indicates to exclude the following complex attributes of AppPkgInfo from the response.|

> Example responses

> 200 Response

```json
[
  {
    "_links": {
      "appD": {
        "href": "http://example.com"
      },
      "appPkgContent": {
        "href": "http://example.com"
      },
      "self": {
        "href": "http://example.com"
      }
    },
    "additionalArtifacts": null,
    "appDId": "string",
    "appDVersion": "string",
    "appName": "string",
    "appProvider": "string",
    "appSoftwareVersion": "string",
    "checksum": {
      "algorithm": "string",
      "hash": "string"
    },
    "id": "string",
    "onboardingState": "CREATED",
    "operationalState": "ENABLED",
    "softwareImages": null,
    "usageState": "IN_USE",
    "userDefinedData": {}
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 406 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 429 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

<h3 id="queries-information-relating-to-on-boarded-application-packages-in-the-meo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Contains a representation of the application package resource|Inline|
|400|Bad Request|Bad Request : used to indicate that incorrect parameters were passed to the request.|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized :  used when the client did not submit credentials.|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden :  operation is not allowed given the current status of the resource.|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found :  used when a client provided a URI that cannot be mapped to a valid resource URI.|[ProblemDetails](#schemaproblemdetails)|
|406|Not Acceptable|Not Acceptable : used to indicate that the server cannot provide the any of the content formats supported by the client.|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests : used when a rate limiter has triggered.|[ProblemDetails](#schemaproblemdetails)|

<h3 id="queries-information-relating-to-on-boarded-application-packages-in-the-meo-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AppPkgInfo](#schemaapppkginfo)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create a resource for on-boarding an application package to a MEO

<a id="opIdapp_packagesPOST"></a>

> Code samples

```bash
curl https://example.com/app_packages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "appPkgName": "string",
    "appPkgPath": "string",
    "appPkgVersion": "string",
    "appProvider": "string",
    "checksum": {
      "algorithm": "string",
      "hash": "string"
    },
    "userDefinedData": {}
  }'
```

`POST /app_packages`

Create a resource for on-boarding an application package to a MEO

> Body parameter

```json
{
  "appPkgName": "string",
  "appPkgPath": "string",
  "appPkgVersion": "string",
  "appProvider": "string",
  "checksum": {
    "algorithm": "string",
    "hash": "string"
  },
  "userDefinedData": {}
}
```

<h3 id="create-a-resource-for-on-boarding-an-application-package-to-a-meo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateAppPkg](#schemacreateapppkg)|true|Resource to be created|
|» appPkgName|body|string|true|Name of the application package to be onboarded.|
|» appPkgPath|body|[URI](#schemauri)|true|none|
|» appPkgVersion|body|string|true|Version of the application package to be onboarded.<br>The appPkgName with appPkgVersion can be used to uniquely identify the application package.|
|» appProvider|body|string|false|The provider's name of the application package to be onboarded.|
|» checksum|body|[Checksum](#schemachecksum)|true|none|
|» userDefinedData|body|[KeyValuePairs](#schemakeyvaluepairs)|false|'This data type represents a list of key-value pairs. The order of the pairs in the list is not significant. In JSON, a set of key-value pairs is represented as an object. It shall comply with the provisions defined in clause 4 of IETF RFC 8259'|

> Example responses

> 201 Response

```json
[
  {
    "_links": {
      "appD": {
        "href": "http://example.com"
      },
      "appPkgContent": {
        "href": "http://example.com"
      },
      "self": {
        "href": "http://example.com"
      }
    },
    "additionalArtifacts": null,
    "appDId": "string",
    "appDVersion": "string",
    "appName": "string",
    "appProvider": "string",
    "appSoftwareVersion": "string",
    "checksum": {
      "algorithm": "string",
      "hash": "string"
    },
    "id": "string",
    "onboardingState": "CREATED",
    "operationalState": "ENABLED",
    "softwareImages": null,
    "usageState": "IN_USE",
    "userDefinedData": {}
  }
]
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 406 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 429 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

<h3 id="create-a-resource-for-on-boarding-an-application-package-to-a-meo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful response for resource creation|Inline|
|400|Bad Request|Bad Request : used to indicate that incorrect parameters were passed to the request.|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized :  used when the client did not submit credentials.|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden :  operation is not allowed given the current status of the resource.|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found :  used when a client provided a URI that cannot be mapped to a valid resource URI.|[ProblemDetails](#schemaproblemdetails)|
|406|Not Acceptable|Not Acceptable : used to indicate that the server cannot provide the any of the content formats supported by the client.|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests : used when a rate limiter has triggered.|[ProblemDetails](#schemaproblemdetails)|

<h3 id="create-a-resource-for-on-boarding-an-application-package-to-a-meo-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AppPkgInfo](#schemaapppkginfo)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Queries the information related to individual application package resources

<a id="opIdapp_packageGET"></a>

> Code samples

```bash
curl https://example.com/app_packages/string \
  -H 'Accept: application/json'
```

`GET /app_packages/{appPkgId}`

Queries the information related to individual application package resources

<h3 id="queries-the-information-related-to-individual-application-package-resources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appPkgId|path|string|true|Identifier of an individual application package resource|

> Example responses

> 200 Response

```json
{
  "_links": {
    "appD": {
      "href": "http://example.com"
    },
    "appPkgContent": {
      "href": "http://example.com"
    },
    "self": {
      "href": "http://example.com"
    }
  },
  "additionalArtifacts": null,
  "appDId": "string",
  "appDVersion": "string",
  "appName": "string",
  "appProvider": "string",
  "appSoftwareVersion": "string",
  "checksum": {
    "algorithm": "string",
    "hash": "string"
  },
  "id": "string",
  "onboardingState": "CREATED",
  "operationalState": "ENABLED",
  "softwareImages": null,
  "usageState": "IN_USE",
  "userDefinedData": {}
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 406 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 429 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

<h3 id="queries-the-information-related-to-individual-application-package-resources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Contains a representation of the application package resource|[AppPkgInfo](#schemaapppkginfo)|
|400|Bad Request|Bad Request : used to indicate that incorrect parameters were passed to the request.|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized :  used when the client did not submit credentials.|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden :  operation is not allowed given the current status of the resource.|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found :  used when a client provided a URI that cannot be mapped to a valid resource URI.|[ProblemDetails](#schemaproblemdetails)|
|406|Not Acceptable|Not Acceptable : used to indicate that the server cannot provide the any of the content formats supported by the client.|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests : used when a rate limiter has triggered.|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Deletes an individual application package resources

<a id="opIdapp_packageDELETE"></a>

> Code samples

```bash
curl https://example.com/app_packages/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /app_packages/{appPkgId}`

Deletes an individual application package resources

<h3 id="deletes-an-individual-application-package-resources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appPkgId|path|string|true|Identifier of an individual application package resource|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 406 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 429 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

<h3 id="deletes-an-individual-application-package-resources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request : used to indicate that incorrect parameters were passed to the request.|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized :  used when the client did not submit credentials.|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden :  operation is not allowed given the current status of the resource.|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found :  used when a client provided a URI that cannot be mapped to a valid resource URI.|[ProblemDetails](#schemaproblemdetails)|
|406|Not Acceptable|Not Acceptable : used to indicate that the server cannot provide the any of the content formats supported by the client.|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests : used when a rate limiter has triggered.|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Updates the operational state of an individual application package resource

<a id="opIdapp_packagePATCH"></a>

> Code samples

```bash
curl https://example.com/app_packages/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "operationState": "DISABLED"
  }'
```

`PATCH /app_packages/{appPkgId}`

Updates the operational state of an individual application package resources

> Body parameter

```json
{
  "operationState": "DISABLED"
}
```

<h3 id="updates-the-operational-state-of-an-individual-application-package-resource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appPkgId|path|string|true|Identifier of an individual application package resource|
|body|body|[AppPkgInfoModifications](#schemaapppkginfomodifications)|true|Operational state to be set|
|» operationState|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» operationState|DISABLED|
|» operationState|ENABLED|

> Example responses

> 200 Response

```json
{
  "operationState": "DISABLED"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 406 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 409 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 429 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

<h3 id="updates-the-operational-state-of-an-individual-application-package-resource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Shows that the operation has been completed successfully|[AppPkgInfoModifications](#schemaapppkginfomodifications)|
|400|Bad Request|Bad Request : used to indicate that incorrect parameters were passed to the request.|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized :  used when the client did not submit credentials.|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden :  operation is not allowed given the current status of the resource.|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found :  used when a client provided a URI that cannot be mapped to a valid resource URI.|[ProblemDetails](#schemaproblemdetails)|
|406|Not Acceptable|Not Acceptable : used to indicate that the server cannot provide the any of the content formats supported by the client.|[ProblemDetails](#schemaproblemdetails)|
|409|Conflict|Conflict : The operation cannot be executed currently, due to a conflict with the state of the resource|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests : used when a rate limiter has triggered.|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Reads the content of the AppD of on-boarded individual application package resources.

<a id="opIdappPkgIdGET"></a>

> Code samples

```bash
curl https://example.com/app_packages/string/appd \
  -H 'Accept: application/json'
```

`GET /app_packages/{appPkgId}/appd`

Reads the content of the AppD of on-boarded individual application package resources.

<h3 id="reads-the-content-of-the-appd-of-on-boarded-individual-application-package-resources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|Attribute-based filtering parameters according to ETSI GS MEC 009|
|all_fields|query|string|false|Include all complex attributes in the response.|
|fields|query|string|false|Complex attributes of AppPkgInfo to be included into the response|
|exclude_fields|query|string|false|Complex attributes of AppPkgInfo to be excluded from the response.|
|exclude_default|query|string|false|Indicates to exclude the following complex attributes of AppPkgInfo from the response.|
|appPkgId|path|string|true|Identifier of an on-boarded individual application package|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 406 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 429 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

<h3 id="reads-the-content-of-the-appd-of-on-boarded-individual-application-package-resources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Content of the AppD is returned.|[AppD](#schemaappd)|
|400|Bad Request|Bad Request : used to indicate that incorrect parameters were passed to the request.|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized :  used when the client did not submit credentials.|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden :  operation is not allowed given the current status of the resource.|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found :  used when a client provided a URI that cannot be mapped to a valid resource URI.|[ProblemDetails](#schemaproblemdetails)|
|406|Not Acceptable|Not Acceptable : used to indicate that the server cannot provide the any of the content formats supported by the client.|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests : used when a rate limiter has triggered.|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch the onboarded application package content identified by appPkgId or appDId.

<a id="opIdappPkgGET"></a>

> Code samples

```bash
curl https://example.com/app_packages/string/package_content \
  -H 'Accept: application/json'
```

`GET /app_packages/{appPkgId}/package_content`

Fetch the onboarded application package content identified by appPkgId or appDId.

<h3 id="fetch-the-onboarded-application-package-content-identified-by-apppkgid-or-appdid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appPkgId|path|string|true|Identifier of an on-boarded individual application package|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 406 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 429 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

<h3 id="fetch-the-onboarded-application-package-content-identified-by-apppkgid-or-appdid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The payload body shall contain a copy of the file representing the AppD or a ZIP file that contains the file or multiple files representing the AppD.|None|
|206|Partial Content|Partial content|None|
|400|Bad Request|Bad Request : used to indicate that incorrect parameters were passed to the request.|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized :  used when the client did not submit credentials.|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden :  operation is not allowed given the current status of the resource.|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found :  used when a client provided a URI that cannot be mapped to a valid resource URI.|[ProblemDetails](#schemaproblemdetails)|
|406|Not Acceptable|Not Acceptable : used to indicate that the server cannot provide the any of the content formats supported by the client.|[ProblemDetails](#schemaproblemdetails)|
|416|Range Not Satisfiable|Range Not Satisfiable .|None|
|429|Too Many Requests|Too Many Requests : used when a rate limiter has triggered.|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Uploads the content of application package.

<a id="opIdappPkgPUT"></a>

> Code samples

```bash
curl https://example.com/app_packages/string/package_content \
  -X PUT \
  -H 'Content-Type: application/zip' \
  -H 'Accept: application/json' \
  --data-binary '@/path/to/file'
```

`PUT /app_packages/{appPkgId}/package_content`

Uploads the content of application package.

<h3 id="uploads-the-content-of-application-package-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appPkgId|path|string|true|Identifier of an on-boarded individual application package|
|body|body|string(binary)|false|none|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 406 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 409 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 429 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

<h3 id="uploads-the-content-of-application-package-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|The application package has been accepted for uploading, but the processing has not been completed.|None|
|400|Bad Request|Bad Request : used to indicate that incorrect parameters were passed to the request.|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized :  used when the client did not submit credentials.|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden :  operation is not allowed given the current status of the resource.|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found :  used when a client provided a URI that cannot be mapped to a valid resource URI.|[ProblemDetails](#schemaproblemdetails)|
|406|Not Acceptable|Not Acceptable : used to indicate that the server cannot provide the any of the content formats supported by the client.|[ProblemDetails](#schemaproblemdetails)|
|409|Conflict|Conflict : The operation cannot be executed currently, due to a conflict with the state of the resource|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests : used when a rate limiter has triggered.|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Reads the content of the AppD of on-boarded individual application package resources.

<a id="opIdappDGET"></a>

> Code samples

```bash
curl https://example.com/onboarded_app_packages/string/appd \
  -H 'Accept: application/json'
```

`GET /onboarded_app_packages/{appDId}/appd`

Reads the content of the AppD of on-boarded individual application package resources.

<h3 id="reads-the-content-of-the-appd-of-on-boarded-individual-application-package-resources-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|Attribute-based filtering parameters according to ETSI GS MEC 009|
|all_fields|query|string|false|Include all complex attributes in the response.|
|fields|query|string|false|Complex attributes of AppPkgInfo to be included into the response|
|exclude_fields|query|string|false|Complex attributes of AppPkgInfo to be excluded from the response.|
|exclude_default|query|string|false|Indicates to exclude the following complex attributes of AppPkgInfo from the response.|
|appDId|path|string|true|Identifier of an application descriptor|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 406 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 429 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

<h3 id="reads-the-content-of-the-appd-of-on-boarded-individual-application-package-resources-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Content of the AppD is returned.|[AppD](#schemaappd)|
|400|Bad Request|Bad Request : used to indicate that incorrect parameters were passed to the request.|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized :  used when the client did not submit credentials.|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden :  operation is not allowed given the current status of the resource.|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found :  used when a client provided a URI that cannot be mapped to a valid resource URI.|[ProblemDetails](#schemaproblemdetails)|
|406|Not Acceptable|Not Acceptable : used to indicate that the server cannot provide the any of the content formats supported by the client.|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests : used when a rate limiter has triggered.|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Fetch the onboarded application package content identified by appPkgId or appDId.

<a id="opIdappDIdGET"></a>

> Code samples

```bash
curl https://example.com/onboarded_app_packages/string/package_content \
  -H 'Accept: application/json'
```

`GET /onboarded_app_packages/{appDId}/package_content`

Fetch the onboarded application package content identified by appPkgId or appDId.

<h3 id="fetch-the-onboarded-application-package-content-identified-by-apppkgid-or-appdid-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appDId|path|string|true|Identifier of an application descriptor|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 406 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 429 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

<h3 id="fetch-the-onboarded-application-package-content-identified-by-apppkgid-or-appdid-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The payload body shall contain a copy of the file representing the AppD or a ZIP file that contains the file or multiple files representing the AppD.|None|
|206|Partial Content|Partial content|None|
|400|Bad Request|Bad Request : used to indicate that incorrect parameters were passed to the request.|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized :  used when the client did not submit credentials.|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden :  operation is not allowed given the current status of the resource.|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found :  used when a client provided a URI that cannot be mapped to a valid resource URI.|[ProblemDetails](#schemaproblemdetails)|
|406|Not Acceptable|Not Acceptable : used to indicate that the server cannot provide the any of the content formats supported by the client.|[ProblemDetails](#schemaproblemdetails)|
|416|Range Not Satisfiable|Range Not Satisfiable .|None|
|429|Too Many Requests|Too Many Requests : used when a rate limiter has triggered.|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Uploads the content of application package.

<a id="opIdappDIdPUT"></a>

> Code samples

```bash
curl https://example.com/onboarded_app_packages/string/package_content \
  -X PUT \
  -H 'Content-Type: application/zip' \
  -H 'Accept: application/json' \
  --data-binary '@/path/to/file'
```

`PUT /onboarded_app_packages/{appDId}/package_content`

Uploads the content of application package.

<h3 id="uploads-the-content-of-application-package-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appDId|path|string|true|Identifier of an application descriptor|
|body|body|string(binary)|false|none|

> Example responses

> 400 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 406 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 409 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 429 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

<h3 id="uploads-the-content-of-application-package-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|The application package has been accepted for uploading, but the processing has not been completed.|None|
|400|Bad Request|Bad Request : used to indicate that incorrect parameters were passed to the request.|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized :  used when the client did not submit credentials.|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden :  operation is not allowed given the current status of the resource.|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found :  used when a client provided a URI that cannot be mapped to a valid resource URI.|[ProblemDetails](#schemaproblemdetails)|
|406|Not Acceptable|Not Acceptable : used to indicate that the server cannot provide the any of the content formats supported by the client.|[ProblemDetails](#schemaproblemdetails)|
|409|Conflict|Conflict : The operation cannot be executed currently, due to a conflict with the state of the resource|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests : used when a rate limiter has triggered.|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## used to retrieve the information of subscriptions to individual application package resource in MEO

<a id="opIdsubscriptionsGET"></a>

> Code samples

```bash
curl https://example.com/subscriptions \
  -H 'Accept: application/json'
```

`GET /subscriptions`

used to retrieve the information of subscriptions to individual application package resource in MEO package

> Example responses

> 200 Response

```json
{
  "_links": {
    "self": {
      "href": "http://example.com"
    },
    "subscriptions": [
      {
        "href": "http://example.com",
        "subsctiptionType": "AppPackageOnBoarding"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 406 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 429 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

<h3 id="used-to-retrieve-the-information-of-subscriptions-to-individual-application-package-resource-in-meo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of zero or more subscriptions|[AppPkgSubscriptionLinkList](#schemaapppkgsubscriptionlinklist)|
|400|Bad Request|Bad Request : used to indicate that incorrect parameters were passed to the request.|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized :  used when the client did not submit credentials.|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden :  operation is not allowed given the current status of the resource.|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found :  used when a client provided a URI that cannot be mapped to a valid resource URI.|[ProblemDetails](#schemaproblemdetails)|
|406|Not Acceptable|Not Acceptable : used to indicate that the server cannot provide the any of the content formats supported by the client.|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests : used when a rate limiter has triggered.|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Subscribe to notifications about on-boarding an application package

<a id="opIdsubscriptionsPOST"></a>

> Code samples

```bash
curl https://example.com/subscriptions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "appPkgFilter": [
      "string"
    ],
    "callbackUri": "http://example.com",
    "subsctiptionType": "AppPackageOnBoarding"
  }'
```

`POST /subscriptions`

Subscribe to notifications about on-boarding an application package

> Body parameter

```json
{
  "appPkgFilter": [
    "string"
  ],
  "callbackUri": "http://example.com",
  "subsctiptionType": "AppPackageOnBoarding"
}
```

<h3 id="subscribe-to-notifications-about-on-boarding-an-application-package-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AppPkgSubscription](#schemaapppkgsubscription)|true|The input parameters of subscribe operation to notifications|
|» appPkgFilter|body|[[AppPkgFilter](#schemaapppkgfilter)]|false|none|
|» callbackUri|body|[CallbackUri](#schemacallbackuri)|true|The URI of the endpoint for the notification to be sent to.|
|» subsctiptionType|body|[SubsctiptionType.AppPkg](#schemasubsctiptiontype.apppkg)|true|'Subscribed notification type'|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» subsctiptionType|AppPackageOnBoarding|
|» subsctiptionType|AppPacakgeOperationChange|
|» subsctiptionType|AppPackageDeletion|

> Example responses

> 201 Response

```json
{
  "_links": {
    "self": {
      "href": "http://example.com"
    }
  },
  "callbackUri": "http://example.com",
  "id": "string",
  "subscriptionType": "AppPackageOnBoarding"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 406 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 429 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

<h3 id="subscribe-to-notifications-about-on-boarding-an-application-package-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful response for created subscription|[AppPkgSubscriptionInfo](#schemaapppkgsubscriptioninfo)|
|400|Bad Request|Bad Request : used to indicate that incorrect parameters were passed to the request.|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized :  used when the client did not submit credentials.|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden :  operation is not allowed given the current status of the resource.|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found :  used when a client provided a URI that cannot be mapped to a valid resource URI.|[ProblemDetails](#schemaproblemdetails)|
|406|Not Acceptable|Not Acceptable : used to indicate that the server cannot provide the any of the content formats supported by the client.|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests : used when a rate limiter has triggered.|[ProblemDetails](#schemaproblemdetails)|

<h3 id="subscribe-to-notifications-about-on-boarding-an-application-package-callbacks">Callbacks</h3>

|Name|Expression|Method|Description|
|---|---|---|---|
|notification|{$request.body#/subscription.href}|POST|Callback POST used to send a notification|

<aside class="success">
This operation does not require authentication
</aside>

## Used to represent an individual subscription to notifications about application package changes.

<a id="opIdindividualSubscriptionGET"></a>

> Code samples

```bash
curl https://example.com/subscriptions/string \
  -H 'Accept: application/json'
```

`GET /subscriptions/{subscriptionId}`

Used to represent an individual subscription to notifications about application package changes.

<h3 id="used-to-represent-an-individual-subscription-to-notifications-about-application-package-changes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|Identifier of an individual subscription to notifications about application package changes|

> Example responses

> 200 Response

```json
{
  "_links": {
    "self": {
      "href": "http://example.com"
    }
  },
  "callbackUri": "http://example.com",
  "id": "string",
  "subscriptionType": "AppPackageOnBoarding"
}
```

> 400 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 401 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 406 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 429 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

<h3 id="used-to-represent-an-individual-subscription-to-notifications-about-application-package-changes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Representation of the resource.|[AppPkgSubscriptionInfo](#schemaapppkgsubscriptioninfo)|
|400|Bad Request|Bad Request : used to indicate that incorrect parameters were passed to the request.|[ProblemDetails](#schemaproblemdetails)|
|401|Unauthorized|Unauthorized :  used when the client did not submit credentials.|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden :  operation is not allowed given the current status of the resource.|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found :  used when a client provided a URI that cannot be mapped to a valid resource URI.|[ProblemDetails](#schemaproblemdetails)|
|406|Not Acceptable|Not Acceptable : used to indicate that the server cannot provide the any of the content formats supported by the client.|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests : used when a rate limiter has triggered.|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

## Deletes the individual subscription to notifications about application package changes in MEO.

<a id="opIdindividualSubscriptionDELETE"></a>

> Code samples

```bash
curl https://example.com/subscriptions/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /subscriptions/{subscriptionId}`

Deletes the individual subscription to notifications about application package changes in MEO.

<h3 id="deletes-the-individual-subscription-to-notifications-about-application-package-changes-in-meo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|Identifier of an individual subscription to notifications about application package changes|

> Example responses

> 401 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 429 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

<h3 id="deletes-the-individual-subscription-to-notifications-about-application-package-changes-in-meo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|401|Unauthorized|Unauthorized :  used when the client did not submit credentials.|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden :  operation is not allowed given the current status of the resource.|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found :  used when a client provided a URI that cannot be mapped to a valid resource URI.|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests : used when a rate limiter has triggered.|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="etsi-gs-mec-010-2---part-2-application-lifecycle-rules-and-requirements-management-app-pkgm-notifications">app-pkgm-notifications</h1>

App Package management notifications

## Registers a notification endpoint to notify application package operations

<a id="opIdapp_pkg_notificationPOST"></a>

> Code samples

```bash
curl https://example.com/user_defined_notification \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "_links": {
      "subscription": {
        "href": "http://example.com"
      }
    },
    "appDId": "string",
    "appPkgId": "string",
    "id": "string",
    "notificationType": "AppPackageOnBoarded",
    "operationalState": "DISABLED",
    "subscriptionId": "string",
    "timeStamp": {
      "nanoSeconds": 0,
      "seconds": 0
    }
  }'
```

`POST /user_defined_notification`

Registers a notification endpoint to notify application package operations

> Body parameter

```json
{
  "_links": {
    "subscription": {
      "href": "http://example.com"
    }
  },
  "appDId": "string",
  "appPkgId": "string",
  "id": "string",
  "notificationType": "AppPackageOnBoarded",
  "operationalState": "DISABLED",
  "subscriptionId": "string",
  "timeStamp": {
    "nanoSeconds": 0,
    "seconds": 0
  }
}
```

<h3 id="registers-a-notification-endpoint-to-notify-application-package-operations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AppPkgNotification](#schemaapppkgnotification)|true|Notification endpoint to be created|
|» _links|body|[AppPkgNotification.links](#schemaapppkgnotification.links)|true|Links to resources related to this resource.|
|» appDId|body|[AppDId](#schemaappdid)|true|Identifier of this MEC application descriptor. This attribute shall be globally unique.|
|» appPkgId|body|[AppPkgId](#schemaapppkgid)|true|Identifier of the onboarded application package.|
|» id|body|[AppPkgNotification.Id](#schemaapppkgnotification.id)|true|''|
|» notificationType|body|[AppPkg.NotificationType](#schemaapppkg.notificationtype)|true|Discriminator for the different notification types|
|» operationalState|body|string|true|none|
|» subscriptionId|body|[SubscriptionId](#schemasubscriptionid)|true|Identifier of the subscription related to this notification.|
|» timeStamp|body|[TimeStamp](#schematimestamp)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» notificationType|AppPackageOnBoarded|
|» notificationType|AppPacakgeEnabled|
|» notificationType|AppPacakgeDisabled|
|» notificationType|AppPackageDeleted|
|» operationalState|DISABLED|
|» operationalState|ENABLED|

> Example responses

> 401 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 403 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 404 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

> 429 Response

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

<h3 id="registers-a-notification-endpoint-to-notify-application-package-operations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|401|Unauthorized|Unauthorized :  used when the client did not submit credentials.|[ProblemDetails](#schemaproblemdetails)|
|403|Forbidden|Forbidden :  operation is not allowed given the current status of the resource.|[ProblemDetails](#schemaproblemdetails)|
|404|Not Found|Not Found :  used when a client provided a URI that cannot be mapped to a valid resource URI.|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|Too Many Requests : used when a rate limiter has triggered.|[ProblemDetails](#schemaproblemdetails)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
"DROP"
```

'Identifies the action of the MEC host data plane, when a packet matches the trafficFilter.'

<h2 id="tocS_Algorithm">Algorithm</h2>
<!-- backwards compatibility -->
<a id="schemaalgorithm"></a>
<a id="schema_Algorithm"></a>
<a id="tocSalgorithm"></a>
<a id="tocsalgorithm"></a>

```json
"string"
```

 Name of the algorithm used to generate the checksum,  as defined in ETSI GS NFV-SOL 004. For example, SHA-256, SHA-512.

<h2 id="tocS_AppD">AppD</h2>
<!-- backwards compatibility -->
<a id="schemaappd"></a>
<a id="schema_AppD"></a>
<a id="tocSappd"></a>
<a id="tocsappd"></a>

```json
{
  "appDId": "string",
  "appDNSRule": [
    {
      "dnsRuleId": "string",
      "domainName": "string",
      "ipAddress": "string",
      "ipAddressType": "IP_V6",
      "ttl": 0
    }
  ],
  "appDVersion": "string",
  "appDescription": "string",
  "appExtCpd": [
    {
      "inherited_attributes": {},
      "virtualNetworkInterfaceRequirements": [
        "string"
      ]
    }
  ],
  "appFeatureOptional": [
    {
      "featureName": "string",
      "version": "string"
    }
  ],
  "appFeatureRequired": [
    {
      "featureName": "string",
      "version": "string"
    }
  ],
  "appInfoName": "string",
  "appLatency": {
    "maxLatency": 0
  },
  "appName": "string",
  "appProvider": "string",
  "appServiceOptional": [
    {
      "requestedPermissions": [
        "string"
      ],
      "serCategory": null,
      "serName": "string",
      "serTransportDependencies": [
        {
          "labels": [
            "string"
          ],
          "serializers": [
            "string"
          ],
          "transport": {
            "protocol": "string",
            "security": null,
            "type": "string",
            "version": "string"
          }
        }
      ],
      "version": "string"
    }
  ],
  "appServiceProduced": [
    {
      "serCategory": null,
      "serName": "string",
      "transportsSupported": {
        "serializers": [
          "string"
        ],
        "transport": {
          "protocol": "string",
          "security": null,
          "type": "string",
          "version": "string"
        }
      },
      "version": "string"
    }
  ],
  "appServiceRequired": [
    {
      "requestedPermissions": [
        "string"
      ],
      "serCategory": null,
      "serName": "string",
      "serTransportDependencies": [
        {
          "labels": [
            "string"
          ],
          "serializers": [
            "string"
          ],
          "transport": {
            "protocol": "string",
            "security": null,
            "type": "string",
            "version": "string"
          }
        }
      ],
      "version": "string"
    }
  ],
  "appSoftVersion": "string",
  "appTrafficRule": [
    {
      "action": "DROP",
      "dstInterface": [
        {
          "dstIPAddress": "string",
          "dstMACAddress": "string",
          "interfaceType": "TUNNEL",
          "srcMACAddress": "string",
          "tunnelInfo": {
            "tunnelDstAddress": "string",
            "tunnelSpecificData": "string",
            "tunnelSrcAddress": "string",
            "tunnelType": "GTP-U"
          }
        }
      ],
      "filterType": "FLOW",
      "priority": 0,
      "trafficFilter": [
        {
          "dSCP": 0,
          "dstAddress": [
            "string"
          ],
          "dstPort": [
            "string"
          ],
          "dstTunnelPort": [
            "string"
          ],
          "protocol": [
            "string"
          ],
          "qCI": 0,
          "srcAddress": [
            "string"
          ],
          "srcPort": [
            "string"
          ],
          "srcTunnelAddress": [
            "string"
          ],
          "srcTunnelPort": [
            "string"
          ],
          "tC": 0,
          "tag": [
            "string"
          ],
          "tgtTunnelAddress": [
            "string"
          ]
        }
      ],
      "trafficRuleId": "string"
    }
  ],
  "changeAppInstanceStateOpConfig": "string",
  "mecVersion": [
    "string"
  ],
  "swImageDescriptor": "string",
  "terminateAppInstanceOpConfig": "string",
  "transportDependencies": [
    {
      "labels": [
        "string"
      ],
      "serializers": [
        "string"
      ],
      "transport": {
        "protocol": "string",
        "security": null,
        "type": "string",
        "version": "string"
      }
    }
  ],
  "virtualComputeDescriptor": "string",
  "virtualStorageDescriptor": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appDId|string|true|none|Identifier of this MEC application descriptor. This attribute shall be globally unique. See note 1.|
|appDNSRule|[[DNSRuleDescriptor](#schemadnsruledescriptor)]|false|none|Describes DNS rules the MEC application requires.|
|appDVersion|string|true|none|Identifies the version of the application descriptor.|
|appDescription|string|true|none|Human readable description of the MEC application.|
|appExtCpd|[[AppExternalCpd](#schemaappexternalcpd)]|false|none|Describes external interface(s) exposed by this MEC application.|
|appFeatureOptional|[[FeatureDependency](#schemafeaturedependency)]|false|none|Describes features a MEC application may use if available.|
|appFeatureRequired|[[FeatureDependency](#schemafeaturedependency)]|false|none|Describes features a MEC application requires to run.|
|appInfoName|string|false|none|Human readable name for the MEC application.|
|appLatency|[LatencyDescriptor](#schemalatencydescriptor)|false|none|none|
|appName|string|true|none|Name to identify the MEC application.|
|appProvider|string|true|none|Provider of the application and of the AppD.|
|appServiceOptional|[[ServiceDependency](#schemaservicedependency)]|false|none|Describes services a MEC application may use if available.|
|appServiceProduced|[[ServiceDescriptor](#schemaservicedescriptor)]|false|none|Describes services a MEC application is able to produce to the platform or other MEC applications. Only relevant for service-producing apps.|
|appServiceRequired|[[ServiceDependency](#schemaservicedependency)]|false|none|Describes services a MEC application requires to run.|
|appSoftVersion|string|true|none|Identifies the version of software of the MEC application.|
|appTrafficRule|[[TrafficRuleDescriptor](#schematrafficruledescriptor)]|false|none|Describes traffic rules the MEC application requires.|
|changeAppInstanceStateOpConfig|[ChangeAppInstanceStateOpConfig](#schemachangeappinstancestateopconfig)|false|none|NFV|
|mecVersion|[string]|true|none|Identifies version(s) of MEC system compatible with the MEC application described in this version of the AppD.|
|swImageDescriptor|[SwImageDescriptor](#schemaswimagedescriptor)|true|none|Ref NFV|
|terminateAppInstanceOpConfig|[TerminateAppInstanceOpConfig](#schematerminateappinstanceopconfig)|false|none|NFV|
|transportDependencies|[[TransportDependency](#schematransportdependency)]|false|none|Transports, if any, that this application requires to be provided by the platform. These transports will be used by the application to deliver services provided by this application. Only relevant for service-producing apps. See note 2.|
|virtualComputeDescriptor|[VirtualComputeDescription](#schemavirtualcomputedescription)|true|none|Ref NFV|
|virtualStorageDescriptor|[[VirtualStorageDescriptor](#schemavirtualstoragedescriptor)]|false|none|Defines descriptors of virtual storage resources to be used by the MEC application.|

<h2 id="tocS_AppDId">AppDId</h2>
<!-- backwards compatibility -->
<a id="schemaappdid"></a>
<a id="schema_AppDId"></a>
<a id="tocSappdid"></a>
<a id="tocsappdid"></a>

```json
"string"
```

Identifier of this MEC application descriptor. This attribute shall be globally unique.

<h2 id="tocS_AppDVersion">AppDVersion</h2>
<!-- backwards compatibility -->
<a id="schemaappdversion"></a>
<a id="schema_AppDVersion"></a>
<a id="tocSappdversion"></a>
<a id="tocsappdversion"></a>

```json
"string"
```

Identifies the version of the application descriptor.

<h2 id="tocS_AppExternalCpd">AppExternalCpd</h2>
<!-- backwards compatibility -->
<a id="schemaappexternalcpd"></a>
<a id="schema_AppExternalCpd"></a>
<a id="tocSappexternalcpd"></a>
<a id="tocsappexternalcpd"></a>

```json
{
  "inherited_attributes": {},
  "virtualNetworkInterfaceRequirements": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inherited_attributes|object|true|none|All attributes inherited from Cpd.|
|virtualNetworkInterfaceRequirements|[[VirtualNetworkInterfaceRequirements](#schemavirtualnetworkinterfacerequirements)]|false|none|Specifies requirements on a virtual network interface realizing the CPs instantiated from this CPD.|

<h2 id="tocS_AppName">AppName</h2>
<!-- backwards compatibility -->
<a id="schemaappname"></a>
<a id="schema_AppName"></a>
<a id="tocSappname"></a>
<a id="tocsappname"></a>

```json
"string"
```

Name to identify the MEC application.

<h2 id="tocS_AppPkg.NotificationType">AppPkg.NotificationType</h2>
<!-- backwards compatibility -->
<a id="schemaapppkg.notificationtype"></a>
<a id="schema_AppPkg.NotificationType"></a>
<a id="tocSapppkg.notificationtype"></a>
<a id="tocsapppkg.notificationtype"></a>

```json
"AppPackageOnBoarded"
```

Discriminator for the different notification types

<h2 id="tocS_AppPkg.OperationalState">AppPkg.OperationalState</h2>
<!-- backwards compatibility -->
<a id="schemaapppkg.operationalstate"></a>
<a id="schema_AppPkg.OperationalState"></a>
<a id="tocSapppkg.operationalstate"></a>
<a id="tocsapppkg.operationalstate"></a>

```json
"ENABLED"
```

Operational state of the onboarded application package: Ã¢â‚¬Â¢ENABLED: the application package can be used for instantiation of new application instances. Ã¢â‚¬Â¢DISABLED: the application package cannot be used for further application instantiation requests.

<h2 id="tocS_AppPkg.SubscriptionType">AppPkg.SubscriptionType</h2>
<!-- backwards compatibility -->
<a id="schemaapppkg.subscriptiontype"></a>
<a id="schema_AppPkg.SubscriptionType"></a>
<a id="tocSapppkg.subscriptiontype"></a>
<a id="tocsapppkg.subscriptiontype"></a>

```json
"AppPackageOnBoarding"
```

Subscribed notification type.

<h2 id="tocS_AppPkgArtifactInfo">AppPkgArtifactInfo</h2>
<!-- backwards compatibility -->
<a id="schemaapppkgartifactinfo"></a>
<a id="schema_AppPkgArtifactInfo"></a>
<a id="tocSapppkgartifactinfo"></a>
<a id="tocsapppkgartifactinfo"></a>

```json
null
```

Additional information of application package artifacts that are not application software images. Type is TBD

<h2 id="tocS_AppPkgFilter">AppPkgFilter</h2>
<!-- backwards compatibility -->
<a id="schemaapppkgfilter"></a>
<a id="schema_AppPkgFilter"></a>
<a id="tocSapppkgfilter"></a>
<a id="tocsapppkgfilter"></a>

```json
"string"
```

The attribute-based filter is to filter application packages on which the query applies.

<h2 id="tocS_AppPkgId">AppPkgId</h2>
<!-- backwards compatibility -->
<a id="schemaapppkgid"></a>
<a id="schema_AppPkgId"></a>
<a id="tocSapppkgid"></a>
<a id="tocsapppkgid"></a>

```json
"string"
```

Identifier of the onboarded application package.

<h2 id="tocS_AppPkgInfo">AppPkgInfo</h2>
<!-- backwards compatibility -->
<a id="schemaapppkginfo"></a>
<a id="schema_AppPkgInfo"></a>
<a id="tocSapppkginfo"></a>
<a id="tocsapppkginfo"></a>

```json
{
  "_links": {
    "appD": {
      "href": "http://example.com"
    },
    "appPkgContent": {
      "href": "http://example.com"
    },
    "self": {
      "href": "http://example.com"
    }
  },
  "additionalArtifacts": null,
  "appDId": "string",
  "appDVersion": "string",
  "appName": "string",
  "appProvider": "string",
  "appSoftwareVersion": "string",
  "checksum": {
    "algorithm": "string",
    "hash": "string"
  },
  "id": "string",
  "onboardingState": "CREATED",
  "operationalState": "ENABLED",
  "softwareImages": null,
  "usageState": "IN_USE",
  "userDefinedData": {}
}
```

'The data type AppPkgInfo represents the parameters for an application package resource'

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[AppPkgInfo.links](#schemaapppkginfo.links)|true|none|Links to resources related to this resource.|
|additionalArtifacts|[AppPkgArtifactInfo](#schemaapppkgartifactinfo)|false|none|Additional information of application package artifacts that are not application software images. Type is TBD|
|appDId|[AppDId](#schemaappdid)|true|none|Identifier of this MEC application descriptor. This attribute shall be globally unique.|
|appDVersion|[AppDVersion](#schemaappdversion)|true|none|Identifies the version of the application descriptor.|
|appName|[AppName](#schemaappname)|true|none|Name to identify the MEC application.|
|appProvider|[AppProvider](#schemaappprovider)|false|none|Provider of the application and of the AppD.|
|appSoftwareVersion|[AppSoftwareVersion](#schemaappsoftwareversion)|true|none|Software version of the application. This is updated when there is any change to the software in the onboarded application package.|
|checksum|[Checksum](#schemachecksum)|true|none|none|
|id|[AppPkgId](#schemaapppkgid)|true|none|Identifier of the onboarded application package.|
|onboardingState|[OnboardingState](#schemaonboardingstate)|true|none|Onboarding state of application package|
|operationalState|[AppPkg.OperationalState](#schemaapppkg.operationalstate)|true|none|Operational state of the onboarded application package: Ã¢â‚¬Â¢ENABLED: the application package can be used for instantiation of new application instances. Ã¢â‚¬Â¢DISABLED: the application package cannot be used for further application instantiation requests.|
|softwareImages|[AppPkgSWImageInfo](#schemaapppkgswimageinfo)|true|none|Information of application software image in application package. Type is TBD|
|usageState|[UsageState](#schemausagestate)|true|none|Usage state of the onboarded instance of the application package|
|userDefinedData|[KeyValuePairs](#schemakeyvaluepairs)|false|none|'This data type represents a list of key-value pairs. The order of the pairs in the list is not significant. In JSON, a set of key-value pairs is represented as an object. It shall comply with the provisions defined in clause 4 of IETF RFC 8259'|

#### Enumerated Values

|Property|Value|
|---|---|
|onboardingState|CREATED|
|onboardingState|UPLOADING|
|onboardingState|PROCESSING|
|onboardingState|ONBOARDED|
|operationalState|ENABLED|
|operationalState|DISABLED|
|usageState|IN_USE|
|usageState|NOT_IN_USE|

<h2 id="tocS_AppPkgInfo.links">AppPkgInfo.links</h2>
<!-- backwards compatibility -->
<a id="schemaapppkginfo.links"></a>
<a id="schema_AppPkgInfo.links"></a>
<a id="tocSapppkginfo.links"></a>
<a id="tocsapppkginfo.links"></a>

```json
{
  "appD": {
    "href": "http://example.com"
  },
  "appPkgContent": {
    "href": "http://example.com"
  },
  "self": {
    "href": "http://example.com"
  }
}
```

Links to resources related to this resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appD|[LinkType](#schemalinktype)|true|none|none|
|appPkgContent|[LinkType](#schemalinktype)|true|none|none|
|self|[LinkType](#schemalinktype)|true|none|none|

<h2 id="tocS_AppPkgInfoModifications">AppPkgInfoModifications</h2>
<!-- backwards compatibility -->
<a id="schemaapppkginfomodifications"></a>
<a id="schema_AppPkgInfoModifications"></a>
<a id="tocSapppkginfomodifications"></a>
<a id="tocsapppkginfomodifications"></a>

```json
{
  "operationState": "DISABLED"
}
```

'The data type represents the operational state for an application package resource'

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operationState|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operationState|DISABLED|
|operationState|ENABLED|

<h2 id="tocS_AppPkgNotification">AppPkgNotification</h2>
<!-- backwards compatibility -->
<a id="schemaapppkgnotification"></a>
<a id="schema_AppPkgNotification"></a>
<a id="tocSapppkgnotification"></a>
<a id="tocsapppkgnotification"></a>

```json
{
  "_links": {
    "subscription": {
      "href": "http://example.com"
    }
  },
  "appDId": "string",
  "appPkgId": "string",
  "id": "string",
  "notificationType": "AppPackageOnBoarded",
  "operationalState": "DISABLED",
  "subscriptionId": "string",
  "timeStamp": {
    "nanoSeconds": 0,
    "seconds": 0
  }
}
```

'This data type represents an application package management notification for informing the subscribers about onboarding application package resources. The notification is triggered when a new application package is onboarded'

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[AppPkgNotification.links](#schemaapppkgnotification.links)|true|none|Links to resources related to this resource.|
|appDId|[AppDId](#schemaappdid)|true|none|Identifier of this MEC application descriptor. This attribute shall be globally unique.|
|appPkgId|[AppPkgId](#schemaapppkgid)|true|none|Identifier of the onboarded application package.|
|id|[AppPkgNotification.Id](#schemaapppkgnotification.id)|true|none|''|
|notificationType|[AppPkg.NotificationType](#schemaapppkg.notificationtype)|true|none|Discriminator for the different notification types|
|operationalState|string|true|none|none|
|subscriptionId|[SubscriptionId](#schemasubscriptionid)|true|none|Identifier of the subscription related to this notification.|
|timeStamp|[TimeStamp](#schematimestamp)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|notificationType|AppPackageOnBoarded|
|notificationType|AppPacakgeEnabled|
|notificationType|AppPacakgeDisabled|
|notificationType|AppPackageDeleted|
|operationalState|DISABLED|
|operationalState|ENABLED|

<h2 id="tocS_AppPkgNotification.Id">AppPkgNotification.Id</h2>
<!-- backwards compatibility -->
<a id="schemaapppkgnotification.id"></a>
<a id="schema_AppPkgNotification.Id"></a>
<a id="tocSapppkgnotification.id"></a>
<a id="tocsapppkgnotification.id"></a>

```json
"string"
```

''

<h2 id="tocS_AppPkgNotification.links">AppPkgNotification.links</h2>
<!-- backwards compatibility -->
<a id="schemaapppkgnotification.links"></a>
<a id="schema_AppPkgNotification.links"></a>
<a id="tocSapppkgnotification.links"></a>
<a id="tocsapppkgnotification.links"></a>

```json
{
  "subscription": {
    "href": "http://example.com"
  }
}
```

Links to resources related to this resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subscription|[LinkType](#schemalinktype)|true|none|none|

<h2 id="tocS_AppPkgSWImageInfo">AppPkgSWImageInfo</h2>
<!-- backwards compatibility -->
<a id="schemaapppkgswimageinfo"></a>
<a id="schema_AppPkgSWImageInfo"></a>
<a id="tocSapppkgswimageinfo"></a>
<a id="tocsapppkgswimageinfo"></a>

```json
null
```

Information of application software image in application package. Type is TBD

<h2 id="tocS_AppPkgSubscription">AppPkgSubscription</h2>
<!-- backwards compatibility -->
<a id="schemaapppkgsubscription"></a>
<a id="schema_AppPkgSubscription"></a>
<a id="tocSapppkgsubscription"></a>
<a id="tocsapppkgsubscription"></a>

```json
{
  "appPkgFilter": [
    "string"
  ],
  "callbackUri": "http://example.com",
  "subsctiptionType": "AppPackageOnBoarding"
}
```

'The data type represents the input parameters of "subscription operation" to notification of application package management for the onboarding, or operational state change of application package.'

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appPkgFilter|[[AppPkgFilter](#schemaapppkgfilter)]|false|none|none|
|callbackUri|[CallbackUri](#schemacallbackuri)|true|none|The URI of the endpoint for the notification to be sent to.|
|subsctiptionType|[SubsctiptionType.AppPkg](#schemasubsctiptiontype.apppkg)|true|none|'Subscribed notification type'|

#### Enumerated Values

|Property|Value|
|---|---|
|subsctiptionType|AppPackageOnBoarding|
|subsctiptionType|AppPacakgeOperationChange|
|subsctiptionType|AppPackageDeletion|

<h2 id="tocS_AppPkgSubscriptionInfo">AppPkgSubscriptionInfo</h2>
<!-- backwards compatibility -->
<a id="schemaapppkgsubscriptioninfo"></a>
<a id="schema_AppPkgSubscriptionInfo"></a>
<a id="tocSapppkgsubscriptioninfo"></a>
<a id="tocsapppkgsubscriptioninfo"></a>

```json
{
  "_links": {
    "self": {
      "href": "http://example.com"
    }
  },
  "callbackUri": "http://example.com",
  "id": "string",
  "subscriptionType": "AppPackageOnBoarding"
}
```

'The data type represents a subscription to notification of application package management for the onboarding, or operational state change of application package'

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[AppPkgSubscriptionInfo.links](#schemaapppkgsubscriptioninfo.links)|true|none|Links to resources related to this resource.|
|callbackUri|[CallbackUri](#schemacallbackuri)|true|none|The URI of the endpoint for the notification to be sent to.|
|id|[AppPkgSubscriptionInfo.Id](#schemaapppkgsubscriptioninfo.id)|true|none|''|
|subscriptionType|[AppPkg.SubscriptionType](#schemaapppkg.subscriptiontype)|true|none|Subscribed notification type.|

#### Enumerated Values

|Property|Value|
|---|---|
|subscriptionType|AppPackageOnBoarding|
|subscriptionType|AppPacakgeOperationChange|
|subscriptionType|AppPackageDeletion|

<h2 id="tocS_AppPkgSubscriptionInfo.Id">AppPkgSubscriptionInfo.Id</h2>
<!-- backwards compatibility -->
<a id="schemaapppkgsubscriptioninfo.id"></a>
<a id="schema_AppPkgSubscriptionInfo.Id"></a>
<a id="tocSapppkgsubscriptioninfo.id"></a>
<a id="tocsapppkgsubscriptioninfo.id"></a>

```json
"string"
```

''

<h2 id="tocS_AppPkgSubscriptionInfo.links">AppPkgSubscriptionInfo.links</h2>
<!-- backwards compatibility -->
<a id="schemaapppkgsubscriptioninfo.links"></a>
<a id="schema_AppPkgSubscriptionInfo.links"></a>
<a id="tocSapppkgsubscriptioninfo.links"></a>
<a id="tocsapppkgsubscriptioninfo.links"></a>

```json
{
  "self": {
    "href": "http://example.com"
  }
}
```

Links to resources related to this resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|[LinkType](#schemalinktype)|true|none|none|

<h2 id="tocS_AppPkgSubscriptionLinkList">AppPkgSubscriptionLinkList</h2>
<!-- backwards compatibility -->
<a id="schemaapppkgsubscriptionlinklist"></a>
<a id="schema_AppPkgSubscriptionLinkList"></a>
<a id="tocSapppkgsubscriptionlinklist"></a>
<a id="tocsapppkgsubscriptionlinklist"></a>

```json
{
  "_links": {
    "self": {
      "href": "http://example.com"
    },
    "subscriptions": [
      {
        "href": "http://example.com",
        "subsctiptionType": "AppPackageOnBoarding"
      }
    ]
  }
}
```

'The data type represents a subscription link list of notification on application package management'

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[AppPkgSubscriptionLinkList.links](#schemaapppkgsubscriptionlinklist.links)|true|none|Links to resources related to this resource.|

<h2 id="tocS_AppPkgSubscriptionLinkList.links">AppPkgSubscriptionLinkList.links</h2>
<!-- backwards compatibility -->
<a id="schemaapppkgsubscriptionlinklist.links"></a>
<a id="schema_AppPkgSubscriptionLinkList.links"></a>
<a id="tocSapppkgsubscriptionlinklist.links"></a>
<a id="tocsapppkgsubscriptionlinklist.links"></a>

```json
{
  "self": {
    "href": "http://example.com"
  },
  "subscriptions": [
    {
      "href": "http://example.com",
      "subsctiptionType": "AppPackageOnBoarding"
    }
  ]
}
```

Links to resources related to this resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|self|[LinkType](#schemalinktype)|true|none|none|
|subscriptions|[[Subscriptions.AppPkgSubscription](#schemasubscriptions.apppkgsubscription)]|false|none|none|

<h2 id="tocS_AppProvider">AppProvider</h2>
<!-- backwards compatibility -->
<a id="schemaappprovider"></a>
<a id="schema_AppProvider"></a>
<a id="tocSappprovider"></a>
<a id="tocsappprovider"></a>

```json
"string"
```

Provider of the application and of the AppD.

<h2 id="tocS_AppSoftwareVersion">AppSoftwareVersion</h2>
<!-- backwards compatibility -->
<a id="schemaappsoftwareversion"></a>
<a id="schema_AppSoftwareVersion"></a>
<a id="tocSappsoftwareversion"></a>
<a id="tocsappsoftwareversion"></a>

```json
"string"
```

Software version of the application. This is updated when there is any change to the software in the onboarded application package.

<h2 id="tocS_CallbackUri">CallbackUri</h2>
<!-- backwards compatibility -->
<a id="schemacallbackuri"></a>
<a id="schema_CallbackUri"></a>
<a id="tocScallbackuri"></a>
<a id="tocscallbackuri"></a>

```json
"http://example.com"
```

The URI of the endpoint for the notification to be sent to.

<h2 id="tocS_CategoryRef">CategoryRef</h2>
<!-- backwards compatibility -->
<a id="schemacategoryref"></a>
<a id="schema_CategoryRef"></a>
<a id="tocScategoryref"></a>
<a id="tocscategoryref"></a>

```json
null
```

See MEC011

<h2 id="tocS_ChangeAppInstanceStateOpConfig">ChangeAppInstanceStateOpConfig</h2>
<!-- backwards compatibility -->
<a id="schemachangeappinstancestateopconfig"></a>
<a id="schema_ChangeAppInstanceStateOpConfig"></a>
<a id="tocSchangeappinstancestateopconfig"></a>
<a id="tocschangeappinstancestateopconfig"></a>

```json
"string"
```

NFV

<h2 id="tocS_Checksum">Checksum</h2>
<!-- backwards compatibility -->
<a id="schemachecksum"></a>
<a id="schema_Checksum"></a>
<a id="tocSchecksum"></a>
<a id="tocschecksum"></a>

```json
{
  "algorithm": "string",
  "hash": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|[Algorithm](#schemaalgorithm)|true|none| Name of the algorithm used to generate the checksum,  as defined in ETSI GS NFV-SOL 004. For example, SHA-256, SHA-512.|
|hash|[Hash](#schemahash)|true|none|'String 1 The hexadecimal value of the checksum'|

<h2 id="tocS_CreateAppPkg">CreateAppPkg</h2>
<!-- backwards compatibility -->
<a id="schemacreateapppkg"></a>
<a id="schema_CreateAppPkg"></a>
<a id="tocScreateapppkg"></a>
<a id="tocscreateapppkg"></a>

```json
{
  "appPkgName": "string",
  "appPkgPath": "string",
  "appPkgVersion": "string",
  "appProvider": "string",
  "checksum": {
    "algorithm": "string",
    "hash": "string"
  },
  "userDefinedData": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appPkgName|string|true|none|Name of the application package to be onboarded.|
|appPkgPath|[URI](#schemauri)|true|none|none|
|appPkgVersion|string|true|none|Version of the application package to be onboarded.<br>The appPkgName with appPkgVersion can be used to uniquely identify the application package.|
|appProvider|string|false|none|The provider's name of the application package to be onboarded.|
|checksum|[Checksum](#schemachecksum)|true|none|none|
|userDefinedData|[KeyValuePairs](#schemakeyvaluepairs)|false|none|'This data type represents a list of key-value pairs. The order of the pairs in the list is not significant. In JSON, a set of key-value pairs is represented as an object. It shall comply with the provisions defined in clause 4 of IETF RFC 8259'|

<h2 id="tocS_DNSRuleDescriptor">DNSRuleDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemadnsruledescriptor"></a>
<a id="schema_DNSRuleDescriptor"></a>
<a id="tocSdnsruledescriptor"></a>
<a id="tocsdnsruledescriptor"></a>

```json
{
  "dnsRuleId": "string",
  "domainName": "string",
  "ipAddress": "string",
  "ipAddressType": "IP_V6",
  "ttl": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dnsRuleId|string|true|none|Identifies the DNS Rule|
|domainName|string|true|none|FQDN of the DNS rule|
|ipAddress|string|true|none|IP address given by the DNS rule|
|ipAddressType|[IpAddressType](#schemaipaddresstype)|true|none|Specifies the IP address type|
|ttl|integer|false|none|Time-to-live value|

#### Enumerated Values

|Property|Value|
|---|---|
|ipAddressType|IP_V6|
|ipAddressType|IP_V4|

<h2 id="tocS_FeatureDependency">FeatureDependency</h2>
<!-- backwards compatibility -->
<a id="schemafeaturedependency"></a>
<a id="schema_FeatureDependency"></a>
<a id="tocSfeaturedependency"></a>
<a id="tocsfeaturedependency"></a>

```json
{
  "featureName": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|featureName|string|true|none|The name of the feature, for example, UserApps, UEIdentity, etc.|
|version|string|true|none|The version of the feature.|

<h2 id="tocS_FilterType">FilterType</h2>
<!-- backwards compatibility -->
<a id="schemafiltertype"></a>
<a id="schema_FilterType"></a>
<a id="tocSfiltertype"></a>
<a id="tocsfiltertype"></a>

```json
"FLOW"
```

Definition of filter type: per FLOW or PACKET

<h2 id="tocS_Hash">Hash</h2>
<!-- backwards compatibility -->
<a id="schemahash"></a>
<a id="schema_Hash"></a>
<a id="tocShash"></a>
<a id="tocshash"></a>

```json
"string"
```

'String 1 The hexadecimal value of the checksum'

<h2 id="tocS_Href">Href</h2>
<!-- backwards compatibility -->
<a id="schemahref"></a>
<a id="schema_Href"></a>
<a id="tocShref"></a>
<a id="tocshref"></a>

```json
"http://example.com"
```

The URI referring to the subscription.

<h2 id="tocS_InterfaceDescriptor">InterfaceDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemainterfacedescriptor"></a>
<a id="schema_InterfaceDescriptor"></a>
<a id="tocSinterfacedescriptor"></a>
<a id="tocsinterfacedescriptor"></a>

```json
{
  "dstIPAddress": "string",
  "dstMACAddress": "string",
  "interfaceType": "TUNNEL",
  "srcMACAddress": "string",
  "tunnelInfo": {
    "tunnelDstAddress": "string",
    "tunnelSpecificData": "string",
    "tunnelSrcAddress": "string",
    "tunnelType": "GTP-U"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dstIPAddress|string|false|none|If the interface type is IP, the destination address identifies the IP address of the destination. Only used for dstInterface.|
|dstMACAddress|string|false|none|If the interface type is MAC, the destination address identifies the MAC address of the destination. Only used for dstInterface.|
|interfaceType|[InterfaceType](#schemainterfacetype)|true|none|Type of interface.|
|srcMACAddress|string|false|none|If the interface type is MAC, the source address identifies the MAC address of the interface.|
|tunnelInfo|[TunnelInfo](#schematunnelinfo)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|interfaceType|TUNNEL|
|interfaceType|MAC|
|interfaceType|IP|

<h2 id="tocS_InterfaceType">InterfaceType</h2>
<!-- backwards compatibility -->
<a id="schemainterfacetype"></a>
<a id="schema_InterfaceType"></a>
<a id="tocSinterfacetype"></a>
<a id="tocsinterfacetype"></a>

```json
"TUNNEL"
```

Type of interface.

<h2 id="tocS_IpAddressType">IpAddressType</h2>
<!-- backwards compatibility -->
<a id="schemaipaddresstype"></a>
<a id="schema_IpAddressType"></a>
<a id="tocSipaddresstype"></a>
<a id="tocsipaddresstype"></a>

```json
"IP_V6"
```

Specifies the IP address type

<h2 id="tocS_KeyValuePairs">KeyValuePairs</h2>
<!-- backwards compatibility -->
<a id="schemakeyvaluepairs"></a>
<a id="schema_KeyValuePairs"></a>
<a id="tocSkeyvaluepairs"></a>
<a id="tocskeyvaluepairs"></a>

```json
{}
```

'This data type represents a list of key-value pairs. The order of the pairs in the list is not significant. In JSON, a set of key-value pairs is represented as an object. It shall comply with the provisions defined in clause 4 of IETF RFC 8259'

<h2 id="tocS_LatencyDescriptor">LatencyDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemalatencydescriptor"></a>
<a id="schema_LatencyDescriptor"></a>
<a id="tocSlatencydescriptor"></a>
<a id="tocslatencydescriptor"></a>

```json
{
  "maxLatency": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxLatency|integer(Uint32)|true|none|The value of the maximum latency in nano seconds tolerated by the MEC application. See note.|

<h2 id="tocS_LinkType">LinkType</h2>
<!-- backwards compatibility -->
<a id="schemalinktype"></a>
<a id="schema_LinkType"></a>
<a id="tocSlinktype"></a>
<a id="tocslinktype"></a>

```json
{
  "href": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string(uri)|true|none|URI referring to a resource|

<h2 id="tocS_Not_specified">Not_specified</h2>
<!-- backwards compatibility -->
<a id="schemanot_specified"></a>
<a id="schema_Not_specified"></a>
<a id="tocSnot_specified"></a>
<a id="tocsnot_specified"></a>

```json
"string"
```

<h2 id="tocS_OnboardingState">OnboardingState</h2>
<!-- backwards compatibility -->
<a id="schemaonboardingstate"></a>
<a id="schema_OnboardingState"></a>
<a id="tocSonboardingstate"></a>
<a id="tocsonboardingstate"></a>

```json
"CREATED"
```

Onboarding state of application package

<h2 id="tocS_ProblemDetails">ProblemDetails</h2>
<!-- backwards compatibility -->
<a id="schemaproblemdetails"></a>
<a id="schema_ProblemDetails"></a>
<a id="tocSproblemdetails"></a>
<a id="tocsproblemdetails"></a>

```json
{
  "detail": "string",
  "instance": "http://example.com",
  "status": 0,
  "title": "string",
  "type": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this occurrence of the problem|
|instance|string(uri)|false|none|A URI reference that identifies the specific occurrence of the problem|
|status|integer(uint32)|false|none|The HTTP status code for this occurrence of the problem|
|title|string|false|none|A short, human-readable summary of the problem type|
|type|string(uri)|false|none|A URI reference according to IETF RFC 3986 that identifies the problem type|

<h2 id="tocS_SecurityInfo">SecurityInfo</h2>
<!-- backwards compatibility -->
<a id="schemasecurityinfo"></a>
<a id="schema_SecurityInfo"></a>
<a id="tocSsecurityinfo"></a>
<a id="tocssecurityinfo"></a>

```json
null
```

See MEC011

<h2 id="tocS_SerName">SerName</h2>
<!-- backwards compatibility -->
<a id="schemasername"></a>
<a id="schema_SerName"></a>
<a id="tocSsername"></a>
<a id="tocssername"></a>

```json
"string"
```

The name of the service, for example, RNIS, LocationService, etc.

<h2 id="tocS_SerVersion">SerVersion</h2>
<!-- backwards compatibility -->
<a id="schemaserversion"></a>
<a id="schema_SerVersion"></a>
<a id="tocSserversion"></a>
<a id="tocsserversion"></a>

```json
"string"
```

The version of the service.

<h2 id="tocS_SerializerTypes">SerializerTypes</h2>
<!-- backwards compatibility -->
<a id="schemaserializertypes"></a>
<a id="schema_SerializerTypes"></a>
<a id="tocSserializertypes"></a>
<a id="tocsserializertypes"></a>

```json
"string"
```

<h2 id="tocS_Serializers">Serializers</h2>
<!-- backwards compatibility -->
<a id="schemaserializers"></a>
<a id="schema_Serializers"></a>
<a id="tocSserializers"></a>
<a id="tocsserializers"></a>

```json
[
  "string"
]
```

'Information about the serializers in this binding, as defined in the SerializerTypes type in ETSI GS MEC 011 '

<h2 id="tocS_ServiceDependency">ServiceDependency</h2>
<!-- backwards compatibility -->
<a id="schemaservicedependency"></a>
<a id="schema_ServiceDependency"></a>
<a id="tocSservicedependency"></a>
<a id="tocsservicedependency"></a>

```json
{
  "requestedPermissions": [
    "string"
  ],
  "serCategory": null,
  "serName": "string",
  "serTransportDependencies": [
    {
      "labels": [
        "string"
      ],
      "serializers": [
        "string"
      ],
      "transport": {
        "protocol": "string",
        "security": null,
        "type": "string",
        "version": "string"
      }
    }
  ],
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestedPermissions|[[Not_specified](#schemanot_specified)]|false|none|Requested permissions regarding the access of the application to the service. See clause 8.2 of ETSI GS MEC 009 [4].<br>The format of this attribute is left for the data model design stage.|
|serCategory|[CategoryRef](#schemacategoryref)|false|none|See MEC011|
|serName|string|true|none|The name of the service, for example, RNIS, LocationService, etc.|
|serTransportDependencies|[[TransportDependency](#schematransportdependency)]|false|none|Indicates transport and serialization format dependencies of consuming the service. Defaults to REST + JSON if absent. See note.|
|version|string|true|none|The version of the service.|

<h2 id="tocS_ServiceDescriptor">ServiceDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemaservicedescriptor"></a>
<a id="schema_ServiceDescriptor"></a>
<a id="tocSservicedescriptor"></a>
<a id="tocsservicedescriptor"></a>

```json
{
  "serCategory": null,
  "serName": "string",
  "transportsSupported": {
    "serializers": [
      "string"
    ],
    "transport": {
      "protocol": "string",
      "security": null,
      "type": "string",
      "version": "string"
    }
  },
  "version": "string"
}
```

'The ServiceDescriptor data type describes a MEC service produced by a service-providing MEC application.'

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serCategory|[CategoryRef](#schemacategoryref)|false|none|See MEC011|
|serName|[SerName](#schemasername)|true|none|The name of the service, for example, RNIS, LocationService, etc.|
|transportsSupported|[TransportsSupported](#schematransportssupported)|false|none|'Indicates transports and serialization formats supported made available to the service-consuming application. Defaults to REST + JSON if absent.'|
|version|[SerVersion](#schemaserversion)|true|none|The version of the service.|

<h2 id="tocS_SubscriptionId">SubscriptionId</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionid"></a>
<a id="schema_SubscriptionId"></a>
<a id="tocSsubscriptionid"></a>
<a id="tocssubscriptionid"></a>

```json
"string"
```

Identifier of the subscription related to this notification.

<h2 id="tocS_Subscriptions.AppPkgSubscription">Subscriptions.AppPkgSubscription</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptions.apppkgsubscription"></a>
<a id="schema_Subscriptions.AppPkgSubscription"></a>
<a id="tocSsubscriptions.apppkgsubscription"></a>
<a id="tocssubscriptions.apppkgsubscription"></a>

```json
{
  "href": "http://example.com",
  "subsctiptionType": "AppPackageOnBoarding"
}
```

'The data type represents the input parameters of "subscription operation" to notification of application package management for the onboarding, or operational state change of application package.'

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|[Href](#schemahref)|true|none|The URI referring to the subscription.|
|subsctiptionType|[SubsctiptionType.AppPkg](#schemasubsctiptiontype.apppkg)|true|none|'Subscribed notification type'|

#### Enumerated Values

|Property|Value|
|---|---|
|subsctiptionType|AppPackageOnBoarding|
|subsctiptionType|AppPacakgeOperationChange|
|subsctiptionType|AppPackageDeletion|

<h2 id="tocS_SubsctiptionType.AppPkg">SubsctiptionType.AppPkg</h2>
<!-- backwards compatibility -->
<a id="schemasubsctiptiontype.apppkg"></a>
<a id="schema_SubsctiptionType.AppPkg"></a>
<a id="tocSsubsctiptiontype.apppkg"></a>
<a id="tocssubsctiptiontype.apppkg"></a>

```json
"AppPackageOnBoarding"
```

'Subscribed notification type'

<h2 id="tocS_SwImageDescriptor">SwImageDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemaswimagedescriptor"></a>
<a id="schema_SwImageDescriptor"></a>
<a id="tocSswimagedescriptor"></a>
<a id="tocsswimagedescriptor"></a>

```json
"string"
```

Ref NFV

<h2 id="tocS_TerminateAppInstanceOpConfig">TerminateAppInstanceOpConfig</h2>
<!-- backwards compatibility -->
<a id="schematerminateappinstanceopconfig"></a>
<a id="schema_TerminateAppInstanceOpConfig"></a>
<a id="tocSterminateappinstanceopconfig"></a>
<a id="tocsterminateappinstanceopconfig"></a>

```json
"string"
```

NFV

<h2 id="tocS_TimeStamp">TimeStamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_TimeStamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
{
  "nanoSeconds": 0,
  "seconds": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nanoSeconds|integer(Uint32)|true|none|The nanoseconds part of the Time. Time is defined as Unix-time since January 1, 1970, 00:00:00 UTC.|
|seconds|integer(Uint32)|true|none|The seconds part of the Time. Time is defined as Unix-time since January 1, 1970, 00:00:00 UTC.|

<h2 id="tocS_TrafficFilter">TrafficFilter</h2>
<!-- backwards compatibility -->
<a id="schematrafficfilter"></a>
<a id="schema_TrafficFilter"></a>
<a id="tocStrafficfilter"></a>
<a id="tocstrafficfilter"></a>

```json
{
  "dSCP": 0,
  "dstAddress": [
    "string"
  ],
  "dstPort": [
    "string"
  ],
  "dstTunnelPort": [
    "string"
  ],
  "protocol": [
    "string"
  ],
  "qCI": 0,
  "srcAddress": [
    "string"
  ],
  "srcPort": [
    "string"
  ],
  "srcTunnelAddress": [
    "string"
  ],
  "srcTunnelPort": [
    "string"
  ],
  "tC": 0,
  "tag": [
    "string"
  ],
  "tgtTunnelAddress": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dSCP|integer|false|none|Used to match all IPv4 packets that have the same DSCP.|
|dstAddress|[string]|false|none|A IP address or a range of IP addresses.For IPv4, the IP address could be an IP address plus mask, or an individual IP address, or a range of IP addresses.For IPv6, the IP address could be an IP prefix, or a range of IP prefixes.|
|dstPort|[string]|false|none|A port or a range of ports.|
|dstTunnelPort|[string]|false|none|Used for GTP tunnel based traffic rule.|
|protocol|[string]|false|none|Specify the protocol of the traffic filter.|
|qCI|integer|false|none|Used to match all packets that have the same QCI.|
|srcAddress|[string]|false|none|An IP address or a range of IP addresses.For IPv4, the IP address could be an IP address plus mask, or an individual IP address, or a range of IP addresses.For IPv6, the IP address could be an IP prefix, or a range of IP prefixes.|
|srcPort|[string]|false|none|A port or a range of ports.|
|srcTunnelAddress|[string]|false|none|Used for GTP tunnel based traffic rule.|
|srcTunnelPort|[string]|false|none|Used for GTP tunnel based traffic rule.|
|tC|integer|false|none|Used to match all IPv6 packets that have the same TC.|
|tag|[string]|false|none|Used for tag based traffic rule.|
|tgtTunnelAddress|[string]|false|none|Used for GTP tunnel based traffic rule.|

<h2 id="tocS_TrafficRuleDescriptor">TrafficRuleDescriptor</h2>
<!-- backwards compatibility -->
<a id="schematrafficruledescriptor"></a>
<a id="schema_TrafficRuleDescriptor"></a>
<a id="tocStrafficruledescriptor"></a>
<a id="tocstrafficruledescriptor"></a>

```json
{
  "action": "DROP",
  "dstInterface": [
    {
      "dstIPAddress": "string",
      "dstMACAddress": "string",
      "interfaceType": "TUNNEL",
      "srcMACAddress": "string",
      "tunnelInfo": {
        "tunnelDstAddress": "string",
        "tunnelSpecificData": "string",
        "tunnelSrcAddress": "string",
        "tunnelType": "GTP-U"
      }
    }
  ],
  "filterType": "FLOW",
  "priority": 0,
  "trafficFilter": [
    {
      "dSCP": 0,
      "dstAddress": [
        "string"
      ],
      "dstPort": [
        "string"
      ],
      "dstTunnelPort": [
        "string"
      ],
      "protocol": [
        "string"
      ],
      "qCI": 0,
      "srcAddress": [
        "string"
      ],
      "srcPort": [
        "string"
      ],
      "srcTunnelAddress": [
        "string"
      ],
      "srcTunnelPort": [
        "string"
      ],
      "tC": 0,
      "tag": [
        "string"
      ],
      "tgtTunnelAddress": [
        "string"
      ]
    }
  ],
  "trafficRuleId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|[Action](#schemaaction)|true|none|'Identifies the action of the MEC host data plane, when a packet matches the trafficFilter.'|
|dstInterface|[[InterfaceDescriptor](#schemainterfacedescriptor)]|false|none|none|
|filterType|[FilterType](#schemafiltertype)|true|none|Definition of filter type: per FLOW or PACKET|
|priority|integer|true|none|Priority of this traffic rule. If traffic rule conflicts, the one with higher priority take precedence.|
|trafficFilter|[[TrafficFilter](#schematrafficfilter)]|true|none|The filter used to identify specific flow/packets that need to be handled by the MEC host.|
|trafficRuleId|string|true|none|Identifies the traffic rule.|

#### Enumerated Values

|Property|Value|
|---|---|
|action|DROP|
|action|FORWARD_DECAPSULATED|
|action|FORWARD_AS_IS|
|action|PASSTHROUGH|
|action|DUPLICATED_DECAPSULATED|
|action|DUPLICATE_AS_IS|
|filterType|FLOW|
|filterType|PACKET|

<h2 id="tocS_TransportDependency">TransportDependency</h2>
<!-- backwards compatibility -->
<a id="schematransportdependency"></a>
<a id="schema_TransportDependency"></a>
<a id="tocStransportdependency"></a>
<a id="tocstransportdependency"></a>

```json
{
  "labels": [
    "string"
  ],
  "serializers": [
    "string"
  ],
  "transport": {
    "protocol": "string",
    "security": null,
    "type": "string",
    "version": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|[string]|true|none|Set of labels that allow to define groups of transport bindings. The mechanism of the grouping is defined below this table.|
|serializers|[[SerializerTypes](#schemaserializertypes)]|true|none|Information about the serializers in this transport binding, as defined in the SerializerTypes type in ETSI GS MEC 011 [i.4]. Support for at least one of the entries is required in conjunction with the transport.|
|transport|[TransportDescriptor](#schematransportdescriptor)|true|none|none|

<h2 id="tocS_TransportDescriptor">TransportDescriptor</h2>
<!-- backwards compatibility -->
<a id="schematransportdescriptor"></a>
<a id="schema_TransportDescriptor"></a>
<a id="tocStransportdescriptor"></a>
<a id="tocstransportdescriptor"></a>

```json
{
  "protocol": "string",
  "security": null,
  "type": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|protocol|string|true|none|The name of the protocol used. Shall be set to HTTP for a REST API.|
|security|[SecurityInfo](#schemasecurityinfo)|true|none|See MEC011|
|type|[TransportTypes](#schematransporttypes)|true|none|none|
|version|string|true|none|The version of the protocol used.|

<h2 id="tocS_TransportTypes">TransportTypes</h2>
<!-- backwards compatibility -->
<a id="schematransporttypes"></a>
<a id="schema_TransportTypes"></a>
<a id="tocStransporttypes"></a>
<a id="tocstransporttypes"></a>

```json
"string"
```

<h2 id="tocS_TransportsSupported">TransportsSupported</h2>
<!-- backwards compatibility -->
<a id="schematransportssupported"></a>
<a id="schema_TransportsSupported"></a>
<a id="tocStransportssupported"></a>
<a id="tocstransportssupported"></a>

```json
{
  "serializers": [
    "string"
  ],
  "transport": {
    "protocol": "string",
    "security": null,
    "type": "string",
    "version": "string"
  }
}
```

'Indicates transports and serialization formats supported made available to the service-consuming application. Defaults to REST + JSON if absent.'

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serializers|[Serializers](#schemaserializers)|false|none|'Information about the serializers in this binding, as defined in the SerializerTypes type in ETSI GS MEC 011 '|
|transport|[TransportDescriptor](#schematransportdescriptor)|false|none|none|

<h2 id="tocS_TunnelInfo">TunnelInfo</h2>
<!-- backwards compatibility -->
<a id="schematunnelinfo"></a>
<a id="schema_TunnelInfo"></a>
<a id="tocStunnelinfo"></a>
<a id="tocstunnelinfo"></a>

```json
{
  "tunnelDstAddress": "string",
  "tunnelSpecificData": "string",
  "tunnelSrcAddress": "string",
  "tunnelType": "GTP-U"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tunnelDstAddress|string|true|none|Destination address of the tunnel.|
|tunnelSpecificData|[Not_specified](#schemanot_specified)|false|none|none|
|tunnelSrcAddress|string|true|none|Source address of the tunnel.|
|tunnelType|[TunnelType](#schematunneltype)|true|none|Type of tunnel.|

#### Enumerated Values

|Property|Value|
|---|---|
|tunnelType|GTP-U|
|tunnelType|GRE|

<h2 id="tocS_TunnelType">TunnelType</h2>
<!-- backwards compatibility -->
<a id="schematunneltype"></a>
<a id="schema_TunnelType"></a>
<a id="tocStunneltype"></a>
<a id="tocstunneltype"></a>

```json
"GTP-U"
```

Type of tunnel.

<h2 id="tocS_URI">URI</h2>
<!-- backwards compatibility -->
<a id="schemauri"></a>
<a id="schema_URI"></a>
<a id="tocSuri"></a>
<a id="tocsuri"></a>

```json
"string"
```

<h2 id="tocS_UsageState">UsageState</h2>
<!-- backwards compatibility -->
<a id="schemausagestate"></a>
<a id="schema_UsageState"></a>
<a id="tocSusagestate"></a>
<a id="tocsusagestate"></a>

```json
"IN_USE"
```

Usage state of the onboarded instance of the application package

<h2 id="tocS_VirtualComputeDescription">VirtualComputeDescription</h2>
<!-- backwards compatibility -->
<a id="schemavirtualcomputedescription"></a>
<a id="schema_VirtualComputeDescription"></a>
<a id="tocSvirtualcomputedescription"></a>
<a id="tocsvirtualcomputedescription"></a>

```json
"string"
```

Ref NFV

<h2 id="tocS_VirtualNetworkInterfaceRequirements">VirtualNetworkInterfaceRequirements</h2>
<!-- backwards compatibility -->
<a id="schemavirtualnetworkinterfacerequirements"></a>
<a id="schema_VirtualNetworkInterfaceRequirements"></a>
<a id="tocSvirtualnetworkinterfacerequirements"></a>
<a id="tocsvirtualnetworkinterfacerequirements"></a>

```json
"string"
```

<h2 id="tocS_VirtualStorageDescriptor">VirtualStorageDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemavirtualstoragedescriptor"></a>
<a id="schema_VirtualStorageDescriptor"></a>
<a id="tocSvirtualstoragedescriptor"></a>
<a id="tocsvirtualstoragedescriptor"></a>

```json
"string"
```

Ref NFV
