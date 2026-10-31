<h1 id="library-agent-api">Library Agent API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

A simple Google Example Library API.

Base URLs:

* <a href="https://libraryagent.googleapis.com/">https://libraryagent.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/docs/quota">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

<h1 id="library-agent-api-shelves">shelves</h1>

## libraryagent.shelves.list

<a id="opIdlibraryagent.shelves.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/shelves \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/shelves`

Lists shelves. The order is unspecified but deterministic. Newly created shelves will not necessarily be added to the end of this list.

<h3 id="libraryagentshelveslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer|false|Requested page size. Server may return fewer shelves than requested. If unspecified, server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results the server should return. Typically, this is the value of ListShelvesResponse.next_page_token returned from the previous call to `ListShelves` method.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "shelves": [
    {
      "name": "string",
      "theme": "string"
    }
  ]
}
```

<h3 id="libraryagentshelveslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleExampleLibraryagentV1ListShelvesResponse](#schemagoogleexamplelibraryagentv1listshelvesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## libraryagent.shelves.books.get

<a id="opIdlibraryagent.shelves.books.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Gets a book. Returns NOT_FOUND if the book does not exist.

<h3 id="libraryagentshelvesbooksget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the book to retrieve.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "author": "string",
  "name": "string",
  "read": true,
  "title": "string"
}
```

<h3 id="libraryagentshelvesbooksget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleExampleLibraryagentV1Book](#schemagoogleexamplelibraryagentv1book)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## libraryagent.shelves.books.borrow

<a id="opIdlibraryagent.shelves.books.borrow"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:borrow \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/{name}:borrow`

Borrow a book from the library. Returns the book if it is borrowed successfully. Returns NOT_FOUND if the book does not exist in the library. Returns quota exceeded error if the amount of books borrowed exceeds allocation quota in any dimensions.

<h3 id="libraryagentshelvesbooksborrow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the book to borrow.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "author": "string",
  "name": "string",
  "read": true,
  "title": "string"
}
```

<h3 id="libraryagentshelvesbooksborrow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleExampleLibraryagentV1Book](#schemagoogleexamplelibraryagentv1book)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## libraryagent.shelves.books.return

<a id="opIdlibraryagent.shelves.books.return"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:return \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/{name}:return`

Return a book to the library. Returns the book if it is returned to the library successfully. Returns error if the book does not belong to the library or the users didn't borrow before.

<h3 id="libraryagentshelvesbooksreturn-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the book to return.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "author": "string",
  "name": "string",
  "read": true,
  "title": "string"
}
```

<h3 id="libraryagentshelvesbooksreturn-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleExampleLibraryagentV1Book](#schemagoogleexamplelibraryagentv1book)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## libraryagent.shelves.books.list

<a id="opIdlibraryagent.shelves.books.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/books \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/books`

Lists books in a shelf. The order is unspecified but deterministic. Newly created books will not necessarily be added to the end of this list. Returns NOT_FOUND if the shelf does not exist.

<h3 id="libraryagentshelvesbookslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the shelf whose books we'd like to list.|
|pageSize|query|integer|false|Requested page size. Server may return fewer books than requested. If unspecified, server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results the server should return. Typically, this is the value of ListBooksResponse.next_page_token. returned from the previous call to `ListBooks` method.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "books": [
    {
      "author": "string",
      "name": "string",
      "read": true,
      "title": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="libraryagentshelvesbookslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleExampleLibraryagentV1ListBooksResponse](#schemagoogleexamplelibraryagentv1listbooksresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_GoogleExampleLibraryagentV1Book">GoogleExampleLibraryagentV1Book</h2>
<!-- backwards compatibility -->
<a id="schemagoogleexamplelibraryagentv1book"></a>
<a id="schema_GoogleExampleLibraryagentV1Book"></a>
<a id="tocSgoogleexamplelibraryagentv1book"></a>
<a id="tocsgoogleexamplelibraryagentv1book"></a>

```json
{
  "author": "string",
  "name": "string",
  "read": true,
  "title": "string"
}
```

A single book in the library.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|string|false|none|The name of the book author.|
|name|string|false|none|The resource name of the book. Book names have the form `shelves/{shelf_id}/books/{book_id}`. The name is ignored when creating a book.|
|read|boolean|false|none|Value indicating whether the book has been read.|
|title|string|false|none|The title of the book.|

<h2 id="tocS_GoogleExampleLibraryagentV1ListBooksResponse">GoogleExampleLibraryagentV1ListBooksResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleexamplelibraryagentv1listbooksresponse"></a>
<a id="schema_GoogleExampleLibraryagentV1ListBooksResponse"></a>
<a id="tocSgoogleexamplelibraryagentv1listbooksresponse"></a>
<a id="tocsgoogleexamplelibraryagentv1listbooksresponse"></a>

```json
{
  "books": [
    {
      "author": "string",
      "name": "string",
      "read": true,
      "title": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for LibraryAgent.ListBooks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|books|[[GoogleExampleLibraryagentV1Book](#schemagoogleexamplelibraryagentv1book)]|false|none|The list of books.|
|nextPageToken|string|false|none|A token to retrieve next page of results. Pass this value in the ListBooksRequest.page_token field in the subsequent call to `ListBooks` method to retrieve the next page of results.|

<h2 id="tocS_GoogleExampleLibraryagentV1ListShelvesResponse">GoogleExampleLibraryagentV1ListShelvesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleexamplelibraryagentv1listshelvesresponse"></a>
<a id="schema_GoogleExampleLibraryagentV1ListShelvesResponse"></a>
<a id="tocSgoogleexamplelibraryagentv1listshelvesresponse"></a>
<a id="tocsgoogleexamplelibraryagentv1listshelvesresponse"></a>

```json
{
  "nextPageToken": "string",
  "shelves": [
    {
      "name": "string",
      "theme": "string"
    }
  ]
}
```

Response message for LibraryAgent.ListShelves.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token to retrieve next page of results. Pass this value in the ListShelvesRequest.page_token field in the subsequent call to `ListShelves` method to retrieve the next page of results.|
|shelves|[[GoogleExampleLibraryagentV1Shelf](#schemagoogleexamplelibraryagentv1shelf)]|false|none|The list of shelves.|

<h2 id="tocS_GoogleExampleLibraryagentV1Shelf">GoogleExampleLibraryagentV1Shelf</h2>
<!-- backwards compatibility -->
<a id="schemagoogleexamplelibraryagentv1shelf"></a>
<a id="schema_GoogleExampleLibraryagentV1Shelf"></a>
<a id="tocSgoogleexamplelibraryagentv1shelf"></a>
<a id="tocsgoogleexamplelibraryagentv1shelf"></a>

```json
{
  "name": "string",
  "theme": "string"
}
```

A Shelf contains a collection of books with a theme.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Output only. The resource name of the shelf. Shelf names have the form `shelves/{shelf_id}`. The name is ignored when creating a shelf.|
|theme|string|false|none|The theme of the shelf|
