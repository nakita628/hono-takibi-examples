<h1 id="komga-api">Komga API v1.29.2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Komga REST API.

## Reference

Check the API reference:
- on the [Komga website](https://komga.org/docs/openapi/komga-api)
- on any running Komga instance at `/swagger-ui.html`
- on [GitHub](https://raw.githubusercontent.com/gotson/komga/refs/heads/master/komga/docs/openapi.json)

## Authentication

Most endpoints require authentication. Authentication is done using either:
- Basic Authentication
- Passing an API Key in the `X-API-Key` header

## Sessions

Upon successful authentication, a session is created, and can be reused.

- By default, a `KOMGA-SESSION` cookie is set via `Set-Cookie` response header. This works well for browsers and clients that can handle cookies.
- If you specify a header `X-Auth-Token` during authentication, the session ID will be returned via this same header. You can then pass that header again for subsequent requests to reuse the session.

If you need to set the session cookie later on, you can call `/api/v1/login/set-cookie` with `X-Auth-Token`. The response will contain the `Set-Cookie` header.

Sessions are not created when authenticating with an API Key.

## Remember Me

During authentication, if a request parameter `remember-me` is passed and set to `true`, the server will also return a `komga-remember-me` cookie. This cookie will be used to login automatically even if the session has expired.

## Logout

You can explicitly logout an existing session by calling `/api/logout`. This would return a `204`.

## Deprecation

API endpoints marked as deprecated will be removed in the next major version.

Base URLs:

* <a href="https://demo.komga.org">https://demo.komga.org</a> - Demo server

* <a href="http://localhost:25600">http://localhost:25600</a> - Local development server

License: <a href="https://github.com/gotson/komga/blob/master/LICENSE">MIT</a>

<a href="https://komga.org">Komga documentation</a>

# Authentication

* API Key (apiKey)
    - Parameter Name: **X-API-Key**, in: header.

- HTTP Authentication, scheme: basic

<h1 id="komga-api-deprecated">Deprecated</h1>

## List age ratings

<a id="opIdgetAgeRatings_1"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/age-ratings \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/age-ratings`

<aside class="warning">
This operation is deprecated
</aside>

Use GET /v2/age-ratings instead. Deprecated since 1.26.0

<h3 id="list-age-ratings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library_id|query|[string]|false|none|
|collection_id|query|string|false|none|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="list-age-ratings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<h3 id="list-age-ratings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List authors

<a id="opIdgetAuthorsDeprecated"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/authors \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/authors`

<aside class="warning">
This operation is deprecated
</aside>

Use GET /api/v2/authors instead. Deprecated since 1.20.0.

<h3 id="list-authors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|none|
|library_id|query|string|false|none|
|collection_id|query|string|false|none|
|series_id|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "role": "string"
  }
]
```

<h3 id="list-authors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<h3 id="list-authors-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AuthorDto](#schemaauthordto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List authors' names

<a id="opIdgetAuthorsNames_1"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/authors/names \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/authors/names`

<aside class="warning">
This operation is deprecated
</aside>

Use GET /v2/authors/names instead. Deprecated since 1.26.0

<h3 id="list-authors-names-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|none|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="list-authors-names-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<h3 id="list-authors-names-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List authors' roles

<a id="opIdgetAuthorsRoles_1"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/authors/roles \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/authors/roles`

<aside class="warning">
This operation is deprecated
</aside>

Use GET /v2/authors/roles instead. Deprecated since 1.26.0

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="list-authors-roles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<h3 id="list-authors-roles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List genres

<a id="opIdgetGenres_1"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/genres \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/genres`

<aside class="warning">
This operation is deprecated
</aside>

Use GET /v2/genres instead. Deprecated since 1.26.0

<h3 id="list-genres-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library_id|query|[string]|false|none|
|collection_id|query|string|false|none|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="list-genres-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<h3 id="list-genres-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List languages

<a id="opIdgetLanguages_1"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/languages \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/languages`

<aside class="warning">
This operation is deprecated
</aside>

Use GET /v2/languages instead. Deprecated since 1.26.0

<h3 id="list-languages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library_id|query|[string]|false|none|
|collection_id|query|string|false|none|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="list-languages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<h3 id="list-languages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Update a library

<a id="opIdupdateLibraryByIdDeprecated"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/libraries/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "analyzeDimensions": true,
    "convertToCbz": true,
    "emptyTrashAfterScan": true,
    "hashFiles": true,
    "hashKoreader": true,
    "hashPages": true,
    "importBarcodeIsbn": true,
    "importComicInfoBook": true,
    "importComicInfoCollection": true,
    "importComicInfoReadList": true,
    "importComicInfoSeries": true,
    "importComicInfoSeriesAppendVolume": true,
    "importEpubBook": true,
    "importEpubSeries": true,
    "importLocalArtwork": true,
    "importMylarSeries": true,
    "name": "string",
    "oneshotsDirectory": "string",
    "repairExtensions": true,
    "root": "string",
    "scanCbx": true,
    "scanDirectoryExclusions": [
      "string"
    ],
    "scanEpub": true,
    "scanForceModifiedTime": true,
    "scanInterval": "DISABLED",
    "scanOnStartup": true,
    "scanPdf": true,
    "seriesCover": "FIRST"
  }'
```

`PUT /api/v1/libraries/{libraryId}`

<aside class="warning">
This operation is deprecated
</aside>

Use PATCH /api/v1/libraries/{libraryId} instead. Deprecated since 1.3.0.

Required role: **ADMIN**

> Body parameter

```json
{
  "analyzeDimensions": true,
  "convertToCbz": true,
  "emptyTrashAfterScan": true,
  "hashFiles": true,
  "hashKoreader": true,
  "hashPages": true,
  "importBarcodeIsbn": true,
  "importComicInfoBook": true,
  "importComicInfoCollection": true,
  "importComicInfoReadList": true,
  "importComicInfoSeries": true,
  "importComicInfoSeriesAppendVolume": true,
  "importEpubBook": true,
  "importEpubSeries": true,
  "importLocalArtwork": true,
  "importMylarSeries": true,
  "name": "string",
  "oneshotsDirectory": "string",
  "repairExtensions": true,
  "root": "string",
  "scanCbx": true,
  "scanDirectoryExclusions": [
    "string"
  ],
  "scanEpub": true,
  "scanForceModifiedTime": true,
  "scanInterval": "DISABLED",
  "scanOnStartup": true,
  "scanPdf": true,
  "seriesCover": "FIRST"
}
```

<h3 id="update-a-library-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|libraryId|path|string|true|none|
|body|body|[LibraryUpdateDto](#schemalibraryupdatedto)|true|none|
|» analyzeDimensions|body|boolean|false|none|
|» convertToCbz|body|boolean|false|none|
|» emptyTrashAfterScan|body|boolean|false|none|
|» hashFiles|body|boolean|false|none|
|» hashKoreader|body|boolean|false|none|
|» hashPages|body|boolean|false|none|
|» importBarcodeIsbn|body|boolean|false|none|
|» importComicInfoBook|body|boolean|false|none|
|» importComicInfoCollection|body|boolean|false|none|
|» importComicInfoReadList|body|boolean|false|none|
|» importComicInfoSeries|body|boolean|false|none|
|» importComicInfoSeriesAppendVolume|body|boolean|false|none|
|» importEpubBook|body|boolean|false|none|
|» importEpubSeries|body|boolean|false|none|
|» importLocalArtwork|body|boolean|false|none|
|» importMylarSeries|body|boolean|false|none|
|» name|body|string|false|none|
|» oneshotsDirectory|body|string|false|none|
|» repairExtensions|body|boolean|false|none|
|» root|body|string|false|none|
|» scanCbx|body|boolean|false|none|
|» scanDirectoryExclusions|body|[string]|false|none|
|» scanEpub|body|boolean|false|none|
|» scanForceModifiedTime|body|boolean|false|none|
|» scanInterval|body|string|false|none|
|» scanOnStartup|body|boolean|false|none|
|» scanPdf|body|boolean|false|none|
|» seriesCover|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» scanInterval|DISABLED|
|» scanInterval|HOURLY|
|» scanInterval|EVERY_6H|
|» scanInterval|EVERY_12H|
|» scanInterval|DAILY|
|» scanInterval|WEEKLY|
|» seriesCover|FIRST|
|» seriesCover|FIRST_UNREAD_OR_FIRST|
|» seriesCover|FIRST_UNREAD_OR_LAST|
|» seriesCover|LAST|

<h3 id="update-a-library-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List publishers

<a id="opIdgetPublishers_1"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/publishers \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/publishers`

<aside class="warning">
This operation is deprecated
</aside>

Use GET /v2/publishers instead. Deprecated since 1.26.0

<h3 id="list-publishers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library_id|query|[string]|false|none|
|collection_id|query|string|false|none|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="list-publishers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<h3 id="list-publishers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List series release dates

<a id="opIdgetSeriesReleaseDates"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/series/release-dates \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/series/release-dates`

<aside class="warning">
This operation is deprecated
</aside>

Use GET /v2/series/release-years instead. Deprecated since 1.26.0

<h3 id="list-series-release-dates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library_id|query|[string]|false|none|
|collection_id|query|string|false|none|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="list-series-release-dates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<h3 id="list-series-release-dates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List sharing labels

<a id="opIdgetSharingLabels_1"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/sharing-labels \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/sharing-labels`

<aside class="warning">
This operation is deprecated
</aside>

Use GET /v2/sharing-labels instead. Deprecated since 1.26.0

<h3 id="list-sharing-labels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library_id|query|[string]|false|none|
|collection_id|query|string|false|none|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="list-sharing-labels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<h3 id="list-sharing-labels-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List tags

<a id="opIdgetTags_1"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/tags \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/tags`

<aside class="warning">
This operation is deprecated
</aside>

Use GET /v2/tags instead. Deprecated since 1.26.0

<h3 id="list-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library_id|query|[string]|false|none|
|collection_id|query|string|false|none|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="list-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<h3 id="list-tags-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List book tags

<a id="opIdgetBookTags"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/tags/book \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/tags/book`

<aside class="warning">
This operation is deprecated
</aside>

Use GET /v2/tags instead. Deprecated since 1.26.0

<h3 id="list-book-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|series_id|query|string|false|none|
|readlist_id|query|string|false|none|
|library_id|query|[string]|false|none|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="list-book-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<h3 id="list-book-tags-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List series tags

<a id="opIdgetSeriesTags"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/tags/series \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/tags/series`

<aside class="warning">
This operation is deprecated
</aside>

Use GET /v2/tags instead. Deprecated since 1.26.0

<h3 id="list-series-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library_id|query|string|false|none|
|collection_id|query|string|false|none|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="list-series-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<h3 id="list-series-tags-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

<h1 id="komga-api-libraries">Libraries</h1>

Manage libraries.

## List all libraries

<a id="opIdgetLibraries"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/libraries \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/libraries`

The libraries are filtered based on the current user's permissions

> Example responses

> 200 Response

```json
[
  {
    "analyzeDimensions": true,
    "convertToCbz": true,
    "emptyTrashAfterScan": true,
    "hashFiles": true,
    "hashKoreader": true,
    "hashPages": true,
    "id": "string",
    "importBarcodeIsbn": true,
    "importComicInfoBook": true,
    "importComicInfoCollection": true,
    "importComicInfoReadList": true,
    "importComicInfoSeries": true,
    "importComicInfoSeriesAppendVolume": true,
    "importEpubBook": true,
    "importEpubSeries": true,
    "importLocalArtwork": true,
    "importMylarSeries": true,
    "name": "string",
    "oneshotsDirectory": "string",
    "repairExtensions": true,
    "root": "string",
    "scanCbx": true,
    "scanDirectoryExclusions": [
      "string"
    ],
    "scanEpub": true,
    "scanForceModifiedTime": true,
    "scanInterval": "DISABLED",
    "scanOnStartup": true,
    "scanPdf": true,
    "seriesCover": "FIRST",
    "unavailable": true
  }
]
```

<h3 id="list-all-libraries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<h3 id="list-all-libraries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[LibraryDto](#schemalibrarydto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Create a library

<a id="opIdaddLibrary"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/libraries \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "analyzeDimensions": true,
    "convertToCbz": true,
    "emptyTrashAfterScan": true,
    "hashFiles": true,
    "hashKoreader": true,
    "hashPages": true,
    "importBarcodeIsbn": true,
    "importComicInfoBook": true,
    "importComicInfoCollection": true,
    "importComicInfoReadList": true,
    "importComicInfoSeries": true,
    "importComicInfoSeriesAppendVolume": true,
    "importEpubBook": true,
    "importEpubSeries": true,
    "importLocalArtwork": true,
    "importMylarSeries": true,
    "name": "string",
    "oneshotsDirectory": "string",
    "repairExtensions": true,
    "root": "string",
    "scanCbx": true,
    "scanDirectoryExclusions": [
      "string"
    ],
    "scanEpub": true,
    "scanForceModifiedTime": true,
    "scanInterval": "DISABLED",
    "scanOnStartup": true,
    "scanPdf": true,
    "seriesCover": "FIRST"
  }'
```

`POST /api/v1/libraries`

Required role: **ADMIN**

> Body parameter

```json
{
  "analyzeDimensions": true,
  "convertToCbz": true,
  "emptyTrashAfterScan": true,
  "hashFiles": true,
  "hashKoreader": true,
  "hashPages": true,
  "importBarcodeIsbn": true,
  "importComicInfoBook": true,
  "importComicInfoCollection": true,
  "importComicInfoReadList": true,
  "importComicInfoSeries": true,
  "importComicInfoSeriesAppendVolume": true,
  "importEpubBook": true,
  "importEpubSeries": true,
  "importLocalArtwork": true,
  "importMylarSeries": true,
  "name": "string",
  "oneshotsDirectory": "string",
  "repairExtensions": true,
  "root": "string",
  "scanCbx": true,
  "scanDirectoryExclusions": [
    "string"
  ],
  "scanEpub": true,
  "scanForceModifiedTime": true,
  "scanInterval": "DISABLED",
  "scanOnStartup": true,
  "scanPdf": true,
  "seriesCover": "FIRST"
}
```

<h3 id="create-a-library-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LibraryCreationDto](#schemalibrarycreationdto)|true|none|
|» analyzeDimensions|body|boolean|true|none|
|» convertToCbz|body|boolean|true|none|
|» emptyTrashAfterScan|body|boolean|true|none|
|» hashFiles|body|boolean|true|none|
|» hashKoreader|body|boolean|true|none|
|» hashPages|body|boolean|true|none|
|» importBarcodeIsbn|body|boolean|true|none|
|» importComicInfoBook|body|boolean|true|none|
|» importComicInfoCollection|body|boolean|true|none|
|» importComicInfoReadList|body|boolean|true|none|
|» importComicInfoSeries|body|boolean|true|none|
|» importComicInfoSeriesAppendVolume|body|boolean|true|none|
|» importEpubBook|body|boolean|true|none|
|» importEpubSeries|body|boolean|true|none|
|» importLocalArtwork|body|boolean|true|none|
|» importMylarSeries|body|boolean|true|none|
|» name|body|string|true|none|
|» oneshotsDirectory|body|string|false|none|
|» repairExtensions|body|boolean|true|none|
|» root|body|string|true|none|
|» scanCbx|body|boolean|true|none|
|» scanDirectoryExclusions|body|[string]|true|none|
|» scanEpub|body|boolean|true|none|
|» scanForceModifiedTime|body|boolean|true|none|
|» scanInterval|body|string|true|none|
|» scanOnStartup|body|boolean|true|none|
|» scanPdf|body|boolean|true|none|
|» seriesCover|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» scanInterval|DISABLED|
|» scanInterval|HOURLY|
|» scanInterval|EVERY_6H|
|» scanInterval|EVERY_12H|
|» scanInterval|DAILY|
|» scanInterval|WEEKLY|
|» seriesCover|FIRST|
|» seriesCover|FIRST_UNREAD_OR_FIRST|
|» seriesCover|FIRST_UNREAD_OR_LAST|
|» seriesCover|LAST|

> Example responses

> 200 Response

```json
{
  "analyzeDimensions": true,
  "convertToCbz": true,
  "emptyTrashAfterScan": true,
  "hashFiles": true,
  "hashKoreader": true,
  "hashPages": true,
  "id": "string",
  "importBarcodeIsbn": true,
  "importComicInfoBook": true,
  "importComicInfoCollection": true,
  "importComicInfoReadList": true,
  "importComicInfoSeries": true,
  "importComicInfoSeriesAppendVolume": true,
  "importEpubBook": true,
  "importEpubSeries": true,
  "importLocalArtwork": true,
  "importMylarSeries": true,
  "name": "string",
  "oneshotsDirectory": "string",
  "repairExtensions": true,
  "root": "string",
  "scanCbx": true,
  "scanDirectoryExclusions": [
    "string"
  ],
  "scanEpub": true,
  "scanForceModifiedTime": true,
  "scanInterval": "DISABLED",
  "scanOnStartup": true,
  "scanPdf": true,
  "seriesCover": "FIRST",
  "unavailable": true
}
```

<h3 id="create-a-library-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LibraryDto](#schemalibrarydto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Get details for a single library

<a id="opIdgetLibraryById"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/libraries/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/libraries/{libraryId}`

<h3 id="get-details-for-a-single-library-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|libraryId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "analyzeDimensions": true,
  "convertToCbz": true,
  "emptyTrashAfterScan": true,
  "hashFiles": true,
  "hashKoreader": true,
  "hashPages": true,
  "id": "string",
  "importBarcodeIsbn": true,
  "importComicInfoBook": true,
  "importComicInfoCollection": true,
  "importComicInfoReadList": true,
  "importComicInfoSeries": true,
  "importComicInfoSeriesAppendVolume": true,
  "importEpubBook": true,
  "importEpubSeries": true,
  "importLocalArtwork": true,
  "importMylarSeries": true,
  "name": "string",
  "oneshotsDirectory": "string",
  "repairExtensions": true,
  "root": "string",
  "scanCbx": true,
  "scanDirectoryExclusions": [
    "string"
  ],
  "scanEpub": true,
  "scanForceModifiedTime": true,
  "scanInterval": "DISABLED",
  "scanOnStartup": true,
  "scanPdf": true,
  "seriesCover": "FIRST",
  "unavailable": true
}
```

<h3 id="get-details-for-a-single-library-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LibraryDto](#schemalibrarydto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Delete a library

<a id="opIddeleteLibraryById"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/libraries/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/v1/libraries/{libraryId}`

Required role: **ADMIN**

<h3 id="delete-a-library-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|libraryId|path|string|true|none|

<h3 id="delete-a-library-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Update a library

<a id="opIdupdateLibraryById"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/libraries/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "analyzeDimensions": true,
    "convertToCbz": true,
    "emptyTrashAfterScan": true,
    "hashFiles": true,
    "hashKoreader": true,
    "hashPages": true,
    "importBarcodeIsbn": true,
    "importComicInfoBook": true,
    "importComicInfoCollection": true,
    "importComicInfoReadList": true,
    "importComicInfoSeries": true,
    "importComicInfoSeriesAppendVolume": true,
    "importEpubBook": true,
    "importEpubSeries": true,
    "importLocalArtwork": true,
    "importMylarSeries": true,
    "name": "string",
    "oneshotsDirectory": "string",
    "repairExtensions": true,
    "root": "string",
    "scanCbx": true,
    "scanDirectoryExclusions": [
      "string"
    ],
    "scanEpub": true,
    "scanForceModifiedTime": true,
    "scanInterval": "DISABLED",
    "scanOnStartup": true,
    "scanPdf": true,
    "seriesCover": "FIRST"
  }'
```

`PATCH /api/v1/libraries/{libraryId}`

You can omit fields you don't want to update

Required role: **ADMIN**

> Body parameter

```json
{
  "analyzeDimensions": true,
  "convertToCbz": true,
  "emptyTrashAfterScan": true,
  "hashFiles": true,
  "hashKoreader": true,
  "hashPages": true,
  "importBarcodeIsbn": true,
  "importComicInfoBook": true,
  "importComicInfoCollection": true,
  "importComicInfoReadList": true,
  "importComicInfoSeries": true,
  "importComicInfoSeriesAppendVolume": true,
  "importEpubBook": true,
  "importEpubSeries": true,
  "importLocalArtwork": true,
  "importMylarSeries": true,
  "name": "string",
  "oneshotsDirectory": "string",
  "repairExtensions": true,
  "root": "string",
  "scanCbx": true,
  "scanDirectoryExclusions": [
    "string"
  ],
  "scanEpub": true,
  "scanForceModifiedTime": true,
  "scanInterval": "DISABLED",
  "scanOnStartup": true,
  "scanPdf": true,
  "seriesCover": "FIRST"
}
```

<h3 id="update-a-library-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|libraryId|path|string|true|none|
|body|body|[LibraryUpdateDto](#schemalibraryupdatedto)|true|none|
|» analyzeDimensions|body|boolean|false|none|
|» convertToCbz|body|boolean|false|none|
|» emptyTrashAfterScan|body|boolean|false|none|
|» hashFiles|body|boolean|false|none|
|» hashKoreader|body|boolean|false|none|
|» hashPages|body|boolean|false|none|
|» importBarcodeIsbn|body|boolean|false|none|
|» importComicInfoBook|body|boolean|false|none|
|» importComicInfoCollection|body|boolean|false|none|
|» importComicInfoReadList|body|boolean|false|none|
|» importComicInfoSeries|body|boolean|false|none|
|» importComicInfoSeriesAppendVolume|body|boolean|false|none|
|» importEpubBook|body|boolean|false|none|
|» importEpubSeries|body|boolean|false|none|
|» importLocalArtwork|body|boolean|false|none|
|» importMylarSeries|body|boolean|false|none|
|» name|body|string|false|none|
|» oneshotsDirectory|body|string|false|none|
|» repairExtensions|body|boolean|false|none|
|» root|body|string|false|none|
|» scanCbx|body|boolean|false|none|
|» scanDirectoryExclusions|body|[string]|false|none|
|» scanEpub|body|boolean|false|none|
|» scanForceModifiedTime|body|boolean|false|none|
|» scanInterval|body|string|false|none|
|» scanOnStartup|body|boolean|false|none|
|» scanPdf|body|boolean|false|none|
|» seriesCover|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» scanInterval|DISABLED|
|» scanInterval|HOURLY|
|» scanInterval|EVERY_6H|
|» scanInterval|EVERY_12H|
|» scanInterval|DAILY|
|» scanInterval|WEEKLY|
|» seriesCover|FIRST|
|» seriesCover|FIRST_UNREAD_OR_FIRST|
|» seriesCover|FIRST_UNREAD_OR_LAST|
|» seriesCover|LAST|

<h3 id="update-a-library-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Analyze a library

<a id="opIdlibraryAnalyze"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/libraries/string/analyze \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /api/v1/libraries/{libraryId}/analyze`

Required role: **ADMIN**

<h3 id="analyze-a-library-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|libraryId|path|string|true|none|

<h3 id="analyze-a-library-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Empty trash for a library

<a id="opIdlibraryEmptyTrash"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/libraries/string/empty-trash \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /api/v1/libraries/{libraryId}/empty-trash`

Required role: **ADMIN**

<h3 id="empty-trash-for-a-library-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|libraryId|path|string|true|none|

<h3 id="empty-trash-for-a-library-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Refresh metadata for a library

<a id="opIdlibraryRefreshMetadata"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/libraries/string/metadata/refresh \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /api/v1/libraries/{libraryId}/metadata/refresh`

Required role: **ADMIN**

<h3 id="refresh-metadata-for-a-library-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|libraryId|path|string|true|none|

<h3 id="refresh-metadata-for-a-library-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Scan a library

<a id="opIdlibraryScan"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/libraries/string/scan \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /api/v1/libraries/{libraryId}/scan`

Required role: **ADMIN**

<h3 id="scan-a-library-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|libraryId|path|string|true|none|
|deep|query|boolean|false|none|

<h3 id="scan-a-library-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

<h1 id="komga-api-series">Series</h1>

Manage series.

## List series

<a id="opIdgetSeriesDeprecated"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/series \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/series`

<aside class="warning">
This operation is deprecated
</aside>

Use POST /api/v1/series/list instead. Deprecated since 1.19.0.

<h3 id="list-series-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|none|
|library_id|query|[string]|false|none|
|collection_id|query|[string]|false|none|
|status|query|[string]|false|none|
|read_status|query|[string]|false|none|
|publisher|query|[string]|false|none|
|language|query|[string]|false|none|
|genre|query|[string]|false|none|
|tag|query|[string]|false|none|
|age_rating|query|[string]|false|none|
|release_year|query|[string]|false|none|
|sharing_label|query|[string]|false|none|
|deleted|query|boolean|false|none|
|complete|query|boolean|false|none|
|oneshot|query|boolean|false|none|
|unpaged|query|boolean|false|none|
|search_regex|query|string|false|Search by regex criteria, in the form: regex,field. Supported fields are TITLE and TITLE_SORT.|
|page|query|integer|false|Zero-based page index (0..N)|
|size|query|integer|false|The size of the page to be returned|
|sort|query|[string]|false|Sorting criteria in the format: property(,asc\|desc). Default sort order is ascending. Multiple sort criteria are supported.|
|author|query|[string]|false|Author criteria in the format: name,role. Multiple author criteria are supported.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|ENDED|
|status|ONGOING|
|status|ABANDONED|
|status|HIATUS|
|read_status|UNREAD|
|read_status|READ|
|read_status|IN_PROGRESS|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "booksCount": 0,
      "booksInProgressCount": 0,
      "booksMetadata": {
        "authors": [
          {
            "name": "string",
            "role": "string"
          }
        ],
        "created": "1970-01-01T00:00:00Z",
        "lastModified": "1970-01-01T00:00:00Z",
        "notableEntities": [
          {
            "kind": "string",
            "name": "string"
          }
        ],
        "releaseDate": "1970-01-01",
        "summary": "string",
        "summaryNumber": "string",
        "tags": [
          "string"
        ]
      },
      "booksReadCount": 0,
      "booksUnreadCount": 0,
      "created": "1970-01-01T00:00:00Z",
      "deleted": true,
      "fileLastModified": "1970-01-01T00:00:00Z",
      "id": "string",
      "lastModified": "1970-01-01T00:00:00Z",
      "libraryId": "string",
      "metadata": {
        "ageRating": 0,
        "ageRatingLock": true,
        "alternateTitles": [
          {
            "label": "string",
            "title": "string"
          }
        ],
        "alternateTitlesLock": true,
        "created": "1970-01-01T00:00:00Z",
        "genres": [
          "string"
        ],
        "genresLock": true,
        "language": "string",
        "languageLock": true,
        "lastModified": "1970-01-01T00:00:00Z",
        "links": [
          {
            "label": "string",
            "url": "string"
          }
        ],
        "linksLock": true,
        "publisher": "string",
        "publisherLock": true,
        "readingDirection": "string",
        "readingDirectionLock": true,
        "sharingLabels": [
          "string"
        ],
        "sharingLabelsLock": true,
        "status": "string",
        "statusLock": true,
        "summary": "string",
        "summaryLock": true,
        "tags": [
          "string"
        ],
        "tagsLock": true,
        "title": "string",
        "titleLock": true,
        "titleSort": "string",
        "titleSortLock": true,
        "totalBookCount": 0,
        "totalBookCountLock": true
      },
      "name": "string",
      "oneshot": true,
      "url": "string"
    }
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

<h3 id="list-series-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageSeriesDto](#schemapageseriesdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List series groups

<a id="opIdgetSeriesAlphabeticalGroupsDeprecated"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/series/alphabetical-groups \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/series/alphabetical-groups`

<aside class="warning">
This operation is deprecated
</aside>

Use POST /api/v1/series/list/alphabetical-groups instead. Deprecated since 1.19.0.

<h3 id="list-series-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|none|
|library_id|query|[string]|false|none|
|collection_id|query|[string]|false|none|
|status|query|[string]|false|none|
|read_status|query|[string]|false|none|
|publisher|query|[string]|false|none|
|language|query|[string]|false|none|
|genre|query|[string]|false|none|
|tag|query|[string]|false|none|
|age_rating|query|[string]|false|none|
|release_year|query|[string]|false|none|
|sharing_label|query|[string]|false|none|
|deleted|query|boolean|false|none|
|complete|query|boolean|false|none|
|oneshot|query|boolean|false|none|
|search_regex|query|string|false|Search by regex criteria, in the form: regex,field. Supported fields are TITLE and TITLE_SORT.|
|author|query|[string]|false|Author criteria in the format: name,role. Multiple author criteria are supported.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|ENDED|
|status|ONGOING|
|status|ABANDONED|
|status|HIATUS|
|read_status|UNREAD|
|read_status|READ|
|read_status|IN_PROGRESS|

> Example responses

> 200 Response

```json
[
  {
    "count": 0,
    "group": "string"
  }
]
```

<h3 id="list-series-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<h3 id="list-series-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GroupCountDto](#schemagroupcountdto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List latest series

<a id="opIdgetSeriesLatest"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/series/latest \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/series/latest`

Return recently added or updated series.

<h3 id="list-latest-series-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library_id|query|[string]|false|none|
|deleted|query|boolean|false|none|
|oneshot|query|boolean|false|none|
|unpaged|query|boolean|false|none|
|page|query|integer|false|Zero-based page index (0..N)|
|size|query|integer|false|The size of the page to be returned|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "booksCount": 0,
      "booksInProgressCount": 0,
      "booksMetadata": {
        "authors": [
          {
            "name": "string",
            "role": "string"
          }
        ],
        "created": "1970-01-01T00:00:00Z",
        "lastModified": "1970-01-01T00:00:00Z",
        "notableEntities": [
          {
            "kind": "string",
            "name": "string"
          }
        ],
        "releaseDate": "1970-01-01",
        "summary": "string",
        "summaryNumber": "string",
        "tags": [
          "string"
        ]
      },
      "booksReadCount": 0,
      "booksUnreadCount": 0,
      "created": "1970-01-01T00:00:00Z",
      "deleted": true,
      "fileLastModified": "1970-01-01T00:00:00Z",
      "id": "string",
      "lastModified": "1970-01-01T00:00:00Z",
      "libraryId": "string",
      "metadata": {
        "ageRating": 0,
        "ageRatingLock": true,
        "alternateTitles": [
          {
            "label": "string",
            "title": "string"
          }
        ],
        "alternateTitlesLock": true,
        "created": "1970-01-01T00:00:00Z",
        "genres": [
          "string"
        ],
        "genresLock": true,
        "language": "string",
        "languageLock": true,
        "lastModified": "1970-01-01T00:00:00Z",
        "links": [
          {
            "label": "string",
            "url": "string"
          }
        ],
        "linksLock": true,
        "publisher": "string",
        "publisherLock": true,
        "readingDirection": "string",
        "readingDirectionLock": true,
        "sharingLabels": [
          "string"
        ],
        "sharingLabelsLock": true,
        "status": "string",
        "statusLock": true,
        "summary": "string",
        "summaryLock": true,
        "tags": [
          "string"
        ],
        "tagsLock": true,
        "title": "string",
        "titleLock": true,
        "titleSort": "string",
        "titleSortLock": true,
        "totalBookCount": 0,
        "totalBookCountLock": true
      },
      "name": "string",
      "oneshot": true,
      "url": "string"
    }
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

<h3 id="list-latest-series-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageSeriesDto](#schemapageseriesdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List series

<a id="opIdgetSeries"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/series/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "condition": {},
    "fullTextSearch": "string"
  }'
```

`POST /api/v1/series/list`

> Body parameter

```json
{
  "condition": {},
  "fullTextSearch": "string"
}
```

<h3 id="list-series-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|unpaged|query|boolean|false|none|
|page|query|integer|false|Zero-based page index (0..N)|
|size|query|integer|false|The size of the page to be returned|
|sort|query|[string]|false|Sorting criteria in the format: property(,asc\|desc). Default sort order is ascending. Multiple sort criteria are supported.|
|body|body|[SeriesSearch](#schemaseriessearch)|true|none|
|» condition|body|[SearchConditionSeries](#schemasearchconditionseries)|false|none|
|» fullTextSearch|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "booksCount": 0,
      "booksInProgressCount": 0,
      "booksMetadata": {
        "authors": [
          {
            "name": "string",
            "role": "string"
          }
        ],
        "created": "1970-01-01T00:00:00Z",
        "lastModified": "1970-01-01T00:00:00Z",
        "notableEntities": [
          {
            "kind": "string",
            "name": "string"
          }
        ],
        "releaseDate": "1970-01-01",
        "summary": "string",
        "summaryNumber": "string",
        "tags": [
          "string"
        ]
      },
      "booksReadCount": 0,
      "booksUnreadCount": 0,
      "created": "1970-01-01T00:00:00Z",
      "deleted": true,
      "fileLastModified": "1970-01-01T00:00:00Z",
      "id": "string",
      "lastModified": "1970-01-01T00:00:00Z",
      "libraryId": "string",
      "metadata": {
        "ageRating": 0,
        "ageRatingLock": true,
        "alternateTitles": [
          {
            "label": "string",
            "title": "string"
          }
        ],
        "alternateTitlesLock": true,
        "created": "1970-01-01T00:00:00Z",
        "genres": [
          "string"
        ],
        "genresLock": true,
        "language": "string",
        "languageLock": true,
        "lastModified": "1970-01-01T00:00:00Z",
        "links": [
          {
            "label": "string",
            "url": "string"
          }
        ],
        "linksLock": true,
        "publisher": "string",
        "publisherLock": true,
        "readingDirection": "string",
        "readingDirectionLock": true,
        "sharingLabels": [
          "string"
        ],
        "sharingLabelsLock": true,
        "status": "string",
        "statusLock": true,
        "summary": "string",
        "summaryLock": true,
        "tags": [
          "string"
        ],
        "tagsLock": true,
        "title": "string",
        "titleLock": true,
        "titleSort": "string",
        "titleSortLock": true,
        "totalBookCount": 0,
        "totalBookCountLock": true
      },
      "name": "string",
      "oneshot": true,
      "url": "string"
    }
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

<h3 id="list-series-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageSeriesDto](#schemapageseriesdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List series groups

<a id="opIdgetSeriesAlphabeticalGroups"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/series/list/alphabetical-groups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "condition": {},
    "fullTextSearch": "string"
  }'
```

`POST /api/v1/series/list/alphabetical-groups`

List series grouped by the first character of their sort title.

> Body parameter

```json
{
  "condition": {},
  "fullTextSearch": "string"
}
```

<h3 id="list-series-groups-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SeriesSearch](#schemaseriessearch)|true|none|
|» condition|body|[SearchConditionSeries](#schemasearchconditionseries)|false|none|
|» fullTextSearch|body|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "count": 0,
    "group": "string"
  }
]
```

<h3 id="list-series-groups-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<h3 id="list-series-groups-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GroupCountDto](#schemagroupcountdto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List new series

<a id="opIdgetSeriesNew"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/series/new \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/series/new`

Return newly added series.

<h3 id="list-new-series-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library_id|query|[string]|false|none|
|deleted|query|boolean|false|none|
|oneshot|query|boolean|false|none|
|unpaged|query|boolean|false|none|
|page|query|integer|false|Zero-based page index (0..N)|
|size|query|integer|false|The size of the page to be returned|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "booksCount": 0,
      "booksInProgressCount": 0,
      "booksMetadata": {
        "authors": [
          {
            "name": "string",
            "role": "string"
          }
        ],
        "created": "1970-01-01T00:00:00Z",
        "lastModified": "1970-01-01T00:00:00Z",
        "notableEntities": [
          {
            "kind": "string",
            "name": "string"
          }
        ],
        "releaseDate": "1970-01-01",
        "summary": "string",
        "summaryNumber": "string",
        "tags": [
          "string"
        ]
      },
      "booksReadCount": 0,
      "booksUnreadCount": 0,
      "created": "1970-01-01T00:00:00Z",
      "deleted": true,
      "fileLastModified": "1970-01-01T00:00:00Z",
      "id": "string",
      "lastModified": "1970-01-01T00:00:00Z",
      "libraryId": "string",
      "metadata": {
        "ageRating": 0,
        "ageRatingLock": true,
        "alternateTitles": [
          {
            "label": "string",
            "title": "string"
          }
        ],
        "alternateTitlesLock": true,
        "created": "1970-01-01T00:00:00Z",
        "genres": [
          "string"
        ],
        "genresLock": true,
        "language": "string",
        "languageLock": true,
        "lastModified": "1970-01-01T00:00:00Z",
        "links": [
          {
            "label": "string",
            "url": "string"
          }
        ],
        "linksLock": true,
        "publisher": "string",
        "publisherLock": true,
        "readingDirection": "string",
        "readingDirectionLock": true,
        "sharingLabels": [
          "string"
        ],
        "sharingLabelsLock": true,
        "status": "string",
        "statusLock": true,
        "summary": "string",
        "summaryLock": true,
        "tags": [
          "string"
        ],
        "tagsLock": true,
        "title": "string",
        "titleLock": true,
        "titleSort": "string",
        "titleSortLock": true,
        "totalBookCount": 0,
        "totalBookCountLock": true
      },
      "name": "string",
      "oneshot": true,
      "url": "string"
    }
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

<h3 id="list-new-series-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageSeriesDto](#schemapageseriesdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List updated series

<a id="opIdgetSeriesUpdated"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/series/updated \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/series/updated`

Return recently updated series, but not newly added ones.

<h3 id="list-updated-series-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library_id|query|[string]|false|none|
|deleted|query|boolean|false|none|
|oneshot|query|boolean|false|none|
|unpaged|query|boolean|false|none|
|page|query|integer|false|Zero-based page index (0..N)|
|size|query|integer|false|The size of the page to be returned|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "booksCount": 0,
      "booksInProgressCount": 0,
      "booksMetadata": {
        "authors": [
          {
            "name": "string",
            "role": "string"
          }
        ],
        "created": "1970-01-01T00:00:00Z",
        "lastModified": "1970-01-01T00:00:00Z",
        "notableEntities": [
          {
            "kind": "string",
            "name": "string"
          }
        ],
        "releaseDate": "1970-01-01",
        "summary": "string",
        "summaryNumber": "string",
        "tags": [
          "string"
        ]
      },
      "booksReadCount": 0,
      "booksUnreadCount": 0,
      "created": "1970-01-01T00:00:00Z",
      "deleted": true,
      "fileLastModified": "1970-01-01T00:00:00Z",
      "id": "string",
      "lastModified": "1970-01-01T00:00:00Z",
      "libraryId": "string",
      "metadata": {
        "ageRating": 0,
        "ageRatingLock": true,
        "alternateTitles": [
          {
            "label": "string",
            "title": "string"
          }
        ],
        "alternateTitlesLock": true,
        "created": "1970-01-01T00:00:00Z",
        "genres": [
          "string"
        ],
        "genresLock": true,
        "language": "string",
        "languageLock": true,
        "lastModified": "1970-01-01T00:00:00Z",
        "links": [
          {
            "label": "string",
            "url": "string"
          }
        ],
        "linksLock": true,
        "publisher": "string",
        "publisherLock": true,
        "readingDirection": "string",
        "readingDirectionLock": true,
        "sharingLabels": [
          "string"
        ],
        "sharingLabelsLock": true,
        "status": "string",
        "statusLock": true,
        "summary": "string",
        "summaryLock": true,
        "tags": [
          "string"
        ],
        "tagsLock": true,
        "title": "string",
        "titleLock": true,
        "titleSort": "string",
        "titleSortLock": true,
        "totalBookCount": 0,
        "totalBookCountLock": true
      },
      "name": "string",
      "oneshot": true,
      "url": "string"
    }
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

<h3 id="list-updated-series-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageSeriesDto](#schemapageseriesdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Get series details

<a id="opIdgetSeriesById"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/series/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/series/{seriesId}`

<h3 id="get-series-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|seriesId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "booksCount": 0,
  "booksInProgressCount": 0,
  "booksMetadata": {
    "authors": [
      {
        "name": "string",
        "role": "string"
      }
    ],
    "created": "1970-01-01T00:00:00Z",
    "lastModified": "1970-01-01T00:00:00Z",
    "notableEntities": [
      {
        "kind": "string",
        "name": "string"
      }
    ],
    "releaseDate": "1970-01-01",
    "summary": "string",
    "summaryNumber": "string",
    "tags": [
      "string"
    ]
  },
  "booksReadCount": 0,
  "booksUnreadCount": 0,
  "created": "1970-01-01T00:00:00Z",
  "deleted": true,
  "fileLastModified": "1970-01-01T00:00:00Z",
  "id": "string",
  "lastModified": "1970-01-01T00:00:00Z",
  "libraryId": "string",
  "metadata": {
    "ageRating": 0,
    "ageRatingLock": true,
    "alternateTitles": [
      {
        "label": "string",
        "title": "string"
      }
    ],
    "alternateTitlesLock": true,
    "created": "1970-01-01T00:00:00Z",
    "genres": [
      "string"
    ],
    "genresLock": true,
    "language": "string",
    "languageLock": true,
    "lastModified": "1970-01-01T00:00:00Z",
    "links": [
      {
        "label": "string",
        "url": "string"
      }
    ],
    "linksLock": true,
    "publisher": "string",
    "publisherLock": true,
    "readingDirection": "string",
    "readingDirectionLock": true,
    "sharingLabels": [
      "string"
    ],
    "sharingLabelsLock": true,
    "status": "string",
    "statusLock": true,
    "summary": "string",
    "summaryLock": true,
    "tags": [
      "string"
    ],
    "tagsLock": true,
    "title": "string",
    "titleLock": true,
    "titleSort": "string",
    "titleSortLock": true,
    "totalBookCount": 0,
    "totalBookCountLock": true
  },
  "name": "string",
  "oneshot": true,
  "url": "string"
}
```

<h3 id="get-series-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SeriesDto](#schemaseriesdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Analyze series

<a id="opIdseriesAnalyze"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/series/string/analyze \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /api/v1/series/{seriesId}/analyze`

Required role: **ADMIN**

<h3 id="analyze-series-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|seriesId|path|string|true|none|

<h3 id="analyze-series-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List series' books

<a id="opIdgetBooksBySeriesId"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/series/string/books \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/series/{seriesId}/books`

<aside class="warning">
This operation is deprecated
</aside>

Use POST /api/v1/books/list instead. Deprecated since 1.19.0.

<h3 id="list-series-books-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|seriesId|path|string|true|none|
|media_status|query|[string]|false|none|
|read_status|query|[string]|false|none|
|tag|query|[string]|false|none|
|deleted|query|boolean|false|none|
|unpaged|query|boolean|false|none|
|page|query|integer|false|Zero-based page index (0..N)|
|size|query|integer|false|The size of the page to be returned|
|sort|query|[string]|false|Sorting criteria in the format: property(,asc\|desc). Default sort order is ascending. Multiple sort criteria are supported.|
|author|query|[string]|false|Author criteria in the format: name,role. Multiple author criteria are supported.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|media_status|UNKNOWN|
|media_status|ERROR|
|media_status|READY|
|media_status|UNSUPPORTED|
|media_status|OUTDATED|
|read_status|UNREAD|
|read_status|READ|
|read_status|IN_PROGRESS|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "created": "1970-01-01T00:00:00Z",
      "deleted": true,
      "fileHash": "string",
      "fileLastModified": "1970-01-01T00:00:00Z",
      "id": "string",
      "lastModified": "1970-01-01T00:00:00Z",
      "libraryId": "string",
      "media": {
        "comment": "string",
        "epubDivinaCompatible": true,
        "epubIsKepub": true,
        "mediaProfile": "string",
        "mediaType": "string",
        "pagesCount": 0,
        "status": "string"
      },
      "metadata": {
        "authors": [
          {
            "name": "string",
            "role": "string"
          }
        ],
        "authorsLock": true,
        "created": "1970-01-01T00:00:00Z",
        "isbn": "string",
        "isbnLock": true,
        "lastModified": "1970-01-01T00:00:00Z",
        "links": [
          {
            "label": "string",
            "url": "string"
          }
        ],
        "linksLock": true,
        "notableEntities": [
          {
            "kind": "string",
            "name": "string"
          }
        ],
        "notableEntitiesLock": true,
        "number": "string",
        "numberLock": true,
        "numberSort": 0,
        "numberSortLock": true,
        "releaseDate": "1970-01-01",
        "releaseDateLock": true,
        "summary": "string",
        "summaryLock": true,
        "tags": [
          "string"
        ],
        "tagsLock": true,
        "title": "string",
        "titleLock": true
      },
      "name": "string",
      "number": 0,
      "oneshot": true,
      "readProgress": {
        "completed": true,
        "created": "1970-01-01T00:00:00Z",
        "deviceId": "string",
        "deviceName": "string",
        "lastModified": "1970-01-01T00:00:00Z",
        "page": 0,
        "readDate": "1970-01-01T00:00:00Z"
      },
      "seriesId": "string",
      "seriesTitle": "string",
      "size": "string",
      "sizeBytes": 0,
      "url": "string"
    }
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

<h3 id="list-series-books-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageBookDto](#schemapagebookdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List series' collections

<a id="opIdgetCollectionsBySeriesId"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/series/string/collections \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/series/{seriesId}/collections`

<h3 id="list-series-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|seriesId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "createdDate": "1970-01-01T00:00:00Z",
    "filtered": true,
    "id": "string",
    "lastModifiedDate": "1970-01-01T00:00:00Z",
    "name": "string",
    "ordered": true,
    "seriesIds": [
      "string"
    ]
  }
]
```

<h3 id="list-series-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<h3 id="list-series-collections-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CollectionDto](#schemacollectiondto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Download series

<a id="opIddownloadSeriesAsZip"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/series/string/file \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/series/{seriesId}/file`

Download the whole series as a ZIP file.

Required role: **FILE_DOWNLOAD**

<h3 id="download-series-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|seriesId|path|string|true|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="download-series-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[StreamingResponseBody](#schemastreamingresponsebody)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Delete series files

<a id="opIddeleteSeriesFile"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/series/string/file \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/v1/series/{seriesId}/file`

Delete all of the series' books files on disk.

Required role: **ADMIN**

<h3 id="delete-series-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|seriesId|path|string|true|none|

<h3 id="delete-series-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Update series metadata

<a id="opIdupdateSeriesMetadata"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/series/string/metadata \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "ageRating": 0,
    "ageRatingLock": true,
    "alternateTitles": [
      {
        "label": "string",
        "title": "string"
      }
    ],
    "alternateTitlesLock": true,
    "genres": [
      "string"
    ],
    "genresLock": true,
    "language": "string",
    "languageLock": true,
    "links": [
      {
        "label": "string",
        "url": "string"
      }
    ],
    "linksLock": true,
    "publisher": "string",
    "publisherLock": true,
    "readingDirection": "LEFT_TO_RIGHT",
    "readingDirectionLock": true,
    "sharingLabels": [
      "string"
    ],
    "sharingLabelsLock": true,
    "status": "ENDED",
    "statusLock": true,
    "summary": "string",
    "summaryLock": true,
    "tags": [
      "string"
    ],
    "tagsLock": true,
    "title": "string",
    "titleLock": true,
    "titleSort": "string",
    "titleSortLock": true,
    "totalBookCount": 0,
    "totalBookCountLock": true
  }'
```

`PATCH /api/v1/series/{seriesId}/metadata`

Required role: **ADMIN**

> Body parameter

```json
{
  "ageRating": 0,
  "ageRatingLock": true,
  "alternateTitles": [
    {
      "label": "string",
      "title": "string"
    }
  ],
  "alternateTitlesLock": true,
  "genres": [
    "string"
  ],
  "genresLock": true,
  "language": "string",
  "languageLock": true,
  "links": [
    {
      "label": "string",
      "url": "string"
    }
  ],
  "linksLock": true,
  "publisher": "string",
  "publisherLock": true,
  "readingDirection": "LEFT_TO_RIGHT",
  "readingDirectionLock": true,
  "sharingLabels": [
    "string"
  ],
  "sharingLabelsLock": true,
  "status": "ENDED",
  "statusLock": true,
  "summary": "string",
  "summaryLock": true,
  "tags": [
    "string"
  ],
  "tagsLock": true,
  "title": "string",
  "titleLock": true,
  "titleSort": "string",
  "titleSortLock": true,
  "totalBookCount": 0,
  "totalBookCountLock": true
}
```

<h3 id="update-series-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|seriesId|path|string|true|none|
|body|body|[SeriesMetadataUpdateDto](#schemaseriesmetadataupdatedto)|true|none|
|» ageRating|body|integer(int32)|false|none|
|» ageRatingLock|body|boolean|false|none|
|» alternateTitles|body|[[AlternateTitleUpdateDto](#schemaalternatetitleupdatedto)]|false|none|
|» alternateTitlesLock|body|boolean|false|none|
|» genres|body|[string]|false|none|
|» genresLock|body|boolean|false|none|
|» language|body|string|false|none|
|» languageLock|body|boolean|false|none|
|» links|body|[[WebLinkUpdateDto](#schemaweblinkupdatedto)]|false|none|
|» linksLock|body|boolean|false|none|
|» publisher|body|string|false|none|
|» publisherLock|body|boolean|false|none|
|» readingDirection|body|string|false|none|
|» readingDirectionLock|body|boolean|false|none|
|» sharingLabels|body|[string]|false|none|
|» sharingLabelsLock|body|boolean|false|none|
|» status|body|string|false|none|
|» statusLock|body|boolean|false|none|
|» summary|body|string|false|none|
|» summaryLock|body|boolean|false|none|
|» tags|body|[string]|false|none|
|» tagsLock|body|boolean|false|none|
|» title|body|string|false|none|
|» titleLock|body|boolean|false|none|
|» titleSort|body|string|false|none|
|» titleSortLock|body|boolean|false|none|
|» totalBookCount|body|integer(int32)|false|none|
|» totalBookCountLock|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» readingDirection|LEFT_TO_RIGHT|
|» readingDirection|RIGHT_TO_LEFT|
|» readingDirection|VERTICAL|
|» readingDirection|WEBTOON|
|» status|ENDED|
|» status|ONGOING|
|» status|ABANDONED|
|» status|HIATUS|

<h3 id="update-series-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Refresh series metadata

<a id="opIdseriesRefreshMetadata"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/series/string/metadata/refresh \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /api/v1/series/{seriesId}/metadata/refresh`

Required role: **ADMIN**

<h3 id="refresh-series-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|seriesId|path|string|true|none|

<h3 id="refresh-series-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Mark series as read

<a id="opIdmarkSeriesAsRead"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/series/string/read-progress \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /api/v1/series/{seriesId}/read-progress`

Mark all book for series as read

<h3 id="mark-series-as-read-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|seriesId|path|string|true|none|

<h3 id="mark-series-as-read-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Mark series as unread

<a id="opIdmarkSeriesAsUnread"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/series/string/read-progress \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/v1/series/{seriesId}/read-progress`

Mark all book for series as unread

<h3 id="mark-series-as-unread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|seriesId|path|string|true|none|

<h3 id="mark-series-as-unread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

<h1 id="komga-api-series-poster">Series Poster</h1>

Manage posters for series.

## Get series' poster image

<a id="opIdgetSeriesThumbnail"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/series/string/thumbnail \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/series/{seriesId}/thumbnail`

<h3 id="get-series-poster-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|seriesId|path|string|true|none|

> Example responses

> default Response

```json
"string"
```

<h3 id="get-series-poster-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|default|Default|default response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List series posters

<a id="opIdgetSeriesThumbnails"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/series/string/thumbnails \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/series/{seriesId}/thumbnails`

<h3 id="list-series-posters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|seriesId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "fileSize": 0,
    "height": 0,
    "id": "string",
    "mediaType": "string",
    "selected": true,
    "seriesId": "string",
    "type": "string",
    "width": 0
  }
]
```

<h3 id="list-series-posters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<h3 id="list-series-posters-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ThumbnailSeriesDto](#schemathumbnailseriesdto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Add series poster

<a id="opIdaddUserUploadedSeriesThumbnail"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/series/string/thumbnails \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -F 'file=@/path/to/file'
```

`POST /api/v1/series/{seriesId}/thumbnails`

Required role: **ADMIN**

> Body parameter

```yaml
file: string
```

<h3 id="add-series-poster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|seriesId|path|string|true|none|
|selected|query|boolean|false|none|
|body|body|object|false|none|
|» file|body|string(binary)|true|none|

> Example responses

> 200 Response

```json
{
  "fileSize": 0,
  "height": 0,
  "id": "string",
  "mediaType": "string",
  "selected": true,
  "seriesId": "string",
  "type": "string",
  "width": 0
}
```

<h3 id="add-series-poster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ThumbnailSeriesDto](#schemathumbnailseriesdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Get series poster image

<a id="opIdgetSeriesThumbnailById"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/series/string/thumbnails/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/series/{seriesId}/thumbnails/{thumbnailId}`

<h3 id="get-series-poster-image-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|seriesId|path|string|true|none|
|thumbnailId|path|string|true|none|

> Example responses

> default Response

```json
"string"
```

<h3 id="get-series-poster-image-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|default|Default|default response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Delete series poster

<a id="opIddeleteUserUploadedSeriesThumbnail"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/series/string/thumbnails/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/v1/series/{seriesId}/thumbnails/{thumbnailId}`

Required role: **ADMIN**

<h3 id="delete-series-poster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|seriesId|path|string|true|none|
|thumbnailId|path|string|true|none|

<h3 id="delete-series-poster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Mark series poster as selected

<a id="opIdmarkSeriesThumbnailSelected"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/series/string/thumbnails/string/selected \
  -X PUT \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /api/v1/series/{seriesId}/thumbnails/{thumbnailId}/selected`

Required role: **ADMIN**

<h3 id="mark-series-poster-as-selected-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|seriesId|path|string|true|none|
|thumbnailId|path|string|true|none|

<h3 id="mark-series-poster-as-selected-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

<h1 id="komga-api-books">Books</h1>

Manage books.

## List books

<a id="opIdgetAllBooksDeprecated"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/books`

<aside class="warning">
This operation is deprecated
</aside>

Use POST /api/v1/books/list instead. Deprecated since 1.19.0.

<h3 id="list-books-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|none|
|library_id|query|[string]|false|none|
|media_status|query|[string]|false|none|
|read_status|query|[string]|false|none|
|released_after|query|string(date)|false|none|
|tag|query|[string]|false|none|
|unpaged|query|boolean|false|none|
|page|query|integer|false|Zero-based page index (0..N)|
|size|query|integer|false|The size of the page to be returned|
|sort|query|[string]|false|Sorting criteria in the format: property(,asc\|desc). Default sort order is ascending. Multiple sort criteria are supported.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|media_status|UNKNOWN|
|media_status|ERROR|
|media_status|READY|
|media_status|UNSUPPORTED|
|media_status|OUTDATED|
|read_status|UNREAD|
|read_status|READ|
|read_status|IN_PROGRESS|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "created": "1970-01-01T00:00:00Z",
      "deleted": true,
      "fileHash": "string",
      "fileLastModified": "1970-01-01T00:00:00Z",
      "id": "string",
      "lastModified": "1970-01-01T00:00:00Z",
      "libraryId": "string",
      "media": {
        "comment": "string",
        "epubDivinaCompatible": true,
        "epubIsKepub": true,
        "mediaProfile": "string",
        "mediaType": "string",
        "pagesCount": 0,
        "status": "string"
      },
      "metadata": {
        "authors": [
          {
            "name": "string",
            "role": "string"
          }
        ],
        "authorsLock": true,
        "created": "1970-01-01T00:00:00Z",
        "isbn": "string",
        "isbnLock": true,
        "lastModified": "1970-01-01T00:00:00Z",
        "links": [
          {
            "label": "string",
            "url": "string"
          }
        ],
        "linksLock": true,
        "notableEntities": [
          {
            "kind": "string",
            "name": "string"
          }
        ],
        "notableEntitiesLock": true,
        "number": "string",
        "numberLock": true,
        "numberSort": 0,
        "numberSortLock": true,
        "releaseDate": "1970-01-01",
        "releaseDateLock": true,
        "summary": "string",
        "summaryLock": true,
        "tags": [
          "string"
        ],
        "tagsLock": true,
        "title": "string",
        "titleLock": true
      },
      "name": "string",
      "number": 0,
      "oneshot": true,
      "readProgress": {
        "completed": true,
        "created": "1970-01-01T00:00:00Z",
        "deviceId": "string",
        "deviceName": "string",
        "lastModified": "1970-01-01T00:00:00Z",
        "page": 0,
        "readDate": "1970-01-01T00:00:00Z"
      },
      "seriesId": "string",
      "seriesTitle": "string",
      "size": "string",
      "sizeBytes": 0,
      "url": "string"
    }
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

<h3 id="list-books-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageBookDto](#schemapagebookdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List duplicate books

<a id="opIdgetBooksDuplicates"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/duplicates \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/books/duplicates`

Return books that have the same file hash.

Required role: **ADMIN**

<h3 id="list-duplicate-books-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|unpaged|query|boolean|false|none|
|page|query|integer|false|Zero-based page index (0..N)|
|size|query|integer|false|The size of the page to be returned|
|sort|query|[string]|false|Sorting criteria in the format: property(,asc\|desc). Default sort order is ascending. Multiple sort criteria are supported.|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "created": "1970-01-01T00:00:00Z",
      "deleted": true,
      "fileHash": "string",
      "fileLastModified": "1970-01-01T00:00:00Z",
      "id": "string",
      "lastModified": "1970-01-01T00:00:00Z",
      "libraryId": "string",
      "media": {
        "comment": "string",
        "epubDivinaCompatible": true,
        "epubIsKepub": true,
        "mediaProfile": "string",
        "mediaType": "string",
        "pagesCount": 0,
        "status": "string"
      },
      "metadata": {
        "authors": [
          {
            "name": "string",
            "role": "string"
          }
        ],
        "authorsLock": true,
        "created": "1970-01-01T00:00:00Z",
        "isbn": "string",
        "isbnLock": true,
        "lastModified": "1970-01-01T00:00:00Z",
        "links": [
          {
            "label": "string",
            "url": "string"
          }
        ],
        "linksLock": true,
        "notableEntities": [
          {
            "kind": "string",
            "name": "string"
          }
        ],
        "notableEntitiesLock": true,
        "number": "string",
        "numberLock": true,
        "numberSort": 0,
        "numberSortLock": true,
        "releaseDate": "1970-01-01",
        "releaseDateLock": true,
        "summary": "string",
        "summaryLock": true,
        "tags": [
          "string"
        ],
        "tagsLock": true,
        "title": "string",
        "titleLock": true
      },
      "name": "string",
      "number": 0,
      "oneshot": true,
      "readProgress": {
        "completed": true,
        "created": "1970-01-01T00:00:00Z",
        "deviceId": "string",
        "deviceName": "string",
        "lastModified": "1970-01-01T00:00:00Z",
        "page": 0,
        "readDate": "1970-01-01T00:00:00Z"
      },
      "seriesId": "string",
      "seriesTitle": "string",
      "size": "string",
      "sizeBytes": 0,
      "url": "string"
    }
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

<h3 id="list-duplicate-books-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageBookDto](#schemapagebookdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List latest books

<a id="opIdgetBooksLatest"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/latest \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/books/latest`

Return newly added or updated books.

<h3 id="list-latest-books-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|unpaged|query|boolean|false|none|
|page|query|integer|false|Zero-based page index (0..N)|
|size|query|integer|false|The size of the page to be returned|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "created": "1970-01-01T00:00:00Z",
      "deleted": true,
      "fileHash": "string",
      "fileLastModified": "1970-01-01T00:00:00Z",
      "id": "string",
      "lastModified": "1970-01-01T00:00:00Z",
      "libraryId": "string",
      "media": {
        "comment": "string",
        "epubDivinaCompatible": true,
        "epubIsKepub": true,
        "mediaProfile": "string",
        "mediaType": "string",
        "pagesCount": 0,
        "status": "string"
      },
      "metadata": {
        "authors": [
          {
            "name": "string",
            "role": "string"
          }
        ],
        "authorsLock": true,
        "created": "1970-01-01T00:00:00Z",
        "isbn": "string",
        "isbnLock": true,
        "lastModified": "1970-01-01T00:00:00Z",
        "links": [
          {
            "label": "string",
            "url": "string"
          }
        ],
        "linksLock": true,
        "notableEntities": [
          {
            "kind": "string",
            "name": "string"
          }
        ],
        "notableEntitiesLock": true,
        "number": "string",
        "numberLock": true,
        "numberSort": 0,
        "numberSortLock": true,
        "releaseDate": "1970-01-01",
        "releaseDateLock": true,
        "summary": "string",
        "summaryLock": true,
        "tags": [
          "string"
        ],
        "tagsLock": true,
        "title": "string",
        "titleLock": true
      },
      "name": "string",
      "number": 0,
      "oneshot": true,
      "readProgress": {
        "completed": true,
        "created": "1970-01-01T00:00:00Z",
        "deviceId": "string",
        "deviceName": "string",
        "lastModified": "1970-01-01T00:00:00Z",
        "page": 0,
        "readDate": "1970-01-01T00:00:00Z"
      },
      "seriesId": "string",
      "seriesTitle": "string",
      "size": "string",
      "sizeBytes": 0,
      "url": "string"
    }
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

<h3 id="list-latest-books-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageBookDto](#schemapagebookdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List books

<a id="opIdgetBooks"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "condition": {},
    "fullTextSearch": "string"
  }'
```

`POST /api/v1/books/list`

> Body parameter

```json
{
  "condition": {},
  "fullTextSearch": "string"
}
```

<h3 id="list-books-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|unpaged|query|boolean|false|none|
|page|query|integer|false|Zero-based page index (0..N)|
|size|query|integer|false|The size of the page to be returned|
|sort|query|[string]|false|Sorting criteria in the format: property(,asc\|desc). Default sort order is ascending. Multiple sort criteria are supported.|
|body|body|[BookSearch](#schemabooksearch)|true|none|
|» condition|body|[SearchConditionBook](#schemasearchconditionbook)|false|none|
|» fullTextSearch|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "created": "1970-01-01T00:00:00Z",
      "deleted": true,
      "fileHash": "string",
      "fileLastModified": "1970-01-01T00:00:00Z",
      "id": "string",
      "lastModified": "1970-01-01T00:00:00Z",
      "libraryId": "string",
      "media": {
        "comment": "string",
        "epubDivinaCompatible": true,
        "epubIsKepub": true,
        "mediaProfile": "string",
        "mediaType": "string",
        "pagesCount": 0,
        "status": "string"
      },
      "metadata": {
        "authors": [
          {
            "name": "string",
            "role": "string"
          }
        ],
        "authorsLock": true,
        "created": "1970-01-01T00:00:00Z",
        "isbn": "string",
        "isbnLock": true,
        "lastModified": "1970-01-01T00:00:00Z",
        "links": [
          {
            "label": "string",
            "url": "string"
          }
        ],
        "linksLock": true,
        "notableEntities": [
          {
            "kind": "string",
            "name": "string"
          }
        ],
        "notableEntitiesLock": true,
        "number": "string",
        "numberLock": true,
        "numberSort": 0,
        "numberSortLock": true,
        "releaseDate": "1970-01-01",
        "releaseDateLock": true,
        "summary": "string",
        "summaryLock": true,
        "tags": [
          "string"
        ],
        "tagsLock": true,
        "title": "string",
        "titleLock": true
      },
      "name": "string",
      "number": 0,
      "oneshot": true,
      "readProgress": {
        "completed": true,
        "created": "1970-01-01T00:00:00Z",
        "deviceId": "string",
        "deviceName": "string",
        "lastModified": "1970-01-01T00:00:00Z",
        "page": 0,
        "readDate": "1970-01-01T00:00:00Z"
      },
      "seriesId": "string",
      "seriesTitle": "string",
      "size": "string",
      "sizeBytes": 0,
      "url": "string"
    }
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

<h3 id="list-books-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageBookDto](#schemapagebookdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Update book metadata in bulk

<a id="opIdupdateBookMetadataByBatch"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/metadata \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "property1": {
      "authors": [
        {
          "name": "string",
          "role": "string"
        }
      ],
      "authorsLock": true,
      "isbn": "string",
      "isbnLock": true,
      "links": [
        {
          "label": "string",
          "url": "string"
        }
      ],
      "linksLock": true,
      "notableEntities": [
        {
          "kind": "string",
          "name": "string"
        }
      ],
      "notableEntitiesLock": true,
      "number": "string",
      "numberLock": true,
      "numberSort": 0,
      "numberSortLock": true,
      "releaseDate": "1970-01-01",
      "releaseDateLock": true,
      "summary": "string",
      "summaryLock": true,
      "tags": [
        "string"
      ],
      "tagsLock": true,
      "title": "string",
      "titleLock": true
    },
    "property2": {
      "authors": [
        {
          "name": "string",
          "role": "string"
        }
      ],
      "authorsLock": true,
      "isbn": "string",
      "isbnLock": true,
      "links": [
        {
          "label": "string",
          "url": "string"
        }
      ],
      "linksLock": true,
      "notableEntities": [
        {
          "kind": "string",
          "name": "string"
        }
      ],
      "notableEntitiesLock": true,
      "number": "string",
      "numberLock": true,
      "numberSort": 0,
      "numberSortLock": true,
      "releaseDate": "1970-01-01",
      "releaseDateLock": true,
      "summary": "string",
      "summaryLock": true,
      "tags": [
        "string"
      ],
      "tagsLock": true,
      "title": "string",
      "titleLock": true
    }
  }'
```

`PATCH /api/v1/books/metadata`

Set a field to null to unset the metadata. You can omit fields you don't want to update.

Required role: **ADMIN**

> Body parameter

```json
{
  "property1": {
    "authors": [
      {
        "name": "string",
        "role": "string"
      }
    ],
    "authorsLock": true,
    "isbn": "string",
    "isbnLock": true,
    "links": [
      {
        "label": "string",
        "url": "string"
      }
    ],
    "linksLock": true,
    "notableEntities": [
      {
        "kind": "string",
        "name": "string"
      }
    ],
    "notableEntitiesLock": true,
    "number": "string",
    "numberLock": true,
    "numberSort": 0,
    "numberSortLock": true,
    "releaseDate": "1970-01-01",
    "releaseDateLock": true,
    "summary": "string",
    "summaryLock": true,
    "tags": [
      "string"
    ],
    "tagsLock": true,
    "title": "string",
    "titleLock": true
  },
  "property2": {
    "authors": [
      {
        "name": "string",
        "role": "string"
      }
    ],
    "authorsLock": true,
    "isbn": "string",
    "isbnLock": true,
    "links": [
      {
        "label": "string",
        "url": "string"
      }
    ],
    "linksLock": true,
    "notableEntities": [
      {
        "kind": "string",
        "name": "string"
      }
    ],
    "notableEntitiesLock": true,
    "number": "string",
    "numberLock": true,
    "numberSort": 0,
    "numberSortLock": true,
    "releaseDate": "1970-01-01",
    "releaseDateLock": true,
    "summary": "string",
    "summaryLock": true,
    "tags": [
      "string"
    ],
    "tagsLock": true,
    "title": "string",
    "titleLock": true
  }
}
```

<h3 id="update-book-metadata-in-bulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» **additionalProperties**|body|[BookMetadataUpdateDto](#schemabookmetadataupdatedto)|false|Metadata fields to update. Set a field to null to unset the metadata. You can omit fields you don't want to update.|

<h3 id="update-book-metadata-in-bulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List books on deck

<a id="opIdgetBooksOnDeck"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/ondeck \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/books/ondeck`

Return first unread book of series with at least one book read and no books in progress.

<h3 id="list-books-on-deck-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library_id|query|[string]|false|none|
|page|query|integer|false|Zero-based page index (0..N)|
|size|query|integer|false|The size of the page to be returned|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "created": "1970-01-01T00:00:00Z",
      "deleted": true,
      "fileHash": "string",
      "fileLastModified": "1970-01-01T00:00:00Z",
      "id": "string",
      "lastModified": "1970-01-01T00:00:00Z",
      "libraryId": "string",
      "media": {
        "comment": "string",
        "epubDivinaCompatible": true,
        "epubIsKepub": true,
        "mediaProfile": "string",
        "mediaType": "string",
        "pagesCount": 0,
        "status": "string"
      },
      "metadata": {
        "authors": [
          {
            "name": "string",
            "role": "string"
          }
        ],
        "authorsLock": true,
        "created": "1970-01-01T00:00:00Z",
        "isbn": "string",
        "isbnLock": true,
        "lastModified": "1970-01-01T00:00:00Z",
        "links": [
          {
            "label": "string",
            "url": "string"
          }
        ],
        "linksLock": true,
        "notableEntities": [
          {
            "kind": "string",
            "name": "string"
          }
        ],
        "notableEntitiesLock": true,
        "number": "string",
        "numberLock": true,
        "numberSort": 0,
        "numberSortLock": true,
        "releaseDate": "1970-01-01",
        "releaseDateLock": true,
        "summary": "string",
        "summaryLock": true,
        "tags": [
          "string"
        ],
        "tagsLock": true,
        "title": "string",
        "titleLock": true
      },
      "name": "string",
      "number": 0,
      "oneshot": true,
      "readProgress": {
        "completed": true,
        "created": "1970-01-01T00:00:00Z",
        "deviceId": "string",
        "deviceName": "string",
        "lastModified": "1970-01-01T00:00:00Z",
        "page": 0,
        "readDate": "1970-01-01T00:00:00Z"
      },
      "seriesId": "string",
      "seriesTitle": "string",
      "size": "string",
      "sizeBytes": 0,
      "url": "string"
    }
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

<h3 id="list-books-on-deck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageBookDto](#schemapagebookdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Get book details

<a id="opIdgetBookById"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/books/{bookId}`

<h3 id="get-book-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01T00:00:00Z",
  "deleted": true,
  "fileHash": "string",
  "fileLastModified": "1970-01-01T00:00:00Z",
  "id": "string",
  "lastModified": "1970-01-01T00:00:00Z",
  "libraryId": "string",
  "media": {
    "comment": "string",
    "epubDivinaCompatible": true,
    "epubIsKepub": true,
    "mediaProfile": "string",
    "mediaType": "string",
    "pagesCount": 0,
    "status": "string"
  },
  "metadata": {
    "authors": [
      {
        "name": "string",
        "role": "string"
      }
    ],
    "authorsLock": true,
    "created": "1970-01-01T00:00:00Z",
    "isbn": "string",
    "isbnLock": true,
    "lastModified": "1970-01-01T00:00:00Z",
    "links": [
      {
        "label": "string",
        "url": "string"
      }
    ],
    "linksLock": true,
    "notableEntities": [
      {
        "kind": "string",
        "name": "string"
      }
    ],
    "notableEntitiesLock": true,
    "number": "string",
    "numberLock": true,
    "numberSort": 0,
    "numberSortLock": true,
    "releaseDate": "1970-01-01",
    "releaseDateLock": true,
    "summary": "string",
    "summaryLock": true,
    "tags": [
      "string"
    ],
    "tagsLock": true,
    "title": "string",
    "titleLock": true
  },
  "name": "string",
  "number": 0,
  "oneshot": true,
  "readProgress": {
    "completed": true,
    "created": "1970-01-01T00:00:00Z",
    "deviceId": "string",
    "deviceName": "string",
    "lastModified": "1970-01-01T00:00:00Z",
    "page": 0,
    "readDate": "1970-01-01T00:00:00Z"
  },
  "seriesId": "string",
  "seriesTitle": "string",
  "size": "string",
  "sizeBytes": 0,
  "url": "string"
}
```

<h3 id="get-book-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BookDto](#schemabookdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Analyze book

<a id="opIdbookAnalyze"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/string/analyze \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /api/v1/books/{bookId}/analyze`

Required role: **ADMIN**

<h3 id="analyze-book-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookId|path|string|true|none|

<h3 id="analyze-book-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Download book file

<a id="opIddownloadBookFile"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/string/file \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/books/{bookId}/file`

Download the book file.

Required role: **FILE_DOWNLOAD**

<h3 id="download-book-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookId|path|string|true|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="download-book-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[StreamingResponseBody](#schemastreamingresponsebody)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Delete book file

<a id="opIddeleteBookFile"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/string/file \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/v1/books/{bookId}/file`

Required role: **ADMIN**

<h3 id="delete-book-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookId|path|string|true|none|

<h3 id="delete-book-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Download book file

<a id="opIddownloadBookFile_1"></a>

> Code samples

```bash
curl 'http://localhost:25600/api/v1/books/string/file/*' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/books/{bookId}/file/*`

Download the book file.

Required role: **FILE_DOWNLOAD**

<h3 id="download-book-file-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookId|path|string|true|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="download-book-file-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[StreamingResponseBody](#schemastreamingresponsebody)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Update book metadata

<a id="opIdupdateBookMetadata"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/string/metadata \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "authors": [
      {
        "name": "string",
        "role": "string"
      }
    ],
    "authorsLock": true,
    "isbn": "string",
    "isbnLock": true,
    "links": [
      {
        "label": "string",
        "url": "string"
      }
    ],
    "linksLock": true,
    "notableEntities": [
      {
        "kind": "string",
        "name": "string"
      }
    ],
    "notableEntitiesLock": true,
    "number": "string",
    "numberLock": true,
    "numberSort": 0,
    "numberSortLock": true,
    "releaseDate": "1970-01-01",
    "releaseDateLock": true,
    "summary": "string",
    "summaryLock": true,
    "tags": [
      "string"
    ],
    "tagsLock": true,
    "title": "string",
    "titleLock": true
  }'
```

`PATCH /api/v1/books/{bookId}/metadata`

Set a field to null to unset the metadata. You can omit fields you don't want to update.

Required role: **ADMIN**

> Body parameter

```json
{
  "authors": [
    {
      "name": "string",
      "role": "string"
    }
  ],
  "authorsLock": true,
  "isbn": "string",
  "isbnLock": true,
  "links": [
    {
      "label": "string",
      "url": "string"
    }
  ],
  "linksLock": true,
  "notableEntities": [
    {
      "kind": "string",
      "name": "string"
    }
  ],
  "notableEntitiesLock": true,
  "number": "string",
  "numberLock": true,
  "numberSort": 0,
  "numberSortLock": true,
  "releaseDate": "1970-01-01",
  "releaseDateLock": true,
  "summary": "string",
  "summaryLock": true,
  "tags": [
    "string"
  ],
  "tagsLock": true,
  "title": "string",
  "titleLock": true
}
```

<h3 id="update-book-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookId|path|string|true|none|
|body|body|[BookMetadataUpdateDto](#schemabookmetadataupdatedto)|true|none|
|» authors|body|[[AuthorUpdateDto](#schemaauthorupdatedto)]|false|none|
|» authorsLock|body|boolean|false|none|
|» isbn|body|string|false|none|
|» isbnLock|body|boolean|false|none|
|» links|body|[[WebLinkUpdateDto](#schemaweblinkupdatedto)]|false|none|
|» linksLock|body|boolean|false|none|
|» notableEntities|body|[[NotableEntityUpdateDto](#schemanotableentityupdatedto)]|false|none|
|» notableEntitiesLock|body|boolean|false|none|
|» number|body|string|false|none|
|» numberLock|body|boolean|false|none|
|» numberSort|body|number(float)|false|none|
|» numberSortLock|body|boolean|false|none|
|» releaseDate|body|string(date)|false|none|
|» releaseDateLock|body|boolean|false|none|
|» summary|body|string|false|none|
|» summaryLock|body|boolean|false|none|
|» tags|body|[string]|false|none|
|» tagsLock|body|boolean|false|none|
|» title|body|string|false|none|
|» titleLock|body|boolean|false|none|

<h3 id="update-book-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Refresh book metadata

<a id="opIdbookRefreshMetadata"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/string/metadata/refresh \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /api/v1/books/{bookId}/metadata/refresh`

Required role: **ADMIN**

<h3 id="refresh-book-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookId|path|string|true|none|

<h3 id="refresh-book-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Get next book in series

<a id="opIdgetBookSiblingNext"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/string/next \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/books/{bookId}/next`

<h3 id="get-next-book-in-series-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01T00:00:00Z",
  "deleted": true,
  "fileHash": "string",
  "fileLastModified": "1970-01-01T00:00:00Z",
  "id": "string",
  "lastModified": "1970-01-01T00:00:00Z",
  "libraryId": "string",
  "media": {
    "comment": "string",
    "epubDivinaCompatible": true,
    "epubIsKepub": true,
    "mediaProfile": "string",
    "mediaType": "string",
    "pagesCount": 0,
    "status": "string"
  },
  "metadata": {
    "authors": [
      {
        "name": "string",
        "role": "string"
      }
    ],
    "authorsLock": true,
    "created": "1970-01-01T00:00:00Z",
    "isbn": "string",
    "isbnLock": true,
    "lastModified": "1970-01-01T00:00:00Z",
    "links": [
      {
        "label": "string",
        "url": "string"
      }
    ],
    "linksLock": true,
    "notableEntities": [
      {
        "kind": "string",
        "name": "string"
      }
    ],
    "notableEntitiesLock": true,
    "number": "string",
    "numberLock": true,
    "numberSort": 0,
    "numberSortLock": true,
    "releaseDate": "1970-01-01",
    "releaseDateLock": true,
    "summary": "string",
    "summaryLock": true,
    "tags": [
      "string"
    ],
    "tagsLock": true,
    "title": "string",
    "titleLock": true
  },
  "name": "string",
  "number": 0,
  "oneshot": true,
  "readProgress": {
    "completed": true,
    "created": "1970-01-01T00:00:00Z",
    "deviceId": "string",
    "deviceName": "string",
    "lastModified": "1970-01-01T00:00:00Z",
    "page": 0,
    "readDate": "1970-01-01T00:00:00Z"
  },
  "seriesId": "string",
  "seriesTitle": "string",
  "size": "string",
  "sizeBytes": 0,
  "url": "string"
}
```

<h3 id="get-next-book-in-series-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BookDto](#schemabookdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Get previous book in series

<a id="opIdgetBookSiblingPrevious"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/string/previous \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/books/{bookId}/previous`

<h3 id="get-previous-book-in-series-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01T00:00:00Z",
  "deleted": true,
  "fileHash": "string",
  "fileLastModified": "1970-01-01T00:00:00Z",
  "id": "string",
  "lastModified": "1970-01-01T00:00:00Z",
  "libraryId": "string",
  "media": {
    "comment": "string",
    "epubDivinaCompatible": true,
    "epubIsKepub": true,
    "mediaProfile": "string",
    "mediaType": "string",
    "pagesCount": 0,
    "status": "string"
  },
  "metadata": {
    "authors": [
      {
        "name": "string",
        "role": "string"
      }
    ],
    "authorsLock": true,
    "created": "1970-01-01T00:00:00Z",
    "isbn": "string",
    "isbnLock": true,
    "lastModified": "1970-01-01T00:00:00Z",
    "links": [
      {
        "label": "string",
        "url": "string"
      }
    ],
    "linksLock": true,
    "notableEntities": [
      {
        "kind": "string",
        "name": "string"
      }
    ],
    "notableEntitiesLock": true,
    "number": "string",
    "numberLock": true,
    "numberSort": 0,
    "numberSortLock": true,
    "releaseDate": "1970-01-01",
    "releaseDateLock": true,
    "summary": "string",
    "summaryLock": true,
    "tags": [
      "string"
    ],
    "tagsLock": true,
    "title": "string",
    "titleLock": true
  },
  "name": "string",
  "number": 0,
  "oneshot": true,
  "readProgress": {
    "completed": true,
    "created": "1970-01-01T00:00:00Z",
    "deviceId": "string",
    "deviceName": "string",
    "lastModified": "1970-01-01T00:00:00Z",
    "page": 0,
    "readDate": "1970-01-01T00:00:00Z"
  },
  "seriesId": "string",
  "seriesTitle": "string",
  "size": "string",
  "sizeBytes": 0,
  "url": "string"
}
```

<h3 id="get-previous-book-in-series-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BookDto](#schemabookdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Mark book as unread

<a id="opIddeleteBookReadProgress"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/string/read-progress \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/v1/books/{bookId}/read-progress`

Mark book as unread

<h3 id="mark-book-as-unread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookId|path|string|true|none|

<h3 id="mark-book-as-unread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Mark book's read progress

<a id="opIdmarkBookReadProgress"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/string/read-progress \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "completed": true,
    "page": 0
  }'
```

`PATCH /api/v1/books/{bookId}/read-progress`

Mark book as read and/or change page progress.

> Body parameter

```json
{
  "completed": true,
  "page": 0
}
```

<h3 id="mark-books-read-progress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookId|path|string|true|none|
|body|body|[ReadProgressUpdateDto](#schemareadprogressupdatedto)|true|none|
|» completed|body|boolean|false|none|
|» page|body|integer(int32)|false|none|

<h3 id="mark-books-read-progress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List book's readlists

<a id="opIdgetReadListsByBookId"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/string/readlists \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/books/{bookId}/readlists`

<h3 id="list-books-readlists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "bookIds": [
      "string"
    ],
    "createdDate": "1970-01-01T00:00:00Z",
    "filtered": true,
    "id": "string",
    "lastModifiedDate": "1970-01-01T00:00:00Z",
    "name": "string",
    "ordered": true,
    "summary": "string"
  }
]
```

<h3 id="list-books-readlists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<h3 id="list-books-readlists-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ReadListDto](#schemareadlistdto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

<h1 id="komga-api-book-poster">Book Poster</h1>

Manage posters for books.

## Regenerate books posters

<a id="opIdbooksRegenerateThumbnails"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/thumbnails \
  -X PUT \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /api/v1/books/thumbnails`

Required role: **ADMIN**

<h3 id="regenerate-books-posters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|for_bigger_result_only|query|boolean|false|none|

<h3 id="regenerate-books-posters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Get book's poster image

<a id="opIdgetBookThumbnail"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/string/thumbnail \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/books/{bookId}/thumbnail`

<h3 id="get-books-poster-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookId|path|string|true|none|

> Example responses

> default Response

```json
"string"
```

<h3 id="get-books-poster-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|default|Default|default response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List book posters

<a id="opIdgetBookThumbnails"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/string/thumbnails \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/books/{bookId}/thumbnails`

<h3 id="list-book-posters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "bookId": "string",
    "fileSize": 0,
    "height": 0,
    "id": "string",
    "mediaType": "string",
    "selected": true,
    "type": "string",
    "width": 0
  }
]
```

<h3 id="list-book-posters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<h3 id="list-book-posters-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ThumbnailBookDto](#schemathumbnailbookdto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Add book poster

<a id="opIdaddUserUploadedBookThumbnail"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/string/thumbnails \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -F 'file=@/path/to/file'
```

`POST /api/v1/books/{bookId}/thumbnails`

Required role: **ADMIN**

> Body parameter

```yaml
file: string
```

<h3 id="add-book-poster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookId|path|string|true|none|
|selected|query|boolean|false|none|
|body|body|object|false|none|
|» file|body|string(binary)|true|none|

> Example responses

> 200 Response

```json
{
  "bookId": "string",
  "fileSize": 0,
  "height": 0,
  "id": "string",
  "mediaType": "string",
  "selected": true,
  "type": "string",
  "width": 0
}
```

<h3 id="add-book-poster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ThumbnailBookDto](#schemathumbnailbookdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Get book poster image

<a id="opIdgetBookThumbnailById"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/string/thumbnails/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/books/{bookId}/thumbnails/{thumbnailId}`

<h3 id="get-book-poster-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookId|path|string|true|none|
|thumbnailId|path|string|true|none|

> Example responses

> default Response

```json
"string"
```

<h3 id="get-book-poster-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|default|Default|default response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Delete book poster

<a id="opIddeleteUserUploadedBookThumbnail"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/string/thumbnails/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/v1/books/{bookId}/thumbnails/{thumbnailId}`

Only uploaded posters can be deleted.

Required role: **ADMIN**

<h3 id="delete-book-poster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookId|path|string|true|none|
|thumbnailId|path|string|true|none|

<h3 id="delete-book-poster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Mark book poster as selected

<a id="opIdmarkBookThumbnailSelected"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/string/thumbnails/string/selected \
  -X PUT \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /api/v1/books/{bookId}/thumbnails/{thumbnailId}/selected`

Required role: **ADMIN**

<h3 id="mark-book-poster-as-selected-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookId|path|string|true|none|
|thumbnailId|path|string|true|none|

<h3 id="mark-book-poster-as-selected-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

<h1 id="komga-api-book-pages">Book Pages</h1>

## List book pages

<a id="opIdgetBookPages"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/string/pages \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/books/{bookId}/pages`

<h3 id="list-book-pages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "fileName": "string",
    "height": 0,
    "mediaType": "string",
    "number": 0,
    "size": "string",
    "sizeBytes": 0,
    "width": 0
  }
]
```

<h3 id="list-book-pages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<h3 id="list-book-pages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PageDto](#schemapagedto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Get book page image

<a id="opIdgetBookPageByNumber"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/string/pages/0 \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/books/{bookId}/pages/{pageNumber}`

Required role: **PAGE_STREAMING**

<h3 id="get-book-page-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookId|path|string|true|none|
|pageNumber|path|integer(int32)|true|none|
|convert|query|string|false|Convert the image to the provided format.|
|zero_based|query|boolean|false|If set to true, pages will start at index 0. If set to false, pages will start at index 1.|
|Accept|header|[[MediaType](#schemamediatype)]|false|Some very limited server driven content negotiation is handled. If a book is a PDF book, and the Accept header contains 'application/pdf' as a more specific type than other 'image/' types, a raw PDF page will be returned.|
|contentNegotiation|query|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|convert|jpeg|
|convert|png|

<h3 id="get-book-page-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|default|Default|default response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Get raw book page

<a id="opIdgetBookPageRawByNumber"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/string/pages/0/raw \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/books/{bookId}/pages/{pageNumber}/raw`

Returns the book page in raw format, without content negotiation.

Required role: **PAGE_STREAMING**

<h3 id="get-raw-book-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookId|path|string|true|none|
|pageNumber|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="get-raw-book-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Get book page thumbnail

<a id="opIdgetBookPageThumbnailByNumber"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/string/pages/0/thumbnail \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/books/{bookId}/pages/{pageNumber}/thumbnail`

The image is resized to 300px on the largest dimension.

<h3 id="get-book-page-thumbnail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookId|path|string|true|none|
|pageNumber|path|integer(int32)|true|none|

> Example responses

> default Response

```json
"string"
```

<h3 id="get-book-page-thumbnail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|default|Default|default response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

<h1 id="komga-api-webpub-manifest">WebPub Manifest</h1>

## Get book's WebPub manifest

<a id="opIdgetBookWebPubManifest"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/string/manifest \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/books/{bookId}/manifest`

<h3 id="get-books-webpub-manifest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "context": "string",
  "images": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ],
  "landmarks": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ],
  "links": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ],
  "metadata": {
    "artist": [
      "string"
    ],
    "author": [
      "string"
    ],
    "belongsTo": {
      "collection": [
        {
          "links": [
            {
              "height": 0,
              "href": "string",
              "properties": {
                "property1": {
                  "property1": null,
                  "property2": null
                },
                "property2": {
                  "property1": null,
                  "property2": null
                }
              },
              "rel": "string",
              "templated": true,
              "title": "string",
              "type": "string",
              "width": 0
            }
          ],
          "name": "string",
          "position": 0
        }
      ],
      "series": [
        {
          "links": [
            {
              "height": 0,
              "href": "string",
              "properties": {
                "property1": {
                  "property1": null,
                  "property2": null
                },
                "property2": {
                  "property1": null,
                  "property2": null
                }
              },
              "rel": "string",
              "templated": true,
              "title": "string",
              "type": "string",
              "width": 0
            }
          ],
          "name": "string",
          "position": 0
        }
      ]
    },
    "colorist": [
      "string"
    ],
    "conformsTo": "string",
    "contributor": [
      "string"
    ],
    "description": "string",
    "editor": [
      "string"
    ],
    "identifier": "string",
    "illustrator": [
      "string"
    ],
    "inker": [
      "string"
    ],
    "language": "string",
    "letterer": [
      "string"
    ],
    "modified": "1970-01-01T00:00:00Z",
    "numberOfPages": 0,
    "penciler": [
      "string"
    ],
    "published": "1970-01-01",
    "publisher": [
      "string"
    ],
    "readingProgression": "rtl",
    "rendition": {
      "property1": null,
      "property2": null
    },
    "sortAs": "string",
    "subject": [
      "string"
    ],
    "subtitle": "string",
    "title": "string",
    "translator": [
      "string"
    ],
    "type": "string"
  },
  "pageList": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ],
  "readingOrder": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ],
  "resources": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ],
  "toc": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ]
}
```

<h3 id="get-books-webpub-manifest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[WPPublicationDto](#schemawppublicationdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Get book's WebPub manifest (DiViNa)

<a id="opIdgetBookWebPubManifestDivina"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/string/manifest/divina \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/books/{bookId}/manifest/divina`

<h3 id="get-books-webpub-manifest-divina-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "context": "string",
  "images": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ],
  "landmarks": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ],
  "links": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ],
  "metadata": {
    "artist": [
      "string"
    ],
    "author": [
      "string"
    ],
    "belongsTo": {
      "collection": [
        {
          "links": [
            {
              "height": 0,
              "href": "string",
              "properties": {
                "property1": {
                  "property1": null,
                  "property2": null
                },
                "property2": {
                  "property1": null,
                  "property2": null
                }
              },
              "rel": "string",
              "templated": true,
              "title": "string",
              "type": "string",
              "width": 0
            }
          ],
          "name": "string",
          "position": 0
        }
      ],
      "series": [
        {
          "links": [
            {
              "height": 0,
              "href": "string",
              "properties": {
                "property1": {
                  "property1": null,
                  "property2": null
                },
                "property2": {
                  "property1": null,
                  "property2": null
                }
              },
              "rel": "string",
              "templated": true,
              "title": "string",
              "type": "string",
              "width": 0
            }
          ],
          "name": "string",
          "position": 0
        }
      ]
    },
    "colorist": [
      "string"
    ],
    "conformsTo": "string",
    "contributor": [
      "string"
    ],
    "description": "string",
    "editor": [
      "string"
    ],
    "identifier": "string",
    "illustrator": [
      "string"
    ],
    "inker": [
      "string"
    ],
    "language": "string",
    "letterer": [
      "string"
    ],
    "modified": "1970-01-01T00:00:00Z",
    "numberOfPages": 0,
    "penciler": [
      "string"
    ],
    "published": "1970-01-01",
    "publisher": [
      "string"
    ],
    "readingProgression": "rtl",
    "rendition": {
      "property1": null,
      "property2": null
    },
    "sortAs": "string",
    "subject": [
      "string"
    ],
    "subtitle": "string",
    "title": "string",
    "translator": [
      "string"
    ],
    "type": "string"
  },
  "pageList": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ],
  "readingOrder": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ],
  "resources": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ],
  "toc": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ]
}
```

<h3 id="get-books-webpub-manifest-divina-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[WPPublicationDto](#schemawppublicationdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Get book's WebPub manifest (Epub)

<a id="opIdgetBookWebPubManifestEpub"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/string/manifest/epub \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/books/{bookId}/manifest/epub`

<h3 id="get-books-webpub-manifest-epub-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "context": "string",
  "images": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ],
  "landmarks": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ],
  "links": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ],
  "metadata": {
    "artist": [
      "string"
    ],
    "author": [
      "string"
    ],
    "belongsTo": {
      "collection": [
        {
          "links": [
            {
              "height": 0,
              "href": "string",
              "properties": {
                "property1": {
                  "property1": null,
                  "property2": null
                },
                "property2": {
                  "property1": null,
                  "property2": null
                }
              },
              "rel": "string",
              "templated": true,
              "title": "string",
              "type": "string",
              "width": 0
            }
          ],
          "name": "string",
          "position": 0
        }
      ],
      "series": [
        {
          "links": [
            {
              "height": 0,
              "href": "string",
              "properties": {
                "property1": {
                  "property1": null,
                  "property2": null
                },
                "property2": {
                  "property1": null,
                  "property2": null
                }
              },
              "rel": "string",
              "templated": true,
              "title": "string",
              "type": "string",
              "width": 0
            }
          ],
          "name": "string",
          "position": 0
        }
      ]
    },
    "colorist": [
      "string"
    ],
    "conformsTo": "string",
    "contributor": [
      "string"
    ],
    "description": "string",
    "editor": [
      "string"
    ],
    "identifier": "string",
    "illustrator": [
      "string"
    ],
    "inker": [
      "string"
    ],
    "language": "string",
    "letterer": [
      "string"
    ],
    "modified": "1970-01-01T00:00:00Z",
    "numberOfPages": 0,
    "penciler": [
      "string"
    ],
    "published": "1970-01-01",
    "publisher": [
      "string"
    ],
    "readingProgression": "rtl",
    "rendition": {
      "property1": null,
      "property2": null
    },
    "sortAs": "string",
    "subject": [
      "string"
    ],
    "subtitle": "string",
    "title": "string",
    "translator": [
      "string"
    ],
    "type": "string"
  },
  "pageList": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ],
  "readingOrder": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ],
  "resources": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ],
  "toc": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ]
}
```

<h3 id="get-books-webpub-manifest-epub-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[WPPublicationDto](#schemawppublicationdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Get book's WebPub manifest (PDF)

<a id="opIdgetBookWebPubManifestPdf"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/string/manifest/pdf \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/books/{bookId}/manifest/pdf`

<h3 id="get-books-webpub-manifest-pdf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "context": "string",
  "images": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ],
  "landmarks": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ],
  "links": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ],
  "metadata": {
    "artist": [
      "string"
    ],
    "author": [
      "string"
    ],
    "belongsTo": {
      "collection": [
        {
          "links": [
            {
              "height": 0,
              "href": "string",
              "properties": {
                "property1": {
                  "property1": null,
                  "property2": null
                },
                "property2": {
                  "property1": null,
                  "property2": null
                }
              },
              "rel": "string",
              "templated": true,
              "title": "string",
              "type": "string",
              "width": 0
            }
          ],
          "name": "string",
          "position": 0
        }
      ],
      "series": [
        {
          "links": [
            {
              "height": 0,
              "href": "string",
              "properties": {
                "property1": {
                  "property1": null,
                  "property2": null
                },
                "property2": {
                  "property1": null,
                  "property2": null
                }
              },
              "rel": "string",
              "templated": true,
              "title": "string",
              "type": "string",
              "width": 0
            }
          ],
          "name": "string",
          "position": 0
        }
      ]
    },
    "colorist": [
      "string"
    ],
    "conformsTo": "string",
    "contributor": [
      "string"
    ],
    "description": "string",
    "editor": [
      "string"
    ],
    "identifier": "string",
    "illustrator": [
      "string"
    ],
    "inker": [
      "string"
    ],
    "language": "string",
    "letterer": [
      "string"
    ],
    "modified": "1970-01-01T00:00:00Z",
    "numberOfPages": 0,
    "penciler": [
      "string"
    ],
    "published": "1970-01-01",
    "publisher": [
      "string"
    ],
    "readingProgression": "rtl",
    "rendition": {
      "property1": null,
      "property2": null
    },
    "sortAs": "string",
    "subject": [
      "string"
    ],
    "subtitle": "string",
    "title": "string",
    "translator": [
      "string"
    ],
    "type": "string"
  },
  "pageList": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ],
  "readingOrder": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ],
  "resources": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ],
  "toc": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ]
}
```

<h3 id="get-books-webpub-manifest-pdf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[WPPublicationDto](#schemawppublicationdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List book's positions

<a id="opIdgetBookPositions"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/string/positions \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/books/{bookId}/positions`

The Positions API is a proposed standard for OPDS 2 and Readium. It is used by the Epub Reader.

<h3 id="list-books-positions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "positions": [
    {
      "href": "string",
      "koboSpan": "string",
      "locations": {
        "fragments": [
          "string"
        ],
        "position": 0,
        "progression": 0,
        "totalProgression": 0
      },
      "text": {
        "after": "string",
        "before": "string",
        "highlight": "string"
      },
      "title": "string",
      "type": "string"
    }
  ],
  "total": 0
}
```

<h3 id="list-books-positions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[R2Positions](#schemar2positions)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Get book progression

<a id="opIdgetBookProgression"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/string/progression \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/books/{bookId}/progression`

The Progression API is a proposed standard for OPDS 2 and Readium. It is used by the Epub Reader.

<h3 id="get-book-progression-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "device": {
    "id": "string",
    "name": "string"
  },
  "locator": {
    "href": "string",
    "koboSpan": "string",
    "locations": {
      "fragments": [
        "string"
      ],
      "position": 0,
      "progression": 0,
      "totalProgression": 0
    },
    "text": {
      "after": "string",
      "before": "string",
      "highlight": "string"
    },
    "title": "string",
    "type": "string"
  },
  "modified": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-book-progression-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[R2Progression](#schemar2progression)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Mark book progression

<a id="opIdupdateBookProgression"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/string/progression \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "device": {
      "id": "string",
      "name": "string"
    },
    "locator": {
      "href": "string",
      "koboSpan": "string",
      "locations": {
        "fragments": [
          "string"
        ],
        "position": 0,
        "progression": 0,
        "totalProgression": 0
      },
      "text": {
        "after": "string",
        "before": "string",
        "highlight": "string"
      },
      "title": "string",
      "type": "string"
    },
    "modified": "1970-01-01T00:00:00Z"
  }'
```

`PUT /api/v1/books/{bookId}/progression`

The Progression API is a proposed standard for OPDS 2 and Readium. It is used by the Epub Reader.

> Body parameter

```json
{
  "device": {
    "id": "string",
    "name": "string"
  },
  "locator": {
    "href": "string",
    "koboSpan": "string",
    "locations": {
      "fragments": [
        "string"
      ],
      "position": 0,
      "progression": 0,
      "totalProgression": 0
    },
    "text": {
      "after": "string",
      "before": "string",
      "highlight": "string"
    },
    "title": "string",
    "type": "string"
  },
  "modified": "1970-01-01T00:00:00Z"
}
```

<h3 id="mark-book-progression-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookId|path|string|true|none|
|body|body|[R2Progression](#schemar2progression)|true|none|
|» device|body|[R2Device](#schemar2device)|true|none|
|» locator|body|[R2Locator](#schemar2locator)|true|none|
|» modified|body|string(date-time)|true|none|

<h3 id="mark-book-progression-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Get Epub resource

<a id="opIdgetBookEpubResource"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/string/resource/string \
  -H 'Accept: application/json'
```

`GET /api/v1/books/{bookId}/resource/{resource}`

Return a resource from within an Epub book.

<h3 id="get-epub-resource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookId|path|string|true|none|
|resource|path|string|true|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="get-epub-resource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="komga-api-import">Import</h1>

## Import books

<a id="opIdimportBooks"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/books/import \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "books": [
      {
        "destinationName": "string",
        "seriesId": "string",
        "sourceFile": "string",
        "upgradeBookId": "string"
      }
    ],
    "copyMode": "MOVE"
  }'
```

`POST /api/v1/books/import`

Required role: **ADMIN**

> Body parameter

```json
{
  "books": [
    {
      "destinationName": "string",
      "seriesId": "string",
      "sourceFile": "string",
      "upgradeBookId": "string"
    }
  ],
  "copyMode": "MOVE"
}
```

<h3 id="import-books-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BookImportBatchDto](#schemabookimportbatchdto)|true|none|
|» books|body|[[BookImportDto](#schemabookimportdto)]|true|none|
|» copyMode|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» copyMode|MOVE|
|» copyMode|COPY|
|» copyMode|HARDLINK|

<h3 id="import-books-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Scan folder for transient books

<a id="opIdscanTransientBooks"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/transient-books \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "path": "string"
  }'
```

`POST /api/v1/transient-books`

Scan provided folder for transient books.

Required role: **ADMIN**

> Body parameter

```json
{
  "path": "string"
}
```

<h3 id="scan-folder-for-transient-books-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ScanRequestDto](#schemascanrequestdto)|true|none|
|» path|body|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "comment": "string",
    "fileLastModified": "1970-01-01T00:00:00Z",
    "files": [
      "string"
    ],
    "id": "string",
    "mediaType": "string",
    "name": "string",
    "number": 0,
    "pages": [
      {
        "fileName": "string",
        "height": 0,
        "mediaType": "string",
        "number": 0,
        "size": "string",
        "sizeBytes": 0,
        "width": 0
      }
    ],
    "seriesId": "string",
    "size": "string",
    "sizeBytes": 0,
    "status": "string",
    "url": "string"
  }
]
```

<h3 id="scan-folder-for-transient-books-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<h3 id="scan-folder-for-transient-books-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TransientBookDto](#schematransientbookdto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Analyze transient book

<a id="opIdanalyzeTransientBook"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/transient-books/string/analyze \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /api/v1/transient-books/{id}/analyze`

Required role: **ADMIN**

<h3 id="analyze-transient-book-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "comment": "string",
  "fileLastModified": "1970-01-01T00:00:00Z",
  "files": [
    "string"
  ],
  "id": "string",
  "mediaType": "string",
  "name": "string",
  "number": 0,
  "pages": [
    {
      "fileName": "string",
      "height": 0,
      "mediaType": "string",
      "number": 0,
      "size": "string",
      "sizeBytes": 0,
      "width": 0
    }
  ],
  "seriesId": "string",
  "size": "string",
  "sizeBytes": 0,
  "status": "string",
  "url": "string"
}
```

<h3 id="analyze-transient-book-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TransientBookDto](#schematransientbookdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Get transient book page

<a id="opIdgetPageByTransientBookId"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/transient-books/string/pages/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/transient-books/{id}/pages/{pageNumber}`

Required role: **ADMIN**

<h3 id="get-transient-book-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|pageNumber|path|integer(int32)|true|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="get-transient-book-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

<h1 id="komga-api-fonts">Fonts</h1>

Provide font files and CSS for the Epub Reader.

## List font families

<a id="opIdgetFonts"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/fonts/families \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/fonts/families`

List all available font families.

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="list-font-families-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<h3 id="list-font-families-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Download CSS file

<a id="opIdgetFontFamilyAsCss"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/fonts/resource/string/css \
  -H 'Accept: application/json'
```

`GET /api/v1/fonts/resource/{fontFamily}/css`

Download a CSS file with the @font-face block for the font family. This is used by the Epub Reader to change fonts.

<h3 id="download-css-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fontFamily|path|string|true|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="download-css-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Download font file

<a id="opIdgetFontFile"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/fonts/resource/string/string \
  -H 'Accept: application/json'
```

`GET /api/v1/fonts/resource/{fontFamily}/{fontFile}`

<h3 id="download-font-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fontFamily|path|string|true|none|
|fontFile|path|string|true|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="download-font-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="komga-api-duplicate-pages">Duplicate Pages</h1>

Manage duplicate pages. Duplicate pages are identified by a page hash.

## List known duplicates

<a id="opIdgetKnownPageHashes"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/page-hashes \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/page-hashes`

Required role: **ADMIN**

<h3 id="list-known-duplicates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|action|query|[string]|false|none|
|page|query|integer|false|Zero-based page index (0..N)|
|size|query|integer|false|The size of the page to be returned|
|sort|query|[string]|false|Sorting criteria in the format: property(,asc\|desc). Default sort order is ascending. Multiple sort criteria are supported.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|action|DELETE_AUTO|
|action|DELETE_MANUAL|
|action|IGNORE|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "action": "DELETE_AUTO",
      "created": "1970-01-01T00:00:00Z",
      "deleteCount": 0,
      "hash": "string",
      "lastModified": "1970-01-01T00:00:00Z",
      "matchCount": 0,
      "size": 0
    }
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

<h3 id="list-known-duplicates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PagePageHashKnownDto](#schemapagepagehashknowndto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Mark duplicate page as known

<a id="opIdcreateOrUpdateKnownPageHash"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/page-hashes \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "action": "DELETE_AUTO",
    "hash": "string",
    "size": 0
  }'
```

`PUT /api/v1/page-hashes`

Required role: **ADMIN**

> Body parameter

```json
{
  "action": "DELETE_AUTO",
  "hash": "string",
  "size": 0
}
```

<h3 id="mark-duplicate-page-as-known-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PageHashCreationDto](#schemapagehashcreationdto)|true|none|
|» action|body|string|true|none|
|» hash|body|string|true|none|
|» size|body|integer(int64)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» action|DELETE_AUTO|
|» action|DELETE_MANUAL|
|» action|IGNORE|

<h3 id="mark-duplicate-page-as-known-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List unknown duplicates

<a id="opIdgetUnknownPageHashes"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/page-hashes/unknown \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/page-hashes/unknown`

Required role: **ADMIN**

<h3 id="list-unknown-duplicates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Zero-based page index (0..N)|
|size|query|integer|false|The size of the page to be returned|
|sort|query|[string]|false|Sorting criteria in the format: property(,asc\|desc). Default sort order is ascending. Multiple sort criteria are supported.|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "hash": "string",
      "matchCount": 0,
      "size": 0
    }
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

<h3 id="list-unknown-duplicates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PagePageHashUnknownDto](#schemapagepagehashunknowndto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Get unknown duplicate image thumbnail

<a id="opIdgetUnknownPageHashThumbnail"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/page-hashes/unknown/string/thumbnail \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/page-hashes/unknown/{pageHash}/thumbnail`

Required role: **ADMIN**

<h3 id="get-unknown-duplicate-image-thumbnail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageHash|path|string|true|none|
|resize|query|integer(int32)|false|none|

> Example responses

> default Response

```json
"string"
```

<h3 id="get-unknown-duplicate-image-thumbnail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|default|Default|default response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List duplicate matches

<a id="opIdgetPageHashMatches"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/page-hashes/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/page-hashes/{pageHash}`

Required role: **ADMIN**

<h3 id="list-duplicate-matches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageHash|path|string|true|none|
|page|query|integer|false|Zero-based page index (0..N)|
|size|query|integer|false|The size of the page to be returned|
|sort|query|[string]|false|Sorting criteria in the format: property(,asc\|desc). Default sort order is ascending. Multiple sort criteria are supported.|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "bookId": "string",
      "fileName": "string",
      "fileSize": 0,
      "mediaType": "string",
      "pageNumber": 0,
      "url": "string"
    }
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

<h3 id="list-duplicate-matches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PagePageHashMatchDto](#schemapagepagehashmatchdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Delete all duplicate pages by hash

<a id="opIddeleteDuplicatePagesByPageHash"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/page-hashes/string/delete-all \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /api/v1/page-hashes/{pageHash}/delete-all`

Required role: **ADMIN**

<h3 id="delete-all-duplicate-pages-by-hash-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageHash|path|string|true|none|

<h3 id="delete-all-duplicate-pages-by-hash-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Delete specific duplicate page

<a id="opIddeleteSingleMatchByPageHash"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/page-hashes/string/delete-match \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "bookId": "string",
    "fileName": "string",
    "fileSize": 0,
    "mediaType": "string",
    "pageNumber": 0,
    "url": "string"
  }'
```

`POST /api/v1/page-hashes/{pageHash}/delete-match`

Required role: **ADMIN**

> Body parameter

```json
{
  "bookId": "string",
  "fileName": "string",
  "fileSize": 0,
  "mediaType": "string",
  "pageNumber": 0,
  "url": "string"
}
```

<h3 id="delete-specific-duplicate-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageHash|path|string|true|none|
|body|body|[PageHashMatchDto](#schemapagehashmatchdto)|true|none|
|» bookId|body|string|true|none|
|» fileName|body|string|true|none|
|» fileSize|body|integer(int64)|true|none|
|» mediaType|body|string|true|none|
|» pageNumber|body|integer(int32)|true|none|
|» url|body|string|true|none|

<h3 id="delete-specific-duplicate-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Get known duplicate image thumbnail

<a id="opIdgetKnownPageHashThumbnail"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/page-hashes/string/thumbnail \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/page-hashes/{pageHash}/thumbnail`

Required role: **ADMIN**

<h3 id="get-known-duplicate-image-thumbnail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageHash|path|string|true|none|

> Example responses

> default Response

```json
"string"
```

<h3 id="get-known-duplicate-image-thumbnail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|default|Default|default response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

<h1 id="komga-api-collections">Collections</h1>

Manage collections.

## List collections

<a id="opIdgetCollections"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/collections \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/collections`

<h3 id="list-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|none|
|library_id|query|[string]|false|none|
|unpaged|query|boolean|false|none|
|page|query|integer|false|Zero-based page index (0..N)|
|size|query|integer|false|The size of the page to be returned|
|sort|query|[string]|false|Sorting criteria in the format: property(,asc\|desc). Default sort order is ascending. Multiple sort criteria are supported.|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "createdDate": "1970-01-01T00:00:00Z",
      "filtered": true,
      "id": "string",
      "lastModifiedDate": "1970-01-01T00:00:00Z",
      "name": "string",
      "ordered": true,
      "seriesIds": [
        "string"
      ]
    }
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

<h3 id="list-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageCollectionDto](#schemapagecollectiondto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Create collection

<a id="opIdcreateCollection"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/collections \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "name": "string",
    "ordered": true,
    "seriesIds": [
      "string"
    ]
  }'
```

`POST /api/v1/collections`

Required role: **ADMIN**

> Body parameter

```json
{
  "name": "string",
  "ordered": true,
  "seriesIds": [
    "string"
  ]
}
```

<h3 id="create-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CollectionCreationDto](#schemacollectioncreationdto)|true|none|
|» name|body|string|true|none|
|» ordered|body|boolean|true|none|
|» seriesIds|body|[string]|true|none|

> Example responses

> 200 Response

```json
{
  "createdDate": "1970-01-01T00:00:00Z",
  "filtered": true,
  "id": "string",
  "lastModifiedDate": "1970-01-01T00:00:00Z",
  "name": "string",
  "ordered": true,
  "seriesIds": [
    "string"
  ]
}
```

<h3 id="create-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CollectionDto](#schemacollectiondto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Get collection details

<a id="opIdgetCollectionById"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/collections/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/collections/{id}`

<h3 id="get-collection-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "createdDate": "1970-01-01T00:00:00Z",
  "filtered": true,
  "id": "string",
  "lastModifiedDate": "1970-01-01T00:00:00Z",
  "name": "string",
  "ordered": true,
  "seriesIds": [
    "string"
  ]
}
```

<h3 id="get-collection-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CollectionDto](#schemacollectiondto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Delete collection

<a id="opIddeleteCollectionById"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/collections/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/v1/collections/{id}`

Required role: **ADMIN**

<h3 id="delete-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="delete-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Update collection

<a id="opIdupdateCollectionById"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/collections/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "name": "string",
    "ordered": true,
    "seriesIds": [
      "string"
    ]
  }'
```

`PATCH /api/v1/collections/{id}`

Required role: **ADMIN**

> Body parameter

```json
{
  "name": "string",
  "ordered": true,
  "seriesIds": [
    "string"
  ]
}
```

<h3 id="update-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[CollectionUpdateDto](#schemacollectionupdatedto)|true|none|
|» name|body|string|false|none|
|» ordered|body|boolean|false|none|
|» seriesIds|body|[string]|false|none|

<h3 id="update-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

<h1 id="komga-api-collection-poster">Collection Poster</h1>

Manage posters for collections.

## Get collection's poster image

<a id="opIdgetCollectionThumbnail"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/collections/string/thumbnail \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/collections/{id}/thumbnail`

<h3 id="get-collections-poster-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> default Response

```json
"string"
```

<h3 id="get-collections-poster-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|default|Default|default response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List collection's posters

<a id="opIdgetCollectionThumbnails"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/collections/string/thumbnails \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/collections/{id}/thumbnails`

<h3 id="list-collections-posters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "collectionId": "string",
    "fileSize": 0,
    "height": 0,
    "id": "string",
    "mediaType": "string",
    "selected": true,
    "type": "string",
    "width": 0
  }
]
```

<h3 id="list-collections-posters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<h3 id="list-collections-posters-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ThumbnailSeriesCollectionDto](#schemathumbnailseriescollectiondto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Add collection poster

<a id="opIdaddUserUploadedCollectionThumbnail"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/collections/string/thumbnails \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -F 'file=@/path/to/file'
```

`POST /api/v1/collections/{id}/thumbnails`

Required role: **ADMIN**

> Body parameter

```yaml
file: string
```

<h3 id="add-collection-poster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|selected|query|boolean|false|none|
|body|body|object|false|none|
|» file|body|string(binary)|true|none|

> Example responses

> 200 Response

```json
{
  "collectionId": "string",
  "fileSize": 0,
  "height": 0,
  "id": "string",
  "mediaType": "string",
  "selected": true,
  "type": "string",
  "width": 0
}
```

<h3 id="add-collection-poster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ThumbnailSeriesCollectionDto](#schemathumbnailseriescollectiondto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Get collection poster image

<a id="opIdgetCollectionThumbnailById"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/collections/string/thumbnails/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/collections/{id}/thumbnails/{thumbnailId}`

<h3 id="get-collection-poster-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|thumbnailId|path|string|true|none|

> Example responses

> default Response

```json
"string"
```

<h3 id="get-collection-poster-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|default|Default|default response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Delete collection poster

<a id="opIddeleteUserUploadedCollectionThumbnail"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/collections/string/thumbnails/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/v1/collections/{id}/thumbnails/{thumbnailId}`

Required role: **ADMIN**

<h3 id="delete-collection-poster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|thumbnailId|path|string|true|none|

<h3 id="delete-collection-poster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Mark collection poster as selected

<a id="opIdmarkCollectionThumbnailSelected"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/collections/string/thumbnails/string/selected \
  -X PUT \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /api/v1/collections/{id}/thumbnails/{thumbnailId}/selected`

Required role: **ADMIN**

<h3 id="mark-collection-poster-as-selected-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|thumbnailId|path|string|true|none|

<h3 id="mark-collection-poster-as-selected-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

<h1 id="komga-api-collection-series">Collection Series</h1>

## List collection's series

<a id="opIdgetSeriesByCollectionId"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/collections/string/series \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/collections/{id}/series`

<h3 id="list-collections-series-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|library_id|query|[string]|false|none|
|status|query|[string]|false|none|
|read_status|query|[string]|false|none|
|publisher|query|[string]|false|none|
|language|query|[string]|false|none|
|genre|query|[string]|false|none|
|tag|query|[string]|false|none|
|age_rating|query|[string]|false|none|
|release_year|query|[string]|false|none|
|deleted|query|boolean|false|none|
|complete|query|boolean|false|none|
|unpaged|query|boolean|false|none|
|page|query|integer|false|Zero-based page index (0..N)|
|size|query|integer|false|The size of the page to be returned|
|author|query|[string]|false|Author criteria in the format: name,role. Multiple author criteria are supported.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|ENDED|
|status|ONGOING|
|status|ABANDONED|
|status|HIATUS|
|read_status|UNREAD|
|read_status|READ|
|read_status|IN_PROGRESS|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "booksCount": 0,
      "booksInProgressCount": 0,
      "booksMetadata": {
        "authors": [
          {
            "name": "string",
            "role": "string"
          }
        ],
        "created": "1970-01-01T00:00:00Z",
        "lastModified": "1970-01-01T00:00:00Z",
        "notableEntities": [
          {
            "kind": "string",
            "name": "string"
          }
        ],
        "releaseDate": "1970-01-01",
        "summary": "string",
        "summaryNumber": "string",
        "tags": [
          "string"
        ]
      },
      "booksReadCount": 0,
      "booksUnreadCount": 0,
      "created": "1970-01-01T00:00:00Z",
      "deleted": true,
      "fileLastModified": "1970-01-01T00:00:00Z",
      "id": "string",
      "lastModified": "1970-01-01T00:00:00Z",
      "libraryId": "string",
      "metadata": {
        "ageRating": 0,
        "ageRatingLock": true,
        "alternateTitles": [
          {
            "label": "string",
            "title": "string"
          }
        ],
        "alternateTitlesLock": true,
        "created": "1970-01-01T00:00:00Z",
        "genres": [
          "string"
        ],
        "genresLock": true,
        "language": "string",
        "languageLock": true,
        "lastModified": "1970-01-01T00:00:00Z",
        "links": [
          {
            "label": "string",
            "url": "string"
          }
        ],
        "linksLock": true,
        "publisher": "string",
        "publisherLock": true,
        "readingDirection": "string",
        "readingDirectionLock": true,
        "sharingLabels": [
          "string"
        ],
        "sharingLabelsLock": true,
        "status": "string",
        "statusLock": true,
        "summary": "string",
        "summaryLock": true,
        "tags": [
          "string"
        ],
        "tagsLock": true,
        "title": "string",
        "titleLock": true,
        "titleSort": "string",
        "titleSortLock": true,
        "totalBookCount": 0,
        "totalBookCountLock": true
      },
      "name": "string",
      "oneshot": true,
      "url": "string"
    }
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

<h3 id="list-collections-series-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageSeriesDto](#schemapageseriesdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

<h1 id="komga-api-readlists">Readlists</h1>

Manage readlists.

## List readlists

<a id="opIdgetReadLists"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/readlists \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/readlists`

<h3 id="list-readlists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|none|
|library_id|query|[string]|false|none|
|unpaged|query|boolean|false|none|
|page|query|integer|false|Zero-based page index (0..N)|
|size|query|integer|false|The size of the page to be returned|
|sort|query|[string]|false|Sorting criteria in the format: property(,asc\|desc). Default sort order is ascending. Multiple sort criteria are supported.|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "bookIds": [
        "string"
      ],
      "createdDate": "1970-01-01T00:00:00Z",
      "filtered": true,
      "id": "string",
      "lastModifiedDate": "1970-01-01T00:00:00Z",
      "name": "string",
      "ordered": true,
      "summary": "string"
    }
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

<h3 id="list-readlists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageReadListDto](#schemapagereadlistdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Create readlist

<a id="opIdcreateReadList"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/readlists \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "bookIds": [
      "string"
    ],
    "name": "string",
    "ordered": true,
    "summary": "string"
  }'
```

`POST /api/v1/readlists`

Required role: **ADMIN**

> Body parameter

```json
{
  "bookIds": [
    "string"
  ],
  "name": "string",
  "ordered": true,
  "summary": "string"
}
```

<h3 id="create-readlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReadListCreationDto](#schemareadlistcreationdto)|true|none|
|» bookIds|body|[string]|true|none|
|» name|body|string|true|none|
|» ordered|body|boolean|true|none|
|» summary|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "bookIds": [
    "string"
  ],
  "createdDate": "1970-01-01T00:00:00Z",
  "filtered": true,
  "id": "string",
  "lastModifiedDate": "1970-01-01T00:00:00Z",
  "name": "string",
  "ordered": true,
  "summary": "string"
}
```

<h3 id="create-readlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ReadListDto](#schemareadlistdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Get readlist details

<a id="opIdgetReadListById"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/readlists/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/readlists/{id}`

<h3 id="get-readlist-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "bookIds": [
    "string"
  ],
  "createdDate": "1970-01-01T00:00:00Z",
  "filtered": true,
  "id": "string",
  "lastModifiedDate": "1970-01-01T00:00:00Z",
  "name": "string",
  "ordered": true,
  "summary": "string"
}
```

<h3 id="get-readlist-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ReadListDto](#schemareadlistdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Delete readlist

<a id="opIddeleteReadListById"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/readlists/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/v1/readlists/{id}`

Required role: **ADMIN**

<h3 id="delete-readlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="delete-readlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Update readlist

<a id="opIdupdateReadListById"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/readlists/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "bookIds": [
      "string"
    ],
    "name": "string",
    "ordered": true,
    "summary": "string"
  }'
```

`PATCH /api/v1/readlists/{id}`

Required role: **ADMIN**

> Body parameter

```json
{
  "bookIds": [
    "string"
  ],
  "name": "string",
  "ordered": true,
  "summary": "string"
}
```

<h3 id="update-readlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[ReadListUpdateDto](#schemareadlistupdatedto)|true|none|
|» bookIds|body|[string]|false|none|
|» name|body|string|false|none|
|» ordered|body|boolean|false|none|
|» summary|body|string|false|none|

<h3 id="update-readlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Download readlist

<a id="opIddownloadReadListAsZip"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/readlists/string/file \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/readlists/{id}/file`

Download the whole readlist as a ZIP file.

Required role: **FILE_DOWNLOAD**

<h3 id="download-readlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
null
```

<h3 id="download-readlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[StreamingResponseBody](#schemastreamingresponsebody)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

<h1 id="komga-api-readlist-poster">Readlist Poster</h1>

Manage posters for readlists.

## Get readlist's poster image

<a id="opIdgetReadListThumbnail"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/readlists/string/thumbnail \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/readlists/{id}/thumbnail`

<h3 id="get-readlists-poster-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> default Response

```json
"string"
```

<h3 id="get-readlists-poster-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|default|Default|default response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List readlist's posters

<a id="opIdgetReadListThumbnails"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/readlists/string/thumbnails \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/readlists/{id}/thumbnails`

<h3 id="list-readlists-posters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "fileSize": 0,
    "height": 0,
    "id": "string",
    "mediaType": "string",
    "readListId": "string",
    "selected": true,
    "type": "string",
    "width": 0
  }
]
```

<h3 id="list-readlists-posters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<h3 id="list-readlists-posters-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ThumbnailReadListDto](#schemathumbnailreadlistdto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Add readlist poster

<a id="opIdaddUserUploadedReadListThumbnail"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/readlists/string/thumbnails \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -F 'file=@/path/to/file'
```

`POST /api/v1/readlists/{id}/thumbnails`

Required role: **ADMIN**

> Body parameter

```yaml
file: string
```

<h3 id="add-readlist-poster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|selected|query|boolean|false|none|
|body|body|object|false|none|
|» file|body|string(binary)|true|none|

> Example responses

> 200 Response

```json
{
  "fileSize": 0,
  "height": 0,
  "id": "string",
  "mediaType": "string",
  "readListId": "string",
  "selected": true,
  "type": "string",
  "width": 0
}
```

<h3 id="add-readlist-poster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ThumbnailReadListDto](#schemathumbnailreadlistdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Get readlist poster image

<a id="opIdgetReadListThumbnailById"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/readlists/string/thumbnails/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/readlists/{id}/thumbnails/{thumbnailId}`

<h3 id="get-readlist-poster-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|thumbnailId|path|string|true|none|

> Example responses

> default Response

```json
"string"
```

<h3 id="get-readlist-poster-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|default|Default|default response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Delete readlist poster

<a id="opIddeleteUserUploadedReadListThumbnail"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/readlists/string/thumbnails/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/v1/readlists/{id}/thumbnails/{thumbnailId}`

Required role: **ADMIN**

<h3 id="delete-readlist-poster-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|thumbnailId|path|string|true|none|

<h3 id="delete-readlist-poster-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Mark readlist poster as selected

<a id="opIdmarkReadListThumbnailSelected"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/readlists/string/thumbnails/string/selected \
  -X PUT \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PUT /api/v1/readlists/{id}/thumbnails/{thumbnailId}/selected`

Required role: **ADMIN**

<h3 id="mark-readlist-poster-as-selected-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|thumbnailId|path|string|true|none|

<h3 id="mark-readlist-poster-as-selected-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

<h1 id="komga-api-readlist-books">Readlist Books</h1>

## List readlist's books

<a id="opIdgetBooksByReadListId"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/readlists/string/books \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/readlists/{id}/books`

<h3 id="list-readlists-books-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|library_id|query|[string]|false|none|
|read_status|query|[string]|false|none|
|tag|query|[string]|false|none|
|media_status|query|[string]|false|none|
|deleted|query|boolean|false|none|
|unpaged|query|boolean|false|none|
|page|query|integer|false|Zero-based page index (0..N)|
|size|query|integer|false|The size of the page to be returned|
|author|query|[string]|false|Author criteria in the format: name,role. Multiple author criteria are supported.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|read_status|UNREAD|
|read_status|READ|
|read_status|IN_PROGRESS|
|media_status|UNKNOWN|
|media_status|ERROR|
|media_status|READY|
|media_status|UNSUPPORTED|
|media_status|OUTDATED|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "created": "1970-01-01T00:00:00Z",
      "deleted": true,
      "fileHash": "string",
      "fileLastModified": "1970-01-01T00:00:00Z",
      "id": "string",
      "lastModified": "1970-01-01T00:00:00Z",
      "libraryId": "string",
      "media": {
        "comment": "string",
        "epubDivinaCompatible": true,
        "epubIsKepub": true,
        "mediaProfile": "string",
        "mediaType": "string",
        "pagesCount": 0,
        "status": "string"
      },
      "metadata": {
        "authors": [
          {
            "name": "string",
            "role": "string"
          }
        ],
        "authorsLock": true,
        "created": "1970-01-01T00:00:00Z",
        "isbn": "string",
        "isbnLock": true,
        "lastModified": "1970-01-01T00:00:00Z",
        "links": [
          {
            "label": "string",
            "url": "string"
          }
        ],
        "linksLock": true,
        "notableEntities": [
          {
            "kind": "string",
            "name": "string"
          }
        ],
        "notableEntitiesLock": true,
        "number": "string",
        "numberLock": true,
        "numberSort": 0,
        "numberSortLock": true,
        "releaseDate": "1970-01-01",
        "releaseDateLock": true,
        "summary": "string",
        "summaryLock": true,
        "tags": [
          "string"
        ],
        "tagsLock": true,
        "title": "string",
        "titleLock": true
      },
      "name": "string",
      "number": 0,
      "oneshot": true,
      "readProgress": {
        "completed": true,
        "created": "1970-01-01T00:00:00Z",
        "deviceId": "string",
        "deviceName": "string",
        "lastModified": "1970-01-01T00:00:00Z",
        "page": 0,
        "readDate": "1970-01-01T00:00:00Z"
      },
      "seriesId": "string",
      "seriesTitle": "string",
      "size": "string",
      "sizeBytes": 0,
      "url": "string"
    }
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

<h3 id="list-readlists-books-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageBookDto](#schemapagebookdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Get next book in readlist

<a id="opIdgetBookSiblingNextInReadList"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/readlists/string/books/string/next \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/readlists/{id}/books/{bookId}/next`

<h3 id="get-next-book-in-readlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|bookId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01T00:00:00Z",
  "deleted": true,
  "fileHash": "string",
  "fileLastModified": "1970-01-01T00:00:00Z",
  "id": "string",
  "lastModified": "1970-01-01T00:00:00Z",
  "libraryId": "string",
  "media": {
    "comment": "string",
    "epubDivinaCompatible": true,
    "epubIsKepub": true,
    "mediaProfile": "string",
    "mediaType": "string",
    "pagesCount": 0,
    "status": "string"
  },
  "metadata": {
    "authors": [
      {
        "name": "string",
        "role": "string"
      }
    ],
    "authorsLock": true,
    "created": "1970-01-01T00:00:00Z",
    "isbn": "string",
    "isbnLock": true,
    "lastModified": "1970-01-01T00:00:00Z",
    "links": [
      {
        "label": "string",
        "url": "string"
      }
    ],
    "linksLock": true,
    "notableEntities": [
      {
        "kind": "string",
        "name": "string"
      }
    ],
    "notableEntitiesLock": true,
    "number": "string",
    "numberLock": true,
    "numberSort": 0,
    "numberSortLock": true,
    "releaseDate": "1970-01-01",
    "releaseDateLock": true,
    "summary": "string",
    "summaryLock": true,
    "tags": [
      "string"
    ],
    "tagsLock": true,
    "title": "string",
    "titleLock": true
  },
  "name": "string",
  "number": 0,
  "oneshot": true,
  "readProgress": {
    "completed": true,
    "created": "1970-01-01T00:00:00Z",
    "deviceId": "string",
    "deviceName": "string",
    "lastModified": "1970-01-01T00:00:00Z",
    "page": 0,
    "readDate": "1970-01-01T00:00:00Z"
  },
  "seriesId": "string",
  "seriesTitle": "string",
  "size": "string",
  "sizeBytes": 0,
  "url": "string"
}
```

<h3 id="get-next-book-in-readlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BookDto](#schemabookdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Get previous book in readlist

<a id="opIdgetBookSiblingPreviousInReadList"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/readlists/string/books/string/previous \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/readlists/{id}/books/{bookId}/previous`

<h3 id="get-previous-book-in-readlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|bookId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01T00:00:00Z",
  "deleted": true,
  "fileHash": "string",
  "fileLastModified": "1970-01-01T00:00:00Z",
  "id": "string",
  "lastModified": "1970-01-01T00:00:00Z",
  "libraryId": "string",
  "media": {
    "comment": "string",
    "epubDivinaCompatible": true,
    "epubIsKepub": true,
    "mediaProfile": "string",
    "mediaType": "string",
    "pagesCount": 0,
    "status": "string"
  },
  "metadata": {
    "authors": [
      {
        "name": "string",
        "role": "string"
      }
    ],
    "authorsLock": true,
    "created": "1970-01-01T00:00:00Z",
    "isbn": "string",
    "isbnLock": true,
    "lastModified": "1970-01-01T00:00:00Z",
    "links": [
      {
        "label": "string",
        "url": "string"
      }
    ],
    "linksLock": true,
    "notableEntities": [
      {
        "kind": "string",
        "name": "string"
      }
    ],
    "notableEntitiesLock": true,
    "number": "string",
    "numberLock": true,
    "numberSort": 0,
    "numberSortLock": true,
    "releaseDate": "1970-01-01",
    "releaseDateLock": true,
    "summary": "string",
    "summaryLock": true,
    "tags": [
      "string"
    ],
    "tagsLock": true,
    "title": "string",
    "titleLock": true
  },
  "name": "string",
  "number": 0,
  "oneshot": true,
  "readProgress": {
    "completed": true,
    "created": "1970-01-01T00:00:00Z",
    "deviceId": "string",
    "deviceName": "string",
    "lastModified": "1970-01-01T00:00:00Z",
    "page": 0,
    "readDate": "1970-01-01T00:00:00Z"
  },
  "seriesId": "string",
  "seriesTitle": "string",
  "size": "string",
  "sizeBytes": 0,
  "url": "string"
}
```

<h3 id="get-previous-book-in-readlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BookDto](#schemabookdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

<h1 id="komga-api-referential-metadata">Referential metadata</h1>

Retrieve referential metadata from all items in the Komga server.

## List age ratings

<a id="opIdgetAgeRatings"></a>

> Code samples

```bash
curl http://localhost:25600/api/v2/age-ratings \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v2/age-ratings`

Can be filtered by various criteria

<h3 id="list-age-ratings-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library_id|query|[string]|false|none|
|collection_id|query|[string]|false|none|
|unpaged|query|boolean|false|none|
|page|query|integer|false|Zero-based page index (0..N)|
|size|query|integer|false|The size of the page to be returned|

> Example responses

> 200 Response

```json
{
  "content": [
    0
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

<h3 id="list-age-ratings-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageInteger](#schemapageinteger)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List authors

<a id="opIdgetAuthors"></a>

> Code samples

```bash
curl http://localhost:25600/api/v2/authors \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v2/authors`

Can be filtered by various criteria

<h3 id="list-authors-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|none|
|role|query|string|false|none|
|library_id|query|[string]|false|none|
|collection_id|query|[string]|false|none|
|series_id|query|[string]|false|none|
|readlist_id|query|[string]|false|none|
|unpaged|query|boolean|false|none|
|page|query|integer|false|Zero-based page index (0..N)|
|size|query|integer|false|The size of the page to be returned|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "name": "string",
      "role": "string"
    }
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

<h3 id="list-authors-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageAuthorDto](#schemapageauthordto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List authors names

<a id="opIdgetAuthorsNames"></a>

> Code samples

```bash
curl http://localhost:25600/api/v2/authors/names \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v2/authors/names`

Can be filtered by various criteria

<h3 id="list-authors-names-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|none|
|role|query|string|false|none|
|library_id|query|[string]|false|none|
|collection_id|query|[string]|false|none|
|series_id|query|[string]|false|none|
|readlist_id|query|[string]|false|none|
|unpaged|query|boolean|false|none|
|page|query|integer|false|Zero-based page index (0..N)|
|size|query|integer|false|The size of the page to be returned|

> Example responses

> 200 Response

```json
{
  "content": [
    "string"
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

<h3 id="list-authors-names-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageString](#schemapagestring)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List authors roles

<a id="opIdgetAuthorsRoles"></a>

> Code samples

```bash
curl http://localhost:25600/api/v2/authors/roles \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v2/authors/roles`

Can be filtered by various criteria

<h3 id="list-authors-roles-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library_id|query|[string]|false|none|
|collection_id|query|[string]|false|none|
|series_id|query|[string]|false|none|
|readlist_id|query|[string]|false|none|
|unpaged|query|boolean|false|none|
|page|query|integer|false|Zero-based page index (0..N)|
|size|query|integer|false|The size of the page to be returned|

> Example responses

> 200 Response

```json
{
  "content": [
    "string"
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

<h3 id="list-authors-roles-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageString](#schemapagestring)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List genres

<a id="opIdgetGenres"></a>

> Code samples

```bash
curl http://localhost:25600/api/v2/genres \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v2/genres`

Can be filtered by various criteria

<h3 id="list-genres-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|none|
|library_id|query|[string]|false|none|
|collection_id|query|[string]|false|none|
|unpaged|query|boolean|false|none|
|page|query|integer|false|Zero-based page index (0..N)|
|size|query|integer|false|The size of the page to be returned|

> Example responses

> 200 Response

```json
{
  "content": [
    "string"
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

<h3 id="list-genres-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageString](#schemapagestring)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List languages

<a id="opIdgetLanguages"></a>

> Code samples

```bash
curl http://localhost:25600/api/v2/languages \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v2/languages`

Can be filtered by various criteria

<h3 id="list-languages-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|none|
|library_id|query|[string]|false|none|
|collection_id|query|[string]|false|none|
|unpaged|query|boolean|false|none|
|page|query|integer|false|Zero-based page index (0..N)|
|size|query|integer|false|The size of the page to be returned|

> Example responses

> 200 Response

```json
{
  "content": [
    "string"
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

<h3 id="list-languages-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageString](#schemapagestring)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List publishers

<a id="opIdgetPublishers"></a>

> Code samples

```bash
curl http://localhost:25600/api/v2/publishers \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v2/publishers`

Can be filtered by various criteria

<h3 id="list-publishers-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|none|
|library_id|query|[string]|false|none|
|collection_id|query|[string]|false|none|
|unpaged|query|boolean|false|none|
|page|query|integer|false|Zero-based page index (0..N)|
|size|query|integer|false|The size of the page to be returned|

> Example responses

> 200 Response

```json
{
  "content": [
    "string"
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

<h3 id="list-publishers-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageString](#schemapagestring)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List series release years

<a id="opIdgetSeriesReleaseYears"></a>

> Code samples

```bash
curl http://localhost:25600/api/v2/series/release-years \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v2/series/release-years`

Can be filtered by various criteria

<h3 id="list-series-release-years-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library_id|query|[string]|false|none|
|collection_id|query|[string]|false|none|
|unpaged|query|boolean|false|none|
|page|query|integer|false|Zero-based page index (0..N)|
|size|query|integer|false|The size of the page to be returned|

> Example responses

> 200 Response

```json
{
  "content": [
    "string"
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

<h3 id="list-series-release-years-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageString](#schemapagestring)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List sharing labels

<a id="opIdgetSharingLabels"></a>

> Code samples

```bash
curl http://localhost:25600/api/v2/sharing-labels \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v2/sharing-labels`

Can be filtered by various criteria

<h3 id="list-sharing-labels-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|none|
|library_id|query|[string]|false|none|
|collection_id|query|[string]|false|none|
|unpaged|query|boolean|false|none|
|page|query|integer|false|Zero-based page index (0..N)|
|size|query|integer|false|The size of the page to be returned|

> Example responses

> 200 Response

```json
{
  "content": [
    "string"
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

<h3 id="list-sharing-labels-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageString](#schemapagestring)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List tags

<a id="opIdgetTags"></a>

> Code samples

```bash
curl http://localhost:25600/api/v2/tags \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v2/tags`

Can be filtered by various criteria

<h3 id="list-tags-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|none|
|library_id|query|[string]|false|none|
|collection_id|query|[string]|false|none|
|series_id|query|[string]|false|none|
|readlist_id|query|[string]|false|none|
|include|query|string|false|none|
|unpaged|query|boolean|false|none|
|page|query|integer|false|Zero-based page index (0..N)|
|size|query|integer|false|The size of the page to be returned|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include|SERIES|
|include|BOOK|
|include|BOTH|

> Example responses

> 200 Response

```json
{
  "content": [
    "string"
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

<h3 id="list-tags-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageString](#schemapagestring)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List notable entities

<a id="opIdgetNotableEntities"></a>

> Code samples

```bash
curl http://localhost:25600/api/v3/notable-entities \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v3/notable-entities`

Can be filtered by various criteria

<h3 id="list-notable-entities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|none|
|kind|query|string|false|none|
|library_id|query|[string]|false|none|
|collection_id|query|[string]|false|none|
|series_id|query|[string]|false|none|
|readlist_id|query|[string]|false|none|
|unpaged|query|boolean|false|none|
|page|query|integer|false|Zero-based page index (0..N)|
|size|query|integer|false|The size of the page to be returned|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "kind": "string",
      "name": "string"
    }
  ],
  "first": true,
  "last": false,
  "page": 0,
  "size": 20,
  "totalElements": 105,
  "totalPages": 6
}
```

<h3 id="list-notable-entities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageResponseNotableEntityDto](#schemapageresponsenotableentitydto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List notable entities kinds

<a id="opIdgetNotableEntitiesKinds"></a>

> Code samples

```bash
curl http://localhost:25600/api/v3/notable-entities/kinds \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v3/notable-entities/kinds`

Can be filtered by various criteria

<h3 id="list-notable-entities-kinds-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|library_id|query|[string]|false|none|
|collection_id|query|[string]|false|none|
|series_id|query|[string]|false|none|
|readlist_id|query|[string]|false|none|
|unpaged|query|boolean|false|none|
|page|query|integer|false|Zero-based page index (0..N)|
|size|query|integer|false|The size of the page to be returned|

> Example responses

> 200 Response

```json
{
  "content": [
    "string"
  ],
  "first": true,
  "last": false,
  "page": 0,
  "size": 20,
  "totalElements": 105,
  "totalPages": 6
}
```

<h3 id="list-notable-entities-kinds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageResponseString](#schemapageresponsestring)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## List notable entities names

<a id="opIdgetNotableEntitiesNames"></a>

> Code samples

```bash
curl http://localhost:25600/api/v3/notable-entities/names \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v3/notable-entities/names`

Can be filtered by various criteria

<h3 id="list-notable-entities-names-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|none|
|kind|query|string|false|none|
|library_id|query|[string]|false|none|
|collection_id|query|[string]|false|none|
|series_id|query|[string]|false|none|
|readlist_id|query|[string]|false|none|
|unpaged|query|boolean|false|none|
|page|query|integer|false|Zero-based page index (0..N)|
|size|query|integer|false|The size of the page to be returned|

> Example responses

> 200 Response

```json
{
  "content": [
    "string"
  ],
  "first": true,
  "last": false,
  "page": 0,
  "size": 20,
  "totalElements": 105,
  "totalPages": 6
}
```

<h3 id="list-notable-entities-names-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageResponseString](#schemapageresponsestring)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

<h1 id="komga-api-current-user">Current user</h1>

Manage current user.

## Retrieve current user

<a id="opIdgetCurrentUser"></a>

> Code samples

```bash
curl http://localhost:25600/api/v2/users/me \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v2/users/me`

<h3 id="retrieve-current-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|remember-me|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "ageRestriction": {
    "age": 0,
    "restriction": "ALLOW_ONLY"
  },
  "email": "string",
  "id": "string",
  "labelsAllow": [
    "string"
  ],
  "labelsExclude": [
    "string"
  ],
  "roles": [
    "string"
  ],
  "sharedAllLibraries": true,
  "sharedLibrariesIds": [
    "string"
  ]
}
```

<h3 id="retrieve-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UserDto](#schemauserdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Retrieve authentication activity for the current user

<a id="opIdgetAuthenticationActivityForCurrentUser"></a>

> Code samples

```bash
curl http://localhost:25600/api/v2/users/me/authentication-activity \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v2/users/me/authentication-activity`

<h3 id="retrieve-authentication-activity-for-the-current-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|unpaged|query|boolean|false|none|
|page|query|integer|false|Zero-based page index (0..N)|
|size|query|integer|false|The size of the page to be returned|
|sort|query|[string]|false|Sorting criteria in the format: property,(asc\|desc). Default sort order is ascending. Multiple sort criteria are supported.|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "apiKeyComment": "string",
      "apiKeyId": "string",
      "dateTime": "1970-01-01T00:00:00Z",
      "email": "string",
      "error": "string",
      "ip": "string",
      "source": "string",
      "success": true,
      "userAgent": "string",
      "userId": "string"
    }
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

<h3 id="retrieve-authentication-activity-for-the-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageAuthenticationActivityDto](#schemapageauthenticationactivitydto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Update current user's password

<a id="opIdupdatePasswordForCurrentUser"></a>

> Code samples

```bash
curl http://localhost:25600/api/v2/users/me/password \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "password": "string"
  }'
```

`PATCH /api/v2/users/me/password`

> Body parameter

```json
{
  "password": "string"
}
```

<h3 id="update-current-users-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PasswordUpdateDto](#schemapasswordupdatedto)|true|none|
|» password|body|string|true|none|

<h3 id="update-current-users-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

<h1 id="komga-api-users">Users</h1>

Manage users.

## List users

<a id="opIdgetUsers"></a>

> Code samples

```bash
curl http://localhost:25600/api/v2/users \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v2/users`

Required role: **ADMIN**

> Example responses

> 200 Response

```json
[
  {
    "ageRestriction": {
      "age": 0,
      "restriction": "ALLOW_ONLY"
    },
    "email": "string",
    "id": "string",
    "labelsAllow": [
      "string"
    ],
    "labelsExclude": [
      "string"
    ],
    "roles": [
      "string"
    ],
    "sharedAllLibraries": true,
    "sharedLibrariesIds": [
      "string"
    ]
  }
]
```

<h3 id="list-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<h3 id="list-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UserDto](#schemauserdto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Create user

<a id="opIdaddUser"></a>

> Code samples

```bash
curl http://localhost:25600/api/v2/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "ageRestriction": {
      "age": 0,
      "restriction": "ALLOW_ONLY"
    },
    "email": "string",
    "labelsAllow": [
      "string"
    ],
    "labelsExclude": [
      "string"
    ],
    "password": "string",
    "roles": [
      "string"
    ],
    "sharedLibraries": {
      "all": true,
      "libraryIds": [
        "string"
      ]
    }
  }'
```

`POST /api/v2/users`

Required role: **ADMIN**

> Body parameter

```json
{
  "ageRestriction": {
    "age": 0,
    "restriction": "ALLOW_ONLY"
  },
  "email": "string",
  "labelsAllow": [
    "string"
  ],
  "labelsExclude": [
    "string"
  ],
  "password": "string",
  "roles": [
    "string"
  ],
  "sharedLibraries": {
    "all": true,
    "libraryIds": [
      "string"
    ]
  }
}
```

<h3 id="create-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UserCreationDto](#schemausercreationdto)|true|none|
|» ageRestriction|body|[AgeRestrictionUpdateDto](#schemaagerestrictionupdatedto)|false|none|
|» email|body|string|true|none|
|» labelsAllow|body|[string]|false|none|
|» labelsExclude|body|[string]|false|none|
|» password|body|string|true|none|
|» roles|body|[string]|true|none|
|» sharedLibraries|body|[SharedLibrariesUpdateDto](#schemasharedlibrariesupdatedto)|false|none|

> Example responses

> 201 Response

```json
{
  "ageRestriction": {
    "age": 0,
    "restriction": "ALLOW_ONLY"
  },
  "email": "string",
  "id": "string",
  "labelsAllow": [
    "string"
  ],
  "labelsExclude": [
    "string"
  ],
  "roles": [
    "string"
  ],
  "sharedAllLibraries": true,
  "sharedLibrariesIds": [
    "string"
  ]
}
```

<h3 id="create-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[UserDto](#schemauserdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Retrieve authentication activity

<a id="opIdgetAuthenticationActivity"></a>

> Code samples

```bash
curl http://localhost:25600/api/v2/users/authentication-activity \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v2/users/authentication-activity`

Required role: **ADMIN**

<h3 id="retrieve-authentication-activity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|unpaged|query|boolean|false|none|
|page|query|integer|false|Zero-based page index (0..N)|
|size|query|integer|false|The size of the page to be returned|
|sort|query|[string]|false|Sorting criteria in the format: property,(asc\|desc). Default sort order is ascending. Multiple sort criteria are supported.|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "apiKeyComment": "string",
      "apiKeyId": "string",
      "dateTime": "1970-01-01T00:00:00Z",
      "email": "string",
      "error": "string",
      "ip": "string",
      "source": "string",
      "success": true,
      "userAgent": "string",
      "userId": "string"
    }
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

<h3 id="retrieve-authentication-activity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageAuthenticationActivityDto](#schemapageauthenticationactivitydto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Delete user

<a id="opIddeleteUserById"></a>

> Code samples

```bash
curl http://localhost:25600/api/v2/users/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/v2/users/{id}`

Required role: **ADMIN**

<h3 id="delete-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="delete-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Update user

<a id="opIdupdateUserById"></a>

> Code samples

```bash
curl http://localhost:25600/api/v2/users/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "ageRestriction": {
      "age": 0,
      "restriction": "ALLOW_ONLY"
    },
    "labelsAllow": [
      "string"
    ],
    "labelsExclude": [
      "string"
    ],
    "roles": [
      "string"
    ],
    "sharedLibraries": {
      "all": true,
      "libraryIds": [
        "string"
      ]
    }
  }'
```

`PATCH /api/v2/users/{id}`

Required role: **ADMIN**

> Body parameter

```json
{
  "ageRestriction": {
    "age": 0,
    "restriction": "ALLOW_ONLY"
  },
  "labelsAllow": [
    "string"
  ],
  "labelsExclude": [
    "string"
  ],
  "roles": [
    "string"
  ],
  "sharedLibraries": {
    "all": true,
    "libraryIds": [
      "string"
    ]
  }
}
```

<h3 id="update-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[UserUpdateDto](#schemauserupdatedto)|true|none|
|» ageRestriction|body|[AgeRestrictionUpdateDto](#schemaagerestrictionupdatedto)|false|none|
|» labelsAllow|body|[string]|false|none|
|» labelsExclude|body|[string]|false|none|
|» roles|body|[string]|false|none|
|» sharedLibraries|body|[SharedLibrariesUpdateDto](#schemasharedlibrariesupdatedto)|false|none|

<h3 id="update-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Retrieve latest authentication activity for a user

<a id="opIdgetLatestAuthenticationActivityByUserId"></a>

> Code samples

```bash
curl http://localhost:25600/api/v2/users/string/authentication-activity/latest \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v2/users/{id}/authentication-activity/latest`

Required role: **ADMIN**

<h3 id="retrieve-latest-authentication-activity-for-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|apikey_id|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "apiKeyComment": "string",
  "apiKeyId": "string",
  "dateTime": "1970-01-01T00:00:00Z",
  "email": "string",
  "error": "string",
  "ip": "string",
  "source": "string",
  "success": true,
  "userAgent": "string",
  "userId": "string"
}
```

<h3 id="retrieve-latest-authentication-activity-for-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AuthenticationActivityDto](#schemaauthenticationactivitydto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Update user's password

<a id="opIdupdatePasswordByUserId"></a>

> Code samples

```bash
curl http://localhost:25600/api/v2/users/string/password \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "password": "string"
  }'
```

`PATCH /api/v2/users/{id}/password`

Required role: **ADMIN**

> Body parameter

```json
{
  "password": "string"
}
```

<h3 id="update-users-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[PasswordUpdateDto](#schemapasswordupdatedto)|true|none|
|» password|body|string|true|none|

<h3 id="update-users-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

<h1 id="komga-api-api-keys">API Keys</h1>

Manage API Keys

## Retrieve API keys

<a id="opIdgetApiKeysForCurrentUser"></a>

> Code samples

```bash
curl http://localhost:25600/api/v2/users/me/api-keys \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v2/users/me/api-keys`

> Example responses

> 200 Response

```json
[
  {
    "comment": "string",
    "createdDate": "1970-01-01T00:00:00Z",
    "id": "string",
    "key": "string",
    "lastModifiedDate": "1970-01-01T00:00:00Z",
    "userId": "string"
  }
]
```

<h3 id="retrieve-api-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<h3 id="retrieve-api-keys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ApiKeyDto](#schemaapikeydto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Create API key

<a id="opIdcreateApiKeyForCurrentUser"></a>

> Code samples

```bash
curl http://localhost:25600/api/v2/users/me/api-keys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "comment": "string"
  }'
```

`POST /api/v2/users/me/api-keys`

> Body parameter

```json
{
  "comment": "string"
}
```

<h3 id="create-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiKeyRequestDto](#schemaapikeyrequestdto)|true|none|
|» comment|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "comment": "string",
  "createdDate": "1970-01-01T00:00:00Z",
  "id": "string",
  "key": "string",
  "lastModifiedDate": "1970-01-01T00:00:00Z",
  "userId": "string"
}
```

<h3 id="create-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ApiKeyDto](#schemaapikeydto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Delete API key

<a id="opIddeleteApiKeyByKeyId"></a>

> Code samples

```bash
curl http://localhost:25600/api/v2/users/me/api-keys/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/v2/users/me/api-keys/{keyId}`

<h3 id="delete-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|keyId|path|string|true|none|

<h3 id="delete-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

<h1 id="komga-api-user-session">User session</h1>

## Logout

<a id="opIdpostLogout"></a>

> Code samples

```bash
curl http://localhost:25600/api/logout \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/logout`

Invalidates the current session and clean up any remember-me authentication.

<h3 id="logout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Logout

<a id="opIdpostLogout_1"></a>

> Code samples

```bash
curl http://localhost:25600/api/logout \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /api/logout`

Invalidates the current session and clean up any remember-me authentication.

<h3 id="logout-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Set cookie

<a id="opIdconvertHeaderSessionToCookie"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/login/set-cookie \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/login/set-cookie`

Forcefully return Set-Cookie header, even if the session is contained in the X-Auth-Token header.

<h3 id="set-cookie-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

<h1 id="komga-api-oauth2">OAuth2</h1>

List registered OAuth2 providers

## List registered OAuth2 providers

<a id="opIdgetOAuth2Providers"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/oauth2/providers \
  -H 'Accept: application/json'
```

`GET /api/v1/oauth2/providers`

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "registrationId": "string"
  }
]
```

<h3 id="list-registered-oauth2-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<h3 id="list-registered-oauth2-providers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[OAuth2ClientDto](#schemaoauth2clientdto)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="komga-api-sync-points">Sync points</h1>

Sync points are automatically created during a Kobo sync.

## Delete all sync points

<a id="opIddeleteSyncPointsForCurrentUser"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/syncpoints/me \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/v1/syncpoints/me`

If an API Key ID is passed, deletes only the sync points associated with that API Key. Deleting sync points will allow a Kobo to sync from scratch upon the next sync.

<h3 id="delete-all-sync-points-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key_id|query|[string]|false|none|

<h3 id="delete-all-sync-points-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

<h1 id="komga-api-claim">Claim</h1>

Claim a freshly installed Komga server.

## Retrieve claim status

<a id="opIdgetClaimStatus"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/claim \
  -H 'Accept: application/json'
```

`GET /api/v1/claim`

Check whether this server has already been claimed.

> Example responses

> 200 Response

```json
{
  "isClaimed": true
}
```

<h3 id="retrieve-claim-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ClaimStatus](#schemaclaimstatus)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Claim server

<a id="opIdclaimServer"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/claim \
  -X POST \
  -H 'Accept: application/json' \
  -H 'X-Komga-Email: string' \
  -H 'X-Komga-Password: string'
```

`POST /api/v1/claim`

Creates an admin user with the provided credentials.

<h3 id="claim-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Komga-Email|header|string|true|none|
|X-Komga-Password|header|string|true|none|

> Example responses

> 200 Response

```json
{
  "ageRestriction": {
    "age": 0,
    "restriction": "ALLOW_ONLY"
  },
  "email": "string",
  "id": "string",
  "labelsAllow": [
    "string"
  ],
  "labelsExclude": [
    "string"
  ],
  "roles": [
    "string"
  ],
  "sharedAllLibraries": true,
  "sharedLibrariesIds": [
    "string"
  ]
}
```

<h3 id="claim-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UserDto](#schemauserdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="komga-api-tasks">Tasks</h1>

Manage server tasks

## Clear task queue

<a id="opIdemptyTaskQueue"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/tasks \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /api/v1/tasks`

Cancel all tasks queued

Required role: **ADMIN**

> Example responses

> 200 Response

```json
0
```

<h3 id="clear-task-queue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

<h1 id="komga-api-history">History</h1>

Server events history

## List historical events

<a id="opIdgetHistoricalEvents"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/history \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/history`

Required role: **ADMIN**

<h3 id="list-historical-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Zero-based page index (0..N)|
|size|query|integer|false|The size of the page to be returned|
|sort|query|[string]|false|Sorting criteria in the format: property(,asc\|desc). Default sort order is ascending. Multiple sort criteria are supported.|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "bookId": "string",
      "id": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "seriesId": "string",
      "timestamp": "1970-01-01T00:00:00Z",
      "type": "string"
    }
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

<h3 id="list-historical-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageHistoricalEventDto](#schemapagehistoricaleventdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

<h1 id="komga-api-file-system">File system</h1>

List files from the host server's file system

## Directory listing

<a id="opIdgetDirectoryListing"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/filesystem \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "path": "string",
    "showFiles": true
  }'
```

`POST /api/v1/filesystem`

List folders and files from the host server's file system. If no request body is passed then the root directories are returned.

Required role: **ADMIN**

> Body parameter

```json
{
  "path": "string",
  "showFiles": true
}
```

<h3 id="directory-listing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DirectoryRequestDto](#schemadirectoryrequestdto)|false|none|
|» path|body|string|true|none|
|» showFiles|body|boolean|true|none|

> Example responses

> 200 Response

```json
{
  "directories": [
    {
      "name": "string",
      "path": "string",
      "type": "string"
    }
  ],
  "files": [
    {
      "name": "string",
      "path": "string",
      "type": "string"
    }
  ],
  "parent": "string"
}
```

<h3 id="directory-listing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DirectoryListingDto](#schemadirectorylistingdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

<h1 id="komga-api-server-settings">Server settings</h1>

Store and retrieve server settings

## Retrieve server settings

<a id="opIdgetServerSettings"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/settings \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/settings`

> Example responses

> 200 Response

```json
{
  "deleteEmptyCollections": true,
  "deleteEmptyReadLists": true,
  "kepubifyPath": {
    "configurationSource": "string",
    "databaseSource": "string",
    "effectiveValue": "string"
  },
  "koboPort": 0,
  "koboProxy": true,
  "maxUploadFileSizeBytes": 0,
  "nextUiAsDefault": true,
  "rememberMeDurationDays": 0,
  "serverContextPath": {
    "configurationSource": "string",
    "databaseSource": "string",
    "effectiveValue": "string"
  },
  "serverPort": {
    "configurationSource": 0,
    "databaseSource": 0,
    "effectiveValue": 0
  },
  "taskPoolSize": 0,
  "thumbnailSize": "DEFAULT"
}
```

<h3 id="retrieve-server-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SettingsDto](#schemasettingsdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Update server settings

<a id="opIdupdateServerSettings"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/settings \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "deleteEmptyCollections": true,
    "deleteEmptyReadLists": true,
    "kepubifyPath": "string",
    "koboPort": 0,
    "koboProxy": true,
    "nextUiAsDefault": true,
    "rememberMeDurationDays": 0,
    "renewRememberMeKey": true,
    "serverContextPath": "string",
    "serverPort": 0,
    "taskPoolSize": 0,
    "thumbnailSize": "DEFAULT"
  }'
```

`PATCH /api/v1/settings`

You can omit fields you don't want to update

Required role: **ADMIN**

> Body parameter

```json
{
  "deleteEmptyCollections": true,
  "deleteEmptyReadLists": true,
  "kepubifyPath": "string",
  "koboPort": 0,
  "koboProxy": true,
  "nextUiAsDefault": true,
  "rememberMeDurationDays": 0,
  "renewRememberMeKey": true,
  "serverContextPath": "string",
  "serverPort": 0,
  "taskPoolSize": 0,
  "thumbnailSize": "DEFAULT"
}
```

<h3 id="update-server-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SettingsUpdateDto](#schemasettingsupdatedto)|true|none|
|» deleteEmptyCollections|body|boolean|false|none|
|» deleteEmptyReadLists|body|boolean|false|none|
|» kepubifyPath|body|string|false|**Deprecated.** Will be removed in a future version|
|» koboPort|body|integer(int32)|false|none|
|» koboProxy|body|boolean|false|none|
|» nextUiAsDefault|body|boolean|false|none|
|» rememberMeDurationDays|body|integer(int64)|false|none|
|» renewRememberMeKey|body|boolean|false|none|
|» serverContextPath|body|string|false|none|
|» serverPort|body|integer(int32)|false|none|
|» taskPoolSize|body|integer(int32)|false|none|
|» thumbnailSize|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» thumbnailSize|DEFAULT|
|» thumbnailSize|MEDIUM|
|» thumbnailSize|LARGE|
|» thumbnailSize|XLARGE|

<h3 id="update-server-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

<h1 id="komga-api-releases">Releases</h1>

Retrieve releases information

## List releases

<a id="opIdgetReleases"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/releases \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/releases`

Required role: **ADMIN**

> Example responses

> 200 Response

```json
[
  {
    "description": "string",
    "latest": true,
    "preRelease": true,
    "releaseDate": "1970-01-01T00:00:00Z",
    "url": "string",
    "version": "string"
  }
]
```

<h3 id="list-releases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<h3 id="list-releases-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ReleaseDto](#schemareleasedto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

<h1 id="komga-api-announcements">Announcements</h1>

Retrieve announcements from the Komga website

## Retrieve announcements

<a id="opIdgetAnnouncements"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/announcements \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/announcements`

Required role: **ADMIN**

> Example responses

> 200 Response

```json
{
  "version": "https://jsonfeed.org/version/1",
  "title": "Announcements",
  "home_page_url": "https://komga.org/blog",
  "description": "Latest Komga announcements",
  "items": [
    {
      "id": "https://komga.org/blog/ebook-drop2",
      "url": "https://komga.org/blog/ebook-drop2",
      "title": "eBook drop 2",
      "summary": "Version 1.9.0 contains the second feature drop for Ebooks support.",
      "content_html": "<p>A longer text…</p>",
      "date_modified": "2023-12-15T00:00:00Z",
      "author": {
        "name": "gotson",
        "url": "https://github.com/gotson"
      },
      "tags": [
        "upgrade",
        "komga"
      ],
      "_komga": {
        "read": false
      }
    },
    {
      "id": "https://komga.org/blog/ebook-support",
      "url": "https://komga.org/blog/ebook-support",
      "title": "eBook support",
      "summary": "Version 1.8.0 is bringing a long awaited feature: proper eBook support!",
      "content_html": "<p>A longer text…</p>",
      "date_modified": "2023-11-29T00:00:00Z",
      "author": {
        "name": "gotson",
        "url": "https://github.com/gotson"
      },
      "tags": [
        "upgrade",
        "komga"
      ],
      "_komga": {
        "read": true
      }
    }
  ]
}
```

<h3 id="retrieve-announcements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[JsonFeedDto](#schemajsonfeeddto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Mark announcements as read

<a id="opIdmarkAnnouncementsRead"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/announcements \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '[
    "string"
  ]'
```

`PUT /api/v1/announcements`

Required role: **ADMIN**

> Body parameter

```json
[
  "string"
]
```

<h3 id="mark-announcements-as-read-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[string]|true|none|

<h3 id="mark-announcements-as-read-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

<h1 id="komga-api-management">Management</h1>

Manage server

## Get server information

<a id="opIdgetActuatorInfo"></a>

> Code samples

```bash
curl http://localhost:25600/actuator/info \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /actuator/info`

Required role: **ADMIN**

> Example responses

> 200 Response

```json
"{\n  \"git\": {\n    \"branch\": \"master\",\n    \"commit\": {\n      \"id\": \"9be980d\",\n      \"time\": \"2025-03-12T03:40:38Z\"\n    }\n  },\n  \"build\": {\n    \"artifact\": \"komga\",\n    \"name\": \"komga\",\n    \"version\": \"1.21.2\",\n    \"group\": \"komga\"\n  },\n  \"java\": {\n    \"version\": \"23.0.2\",\n    \"vendor\": {\n      \"name\": \"Eclipse Adoptium\",\n      \"version\": \"Temurin-23.0.2+7\"\n    },\n    \"runtime\": {\n      \"name\": \"OpenJDK Runtime Environment\",\n      \"version\": \"23.0.2+7\"\n    },\n    \"jvm\": {\n      \"name\": \"OpenJDK 64-Bit Server VM\",\n      \"vendor\": \"Eclipse Adoptium\",\n      \"version\": \"23.0.2+7\"\n    }\n  },\n  \"os\": {\n    \"name\": \"Linux\",\n    \"version\": \"6.8.0-57-generic\",\n    \"arch\": \"amd64\"\n  }\n}"
```

<h3 id="get-server-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

<h1 id="komga-api-mihon">Mihon</h1>

## Get readlist read progress (Mihon)

<a id="opIdgetMihonReadProgressByReadListId"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/readlists/string/read-progress/tachiyomi \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/readlists/{id}/read-progress/tachiyomi`

Mihon specific, due to how read progress is handled in Mihon.

<h3 id="get-readlist-read-progress-mihon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "booksCount": 0,
  "booksInProgressCount": 0,
  "booksReadCount": 0,
  "booksUnreadCount": 0,
  "lastReadContinuousIndex": 0
}
```

<h3 id="get-readlist-read-progress-mihon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TachiyomiReadProgressDto](#schematachiyomireadprogressdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Update readlist read progress (Mihon)

<a id="opIdupdateMihonReadProgressByReadListId"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/readlists/string/read-progress/tachiyomi \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "lastBookRead": 0
  }'
```

`PUT /api/v1/readlists/{id}/read-progress/tachiyomi`

Mihon specific, due to how read progress is handled in Mihon.

> Body parameter

```json
{
  "lastBookRead": 0
}
```

<h3 id="update-readlist-read-progress-mihon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[TachiyomiReadProgressUpdateDto](#schematachiyomireadprogressupdatedto)|true|none|
|» lastBookRead|body|integer(int32)|true|none|

<h3 id="update-readlist-read-progress-mihon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Get series read progress (Mihon)

<a id="opIdgetMihonReadProgressBySeriesId"></a>

> Code samples

```bash
curl http://localhost:25600/api/v2/series/string/read-progress/tachiyomi \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v2/series/{seriesId}/read-progress/tachiyomi`

Mihon specific, due to how read progress is handled in Mihon.

<h3 id="get-series-read-progress-mihon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|seriesId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "booksCount": 0,
  "booksInProgressCount": 0,
  "booksReadCount": 0,
  "booksUnreadCount": 0,
  "lastReadContinuousNumberSort": 0,
  "maxNumberSort": 0
}
```

<h3 id="get-series-read-progress-mihon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TachiyomiReadProgressV2Dto](#schematachiyomireadprogressv2dto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Update series read progress (Mihon)

<a id="opIdupdateMihonReadProgressBySeriesId"></a>

> Code samples

```bash
curl http://localhost:25600/api/v2/series/string/read-progress/tachiyomi \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "lastBookNumberSortRead": 0
  }'
```

`PUT /api/v2/series/{seriesId}/read-progress/tachiyomi`

Mihon specific, due to how read progress is handled in Mihon.

> Body parameter

```json
{
  "lastBookNumberSortRead": 0
}
```

<h3 id="update-series-read-progress-mihon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|seriesId|path|string|true|none|
|body|body|[TachiyomiReadProgressUpdateV2Dto](#schematachiyomireadprogressupdatev2dto)|true|none|
|» lastBookNumberSortRead|body|number(float)|true|none|

<h3 id="update-series-read-progress-mihon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

<h1 id="komga-api-comicrack">ComicRack</h1>

## Match ComicRack list

<a id="opIdmatchComicRackList"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/readlists/match/comicrack \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -F 'file=@/path/to/file'
```

`POST /api/v1/readlists/match/comicrack`

Required role: **ADMIN**

> Body parameter

```yaml
file: string
```

<h3 id="match-comicrack-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» file|body|string(binary)|true|none|

> Example responses

> 200 Response

```json
{
  "errorCode": "string",
  "readListMatch": {
    "errorCode": "string",
    "name": "string"
  },
  "requests": [
    {
      "matches": [
        {
          "books": [
            {
              "bookId": "string",
              "number": "string",
              "title": "string"
            }
          ],
          "series": {
            "releaseDate": "1970-01-01",
            "seriesId": "string",
            "title": "string"
          }
        }
      ],
      "request": {
        "number": "string",
        "series": [
          "string"
        ]
      }
    }
  ]
}
```

<h3 id="match-comicrack-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ReadListRequestMatchDto](#schemareadlistrequestmatchdto)|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

<h1 id="komga-api-client-settings">Client settings</h1>

Store and retrieve global and per-user settings. Those settings are not used by Komga itself, but can be stored for convenience by client applications.

## Delete global settings

<a id="opIddeleteGlobalSettings"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/client-settings/global \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '[
    "application.key1",
    "application.key2"
  ]'
```

`DELETE /api/v1/client-settings/global`

Setting key should be a valid lowercase namespace string like 'application.domain.key'

Required role: **ADMIN**

> Body parameter

```json
[
  "application.key1",
  "application.key2"
]
```

<h3 id="delete-global-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[string]|true|none|

<h3 id="delete-global-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Save global settings

<a id="opIdsaveGlobalSetting"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/client-settings/global \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "application.key1": {
      "value": "a string value",
      "allowUnauthorized": true
    },
    "application.key2": {
      "value": "{\"json\":\"object\"}",
      "allowUnauthorized": false
    }
  }'
```

`PATCH /api/v1/client-settings/global`

Setting key should be a valid lowercase namespace string like 'application.domain.key'

Required role: **ADMIN**

> Body parameter

```json
{
  "application.key1": {
    "value": "a string value",
    "allowUnauthorized": true
  },
  "application.key2": {
    "value": "{\"json\":\"object\"}",
    "allowUnauthorized": false
  }
}
```

<h3 id="save-global-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» **additionalProperties**|body|[ClientSettingGlobalUpdateDto](#schemaclientsettingglobalupdatedto)|false|none|

<h3 id="save-global-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Retrieve global client settings

<a id="opIdgetGlobalSettings"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/client-settings/global/list \
  -H 'Accept: application/json'
```

`GET /api/v1/client-settings/global/list`

For unauthenticated users, only settings with 'allowUnauthorized=true' will be returned.

> Example responses

> 200 Response

```json
{
  "property1": {
    "allowUnauthorized": true,
    "value": "string"
  },
  "property2": {
    "allowUnauthorized": true,
    "value": "string"
  }
}
```

<h3 id="retrieve-global-client-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<h3 id="retrieve-global-client-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ClientSettingDto](#schemaclientsettingdto)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Delete user settings

<a id="opIddeleteUserSettings"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/client-settings/user \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '[
    "application.key1",
    "application.key2"
  ]'
```

`DELETE /api/v1/client-settings/user`

Setting key should be a valid lowercase namespace string like 'application.domain.key'

> Body parameter

```json
[
  "application.key1",
  "application.key2"
]
```

<h3 id="delete-user-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[string]|true|none|

<h3 id="delete-user-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Save user settings

<a id="opIdsaveUserSetting"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/client-settings/user \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "application.key1": {
      "value": "a string value"
    },
    "application.key2": {
      "value": "{\"json\":\"object\"}"
    }
  }'
```

`PATCH /api/v1/client-settings/user`

Setting key should be a valid lowercase namespace string like 'application.domain.key'

> Body parameter

```json
{
  "application.key1": {
    "value": "a string value"
  },
  "application.key2": {
    "value": "{\"json\":\"object\"}"
  }
}
```

<h3 id="save-user-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» **additionalProperties**|body|[ClientSettingUserUpdateDto](#schemaclientsettinguserupdatedto)|false|none|

<h3 id="save-user-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

## Retrieve user client settings

<a id="opIdgetUserSettings"></a>

> Code samples

```bash
curl http://localhost:25600/api/v1/client-settings/user/list \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /api/v1/client-settings/user/list`

> Example responses

> 200 Response

```json
{
  "property1": {
    "allowUnauthorized": true,
    "value": "string"
  },
  "property2": {
    "allowUnauthorized": true,
    "value": "string"
  }
}
```

<h3 id="retrieve-user-client-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ValidationErrorResponse](#schemavalidationerrorresponse)|

<h3 id="retrieve-user-client-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ClientSettingDto](#schemaclientsettingdto)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, apiKey
</aside>

# Schemas

<h2 id="tocS_AgeRestrictionDto">AgeRestrictionDto</h2>
<!-- backwards compatibility -->
<a id="schemaagerestrictiondto"></a>
<a id="schema_AgeRestrictionDto"></a>
<a id="tocSagerestrictiondto"></a>
<a id="tocsagerestrictiondto"></a>

```json
{
  "age": 0,
  "restriction": "ALLOW_ONLY"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|age|integer(int32)|true|none|none|
|restriction|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|restriction|ALLOW_ONLY|
|restriction|EXCLUDE|

<h2 id="tocS_AgeRestrictionUpdateDto">AgeRestrictionUpdateDto</h2>
<!-- backwards compatibility -->
<a id="schemaagerestrictionupdatedto"></a>
<a id="schema_AgeRestrictionUpdateDto"></a>
<a id="tocSagerestrictionupdatedto"></a>
<a id="tocsagerestrictionupdatedto"></a>

```json
{
  "age": 0,
  "restriction": "ALLOW_ONLY"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|age|integer(int32)|true|none|none|
|restriction|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|restriction|ALLOW_ONLY|
|restriction|EXCLUDE|
|restriction|NONE|

<h2 id="tocS_AlternateTitleDto">AlternateTitleDto</h2>
<!-- backwards compatibility -->
<a id="schemaalternatetitledto"></a>
<a id="schema_AlternateTitleDto"></a>
<a id="tocSalternatetitledto"></a>
<a id="tocsalternatetitledto"></a>

```json
{
  "label": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|none|
|title|string|true|none|none|

<h2 id="tocS_AlternateTitleUpdateDto">AlternateTitleUpdateDto</h2>
<!-- backwards compatibility -->
<a id="schemaalternatetitleupdatedto"></a>
<a id="schema_AlternateTitleUpdateDto"></a>
<a id="tocSalternatetitleupdatedto"></a>
<a id="tocsalternatetitleupdatedto"></a>

```json
{
  "label": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|none|
|title|string|true|none|none|

<h2 id="tocS_ApiKeyDto">ApiKeyDto</h2>
<!-- backwards compatibility -->
<a id="schemaapikeydto"></a>
<a id="schema_ApiKeyDto"></a>
<a id="tocSapikeydto"></a>
<a id="tocsapikeydto"></a>

```json
{
  "comment": "string",
  "createdDate": "1970-01-01T00:00:00Z",
  "id": "string",
  "key": "string",
  "lastModifiedDate": "1970-01-01T00:00:00Z",
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string|true|none|none|
|createdDate|string(date-time)|true|none|none|
|id|string|true|none|none|
|key|string|true|none|none|
|lastModifiedDate|string(date-time)|true|none|none|
|userId|string|true|none|none|

<h2 id="tocS_ApiKeyRequestDto">ApiKeyRequestDto</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyrequestdto"></a>
<a id="schema_ApiKeyRequestDto"></a>
<a id="tocSapikeyrequestdto"></a>
<a id="tocsapikeyrequestdto"></a>

```json
{
  "comment": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string|true|none|none|

<h2 id="tocS_AuthenticationActivityDto">AuthenticationActivityDto</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationactivitydto"></a>
<a id="schema_AuthenticationActivityDto"></a>
<a id="tocSauthenticationactivitydto"></a>
<a id="tocsauthenticationactivitydto"></a>

```json
{
  "apiKeyComment": "string",
  "apiKeyId": "string",
  "dateTime": "1970-01-01T00:00:00Z",
  "email": "string",
  "error": "string",
  "ip": "string",
  "source": "string",
  "success": true,
  "userAgent": "string",
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKeyComment|string|false|none|none|
|apiKeyId|string|false|none|none|
|dateTime|string(date-time)|true|none|none|
|email|string|false|none|none|
|error|string|false|none|none|
|ip|string|false|none|none|
|source|string|false|none|none|
|success|boolean|true|none|none|
|userAgent|string|false|none|none|
|userId|string|false|none|none|

<h2 id="tocS_AuthorDto">AuthorDto</h2>
<!-- backwards compatibility -->
<a id="schemaauthordto"></a>
<a id="schema_AuthorDto"></a>
<a id="tocSauthordto"></a>
<a id="tocsauthordto"></a>

```json
{
  "name": "string",
  "role": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|role|string|true|none|none|

<h2 id="tocS_AuthorUpdateDto">AuthorUpdateDto</h2>
<!-- backwards compatibility -->
<a id="schemaauthorupdatedto"></a>
<a id="schema_AuthorUpdateDto"></a>
<a id="tocSauthorupdatedto"></a>
<a id="tocsauthorupdatedto"></a>

```json
{
  "name": "string",
  "role": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|role|string|true|none|none|

<h2 id="tocS_BookDto">BookDto</h2>
<!-- backwards compatibility -->
<a id="schemabookdto"></a>
<a id="schema_BookDto"></a>
<a id="tocSbookdto"></a>
<a id="tocsbookdto"></a>

```json
{
  "created": "1970-01-01T00:00:00Z",
  "deleted": true,
  "fileHash": "string",
  "fileLastModified": "1970-01-01T00:00:00Z",
  "id": "string",
  "lastModified": "1970-01-01T00:00:00Z",
  "libraryId": "string",
  "media": {
    "comment": "string",
    "epubDivinaCompatible": true,
    "epubIsKepub": true,
    "mediaProfile": "string",
    "mediaType": "string",
    "pagesCount": 0,
    "status": "string"
  },
  "metadata": {
    "authors": [
      {
        "name": "string",
        "role": "string"
      }
    ],
    "authorsLock": true,
    "created": "1970-01-01T00:00:00Z",
    "isbn": "string",
    "isbnLock": true,
    "lastModified": "1970-01-01T00:00:00Z",
    "links": [
      {
        "label": "string",
        "url": "string"
      }
    ],
    "linksLock": true,
    "notableEntities": [
      {
        "kind": "string",
        "name": "string"
      }
    ],
    "notableEntitiesLock": true,
    "number": "string",
    "numberLock": true,
    "numberSort": 0,
    "numberSortLock": true,
    "releaseDate": "1970-01-01",
    "releaseDateLock": true,
    "summary": "string",
    "summaryLock": true,
    "tags": [
      "string"
    ],
    "tagsLock": true,
    "title": "string",
    "titleLock": true
  },
  "name": "string",
  "number": 0,
  "oneshot": true,
  "readProgress": {
    "completed": true,
    "created": "1970-01-01T00:00:00Z",
    "deviceId": "string",
    "deviceName": "string",
    "lastModified": "1970-01-01T00:00:00Z",
    "page": 0,
    "readDate": "1970-01-01T00:00:00Z"
  },
  "seriesId": "string",
  "seriesTitle": "string",
  "size": "string",
  "sizeBytes": 0,
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|true|none|none|
|deleted|boolean|true|none|none|
|fileHash|string|true|none|none|
|fileLastModified|string(date-time)|true|none|none|
|id|string|true|none|none|
|lastModified|string(date-time)|true|none|none|
|libraryId|string|true|none|none|
|media|[MediaDto](#schemamediadto)|true|none|none|
|metadata|[BookMetadataDto](#schemabookmetadatadto)|true|none|none|
|name|string|true|none|none|
|number|integer(int32)|true|none|none|
|oneshot|boolean|true|none|none|
|readProgress|[ReadProgressDto](#schemareadprogressdto)|false|none|none|
|seriesId|string|true|none|none|
|seriesTitle|string|true|none|none|
|size|string|true|none|none|
|sizeBytes|integer(int64)|true|none|none|
|url|string|true|none|none|

<h2 id="tocS_BookImportBatchDto">BookImportBatchDto</h2>
<!-- backwards compatibility -->
<a id="schemabookimportbatchdto"></a>
<a id="schema_BookImportBatchDto"></a>
<a id="tocSbookimportbatchdto"></a>
<a id="tocsbookimportbatchdto"></a>

```json
{
  "books": [
    {
      "destinationName": "string",
      "seriesId": "string",
      "sourceFile": "string",
      "upgradeBookId": "string"
    }
  ],
  "copyMode": "MOVE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|books|[[BookImportDto](#schemabookimportdto)]|true|none|none|
|copyMode|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|copyMode|MOVE|
|copyMode|COPY|
|copyMode|HARDLINK|

<h2 id="tocS_BookImportDto">BookImportDto</h2>
<!-- backwards compatibility -->
<a id="schemabookimportdto"></a>
<a id="schema_BookImportDto"></a>
<a id="tocSbookimportdto"></a>
<a id="tocsbookimportdto"></a>

```json
{
  "destinationName": "string",
  "seriesId": "string",
  "sourceFile": "string",
  "upgradeBookId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationName|string|false|none|none|
|seriesId|string|true|none|none|
|sourceFile|string|true|none|none|
|upgradeBookId|string|false|none|none|

<h2 id="tocS_BookMetadataAggregationDto">BookMetadataAggregationDto</h2>
<!-- backwards compatibility -->
<a id="schemabookmetadataaggregationdto"></a>
<a id="schema_BookMetadataAggregationDto"></a>
<a id="tocSbookmetadataaggregationdto"></a>
<a id="tocsbookmetadataaggregationdto"></a>

```json
{
  "authors": [
    {
      "name": "string",
      "role": "string"
    }
  ],
  "created": "1970-01-01T00:00:00Z",
  "lastModified": "1970-01-01T00:00:00Z",
  "notableEntities": [
    {
      "kind": "string",
      "name": "string"
    }
  ],
  "releaseDate": "1970-01-01",
  "summary": "string",
  "summaryNumber": "string",
  "tags": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authors|[[AuthorDto](#schemaauthordto)]|true|none|none|
|created|string(date-time)|true|none|none|
|lastModified|string(date-time)|true|none|none|
|notableEntities|[[NotableEntityDto](#schemanotableentitydto)]|true|none|none|
|releaseDate|string(date)|false|none|none|
|summary|string|true|none|none|
|summaryNumber|string|true|none|none|
|tags|[string]|true|none|none|

<h2 id="tocS_BookMetadataDto">BookMetadataDto</h2>
<!-- backwards compatibility -->
<a id="schemabookmetadatadto"></a>
<a id="schema_BookMetadataDto"></a>
<a id="tocSbookmetadatadto"></a>
<a id="tocsbookmetadatadto"></a>

```json
{
  "authors": [
    {
      "name": "string",
      "role": "string"
    }
  ],
  "authorsLock": true,
  "created": "1970-01-01T00:00:00Z",
  "isbn": "string",
  "isbnLock": true,
  "lastModified": "1970-01-01T00:00:00Z",
  "links": [
    {
      "label": "string",
      "url": "string"
    }
  ],
  "linksLock": true,
  "notableEntities": [
    {
      "kind": "string",
      "name": "string"
    }
  ],
  "notableEntitiesLock": true,
  "number": "string",
  "numberLock": true,
  "numberSort": 0,
  "numberSortLock": true,
  "releaseDate": "1970-01-01",
  "releaseDateLock": true,
  "summary": "string",
  "summaryLock": true,
  "tags": [
    "string"
  ],
  "tagsLock": true,
  "title": "string",
  "titleLock": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authors|[[AuthorDto](#schemaauthordto)]|true|none|none|
|authorsLock|boolean|true|none|none|
|created|string(date-time)|true|none|none|
|isbn|string|true|none|none|
|isbnLock|boolean|true|none|none|
|lastModified|string(date-time)|true|none|none|
|links|[[WebLinkDto](#schemaweblinkdto)]|true|none|none|
|linksLock|boolean|true|none|none|
|notableEntities|[[NotableEntityDto](#schemanotableentitydto)]|true|none|none|
|notableEntitiesLock|boolean|true|none|none|
|number|string|true|none|none|
|numberLock|boolean|true|none|none|
|numberSort|number(float)|true|none|none|
|numberSortLock|boolean|true|none|none|
|releaseDate|string(date)|false|none|none|
|releaseDateLock|boolean|true|none|none|
|summary|string|true|none|none|
|summaryLock|boolean|true|none|none|
|tags|[string]|true|none|none|
|tagsLock|boolean|true|none|none|
|title|string|true|none|none|
|titleLock|boolean|true|none|none|

<h2 id="tocS_BookMetadataUpdateDto">BookMetadataUpdateDto</h2>
<!-- backwards compatibility -->
<a id="schemabookmetadataupdatedto"></a>
<a id="schema_BookMetadataUpdateDto"></a>
<a id="tocSbookmetadataupdatedto"></a>
<a id="tocsbookmetadataupdatedto"></a>

```json
{
  "authors": [
    {
      "name": "string",
      "role": "string"
    }
  ],
  "authorsLock": true,
  "isbn": "string",
  "isbnLock": true,
  "links": [
    {
      "label": "string",
      "url": "string"
    }
  ],
  "linksLock": true,
  "notableEntities": [
    {
      "kind": "string",
      "name": "string"
    }
  ],
  "notableEntitiesLock": true,
  "number": "string",
  "numberLock": true,
  "numberSort": 0,
  "numberSortLock": true,
  "releaseDate": "1970-01-01",
  "releaseDateLock": true,
  "summary": "string",
  "summaryLock": true,
  "tags": [
    "string"
  ],
  "tagsLock": true,
  "title": "string",
  "titleLock": true
}
```

Metadata fields to update. Set a field to null to unset the metadata. You can omit fields you don't want to update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authors|[[AuthorUpdateDto](#schemaauthorupdatedto)]|false|none|none|
|authorsLock|boolean|false|none|none|
|isbn|string|false|none|none|
|isbnLock|boolean|false|none|none|
|links|[[WebLinkUpdateDto](#schemaweblinkupdatedto)]|false|none|none|
|linksLock|boolean|false|none|none|
|notableEntities|[[NotableEntityUpdateDto](#schemanotableentityupdatedto)]|false|none|none|
|notableEntitiesLock|boolean|false|none|none|
|number|string|false|none|none|
|numberLock|boolean|false|none|none|
|numberSort|number(float)|false|none|none|
|numberSortLock|boolean|false|none|none|
|releaseDate|string(date)|false|none|none|
|releaseDateLock|boolean|false|none|none|
|summary|string|false|none|none|
|summaryLock|boolean|false|none|none|
|tags|[string]|false|none|none|
|tagsLock|boolean|false|none|none|
|title|string|false|none|none|
|titleLock|boolean|false|none|none|

<h2 id="tocS_BookSearch">BookSearch</h2>
<!-- backwards compatibility -->
<a id="schemabooksearch"></a>
<a id="schema_BookSearch"></a>
<a id="tocSbooksearch"></a>
<a id="tocsbooksearch"></a>

```json
{
  "condition": {},
  "fullTextSearch": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|condition|[SearchConditionBook](#schemasearchconditionbook)|false|none|none|
|fullTextSearch|string|false|none|none|

<h2 id="tocS_ClaimStatus">ClaimStatus</h2>
<!-- backwards compatibility -->
<a id="schemaclaimstatus"></a>
<a id="schema_ClaimStatus"></a>
<a id="tocSclaimstatus"></a>
<a id="tocsclaimstatus"></a>

```json
{
  "isClaimed": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isClaimed|boolean|true|none|none|

<h2 id="tocS_ClientSettingDto">ClientSettingDto</h2>
<!-- backwards compatibility -->
<a id="schemaclientsettingdto"></a>
<a id="schema_ClientSettingDto"></a>
<a id="tocSclientsettingdto"></a>
<a id="tocsclientsettingdto"></a>

```json
{
  "allowUnauthorized": true,
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowUnauthorized|boolean|false|none|none|
|value|string|true|none|none|

<h2 id="tocS_ClientSettingGlobalUpdateDto">ClientSettingGlobalUpdateDto</h2>
<!-- backwards compatibility -->
<a id="schemaclientsettingglobalupdatedto"></a>
<a id="schema_ClientSettingGlobalUpdateDto"></a>
<a id="tocSclientsettingglobalupdatedto"></a>
<a id="tocsclientsettingglobalupdatedto"></a>

```json
{
  "allowUnauthorized": true,
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowUnauthorized|boolean|true|none|none|
|value|string|true|none|none|

<h2 id="tocS_ClientSettingUserUpdateDto">ClientSettingUserUpdateDto</h2>
<!-- backwards compatibility -->
<a id="schemaclientsettinguserupdatedto"></a>
<a id="schema_ClientSettingUserUpdateDto"></a>
<a id="tocSclientsettinguserupdatedto"></a>
<a id="tocsclientsettinguserupdatedto"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|true|none|none|

<h2 id="tocS_CollectionCreationDto">CollectionCreationDto</h2>
<!-- backwards compatibility -->
<a id="schemacollectioncreationdto"></a>
<a id="schema_CollectionCreationDto"></a>
<a id="tocScollectioncreationdto"></a>
<a id="tocscollectioncreationdto"></a>

```json
{
  "name": "string",
  "ordered": true,
  "seriesIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|ordered|boolean|true|none|none|
|seriesIds|[string]|true|none|none|

<h2 id="tocS_CollectionDto">CollectionDto</h2>
<!-- backwards compatibility -->
<a id="schemacollectiondto"></a>
<a id="schema_CollectionDto"></a>
<a id="tocScollectiondto"></a>
<a id="tocscollectiondto"></a>

```json
{
  "createdDate": "1970-01-01T00:00:00Z",
  "filtered": true,
  "id": "string",
  "lastModifiedDate": "1970-01-01T00:00:00Z",
  "name": "string",
  "ordered": true,
  "seriesIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdDate|string(date-time)|true|none|none|
|filtered|boolean|true|none|none|
|id|string|true|none|none|
|lastModifiedDate|string(date-time)|true|none|none|
|name|string|true|none|none|
|ordered|boolean|true|none|none|
|seriesIds|[string]|true|none|none|

<h2 id="tocS_CollectionUpdateDto">CollectionUpdateDto</h2>
<!-- backwards compatibility -->
<a id="schemacollectionupdatedto"></a>
<a id="schema_CollectionUpdateDto"></a>
<a id="tocScollectionupdatedto"></a>
<a id="tocscollectionupdatedto"></a>

```json
{
  "name": "string",
  "ordered": true,
  "seriesIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|ordered|boolean|false|none|none|
|seriesIds|[string]|false|none|none|

<h2 id="tocS_DirectoryListingDto">DirectoryListingDto</h2>
<!-- backwards compatibility -->
<a id="schemadirectorylistingdto"></a>
<a id="schema_DirectoryListingDto"></a>
<a id="tocSdirectorylistingdto"></a>
<a id="tocsdirectorylistingdto"></a>

```json
{
  "directories": [
    {
      "name": "string",
      "path": "string",
      "type": "string"
    }
  ],
  "files": [
    {
      "name": "string",
      "path": "string",
      "type": "string"
    }
  ],
  "parent": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directories|[[PathDto](#schemapathdto)]|true|none|none|
|files|[[PathDto](#schemapathdto)]|true|none|none|
|parent|string|false|none|none|

<h2 id="tocS_DirectoryRequestDto">DirectoryRequestDto</h2>
<!-- backwards compatibility -->
<a id="schemadirectoryrequestdto"></a>
<a id="schema_DirectoryRequestDto"></a>
<a id="tocSdirectoryrequestdto"></a>
<a id="tocsdirectoryrequestdto"></a>

```json
{
  "path": "string",
  "showFiles": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|true|none|none|
|showFiles|boolean|true|none|none|

<h2 id="tocS_GroupCountDto">GroupCountDto</h2>
<!-- backwards compatibility -->
<a id="schemagroupcountdto"></a>
<a id="schema_GroupCountDto"></a>
<a id="tocSgroupcountdto"></a>
<a id="tocsgroupcountdto"></a>

```json
{
  "count": 0,
  "group": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|true|none|none|
|group|string|true|none|none|

<h2 id="tocS_HistoricalEventDto">HistoricalEventDto</h2>
<!-- backwards compatibility -->
<a id="schemahistoricaleventdto"></a>
<a id="schema_HistoricalEventDto"></a>
<a id="tocShistoricaleventdto"></a>
<a id="tocshistoricaleventdto"></a>

```json
{
  "bookId": "string",
  "id": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "seriesId": "string",
  "timestamp": "1970-01-01T00:00:00Z",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookId|string|false|none|none|
|id|string|true|none|none|
|properties|object|true|none|none|
|seriesId|string|false|none|none|
|timestamp|string(date-time)|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_ItemAuthorDto">ItemAuthorDto</h2>
<!-- backwards compatibility -->
<a id="schemaitemauthordto"></a>
<a id="schema_ItemAuthorDto"></a>
<a id="tocSitemauthordto"></a>
<a id="tocsitemauthordto"></a>

```json
{
  "name": "gotson",
  "url": "https://github.com/gotson"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Author's name|
|url|string|false|none|URL of a site owned by the author|

<h2 id="tocS_ItemDto">ItemDto</h2>
<!-- backwards compatibility -->
<a id="schemaitemdto"></a>
<a id="schema_ItemDto"></a>
<a id="tocSitemdto"></a>
<a id="tocsitemdto"></a>

```json
{
  "_komga": {
    "read": false
  },
  "author": {
    "name": "gotson",
    "url": "https://github.com/gotson"
  },
  "content_html": "<p>A longer text…</p>",
  "date_modified": "2023-12-15T00:00:00Z",
  "id": "https://komga.org/blog/ebook-drop2",
  "summary": "Version 1.9.0 contains the second feature drop for Ebooks support.",
  "tags": "upgrade",
  "title": "eBook drop 2",
  "url": "https://komga.org/blog/ebook-drop2"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_komga|[KomgaExtensionDto](#schemakomgaextensiondto)|false|none|Additional fields for the item|
|author|[ItemAuthorDto](#schemaitemauthordto)|false|none|Author of the item|
|content_html|string|false|none|HTML of the item|
|date_modified|string(date-time)|false|none|Modification date in RFC 3339 format|
|id|string|true|none|Unique for that item for that feed over time|
|summary|string|false|none|A plain text sentence or two describing the item|
|tags|[string]|true|none|Tags describing the item|
|title|string|false|none|Plain text title|
|url|string|false|none|URL of the resource described by the item|

<h2 id="tocS_JsonFeedDto">JsonFeedDto</h2>
<!-- backwards compatibility -->
<a id="schemajsonfeeddto"></a>
<a id="schema_JsonFeedDto"></a>
<a id="tocSjsonfeeddto"></a>
<a id="tocsjsonfeeddto"></a>

```json
{
  "version": "https://jsonfeed.org/version/1",
  "title": "Announcements",
  "home_page_url": "https://komga.org/blog",
  "description": "Latest Komga announcements",
  "items": [
    {
      "id": "https://komga.org/blog/ebook-drop2",
      "url": "https://komga.org/blog/ebook-drop2",
      "title": "eBook drop 2",
      "summary": "Version 1.9.0 contains the second feature drop for Ebooks support.",
      "content_html": "<p>A longer text…</p>",
      "date_modified": "2023-12-15T00:00:00Z",
      "author": {
        "name": "gotson",
        "url": "https://github.com/gotson"
      },
      "tags": [
        "upgrade",
        "komga"
      ],
      "_komga": {
        "read": false
      }
    },
    {
      "id": "https://komga.org/blog/ebook-support",
      "url": "https://komga.org/blog/ebook-support",
      "title": "eBook support",
      "summary": "Version 1.8.0 is bringing a long awaited feature: proper eBook support!",
      "content_html": "<p>A longer text…</p>",
      "date_modified": "2023-11-29T00:00:00Z",
      "author": {
        "name": "gotson",
        "url": "https://github.com/gotson"
      },
      "tags": [
        "upgrade",
        "komga"
      ],
      "_komga": {
        "read": true
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Provides more detail on what the feed is about|
|home_page_url|string|false|none|URL of the resource that the feed describes|
|items|[[ItemDto](#schemaitemdto)]|true|none|none|
|title|string|true|none|Name of the feed|
|version|string|true|none|URL of the version of the format the feed uses|

<h2 id="tocS_KomgaExtensionDto">KomgaExtensionDto</h2>
<!-- backwards compatibility -->
<a id="schemakomgaextensiondto"></a>
<a id="schema_KomgaExtensionDto"></a>
<a id="tocSkomgaextensiondto"></a>
<a id="tocskomgaextensiondto"></a>

```json
{
  "read": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|read|boolean|true|none|Whether the current item has been marked read by the current user|

<h2 id="tocS_LibraryCreationDto">LibraryCreationDto</h2>
<!-- backwards compatibility -->
<a id="schemalibrarycreationdto"></a>
<a id="schema_LibraryCreationDto"></a>
<a id="tocSlibrarycreationdto"></a>
<a id="tocslibrarycreationdto"></a>

```json
{
  "analyzeDimensions": true,
  "convertToCbz": true,
  "emptyTrashAfterScan": true,
  "hashFiles": true,
  "hashKoreader": true,
  "hashPages": true,
  "importBarcodeIsbn": true,
  "importComicInfoBook": true,
  "importComicInfoCollection": true,
  "importComicInfoReadList": true,
  "importComicInfoSeries": true,
  "importComicInfoSeriesAppendVolume": true,
  "importEpubBook": true,
  "importEpubSeries": true,
  "importLocalArtwork": true,
  "importMylarSeries": true,
  "name": "string",
  "oneshotsDirectory": "string",
  "repairExtensions": true,
  "root": "string",
  "scanCbx": true,
  "scanDirectoryExclusions": [
    "string"
  ],
  "scanEpub": true,
  "scanForceModifiedTime": true,
  "scanInterval": "DISABLED",
  "scanOnStartup": true,
  "scanPdf": true,
  "seriesCover": "FIRST"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analyzeDimensions|boolean|true|none|none|
|convertToCbz|boolean|true|none|none|
|emptyTrashAfterScan|boolean|true|none|none|
|hashFiles|boolean|true|none|none|
|hashKoreader|boolean|true|none|none|
|hashPages|boolean|true|none|none|
|importBarcodeIsbn|boolean|true|none|none|
|importComicInfoBook|boolean|true|none|none|
|importComicInfoCollection|boolean|true|none|none|
|importComicInfoReadList|boolean|true|none|none|
|importComicInfoSeries|boolean|true|none|none|
|importComicInfoSeriesAppendVolume|boolean|true|none|none|
|importEpubBook|boolean|true|none|none|
|importEpubSeries|boolean|true|none|none|
|importLocalArtwork|boolean|true|none|none|
|importMylarSeries|boolean|true|none|none|
|name|string|true|none|none|
|oneshotsDirectory|string|false|none|none|
|repairExtensions|boolean|true|none|none|
|root|string|true|none|none|
|scanCbx|boolean|true|none|none|
|scanDirectoryExclusions|[string]|true|none|none|
|scanEpub|boolean|true|none|none|
|scanForceModifiedTime|boolean|true|none|none|
|scanInterval|string|true|none|none|
|scanOnStartup|boolean|true|none|none|
|scanPdf|boolean|true|none|none|
|seriesCover|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|scanInterval|DISABLED|
|scanInterval|HOURLY|
|scanInterval|EVERY_6H|
|scanInterval|EVERY_12H|
|scanInterval|DAILY|
|scanInterval|WEEKLY|
|seriesCover|FIRST|
|seriesCover|FIRST_UNREAD_OR_FIRST|
|seriesCover|FIRST_UNREAD_OR_LAST|
|seriesCover|LAST|

<h2 id="tocS_LibraryDto">LibraryDto</h2>
<!-- backwards compatibility -->
<a id="schemalibrarydto"></a>
<a id="schema_LibraryDto"></a>
<a id="tocSlibrarydto"></a>
<a id="tocslibrarydto"></a>

```json
{
  "analyzeDimensions": true,
  "convertToCbz": true,
  "emptyTrashAfterScan": true,
  "hashFiles": true,
  "hashKoreader": true,
  "hashPages": true,
  "id": "string",
  "importBarcodeIsbn": true,
  "importComicInfoBook": true,
  "importComicInfoCollection": true,
  "importComicInfoReadList": true,
  "importComicInfoSeries": true,
  "importComicInfoSeriesAppendVolume": true,
  "importEpubBook": true,
  "importEpubSeries": true,
  "importLocalArtwork": true,
  "importMylarSeries": true,
  "name": "string",
  "oneshotsDirectory": "string",
  "repairExtensions": true,
  "root": "string",
  "scanCbx": true,
  "scanDirectoryExclusions": [
    "string"
  ],
  "scanEpub": true,
  "scanForceModifiedTime": true,
  "scanInterval": "DISABLED",
  "scanOnStartup": true,
  "scanPdf": true,
  "seriesCover": "FIRST",
  "unavailable": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analyzeDimensions|boolean|true|none|none|
|convertToCbz|boolean|true|none|none|
|emptyTrashAfterScan|boolean|true|none|none|
|hashFiles|boolean|true|none|none|
|hashKoreader|boolean|true|none|none|
|hashPages|boolean|true|none|none|
|id|string|true|none|none|
|importBarcodeIsbn|boolean|true|none|none|
|importComicInfoBook|boolean|true|none|none|
|importComicInfoCollection|boolean|true|none|none|
|importComicInfoReadList|boolean|true|none|none|
|importComicInfoSeries|boolean|true|none|none|
|importComicInfoSeriesAppendVolume|boolean|true|none|none|
|importEpubBook|boolean|true|none|none|
|importEpubSeries|boolean|true|none|none|
|importLocalArtwork|boolean|true|none|none|
|importMylarSeries|boolean|true|none|none|
|name|string|true|none|none|
|oneshotsDirectory|string|false|none|none|
|repairExtensions|boolean|true|none|none|
|root|string|true|none|none|
|scanCbx|boolean|true|none|none|
|scanDirectoryExclusions|[string]|true|none|none|
|scanEpub|boolean|true|none|none|
|scanForceModifiedTime|boolean|true|none|none|
|scanInterval|string|true|none|none|
|scanOnStartup|boolean|true|none|none|
|scanPdf|boolean|true|none|none|
|seriesCover|string|true|none|none|
|unavailable|boolean|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|scanInterval|DISABLED|
|scanInterval|HOURLY|
|scanInterval|EVERY_6H|
|scanInterval|EVERY_12H|
|scanInterval|DAILY|
|scanInterval|WEEKLY|
|seriesCover|FIRST|
|seriesCover|FIRST_UNREAD_OR_FIRST|
|seriesCover|FIRST_UNREAD_OR_LAST|
|seriesCover|LAST|

<h2 id="tocS_LibraryUpdateDto">LibraryUpdateDto</h2>
<!-- backwards compatibility -->
<a id="schemalibraryupdatedto"></a>
<a id="schema_LibraryUpdateDto"></a>
<a id="tocSlibraryupdatedto"></a>
<a id="tocslibraryupdatedto"></a>

```json
{
  "analyzeDimensions": true,
  "convertToCbz": true,
  "emptyTrashAfterScan": true,
  "hashFiles": true,
  "hashKoreader": true,
  "hashPages": true,
  "importBarcodeIsbn": true,
  "importComicInfoBook": true,
  "importComicInfoCollection": true,
  "importComicInfoReadList": true,
  "importComicInfoSeries": true,
  "importComicInfoSeriesAppendVolume": true,
  "importEpubBook": true,
  "importEpubSeries": true,
  "importLocalArtwork": true,
  "importMylarSeries": true,
  "name": "string",
  "oneshotsDirectory": "string",
  "repairExtensions": true,
  "root": "string",
  "scanCbx": true,
  "scanDirectoryExclusions": [
    "string"
  ],
  "scanEpub": true,
  "scanForceModifiedTime": true,
  "scanInterval": "DISABLED",
  "scanOnStartup": true,
  "scanPdf": true,
  "seriesCover": "FIRST"
}
```

Fields to update. You can omit fields you don't want to update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analyzeDimensions|boolean|false|none|none|
|convertToCbz|boolean|false|none|none|
|emptyTrashAfterScan|boolean|false|none|none|
|hashFiles|boolean|false|none|none|
|hashKoreader|boolean|false|none|none|
|hashPages|boolean|false|none|none|
|importBarcodeIsbn|boolean|false|none|none|
|importComicInfoBook|boolean|false|none|none|
|importComicInfoCollection|boolean|false|none|none|
|importComicInfoReadList|boolean|false|none|none|
|importComicInfoSeries|boolean|false|none|none|
|importComicInfoSeriesAppendVolume|boolean|false|none|none|
|importEpubBook|boolean|false|none|none|
|importEpubSeries|boolean|false|none|none|
|importLocalArtwork|boolean|false|none|none|
|importMylarSeries|boolean|false|none|none|
|name|string|false|none|none|
|oneshotsDirectory|string|false|none|none|
|repairExtensions|boolean|false|none|none|
|root|string|false|none|none|
|scanCbx|boolean|false|none|none|
|scanDirectoryExclusions|[string]|false|none|none|
|scanEpub|boolean|false|none|none|
|scanForceModifiedTime|boolean|false|none|none|
|scanInterval|string|false|none|none|
|scanOnStartup|boolean|false|none|none|
|scanPdf|boolean|false|none|none|
|seriesCover|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|scanInterval|DISABLED|
|scanInterval|HOURLY|
|scanInterval|EVERY_6H|
|scanInterval|EVERY_12H|
|scanInterval|DAILY|
|scanInterval|WEEKLY|
|seriesCover|FIRST|
|seriesCover|FIRST_UNREAD_OR_FIRST|
|seriesCover|FIRST_UNREAD_OR_LAST|
|seriesCover|LAST|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "fragments": [
    "string"
  ],
  "position": 0,
  "progression": 0,
  "totalProgression": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fragments|[string]|true|none|none|
|position|integer(int32)|false|none|none|
|progression|number(float)|false|none|none|
|totalProgression|number(float)|false|none|none|

<h2 id="tocS_MediaDto">MediaDto</h2>
<!-- backwards compatibility -->
<a id="schemamediadto"></a>
<a id="schema_MediaDto"></a>
<a id="tocSmediadto"></a>
<a id="tocsmediadto"></a>

```json
{
  "comment": "string",
  "epubDivinaCompatible": true,
  "epubIsKepub": true,
  "mediaProfile": "string",
  "mediaType": "string",
  "pagesCount": 0,
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string|true|none|none|
|epubDivinaCompatible|boolean|true|none|none|
|epubIsKepub|boolean|true|none|none|
|mediaProfile|string|true|none|none|
|mediaType|string|true|none|none|
|pagesCount|integer(int32)|true|none|none|
|status|string|true|none|none|

<h2 id="tocS_MediaType">MediaType</h2>
<!-- backwards compatibility -->
<a id="schemamediatype"></a>
<a id="schema_MediaType"></a>
<a id="tocSmediatype"></a>
<a id="tocsmediatype"></a>

```json
{
  "charset": "string",
  "concrete": true,
  "parameters": {
    "property1": "string",
    "property2": "string"
  },
  "qualityValue": 0,
  "subtype": "string",
  "subtypeSuffix": "string",
  "type": "string",
  "wildcardSubtype": true,
  "wildcardType": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|charset|string|false|none|none|
|concrete|boolean|false|none|none|
|parameters|object|false|none|none|
|qualityValue|number(double)|false|none|none|
|subtype|string|false|none|none|
|subtypeSuffix|string|false|none|none|
|type|string|false|none|none|
|wildcardSubtype|boolean|false|none|none|
|wildcardType|boolean|false|none|none|

<h2 id="tocS_NotableEntityDto">NotableEntityDto</h2>
<!-- backwards compatibility -->
<a id="schemanotableentitydto"></a>
<a id="schema_NotableEntityDto"></a>
<a id="tocSnotableentitydto"></a>
<a id="tocsnotableentitydto"></a>

```json
{
  "kind": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_NotableEntityUpdateDto">NotableEntityUpdateDto</h2>
<!-- backwards compatibility -->
<a id="schemanotableentityupdatedto"></a>
<a id="schema_NotableEntityUpdateDto"></a>
<a id="tocSnotableentityupdatedto"></a>
<a id="tocsnotableentityupdatedto"></a>

```json
{
  "kind": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_OAuth2ClientDto">OAuth2ClientDto</h2>
<!-- backwards compatibility -->
<a id="schemaoauth2clientdto"></a>
<a id="schema_OAuth2ClientDto"></a>
<a id="tocSoauth2clientdto"></a>
<a id="tocsoauth2clientdto"></a>

```json
{
  "name": "string",
  "registrationId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|registrationId|string|true|none|none|

<h2 id="tocS_PageAuthenticationActivityDto">PageAuthenticationActivityDto</h2>
<!-- backwards compatibility -->
<a id="schemapageauthenticationactivitydto"></a>
<a id="schema_PageAuthenticationActivityDto"></a>
<a id="tocSpageauthenticationactivitydto"></a>
<a id="tocspageauthenticationactivitydto"></a>

```json
{
  "content": [
    {
      "apiKeyComment": "string",
      "apiKeyId": "string",
      "dateTime": "1970-01-01T00:00:00Z",
      "email": "string",
      "error": "string",
      "ip": "string",
      "source": "string",
      "success": true,
      "userAgent": "string",
      "userId": "string"
    }
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[AuthenticationActivityDto](#schemaauthenticationactivitydto)]|false|none|none|
|empty|boolean|false|none|none|
|first|boolean|false|none|none|
|last|boolean|false|none|none|
|number|integer(int32)|false|none|none|
|numberOfElements|integer(int32)|false|none|none|
|pageable|[PageableObject](#schemapageableobject)|false|none|none|
|size|integer(int32)|false|none|none|
|sort|[SortObject](#schemasortobject)|false|none|none|
|totalElements|integer(int64)|false|none|none|
|totalPages|integer(int32)|false|none|none|

<h2 id="tocS_PageAuthorDto">PageAuthorDto</h2>
<!-- backwards compatibility -->
<a id="schemapageauthordto"></a>
<a id="schema_PageAuthorDto"></a>
<a id="tocSpageauthordto"></a>
<a id="tocspageauthordto"></a>

```json
{
  "content": [
    {
      "name": "string",
      "role": "string"
    }
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[AuthorDto](#schemaauthordto)]|false|none|none|
|empty|boolean|false|none|none|
|first|boolean|false|none|none|
|last|boolean|false|none|none|
|number|integer(int32)|false|none|none|
|numberOfElements|integer(int32)|false|none|none|
|pageable|[PageableObject](#schemapageableobject)|false|none|none|
|size|integer(int32)|false|none|none|
|sort|[SortObject](#schemasortobject)|false|none|none|
|totalElements|integer(int64)|false|none|none|
|totalPages|integer(int32)|false|none|none|

<h2 id="tocS_PageBookDto">PageBookDto</h2>
<!-- backwards compatibility -->
<a id="schemapagebookdto"></a>
<a id="schema_PageBookDto"></a>
<a id="tocSpagebookdto"></a>
<a id="tocspagebookdto"></a>

```json
{
  "content": [
    {
      "created": "1970-01-01T00:00:00Z",
      "deleted": true,
      "fileHash": "string",
      "fileLastModified": "1970-01-01T00:00:00Z",
      "id": "string",
      "lastModified": "1970-01-01T00:00:00Z",
      "libraryId": "string",
      "media": {
        "comment": "string",
        "epubDivinaCompatible": true,
        "epubIsKepub": true,
        "mediaProfile": "string",
        "mediaType": "string",
        "pagesCount": 0,
        "status": "string"
      },
      "metadata": {
        "authors": [
          {
            "name": "string",
            "role": "string"
          }
        ],
        "authorsLock": true,
        "created": "1970-01-01T00:00:00Z",
        "isbn": "string",
        "isbnLock": true,
        "lastModified": "1970-01-01T00:00:00Z",
        "links": [
          {
            "label": "string",
            "url": "string"
          }
        ],
        "linksLock": true,
        "notableEntities": [
          {
            "kind": "string",
            "name": "string"
          }
        ],
        "notableEntitiesLock": true,
        "number": "string",
        "numberLock": true,
        "numberSort": 0,
        "numberSortLock": true,
        "releaseDate": "1970-01-01",
        "releaseDateLock": true,
        "summary": "string",
        "summaryLock": true,
        "tags": [
          "string"
        ],
        "tagsLock": true,
        "title": "string",
        "titleLock": true
      },
      "name": "string",
      "number": 0,
      "oneshot": true,
      "readProgress": {
        "completed": true,
        "created": "1970-01-01T00:00:00Z",
        "deviceId": "string",
        "deviceName": "string",
        "lastModified": "1970-01-01T00:00:00Z",
        "page": 0,
        "readDate": "1970-01-01T00:00:00Z"
      },
      "seriesId": "string",
      "seriesTitle": "string",
      "size": "string",
      "sizeBytes": 0,
      "url": "string"
    }
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[BookDto](#schemabookdto)]|false|none|none|
|empty|boolean|false|none|none|
|first|boolean|false|none|none|
|last|boolean|false|none|none|
|number|integer(int32)|false|none|none|
|numberOfElements|integer(int32)|false|none|none|
|pageable|[PageableObject](#schemapageableobject)|false|none|none|
|size|integer(int32)|false|none|none|
|sort|[SortObject](#schemasortobject)|false|none|none|
|totalElements|integer(int64)|false|none|none|
|totalPages|integer(int32)|false|none|none|

<h2 id="tocS_PageCollectionDto">PageCollectionDto</h2>
<!-- backwards compatibility -->
<a id="schemapagecollectiondto"></a>
<a id="schema_PageCollectionDto"></a>
<a id="tocSpagecollectiondto"></a>
<a id="tocspagecollectiondto"></a>

```json
{
  "content": [
    {
      "createdDate": "1970-01-01T00:00:00Z",
      "filtered": true,
      "id": "string",
      "lastModifiedDate": "1970-01-01T00:00:00Z",
      "name": "string",
      "ordered": true,
      "seriesIds": [
        "string"
      ]
    }
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[CollectionDto](#schemacollectiondto)]|false|none|none|
|empty|boolean|false|none|none|
|first|boolean|false|none|none|
|last|boolean|false|none|none|
|number|integer(int32)|false|none|none|
|numberOfElements|integer(int32)|false|none|none|
|pageable|[PageableObject](#schemapageableobject)|false|none|none|
|size|integer(int32)|false|none|none|
|sort|[SortObject](#schemasortobject)|false|none|none|
|totalElements|integer(int64)|false|none|none|
|totalPages|integer(int32)|false|none|none|

<h2 id="tocS_PageDto">PageDto</h2>
<!-- backwards compatibility -->
<a id="schemapagedto"></a>
<a id="schema_PageDto"></a>
<a id="tocSpagedto"></a>
<a id="tocspagedto"></a>

```json
{
  "fileName": "string",
  "height": 0,
  "mediaType": "string",
  "number": 0,
  "size": "string",
  "sizeBytes": 0,
  "width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileName|string|true|none|none|
|height|integer(int32)|false|none|none|
|mediaType|string|true|none|none|
|number|integer(int32)|true|none|none|
|size|string|true|none|none|
|sizeBytes|integer(int64)|false|none|none|
|width|integer(int32)|false|none|none|

<h2 id="tocS_PageHashCreationDto">PageHashCreationDto</h2>
<!-- backwards compatibility -->
<a id="schemapagehashcreationdto"></a>
<a id="schema_PageHashCreationDto"></a>
<a id="tocSpagehashcreationdto"></a>
<a id="tocspagehashcreationdto"></a>

```json
{
  "action": "DELETE_AUTO",
  "hash": "string",
  "size": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|none|
|hash|string|true|none|none|
|size|integer(int64)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|action|DELETE_AUTO|
|action|DELETE_MANUAL|
|action|IGNORE|

<h2 id="tocS_PageHashKnownDto">PageHashKnownDto</h2>
<!-- backwards compatibility -->
<a id="schemapagehashknowndto"></a>
<a id="schema_PageHashKnownDto"></a>
<a id="tocSpagehashknowndto"></a>
<a id="tocspagehashknowndto"></a>

```json
{
  "action": "DELETE_AUTO",
  "created": "1970-01-01T00:00:00Z",
  "deleteCount": 0,
  "hash": "string",
  "lastModified": "1970-01-01T00:00:00Z",
  "matchCount": 0,
  "size": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|none|
|created|string(date-time)|true|none|none|
|deleteCount|integer(int32)|true|none|none|
|hash|string|true|none|none|
|lastModified|string(date-time)|true|none|none|
|matchCount|integer(int32)|true|none|none|
|size|integer(int64)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|action|DELETE_AUTO|
|action|DELETE_MANUAL|
|action|IGNORE|

<h2 id="tocS_PageHashMatchDto">PageHashMatchDto</h2>
<!-- backwards compatibility -->
<a id="schemapagehashmatchdto"></a>
<a id="schema_PageHashMatchDto"></a>
<a id="tocSpagehashmatchdto"></a>
<a id="tocspagehashmatchdto"></a>

```json
{
  "bookId": "string",
  "fileName": "string",
  "fileSize": 0,
  "mediaType": "string",
  "pageNumber": 0,
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookId|string|true|none|none|
|fileName|string|true|none|none|
|fileSize|integer(int64)|true|none|none|
|mediaType|string|true|none|none|
|pageNumber|integer(int32)|true|none|none|
|url|string|true|none|none|

<h2 id="tocS_PageHashUnknownDto">PageHashUnknownDto</h2>
<!-- backwards compatibility -->
<a id="schemapagehashunknowndto"></a>
<a id="schema_PageHashUnknownDto"></a>
<a id="tocSpagehashunknowndto"></a>
<a id="tocspagehashunknowndto"></a>

```json
{
  "hash": "string",
  "matchCount": 0,
  "size": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hash|string|true|none|none|
|matchCount|integer(int32)|true|none|none|
|size|integer(int64)|false|none|none|

<h2 id="tocS_PageHistoricalEventDto">PageHistoricalEventDto</h2>
<!-- backwards compatibility -->
<a id="schemapagehistoricaleventdto"></a>
<a id="schema_PageHistoricalEventDto"></a>
<a id="tocSpagehistoricaleventdto"></a>
<a id="tocspagehistoricaleventdto"></a>

```json
{
  "content": [
    {
      "bookId": "string",
      "id": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "seriesId": "string",
      "timestamp": "1970-01-01T00:00:00Z",
      "type": "string"
    }
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[HistoricalEventDto](#schemahistoricaleventdto)]|false|none|none|
|empty|boolean|false|none|none|
|first|boolean|false|none|none|
|last|boolean|false|none|none|
|number|integer(int32)|false|none|none|
|numberOfElements|integer(int32)|false|none|none|
|pageable|[PageableObject](#schemapageableobject)|false|none|none|
|size|integer(int32)|false|none|none|
|sort|[SortObject](#schemasortobject)|false|none|none|
|totalElements|integer(int64)|false|none|none|
|totalPages|integer(int32)|false|none|none|

<h2 id="tocS_PageInteger">PageInteger</h2>
<!-- backwards compatibility -->
<a id="schemapageinteger"></a>
<a id="schema_PageInteger"></a>
<a id="tocSpageinteger"></a>
<a id="tocspageinteger"></a>

```json
{
  "content": [
    0
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[integer(int32)]|false|none|none|
|empty|boolean|false|none|none|
|first|boolean|false|none|none|
|last|boolean|false|none|none|
|number|integer(int32)|false|none|none|
|numberOfElements|integer(int32)|false|none|none|
|pageable|[PageableObject](#schemapageableobject)|false|none|none|
|size|integer(int32)|false|none|none|
|sort|[SortObject](#schemasortobject)|false|none|none|
|totalElements|integer(int64)|false|none|none|
|totalPages|integer(int32)|false|none|none|

<h2 id="tocS_PagePageHashKnownDto">PagePageHashKnownDto</h2>
<!-- backwards compatibility -->
<a id="schemapagepagehashknowndto"></a>
<a id="schema_PagePageHashKnownDto"></a>
<a id="tocSpagepagehashknowndto"></a>
<a id="tocspagepagehashknowndto"></a>

```json
{
  "content": [
    {
      "action": "DELETE_AUTO",
      "created": "1970-01-01T00:00:00Z",
      "deleteCount": 0,
      "hash": "string",
      "lastModified": "1970-01-01T00:00:00Z",
      "matchCount": 0,
      "size": 0
    }
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[PageHashKnownDto](#schemapagehashknowndto)]|false|none|none|
|empty|boolean|false|none|none|
|first|boolean|false|none|none|
|last|boolean|false|none|none|
|number|integer(int32)|false|none|none|
|numberOfElements|integer(int32)|false|none|none|
|pageable|[PageableObject](#schemapageableobject)|false|none|none|
|size|integer(int32)|false|none|none|
|sort|[SortObject](#schemasortobject)|false|none|none|
|totalElements|integer(int64)|false|none|none|
|totalPages|integer(int32)|false|none|none|

<h2 id="tocS_PagePageHashMatchDto">PagePageHashMatchDto</h2>
<!-- backwards compatibility -->
<a id="schemapagepagehashmatchdto"></a>
<a id="schema_PagePageHashMatchDto"></a>
<a id="tocSpagepagehashmatchdto"></a>
<a id="tocspagepagehashmatchdto"></a>

```json
{
  "content": [
    {
      "bookId": "string",
      "fileName": "string",
      "fileSize": 0,
      "mediaType": "string",
      "pageNumber": 0,
      "url": "string"
    }
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[PageHashMatchDto](#schemapagehashmatchdto)]|false|none|none|
|empty|boolean|false|none|none|
|first|boolean|false|none|none|
|last|boolean|false|none|none|
|number|integer(int32)|false|none|none|
|numberOfElements|integer(int32)|false|none|none|
|pageable|[PageableObject](#schemapageableobject)|false|none|none|
|size|integer(int32)|false|none|none|
|sort|[SortObject](#schemasortobject)|false|none|none|
|totalElements|integer(int64)|false|none|none|
|totalPages|integer(int32)|false|none|none|

<h2 id="tocS_PagePageHashUnknownDto">PagePageHashUnknownDto</h2>
<!-- backwards compatibility -->
<a id="schemapagepagehashunknowndto"></a>
<a id="schema_PagePageHashUnknownDto"></a>
<a id="tocSpagepagehashunknowndto"></a>
<a id="tocspagepagehashunknowndto"></a>

```json
{
  "content": [
    {
      "hash": "string",
      "matchCount": 0,
      "size": 0
    }
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[PageHashUnknownDto](#schemapagehashunknowndto)]|false|none|none|
|empty|boolean|false|none|none|
|first|boolean|false|none|none|
|last|boolean|false|none|none|
|number|integer(int32)|false|none|none|
|numberOfElements|integer(int32)|false|none|none|
|pageable|[PageableObject](#schemapageableobject)|false|none|none|
|size|integer(int32)|false|none|none|
|sort|[SortObject](#schemasortobject)|false|none|none|
|totalElements|integer(int64)|false|none|none|
|totalPages|integer(int32)|false|none|none|

<h2 id="tocS_PageReadListDto">PageReadListDto</h2>
<!-- backwards compatibility -->
<a id="schemapagereadlistdto"></a>
<a id="schema_PageReadListDto"></a>
<a id="tocSpagereadlistdto"></a>
<a id="tocspagereadlistdto"></a>

```json
{
  "content": [
    {
      "bookIds": [
        "string"
      ],
      "createdDate": "1970-01-01T00:00:00Z",
      "filtered": true,
      "id": "string",
      "lastModifiedDate": "1970-01-01T00:00:00Z",
      "name": "string",
      "ordered": true,
      "summary": "string"
    }
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[ReadListDto](#schemareadlistdto)]|false|none|none|
|empty|boolean|false|none|none|
|first|boolean|false|none|none|
|last|boolean|false|none|none|
|number|integer(int32)|false|none|none|
|numberOfElements|integer(int32)|false|none|none|
|pageable|[PageableObject](#schemapageableobject)|false|none|none|
|size|integer(int32)|false|none|none|
|sort|[SortObject](#schemasortobject)|false|none|none|
|totalElements|integer(int64)|false|none|none|
|totalPages|integer(int32)|false|none|none|

<h2 id="tocS_PageResponseNotableEntityDto">PageResponseNotableEntityDto</h2>
<!-- backwards compatibility -->
<a id="schemapageresponsenotableentitydto"></a>
<a id="schema_PageResponseNotableEntityDto"></a>
<a id="tocSpageresponsenotableentitydto"></a>
<a id="tocspageresponsenotableentitydto"></a>

```json
{
  "content": [
    {
      "kind": "string",
      "name": "string"
    }
  ],
  "first": true,
  "last": false,
  "page": 0,
  "size": 20,
  "totalElements": 105,
  "totalPages": 6
}
```

Paginated API response container

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[NotableEntityDto](#schemanotableentitydto)]|true|none|List of items contained in the current page|
|first|boolean|true|none|Indicates if the current page is the first page|
|last|boolean|true|none|Indicates if the current page is the last page|
|page|integer(int32)|true|none|Zero-based page index (0..N)|
|size|integer(int32)|true|none|Number of items requested per page|
|totalElements|integer(int64)|true|none|Total number of elements across all pages|
|totalPages|integer(int32)|true|none|Total number of calculated pages|

<h2 id="tocS_PageResponseString">PageResponseString</h2>
<!-- backwards compatibility -->
<a id="schemapageresponsestring"></a>
<a id="schema_PageResponseString"></a>
<a id="tocSpageresponsestring"></a>
<a id="tocspageresponsestring"></a>

```json
{
  "content": [
    "string"
  ],
  "first": true,
  "last": false,
  "page": 0,
  "size": 20,
  "totalElements": 105,
  "totalPages": 6
}
```

Paginated API response container

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[string]|true|none|List of items contained in the current page|
|first|boolean|true|none|Indicates if the current page is the first page|
|last|boolean|true|none|Indicates if the current page is the last page|
|page|integer(int32)|true|none|Zero-based page index (0..N)|
|size|integer(int32)|true|none|Number of items requested per page|
|totalElements|integer(int64)|true|none|Total number of elements across all pages|
|totalPages|integer(int32)|true|none|Total number of calculated pages|

<h2 id="tocS_PageSeriesDto">PageSeriesDto</h2>
<!-- backwards compatibility -->
<a id="schemapageseriesdto"></a>
<a id="schema_PageSeriesDto"></a>
<a id="tocSpageseriesdto"></a>
<a id="tocspageseriesdto"></a>

```json
{
  "content": [
    {
      "booksCount": 0,
      "booksInProgressCount": 0,
      "booksMetadata": {
        "authors": [
          {
            "name": "string",
            "role": "string"
          }
        ],
        "created": "1970-01-01T00:00:00Z",
        "lastModified": "1970-01-01T00:00:00Z",
        "notableEntities": [
          {
            "kind": "string",
            "name": "string"
          }
        ],
        "releaseDate": "1970-01-01",
        "summary": "string",
        "summaryNumber": "string",
        "tags": [
          "string"
        ]
      },
      "booksReadCount": 0,
      "booksUnreadCount": 0,
      "created": "1970-01-01T00:00:00Z",
      "deleted": true,
      "fileLastModified": "1970-01-01T00:00:00Z",
      "id": "string",
      "lastModified": "1970-01-01T00:00:00Z",
      "libraryId": "string",
      "metadata": {
        "ageRating": 0,
        "ageRatingLock": true,
        "alternateTitles": [
          {
            "label": "string",
            "title": "string"
          }
        ],
        "alternateTitlesLock": true,
        "created": "1970-01-01T00:00:00Z",
        "genres": [
          "string"
        ],
        "genresLock": true,
        "language": "string",
        "languageLock": true,
        "lastModified": "1970-01-01T00:00:00Z",
        "links": [
          {
            "label": "string",
            "url": "string"
          }
        ],
        "linksLock": true,
        "publisher": "string",
        "publisherLock": true,
        "readingDirection": "string",
        "readingDirectionLock": true,
        "sharingLabels": [
          "string"
        ],
        "sharingLabelsLock": true,
        "status": "string",
        "statusLock": true,
        "summary": "string",
        "summaryLock": true,
        "tags": [
          "string"
        ],
        "tagsLock": true,
        "title": "string",
        "titleLock": true,
        "titleSort": "string",
        "titleSortLock": true,
        "totalBookCount": 0,
        "totalBookCountLock": true
      },
      "name": "string",
      "oneshot": true,
      "url": "string"
    }
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[SeriesDto](#schemaseriesdto)]|false|none|none|
|empty|boolean|false|none|none|
|first|boolean|false|none|none|
|last|boolean|false|none|none|
|number|integer(int32)|false|none|none|
|numberOfElements|integer(int32)|false|none|none|
|pageable|[PageableObject](#schemapageableobject)|false|none|none|
|size|integer(int32)|false|none|none|
|sort|[SortObject](#schemasortobject)|false|none|none|
|totalElements|integer(int64)|false|none|none|
|totalPages|integer(int32)|false|none|none|

<h2 id="tocS_PageString">PageString</h2>
<!-- backwards compatibility -->
<a id="schemapagestring"></a>
<a id="schema_PageString"></a>
<a id="tocSpagestring"></a>
<a id="tocspagestring"></a>

```json
{
  "content": [
    "string"
  ],
  "empty": true,
  "first": true,
  "last": true,
  "number": 0,
  "numberOfElements": 0,
  "pageable": {
    "offset": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "paged": true,
    "sort": {
      "empty": true,
      "sorted": true,
      "unsorted": true
    },
    "unpaged": true
  },
  "size": 0,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "totalElements": 0,
  "totalPages": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[string]|false|none|none|
|empty|boolean|false|none|none|
|first|boolean|false|none|none|
|last|boolean|false|none|none|
|number|integer(int32)|false|none|none|
|numberOfElements|integer(int32)|false|none|none|
|pageable|[PageableObject](#schemapageableobject)|false|none|none|
|size|integer(int32)|false|none|none|
|sort|[SortObject](#schemasortobject)|false|none|none|
|totalElements|integer(int64)|false|none|none|
|totalPages|integer(int32)|false|none|none|

<h2 id="tocS_PageableObject">PageableObject</h2>
<!-- backwards compatibility -->
<a id="schemapageableobject"></a>
<a id="schema_PageableObject"></a>
<a id="tocSpageableobject"></a>
<a id="tocspageableobject"></a>

```json
{
  "offset": 0,
  "pageNumber": 0,
  "pageSize": 0,
  "paged": true,
  "sort": {
    "empty": true,
    "sorted": true,
    "unsorted": true
  },
  "unpaged": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|offset|integer(int64)|false|none|none|
|pageNumber|integer(int32)|false|none|none|
|pageSize|integer(int32)|false|none|none|
|paged|boolean|false|none|none|
|sort|[SortObject](#schemasortobject)|false|none|none|
|unpaged|boolean|false|none|none|

<h2 id="tocS_PasswordUpdateDto">PasswordUpdateDto</h2>
<!-- backwards compatibility -->
<a id="schemapasswordupdatedto"></a>
<a id="schema_PasswordUpdateDto"></a>
<a id="tocSpasswordupdatedto"></a>
<a id="tocspasswordupdatedto"></a>

```json
{
  "password": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|string|true|none|none|

<h2 id="tocS_PathDto">PathDto</h2>
<!-- backwards compatibility -->
<a id="schemapathdto"></a>
<a id="schema_PathDto"></a>
<a id="tocSpathdto"></a>
<a id="tocspathdto"></a>

```json
{
  "name": "string",
  "path": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|path|string|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_R2Device">R2Device</h2>
<!-- backwards compatibility -->
<a id="schemar2device"></a>
<a id="schema_R2Device"></a>
<a id="tocSr2device"></a>
<a id="tocsr2device"></a>

```json
{
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_R2Locator">R2Locator</h2>
<!-- backwards compatibility -->
<a id="schemar2locator"></a>
<a id="schema_R2Locator"></a>
<a id="tocSr2locator"></a>
<a id="tocsr2locator"></a>

```json
{
  "href": "string",
  "koboSpan": "string",
  "locations": {
    "fragments": [
      "string"
    ],
    "position": 0,
    "progression": 0,
    "totalProgression": 0
  },
  "text": {
    "after": "string",
    "before": "string",
    "highlight": "string"
  },
  "title": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|none|
|koboSpan|string|false|none|none|
|locations|[Location](#schemalocation)|false|none|none|
|text|[Text](#schematext)|false|none|none|
|title|string|false|none|none|
|type|string|true|none|none|

<h2 id="tocS_R2Positions">R2Positions</h2>
<!-- backwards compatibility -->
<a id="schemar2positions"></a>
<a id="schema_R2Positions"></a>
<a id="tocSr2positions"></a>
<a id="tocsr2positions"></a>

```json
{
  "positions": [
    {
      "href": "string",
      "koboSpan": "string",
      "locations": {
        "fragments": [
          "string"
        ],
        "position": 0,
        "progression": 0,
        "totalProgression": 0
      },
      "text": {
        "after": "string",
        "before": "string",
        "highlight": "string"
      },
      "title": "string",
      "type": "string"
    }
  ],
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|positions|[[R2Locator](#schemar2locator)]|true|none|none|
|total|integer(int32)|true|none|none|

<h2 id="tocS_R2Progression">R2Progression</h2>
<!-- backwards compatibility -->
<a id="schemar2progression"></a>
<a id="schema_R2Progression"></a>
<a id="tocSr2progression"></a>
<a id="tocsr2progression"></a>

```json
{
  "device": {
    "id": "string",
    "name": "string"
  },
  "locator": {
    "href": "string",
    "koboSpan": "string",
    "locations": {
      "fragments": [
        "string"
      ],
      "position": 0,
      "progression": 0,
      "totalProgression": 0
    },
    "text": {
      "after": "string",
      "before": "string",
      "highlight": "string"
    },
    "title": "string",
    "type": "string"
  },
  "modified": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device|[R2Device](#schemar2device)|true|none|none|
|locator|[R2Locator](#schemar2locator)|true|none|none|
|modified|string(date-time)|true|none|none|

<h2 id="tocS_ReadListCreationDto">ReadListCreationDto</h2>
<!-- backwards compatibility -->
<a id="schemareadlistcreationdto"></a>
<a id="schema_ReadListCreationDto"></a>
<a id="tocSreadlistcreationdto"></a>
<a id="tocsreadlistcreationdto"></a>

```json
{
  "bookIds": [
    "string"
  ],
  "name": "string",
  "ordered": true,
  "summary": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookIds|[string]|true|none|none|
|name|string|true|none|none|
|ordered|boolean|true|none|none|
|summary|string|true|none|none|

<h2 id="tocS_ReadListDto">ReadListDto</h2>
<!-- backwards compatibility -->
<a id="schemareadlistdto"></a>
<a id="schema_ReadListDto"></a>
<a id="tocSreadlistdto"></a>
<a id="tocsreadlistdto"></a>

```json
{
  "bookIds": [
    "string"
  ],
  "createdDate": "1970-01-01T00:00:00Z",
  "filtered": true,
  "id": "string",
  "lastModifiedDate": "1970-01-01T00:00:00Z",
  "name": "string",
  "ordered": true,
  "summary": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookIds|[string]|true|none|none|
|createdDate|string(date-time)|true|none|none|
|filtered|boolean|true|none|none|
|id|string|true|none|none|
|lastModifiedDate|string(date-time)|true|none|none|
|name|string|true|none|none|
|ordered|boolean|true|none|none|
|summary|string|true|none|none|

<h2 id="tocS_ReadListMatchDto">ReadListMatchDto</h2>
<!-- backwards compatibility -->
<a id="schemareadlistmatchdto"></a>
<a id="schema_ReadListMatchDto"></a>
<a id="tocSreadlistmatchdto"></a>
<a id="tocsreadlistmatchdto"></a>

```json
{
  "errorCode": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|string|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_ReadListRequestBookDto">ReadListRequestBookDto</h2>
<!-- backwards compatibility -->
<a id="schemareadlistrequestbookdto"></a>
<a id="schema_ReadListRequestBookDto"></a>
<a id="tocSreadlistrequestbookdto"></a>
<a id="tocsreadlistrequestbookdto"></a>

```json
{
  "number": "string",
  "series": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number|string|true|none|none|
|series|[string]|true|none|none|

<h2 id="tocS_ReadListRequestBookMatchBookDto">ReadListRequestBookMatchBookDto</h2>
<!-- backwards compatibility -->
<a id="schemareadlistrequestbookmatchbookdto"></a>
<a id="schema_ReadListRequestBookMatchBookDto"></a>
<a id="tocSreadlistrequestbookmatchbookdto"></a>
<a id="tocsreadlistrequestbookmatchbookdto"></a>

```json
{
  "bookId": "string",
  "number": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookId|string|true|none|none|
|number|string|true|none|none|
|title|string|true|none|none|

<h2 id="tocS_ReadListRequestBookMatchDto">ReadListRequestBookMatchDto</h2>
<!-- backwards compatibility -->
<a id="schemareadlistrequestbookmatchdto"></a>
<a id="schema_ReadListRequestBookMatchDto"></a>
<a id="tocSreadlistrequestbookmatchdto"></a>
<a id="tocsreadlistrequestbookmatchdto"></a>

```json
{
  "books": [
    {
      "bookId": "string",
      "number": "string",
      "title": "string"
    }
  ],
  "series": {
    "releaseDate": "1970-01-01",
    "seriesId": "string",
    "title": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|books|[[ReadListRequestBookMatchBookDto](#schemareadlistrequestbookmatchbookdto)]|true|none|none|
|series|[ReadListRequestBookMatchSeriesDto](#schemareadlistrequestbookmatchseriesdto)|true|none|none|

<h2 id="tocS_ReadListRequestBookMatchSeriesDto">ReadListRequestBookMatchSeriesDto</h2>
<!-- backwards compatibility -->
<a id="schemareadlistrequestbookmatchseriesdto"></a>
<a id="schema_ReadListRequestBookMatchSeriesDto"></a>
<a id="tocSreadlistrequestbookmatchseriesdto"></a>
<a id="tocsreadlistrequestbookmatchseriesdto"></a>

```json
{
  "releaseDate": "1970-01-01",
  "seriesId": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|releaseDate|string(date)|false|none|none|
|seriesId|string|true|none|none|
|title|string|true|none|none|

<h2 id="tocS_ReadListRequestBookMatchesDto">ReadListRequestBookMatchesDto</h2>
<!-- backwards compatibility -->
<a id="schemareadlistrequestbookmatchesdto"></a>
<a id="schema_ReadListRequestBookMatchesDto"></a>
<a id="tocSreadlistrequestbookmatchesdto"></a>
<a id="tocsreadlistrequestbookmatchesdto"></a>

```json
{
  "matches": [
    {
      "books": [
        {
          "bookId": "string",
          "number": "string",
          "title": "string"
        }
      ],
      "series": {
        "releaseDate": "1970-01-01",
        "seriesId": "string",
        "title": "string"
      }
    }
  ],
  "request": {
    "number": "string",
    "series": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matches|[[ReadListRequestBookMatchDto](#schemareadlistrequestbookmatchdto)]|true|none|none|
|request|[ReadListRequestBookDto](#schemareadlistrequestbookdto)|true|none|none|

<h2 id="tocS_ReadListRequestMatchDto">ReadListRequestMatchDto</h2>
<!-- backwards compatibility -->
<a id="schemareadlistrequestmatchdto"></a>
<a id="schema_ReadListRequestMatchDto"></a>
<a id="tocSreadlistrequestmatchdto"></a>
<a id="tocsreadlistrequestmatchdto"></a>

```json
{
  "errorCode": "string",
  "readListMatch": {
    "errorCode": "string",
    "name": "string"
  },
  "requests": [
    {
      "matches": [
        {
          "books": [
            {
              "bookId": "string",
              "number": "string",
              "title": "string"
            }
          ],
          "series": {
            "releaseDate": "1970-01-01",
            "seriesId": "string",
            "title": "string"
          }
        }
      ],
      "request": {
        "number": "string",
        "series": [
          "string"
        ]
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|string|true|none|none|
|readListMatch|[ReadListMatchDto](#schemareadlistmatchdto)|true|none|none|
|requests|[[ReadListRequestBookMatchesDto](#schemareadlistrequestbookmatchesdto)]|true|none|none|

<h2 id="tocS_ReadListUpdateDto">ReadListUpdateDto</h2>
<!-- backwards compatibility -->
<a id="schemareadlistupdatedto"></a>
<a id="schema_ReadListUpdateDto"></a>
<a id="tocSreadlistupdatedto"></a>
<a id="tocsreadlistupdatedto"></a>

```json
{
  "bookIds": [
    "string"
  ],
  "name": "string",
  "ordered": true,
  "summary": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookIds|[string]|false|none|none|
|name|string|false|none|none|
|ordered|boolean|false|none|none|
|summary|string|false|none|none|

<h2 id="tocS_ReadProgressDto">ReadProgressDto</h2>
<!-- backwards compatibility -->
<a id="schemareadprogressdto"></a>
<a id="schema_ReadProgressDto"></a>
<a id="tocSreadprogressdto"></a>
<a id="tocsreadprogressdto"></a>

```json
{
  "completed": true,
  "created": "1970-01-01T00:00:00Z",
  "deviceId": "string",
  "deviceName": "string",
  "lastModified": "1970-01-01T00:00:00Z",
  "page": 0,
  "readDate": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completed|boolean|true|none|none|
|created|string(date-time)|true|none|none|
|deviceId|string|true|none|none|
|deviceName|string|true|none|none|
|lastModified|string(date-time)|true|none|none|
|page|integer(int32)|true|none|none|
|readDate|string(date-time)|true|none|none|

<h2 id="tocS_ReadProgressUpdateDto">ReadProgressUpdateDto</h2>
<!-- backwards compatibility -->
<a id="schemareadprogressupdatedto"></a>
<a id="schema_ReadProgressUpdateDto"></a>
<a id="tocSreadprogressupdatedto"></a>
<a id="tocsreadprogressupdatedto"></a>

```json
{
  "completed": true,
  "page": 0
}
```

page can be omitted if completed is set to true. completed can be omitted, and will be set accordingly depending on the page passed and the total number of pages in the book.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completed|boolean|false|none|none|
|page|integer(int32)|false|none|none|

<h2 id="tocS_ReleaseDto">ReleaseDto</h2>
<!-- backwards compatibility -->
<a id="schemareleasedto"></a>
<a id="schema_ReleaseDto"></a>
<a id="tocSreleasedto"></a>
<a id="tocsreleasedto"></a>

```json
{
  "description": "string",
  "latest": true,
  "preRelease": true,
  "releaseDate": "1970-01-01T00:00:00Z",
  "url": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|latest|boolean|true|none|none|
|preRelease|boolean|true|none|none|
|releaseDate|string(date-time)|true|none|none|
|url|string|true|none|none|
|version|string|true|none|none|

<h2 id="tocS_ScanRequestDto">ScanRequestDto</h2>
<!-- backwards compatibility -->
<a id="schemascanrequestdto"></a>
<a id="schema_ScanRequestDto"></a>
<a id="tocSscanrequestdto"></a>
<a id="tocsscanrequestdto"></a>

```json
{
  "path": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|true|none|none|

<h2 id="tocS_SearchConditionAgeRating">SearchConditionAgeRating</h2>
<!-- backwards compatibility -->
<a id="schemasearchconditionagerating"></a>
<a id="schema_SearchConditionAgeRating"></a>
<a id="tocSsearchconditionagerating"></a>
<a id="tocssearchconditionagerating"></a>

```json
{
  "ageRating": {
    "value": null,
    "operator": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ageRating|[SearchOperatorNumericNullableInteger](#schemasearchoperatornumericnullableinteger)|true|none|none|

<h2 id="tocS_SearchConditionAllOfBook">SearchConditionAllOfBook</h2>
<!-- backwards compatibility -->
<a id="schemasearchconditionallofbook"></a>
<a id="schema_SearchConditionAllOfBook"></a>
<a id="tocSsearchconditionallofbook"></a>
<a id="tocssearchconditionallofbook"></a>

```json
{
  "allOf": [
    {}
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allOf|[[SearchConditionBook](#schemasearchconditionbook)]|true|none|none|

<h2 id="tocS_SearchConditionAllOfSeries">SearchConditionAllOfSeries</h2>
<!-- backwards compatibility -->
<a id="schemasearchconditionallofseries"></a>
<a id="schema_SearchConditionAllOfSeries"></a>
<a id="tocSsearchconditionallofseries"></a>
<a id="tocssearchconditionallofseries"></a>

```json
{
  "allOf": [
    {}
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allOf|[[SearchConditionSeries](#schemasearchconditionseries)]|true|none|none|

<h2 id="tocS_SearchConditionAnyOfBook">SearchConditionAnyOfBook</h2>
<!-- backwards compatibility -->
<a id="schemasearchconditionanyofbook"></a>
<a id="schema_SearchConditionAnyOfBook"></a>
<a id="tocSsearchconditionanyofbook"></a>
<a id="tocssearchconditionanyofbook"></a>

```json
{
  "anyOf": [
    {}
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|anyOf|[[SearchConditionBook](#schemasearchconditionbook)]|true|none|none|

<h2 id="tocS_SearchConditionAnyOfSeries">SearchConditionAnyOfSeries</h2>
<!-- backwards compatibility -->
<a id="schemasearchconditionanyofseries"></a>
<a id="schema_SearchConditionAnyOfSeries"></a>
<a id="tocSsearchconditionanyofseries"></a>
<a id="tocssearchconditionanyofseries"></a>

```json
{
  "anyOf": [
    {}
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|anyOf|[[SearchConditionSeries](#schemasearchconditionseries)]|true|none|none|

<h2 id="tocS_SearchConditionAuthor">SearchConditionAuthor</h2>
<!-- backwards compatibility -->
<a id="schemasearchconditionauthor"></a>
<a id="schema_SearchConditionAuthor"></a>
<a id="tocSsearchconditionauthor"></a>
<a id="tocssearchconditionauthor"></a>

```json
{
  "author": {
    "value": null,
    "operator": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|[SearchOperatorEqualityAuthorMatch](#schemasearchoperatorequalityauthormatch)|true|none|none|

<h2 id="tocS_SearchConditionBook">SearchConditionBook</h2>
<!-- backwards compatibility -->
<a id="schemasearchconditionbook"></a>
<a id="schema_SearchConditionBook"></a>
<a id="tocSsearchconditionbook"></a>
<a id="tocssearchconditionbook"></a>

```json
{
  "anyOf": [
    {}
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[SearchConditionAnyOfBook](#schemasearchconditionanyofbook)|false|none|none|
|*oneOf*|[SearchConditionAllOfBook](#schemasearchconditionallofbook)|false|none|none|
|*oneOf*|[SearchConditionLibraryId](#schemasearchconditionlibraryid)|false|none|none|
|*oneOf*|[SearchConditionReadListId](#schemasearchconditionreadlistid)|false|none|none|
|*oneOf*|[SearchConditionSeriesId](#schemasearchconditionseriesid)|false|none|none|
|*oneOf*|[SearchConditionDeleted](#schemasearchconditiondeleted)|false|none|none|
|*oneOf*|[SearchConditionOneShot](#schemasearchconditiononeshot)|false|none|none|
|*oneOf*|[SearchConditionTitle](#schemasearchconditiontitle)|false|none|none|
|*oneOf*|[SearchConditionReleaseDate](#schemasearchconditionreleasedate)|false|none|none|
|*oneOf*|[SearchConditionTag](#schemasearchconditiontag)|false|none|none|
|*oneOf*|[SearchConditionNumberSort](#schemasearchconditionnumbersort)|false|none|none|
|*oneOf*|[SearchConditionReadStatus](#schemasearchconditionreadstatus)|false|none|none|
|*oneOf*|[SearchConditionMediaStatus](#schemasearchconditionmediastatus)|false|none|none|
|*oneOf*|[SearchConditionMediaProfile](#schemasearchconditionmediaprofile)|false|none|none|
|*oneOf*|[SearchConditionAuthor](#schemasearchconditionauthor)|false|none|none|
|*oneOf*|[SearchConditionNotableEntity](#schemasearchconditionnotableentity)|false|none|none|
|*oneOf*|[SearchConditionPoster](#schemasearchconditionposter)|false|none|none|

<h2 id="tocS_SearchConditionCollectionId">SearchConditionCollectionId</h2>
<!-- backwards compatibility -->
<a id="schemasearchconditioncollectionid"></a>
<a id="schema_SearchConditionCollectionId"></a>
<a id="tocSsearchconditioncollectionid"></a>
<a id="tocssearchconditioncollectionid"></a>

```json
{
  "collectionId": {
    "value": null,
    "operator": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collectionId|[SearchOperatorEqualityString](#schemasearchoperatorequalitystring)|true|none|none|

<h2 id="tocS_SearchConditionComplete">SearchConditionComplete</h2>
<!-- backwards compatibility -->
<a id="schemasearchconditioncomplete"></a>
<a id="schema_SearchConditionComplete"></a>
<a id="tocSsearchconditioncomplete"></a>
<a id="tocssearchconditioncomplete"></a>

```json
{
  "complete": {
    "operator": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|complete|[SearchOperatorBoolean](#schemasearchoperatorboolean)|true|none|none|

<h2 id="tocS_SearchConditionDeleted">SearchConditionDeleted</h2>
<!-- backwards compatibility -->
<a id="schemasearchconditiondeleted"></a>
<a id="schema_SearchConditionDeleted"></a>
<a id="tocSsearchconditiondeleted"></a>
<a id="tocssearchconditiondeleted"></a>

```json
{
  "deleted": {
    "operator": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deleted|[SearchOperatorBoolean](#schemasearchoperatorboolean)|true|none|none|

<h2 id="tocS_SearchConditionGenre">SearchConditionGenre</h2>
<!-- backwards compatibility -->
<a id="schemasearchconditiongenre"></a>
<a id="schema_SearchConditionGenre"></a>
<a id="tocSsearchconditiongenre"></a>
<a id="tocssearchconditiongenre"></a>

```json
{
  "genre": {
    "value": null,
    "operator": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|genre|[SearchOperatorEqualityNullableString](#schemasearchoperatorequalitynullablestring)|true|none|none|

<h2 id="tocS_SearchConditionLanguage">SearchConditionLanguage</h2>
<!-- backwards compatibility -->
<a id="schemasearchconditionlanguage"></a>
<a id="schema_SearchConditionLanguage"></a>
<a id="tocSsearchconditionlanguage"></a>
<a id="tocssearchconditionlanguage"></a>

```json
{
  "language": {
    "value": null,
    "operator": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|language|[SearchOperatorEqualityString](#schemasearchoperatorequalitystring)|true|none|none|

<h2 id="tocS_SearchConditionLibraryId">SearchConditionLibraryId</h2>
<!-- backwards compatibility -->
<a id="schemasearchconditionlibraryid"></a>
<a id="schema_SearchConditionLibraryId"></a>
<a id="tocSsearchconditionlibraryid"></a>
<a id="tocssearchconditionlibraryid"></a>

```json
{
  "libraryId": {
    "value": null,
    "operator": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|libraryId|[SearchOperatorEqualityString](#schemasearchoperatorequalitystring)|true|none|none|

<h2 id="tocS_SearchConditionMediaProfile">SearchConditionMediaProfile</h2>
<!-- backwards compatibility -->
<a id="schemasearchconditionmediaprofile"></a>
<a id="schema_SearchConditionMediaProfile"></a>
<a id="tocSsearchconditionmediaprofile"></a>
<a id="tocssearchconditionmediaprofile"></a>

```json
{
  "mediaProfile": {
    "value": null,
    "operator": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mediaProfile|[SearchOperatorEqualityMediaProfile](#schemasearchoperatorequalitymediaprofile)|true|none|none|

<h2 id="tocS_SearchConditionMediaStatus">SearchConditionMediaStatus</h2>
<!-- backwards compatibility -->
<a id="schemasearchconditionmediastatus"></a>
<a id="schema_SearchConditionMediaStatus"></a>
<a id="tocSsearchconditionmediastatus"></a>
<a id="tocssearchconditionmediastatus"></a>

```json
{
  "mediaStatus": {
    "value": null,
    "operator": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mediaStatus|[SearchOperatorEqualityStatus](#schemasearchoperatorequalitystatus)|true|none|none|

<h2 id="tocS_SearchConditionNotableEntity">SearchConditionNotableEntity</h2>
<!-- backwards compatibility -->
<a id="schemasearchconditionnotableentity"></a>
<a id="schema_SearchConditionNotableEntity"></a>
<a id="tocSsearchconditionnotableentity"></a>
<a id="tocssearchconditionnotableentity"></a>

```json
{
  "notableEntity": {
    "value": null,
    "operator": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notableEntity|[SearchOperatorEqualityNotableEntityMatch](#schemasearchoperatorequalitynotableentitymatch)|true|none|none|

<h2 id="tocS_SearchConditionNumberSort">SearchConditionNumberSort</h2>
<!-- backwards compatibility -->
<a id="schemasearchconditionnumbersort"></a>
<a id="schema_SearchConditionNumberSort"></a>
<a id="tocSsearchconditionnumbersort"></a>
<a id="tocssearchconditionnumbersort"></a>

```json
{
  "numberSort": {
    "value": null,
    "operator": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numberSort|[SearchOperatorNumericTFloat](#schemasearchoperatornumerictfloat)|true|none|none|

<h2 id="tocS_SearchConditionOneShot">SearchConditionOneShot</h2>
<!-- backwards compatibility -->
<a id="schemasearchconditiononeshot"></a>
<a id="schema_SearchConditionOneShot"></a>
<a id="tocSsearchconditiononeshot"></a>
<a id="tocssearchconditiononeshot"></a>

```json
{
  "oneShot": {
    "operator": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oneShot|[SearchOperatorBoolean](#schemasearchoperatorboolean)|true|none|none|

<h2 id="tocS_SearchConditionPoster">SearchConditionPoster</h2>
<!-- backwards compatibility -->
<a id="schemasearchconditionposter"></a>
<a id="schema_SearchConditionPoster"></a>
<a id="tocSsearchconditionposter"></a>
<a id="tocssearchconditionposter"></a>

```json
{
  "poster": {
    "value": null,
    "operator": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|poster|[SearchOperatorEqualityPosterMatch](#schemasearchoperatorequalitypostermatch)|true|none|none|

<h2 id="tocS_SearchConditionPublisher">SearchConditionPublisher</h2>
<!-- backwards compatibility -->
<a id="schemasearchconditionpublisher"></a>
<a id="schema_SearchConditionPublisher"></a>
<a id="tocSsearchconditionpublisher"></a>
<a id="tocssearchconditionpublisher"></a>

```json
{
  "publisher": {
    "value": null,
    "operator": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|publisher|[SearchOperatorEqualityString](#schemasearchoperatorequalitystring)|true|none|none|

<h2 id="tocS_SearchConditionReadListId">SearchConditionReadListId</h2>
<!-- backwards compatibility -->
<a id="schemasearchconditionreadlistid"></a>
<a id="schema_SearchConditionReadListId"></a>
<a id="tocSsearchconditionreadlistid"></a>
<a id="tocssearchconditionreadlistid"></a>

```json
{
  "readListId": {
    "value": null,
    "operator": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|readListId|[SearchOperatorEqualityString](#schemasearchoperatorequalitystring)|true|none|none|

<h2 id="tocS_SearchConditionReadStatus">SearchConditionReadStatus</h2>
<!-- backwards compatibility -->
<a id="schemasearchconditionreadstatus"></a>
<a id="schema_SearchConditionReadStatus"></a>
<a id="tocSsearchconditionreadstatus"></a>
<a id="tocssearchconditionreadstatus"></a>

```json
{
  "readStatus": {
    "value": null,
    "operator": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|readStatus|[SearchOperatorEqualityReadStatus](#schemasearchoperatorequalityreadstatus)|true|none|none|

<h2 id="tocS_SearchConditionReleaseDate">SearchConditionReleaseDate</h2>
<!-- backwards compatibility -->
<a id="schemasearchconditionreleasedate"></a>
<a id="schema_SearchConditionReleaseDate"></a>
<a id="tocSsearchconditionreleasedate"></a>
<a id="tocssearchconditionreleasedate"></a>

```json
{
  "releaseDate": {
    "dateTime": "1970-01-01T00:00:00Z",
    "operator": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|releaseDate|[SearchOperatorDate](#schemasearchoperatordate)|true|none|none|

<h2 id="tocS_SearchConditionSeries">SearchConditionSeries</h2>
<!-- backwards compatibility -->
<a id="schemasearchconditionseries"></a>
<a id="schema_SearchConditionSeries"></a>
<a id="tocSsearchconditionseries"></a>
<a id="tocssearchconditionseries"></a>

```json
{
  "anyOf": [
    {}
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[SearchConditionAnyOfSeries](#schemasearchconditionanyofseries)|false|none|none|
|*oneOf*|[SearchConditionAllOfSeries](#schemasearchconditionallofseries)|false|none|none|
|*oneOf*|[SearchConditionLibraryId](#schemasearchconditionlibraryid)|false|none|none|
|*oneOf*|[SearchConditionCollectionId](#schemasearchconditioncollectionid)|false|none|none|
|*oneOf*|[SearchConditionDeleted](#schemasearchconditiondeleted)|false|none|none|
|*oneOf*|[SearchConditionComplete](#schemasearchconditioncomplete)|false|none|none|
|*oneOf*|[SearchConditionOneShot](#schemasearchconditiononeshot)|false|none|none|
|*oneOf*|[SearchConditionTitle](#schemasearchconditiontitle)|false|none|none|
|*oneOf*|[SearchConditionTitleSort](#schemasearchconditiontitlesort)|false|none|none|
|*oneOf*|[SearchConditionReleaseDate](#schemasearchconditionreleasedate)|false|none|none|
|*oneOf*|[SearchConditionTag](#schemasearchconditiontag)|false|none|none|
|*oneOf*|[SearchConditionSharingLabel](#schemasearchconditionsharinglabel)|false|none|none|
|*oneOf*|[SearchConditionPublisher](#schemasearchconditionpublisher)|false|none|none|
|*oneOf*|[SearchConditionLanguage](#schemasearchconditionlanguage)|false|none|none|
|*oneOf*|[SearchConditionGenre](#schemasearchconditiongenre)|false|none|none|
|*oneOf*|[SearchConditionAgeRating](#schemasearchconditionagerating)|false|none|none|
|*oneOf*|[SearchConditionReadStatus](#schemasearchconditionreadstatus)|false|none|none|
|*oneOf*|[SearchConditionSeriesStatus](#schemasearchconditionseriesstatus)|false|none|none|
|*oneOf*|[SearchConditionAuthor](#schemasearchconditionauthor)|false|none|none|
|*oneOf*|[SearchConditionNotableEntity](#schemasearchconditionnotableentity)|false|none|none|

<h2 id="tocS_SearchConditionSeriesId">SearchConditionSeriesId</h2>
<!-- backwards compatibility -->
<a id="schemasearchconditionseriesid"></a>
<a id="schema_SearchConditionSeriesId"></a>
<a id="tocSsearchconditionseriesid"></a>
<a id="tocssearchconditionseriesid"></a>

```json
{
  "seriesId": {
    "value": null,
    "operator": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|seriesId|[SearchOperatorEqualityString](#schemasearchoperatorequalitystring)|true|none|none|

<h2 id="tocS_SearchConditionSeriesStatus">SearchConditionSeriesStatus</h2>
<!-- backwards compatibility -->
<a id="schemasearchconditionseriesstatus"></a>
<a id="schema_SearchConditionSeriesStatus"></a>
<a id="tocSsearchconditionseriesstatus"></a>
<a id="tocssearchconditionseriesstatus"></a>

```json
{
  "seriesStatus": {
    "value": null,
    "operator": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|seriesStatus|[SearchOperatorEqualityStatus](#schemasearchoperatorequalitystatus)|true|none|none|

<h2 id="tocS_SearchConditionSharingLabel">SearchConditionSharingLabel</h2>
<!-- backwards compatibility -->
<a id="schemasearchconditionsharinglabel"></a>
<a id="schema_SearchConditionSharingLabel"></a>
<a id="tocSsearchconditionsharinglabel"></a>
<a id="tocssearchconditionsharinglabel"></a>

```json
{
  "sharingLabel": {
    "value": null,
    "operator": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sharingLabel|[SearchOperatorEqualityNullableString](#schemasearchoperatorequalitynullablestring)|true|none|none|

<h2 id="tocS_SearchConditionTag">SearchConditionTag</h2>
<!-- backwards compatibility -->
<a id="schemasearchconditiontag"></a>
<a id="schema_SearchConditionTag"></a>
<a id="tocSsearchconditiontag"></a>
<a id="tocssearchconditiontag"></a>

```json
{
  "tag": {
    "value": null,
    "operator": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tag|[SearchOperatorEqualityNullableString](#schemasearchoperatorequalitynullablestring)|true|none|none|

<h2 id="tocS_SearchConditionTitle">SearchConditionTitle</h2>
<!-- backwards compatibility -->
<a id="schemasearchconditiontitle"></a>
<a id="schema_SearchConditionTitle"></a>
<a id="tocSsearchconditiontitle"></a>
<a id="tocssearchconditiontitle"></a>

```json
{
  "title": {
    "value": "string",
    "operator": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|[SearchOperatorString](#schemasearchoperatorstring)|true|none|none|

<h2 id="tocS_SearchConditionTitleSort">SearchConditionTitleSort</h2>
<!-- backwards compatibility -->
<a id="schemasearchconditiontitlesort"></a>
<a id="schema_SearchConditionTitleSort"></a>
<a id="tocSsearchconditiontitlesort"></a>
<a id="tocssearchconditiontitlesort"></a>

```json
{
  "titleSort": {
    "value": "string",
    "operator": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|titleSort|[SearchOperatorString](#schemasearchoperatorstring)|true|none|none|

<h2 id="tocS_SearchOperatorAfter">SearchOperatorAfter</h2>
<!-- backwards compatibility -->
<a id="schemasearchoperatorafter"></a>
<a id="schema_SearchOperatorAfter"></a>
<a id="tocSsearchoperatorafter"></a>
<a id="tocssearchoperatorafter"></a>

```json
{
  "dateTime": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateTime|string(date-time)|true|none|none|

<h2 id="tocS_SearchOperatorBefore">SearchOperatorBefore</h2>
<!-- backwards compatibility -->
<a id="schemasearchoperatorbefore"></a>
<a id="schema_SearchOperatorBefore"></a>
<a id="tocSsearchoperatorbefore"></a>
<a id="tocssearchoperatorbefore"></a>

```json
{
  "dateTime": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateTime|string(date-time)|true|none|none|

<h2 id="tocS_SearchOperatorBeginsWith">SearchOperatorBeginsWith</h2>
<!-- backwards compatibility -->
<a id="schemasearchoperatorbeginswith"></a>
<a id="schema_SearchOperatorBeginsWith"></a>
<a id="tocSsearchoperatorbeginswith"></a>
<a id="tocssearchoperatorbeginswith"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|true|none|none|

<h2 id="tocS_SearchOperatorBoolean">SearchOperatorBoolean</h2>
<!-- backwards compatibility -->
<a id="schemasearchoperatorboolean"></a>
<a id="schema_SearchOperatorBoolean"></a>
<a id="tocSsearchoperatorboolean"></a>
<a id="tocssearchoperatorboolean"></a>

```json
{
  "operator": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|none|
|*oneOf*|[SearchOperatorIsTrue](#schemasearchoperatoristrue)|false|none|none|
|*oneOf*|[SearchOperatorIsFalse](#schemasearchoperatorisfalse)|false|none|none|

<h2 id="tocS_SearchOperatorContains">SearchOperatorContains</h2>
<!-- backwards compatibility -->
<a id="schemasearchoperatorcontains"></a>
<a id="schema_SearchOperatorContains"></a>
<a id="tocSsearchoperatorcontains"></a>
<a id="tocssearchoperatorcontains"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|true|none|none|

<h2 id="tocS_SearchOperatorDate">SearchOperatorDate</h2>
<!-- backwards compatibility -->
<a id="schemasearchoperatordate"></a>
<a id="schema_SearchOperatorDate"></a>
<a id="tocSsearchoperatordate"></a>
<a id="tocssearchoperatordate"></a>

```json
{
  "dateTime": "1970-01-01T00:00:00Z",
  "operator": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|none|
|*oneOf*|[SearchOperatorBefore](#schemasearchoperatorbefore)|false|none|none|
|*oneOf*|[SearchOperatorAfter](#schemasearchoperatorafter)|false|none|none|
|*oneOf*|[SearchOperatorIsInTheLast](#schemasearchoperatorisinthelast)|false|none|none|
|*oneOf*|[SearchOperatorIsNotInTheLast](#schemasearchoperatorisnotinthelast)|false|none|none|
|*oneOf*|[SearchOperatorIsNull](#schemasearchoperatorisnull)|false|none|none|
|*oneOf*|[SearchOperatorIsNotNull](#schemasearchoperatorisnotnull)|false|none|none|

<h2 id="tocS_SearchOperatorDoesNotBeginWith">SearchOperatorDoesNotBeginWith</h2>
<!-- backwards compatibility -->
<a id="schemasearchoperatordoesnotbeginwith"></a>
<a id="schema_SearchOperatorDoesNotBeginWith"></a>
<a id="tocSsearchoperatordoesnotbeginwith"></a>
<a id="tocssearchoperatordoesnotbeginwith"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|true|none|none|

<h2 id="tocS_SearchOperatorDoesNotContain">SearchOperatorDoesNotContain</h2>
<!-- backwards compatibility -->
<a id="schemasearchoperatordoesnotcontain"></a>
<a id="schema_SearchOperatorDoesNotContain"></a>
<a id="tocSsearchoperatordoesnotcontain"></a>
<a id="tocssearchoperatordoesnotcontain"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|true|none|none|

<h2 id="tocS_SearchOperatorDoesNotEndWith">SearchOperatorDoesNotEndWith</h2>
<!-- backwards compatibility -->
<a id="schemasearchoperatordoesnotendwith"></a>
<a id="schema_SearchOperatorDoesNotEndWith"></a>
<a id="tocSsearchoperatordoesnotendwith"></a>
<a id="tocssearchoperatordoesnotendwith"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|true|none|none|

<h2 id="tocS_SearchOperatorEndsWith">SearchOperatorEndsWith</h2>
<!-- backwards compatibility -->
<a id="schemasearchoperatorendswith"></a>
<a id="schema_SearchOperatorEndsWith"></a>
<a id="tocSsearchoperatorendswith"></a>
<a id="tocssearchoperatorendswith"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|true|none|none|

<h2 id="tocS_SearchOperatorEqualityAuthorMatch">SearchOperatorEqualityAuthorMatch</h2>
<!-- backwards compatibility -->
<a id="schemasearchoperatorequalityauthormatch"></a>
<a id="schema_SearchOperatorEqualityAuthorMatch"></a>
<a id="tocSsearchoperatorequalityauthormatch"></a>
<a id="tocssearchoperatorequalityauthormatch"></a>

```json
{
  "value": null,
  "operator": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|none|
|*oneOf*|[SearchOperatorIs](#schemasearchoperatoris)|false|none|none|
|*oneOf*|[SearchOperatorIsNot](#schemasearchoperatorisnot)|false|none|none|

<h2 id="tocS_SearchOperatorEqualityMediaProfile">SearchOperatorEqualityMediaProfile</h2>
<!-- backwards compatibility -->
<a id="schemasearchoperatorequalitymediaprofile"></a>
<a id="schema_SearchOperatorEqualityMediaProfile"></a>
<a id="tocSsearchoperatorequalitymediaprofile"></a>
<a id="tocssearchoperatorequalitymediaprofile"></a>

```json
{
  "value": null,
  "operator": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|none|
|*oneOf*|[SearchOperatorIs](#schemasearchoperatoris)|false|none|none|
|*oneOf*|[SearchOperatorIsNot](#schemasearchoperatorisnot)|false|none|none|

<h2 id="tocS_SearchOperatorEqualityNotableEntityMatch">SearchOperatorEqualityNotableEntityMatch</h2>
<!-- backwards compatibility -->
<a id="schemasearchoperatorequalitynotableentitymatch"></a>
<a id="schema_SearchOperatorEqualityNotableEntityMatch"></a>
<a id="tocSsearchoperatorequalitynotableentitymatch"></a>
<a id="tocssearchoperatorequalitynotableentitymatch"></a>

```json
{
  "value": null,
  "operator": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|none|
|*oneOf*|[SearchOperatorIs](#schemasearchoperatoris)|false|none|none|
|*oneOf*|[SearchOperatorIsNot](#schemasearchoperatorisnot)|false|none|none|

<h2 id="tocS_SearchOperatorEqualityNullableString">SearchOperatorEqualityNullableString</h2>
<!-- backwards compatibility -->
<a id="schemasearchoperatorequalitynullablestring"></a>
<a id="schema_SearchOperatorEqualityNullableString"></a>
<a id="tocSsearchoperatorequalitynullablestring"></a>
<a id="tocssearchoperatorequalitynullablestring"></a>

```json
{
  "value": null,
  "operator": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|none|
|*oneOf*|[SearchOperatorIs](#schemasearchoperatoris)|false|none|none|
|*oneOf*|[SearchOperatorIsNot](#schemasearchoperatorisnot)|false|none|none|
|*oneOf*|[SearchOperatorIsNullT](#schemasearchoperatorisnullt)|false|none|none|
|*oneOf*|[SearchOperatorIsNotNullT](#schemasearchoperatorisnotnullt)|false|none|none|

<h2 id="tocS_SearchOperatorEqualityPosterMatch">SearchOperatorEqualityPosterMatch</h2>
<!-- backwards compatibility -->
<a id="schemasearchoperatorequalitypostermatch"></a>
<a id="schema_SearchOperatorEqualityPosterMatch"></a>
<a id="tocSsearchoperatorequalitypostermatch"></a>
<a id="tocssearchoperatorequalitypostermatch"></a>

```json
{
  "value": null,
  "operator": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|none|
|*oneOf*|[SearchOperatorIs](#schemasearchoperatoris)|false|none|none|
|*oneOf*|[SearchOperatorIsNot](#schemasearchoperatorisnot)|false|none|none|

<h2 id="tocS_SearchOperatorEqualityReadStatus">SearchOperatorEqualityReadStatus</h2>
<!-- backwards compatibility -->
<a id="schemasearchoperatorequalityreadstatus"></a>
<a id="schema_SearchOperatorEqualityReadStatus"></a>
<a id="tocSsearchoperatorequalityreadstatus"></a>
<a id="tocssearchoperatorequalityreadstatus"></a>

```json
{
  "value": null,
  "operator": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|none|
|*oneOf*|[SearchOperatorIs](#schemasearchoperatoris)|false|none|none|
|*oneOf*|[SearchOperatorIsNot](#schemasearchoperatorisnot)|false|none|none|

<h2 id="tocS_SearchOperatorEqualityStatus">SearchOperatorEqualityStatus</h2>
<!-- backwards compatibility -->
<a id="schemasearchoperatorequalitystatus"></a>
<a id="schema_SearchOperatorEqualityStatus"></a>
<a id="tocSsearchoperatorequalitystatus"></a>
<a id="tocssearchoperatorequalitystatus"></a>

```json
{
  "value": null,
  "operator": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|none|
|*oneOf*|[SearchOperatorIs](#schemasearchoperatoris)|false|none|none|
|*oneOf*|[SearchOperatorIsNot](#schemasearchoperatorisnot)|false|none|none|

<h2 id="tocS_SearchOperatorEqualityString">SearchOperatorEqualityString</h2>
<!-- backwards compatibility -->
<a id="schemasearchoperatorequalitystring"></a>
<a id="schema_SearchOperatorEqualityString"></a>
<a id="tocSsearchoperatorequalitystring"></a>
<a id="tocssearchoperatorequalitystring"></a>

```json
{
  "value": null,
  "operator": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|none|
|*oneOf*|[SearchOperatorIs](#schemasearchoperatoris)|false|none|none|
|*oneOf*|[SearchOperatorIsNot](#schemasearchoperatorisnot)|false|none|none|

<h2 id="tocS_SearchOperatorGreaterThan">SearchOperatorGreaterThan</h2>
<!-- backwards compatibility -->
<a id="schemasearchoperatorgreaterthan"></a>
<a id="schema_SearchOperatorGreaterThan"></a>
<a id="tocSsearchoperatorgreaterthan"></a>
<a id="tocssearchoperatorgreaterthan"></a>

```json
{
  "value": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|object|true|none|none|

<h2 id="tocS_SearchOperatorIs">SearchOperatorIs</h2>
<!-- backwards compatibility -->
<a id="schemasearchoperatoris"></a>
<a id="schema_SearchOperatorIs"></a>
<a id="tocSsearchoperatoris"></a>
<a id="tocssearchoperatoris"></a>

```json
{
  "value": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|object|true|none|none|

<h2 id="tocS_SearchOperatorIsFalse">SearchOperatorIsFalse</h2>
<!-- backwards compatibility -->
<a id="schemasearchoperatorisfalse"></a>
<a id="schema_SearchOperatorIsFalse"></a>
<a id="tocSsearchoperatorisfalse"></a>
<a id="tocssearchoperatorisfalse"></a>

```json
{
  "operator": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|none|
|*oneOf*|[SearchOperatorIsTrue](#schemasearchoperatoristrue)|false|none|none|
|*oneOf*|[SearchOperatorIsFalse](#schemasearchoperatorisfalse)|false|none|none|

<h2 id="tocS_SearchOperatorIsInTheLast">SearchOperatorIsInTheLast</h2>
<!-- backwards compatibility -->
<a id="schemasearchoperatorisinthelast"></a>
<a id="schema_SearchOperatorIsInTheLast"></a>
<a id="tocSsearchoperatorisinthelast"></a>
<a id="tocssearchoperatorisinthelast"></a>

```json
{
  "duration": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duration|string|true|none|none|

<h2 id="tocS_SearchOperatorIsNot">SearchOperatorIsNot</h2>
<!-- backwards compatibility -->
<a id="schemasearchoperatorisnot"></a>
<a id="schema_SearchOperatorIsNot"></a>
<a id="tocSsearchoperatorisnot"></a>
<a id="tocssearchoperatorisnot"></a>

```json
{
  "value": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|object|true|none|none|

<h2 id="tocS_SearchOperatorIsNotInTheLast">SearchOperatorIsNotInTheLast</h2>
<!-- backwards compatibility -->
<a id="schemasearchoperatorisnotinthelast"></a>
<a id="schema_SearchOperatorIsNotInTheLast"></a>
<a id="tocSsearchoperatorisnotinthelast"></a>
<a id="tocssearchoperatorisnotinthelast"></a>

```json
{
  "duration": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duration|string|true|none|none|

<h2 id="tocS_SearchOperatorIsNotNull">SearchOperatorIsNotNull</h2>
<!-- backwards compatibility -->
<a id="schemasearchoperatorisnotnull"></a>
<a id="schema_SearchOperatorIsNotNull"></a>
<a id="tocSsearchoperatorisnotnull"></a>
<a id="tocssearchoperatorisnotnull"></a>

```json
{
  "dateTime": "1970-01-01T00:00:00Z",
  "operator": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|none|
|*oneOf*|[SearchOperatorBefore](#schemasearchoperatorbefore)|false|none|none|
|*oneOf*|[SearchOperatorAfter](#schemasearchoperatorafter)|false|none|none|
|*oneOf*|[SearchOperatorIsInTheLast](#schemasearchoperatorisinthelast)|false|none|none|
|*oneOf*|[SearchOperatorIsNotInTheLast](#schemasearchoperatorisnotinthelast)|false|none|none|
|*oneOf*|[SearchOperatorIsNull](#schemasearchoperatorisnull)|false|none|none|
|*oneOf*|[SearchOperatorIsNotNull](#schemasearchoperatorisnotnull)|false|none|none|

<h2 id="tocS_SearchOperatorIsNotNullT">SearchOperatorIsNotNullT</h2>
<!-- backwards compatibility -->
<a id="schemasearchoperatorisnotnullt"></a>
<a id="schema_SearchOperatorIsNotNullT"></a>
<a id="tocSsearchoperatorisnotnullt"></a>
<a id="tocssearchoperatorisnotnullt"></a>

```json
{
  "value": null,
  "operator": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|none|
|*oneOf*|[SearchOperatorGreaterThan](#schemasearchoperatorgreaterthan)|false|none|none|
|*oneOf*|[SearchOperatorLessThan](#schemasearchoperatorlessthan)|false|none|none|
|*oneOf*|[SearchOperatorIsNullT](#schemasearchoperatorisnullt)|false|none|none|
|*oneOf*|[SearchOperatorIsNotNullT](#schemasearchoperatorisnotnullt)|false|none|none|
|*oneOf*|[SearchOperatorIs](#schemasearchoperatoris)|false|none|none|
|*oneOf*|[SearchOperatorIsNot](#schemasearchoperatorisnot)|false|none|none|
|operator|string|true|none|none|
|*oneOf*|[SearchOperatorIs](#schemasearchoperatoris)|false|none|none|
|*oneOf*|[SearchOperatorIsNot](#schemasearchoperatorisnot)|false|none|none|
|*oneOf*|[SearchOperatorIsNullT](#schemasearchoperatorisnullt)|false|none|none|
|*oneOf*|[SearchOperatorIsNotNullT](#schemasearchoperatorisnotnullt)|false|none|none|

<h2 id="tocS_SearchOperatorIsNull">SearchOperatorIsNull</h2>
<!-- backwards compatibility -->
<a id="schemasearchoperatorisnull"></a>
<a id="schema_SearchOperatorIsNull"></a>
<a id="tocSsearchoperatorisnull"></a>
<a id="tocssearchoperatorisnull"></a>

```json
{
  "dateTime": "1970-01-01T00:00:00Z",
  "operator": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|none|
|*oneOf*|[SearchOperatorBefore](#schemasearchoperatorbefore)|false|none|none|
|*oneOf*|[SearchOperatorAfter](#schemasearchoperatorafter)|false|none|none|
|*oneOf*|[SearchOperatorIsInTheLast](#schemasearchoperatorisinthelast)|false|none|none|
|*oneOf*|[SearchOperatorIsNotInTheLast](#schemasearchoperatorisnotinthelast)|false|none|none|
|*oneOf*|[SearchOperatorIsNull](#schemasearchoperatorisnull)|false|none|none|
|*oneOf*|[SearchOperatorIsNotNull](#schemasearchoperatorisnotnull)|false|none|none|

<h2 id="tocS_SearchOperatorIsNullT">SearchOperatorIsNullT</h2>
<!-- backwards compatibility -->
<a id="schemasearchoperatorisnullt"></a>
<a id="schema_SearchOperatorIsNullT"></a>
<a id="tocSsearchoperatorisnullt"></a>
<a id="tocssearchoperatorisnullt"></a>

```json
{
  "value": null,
  "operator": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|none|
|*oneOf*|[SearchOperatorGreaterThan](#schemasearchoperatorgreaterthan)|false|none|none|
|*oneOf*|[SearchOperatorLessThan](#schemasearchoperatorlessthan)|false|none|none|
|*oneOf*|[SearchOperatorIsNullT](#schemasearchoperatorisnullt)|false|none|none|
|*oneOf*|[SearchOperatorIsNotNullT](#schemasearchoperatorisnotnullt)|false|none|none|
|*oneOf*|[SearchOperatorIs](#schemasearchoperatoris)|false|none|none|
|*oneOf*|[SearchOperatorIsNot](#schemasearchoperatorisnot)|false|none|none|
|operator|string|true|none|none|
|*oneOf*|[SearchOperatorIs](#schemasearchoperatoris)|false|none|none|
|*oneOf*|[SearchOperatorIsNot](#schemasearchoperatorisnot)|false|none|none|
|*oneOf*|[SearchOperatorIsNullT](#schemasearchoperatorisnullt)|false|none|none|
|*oneOf*|[SearchOperatorIsNotNullT](#schemasearchoperatorisnotnullt)|false|none|none|

<h2 id="tocS_SearchOperatorIsTrue">SearchOperatorIsTrue</h2>
<!-- backwards compatibility -->
<a id="schemasearchoperatoristrue"></a>
<a id="schema_SearchOperatorIsTrue"></a>
<a id="tocSsearchoperatoristrue"></a>
<a id="tocssearchoperatoristrue"></a>

```json
{
  "operator": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|none|
|*oneOf*|[SearchOperatorIsTrue](#schemasearchoperatoristrue)|false|none|none|
|*oneOf*|[SearchOperatorIsFalse](#schemasearchoperatorisfalse)|false|none|none|

<h2 id="tocS_SearchOperatorLessThan">SearchOperatorLessThan</h2>
<!-- backwards compatibility -->
<a id="schemasearchoperatorlessthan"></a>
<a id="schema_SearchOperatorLessThan"></a>
<a id="tocSsearchoperatorlessthan"></a>
<a id="tocssearchoperatorlessthan"></a>

```json
{
  "value": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|object|true|none|none|

<h2 id="tocS_SearchOperatorNumericNullableInteger">SearchOperatorNumericNullableInteger</h2>
<!-- backwards compatibility -->
<a id="schemasearchoperatornumericnullableinteger"></a>
<a id="schema_SearchOperatorNumericNullableInteger"></a>
<a id="tocSsearchoperatornumericnullableinteger"></a>
<a id="tocssearchoperatornumericnullableinteger"></a>

```json
{
  "value": null,
  "operator": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|none|
|*oneOf*|[SearchOperatorGreaterThan](#schemasearchoperatorgreaterthan)|false|none|none|
|*oneOf*|[SearchOperatorLessThan](#schemasearchoperatorlessthan)|false|none|none|
|*oneOf*|[SearchOperatorIsNullT](#schemasearchoperatorisnullt)|false|none|none|
|*oneOf*|[SearchOperatorIsNotNullT](#schemasearchoperatorisnotnullt)|false|none|none|
|*oneOf*|[SearchOperatorIs](#schemasearchoperatoris)|false|none|none|
|*oneOf*|[SearchOperatorIsNot](#schemasearchoperatorisnot)|false|none|none|

<h2 id="tocS_SearchOperatorNumericTFloat">SearchOperatorNumericTFloat</h2>
<!-- backwards compatibility -->
<a id="schemasearchoperatornumerictfloat"></a>
<a id="schema_SearchOperatorNumericTFloat"></a>
<a id="tocSsearchoperatornumerictfloat"></a>
<a id="tocssearchoperatornumerictfloat"></a>

```json
{
  "value": null,
  "operator": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|none|
|*oneOf*|[SearchOperatorGreaterThan](#schemasearchoperatorgreaterthan)|false|none|none|
|*oneOf*|[SearchOperatorLessThan](#schemasearchoperatorlessthan)|false|none|none|
|*oneOf*|[SearchOperatorIs](#schemasearchoperatoris)|false|none|none|
|*oneOf*|[SearchOperatorIsNot](#schemasearchoperatorisnot)|false|none|none|

<h2 id="tocS_SearchOperatorString">SearchOperatorString</h2>
<!-- backwards compatibility -->
<a id="schemasearchoperatorstring"></a>
<a id="schema_SearchOperatorString"></a>
<a id="tocSsearchoperatorstring"></a>
<a id="tocssearchoperatorstring"></a>

```json
{
  "value": "string",
  "operator": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|none|
|*oneOf*|[SearchOperatorBeginsWith](#schemasearchoperatorbeginswith)|false|none|none|
|*oneOf*|[SearchOperatorDoesNotBeginWith](#schemasearchoperatordoesnotbeginwith)|false|none|none|
|*oneOf*|[SearchOperatorContains](#schemasearchoperatorcontains)|false|none|none|
|*oneOf*|[SearchOperatorDoesNotContain](#schemasearchoperatordoesnotcontain)|false|none|none|
|*oneOf*|[SearchOperatorEndsWith](#schemasearchoperatorendswith)|false|none|none|
|*oneOf*|[SearchOperatorDoesNotEndWith](#schemasearchoperatordoesnotendwith)|false|none|none|
|*oneOf*|[SearchOperatorIs](#schemasearchoperatoris)|false|none|none|
|*oneOf*|[SearchOperatorIsNot](#schemasearchoperatorisnot)|false|none|none|

<h2 id="tocS_SeriesDto">SeriesDto</h2>
<!-- backwards compatibility -->
<a id="schemaseriesdto"></a>
<a id="schema_SeriesDto"></a>
<a id="tocSseriesdto"></a>
<a id="tocsseriesdto"></a>

```json
{
  "booksCount": 0,
  "booksInProgressCount": 0,
  "booksMetadata": {
    "authors": [
      {
        "name": "string",
        "role": "string"
      }
    ],
    "created": "1970-01-01T00:00:00Z",
    "lastModified": "1970-01-01T00:00:00Z",
    "notableEntities": [
      {
        "kind": "string",
        "name": "string"
      }
    ],
    "releaseDate": "1970-01-01",
    "summary": "string",
    "summaryNumber": "string",
    "tags": [
      "string"
    ]
  },
  "booksReadCount": 0,
  "booksUnreadCount": 0,
  "created": "1970-01-01T00:00:00Z",
  "deleted": true,
  "fileLastModified": "1970-01-01T00:00:00Z",
  "id": "string",
  "lastModified": "1970-01-01T00:00:00Z",
  "libraryId": "string",
  "metadata": {
    "ageRating": 0,
    "ageRatingLock": true,
    "alternateTitles": [
      {
        "label": "string",
        "title": "string"
      }
    ],
    "alternateTitlesLock": true,
    "created": "1970-01-01T00:00:00Z",
    "genres": [
      "string"
    ],
    "genresLock": true,
    "language": "string",
    "languageLock": true,
    "lastModified": "1970-01-01T00:00:00Z",
    "links": [
      {
        "label": "string",
        "url": "string"
      }
    ],
    "linksLock": true,
    "publisher": "string",
    "publisherLock": true,
    "readingDirection": "string",
    "readingDirectionLock": true,
    "sharingLabels": [
      "string"
    ],
    "sharingLabelsLock": true,
    "status": "string",
    "statusLock": true,
    "summary": "string",
    "summaryLock": true,
    "tags": [
      "string"
    ],
    "tagsLock": true,
    "title": "string",
    "titleLock": true,
    "titleSort": "string",
    "titleSortLock": true,
    "totalBookCount": 0,
    "totalBookCountLock": true
  },
  "name": "string",
  "oneshot": true,
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|booksCount|integer(int32)|true|none|none|
|booksInProgressCount|integer(int32)|true|none|none|
|booksMetadata|[BookMetadataAggregationDto](#schemabookmetadataaggregationdto)|true|none|none|
|booksReadCount|integer(int32)|true|none|none|
|booksUnreadCount|integer(int32)|true|none|none|
|created|string(date-time)|true|none|none|
|deleted|boolean|true|none|none|
|fileLastModified|string(date-time)|true|none|none|
|id|string|true|none|none|
|lastModified|string(date-time)|true|none|none|
|libraryId|string|true|none|none|
|metadata|[SeriesMetadataDto](#schemaseriesmetadatadto)|true|none|none|
|name|string|true|none|none|
|oneshot|boolean|true|none|none|
|url|string|true|none|none|

<h2 id="tocS_SeriesMetadataDto">SeriesMetadataDto</h2>
<!-- backwards compatibility -->
<a id="schemaseriesmetadatadto"></a>
<a id="schema_SeriesMetadataDto"></a>
<a id="tocSseriesmetadatadto"></a>
<a id="tocsseriesmetadatadto"></a>

```json
{
  "ageRating": 0,
  "ageRatingLock": true,
  "alternateTitles": [
    {
      "label": "string",
      "title": "string"
    }
  ],
  "alternateTitlesLock": true,
  "created": "1970-01-01T00:00:00Z",
  "genres": [
    "string"
  ],
  "genresLock": true,
  "language": "string",
  "languageLock": true,
  "lastModified": "1970-01-01T00:00:00Z",
  "links": [
    {
      "label": "string",
      "url": "string"
    }
  ],
  "linksLock": true,
  "publisher": "string",
  "publisherLock": true,
  "readingDirection": "string",
  "readingDirectionLock": true,
  "sharingLabels": [
    "string"
  ],
  "sharingLabelsLock": true,
  "status": "string",
  "statusLock": true,
  "summary": "string",
  "summaryLock": true,
  "tags": [
    "string"
  ],
  "tagsLock": true,
  "title": "string",
  "titleLock": true,
  "titleSort": "string",
  "titleSortLock": true,
  "totalBookCount": 0,
  "totalBookCountLock": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ageRating|integer(int32)|false|none|none|
|ageRatingLock|boolean|true|none|none|
|alternateTitles|[[AlternateTitleDto](#schemaalternatetitledto)]|true|none|none|
|alternateTitlesLock|boolean|true|none|none|
|created|string(date-time)|true|none|none|
|genres|[string]|true|none|none|
|genresLock|boolean|true|none|none|
|language|string|true|none|none|
|languageLock|boolean|true|none|none|
|lastModified|string(date-time)|true|none|none|
|links|[[WebLinkDto](#schemaweblinkdto)]|true|none|none|
|linksLock|boolean|true|none|none|
|publisher|string|true|none|none|
|publisherLock|boolean|true|none|none|
|readingDirection|string|true|none|none|
|readingDirectionLock|boolean|true|none|none|
|sharingLabels|[string]|true|none|none|
|sharingLabelsLock|boolean|true|none|none|
|status|string|true|none|none|
|statusLock|boolean|true|none|none|
|summary|string|true|none|none|
|summaryLock|boolean|true|none|none|
|tags|[string]|true|none|none|
|tagsLock|boolean|true|none|none|
|title|string|true|none|none|
|titleLock|boolean|true|none|none|
|titleSort|string|true|none|none|
|titleSortLock|boolean|true|none|none|
|totalBookCount|integer(int32)|false|none|none|
|totalBookCountLock|boolean|true|none|none|

<h2 id="tocS_SeriesMetadataUpdateDto">SeriesMetadataUpdateDto</h2>
<!-- backwards compatibility -->
<a id="schemaseriesmetadataupdatedto"></a>
<a id="schema_SeriesMetadataUpdateDto"></a>
<a id="tocSseriesmetadataupdatedto"></a>
<a id="tocsseriesmetadataupdatedto"></a>

```json
{
  "ageRating": 0,
  "ageRatingLock": true,
  "alternateTitles": [
    {
      "label": "string",
      "title": "string"
    }
  ],
  "alternateTitlesLock": true,
  "genres": [
    "string"
  ],
  "genresLock": true,
  "language": "string",
  "languageLock": true,
  "links": [
    {
      "label": "string",
      "url": "string"
    }
  ],
  "linksLock": true,
  "publisher": "string",
  "publisherLock": true,
  "readingDirection": "LEFT_TO_RIGHT",
  "readingDirectionLock": true,
  "sharingLabels": [
    "string"
  ],
  "sharingLabelsLock": true,
  "status": "ENDED",
  "statusLock": true,
  "summary": "string",
  "summaryLock": true,
  "tags": [
    "string"
  ],
  "tagsLock": true,
  "title": "string",
  "titleLock": true,
  "titleSort": "string",
  "titleSortLock": true,
  "totalBookCount": 0,
  "totalBookCountLock": true
}
```

Metadata fields to update. Set a field to null to unset the metadata. You can omit fields you don't want to update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ageRating|integer(int32)|false|none|none|
|ageRatingLock|boolean|false|none|none|
|alternateTitles|[[AlternateTitleUpdateDto](#schemaalternatetitleupdatedto)]|false|none|none|
|alternateTitlesLock|boolean|false|none|none|
|genres|[string]|false|none|none|
|genresLock|boolean|false|none|none|
|language|string|false|none|none|
|languageLock|boolean|false|none|none|
|links|[[WebLinkUpdateDto](#schemaweblinkupdatedto)]|false|none|none|
|linksLock|boolean|false|none|none|
|publisher|string|false|none|none|
|publisherLock|boolean|false|none|none|
|readingDirection|string|false|none|none|
|readingDirectionLock|boolean|false|none|none|
|sharingLabels|[string]|false|none|none|
|sharingLabelsLock|boolean|false|none|none|
|status|string|false|none|none|
|statusLock|boolean|false|none|none|
|summary|string|false|none|none|
|summaryLock|boolean|false|none|none|
|tags|[string]|false|none|none|
|tagsLock|boolean|false|none|none|
|title|string|false|none|none|
|titleLock|boolean|false|none|none|
|titleSort|string|false|none|none|
|titleSortLock|boolean|false|none|none|
|totalBookCount|integer(int32)|false|none|none|
|totalBookCountLock|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|readingDirection|LEFT_TO_RIGHT|
|readingDirection|RIGHT_TO_LEFT|
|readingDirection|VERTICAL|
|readingDirection|WEBTOON|
|status|ENDED|
|status|ONGOING|
|status|ABANDONED|
|status|HIATUS|

<h2 id="tocS_SeriesSearch">SeriesSearch</h2>
<!-- backwards compatibility -->
<a id="schemaseriessearch"></a>
<a id="schema_SeriesSearch"></a>
<a id="tocSseriessearch"></a>
<a id="tocsseriessearch"></a>

```json
{
  "condition": {},
  "fullTextSearch": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|condition|[SearchConditionSeries](#schemasearchconditionseries)|false|none|none|
|fullTextSearch|string|false|none|none|

<h2 id="tocS_SettingMultiSourceInteger">SettingMultiSourceInteger</h2>
<!-- backwards compatibility -->
<a id="schemasettingmultisourceinteger"></a>
<a id="schema_SettingMultiSourceInteger"></a>
<a id="tocSsettingmultisourceinteger"></a>
<a id="tocssettingmultisourceinteger"></a>

```json
{
  "configurationSource": 0,
  "databaseSource": 0,
  "effectiveValue": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configurationSource|integer(int32)|false|none|none|
|databaseSource|integer(int32)|false|none|none|
|effectiveValue|integer(int32)|false|none|none|

<h2 id="tocS_SettingMultiSourceString">SettingMultiSourceString</h2>
<!-- backwards compatibility -->
<a id="schemasettingmultisourcestring"></a>
<a id="schema_SettingMultiSourceString"></a>
<a id="tocSsettingmultisourcestring"></a>
<a id="tocssettingmultisourcestring"></a>

```json
{
  "configurationSource": "string",
  "databaseSource": "string",
  "effectiveValue": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configurationSource|string|false|none|none|
|databaseSource|string|false|none|none|
|effectiveValue|string|false|none|none|

<h2 id="tocS_SettingsDto">SettingsDto</h2>
<!-- backwards compatibility -->
<a id="schemasettingsdto"></a>
<a id="schema_SettingsDto"></a>
<a id="tocSsettingsdto"></a>
<a id="tocssettingsdto"></a>

```json
{
  "deleteEmptyCollections": true,
  "deleteEmptyReadLists": true,
  "kepubifyPath": {
    "configurationSource": "string",
    "databaseSource": "string",
    "effectiveValue": "string"
  },
  "koboPort": 0,
  "koboProxy": true,
  "maxUploadFileSizeBytes": 0,
  "nextUiAsDefault": true,
  "rememberMeDurationDays": 0,
  "serverContextPath": {
    "configurationSource": "string",
    "databaseSource": "string",
    "effectiveValue": "string"
  },
  "serverPort": {
    "configurationSource": 0,
    "databaseSource": 0,
    "effectiveValue": 0
  },
  "taskPoolSize": 0,
  "thumbnailSize": "DEFAULT"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deleteEmptyCollections|boolean|false|none|none|
|deleteEmptyReadLists|boolean|false|none|none|
|kepubifyPath|[SettingMultiSourceString](#schemasettingmultisourcestring)|false|none|none|
|koboPort|integer(int32)|false|none|none|
|koboProxy|boolean|false|none|none|
|maxUploadFileSizeBytes|integer(int64)|false|none|none|
|nextUiAsDefault|boolean|false|none|none|
|rememberMeDurationDays|integer(int64)|false|none|none|
|serverContextPath|[SettingMultiSourceString](#schemasettingmultisourcestring)|false|none|none|
|serverPort|[SettingMultiSourceInteger](#schemasettingmultisourceinteger)|false|none|none|
|taskPoolSize|integer(int32)|false|none|none|
|thumbnailSize|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|thumbnailSize|DEFAULT|
|thumbnailSize|MEDIUM|
|thumbnailSize|LARGE|
|thumbnailSize|XLARGE|

<h2 id="tocS_SettingsUpdateDto">SettingsUpdateDto</h2>
<!-- backwards compatibility -->
<a id="schemasettingsupdatedto"></a>
<a id="schema_SettingsUpdateDto"></a>
<a id="tocSsettingsupdatedto"></a>
<a id="tocssettingsupdatedto"></a>

```json
{
  "deleteEmptyCollections": true,
  "deleteEmptyReadLists": true,
  "kepubifyPath": "string",
  "koboPort": 0,
  "koboProxy": true,
  "nextUiAsDefault": true,
  "rememberMeDurationDays": 0,
  "renewRememberMeKey": true,
  "serverContextPath": "string",
  "serverPort": 0,
  "taskPoolSize": 0,
  "thumbnailSize": "DEFAULT"
}
```

Fields to update. You can omit fields you don't want to update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deleteEmptyCollections|boolean|false|none|none|
|deleteEmptyReadLists|boolean|false|none|none|
|kepubifyPath|string|false|none|**Deprecated.** Will be removed in a future version|
|koboPort|integer(int32)|false|none|none|
|koboProxy|boolean|false|none|none|
|nextUiAsDefault|boolean|false|none|none|
|rememberMeDurationDays|integer(int64)|false|none|none|
|renewRememberMeKey|boolean|false|none|none|
|serverContextPath|string|false|none|none|
|serverPort|integer(int32)|false|none|none|
|taskPoolSize|integer(int32)|false|none|none|
|thumbnailSize|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|thumbnailSize|DEFAULT|
|thumbnailSize|MEDIUM|
|thumbnailSize|LARGE|
|thumbnailSize|XLARGE|

<h2 id="tocS_SharedLibrariesUpdateDto">SharedLibrariesUpdateDto</h2>
<!-- backwards compatibility -->
<a id="schemasharedlibrariesupdatedto"></a>
<a id="schema_SharedLibrariesUpdateDto"></a>
<a id="tocSsharedlibrariesupdatedto"></a>
<a id="tocssharedlibrariesupdatedto"></a>

```json
{
  "all": true,
  "libraryIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|all|boolean|true|none|none|
|libraryIds|[string]|true|none|none|

<h2 id="tocS_SortObject">SortObject</h2>
<!-- backwards compatibility -->
<a id="schemasortobject"></a>
<a id="schema_SortObject"></a>
<a id="tocSsortobject"></a>
<a id="tocssortobject"></a>

```json
{
  "empty": true,
  "sorted": true,
  "unsorted": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|empty|boolean|false|none|none|
|sorted|boolean|false|none|none|
|unsorted|boolean|false|none|none|

<h2 id="tocS_StreamingResponseBody">StreamingResponseBody</h2>
<!-- backwards compatibility -->
<a id="schemastreamingresponsebody"></a>
<a id="schema_StreamingResponseBody"></a>
<a id="tocSstreamingresponsebody"></a>
<a id="tocsstreamingresponsebody"></a>

```json
null
```

<h2 id="tocS_TachiyomiReadProgressDto">TachiyomiReadProgressDto</h2>
<!-- backwards compatibility -->
<a id="schematachiyomireadprogressdto"></a>
<a id="schema_TachiyomiReadProgressDto"></a>
<a id="tocStachiyomireadprogressdto"></a>
<a id="tocstachiyomireadprogressdto"></a>

```json
{
  "booksCount": 0,
  "booksInProgressCount": 0,
  "booksReadCount": 0,
  "booksUnreadCount": 0,
  "lastReadContinuousIndex": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|booksCount|integer(int32)|true|none|none|
|booksInProgressCount|integer(int32)|true|none|none|
|booksReadCount|integer(int32)|true|none|none|
|booksUnreadCount|integer(int32)|true|none|none|
|lastReadContinuousIndex|integer(int32)|true|none|none|

<h2 id="tocS_TachiyomiReadProgressUpdateDto">TachiyomiReadProgressUpdateDto</h2>
<!-- backwards compatibility -->
<a id="schematachiyomireadprogressupdatedto"></a>
<a id="schema_TachiyomiReadProgressUpdateDto"></a>
<a id="tocStachiyomireadprogressupdatedto"></a>
<a id="tocstachiyomireadprogressupdatedto"></a>

```json
{
  "lastBookRead": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastBookRead|integer(int32)|true|none|none|

<h2 id="tocS_TachiyomiReadProgressUpdateV2Dto">TachiyomiReadProgressUpdateV2Dto</h2>
<!-- backwards compatibility -->
<a id="schematachiyomireadprogressupdatev2dto"></a>
<a id="schema_TachiyomiReadProgressUpdateV2Dto"></a>
<a id="tocStachiyomireadprogressupdatev2dto"></a>
<a id="tocstachiyomireadprogressupdatev2dto"></a>

```json
{
  "lastBookNumberSortRead": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastBookNumberSortRead|number(float)|true|none|none|

<h2 id="tocS_TachiyomiReadProgressV2Dto">TachiyomiReadProgressV2Dto</h2>
<!-- backwards compatibility -->
<a id="schematachiyomireadprogressv2dto"></a>
<a id="schema_TachiyomiReadProgressV2Dto"></a>
<a id="tocStachiyomireadprogressv2dto"></a>
<a id="tocstachiyomireadprogressv2dto"></a>

```json
{
  "booksCount": 0,
  "booksInProgressCount": 0,
  "booksReadCount": 0,
  "booksUnreadCount": 0,
  "lastReadContinuousNumberSort": 0,
  "maxNumberSort": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|booksCount|integer(int32)|true|none|none|
|booksInProgressCount|integer(int32)|true|none|none|
|booksReadCount|integer(int32)|true|none|none|
|booksUnreadCount|integer(int32)|true|none|none|
|lastReadContinuousNumberSort|number(float)|true|none|none|
|maxNumberSort|number(float)|true|none|none|

<h2 id="tocS_Text">Text</h2>
<!-- backwards compatibility -->
<a id="schematext"></a>
<a id="schema_Text"></a>
<a id="tocStext"></a>
<a id="tocstext"></a>

```json
{
  "after": "string",
  "before": "string",
  "highlight": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|after|string|false|none|none|
|before|string|false|none|none|
|highlight|string|false|none|none|

<h2 id="tocS_ThumbnailBookDto">ThumbnailBookDto</h2>
<!-- backwards compatibility -->
<a id="schemathumbnailbookdto"></a>
<a id="schema_ThumbnailBookDto"></a>
<a id="tocSthumbnailbookdto"></a>
<a id="tocsthumbnailbookdto"></a>

```json
{
  "bookId": "string",
  "fileSize": 0,
  "height": 0,
  "id": "string",
  "mediaType": "string",
  "selected": true,
  "type": "string",
  "width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookId|string|true|none|none|
|fileSize|integer(int64)|true|none|none|
|height|integer(int32)|true|none|none|
|id|string|true|none|none|
|mediaType|string|true|none|none|
|selected|boolean|true|none|none|
|type|string|true|none|none|
|width|integer(int32)|true|none|none|

<h2 id="tocS_ThumbnailReadListDto">ThumbnailReadListDto</h2>
<!-- backwards compatibility -->
<a id="schemathumbnailreadlistdto"></a>
<a id="schema_ThumbnailReadListDto"></a>
<a id="tocSthumbnailreadlistdto"></a>
<a id="tocsthumbnailreadlistdto"></a>

```json
{
  "fileSize": 0,
  "height": 0,
  "id": "string",
  "mediaType": "string",
  "readListId": "string",
  "selected": true,
  "type": "string",
  "width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileSize|integer(int64)|true|none|none|
|height|integer(int32)|true|none|none|
|id|string|true|none|none|
|mediaType|string|true|none|none|
|readListId|string|true|none|none|
|selected|boolean|true|none|none|
|type|string|true|none|none|
|width|integer(int32)|true|none|none|

<h2 id="tocS_ThumbnailSeriesCollectionDto">ThumbnailSeriesCollectionDto</h2>
<!-- backwards compatibility -->
<a id="schemathumbnailseriescollectiondto"></a>
<a id="schema_ThumbnailSeriesCollectionDto"></a>
<a id="tocSthumbnailseriescollectiondto"></a>
<a id="tocsthumbnailseriescollectiondto"></a>

```json
{
  "collectionId": "string",
  "fileSize": 0,
  "height": 0,
  "id": "string",
  "mediaType": "string",
  "selected": true,
  "type": "string",
  "width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collectionId|string|true|none|none|
|fileSize|integer(int64)|true|none|none|
|height|integer(int32)|true|none|none|
|id|string|true|none|none|
|mediaType|string|true|none|none|
|selected|boolean|true|none|none|
|type|string|true|none|none|
|width|integer(int32)|true|none|none|

<h2 id="tocS_ThumbnailSeriesDto">ThumbnailSeriesDto</h2>
<!-- backwards compatibility -->
<a id="schemathumbnailseriesdto"></a>
<a id="schema_ThumbnailSeriesDto"></a>
<a id="tocSthumbnailseriesdto"></a>
<a id="tocsthumbnailseriesdto"></a>

```json
{
  "fileSize": 0,
  "height": 0,
  "id": "string",
  "mediaType": "string",
  "selected": true,
  "seriesId": "string",
  "type": "string",
  "width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileSize|integer(int64)|true|none|none|
|height|integer(int32)|true|none|none|
|id|string|true|none|none|
|mediaType|string|true|none|none|
|selected|boolean|true|none|none|
|seriesId|string|true|none|none|
|type|string|true|none|none|
|width|integer(int32)|true|none|none|

<h2 id="tocS_TransientBookDto">TransientBookDto</h2>
<!-- backwards compatibility -->
<a id="schematransientbookdto"></a>
<a id="schema_TransientBookDto"></a>
<a id="tocStransientbookdto"></a>
<a id="tocstransientbookdto"></a>

```json
{
  "comment": "string",
  "fileLastModified": "1970-01-01T00:00:00Z",
  "files": [
    "string"
  ],
  "id": "string",
  "mediaType": "string",
  "name": "string",
  "number": 0,
  "pages": [
    {
      "fileName": "string",
      "height": 0,
      "mediaType": "string",
      "number": 0,
      "size": "string",
      "sizeBytes": 0,
      "width": 0
    }
  ],
  "seriesId": "string",
  "size": "string",
  "sizeBytes": 0,
  "status": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string|true|none|none|
|fileLastModified|string(date-time)|true|none|none|
|files|[string]|true|none|none|
|id|string|true|none|none|
|mediaType|string|true|none|none|
|name|string|true|none|none|
|number|number(float)|false|none|none|
|pages|[[PageDto](#schemapagedto)]|true|none|none|
|seriesId|string|false|none|none|
|size|string|true|none|none|
|sizeBytes|integer(int64)|true|none|none|
|status|string|true|none|none|
|url|string|true|none|none|

<h2 id="tocS_UserCreationDto">UserCreationDto</h2>
<!-- backwards compatibility -->
<a id="schemausercreationdto"></a>
<a id="schema_UserCreationDto"></a>
<a id="tocSusercreationdto"></a>
<a id="tocsusercreationdto"></a>

```json
{
  "ageRestriction": {
    "age": 0,
    "restriction": "ALLOW_ONLY"
  },
  "email": "string",
  "labelsAllow": [
    "string"
  ],
  "labelsExclude": [
    "string"
  ],
  "password": "string",
  "roles": [
    "string"
  ],
  "sharedLibraries": {
    "all": true,
    "libraryIds": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ageRestriction|[AgeRestrictionUpdateDto](#schemaagerestrictionupdatedto)|false|none|none|
|email|string|true|none|none|
|labelsAllow|[string]|false|none|none|
|labelsExclude|[string]|false|none|none|
|password|string|true|none|none|
|roles|[string]|true|none|none|
|sharedLibraries|[SharedLibrariesUpdateDto](#schemasharedlibrariesupdatedto)|false|none|none|

<h2 id="tocS_UserDto">UserDto</h2>
<!-- backwards compatibility -->
<a id="schemauserdto"></a>
<a id="schema_UserDto"></a>
<a id="tocSuserdto"></a>
<a id="tocsuserdto"></a>

```json
{
  "ageRestriction": {
    "age": 0,
    "restriction": "ALLOW_ONLY"
  },
  "email": "string",
  "id": "string",
  "labelsAllow": [
    "string"
  ],
  "labelsExclude": [
    "string"
  ],
  "roles": [
    "string"
  ],
  "sharedAllLibraries": true,
  "sharedLibrariesIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ageRestriction|[AgeRestrictionDto](#schemaagerestrictiondto)|false|none|none|
|email|string|true|none|none|
|id|string|true|none|none|
|labelsAllow|[string]|true|none|none|
|labelsExclude|[string]|true|none|none|
|roles|[string]|true|none|none|
|sharedAllLibraries|boolean|true|none|none|
|sharedLibrariesIds|[string]|true|none|none|

<h2 id="tocS_UserUpdateDto">UserUpdateDto</h2>
<!-- backwards compatibility -->
<a id="schemauserupdatedto"></a>
<a id="schema_UserUpdateDto"></a>
<a id="tocSuserupdatedto"></a>
<a id="tocsuserupdatedto"></a>

```json
{
  "ageRestriction": {
    "age": 0,
    "restriction": "ALLOW_ONLY"
  },
  "labelsAllow": [
    "string"
  ],
  "labelsExclude": [
    "string"
  ],
  "roles": [
    "string"
  ],
  "sharedLibraries": {
    "all": true,
    "libraryIds": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ageRestriction|[AgeRestrictionUpdateDto](#schemaagerestrictionupdatedto)|false|none|none|
|labelsAllow|[string]|false|none|none|
|labelsExclude|[string]|false|none|none|
|roles|[string]|false|none|none|
|sharedLibraries|[SharedLibrariesUpdateDto](#schemasharedlibrariesupdatedto)|false|none|none|

<h2 id="tocS_ValidationErrorResponse">ValidationErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemavalidationerrorresponse"></a>
<a id="schema_ValidationErrorResponse"></a>
<a id="tocSvalidationerrorresponse"></a>
<a id="tocsvalidationerrorresponse"></a>

```json
{
  "violations": [
    {
      "fieldName": "string",
      "message": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|violations|[[Violation](#schemaviolation)]|true|none|none|

<h2 id="tocS_Violation">Violation</h2>
<!-- backwards compatibility -->
<a id="schemaviolation"></a>
<a id="schema_Violation"></a>
<a id="tocSviolation"></a>
<a id="tocsviolation"></a>

```json
{
  "fieldName": "string",
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldName|string|false|none|none|
|message|string|false|none|none|

<h2 id="tocS_WPBelongsToDto">WPBelongsToDto</h2>
<!-- backwards compatibility -->
<a id="schemawpbelongstodto"></a>
<a id="schema_WPBelongsToDto"></a>
<a id="tocSwpbelongstodto"></a>
<a id="tocswpbelongstodto"></a>

```json
{
  "collection": [
    {
      "links": [
        {
          "height": 0,
          "href": "string",
          "properties": {
            "property1": {
              "property1": null,
              "property2": null
            },
            "property2": {
              "property1": null,
              "property2": null
            }
          },
          "rel": "string",
          "templated": true,
          "title": "string",
          "type": "string",
          "width": 0
        }
      ],
      "name": "string",
      "position": 0
    }
  ],
  "series": [
    {
      "links": [
        {
          "height": 0,
          "href": "string",
          "properties": {
            "property1": {
              "property1": null,
              "property2": null
            },
            "property2": {
              "property1": null,
              "property2": null
            }
          },
          "rel": "string",
          "templated": true,
          "title": "string",
          "type": "string",
          "width": 0
        }
      ],
      "name": "string",
      "position": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collection|[[WPContributorDto](#schemawpcontributordto)]|true|none|none|
|series|[[WPContributorDto](#schemawpcontributordto)]|true|none|none|

<h2 id="tocS_WPContributorDto">WPContributorDto</h2>
<!-- backwards compatibility -->
<a id="schemawpcontributordto"></a>
<a id="schema_WPContributorDto"></a>
<a id="tocSwpcontributordto"></a>
<a id="tocswpcontributordto"></a>

```json
{
  "links": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ],
  "name": "string",
  "position": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[WPLinkDto](#schemawplinkdto)]|true|none|none|
|name|string|true|none|none|
|position|number(float)|false|none|none|

<h2 id="tocS_WPLinkDto">WPLinkDto</h2>
<!-- backwards compatibility -->
<a id="schemawplinkdto"></a>
<a id="schema_WPLinkDto"></a>
<a id="tocSwplinkdto"></a>
<a id="tocswplinkdto"></a>

```json
{
  "height": 0,
  "href": "string",
  "properties": {
    "property1": {
      "property1": null,
      "property2": null
    },
    "property2": {
      "property1": null,
      "property2": null
    }
  },
  "rel": "string",
  "templated": true,
  "title": "string",
  "type": "string",
  "width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|integer(int32)|false|none|none|
|href|string|false|none|none|
|properties|object|true|none|none|
|rel|string|false|none|none|
|templated|boolean|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|
|width|integer(int32)|false|none|none|

<h2 id="tocS_WPMetadataDto">WPMetadataDto</h2>
<!-- backwards compatibility -->
<a id="schemawpmetadatadto"></a>
<a id="schema_WPMetadataDto"></a>
<a id="tocSwpmetadatadto"></a>
<a id="tocswpmetadatadto"></a>

```json
{
  "artist": [
    "string"
  ],
  "author": [
    "string"
  ],
  "belongsTo": {
    "collection": [
      {
        "links": [
          {
            "height": 0,
            "href": "string",
            "properties": {
              "property1": {
                "property1": null,
                "property2": null
              },
              "property2": {
                "property1": null,
                "property2": null
              }
            },
            "rel": "string",
            "templated": true,
            "title": "string",
            "type": "string",
            "width": 0
          }
        ],
        "name": "string",
        "position": 0
      }
    ],
    "series": [
      {
        "links": [
          {
            "height": 0,
            "href": "string",
            "properties": {
              "property1": {
                "property1": null,
                "property2": null
              },
              "property2": {
                "property1": null,
                "property2": null
              }
            },
            "rel": "string",
            "templated": true,
            "title": "string",
            "type": "string",
            "width": 0
          }
        ],
        "name": "string",
        "position": 0
      }
    ]
  },
  "colorist": [
    "string"
  ],
  "conformsTo": "string",
  "contributor": [
    "string"
  ],
  "description": "string",
  "editor": [
    "string"
  ],
  "identifier": "string",
  "illustrator": [
    "string"
  ],
  "inker": [
    "string"
  ],
  "language": "string",
  "letterer": [
    "string"
  ],
  "modified": "1970-01-01T00:00:00Z",
  "numberOfPages": 0,
  "penciler": [
    "string"
  ],
  "published": "1970-01-01",
  "publisher": [
    "string"
  ],
  "readingProgression": "rtl",
  "rendition": {
    "property1": null,
    "property2": null
  },
  "sortAs": "string",
  "subject": [
    "string"
  ],
  "subtitle": "string",
  "title": "string",
  "translator": [
    "string"
  ],
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artist|[string]|true|none|none|
|author|[string]|true|none|none|
|belongsTo|[WPBelongsToDto](#schemawpbelongstodto)|false|none|none|
|colorist|[string]|true|none|none|
|conformsTo|string|false|none|none|
|contributor|[string]|true|none|none|
|description|string|false|none|none|
|editor|[string]|true|none|none|
|identifier|string|false|none|none|
|illustrator|[string]|true|none|none|
|inker|[string]|true|none|none|
|language|string|false|none|none|
|letterer|[string]|true|none|none|
|modified|string(date-time)|false|none|none|
|numberOfPages|integer(int32)|false|none|none|
|penciler|[string]|true|none|none|
|published|string(date)|false|none|none|
|publisher|[string]|true|none|none|
|readingProgression|string|false|none|none|
|rendition|object|true|none|none|
|sortAs|string|false|none|none|
|subject|[string]|true|none|none|
|subtitle|string|false|none|none|
|title|string|true|none|none|
|translator|[string]|true|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|readingProgression|rtl|
|readingProgression|ltr|
|readingProgression|ttb|
|readingProgression|btt|
|readingProgression|auto|

<h2 id="tocS_WPPublicationDto">WPPublicationDto</h2>
<!-- backwards compatibility -->
<a id="schemawppublicationdto"></a>
<a id="schema_WPPublicationDto"></a>
<a id="tocSwppublicationdto"></a>
<a id="tocswppublicationdto"></a>

```json
{
  "context": "string",
  "images": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ],
  "landmarks": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ],
  "links": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ],
  "metadata": {
    "artist": [
      "string"
    ],
    "author": [
      "string"
    ],
    "belongsTo": {
      "collection": [
        {
          "links": [
            {
              "height": 0,
              "href": "string",
              "properties": {
                "property1": {
                  "property1": null,
                  "property2": null
                },
                "property2": {
                  "property1": null,
                  "property2": null
                }
              },
              "rel": "string",
              "templated": true,
              "title": "string",
              "type": "string",
              "width": 0
            }
          ],
          "name": "string",
          "position": 0
        }
      ],
      "series": [
        {
          "links": [
            {
              "height": 0,
              "href": "string",
              "properties": {
                "property1": {
                  "property1": null,
                  "property2": null
                },
                "property2": {
                  "property1": null,
                  "property2": null
                }
              },
              "rel": "string",
              "templated": true,
              "title": "string",
              "type": "string",
              "width": 0
            }
          ],
          "name": "string",
          "position": 0
        }
      ]
    },
    "colorist": [
      "string"
    ],
    "conformsTo": "string",
    "contributor": [
      "string"
    ],
    "description": "string",
    "editor": [
      "string"
    ],
    "identifier": "string",
    "illustrator": [
      "string"
    ],
    "inker": [
      "string"
    ],
    "language": "string",
    "letterer": [
      "string"
    ],
    "modified": "1970-01-01T00:00:00Z",
    "numberOfPages": 0,
    "penciler": [
      "string"
    ],
    "published": "1970-01-01",
    "publisher": [
      "string"
    ],
    "readingProgression": "rtl",
    "rendition": {
      "property1": null,
      "property2": null
    },
    "sortAs": "string",
    "subject": [
      "string"
    ],
    "subtitle": "string",
    "title": "string",
    "translator": [
      "string"
    ],
    "type": "string"
  },
  "pageList": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ],
  "readingOrder": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ],
  "resources": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ],
  "toc": [
    {
      "height": 0,
      "href": "string",
      "properties": {
        "property1": {
          "property1": null,
          "property2": null
        },
        "property2": {
          "property1": null,
          "property2": null
        }
      },
      "rel": "string",
      "templated": true,
      "title": "string",
      "type": "string",
      "width": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|string|false|none|none|
|images|[[WPLinkDto](#schemawplinkdto)]|true|none|none|
|landmarks|[[WPLinkDto](#schemawplinkdto)]|true|none|none|
|links|[[WPLinkDto](#schemawplinkdto)]|true|none|none|
|metadata|[WPMetadataDto](#schemawpmetadatadto)|true|none|none|
|pageList|[[WPLinkDto](#schemawplinkdto)]|true|none|none|
|readingOrder|[[WPLinkDto](#schemawplinkdto)]|true|none|none|
|resources|[[WPLinkDto](#schemawplinkdto)]|true|none|none|
|toc|[[WPLinkDto](#schemawplinkdto)]|true|none|none|

<h2 id="tocS_WebLinkDto">WebLinkDto</h2>
<!-- backwards compatibility -->
<a id="schemaweblinkdto"></a>
<a id="schema_WebLinkDto"></a>
<a id="tocSweblinkdto"></a>
<a id="tocsweblinkdto"></a>

```json
{
  "label": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|none|
|url|string|true|none|none|

<h2 id="tocS_WebLinkUpdateDto">WebLinkUpdateDto</h2>
<!-- backwards compatibility -->
<a id="schemaweblinkupdatedto"></a>
<a id="schema_WebLinkUpdateDto"></a>
<a id="tocSweblinkupdatedto"></a>
<a id="tocsweblinkupdatedto"></a>

```json
{
  "label": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|none|
|url|string|false|none|none|
