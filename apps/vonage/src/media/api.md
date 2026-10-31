<h1 id="media-api">Media API v1.0.2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Media API can be used to query, download and delete media items such as audio files for use with other Nexmo APIs.

Base URLs:

* <a href="https://api.nexmo.com/v3/media">https://api.nexmo.com/v3/media</a>

Email: <a href="mailto:devrel@nexmo.com">Nexmo DevRel</a> 
Web: <a href="https://developer.nexmo.com/">Nexmo DevRel</a> 

<h1 id="media-api-default">Default</h1>

## List and search media items

<a id="opIdlist-and-search-media-items"></a>

> Code samples

```bash
curl https://api.nexmo.com/ \
  -H 'Accept: application/json'
```

`GET /`

Retrieve information about multiple media items with the ability to search and paginate.

<h3 id="list-and-search-media-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order|query|string|false|The order of search results.|
|page_index|query|integer|false|Which page to retrieve in pagination|
|page_size|query|integer|false|How many items at most per page|
|start_time|query|string|false|Retrieve results created on or after this timestap.|
|end_time|query|string|false|Retrieve results created on or before this timestamp.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|ascending|
|order|descending|

> Example responses

> 200 Response

```json
{
  "_embedded": {
    "media": [
      {
        "account_id": "abcd1234",
        "etag": "aaaaaaaabbbbccccdddd0123456789ab",
        "id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
        "max_downloads_allowed": 0,
        "media_size": 1234567,
        "metadata_primary": "string",
        "metadata_secondary": "string",
        "mime_type": "audio/vnd.wave",
        "original_file_name": "test.wav",
        "public": false,
        "store_id": "s3",
        "time_created": "2020-01-01T14:00:00.000Z",
        "time_last_updated": "2020-01-01T14:00:00.000Z",
        "times_downloaded": 1
      }
    ]
  },
  "_links": {
    "first": {
      "href": "/v3/media?page_size=20&account_id=abcd1234&order=descending"
    },
    "last": {
      "href": "/v3/media?page_size=20&account_id=abcd1234&order=descending"
    },
    "self": {
      "href": "/v3/media?page_size=20&account_id=abcd1234&order=descending"
    }
  },
  "count": 1,
  "page_index": 0,
  "page_size": 20
}
```

<h3 id="list-and-search-media-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved|Inline|

<h3 id="list-and-search-media-items-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_embedded|object|false|none|A collection of media items. See [retrieve a media item](#retrieve-a-media-item) for a description of the returned fields|
|» media|[[Media](#schemamedia)]|false|none|none|
|_links|object|false|none|none|
|» first|object|false|none|none|
|» » href|string|false|none|none|
|» last|object|false|none|none|
|» » href|string|false|none|none|
|» self|object|false|none|none|
|» » href|string|false|none|none|
|count|integer|false|none|The total number of records returned by your request.|
|page_index|integer|false|none|The `page_index` used in your request.|
|page_size|integer|false|none|The amount of records returned in this response.|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a media item

<a id="opIddelete-a-media-item"></a>

> Code samples

```bash
curl https://api.nexmo.com/:id \
  -X DELETE
```

`DELETE /:id`

Delete a previously created media item by ID.

<h3 id="delete-a-media-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully deleted|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a media item

<a id="opIdretrieve-a-media-item"></a>

> Code samples

```bash
curl https://api.nexmo.com/:id/info \
  -H 'Accept: application/json'
```

`GET /:id/info`

Retrieve information about a single media item

> Example responses

> 200 Response

```json
{
  "account_id": "abcd1234",
  "etag": "aaaaaaaabbbbccccdddd0123456789ab",
  "id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "max_downloads_allowed": 0,
  "media_size": 1234567,
  "metadata_primary": "string",
  "metadata_secondary": "string",
  "mime_type": "audio/vnd.wave",
  "original_file_name": "test.wav",
  "public": false,
  "store_id": "s3",
  "time_created": "2020-01-01T14:00:00.000Z",
  "time_last_updated": "2020-01-01T14:00:00.000Z",
  "times_downloaded": 1
}
```

<h3 id="retrieve-a-media-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved|[Media](#schemamedia)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a media item

<a id="opIdupdate-a-media-item"></a>

> Code samples

```bash
curl https://api.nexmo.com/:id/info \
  -X PUT \
  -F 'description=This is a very important recording. Do not delete.' \
  -F 'max_downloads_allowed=100' \
  -F 'metadata_primary=foo,bar' \
  -F 'metadata_secondary=123' \
  -F 'mime_type=audio/vnd.wave' \
  -F 'public=true' \
  -F 'title=Very important recording'
```

`PUT /:id/info`

Update a previously created media item by ID.

> Body parameter

```yaml
description: This is a very important recording. Do not delete.
max_downloads_allowed: 100
metadata_primary: "foo,bar"
metadata_secondary: "123"
mime_type: audio/vnd.wave
public: true
title: Very important recording
```

<h3 id="update-a-media-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» description|body|string|false|A description of the media file.|
|» max_downloads_allowed|body|integer|false|The maximum number of times the file may be downloaded. Unlimited when not provided.|
|» metadata_primary|body|string|false|A string containing metadata about the media file.|
|» metadata_secondary|body|string|false|A string containing further metadata about the media file.|
|» mime_type|body|string|false|The MIME type of the media file.|
|» public|body|boolean|false|Whether the item is publicly available without authentication.|
|» title|body|string|false|A string containing a title for the media file.|

<h3 id="update-a-media-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully updated|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Media">Media</h2>
<!-- backwards compatibility -->
<a id="schemamedia"></a>
<a id="schema_Media"></a>
<a id="tocSmedia"></a>
<a id="tocsmedia"></a>

```json
{
  "account_id": "abcd1234",
  "etag": "aaaaaaaabbbbccccdddd0123456789ab",
  "id": "aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
  "max_downloads_allowed": 0,
  "media_size": 1234567,
  "metadata_primary": "string",
  "metadata_secondary": "string",
  "mime_type": "audio/vnd.wave",
  "original_file_name": "test.wav",
  "public": false,
  "store_id": "s3",
  "time_created": "2020-01-01T14:00:00.000Z",
  "time_last_updated": "2020-01-01T14:00:00.000Z",
  "times_downloaded": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string|false|none|The ID of your Nexmo account. This is the same as your API key.|
|etag|string|false|none|An identifier for the content. This will change if the content of the file has been changed (i.e. if you upload a new version of the file). For more information see Wikipedia: [HTTP ETag](https://en.wikipedia.org/wiki/HTTP_ETag)|
|id|string|false|none|A UUID representing the object.|
|max_downloads_allowed|integer|false|none|The maximum number of times the file may be downloaded.|
|media_size|integer|false|none|The size of the file in bytes|
|metadata_primary|string|false|none|A user set string containing metadata about the media file.|
|metadata_secondary|string|false|none|A user set string containing further metadata about the media file.|
|mime_type|string|false|none|The IETF MIME type of the file.|
|original_file_name|string|false|none|The filename of the object as it was originally uploaded.|
|public|boolean|false|none|Whether the item is available for download without authentication.|
|store_id|string|false|none|An internal identifier of how the file is stored.|
|time_created|string|false|none|A timestamp for the time that the file was created|
|time_last_updated|string|false|none|A timestamp for the time that the file was last modified|
|times_downloaded|integer|false|none|The number of times the file has been downloaded.|
