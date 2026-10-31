<h1 id="climate-fieldview-platform-apis">Climate FieldView Platform APIs v4.0.11</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

**Last Modified**: Wed Jan  4 12:47:29 UTC 2023


All endpoints are only accessible via HTTPS.

* All API endpoints are located at `https://platform.climate.com` (e.g.
`https://platform.climate.com/v4/fields`).

* The authorization token endpoint is located at
`https://api.climate.com/api/oauth/token`.

## Troubleshooting

`X-Http-Request-Id` response header will be returned on every call,
successful or not. If you experience an issue with our api and need
to contact technical support, please supply the value of the `X-Http-Request-Id`
header along with an approximate time of when the request was made.

## Request Limits

When you’re onboarded to Climate’s API platform, your `x-api-key` is assigned a custom usage plan. Usage plans are unique to each partner and have the following key attributes: 

1. Throttling information
    * burstLimit: Maximum rate limit over a period ranging from 1 second to a few seconds
    * rateLimit: A steady-state rate limit

2. Quota information
    * Limit: The maximum number of requests that can be made in a given month

When the request rate threshold is exceeded, a `429` response code is returned. Optionally, the [`Retry-After`](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.37) header may be returned: 

Following are examples of rate limit errors:

1. Rate limit exceeded:

<br>HTTP/1.1 429 
<br>Content-Type: application/json
<br>Content-Length: 32

   {"message":"Too Many Requests"}

2. Quota exhausted:
<br>HTTP/1.1 429 
<br>Content-Type: application/json
<br>Content-Length: 29

    {"message":"Limit Exceeded"}

## Pagination

Pagination is performed via headers. Any request which returns a `"results"`
array may be paginated. The following figure shows how query results are laid out with
X-Limit=4 and no filter applied.

<img style="width:70%;height:auto;" src="https://s3-us-west-2.amazonaws.com/climate-com/images/svg_upload_tests/paging.png">

* If there are no results, a response code of `304` will be returned.

* If the response is the last set of results, a response code of `200` or
`206` will be returned.

* If there are more results, a response code of `206` will be returned.

* If `X-Next-Token` is provided in the request headers but the token has
expired, a response code of `409` will be returned. This is only applicable
for some endpoints; see specific endpoint documentation below.

#### X-Limit

The page size can be controlled with the `X-Limit` header. Valid values are
`1-100` and defaults to `100`.

#### X-Next-Token

If the results are paginated, a response header of `X-Next-Token` will be
returned. Use the associated value in the subsequent request (via the `X-Next-Token`
request header) to retrieve the next page. The following sequence diagram shows how to
use `X-Next-Token` to fetch all the records.

<img src="https://s3-us-west-2.amazonaws.com/climate-com/images/svg_upload_tests/x-next-token.svg">


## Chunked Uploads

Uploads larger than `5MiB` (`5242880 bytes`) must be done in `5MiB` chunks
(with the exception of the final chunk). Each chunk request MUST contain a
`Content-Range` header specifying the portion of the upload, and a `Content-Type`
header specifying binary content type (`application/octet-stream`). Range
uploads must be contiguous. The maximum upload size is capped at `500MiB` (`524288000 bytes`).

## Chunked Downloads

Downloads larger than `5MiB` (`5242880 bytes`) must be done in `1-5MiB`
chunks (with the exception of the final chunk, which may be less than `1MiB`).
Each chunk request MUST contain a `Range` header specifying the requested portion of the download,
and an `Accept` header specifying binary and json content types  (`application/octet-stream,application/json`)
or all content types (`*/*`).

## Drivers

If you need drivers to process agronomic data, download the ADAPT plugin below. We only support the plugin in the Windows environment, minimum is Windows 7 SP1.

For asPlanted, asHarvested and asApplied data:
* [ADAPT Plugin](https://dev.fieldview.com/drivers/ClimateADAPTPlugin_latest.exe)
<br>Release notes can be found [here](https://dev.fieldview.com/drivers/adapt-release-notes.txt).
<br>Download and use of the ADAPT plugin means that you agree to the EULA for use of the ADAPT plugin. 
<br>Please review the [EULA](https://dev.fieldview.com/EULA/ADAPT%20Plugin%20EULA-06-19.pdf) (last updated on June 6th, 2019) before download and use of the ADAPT plugin.
<br>For more information, please refer to:
  * [ADAPT Resources](https://adaptframework.org/)
  * [ADAPT Overview](https://aggateway.atlassian.net/wiki/spaces/ADM/overview)
  * [ADAPT FAQ](https://aggateway.atlassian.net/wiki/spaces/ADM/pages/165942474/ADAPT+Frequently-Asked+Questions+FAQ)
  * [ADAPT Videos](https://adaptframework.org/adapt-videos/)

## Sample Test Data

Sample agronomic data:
* [asPlanted and asHarvested data](https://dev.fieldview.com/sample-agronomic-data/Planting_Harvesting_data_04_18_2018_21_46_18.zip)
* [asApplied data set 1](https://dev.fieldview.com/sample-agronomic-data/as-applied-data1.zip)
* [asApplied data set 2](https://dev.fieldview.com/sample-agronomic-data/as-applied-data2.zip)
<br>To upload the sample data to your account, please follow the instructions in this [link](https://support.climate.com/kt#/kA02A000000AaxzSAC/en_US).

Sample soil data:
* [Sample soil data](https://dev.fieldview.com/sample-soil-data/soil-sample.xml)
---

Base URLs:

* <a href="https://platform.climate.com/">https://platform.climate.com/</a>

Email: <a href="mailto:developer@climate.com">Climate FieldView Support</a> 

# Authentication

* API Key (api_key)
    - Parameter Name: **X-Api-Key**, in: header. API access key used to control throttling (429 responses).  This key is typically formatted:
`partner-{name}-{uuid}`

- oAuth2 authentication. Log in with FieldView OAuth2 provider (Authorization Code Grant). Used to authorize the client (partner) and
user. The *access_token* is required to be provided in the `Authorization` header on all calls to the FieldView
APIs with the following format `Bearer $access_token`.

    - Flow: authorizationCode
    - Authorization URL = [https://climate.com/static/app-login/](https://climate.com/static/app-login/)
    - Token URL = [https://api.climate.com/api/oauth/token](https://api.climate.com/api/oauth/token)

|Scope|Scope Description|
|---|---|
|asApplied:read|Required for retrieving as applied data|
|asApplied:write|Required for uploading application data|
|asHarvested:read|Required for retrieving harvest data|
|asHarvested:write|Required for uploading harvest data|
|asPlanted:read|Required for retrieving planting data|
|asPlanted:write|Required for uploading planting data|
|avroAgronomicData:read|Required for retrieving agronomic data|
|boundaries:write|*Originally missing*|
|customerInsights:read|Required for retrieving customer insights metrics data|
|diagnostics:read|Required for retrieving CNH machine diagnostic data|
|exports:read|Required for requesting or retrieving exports|
|farmOrganizations:read|Required for retrieving farm organization information|
|fields:read|Required for retrieving field and boundary information|
|fields:write|Required for uploading field boundaries|
|imagery:write|Required for uploading imagery|
|operations:read|Required for retrieving operation information|
|plantingActivitySummary:read|Required for retrieving planting activity summary data|
|platform|(DEPRECATED) Legacy scope used for some Platform APIs|
|resourceOwners:read|Required for retrieving resource owner information|
|rx:write|Required for uploading prescriptions|
|scouting:read|Required for retrieving user\'s scouting information|
|soil:write|Required for uploading soil sample results|
|standCount:write|*Originally missing*|
|weedCount:write|*Originally missing*|

<h1 id="climate-fieldview-platform-apis-boundaries">Boundaries</h1>

Field Boundary data endpoints.

## Upload a boundary

<a id="opIduploadBoundary"></a>

> Code samples

```bash
curl https://example.com/v4/boundaries \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "geometry": {
      "coordinates": [
        0,
        0
      ],
      "type": "Point"
    }
  }'
```

`POST /v4/boundaries`

Upload a **Boundary** entry by passing the geometry of the boundary. This will store the boundary but will not create field in Climate FieldView and will not link to an existing field in Climate FieldView.
This is restricted to callers with **boundaries:write** scope.
To upload a field boundary for field creation in Climate FieldView, please use **POST /v4/uploads**.

> Body parameter

```json
{
  "geometry": {
    "coordinates": [
      0,
      0
    ],
    "type": "Point"
  }
}
```

<h3 id="upload-a-boundary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BoundaryUpload](#schemaboundaryupload)|false|none|
|» geometry|body|[Geometry](#schemageometry)|true|GeoJSON|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 429 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

<h3 id="upload-a-boundary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UploadedBoundaryId](#schemauploadedboundaryid)|
|400|Bad Request|Bad Input|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|
|503|Service Unavailable|Server Busy|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|400|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|401|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|403|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|404|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|429|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|500|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|503|Retry-After|integer|int32|Number of seconds to wait before retrying the request.|
|503|X-Http-Request-Id|string||Unique identifier assigned to the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2_authorization_code ( Scopes: boundaries:write )
</aside>

## Retrieve Boundaries in batch

<a id="opIdfetchBoundaries"></a>

> Code samples

```bash
curl https://example.com/v4/boundaries/query \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "ids": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ]
  }'
```

`POST /v4/boundaries/query`

Retrieve multiple **Boundaries** (up to 10 per request).

> Body parameter

```json
{
  "ids": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

<h3 id="retrieve-boundaries-in-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BoundariesQuery](#schemaboundariesquery)|false|none|
|» ids|body|[string(uuid)]|true|none|

> Example responses

> 200 Response

```json
{
  "features": [
    {
      "geometry": {
        "coordinates": [
          0,
          0
        ],
        "type": "Point"
      },
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "properties": {
        "area": {
          "q": 1,
          "u": "hectare"
        },
        "centroid": {
          "coordinates": [
            -122.2,
            38.1
          ],
          "type": "Point"
        }
      },
      "type": "Feature"
    }
  ],
  "type": "FeatureCollection"
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 429 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

<h3 id="retrieve-boundaries-in-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Boundaries](#schemaboundaries)|
|400|Bad Request|Bad Input|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|
|503|Service Unavailable|Server Busy|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|400|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|401|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|403|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|404|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|429|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|500|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|503|Retry-After|integer|int32|Number of seconds to wait before retrying the request.|
|503|X-Http-Request-Id|string||Unique identifier assigned to the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2_authorization_code ( Scopes: fields:read )
</aside>

## Retrieve a Boundary by ID

<a id="opIdfetchBoundaryById"></a>

> Code samples

```bash
curl https://example.com/v4/boundaries/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /v4/boundaries/{boundaryId}`

Retrieve a **Boundary** by ID.

<h3 id="retrieve-a-boundary-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|boundaryId|path|string(uuid)|true|Unique identifier of the Boundary|

> Example responses

> 200 Response

```json
{
  "geometry": {
    "coordinates": [
      0,
      0
    ],
    "type": "Point"
  },
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "properties": {
    "area": {
      "q": 1,
      "u": "hectare"
    },
    "centroid": {
      "coordinates": [
        -122.2,
        38.1
      ],
      "type": "Point"
    }
  },
  "type": "Feature"
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 429 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

<h3 id="retrieve-a-boundary-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Boundary](#schemaboundary)|
|400|Bad Request|Bad Input|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|
|503|Service Unavailable|Server Busy|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|400|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|401|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|403|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|404|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|429|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|500|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|503|Retry-After|integer|int32|Number of seconds to wait before retrying the request.|
|503|X-Http-Request-Id|string||Unique identifier assigned to the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2_authorization_code ( Scopes: platform fields:read )
</aside>

<h1 id="climate-fieldview-platform-apis-fields">Fields</h1>

Field data endpoints.

## Retrieve list of Fields

<a id="opIdfetchFields"></a>

> Code samples

```bash
curl https://example.com/v4/fields \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /v4/fields`

Retrieve list of **Fields**. Filter the results by field name if the `fieldName` query parameter is specified.

<h3 id="retrieve-list-of-fields-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Next-Token|header|string|false|Opaque string which allows for fetching the next batch of results.  Can be used to poll for changes.|
|X-Limit|header|integer(int32)|false|Max number of results to return per batch.  Must be between 1 and 100 inclusive.  Defaults to 100.|
|fieldName|query|string|false|Optional prefix filter for field name. Must be at least 3 characters.|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "boundaryId": "00000000-0000-0000-0000-000000000000",
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "Back Forty",
      "parent": {
        "id": "00000000-0000-0000-0000-000000000000",
        "type": "farm"
      },
      "resourceOwnerId": "00000000-0000-0000-0000-000000000000"
    }
  ]
}
```

> 206 Response

```json
{
  "results": [
    {
      "boundaryId": "00000000-0000-0000-0000-000000000000",
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "Back Forty",
      "parent": {
        "id": "00000000-0000-0000-0000-000000000000",
        "type": "farm"
      },
      "resourceOwnerId": "00000000-0000-0000-0000-000000000000"
    }
  ]
}
```

> 304 Response

```json
{}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 429 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

<h3 id="retrieve-list-of-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Fields](#schemafields)|
|206|Partial Content|Partial Result|[Fields](#schemafields)|
|304|Not Modified|Not Modified|[Empty](#schemaempty)|
|400|Bad Request|Bad Input|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|
|503|Service Unavailable|Server Busy|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|200|X-Next-Token|string||Token used to poll for updates.|
|206|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|206|X-Next-Token|string||Token used to fetch next batch of results.|
|304|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|304|X-Next-Token|string||A token which may be used to poll for updates.|
|400|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|401|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|403|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|429|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|500|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|503|Retry-After|integer|int32|Number of seconds to wait before retrying the request.|
|503|X-Http-Request-Id|string||Unique identifier assigned to the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2_authorization_code ( Scopes: platform fields:read )
</aside>

## Retrieve list of all Fields the user has access to.

<a id="opIdfetchAllFields"></a>

> Code samples

```bash
curl https://example.com/v4/fields/all \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /v4/fields/all`

Retrieve all fields the authenticated user has access to, including fields shared with the authenticated user from other resource owners. Filter the results by field name if the `fieldName` query parameter is specified.
A 409 will be returned if the X-Next-Token has expired. When receiving a 409, the client should discard the X-Next-Token, discard all currently persisted fields for the user, and re-fetch fields from /fields/all.

<h3 id="retrieve-list-of-all-fields-the-user-has-access-to-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Next-Token|header|string|false|Opaque string which allows for fetching the next batch of results.  Can be used to poll for changes.|
|X-Limit|header|integer(int32)|false|Max number of results to return per batch.  Must be between 1 and 100 inclusive.  Defaults to 100.|
|fieldName|query|string|false|Optional prefix filter for field name. Must be at least 3 characters.|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "boundaryId": "00000000-0000-0000-0000-000000000000",
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "Back Forty",
      "parent": {
        "id": "00000000-0000-0000-0000-000000000000",
        "type": "farm"
      },
      "resourceOwnerId": "00000000-0000-0000-0000-000000000000"
    }
  ]
}
```

> 206 Response

```json
{
  "results": [
    {
      "boundaryId": "00000000-0000-0000-0000-000000000000",
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "Back Forty",
      "parent": {
        "id": "00000000-0000-0000-0000-000000000000",
        "type": "farm"
      },
      "resourceOwnerId": "00000000-0000-0000-0000-000000000000"
    }
  ]
}
```

> 304 Response

```json
{}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 409 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 429 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

<h3 id="retrieve-list-of-all-fields-the-user-has-access-to-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Fields](#schemafields)|
|206|Partial Content|Partial Result|[Fields](#schemafields)|
|304|Not Modified|Not Modified|[Empty](#schemaempty)|
|400|Bad Request|Bad Input|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|409|Conflict|Conflict|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|
|503|Service Unavailable|Server Busy|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|200|X-Next-Token|string||Token used to poll for updates.|
|206|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|206|X-Next-Token|string||Token used to fetch next batch of results.|
|304|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|304|X-Next-Token|string||A token which may be used to poll for updates.|
|400|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|401|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|403|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|409|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|429|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|500|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|503|Retry-After|integer|int32|Number of seconds to wait before retrying the request.|
|503|X-Http-Request-Id|string||Unique identifier assigned to the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2_authorization_code ( Scopes: platform fields:read )
</aside>

## Retrieve a specific Field by ID

<a id="opIdfetchFieldById"></a>

> Code samples

```bash
curl https://example.com/v4/fields/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /v4/fields/{fieldId}`

Retrieve a given **Field** by ID.

<h3 id="retrieve-a-specific-field-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fieldId|path|string(uuid)|true|Unique identifier of the Field.|

> Example responses

> 200 Response

```json
{
  "boundaryId": "00000000-0000-0000-0000-000000000000",
  "id": "00000000-0000-0000-0000-000000000000",
  "name": "Back Forty",
  "parent": {
    "id": "00000000-0000-0000-0000-000000000000",
    "type": "farm"
  },
  "resourceOwnerId": "00000000-0000-0000-0000-000000000000"
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 429 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

<h3 id="retrieve-a-specific-field-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the requested Field.|[Field](#schemafield)|
|400|Bad Request|Bad Input|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|
|503|Service Unavailable|Server Busy|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Http-Request-Id|string||none|
|400|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|401|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|403|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|404|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|429|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|500|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|503|Retry-After|integer|int32|Number of seconds to wait before retrying the request.|
|503|X-Http-Request-Id|string||Unique identifier assigned to the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2_authorization_code ( Scopes: platform fields:read )
</aside>

<h1 id="climate-fieldview-platform-apis-uploads">Uploads</h1>

General data upload endpoints.

## Initiate a new upload

<a id="opIdpostUpload"></a>

> Code samples

```bash
curl https://example.com/v4/uploads \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "contentType": "image/vnd.climate.thermal.geotiff",
    "length": 0,
    "md5": "string",
    "metadata": {}
  }'
```

`POST /v4/uploads`

Step one in uploading a data product. The method will return an **Upload** ID which the caller will use in subsequent `PUT` requests.
The following `contentTypes` may be uploaded:
    <details><summary>__image/vnd.climate.thermal.geotiff__</summary>

    Allows for the upload of a thermal image. The image is a single band geotiff with 64 bit signed floating point values in degrees Celsius. The Coordinate Reference System (CRS) must be UTM with WGS84 datum.

    The following metadata entries are required to be embedded in the geotiff:
      * acquisitionStartDate - ISO8601 date
      * acquisitionEndDate - ISO8601 date
      * isCalibrated - boolean

    The following metadata entries are optional:
      * sourceId - uuid referencing the asset in the partner's system
      * fieldId - uuid referencing a field in the Climate system
      * boundaryId - uuid referencing a boundary in the Climate system
      * brandId - uuid referencing a partner's branding in the Climate system
      * name - name of the layer. The maximum number of characters that will be accepted as input is 20.

    Requires either imagery:write or platform scope.
  </details>
  <details><summary>__image/vnd.climate.ndvi.geotiff__</summary>

    Allows for the upload of a NDVI image. The image is a single band geotiff with 64 bit signed floating point values in the range of -1 to 1 inclusive. The Coordinate Reference System (CRS) must be UTM with WGS84 datum.

    The following metadata entries are required to be embedded in the geotiff:
      * acquisitionStartDate - ISO8601 date
      * acquisitionEndDate - ISO8601 date

    The following metadata entries are optional:
      * sourceId - uuid referencing the asset in the partner's system
      * fieldId - uuid referencing a field in the Climate system
      * boundaryId - uuid referencing a boundary in the Climate system
      * brandId - uuid referencing a partner's branding in the Climate system
      * name - name of the layer. The maximum number of characters that will be accepted as input is 20.

    Requires either imagery:write or platform scope.
  </details>
  <details><summary> __image/vnd.climate.rgb.geotiff__</summary>

    Allows for the upload of a true color image. The image is a multi band geotiff with 24-bit composite values. Each band is 8 bits with values in the range of 0 to 255. The Coordinate Reference System (CRS) must be UTM with WGS84 datum. The geotiff must contain 3 bands in the order Red, Green, Blue.

    The following metadata entries are required to be embedded in the geotiff:
      * acquisitionStartDate - ISO8601 date
      * acquisitionEndDate - ISO8601 date
      * isCalibrated - boolean

    The following metadata entries are optional:
      * sourceId - uuid referencing the asset in the partner's system
      * fieldId - uuid referencing a field in the Climate system
      * boundaryId - uuid referencing a boundary in the Climate system
      * brandId - uuid referencing a partner's branding in the Climate system
      * reflectanceComputeMethod - either TOA or GROUND
      * name - name of the layer. The maximum number of characters that will be accepted as input is 20.

    Requires either imagery:write or platform scope.
  </details>
  <details><summary> __image/vnd.climate.rgb-nir.geotiff__</summary>

    Allows for the upload of a Near Infrared (NIR) image. The Coordinate Reference System (CRS) must be UTM with WGS84 datum.

    The following metadata entries are required to be embedded in the geotiff:
      * acquisitionStartDate - ISO8601 date
      * acquisitionEndDate - ISO8601 date
      * isCalibrated - boolean

    The following metadata entries are optional:
      * sourceId - uuid referencing the asset in the partner's system
      * fieldId - uuid referencing a field in the Climate system
      * boundaryId - uuid referencing a boundary in the Climate system
      * brandId - uuid referencing a partner's branding in the Climate system
      * reflectanceComputeMethod - either TOA or GROUND
      * name - name of the layer. The maximum number of characters that will be accepted as input is 20.

    Requires either imagery:write or platform scope.
  </details>
  <details><summary>__image/vnd.climate.rgb-cir.geotiff__</summary>

    Allows for the upload of a Color Infrared (CIR) image. The Coordinate Reference System (CRS) must be UTM with WGS84 datum.

    The following metadata entries are required to be embedded in the geotiff:
      * acquisitionStartDate - ISO8601 date
      * acquisitionEndDate - ISO8601 date
      * isCalibrated - boolean

    The following metadata entries are optional:
      * sourceId - uuid referencing the asset in the partner's system
      * fieldId - uuid referencing a field in the Climate system
      * boundaryId - uuid referencing a boundary in the Climate system
      * brandId - uuid referencing a partner's branding in the Climate system
      * reflectanceComputeMethod - either TOA or GROUND
      * name - name of the layer. The maximum number of characters that will be accepted as input is 20.

    Requires either imagery:write or platform scope.
  </details>
  <details><summary> __application/vnd.climate.rx.planting.shp__</summary>

    Allows for the upload of a planting prescription in shapefile format.  The upload must be an archive in the zip format.  It should contain one and only one of each of the following file types:
      * .shp
      * .shx
      * .dbf

    All files with the above suffixes must have the same prefix, ie Back40.shp, Back40.shx and Back40.dbf.

    Requires either rx:write or platform scope.
  </details>
  <details><summary> __application/vnd.climate.prescription.zones.shp__</summary>

    Allows for the upload of a zones prescription in shapefile format.  The upload must be an archive in the zip format.  It should contain one and only one of each of the following file types:
      * .shp
      * .shx
      * .dbf

    All files with the above suffixes must have the same prefix, ie Back40.shp, Back40.shx and Back40.dbf.

    The following metadata entries are required:
      * fieldId - field identifier for prescription zones.
    
    Requires either rxZones:write or platform scope.
  </details>
  <details><summary> __application/vnd.climate.modus.xml__</summary>

    Allows for the upload of a soil sampling file in the modus 1.0 format with some restrictions.  The upload must be a single xml file.

    The following elements are required to be present in the modus file.
      * EventCode - Max length of 64 bytes
      * EventDate - Must be in ISO8601
      * SoilSample - Has a maxOccurs of 20k
      * Depth - Has a maxOccurs of 50
      * LabName - Must be non-empty.
      * StartingDepth - 0 to 36 inclusive, default 0
      * EndingDepth - 1 - 36 inclusive, default 1
      * ColumnDepth
      * DepthUnit - must be inches
      * Geometry - point in wgs84
    
    Requires the soil:write scope.
   </details>
   <details><summary> __application/vnd.climate.stand-count.geojson__</summary>

    Allows for the upload of a valid [geojson feature collection](https://tools.ietf.org/html/rfc7946#section-3.3).

    Each feature in the collection must contain the following entry in its properties section:
      * StandPPA - A count of the number of plants per acre:

    Additionally, the type field of each feature's geometry field must be:
      * Point

    Requires `imagery:write` scope.
   </details>
   <details><summary> __application/vnd.climate.weed-count.geojson__</summary>

    Allows for the upload of a valid [geojson feature collection](https://tools.ietf.org/html/rfc7946#section-3.3).

    Each feature in the collection must contain the following entry in its properties section:
      * StandPPA - A count of the number of plants per acre:

    Additionally, the type field of each feature's geometry field must be:
      * Point

    Requires `imagery:write` scope.
   </details>
   <details><summary> __application/vnd.climate.as-applied.zip__</summary>

    Allows for the upload of a valid application data [supported formats](https://support.climate.com/kt#/kA02A000000DjvOSAS/en_US).

    The following metadata entries are required:
      * fileName - name of the file being uploaded.

    The following metadata entries are optional:
      * resourceOwner - the grower's account email, where dealer/partner wants to upload data. As a prerequisite the grower must share their operation with the dealer/partner.

    Requires `asApplied:write` scope.
   </details>
   <details><summary> __application/vnd.climate.as-planted.zip__</summary>

    Allows for the upload of a valid planting data [supported formats](https://support.climate.com/kt#/kA02A000000DjvOSAS/en_US).

    The following metadata entries are required:
      * fileName - name of the file being uploaded.

    The following metadata entries are optional:
      * resourceOwner - the grower's account email, where dealer/partner wants to upload data. As a prerequisite the grower must share their operation with the dealer/partner.

    Requires `asPlanted:write` scope.
   </details>
   <details><summary> __application/vnd.climate.as-harvested.zip__</summary>

    Allows for the upload of a valid harvest data [supported formats](https://support.climate.com/kt#/kA02A000000DjvOSAS/en_US).

    The following metadata entries are required:
      * fileName - name of the file being uploaded.

    The following metadata entries are optional:
      * resourceOwner - the grower's account email, where dealer/partner wants to upload data. As a prerequisite the grower must share their operation with the dealer/partner.

    Requires `asHarvested:write` scope.
   </details>

> Body parameter

```json
{
  "contentType": "image/vnd.climate.thermal.geotiff",
  "length": 0,
  "md5": "string",
  "metadata": {}
}
```

<h3 id="initiate-a-new-upload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Recipient-Email|header|string|false|Email address associated with a Climate account, used when to sending to another user.|
|body|body|[Upload](#schemaupload)|false|none|
|» contentType|body|string(mime-type)|true|Content type representing data being uploaded (e.g. image/vnd.climate.rgb.geotiff)|
|» length|body|integer(int64)|true|Content size in bytes|
|» md5|body|string|true|Base64 encoded md5 hash of the content|
|» metadata|body|[Metadata](#schemametadata)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» contentType|image/vnd.climate.thermal.geotiff|
|» contentType|image/vnd.climate.ndvi.geotiff|
|» contentType|image/vnd.climate.rgb.geotiff|
|» contentType|image/vnd.climate.rgb-nir.geotiff|
|» contentType|image/vnd.climate.rgb-cir.geotiff|
|» contentType|image/vnd.climate.waterstress.geotiff|
|» contentType|image/vnd.climate.elevation.geotiff|
|» contentType|image/vnd.climate.raw.geotiff|
|» contentType|application/vnd.climate.field.geojson|
|» contentType|application/vnd.climate.rx.planting.shp|
|» contentType|application/vnd.climate.prescription.zones.shp|
|» contentType|application/vnd.climate.modus.xml|
|» contentType|application/vnd.climate.stand-count.geojson|
|» contentType|application/vnd.climate.weed-count.geojson|
|» contentType|application/vnd.climate.as-applied.zip|
|» contentType|application/vnd.climate.as-planted.zip|
|» contentType|application/vnd.climate.as-harvested.zip|

> Example responses

> 201 Response

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 429 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

<h3 id="initiate-a-new-upload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Returns a new upload with ID used to PUT file contents.|[CreatedUpload](#schemacreatedupload)|
|400|Bad Request|Bad Input|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|
|503|Service Unavailable|Server Busy|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|X-Http-Request-Id|string||none|
|400|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|401|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|403|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|429|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|500|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|503|Retry-After|integer|int32|Number of seconds to wait before retrying the request.|
|503|X-Http-Request-Id|string||Unique identifier assigned to the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2_authorization_code ( Scopes: platform fields:write imagery:write rx:write standCount:write weedCount:write asApplied:write asPlanted:write asHarvested:write )
</aside>

## Retrieve Upload statuses in batch

<a id="opIdfetchUploadStatuses"></a>

> Code samples

```bash
curl https://example.com/v4/uploads/status/query \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "ids": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ]
  }'
```

`POST /v4/uploads/status/query`

Check the status of multiple **Uploads** (up to 100 per request).

> Body parameter

```json
{
  "ids": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

<h3 id="retrieve-upload-statuses-in-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UploadStatusQuery](#schemauploadstatusquery)|false|none|
|» ids|body|[string(uuid)]|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "status": "UPLOADING"
    }
  ]
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 429 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

<h3 id="retrieve-upload-statuses-in-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UploadStatuses](#schemauploadstatuses)|
|400|Bad Request|Bad Input|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|
|503|Service Unavailable|Server Busy|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|400|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|401|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|403|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|404|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|429|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|500|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|503|Retry-After|integer|int32|Number of seconds to wait before retrying the request.|
|503|X-Http-Request-Id|string||Unique identifier assigned to the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2_authorization_code ( Scopes: platform fields:write imagery:write rx:write asApplied:write asPlanted:write asHarvested:write )
</aside>

## Chunked upload of data

<a id="opIdchunkedUpload"></a>

> Code samples

```bash
curl https://example.com/v4/uploads/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -H 'Content-Range: string'
```

`PUT /v4/uploads/{uploadId}`

Send chunked data for an **Upload**.

<h3 id="chunked-upload-of-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Range|header|string|true|Byte range `bytes start-end/total` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.16). e.g. bytes 0-5242880/10242880. Downloads larger than 5MiB (5242880 bytes) in size must be downloaded in chunks no larger than 5MiB (5242880 bytes) and no smaller than 1MiB (1048576 bytes). The last chunk could be less than 1MiB (1048576 bytes).|
|uploadId|path|string(uuid)|true|Unique identifier of an Upload.|
|Content-Type|header|string|true|Must be `application/octet-stream`|

> Example responses

> 400 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 429 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

<h3 id="chunked-upload-of-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Input|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|
|503|Service Unavailable|Server Busy|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|400|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|401|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|403|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|404|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|429|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|500|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|503|Retry-After|integer|int32|Number of seconds to wait before retrying the request.|
|503|X-Http-Request-Id|string||Unique identifier assigned to the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2_authorization_code ( Scopes: platform fields:write imagery:write rx:write soil:write asApplied:write asPlanted:write asHarvested:write )
</aside>

## Retrieve Upload status

<a id="opIdfetchUploadStatusById"></a>

> Code samples

```bash
curl https://example.com/v4/uploads/497f6eca-6276-4993-bfeb-53cbbbba6f08/status \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /v4/uploads/{uploadId}/status`

Check the status of an **Upload** by ID.

<h3 id="retrieve-upload-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uploadId|path|string(uuid)|true|Unique identifier of an Upload.|

> Example responses

> 200 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "UPLOADING"
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 429 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

<h3 id="retrieve-upload-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UploadStatus](#schemauploadstatus)|
|400|Bad Request|Bad Input|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|
|503|Service Unavailable|Server Busy|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|400|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|401|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|403|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|404|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|429|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|500|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|503|Retry-After|integer|int32|Number of seconds to wait before retrying the request.|
|503|X-Http-Request-Id|string||Unique identifier assigned to the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2_authorization_code ( Scopes: platform fields:write imagery:write rx:write asApplied:write asPlanted:write asHarvested:write )
</aside>

<h1 id="climate-fieldview-platform-apis-exports">Exports</h1>

General data export endpoints.

## Initiate a new export request.

<a id="opIdpostExport"></a>

> Code samples

```bash
curl https://example.com/v4/exports \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -d '{
    "contentType": "application/vnd.climate.acrsi.geojson",
    "definition": {}
  }'
```

`POST /v4/exports`

Step one in requesting a data product. The method will return an **Export** ID which the caller will use in subsequent `GET` requests.
The following `contentTypes` may be requested:
  * __application/vnd.climate.acrsi.geojson__ (Beta)
     Exports the planting activities accessible by the authenticated user and optionally filtered by resource owner
     as a [GeoJSON Feature Collection](https://tools.ietf.org/html/rfc7946#page-12).

     The export request definition must contain the following properties:
       * plantingStartDate
       * plantingEndDate
       * resourceOwnerId

     Requires `exports:read` and `plantingActivitySummary:read` scope.
  
  * __application/vnd.climate.harvest.geojson__
     Exports the harvesting activities accessible by the authenticated user and optionally filtered by resource owner
     as a [GeoJSON Feature Collection](https://tools.ietf.org/html/rfc7946#page-12).

     The export request definition must contain the following properties:
       * harvestStartDate
       * harvestEndDate
       * resourceOwnerId

     Requires `exports:read` and `plantingActivitySummary:read` scope.

> Body parameter

```json
{
  "contentType": "application/vnd.climate.acrsi.geojson",
  "definition": {}
}
```

<h3 id="initiate-a-new-export-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Export](#schemaexport)|false|none|
|» contentType|body|string(mime-type)|true|Content type representing data being exported (e.g. application/vnd.climate.acrsi.geojson).|
|» definition|body|object|false|Additional specifications for a client's data export request, dependent on the content type.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» contentType|application/vnd.climate.acrsi.geojson|
|» contentType|application/vnd.climate.harvest.geojson|

> Example responses

> 201 Response

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 429 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

<h3 id="initiate-a-new-export-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[CreatedExport](#schemacreatedexport)|
|400|Bad Request|Bad Input|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|
|503|Service Unavailable|Server Busy|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|400|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|401|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|403|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|429|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|500|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|503|Retry-After|integer|int32|Number of seconds to wait before retrying the request.|
|503|X-Http-Request-Id|string||Unique identifier assigned to the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2_authorization_code ( Scopes: exports:read )
</aside>

## Retrieve the binary contents of a processed export request.

<a id="opIdfetchExportContentsById"></a>

> Code samples

```bash
curl https://example.com/v4/exports/497f6eca-6276-4993-bfeb-53cbbbba6f08/contents \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -H 'Range: string'
```

`GET /v4/exports/{exportId}/contents`

Downloads larger than `5MiB` (`5242880 bytes`) in size must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB` (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`).

<h3 id="retrieve-the-binary-contents-of-a-processed-export-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Must be either \*/* or application/octet-stream,application/json|
|exportId|path|string(uuid)|true|Unique identifier of an Export.|
|Range|header|string|true|Byte range `bytes=start-end` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35.1). e.g. bytes=0-1048576. Currently only single range value is supported. Both start and end need to be specified, end value should be greater than start and end - start should not be greater than 5MiB.|

> Example responses

> 304 Response

```json
{}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 409 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 410 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 416 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 429 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

<h3 id="retrieve-the-binary-contents-of-a-processed-export-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|206|Partial Content|Partial Result|[ExportContents](#schemaexportcontents)|
|304|Not Modified|Not Modified|[Empty](#schemaempty)|
|400|Bad Request|Bad Input|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|409|Conflict|Conflict (Report generation is still in progress)|[Error](#schemaerror)|
|410|Gone|Gone (Report is expired)|[Error](#schemaerror)|
|416|Range Not Satisfiable|Range Not Satisfiable|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|
|503|Service Unavailable|Server Busy|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|206|Content-Range|string||Byte range `bytes start-end/total` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.16). e.g. bytes 0-5242879/10242880. Downloads larger than 5MiB (5242880 bytes) in size must be downloaded in chunks no larger than 5MiB (5242880 bytes) and no smaller than 1MiB (1048576 bytes). The last chunk could be less than 1MiB (1048576 bytes).|
|206|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|304|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|304|X-Next-Token|string||A token which may be used to poll for updates.|
|400|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|401|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|403|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|404|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|409|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|410|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|416|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|429|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|500|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|503|Retry-After|integer|int32|Number of seconds to wait before retrying the request.|
|503|X-Http-Request-Id|string||Unique identifier assigned to the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2_authorization_code ( Scopes: exports:read )
</aside>

## Retrieve the status of an Export.

<a id="opIdfetchExportStatusById"></a>

> Code samples

```bash
curl https://example.com/v4/exports/497f6eca-6276-4993-bfeb-53cbbbba6f08/status \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /v4/exports/{exportId}/status`

Check the status of an **Export** by ID.

<h3 id="retrieve-the-status-of-an-export-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exportId|path|string(uuid)|true|Unique identifier of an Export.|

> Example responses

> 200 Response

```json
{
  "checksum": "string",
  "error": "string",
  "size": 0,
  "status": "PROCESSING",
  "xNextToken": "string"
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 429 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

<h3 id="retrieve-the-status-of-an-export-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ExportStatus](#schemaexportstatus)|
|400|Bad Request|Bad Input|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|
|503|Service Unavailable|Server Busy|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|400|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|401|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|403|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|404|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|429|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|500|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|503|Retry-After|integer|int32|Number of seconds to wait before retrying the request.|
|503|X-Http-Request-Id|string||Unique identifier assigned to the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2_authorization_code ( Scopes: exports:read )
</aside>

<h1 id="climate-fieldview-platform-apis-layers">Layers</h1>

General data retrieval endpoints.

## Retrieve a list of application activities

> Code samples

```bash
curl https://example.com/v4/layers/asApplied \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /v4/layers/asApplied`

Retrieve a list of application activities. The id in the response is used for  GET /v4/layers/asApplied/{activityId}/contents.

<h3 id="retrieve-a-list-of-application-activities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Must be either \*/* or application/octet-stream,application/json|
|X-Next-Token|header|string|false|Opaque string which allows for fetching the next batch of results.  Can be used to poll for changes.|
|X-Limit|header|integer(int32)|false|Max number of results to return per batch.  Must be between 1 and 100 inclusive.  Defaults to 100.|
|resourceOwnerId|query|string(uuid)|false|Optional unique identifier of the resource owner.  If resourceOwnerId is not specified, it defaults to the x-authenticated-user-uuid.|
|occurredAfter|query|string(date-time)|false|Optional start time by which to filter layer results. Time must be in ISO 8601 format with time zone, e.g. 2016-05-13T00:00:00Z (https://tools.ietf.org/html/rfc3339). Layers with an end time at or after (inclusive) the specified time will match this filter. If both occurredAfter and occurredBefore are populated, occurredAfter must be <= occurredBefore.|
|occurredBefore|query|string(date-time)|false|Optional end time by which to filter layer results. Time must be in ISO 8601 format with time zone, e.g. 2016-05-13T00:00:00Z (https://tools.ietf.org/html/rfc3339). Layers with a start time at or before (inclusive) the specified time. If both occurredAfter and occurredBefore are populated, occurredAfter must be <= occurredBefore.|
|updatedAfter|query|string(date-time)|false|Optional updated time by which to filter layer results. Time must be in ISO 8601 format with time zone, e.g. 2016-05-13T00:00:00Z (https://tools.ietf.org/html/rfc3339). Layers with a modification time at or after (inclusive) the specified time.|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "endTime": "1970-01-01T00:00:00Z",
      "fieldIds": [
        "string"
      ],
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "length": 0,
      "startTime": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 206 Response

```json
{
  "results": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "endTime": "1970-01-01T00:00:00Z",
      "fieldIds": [
        "string"
      ],
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "length": 0,
      "startTime": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 304 Response

```json
{}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

<h3 id="retrieve-a-list-of-application-activities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ApplicationActivities](#schemaapplicationactivities)|
|206|Partial Content|Partial Result|[ApplicationActivities](#schemaapplicationactivities)|
|304|Not Modified|Not Modified|[Empty](#schemaempty)|
|400|Bad Request|Bad Input|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|200|X-Next-Token|string||Token used to poll for updates.|
|206|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|206|X-Next-Token|string||Token used to fetch next batch of results.|
|304|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|304|X-Next-Token|string||A token which may be used to poll for updates.|
|400|X-Http-Request-Id|string||Unique identifier assigned to the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2_authorization_code ( Scopes: platform asApplied:read )
</aside>

## Retrieve the raw application activity

> Code samples

```bash
curl https://example.com/v4/layers/asApplied/497f6eca-6276-4993-bfeb-53cbbbba6f08/contents \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -H 'Range: string'
```

`GET /v4/layers/asApplied/{activityId}/contents`

Retrieve an individual application activity by id.  Ids are retrieved via the  /layers/asApplied route. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB`  (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`). The data is compressed using .zip format.

<h3 id="retrieve-the-raw-application-activity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Must be either \*/* or application/octet-stream,application/json|
|activityId|path|string(uuid)|true|Unique identifier of the Application Activity.|
|Range|header|string|true|Byte range `bytes=start-end` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35.1). e.g. bytes=0-1048576. Currently only single range value is supported. Both start and end need to be specified, end value should be greater than start and end - start should not be greater than 5MiB.|

> Example responses

> 304 Response

```json
{}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 416 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

<h3 id="retrieve-the-raw-application-activity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ApplicationActivityContents](#schemaapplicationactivitycontents)|
|206|Partial Content|Partial Result|[ApplicationActivityContents](#schemaapplicationactivitycontents)|
|304|Not Modified|Not Modified|[Empty](#schemaempty)|
|400|Bad Request|Bad Input|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|416|Range Not Satisfiable|Range Not Satisfiable|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|
|503|Service Unavailable|Server Busy|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Content-Range|string||Byte range `bytes start-end/total` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.16). e.g. bytes 0-5242880/10242880. Downloads larger than 5MiB (5242880 bytes) in size must be downloaded in chunks no larger than 5MiB (5242880 bytes) and no smaller than 1MiB (1048576 bytes). The last chunk could be less than 1MiB (1048576 bytes).|
|200|X-Http-Request-Id|string||Unique identifier assigned to the request|
|206|Content-Range|string||Byte range `bytes start-end/total` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.16). e.g. bytes 0-5242880/10242880. Downloads larger than 5MiB (5242880 bytes) in size must be downloaded in chunks no larger than 5MiB (5242880 bytes) and no smaller than 1MiB (1048576 bytes). The last chunk could be less than 1MiB (1048576 bytes).|
|206|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|304|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|304|X-Next-Token|string||A token which may be used to poll for updates.|
|400|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|401|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|403|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|404|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|416|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|500|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|503|Retry-After|integer|int32|Number of seconds to wait before retrying the request.|
|503|X-Http-Request-Id|string||Unique identifier assigned to the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2_authorization_code ( Scopes: asApplied:read )
</aside>

## Retrieve a list of harvest activities

> Code samples

```bash
curl https://example.com/v4/layers/asHarvested \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /v4/layers/asHarvested`

Retrieve a list of harvest activities. The id in the response is used for  GET /v4/layers/asHarvested/{activityId}/contents.

<h3 id="retrieve-a-list-of-harvest-activities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Must be either \*/* or application/octet-stream,application/json|
|X-Next-Token|header|string|false|Opaque string which allows for fetching the next batch of results.  Can be used to poll for changes.|
|X-Limit|header|integer(int32)|false|Max number of results to return per batch.  Must be between 1 and 100 inclusive.  Defaults to 100.|
|resourceOwnerId|query|string(uuid)|false|Optional unique identifier of the resource owner.  If resourceOwnerId is not specified, it defaults to the x-authenticated-user-uuid.|
|occurredAfter|query|string(date-time)|false|Optional start time by which to filter layer results. Time must be in ISO 8601 format with time zone, e.g. 2016-05-13T00:00:00Z (https://tools.ietf.org/html/rfc3339). Layers with an end time at or after (inclusive) the specified time will match this filter. If both occurredAfter and occurredBefore are populated, occurredAfter must be <= occurredBefore.|
|occurredBefore|query|string(date-time)|false|Optional end time by which to filter layer results. Time must be in ISO 8601 format with time zone, e.g. 2016-05-13T00:00:00Z (https://tools.ietf.org/html/rfc3339). Layers with a start time at or before (inclusive) the specified time. If both occurredAfter and occurredBefore are populated, occurredAfter must be <= occurredBefore.|
|updatedAfter|query|string(date-time)|false|Optional updated time by which to filter layer results. Time must be in ISO 8601 format with time zone, e.g. 2016-05-13T00:00:00Z (https://tools.ietf.org/html/rfc3339). Layers with a modification time at or after (inclusive) the specified time.|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "endTime": "1970-01-01T00:00:00Z",
      "fieldIds": [
        "string"
      ],
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "length": 0,
      "startTime": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 206 Response

```json
{
  "results": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "endTime": "1970-01-01T00:00:00Z",
      "fieldIds": [
        "string"
      ],
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "length": 0,
      "startTime": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 304 Response

```json
{}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

<h3 id="retrieve-a-list-of-harvest-activities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HarvestActivities](#schemaharvestactivities)|
|206|Partial Content|Partial Result|[HarvestActivities](#schemaharvestactivities)|
|304|Not Modified|Not Modified|[Empty](#schemaempty)|
|400|Bad Request|Bad Input|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|200|X-Next-Token|string||Token used to poll for updates.|
|206|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|206|X-Next-Token|string||Token used to fetch next batch of results.|
|304|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|304|X-Next-Token|string||A token which may be used to poll for updates.|
|400|X-Http-Request-Id|string||Unique identifier assigned to the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2_authorization_code ( Scopes: platform asHarvested:read )
</aside>

## Retrieve the raw harvest activity

> Code samples

```bash
curl https://example.com/v4/layers/asHarvested/497f6eca-6276-4993-bfeb-53cbbbba6f08/contents \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -H 'Range: string'
```

`GET /v4/layers/asHarvested/{activityId}/contents`

Retrieve an individual harvest activity by id.  Ids are retrieved via the  /layers/asHarvested route. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB`  (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`). The data is compressed using .zip format.

<h3 id="retrieve-the-raw-harvest-activity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Must be either \*/* or application/octet-stream,application/json|
|activityId|path|string(uuid)|true|Unique identifier of the Harvest Activity.|
|Range|header|string|true|Byte range `bytes=start-end` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35.1). e.g. bytes=0-1048576. Currently only single range value is supported. Both start and end need to be specified, end value should be greater than start and end - start should not be greater than 5MiB.|

> Example responses

> 304 Response

```json
{}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 416 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

<h3 id="retrieve-the-raw-harvest-activity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HarvestActivityContents](#schemaharvestactivitycontents)|
|206|Partial Content|Partial Result|[HarvestActivityContents](#schemaharvestactivitycontents)|
|304|Not Modified|Not Modified|[Empty](#schemaempty)|
|400|Bad Request|Bad Input|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|416|Range Not Satisfiable|Range Not Satisfiable|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|
|503|Service Unavailable|Server Busy|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Content-Range|string||Byte range `bytes start-end/total` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.16). e.g. bytes 0-5242880/10242880. Downloads larger than 5MiB (5242880 bytes) in size must be downloaded in chunks no larger than 5MiB (5242880 bytes) and no smaller than 1MiB (1048576 bytes). The last chunk could be less than 1MiB (1048576 bytes).|
|200|X-Http-Request-Id|string||Unique identifier assigned to the request|
|206|Content-Range|string||Byte range `bytes start-end/total` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.16). e.g. bytes 0-5242880/10242880. Downloads larger than 5MiB (5242880 bytes) in size must be downloaded in chunks no larger than 5MiB (5242880 bytes) and no smaller than 1MiB (1048576 bytes). The last chunk could be less than 1MiB (1048576 bytes).|
|206|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|304|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|304|X-Next-Token|string||A token which may be used to poll for updates.|
|400|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|401|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|403|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|404|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|416|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|500|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|503|Retry-After|integer|int32|Number of seconds to wait before retrying the request.|
|503|X-Http-Request-Id|string||Unique identifier assigned to the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2_authorization_code ( Scopes: asHarvested:read )
</aside>

## Retrieve a list of planting activities

> Code samples

```bash
curl https://example.com/v4/layers/asPlanted \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /v4/layers/asPlanted`

Retrieve a list of planting activities. The id in the response is used for  GET /v4/layers/asPlanted/{activityId}/contents.

<h3 id="retrieve-a-list-of-planting-activities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Must be either \*/* or application/octet-stream,application/json|
|X-Next-Token|header|string|false|Opaque string which allows for fetching the next batch of results.  Can be used to poll for changes.|
|X-Limit|header|integer(int32)|false|Max number of results to return per batch.  Must be between 1 and 100 inclusive.  Defaults to 100.|
|resourceOwnerId|query|string(uuid)|false|Optional unique identifier of the resource owner.  If resourceOwnerId is not specified, it defaults to the x-authenticated-user-uuid.|
|occurredAfter|query|string(date-time)|false|Optional start time by which to filter layer results. Time must be in ISO 8601 format with time zone, e.g. 2016-05-13T00:00:00Z (https://tools.ietf.org/html/rfc3339). Layers with an end time at or after (inclusive) the specified time will match this filter. If both occurredAfter and occurredBefore are populated, occurredAfter must be <= occurredBefore.|
|occurredBefore|query|string(date-time)|false|Optional end time by which to filter layer results. Time must be in ISO 8601 format with time zone, e.g. 2016-05-13T00:00:00Z (https://tools.ietf.org/html/rfc3339). Layers with a start time at or before (inclusive) the specified time. If both occurredAfter and occurredBefore are populated, occurredAfter must be <= occurredBefore.|
|updatedAfter|query|string(date-time)|false|Optional updated time by which to filter layer results. Time must be in ISO 8601 format with time zone, e.g. 2016-05-13T00:00:00Z (https://tools.ietf.org/html/rfc3339). Layers with a modification time at or after (inclusive) the specified time.|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "endTime": "1970-01-01T00:00:00Z",
      "fieldIds": [
        "string"
      ],
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "length": 0,
      "startTime": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 206 Response

```json
{
  "results": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "endTime": "1970-01-01T00:00:00Z",
      "fieldIds": [
        "string"
      ],
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "length": 0,
      "startTime": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 304 Response

```json
{}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

<h3 id="retrieve-a-list-of-planting-activities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PlantingActivities](#schemaplantingactivities)|
|206|Partial Content|Partial Result|[PlantingActivities](#schemaplantingactivities)|
|304|Not Modified|Not Modified|[Empty](#schemaempty)|
|400|Bad Request|Bad Input|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|200|X-Next-Token|string||Token used to poll for updates.|
|206|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|206|X-Next-Token|string||Token used to fetch next batch of results.|
|304|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|304|X-Next-Token|string||A token which may be used to poll for updates.|
|400|X-Http-Request-Id|string||Unique identifier assigned to the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2_authorization_code ( Scopes: platform asPlanted:read )
</aside>

## Retrieve the raw planting activity

> Code samples

```bash
curl https://example.com/v4/layers/asPlanted/497f6eca-6276-4993-bfeb-53cbbbba6f08/contents \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -H 'Range: string'
```

`GET /v4/layers/asPlanted/{activityId}/contents`

Retrieve an individual planting activity by id.  Ids are retrieved via the  /layers/asPlanted route. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB`  (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`).  The data is compressed using .zip format.

<h3 id="retrieve-the-raw-planting-activity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Must be either \*/* or application/octet-stream,application/json|
|activityId|path|string(uuid)|true|Unique identifier of the Planting Activity.|
|Range|header|string|true|Byte range `bytes=start-end` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35.1). e.g. bytes=0-1048576. Currently only single range value is supported. Both start and end need to be specified, end value should be greater than start and end - start should not be greater than 5MiB.|

> Example responses

> 304 Response

```json
{}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 416 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

<h3 id="retrieve-the-raw-planting-activity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PlantingActivityContents](#schemaplantingactivitycontents)|
|206|Partial Content|Partial Result|[PlantingActivityContents](#schemaplantingactivitycontents)|
|304|Not Modified|Not Modified|[Empty](#schemaempty)|
|400|Bad Request|Bad Input|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|416|Range Not Satisfiable|Range Not Satisfiable|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|
|503|Service Unavailable|Server Busy|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Content-Range|string||Byte range `bytes start-end/total` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.16). e.g. bytes 0-5242880/10242880. Downloads larger than 5MiB (5242880 bytes) in size must be downloaded in chunks no larger than 5MiB (5242880 bytes) and no smaller than 1MiB (1048576 bytes). The last chunk could be less than 1MiB (1048576 bytes).|
|200|X-Http-Request-Id|string||Unique identifier assigned to the request|
|206|Content-Range|string||Byte range `bytes start-end/total` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.16). e.g. bytes 0-5242880/10242880. Downloads larger than 5MiB (5242880 bytes) in size must be downloaded in chunks no larger than 5MiB (5242880 bytes) and no smaller than 1MiB (1048576 bytes). The last chunk could be less than 1MiB (1048576 bytes).|
|206|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|304|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|304|X-Next-Token|string||A token which may be used to poll for updates.|
|400|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|401|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|403|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|404|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|416|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|500|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|503|Retry-After|integer|int32|Number of seconds to wait before retrying the request.|
|503|X-Http-Request-Id|string||Unique identifier assigned to the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2_authorization_code ( Scopes: asPlanted:read )
</aside>

## Retrieve a list of scouting observations

> Code samples

```bash
curl https://example.com/v4/layers/scoutingObservations \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /v4/layers/scoutingObservations`

Retrieve a list of scouting observations created or updated by the user identified by the Authorization header.

<h3 id="retrieve-a-list-of-scouting-observations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Next-Token|header|string|false|Opaque string which allows for fetching the next batch of results.  Can be used to poll for changes.|
|X-Limit|header|integer(int32)|false|Max number of results to return per batch.  Must be between 1 and 100 inclusive.  Defaults to 100.|
|occurredAfter|query|string(date-time)|false|Optional start time by which to filter layer results. Time must be in ISO 8601 format with time zone, e.g. 2016-05-13T00:00:00Z (https://tools.ietf.org/html/rfc3339). Layers with an end time at or after (inclusive) the specified time will match this filter. If both occurredAfter and occurredBefore are populated, occurredAfter must be <= occurredBefore.|
|occurredBefore|query|string(date-time)|false|Optional end time by which to filter layer results. Time must be in ISO 8601 format with time zone, e.g. 2016-05-13T00:00:00Z (https://tools.ietf.org/html/rfc3339). Layers with a start time at or before (inclusive) the specified time. If both occurredAfter and occurredBefore are populated, occurredAfter must be <= occurredBefore.|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "endTime": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "startTime": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 206 Response

```json
{
  "results": [
    {
      "endTime": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "startTime": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 304 Response

```json
{}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

<h3 id="retrieve-a-list-of-scouting-observations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ScoutingObservations](#schemascoutingobservations)|
|206|Partial Content|Partial Result|[ScoutingObservations](#schemascoutingobservations)|
|304|Not Modified|Not Modified|[Empty](#schemaempty)|
|400|Bad Request|Bad Input|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|200|X-Next-Token|string||Token used to poll for updates.|
|206|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|206|X-Next-Token|string||Token used to fetch next batch of results.|
|304|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|304|X-Next-Token|string||A token which may be used to poll for updates.|
|400|X-Http-Request-Id|string||Unique identifier assigned to the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2_authorization_code ( Scopes: platform scouting:read )
</aside>

## Retrieve individual scouting observation

> Code samples

```bash
curl https://example.com/v4/layers/scoutingObservations/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /v4/layers/scoutingObservations/{scoutingObservationId}`

Retrieve an individual scouting observation by id.  Ids are retrieved via the /layers/scoutingObservations route.

<h3 id="retrieve-individual-scouting-observation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scoutingObservationId|path|string(uuid)|true|Unique identifier of the Scouting Observation.|

> Example responses

> 200 Response

```json
{
  "endTime": "1970-01-01T00:00:00Z",
  "fieldIds": [
    "string"
  ],
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "location": {
    "coordinates": [
      0,
      0
    ],
    "type": "Point"
  },
  "locationDisplayColor": "#307af7",
  "note": "string",
  "startTime": "1970-01-01T00:00:00Z",
  "status": "ACTIVE",
  "tags": [
    {
      "code": "string"
    }
  ],
  "timespan": "PERMANENT",
  "title": "string",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

<h3 id="retrieve-individual-scouting-observation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the requested scouting observation.|[ScoutingObservation](#schemascoutingobservation)|
|400|Bad Request|Bad Input|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Http-Request-Id|string||none|
|400|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|403|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|404|X-Http-Request-Id|string||Unique identifier assigned to the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2_authorization_code ( Scopes: platform scouting:read )
</aside>

## Retrieve attachments associated with a given scouting observation.

> Code samples

```bash
curl https://example.com/v4/layers/scoutingObservations/497f6eca-6276-4993-bfeb-53cbbbba6f08/attachments \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /v4/layers/scoutingObservations/{scoutingObservationId}/attachments`

Retrieve attachments associated with a given scouting observation. Photos added to scouting notes in the FieldView app are capped to 20MB, and we won’t store photos larger than that in a scouting note.

<h3 id="retrieve-attachments-associated-with-a-given-scouting-observation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scoutingObservationId|path|string(uuid)|true|Unique identifier of the Scouting Observation.|
|X-Next-Token|header|string|false|Opaque string which allows for fetching the next batch of results.  Can be used to poll for changes.|
|X-Limit|header|integer(int32)|false|Max number of results to return per batch.  Must be between 1 and 100 inclusive.  Defaults to 100.|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "contentType": "string",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "length": 0,
      "status": "ACTIVE",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 206 Response

```json
{
  "results": [
    {
      "contentType": "string",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "length": 0,
      "status": "ACTIVE",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 304 Response

```json
{}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

<h3 id="retrieve-attachments-associated-with-a-given-scouting-observation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ScoutingObservationAttachments](#schemascoutingobservationattachments)|
|206|Partial Content|Partial Result|[ScoutingObservationAttachments](#schemascoutingobservationattachments)|
|304|Not Modified|Not Modified|[Empty](#schemaempty)|
|400|Bad Request|Bad Input|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|206|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|206|X-Next-Token|string||Token used to fetch next batch of results.|
|304|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|304|X-Next-Token|string||A token which may be used to poll for updates.|
|400|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|403|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|404|X-Http-Request-Id|string||Unique identifier assigned to the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2_authorization_code ( Scopes: platform scouting:read )
</aside>

## Retrieve the binary contents of a scouting observation’s attachment.

> Code samples

```bash
curl https://example.com/v4/layers/scoutingObservations/497f6eca-6276-4993-bfeb-53cbbbba6f08/attachments/497f6eca-6276-4993-bfeb-53cbbbba6f08/contents \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}" \
  -H 'Range: string'
```

`GET /v4/layers/scoutingObservations/{scoutingObservationId}/attachments/{attachmentId}/contents`

Photos added to scouting notes in the FieldView app are capped to `20MiB` (`20971520 bytes`), and we won’t store photos larger than that in a scouting note. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB` (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`).

<h3 id="retrieve-the-binary-contents-of-a-scouting-observations-attachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|true|Must be either \*/* or application/octet-stream,application/json|
|scoutingObservationId|path|string(uuid)|true|Unique identifier of the Scouting Observation.|
|attachmentId|path|string(uuid)|true|Unique identifier of the attachment.|
|Range|header|string|true|Byte range `bytes=start-end` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35.1). e.g. bytes=0-1048576. Currently only single range value is supported. Both start and end need to be specified, end value should be greater than start and end - start should not be greater than 5MiB.|

> Example responses

> 400 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 416 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

<h3 id="retrieve-the-binary-contents-of-a-scouting-observations-attachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ScoutingObservationAttachmentContents](#schemascoutingobservationattachmentcontents)|
|206|Partial Content|Partial Result|[ScoutingObservationAttachmentContents](#schemascoutingobservationattachmentcontents)|
|400|Bad Request|Bad Input|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|416|Range Not Satisfiable|Range Not Satisfiable|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|
|503|Service Unavailable|Server Busy|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Content-Range|string||Byte range `bytes start-end/total` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.16). e.g. bytes 0-5242880/10242880. Downloads larger than 5MiB (5242880 bytes) in size must be downloaded in chunks no larger than 5MiB (5242880 bytes) and no smaller than 1MiB (1048576 bytes). The last chunk could be less than 1MiB (1048576 bytes).|
|200|X-Http-Request-Id|string||Unique identifier assigned to the request|
|206|Content-Range|string||Byte range `bytes start-end/total` (https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.16). e.g. bytes 0-5242880/10242880. Downloads larger than 5MiB (5242880 bytes) in size must be downloaded in chunks no larger than 5MiB (5242880 bytes) and no smaller than 1MiB (1048576 bytes). The last chunk could be less than 1MiB (1048576 bytes).|
|206|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|400|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|401|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|403|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|404|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|416|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|500|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|503|Retry-After|integer|int32|Number of seconds to wait before retrying the request.|
|503|X-Http-Request-Id|string||Unique identifier assigned to the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2_authorization_code ( Scopes: platform scouting:read )
</aside>

<h1 id="climate-fieldview-platform-apis-resourceowners">ResourceOwners</h1>

Resource Owner data endpoints.

## Retrieve a resource owner by ID

<a id="opIdgetResourceOwner"></a>

> Code samples

```bash
curl https://example.com/v4/resourceOwners/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /v4/resourceOwners/{resourceOwnerId}`

Retrieve a resource owner for the given `resourceOwnerId`.

<h3 id="retrieve-a-resource-owner-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceOwnerId|path|string(uuid)|true|Unique identifier of the resource owner.|

> Example responses

> 200 Response

```json
{
  "email": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string"
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

<h3 id="retrieve-a-resource-owner-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ResourceOwner](#schemaresourceowner)|
|400|Bad Request|Bad Input|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|400|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|404|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|500|X-Http-Request-Id|string||Unique identifier assigned to the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2_authorization_code ( Scopes: platform resourceOwners:read )
</aside>

<h1 id="climate-fieldview-platform-apis-farmorganizations">FarmOrganizations</h1>

Farm organization data endpoints.

## Retrieve a specific farm organization by organization type and ID

<a id="opIdfetchFarmOrganizationByTypeAndId"></a>

> Code samples

```bash
curl https://example.com/v4/farmOrganizations/farm/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /v4/farmOrganizations/{farmOrganizationType}/{farmOrganizationId}`

Retrieve a given **farm organization** by organization type and ID.

<h3 id="retrieve-a-specific-farm-organization-by-organization-type-and-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|farmOrganizationType|path|string|true|Type of the farm organization.|
|farmOrganizationId|path|string(uuid)|true|Unique identifier of the farm organization.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|farmOrganizationType|farm|

> Example responses

> 200 Response

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "name": "Back Forty",
  "type": "farm"
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 429 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

<h3 id="retrieve-a-specific-farm-organization-by-organization-type-and-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the requested farm organization.|[FarmOrganization](#schemafarmorganization)|
|400|Bad Request|Bad Input|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|
|503|Service Unavailable|Server Busy|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Http-Request-Id|string||none|
|400|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|401|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|403|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|404|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|429|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|500|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|503|Retry-After|integer|int32|Number of seconds to wait before retrying the request.|
|503|X-Http-Request-Id|string||Unique identifier assigned to the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2_authorization_code ( Scopes: farmOrganizations:read )
</aside>

<h1 id="climate-fieldview-platform-apis-operations">Operations</h1>

Operation data endpoints.

## Retrieve the operations accessible to a a given user.

<a id="opIdfetchOperations"></a>

> Code samples

```bash
curl https://example.com/v4/operations/all \
  -H 'Accept: application/json' \
  -H "X-Api-Key: ${API_KEY}"
```

`GET /v4/operations/all`

Retrieve the **operations** accessible to the authenticated user. Filter the results by resource owner if the `resourceOwnerId` query parameter is specified.

<h3 id="retrieve-the-operations-accessible-to-a-a-given-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceOwnerId|query|string|false|Optional comma-separated list of resource owner unique identifiers by which to filter results.|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "Back Forty",
      "resourceOwnerId": "00000000-0000-0000-0000-000000000000"
    }
  ]
}
```

> 400 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 403 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 404 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 429 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

> 503 Response

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

<h3 id="retrieve-the-operations-accessible-to-a-a-given-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the requested operations.|[Operations](#schemaoperations)|
|400|Bad Request|Bad Input|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests|[Error](#schemaerror)|
|500|Internal Server Error|Internal Server Error|[Error](#schemaerror)|
|503|Service Unavailable|Server Busy|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Http-Request-Id|string||none|
|400|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|401|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|403|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|404|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|429|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|500|X-Http-Request-Id|string||Unique identifier assigned to the request.|
|503|Retry-After|integer|int32|Number of seconds to wait before retrying the request.|
|503|X-Http-Request-Id|string||Unique identifier assigned to the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, oauth2_authorization_code ( Scopes: operations:read )
</aside>

# Schemas

<h2 id="tocS_ApplicationActivities">ApplicationActivities</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationactivities"></a>
<a id="schema_ApplicationActivities"></a>
<a id="tocSapplicationactivities"></a>
<a id="tocsapplicationactivities"></a>

```json
{
  "results": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "endTime": "1970-01-01T00:00:00Z",
      "fieldIds": [
        "string"
      ],
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "length": 0,
      "startTime": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

A batch of application activities

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[ApplicationActivitySummary](#schemaapplicationactivitysummary)]|true|none|none|

<h2 id="tocS_ApplicationActivityContents">ApplicationActivityContents</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationactivitycontents"></a>
<a id="schema_ApplicationActivityContents"></a>
<a id="tocSapplicationactivitycontents"></a>
<a id="tocsapplicationactivitycontents"></a>

```json
{
  "body": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|[BinaryData](#schemabinarydata)|true|none|Binary contents|

<h2 id="tocS_ApplicationActivitySummary">ApplicationActivitySummary</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationactivitysummary"></a>
<a id="schema_ApplicationActivitySummary"></a>
<a id="tocSapplicationactivitysummary"></a>
<a id="tocsapplicationactivitysummary"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "endTime": "1970-01-01T00:00:00Z",
  "fieldIds": [
    "string"
  ],
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "length": 0,
  "startTime": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|The time the application activity was created. Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).|
|endTime|string(date-time)|true|none|The start time of the application activity. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).|
|fieldIds|[string]|true|none|Array of field ids associated the application activity.|
|id|string(uuid)|true|none|The id of an application activity.|
|length|integer(int64)|true|none|The size in bytes of the raw application activity file.|
|startTime|string(date-time)|true|none|The start time of the application activity. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).|
|updatedAt|string(date-time)|true|none|The time the application activity was last updated. Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).|

<h2 id="tocS_Area">Area</h2>
<!-- backwards compatibility -->
<a id="schemaarea"></a>
<a id="schema_Area"></a>
<a id="tocSarea"></a>
<a id="tocsarea"></a>

```json
{
  "q": 1,
  "u": "hectare"
}
```

Area with units. Units are always "hectare".

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|q|number(float)|true|none|none|
|u|string|true|none|none|

<h2 id="tocS_Binary">Binary</h2>
<!-- backwards compatibility -->
<a id="schemabinary"></a>
<a id="schema_Binary"></a>
<a id="tocSbinary"></a>
<a id="tocsbinary"></a>

```json
"string"
```

<h2 id="tocS_BinaryData">BinaryData</h2>
<!-- backwards compatibility -->
<a id="schemabinarydata"></a>
<a id="schema_BinaryData"></a>
<a id="tocSbinarydata"></a>
<a id="tocsbinarydata"></a>

```json
"string"
```

Binary contents

<h2 id="tocS_Boundaries">Boundaries</h2>
<!-- backwards compatibility -->
<a id="schemaboundaries"></a>
<a id="schema_Boundaries"></a>
<a id="tocSboundaries"></a>
<a id="tocsboundaries"></a>

```json
{
  "features": [
    {
      "geometry": {
        "coordinates": [
          0,
          0
        ],
        "type": "Point"
      },
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "properties": {
        "area": {
          "q": 1,
          "u": "hectare"
        },
        "centroid": {
          "coordinates": [
            -122.2,
            38.1
          ],
          "type": "Point"
        }
      },
      "type": "Feature"
    }
  ],
  "type": "FeatureCollection"
}
```

A batch of boundary results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|features|[[Boundary](#schemaboundary)]|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|FeatureCollection|

<h2 id="tocS_BoundariesQuery">BoundariesQuery</h2>
<!-- backwards compatibility -->
<a id="schemaboundariesquery"></a>
<a id="schema_BoundariesQuery"></a>
<a id="tocSboundariesquery"></a>
<a id="tocsboundariesquery"></a>

```json
{
  "ids": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[string(uuid)]|true|none|none|

<h2 id="tocS_Boundary">Boundary</h2>
<!-- backwards compatibility -->
<a id="schemaboundary"></a>
<a id="schema_Boundary"></a>
<a id="tocSboundary"></a>
<a id="tocsboundary"></a>

```json
{
  "geometry": {
    "coordinates": [
      0,
      0
    ],
    "type": "Point"
  },
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "properties": {
    "area": {
      "q": 1,
      "u": "hectare"
    },
    "centroid": {
      "coordinates": [
        -122.2,
        38.1
      ],
      "type": "Point"
    }
  },
  "type": "Feature"
}
```

Arbitrary boundary.  GeoJSON Feature.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|geometry|[Geometry](#schemageometry)|true|none|GeoJSON|
|id|string(uuid)|true|none|none|
|properties|[BoundaryProperties](#schemaboundaryproperties)|true|none|Properties map.|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Feature|

<h2 id="tocS_BoundaryProperties">BoundaryProperties</h2>
<!-- backwards compatibility -->
<a id="schemaboundaryproperties"></a>
<a id="schema_BoundaryProperties"></a>
<a id="tocSboundaryproperties"></a>
<a id="tocsboundaryproperties"></a>

```json
{
  "area": {
    "q": 1,
    "u": "hectare"
  },
  "centroid": {
    "coordinates": [
      -122.2,
      38.1
    ],
    "type": "Point"
  }
}
```

Properties map.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|area|[Area](#schemaarea)|true|none|Area with units. Units are always "hectare".|
|centroid|[Point](#schemapoint)|true|none|none|

<h2 id="tocS_BoundaryUpload">BoundaryUpload</h2>
<!-- backwards compatibility -->
<a id="schemaboundaryupload"></a>
<a id="schema_BoundaryUpload"></a>
<a id="tocSboundaryupload"></a>
<a id="tocsboundaryupload"></a>

```json
{
  "geometry": {
    "coordinates": [
      0,
      0
    ],
    "type": "Point"
  }
}
```

Arbitrary boundary in a geometry map

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|geometry|[Geometry](#schemageometry)|true|none|GeoJSON|

<h2 id="tocS_CreatedExport">CreatedExport</h2>
<!-- backwards compatibility -->
<a id="schemacreatedexport"></a>
<a id="schema_CreatedExport"></a>
<a id="tocScreatedexport"></a>
<a id="tocscreatedexport"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Unique identifier for the export.|

<h2 id="tocS_CreatedUpload">CreatedUpload</h2>
<!-- backwards compatibility -->
<a id="schemacreatedupload"></a>
<a id="schema_CreatedUpload"></a>
<a id="tocScreatedupload"></a>
<a id="tocscreatedupload"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"
```

Successfully created upload request

<h2 id="tocS_Empty">Empty</h2>
<!-- backwards compatibility -->
<a id="schemaempty"></a>
<a id="schema_Empty"></a>
<a id="tocSempty"></a>
<a id="tocsempty"></a>

```json
{}
```

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "error": {
    "code": "string",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|

<h2 id="tocS_Export">Export</h2>
<!-- backwards compatibility -->
<a id="schemaexport"></a>
<a id="schema_Export"></a>
<a id="tocSexport"></a>
<a id="tocsexport"></a>

```json
{
  "contentType": "application/vnd.climate.acrsi.geojson",
  "definition": {}
}
```

Client request to export data from a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentType|string(mime-type)|true|none|Content type representing data being exported (e.g. application/vnd.climate.acrsi.geojson).|
|definition|object|false|none|Additional specifications for a client's data export request, dependent on the content type.|

#### Enumerated Values

|Property|Value|
|---|---|
|contentType|application/vnd.climate.acrsi.geojson|
|contentType|application/vnd.climate.harvest.geojson|

<h2 id="tocS_ExportContents">ExportContents</h2>
<!-- backwards compatibility -->
<a id="schemaexportcontents"></a>
<a id="schema_ExportContents"></a>
<a id="tocSexportcontents"></a>
<a id="tocsexportcontents"></a>

```json
{
  "body": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|[BinaryData](#schemabinarydata)|true|none|Binary contents|

<h2 id="tocS_ExportStatus">ExportStatus</h2>
<!-- backwards compatibility -->
<a id="schemaexportstatus"></a>
<a id="schema_ExportStatus"></a>
<a id="tocSexportstatus"></a>
<a id="tocsexportstatus"></a>

```json
{
  "checksum": "string",
  "error": "string",
  "size": 0,
  "status": "PROCESSING",
  "xNextToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checksum|string|false|none|Base64 encoded MD5 hash of the export's contents.|
|error|string|false|none|Message indicating reason for validation failure.|
|size|integer(int64)|false|none|Size of the export's contents in bytes.|
|status|string|true|none|Current status of the export request:<br>  * `PROCESSING` - Export request has been received by Climate and is being processed.<br>  * `INVALID` - Export request has failed validity check.<br>  * `EXPIRED` - Export contents have expired, and are no longer available for retrieval.<br>  * `COMPLETED` - The export request has been successfully processed, and its contents are available for retrieval.<br>  * `NO_DATA` - The export request completed successfully but generated no data.<br>|
|xNextToken|string|false|none|Token which may be used when executing an identical export in<br>the future, but which only wants export data which was not<br>previously exported.<br>Assume a given field export request matches 12 fields today. And<br>tomorrow it matches 15 fields. By passing the xNextToken in the<br>definition section of tomorrow's field export request, only the<br>3 additional fields would be exported. Note, all other parameters<br>passed in the definition section must be identical to the original<br>request.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|status|PROCESSING|
|status|INVALID|
|status|EXPIRED|
|status|COMPLETED|
|status|NO_DATA|

<h2 id="tocS_FarmOrganization">FarmOrganization</h2>
<!-- backwards compatibility -->
<a id="schemafarmorganization"></a>
<a id="schema_FarmOrganization"></a>
<a id="tocSfarmorganization"></a>
<a id="tocsfarmorganization"></a>

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "name": "Back Forty",
  "type": "farm"
}
```

Logical representation of a farm organization with a name and type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Unique identifier for a farm organization.|
|name|string|true|none|Name of the farm organization.|
|type|string|true|none|Type of the farm organization.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|farm|

<h2 id="tocS_Field">Field</h2>
<!-- backwards compatibility -->
<a id="schemafield"></a>
<a id="schema_Field"></a>
<a id="tocSfield"></a>
<a id="tocsfield"></a>

```json
{
  "boundaryId": "00000000-0000-0000-0000-000000000000",
  "id": "00000000-0000-0000-0000-000000000000",
  "name": "Back Forty",
  "parent": {
    "id": "00000000-0000-0000-0000-000000000000",
    "type": "farm"
  },
  "resourceOwnerId": "00000000-0000-0000-0000-000000000000"
}
```

Logical representation of a Field with a name.  Spatial attributes of the Field are provided in the Boundary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundaryId|string(uuid)|true|none|Unique identifier for the current Field's Boundary.|
|id|string(uuid)|true|none|Unique identifier for a Field.|
|name|string|true|none|Name of the Field.|
|parent|[Parent](#schemaparent)|true|none|A minimal set of attributes regarding the parent of a farm organization.|
|resourceOwnerId|string(uuid)|true|none|Unique identifier of the resource owner that owns the Field.|

<h2 id="tocS_Fields">Fields</h2>
<!-- backwards compatibility -->
<a id="schemafields"></a>
<a id="schema_Fields"></a>
<a id="tocSfields"></a>
<a id="tocsfields"></a>

```json
{
  "results": [
    {
      "boundaryId": "00000000-0000-0000-0000-000000000000",
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "Back Forty",
      "parent": {
        "id": "00000000-0000-0000-0000-000000000000",
        "type": "farm"
      },
      "resourceOwnerId": "00000000-0000-0000-0000-000000000000"
    }
  ]
}
```

A batch of field results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[Field](#schemafield)]|true|none|none|

<h2 id="tocS_Geometry">Geometry</h2>
<!-- backwards compatibility -->
<a id="schemageometry"></a>
<a id="schema_Geometry"></a>
<a id="tocSgeometry"></a>
<a id="tocsgeometry"></a>

```json
{
  "coordinates": [
    0,
    0
  ],
  "type": "Point"
}
```

GeoJSON

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coordinates|[string]|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Point|
|type|Polygon|
|type|MultiPolygon|

<h2 id="tocS_HarvestActivities">HarvestActivities</h2>
<!-- backwards compatibility -->
<a id="schemaharvestactivities"></a>
<a id="schema_HarvestActivities"></a>
<a id="tocSharvestactivities"></a>
<a id="tocsharvestactivities"></a>

```json
{
  "results": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "endTime": "1970-01-01T00:00:00Z",
      "fieldIds": [
        "string"
      ],
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "length": 0,
      "startTime": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

A batch of harvest activities

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[HarvestActivitySummary](#schemaharvestactivitysummary)]|true|none|none|

<h2 id="tocS_HarvestActivityContents">HarvestActivityContents</h2>
<!-- backwards compatibility -->
<a id="schemaharvestactivitycontents"></a>
<a id="schema_HarvestActivityContents"></a>
<a id="tocSharvestactivitycontents"></a>
<a id="tocsharvestactivitycontents"></a>

```json
{
  "body": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|[BinaryData](#schemabinarydata)|true|none|Binary contents|

<h2 id="tocS_HarvestActivitySummary">HarvestActivitySummary</h2>
<!-- backwards compatibility -->
<a id="schemaharvestactivitysummary"></a>
<a id="schema_HarvestActivitySummary"></a>
<a id="tocSharvestactivitysummary"></a>
<a id="tocsharvestactivitysummary"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "endTime": "1970-01-01T00:00:00Z",
  "fieldIds": [
    "string"
  ],
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "length": 0,
  "startTime": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|The time the harvest activity was created. Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).|
|endTime|string(date-time)|true|none|The start time of the harvest activity. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).|
|fieldIds|[string]|true|none|Array of field ids associated the harvest activity.|
|id|string(uuid)|true|none|The id of a harvest activity.|
|length|integer(int64)|true|none|The size in bytes of the raw harvest activity file.|
|startTime|string(date-time)|true|none|The start time of the harvest activity. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).|
|updatedAt|string(date-time)|true|none|The time the harvest activity was last updated. Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).|

<h2 id="tocS_Metadata">Metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_Metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
{}
```

<h2 id="tocS_Operation">Operation</h2>
<!-- backwards compatibility -->
<a id="schemaoperation"></a>
<a id="schema_Operation"></a>
<a id="tocSoperation"></a>
<a id="tocsoperation"></a>

```json
{
  "id": "00000000-0000-0000-0000-000000000000",
  "name": "Back Forty",
  "resourceOwnerId": "00000000-0000-0000-0000-000000000000"
}
```

Logical representation of an operation with a name and resource owner.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Unique identifier for the operation.|
|name|string|true|none|Name of the operation.|
|resourceOwnerId|string(uuid)|true|none|Unique identifier of the resource owner that owns the Operation.|

<h2 id="tocS_Operations">Operations</h2>
<!-- backwards compatibility -->
<a id="schemaoperations"></a>
<a id="schema_Operations"></a>
<a id="tocSoperations"></a>
<a id="tocsoperations"></a>

```json
{
  "results": [
    {
      "id": "00000000-0000-0000-0000-000000000000",
      "name": "Back Forty",
      "resourceOwnerId": "00000000-0000-0000-0000-000000000000"
    }
  ]
}
```

A batch of operation results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[Operation](#schemaoperation)]|true|none|none|

<h2 id="tocS_Parent">Parent</h2>
<!-- backwards compatibility -->
<a id="schemaparent"></a>
<a id="schema_Parent"></a>
<a id="tocSparent"></a>
<a id="tocsparent"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "type": "farm"
}
```

A minimal set of attributes regarding the parent of a farm organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Unique identifier for the parent of a farm organization.|
|type|string|true|none|Type of the parent of a farm organization.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|farm|

<h2 id="tocS_PlantingActivities">PlantingActivities</h2>
<!-- backwards compatibility -->
<a id="schemaplantingactivities"></a>
<a id="schema_PlantingActivities"></a>
<a id="tocSplantingactivities"></a>
<a id="tocsplantingactivities"></a>

```json
{
  "results": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "endTime": "1970-01-01T00:00:00Z",
      "fieldIds": [
        "string"
      ],
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "length": 0,
      "startTime": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

A batch of planting activities

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[PlantingActivitySummary](#schemaplantingactivitysummary)]|true|none|none|

<h2 id="tocS_PlantingActivityContents">PlantingActivityContents</h2>
<!-- backwards compatibility -->
<a id="schemaplantingactivitycontents"></a>
<a id="schema_PlantingActivityContents"></a>
<a id="tocSplantingactivitycontents"></a>
<a id="tocsplantingactivitycontents"></a>

```json
{
  "body": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|[BinaryData](#schemabinarydata)|true|none|Binary contents|

<h2 id="tocS_PlantingActivitySummary">PlantingActivitySummary</h2>
<!-- backwards compatibility -->
<a id="schemaplantingactivitysummary"></a>
<a id="schema_PlantingActivitySummary"></a>
<a id="tocSplantingactivitysummary"></a>
<a id="tocsplantingactivitysummary"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "endTime": "1970-01-01T00:00:00Z",
  "fieldIds": [
    "string"
  ],
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "length": 0,
  "startTime": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|The time the planting activity was created. Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).|
|endTime|string(date-time)|true|none|The start time of the planting activity. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).|
|fieldIds|[string]|true|none|Array of field ids associated the planting activity.|
|id|string(uuid)|true|none|The id of a planting activity.|
|length|integer(int64)|true|none|The size in bytes of the raw planting activity file.|
|startTime|string(date-time)|true|none|The start time of the planting activity. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).|
|updatedAt|string(date-time)|true|none|The time the planting activity was last updated. Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).|

<h2 id="tocS_Point">Point</h2>
<!-- backwards compatibility -->
<a id="schemapoint"></a>
<a id="schema_Point"></a>
<a id="tocSpoint"></a>
<a id="tocspoint"></a>

```json
{
  "coordinates": [
    -122.2,
    38.1
  ],
  "type": "Point"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coordinates|[number(float)]|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_ResourceOwner">ResourceOwner</h2>
<!-- backwards compatibility -->
<a id="schemaresourceowner"></a>
<a id="schema_ResourceOwner"></a>
<a id="tocSresourceowner"></a>
<a id="tocsresourceowner"></a>

```json
{
  "email": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|
|id|string(uuid)|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_ScoutingObservation">ScoutingObservation</h2>
<!-- backwards compatibility -->
<a id="schemascoutingobservation"></a>
<a id="schema_ScoutingObservation"></a>
<a id="tocSscoutingobservation"></a>
<a id="tocsscoutingobservation"></a>

```json
{
  "endTime": "1970-01-01T00:00:00Z",
  "fieldIds": [
    "string"
  ],
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "location": {
    "coordinates": [
      0,
      0
    ],
    "type": "Point"
  },
  "locationDisplayColor": "#307af7",
  "note": "string",
  "startTime": "1970-01-01T00:00:00Z",
  "status": "ACTIVE",
  "tags": [
    {
      "code": "string"
    }
  ],
  "timespan": "PERMANENT",
  "title": "string",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(date-time)|true|none|The start time of the scouting observation. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).|
|fieldIds|[string]|true|none|Array of field ids associated with this observation.|
|id|string(uuid)|true|none|The id of a scouting observation.|
|location|[Geometry](#schemageometry)|true|none|Where the scouting observation occurred.  GeoJson in WGS84.|
|locationDisplayColor|string|true|none|Color of scouting pin assigned in the Climate FieldView app.<br>Limited in the Ux to a set of RGB values.<br>* #307af7<br>* #38d753<br>* #b037e4<br>* #ef3e3e<br>* #f7ec41<br>* #ff8439<br>* #808080<br>|
|note|string|true|none|The text of the scouting observation. Maximum of 4000 characters.|
|startTime|string(date-time)|true|none|The start time of the scouting observation. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).|
|status|string|true|none|The status of the scouting observation For example : ACTIVE, DELETED|
|tags|[[ScoutingTag](#schemascoutingtag)]|true|none|For example, ROCK_STONE, PONDING_WET, HAIL Maximum 20 tags allowed, 40 characters per tag.|
|timespan|string|true|none|Permanent or seasonal|
|title|string|true|none|The title or summary of the scouting observation. 40 Characters long, no emojis, and leading and trailing whitespace will be trimmed.|
|updatedAt|string(date-time)|true|none|The time the scouting observation or any of its attachments was last updated.Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).|

#### Enumerated Values

|Property|Value|
|---|---|
|locationDisplayColor|#307af7|
|locationDisplayColor|#38d753|
|locationDisplayColor|#b037e4|
|locationDisplayColor|#ef3e3e|
|locationDisplayColor|#f7ec41|
|locationDisplayColor|#ff8439|
|locationDisplayColor|#808080|
|status|ACTIVE|
|status|DELETED|
|timespan|PERMANENT|
|timespan|SEASONAL|

<h2 id="tocS_ScoutingObservationAttachment">ScoutingObservationAttachment</h2>
<!-- backwards compatibility -->
<a id="schemascoutingobservationattachment"></a>
<a id="schema_ScoutingObservationAttachment"></a>
<a id="tocSscoutingobservationattachment"></a>
<a id="tocsscoutingobservationattachment"></a>

```json
{
  "contentType": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "length": 0,
  "status": "ACTIVE",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentType|string|true|none|The content type of the attachment, e.g. image/png.|
|id|string(uuid)|true|none|id of the attachment|
|length|integer(int64)|true|none|The number of bytes in the attachment.|
|status|string|true|none|The status of the attachment. For example : ACTIVE, DELETED|
|updatedAt|string(date-time)|true|none|The time the attachment was last updated.<br>Time in ISO 8601 format with UTC timezone, 3 fractional seconds.<br>(https://tools.ietf.org/html/rfc3339)<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|DELETED|

<h2 id="tocS_ScoutingObservationAttachmentContents">ScoutingObservationAttachmentContents</h2>
<!-- backwards compatibility -->
<a id="schemascoutingobservationattachmentcontents"></a>
<a id="schema_ScoutingObservationAttachmentContents"></a>
<a id="tocSscoutingobservationattachmentcontents"></a>
<a id="tocsscoutingobservationattachmentcontents"></a>

```json
{
  "body": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|[BinaryData](#schemabinarydata)|true|none|Binary contents|

<h2 id="tocS_ScoutingObservationAttachments">ScoutingObservationAttachments</h2>
<!-- backwards compatibility -->
<a id="schemascoutingobservationattachments"></a>
<a id="schema_ScoutingObservationAttachments"></a>
<a id="tocSscoutingobservationattachments"></a>
<a id="tocsscoutingobservationattachments"></a>

```json
{
  "results": [
    {
      "contentType": "string",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "length": 0,
      "status": "ACTIVE",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

A batch of scouting attachments

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[ScoutingObservationAttachment](#schemascoutingobservationattachment)]|true|none|none|

<h2 id="tocS_ScoutingObservationSummary">ScoutingObservationSummary</h2>
<!-- backwards compatibility -->
<a id="schemascoutingobservationsummary"></a>
<a id="schema_ScoutingObservationSummary"></a>
<a id="tocSscoutingobservationsummary"></a>
<a id="tocsscoutingobservationsummary"></a>

```json
{
  "endTime": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "startTime": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(date-time)|true|none|The start time of the scouting observation. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).|
|id|string(uuid)|true|none|The id of a scouting observation.|
|startTime|string(date-time)|true|none|The start time of the scouting observation. Time in ISO 8601 format with UTC timezone, 3 fractional seconds (https://tools.ietf.org/html/rfc3339).|
|updatedAt|string(date-time)|true|none|The time the scouting observation or any of its attachments was last updated.Time in ISO 8601 format with UTC timezone, 3 fractional seconds. (https://tools.ietf.org/html/rfc3339).|

<h2 id="tocS_ScoutingObservations">ScoutingObservations</h2>
<!-- backwards compatibility -->
<a id="schemascoutingobservations"></a>
<a id="schema_ScoutingObservations"></a>
<a id="tocSscoutingobservations"></a>
<a id="tocsscoutingobservations"></a>

```json
{
  "results": [
    {
      "endTime": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "startTime": "1970-01-01T00:00:00Z",
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

A batch of scouting observations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[ScoutingObservationSummary](#schemascoutingobservationsummary)]|true|none|none|

<h2 id="tocS_ScoutingTag">ScoutingTag</h2>
<!-- backwards compatibility -->
<a id="schemascoutingtag"></a>
<a id="schema_ScoutingTag"></a>
<a id="tocSscoutingtag"></a>
<a id="tocsscoutingtag"></a>

```json
{
  "code": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|

<h2 id="tocS_Upload">Upload</h2>
<!-- backwards compatibility -->
<a id="schemaupload"></a>
<a id="schema_Upload"></a>
<a id="tocSupload"></a>
<a id="tocsupload"></a>

```json
{
  "contentType": "image/vnd.climate.thermal.geotiff",
  "length": 0,
  "md5": "string",
  "metadata": {}
}
```

Client request to upload data for a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentType|string(mime-type)|true|none|Content type representing data being uploaded (e.g. image/vnd.climate.rgb.geotiff)|
|length|integer(int64)|true|none|Content size in bytes|
|md5|string|true|none|Base64 encoded md5 hash of the content|
|metadata|[Metadata](#schemametadata)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|contentType|image/vnd.climate.thermal.geotiff|
|contentType|image/vnd.climate.ndvi.geotiff|
|contentType|image/vnd.climate.rgb.geotiff|
|contentType|image/vnd.climate.rgb-nir.geotiff|
|contentType|image/vnd.climate.rgb-cir.geotiff|
|contentType|image/vnd.climate.waterstress.geotiff|
|contentType|image/vnd.climate.elevation.geotiff|
|contentType|image/vnd.climate.raw.geotiff|
|contentType|application/vnd.climate.field.geojson|
|contentType|application/vnd.climate.rx.planting.shp|
|contentType|application/vnd.climate.prescription.zones.shp|
|contentType|application/vnd.climate.modus.xml|
|contentType|application/vnd.climate.stand-count.geojson|
|contentType|application/vnd.climate.weed-count.geojson|
|contentType|application/vnd.climate.as-applied.zip|
|contentType|application/vnd.climate.as-planted.zip|
|contentType|application/vnd.climate.as-harvested.zip|

<h2 id="tocS_UploadStatus">UploadStatus</h2>
<!-- backwards compatibility -->
<a id="schemauploadstatus"></a>
<a id="schema_UploadStatus"></a>
<a id="tocSuploadstatus"></a>
<a id="tocsuploadstatus"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "status": "UPLOADING"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|Unique identifier for the upload.|
|status|string|true|none|Current status of the upload:<br>  * `UPLOADING` - Uploading has started, parts are still coming in.<br>  * `INVALID` - Upload has failed validity check.<br>  * `PENDING` - Upload has been received by Climate and is being processed.<br>  * `INBOX` - The upload is awaiting user acceptance in their Data Inbox.<br>  * `DECLINED` - The user has declined the upload in their Data Inbox.<br>  * `IMPORTING` - The user has accepted the upload and it is being imported into their account.<br>  * `SUCCESS` - The upload has been successfully imported.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|status|UPLOADING|
|status|INVALID|
|status|PENDING|
|status|INBOX|
|status|DECLINED|
|status|IMPORTING|
|status|SUCCESS|

<h2 id="tocS_UploadStatusQuery">UploadStatusQuery</h2>
<!-- backwards compatibility -->
<a id="schemauploadstatusquery"></a>
<a id="schema_UploadStatusQuery"></a>
<a id="tocSuploadstatusquery"></a>
<a id="tocsuploadstatusquery"></a>

```json
{
  "ids": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[string(uuid)]|true|none|none|

<h2 id="tocS_UploadStatuses">UploadStatuses</h2>
<!-- backwards compatibility -->
<a id="schemauploadstatuses"></a>
<a id="schema_UploadStatuses"></a>
<a id="tocSuploadstatuses"></a>
<a id="tocsuploadstatuses"></a>

```json
{
  "results": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "status": "UPLOADING"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[UploadStatus](#schemauploadstatus)]|true|none|none|

<h2 id="tocS_UploadedBoundaryId">UploadedBoundaryId</h2>
<!-- backwards compatibility -->
<a id="schemauploadedboundaryid"></a>
<a id="schema_UploadedBoundaryId"></a>
<a id="tocSuploadedboundaryid"></a>
<a id="tocsuploadedboundaryid"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

Unique identifier of a successfully uploaded boundary

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
