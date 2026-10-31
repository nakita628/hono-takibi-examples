<h1 id="canva-rest-apis">Canva REST APIs v2024-06-18</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API for building apps with Canva via a REST api

Base URLs:

* <a href="https://api.canva.com/rest">https://api.canva.com/rest</a> - Canva REST APIs

<a href="https://www.canva.com/trust/legal/">Terms of service</a>
Web: <a href="https://community.canva.dev/">Canva Developer Community</a> 
License: ©2023 All Rights Reserved

# Authentication

- HTTP Authentication, scheme: basic

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://www.canva.com/api/oauth/authorize](https://www.canva.com/api/oauth/authorize)
    - Token URL = [https://api.canva.com/rest/v1/oauth/token](https://api.canva.com/rest/v1/oauth/token)

|Scope|Scope Description|
|---|---|
|design:content:read|View the contents of the user's designs.|
|design:meta:read|View the metadata of the user's designs.|
|design:content:write|Create designs on the user's behalf.|
|folder:read|View the metadata and contents of the user's folders, including their **Projects**<br>folder.|
|folder:write|Add, move, or remove the user's folders. It also lets you edit folder metadata,<br>such as the folder's name.|
|folder:permission:write|Set, update, or remove permissions assigned to the user's folders.|
|asset:read|View the metadata for the user's assets, such as uploaded images.|
|asset:write|Upload, update, or delete assets on the user's behalf.|
|comment:read|View the comments on the user's designs, and the associated metadata.|
|comment:write|Create comments and replies on the user's designs.|
|collaboration:event|Receive webhook notifications about events relevant to the user.|
|brandtemplate:meta:read|View the metadata of the brand templates associated with the user's brand.|
|brandtemplate:content:read|Read the content of the brand templates associated with the user's brand.|
|brandtemplate:content:write|Publish brand templates associated with the user's brand.|
|profile:read|Read a user's profile and account information.|
|openid|Read user information through Open ID Connect (OIDC).|
|profile|Read user profile information through OIDC.|
|email|Read user email address through OIDC.|

<h1 id="canva-rest-apis-analytics">analytics</h1>

## getDesignAnalytics

<a id="opIdgetDesignAnalytics"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/designs/string/analytics \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/designs/{designId}/analytics`

<Warning>

This API is currently provided as a preview. Be aware of the following:

- There might be unannounced breaking changes.
- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).
- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.

</Warning>

<Availability>
To use this API, your app must act on behalf of a user who is a member of a [Canva Enterprise](https://www.canva.com/enterprise/) organization.
</Availability>

Gets the aggregated analytics for a design.

The response includes total views, unique viewers, and view duration metrics.

<h3 id="getdesignanalytics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|designId|path|string|true|The design ID.|

> Example responses

> 200 Response

```json
{
  "average_view_duration_seconds": 42,
  "total_view_duration_seconds": 5040,
  "unique_view_count": 87,
  "total_view_count": 120
}
```

> 400 Response

```json
{
  "code": "invalid_field",
  "message": "designId does not match expected format"
}
```

> 401 Response

```json
{
  "code": "invalid_access_token",
  "message": "Access token is invalid"
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Not allowed to access analytics for this design"
}
```

> 404 Response

```json
{
  "code": "design_not_found",
  "message": "Design not found or analytics are not available for this design"
}
```

> 429 Response

```json
{
  "code": "too_many_requests",
  "message": "Too many requests to {operation}"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="getdesignanalytics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetDesignAnalyticsResponse](#schemagetdesignanalyticsresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: design:content:read )
</aside>

## getDesignAnalyticsViewers

<a id="opIdgetDesignAnalyticsViewers"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/designs/string/analytics/viewers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/designs/{designId}/analytics/viewers`

<Warning>

This API is currently provided as a preview. Be aware of the following:

- There might be unannounced breaking changes.
- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).
- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.

</Warning>

<Availability>
To use this API, your app must act on behalf of a user who is a member of a [Canva Enterprise](https://www.canva.com/enterprise/) organization.
</Availability>

Lists viewers for a design, ordered by most recent view first.

<h3 id="getdesignanalyticsviewers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|designId|path|string|true|The design ID.|
|link_id|query|string|false|Filters viewers by a specific trackable link. If omitted, only viewers who visited the design without using a trackable link are returned.|
|first_viewed_after|query|integer(int64)|false|Only returns viewers whose first view happened after this time, as a Unix timestamp (in seconds since the Unix Epoch).|
|limit|query|integer(int32)|false|The maximum number of viewers to return per page.|
|continuation|query|string|false|If the success response contains a continuation token, there are more viewers you can list. You can use this token as a query parameter and retrieve more viewers from the list, for example `/v1/designs/{designId}/analytics/viewers?continuation={continuation}`.<br><br>To retrieve all viewers, you might need to make multiple requests.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "viewer_id": "b2d44753-f996-46ff-8f01-d4143911550f",
      "user": {
        "user_id": "auDAbliZ2rQNNOsUl5OLu",
        "team_id": "Oi2RJILTrKk0KRhRUZozX",
        "display_name": "Jane Doe"
      },
      "last_viewed_at": 1748044800,
      "viewer_type": "editor",
      "visibility": "shown",
      "total_view_duration_seconds": 312,
      "first_viewed_at": 1745452800,
      "pages_viewed": 8,
      "form_factor": "small",
      "device_operating_system": "macOS",
      "city_country": "Sydney, Australia",
      "total_view_count": 14
    }
  ],
  "continuation": "RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN"
}
```

> 400 Response

```json
{
  "code": "bad_query_params",
  "message": "Expected long for query parameter `{key}` but found {value}"
}
```

> 401 Response

```json
{
  "code": "invalid_access_token",
  "message": "Access token is invalid"
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Not allowed to access analytics for this design"
}
```

> 404 Response

```json
{
  "code": "design_not_found",
  "message": "Design not found or analytics are not available for this design"
}
```

> 429 Response

```json
{
  "code": "too_many_requests",
  "message": "Too many requests to {operation}"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="getdesignanalyticsviewers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetDesignAnalyticsViewersResponse](#schemagetdesignanalyticsviewersresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: design:content:read )
</aside>

## getDesignAnalyticsViewsOverTime

<a id="opIdgetDesignAnalyticsViewsOverTime"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/designs/string/analytics/views-over-time \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/designs/{designId}/analytics/views-over-time`

<Warning>

This API is currently provided as a preview. Be aware of the following:

- There might be unannounced breaking changes.
- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).
- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.

</Warning>

<Availability>
To use this API, your app must act on behalf of a user who is a member of a [Canva Enterprise](https://www.canva.com/enterprise/) organization.
</Availability>

Lists the view counts over time for a design.

Each response item represents one time bucket.

<h3 id="getdesignanalyticsviewsovertime-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|designId|path|string|true|The design ID.|
|start_time|query|integer(int64)|false|The inclusive start of the requested time range, as a Unix timestamp (in seconds since the Unix Epoch).|
|end_time|query|integer(int64)|false|The inclusive end of the requested time range, as a Unix timestamp (in seconds since the Unix Epoch).|
|timezone|query|string|false|The timezone to use for bucketing, as a UTC offset in the form `+HH:MM` (for example, `+10:00`).|
|limit|query|integer(int32)|false|The maximum number of time buckets to return per page.|
|continuation|query|string|false|If the success response contains a continuation token, there are more time buckets you can list. You can use this token as a query parameter and retrieve more time buckets from the list, for example `/v1/designs/{designId}/analytics/views-over-time?continuation={continuation}`.<br><br>To retrieve all time buckets, you might need to make multiple requests.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "count": 15,
      "bucket_start_at": 1745452800
    }
  ],
  "continuation": "RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN"
}
```

> 400 Response

```json
{
  "code": "bad_query_params",
  "message": "Expected long for query parameter `{key}` but found {value}"
}
```

> 401 Response

```json
{
  "code": "invalid_access_token",
  "message": "Access token is invalid"
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Not allowed to access analytics for this design"
}
```

> 404 Response

```json
{
  "code": "design_not_found",
  "message": "Design not found or analytics are not available for this design"
}
```

> 429 Response

```json
{
  "code": "too_many_requests",
  "message": "Too many requests to {operation}"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="getdesignanalyticsviewsovertime-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetDesignAnalyticsViewsOverTimeResponse](#schemagetdesignanalyticsviewsovertimeresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: design:content:read )
</aside>

## getDesignAnalyticsPageViews

<a id="opIdgetDesignAnalyticsPageViews"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/designs/string/analytics/page-views \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "page_ids": [
      "PBBKfZml7MRHRQVw",
      "PBBKfZml7Mghjsdg"
    ],
    "limit": 50,
    "continuation": "RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN",
    "filter": {
      "type": "by_viewer",
      "link_id": "hddb98a3716",
      "viewer_id": "b2d44753-f996-46ff-8f01-d4143911550f"
    }
  }'
```

`POST /v1/designs/{designId}/analytics/page-views`

<Warning>

This API is currently provided as a preview. Be aware of the following:

- There might be unannounced breaking changes.
- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).
- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.

</Warning>

<Availability>
To use this API, your app must act on behalf of a user who is a member of a [Canva Enterprise](https://www.canva.com/enterprise/) organization.
</Availability>

Lists the page-level view duration data for a design.

The request body can include page filters and pagination controls.

> Body parameter

```json
{
  "page_ids": [
    "PBBKfZml7MRHRQVw",
    "PBBKfZml7Mghjsdg"
  ],
  "limit": 50,
  "continuation": "RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN",
  "filter": {
    "type": "by_viewer",
    "link_id": "hddb98a3716",
    "viewer_id": "b2d44753-f996-46ff-8f01-d4143911550f"
  }
}
```

<h3 id="getdesignanalyticspageviews-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|designId|path|string|true|The design ID.|
|body|body|[GetDesignAnalyticsPageViewsRequest](#schemagetdesignanalyticspageviewsrequest)|true|none|
|» page_ids|body|[string]|true|The design page IDs to retrieve view duration data for.|
|» limit|body|integer(int32)|false|The maximum number of page results to return per page.|
|» continuation|body|string|false|If the success response contains a continuation token, there are more page results you can list. You can use this token in the request body and retrieve more page results from the list.<br><br>To retrieve all page results, you might need to make multiple requests.|
|» filter|body|[PageViewFilter](#schemapageviewfilter)|false|A filter for page view data.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "page_id": "PBBKfZml7MRHRQVw",
      "total_view_duration_seconds": 1860,
      "average_duration_seconds": 21.5,
      "unique_view_count": 87
    }
  ],
  "continuation": "RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN"
}
```

> 400 Response

```json
{
  "code": "bad_request_body",
  "message": "Failed to read request body"
}
```

> 401 Response

```json
{
  "code": "invalid_access_token",
  "message": "Access token is invalid"
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Not allowed to access analytics for this design"
}
```

> 404 Response

```json
{
  "code": "design_not_found",
  "message": "Design not found or analytics are not available for this design"
}
```

> 429 Response

```json
{
  "code": "too_many_requests",
  "message": "Too many requests to {operation}"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="getdesignanalyticspageviews-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetDesignAnalyticsPageViewsResponse](#schemagetdesignanalyticspageviewsresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: design:content:read )
</aside>

## getDesignAnalyticsLinks

<a id="opIdgetDesignAnalyticsLinks"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/designs/string/analytics/links \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/designs/{designId}/analytics/links`

<Warning>

This API is currently provided as a preview. Be aware of the following:

- There might be unannounced breaking changes.
- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).
- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.

</Warning>

<Availability>
To use this API, your app must act on behalf of a user who is a member of a [Canva Enterprise](https://www.canva.com/enterprise/) organization.
</Availability>

Lists trackable links and their metrics for a design.

<h3 id="getdesignanalyticslinks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|designId|path|string|true|The design ID.|
|limit|query|integer(int32)|false|The maximum number of links to return per page.|
|continuation|query|string|false|If the success response contains a continuation token, there are more links you can list. You can use this token as a query parameter and retrieve more links from the list, for example `/v1/designs/{designId}/analytics/links?continuation={continuation}`.<br><br>To retrieve all links, you might need to make multiple requests.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "link_id": "hddb98a3716",
      "name": "Newsletter link",
      "total_view_count": 64,
      "unique_view_count": 41,
      "total_view_duration_seconds": 2580,
      "average_view_duration_seconds": 40,
      "last_viewed_at": 1748044800
    }
  ],
  "continuation": "RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN"
}
```

> 400 Response

```json
{
  "code": "bad_query_params",
  "message": "Expected long for query parameter `{key}` but found {value}"
}
```

> 401 Response

```json
{
  "code": "invalid_access_token",
  "message": "Access token is invalid"
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Not allowed to access analytics for this design"
}
```

> 404 Response

```json
{
  "code": "design_not_found",
  "message": "Design not found or analytics are not available for this design"
}
```

> 429 Response

```json
{
  "code": "too_many_requests",
  "message": "Too many requests to {operation}"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="getdesignanalyticslinks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetDesignAnalyticsLinksResponse](#schemagetdesignanalyticslinksresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: design:content:read )
</aside>

<h1 id="canva-rest-apis-app">app</h1>

## getAppJwks

<a id="opIdgetAppJwks"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/apps/string/jwks \
  -H 'Accept: application/json'
```

`GET /v1/apps/{appId}/jwks`

Returns the Json Web Key Set (public keys) of an app. These keys are used to
verify JWTs sent to app backends.

<h3 id="getappjwks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The app ID.|

> Example responses

> 200 Response

```json
{
  "keys": [
    {
      "alg": "string",
      "kid": "string",
      "kty": "string",
      "n": "string",
      "e": "string",
      "use": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "code": "app_not_found",
  "message": "Auth keys not found for app {appId}"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="getappjwks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetAppJwksResponse](#schemagetappjwksresponse)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="canva-rest-apis-asset">asset</h1>

## getAsset

<a id="opIdgetAsset"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/assets/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/assets/{assetId}`

You can retrieve the metadata of an asset by specifying its `assetId`.

<h3 id="getasset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assetId|path|string|true|The ID of the asset.|

> Example responses

> 200 Response

```json
{
  "asset": {
    "type": "image",
    "id": "Msd59349ff",
    "name": "My Awesome Upload",
    "tags": [
      "image",
      "holiday",
      "best day ever"
    ],
    "import_status": {
      "state": "success",
      "error": {
        "code": "file_too_big",
        "message": "string"
      }
    },
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "owner": {
      "user_id": "auDAbliZ2rQNNOsUl5OLu",
      "team_id": "Oi2RJILTrKk0KRhRUZozX"
    },
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    },
    "metadata": {
      "type": "image",
      "width": 1920,
      "height": 1080,
      "smart_tags": [
        "landscape",
        "sunset",
        "mountains",
        "nature"
      ]
    }
  }
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Not allowed to access this asset"
}
```

> 404 Response

```json
{
  "code": "asset_not_found",
  "message": "Asset not found"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="getasset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetAssetResponse](#schemagetassetresponse)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: asset:read )
</aside>

## deleteAsset

<a id="opIddeleteAsset"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/assets/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/assets/{assetId}`

You can delete an asset by specifying its `assetId`. This operation mirrors the behavior
in the Canva UI. Deleting an item moves it to the trash.
Deleting an asset doesn't remove it from designs that already use it.

<h3 id="deleteasset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assetId|path|string|true|The ID of the asset.|

> Example responses

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Not allowed to delete this asset"
}
```

> 404 Response

```json
{
  "code": "asset_not_found",
  "message": "Asset not found"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="deleteasset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: asset:write )
</aside>

## updateAsset

<a id="opIdupdateAsset"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/assets/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "My Awesome Upload",
    "tags": [
      "image",
      "holiday",
      "best day ever"
    ]
  }'
```

`PATCH /v1/assets/{assetId}`

You can update the name and tags of an asset by specifying its `assetId`. Updating the tags
replaces all existing tags of the asset.

> Body parameter

```json
{
  "name": "My Awesome Upload",
  "tags": [
    "image",
    "holiday",
    "best day ever"
  ]
}
```

<h3 id="updateasset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assetId|path|string|true|The ID of the asset.|
|body|body|[UpdateAssetRequest](#schemaupdateassetrequest)|false|none|
|» name|body|string|false|The name of the asset. This is shown in the Canva UI.<br>When this field is undefined or empty, nothing is updated.|
|» tags|body|[string]|false|The replacement tags for the asset.<br>When this field is undefined, nothing is updated.|

> Example responses

> 200 Response

```json
{
  "asset": {
    "type": "image",
    "id": "Msd59349ff",
    "name": "My Awesome Upload",
    "tags": [
      "image",
      "holiday",
      "best day ever"
    ],
    "import_status": {
      "state": "success",
      "error": {
        "code": "file_too_big",
        "message": "string"
      }
    },
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "owner": {
      "user_id": "auDAbliZ2rQNNOsUl5OLu",
      "team_id": "Oi2RJILTrKk0KRhRUZozX"
    },
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    },
    "metadata": {
      "type": "image",
      "width": 1920,
      "height": 1080,
      "smart_tags": [
        "landscape",
        "sunset",
        "mountains",
        "nature"
      ]
    }
  }
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Not allowed to update this asset"
}
```

> 404 Response

```json
{
  "code": "asset_not_found",
  "message": "Asset not found"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="updateasset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdateAssetResponse](#schemaupdateassetresponse)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: asset:write )
</aside>

## CreateAssetUploadJob

<a id="opIdCreateAssetUploadJob"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/asset-uploads \
  -X POST \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Asset-Upload-Metadata: name_base64,TXkgQXdlc29tZSBVcGxvYWQg8J+agA==' \
  --data-binary '@/path/to/file'
```

`POST /v1/asset-uploads`

Starts a new [asynchronous job](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints) to upload an asset to the user's content library. Supported file types for assets are listed in the [Assets API overview](https://www.canva.dev/docs/apps/rest-apis/reference/assets/).

The request format for this endpoint is an `application/octet-stream` body of bytes. Attach
information about the upload using an `Asset-Upload-Metadata` header.


<Note>

For more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints). You can check the status and get the results of asset upload jobs created with this API using the [Get asset upload job API](https://www.canva.dev/docs/apps/rest-apis/reference/assets/get-asset-upload-job/).

</Note>

<h3 id="createassetuploadjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Asset-Upload-Metadata|header|[AssetUploadMetadata](#schemaassetuploadmetadata)|true|none|
|body|body|string(binary)|true|Binary of the asset to upload.|

> Example responses

> 200 Response

```json
{
  "job": {
    "id": "e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8",
    "status": "in_progress"
  }
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="createassetuploadjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CreateAssetUploadJobResponse](#schemacreateassetuploadjobresponse)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: asset:write )
</aside>

## GetAssetUploadJob

<a id="opIdGetAssetUploadJob"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/asset-uploads/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/asset-uploads/{jobId}`

Get the result of an asset upload job that was created using the [Create asset upload job API](https://www.canva.dev/docs/apps/rest-apis/reference/assets/create-asset-upload-job/).

You might need to make multiple requests to this endpoint until you get a `success` or `failed` status. For more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints).

<h3 id="getassetuploadjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|The asset upload job ID.|

> Example responses

> 200 Response

```json
{
  "job": {
    "id": "e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8",
    "status": "in_progress"
  }
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Not allowed to access this asset"
}
```

> 404 Response

```json
{
  "code": "asset_not_found",
  "message": "Asset not found"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="getassetuploadjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetAssetUploadJobResponse](#schemagetassetuploadjobresponse)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: asset:read )
</aside>

## createUrlAssetUploadJob

<a id="opIdcreateUrlAssetUploadJob"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/url-asset-uploads \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "My Awesome Asset",
    "url": "https://example.com/my_asset_to_upload.jpg"
  }'
```

`POST /v1/url-asset-uploads`

Starts a new [asynchronous job](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints) to upload an asset from a URL to the user's content library. Supported file types for assets are listed in the [Assets API overview](https://www.canva.dev/docs/apps/rest-apis/reference/assets/).

<Note>
 Uploading a video asset from a URL is limited to a maximum 100MB file size. For importing larger video files, use the [Create asset upload job API](https://www.canva.dev/docs/apps/rest-apis/reference/assets/create-asset-upload-job/).
</Note>

<Note>
For more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints). You can check the status and get the results of asset upload jobs created with this API using the [Get asset upload job via URL API](https://www.canva.dev/docs/apps/rest-apis/reference/assets/get-url-asset-upload-job/).
</Note>

> Body parameter

```json
{
  "name": "My Awesome Asset",
  "url": "https://example.com/my_asset_to_upload.jpg"
}
```

<h3 id="createurlassetuploadjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateUrlAssetUploadJobRequest](#schemacreateurlassetuploadjobrequest)|true|none|
|» name|body|string|true|A name for the asset.|
|» url|body|string|true|The URL of the file to import. This URL must be accessible from the internet and be publicly available.|

> Example responses

> 200 Response

```json
{
  "job": {
    "id": "e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8",
    "status": "in_progress"
  }
}
```

> 400 Response

```json
{
  "code": "invalid_field",
  "message": "'url' provided is invalid."
}
```

> 404 Response

```json
{
  "code": "not_found",
  "message": "Job with Id {jobId} not found"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="createurlassetuploadjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CreateUrlAssetUploadJobResponse](#schemacreateurlassetuploadjobresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: asset:write )
</aside>

## getUrlAssetUploadJob

<a id="opIdgetUrlAssetUploadJob"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/url-asset-uploads/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/url-asset-uploads/{jobId}`

Get the result of an asset upload job that was created using the [Create asset upload job via URL API](https://www.canva.dev/docs/apps/rest-apis/reference/assets/create-url-asset-upload-job/).

You might need to make multiple requests to this endpoint until you get a `success` or `failed` status. For more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints).

<h3 id="geturlassetuploadjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|The asset upload job ID.|

> Example responses

> 200 Response

```json
{
  "job": {
    "id": "e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8",
    "status": "in_progress"
  }
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Not allowed to get this job status"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "message": "Job {jobId} not found"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="geturlassetuploadjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetUrlAssetUploadJobResponse](#schemageturlassetuploadjobresponse)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: asset:read )
</aside>

<h1 id="canva-rest-apis-autofill">autofill</h1>

## createDesignAutofillJob

<a id="opIdcreateDesignAutofillJob"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/autofills \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "type": "create_from_brand_template",
    "brand_template_id": "DAFVztcvd9z",
    "title": "My autofilled design",
    "data": {
      "cute_pet_image_of_the_day": {
        "type": "image",
        "asset_id": "Msd59349ff"
      },
      "cute_pet_video_of_the_day": {
        "type": "video",
        "asset_id": "VAHCkrNUANI"
      },
      "cute_pet_witty_pet_says": {
        "type": "text",
        "text": "It was like this when I got here!"
      },
      "cute_pet_sales_chart": {
        "type": "chart",
        "chart_data": {
          "column_configs": [
            {
              "name": "Geographic Region",
              "type": "string"
            },
            {
              "name": "Sales (millions AUD)",
              "type": "number"
            },
            {
              "name": "Target (millions AUD)",
              "type": "number"
            },
            {
              "name": "Target met?",
              "type": "boolean"
            },
            {
              "name": "Date met",
              "type": "date"
            }
          ],
          "rows": [
            {
              "cells": [
                {
                  "type": "string",
                  "value": "Asia Pacific"
                },
                {
                  "type": "number",
                  "value": 10.2
                },
                {
                  "type": "number",
                  "value": 10
                },
                {
                  "type": "boolean",
                  "value": true
                },
                {
                  "type": "date",
                  "value": 1721944387
                }
              ]
            },
            {
              "cells": [
                {
                  "type": "string",
                  "value": "EMEA"
                },
                {
                  "type": "number",
                  "value": 13.8
                },
                {
                  "type": "number",
                  "value": 14
                },
                {
                  "type": "boolean",
                  "value": false
                },
                {
                  "type": "date"
                }
              ]
            }
          ]
        }
      },
      "cute_pet_sales_sheet": {
        "type": "sheet",
        "sheet_data": {
          "column_configs": [
            {
              "name": "Geographic Region",
              "type": "string"
            },
            {
              "name": "Sales (millions AUD)",
              "type": "number"
            },
            {
              "name": "Target (millions AUD)",
              "type": "number"
            },
            {
              "name": "Target met?",
              "type": "boolean"
            },
            {
              "name": "Date met",
              "type": "date"
            }
          ],
          "rows": [
            {
              "cells": [
                {
                  "type": "string",
                  "value": "Asia Pacific"
                },
                {
                  "type": "number",
                  "value": 10.2
                },
                {
                  "type": "number",
                  "value": 10
                },
                {
                  "type": "boolean",
                  "value": true
                },
                {
                  "type": "date",
                  "value": 1721944387
                }
              ]
            },
            {
              "cells": [
                {
                  "type": "string",
                  "value": "EMEA"
                },
                {
                  "type": "number",
                  "value": 13.8
                },
                {
                  "type": "number",
                  "value": 14
                },
                {
                  "type": "boolean",
                  "value": false
                },
                {
                  "type": "date"
                }
              ]
            }
          ]
        }
      }
    }
  }'
```

`POST /v1/autofills`

<Availability>
Autofill for designs and brand templates is available when your app acts on behalf of a user on Canva Pro (including Canva Education and Canva for Nonprofits), Canva Teams, or Canva Enterprise. Usage limits will be introduced in the future.
</Availability>

Starts a new [asynchronous job](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints) to autofill a Canva design using input data. Use the `type` field to choose the source of the design:

- `create_from_brand_template`: autofill a new design from a brand template. If `type` isn't specified in the request, the request type is assumed to be `create_from_brand_template`. To get a list of input data fields for a brand template, use the [Get brand template dataset API](https://www.canva.dev/docs/apps/rest-apis/reference/brand-templates/get-brand-template-dataset/).
- `create_from_design`: autofill a new design from an existing design that contains autofill data fields. To get the input data fields for an existing design, use the [Get design dataset
API](https://www.canva.dev/docs/apps/rest-apis/reference/designs/get-design-dataset/).
- `update_design`: autofill an existing design in place, rather than creating a new design. To get the input data fields for the design, use the [Get design dataset API](https://www.canva.dev/docs/apps/rest-apis/reference/designs/get-design-dataset/).

Data fields in brand templates or designs might change (for example, they might be renamed or removed). If you provide data for a field name that doesn't exist, it's silently skipped. Use the Get dataset APIs to confirm the current fields before creating an autofill job.

Available data field types to autofill include:

- Images (which you can autofill with an image or a video asset)
- Text
- Charts
- Sheets

NOTE: For more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints). You can check the status and get the results of autofill jobs created with this API using the [Get design autofill job API](https://www.canva.dev/docs/apps/rest-apis/reference/autofills/get-design-autofill-job/).

> Body parameter

```json
{
  "type": "create_from_brand_template",
  "brand_template_id": "DAFVztcvd9z",
  "title": "My autofilled design",
  "data": {
    "cute_pet_image_of_the_day": {
      "type": "image",
      "asset_id": "Msd59349ff"
    },
    "cute_pet_video_of_the_day": {
      "type": "video",
      "asset_id": "VAHCkrNUANI"
    },
    "cute_pet_witty_pet_says": {
      "type": "text",
      "text": "It was like this when I got here!"
    },
    "cute_pet_sales_chart": {
      "type": "chart",
      "chart_data": {
        "column_configs": [
          {
            "name": "Geographic Region",
            "type": "string"
          },
          {
            "name": "Sales (millions AUD)",
            "type": "number"
          },
          {
            "name": "Target (millions AUD)",
            "type": "number"
          },
          {
            "name": "Target met?",
            "type": "boolean"
          },
          {
            "name": "Date met",
            "type": "date"
          }
        ],
        "rows": [
          {
            "cells": [
              {
                "type": "string",
                "value": "Asia Pacific"
              },
              {
                "type": "number",
                "value": 10.2
              },
              {
                "type": "number",
                "value": 10
              },
              {
                "type": "boolean",
                "value": true
              },
              {
                "type": "date",
                "value": 1721944387
              }
            ]
          },
          {
            "cells": [
              {
                "type": "string",
                "value": "EMEA"
              },
              {
                "type": "number",
                "value": 13.8
              },
              {
                "type": "number",
                "value": 14
              },
              {
                "type": "boolean",
                "value": false
              },
              {
                "type": "date"
              }
            ]
          }
        ]
      }
    },
    "cute_pet_sales_sheet": {
      "type": "sheet",
      "sheet_data": {
        "column_configs": [
          {
            "name": "Geographic Region",
            "type": "string"
          },
          {
            "name": "Sales (millions AUD)",
            "type": "number"
          },
          {
            "name": "Target (millions AUD)",
            "type": "number"
          },
          {
            "name": "Target met?",
            "type": "boolean"
          },
          {
            "name": "Date met",
            "type": "date"
          }
        ],
        "rows": [
          {
            "cells": [
              {
                "type": "string",
                "value": "Asia Pacific"
              },
              {
                "type": "number",
                "value": 10.2
              },
              {
                "type": "number",
                "value": 10
              },
              {
                "type": "boolean",
                "value": true
              },
              {
                "type": "date",
                "value": 1721944387
              }
            ]
          },
          {
            "cells": [
              {
                "type": "string",
                "value": "EMEA"
              },
              {
                "type": "number",
                "value": 13.8
              },
              {
                "type": "number",
                "value": 14
              },
              {
                "type": "boolean",
                "value": false
              },
              {
                "type": "date"
              }
            ]
          }
        ]
      }
    }
  }
}
```

<h3 id="createdesignautofilljob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateDesignAutofillJobRequest](#schemacreatedesignautofilljobrequest)|false|none|
|» *oneOf*|body|[CreateFromBrandTemplateAutofillJobRequest](#schemacreatefrombrandtemplateautofilljobrequest)|false|Create a new autofilled design from a brand template.|
|» *oneOf*|body|[CreateFromDesignAutofillJobRequest](#schemacreatefromdesignautofilljobrequest)|false|Create a new autofilled design from an existing design that contains autofill data fields.|
|» *oneOf*|body|[UpdateDesignAutofillJobRequest](#schemaupdatedesignautofilljobrequest)|false|Autofill an existing design in place with the provided data.|

> Example responses

> 200 Response

```json
{
  "job": {
    "id": "450a76e7-f96f-43ae-9c37-0e1ce492ac72",
    "status": "in_progress"
  }
}
```

> 400 Response

```json
{
  "code": "bad_request_params",
  "message": "Design title invalid"
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Not allowed to access brand template with id '{brandTemplateId}'"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "message": "Brand template with id '{brandTemplateId}' not found"
}
```

> 429 Response

```json
{
  "code": "quota_exceeded",
  "message": "Free autofill quota has been exceeded. Present the `upsell_url` to the user and prompt them to upgrade their Canva account to continue using the autofill feature.",
  "upsell_url": "{upsellUrl}"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="createdesignautofilljob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CreateDesignAutofillJobResponse](#schemacreatedesignautofilljobresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests|[FeatureQuotaExceededError](#schemafeaturequotaexceedederror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: design:content:write )
</aside>

## getDesignAutofillJob

<a id="opIdgetDesignAutofillJob"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/autofills/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/autofills/{jobId}`

<Availability>
Autofill for designs and brand templates is available when your app acts on behalf of a user on Canva Pro (including Canva Education and Canva for Nonprofits), Canva Teams, or Canva Enterprise. Usage limits will be introduced in the future.
</Availability>

Get the result of a design autofill job that was created using the [Create design autofill job
API](https://www.canva.dev/docs/apps/rest-apis/reference/autofills/create-design-autofill-job/).

You might need to make multiple requests to this endpoint until you get a `success` or `failed` status. For more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints).

<h3 id="getdesignautofilljob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|The design autofill job ID.|

> Example responses

> 200 Response

```json
{
  "job": {
    "id": "450a76e7-f96f-43ae-9c37-0e1ce492ac72",
    "status": "in_progress"
  }
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Calling user was not the creator of the autofill job"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "message": "Job {jobId} not found"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="getdesignautofilljob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetDesignAutofillJobResponse](#schemagetdesignautofilljobresponse)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: design:meta:read )
</aside>

<h1 id="canva-rest-apis-brandtemplate">brand_template</h1>

## listBrandTemplates

<a id="opIdlistBrandTemplates"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/brand-templates \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/brand-templates`

AVAILABILITY: To use this API, your app must act on behalf of a user that's on a Canva plan with access to brand templates (such as Canva Pro, Canva Teams, or Canva Enterprise).

Get a list of the [brand templates](https://www.canva.com/help/publish-team-template/) the user has access to.

<h3 id="listbrandtemplates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|Lets you search the brand templates available to the user using a search term or terms.|
|continuation|query|string|false|If the success response contains a continuation token, the user has access to more<br>brand templates you can list. You can use this token as a query parameter and retrieve<br>more templates from the list, for example<br>`/v1/brand-templates?continuation={continuation}`.<br>To retrieve all the brand templates available to the user, you might need to make<br>multiple requests.|
|limit|query|integer(int32)|false|The number of brand templates to return.|
|ownership|query|[OwnershipType](#schemaownershiptype)|false|Filter the list of brand templates based on the user's ownership of the brand templates.|
|sort_by|query|[SortByType](#schemasortbytype)|false|Sort the list of brand templates.|
|dataset|query|[DatasetFilter](#schemadatasetfilter)|false|Filter the list of brand templates based on the brand templates' dataset definitions.<br>Brand templates with dataset definitions are mainly used with the [Autofill APIs](https://www.canva.dev/docs/apps/rest-apis/reference/autofills/).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownership|any|
|ownership|owned|
|ownership|shared|
|sort_by|relevance|
|sort_by|modified_descending|
|sort_by|modified_ascending|
|sort_by|title_descending|
|sort_by|title_ascending|
|dataset|any|
|dataset|non_empty|

> Example responses

> 200 Response

```json
{
  "continuation": "RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN",
  "items": [
    {
      "id": "DEMzWSwy3BI",
      "title": "Advertisement Template",
      "view_url": "https://www.canva.com/design/DAE35hE8FA4/view",
      "create_url": "https://www.canva.com/design/DAE35hE8FA4/remix",
      "thumbnail": {
        "width": 595,
        "height": 335,
        "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
      },
      "created_at": 1704110400,
      "updated_at": 1719835200
    }
  ]
}
```

> 400 Response

```json
{
  "code": "bad_query_params",
  "message": "Invalid continuation: {continuation}"
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Not allowed to find metadata for brand templates"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="listbrandtemplates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListBrandTemplatesResponse](#schemalistbrandtemplatesresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: brandtemplate:meta:read )
</aside>

## publishBrandTemplate

<a id="opIdpublishBrandTemplate"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/brand-templates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "design_id": "DABCdesign123"
  }'
```

`POST /v1/brand-templates`

<Warning>

This API is currently provided as a preview. Be aware of the following:

- There might be unannounced breaking changes.
- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).
- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.

</Warning>

AVAILABILITY: To use this API, your app must act on behalf of a user that's on a Canva plan with access to brand templates (such as Canva Pro, Canva Teams, or Canva Enterprise). Additionally, the user must have one of the following [roles](https://www.canva.com/help/roles-and-permissions/): Team admin, Brand designer, Organization admin, or Organization designer.

Publishes a design as a [brand template](https://www.canva.com/help/publish-team-template/). Brand templates are design templates that can be shared across a team for consistent content creation.

This API supports two workflows:

- **Initial publish**: If the design is not linked to an existing brand template, a new brand template is created.
- **Republish**: If the design is a draft of an existing brand template (created by editing an existing template), the existing template is updated with the changes.

The API returns the published brand template immediately.

<Note>
The `thumbnail` field might be `null` immediately after publishing, as thumbnails are generated asynchronously. You can use the [Get brand template API](https://www.canva.dev/docs/apps/rest-apis/reference/brand-templates/get-brand-template/) to retrieve the thumbnail once it's ready. The brand template's `view_url` and `create_url` are available immediately.
</Note>

> Body parameter

```json
{
  "design_id": "DABCdesign123"
}
```

<h3 id="publishbrandtemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PublishBrandTemplateRequest](#schemapublishbrandtemplaterequest)|true|none|
|» design_id|body|string|true|The ID of the design to publish as a brand template. If this design is a draft of an existing brand template, that template will be updated. Otherwise, a new brand template is created.|

> Example responses

> 200 Response

```json
{
  "brand_template": {
    "id": "EABCtemplate789",
    "title": "My Brand Template",
    "view_url": "https://www.canva.com/design/EABCtemplate789/view",
    "create_url": "https://www.canva.com/design/EABCtemplate789/remix",
    "created_at": 1704110400,
    "updated_at": 1704110400
  }
}
```

> 400 Response

```json
{
  "code": "bad_request_params",
  "message": "Design ID '{designId}' is not valid"
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "User does not have permission to publish design {designId} as a brand template"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "message": "Design with id {designId} not found"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="publishbrandtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PublishBrandTemplateResponse](#schemapublishbrandtemplateresponse)|
|400|Bad Request|Bad Request - includes validation errors and other bad request errors|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: brandtemplate:content:write )
</aside>

## getBrandTemplate

<a id="opIdgetBrandTemplate"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/brand-templates/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/brand-templates/{brandTemplateId}`

AVAILABILITY: To use this API, your app must act on behalf of a user that's on a Canva plan with access to brand templates (such as Canva Pro, Canva Teams, or Canva Enterprise).

Retrieves the metadata for a brand template.

<h3 id="getbrandtemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|brandTemplateId|path|string|true|The brand template ID.|

> Example responses

> 200 Response

```json
{
  "brand_template": {
    "id": "DEMzWSwy3BI",
    "title": "Advertisement Template",
    "view_url": "https://www.canva.com/design/DAE35hE8FA4/view",
    "create_url": "https://www.canva.com/design/DAE35hE8FA4/remix",
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    },
    "created_at": 1704110400,
    "updated_at": 1719835200
  }
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Not allowed to access brand template with id '{brandTemplateId}'"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "message": "Brand template with id '{brandTemplateId}' not found"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="getbrandtemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetBrandTemplateResponse](#schemagetbrandtemplateresponse)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: brandtemplate:meta:read )
</aside>

## getBrandTemplateDataset

<a id="opIdgetBrandTemplateDataset"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/brand-templates/string/dataset \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/brand-templates/{brandTemplateId}/dataset`

AVAILABILITY: To use this API, your app must act on behalf of a user that's on a Canva plan with access to brand templates (such as Canva Pro, Canva Teams, or Canva Enterprise).

Gets the dataset definition of a brand template. If the brand
template contains autofill data fields, this API returns an object with the data field
names and the type of data they accept.

<Note>

To get the dataset definition of a design, use the
[Get design dataset API](https://www.canva.dev/docs/apps/rest-apis/reference/designs/get-design-dataset/).

</Note>

Available data field types include:

- Images (which you can autofill with an image or a video asset)
- Text
- Charts
- Sheets

You can autofill a brand template using the [Create a design autofill job
API](https://www.canva.dev/docs/apps/rest-apis/reference/autofills/create-design-autofill-job/).

<h3 id="getbrandtemplatedataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|brandTemplateId|path|string|true|The brand template ID.|

> Example responses

> 200 Response

```json
{
  "dataset": {
    "cute_pet_image_of_the_day": {
      "type": "image"
    },
    "cute_pet_witty_pet_says": {
      "type": "text"
    },
    "cute_pet_sales_chart": {
      "type": "chart"
    }
  }
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "User does not have permission to access brand template with id '{brandTemplateId}'"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "message": "Brand template with id '{brandTemplateId}' not found"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="getbrandtemplatedataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetBrandTemplateDatasetResponse](#schemagetbrandtemplatedatasetresponse)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: brandtemplate:content:read )
</aside>

<h1 id="canva-rest-apis-comment">comment</h1>

## createComment

<a id="opIdcreateComment"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/comments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attached_to": {
      "design_id": "DAFVztcvd9z",
      "type": "design"
    },
    "message": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
    "assignee_id": "oUnPjZ2k2yuhftbWF7873o"
  }'
```

`POST /v1/comments`

<aside class="warning">
This operation is deprecated
</aside>

<Warning>

This preview API is deprecated. You should use the [Create thread](https://www.canva.dev/docs/apps/rest-apis/reference/comments/create-thread/) API instead.

</Warning>

Create a new top-level comment on a design.
For information on comments and how they're used in the Canva UI, see the
[Canva Help Center](https://www.canva.com/help/comments/). A design can have a maximum
of 1000 comments.

> Body parameter

```json
{
  "attached_to": {
    "design_id": "DAFVztcvd9z",
    "type": "design"
  },
  "message": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
  "assignee_id": "oUnPjZ2k2yuhftbWF7873o"
}
```

<h3 id="createcomment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateCommentRequest](#schemacreatecommentrequest)|true|none|
|» attached_to|body|[CommentObjectInput](#schemacommentobjectinput)|true|An object containing identifying information for the design or other object you want to<br>attach the comment to.|
|» message|body|string|true|The comment message. This is the comment body shown in the Canva UI.<br><br>You can also mention users in your message by specifying their User ID and Team ID<br>using the format `[user_id:team_id]`. If the `assignee_id` parameter is specified, you<br>must mention the assignee in the message.|
|» assignee_id|body|string|false|Lets you assign the comment to a Canva user using their User ID. You _must_ mention the<br>assigned user in the `message`.|

> Example responses

> 200 Response

```json
{
  "comment": {
    "type": "parent",
    "id": "KeAbiEAjZEj",
    "attached_to": {
      "design_id": "DAFVztcvd9z",
      "type": "design"
    },
    "message": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
    "author": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    },
    "created_at": 1692928800,
    "updated_at": 1692928900,
    "mentions": {
      "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
        "user_id": "oUnPjZ2k2yuhftbWF7873o",
        "team_id": "oBpVhLW22VrqtwKgaayRbP",
        "display_name": "John Doe"
      }
    },
    "assignee": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    },
    "resolver": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    }
  }
}
```

> 400 Response

```json
{
  "code": "bad_request_body",
  "message": "Assignee must be mentioned in comment content"
}
```

> 403 Response

```json
{
  "code": "too_many_comments",
  "message": "Design already has the maximum number of allowed comments"
}
```

> 404 Response

```json
{
  "code": "design_not_found",
  "message": "Design not found"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="createcomment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CreateCommentResponse](#schemacreatecommentresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: comment:write )
</aside>

## listReplies

<a id="opIdlistReplies"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/designs/string/comments/KeAbiEAjZEj/replies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/designs/{designId}/comments/{threadId}/replies`

<Warning>
This API is currently provided as a preview. Be aware of the following:
- There might be unannounced breaking changes.
- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).
- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.
</Warning>

Retrieves a list of replies for a comment or suggestion thread on a design.

For information on comments and how they're used in the Canva UI, see the
[Canva Help Center](https://www.canva.com/help/comments/).

<h3 id="listreplies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|designId|path|string|true|The design ID.|
|threadId|path|string|true|The ID of the thread.|
|limit|query|integer(int32)|false|none|
|continuation|query|string|false|If the success response contains a continuation token, the list contains more items you can list. You can use this token as a query parameter and retrieve more items from the list, for example `?continuation={continuation}`.<br><br>To retrieve all items, you might need to make multiple requests.|

> Example responses

> 200 Response

```json
{
  "continuation": "RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN",
  "items": [
    {
      "id": "KeAZEAjijEb",
      "design_id": "DAFVztcvd9z",
      "thread_id": "KeAbiEAjZEj",
      "author": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      },
      "content": {
        "plaintext": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
        "markdown": "*_Great work_* [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!"
      },
      "mentions": {
        "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
          "tag": "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP",
          "user": {
            "user_id": "oUnPjZ2k2yuhftbWF7873o",
            "team_id": "oBpVhLW22VrqtwKgaayRbP",
            "display_name": "John Doe"
          }
        }
      },
      "created_at": 1692929800,
      "updated_at": 1692929900
    }
  ]
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Not allowed to fetch replies"
}
```

> 404 Response

```json
{
  "code": "design_or_thread_not_found",
  "message": "Design or comment not found"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="listreplies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListRepliesResponse](#schemalistrepliesresponse)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: comment:read )
</aside>

## createReply

<a id="opIdcreateReply"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/designs/string/comments/KeAbiEAjZEj/replies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "message_plaintext": "Thanks!"
  }'
```

`POST /v1/designs/{designId}/comments/{threadId}/replies`

<Warning>

This API is currently provided as a preview. Be aware of the following:

- There might be unannounced breaking changes.
- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).
- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.

</Warning>

Creates a reply to a comment or suggestion thread on a design.
To reply to an existing thread, you must provide the ID of the thread
which is returned when a thread is created, or from the `thread_id` value
of an existing reply in the thread. Each thread can
have a maximum of 100 replies created for it.

For information on comments and how they're used in the Canva UI, see the
[Canva Help Center](https://www.canva.com/help/comments/).

> Body parameter

```json
{
  "message_plaintext": "Thanks!"
}
```

<h3 id="createreply-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|designId|path|string|true|The design ID.|
|threadId|path|string|true|The ID of the thread.|
|body|body|[CreateReplyV2Request](#schemacreatereplyv2request)|true|none|
|» message_plaintext|body|string|true|The comment message of the reply in plaintext. This is the reply comment shown in the Canva UI.<br><br>You can also mention users in your message by specifying their User ID and Team ID<br>using the format `[user_id:team_id]`.|

> Example responses

> 200 Response

```json
{
  "reply": {
    "id": "KeAZEAjijEb",
    "design_id": "DAFVztcvd9z",
    "thread_id": "KeAbiEAjZEj",
    "author": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    },
    "content": {
      "plaintext": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
      "markdown": "*_Great work_* [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!"
    },
    "mentions": {
      "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
        "tag": "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP",
        "user": {
          "user_id": "oUnPjZ2k2yuhftbWF7873o",
          "team_id": "oBpVhLW22VrqtwKgaayRbP",
          "display_name": "John Doe"
        }
      }
    },
    "created_at": 1692929800,
    "updated_at": 1692929900
  }
}
```

> 400 Response

```json
{
  "code": "message_too_long",
  "message": "Message is too long"
}
```

> 403 Response

```json
{
  "code": "too_many_replies",
  "message": "This comment thread already has the maximum number of allowed replies"
}
```

> 404 Response

```json
{
  "code": "design_not_found",
  "message": "Design or comment not found"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="createreply-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CreateReplyV2Response](#schemacreatereplyv2response)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: comment:write )
</aside>

## getThread

<a id="opIdgetThread"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/designs/string/comments/KeAbiEAjZEj \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/designs/{designId}/comments/{threadId}`

<Warning>

This API is currently provided as a preview. Be aware of the following:

- There might be unannounced breaking changes.
- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).
- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.

</Warning>

Gets a comment or suggestion thread on a design.
To retrieve a reply to a comment thread, use the [Get reply](https://www.canva.dev/docs/apps/rest-apis/reference/comments/get-reply/) API.
For information on comments and how they're used in the Canva UI, see the
[Canva Help Center](https://www.canva.com/help/comments/).

<h3 id="getthread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|designId|path|string|true|The design ID.|
|threadId|path|string|true|The ID of the thread.|

> Example responses

> 200 Response

```json
{
  "comment": {
    "type": "parent",
    "id": "KeAbiEAjZEj",
    "attached_to": {
      "design_id": "DAFVztcvd9z",
      "type": "design"
    },
    "message": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
    "author": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    },
    "created_at": 1692928800,
    "updated_at": 1692928900,
    "mentions": {
      "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
        "user_id": "oUnPjZ2k2yuhftbWF7873o",
        "team_id": "oBpVhLW22VrqtwKgaayRbP",
        "display_name": "John Doe"
      }
    },
    "assignee": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    },
    "resolver": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    }
  },
  "thread": {
    "id": "KeAbiEAjZEj",
    "design_id": "DAFVztcvd9z",
    "thread_type": {
      "type": "comment",
      "content": {
        "plaintext": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
        "markdown": "*_Great work_* [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!"
      },
      "mentions": {
        "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
          "tag": "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP",
          "user": {
            "user_id": "oUnPjZ2k2yuhftbWF7873o",
            "team_id": "oBpVhLW22VrqtwKgaayRbP",
            "display_name": "John Doe"
          }
        }
      },
      "assignee": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      },
      "resolver": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      }
    },
    "author": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    },
    "created_at": 1692928800,
    "updated_at": 1692928900
  }
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Not allowed to fetch this comment"
}
```

> 404 Response

```json
{
  "code": "thread_not_found",
  "message": "No thread with ID {threadId} found"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="getthread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetThreadResponse](#schemagetthreadresponse)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: comment:read )
</aside>

## getReply

<a id="opIdgetReply"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/designs/string/comments/KeAbiEAjZEj/replies/KeAZEAjijEb \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/designs/{designId}/comments/{threadId}/replies/{replyId}`

<Warning>

This API is currently provided as a preview. Be aware of the following:

- There might be unannounced breaking changes.
- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).
- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.

</Warning>

Gets a reply to a comment or suggestion thread on a design.
For information on comments and how they're used in the Canva UI, see the
[Canva Help Center](https://www.canva.com/help/comments/).

<h3 id="getreply-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|designId|path|string|true|The design ID.|
|threadId|path|string|true|The ID of the thread.|
|replyId|path|string|true|The ID of the reply.|

> Example responses

> 200 Response

```json
{
  "reply": {
    "id": "KeAZEAjijEb",
    "design_id": "DAFVztcvd9z",
    "thread_id": "KeAbiEAjZEj",
    "author": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    },
    "content": {
      "plaintext": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
      "markdown": "*_Great work_* [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!"
    },
    "mentions": {
      "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
        "tag": "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP",
        "user": {
          "user_id": "oUnPjZ2k2yuhftbWF7873o",
          "team_id": "oBpVhLW22VrqtwKgaayRbP",
          "display_name": "John Doe"
        }
      }
    },
    "created_at": 1692929800,
    "updated_at": 1692929900
  }
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Not allowed to fetch this reply"
}
```

> 404 Response

```json
{
  "code": "reply_not_found",
  "message": "Reply with ID {replyId} not found"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="getreply-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetReplyResponse](#schemagetreplyresponse)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: comment:read )
</aside>

## createThread

<a id="opIdcreateThread"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/designs/string/comments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "message_plaintext": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
    "assignee_id": "oUnPjZ2k2yuhftbWF7873o"
  }'
```

`POST /v1/designs/{designId}/comments`

<Warning>
This API is currently provided as a preview. Be aware of the following:
- There might be unannounced breaking changes.
- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).
- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.
</Warning>

Creates a new comment thread on a design.
For information on comments and how they're used in the Canva UI, see the
[Canva Help Center](https://www.canva.com/help/comments/).

> Body parameter

```json
{
  "message_plaintext": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
  "assignee_id": "oUnPjZ2k2yuhftbWF7873o"
}
```

<h3 id="createthread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|designId|path|string|true|The design ID.|
|body|body|[CreateThreadRequest](#schemacreatethreadrequest)|true|none|
|» message_plaintext|body|string|true|The comment message in plaintext. This is the comment body shown in the Canva UI.<br><br>You can also mention users in your message by specifying their User ID and Team ID<br>using the format `[user_id:team_id]`. If the `assignee_id` parameter is specified, you<br>must mention the assignee in the message.|
|» assignee_id|body|string|false|Lets you assign the comment to a Canva user using their User ID. You _must_ mention the<br>assigned user in the `message`.|

> Example responses

> 200 Response

```json
{
  "thread": {
    "id": "KeAbiEAjZEj",
    "design_id": "DAFVztcvd9z",
    "thread_type": {
      "type": "comment",
      "content": {
        "plaintext": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
        "markdown": "*_Great work_* [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!"
      },
      "mentions": {
        "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
          "tag": "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP",
          "user": {
            "user_id": "oUnPjZ2k2yuhftbWF7873o",
            "team_id": "oBpVhLW22VrqtwKgaayRbP",
            "display_name": "John Doe"
          }
        }
      },
      "assignee": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      },
      "resolver": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      }
    },
    "author": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    },
    "created_at": 1692928800,
    "updated_at": 1692928900
  }
}
```

> 400 Response

```json
{
  "code": "bad_request_body",
  "message": "Assignee must be mentioned in comment content"
}
```

> 403 Response

```json
{
  "code": "too_many_comments",
  "message": "Design already has the maximum number of allowed comments"
}
```

> 404 Response

```json
{
  "code": "design_not_found",
  "message": "Design not found"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="createthread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CreateThreadResponse](#schemacreatethreadresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: comment:write )
</aside>

<h1 id="canva-rest-apis-connect">connect</h1>

## getSigningPublicKeys

<a id="opIdgetSigningPublicKeys"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/connect/keys \
  -H 'Accept: application/json'
```

`GET /v1/connect/keys`

<Warning>

This API is currently provided as a preview. Be aware of the following:

- There might be unannounced breaking changes.
- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).
- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.

</Warning>

The Keys API (`connect/keys`) is a security measure you can use to verify the authenticity
of webhooks you receive from the Canva REST APIs. The Keys API returns a
[JSON Web Key (JWK)](https://www.rfc-editor.org/rfc/rfc7517#section-2), which you can use to
decrypt the webhook signature and verify it came from Canva and not a potentially malicious
actor. This helps to protect your systems from
[Replay attacks](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/).

The keys returned by the Keys API can rotate. We recommend you cache the keys you receive
from this API where possible, and only access this API when you receive a webhook signed
with an unrecognized key. This allows you to verify webhooks quicker than accessing this API
every time you receive a webhook.

> Example responses

> 200 Response

```json
{
  "keys": [
    {
      "kid": "a418dc7d-ecc5-5c4b-85ce-e1104a8addbe",
      "kty": "OKP",
      "crv": "Ed25519",
      "x": "aIQtqd0nDfB-ug0DrzZbwTum-1ITdXvKxGFak_1VB2j"
    },
    {
      "kid": "c8de5bec1-1b88-4ddaae04acc-ce415-5d7",
      "kty": "OKP",
      "crv": "Ed25519",
      "x": "m2d1FT-gfBXxIzKwdQVTra0D-aBq_ubZ1jI0GuvkDtn"
    }
  ]
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="getsigningpublickeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetSigningPublicKeysResponse](#schemagetsigningpublickeysresponse)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="canva-rest-apis-design">design</h1>

## listDesigns

<a id="opIdlistDesigns"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/designs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/designs`

Lists metadata for all the designs in a Canva user's
[projects](https://www.canva.com/help/find-designs-and-folders/). You can also:

- Use search terms to filter the listed designs.
- Show designs either created by, or shared with the user.
- Sort the results.

<h3 id="listdesigns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|Lets you search the user's designs, and designs shared with the user, using a search term or terms.|
|continuation|query|string|false|If the success response contains a continuation token, the list contains more designs<br>you can list. You can use this token as a query parameter and retrieve more<br>designs from the list, for example<br>`/v1/designs?continuation={continuation}`.<br><br>To retrieve all of a user's designs, you might need to make multiple requests.|
|ownership|query|[OwnershipType](#schemaownershiptype)|false|Filter the list of designs based on the user's ownership of the designs.|
|sort_by|query|[SortByType](#schemasortbytype)|false|Sort the list of designs.|
|limit|query|integer(int32)|false|The number of designs to return.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownership|any|
|ownership|owned|
|ownership|shared|
|sort_by|relevance|
|sort_by|modified_descending|
|sort_by|modified_ascending|
|sort_by|title_descending|
|sort_by|title_ascending|

> Example responses

> 200 Response

```json
{
  "continuation": "RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN",
  "items": [
    {
      "id": "DAFVztcvd9z",
      "title": "My summer holiday",
      "owner": {
        "user_id": "auDAbliZ2rQNNOsUl5OLu",
        "team_id": "Oi2RJILTrKk0KRhRUZozX"
      },
      "thumbnail": {
        "width": 595,
        "height": 335,
        "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
      },
      "urls": {
        "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
        "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
      },
      "created_at": 1377396000,
      "updated_at": 1692928800,
      "page_count": 5,
      "design_types": [
        "presentation"
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "code": "bad_query_params",
  "message": "Invalid continuation: {continuation}"
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Not allowed to access design list"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="listdesigns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetListDesignResponse](#schemagetlistdesignresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: design:meta:read )
</aside>

## createDesign

<a id="opIdcreateDesign"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/designs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "type": "type_and_asset",
    "design_type": {
      "type": "preset",
      "name": "doc"
    },
    "asset_id": "Msd59349ff",
    "title": "My Holiday Presentation"
  }'
```

`POST /v1/designs`

Creates a new Canva design. To create a new design, you can:

- Use a preset design type.
- Set height and width dimensions for a custom design.

  NOTE: Custom designs can have a maximum area of 25,000,000 pixels squared (for example, 5000 × 5000 pixels). Each dimension can be between 40 and 8000 pixels, but the total area must stay within this limit.
- Create a copy of an existing design (currently a [preview feature](https://www.canva.dev/docs/apps/rest-apis/#preview-apis)).
- Create a new design from a brand template (currently a [preview feature](https://www.canva.dev/docs/apps/rest-apis/#preview-apis)).

For preset and custom designs, you can also provide the `asset_id` of an asset in the user's [projects](https://www.canva.com/help/find-designs-and-folders/) to add to the new design. Currently, this only supports image assets. To list the assets in a folder in the user's projects, use the [List folder items API](https://www.canva.dev/docs/apps/rest-apis/reference/folders/list-folder-items/).

An asset provided this way is placed in the design as a single flat image, which the user can move, resize, or replace, but not edit as separate elements. If you want the elements of an image to become separate editable layers in the design, use the [Create image-to-design import job API](https://www.canva.dev/docs/apps/rest-apis/reference/design-imports/create-image-to-design-import-job/) instead.

NOTE: Blank designs created with this API are automatically deleted if they're not edited within 7 days. These blank designs bypass the user's Canva trash and are permanently deleted.

> Body parameter

```json
{
  "type": "type_and_asset",
  "design_type": {
    "type": "preset",
    "name": "doc"
  },
  "asset_id": "Msd59349ff",
  "title": "My Holiday Presentation"
}
```

<h3 id="createdesign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateDesignRequest](#schemacreatedesignrequest)|false|none|
|» *oneOf*|body|[DesignTypeCreateDesignRequest](#schemadesigntypecreatedesignrequest)|false|Create a design by specifying the design type and/or an asset.<br>At least one of `design_type` or `asset_id` must be defined.|
|» *oneOf*|body|[DesignCreateDesignRequest](#schemadesigncreatedesignrequest)|false|<Warning><br><br>Creating a copy of an existing design is currently provided as a preview. Be aware of the following:<br><br>- There might be unannounced breaking changes.<br>- Any breaking changes to preview features won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).<br>- Public apps that use preview features will not pass the review process, and can't be made available to all Canva users.<br><br></Warning><br><br>Body parameters for creating a copy of an existing design.|
|» *oneOf*|body|[BrandTemplateCreateDesignRequest](#schemabrandtemplatecreatedesignrequest)|false|<Warning><br><br>Creating a copy from a brand template is currently provided as a preview. Be aware of the following:<br><br>- There might be unannounced breaking changes.<br>- Any breaking changes to preview features won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).<br>- Public apps that use preview features will not pass the review process, and can't be made available to all Canva users.<br><br></Warning><br><br>Body parameters for creating a copy from a brand template.|

> Example responses

> 200 Response

```json
{
  "design": {
    "id": "DAFVztcvd9z",
    "title": "My summer holiday",
    "owner": {
      "user_id": "auDAbliZ2rQNNOsUl5OLu",
      "team_id": "Oi2RJILTrKk0KRhRUZozX"
    },
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    },
    "urls": {
      "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
      "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
    },
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "page_count": 5,
    "design_types": [
      "presentation"
    ]
  }
}
```

> 400 Response

```json
{
  "code": "bad_request_body",
  "message": "Design type '{name}' is invalid."
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Not allowed to access this asset"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "message": "Design with id '{designId}' not found"
}
```

> 429 Response

```json
{
  "code": "too_many_requests",
  "message": "You have reached the design creation throttling threshold."
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="createdesign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CreateDesignResponse](#schemacreatedesignresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: design:content:write )
</aside>

## getDesign

<a id="opIdgetDesign"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/designs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/designs/{designId}`

Gets the metadata for a design. This includes owner information, URLs for editing and viewing, and thumbnail information.

<h3 id="getdesign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|designId|path|string|true|The design ID.|

> Example responses

> 200 Response

```json
{
  "design": {
    "id": "DAFVztcvd9z",
    "title": "My summer holiday",
    "owner": {
      "user_id": "auDAbliZ2rQNNOsUl5OLu",
      "team_id": "Oi2RJILTrKk0KRhRUZozX"
    },
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    },
    "urls": {
      "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
      "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
    },
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "page_count": 5,
    "design_types": [
      "presentation"
    ]
  }
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Not allowed to access design"
}
```

> 404 Response

```json
{
  "code": "design_not_found",
  "message": "Design with id '{designId}' not found"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="getdesign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetDesignResponse](#schemagetdesignresponse)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: design:meta:read )
</aside>

## getDesignPages

<a id="opIdgetDesignPages"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/designs/string/pages \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/designs/{designId}/pages`

<Warning>

This API is currently provided as a preview. Be aware of the following:

- There might be unannounced breaking changes.
- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).
- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.

</Warning>

Lists metadata for pages in a design, such as page-specific thumbnails.

For the specified design, you can provide `offset` and `limit` values to specify the range of pages to return.

NOTE: Some design types don't have pages (for example, Canva docs).

<h3 id="getdesignpages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|designId|path|string|true|The design ID.|
|offset|query|integer(int32)|false|The page index to start the range of pages to return.<br><br>Pages are indexed using one-based numbering, so the first page in a design has the index value `1`.<br>|
|limit|query|integer(int32)|false|The number of pages to return, starting at the page index specified using the `offset` parameter.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "PB2NFQ9W78kLDFCK",
      "index": 1,
      "page_number": 1,
      "dimensions": {
        "width": 595,
        "height": 1295
      },
      "thumbnail": {
        "width": 595,
        "height": 335,
        "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
      },
      "design_type": "presentation"
    }
  ]
}
```

> 400 Response

```json
{
  "code": "page_not_found",
  "message": "Design {designId} has no pages because it's a Canva doc."
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Not allowed to access design"
}
```

> 404 Response

```json
{
  "code": "design_not_found",
  "message": "Design with id '{designId}' not found"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="getdesignpages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetDesignPagesResponse](#schemagetdesignpagesresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: design:content:read )
</aside>

## getDesignExportFormats

<a id="opIdgetDesignExportFormats"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/designs/string/export-formats \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/designs/{designId}/export-formats`

Lists the available file formats for [exporting a design](https://www.canva.dev/docs/apps/rest-apis/reference/exports/create-design-export-job/).

<Note>
The available export formats depend on the design type and the types of pages in the design.
Each format includes the page numbers that support it. If a format is supported by every page in the design, its `page_numbers` are omitted.
</Note>

<h3 id="getdesignexportformats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|designId|path|string|true|The design ID.|

> Example responses

> 200 Response

```json
{
  "formats": {
    "pdf": {
      "page_numbers": [
        1,
        2,
        3
      ]
    },
    "jpg": {
      "page_numbers": [
        1,
        2,
        3
      ]
    },
    "png": {
      "page_numbers": [
        1,
        2,
        3
      ]
    },
    "svg": {
      "page_numbers": [
        1,
        2,
        3
      ]
    },
    "pptx": {
      "page_numbers": [
        1,
        2,
        3
      ]
    },
    "gif": {
      "page_numbers": [
        1,
        2,
        3
      ]
    },
    "mp4": {
      "page_numbers": [
        1,
        2,
        3
      ]
    },
    "html_bundle": {
      "page_numbers": [
        1,
        2,
        3
      ]
    },
    "html_standalone": {
      "page_numbers": [
        1,
        2,
        3
      ]
    },
    "csv": {
      "page_numbers": [
        1,
        2,
        3
      ]
    }
  }
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Not allowed to access design with id {designId}"
}
```

> 404 Response

```json
{
  "code": "design_not_found",
  "message": "Design with id '{designId}' not found"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="getdesignexportformats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetDesignExportFormatsResponse](#schemagetdesignexportformatsresponse)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: design:content:read )
</aside>

## getDesignDataset

<a id="opIdgetDesignDataset"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/designs/string/dataset \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/designs/{designId}/dataset`

Gets the dataset definition of a design. If the design contains autofill data fields, this API
returns an object with the data field names and the type of data they accept.

<Note>

To get the dataset definition of a brand template, use the
[Get brand template dataset API](https://www.canva.dev/docs/apps/rest-apis/reference/brand-templates/get-brand-template-dataset/).

</Note>

Available data field types include:

- Images (which you can autofill with an image or a video asset)
- Text
- Charts
- Sheets

Use the returned field names and types to build the `data` payload for the
[Create a design autofill job API](https://www.canva.dev/docs/apps/rest-apis/reference/autofills/create-design-autofill-job/)
with `type: create_from_design`.

<h3 id="getdesigndataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|designId|path|string|true|The design ID.|

> Example responses

> 200 Response

```json
{
  "dataset": {
    "cute_pet_image_of_the_day": {
      "type": "image"
    },
    "cute_pet_witty_pet_says": {
      "type": "text"
    },
    "cute_pet_sales_chart": {
      "type": "chart"
    }
  }
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Not allowed to access design with id '{designId}'"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "message": "Design with id '{designId}' not found"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="getdesigndataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetDesignDatasetResponse](#schemagetdesigndatasetresponse)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: design:content:read )
</aside>

## createPrintPartnerDesign

<a id="opIdcreatePrintPartnerDesign"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/print-partner/designs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "design_source": {
      "type": "dimensions",
      "dimensions": {
        "width": 595,
        "height": 1295,
        "units": "in"
      },
      "product_type": "tshirt"
    },
    "title": "My Holiday Presentation",
    "bleed": 3000,
    "min_pages": 1,
    "max_pages": 1
  }'
```

`POST /v1/print-partner/designs`

<Warning>

This API is currently provided as a preview. Be aware of the following:

- There might be unannounced breaking changes.
- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).
- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.

</Warning>

AVAILABILITY: This API is only available to Print Partners.

Creates a new Canva design using a Print Partner product ID.

Print partner proofing information (such as bleed and page constraints) can optionally be provided in the request. The design URLs that are returned include this information, which Canva applies in the editor when opening the design.

NOTE: Blank designs created with this API are automatically deleted if they're not edited within 7 days. These blank designs bypass the user's Canva trash and are permanently deleted.

> Body parameter

```json
{
  "design_source": {
    "type": "dimensions",
    "dimensions": {
      "width": 595,
      "height": 1295,
      "units": "in"
    },
    "product_type": "tshirt"
  },
  "title": "My Holiday Presentation",
  "bleed": 3000,
  "min_pages": 1,
  "max_pages": 1
}
```

<h3 id="createprintpartnerdesign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreatePrintPartnerDesignRequest](#schemacreateprintpartnerdesignrequest)|false|none|
|» design_source|body|[PrintPartnerDesignSource](#schemaprintpartnerdesignsource)|true|The desired source for the design creation.|
|» title|body|string|false|The name of the design.|
|» bleed|body|integer(int32)|false|Bleed in microns to apply around the design in the editor. Bleed is the area<br>outside the trim line used to avoid white edges after cutting. Use 0 for no bleed. If bleed is not<br>specified, a default of 3000 microns is used.|
|» min_pages|body|integer(int32)|false|Minimum number of pages the design must have in the editor. The user cannot<br>reduce the page count below this value. If both min_pages and max_pages are<br>provided, min_pages must be less than or equal to max_pages.|
|» max_pages|body|integer(int32)|false|Maximum number of pages the design can have in the editor. The user cannot<br>add pages beyond this value. If both min_pages and max_pages are provided,<br>min_pages must be less than or equal to max_pages.|

> Example responses

> 200 Response

```json
{
  "design": {
    "id": "DAFVztcvd9z",
    "title": "My summer holiday",
    "owner": {
      "user_id": "auDAbliZ2rQNNOsUl5OLu",
      "team_id": "Oi2RJILTrKk0KRhRUZozX"
    },
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    },
    "urls": {
      "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
      "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
    },
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "page_count": 5,
    "design_types": [
      "presentation"
    ]
  }
}
```

> 400 Response

```json
{
  "code": "invalid_field",
  "message": "The specified dimensions for the design are invalid."
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Client does not have permission to create a Print Partner design"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "message": "Product size not found for product {productId}"
}
```

> 429 Response

```json
{
  "code": "too_many_requests",
  "message": "You have reached the design creation throttling threshold."
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="createprintpartnerdesign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CreatePrintPartnerDesignResponse](#schemacreateprintpartnerdesignresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: design:content:write )
</aside>

## getPrintPartnerDesign

<a id="opIdgetPrintPartnerDesign"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/print-partner/designs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/print-partner/designs/{designId}`

<Warning>

This API is currently provided as a preview. Be aware of the following:

- There might be unannounced breaking changes.
- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).
- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.

</Warning>

AVAILABILITY: This API is only available to Print Partners.

Gets the metadata for a design. This includes owner information, URLs for editing and viewing, and thumbnail information.

Print partner proofing information (such as bleed and page constraints) isn't stored on Canva, so you can optionally provide it in the request. The design URLs that are returned include this information, which Canva applies in the editor when opening the design.

<h3 id="getprintpartnerdesign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|designId|path|string|true|The design ID.|
|bleed|query|integer(int32)|false|Bleed in microns to apply around the design in the editor. Bleed is the area<br>outside the trim line used to avoid white edges after cutting. Use 0 for no bleed. If bleed is not<br>specified, a default of 3000 microns is used.|
|min_pages|query|integer(int32)|false|Minimum number of pages the design must have in the editor. The user cannot<br>reduce the page count below this value. If both min_pages and max_pages are<br>provided, min_pages must be less than or equal to max_pages.|
|max_pages|query|integer(int32)|false|Maximum number of pages the design can have in the editor. The user cannot<br>add pages beyond this value. If both min_pages and max_pages are provided,<br>min_pages must be less than or equal to max_pages.|

> Example responses

> 200 Response

```json
{
  "design": {
    "id": "DAFVztcvd9z",
    "title": "My summer holiday",
    "owner": {
      "user_id": "auDAbliZ2rQNNOsUl5OLu",
      "team_id": "Oi2RJILTrKk0KRhRUZozX"
    },
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    },
    "urls": {
      "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
      "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
    },
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "page_count": 5,
    "design_types": [
      "presentation"
    ]
  }
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Client does not have permission to get a Print Partner design"
}
```

> 404 Response

```json
{
  "code": "design_not_found",
  "message": "Design with id '{designId}' not found"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="getprintpartnerdesign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetPrintPartnerDesignResponse](#schemagetprintpartnerdesignresponse)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: design:meta:read )
</aside>

<h1 id="canva-rest-apis-designgeneration">design_generation</h1>

## createDesignGenerationJobV2

<a id="opIdcreateDesignGenerationJobV2"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/generations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "brief": "A 3-slide pitch deck for a solar-panel startup with an energetic, modern, blue-and-white visual direction.",
    "design_type": {
      "type": "preset",
      "name": "doc"
    },
    "outline": {
      "sections": [
        {
          "title": "The problem",
          "description": "Rooftop solar installations still take more than six weeks to quote.",
          "points": [
            "string"
          ]
        }
      ]
    }
  }'
```

`POST /v1/generations`

<Warning>

This API is currently provided as a preview. Be aware of the following:

- There might be unannounced breaking changes.
- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).
- Public integrations that use preview APIs will not pass the review process, and can't be made available to all Canva users.

</Warning>

Starts a new [asynchronous job](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints) to generate a Canva design from a text brief. A successful job includes metadata for the generated design, which is saved to the user's Canva account.

You can generate a document or presentation. For presentations, you can also provide an outline of the slides to generate.

Requires the `design_generation` capability. You can check whether the user has this capability using the [Get user capabilities API](https://www.canva.dev/docs/apps/rest-apis/reference/users/get-user-capabilities/).

Starting a job consumes the user's [AI credit allowance](https://www.canva.com/help/ai-access/). If the user has reached their AI allowance limit, the request returns a `429` error with the `credit_quota_exceeded` code. Polling for the result of a job doesn't consume any of the allowance.

<Note>

For more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints). You can check the status and get the results of jobs created with this API using the [Get design generation job API](https://www.canva.dev/docs/apps/rest-apis/reference/generations/get-design-generation-job/).

</Note>

> Body parameter

```json
{
  "brief": "A 3-slide pitch deck for a solar-panel startup with an energetic, modern, blue-and-white visual direction.",
  "design_type": {
    "type": "preset",
    "name": "doc"
  },
  "outline": {
    "sections": [
      {
        "title": "The problem",
        "description": "Rooftop solar installations still take more than six weeks to quote.",
        "points": [
          "string"
        ]
      }
    ]
  }
}
```

<h3 id="createdesigngenerationjobv2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateDesignGenerationJobRequestV2](#schemacreatedesigngenerationjobrequestv2)|true|none|
|» brief|body|string|true|A description of the design to generate, including its subject, purpose,<br>required wording, tone, and visual direction.|
|» design_type|body|object|true|The preset Canva design type to generate. Supports `doc` and `presentation`.|
|» » type|body|[DesignGenerationDesignTypeV2](#schemadesigngenerationdesigntypev2)|true|The kind of design type to generate.|
|» » name|body|[DesignGenerationDesignTypeNameV2](#schemadesigngenerationdesigntypenamev2)|true|The name of the design type to generate.|
|» outline|body|object|false|The slide structure to follow. This property is supported only when<br>`design_type.name` is `presentation`.|
|» » sections|body|[[DesignGenerationOutlineSectionV2](#schemadesigngenerationoutlinesectionv2)]|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » type|preset|
|» » name|doc|
|» » name|presentation|

> Example responses

> 200 Response

```json
{
  "job": {
    "id": "f81b26fd-a33d-4c2d-9e8c-4a7aca798b17",
    "status": "in_progress"
  },
  "quota_usage": {
    "used_percentage": 25,
    "resets_at": 1789257600,
    "using_bonus_credits": false
  }
}
```

> 400 Response

```json
{
  "code": "invalid_field",
  "message": "The presentation outline can only be used with the presentation design type."
}
```

> 401 Response

```json
{
  "code": "invalid_client",
  "message": "Client {clientId} not available"
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Design generation isn't available for this user."
}
```

> 404 Response

```json
{
  "code": "not_found",
  "message": "The specified attachment wasn't found."
}
```

> 429 Response

```json
{
  "code": "credit_quota_exceeded",
  "message": "User has exceeded their credit quota",
  "quota_usage": {
    "used_percentage": 100,
    "resets_at": 1735689600,
    "using_bonus_credits": false,
    "upgrade_url": "https://www.canva.com/upgrade",
    "is_admin": false,
    "generation_pending": false
  }
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="createdesigngenerationjobv2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CreateDesignGenerationJobResponseV2](#schemacreatedesigngenerationjobresponsev2)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|429|Too Many Requests|Credit Quota Exceeded|[CreditQuotaError](#schemacreditquotaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: design:content:write )
</aside>

## getDesignGenerationJobV2

<a id="opIdgetDesignGenerationJobV2"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/generations/f81b26fd-a33d-4c2d-9e8c-4a7aca798b17 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/generations/{jobId}`

<Warning>

This API is currently provided as a preview. Be aware of the following:

- There might be unannounced breaking changes.
- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).
- Public integrations that use preview APIs will not pass the review process, and can't be made available to all Canva users.

</Warning>

Gets the status and result of a design generation job created using the [Create design generation job API](https://www.canva.dev/docs/apps/rest-apis/reference/generations/create-design-generation-job/).

You might need to make multiple requests until the job has a `success` or `failed` status. For more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints).

Only the user and integration that created the job can retrieve it, and the user must be in the same team. Jobs expire 24 hours after creation.

Polling doesn't consume the user's [AI credit allowance](https://www.canva.com/help/ai-access/). Reaching the AI allowance limit after job creation doesn't prevent retrieving the result.

Requires the `design_generation` capability.

<h3 id="getdesigngenerationjobv2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|The public design generation job ID.|

> Example responses

> 200 Response

```json
{
  "job": {
    "id": "f81b26fd-a33d-4c2d-9e8c-4a7aca798b17",
    "status": "in_progress"
  }
}
```

> 400 Response

```json
{
  "code": "invalid_field",
  "message": "The design generation job ID is invalid."
}
```

> 401 Response

```json
{
  "code": "invalid_client",
  "message": "Client {clientId} not available"
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Design generation isn't available for this user."
}
```

> 404 Response

```json
{
  "code": "not_found",
  "message": "The design generation job wasn't found."
}
```

> 429 Response

```json
{
  "code": "too_many_requests",
  "message": "Too many requests to {operation}"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="getdesigngenerationjobv2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetDesignGenerationJobResponseV2](#schemagetdesigngenerationjobresponsev2)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: design:content:write )
</aside>

<h1 id="canva-rest-apis-designimport">design_import</h1>

## createDesignImportJob

<a id="opIdcreateDesignImportJob"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/imports \
  -X POST \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Import-Metadata: title_base64,TXkgQXdlc29tZSBEZXNpZ24g8J+YjQ==,mime_type,application/pdf' \
  --data-binary '@/path/to/file'
```

`POST /v1/imports`

Starts a new [asynchronous job](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints) to import an external file as a new design in Canva.

The request format for this endpoint has an `application/octet-stream` body of bytes,
and the information about the import is provided using an `Import-Metadata` header.

Supported file types for imports are listed in [Design imports overview](https://www.canva.dev/docs/apps/rest-apis/reference/design-imports/#supported-file-types).

<Note>

For more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints). You can check the status and get the results of design import jobs created with this API using the [Get design import job API](https://www.canva.dev/docs/apps/rest-apis/reference/design-imports/get-design-import-job/).

</Note>

<h3 id="createdesignimportjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Import-Metadata|header|[DesignImportMetadata](#schemadesignimportmetadata)|true|none|
|body|body|string(binary)|true|Binary of the file to import.|

> Example responses

> 200 Response

```json
{
  "job": {
    "id": "e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8",
    "status": "in_progress"
  }
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="createdesignimportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CreateDesignImportJobResponse](#schemacreatedesignimportjobresponse)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: design:content:write )
</aside>

## getDesignImportJob

<a id="opIdgetDesignImportJob"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/imports/f81b26fd-a33d-4c2d-9e8c-4a7aca798b17 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/imports/{jobId}`

Gets the result of a design import job created using the [Create design import job API](https://www.canva.dev/docs/apps/rest-apis/reference/design-imports/create-design-import-job/).

You might need to make multiple requests to this endpoint until you get a `success` or `failed` status. For more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints).

<h3 id="getdesignimportjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|The design import job ID.|

> Example responses

> 200 Response

```json
{
  "job": {
    "id": "e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8",
    "status": "in_progress"
  }
}
```

> 400 Response

```json
{
  "code": "bad_request_params",
  "message": "The jobId is invalid."
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Calling user was not the creator of the design import job"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "message": "Job ID {jobId} not found"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="getdesignimportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetDesignImportJobResponse](#schemagetdesignimportjobresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: design:content:write )
</aside>

## createUrlImportJob

<a id="opIdcreateUrlImportJob"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/url-imports \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "title": "My Awesome Design",
    "url": "string",
    "mime_type": "application/vnd.apple.keynote"
  }'
```

`POST /v1/url-imports`

Starts a new [asynchronous job](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints) to import an external file from a URL as a new design in Canva.

Supported file types for imports are listed in [Design imports overview](https://www.canva.dev/docs/apps/rest-apis/reference/design-imports/#supported-file-types).

<Note>

For more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints). You can check the status and get the results of design import jobs created with this API using the [Get URL import job API](https://www.canva.dev/docs/apps/rest-apis/reference/design-imports/get-url-import-job/).

</Note>

> Body parameter

```json
{
  "title": "My Awesome Design",
  "url": "string",
  "mime_type": "application/vnd.apple.keynote"
}
```

<h3 id="createurlimportjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateUrlImportJobRequest](#schemacreateurlimportjobrequest)|true|none|
|» title|body|string|true|A title for the design.|
|» url|body|string|true|The URL of the file to import. This URL must be accessible from the internet and be publicly available.|
|» mime_type|body|string|false|The MIME type of the file being imported. If not provided, Canva attempts to automatically detect the type of the file.|

> Example responses

> 200 Response

```json
{
  "job": {
    "id": "e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8",
    "status": "in_progress"
  }
}
```

> 400 Response

```json
{
  "code": "invalid_request",
  "message": "Design import for url {url} already in progress"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "message": "Job with Id {jobId} not found"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="createurlimportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CreateUrlImportJobResponse](#schemacreateurlimportjobresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: design:content:write )
</aside>

## getUrlImportJob

<a id="opIdgetUrlImportJob"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/url-imports/f81b26fd-a33d-4c2d-9e8c-4a7aca798b17 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/url-imports/{jobId}`

Gets the result of a URL import job created using the [Create URL import job API](https://www.canva.dev/docs/apps/rest-apis/reference/design-imports/create-url-import-job/).

You might need to make multiple requests to this endpoint until you get a `success` or `failed` status. For more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints).

<h3 id="geturlimportjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|The ID of the URL import job.|

> Example responses

> 200 Response

```json
{
  "job": {
    "id": "e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8",
    "status": "in_progress"
  }
}
```

> 400 Response

```json
{
  "code": "invalid_request",
  "message": "The job is not created via Connect API."
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Not allowed to get the job status."
}
```

> 404 Response

```json
{
  "code": "not_found",
  "message": "Job {jobId} not found"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="geturlimportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetUrlImportJobResponse](#schemageturlimportjobresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: design:content:write )
</aside>

## createImageToDesignImportJob

<a id="opIdcreateImageToDesignImportJob"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/image-to-design-imports \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "image": {
      "asset_id": "Msd59349ff"
    },
    "title": "My Image Design"
  }'
```

`POST /v1/image-to-design-imports`

<Warning>

This API is currently provided as a preview. Be aware of the following:

- There might be unannounced breaking changes.
- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).
- Public integrations that use preview APIs will not pass the review process, and can't be made available to all Canva users.

</Warning>

Starts a new [asynchronous job](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints) to convert an image into an editable design in Canva, using [Magic Layers](https://www.canva.com/magic-layers/). Elements in the image become separate editable layers in the resulting design.

Provide the image as an asset that is already in the user's Canva account.

The image must be a standard photo or graphic file, such as a PNG or JPEG. Vector-based formats such as SVG, EPS, or AI files, are not supported. Video assets are not supported.

This conversion is designed for flat, non-photographic images such as posters, flyers, banners, and social graphics.

Starting a job consumes the user's [AI credit allowance](https://www.canva.com/help/ai-access/). If the user has reached their AI allowance limit, the request returns a `429` error with the `credit_quota_exceeded` code. Polling for the result of a job using the [Get image-to-design import job API](https://www.canva.dev/docs/apps/rest-apis/reference/design-imports/get-image-to-design-import-job/) doesn't consume any of the allowance.

Use this API when the user wants to edit the contents of the image, such as changing its text, colors, or individual elements. If you only need to place the image into a design as a single flat image, use the [Create design API](https://www.canva.dev/docs/apps/rest-apis/reference/designs/create-design/) with an `asset_id` instead. The Create design API doesn't consume AI credits.

<Note>

For more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints). You can check the status and get the results of image-to-design import jobs created with this API using the [Get image-to-design import job API](https://www.canva.dev/docs/apps/rest-apis/reference/design-imports/get-image-to-design-import-job/).

</Note>

> Body parameter

```json
{
  "image": {
    "asset_id": "Msd59349ff"
  },
  "title": "My Image Design"
}
```

<h3 id="createimagetodesignimportjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateImageToDesignImportJobRequest](#schemacreateimagetodesignimportjobrequest)|true|none|
|» image|body|[ImageSource](#schemaimagesource)|true|The image to convert into a design.|
|» title|body|string|false|A title for the created design. If not provided, Canva generates a title.|

> Example responses

> 200 Response

```json
{
  "job": {
    "id": "f81b26fd-a33d-4c2d-9e8c-4a7aca798b17",
    "status": "in_progress"
  }
}
```

> 400 Response

```json
{
  "code": "unsupported_asset",
  "message": "'asset_id' must refer to an asset of one of the following types: png, jpeg, gif, webp, heic, heif, avif, tiff, jp2, jpx, jpm, jxr."
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Not allowed to access this asset"
}
```

> 404 Response

```json
{
  "code": "asset_not_found",
  "message": "Asset not found"
}
```

> 429 Response

```json
{
  "code": "credit_quota_exceeded",
  "message": "User has exceeded their credit quota"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="createimagetodesignimportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CreateImageToDesignImportJobResponse](#schemacreateimagetodesignimportjobresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: design:content:write )
</aside>

## getImageToDesignImportJob

<a id="opIdgetImageToDesignImportJob"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/image-to-design-imports/f81b26fd-a33d-4c2d-9e8c-4a7aca798b17 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/image-to-design-imports/{jobId}`

<Warning>

This API is currently provided as a preview. Be aware of the following:

- There might be unannounced breaking changes.
- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).
- Public integrations that use preview APIs will not pass the review process, and can't be made available to all Canva users.

</Warning>

Gets the result of an image-to-design import job created using the [Create image-to-design import job API](https://www.canva.dev/docs/apps/rest-apis/reference/design-imports/create-image-to-design-import-job/).

You might need to make multiple requests to this endpoint until you get a `success` or `failed` status. For more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints).

<h3 id="getimagetodesignimportjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|The ID of the image-to-design import job.|

> Example responses

> 200 Response

```json
{
  "job": {
    "id": "f81b26fd-a33d-4c2d-9e8c-4a7aca798b17",
    "status": "in_progress"
  }
}
```

> 400 Response

```json
{
  "code": "invalid_request",
  "message": "{fieldValue} does not match expected format for {fieldName}"
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Calling user was not the creator of the job"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "message": "Job ID {jobId} not found"
}
```

> 429 Response

```json
{
  "code": "too_many_requests",
  "message": "You have reached the design creation throttling threshold."
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="getimagetodesignimportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetImageToDesignImportJobResponse](#schemagetimagetodesignimportjobresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: design:content:write )
</aside>

<h1 id="canva-rest-apis-export">export</h1>

## createDesignExportJob

<a id="opIdcreateDesignExportJob"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/exports \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "design_id": "DAVZr1z5464",
    "format": {
      "type": "pdf",
      "size": "a4",
      "pages": [
        2,
        3,
        4
      ]
    }
  }'
```

`POST /v1/exports`

Starts a new [asynchronous job](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints) to export a file from Canva. Once the exported file is generated, you can download
it using the URL(s) provided. The download URLs are only valid for 24 hours.

The request requires the design ID and the exported file format type.

Supported file formats (and export file type values): JPG (`jpg`), PNG (`png`), GIF (`gif`), Microsoft PowerPoint (`pptx`), MP4 (`mp4`), PDF (`pdf`), CSV (`csv`), HTML bundle (`html_bundle`), and standalone HTML (`html_standalone`).

<Note>

This endpoint has the following additional rate limits:

  - **App throttle:** Each app can export a maximum of 750 times per 5-minute window, and 5,000 times per 24-hour window.
  - **Document throttle:** Each document can be exported a maximum of 75 times per 5-minute window.
  - **User throttle:** Each user can export a maximum of 75 times per 5-minute window, and 500 times per 24-hour window.

</Note>
<Note>

For more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints). You can check the status and get the results of export jobs created with this API using the [Get design export job API](https://www.canva.dev/docs/apps/rest-apis/reference/exports/get-design-export-job/).

</Note>

> Body parameter

```json
{
  "design_id": "DAVZr1z5464",
  "format": {
    "type": "pdf",
    "size": "a4",
    "pages": [
      2,
      3,
      4
    ]
  }
}
```

<h3 id="createdesignexportjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateDesignExportJobRequest](#schemacreatedesignexportjobrequest)|false|none|
|» design_id|body|string|true|The design ID.|
|» format|body|[ExportFormat](#schemaexportformat)|true|Details about the desired export format.|

> Example responses

> 200 Response

```json
{
  "job": {
    "id": "e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8",
    "status": "in_progress"
  }
}
```

> 400 Response

```json
{
  "code": "invalid_request",
  "message": "{designId} does not match expected format for designId"
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Not allowed to access design with id {designId}"
}
```

> 404 Response

```json
{
  "code": "design_not_found",
  "message": "Design with id '{designId}' not found"
}
```

> 429 Response

```json
{
  "code": "too_many_requests",
  "message": "Too many export requests for client"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="createdesignexportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CreateDesignExportJobResponse](#schemacreatedesignexportjobresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: design:content:read )
</aside>

## createPrintPartnerDesignExportJob

<a id="opIdcreatePrintPartnerDesignExportJob"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/print-partner/exports \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "design_id": "DAVZr1z5464",
    "format": {
      "type": "pdf"
    },
    "pages": [
      2,
      3,
      4
    ],
    "dimensions": {
      "width": 200,
      "height": 300,
      "units": "px"
    }
  }'
```

`POST /v1/print-partner/exports`

<Warning>

This API is currently provided as a preview. Be aware of the following:

- There might be unannounced breaking changes.
- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).
- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.

</Warning>

AVAILABILITY: This API is only available to Print Partners.

Starts a new [asynchronous job](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints) to export a Print Partner file from Canva. Once the exported file is generated, you can download
it using the URL(s) provided. The download URLs are only valid for 24 hours.
The request requires the design ID and exports a file as a print-quality PDF.

<Note>
For more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints). You can check the status and get the results of export jobs created with this API using the [Get design export job API](https://www.canva.dev/docs/apps/rest-apis/reference/exports/get-design-export-job/).
</Note>

> Body parameter

```json
{
  "design_id": "DAVZr1z5464",
  "format": {
    "type": "pdf"
  },
  "pages": [
    2,
    3,
    4
  ],
  "dimensions": {
    "width": 200,
    "height": 300,
    "units": "px"
  }
}
```

<h3 id="createprintpartnerdesignexportjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreatePrintPartnerDesignExportJobRequest](#schemacreateprintpartnerdesignexportjobrequest)|false|none|
|» design_id|body|string|true|The design ID.|
|» dimensions|body|[PrintPartnerExportDimensions](#schemaprintpartnerexportdimensions)|false|Dimensions of the export in the specified units. The design dimensions must be<br>within a scale factor of 0.3 and 3 of the requested export dimensions.|
|» format|body|[PrintPartnerExportFormat](#schemaprintpartnerexportformat)|true|Details about the desired export format.|
|» pages|body|[integer(int32)]|false|To specify which pages to export in a multi-page design, provide the page<br>numbers as an array. The first page in a design is page `1`.<br>If `pages` isn't specified, all the pages are exported.|

> Example responses

> 200 Response

```json
{
  "job": {
    "id": "e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8",
    "status": "in_progress"
  }
}
```

> 400 Response

```json
{
  "code": "invalid_request",
  "message": "{designId} does not match expected format for designId"
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Client does not have permission to create a Print Partner export"
}
```

> 404 Response

```json
{
  "code": "design_not_found",
  "message": "Design with id '{designId}' not found"
}
```

> 429 Response

```json
{
  "code": "too_many_requests",
  "message": "Too many export requests for client"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="createprintpartnerdesignexportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CreatePrintPartnerDesignExportJobResponse](#schemacreateprintpartnerdesignexportjobresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: design:content:read )
</aside>

## getDesignExportJob

<a id="opIdgetDesignExportJob"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/exports/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/exports/{exportId}`

Gets the result of a design export job that was created using the [Create design export job API](https://www.canva.dev/docs/apps/rest-apis/reference/exports/create-design-export-job/).

If the job is successful, the response includes an array
of download URLs. Depending on the design type and export format, there is a download URL for each page in the design. The download URLs are only valid for 24 hours.

You might need to make multiple requests to this endpoint until you get a `success` or `failed` status. For more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints).

<h3 id="getdesignexportjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exportId|path|string|true|The export job ID.|

> Example responses

> 200 Response

```json
{
  "job": {
    "id": "e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8",
    "status": "in_progress"
  }
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Not allowed to access export job"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "message": "export job result has expired"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="getdesignexportjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetDesignExportJobResponse](#schemagetdesignexportjobresponse)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: design:content:read )
</aside>

<h1 id="canva-rest-apis-folder">folder</h1>

## getFolder

<a id="opIdgetFolder"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/folders/FAF2lZtloor \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/folders/{folderId}`

Gets the name and other details of a folder using a folder's `folderID`.

<h3 id="getfolder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folderId|path|string|true|The folder ID.|

> Example responses

> 200 Response

```json
{
  "folder": {
    "id": "FAF2lZtloor",
    "name": "My awesome holiday",
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    }
  }
}
```

> 400 Response

```json
{
  "code": "invalid_field",
  "message": "The folder id `{value}` is invalid"
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "{message}"
}
```

> 404 Response

```json
{
  "code": "folder_not_found",
  "message": "Folder not found"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="getfolder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetFolderResponse](#schemagetfolderresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: folder:read )
</aside>

## deleteFolder

<a id="opIddeleteFolder"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/folders/FAF2lZtloor \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/folders/{folderId}`

Deletes a folder with the specified `folderID`.
Deleting a folder moves the user's content in the folder to the
[Trash](https://www.canva.com/help/deleted-designs/) and content owned by
other users is moved to the top level of the owner's
[projects](https://www.canva.com/help/find-designs-and-folders/).

<h3 id="deletefolder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folderId|path|string|true|The folder ID.|

> Example responses

> 400 Response

```json
{
  "code": "invalid_field",
  "message": "The folder id `{value}` is invalid"
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "{message}"
}
```

> 404 Response

```json
{
  "code": "folder_not_found",
  "message": "Folder not found"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="deletefolder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: folder:write )
</aside>

## updateFolder

<a id="opIdupdateFolder"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/folders/FAF2lZtloor \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "My awesome holiday"
  }'
```

`PATCH /v1/folders/{folderId}`

Updates a folder's details using its `folderID`.
Currently, you can only update a folder's name.

> Body parameter

```json
{
  "name": "My awesome holiday"
}
```

<h3 id="updatefolder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folderId|path|string|true|The folder ID.|
|body|body|[UpdateFolderRequest](#schemaupdatefolderrequest)|true|none|
|» name|body|string|true|The folder name, as shown in the Canva UI.|

> Example responses

> 200 Response

```json
{
  "folder": {
    "id": "FAF2lZtloor",
    "name": "My awesome holiday",
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    }
  }
}
```

> 400 Response

```json
{
  "code": "bad_request_body",
  "message": "Invalid request parameters"
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "{message}"
}
```

> 404 Response

```json
{
  "code": "folder_not_found",
  "message": "Folder not found"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="updatefolder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdateFolderResponse](#schemaupdatefolderresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: folder:write )
</aside>

## listFolderItems

<a id="opIdlistFolderItems"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/folders/FAF2lZtloor/items \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/folders/{folderId}/items`

Lists the items in a folder, including each item's `type`.

Folders can contain:

- Other folders.
- Designs, such as Instagram posts, Presentations, and Documents ([Canva Docs](https://www.canva.com/create/documents/)).
- Image assets.
- Brand templates. To include `brand_template` items in the response, you must explicitly specify it in the `item_types` parameter.

  AVAILABILITY: Brand template items are only returned for users on a Canva plan with access to brand templates (such as Canva Pro, Canva Teams, or Canva Enterprise). For more information, see [Brand templates](https://www.canva.dev/docs/apps/rest-apis/reference/brand-templates/).

Currently, video assets are not returned in the response.

<h3 id="listfolderitems-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folderId|path|string|true|The folder ID.|
|continuation|query|string|false|If the success response contains a continuation token, the folder contains more items<br>you can list. You can use this token as a query parameter and retrieve more<br>items from the list, for example<br>`/v1/folders/{folderId}/items?continuation={continuation}`.<br><br>To retrieve all the items in a folder, you might need to make multiple requests.|
|limit|query|integer(int32)|false|none|
|item_types|query|[[FolderItemType](#schemafolderitemtype)]|false|Filter the folder items to only return specified types. The available types are:<br>`design`, `folder`, `image`, and `brand_template`. To filter for more than one item type,<br>provide a comma-delimited list.<br><br>If not specified, defaults to returning `design`, `folder`, and `image` items.<br>To include `brand_template` items, you must explicitly specify it in this parameter.|
|sort_by|query|[FolderItemSortBy](#schemafolderitemsortby)|false|Sort the list of folder items.|
|pin_status|query|[FolderItemPinStatus](#schemafolderitempinstatus)|false|Filter the folder items by their pinned status.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|item_types|design|
|item_types|folder|
|item_types|image|
|item_types|brand_template|
|sort_by|created_ascending|
|sort_by|created_descending|
|sort_by|modified_ascending|
|sort_by|modified_descending|
|sort_by|title_ascending|
|sort_by|title_descending|
|pin_status|any|
|pin_status|pinned|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "type": "folder",
      "folder": {
        "id": "FAF2lZtloor",
        "name": "My awesome holiday",
        "created_at": 1377396000,
        "updated_at": 1692928800,
        "thumbnail": {
          "width": 595,
          "height": 335,
          "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
        }
      }
    }
  ],
  "continuation": "RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN"
}
```

> 400 Response

```json
{
  "code": "bad_query_params",
  "message": "{message}"
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "{message}"
}
```

> 404 Response

```json
{
  "code": "folder_not_found",
  "message": "Folder not found"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="listfolderitems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListFolderItemsResponse](#schemalistfolderitemsresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: folder:read )
</aside>

## moveFolderItem

<a id="opIdmoveFolderItem"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/folders/move \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "to_folder_id": "FAF2lZtloor",
    "item_id": "Msd59349ff"
  }'
```

`POST /v1/folders/move`

Moves an item to another folder. You must specify the folder ID of the destination folder, as well as the ID of the item you want to move.

NOTE: In some situations, a single item can exist in multiple folders. If you attempt to move an item that exists in multiple folders, the API returns an `item_in_multiple_folders` error. In this case, you must use the Canva UI to move the item to another folder.

> Body parameter

```json
{
  "to_folder_id": "FAF2lZtloor",
  "item_id": "Msd59349ff"
}
```

<h3 id="movefolderitem-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MoveFolderItemRequest](#schemamovefolderitemrequest)|false|none|
|» to_folder_id|body|string|true|The ID of the folder you want to move the item to (the destination folder).<br>If you want to move the item to the top level of a Canva user's<br>[projects](https://www.canva.com/help/find-designs-and-folders/), use the ID `root`.|
|» item_id|body|string|true|The ID of the item you want to move. Currently, video assets are not supported.|

> Example responses

> 400 Response

```json
{
  "code": "invalid_field",
  "message": "The folder id `{value}` is invalid"
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "{message}"
}
```

> 404 Response

```json
{
  "code": "folder_not_found",
  "message": "Folder not found"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="movefolderitem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: folder:write )
</aside>

## createFolder

<a id="opIdcreateFolder"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/folders \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "My awesome holiday",
    "parent_folder_id": "FAF2lZtloor"
  }'
```

`POST /v1/folders`

Creates a folder in one of the following locations:

- The top level of a Canva user's [projects](https://www.canva.com/help/find-designs-and-folders/) (using the ID `root`),
- The user's Uploads folder (using the ID `uploads`),
- Another folder (using the parent folder's ID).

When a folder is successfully created, the
endpoint returns its folder ID, along with other information.

> Body parameter

```json
{
  "name": "My awesome holiday",
  "parent_folder_id": "FAF2lZtloor"
}
```

<h3 id="createfolder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateFolderRequest](#schemacreatefolderrequest)|true|none|
|» name|body|string|true|The name of the folder.|
|» parent_folder_id|body|string|true|The folder ID of the parent folder. To create a new folder at the top level of a user's<br>[projects](https://www.canva.com/help/find-designs-and-folders/), use the ID `root`.<br>To create it in their Uploads folder, use `uploads`.|

> Example responses

> 200 Response

```json
{
  "folder": {
    "id": "FAF2lZtloor",
    "name": "My awesome holiday",
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    }
  }
}
```

> 400 Response

```json
{
  "code": "bad_request_body",
  "message": "Invalid request parameters"
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "{message}"
}
```

> 404 Response

```json
{
  "code": "folder_not_found",
  "message": "Parent folder not found"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="createfolder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CreateFolderResponse](#schemacreatefolderresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: folder:write )
</aside>

<h1 id="canva-rest-apis-imagegeneration">image_generation</h1>

## createImageGenerationJob

<a id="opIdcreateImageGenerationJob"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/image-generations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "prompt": "string",
    "aspect_ratio": "square",
    "model": "craft_v1_2k",
    "idempotency_key": "550e8400-e29b-41d4-a716-446655440000",
    "asset_upload": {
      "type": "none"
    }
  }'
```

`POST /v1/image-generations`

<Warning>

This API is currently provided as a preview. Be aware of the following:

- There might be unannounced breaking changes.
- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).
- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.

</Warning>

Starts a new [asynchronous job](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints) to generate an image from a plain-text prompt. When the image is generated, you can download it using the URL provided. The download URL is only valid for 24 hours.

The request requires a prompt and an idempotency key. Call this API with a user access token that has the `asset:write` scope.

To also save the generated image to the user's Canva account as an image asset, set `asset_upload` to `type: upload`. The job then returns the asset alongside the download URL. Saving the asset requires a user access token.

Starting a job consumes the user's [AI credit allowance](https://www.canva.com/help/ai-access/). If the user has reached their AI allowance limit, the request returns a `429` error with the `credit_quota_exceeded` code.

<Note>

For more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints). You can check the status and get the results of image generation jobs created with this API using the [Get image generation job API](https://www.canva.dev/docs/apps/rest-apis/reference/generations/get-image-generation-job/).

</Note>

> Body parameter

```json
{
  "prompt": "string",
  "aspect_ratio": "square",
  "model": "craft_v1_2k",
  "idempotency_key": "550e8400-e29b-41d4-a716-446655440000",
  "asset_upload": {
    "type": "none"
  }
}
```

<h3 id="createimagegenerationjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateImageGenerationJobRequest](#schemacreateimagegenerationjobrequest)|false|none|
|» prompt|body|string|true|A plain-text description of the image to generate.|
|» aspect_ratio|body|[ImageGenerationAspectRatio](#schemaimagegenerationaspectratio)|false|The aspect ratio of the generated image. Every aspect ratio is supported by every model<br>you can select with `model`, so the choice of model never limits the aspect ratios you<br>can use. The pixel dimensions of the output depend on the model. The job result reports<br>the actual `width` and `height`.|
|» model|body|[ImageGenerationModel](#schemaimagegenerationmodel)|false|The model to use for image generation. We recommend omitting this parameter: Canva<br>then selects the best available model for the request and falls back to another<br>model if one is temporarily unavailable. Set it only if you need a specific model's<br>output. If the requested model can't serve the request, the job fails. Canva never<br>uses a different model to serve the request.<br><br>The model strengths below are based on Canva's evaluations. Results vary by<br>prompt, so test with your own prompts before pinning a model.|
|» idempotency_key|body|string(uuid)|true|A key to make create requests idempotent. Retrying with the same key returns the<br>original job without creating a duplicate, even if the other request parameters<br>differ. Keys are held for 24 hours from job creation.|
|» asset_upload|body|[ImageGenerationAssetUpload](#schemaimagegenerationassetupload)|false|Whether to save the generated image as an image asset in the user's Canva account.<br>Omitting `asset_upload` (or using `type: none`) returns only a download URL.<br><br>Saving the asset (`type: upload`) requires a user access token.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» aspect_ratio|square|
|» aspect_ratio|landscape|
|» aspect_ratio|portrait|
|» aspect_ratio|landscape_3_2|
|» aspect_ratio|portrait_2_3|
|» aspect_ratio|portrait_4_5|
|» model|craft_v1_2k|
|» model|lucid_origin|
|» model|z_image_turbo|

> Example responses

> 200 Response

```json
{
  "job": {
    "id": "string",
    "status": "failed",
    "result": {
      "image": {
        "url": "string",
        "asset": {
          "type": "image",
          "id": "Msd59349ff",
          "name": "My Awesome Upload",
          "tags": [
            "image",
            "holiday",
            "best day ever"
          ],
          "created_at": 1377396000,
          "updated_at": 1692928800,
          "thumbnail": {
            "width": 595,
            "height": 335,
            "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
          }
        },
        "width": 1024,
        "height": 1024
      }
    },
    "error": {
      "code": "unsafe_input",
      "message": "string"
    }
  },
  "quota_usage": {
    "used_percentage": 0,
    "resets_at": 0,
    "using_bonus_credits": true,
    "usage_review_link": "string"
  }
}
```

> 400 Response

```json
{
  "code": "invalid_request",
  "message": "{fieldValue} does not match expected format for {fieldName}"
}
```

> 401 Response

```json
{
  "code": "invalid_client",
  "message": "Client {clientId} not available"
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Image generation is not enabled"
}
```

> 429 Response

```json
{
  "code": "credit_quota_exceeded",
  "message": "User has exceeded their credit quota",
  "quota_usage": {
    "used_percentage": 100,
    "resets_at": 1735689600,
    "using_bonus_credits": false,
    "upgrade_url": "https://www.canva.com/upgrade",
    "is_admin": false,
    "generation_pending": false
  }
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="createimagegenerationjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CreateImageGenerationJobResponse](#schemacreateimagegenerationjobresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|429|Too Many Requests|Credit Quota Exceeded|[CreditQuotaError](#schemacreditquotaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: asset:write )
</aside>

## getImageGenerationJob

<a id="opIdgetImageGenerationJob"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/image-generations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/image-generations/{jobId}`

<Warning>

This API is currently provided as a preview. Be aware of the following:

- There might be unannounced breaking changes.
- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).
- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.

</Warning>

Gets the result of an image generation job that was created using the [Create image generation job API](https://www.canva.dev/docs/apps/rest-apis/reference/generations/create-image-generation-job/). Only the app and user that created the job can get it.

If the job is successful, the job's `result` contains a download URL for the generated image. The download URL is only valid for 24 hours. If the job was created with `asset_upload` set to `type: upload`, the `result` also contains the image asset that the image was saved as. These jobs stay `in_progress` until the asset has finished importing, so the returned asset is ready to use.

You might need to make multiple requests to this endpoint until you get a `success` or `failed` status. For more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints).

<h3 id="getimagegenerationjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|The image generation job ID.|

> Example responses

> 200 Response

```json
{
  "job": {
    "id": "string",
    "status": "failed",
    "result": {
      "image": {
        "url": "string",
        "asset": {
          "type": "image",
          "id": "Msd59349ff",
          "name": "My Awesome Upload",
          "tags": [
            "image",
            "holiday",
            "best day ever"
          ],
          "created_at": 1377396000,
          "updated_at": 1692928800,
          "thumbnail": {
            "width": 595,
            "height": 335,
            "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
          }
        },
        "width": 1024,
        "height": 1024
      }
    },
    "error": {
      "code": "unsafe_input",
      "message": "string"
    }
  }
}
```

> 401 Response

```json
{
  "code": "invalid_client",
  "message": "Client {clientId} not available"
}
```

> 403 Response

```json
{
  "code": "missing_scope",
  "message": "Missing scopes: {scopes}"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "message": "Image generation job not found: {jobId}"
}
```

> 429 Response

```json
{
  "code": "too_many_requests",
  "message": "Too many requests to {operation}"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="getimagegenerationjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetImageGenerationJobResponse](#schemagetimagegenerationjobresponse)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: asset:write )
</aside>

<h1 id="canva-rest-apis-imagetransformation">image_transformation</h1>

## createImageTransformationJob

<a id="opIdcreateImageTransformationJob"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/image-transformations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "asset_id": "Msd59349ff",
    "name": "My Awesome Upload with the background removed",
    "transformations": [
      {
        "type": "background_removal"
      }
    ]
  }'
```

`POST /v1/image-transformations`

<Warning>

This API is currently provided as a preview. Be aware of the following:

- There might be unannounced breaking changes.
- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).
- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.

</Warning>

Starts a new [asynchronous job](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints) to apply one or more transformations to an image asset. A successful job produces a single new image asset with all of the requested transformations applied. The source asset isn't modified, and intermediate results aren't returned.

The request requires the ID of the source asset and at least one transformation. The source asset must be an image asset, such as one created using the [Asset upload APIs](https://www.canva.dev/docs/apps/rest-apis/reference/assets/).

Transformations are applied in the order provided, with each one stacked on the result of the previous one.

Starting a job consumes the user's [AI credit allowance](https://www.canva.com/help/ai-access/). If the user has reached their AI allowance limit, the request returns a `429` error with the `credit_quota_exceeded` code. Polling for the result of a job using the [Get image transformation job API](https://www.canva.dev/docs/apps/rest-apis/reference/image-transformations/get-image-transformation-job/) doesn't consume any of the allowance.

<Note>

For more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints). You can check the status and get the results of image transformation jobs created with this API using the [Get image transformation job API](https://www.canva.dev/docs/apps/rest-apis/reference/image-transformations/get-image-transformation-job/).

</Note>

> Body parameter

```json
{
  "asset_id": "Msd59349ff",
  "name": "My Awesome Upload with the background removed",
  "transformations": [
    {
      "type": "background_removal"
    }
  ]
}
```

<h3 id="createimagetransformationjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateImageTransformationJobRequest](#schemacreateimagetransformationjobrequest)|false|none|
|» asset_id|body|string|true|The ID of the source asset to transform. The asset must be an image asset;<br>referencing any other asset type (such as a video) fails with an<br>`unsupported_content_type` error.<br><br>The asset must also have finished uploading. An asset that is still uploading has no<br>image to transform yet and fails with an `asset_not_ready` error. If you've just<br>created the asset, poll its upload job — for example with the<br>[Get asset upload job](https://www.canva.dev/docs/apps/rest-apis/reference/assets/get-asset-upload-job/)<br>endpoint — until it returns a `success` status before starting a transformation.|
|» name|body|string|false|A name for the new image asset that the job produces. Canva doesn't localize this<br>value, so provide a name in the user's language. When omitted, the new asset inherits<br>the name of the source asset.|
|» transformations|body|[[ImageTransformationType](#schemaimagetransformationtype)]|true|The transformations to apply, in order. Must contain at least one transformation.<br>Each transformation is stacked on the result of the previous one. The job's result<br>is a single new image asset with all of the transformations applied; intermediate<br>results are not returned.|

> Example responses

> 200 Response

```json
{
  "job": {
    "id": "450a76e7-f96f-43ae-9c37-0e1ce492ac72",
    "status": "in_progress"
  }
}
```

> 400 Response

```json
{
  "code": "invalid_request",
  "message": "{fieldValue} does not match expected format for {fieldName}"
}
```

> 401 Response

```json
{
  "code": "invalid_client",
  "message": "Client {clientId} not available"
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Image transformation is not enabled"
}
```

> 404 Response

```json
{
  "code": "asset_not_found",
  "message": "Asset not found"
}
```

> 429 Response

```json
{
  "code": "credit_quota_exceeded",
  "message": "User has exceeded their credit quota",
  "quota_usage": {
    "used_percentage": 100,
    "resets_at": 1735689600,
    "using_bonus_credits": false,
    "upgrade_url": "https://www.canva.com/upgrade",
    "is_admin": false,
    "generation_pending": false
  }
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="createimagetransformationjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CreateImageTransformationJobResponse](#schemacreateimagetransformationjobresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|429|Too Many Requests|Credit Quota Exceeded|[CreditQuotaError](#schemacreditquotaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: asset:read asset:write )
</aside>

## getImageTransformationJob

<a id="opIdgetImageTransformationJob"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/image-transformations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/image-transformations/{jobId}`

<Warning>

This API is currently provided as a preview. Be aware of the following:

- There might be unannounced breaking changes.
- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).
- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.

</Warning>

Gets the result of an image transformation job that was created using the [Create image transformation job API](https://www.canva.dev/docs/apps/rest-apis/reference/image-transformations/create-image-transformation-job/).

If the job is successful, the job's `result` contains the new image asset produced by the transformations.

You might need to make multiple requests to this endpoint until you get a `success` or `failed` status. For more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints).

<h3 id="getimagetransformationjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|The image transformation job ID.|

> Example responses

> 200 Response

```json
{
  "job": {
    "id": "450a76e7-f96f-43ae-9c37-0e1ce492ac72",
    "status": "in_progress"
  }
}
```

> 401 Response

```json
{
  "code": "invalid_client",
  "message": "Client {clientId} not available"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "message": "Image transformation job not found: {jobId}"
}
```

> 429 Response

```json
{
  "code": "too_many_requests",
  "message": "Too many requests to {operation}"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="getimagetransformationjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetImageTransformationJobResponse](#schemagetimagetransformationjobresponse)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: asset:read )
</aside>

<h1 id="canva-rest-apis-merge">merge</h1>

## createDesignMergeJob

<a id="opIdcreateDesignMergeJob"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/merges \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "type": "create_new_design",
    "operations": [
      {
        "type": "insert_pages",
        "source": {
          "type": "design",
          "design_id": "DAFVztcvd9z",
          "page_numbers": [
            1,
            2
          ]
        },
        "after_page_number": 2
      }
    ],
    "title": "My merged design"
  }'
```

`POST /v1/merges`

<Warning>

This API is currently provided as a preview. Be aware of the following:

- There might be unannounced breaking changes.
- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).
- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.

</Warning>

Starts a new [asynchronous job](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints) to merge design pages by applying page operations (such as insert, move, or delete) to produce a new design or modify an existing one.

When the job completes successfully, the job result includes metadata for the created or updated design.

<Note>

At this stage, only a single operation per request is supported by default, and passing multiple operations will fail. Contact Canva to enable multi-operation mode for your app.

</Note>

<Note>

For more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints). You can check the status and get the results of jobs created with this API using the [Get design merge job API](https://www.canva.dev/docs/apps/rest-apis/reference/merges/get-design-merge-job/).

</Note>

> Body parameter

```json
{
  "type": "create_new_design",
  "operations": [
    {
      "type": "insert_pages",
      "source": {
        "type": "design",
        "design_id": "DAFVztcvd9z",
        "page_numbers": [
          1,
          2
        ]
      },
      "after_page_number": 2
    }
  ],
  "title": "My merged design"
}
```

<h3 id="createdesignmergejob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateDesignMergeJobRequest](#schemacreatedesignmergejobrequest)|true|none|
|» *oneOf*|body|[NewDesignCreateDesignMergeJobRequest](#schemanewdesigncreatedesignmergejobrequest)|false|Creates a new design by inserting pages from other designs.|
|» *oneOf*|body|[ModifyDesignCreateDesignMergeJobRequest](#schemamodifydesigncreatedesignmergejobrequest)|false|Modifies an existing design by inserting, moving, or deleting pages.|

> Example responses

> 200 Response

```json
{
  "job": {
    "id": "a7by3wd-abc123",
    "status": "in_progress",
    "result": {
      "design": {
        "id": "DAFVztcvd9z",
        "title": "My summer holiday",
        "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
        "thumbnail": {
          "width": 595,
          "height": 335,
          "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
        },
        "urls": {
          "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
          "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
        },
        "created_at": 1377396000,
        "updated_at": 1692928800,
        "page_count": 3
      }
    },
    "error": {
      "code": "thumbnail_generation_error",
      "message": "The merge job failed due to an internal error."
    }
  }
}
```

> 400 Response

```json
{
  "code": "invalid_request",
  "message": "Invalid merge job type: {jobType}"
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Not allowed to access design '{designId}'"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "message": "Design '{designId}' not found"
}
```

> 413 Response

```json
{
  "code": "bad_request_params",
  "message": "The request size exceeds the maximum allowed limit. Try reducing the number of pages per request, using simpler page content, or splitting into multiple smaller operations."
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="createdesignmergejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CreateDesignMergeJobResponse](#schemacreatedesignmergejobresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|413|Payload Too Large|Request Entity Too Large|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: design:content:write design:meta:read )
</aside>

## getDesignMergeJob

<a id="opIdgetDesignMergeJob"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/merges/a7by3wd-abc123 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/merges/{jobId}`

<Warning>

This API is currently provided as a preview. Be aware of the following:

- There might be unannounced breaking changes.
- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).
- Public apps that use preview APIs will not pass the review process, and can't be made available to all Canva users.

</Warning>

Gets the result of a design merge job that was created using the [Create design merge job API](https://www.canva.dev/docs/apps/rest-apis/reference/merges/create-design-merge-job/).

If the job is successful, the response includes the job status and a `result` object with metadata for the created or updated design.

You might need to make multiple requests to this endpoint until you get a `success` or `failed` status. For more information on the workflow for using asynchronous jobs, see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints).

<h3 id="getdesignmergejob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|The design merge job ID.|

> Example responses

> 200 Response

```json
{
  "job": {
    "id": "a7by3wd-abc123",
    "status": "in_progress",
    "result": {
      "design": {
        "id": "DAFVztcvd9z",
        "title": "My summer holiday",
        "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
        "thumbnail": {
          "width": 595,
          "height": 335,
          "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
        },
        "urls": {
          "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
          "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
        },
        "created_at": 1377396000,
        "updated_at": 1692928800,
        "page_count": 3
      }
    },
    "error": {
      "code": "thumbnail_generation_error",
      "message": "The merge job failed due to an internal error."
    }
  }
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Not allowed to access this merge job"
}
```

> 404 Response

```json
{
  "code": "not_found",
  "message": "Merge job '{jobId}' not found"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="getdesignmergejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetDesignMergeJobResponse](#schemagetdesignmergejobresponse)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: design:meta:read )
</aside>

<h1 id="canva-rest-apis-oauth">oauth</h1>

## exchangeAccessToken

<a id="opIdexchangeAccessToken"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/oauth/token \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'grant_type=authorization_code&code_verifier=i541qdcfkb4htnork0w92lnu43en99ls5a48ittv6udqgiflqon8vusojojakbq4&code=kp8nnroja7qnx00.opyc1p76rcbyflsxbycjqfp3ub8vzsvltpzwafy9q5l45dn5fxzhe7i7a6mg1i2t8jpsa6sebdeumkzzhicskabgevrxsssec4dvjwfvhq4gs3ugghguar0voiqpfb7axsapiojoter8v3w2s5s3st84jpv2l06h667iw241xngy9c8%3Dvu1tnjp7sz&client_id=OC-FAB12-AbCdEf&client_secret=cnvcaAbcdefg12345_hijklm6789&redirect_uri=https%3A%2F%2Fexample.com%2Fprocess-auth'
```

`POST /v1/oauth/token`

This endpoint implements the OAuth 2.0 `token` endpoint, as part of the Authorization Code flow with Proof Key for Code Exchange (PKCE). For more information, see [Authentication](https://www.canva.dev/docs/apps/rest-apis/authentication/).

To generate an access token, you must provide one of the following:

- An authorization code
- A refresh token

Generating a token using either an authorization code or a refresh token allows your app to act on behalf of a user. You must first [obtain user authorization and get an authorization code](https://www.canva.dev/docs/apps/rest-apis/authentication/#obtain-user-authorization).

Access tokens may be up to 4 KB in size, and are only valid for a specified period of time. The expiry time (currently 4 hours) is shown in the endpoint response and is subject to change.

**Endpoint authentication**

Requests to this endpoint require authentication with your client ID and client secret, using _one_ of the following methods:

- **Basic access authentication** (Recommended): For [basic access authentication](https://en.wikipedia.org/wiki/Basic_access_authentication), the `{credentials}` string must be a Base64 encoded value of `{client id}:{client secret}`.
- **Body parameters**: Provide your app's credentials using the `client_id` and `client_secret` body parameters.

This endpoint can't be called from a user's web-browser client because it uses client authentication with client secrets. Requests must come from your app's backend, otherwise they'll be blocked by Canva's [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) policy.

**Generate an access token using an authorization code**

To generate an access token with an authorization code, you must:

- Set `grant_type` to `authorization_code`.
- Provide the `code_verifier` value that you generated when creating the user authorization URL.
- Provide the authorization code you received after the user authorized the app.

**Generate an access token using a refresh token**

Using the `refresh_token` value from a previous user token request, you can get a new access token with the same or smaller scope as the previous one, but with a refreshed expiry time. You will also receive a new refresh token that you can use to refresh the access token again.

To refresh an existing access token, you must:

- Set `grant_type` to `refresh_token`.
- Provide the `refresh_token` from a previous token request.

> Body parameter

```yaml
grant_type: authorization_code
code_verifier: i541qdcfkb4htnork0w92lnu43en99ls5a48ittv6udqgiflqon8vusojojakbq4
code: "kp8nnroja7qnx00.opyc1p76rcbyflsxbycjqfp3ub8vzsvltpzwafy9q5l45dn5fxzhe7i7a6mg1i2t8jpsa6sebdeumkzzhicskabgevrxsssec4dvjwfvhq4gs3ugghguar0voiqpfb7axsapiojoter8v3w2s5s3st84jpv2l06h667iw241xngy9c8=vu1tnjp7sz"
client_id: OC-FAB12-AbCdEf
client_secret: cnvcaAbcdefg12345_hijklm6789
redirect_uri: "https://example.com/process-auth"
```

<h3 id="exchangeaccesstoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ExchangeAccessTokenRequest](#schemaexchangeaccesstokenrequest)|true|none|
|» *oneOf*|body|[ExchangeAuthCodeRequest](#schemaexchangeauthcoderequest)|false|none|
|» *oneOf*|body|[ExchangeRefreshTokenRequest](#schemaexchangerefreshtokenrequest)|false|none|

> Example responses

> 200 Response

```json
{
  "access_token": "JagALLazU0i2ld9WW4zTO4kaG0lkvP8Y5sSO206ZwxNF4E1y3xKJKF7TzN17BXTfaNOeY0P88AeRCE6cRF7SJzvf3Sx97rA80sGHtFplFo",
  "refresh_token": "JABix5nolsk9k8n2r0f8nq1gw4zjo40ht6sb4i573wgdzmkwdmiy6muh897hp0bxyab276wtgqkvtob2mg9aidt5d6rcltcbcgs101",
  "token_type": "Bearer",
  "expires_in": 14400,
  "scope": "asset:read design:meta:read design:permission:read folder:read"
}
```

> 400 Response

```json
{
  "code": "invalid_field",
  "message": "client_id body param must have a single value"
}
```

> 401 Response

```json
{
  "code": "invalid_access_token",
  "message": "Client secret is invalid for {clientAppId}"
}
```

> 429 Response

```json
{
  "code": "too_many_requests",
  "message": "Too many {grantType} requests"
}
```

> default Response

```json
{
  "error": "internal_error",
  "error_description": "string"
}
```

<h3 id="exchangeaccesstoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ExchangeAccessTokenResponse](#schemaexchangeaccesstokenresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests|[Error](#schemaerror)|
|default|Default|Error Response|[OauthError](#schemaoautherror)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
basicAuth
</aside>

## introspectToken

<a id="opIdintrospectToken"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/oauth/introspect \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'token=JagALLazU0i2ld9WW4zTO4kaG0lkvP8Y5sSO206ZwxNF4E1y3xKJKF7TzN17BXTfaNOeY0P88AeRCE6cRF7SJzvf3Sx97rA80sGHtFplFo&client_id=OC-FAB12-AbCdEf&client_secret=cnvcaAbcdefg12345_hijklm6789'
```

`POST /v1/oauth/introspect`

Introspect an access token to see whether it is valid and active. You can also verify some token properties, such as its claims, scopes, and validity times.

Requests to this endpoint require authentication with your client ID and client secret, using _one_ of the following methods:

- **Basic access authentication** (Recommended): For [basic access authentication](https://en.wikipedia.org/wiki/Basic_access_authentication), the `{credentials}` string must be a Base64 encoded value of `{client id}:{client secret}`.
- **Body parameters**: Provide your app's credentials using the `client_id` and `client_secret` body parameters.

This endpoint can't be called from a user's web-browser client because it uses client authentication with client secrets. Requests must come from your app's backend, otherwise they'll be blocked by Canva's [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) policy.

> Body parameter

```yaml
token: JagALLazU0i2ld9WW4zTO4kaG0lkvP8Y5sSO206ZwxNF4E1y3xKJKF7TzN17BXTfaNOeY0P88AeRCE6cRF7SJzvf3Sx97rA80sGHtFplFo
client_id: OC-FAB12-AbCdEf
client_secret: cnvcaAbcdefg12345_hijklm6789
```

<h3 id="introspecttoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[IntrospectTokenRequest](#schemaintrospecttokenrequest)|true|none|
|» token|body|string|true|The token to introspect.|
|» client_id|body|string|false|Your app's unique ID, for authenticating the request.<br><br>NOTE: We recommend that you use basic access authentication instead of specifying `client_id` and `client_secret` as body parameters.<br>|
|» client_secret|body|string|false|Your app's client secret, for authenticating the request. Begins with `cnvca`.<br><br>NOTE: We recommend that you use basic access authentication instead of specifying `client_id` and `client_secret` as body parameters.<br>|

> Example responses

> 200 Response

```json
{
  "active": true,
  "scope": "asset:read design:meta:read design:permission:read folder:read",
  "client": "OC-FAB12-AbCdEf",
  "exp": 1712216144,
  "iat": 1712201744,
  "nbf": 1712201744,
  "jti": "AbC1d-efgHIJKLMN2oPqrS",
  "sub": "oBCdEF1Gh2i3jkLmno-pq"
}
```

> 400 Response

```json
{
  "code": "invalid_field",
  "message": "client_id body param must have a single value"
}
```

> 401 Response

```json
{
  "code": "invalid_access_token",
  "message": "Client secret is invalid for {clientAppId}"
}
```

> default Response

```json
{
  "error": "internal_error",
  "error_description": "string"
}
```

<h3 id="introspecttoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[IntrospectTokenResponse](#schemaintrospecttokenresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|default|Default|Error Response|[OauthError](#schemaoautherror)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
basicAuth
</aside>

## revokeTokens

<a id="opIdrevokeTokens"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/oauth/revoke \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'token=agALLazU0i2ld9WW4zTO4kaG0lkvP8Y5sSO206ZwxNF4E1y3xKJKF7TzN17BXTfaNOeY0P88AeRCE6cRF7SJzvf3Sx97rA80sGHtFplFo&client_id=OC-FAB12-AbCdEf&client_secret=cnvcaAbcdefg12345_hijklm6789'
```

`POST /v1/oauth/revoke`

Revoke an access token or a refresh token.

If you revoke a _refresh token_, be aware that:

- The refresh token's lineage is also revoked. This means that access tokens created from that refresh token are also revoked.
- The user's consent for your app is also revoked. This means that the user must go through the OAuth process again to use your app.

Requests to this endpoint require authentication with your client ID and client secret, using _one_ of the following methods:

- **Basic access authentication** (Recommended): For [basic access authentication](https://en.wikipedia.org/wiki/Basic_access_authentication), the `{credentials}` string must be a Base64 encoded value of `{client id}:{client secret}`.
- **Body parameters**: Provide your app's credentials using the `client_id` and `client_secret` body parameters.

This endpoint can't be called from a user's web-browser client because it uses client authentication with client secrets. Requests must come from your app's backend, otherwise they'll be blocked by Canva's [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) policy.

> Body parameter

```yaml
token: agALLazU0i2ld9WW4zTO4kaG0lkvP8Y5sSO206ZwxNF4E1y3xKJKF7TzN17BXTfaNOeY0P88AeRCE6cRF7SJzvf3Sx97rA80sGHtFplFo
client_id: OC-FAB12-AbCdEf
client_secret: cnvcaAbcdefg12345_hijklm6789
```

<h3 id="revoketokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RevokeTokensRequest](#schemarevoketokensrequest)|true|none|
|» token|body|string|true|The token to revoke.|
|» client_id|body|string|false|Your app's unique ID, for authenticating the request.<br><br>NOTE: We recommend that you use basic access authentication instead of specifying `client_id` and `client_secret` as body parameters.<br>|
|» client_secret|body|string|false|Your app's client secret, for authenticating the request. Begins with `cnvca`.<br><br>NOTE: We recommend that you use basic access authentication instead of specifying `client_id` and `client_secret` as body parameters.<br>|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "code": "invalid_field",
  "message": "client_id body param must have a single value"
}
```

> 401 Response

```json
{
  "code": "invalid_access_token",
  "message": "Client secret is invalid for {clientAppId}"
}
```

> default Response

```json
{
  "error": "internal_error",
  "error_description": "string"
}
```

<h3 id="revoketokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RevokeTokensResponse](#schemarevoketokensresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|default|Default|Error Response|[OauthError](#schemaoautherror)|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
basicAuth
</aside>

<h1 id="canva-rest-apis-oidc">oidc</h1>

## getOidcJwks

<a id="opIdgetOidcJwks"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/oidc/jwks \
  -H 'Accept: application/json'
```

`GET /v1/oidc/jwks`

Gets the JSON Web Key Set (public keys) for OIDC. These keys are used to verify JWTs in OpenID Connect flows.

> Example responses

> 200 Response

```json
{
  "keys": [
    {
      "alg": "string",
      "kid": "string",
      "kty": "string",
      "n": "string",
      "e": "string",
      "use": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="getoidcjwks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[JsonWebKeySet](#schemajsonwebkeyset)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## userInfo

<a id="opIduserInfo"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/oidc/userinfo \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/oidc/userinfo`

Fetches the current UserInfo claims for the authorized user. This is the same fields
returned by a id_token returns during authorization.

The claims returned depend on the granted scopes: `profile` claims (`name`, `given_name`,
`family_name`) are only returned when the `profile` scope is granted, and `email` claims
(`email`, `email_verified`) are only returned when the `email` scope is granted. The
`openid` scope is always required.

> Example responses

> 200 Response

```json
{
  "sub": "UAAAAAAAAA",
  "name": "Alice Person",
  "given_name": "Alice",
  "family_name": "Person",
  "email": "alice.person@example.com",
  "email_verified": true
}
```

> 401 Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="userinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UserInfoResponse](#schemauserinforesponse)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: openid profile email ), oauthAuthCode ( Scopes: openid profile ), oauthAuthCode ( Scopes: openid email )
</aside>

<h1 id="canva-rest-apis-resize">resize</h1>

## createDesignResizeJob

<a id="opIdcreateDesignResizeJob"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/resizes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "design_id": "DAGirp_1ZUA",
    "design_type": {
      "type": "custom",
      "width": 1000,
      "height": 1500
    }
  }'
```

`POST /v1/resizes`

<Availability>

To use this API, your app must act on behalf of a user that's on a Canva plan with premium features (such as Canva Pro).

Users on the Canva Free plan have access to a limited trial. For more information, see [Trial quotas](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#trial-quotas).

</Availability>

Starts a new [asynchronous job](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints)
to create a resized copy of a design. The new resized design is
added to the top level of the user's
[projects](https://www.canva.com/help/find-designs-and-folders/) (`root` folder).

To resize a design into a new design, you can either:

  - Use a preset design type.
  - Set height and width dimensions for a custom design.

Note the following behaviors and restrictions when resizing designs:
- Designs can be resized to a maximum area of 25,000,000 pixels squared.
- Resizing designs using the Canva REST APIs always creates a new design. In-place resizing is currently not available in the Canva REST APIs, but can be done in the Canva UI.
- Resizing a multi-page design results in all pages of the design being resized. Resizing a section of a design is only available in the Canva UI.
- [Canva docs](https://www.canva.com/create/documents/) and [emails](https://www.canva.com/emails/) can't be resized, and other design types can't be resized to a Canva doc or email.
- Canva Code designs can't be resized, and other design types can't be resized to a Canva Code design.

<Note>
For more information on the workflow for using asynchronous jobs,
see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints).
You can check the status and get the results of resize jobs created with this API using the
[Get design resize job API](https://www.canva.dev/docs/apps/rest-apis/reference/resizes/get-design-resize-job/).
</Note>

> Body parameter

```json
{
  "design_id": "DAGirp_1ZUA",
  "design_type": {
    "type": "custom",
    "width": 1000,
    "height": 1500
  }
}
```

<h3 id="createdesignresizejob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateDesignResizeJobRequest](#schemacreatedesignresizejobrequest)|false|none|
|» design_id|body|string|true|The design ID.|
|» design_type|body|[DesignTypeInput](#schemadesigntypeinput)|true|The desired design type.|

> Example responses

> 200 Response

```json
{
  "job": {
    "id": "450a76e7-f96f-43ae-9c37-0e1ce492ac72",
    "status": "in_progress"
  }
}
```

> 400 Response

```json
{
  "code": "bad_request_params",
  "message": "Canva designs can't be resized to the selected design type: `{designTypeName}`"
}
```

> 403 Response

```json
{
  "code": "permission_denied",
  "message": "Not allowed to access createDesignResizeJob, requires one of capabilities [resize]."
}
```

> 404 Response

```json
{
  "code": "design_not_found",
  "message": "Design with id '{designId}' not found"
}
```

> 429 Response

```json
{
  "code": "quota_exceeded",
  "message": "Free resize quota has been exceeded. Present the `upsell_url` to the user and prompt them to upgrade their Canva account to continue using the resize feature.",
  "upsell_url": "{upsellUrl}"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="createdesignresizejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CreateDesignResizeJobResponse](#schemacreatedesignresizejobresponse)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|403|Forbidden|Forbidden|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests|[FeatureQuotaExceededError](#schemafeaturequotaexceedederror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: design:content:read design:content:write )
</aside>

## getDesignResizeJob

<a id="opIdgetDesignResizeJob"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/resizes/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/resizes/{jobId}`

<Availability>

To use this API, your app must act on behalf of a user that's on a Canva plan with premium features (such as Canva Pro).

Users on the Canva Free plan have access to a limited trial. For more information, see [Trial quotas](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#trial-quotas).

</Availability>

Gets the result of a design resize job that was created using the [Create design resize
job API](https://www.canva.dev/docs/apps/rest-apis/reference/resizes/create-design-resize-job/).

If the job is successful, the response includes a summary of the new resized design, including its metadata.

You might need to make multiple requests to this endpoint until you get a `success` or `failed` status.
For more information on the workflow for using asynchronous jobs,
see [API requests and responses](https://www.canva.dev/docs/apps/rest-apis/requests-responses/#asynchronous-job-endpoints).

<h3 id="getdesignresizejob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|The design resize job ID.|

> Example responses

> 200 Response

```json
{
  "job": {
    "id": "450a76e7-f96f-43ae-9c37-0e1ce492ac72",
    "status": "in_progress"
  }
}
```

> 404 Response

```json
{
  "code": "not_found",
  "message": "Job {jobId} not found"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="getdesignresizejob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetDesignResizeJobResponse](#schemagetdesignresizejobresponse)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: design:content:read design:content:write )
</aside>

<h1 id="canva-rest-apis-user">user</h1>

## usersMe

<a id="opIdusersMe"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/users/me \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/users/me`

Returns the User ID and Team ID of the user
account associated with the provided access token.

> Example responses

> 200 Response

```json
{
  "team_user": {
    "user_id": "auDAbliZ2rQNNOsUl5OLu",
    "team_id": "Oi2RJILTrKk0KRhRUZozX"
  }
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="usersme-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UsersMeResponse](#schemausersmeresponse)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode
</aside>

## getUserCapabilities

<a id="opIdgetUserCapabilities"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/users/me/capabilities \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/users/me/capabilities`

Lists the API capabilities for the user account associated with the provided access token. For more information, see [Capabilities](https://www.canva.dev/docs/apps/rest-apis/capabilities/).

> Example responses

> 200 Response

```json
{
  "capabilities": [
    "analytics"
  ]
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="getusercapabilities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetUserCapabilitiesResponse](#schemagetusercapabilitiesresponse)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: profile:read )
</aside>

## getUserProfile

<a id="opIdgetUserProfile"></a>

> Code samples

```bash
curl https://api.canva.com/rest/v1/users/me/profile \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/users/me/profile`

Currently, this returns the display name of the user account associated with the provided access token. More user information is expected to be included in the future.

> Example responses

> 200 Response

```json
{
  "profile": {
    "display_name": "Jane Doe"
  }
}
```

> 404 Response

```json
{
  "code": "user_not_found",
  "message": "User not found"
}
```

> default Response

```json
{
  "code": "internal_error",
  "message": "string"
}
```

<h3 id="getuserprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UserProfileResponse](#schemauserprofileresponse)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|default|Default|Error Response|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthCode ( Scopes: profile:read )
</aside>

# Schemas

<h2 id="tocS_CreditQuotaUsageSummary">CreditQuotaUsageSummary</h2>
<!-- backwards compatibility -->
<a id="schemacreditquotausagesummary"></a>
<a id="schema_CreditQuotaUsageSummary"></a>
<a id="tocScreditquotausagesummary"></a>
<a id="tocscreditquotausagesummary"></a>

```json
{
  "used_percentage": 0,
  "resets_at": 0,
  "using_bonus_credits": true
}
```

A summary of the caller's credit quota usage at the time of the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|used_percentage|integer(int32)|false|none|The percentage of the caller's credit quota that has been consumed in the current<br>billing interval, from 0 to 100.|
|resets_at|integer(int64)|false|none|Unix timestamp (seconds from the Unix epoch) of when the credit quota resets for<br>the caller.|
|using_bonus_credits|boolean|false|none|Whether the caller is currently consuming bonus credits (credits beyond their base<br>plan allocation).|

<h2 id="tocS_CreditQuotaSuccessInfo">CreditQuotaSuccessInfo</h2>
<!-- backwards compatibility -->
<a id="schemacreditquotasuccessinfo"></a>
<a id="schema_CreditQuotaSuccessInfo"></a>
<a id="tocScreditquotasuccessinfo"></a>
<a id="tocscreditquotasuccessinfo"></a>

```json
{
  "used_percentage": 0,
  "resets_at": 0,
  "using_bonus_credits": true,
  "usage_review_link": "string"
}
```

Credit quota usage information returned on a successful generation request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|used_percentage|integer(int32)|false|none|The percentage of the caller's credit quota that has been consumed in the current<br>billing interval, from 0 to 100.|
|resets_at|integer(int64)|false|none|Unix timestamp (seconds from the Unix epoch) of when the credit quota resets for<br>the caller.|
|using_bonus_credits|boolean|false|none|Whether the caller is currently consuming bonus credits (credits beyond their base<br>plan allocation).|
|usage_review_link|string|false|none|A URL to the Canva credit usage dashboard where the caller can review their<br>current credit consumption. Not present if unavailable.|

<h2 id="tocS_CreditQuotaErrorInfo">CreditQuotaErrorInfo</h2>
<!-- backwards compatibility -->
<a id="schemacreditquotaerrorinfo"></a>
<a id="schema_CreditQuotaErrorInfo"></a>
<a id="tocScreditquotaerrorinfo"></a>
<a id="tocscreditquotaerrorinfo"></a>

```json
{
  "used_percentage": 0,
  "resets_at": 0,
  "using_bonus_credits": true,
  "upgrade_url": "string",
  "cooldown_ends_at": 0,
  "is_admin": true,
  "generation_pending": true
}
```

Credit quota information returned when a request is rejected due to quota exhaustion
or a cooldown period.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|used_percentage|integer(int32)|false|none|The percentage of the caller's credit quota that has been consumed in the current<br>billing interval, from 0 to 100.|
|resets_at|integer(int64)|false|none|Unix timestamp (seconds from the Unix epoch) of when the credit quota resets for<br>the caller.|
|using_bonus_credits|boolean|false|none|Whether the caller is currently consuming bonus credits (credits beyond their base<br>plan allocation).|
|upgrade_url|string|false|none|URL built from the user's current plan and eligibility for an AI pass. Not present<br>if no upgrade path is available (e.g. already on highest plan or ineligible for AI pass).|
|cooldown_ends_at|integer(int64)|false|none|Unix timestamp (seconds from the Unix epoch) of when the cooldown period ends. Only<br>set when `code` is `credit_quota_cooldown`. Not present for `credit_quota_exceeded`<br>errors.|
|is_admin|boolean|true|none|Whether the caller is a team admin. Allows clients to tailor error messaging<br>(e.g. "contact your admin" vs "upgrade your plan").|
|generation_pending|boolean|false|none|True if another generation is currently in flight and consuming quota. Only<br>meaningful for paid users with cooldown enabled. Not present for free users where this<br>cannot be determined.|

<h2 id="tocS_CreditQuotaError">CreditQuotaError</h2>
<!-- backwards compatibility -->
<a id="schemacreditquotaerror"></a>
<a id="schema_CreditQuotaError"></a>
<a id="tocScreditquotaerror"></a>
<a id="tocscreditquotaerror"></a>

```json
{
  "code": "internal_error",
  "message": "string",
  "quota_usage": {
    "used_percentage": 0,
    "resets_at": 0,
    "using_bonus_credits": true,
    "upgrade_url": "string",
    "cooldown_ends_at": 0,
    "is_admin": true,
    "generation_pending": true
  }
}
```

Returned when a request is rejected because the caller has exceeded their credit quota
or is in a cooldown period after heavy usage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|[ErrorCode](#schemaerrorcode)|true|none|A short string indicating what failed. This field can be used to handle errors programmatically.<br>|
|message|string|true|none|A human-readable description of what went wrong.|
|quota_usage|object|false|none|Credit quota usage at the time of the error. Not present if quota data is unavailable.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|internal_error|
|code|invalid_field|
|code|invalid_header_value|
|code|permission_denied|
|code|too_many_requests|
|code|not_found|
|code|bad_request_body|
|code|bad_http_method|
|code|bad_request_params|
|code|bad_query_params|
|code|user_role_required|
|code|endpoint_not_found|
|code|endpoint_gone|
|code|unsupported_version|
|code|invalid_access_token|
|code|revoked_access_token|
|code|missing_field|
|code|missing_scope|
|code|invalid_grant|
|code|invalid_request|
|code|invalid_client|
|code|unauthorized_client|
|code|unsupported_grant_type|
|code|invalid_scope|
|code|invalid_basic_header|
|code|invalid_file_format|
|code|quota_exceeded|
|code|credit_quota_exceeded|
|code|credit_quota_cooldown|
|code|unsupported_content_type|
|code|request_too_large|
|code|folder_not_found|
|code|item_in_multiple_folders|
|code|asset_not_found|
|code|unsupported_asset|
|code|asset_not_ready|
|code|max_limit_reached|
|code|permission_not_found|
|code|permission_exists|
|code|unauthorized_user|
|code|user_not_found|
|code|user_not_eligible|
|code|group_not_found|
|code|app_not_found|
|code|app_has_non_draft_versions|
|code|invalid_status_transition|
|code|translation_validation_failed|
|code|content_not_found|
|code|doctype_not_found|
|code|design_not_found|
|code|offset_too_large|
|code|page_not_found|
|code|design_or_comment_not_found|
|code|design_or_thread_not_found|
|code|review_dismissed|
|code|design_type_not_found|
|code|team_not_found|
|code|team_is_default|
|code|comment_not_found|
|code|too_many_comments|
|code|too_many_replies|
|code|message_too_long|
|code|thread_not_found|
|code|reply_not_found|
|code|design_not_fillable|
|code|autofill_data_invalid|
|code|feature_not_available|
|code|unsupported_design_type|
|code|design_generation_not_enabled|
|code|design_generation_rejected|
|code|license_required|
|code|input_unsafe|
|code|display_name_unavailable|
|code|user_not_managed|
|code|saml_team_id_conflict|
|code|saml_name_id_not_available|
|code|user_linked_to_another_idp|
|code|user_email_unverified|
|code|user_not_active|
|code|user_pending_consent|
|code|account_exists|
|code|domain_restricted|
|code|user_already_member|

<h2 id="tocS_GetDesignAnalyticsResponse">GetDesignAnalyticsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdesignanalyticsresponse"></a>
<a id="schema_GetDesignAnalyticsResponse"></a>
<a id="tocSgetdesignanalyticsresponse"></a>
<a id="tocsgetdesignanalyticsresponse"></a>

```json
{
  "average_view_duration_seconds": 42,
  "total_view_duration_seconds": 5040,
  "unique_view_count": 87,
  "total_view_count": 120
}
```

Aggregated analytics metrics for a design.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|average_view_duration_seconds|integer(int64)|false|none|The average view duration in seconds.|
|total_view_duration_seconds|integer(int64)|false|none|The total view duration in seconds.|
|unique_view_count|integer(int64)|true|none|The number of unique viewers.|
|total_view_count|integer(int64)|true|none|The total number of views.|

<h2 id="tocS_GetDesignAnalyticsViewersResponse">GetDesignAnalyticsViewersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdesignanalyticsviewersresponse"></a>
<a id="schema_GetDesignAnalyticsViewersResponse"></a>
<a id="tocSgetdesignanalyticsviewersresponse"></a>
<a id="tocsgetdesignanalyticsviewersresponse"></a>

```json
{
  "items": [
    {
      "viewer_id": "b2d44753-f996-46ff-8f01-d4143911550f",
      "user": {
        "user_id": "auDAbliZ2rQNNOsUl5OLu",
        "team_id": "Oi2RJILTrKk0KRhRUZozX",
        "display_name": "Jane Doe"
      },
      "last_viewed_at": 1748044800,
      "viewer_type": "editor",
      "visibility": "shown",
      "total_view_duration_seconds": 312,
      "first_viewed_at": 1745452800,
      "pages_viewed": 8,
      "form_factor": "small",
      "device_operating_system": "macOS",
      "city_country": "Sydney, Australia",
      "total_view_count": 14
    }
  ],
  "continuation": "RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN"
}
```

Successful response from a `getDesignAnalyticsViewers` request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Viewer](#schemaviewer)]|true|none|The list of viewers.|
|continuation|string|false|none|If the success response contains a continuation token, there are more viewers you can list. You can use this token as a query parameter and retrieve more viewers from the list, for example `/v1/designs/{designId}/analytics/viewers?continuation={continuation}`.<br><br>To retrieve all viewers, you might need to make multiple requests.|

<h2 id="tocS_Viewer">Viewer</h2>
<!-- backwards compatibility -->
<a id="schemaviewer"></a>
<a id="schema_Viewer"></a>
<a id="tocSviewer"></a>
<a id="tocsviewer"></a>

```json
{
  "viewer_id": "b2d44753-f996-46ff-8f01-d4143911550f",
  "user": {
    "user_id": "auDAbliZ2rQNNOsUl5OLu",
    "team_id": "Oi2RJILTrKk0KRhRUZozX",
    "display_name": "Jane Doe"
  },
  "last_viewed_at": 1748044800,
  "viewer_type": "editor",
  "visibility": "shown",
  "total_view_duration_seconds": 312,
  "first_viewed_at": 1745452800,
  "pages_viewed": 8,
  "form_factor": "small",
  "device_operating_system": "macOS",
  "city_country": "Sydney, Australia",
  "total_view_count": 14
}
```

A viewer and their engagement metrics for the design.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|viewer_id|string|true|none|An opaque identifier for the viewer. Use this value when filtering page view results by viewer.|
|user|object|false|none|The user details of the viewer. This is omitted for viewers whose identity is not visible.|
|last_viewed_at|integer(int64)|true|none|When the viewer most recently opened the design, as a Unix timestamp (in seconds since the Unix Epoch).|
|viewer_type|[DesignAnalyticsViewerType](#schemadesignanalyticsviewertype)|true|none|How the viewer accessed the design.|
|visibility|[DesignAnalyticsViewerVisibility](#schemadesignanalyticsviewervisibility)|true|none|How this viewer should be presented to the caller.|
|total_view_duration_seconds|integer(int64)|false|none|The total time this viewer has spent viewing the design, in seconds.|
|first_viewed_at|integer(int64)|false|none|When the viewer first viewed the design, as a Unix timestamp (in seconds since the Unix Epoch).|
|pages_viewed|integer(int64)|false|none|The number of pages this viewer viewed for more than one second.|
|form_factor|[DesignAnalyticsViewerFormFactor](#schemadesignanalyticsviewerformfactor)|false|none|The device form factor used to view the design.|
|device_operating_system|string|false|none|The simplified operating system name for the viewer's device.|
|city_country|string|false|none|The viewer location as city and country. This is only returned for anonymous viewers.|
|total_view_count|integer(int64)|false|none|The number of times this viewer opened the design.|

#### Enumerated Values

|Property|Value|
|---|---|
|viewer_type|editor|
|viewer_type|commenter|
|viewer_type|viewer|
|visibility|shown|
|visibility|anonymous|
|visibility|opt_out|
|visibility|another_team|
|visibility|deleted|
|form_factor|small|
|form_factor|large|

<h2 id="tocS_DesignAnalyticsViewerType">DesignAnalyticsViewerType</h2>
<!-- backwards compatibility -->
<a id="schemadesignanalyticsviewertype"></a>
<a id="schema_DesignAnalyticsViewerType"></a>
<a id="tocSdesignanalyticsviewertype"></a>
<a id="tocsdesignanalyticsviewertype"></a>

```json
"editor"
```

How the viewer accessed the design.

<h2 id="tocS_DesignAnalyticsViewerVisibility">DesignAnalyticsViewerVisibility</h2>
<!-- backwards compatibility -->
<a id="schemadesignanalyticsviewervisibility"></a>
<a id="schema_DesignAnalyticsViewerVisibility"></a>
<a id="tocSdesignanalyticsviewervisibility"></a>
<a id="tocsdesignanalyticsviewervisibility"></a>

```json
"shown"
```

How this viewer should be presented to the caller.

<h2 id="tocS_DesignAnalyticsViewerFormFactor">DesignAnalyticsViewerFormFactor</h2>
<!-- backwards compatibility -->
<a id="schemadesignanalyticsviewerformfactor"></a>
<a id="schema_DesignAnalyticsViewerFormFactor"></a>
<a id="tocSdesignanalyticsviewerformfactor"></a>
<a id="tocsdesignanalyticsviewerformfactor"></a>

```json
"small"
```

The device form factor used to view the design.

<h2 id="tocS_GetDesignAnalyticsViewsOverTimeResponse">GetDesignAnalyticsViewsOverTimeResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdesignanalyticsviewsovertimeresponse"></a>
<a id="schema_GetDesignAnalyticsViewsOverTimeResponse"></a>
<a id="tocSgetdesignanalyticsviewsovertimeresponse"></a>
<a id="tocsgetdesignanalyticsviewsovertimeresponse"></a>

```json
{
  "items": [
    {
      "count": 15,
      "bucket_start_at": 1745452800
    }
  ],
  "continuation": "RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN"
}
```

Successful response from a `getDesignAnalyticsViewsOverTime` request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[ViewsAtTime](#schemaviewsattime)]|true|none|The list of time buckets.|
|continuation|string|false|none|If the success response contains a continuation token, there are more time buckets you can list. You can use this token as a query parameter and retrieve more time buckets from the list, for example `/v1/designs/{designId}/analytics/views-over-time?continuation={continuation}`.<br><br>To retrieve all time buckets, you might need to make multiple requests.|

<h2 id="tocS_ViewsAtTime">ViewsAtTime</h2>
<!-- backwards compatibility -->
<a id="schemaviewsattime"></a>
<a id="schema_ViewsAtTime"></a>
<a id="tocSviewsattime"></a>
<a id="tocsviewsattime"></a>

```json
{
  "count": 15,
  "bucket_start_at": 1745452800
}
```

A single time bucket of view counts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int64)|true|none|The number of views in this bucket.|
|bucket_start_at|integer(int64)|true|none|When this time bucket starts, as a Unix timestamp (in seconds since the Unix Epoch).|

<h2 id="tocS_GetDesignAnalyticsPageViewsRequest">GetDesignAnalyticsPageViewsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdesignanalyticspageviewsrequest"></a>
<a id="schema_GetDesignAnalyticsPageViewsRequest"></a>
<a id="tocSgetdesignanalyticspageviewsrequest"></a>
<a id="tocsgetdesignanalyticspageviewsrequest"></a>

```json
{
  "page_ids": [
    "PBBKfZml7MRHRQVw",
    "PBBKfZml7Mghjsdg"
  ],
  "limit": 50,
  "continuation": "RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN",
  "filter": {
    "type": "by_viewer",
    "link_id": "hddb98a3716",
    "viewer_id": "b2d44753-f996-46ff-8f01-d4143911550f"
  }
}
```

Filters and pagination controls for page-level analytics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page_ids|[string]|true|none|The design page IDs to retrieve view duration data for.|
|limit|integer(int32)|false|none|The maximum number of page results to return per page.|
|continuation|string|false|none|If the success response contains a continuation token, there are more page results you can list. You can use this token in the request body and retrieve more page results from the list.<br><br>To retrieve all page results, you might need to make multiple requests.|
|filter|[PageViewFilter](#schemapageviewfilter)|false|none|A filter for page view data.|

<h2 id="tocS_PageViewFilter">PageViewFilter</h2>
<!-- backwards compatibility -->
<a id="schemapageviewfilter"></a>
<a id="schema_PageViewFilter"></a>
<a id="tocSpageviewfilter"></a>
<a id="tocspageviewfilter"></a>

```json
{
  "type": "by_viewer",
  "link_id": "hddb98a3716",
  "viewer_id": "b2d44753-f996-46ff-8f01-d4143911550f"
}
```

A filter for page view data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[PageViewFilterByViewer](#schemapageviewfilterbyviewer)|false|none|none|
|*oneOf*|[PageViewFilterForEditor](#schemapageviewfilterforeditor)|false|none|none|
|*oneOf*|[PageViewFilterByLink](#schemapageviewfilterbylink)|false|none|none|

<h2 id="tocS_PageViewFilterByViewer">PageViewFilterByViewer</h2>
<!-- backwards compatibility -->
<a id="schemapageviewfilterbyviewer"></a>
<a id="schema_PageViewFilterByViewer"></a>
<a id="tocSpageviewfilterbyviewer"></a>
<a id="tocspageviewfilterbyviewer"></a>

```json
{
  "type": "by_viewer",
  "link_id": "hddb98a3716",
  "viewer_id": "b2d44753-f996-46ff-8f01-d4143911550f"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|link_id|string|false|none|Filters to viewer traffic from a specific trackable link. Omit this field to target viewer traffic that did not come from a trackable link.|
|viewer_id|string|true|none|The viewer ID to filter by.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|by_viewer|

<h2 id="tocS_PageViewFilterForEditor">PageViewFilterForEditor</h2>
<!-- backwards compatibility -->
<a id="schemapageviewfilterforeditor"></a>
<a id="schema_PageViewFilterForEditor"></a>
<a id="tocSpageviewfilterforeditor"></a>
<a id="tocspageviewfilterforeditor"></a>

```json
{
  "type": "for_editor"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|for_editor|

<h2 id="tocS_PageViewFilterByLink">PageViewFilterByLink</h2>
<!-- backwards compatibility -->
<a id="schemapageviewfilterbylink"></a>
<a id="schema_PageViewFilterByLink"></a>
<a id="tocSpageviewfilterbylink"></a>
<a id="tocspageviewfilterbylink"></a>

```json
{
  "type": "by_link",
  "link_id": "hddb98a3716"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|link_id|string|true|none|The trackable link ID to filter by.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|by_link|

<h2 id="tocS_GetDesignAnalyticsPageViewsResponse">GetDesignAnalyticsPageViewsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdesignanalyticspageviewsresponse"></a>
<a id="schema_GetDesignAnalyticsPageViewsResponse"></a>
<a id="tocSgetdesignanalyticspageviewsresponse"></a>
<a id="tocsgetdesignanalyticspageviewsresponse"></a>

```json
{
  "items": [
    {
      "page_id": "PBBKfZml7MRHRQVw",
      "total_view_duration_seconds": 1860,
      "average_duration_seconds": 21.5,
      "unique_view_count": 87
    }
  ],
  "continuation": "RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN"
}
```

Successful response from a `getDesignAnalyticsPageViews` request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[PageViewDuration](#schemapageviewduration)]|true|none|The list of page view durations.|
|continuation|string|false|none|If the success response contains a continuation token, there are more page results you can list. You can use this token in the request body and retrieve more page results from the list.<br><br>To retrieve all page results, you might need to make multiple requests.|

<h2 id="tocS_PageViewDuration">PageViewDuration</h2>
<!-- backwards compatibility -->
<a id="schemapageviewduration"></a>
<a id="schema_PageViewDuration"></a>
<a id="tocSpageviewduration"></a>
<a id="tocspageviewduration"></a>

```json
{
  "page_id": "PBBKfZml7MRHRQVw",
  "total_view_duration_seconds": 1860,
  "average_duration_seconds": 21.5,
  "unique_view_count": 87
}
```

View duration metrics for a single page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page_id|string|false|none|The page ID. This is omitted for design types that do not support page IDs.|
|total_view_duration_seconds|integer(int64)|true|none|The total time spent viewing this page, in seconds.|
|average_duration_seconds|number(double)|false|none|The average time spent viewing this page, in seconds. This is omitted for `by_viewer` filters.|
|unique_view_count|integer(int64)|false|none|The number of unique viewers for this page. This is omitted for `by_viewer` filters.|

<h2 id="tocS_GetDesignAnalyticsLinksResponse">GetDesignAnalyticsLinksResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdesignanalyticslinksresponse"></a>
<a id="schema_GetDesignAnalyticsLinksResponse"></a>
<a id="tocSgetdesignanalyticslinksresponse"></a>
<a id="tocsgetdesignanalyticslinksresponse"></a>

```json
{
  "items": [
    {
      "link_id": "hddb98a3716",
      "name": "Newsletter link",
      "total_view_count": 64,
      "unique_view_count": 41,
      "total_view_duration_seconds": 2580,
      "average_view_duration_seconds": 40,
      "last_viewed_at": 1748044800
    }
  ],
  "continuation": "RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN"
}
```

Successful response from a `getDesignAnalyticsLinks` request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[TrackableLink](#schematrackablelink)]|true|none|The list of trackable links.|
|continuation|string|false|none|If the success response contains a continuation token, there are more links you can list. You can use this token as a query parameter and retrieve more links from the list, for example `/v1/designs/{designId}/analytics/links?continuation={continuation}`.<br><br>To retrieve all links, you might need to make multiple requests.|

<h2 id="tocS_TrackableLink">TrackableLink</h2>
<!-- backwards compatibility -->
<a id="schematrackablelink"></a>
<a id="schema_TrackableLink"></a>
<a id="tocStrackablelink"></a>
<a id="tocstrackablelink"></a>

```json
{
  "link_id": "hddb98a3716",
  "name": "Newsletter link",
  "total_view_count": 64,
  "unique_view_count": 41,
  "total_view_duration_seconds": 2580,
  "average_view_duration_seconds": 40,
  "last_viewed_at": 1748044800
}
```

Metrics for a trackable link.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|link_id|string|true|none|The ID of the trackable link.|
|name|string|false|none|The user-visible name of the trackable link.|
|total_view_count|integer(int64)|false|none|The total number of views for this link.|
|unique_view_count|integer(int64)|false|none|The number of unique viewers for this link.|
|total_view_duration_seconds|integer(int64)|false|none|The total time this link has been viewed, in seconds.|
|average_view_duration_seconds|integer(int64)|false|none|The average time this link has been viewed, in seconds.|
|last_viewed_at|integer(int64)|false|none|When this link was most recently viewed, as a Unix timestamp (in seconds since the Unix Epoch).|

<h2 id="tocS_GetAppJwksResponse">GetAppJwksResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetappjwksresponse"></a>
<a id="schema_GetAppJwksResponse"></a>
<a id="tocSgetappjwksresponse"></a>
<a id="tocsgetappjwksresponse"></a>

```json
{
  "keys": [
    {
      "alg": "string",
      "kid": "string",
      "kty": "string",
      "n": "string",
      "e": "string",
      "use": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keys|[[JsonWebKey](#schemajsonwebkey)]|true|none|The value of the "keys" parameter is an array of JWK values. The order of keys has no<br>meaning.|

<h2 id="tocS_CreateUrlAssetUploadJobRequest">CreateUrlAssetUploadJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateurlassetuploadjobrequest"></a>
<a id="schema_CreateUrlAssetUploadJobRequest"></a>
<a id="tocScreateurlassetuploadjobrequest"></a>
<a id="tocscreateurlassetuploadjobrequest"></a>

```json
{
  "name": "My Awesome Asset",
  "url": "https://example.com/my_asset_to_upload.jpg"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A name for the asset.|
|url|string|true|none|The URL of the file to import. This URL must be accessible from the internet and be publicly available.|

<h2 id="tocS_CreateUrlAssetUploadJobResponse">CreateUrlAssetUploadJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateurlassetuploadjobresponse"></a>
<a id="schema_CreateUrlAssetUploadJobResponse"></a>
<a id="tocScreateurlassetuploadjobresponse"></a>
<a id="tocscreateurlassetuploadjobresponse"></a>

```json
{
  "job": {
    "id": "e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8",
    "status": "success",
    "asset": {
      "id": "Msd59349ff",
      "type": "image",
      "name": "My Awesome Upload",
      "tags": [
        "image",
        "holiday",
        "best day ever"
      ],
      "owner": {
        "user_id": "oU123456AbCdE",
        "team_id": "oB123456AbCdE"
      },
      "created_at": 1377396000,
      "updated_at": 1692928800,
      "thumbnail": {
        "width": 595,
        "height": 335,
        "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[AssetUploadJob](#schemaassetuploadjob)|true|none|The status of the asset upload job.|

<h2 id="tocS_GetUrlAssetUploadJobResponse">GetUrlAssetUploadJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemageturlassetuploadjobresponse"></a>
<a id="schema_GetUrlAssetUploadJobResponse"></a>
<a id="tocSgeturlassetuploadjobresponse"></a>
<a id="tocsgeturlassetuploadjobresponse"></a>

```json
{
  "job": {
    "id": "e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8",
    "status": "success",
    "asset": {
      "id": "Msd59349ff",
      "type": "image",
      "name": "My Awesome Upload",
      "tags": [
        "image",
        "holiday",
        "best day ever"
      ],
      "owner": {
        "user_id": "oU123456AbCdE",
        "team_id": "oB123456AbCdE"
      },
      "created_at": 1377396000,
      "updated_at": 1692928800,
      "thumbnail": {
        "width": 595,
        "height": 335,
        "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[AssetUploadJob](#schemaassetuploadjob)|true|none|The status of the asset upload job.|

<h2 id="tocS_GetAssetResponse">GetAssetResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetassetresponse"></a>
<a id="schema_GetAssetResponse"></a>
<a id="tocSgetassetresponse"></a>
<a id="tocsgetassetresponse"></a>

```json
{
  "asset": {
    "type": "image",
    "id": "Msd59349ff",
    "name": "My Awesome Upload",
    "tags": [
      "image",
      "holiday",
      "best day ever"
    ],
    "import_status": {
      "state": "success",
      "error": {
        "code": "file_too_big",
        "message": "string"
      }
    },
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "owner": {
      "user_id": "auDAbliZ2rQNNOsUl5OLu",
      "team_id": "Oi2RJILTrKk0KRhRUZozX"
    },
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    },
    "metadata": {
      "type": "image",
      "width": 1920,
      "height": 1080,
      "smart_tags": [
        "landscape",
        "sunset",
        "mountains",
        "nature"
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset|[Asset](#schemaasset)|true|none|The asset object, which contains metadata about the asset.|

<h2 id="tocS_UpdateAssetRequest">UpdateAssetRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateassetrequest"></a>
<a id="schema_UpdateAssetRequest"></a>
<a id="tocSupdateassetrequest"></a>
<a id="tocsupdateassetrequest"></a>

```json
{
  "name": "My Awesome Upload",
  "tags": [
    "image",
    "holiday",
    "best day ever"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the asset. This is shown in the Canva UI.<br>When this field is undefined or empty, nothing is updated.|
|tags|[string]|false|none|The replacement tags for the asset.<br>When this field is undefined, nothing is updated.|

<h2 id="tocS_UpdateAssetResponse">UpdateAssetResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateassetresponse"></a>
<a id="schema_UpdateAssetResponse"></a>
<a id="tocSupdateassetresponse"></a>
<a id="tocsupdateassetresponse"></a>

```json
{
  "asset": {
    "type": "image",
    "id": "Msd59349ff",
    "name": "My Awesome Upload",
    "tags": [
      "image",
      "holiday",
      "best day ever"
    ],
    "import_status": {
      "state": "success",
      "error": {
        "code": "file_too_big",
        "message": "string"
      }
    },
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "owner": {
      "user_id": "auDAbliZ2rQNNOsUl5OLu",
      "team_id": "Oi2RJILTrKk0KRhRUZozX"
    },
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    },
    "metadata": {
      "type": "image",
      "width": 1920,
      "height": 1080,
      "smart_tags": [
        "landscape",
        "sunset",
        "mountains",
        "nature"
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset|[Asset](#schemaasset)|true|none|The asset object, which contains metadata about the asset.|

<h2 id="tocS_Asset">Asset</h2>
<!-- backwards compatibility -->
<a id="schemaasset"></a>
<a id="schema_Asset"></a>
<a id="tocSasset"></a>
<a id="tocsasset"></a>

```json
{
  "type": "image",
  "id": "Msd59349ff",
  "name": "My Awesome Upload",
  "tags": [
    "image",
    "holiday",
    "best day ever"
  ],
  "import_status": {
    "state": "success",
    "error": {
      "code": "file_too_big",
      "message": "string"
    }
  },
  "created_at": 1377396000,
  "updated_at": 1692928800,
  "owner": {
    "user_id": "auDAbliZ2rQNNOsUl5OLu",
    "team_id": "Oi2RJILTrKk0KRhRUZozX"
  },
  "thumbnail": {
    "width": 595,
    "height": 335,
    "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
  },
  "metadata": {
    "type": "image",
    "width": 1920,
    "height": 1080,
    "smart_tags": [
      "landscape",
      "sunset",
      "mountains",
      "nature"
    ]
  }
}
```

The asset object, which contains metadata about the asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[AssetType](#schemaassettype)|true|none|Type of an asset.|
|id|string|true|none|The ID of the asset.|
|name|string|true|none|The name of the asset.|
|tags|[string]|true|none|The user-facing tags attached to the asset.<br>Users can add these tags to their uploaded assets, and they can search their uploaded<br>assets in the Canva UI by searching for these tags. For information on how users use<br>tags, see the<br>[Canva Help Center page on asset tags](https://www.canva.com/help/add-edit-tags/).|
|import_status|[ImportStatus](#schemaimportstatus)|false|none|**Deprecated.** The import status of the asset.|
|created_at|integer(int64)|true|none|When the asset was added to Canva, as a Unix timestamp (in seconds since the Unix<br>Epoch).|
|updated_at|integer(int64)|true|none|When the asset was last updated in Canva, as a Unix timestamp (in seconds since the<br>Unix Epoch).|
|owner|[TeamUserSummary](#schemateamusersummary)|true|none|Metadata for the user, consisting of the User ID and Team ID.|
|thumbnail|[Thumbnail](#schemathumbnail)|false|none|A thumbnail image representing the object.|
|metadata|[AssetMetadata](#schemaassetmetadata)|false|none|Type-specific metadata for the asset.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|image|
|type|video|

<h2 id="tocS_AssetMetadata">AssetMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaassetmetadata"></a>
<a id="schema_AssetMetadata"></a>
<a id="tocSassetmetadata"></a>
<a id="tocsassetmetadata"></a>

```json
{
  "type": "image",
  "width": 1920,
  "height": 1080,
  "smart_tags": [
    "landscape",
    "sunset",
    "mountains",
    "nature"
  ]
}
```

Type-specific metadata for the asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ImageMetadata](#schemaimagemetadata)|false|none|none|
|*oneOf*|[VideoMetadata](#schemavideometadata)|false|none|none|

<h2 id="tocS_ImageMetadata">ImageMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaimagemetadata"></a>
<a id="schema_ImageMetadata"></a>
<a id="tocSimagemetadata"></a>
<a id="tocsimagemetadata"></a>

```json
{
  "type": "image",
  "width": 1920,
  "height": 1080,
  "smart_tags": [
    "landscape",
    "sunset",
    "mountains",
    "nature"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|width|integer(int32)|false|none|The width of the image in pixels.|
|height|integer(int32)|false|none|The height of the image in pixels.|
|smart_tags|[string]|false|none|AI-generated tags for the image.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|image|

<h2 id="tocS_VideoMetadata">VideoMetadata</h2>
<!-- backwards compatibility -->
<a id="schemavideometadata"></a>
<a id="schema_VideoMetadata"></a>
<a id="tocSvideometadata"></a>
<a id="tocsvideometadata"></a>

```json
{
  "type": "video",
  "width": 1920,
  "height": 1080,
  "duration": 60
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|width|integer(int32)|true|none|The width of the video in pixels.|
|height|integer(int32)|true|none|The height of the video in pixels.|
|duration|integer(int32)|false|none|The duration of the video in seconds.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|video|

<h2 id="tocS_AssetSummary">AssetSummary</h2>
<!-- backwards compatibility -->
<a id="schemaassetsummary"></a>
<a id="schema_AssetSummary"></a>
<a id="tocSassetsummary"></a>
<a id="tocsassetsummary"></a>

```json
{
  "type": "image",
  "id": "Msd59349ff",
  "name": "My Awesome Upload",
  "tags": [
    "image",
    "holiday",
    "best day ever"
  ],
  "created_at": 1377396000,
  "updated_at": 1692928800,
  "thumbnail": {
    "width": 595,
    "height": 335,
    "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
  }
}
```

An object representing an asset with associated metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[AssetType](#schemaassettype)|true|none|Type of an asset.|
|id|string|true|none|The ID of the asset.|
|name|string|true|none|The name of the asset.|
|tags|[string]|true|none|The user-facing tags attached to the asset.<br>Users can add these tags to their uploaded assets, and they can search their uploaded<br>assets in the Canva UI by searching for these tags. For information on how users use<br>tags, see the<br>[Canva Help Center page on asset tags](https://www.canva.com/help/add-edit-tags/).|
|created_at|integer(int64)|true|none|When the asset was added to Canva, as a Unix timestamp (in seconds since the Unix<br>Epoch).|
|updated_at|integer(int64)|true|none|When the asset was last updated in Canva, as a Unix timestamp (in seconds since the<br>Unix Epoch).|
|thumbnail|[Thumbnail](#schemathumbnail)|false|none|A thumbnail image representing the object.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|image|
|type|video|

<h2 id="tocS_AssetType">AssetType</h2>
<!-- backwards compatibility -->
<a id="schemaassettype"></a>
<a id="schema_AssetType"></a>
<a id="tocSassettype"></a>
<a id="tocsassettype"></a>

```json
"image"
```

Type of an asset.

<h2 id="tocS_ImportStatus">ImportStatus</h2>
<!-- backwards compatibility -->
<a id="schemaimportstatus"></a>
<a id="schema_ImportStatus"></a>
<a id="tocSimportstatus"></a>
<a id="tocsimportstatus"></a>

```json
{
  "state": "success",
  "error": {
    "code": "file_too_big",
    "message": "string"
  }
}
```

The import status of the asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|[ImportStatusState](#schemaimportstatusstate)|true|none|**Deprecated.** State of the import job for an uploaded asset.|
|error|[ImportError](#schemaimporterror)|false|none|**Deprecated.** If the import fails, this object provides details about the error.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|failed|
|state|in_progress|
|state|success|

<h2 id="tocS_ImportStatusState">ImportStatusState</h2>
<!-- backwards compatibility -->
<a id="schemaimportstatusstate"></a>
<a id="schema_ImportStatusState"></a>
<a id="tocSimportstatusstate"></a>
<a id="tocsimportstatusstate"></a>

```json
"success"
```

State of the import job for an uploaded asset.

<h2 id="tocS_ImportError">ImportError</h2>
<!-- backwards compatibility -->
<a id="schemaimporterror"></a>
<a id="schema_ImportError"></a>
<a id="tocSimporterror"></a>
<a id="tocsimporterror"></a>

```json
{
  "code": "file_too_big",
  "message": "string"
}
```

If the import fails, this object provides details about the error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|[ImportErrorCode](#schemaimporterrorcode)|true|none|**Deprecated.** A short string indicating why the upload failed. This field can be used to handle errors programmatically.<br>|
|message|string|true|none|A human-readable description of what went wrong.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|file_too_big|
|code|import_failed|

<h2 id="tocS_ImportErrorCode">ImportErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaimporterrorcode"></a>
<a id="schema_ImportErrorCode"></a>
<a id="tocSimporterrorcode"></a>
<a id="tocsimporterrorcode"></a>

```json
"file_too_big"
```

A short string indicating why the upload failed. This field can be used to handle errors programmatically.

<h2 id="tocS_CreateAssetUploadJobResponse">CreateAssetUploadJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateassetuploadjobresponse"></a>
<a id="schema_CreateAssetUploadJobResponse"></a>
<a id="tocScreateassetuploadjobresponse"></a>
<a id="tocscreateassetuploadjobresponse"></a>

```json
{
  "job": {
    "id": "e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8",
    "status": "success",
    "asset": {
      "id": "Msd59349ff",
      "type": "image",
      "name": "My Awesome Upload",
      "tags": [
        "image",
        "holiday",
        "best day ever"
      ],
      "owner": {
        "user_id": "oU123456AbCdE",
        "team_id": "oB123456AbCdE"
      },
      "created_at": 1377396000,
      "updated_at": 1692928800,
      "thumbnail": {
        "width": 595,
        "height": 335,
        "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[AssetUploadJob](#schemaassetuploadjob)|true|none|The status of the asset upload job.|

<h2 id="tocS_GetAssetUploadJobResponse">GetAssetUploadJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetassetuploadjobresponse"></a>
<a id="schema_GetAssetUploadJobResponse"></a>
<a id="tocSgetassetuploadjobresponse"></a>
<a id="tocsgetassetuploadjobresponse"></a>

```json
{
  "job": {
    "id": "e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8",
    "status": "success",
    "asset": {
      "id": "Msd59349ff",
      "type": "image",
      "name": "My Awesome Upload",
      "tags": [
        "image",
        "holiday",
        "best day ever"
      ],
      "owner": {
        "user_id": "oU123456AbCdE",
        "team_id": "oB123456AbCdE"
      },
      "created_at": 1377396000,
      "updated_at": 1692928800,
      "thumbnail": {
        "width": 595,
        "height": 335,
        "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[AssetUploadJob](#schemaassetuploadjob)|true|none|The status of the asset upload job.|

<h2 id="tocS_AssetUploadJob">AssetUploadJob</h2>
<!-- backwards compatibility -->
<a id="schemaassetuploadjob"></a>
<a id="schema_AssetUploadJob"></a>
<a id="tocSassetuploadjob"></a>
<a id="tocsassetuploadjob"></a>

```json
{
  "id": "e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8",
  "status": "success",
  "asset": {
    "id": "Msd59349ff",
    "type": "image",
    "name": "My Awesome Upload",
    "tags": [
      "image",
      "holiday",
      "best day ever"
    ],
    "owner": {
      "user_id": "oU123456AbCdE",
      "team_id": "oB123456AbCdE"
    },
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    }
  }
}
```

The status of the asset upload job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the asset upload job.|
|status|[AssetUploadStatus](#schemaassetuploadstatus)|true|none|Status of the asset upload job.|
|error|[AssetUploadError](#schemaassetuploaderror)|false|none|If the upload fails, this object provides details about the error.|
|asset|[Asset](#schemaasset)|false|none|The asset object, which contains metadata about the asset.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|failed|
|status|in_progress|
|status|success|

<h2 id="tocS_AssetUploadStatus">AssetUploadStatus</h2>
<!-- backwards compatibility -->
<a id="schemaassetuploadstatus"></a>
<a id="schema_AssetUploadStatus"></a>
<a id="tocSassetuploadstatus"></a>
<a id="tocsassetuploadstatus"></a>

```json
"success"
```

Status of the asset upload job.

<h2 id="tocS_AssetUploadError">AssetUploadError</h2>
<!-- backwards compatibility -->
<a id="schemaassetuploaderror"></a>
<a id="schema_AssetUploadError"></a>
<a id="tocSassetuploaderror"></a>
<a id="tocsassetuploaderror"></a>

```json
{
  "code": "file_too_big",
  "message": "Failed to import because the file is too big."
}
```

If the upload fails, this object provides details about the error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|[AssetUploadErrorCode](#schemaassetuploaderrorcode)|true|none|A short string indicating why the upload failed. This field can be used to handle errors<br>programmatically.|
|message|string|true|none|A human-readable description of what went wrong.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|file_too_big|
|code|import_failed|
|code|fetch_failed|

<h2 id="tocS_AssetUploadErrorCode">AssetUploadErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaassetuploaderrorcode"></a>
<a id="schema_AssetUploadErrorCode"></a>
<a id="tocSassetuploaderrorcode"></a>
<a id="tocsassetuploaderrorcode"></a>

```json
"file_too_big"
```

A short string indicating why the upload failed. This field can be used to handle errors
programmatically.

<h2 id="tocS_AssetUploadMetadata">AssetUploadMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaassetuploadmetadata"></a>
<a id="schema_AssetUploadMetadata"></a>
<a id="tocSassetuploadmetadata"></a>
<a id="tocsassetuploadmetadata"></a>

```json
{
  "name_base64": "TXkgQXdlc29tZSBVcGxvYWQg8J+agA=="
}
```

Metadata for the asset being uploaded.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name_base64|string|true|none|The asset's name, encoded in Base64.<br><br>The maximum length of an asset name in Canva (unencoded) is 50 characters.<br><br>Base64 encoding allows names containing emojis and other special<br>characters to be sent using HTTP headers.<br>For example, "My Awesome Upload 🚀" Base64 encoded<br>is `TXkgQXdlc29tZSBVcGxvYWQg8J+agA==`.|

<h2 id="tocS_CreateDesignAutofillJobRequest">CreateDesignAutofillJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedesignautofilljobrequest"></a>
<a id="schema_CreateDesignAutofillJobRequest"></a>
<a id="tocScreatedesignautofilljobrequest"></a>
<a id="tocscreatedesignautofilljobrequest"></a>

```json
{
  "type": "create_from_brand_template",
  "brand_template_id": "DAFVztcvd9z",
  "title": "My autofilled design",
  "data": {
    "cute_pet_image_of_the_day": {
      "type": "image",
      "asset_id": "Msd59349ff"
    },
    "cute_pet_video_of_the_day": {
      "type": "video",
      "asset_id": "VAHCkrNUANI"
    },
    "cute_pet_witty_pet_says": {
      "type": "text",
      "text": "It was like this when I got here!"
    },
    "cute_pet_sales_chart": {
      "type": "chart",
      "chart_data": {
        "column_configs": [
          {
            "name": "Geographic Region",
            "type": "string"
          },
          {
            "name": "Sales (millions AUD)",
            "type": "number"
          },
          {
            "name": "Target (millions AUD)",
            "type": "number"
          },
          {
            "name": "Target met?",
            "type": "boolean"
          },
          {
            "name": "Date met",
            "type": "date"
          }
        ],
        "rows": [
          {
            "cells": [
              {
                "type": "string",
                "value": "Asia Pacific"
              },
              {
                "type": "number",
                "value": 10.2
              },
              {
                "type": "number",
                "value": 10
              },
              {
                "type": "boolean",
                "value": true
              },
              {
                "type": "date",
                "value": 1721944387
              }
            ]
          },
          {
            "cells": [
              {
                "type": "string",
                "value": "EMEA"
              },
              {
                "type": "number",
                "value": 13.8
              },
              {
                "type": "number",
                "value": 14
              },
              {
                "type": "boolean",
                "value": false
              },
              {
                "type": "date"
              }
            ]
          }
        ]
      }
    },
    "cute_pet_sales_sheet": {
      "type": "sheet",
      "sheet_data": {
        "column_configs": [
          {
            "name": "Geographic Region",
            "type": "string"
          },
          {
            "name": "Sales (millions AUD)",
            "type": "number"
          },
          {
            "name": "Target (millions AUD)",
            "type": "number"
          },
          {
            "name": "Target met?",
            "type": "boolean"
          },
          {
            "name": "Date met",
            "type": "date"
          }
        ],
        "rows": [
          {
            "cells": [
              {
                "type": "string",
                "value": "Asia Pacific"
              },
              {
                "type": "number",
                "value": 10.2
              },
              {
                "type": "number",
                "value": 10
              },
              {
                "type": "boolean",
                "value": true
              },
              {
                "type": "date",
                "value": 1721944387
              }
            ]
          },
          {
            "cells": [
              {
                "type": "string",
                "value": "EMEA"
              },
              {
                "type": "number",
                "value": 13.8
              },
              {
                "type": "number",
                "value": 14
              },
              {
                "type": "boolean",
                "value": false
              },
              {
                "type": "date"
              }
            ]
          }
        ]
      }
    }
  }
}
```

Body parameters for creating a new autofill job. Use the `type` discriminator to choose
the autofill mode:

- Use `create_from_brand_template` to create a new design from a brand template.

NOTE: For backward compatibility, if `type` isn't specified in the request,
the request type is assumed to be `create_from_brand_template`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[CreateFromBrandTemplateAutofillJobRequest](#schemacreatefrombrandtemplateautofilljobrequest)|false|none|Create a new autofilled design from a brand template.|
|*oneOf*|[CreateFromDesignAutofillJobRequest](#schemacreatefromdesignautofilljobrequest)|false|none|Create a new autofilled design from an existing design that contains autofill data fields.|
|*oneOf*|[UpdateDesignAutofillJobRequest](#schemaupdatedesignautofilljobrequest)|false|none|Autofill an existing design in place with the provided data.|

<h2 id="tocS_CreateFromBrandTemplateAutofillJobRequest">CreateFromBrandTemplateAutofillJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatefrombrandtemplateautofilljobrequest"></a>
<a id="schema_CreateFromBrandTemplateAutofillJobRequest"></a>
<a id="tocScreatefrombrandtemplateautofilljobrequest"></a>
<a id="tocscreatefrombrandtemplateautofilljobrequest"></a>

```json
{
  "type": "create_from_brand_template",
  "brand_template_id": "DAFVztcvd9z",
  "title": "My autofilled design",
  "data": {
    "cute_pet_image_of_the_day": {
      "type": "image",
      "asset_id": "Msd59349ff"
    },
    "cute_pet_video_of_the_day": {
      "type": "video",
      "asset_id": "VAHCkrNUANI"
    },
    "cute_pet_witty_pet_says": {
      "type": "text",
      "text": "It was like this when I got here!"
    },
    "cute_pet_sales_chart": {
      "type": "chart",
      "chart_data": {
        "column_configs": [
          {
            "name": "Geographic Region",
            "type": "string"
          },
          {
            "name": "Sales (millions AUD)",
            "type": "number"
          },
          {
            "name": "Target (millions AUD)",
            "type": "number"
          },
          {
            "name": "Target met?",
            "type": "boolean"
          },
          {
            "name": "Date met",
            "type": "date"
          }
        ],
        "rows": [
          {
            "cells": [
              {
                "type": "string",
                "value": "Asia Pacific"
              },
              {
                "type": "number",
                "value": 10.2
              },
              {
                "type": "number",
                "value": 10
              },
              {
                "type": "boolean",
                "value": true
              },
              {
                "type": "date",
                "value": 1721944387
              }
            ]
          },
          {
            "cells": [
              {
                "type": "string",
                "value": "EMEA"
              },
              {
                "type": "number",
                "value": 13.8
              },
              {
                "type": "number",
                "value": 14
              },
              {
                "type": "boolean",
                "value": false
              },
              {
                "type": "date"
              }
            ]
          }
        ]
      }
    },
    "cute_pet_sales_sheet": {
      "type": "sheet",
      "sheet_data": {
        "column_configs": [
          {
            "name": "Geographic Region",
            "type": "string"
          },
          {
            "name": "Sales (millions AUD)",
            "type": "number"
          },
          {
            "name": "Target (millions AUD)",
            "type": "number"
          },
          {
            "name": "Target met?",
            "type": "boolean"
          },
          {
            "name": "Date met",
            "type": "date"
          }
        ],
        "rows": [
          {
            "cells": [
              {
                "type": "string",
                "value": "Asia Pacific"
              },
              {
                "type": "number",
                "value": 10.2
              },
              {
                "type": "number",
                "value": 10
              },
              {
                "type": "boolean",
                "value": true
              },
              {
                "type": "date",
                "value": 1721944387
              }
            ]
          },
          {
            "cells": [
              {
                "type": "string",
                "value": "EMEA"
              },
              {
                "type": "number",
                "value": 13.8
              },
              {
                "type": "number",
                "value": 14
              },
              {
                "type": "boolean",
                "value": false
              },
              {
                "type": "date"
              }
            ]
          }
        ]
      }
    }
  }
}
```

Create a new autofilled design from a brand template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|For backward compatibility, if `type` isn't specified in the request, the request type is assumed to be `create_from_brand_template`.|
|brand_template_id|string|true|none|ID of the input brand template.|
|title|string|false|none|Title to use for the autofilled design.<br><br>If no design title is provided, the autofilled design will have the same title as the brand template.|
|data|object|true|none|Data object containing the data fields and values to autofill.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|create_from_brand_template|

<h2 id="tocS_CreateFromDesignAutofillJobRequest">CreateFromDesignAutofillJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatefromdesignautofilljobrequest"></a>
<a id="schema_CreateFromDesignAutofillJobRequest"></a>
<a id="tocScreatefromdesignautofilljobrequest"></a>
<a id="tocscreatefromdesignautofilljobrequest"></a>

```json
{
  "type": "create_from_design",
  "design_id": "DAFVztcvd9z",
  "title": "My autofilled design",
  "data": {
    "cute_pet_image_of_the_day": {
      "type": "image",
      "asset_id": "Msd59349ff"
    },
    "cute_pet_video_of_the_day": {
      "type": "video",
      "asset_id": "VAHCkrNUANI"
    },
    "cute_pet_witty_pet_says": {
      "type": "text",
      "text": "It was like this when I got here!"
    },
    "cute_pet_sales_chart": {
      "type": "chart",
      "chart_data": {
        "column_configs": [
          {
            "name": "Geographic Region",
            "type": "string"
          },
          {
            "name": "Sales (millions AUD)",
            "type": "number"
          },
          {
            "name": "Target (millions AUD)",
            "type": "number"
          },
          {
            "name": "Target met?",
            "type": "boolean"
          },
          {
            "name": "Date met",
            "type": "date"
          }
        ],
        "rows": [
          {
            "cells": [
              {
                "type": "string",
                "value": "Asia Pacific"
              },
              {
                "type": "number",
                "value": 10.2
              },
              {
                "type": "number",
                "value": 10
              },
              {
                "type": "boolean",
                "value": true
              },
              {
                "type": "date",
                "value": 1721944387
              }
            ]
          },
          {
            "cells": [
              {
                "type": "string",
                "value": "EMEA"
              },
              {
                "type": "number",
                "value": 13.8
              },
              {
                "type": "number",
                "value": 14
              },
              {
                "type": "boolean",
                "value": false
              },
              {
                "type": "date"
              }
            ]
          }
        ]
      }
    },
    "cute_pet_sales_sheet": {
      "type": "sheet",
      "sheet_data": {
        "column_configs": [
          {
            "name": "Geographic Region",
            "type": "string"
          },
          {
            "name": "Sales (millions AUD)",
            "type": "number"
          },
          {
            "name": "Target (millions AUD)",
            "type": "number"
          },
          {
            "name": "Target met?",
            "type": "boolean"
          },
          {
            "name": "Date met",
            "type": "date"
          }
        ],
        "rows": [
          {
            "cells": [
              {
                "type": "string",
                "value": "Asia Pacific"
              },
              {
                "type": "number",
                "value": 10.2
              },
              {
                "type": "number",
                "value": 10
              },
              {
                "type": "boolean",
                "value": true
              },
              {
                "type": "date",
                "value": 1721944387
              }
            ]
          },
          {
            "cells": [
              {
                "type": "string",
                "value": "EMEA"
              },
              {
                "type": "number",
                "value": 13.8
              },
              {
                "type": "number",
                "value": 14
              },
              {
                "type": "boolean",
                "value": false
              },
              {
                "type": "date"
              }
            ]
          }
        ]
      }
    }
  }
}
```

Create a new autofilled design from an existing design that contains autofill data fields.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|design_id|string|true|none|ID of the design to use as the autofill source.|
|title|string|false|none|Title to use for the autofilled design.<br><br>If no design title is provided, the autofilled design will have the same title as the source design.|
|data|object|true|none|Data object containing the data fields and values to autofill.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|create_from_design|

<h2 id="tocS_UpdateDesignAutofillJobRequest">UpdateDesignAutofillJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedesignautofilljobrequest"></a>
<a id="schema_UpdateDesignAutofillJobRequest"></a>
<a id="tocSupdatedesignautofilljobrequest"></a>
<a id="tocsupdatedesignautofilljobrequest"></a>

```json
{
  "type": "update_design",
  "design_id": "DAFVztcvd9z",
  "data": {
    "cute_pet_image_of_the_day": {
      "type": "image",
      "asset_id": "Msd59349ff"
    },
    "cute_pet_video_of_the_day": {
      "type": "video",
      "asset_id": "VAHCkrNUANI"
    },
    "cute_pet_witty_pet_says": {
      "type": "text",
      "text": "It was like this when I got here!"
    },
    "cute_pet_sales_chart": {
      "type": "chart",
      "chart_data": {
        "column_configs": [
          {
            "name": "Geographic Region",
            "type": "string"
          },
          {
            "name": "Sales (millions AUD)",
            "type": "number"
          },
          {
            "name": "Target (millions AUD)",
            "type": "number"
          },
          {
            "name": "Target met?",
            "type": "boolean"
          },
          {
            "name": "Date met",
            "type": "date"
          }
        ],
        "rows": [
          {
            "cells": [
              {
                "type": "string",
                "value": "Asia Pacific"
              },
              {
                "type": "number",
                "value": 10.2
              },
              {
                "type": "number",
                "value": 10
              },
              {
                "type": "boolean",
                "value": true
              },
              {
                "type": "date",
                "value": 1721944387
              }
            ]
          },
          {
            "cells": [
              {
                "type": "string",
                "value": "EMEA"
              },
              {
                "type": "number",
                "value": 13.8
              },
              {
                "type": "number",
                "value": 14
              },
              {
                "type": "boolean",
                "value": false
              },
              {
                "type": "date"
              }
            ]
          }
        ]
      }
    },
    "cute_pet_sales_sheet": {
      "type": "sheet",
      "sheet_data": {
        "column_configs": [
          {
            "name": "Geographic Region",
            "type": "string"
          },
          {
            "name": "Sales (millions AUD)",
            "type": "number"
          },
          {
            "name": "Target (millions AUD)",
            "type": "number"
          },
          {
            "name": "Target met?",
            "type": "boolean"
          },
          {
            "name": "Date met",
            "type": "date"
          }
        ],
        "rows": [
          {
            "cells": [
              {
                "type": "string",
                "value": "Asia Pacific"
              },
              {
                "type": "number",
                "value": 10.2
              },
              {
                "type": "number",
                "value": 10
              },
              {
                "type": "boolean",
                "value": true
              },
              {
                "type": "date",
                "value": 1721944387
              }
            ]
          },
          {
            "cells": [
              {
                "type": "string",
                "value": "EMEA"
              },
              {
                "type": "number",
                "value": 13.8
              },
              {
                "type": "number",
                "value": 14
              },
              {
                "type": "boolean",
                "value": false
              },
              {
                "type": "date"
              }
            ]
          }
        ]
      }
    }
  }
}
```

Autofill an existing design in place with the provided data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|design_id|string|true|none|ID of the design to autofill in place.|
|data|object|true|none|Data object containing the data fields and values to autofill.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|update_design|

<h2 id="tocS_CreateDesignAutofillJobResponse">CreateDesignAutofillJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedesignautofilljobresponse"></a>
<a id="schema_CreateDesignAutofillJobResponse"></a>
<a id="tocScreatedesignautofilljobresponse"></a>
<a id="tocscreatedesignautofilljobresponse"></a>

```json
{
  "job": {
    "id": "450a76e7-f96f-43ae-9c37-0e1ce492ac72",
    "status": "success",
    "result": {
      "type": "create_design",
      "design": {
        "id": "DAFVztcvd9z",
        "title": "My summer holiday",
        "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
        "thumbnail": {
          "width": 595,
          "height": 335,
          "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
        },
        "urls": {
          "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
          "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
        },
        "created_at": 1377396000,
        "updated_at": 1692928800,
        "page_count": 3
      },
      "trial_information": {
        "uses_remaining": 0,
        "upgrade_url": "https://www.canva.com/pro/"
      }
    },
    "error": {
      "code": "autofill_error",
      "message": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[DesignAutofillJob](#schemadesignautofilljob)|true|none|Details about the autofill job.|

<h2 id="tocS_DatasetValue">DatasetValue</h2>
<!-- backwards compatibility -->
<a id="schemadatasetvalue"></a>
<a id="schema_DatasetValue"></a>
<a id="tocSdatasetvalue"></a>
<a id="tocsdatasetvalue"></a>

```json
{
  "type": "image",
  "asset_id": "Msd59349ff"
}
```

The data field to autofill.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[DatasetImageValue](#schemadatasetimagevalue)|false|none|If the data field is an image field.|
|*oneOf*|[DatasetVideoValue](#schemadatasetvideovalue)|false|none|If autofilling a video into an image data field.|
|*oneOf*|[DatasetTextValue](#schemadatasettextvalue)|false|none|If the data field is a text field.|
|*oneOf*|[DatasetChartValue](#schemadatasetchartvalue)|false|none|If the data field is a chart.<br><br>Note the following behavior:<br>- If `column_configs` is not provided, the first row is assumed to contain column headers where applicable.<br>- Chart autofill supports a maximum of 100 rows and 20 columns.<br>- `number` cells with formatting metadata are not currently supported for autofill and will result in an error response.<br>- `media` cells are not supported for chart autofill and will result in an error response.|
|*oneOf*|[DatasetSheetValue](#schemadatasetsheetvalue)|false|none|If the data field is a sheet element.<br><br>Note the following behavior:<br>- `number` cells with formatting metadata are not currently supported for autofill and will result in an error response.<br>- `media` cells are not supported for sheet autofill and will result in an error response.|

<h2 id="tocS_Dataset">Dataset</h2>
<!-- backwards compatibility -->
<a id="schemadataset"></a>
<a id="schema_Dataset"></a>
<a id="tocSdataset"></a>
<a id="tocsdataset"></a>

```json
{
  "cute_pet_image_of_the_day": {
    "type": "image",
    "asset_id": "Msd59349ff"
  },
  "cute_pet_video_of_the_day": {
    "type": "video",
    "asset_id": "VAHCkrNUANI"
  },
  "cute_pet_witty_pet_says": {
    "type": "text",
    "text": "It was like this when I got here!"
  },
  "cute_pet_sales_chart": {
    "type": "chart",
    "chart_data": {
      "column_configs": [
        {
          "name": "Geographic Region",
          "type": "string"
        },
        {
          "name": "Sales (millions AUD)",
          "type": "number"
        },
        {
          "name": "Target (millions AUD)",
          "type": "number"
        },
        {
          "name": "Target met?",
          "type": "boolean"
        },
        {
          "name": "Date met",
          "type": "date"
        }
      ],
      "rows": [
        {
          "cells": [
            {
              "type": "string",
              "value": "Asia Pacific"
            },
            {
              "type": "number",
              "value": 10.2
            },
            {
              "type": "number",
              "value": 10
            },
            {
              "type": "boolean",
              "value": true
            },
            {
              "type": "date",
              "value": 1721944387
            }
          ]
        },
        {
          "cells": [
            {
              "type": "string",
              "value": "EMEA"
            },
            {
              "type": "number",
              "value": 13.8
            },
            {
              "type": "number",
              "value": 14
            },
            {
              "type": "boolean",
              "value": false
            },
            {
              "type": "date"
            }
          ]
        }
      ]
    }
  },
  "cute_pet_sales_sheet": {
    "type": "sheet",
    "sheet_data": {
      "column_configs": [
        {
          "name": "Geographic Region",
          "type": "string"
        },
        {
          "name": "Sales (millions AUD)",
          "type": "number"
        },
        {
          "name": "Target (millions AUD)",
          "type": "number"
        },
        {
          "name": "Target met?",
          "type": "boolean"
        },
        {
          "name": "Date met",
          "type": "date"
        }
      ],
      "rows": [
        {
          "cells": [
            {
              "type": "string",
              "value": "Asia Pacific"
            },
            {
              "type": "number",
              "value": 10.2
            },
            {
              "type": "number",
              "value": 10
            },
            {
              "type": "boolean",
              "value": true
            },
            {
              "type": "date",
              "value": 1721944387
            }
          ]
        },
        {
          "cells": [
            {
              "type": "string",
              "value": "EMEA"
            },
            {
              "type": "number",
              "value": 13.8
            },
            {
              "type": "number",
              "value": 14
            },
            {
              "type": "boolean",
              "value": false
            },
            {
              "type": "date"
            }
          ]
        }
      ]
    }
  }
}
```

Data object containing the data fields and values to autofill.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[DatasetValue](#schemadatasetvalue)|false|none|The data field to autofill.|

<h2 id="tocS_DatasetImageValue">DatasetImageValue</h2>
<!-- backwards compatibility -->
<a id="schemadatasetimagevalue"></a>
<a id="schema_DatasetImageValue"></a>
<a id="tocSdatasetimagevalue"></a>
<a id="tocsdatasetimagevalue"></a>

```json
{
  "type": "image",
  "asset_id": "Msd59349ff"
}
```

If the data field is an image field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|asset_id|string|true|none|`asset_id` of the image to insert into the template element.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|image|

<h2 id="tocS_DatasetVideoValue">DatasetVideoValue</h2>
<!-- backwards compatibility -->
<a id="schemadatasetvideovalue"></a>
<a id="schema_DatasetVideoValue"></a>
<a id="tocSdatasetvideovalue"></a>
<a id="tocsdatasetvideovalue"></a>

```json
{
  "type": "video",
  "asset_id": "VAHCkrNUANI"
}
```

If autofilling a video into an image data field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|asset_id|string|true|none|`asset_id` of the video to insert into the template element.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|video|

<h2 id="tocS_DatasetTextValue">DatasetTextValue</h2>
<!-- backwards compatibility -->
<a id="schemadatasettextvalue"></a>
<a id="schema_DatasetTextValue"></a>
<a id="tocSdatasettextvalue"></a>
<a id="tocsdatasettextvalue"></a>

```json
{
  "type": "text",
  "text": "It was like this when I got here!"
}
```

If the data field is a text field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|text|string|true|none|Text to insert into the template element.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|

<h2 id="tocS_DatasetChartValue">DatasetChartValue</h2>
<!-- backwards compatibility -->
<a id="schemadatasetchartvalue"></a>
<a id="schema_DatasetChartValue"></a>
<a id="tocSdatasetchartvalue"></a>
<a id="tocsdatasetchartvalue"></a>

```json
{
  "type": "chart",
  "chart_data": {
    "column_configs": [
      {
        "name": "Geographic Region",
        "type": "string"
      },
      {
        "name": "Sales (millions AUD)",
        "type": "number"
      },
      {
        "name": "Target (millions AUD)",
        "type": "number"
      },
      {
        "name": "Target met?",
        "type": "boolean"
      },
      {
        "name": "Date met",
        "type": "date"
      },
      {
        "name": "Logo",
        "type": "media"
      }
    ],
    "rows": [
      {
        "cells": [
          {
            "type": "string",
            "value": "Asia Pacific"
          },
          {
            "type": "number",
            "value": 10.2,
            "metadata": {
              "formatting": "#,##0.0"
            }
          },
          {
            "type": "number",
            "value": 10,
            "metadata": {
              "formatting": "#,##0.0"
            }
          },
          {
            "type": "boolean",
            "value": true
          },
          {
            "type": "date",
            "value": 1721944387
          },
          {
            "type": "media",
            "value": [
              {
                "type": "image_upload",
                "url": "https://example.com/apac-logo.png",
                "thumbnail_url": "https://example.com/apac-logo-thumb.png",
                "mime_type": "image/png",
                "ai_disclosure": "none"
              },
              {
                "type": "video_upload",
                "url": "https://example.com/apac-logo.mp4",
                "thumbnail_image_url": "https://example.com/apac-logo-thumb.png",
                "thumbnail_video_url": "https://example.com/apac-logo-thumb.mp4",
                "mime_type": "video/mp4",
                "ai_disclosure": "none"
              }
            ]
          }
        ]
      },
      {
        "cells": [
          {
            "type": "string",
            "value": "EMEA"
          },
          {
            "type": "number",
            "value": 13.8,
            "metadata": {
              "formatting": "#,##0.0"
            }
          },
          {
            "type": "number",
            "value": 14,
            "metadata": {
              "formatting": "#,##0.0"
            }
          },
          {
            "type": "boolean",
            "value": false
          },
          {
            "type": "date"
          },
          {
            "type": "media",
            "value": []
          }
        ]
      }
    ]
  }
}
```

If the data field is a chart.

Note the following behavior:
- If `column_configs` is not provided, the first row is assumed to contain column headers where applicable.
- Chart autofill supports a maximum of 100 rows and 20 columns.
- `number` cells with formatting metadata are not currently supported for autofill and will result in an error response.
- `media` cells are not supported for chart autofill and will result in an error response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|chart_data|[DataTable](#schemadatatable)|true|none|Tabular data, structured in rows of cells.<br><br>- Each cell must have a data type configured.<br>- All rows must have the same number of cells.<br>- The number of entries in `column_configs` must match the number of columns in the data.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|chart|

<h2 id="tocS_DatasetSheetValue">DatasetSheetValue</h2>
<!-- backwards compatibility -->
<a id="schemadatasetsheetvalue"></a>
<a id="schema_DatasetSheetValue"></a>
<a id="tocSdatasetsheetvalue"></a>
<a id="tocsdatasetsheetvalue"></a>

```json
{
  "type": "sheet",
  "sheet_data": {
    "column_configs": [
      {
        "name": "Geographic Region",
        "type": "string"
      },
      {
        "name": "Sales (millions AUD)",
        "type": "number"
      },
      {
        "name": "Target (millions AUD)",
        "type": "number"
      },
      {
        "name": "Target met?",
        "type": "boolean"
      },
      {
        "name": "Date met",
        "type": "date"
      },
      {
        "name": "Logo",
        "type": "media"
      }
    ],
    "rows": [
      {
        "cells": [
          {
            "type": "string",
            "value": "Asia Pacific"
          },
          {
            "type": "number",
            "value": 10.2,
            "metadata": {
              "formatting": "#,##0.0"
            }
          },
          {
            "type": "number",
            "value": 10,
            "metadata": {
              "formatting": "#,##0.0"
            }
          },
          {
            "type": "boolean",
            "value": true
          },
          {
            "type": "date",
            "value": 1721944387
          },
          {
            "type": "media",
            "value": [
              {
                "type": "image_upload",
                "url": "https://example.com/apac-logo.png",
                "thumbnail_url": "https://example.com/apac-logo-thumb.png",
                "mime_type": "image/png",
                "ai_disclosure": "none"
              },
              {
                "type": "video_upload",
                "url": "https://example.com/apac-logo.mp4",
                "thumbnail_image_url": "https://example.com/apac-logo-thumb.png",
                "thumbnail_video_url": "https://example.com/apac-logo-thumb.mp4",
                "mime_type": "video/mp4",
                "ai_disclosure": "none"
              }
            ]
          }
        ]
      },
      {
        "cells": [
          {
            "type": "string",
            "value": "EMEA"
          },
          {
            "type": "number",
            "value": 13.8,
            "metadata": {
              "formatting": "#,##0.0"
            }
          },
          {
            "type": "number",
            "value": 14,
            "metadata": {
              "formatting": "#,##0.0"
            }
          },
          {
            "type": "boolean",
            "value": false
          },
          {
            "type": "date"
          },
          {
            "type": "media",
            "value": []
          }
        ]
      }
    ]
  }
}
```

If the data field is a sheet element.

Note the following behavior:
- `number` cells with formatting metadata are not currently supported for autofill and will result in an error response.
- `media` cells are not supported for sheet autofill and will result in an error response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|sheet_data|[DataTable](#schemadatatable)|true|none|Tabular data, structured in rows of cells.<br><br>- Each cell must have a data type configured.<br>- All rows must have the same number of cells.<br>- The number of entries in `column_configs` must match the number of columns in the data.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|sheet|

<h2 id="tocS_GetDesignAutofillJobResponse">GetDesignAutofillJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdesignautofilljobresponse"></a>
<a id="schema_GetDesignAutofillJobResponse"></a>
<a id="tocSgetdesignautofilljobresponse"></a>
<a id="tocsgetdesignautofilljobresponse"></a>

```json
{
  "job": {
    "id": "450a76e7-f96f-43ae-9c37-0e1ce492ac72",
    "status": "success",
    "result": {
      "type": "create_design",
      "design": {
        "id": "DAFVztcvd9z",
        "title": "My summer holiday",
        "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
        "thumbnail": {
          "width": 595,
          "height": 335,
          "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
        },
        "urls": {
          "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
          "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
        },
        "created_at": 1377396000,
        "updated_at": 1692928800,
        "page_count": 3
      },
      "trial_information": {
        "uses_remaining": 0,
        "upgrade_url": "https://www.canva.com/pro/"
      }
    },
    "error": {
      "code": "autofill_error",
      "message": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[DesignAutofillJob](#schemadesignautofilljob)|true|none|Details about the autofill job.|

<h2 id="tocS_DesignAutofillJob">DesignAutofillJob</h2>
<!-- backwards compatibility -->
<a id="schemadesignautofilljob"></a>
<a id="schema_DesignAutofillJob"></a>
<a id="tocSdesignautofilljob"></a>
<a id="tocsdesignautofilljob"></a>

```json
{
  "id": "450a76e7-f96f-43ae-9c37-0e1ce492ac72",
  "status": "success",
  "result": {
    "type": "create_design",
    "design": {
      "id": "DAFVztcvd9z",
      "title": "My summer holiday",
      "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
      "thumbnail": {
        "width": 595,
        "height": 335,
        "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
      },
      "urls": {
        "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
        "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
      },
      "created_at": 1377396000,
      "updated_at": 1692928800,
      "page_count": 3
    },
    "trial_information": {
      "uses_remaining": 0,
      "upgrade_url": "https://www.canva.com/pro/"
    }
  },
  "error": {
    "code": "autofill_error",
    "message": "string"
  }
}
```

Details about the autofill job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of the asynchronous job that is creating the design using the provided data.|
|status|[DesignAutofillStatus](#schemadesignautofillstatus)|true|none|Status of the design autofill job.|
|result|[DesignAutofillJobResult](#schemadesignautofilljobresult)|false|none|Result of the design autofill job. Only present if job status is `success`.|
|error|[AutofillError](#schemaautofillerror)|false|none|If the autofill job fails, this object provides details about the error.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|in_progress|
|status|success|
|status|failed|

<h2 id="tocS_DesignAutofillJobResult">DesignAutofillJobResult</h2>
<!-- backwards compatibility -->
<a id="schemadesignautofilljobresult"></a>
<a id="schema_DesignAutofillJobResult"></a>
<a id="tocSdesignautofilljobresult"></a>
<a id="tocsdesignautofilljobresult"></a>

```json
{
  "type": "create_design",
  "design": {
    "id": "DAFVztcvd9z",
    "title": "My summer holiday",
    "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    },
    "urls": {
      "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
      "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
    },
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "page_count": 3
  },
  "trial_information": {
    "uses_remaining": 0,
    "upgrade_url": "https://www.canva.com/pro/"
  }
}
```

Result of the design autofill job. Only present if job status is `success`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[CreateDesignAutofillJobResult](#schemacreatedesignautofilljobresult)|false|none|A new autofilled design has been created and saved to the user's root folder.|
|*oneOf*|[UpdateDesignAutofillJobResult](#schemaupdatedesignautofilljobresult)|false|none|The existing design has been autofilled in place.|

<h2 id="tocS_CreateDesignAutofillJobResult">CreateDesignAutofillJobResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatedesignautofilljobresult"></a>
<a id="schema_CreateDesignAutofillJobResult"></a>
<a id="tocScreatedesignautofilljobresult"></a>
<a id="tocscreatedesignautofilljobresult"></a>

```json
{
  "type": "create_design",
  "design": {
    "id": "DAFVztcvd9z",
    "title": "My summer holiday",
    "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    },
    "urls": {
      "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
      "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
    },
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "page_count": 3
  },
  "trial_information": {
    "uses_remaining": 0,
    "upgrade_url": "https://www.canva.com/pro/"
  }
}
```

A new autofilled design has been created and saved to the user's root folder.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|design|[DesignSummary](#schemadesignsummary)|true|none|Basic details about the design, such as the design's ID, title, and URL.|
|trial_information|[AutofillTrialInformation](#schemaautofilltrialinformation)|false|none|WARNING: Trials and trial information are a [preview feature](https://www.canva.dev/docs/apps/rest-apis/#preview-apis).<br>There might be unannounced breaking changes to this feature which won't produce a new API version.<br><br>Trial information for users on a Canva plan that doesn't include autofill access. These<br>users have a limited number of autofill uses. Once the trial is exhausted, users must<br>upgrade their Canva plan (such as to Canva Pro, Canva Teams, or Canva Enterprise) to<br>continue using the Autofill API.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|create_design|

<h2 id="tocS_UpdateDesignAutofillJobResult">UpdateDesignAutofillJobResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedesignautofilljobresult"></a>
<a id="schema_UpdateDesignAutofillJobResult"></a>
<a id="tocSupdatedesignautofilljobresult"></a>
<a id="tocsupdatedesignautofilljobresult"></a>

```json
{
  "type": "update_design",
  "design": {
    "id": "DAFVztcvd9z",
    "title": "My summer holiday",
    "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    },
    "urls": {
      "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
      "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
    },
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "page_count": 3
  }
}
```

The existing design has been autofilled in place.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|design|[DesignSummary](#schemadesignsummary)|true|none|Basic details about the design, such as the design's ID, title, and URL.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|update_design|

<h2 id="tocS_DesignAutofillStatus">DesignAutofillStatus</h2>
<!-- backwards compatibility -->
<a id="schemadesignautofillstatus"></a>
<a id="schema_DesignAutofillStatus"></a>
<a id="tocSdesignautofillstatus"></a>
<a id="tocsdesignautofillstatus"></a>

```json
"success"
```

Status of the design autofill job.

<h2 id="tocS_AutofillErrorCode">AutofillErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaautofillerrorcode"></a>
<a id="schema_AutofillErrorCode"></a>
<a id="tocSautofillerrorcode"></a>
<a id="tocsautofillerrorcode"></a>

```json
"autofill_error"
```

<h2 id="tocS_AutofillError">AutofillError</h2>
<!-- backwards compatibility -->
<a id="schemaautofillerror"></a>
<a id="schema_AutofillError"></a>
<a id="tocSautofillerror"></a>
<a id="tocsautofillerror"></a>

```json
{
  "code": "autofill_error",
  "message": "string"
}
```

If the autofill job fails, this object provides details about the error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|[AutofillErrorCode](#schemaautofillerrorcode)|true|none|none|
|message|string|true|none|A human-readable description of what went wrong.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|autofill_error|
|code|thumbnail_generation_error|
|code|create_design_error|
|code|design_approval_error|
|code|trial_quota_exceeded|
|code|design_update_error|

<h2 id="tocS_AutofillTrialInformation">AutofillTrialInformation</h2>
<!-- backwards compatibility -->
<a id="schemaautofilltrialinformation"></a>
<a id="schema_AutofillTrialInformation"></a>
<a id="tocSautofilltrialinformation"></a>
<a id="tocsautofilltrialinformation"></a>

```json
{
  "uses_remaining": 0,
  "upgrade_url": "https://www.canva.com/pro/"
}
```

WARNING: Trials and trial information are a [preview feature](https://www.canva.dev/docs/apps/rest-apis/#preview-apis).
There might be unannounced breaking changes to this feature which won't produce a new API version.

Trial information for users on a Canva plan that doesn't include autofill access. These
users have a limited number of autofill uses. Once the trial is exhausted, users must
upgrade their Canva plan (such as to Canva Pro, Canva Teams, or Canva Enterprise) to
continue using the Autofill API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uses_remaining|integer(int32)|true|none|The number of uses remaining in the free trial.|
|upgrade_url|string|true|none|The URL for a user to upgrade their Canva account to a plan with autofill access.|

<h2 id="tocS_DatasetFilter">DatasetFilter</h2>
<!-- backwards compatibility -->
<a id="schemadatasetfilter"></a>
<a id="schema_DatasetFilter"></a>
<a id="tocSdatasetfilter"></a>
<a id="tocsdatasetfilter"></a>

```json
"any"
```

<h2 id="tocS_ListBrandTemplatesResponse">ListBrandTemplatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbrandtemplatesresponse"></a>
<a id="schema_ListBrandTemplatesResponse"></a>
<a id="tocSlistbrandtemplatesresponse"></a>
<a id="tocslistbrandtemplatesresponse"></a>

```json
{
  "continuation": "RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN",
  "items": [
    {
      "id": "DEMzWSwy3BI",
      "title": "Advertisement Template",
      "view_url": "https://www.canva.com/design/DAE35hE8FA4/view",
      "create_url": "https://www.canva.com/design/DAE35hE8FA4/remix",
      "thumbnail": {
        "width": 595,
        "height": 335,
        "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
      },
      "created_at": 1704110400,
      "updated_at": 1719835200
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|continuation|string|false|none|If the success response contains a continuation token, the user has access to more<br>brand templates you can list. You can use this token as a query parameter and retrieve<br>more templates from the list, for example<br>`/v1/brand-templates?continuation={continuation}`.<br>To retrieve all the brand templates available to the user, you might need to make<br>multiple requests.|
|items|[[BrandTemplate](#schemabrandtemplate)]|true|none|The list of brand templates.|

<h2 id="tocS_GetBrandTemplateResponse">GetBrandTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbrandtemplateresponse"></a>
<a id="schema_GetBrandTemplateResponse"></a>
<a id="tocSgetbrandtemplateresponse"></a>
<a id="tocsgetbrandtemplateresponse"></a>

```json
{
  "brand_template": {
    "id": "DEMzWSwy3BI",
    "title": "Advertisement Template",
    "view_url": "https://www.canva.com/design/DAE35hE8FA4/view",
    "create_url": "https://www.canva.com/design/DAE35hE8FA4/remix",
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    },
    "created_at": 1704110400,
    "updated_at": 1719835200
  }
}
```

Successful response from a `getBrandTemplate` request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brand_template|[BrandTemplate](#schemabrandtemplate)|true|none|An object representing a brand template with associated metadata.|

<h2 id="tocS_BrandTemplate">BrandTemplate</h2>
<!-- backwards compatibility -->
<a id="schemabrandtemplate"></a>
<a id="schema_BrandTemplate"></a>
<a id="tocSbrandtemplate"></a>
<a id="tocsbrandtemplate"></a>

```json
{
  "id": "DEMzWSwy3BI",
  "title": "Advertisement Template",
  "view_url": "https://www.canva.com/design/DAE35hE8FA4/view",
  "create_url": "https://www.canva.com/design/DAE35hE8FA4/remix",
  "thumbnail": {
    "width": 595,
    "height": 335,
    "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
  },
  "created_at": 1704110400,
  "updated_at": 1719835200
}
```

An object representing a brand template with associated metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The brand template ID.|
|title|string|true|none|The brand template title, as shown in the Canva UI.|
|view_url|string|true|none|A URL Canva users can visit to view the brand template.|
|create_url|string|true|none|A URL Canva users can visit to create a new design from the template.|
|thumbnail|[Thumbnail](#schemathumbnail)|false|none|A thumbnail image representing the object.|
|created_at|integer(int64)|true|none|When the brand template was created, as a Unix timestamp<br>(in seconds since the Unix Epoch).|
|updated_at|integer(int64)|true|none|When the brand template was last updated, as a Unix timestamp<br>(in seconds since the Unix Epoch).|

<h2 id="tocS_BrandTemplateSummary">BrandTemplateSummary</h2>
<!-- backwards compatibility -->
<a id="schemabrandtemplatesummary"></a>
<a id="schema_BrandTemplateSummary"></a>
<a id="tocSbrandtemplatesummary"></a>
<a id="tocsbrandtemplatesummary"></a>

```json
{
  "id": "DEMzWSwy3BI",
  "title": "Advertisement Template",
  "view_url": "https://www.canva.com/design/DAE35hE8FA4/view",
  "create_url": "https://www.canva.com/design/DAE35hE8FA4/remix",
  "thumbnail": {
    "width": 595,
    "height": 335,
    "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
  },
  "created_at": 1704110400,
  "updated_at": 1719835200
}
```

An object representing a brand template with associated metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The brand template ID.|
|title|string|true|none|The brand template title, as shown in the Canva UI.|
|view_url|string|true|none|A URL Canva users can visit to view the brand template.|
|create_url|string|true|none|A URL Canva users can visit to create a new design from the template.|
|thumbnail|[Thumbnail](#schemathumbnail)|false|none|A thumbnail image representing the object.|
|created_at|integer(int64)|true|none|When the brand template was created, as a Unix timestamp<br>(in seconds since the Unix Epoch).|
|updated_at|integer(int64)|true|none|When the brand template was last updated, as a Unix timestamp<br>(in seconds since the Unix Epoch).|

<h2 id="tocS_GetBrandTemplateDatasetResponse">GetBrandTemplateDatasetResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbrandtemplatedatasetresponse"></a>
<a id="schema_GetBrandTemplateDatasetResponse"></a>
<a id="tocSgetbrandtemplatedatasetresponse"></a>
<a id="tocsgetbrandtemplatedatasetresponse"></a>

```json
{
  "dataset": {
    "cute_pet_image_of_the_day": {
      "type": "image"
    },
    "cute_pet_witty_pet_says": {
      "type": "text"
    },
    "cute_pet_sales_chart": {
      "type": "chart"
    }
  }
}
```

Successful response from a `getBrandTemplateDataset` request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataset|object|false|none|The dataset definition. It contains the data inputs available for use with the<br>[Create design autofill job API](https://www.canva.dev/docs/apps/rest-apis/reference/autofills/create-design-autofill-job/).|

<h2 id="tocS_PublishBrandTemplateRequest">PublishBrandTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublishbrandtemplaterequest"></a>
<a id="schema_PublishBrandTemplateRequest"></a>
<a id="tocSpublishbrandtemplaterequest"></a>
<a id="tocspublishbrandtemplaterequest"></a>

```json
{
  "design_id": "DABCdesign123"
}
```

Request body for publishing a design as a brand template

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|design_id|string|true|none|The ID of the design to publish as a brand template. If this design is a draft of an existing brand template, that template will be updated. Otherwise, a new brand template is created.|

<h2 id="tocS_PublishBrandTemplateResponse">PublishBrandTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublishbrandtemplateresponse"></a>
<a id="schema_PublishBrandTemplateResponse"></a>
<a id="tocSpublishbrandtemplateresponse"></a>
<a id="tocspublishbrandtemplateresponse"></a>

```json
{
  "brand_template": {
    "id": "DEMzWSwy3BI",
    "title": "Advertisement Template",
    "view_url": "https://www.canva.com/design/DAE35hE8FA4/view",
    "create_url": "https://www.canva.com/design/DAE35hE8FA4/remix",
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    },
    "created_at": 1704110400,
    "updated_at": 1719835200
  }
}
```

Response from a successful publishBrandTemplate request. Contains the published brand template with all its metadata. Note that the `thumbnail` field might be `null` initially as thumbnails are generated asynchronously.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brand_template|[BrandTemplate](#schemabrandtemplate)|true|none|An object representing a brand template with associated metadata.|

<h2 id="tocS_Capability">Capability</h2>
<!-- backwards compatibility -->
<a id="schemacapability"></a>
<a id="schema_Capability"></a>
<a id="tocScapability"></a>
<a id="tocscapability"></a>

```json
"analytics"
```

Some APIs are annotated with required capabilities. These endpoints require the user to
possess the required capabilities in order to be called successfully.

<h2 id="tocS_CreateCommentRequest">CreateCommentRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecommentrequest"></a>
<a id="schema_CreateCommentRequest"></a>
<a id="tocScreatecommentrequest"></a>
<a id="tocscreatecommentrequest"></a>

```json
{
  "attached_to": {
    "design_id": "DAFVztcvd9z",
    "type": "design"
  },
  "message": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
  "assignee_id": "oUnPjZ2k2yuhftbWF7873o"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attached_to|[CommentObjectInput](#schemacommentobjectinput)|true|none|An object containing identifying information for the design or other object you want to<br>attach the comment to.|
|message|string|true|none|The comment message. This is the comment body shown in the Canva UI.<br><br>You can also mention users in your message by specifying their User ID and Team ID<br>using the format `[user_id:team_id]`. If the `assignee_id` parameter is specified, you<br>must mention the assignee in the message.|
|assignee_id|string|false|none|Lets you assign the comment to a Canva user using their User ID. You _must_ mention the<br>assigned user in the `message`.|

<h2 id="tocS_CreateReplyV2Request">CreateReplyV2Request</h2>
<!-- backwards compatibility -->
<a id="schemacreatereplyv2request"></a>
<a id="schema_CreateReplyV2Request"></a>
<a id="tocScreatereplyv2request"></a>
<a id="tocscreatereplyv2request"></a>

```json
{
  "message_plaintext": "Thanks!"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message_plaintext|string|true|none|The comment message of the reply in plaintext. This is the reply comment shown in the Canva UI.<br><br>You can also mention users in your message by specifying their User ID and Team ID<br>using the format `[user_id:team_id]`.|

<h2 id="tocS_CreateCommentResponse">CreateCommentResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecommentresponse"></a>
<a id="schema_CreateCommentResponse"></a>
<a id="tocScreatecommentresponse"></a>
<a id="tocscreatecommentresponse"></a>

```json
{
  "comment": {
    "type": "parent",
    "id": "KeAbiEAjZEj",
    "attached_to": {
      "design_id": "DAFVztcvd9z",
      "type": "design"
    },
    "message": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
    "author": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    },
    "created_at": 1692928800,
    "updated_at": 1692928900,
    "mentions": {
      "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
        "user_id": "oUnPjZ2k2yuhftbWF7873o",
        "team_id": "oBpVhLW22VrqtwKgaayRbP",
        "display_name": "John Doe"
      }
    },
    "assignee": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    },
    "resolver": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|[ParentComment](#schemaparentcomment)|true|none|**Deprecated.** Data about the comment, including the message, author, and<br>the object (such as a design) the comment is attached to.|

<h2 id="tocS_CreateThreadResponse">CreateThreadResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatethreadresponse"></a>
<a id="schema_CreateThreadResponse"></a>
<a id="tocScreatethreadresponse"></a>
<a id="tocscreatethreadresponse"></a>

```json
{
  "thread": {
    "id": "KeAbiEAjZEj",
    "design_id": "DAFVztcvd9z",
    "thread_type": {
      "type": "comment",
      "content": {
        "plaintext": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
        "markdown": "*_Great work_* [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!"
      },
      "mentions": {
        "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
          "tag": "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP",
          "user": {
            "user_id": "oUnPjZ2k2yuhftbWF7873o",
            "team_id": "oBpVhLW22VrqtwKgaayRbP",
            "display_name": "John Doe"
          }
        }
      },
      "assignee": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      },
      "resolver": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      }
    },
    "author": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    },
    "created_at": 1692928800,
    "updated_at": 1692928900
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|thread|[Thread](#schemathread)|true|none|A discussion thread on a design.<br><br>The `type` of the thread can be found in the `thread_type` object, along with additional type-specific properties.<br>The `author` of the thread might be missing if that user account no longer exists.|

<h2 id="tocS_CreateThreadRequest">CreateThreadRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatethreadrequest"></a>
<a id="schema_CreateThreadRequest"></a>
<a id="tocScreatethreadrequest"></a>
<a id="tocscreatethreadrequest"></a>

```json
{
  "message_plaintext": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
  "assignee_id": "oUnPjZ2k2yuhftbWF7873o"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message_plaintext|string|true|none|The comment message in plaintext. This is the comment body shown in the Canva UI.<br><br>You can also mention users in your message by specifying their User ID and Team ID<br>using the format `[user_id:team_id]`. If the `assignee_id` parameter is specified, you<br>must mention the assignee in the message.|
|assignee_id|string|false|none|Lets you assign the comment to a Canva user using their User ID. You _must_ mention the<br>assigned user in the `message`.|

<h2 id="tocS_CreateReplyV2Response">CreateReplyV2Response</h2>
<!-- backwards compatibility -->
<a id="schemacreatereplyv2response"></a>
<a id="schema_CreateReplyV2Response"></a>
<a id="tocScreatereplyv2response"></a>
<a id="tocscreatereplyv2response"></a>

```json
{
  "reply": {
    "id": "KeAZEAjijEb",
    "design_id": "DAFVztcvd9z",
    "thread_id": "KeAbiEAjZEj",
    "author": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    },
    "content": {
      "plaintext": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
      "markdown": "*_Great work_* [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!"
    },
    "mentions": {
      "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
        "tag": "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP",
        "user": {
          "user_id": "oUnPjZ2k2yuhftbWF7873o",
          "team_id": "oBpVhLW22VrqtwKgaayRbP",
          "display_name": "John Doe"
        }
      }
    },
    "created_at": 1692929800,
    "updated_at": 1692929900
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reply|[Reply](#schemareply)|true|none|A reply to a thread.<br><br>The `author` of the reply might be missing if that user account no longer exists.|

<h2 id="tocS_GetThreadResponse">GetThreadResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetthreadresponse"></a>
<a id="schema_GetThreadResponse"></a>
<a id="tocSgetthreadresponse"></a>
<a id="tocsgetthreadresponse"></a>

```json
{
  "comment": {
    "type": "parent",
    "id": "KeAbiEAjZEj",
    "attached_to": {
      "design_id": "DAFVztcvd9z",
      "type": "design"
    },
    "message": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
    "author": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    },
    "created_at": 1692928800,
    "updated_at": 1692928900,
    "mentions": {
      "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
        "user_id": "oUnPjZ2k2yuhftbWF7873o",
        "team_id": "oBpVhLW22VrqtwKgaayRbP",
        "display_name": "John Doe"
      }
    },
    "assignee": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    },
    "resolver": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    }
  },
  "thread": {
    "id": "KeAbiEAjZEj",
    "design_id": "DAFVztcvd9z",
    "thread_type": {
      "type": "comment",
      "content": {
        "plaintext": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
        "markdown": "*_Great work_* [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!"
      },
      "mentions": {
        "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
          "tag": "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP",
          "user": {
            "user_id": "oUnPjZ2k2yuhftbWF7873o",
            "team_id": "oBpVhLW22VrqtwKgaayRbP",
            "display_name": "John Doe"
          }
        }
      },
      "assignee": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      },
      "resolver": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      }
    },
    "author": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    },
    "created_at": 1692928800,
    "updated_at": 1692928900
  }
}
```

Successful response from a `getThread` request.

The `comment` property is deprecated.
For details of a comment thread, please use the `thread` property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|[Comment](#schemacomment)|false|none|**Deprecated.** The comment object, which contains metadata about the comment.<br>Deprecated in favor of the new `thread` object.|
|thread|[Thread](#schemathread)|false|none|A discussion thread on a design.<br><br>The `type` of the thread can be found in the `thread_type` object, along with additional type-specific properties.<br>The `author` of the thread might be missing if that user account no longer exists.|

<h2 id="tocS_GetReplyResponse">GetReplyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetreplyresponse"></a>
<a id="schema_GetReplyResponse"></a>
<a id="tocSgetreplyresponse"></a>
<a id="tocsgetreplyresponse"></a>

```json
{
  "reply": {
    "id": "KeAZEAjijEb",
    "design_id": "DAFVztcvd9z",
    "thread_id": "KeAbiEAjZEj",
    "author": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    },
    "content": {
      "plaintext": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
      "markdown": "*_Great work_* [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!"
    },
    "mentions": {
      "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
        "tag": "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP",
        "user": {
          "user_id": "oUnPjZ2k2yuhftbWF7873o",
          "team_id": "oBpVhLW22VrqtwKgaayRbP",
          "display_name": "John Doe"
        }
      }
    },
    "created_at": 1692929800,
    "updated_at": 1692929900
  }
}
```

Successful response from a `getReply` request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reply|[Reply](#schemareply)|true|none|A reply to a thread.<br><br>The `author` of the reply might be missing if that user account no longer exists.|

<h2 id="tocS_Comment">Comment</h2>
<!-- backwards compatibility -->
<a id="schemacomment"></a>
<a id="schema_Comment"></a>
<a id="tocScomment"></a>
<a id="tocscomment"></a>

```json
{
  "type": "parent",
  "id": "KeAbiEAjZEj",
  "attached_to": {
    "design_id": "DAFVztcvd9z",
    "type": "design"
  },
  "message": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
  "author": {
    "id": "uKakKUfI03Fg8k2gZ6OkT",
    "display_name": "John Doe"
  },
  "created_at": 1692928800,
  "updated_at": 1692928900,
  "mentions": {
    "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
      "user_id": "oUnPjZ2k2yuhftbWF7873o",
      "team_id": "oBpVhLW22VrqtwKgaayRbP",
      "display_name": "John Doe"
    }
  },
  "assignee": {
    "id": "uKakKUfI03Fg8k2gZ6OkT",
    "display_name": "John Doe"
  },
  "resolver": {
    "id": "uKakKUfI03Fg8k2gZ6OkT",
    "display_name": "John Doe"
  }
}
```

The comment object, which contains metadata about the comment.
Deprecated in favor of the new `thread` object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ParentComment](#schemaparentcomment)|false|none|**Deprecated.** Data about the comment, including the message, author, and<br>the object (such as a design) the comment is attached to.|
|*oneOf*|[ReplyComment](#schemareplycomment)|false|none|**Deprecated.** Data about the reply comment, including the message, author, and<br>the object (such as a design) the comment is attached to.|

<h2 id="tocS_ParentComment">ParentComment</h2>
<!-- backwards compatibility -->
<a id="schemaparentcomment"></a>
<a id="schema_ParentComment"></a>
<a id="tocSparentcomment"></a>
<a id="tocsparentcomment"></a>

```json
{
  "type": "parent",
  "id": "KeAbiEAjZEj",
  "attached_to": {
    "design_id": "DAFVztcvd9z",
    "type": "design"
  },
  "message": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
  "author": {
    "id": "uKakKUfI03Fg8k2gZ6OkT",
    "display_name": "John Doe"
  },
  "created_at": 1692928800,
  "updated_at": 1692928900,
  "mentions": {
    "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
      "user_id": "oUnPjZ2k2yuhftbWF7873o",
      "team_id": "oBpVhLW22VrqtwKgaayRbP",
      "display_name": "John Doe"
    }
  },
  "assignee": {
    "id": "uKakKUfI03Fg8k2gZ6OkT",
    "display_name": "John Doe"
  },
  "resolver": {
    "id": "uKakKUfI03Fg8k2gZ6OkT",
    "display_name": "John Doe"
  }
}
```

Data about the comment, including the message, author, and
the object (such as a design) the comment is attached to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|id|string|true|none|The ID of the comment.<br><br>You can use this ID to create replies to the comment using the [Create reply API](https://www.canva.dev/docs/apps/rest-apis/reference/comments/create-reply/).|
|attached_to|[CommentObject](#schemacommentobject)|false|none|**Deprecated.** Identifying information about the object (such as a design) that the comment is attached to.|
|message|string|true|none|The comment message. This is the comment body shown in the Canva UI.<br>User mentions are shown here in the format `[user_id:team_id]`.|
|author|[User](#schemauser)|true|none|Metadata for the user, consisting of the User ID and display name.|
|created_at|integer(int64)|false|none|When the comment or reply was created, as a Unix timestamp<br>(in seconds since the Unix Epoch).|
|updated_at|integer(int64)|false|none|When the comment or reply was last updated, as a Unix timestamp<br>(in seconds since the Unix Epoch).|
|mentions|object|true|none|**Deprecated.** The Canva users mentioned in the comment.|
|assignee|[User](#schemauser)|false|none|Metadata for the user, consisting of the User ID and display name.|
|resolver|[User](#schemauser)|false|none|Metadata for the user, consisting of the User ID and display name.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|parent|

<h2 id="tocS_ReplyComment">ReplyComment</h2>
<!-- backwards compatibility -->
<a id="schemareplycomment"></a>
<a id="schema_ReplyComment"></a>
<a id="tocSreplycomment"></a>
<a id="tocsreplycomment"></a>

```json
{
  "type": "reply",
  "id": "KeAZEAjijEb",
  "attached_to": {
    "design_id": "DAFVztcvd9z",
    "type": "design"
  },
  "message": "Thanks!",
  "author": {
    "id": "uKakKUfI03Fg8k2gZ6OkT",
    "display_name": "John Doe"
  },
  "created_at": 1692929800,
  "updated_at": 1692929900,
  "mentions": {
    "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
      "user_id": "oUnPjZ2k2yuhftbWF7873o",
      "team_id": "oBpVhLW22VrqtwKgaayRbP",
      "display_name": "John Doe"
    }
  },
  "thread_id": "KeAbiEAjZEj"
}
```

Data about the reply comment, including the message, author, and
the object (such as a design) the comment is attached to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|id|string|true|none|The ID of the comment.|
|attached_to|[CommentObject](#schemacommentobject)|false|none|**Deprecated.** Identifying information about the object (such as a design) that the comment is attached to.|
|message|string|true|none|The comment message. This is the comment body shown in the Canva UI.<br>User mentions are shown here in the format `[user_id:team_id]`.|
|author|[User](#schemauser)|true|none|Metadata for the user, consisting of the User ID and display name.|
|created_at|integer(int64)|false|none|When the comment or reply was created, as a Unix timestamp<br>(in seconds since the Unix Epoch).|
|updated_at|integer(int64)|false|none|When the comment or reply was last updated, as a Unix timestamp<br>(in seconds since the Unix Epoch).|
|mentions|object|true|none|**Deprecated.** The Canva users mentioned in the comment.|
|thread_id|string|true|none|The ID of the comment thread this reply is in. This ID is the same as the `id` of the<br>parent comment.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|reply|

<h2 id="tocS_CommentObject">CommentObject</h2>
<!-- backwards compatibility -->
<a id="schemacommentobject"></a>
<a id="schema_CommentObject"></a>
<a id="tocScommentobject"></a>
<a id="tocscommentobject"></a>

```json
{
  "design_id": "DAFVztcvd9z",
  "type": "design"
}
```

Identifying information about the object (such as a design) that the comment is attached to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[DesignCommentObject](#schemadesigncommentobject)|false|none|**Deprecated.** If the comment is attached to a Canva Design.|

<h2 id="tocS_DesignCommentObject">DesignCommentObject</h2>
<!-- backwards compatibility -->
<a id="schemadesigncommentobject"></a>
<a id="schema_DesignCommentObject"></a>
<a id="tocSdesigncommentobject"></a>
<a id="tocsdesigncommentobject"></a>

```json
{
  "type": "design",
  "design_id": "DAFVztcvd9z"
}
```

If the comment is attached to a Canva Design.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|design_id|string|true|none|The ID of the design this comment is attached to.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|design|

<h2 id="tocS_CommentObjectInput">CommentObjectInput</h2>
<!-- backwards compatibility -->
<a id="schemacommentobjectinput"></a>
<a id="schema_CommentObjectInput"></a>
<a id="tocScommentobjectinput"></a>
<a id="tocscommentobjectinput"></a>

```json
{
  "design_id": "DAFVztcvd9z",
  "type": "design"
}
```

An object containing identifying information for the design or other object you want to
attach the comment to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[DesignCommentObjectInput](#schemadesigncommentobjectinput)|false|none|If the comment is attached to a Canva Design.|

<h2 id="tocS_DesignCommentObjectInput">DesignCommentObjectInput</h2>
<!-- backwards compatibility -->
<a id="schemadesigncommentobjectinput"></a>
<a id="schema_DesignCommentObjectInput"></a>
<a id="tocSdesigncommentobjectinput"></a>
<a id="tocsdesigncommentobjectinput"></a>

```json
{
  "type": "design",
  "design_id": "DAFVztcvd9z"
}
```

If the comment is attached to a Canva Design.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|design_id|string|true|none|The ID of the design you want to attach this comment to.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|design|

<h2 id="tocS_CommentEventDeprecated">CommentEventDeprecated</h2>
<!-- backwards compatibility -->
<a id="schemacommenteventdeprecated"></a>
<a id="schema_CommentEventDeprecated"></a>
<a id="tocScommenteventdeprecated"></a>
<a id="tocscommenteventdeprecated"></a>

```json
{
  "type": "comment",
  "data": {
    "type": "parent",
    "id": "KeAbiEAjZEj",
    "attached_to": {
      "design_id": "DAFVztcvd9z",
      "type": "design"
    },
    "message": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
    "author": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    },
    "created_at": 1692928800,
    "updated_at": 1692928900,
    "mentions": {
      "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
        "user_id": "oUnPjZ2k2yuhftbWF7873o",
        "team_id": "oBpVhLW22VrqtwKgaayRbP",
        "display_name": "John Doe"
      }
    },
    "assignee": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    },
    "resolver": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    }
  }
}
```

Basic details about the comment.

The `comment` property is deprecated.
For details of the comment event, use the `comment_event` property instead.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[CommentEventTypeEnum](#schemacommenteventtypeenum)|true|none|**Deprecated.** The type of comment event.|
|data|[Comment](#schemacomment)|true|none|**Deprecated.** The comment object, which contains metadata about the comment.<br>Deprecated in favor of the new `thread` object.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|comment|
|type|reply|
|type|mention|
|type|assign|
|type|resolve|

<h2 id="tocS_Mentions">Mentions</h2>
<!-- backwards compatibility -->
<a id="schemamentions"></a>
<a id="schema_Mentions"></a>
<a id="tocSmentions"></a>
<a id="tocsmentions"></a>

```json
{
  "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
    "user_id": "oUnPjZ2k2yuhftbWF7873o",
    "team_id": "oBpVhLW22VrqtwKgaayRbP",
    "display_name": "John Doe"
  }
}
```

The Canva users mentioned in the comment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[TeamUser](#schemateamuser)|false|none|Metadata for the user, consisting of the User ID, Team ID, and display name.|

<h2 id="tocS_CommentEventTypeEnum">CommentEventTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemacommenteventtypeenum"></a>
<a id="schema_CommentEventTypeEnum"></a>
<a id="tocScommenteventtypeenum"></a>
<a id="tocscommenteventtypeenum"></a>

```json
"comment"
```

The type of comment event.

<h2 id="tocS_CommentEvent">CommentEvent</h2>
<!-- backwards compatibility -->
<a id="schemacommentevent"></a>
<a id="schema_CommentEvent"></a>
<a id="tocScommentevent"></a>
<a id="tocscommentevent"></a>

```json
{
  "type": "new",
  "comment_url": "https://www.canva.com/design/3WCduQdjayTcPVM/z128cqanFu7E3/edit?ui=OdllGgZ4Snnq3MD8uI10bfA",
  "comment": {
    "id": "KeAbiEAjZEj",
    "design_id": "DAFVztcvd9z",
    "thread_type": {
      "type": "comment",
      "content": {
        "plaintext": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
        "markdown": "*_Great work_* [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!"
      },
      "mentions": {
        "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
          "tag": "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP",
          "user": {
            "user_id": "oUnPjZ2k2yuhftbWF7873o",
            "team_id": "oBpVhLW22VrqtwKgaayRbP",
            "display_name": "John Doe"
          }
        }
      },
      "assignee": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      },
      "resolver": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      }
    },
    "author": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    },
    "created_at": 1692928800,
    "updated_at": 1692928900
  }
}
```

The type of comment event, including additional type-specific properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[NewCommentEvent](#schemanewcommentevent)|false|none|Event type for a new comment thread.|
|*oneOf*|[AssignedCommentEvent](#schemaassignedcommentevent)|false|none|Event type for a comment thread that has been assigned.|
|*oneOf*|[ResolvedCommentEvent](#schemaresolvedcommentevent)|false|none|Event type for a comment thread that has been resolved.|
|*oneOf*|[ReplyCommentEvent](#schemareplycommentevent)|false|none|Event type for a reply to a comment thread.|
|*oneOf*|[MentionCommentEvent](#schemamentioncommentevent)|false|none|Event type for a mention in a comment thread or reply.|

<h2 id="tocS_NewCommentEvent">NewCommentEvent</h2>
<!-- backwards compatibility -->
<a id="schemanewcommentevent"></a>
<a id="schema_NewCommentEvent"></a>
<a id="tocSnewcommentevent"></a>
<a id="tocsnewcommentevent"></a>

```json
{
  "type": "new",
  "comment_url": "https://www.canva.com/design/3WCduQdjayTcPVM/z128cqanFu7E3/edit?ui=OdllGgZ4Snnq3MD8uI10bfA",
  "comment": {
    "id": "KeAbiEAjZEj",
    "design_id": "DAFVztcvd9z",
    "thread_type": {
      "type": "comment",
      "content": {
        "plaintext": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
        "markdown": "*_Great work_* [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!"
      },
      "mentions": {
        "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
          "tag": "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP",
          "user": {
            "user_id": "oUnPjZ2k2yuhftbWF7873o",
            "team_id": "oBpVhLW22VrqtwKgaayRbP",
            "display_name": "John Doe"
          }
        }
      },
      "assignee": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      },
      "resolver": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      }
    },
    "author": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    },
    "created_at": 1692928800,
    "updated_at": 1692928900
  }
}
```

Event type for a new comment thread.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|comment_url|string|true|none|A URL to the design, focused on the comment thread.|
|comment|[Thread](#schemathread)|true|none|A discussion thread on a design.<br><br>The `type` of the thread can be found in the `thread_type` object, along with additional type-specific properties.<br>The `author` of the thread might be missing if that user account no longer exists.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|new|

<h2 id="tocS_AssignedCommentEvent">AssignedCommentEvent</h2>
<!-- backwards compatibility -->
<a id="schemaassignedcommentevent"></a>
<a id="schema_AssignedCommentEvent"></a>
<a id="tocSassignedcommentevent"></a>
<a id="tocsassignedcommentevent"></a>

```json
{
  "type": "assigned",
  "comment_url": "https://www.canva.com/design/3WCduQdjayTcPVM/z128cqanFu7E3/edit?ui=OdllGgZ4Snnq3MD8uI10bfA",
  "comment": {
    "id": "KeAbiEAjZEj",
    "design_id": "DAFVztcvd9z",
    "thread_type": {
      "type": "comment",
      "content": {
        "plaintext": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
        "markdown": "*_Great work_* [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!"
      },
      "mentions": {
        "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
          "tag": "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP",
          "user": {
            "user_id": "oUnPjZ2k2yuhftbWF7873o",
            "team_id": "oBpVhLW22VrqtwKgaayRbP",
            "display_name": "John Doe"
          }
        }
      },
      "assignee": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      },
      "resolver": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      }
    },
    "author": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    },
    "created_at": 1692928800,
    "updated_at": 1692928900
  }
}
```

Event type for a comment thread that has been assigned.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|comment_url|string|true|none|A URL to the design, focused on the comment thread.|
|comment|[Thread](#schemathread)|true|none|A discussion thread on a design.<br><br>The `type` of the thread can be found in the `thread_type` object, along with additional type-specific properties.<br>The `author` of the thread might be missing if that user account no longer exists.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|assigned|

<h2 id="tocS_ResolvedCommentEvent">ResolvedCommentEvent</h2>
<!-- backwards compatibility -->
<a id="schemaresolvedcommentevent"></a>
<a id="schema_ResolvedCommentEvent"></a>
<a id="tocSresolvedcommentevent"></a>
<a id="tocsresolvedcommentevent"></a>

```json
{
  "type": "resolved",
  "comment_url": "https://www.canva.com/design/3WCduQdjayTcPVM/z128cqanFu7E3/edit?ui=OdllGgZ4Snnq3MD8uI10bfA",
  "comment": {
    "id": "KeAbiEAjZEj",
    "design_id": "DAFVztcvd9z",
    "thread_type": {
      "type": "comment",
      "content": {
        "plaintext": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
        "markdown": "*_Great work_* [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!"
      },
      "mentions": {
        "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
          "tag": "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP",
          "user": {
            "user_id": "oUnPjZ2k2yuhftbWF7873o",
            "team_id": "oBpVhLW22VrqtwKgaayRbP",
            "display_name": "John Doe"
          }
        }
      },
      "assignee": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      },
      "resolver": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      }
    },
    "author": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    },
    "created_at": 1692928800,
    "updated_at": 1692928900
  }
}
```

Event type for a comment thread that has been resolved.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|comment_url|string|true|none|A URL to the design, focused on the comment thread.|
|comment|[Thread](#schemathread)|true|none|A discussion thread on a design.<br><br>The `type` of the thread can be found in the `thread_type` object, along with additional type-specific properties.<br>The `author` of the thread might be missing if that user account no longer exists.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|resolved|

<h2 id="tocS_ReplyCommentEvent">ReplyCommentEvent</h2>
<!-- backwards compatibility -->
<a id="schemareplycommentevent"></a>
<a id="schema_ReplyCommentEvent"></a>
<a id="tocSreplycommentevent"></a>
<a id="tocsreplycommentevent"></a>

```json
{
  "type": "reply",
  "reply_url": "https://www.canva.com/design/3WCduQdjayTcPVM/z128cqanFu7E3/edit?ui=OdllGgZ4Snnq3MD8uI10bfA",
  "reply": {
    "id": "KeAZEAjijEb",
    "design_id": "DAFVztcvd9z",
    "thread_id": "KeAbiEAjZEj",
    "author": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    },
    "content": {
      "plaintext": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
      "markdown": "*_Great work_* [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!"
    },
    "mentions": {
      "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
        "tag": "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP",
        "user": {
          "user_id": "oUnPjZ2k2yuhftbWF7873o",
          "team_id": "oBpVhLW22VrqtwKgaayRbP",
          "display_name": "John Doe"
        }
      }
    },
    "created_at": 1692929800,
    "updated_at": 1692929900
  }
}
```

Event type for a reply to a comment thread.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|reply_url|string|true|none|A URL to the design, focused on the comment reply.|
|reply|[Reply](#schemareply)|true|none|A reply to a thread.<br><br>The `author` of the reply might be missing if that user account no longer exists.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|reply|

<h2 id="tocS_MentionCommentEvent">MentionCommentEvent</h2>
<!-- backwards compatibility -->
<a id="schemamentioncommentevent"></a>
<a id="schema_MentionCommentEvent"></a>
<a id="tocSmentioncommentevent"></a>
<a id="tocsmentioncommentevent"></a>

```json
{
  "type": "mention",
  "content": {
    "type": "thread",
    "comment_url": "https://www.canva.com/design/3WCduQdjayTcPVM/z128cqanFu7E3/edit?ui=OdllGgZ4Snnq3MD8uI10bfA",
    "comment": {
      "id": "KeAbiEAjZEj",
      "design_id": "DAFVztcvd9z",
      "thread_type": {
        "type": "comment",
        "content": {
          "plaintext": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
          "markdown": "*_Great work_* [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!"
        },
        "mentions": {
          "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
            "tag": "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP",
            "user": {
              "user_id": "oUnPjZ2k2yuhftbWF7873o",
              "team_id": "oBpVhLW22VrqtwKgaayRbP",
              "display_name": "John Doe"
            }
          }
        },
        "assignee": {
          "id": "uKakKUfI03Fg8k2gZ6OkT",
          "display_name": "John Doe"
        },
        "resolver": {
          "id": "uKakKUfI03Fg8k2gZ6OkT",
          "display_name": "John Doe"
        }
      },
      "author": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      },
      "created_at": 1692928800,
      "updated_at": 1692928900
    }
  }
}
```

Event type for a mention in a comment thread or reply.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|content|[MentionEventContent](#schemamentioneventcontent)|true|none|The type of mention event content, along with additional type-specific properties.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|mention|

<h2 id="tocS_MentionEventContent">MentionEventContent</h2>
<!-- backwards compatibility -->
<a id="schemamentioneventcontent"></a>
<a id="schema_MentionEventContent"></a>
<a id="tocSmentioneventcontent"></a>
<a id="tocsmentioneventcontent"></a>

```json
{
  "type": "thread",
  "comment_url": "https://www.canva.com/design/3WCduQdjayTcPVM/z128cqanFu7E3/edit?ui=OdllGgZ4Snnq3MD8uI10bfA",
  "comment": {
    "id": "KeAbiEAjZEj",
    "design_id": "DAFVztcvd9z",
    "thread_type": {
      "type": "comment",
      "content": {
        "plaintext": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
        "markdown": "*_Great work_* [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!"
      },
      "mentions": {
        "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
          "tag": "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP",
          "user": {
            "user_id": "oUnPjZ2k2yuhftbWF7873o",
            "team_id": "oBpVhLW22VrqtwKgaayRbP",
            "display_name": "John Doe"
          }
        }
      },
      "assignee": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      },
      "resolver": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      }
    },
    "author": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    },
    "created_at": 1692928800,
    "updated_at": 1692928900
  }
}
```

The type of mention event content, along with additional type-specific properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ThreadMentionEventContent](#schemathreadmentioneventcontent)|false|none|Content for a mention in a comment thread.|
|*oneOf*|[ReplyMentionEventContent](#schemareplymentioneventcontent)|false|none|Content for a mention in a comment reply.|

<h2 id="tocS_ThreadMentionEventContent">ThreadMentionEventContent</h2>
<!-- backwards compatibility -->
<a id="schemathreadmentioneventcontent"></a>
<a id="schema_ThreadMentionEventContent"></a>
<a id="tocSthreadmentioneventcontent"></a>
<a id="tocsthreadmentioneventcontent"></a>

```json
{
  "type": "thread",
  "comment_url": "https://www.canva.com/design/3WCduQdjayTcPVM/z128cqanFu7E3/edit?ui=OdllGgZ4Snnq3MD8uI10bfA",
  "comment": {
    "id": "KeAbiEAjZEj",
    "design_id": "DAFVztcvd9z",
    "thread_type": {
      "type": "comment",
      "content": {
        "plaintext": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
        "markdown": "*_Great work_* [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!"
      },
      "mentions": {
        "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
          "tag": "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP",
          "user": {
            "user_id": "oUnPjZ2k2yuhftbWF7873o",
            "team_id": "oBpVhLW22VrqtwKgaayRbP",
            "display_name": "John Doe"
          }
        }
      },
      "assignee": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      },
      "resolver": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      }
    },
    "author": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    },
    "created_at": 1692928800,
    "updated_at": 1692928900
  }
}
```

Content for a mention in a comment thread.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|comment_url|string|true|none|A URL to the design, focused on the comment thread.|
|comment|[Thread](#schemathread)|true|none|A discussion thread on a design.<br><br>The `type` of the thread can be found in the `thread_type` object, along with additional type-specific properties.<br>The `author` of the thread might be missing if that user account no longer exists.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|thread|

<h2 id="tocS_ReplyMentionEventContent">ReplyMentionEventContent</h2>
<!-- backwards compatibility -->
<a id="schemareplymentioneventcontent"></a>
<a id="schema_ReplyMentionEventContent"></a>
<a id="tocSreplymentioneventcontent"></a>
<a id="tocsreplymentioneventcontent"></a>

```json
{
  "type": "reply",
  "reply_url": "https://www.canva.com/design/3WCduQdjayTcPVM/z128cqanFu7E3/edit?ui=OdllGgZ4Snnq3MD8uI10bfA",
  "reply": {
    "id": "KeAZEAjijEb",
    "design_id": "DAFVztcvd9z",
    "thread_id": "KeAbiEAjZEj",
    "author": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    },
    "content": {
      "plaintext": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
      "markdown": "*_Great work_* [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!"
    },
    "mentions": {
      "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
        "tag": "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP",
        "user": {
          "user_id": "oUnPjZ2k2yuhftbWF7873o",
          "team_id": "oBpVhLW22VrqtwKgaayRbP",
          "display_name": "John Doe"
        }
      }
    },
    "created_at": 1692929800,
    "updated_at": 1692929900
  }
}
```

Content for a mention in a comment reply.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|reply_url|string|true|none|A URL to the design, focused on the comment reply.|
|reply|[Reply](#schemareply)|true|none|A reply to a thread.<br><br>The `author` of the reply might be missing if that user account no longer exists.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|reply|

<h2 id="tocS_ListRepliesResponse">ListRepliesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrepliesresponse"></a>
<a id="schema_ListRepliesResponse"></a>
<a id="tocSlistrepliesresponse"></a>
<a id="tocslistrepliesresponse"></a>

```json
{
  "continuation": "RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN",
  "items": [
    {
      "id": "KeAZEAjijEb",
      "design_id": "DAFVztcvd9z",
      "thread_id": "KeAbiEAjZEj",
      "author": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      },
      "content": {
        "plaintext": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
        "markdown": "*_Great work_* [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!"
      },
      "mentions": {
        "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
          "tag": "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP",
          "user": {
            "user_id": "oUnPjZ2k2yuhftbWF7873o",
            "team_id": "oBpVhLW22VrqtwKgaayRbP",
            "display_name": "John Doe"
          }
        }
      },
      "created_at": 1692929800,
      "updated_at": 1692929900
    }
  ]
}
```

Successful response from a `listReplies` request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|continuation|string|false|none|If the success response contains a continuation token, the list contains more items<br>you can list. You can use this token as a query parameter and retrieve more items<br>from the list, for example `?continuation={continuation}`.<br><br>To retrieve all items, you might need to make multiple requests.|
|items|[[Reply](#schemareply)]|true|none|none|

<h2 id="tocS_Thread">Thread</h2>
<!-- backwards compatibility -->
<a id="schemathread"></a>
<a id="schema_Thread"></a>
<a id="tocSthread"></a>
<a id="tocsthread"></a>

```json
{
  "id": "KeAbiEAjZEj",
  "design_id": "DAFVztcvd9z",
  "thread_type": {
    "type": "comment",
    "content": {
      "plaintext": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
      "markdown": "*_Great work_* [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!"
    },
    "mentions": {
      "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
        "tag": "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP",
        "user": {
          "user_id": "oUnPjZ2k2yuhftbWF7873o",
          "team_id": "oBpVhLW22VrqtwKgaayRbP",
          "display_name": "John Doe"
        }
      }
    },
    "assignee": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    },
    "resolver": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    }
  },
  "author": {
    "id": "uKakKUfI03Fg8k2gZ6OkT",
    "display_name": "John Doe"
  },
  "created_at": 1692928800,
  "updated_at": 1692928900
}
```

A discussion thread on a design.

The `type` of the thread can be found in the `thread_type` object, along with additional type-specific properties.
The `author` of the thread might be missing if that user account no longer exists.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the thread.<br><br>You can use this ID to create replies to the thread using the [Create reply API](https://www.canva.dev/docs/apps/rest-apis/reference/comments/create-reply/).|
|design_id|string|true|none|The ID of the design that the discussion thread is on.|
|thread_type|[ThreadType](#schemathreadtype)|true|none|The type of the discussion thread, along with additional type-specific properties.|
|author|[User](#schemauser)|false|none|Metadata for the user, consisting of the User ID and display name.|
|created_at|integer(int64)|true|none|When the thread was created, as a Unix timestamp<br>(in seconds since the Unix Epoch).|
|updated_at|integer(int64)|true|none|When the thread was last updated, as a Unix timestamp<br>(in seconds since the Unix Epoch).|

<h2 id="tocS_ThreadType">ThreadType</h2>
<!-- backwards compatibility -->
<a id="schemathreadtype"></a>
<a id="schema_ThreadType"></a>
<a id="tocSthreadtype"></a>
<a id="tocsthreadtype"></a>

```json
{
  "type": "comment",
  "content": {
    "plaintext": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
    "markdown": "*_Great work_* [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!"
  },
  "mentions": {
    "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
      "tag": "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP",
      "user": {
        "user_id": "oUnPjZ2k2yuhftbWF7873o",
        "team_id": "oBpVhLW22VrqtwKgaayRbP",
        "display_name": "John Doe"
      }
    }
  },
  "assignee": {
    "id": "uKakKUfI03Fg8k2gZ6OkT",
    "display_name": "John Doe"
  },
  "resolver": {
    "id": "uKakKUfI03Fg8k2gZ6OkT",
    "display_name": "John Doe"
  }
}
```

The type of the discussion thread, along with additional type-specific properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[CommentThreadType](#schemacommentthreadtype)|false|none|A comment thread.|
|*oneOf*|[SuggestionThreadType](#schemasuggestionthreadtype)|false|none|A suggestion thread.|

<h2 id="tocS_CommentThreadType">CommentThreadType</h2>
<!-- backwards compatibility -->
<a id="schemacommentthreadtype"></a>
<a id="schema_CommentThreadType"></a>
<a id="tocScommentthreadtype"></a>
<a id="tocscommentthreadtype"></a>

```json
{
  "type": "comment",
  "content": {
    "plaintext": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
    "markdown": "*_Great work_* [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!"
  },
  "mentions": {
    "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
      "tag": "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP",
      "user": {
        "user_id": "oUnPjZ2k2yuhftbWF7873o",
        "team_id": "oBpVhLW22VrqtwKgaayRbP",
        "display_name": "John Doe"
      }
    }
  },
  "assignee": {
    "id": "uKakKUfI03Fg8k2gZ6OkT",
    "display_name": "John Doe"
  },
  "resolver": {
    "id": "uKakKUfI03Fg8k2gZ6OkT",
    "display_name": "John Doe"
  }
}
```

A comment thread.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|content|[CommentContent](#schemacommentcontent)|true|none|The content of a comment thread or reply.|
|mentions|object|true|none|The Canva users mentioned in the comment thread or reply.|
|assignee|[User](#schemauser)|false|none|Metadata for the user, consisting of the User ID and display name.|
|resolver|[User](#schemauser)|false|none|Metadata for the user, consisting of the User ID and display name.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|comment|

<h2 id="tocS_SuggestionThreadType">SuggestionThreadType</h2>
<!-- backwards compatibility -->
<a id="schemasuggestionthreadtype"></a>
<a id="schema_SuggestionThreadType"></a>
<a id="tocSsuggestionthreadtype"></a>
<a id="tocssuggestionthreadtype"></a>

```json
{
  "type": "suggestion",
  "suggested_edits": [
    {
      "type": "add",
      "text": "fantastic"
    }
  ],
  "status": "open"
}
```

A suggestion thread.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|suggested_edits|[[SuggestedEdit](#schemasuggestededit)]|true|none|none|
|status|[SuggestionStatus](#schemasuggestionstatus)|true|none|The current status of the suggestion.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|suggestion|
|status|open|
|status|accepted|
|status|rejected|

<h2 id="tocS_SuggestedEdit">SuggestedEdit</h2>
<!-- backwards compatibility -->
<a id="schemasuggestededit"></a>
<a id="schema_SuggestedEdit"></a>
<a id="tocSsuggestededit"></a>
<a id="tocssuggestededit"></a>

```json
{
  "type": "add",
  "text": "fantastic"
}
```

The type of the suggested edit, along with additional type-specific properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[AddSuggestedEdit](#schemaaddsuggestededit)|false|none|A suggestion to add some text.|
|*oneOf*|[DeleteSuggestedEdit](#schemadeletesuggestededit)|false|none|A suggestion to delete some text.|
|*oneOf*|[FormatSuggestedEdit](#schemaformatsuggestededit)|false|none|A suggestion to format some text.|

<h2 id="tocS_AddSuggestedEdit">AddSuggestedEdit</h2>
<!-- backwards compatibility -->
<a id="schemaaddsuggestededit"></a>
<a id="schema_AddSuggestedEdit"></a>
<a id="tocSaddsuggestededit"></a>
<a id="tocsaddsuggestededit"></a>

```json
{
  "type": "add",
  "text": "fantastic"
}
```

A suggestion to add some text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|text|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|add|

<h2 id="tocS_DeleteSuggestedEdit">DeleteSuggestedEdit</h2>
<!-- backwards compatibility -->
<a id="schemadeletesuggestededit"></a>
<a id="schema_DeleteSuggestedEdit"></a>
<a id="tocSdeletesuggestededit"></a>
<a id="tocsdeletesuggestededit"></a>

```json
{
  "type": "delete",
  "text": "just"
}
```

A suggestion to delete some text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|text|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|delete|

<h2 id="tocS_FormatSuggestedEdit">FormatSuggestedEdit</h2>
<!-- backwards compatibility -->
<a id="schemaformatsuggestededit"></a>
<a id="schema_FormatSuggestedEdit"></a>
<a id="tocSformatsuggestededit"></a>
<a id="tocsformatsuggestededit"></a>

```json
{
  "type": "format",
  "format": "font_style"
}
```

A suggestion to format some text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|format|[SuggestionFormat](#schemasuggestionformat)|true|none|The suggested format change.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|format|
|format|font_family|
|format|font_size|
|format|font_weight|
|format|font_style|
|format|color|
|format|background_color|
|format|decoration|
|format|strikethrough|
|format|link|
|format|letter_spacing|
|format|line_height|
|format|direction|
|format|text_align|
|format|list_marker|
|format|list_level|
|format|margin_inline_start|
|format|text_indent|
|format|font_size_modifier|
|format|vertical_align|

<h2 id="tocS_SuggestionStatus">SuggestionStatus</h2>
<!-- backwards compatibility -->
<a id="schemasuggestionstatus"></a>
<a id="schema_SuggestionStatus"></a>
<a id="tocSsuggestionstatus"></a>
<a id="tocssuggestionstatus"></a>

```json
"open"
```

The current status of the suggestion.

<h2 id="tocS_SuggestionFormat">SuggestionFormat</h2>
<!-- backwards compatibility -->
<a id="schemasuggestionformat"></a>
<a id="schema_SuggestionFormat"></a>
<a id="tocSsuggestionformat"></a>
<a id="tocssuggestionformat"></a>

```json
"font_style"
```

The suggested format change.

<h2 id="tocS_Reply">Reply</h2>
<!-- backwards compatibility -->
<a id="schemareply"></a>
<a id="schema_Reply"></a>
<a id="tocSreply"></a>
<a id="tocsreply"></a>

```json
{
  "id": "KeAZEAjijEb",
  "design_id": "DAFVztcvd9z",
  "thread_id": "KeAbiEAjZEj",
  "author": {
    "id": "uKakKUfI03Fg8k2gZ6OkT",
    "display_name": "John Doe"
  },
  "content": {
    "plaintext": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
    "markdown": "*_Great work_* [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!"
  },
  "mentions": {
    "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
      "tag": "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP",
      "user": {
        "user_id": "oUnPjZ2k2yuhftbWF7873o",
        "team_id": "oBpVhLW22VrqtwKgaayRbP",
        "display_name": "John Doe"
      }
    }
  },
  "created_at": 1692929800,
  "updated_at": 1692929900
}
```

A reply to a thread.

The `author` of the reply might be missing if that user account no longer exists.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the reply.|
|design_id|string|true|none|The ID of the design that the thread for this reply is attached to.|
|thread_id|string|true|none|The ID of the thread this reply is in.|
|author|[User](#schemauser)|false|none|Metadata for the user, consisting of the User ID and display name.|
|content|[CommentContent](#schemacommentcontent)|true|none|The content of a comment thread or reply.|
|mentions|object|true|none|The Canva users mentioned in the comment thread or reply.|
|created_at|integer(int64)|true|none|When the reply was created, as a Unix timestamp<br>(in seconds since the Unix Epoch).|
|updated_at|integer(int64)|true|none|When the reply was last updated, as a Unix timestamp<br>(in seconds since the Unix Epoch).|

<h2 id="tocS_CommentContent">CommentContent</h2>
<!-- backwards compatibility -->
<a id="schemacommentcontent"></a>
<a id="schema_CommentContent"></a>
<a id="tocScommentcontent"></a>
<a id="tocscommentcontent"></a>

```json
{
  "plaintext": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
  "markdown": "*_Great work_* [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!"
}
```

The content of a comment thread or reply.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|plaintext|string|true|none|The content in plaintext.<br>Any user mention tags are shown in the format `[user_id:team_id]`.|
|markdown|string|false|none|The content in markdown.<br>Any user mention tags are shown in the format `[user_id:team_id]`|

<h2 id="tocS_SuggestionEventType">SuggestionEventType</h2>
<!-- backwards compatibility -->
<a id="schemasuggestioneventtype"></a>
<a id="schema_SuggestionEventType"></a>
<a id="tocSsuggestioneventtype"></a>
<a id="tocssuggestioneventtype"></a>

```json
{
  "type": "new",
  "suggestion_url": "https://www.canva.com/design/3WCduQdjayTcPVM/z128cqanFu7E3/edit?ui=OdllGgZ4Snnq3MD8uI10bfA",
  "suggestion": {
    "id": "KeAbiEAjZEj",
    "design_id": "DAFVztcvd9z",
    "thread_type": {
      "type": "comment",
      "content": {
        "plaintext": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
        "markdown": "*_Great work_* [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!"
      },
      "mentions": {
        "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
          "tag": "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP",
          "user": {
            "user_id": "oUnPjZ2k2yuhftbWF7873o",
            "team_id": "oBpVhLW22VrqtwKgaayRbP",
            "display_name": "John Doe"
          }
        }
      },
      "assignee": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      },
      "resolver": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      }
    },
    "author": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    },
    "created_at": 1692928800,
    "updated_at": 1692928900
  }
}
```

The type of suggestion event, along with additional type-specific properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[NewSuggestionEventType](#schemanewsuggestioneventtype)|false|none|Event type for a new suggestion.|
|*oneOf*|[AcceptedSuggestionEventType](#schemaacceptedsuggestioneventtype)|false|none|Event type for a suggestion that has been accepted.|
|*oneOf*|[RejectedSuggestionEventType](#schemarejectedsuggestioneventtype)|false|none|Event type for a suggestion that has been rejected.|
|*oneOf*|[ReplySuggestionEventType](#schemareplysuggestioneventtype)|false|none|Event type for a reply to a suggestion.|
|*oneOf*|[MentionSuggestionEventType](#schemamentionsuggestioneventtype)|false|none|Event type for a mention in a reply to a suggestion.|

<h2 id="tocS_NewSuggestionEventType">NewSuggestionEventType</h2>
<!-- backwards compatibility -->
<a id="schemanewsuggestioneventtype"></a>
<a id="schema_NewSuggestionEventType"></a>
<a id="tocSnewsuggestioneventtype"></a>
<a id="tocsnewsuggestioneventtype"></a>

```json
{
  "type": "new",
  "suggestion_url": "https://www.canva.com/design/3WCduQdjayTcPVM/z128cqanFu7E3/edit?ui=OdllGgZ4Snnq3MD8uI10bfA",
  "suggestion": {
    "id": "KeAbiEAjZEj",
    "design_id": "DAFVztcvd9z",
    "thread_type": {
      "type": "comment",
      "content": {
        "plaintext": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
        "markdown": "*_Great work_* [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!"
      },
      "mentions": {
        "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
          "tag": "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP",
          "user": {
            "user_id": "oUnPjZ2k2yuhftbWF7873o",
            "team_id": "oBpVhLW22VrqtwKgaayRbP",
            "display_name": "John Doe"
          }
        }
      },
      "assignee": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      },
      "resolver": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      }
    },
    "author": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    },
    "created_at": 1692928800,
    "updated_at": 1692928900
  }
}
```

Event type for a new suggestion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|suggestion_url|string|true|none|A URL to the design, focused on the suggestion.|
|suggestion|[Thread](#schemathread)|true|none|A discussion thread on a design.<br><br>The `type` of the thread can be found in the `thread_type` object, along with additional type-specific properties.<br>The `author` of the thread might be missing if that user account no longer exists.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|new|

<h2 id="tocS_AcceptedSuggestionEventType">AcceptedSuggestionEventType</h2>
<!-- backwards compatibility -->
<a id="schemaacceptedsuggestioneventtype"></a>
<a id="schema_AcceptedSuggestionEventType"></a>
<a id="tocSacceptedsuggestioneventtype"></a>
<a id="tocsacceptedsuggestioneventtype"></a>

```json
{
  "type": "accepted",
  "suggestion_url": "https://www.canva.com/design/3WCduQdjayTcPVM/z128cqanFu7E3/edit?ui=OdllGgZ4Snnq3MD8uI10bfA",
  "suggestion": {
    "id": "KeAbiEAjZEj",
    "design_id": "DAFVztcvd9z",
    "thread_type": {
      "type": "comment",
      "content": {
        "plaintext": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
        "markdown": "*_Great work_* [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!"
      },
      "mentions": {
        "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
          "tag": "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP",
          "user": {
            "user_id": "oUnPjZ2k2yuhftbWF7873o",
            "team_id": "oBpVhLW22VrqtwKgaayRbP",
            "display_name": "John Doe"
          }
        }
      },
      "assignee": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      },
      "resolver": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      }
    },
    "author": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    },
    "created_at": 1692928800,
    "updated_at": 1692928900
  }
}
```

Event type for a suggestion that has been accepted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|suggestion_url|string|true|none|A URL to the design, focused on the suggestion.|
|suggestion|[Thread](#schemathread)|true|none|A discussion thread on a design.<br><br>The `type` of the thread can be found in the `thread_type` object, along with additional type-specific properties.<br>The `author` of the thread might be missing if that user account no longer exists.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|accepted|

<h2 id="tocS_RejectedSuggestionEventType">RejectedSuggestionEventType</h2>
<!-- backwards compatibility -->
<a id="schemarejectedsuggestioneventtype"></a>
<a id="schema_RejectedSuggestionEventType"></a>
<a id="tocSrejectedsuggestioneventtype"></a>
<a id="tocsrejectedsuggestioneventtype"></a>

```json
{
  "type": "rejected",
  "suggestion_url": "https://www.canva.com/design/3WCduQdjayTcPVM/z128cqanFu7E3/edit?ui=OdllGgZ4Snnq3MD8uI10bfA",
  "suggestion": {
    "id": "KeAbiEAjZEj",
    "design_id": "DAFVztcvd9z",
    "thread_type": {
      "type": "comment",
      "content": {
        "plaintext": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
        "markdown": "*_Great work_* [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!"
      },
      "mentions": {
        "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
          "tag": "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP",
          "user": {
            "user_id": "oUnPjZ2k2yuhftbWF7873o",
            "team_id": "oBpVhLW22VrqtwKgaayRbP",
            "display_name": "John Doe"
          }
        }
      },
      "assignee": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      },
      "resolver": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      }
    },
    "author": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    },
    "created_at": 1692928800,
    "updated_at": 1692928900
  }
}
```

Event type for a suggestion that has been rejected.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|suggestion_url|string|true|none|A URL to the design, focused on the suggestion.|
|suggestion|[Thread](#schemathread)|true|none|A discussion thread on a design.<br><br>The `type` of the thread can be found in the `thread_type` object, along with additional type-specific properties.<br>The `author` of the thread might be missing if that user account no longer exists.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|rejected|

<h2 id="tocS_ReplySuggestionEventType">ReplySuggestionEventType</h2>
<!-- backwards compatibility -->
<a id="schemareplysuggestioneventtype"></a>
<a id="schema_ReplySuggestionEventType"></a>
<a id="tocSreplysuggestioneventtype"></a>
<a id="tocsreplysuggestioneventtype"></a>

```json
{
  "type": "reply",
  "reply_url": "https://www.canva.com/design/3WCduQdjayTcPVM/z128cqanFu7E3/edit?ui=OdllGgZ4Snnq3MD8uI10bfA",
  "reply": {
    "id": "KeAZEAjijEb",
    "design_id": "DAFVztcvd9z",
    "thread_id": "KeAbiEAjZEj",
    "author": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    },
    "content": {
      "plaintext": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
      "markdown": "*_Great work_* [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!"
    },
    "mentions": {
      "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
        "tag": "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP",
        "user": {
          "user_id": "oUnPjZ2k2yuhftbWF7873o",
          "team_id": "oBpVhLW22VrqtwKgaayRbP",
          "display_name": "John Doe"
        }
      }
    },
    "created_at": 1692929800,
    "updated_at": 1692929900
  }
}
```

Event type for a reply to a suggestion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|reply_url|string|true|none|A URL to the design, focused on the suggestion reply.|
|reply|[Reply](#schemareply)|true|none|A reply to a thread.<br><br>The `author` of the reply might be missing if that user account no longer exists.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|reply|

<h2 id="tocS_MentionSuggestionEventType">MentionSuggestionEventType</h2>
<!-- backwards compatibility -->
<a id="schemamentionsuggestioneventtype"></a>
<a id="schema_MentionSuggestionEventType"></a>
<a id="tocSmentionsuggestioneventtype"></a>
<a id="tocsmentionsuggestioneventtype"></a>

```json
{
  "type": "mention",
  "reply_url": "https://www.canva.com/design/3WCduQdjayTcPVM/z128cqanFu7E3/edit?ui=OdllGgZ4Snnq3MD8uI10bfA",
  "reply": {
    "id": "KeAZEAjijEb",
    "design_id": "DAFVztcvd9z",
    "thread_id": "KeAbiEAjZEj",
    "author": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    },
    "content": {
      "plaintext": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
      "markdown": "*_Great work_* [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!"
    },
    "mentions": {
      "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
        "tag": "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP",
        "user": {
          "user_id": "oUnPjZ2k2yuhftbWF7873o",
          "team_id": "oBpVhLW22VrqtwKgaayRbP",
          "display_name": "John Doe"
        }
      }
    },
    "created_at": 1692929800,
    "updated_at": 1692929900
  }
}
```

Event type for a mention in a reply to a suggestion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|reply_url|string|true|none|A URL to the design, focused on the suggestion reply.|
|reply|[Reply](#schemareply)|true|none|A reply to a thread.<br><br>The `author` of the reply might be missing if that user account no longer exists.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|mention|

<h2 id="tocS_UserMentions">UserMentions</h2>
<!-- backwards compatibility -->
<a id="schemausermentions"></a>
<a id="schema_UserMentions"></a>
<a id="tocSusermentions"></a>
<a id="tocsusermentions"></a>

```json
{
  "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
    "tag": "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP",
    "user": {
      "user_id": "oUnPjZ2k2yuhftbWF7873o",
      "team_id": "oBpVhLW22VrqtwKgaayRbP",
      "display_name": "John Doe"
    }
  }
}
```

The Canva users mentioned in the comment thread or reply.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[UserMention](#schemausermention)|false|none|Information about the user mentioned in a comment thread or reply. Each user mention is keyed using the user's user ID and team ID separated by a colon (`user_id:team_id`).|

<h2 id="tocS_UserMention">UserMention</h2>
<!-- backwards compatibility -->
<a id="schemausermention"></a>
<a id="schema_UserMention"></a>
<a id="tocSusermention"></a>
<a id="tocsusermention"></a>

```json
{
  "tag": "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP",
  "user": {
    "user_id": "auDAbliZ2rQNNOsUl5OLu",
    "team_id": "Oi2RJILTrKk0KRhRUZozX",
    "display_name": "Jane Doe"
  }
}
```

Information about the user mentioned in a comment thread or reply. Each user mention is keyed using the user's user ID and team ID separated by a colon (`user_id:team_id`).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tag|string|true|none|The mention tag for the user mentioned in the comment thread or reply content. This has the format of the user's user ID and team ID separated by a colon (`user_id:team_id`).|
|user|[TeamUser](#schemateamuser)|true|none|Metadata for the user, consisting of the User ID, Team ID, and display name.|

<h2 id="tocS_GetSigningPublicKeysResponse">GetSigningPublicKeysResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsigningpublickeysresponse"></a>
<a id="schema_GetSigningPublicKeysResponse"></a>
<a id="tocSgetsigningpublickeysresponse"></a>
<a id="tocsgetsigningpublickeysresponse"></a>

```json
{
  "keys": [
    {
      "kid": "a418dc7d-ecc5-5c4b-85ce-e1104a8addbe",
      "kty": "OKP",
      "crv": "Ed25519",
      "x": "aIQtqd0nDfB-ug0DrzZbwTum-1ITdXvKxGFak_1VB2j"
    },
    {
      "kid": "c8de5bec1-1b88-4ddaae04acc-ce415-5d7",
      "kty": "OKP",
      "crv": "Ed25519",
      "x": "m2d1FT-gfBXxIzKwdQVTra0D-aBq_ubZ1jI0GuvkDtn"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keys|[[EdDsaJwk](#schemaeddsajwk)]|true|none|A Json Web Key Set (JWKS) with public keys used for signing webhooks. You can use this JWKS<br>to verify that a webhook was sent from Canva.|

<h2 id="tocS_EdDsaJwk">EdDsaJwk</h2>
<!-- backwards compatibility -->
<a id="schemaeddsajwk"></a>
<a id="schema_EdDsaJwk"></a>
<a id="tocSeddsajwk"></a>
<a id="tocseddsajwk"></a>

```json
{
  "kid": "string",
  "kty": "string",
  "crv": "string",
  "x": "string"
}
```

A JSON Web Key Set (JWKS) using the Edwards-curve Digital Signature Algorithm (EdDSA), as
described in [RFC-8037](https://www.rfc-editor.org/rfc/rfc8037.html#appendix-A).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kid|string|true|none|The `kid` (key ID) is a unique identifier for a public key. When the keys used<br>to sign webhooks are rotated, you can use this ID to select the correct key<br>within a JWK Set during the key rollover. The `kid` value is case-sensitive.|
|kty|string|true|none|The `kty` (key type) identifies the cryptographic algorithm family used with<br>the key, such as "RSA" or "EC". Only Octet Key Pairs<br>(`OKPs`) are supported.<br>The `kty` value is case-sensitive. For more information on the `kty` property<br>and OKPs, see [RFC-8037 — "kty" (Key Type)<br>Parameter](https://www.rfc-editor.org/rfc/rfc8037.html#section-2).|
|crv|string|true|none|The `crv` (curve) property identifies the curve used for elliptical curve<br>encryptions. Only "Ed25519" is supported. For more information on the `crv`<br>property, see [RFC-8037 — Key Type<br>"OKP"](https://www.rfc-editor.org/rfc/rfc8037.html#section-2).|
|x|string|true|none|The `x` property is the public key of an elliptical curve encryption. The key<br>is Base64urlUInt-encoded. For more information on the `x` property, see<br>[RFC-8037 — "x" (X Coordinate)<br>Parameter](https://www.rfc-editor.org/rfc/rfc8037#section-2).|

<h2 id="tocS_DataTable">DataTable</h2>
<!-- backwards compatibility -->
<a id="schemadatatable"></a>
<a id="schema_DataTable"></a>
<a id="tocSdatatable"></a>
<a id="tocsdatatable"></a>

```json
{
  "column_configs": [
    {
      "name": "Geographic Region",
      "type": "string"
    },
    {
      "name": "Sales (millions AUD)",
      "type": "number"
    },
    {
      "name": "Target (millions AUD)",
      "type": "number"
    },
    {
      "name": "Target met?",
      "type": "boolean"
    },
    {
      "name": "Date met",
      "type": "date"
    },
    {
      "name": "Logo",
      "type": "media"
    }
  ],
  "rows": [
    {
      "cells": [
        {
          "type": "string",
          "value": "Asia Pacific"
        },
        {
          "type": "number",
          "value": 10.2,
          "metadata": {
            "formatting": "#,##0.0"
          }
        },
        {
          "type": "number",
          "value": 10,
          "metadata": {
            "formatting": "#,##0.0"
          }
        },
        {
          "type": "boolean",
          "value": true
        },
        {
          "type": "date",
          "value": 1721944387
        },
        {
          "type": "media",
          "value": [
            {
              "type": "image_upload",
              "url": "https://example.com/apac-logo.png",
              "thumbnail_url": "https://example.com/apac-logo-thumb.png",
              "mime_type": "image/png",
              "ai_disclosure": "none"
            },
            {
              "type": "video_upload",
              "url": "https://example.com/apac-logo.mp4",
              "thumbnail_image_url": "https://example.com/apac-logo-thumb.png",
              "thumbnail_video_url": "https://example.com/apac-logo-thumb.mp4",
              "mime_type": "video/mp4",
              "ai_disclosure": "none"
            }
          ]
        }
      ]
    },
    {
      "cells": [
        {
          "type": "string",
          "value": "EMEA"
        },
        {
          "type": "number",
          "value": 13.8,
          "metadata": {
            "formatting": "#,##0.0"
          }
        },
        {
          "type": "number",
          "value": 14,
          "metadata": {
            "formatting": "#,##0.0"
          }
        },
        {
          "type": "boolean",
          "value": false
        },
        {
          "type": "date"
        },
        {
          "type": "media",
          "value": []
        }
      ]
    }
  ]
}
```

Tabular data, structured in rows of cells.

- Each cell must have a data type configured.
- All rows must have the same number of cells.
- The number of entries in `column_configs` must match the number of columns in the data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|column_configs|[[ColumnConfig](#schemacolumnconfig)]|false|none|Column definitions with names and data types.|
|rows|[[DataTableRow](#schemadatatablerow)]|true|none|Rows of data.|

<h2 id="tocS_ColumnConfig">ColumnConfig</h2>
<!-- backwards compatibility -->
<a id="schemacolumnconfig"></a>
<a id="schema_ColumnConfig"></a>
<a id="tocScolumnconfig"></a>
<a id="tocscolumnconfig"></a>

```json
{
  "name": "string",
  "type": "string"
}
```

Configuration for a data table column.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name for the column, displayed as header text.|
|type|[ColumnDataType](#schemacolumndatatype)|true|none|Expected data type for cells in this column.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|string|
|type|number|
|type|date|
|type|boolean|
|type|media|
|type|variant|

<h2 id="tocS_ColumnDataType">ColumnDataType</h2>
<!-- backwards compatibility -->
<a id="schemacolumndatatype"></a>
<a id="schema_ColumnDataType"></a>
<a id="tocScolumndatatype"></a>
<a id="tocscolumndatatype"></a>

```json
"string"
```

Expected data type for cells in this column.

<h2 id="tocS_DataTableRow">DataTableRow</h2>
<!-- backwards compatibility -->
<a id="schemadatatablerow"></a>
<a id="schema_DataTableRow"></a>
<a id="tocSdatatablerow"></a>
<a id="tocsdatatablerow"></a>

```json
{
  "cells": [
    {
      "type": "string",
      "value": "string"
    }
  ]
}
```

A single row of tabular data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cells|[[DataTableCell](#schemadatatablecell)]|true|none|Cells of data in row.<br><br>All rows must have the same number of cells.|

<h2 id="tocS_DataTableCell">DataTableCell</h2>
<!-- backwards compatibility -->
<a id="schemadatatablecell"></a>
<a id="schema_DataTableCell"></a>
<a id="tocSdatatablecell"></a>
<a id="tocsdatatablecell"></a>

```json
{
  "type": "string",
  "value": "string"
}
```

A single tabular data cell.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[StringDataTableCell](#schemastringdatatablecell)|false|none|A string tabular data cell.|
|*oneOf*|[NumberDataTableCell](#schemanumberdatatablecell)|false|none|A number tabular data cell.|
|*oneOf*|[BooleanDataTableCell](#schemabooleandatatablecell)|false|none|A boolean tabular data cell.|
|*oneOf*|[DateDataTableCell](#schemadatedatatablecell)|false|none|A date tabular data cell.<br><br>Specified as a Unix timestamp (in seconds since the Unix Epoch).|
|*oneOf*|[MediaCollectionDataTableCell](#schemamediacollectiondatatablecell)|false|none|Cell containing a media collection.|

<h2 id="tocS_StringDataTableCell">StringDataTableCell</h2>
<!-- backwards compatibility -->
<a id="schemastringdatatablecell"></a>
<a id="schema_StringDataTableCell"></a>
<a id="tocSstringdatatablecell"></a>
<a id="tocsstringdatatablecell"></a>

```json
{
  "type": "string",
  "value": "string"
}
```

A string tabular data cell.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|value|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|string|

<h2 id="tocS_NumberDataTableCell">NumberDataTableCell</h2>
<!-- backwards compatibility -->
<a id="schemanumberdatatablecell"></a>
<a id="schema_NumberDataTableCell"></a>
<a id="tocSnumberdatatablecell"></a>
<a id="tocsnumberdatatablecell"></a>

```json
{
  "type": "number",
  "value": 0,
  "metadata": {
    "formatting": "string"
  }
}
```

A number tabular data cell.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|value|number(double)|false|none|none|
|metadata|[NumberCellMetadata](#schemanumbercellmetadata)|false|none|Formatting metadata for number cells.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|number|

<h2 id="tocS_NumberCellMetadata">NumberCellMetadata</h2>
<!-- backwards compatibility -->
<a id="schemanumbercellmetadata"></a>
<a id="schema_NumberCellMetadata"></a>
<a id="tocSnumbercellmetadata"></a>
<a id="tocsnumbercellmetadata"></a>

```json
{
  "formatting": "string"
}
```

Formatting metadata for number cells.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|formatting|string|false|none|Formatting pattern using Office Open XML Format.<br><br>These patterns control how numbers are displayed to users, including currency symbols,<br>decimal places, and separators.|

<h2 id="tocS_BooleanDataTableCell">BooleanDataTableCell</h2>
<!-- backwards compatibility -->
<a id="schemabooleandatatablecell"></a>
<a id="schema_BooleanDataTableCell"></a>
<a id="tocSbooleandatatablecell"></a>
<a id="tocsbooleandatatablecell"></a>

```json
{
  "type": "boolean",
  "value": true
}
```

A boolean tabular data cell.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|value|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|boolean|

<h2 id="tocS_DateDataTableCell">DateDataTableCell</h2>
<!-- backwards compatibility -->
<a id="schemadatedatatablecell"></a>
<a id="schema_DateDataTableCell"></a>
<a id="tocSdatedatatablecell"></a>
<a id="tocsdatedatatablecell"></a>

```json
{
  "type": "date",
  "value": 0
}
```

A date tabular data cell.

Specified as a Unix timestamp (in seconds since the Unix Epoch).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|value|integer(int64)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|date|

<h2 id="tocS_MediaCollectionDataTableCell">MediaCollectionDataTableCell</h2>
<!-- backwards compatibility -->
<a id="schemamediacollectiondatatablecell"></a>
<a id="schema_MediaCollectionDataTableCell"></a>
<a id="tocSmediacollectiondatatablecell"></a>
<a id="tocsmediacollectiondatatablecell"></a>

```json
{
  "type": "media",
  "value": [
    {
      "type": "image_upload",
      "url": "string",
      "thumbnail_url": "string",
      "mime_type": "image/jpeg",
      "width": 0,
      "height": 0,
      "ai_disclosure": "app_generated"
    }
  ]
}
```

Cell containing a media collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|value|[[DataTableMedia](#schemadatatablemedia)]|true|none|Media collection values.<br><br>Provide an empty array for an empty cell.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|media|

<h2 id="tocS_DataTableMedia">DataTableMedia</h2>
<!-- backwards compatibility -->
<a id="schemadatatablemedia"></a>
<a id="schema_DataTableMedia"></a>
<a id="tocSdatatablemedia"></a>
<a id="tocsdatatablemedia"></a>

```json
{
  "type": "image_upload",
  "url": "string",
  "thumbnail_url": "string",
  "mime_type": "image/jpeg",
  "width": 0,
  "height": 0,
  "ai_disclosure": "app_generated"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[DataTableImageUpload](#schemadatatableimageupload)|false|none|Options for uploading an image asset.|
|*oneOf*|[DataTableVideoUpload](#schemadatatablevideoupload)|false|none|Options for uploading a video asset.|

<h2 id="tocS_DataTableImageUpload">DataTableImageUpload</h2>
<!-- backwards compatibility -->
<a id="schemadatatableimageupload"></a>
<a id="schema_DataTableImageUpload"></a>
<a id="tocSdatatableimageupload"></a>
<a id="tocsdatatableimageupload"></a>

```json
{
  "type": "image_upload",
  "url": "string",
  "thumbnail_url": "string",
  "mime_type": "image/jpeg",
  "width": 0,
  "height": 0,
  "ai_disclosure": "app_generated"
}
```

Options for uploading an image asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|url|string|true|none|The URL of the image file to upload.<br>This can be an external URL or a data URL.|
|thumbnail_url|string|true|none|The URL of a thumbnail image to display while the image is queued for upload.<br>This can be an external URL or a data URL.|
|mime_type|[DataTableImageMimeType](#schemadatatableimagemimetype)|true|none|The MIME type of an image file that's supported by Canva's backend.|
|width|integer(int32)|false|none|The width of the image in pixels.|
|height|integer(int32)|false|none|The height of the image in pixels.|
|ai_disclosure|[DataTableAiDisclosure](#schemadatatableaidisclosure)|true|none|A disclosure identifying if the app generated this media asset using AI.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|image_upload|
|mime_type|image/jpeg|
|mime_type|image/heic|
|mime_type|image/png|
|mime_type|image/svg+xml|
|mime_type|image/webp|
|mime_type|image/tiff|
|ai_disclosure|app_generated|
|ai_disclosure|none|

<h2 id="tocS_DataTableVideoUpload">DataTableVideoUpload</h2>
<!-- backwards compatibility -->
<a id="schemadatatablevideoupload"></a>
<a id="schema_DataTableVideoUpload"></a>
<a id="tocSdatatablevideoupload"></a>
<a id="tocsdatatablevideoupload"></a>

```json
{
  "type": "video_upload",
  "url": "string",
  "thumbnail_image_url": "string",
  "thumbnail_video_url": "string",
  "mime_type": "video/avi",
  "width": 0,
  "height": 0,
  "ai_disclosure": "app_generated"
}
```

Options for uploading a video asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|url|string|true|none|The URL of the video file to upload.|
|thumbnail_image_url|string|true|none|The URL of a thumbnail image to use as a fallback if thumbnailVideoUrl isn't provided.<br>This can be an external URL or a data URL.|
|thumbnail_video_url|string|false|none|The URL of a thumbnail video to display while the video is queued for upload.|
|mime_type|[DataTableVideoMimeType](#schemadatatablevideomimetype)|true|none|The MIME type of a video file that's supported by Canva's backend.|
|width|integer(int32)|false|none|The width of the video in pixels.|
|height|integer(int32)|false|none|The height of the video in pixels.|
|ai_disclosure|[DataTableAiDisclosure](#schemadatatableaidisclosure)|true|none|A disclosure identifying if the app generated this media asset using AI.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|video_upload|
|mime_type|video/avi|
|mime_type|video/x-msvideo|
|mime_type|image/gif|
|mime_type|video/x-m4v|
|mime_type|video/x-matroska|
|mime_type|video/quicktime|
|mime_type|video/mp4|
|mime_type|video/mpeg|
|mime_type|video/webm|
|mime_type|application/json|
|ai_disclosure|app_generated|
|ai_disclosure|none|

<h2 id="tocS_DataTableImageMimeType">DataTableImageMimeType</h2>
<!-- backwards compatibility -->
<a id="schemadatatableimagemimetype"></a>
<a id="schema_DataTableImageMimeType"></a>
<a id="tocSdatatableimagemimetype"></a>
<a id="tocsdatatableimagemimetype"></a>

```json
"image/jpeg"
```

The MIME type of an image file that's supported by Canva's backend.

<h2 id="tocS_DataTableVideoMimeType">DataTableVideoMimeType</h2>
<!-- backwards compatibility -->
<a id="schemadatatablevideomimetype"></a>
<a id="schema_DataTableVideoMimeType"></a>
<a id="tocSdatatablevideomimetype"></a>
<a id="tocsdatatablevideomimetype"></a>

```json
"video/avi"
```

The MIME type of a video file that's supported by Canva's backend.

<h2 id="tocS_DataTableAiDisclosure">DataTableAiDisclosure</h2>
<!-- backwards compatibility -->
<a id="schemadatatableaidisclosure"></a>
<a id="schema_DataTableAiDisclosure"></a>
<a id="tocSdatatableaidisclosure"></a>
<a id="tocsdatatableaidisclosure"></a>

```json
"app_generated"
```

A disclosure identifying if the app generated this media asset using AI.

<h2 id="tocS_SortByType">SortByType</h2>
<!-- backwards compatibility -->
<a id="schemasortbytype"></a>
<a id="schema_SortByType"></a>
<a id="tocSsortbytype"></a>
<a id="tocssortbytype"></a>

```json
"relevance"
```

<h2 id="tocS_OwnershipType">OwnershipType</h2>
<!-- backwards compatibility -->
<a id="schemaownershiptype"></a>
<a id="schema_OwnershipType"></a>
<a id="tocSownershiptype"></a>
<a id="tocsownershiptype"></a>

```json
"any"
```

<h2 id="tocS_GetListDesignResponse">GetListDesignResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlistdesignresponse"></a>
<a id="schema_GetListDesignResponse"></a>
<a id="tocSgetlistdesignresponse"></a>
<a id="tocsgetlistdesignresponse"></a>

```json
{
  "continuation": "RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN",
  "items": [
    {
      "id": "DAFVztcvd9z",
      "title": "My summer holiday",
      "owner": {
        "user_id": "auDAbliZ2rQNNOsUl5OLu",
        "team_id": "Oi2RJILTrKk0KRhRUZozX"
      },
      "thumbnail": {
        "width": 595,
        "height": 335,
        "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
      },
      "urls": {
        "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
        "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
      },
      "created_at": 1377396000,
      "updated_at": 1692928800,
      "page_count": 5,
      "design_types": [
        "presentation"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|continuation|string|false|none|A continuation token.<br>If the success response contains a continuation token, the list contains more designs<br>you can list. You can use this token as a query parameter and retrieve more<br>designs from the list, for example<br>`/v1/designs?continuation={continuation}`.<br><br>To retrieve all of a user's designs, you might need to make multiple requests.|
|items|[[Design](#schemadesign)]|true|none|The list of designs.|

<h2 id="tocS_CreateDesignRequest">CreateDesignRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedesignrequest"></a>
<a id="schema_CreateDesignRequest"></a>
<a id="tocScreatedesignrequest"></a>
<a id="tocscreatedesignrequest"></a>

```json
{
  "type": "type_and_asset",
  "design_type": {
    "type": "preset",
    "name": "doc"
  },
  "asset_id": "Msd59349ff",
  "title": "My Holiday Presentation"
}
```

Body parameters for creating a new design. Use the `type` discriminator to choose the creation mode:

- Use `type_and_asset` to create a design by specifying the design type and/or an asset.
- Use `design` to create a copy of an existing design (currently a [preview feature](https://www.canva.dev/docs/apps/rest-apis/#preview-apis)).
- Use `brand_template` to create a design from a brand template (currently a [preview feature](https://www.canva.dev/docs/apps/rest-apis/#preview-apis)).

NOTE: For backward compatibility, if `type` isn't specified in the request,
the request type will be assumed to be `type_and_asset`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[DesignTypeCreateDesignRequest](#schemadesigntypecreatedesignrequest)|false|none|Create a design by specifying the design type and/or an asset.<br>At least one of `design_type` or `asset_id` must be defined.|
|*oneOf*|[DesignCreateDesignRequest](#schemadesigncreatedesignrequest)|false|none|<Warning><br><br>Creating a copy of an existing design is currently provided as a preview. Be aware of the following:<br><br>- There might be unannounced breaking changes.<br>- Any breaking changes to preview features won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).<br>- Public apps that use preview features will not pass the review process, and can't be made available to all Canva users.<br><br></Warning><br><br>Body parameters for creating a copy of an existing design.|
|*oneOf*|[BrandTemplateCreateDesignRequest](#schemabrandtemplatecreatedesignrequest)|false|none|<Warning><br><br>Creating a copy from a brand template is currently provided as a preview. Be aware of the following:<br><br>- There might be unannounced breaking changes.<br>- Any breaking changes to preview features won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).<br>- Public apps that use preview features will not pass the review process, and can't be made available to all Canva users.<br><br></Warning><br><br>Body parameters for creating a copy from a brand template.|

<h2 id="tocS_DesignTypeCreateDesignRequest">DesignTypeCreateDesignRequest</h2>
<!-- backwards compatibility -->
<a id="schemadesigntypecreatedesignrequest"></a>
<a id="schema_DesignTypeCreateDesignRequest"></a>
<a id="tocSdesigntypecreatedesignrequest"></a>
<a id="tocsdesigntypecreatedesignrequest"></a>

```json
{
  "type": "type_and_asset",
  "design_type": {
    "type": "preset",
    "name": "doc"
  },
  "asset_id": "Msd59349ff",
  "title": "My Holiday Presentation"
}
```

Create a design by specifying the design type and/or an asset.
At least one of `design_type` or `asset_id` must be defined.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|For backward compatibility, if `type` isn't specified in the request, the request type will be assumed to be `type_and_asset`.|
|design_type|[DesignTypeInput](#schemadesigntypeinput)|false|none|The desired design type.|
|asset_id|string|false|none|The ID of an asset to insert into the created design. Currently, this only supports image assets.|
|title|string|false|none|The name of the design.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|type_and_asset|

<h2 id="tocS_DesignCreateDesignRequest">DesignCreateDesignRequest</h2>
<!-- backwards compatibility -->
<a id="schemadesigncreatedesignrequest"></a>
<a id="schema_DesignCreateDesignRequest"></a>
<a id="tocSdesigncreatedesignrequest"></a>
<a id="tocsdesigncreatedesignrequest"></a>

```json
{
  "type": "design",
  "design_id": "DAFVztcvetc",
  "page_numbers": [
    1
  ]
}
```

<Warning>

Creating a copy of an existing design is currently provided as a preview. Be aware of the following:

- There might be unannounced breaking changes.
- Any breaking changes to preview features won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).
- Public apps that use preview features will not pass the review process, and can't be made available to all Canva users.

</Warning>

Body parameters for creating a copy of an existing design.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|design_id|string|true|none|The ID of the design to copy.|
|page_numbers|[integer(int32)]|false|none|The pages to copy from the source design. If not specified, all pages are copied.<br>Pages are indexed using one-based numbering.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|design|

<h2 id="tocS_BrandTemplateCreateDesignRequest">BrandTemplateCreateDesignRequest</h2>
<!-- backwards compatibility -->
<a id="schemabrandtemplatecreatedesignrequest"></a>
<a id="schema_BrandTemplateCreateDesignRequest"></a>
<a id="tocSbrandtemplatecreatedesignrequest"></a>
<a id="tocsbrandtemplatecreatedesignrequest"></a>

```json
{
  "type": "brand_template",
  "brand_template_id": "EDMzWSwy3BI",
  "page_numbers": [
    1
  ]
}
```

<Warning>

Creating a copy from a brand template is currently provided as a preview. Be aware of the following:

- There might be unannounced breaking changes.
- Any breaking changes to preview features won't produce a new [API version](https://www.canva.dev/docs/apps/rest-apis/versions/).
- Public apps that use preview features will not pass the review process, and can't be made available to all Canva users.

</Warning>

Body parameters for creating a copy from a brand template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|brand_template_id|string|true|none|The ID of the brand template used to create a design copy.|
|page_numbers|[integer(int32)]|false|none|The pages to copy from the brand template. If not specified, all pages are copied.<br>Pages are indexed using one-based numbering.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|brand_template|

<h2 id="tocS_CreateDesignResponse">CreateDesignResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedesignresponse"></a>
<a id="schema_CreateDesignResponse"></a>
<a id="tocScreatedesignresponse"></a>
<a id="tocscreatedesignresponse"></a>

```json
{
  "design": {
    "id": "DAFVztcvd9z",
    "title": "My summer holiday",
    "owner": {
      "user_id": "auDAbliZ2rQNNOsUl5OLu",
      "team_id": "Oi2RJILTrKk0KRhRUZozX"
    },
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    },
    "urls": {
      "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
      "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
    },
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "page_count": 5,
    "design_types": [
      "presentation"
    ]
  }
}
```

Details about the new design.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|design|[Design](#schemadesign)|true|none|The design object, which contains metadata about the design.|

<h2 id="tocS_CreatePrintPartnerDesignRequest">CreatePrintPartnerDesignRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateprintpartnerdesignrequest"></a>
<a id="schema_CreatePrintPartnerDesignRequest"></a>
<a id="tocScreateprintpartnerdesignrequest"></a>
<a id="tocscreateprintpartnerdesignrequest"></a>

```json
{
  "design_source": {
    "type": "dimensions",
    "dimensions": {
      "width": 595,
      "height": 1295,
      "units": "in"
    },
    "product_type": "tshirt"
  },
  "title": "My Holiday Presentation",
  "bleed": 3000,
  "min_pages": 1,
  "max_pages": 1
}
```

Body parameters for creating a new design for a Print Partner.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|design_source|[PrintPartnerDesignSource](#schemaprintpartnerdesignsource)|true|none|The desired source for the design creation.|
|title|string|false|none|The name of the design.|
|bleed|integer(int32)|false|none|Bleed in microns to apply around the design in the editor. Bleed is the area<br>outside the trim line used to avoid white edges after cutting. Use 0 for no bleed. If bleed is not<br>specified, a default of 3000 microns is used.|
|min_pages|integer(int32)|false|none|Minimum number of pages the design must have in the editor. The user cannot<br>reduce the page count below this value. If both min_pages and max_pages are<br>provided, min_pages must be less than or equal to max_pages.|
|max_pages|integer(int32)|false|none|Maximum number of pages the design can have in the editor. The user cannot<br>add pages beyond this value. If both min_pages and max_pages are provided,<br>min_pages must be less than or equal to max_pages.|

<h2 id="tocS_CreatePrintPartnerDesignResponse">CreatePrintPartnerDesignResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateprintpartnerdesignresponse"></a>
<a id="schema_CreatePrintPartnerDesignResponse"></a>
<a id="tocScreateprintpartnerdesignresponse"></a>
<a id="tocscreateprintpartnerdesignresponse"></a>

```json
{
  "design": {
    "id": "DAFVztcvd9z",
    "title": "My summer holiday",
    "owner": {
      "user_id": "auDAbliZ2rQNNOsUl5OLu",
      "team_id": "Oi2RJILTrKk0KRhRUZozX"
    },
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    },
    "urls": {
      "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
      "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
    },
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "page_count": 5,
    "design_types": [
      "presentation"
    ]
  }
}
```

Details about the new design.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|design|[Design](#schemadesign)|true|none|The design object, which contains metadata about the design.|

<h2 id="tocS_PrintPartnerDesignSource">PrintPartnerDesignSource</h2>
<!-- backwards compatibility -->
<a id="schemaprintpartnerdesignsource"></a>
<a id="schema_PrintPartnerDesignSource"></a>
<a id="tocSprintpartnerdesignsource"></a>
<a id="tocsprintpartnerdesignsource"></a>

```json
{
  "type": "dimensions",
  "dimensions": {
    "width": 595,
    "height": 1295,
    "units": "in"
  },
  "product_type": "tshirt"
}
```

The desired source for the design creation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[PrintPartnerDimensionsDesignSource](#schemaprintpartnerdimensionsdesignsource)|false|none|Creates a design that matches your dimensions. Add a product type for more precise template matches.|
|*oneOf*|[PrintPartnerProductIdDesignSource](#schemaprintpartnerproductiddesignsource)|false|none|Creates a design using an external partner product ID.|

<h2 id="tocS_PrintPartnerProductIdDesignSource">PrintPartnerProductIdDesignSource</h2>
<!-- backwards compatibility -->
<a id="schemaprintpartnerproductiddesignsource"></a>
<a id="schema_PrintPartnerProductIdDesignSource"></a>
<a id="tocSprintpartnerproductiddesignsource"></a>
<a id="tocsprintpartnerproductiddesignsource"></a>

```json
{
  "type": "partner_product_id",
  "partner_product_id": "CVAFDC1091"
}
```

Creates a design using an external partner product ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|partner_product_id|string|true|none|The ID of the partner-defined product.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|partner_product_id|

<h2 id="tocS_PrintPartnerDimensionsDesignSource">PrintPartnerDimensionsDesignSource</h2>
<!-- backwards compatibility -->
<a id="schemaprintpartnerdimensionsdesignsource"></a>
<a id="schema_PrintPartnerDimensionsDesignSource"></a>
<a id="tocSprintpartnerdimensionsdesignsource"></a>
<a id="tocsprintpartnerdimensionsdesignsource"></a>

```json
{
  "type": "dimensions",
  "dimensions": {
    "width": 595,
    "height": 1295,
    "units": "in"
  },
  "product_type": "tshirt"
}
```

Creates a design that matches your dimensions. Add a product type for more precise template matches.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|dimensions|[PrintPartnerDesignDimensions](#schemaprintpartnerdesigndimensions)|true|none|Dimensions of the design. Used to match a product type, or to create a custom-size design if<br>no product matches.|
|product_type|string|false|none|The product type is used alongside your dimensions to find a matching product in Canva Print's product catalogue, and templates for that product are recommended. If no match is found, only dimensions are used, so templates may include unrelated product types.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|dimensions|

<h2 id="tocS_PrintPartnerDesignDimensions">PrintPartnerDesignDimensions</h2>
<!-- backwards compatibility -->
<a id="schemaprintpartnerdesigndimensions"></a>
<a id="schema_PrintPartnerDesignDimensions"></a>
<a id="tocSprintpartnerdesigndimensions"></a>
<a id="tocsprintpartnerdesigndimensions"></a>

```json
{
  "width": 595,
  "height": 1295,
  "units": "in"
}
```

Dimensions of the design. Used to match a product type, or to create a custom-size design if
no product matches.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|width|number(double)|true|none|The width of the design.|
|height|number(double)|true|none|The height of the design.|
|units|[PrintPartnerDesignDimensionsUnits](#schemaprintpartnerdesigndimensionsunits)|true|none|The units of the dimensions.|

#### Enumerated Values

|Property|Value|
|---|---|
|units|in|
|units|cm|
|units|mm|

<h2 id="tocS_PrintPartnerDesignDimensionsUnits">PrintPartnerDesignDimensionsUnits</h2>
<!-- backwards compatibility -->
<a id="schemaprintpartnerdesigndimensionsunits"></a>
<a id="schema_PrintPartnerDesignDimensionsUnits"></a>
<a id="tocSprintpartnerdesigndimensionsunits"></a>
<a id="tocsprintpartnerdesigndimensionsunits"></a>

```json
"in"
```

The units of the dimensions.

<h2 id="tocS_GetDesignResponse">GetDesignResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdesignresponse"></a>
<a id="schema_GetDesignResponse"></a>
<a id="tocSgetdesignresponse"></a>
<a id="tocsgetdesignresponse"></a>

```json
{
  "design": {
    "id": "DAFVztcvd9z",
    "title": "My summer holiday",
    "owner": {
      "user_id": "auDAbliZ2rQNNOsUl5OLu",
      "team_id": "Oi2RJILTrKk0KRhRUZozX"
    },
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    },
    "urls": {
      "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
      "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
    },
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "page_count": 5,
    "design_types": [
      "presentation"
    ]
  }
}
```

Successful response from a `getDesign` request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|design|[Design](#schemadesign)|true|none|The design object, which contains metadata about the design.|

<h2 id="tocS_GetPrintPartnerDesignResponse">GetPrintPartnerDesignResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetprintpartnerdesignresponse"></a>
<a id="schema_GetPrintPartnerDesignResponse"></a>
<a id="tocSgetprintpartnerdesignresponse"></a>
<a id="tocsgetprintpartnerdesignresponse"></a>

```json
{
  "design": {
    "id": "DAFVztcvd9z",
    "title": "My summer holiday",
    "owner": {
      "user_id": "auDAbliZ2rQNNOsUl5OLu",
      "team_id": "Oi2RJILTrKk0KRhRUZozX"
    },
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    },
    "urls": {
      "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
      "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
    },
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "page_count": 5,
    "design_types": [
      "presentation"
    ]
  }
}
```

Successful response from a `getPrintPartnerDesign` request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|design|[Design](#schemadesign)|true|none|The design object, which contains metadata about the design.|

<h2 id="tocS_GetDesignPagesResponse">GetDesignPagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdesignpagesresponse"></a>
<a id="schema_GetDesignPagesResponse"></a>
<a id="tocSgetdesignpagesresponse"></a>
<a id="tocsgetdesignpagesresponse"></a>

```json
{
  "items": [
    {
      "id": "PB2NFQ9W78kLDFCK",
      "index": 1,
      "page_number": 1,
      "dimensions": {
        "width": 595,
        "height": 1295
      },
      "thumbnail": {
        "width": 595,
        "height": 335,
        "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
      },
      "design_type": "presentation"
    }
  ]
}
```

Successful response from a `getDesignPages` request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[DesignPage](#schemadesignpage)]|true|none|The list of pages.|

<h2 id="tocS_GetDesignExportFormatsResponse">GetDesignExportFormatsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdesignexportformatsresponse"></a>
<a id="schema_GetDesignExportFormatsResponse"></a>
<a id="tocSgetdesignexportformatsresponse"></a>
<a id="tocsgetdesignexportformatsresponse"></a>

```json
{
  "formats": {
    "pdf": {
      "page_numbers": [
        1,
        2,
        3
      ]
    },
    "jpg": {
      "page_numbers": [
        1,
        2,
        3
      ]
    },
    "png": {
      "page_numbers": [
        1,
        2,
        3
      ]
    },
    "svg": {
      "page_numbers": [
        1,
        2,
        3
      ]
    },
    "pptx": {
      "page_numbers": [
        1,
        2,
        3
      ]
    },
    "gif": {
      "page_numbers": [
        1,
        2,
        3
      ]
    },
    "mp4": {
      "page_numbers": [
        1,
        2,
        3
      ]
    },
    "html_bundle": {
      "page_numbers": [
        1,
        2,
        3
      ]
    },
    "html_standalone": {
      "page_numbers": [
        1,
        2,
        3
      ]
    },
    "csv": {
      "page_numbers": [
        1,
        2,
        3
      ]
    }
  }
}
```

Successful response from a `getDesignExportFormats` request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|formats|[ExportFormatOptions](#schemaexportformatoptions)|true|none|The available file formats for exporting the design.|

<h2 id="tocS_Design">Design</h2>
<!-- backwards compatibility -->
<a id="schemadesign"></a>
<a id="schema_Design"></a>
<a id="tocSdesign"></a>
<a id="tocsdesign"></a>

```json
{
  "id": "DAFVztcvd9z",
  "title": "My summer holiday",
  "owner": {
    "user_id": "auDAbliZ2rQNNOsUl5OLu",
    "team_id": "Oi2RJILTrKk0KRhRUZozX"
  },
  "thumbnail": {
    "width": 595,
    "height": 335,
    "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
  },
  "urls": {
    "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
    "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
  },
  "created_at": 1377396000,
  "updated_at": 1692928800,
  "page_count": 5,
  "design_types": [
    "presentation"
  ]
}
```

The design object, which contains metadata about the design.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The design ID.|
|title|string|false|none|The design title.|
|owner|[TeamUserSummary](#schemateamusersummary)|true|none|Metadata for the user, consisting of the User ID and Team ID.|
|thumbnail|[Thumbnail](#schemathumbnail)|false|none|A thumbnail image representing the object.|
|urls|[DesignLinks](#schemadesignlinks)|true|none|A temporary set of URLs for viewing or editing the design.|
|created_at|integer(int64)|true|none|When the design was created in Canva, as a Unix timestamp (in seconds since the Unix<br>Epoch).|
|updated_at|integer(int64)|true|none|When the design was last updated in Canva, as a Unix timestamp (in seconds since the<br>Unix Epoch).|
|page_count|integer(int32)|false|none|The total number of pages in the design. Some design types don't have pages (for example, Canva docs).|
|design_types|[[DesignTypeOutputName](#schemadesigntypeoutputname)]|true|none|The type of content a design or page contains. The list of design types may grow over time. The `unknown` value represents design types that haven't been added to the list.|

#### Enumerated Values

|Property|Value|
|---|---|
|design_types|doc|
|design_types|email|
|design_types|presentation|
|design_types|sheet|
|design_types|whiteboard|
|design_types|custom|
|design_types|unknown|

<h2 id="tocS_PageNumber">PageNumber</h2>
<!-- backwards compatibility -->
<a id="schemapagenumber"></a>
<a id="schema_PageNumber"></a>
<a id="tocSpagenumber"></a>
<a id="tocspagenumber"></a>

```json
1
```

The 1-based page number within the design. The first page in a design has the value `1`.

<h2 id="tocS_PageDimensions">PageDimensions</h2>
<!-- backwards compatibility -->
<a id="schemapagedimensions"></a>
<a id="schema_PageDimensions"></a>
<a id="tocSpagedimensions"></a>
<a id="tocspagedimensions"></a>

```json
{
  "width": 595,
  "height": 1295
}
```

The dimensions of a design page, if it is bounded. Design pages for non-bounded designs like Whiteboards and Docs will not include this property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|width|number(double)|true|none|The width of the design page in pixels.|
|height|number(double)|true|none|The height of the design page in pixels.|

<h2 id="tocS_DesignLinks">DesignLinks</h2>
<!-- backwards compatibility -->
<a id="schemadesignlinks"></a>
<a id="schema_DesignLinks"></a>
<a id="tocSdesignlinks"></a>
<a id="tocsdesignlinks"></a>

```json
{
  "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
  "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
}
```

A temporary set of URLs for viewing or editing the design.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|edit_url|string|true|none|A temporary editing URL for the design. This URL is only accessible to the user that made the API request, and is designed to support [return navigation](https://www.canva.dev/docs/apps/rest-apis/return-navigation-guide/) workflows.<br><br>NOTE: This is not a permanent URL, it is only valid for 30 days.|
|view_url|string|true|none|A temporary viewing URL for the design. This URL is only accessible to the user that made the API request, and is designed to support [return navigation](https://www.canva.dev/docs/apps/rest-apis/return-navigation-guide/) workflows.<br><br>NOTE: This is not a permanent URL, it is only valid for 30 days.<br>|

<h2 id="tocS_DesignSummary">DesignSummary</h2>
<!-- backwards compatibility -->
<a id="schemadesignsummary"></a>
<a id="schema_DesignSummary"></a>
<a id="tocSdesignsummary"></a>
<a id="tocsdesignsummary"></a>

```json
{
  "id": "DAFVztcvd9z",
  "title": "My summer holiday",
  "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
  "thumbnail": {
    "width": 595,
    "height": 335,
    "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
  },
  "urls": {
    "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
    "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
  },
  "created_at": 1377396000,
  "updated_at": 1692928800,
  "page_count": 3
}
```

Basic details about the design, such as the design's ID, title, and URL.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The design ID.|
|title|string|false|none|The design title.|
|url|string|false|none|URL of the design.|
|thumbnail|[Thumbnail](#schemathumbnail)|false|none|A thumbnail image representing the object.|
|urls|[DesignLinks](#schemadesignlinks)|true|none|A temporary set of URLs for viewing or editing the design.|
|created_at|integer(int64)|true|none|When the design was created in Canva, as a Unix timestamp (in seconds since the Unix<br>Epoch).|
|updated_at|integer(int64)|true|none|When the design was last updated in Canva, as a Unix timestamp (in seconds since the<br>Unix Epoch).|
|page_count|integer(int32)|false|none|The total number of pages in the design. Some design types don't have pages (for example, Canva docs).|

<h2 id="tocS_DesignPage">DesignPage</h2>
<!-- backwards compatibility -->
<a id="schemadesignpage"></a>
<a id="schema_DesignPage"></a>
<a id="tocSdesignpage"></a>
<a id="tocsdesignpage"></a>

```json
{
  "id": "PB2NFQ9W78kLDFCK",
  "index": 1,
  "page_number": 1,
  "dimensions": {
    "width": 595,
    "height": 1295
  },
  "thumbnail": {
    "width": 595,
    "height": 335,
    "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
  },
  "design_type": "presentation"
}
```

Basic details about a page in a design, such as the page number and thumbnail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the page. This ID is unique within the design and can be used to<br>correlate a page with per-page data from other APIs.<br><br>Some designs might not have page IDs, in which case this property is omitted.|
|index|integer(int32)|true|none|**Deprecated.** WARNING: This property is deprecated. Use `page_number` instead, which returns an identical value.<br><br>The index of the page in the design. The first page in a design has the index value `1`.|
|page_number|integer(int32)|true|none|The 1-based page number within the design. The first page in a design has the value `1`.|
|dimensions|[PageDimensions](#schemapagedimensions)|false|none|The dimensions of a design page, if it is bounded. Design pages for non-bounded designs like Whiteboards and Docs will not include this property.|
|thumbnail|[Thumbnail](#schemathumbnail)|false|none|A thumbnail image representing the object.|
|design_type|[DesignTypeOutputName](#schemadesigntypeoutputname)|true|none|The type of content a design or page contains. The list of design types may grow over time. The `unknown` value represents design types that haven't been added to the list.|

#### Enumerated Values

|Property|Value|
|---|---|
|design_type|doc|
|design_type|email|
|design_type|presentation|
|design_type|sheet|
|design_type|whiteboard|
|design_type|custom|
|design_type|unknown|

<h2 id="tocS_GetDesignDatasetResponse">GetDesignDatasetResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdesigndatasetresponse"></a>
<a id="schema_GetDesignDatasetResponse"></a>
<a id="tocSgetdesigndatasetresponse"></a>
<a id="tocsgetdesigndatasetresponse"></a>

```json
{
  "dataset": {
    "cute_pet_image_of_the_day": {
      "type": "image"
    },
    "cute_pet_witty_pet_says": {
      "type": "text"
    },
    "cute_pet_sales_chart": {
      "type": "chart"
    }
  }
}
```

Successful response from a `getDesignDataset` request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataset|object|false|none|The dataset definition. It contains the data inputs available for use with the<br>[Create design autofill job API](https://www.canva.dev/docs/apps/rest-apis/reference/autofills/create-design-autofill-job/).|

<h2 id="tocS_DatasetDefinition">DatasetDefinition</h2>
<!-- backwards compatibility -->
<a id="schemadatasetdefinition"></a>
<a id="schema_DatasetDefinition"></a>
<a id="tocSdatasetdefinition"></a>
<a id="tocsdatasetdefinition"></a>

```json
{
  "cute_pet_image_of_the_day": {
    "type": "image"
  },
  "cute_pet_witty_pet_says": {
    "type": "text"
  },
  "cute_pet_sales_chart": {
    "type": "chart"
  }
}
```

The dataset definition. It contains the data inputs available for use with the
[Create design autofill job API](https://www.canva.dev/docs/apps/rest-apis/reference/autofills/create-design-autofill-job/).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[DataField](#schemadatafield)|false|none|A named data field that can be autofilled.|

<h2 id="tocS_DataField">DataField</h2>
<!-- backwards compatibility -->
<a id="schemadatafield"></a>
<a id="schema_DataField"></a>
<a id="tocSdatafield"></a>
<a id="tocsdatafield"></a>

```json
{
  "type": "image"
}
```

A named data field that can be autofilled.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ImageDataField](#schemaimagedatafield)|false|none|An image data field. You can autofill it with an image by providing its `asset_id`.<br><br>You can also autofill it with a video asset.|
|*oneOf*|[TextDataField](#schematextdatafield)|false|none|A text data field. You can autofill it with a text value.|
|*oneOf*|[ChartDataField](#schemachartdatafield)|false|none|A chart data field. You can autofill it with tabular data.|
|*oneOf*|[SheetDataField](#schemasheetdatafield)|false|none|A sheet data field. You can autofill it with tabular sheet data.|

<h2 id="tocS_ImageDataField">ImageDataField</h2>
<!-- backwards compatibility -->
<a id="schemaimagedatafield"></a>
<a id="schema_ImageDataField"></a>
<a id="tocSimagedatafield"></a>
<a id="tocsimagedatafield"></a>

```json
{
  "type": "image"
}
```

An image data field. You can autofill it with an image by providing its `asset_id`.

You can also autofill it with a video asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|image|

<h2 id="tocS_TextDataField">TextDataField</h2>
<!-- backwards compatibility -->
<a id="schematextdatafield"></a>
<a id="schema_TextDataField"></a>
<a id="tocStextdatafield"></a>
<a id="tocstextdatafield"></a>

```json
{
  "type": "text"
}
```

A text data field. You can autofill it with a text value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|

<h2 id="tocS_ChartDataField">ChartDataField</h2>
<!-- backwards compatibility -->
<a id="schemachartdatafield"></a>
<a id="schema_ChartDataField"></a>
<a id="tocSchartdatafield"></a>
<a id="tocschartdatafield"></a>

```json
{
  "type": "chart"
}
```

A chart data field. You can autofill it with tabular data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|chart|

<h2 id="tocS_SheetDataField">SheetDataField</h2>
<!-- backwards compatibility -->
<a id="schemasheetdatafield"></a>
<a id="schema_SheetDataField"></a>
<a id="tocSsheetdatafield"></a>
<a id="tocssheetdatafield"></a>

```json
{
  "type": "sheet"
}
```

A sheet data field. You can autofill it with tabular sheet data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|sheet|

<h2 id="tocS_CreateDesignGenerationJobRequestV2">CreateDesignGenerationJobRequestV2</h2>
<!-- backwards compatibility -->
<a id="schemacreatedesigngenerationjobrequestv2"></a>
<a id="schema_CreateDesignGenerationJobRequestV2"></a>
<a id="tocScreatedesigngenerationjobrequestv2"></a>
<a id="tocscreatedesigngenerationjobrequestv2"></a>

```json
{
  "brief": "A 3-slide pitch deck for a solar-panel startup with an energetic, modern, blue-and-white visual direction.",
  "design_type": {
    "type": "preset",
    "name": "doc"
  },
  "outline": {
    "sections": [
      {
        "title": "The problem",
        "description": "Rooftop solar installations still take more than six weeks to quote.",
        "points": [
          "string"
        ]
      }
    ]
  }
}
```

The brief, design type, and optional presentation outline for generation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brief|string|true|none|A description of the design to generate, including its subject, purpose,<br>required wording, tone, and visual direction.|
|design_type|object|true|none|The preset Canva design type to generate. Supports `doc` and `presentation`.|
|outline|object|false|none|The slide structure to follow. This property is supported only when<br>`design_type.name` is `presentation`.|

<h2 id="tocS_DesignGenerationDesignTypeInputV2">DesignGenerationDesignTypeInputV2</h2>
<!-- backwards compatibility -->
<a id="schemadesigngenerationdesigntypeinputv2"></a>
<a id="schema_DesignGenerationDesignTypeInputV2"></a>
<a id="tocSdesigngenerationdesigntypeinputv2"></a>
<a id="tocsdesigngenerationdesigntypeinputv2"></a>

```json
{
  "type": "preset",
  "name": "doc"
}
```

The preset Canva design type to generate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[DesignGenerationDesignTypeV2](#schemadesigngenerationdesigntypev2)|true|none|The kind of design type to generate.|
|name|[DesignGenerationDesignTypeNameV2](#schemadesigngenerationdesigntypenamev2)|true|none|The name of the design type to generate.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|preset|
|name|doc|
|name|presentation|

<h2 id="tocS_DesignGenerationDesignTypeV2">DesignGenerationDesignTypeV2</h2>
<!-- backwards compatibility -->
<a id="schemadesigngenerationdesigntypev2"></a>
<a id="schema_DesignGenerationDesignTypeV2"></a>
<a id="tocSdesigngenerationdesigntypev2"></a>
<a id="tocsdesigngenerationdesigntypev2"></a>

```json
"preset"
```

The kind of design type to generate.

<h2 id="tocS_DesignGenerationDesignTypeNameV2">DesignGenerationDesignTypeNameV2</h2>
<!-- backwards compatibility -->
<a id="schemadesigngenerationdesigntypenamev2"></a>
<a id="schema_DesignGenerationDesignTypeNameV2"></a>
<a id="tocSdesigngenerationdesigntypenamev2"></a>
<a id="tocsdesigngenerationdesigntypenamev2"></a>

```json
"doc"
```

The name of the design type to generate.

<h2 id="tocS_DesignGenerationOutlineV2">DesignGenerationOutlineV2</h2>
<!-- backwards compatibility -->
<a id="schemadesigngenerationoutlinev2"></a>
<a id="schema_DesignGenerationOutlineV2"></a>
<a id="tocSdesigngenerationoutlinev2"></a>
<a id="tocsdesigngenerationoutlinev2"></a>

```json
{
  "sections": [
    {
      "title": "The problem",
      "description": "Rooftop solar installations still take more than six weeks to quote.",
      "points": [
        "string"
      ]
    }
  ]
}
```

The ordered slide structure for a generated presentation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sections|[[DesignGenerationOutlineSectionV2](#schemadesigngenerationoutlinesectionv2)]|true|none|none|

<h2 id="tocS_DesignGenerationOutlineSectionV2">DesignGenerationOutlineSectionV2</h2>
<!-- backwards compatibility -->
<a id="schemadesigngenerationoutlinesectionv2"></a>
<a id="schema_DesignGenerationOutlineSectionV2"></a>
<a id="tocSdesigngenerationoutlinesectionv2"></a>
<a id="tocsdesigngenerationoutlinesectionv2"></a>

```json
{
  "title": "The problem",
  "description": "Rooftop solar installations still take more than six weeks to quote.",
  "points": [
    "string"
  ]
}
```

One slide in a presentation outline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|true|none|The slide title.|
|description|string|false|none|A short description of what the slide should cover.|
|points|[string]|false|none|Optional individual points the slide should make.|

<h2 id="tocS_CreateDesignGenerationJobResponseV2">CreateDesignGenerationJobResponseV2</h2>
<!-- backwards compatibility -->
<a id="schemacreatedesigngenerationjobresponsev2"></a>
<a id="schema_CreateDesignGenerationJobResponseV2"></a>
<a id="tocScreatedesigngenerationjobresponsev2"></a>
<a id="tocscreatedesigngenerationjobresponsev2"></a>

```json
{
  "job": {
    "id": "f81b26fd-a33d-4c2d-9e8c-4a7aca798b17",
    "status": "failed",
    "result": {
      "design": {
        "id": "DAFVztcvd9z",
        "title": "My summer holiday",
        "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
        "thumbnail": {
          "width": 595,
          "height": 335,
          "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
        },
        "urls": {
          "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
          "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
        },
        "created_at": 1377396000,
        "updated_at": 1692928800,
        "page_count": 3
      }
    },
    "error": {
      "code": "content_not_allowed",
      "message": "string"
    }
  },
  "quota_usage": {
    "used_percentage": 0,
    "resets_at": 0,
    "using_bonus_credits": true,
    "usage_review_link": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[DesignGenerationJobV2](#schemadesigngenerationjobv2)|true|none|The status and result of a public design generation job.|
|quota_usage|object|false|none|Credit quota usage after reserving credits for this job. Omitted if unavailable.|

<h2 id="tocS_GetDesignGenerationJobResponseV2">GetDesignGenerationJobResponseV2</h2>
<!-- backwards compatibility -->
<a id="schemagetdesigngenerationjobresponsev2"></a>
<a id="schema_GetDesignGenerationJobResponseV2"></a>
<a id="tocSgetdesigngenerationjobresponsev2"></a>
<a id="tocsgetdesigngenerationjobresponsev2"></a>

```json
{
  "job": {
    "id": "f81b26fd-a33d-4c2d-9e8c-4a7aca798b17",
    "status": "failed",
    "result": {
      "design": {
        "id": "DAFVztcvd9z",
        "title": "My summer holiday",
        "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
        "thumbnail": {
          "width": 595,
          "height": 335,
          "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
        },
        "urls": {
          "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
          "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
        },
        "created_at": 1377396000,
        "updated_at": 1692928800,
        "page_count": 3
      }
    },
    "error": {
      "code": "content_not_allowed",
      "message": "string"
    }
  },
  "quota_usage": {
    "used_percentage": 0,
    "resets_at": 0,
    "using_bonus_credits": true,
    "usage_review_link": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[DesignGenerationJobV2](#schemadesigngenerationjobv2)|true|none|The status and result of a public design generation job.|
|quota_usage|object|false|none|Credit quota snapshot when available. Polling does not reserve or consume credits; omitted if unavailable.|

<h2 id="tocS_DesignGenerationJobV2">DesignGenerationJobV2</h2>
<!-- backwards compatibility -->
<a id="schemadesigngenerationjobv2"></a>
<a id="schema_DesignGenerationJobV2"></a>
<a id="tocSdesigngenerationjobv2"></a>
<a id="tocsdesigngenerationjobv2"></a>

```json
{
  "id": "f81b26fd-a33d-4c2d-9e8c-4a7aca798b17",
  "status": "failed",
  "result": {
    "design": {
      "id": "DAFVztcvd9z",
      "title": "My summer holiday",
      "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
      "thumbnail": {
        "width": 595,
        "height": 335,
        "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
      },
      "urls": {
        "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
        "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
      },
      "created_at": 1377396000,
      "updated_at": 1692928800,
      "page_count": 3
    }
  },
  "error": {
    "code": "content_not_allowed",
    "message": "string"
  }
}
```

The status and result of a public design generation job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The public design generation job ID.|
|status|[DesignGenerationJobStatusV2](#schemadesigngenerationjobstatusv2)|true|none|The public status of the job. `result` is present only for `success`, and<br>`error` is present only for `failed`.|
|result|[DesignGenerationJobResultV2](#schemadesigngenerationjobresultv2)|false|none|Present only when the job status is `success`.|
|error|[DesignGenerationJobErrorV2](#schemadesigngenerationjoberrorv2)|false|none|Details about a failed design generation job.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|failed|
|status|in_progress|
|status|success|

<h2 id="tocS_DesignGenerationJobStatusV2">DesignGenerationJobStatusV2</h2>
<!-- backwards compatibility -->
<a id="schemadesigngenerationjobstatusv2"></a>
<a id="schema_DesignGenerationJobStatusV2"></a>
<a id="tocSdesigngenerationjobstatusv2"></a>
<a id="tocsdesigngenerationjobstatusv2"></a>

```json
"failed"
```

The public status of the job. `result` is present only for `success`, and
`error` is present only for `failed`.

<h2 id="tocS_DesignGenerationJobResultV2">DesignGenerationJobResultV2</h2>
<!-- backwards compatibility -->
<a id="schemadesigngenerationjobresultv2"></a>
<a id="schema_DesignGenerationJobResultV2"></a>
<a id="tocSdesigngenerationjobresultv2"></a>
<a id="tocsdesigngenerationjobresultv2"></a>

```json
{
  "design": {
    "id": "DAFVztcvd9z",
    "title": "My summer holiday",
    "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    },
    "urls": {
      "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
      "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
    },
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "page_count": 3
  }
}
```

Present only when the job status is `success`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|design|[DesignSummary](#schemadesignsummary)|true|none|Basic details about the design, such as the design's ID, title, and URL.|

<h2 id="tocS_DesignGenerationJobErrorV2">DesignGenerationJobErrorV2</h2>
<!-- backwards compatibility -->
<a id="schemadesigngenerationjoberrorv2"></a>
<a id="schema_DesignGenerationJobErrorV2"></a>
<a id="tocSdesigngenerationjoberrorv2"></a>
<a id="tocsdesigngenerationjoberrorv2"></a>

```json
{
  "code": "content_not_allowed",
  "message": "string"
}
```

Details about a failed design generation job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|[DesignGenerationJobErrorCodeV2](#schemadesigngenerationjoberrorcodev2)|true|none|The reason the design generation job failed.|
|message|string|true|none|A human-readable description of what went wrong.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|content_not_allowed|
|code|generation_failed|

<h2 id="tocS_DesignGenerationJobErrorCodeV2">DesignGenerationJobErrorCodeV2</h2>
<!-- backwards compatibility -->
<a id="schemadesigngenerationjoberrorcodev2"></a>
<a id="schema_DesignGenerationJobErrorCodeV2"></a>
<a id="tocSdesigngenerationjoberrorcodev2"></a>
<a id="tocsdesigngenerationjoberrorcodev2"></a>

```json
"content_not_allowed"
```

The reason the design generation job failed.

<h2 id="tocS_DesignImportMetadata">DesignImportMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadesignimportmetadata"></a>
<a id="schema_DesignImportMetadata"></a>
<a id="tocSdesignimportmetadata"></a>
<a id="tocsdesignimportmetadata"></a>

```json
{
  "title_base64": "TXkgQXdlc29tZSBEZXNpZ24g8J+YjQ==",
  "mime_type": "application/pdf"
}
```

Metadata about the design that you include as a header parameter when importing a design.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title_base64|string|true|none|The design's title, encoded in Base64.<br><br>The maximum length of a design title in Canva (unencoded) is 50 characters.<br><br>Base64 encoding allows titles containing emojis and other special<br>characters to be sent using HTTP headers.<br>For example, "My Awesome Design 😍" Base64 encoded<br>is `TXkgQXdlc29tZSBEZXNpZ24g8J+YjQ==`.|
|mime_type|string|false|none|The MIME type of the file being imported. If not provided, Canva attempts to automatically detect the type of the file.|

<h2 id="tocS_CreateDesignImportJobResponse">CreateDesignImportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedesignimportjobresponse"></a>
<a id="schema_CreateDesignImportJobResponse"></a>
<a id="tocScreatedesignimportjobresponse"></a>
<a id="tocscreatedesignimportjobresponse"></a>

```json
{
  "job": {
    "id": "e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8",
    "status": "success",
    "result": {
      "designs": [
        {
          "id": "DAFVztcvd9z",
          "title": "My summer holiday",
          "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
          "thumbnail": {
            "width": 595,
            "height": 335,
            "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
          },
          "urls": {
            "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
            "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
          },
          "created_at": 1377396000,
          "updated_at": 1692928800,
          "page_count": 3
        }
      ]
    },
    "error": {
      "code": "design_creation_throttled",
      "message": "We're sorry, but the file upload quota has exceeded. Please try again later."
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[DesignImportJob](#schemadesignimportjob)|true|none|The status of the design import job.|

<h2 id="tocS_DesignImportJob">DesignImportJob</h2>
<!-- backwards compatibility -->
<a id="schemadesignimportjob"></a>
<a id="schema_DesignImportJob"></a>
<a id="tocSdesignimportjob"></a>
<a id="tocsdesignimportjob"></a>

```json
{
  "id": "e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8",
  "status": "success",
  "result": {
    "designs": [
      {
        "id": "DAFVztcvd9z",
        "title": "My summer holiday",
        "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
        "thumbnail": {
          "width": 595,
          "height": 335,
          "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
        },
        "urls": {
          "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
          "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
        },
        "created_at": 1377396000,
        "updated_at": 1692928800,
        "page_count": 3
      }
    ]
  },
  "error": {
    "code": "design_creation_throttled",
    "message": "We're sorry, but the file upload quota has exceeded. Please try again later."
  }
}
```

The status of the design import job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the design import job.|
|status|[DesignImportStatus](#schemadesignimportstatus)|true|none|The status of the design import job.|
|result|[DesignImportJobResult](#schemadesignimportjobresult)|false|none|none|
|error|[DesignImportError](#schemadesignimporterror)|false|none|If the import job fails, this object provides details about the error.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|failed|
|status|in_progress|
|status|success|

<h2 id="tocS_DesignImportStatus">DesignImportStatus</h2>
<!-- backwards compatibility -->
<a id="schemadesignimportstatus"></a>
<a id="schema_DesignImportStatus"></a>
<a id="tocSdesignimportstatus"></a>
<a id="tocsdesignimportstatus"></a>

```json
"success"
```

The status of the design import job.

<h2 id="tocS_DesignImportError">DesignImportError</h2>
<!-- backwards compatibility -->
<a id="schemadesignimporterror"></a>
<a id="schema_DesignImportError"></a>
<a id="tocSdesignimporterror"></a>
<a id="tocsdesignimporterror"></a>

```json
{
  "code": "design_creation_throttled",
  "message": "We're sorry, but the file upload quota has exceeded. Please try again later."
}
```

If the import job fails, this object provides details about the error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|[DesignImportErrorCode](#schemadesignimporterrorcode)|true|none|A short string about why the import failed. This field can be used to handle errors<br>programmatically.|
|message|string|true|none|A human-readable description of what went wrong.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|design_creation_throttled|
|code|design_import_throttled|
|code|duplicate_import|
|code|internal_error|
|code|invalid_file|
|code|fetch_failed|

<h2 id="tocS_DesignImportErrorCode">DesignImportErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemadesignimporterrorcode"></a>
<a id="schema_DesignImportErrorCode"></a>
<a id="tocSdesignimporterrorcode"></a>
<a id="tocsdesignimporterrorcode"></a>

```json
"design_creation_throttled"
```

A short string about why the import failed. This field can be used to handle errors
programmatically.

<h2 id="tocS_DesignImportJobResult">DesignImportJobResult</h2>
<!-- backwards compatibility -->
<a id="schemadesignimportjobresult"></a>
<a id="schema_DesignImportJobResult"></a>
<a id="tocSdesignimportjobresult"></a>
<a id="tocsdesignimportjobresult"></a>

```json
{
  "designs": [
    {
      "id": "DAFVztcvd9z",
      "title": "My summer holiday",
      "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
      "thumbnail": {
        "width": 595,
        "height": 335,
        "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
      },
      "urls": {
        "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
        "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
      },
      "created_at": 1377396000,
      "updated_at": 1692928800,
      "page_count": 3
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|designs|[[DesignSummary](#schemadesignsummary)]|true|none|A list of designs imported from the external file. It usually contains one item.<br>Imports with a large number of pages or assets are split into multiple designs.|

<h2 id="tocS_GetDesignImportJobResponse">GetDesignImportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdesignimportjobresponse"></a>
<a id="schema_GetDesignImportJobResponse"></a>
<a id="tocSgetdesignimportjobresponse"></a>
<a id="tocsgetdesignimportjobresponse"></a>

```json
{
  "job": {
    "id": "e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8",
    "status": "success",
    "result": {
      "designs": [
        {
          "id": "DAFVztcvd9z",
          "title": "My summer holiday",
          "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
          "thumbnail": {
            "width": 595,
            "height": 335,
            "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
          },
          "urls": {
            "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
            "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
          },
          "created_at": 1377396000,
          "updated_at": 1692928800,
          "page_count": 3
        }
      ]
    },
    "error": {
      "code": "design_creation_throttled",
      "message": "We're sorry, but the file upload quota has exceeded. Please try again later."
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[DesignImportJob](#schemadesignimportjob)|true|none|The status of the design import job.|

<h2 id="tocS_CreateUrlImportJobRequest">CreateUrlImportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateurlimportjobrequest"></a>
<a id="schema_CreateUrlImportJobRequest"></a>
<a id="tocScreateurlimportjobrequest"></a>
<a id="tocscreateurlimportjobrequest"></a>

```json
{
  "title": "My Awesome Design",
  "url": "string",
  "mime_type": "application/vnd.apple.keynote"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|true|none|A title for the design.|
|url|string|true|none|The URL of the file to import. This URL must be accessible from the internet and be publicly available.|
|mime_type|string|false|none|The MIME type of the file being imported. If not provided, Canva attempts to automatically detect the type of the file.|

<h2 id="tocS_CreateUrlImportJobResponse">CreateUrlImportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateurlimportjobresponse"></a>
<a id="schema_CreateUrlImportJobResponse"></a>
<a id="tocScreateurlimportjobresponse"></a>
<a id="tocscreateurlimportjobresponse"></a>

```json
{
  "job": {
    "id": "e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8",
    "status": "success",
    "result": {
      "designs": [
        {
          "id": "DAFVztcvd9z",
          "title": "My summer holiday",
          "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
          "thumbnail": {
            "width": 595,
            "height": 335,
            "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
          },
          "urls": {
            "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
            "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
          },
          "created_at": 1377396000,
          "updated_at": 1692928800,
          "page_count": 3
        }
      ]
    },
    "error": {
      "code": "design_creation_throttled",
      "message": "We're sorry, but the file upload quota has exceeded. Please try again later."
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[DesignImportJob](#schemadesignimportjob)|true|none|The status of the design import job.|

<h2 id="tocS_GetUrlImportJobResponse">GetUrlImportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemageturlimportjobresponse"></a>
<a id="schema_GetUrlImportJobResponse"></a>
<a id="tocSgeturlimportjobresponse"></a>
<a id="tocsgeturlimportjobresponse"></a>

```json
{
  "job": {
    "id": "e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8",
    "status": "success",
    "result": {
      "designs": [
        {
          "id": "DAFVztcvd9z",
          "title": "My summer holiday",
          "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
          "thumbnail": {
            "width": 595,
            "height": 335,
            "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
          },
          "urls": {
            "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
            "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
          },
          "created_at": 1377396000,
          "updated_at": 1692928800,
          "page_count": 3
        }
      ]
    },
    "error": {
      "code": "design_creation_throttled",
      "message": "We're sorry, but the file upload quota has exceeded. Please try again later."
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[DesignImportJob](#schemadesignimportjob)|true|none|The status of the design import job.|

<h2 id="tocS_CreateImageToDesignImportJobRequest">CreateImageToDesignImportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateimagetodesignimportjobrequest"></a>
<a id="schema_CreateImageToDesignImportJobRequest"></a>
<a id="tocScreateimagetodesignimportjobrequest"></a>
<a id="tocscreateimagetodesignimportjobrequest"></a>

```json
{
  "image": {
    "asset_id": "Msd59349ff"
  },
  "title": "My Image Design"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image|[ImageSource](#schemaimagesource)|true|none|The image to convert into a design.|
|title|string|false|none|A title for the created design. If not provided, Canva generates a title.|

<h2 id="tocS_ImageSource">ImageSource</h2>
<!-- backwards compatibility -->
<a id="schemaimagesource"></a>
<a id="schema_ImageSource"></a>
<a id="tocSimagesource"></a>
<a id="tocsimagesource"></a>

```json
{
  "asset_id": "Msd59349ff"
}
```

The image to convert into a design.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset_id|string|true|none|The ID of an image asset in the user's Canva account.<br><br>The asset must be one of the following image types: `png`, `jpeg`, `gif`,<br>`webp`, `heic`, `heif`, `avif`, `tiff`, `jp2`, `jpx`, `jpm`, or `jxr`. Video<br>assets are not supported.|

<h2 id="tocS_CreateImageToDesignImportJobResponse">CreateImageToDesignImportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateimagetodesignimportjobresponse"></a>
<a id="schema_CreateImageToDesignImportJobResponse"></a>
<a id="tocScreateimagetodesignimportjobresponse"></a>
<a id="tocscreateimagetodesignimportjobresponse"></a>

```json
{
  "job": {
    "id": "f81b26fd-a33d-4c2d-9e8c-4a7aca798b17",
    "status": "success",
    "result": {
      "design": {
        "id": "DAFVztcvd9z",
        "title": "My summer holiday",
        "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
        "thumbnail": {
          "width": 595,
          "height": 335,
          "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
        },
        "urls": {
          "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
          "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
        },
        "created_at": 1377396000,
        "updated_at": 1692928800,
        "page_count": 3
      }
    },
    "error": {
      "code": "bad_input",
      "message": "The image could not be converted into a design."
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[ImageToDesignImportJob](#schemaimagetodesignimportjob)|true|none|The status and result of an image-to-design import job.|

<h2 id="tocS_GetImageToDesignImportJobResponse">GetImageToDesignImportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetimagetodesignimportjobresponse"></a>
<a id="schema_GetImageToDesignImportJobResponse"></a>
<a id="tocSgetimagetodesignimportjobresponse"></a>
<a id="tocsgetimagetodesignimportjobresponse"></a>

```json
{
  "job": {
    "id": "f81b26fd-a33d-4c2d-9e8c-4a7aca798b17",
    "status": "success",
    "result": {
      "design": {
        "id": "DAFVztcvd9z",
        "title": "My summer holiday",
        "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
        "thumbnail": {
          "width": 595,
          "height": 335,
          "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
        },
        "urls": {
          "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
          "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
        },
        "created_at": 1377396000,
        "updated_at": 1692928800,
        "page_count": 3
      }
    },
    "error": {
      "code": "bad_input",
      "message": "The image could not be converted into a design."
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[ImageToDesignImportJob](#schemaimagetodesignimportjob)|true|none|The status and result of an image-to-design import job.|

<h2 id="tocS_ImageToDesignImportJob">ImageToDesignImportJob</h2>
<!-- backwards compatibility -->
<a id="schemaimagetodesignimportjob"></a>
<a id="schema_ImageToDesignImportJob"></a>
<a id="tocSimagetodesignimportjob"></a>
<a id="tocsimagetodesignimportjob"></a>

```json
{
  "id": "f81b26fd-a33d-4c2d-9e8c-4a7aca798b17",
  "status": "success",
  "result": {
    "design": {
      "id": "DAFVztcvd9z",
      "title": "My summer holiday",
      "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
      "thumbnail": {
        "width": 595,
        "height": 335,
        "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
      },
      "urls": {
        "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
        "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
      },
      "created_at": 1377396000,
      "updated_at": 1692928800,
      "page_count": 3
    }
  },
  "error": {
    "code": "bad_input",
    "message": "The image could not be converted into a design."
  }
}
```

The status and result of an image-to-design import job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the image-to-design import job.|
|status|[DesignImportStatus](#schemadesignimportstatus)|true|none|The status of the design import job.|
|result|[ImageToDesignImportJobResult](#schemaimagetodesignimportjobresult)|false|none|none|
|error|[ImageToDesignImportError](#schemaimagetodesignimporterror)|false|none|If the import job fails, this object provides details about the error.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|failed|
|status|in_progress|
|status|success|

<h2 id="tocS_ImageToDesignImportJobResult">ImageToDesignImportJobResult</h2>
<!-- backwards compatibility -->
<a id="schemaimagetodesignimportjobresult"></a>
<a id="schema_ImageToDesignImportJobResult"></a>
<a id="tocSimagetodesignimportjobresult"></a>
<a id="tocsimagetodesignimportjobresult"></a>

```json
{
  "design": {
    "id": "DAFVztcvd9z",
    "title": "My summer holiday",
    "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    },
    "urls": {
      "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
      "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
    },
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "page_count": 3
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|design|[DesignSummary](#schemadesignsummary)|true|none|Basic details about the design, such as the design's ID, title, and URL.|

<h2 id="tocS_ImageToDesignImportError">ImageToDesignImportError</h2>
<!-- backwards compatibility -->
<a id="schemaimagetodesignimporterror"></a>
<a id="schema_ImageToDesignImportError"></a>
<a id="tocSimagetodesignimporterror"></a>
<a id="tocsimagetodesignimporterror"></a>

```json
{
  "code": "bad_input",
  "message": "The image could not be converted into a design."
}
```

If the import job fails, this object provides details about the error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|[ImageToDesignImportErrorCode](#schemaimagetodesignimporterrorcode)|true|none|A short string about why the import failed. This field can be used to handle errors<br>programmatically.|
|message|string|true|none|A human-readable description of what went wrong.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|bad_input|
|code|moderation_error|
|code|quota_exceeded|
|code|design_creation_throttled|
|code|internal_error|

<h2 id="tocS_ImageToDesignImportErrorCode">ImageToDesignImportErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaimagetodesignimporterrorcode"></a>
<a id="schema_ImageToDesignImportErrorCode"></a>
<a id="tocSimagetodesignimporterrorcode"></a>
<a id="tocsimagetodesignimporterrorcode"></a>

```json
"bad_input"
```

A short string about why the import failed. This field can be used to handle errors
programmatically.

<h2 id="tocS_DesignTypeInput">DesignTypeInput</h2>
<!-- backwards compatibility -->
<a id="schemadesigntypeinput"></a>
<a id="schema_DesignTypeInput"></a>
<a id="tocSdesigntypeinput"></a>
<a id="tocsdesigntypeinput"></a>

```json
{
  "type": "preset",
  "name": "doc"
}
```

The desired design type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[PresetDesignTypeInput](#schemapresetdesigntypeinput)|false|none|Provide the common design type.|
|*oneOf*|[CustomDesignTypeInput](#schemacustomdesigntypeinput)|false|none|Provide the width and height to define a custom design type.<br><br>Each dimension must be between 40 and 8000 pixels, and the<br>total area (width × height) must not exceed 25,000,000 pixels<br>squared. For example, a design with a width of 8000 pixels can<br>have a maximum height of 3125 pixels.|

<h2 id="tocS_PresetDesignTypeInput">PresetDesignTypeInput</h2>
<!-- backwards compatibility -->
<a id="schemapresetdesigntypeinput"></a>
<a id="schema_PresetDesignTypeInput"></a>
<a id="tocSpresetdesigntypeinput"></a>
<a id="tocspresetdesigntypeinput"></a>

```json
{
  "type": "preset",
  "name": "doc"
}
```

Provide the common design type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|name|[PresetDesignTypeName](#schemapresetdesigntypename)|true|none|The name of the design type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|preset|
|name|doc|
|name|email|
|name|presentation|
|name|whiteboard|

<h2 id="tocS_PresetDesignTypeName">PresetDesignTypeName</h2>
<!-- backwards compatibility -->
<a id="schemapresetdesigntypename"></a>
<a id="schema_PresetDesignTypeName"></a>
<a id="tocSpresetdesigntypename"></a>
<a id="tocspresetdesigntypename"></a>

```json
"doc"
```

The name of the design type.

<h2 id="tocS_CustomDesignTypeInput">CustomDesignTypeInput</h2>
<!-- backwards compatibility -->
<a id="schemacustomdesigntypeinput"></a>
<a id="schema_CustomDesignTypeInput"></a>
<a id="tocScustomdesigntypeinput"></a>
<a id="tocscustomdesigntypeinput"></a>

```json
{
  "type": "custom",
  "width": 320,
  "height": 200
}
```

Provide the width and height to define a custom design type.

Each dimension must be between 40 and 8000 pixels, and the
total area (width × height) must not exceed 25,000,000 pixels
squared. For example, a design with a width of 8000 pixels can
have a maximum height of 3125 pixels.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|width|integer(int32)|true|none|The width of the design, in pixels.|
|height|integer(int32)|true|none|The height of the design, in pixels.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|custom|

<h2 id="tocS_DesignTypeOutputName">DesignTypeOutputName</h2>
<!-- backwards compatibility -->
<a id="schemadesigntypeoutputname"></a>
<a id="schema_DesignTypeOutputName"></a>
<a id="tocSdesigntypeoutputname"></a>
<a id="tocsdesigntypeoutputname"></a>

```json
"presentation"
```

The type of content a design or page contains. The list of design types may grow over time. The `unknown` value represents design types that haven't been added to the list.

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": "internal_error",
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|[ErrorCode](#schemaerrorcode)|true|none|A short string indicating what failed. This field can be used to handle errors programmatically.<br>|
|message|string|true|none|A human-readable description of what went wrong.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|internal_error|
|code|invalid_field|
|code|invalid_header_value|
|code|permission_denied|
|code|too_many_requests|
|code|not_found|
|code|bad_request_body|
|code|bad_http_method|
|code|bad_request_params|
|code|bad_query_params|
|code|user_role_required|
|code|endpoint_not_found|
|code|endpoint_gone|
|code|unsupported_version|
|code|invalid_access_token|
|code|revoked_access_token|
|code|missing_field|
|code|missing_scope|
|code|invalid_grant|
|code|invalid_request|
|code|invalid_client|
|code|unauthorized_client|
|code|unsupported_grant_type|
|code|invalid_scope|
|code|invalid_basic_header|
|code|invalid_file_format|
|code|quota_exceeded|
|code|credit_quota_exceeded|
|code|credit_quota_cooldown|
|code|unsupported_content_type|
|code|request_too_large|
|code|folder_not_found|
|code|item_in_multiple_folders|
|code|asset_not_found|
|code|unsupported_asset|
|code|asset_not_ready|
|code|max_limit_reached|
|code|permission_not_found|
|code|permission_exists|
|code|unauthorized_user|
|code|user_not_found|
|code|user_not_eligible|
|code|group_not_found|
|code|app_not_found|
|code|app_has_non_draft_versions|
|code|invalid_status_transition|
|code|translation_validation_failed|
|code|content_not_found|
|code|doctype_not_found|
|code|design_not_found|
|code|offset_too_large|
|code|page_not_found|
|code|design_or_comment_not_found|
|code|design_or_thread_not_found|
|code|review_dismissed|
|code|design_type_not_found|
|code|team_not_found|
|code|team_is_default|
|code|comment_not_found|
|code|too_many_comments|
|code|too_many_replies|
|code|message_too_long|
|code|thread_not_found|
|code|reply_not_found|
|code|design_not_fillable|
|code|autofill_data_invalid|
|code|feature_not_available|
|code|unsupported_design_type|
|code|design_generation_not_enabled|
|code|design_generation_rejected|
|code|license_required|
|code|input_unsafe|
|code|display_name_unavailable|
|code|user_not_managed|
|code|saml_team_id_conflict|
|code|saml_name_id_not_available|
|code|user_linked_to_another_idp|
|code|user_email_unverified|
|code|user_not_active|
|code|user_pending_consent|
|code|account_exists|
|code|domain_restricted|
|code|user_already_member|

<h2 id="tocS_FeatureQuotaExceededError">FeatureQuotaExceededError</h2>
<!-- backwards compatibility -->
<a id="schemafeaturequotaexceedederror"></a>
<a id="schema_FeatureQuotaExceededError"></a>
<a id="tocSfeaturequotaexceedederror"></a>
<a id="tocsfeaturequotaexceedederror"></a>

```json
{
  "code": "internal_error",
  "message": "string",
  "upsell_url": "string"
}
```

Feature quota exceeded

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|[ErrorCode](#schemaerrorcode)|true|none|A short string indicating what failed. This field can be used to handle errors programmatically.<br>|
|message|string|true|none|A human-readable description of what went wrong.|
|upsell_url|string|true|none|URL to redirect users to upgrade their Canva account and reset their quota.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|internal_error|
|code|invalid_field|
|code|invalid_header_value|
|code|permission_denied|
|code|too_many_requests|
|code|not_found|
|code|bad_request_body|
|code|bad_http_method|
|code|bad_request_params|
|code|bad_query_params|
|code|user_role_required|
|code|endpoint_not_found|
|code|endpoint_gone|
|code|unsupported_version|
|code|invalid_access_token|
|code|revoked_access_token|
|code|missing_field|
|code|missing_scope|
|code|invalid_grant|
|code|invalid_request|
|code|invalid_client|
|code|unauthorized_client|
|code|unsupported_grant_type|
|code|invalid_scope|
|code|invalid_basic_header|
|code|invalid_file_format|
|code|quota_exceeded|
|code|credit_quota_exceeded|
|code|credit_quota_cooldown|
|code|unsupported_content_type|
|code|request_too_large|
|code|folder_not_found|
|code|item_in_multiple_folders|
|code|asset_not_found|
|code|unsupported_asset|
|code|asset_not_ready|
|code|max_limit_reached|
|code|permission_not_found|
|code|permission_exists|
|code|unauthorized_user|
|code|user_not_found|
|code|user_not_eligible|
|code|group_not_found|
|code|app_not_found|
|code|app_has_non_draft_versions|
|code|invalid_status_transition|
|code|translation_validation_failed|
|code|content_not_found|
|code|doctype_not_found|
|code|design_not_found|
|code|offset_too_large|
|code|page_not_found|
|code|design_or_comment_not_found|
|code|design_or_thread_not_found|
|code|review_dismissed|
|code|design_type_not_found|
|code|team_not_found|
|code|team_is_default|
|code|comment_not_found|
|code|too_many_comments|
|code|too_many_replies|
|code|message_too_long|
|code|thread_not_found|
|code|reply_not_found|
|code|design_not_fillable|
|code|autofill_data_invalid|
|code|feature_not_available|
|code|unsupported_design_type|
|code|design_generation_not_enabled|
|code|design_generation_rejected|
|code|license_required|
|code|input_unsafe|
|code|display_name_unavailable|
|code|user_not_managed|
|code|saml_team_id_conflict|
|code|saml_name_id_not_available|
|code|user_linked_to_another_idp|
|code|user_email_unverified|
|code|user_not_active|
|code|user_pending_consent|
|code|account_exists|
|code|domain_restricted|
|code|user_already_member|

<h2 id="tocS_OauthError">OauthError</h2>
<!-- backwards compatibility -->
<a id="schemaoautherror"></a>
<a id="schema_OauthError"></a>
<a id="tocSoautherror"></a>
<a id="tocsoautherror"></a>

```json
{
  "error": "internal_error",
  "error_description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorCode](#schemaerrorcode)|true|none|A short string indicating what failed. This field can be used to handle errors programmatically.<br>|
|error_description|string|true|none|A human-readable description of what went wrong.|

#### Enumerated Values

|Property|Value|
|---|---|
|error|internal_error|
|error|invalid_field|
|error|invalid_header_value|
|error|permission_denied|
|error|too_many_requests|
|error|not_found|
|error|bad_request_body|
|error|bad_http_method|
|error|bad_request_params|
|error|bad_query_params|
|error|user_role_required|
|error|endpoint_not_found|
|error|endpoint_gone|
|error|unsupported_version|
|error|invalid_access_token|
|error|revoked_access_token|
|error|missing_field|
|error|missing_scope|
|error|invalid_grant|
|error|invalid_request|
|error|invalid_client|
|error|unauthorized_client|
|error|unsupported_grant_type|
|error|invalid_scope|
|error|invalid_basic_header|
|error|invalid_file_format|
|error|quota_exceeded|
|error|credit_quota_exceeded|
|error|credit_quota_cooldown|
|error|unsupported_content_type|
|error|request_too_large|
|error|folder_not_found|
|error|item_in_multiple_folders|
|error|asset_not_found|
|error|unsupported_asset|
|error|asset_not_ready|
|error|max_limit_reached|
|error|permission_not_found|
|error|permission_exists|
|error|unauthorized_user|
|error|user_not_found|
|error|user_not_eligible|
|error|group_not_found|
|error|app_not_found|
|error|app_has_non_draft_versions|
|error|invalid_status_transition|
|error|translation_validation_failed|
|error|content_not_found|
|error|doctype_not_found|
|error|design_not_found|
|error|offset_too_large|
|error|page_not_found|
|error|design_or_comment_not_found|
|error|design_or_thread_not_found|
|error|review_dismissed|
|error|design_type_not_found|
|error|team_not_found|
|error|team_is_default|
|error|comment_not_found|
|error|too_many_comments|
|error|too_many_replies|
|error|message_too_long|
|error|thread_not_found|
|error|reply_not_found|
|error|design_not_fillable|
|error|autofill_data_invalid|
|error|feature_not_available|
|error|unsupported_design_type|
|error|design_generation_not_enabled|
|error|design_generation_rejected|
|error|license_required|
|error|input_unsafe|
|error|display_name_unavailable|
|error|user_not_managed|
|error|saml_team_id_conflict|
|error|saml_name_id_not_available|
|error|user_linked_to_another_idp|
|error|user_email_unverified|
|error|user_not_active|
|error|user_pending_consent|
|error|account_exists|
|error|domain_restricted|
|error|user_already_member|

<h2 id="tocS_ErrorCode">ErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcode"></a>
<a id="schema_ErrorCode"></a>
<a id="tocSerrorcode"></a>
<a id="tocserrorcode"></a>

```json
"internal_error"
```

A short string indicating what failed. This field can be used to handle errors programmatically.

<h2 id="tocS_CreateDesignExportJobRequest">CreateDesignExportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedesignexportjobrequest"></a>
<a id="schema_CreateDesignExportJobRequest"></a>
<a id="tocScreatedesignexportjobrequest"></a>
<a id="tocscreatedesignexportjobrequest"></a>

```json
{
  "design_id": "DAVZr1z5464",
  "format": {
    "type": "pdf",
    "size": "a4",
    "pages": [
      2,
      3,
      4
    ]
  }
}
```

Body parameters for starting an export job for a design.
It must include a design ID, and one of the supported export formats.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|design_id|string|true|none|The design ID.|
|format|[ExportFormat](#schemaexportformat)|true|none|Details about the desired export format.|

<h2 id="tocS_ExportFormat">ExportFormat</h2>
<!-- backwards compatibility -->
<a id="schemaexportformat"></a>
<a id="schema_ExportFormat"></a>
<a id="tocSexportformat"></a>
<a id="tocsexportformat"></a>

```json
{
  "type": "pdf",
  "export_quality": "regular",
  "size": "a4",
  "pages": [
    2,
    3,
    4
  ]
}
```

Details about the desired export format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[PdfExportFormat](#schemapdfexportformat)|false|none|Export the design as a PDF. Providing a paper size is optional.|
|*oneOf*|[JpgExportFormat](#schemajpgexportformat)|false|none|Export the design as a JPEG. Compression quality must be provided. Height or width (or both)<br>may be specified, otherwise the file will be exported at it's default size.<br><br>If the user is on the Canva Free plan, the export height and width for a fixed-dimension design can't be upscaled by more than a factor of `1.125`.|
|*oneOf*|[PngExportFormat](#schemapngexportformat)|false|none|Export the design as a PNG. Height or width (or both) may be specified, otherwise<br>the file will be exported at it's default size. You may also specify whether to export the<br>file losslessly, and whether to export a multi-page design as a single image.<br><br>If the user is on the Canva Free plan, the export height and width for a fixed-dimension design can't be upscaled by more than a factor of `1.125`.|
|*oneOf*|[PptxExportFormat](#schemapptxexportformat)|false|none|Export the design as a PPTX.|
|*oneOf*|[GifExportFormat](#schemagifexportformat)|false|none|Export the design as a GIF. Height or width (or both) may be specified, otherwise the file<br>will be exported at it's default size. Large designs will be scaled down, and aspect ratio<br>will always be maintained.|
|*oneOf*|[Mp4ExportFormat](#schemamp4exportformat)|false|none|Export the design as an MP4. You must specify the quality of the exported video.|
|*oneOf*|[HtmlBundleExportFormat](#schemahtmlbundleexportformat)|false|none|Export the email design as an HTML bundle. An HTML bundle is a zip file that contains an HTML file and the associated assets.|
|*oneOf*|[HtmlStandaloneExportFormat](#schemahtmlstandaloneexportformat)|false|none|Export the email design as a standalone HTML file with hosted assets.|
|*oneOf*|[CsvExportFormat](#schemacsvexportformat)|false|none|Export the design as a CSV file. CSV export is only available for designs that contain<br>tabular data, such as Canva Sheets.|

<h2 id="tocS_PdfExportFormat">PdfExportFormat</h2>
<!-- backwards compatibility -->
<a id="schemapdfexportformat"></a>
<a id="schema_PdfExportFormat"></a>
<a id="tocSpdfexportformat"></a>
<a id="tocspdfexportformat"></a>

```json
{
  "type": "pdf",
  "export_quality": "regular",
  "size": "a4",
  "pages": [
    2,
    3,
    4
  ]
}
```

Export the design as a PDF. Providing a paper size is optional.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|export_quality|[ExportQuality](#schemaexportquality)|false|none|Specifies the export quality of the design.|
|size|[ExportPageSize](#schemaexportpagesize)|false|none|The paper size of the export PDF file. The `size` attribute is only supported for Documents (Canva Docs).|
|pages|[integer(int32)]|false|none|To specify which pages to export in a multi-page design, provide the page numbers as<br>an array. The first page in a design is page `1`.<br>If `pages` isn't specified, all the pages are exported.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|pdf|
|export_quality|regular|
|export_quality|pro|
|size|a4|
|size|a3|
|size|letter|
|size|legal|

<h2 id="tocS_GifExportFormat">GifExportFormat</h2>
<!-- backwards compatibility -->
<a id="schemagifexportformat"></a>
<a id="schema_GifExportFormat"></a>
<a id="tocSgifexportformat"></a>
<a id="tocsgifexportformat"></a>

```json
{
  "type": "gif",
  "export_quality": "regular",
  "height": 400,
  "width": 400,
  "pages": [
    2,
    3,
    4
  ]
}
```

Export the design as a GIF. Height or width (or both) may be specified, otherwise the file
will be exported at it's default size. Large designs will be scaled down, and aspect ratio
will always be maintained.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|export_quality|[ExportQuality](#schemaexportquality)|false|none|Specifies the export quality of the design.|
|height|integer(int32)|false|none|Specify the height in pixels of the exported image. Note the following behavior:<br><br>- If no height or width is specified, the image is exported using the dimensions of the design.<br>- If only one of height or width is specified, then the image is scaled to match that dimension, respecting the design's aspect ratio.<br>- If both the height and width are specified, but the values don't match the design's aspect ratio, the export defaults to the larger dimension.|
|width|integer(int32)|false|none|Specify the width in pixels of the exported image. Note the following behavior:<br><br>- If no width or height is specified, the image is exported using the dimensions of the design.<br>- If only one of width or height is specified, then the image is scaled to match that dimension, respecting the design's aspect ratio.<br>- If both the width and height are specified, but the values don't match the design's aspect ratio, the export defaults to the larger dimension.|
|pages|[integer(int32)]|false|none|To specify which pages to export in a multi-page design, provide the page numbers as<br>an array. The first page in a design is page `1`.<br>If `pages` isn't specified, all the pages are exported.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|gif|
|export_quality|regular|
|export_quality|pro|

<h2 id="tocS_JpgExportFormat">JpgExportFormat</h2>
<!-- backwards compatibility -->
<a id="schemajpgexportformat"></a>
<a id="schema_JpgExportFormat"></a>
<a id="tocSjpgexportformat"></a>
<a id="tocsjpgexportformat"></a>

```json
{
  "type": "jpg",
  "export_quality": "regular",
  "quality": 80,
  "height": 400,
  "width": 400,
  "pages": [
    2,
    3,
    4
  ]
}
```

Export the design as a JPEG. Compression quality must be provided. Height or width (or both)
may be specified, otherwise the file will be exported at it's default size.

If the user is on the Canva Free plan, the export height and width for a fixed-dimension design can't be upscaled by more than a factor of `1.125`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|export_quality|[ExportQuality](#schemaexportquality)|false|none|Specifies the export quality of the design.|
|quality|integer(int32)|true|none|For the `jpg` type, the `quality` of the exported JPEG determines how compressed the exported file should be. A _low_ `quality` value will create a file with a smaller file size, but the resulting file will have pixelated artifacts when compared to a file created with a _high_ `quality` value.|
|height|integer(int32)|false|none|Specify the height in pixels of the exported image. Note the following behavior:<br><br>- If no height or width is specified, the image is exported using the dimensions of the design.<br>- If only one of height or width is specified, then the image is scaled to match that dimension, respecting the design's aspect ratio.<br>- If both the height and width are specified, but the values don't match the design's aspect ratio, the export defaults to the larger dimension.|
|width|integer(int32)|false|none|Specify the width in pixels of the exported image. Note the following behavior:<br><br>- If no width or height is specified, the image is exported using the dimensions of the design.<br>- If only one of width or height is specified, then the image is scaled to match that dimension, respecting the design's aspect ratio.<br>- If both the width and height are specified, but the values don't match the design's aspect ratio, the export defaults to the larger dimension.|
|pages|[integer(int32)]|false|none|To specify which pages to export in a multi-page design, provide the page numbers as<br>an array. The first page in a design is page `1`.<br>If `pages` isn't specified, all the pages are exported.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|jpg|
|export_quality|regular|
|export_quality|pro|

<h2 id="tocS_PngExportFormat">PngExportFormat</h2>
<!-- backwards compatibility -->
<a id="schemapngexportformat"></a>
<a id="schema_PngExportFormat"></a>
<a id="tocSpngexportformat"></a>
<a id="tocspngexportformat"></a>

```json
{
  "type": "png",
  "export_quality": "regular",
  "height": 400,
  "width": 400,
  "lossless": true,
  "transparent_background": false,
  "as_single_image": false,
  "pages": [
    2,
    3,
    4
  ]
}
```

Export the design as a PNG. Height or width (or both) may be specified, otherwise
the file will be exported at it's default size. You may also specify whether to export the
file losslessly, and whether to export a multi-page design as a single image.

If the user is on the Canva Free plan, the export height and width for a fixed-dimension design can't be upscaled by more than a factor of `1.125`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|export_quality|[ExportQuality](#schemaexportquality)|false|none|Specifies the export quality of the design.|
|height|integer(int32)|false|none|Specify the height in pixels of the exported image. Note the following behavior:<br><br>- If no height or width is specified, the image is exported using the dimensions of the design.<br>- If only one of height or width is specified, then the image is scaled to match that dimension, respecting the design's aspect ratio.<br>- If both the height and width are specified, but the values don't match the design's aspect ratio, the export defaults to the larger dimension.|
|width|integer(int32)|false|none|Specify the width in pixels of the exported image. Note the following behavior:<br><br>- If no width or height is specified, the image is exported using the dimensions of the design.<br>- If only one of width or height is specified, then the image is scaled to match that dimension, respecting the design's aspect ratio.<br>- If both the width and height are specified, but the values don't match the design's aspect ratio, the export defaults to the larger dimension.|
|lossless|boolean|false|none|If set to `true` (default), the PNG is exported without compression.<br><br>If set to `false`, the PNG is compressed using a lossy compression algorithm.<br><br>AVAILABILITY: Lossy PNG compression is only available to users on a Canva plan that has premium features, such as Canva Pro. If the user is on the Canva Free plan and this parameter is set to `false`, the export operation will fail.|
|transparent_background|boolean|false|none|If set to `true`, the PNG is exported with a transparent background.<br><br>AVAILABILITY: This option is only available to users on a Canva plan that has premium features, such as Canva Pro. If the user is on the Canva Free plan and this parameter is set to `true`, the export operation will fail.|
|as_single_image|boolean|false|none|When `true`, multi-page designs are merged into a single image.<br>When `false` (default), each page is exported as a separate image.|
|pages|[integer(int32)]|false|none|To specify which pages to export in a multi-page design, provide the page numbers as<br>an array. The first page in a design is page `1`.<br>If `pages` isn't specified, all the pages are exported.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|png|
|export_quality|regular|
|export_quality|pro|

<h2 id="tocS_PptxExportFormat">PptxExportFormat</h2>
<!-- backwards compatibility -->
<a id="schemapptxexportformat"></a>
<a id="schema_PptxExportFormat"></a>
<a id="tocSpptxexportformat"></a>
<a id="tocspptxexportformat"></a>

```json
{
  "type": "pptx",
  "pages": [
    2,
    3,
    4
  ]
}
```

Export the design as a PPTX.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|pages|[integer(int32)]|false|none|To specify which pages to export in a multi-page design, provide the page numbers as<br>an array. The first page in a design is page `1`.<br>If `pages` isn't specified, all the pages are exported.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|pptx|

<h2 id="tocS_Mp4ExportFormat">Mp4ExportFormat</h2>
<!-- backwards compatibility -->
<a id="schemamp4exportformat"></a>
<a id="schema_Mp4ExportFormat"></a>
<a id="tocSmp4exportformat"></a>
<a id="tocsmp4exportformat"></a>

```json
{
  "type": "mp4",
  "export_quality": "regular",
  "quality": "horizontal_480p",
  "pages": [
    2,
    3,
    4
  ]
}
```

Export the design as an MP4. You must specify the quality of the exported video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|export_quality|[ExportQuality](#schemaexportquality)|false|none|Specifies the export quality of the design.|
|quality|[Mp4ExportQuality](#schemamp4exportquality)|true|none|The resolution of the exported video, as a target number of pixels. The resolution is one of<br>`480p`, `720p`, `1080p` or `4k`.<br><br>The exported video always has the same aspect ratio as the design, which matches creating a<br>download from the Canva editor. The resolution sets how many pixels to target, and the<br>design's aspect ratio decides how they're split between width and height, so the<br>`horizontal` and `vertical` values of a given resolution produce the same output:<br><br>- A 2160x3840 portrait design exported as `horizontal_4k` is 2160x3840, not 3840x2160. The<br>  orientation in the value's name doesn't rotate or crop the design.<br>- A 1000x2000 design exported as `horizontal_720p` is 678x1357, the 1:2 size closest to the<br>  921,600 pixels of 1280x720. Aspect ratios that don't match a standard video size aren't<br>  rounded to one.<br>- A square design exported as `horizontal_4k` or `vertical_4k` is 2880x2880, the square with<br>  the same number of pixels as 3840x2160.|
|pages|[integer(int32)]|false|none|To specify which pages to export in a multi-page design, provide the page numbers as<br>an array. The first page in a design is page `1`.<br>If `pages` isn't specified, all the pages are exported.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|mp4|
|export_quality|regular|
|export_quality|pro|
|quality|horizontal_480p|
|quality|horizontal_720p|
|quality|horizontal_1080p|
|quality|horizontal_4k|
|quality|vertical_480p|
|quality|vertical_720p|
|quality|vertical_1080p|
|quality|vertical_4k|

<h2 id="tocS_HtmlBundleExportFormat">HtmlBundleExportFormat</h2>
<!-- backwards compatibility -->
<a id="schemahtmlbundleexportformat"></a>
<a id="schema_HtmlBundleExportFormat"></a>
<a id="tocShtmlbundleexportformat"></a>
<a id="tocshtmlbundleexportformat"></a>

```json
{
  "type": "html_bundle",
  "pages": [
    1
  ]
}
```

Export the email design as an HTML bundle. An HTML bundle is a zip file that contains an HTML file and the associated assets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|pages|[integer(int32)]|false|none|The pages of the design to export. Currently only a single page can be exported. If not provided,<br>the first page of the design is used.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|html_bundle|

<h2 id="tocS_HtmlStandaloneExportFormat">HtmlStandaloneExportFormat</h2>
<!-- backwards compatibility -->
<a id="schemahtmlstandaloneexportformat"></a>
<a id="schema_HtmlStandaloneExportFormat"></a>
<a id="tocShtmlstandaloneexportformat"></a>
<a id="tocshtmlstandaloneexportformat"></a>

```json
{
  "type": "html_standalone",
  "pages": [
    1
  ]
}
```

Export the email design as a standalone HTML file with hosted assets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|pages|[integer(int32)]|false|none|The pages of the design to export. Currently only a single page can be exported. If not provided,<br>the first page of the design is used.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|html_standalone|

<h2 id="tocS_CsvExportFormat">CsvExportFormat</h2>
<!-- backwards compatibility -->
<a id="schemacsvexportformat"></a>
<a id="schema_CsvExportFormat"></a>
<a id="tocScsvexportformat"></a>
<a id="tocscsvexportformat"></a>

```json
{
  "type": "csv",
  "pages": [
    2,
    3,
    4
  ]
}
```

Export the design as a CSV file. CSV export is only available for designs that contain
tabular data, such as Canva Sheets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|pages|[integer(int32)]|false|none|To specify which pages to export in a multi-page design, provide the page numbers as<br>an array. The first page in a design is page `1`.<br>If `pages` isn't specified, all the pages are exported.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|csv|

<h2 id="tocS_CreateDesignExportJobResponse">CreateDesignExportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedesignexportjobresponse"></a>
<a id="schema_CreateDesignExportJobResponse"></a>
<a id="tocScreatedesignexportjobresponse"></a>
<a id="tocscreatedesignexportjobresponse"></a>

```json
{
  "job": {
    "id": "e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8",
    "status": "failed",
    "urls": [
      "https://export-download.canva.com/..."
    ],
    "error": {
      "code": "license_required",
      "message": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[ExportJob](#schemaexportjob)|true|none|The status of the export job.|

<h2 id="tocS_CreatePrintPartnerDesignExportJobRequest">CreatePrintPartnerDesignExportJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateprintpartnerdesignexportjobrequest"></a>
<a id="schema_CreatePrintPartnerDesignExportJobRequest"></a>
<a id="tocScreateprintpartnerdesignexportjobrequest"></a>
<a id="tocscreateprintpartnerdesignexportjobrequest"></a>

```json
{
  "design_id": "DAVZr1z5464",
  "format": {
    "type": "pdf"
  },
  "pages": [
    2,
    3,
    4
  ],
  "dimensions": {
    "width": 200,
    "height": 300,
    "units": "px"
  }
}
```

Body parameters for starting a Print Partner export job for a design.
It must include a design ID. Canva Docs are not supported for export.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|design_id|string|true|none|The design ID.|
|dimensions|[PrintPartnerExportDimensions](#schemaprintpartnerexportdimensions)|false|none|Dimensions of the export in the specified units. The design dimensions must be<br>within a scale factor of 0.3 and 3 of the requested export dimensions.|
|format|[PrintPartnerExportFormat](#schemaprintpartnerexportformat)|true|none|Details about the desired export format.|
|pages|[integer(int32)]|false|none|To specify which pages to export in a multi-page design, provide the page<br>numbers as an array. The first page in a design is page `1`.<br>If `pages` isn't specified, all the pages are exported.|

<h2 id="tocS_PrintPartnerExportDimensions">PrintPartnerExportDimensions</h2>
<!-- backwards compatibility -->
<a id="schemaprintpartnerexportdimensions"></a>
<a id="schema_PrintPartnerExportDimensions"></a>
<a id="tocSprintpartnerexportdimensions"></a>
<a id="tocsprintpartnerexportdimensions"></a>

```json
{
  "width": 1,
  "height": 1,
  "units": "px"
}
```

Dimensions of the export in the specified units. The design dimensions must be
within a scale factor of 0.3 and 3 of the requested export dimensions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|width|number(double)|false|none|The width of the exported image. Note the following behavior:<br><br>- If no height or width is specified, the image is exported using the dimensions of the design.<br>- If only one of height or width is specified, then the image is scaled to match that dimension, respecting the design's aspect ratio.<br>- If both the height and width are specified, but the values don't match the design's aspect ratio, the export defaults to the larger dimension.|
|height|number(double)|false|none|The height of the exported image.  Note the following behavior:<br><br>- If no height or width is specified, the image is exported using the dimensions of the design.<br>- If only one of height or width is specified, then the image is scaled to match that dimension, respecting the design's aspect ratio.<br>- If both the height and width are specified, but the values don't match the design's aspect ratio, the export defaults to the larger dimension.|
|units|[PrintPartnerExportDimensionsUnits](#schemaprintpartnerexportdimensionsunits)|false|none|The units of the dimensions. If no units are specified, pixels are used.|

#### Enumerated Values

|Property|Value|
|---|---|
|units|px|
|units|in|
|units|cm|
|units|mm|

<h2 id="tocS_PrintPartnerExportDimensionsUnits">PrintPartnerExportDimensionsUnits</h2>
<!-- backwards compatibility -->
<a id="schemaprintpartnerexportdimensionsunits"></a>
<a id="schema_PrintPartnerExportDimensionsUnits"></a>
<a id="tocSprintpartnerexportdimensionsunits"></a>
<a id="tocsprintpartnerexportdimensionsunits"></a>

```json
"px"
```

The units of the dimensions. If no units are specified, pixels are used.

<h2 id="tocS_PrintPartnerExportFormat">PrintPartnerExportFormat</h2>
<!-- backwards compatibility -->
<a id="schemaprintpartnerexportformat"></a>
<a id="schema_PrintPartnerExportFormat"></a>
<a id="tocSprintpartnerexportformat"></a>
<a id="tocsprintpartnerexportformat"></a>

```json
{
  "type": "pdf",
  "bleed": 3000,
  "crop_marks": false,
  "cmyk": false,
  "pdfx": false
}
```

Details about the desired export format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[PrintPartnerPdfExportFormat](#schemaprintpartnerpdfexportformat)|false|none|Export the design as a Print-quality PDF.|
|*oneOf*|[PrintPartnerJpgExportFormat](#schemaprintpartnerjpgexportformat)|false|none|Export the design as a print-quality JPEG.|
|*oneOf*|[PrintPartnerPngExportFormat](#schemaprintpartnerpngexportformat)|false|none|Export the design as a print-quality PNG.|

<h2 id="tocS_PrintPartnerPdfExportFormat">PrintPartnerPdfExportFormat</h2>
<!-- backwards compatibility -->
<a id="schemaprintpartnerpdfexportformat"></a>
<a id="schema_PrintPartnerPdfExportFormat"></a>
<a id="tocSprintpartnerpdfexportformat"></a>
<a id="tocsprintpartnerpdfexportformat"></a>

```json
{
  "type": "pdf",
  "bleed": 3000,
  "crop_marks": false,
  "cmyk": false,
  "pdfx": false
}
```

Export the design as a Print-quality PDF.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|bleed|integer(int32)|false|none|The size of the bleed that should be added to the design. The units of the bleed must be microns. This should match the bleed value used when creating the design with the [Create print partner design API](https://www.canva.dev/docs/apps/rest-apis/reference/print-partner/create-print-partner-design/). Use 0 for no bleed. If bleed is not specified, a default of 3000 microns is used.|
|crop_marks|boolean|false|none|Whether crop marks should be added to the image.|
|cmyk|boolean|false|none|Whether the PDF color space should be converted to CMYK.|
|pdfx|boolean|false|none|Whether the PDF standard should be updated to PDF/X, a printer friendly<br>standard.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|pdf|

<h2 id="tocS_PrintPartnerJpgExportFormat">PrintPartnerJpgExportFormat</h2>
<!-- backwards compatibility -->
<a id="schemaprintpartnerjpgexportformat"></a>
<a id="schema_PrintPartnerJpgExportFormat"></a>
<a id="tocSprintpartnerjpgexportformat"></a>
<a id="tocsprintpartnerjpgexportformat"></a>

```json
{
  "type": "jpg"
}
```

Export the design as a print-quality JPEG.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|jpg|

<h2 id="tocS_PrintPartnerPngExportFormat">PrintPartnerPngExportFormat</h2>
<!-- backwards compatibility -->
<a id="schemaprintpartnerpngexportformat"></a>
<a id="schema_PrintPartnerPngExportFormat"></a>
<a id="tocSprintpartnerpngexportformat"></a>
<a id="tocsprintpartnerpngexportformat"></a>

```json
{
  "type": "png"
}
```

Export the design as a print-quality PNG.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|png|

<h2 id="tocS_CreatePrintPartnerDesignExportJobResponse">CreatePrintPartnerDesignExportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateprintpartnerdesignexportjobresponse"></a>
<a id="schema_CreatePrintPartnerDesignExportJobResponse"></a>
<a id="tocScreateprintpartnerdesignexportjobresponse"></a>
<a id="tocscreateprintpartnerdesignexportjobresponse"></a>

```json
{
  "job": {
    "id": "e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8",
    "status": "failed",
    "urls": [
      "https://export-download.canva.com/..."
    ],
    "error": {
      "code": "license_required",
      "message": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[ExportJob](#schemaexportjob)|true|none|The status of the export job.|

<h2 id="tocS_GetDesignExportJobResponse">GetDesignExportJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdesignexportjobresponse"></a>
<a id="schema_GetDesignExportJobResponse"></a>
<a id="tocSgetdesignexportjobresponse"></a>
<a id="tocsgetdesignexportjobresponse"></a>

```json
{
  "job": {
    "id": "e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8",
    "status": "failed",
    "urls": [
      "https://export-download.canva.com/..."
    ],
    "error": {
      "code": "license_required",
      "message": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[ExportJob](#schemaexportjob)|true|none|The status of the export job.|

<h2 id="tocS_ExportJob">ExportJob</h2>
<!-- backwards compatibility -->
<a id="schemaexportjob"></a>
<a id="schema_ExportJob"></a>
<a id="tocSexportjob"></a>
<a id="tocsexportjob"></a>

```json
{
  "id": "e08861ae-3b29-45db-8dc1-1fe0bf7f1cc8",
  "status": "failed",
  "urls": [
    "https://export-download.canva.com/..."
  ],
  "error": {
    "code": "license_required",
    "message": "string"
  }
}
```

The status of the export job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The export job ID.|
|status|[DesignExportStatus](#schemadesignexportstatus)|true|none|The export status of the job. A newly created job will be `in_progress` and will eventually<br>become `success` or `failed`.|
|urls|[string]|false|none|Download URL(s) for the completed export job. These URLs expire after 24 hours.<br><br>Depending on the design type and export format, there is a download URL for each page in the design. The list is sorted by page order.|
|error|[ExportError](#schemaexporterror)|false|none|If the export fails, this object provides details about the error.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|failed|
|status|in_progress|
|status|success|

<h2 id="tocS_ExportPageSize">ExportPageSize</h2>
<!-- backwards compatibility -->
<a id="schemaexportpagesize"></a>
<a id="schema_ExportPageSize"></a>
<a id="tocSexportpagesize"></a>
<a id="tocsexportpagesize"></a>

```json
"a4"
```

The paper size of the export PDF file. The `size` attribute is only supported for Documents (Canva Docs).

<h2 id="tocS_DesignExportStatus">DesignExportStatus</h2>
<!-- backwards compatibility -->
<a id="schemadesignexportstatus"></a>
<a id="schema_DesignExportStatus"></a>
<a id="tocSdesignexportstatus"></a>
<a id="tocsdesignexportstatus"></a>

```json
"failed"
```

The export status of the job. A newly created job will be `in_progress` and will eventually
become `success` or `failed`.

<h2 id="tocS_ExportHeight">ExportHeight</h2>
<!-- backwards compatibility -->
<a id="schemaexportheight"></a>
<a id="schema_ExportHeight"></a>
<a id="tocSexportheight"></a>
<a id="tocsexportheight"></a>

```json
400
```

Specify the height in pixels of the exported image. Note the following behavior:

- If no height or width is specified, the image is exported using the dimensions of the design.
- If only one of height or width is specified, then the image is scaled to match that dimension, respecting the design's aspect ratio.
- If both the height and width are specified, but the values don't match the design's aspect ratio, the export defaults to the larger dimension.

<h2 id="tocS_ExportWidth">ExportWidth</h2>
<!-- backwards compatibility -->
<a id="schemaexportwidth"></a>
<a id="schema_ExportWidth"></a>
<a id="tocSexportwidth"></a>
<a id="tocsexportwidth"></a>

```json
400
```

Specify the width in pixels of the exported image. Note the following behavior:

- If no width or height is specified, the image is exported using the dimensions of the design.
- If only one of width or height is specified, then the image is scaled to match that dimension, respecting the design's aspect ratio.
- If both the width and height are specified, but the values don't match the design's aspect ratio, the export defaults to the larger dimension.

<h2 id="tocS_Mp4ExportQuality">Mp4ExportQuality</h2>
<!-- backwards compatibility -->
<a id="schemamp4exportquality"></a>
<a id="schema_Mp4ExportQuality"></a>
<a id="tocSmp4exportquality"></a>
<a id="tocsmp4exportquality"></a>

```json
"horizontal_480p"
```

The resolution of the exported video, as a target number of pixels. The resolution is one of
`480p`, `720p`, `1080p` or `4k`.

The exported video always has the same aspect ratio as the design, which matches creating a
download from the Canva editor. The resolution sets how many pixels to target, and the
design's aspect ratio decides how they're split between width and height, so the
`horizontal` and `vertical` values of a given resolution produce the same output:

- A 2160x3840 portrait design exported as `horizontal_4k` is 2160x3840, not 3840x2160. The
  orientation in the value's name doesn't rotate or crop the design.
- A 1000x2000 design exported as `horizontal_720p` is 678x1357, the 1:2 size closest to the
  921,600 pixels of 1280x720. Aspect ratios that don't match a standard video size aren't
  rounded to one.
- A square design exported as `horizontal_4k` or `vertical_4k` is 2880x2880, the square with
  the same number of pixels as 3840x2160.

<h2 id="tocS_ExportFormatOptions">ExportFormatOptions</h2>
<!-- backwards compatibility -->
<a id="schemaexportformatoptions"></a>
<a id="schema_ExportFormatOptions"></a>
<a id="tocSexportformatoptions"></a>
<a id="tocsexportformatoptions"></a>

```json
{
  "pdf": {
    "page_numbers": [
      1,
      2,
      3
    ]
  },
  "jpg": {
    "page_numbers": [
      1,
      2,
      3
    ]
  },
  "png": {
    "page_numbers": [
      1,
      2,
      3
    ]
  },
  "svg": {
    "page_numbers": [
      1,
      2,
      3
    ]
  },
  "pptx": {
    "page_numbers": [
      1,
      2,
      3
    ]
  },
  "gif": {
    "page_numbers": [
      1,
      2,
      3
    ]
  },
  "mp4": {
    "page_numbers": [
      1,
      2,
      3
    ]
  },
  "html_bundle": {
    "page_numbers": [
      1,
      2,
      3
    ]
  },
  "html_standalone": {
    "page_numbers": [
      1,
      2,
      3
    ]
  },
  "csv": {
    "page_numbers": [
      1,
      2,
      3
    ]
  }
}
```

The available file formats for exporting the design.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pdf|[PdfExportFormatOption](#schemapdfexportformatoption)|false|none|Whether the design can be exported as a PDF.|
|jpg|[JpgExportFormatOption](#schemajpgexportformatoption)|false|none|Whether the design can be exported as a JPEG.|
|png|[PngExportFormatOption](#schemapngexportformatoption)|false|none|Whether the design can be exported as a PNG.|
|svg|[SvgExportFormatOption](#schemasvgexportformatoption)|false|none|Whether the design can be exported as an SVG.|
|pptx|[PptxExportFormatOption](#schemapptxexportformatoption)|false|none|Whether the design can be exported as a PPTX.|
|gif|[GifExportFormatOption](#schemagifexportformatoption)|false|none|Whether the design can be exported as a GIF.|
|mp4|[Mp4ExportFormatOption](#schemamp4exportformatoption)|false|none|Whether the design can be exported as an MP4.|
|html_bundle|[HtmlBundleExportFormatOption](#schemahtmlbundleexportformatoption)|false|none|Whether the design can be exported as an HTML bundle.|
|html_standalone|[HtmlStandaloneExportFormatOption](#schemahtmlstandaloneexportformatoption)|false|none|Whether the design can be exported as an standalone HTML file.|
|csv|[CsvExportFormatOption](#schemacsvexportformatoption)|false|none|Whether the design can be exported as a CSV file.|

<h2 id="tocS_PdfExportFormatOption">PdfExportFormatOption</h2>
<!-- backwards compatibility -->
<a id="schemapdfexportformatoption"></a>
<a id="schema_PdfExportFormatOption"></a>
<a id="tocSpdfexportformatoption"></a>
<a id="tocspdfexportformatoption"></a>

```json
{
  "page_numbers": [
    1,
    2,
    3
  ]
}
```

Whether the design can be exported as a PDF.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page_numbers|[integer(int32)]|false|none|The page numbers in the design that support this export format, in ascending order. The first page in a design is page `1`. If omitted, the format is supported by all pages in the design.|

<h2 id="tocS_GifExportFormatOption">GifExportFormatOption</h2>
<!-- backwards compatibility -->
<a id="schemagifexportformatoption"></a>
<a id="schema_GifExportFormatOption"></a>
<a id="tocSgifexportformatoption"></a>
<a id="tocsgifexportformatoption"></a>

```json
{
  "page_numbers": [
    1,
    2,
    3
  ]
}
```

Whether the design can be exported as a GIF.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page_numbers|[integer(int32)]|false|none|The page numbers in the design that support this export format, in ascending order. The first page in a design is page `1`. If omitted, the format is supported by all pages in the design.|

<h2 id="tocS_JpgExportFormatOption">JpgExportFormatOption</h2>
<!-- backwards compatibility -->
<a id="schemajpgexportformatoption"></a>
<a id="schema_JpgExportFormatOption"></a>
<a id="tocSjpgexportformatoption"></a>
<a id="tocsjpgexportformatoption"></a>

```json
{
  "page_numbers": [
    1,
    2,
    3
  ]
}
```

Whether the design can be exported as a JPEG.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page_numbers|[integer(int32)]|false|none|The page numbers in the design that support this export format, in ascending order. The first page in a design is page `1`. If omitted, the format is supported by all pages in the design.|

<h2 id="tocS_PngExportFormatOption">PngExportFormatOption</h2>
<!-- backwards compatibility -->
<a id="schemapngexportformatoption"></a>
<a id="schema_PngExportFormatOption"></a>
<a id="tocSpngexportformatoption"></a>
<a id="tocspngexportformatoption"></a>

```json
{
  "page_numbers": [
    1,
    2,
    3
  ]
}
```

Whether the design can be exported as a PNG.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page_numbers|[integer(int32)]|false|none|The page numbers in the design that support this export format, in ascending order. The first page in a design is page `1`. If omitted, the format is supported by all pages in the design.|

<h2 id="tocS_SvgExportFormatOption">SvgExportFormatOption</h2>
<!-- backwards compatibility -->
<a id="schemasvgexportformatoption"></a>
<a id="schema_SvgExportFormatOption"></a>
<a id="tocSsvgexportformatoption"></a>
<a id="tocssvgexportformatoption"></a>

```json
{
  "page_numbers": [
    1,
    2,
    3
  ]
}
```

Whether the design can be exported as an SVG.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page_numbers|[integer(int32)]|false|none|The page numbers in the design that support this export format, in ascending order. The first page in a design is page `1`. If omitted, the format is supported by all pages in the design.|

<h2 id="tocS_PptxExportFormatOption">PptxExportFormatOption</h2>
<!-- backwards compatibility -->
<a id="schemapptxexportformatoption"></a>
<a id="schema_PptxExportFormatOption"></a>
<a id="tocSpptxexportformatoption"></a>
<a id="tocspptxexportformatoption"></a>

```json
{
  "page_numbers": [
    1,
    2,
    3
  ]
}
```

Whether the design can be exported as a PPTX.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page_numbers|[integer(int32)]|false|none|The page numbers in the design that support this export format, in ascending order. The first page in a design is page `1`. If omitted, the format is supported by all pages in the design.|

<h2 id="tocS_Mp4ExportFormatOption">Mp4ExportFormatOption</h2>
<!-- backwards compatibility -->
<a id="schemamp4exportformatoption"></a>
<a id="schema_Mp4ExportFormatOption"></a>
<a id="tocSmp4exportformatoption"></a>
<a id="tocsmp4exportformatoption"></a>

```json
{
  "page_numbers": [
    1,
    2,
    3
  ]
}
```

Whether the design can be exported as an MP4.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page_numbers|[integer(int32)]|false|none|The page numbers in the design that support this export format, in ascending order. The first page in a design is page `1`. If omitted, the format is supported by all pages in the design.|

<h2 id="tocS_HtmlBundleExportFormatOption">HtmlBundleExportFormatOption</h2>
<!-- backwards compatibility -->
<a id="schemahtmlbundleexportformatoption"></a>
<a id="schema_HtmlBundleExportFormatOption"></a>
<a id="tocShtmlbundleexportformatoption"></a>
<a id="tocshtmlbundleexportformatoption"></a>

```json
{
  "page_numbers": [
    1,
    2,
    3
  ]
}
```

Whether the design can be exported as an HTML bundle.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page_numbers|[integer(int32)]|false|none|The page numbers in the design that support this export format, in ascending order. The first page in a design is page `1`. If omitted, the format is supported by all pages in the design.|

<h2 id="tocS_HtmlStandaloneExportFormatOption">HtmlStandaloneExportFormatOption</h2>
<!-- backwards compatibility -->
<a id="schemahtmlstandaloneexportformatoption"></a>
<a id="schema_HtmlStandaloneExportFormatOption"></a>
<a id="tocShtmlstandaloneexportformatoption"></a>
<a id="tocshtmlstandaloneexportformatoption"></a>

```json
{
  "page_numbers": [
    1,
    2,
    3
  ]
}
```

Whether the design can be exported as an standalone HTML file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page_numbers|[integer(int32)]|false|none|The page numbers in the design that support this export format, in ascending order. The first page in a design is page `1`. If omitted, the format is supported by all pages in the design.|

<h2 id="tocS_CsvExportFormatOption">CsvExportFormatOption</h2>
<!-- backwards compatibility -->
<a id="schemacsvexportformatoption"></a>
<a id="schema_CsvExportFormatOption"></a>
<a id="tocScsvexportformatoption"></a>
<a id="tocscsvexportformatoption"></a>

```json
{
  "page_numbers": [
    1,
    2,
    3
  ]
}
```

Whether the design can be exported as a CSV file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page_numbers|[integer(int32)]|false|none|The page numbers in the design that support this export format, in ascending order. The first page in a design is page `1`. If omitted, the format is supported by all pages in the design.|

<h2 id="tocS_ExportError">ExportError</h2>
<!-- backwards compatibility -->
<a id="schemaexporterror"></a>
<a id="schema_ExportError"></a>
<a id="tocSexporterror"></a>
<a id="tocsexporterror"></a>

```json
{
  "code": "license_required",
  "message": "string"
}
```

If the export fails, this object provides details about the error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|[ExportErrorCode](#schemaexporterrorcode)|true|none|If the export failed, this specifies the reason why it failed.|
|message|string|true|none|A human-readable description of what went wrong.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|license_required|
|code|approval_required|
|code|internal_failure|

<h2 id="tocS_ExportErrorCode">ExportErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaexporterrorcode"></a>
<a id="schema_ExportErrorCode"></a>
<a id="tocSexporterrorcode"></a>
<a id="tocsexporterrorcode"></a>

```json
"license_required"
```

If the export failed, this specifies the reason why it failed.

<h2 id="tocS_ExportQuality">ExportQuality</h2>
<!-- backwards compatibility -->
<a id="schemaexportquality"></a>
<a id="schema_ExportQuality"></a>
<a id="tocSexportquality"></a>
<a id="tocsexportquality"></a>

```json
"regular"
```

Specifies the export quality of the design.

<h2 id="tocS_FolderItemSortBy">FolderItemSortBy</h2>
<!-- backwards compatibility -->
<a id="schemafolderitemsortby"></a>
<a id="schema_FolderItemSortBy"></a>
<a id="tocSfolderitemsortby"></a>
<a id="tocsfolderitemsortby"></a>

```json
"modified_descending"
```

<h2 id="tocS_FolderItemType">FolderItemType</h2>
<!-- backwards compatibility -->
<a id="schemafolderitemtype"></a>
<a id="schema_FolderItemType"></a>
<a id="tocSfolderitemtype"></a>
<a id="tocsfolderitemtype"></a>

```json
"design"
```

<h2 id="tocS_FolderItemPinStatus">FolderItemPinStatus</h2>
<!-- backwards compatibility -->
<a id="schemafolderitempinstatus"></a>
<a id="schema_FolderItemPinStatus"></a>
<a id="tocSfolderitempinstatus"></a>
<a id="tocsfolderitempinstatus"></a>

```json
"any"
```

Filter folder items by their pinned status.

<h2 id="tocS_GetFolderResponse">GetFolderResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfolderresponse"></a>
<a id="schema_GetFolderResponse"></a>
<a id="tocSgetfolderresponse"></a>
<a id="tocsgetfolderresponse"></a>

```json
{
  "folder": {
    "id": "FAF2lZtloor",
    "name": "My awesome holiday",
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    }
  }
}
```

The folder ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|folder|[Folder](#schemafolder)|true|none|The folder object, which contains metadata about the folder.|

<h2 id="tocS_CreateFolderRequest">CreateFolderRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatefolderrequest"></a>
<a id="schema_CreateFolderRequest"></a>
<a id="tocScreatefolderrequest"></a>
<a id="tocscreatefolderrequest"></a>

```json
{
  "name": "My awesome holiday",
  "parent_folder_id": "FAF2lZtloor"
}
```

Body parameters for creating a new folder.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the folder.|
|parent_folder_id|string|true|none|The folder ID of the parent folder. To create a new folder at the top level of a user's<br>[projects](https://www.canva.com/help/find-designs-and-folders/), use the ID `root`.<br>To create it in their Uploads folder, use `uploads`.|

<h2 id="tocS_CreateFolderResponse">CreateFolderResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatefolderresponse"></a>
<a id="schema_CreateFolderResponse"></a>
<a id="tocScreatefolderresponse"></a>
<a id="tocscreatefolderresponse"></a>

```json
{
  "folder": {
    "id": "FAF2lZtloor",
    "name": "My awesome holiday",
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    }
  }
}
```

Details about the new folder.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|folder|[Folder](#schemafolder)|false|none|The folder object, which contains metadata about the folder.|

<h2 id="tocS_UpdateFolderRequest">UpdateFolderRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefolderrequest"></a>
<a id="schema_UpdateFolderRequest"></a>
<a id="tocSupdatefolderrequest"></a>
<a id="tocsupdatefolderrequest"></a>

```json
{
  "name": "My awesome holiday"
}
```

Body parameters for updating the folder's details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The folder name, as shown in the Canva UI.|

<h2 id="tocS_UpdateFolderResponse">UpdateFolderResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatefolderresponse"></a>
<a id="schema_UpdateFolderResponse"></a>
<a id="tocSupdatefolderresponse"></a>
<a id="tocsupdatefolderresponse"></a>

```json
{
  "folder": {
    "id": "FAF2lZtloor",
    "name": "My awesome holiday",
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    }
  }
}
```

Details about the updated folder.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|folder|[Folder](#schemafolder)|false|none|The folder object, which contains metadata about the folder.|

<h2 id="tocS_ListFolderItemsResponse">ListFolderItemsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfolderitemsresponse"></a>
<a id="schema_ListFolderItemsResponse"></a>
<a id="tocSlistfolderitemsresponse"></a>
<a id="tocslistfolderitemsresponse"></a>

```json
{
  "items": [
    {
      "type": "folder",
      "folder": {
        "id": "FAF2lZtloor",
        "name": "My awesome holiday",
        "created_at": 1377396000,
        "updated_at": 1692928800,
        "thumbnail": {
          "width": 595,
          "height": 335,
          "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
        }
      }
    }
  ],
  "continuation": "RkFGMgXlsVTDbMd:MR3L0QjiaUzycIAjx0yMyuNiV0OildoiOwL0x32G4NjNu4FwtAQNxowUQNMMYN"
}
```

A list of the items in a folder.
If the success response contains a continuation token, the folder contains more items
you can list. You can use this token as a query parameter and retrieve more
items from the list, for example
`/v1/folders/{folderId}/items?continuation={continuation}`.

To retrieve all the items in a folder, you might need to make multiple requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[FolderItemSummary](#schemafolderitemsummary)]|true|none|An array of items in the folder.|
|continuation|string|false|none|If the success response contains a continuation token, the folder contains more items<br>you can list. You can use this token as a query parameter and retrieve more<br>items from the list, for example<br>`/v1/folders/{folderId}/items?continuation={continuation}`.<br><br>To retrieve all the items in a folder, you might need to make multiple requests.|

<h2 id="tocS_FolderItemSummary">FolderItemSummary</h2>
<!-- backwards compatibility -->
<a id="schemafolderitemsummary"></a>
<a id="schema_FolderItemSummary"></a>
<a id="tocSfolderitemsummary"></a>
<a id="tocsfolderitemsummary"></a>

```json
{
  "type": "folder",
  "folder": {
    "id": "FAF2lZtloor",
    "name": "My awesome holiday",
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    }
  }
}
```

Details about the folder item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[FolderItem](#schemafolderitem)|false|none|Details about the folder.|
|*oneOf*|[DesignItem](#schemadesignitem)|false|none|Details about the design.|
|*oneOf*|[ImageItem](#schemaimageitem)|false|none|Details about the image asset.|
|*oneOf*|[BrandTemplateItem](#schemabrandtemplateitem)|false|none|Details about the brand template.|

<h2 id="tocS_FolderItem">FolderItem</h2>
<!-- backwards compatibility -->
<a id="schemafolderitem"></a>
<a id="schema_FolderItem"></a>
<a id="tocSfolderitem"></a>
<a id="tocsfolderitem"></a>

```json
{
  "type": "folder",
  "folder": {
    "id": "FAF2lZtloor",
    "name": "My awesome holiday",
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    }
  }
}
```

Details about the folder.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|folder|[Folder](#schemafolder)|true|none|The folder object, which contains metadata about the folder.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|folder|

<h2 id="tocS_DesignItem">DesignItem</h2>
<!-- backwards compatibility -->
<a id="schemadesignitem"></a>
<a id="schema_DesignItem"></a>
<a id="tocSdesignitem"></a>
<a id="tocsdesignitem"></a>

```json
{
  "type": "design",
  "design": {
    "id": "DAFVztcvd9z",
    "title": "My summer holiday",
    "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    },
    "urls": {
      "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
      "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
    },
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "page_count": 3
  }
}
```

Details about the design.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|design|[DesignSummary](#schemadesignsummary)|true|none|Basic details about the design, such as the design's ID, title, and URL.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|design|

<h2 id="tocS_ImageItem">ImageItem</h2>
<!-- backwards compatibility -->
<a id="schemaimageitem"></a>
<a id="schema_ImageItem"></a>
<a id="tocSimageitem"></a>
<a id="tocsimageitem"></a>

```json
{
  "type": "image",
  "image": {
    "type": "image",
    "id": "Msd59349ff",
    "name": "My Awesome Upload",
    "tags": [
      "image",
      "holiday",
      "best day ever"
    ],
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    }
  }
}
```

Details about the image asset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|image|[AssetSummary](#schemaassetsummary)|true|none|An object representing an asset with associated metadata.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|image|

<h2 id="tocS_BrandTemplateItem">BrandTemplateItem</h2>
<!-- backwards compatibility -->
<a id="schemabrandtemplateitem"></a>
<a id="schema_BrandTemplateItem"></a>
<a id="tocSbrandtemplateitem"></a>
<a id="tocsbrandtemplateitem"></a>

```json
{
  "type": "brand_template",
  "brand_template": {
    "id": "DEMzWSwy3BI",
    "title": "Advertisement Template",
    "view_url": "https://www.canva.com/design/DAE35hE8FA4/view",
    "create_url": "https://www.canva.com/design/DAE35hE8FA4/remix",
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    },
    "created_at": 1704110400,
    "updated_at": 1719835200
  }
}
```

Details about the brand template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|brand_template|[BrandTemplateSummary](#schemabrandtemplatesummary)|true|none|An object representing a brand template with associated metadata.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|brand_template|

<h2 id="tocS_MoveFolderItemRequest">MoveFolderItemRequest</h2>
<!-- backwards compatibility -->
<a id="schemamovefolderitemrequest"></a>
<a id="schema_MoveFolderItemRequest"></a>
<a id="tocSmovefolderitemrequest"></a>
<a id="tocsmovefolderitemrequest"></a>

```json
{
  "to_folder_id": "FAF2lZtloor",
  "item_id": "Msd59349ff"
}
```

Body parameters for moving the folder.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|to_folder_id|string|true|none|The ID of the folder you want to move the item to (the destination folder).<br>If you want to move the item to the top level of a Canva user's<br>[projects](https://www.canva.com/help/find-designs-and-folders/), use the ID `root`.|
|item_id|string|true|none|The ID of the item you want to move. Currently, video assets are not supported.|

<h2 id="tocS_Folder">Folder</h2>
<!-- backwards compatibility -->
<a id="schemafolder"></a>
<a id="schema_Folder"></a>
<a id="tocSfolder"></a>
<a id="tocsfolder"></a>

```json
{
  "id": "FAF2lZtloor",
  "name": "My awesome holiday",
  "created_at": 1377396000,
  "updated_at": 1692928800,
  "thumbnail": {
    "width": 595,
    "height": 335,
    "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
  }
}
```

The folder object, which contains metadata about the folder.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The folder ID.|
|name|string|true|none|The folder name.|
|created_at|integer(int64)|true|none|When the folder was created, as a Unix timestamp (in seconds since the<br>Unix Epoch).|
|updated_at|integer(int64)|true|none|When the folder was last updated, as a Unix timestamp (in seconds since the<br>Unix Epoch).|
|thumbnail|[Thumbnail](#schemathumbnail)|false|none|A thumbnail image representing the object.|

<h2 id="tocS_FolderSummary">FolderSummary</h2>
<!-- backwards compatibility -->
<a id="schemafoldersummary"></a>
<a id="schema_FolderSummary"></a>
<a id="tocSfoldersummary"></a>
<a id="tocsfoldersummary"></a>

```json
{
  "id": "FAF2lZtloor",
  "title": "My awesome holiday",
  "name": "My awesome holiday",
  "created_at": 1377396000,
  "updated_at": 1692928800,
  "url": "https://www.canva.com/folder/FAF2lZtloor"
}
```

This object contains some folder metadata. You can retrieve additional metadata
using the folder ID and the `/v1/folders/{folderId}` endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The folder ID.|
|title|string|false|none|**Deprecated.** The folder name, as shown in the Canva UI. This property is deprecated, so you should<br>use the `name` property instead.|
|name|string|true|none|The folder name, as shown in the Canva UI.|
|created_at|integer(int64)|true|none|When the folder was created, as a Unix timestamp (in seconds since the<br>Unix Epoch).|
|updated_at|integer(int64)|true|none|When the folder was last updated, as a Unix timestamp (in seconds since the<br>Unix Epoch).|
|url|string|false|none|The folder URL.|

<h2 id="tocS_Group">Group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_Group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
{
  "id": "dl9n9SoWoExMsw6Ri1iTg",
  "display_name": "Sales team",
  "external": true
}
```

Metadata for the Canva Group, consisting of the Group ID,
display name, and whether it's an external Canva Group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the group with permissions to access the design.|
|display_name|string|false|none|The display name of the group.|
|external|boolean|true|none|Is the user making the API call (the authenticated user) and the Canva Group<br>from different Canva Teams?<br><br>- When `true`, the user and the group aren't in the same Canva Team.<br>- When `false`, the user and the group are in the same Canva Team.|

<h2 id="tocS_CreateImageGenerationJobRequest">CreateImageGenerationJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateimagegenerationjobrequest"></a>
<a id="schema_CreateImageGenerationJobRequest"></a>
<a id="tocScreateimagegenerationjobrequest"></a>
<a id="tocscreateimagegenerationjobrequest"></a>

```json
{
  "prompt": "string",
  "aspect_ratio": "square",
  "model": "craft_v1_2k",
  "idempotency_key": "550e8400-e29b-41d4-a716-446655440000",
  "asset_upload": {
    "type": "none"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prompt|string|true|none|A plain-text description of the image to generate.|
|aspect_ratio|[ImageGenerationAspectRatio](#schemaimagegenerationaspectratio)|false|none|The aspect ratio of the generated image. Every aspect ratio is supported by every model<br>you can select with `model`, so the choice of model never limits the aspect ratios you<br>can use. The pixel dimensions of the output depend on the model. The job result reports<br>the actual `width` and `height`.|
|model|[ImageGenerationModel](#schemaimagegenerationmodel)|false|none|The model to use for image generation. We recommend omitting this parameter: Canva<br>then selects the best available model for the request and falls back to another<br>model if one is temporarily unavailable. Set it only if you need a specific model's<br>output. If the requested model can't serve the request, the job fails. Canva never<br>uses a different model to serve the request.<br><br>The model strengths below are based on Canva's evaluations. Results vary by<br>prompt, so test with your own prompts before pinning a model.|
|idempotency_key|string(uuid)|true|none|A key to make create requests idempotent. Retrying with the same key returns the<br>original job without creating a duplicate, even if the other request parameters<br>differ. Keys are held for 24 hours from job creation.|
|asset_upload|[ImageGenerationAssetUpload](#schemaimagegenerationassetupload)|false|none|Whether to save the generated image as an image asset in the user's Canva account.<br>Omitting `asset_upload` (or using `type: none`) returns only a download URL.<br><br>Saving the asset (`type: upload`) requires a user access token.|

#### Enumerated Values

|Property|Value|
|---|---|
|aspect_ratio|square|
|aspect_ratio|landscape|
|aspect_ratio|portrait|
|aspect_ratio|landscape_3_2|
|aspect_ratio|portrait_2_3|
|aspect_ratio|portrait_4_5|
|model|craft_v1_2k|
|model|lucid_origin|
|model|z_image_turbo|

<h2 id="tocS_ImageGenerationAssetUpload">ImageGenerationAssetUpload</h2>
<!-- backwards compatibility -->
<a id="schemaimagegenerationassetupload"></a>
<a id="schema_ImageGenerationAssetUpload"></a>
<a id="tocSimagegenerationassetupload"></a>
<a id="tocsimagegenerationassetupload"></a>

```json
{
  "type": "none"
}
```

Whether to save the generated image as an image asset in the user's Canva account.
Omitting `asset_upload` (or using `type: none`) returns only a download URL.

Saving the asset (`type: upload`) requires a user access token.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[NoneImageGenerationAssetUpload](#schemanoneimagegenerationassetupload)|false|none|Don't save the generated image. The result contains only its download URL.|
|*oneOf*|[UploadImageGenerationAssetUpload](#schemauploadimagegenerationassetupload)|false|none|Save the generated image as an image asset in the user's Canva account. The asset appears<br>in the user's Uploads, and the generated image in the result includes the `asset`<br>alongside its download `url`.|

<h2 id="tocS_NoneImageGenerationAssetUpload">NoneImageGenerationAssetUpload</h2>
<!-- backwards compatibility -->
<a id="schemanoneimagegenerationassetupload"></a>
<a id="schema_NoneImageGenerationAssetUpload"></a>
<a id="tocSnoneimagegenerationassetupload"></a>
<a id="tocsnoneimagegenerationassetupload"></a>

```json
{
  "type": "none"
}
```

Don't save the generated image. The result contains only its download URL.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|none|

<h2 id="tocS_UploadImageGenerationAssetUpload">UploadImageGenerationAssetUpload</h2>
<!-- backwards compatibility -->
<a id="schemauploadimagegenerationassetupload"></a>
<a id="schema_UploadImageGenerationAssetUpload"></a>
<a id="tocSuploadimagegenerationassetupload"></a>
<a id="tocsuploadimagegenerationassetupload"></a>

```json
{
  "type": "upload",
  "asset_name": "Red apple on a wooden table"
}
```

Save the generated image as an image asset in the user's Canva account. The asset appears
in the user's Uploads, and the generated image in the result includes the `asset`
alongside its download `url`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|asset_name|string|false|none|A name for the image asset. Canva doesn't localize this value, so provide a name in<br>the user's language. If omitted, Canva generates a name for the asset.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|upload|

<h2 id="tocS_CreateImageGenerationJobResponse">CreateImageGenerationJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateimagegenerationjobresponse"></a>
<a id="schema_CreateImageGenerationJobResponse"></a>
<a id="tocScreateimagegenerationjobresponse"></a>
<a id="tocscreateimagegenerationjobresponse"></a>

```json
{
  "job": {
    "id": "string",
    "status": "failed",
    "result": {
      "image": {
        "url": "string",
        "asset": {
          "type": "image",
          "id": "Msd59349ff",
          "name": "My Awesome Upload",
          "tags": [
            "image",
            "holiday",
            "best day ever"
          ],
          "created_at": 1377396000,
          "updated_at": 1692928800,
          "thumbnail": {
            "width": 595,
            "height": 335,
            "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
          }
        },
        "width": 1024,
        "height": 1024
      }
    },
    "error": {
      "code": "unsafe_input",
      "message": "string"
    }
  },
  "quota_usage": {
    "used_percentage": 0,
    "resets_at": 0,
    "using_bonus_credits": true,
    "usage_review_link": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[ImageGenerationJob](#schemaimagegenerationjob)|true|none|Details about the image generation job. If the job status is `success`, the job's<br>`result` is present.|
|quota_usage|object|false|none|Credit quota usage after reserving credits for this job. Not present if quota data is unavailable.|

<h2 id="tocS_GetImageGenerationJobResponse">GetImageGenerationJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetimagegenerationjobresponse"></a>
<a id="schema_GetImageGenerationJobResponse"></a>
<a id="tocSgetimagegenerationjobresponse"></a>
<a id="tocsgetimagegenerationjobresponse"></a>

```json
{
  "job": {
    "id": "string",
    "status": "failed",
    "result": {
      "image": {
        "url": "string",
        "asset": {
          "type": "image",
          "id": "Msd59349ff",
          "name": "My Awesome Upload",
          "tags": [
            "image",
            "holiday",
            "best day ever"
          ],
          "created_at": 1377396000,
          "updated_at": 1692928800,
          "thumbnail": {
            "width": 595,
            "height": 335,
            "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
          }
        },
        "width": 1024,
        "height": 1024
      }
    },
    "error": {
      "code": "unsafe_input",
      "message": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[ImageGenerationJob](#schemaimagegenerationjob)|true|none|Details about the image generation job. If the job status is `success`, the job's<br>`result` is present.|

<h2 id="tocS_ImageGenerationJob">ImageGenerationJob</h2>
<!-- backwards compatibility -->
<a id="schemaimagegenerationjob"></a>
<a id="schema_ImageGenerationJob"></a>
<a id="tocSimagegenerationjob"></a>
<a id="tocsimagegenerationjob"></a>

```json
{
  "id": "string",
  "status": "failed",
  "result": {
    "image": {
      "url": "string",
      "asset": {
        "type": "image",
        "id": "Msd59349ff",
        "name": "My Awesome Upload",
        "tags": [
          "image",
          "holiday",
          "best day ever"
        ],
        "created_at": 1377396000,
        "updated_at": 1692928800,
        "thumbnail": {
          "width": 595,
          "height": 335,
          "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
        }
      },
      "width": 1024,
      "height": 1024
    }
  },
  "error": {
    "code": "unsafe_input",
    "message": "string"
  }
}
```

Details about the image generation job. If the job status is `success`, the job's
`result` is present.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The image generation job ID.|
|status|[ImageGenerationJobStatus](#schemaimagegenerationjobstatus)|true|none|The status of the image generation job. A newly created job will be `in_progress` and<br>will eventually become `success` or `failed`. If the status is `success`, the job's<br>`result` is present.|
|result|[ImageGenerationJobResult](#schemaimagegenerationjobresult)|false|none|Result of the image generation job. Only present if job status is `success`.|
|error|[ImageGenerationError](#schemaimagegenerationerror)|false|none|If the image generation job fails, this object provides details about the error. Only present if status is `failed`.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|failed|
|status|in_progress|
|status|success|

<h2 id="tocS_ImageGenerationJobResult">ImageGenerationJobResult</h2>
<!-- backwards compatibility -->
<a id="schemaimagegenerationjobresult"></a>
<a id="schema_ImageGenerationJobResult"></a>
<a id="tocSimagegenerationjobresult"></a>
<a id="tocsimagegenerationjobresult"></a>

```json
{
  "image": {
    "url": "string",
    "asset": {
      "type": "image",
      "id": "Msd59349ff",
      "name": "My Awesome Upload",
      "tags": [
        "image",
        "holiday",
        "best day ever"
      ],
      "created_at": 1377396000,
      "updated_at": 1692928800,
      "thumbnail": {
        "width": 595,
        "height": 335,
        "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
      }
    },
    "width": 1024,
    "height": 1024
  }
}
```

Result of the image generation job. Only present if job status is `success`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image|[GeneratedImage](#schemageneratedimage)|true|none|A generated image.|

<h2 id="tocS_GeneratedImage">GeneratedImage</h2>
<!-- backwards compatibility -->
<a id="schemageneratedimage"></a>
<a id="schema_GeneratedImage"></a>
<a id="tocSgeneratedimage"></a>
<a id="tocsgeneratedimage"></a>

```json
{
  "url": "string",
  "asset": {
    "type": "image",
    "id": "Msd59349ff",
    "name": "My Awesome Upload",
    "tags": [
      "image",
      "holiday",
      "best day ever"
    ],
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    }
  },
  "width": 1024,
  "height": 1024
}
```

A generated image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|A download URL for the generated image. The download URL is only valid for 24<br>hours.|
|asset|object|false|none|The image asset the generated image was saved as. Only present if the job was created<br>with `asset_upload` set to `type: upload` and the asset still exists (for example, it's<br>absent if the user has since deleted the asset).|
|width|integer(int32)|true|none|The width of the generated image in pixels.|
|height|integer(int32)|true|none|The height of the generated image in pixels.|

<h2 id="tocS_ImageGenerationJobStatus">ImageGenerationJobStatus</h2>
<!-- backwards compatibility -->
<a id="schemaimagegenerationjobstatus"></a>
<a id="schema_ImageGenerationJobStatus"></a>
<a id="tocSimagegenerationjobstatus"></a>
<a id="tocsimagegenerationjobstatus"></a>

```json
"failed"
```

The status of the image generation job. A newly created job will be `in_progress` and
will eventually become `success` or `failed`. If the status is `success`, the job's
`result` is present.

<h2 id="tocS_ImageGenerationModel">ImageGenerationModel</h2>
<!-- backwards compatibility -->
<a id="schemaimagegenerationmodel"></a>
<a id="schema_ImageGenerationModel"></a>
<a id="tocSimagegenerationmodel"></a>
<a id="tocsimagegenerationmodel"></a>

```json
"craft_v1_2k"
```

The model to use for image generation. We recommend omitting this parameter: Canva
then selects the best available model for the request and falls back to another
model if one is temporarily unavailable. Set it only if you need a specific model's
output. If the requested model can't serve the request, the job fails. Canva never
uses a different model to serve the request.

The model strengths below are based on Canva's evaluations. Results vary by
prompt, so test with your own prompts before pinning a model.

<h2 id="tocS_ImageGenerationAspectRatio">ImageGenerationAspectRatio</h2>
<!-- backwards compatibility -->
<a id="schemaimagegenerationaspectratio"></a>
<a id="schema_ImageGenerationAspectRatio"></a>
<a id="tocSimagegenerationaspectratio"></a>
<a id="tocsimagegenerationaspectratio"></a>

```json
"square"
```

The aspect ratio of the generated image. Every aspect ratio is supported by every model
you can select with `model`, so the choice of model never limits the aspect ratios you
can use. The pixel dimensions of the output depend on the model. The job result reports
the actual `width` and `height`.

<h2 id="tocS_ImageGenerationErrorCode">ImageGenerationErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaimagegenerationerrorcode"></a>
<a id="schema_ImageGenerationErrorCode"></a>
<a id="tocSimagegenerationerrorcode"></a>
<a id="tocsimagegenerationerrorcode"></a>

```json
"unsafe_input"
```

Error code indicating what went wrong with the image generation.

<h2 id="tocS_ImageGenerationError">ImageGenerationError</h2>
<!-- backwards compatibility -->
<a id="schemaimagegenerationerror"></a>
<a id="schema_ImageGenerationError"></a>
<a id="tocSimagegenerationerror"></a>
<a id="tocsimagegenerationerror"></a>

```json
{
  "code": "unsafe_input",
  "message": "string"
}
```

If the image generation job fails, this object provides details about the error. Only present if status is `failed`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|[ImageGenerationErrorCode](#schemaimagegenerationerrorcode)|true|none|Error code indicating what went wrong with the image generation.|
|message|string|true|none|A human-readable description of what went wrong.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|unsafe_input|
|code|timeout|
|code|model_not_available|
|code|model_retired|
|code|internal_error|

<h2 id="tocS_CreateImageTransformationJobRequest">CreateImageTransformationJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateimagetransformationjobrequest"></a>
<a id="schema_CreateImageTransformationJobRequest"></a>
<a id="tocScreateimagetransformationjobrequest"></a>
<a id="tocscreateimagetransformationjobrequest"></a>

```json
{
  "asset_id": "Msd59349ff",
  "name": "My Awesome Upload with the background removed",
  "transformations": [
    {
      "type": "background_removal"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset_id|string|true|none|The ID of the source asset to transform. The asset must be an image asset;<br>referencing any other asset type (such as a video) fails with an<br>`unsupported_content_type` error.<br><br>The asset must also have finished uploading. An asset that is still uploading has no<br>image to transform yet and fails with an `asset_not_ready` error. If you've just<br>created the asset, poll its upload job — for example with the<br>[Get asset upload job](https://www.canva.dev/docs/apps/rest-apis/reference/assets/get-asset-upload-job/)<br>endpoint — until it returns a `success` status before starting a transformation.|
|name|string|false|none|A name for the new image asset that the job produces. Canva doesn't localize this<br>value, so provide a name in the user's language. When omitted, the new asset inherits<br>the name of the source asset.|
|transformations|[[ImageTransformationType](#schemaimagetransformationtype)]|true|none|The transformations to apply, in order. Must contain at least one transformation.<br>Each transformation is stacked on the result of the previous one. The job's result<br>is a single new image asset with all of the transformations applied; intermediate<br>results are not returned.|

<h2 id="tocS_ImageTransformationType">ImageTransformationType</h2>
<!-- backwards compatibility -->
<a id="schemaimagetransformationtype"></a>
<a id="schema_ImageTransformationType"></a>
<a id="tocSimagetransformationtype"></a>
<a id="tocsimagetransformationtype"></a>

```json
{
  "type": "background_removal"
}
```

A transformation to apply to the image asset. Each transformation type is identified
by its `type` value and declares its own parameters; `background_removal` takes no
parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[BackgroundRemovalImageTransformation](#schemabackgroundremovalimagetransformation)|false|none|Removes the background from an image, keeping the foreground subject. The resulting<br>image has a transparent background. This transformation takes no parameters.<br><br>The output image is limited to a maximum of 10 megapixels. If the source image is<br>larger, the output image is scaled down to stay within this limit.<br><br>Requires the user to have the `background_removal` capability. To check this before<br>creating a job, use the<br>[Get user capabilities API](https://www.canva.dev/docs/apps/rest-apis/reference/users/get-user-capabilities/).|

<h2 id="tocS_BackgroundRemovalImageTransformation">BackgroundRemovalImageTransformation</h2>
<!-- backwards compatibility -->
<a id="schemabackgroundremovalimagetransformation"></a>
<a id="schema_BackgroundRemovalImageTransformation"></a>
<a id="tocSbackgroundremovalimagetransformation"></a>
<a id="tocsbackgroundremovalimagetransformation"></a>

```json
{
  "type": "background_removal"
}
```

Removes the background from an image, keeping the foreground subject. The resulting
image has a transparent background. This transformation takes no parameters.

The output image is limited to a maximum of 10 megapixels. If the source image is
larger, the output image is scaled down to stay within this limit.

Requires the user to have the `background_removal` capability. To check this before
creating a job, use the
[Get user capabilities API](https://www.canva.dev/docs/apps/rest-apis/reference/users/get-user-capabilities/).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of transformation to apply. Currently, the only supported value is<br>`background_removal`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|background_removal|

<h2 id="tocS_CreateImageTransformationJobResponse">CreateImageTransformationJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateimagetransformationjobresponse"></a>
<a id="schema_CreateImageTransformationJobResponse"></a>
<a id="tocScreateimagetransformationjobresponse"></a>
<a id="tocscreateimagetransformationjobresponse"></a>

```json
{
  "job": {
    "id": "string",
    "status": "failed",
    "result": {
      "asset": {
        "type": "image",
        "id": "Msd59349ff",
        "name": "My Awesome Upload",
        "tags": [
          "image",
          "holiday",
          "best day ever"
        ],
        "import_status": {
          "state": "success",
          "error": {
            "code": "file_too_big",
            "message": "string"
          }
        },
        "created_at": 1377396000,
        "updated_at": 1692928800,
        "owner": {
          "user_id": "auDAbliZ2rQNNOsUl5OLu",
          "team_id": "Oi2RJILTrKk0KRhRUZozX"
        },
        "thumbnail": {
          "width": 595,
          "height": 335,
          "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
        },
        "metadata": {
          "type": "image",
          "width": 1920,
          "height": 1080,
          "smart_tags": [
            "landscape",
            "sunset",
            "mountains",
            "nature"
          ]
        }
      }
    },
    "error": {
      "code": "no_foreground_found",
      "message": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[ImageTransformationJob](#schemaimagetransformationjob)|true|none|Details about the image transformation job. If the job status is `success`, the job's<br>`result` is present.|

<h2 id="tocS_GetImageTransformationJobResponse">GetImageTransformationJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetimagetransformationjobresponse"></a>
<a id="schema_GetImageTransformationJobResponse"></a>
<a id="tocSgetimagetransformationjobresponse"></a>
<a id="tocsgetimagetransformationjobresponse"></a>

```json
{
  "job": {
    "id": "string",
    "status": "failed",
    "result": {
      "asset": {
        "type": "image",
        "id": "Msd59349ff",
        "name": "My Awesome Upload",
        "tags": [
          "image",
          "holiday",
          "best day ever"
        ],
        "import_status": {
          "state": "success",
          "error": {
            "code": "file_too_big",
            "message": "string"
          }
        },
        "created_at": 1377396000,
        "updated_at": 1692928800,
        "owner": {
          "user_id": "auDAbliZ2rQNNOsUl5OLu",
          "team_id": "Oi2RJILTrKk0KRhRUZozX"
        },
        "thumbnail": {
          "width": 595,
          "height": 335,
          "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
        },
        "metadata": {
          "type": "image",
          "width": 1920,
          "height": 1080,
          "smart_tags": [
            "landscape",
            "sunset",
            "mountains",
            "nature"
          ]
        }
      }
    },
    "error": {
      "code": "no_foreground_found",
      "message": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[ImageTransformationJob](#schemaimagetransformationjob)|true|none|Details about the image transformation job. If the job status is `success`, the job's<br>`result` is present.|

<h2 id="tocS_ImageTransformationJob">ImageTransformationJob</h2>
<!-- backwards compatibility -->
<a id="schemaimagetransformationjob"></a>
<a id="schema_ImageTransformationJob"></a>
<a id="tocSimagetransformationjob"></a>
<a id="tocsimagetransformationjob"></a>

```json
{
  "id": "string",
  "status": "failed",
  "result": {
    "asset": {
      "type": "image",
      "id": "Msd59349ff",
      "name": "My Awesome Upload",
      "tags": [
        "image",
        "holiday",
        "best day ever"
      ],
      "import_status": {
        "state": "success",
        "error": {
          "code": "file_too_big",
          "message": "string"
        }
      },
      "created_at": 1377396000,
      "updated_at": 1692928800,
      "owner": {
        "user_id": "auDAbliZ2rQNNOsUl5OLu",
        "team_id": "Oi2RJILTrKk0KRhRUZozX"
      },
      "thumbnail": {
        "width": 595,
        "height": 335,
        "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
      },
      "metadata": {
        "type": "image",
        "width": 1920,
        "height": 1080,
        "smart_tags": [
          "landscape",
          "sunset",
          "mountains",
          "nature"
        ]
      }
    }
  },
  "error": {
    "code": "no_foreground_found",
    "message": "string"
  }
}
```

Details about the image transformation job. If the job status is `success`, the job's
`result` is present.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The image transformation job ID. Only present if the job status is `in_progress`.<br>A job that completes immediately returns its `result` or `error` directly and has<br>no ID to poll.|
|status|[ImageTransformationJobStatus](#schemaimagetransformationjobstatus)|true|none|The status of the image transformation job. A newly created job will be `in_progress`<br>and will eventually become `success` or `failed`. A job may also complete<br>immediately, returning `success` or `failed` from job creation. If the status is<br>`success`, the job's `result` is present.|
|result|[ImageTransformationJobResult](#schemaimagetransformationjobresult)|false|none|Result of the image transformation job. Only present if the job status is `success`.|
|error|[ImageTransformationError](#schemaimagetransformationerror)|false|none|If the image transformation job fails, this object provides details about the error.<br>Only present if the job status is `failed`.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|failed|
|status|in_progress|
|status|success|

<h2 id="tocS_ImageTransformationJobStatus">ImageTransformationJobStatus</h2>
<!-- backwards compatibility -->
<a id="schemaimagetransformationjobstatus"></a>
<a id="schema_ImageTransformationJobStatus"></a>
<a id="tocSimagetransformationjobstatus"></a>
<a id="tocsimagetransformationjobstatus"></a>

```json
"failed"
```

The status of the image transformation job. A newly created job will be `in_progress`
and will eventually become `success` or `failed`. A job may also complete
immediately, returning `success` or `failed` from job creation. If the status is
`success`, the job's `result` is present.

<h2 id="tocS_ImageTransformationJobResult">ImageTransformationJobResult</h2>
<!-- backwards compatibility -->
<a id="schemaimagetransformationjobresult"></a>
<a id="schema_ImageTransformationJobResult"></a>
<a id="tocSimagetransformationjobresult"></a>
<a id="tocsimagetransformationjobresult"></a>

```json
{
  "asset": {
    "type": "image",
    "id": "Msd59349ff",
    "name": "My Awesome Upload",
    "tags": [
      "image",
      "holiday",
      "best day ever"
    ],
    "import_status": {
      "state": "success",
      "error": {
        "code": "file_too_big",
        "message": "string"
      }
    },
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "owner": {
      "user_id": "auDAbliZ2rQNNOsUl5OLu",
      "team_id": "Oi2RJILTrKk0KRhRUZozX"
    },
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    },
    "metadata": {
      "type": "image",
      "width": 1920,
      "height": 1080,
      "smart_tags": [
        "landscape",
        "sunset",
        "mountains",
        "nature"
      ]
    }
  }
}
```

Result of the image transformation job. Only present if the job status is `success`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset|object|true|none|The new image asset produced by applying all of the requested transformations.|

<h2 id="tocS_ImageTransformationErrorCode">ImageTransformationErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaimagetransformationerrorcode"></a>
<a id="schema_ImageTransformationErrorCode"></a>
<a id="tocSimagetransformationerrorcode"></a>
<a id="tocsimagetransformationerrorcode"></a>

```json
"no_foreground_found"
```

Error code indicating what went wrong with the image transformation.

<h2 id="tocS_ImageTransformationError">ImageTransformationError</h2>
<!-- backwards compatibility -->
<a id="schemaimagetransformationerror"></a>
<a id="schema_ImageTransformationError"></a>
<a id="tocSimagetransformationerror"></a>
<a id="tocsimagetransformationerror"></a>

```json
{
  "code": "no_foreground_found",
  "message": "string"
}
```

If the image transformation job fails, this object provides details about the error.
Only present if the job status is `failed`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|[ImageTransformationErrorCode](#schemaimagetransformationerrorcode)|true|none|Error code indicating what went wrong with the image transformation.|
|message|string|true|none|A human-readable description of what went wrong.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|no_foreground_found|
|code|quota_exceeded|
|code|internal_error|

<h2 id="tocS_JsonWebKeySet">JsonWebKeySet</h2>
<!-- backwards compatibility -->
<a id="schemajsonwebkeyset"></a>
<a id="schema_JsonWebKeySet"></a>
<a id="tocSjsonwebkeyset"></a>
<a id="tocsjsonwebkeyset"></a>

```json
{
  "keys": [
    {
      "alg": "string",
      "kid": "string",
      "kty": "string",
      "n": "string",
      "e": "string",
      "use": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keys|[[JsonWebKey](#schemajsonwebkey)]|true|none|An array of JSON Web Key values. The order of keys has no meaning.|

<h2 id="tocS_JsonWebKey">JsonWebKey</h2>
<!-- backwards compatibility -->
<a id="schemajsonwebkey"></a>
<a id="schema_JsonWebKey"></a>
<a id="tocSjsonwebkey"></a>
<a id="tocsjsonwebkey"></a>

```json
{
  "alg": "string",
  "kid": "string",
  "kty": "string",
  "n": "string",
  "e": "string",
  "use": "string"
}
```

Standard Json Web Key specification following https://www.rfc-editor.org/rfc/rfc7517 and
https://www.rfc-editor.org/rfc/rfc7518.html.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alg|string|false|none|The "alg" (algorithm) parameter identifies the algorithm intended for<br>use with the key.<br>See https://www.rfc-editor.org/rfc/rfc7517#section-4|
|kid|string|true|none|The "kid" (key ID) parameter is used to match a specific key.  This<br>is used, for instance, to choose among a set of keys within a JWK Set<br>during key rollover. When "kid" values are used within a JWK Set,<br>different keys within the JWK Set SHOULD use distinct "kid" values.<br>The "kid" value is a case-sensitive string.<br>See https://www.rfc-editor.org/rfc/rfc7517#section-4|
|kty|string|true|none|The "kty" (key type) parameter identifies the cryptographic algorithm<br>family used with the key, such as "RSA" or "EC". The "kty" value is a<br>case-sensitive string. At the moment, only "RSA" is supported.<br>See https://www.rfc-editor.org/rfc/rfc7517#section-4|
|n|string|true|none|The "n" (modulus) parameter contains the modulus value for the RSA<br>   public key.  It is represented as a Base64urlUInt-encoded value.<br>See https://www.rfc-editor.org/rfc/rfc7518.html#section-6.3|
|e|string|true|none|The "e" (exponent) parameter contains the exponent value for the RSA<br>   public key.  It is represented as a Base64urlUInt-encoded value.<br>See https://www.rfc-editor.org/rfc/rfc7518.html#section-6.3|
|use|string|false|none|The "use" (public key use) parameter identifies the intended use of<br>the public key. The "use" parameter is employed to indicate whether<br>a public key is used for encrypting data or verifying the signature<br>on data. Values are commonly "sig" (signature) or "enc" (encryption).<br>See https://www.rfc-editor.org/rfc/rfc7517#section-4|

<h2 id="tocS_CreateDesignMergeJobRequest">CreateDesignMergeJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedesignmergejobrequest"></a>
<a id="schema_CreateDesignMergeJobRequest"></a>
<a id="tocScreatedesignmergejobrequest"></a>
<a id="tocscreatedesignmergejobrequest"></a>

```json
{
  "type": "create_new_design",
  "operations": [
    {
      "type": "insert_pages",
      "source": {
        "type": "design",
        "design_id": "DAFVztcvd9z",
        "page_numbers": [
          1,
          2
        ]
      },
      "after_page_number": 2
    }
  ],
  "title": "My merged design"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[NewDesignCreateDesignMergeJobRequest](#schemanewdesigncreatedesignmergejobrequest)|false|none|Creates a new design by inserting pages from other designs.|
|*oneOf*|[ModifyDesignCreateDesignMergeJobRequest](#schemamodifydesigncreatedesignmergejobrequest)|false|none|Modifies an existing design by inserting, moving, or deleting pages.|

<h2 id="tocS_NewDesignCreateDesignMergeJobRequest">NewDesignCreateDesignMergeJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemanewdesigncreatedesignmergejobrequest"></a>
<a id="schema_NewDesignCreateDesignMergeJobRequest"></a>
<a id="tocSnewdesigncreatedesignmergejobrequest"></a>
<a id="tocsnewdesigncreatedesignmergejobrequest"></a>

```json
{
  "type": "create_new_design",
  "operations": [
    {
      "type": "insert_pages",
      "source": {
        "type": "design",
        "design_id": "DAFVztcvd9z",
        "page_numbers": [
          1,
          2
        ]
      },
      "after_page_number": 2
    }
  ],
  "title": "My merged design"
}
```

Creates a new design by inserting pages from other designs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of merge job to create.|
|operations|[[DesignMergeOperation](#schemadesignmergeoperation)]|true|none|For this job type, only insert operations are supported.|
|title|string|true|none|Title for the new design.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|create_new_design|

<h2 id="tocS_ModifyDesignCreateDesignMergeJobRequest">ModifyDesignCreateDesignMergeJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemamodifydesigncreatedesignmergejobrequest"></a>
<a id="schema_ModifyDesignCreateDesignMergeJobRequest"></a>
<a id="tocSmodifydesigncreatedesignmergejobrequest"></a>
<a id="tocsmodifydesigncreatedesignmergejobrequest"></a>

```json
{
  "type": "modify_existing_design",
  "design_id": "DAFVztcvd9z",
  "operations": [
    {
      "type": "insert_pages",
      "source": {
        "type": "design",
        "design_id": "DAFVztcvd9z",
        "page_numbers": [
          1,
          2
        ]
      },
      "after_page_number": 2
    }
  ],
  "title": "My updated design"
}
```

Modifies an existing design by inserting, moving, or deleting pages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of merge job to create.|
|design_id|string|true|none|The ID of the design to modify.|
|operations|[[DesignMergeOperation](#schemadesignmergeoperation)]|true|none|Supports insert, move, and delete operations.|
|title|string|false|none|Optional new title for the design.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|modify_existing_design|

<h2 id="tocS_DesignMergeOperation">DesignMergeOperation</h2>
<!-- backwards compatibility -->
<a id="schemadesignmergeoperation"></a>
<a id="schema_DesignMergeOperation"></a>
<a id="tocSdesignmergeoperation"></a>
<a id="tocsdesignmergeoperation"></a>

```json
{
  "type": "insert_pages",
  "source": {
    "type": "design",
    "design_id": "DAFVztcvd9z",
    "page_numbers": [
      1,
      2
    ]
  },
  "after_page_number": 2
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[InsertPagesDesignMergeOperation](#schemainsertpagesdesignmergeoperation)|false|none|Inserts pages from a source design into the target design.|
|*oneOf*|[MovePagesDesignMergeOperation](#schemamovepagesdesignmergeoperation)|false|none|Moves pages within the target design to a new position.|
|*oneOf*|[DeletePagesDesignMergeOperation](#schemadeletepagesdesignmergeoperation)|false|none|Deletes pages from the target design.|

<h2 id="tocS_InsertPagesDesignMergeOperation">InsertPagesDesignMergeOperation</h2>
<!-- backwards compatibility -->
<a id="schemainsertpagesdesignmergeoperation"></a>
<a id="schema_InsertPagesDesignMergeOperation"></a>
<a id="tocSinsertpagesdesignmergeoperation"></a>
<a id="tocsinsertpagesdesignmergeoperation"></a>

```json
{
  "type": "insert_pages",
  "source": {
    "type": "design",
    "design_id": "DAFVztcvd9z",
    "page_numbers": [
      1,
      2
    ]
  },
  "after_page_number": 2
}
```

Inserts pages from a source design into the target design.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of merge operation.|
|source|[MergeSourceForInsertPagesOperation](#schemamergesourceforinsertpagesoperation)|true|none|none|
|after_page_number|integer(int32)|false|none|Insert after this one-based page number in the evolving target layout. Use 0 to insert at the beginning, and the default is inserting at the end (append).<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|insert_pages|

<h2 id="tocS_MovePagesDesignMergeOperation">MovePagesDesignMergeOperation</h2>
<!-- backwards compatibility -->
<a id="schemamovepagesdesignmergeoperation"></a>
<a id="schema_MovePagesDesignMergeOperation"></a>
<a id="tocSmovepagesdesignmergeoperation"></a>
<a id="tocsmovepagesdesignmergeoperation"></a>

```json
{
  "type": "move_pages",
  "from_page_numbers": [
    1,
    3
  ],
  "to_after_page_number": 2
}
```

Moves pages within the target design to a new position.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of merge operation.|
|from_page_numbers|[integer(int32)]|true|none|One-based number of the pages to move (evaluated at the time this operation runs). Pages are moved in order.|
|to_after_page_number|integer(int32)|true|none|Destination position: insert the moved pages after this one-based page number. Use 0 to move to the beginning.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|move_pages|

<h2 id="tocS_DeletePagesDesignMergeOperation">DeletePagesDesignMergeOperation</h2>
<!-- backwards compatibility -->
<a id="schemadeletepagesdesignmergeoperation"></a>
<a id="schema_DeletePagesDesignMergeOperation"></a>
<a id="tocSdeletepagesdesignmergeoperation"></a>
<a id="tocsdeletepagesdesignmergeoperation"></a>

```json
{
  "type": "delete_pages",
  "page_numbers": [
    2,
    4
  ]
}
```

Deletes pages from the target design.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of merge operation.|
|page_numbers|[integer(int32)]|true|none|One-based numbers of the pages to delete (evaluated at the time this operation runs). Pages are deleted in reverse order to maintain page numbers.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|delete_pages|

<h2 id="tocS_MergeSourceForInsertPagesOperation">MergeSourceForInsertPagesOperation</h2>
<!-- backwards compatibility -->
<a id="schemamergesourceforinsertpagesoperation"></a>
<a id="schema_MergeSourceForInsertPagesOperation"></a>
<a id="tocSmergesourceforinsertpagesoperation"></a>
<a id="tocsmergesourceforinsertpagesoperation"></a>

```json
{
  "type": "design",
  "design_id": "DAFVztcvd9z",
  "page_numbers": [
    1,
    2
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[DesignMergeSourceForInsertPagesOperation](#schemadesignmergesourceforinsertpagesoperation)|false|none|A design source from which pages are inserted.|

<h2 id="tocS_DesignMergeSourceForInsertPagesOperation">DesignMergeSourceForInsertPagesOperation</h2>
<!-- backwards compatibility -->
<a id="schemadesignmergesourceforinsertpagesoperation"></a>
<a id="schema_DesignMergeSourceForInsertPagesOperation"></a>
<a id="tocSdesignmergesourceforinsertpagesoperation"></a>
<a id="tocsdesignmergesourceforinsertpagesoperation"></a>

```json
{
  "type": "design",
  "design_id": "DAFVztcvd9z",
  "page_numbers": [
    1,
    2
  ]
}
```

A design source from which pages are inserted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of source to insert pages from.|
|design_id|string|true|none|The ID of the source design.|
|page_numbers|[integer(int32)]|false|none|One-based page numbers to insert from the source design. If omitted, all pages from the design are inserted.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|design|

<h2 id="tocS_CreateDesignMergeJobResponse">CreateDesignMergeJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedesignmergejobresponse"></a>
<a id="schema_CreateDesignMergeJobResponse"></a>
<a id="tocScreatedesignmergejobresponse"></a>
<a id="tocscreatedesignmergejobresponse"></a>

```json
{
  "job": {
    "id": "a7by3wd-abc123",
    "status": "in_progress",
    "result": {
      "design": {
        "id": "DAFVztcvd9z",
        "title": "My summer holiday",
        "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
        "thumbnail": {
          "width": 595,
          "height": 335,
          "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
        },
        "urls": {
          "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
          "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
        },
        "created_at": 1377396000,
        "updated_at": 1692928800,
        "page_count": 3
      }
    },
    "error": {
      "code": "thumbnail_generation_error",
      "message": "The merge job failed due to an internal error."
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[DesignMergeJob](#schemadesignmergejob)|true|none|The details of a design merge job.|

<h2 id="tocS_GetDesignMergeJobResponse">GetDesignMergeJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdesignmergejobresponse"></a>
<a id="schema_GetDesignMergeJobResponse"></a>
<a id="tocSgetdesignmergejobresponse"></a>
<a id="tocsgetdesignmergejobresponse"></a>

```json
{
  "job": {
    "id": "a7by3wd-abc123",
    "status": "in_progress",
    "result": {
      "design": {
        "id": "DAFVztcvd9z",
        "title": "My summer holiday",
        "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
        "thumbnail": {
          "width": 595,
          "height": 335,
          "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
        },
        "urls": {
          "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
          "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
        },
        "created_at": 1377396000,
        "updated_at": 1692928800,
        "page_count": 3
      }
    },
    "error": {
      "code": "thumbnail_generation_error",
      "message": "The merge job failed due to an internal error."
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[DesignMergeJob](#schemadesignmergejob)|true|none|The details of a design merge job.|

<h2 id="tocS_DesignMergeJob">DesignMergeJob</h2>
<!-- backwards compatibility -->
<a id="schemadesignmergejob"></a>
<a id="schema_DesignMergeJob"></a>
<a id="tocSdesignmergejob"></a>
<a id="tocsdesignmergejob"></a>

```json
{
  "id": "a7by3wd-abc123",
  "status": "in_progress",
  "result": {
    "design": {
      "id": "DAFVztcvd9z",
      "title": "My summer holiday",
      "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
      "thumbnail": {
        "width": 595,
        "height": 335,
        "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
      },
      "urls": {
        "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
        "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
      },
      "created_at": 1377396000,
      "updated_at": 1692928800,
      "page_count": 3
    }
  },
  "error": {
    "code": "thumbnail_generation_error",
    "message": "The merge job failed due to an internal error."
  }
}
```

The details of a design merge job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the design merge job.|
|status|[DesignMergeJobStatus](#schemadesignmergejobstatus)|true|none|none|
|result|[DesignMergeJobResult](#schemadesignmergejobresult)|false|none|none|
|error|[DesignMergeError](#schemadesignmergeerror)|false|none|If the merge job fails, this object provides details about the error.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|in_progress|
|status|success|
|status|failed|

<h2 id="tocS_DesignMergeJobStatus">DesignMergeJobStatus</h2>
<!-- backwards compatibility -->
<a id="schemadesignmergejobstatus"></a>
<a id="schema_DesignMergeJobStatus"></a>
<a id="tocSdesignmergejobstatus"></a>
<a id="tocsdesignmergejobstatus"></a>

```json
"in_progress"
```

<h2 id="tocS_DesignMergeJobResult">DesignMergeJobResult</h2>
<!-- backwards compatibility -->
<a id="schemadesignmergejobresult"></a>
<a id="schema_DesignMergeJobResult"></a>
<a id="tocSdesignmergejobresult"></a>
<a id="tocsdesignmergejobresult"></a>

```json
{
  "design": {
    "id": "DAFVztcvd9z",
    "title": "My summer holiday",
    "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    },
    "urls": {
      "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
      "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
    },
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "page_count": 3
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|design|[DesignSummary](#schemadesignsummary)|true|none|Basic details about the design, such as the design's ID, title, and URL.|

<h2 id="tocS_DesignMergeErrorCode">DesignMergeErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemadesignmergeerrorcode"></a>
<a id="schema_DesignMergeErrorCode"></a>
<a id="tocSdesignmergeerrorcode"></a>
<a id="tocsdesignmergeerrorcode"></a>

```json
"thumbnail_generation_error"
```

<h2 id="tocS_DesignMergeError">DesignMergeError</h2>
<!-- backwards compatibility -->
<a id="schemadesignmergeerror"></a>
<a id="schema_DesignMergeError"></a>
<a id="tocSdesignmergeerror"></a>
<a id="tocsdesignmergeerror"></a>

```json
{
  "code": "thumbnail_generation_error",
  "message": "The merge job failed due to an internal error."
}
```

If the merge job fails, this object provides details about the error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|[DesignMergeErrorCode](#schemadesignmergeerrorcode)|true|none|none|
|message|string|true|none|A human-readable description of what went wrong.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|thumbnail_generation_error|
|code|merge_error|
|code|create_design_error|
|code|modify_design_error|

<h2 id="tocS_ExchangeAccessTokenRequest">ExchangeAccessTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexchangeaccesstokenrequest"></a>
<a id="schema_ExchangeAccessTokenRequest"></a>
<a id="tocSexchangeaccesstokenrequest"></a>
<a id="tocsexchangeaccesstokenrequest"></a>

```json
{
  "grant_type": "authorization_code",
  "code_verifier": "i541qdcfkb4htnork0w92lnu43en99ls5a48ittv6udqgiflqon8vusojojakbq4",
  "code": "kp8nnroja7qnx00.opyc1p76rcbyflsxbycjqfp3ub8vzsvltpzwafy9q5l45dn5fxzhe7i7a6mg1i2t8jpsa6sebdeumkzzhicskabgevrxsssec4dvjwfvhq4gs3ugghguar0voiqpfb7axsapiojoter8v3w2s5s3st84jpv2l06h667iw241xngy9c8=vu1tnjp7sz",
  "client_id": "OC-FAB12-AbCdEf",
  "client_secret": "cnvcaAbcdefg12345_hijklm6789",
  "redirect_uri": "https://example.com/process-auth"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ExchangeAuthCodeRequest](#schemaexchangeauthcoderequest)|false|none|none|
|*oneOf*|[ExchangeRefreshTokenRequest](#schemaexchangerefreshtokenrequest)|false|none|none|

<h2 id="tocS_ExchangeAuthCodeRequest">ExchangeAuthCodeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexchangeauthcoderequest"></a>
<a id="schema_ExchangeAuthCodeRequest"></a>
<a id="tocSexchangeauthcoderequest"></a>
<a id="tocsexchangeauthcoderequest"></a>

```json
{
  "grant_type": "authorization_code",
  "code_verifier": "i541qdcfkb4htnork0w92lnu43en99ls5a48ittv6udqgiflqon8vusojojakbq4",
  "code": "kp8nnroja7qnx00.opyc1p76rcbyflsxbycjqfp3ub8vzsvltpzwafy9q5l45dn5fxzhe7i7a6mg1i2t8jpsa6sebdeumkzzhicskabgevrxsssec4dvjwfvhq4gs3ugghguar0voiqpfb7axsapiojoter8v3w2s5s3st84jpv2l06h667iw241xngy9c8=vu1tnjp7sz",
  "client_id": "OC-FAB12-AbCdEf",
  "client_secret": "cnvcaAbcdefg12345_hijklm6789",
  "redirect_uri": "https://example.com/process-auth"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grant_type|string|true|none|For exchanging an authorization code for an access token.|
|code_verifier|string|true|none|The `code_verifier` value that you generated when creating the user authorization URL.|
|code|string|true|none|The authorization code you received after the user authorized the app.|
|client_id|string|false|none|Your app's unique ID, for authenticating the request.<br><br>NOTE: We recommend that you use basic access authentication instead of specifying `client_id` and `client_secret` as body parameters.<br>|
|client_secret|string|false|none|Your app's client secret, for authenticating the request. Begins with `cnvca`.<br><br>NOTE: We recommend that you use basic access authentication instead of specifying `client_id` and `client_secret` as body parameters.<br>|
|redirect_uri|string|false|none|Only required if a redirect URL was supplied when you [created the user authorization URL](https://www.canva.dev/docs/apps/rest-apis/authentication/#create-the-authorization-url).<br><br>Must be one of those already specified by the client. If not supplied, the first redirect_uri defined for the client will be used by default.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|grant_type|authorization_code|

<h2 id="tocS_ExchangeRefreshTokenRequest">ExchangeRefreshTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexchangerefreshtokenrequest"></a>
<a id="schema_ExchangeRefreshTokenRequest"></a>
<a id="tocSexchangerefreshtokenrequest"></a>
<a id="tocsexchangerefreshtokenrequest"></a>

```json
{
  "grant_type": "refresh_token",
  "client_id": "OC-FAB12-AbCdEf",
  "client_secret": "cnvcaAbcdefg12345_hijklm6789",
  "refresh_token": "JABix5nolsk9k8n2r0f8nq1gw4zjo40ht6sb4i573wgdzmkwdmiy6muh897hp0bxyab276wtgqkvtob2mg9aidt5d6rcltcbcgs101",
  "scope": "design:meta:read"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grant_type|string|true|none|For generating an access token using a refresh token.|
|client_id|string|false|none|Your app's unique ID, for authenticating the request.<br><br>NOTE: We recommend that you use basic access authentication instead of specifying `client_id` and `client_secret` as body parameters.<br>|
|client_secret|string|false|none|Your app's client secret, for authenticating the request. Begins with `cnvca`.<br><br>NOTE: We recommend that you use basic access authentication instead of specifying `client_id` and `client_secret` as body parameters.<br>|
|refresh_token|string|true|none|The refresh token to be exchanged. You can copy this value from the successful response received when generating an access token.|
|scope|string|false|none|Optional scope value when refreshing an access token. Separate multiple [scopes](https://www.canva.dev/docs/apps/rest-apis/scopes/) with a single space between each scope.<br><br>The requested scope cannot include any permissions not already granted, so this parameter allows you to limit the scope when refreshing a token. If omitted, the scope for the token remains unchanged.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|grant_type|refresh_token|

<h2 id="tocS_ExchangeAccessTokenResponse">ExchangeAccessTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexchangeaccesstokenresponse"></a>
<a id="schema_ExchangeAccessTokenResponse"></a>
<a id="tocSexchangeaccesstokenresponse"></a>
<a id="tocsexchangeaccesstokenresponse"></a>

```json
{
  "access_token": "JagALLazU0i2ld9WW4zTO4kaG0lkvP8Y5sSO206ZwxNF4E1y3xKJKF7TzN17BXTfaNOeY0P88AeRCE6cRF7SJzvf3Sx97rA80sGHtFplFo",
  "refresh_token": "JABix5nolsk9k8n2r0f8nq1gw4zjo40ht6sb4i573wgdzmkwdmiy6muh897hp0bxyab276wtgqkvtob2mg9aidt5d6rcltcbcgs101",
  "token_type": "Bearer",
  "expires_in": 14400,
  "scope": "asset:read design:meta:read design:permission:read folder:read"
}
```

Exchange auth token to access token.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|true|none|The bearer access token to use to authenticate to Canva REST API endpoints. If requested using a `authorization_code` or `refresh_token`, this allows you to act on behalf of a user.|
|refresh_token|string|true|none|The token that you can use to refresh the access token.|
|token_type|string|true|none|The token type returned. This is always `Bearer`.|
|expires_in|integer(int64)|true|none|The expiry time (in seconds) for the access token.|
|scope|string|false|none|The [scopes](https://www.canva.dev/docs/apps/rest-apis/scopes/) that the token has been granted.|

<h2 id="tocS_IntrospectTokenRequest">IntrospectTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemaintrospecttokenrequest"></a>
<a id="schema_IntrospectTokenRequest"></a>
<a id="tocSintrospecttokenrequest"></a>
<a id="tocsintrospecttokenrequest"></a>

```json
{
  "token": "JagALLazU0i2ld9WW4zTO4kaG0lkvP8Y5sSO206ZwxNF4E1y3xKJKF7TzN17BXTfaNOeY0P88AeRCE6cRF7SJzvf3Sx97rA80sGHtFplFo",
  "client_id": "OC-FAB12-AbCdEf",
  "client_secret": "cnvcaAbcdefg12345_hijklm6789"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|true|none|The token to introspect.|
|client_id|string|false|none|Your app's unique ID, for authenticating the request.<br><br>NOTE: We recommend that you use basic access authentication instead of specifying `client_id` and `client_secret` as body parameters.<br>|
|client_secret|string|false|none|Your app's client secret, for authenticating the request. Begins with `cnvca`.<br><br>NOTE: We recommend that you use basic access authentication instead of specifying `client_id` and `client_secret` as body parameters.<br>|

<h2 id="tocS_IntrospectTokenResponse">IntrospectTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemaintrospecttokenresponse"></a>
<a id="schema_IntrospectTokenResponse"></a>
<a id="tocSintrospecttokenresponse"></a>
<a id="tocsintrospecttokenresponse"></a>

```json
{
  "active": true,
  "scope": "asset:read design:meta:read design:permission:read folder:read",
  "client": "OC-FAB12-AbCdEf",
  "exp": 1712216144,
  "iat": 1712201744,
  "nbf": 1712201744,
  "jti": "AbC1d-efgHIJKLMN2oPqrS",
  "sub": "oBCdEF1Gh2i3jkLmno-pq"
}
```

Introspection result of access or refresh tokens

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|true|none|Whether the access token is active.<br><br>If `true`, the access token is valid and active. If `false`, the access token is invalid.<br>|
|scope|string|false|none|The [scopes](https://www.canva.dev/docs/apps/rest-apis/scopes/) that the token has been granted.|
|client|string|false|none|The ID of the client that requested the token.|
|exp|integer(int64)|false|none|The expiration time of the token, as a [Unix timestamp](https://en.wikipedia.org/wiki/Unix_time) in seconds.|
|iat|integer(int64)|false|none|When the token was issued, as a [Unix timestamp](https://en.wikipedia.org/wiki/Unix_time) in seconds.|
|nbf|integer(int64)|false|none|The "not before" time of the token, which specifies the time before which the access token most not be accepted, as a [Unix timestamp](https://en.wikipedia.org/wiki/Unix_time) in seconds.|
|jti|string|false|none|A unique ID for the access token.|
|sub|string|false|none|The subject of the claim. This is the ID of the Canva user that the access token acts on behalf of.<br><br>This is an obfuscated value, so a single user has a unique ID for each app. If the same user authorizes another app, their ID in that other app is different.<br>|

<h2 id="tocS_RevokeTokensRequest">RevokeTokensRequest</h2>
<!-- backwards compatibility -->
<a id="schemarevoketokensrequest"></a>
<a id="schema_RevokeTokensRequest"></a>
<a id="tocSrevoketokensrequest"></a>
<a id="tocsrevoketokensrequest"></a>

```json
{
  "token": "agALLazU0i2ld9WW4zTO4kaG0lkvP8Y5sSO206ZwxNF4E1y3xKJKF7TzN17BXTfaNOeY0P88AeRCE6cRF7SJzvf3Sx97rA80sGHtFplFo",
  "client_id": "OC-FAB12-AbCdEf",
  "client_secret": "cnvcaAbcdefg12345_hijklm6789"
}
```

Supply an access token or refresh token to have its lineage revoked.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|true|none|The token to revoke.|
|client_id|string|false|none|Your app's unique ID, for authenticating the request.<br><br>NOTE: We recommend that you use basic access authentication instead of specifying `client_id` and `client_secret` as body parameters.<br>|
|client_secret|string|false|none|Your app's client secret, for authenticating the request. Begins with `cnvca`.<br><br>NOTE: We recommend that you use basic access authentication instead of specifying `client_id` and `client_secret` as body parameters.<br>|

<h2 id="tocS_RevokeTokensResponse">RevokeTokensResponse</h2>
<!-- backwards compatibility -->
<a id="schemarevoketokensresponse"></a>
<a id="schema_RevokeTokensResponse"></a>
<a id="tocSrevoketokensresponse"></a>
<a id="tocsrevoketokensresponse"></a>

```json
{}
```

The response on a successful token revocation.

<h2 id="tocS_scope_response">scope_response</h2>
<!-- backwards compatibility -->
<a id="schemascope_response"></a>
<a id="schema_scope_response"></a>
<a id="tocSscope_response"></a>
<a id="tocsscope_response"></a>

```json
"asset:read design:meta:read design:permission:read folder:read"
```

The [scopes](https://www.canva.dev/docs/apps/rest-apis/scopes/) that the token has been granted.

<h2 id="tocS_client_id">client_id</h2>
<!-- backwards compatibility -->
<a id="schemaclient_id"></a>
<a id="schema_client_id"></a>
<a id="tocSclient_id"></a>
<a id="tocsclient_id"></a>

```json
"OC-FAB12-AbCdEf"
```

Your app's unique ID, for authenticating the request.

NOTE: We recommend that you use basic access authentication instead of specifying `client_id` and `client_secret` as body parameters.

<h2 id="tocS_client_secret">client_secret</h2>
<!-- backwards compatibility -->
<a id="schemaclient_secret"></a>
<a id="schema_client_secret"></a>
<a id="tocSclient_secret"></a>
<a id="tocsclient_secret"></a>

```json
"cnvcaAbcdefg12345_hijklm6789"
```

Your app's client secret, for authenticating the request. Begins with `cnvca`.

NOTE: We recommend that you use basic access authentication instead of specifying `client_id` and `client_secret` as body parameters.

<h2 id="tocS_UserInfoResponse">UserInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemauserinforesponse"></a>
<a id="schema_UserInfoResponse"></a>
<a id="tocSuserinforesponse"></a>
<a id="tocsuserinforesponse"></a>

```json
{
  "sub": "UAAAAAAAAA",
  "name": "Alice Person",
  "given_name": "Alice",
  "family_name": "Person",
  "email": "alice.person@example.com",
  "email_verified": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sub|string|true|none|Identifier for the End-User at the Issuer.|
|name|string|false|none|End-User's full name in displayable form including all name parts, possibly including<br>titles and suffixes, ordered according to the End-User's locale and preferences.|
|given_name|string|false|none|Given name(s) or first name(s) of the End-User. Note that in some cultures, people can<br>have multiple given names; all can be present, with the names being separated by space<br>characters.|
|family_name|string|false|none|Surname(s) or last name(s) of the End-User. Note that in some cultures, people can have<br>multiple family names or no family name; all can be present, with the names being<br>separated by space characters.|
|email|string(email)|false|none|End-User's preferred e-mail address. Its value MUST conform to the RFC 5322 [RFC5322]<br>addr-spec syntax. The RP MUST NOT rely upon this value being unique, as discussed in<br>Section 5.7.|
|email_verified|boolean|false|none|True if the End-User's e-mail address has been verified; otherwise false. When this<br>Claim Value is true, this means that the OP took affirmative steps to ensure that this<br>e-mail address was controlled by the End-User at the time the verification was<br>performed. The means by which an e-mail address is verified is context specific,<br>and dependent upon the trust framework or contractual agreements within which the<br>parties are operating.|

<h2 id="tocS_Interval">Interval</h2>
<!-- backwards compatibility -->
<a id="schemainterval"></a>
<a id="schema_Interval"></a>
<a id="tocSinterval"></a>
<a id="tocsinterval"></a>

```json
"day"
```

The interval at which the usage resets. 'never' means lifetime quota that never resets.

<h2 id="tocS_FeatureId">FeatureId</h2>
<!-- backwards compatibility -->
<a id="schemafeatureid"></a>
<a id="schema_FeatureId"></a>
<a id="tocSfeatureid"></a>
<a id="tocsfeatureid"></a>

```json
"ingredient-generation.generate-image"
```

Unique identification string for the feature. Need to be in `{application-id}.{feature-name}` pattern

<h2 id="tocS_FeatureQuotaLimit">FeatureQuotaLimit</h2>
<!-- backwards compatibility -->
<a id="schemafeaturequotalimit"></a>
<a id="schema_FeatureQuotaLimit"></a>
<a id="tocSfeaturequotalimit"></a>
<a id="tocsfeaturequotalimit"></a>

```json
1
```

The quota limit set by the caller for this feature. This limit is used to determine if usage exceeds the customer-defined threshold.
If not provided, we assume the usage is unlimited.

<h2 id="tocS_CreateDesignResizeJobRequest">CreateDesignResizeJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedesignresizejobrequest"></a>
<a id="schema_CreateDesignResizeJobRequest"></a>
<a id="tocScreatedesignresizejobrequest"></a>
<a id="tocscreatedesignresizejobrequest"></a>

```json
{
  "design_id": "string",
  "design_type": {
    "type": "preset",
    "name": "doc"
  }
}
```

Body parameters for starting a resize job for a design.
It must include a design ID, and one of the supported design type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|design_id|string|true|none|The design ID.|
|design_type|[DesignTypeInput](#schemadesigntypeinput)|true|none|The desired design type.|

<h2 id="tocS_CreateDesignResizeJobResponse">CreateDesignResizeJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedesignresizejobresponse"></a>
<a id="schema_CreateDesignResizeJobResponse"></a>
<a id="tocScreatedesignresizejobresponse"></a>
<a id="tocscreatedesignresizejobresponse"></a>

```json
{
  "job": {
    "id": "bbd8dfcd-ead1-4871-81d5-962bfec82274",
    "status": "success",
    "result": {
      "design": {
        "id": "DAFVztcvd9z",
        "title": "My summer holiday",
        "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
        "thumbnail": {
          "width": 595,
          "height": 335,
          "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
        },
        "urls": {
          "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
          "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
        },
        "created_at": 1377396000,
        "updated_at": 1692928800,
        "page_count": 3
      },
      "trial_information": {
        "uses_remaining": 0,
        "upgrade_url": "https://www.canva.com/?tailoringUpsellDialog=GENERIC_C4W"
      }
    },
    "error": {
      "code": "thumbnail_generation_error",
      "message": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[DesignResizeJob](#schemadesignresizejob)|true|none|Details about the design resize job.|

<h2 id="tocS_GetDesignResizeJobResponse">GetDesignResizeJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdesignresizejobresponse"></a>
<a id="schema_GetDesignResizeJobResponse"></a>
<a id="tocSgetdesignresizejobresponse"></a>
<a id="tocsgetdesignresizejobresponse"></a>

```json
{
  "job": {
    "id": "bbd8dfcd-ead1-4871-81d5-962bfec82274",
    "status": "success",
    "result": {
      "design": {
        "id": "DAFVztcvd9z",
        "title": "My summer holiday",
        "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
        "thumbnail": {
          "width": 595,
          "height": 335,
          "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
        },
        "urls": {
          "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
          "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
        },
        "created_at": 1377396000,
        "updated_at": 1692928800,
        "page_count": 3
      },
      "trial_information": {
        "uses_remaining": 0,
        "upgrade_url": "https://www.canva.com/?tailoringUpsellDialog=GENERIC_C4W"
      }
    },
    "error": {
      "code": "thumbnail_generation_error",
      "message": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[DesignResizeJob](#schemadesignresizejob)|true|none|Details about the design resize job.|

<h2 id="tocS_DesignResizeJob">DesignResizeJob</h2>
<!-- backwards compatibility -->
<a id="schemadesignresizejob"></a>
<a id="schema_DesignResizeJob"></a>
<a id="tocSdesignresizejob"></a>
<a id="tocsdesignresizejob"></a>

```json
{
  "id": "bbd8dfcd-ead1-4871-81d5-962bfec82274",
  "status": "success",
  "result": {
    "design": {
      "id": "DAFVztcvd9z",
      "title": "My summer holiday",
      "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
      "thumbnail": {
        "width": 595,
        "height": 335,
        "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
      },
      "urls": {
        "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
        "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
      },
      "created_at": 1377396000,
      "updated_at": 1692928800,
      "page_count": 3
    },
    "trial_information": {
      "uses_remaining": 0,
      "upgrade_url": "https://www.canva.com/?tailoringUpsellDialog=GENERIC_C4W"
    }
  },
  "error": {
    "code": "thumbnail_generation_error",
    "message": "string"
  }
}
```

Details about the design resize job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The design resize job ID.|
|status|[DesignResizeStatus](#schemadesignresizestatus)|true|none|Status of the design resize job.|
|result|[DesignResizeJobResult](#schemadesignresizejobresult)|false|none|Design has been created and saved to user's root<br>([projects](https://www.canva.com/help/find-designs-and-folders/)) folder.|
|error|[DesignResizeError](#schemadesignresizeerror)|false|none|If the design resize job fails, this object provides details about the error.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|in_progress|
|status|success|
|status|failed|

<h2 id="tocS_DesignResizeJobResult">DesignResizeJobResult</h2>
<!-- backwards compatibility -->
<a id="schemadesignresizejobresult"></a>
<a id="schema_DesignResizeJobResult"></a>
<a id="tocSdesignresizejobresult"></a>
<a id="tocsdesignresizejobresult"></a>

```json
{
  "design": {
    "id": "DAFVztcvd9z",
    "title": "My summer holiday",
    "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    },
    "urls": {
      "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
      "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
    },
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "page_count": 3
  },
  "trial_information": {
    "uses_remaining": 0,
    "upgrade_url": "https://www.canva.com/?tailoringUpsellDialog=GENERIC_C4W"
  }
}
```

Design has been created and saved to user's root
([projects](https://www.canva.com/help/find-designs-and-folders/)) folder.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|design|[DesignSummary](#schemadesignsummary)|true|none|Basic details about the design, such as the design's ID, title, and URL.|
|trial_information|[TrialInformation](#schematrialinformation)|false|none|WARNING: Trials and trial information are a [preview feature](https://www.canva.dev/docs/apps/rest-apis/#preview-apis).<br>There might be unannounced breaking changes to this feature which won't produce a new API version.<br><br>Trial information for non-qualifying users. Non-qualifying users have a limited number of<br>resize uses. Once the trial is exhausted, users must upgrade to a Canva plan with premium<br>features (such as Canva Pro) to continue using the Resize API.|

<h2 id="tocS_DesignResizeStatus">DesignResizeStatus</h2>
<!-- backwards compatibility -->
<a id="schemadesignresizestatus"></a>
<a id="schema_DesignResizeStatus"></a>
<a id="tocSdesignresizestatus"></a>
<a id="tocsdesignresizestatus"></a>

```json
"success"
```

Status of the design resize job.

<h2 id="tocS_DesignResizeErrorCode">DesignResizeErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemadesignresizeerrorcode"></a>
<a id="schema_DesignResizeErrorCode"></a>
<a id="tocSdesignresizeerrorcode"></a>
<a id="tocsdesignresizeerrorcode"></a>

```json
"thumbnail_generation_error"
```

<h2 id="tocS_DesignResizeError">DesignResizeError</h2>
<!-- backwards compatibility -->
<a id="schemadesignresizeerror"></a>
<a id="schema_DesignResizeError"></a>
<a id="tocSdesignresizeerror"></a>
<a id="tocsdesignresizeerror"></a>

```json
{
  "code": "thumbnail_generation_error",
  "message": "string"
}
```

If the design resize job fails, this object provides details about the error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|[DesignResizeErrorCode](#schemadesignresizeerrorcode)|true|none|none|
|message|string|true|none|A human-readable description of what went wrong.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|thumbnail_generation_error|
|code|design_resize_error|
|code|create_design_error|
|code|trial_quota_exceeded|

<h2 id="tocS_TrialInformation">TrialInformation</h2>
<!-- backwards compatibility -->
<a id="schematrialinformation"></a>
<a id="schema_TrialInformation"></a>
<a id="tocStrialinformation"></a>
<a id="tocstrialinformation"></a>

```json
{
  "uses_remaining": 0,
  "upgrade_url": "https://www.canva.com/?tailoringUpsellDialog=GENERIC_C4W"
}
```

WARNING: Trials and trial information are a [preview feature](https://www.canva.dev/docs/apps/rest-apis/#preview-apis).
There might be unannounced breaking changes to this feature which won't produce a new API version.

Trial information for non-qualifying users. Non-qualifying users have a limited number of
resize uses. Once the trial is exhausted, users must upgrade to a Canva plan with premium
features (such as Canva Pro) to continue using the Resize API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uses_remaining|integer(int32)|true|none|The number of uses remaining in the free trial.|
|upgrade_url|string|true|none|The URL for a user to upgrade their Canva account.|

<h2 id="tocS_Team">Team</h2>
<!-- backwards compatibility -->
<a id="schemateam"></a>
<a id="schema_Team"></a>
<a id="tocSteam"></a>
<a id="tocsteam"></a>

```json
{
  "id": "Oi2RJILTrKk0KRhRUZozX",
  "display_name": "Acme Corporation",
  "external": true
}
```

Metadata for the Canva Team, consisting of the Team ID,
display name, and whether it's an external Canva Team.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the Canva Team.|
|display_name|string|true|none|The name of the Canva Team as shown in the Canva UI.|
|external|boolean|true|none|Is the user making the API call (the authenticated user) from the Canva Team shown?<br><br>- When `true`, the user isn't in the Canva Team shown.<br>- When `false`, the user is in the Canva Team shown.|

<h2 id="tocS_Thumbnail">Thumbnail</h2>
<!-- backwards compatibility -->
<a id="schemathumbnail"></a>
<a id="schema_Thumbnail"></a>
<a id="tocSthumbnail"></a>
<a id="tocsthumbnail"></a>

```json
{
  "width": 595,
  "height": 335,
  "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
}
```

A thumbnail image representing the object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|width|integer(int32)|true|none|The width of the thumbnail image in pixels.|
|height|integer(int32)|true|none|The height of the thumbnail image in pixels.|
|url|string|true|none|A URL for retrieving the thumbnail image.<br>This URL expires after 15 minutes. This URL includes a query string<br>that's required for retrieving the thumbnail.|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "id": "uKakKUfI03Fg8k2gZ6OkT",
  "display_name": "John Doe"
}
```

Metadata for the user, consisting of the User ID and display name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the user.|
|display_name|string|false|none|The name of the user as shown in the Canva UI.|

<h2 id="tocS_TeamUserSummary">TeamUserSummary</h2>
<!-- backwards compatibility -->
<a id="schemateamusersummary"></a>
<a id="schema_TeamUserSummary"></a>
<a id="tocSteamusersummary"></a>
<a id="tocsteamusersummary"></a>

```json
{
  "user_id": "auDAbliZ2rQNNOsUl5OLu",
  "team_id": "Oi2RJILTrKk0KRhRUZozX"
}
```

Metadata for the user, consisting of the User ID and Team ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_id|string|true|none|The ID of the user.|
|team_id|string|true|none|The ID of the user's Canva Team.|

<h2 id="tocS_TeamUser">TeamUser</h2>
<!-- backwards compatibility -->
<a id="schemateamuser"></a>
<a id="schema_TeamUser"></a>
<a id="tocSteamuser"></a>
<a id="tocsteamuser"></a>

```json
{
  "user_id": "auDAbliZ2rQNNOsUl5OLu",
  "team_id": "Oi2RJILTrKk0KRhRUZozX",
  "display_name": "Jane Doe"
}
```

Metadata for the user, consisting of the User ID, Team ID, and display name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_id|string|false|none|The ID of the user.|
|team_id|string|false|none|The ID of the user's Canva Team.|
|display_name|string|false|none|The name of the user as shown in the Canva UI.|

<h2 id="tocS_UserProfile">UserProfile</h2>
<!-- backwards compatibility -->
<a id="schemauserprofile"></a>
<a id="schema_UserProfile"></a>
<a id="tocSuserprofile"></a>
<a id="tocsuserprofile"></a>

```json
{
  "display_name": "Jane Doe"
}
```

Profile for the user, consisting of the display name and other attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display_name|string|false|none|The name of the user as shown in the Canva UI.|

<h2 id="tocS_UsersMeResponse">UsersMeResponse</h2>
<!-- backwards compatibility -->
<a id="schemausersmeresponse"></a>
<a id="schema_UsersMeResponse"></a>
<a id="tocSusersmeresponse"></a>
<a id="tocsusersmeresponse"></a>

```json
{
  "team_user": {
    "user_id": "auDAbliZ2rQNNOsUl5OLu",
    "team_id": "Oi2RJILTrKk0KRhRUZozX"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|team_user|[TeamUserSummary](#schemateamusersummary)|true|none|Metadata for the user, consisting of the User ID and Team ID.|

<h2 id="tocS_UserProfileResponse">UserProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemauserprofileresponse"></a>
<a id="schema_UserProfileResponse"></a>
<a id="tocSuserprofileresponse"></a>
<a id="tocsuserprofileresponse"></a>

```json
{
  "profile": {
    "display_name": "Jane Doe"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profile|[UserProfile](#schemauserprofile)|true|none|Profile for the user, consisting of the display name and other attributes.|

<h2 id="tocS_GetUserCapabilitiesResponse">GetUserCapabilitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetusercapabilitiesresponse"></a>
<a id="schema_GetUserCapabilitiesResponse"></a>
<a id="tocSgetusercapabilitiesresponse"></a>
<a id="tocsgetusercapabilitiesresponse"></a>

```json
{
  "capabilities": [
    "analytics"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capabilities|[[Capability](#schemacapability)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|capabilities|analytics|
|capabilities|autofill|
|capabilities|background_removal|
|capabilities|brand_template|
|capabilities|design_generation|
|capabilities|export_png_transparency|
|capabilities|image_generation|
|capabilities|image_to_design_imports|
|capabilities|resize|
|capabilities|team_restricted_app|

<h2 id="tocS_Notification">Notification</h2>
<!-- backwards compatibility -->
<a id="schemanotification"></a>
<a id="schema_Notification"></a>
<a id="tocSnotification"></a>
<a id="tocsnotification"></a>

```json
{
  "id": "eb595730",
  "created_at": 1377396000,
  "content": {
    "type": "share_design",
    "triggering_user": {
      "id": "uKakKUfI03Fg8k2gZ6OkT",
      "display_name": "John Doe"
    },
    "receiving_team_user": {
      "user_id": "auDAbliZ2rQNNOsUl5OLu",
      "team_id": "Oi2RJILTrKk0KRhRUZozX",
      "display_name": "Jane Doe"
    },
    "design": {
      "id": "DAFVztcvd9z",
      "title": "My summer holiday",
      "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
      "thumbnail": {
        "width": 595,
        "height": 335,
        "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
      },
      "urls": {
        "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
        "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
      },
      "created_at": 1377396000,
      "updated_at": 1692928800,
      "page_count": 3
    },
    "share_url": "https://www.canva.com/api/action?token=zWiz3GqRaWVkolwSgfBa9sKbsKgfHAoxv_mjs-mlX2M",
    "share": {
      "message": "Check this out!"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the notification.|
|created_at|integer(int64)|true|none|When the notification was created, as a UNIX timestamp (in seconds<br>since the UNIX epoch).|
|content|[NotificationContent](#schemanotificationcontent)|true|none|The notification content object, which contains metadata about the event.|

<h2 id="tocS_NotificationContent">NotificationContent</h2>
<!-- backwards compatibility -->
<a id="schemanotificationcontent"></a>
<a id="schema_NotificationContent"></a>
<a id="tocSnotificationcontent"></a>
<a id="tocsnotificationcontent"></a>

```json
{
  "type": "share_design",
  "triggering_user": {
    "id": "uKakKUfI03Fg8k2gZ6OkT",
    "display_name": "John Doe"
  },
  "receiving_team_user": {
    "user_id": "auDAbliZ2rQNNOsUl5OLu",
    "team_id": "Oi2RJILTrKk0KRhRUZozX",
    "display_name": "Jane Doe"
  },
  "design": {
    "id": "DAFVztcvd9z",
    "title": "My summer holiday",
    "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    },
    "urls": {
      "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
      "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
    },
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "page_count": 3
  },
  "share_url": "https://www.canva.com/api/action?token=zWiz3GqRaWVkolwSgfBa9sKbsKgfHAoxv_mjs-mlX2M",
  "share": {
    "message": "Check this out!"
  }
}
```

The notification content object, which contains metadata about the event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ShareDesignNotificationContent](#schemasharedesignnotificationcontent)|false|none|The notification content for when someone shares a design.|
|*oneOf*|[ShareFolderNotificationContent](#schemasharefoldernotificationcontent)|false|none|The notification content for when someone shares a folder.|
|*oneOf*|[CommentNotificationContent](#schemacommentnotificationcontent)|false|none|The notification content for when someone comments on a design.|
|*oneOf*|[DesignAccessRequestedNotificationContent](#schemadesignaccessrequestednotificationcontent)|false|none|The notification content for when someone requests access to a design.|
|*oneOf*|[DesignApprovalRequestedNotificationContent](#schemadesignapprovalrequestednotificationcontent)|false|none|The notification content for when someone requests a user to<br>[approve a design](https://www.canva.com/help/get-approval/).|
|*oneOf*|[DesignApprovalResponseNotificationContent](#schemadesignapprovalresponsenotificationcontent)|false|none|The notification content for when someone approves a design or gives feedback.|
|*oneOf*|[DesignApprovalReviewerInvalidatedNotificationContent](#schemadesignapprovalreviewerinvalidatednotificationcontent)|false|none|The notification content for when a reviewer in a design is invalidated.|
|*oneOf*|[DesignMentionNotificationContent](#schemadesignmentionnotificationcontent)|false|none|The notification content for when someone mentions a user in a design.<br><br>The link to the design in this notification is valid for 30 days, and can only be opened by<br>the recipient of the notification.|
|*oneOf*|[TeamInviteNotificationContent](#schemateaminvitenotificationcontent)|false|none|The notification content for when someone is invited to a<br>[Canva team](https://www.canva.com/help/about-canva-for-teams/).|
|*oneOf*|[FolderAccessRequestedNotificationContent](#schemafolderaccessrequestednotificationcontent)|false|none|The notification content for when someone requests access to a folder.|
|*oneOf*|[SuggestionNotificationContent](#schemasuggestionnotificationcontent)|false|none|The notification content when someone does one of the following actions:<br><br> - Suggests edits to a design.<br> - Applies or rejects a suggestion.<br> - Replies to a suggestion.<br> - Mentions a user in a reply to a suggestion.|

<h2 id="tocS_ShareDesignNotificationContent">ShareDesignNotificationContent</h2>
<!-- backwards compatibility -->
<a id="schemasharedesignnotificationcontent"></a>
<a id="schema_ShareDesignNotificationContent"></a>
<a id="tocSsharedesignnotificationcontent"></a>
<a id="tocssharedesignnotificationcontent"></a>

```json
{
  "type": "share_design",
  "triggering_user": {
    "id": "uKakKUfI03Fg8k2gZ6OkT",
    "display_name": "John Doe"
  },
  "receiving_team_user": {
    "user_id": "auDAbliZ2rQNNOsUl5OLu",
    "team_id": "Oi2RJILTrKk0KRhRUZozX",
    "display_name": "Jane Doe"
  },
  "design": {
    "id": "DAFVztcvd9z",
    "title": "My summer holiday",
    "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    },
    "urls": {
      "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
      "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
    },
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "page_count": 3
  },
  "share_url": "https://www.canva.com/api/action?token=zWiz3GqRaWVkolwSgfBa9sKbsKgfHAoxv_mjs-mlX2M",
  "share": {
    "message": "Check this out!"
  }
}
```

The notification content for when someone shares a design.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|triggering_user|[User](#schemauser)|true|none|Metadata for the user, consisting of the User ID and display name.|
|receiving_team_user|[TeamUser](#schemateamuser)|true|none|Metadata for the user, consisting of the User ID, Team ID, and display name.|
|design|[DesignSummary](#schemadesignsummary)|true|none|Basic details about the design, such as the design's ID, title, and URL.|
|share_url|string|true|none|A URL that the user who receives the notification can use to access the shared design.|
|share|[ShareAction](#schemashareaction)|false|none|Metadata about the share event.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|share_design|

<h2 id="tocS_ShareFolderNotificationContent">ShareFolderNotificationContent</h2>
<!-- backwards compatibility -->
<a id="schemasharefoldernotificationcontent"></a>
<a id="schema_ShareFolderNotificationContent"></a>
<a id="tocSsharefoldernotificationcontent"></a>
<a id="tocssharefoldernotificationcontent"></a>

```json
{
  "type": "share_folder",
  "triggering_user": {
    "id": "uKakKUfI03Fg8k2gZ6OkT",
    "display_name": "John Doe"
  },
  "receiving_team_user": {
    "user_id": "auDAbliZ2rQNNOsUl5OLu",
    "team_id": "Oi2RJILTrKk0KRhRUZozX",
    "display_name": "Jane Doe"
  },
  "folder": {
    "id": "FAF2lZtloor",
    "title": "My awesome holiday",
    "name": "My awesome holiday",
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "url": "https://www.canva.com/folder/FAF2lZtloor"
  },
  "share": {
    "message": "Check this out!"
  }
}
```

The notification content for when someone shares a folder.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|triggering_user|[User](#schemauser)|true|none|Metadata for the user, consisting of the User ID and display name.|
|receiving_team_user|[TeamUser](#schemateamuser)|true|none|Metadata for the user, consisting of the User ID, Team ID, and display name.|
|folder|[FolderSummary](#schemafoldersummary)|true|none|This object contains some folder metadata. You can retrieve additional metadata<br>using the folder ID and the `/v1/folders/{folderId}` endpoint.|
|share|[ShareAction](#schemashareaction)|false|none|Metadata about the share event.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|share_folder|

<h2 id="tocS_CommentNotificationContent">CommentNotificationContent</h2>
<!-- backwards compatibility -->
<a id="schemacommentnotificationcontent"></a>
<a id="schema_CommentNotificationContent"></a>
<a id="tocScommentnotificationcontent"></a>
<a id="tocscommentnotificationcontent"></a>

```json
{
  "type": "comment",
  "triggering_user": {
    "id": "uKakKUfI03Fg8k2gZ6OkT",
    "display_name": "John Doe"
  },
  "receiving_team_user": {
    "user_id": "auDAbliZ2rQNNOsUl5OLu",
    "team_id": "Oi2RJILTrKk0KRhRUZozX",
    "display_name": "Jane Doe"
  },
  "design": {
    "id": "DAFVztcvd9z",
    "title": "My summer holiday",
    "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    },
    "urls": {
      "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
      "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
    },
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "page_count": 3
  },
  "comment_url": "https://www.canva.com/design/3WCduQdjayTcPVM/z128cqanFu7E3/edit?ui=OdllGgZ4Snnq3MD8uI10bfA",
  "comment": {
    "type": "comment",
    "data": {
      "type": "parent",
      "id": "KeAbiEAjZEj",
      "attached_to": {
        "design_id": "DAFVztcvd9z",
        "type": "design"
      },
      "message": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
      "author": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      },
      "created_at": 1692928800,
      "updated_at": 1692928900,
      "mentions": {
        "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
          "user_id": "oUnPjZ2k2yuhftbWF7873o",
          "team_id": "oBpVhLW22VrqtwKgaayRbP",
          "display_name": "John Doe"
        }
      },
      "assignee": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      },
      "resolver": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      }
    }
  },
  "comment_event": {
    "type": "new",
    "comment_url": "https://www.canva.com/design/3WCduQdjayTcPVM/z128cqanFu7E3/edit?ui=OdllGgZ4Snnq3MD8uI10bfA",
    "comment": {
      "id": "KeAbiEAjZEj",
      "design_id": "DAFVztcvd9z",
      "thread_type": {
        "type": "comment",
        "content": {
          "plaintext": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
          "markdown": "*_Great work_* [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!"
        },
        "mentions": {
          "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
            "tag": "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP",
            "user": {
              "user_id": "oUnPjZ2k2yuhftbWF7873o",
              "team_id": "oBpVhLW22VrqtwKgaayRbP",
              "display_name": "John Doe"
            }
          }
        },
        "assignee": {
          "id": "uKakKUfI03Fg8k2gZ6OkT",
          "display_name": "John Doe"
        },
        "resolver": {
          "id": "uKakKUfI03Fg8k2gZ6OkT",
          "display_name": "John Doe"
        }
      },
      "author": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      },
      "created_at": 1692928800,
      "updated_at": 1692928900
    }
  }
}
```

The notification content for when someone comments on a design.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|triggering_user|[User](#schemauser)|true|none|Metadata for the user, consisting of the User ID and display name.|
|receiving_team_user|[TeamUser](#schemateamuser)|true|none|Metadata for the user, consisting of the User ID, Team ID, and display name.|
|design|[DesignSummary](#schemadesignsummary)|true|none|Basic details about the design, such as the design's ID, title, and URL.|
|comment_url|string|false|none|**Deprecated.** A URL to the design, focused on the new comment.<br><br>The `comment_url` property is deprecated.<br>For details of the comment event, use the `comment_event` property instead.|
|comment|[CommentEventDeprecated](#schemacommenteventdeprecated)|false|none|**Deprecated.** Basic details about the comment.<br><br>The `comment` property is deprecated.<br>For details of the comment event, use the `comment_event` property instead.|
|comment_event|[CommentEvent](#schemacommentevent)|false|none|The type of comment event, including additional type-specific properties.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|comment|

<h2 id="tocS_DesignAccessRequestedNotificationContent">DesignAccessRequestedNotificationContent</h2>
<!-- backwards compatibility -->
<a id="schemadesignaccessrequestednotificationcontent"></a>
<a id="schema_DesignAccessRequestedNotificationContent"></a>
<a id="tocSdesignaccessrequestednotificationcontent"></a>
<a id="tocsdesignaccessrequestednotificationcontent"></a>

```json
{
  "type": "design_access_requested",
  "triggering_user": {
    "user_id": "auDAbliZ2rQNNOsUl5OLu",
    "team_id": "Oi2RJILTrKk0KRhRUZozX",
    "display_name": "Jane Doe"
  },
  "receiving_team_user": {
    "user_id": "auDAbliZ2rQNNOsUl5OLu",
    "team_id": "Oi2RJILTrKk0KRhRUZozX",
    "display_name": "Jane Doe"
  },
  "design": {
    "id": "DAFVztcvd9z",
    "title": "My summer holiday",
    "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    },
    "urls": {
      "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
      "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
    },
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "page_count": 3
  },
  "grant_access_url": "https://www.canva.com/api/action?token=OosRN8M_eO2-QbLpUmP5JCwTMSXWfadtQYWuj9WKzoE"
}
```

The notification content for when someone requests access to a design.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|triggering_user|[TeamUser](#schemateamuser)|true|none|Metadata for the user, consisting of the User ID, Team ID, and display name.|
|receiving_team_user|[TeamUser](#schemateamuser)|true|none|Metadata for the user, consisting of the User ID, Team ID, and display name.|
|design|[DesignSummary](#schemadesignsummary)|true|none|Basic details about the design, such as the design's ID, title, and URL.|
|grant_access_url|string|true|none|A URL, which is scoped only to the user that can grant the requested access to the<br>design, that approves the requested access.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|design_access_requested|

<h2 id="tocS_DesignApprovalRequestedNotificationContent">DesignApprovalRequestedNotificationContent</h2>
<!-- backwards compatibility -->
<a id="schemadesignapprovalrequestednotificationcontent"></a>
<a id="schema_DesignApprovalRequestedNotificationContent"></a>
<a id="tocSdesignapprovalrequestednotificationcontent"></a>
<a id="tocsdesignapprovalrequestednotificationcontent"></a>

```json
{
  "type": "design_approval_requested",
  "triggering_user": {
    "id": "uKakKUfI03Fg8k2gZ6OkT",
    "display_name": "John Doe"
  },
  "initial_requesting_user": {
    "user_id": "auDAbliZ2rQNNOsUl5OLu",
    "team_id": "Oi2RJILTrKk0KRhRUZozX",
    "display_name": "Jane Doe"
  },
  "receiving_team_user": {
    "user_id": "auDAbliZ2rQNNOsUl5OLu",
    "team_id": "Oi2RJILTrKk0KRhRUZozX",
    "display_name": "Jane Doe"
  },
  "requested_groups": [
    {
      "id": "dl9n9SoWoExMsw6Ri1iTg",
      "display_name": "Sales team",
      "external": true
    }
  ],
  "design": {
    "id": "DAFVztcvd9z",
    "title": "My summer holiday",
    "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    },
    "urls": {
      "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
      "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
    },
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "page_count": 3
  },
  "approve_url": "https://canva.com/api/action?token=HZb0lLHaEhNkT1qQrAwoe0-8SqyXUgJ4vnHGvN2rLZ0",
  "approval_request": {
    "message": "LGTM!"
  }
}
```

The notification content for when someone requests a user to
[approve a design](https://www.canva.com/help/get-approval/).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|triggering_user|[User](#schemauser)|true|none|Metadata for the user, consisting of the User ID and display name.|
|initial_requesting_user|[TeamUser](#schemateamuser)|true|none|Metadata for the user, consisting of the User ID, Team ID, and display name.|
|receiving_team_user|[TeamUser](#schemateamuser)|true|none|Metadata for the user, consisting of the User ID, Team ID, and display name.|
|requested_groups|[[Group](#schemagroup)]|true|none|none|
|design|[DesignSummary](#schemadesignsummary)|true|none|Basic details about the design, such as the design's ID, title, and URL.|
|approve_url|string|true|none|A URL, which is scoped only to the user requested to review the design, that links to<br>the design with the approval UI opened.|
|approval_request|[ApprovalRequestAction](#schemaapprovalrequestaction)|true|none|Metadata about the design approval request.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|design_approval_requested|

<h2 id="tocS_DesignApprovalResponseNotificationContent">DesignApprovalResponseNotificationContent</h2>
<!-- backwards compatibility -->
<a id="schemadesignapprovalresponsenotificationcontent"></a>
<a id="schema_DesignApprovalResponseNotificationContent"></a>
<a id="tocSdesignapprovalresponsenotificationcontent"></a>
<a id="tocsdesignapprovalresponsenotificationcontent"></a>

```json
{
  "type": "design_approval_response",
  "triggering_user": {
    "id": "uKakKUfI03Fg8k2gZ6OkT",
    "display_name": "John Doe"
  },
  "receiving_team_user": {
    "user_id": "auDAbliZ2rQNNOsUl5OLu",
    "team_id": "Oi2RJILTrKk0KRhRUZozX",
    "display_name": "Jane Doe"
  },
  "initial_requesting_user": {
    "user_id": "auDAbliZ2rQNNOsUl5OLu",
    "team_id": "Oi2RJILTrKk0KRhRUZozX",
    "display_name": "Jane Doe"
  },
  "responding_groups": [
    {
      "id": "dl9n9SoWoExMsw6Ri1iTg",
      "display_name": "Sales team",
      "external": true
    }
  ],
  "design": {
    "id": "DAFVztcvd9z",
    "title": "My summer holiday",
    "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    },
    "urls": {
      "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
      "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
    },
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "page_count": 3
  },
  "approval_response": {
    "approved": true,
    "ready_to_publish": true,
    "message": "string"
  }
}
```

The notification content for when someone approves a design or gives feedback.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|triggering_user|[User](#schemauser)|true|none|Metadata for the user, consisting of the User ID and display name.|
|receiving_team_user|[TeamUser](#schemateamuser)|true|none|Metadata for the user, consisting of the User ID, Team ID, and display name.|
|initial_requesting_user|[TeamUser](#schemateamuser)|true|none|Metadata for the user, consisting of the User ID, Team ID, and display name.|
|responding_groups|[[Group](#schemagroup)]|true|none|none|
|design|[DesignSummary](#schemadesignsummary)|true|none|Basic details about the design, such as the design's ID, title, and URL.|
|approval_response|[ApprovalResponseAction](#schemaapprovalresponseaction)|true|none|Metadata about the design approval response.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|design_approval_response|

<h2 id="tocS_DesignApprovalReviewerInvalidatedNotificationContent">DesignApprovalReviewerInvalidatedNotificationContent</h2>
<!-- backwards compatibility -->
<a id="schemadesignapprovalreviewerinvalidatednotificationcontent"></a>
<a id="schema_DesignApprovalReviewerInvalidatedNotificationContent"></a>
<a id="tocSdesignapprovalreviewerinvalidatednotificationcontent"></a>
<a id="tocsdesignapprovalreviewerinvalidatednotificationcontent"></a>

```json
{
  "type": "design_approval_reviewer_invalidated",
  "receiving_team_user": {
    "user_id": "auDAbliZ2rQNNOsUl5OLu",
    "team_id": "Oi2RJILTrKk0KRhRUZozX"
  },
  "design": {
    "id": "DAFVztcvd9z",
    "title": "My summer holiday",
    "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    },
    "urls": {
      "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
      "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
    },
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "page_count": 3
  }
}
```

The notification content for when a reviewer in a design is invalidated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|receiving_team_user|[TeamUserSummary](#schemateamusersummary)|true|none|Metadata for the user, consisting of the User ID and Team ID.|
|design|[DesignSummary](#schemadesignsummary)|true|none|Basic details about the design, such as the design's ID, title, and URL.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|design_approval_reviewer_invalidated|

<h2 id="tocS_DesignMentionNotificationContent">DesignMentionNotificationContent</h2>
<!-- backwards compatibility -->
<a id="schemadesignmentionnotificationcontent"></a>
<a id="schema_DesignMentionNotificationContent"></a>
<a id="tocSdesignmentionnotificationcontent"></a>
<a id="tocsdesignmentionnotificationcontent"></a>

```json
{
  "type": "design_mention",
  "triggering_user": {
    "id": "uKakKUfI03Fg8k2gZ6OkT",
    "display_name": "John Doe"
  },
  "receiving_team_user": {
    "user_id": "auDAbliZ2rQNNOsUl5OLu",
    "team_id": "Oi2RJILTrKk0KRhRUZozX",
    "display_name": "Jane Doe"
  },
  "design": {
    "id": "DAFVztcvd9z",
    "title": "My summer holiday",
    "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    },
    "urls": {
      "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
      "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
    },
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "page_count": 3
  }
}
```

The notification content for when someone mentions a user in a design.

The link to the design in this notification is valid for 30 days, and can only be opened by
the recipient of the notification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|triggering_user|[User](#schemauser)|true|none|Metadata for the user, consisting of the User ID and display name.|
|receiving_team_user|[TeamUser](#schemateamuser)|true|none|Metadata for the user, consisting of the User ID, Team ID, and display name.|
|design|[DesignSummary](#schemadesignsummary)|true|none|Basic details about the design, such as the design's ID, title, and URL.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|design_mention|

<h2 id="tocS_TeamInviteNotificationContent">TeamInviteNotificationContent</h2>
<!-- backwards compatibility -->
<a id="schemateaminvitenotificationcontent"></a>
<a id="schema_TeamInviteNotificationContent"></a>
<a id="tocSteaminvitenotificationcontent"></a>
<a id="tocsteaminvitenotificationcontent"></a>

```json
{
  "type": "team_invite",
  "triggering_user": {
    "id": "uKakKUfI03Fg8k2gZ6OkT",
    "display_name": "John Doe"
  },
  "receiving_user": {
    "id": "uKakKUfI03Fg8k2gZ6OkT",
    "display_name": "John Doe"
  },
  "inviting_team": {
    "id": "Oi2RJILTrKk0KRhRUZozX",
    "display_name": "Acme Corporation",
    "external": true
  }
}
```

The notification content for when someone is invited to a
[Canva team](https://www.canva.com/help/about-canva-for-teams/).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|triggering_user|[User](#schemauser)|true|none|Metadata for the user, consisting of the User ID and display name.|
|receiving_user|[User](#schemauser)|true|none|Metadata for the user, consisting of the User ID and display name.|
|inviting_team|[Team](#schemateam)|true|none|Metadata for the Canva Team, consisting of the Team ID,<br>display name, and whether it's an external Canva Team.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|team_invite|

<h2 id="tocS_FolderAccessRequestedNotificationContent">FolderAccessRequestedNotificationContent</h2>
<!-- backwards compatibility -->
<a id="schemafolderaccessrequestednotificationcontent"></a>
<a id="schema_FolderAccessRequestedNotificationContent"></a>
<a id="tocSfolderaccessrequestednotificationcontent"></a>
<a id="tocsfolderaccessrequestednotificationcontent"></a>

```json
{
  "type": "folder_access_requested",
  "triggering_user": {
    "user_id": "auDAbliZ2rQNNOsUl5OLu",
    "team_id": "Oi2RJILTrKk0KRhRUZozX",
    "display_name": "Jane Doe"
  },
  "receiving_team_user": {
    "user_id": "auDAbliZ2rQNNOsUl5OLu",
    "team_id": "Oi2RJILTrKk0KRhRUZozX",
    "display_name": "Jane Doe"
  },
  "folder": {
    "id": "FAF2lZtloor",
    "title": "My awesome holiday",
    "name": "My awesome holiday",
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "url": "https://www.canva.com/folder/FAF2lZtloor"
  }
}
```

The notification content for when someone requests access to a folder.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|triggering_user|[TeamUser](#schemateamuser)|true|none|Metadata for the user, consisting of the User ID, Team ID, and display name.|
|receiving_team_user|[TeamUser](#schemateamuser)|true|none|Metadata for the user, consisting of the User ID, Team ID, and display name.|
|folder|[FolderSummary](#schemafoldersummary)|true|none|This object contains some folder metadata. You can retrieve additional metadata<br>using the folder ID and the `/v1/folders/{folderId}` endpoint.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|folder_access_requested|

<h2 id="tocS_SuggestionNotificationContent">SuggestionNotificationContent</h2>
<!-- backwards compatibility -->
<a id="schemasuggestionnotificationcontent"></a>
<a id="schema_SuggestionNotificationContent"></a>
<a id="tocSsuggestionnotificationcontent"></a>
<a id="tocssuggestionnotificationcontent"></a>

```json
{
  "type": "suggestion",
  "triggering_user": {
    "id": "uKakKUfI03Fg8k2gZ6OkT",
    "display_name": "John Doe"
  },
  "receiving_team_user": {
    "user_id": "auDAbliZ2rQNNOsUl5OLu",
    "team_id": "Oi2RJILTrKk0KRhRUZozX",
    "display_name": "Jane Doe"
  },
  "design": {
    "id": "DAFVztcvd9z",
    "title": "My summer holiday",
    "url": "https://www.canva.com/design/DAFVztcvd9z/edit",
    "thumbnail": {
      "width": 595,
      "height": 335,
      "url": "https://document-export.canva.com/Vczz9/zF9vzVtdADc/2/thumbnail/0001.png?<query-string>"
    },
    "urls": {
      "edit_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/edit",
      "view_url": "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzQyMDk5NDAzMDc5fQ..GKLx2hrJa3wSSDKQ.hk3HA59qJyxehR-ejzt2DThBW0cbRdMBz7Fb5uCpwD-4o485pCf4kcXt_ypUYX0qMHVeZ131YvfwGPIhbk-C245D8c12IIJSDbZUZTS7WiCOJZQ.sNz3mPSQxsETBvl_-upMYA/view"
    },
    "created_at": 1377396000,
    "updated_at": 1692928800,
    "page_count": 3
  },
  "suggestion_event_type": {
    "type": "new",
    "suggestion_url": "https://www.canva.com/design/3WCduQdjayTcPVM/z128cqanFu7E3/edit?ui=OdllGgZ4Snnq3MD8uI10bfA",
    "suggestion": {
      "id": "KeAbiEAjZEj",
      "design_id": "DAFVztcvd9z",
      "thread_type": {
        "type": "comment",
        "content": {
          "plaintext": "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
          "markdown": "*_Great work_* [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!"
        },
        "mentions": {
          "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP": {
            "tag": "oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP",
            "user": {
              "user_id": "oUnPjZ2k2yuhftbWF7873o",
              "team_id": "oBpVhLW22VrqtwKgaayRbP",
              "display_name": "John Doe"
            }
          }
        },
        "assignee": {
          "id": "uKakKUfI03Fg8k2gZ6OkT",
          "display_name": "John Doe"
        },
        "resolver": {
          "id": "uKakKUfI03Fg8k2gZ6OkT",
          "display_name": "John Doe"
        }
      },
      "author": {
        "id": "uKakKUfI03Fg8k2gZ6OkT",
        "display_name": "John Doe"
      },
      "created_at": 1692928800,
      "updated_at": 1692928900
    }
  }
}
```

The notification content when someone does one of the following actions:

 - Suggests edits to a design.
 - Applies or rejects a suggestion.
 - Replies to a suggestion.
 - Mentions a user in a reply to a suggestion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|triggering_user|[User](#schemauser)|true|none|Metadata for the user, consisting of the User ID and display name.|
|receiving_team_user|[TeamUser](#schemateamuser)|true|none|Metadata for the user, consisting of the User ID, Team ID, and display name.|
|design|[DesignSummary](#schemadesignsummary)|true|none|Basic details about the design, such as the design's ID, title, and URL.|
|suggestion_event_type|[SuggestionEventType](#schemasuggestioneventtype)|true|none|The type of suggestion event, along with additional type-specific properties.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|suggestion|

<h2 id="tocS_ShareAction">ShareAction</h2>
<!-- backwards compatibility -->
<a id="schemashareaction"></a>
<a id="schema_ShareAction"></a>
<a id="tocSshareaction"></a>
<a id="tocsshareaction"></a>

```json
{
  "message": "Check this out!"
}
```

Metadata about the share event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|The optional message users can include when sharing something with another<br>user using the Canva UI.|

<h2 id="tocS_ApprovalRequestAction">ApprovalRequestAction</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalrequestaction"></a>
<a id="schema_ApprovalRequestAction"></a>
<a id="tocSapprovalrequestaction"></a>
<a id="tocsapprovalrequestaction"></a>

```json
{
  "message": "LGTM!"
}
```

Metadata about the design approval request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|The message included by the user when requesting a design approval.|

<h2 id="tocS_ApprovalResponseAction">ApprovalResponseAction</h2>
<!-- backwards compatibility -->
<a id="schemaapprovalresponseaction"></a>
<a id="schema_ApprovalResponseAction"></a>
<a id="tocSapprovalresponseaction"></a>
<a id="tocsapprovalresponseaction"></a>

```json
{
  "approved": true,
  "ready_to_publish": true,
  "message": "string"
}
```

Metadata about the design approval response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approved|boolean|true|none|Whether the design was approved. When `true`, the reviewer has approved<br>the design.|
|ready_to_publish|boolean|false|none|Whether the design is ready to publish. When `true`, the design has been approved<br>by all reviewers and can be published.|
|message|string|false|none|The message included by a user responding to a design approval request.|
