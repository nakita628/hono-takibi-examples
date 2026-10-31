<h1 id="brain-web-api">Brain Web API v2.23.2+0.gfbc3926.dirty</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This document describes the [Intellifi Brain](https://intellifi.zendesk.com/hc/en-us/categories/360000685454)
Web API specification using the [OpenAPI specification](https://github.com/OAI/OpenAPI-Specification).

The Brain Web API is a RESTful API that allows you to interact with the
[Intellifi devices](https://intellifi.zendesk.com/hc/en-us/categories/360000685434) and
services in a powerful and simple way. Our end-to-end solution allows you to
localize your items/assets based on technologies such as RFID and Bluetooth.

# Try it out!

The API can be tried out and tested using the ['api-doc/tryitout' endpoint on this site](./tryitout/).
This UI allows anyone to visualize and interact with the API’s resources without having any of the implementation logic in place.
It’s automatically generated from this Specification, with the visual documentation making it easy for back end implementation and client side consumption.

# Authentication

Applications are required to provide some form of authentication to the API
for every secured endpoint. The Brain offers two forms of authentication.

- API key (Via an HTTP request header or URL parameter)
- Session cookie

<!-- ReDoc-Inject: <security-definitions> -->

# See also

- About Intellifi and what we do: [intellifi.nl](https://intellifi.nl)
- Technical and background information: [intellifi.zendesk.com](https://intellifi.zendesk.com)

Base URLs:

* <a href="https://brain.intellifi.cloud/api">https://brain.intellifi.cloud/api</a> - Cloud hosted Brain API endpoint.

Email: <a href="mailto:support@intellifi.nl">Support</a> 
Web: <a href="https://intellifi.zendesk.com">Support</a> 
License: <a href="./LICENSE">MIT</a>

<a href="https://intellifi.zendesk.com">Find out more</a>

# Authentication

* API Key (CookieSid)
    - Parameter Name: **brain.sid**, in: cookie. This [session cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
will be set after a successful graphical front-end login into the Brain.
Authentication via this method is particularly useful for using the API manually via the
'[tryitout](./tryitout)' tool or by browsing the API using some JSON viewer browser extension.
A [same-origin policy](https://en.wikipedia.org/wiki/Same-origin_policy) is enforced for cookie authentication.
Therefore applications accessing the API outside of the Brain, are not
allowed to be authenticated via this cookie.

Some endpoints, mainly `users` and `keys` can only be used when
authenticated via an administrative account using a Cookie. This means
that these endpoints can only be used when logged in into the Graphical
front-end of the Brain.

* API Key (HeaderApiKey)
    - Parameter Name: **X-Api-Key**, in: header. Applications are required to provide an API key with every HTTP request
to the Web API.

* API Key (QueryApiKey)
    - Parameter Name: **key**, in: query. Applications are required to provide an API key with every HTTP request
to the Web API.

<h1 id="brain-web-api-authinfo">authinfo</h1>

Read-only route providing information about how the requesting client is authenticated on the API, as well as corresponding permissions.


## Authentication information

<a id="opIdgetAuthinfo"></a>

> Code samples

```bash
curl https://example.com/authinfo \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /authinfo`

> Example responses

> 200 Response

```json
{
  "api_key_id": "5b7d6cbd7503c445552a1664",
  "auth_method": "user_session",
  "authenticated": true,
  "permissions": {
    "mutate": true
  },
  "url": "https://brain.intellifi.nl/api/foobar",
  "user_id": "5b7d6cbd7503c445552a1664"
}
```

<h3 id="authentication-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the authentication information|Inline|

<h3 id="authentication-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_key_id|string|false|none|Reference to the static API key (/api/keys) used to authenticate this request (when auth_method=static_api_key)|
|auth_method|string|false|none|What kind of authentication was used|
|authenticated|boolean|false|none|Whether or not you are authenticated|
|permissions|object|false|none|none|
|» mutate|boolean|false|none|Whether or not this session can mutate resources|
|url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|
|user_id|string|false|none|Reference to the user account (/api/users) used to authenticate this request (when auth_method=user_session)|

#### Enumerated Values

|Property|Value|
|---|---|
|auth_method|user_session|
|auth_method|internal|
|auth_method|static_api_key|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

<h1 id="brain-web-api-blobs">blobs</h1>

The `blobs` resource provides a service for storing binary objects on the Brain, e.g. images.
Intended for applications that interact with the Brain but do not or cannot have their own (centralized) persistent storage.

See also the `kvpairs` resource.


## Get all binary large objects (blob)

<a id="opIdgetBlobs"></a>

> Code samples

```bash
curl https://example.com/blobs \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /blobs`

<h3 id="get-all-binary-large-objects-blob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string(date-time)|false|Limits on `time_created`, Marks the start of a range, optionally use `before` to set the end. Result output excludes the given timestamp.|
|after_id|query|string|false|Limits directly on `id`. Marks the start of a range, optionally use `before_id` to set the end. Result output excludes the given `id` value. Please note that `id` is in chronological order.|
|before|query|string(dateTime)|false|Limits on `time_created`. Marks the end of a range, optionally use `after` to set the start. Result output excludes the given timestamp.|
|before_id|query|string|false|Limits directly on `id`. Marks the end of a range, optionally use `after_id` to set the start. Result output excludes the given `id` value. Please note that `id` is in chronological order.|
|from|query|string(dateTime)|false|Limits on `time_created`. Marks the start of a range, optionally use `until` to set the end. Result output includes the given timestamp.|
|from_id|query|string|false|Limits on `id`. Marks the start of a range, optionally use `until_id` to set the end. Result output includes the given `id` value. Please note that `id` is in chronological order.|
|id_only|query|boolean|false|Removes `url` fields from output and shows `_id` instead of `_url` in references.|
|limit|query|integer|false|Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.|
|populate|query|string|false|Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.|
|results_only|query|boolean|false|Removes response envelope with information about query, only sends back a JSON array with the applicable resources.|
|select|query|string|false|Select which properties should be returned. You may add multiple fields by giving a comma separated value. Select can also be used together with populate: Specify the resource first, then a period(.) followed by the field.|
|sort|query|string|false|Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).|
|until|query|string(dateTime)|false|Limits on `time_created`. Marks the end of a range, optionally use `from` to set the start. Result output includes the given timestamp.|
|until_id|query|string|false|Limits on `id`. Marks the end of a range, optionally use `from_id` to set the start. Result output includes the given `id` value. Please note that `id` is in chronological order.|
|timeout_s|query|number|false|Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.|
|id|query|[IdReadOnly](#schemaidreadonly)|false|Unique identifier|
|time_created|query|[TimeCreated](#schematimecreated)|false|Filter on the time the resource was created.|
|time_updated|query|[TimeUpdated](#schematimeupdated)|false|Filter on the time the resource was last updated|
|hash|query|string|false|Filter based on the hash of the blob.|
|blob_key|query|string|false|Filter based on the unique blob_key|
|content_type|query|string|false|Filter based on the content type of the blob.|
|filename|query|string|false|Filter based on the filename of the blob.|
|time_last_accessed|query|string|false|Filter based on the last time the blob was accessed|

> Example responses

> 200 Response

```json
{
  "count": 293401,
  "count_current": 100,
  "is_limited": true,
  "next_url": "https://brain.intellifi.nl/api/items?before_id=5b599c427503c44239cf0399",
  "query_duration_ms": 42,
  "url": "https://brain.intellifi.nl/api/foobar",
  "results": [
    {
      "blob_key": "foobar",
      "content_type": "image/png",
      "download_url": "https://brain.intellifi.nl/api/foobar",
      "filename": "Foo bar",
      "hash": "50df961c6c099f778fa50647572ef21f4ef416d52f7e00e311d7dbca1a735f6a",
      "id": "5b7d6cbd7503c445552a1664",
      "time_created": "2018-08-30T09:51:59.737Z",
      "time_last_accessed": "2018-08-30T09:51:59.737Z",
      "time_updated": "2018-08-30T09:51:59.737Z",
      "upload_url": "https://brain.intellifi.nl/api/foobar",
      "url": "https://brain.intellifi.nl/api/foobar"
    }
  ]
}
```

<h3 id="get-all-binary-large-objects-blob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing a list of blobs|Inline|

<h3 id="get-all-binary-large-objects-blob-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|The maximum number of items in the response (as set in the query or by default).|
|count_current|integer|false|none|The maximum number of items available to return.|
|is_limited|boolean|false|none|Becomes false when the number of results is smaller than limit.|
|next_url|string|false|none|URL to the next page of items. ( null if none)|
|query_duration_ms|integer|false|none|Amount of time, in milliseconds, the request needed to complete.|
|url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|
|results|[[Blob](#schemablob)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Create binary large object (blob) metadata

<a id="opIdaddBlob"></a>

> Code samples

```bash
curl https://example.com/blobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}" \
  -d '{
    "blob_key": "foobar",
    "content_type": "image/png",
    "filename": "Foo bar"
  }'
```

`POST /blobs`

> Body parameter

```json
{
  "blob_key": "foobar",
  "content_type": "image/png",
  "filename": "Foo bar"
}
```

<h3 id="create-binary-large-object-blob-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Blob](#schemablob)|true|A JSON object containing blob information|
|» blob_key|body|string|false|Unique key to the blob|
|» content_type|body|string|false|Media type of the resource. Automatically detected when not given in a POST.|
|» filename|body|string|false|Filename of the blob|

> Example responses

> 201 Response

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

<h3 id="create-binary-large-object-blob-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A JSON object containing the newly added resource|[ResponseDefaultResource](#schemaresponsedefaultresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Get binary large object (blob)

<a id="opIdgetBlobMetadataById"></a>

> Code samples

```bash
curl https://example.com/blobs/5b8d0b717503c445552a1865 \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /blobs/{id}`

<h3 id="get-binary-large-object-blob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|

> Example responses

> 200 Response

```json
{
  "blob_key": "foobar",
  "content_type": "image/png",
  "download_url": "https://brain.intellifi.nl/api/foobar",
  "filename": "Foo bar",
  "hash": "50df961c6c099f778fa50647572ef21f4ef416d52f7e00e311d7dbca1a735f6a",
  "id": "5b7d6cbd7503c445552a1664",
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_last_accessed": "2018-08-30T09:51:59.737Z",
  "time_updated": "2018-08-30T09:51:59.737Z",
  "upload_url": "https://brain.intellifi.nl/api/foobar",
  "url": "https://brain.intellifi.nl/api/foobar"
}
```

<h3 id="get-binary-large-object-blob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the blob|[Blob](#schemablob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Delete binary large object (blob)

<a id="opIddeleteBlob"></a>

> Code samples

```bash
curl https://example.com/blobs/5b8d0b717503c445552a1865 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`DELETE /blobs/{id}`

<h3 id="delete-binary-large-object-blob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|

> Example responses

> 200 Response

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

<h3 id="delete-binary-large-object-blob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the deleted resource|[ResponseDefaultResource](#schemaresponsedefaultresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Download a binary large object (blob)

<a id="opIdgetBlobById"></a>

> Code samples

```bash
curl https://example.com/blobs/5b8d0b717503c445552a1865/download/string \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /blobs/{id}/download/{filename}`

<h3 id="download-a-binary-large-object-blob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|
|filename|path|string|true|Filename of the blob.|

<h3 id="download-a-binary-large-object-blob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The stored binary blob|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Create binary large object (blob)

<a id="opIduploadBlobById"></a>

> Code samples

```bash
curl https://example.com/blobs/5b8d0b717503c445552a1865/upload \
  -X POST \
  -H "Cookie: brain.sid=${API_KEY}" \
  -F 'file=@/path/to/file'
```

`POST /blobs/{id}/upload`

> Body parameter

```yaml
file: string
```

<h3 id="create-binary-large-object-blob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|
|body|body|object|false|none|
|» file|body|string(binary)|false|none|

<h3 id="create-binary-large-object-blob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Upload was successful|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

<h1 id="brain-web-api-events">events</h1>

The `events` resource temporarily holds Brain events that match an event subscription in the `subscriptions` resource.
The subscription determines how long the events are held.

See also the `subscriptions` resource.


<a href="https://intellifi.zendesk.com/hc/en-us/sections/360001588534">External documentation</a>

## Get all events

<a id="opIdgetEvents"></a>

> Code samples

```bash
curl https://example.com/events \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /events`

<h3 id="get-all-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string(date-time)|false|Limits on `time_created`, Marks the start of a range, optionally use `before` to set the end. Result output excludes the given timestamp.|
|after_id|query|string|false|Limits directly on `id`. Marks the start of a range, optionally use `before_id` to set the end. Result output excludes the given `id` value. Please note that `id` is in chronological order.|
|before|query|string(dateTime)|false|Limits on `time_created`. Marks the end of a range, optionally use `after` to set the start. Result output excludes the given timestamp.|
|before_id|query|string|false|Limits directly on `id`. Marks the end of a range, optionally use `after_id` to set the start. Result output excludes the given `id` value. Please note that `id` is in chronological order.|
|from|query|string(dateTime)|false|Limits on `time_created`. Marks the start of a range, optionally use `until` to set the end. Result output includes the given timestamp.|
|from_id|query|string|false|Limits on `id`. Marks the start of a range, optionally use `until_id` to set the end. Result output includes the given `id` value. Please note that `id` is in chronological order.|
|id_only|query|boolean|false|Removes `url` fields from output and shows `_id` instead of `_url` in references.|
|limit|query|integer|false|Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.|
|populate|query|string|false|Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.|
|results_only|query|boolean|false|Removes response envelope with information about query, only sends back a JSON array with the applicable resources.|
|sort|query|string|false|Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).|
|until|query|string(dateTime)|false|Limits on `time_created`. Marks the end of a range, optionally use `from` to set the start. Result output includes the given timestamp.|
|until_id|query|string|false|Limits on `id`. Marks the end of a range, optionally use `from_id` to set the start. Result output includes the given `id` value. Please note that `id` is in chronological order.|
|timeout_s|query|number|false|Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.|
|id|query|[IdReadOnly](#schemaidreadonly)|false|Unique identifier|
|time_created|query|[TimeCreated](#schematimecreated)|false|Filter on the time the resource was created.|
|topic.resource_type|query|[EventTopicResourceType](#schemaeventtopicresourcetype)|false|Filter on the topic resource type|
|topic.action|query|[EventTopicAction](#schemaeventtopicaction)|false|Filter on the topic action|
|topic.resource|query|[IdReadOnly](#schemaidreadonly)|false|Filter on the topic resource id|
|time_event|query|[TimeExpire](#schematimeexpire)|false|Filter on the time the event was generated on the device.|
|time_expire|query|[TimeExpire](#schematimeexpire)|false|Filter on the time the event will expire.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|topic.resource_type|blobs|
|topic.resource_type|items|
|topic.resource_type|keys|
|topic.resource_type|kvpairs|
|topic.resource_type|locations|
|topic.resource_type|presences|
|topic.resource_type|services|
|topic.resource_type|spots|
|topic.resource_type|subscriptions|
|topic.resource_type|users|
|topic.action|created|
|topic.action|updated|
|topic.action|deleted|
|topic.action|disappeared|
|topic.action|connection-rssi-changed|

> Example responses

> 200 Response

```json
{
  "count": 293401,
  "count_current": 100,
  "is_limited": true,
  "next_url": "https://brain.intellifi.nl/api/items?before_id=5b599c427503c44239cf0399",
  "query_duration_ms": 42,
  "url": "https://brain.intellifi.nl/api/foobar",
  "results": [
    {
      "id": "5b7d6cbd7503c445552a1664",
      "payload": {
        "foo": "bar"
      },
      "time_created": "2018-08-30T09:51:59.737Z",
      "time_event": "2018-08-30T09:51:59.737Z",
      "time_expire": "2018-08-30T09:51:59.737Z",
      "topic": {
        "action": "created",
        "arguments": {
          "foo": "bar"
        },
        "resource_id": "5b7d6cbd7503c445552a1664",
        "resource_type": "items",
        "resource_url": "https://brain.intellifi.nl/api/foobar"
      },
      "url": "https://brain.intellifi.nl/api/foobar"
    }
  ]
}
```

<h3 id="get-all-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing a list of events|Inline|

<h3 id="get-all-events-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|The maximum number of items in the response (as set in the query or by default).|
|count_current|integer|false|none|The maximum number of items available to return.|
|is_limited|boolean|false|none|Becomes false when the number of results is smaller than limit.|
|next_url|string|false|none|URL to the next page of items. ( null if none)|
|query_duration_ms|integer|false|none|Amount of time, in milliseconds, the request needed to complete.|
|url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|
|results|[[Event](#schemaevent)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Get event

<a id="opIdgetEventById"></a>

> Code samples

```bash
curl https://example.com/events/5b8d0b717503c445552a1865 \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /events/{id}`

<h3 id="get-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|

> Example responses

> 200 Response

```json
{
  "id": "5b7d6cbd7503c445552a1664",
  "payload": {
    "foo": "bar"
  },
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_event": "2018-08-30T09:51:59.737Z",
  "time_expire": "2018-08-30T09:51:59.737Z",
  "topic": {
    "action": "created",
    "arguments": {
      "foo": "bar"
    },
    "resource_id": "5b7d6cbd7503c445552a1664",
    "resource_type": "items",
    "resource_url": "https://brain.intellifi.nl/api/foobar"
  },
  "url": "https://brain.intellifi.nl/api/foobar"
}
```

<h3 id="get-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the event|[Event](#schemaevent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

<h1 id="brain-web-api-items">items</h1>

The `items` resource contains data about things that can be tracked using the Brain.
When an item is detected for the first time by a device connected to the Brain, it will be added to this resource.
It will then be updated with information about where the item currently is, or where it has been seen for the last time.


<a href="https://intellifi.zendesk.com/hc/en-us/articles/360007502554">External documentation</a>

## Get all items

<a id="opIdgetItems"></a>

> Code samples

```bash
curl https://example.com/items \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /items`

<h3 id="get-all-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string(date-time)|false|Limits on `time_created`, Marks the start of a range, optionally use `before` to set the end. Result output excludes the given timestamp.|
|after_id|query|string|false|Limits directly on `id`. Marks the start of a range, optionally use `before_id` to set the end. Result output excludes the given `id` value. Please note that `id` is in chronological order.|
|after_code|query|string|false|Limits directly on `code_hex`. Marks the start of a range, optionally use `before_code` to set the end. Result output excludes the given `code_hex` value.|
|before|query|string(dateTime)|false|Limits on `time_created`. Marks the end of a range, optionally use `after` to set the start. Result output excludes the given timestamp.|
|before_id|query|string|false|Limits directly on `id`. Marks the end of a range, optionally use `after_id` to set the start. Result output excludes the given `id` value. Please note that `id` is in chronological order.|
|before_code|query|string|false|Limits directly on `code_hex`. Marks the end of a range, optionally use `after_code` to set the start. Result output excludes the given `code_hex` value.|
|from|query|string(dateTime)|false|Limits on `time_created`. Marks the start of a range, optionally use `until` to set the end. Result output includes the given timestamp.|
|from_id|query|string|false|Limits on `id`. Marks the start of a range, optionally use `until_id` to set the end. Result output includes the given `id` value. Please note that `id` is in chronological order.|
|from_code|query|string|false|Limits on `code_hex`. Marks the start of a range, optionally use `until_code` to set the end. Result output includes the given `code_hex` value.|
|id_only|query|boolean|false|Removes `url` fields from output and shows `_id` instead of `_url` in references.|
|limit|query|integer|false|Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.|
|populate|query|string|false|Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.|
|results_only|query|boolean|false|Removes response envelope with information about query, only sends back a JSON array with the applicable resources.|
|select|query|string|false|Select which properties should be returned. You may add multiple fields by giving a comma separated value. Select can also be used together with populate: Specify the resource first, then a period(.) followed by the field.|
|sort|query|string|false|Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).|
|until|query|string(dateTime)|false|Limits on `time_created`. Marks the end of a range, optionally use `from` to set the start. Result output includes the given timestamp.|
|until_id|query|string|false|Limits on `id`. Marks the end of a range, optionally use `from_id` to set the start. Result output includes the given `id` value. Please note that `id` is in chronological order.|
|timeout_s|query|number|false|Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.|
|until_code|query|string|false|Limits on `code_hex`. Marks the end of a range, optionally use `from_code` to set the start. Result output includes the given `code_hex` value.|
|id|query|[IdReadOnly](#schemaidreadonly)|false|Unique identifier|
|time_created|query|[TimeCreated](#schematimecreated)|false|Filter on the time the resource was created.|
|time_updated|query|[TimeUpdated](#schematimeupdated)|false|Filter on the time the resource was last updated|
|code_hex|query|[CodeHex](#schemacodehex)|false|Filter based on the hexadecimal string representation of the item. Supports wildcards: `*`.|
|is_present|query|boolean|false|Only show items which are present of not.|
|label|query|[Label](#schemalabel)|false|Filter based on the label value. Supports wildcards: `*`|
|location|query|[IdReadOnly](#schemaidreadonly)|false|Filter based on the location|
|metadata|query|string|false|Filter based on metadata. Does a partial match on any value in the metadata object. It is also possible to do an exact/wildcard match on specific properties, e.g. `metadata.foo=bar`|
|move_count|query|[MoveCount](#schemamovecount)|false|Filter based on move count|
|protocol|query|[ItemProtocol](#schemaitemprotocol)|false|Filter based on the detected protocol of an item.|
|sets|query|[IdReadOnly](#schemaidreadonly)|false|Filter based on the set the resource is in.|
|technology|query|[Technology](#schematechnology)|false|Filter based on the detected technology of an item.|
|text|query|string|false|Filter based on a full text search. Searched properties depend on the resource type. Matches on any of the given words. Supports quote (exact words) and minus (exclude) operators.|
|time_last_present|query|string|false|Filter based on the time last present|
|time_moved|query|[TimeMoved](#schematimemoved)|false|Filter based on time last moved|
|type|query|[ItemType](#schemaitemtype)|false|Filter based on the type of an item.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|protocol|altbeacon|
|protocol|uniwear|
|protocol|nfc|
|protocol|generic|
|protocol|eddystone|
|protocol|epcgen2|
|protocol|ibeacon|
|protocol|nanoble|
|technology|bluetooth|
|technology|optical|
|technology|rfid|
|type|barcode|
|type|bluetitan|
|type|gbtag|
|type|relay|
|type|smarttag|
|type|tag|

> Example responses

> 200 Response

```json
{
  "count": 293401,
  "count_current": 100,
  "is_limited": true,
  "next_url": "https://brain.intellifi.nl/api/items?before_id=5b599c427503c44239cf0399",
  "query_duration_ms": 42,
  "url": "https://brain.intellifi.nl/api/foobar",
  "results": [
    {
      "config_request": {
        "foo": "bar"
      },
      "custom": {
        "foo": "bar"
      },
      "label": "Foo Bar",
      "location_request": "5b7d6cbd7503c445552a1664",
      "metadata": {
        "foo": "bar"
      },
      "code_hex": "deadbeef",
      "geo_coords": {
        "lat": 0,
        "lng": 0,
        "time_updated": "2018-08-30T09:51:59.737Z"
      },
      "id": "5b7d6cbd7503c445552a1664",
      "is_present": true,
      "move_count": 4523,
      "protocol": "epcgen2",
      "sets": [
        "5b7d6cbd7503c445552a1664"
      ],
      "technology": "rfid",
      "time_created": "2018-08-30T09:51:59.737Z",
      "time_last_present": "2018-08-30T09:51:59.737Z",
      "time_moved": "2018-08-30T09:51:59.737Z",
      "time_updated": "2018-08-30T09:51:59.737Z",
      "type": "tag",
      "url": "https://brain.intellifi.nl/api/foobar",
      "location": {
        "custom": {
          "foo": "bar"
        },
        "id": "5b7d6cbd7503c445552a1664",
        "label": "Foo Bar",
        "metadata": {
          "foo": "bar"
        },
        "time_created": "2018-08-30T09:51:59.737Z",
        "time_updated": "2018-08-30T09:51:59.737Z",
        "url": "https://brain.intellifi.nl/api/foobar"
      }
    }
  ]
}
```

<h3 id="get-all-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing a list of items|Inline|

<h3 id="get-all-items-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|The maximum number of items in the response (as set in the query or by default).|
|count_current|integer|false|none|The maximum number of items available to return.|
|is_limited|boolean|false|none|Becomes false when the number of results is smaller than limit.|
|next_url|string|false|none|URL to the next page of items. ( null if none)|
|query_duration_ms|integer|false|none|Amount of time, in milliseconds, the request needed to complete.|
|url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|
|results|[[Item](#schemaitem)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Create item

<a id="opIdaddItem"></a>

> Code samples

```bash
curl https://example.com/items \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}" \
  -d '{
    "config_request": {
      "foo": "bar"
    },
    "custom": {
      "foo": "bar"
    },
    "label": "Foo Bar",
    "location_request": "5b7d6cbd7503c445552a1664",
    "metadata": {
      "foo": "bar"
    },
    "code_hex": "deadbeef",
    "protocol": "epcgen2",
    "technology": "rfid",
    "type": "tag"
  }'
```

`POST /items`

> Body parameter

```json
{
  "config_request": {
    "foo": "bar"
  },
  "custom": {
    "foo": "bar"
  },
  "label": "Foo Bar",
  "location_request": "5b7d6cbd7503c445552a1664",
  "metadata": {
    "foo": "bar"
  },
  "code_hex": "deadbeef",
  "protocol": "epcgen2",
  "technology": "rfid",
  "type": "tag"
}
```

<h3 id="create-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Item](#schemaitem)|true|A JSON object containing item information|
|» config_request|body|[ConfigRequest](#schemaconfigrequest)|false|Object containing the new configuration. This will be applied automatically when the values are valid.|
|» custom|body|[Custom](#schemacustom)|false|The `custom` value is only for your custom references, you may use it to save additional attributes. The custom value is not used in any other place. This field may contain any datatype that you like: null (default), string, integer, boolean, object etc...|
|» label|body|[Label](#schemalabel)|false|A name or a label for this resource. This is used in the user interface, may be empty.|
|» location_request|body|[LocationRequest](#schemalocationrequest)|false|Instruction for the location engine to forcibly localize the item at the specified location id as soon as possible. Cleared automatically.|
|» metadata|body|[Metadata](#schemametadata)|false|Object of searchable metadata for this resource. Can be freely used to store metadata properties.|
|» code_hex|body|[CodeHex](#schemacodehex)|false|String representation of the unique code that this item transmits. By default this is a hexadecimal representation. This number could be so long (> 40 bytes!) that a decimal representation would be useless to generate.|
|» protocol|body|[ItemProtocol](#schemaitemprotocol)|false|Type of protocol that was used to decode this item.|
|» technology|body|[Technology](#schematechnology)|false|Type of technology that was used to detect this item.|
|» type|body|[ItemType](#schemaitemtype)|false|Type of item.|
|» *oneOf*|body|object|false|none|
|» *oneOf*|body|object|false|none|
|» *oneOf*|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» protocol|altbeacon|
|» protocol|uniwear|
|» protocol|nfc|
|» protocol|generic|
|» protocol|eddystone|
|» protocol|epcgen2|
|» protocol|ibeacon|
|» protocol|nanoble|
|» technology|bluetooth|
|» technology|optical|
|» technology|rfid|
|» type|barcode|
|» type|bluetitan|
|» type|gbtag|
|» type|relay|
|» type|smarttag|
|» type|tag|

> Example responses

> 200 Response

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

<h3 id="create-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the newly added resource|[ResponseDefaultResource](#schemaresponsedefaultresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Get item

<a id="opIdgetItemById"></a>

> Code samples

```bash
curl https://example.com/items/5b8d0b717503c445552a1865 \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /items/{id}`

<h3 id="get-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|

> Example responses

> 200 Response

```json
{
  "config_request": {
    "foo": "bar"
  },
  "custom": {
    "foo": "bar"
  },
  "label": "Foo Bar",
  "location_request": "5b7d6cbd7503c445552a1664",
  "metadata": {
    "foo": "bar"
  },
  "code_hex": "deadbeef",
  "geo_coords": {
    "lat": 0,
    "lng": 0,
    "time_updated": "2018-08-30T09:51:59.737Z"
  },
  "id": "5b7d6cbd7503c445552a1664",
  "is_present": true,
  "move_count": 4523,
  "protocol": "epcgen2",
  "sets": [
    "5b7d6cbd7503c445552a1664"
  ],
  "technology": "rfid",
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_last_present": "2018-08-30T09:51:59.737Z",
  "time_moved": "2018-08-30T09:51:59.737Z",
  "time_updated": "2018-08-30T09:51:59.737Z",
  "type": "tag",
  "url": "https://brain.intellifi.nl/api/foobar",
  "location": {
    "custom": {
      "foo": "bar"
    },
    "id": "5b7d6cbd7503c445552a1664",
    "label": "Foo Bar",
    "metadata": {
      "foo": "bar"
    },
    "time_created": "2018-08-30T09:51:59.737Z",
    "time_updated": "2018-08-30T09:51:59.737Z",
    "url": "https://brain.intellifi.nl/api/foobar"
  }
}
```

<h3 id="get-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the items|[Item](#schemaitem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Update existing item

<a id="opIdupdateItem"></a>

> Code samples

```bash
curl https://example.com/items/5b8d0b717503c445552a1865 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}" \
  -d '{
    "config_request": {
      "foo": "bar"
    },
    "custom": {
      "foo": "bar"
    },
    "label": "Foo Bar",
    "location_request": "5b7d6cbd7503c445552a1664",
    "metadata": {
      "foo": "bar"
    }
  }'
```

`PUT /items/{id}`

> Body parameter

```json
{
  "config_request": {
    "foo": "bar"
  },
  "custom": {
    "foo": "bar"
  },
  "label": "Foo Bar",
  "location_request": "5b7d6cbd7503c445552a1664",
  "metadata": {
    "foo": "bar"
  }
}
```

<h3 id="update-existing-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|
|body|body|[ItemUpdate](#schemaitemupdate)|true|A JSON object containing item information|
|» config_request|body|[ConfigRequest](#schemaconfigrequest)|false|Object containing the new configuration. This will be applied automatically when the values are valid.|
|» custom|body|[Custom](#schemacustom)|false|The `custom` value is only for your custom references, you may use it to save additional attributes. The custom value is not used in any other place. This field may contain any datatype that you like: null (default), string, integer, boolean, object etc...|
|» label|body|[Label](#schemalabel)|false|A name or a label for this resource. This is used in the user interface, may be empty.|
|» location_request|body|[LocationRequest](#schemalocationrequest)|false|Instruction for the location engine to forcibly localize the item at the specified location id as soon as possible. Cleared automatically.|
|» metadata|body|[Metadata](#schemametadata)|false|Object of searchable metadata for this resource. Can be freely used to store metadata properties.|

> Example responses

> 200 Response

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

<h3 id="update-existing-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the modified resource|[ResponseDefaultResource](#schemaresponsedefaultresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Delete item

<a id="opIddeleteItem"></a>

> Code samples

```bash
curl https://example.com/items/5b8d0b717503c445552a1865 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`DELETE /items/{id}`

<h3 id="delete-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|

> Example responses

> 200 Response

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

<h3 id="delete-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the deleted resource|[ResponseDefaultResource](#schemaresponsedefaultresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

<h1 id="brain-web-api-keys">keys</h1>

The `keys` resource contains the access keys used to authenticate requests to this API.

Note that this resource is only accessible for administrator users logged into the Brain Management Console.
It is not possible to access this resource using API key authentication.
This resource is therefore irrelevant to most applications.


## Get all keys

<a id="opIdgetKeys"></a>

> Code samples

```bash
curl https://example.com/keys \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /keys`

Can only be used by an **administrative** user.

<h3 id="get-all-keys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string(date-time)|false|Limits on `time_created`, Marks the start of a range, optionally use `before` to set the end. Result output excludes the given timestamp.|
|after_id|query|string|false|Limits directly on `id`. Marks the start of a range, optionally use `before_id` to set the end. Result output excludes the given `id` value. Please note that `id` is in chronological order.|
|before|query|string(dateTime)|false|Limits on `time_created`. Marks the end of a range, optionally use `after` to set the start. Result output excludes the given timestamp.|
|before_id|query|string|false|Limits directly on `id`. Marks the end of a range, optionally use `after_id` to set the start. Result output excludes the given `id` value. Please note that `id` is in chronological order.|
|from|query|string(dateTime)|false|Limits on `time_created`. Marks the start of a range, optionally use `until` to set the end. Result output includes the given timestamp.|
|from_id|query|string|false|Limits on `id`. Marks the start of a range, optionally use `until_id` to set the end. Result output includes the given `id` value. Please note that `id` is in chronological order.|
|id_only|query|boolean|false|Removes `url` fields from output and shows `_id` instead of `_url` in references.|
|limit|query|integer|false|Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.|
|populate|query|string|false|Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.|
|results_only|query|boolean|false|Removes response envelope with information about query, only sends back a JSON array with the applicable resources.|
|select|query|string|false|Select which properties should be returned. You may add multiple fields by giving a comma separated value. Select can also be used together with populate: Specify the resource first, then a period(.) followed by the field.|
|sort|query|string|false|Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).|
|until|query|string(dateTime)|false|Limits on `time_created`. Marks the end of a range, optionally use `from` to set the start. Result output includes the given timestamp.|
|until_id|query|string|false|Limits on `id`. Marks the end of a range, optionally use `from_id` to set the start. Result output includes the given `id` value. Please note that `id` is in chronological order.|
|timeout_s|query|number|false|Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.|
|id|query|[IdReadOnly](#schemaidreadonly)|false|Unique identifier|
|time_created|query|[TimeCreated](#schematimecreated)|false|Filter on the time the resource was created.|
|time_updated|query|[TimeUpdated](#schematimeupdated)|false|Filter on the time the resource was last updated|
|secret|query|string|false|Filter on the secret token.|
|label|query|string|false|Filter on the label.|
|is_read_only|query|boolean|false|Filter on read only status.|

> Example responses

> 200 Response

```json
{
  "count": 293401,
  "count_current": 100,
  "is_limited": true,
  "next_url": "https://brain.intellifi.nl/api/items?before_id=5b599c427503c44239cf0399",
  "query_duration_ms": 42,
  "url": "https://brain.intellifi.nl/api/foobar",
  "results": [
    {
      "id": "5b7d6cbd7503c445552a1664",
      "is_read_only": true,
      "label": "string",
      "secret": "59cb1e86-a08d-44c9-9b37-c27f4ccd97f4",
      "time_created": "2018-08-30T09:51:59.737Z",
      "time_updated": "2018-08-30T09:51:59.737Z",
      "url": "https://brain.intellifi.nl/api/foobar"
    }
  ]
}
```

<h3 id="get-all-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing a list of keys|Inline|

<h3 id="get-all-keys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|The maximum number of items in the response (as set in the query or by default).|
|count_current|integer|false|none|The maximum number of items available to return.|
|is_limited|boolean|false|none|Becomes false when the number of results is smaller than limit.|
|next_url|string|false|none|URL to the next page of items. ( null if none)|
|query_duration_ms|integer|false|none|Amount of time, in milliseconds, the request needed to complete.|
|url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|
|results|[[Key](#schemakey)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid
</aside>

## Create key

<a id="opIdaddKey"></a>

> Code samples

```bash
curl https://example.com/keys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}" \
  -d '{
    "is_read_only": true,
    "label": "string"
  }'
```

`POST /keys`

Can only be used by an **administrative** user.

> Body parameter

```json
{
  "is_read_only": true,
  "label": "string"
}
```

<h3 id="create-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Key](#schemakey)|true|A JSON object containing key information|
|» is_read_only|body|boolean|false|Whether or not this key can only read and not write.|
|» label|body|string|false|Custom label for this API key.|

> Example responses

> 201 Response

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

<h3 id="create-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A JSON object containing the newly added resource|[ResponseDefaultResource](#schemaresponsedefaultresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid
</aside>

## Get key

<a id="opIdgetKeyById"></a>

> Code samples

```bash
curl https://example.com/keys/5b8d0b717503c445552a1865 \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /keys/{id}`

Can only be used by an **administrative** user.

<h3 id="get-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|

> Example responses

> 200 Response

```json
{
  "id": "5b7d6cbd7503c445552a1664",
  "is_read_only": true,
  "label": "string",
  "secret": "59cb1e86-a08d-44c9-9b37-c27f4ccd97f4",
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_updated": "2018-08-30T09:51:59.737Z",
  "url": "https://brain.intellifi.nl/api/foobar"
}
```

<h3 id="get-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the key|[Key](#schemakey)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid
</aside>

## Update existing key

<a id="opIdupdateKey"></a>

> Code samples

```bash
curl https://example.com/keys/5b8d0b717503c445552a1865 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}" \
  -d '{
    "is_read_only": true,
    "label": "string"
  }'
```

`PUT /keys/{id}`

Can only be used by an **administrative** user.

> Body parameter

```json
{
  "is_read_only": true,
  "label": "string"
}
```

<h3 id="update-existing-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|
|body|body|[Key](#schemakey)|true|A JSON object containing key information|
|» is_read_only|body|boolean|false|Whether or not this key can only read and not write.|
|» label|body|string|false|Custom label for this API key.|

> Example responses

> 200 Response

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

<h3 id="update-existing-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the modified resource|[ResponseDefaultResource](#schemaresponsedefaultresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid
</aside>

## Delete key

<a id="opIddeleteKey"></a>

> Code samples

```bash
curl https://example.com/keys/5b8d0b717503c445552a1865 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`DELETE /keys/{id}`

Can only be used by an **administrative** user.

<h3 id="delete-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|

> Example responses

> 200 Response

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

<h3 id="delete-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the deleted resource|[ResponseDefaultResource](#schemaresponsedefaultresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid
</aside>

<h1 id="brain-web-api-kvpairs">kvpairs</h1>

The `kvpairs` resource provides a service for storing generic JSON key/value pairs on the Brain.
Intended for applications that interact with the Brain but do not or cannot have their own (centralized) persistent storage.

See also the `blobs` resource.


## Get all key-value pairs

<a id="opIdgetKvPairs"></a>

> Code samples

```bash
curl https://example.com/kvpairs \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /kvpairs`

<h3 id="get-all-key-value-pairs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string(date-time)|false|Limits on `time_created`, Marks the start of a range, optionally use `before` to set the end. Result output excludes the given timestamp.|
|after_id|query|string|false|Limits directly on `id`. Marks the start of a range, optionally use `before_id` to set the end. Result output excludes the given `id` value. Please note that `id` is in chronological order.|
|before|query|string(dateTime)|false|Limits on `time_created`. Marks the end of a range, optionally use `after` to set the start. Result output excludes the given timestamp.|
|before_id|query|string|false|Limits directly on `id`. Marks the end of a range, optionally use `after_id` to set the start. Result output excludes the given `id` value. Please note that `id` is in chronological order.|
|from|query|string(dateTime)|false|Limits on `time_created`. Marks the start of a range, optionally use `until` to set the end. Result output includes the given timestamp.|
|from_id|query|string|false|Limits on `id`. Marks the start of a range, optionally use `until_id` to set the end. Result output includes the given `id` value. Please note that `id` is in chronological order.|
|id_only|query|boolean|false|Removes `url` fields from output and shows `_id` instead of `_url` in references.|
|limit|query|integer|false|Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.|
|populate|query|string|false|Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.|
|results_only|query|boolean|false|Removes response envelope with information about query, only sends back a JSON array with the applicable resources.|
|select|query|string|false|Select which properties should be returned. You may add multiple fields by giving a comma separated value. Select can also be used together with populate: Specify the resource first, then a period(.) followed by the field.|
|sort|query|string|false|Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).|
|until|query|string(dateTime)|false|Limits on `time_created`. Marks the end of a range, optionally use `from` to set the start. Result output includes the given timestamp.|
|until_id|query|string|false|Limits on `id`. Marks the end of a range, optionally use `from_id` to set the start. Result output includes the given `id` value. Please note that `id` is in chronological order.|
|timeout_s|query|number|false|Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.|
|id|query|[IdReadOnly](#schemaidreadonly)|false|Unique identifier|
|time_created|query|[TimeCreated](#schematimecreated)|false|Filter on the time the resource was created.|
|time_updated|query|[TimeUpdated](#schematimeupdated)|false|Filter on the time the resource was last updated|
|kv_key|query|string|false|Filter on the key-value pair key value.|

> Example responses

> 200 Response

```json
{
  "count": 293401,
  "count_current": 100,
  "is_limited": true,
  "next_url": "https://brain.intellifi.nl/api/items?before_id=5b599c427503c44239cf0399",
  "query_duration_ms": 42,
  "url": "https://brain.intellifi.nl/api/foobar",
  "results": [
    {
      "kv_value": "all the bars",
      "id": "5b7d6cbd7503c445552a1664",
      "kv_key": "foo",
      "time_created": "2018-08-30T09:51:59.737Z",
      "time_updated": "2018-08-30T09:51:59.737Z",
      "url": "https://brain.intellifi.nl/api/foobar"
    }
  ]
}
```

<h3 id="get-all-key-value-pairs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing a list of key-value pairs|Inline|

<h3 id="get-all-key-value-pairs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|The maximum number of items in the response (as set in the query or by default).|
|count_current|integer|false|none|The maximum number of items available to return.|
|is_limited|boolean|false|none|Becomes false when the number of results is smaller than limit.|
|next_url|string|false|none|URL to the next page of items. ( null if none)|
|query_duration_ms|integer|false|none|Amount of time, in milliseconds, the request needed to complete.|
|url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|
|results|[[KeyValuePair](#schemakeyvaluepair)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Create key-value pair

<a id="opIdaddKvPairs"></a>

> Code samples

```bash
curl https://example.com/kvpairs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}" \
  -d '{
    "kv_value": "all the bars",
    "kv_key": "foo"
  }'
```

`POST /kvpairs`

> Body parameter

```json
{
  "kv_value": "all the bars",
  "kv_key": "foo"
}
```

<h3 id="create-key-value-pair-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[KeyValuePair](#schemakeyvaluepair)|true|A JSON object containing Key-value information|
|» kv_value|body|object \| null|false|The value of the key value pair.|
|» kv_key|body|string|false|Unique identifier for the value.|
|» kv_value|body|object \| null|false|The value of the key value pair.|

> Example responses

> 201 Response

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

<h3 id="create-key-value-pair-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A JSON object containing the newly added resource|[ResponseDefaultResource](#schemaresponsedefaultresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Get key-value pair

<a id="opIdgetKvPairsById"></a>

> Code samples

```bash
curl https://example.com/kvpairs/5b8d0b717503c445552a1865 \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /kvpairs/{id}`

<h3 id="get-key-value-pair-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|

> Example responses

> 200 Response

```json
{
  "kv_value": "all the bars",
  "id": "5b7d6cbd7503c445552a1664",
  "kv_key": "foo",
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_updated": "2018-08-30T09:51:59.737Z",
  "url": "https://brain.intellifi.nl/api/foobar"
}
```

<h3 id="get-key-value-pair-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the subscription|[KeyValuePair](#schemakeyvaluepair)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Update existing Key-value pair

<a id="opIdupdateKvPair"></a>

> Code samples

```bash
curl https://example.com/kvpairs/5b8d0b717503c445552a1865 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}" \
  -d '{
    "kv_value": "all the bars"
  }'
```

`PUT /kvpairs/{id}`

> Body parameter

```json
{
  "kv_value": "all the bars"
}
```

<h3 id="update-existing-key-value-pair-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|
|body|body|[KeyValuePairUpdate](#schemakeyvaluepairupdate)|true|A JSON object containing Key-value information|
|» kv_value|body|object \| null|false|The value of the key value pair.|

> Example responses

> 200 Response

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

<h3 id="update-existing-key-value-pair-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the modified resource|[ResponseDefaultResource](#schemaresponsedefaultresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Delete key-value pair

<a id="opIddeleteKvPair"></a>

> Code samples

```bash
curl https://example.com/kvpairs/5b8d0b717503c445552a1865 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`DELETE /kvpairs/{id}`

<h3 id="delete-key-value-pair-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|

> Example responses

> 200 Response

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

<h3 id="delete-key-value-pair-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the deleted resource|[ResponseDefaultResource](#schemaresponsedefaultresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

<h1 id="brain-web-api-locations">locations</h1>

The `locations` resource is an abstraction for the area around a physical location that items can be localized at.


<a href="https://intellifi.zendesk.com/hc/en-us/articles/360007502554">External documentation</a>

## Get all locations

<a id="opIdgetLocations"></a>

> Code samples

```bash
curl https://example.com/locations \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /locations`

<h3 id="get-all-locations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string(date-time)|false|Limits on `time_created`, Marks the start of a range, optionally use `before` to set the end. Result output excludes the given timestamp.|
|after_id|query|string|false|Limits directly on `id`. Marks the start of a range, optionally use `before_id` to set the end. Result output excludes the given `id` value. Please note that `id` is in chronological order.|
|before|query|string(dateTime)|false|Limits on `time_created`. Marks the end of a range, optionally use `after` to set the start. Result output excludes the given timestamp.|
|before_id|query|string|false|Limits directly on `id`. Marks the end of a range, optionally use `after_id` to set the start. Result output excludes the given `id` value. Please note that `id` is in chronological order.|
|from|query|string(dateTime)|false|Limits on `time_created`. Marks the start of a range, optionally use `until` to set the end. Result output includes the given timestamp.|
|from_id|query|string|false|Limits on `id`. Marks the start of a range, optionally use `until_id` to set the end. Result output includes the given `id` value. Please note that `id` is in chronological order.|
|id_only|query|boolean|false|Removes `url` fields from output and shows `_id` instead of `_url` in references.|
|limit|query|integer|false|Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.|
|populate|query|string|false|Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.|
|results_only|query|boolean|false|Removes response envelope with information about query, only sends back a JSON array with the applicable resources.|
|select|query|string|false|Select which properties should be returned. You may add multiple fields by giving a comma separated value. Select can also be used together with populate: Specify the resource first, then a period(.) followed by the field.|
|sort|query|string|false|Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).|
|until|query|string(dateTime)|false|Limits on `time_created`. Marks the end of a range, optionally use `from` to set the start. Result output includes the given timestamp.|
|until_id|query|string|false|Limits on `id`. Marks the end of a range, optionally use `from_id` to set the start. Result output includes the given `id` value. Please note that `id` is in chronological order.|
|timeout_s|query|number|false|Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.|
|id|query|[IdReadOnly](#schemaidreadonly)|false|Unique identifier|
|time_created|query|[TimeCreated](#schematimecreated)|false|Filter on the time the resource was created.|
|time_updated|query|[TimeUpdated](#schematimeupdated)|false|Filter on the time the resource was last updated|
|label|query|[Label](#schemalabel)|false|Filter based on the label value. Supports wildcards: `*`|
|metadata|query|string|false|Filter based on metadata. Does a partial match on any value in the metadata object. It is also possible to do an exact/wildcard match on specific properties, e.g. `metadata.foo=bar`|
|text|query|string|false|Filter based on a full text search. Searched properties depend on the resource type. Matches on any of the given words. Supports quote (exact words) and minus (exclude) operators.|

> Example responses

> 200 Response

```json
{
  "count": 293401,
  "count_current": 100,
  "is_limited": true,
  "next_url": "https://brain.intellifi.nl/api/items?before_id=5b599c427503c44239cf0399",
  "query_duration_ms": 42,
  "url": "https://brain.intellifi.nl/api/foobar",
  "results": [
    {
      "custom": {
        "foo": "bar"
      },
      "id": "5b7d6cbd7503c445552a1664",
      "label": "Foo Bar",
      "metadata": {
        "foo": "bar"
      },
      "time_created": "2018-08-30T09:51:59.737Z",
      "time_updated": "2018-08-30T09:51:59.737Z",
      "url": "https://brain.intellifi.nl/api/foobar"
    }
  ]
}
```

<h3 id="get-all-locations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing a list of locations|Inline|

<h3 id="get-all-locations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|The maximum number of items in the response (as set in the query or by default).|
|count_current|integer|false|none|The maximum number of items available to return.|
|is_limited|boolean|false|none|Becomes false when the number of results is smaller than limit.|
|next_url|string|false|none|URL to the next page of items. ( null if none)|
|query_duration_ms|integer|false|none|Amount of time, in milliseconds, the request needed to complete.|
|url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|
|results|[[Location](#schemalocation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Create location

<a id="opIdaddLocation"></a>

> Code samples

```bash
curl https://example.com/locations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}" \
  -d '{
    "custom": {
      "foo": "bar"
    },
    "label": "Foo Bar",
    "metadata": {
      "foo": "bar"
    }
  }'
```

`POST /locations`

> Body parameter

```json
{
  "custom": {
    "foo": "bar"
  },
  "label": "Foo Bar",
  "metadata": {
    "foo": "bar"
  }
}
```

<h3 id="create-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Location](#schemalocation)|true|A JSON object containing location information|
|» custom|body|[Custom](#schemacustom)|false|The `custom` value is only for your custom references, you may use it to save additional attributes. The custom value is not used in any other place. This field may contain any datatype that you like: null (default), string, integer, boolean, object etc...|
|» label|body|[Label](#schemalabel)|false|A name or a label for this resource. This is used in the user interface, may be empty.|
|» metadata|body|[Metadata](#schemametadata)|false|Object of searchable metadata for this resource. Can be freely used to store metadata properties.|

> Example responses

> 201 Response

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

<h3 id="create-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A JSON object containing the newly added resource|[ResponseDefaultResource](#schemaresponsedefaultresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Get location

<a id="opIdgetLocationById"></a>

> Code samples

```bash
curl https://example.com/locations/5b8d0b717503c445552a1865 \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /locations/{id}`

<h3 id="get-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|

> Example responses

> 200 Response

```json
{
  "custom": {
    "foo": "bar"
  },
  "id": "5b7d6cbd7503c445552a1664",
  "label": "Foo Bar",
  "metadata": {
    "foo": "bar"
  },
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_updated": "2018-08-30T09:51:59.737Z",
  "url": "https://brain.intellifi.nl/api/foobar"
}
```

<h3 id="get-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the location|[Location](#schemalocation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Update existing location

<a id="opIdupdateLocation"></a>

> Code samples

```bash
curl https://example.com/locations/5b8d0b717503c445552a1865 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}" \
  -d '{
    "custom": {
      "foo": "bar"
    },
    "label": "Foo Bar",
    "metadata": {
      "foo": "bar"
    }
  }'
```

`PUT /locations/{id}`

> Body parameter

```json
{
  "custom": {
    "foo": "bar"
  },
  "label": "Foo Bar",
  "metadata": {
    "foo": "bar"
  }
}
```

<h3 id="update-existing-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|
|body|body|[Location](#schemalocation)|true|A JSON object containing location information|
|» custom|body|[Custom](#schemacustom)|false|The `custom` value is only for your custom references, you may use it to save additional attributes. The custom value is not used in any other place. This field may contain any datatype that you like: null (default), string, integer, boolean, object etc...|
|» label|body|[Label](#schemalabel)|false|A name or a label for this resource. This is used in the user interface, may be empty.|
|» metadata|body|[Metadata](#schemametadata)|false|Object of searchable metadata for this resource. Can be freely used to store metadata properties.|

> Example responses

> 200 Response

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

<h3 id="update-existing-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the modified resource|[ResponseDefaultResource](#schemaresponsedefaultresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Delete location

<a id="opIddeleteLocation"></a>

> Code samples

```bash
curl https://example.com/locations/5b8d0b717503c445552a1865 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`DELETE /locations/{id}`

<h3 id="delete-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|

> Example responses

> 200 Response

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

<h3 id="delete-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the deleted resource|[ResponseDefaultResource](#schemaresponsedefaultresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

<h1 id="brain-web-api-locationrules">locationrules</h1>

Location rules are directives for the localization engine that may be useful for certain solutions.


## Get all location rules

<a id="opIdgetLocationRules"></a>

> Code samples

```bash
curl https://example.com/locationrules \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /locationrules`

<h3 id="get-all-location-rules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string(date-time)|false|Limits on `time_created`, Marks the start of a range, optionally use `before` to set the end. Result output excludes the given timestamp.|
|after_id|query|string|false|Limits directly on `id`. Marks the start of a range, optionally use `before_id` to set the end. Result output excludes the given `id` value. Please note that `id` is in chronological order.|
|before|query|string(dateTime)|false|Limits on `time_created`. Marks the end of a range, optionally use `after` to set the start. Result output excludes the given timestamp.|
|before_id|query|string|false|Limits directly on `id`. Marks the end of a range, optionally use `after_id` to set the start. Result output excludes the given `id` value. Please note that `id` is in chronological order.|
|from|query|string(dateTime)|false|Limits on `time_created`. Marks the start of a range, optionally use `until` to set the end. Result output includes the given timestamp.|
|from_id|query|string|false|Limits on `id`. Marks the start of a range, optionally use `until_id` to set the end. Result output includes the given `id` value. Please note that `id` is in chronological order.|
|id_only|query|boolean|false|Removes `url` fields from output and shows `_id` instead of `_url` in references.|
|limit|query|integer|false|Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.|
|populate|query|string|false|Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.|
|results_only|query|boolean|false|Removes response envelope with information about query, only sends back a JSON array with the applicable resources.|
|select|query|string|false|Select which properties should be returned. You may add multiple fields by giving a comma separated value. Select can also be used together with populate: Specify the resource first, then a period(.) followed by the field.|
|sort|query|string|false|Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).|
|until|query|string(dateTime)|false|Limits on `time_created`. Marks the end of a range, optionally use `from` to set the start. Result output includes the given timestamp.|
|until_id|query|string|false|Limits on `id`. Marks the end of a range, optionally use `from_id` to set the start. Result output includes the given `id` value. Please note that `id` is in chronological order.|
|timeout_s|query|number|false|Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.|
|id|query|[IdReadOnly](#schemaidreadonly)|false|Unique identifier|
|time_created|query|[TimeCreated](#schematimecreated)|false|Filter on the time the resource was created.|
|time_updated|query|[TimeUpdated](#schematimeupdated)|false|Filter on the time the resource was last updated|
|label|query|[Label](#schemalabel)|false|Filter based on the label value. Supports wildcards: `*`|
|type|query|[LocationRuleType](#schemalocationruletype)|false|Filter based on the type of location rule.|
|enabled|query|[RuleEnabled](#schemaruleenabled)|false|Filter based on the `enabled` property.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|allow|
|type|disallow|
|type|disappeared|
|type|debounce|

> Example responses

> 200 Response

```json
{
  "count": 293401,
  "count_current": 100,
  "is_limited": true,
  "next_url": "https://brain.intellifi.nl/api/items?before_id=5b599c427503c44239cf0399",
  "query_duration_ms": 42,
  "url": "https://brain.intellifi.nl/api/foobar",
  "results": [
    {
      "conditions": {
        "from_location": {
          "custom": {
            "foo": "bar"
          },
          "id": "5b7d6cbd7503c445552a1664",
          "label": "Foo Bar",
          "metadata": {
            "foo": "bar"
          },
          "time_created": "2018-08-30T09:51:59.737Z",
          "time_updated": "2018-08-30T09:51:59.737Z",
          "url": "https://brain.intellifi.nl/api/foobar"
        }
      },
      "enabled": true,
      "id": "5b7d6cbd7503c445552a1664",
      "label": "Foo Bar",
      "parameters": {},
      "time_created": "2018-08-30T09:51:59.737Z",
      "time_updated": "2018-08-30T09:51:59.737Z",
      "type": "allow",
      "url": "https://brain.intellifi.nl/api/foobar"
    }
  ]
}
```

<h3 id="get-all-location-rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing a list of location rules|Inline|

<h3 id="get-all-location-rules-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|The maximum number of items in the response (as set in the query or by default).|
|count_current|integer|false|none|The maximum number of items available to return.|
|is_limited|boolean|false|none|Becomes false when the number of results is smaller than limit.|
|next_url|string|false|none|URL to the next page of items. ( null if none)|
|query_duration_ms|integer|false|none|Amount of time, in milliseconds, the request needed to complete.|
|url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|
|results|[[LocationRule](#schemalocationrule)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Create location rule

<a id="opIdaddLocationRule"></a>

> Code samples

```bash
curl https://example.com/locationrules \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}" \
  -d '{
    "conditions": {
      "from_location": "5b7d6cbd7503c445552a1664",
      "to_location": "5b7d6cbd7503c445552a1664"
    },
    "enabled": true,
    "label": "Foo Bar",
    "parameters": {},
    "type": "allow"
  }'
```

`POST /locationrules`

> Body parameter

```json
{
  "conditions": {
    "from_location": "5b7d6cbd7503c445552a1664",
    "to_location": "5b7d6cbd7503c445552a1664"
  },
  "enabled": true,
  "label": "Foo Bar",
  "parameters": {},
  "type": "allow"
}
```

<h3 id="create-location-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LocationRuleUpdate](#schemalocationruleupdate)|true|A JSON object containing the location rule|
|» conditions|body|object|false|Scope of this rule, e.g. moves at or away from a specific location or towards a specific location. The `from_location` is mandatory. The `to_location` is either mandatory, optional or not allowed depending on rule type.|
|» » from_location|body|[Id](#schemaid)|false|Unique identifier for resource.|
|» » to_location|body|[Id](#schemaid)|false|Unique identifier for resource.|
|» enabled|body|[RuleEnabled](#schemaruleenabled)|false|Whether this rule should be in effect (`true`) or on hold (`false`).|
|» label|body|[Label](#schemalabel)|false|A name or a label for this resource. This is used in the user interface, may be empty.|
|» parameters|body|[LocationRuleParameters](#schemalocationruleparameters)|false|Parameters for this rule; depends on the rule type. Refer to the rule type specification for details.|
|» type|body|[LocationRuleType](#schemalocationruletype)|false|The type of location rule to be applied.<br>Allow: items at `conditions.from_location` can only move to `conditions.to_location` and locations allowed in other `allow` rules (destination whitelist).<br>Disallow: items at `conditions.from_location` cannot be moved to `conditions.to_location` and locations disallowed in other `disallow` rules (destination blacklist).<br>Disappeared: items disappearing at `conditions.from_location` will be moved to `parameters.location` after `parameters.time_s` seconds.<br>Debounce: items moves from `conditions.from_location` (and optionally to `conditions.to_location`) will be debounced with a period of `parameters.time_s` seconds, for a maximum of `parameters.max_periods` periods.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|allow|
|» type|disallow|
|» type|disappeared|
|» type|debounce|

> Example responses

> 200 Response

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

<h3 id="create-location-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the newly added resource|[ResponseDefaultResource](#schemaresponsedefaultresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Get location rule

<a id="opIdgetLocationRuleById"></a>

> Code samples

```bash
curl https://example.com/locationrules/5b8d0b717503c445552a1865 \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /locationrules/{id}`

<h3 id="get-location-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|

> Example responses

> 200 Response

```json
{
  "conditions": {
    "from_location": {
      "custom": {
        "foo": "bar"
      },
      "id": "5b7d6cbd7503c445552a1664",
      "label": "Foo Bar",
      "metadata": {
        "foo": "bar"
      },
      "time_created": "2018-08-30T09:51:59.737Z",
      "time_updated": "2018-08-30T09:51:59.737Z",
      "url": "https://brain.intellifi.nl/api/foobar"
    }
  },
  "enabled": true,
  "id": "5b7d6cbd7503c445552a1664",
  "label": "Foo Bar",
  "parameters": {},
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_updated": "2018-08-30T09:51:59.737Z",
  "type": "allow",
  "url": "https://brain.intellifi.nl/api/foobar"
}
```

<h3 id="get-location-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the location rule|[LocationRule](#schemalocationrule)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Update existing location rule

<a id="opIdupdateLocationRule"></a>

> Code samples

```bash
curl https://example.com/locationrules/5b8d0b717503c445552a1865 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}" \
  -d '{
    "conditions": {
      "from_location": "5b7d6cbd7503c445552a1664",
      "to_location": "5b7d6cbd7503c445552a1664"
    },
    "enabled": true,
    "label": "Foo Bar",
    "parameters": {},
    "type": "allow"
  }'
```

`PUT /locationrules/{id}`

> Body parameter

```json
{
  "conditions": {
    "from_location": "5b7d6cbd7503c445552a1664",
    "to_location": "5b7d6cbd7503c445552a1664"
  },
  "enabled": true,
  "label": "Foo Bar",
  "parameters": {},
  "type": "allow"
}
```

<h3 id="update-existing-location-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|
|body|body|[LocationRuleUpdate](#schemalocationruleupdate)|true|A JSON object containing new properties|
|» conditions|body|object|false|Scope of this rule, e.g. moves at or away from a specific location or towards a specific location. The `from_location` is mandatory. The `to_location` is either mandatory, optional or not allowed depending on rule type.|
|» » from_location|body|[Id](#schemaid)|false|Unique identifier for resource.|
|» » to_location|body|[Id](#schemaid)|false|Unique identifier for resource.|
|» enabled|body|[RuleEnabled](#schemaruleenabled)|false|Whether this rule should be in effect (`true`) or on hold (`false`).|
|» label|body|[Label](#schemalabel)|false|A name or a label for this resource. This is used in the user interface, may be empty.|
|» parameters|body|[LocationRuleParameters](#schemalocationruleparameters)|false|Parameters for this rule; depends on the rule type. Refer to the rule type specification for details.|
|» type|body|[LocationRuleType](#schemalocationruletype)|false|The type of location rule to be applied.<br>Allow: items at `conditions.from_location` can only move to `conditions.to_location` and locations allowed in other `allow` rules (destination whitelist).<br>Disallow: items at `conditions.from_location` cannot be moved to `conditions.to_location` and locations disallowed in other `disallow` rules (destination blacklist).<br>Disappeared: items disappearing at `conditions.from_location` will be moved to `parameters.location` after `parameters.time_s` seconds.<br>Debounce: items moves from `conditions.from_location` (and optionally to `conditions.to_location`) will be debounced with a period of `parameters.time_s` seconds, for a maximum of `parameters.max_periods` periods.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|allow|
|» type|disallow|
|» type|disappeared|
|» type|debounce|

> Example responses

> 200 Response

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

<h3 id="update-existing-location-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the modified resource|[ResponseDefaultResource](#schemaresponsedefaultresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Delete location rule

<a id="opIddeleteLocationRule"></a>

> Code samples

```bash
curl https://example.com/locationrules/5b8d0b717503c445552a1865 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`DELETE /locationrules/{id}`

<h3 id="delete-location-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|

> Example responses

> 200 Response

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

<h3 id="delete-location-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the deleted resource|[ResponseDefaultResource](#schemaresponsedefaultresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

<h1 id="brain-web-api-presences">presences</h1>

The `presences` resource is an abstraction for the detection of an item (from the `items` resource) at a location (from the `locations` resource).
Presences are always kept current by the Brain, i.e. if the hold time of a presence expires it is simply removed from the resource.


<a href="https://intellifi.zendesk.com/hc/en-us/articles/360008309313">External documentation</a>

## Get all presences

<a id="opIdgetPresences"></a>

> Code samples

```bash
curl https://example.com/presences \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /presences`

<h3 id="get-all-presences-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string(date-time)|false|Limits on `time_created`, Marks the start of a range, optionally use `before` to set the end. Result output excludes the given timestamp.|
|after_id|query|string|false|Limits directly on `id`. Marks the start of a range, optionally use `before_id` to set the end. Result output excludes the given `id` value. Please note that `id` is in chronological order.|
|before|query|string(dateTime)|false|Limits on `time_created`. Marks the end of a range, optionally use `after` to set the start. Result output excludes the given timestamp.|
|before_id|query|string|false|Limits directly on `id`. Marks the end of a range, optionally use `after_id` to set the start. Result output excludes the given `id` value. Please note that `id` is in chronological order.|
|from|query|string(dateTime)|false|Limits on `time_created`. Marks the start of a range, optionally use `until` to set the end. Result output includes the given timestamp.|
|from_id|query|string|false|Limits on `id`. Marks the start of a range, optionally use `until_id` to set the end. Result output includes the given `id` value. Please note that `id` is in chronological order.|
|id_only|query|boolean|false|Removes `url` fields from output and shows `_id` instead of `_url` in references.|
|limit|query|integer|false|Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.|
|populate|query|string|false|Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.|
|results_only|query|boolean|false|Removes response envelope with information about query, only sends back a JSON array with the applicable resources.|
|select|query|string|false|Select which properties should be returned. You may add multiple fields by giving a comma separated value. Select can also be used together with populate: Specify the resource first, then a period(.) followed by the field.|
|sort|query|string|false|Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).|
|until|query|string(dateTime)|false|Limits on `time_created`. Marks the end of a range, optionally use `from` to set the start. Result output includes the given timestamp.|
|until_id|query|string|false|Limits on `id`. Marks the end of a range, optionally use `from_id` to set the start. Result output includes the given `id` value. Please note that `id` is in chronological order.|
|timeout_s|query|number|false|Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.|
|id|query|[IdReadOnly](#schemaidreadonly)|false|Unique identifier|
|time_created|query|[TimeCreated](#schematimecreated)|false|Filter on the time the resource was created.|
|time_updated|query|[TimeUpdated](#schematimeupdated)|false|Filter on the time the resource was last updated|
|item|query|[IdReadOnly](#schemaidreadonly)|false|Filter based on the item|
|location|query|[IdReadOnly](#schemaidreadonly)|false|Filter based on the location|
|proximity|query|[Proximity](#schemaproximity)|false|Filter based on the proximity.|
|technology|query|[Technology](#schematechnology)|false|Filter based on the detected technology of an item.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|proximity|far|
|proximity|near|
|proximity|immediate|
|technology|bluetooth|
|technology|optical|
|technology|rfid|

> Example responses

> 200 Response

```json
{
  "count": 293401,
  "count_current": 100,
  "is_limited": true,
  "next_url": "https://brain.intellifi.nl/api/items?before_id=5b599c427503c44239cf0399",
  "query_duration_ms": 42,
  "url": "https://brain.intellifi.nl/api/foobar",
  "results": [
    {
      "id": "5b7d6cbd7503c445552a1664",
      "item": {
        "config_request": {
          "foo": "bar"
        },
        "custom": {
          "foo": "bar"
        },
        "label": "Foo Bar",
        "location_request": "5b7d6cbd7503c445552a1664",
        "metadata": {
          "foo": "bar"
        },
        "code_hex": "deadbeef",
        "geo_coords": {
          "lat": 0,
          "lng": 0,
          "time_updated": "2018-08-30T09:51:59.737Z"
        },
        "id": "5b7d6cbd7503c445552a1664",
        "is_present": true,
        "move_count": 4523,
        "protocol": "epcgen2",
        "sets": [
          "5b7d6cbd7503c445552a1664"
        ],
        "technology": "rfid",
        "time_created": "2018-08-30T09:51:59.737Z",
        "time_last_present": "2018-08-30T09:51:59.737Z",
        "time_moved": "2018-08-30T09:51:59.737Z",
        "time_updated": "2018-08-30T09:51:59.737Z",
        "type": "tag",
        "url": "https://brain.intellifi.nl/api/foobar",
        "location": {
          "custom": {
            "foo": "bar"
          },
          "id": "5b7d6cbd7503c445552a1664",
          "label": "Foo Bar",
          "metadata": {
            "foo": "bar"
          },
          "time_created": "2018-08-30T09:51:59.737Z",
          "time_updated": "2018-08-30T09:51:59.737Z",
          "url": "https://brain.intellifi.nl/api/foobar"
        }
      },
      "item_id": "5b7d6cbd7503c445552a1664",
      "item_url": "https://brain.intellifi.nl/api/foobar",
      "location": {
        "custom": {
          "foo": "bar"
        },
        "id": "5b7d6cbd7503c445552a1664",
        "label": "Foo Bar",
        "metadata": {
          "foo": "bar"
        },
        "time_created": "2018-08-30T09:51:59.737Z",
        "time_updated": "2018-08-30T09:51:59.737Z",
        "url": "https://brain.intellifi.nl/api/foobar"
      },
      "location_id": "5b7d6cbd7503c445552a1664",
      "location_url": "https://brain.intellifi.nl/api/foobar",
      "proximity": "immediate",
      "technology": "rfid",
      "time_created": "2018-08-30T09:51:59.737Z",
      "time_updated": "2018-08-30T09:51:59.737Z",
      "url": "https://brain.intellifi.nl/api/foobar"
    }
  ]
}
```

<h3 id="get-all-presences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing a list of presences|Inline|

<h3 id="get-all-presences-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|The maximum number of items in the response (as set in the query or by default).|
|count_current|integer|false|none|The maximum number of items available to return.|
|is_limited|boolean|false|none|Becomes false when the number of results is smaller than limit.|
|next_url|string|false|none|URL to the next page of items. ( null if none)|
|query_duration_ms|integer|false|none|Amount of time, in milliseconds, the request needed to complete.|
|url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|
|results|[[Presence](#schemapresence)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Get presence

<a id="opIdgetPresenceById"></a>

> Code samples

```bash
curl https://example.com/presences/5b8d0b717503c445552a1865 \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /presences/{id}`

<h3 id="get-presence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|

> Example responses

> 200 Response

```json
{
  "id": "5b7d6cbd7503c445552a1664",
  "item": {
    "config_request": {
      "foo": "bar"
    },
    "custom": {
      "foo": "bar"
    },
    "label": "Foo Bar",
    "location_request": "5b7d6cbd7503c445552a1664",
    "metadata": {
      "foo": "bar"
    },
    "code_hex": "deadbeef",
    "geo_coords": {
      "lat": 0,
      "lng": 0,
      "time_updated": "2018-08-30T09:51:59.737Z"
    },
    "id": "5b7d6cbd7503c445552a1664",
    "is_present": true,
    "move_count": 4523,
    "protocol": "epcgen2",
    "sets": [
      "5b7d6cbd7503c445552a1664"
    ],
    "technology": "rfid",
    "time_created": "2018-08-30T09:51:59.737Z",
    "time_last_present": "2018-08-30T09:51:59.737Z",
    "time_moved": "2018-08-30T09:51:59.737Z",
    "time_updated": "2018-08-30T09:51:59.737Z",
    "type": "tag",
    "url": "https://brain.intellifi.nl/api/foobar",
    "location": {
      "custom": {
        "foo": "bar"
      },
      "id": "5b7d6cbd7503c445552a1664",
      "label": "Foo Bar",
      "metadata": {
        "foo": "bar"
      },
      "time_created": "2018-08-30T09:51:59.737Z",
      "time_updated": "2018-08-30T09:51:59.737Z",
      "url": "https://brain.intellifi.nl/api/foobar"
    }
  },
  "item_id": "5b7d6cbd7503c445552a1664",
  "item_url": "https://brain.intellifi.nl/api/foobar",
  "location": {
    "custom": {
      "foo": "bar"
    },
    "id": "5b7d6cbd7503c445552a1664",
    "label": "Foo Bar",
    "metadata": {
      "foo": "bar"
    },
    "time_created": "2018-08-30T09:51:59.737Z",
    "time_updated": "2018-08-30T09:51:59.737Z",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "location_id": "5b7d6cbd7503c445552a1664",
  "location_url": "https://brain.intellifi.nl/api/foobar",
  "proximity": "immediate",
  "technology": "rfid",
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_updated": "2018-08-30T09:51:59.737Z",
  "url": "https://brain.intellifi.nl/api/foobar"
}
```

<h3 id="get-presence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the presence|[Presence](#schemapresence)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

<h1 id="brain-web-api-services">services</h1>

The Brain consists of several software components with their own responsibilities, referred to as "services".
Some of these services have status information and/or configuration that can be managed using the `services` resource.


## Get all services

<a id="opIdgetServices"></a>

> Code samples

```bash
curl https://example.com/services \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /services`

<h3 id="get-all-services-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string(date-time)|false|Limits on `time_created`, Marks the start of a range, optionally use `before` to set the end. Result output excludes the given timestamp.|
|after_id|query|string|false|Limits directly on `id`. Marks the start of a range, optionally use `before_id` to set the end. Result output excludes the given `id` value. Please note that `id` is in chronological order.|
|before|query|string(dateTime)|false|Limits on `time_created`. Marks the end of a range, optionally use `after` to set the start. Result output excludes the given timestamp.|
|before_id|query|string|false|Limits directly on `id`. Marks the end of a range, optionally use `after_id` to set the start. Result output excludes the given `id` value. Please note that `id` is in chronological order.|
|from|query|string(dateTime)|false|Limits on `time_created`. Marks the start of a range, optionally use `until` to set the end. Result output includes the given timestamp.|
|from_id|query|string|false|Limits on `id`. Marks the start of a range, optionally use `until_id` to set the end. Result output includes the given `id` value. Please note that `id` is in chronological order.|
|id_only|query|boolean|false|Removes `url` fields from output and shows `_id` instead of `_url` in references.|
|limit|query|integer|false|Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.|
|populate|query|string|false|Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.|
|results_only|query|boolean|false|Removes response envelope with information about query, only sends back a JSON array with the applicable resources.|
|select|query|string|false|Select which properties should be returned. You may add multiple fields by giving a comma separated value. Select can also be used together with populate: Specify the resource first, then a period(.) followed by the field.|
|sort|query|string|false|Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).|
|until|query|string(dateTime)|false|Limits on `time_created`. Marks the end of a range, optionally use `from` to set the start. Result output includes the given timestamp.|
|until_id|query|string|false|Limits on `id`. Marks the end of a range, optionally use `from_id` to set the start. Result output includes the given `id` value. Please note that `id` is in chronological order.|
|timeout_s|query|number|false|Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.|
|id|query|[IdReadOnly](#schemaidreadonly)|false|Unique identifier|
|time_created|query|[TimeCreated](#schematimecreated)|false|Filter on the time the resource was created.|
|time_updated|query|[TimeUpdated](#schematimeupdated)|false|Filter on the time the resource was last updated|
|name|query|[Name](#schemaname)|false|Filter based on the name of the resource. Supports wildcards: `*`|

> Example responses

> 200 Response

```json
{
  "count": 293401,
  "count_current": 100,
  "is_limited": true,
  "next_url": "https://brain.intellifi.nl/api/items?before_id=5b599c427503c44239cf0399",
  "query_duration_ms": 42,
  "url": "https://brain.intellifi.nl/api/foobar",
  "results": [
    {
      "boot_count": 22,
      "config": {
        "foo": "bar"
      },
      "config_request": {
        "foo": "bar"
      },
      "id": "5b7d6cbd7503c445552a1664",
      "name": "Foo Bar",
      "restart_request": true,
      "time_created": "2018-08-30T09:51:59.737Z",
      "time_updated": "2018-08-30T09:51:59.737Z",
      "url": "https://brain.intellifi.nl/api/foobar",
      "version": "1.2.3"
    }
  ]
}
```

<h3 id="get-all-services-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing a list of services|Inline|

<h3 id="get-all-services-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|The maximum number of items in the response (as set in the query or by default).|
|count_current|integer|false|none|The maximum number of items available to return.|
|is_limited|boolean|false|none|Becomes false when the number of results is smaller than limit.|
|next_url|string|false|none|URL to the next page of items. ( null if none)|
|query_duration_ms|integer|false|none|Amount of time, in milliseconds, the request needed to complete.|
|url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|
|results|[[Service](#schemaservice)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Get service

<a id="opIdgetServiceById"></a>

> Code samples

```bash
curl https://example.com/services/5b8d0b717503c445552a1865 \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /services/{id}`

<h3 id="get-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|

> Example responses

> 200 Response

```json
{
  "boot_count": 22,
  "config": {
    "foo": "bar"
  },
  "config_request": {
    "foo": "bar"
  },
  "id": "5b7d6cbd7503c445552a1664",
  "name": "Foo Bar",
  "restart_request": true,
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_updated": "2018-08-30T09:51:59.737Z",
  "url": "https://brain.intellifi.nl/api/foobar",
  "version": "1.2.3"
}
```

<h3 id="get-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the service|[Service](#schemaservice)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Update existing service

<a id="opIdupdateService"></a>

> Code samples

```bash
curl https://example.com/services/5b8d0b717503c445552a1865 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}" \
  -d '{
    "config_request": {
      "foo": "bar"
    },
    "restart_request": true
  }'
```

`PUT /services/{id}`

> Body parameter

```json
{
  "config_request": {
    "foo": "bar"
  },
  "restart_request": true
}
```

<h3 id="update-existing-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|
|body|body|[Service](#schemaservice)|true|A JSON object containing service information|
|» config_request|body|[ConfigRequest](#schemaconfigrequest)|false|Object containing the new configuration. This will be applied automatically when the values are valid.|
|» restart_request|body|[RestartRequest](#schemarestartrequest)|false|Set this to `true` to send a reset request for the specific resource.|

> Example responses

> 200 Response

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

<h3 id="update-existing-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the modified resource|[ResponseDefaultResource](#schemaresponsedefaultresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

<h1 id="brain-web-api-sets">sets</h1>

It can be useful to group items or Smartspots in a list. The `sets` resource can be used to create and manage such list sets.
Sets can be utilized in various Brain Management Console utilities and can also be useful in custom Brain applications.


<a href="https://intellifi.zendesk.com/hc/en-us/articles/360007824993">External documentation</a>

## Get all item lists

<a id="opIdgetItemLists"></a>

> Code samples

```bash
curl https://example.com/sets/itemlists \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /sets/itemlists`

<h3 id="get-all-item-lists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string(date-time)|false|Limits on `time_created`, Marks the start of a range, optionally use `before` to set the end. Result output excludes the given timestamp.|
|after_id|query|string|false|Limits directly on `id`. Marks the start of a range, optionally use `before_id` to set the end. Result output excludes the given `id` value. Please note that `id` is in chronological order.|
|before|query|string(dateTime)|false|Limits on `time_created`. Marks the end of a range, optionally use `after` to set the start. Result output excludes the given timestamp.|
|before_id|query|string|false|Limits directly on `id`. Marks the end of a range, optionally use `after_id` to set the start. Result output excludes the given `id` value. Please note that `id` is in chronological order.|
|from|query|string(dateTime)|false|Limits on `time_created`. Marks the start of a range, optionally use `until` to set the end. Result output includes the given timestamp.|
|from_id|query|string|false|Limits on `id`. Marks the start of a range, optionally use `until_id` to set the end. Result output includes the given `id` value. Please note that `id` is in chronological order.|
|id_only|query|boolean|false|Removes `url` fields from output and shows `_id` instead of `_url` in references.|
|limit|query|integer|false|Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.|
|populate|query|string|false|Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.|
|results_only|query|boolean|false|Removes response envelope with information about query, only sends back a JSON array with the applicable resources.|
|select|query|string|false|Select which properties should be returned. You may add multiple fields by giving a comma separated value. Select can also be used together with populate: Specify the resource first, then a period(.) followed by the field.|
|sort|query|string|false|Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).|
|until|query|string(dateTime)|false|Limits on `time_created`. Marks the end of a range, optionally use `from` to set the start. Result output includes the given timestamp.|
|until_id|query|string|false|Limits on `id`. Marks the end of a range, optionally use `from_id` to set the start. Result output includes the given `id` value. Please note that `id` is in chronological order.|
|timeout_s|query|number|false|Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.|
|id|query|[IdReadOnly](#schemaidreadonly)|false|Unique identifier|
|time_created|query|[TimeCreated](#schematimecreated)|false|Filter on the time the resource was created.|
|time_updated|query|[TimeUpdated](#schematimeupdated)|false|Filter on the time the resource was last updated|
|label|query|[Label](#schemalabel)|false|Filter based on the label value. Supports wildcards: `*`|
|metadata|query|string|false|Filter based on metadata. Does a partial match on any value in the metadata object. It is also possible to do an exact/wildcard match on specific properties, e.g. `metadata.foo=bar`|
|text|query|string|false|Filter based on a full text search. Searched properties depend on the resource type. Matches on any of the given words. Supports quote (exact words) and minus (exclude) operators.|
|total|query|integer|false|Filter based on the total amount of items in the list|
|sha1|query|string|false|The sha1 checksum of the list. This will change when the list is mutated.|

> Example responses

> 200 Response

```json
{
  "count": 293401,
  "count_current": 100,
  "is_limited": true,
  "next_url": "https://brain.intellifi.nl/api/items?before_id=5b599c427503c44239cf0399",
  "query_duration_ms": 42,
  "url": "https://brain.intellifi.nl/api/foobar",
  "results": [
    {
      "custom": {
        "foo": "bar"
      },
      "id": "5b7d6cbd7503c445552a1664",
      "label": "Foo Bar",
      "list": "https://brain.intellifi.nl/api/foobar",
      "metadata": {
        "foo": "bar"
      },
      "sha1": "string",
      "time_created": "2018-08-30T09:51:59.737Z",
      "time_updated": "2018-08-30T09:51:59.737Z",
      "total": 2
    }
  ]
}
```

<h3 id="get-all-item-lists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing a list of item lists|Inline|

<h3 id="get-all-item-lists-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|The maximum number of items in the response (as set in the query or by default).|
|count_current|integer|false|none|The maximum number of items available to return.|
|is_limited|boolean|false|none|Becomes false when the number of results is smaller than limit.|
|next_url|string|false|none|URL to the next page of items. ( null if none)|
|query_duration_ms|integer|false|none|Amount of time, in milliseconds, the request needed to complete.|
|url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|
|results|[[ItemList](#schemaitemlist)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Create item list

<a id="opIdaddItemList"></a>

> Code samples

```bash
curl https://example.com/sets/itemlists \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}" \
  -d '{
    "custom": {
      "foo": "bar"
    },
    "label": "Foo Bar",
    "metadata": {
      "foo": "bar"
    }
  }'
```

`POST /sets/itemlists`

> Body parameter

```json
{
  "custom": {
    "foo": "bar"
  },
  "label": "Foo Bar",
  "metadata": {
    "foo": "bar"
  }
}
```

<h3 id="create-item-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ItemList](#schemaitemlist)|true|A JSON object containing item list information|
|» custom|body|[Custom](#schemacustom)|false|The `custom` value is only for your custom references, you may use it to save additional attributes. The custom value is not used in any other place. This field may contain any datatype that you like: null (default), string, integer, boolean, object etc...|
|» label|body|[Label](#schemalabel)|false|A name or a label for this resource. This is used in the user interface, may be empty.|
|» metadata|body|[Metadata](#schemametadata)|false|Object of searchable metadata for this resource. Can be freely used to store metadata properties.|

> Example responses

> 201 Response

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

<h3 id="create-item-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A JSON object containing the newly added resource|[ResponseDefaultResource](#schemaresponsedefaultresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Get item list

<a id="opIdgetItemListById"></a>

> Code samples

```bash
curl https://example.com/sets/itemlists/5b8d0b717503c445552a1865 \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /sets/itemlists/{id}`

<h3 id="get-item-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|

> Example responses

> 200 Response

```json
{
  "custom": {
    "foo": "bar"
  },
  "id": "5b7d6cbd7503c445552a1664",
  "label": "Foo Bar",
  "list": "https://brain.intellifi.nl/api/foobar",
  "metadata": {
    "foo": "bar"
  },
  "sha1": "string",
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_updated": "2018-08-30T09:51:59.737Z",
  "total": 2
}
```

<h3 id="get-item-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the item list|[ItemList](#schemaitemlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Update existing item list

<a id="opIdupdateItemList"></a>

> Code samples

```bash
curl https://example.com/sets/itemlists/5b8d0b717503c445552a1865 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}" \
  -d '{
    "custom": {
      "foo": "bar"
    },
    "label": "Foo Bar",
    "metadata": {
      "foo": "bar"
    }
  }'
```

`PUT /sets/itemlists/{id}`

> Body parameter

```json
{
  "custom": {
    "foo": "bar"
  },
  "label": "Foo Bar",
  "metadata": {
    "foo": "bar"
  }
}
```

<h3 id="update-existing-item-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|
|body|body|[ItemList](#schemaitemlist)|true|A JSON object containing item list information|
|» custom|body|[Custom](#schemacustom)|false|The `custom` value is only for your custom references, you may use it to save additional attributes. The custom value is not used in any other place. This field may contain any datatype that you like: null (default), string, integer, boolean, object etc...|
|» label|body|[Label](#schemalabel)|false|A name or a label for this resource. This is used in the user interface, may be empty.|
|» metadata|body|[Metadata](#schemametadata)|false|Object of searchable metadata for this resource. Can be freely used to store metadata properties.|

> Example responses

> 200 Response

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

<h3 id="update-existing-item-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the modified resource|[ResponseDefaultResource](#schemaresponsedefaultresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Delete item list

<a id="opIddeleteItemSet"></a>

> Code samples

```bash
curl https://example.com/sets/itemlists/5b8d0b717503c445552a1865 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`DELETE /sets/itemlists/{id}`

<h3 id="delete-item-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|

> Example responses

> 200 Response

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

<h3 id="delete-item-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the deleted resource|[ResponseDefaultResource](#schemaresponsedefaultresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Get item ids for this list

<a id="opIdgetItemListIdsById"></a>

> Code samples

```bash
curl https://example.com/sets/itemlists/5b8d0b717503c445552a1865/ids \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /sets/itemlists/{id}/ids`

<h3 id="get-item-ids-for-this-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|

> Example responses

> 200 Response

```json
[
  "5b7d6cbd7503c445552a1664"
]
```

<h3 id="get-item-ids-for-this-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array object containing the item ids for this list|[ListOfItemIds](#schemalistofitemids)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Add items to an existing list

<a id="opIdaddItemIdsList"></a>

> Code samples

```bash
curl https://example.com/sets/itemlists/5b8d0b717503c445552a1865/ids \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}" \
  -d '[
    "5b7d6cbd7503c445552a1664"
  ]'
```

`POST /sets/itemlists/{id}/ids`

> Body parameter

```json
[
  "5b7d6cbd7503c445552a1664"
]
```

<h3 id="add-items-to-an-existing-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|
|body|body|[ListOfItemIds](#schemalistofitemids)|true|A JSON array containing item ids|

> Example responses

> 200 Response

```json
{
  "status": 200,
  "total": 2
}
```

<h3 id="add-items-to-an-existing-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the status and the total amount of items in the newly added list|[ResponseListResource](#schemaresponselistresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Delete item from list

<a id="opIddeleteItemIdFromItemList"></a>

> Code samples

```bash
curl https://example.com/sets/itemlists/5b8d0b717503c445552a1865/ids/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`DELETE /sets/itemlists/{id}/ids/{itemId}`

<h3 id="delete-item-from-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|
|itemId|path|string|true|Item ID.|

> Example responses

> 200 Response

```json
{
  "status": 200,
  "total": 2
}
```

<h3 id="delete-item-from-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the status and the total amount of items in the list|[ResponseListResource](#schemaresponselistresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Get all spot lists

<a id="opIdgetSpotLists"></a>

> Code samples

```bash
curl https://example.com/sets/spotlists \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /sets/spotlists`

<h3 id="get-all-spot-lists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string(date-time)|false|Limits on `time_created`, Marks the start of a range, optionally use `before` to set the end. Result output excludes the given timestamp.|
|after_id|query|string|false|Limits directly on `id`. Marks the start of a range, optionally use `before_id` to set the end. Result output excludes the given `id` value. Please note that `id` is in chronological order.|
|before|query|string(dateTime)|false|Limits on `time_created`. Marks the end of a range, optionally use `after` to set the start. Result output excludes the given timestamp.|
|before_id|query|string|false|Limits directly on `id`. Marks the end of a range, optionally use `after_id` to set the start. Result output excludes the given `id` value. Please note that `id` is in chronological order.|
|from|query|string(dateTime)|false|Limits on `time_created`. Marks the start of a range, optionally use `until` to set the end. Result output includes the given timestamp.|
|from_id|query|string|false|Limits on `id`. Marks the start of a range, optionally use `until_id` to set the end. Result output includes the given `id` value. Please note that `id` is in chronological order.|
|id_only|query|boolean|false|Removes `url` fields from output and shows `_id` instead of `_url` in references.|
|limit|query|integer|false|Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.|
|populate|query|string|false|Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.|
|results_only|query|boolean|false|Removes response envelope with information about query, only sends back a JSON array with the applicable resources.|
|select|query|string|false|Select which properties should be returned. You may add multiple fields by giving a comma separated value. Select can also be used together with populate: Specify the resource first, then a period(.) followed by the field.|
|sort|query|string|false|Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).|
|until|query|string(dateTime)|false|Limits on `time_created`. Marks the end of a range, optionally use `from` to set the start. Result output includes the given timestamp.|
|until_id|query|string|false|Limits on `id`. Marks the end of a range, optionally use `from_id` to set the start. Result output includes the given `id` value. Please note that `id` is in chronological order.|
|timeout_s|query|number|false|Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.|
|id|query|[IdReadOnly](#schemaidreadonly)|false|Unique identifier|
|time_created|query|[TimeCreated](#schematimecreated)|false|Filter on the time the resource was created.|
|time_updated|query|[TimeUpdated](#schematimeupdated)|false|Filter on the time the resource was last updated|
|label|query|[Label](#schemalabel)|false|Filter based on the label value. Supports wildcards: `*`|
|metadata|query|string|false|Filter based on metadata. Does a partial match on any value in the metadata object. It is also possible to do an exact/wildcard match on specific properties, e.g. `metadata.foo=bar`|
|text|query|string|false|Filter based on a full text search. Searched properties depend on the resource type. Matches on any of the given words. Supports quote (exact words) and minus (exclude) operators.|
|total|query|integer|false|Filter based on the total amount of spots in the list|

> Example responses

> 200 Response

```json
{
  "count": 293401,
  "count_current": 100,
  "is_limited": true,
  "next_url": "https://brain.intellifi.nl/api/items?before_id=5b599c427503c44239cf0399",
  "query_duration_ms": 42,
  "url": "https://brain.intellifi.nl/api/foobar",
  "results": [
    {
      "custom": {
        "foo": "bar"
      },
      "id": "5b7d6cbd7503c445552a1664",
      "label": "Foo Bar",
      "list": "https://brain.intellifi.nl/api/foobar",
      "metadata": {
        "foo": "bar"
      },
      "time_created": "2018-08-30T09:51:59.737Z",
      "time_updated": "2018-08-30T09:51:59.737Z",
      "total": 2
    }
  ]
}
```

<h3 id="get-all-spot-lists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing a list of spot lists|Inline|

<h3 id="get-all-spot-lists-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|The maximum number of items in the response (as set in the query or by default).|
|count_current|integer|false|none|The maximum number of items available to return.|
|is_limited|boolean|false|none|Becomes false when the number of results is smaller than limit.|
|next_url|string|false|none|URL to the next page of items. ( null if none)|
|query_duration_ms|integer|false|none|Amount of time, in milliseconds, the request needed to complete.|
|url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|
|results|[[SpotList](#schemaspotlist)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Create spot list

<a id="opIdaddSpotList"></a>

> Code samples

```bash
curl https://example.com/sets/spotlists \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}" \
  -d '{
    "custom": {
      "foo": "bar"
    },
    "label": "Foo Bar",
    "metadata": {
      "foo": "bar"
    }
  }'
```

`POST /sets/spotlists`

> Body parameter

```json
{
  "custom": {
    "foo": "bar"
  },
  "label": "Foo Bar",
  "metadata": {
    "foo": "bar"
  }
}
```

<h3 id="create-spot-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ItemList](#schemaitemlist)|true|A JSON object containing item list information|
|» custom|body|[Custom](#schemacustom)|false|The `custom` value is only for your custom references, you may use it to save additional attributes. The custom value is not used in any other place. This field may contain any datatype that you like: null (default), string, integer, boolean, object etc...|
|» label|body|[Label](#schemalabel)|false|A name or a label for this resource. This is used in the user interface, may be empty.|
|» metadata|body|[Metadata](#schemametadata)|false|Object of searchable metadata for this resource. Can be freely used to store metadata properties.|

> Example responses

> 201 Response

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

<h3 id="create-spot-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A JSON object containing the newly added resource|[ResponseDefaultResource](#schemaresponsedefaultresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Info for a specific spot list

<a id="opIdgetSpotListById"></a>

> Code samples

```bash
curl https://example.com/sets/spotlists/5b8d0b717503c445552a1865 \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /sets/spotlists/{id}`

<h3 id="info-for-a-specific-spot-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|

> Example responses

> 200 Response

```json
{
  "custom": {
    "foo": "bar"
  },
  "id": "5b7d6cbd7503c445552a1664",
  "label": "Foo Bar",
  "list": "https://brain.intellifi.nl/api/foobar",
  "metadata": {
    "foo": "bar"
  },
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_updated": "2018-08-30T09:51:59.737Z",
  "total": 2
}
```

<h3 id="info-for-a-specific-spot-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the spot list|[SpotList](#schemaspotlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Update existing spot list

<a id="opIdupdateSpotList"></a>

> Code samples

```bash
curl https://example.com/sets/spotlists/5b8d0b717503c445552a1865 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}" \
  -d '{
    "custom": {
      "foo": "bar"
    },
    "label": "Foo Bar",
    "metadata": {
      "foo": "bar"
    }
  }'
```

`PUT /sets/spotlists/{id}`

> Body parameter

```json
{
  "custom": {
    "foo": "bar"
  },
  "label": "Foo Bar",
  "metadata": {
    "foo": "bar"
  }
}
```

<h3 id="update-existing-spot-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|
|body|body|[SpotList](#schemaspotlist)|true|A JSON object containing spot list information|
|» custom|body|[Custom](#schemacustom)|false|The `custom` value is only for your custom references, you may use it to save additional attributes. The custom value is not used in any other place. This field may contain any datatype that you like: null (default), string, integer, boolean, object etc...|
|» label|body|[Label](#schemalabel)|false|A name or a label for this resource. This is used in the user interface, may be empty.|
|» metadata|body|[Metadata](#schemametadata)|false|Object of searchable metadata for this resource. Can be freely used to store metadata properties.|

> Example responses

> 200 Response

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

<h3 id="update-existing-spot-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the modified resource|[ResponseDefaultResource](#schemaresponsedefaultresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Delete spot list

<a id="opIddeleteSpotList"></a>

> Code samples

```bash
curl https://example.com/sets/spotlists/5b8d0b717503c445552a1865 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`DELETE /sets/spotlists/{id}`

<h3 id="delete-spot-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|

> Example responses

> 200 Response

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

<h3 id="delete-spot-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the deleted resource|[ResponseDefaultResource](#schemaresponsedefaultresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Get spot ids for this list

<a id="opIdgetSpotListIdsById"></a>

> Code samples

```bash
curl https://example.com/sets/spotlists/5b8d0b717503c445552a1865/ids \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /sets/spotlists/{id}/ids`

<h3 id="get-spot-ids-for-this-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|

> Example responses

> 200 Response

```json
[
  "5b7d6cbd7503c445552a1664"
]
```

<h3 id="get-spot-ids-for-this-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array object containing the item ids for this list|[ListOfItemIds](#schemalistofitemids)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Add spots to an existing list

<a id="opIdaddItemIdsSpotList"></a>

> Code samples

```bash
curl https://example.com/sets/spotlists/5b8d0b717503c445552a1865/ids \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}" \
  -d '[
    "5b7d6cbd7503c445552a1664"
  ]'
```

`POST /sets/spotlists/{id}/ids`

> Body parameter

```json
[
  "5b7d6cbd7503c445552a1664"
]
```

<h3 id="add-spots-to-an-existing-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|
|body|body|[ListOfItemIds](#schemalistofitemids)|true|A JSON array containing spot ids|

> Example responses

> 200 Response

```json
{
  "status": 200,
  "total": 2
}
```

<h3 id="add-spots-to-an-existing-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the status and the total amount of items in the newly added list|[ResponseListResource](#schemaresponselistresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Delete spot from list

<a id="opIddeleteItemIdFromSpotList"></a>

> Code samples

```bash
curl https://example.com/sets/spotlists/5b8d0b717503c445552a1865/ids/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`DELETE /sets/spotlists/{id}/ids/{itemId}`

<h3 id="delete-spot-from-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|
|itemId|path|string|true|Item ID.|

> Example responses

> 200 Response

```json
{
  "status": 200,
  "total": 2
}
```

<h3 id="delete-spot-from-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the status and the total amount of items in the list|[ResponseListResource](#schemaresponselistresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

<h1 id="brain-web-api-spots">spots</h1>

The `spots` resource contains representations of Smartspot devices that have connected to this Brain at least once.
It is possible to configure Smartspots through this resource.

Smartspots also have their own locally stored sets, referred to as "spotsets".
Spotsets can be created and managed within a single spot instance or by using `spotsets` resource.
Created or updated spotsets are automatically synced between Smartspot and server.


<a href="https://intellifi.zendesk.com/hc/en-us/categories/360000685434">External documentation</a>

## Get all spots

<a id="opIdgetSpots"></a>

> Code samples

```bash
curl https://example.com/spots \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /spots`

<h3 id="get-all-spots-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string(date-time)|false|Limits on `time_created`, Marks the start of a range, optionally use `before` to set the end. Result output excludes the given timestamp.|
|after_id|query|string|false|Limits directly on `id`. Marks the start of a range, optionally use `before_id` to set the end. Result output excludes the given `id` value. Please note that `id` is in chronological order.|
|before|query|string(dateTime)|false|Limits on `time_created`. Marks the end of a range, optionally use `after` to set the start. Result output excludes the given timestamp.|
|before_id|query|string|false|Limits directly on `id`. Marks the end of a range, optionally use `after_id` to set the start. Result output excludes the given `id` value. Please note that `id` is in chronological order.|
|from|query|string(dateTime)|false|Limits on `time_created`. Marks the start of a range, optionally use `until` to set the end. Result output includes the given timestamp.|
|from_id|query|string|false|Limits on `id`. Marks the start of a range, optionally use `until_id` to set the end. Result output includes the given `id` value. Please note that `id` is in chronological order.|
|id_only|query|boolean|false|Removes `url` fields from output and shows `_id` instead of `_url` in references.|
|limit|query|integer|false|Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.|
|populate|query|string|false|Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.|
|results_only|query|boolean|false|Removes response envelope with information about query, only sends back a JSON array with the applicable resources.|
|select|query|string|false|Select which properties should be returned. You may add multiple fields by giving a comma separated value. Select can also be used together with populate: Specify the resource first, then a period(.) followed by the field.|
|sort|query|string|false|Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).|
|until|query|string(dateTime)|false|Limits on `time_created`. Marks the end of a range, optionally use `from` to set the start. Result output includes the given timestamp.|
|until_id|query|string|false|Limits on `id`. Marks the end of a range, optionally use `from_id` to set the start. Result output includes the given `id` value. Please note that `id` is in chronological order.|
|timeout_s|query|number|false|Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.|
|id|query|[IdReadOnly](#schemaidreadonly)|false|Unique identifier|
|time_created|query|[TimeCreated](#schematimecreated)|false|Filter on the time the resource was created.|
|time_updated|query|[TimeUpdated](#schematimeupdated)|false|Filter on the time the resource was last updated|
|is_online|query|[IsOnline](#schemaisonline)|false|Filter based on the online status.|
|request_counter|query|[RequestCounter](#schemarequestcounter)|false|Filter based on the amount of request made|
|serial_number|query|[SerialNumber](#schemaserialnumber)|false|Filter based on the serial number.|

> Example responses

> 200 Response

```json
{
  "count": 293401,
  "count_current": 100,
  "is_limited": true,
  "next_url": "https://brain.intellifi.nl/api/items?before_id=5b599c427503c44239cf0399",
  "query_duration_ms": 42,
  "url": "https://brain.intellifi.nl/api/foobar",
  "results": [
    {
      "antenna_report_locations": [
        {
          "antenna_number": 1,
          "report_location": {
            "custom": {
              "foo": "bar"
            },
            "id": "5b7d6cbd7503c445552a1664",
            "label": "Foo Bar",
            "metadata": {
              "foo": "bar"
            },
            "time_created": "2018-08-30T09:51:59.737Z",
            "time_updated": "2018-08-30T09:51:59.737Z",
            "url": "https://brain.intellifi.nl/api/foobar"
          },
          "report_location_id": "5b7d6cbd7503c445552a1664",
          "report_location_url": "https://brain.intellifi.nl/api/foobar"
        }
      ],
      "config": {
        "foo": "bar"
      },
      "config_request": {
        "foo": "bar"
      },
      "geo_coords": {
        "lat": 0,
        "lng": 0,
        "time_updated": "2018-08-30T09:51:59.737Z"
      },
      "id": "5b7d6cbd7503c445552a1664",
      "is_online": true,
      "request_counter": 73807,
      "senses": {
        "foo": "bar"
      },
      "senses_request": {
        "foo": "bar"
      },
      "serial_number": 1337,
      "status": {
        "foo": "bar"
      },
      "time_created": "2018-08-30T09:51:59.737Z",
      "time_updated": "2018-08-30T09:51:59.737Z",
      "url": "https://brain.intellifi.nl/api/foobar",
      "report_location": {
        "custom": {
          "foo": "bar"
        },
        "id": "5b7d6cbd7503c445552a1664",
        "label": "Foo Bar",
        "metadata": {
          "foo": "bar"
        },
        "time_created": "2018-08-30T09:51:59.737Z",
        "time_updated": "2018-08-30T09:51:59.737Z",
        "url": "https://brain.intellifi.nl/api/foobar"
      }
    }
  ]
}
```

<h3 id="get-all-spots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing a list of spots|Inline|

<h3 id="get-all-spots-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|The maximum number of items in the response (as set in the query or by default).|
|count_current|integer|false|none|The maximum number of items available to return.|
|is_limited|boolean|false|none|Becomes false when the number of results is smaller than limit.|
|next_url|string|false|none|URL to the next page of items. ( null if none)|
|query_duration_ms|integer|false|none|Amount of time, in milliseconds, the request needed to complete.|
|url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|
|results|[[SpotGet](#schemaspotget)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Get spot

<a id="opIdgetSpotById"></a>

> Code samples

```bash
curl https://example.com/spots/5b8d0b717503c445552a1865 \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /spots/{id}`

<h3 id="get-spot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|

> Example responses

> 200 Response

```json
{
  "antenna_report_locations": [
    {
      "antenna_number": 1,
      "report_location": {
        "custom": {
          "foo": "bar"
        },
        "id": "5b7d6cbd7503c445552a1664",
        "label": "Foo Bar",
        "metadata": {
          "foo": "bar"
        },
        "time_created": "2018-08-30T09:51:59.737Z",
        "time_updated": "2018-08-30T09:51:59.737Z",
        "url": "https://brain.intellifi.nl/api/foobar"
      },
      "report_location_id": "5b7d6cbd7503c445552a1664",
      "report_location_url": "https://brain.intellifi.nl/api/foobar"
    }
  ],
  "config": {
    "foo": "bar"
  },
  "config_request": {
    "foo": "bar"
  },
  "geo_coords": {
    "lat": 0,
    "lng": 0,
    "time_updated": "2018-08-30T09:51:59.737Z"
  },
  "id": "5b7d6cbd7503c445552a1664",
  "is_online": true,
  "request_counter": 73807,
  "senses": {
    "foo": "bar"
  },
  "senses_request": {
    "foo": "bar"
  },
  "serial_number": 1337,
  "status": {
    "foo": "bar"
  },
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_updated": "2018-08-30T09:51:59.737Z",
  "url": "https://brain.intellifi.nl/api/foobar",
  "report_location": {
    "custom": {
      "foo": "bar"
    },
    "id": "5b7d6cbd7503c445552a1664",
    "label": "Foo Bar",
    "metadata": {
      "foo": "bar"
    },
    "time_created": "2018-08-30T09:51:59.737Z",
    "time_updated": "2018-08-30T09:51:59.737Z",
    "url": "https://brain.intellifi.nl/api/foobar"
  }
}
```

<h3 id="get-spot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the spot|[SpotGet](#schemaspotget)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Update existing spot

<a id="opIdupdateSpot"></a>

> Code samples

```bash
curl https://example.com/spots/5b8d0b717503c445552a1865 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}" \
  -d '{
    "antenna_report_locations": [
      {
        "antenna_number": 1
      }
    ],
    "config_request": {
      "foo": "bar"
    },
    "geo_coords": {
      "lat": 0,
      "lng": 0
    },
    "senses_request": {
      "foo": "bar"
    },
    "report_location": "5b7d6cbd7503c445552a1664"
  }'
```

`PUT /spots/{id}`

> Body parameter

```json
{
  "antenna_report_locations": [
    {
      "antenna_number": 1
    }
  ],
  "config_request": {
    "foo": "bar"
  },
  "geo_coords": {
    "lat": 0,
    "lng": 0
  },
  "senses_request": {
    "foo": "bar"
  },
  "report_location": "5b7d6cbd7503c445552a1664"
}
```

<h3 id="update-existing-spot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|
|body|body|[SpotUpdate](#schemaspotupdate)|true|A JSON object containing spot information|
|» antenna_report_locations|body|[object]|false|You may configure this field to an object which couples individual antenna ports to locations.|
|» » antenna_number|body|integer|false|Antenna number|
|» config_request|body|[ConfigRequest](#schemaconfigrequest)|false|Object containing the new configuration. This will be applied automatically when the values are valid.|
|» geo_coords|body|[GeoCoords](#schemageocoords)|false|Last known geolocation estimate of this object. Not guaranteed to be included in response.|
|» senses_request|body|[SensesRequest](#schemasensesrequest)|false|Object containing the new senses configuration. See [Sense & Control](https://intellifi.zendesk.com/hc/en-us/sections/360001568254) documentation for more information.|
|» report_location|body|[Id](#schemaid)|false|Unique identifier for resource.|

> Example responses

> 200 Response

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

<h3 id="update-existing-spot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the modified resource|[ResponseDefaultResource](#schemaresponsedefaultresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Get spotsets

<a id="opIdgetSpotSetsById"></a>

> Code samples

```bash
curl https://example.com/spots/5b8d0b717503c445552a1865/sets \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /spots/{id}/sets`

<h3 id="get-spotsets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|

> Example responses

> 200 Response

```json
{
  "created_by": "string",
  "id": "5b7d6cbd7503c445552a1664",
  "setid": 0,
  "spot_id": "5b7d6cbd7503c445552a1664",
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_updated": "2018-08-30T09:51:59.737Z",
  "type": "any"
}
```

<h3 id="get-spotsets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the spotset|[SpotSet](#schemaspotset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Create spotset

<a id="opIdaddSpotSet"></a>

> Code samples

```bash
curl https://example.com/spots/5b8d0b717503c445552a1865/sets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}" \
  -d '{
    "setid": 0,
    "area_code": 1,
    "type": "areacode"
  }'
```

`POST /spots/{id}/sets`

> Body parameter

```json
{
  "setid": 0,
  "area_code": 1,
  "type": "areacode"
}
```

<h3 id="create-spotset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|
|body|body|[SpotSetCreate](#schemaspotsetcreate)|true|A JSON object containing spot set information|
|» setid|body|integer|false|Spot set unique identifier. Must be unique within a single device|
|» *oneOf*|body|[SpotSetTypeAreacode](#schemaspotsettypeareacode)|false|none|
|» *oneOf*|body|[SpotSetTypeCodelength](#schemaspotsettypecodelength)|false|none|
|» *oneOf*|body|[SpotSetTypeCodemask](#schemaspotsettypecodemask)|false|none|
|» *oneOf*|body|[SpotSetTypeCoderange](#schemaspotsettypecoderange)|false|none|
|» *oneOf*|body|[SpotSetTypeExtended](#schemaspotsettypeextended)|false|none|
|» *oneOf*|body|[SpotSetTypeList](#schemaspotsettypelist)|false|none|
|» *oneOf*|body|[SpotSetTypeProtocol](#schemaspotsettypeprotocol)|false|none|
|» *oneOf*|body|[SpotSetTypeTechnology](#schemaspotsettypetechnology)|false|none|
|» *oneOf*|body|[SpotSetTypeType](#schemaspotsettypetype)|false|none|

> Example responses

> 201 Response

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

<h3 id="create-spotset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A JSON object containing the newly added resource|[ResponseDefaultResource](#schemaresponsedefaultresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Get spotset

<a id="opIdgetSpotSetById"></a>

> Code samples

```bash
curl https://example.com/spots/5b8d0b717503c445552a1865/sets/5b8d0b717503c445552a1865 \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /spots/{id}/sets/{setId}`

<h3 id="get-spotset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|
|setId|path|string|true|Unique spot set identifier|

> Example responses

> 200 Response

```json
{
  "created_by": "string",
  "id": "5b7d6cbd7503c445552a1664",
  "setid": 0,
  "spot_id": "5b7d6cbd7503c445552a1664",
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_updated": "2018-08-30T09:51:59.737Z",
  "type": "any"
}
```

<h3 id="get-spotset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the spotset|[SpotSet](#schemaspotset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Update existing spotset

<a id="opIdupdateSpotSet"></a>

> Code samples

```bash
curl https://example.com/spots/5b8d0b717503c445552a1865/sets/5b8d0b717503c445552a1865 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}" \
  -d '{
    "delete": true
  }'
```

`PUT /spots/{id}/sets/{setId}`

> Body parameter

```json
{
  "delete": true
}
```

<h3 id="update-existing-spotset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|
|setId|path|string|true|Unique spot set identifier|
|body|body|[SpotSetUpdate](#schemaspotsetupdate)|true|A JSON object containing spotset information|
|» delete|body|boolean|false|Request to delete a set. Remove request needs to be synchronized to the device, so it may take some time before the resource is being removed.|

> Example responses

> 200 Response

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

<h3 id="update-existing-spotset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the modified resource|[ResponseDefaultResource](#schemaresponsedefaultresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

<h1 id="brain-web-api-spotsets">spotsets</h1>

The `spotsets` resource contains a collection of set definitons for each Smartspot and allows for remote mananagement.
Spotsets are stored and used on the Smartspot locally and synced between Smartspot and server.
Spotsets primarly are used as an input for Sense&Control.


<a href="https://intellifi.zendesk.com/hc/en-us/articles/360009282834">External documentation</a>

## Get spotsets

> Code samples

```bash
curl https://example.com/spotsets \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /spotsets`

> Example responses

> 200 Response

```json
{
  "created_by": "string",
  "id": "5b7d6cbd7503c445552a1664",
  "setid": 0,
  "spot_id": "5b7d6cbd7503c445552a1664",
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_updated": "2018-08-30T09:51:59.737Z",
  "type": "any"
}
```

<h3 id="get-spotsets-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the spotset|[SpotSet](#schemaspotset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Create spotset

> Code samples

```bash
curl https://example.com/spotsets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}" \
  -d '{
    "setid": 0,
    "area_code": 1,
    "type": "areacode"
  }'
```

`POST /spotsets`

> Body parameter

```json
{
  "setid": 0,
  "area_code": 1,
  "type": "areacode"
}
```

<h3 id="create-spotset-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SpotSetCreate](#schemaspotsetcreate)|true|A JSON object containing spot set information|
|» setid|body|integer|false|Spot set unique identifier. Must be unique within a single device|
|» *oneOf*|body|[SpotSetTypeAreacode](#schemaspotsettypeareacode)|false|none|
|» *oneOf*|body|[SpotSetTypeCodelength](#schemaspotsettypecodelength)|false|none|
|» *oneOf*|body|[SpotSetTypeCodemask](#schemaspotsettypecodemask)|false|none|
|» *oneOf*|body|[SpotSetTypeCoderange](#schemaspotsettypecoderange)|false|none|
|» *oneOf*|body|[SpotSetTypeExtended](#schemaspotsettypeextended)|false|none|
|» *oneOf*|body|[SpotSetTypeList](#schemaspotsettypelist)|false|none|
|» *oneOf*|body|[SpotSetTypeProtocol](#schemaspotsettypeprotocol)|false|none|
|» *oneOf*|body|[SpotSetTypeTechnology](#schemaspotsettypetechnology)|false|none|
|» *oneOf*|body|[SpotSetTypeType](#schemaspotsettypetype)|false|none|

> Example responses

> 201 Response

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

<h3 id="create-spotset-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A JSON object containing the newly added resource|[ResponseDefaultResource](#schemaresponsedefaultresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Get spotset

> Code samples

```bash
curl https://example.com/spotsets/5b8d0b717503c445552a1865 \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /spotsets/{id}`

<h3 id="get-spotset-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|

> Example responses

> 200 Response

```json
{
  "created_by": "string",
  "id": "5b7d6cbd7503c445552a1664",
  "setid": 0,
  "spot_id": "5b7d6cbd7503c445552a1664",
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_updated": "2018-08-30T09:51:59.737Z",
  "type": "any"
}
```

<h3 id="get-spotset-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the spotset|[SpotSet](#schemaspotset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Update existing spotset

> Code samples

```bash
curl https://example.com/spotsets/5b8d0b717503c445552a1865 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}" \
  -d '{
    "delete": true
  }'
```

`PUT /spotsets/{id}`

> Body parameter

```json
{
  "delete": true
}
```

<h3 id="update-existing-spotset-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|
|body|body|[SpotSetUpdate](#schemaspotsetupdate)|true|A JSON object containing spotset information|
|» delete|body|boolean|false|Request to delete a set. Remove request needs to be synchronized to the device, so it may take some time before the resource is being removed.|

> Example responses

> 200 Response

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

<h3 id="update-existing-spotset-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the modified resource|[ResponseDefaultResource](#schemaresponsedefaultresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

<h1 id="brain-web-api-subscriptions">subscriptions</h1>

The `subscriptions` resource contains rules to store and/or deliver events from the Brain event system.

See also the `events` resource.


<a href="https://intellifi.zendesk.com/hc/en-us/sections/360001588534">External documentation</a>

## Get all subscriptions

<a id="opIdgetSubscriptions"></a>

> Code samples

```bash
curl https://example.com/subscriptions \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /subscriptions`

<h3 id="get-all-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string(date-time)|false|Limits on `time_created`, Marks the start of a range, optionally use `before` to set the end. Result output excludes the given timestamp.|
|after_id|query|string|false|Limits directly on `id`. Marks the start of a range, optionally use `before_id` to set the end. Result output excludes the given `id` value. Please note that `id` is in chronological order.|
|before|query|string(dateTime)|false|Limits on `time_created`. Marks the end of a range, optionally use `after` to set the start. Result output excludes the given timestamp.|
|before_id|query|string|false|Limits directly on `id`. Marks the end of a range, optionally use `after_id` to set the start. Result output excludes the given `id` value. Please note that `id` is in chronological order.|
|from|query|string(dateTime)|false|Limits on `time_created`. Marks the start of a range, optionally use `until` to set the end. Result output includes the given timestamp.|
|from_id|query|string|false|Limits on `id`. Marks the start of a range, optionally use `until_id` to set the end. Result output includes the given `id` value. Please note that `id` is in chronological order.|
|id_only|query|boolean|false|Removes `url` fields from output and shows `_id` instead of `_url` in references.|
|limit|query|integer|false|Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.|
|populate|query|string|false|Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.|
|results_only|query|boolean|false|Removes response envelope with information about query, only sends back a JSON array with the applicable resources.|
|select|query|string|false|Select which properties should be returned. You may add multiple fields by giving a comma separated value. Select can also be used together with populate: Specify the resource first, then a period(.) followed by the field.|
|sort|query|string|false|Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).|
|until|query|string(dateTime)|false|Limits on `time_created`. Marks the end of a range, optionally use `from` to set the start. Result output includes the given timestamp.|
|until_id|query|string|false|Limits on `id`. Marks the end of a range, optionally use `from_id` to set the start. Result output includes the given `id` value. Please note that `id` is in chronological order.|
|timeout_s|query|number|false|Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.|
|id|query|[IdReadOnly](#schemaidreadonly)|false|Unique identifier|
|time_created|query|[TimeCreated](#schematimecreated)|false|Filter on the time the resource was created.|
|time_updated|query|[TimeUpdated](#schematimeupdated)|false|Filter on the time the resource was last updated|
|topic_filter|query|string|false|Filter on the topic filter. Make sure to use [percent-encoding](https://en.wikipedia.org/wiki/Percent-encoding) in the query parameter.|
|description|query|string|false|Filter based on the description.|
|database_hold_time_h|query|integer|false|Filter based on the number of hours events are retained in the database.|
|populate_events|query|boolean|false|Filter based on subscriptions that populate the events|
|verify_target_certificate|query|boolean|false|Filter on the verification of the target certificate.|

> Example responses

> 200 Response

```json
{
  "count": 293401,
  "count_current": 100,
  "is_limited": true,
  "next_url": "https://brain.intellifi.nl/api/items?before_id=5b599c427503c44239cf0399",
  "query_duration_ms": 42,
  "url": "https://brain.intellifi.nl/api/foobar",
  "results": [
    {
      "custom": {
        "foo": "bar"
      },
      "database_hold_time_h": 2,
      "description": "Item events",
      "events_url": "https://brain.intellifi.nl/api/foobar",
      "id": "5b7d6cbd7503c445552a1664",
      "populate_events": true,
      "target_delivery_last_failure": {},
      "target_delivery_status": {},
      "target_retry": true,
      "target_url": "string",
      "time_created": "2018-08-30T09:51:59.737Z",
      "time_updated": "2018-08-30T09:51:59.737Z",
      "topic_filter": "items/#",
      "url": "https://brain.intellifi.nl/api/foobar",
      "verify_target_certificate": true
    }
  ]
}
```

<h3 id="get-all-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing a list of subscriptions|Inline|

<h3 id="get-all-subscriptions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|The maximum number of items in the response (as set in the query or by default).|
|count_current|integer|false|none|The maximum number of items available to return.|
|is_limited|boolean|false|none|Becomes false when the number of results is smaller than limit.|
|next_url|string|false|none|URL to the next page of items. ( null if none)|
|query_duration_ms|integer|false|none|Amount of time, in milliseconds, the request needed to complete.|
|url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|
|results|[[Subscription](#schemasubscription)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Create subscription

<a id="opIdaddSubscription"></a>

> Code samples

```bash
curl https://example.com/subscriptions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}" \
  -d '{
    "custom": {
      "foo": "bar"
    },
    "database_hold_time_h": 2,
    "description": "Item events",
    "populate_events": true,
    "target_retry": true,
    "target_url": "string",
    "topic_filter": "items/#",
    "verify_target_certificate": true
  }'
```

`POST /subscriptions`

> Body parameter

```json
{
  "custom": {
    "foo": "bar"
  },
  "database_hold_time_h": 2,
  "description": "Item events",
  "populate_events": true,
  "target_retry": true,
  "target_url": "string",
  "topic_filter": "items/#",
  "verify_target_certificate": true
}
```

<h3 id="create-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Subscription](#schemasubscription)|true|A JSON object containing sibscription information|
|» custom|body|[Custom](#schemacustom)|false|The `custom` value is only for your custom references, you may use it to save additional attributes. The custom value is not used in any other place. This field may contain any datatype that you like: null (default), string, integer, boolean, object etc...|
|» database_hold_time_h|body|integer|false|The number of hours this event is retained in the database. *Only use larger numbers if you know what you are doing.* A couple of hours is enough for most use cases.|
|» description|body|string \| null|false|Additional field to add some notes about this subscription.|
|» populate_events|body|boolean|false|If set to `true`, resource references in an event (e.g. the location an item moved to) are resolved and populated with data instead of giving just an ID.|
|» target_retry|body|boolean|false|Set to `true` if you want our server to retry if `target_url` is not giving back a `2xx` success code.|
|» target_url|body|string|false|Url to an external service that all applicable events are pushed to (webhook). Configure to `null` if you don't wish to use this (default).|
|» topic_filter|body|string|false|MQTT filter that is applied to all events. Allows you to select and filter events. See [Event filtering](https://intellifi.zendesk.com/hc/en-us/articles/360008791494) for more information|
|» verify_target_certificate|body|boolean|false|Whether or not the `target_url` endpoint TLS certificate is verified to be valid.|

> Example responses

> 201 Response

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

<h3 id="create-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A JSON object containing the newly added resource|[ResponseDefaultResource](#schemaresponsedefaultresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Get subscription

<a id="opIdgetSubscriptionById"></a>

> Code samples

```bash
curl https://example.com/subscriptions/5b8d0b717503c445552a1865 \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /subscriptions/{id}`

<h3 id="get-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|

> Example responses

> 200 Response

```json
{
  "custom": {
    "foo": "bar"
  },
  "database_hold_time_h": 2,
  "description": "Item events",
  "events_url": "https://brain.intellifi.nl/api/foobar",
  "id": "5b7d6cbd7503c445552a1664",
  "populate_events": true,
  "target_delivery_last_failure": {},
  "target_delivery_status": {},
  "target_retry": true,
  "target_url": "string",
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_updated": "2018-08-30T09:51:59.737Z",
  "topic_filter": "items/#",
  "url": "https://brain.intellifi.nl/api/foobar",
  "verify_target_certificate": true
}
```

<h3 id="get-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the subscription|[Subscription](#schemasubscription)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Update existing subscription

<a id="opIdupdateSubscription"></a>

> Code samples

```bash
curl https://example.com/subscriptions/5b8d0b717503c445552a1865 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}" \
  -d '{
    "custom": {
      "foo": "bar"
    },
    "database_hold_time_h": 2,
    "description": "Item events",
    "populate_events": true,
    "target_retry": true,
    "target_url": "string",
    "topic_filter": "items/#",
    "verify_target_certificate": true
  }'
```

`PUT /subscriptions/{id}`

> Body parameter

```json
{
  "custom": {
    "foo": "bar"
  },
  "database_hold_time_h": 2,
  "description": "Item events",
  "populate_events": true,
  "target_retry": true,
  "target_url": "string",
  "topic_filter": "items/#",
  "verify_target_certificate": true
}
```

<h3 id="update-existing-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|
|body|body|[Subscription](#schemasubscription)|true|A JSON object containing sibscription information|
|» custom|body|[Custom](#schemacustom)|false|The `custom` value is only for your custom references, you may use it to save additional attributes. The custom value is not used in any other place. This field may contain any datatype that you like: null (default), string, integer, boolean, object etc...|
|» database_hold_time_h|body|integer|false|The number of hours this event is retained in the database. *Only use larger numbers if you know what you are doing.* A couple of hours is enough for most use cases.|
|» description|body|string \| null|false|Additional field to add some notes about this subscription.|
|» populate_events|body|boolean|false|If set to `true`, resource references in an event (e.g. the location an item moved to) are resolved and populated with data instead of giving just an ID.|
|» target_retry|body|boolean|false|Set to `true` if you want our server to retry if `target_url` is not giving back a `2xx` success code.|
|» target_url|body|string|false|Url to an external service that all applicable events are pushed to (webhook). Configure to `null` if you don't wish to use this (default).|
|» topic_filter|body|string|false|MQTT filter that is applied to all events. Allows you to select and filter events. See [Event filtering](https://intellifi.zendesk.com/hc/en-us/articles/360008791494) for more information|
|» verify_target_certificate|body|boolean|false|Whether or not the `target_url` endpoint TLS certificate is verified to be valid.|

> Example responses

> 200 Response

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

<h3 id="update-existing-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the modified resource|[ResponseDefaultResource](#schemaresponsedefaultresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Delete subscription

<a id="opIddeleteSubscription"></a>

> Code samples

```bash
curl https://example.com/subscriptions/5b8d0b717503c445552a1865 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`DELETE /subscriptions/{id}`

<h3 id="delete-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|

> Example responses

> 200 Response

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

<h3 id="delete-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the deleted resource|[ResponseDefaultResource](#schemaresponsedefaultresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

## Get subscription events

<a id="opIdgetEventsForSubscriptionById"></a>

> Code samples

```bash
curl https://example.com/subscriptions/5b8d0b717503c445552a1865/events \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /subscriptions/{id}/events`

<h3 id="get-subscription-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|
|after|query|string(date-time)|false|Limits on `time_created`, Marks the start of a range, optionally use `before` to set the end. Result output excludes the given timestamp.|
|after_id|query|string|false|Limits directly on `id`. Marks the start of a range, optionally use `before_id` to set the end. Result output excludes the given `id` value. Please note that `id` is in chronological order.|
|before|query|string(dateTime)|false|Limits on `time_created`. Marks the end of a range, optionally use `after` to set the start. Result output excludes the given timestamp.|
|before_id|query|string|false|Limits directly on `id`. Marks the end of a range, optionally use `after_id` to set the start. Result output excludes the given `id` value. Please note that `id` is in chronological order.|
|from|query|string(dateTime)|false|Limits on `time_created`. Marks the start of a range, optionally use `until` to set the end. Result output includes the given timestamp.|
|from_id|query|string|false|Limits on `id`. Marks the start of a range, optionally use `until_id` to set the end. Result output includes the given `id` value. Please note that `id` is in chronological order.|
|id_only|query|boolean|false|Removes `url` fields from output and shows `_id` instead of `_url` in references.|
|limit|query|integer|false|Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.|
|populate|query|string|false|Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.|
|results_only|query|boolean|false|Removes response envelope with information about query, only sends back a JSON array with the applicable resources.|
|select|query|string|false|Select which properties should be returned. You may add multiple fields by giving a comma separated value. Select can also be used together with populate: Specify the resource first, then a period(.) followed by the field.|
|sort|query|string|false|Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).|
|until|query|string(dateTime)|false|Limits on `time_created`. Marks the end of a range, optionally use `from` to set the start. Result output includes the given timestamp.|
|until_id|query|string|false|Limits on `id`. Marks the end of a range, optionally use `from_id` to set the start. Result output includes the given `id` value. Please note that `id` is in chronological order.|
|timeout_s|query|number|false|Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.|
|id|query|[IdReadOnly](#schemaidreadonly)|false|Unique identifier|
|time_created|query|[TimeCreated](#schematimecreated)|false|Filter on the time the resource was created.|
|topic.resource_type|query|[EventTopicResourceType](#schemaeventtopicresourcetype)|false|Filter on the topic resource type|
|topic.action|query|[EventTopicAction](#schemaeventtopicaction)|false|Filter on the topic action|
|topic.resource|query|[IdReadOnly](#schemaidreadonly)|false|Filter on the topic resource id|
|time_event|query|[TimeExpire](#schematimeexpire)|false|Filter on the time the event was generated on the device.|
|time_expire|query|[TimeExpire](#schematimeexpire)|false|Filter on the time the event will expire.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|topic.resource_type|blobs|
|topic.resource_type|items|
|topic.resource_type|keys|
|topic.resource_type|kvpairs|
|topic.resource_type|locations|
|topic.resource_type|presences|
|topic.resource_type|services|
|topic.resource_type|spots|
|topic.resource_type|subscriptions|
|topic.resource_type|users|
|topic.action|created|
|topic.action|updated|
|topic.action|deleted|
|topic.action|disappeared|
|topic.action|connection-rssi-changed|

> Example responses

> 200 Response

```json
{
  "count": 293401,
  "count_current": 100,
  "is_limited": true,
  "next_url": "https://brain.intellifi.nl/api/items?before_id=5b599c427503c44239cf0399",
  "query_duration_ms": 42,
  "url": "https://brain.intellifi.nl/api/foobar",
  "results": [
    {
      "id": "5b7d6cbd7503c445552a1664",
      "payload": {
        "foo": "bar"
      },
      "time_created": "2018-08-30T09:51:59.737Z",
      "time_event": "2018-08-30T09:51:59.737Z",
      "time_expire": "2018-08-30T09:51:59.737Z",
      "topic": {
        "action": "created",
        "arguments": {
          "foo": "bar"
        },
        "resource_id": "5b7d6cbd7503c445552a1664",
        "resource_type": "items",
        "resource_url": "https://brain.intellifi.nl/api/foobar"
      },
      "url": "https://brain.intellifi.nl/api/foobar"
    }
  ]
}
```

<h3 id="get-subscription-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the events for a specific subscription|Inline|

<h3 id="get-subscription-events-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|The maximum number of items in the response (as set in the query or by default).|
|count_current|integer|false|none|The maximum number of items available to return.|
|is_limited|boolean|false|none|Becomes false when the number of results is smaller than limit.|
|next_url|string|false|none|URL to the next page of items. ( null if none)|
|query_duration_ms|integer|false|none|Amount of time, in milliseconds, the request needed to complete.|
|url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|
|results|[[Event](#schemaevent)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid, HeaderApiKey, QueryApiKey
</aside>

<h1 id="brain-web-api-users">users</h1>

The `users` resource contains the user accounts that can log into the Brain Management Console.

Note that this resource is only accessible for administrator users logged into the Brain Management Console.
It is not possible to access this resource using API key authentication.
This resource is therefore irrelevant to most applications.


## Get all users

<a id="opIdgetUsers"></a>

> Code samples

```bash
curl https://example.com/users \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /users`

Can only be used by an **administrative** user.

<h3 id="get-all-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string(date-time)|false|Limits on `time_created`, Marks the start of a range, optionally use `before` to set the end. Result output excludes the given timestamp.|
|after_id|query|string|false|Limits directly on `id`. Marks the start of a range, optionally use `before_id` to set the end. Result output excludes the given `id` value. Please note that `id` is in chronological order.|
|before|query|string(dateTime)|false|Limits on `time_created`. Marks the end of a range, optionally use `after` to set the start. Result output excludes the given timestamp.|
|before_id|query|string|false|Limits directly on `id`. Marks the end of a range, optionally use `after_id` to set the start. Result output excludes the given `id` value. Please note that `id` is in chronological order.|
|from|query|string(dateTime)|false|Limits on `time_created`. Marks the start of a range, optionally use `until` to set the end. Result output includes the given timestamp.|
|from_id|query|string|false|Limits on `id`. Marks the start of a range, optionally use `until_id` to set the end. Result output includes the given `id` value. Please note that `id` is in chronological order.|
|id_only|query|boolean|false|Removes `url` fields from output and shows `_id` instead of `_url` in references.|
|limit|query|integer|false|Sets the maximum number of returned resources. You may increase this number to large values, keep in mind that query times could become large. We advise you to use the pagination feature whenever you can.|
|populate|query|string|false|Expand a reference into the actual resource (lookup). You may add multiple fields by giving a comma separated value.|
|results_only|query|boolean|false|Removes response envelope with information about query, only sends back a JSON array with the applicable resources.|
|select|query|string|false|Select which properties should be returned. You may add multiple fields by giving a comma separated value. Select can also be used together with populate: Specify the resource first, then a period(.) followed by the field.|
|sort|query|string|false|Allows you to sort on on or more fields in the resource. You may append a minus sign (`-`) to request reverse order (new to old).|
|until|query|string(dateTime)|false|Limits on `time_created`. Marks the end of a range, optionally use `from` to set the start. Result output includes the given timestamp.|
|until_id|query|string|false|Limits on `id`. Marks the end of a range, optionally use `from_id` to set the start. Result output includes the given `id` value. Please note that `id` is in chronological order.|
|timeout_s|query|number|false|Overrides the default query timeout (in seconds). A value of 0 means unlimited. IMPORTANT: using high timeouts in production code is strongly discouraged as it may lead to stability issues.|
|id|query|[IdReadOnly](#schemaidreadonly)|false|Unique identifier|
|time_created|query|[TimeCreated](#schematimecreated)|false|Filter on the time the resource was created.|
|time_updated|query|[TimeUpdated](#schematimeupdated)|false|Filter on the time the resource was last updated|
|email|query|string|false|Filter on the email address.|
|first_name|query|string|false|Filter on the first name.|
|last_name|query|string|false|Filter on the last name.|
|is_admin|query|boolean|false|Filter on the administrator status.|
|is_locked|query|boolean|false|Filter on the locked status.|

> Example responses

> 200 Response

```json
{
  "count": 293401,
  "count_current": 100,
  "is_limited": true,
  "next_url": "https://brain.intellifi.nl/api/items?before_id=5b599c427503c44239cf0399",
  "query_duration_ms": 42,
  "url": "https://brain.intellifi.nl/api/foobar",
  "results": [
    {
      "email": "user@intellifi.nl",
      "first_name": "Foo",
      "id": "5b7d6cbd7503c445552a1664",
      "is_admin": true,
      "is_locked": true,
      "last_name": "Bar",
      "time_created": "2018-08-30T09:51:59.737Z",
      "time_updated": "2018-08-30T09:51:59.737Z",
      "url": "https://brain.intellifi.nl/api/foobar"
    }
  ]
}
```

<h3 id="get-all-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing a list of users|Inline|

<h3 id="get-all-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|The maximum number of items in the response (as set in the query or by default).|
|count_current|integer|false|none|The maximum number of items available to return.|
|is_limited|boolean|false|none|Becomes false when the number of results is smaller than limit.|
|next_url|string|false|none|URL to the next page of items. ( null if none)|
|query_duration_ms|integer|false|none|Amount of time, in milliseconds, the request needed to complete.|
|url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|
|results|[[User](#schemauser)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid
</aside>

## Create user

<a id="opIdaddUser"></a>

> Code samples

```bash
curl https://example.com/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}" \
  -d '{
    "email": "user@intellifi.nl",
    "first_name": "Foo",
    "is_admin": true,
    "is_locked": true,
    "last_name": "Bar",
    "password": "password1"
  }'
```

`POST /users`

Can only be used by an **administrative** user.

> Body parameter

```json
{
  "email": "user@intellifi.nl",
  "first_name": "Foo",
  "is_admin": true,
  "is_locked": true,
  "last_name": "Bar",
  "password": "password1"
}
```

<h3 id="create-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[User](#schemauser)|true|A JSON object containing user information|
|» email|body|string|false|Email address|
|» first_name|body|string|false|First name|
|» is_admin|body|boolean|false|Whether or not this is an administrator.|
|» is_locked|body|boolean|false|Whether or not this user is locked and can't change the password.|
|» last_name|body|string|false|Last name|
|» password|body|string|false|Password of the user|

> Example responses

> 201 Response

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

<h3 id="create-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A JSON object containing the newly added resource|[ResponseDefaultResource](#schemaresponsedefaultresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid
</aside>

## Get user

<a id="opIdgetUserById"></a>

> Code samples

```bash
curl https://example.com/users/5b8d0b717503c445552a1865 \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`GET /users/{id}`

Can only be used by an **administrative** user.

<h3 id="get-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|

> Example responses

> 200 Response

```json
{
  "email": "user@intellifi.nl",
  "first_name": "Foo",
  "id": "5b7d6cbd7503c445552a1664",
  "is_admin": true,
  "is_locked": true,
  "last_name": "Bar",
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_updated": "2018-08-30T09:51:59.737Z",
  "url": "https://brain.intellifi.nl/api/foobar"
}
```

<h3 id="get-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the user|[User](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid
</aside>

## Update existing user

<a id="opIdupdateUser"></a>

> Code samples

```bash
curl https://example.com/users/5b8d0b717503c445552a1865 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}" \
  -d '{
    "email": "user@intellifi.nl",
    "first_name": "Foo",
    "is_admin": true,
    "is_locked": true,
    "last_name": "Bar",
    "password": "password1"
  }'
```

`PUT /users/{id}`

Can only be used by an **administrative** user.

> Body parameter

```json
{
  "email": "user@intellifi.nl",
  "first_name": "Foo",
  "is_admin": true,
  "is_locked": true,
  "last_name": "Bar",
  "password": "password1"
}
```

<h3 id="update-existing-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|
|body|body|[User](#schemauser)|true|A JSON object containing user information|
|» email|body|string|false|Email address|
|» first_name|body|string|false|First name|
|» is_admin|body|boolean|false|Whether or not this is an administrator.|
|» is_locked|body|boolean|false|Whether or not this user is locked and can't change the password.|
|» last_name|body|string|false|Last name|
|» password|body|string|false|Password of the user|

> Example responses

> 200 Response

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

<h3 id="update-existing-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the modified resource|[ResponseDefaultResource](#schemaresponsedefaultresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid
</aside>

## Delete user

<a id="opIddeleteUser"></a>

> Code samples

```bash
curl https://example.com/users/5b8d0b717503c445552a1865 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Cookie: brain.sid=${API_KEY}"
```

`DELETE /users/{id}`

Can only be used by an **administrative** user.

<h3 id="delete-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier|

> Example responses

> 200 Response

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

<h3 id="delete-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A JSON object containing the deleted resource|[ResponseDefaultResource](#schemaresponsedefaultresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
CookieSid
</aside>

# Schemas

<h2 id="tocS_Blob">Blob</h2>
<!-- backwards compatibility -->
<a id="schemablob"></a>
<a id="schema_Blob"></a>
<a id="tocSblob"></a>
<a id="tocsblob"></a>

```json
{
  "blob_key": "foobar",
  "content_type": "image/png",
  "download_url": "https://brain.intellifi.nl/api/foobar",
  "filename": "Foo bar",
  "hash": "50df961c6c099f778fa50647572ef21f4ef416d52f7e00e311d7dbca1a735f6a",
  "id": "5b7d6cbd7503c445552a1664",
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_last_accessed": "2018-08-30T09:51:59.737Z",
  "time_updated": "2018-08-30T09:51:59.737Z",
  "upload_url": "https://brain.intellifi.nl/api/foobar",
  "url": "https://brain.intellifi.nl/api/foobar"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blob_key|string|false|none|Unique key to the blob|
|content_type|string|false|none|Media type of the resource. Automatically detected when not given in a POST.|
|download_url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|
|filename|string|false|none|Filename of the blob|
|hash|string|false|read-only|Hash of the blob|
|id|[IdReadOnly](#schemaidreadonly)|false|read-only|Unique identifier for resource.|
|time_created|[TimeCreated](#schematimecreated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.|
|time_last_accessed|[TimeLastAccessed](#schematimelastaccessed)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was last accessed.|
|time_updated|[TimeUpdated](#schematimeupdated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.|
|upload_url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|
|url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|

<h2 id="tocS_BootCount">BootCount</h2>
<!-- backwards compatibility -->
<a id="schemabootcount"></a>
<a id="schema_BootCount"></a>
<a id="tocSbootcount"></a>
<a id="tocsbootcount"></a>

```json
22
```

Is increased with 1 when the service starts. Is never cleared (unless the database is adjusted).

<h2 id="tocS_CodeHex">CodeHex</h2>
<!-- backwards compatibility -->
<a id="schemacodehex"></a>
<a id="schema_CodeHex"></a>
<a id="tocScodehex"></a>
<a id="tocscodehex"></a>

```json
"deadbeef"
```

String representation of the unique code that this item transmits. By default this is a hexadecimal representation. This number could be so long (> 40 bytes!) that a decimal representation would be useless to generate.

<h2 id="tocS_Config">Config</h2>
<!-- backwards compatibility -->
<a id="schemaconfig"></a>
<a id="schema_Config"></a>
<a id="tocSconfig"></a>
<a id="tocsconfig"></a>

```json
{
  "foo": "bar"
}
```

JSON object with possible settings. Refer to individual service documentation for a good overview.

<h2 id="tocS_ConfigRequest">ConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconfigrequest"></a>
<a id="schema_ConfigRequest"></a>
<a id="tocSconfigrequest"></a>
<a id="tocsconfigrequest"></a>

```json
{
  "foo": "bar"
}
```

Object containing the new configuration. This will be applied automatically when the values are valid.

<h2 id="tocS_Custom">Custom</h2>
<!-- backwards compatibility -->
<a id="schemacustom"></a>
<a id="schema_Custom"></a>
<a id="tocScustom"></a>
<a id="tocscustom"></a>

```json
{
  "foo": "bar"
}
```

The `custom` value is only for your custom references, you may use it to save additional attributes. The custom value is not used in any other place. This field may contain any datatype that you like: null (default), string, integer, boolean, object etc...

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "id": "5b7d6cbd7503c445552a1664",
  "payload": {
    "foo": "bar"
  },
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_event": "2018-08-30T09:51:59.737Z",
  "time_expire": "2018-08-30T09:51:59.737Z",
  "topic": {
    "action": "created",
    "arguments": {
      "foo": "bar"
    },
    "resource_id": "5b7d6cbd7503c445552a1664",
    "resource_type": "items",
    "resource_url": "https://brain.intellifi.nl/api/foobar"
  },
  "url": "https://brain.intellifi.nl/api/foobar"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[IdReadOnly](#schemaidreadonly)|false|read-only|Unique identifier for resource.|
|payload|object|false|none|An object containing the payload, if any, of the event.|
|time_created|[TimeCreated](#schematimecreated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.|
|time_event|[TimeEvent](#schematimeevent)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this event was generated on the device. This is the device's own timestamp. Could be different due to buffering and clock differences.|
|time_expire|[TimeExpire](#schematimeexpire)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource is going to be deleted.|
|topic|object|false|none|none|
|url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|

<h2 id="tocS_EventTopicAction">EventTopicAction</h2>
<!-- backwards compatibility -->
<a id="schemaeventtopicaction"></a>
<a id="schema_EventTopicAction"></a>
<a id="tocSeventtopicaction"></a>
<a id="tocseventtopicaction"></a>

```json
"created"
```

Indicates the kind of event that was executed. In most cases it's a verb. I.e. 'connected', 'created' etc...

<h2 id="tocS_EventTopicArgument">EventTopicArgument</h2>
<!-- backwards compatibility -->
<a id="schemaeventtopicargument"></a>
<a id="schema_EventTopicArgument"></a>
<a id="tocSeventtopicargument"></a>
<a id="tocseventtopicargument"></a>

```json
{
  "foo": "bar"
}
```

Extra arguments may be added to a topic string, it depends on the `resource_type` and the `action` what extra arguments are added.

<h2 id="tocS_EventTopicResourceType">EventTopicResourceType</h2>
<!-- backwards compatibility -->
<a id="schemaeventtopicresourcetype"></a>
<a id="schema_EventTopicResourceType"></a>
<a id="tocSeventtopicresourcetype"></a>
<a id="tocseventtopicresourcetype"></a>

```json
"items"
```

The The available event topic resources types on the API. Is written in its plural form.

<h2 id="tocS_GeoCoords">GeoCoords</h2>
<!-- backwards compatibility -->
<a id="schemageocoords"></a>
<a id="schema_GeoCoords"></a>
<a id="tocSgeocoords"></a>
<a id="tocsgeocoords"></a>

```json
{
  "lat": 0,
  "lng": 0,
  "time_updated": "2018-08-30T09:51:59.737Z"
}
```

Last known geolocation estimate of this object. Not guaranteed to be included in response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lat|number|false|none|Latitude angle in degrees|
|lng|number|false|none|Longitude angle in degrees|
|time_updated|[TimeUpdated](#schematimeupdated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.|

<h2 id="tocS_GeoCoordsReadOnly">GeoCoordsReadOnly</h2>
<!-- backwards compatibility -->
<a id="schemageocoordsreadonly"></a>
<a id="schema_GeoCoordsReadOnly"></a>
<a id="tocSgeocoordsreadonly"></a>
<a id="tocsgeocoordsreadonly"></a>

```json
{
  "lat": 0,
  "lng": 0,
  "time_updated": "2018-08-30T09:51:59.737Z"
}
```

Last known geolocation estimate of this object. Not guaranteed to be included in response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lat|number|false|read-only|Latitude angle in degrees|
|lng|number|false|read-only|Longitude angle in degrees|
|time_updated|[TimeUpdated](#schematimeupdated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.|

<h2 id="tocS_Id">Id</h2>
<!-- backwards compatibility -->
<a id="schemaid"></a>
<a id="schema_Id"></a>
<a id="tocSid"></a>
<a id="tocsid"></a>

```json
"5b7d6cbd7503c445552a1664"
```

Unique identifier for resource.

<h2 id="tocS_IdReadOnly">IdReadOnly</h2>
<!-- backwards compatibility -->
<a id="schemaidreadonly"></a>
<a id="schema_IdReadOnly"></a>
<a id="tocSidreadonly"></a>
<a id="tocsidreadonly"></a>

```json
"5b7d6cbd7503c445552a1664"
```

Unique identifier for resource.

<h2 id="tocS_IsOnline">IsOnline</h2>
<!-- backwards compatibility -->
<a id="schemaisonline"></a>
<a id="schema_IsOnline"></a>
<a id="tocSisonline"></a>
<a id="tocsisonline"></a>

```json
true
```

Whether or not this resource is actively connected to the Brain.

<h2 id="tocS_Item">Item</h2>
<!-- backwards compatibility -->
<a id="schemaitem"></a>
<a id="schema_Item"></a>
<a id="tocSitem"></a>
<a id="tocsitem"></a>

```json
{
  "config_request": {
    "foo": "bar"
  },
  "custom": {
    "foo": "bar"
  },
  "label": "Foo Bar",
  "location_request": "5b7d6cbd7503c445552a1664",
  "metadata": {
    "foo": "bar"
  },
  "code_hex": "deadbeef",
  "geo_coords": {
    "lat": 0,
    "lng": 0,
    "time_updated": "2018-08-30T09:51:59.737Z"
  },
  "id": "5b7d6cbd7503c445552a1664",
  "is_present": true,
  "move_count": 4523,
  "protocol": "epcgen2",
  "sets": [
    "5b7d6cbd7503c445552a1664"
  ],
  "technology": "rfid",
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_last_present": "2018-08-30T09:51:59.737Z",
  "time_moved": "2018-08-30T09:51:59.737Z",
  "time_updated": "2018-08-30T09:51:59.737Z",
  "type": "tag",
  "url": "https://brain.intellifi.nl/api/foobar",
  "location": {
    "custom": {
      "foo": "bar"
    },
    "id": "5b7d6cbd7503c445552a1664",
    "label": "Foo Bar",
    "metadata": {
      "foo": "bar"
    },
    "time_created": "2018-08-30T09:51:59.737Z",
    "time_updated": "2018-08-30T09:51:59.737Z",
    "url": "https://brain.intellifi.nl/api/foobar"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config_request|[ConfigRequest](#schemaconfigrequest)|false|none|Object containing the new configuration. This will be applied automatically when the values are valid.|
|custom|[Custom](#schemacustom)|false|none|The `custom` value is only for your custom references, you may use it to save additional attributes. The custom value is not used in any other place. This field may contain any datatype that you like: null (default), string, integer, boolean, object etc...|
|label|[Label](#schemalabel)|false|none|A name or a label for this resource. This is used in the user interface, may be empty.|
|location_request|[LocationRequest](#schemalocationrequest)|false|none|Instruction for the location engine to forcibly localize the item at the specified location id as soon as possible. Cleared automatically.|
|metadata|[Metadata](#schemametadata)|false|none|Object of searchable metadata for this resource. Can be freely used to store metadata properties.|
|code_hex|[CodeHex](#schemacodehex)|false|none|String representation of the unique code that this item transmits. By default this is a hexadecimal representation. This number could be so long (> 40 bytes!) that a decimal representation would be useless to generate.|
|geo_coords|[GeoCoordsReadOnly](#schemageocoordsreadonly)|false|read-only|Last known geolocation estimate of this object. Not guaranteed to be included in response.|
|id|[IdReadOnly](#schemaidreadonly)|false|read-only|Unique identifier for resource.|
|is_present|boolean|false|read-only|Is this item actively detected in one of the zones at this moment? True when it is, false if it's not.|
|move_count|[MoveCount](#schemamovecount)|false|read-only|How many times this item moved since it's created on this server. Note that it is likely that not all moved events are available in the events (they are deleted after a configurable number of time). This field is never decreases. It gives a good indication of the usage of this item.|
|protocol|[ItemProtocol](#schemaitemprotocol)|false|none|Type of protocol that was used to decode this item.|
|sets|[ListOfSetIds](#schemalistofsetids)|false|read-only|List of set ids|
|technology|[Technology](#schematechnology)|false|none|Type of technology that was used to detect this item.|
|time_created|[TimeCreated](#schematimecreated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.|
|time_last_present|string(dateTime)|false|read-only|Last time the item was present.|
|time_moved|[TimeMoved](#schematimemoved)|false|read-only|Last time this item moved. This is the last time that the location for this item was changed.|
|time_updated|[TimeUpdated](#schematimeupdated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.|
|type|[ItemType](#schemaitemtype)|false|none|Type of item.|
|url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|
|*oneOf*|object|false|none|none|
|location|[Location](#schemalocation)|false|read-only|Reference to the location resource where the item is located. Or, if the item is out of reach, the last known location. Only returned when populate is set to 'location'|
|*oneOf*|object|false|none|none|
|location_id|[IdReadOnly](#schemaidreadonly)|false|read-only|Unique identifier for resource.|
|*oneOf*|object|false|none|none|
|location_url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|

#### Enumerated Values

|Property|Value|
|---|---|
|protocol|altbeacon|
|protocol|uniwear|
|protocol|nfc|
|protocol|generic|
|protocol|eddystone|
|protocol|epcgen2|
|protocol|ibeacon|
|protocol|nanoble|
|technology|bluetooth|
|technology|optical|
|technology|rfid|
|type|barcode|
|type|bluetitan|
|type|gbtag|
|type|relay|
|type|smarttag|
|type|tag|

<h2 id="tocS_ItemList">ItemList</h2>
<!-- backwards compatibility -->
<a id="schemaitemlist"></a>
<a id="schema_ItemList"></a>
<a id="tocSitemlist"></a>
<a id="tocsitemlist"></a>

```json
{
  "custom": {
    "foo": "bar"
  },
  "id": "5b7d6cbd7503c445552a1664",
  "label": "Foo Bar",
  "list": "https://brain.intellifi.nl/api/foobar",
  "metadata": {
    "foo": "bar"
  },
  "sha1": "string",
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_updated": "2018-08-30T09:51:59.737Z",
  "total": 2
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|custom|[Custom](#schemacustom)|false|none|The `custom` value is only for your custom references, you may use it to save additional attributes. The custom value is not used in any other place. This field may contain any datatype that you like: null (default), string, integer, boolean, object etc...|
|id|[IdReadOnly](#schemaidreadonly)|false|read-only|Unique identifier for resource.|
|label|[Label](#schemalabel)|false|none|A name or a label for this resource. This is used in the user interface, may be empty.|
|list|[Url](#schemaurl)|false|read-only|Url to the individual resource.|
|metadata|[Metadata](#schemametadata)|false|none|Object of searchable metadata for this resource. Can be freely used to store metadata properties.|
|sha1|string|false|read-only|The sha1 checksum of the list. This will change when the list is mutated.|
|time_created|[TimeCreated](#schematimecreated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.|
|time_updated|[TimeUpdated](#schematimeupdated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.|
|total|integer|false|read-only|Total amount of items in this set|

<h2 id="tocS_ItemProtocol">ItemProtocol</h2>
<!-- backwards compatibility -->
<a id="schemaitemprotocol"></a>
<a id="schema_ItemProtocol"></a>
<a id="tocSitemprotocol"></a>
<a id="tocsitemprotocol"></a>

```json
"epcgen2"
```

Type of protocol that was used to decode this item.

<h2 id="tocS_ItemType">ItemType</h2>
<!-- backwards compatibility -->
<a id="schemaitemtype"></a>
<a id="schema_ItemType"></a>
<a id="tocSitemtype"></a>
<a id="tocsitemtype"></a>

```json
"tag"
```

Type of item.

<h2 id="tocS_ItemUpdate">ItemUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaitemupdate"></a>
<a id="schema_ItemUpdate"></a>
<a id="tocSitemupdate"></a>
<a id="tocsitemupdate"></a>

```json
{
  "config_request": {
    "foo": "bar"
  },
  "custom": {
    "foo": "bar"
  },
  "label": "Foo Bar",
  "location_request": "5b7d6cbd7503c445552a1664",
  "metadata": {
    "foo": "bar"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config_request|[ConfigRequest](#schemaconfigrequest)|false|none|Object containing the new configuration. This will be applied automatically when the values are valid.|
|custom|[Custom](#schemacustom)|false|none|The `custom` value is only for your custom references, you may use it to save additional attributes. The custom value is not used in any other place. This field may contain any datatype that you like: null (default), string, integer, boolean, object etc...|
|label|[Label](#schemalabel)|false|none|A name or a label for this resource. This is used in the user interface, may be empty.|
|location_request|[LocationRequest](#schemalocationrequest)|false|none|Instruction for the location engine to forcibly localize the item at the specified location id as soon as possible. Cleared automatically.|
|metadata|[Metadata](#schemametadata)|false|none|Object of searchable metadata for this resource. Can be freely used to store metadata properties.|

<h2 id="tocS_Key">Key</h2>
<!-- backwards compatibility -->
<a id="schemakey"></a>
<a id="schema_Key"></a>
<a id="tocSkey"></a>
<a id="tocskey"></a>

```json
{
  "id": "5b7d6cbd7503c445552a1664",
  "is_read_only": true,
  "label": "string",
  "secret": "59cb1e86-a08d-44c9-9b37-c27f4ccd97f4",
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_updated": "2018-08-30T09:51:59.737Z",
  "url": "https://brain.intellifi.nl/api/foobar"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[IdReadOnly](#schemaidreadonly)|false|read-only|Unique identifier for resource.|
|is_read_only|boolean|false|none|Whether or not this key can only read and not write.|
|label|string|false|none|Custom label for this API key.|
|secret|string|false|read-only|The secret token for authentication.|
|time_created|[TimeCreated](#schematimecreated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.|
|time_updated|[TimeUpdated](#schematimeupdated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.|
|url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|

<h2 id="tocS_KeyValuePair">KeyValuePair</h2>
<!-- backwards compatibility -->
<a id="schemakeyvaluepair"></a>
<a id="schema_KeyValuePair"></a>
<a id="tocSkeyvaluepair"></a>
<a id="tocskeyvaluepair"></a>

```json
{
  "kv_value": "all the bars",
  "id": "5b7d6cbd7503c445552a1664",
  "kv_key": "foo",
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_updated": "2018-08-30T09:51:59.737Z",
  "url": "https://brain.intellifi.nl/api/foobar"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kv_value|object \| null|false|none|The value of the key value pair.|
|id|[IdReadOnly](#schemaidreadonly)|false|read-only|Unique identifier for resource.|
|kv_key|string|false|none|Unique identifier for the value.|
|kv_value|object \| null|false|none|The value of the key value pair.|
|time_created|[TimeCreated](#schematimecreated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.|
|time_updated|[TimeUpdated](#schematimeupdated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.|
|url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|

<h2 id="tocS_KeyValuePairUpdate">KeyValuePairUpdate</h2>
<!-- backwards compatibility -->
<a id="schemakeyvaluepairupdate"></a>
<a id="schema_KeyValuePairUpdate"></a>
<a id="tocSkeyvaluepairupdate"></a>
<a id="tocskeyvaluepairupdate"></a>

```json
{
  "kv_value": "all the bars"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kv_value|object \| null|false|none|The value of the key value pair.|

<h2 id="tocS_Label">Label</h2>
<!-- backwards compatibility -->
<a id="schemalabel"></a>
<a id="schema_Label"></a>
<a id="tocSlabel"></a>
<a id="tocslabel"></a>

```json
"Foo Bar"
```

A name or a label for this resource. This is used in the user interface, may be empty.

<h2 id="tocS_ListOfItemIds">ListOfItemIds</h2>
<!-- backwards compatibility -->
<a id="schemalistofitemids"></a>
<a id="schema_ListOfItemIds"></a>
<a id="tocSlistofitemids"></a>
<a id="tocslistofitemids"></a>

```json
[
  "5b7d6cbd7503c445552a1664"
]
```

List of item ids

<h2 id="tocS_ListOfSetIds">ListOfSetIds</h2>
<!-- backwards compatibility -->
<a id="schemalistofsetids"></a>
<a id="schema_ListOfSetIds"></a>
<a id="tocSlistofsetids"></a>
<a id="tocslistofsetids"></a>

```json
[
  "5b7d6cbd7503c445552a1664"
]
```

List of set ids

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "custom": {
    "foo": "bar"
  },
  "id": "5b7d6cbd7503c445552a1664",
  "label": "Foo Bar",
  "metadata": {
    "foo": "bar"
  },
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_updated": "2018-08-30T09:51:59.737Z",
  "url": "https://brain.intellifi.nl/api/foobar"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|custom|[Custom](#schemacustom)|false|none|The `custom` value is only for your custom references, you may use it to save additional attributes. The custom value is not used in any other place. This field may contain any datatype that you like: null (default), string, integer, boolean, object etc...|
|id|[IdReadOnly](#schemaidreadonly)|false|read-only|Unique identifier for resource.|
|label|[Label](#schemalabel)|false|none|A name or a label for this resource. This is used in the user interface, may be empty.|
|metadata|[Metadata](#schemametadata)|false|none|Object of searchable metadata for this resource. Can be freely used to store metadata properties.|
|time_created|[TimeCreated](#schematimecreated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.|
|time_updated|[TimeUpdated](#schematimeupdated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.|
|url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|

<h2 id="tocS_LocationRequest">LocationRequest</h2>
<!-- backwards compatibility -->
<a id="schemalocationrequest"></a>
<a id="schema_LocationRequest"></a>
<a id="tocSlocationrequest"></a>
<a id="tocslocationrequest"></a>

```json
"5b7d6cbd7503c445552a1664"
```

Instruction for the location engine to forcibly localize the item at the specified location id as soon as possible. Cleared automatically.

<h2 id="tocS_LocationRule">LocationRule</h2>
<!-- backwards compatibility -->
<a id="schemalocationrule"></a>
<a id="schema_LocationRule"></a>
<a id="tocSlocationrule"></a>
<a id="tocslocationrule"></a>

```json
{
  "conditions": {
    "from_location": {
      "custom": {
        "foo": "bar"
      },
      "id": "5b7d6cbd7503c445552a1664",
      "label": "Foo Bar",
      "metadata": {
        "foo": "bar"
      },
      "time_created": "2018-08-30T09:51:59.737Z",
      "time_updated": "2018-08-30T09:51:59.737Z",
      "url": "https://brain.intellifi.nl/api/foobar"
    }
  },
  "enabled": true,
  "id": "5b7d6cbd7503c445552a1664",
  "label": "Foo Bar",
  "parameters": {},
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_updated": "2018-08-30T09:51:59.737Z",
  "type": "allow",
  "url": "https://brain.intellifi.nl/api/foobar"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|object|false|none|Scope of this rule, e.g. moves at or away from a specific location or towards a specific location.|
|enabled|[RuleEnabled](#schemaruleenabled)|false|none|Whether this rule should be in effect (`true`) or on hold (`false`).|
|id|[IdReadOnly](#schemaidreadonly)|false|read-only|Unique identifier for resource.|
|label|[Label](#schemalabel)|false|none|A name or a label for this resource. This is used in the user interface, may be empty.|
|parameters|[LocationRuleParameters](#schemalocationruleparameters)|false|none|Parameters for this rule; depends on the rule type. Refer to the rule type specification for details.|
|time_created|[TimeCreated](#schematimecreated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.|
|time_updated|[TimeUpdated](#schematimeupdated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.|
|type|[LocationRuleType](#schemalocationruletype)|false|none|The type of location rule to be applied.<br>Allow: items at `conditions.from_location` can only move to `conditions.to_location` and locations allowed in other `allow` rules (destination whitelist).<br>Disallow: items at `conditions.from_location` cannot be moved to `conditions.to_location` and locations disallowed in other `disallow` rules (destination blacklist).<br>Disappeared: items disappearing at `conditions.from_location` will be moved to `parameters.location` after `parameters.time_s` seconds.<br>Debounce: items moves from `conditions.from_location` (and optionally to `conditions.to_location`) will be debounced with a period of `parameters.time_s` seconds, for a maximum of `parameters.max_periods` periods.<br>|
|url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|allow|
|type|disallow|
|type|disappeared|
|type|debounce|

<h2 id="tocS_LocationRuleParameters">LocationRuleParameters</h2>
<!-- backwards compatibility -->
<a id="schemalocationruleparameters"></a>
<a id="schema_LocationRuleParameters"></a>
<a id="tocSlocationruleparameters"></a>
<a id="tocslocationruleparameters"></a>

```json
{}
```

Parameters for this rule; depends on the rule type. Refer to the rule type specification for details.

<h2 id="tocS_LocationRuleType">LocationRuleType</h2>
<!-- backwards compatibility -->
<a id="schemalocationruletype"></a>
<a id="schema_LocationRuleType"></a>
<a id="tocSlocationruletype"></a>
<a id="tocslocationruletype"></a>

```json
"allow"
```

The type of location rule to be applied.
Allow: items at `conditions.from_location` can only move to `conditions.to_location` and locations allowed in other `allow` rules (destination whitelist).
Disallow: items at `conditions.from_location` cannot be moved to `conditions.to_location` and locations disallowed in other `disallow` rules (destination blacklist).
Disappeared: items disappearing at `conditions.from_location` will be moved to `parameters.location` after `parameters.time_s` seconds.
Debounce: items moves from `conditions.from_location` (and optionally to `conditions.to_location`) will be debounced with a period of `parameters.time_s` seconds, for a maximum of `parameters.max_periods` periods.

<h2 id="tocS_LocationRuleUpdate">LocationRuleUpdate</h2>
<!-- backwards compatibility -->
<a id="schemalocationruleupdate"></a>
<a id="schema_LocationRuleUpdate"></a>
<a id="tocSlocationruleupdate"></a>
<a id="tocslocationruleupdate"></a>

```json
{
  "conditions": {
    "from_location": "5b7d6cbd7503c445552a1664",
    "to_location": "5b7d6cbd7503c445552a1664"
  },
  "enabled": true,
  "label": "Foo Bar",
  "parameters": {},
  "type": "allow"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|object|false|none|Scope of this rule, e.g. moves at or away from a specific location or towards a specific location. The `from_location` is mandatory. The `to_location` is either mandatory, optional or not allowed depending on rule type.|
|enabled|[RuleEnabled](#schemaruleenabled)|false|none|Whether this rule should be in effect (`true`) or on hold (`false`).|
|label|[Label](#schemalabel)|false|none|A name or a label for this resource. This is used in the user interface, may be empty.|
|parameters|[LocationRuleParameters](#schemalocationruleparameters)|false|none|Parameters for this rule; depends on the rule type. Refer to the rule type specification for details.|
|type|[LocationRuleType](#schemalocationruletype)|false|none|The type of location rule to be applied.<br>Allow: items at `conditions.from_location` can only move to `conditions.to_location` and locations allowed in other `allow` rules (destination whitelist).<br>Disallow: items at `conditions.from_location` cannot be moved to `conditions.to_location` and locations disallowed in other `disallow` rules (destination blacklist).<br>Disappeared: items disappearing at `conditions.from_location` will be moved to `parameters.location` after `parameters.time_s` seconds.<br>Debounce: items moves from `conditions.from_location` (and optionally to `conditions.to_location`) will be debounced with a period of `parameters.time_s` seconds, for a maximum of `parameters.max_periods` periods.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|allow|
|type|disallow|
|type|disappeared|
|type|debounce|

<h2 id="tocS_Metadata">Metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_Metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
{
  "foo": "bar"
}
```

Object of searchable metadata for this resource. Can be freely used to store metadata properties.

<h2 id="tocS_MoveCount">MoveCount</h2>
<!-- backwards compatibility -->
<a id="schemamovecount"></a>
<a id="schema_MoveCount"></a>
<a id="tocSmovecount"></a>
<a id="tocsmovecount"></a>

```json
4523
```

How many times this item moved since it's created on this server. Note that it is likely that not all moved events are available in the events (they are deleted after a configurable number of time). This field is never decreases. It gives a good indication of the usage of this item.

<h2 id="tocS_Name">Name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
"Foo Bar"
```

Human readable name for the resource.

<h2 id="tocS_Presence">Presence</h2>
<!-- backwards compatibility -->
<a id="schemapresence"></a>
<a id="schema_Presence"></a>
<a id="tocSpresence"></a>
<a id="tocspresence"></a>

```json
{
  "id": "5b7d6cbd7503c445552a1664",
  "item": {
    "config_request": {
      "foo": "bar"
    },
    "custom": {
      "foo": "bar"
    },
    "label": "Foo Bar",
    "location_request": "5b7d6cbd7503c445552a1664",
    "metadata": {
      "foo": "bar"
    },
    "code_hex": "deadbeef",
    "geo_coords": {
      "lat": 0,
      "lng": 0,
      "time_updated": "2018-08-30T09:51:59.737Z"
    },
    "id": "5b7d6cbd7503c445552a1664",
    "is_present": true,
    "move_count": 4523,
    "protocol": "epcgen2",
    "sets": [
      "5b7d6cbd7503c445552a1664"
    ],
    "technology": "rfid",
    "time_created": "2018-08-30T09:51:59.737Z",
    "time_last_present": "2018-08-30T09:51:59.737Z",
    "time_moved": "2018-08-30T09:51:59.737Z",
    "time_updated": "2018-08-30T09:51:59.737Z",
    "type": "tag",
    "url": "https://brain.intellifi.nl/api/foobar",
    "location": {
      "custom": {
        "foo": "bar"
      },
      "id": "5b7d6cbd7503c445552a1664",
      "label": "Foo Bar",
      "metadata": {
        "foo": "bar"
      },
      "time_created": "2018-08-30T09:51:59.737Z",
      "time_updated": "2018-08-30T09:51:59.737Z",
      "url": "https://brain.intellifi.nl/api/foobar"
    }
  },
  "item_id": "5b7d6cbd7503c445552a1664",
  "item_url": "https://brain.intellifi.nl/api/foobar",
  "location": {
    "custom": {
      "foo": "bar"
    },
    "id": "5b7d6cbd7503c445552a1664",
    "label": "Foo Bar",
    "metadata": {
      "foo": "bar"
    },
    "time_created": "2018-08-30T09:51:59.737Z",
    "time_updated": "2018-08-30T09:51:59.737Z",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "location_id": "5b7d6cbd7503c445552a1664",
  "location_url": "https://brain.intellifi.nl/api/foobar",
  "proximity": "immediate",
  "technology": "rfid",
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_updated": "2018-08-30T09:51:59.737Z",
  "url": "https://brain.intellifi.nl/api/foobar"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[IdReadOnly](#schemaidreadonly)|false|read-only|Unique identifier for resource.|
|item|[Item](#schemaitem)|false|none|none|
|item_id|[IdReadOnly](#schemaidreadonly)|false|read-only|Unique identifier for resource.|
|item_url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|
|location|[Location](#schemalocation)|false|read-only|none|
|location_id|[IdReadOnly](#schemaidreadonly)|false|read-only|Unique identifier for resource.|
|location_url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|
|proximity|[Proximity](#schemaproximity)|false|none|Strongest proximity of all 'child' presences. This is a rough estimate on the distance from the item to the receiver.|
|technology|[Technology](#schematechnology)|false|none|Type of technology that was used to detect this item.|
|time_created|[TimeCreated](#schematimecreated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.|
|time_updated|[TimeUpdated](#schematimeupdated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.|
|url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|

#### Enumerated Values

|Property|Value|
|---|---|
|proximity|far|
|proximity|near|
|proximity|immediate|
|technology|bluetooth|
|technology|optical|
|technology|rfid|

<h2 id="tocS_Proximity">Proximity</h2>
<!-- backwards compatibility -->
<a id="schemaproximity"></a>
<a id="schema_Proximity"></a>
<a id="tocSproximity"></a>
<a id="tocsproximity"></a>

```json
"immediate"
```

Strongest proximity of all 'child' presences. This is a rough estimate on the distance from the item to the receiver.

<h2 id="tocS_RequestCounter">RequestCounter</h2>
<!-- backwards compatibility -->
<a id="schemarequestcounter"></a>
<a id="schema_RequestCounter"></a>
<a id="tocSrequestcounter"></a>
<a id="tocsrequestcounter"></a>

```json
73807
```

The total number of HTTP requests that this resource has done.

<h2 id="tocS_ResponseDefaultResource">ResponseDefaultResource</h2>
<!-- backwards compatibility -->
<a id="schemaresponsedefaultresource"></a>
<a id="schema_ResponseDefaultResource"></a>
<a id="tocSresponsedefaultresource"></a>
<a id="tocsresponsedefaultresource"></a>

```json
{
  "resource": {
    "id": "5b7d6cbd7503c445552a1664",
    "url": "https://brain.intellifi.nl/api/foobar"
  },
  "status": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resource|object|false|none|none|
|status|integer|false|none|Status code|

<h2 id="tocS_ResponseEnvelope">ResponseEnvelope</h2>
<!-- backwards compatibility -->
<a id="schemaresponseenvelope"></a>
<a id="schema_ResponseEnvelope"></a>
<a id="tocSresponseenvelope"></a>
<a id="tocsresponseenvelope"></a>

```json
{
  "count": 293401,
  "count_current": 100,
  "is_limited": true,
  "next_url": "https://brain.intellifi.nl/api/items?before_id=5b599c427503c44239cf0399",
  "query_duration_ms": 42,
  "url": "https://brain.intellifi.nl/api/foobar"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|The maximum number of items in the response (as set in the query or by default).|
|count_current|integer|false|none|The maximum number of items available to return.|
|is_limited|boolean|false|none|Becomes false when the number of results is smaller than limit.|
|next_url|string|false|none|URL to the next page of items. ( null if none)|
|query_duration_ms|integer|false|none|Amount of time, in milliseconds, the request needed to complete.|
|url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|

<h2 id="tocS_ResponseListResource">ResponseListResource</h2>
<!-- backwards compatibility -->
<a id="schemaresponselistresource"></a>
<a id="schema_ResponseListResource"></a>
<a id="tocSresponselistresource"></a>
<a id="tocsresponselistresource"></a>

```json
{
  "status": 200,
  "total": 2
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|false|none|Status code|
|total|integer|false|none|Total items in the list|

<h2 id="tocS_RestartRequest">RestartRequest</h2>
<!-- backwards compatibility -->
<a id="schemarestartrequest"></a>
<a id="schema_RestartRequest"></a>
<a id="tocSrestartrequest"></a>
<a id="tocsrestartrequest"></a>

```json
true
```

Set this to `true` to send a reset request for the specific resource.

<h2 id="tocS_RuleEnabled">RuleEnabled</h2>
<!-- backwards compatibility -->
<a id="schemaruleenabled"></a>
<a id="schema_RuleEnabled"></a>
<a id="tocSruleenabled"></a>
<a id="tocsruleenabled"></a>

```json
true
```

Whether this rule should be in effect (`true`) or on hold (`false`).

<h2 id="tocS_Senses">Senses</h2>
<!-- backwards compatibility -->
<a id="schemasenses"></a>
<a id="schema_Senses"></a>
<a id="tocSsenses"></a>
<a id="tocssenses"></a>

```json
{
  "foo": "bar"
}
```

Senses are values that in most cases are generated inside the spot (number of presences, spot booted etc.). We also have a few senses that can be controlled by the brain. See [Sense & Control](https://intellifi.zendesk.com/hc/en-us/sections/360001568254) documentation for more information.

<h2 id="tocS_SensesRequest">SensesRequest</h2>
<!-- backwards compatibility -->
<a id="schemasensesrequest"></a>
<a id="schema_SensesRequest"></a>
<a id="tocSsensesrequest"></a>
<a id="tocssensesrequest"></a>

```json
{
  "foo": "bar"
}
```

Object containing the new senses configuration. See [Sense & Control](https://intellifi.zendesk.com/hc/en-us/sections/360001568254) documentation for more information.

<h2 id="tocS_SerialNumber">SerialNumber</h2>
<!-- backwards compatibility -->
<a id="schemaserialnumber"></a>
<a id="schema_SerialNumber"></a>
<a id="tocSserialnumber"></a>
<a id="tocsserialnumber"></a>

```json
1337
```

This is the fixed and unique spot number. It's assigned during the production process and used to identify an individual device during its lifetime.

<h2 id="tocS_Service">Service</h2>
<!-- backwards compatibility -->
<a id="schemaservice"></a>
<a id="schema_Service"></a>
<a id="tocSservice"></a>
<a id="tocsservice"></a>

```json
{
  "boot_count": 22,
  "config": {
    "foo": "bar"
  },
  "config_request": {
    "foo": "bar"
  },
  "id": "5b7d6cbd7503c445552a1664",
  "name": "Foo Bar",
  "restart_request": true,
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_updated": "2018-08-30T09:51:59.737Z",
  "url": "https://brain.intellifi.nl/api/foobar",
  "version": "1.2.3"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boot_count|[BootCount](#schemabootcount)|false|read-only|Is increased with 1 when the service starts. Is never cleared (unless the database is adjusted).|
|config|[Config](#schemaconfig)|false|read-only|JSON object with possible settings. Refer to individual service documentation for a good overview.|
|config_request|[ConfigRequest](#schemaconfigrequest)|false|none|Object containing the new configuration. This will be applied automatically when the values are valid.|
|id|[IdReadOnly](#schemaidreadonly)|false|read-only|Unique identifier for resource.|
|name|[Name](#schemaname)|false|read-only|Human readable name for the resource.|
|restart_request|[RestartRequest](#schemarestartrequest)|false|none|Set this to `true` to send a reset request for the specific resource.|
|time_created|[TimeCreated](#schematimecreated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.|
|time_updated|[TimeUpdated](#schematimeupdated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.|
|url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|
|version|[Version](#schemaversion)|false|read-only|Current running version of the resource.|

<h2 id="tocS_SpotBase">SpotBase</h2>
<!-- backwards compatibility -->
<a id="schemaspotbase"></a>
<a id="schema_SpotBase"></a>
<a id="tocSspotbase"></a>
<a id="tocsspotbase"></a>

```json
{
  "antenna_report_locations": [
    {
      "antenna_number": 1,
      "report_location": {
        "custom": {
          "foo": "bar"
        },
        "id": "5b7d6cbd7503c445552a1664",
        "label": "Foo Bar",
        "metadata": {
          "foo": "bar"
        },
        "time_created": "2018-08-30T09:51:59.737Z",
        "time_updated": "2018-08-30T09:51:59.737Z",
        "url": "https://brain.intellifi.nl/api/foobar"
      },
      "report_location_id": "5b7d6cbd7503c445552a1664",
      "report_location_url": "https://brain.intellifi.nl/api/foobar"
    }
  ],
  "config": {
    "foo": "bar"
  },
  "config_request": {
    "foo": "bar"
  },
  "geo_coords": {
    "lat": 0,
    "lng": 0,
    "time_updated": "2018-08-30T09:51:59.737Z"
  },
  "id": "5b7d6cbd7503c445552a1664",
  "is_online": true,
  "request_counter": 73807,
  "senses": {
    "foo": "bar"
  },
  "senses_request": {
    "foo": "bar"
  },
  "serial_number": 1337,
  "status": {
    "foo": "bar"
  },
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_updated": "2018-08-30T09:51:59.737Z",
  "url": "https://brain.intellifi.nl/api/foobar"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|antenna_report_locations|[object]|false|none|You may configure this field to an object which couples individual antenna ports to locations.|
|config|[Config](#schemaconfig)|false|read-only|JSON object with possible settings. Refer to individual service documentation for a good overview.|
|config_request|[ConfigRequest](#schemaconfigrequest)|false|none|Object containing the new configuration. This will be applied automatically when the values are valid.|
|geo_coords|[GeoCoords](#schemageocoords)|false|none|Last known geolocation estimate of this object. Not guaranteed to be included in response.|
|id|[IdReadOnly](#schemaidreadonly)|false|read-only|Unique identifier for resource.|
|is_online|[IsOnline](#schemaisonline)|false|read-only|Whether or not this resource is actively connected to the Brain.|
|request_counter|[RequestCounter](#schemarequestcounter)|false|read-only|The total number of HTTP requests that this resource has done.|
|senses|[Senses](#schemasenses)|false|read-only|Senses are values that in most cases are generated inside the spot (number of presences, spot booted etc.). We also have a few senses that can be controlled by the brain. See [Sense & Control](https://intellifi.zendesk.com/hc/en-us/sections/360001568254) documentation for more information.|
|senses_request|[SensesRequest](#schemasensesrequest)|false|none|Object containing the new senses configuration. See [Sense & Control](https://intellifi.zendesk.com/hc/en-us/sections/360001568254) documentation for more information.|
|serial_number|[SerialNumber](#schemaserialnumber)|false|read-only|This is the fixed and unique spot number. It's assigned during the production process and used to identify an individual device during its lifetime.|
|status|object|false|read-only|An object with specific information about the spot, directly send by the spot itself when the connection is created.|
|time_created|[TimeCreated](#schematimecreated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.|
|time_updated|[TimeUpdated](#schematimeupdated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.|
|url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|

<h2 id="tocS_SpotGet">SpotGet</h2>
<!-- backwards compatibility -->
<a id="schemaspotget"></a>
<a id="schema_SpotGet"></a>
<a id="tocSspotget"></a>
<a id="tocsspotget"></a>

```json
{
  "antenna_report_locations": [
    {
      "antenna_number": 1,
      "report_location": {
        "custom": {
          "foo": "bar"
        },
        "id": "5b7d6cbd7503c445552a1664",
        "label": "Foo Bar",
        "metadata": {
          "foo": "bar"
        },
        "time_created": "2018-08-30T09:51:59.737Z",
        "time_updated": "2018-08-30T09:51:59.737Z",
        "url": "https://brain.intellifi.nl/api/foobar"
      },
      "report_location_id": "5b7d6cbd7503c445552a1664",
      "report_location_url": "https://brain.intellifi.nl/api/foobar"
    }
  ],
  "config": {
    "foo": "bar"
  },
  "config_request": {
    "foo": "bar"
  },
  "geo_coords": {
    "lat": 0,
    "lng": 0,
    "time_updated": "2018-08-30T09:51:59.737Z"
  },
  "id": "5b7d6cbd7503c445552a1664",
  "is_online": true,
  "request_counter": 73807,
  "senses": {
    "foo": "bar"
  },
  "senses_request": {
    "foo": "bar"
  },
  "serial_number": 1337,
  "status": {
    "foo": "bar"
  },
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_updated": "2018-08-30T09:51:59.737Z",
  "url": "https://brain.intellifi.nl/api/foobar",
  "report_location": {
    "custom": {
      "foo": "bar"
    },
    "id": "5b7d6cbd7503c445552a1664",
    "label": "Foo Bar",
    "metadata": {
      "foo": "bar"
    },
    "time_created": "2018-08-30T09:51:59.737Z",
    "time_updated": "2018-08-30T09:51:59.737Z",
    "url": "https://brain.intellifi.nl/api/foobar"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|antenna_report_locations|[object]|false|none|You may configure this field to an object which couples individual antenna ports to locations.|
|config|[Config](#schemaconfig)|false|read-only|JSON object with possible settings. Refer to individual service documentation for a good overview.|
|config_request|[ConfigRequest](#schemaconfigrequest)|false|none|Object containing the new configuration. This will be applied automatically when the values are valid.|
|geo_coords|[GeoCoords](#schemageocoords)|false|none|Last known geolocation estimate of this object. Not guaranteed to be included in response.|
|id|[IdReadOnly](#schemaidreadonly)|false|read-only|Unique identifier for resource.|
|is_online|[IsOnline](#schemaisonline)|false|read-only|Whether or not this resource is actively connected to the Brain.|
|request_counter|[RequestCounter](#schemarequestcounter)|false|read-only|The total number of HTTP requests that this resource has done.|
|senses|[Senses](#schemasenses)|false|read-only|Senses are values that in most cases are generated inside the spot (number of presences, spot booted etc.). We also have a few senses that can be controlled by the brain. See [Sense & Control](https://intellifi.zendesk.com/hc/en-us/sections/360001568254) documentation for more information.|
|senses_request|[SensesRequest](#schemasensesrequest)|false|none|Object containing the new senses configuration. See [Sense & Control](https://intellifi.zendesk.com/hc/en-us/sections/360001568254) documentation for more information.|
|serial_number|[SerialNumber](#schemaserialnumber)|false|read-only|This is the fixed and unique spot number. It's assigned during the production process and used to identify an individual device during its lifetime.|
|status|object|false|read-only|An object with specific information about the spot, directly send by the spot itself when the connection is created.|
|time_created|[TimeCreated](#schematimecreated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.|
|time_updated|[TimeUpdated](#schematimeupdated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.|
|url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|
|*oneOf*|object|false|none|none|
|report_location|[Location](#schemalocation)|false|read-only|none|
|*oneOf*|object|false|none|none|
|report_location_id|[IdReadOnly](#schemaidreadonly)|false|read-only|Unique identifier for resource.|
|*oneOf*|object|false|none|none|
|report_location_url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|

<h2 id="tocS_SpotList">SpotList</h2>
<!-- backwards compatibility -->
<a id="schemaspotlist"></a>
<a id="schema_SpotList"></a>
<a id="tocSspotlist"></a>
<a id="tocsspotlist"></a>

```json
{
  "custom": {
    "foo": "bar"
  },
  "id": "5b7d6cbd7503c445552a1664",
  "label": "Foo Bar",
  "list": "https://brain.intellifi.nl/api/foobar",
  "metadata": {
    "foo": "bar"
  },
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_updated": "2018-08-30T09:51:59.737Z",
  "total": 2
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|custom|[Custom](#schemacustom)|false|none|The `custom` value is only for your custom references, you may use it to save additional attributes. The custom value is not used in any other place. This field may contain any datatype that you like: null (default), string, integer, boolean, object etc...|
|id|[IdReadOnly](#schemaidreadonly)|false|read-only|Unique identifier for resource.|
|label|[Label](#schemalabel)|false|none|A name or a label for this resource. This is used in the user interface, may be empty.|
|list|[Url](#schemaurl)|false|read-only|Url to the individual resource.|
|metadata|[Metadata](#schemametadata)|false|none|Object of searchable metadata for this resource. Can be freely used to store metadata properties.|
|time_created|[TimeCreated](#schematimecreated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.|
|time_updated|[TimeUpdated](#schematimeupdated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.|
|total|integer|false|read-only|Total amount of spots in this set|

<h2 id="tocS_SpotSet">SpotSet</h2>
<!-- backwards compatibility -->
<a id="schemaspotset"></a>
<a id="schema_SpotSet"></a>
<a id="tocSspotset"></a>
<a id="tocsspotset"></a>

```json
{
  "created_by": "string",
  "id": "5b7d6cbd7503c445552a1664",
  "setid": 0,
  "spot_id": "5b7d6cbd7503c445552a1664",
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_updated": "2018-08-30T09:51:59.737Z",
  "type": "any"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_by|string|false|read-only|Who was responsible for the creation of this spot list. Value determines who's allowed to manages this object.|
|id|[IdReadOnly](#schemaidreadonly)|false|read-only|Unique identifier for resource.|
|setid|integer|false|none|Spot set unique identifier. Must be unique within a single device|
|spot_id|[IdReadOnly](#schemaidreadonly)|false|read-only|Unique identifier for resource.|
|time_created|[TimeCreated](#schematimecreated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.|
|time_updated|[TimeUpdated](#schematimeupdated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.|
|*oneOf*|[SpotSetTypeAny](#schemaspotsettypeany)|false|none|none|
|*oneOf*|[SpotSetTypeAreacode](#schemaspotsettypeareacode)|false|none|none|
|*oneOf*|[SpotSetTypeCodelength](#schemaspotsettypecodelength)|false|none|none|
|*oneOf*|[SpotSetTypeCodemask](#schemaspotsettypecodemask)|false|none|none|
|*oneOf*|[SpotSetTypeCoderange](#schemaspotsettypecoderange)|false|none|none|
|*oneOf*|[SpotSetTypeExtended](#schemaspotsettypeextended)|false|none|none|
|*oneOf*|[SpotSetTypeList](#schemaspotsettypelist)|false|none|none|
|*oneOf*|[SpotSetTypeProtocol](#schemaspotsettypeprotocol)|false|none|none|
|*oneOf*|[SpotSetTypeTechnology](#schemaspotsettypetechnology)|false|none|none|
|*oneOf*|[SpotSetTypeType](#schemaspotsettypetype)|false|none|none|

<h2 id="tocS_SpotSetBase">SpotSetBase</h2>
<!-- backwards compatibility -->
<a id="schemaspotsetbase"></a>
<a id="schema_SpotSetBase"></a>
<a id="tocSspotsetbase"></a>
<a id="tocsspotsetbase"></a>

```json
{
  "created_by": "string",
  "id": "5b7d6cbd7503c445552a1664",
  "setid": 0,
  "spot_id": "5b7d6cbd7503c445552a1664",
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_updated": "2018-08-30T09:51:59.737Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_by|string|false|read-only|Who was responsible for the creation of this spot list. Value determines who's allowed to manages this object.|
|id|[IdReadOnly](#schemaidreadonly)|false|read-only|Unique identifier for resource.|
|setid|integer|false|none|Spot set unique identifier. Must be unique within a single device|
|spot_id|[IdReadOnly](#schemaidreadonly)|false|read-only|Unique identifier for resource.|
|time_created|[TimeCreated](#schematimecreated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.|
|time_updated|[TimeUpdated](#schematimeupdated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.|

<h2 id="tocS_SpotSetCreate">SpotSetCreate</h2>
<!-- backwards compatibility -->
<a id="schemaspotsetcreate"></a>
<a id="schema_SpotSetCreate"></a>
<a id="tocSspotsetcreate"></a>
<a id="tocsspotsetcreate"></a>

```json
{
  "created_by": "string",
  "id": "5b7d6cbd7503c445552a1664",
  "setid": 0,
  "spot_id": "5b7d6cbd7503c445552a1664",
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_updated": "2018-08-30T09:51:59.737Z",
  "area_code": 1,
  "type": "areacode"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_by|string|false|read-only|Who was responsible for the creation of this spot list. Value determines who's allowed to manages this object.|
|id|[IdReadOnly](#schemaidreadonly)|false|read-only|Unique identifier for resource.|
|setid|integer|false|none|Spot set unique identifier. Must be unique within a single device|
|spot_id|[IdReadOnly](#schemaidreadonly)|false|read-only|Unique identifier for resource.|
|time_created|[TimeCreated](#schematimecreated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.|
|time_updated|[TimeUpdated](#schematimeupdated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.|
|*oneOf*|[SpotSetTypeAreacode](#schemaspotsettypeareacode)|false|none|none|
|*oneOf*|[SpotSetTypeCodelength](#schemaspotsettypecodelength)|false|none|none|
|*oneOf*|[SpotSetTypeCodemask](#schemaspotsettypecodemask)|false|none|none|
|*oneOf*|[SpotSetTypeCoderange](#schemaspotsettypecoderange)|false|none|none|
|*oneOf*|[SpotSetTypeExtended](#schemaspotsettypeextended)|false|none|none|
|*oneOf*|[SpotSetTypeList](#schemaspotsettypelist)|false|none|none|
|*oneOf*|[SpotSetTypeProtocol](#schemaspotsettypeprotocol)|false|none|none|
|*oneOf*|[SpotSetTypeTechnology](#schemaspotsettypetechnology)|false|none|none|
|*oneOf*|[SpotSetTypeType](#schemaspotsettypetype)|false|none|none|

<h2 id="tocS_SpotSetTypeAny">SpotSetTypeAny</h2>
<!-- backwards compatibility -->
<a id="schemaspotsettypeany"></a>
<a id="schema_SpotSetTypeAny"></a>
<a id="tocSspotsettypeany"></a>
<a id="tocsspotsettypeany"></a>

```json
{
  "type": "any"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Spot set type `any`; A wildcard that matches all type of items|

#### Enumerated Values

|Property|Value|
|---|---|
|type|any|

<h2 id="tocS_SpotSetTypeAreacode">SpotSetTypeAreacode</h2>
<!-- backwards compatibility -->
<a id="schemaspotsettypeareacode"></a>
<a id="schema_SpotSetTypeAreacode"></a>
<a id="tocSspotsettypeareacode"></a>
<a id="tocsspotsettypeareacode"></a>

```json
{
  "area_code": 1,
  "type": "areacode"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|area_code|integer(int32)|false|none|Area Code|
|type|string|false|none|Spot set type `areacode`; Matches Item with the same Area Code as specified by this set|

#### Enumerated Values

|Property|Value|
|---|---|
|type|areacode|

<h2 id="tocS_SpotSetTypeCodelength">SpotSetTypeCodelength</h2>
<!-- backwards compatibility -->
<a id="schemaspotsettypecodelength"></a>
<a id="schema_SpotSetTypeCodelength"></a>
<a id="tocSspotsettypecodelength"></a>
<a id="tocsspotsettypecodelength"></a>

```json
{
  "length_bits": 1,
  "type": "codelength"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|length_bits|integer(int32)|false|none|The length of the item code in bits|
|type|string|false|none|Spot set type `codelength`; Matches all Item codes that have the exact same length in bits as specified by this value|

#### Enumerated Values

|Property|Value|
|---|---|
|type|codelength|

<h2 id="tocS_SpotSetTypeCodemask">SpotSetTypeCodemask</h2>
<!-- backwards compatibility -->
<a id="schemaspotsettypecodemask"></a>
<a id="schema_SpotSetTypeCodemask"></a>
<a id="tocSspotsettypecodemask"></a>
<a id="tocsspotsettypecodemask"></a>

```json
{
  "code": "string",
  "mask": "string",
  "type": "codemask"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Item code|
|mask|string|false|none|Mask which part of the code should match.|
|type|string|false|none|Spot set type `codemask`; Matches all Items that return true as a result of using the following equation ((Item.code & Item.mask) == (Set.code & Set.mask)).|

#### Enumerated Values

|Property|Value|
|---|---|
|type|codemask|

<h2 id="tocS_SpotSetTypeCoderange">SpotSetTypeCoderange</h2>
<!-- backwards compatibility -->
<a id="schemaspotsettypecoderange"></a>
<a id="schema_SpotSetTypeCoderange"></a>
<a id="tocSspotsettypecoderange"></a>
<a id="tocsspotsettypecoderange"></a>

```json
{
  "end": "string",
  "start": "string",
  "type": "coderange"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|string|false|none|End of the code range|
|start|string|false|none|Start of the code range|
|type|string|false|none|Spot set type `coderange`; Matches all Items codes if within specified range as specified by this set|

#### Enumerated Values

|Property|Value|
|---|---|
|type|coderange|

<h2 id="tocS_SpotSetTypeExtended">SpotSetTypeExtended</h2>
<!-- backwards compatibility -->
<a id="schemaspotsettypeextended"></a>
<a id="schema_SpotSetTypeExtended"></a>
<a id="tocSspotsettypeextended"></a>
<a id="tocsspotsettypeextended"></a>

```json
{
  "key": "string",
  "operator": "gt",
  "type": "extended",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|Extended data property key|
|operator|string|false|none|Operator|
|type|string|false|none|Spot set type `extended`; Items that have the extended property (key) and match the requirement for value using the specified operator, as specified by this set|
|value|string(byte) \| string \| number(float) \| integer(int32) \| boolean|false|none|Extended data property value.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|gt|
|operator|gte|
|operator|eq|
|operator|in|
|operator|ne|
|operator|lt|
|operator|lte|
|operator|starts|
|operator|ends|
|type|extended|

<h2 id="tocS_SpotSetTypeList">SpotSetTypeList</h2>
<!-- backwards compatibility -->
<a id="schemaspotsettypelist"></a>
<a id="schema_SpotSetTypeList"></a>
<a id="tocSspotsettypelist"></a>
<a id="tocsspotsettypelist"></a>

```json
{
  "itemlist_id": "5b7d6cbd7503c445552a1664",
  "limit": 1,
  "mutation": "string",
  "restrictions": {
    "allow_server_edit": true,
    "allow_spot_edit": true
  },
  "sha1": "string",
  "total": 2,
  "type": "list"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|itemlist_id|[Id](#schemaid)|false|none|Unique identifier for resource.|
|limit|integer(int32)|false|none|Number, list limit, default `1000` if not specified.|
|mutation|string|false|read-only|Last mutation that was synchronized to the device. This is used for internal synchronization between the device and the server.|
|restrictions|object|false|none|Restrict changes spot and brain.|
|sha1|string|false|read-only|The sha1 checksum of the list. This will change when the list is mutated.|
|total|integer|false|read-only|Total amount of items in this set|
|type|string|false|none|Spot set type `list`; List of items. Matches this set if Item is part of this list.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|list|

<h2 id="tocS_SpotSetTypeProtocol">SpotSetTypeProtocol</h2>
<!-- backwards compatibility -->
<a id="schemaspotsettypeprotocol"></a>
<a id="schema_SpotSetTypeProtocol"></a>
<a id="tocSspotsettypeprotocol"></a>
<a id="tocsspotsettypeprotocol"></a>

```json
{
  "item_protocol": "epcgen2",
  "type": "protocol"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|item_protocol|[ItemProtocol](#schemaitemprotocol)|false|none|Type of protocol that was used to decode this item.|
|type|string|false|none|Spot set type `protocol`; Matches Items with the same Protocol as specified by this set.|

#### Enumerated Values

|Property|Value|
|---|---|
|item_protocol|altbeacon|
|item_protocol|uniwear|
|item_protocol|nfc|
|item_protocol|generic|
|item_protocol|eddystone|
|item_protocol|epcgen2|
|item_protocol|ibeacon|
|item_protocol|nanoble|
|type|protocol|

<h2 id="tocS_SpotSetTypeTechnology">SpotSetTypeTechnology</h2>
<!-- backwards compatibility -->
<a id="schemaspotsettypetechnology"></a>
<a id="schema_SpotSetTypeTechnology"></a>
<a id="tocSspotsettypetechnology"></a>
<a id="tocsspotsettypetechnology"></a>

```json
{
  "item_technology": "rfid",
  "type": "technology"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|item_technology|[Technology](#schematechnology)|false|none|Type of technology that was used to detect this item.|
|type|string|false|none|Spot set type `technology`; Matches Items with the same Technology as specified by this set.|

#### Enumerated Values

|Property|Value|
|---|---|
|item_technology|bluetooth|
|item_technology|optical|
|item_technology|rfid|
|type|technology|

<h2 id="tocS_SpotSetTypeType">SpotSetTypeType</h2>
<!-- backwards compatibility -->
<a id="schemaspotsettypetype"></a>
<a id="schema_SpotSetTypeType"></a>
<a id="tocSspotsettypetype"></a>
<a id="tocsspotsettypetype"></a>

```json
{
  "item_type": "tag",
  "type": "type"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|item_type|[ItemType](#schemaitemtype)|false|none|Type of item.|
|type|string|false|none|Spot set type `type`; Matches Items with the same Type as specified by this set.|

#### Enumerated Values

|Property|Value|
|---|---|
|item_type|barcode|
|item_type|bluetitan|
|item_type|gbtag|
|item_type|relay|
|item_type|smarttag|
|item_type|tag|
|type|type|

<h2 id="tocS_SpotSetUpdate">SpotSetUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaspotsetupdate"></a>
<a id="schema_SpotSetUpdate"></a>
<a id="tocSspotsetupdate"></a>
<a id="tocsspotsetupdate"></a>

```json
{
  "delete": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delete|boolean|false|none|Request to delete a set. Remove request needs to be synchronized to the device, so it may take some time before the resource is being removed.|

<h2 id="tocS_SpotUpdate">SpotUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaspotupdate"></a>
<a id="schema_SpotUpdate"></a>
<a id="tocSspotupdate"></a>
<a id="tocsspotupdate"></a>

```json
{
  "antenna_report_locations": [
    {
      "antenna_number": 1,
      "report_location": {
        "custom": {
          "foo": "bar"
        },
        "id": "5b7d6cbd7503c445552a1664",
        "label": "Foo Bar",
        "metadata": {
          "foo": "bar"
        },
        "time_created": "2018-08-30T09:51:59.737Z",
        "time_updated": "2018-08-30T09:51:59.737Z",
        "url": "https://brain.intellifi.nl/api/foobar"
      },
      "report_location_id": "5b7d6cbd7503c445552a1664",
      "report_location_url": "https://brain.intellifi.nl/api/foobar"
    }
  ],
  "config": {
    "foo": "bar"
  },
  "config_request": {
    "foo": "bar"
  },
  "geo_coords": {
    "lat": 0,
    "lng": 0,
    "time_updated": "2018-08-30T09:51:59.737Z"
  },
  "id": "5b7d6cbd7503c445552a1664",
  "is_online": true,
  "request_counter": 73807,
  "senses": {
    "foo": "bar"
  },
  "senses_request": {
    "foo": "bar"
  },
  "serial_number": 1337,
  "status": {
    "foo": "bar"
  },
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_updated": "2018-08-30T09:51:59.737Z",
  "url": "https://brain.intellifi.nl/api/foobar",
  "report_location": "5b7d6cbd7503c445552a1664"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|antenna_report_locations|[object]|false|none|You may configure this field to an object which couples individual antenna ports to locations.|
|config|[Config](#schemaconfig)|false|read-only|JSON object with possible settings. Refer to individual service documentation for a good overview.|
|config_request|[ConfigRequest](#schemaconfigrequest)|false|none|Object containing the new configuration. This will be applied automatically when the values are valid.|
|geo_coords|[GeoCoords](#schemageocoords)|false|none|Last known geolocation estimate of this object. Not guaranteed to be included in response.|
|id|[IdReadOnly](#schemaidreadonly)|false|read-only|Unique identifier for resource.|
|is_online|[IsOnline](#schemaisonline)|false|read-only|Whether or not this resource is actively connected to the Brain.|
|request_counter|[RequestCounter](#schemarequestcounter)|false|read-only|The total number of HTTP requests that this resource has done.|
|senses|[Senses](#schemasenses)|false|read-only|Senses are values that in most cases are generated inside the spot (number of presences, spot booted etc.). We also have a few senses that can be controlled by the brain. See [Sense & Control](https://intellifi.zendesk.com/hc/en-us/sections/360001568254) documentation for more information.|
|senses_request|[SensesRequest](#schemasensesrequest)|false|none|Object containing the new senses configuration. See [Sense & Control](https://intellifi.zendesk.com/hc/en-us/sections/360001568254) documentation for more information.|
|serial_number|[SerialNumber](#schemaserialnumber)|false|read-only|This is the fixed and unique spot number. It's assigned during the production process and used to identify an individual device during its lifetime.|
|status|object|false|read-only|An object with specific information about the spot, directly send by the spot itself when the connection is created.|
|time_created|[TimeCreated](#schematimecreated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.|
|time_updated|[TimeUpdated](#schematimeupdated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.|
|url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|
|report_location|[Id](#schemaid)|false|none|Unique identifier for resource.|

<h2 id="tocS_Subscription">Subscription</h2>
<!-- backwards compatibility -->
<a id="schemasubscription"></a>
<a id="schema_Subscription"></a>
<a id="tocSsubscription"></a>
<a id="tocssubscription"></a>

```json
{
  "custom": {
    "foo": "bar"
  },
  "database_hold_time_h": 2,
  "description": "Item events",
  "events_url": "https://brain.intellifi.nl/api/foobar",
  "id": "5b7d6cbd7503c445552a1664",
  "populate_events": true,
  "target_delivery_last_failure": {},
  "target_delivery_status": {},
  "target_retry": true,
  "target_url": "string",
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_updated": "2018-08-30T09:51:59.737Z",
  "topic_filter": "items/#",
  "url": "https://brain.intellifi.nl/api/foobar",
  "verify_target_certificate": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|custom|[Custom](#schemacustom)|false|none|The `custom` value is only for your custom references, you may use it to save additional attributes. The custom value is not used in any other place. This field may contain any datatype that you like: null (default), string, integer, boolean, object etc...|
|database_hold_time_h|integer|false|none|The number of hours this event is retained in the database. *Only use larger numbers if you know what you are doing.* A couple of hours is enough for most use cases.|
|description|string \| null|false|none|Additional field to add some notes about this subscription.|
|events_url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|
|id|[IdReadOnly](#schemaidreadonly)|false|read-only|Unique identifier for resource.|
|populate_events|boolean|false|none|If set to `true`, resource references in an event (e.g. the location an item moved to) are resolved and populated with data instead of giving just an ID.|
|target_delivery_last_failure|object|false|read-only|If `target_url` is set or has been set before, and delivery to the target URL failed at least once, this contains debugging information about the nature of the most recent failure.|
|target_delivery_status|object|false|read-only|If `target_url` is set, `target_delivery_status.ok` will be `true` or `false` depending on whether events are being succesfully delivered. `target_delivery_status.since` indicates when t his status last changed.|
|target_retry|boolean|false|none|Set to `true` if you want our server to retry if `target_url` is not giving back a `2xx` success code.|
|target_url|string|false|none|Url to an external service that all applicable events are pushed to (webhook). Configure to `null` if you don't wish to use this (default).|
|time_created|[TimeCreated](#schematimecreated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.|
|time_updated|[TimeUpdated](#schematimeupdated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.|
|topic_filter|string|false|none|MQTT filter that is applied to all events. Allows you to select and filter events. See [Event filtering](https://intellifi.zendesk.com/hc/en-us/articles/360008791494) for more information|
|url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|
|verify_target_certificate|boolean|false|none|Whether or not the `target_url` endpoint TLS certificate is verified to be valid.|

<h2 id="tocS_Technology">Technology</h2>
<!-- backwards compatibility -->
<a id="schematechnology"></a>
<a id="schema_Technology"></a>
<a id="tocStechnology"></a>
<a id="tocstechnology"></a>

```json
"rfid"
```

Type of technology that was used to detect this item.

<h2 id="tocS_TimeCreated">TimeCreated</h2>
<!-- backwards compatibility -->
<a id="schematimecreated"></a>
<a id="schema_TimeCreated"></a>
<a id="tocStimecreated"></a>
<a id="tocstimecreated"></a>

```json
"2018-08-30T09:51:59.737Z"
```

[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.

<h2 id="tocS_TimeEvent">TimeEvent</h2>
<!-- backwards compatibility -->
<a id="schematimeevent"></a>
<a id="schema_TimeEvent"></a>
<a id="tocStimeevent"></a>
<a id="tocstimeevent"></a>

```json
"2018-08-30T09:51:59.737Z"
```

[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this event was generated on the device. This is the device's own timestamp. Could be different due to buffering and clock differences.

<h2 id="tocS_TimeExpire">TimeExpire</h2>
<!-- backwards compatibility -->
<a id="schematimeexpire"></a>
<a id="schema_TimeExpire"></a>
<a id="tocStimeexpire"></a>
<a id="tocstimeexpire"></a>

```json
"2018-08-30T09:51:59.737Z"
```

[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource is going to be deleted.

<h2 id="tocS_TimeLastAccessed">TimeLastAccessed</h2>
<!-- backwards compatibility -->
<a id="schematimelastaccessed"></a>
<a id="schema_TimeLastAccessed"></a>
<a id="tocStimelastaccessed"></a>
<a id="tocstimelastaccessed"></a>

```json
"2018-08-30T09:51:59.737Z"
```

[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was last accessed.

<h2 id="tocS_TimeMoved">TimeMoved</h2>
<!-- backwards compatibility -->
<a id="schematimemoved"></a>
<a id="schema_TimeMoved"></a>
<a id="tocStimemoved"></a>
<a id="tocstimemoved"></a>

```json
"2018-08-30T09:51:59.737Z"
```

Last time this item moved. This is the last time that the location for this item was changed.

<h2 id="tocS_TimeUpdated">TimeUpdated</h2>
<!-- backwards compatibility -->
<a id="schematimeupdated"></a>
<a id="schema_TimeUpdated"></a>
<a id="tocStimeupdated"></a>
<a id="tocstimeupdated"></a>

```json
"2018-08-30T09:51:59.737Z"
```

[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.

<h2 id="tocS_Url">Url</h2>
<!-- backwards compatibility -->
<a id="schemaurl"></a>
<a id="schema_Url"></a>
<a id="tocSurl"></a>
<a id="tocsurl"></a>

```json
"https://brain.intellifi.nl/api/foobar"
```

Url to the individual resource.

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "email": "user@intellifi.nl",
  "first_name": "Foo",
  "id": "5b7d6cbd7503c445552a1664",
  "is_admin": true,
  "is_locked": true,
  "last_name": "Bar",
  "password": "password1",
  "time_created": "2018-08-30T09:51:59.737Z",
  "time_updated": "2018-08-30T09:51:59.737Z",
  "url": "https://brain.intellifi.nl/api/foobar"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|Email address|
|first_name|string|false|none|First name|
|id|[IdReadOnly](#schemaidreadonly)|false|read-only|Unique identifier for resource.|
|is_admin|boolean|false|none|Whether or not this is an administrator.|
|is_locked|boolean|false|none|Whether or not this user is locked and can't change the password.|
|last_name|string|false|none|Last name|
|password|string|false|write-only|Password of the user|
|time_created|[TimeCreated](#schematimecreated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.|
|time_updated|[TimeCreated](#schematimecreated)|false|read-only|[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.|
|url|[Url](#schemaurl)|false|read-only|Url to the individual resource.|

<h2 id="tocS_Version">Version</h2>
<!-- backwards compatibility -->
<a id="schemaversion"></a>
<a id="schema_Version"></a>
<a id="tocSversion"></a>
<a id="tocsversion"></a>

```json
"1.2.3"
```

Current running version of the resource.
