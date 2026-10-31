<h1 id="facial-recognition-reverse-image-face-search-api">Facial Recognition Reverse Image Face Search API v1.02</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Let your users search the Internet by face! Integrate FaceCheck facial search seamlessly with your app, website or software platform. 
FaceCheck's REST API is hassle-free and easy to use. For code examples visit <a href='https://facecheck.id/Face-Search/API'>https://facecheck.id/Face-Search/API</a>

Web: <a href="https://FaceCheck.ID">https://FaceCheck.ID</a> 

# Authentication

* API Key (Bearer)
    - Parameter Name: **Authorization**, in: header. Put **_ONLY_** your JWT Bearer token on textbox below!

<h1 id="facial-recognition-reverse-image-face-search-api-facecheckapi">FaceCheckAPI</h1>

## Remove an image from a search request

> Code samples

```bash
curl https://example.com/api/delete_pic \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /api/delete_pic`

<h3 id="remove-an-image-from-a-search-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_search|query|string|false|none|
|id_pic|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "code": "string",
  "error": "string",
  "id_search": "string",
  "input": [
    {
      "base64": "string",
      "id_pic": "string",
      "svg_anim": "string",
      "url_source": "string"
    }
  ],
  "message": "string",
  "output": {
    "demo": true,
    "face_per_sec": 0,
    "freeRam": 0,
    "images_in_bundle": 0,
    "items": [
      {
        "base64": "string",
        "group": 0,
        "guid": "string",
        "index": 0,
        "indexDB": 0,
        "score": 0,
        "url": "string"
      }
    ],
    "max_score": 0,
    "performance": "string",
    "searchedFaces": 0,
    "tookSeconds": 0,
    "tookSecondsDownload": 0,
    "tookSecondsQueue": 0
  },
  "progress": 0
}
```

<h3 id="remove-an-image-from-a-search-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BrowserJsonResponse](#schemabrowserjsonresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Returns remaining search credits, search engine online status, and number of indexed faces

> Code samples

```bash
curl https://example.com/api/info \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /api/info`

> Example responses

> 200 Response

```json
{
  "faces": 212417831,
  "has_credits_to_search": true,
  "is_online": true,
  "remaining_credits": 12987
}
```

<h3 id="returns-remaining-search-credits-search-engine-online-status-and-number-of-indexed-faces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[InfoResponse](#schemainforesponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Submit a search request to the search engine and get back search results that contain URLs and all images in base64/webp format

> Code samples

```bash
curl https://example.com/api/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "demo": false,
    "id_captcha": null,
    "id_search": "3vdi8t-s_8DAAA7D5E784616",
    "status_only": false,
    "with_progress": true
  }'
```

`POST /api/search`

> Body parameter

```json
{
  "demo": false,
  "id_captcha": null,
  "id_search": "3vdi8t-s_8DAAA7D5E784616",
  "status_only": false,
  "with_progress": true
}
```

<h3 id="submit-a-search-request-to-the-search-engine-and-get-back-search-results-that-contain-urls-and-all-images-in-base64webp-format-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SearchData](#schemasearchdata)|false|none|
|» demo|body|boolean \| null|false|true = searches only the first 100,000 faces, good for testing/debugging|
|» id_captcha|body|string \| null|false|captcha is not used|
|» id_search|body|string \| null|false|none|
|» status_only|body|boolean \| null|false|true = don't submit a new search|
|» with_progress|body|boolean \| null|false|true = return imediately with a progress. False waits until search is finished.|

> Example responses

> 200 Response

```json
{
  "code": "string",
  "error": "string",
  "id_search": "string",
  "input": [
    {
      "base64": "string",
      "id_pic": "string",
      "svg_anim": "string",
      "url_source": "string"
    }
  ],
  "message": "string",
  "output": {
    "demo": true,
    "face_per_sec": 0,
    "freeRam": 0,
    "images_in_bundle": 0,
    "items": [
      {
        "base64": "string",
        "group": 0,
        "guid": "string",
        "index": 0,
        "indexDB": 0,
        "score": 0,
        "url": "string"
      }
    ],
    "max_score": 0,
    "performance": "string",
    "searchedFaces": 0,
    "tookSeconds": 0,
    "tookSecondsDownload": 0,
    "tookSecondsQueue": 0
  },
  "progress": 0
}
```

<h3 id="submit-a-search-request-to-the-search-engine-and-get-back-search-results-that-contain-urls-and-all-images-in-base64webp-format-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BrowserJsonResponse](#schemabrowserjsonresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Upload 1 to 3 images as multipart/form-data, and get back a search request that contains id_search and 1 to 3 preview thumbnails

> Code samples

```bash
curl https://example.com/api/upload_pic \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -F 'id_search=string' \
  -F 'images=["string"]'
```

`POST /api/upload_pic`

> Body parameter

```yaml
id_search: string
images:
  - string
```

<h3 id="upload-1-to-3-images-as-multipartform-data-and-get-back-a-search-request-that-contains-idsearch-and-1-to-3-preview-thumbnails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» id_search|body|string|false|none|
|» images|body|[string(binary)]|false|none|

> Example responses

> 200 Response

```json
{
  "code": "string",
  "error": "string",
  "id_search": "string",
  "input": [
    {
      "base64": "string",
      "id_pic": "string",
      "svg_anim": "string",
      "url_source": "string"
    }
  ],
  "message": "string",
  "output": {
    "demo": true,
    "face_per_sec": 0,
    "freeRam": 0,
    "images_in_bundle": 0,
    "items": [
      {
        "base64": "string",
        "group": 0,
        "guid": "string",
        "index": 0,
        "indexDB": 0,
        "score": 0,
        "url": "string"
      }
    ],
    "max_score": 0,
    "performance": "string",
    "searchedFaces": 0,
    "tookSeconds": 0,
    "tookSecondsDownload": 0,
    "tookSecondsQueue": 0
  },
  "progress": 0
}
```

<h3 id="upload-1-to-3-images-as-multipartform-data-and-get-back-a-search-request-that-contains-idsearch-and-1-to-3-preview-thumbnails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BrowserJsonResponse](#schemabrowserjsonresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

# Schemas

<h2 id="tocS_BrowserJsonResponse">BrowserJsonResponse</h2>
<!-- backwards compatibility -->
<a id="schemabrowserjsonresponse"></a>
<a id="schema_BrowserJsonResponse"></a>
<a id="tocSbrowserjsonresponse"></a>
<a id="tocsbrowserjsonresponse"></a>

```json
{
  "code": "string",
  "error": "string",
  "id_search": "string",
  "input": [
    {
      "base64": "string",
      "id_pic": "string",
      "svg_anim": "string",
      "url_source": "string"
    }
  ],
  "message": "string",
  "output": {
    "demo": true,
    "face_per_sec": 0,
    "freeRam": 0,
    "images_in_bundle": 0,
    "items": [
      {
        "base64": "string",
        "group": 0,
        "guid": "string",
        "index": 0,
        "indexDB": 0,
        "score": 0,
        "url": "string"
      }
    ],
    "max_score": 0,
    "performance": "string",
    "searchedFaces": 0,
    "tookSeconds": 0,
    "tookSecondsDownload": 0,
    "tookSecondsQueue": 0
  },
  "progress": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string \| null|false|none|none|
|error|string \| null|false|none|none|
|id_search|string \| null|false|none|none|
|input|[[InputImage](#schemainputimage)]|false|none|none|
|message|string \| null|false|none|none|
|output|[Search_Results](#schemasearch_results)|false|none|none|
|progress|integer(int32) \| null|false|none|none|

<h2 id="tocS_InfoResponse">InfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemainforesponse"></a>
<a id="schema_InfoResponse"></a>
<a id="tocSinforesponse"></a>
<a id="tocsinforesponse"></a>

```json
{
  "faces": 212417831,
  "has_credits_to_search": true,
  "is_online": true,
  "remaining_credits": 12987
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|faces|integer(int32) \| null|false|none|none|
|has_credits_to_search|boolean|false|none|none|
|is_online|boolean|false|none|none|
|remaining_credits|integer(int32)|false|none|none|

<h2 id="tocS_InputImage">InputImage</h2>
<!-- backwards compatibility -->
<a id="schemainputimage"></a>
<a id="schema_InputImage"></a>
<a id="tocSinputimage"></a>
<a id="tocsinputimage"></a>

```json
{
  "base64": "string",
  "id_pic": "string",
  "svg_anim": "string",
  "url_source": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|base64|string \| null|false|none|none|
|id_pic|string \| null|false|none|none|
|svg_anim|string \| null|false|none|none|
|url_source|string \| null|false|none|none|

<h2 id="tocS_SearchData">SearchData</h2>
<!-- backwards compatibility -->
<a id="schemasearchdata"></a>
<a id="schema_SearchData"></a>
<a id="tocSsearchdata"></a>
<a id="tocssearchdata"></a>

```json
{
  "demo": false,
  "id_captcha": null,
  "id_search": "3vdi8t-s_8DAAA7D5E784616",
  "status_only": false,
  "with_progress": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|demo|boolean \| null|false|none|true = searches only the first 100,000 faces, good for testing/debugging|
|id_captcha|string \| null|false|none|captcha is not used|
|id_search|string \| null|false|none|none|
|status_only|boolean \| null|false|none|true = don't submit a new search|
|with_progress|boolean \| null|false|none|true = return imediately with a progress. False waits until search is finished.|

<h2 id="tocS_SearchItem">SearchItem</h2>
<!-- backwards compatibility -->
<a id="schemasearchitem"></a>
<a id="schema_SearchItem"></a>
<a id="tocSsearchitem"></a>
<a id="tocssearchitem"></a>

```json
{
  "base64": "string",
  "group": 0,
  "guid": "string",
  "index": 0,
  "indexDB": 0,
  "score": 0,
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|base64|string \| null|false|none|none|
|group|integer(int32)|false|none|none|
|guid|string \| null|false|none|none|
|index|integer(int32)|false|none|none|
|indexDB|integer(int64)|false|none|none|
|score|integer(int32)|false|none|none|
|url|string \| null|false|none|none|

<h2 id="tocS_Search_Results">Search_Results</h2>
<!-- backwards compatibility -->
<a id="schemasearch_results"></a>
<a id="schema_Search_Results"></a>
<a id="tocSsearch_results"></a>
<a id="tocssearch_results"></a>

```json
{
  "demo": true,
  "face_per_sec": 0,
  "freeRam": 0,
  "images_in_bundle": 0,
  "items": [
    {
      "base64": "string",
      "group": 0,
      "guid": "string",
      "index": 0,
      "indexDB": 0,
      "score": 0,
      "url": "string"
    }
  ],
  "max_score": 0,
  "performance": "string",
  "searchedFaces": 0,
  "tookSeconds": 0,
  "tookSecondsDownload": 0,
  "tookSecondsQueue": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|demo|boolean \| null|false|none|none|
|face_per_sec|integer(int32) \| null|false|read-only|none|
|freeRam|number(double) \| null|false|none|none|
|images_in_bundle|integer(int32)|false|none|none|
|items|[[SearchItem](#schemasearchitem)]|false|none|none|
|max_score|integer(int32)|false|read-only|none|
|performance|string \| null|false|read-only|none|
|searchedFaces|integer(int32) \| null|false|none|none|
|tookSeconds|number(double) \| null|false|none|none|
|tookSecondsDownload|number(double) \| null|false|none|none|
|tookSecondsQueue|number(double) \| null|false|none|none|
