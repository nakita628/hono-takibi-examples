<h1 id="karakeep-api">Karakeep API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Karakeep is a self-hostable bookmarking and read-it-later service. This API allows you to manage bookmarks, lists, tags, highlights, feeds, assets, and backups programmatically.

## Authentication

All endpoints require a Bearer token passed in the `Authorization` header. You can generate an API key from the Karakeep web UI under **Settings > API Keys**.

## Pagination

List endpoints support cursor-based pagination via `cursor` and `limit` query parameters. The response includes a `nextCursor` field — pass it as the `cursor` parameter to fetch the next page. A `null` value for `nextCursor` indicates there are no more results.

## Bookmark Types

Bookmarks can be one of three types:
- **link** — A URL bookmark with optional crawled metadata.
- **text** — A plain text note.
- **asset** — An uploaded file (image or PDF).

## Rate Limiting

When rate limiting is enabled, the API enforces per-IP request limits. If you exceed the allowed number of requests within the time window, the API returns a `429 Too Many Requests` response with a message indicating how many seconds to wait before retrying.

Base URLs:

* <a href="https://try.karakeep.com/api/v1">https://try.karakeep.com/api/v1</a>

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="karakeep-api-bookmarks">Bookmarks</h1>

Manage bookmarks — create, retrieve, update, delete, search, and organize bookmarks with tags, lists, highlights, and assets.

## Get all bookmarks

<a id="opIdlistBookmarks"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/bookmarks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /bookmarks`

Retrieve a paginated list of all bookmarks for the authenticated user. Supports filtering by archived/favourited status and sorting by date.

<h3 id="get-all-bookmarks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|archived|query|boolean|false|Filter by archived status.|
|favourited|query|boolean|false|Filter by favourited status.|
|sortOrder|query|string|false|Sort order by creation date. Defaults to 'desc'.|
|limit|query|number|false|Maximum number of items to return per page.|
|cursor|query|[Cursor](#schemacursor)|false|Cursor from a previous response to fetch the next page.|
|includeContent|query|boolean|false|If set to true, the bookmark's full content (HTML, text, etc.) will be included in the response. Set to false for lighter responses when only metadata is needed.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortOrder|asc|
|sortOrder|desc|

> Example responses

> 200 Response

```json
{
  "bookmarks": [
    {
      "id": "string",
      "firstCreatedAt": "1970-01-01T00:00:00Z",
      "createdAt": "1970-01-01T00:00:00Z",
      "modifiedAt": "1970-01-01T00:00:00Z",
      "title": "string",
      "archived": true,
      "favourited": true,
      "taggingStatus": "success",
      "summarizationStatus": "success",
      "embeddingStatus": "success",
      "note": "string",
      "summary": "string",
      "source": "api",
      "userId": "string",
      "tags": [
        {
          "id": "string",
          "name": "string",
          "attachedBy": "ai"
        }
      ],
      "content": {
        "type": "link",
        "url": "string",
        "title": "string",
        "description": "string",
        "imageUrl": "string",
        "imageAssetId": "string",
        "screenshotAssetId": "string",
        "pdfAssetId": "string",
        "fullPageArchiveAssetId": "string",
        "precrawledArchiveAssetId": "string",
        "videoAssetId": "string",
        "favicon": "string",
        "htmlContent": "string",
        "contentAssetId": "string",
        "readerViewStatus": "readable",
        "readerViewScore": 0,
        "preferredPreview": "reader_view",
        "crawledAt": "1970-01-01T00:00:00Z",
        "crawlStatus": "success",
        "author": "string",
        "publisher": "string",
        "datePublished": "1970-01-01T00:00:00Z",
        "dateModified": "1970-01-01T00:00:00Z"
      },
      "assets": [
        {
          "id": "string",
          "assetType": "linkHtmlContent",
          "fileName": "string"
        }
      ]
    }
  ],
  "nextCursor": "string"
}
```

<h3 id="get-all-bookmarks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A paginated list of bookmarks.|[PaginatedBookmarks](#schemapaginatedbookmarks)|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a new bookmark

<a id="opIdcreateBookmark"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/bookmarks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "title": "string",
    "archived": true,
    "favourited": true,
    "note": "string",
    "summary": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "crawlPriority": "low",
    "importSessionId": "string",
    "source": "api",
    "type": "link",
    "url": "http://example.com",
    "precrawledArchiveId": "string"
  }'
```

`POST /bookmarks`

Create a new bookmark. The bookmark type (link, text, or asset) is determined by the `type` field in the request body. For link bookmarks, if the URL already exists, the existing bookmark is returned with a 200 status.

> Body parameter

```json
{
  "title": "string",
  "archived": true,
  "favourited": true,
  "note": "string",
  "summary": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "crawlPriority": "low",
  "importSessionId": "string",
  "source": "api",
  "type": "link",
  "url": "http://example.com",
  "precrawledArchiveId": "string"
}
```

<h3 id="create-a-new-bookmark-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|The bookmark to create.|
|» title|body|string \| null|false|none|
|» archived|body|boolean|false|none|
|» favourited|body|boolean|false|none|
|» note|body|string|false|none|
|» summary|body|string|false|none|
|» createdAt|body|string(date-time)|false|none|
|» crawlPriority|body|string|false|none|
|» importSessionId|body|string|false|none|
|» source|body|string|false|none|
|» *oneOf*|body|object|false|none|
|» type|body|string|true|none|
|» url|body|string(uri)|true|none|
|» precrawledArchiveId|body|string|false|none|
|» *oneOf*|body|object|false|none|
|» type|body|string|true|none|
|» text|body|string|true|none|
|» sourceUrl|body|string|false|none|
|» *oneOf*|body|object|false|none|
|» type|body|string|true|none|
|» assetType|body|string|true|none|
|» assetId|body|string|true|none|
|» fileName|body|string|false|none|
|» sourceUrl|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» crawlPriority|low|
|» crawlPriority|normal|
|» source|api|
|» source|web|
|» source|cli|
|» source|mobile|
|» source|extension|
|» source|singlefile|
|» source|rss|
|» source|import|
|» type|link|
|» type|text|
|» type|asset|
|» assetType|image|
|» assetType|pdf|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "firstCreatedAt": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "modifiedAt": "1970-01-01T00:00:00Z",
  "title": "string",
  "archived": true,
  "favourited": true,
  "taggingStatus": "success",
  "summarizationStatus": "success",
  "embeddingStatus": "success",
  "note": "string",
  "summary": "string",
  "source": "api",
  "userId": "string",
  "tags": [
    {
      "id": "string",
      "name": "string",
      "attachedBy": "ai"
    }
  ],
  "content": {
    "type": "link",
    "url": "string",
    "title": "string",
    "description": "string",
    "imageUrl": "string",
    "imageAssetId": "string",
    "screenshotAssetId": "string",
    "pdfAssetId": "string",
    "fullPageArchiveAssetId": "string",
    "precrawledArchiveAssetId": "string",
    "videoAssetId": "string",
    "favicon": "string",
    "htmlContent": "string",
    "contentAssetId": "string",
    "readerViewStatus": "readable",
    "readerViewScore": 0,
    "preferredPreview": "reader_view",
    "crawledAt": "1970-01-01T00:00:00Z",
    "crawlStatus": "success",
    "author": "string",
    "publisher": "string",
    "datePublished": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z"
  },
  "assets": [
    {
      "id": "string",
      "assetType": "linkHtmlContent",
      "fileName": "string"
    }
  ]
}
```

> 201 Response

```json
{
  "id": "string",
  "firstCreatedAt": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "modifiedAt": "1970-01-01T00:00:00Z",
  "title": "string",
  "archived": true,
  "favourited": true,
  "taggingStatus": "success",
  "summarizationStatus": "success",
  "embeddingStatus": "success",
  "note": "string",
  "summary": "string",
  "source": "api",
  "userId": "string",
  "tags": [
    {
      "id": "string",
      "name": "string",
      "attachedBy": "ai"
    }
  ],
  "content": {
    "type": "link",
    "url": "string",
    "title": "string",
    "description": "string",
    "imageUrl": "string",
    "imageAssetId": "string",
    "screenshotAssetId": "string",
    "pdfAssetId": "string",
    "fullPageArchiveAssetId": "string",
    "precrawledArchiveAssetId": "string",
    "videoAssetId": "string",
    "favicon": "string",
    "htmlContent": "string",
    "contentAssetId": "string",
    "readerViewStatus": "readable",
    "readerViewScore": 0,
    "preferredPreview": "reader_view",
    "crawledAt": "1970-01-01T00:00:00Z",
    "crawlStatus": "success",
    "author": "string",
    "publisher": "string",
    "datePublished": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z"
  },
  "assets": [
    {
      "id": "string",
      "assetType": "linkHtmlContent",
      "fileName": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="create-a-new-bookmark-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A bookmark with this URL already exists. The existing bookmark is returned.|[Bookmark](#schemabookmark)|
|201|Created|The bookmark was created successfully.|[Bookmark](#schemabookmark)|
|400|Bad Request|Bad request — invalid input data.|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Search bookmarks

<a id="opIdsearchBookmarks"></a>

> Code samples

```bash
curl 'http://localhost:3000/api/v1/bookmarks/search?q=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /bookmarks/search`

Search across all bookmarks using full-text, semantic, or hybrid ranking. Full-text search covers bookmark titles, content, descriptions, and notes. Results default to full-text relevance sorting; semantic and hybrid modes support relevance sorting only.

<h3 id="search-bookmarks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|The search query string.|
|searchMode|query|string|false|Search strategy. 'fts' uses full-text search, 'semantic' uses bookmark embeddings, and 'hybrid' fuses a fixed candidate window from both. Hybrid falls back to full-text search when the query contains no free-text terms or when embedding infrastructure is unavailable. Semantic hits below a minimum similarity are dropped, so semantic search may return fewer results than requested.|
|sortOrder|query|string|false|Sort order for results. Defaults to 'relevance'. Use 'asc' or 'desc' for date-based sorting.|
|limit|query|number|false|Maximum number of items to return per page.|
|cursor|query|[Cursor](#schemacursor)|false|Cursor from a previous response to fetch the next page.|
|includeContent|query|boolean|false|If set to true, the bookmark's full content (HTML, text, etc.) will be included in the response. Set to false for lighter responses when only metadata is needed.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|searchMode|fts|
|searchMode|semantic|
|searchMode|hybrid|
|sortOrder|asc|
|sortOrder|desc|
|sortOrder|relevance|

> Example responses

> 200 Response

```json
{
  "bookmarks": [
    {
      "id": "string",
      "firstCreatedAt": "1970-01-01T00:00:00Z",
      "createdAt": "1970-01-01T00:00:00Z",
      "modifiedAt": "1970-01-01T00:00:00Z",
      "title": "string",
      "archived": true,
      "favourited": true,
      "taggingStatus": "success",
      "summarizationStatus": "success",
      "embeddingStatus": "success",
      "note": "string",
      "summary": "string",
      "source": "api",
      "userId": "string",
      "tags": [
        {
          "id": "string",
          "name": "string",
          "attachedBy": "ai"
        }
      ],
      "content": {
        "type": "link",
        "url": "string",
        "title": "string",
        "description": "string",
        "imageUrl": "string",
        "imageAssetId": "string",
        "screenshotAssetId": "string",
        "pdfAssetId": "string",
        "fullPageArchiveAssetId": "string",
        "precrawledArchiveAssetId": "string",
        "videoAssetId": "string",
        "favicon": "string",
        "htmlContent": "string",
        "contentAssetId": "string",
        "readerViewStatus": "readable",
        "readerViewScore": 0,
        "preferredPreview": "reader_view",
        "crawledAt": "1970-01-01T00:00:00Z",
        "crawlStatus": "success",
        "author": "string",
        "publisher": "string",
        "datePublished": "1970-01-01T00:00:00Z",
        "dateModified": "1970-01-01T00:00:00Z"
      },
      "assets": [
        {
          "id": "string",
          "assetType": "linkHtmlContent",
          "fileName": "string"
        }
      ]
    }
  ],
  "nextCursor": "string"
}
```

<h3 id="search-bookmarks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A paginated list of bookmarks matching the search query.|[PaginatedBookmarks](#schemapaginatedbookmarks)|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Check if a URL exists in bookmarks

<a id="opIdcheckBookmarkUrl"></a>

> Code samples

```bash
curl 'http://localhost:3000/api/v1/bookmarks/check-url?url=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /bookmarks/check-url`

Check if a URL is already bookmarked. Uses substring matching to find candidates, then normalizes URLs (ignoring hash fragments and trailing slashes) for exact comparison.

<h3 id="check-if-a-url-exists-in-bookmarks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|true|The URL to check against existing bookmarks.|

> Example responses

> 200 Response

```json
{
  "bookmarkId": "string"
}
```

<h3 id="check-if-a-url-exists-in-bookmarks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Object indicating whether the URL is bookmarked. `bookmarkId` is `null` if not found.|Inline|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|

<h3 id="check-if-a-url-exists-in-bookmarks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookmarkId|string \| null|true|none|The ID of the existing bookmark, or null if the URL is not bookmarked.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get a single bookmark

<a id="opIdgetBookmark"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/bookmarks/ieidlxygmwj87oxz5hxttoc8 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /bookmarks/{bookmarkId}`

Retrieve a single bookmark by its ID, including its tags, content, and assets.

<h3 id="get-a-single-bookmark-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookmarkId|path|[BookmarkId](#schemabookmarkid)|true|The unique identifier of the bookmark.|
|includeContent|query|boolean|false|If set to true, the bookmark's full content (HTML, text, etc.) will be included in the response. Set to false for lighter responses when only metadata is needed.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "firstCreatedAt": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "modifiedAt": "1970-01-01T00:00:00Z",
  "title": "string",
  "archived": true,
  "favourited": true,
  "taggingStatus": "success",
  "summarizationStatus": "success",
  "embeddingStatus": "success",
  "note": "string",
  "summary": "string",
  "source": "api",
  "userId": "string",
  "tags": [
    {
      "id": "string",
      "name": "string",
      "attachedBy": "ai"
    }
  ],
  "content": {
    "type": "link",
    "url": "string",
    "title": "string",
    "description": "string",
    "imageUrl": "string",
    "imageAssetId": "string",
    "screenshotAssetId": "string",
    "pdfAssetId": "string",
    "fullPageArchiveAssetId": "string",
    "precrawledArchiveAssetId": "string",
    "videoAssetId": "string",
    "favicon": "string",
    "htmlContent": "string",
    "contentAssetId": "string",
    "readerViewStatus": "readable",
    "readerViewScore": 0,
    "preferredPreview": "reader_view",
    "crawledAt": "1970-01-01T00:00:00Z",
    "crawlStatus": "success",
    "author": "string",
    "publisher": "string",
    "datePublished": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z"
  },
  "assets": [
    {
      "id": "string",
      "assetType": "linkHtmlContent",
      "fileName": "string"
    }
  ]
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="get-a-single-bookmark-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested bookmark.|[Bookmark](#schemabookmark)|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|404|Not Found|Bookmark not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a bookmark

<a id="opIddeleteBookmark"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/bookmarks/ieidlxygmwj87oxz5hxttoc8 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /bookmarks/{bookmarkId}`

Permanently delete a bookmark and all its associated data (tags, highlights, assets).

<h3 id="delete-a-bookmark-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookmarkId|path|[BookmarkId](#schemabookmarkid)|true|The unique identifier of the bookmark.|

> Example responses

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="delete-a-bookmark-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content — the bookmark was deleted successfully.|None|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|404|Not Found|Bookmark not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update a bookmark

<a id="opIdupdateBookmark"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/bookmarks/ieidlxygmwj87oxz5hxttoc8 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "archived": true,
    "favourited": true,
    "summary": "string",
    "note": "string",
    "title": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "url": "http://example.com",
    "description": "string",
    "author": "string",
    "publisher": "string",
    "datePublished": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z",
    "text": "string",
    "assetContent": "string"
  }'
```

`PATCH /bookmarks/{bookmarkId}`

Partially update a bookmark. Only the fields provided in the request body will be updated. Supports updating common fields (title, note, archived, favourited) as well as type-specific fields.

> Body parameter

```json
{
  "archived": true,
  "favourited": true,
  "summary": "string",
  "note": "string",
  "title": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "url": "http://example.com",
  "description": "string",
  "author": "string",
  "publisher": "string",
  "datePublished": "1970-01-01T00:00:00Z",
  "dateModified": "1970-01-01T00:00:00Z",
  "text": "string",
  "assetContent": "string"
}
```

<h3 id="update-a-bookmark-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookmarkId|path|[BookmarkId](#schemabookmarkid)|true|The unique identifier of the bookmark.|
|body|body|object|false|The fields to update. Only the fields you want to change need to be provided.|
|» archived|body|boolean|false|none|
|» favourited|body|boolean|false|none|
|» summary|body|string \| null|false|none|
|» note|body|string|false|none|
|» title|body|string \| null|false|none|
|» createdAt|body|string(date-time)|false|none|
|» url|body|string(uri)|false|none|
|» description|body|string \| null|false|none|
|» author|body|string \| null|false|none|
|» publisher|body|string \| null|false|none|
|» datePublished|body|string(date-time) \| null|false|none|
|» dateModified|body|string(date-time) \| null|false|none|
|» text|body|string \| null|false|none|
|» assetContent|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "firstCreatedAt": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "modifiedAt": "1970-01-01T00:00:00Z",
  "title": "string",
  "archived": true,
  "favourited": true,
  "taggingStatus": "success",
  "summarizationStatus": "success",
  "embeddingStatus": "success",
  "note": "string",
  "summary": "string",
  "source": "api",
  "userId": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="update-a-bookmark-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The updated bookmark.|Inline|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|404|Not Found|Bookmark not found.|[Error](#schemaerror)|

<h3 id="update-a-bookmark-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|firstCreatedAt|string(date-time)|false|none|none|
|createdAt|string(date-time)|true|none|none|
|modifiedAt|string(date-time) \| null|true|none|none|
|title|string \| null|false|none|none|
|archived|boolean|true|none|none|
|favourited|boolean|true|none|none|
|taggingStatus|string \| null|true|none|none|
|summarizationStatus|string \| null|true|none|none|
|embeddingStatus|string \| null|true|none|none|
|note|string \| null|false|none|none|
|summary|string \| null|false|none|none|
|source|string \| null|false|none|none|
|userId|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|taggingStatus|success|
|taggingStatus|failure|
|taggingStatus|pending|
|taggingStatus|null|
|summarizationStatus|success|
|summarizationStatus|failure|
|summarizationStatus|pending|
|summarizationStatus|null|
|embeddingStatus|success|
|embeddingStatus|failure|
|embeddingStatus|pending|
|embeddingStatus|null|
|source|api|
|source|web|
|source|cli|
|source|mobile|
|source|extension|
|source|singlefile|
|source|rss|
|source|import|
|source|null|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get readable bookmark content

<a id="opIdgetBookmarkReadableContent"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/bookmarks/ieidlxygmwj87oxz5hxttoc8/content \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /bookmarks/{bookmarkId}/content`

Retrieve a bounded chunk of an agent-readable bookmark representation. Link content is rendered from extracted HTML; text and media bookmarks use their stored or extracted text. Continue reading by passing the opaque `nextCursor` from the previous response.

<h3 id="get-readable-bookmark-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookmarkId|path|[BookmarkId](#schemabookmarkid)|true|The unique identifier of the bookmark.|
|format|query|string|false|The readable representation. If omitted with a cursor, the cursor's format is used; otherwise defaults to markdown.|
|maxChars|query|integer|false|Maximum number of Unicode characters to return. The chunk may end earlier at a paragraph or line boundary.|
|cursor|query|string|false|Opaque continuation cursor returned as `nextCursor` by a previous response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|markdown|
|format|text|

> Example responses

> 200 Response

```json
{
  "bookmarkId": "string",
  "bookmarkType": "link",
  "format": "markdown",
  "content": "string",
  "contentVersion": "string",
  "range": {
    "start": 0,
    "end": 0,
    "total": 0
  },
  "nextCursor": "string",
  "truncated": true
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

> 409 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="get-readable-bookmark-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A bounded chunk of readable bookmark content.|[BookmarkReadableContent](#schemabookmarkreadablecontent)|
|400|Bad Request|Bad request — the cursor is malformed, mismatched, or outside the content.|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|404|Not Found|Bookmark not found.|[Error](#schemaerror)|
|409|Conflict|The bookmark content changed after the supplied cursor was issued.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Summarize a bookmark

<a id="opIdsummarizeBookmark"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/bookmarks/ieidlxygmwj87oxz5hxttoc8/summarize \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /bookmarks/{bookmarkId}/summarize`

Trigger AI summarization for a bookmark. The summary is generated asynchronously and attached to the bookmark. Returns the updated bookmark record.

<h3 id="summarize-a-bookmark-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookmarkId|path|[BookmarkId](#schemabookmarkid)|true|The unique identifier of the bookmark.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "firstCreatedAt": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "modifiedAt": "1970-01-01T00:00:00Z",
  "title": "string",
  "archived": true,
  "favourited": true,
  "taggingStatus": "success",
  "summarizationStatus": "success",
  "embeddingStatus": "success",
  "note": "string",
  "summary": "string",
  "source": "api",
  "userId": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="summarize-a-bookmark-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The bookmark with the updated summary.|Inline|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|404|Not Found|Bookmark not found.|[Error](#schemaerror)|

<h3 id="summarize-a-bookmark-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|firstCreatedAt|string(date-time)|false|none|none|
|createdAt|string(date-time)|true|none|none|
|modifiedAt|string(date-time) \| null|true|none|none|
|title|string \| null|false|none|none|
|archived|boolean|true|none|none|
|favourited|boolean|true|none|none|
|taggingStatus|string \| null|true|none|none|
|summarizationStatus|string \| null|true|none|none|
|embeddingStatus|string \| null|true|none|none|
|note|string \| null|false|none|none|
|summary|string \| null|false|none|none|
|source|string \| null|false|none|none|
|userId|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|taggingStatus|success|
|taggingStatus|failure|
|taggingStatus|pending|
|taggingStatus|null|
|summarizationStatus|success|
|summarizationStatus|failure|
|summarizationStatus|pending|
|summarizationStatus|null|
|embeddingStatus|success|
|embeddingStatus|failure|
|embeddingStatus|pending|
|embeddingStatus|null|
|source|api|
|source|web|
|source|cli|
|source|mobile|
|source|extension|
|source|singlefile|
|source|rss|
|source|import|
|source|null|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Attach tags to a bookmark

<a id="opIdattachTagsToBookmark"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/bookmarks/ieidlxygmwj87oxz5hxttoc8/tags \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "tags": [
      {
        "tagId": "string",
        "tagName": "string",
        "attachedBy": "human"
      }
    ]
  }'
```

`POST /bookmarks/{bookmarkId}/tags`

Attach one or more tags to a bookmark. Tags can be identified by ID or name. If a tag name is provided and the tag doesn't exist, it will be created automatically.

> Body parameter

```json
{
  "tags": [
    {
      "tagId": "string",
      "tagName": "string",
      "attachedBy": "human"
    }
  ]
}
```

<h3 id="attach-tags-to-a-bookmark-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookmarkId|path|[BookmarkId](#schemabookmarkid)|true|The unique identifier of the bookmark.|
|body|body|object|false|The tags to attach. Each tag must have either a `tagId` or a `tagName`.|
|» tags|body|[object]|true|none|
|» » tagId|body|string|false|none|
|» » tagName|body|string|false|none|
|» » attachedBy|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » attachedBy|ai|
|» » attachedBy|human|

> Example responses

> 200 Response

```json
{
  "attached": [
    "ieidlxygmwj87oxz5hxttoc8"
  ]
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="attach-tags-to-a-bookmark-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The IDs of the tags that were attached.|Inline|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|404|Not Found|Bookmark not found.|[Error](#schemaerror)|

<h3 id="attach-tags-to-a-bookmark-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attached|[[TagId](#schematagid)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Detach tags from a bookmark

<a id="opIddetachTagsFromBookmark"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/bookmarks/ieidlxygmwj87oxz5hxttoc8/tags \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "tags": [
      {
        "tagId": "string",
        "tagName": "string",
        "attachedBy": "human"
      }
    ]
  }'
```

`DELETE /bookmarks/{bookmarkId}/tags`

Detach one or more tags from a bookmark. Tags can be identified by ID or name.

> Body parameter

```json
{
  "tags": [
    {
      "tagId": "string",
      "tagName": "string",
      "attachedBy": "human"
    }
  ]
}
```

<h3 id="detach-tags-from-a-bookmark-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookmarkId|path|[BookmarkId](#schemabookmarkid)|true|The unique identifier of the bookmark.|
|body|body|object|false|The tags to detach. Each tag must have either a `tagId` or a `tagName`.|
|» tags|body|[object]|true|none|
|» » tagId|body|string|false|none|
|» » tagName|body|string|false|none|
|» » attachedBy|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » attachedBy|ai|
|» » attachedBy|human|

> Example responses

> 200 Response

```json
{
  "detached": [
    "ieidlxygmwj87oxz5hxttoc8"
  ]
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="detach-tags-from-a-bookmark-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The IDs of the tags that were detached.|Inline|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|404|Not Found|Bookmark not found.|[Error](#schemaerror)|

<h3 id="detach-tags-from-a-bookmark-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detached|[[TagId](#schematagid)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get lists of a bookmark

<a id="opIdgetBookmarkLists"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/bookmarks/ieidlxygmwj87oxz5hxttoc8/lists \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /bookmarks/{bookmarkId}/lists`

Retrieve all lists that contain the specified bookmark.

<h3 id="get-lists-of-a-bookmark-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookmarkId|path|[BookmarkId](#schemabookmarkid)|true|The unique identifier of the bookmark.|

> Example responses

> 200 Response

```json
{
  "lists": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "icon": "string",
      "parentId": "string",
      "type": "manual",
      "query": "string",
      "public": true,
      "hasCollaborators": true,
      "userRole": "owner"
    }
  ]
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="get-lists-of-a-bookmark-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The lists that contain this bookmark.|Inline|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|404|Not Found|Bookmark not found.|[Error](#schemaerror)|

<h3 id="get-lists-of-a-bookmark-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lists|[[List](#schemalist)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get highlights of a bookmark

<a id="opIdgetBookmarkHighlights"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/bookmarks/ieidlxygmwj87oxz5hxttoc8/highlights \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /bookmarks/{bookmarkId}/highlights`

Retrieve all text highlights within the specified bookmark.

<h3 id="get-highlights-of-a-bookmark-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookmarkId|path|[BookmarkId](#schemabookmarkid)|true|The unique identifier of the bookmark.|

> Example responses

> 200 Response

```json
{
  "highlights": [
    {
      "bookmarkId": "string",
      "startOffset": 0,
      "endOffset": 0,
      "color": "yellow",
      "text": "string",
      "note": "string",
      "id": "string",
      "userId": "string",
      "createdAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="get-highlights-of-a-bookmark-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The highlights within this bookmark.|Inline|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|404|Not Found|Bookmark not found.|[Error](#schemaerror)|

<h3 id="get-highlights-of-a-bookmark-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|highlights|[[Highlight](#schemahighlight)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Attach asset to a bookmark

<a id="opIdattachAssetToBookmark"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/bookmarks/ieidlxygmwj87oxz5hxttoc8/assets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "assetType": "linkHtmlContent"
  }'
```

`POST /bookmarks/{bookmarkId}/assets`

Attach a previously uploaded asset to a bookmark. The asset must be uploaded first via the POST /assets endpoint.

> Body parameter

```json
{
  "id": "string",
  "assetType": "linkHtmlContent"
}
```

<h3 id="attach-asset-to-a-bookmark-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookmarkId|path|[BookmarkId](#schemabookmarkid)|true|The unique identifier of the bookmark.|
|body|body|object|false|The asset ID and type to attach.|
|» id|body|string|true|The ID of the previously uploaded asset.|
|» assetType|body|string|true|The type classification for this asset.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» assetType|linkHtmlContent|
|» assetType|screenshot|
|» assetType|pdf|
|» assetType|assetScreenshot|
|» assetType|bannerImage|
|» assetType|fullPageArchive|
|» assetType|video|
|» assetType|bookmarkAsset|
|» assetType|precrawledArchive|
|» assetType|userUploaded|
|» assetType|avatar|
|» assetType|unknown|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "assetType": "linkHtmlContent",
  "fileName": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="attach-asset-to-a-bookmark-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The asset was attached successfully.|Inline|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|404|Not Found|Bookmark not found.|[Error](#schemaerror)|

<h3 id="attach-asset-to-a-bookmark-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|assetType|string|true|none|none|
|fileName|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|assetType|linkHtmlContent|
|assetType|screenshot|
|assetType|pdf|
|assetType|assetScreenshot|
|assetType|bannerImage|
|assetType|fullPageArchive|
|assetType|video|
|assetType|bookmarkAsset|
|assetType|precrawledArchive|
|assetType|userUploaded|
|assetType|avatar|
|assetType|unknown|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Replace asset on a bookmark

<a id="opIdreplaceAssetOnBookmark"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/bookmarks/ieidlxygmwj87oxz5hxttoc8/assets/ieidlxygmwj87oxz5hxttoc8 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "assetId": "string"
  }'
```

`PUT /bookmarks/{bookmarkId}/assets/{assetId}`

Replace an existing asset on a bookmark with a different previously uploaded asset.

> Body parameter

```json
{
  "assetId": "string"
}
```

<h3 id="replace-asset-on-a-bookmark-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookmarkId|path|[BookmarkId](#schemabookmarkid)|true|The unique identifier of the bookmark.|
|assetId|path|[AssetId](#schemaassetid)|true|The unique identifier of the asset.|
|body|body|object|false|The ID of the new asset to replace the existing one.|
|» assetId|body|string|true|The ID of the new asset to use as a replacement.|

> Example responses

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="replace-asset-on-a-bookmark-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content — asset was replaced successfully.|None|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|404|Not Found|Bookmark or asset not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Detach asset from a bookmark

<a id="opIddetachAssetFromBookmark"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/bookmarks/ieidlxygmwj87oxz5hxttoc8/assets/ieidlxygmwj87oxz5hxttoc8 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /bookmarks/{bookmarkId}/assets/{assetId}`

Detach an asset from a bookmark.

<h3 id="detach-asset-from-a-bookmark-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bookmarkId|path|[BookmarkId](#schemabookmarkid)|true|The unique identifier of the bookmark.|
|assetId|path|[AssetId](#schemaassetid)|true|The unique identifier of the asset.|

> Example responses

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="detach-asset-from-a-bookmark-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content — asset was detached successfully.|None|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|404|Not Found|Bookmark or asset not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="karakeep-api-lists">Lists</h1>

Manage bookmark lists. Lists can be manual (curated) or smart (query-based). Bookmarks can belong to multiple lists.

## Get all lists

<a id="opIdlistLists"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/lists \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /lists`

Retrieve all bookmark lists for the authenticated user, including both manual and smart lists.

> Example responses

> 200 Response

```json
{
  "lists": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "icon": "string",
      "parentId": "string",
      "type": "manual",
      "query": "string",
      "public": true,
      "hasCollaborators": true,
      "userRole": "owner"
    }
  ]
}
```

<h3 id="get-all-lists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|All lists owned by or shared with the current user.|Inline|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|

<h3 id="get-all-lists-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lists|[[List](#schemalist)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a new list

<a id="opIdcreateList"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/lists \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "description": "string",
    "icon": "string",
    "type": "manual",
    "query": "string",
    "parentId": "string"
  }'
```

`POST /lists`

Create a new bookmark list. Lists can be manual (bookmarks are added explicitly) or smart (bookmarks are matched automatically by a search query).

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "icon": "string",
  "type": "manual",
  "query": "string",
  "parentId": "string"
}
```

<h3 id="create-a-new-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|The list to create. For smart lists, a `query` field is required. For manual lists, `query` must not be set.|
|» name|body|string|true|none|
|» description|body|string|false|none|
|» icon|body|string|true|none|
|» type|body|string|false|none|
|» query|body|string|false|none|
|» parentId|body|string \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|manual|
|» type|smart|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "icon": "string",
  "parentId": "string",
  "type": "manual",
  "query": "string",
  "public": true,
  "hasCollaborators": true,
  "userRole": "owner"
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="create-a-new-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The created list.|[List](#schemalist)|
|400|Bad Request|Bad request — invalid input data (e.g., smart list missing query, or manual list with a query).|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get a single list

<a id="opIdgetList"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/lists/ieidlxygmwj87oxz5hxttoc8 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /lists/{listId}`

Retrieve a single list by its ID.

<h3 id="get-a-single-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listId|path|[ListId](#schemalistid)|true|The unique identifier of the list.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "icon": "string",
  "parentId": "string",
  "type": "manual",
  "query": "string",
  "public": true,
  "hasCollaborators": true,
  "userRole": "owner"
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="get-a-single-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested list.|[List](#schemalist)|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|404|Not Found|List not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a list

<a id="opIddeleteList"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/lists/ieidlxygmwj87oxz5hxttoc8 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /lists/{listId}`

Delete a list. This removes the list only — bookmarks within it are not deleted.

<h3 id="delete-a-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listId|path|[ListId](#schemalistid)|true|The unique identifier of the list.|

> Example responses

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="delete-a-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content — the list was deleted successfully.|None|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|404|Not Found|List not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update a list

<a id="opIdupdateList"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/lists/ieidlxygmwj87oxz5hxttoc8 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "description": "string",
    "icon": "string",
    "parentId": "string",
    "query": "string",
    "public": true
  }'
```

`PATCH /lists/{listId}`

Partially update a list. Only the fields provided in the request body will be updated.

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "icon": "string",
  "parentId": "string",
  "query": "string",
  "public": true
}
```

<h3 id="update-a-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listId|path|[ListId](#schemalistid)|true|The unique identifier of the list.|
|body|body|object|false|The fields to update. Only the fields you want to change need to be provided.|
|» name|body|string|false|none|
|» description|body|string \| null|false|none|
|» icon|body|string|false|none|
|» parentId|body|string \| null|false|none|
|» query|body|string|false|none|
|» public|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "icon": "string",
  "parentId": "string",
  "type": "manual",
  "query": "string",
  "public": true,
  "hasCollaborators": true,
  "userRole": "owner"
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="update-a-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The updated list.|[List](#schemalist)|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|404|Not Found|List not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get bookmarks in a list

<a id="opIdgetListBookmarks"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/lists/ieidlxygmwj87oxz5hxttoc8/bookmarks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /lists/{listId}/bookmarks`

Retrieve a paginated list of bookmarks within the specified list. For smart lists, bookmarks are computed from the list's query.

<h3 id="get-bookmarks-in-a-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listId|path|[ListId](#schemalistid)|true|The unique identifier of the list.|
|sortOrder|query|string|false|Sort order by creation date. Defaults to 'desc'.|
|limit|query|number|false|Maximum number of items to return per page.|
|cursor|query|[Cursor](#schemacursor)|false|Cursor from a previous response to fetch the next page.|
|includeContent|query|boolean|false|If set to true, the bookmark's full content (HTML, text, etc.) will be included in the response. Set to false for lighter responses when only metadata is needed.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortOrder|asc|
|sortOrder|desc|

> Example responses

> 200 Response

```json
{
  "bookmarks": [
    {
      "id": "string",
      "firstCreatedAt": "1970-01-01T00:00:00Z",
      "createdAt": "1970-01-01T00:00:00Z",
      "modifiedAt": "1970-01-01T00:00:00Z",
      "title": "string",
      "archived": true,
      "favourited": true,
      "taggingStatus": "success",
      "summarizationStatus": "success",
      "embeddingStatus": "success",
      "note": "string",
      "summary": "string",
      "source": "api",
      "userId": "string",
      "tags": [
        {
          "id": "string",
          "name": "string",
          "attachedBy": "ai"
        }
      ],
      "content": {
        "type": "link",
        "url": "string",
        "title": "string",
        "description": "string",
        "imageUrl": "string",
        "imageAssetId": "string",
        "screenshotAssetId": "string",
        "pdfAssetId": "string",
        "fullPageArchiveAssetId": "string",
        "precrawledArchiveAssetId": "string",
        "videoAssetId": "string",
        "favicon": "string",
        "htmlContent": "string",
        "contentAssetId": "string",
        "readerViewStatus": "readable",
        "readerViewScore": 0,
        "preferredPreview": "reader_view",
        "crawledAt": "1970-01-01T00:00:00Z",
        "crawlStatus": "success",
        "author": "string",
        "publisher": "string",
        "datePublished": "1970-01-01T00:00:00Z",
        "dateModified": "1970-01-01T00:00:00Z"
      },
      "assets": [
        {
          "id": "string",
          "assetType": "linkHtmlContent",
          "fileName": "string"
        }
      ]
    }
  ],
  "nextCursor": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="get-bookmarks-in-a-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A paginated list of bookmarks in the specified list.|[PaginatedBookmarks](#schemapaginatedbookmarks)|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|404|Not Found|List not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Add a bookmark to a list

<a id="opIdaddBookmarkToList"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/lists/ieidlxygmwj87oxz5hxttoc8/bookmarks/ieidlxygmwj87oxz5hxttoc8 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /lists/{listId}/bookmarks/{bookmarkId}`

Add a bookmark to a manual list. This operation is idempotent — adding an already-present bookmark has no effect.

<h3 id="add-a-bookmark-to-a-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listId|path|[ListId](#schemalistid)|true|The unique identifier of the list.|
|bookmarkId|path|[BookmarkId](#schemabookmarkid)|true|The unique identifier of the bookmark.|

> Example responses

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="add-a-bookmark-to-a-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content — the bookmark was added to the list successfully.|None|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|404|Not Found|List or bookmark not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Remove a bookmark from a list

<a id="opIdremoveBookmarkFromList"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/lists/ieidlxygmwj87oxz5hxttoc8/bookmarks/ieidlxygmwj87oxz5hxttoc8 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /lists/{listId}/bookmarks/{bookmarkId}`

Remove a bookmark from a manual list.

<h3 id="remove-a-bookmark-from-a-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listId|path|[ListId](#schemalistid)|true|The unique identifier of the list.|
|bookmarkId|path|[BookmarkId](#schemabookmarkid)|true|The unique identifier of the bookmark.|

> Example responses

> 400 Response

```json
{
  "code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="remove-a-bookmark-from-a-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content — the bookmark was removed from the list successfully.|None|
|400|Bad Request|Bookmark is not in the list.|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|404|Not Found|List or bookmark not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="karakeep-api-tags">Tags</h1>

Manage tags for categorizing bookmarks. Tags can be attached by users or automatically by AI.

## Get all tags

<a id="opIdlistTags"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/tags \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tags`

Retrieve a paginated list of all tags. Supports filtering by name, attached-by source, and sorting by name, usage count, or relevance.

<h3 id="get-all-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nameContains|query|string|false|none|
|sort|query|string|false|none|
|attachedBy|query|string|false|none|
|cursor|query|string|false|none|
|limit|query|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|name|
|sort|usage|
|sort|relevance|
|attachedBy|ai|
|attachedBy|human|
|attachedBy|none|

> Example responses

> 200 Response

```json
{
  "tags": [
    {
      "id": "string",
      "name": "string",
      "numBookmarks": 0,
      "numBookmarksByAttachedType": {
        "ai": 0,
        "human": 0
      }
    }
  ],
  "nextCursor": "string"
}
```

<h3 id="get-all-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A paginated list of tags with usage counts.|Inline|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|

<h3 id="get-all-tags-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|[[Tag](#schematag)]|true|none|none|
|nextCursor|string \| null|true|none|Cursor for the next page, or null if no more results.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a new tag

<a id="opIdcreateTag"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/tags \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string"
  }'
```

`POST /tags`

Create a new tag. Tag names are normalized (trimmed and converted to the user's preferred tag style).

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="create-a-new-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|The tag name to create.|
|» name|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "name": "string"
}
```

<h3 id="create-a-new-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The created tag.|Inline|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|

<h3 id="create-a-new-tag-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get a single tag

<a id="opIdgetTag"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/tags/ieidlxygmwj87oxz5hxttoc8 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tags/{tagId}`

Retrieve a single tag by its ID, including the number of bookmarks using it.

<h3 id="get-a-single-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tagId|path|[TagId](#schematagid)|true|The unique identifier of the tag.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "numBookmarks": 0,
  "numBookmarksByAttachedType": {
    "ai": 0,
    "human": 0
  }
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="get-a-single-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested tag with usage statistics.|[Tag](#schematag)|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|404|Not Found|Tag not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a tag

<a id="opIddeleteTag"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/tags/ieidlxygmwj87oxz5hxttoc8 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /tags/{tagId}`

Delete a tag. This removes the tag from all bookmarks it was attached to.

<h3 id="delete-a-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tagId|path|[TagId](#schematagid)|true|The unique identifier of the tag.|

> Example responses

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="delete-a-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content — the tag was deleted successfully.|None|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|404|Not Found|Tag not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update a tag

<a id="opIdupdateTag"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/tags/ieidlxygmwj87oxz5hxttoc8 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string"
  }'
```

`PATCH /tags/{tagId}`

Rename a tag. The new name will be normalized and trimmed.

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="update-a-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tagId|path|[TagId](#schematagid)|true|The unique identifier of the tag.|
|body|body|object|false|The new tag name.|
|» name|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="update-a-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The updated tag.|Inline|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|404|Not Found|Tag not found.|[Error](#schemaerror)|

<h3 id="update-a-tag-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get bookmarks with a tag

<a id="opIdgetTagBookmarks"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/tags/ieidlxygmwj87oxz5hxttoc8/bookmarks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tags/{tagId}/bookmarks`

Retrieve a paginated list of all bookmarks that have the specified tag attached.

<h3 id="get-bookmarks-with-a-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tagId|path|[TagId](#schematagid)|true|The unique identifier of the tag.|
|sortOrder|query|string|false|Sort order by creation date. Defaults to 'desc'.|
|limit|query|number|false|Maximum number of items to return per page.|
|cursor|query|[Cursor](#schemacursor)|false|Cursor from a previous response to fetch the next page.|
|includeContent|query|boolean|false|If set to true, the bookmark's full content (HTML, text, etc.) will be included in the response. Set to false for lighter responses when only metadata is needed.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortOrder|asc|
|sortOrder|desc|

> Example responses

> 200 Response

```json
{
  "bookmarks": [
    {
      "id": "string",
      "firstCreatedAt": "1970-01-01T00:00:00Z",
      "createdAt": "1970-01-01T00:00:00Z",
      "modifiedAt": "1970-01-01T00:00:00Z",
      "title": "string",
      "archived": true,
      "favourited": true,
      "taggingStatus": "success",
      "summarizationStatus": "success",
      "embeddingStatus": "success",
      "note": "string",
      "summary": "string",
      "source": "api",
      "userId": "string",
      "tags": [
        {
          "id": "string",
          "name": "string",
          "attachedBy": "ai"
        }
      ],
      "content": {
        "type": "link",
        "url": "string",
        "title": "string",
        "description": "string",
        "imageUrl": "string",
        "imageAssetId": "string",
        "screenshotAssetId": "string",
        "pdfAssetId": "string",
        "fullPageArchiveAssetId": "string",
        "precrawledArchiveAssetId": "string",
        "videoAssetId": "string",
        "favicon": "string",
        "htmlContent": "string",
        "contentAssetId": "string",
        "readerViewStatus": "readable",
        "readerViewScore": 0,
        "preferredPreview": "reader_view",
        "crawledAt": "1970-01-01T00:00:00Z",
        "crawlStatus": "success",
        "author": "string",
        "publisher": "string",
        "datePublished": "1970-01-01T00:00:00Z",
        "dateModified": "1970-01-01T00:00:00Z"
      },
      "assets": [
        {
          "id": "string",
          "assetType": "linkHtmlContent",
          "fileName": "string"
        }
      ]
    }
  ],
  "nextCursor": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="get-bookmarks-with-a-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A paginated list of bookmarks that have the specified tag.|[PaginatedBookmarks](#schemapaginatedbookmarks)|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|404|Not Found|Tag not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="karakeep-api-highlights">Highlights</h1>

Manage text highlights within bookmarks. Highlights support color coding and optional notes.

## Get all highlights

<a id="opIdlistHighlights"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/highlights \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /highlights`

Retrieve a paginated list of all highlights across all bookmarks for the authenticated user.

<h3 id="get-all-highlights-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|number|false|Maximum number of items to return per page.|
|cursor|query|[Cursor](#schemacursor)|false|Cursor from a previous response to fetch the next page.|

> Example responses

> 200 Response

```json
{
  "highlights": [
    {
      "bookmarkId": "string",
      "startOffset": 0,
      "endOffset": 0,
      "color": "yellow",
      "text": "string",
      "note": "string",
      "id": "string",
      "userId": "string",
      "createdAt": "1970-01-01T00:00:00Z"
    }
  ],
  "nextCursor": "string"
}
```

<h3 id="get-all-highlights-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A paginated list of highlights.|[PaginatedHighlights](#schemapaginatedhighlights)|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a new highlight

<a id="opIdcreateHighlight"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/highlights \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bookmarkId": "string",
    "startOffset": 0,
    "endOffset": 0,
    "color": "yellow",
    "text": "string",
    "note": "string"
  }'
```

`POST /highlights`

Create a new text highlight on a bookmark. Highlights are defined by character offsets within the bookmark's content and support color coding.

> Body parameter

```json
{
  "bookmarkId": "string",
  "startOffset": 0,
  "endOffset": 0,
  "color": "yellow",
  "text": "string",
  "note": "string"
}
```

<h3 id="create-a-new-highlight-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|The highlight to create, including the bookmark ID, text offsets, and optional color/note.|
|» bookmarkId|body|string|true|none|
|» startOffset|body|number|true|none|
|» endOffset|body|number|true|none|
|» color|body|string|false|none|
|» text|body|string \| null|true|none|
|» note|body|string \| null|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» color|yellow|
|» color|red|
|» color|green|
|» color|blue|

> Example responses

> 201 Response

```json
{
  "bookmarkId": "string",
  "startOffset": 0,
  "endOffset": 0,
  "color": "yellow",
  "text": "string",
  "note": "string",
  "id": "string",
  "userId": "string",
  "createdAt": "1970-01-01T00:00:00Z"
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="create-a-new-highlight-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The created highlight.|[Highlight](#schemahighlight)|
|400|Bad Request|Bad request — invalid offsets or missing required fields.|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|404|Not Found|Bookmark not found — the specified bookmarkId does not exist.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get a single highlight

<a id="opIdgetHighlight"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/highlights/ieidlxygmwj87oxz5hxttoc8 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /highlights/{highlightId}`

Retrieve a single highlight by its ID.

<h3 id="get-a-single-highlight-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|highlightId|path|[HighlightId](#schemahighlightid)|true|The unique identifier of the highlight.|

> Example responses

> 200 Response

```json
{
  "bookmarkId": "string",
  "startOffset": 0,
  "endOffset": 0,
  "color": "yellow",
  "text": "string",
  "note": "string",
  "id": "string",
  "userId": "string",
  "createdAt": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="get-a-single-highlight-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested highlight.|[Highlight](#schemahighlight)|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|404|Not Found|Highlight not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a highlight

<a id="opIddeleteHighlight"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/highlights/ieidlxygmwj87oxz5hxttoc8 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /highlights/{highlightId}`

Delete a highlight by its ID.

<h3 id="delete-a-highlight-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|highlightId|path|[HighlightId](#schemahighlightid)|true|The unique identifier of the highlight.|

> Example responses

> 200 Response

```json
{
  "bookmarkId": "string",
  "startOffset": 0,
  "endOffset": 0,
  "color": "yellow",
  "text": "string",
  "note": "string",
  "id": "string",
  "userId": "string",
  "createdAt": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="delete-a-highlight-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The deleted highlight is returned.|[Highlight](#schemahighlight)|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|404|Not Found|Highlight not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update a highlight

<a id="opIdupdateHighlight"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/highlights/ieidlxygmwj87oxz5hxttoc8 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "color": "yellow",
    "note": "string"
  }'
```

`PATCH /highlights/{highlightId}`

Partially update a highlight. Supports changing the color or note.

> Body parameter

```json
{
  "color": "yellow",
  "note": "string"
}
```

<h3 id="update-a-highlight-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|highlightId|path|[HighlightId](#schemahighlightid)|true|The unique identifier of the highlight.|
|body|body|object|false|The fields to update. Only the fields you want to change need to be provided.|
|» color|body|string|false|none|
|» note|body|string \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» color|yellow|
|» color|red|
|» color|green|
|» color|blue|

> Example responses

> 200 Response

```json
{
  "bookmarkId": "string",
  "startOffset": 0,
  "endOffset": 0,
  "color": "yellow",
  "text": "string",
  "note": "string",
  "id": "string",
  "userId": "string",
  "createdAt": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="update-a-highlight-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The updated highlight.|[Highlight](#schemahighlight)|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|404|Not Found|Highlight not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="karakeep-api-assets">Assets</h1>

Upload and retrieve binary assets (images, PDFs, screenshots) associated with bookmarks.

## Upload a new asset

<a id="opIduploadAsset"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/assets \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'file=@/path/to/file'
```

`POST /assets`

Upload a binary file as a new asset. The uploaded asset can then be attached to a bookmark via the POST /bookmarks/{bookmarkId}/assets endpoint.

> Body parameter

```yaml
file: string
```

<h3 id="upload-a-new-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|The file to upload as multipart/form-data.|
|» file|body|string(binary)|true|File to be uploaded|

> Example responses

> 200 Response

```json
{
  "assetId": "string",
  "contentType": "string",
  "size": 0,
  "fileName": "string"
}
```

<h3 id="upload-a-new-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The asset was uploaded successfully. Returns metadata about the uploaded asset.|[UploadedAsset](#schemauploadedasset)|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get a single asset

<a id="opIdgetAsset"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/assets/ieidlxygmwj87oxz5hxttoc8 \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /assets/{assetId}`

Download an asset's binary content. The response Content-Type header is set based on the asset's MIME type.

<h3 id="get-a-single-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assetId|path|[AssetId](#schemaassetid)|true|The unique identifier of the asset.|

<h3 id="get-a-single-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The asset's binary content. The Content-Type header reflects the asset's MIME type (e.g., image/png, application/pdf).|None|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get a signed asset URL

<a id="opIdgetAssetSignedUrl"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/assets/ieidlxygmwj87oxz5hxttoc8/signed-url \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /assets/{assetId}/signed-url`

Generate a temporary signed URL that can be used to download an asset without sending an API key.

<h3 id="get-a-signed-asset-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assetId|path|[AssetId](#schemaassetid)|true|The unique identifier of the asset.|

> Example responses

> 200 Response

```json
{
  "assetId": "string",
  "signedUrl": "http://example.com",
  "expiresAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-a-signed-asset-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A temporary signed URL for downloading the asset and its expiration time.|[SignedAssetUrl](#schemasignedasseturl)|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="karakeep-api-users">Users</h1>

Retrieve information and statistics about the currently authenticated user.

## Get current user info

<a id="opIdgetCurrentUser"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/users/me \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/me`

Retrieve profile information for the currently authenticated user, including their name, email, and avatar.

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "email": "string",
  "image": "string",
  "localUser": true
}
```

<h3 id="get-current-user-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The current user's profile information.|Inline|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|

<h3 id="get-current-user-info-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string \| null|false|none|none|
|email|string \| null|false|none|none|
|image|string \| null|false|none|none|
|localUser|boolean|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get current user stats

<a id="opIdgetCurrentUserStats"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/users/me/stats \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/me/stats`

Retrieve usage statistics for the currently authenticated user, including bookmark counts by type, top domains, tag usage, bookmarking activity patterns, and storage usage.

> Example responses

> 200 Response

```json
{
  "numBookmarks": 0,
  "numFavorites": 0,
  "numArchived": 0,
  "numTags": 0,
  "numLists": 0,
  "numHighlights": 0,
  "bookmarksByType": {
    "link": 0,
    "text": 0,
    "asset": 0
  },
  "topDomains": [
    {
      "domain": "string",
      "count": 0
    }
  ],
  "totalAssetSize": 0,
  "assetsByType": [
    {
      "type": "string",
      "count": 0,
      "totalSize": 0
    }
  ],
  "bookmarkingActivity": {
    "thisWeek": 0,
    "thisMonth": 0,
    "thisYear": 0,
    "byHour": [
      {
        "hour": 0,
        "count": 0
      }
    ],
    "byDayOfWeek": [
      {
        "day": 0,
        "count": 0
      }
    ]
  },
  "tagUsage": [
    {
      "name": "string",
      "count": 0
    }
  ],
  "bookmarksBySource": [
    {
      "source": "api",
      "count": 0
    }
  ]
}
```

<h3 id="get-current-user-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Detailed usage statistics for the current user.|Inline|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|

<h3 id="get-current-user-stats-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numBookmarks|number|true|none|none|
|numFavorites|number|true|none|none|
|numArchived|number|true|none|none|
|numTags|number|true|none|none|
|numLists|number|true|none|none|
|numHighlights|number|true|none|none|
|bookmarksByType|object|true|none|none|
|» link|number|true|none|none|
|» text|number|true|none|none|
|» asset|number|true|none|none|
|topDomains|[object]|true|none|none|
|» domain|string|true|none|none|
|» count|number|true|none|none|
|totalAssetSize|number|true|none|none|
|assetsByType|[object]|true|none|none|
|» type|string|true|none|none|
|» count|number|true|none|none|
|» totalSize|number|true|none|none|
|bookmarkingActivity|object|true|none|none|
|» thisWeek|number|true|none|none|
|» thisMonth|number|true|none|none|
|» thisYear|number|true|none|none|
|» byHour|[object]|true|none|none|
|» » hour|number|true|none|none|
|» » count|number|true|none|none|
|» byDayOfWeek|[object]|true|none|none|
|» » day|number|true|none|none|
|» » count|number|true|none|none|
|tagUsage|[object]|true|none|none|
|» name|string|true|none|none|
|» count|number|true|none|none|
|bookmarksBySource|[object]|true|none|none|
|» source|string \| null|true|none|none|
|» count|number|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» source|api|
|» source|web|
|» source|cli|
|» source|mobile|
|» source|extension|
|» source|singlefile|
|» source|rss|
|» source|import|
|» source|null|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="karakeep-api-admin">Admin</h1>

Administrative endpoints for managing users. Requires admin role.

## Update a user (admin)

<a id="opIdadminUpdateUser"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/admin/users/user_123 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "role": "admin",
    "bookmarkQuota": 1000,
    "storageQuota": 5000000000
  }'
```

`PUT /admin/users/{userId}`

Update a user's role, bookmark quota, storage quota, or browser crawling setting. Requires admin role. You cannot update your own user account via this endpoint.

> Body parameter

```json
{
  "role": "admin",
  "bookmarkQuota": 1000,
  "storageQuota": 5000000000
}
```

<h3 id="update-a-user-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The ID of the user to update.|
|body|body|object|false|The fields to update. All fields are optional — only provided fields will be changed.|
|» role|body|string|false|none|
|» bookmarkQuota|body|integer \| null|false|none|
|» storageQuota|body|integer \| null|false|none|
|» browserCrawlingEnabled|body|boolean \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» role|user|
|» role|admin|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="update-a-user-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User updated successfully.|Inline|
|400|Bad Request|Bad request — invalid input data or attempted to update own user.|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|403|Forbidden|Forbidden — admin access required.|[Error](#schemaerror)|
|404|Not Found|User not found.|[Error](#schemaerror)|

<h3 id="update-a-user-admin-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|Whether the update was successful.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Trigger recrawl of links (admin)

<a id="opIdadminTriggerRecrawl"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/admin/jobs/trigger/recrawl \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "crawlStatus": "failure",
    "runInference": false,
    "modifiedWithinSeconds": 3600
  }'
```

`POST /admin/jobs/trigger/recrawl`

Trigger a recrawl of link bookmarks. You can filter by crawl status to target specific bookmarks (e.g., only failed ones) and by how recently they were modified. Optionally run AI inference after crawling. Requires admin role.

> Body parameter

```json
{
  "crawlStatus": "failure",
  "runInference": false,
  "modifiedWithinSeconds": 3600
}
```

<h3 id="trigger-recrawl-of-links-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Options for the recrawl job.|
|» crawlStatus|body|string|false|Filter bookmarks by their crawl status. Use 'failure' to retry only failed crawls.|
|» runInference|body|boolean|false|Whether to run AI inference after crawling.|
|» modifiedWithinSeconds|body|integer|false|Only process bookmarks modified within this many seconds. Omit to process all matching bookmarks.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» crawlStatus|success|
|» crawlStatus|failure|
|» crawlStatus|pending|
|» crawlStatus|all|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="trigger-recrawl-of-links-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Recrawl jobs triggered successfully.|Inline|
|400|Bad Request|Bad request — invalid input data.|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|403|Forbidden|Forbidden — admin access required.|[Error](#schemaerror)|

<h3 id="trigger-recrawl-of-links-admin-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|Whether the job was triggered successfully.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Trigger reindex of all bookmarks (admin)

<a id="opIdadminTriggerReindex"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/admin/jobs/trigger/reindex \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "modifiedWithinSeconds": 3600
  }'
```

`POST /admin/jobs/trigger/reindex`

Trigger a reindex of bookmarks in the search engine. Without modifiedWithinSeconds, this clears the existing index and re-queues all bookmarks. When set, only bookmarks modified within that many seconds are re-queued and the existing index is preserved. Requires admin role.

> Body parameter

```json
{
  "modifiedWithinSeconds": 3600
}
```

<h3 id="trigger-reindex-of-all-bookmarks-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Optional time window for the reindex job.|
|» modifiedWithinSeconds|body|integer|false|Only process bookmarks modified within this many seconds. Omit to process all matching bookmarks.|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 403 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="trigger-reindex-of-all-bookmarks-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Reindex jobs triggered successfully.|Inline|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|403|Forbidden|Forbidden — admin access required.|[Error](#schemaerror)|

<h3 id="trigger-reindex-of-all-bookmarks-admin-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|Whether the job was triggered successfully.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Trigger AI inference on bookmarks (admin)

<a id="opIdadminTriggerInference"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/admin/jobs/trigger/inference \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "type": "tag",
    "status": "failure",
    "modifiedWithinSeconds": 3600
  }'
```

`POST /admin/jobs/trigger/inference`

Trigger AI inference (tagging or summarization) on bookmarks. You can filter by status and by how recently bookmarks were modified. Requires admin role.

> Body parameter

```json
{
  "type": "tag",
  "status": "failure",
  "modifiedWithinSeconds": 3600
}
```

<h3 id="trigger-ai-inference-on-bookmarks-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Options for the inference job.|
|» type|body|string|true|The type of inference to run: 'tag' for AI tagging, 'summarize' for AI summarization.|
|» status|body|string|false|Filter bookmarks by their inference status. Use 'failure' to retry only failed ones.|
|» modifiedWithinSeconds|body|integer|false|Only process bookmarks modified within this many seconds. Omit to process all matching bookmarks.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|tag|
|» type|summarize|
|» status|success|
|» status|failure|
|» status|pending|
|» status|all|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="trigger-ai-inference-on-bookmarks-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Inference jobs triggered successfully.|Inline|
|400|Bad Request|Bad request — invalid input data.|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|403|Forbidden|Forbidden — admin access required.|[Error](#schemaerror)|

<h3 id="trigger-ai-inference-on-bookmarks-admin-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|Whether the job was triggered successfully.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="karakeep-api-backups">Backups</h1>

Create and manage full account backups as downloadable zip archives.

## Get all backups

<a id="opIdlistBackups"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/backups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /backups`

Retrieve a list of all backups for the authenticated user, including their status and metadata.

> Example responses

> 200 Response

```json
{
  "backups": [
    {
      "id": "string",
      "userId": "string",
      "assetId": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "size": 0,
      "bookmarkCount": 0,
      "status": "pending",
      "errorMessage": "string"
    }
  ]
}
```

<h3 id="get-all-backups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of all backups.|Inline|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|

<h3 id="get-all-backups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backups|[object]|true|none|none|
|» id|string|true|none|none|
|» userId|string|true|none|none|
|» assetId|string \| null|true|none|none|
|» createdAt|string(date-time)|true|none|none|
|» size|number|true|none|none|
|» bookmarkCount|number|true|none|none|
|» status|string|true|none|none|
|» errorMessage|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» status|pending|
|» status|success|
|» status|failure|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Trigger a new backup

<a id="opIdcreateBackup"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/backups \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /backups`

Trigger a new full account backup. The backup is created asynchronously — use GET /backups/{backupId} to check its status.

> Example responses

> 201 Response

```json
{
  "id": "string",
  "userId": "string",
  "assetId": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "size": 0,
  "bookmarkCount": 0,
  "status": "pending",
  "errorMessage": "string"
}
```

<h3 id="trigger-a-new-backup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Backup creation was triggered. The backup object is returned with a 'pending' status.|Inline|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|

<h3 id="trigger-a-new-backup-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|userId|string|true|none|none|
|assetId|string \| null|true|none|none|
|createdAt|string(date-time)|true|none|none|
|size|number|true|none|none|
|bookmarkCount|number|true|none|none|
|status|string|true|none|none|
|errorMessage|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|pending|
|status|success|
|status|failure|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get a single backup

<a id="opIdgetBackup"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/backups/ieidlxygmwj87oxz5hxttoc8 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /backups/{backupId}`

Retrieve metadata for a single backup, including its current status (pending, success, or failure).

<h3 id="get-a-single-backup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backupId|path|[BackupId](#schemabackupid)|true|The unique identifier of the backup.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "userId": "string",
  "assetId": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "size": 0,
  "bookmarkCount": 0,
  "status": "pending",
  "errorMessage": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="get-a-single-backup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested backup.|Inline|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|404|Not Found|Backup not found.|[Error](#schemaerror)|

<h3 id="get-a-single-backup-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|userId|string|true|none|none|
|assetId|string \| null|true|none|none|
|createdAt|string(date-time)|true|none|none|
|size|number|true|none|none|
|bookmarkCount|number|true|none|none|
|status|string|true|none|none|
|errorMessage|string \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|pending|
|status|success|
|status|failure|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a backup

<a id="opIddeleteBackup"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/backups/ieidlxygmwj87oxz5hxttoc8 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /backups/{backupId}`

Permanently delete a backup and its associated archive file.

<h3 id="delete-a-backup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backupId|path|[BackupId](#schemabackupid)|true|The unique identifier of the backup.|

> Example responses

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="delete-a-backup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content — the backup was deleted successfully.|None|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|404|Not Found|Backup not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Download a backup

<a id="opIddownloadBackup"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/backups/ieidlxygmwj87oxz5hxttoc8/download \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /backups/{backupId}/download`

Download a completed backup as a zip archive. The backup must have a 'success' status.

<h3 id="download-a-backup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backupId|path|[BackupId](#schemabackupid)|true|The unique identifier of the backup.|

> Example responses

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="download-a-backup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The backup file as a zip archive.|Inline|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|404|Not Found|Backup not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="karakeep-api-feeds">Feeds</h1>

Manage RSS feed subscriptions. Create, update, delete, and trigger fetches for RSS feeds that automatically import bookmarks.

## Get all feeds

<a id="opIdlistFeeds"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/feeds \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /feeds`

Retrieve all RSS feed subscriptions for the authenticated user.

> Example responses

> 200 Response

```json
{
  "feeds": [
    {
      "id": "string",
      "name": "string",
      "url": "http://example.com",
      "enabled": true,
      "importTags": true,
      "lastFetchedStatus": "success",
      "lastFetchedAt": "2025-01-15T12:00:00.000Z",
      "lastSuccessfulFetchAt": "2025-01-15T12:00:00.000Z"
    }
  ]
}
```

<h3 id="get-all-feeds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list of all feeds.|Inline|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|

<h3 id="get-all-feeds-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|feeds|[[Feed](#schemafeed)]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a new feed

<a id="opIdcreateFeed"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/feeds \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "url": "http://example.com",
    "enabled": true,
    "importTags": false
  }'
```

`POST /feeds`

Create a new RSS feed subscription. The feed will be periodically fetched and matching items will be imported as bookmarks.

> Body parameter

```json
{
  "name": "string",
  "url": "http://example.com",
  "enabled": true,
  "importTags": false
}
```

<h3 id="create-a-new-feed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|The feed to create.|
|» name|body|string|true|none|
|» url|body|string(uri)|true|none|
|» enabled|body|boolean|true|none|
|» importTags|body|boolean|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "name": "string",
  "url": "http://example.com",
  "enabled": true,
  "importTags": true,
  "lastFetchedStatus": "success",
  "lastFetchedAt": "2025-01-15T12:00:00.000Z",
  "lastSuccessfulFetchAt": "2025-01-15T12:00:00.000Z"
}
```

> 400 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="create-a-new-feed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The created feed.|[Feed](#schemafeed)|
|400|Bad Request|Bad request — e.g. the maximum number of RSS feeds per user has been reached.|[Error](#schemaerror)|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get a single feed

<a id="opIdgetFeed"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/feeds/ieidlxygmwj87oxz5hxttoc8 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /feeds/{feedId}`

Retrieve a single RSS feed subscription by its ID.

<h3 id="get-a-single-feed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|feedId|path|[FeedId](#schemafeedid)|true|The unique identifier of the feed.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "url": "http://example.com",
  "enabled": true,
  "importTags": true,
  "lastFetchedStatus": "success",
  "lastFetchedAt": "2025-01-15T12:00:00.000Z",
  "lastSuccessfulFetchAt": "2025-01-15T12:00:00.000Z"
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="get-a-single-feed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested feed.|[Feed](#schemafeed)|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|404|Not Found|Feed not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a feed

<a id="opIddeleteFeed"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/feeds/ieidlxygmwj87oxz5hxttoc8 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /feeds/{feedId}`

Delete an RSS feed subscription. Previously imported bookmarks are not affected.

<h3 id="delete-a-feed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|feedId|path|[FeedId](#schemafeedid)|true|The unique identifier of the feed.|

> Example responses

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="delete-a-feed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content — the feed was deleted successfully.|None|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|404|Not Found|Feed not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update a feed

<a id="opIdupdateFeed"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/feeds/ieidlxygmwj87oxz5hxttoc8 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "url": "http://example.com",
    "enabled": true,
    "importTags": true
  }'
```

`PATCH /feeds/{feedId}`

Update an RSS feed subscription. Only provided fields will be changed.

> Body parameter

```json
{
  "name": "string",
  "url": "http://example.com",
  "enabled": true,
  "importTags": true
}
```

<h3 id="update-a-feed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|feedId|path|[FeedId](#schemafeedid)|true|The unique identifier of the feed.|
|body|body|object|false|The fields to update.|
|» name|body|string|false|none|
|» url|body|string(uri)|false|none|
|» enabled|body|boolean|false|none|
|» importTags|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "url": "http://example.com",
  "enabled": true,
  "importTags": true,
  "lastFetchedStatus": "success",
  "lastFetchedAt": "2025-01-15T12:00:00.000Z",
  "lastSuccessfulFetchAt": "2025-01-15T12:00:00.000Z"
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="update-a-feed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The updated feed.|[Feed](#schemafeed)|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|404|Not Found|Feed not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Trigger a feed fetch

<a id="opIdfetchFeedNow"></a>

> Code samples

```bash
curl http://localhost:3000/api/v1/feeds/ieidlxygmwj87oxz5hxttoc8/fetch \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /feeds/{feedId}/fetch`

Trigger an immediate fetch of the RSS feed. The fetch is enqueued and processed asynchronously.

<h3 id="trigger-a-feed-fetch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|feedId|path|[FeedId](#schemafeedid)|true|The unique identifier of the feed.|

> Example responses

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="trigger-a-feed-fetch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content — the fetch has been enqueued.|None|
|401|Unauthorized|Unauthorized — the Bearer token is missing, invalid, or expired.|Inline|
|404|Not Found|Feed not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

# Schemas

<h2 id="tocS_BookmarkId">BookmarkId</h2>
<!-- backwards compatibility -->
<a id="schemabookmarkid"></a>
<a id="schema_BookmarkId"></a>
<a id="tocSbookmarkid"></a>
<a id="tocsbookmarkid"></a>

```json
"ieidlxygmwj87oxz5hxttoc8"
```

The unique identifier of the bookmark.

<h2 id="tocS_ListId">ListId</h2>
<!-- backwards compatibility -->
<a id="schemalistid"></a>
<a id="schema_ListId"></a>
<a id="tocSlistid"></a>
<a id="tocslistid"></a>

```json
"ieidlxygmwj87oxz5hxttoc8"
```

The unique identifier of the list.

<h2 id="tocS_TagId">TagId</h2>
<!-- backwards compatibility -->
<a id="schematagid"></a>
<a id="schema_TagId"></a>
<a id="tocStagid"></a>
<a id="tocstagid"></a>

```json
"ieidlxygmwj87oxz5hxttoc8"
```

The unique identifier of the tag.

<h2 id="tocS_HighlightId">HighlightId</h2>
<!-- backwards compatibility -->
<a id="schemahighlightid"></a>
<a id="schema_HighlightId"></a>
<a id="tocShighlightid"></a>
<a id="tocshighlightid"></a>

```json
"ieidlxygmwj87oxz5hxttoc8"
```

The unique identifier of the highlight.

<h2 id="tocS_AssetId">AssetId</h2>
<!-- backwards compatibility -->
<a id="schemaassetid"></a>
<a id="schema_AssetId"></a>
<a id="tocSassetid"></a>
<a id="tocsassetid"></a>

```json
"ieidlxygmwj87oxz5hxttoc8"
```

The unique identifier of the asset.

<h2 id="tocS_BackupId">BackupId</h2>
<!-- backwards compatibility -->
<a id="schemabackupid"></a>
<a id="schema_BackupId"></a>
<a id="tocSbackupid"></a>
<a id="tocsbackupid"></a>

```json
"ieidlxygmwj87oxz5hxttoc8"
```

The unique identifier of the backup.

<h2 id="tocS_FeedId">FeedId</h2>
<!-- backwards compatibility -->
<a id="schemafeedid"></a>
<a id="schema_FeedId"></a>
<a id="tocSfeedid"></a>
<a id="tocsfeedid"></a>

```json
"ieidlxygmwj87oxz5hxttoc8"
```

The unique identifier of the feed.

<h2 id="tocS_PaginatedBookmarks">PaginatedBookmarks</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedbookmarks"></a>
<a id="schema_PaginatedBookmarks"></a>
<a id="tocSpaginatedbookmarks"></a>
<a id="tocspaginatedbookmarks"></a>

```json
{
  "bookmarks": [
    {
      "id": "string",
      "firstCreatedAt": "1970-01-01T00:00:00Z",
      "createdAt": "1970-01-01T00:00:00Z",
      "modifiedAt": "1970-01-01T00:00:00Z",
      "title": "string",
      "archived": true,
      "favourited": true,
      "taggingStatus": "success",
      "summarizationStatus": "success",
      "embeddingStatus": "success",
      "note": "string",
      "summary": "string",
      "source": "api",
      "userId": "string",
      "tags": [
        {
          "id": "string",
          "name": "string",
          "attachedBy": "ai"
        }
      ],
      "content": {
        "type": "link",
        "url": "string",
        "title": "string",
        "description": "string",
        "imageUrl": "string",
        "imageAssetId": "string",
        "screenshotAssetId": "string",
        "pdfAssetId": "string",
        "fullPageArchiveAssetId": "string",
        "precrawledArchiveAssetId": "string",
        "videoAssetId": "string",
        "favicon": "string",
        "htmlContent": "string",
        "contentAssetId": "string",
        "readerViewStatus": "readable",
        "readerViewScore": 0,
        "preferredPreview": "reader_view",
        "crawledAt": "1970-01-01T00:00:00Z",
        "crawlStatus": "success",
        "author": "string",
        "publisher": "string",
        "datePublished": "1970-01-01T00:00:00Z",
        "dateModified": "1970-01-01T00:00:00Z"
      },
      "assets": [
        {
          "id": "string",
          "assetType": "linkHtmlContent",
          "fileName": "string"
        }
      ]
    }
  ],
  "nextCursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookmarks|[[Bookmark](#schemabookmark)]|true|none|none|
|nextCursor|string \| null|true|none|Cursor for the next page, or null if no more results.|

<h2 id="tocS_Bookmark">Bookmark</h2>
<!-- backwards compatibility -->
<a id="schemabookmark"></a>
<a id="schema_Bookmark"></a>
<a id="tocSbookmark"></a>
<a id="tocsbookmark"></a>

```json
{
  "id": "string",
  "firstCreatedAt": "1970-01-01T00:00:00Z",
  "createdAt": "1970-01-01T00:00:00Z",
  "modifiedAt": "1970-01-01T00:00:00Z",
  "title": "string",
  "archived": true,
  "favourited": true,
  "taggingStatus": "success",
  "summarizationStatus": "success",
  "embeddingStatus": "success",
  "note": "string",
  "summary": "string",
  "source": "api",
  "userId": "string",
  "tags": [
    {
      "id": "string",
      "name": "string",
      "attachedBy": "ai"
    }
  ],
  "content": {
    "type": "link",
    "url": "string",
    "title": "string",
    "description": "string",
    "imageUrl": "string",
    "imageAssetId": "string",
    "screenshotAssetId": "string",
    "pdfAssetId": "string",
    "fullPageArchiveAssetId": "string",
    "precrawledArchiveAssetId": "string",
    "videoAssetId": "string",
    "favicon": "string",
    "htmlContent": "string",
    "contentAssetId": "string",
    "readerViewStatus": "readable",
    "readerViewScore": 0,
    "preferredPreview": "reader_view",
    "crawledAt": "1970-01-01T00:00:00Z",
    "crawlStatus": "success",
    "author": "string",
    "publisher": "string",
    "datePublished": "1970-01-01T00:00:00Z",
    "dateModified": "1970-01-01T00:00:00Z"
  },
  "assets": [
    {
      "id": "string",
      "assetType": "linkHtmlContent",
      "fileName": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|firstCreatedAt|string(date-time)|false|none|none|
|createdAt|string(date-time)|true|none|none|
|modifiedAt|string(date-time) \| null|true|none|none|
|title|string \| null|false|none|none|
|archived|boolean|true|none|none|
|favourited|boolean|true|none|none|
|taggingStatus|string \| null|true|none|none|
|summarizationStatus|string \| null|true|none|none|
|embeddingStatus|string \| null|true|none|none|
|note|string \| null|false|none|none|
|summary|string \| null|false|none|none|
|source|string \| null|false|none|none|
|userId|string|true|none|none|
|tags|[object]|true|none|none|
|content|object|true|none|none|
|assets|[object]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|taggingStatus|success|
|taggingStatus|failure|
|taggingStatus|pending|
|taggingStatus|null|
|summarizationStatus|success|
|summarizationStatus|failure|
|summarizationStatus|pending|
|summarizationStatus|null|
|embeddingStatus|success|
|embeddingStatus|failure|
|embeddingStatus|pending|
|embeddingStatus|null|
|source|api|
|source|web|
|source|cli|
|source|mobile|
|source|extension|
|source|singlefile|
|source|rss|
|source|import|
|source|null|

<h2 id="tocS_Cursor">Cursor</h2>
<!-- backwards compatibility -->
<a id="schemacursor"></a>
<a id="schema_Cursor"></a>
<a id="tocScursor"></a>
<a id="tocscursor"></a>

```json
"string"
```

Cursor from a previous response to fetch the next page.

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": "string",
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|A machine-readable error code.|
|message|string|true|none|A human-readable error message.|

<h2 id="tocS_BookmarkReadableContent">BookmarkReadableContent</h2>
<!-- backwards compatibility -->
<a id="schemabookmarkreadablecontent"></a>
<a id="schema_BookmarkReadableContent"></a>
<a id="tocSbookmarkreadablecontent"></a>
<a id="tocsbookmarkreadablecontent"></a>

```json
{
  "bookmarkId": "string",
  "bookmarkType": "link",
  "format": "markdown",
  "content": "string",
  "contentVersion": "string",
  "range": {
    "start": 0,
    "end": 0,
    "total": 0
  },
  "nextCursor": "string",
  "truncated": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookmarkId|string|true|none|none|
|bookmarkType|string|true|none|none|
|format|string|true|none|none|
|content|string|true|none|none|
|contentVersion|string|true|none|A hash identifying the rendered content version used by this cursor.|
|range|object|true|none|none|
|nextCursor|string \| null|true|none|Cursor for the next chunk, or null when all content has been returned.|
|truncated|boolean|true|none|Whether more readable content remains after this chunk.|

#### Enumerated Values

|Property|Value|
|---|---|
|bookmarkType|link|
|bookmarkType|text|
|bookmarkType|asset|
|format|markdown|
|format|text|

<h2 id="tocS_List">List</h2>
<!-- backwards compatibility -->
<a id="schemalist"></a>
<a id="schema_List"></a>
<a id="tocSlist"></a>
<a id="tocslist"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "icon": "string",
  "parentId": "string",
  "type": "manual",
  "query": "string",
  "public": true,
  "hasCollaborators": true,
  "userRole": "owner"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
|description|string \| null|false|none|none|
|icon|string|true|none|none|
|parentId|string \| null|true|none|none|
|type|string|false|none|none|
|query|string \| null|false|none|none|
|public|boolean|true|none|none|
|hasCollaborators|boolean|true|none|none|
|userRole|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|manual|
|type|smart|
|userRole|owner|
|userRole|editor|
|userRole|viewer|
|userRole|public|

<h2 id="tocS_Highlight">Highlight</h2>
<!-- backwards compatibility -->
<a id="schemahighlight"></a>
<a id="schema_Highlight"></a>
<a id="tocShighlight"></a>
<a id="tocshighlight"></a>

```json
{
  "bookmarkId": "string",
  "startOffset": 0,
  "endOffset": 0,
  "color": "yellow",
  "text": "string",
  "note": "string",
  "id": "string",
  "userId": "string",
  "createdAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookmarkId|string|true|none|none|
|startOffset|number|true|none|none|
|endOffset|number|true|none|none|
|color|string|false|none|none|
|text|string \| null|true|none|none|
|note|string \| null|true|none|none|
|id|string|true|none|none|
|userId|string|true|none|none|
|createdAt|string(date-time)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|color|yellow|
|color|red|
|color|green|
|color|blue|

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "id": "string",
  "name": "string",
  "numBookmarks": 0,
  "numBookmarksByAttachedType": {
    "ai": 0,
    "human": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
|numBookmarks|number|true|none|none|
|numBookmarksByAttachedType|object|true|none|none|

<h2 id="tocS_PaginatedHighlights">PaginatedHighlights</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedhighlights"></a>
<a id="schema_PaginatedHighlights"></a>
<a id="tocSpaginatedhighlights"></a>
<a id="tocspaginatedhighlights"></a>

```json
{
  "highlights": [
    {
      "bookmarkId": "string",
      "startOffset": 0,
      "endOffset": 0,
      "color": "yellow",
      "text": "string",
      "note": "string",
      "id": "string",
      "userId": "string",
      "createdAt": "1970-01-01T00:00:00Z"
    }
  ],
  "nextCursor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|highlights|[[Highlight](#schemahighlight)]|true|none|none|
|nextCursor|string \| null|true|none|Cursor for the next page, or null if no more results.|

<h2 id="tocS_UploadedAsset">UploadedAsset</h2>
<!-- backwards compatibility -->
<a id="schemauploadedasset"></a>
<a id="schema_UploadedAsset"></a>
<a id="tocSuploadedasset"></a>
<a id="tocsuploadedasset"></a>

```json
{
  "assetId": "string",
  "contentType": "string",
  "size": 0,
  "fileName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetId|string|true|none|The unique identifier assigned to the uploaded asset.|
|contentType|string|true|none|The MIME type of the uploaded file.|
|size|number|true|none|The size of the uploaded file in bytes.|
|fileName|string|true|none|The original file name of the uploaded file.|

<h2 id="tocS_SignedAssetUrl">SignedAssetUrl</h2>
<!-- backwards compatibility -->
<a id="schemasignedasseturl"></a>
<a id="schema_SignedAssetUrl"></a>
<a id="tocSsignedasseturl"></a>
<a id="tocssignedasseturl"></a>

```json
{
  "assetId": "string",
  "signedUrl": "http://example.com",
  "expiresAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetId|string|true|none|The unique identifier of the asset.|
|signedUrl|string(uri)|true|none|The temporary URL for downloading the asset.|
|expiresAt|string(date-time)|true|none|When the signed URL expires, in ISO 8601 format.|

<h2 id="tocS_Feed">Feed</h2>
<!-- backwards compatibility -->
<a id="schemafeed"></a>
<a id="schema_Feed"></a>
<a id="tocSfeed"></a>
<a id="tocsfeed"></a>

```json
{
  "id": "string",
  "name": "string",
  "url": "http://example.com",
  "enabled": true,
  "importTags": true,
  "lastFetchedStatus": "success",
  "lastFetchedAt": "2025-01-15T12:00:00.000Z",
  "lastSuccessfulFetchAt": "2025-01-15T12:00:00.000Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
|url|string(uri)|true|none|none|
|enabled|boolean|true|none|none|
|importTags|boolean|true|none|none|
|lastFetchedStatus|string \| null|true|none|none|
|lastFetchedAt|string \| null|true|none|ISO 8601 timestamp of the last fetch attempt, or null if never fetched.|
|lastSuccessfulFetchAt|string \| null|true|none|ISO 8601 timestamp of the last successful fetch, or null if the feed has never been fetched successfully.|

#### Enumerated Values

|Property|Value|
|---|---|
|lastFetchedStatus|success|
|lastFetchedStatus|failure|
|lastFetchedStatus|pending|
|lastFetchedStatus|null|
