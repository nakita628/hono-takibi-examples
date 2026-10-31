<h1 id="figshare-api">Figshare API v2.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Figshare apiv2. Using Swagger 2.0

Base URLs:

* <a href="https://api.figshare.com/v2">https://api.figshare.com/v2</a>

# Authentication

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://figshare.com/account/applications/authorize](https://figshare.com/account/applications/authorize)
    - Token URL = [https://api.figshare.com/v2/token](https://api.figshare.com/v2/token)

|Scope|Scope Description|
|---|---|
|all|Grants all access|

<h1 id="figshare-api-other">other</h1>

## Private Account information

<a id="opIdprivate_account"></a>

> Code samples

```bash
curl https://example.com/account \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account`

Account information for token/personal token

> Example responses

> 200 Response

```json
{
  "active": 0,
  "created_date": "2018-05-22T04:04:04",
  "email": "user@domain.com",
  "first_name": "Doe",
  "group_id": 0,
  "id": 1495682,
  "institution_id": 1,
  "institution_user_id": "djohn42",
  "last_name": "John",
  "maximum_file_size": 0,
  "modified_date": "2018-05-22T04:04:04",
  "pending_quota_request": true,
  "quota": 0,
  "used_quota": 0,
  "used_quota_private": 0,
  "used_quota_public": 0
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="private-account-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Account representation|[Account](#schemaaccount)|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Search Funding

<a id="opIdprivate_funding_search"></a>

> Code samples

```bash
curl https://example.com/account/funding/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "search_for": "string"
  }'
```

`POST /account/funding/search`

Search for fundings

> Body parameter

```json
{
  "search_for": "string"
}
```

<h3 id="search-funding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FundingSearch](#schemafundingsearch)|false|Search Parameters|
|» search_for|body|string|false|Search term|

> Example responses

> 200 Response

```json
[
  {
    "funder_name": "string",
    "grant_code": "string",
    "id": 1,
    "is_user_defined": true,
    "title": "Scholarly funding",
    "url": "https://app.dimensions.ai/details/grant/1"
  }
]
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="search-funding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. An array of funding information|Inline|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="search-funding-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[FundingInformation](#schemafundinginformation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Private Account Licenses

<a id="opIdprivate_licenses_list"></a>

> Code samples

```bash
curl https://example.com/account/licenses \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/licenses`

This is a private endpoint that requires OAuth. It will return a list with figshare public licenses AND licenses defined for account's institution.

> Example responses

> 200 Response

```json
[
  {
    "name": "CC BY",
    "url": "http://creativecommons.org/licenses/by/4.0/",
    "value": 1
  }
]
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="private-account-licenses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. An array of personal licenses|Inline|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="private-account-licenses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[License](#schemalicense)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Public Categories

<a id="opIdcategories_list"></a>

> Code samples

```bash
curl https://example.com/categories \
  -H 'Accept: application/json'
```

`GET /categories`

Returns a list of public categories

> Example responses

> 200 Response

```json
[
  {
    "id": 11,
    "parent_id": 1,
    "path": "/450/1024/6532",
    "source_id": "300204",
    "taxonomy_id": 4,
    "title": "Anatomy"
  }
]
```

<h3 id="public-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. An array of categories|Inline|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="public-categories-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Category](#schemacategory)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Public File Download

<a id="opIdfile_download"></a>

> Code samples

```bash
curl https://example.com/file/download/1
```

`GET /file/download/{file_id}`

Starts the download of a file

<h3 id="public-file-download-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file_id|path|integer(int64)|true|none|

<h3 id="public-file-download-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Item Types

<a id="opIditem_types_list"></a>

> Code samples

```bash
curl https://example.com/item_types \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /item_types`

Returns the list of Item Types of the requested group. If no user is authenticated, returns the item types available for Figshare.

<h3 id="item-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_id|query|integer(int64)|false|Identifier of the group for which the item types are requested|

> Example responses

> 200 Response

```json
[
  {
    "icon": "paper",
    "id": 1,
    "is_selectable": true,
    "name": "journal contribution",
    "public_description": "This is the description of an item type",
    "string_id": "journal_contribution",
    "url_name": "journal_contribution"
  }
]
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="item-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. An array of item types|Inline|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="item-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ItemType](#schemaitemtype)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Public Licenses

<a id="opIdlicenses_list"></a>

> Code samples

```bash
curl https://example.com/licenses \
  -H 'Accept: application/json'
```

`GET /licenses`

Returns a list of public licenses

> Example responses

> 200 Response

```json
[
  {
    "name": "CC BY",
    "url": "http://creativecommons.org/licenses/by/4.0/",
    "value": 1
  }
]
```

<h3 id="public-licenses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. An array of licenses|Inline|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="public-licenses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[License](#schemalicense)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="figshare-api-articles">articles</h1>

## Private Articles

<a id="opIdprivate_articles_list"></a>

> Code samples

```bash
curl https://example.com/account/articles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/articles`

Get Own Articles

<h3 id="private-articles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int64)|false|Page number. Used for pagination with page_size|
|page_size|query|integer(int64)|false|The number of results included on a page. Used for pagination with page|
|limit|query|integer(int64)|false|Number of results included on a page. Used for pagination with query|
|offset|query|integer(int64)|false|Where to start the listing(the offset of the first result). Used for pagination with limit|

> Example responses

> 200 Response

```json
[
  {
    "defined_type": 3,
    "defined_type_name": "media",
    "doi": "10.6084/m9.figshare.1434614",
    "group_id": 1234,
    "handle": "111184/figshare.1234",
    "id": 1434614,
    "published_date": "2015-12-31T23:59:59.000Z",
    "thumb": "https://ndownloader.figshare.com/files/123456789/preview/12345678/thumb.png",
    "timeline": {
      "firstOnline": "2015-12-31",
      "publisherAcceptance": "2015-12-31",
      "publisherPublication": "2015-12-31",
      "posted": "2015-12-31",
      "revision": "2015-12-31",
      "submission": "2015-12-31"
    },
    "title": "Test article title",
    "url": "http://api.figshare.com/articles/1434614",
    "url_private_api": "https://api.figshare.com/account/articles/1434614",
    "url_private_html": "https://figshare.com/account/articles/1434614",
    "url_public_api": "https://api.figshare.com/articles/1434614",
    "url_public_html": "https://figshare.com/articles/media/Test_article_title/1434614"
  }
]
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="private-articles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. An array of articles belonging to the account|Inline|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="private-articles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Article](#schemaarticle)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Create new Article

<a id="opIdprivate_article_create"></a>

> Code samples

```bash
curl https://example.com/account/articles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "authors": [
      {
        "name": "John Doe"
      },
      {
        "id": 1000008
      }
    ],
    "categories": [
      1,
      10,
      11
    ],
    "categories_by_source_id": [
      "300204",
      "400207"
    ],
    "custom_fields": {
      "defined_key": "value for it"
    },
    "custom_fields_list": [
      {
        "name": "key",
        "value": "value"
      }
    ],
    "defined_type": "media",
    "description": "Test description of article",
    "doi": "",
    "funding": "",
    "funding_list": [
      {
        "id": 0,
        "title": "string"
      }
    ],
    "group_id": 0,
    "handle": "",
    "is_metadata_record": true,
    "keywords": [
      "tag1",
      "tag2"
    ],
    "license": 1,
    "metadata_reason": "hosted somewhere else",
    "references": [
      "http://figshare.com",
      "http://api.figshare.com"
    ],
    "resource_doi": "",
    "resource_title": "",
    "tags": [
      "tag1",
      "tag2"
    ],
    "timeline": {
      "firstOnline": "2015-12-31",
      "publisherAcceptance": "2015-12-31",
      "publisherPublication": "2015-12-31"
    },
    "title": "Test article title"
  }'
```

`POST /account/articles`

Create a new Article by sending article information

> Body parameter

```json
{
  "authors": [
    {
      "name": "John Doe"
    },
    {
      "id": 1000008
    }
  ],
  "categories": [
    1,
    10,
    11
  ],
  "categories_by_source_id": [
    "300204",
    "400207"
  ],
  "custom_fields": {
    "defined_key": "value for it"
  },
  "custom_fields_list": [
    {
      "name": "key",
      "value": "value"
    }
  ],
  "defined_type": "media",
  "description": "Test description of article",
  "doi": "",
  "funding": "",
  "funding_list": [
    {
      "id": 0,
      "title": "string"
    }
  ],
  "group_id": 0,
  "handle": "",
  "is_metadata_record": true,
  "keywords": [
    "tag1",
    "tag2"
  ],
  "license": 1,
  "metadata_reason": "hosted somewhere else",
  "references": [
    "http://figshare.com",
    "http://api.figshare.com"
  ],
  "resource_doi": "",
  "resource_title": "",
  "tags": [
    "tag1",
    "tag2"
  ],
  "timeline": {
    "firstOnline": "2015-12-31",
    "publisherAcceptance": "2015-12-31",
    "publisherPublication": "2015-12-31"
  },
  "title": "Test article title"
}
```

<h3 id="create-new-article-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ArticleCreate](#schemaarticlecreate)|true|Article description|
|» authors|body|[object]|false|List of authors to be associated with the article. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint.|
|» categories|body|[integer(int64)]|false|List of category ids to be associated with the article(e.g [1, 23, 33, 66])|
|» categories_by_source_id|body|[string]|false|List of category source ids to be associated with the article, supersedes the categories property|
|» custom_fields|body|object|false|List of key, values pairs to be associated with the article|
|» custom_fields_list|body|[[CustomArticleFieldAdd](#schemacustomarticlefieldadd)]|false|List of custom fields values, supersedes custom_fields parameter|
|» defined_type|body|string|false|<b>One of:</b> <code>figure</code> <code>online resource</code> <code>preprint</code> <code>book</code> <code>conference contribution</code> <code>media</code> <code>dataset</code> <code>poster</code> <code>journal contribution</code> <code>presentation</code> <code>thesis</code> <code>software</code>|
|» description|body|string|false|The article description. In a publisher case, usually this is the remote article description|
|» doi|body|string|false|Not applicable for regular users. In an institutional case, make sure your group supports setting DOIs. This setting is applied by figshare via opening a ticket through our support/helpdesk system.|
|» funding|body|string|false|Grant number or funding authority|
|» funding_list|body|[[FundingCreate](#schemafundingcreate)]|false|Funding creation / update items|
|» group_id|body|integer(int64)|false|Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups|
|» handle|body|string|false|Not applicable for regular users. In an institutional case, make sure your group supports setting Handles. This setting is applied by figshare via opening a ticket through our support/helpdesk system.|
|» is_metadata_record|body|boolean|false|True if article has no files|
|» keywords|body|[string]|false|List of tags to be associated with the article. Tags can be used instead|
|» license|body|integer(int64)|false|License id for this article.|
|» metadata_reason|body|string|false|Article metadata reason|
|» references|body|[string(link)]|false|List of links to be associated with the article (e.g ["http://link1", "http://link2", "http://link3"])|
|» resource_doi|body|string|false|Not applicable to regular users. In a publisher case, this is the publisher article DOI.|
|» resource_title|body|string|false|Not applicable to regular users. In a publisher case, this is the publisher article title.|
|» tags|body|[string]|false|List of tags to be associated with the article. Keywords can be used instead|
|» timeline|body|[TimelineUpdate](#schematimelineupdate)|false|none|
|» title|body|string|true|Title of article|

> Example responses

> 201 Response

```json
{
  "entity_id": 33334444,
  "location": "http://example.com",
  "warnings": [
    "string"
  ]
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-new-article-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[LocationWarnings](#schemalocationwarnings)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Account Article Report

<a id="opIdaccount_article_report"></a>

> Code samples

```bash
curl https://example.com/account/articles/export \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/articles/export`

Return status on all reports generated for the account from the oauth credentials

<h3 id="account-article-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_id|query|integer(int64)|false|A group ID to filter by|

> Example responses

> 200 Response

```json
[
  {
    "account_id": 0,
    "created_date": "2017-05-15T15:12:26Z",
    "download_url": "https://some.com/storage/path/123/report-456.xlsx",
    "group_id": 0,
    "id": 0,
    "status": "missing"
  }
]
```

<h3 id="account-article-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. An array of account report entries|Inline|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="account-article-report-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AccountReport](#schemaaccountreport)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Initiate a new Report

<a id="opIdaccount_article_report_generate"></a>

> Code samples

```bash
curl https://example.com/account/articles/export \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /account/articles/export`

Initiate a new Article Report for this Account. There is a limit of 1 report per day.

> Example responses

> 200 Response

```json
{
  "account_id": 0,
  "created_date": "2017-05-15T15:12:26Z",
  "download_url": "https://some.com/storage/path/123/report-456.xlsx",
  "group_id": 0,
  "id": 0,
  "status": "missing"
}
```

<h3 id="initiate-a-new-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. AccountReport created.|[AccountReport](#schemaaccountreport)|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Private Articles search

<a id="opIdprivate_articles_search"></a>

> Code samples

```bash
curl https://example.com/account/articles/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "group": 2000013,
    "institution": 2000013,
    "limit": 10,
    "modified_since": "2017-12-22",
    "offset": 0,
    "order_direction": "desc",
    "page": 1,
    "page_size": 10,
    "published_since": "2017-12-22",
    "search_for": "figshare",
    "doi": "10.6084/m9.figshare.1407024",
    "handle": "111084/m9.figshare.14074",
    "item_type": 1,
    "order": "published_date",
    "project_id": 1,
    "resource_doi": "10.6084/m9.figshare.1407024",
    "resource_id": "1407024"
  }'
```

`POST /account/articles/search`

Returns a list of private articles filtered by the search parameters

> Body parameter

```json
{
  "group": 2000013,
  "institution": 2000013,
  "limit": 10,
  "modified_since": "2017-12-22",
  "offset": 0,
  "order_direction": "desc",
  "page": 1,
  "page_size": 10,
  "published_since": "2017-12-22",
  "search_for": "figshare",
  "doi": "10.6084/m9.figshare.1407024",
  "handle": "111084/m9.figshare.14074",
  "item_type": 1,
  "order": "published_date",
  "project_id": 1,
  "resource_doi": "10.6084/m9.figshare.1407024",
  "resource_id": "1407024"
}
```

<h3 id="private-articles-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PrivateArticleSearch](#schemaprivatearticlesearch)|true|Search Parameters|
|» group|body|integer(int32)|false|only return collections from this group|
|» institution|body|integer(int32)|false|only return collections from this institution|
|» limit|body|integer(int64)|false|Number of results included on a page. Used for pagination with query|
|» modified_since|body|string|false|Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD|
|» offset|body|integer(int64)|false|Where to start the listing(the offset of the first result). Used for pagination with limit|
|» order_direction|body|string|false|Direction of ordering|
|» page|body|integer(int64)|false|Page number. Used for pagination with page_size|
|» page_size|body|integer(int64)|false|The number of results included on a page. Used for pagination with page|
|» published_since|body|string|false|Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD|
|» search_for|body|string|false|Search term|
|» doi|body|string|false|Only return articles with this doi|
|» handle|body|string|false|Only return articles with this handle|
|» item_type|body|integer(int64)|false|Only return articles with the respective type. Mapping for item_type is: 1 - Figure, 2 - Media, 3 - Dataset, 5 - Poster, 6 - Journal contribution, 7 - Presentation, 8 - Thesis, 9 - Software, 11 - Online resource, 12 - Preprint, 13 - Book, 14 - Conference contribution, 15 - Chapter, 16 - Peer review, 17 - Educational resource, 18 - Report, 19 - Standard, 20 - Composition, 21 - Funding, 22 - Physical object, 23 - Data management plan, 24 - Workflow, 25 - Monograph, 26 - Performance, 27 - Event, 28 - Service, 29 - Model|
|» order|body|string|false|The field by which to order|
|» project_id|body|integer(int64)|false|Only return articles in this project|
|» resource_doi|body|string|false|Only return articles with this resource_doi|
|» resource_id|body|string|false|only return collections with this resource_id|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» order_direction|asc|
|» order_direction|desc|
|» order|published_date|
|» order|modified_date|
|» order|views|
|» order|shares|
|» order|downloads|
|» order|cites|

> Example responses

> 200 Response

```json
[
  {
    "defined_type": 3,
    "defined_type_name": "media",
    "doi": "10.6084/m9.figshare.1434614",
    "group_id": 1234,
    "handle": "111184/figshare.1234",
    "id": 1434614,
    "published_date": "2015-12-31T23:59:59.000Z",
    "thumb": "https://ndownloader.figshare.com/files/123456789/preview/12345678/thumb.png",
    "timeline": {
      "firstOnline": "2015-12-31",
      "publisherAcceptance": "2015-12-31",
      "publisherPublication": "2015-12-31",
      "posted": "2015-12-31",
      "revision": "2015-12-31",
      "submission": "2015-12-31"
    },
    "title": "Test article title",
    "url": "http://api.figshare.com/articles/1434614",
    "url_private_api": "https://api.figshare.com/account/articles/1434614",
    "url_private_html": "https://figshare.com/account/articles/1434614",
    "url_public_api": "https://api.figshare.com/articles/1434614",
    "url_public_html": "https://figshare.com/articles/media/Test_article_title/1434614",
    "project_id": 1
  }
]
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="private-articles-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. An array of articles|Inline|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="private-articles-search-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ArticleWithProject](#schemaarticlewithproject)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Article details

<a id="opIdprivate_article_details"></a>

> Code samples

```bash
curl https://example.com/account/articles/1 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/articles/{article_id}`

View a private article

<h3 id="article-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article unique identifier|

> Example responses

> 200 Response

```json
{
  "defined_type": 3,
  "defined_type_name": "media",
  "doi": "10.6084/m9.figshare.1434614",
  "group_id": 1234,
  "handle": "111184/figshare.1234",
  "id": 1434614,
  "published_date": "2015-12-31T23:59:59.000Z",
  "thumb": "https://ndownloader.figshare.com/files/123456789/preview/12345678/thumb.png",
  "timeline": {
    "firstOnline": "2015-12-31",
    "publisherAcceptance": "2015-12-31",
    "publisherPublication": "2015-12-31",
    "posted": "2015-12-31",
    "revision": "2015-12-31",
    "submission": "2015-12-31"
  },
  "title": "Test article title",
  "url": "http://api.figshare.com/articles/1434614",
  "url_private_api": "https://api.figshare.com/account/articles/1434614",
  "url_private_html": "https://figshare.com/account/articles/1434614",
  "url_public_api": "https://api.figshare.com/articles/1434614",
  "url_public_html": "https://figshare.com/articles/media/Test_article_title/1434614",
  "categories": [
    {
      "id": 11,
      "parent_id": 1,
      "path": "/450/1024/6532",
      "source_id": "300204",
      "taxonomy_id": 4,
      "title": "Anatomy"
    }
  ],
  "citation": "lilliput, figshare admin (2017): first project item. figshare.\n \n Retrieved: 14 01, May 22, 2017 (GMT)",
  "confidential_reason": "none",
  "created_date": "2017-05-18T11:49:03Z",
  "description": "article description",
  "embargo_date": "2017-05-18T11:49:03Z",
  "embargo_reason": "not complete",
  "embargo_title": "File(s) under embargo",
  "embargo_type": "article",
  "funding": "none",
  "funding_list": [
    0
  ],
  "has_linked_file": true,
  "is_active": true,
  "is_confidential": true,
  "is_embargoed": true,
  "is_metadata_record": false,
  "is_public": true,
  "license": {
    "name": "CC BY",
    "url": "http://creativecommons.org/licenses/by/4.0/",
    "value": 1
  },
  "metadata_reason": "hosted somewhere else",
  "modified_date": "2017-05-18T11:49:03Z",
  "references": [
    "http://figshare.com",
    "http://figshare.com/api"
  ],
  "size": 69939,
  "status": "public",
  "tags": [
    "t1",
    "t2",
    "t3"
  ],
  "version": 1,
  "authors": [
    {
      "full_name": "John Doe",
      "id": 97657,
      "is_active": 1,
      "orcid_id": "1234-5678-9123-1234",
      "url_name": "John_Doe"
    }
  ],
  "custom_fields": [
    {
      "is_mandatory": false,
      "name": "key",
      "value": "value"
    }
  ],
  "embargo_options": [
    {
      "id": 364,
      "ip_name": "Figshare IP range",
      "type": "ip_range"
    }
  ],
  "figshare_url": "http://figshare.com/articles/media/article_name/2000005",
  "files": [
    {
      "computed_md5": "043a51806d646e88cafbf19e7b82846f",
      "download_url": "https://ndownloader.figshare.com/files/3000002",
      "id": 3000002,
      "is_link_only": false,
      "name": "test.xls",
      "size": 14848,
      "supplied_md5": "043a51806d646e88cafbf19e7b82846f"
    }
  ],
  "resource_doi": "10.5072/FK2.developmentfigshare.2000005",
  "resource_title": "first article",
  "account_id": 1000001,
  "group_resource_id": null
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="article-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Article representation|[ArticleCompletePrivate](#schemaarticlecompleteprivate)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Update article

<a id="opIdprivate_article_update"></a>

> Code samples

```bash
curl https://example.com/account/articles/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "authors": [
      {
        "name": "John Doe"
      },
      {
        "id": 1000008
      }
    ],
    "categories": [
      1,
      10,
      11
    ],
    "categories_by_source_id": [
      "300204",
      "400207"
    ],
    "custom_fields": {
      "defined_key": "value for it"
    },
    "custom_fields_list": [
      {
        "name": "key",
        "value": "value"
      }
    ],
    "defined_type": "media",
    "description": "Test description of article",
    "doi": "",
    "funding": "",
    "funding_list": [
      {
        "id": 0,
        "title": "string"
      }
    ],
    "group_id": 0,
    "handle": "",
    "is_metadata_record": true,
    "keywords": [
      "tag1",
      "tag2"
    ],
    "license": 1,
    "metadata_reason": "hosted somewhere else",
    "references": [
      "http://figshare.com",
      "http://api.figshare.com"
    ],
    "resource_doi": "",
    "resource_title": "",
    "tags": [
      "tag1",
      "tag2"
    ],
    "timeline": {
      "firstOnline": "2015-12-31",
      "publisherAcceptance": "2015-12-31",
      "publisherPublication": "2015-12-31"
    },
    "title": "Test article title"
  }'
```

`PUT /account/articles/{article_id}`

Updating an article by passing body parameters; request can also be made with the PATCH method.

> Body parameter

```json
{
  "authors": [
    {
      "name": "John Doe"
    },
    {
      "id": 1000008
    }
  ],
  "categories": [
    1,
    10,
    11
  ],
  "categories_by_source_id": [
    "300204",
    "400207"
  ],
  "custom_fields": {
    "defined_key": "value for it"
  },
  "custom_fields_list": [
    {
      "name": "key",
      "value": "value"
    }
  ],
  "defined_type": "media",
  "description": "Test description of article",
  "doi": "",
  "funding": "",
  "funding_list": [
    {
      "id": 0,
      "title": "string"
    }
  ],
  "group_id": 0,
  "handle": "",
  "is_metadata_record": true,
  "keywords": [
    "tag1",
    "tag2"
  ],
  "license": 1,
  "metadata_reason": "hosted somewhere else",
  "references": [
    "http://figshare.com",
    "http://api.figshare.com"
  ],
  "resource_doi": "",
  "resource_title": "",
  "tags": [
    "tag1",
    "tag2"
  ],
  "timeline": {
    "firstOnline": "2015-12-31",
    "publisherAcceptance": "2015-12-31",
    "publisherPublication": "2015-12-31"
  },
  "title": "Test article title"
}
```

<h3 id="update-article-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article unique identifier|
|body|body|[ArticleUpdate](#schemaarticleupdate)|true|Article description|
|» authors|body|[object]|false|List of authors to be associated with the article. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint.|
|» categories|body|[integer(int64)]|false|List of category ids to be associated with the article(e.g [1, 23, 33, 66])|
|» categories_by_source_id|body|[string]|false|List of category source ids to be associated with the article, supersedes the categories property|
|» custom_fields|body|object|false|List of key, values pairs to be associated with the article|
|» custom_fields_list|body|[[CustomArticleFieldAdd](#schemacustomarticlefieldadd)]|false|List of custom fields values, supersedes custom_fields parameter|
|» defined_type|body|string|false|<b>One of:</b> <code>figure</code> <code>online resource</code> <code>preprint</code> <code>book</code> <code>conference contribution</code> <code>media</code> <code>dataset</code> <code>poster</code> <code>journal contribution</code> <code>presentation</code> <code>thesis</code> <code>software</code>|
|» description|body|string|false|The article description. In a publisher case, usually this is the remote article description|
|» doi|body|string|false|Not applicable for regular users. In an institutional case, make sure your group supports setting DOIs. This setting is applied by figshare via opening a ticket through our support/helpdesk system.|
|» funding|body|string|false|Grant number or funding authority|
|» funding_list|body|[[FundingCreate](#schemafundingcreate)]|false|Funding creation / update items|
|» group_id|body|integer(int64)|false|Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups|
|» handle|body|string|false|Not applicable for regular users. In an institutional case, make sure your group supports setting Handles. This setting is applied by figshare via opening a ticket through our support/helpdesk system.|
|» is_metadata_record|body|boolean|false|True if article has no files|
|» keywords|body|[string]|false|List of tags to be associated with the article. Tags can be used instead|
|» license|body|integer(int64)|false|License id for this article.|
|» metadata_reason|body|string|false|Article metadata reason|
|» references|body|[string(link)]|false|List of links to be associated with the article (e.g ["http://link1", "http://link2", "http://link3"])|
|» resource_doi|body|string|false|Not applicable to regular users. In a publisher case, this is the publisher article DOI.|
|» resource_title|body|string|false|Not applicable to regular users. In a publisher case, this is the publisher article title.|
|» tags|body|[string]|false|List of tags to be associated with the article. Keywords can be used instead|
|» timeline|body|[TimelineUpdate](#schematimelineupdate)|false|none|
|» title|body|string|false|Title of article|

> Example responses

> 205 Response

```json
{
  "location": "http://example.com",
  "warnings": [
    "string"
  ]
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="update-article-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|Reset Content|Reset Content|[LocationWarningsUpdate](#schemalocationwarningsupdate)|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|205|Location|string|link|Location of newly created article|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Delete article

<a id="opIdprivate_article_delete"></a>

> Code samples

```bash
curl https://example.com/account/articles/1 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /account/articles/{article_id}`

Delete an article

<h3 id="delete-article-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article unique identifier|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-article-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## List article authors

<a id="opIdprivate_article_authors_list"></a>

> Code samples

```bash
curl https://example.com/account/articles/1/authors \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/articles/{article_id}/authors`

List article authors

<h3 id="list-article-authors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article unique identifier|

> Example responses

> 200 Response

```json
[
  {
    "full_name": "John Doe",
    "id": 97657,
    "is_active": 1,
    "orcid_id": "1234-5678-9123-1234",
    "url_name": "John_Doe"
  }
]
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-article-authors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Authors list for article|Inline|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="list-article-authors-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Author](#schemaauthor)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Replace article authors

<a id="opIdprivate_article_authors_replace"></a>

> Code samples

```bash
curl https://example.com/account/articles/1/authors \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "authors": [
      {
        "id": 12121
      },
      {
        "id": 34345
      },
      {
        "name": "John Doe"
      }
    ]
  }'
```

`PUT /account/articles/{article_id}/authors`

Associate new authors with the article. This will remove all already associated authors and add these new ones

> Body parameter

```json
{
  "authors": [
    {
      "id": 12121
    },
    {
      "id": 34345
    },
    {
      "name": "John Doe"
    }
  ]
}
```

<h3 id="replace-article-authors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article unique identifier|
|body|body|[AuthorsCreator](#schemaauthorscreator)|true|Authors description|
|» authors|body|[object]|true|List of authors to be associated with the article. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint.|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="replace-article-authors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|Reset Content|Reset Content|None|
|400|Bad Request|Bad Request. Article ID must be an integer and bigger than 0. Author with ID Not Found.|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|205|Location|string|url|Location of list of authors|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Add article authors

<a id="opIdprivate_article_authors_add"></a>

> Code samples

```bash
curl https://example.com/account/articles/1/authors \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "authors": [
      {
        "id": 12121
      },
      {
        "id": 34345
      },
      {
        "name": "John Doe"
      }
    ]
  }'
```

`POST /account/articles/{article_id}/authors`

Associate new authors with the article. This will add new authors to the list of already associated authors

> Body parameter

```json
{
  "authors": [
    {
      "id": 12121
    },
    {
      "id": 34345
    },
    {
      "name": "John Doe"
    }
  ]
}
```

<h3 id="add-article-authors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article unique identifier|
|body|body|[AuthorsCreator](#schemaauthorscreator)|true|Authors description|
|» authors|body|[object]|true|List of authors to be associated with the article. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint.|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="add-article-authors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|Reset Content|Reset Content|None|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|205|Location|string|url|Location of list of authors|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Delete article author

<a id="opIdprivate_article_author_delete"></a>

> Code samples

```bash
curl https://example.com/account/articles/1/authors/1 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /account/articles/{article_id}/authors/{author_id}`

De-associate author from article

<h3 id="delete-article-author-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article unique identifier|
|author_id|path|integer(int64)|true|Article Author unique identifier|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-article-author-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## List article categories

<a id="opIdprivate_article_categories_list"></a>

> Code samples

```bash
curl https://example.com/account/articles/1/categories \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/articles/{article_id}/categories`

List article categories

<h3 id="list-article-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article unique identifier|

> Example responses

> 200 Response

```json
[
  {
    "id": 11,
    "parent_id": 1,
    "path": "/450/1024/6532",
    "source_id": "300204",
    "taxonomy_id": 4,
    "title": "Anatomy"
  }
]
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-article-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Article categories|Inline|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="list-article-categories-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Category](#schemacategory)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Replace article categories

<a id="opIdprivate_article_categories_replace"></a>

> Code samples

```bash
curl https://example.com/account/articles/1/categories \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "categories": [
      1,
      10,
      11
    ]
  }'
```

`PUT /account/articles/{article_id}/categories`

Associate new categories with the article. This will remove all already associated categories and add these new ones

> Body parameter

```json
{
  "categories": [
    1,
    10,
    11
  ]
}
```

<h3 id="replace-article-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article unique identifier|
|body|body|[CategoriesCreator](#schemacategoriescreator)|true|none|
|» categories|body|[integer(int64)]|true|List of category ids|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="replace-article-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|Reset Content|Reset Content|None|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Add article categories

<a id="opIdprivate_article_categories_add"></a>

> Code samples

```bash
curl https://example.com/account/articles/1/categories \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "categories": [
      1,
      10,
      11
    ]
  }'
```

`POST /account/articles/{article_id}/categories`

Associate new categories with the article. This will add new categories to the list of already associated categories

> Body parameter

```json
{
  "categories": [
    1,
    10,
    11
  ]
}
```

<h3 id="add-article-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article unique identifier|
|body|body|[CategoriesCreator](#schemacategoriescreator)|true|none|
|» categories|body|[integer(int64)]|true|List of category ids|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="add-article-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|Reset Content|Reset Content|None|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Delete article category

<a id="opIdprivate_article_category_delete"></a>

> Code samples

```bash
curl https://example.com/account/articles/1/categories/1 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /account/articles/{article_id}/categories/{category_id}`

De-associate category from article

<h3 id="delete-article-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article unique identifier|
|category_id|path|integer(int64)|true|Category unique identifier|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-article-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Article confidentiality details

<a id="opIdprivate_article_confidentiality_details"></a>

> Code samples

```bash
curl https://example.com/account/articles/1/confidentiality \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/articles/{article_id}/confidentiality`

View confidentiality settings. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.

<h3 id="article-confidentiality-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article unique identifier|

> Example responses

> 200 Response

```json
{
  "is_confidential": true,
  "reason": "need to"
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="article-confidentiality-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Article categories|[ArticleConfidentiality](#schemaarticleconfidentiality)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Update article confidentiality

<a id="opIdprivate_article_confidentiality_update"></a>

> Code samples

```bash
curl https://example.com/account/articles/1/confidentiality \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "reason": "string"
  }'
```

`PUT /account/articles/{article_id}/confidentiality`

Update confidentiality settings. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.

> Body parameter

```json
{
  "reason": "string"
}
```

<h3 id="update-article-confidentiality-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article unique identifier|
|body|body|[ConfidentialityCreator](#schemaconfidentialitycreator)|true|none|
|» reason|body|string|true|Reason for confidentiality|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="update-article-confidentiality-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|Reset Content|Reset Content|None|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Delete article confidentiality

<a id="opIdprivate_article_confidentiality_delete"></a>

> Code samples

```bash
curl https://example.com/account/articles/1/confidentiality \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /account/articles/{article_id}/confidentiality`

Delete confidentiality settings. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.

<h3 id="delete-article-confidentiality-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article unique identifier|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-article-confidentiality-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Article Embargo Details

<a id="opIdprivate_article_embargo_details"></a>

> Code samples

```bash
curl https://example.com/account/articles/1/embargo \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/articles/{article_id}/embargo`

View a private article embargo details

<h3 id="article-embargo-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article unique identifier|

> Example responses

> 200 Response

```json
{
  "embargo_date": "2018-05-22T04:04:04",
  "embargo_options": [
    {
      "group_ids": [],
      "id": 13,
      "ip_name": "bacau",
      "type": "ip_range"
    },
    {
      "group_ids": [
        550,
        9448
      ],
      "id": 12,
      "ip_name": "",
      "type": "logged_in"
    }
  ],
  "embargo_reason": "",
  "embargo_title": "File(s) under embargo",
  "embargo_type": "",
  "is_embargoed": true
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="article-embargo-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Embargo for article|[ArticleEmbargo](#schemaarticleembargo)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Update Article Embargo

<a id="opIdprivate_article_embargo_update"></a>

> Code samples

```bash
curl https://example.com/account/articles/1/embargo \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "embargo_date": "2018-05-22T04:04:04",
    "embargo_options": [
      {
        "id": 1321
      },
      {
        "id": 3345
      },
      {
        "group_ids": [
          4332,
          5433,
          678
        ],
        "id": 54621
      }
    ],
    "embargo_reason": "",
    "embargo_title": "File(s) under embargo",
    "embargo_type": "file",
    "is_embargoed": true
  }'
```

`PUT /account/articles/{article_id}/embargo`

Note: setting an article under whole embargo does not imply that the article will be published when the embargo will expire. You must explicitly call the publish endpoint to enable this functionality.

> Body parameter

```json
{
  "embargo_date": "2018-05-22T04:04:04",
  "embargo_options": [
    {
      "id": 1321
    },
    {
      "id": 3345
    },
    {
      "group_ids": [
        4332,
        5433,
        678
      ],
      "id": 54621
    }
  ],
  "embargo_reason": "",
  "embargo_title": "File(s) under embargo",
  "embargo_type": "file",
  "is_embargoed": true
}
```

<h3 id="update-article-embargo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article unique identifier|
|body|body|[ArticleEmbargoUpdater](#schemaarticleembargoupdater)|true|Embargo description|
|» embargo_date|body|string|true|Date when the embargo expires and the article gets published, '0' value will set up permanent embargo|
|» embargo_options|body|[object]|false|List of embargo permissions to be associated with the article. The list must contain `id` and can also contain `group_ids`(a field that only applies to 'logged_in' permissions). The new list replaces old options in the database, and an empty list removes all permissions for this article. Administration permission has to be set up alone but logged in and IP range permissions can be set up together.|
|» embargo_reason|body|string|false|Reason for setting embargo|
|» embargo_title|body|string|false|Title for embargo|
|» embargo_type|body|string|true|Embargo can be enabled at the article or the file level. Possible values: article, file|
|» is_embargoed|body|boolean|true|Embargo status|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» embargo_type|article|
|» embargo_type|file|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="update-article-embargo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|Reset Content|Reset Content|None|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|205|Location|string|link|Location of embargo|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Delete Article Embargo

<a id="opIdprivate_article_embargo_delete"></a>

> Code samples

```bash
curl https://example.com/account/articles/1/embargo \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /account/articles/{article_id}/embargo`

Will lift the embargo for the specified article

<h3 id="delete-article-embargo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article unique identifier|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-article-embargo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## List article files

<a id="opIdprivate_article_files_list"></a>

> Code samples

```bash
curl https://example.com/account/articles/1/files \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/articles/{article_id}/files`

List private files

<h3 id="list-article-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article unique identifier|

> Example responses

> 200 Response

```json
[
  {
    "computed_md5": "043a51806d646e88cafbf19e7b82846f",
    "download_url": "https://ndownloader.figshare.com/files/3000002",
    "id": 3000002,
    "is_link_only": false,
    "name": "test.xls",
    "size": 14848,
    "supplied_md5": "043a51806d646e88cafbf19e7b82846f",
    "is_attached_to_public_version": true,
    "preview_state": "preview not available",
    "status": "created",
    "upload_token": "9dfc5fe3-d617-4d93-ac11-8afe7e984a4b",
    "upload_url": "https://uploads.figshare.com",
    "viewer_type": "string"
  }
]
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-article-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Article files list|Inline|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="list-article-files-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PrivateFile](#schemaprivatefile)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Initiate Upload

<a id="opIdprivate_article_upload_initiate"></a>

> Code samples

```bash
curl https://example.com/account/articles/1/files \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "link": "http://figshare.com/file.txt",
    "md5": "6c16e6e7d7587bd078e5117dda01d565",
    "name": "test.py",
    "size": 70
  }'
```

`POST /account/articles/{article_id}/files`

Initiate a new file upload within the article. Either use the link property to point to an existing file that resides elsewhere and will not be uploaded to Figshare or use the other 3 parameters (md5, name, size).

> Body parameter

```json
{
  "link": "http://figshare.com/file.txt",
  "md5": "6c16e6e7d7587bd078e5117dda01d565",
  "name": "test.py",
  "size": 70
}
```

<h3 id="initiate-upload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article unique identifier|
|body|body|[FileCreator](#schemafilecreator)|true|none|
|» link|body|string|false|Url for an existing file that will not be uploaded to Figshare|
|» md5|body|string|false|MD5 sum pre-computed on client side.|
|» name|body|string|false|File name including the extension; can be omitted only for linked files.|
|» size|body|integer(int64)|false|File size in bytes; can be omitted only for linked files.|

> Example responses

> 201 Response

```json
{
  "location": "http://example.com"
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="initiate-upload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[Location](#schemalocation)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|422|Unprocessable Entity|Unprocessable Entity. Parameters missing or incorrect|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string|url|Location of new file|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Single File

<a id="opIdprivate_article_file"></a>

> Code samples

```bash
curl https://example.com/account/articles/1/files/1 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/articles/{article_id}/files/{file_id}`

View details of file for specified article

<h3 id="single-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article unique identifier|
|file_id|path|integer(int64)|true|File unique identifier|

> Example responses

> 200 Response

```json
{
  "computed_md5": "043a51806d646e88cafbf19e7b82846f",
  "download_url": "https://ndownloader.figshare.com/files/3000002",
  "id": 3000002,
  "is_link_only": false,
  "name": "test.xls",
  "size": 14848,
  "supplied_md5": "043a51806d646e88cafbf19e7b82846f",
  "is_attached_to_public_version": true,
  "preview_state": "preview not available",
  "status": "created",
  "upload_token": "9dfc5fe3-d617-4d93-ac11-8afe7e984a4b",
  "upload_url": "https://uploads.figshare.com",
  "viewer_type": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="single-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Article private file|[PrivateFile](#schemaprivatefile)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Complete Upload

<a id="opIdprivate_article_upload_complete"></a>

> Code samples

```bash
curl https://example.com/account/articles/1/files/1 \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /account/articles/{article_id}/files/{file_id}`

Complete file upload

<h3 id="complete-upload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article unique identifier|
|file_id|path|integer(int64)|true|File unique identifier|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="complete-upload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|None|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## File Delete

<a id="opIdprivate_article_file_delete"></a>

> Code samples

```bash
curl https://example.com/account/articles/1/files/1 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /account/articles/{article_id}/files/{file_id}`

Complete file upload

<h3 id="file-delete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article unique identifier|
|file_id|path|integer(int64)|true|File unique identifier|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="file-delete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## List private links

<a id="opIdprivate_article_private_link"></a>

> Code samples

```bash
curl https://example.com/account/articles/1/private_links \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/articles/{article_id}/private_links`

List private links

<h3 id="list-private-links-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article unique identifier|

> Example responses

> 200 Response

```json
[
  {
    "expires_date": "2015-07-03T00:00:00",
    "html_location": "https://figshare.com/s/d5ec7a85bcd6dbe9d9b2",
    "id": "0cfb0dbeac92df445df4aba45f63fdc85fa0b9a888b64e157ce3c93b576aa300fb3621ef3a219515dd482",
    "is_active": true
  }
]
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-private-links-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Article private links|Inline|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="list-private-links-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PrivateLink](#schemaprivatelink)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Create private link

<a id="opIdprivate_article_private_link_create"></a>

> Code samples

```bash
curl https://example.com/account/articles/1/private_links \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "expires_date": "2018-02-22 22:22:22",
    "read_only": true
  }'
```

`POST /account/articles/{article_id}/private_links`

Create new private link for this article

> Body parameter

```json
{
  "expires_date": "2018-02-22 22:22:22",
  "read_only": true
}
```

<h3 id="create-private-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article unique identifier|
|body|body|[PrivateLinkCreator](#schemaprivatelinkcreator)|false|none|
|» expires_date|body|string|false|Date when this private link should expire - optional. By default private links expire in 365 days.|
|» read_only|body|boolean|false|Optional, default true. Set to false to give private link users editing rights for this collection.|

> Example responses

> 201 Response

```json
{
  "html_location": "https://figshare.com/s/d5ec7a85bcd6dbe9d9b2",
  "location": "http://example.com",
  "token": "d5ec7a85bcd6dbe9d9b2"
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-private-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[PrivateLinkResponse](#schemaprivatelinkresponse)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string|url|Location of private link|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Update private link

<a id="opIdprivate_article_private_link_update"></a>

> Code samples

```bash
curl https://example.com/account/articles/1/private_links/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "expires_date": "2018-02-22 22:22:22",
    "read_only": true
  }'
```

`PUT /account/articles/{article_id}/private_links/{link_id}`

Update existing private link for this article

> Body parameter

```json
{
  "expires_date": "2018-02-22 22:22:22",
  "read_only": true
}
```

<h3 id="update-private-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article unique identifier|
|link_id|path|string|true|Private link token|
|body|body|[PrivateLinkCreator](#schemaprivatelinkcreator)|false|none|
|» expires_date|body|string|false|Date when this private link should expire - optional. By default private links expire in 365 days.|
|» read_only|body|boolean|false|Optional, default true. Set to false to give private link users editing rights for this collection.|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="update-private-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|Reset Content|Reset Content|None|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|205|Location|string|url|Location of private link|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Disable private link

<a id="opIdprivate_article_private_link_delete"></a>

> Code samples

```bash
curl https://example.com/account/articles/1/private_links/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /account/articles/{article_id}/private_links/{link_id}`

Disable/delete private link for this article

<h3 id="disable-private-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article unique identifier|
|link_id|path|string|true|Private link token|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="disable-private-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Private Article Publish

<a id="opIdprivate_article_publish"></a>

> Code samples

```bash
curl https://example.com/account/articles/1/publish \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /account/articles/{article_id}/publish`

- If the whole article is under embargo, it will not be published immediately, but when the embargo expires or is lifted.
- When an article is published, a new public version will be generated. Any further updates to the article will affect the private article data. In order to make these changes publicly visible, an explicit publish operation is needed.

<h3 id="private-article-publish-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article unique identifier|

> Example responses

> 201 Response

```json
{
  "location": "http://example.com"
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="private-article-publish-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[Location](#schemalocation)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string|link|Location of newly published article|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Private Article Reserve DOI

<a id="opIdprivate_article_reserve_doi"></a>

> Code samples

```bash
curl https://example.com/account/articles/1/reserve_doi \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /account/articles/{article_id}/reserve_doi`

Reserve DOI for article

<h3 id="private-article-reserve-doi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article unique identifier|

> Example responses

> 200 Response

```json
{
  "doi": "10.5072/FK2.FIGSHARE.20345"
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="private-article-reserve-doi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ArticleDOI](#schemaarticledoi)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Private Article Reserve Handle

<a id="opIdprivate_article_reserve_handle"></a>

> Code samples

```bash
curl https://example.com/account/articles/1/reserve_handle \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /account/articles/{article_id}/reserve_handle`

Reserve Handle for article

<h3 id="private-article-reserve-handle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article unique identifier|

> Example responses

> 200 Response

```json
{
  "handle": "11172/FK2.FIGSHARE.20345"
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="private-article-reserve-handle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ArticleHandle](#schemaarticlehandle)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Private Article Resource

<a id="opIdprivate_article_resource"></a>

> Code samples

```bash
curl https://example.com/account/articles/1/resource \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "doi": "",
    "id": "aaaa23512",
    "link": "https://docs.figshare.com",
    "status": "frozen",
    "title": "Test title",
    "version": 1
  }'
```

`POST /account/articles/{article_id}/resource`

Edit article resource data.

> Body parameter

```json
{
  "doi": "",
  "id": "aaaa23512",
  "link": "https://docs.figshare.com",
  "status": "frozen",
  "title": "Test title",
  "version": 1
}
```

<h3 id="private-article-resource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article unique identifier|
|body|body|[Resource](#schemaresource)|true|Resource data|
|» doi|body|string|false|DOI of resource item|
|» id|body|string|false|ID of resource item|
|» link|body|string|false|Link of resource item|
|» status|body|string|false|Status of resource item|
|» title|body|string|false|Title of resource item|
|» version|body|integer(int64)|false|Version of resource item|

> Example responses

> 205 Response

```json
{
  "location": "http://example.com"
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="private-article-resource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|Reset Content|Reset Content|[Location](#schemalocation)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|422|Unprocessable Entity|Unprocessable Entity|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|205|Location|string|link|Location for account article details|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Update article version

<a id="opIdarticle_version_update"></a>

> Code samples

```bash
curl https://example.com/account/articles/1/versions/1/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "authors": [
      {
        "name": "John Doe"
      },
      {
        "id": 1000008
      }
    ],
    "categories": [
      1,
      10,
      11
    ],
    "categories_by_source_id": [
      "300204",
      "400207"
    ],
    "custom_fields": {
      "defined_key": "value for it"
    },
    "custom_fields_list": [
      {
        "name": "key",
        "value": "value"
      }
    ],
    "defined_type": "media",
    "description": "Test description of article",
    "doi": "",
    "funding": "",
    "funding_list": [
      {
        "id": 0,
        "title": "string"
      }
    ],
    "group_id": 0,
    "handle": "",
    "is_metadata_record": true,
    "keywords": [
      "tag1",
      "tag2"
    ],
    "license": 1,
    "metadata_reason": "hosted somewhere else",
    "references": [
      "http://figshare.com",
      "http://api.figshare.com"
    ],
    "resource_doi": "",
    "resource_title": "",
    "tags": [
      "tag1",
      "tag2"
    ],
    "timeline": {
      "firstOnline": "2015-12-31",
      "publisherAcceptance": "2015-12-31",
      "publisherPublication": "2015-12-31"
    },
    "title": "Test article title"
  }'
```

`PUT /account/articles/{article_id}/versions/{version_id}/`

Updating an article version by passing body parameters; request can also be made with the PATCH method.

> Body parameter

```json
{
  "authors": [
    {
      "name": "John Doe"
    },
    {
      "id": 1000008
    }
  ],
  "categories": [
    1,
    10,
    11
  ],
  "categories_by_source_id": [
    "300204",
    "400207"
  ],
  "custom_fields": {
    "defined_key": "value for it"
  },
  "custom_fields_list": [
    {
      "name": "key",
      "value": "value"
    }
  ],
  "defined_type": "media",
  "description": "Test description of article",
  "doi": "",
  "funding": "",
  "funding_list": [
    {
      "id": 0,
      "title": "string"
    }
  ],
  "group_id": 0,
  "handle": "",
  "is_metadata_record": true,
  "keywords": [
    "tag1",
    "tag2"
  ],
  "license": 1,
  "metadata_reason": "hosted somewhere else",
  "references": [
    "http://figshare.com",
    "http://api.figshare.com"
  ],
  "resource_doi": "",
  "resource_title": "",
  "tags": [
    "tag1",
    "tag2"
  ],
  "timeline": {
    "firstOnline": "2015-12-31",
    "publisherAcceptance": "2015-12-31",
    "publisherPublication": "2015-12-31"
  },
  "title": "Test article title"
}
```

<h3 id="update-article-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article unique identifier|
|version_id|path|integer(int64)|true|Article version identifier|
|body|body|[ArticleUpdate](#schemaarticleupdate)|true|Article description|
|» authors|body|[object]|false|List of authors to be associated with the article. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint.|
|» categories|body|[integer(int64)]|false|List of category ids to be associated with the article(e.g [1, 23, 33, 66])|
|» categories_by_source_id|body|[string]|false|List of category source ids to be associated with the article, supersedes the categories property|
|» custom_fields|body|object|false|List of key, values pairs to be associated with the article|
|» custom_fields_list|body|[[CustomArticleFieldAdd](#schemacustomarticlefieldadd)]|false|List of custom fields values, supersedes custom_fields parameter|
|» defined_type|body|string|false|<b>One of:</b> <code>figure</code> <code>online resource</code> <code>preprint</code> <code>book</code> <code>conference contribution</code> <code>media</code> <code>dataset</code> <code>poster</code> <code>journal contribution</code> <code>presentation</code> <code>thesis</code> <code>software</code>|
|» description|body|string|false|The article description. In a publisher case, usually this is the remote article description|
|» doi|body|string|false|Not applicable for regular users. In an institutional case, make sure your group supports setting DOIs. This setting is applied by figshare via opening a ticket through our support/helpdesk system.|
|» funding|body|string|false|Grant number or funding authority|
|» funding_list|body|[[FundingCreate](#schemafundingcreate)]|false|Funding creation / update items|
|» group_id|body|integer(int64)|false|Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups|
|» handle|body|string|false|Not applicable for regular users. In an institutional case, make sure your group supports setting Handles. This setting is applied by figshare via opening a ticket through our support/helpdesk system.|
|» is_metadata_record|body|boolean|false|True if article has no files|
|» keywords|body|[string]|false|List of tags to be associated with the article. Tags can be used instead|
|» license|body|integer(int64)|false|License id for this article.|
|» metadata_reason|body|string|false|Article metadata reason|
|» references|body|[string(link)]|false|List of links to be associated with the article (e.g ["http://link1", "http://link2", "http://link3"])|
|» resource_doi|body|string|false|Not applicable to regular users. In a publisher case, this is the publisher article DOI.|
|» resource_title|body|string|false|Not applicable to regular users. In a publisher case, this is the publisher article title.|
|» tags|body|[string]|false|List of tags to be associated with the article. Keywords can be used instead|
|» timeline|body|[TimelineUpdate](#schematimelineupdate)|false|none|
|» title|body|string|false|Title of article|

> Example responses

> 205 Response

```json
{
  "location": "http://example.com",
  "warnings": [
    "string"
  ]
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="update-article-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|Reset Content|Reset Content|[LocationWarningsUpdate](#schemalocationwarningsupdate)|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|205|Location|string|link|Location of newly created article|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Update article version thumbnail

<a id="opIdarticle_version_update_thumb"></a>

> Code samples

```bash
curl https://example.com/account/articles/1/versions/1/update_thumb \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "file_id": 123
  }'
```

`PUT /account/articles/{article_id}/versions/{version_id}/update_thumb`

For a given public article version update the article thumbnail by choosing one of the associated files

> Body parameter

```json
{
  "file_id": 123
}
```

<h3 id="update-article-version-thumbnail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article unique identifier|
|version_id|path|integer(int64)|true|Article version identifier|
|body|body|[FileId](#schemafileid)|true|File ID|
|» file_id|body|integer(int64)|false|File ID|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="update-article-version-thumbnail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|Reset Content|Reset Content|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|422|Unprocessable Entity|Unprocessable Entity|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|205|Location|string|link|Location for article version details|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Public Articles

<a id="opIdarticles_list"></a>

> Code samples

```bash
curl https://example.com/articles \
  -H 'Accept: application/json'
```

`GET /articles`

Returns a list of public articles

<h3 id="public-articles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Cursor|header|string(uuid)|false|Unique hash used for bypassing the item retrieval limit of 9,000 entities. When using this parameter, please note that the offset parameter will not be available, but the limit parameter will still work as expected.|
|page|query|integer(int64)|false|Page number. Used for pagination with page_size|
|page_size|query|integer(int64)|false|The number of results included on a page. Used for pagination with page|
|limit|query|integer(int64)|false|Number of results included on a page. Used for pagination with query|
|offset|query|integer(int64)|false|Where to start the listing(the offset of the first result). Used for pagination with limit|
|order|query|string|false|The field by which to order. Default varies by endpoint/resource.|
|order_direction|query|string|false|none|
|institution|query|integer(int64)|false|only return articles from this institution|
|published_since|query|string|false|Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD|
|modified_since|query|string|false|Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD|
|group|query|integer(int64)|false|only return articles from this group|
|resource_doi|query|string|false|only return articles with this resource_doi|
|item_type|query|integer(int64)|false|Only return articles with the respective type. Mapping for item_type is: 1 - Figure, 2 - Media, 3 - Dataset, 5 - Poster, 6 - Journal contribution, 7 - Presentation, 8 - Thesis, 9 - Software, 11 - Online resource, 12 - Preprint, 13 - Book, 14 - Conference contribution, 15 - Chapter, 16 - Peer review, 17 - Educational resource, 18 - Report, 19 - Standard, 20 - Composition, 21 - Funding, 22 - Physical object, 23 - Data management plan, 24 - Workflow, 25 - Monograph, 26 - Performance, 27 - Event, 28 - Service, 29 - Model|
|doi|query|string|false|only return articles with this doi|
|handle|query|string|false|only return articles with this handle|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|published_date|
|order|modified_date|
|order|views|
|order|shares|
|order|downloads|
|order|cites|
|order_direction|asc|
|order_direction|desc|

> Example responses

> 200 Response

```json
[
  {
    "defined_type": 3,
    "defined_type_name": "media",
    "doi": "10.6084/m9.figshare.1434614",
    "group_id": 1234,
    "handle": "111184/figshare.1234",
    "id": 1434614,
    "published_date": "2015-12-31T23:59:59.000Z",
    "thumb": "https://ndownloader.figshare.com/files/123456789/preview/12345678/thumb.png",
    "timeline": {
      "firstOnline": "2015-12-31",
      "publisherAcceptance": "2015-12-31",
      "publisherPublication": "2015-12-31",
      "posted": "2015-12-31",
      "revision": "2015-12-31",
      "submission": "2015-12-31"
    },
    "title": "Test article title",
    "url": "http://api.figshare.com/articles/1434614",
    "url_private_api": "https://api.figshare.com/account/articles/1434614",
    "url_private_html": "https://figshare.com/account/articles/1434614",
    "url_public_api": "https://api.figshare.com/articles/1434614",
    "url_public_html": "https://figshare.com/articles/media/Test_article_title/1434614"
  }
]
```

<h3 id="public-articles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. An array of articles|Inline|
|400|Bad Request|Bad Request|None|
|422|Unprocessable Entity|Unprocessable Entity. Syntax is correct but one of the parameters isn't correctly processed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="public-articles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Article](#schemaarticle)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Cursor|string||Unique hash used for bypassing the item retrieval limit of 9,000 entities.|

<aside class="success">
This operation does not require authentication
</aside>

## Public Articles Search

<a id="opIdarticles_search"></a>

> Code samples

```bash
curl https://example.com/articles/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "group": 2000013,
    "institution": 2000013,
    "limit": 10,
    "modified_since": "2017-12-22",
    "offset": 0,
    "order_direction": "desc",
    "page": 1,
    "page_size": 10,
    "published_since": "2017-12-22",
    "search_for": "figshare",
    "doi": "10.6084/m9.figshare.1407024",
    "handle": "111084/m9.figshare.14074",
    "item_type": 1,
    "order": "published_date",
    "project_id": 1,
    "resource_doi": "10.6084/m9.figshare.1407024"
  }'
```

`POST /articles/search`

Returns a list of public articles, filtered by the search parameters

> Body parameter

```json
{
  "group": 2000013,
  "institution": 2000013,
  "limit": 10,
  "modified_since": "2017-12-22",
  "offset": 0,
  "order_direction": "desc",
  "page": 1,
  "page_size": 10,
  "published_since": "2017-12-22",
  "search_for": "figshare",
  "doi": "10.6084/m9.figshare.1407024",
  "handle": "111084/m9.figshare.14074",
  "item_type": 1,
  "order": "published_date",
  "project_id": 1,
  "resource_doi": "10.6084/m9.figshare.1407024"
}
```

<h3 id="public-articles-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Cursor|header|string(uuid)|false|Unique hash used for bypassing the item retrieval limit of 9,000 entities. When using this parameter, please note that the offset parameter will not be available, but the limit parameter will still work as expected.|
|body|body|[ArticleSearch](#schemaarticlesearch)|false|Search Parameters|
|» group|body|integer(int32)|false|only return collections from this group|
|» institution|body|integer(int32)|false|only return collections from this institution|
|» limit|body|integer(int64)|false|Number of results included on a page. Used for pagination with query|
|» modified_since|body|string|false|Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD|
|» offset|body|integer(int64)|false|Where to start the listing(the offset of the first result). Used for pagination with limit|
|» order_direction|body|string|false|Direction of ordering|
|» page|body|integer(int64)|false|Page number. Used for pagination with page_size|
|» page_size|body|integer(int64)|false|The number of results included on a page. Used for pagination with page|
|» published_since|body|string|false|Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD|
|» search_for|body|string|false|Search term|
|» doi|body|string|false|Only return articles with this doi|
|» handle|body|string|false|Only return articles with this handle|
|» item_type|body|integer(int64)|false|Only return articles with the respective type. Mapping for item_type is: 1 - Figure, 2 - Media, 3 - Dataset, 5 - Poster, 6 - Journal contribution, 7 - Presentation, 8 - Thesis, 9 - Software, 11 - Online resource, 12 - Preprint, 13 - Book, 14 - Conference contribution, 15 - Chapter, 16 - Peer review, 17 - Educational resource, 18 - Report, 19 - Standard, 20 - Composition, 21 - Funding, 22 - Physical object, 23 - Data management plan, 24 - Workflow, 25 - Monograph, 26 - Performance, 27 - Event, 28 - Service, 29 - Model|
|» order|body|string|false|The field by which to order|
|» project_id|body|integer(int64)|false|Only return articles in this project|
|» resource_doi|body|string|false|Only return articles with this resource_doi|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» order_direction|asc|
|» order_direction|desc|
|» order|published_date|
|» order|modified_date|
|» order|views|
|» order|shares|
|» order|downloads|
|» order|cites|

> Example responses

> 200 Response

```json
[
  {
    "defined_type": 3,
    "defined_type_name": "media",
    "doi": "10.6084/m9.figshare.1434614",
    "group_id": 1234,
    "handle": "111184/figshare.1234",
    "id": 1434614,
    "published_date": "2015-12-31T23:59:59.000Z",
    "thumb": "https://ndownloader.figshare.com/files/123456789/preview/12345678/thumb.png",
    "timeline": {
      "firstOnline": "2015-12-31",
      "publisherAcceptance": "2015-12-31",
      "publisherPublication": "2015-12-31",
      "posted": "2015-12-31",
      "revision": "2015-12-31",
      "submission": "2015-12-31"
    },
    "title": "Test article title",
    "url": "http://api.figshare.com/articles/1434614",
    "url_private_api": "https://api.figshare.com/account/articles/1434614",
    "url_private_html": "https://figshare.com/account/articles/1434614",
    "url_public_api": "https://api.figshare.com/articles/1434614",
    "url_public_html": "https://figshare.com/articles/media/Test_article_title/1434614",
    "project_id": 1
  }
]
```

<h3 id="public-articles-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. An array of articles|Inline|
|400|Bad Request|Bad Request|None|
|422|Unprocessable Entity|Unprocessable Entity. Syntax is correct but one of the parameters isn't correctly processed|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="public-articles-search-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ArticleWithProject](#schemaarticlewithproject)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Cursor|string||Unique hash used for bypassing the item retrieval limit of 9,000 entities.|

<aside class="success">
This operation does not require authentication
</aside>

## View article details

<a id="opIdarticle_details"></a>

> Code samples

```bash
curl https://example.com/articles/1 \
  -H 'Accept: application/json'
```

`GET /articles/{article_id}`

View an article

<h3 id="view-article-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article Unique identifier|

> Example responses

> 200 Response

```json
{
  "defined_type": 3,
  "defined_type_name": "media",
  "doi": "10.6084/m9.figshare.1434614",
  "group_id": 1234,
  "handle": "111184/figshare.1234",
  "id": 1434614,
  "published_date": "2015-12-31T23:59:59.000Z",
  "thumb": "https://ndownloader.figshare.com/files/123456789/preview/12345678/thumb.png",
  "timeline": {
    "firstOnline": "2015-12-31",
    "publisherAcceptance": "2015-12-31",
    "publisherPublication": "2015-12-31",
    "posted": "2015-12-31",
    "revision": "2015-12-31",
    "submission": "2015-12-31"
  },
  "title": "Test article title",
  "url": "http://api.figshare.com/articles/1434614",
  "url_private_api": "https://api.figshare.com/account/articles/1434614",
  "url_private_html": "https://figshare.com/account/articles/1434614",
  "url_public_api": "https://api.figshare.com/articles/1434614",
  "url_public_html": "https://figshare.com/articles/media/Test_article_title/1434614",
  "categories": [
    {
      "id": 11,
      "parent_id": 1,
      "path": "/450/1024/6532",
      "source_id": "300204",
      "taxonomy_id": 4,
      "title": "Anatomy"
    }
  ],
  "citation": "lilliput, figshare admin (2017): first project item. figshare.\n \n Retrieved: 14 01, May 22, 2017 (GMT)",
  "confidential_reason": "none",
  "created_date": "2017-05-18T11:49:03Z",
  "description": "article description",
  "embargo_date": "2017-05-18T11:49:03Z",
  "embargo_reason": "not complete",
  "embargo_title": "File(s) under embargo",
  "embargo_type": "article",
  "funding": "none",
  "funding_list": [
    0
  ],
  "has_linked_file": true,
  "is_active": true,
  "is_confidential": true,
  "is_embargoed": true,
  "is_metadata_record": false,
  "is_public": true,
  "license": {
    "name": "CC BY",
    "url": "http://creativecommons.org/licenses/by/4.0/",
    "value": 1
  },
  "metadata_reason": "hosted somewhere else",
  "modified_date": "2017-05-18T11:49:03Z",
  "references": [
    "http://figshare.com",
    "http://figshare.com/api"
  ],
  "size": 69939,
  "status": "public",
  "tags": [
    "t1",
    "t2",
    "t3"
  ],
  "version": 1,
  "authors": [
    {
      "full_name": "John Doe",
      "id": 97657,
      "is_active": 1,
      "orcid_id": "1234-5678-9123-1234",
      "url_name": "John_Doe"
    }
  ],
  "custom_fields": [
    {
      "is_mandatory": false,
      "name": "key",
      "value": "value"
    }
  ],
  "embargo_options": [
    {
      "id": 364,
      "ip_name": "Figshare IP range",
      "type": "ip_range"
    }
  ],
  "figshare_url": "http://figshare.com/articles/media/article_name/2000005",
  "files": [
    {
      "computed_md5": "043a51806d646e88cafbf19e7b82846f",
      "download_url": "https://ndownloader.figshare.com/files/3000002",
      "id": 3000002,
      "is_link_only": false,
      "name": "test.xls",
      "size": 14848,
      "supplied_md5": "043a51806d646e88cafbf19e7b82846f"
    }
  ],
  "resource_doi": "10.5072/FK2.developmentfigshare.2000005",
  "resource_title": "first article"
}
```

<h3 id="view-article-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Article representation|[ArticleComplete](#schemaarticlecomplete)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## List article files

<a id="opIdarticle_files"></a>

> Code samples

```bash
curl https://example.com/articles/1/files \
  -H 'Accept: application/json'
```

`GET /articles/{article_id}/files`

Files list for article

<h3 id="list-article-files-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article Unique identifier|

> Example responses

> 200 Response

```json
[
  {
    "computed_md5": "043a51806d646e88cafbf19e7b82846f",
    "download_url": "https://ndownloader.figshare.com/files/3000002",
    "id": 3000002,
    "is_link_only": false,
    "name": "test.xls",
    "size": 14848,
    "supplied_md5": "043a51806d646e88cafbf19e7b82846f"
  }
]
```

<h3 id="list-article-files-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. List of article files|Inline|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="list-article-files-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PublicFile](#schemapublicfile)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Article file details

<a id="opIdarticle_file_details"></a>

> Code samples

```bash
curl https://example.com/articles/1/files/1 \
  -H 'Accept: application/json'
```

`GET /articles/{article_id}/files/{file_id}`

File by id

<h3 id="article-file-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article Unique identifier|
|file_id|path|integer(int64)|true|File Unique identifier|

> Example responses

> 200 Response

```json
{
  "computed_md5": "043a51806d646e88cafbf19e7b82846f",
  "download_url": "https://ndownloader.figshare.com/files/3000002",
  "id": 3000002,
  "is_link_only": false,
  "name": "test.xls",
  "size": 14848,
  "supplied_md5": "043a51806d646e88cafbf19e7b82846f"
}
```

<h3 id="article-file-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. File representation|[PublicFile](#schemapublicfile)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## List article versions

<a id="opIdarticle_versions"></a>

> Code samples

```bash
curl https://example.com/articles/1/versions \
  -H 'Accept: application/json'
```

`GET /articles/{article_id}/versions`

List public article versions

<h3 id="list-article-versions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article Unique identifier|

> Example responses

> 200 Response

```json
[
  {
    "url": "https://api.figshare.com/v2/articles/2000005/versions/1",
    "version": 1
  }
]
```

<h3 id="list-article-versions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Article version representations|Inline|
|400|Bad Request|Bad Request. Article ID must be an integer and bigger than 0.|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="list-article-versions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ArticleVersions](#schemaarticleversions)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Article details for version

<a id="opIdarticle_version_details"></a>

> Code samples

```bash
curl https://example.com/articles/1/versions/1 \
  -H 'Accept: application/json'
```

`GET /articles/{article_id}/versions/{v_number}`

Article with specified version

<h3 id="article-details-for-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article Unique identifier|
|v_number|path|integer(int64)|true|Article Version Number|

> Example responses

> 200 Response

```json
{
  "defined_type": 3,
  "defined_type_name": "media",
  "doi": "10.6084/m9.figshare.1434614",
  "group_id": 1234,
  "handle": "111184/figshare.1234",
  "id": 1434614,
  "published_date": "2015-12-31T23:59:59.000Z",
  "thumb": "https://ndownloader.figshare.com/files/123456789/preview/12345678/thumb.png",
  "timeline": {
    "firstOnline": "2015-12-31",
    "publisherAcceptance": "2015-12-31",
    "publisherPublication": "2015-12-31",
    "posted": "2015-12-31",
    "revision": "2015-12-31",
    "submission": "2015-12-31"
  },
  "title": "Test article title",
  "url": "http://api.figshare.com/articles/1434614",
  "url_private_api": "https://api.figshare.com/account/articles/1434614",
  "url_private_html": "https://figshare.com/account/articles/1434614",
  "url_public_api": "https://api.figshare.com/articles/1434614",
  "url_public_html": "https://figshare.com/articles/media/Test_article_title/1434614",
  "categories": [
    {
      "id": 11,
      "parent_id": 1,
      "path": "/450/1024/6532",
      "source_id": "300204",
      "taxonomy_id": 4,
      "title": "Anatomy"
    }
  ],
  "citation": "lilliput, figshare admin (2017): first project item. figshare.\n \n Retrieved: 14 01, May 22, 2017 (GMT)",
  "confidential_reason": "none",
  "created_date": "2017-05-18T11:49:03Z",
  "description": "article description",
  "embargo_date": "2017-05-18T11:49:03Z",
  "embargo_reason": "not complete",
  "embargo_title": "File(s) under embargo",
  "embargo_type": "article",
  "funding": "none",
  "funding_list": [
    0
  ],
  "has_linked_file": true,
  "is_active": true,
  "is_confidential": true,
  "is_embargoed": true,
  "is_metadata_record": false,
  "is_public": true,
  "license": {
    "name": "CC BY",
    "url": "http://creativecommons.org/licenses/by/4.0/",
    "value": 1
  },
  "metadata_reason": "hosted somewhere else",
  "modified_date": "2017-05-18T11:49:03Z",
  "references": [
    "http://figshare.com",
    "http://figshare.com/api"
  ],
  "size": 69939,
  "status": "public",
  "tags": [
    "t1",
    "t2",
    "t3"
  ],
  "version": 1,
  "authors": [
    {
      "full_name": "John Doe",
      "id": 97657,
      "is_active": 1,
      "orcid_id": "1234-5678-9123-1234",
      "url_name": "John_Doe"
    }
  ],
  "custom_fields": [
    {
      "is_mandatory": false,
      "name": "key",
      "value": "value"
    }
  ],
  "embargo_options": [
    {
      "id": 364,
      "ip_name": "Figshare IP range",
      "type": "ip_range"
    }
  ],
  "figshare_url": "http://figshare.com/articles/media/article_name/2000005",
  "files": [
    {
      "computed_md5": "043a51806d646e88cafbf19e7b82846f",
      "download_url": "https://ndownloader.figshare.com/files/3000002",
      "id": 3000002,
      "is_link_only": false,
      "name": "test.xls",
      "size": 14848,
      "supplied_md5": "043a51806d646e88cafbf19e7b82846f"
    }
  ],
  "resource_doi": "10.5072/FK2.developmentfigshare.2000005",
  "resource_title": "first article"
}
```

<h3 id="article-details-for-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Article representation|[ArticleComplete](#schemaarticlecomplete)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Public Article Confidentiality for article version

<a id="opIdarticle_version_confidentiality"></a>

> Code samples

```bash
curl https://example.com/articles/1/versions/1/confidentiality \
  -H 'Accept: application/json'
```

`GET /articles/{article_id}/versions/{v_number}/confidentiality`

Confidentiality for article version. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.

<h3 id="public-article-confidentiality-for-article-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article Unique identifier|
|v_number|path|integer(int64)|true|Version Number|

> Example responses

> 200 Response

```json
{
  "is_confidential": true,
  "reason": "need to"
}
```

<h3 id="public-article-confidentiality-for-article-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Confidentiality representation|[ArticleConfidentiality](#schemaarticleconfidentiality)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Public Article Embargo for article version

<a id="opIdarticle_version_embargo"></a>

> Code samples

```bash
curl https://example.com/articles/1/versions/1/embargo \
  -H 'Accept: application/json'
```

`GET /articles/{article_id}/versions/{v_number}/embargo`

Embargo for article version

<h3 id="public-article-embargo-for-article-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|article_id|path|integer(int64)|true|Article Unique identifier|
|v_number|path|integer(int64)|true|Version Number|

> Example responses

> 200 Response

```json
{
  "embargo_date": "2018-05-22T04:04:04",
  "embargo_options": [
    {
      "group_ids": [],
      "id": 13,
      "ip_name": "bacau",
      "type": "ip_range"
    },
    {
      "group_ids": [
        550,
        9448
      ],
      "id": 12,
      "ip_name": "",
      "type": "logged_in"
    }
  ],
  "embargo_reason": "",
  "embargo_title": "File(s) under embargo",
  "embargo_type": "",
  "is_embargoed": true
}
```

<h3 id="public-article-embargo-for-article-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Embargo representation|[ArticleEmbargo](#schemaarticleembargo)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="figshare-api-authors">authors</h1>

## Search Authors

<a id="opIdprivate_authors_search"></a>

> Code samples

```bash
curl https://example.com/account/authors/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "group_id": 0,
    "institution_id": 1,
    "is_active": true,
    "is_public": true,
    "limit": 10,
    "offset": 0,
    "orcid": "string",
    "order": "published_date",
    "order_direction": "desc",
    "page": 1,
    "page_size": 10,
    "search_for": "figshare"
  }'
```

`POST /account/authors/search`

Search for authors

> Body parameter

```json
{
  "group_id": 0,
  "institution_id": 1,
  "is_active": true,
  "is_public": true,
  "limit": 10,
  "offset": 0,
  "orcid": "string",
  "order": "published_date",
  "order_direction": "desc",
  "page": 1,
  "page_size": 10,
  "search_for": "figshare"
}
```

<h3 id="search-authors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PrivateAuthorsSearch](#schemaprivateauthorssearch)|false|Search Parameters|
|» group_id|body|integer(int64)|false|Return only authors in this group or subgroups of the group|
|» institution_id|body|integer(int64)|false|Return only authors associated to this institution|
|» is_active|body|boolean|false|Return only active authors if True|
|» is_public|body|boolean|false|Return only authors that have published items if True|
|» limit|body|integer(int64)|false|Number of results included on a page. Used for pagination with query|
|» offset|body|integer(int64)|false|Where to start the listing(the offset of the first result). Used for pagination with limit|
|» orcid|body|string|false|Orcid of author|
|» order|body|string|false|The field by which to order. Default varies by endpoint/resource.|
|» order_direction|body|string|false|Direction of ordering|
|» page|body|integer(int64)|false|Page number. Used for pagination with page_size|
|» page_size|body|integer(int64)|false|The number of results included on a page. Used for pagination with page|
|» search_for|body|string|false|Search term|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» order|published_date|
|» order|modified_date|
|» order|views|
|» order|shares|
|» order|downloads|
|» order|cites|
|» order_direction|asc|
|» order_direction|desc|

> Example responses

> 200 Response

```json
[
  {
    "full_name": "John Doe",
    "id": 97657,
    "is_active": 1,
    "orcid_id": "1234-5678-9123-1234",
    "url_name": "John_Doe"
  }
]
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="search-authors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. An array of authors|Inline|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="search-authors-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Author](#schemaauthor)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Author details

<a id="opIdprivate_author_details"></a>

> Code samples

```bash
curl https://example.com/account/authors/1 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/authors/{author_id}`

View author details

<h3 id="author-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|author_id|path|integer(int64)|true|Author unique identifier|

> Example responses

> 200 Response

```json
{
  "full_name": "John Doe",
  "id": 97657,
  "is_active": 1,
  "orcid_id": "1234-5678-9123-1234",
  "url_name": "John_Doe",
  "first_name": "string",
  "group_id": 0,
  "institution_id": 0,
  "is_public": 0,
  "job_title": "string",
  "last_name": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="author-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Article representation|[AuthorComplete](#schemaauthorcomplete)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

<h1 id="figshare-api-institutions">institutions</h1>

## Private Account Categories

<a id="opIdprivate_categories_list"></a>

> Code samples

```bash
curl https://example.com/account/categories \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/categories`

List institution categories (including parent Categories)

> Example responses

> 200 Response

```json
[
  {
    "id": 11,
    "parent_id": 1,
    "path": "/450/1024/6532",
    "source_id": "300204",
    "taxonomy_id": 4,
    "title": "Anatomy"
  }
]
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="private-account-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. An array of categories|Inline|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="private-account-categories-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Category](#schemacategory)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Private Account Institutions

<a id="opIdprivate_institution_details"></a>

> Code samples

```bash
curl https://example.com/account/institution \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/institution`

Account institution details

> Example responses

> 200 Response

```json
{
  "domain": null,
  "id": 0,
  "name": "Institution"
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="private-account-institutions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. An array of institutions|[Institution](#schemainstitution)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Private Account Institution Accounts

<a id="opIdprivate_institution_accounts_list"></a>

> Code samples

```bash
curl https://example.com/account/institution/accounts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/institution/accounts`

Returns the accounts for which the account has administrative privileges (assigned and inherited).

<h3 id="private-account-institution-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int64)|false|Page number. Used for pagination with page_size|
|page_size|query|integer(int64)|false|The number of results included on a page. Used for pagination with page|
|limit|query|integer(int64)|false|Number of results included on a page. Used for pagination with query|
|offset|query|integer(int64)|false|Where to start the listing(the offset of the first result). Used for pagination with limit|
|is_active|query|integer(int64)|false|Filter by active status|
|institution_user_id|query|string|false|Filter by institution_user_id|
|email|query|string|false|Filter by email|
|id_lte|query|integer(int64)|false|Retrieve accounts with an ID lower or equal to the specified value|
|id_gte|query|integer(int64)|false|Retrieve accounts with an ID greater or equal to the specified value|

> Example responses

> 200 Response

```json
[
  {
    "active": 0,
    "email": "user@domain.com",
    "first_name": "Doe",
    "id": 1495682,
    "institution_id": 1,
    "institution_user_id": 1,
    "last_name": "John",
    "orcid_id": "0000-0001-2345-6789",
    "quota": 1074000000,
    "used_quota": 1074000000,
    "user_id": 1000001
  }
]
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="private-account-institution-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. An array of Accounts|Inline|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="private-account-institution-accounts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ShortAccount](#schemashortaccount)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Create new Institution Account

<a id="opIdprivate_institution_accounts_create"></a>

> Code samples

```bash
curl https://example.com/account/institution/accounts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email": "johndoe@example.com",
    "first_name": "John",
    "group_id": 0,
    "institution_user_id": "johndoe",
    "is_active": true,
    "last_name": "Doe",
    "quota": 1000,
    "symplectic_user_id": "johndoe"
  }'
```

`POST /account/institution/accounts`

Create a new Account by sending account information

> Body parameter

```json
{
  "email": "johndoe@example.com",
  "first_name": "John",
  "group_id": 0,
  "institution_user_id": "johndoe",
  "is_active": true,
  "last_name": "Doe",
  "quota": 1000,
  "symplectic_user_id": "johndoe"
}
```

<h3 id="create-new-institution-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AccountCreate](#schemaaccountcreate)|true|Account description|
|» email|body|string|true|Email of account|
|» first_name|body|string|true|First Name|
|» group_id|body|integer(int64)|false|Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups|
|» institution_user_id|body|string|false|Institution user id|
|» is_active|body|boolean|false|Is account active|
|» last_name|body|string|false|Last Name|
|» quota|body|integer(int64)|false|Account quota|
|» symplectic_user_id|body|string|false|Symplectic user id|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-new-institution-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Private Account Institution Accounts Search

<a id="opIdprivate_institution_accounts_search"></a>

> Code samples

```bash
curl https://example.com/account/institution/accounts/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email": "alan@institution.com",
    "institution_user_id": "alan",
    "is_active": 0,
    "limit": 10,
    "offset": 0,
    "page": 1,
    "page_size": 10,
    "search_for": "figshare"
  }'
```

`POST /account/institution/accounts/search`

Returns the accounts for which the account has administrative privileges (assigned and inherited).

> Body parameter

```json
{
  "email": "alan@institution.com",
  "institution_user_id": "alan",
  "is_active": 0,
  "limit": 10,
  "offset": 0,
  "page": 1,
  "page_size": 10,
  "search_for": "figshare"
}
```

<h3 id="private-account-institution-accounts-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[InstitutionAccountsSearch](#schemainstitutionaccountssearch)|true|Search Parameters|
|» email|body|string|false|filter by email|
|» institution_user_id|body|string|false|filter by institution_user_id|
|» is_active|body|integer(int64)|false|Filter by active status|
|» limit|body|integer(int64)|false|Number of results included on a page. Used for pagination with query|
|» offset|body|integer(int64)|false|Where to start the listing(the offset of the first result). Used for pagination with limit|
|» page|body|integer(int64)|false|Page number. Used for pagination with page_size|
|» page_size|body|integer(int64)|false|The number of results included on a page. Used for pagination with page|
|» search_for|body|string|false|Search term|

> Example responses

> 200 Response

```json
[
  {
    "active": 0,
    "email": "user@domain.com",
    "first_name": "Doe",
    "id": 1495682,
    "institution_id": 1,
    "institution_user_id": 1,
    "last_name": "John",
    "orcid_id": "0000-0001-2345-6789",
    "quota": 1074000000,
    "used_quota": 1074000000,
    "user_id": 1000001
  }
]
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="private-account-institution-accounts-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. An array of Accounts|Inline|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="private-account-institution-accounts-search-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ShortAccount](#schemashortaccount)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Update Institution Account

<a id="opIdprivate_institution_accounts_update"></a>

> Code samples

```bash
curl https://example.com/account/institution/accounts/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "group_id": 0,
    "is_active": true
  }'
```

`PUT /account/institution/accounts/{account_id}`

Update Institution Account

> Body parameter

```json
{
  "group_id": 0,
  "is_active": true
}
```

<h3 id="update-institution-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|Account identifier the user is associated to|
|body|body|[AccountUpdate](#schemaaccountupdate)|true|Account description|
|» group_id|body|integer(int64)|true|Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups|
|» is_active|body|boolean|true|Is account active|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="update-institution-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|Reset Content|Reset Content|None|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|205|Location|string|link|Location of newly created article|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Private Institution Articles

<a id="opIdprivate_institution_articles"></a>

> Code samples

```bash
curl https://example.com/account/institution/articles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/institution/articles`

Get Articles from own institution. User must be administrator of the institution

<h3 id="private-institution-articles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int64)|false|Page number. Used for pagination with page_size|
|page_size|query|integer(int64)|false|The number of results included on a page. Used for pagination with page|
|limit|query|integer(int64)|false|Number of results included on a page. Used for pagination with query|
|offset|query|integer(int64)|false|Where to start the listing(the offset of the first result). Used for pagination with limit|
|order|query|string|false|The field by which to order. Default varies by endpoint/resource.|
|order_direction|query|string|false|none|
|published_since|query|string|false|Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD|
|modified_since|query|string|false|Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD|
|status|query|integer(int64)|false|only return collections with this status|
|resource_doi|query|string|false|only return collections with this resource_doi|
|item_type|query|integer(int64)|false|Only return articles with the respective type. Mapping for item_type is: 1 - Figure, 2 - Media, 3 - Dataset, 5 - Poster, 6 - Journal contribution, 7 - Presentation, 8 - Thesis, 9 - Software, 11 - Online resource, 12 - Preprint, 13 - Book, 14 - Conference contribution, 15 - Chapter, 16 - Peer review, 17 - Educational resource, 18 - Report, 19 - Standard, 20 - Composition, 21 - Funding, 22 - Physical object, 23 - Data management plan, 24 - Workflow, 25 - Monograph, 26 - Performance, 27 - Event, 28 - Service, 29 - Model|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|published_date|
|order|modified_date|
|order|views|
|order|shares|
|order|downloads|
|order|cites|
|order_direction|asc|
|order_direction|desc|

> Example responses

> 200 Response

```json
[
  {
    "defined_type": 3,
    "defined_type_name": "media",
    "doi": "10.6084/m9.figshare.1434614",
    "group_id": 1234,
    "handle": "111184/figshare.1234",
    "id": 1434614,
    "published_date": "2015-12-31T23:59:59.000Z",
    "thumb": "https://ndownloader.figshare.com/files/123456789/preview/12345678/thumb.png",
    "timeline": {
      "firstOnline": "2015-12-31",
      "publisherAcceptance": "2015-12-31",
      "publisherPublication": "2015-12-31",
      "posted": "2015-12-31",
      "revision": "2015-12-31",
      "submission": "2015-12-31"
    },
    "title": "Test article title",
    "url": "http://api.figshare.com/articles/1434614",
    "url_private_api": "https://api.figshare.com/account/articles/1434614",
    "url_private_html": "https://figshare.com/account/articles/1434614",
    "url_public_api": "https://api.figshare.com/articles/1434614",
    "url_public_html": "https://figshare.com/articles/media/Test_article_title/1434614"
  }
]
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="private-institution-articles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. An array of articles belonging to the institution|Inline|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="private-institution-articles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Article](#schemaarticle)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Private account institution group custom fields

<a id="opIdcustom_fields_list"></a>

> Code samples

```bash
curl https://example.com/account/institution/custom_fields \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/institution/custom_fields`

Returns the custom fields in the group the user belongs to, or the ones in the group specified, if the user has access.

<h3 id="private-account-institution-group-custom-fields-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_id|query|integer(int64)|false|Group_id|

> Example responses

> 200 Response

```json
[
  {
    "field_type": "textarea",
    "id": 365,
    "name": "my custom field"
  }
]
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="private-account-institution-group-custom-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. An array of custom fields|Inline|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="private-account-institution-group-custom-fields-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ShortCustomField](#schemashortcustomfield)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Custom fields values files upload

<a id="opIdcustom_fields_upload"></a>

> Code samples

```bash
curl https://example.com/account/institution/custom_fields/1/items/upload \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'external_file=@/path/to/file'
```

`POST /account/institution/custom_fields/{custom_field_id}/items/upload`

Uploads a CSV containing values for a specific custom field of type <b>dropdown_large_list</b>. More details in the <a href="#custom_fields">Custom Fields section</a>

> Body parameter

```yaml
external_file: string
```

<h3 id="custom-fields-values-files-upload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|custom_field_id|path|integer(int64)|true|Custom field identifier|
|body|body|object|false|none|
|» external_file|body|string(binary)|false|CSV file to be uploaded|

> Example responses

> 200 Response

```json
{
  "code": 200,
  "message": "OK"
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="custom-fields-values-files-upload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Private Account Institution embargo options

<a id="opIdprivate_institution_embargo_options_details"></a>

> Code samples

```bash
curl https://example.com/account/institution/embargo_options \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/institution/embargo_options`

Account institution embargo options details

> Example responses

> 200 Response

```json
[
  {
    "id": 364,
    "ip_name": "Figshare IP range",
    "type": "ip_range"
  }
]
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="private-account-institution-embargo-options-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. An array of embargo options|Inline|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="private-account-institution-embargo-options-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GroupEmbargoOptions](#schemagroupembargooptions)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Private Account Institution Groups

<a id="opIdprivate_institution_groups_list"></a>

> Code samples

```bash
curl https://example.com/account/institution/groups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/institution/groups`

Returns the groups for which the account has administrative privileges (assigned and inherited).

> Example responses

> 200 Response

```json
[
  {
    "association_criteria": "IT",
    "id": 1,
    "name": "Materials",
    "parent_id": 0,
    "resource_id": ""
  }
]
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="private-account-institution-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. An array of Groups|Inline|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="private-account-institution-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Group](#schemagroup)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Private Account Institution Group Embargo Options

<a id="opIdprivate_group_embargo_options_details"></a>

> Code samples

```bash
curl https://example.com/account/institution/groups/1/embargo_options \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/institution/groups/{group_id}/embargo_options`

Account institution group embargo options details

<h3 id="private-account-institution-group-embargo-options-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_id|path|integer(int64)|true|Group identifier|

> Example responses

> 200 Response

```json
[
  {
    "id": 364,
    "ip_name": "Figshare IP range",
    "type": "ip_range"
  }
]
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="private-account-institution-group-embargo-options-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. An array of embargo options|Inline|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="private-account-institution-group-embargo-options-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GroupEmbargoOptions](#schemagroupembargooptions)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Institution Curation Review

<a id="opIdaccount_institution_curation"></a>

> Code samples

```bash
curl https://example.com/account/institution/review/1 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/institution/review/{curation_id}`

Retrieve a certain curation review by its ID

<h3 id="institution-curation-review-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|curation_id|path|integer(int64)|true|ID of the curation|

> Example responses

> 200 Response

```json
{
  "account_id": 0,
  "article_id": 0,
  "assigned_to": 0,
  "comments_count": 0,
  "created_date": "string",
  "group_id": 0,
  "id": 0,
  "modified_date": "string",
  "review_date": "string",
  "status": "pending",
  "version": 0,
  "item": {
    "defined_type": 3,
    "defined_type_name": "media",
    "doi": "10.6084/m9.figshare.1434614",
    "group_id": 1234,
    "handle": "111184/figshare.1234",
    "id": 1434614,
    "published_date": "2015-12-31T23:59:59.000Z",
    "thumb": "https://ndownloader.figshare.com/files/123456789/preview/12345678/thumb.png",
    "timeline": {
      "firstOnline": "2015-12-31",
      "publisherAcceptance": "2015-12-31",
      "publisherPublication": "2015-12-31",
      "posted": "2015-12-31",
      "revision": "2015-12-31",
      "submission": "2015-12-31"
    },
    "title": "Test article title",
    "url": "http://api.figshare.com/articles/1434614",
    "url_private_api": "https://api.figshare.com/account/articles/1434614",
    "url_private_html": "https://figshare.com/account/articles/1434614",
    "url_public_api": "https://api.figshare.com/articles/1434614",
    "url_public_html": "https://figshare.com/articles/media/Test_article_title/1434614",
    "categories": [
      {
        "id": 11,
        "parent_id": 1,
        "path": "/450/1024/6532",
        "source_id": "300204",
        "taxonomy_id": 4,
        "title": "Anatomy"
      }
    ],
    "citation": "lilliput, figshare admin (2017): first project item. figshare.\n \n Retrieved: 14 01, May 22, 2017 (GMT)",
    "confidential_reason": "none",
    "created_date": "2017-05-18T11:49:03Z",
    "description": "article description",
    "embargo_date": "2017-05-18T11:49:03Z",
    "embargo_reason": "not complete",
    "embargo_title": "File(s) under embargo",
    "embargo_type": "article",
    "funding": "none",
    "funding_list": [
      0
    ],
    "has_linked_file": true,
    "is_active": true,
    "is_confidential": true,
    "is_embargoed": true,
    "is_metadata_record": false,
    "is_public": true,
    "license": {
      "name": "CC BY",
      "url": "http://creativecommons.org/licenses/by/4.0/",
      "value": 1
    },
    "metadata_reason": "hosted somewhere else",
    "modified_date": "2017-05-18T11:49:03Z",
    "references": [
      "http://figshare.com",
      "http://figshare.com/api"
    ],
    "size": 69939,
    "status": "public",
    "tags": [
      "t1",
      "t2",
      "t3"
    ],
    "version": 1,
    "authors": [
      {
        "full_name": "John Doe",
        "id": 97657,
        "is_active": 1,
        "orcid_id": "1234-5678-9123-1234",
        "url_name": "John_Doe"
      }
    ],
    "custom_fields": [
      {
        "is_mandatory": false,
        "name": "key",
        "value": "value"
      }
    ],
    "embargo_options": [
      {
        "id": 364,
        "ip_name": "Figshare IP range",
        "type": "ip_range"
      }
    ],
    "figshare_url": "http://figshare.com/articles/media/article_name/2000005",
    "files": [
      {
        "computed_md5": "043a51806d646e88cafbf19e7b82846f",
        "download_url": "https://ndownloader.figshare.com/files/3000002",
        "id": 3000002,
        "is_link_only": false,
        "name": "test.xls",
        "size": 14848,
        "supplied_md5": "043a51806d646e88cafbf19e7b82846f"
      }
    ],
    "resource_doi": "10.5072/FK2.developmentfigshare.2000005",
    "resource_title": "first article"
  }
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="institution-curation-review-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. A curation review.|[CurationDetail](#schemacurationdetail)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Institution Curation Review Comments

<a id="opIdaccount_institution_curation_comments"></a>

> Code samples

```bash
curl https://example.com/account/institution/review/1/comments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/institution/review/{curation_id}/comments`

Retrieve a certain curation review's comments.

<h3 id="institution-curation-review-comments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int64)|false|Number of results included on a page. Used for pagination with query|
|offset|query|integer(int64)|false|Where to start the listing(the offset of the first result). Used for pagination with limit|
|curation_id|path|integer(int64)|true|ID of the curation|

> Example responses

> 200 Response

```json
{
  "account_id": 0,
  "id": 0,
  "text": "string",
  "type": "comment"
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="institution-curation-review-comments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. A curation review's comments.|[CurationComment](#schemacurationcomment)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## POST Institution Curation Review Comment

> Code samples

```bash
curl https://example.com/account/institution/review/1/comments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "text": "string"
  }'
```

`POST /account/institution/review/{curation_id}/comments`

Add a new comment to the review.

> Body parameter

```json
{
  "text": "string"
}
```

<h3 id="post-institution-curation-review-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|curation_id|path|integer(int64)|true|ID of the curation|
|body|body|[CurationCommentCreate](#schemacurationcommentcreate)|true|The content/value of the comment.|
|» text|body|string|true|The contents/value of the comment|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="post-institution-curation-review-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK.|None|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Institution Curation Reviews

<a id="opIdaccount_institution_curations"></a>

> Code samples

```bash
curl https://example.com/account/institution/reviews \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/institution/reviews`

Retrieve a list of curation reviews for this institution

<h3 id="institution-curation-reviews-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_id|query|integer(int64)|false|Filter by the group ID|
|article_id|query|integer(int64)|false|Retrieve the reviews for this article|
|status|query|string|false|Filter by the status of the review|
|limit|query|integer(int64)|false|Number of results included on a page. Used for pagination with query|
|offset|query|integer(int64)|false|Where to start the listing(the offset of the first result). Used for pagination with limit|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|pending|
|status|approved|
|status|rejected|
|status|closed|

> Example responses

> 200 Response

```json
{
  "account_id": 0,
  "article_id": 0,
  "assigned_to": 0,
  "comments_count": 0,
  "created_date": "string",
  "group_id": 0,
  "id": 0,
  "modified_date": "string",
  "review_date": "string",
  "status": "pending",
  "version": 0
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="institution-curation-reviews-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. A list of curation reviews.|[Curation](#schemacuration)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Private Account Institution Roles

<a id="opIdprivate_institution_roles_list"></a>

> Code samples

```bash
curl https://example.com/account/institution/roles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/institution/roles`

Returns the roles available for groups and the institution group.

> Example responses

> 200 Response

```json
[
  {
    "category": "group",
    "description": "string",
    "id": 1,
    "name": "Curator"
  }
]
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="private-account-institution-roles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. An array of Roles|Inline|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="private-account-institution-roles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Role](#schemarole)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## List Institution Account Group Roles

<a id="opIdprivate_institution_account_group_roles"></a>

> Code samples

```bash
curl https://example.com/account/institution/roles/1 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/institution/roles/{account_id}`

List Institution Account Group Roles

<h3 id="list-institution-account-group-roles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|Account identifier the user is associated to|

> Example responses

> 200 Response

```json
{
  "2": [
    {
      "category": "group",
      "id": 7,
      "name": "User"
    }
  ]
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-institution-account-group-roles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Account Group Roles|[AccountGroupRoles](#schemaaccountgrouproles)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Add Institution Account Group Roles

<a id="opIdprivate_institution_account_group_roles_create"></a>

> Code samples

```bash
curl https://example.com/account/institution/roles/1 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "2": [
      2,
      7
    ],
    "3": [
      7,
      9
    ]
  }'
```

`POST /account/institution/roles/{account_id}`

Add Institution Account Group Roles

> Body parameter

```json
{
  "2": [
    2,
    7
  ],
  "3": [
    7,
    9
  ]
}
```

<h3 id="add-institution-account-group-roles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|Account identifier the user is associated to|
|body|body|[AccountGroupRolesCreate](#schemaaccountgrouprolescreate)|true|Account description|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="add-institution-account-group-roles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Delete Institution Account Group Role

<a id="opIdprivate_institution_account_group_role_delete"></a>

> Code samples

```bash
curl https://example.com/account/institution/roles/1/1/1 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /account/institution/roles/{account_id}/{group_id}/{role_id}`

Delete Institution Account Group Role

<h3 id="delete-institution-account-group-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|Account identifier for which to remove the role|
|group_id|path|integer(int64)|true|Group identifier for which to remove the role|
|role_id|path|integer(int64)|true|Role identifier|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-institution-account-group-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Private Account Institution User

<a id="opIdprivate_account_institution_user"></a>

> Code samples

```bash
curl https://example.com/account/institution/users/1 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/institution/users/{account_id}`

Retrieve institution user information using the account_id

<h3 id="private-account-institution-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|integer(int64)|true|Account identifier the user is associated to|

> Example responses

> 200 Response

```json
{
  "first_name": "Doe",
  "id": 1495682,
  "is_active": true,
  "is_public": true,
  "job_title": "programmer",
  "last_name": "John",
  "name": "John Doe",
  "orcid_id": "1234-5678-9123-1234",
  "url_name": "John_Doe"
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="private-account-institution-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. User representation|[User](#schemauser)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Private Institution HRfeed Upload

<a id="opIdinstitution_hrfeed_upload"></a>

> Code samples

```bash
curl https://example.com/institution/hrfeed/upload \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'hrfeed=@/path/to/file'
```

`POST /institution/hrfeed/upload`

More info in the <a href="#hr_feed">HR Feed section</a>

> Body parameter

```yaml
hrfeed: string
```

<h3 id="private-institution-hrfeed-upload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» hrfeed|body|string(binary)|false|You can find an example in the Hr Feed section|

> Example responses

> 200 Response

```json
{
  "message": "Project 1 has been published"
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="private-institution-hrfeed-upload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ResponseMessage](#schemaresponsemessage)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Public Licenses

<a id="opIdinstitution_articles"></a>

> Code samples

```bash
curl 'https://example.com/institutions/string/articles/filter-by?resource_id=string&filename=string' \
  -H 'Accept: application/json'
```

`GET /institutions/{institution_string_id}/articles/filter-by`

Returns a list of articles belonging to the institution

<h3 id="public-licenses-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|institution_string_id|path|string|true|none|
|resource_id|query|string|true|none|
|filename|query|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "defined_type": 3,
    "defined_type_name": "media",
    "doi": "10.6084/m9.figshare.1434614",
    "group_id": 1234,
    "handle": "111184/figshare.1234",
    "id": 1434614,
    "published_date": "2015-12-31T23:59:59.000Z",
    "thumb": "https://ndownloader.figshare.com/files/123456789/preview/12345678/thumb.png",
    "timeline": {
      "firstOnline": "2015-12-31",
      "publisherAcceptance": "2015-12-31",
      "publisherPublication": "2015-12-31",
      "posted": "2015-12-31",
      "revision": "2015-12-31",
      "submission": "2015-12-31"
    },
    "title": "Test article title",
    "url": "http://api.figshare.com/articles/1434614",
    "url_private_api": "https://api.figshare.com/account/articles/1434614",
    "url_private_html": "https://figshare.com/account/articles/1434614",
    "url_public_api": "https://api.figshare.com/articles/1434614",
    "url_public_html": "https://figshare.com/articles/media/Test_article_title/1434614"
  }
]
```

<h3 id="public-licenses-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. An array of articles|Inline|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="public-licenses-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Article](#schemaarticle)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="figshare-api-collections">collections</h1>

## Private Collections List

<a id="opIdprivate_collections_list"></a>

> Code samples

```bash
curl https://example.com/account/collections \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/collections`

List private collections

<h3 id="private-collections-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int64)|false|Page number. Used for pagination with page_size|
|page_size|query|integer(int64)|false|The number of results included on a page. Used for pagination with page|
|limit|query|integer(int64)|false|Number of results included on a page. Used for pagination with query|
|offset|query|integer(int64)|false|Where to start the listing(the offset of the first result). Used for pagination with limit|
|order|query|string|false|The field by which to order. Default varies by endpoint/resource.|
|order_direction|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|published_date|
|order|modified_date|
|order|views|
|order|shares|
|order|cites|
|order_direction|asc|
|order_direction|desc|

> Example responses

> 200 Response

```json
[
  {
    "doi": "10.6084/m9.figshare.123",
    "handle": "111184/figshare.1234",
    "id": 123,
    "published_date": "2015-08-12T00:39:55",
    "timeline": {
      "firstOnline": "2015-12-31",
      "publisherAcceptance": "2015-12-31",
      "publisherPublication": "2015-12-31",
      "posted": "2015-12-31",
      "revision": "2015-12-31",
      "submission": "2015-12-31"
    },
    "title": "Sample collection",
    "url": "https://api.figshare.com/v2/collections/123"
  }
]
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="private-collections-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. An array of collections|Inline|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="private-collections-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Collection](#schemacollection)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Create collection

<a id="opIdprivate_collection_create"></a>

> Code samples

```bash
curl https://example.com/account/collections \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "articles": [
      2000001,
      2000005
    ],
    "authors": [
      {
        "name": "John Doe"
      },
      {
        "id": 20005
      }
    ],
    "categories": [
      1,
      10,
      11
    ],
    "categories_by_source_id": [
      "300204",
      "400207"
    ],
    "custom_fields": {
      "defined_key": "value for it"
    },
    "custom_fields_list": [
      {
        "name": "key",
        "value": "value"
      }
    ],
    "description": "Test description of article",
    "doi": "",
    "funding": "",
    "funding_list": [
      {
        "id": 0,
        "title": "string"
      }
    ],
    "group_id": 0,
    "handle": "",
    "keywords": [
      "tag1",
      "tag2"
    ],
    "references": [
      "http://figshare.com",
      "http://api.figshare.com"
    ],
    "resource_doi": "",
    "resource_id": "string",
    "resource_link": "string",
    "resource_title": "",
    "resource_version": 0,
    "tags": [
      "tag1",
      "tag2"
    ],
    "timeline": {
      "firstOnline": "2015-12-31",
      "publisherAcceptance": "2015-12-31",
      "publisherPublication": "2015-12-31"
    },
    "title": "Test collection title"
  }'
```

`POST /account/collections`

Create a new Collection by sending collection information

> Body parameter

```json
{
  "articles": [
    2000001,
    2000005
  ],
  "authors": [
    {
      "name": "John Doe"
    },
    {
      "id": 20005
    }
  ],
  "categories": [
    1,
    10,
    11
  ],
  "categories_by_source_id": [
    "300204",
    "400207"
  ],
  "custom_fields": {
    "defined_key": "value for it"
  },
  "custom_fields_list": [
    {
      "name": "key",
      "value": "value"
    }
  ],
  "description": "Test description of article",
  "doi": "",
  "funding": "",
  "funding_list": [
    {
      "id": 0,
      "title": "string"
    }
  ],
  "group_id": 0,
  "handle": "",
  "keywords": [
    "tag1",
    "tag2"
  ],
  "references": [
    "http://figshare.com",
    "http://api.figshare.com"
  ],
  "resource_doi": "",
  "resource_id": "string",
  "resource_link": "string",
  "resource_title": "",
  "resource_version": 0,
  "tags": [
    "tag1",
    "tag2"
  ],
  "timeline": {
    "firstOnline": "2015-12-31",
    "publisherAcceptance": "2015-12-31",
    "publisherPublication": "2015-12-31"
  },
  "title": "Test collection title"
}
```

<h3 id="create-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CollectionCreate](#schemacollectioncreate)|true|Collection description|
|» articles|body|[integer]|false|List of articles to be associated with the collection|
|» authors|body|[object]|false|List of authors to be associated with the collection. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint.|
|» categories|body|[integer(int64)]|false|List of category ids to be associated with the collection(e.g [1, 23, 33, 66])|
|» categories_by_source_id|body|[string]|false|List of category source ids to be associated with the collection, supersedes the categories property|
|» custom_fields|body|object|false|List of key, values pairs to be associated with the collection|
|» custom_fields_list|body|[[CustomArticleFieldAdd](#schemacustomarticlefieldadd)]|false|List of custom fields values, supersedes custom_fields parameter|
|» description|body|string|false|The collection description. In a publisher case, usually this is the remote collection description|
|» doi|body|string|false|Not applicable for regular users. In an institutional case, make sure your group supports setting DOIs. This setting is applied by figshare via opening a ticket through our support/helpdesk system.|
|» funding|body|string|false|Grant number or funding authority|
|» funding_list|body|[[FundingCreate](#schemafundingcreate)]|false|Funding creation / update items|
|» group_id|body|integer(int64)|false|Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups|
|» handle|body|string|false|Not applicable for regular users. In an institutional case, make sure your group supports setting Handles. This setting is applied by figshare via opening a ticket through our support/helpdesk system.|
|» keywords|body|[string]|false|List of tags to be associated with the collection. Tags can be used instead|
|» references|body|[string(link)]|false|List of links to be associated with the collection (e.g ["http://link1", "http://link2", "http://link3"])|
|» resource_doi|body|string|false|Not applicable to regular users. In a publisher case, this is the publisher article DOI.|
|» resource_id|body|string|false|Not applicable to regular users. In a publisher case, this is the publisher article id|
|» resource_link|body|string|false|Not applicable to regular users. In a publisher case, this is the publisher article link|
|» resource_title|body|string|false|Not applicable to regular users. In a publisher case, this is the publisher article title.|
|» resource_version|body|integer|false|Not applicable to regular users. In a publisher case, this is the publisher article version|
|» tags|body|[string]|false|List of tags to be associated with the collection. Keywords can be used instead|
|» timeline|body|[TimelineUpdate](#schematimelineupdate)|false|none|
|» title|body|string|true|Title of collection|

> Example responses

> 201 Response

```json
{
  "entity_id": 33334444,
  "location": "http://example.com",
  "warnings": [
    "string"
  ]
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[LocationWarnings](#schemalocationwarnings)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Private Collections Search

<a id="opIdprivate_collections_search"></a>

> Code samples

```bash
curl https://example.com/account/collections/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "group": 2000013,
    "institution": 2000013,
    "limit": 10,
    "modified_since": "2017-12-22",
    "offset": 0,
    "order_direction": "desc",
    "page": 1,
    "page_size": 10,
    "published_since": "2017-12-22",
    "search_for": "figshare",
    "doi": "10.6084/m9.figshare.1407024",
    "handle": "10084/figshare.1407024",
    "order": "published_date",
    "resource_doi": "10.6084/m9.figshare.1407024",
    "resource_id": "1407024"
  }'
```

`POST /account/collections/search`

Returns a list of private Collections

> Body parameter

```json
{
  "group": 2000013,
  "institution": 2000013,
  "limit": 10,
  "modified_since": "2017-12-22",
  "offset": 0,
  "order_direction": "desc",
  "page": 1,
  "page_size": 10,
  "published_since": "2017-12-22",
  "search_for": "figshare",
  "doi": "10.6084/m9.figshare.1407024",
  "handle": "10084/figshare.1407024",
  "order": "published_date",
  "resource_doi": "10.6084/m9.figshare.1407024",
  "resource_id": "1407024"
}
```

<h3 id="private-collections-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PrivateCollectionSearch](#schemaprivatecollectionsearch)|true|Search Parameters|
|» group|body|integer(int32)|false|only return collections from this group|
|» institution|body|integer(int32)|false|only return collections from this institution|
|» limit|body|integer(int64)|false|Number of results included on a page. Used for pagination with query|
|» modified_since|body|string|false|Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD|
|» offset|body|integer(int64)|false|Where to start the listing(the offset of the first result). Used for pagination with limit|
|» order_direction|body|string|false|Direction of ordering|
|» page|body|integer(int64)|false|Page number. Used for pagination with page_size|
|» page_size|body|integer(int64)|false|The number of results included on a page. Used for pagination with page|
|» published_since|body|string|false|Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD|
|» search_for|body|string|false|Search term|
|» doi|body|string|false|Only return collections with this doi|
|» handle|body|string|false|Only return collections with this handle|
|» order|body|string|false|The field by which to order.|
|» resource_doi|body|string|false|Only return collections with this resource_doi|
|» resource_id|body|string|false|only return collections with this resource_id|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» order_direction|asc|
|» order_direction|desc|
|» order|published_date|
|» order|modified_date|
|» order|views|
|» order|shares|
|» order|cites|

> Example responses

> 200 Response

```json
[
  {
    "doi": "10.6084/m9.figshare.123",
    "handle": "111184/figshare.1234",
    "id": 123,
    "published_date": "2015-08-12T00:39:55",
    "timeline": {
      "firstOnline": "2015-12-31",
      "publisherAcceptance": "2015-12-31",
      "publisherPublication": "2015-12-31",
      "posted": "2015-12-31",
      "revision": "2015-12-31",
      "submission": "2015-12-31"
    },
    "title": "Sample collection",
    "url": "https://api.figshare.com/v2/collections/123"
  }
]
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="private-collections-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. An array of collections|Inline|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="private-collections-search-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Collection](#schemacollection)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Collection details

<a id="opIdprivate_collection_details"></a>

> Code samples

```bash
curl https://example.com/account/collections/1 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/collections/{collection_id}`

View a collection

<h3 id="collection-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|integer(int64)|true|Collection Unique identifier|

> Example responses

> 200 Response

```json
{
  "doi": "10.6084/m9.figshare.123",
  "handle": "111184/figshare.1234",
  "id": 123,
  "published_date": "2015-08-12T00:39:55",
  "timeline": {
    "firstOnline": "2015-12-31",
    "publisherAcceptance": "2015-12-31",
    "publisherPublication": "2015-12-31",
    "posted": "2015-12-31",
    "revision": "2015-12-31",
    "submission": "2015-12-31"
  },
  "title": "Sample collection",
  "url": "https://api.figshare.com/v2/collections/123",
  "account_id": 1000001,
  "articles_count": 1,
  "authors": [
    {
      "full_name": "John Doe",
      "id": 97657,
      "is_active": 1,
      "orcid_id": "1234-5678-9123-1234",
      "url_name": "John_Doe"
    }
  ],
  "categories": [
    {
      "id": 11,
      "parent_id": 1,
      "path": "/450/1024/6532",
      "source_id": "300204",
      "taxonomy_id": 4,
      "title": "Anatomy"
    }
  ],
  "citation": "citation",
  "created_date": "2017-05-15T15:12:26Z",
  "custom_fields": [
    {
      "is_mandatory": false,
      "name": "key",
      "value": "value"
    }
  ],
  "description": "description",
  "funding": [
    {
      "funder_name": "string",
      "grant_code": "string",
      "id": 1,
      "is_user_defined": true,
      "title": "Scholarly funding",
      "url": "https://app.dimensions.ai/details/grant/1"
    }
  ],
  "group_id": 1,
  "group_resource_id": 1,
  "institution_id": 1,
  "modified_date": "2017-05-15T15:12:26Z",
  "public": true,
  "references": [
    "http://example.com"
  ],
  "resource_doi": "10.6084/m9.figshare.123",
  "resource_id": "",
  "resource_link": "http://figshare.com",
  "resource_title": "test",
  "resource_version": 0,
  "tags": [
    "t1",
    "t2"
  ],
  "version": 1
}
```

<h3 id="collection-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Collection representation|[CollectionCompletePrivate](#schemacollectioncompleteprivate)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Update collection

<a id="opIdprivate_collection_update"></a>

> Code samples

```bash
curl https://example.com/account/collections/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "articles": [
      2000001,
      2000005
    ],
    "authors": [
      {
        "name": "John Doe"
      },
      {
        "id": 20005
      }
    ],
    "categories": [
      1,
      10,
      11
    ],
    "categories_by_source_id": [
      "300204",
      "400207"
    ],
    "custom_fields": {
      "defined_key": "value for it"
    },
    "custom_fields_list": [
      {
        "name": "key",
        "value": "value"
      }
    ],
    "description": "Test description of collection",
    "doi": "",
    "funding": "",
    "funding_list": [
      {
        "id": 0,
        "title": "string"
      }
    ],
    "group_id": 0,
    "handle": "",
    "keywords": [
      "tag1",
      "tag2"
    ],
    "references": [
      "http://figshare.com",
      "http://api.figshare.com"
    ],
    "resource_doi": "",
    "resource_id": "string",
    "resource_link": "string",
    "resource_title": "",
    "resource_version": 0,
    "tags": [
      "tag1",
      "tag2"
    ],
    "timeline": {
      "firstOnline": "2015-12-31",
      "publisherAcceptance": "2015-12-31",
      "publisherPublication": "2015-12-31"
    },
    "title": "Test collection title"
  }'
```

`PUT /account/collections/{collection_id}`

Update collection details; request can also be made with the PATCH method.

> Body parameter

```json
{
  "articles": [
    2000001,
    2000005
  ],
  "authors": [
    {
      "name": "John Doe"
    },
    {
      "id": 20005
    }
  ],
  "categories": [
    1,
    10,
    11
  ],
  "categories_by_source_id": [
    "300204",
    "400207"
  ],
  "custom_fields": {
    "defined_key": "value for it"
  },
  "custom_fields_list": [
    {
      "name": "key",
      "value": "value"
    }
  ],
  "description": "Test description of collection",
  "doi": "",
  "funding": "",
  "funding_list": [
    {
      "id": 0,
      "title": "string"
    }
  ],
  "group_id": 0,
  "handle": "",
  "keywords": [
    "tag1",
    "tag2"
  ],
  "references": [
    "http://figshare.com",
    "http://api.figshare.com"
  ],
  "resource_doi": "",
  "resource_id": "string",
  "resource_link": "string",
  "resource_title": "",
  "resource_version": 0,
  "tags": [
    "tag1",
    "tag2"
  ],
  "timeline": {
    "firstOnline": "2015-12-31",
    "publisherAcceptance": "2015-12-31",
    "publisherPublication": "2015-12-31"
  },
  "title": "Test collection title"
}
```

<h3 id="update-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|integer(int64)|true|Collection Unique identifier|
|body|body|[CollectionUpdate](#schemacollectionupdate)|true|Collection description|
|» articles|body|[integer]|false|List of articles to be associated with the collection|
|» authors|body|[object]|false|List of authors to be associated with the collection. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint.|
|» categories|body|[integer(int64)]|false|List of category ids to be associated with the collection (e.g [1, 23, 33, 66])|
|» categories_by_source_id|body|[string]|false|List of category source ids to be associated with the article, supersedes the categories property|
|» custom_fields|body|object|false|List of key, values pairs to be associated with the collection|
|» custom_fields_list|body|[[CustomArticleFieldAdd](#schemacustomarticlefieldadd)]|false|List of custom fields values, supersedes custom_fields parameter|
|» description|body|string|false|The collection description. In a publisher case, usually this is the remote collection description|
|» doi|body|string|false|Not applicable for regular users. In an institutional case, make sure your group supports setting DOIs. This setting is applied by figshare via opening a ticket through our support/helpdesk system.|
|» funding|body|string|false|Grant number or funding authority|
|» funding_list|body|[[FundingCreate](#schemafundingcreate)]|false|Funding creation / update items|
|» group_id|body|integer(int64)|false|Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups|
|» handle|body|string|false|Not applicable for regular users. In an institutional case, make sure your group supports setting Handles. This setting is applied by figshare via opening a ticket through our support/helpdesk system.|
|» keywords|body|[string]|false|List of tags to be associated with the collection. Tags can be used instead|
|» references|body|[string(link)]|false|List of links to be associated with the collection (e.g ["http://link1", "http://link2", "http://link3"])|
|» resource_doi|body|string|false|Not applicable to regular users. In a publisher case, this is the publisher article DOI.|
|» resource_id|body|string|false|Not applicable to regular users. In a publisher case, this is the publisher article id|
|» resource_link|body|string|false|Not applicable to regular users. In a publisher case, this is the publisher article link|
|» resource_title|body|string|false|Not applicable to regular users. In a publisher case, this is the publisher article title.|
|» resource_version|body|integer|false|Not applicable to regular users. In a publisher case, this is the publisher article version|
|» tags|body|[string]|false|List of tags to be associated with the collection. Keywords can be used instead|
|» timeline|body|[TimelineUpdate](#schematimelineupdate)|false|none|
|» title|body|string|false|Title of collection|

> Example responses

> 205 Response

```json
{
  "location": "http://example.com",
  "warnings": [
    "string"
  ]
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="update-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|Reset Content|Reset Content|[LocationWarningsUpdate](#schemalocationwarningsupdate)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|205|Location|string|link|Location of collection|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Delete collection

<a id="opIdprivate_collection_delete"></a>

> Code samples

```bash
curl https://example.com/account/collections/1 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /account/collections/{collection_id}`

Delete n collection

<h3 id="delete-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|integer(int64)|true|Collection Unique identifier|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## List collection articles

<a id="opIdprivate_collection_articles_list"></a>

> Code samples

```bash
curl https://example.com/account/collections/1/articles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/collections/{collection_id}/articles`

List collection articles

<h3 id="list-collection-articles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int64)|false|Page number. Used for pagination with page_size|
|page_size|query|integer(int64)|false|The number of results included on a page. Used for pagination with page|
|limit|query|integer(int64)|false|Number of results included on a page. Used for pagination with query|
|offset|query|integer(int64)|false|Where to start the listing(the offset of the first result). Used for pagination with limit|
|collection_id|path|integer(int64)|true|Collection unique identifier|

> Example responses

> 200 Response

```json
[
  {
    "defined_type": 3,
    "defined_type_name": "media",
    "doi": "10.6084/m9.figshare.1434614",
    "group_id": 1234,
    "handle": "111184/figshare.1234",
    "id": 1434614,
    "published_date": "2015-12-31T23:59:59.000Z",
    "thumb": "https://ndownloader.figshare.com/files/123456789/preview/12345678/thumb.png",
    "timeline": {
      "firstOnline": "2015-12-31",
      "publisherAcceptance": "2015-12-31",
      "publisherPublication": "2015-12-31",
      "posted": "2015-12-31",
      "revision": "2015-12-31",
      "submission": "2015-12-31"
    },
    "title": "Test article title",
    "url": "http://api.figshare.com/articles/1434614",
    "url_private_api": "https://api.figshare.com/account/articles/1434614",
    "url_private_html": "https://figshare.com/account/articles/1434614",
    "url_public_api": "https://api.figshare.com/articles/1434614",
    "url_public_html": "https://figshare.com/articles/media/Test_article_title/1434614"
  }
]
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-collection-articles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Articles List|Inline|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="list-collection-articles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Article](#schemaarticle)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Replace collection articles

<a id="opIdprivate_collection_articles_replace"></a>

> Code samples

```bash
curl https://example.com/account/collections/1/articles \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "articles": [
      2000003,
      2000004
    ]
  }'
```

`PUT /account/collections/{collection_id}/articles`

Associate new articles with the collection. This will remove all already associated articles and add these new ones

> Body parameter

```json
{
  "articles": [
    2000003,
    2000004
  ]
}
```

<h3 id="replace-collection-articles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|integer(int64)|true|Collection unique identifier|
|body|body|[ArticlesCreator](#schemaarticlescreator)|true|Articles List|
|» articles|body|[integer(int64)]|true|List of article ids|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="replace-collection-articles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|Reset Content|Reset Content|None|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|205|Location|string|url|Location of list of articles|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Add collection articles

<a id="opIdprivate_collection_articles_add"></a>

> Code samples

```bash
curl https://example.com/account/collections/1/articles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "articles": [
      2000003,
      2000004
    ]
  }'
```

`POST /account/collections/{collection_id}/articles`

Associate new articles with the collection. This will add new articles to the list of already associated articles

> Body parameter

```json
{
  "articles": [
    2000003,
    2000004
  ]
}
```

<h3 id="add-collection-articles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|integer(int64)|true|Collection unique identifier|
|body|body|[ArticlesCreator](#schemaarticlescreator)|true|Articles list|
|» articles|body|[integer(int64)]|true|List of article ids|

> Example responses

> 201 Response

```json
{
  "location": "http://example.com"
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="add-collection-articles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Reset Content|[Location](#schemalocation)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string|url|Location of new articles|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Delete collection article

<a id="opIdprivate_collection_article_delete"></a>

> Code samples

```bash
curl https://example.com/account/collections/1/articles/1 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /account/collections/{collection_id}/articles/{article_id}`

De-associate article from collection

<h3 id="delete-collection-article-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|integer(int64)|true|Collection unique identifier|
|article_id|path|integer(int64)|true|Collection article unique identifier|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-collection-article-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## List collection authors

<a id="opIdprivate_collection_authors_list"></a>

> Code samples

```bash
curl https://example.com/account/collections/1/authors \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/collections/{collection_id}/authors`

List collection authors

<h3 id="list-collection-authors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|integer(int64)|true|Collection unique identifier|

> Example responses

> 200 Response

```json
[
  {
    "full_name": "John Doe",
    "id": 97657,
    "is_active": 1,
    "orcid_id": "1234-5678-9123-1234",
    "url_name": "John_Doe"
  }
]
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-collection-authors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Embargo for article|Inline|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="list-collection-authors-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Author](#schemaauthor)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Replace collection authors

<a id="opIdprivate_collection_authors_replace"></a>

> Code samples

```bash
curl https://example.com/account/collections/1/authors \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "authors": [
      {
        "id": 12121
      },
      {
        "id": 34345
      },
      {
        "name": "John Doe"
      }
    ]
  }'
```

`PUT /account/collections/{collection_id}/authors`

Associate new authors with the collection. This will remove all already associated authors and add these new ones

> Body parameter

```json
{
  "authors": [
    {
      "id": 12121
    },
    {
      "id": 34345
    },
    {
      "name": "John Doe"
    }
  ]
}
```

<h3 id="replace-collection-authors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|integer(int64)|true|Collection unique identifier|
|body|body|[AuthorsCreator](#schemaauthorscreator)|true|List of authors|
|» authors|body|[object]|true|List of authors to be associated with the article. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint.|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="replace-collection-authors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|Reset Content|Reset Content|None|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|205|Location|string|url|Location of list of authors|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Add collection authors

<a id="opIdprivate_collection_authors_add"></a>

> Code samples

```bash
curl https://example.com/account/collections/1/authors \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "authors": [
      {
        "id": 12121
      },
      {
        "id": 34345
      },
      {
        "name": "John Doe"
      }
    ]
  }'
```

`POST /account/collections/{collection_id}/authors`

Associate new authors with the collection. This will add new authors to the list of already associated authors

> Body parameter

```json
{
  "authors": [
    {
      "id": 12121
    },
    {
      "id": 34345
    },
    {
      "name": "John Doe"
    }
  ]
}
```

<h3 id="add-collection-authors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|integer(int64)|true|Collection unique identifier|
|body|body|[AuthorsCreator](#schemaauthorscreator)|true|List of authors|
|» authors|body|[object]|true|List of authors to be associated with the article. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint.|

> Example responses

> 201 Response

```json
{
  "location": "http://example.com"
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="add-collection-authors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Reset Content|[Location](#schemalocation)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string|url|Location of list of authors|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Delete collection author

<a id="opIdprivate_collection_author_delete"></a>

> Code samples

```bash
curl https://example.com/account/collections/1/authors/1 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /account/collections/{collection_id}/authors/{author_id}`

Delete collection author

<h3 id="delete-collection-author-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|integer(int64)|true|Collection unique identifier|
|author_id|path|integer(int64)|true|Collection Author unique identifier|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-collection-author-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## List collection categories

<a id="opIdprivate_collection_categories_list"></a>

> Code samples

```bash
curl https://example.com/account/collections/1/categories \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/collections/{collection_id}/categories`

List collection categories

<h3 id="list-collection-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|integer(int64)|true|Collection unique identifier|

> Example responses

> 200 Response

```json
[
  {
    "id": 11,
    "parent_id": 1,
    "path": "/450/1024/6532",
    "source_id": "300204",
    "taxonomy_id": 4,
    "title": "Anatomy"
  }
]
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-collection-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Categories list|Inline|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="list-collection-categories-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Category](#schemacategory)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Replace collection categories

<a id="opIdprivate_collection_categories_replace"></a>

> Code samples

```bash
curl https://example.com/account/collections/1/categories \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "categories": [
      1,
      10,
      11
    ]
  }'
```

`PUT /account/collections/{collection_id}/categories`

Associate new categories with the collection. This will remove all already associated categories and add these new ones

> Body parameter

```json
{
  "categories": [
    1,
    10,
    11
  ]
}
```

<h3 id="replace-collection-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|integer(int64)|true|Collection unique identifier|
|body|body|[CategoriesCreator](#schemacategoriescreator)|true|Categories list|
|» categories|body|[integer(int64)]|true|List of category ids|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="replace-collection-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|Reset Content|Reset Content|None|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|205|Location|string|url|Location of list of categories|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Add collection categories

<a id="opIdprivate_collection_categories_add"></a>

> Code samples

```bash
curl https://example.com/account/collections/1/categories \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "categories": [
      1,
      10,
      11
    ]
  }'
```

`POST /account/collections/{collection_id}/categories`

Associate new categories with the collection. This will add new categories to the list of already associated categories

> Body parameter

```json
{
  "categories": [
    1,
    10,
    11
  ]
}
```

<h3 id="add-collection-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|integer(int64)|true|Collection unique identifier|
|body|body|[CategoriesCreator](#schemacategoriescreator)|true|Categories list|
|» categories|body|[integer(int64)]|true|List of category ids|

> Example responses

> 201 Response

```json
{
  "location": "http://example.com"
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="add-collection-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Reset Content|[Location](#schemalocation)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string|url|Location of list of categories|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Delete collection category

<a id="opIdprivate_collection_category_delete"></a>

> Code samples

```bash
curl https://example.com/account/collections/1/categories/1 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /account/collections/{collection_id}/categories/{category_id}`

De-associate category from collection

<h3 id="delete-collection-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|integer(int64)|true|Collection unique identifier|
|category_id|path|integer(int64)|true|Collection category unique identifier|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-collection-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## List collection private links

<a id="opIdprivate_collection_private_links_list"></a>

> Code samples

```bash
curl https://example.com/account/collections/1/private_links \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/collections/{collection_id}/private_links`

List article private links

<h3 id="list-collection-private-links-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|integer(int64)|true|Collection unique identifier|

> Example responses

> 200 Response

```json
[
  {
    "expires_date": "2015-07-03T00:00:00",
    "html_location": "https://figshare.com/s/d5ec7a85bcd6dbe9d9b2",
    "id": "0cfb0dbeac92df445df4aba45f63fdc85fa0b9a888b64e157ce3c93b576aa300fb3621ef3a219515dd482",
    "is_active": true
  }
]
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-collection-private-links-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Collection private links|Inline|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="list-collection-private-links-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PrivateLink](#schemaprivatelink)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Create collection private link

<a id="opIdprivate_collection_private_link_create"></a>

> Code samples

```bash
curl https://example.com/account/collections/1/private_links \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "expires_date": "2018-02-22 22:22:22",
    "read_only": true
  }'
```

`POST /account/collections/{collection_id}/private_links`

Create new private link

> Body parameter

```json
{
  "expires_date": "2018-02-22 22:22:22",
  "read_only": true
}
```

<h3 id="create-collection-private-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|integer(int64)|true|Collection unique identifier|
|body|body|[CollectionPrivateLinkCreator](#schemacollectionprivatelinkcreator)|false|none|
|» expires_date|body|string|false|Date when this private link should expire - optional. By default private links expire in 365 days.|
|» read_only|body|boolean|false|Optional, default true. Set to false to give private link users editing rights for this collection.|

> Example responses

> 201 Response

```json
{
  "html_location": "https://figshare.com/s/d5ec7a85bcd6dbe9d9b2",
  "location": "http://example.com",
  "token": "d5ec7a85bcd6dbe9d9b2"
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-collection-private-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[PrivateLinkResponse](#schemaprivatelinkresponse)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string|url|Location of private link|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Update collection private link

<a id="opIdprivate_collection_private_link_update"></a>

> Code samples

```bash
curl https://example.com/account/collections/1/private_links/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "expires_date": "2018-02-22 22:22:22",
    "read_only": true
  }'
```

`PUT /account/collections/{collection_id}/private_links/{link_id}`

Update existing private link for this collection

> Body parameter

```json
{
  "expires_date": "2018-02-22 22:22:22",
  "read_only": true
}
```

<h3 id="update-collection-private-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|integer(int64)|true|Collection unique identifier|
|link_id|path|string|true|Private link token|
|body|body|[CollectionPrivateLinkCreator](#schemacollectionprivatelinkcreator)|false|none|
|» expires_date|body|string|false|Date when this private link should expire - optional. By default private links expire in 365 days.|
|» read_only|body|boolean|false|Optional, default true. Set to false to give private link users editing rights for this collection.|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="update-collection-private-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|Reset Content|Reset Content|None|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|205|Location|string|url|Location of new private link|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Disable private link

<a id="opIdprivate_collection_private_link_delete"></a>

> Code samples

```bash
curl https://example.com/account/collections/1/private_links/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /account/collections/{collection_id}/private_links/{link_id}`

Disable/delete private link for this collection

<h3 id="disable-private-link-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|integer(int64)|true|Collection unique identifier|
|link_id|path|string|true|Private link token|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="disable-private-link-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Private Collection Publish

<a id="opIdprivate_collection_publish"></a>

> Code samples

```bash
curl https://example.com/account/collections/1/publish \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /account/collections/{collection_id}/publish`

When a collection is published, a new public version will be generated. Any further updates to the collection will affect the private collection data. In order to make these changes publicly visible, an explicit publish operation is needed.

<h3 id="private-collection-publish-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|integer(int64)|true|Collection Unique identifier|

> Example responses

> 201 Response

```json
{
  "location": "http://example.com"
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="private-collection-publish-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[Location](#schemalocation)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string|link|Location of collection|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Private Collection Reserve DOI

<a id="opIdprivate_collection_reserve_doi"></a>

> Code samples

```bash
curl https://example.com/account/collections/1/reserve_doi \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /account/collections/{collection_id}/reserve_doi`

Reserve DOI for collection

<h3 id="private-collection-reserve-doi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|integer(int64)|true|Collection Unique identifier|

> Example responses

> 200 Response

```json
{
  "doi": "10.5072/FK2.FIGSHARE.20345"
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="private-collection-reserve-doi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CollectionDOI](#schemacollectiondoi)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Private Collection Reserve Handle

<a id="opIdprivate_collection_reserve_handle"></a>

> Code samples

```bash
curl https://example.com/account/collections/1/reserve_handle \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /account/collections/{collection_id}/reserve_handle`

Reserve Handle for collection

<h3 id="private-collection-reserve-handle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|integer(int64)|true|Collection Unique identifier|

> Example responses

> 200 Response

```json
{
  "handle": "11172/FK2.FIGSHARE.20345"
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="private-collection-reserve-handle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CollectionHandle](#schemacollectionhandle)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Private Collection Resource

<a id="opIdprivate_collection_resource"></a>

> Code samples

```bash
curl https://example.com/account/collections/1/resource \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "doi": "",
    "id": "aaaa23512",
    "link": "https://docs.figshare.com",
    "status": "frozen",
    "title": "Test title",
    "version": 1
  }'
```

`POST /account/collections/{collection_id}/resource`

Edit collection resource data.

> Body parameter

```json
{
  "doi": "",
  "id": "aaaa23512",
  "link": "https://docs.figshare.com",
  "status": "frozen",
  "title": "Test title",
  "version": 1
}
```

<h3 id="private-collection-resource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|integer(int64)|true|Collection unique identifier|
|body|body|[Resource](#schemaresource)|true|Resource data|
|» doi|body|string|false|DOI of resource item|
|» id|body|string|false|ID of resource item|
|» link|body|string|false|Link of resource item|
|» status|body|string|false|Status of resource item|
|» title|body|string|false|Title of resource item|
|» version|body|integer(int64)|false|Version of resource item|

> Example responses

> 205 Response

```json
{
  "location": "http://example.com"
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="private-collection-resource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|Reset Content|Reset Content|[Location](#schemalocation)|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|422|Unprocessable Entity|Unprocessable Entity|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|205|Location|string|link|Location for account collection details|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Public Collections

<a id="opIdcollections_list"></a>

> Code samples

```bash
curl https://example.com/collections \
  -H 'Accept: application/json'
```

`GET /collections`

Returns a list of public collections

<h3 id="public-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Cursor|header|string(uuid)|false|Unique hash used for bypassing the item retrieval limit of 9,000 entities. When using this parameter, please note that the offset parameter will not be available, but the limit parameter will still work as expected.|
|page|query|integer(int64)|false|Page number. Used for pagination with page_size|
|page_size|query|integer(int64)|false|The number of results included on a page. Used for pagination with page|
|limit|query|integer(int64)|false|Number of results included on a page. Used for pagination with query|
|offset|query|integer(int64)|false|Where to start the listing(the offset of the first result). Used for pagination with limit|
|order|query|string|false|The field by which to order. Default varies by endpoint/resource.|
|order_direction|query|string|false|none|
|institution|query|integer(int64)|false|only return collections from this institution|
|published_since|query|string|false|Filter by collection publishing date. Will only return collections published after the date. date(ISO 8601) YYYY-MM-DD|
|modified_since|query|string|false|Filter by collection modified date. Will only return collections published after the date. date(ISO 8601) YYYY-MM-DD|
|group|query|integer(int64)|false|only return collections from this group|
|resource_doi|query|string|false|only return collections with this resource_doi|
|doi|query|string|false|only return collections with this doi|
|handle|query|string|false|only return collections with this handle|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|published_date|
|order|modified_date|
|order|views|
|order|shares|
|order|cites|
|order_direction|asc|
|order_direction|desc|

> Example responses

> 200 Response

```json
[
  {
    "doi": "10.6084/m9.figshare.123",
    "handle": "111184/figshare.1234",
    "id": 123,
    "published_date": "2015-08-12T00:39:55",
    "timeline": {
      "firstOnline": "2015-12-31",
      "publisherAcceptance": "2015-12-31",
      "publisherPublication": "2015-12-31",
      "posted": "2015-12-31",
      "revision": "2015-12-31",
      "submission": "2015-12-31"
    },
    "title": "Sample collection",
    "url": "https://api.figshare.com/v2/collections/123"
  }
]
```

<h3 id="public-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. An array of collections|Inline|
|400|Bad Request|Bad Request|None|
|422|Unprocessable Entity|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="public-collections-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Collection](#schemacollection)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Cursor|string||Unique hash used for bypassing the item retrieval limit of 9,000 entities.|

<aside class="success">
This operation does not require authentication
</aside>

## Public Collections Search

<a id="opIdcollections_search"></a>

> Code samples

```bash
curl https://example.com/collections/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "group": 2000013,
    "institution": 2000013,
    "limit": 10,
    "modified_since": "2017-12-22",
    "offset": 0,
    "order_direction": "desc",
    "page": 1,
    "page_size": 10,
    "published_since": "2017-12-22",
    "search_for": "figshare",
    "doi": "10.6084/m9.figshare.1407024",
    "handle": "10084/figshare.1407024",
    "order": "published_date",
    "resource_doi": "10.6084/m9.figshare.1407024"
  }'
```

`POST /collections/search`

Returns a list of public collections

> Body parameter

```json
{
  "group": 2000013,
  "institution": 2000013,
  "limit": 10,
  "modified_since": "2017-12-22",
  "offset": 0,
  "order_direction": "desc",
  "page": 1,
  "page_size": 10,
  "published_since": "2017-12-22",
  "search_for": "figshare",
  "doi": "10.6084/m9.figshare.1407024",
  "handle": "10084/figshare.1407024",
  "order": "published_date",
  "resource_doi": "10.6084/m9.figshare.1407024"
}
```

<h3 id="public-collections-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Cursor|header|string(uuid)|false|Unique hash used for bypassing the item retrieval limit of 9,000 entities. When using this parameter, please note that the offset parameter will not be available, but the limit parameter will still work as expected.|
|body|body|[CollectionSearch](#schemacollectionsearch)|false|Search Parameters|
|» group|body|integer(int32)|false|only return collections from this group|
|» institution|body|integer(int32)|false|only return collections from this institution|
|» limit|body|integer(int64)|false|Number of results included on a page. Used for pagination with query|
|» modified_since|body|string|false|Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD|
|» offset|body|integer(int64)|false|Where to start the listing(the offset of the first result). Used for pagination with limit|
|» order_direction|body|string|false|Direction of ordering|
|» page|body|integer(int64)|false|Page number. Used for pagination with page_size|
|» page_size|body|integer(int64)|false|The number of results included on a page. Used for pagination with page|
|» published_since|body|string|false|Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD|
|» search_for|body|string|false|Search term|
|» doi|body|string|false|Only return collections with this doi|
|» handle|body|string|false|Only return collections with this handle|
|» order|body|string|false|The field by which to order.|
|» resource_doi|body|string|false|Only return collections with this resource_doi|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» order_direction|asc|
|» order_direction|desc|
|» order|published_date|
|» order|modified_date|
|» order|views|
|» order|shares|
|» order|cites|

> Example responses

> 200 Response

```json
[
  {
    "doi": "10.6084/m9.figshare.123",
    "handle": "111184/figshare.1234",
    "id": 123,
    "published_date": "2015-08-12T00:39:55",
    "timeline": {
      "firstOnline": "2015-12-31",
      "publisherAcceptance": "2015-12-31",
      "publisherPublication": "2015-12-31",
      "posted": "2015-12-31",
      "revision": "2015-12-31",
      "submission": "2015-12-31"
    },
    "title": "Sample collection",
    "url": "https://api.figshare.com/v2/collections/123"
  }
]
```

<h3 id="public-collections-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. An array of collections|Inline|
|400|Bad Request|Bad Request|None|
|422|Unprocessable Entity|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="public-collections-search-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Collection](#schemacollection)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Cursor|string||Unique hash used for bypassing the item retrieval limit of 9,000 entities.|

<aside class="success">
This operation does not require authentication
</aside>

## Collection details

<a id="opIdcollection_details"></a>

> Code samples

```bash
curl https://example.com/collections/1 \
  -H 'Accept: application/json'
```

`GET /collections/{collection_id}`

View a collection

<h3 id="collection-details-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|integer(int64)|true|Collection Unique identifier|

> Example responses

> 200 Response

```json
{
  "doi": "10.6084/m9.figshare.123",
  "handle": "111184/figshare.1234",
  "id": 123,
  "published_date": "2015-08-12T00:39:55",
  "timeline": {
    "firstOnline": "2015-12-31",
    "publisherAcceptance": "2015-12-31",
    "publisherPublication": "2015-12-31",
    "posted": "2015-12-31",
    "revision": "2015-12-31",
    "submission": "2015-12-31"
  },
  "title": "Sample collection",
  "url": "https://api.figshare.com/v2/collections/123",
  "articles_count": 1,
  "authors": [
    {
      "full_name": "John Doe",
      "id": 97657,
      "is_active": 1,
      "orcid_id": "1234-5678-9123-1234",
      "url_name": "John_Doe"
    }
  ],
  "categories": [
    {
      "id": 11,
      "parent_id": 1,
      "path": "/450/1024/6532",
      "source_id": "300204",
      "taxonomy_id": 4,
      "title": "Anatomy"
    }
  ],
  "citation": "citation",
  "created_date": "2017-05-15T15:12:26Z",
  "custom_fields": [
    {
      "is_mandatory": false,
      "name": "key",
      "value": "value"
    }
  ],
  "description": "description",
  "funding": [
    {
      "funder_name": "string",
      "grant_code": "string",
      "id": 1,
      "is_user_defined": true,
      "title": "Scholarly funding",
      "url": "https://app.dimensions.ai/details/grant/1"
    }
  ],
  "group_id": 1,
  "group_resource_id": 1,
  "institution_id": 1,
  "modified_date": "2017-05-15T15:12:26Z",
  "public": true,
  "references": [
    "http://example.com"
  ],
  "resource_doi": "10.6084/m9.figshare.123",
  "resource_id": "",
  "resource_link": "http://figshare.com",
  "resource_title": "test",
  "resource_version": 0,
  "tags": [
    "t1",
    "t2"
  ],
  "version": 1
}
```

<h3 id="collection-details-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Collection representation|[CollectionComplete](#schemacollectioncomplete)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Public Collection Articles

<a id="opIdcollection_articles"></a>

> Code samples

```bash
curl https://example.com/collections/1/articles \
  -H 'Accept: application/json'
```

`GET /collections/{collection_id}/articles`

Returns a list of public collection articles

<h3 id="public-collection-articles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|integer(int64)|true|Collection Unique identifier|
|page|query|integer(int64)|false|Page number. Used for pagination with page_size|
|page_size|query|integer(int64)|false|The number of results included on a page. Used for pagination with page|
|limit|query|integer(int64)|false|Number of results included on a page. Used for pagination with query|
|offset|query|integer(int64)|false|Where to start the listing(the offset of the first result). Used for pagination with limit|

> Example responses

> 200 Response

```json
[
  {
    "defined_type": 3,
    "defined_type_name": "media",
    "doi": "10.6084/m9.figshare.1434614",
    "group_id": 1234,
    "handle": "111184/figshare.1234",
    "id": 1434614,
    "published_date": "2015-12-31T23:59:59.000Z",
    "thumb": "https://ndownloader.figshare.com/files/123456789/preview/12345678/thumb.png",
    "timeline": {
      "firstOnline": "2015-12-31",
      "publisherAcceptance": "2015-12-31",
      "publisherPublication": "2015-12-31",
      "posted": "2015-12-31",
      "revision": "2015-12-31",
      "submission": "2015-12-31"
    },
    "title": "Test article title",
    "url": "http://api.figshare.com/articles/1434614",
    "url_private_api": "https://api.figshare.com/account/articles/1434614",
    "url_private_html": "https://figshare.com/account/articles/1434614",
    "url_public_api": "https://api.figshare.com/articles/1434614",
    "url_public_html": "https://figshare.com/articles/media/Test_article_title/1434614"
  }
]
```

<h3 id="public-collection-articles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. An array of articles belonging to the collection|Inline|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|422|Unprocessable Entity|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="public-collection-articles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Article](#schemaarticle)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Collection Versions list

<a id="opIdcollection_versions"></a>

> Code samples

```bash
curl https://example.com/collections/1/versions \
  -H 'Accept: application/json'
```

`GET /collections/{collection_id}/versions`

Returns a list of public collection Versions

<h3 id="collection-versions-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|integer(int64)|true|Collection Unique identifier|

> Example responses

> 200 Response

```json
[
  {
    "id": 1,
    "url": "https://api.figshare.com/v2/collections/2000005/versions/1"
  }
]
```

<h3 id="collection-versions-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. An array of versions|Inline|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="collection-versions-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CollectionVersions](#schemacollectionversions)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Collection Version details

<a id="opIdcollection_version_details"></a>

> Code samples

```bash
curl https://example.com/collections/1/versions/1 \
  -H 'Accept: application/json'
```

`GET /collections/{collection_id}/versions/{version_id}`

View details for a certain version of a collection

<h3 id="collection-version-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|integer(int64)|true|Collection Unique identifier|
|version_id|path|integer(int64)|true|Version Number|

> Example responses

> 200 Response

```json
{
  "doi": "10.6084/m9.figshare.123",
  "handle": "111184/figshare.1234",
  "id": 123,
  "published_date": "2015-08-12T00:39:55",
  "timeline": {
    "firstOnline": "2015-12-31",
    "publisherAcceptance": "2015-12-31",
    "publisherPublication": "2015-12-31",
    "posted": "2015-12-31",
    "revision": "2015-12-31",
    "submission": "2015-12-31"
  },
  "title": "Sample collection",
  "url": "https://api.figshare.com/v2/collections/123",
  "articles_count": 1,
  "authors": [
    {
      "full_name": "John Doe",
      "id": 97657,
      "is_active": 1,
      "orcid_id": "1234-5678-9123-1234",
      "url_name": "John_Doe"
    }
  ],
  "categories": [
    {
      "id": 11,
      "parent_id": 1,
      "path": "/450/1024/6532",
      "source_id": "300204",
      "taxonomy_id": 4,
      "title": "Anatomy"
    }
  ],
  "citation": "citation",
  "created_date": "2017-05-15T15:12:26Z",
  "custom_fields": [
    {
      "is_mandatory": false,
      "name": "key",
      "value": "value"
    }
  ],
  "description": "description",
  "funding": [
    {
      "funder_name": "string",
      "grant_code": "string",
      "id": 1,
      "is_user_defined": true,
      "title": "Scholarly funding",
      "url": "https://app.dimensions.ai/details/grant/1"
    }
  ],
  "group_id": 1,
  "group_resource_id": 1,
  "institution_id": 1,
  "modified_date": "2017-05-15T15:12:26Z",
  "public": true,
  "references": [
    "http://example.com"
  ],
  "resource_doi": "10.6084/m9.figshare.123",
  "resource_id": "",
  "resource_link": "http://figshare.com",
  "resource_title": "test",
  "resource_version": 0,
  "tags": [
    "t1",
    "t2"
  ],
  "version": 1
}
```

<h3 id="collection-version-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Collection for that version|[CollectionComplete](#schemacollectioncomplete)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="figshare-api-projects">projects</h1>

## Private Projects

<a id="opIdprivate_projects_list"></a>

> Code samples

```bash
curl https://example.com/account/projects \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/projects`

List private projects

<h3 id="private-projects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int64)|false|Page number. Used for pagination with page_size|
|page_size|query|integer(int64)|false|The number of results included on a page. Used for pagination with page|
|limit|query|integer(int64)|false|Number of results included on a page. Used for pagination with query|
|offset|query|integer(int64)|false|Where to start the listing(the offset of the first result). Used for pagination with limit|
|order|query|string|false|The field by which to order.|
|order_direction|query|string|false|none|
|storage|query|string|false|only return collections from this institution|
|roles|query|string|false|Any combination of owner, collaborator, viewer separated by comma. Examples: "owner" or "owner,collaborator".|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|published_date|
|order|modified_date|
|order|views|
|order_direction|asc|
|order_direction|desc|
|storage|group|
|storage|individual|

> Example responses

> 200 Response

```json
[
  {
    "id": 1,
    "published_date": "2017-05-16T14:55:08Z",
    "title": "project",
    "url": "http://api.figshare.com/v2/account/projects/1",
    "role": "Owner",
    "storage": "individual"
  }
]
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="private-projects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. An array of projects|Inline|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="private-projects-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProjectPrivate](#schemaprojectprivate)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Create project

<a id="opIdprivate_project_create"></a>

> Code samples

```bash
curl https://example.com/account/projects \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "custom_fields": {
      "defined_key": "value for it"
    },
    "custom_fields_list": [
      {
        "name": "key",
        "value": "value"
      }
    ],
    "description": "project description",
    "funding": "",
    "funding_list": [
      {
        "id": 0,
        "title": "string"
      }
    ],
    "group_id": 0,
    "title": "project title"
  }'
```

`POST /account/projects`

Create a new project

> Body parameter

```json
{
  "custom_fields": {
    "defined_key": "value for it"
  },
  "custom_fields_list": [
    {
      "name": "key",
      "value": "value"
    }
  ],
  "description": "project description",
  "funding": "",
  "funding_list": [
    {
      "id": 0,
      "title": "string"
    }
  ],
  "group_id": 0,
  "title": "project title"
}
```

<h3 id="create-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ProjectCreate](#schemaprojectcreate)|true|Project  description|
|» custom_fields|body|object|false|List of key, values pairs to be associated with the project|
|» custom_fields_list|body|[[CustomArticleFieldAdd](#schemacustomarticlefieldadd)]|false|List of custom fields values, supersedes custom_fields parameter|
|» description|body|string|false|Project description|
|» funding|body|string|false|Grant number or organization(s) that funded this project. Up to 2000 characters permitted.|
|» funding_list|body|[[FundingCreate](#schemafundingcreate)]|false|Funding creation / update items|
|» group_id|body|integer(int64)|false|Only if project type is group.|
|» title|body|string|true|The title for this project - mandatory. 3 - 1000 characters.|

> Example responses

> 201 Response

```json
{
  "entity_id": 33334444,
  "location": "http://example.com"
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[CreateProjectResponse](#schemacreateprojectresponse)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Private Projects search

<a id="opIdprivate_projects_search"></a>

> Code samples

```bash
curl https://example.com/account/projects/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "group": 2000013,
    "institution": 2000013,
    "limit": 10,
    "modified_since": "2017-12-22",
    "offset": 0,
    "order_direction": "desc",
    "page": 1,
    "page_size": 10,
    "published_since": "2017-12-22",
    "search_for": "figshare",
    "order": "published_date"
  }'
```

`POST /account/projects/search`

Search inside the private projects

> Body parameter

```json
{
  "group": 2000013,
  "institution": 2000013,
  "limit": 10,
  "modified_since": "2017-12-22",
  "offset": 0,
  "order_direction": "desc",
  "page": 1,
  "page_size": 10,
  "published_since": "2017-12-22",
  "search_for": "figshare",
  "order": "published_date"
}
```

<h3 id="private-projects-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ProjectsSearch](#schemaprojectssearch)|false|Search Parameters|
|» group|body|integer(int32)|false|only return collections from this group|
|» institution|body|integer(int32)|false|only return collections from this institution|
|» limit|body|integer(int64)|false|Number of results included on a page. Used for pagination with query|
|» modified_since|body|string|false|Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD|
|» offset|body|integer(int64)|false|Where to start the listing(the offset of the first result). Used for pagination with limit|
|» order_direction|body|string|false|Direction of ordering|
|» page|body|integer(int64)|false|Page number. Used for pagination with page_size|
|» page_size|body|integer(int64)|false|The number of results included on a page. Used for pagination with page|
|» published_since|body|string|false|Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD|
|» search_for|body|string|false|Search term|
|» order|body|string|false|The field by which to order.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» order_direction|asc|
|» order_direction|desc|
|» order|published_date|
|» order|modified_date|
|» order|views|

> Example responses

> 200 Response

```json
[
  {
    "id": 1,
    "published_date": "2017-05-16T14:55:08Z",
    "title": "project",
    "url": "http://api.figshare.com/v2/account/projects/1",
    "role": "Owner",
    "storage": "individual"
  }
]
```

<h3 id="private-projects-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. An array of projects|Inline|
|400|Bad Request|Bad Request|None|
|422|Unprocessable Entity|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="private-projects-search-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProjectPrivate](#schemaprojectprivate)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## View project details

<a id="opIdprivate_project_details"></a>

> Code samples

```bash
curl https://example.com/account/projects/1 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/projects/{project_id}`

View a private project

<h3 id="view-project-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|integer(int64)|true|Project unique identifier|

> Example responses

> 200 Response

```json
{
  "id": 1,
  "published_date": "2017-05-16T14:55:08Z",
  "title": "project",
  "url": "http://api.figshare.com/v2/account/projects/1",
  "role": "Owner",
  "storage": "individual",
  "account_id": 1000001,
  "collaborators": [
    {
      "name": "name",
      "role_name": "Owner",
      "user_id": 1
    }
  ],
  "created_date": "2017-05-16T14:52:54Z",
  "custom_fields": [
    {
      "is_mandatory": false,
      "name": "key",
      "value": "value"
    }
  ],
  "description": "description",
  "figshare_url": "https://figshare.com/projects/project/1",
  "funding": "none",
  "funding_list": [
    {
      "funder_name": "string",
      "grant_code": "string",
      "id": 1,
      "is_user_defined": true,
      "title": "Scholarly funding",
      "url": "https://app.dimensions.ai/details/grant/1"
    }
  ],
  "group_id": 0,
  "modified_date": "2017-05-16T14:52:54Z",
  "quota": 0,
  "used_quota": 0,
  "used_quota_private": 0,
  "used_quota_public": 0
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="view-project-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Project representation|[ProjectCompletePrivate](#schemaprojectcompleteprivate)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Update project

<a id="opIdprivate_project_update"></a>

> Code samples

```bash
curl https://example.com/account/projects/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "custom_fields": {
      "defined_key": "value for it"
    },
    "custom_fields_list": [
      {
        "name": "key",
        "value": "value"
      }
    ],
    "description": "project description",
    "funding": "",
    "funding_list": [
      {
        "id": 0,
        "title": "string"
      }
    ],
    "title": "project title"
  }'
```

`PUT /account/projects/{project_id}`

Updating an project by passing body parameters; request can also be made with the PATCH method.

> Body parameter

```json
{
  "custom_fields": {
    "defined_key": "value for it"
  },
  "custom_fields_list": [
    {
      "name": "key",
      "value": "value"
    }
  ],
  "description": "project description",
  "funding": "",
  "funding_list": [
    {
      "id": 0,
      "title": "string"
    }
  ],
  "title": "project title"
}
```

<h3 id="update-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|integer(int64)|true|Project unique identifier|
|body|body|[ProjectUpdate](#schemaprojectupdate)|true|Project description|
|» custom_fields|body|object|false|List of key, values pairs to be associated with the project|
|» custom_fields_list|body|[[CustomArticleFieldAdd](#schemacustomarticlefieldadd)]|false|List of custom fields values, supersedes custom_fields parameter|
|» description|body|string|false|Project description|
|» funding|body|string|false|Grant number or organization(s) that funded this project. Up to 2000 characters permitted.|
|» funding_list|body|[[FundingCreate](#schemafundingcreate)]|false|Funding creation / update items|
|» title|body|string|false|The title for this project - mandatory. 3 - 1000 characters.|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="update-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|Reset Content|Reset Content|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|205|Location|string|link|Location of project|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Delete project

<a id="opIdprivate_project_delete"></a>

> Code samples

```bash
curl https://example.com/account/projects/1 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /account/projects/{project_id}`

A project can be deleted only if: - it is not public - it does not have public articles.

When an individual project is deleted, all the articles are moved to my data of each owner.

When a group project is deleted, all the articles and files are deleted as well. Only project owner, group admin and above can delete a project.


<h3 id="delete-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|integer(int64)|true|Project unique identifier|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## List project articles

<a id="opIdprivate_project_articles_list"></a>

> Code samples

```bash
curl https://example.com/account/projects/1/articles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/projects/{project_id}/articles`

List project articles

<h3 id="list-project-articles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|integer(int64)|true|Project unique identifier|
|page|query|integer(int64)|false|Page number. Used for pagination with page_size|
|page_size|query|integer(int64)|false|The number of results included on a page. Used for pagination with page|
|limit|query|integer(int64)|false|Number of results included on a page. Used for pagination with query|
|offset|query|integer(int64)|false|Where to start the listing(the offset of the first result). Used for pagination with limit|

> Example responses

> 200 Response

```json
[
  {
    "defined_type": 3,
    "defined_type_name": "media",
    "doi": "10.6084/m9.figshare.1434614",
    "group_id": 1234,
    "handle": "111184/figshare.1234",
    "id": 1434614,
    "published_date": "2015-12-31T23:59:59.000Z",
    "thumb": "https://ndownloader.figshare.com/files/123456789/preview/12345678/thumb.png",
    "timeline": {
      "firstOnline": "2015-12-31",
      "publisherAcceptance": "2015-12-31",
      "publisherPublication": "2015-12-31",
      "posted": "2015-12-31",
      "revision": "2015-12-31",
      "submission": "2015-12-31"
    },
    "title": "Test article title",
    "url": "http://api.figshare.com/articles/1434614",
    "url_private_api": "https://api.figshare.com/account/articles/1434614",
    "url_private_html": "https://figshare.com/account/articles/1434614",
    "url_public_api": "https://api.figshare.com/articles/1434614",
    "url_public_html": "https://figshare.com/articles/media/Test_article_title/1434614"
  }
]
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-project-articles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. List of articles|Inline|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="list-project-articles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Article](#schemaarticle)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Create project article

<a id="opIdprivate_project_articles_create"></a>

> Code samples

```bash
curl https://example.com/account/projects/1/articles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "authors": [
      {
        "name": "John Doe"
      },
      {
        "id": 1000008
      }
    ],
    "categories": [
      1,
      10,
      11
    ],
    "categories_by_source_id": [
      "300204",
      "400207"
    ],
    "custom_fields": {
      "defined_key": "value for it"
    },
    "custom_fields_list": [
      {
        "name": "key",
        "value": "value"
      }
    ],
    "defined_type": "media",
    "description": "Test description of article",
    "doi": "",
    "funding": "",
    "funding_list": [
      {
        "id": 0,
        "title": "string"
      }
    ],
    "handle": "",
    "keywords": [
      "tag1",
      "tag2"
    ],
    "license": 1,
    "references": [
      "http://figshare.com",
      "http://api.figshare.com"
    ],
    "resource_doi": "",
    "resource_title": "",
    "tags": [
      "tag1",
      "tag2"
    ],
    "timeline": {
      "firstOnline": "2015-12-31",
      "publisherAcceptance": "2015-12-31",
      "publisherPublication": "2015-12-31"
    },
    "title": "Test article title"
  }'
```

`POST /account/projects/{project_id}/articles`

Create a new Article and associate it with this project

> Body parameter

```json
{
  "authors": [
    {
      "name": "John Doe"
    },
    {
      "id": 1000008
    }
  ],
  "categories": [
    1,
    10,
    11
  ],
  "categories_by_source_id": [
    "300204",
    "400207"
  ],
  "custom_fields": {
    "defined_key": "value for it"
  },
  "custom_fields_list": [
    {
      "name": "key",
      "value": "value"
    }
  ],
  "defined_type": "media",
  "description": "Test description of article",
  "doi": "",
  "funding": "",
  "funding_list": [
    {
      "id": 0,
      "title": "string"
    }
  ],
  "handle": "",
  "keywords": [
    "tag1",
    "tag2"
  ],
  "license": 1,
  "references": [
    "http://figshare.com",
    "http://api.figshare.com"
  ],
  "resource_doi": "",
  "resource_title": "",
  "tags": [
    "tag1",
    "tag2"
  ],
  "timeline": {
    "firstOnline": "2015-12-31",
    "publisherAcceptance": "2015-12-31",
    "publisherPublication": "2015-12-31"
  },
  "title": "Test article title"
}
```

<h3 id="create-project-article-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|integer(int64)|true|Project unique identifier|
|page|query|integer(int64)|false|Page number. Used for pagination with page_size|
|page_size|query|integer(int64)|false|The number of results included on a page. Used for pagination with page|
|limit|query|integer(int64)|false|Number of results included on a page. Used for pagination with query|
|offset|query|integer(int64)|false|Where to start the listing(the offset of the first result). Used for pagination with limit|
|body|body|[ArticleProjectCreate](#schemaarticleprojectcreate)|true|Article description|
|» authors|body|[object]|false|List of authors to be associated with the article. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint.|
|» categories|body|[integer(int64)]|false|List of category ids to be associated with the article(e.g [1, 23, 33, 66])|
|» categories_by_source_id|body|[string]|false|List of category source ids to be associated with the article, supersedes the categories property|
|» custom_fields|body|object|false|List of key, values pairs to be associated with the article|
|» custom_fields_list|body|[[CustomArticleFieldAdd](#schemacustomarticlefieldadd)]|false|List of custom fields values, supersedes custom_fields parameter|
|» defined_type|body|string|false|<b>One of:</b> <code>figure</code> <code>online resource</code> <code>preprint</code> <code>book</code> <code>conference contribution</code> <code>media</code> <code>dataset</code> <code>poster</code> <code>journal contribution</code> <code>presentation</code> <code>thesis</code> <code>software</code>|
|» description|body|string|false|The article description. In a publisher case, usually this is the remote article description|
|» doi|body|string|false|Not applicable for regular users. In an institutional case, make sure your group supports setting DOIs. This setting is applied by figshare via opening a ticket through our support/helpdesk system.|
|» funding|body|string|false|Grant number or funding authority|
|» funding_list|body|[[FundingCreate](#schemafundingcreate)]|false|Funding creation / update items|
|» handle|body|string|false|Not applicable for regular users. In an institutional case, make sure your group supports setting Handles. This setting is applied by figshare via opening a ticket through our support/helpdesk system.|
|» keywords|body|[string]|false|List of tags to be associated with the article. Tags can be used instead|
|» license|body|integer(int64)|false|License id for this article.|
|» references|body|[string(link)]|false|List of links to be associated with the article (e.g ["http://link1", "http://link2", "http://link3"])|
|» resource_doi|body|string|false|Not applicable to regular users. In a publisher case, this is the publisher article DOI.|
|» resource_title|body|string|false|Not applicable to regular users. In a publisher case, this is the publisher article title.|
|» tags|body|[string]|false|List of tags to be associated with the article. Keywords can be used instead|
|» timeline|body|[TimelineUpdate](#schematimelineupdate)|false|none|
|» title|body|string|true|Title of article|

> Example responses

> 201 Response

```json
{
  "entity_id": 33334444,
  "location": "http://example.com",
  "warnings": [
    "string"
  ]
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-project-article-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[LocationWarnings](#schemalocationwarnings)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string|url|Location of article|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Project article details

<a id="opIdprivate_project_article_details"></a>

> Code samples

```bash
curl https://example.com/account/projects/1/articles/1 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/projects/{project_id}/articles/{article_id}`

Project article details

<h3 id="project-article-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|integer(int64)|true|Project unique identifier|
|article_id|path|integer(int64)|true|Project Article unique identifier|

> Example responses

> 200 Response

```json
{
  "defined_type": 3,
  "defined_type_name": "media",
  "doi": "10.6084/m9.figshare.1434614",
  "group_id": 1234,
  "handle": "111184/figshare.1234",
  "id": 1434614,
  "published_date": "2015-12-31T23:59:59.000Z",
  "thumb": "https://ndownloader.figshare.com/files/123456789/preview/12345678/thumb.png",
  "timeline": {
    "firstOnline": "2015-12-31",
    "publisherAcceptance": "2015-12-31",
    "publisherPublication": "2015-12-31",
    "posted": "2015-12-31",
    "revision": "2015-12-31",
    "submission": "2015-12-31"
  },
  "title": "Test article title",
  "url": "http://api.figshare.com/articles/1434614",
  "url_private_api": "https://api.figshare.com/account/articles/1434614",
  "url_private_html": "https://figshare.com/account/articles/1434614",
  "url_public_api": "https://api.figshare.com/articles/1434614",
  "url_public_html": "https://figshare.com/articles/media/Test_article_title/1434614",
  "categories": [
    {
      "id": 11,
      "parent_id": 1,
      "path": "/450/1024/6532",
      "source_id": "300204",
      "taxonomy_id": 4,
      "title": "Anatomy"
    }
  ],
  "citation": "lilliput, figshare admin (2017): first project item. figshare.\n \n Retrieved: 14 01, May 22, 2017 (GMT)",
  "confidential_reason": "none",
  "created_date": "2017-05-18T11:49:03Z",
  "description": "article description",
  "embargo_date": "2017-05-18T11:49:03Z",
  "embargo_reason": "not complete",
  "embargo_title": "File(s) under embargo",
  "embargo_type": "article",
  "funding": "none",
  "funding_list": [
    0
  ],
  "has_linked_file": true,
  "is_active": true,
  "is_confidential": true,
  "is_embargoed": true,
  "is_metadata_record": false,
  "is_public": true,
  "license": {
    "name": "CC BY",
    "url": "http://creativecommons.org/licenses/by/4.0/",
    "value": 1
  },
  "metadata_reason": "hosted somewhere else",
  "modified_date": "2017-05-18T11:49:03Z",
  "references": [
    "http://figshare.com",
    "http://figshare.com/api"
  ],
  "size": 69939,
  "status": "public",
  "tags": [
    "t1",
    "t2",
    "t3"
  ],
  "version": 1
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="project-article-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Article representation|[ProjectArticle](#schemaprojectarticle)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Delete project article

<a id="opIdprivate_project_article_delete"></a>

> Code samples

```bash
curl https://example.com/account/projects/1/articles/1 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /account/projects/{project_id}/articles/{article_id}`

Delete project article

<h3 id="delete-project-article-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|integer(int64)|true|Project unique identifier|
|article_id|path|integer(int64)|true|Project Article unique identifier|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-project-article-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Project article list files

<a id="opIdprivate_project_article_files"></a>

> Code samples

```bash
curl https://example.com/account/projects/1/articles/1/files \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/projects/{project_id}/articles/{article_id}/files`

List article files

<h3 id="project-article-list-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|integer(int64)|true|Project unique identifier|
|article_id|path|integer(int64)|true|Project Article unique identifier|

> Example responses

> 200 Response

```json
[
  {
    "computed_md5": "043a51806d646e88cafbf19e7b82846f",
    "download_url": "https://ndownloader.figshare.com/files/3000002",
    "id": 3000002,
    "is_link_only": false,
    "name": "test.xls",
    "size": 14848,
    "supplied_md5": "043a51806d646e88cafbf19e7b82846f",
    "is_attached_to_public_version": true,
    "preview_state": "preview not available",
    "status": "created",
    "upload_token": "9dfc5fe3-d617-4d93-ac11-8afe7e984a4b",
    "upload_url": "https://uploads.figshare.com",
    "viewer_type": "string"
  }
]
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="project-article-list-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. List of files|Inline|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="project-article-list-files-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PrivateFile](#schemaprivatefile)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Project article file details

<a id="opIdprivate_project_article_file"></a>

> Code samples

```bash
curl https://example.com/account/projects/1/articles/1/files/1 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/projects/{project_id}/articles/{article_id}/files/{file_id}`

Project article file details

<h3 id="project-article-file-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|integer(int64)|true|Project unique identifier|
|article_id|path|integer(int64)|true|Project Article unique identifier|
|file_id|path|integer(int64)|true|File unique identifier|

> Example responses

> 200 Response

```json
{
  "computed_md5": "043a51806d646e88cafbf19e7b82846f",
  "download_url": "https://ndownloader.figshare.com/files/3000002",
  "id": 3000002,
  "is_link_only": false,
  "name": "test.xls",
  "size": 14848,
  "supplied_md5": "043a51806d646e88cafbf19e7b82846f",
  "is_attached_to_public_version": true,
  "preview_state": "preview not available",
  "status": "created",
  "upload_token": "9dfc5fe3-d617-4d93-ac11-8afe7e984a4b",
  "upload_url": "https://uploads.figshare.com",
  "viewer_type": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="project-article-file-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. File representation|[PrivateFile](#schemaprivatefile)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## List project collaborators

<a id="opIdprivate_project_collaborators_list"></a>

> Code samples

```bash
curl https://example.com/account/projects/1/collaborators \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/projects/{project_id}/collaborators`

List Project collaborators and invited users

<h3 id="list-project-collaborators-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|integer(int64)|true|Project unique identifier|

> Example responses

> 200 Response

```json
[
  {
    "name": "name",
    "role_name": "Owner",
    "status": "invited",
    "user_id": 1
  }
]
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-project-collaborators-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. List of Collaborators|Inline|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="list-project-collaborators-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProjectCollaborator](#schemaprojectcollaborator)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Invite project collaborators

<a id="opIdprivate_project_collaborators_invite"></a>

> Code samples

```bash
curl https://example.com/account/projects/1/collaborators \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "comment": "hey",
    "email": "user@domain.com",
    "role_name": "viewer",
    "user_id": 100008
  }'
```

`POST /account/projects/{project_id}/collaborators`

Invite users to collaborate on project or view the project

> Body parameter

```json
{
  "comment": "hey",
  "email": "user@domain.com",
  "role_name": "viewer",
  "user_id": 100008
}
```

<h3 id="invite-project-collaborators-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|integer(int64)|true|Project unique identifier|
|body|body|[ProjectCollaboratorInvite](#schemaprojectcollaboratorinvite)|true|viewer or collaborator role. User user_id or email of user|
|» comment|body|string|false|Text sent when inviting the user to the project|
|» email|body|string|false|Collaborator email|
|» role_name|body|string|true|Role of the the collaborator inside the project|
|» user_id|body|integer(int64)|false|User id of the collaborator|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» role_name|viewer|
|» role_name|collaborator|

> Example responses

> 201 Response

```json
{
  "message": "Project 1 has been published"
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="invite-project-collaborators-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[ResponseMessage](#schemaresponsemessage)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Remove project collaborator

<a id="opIdprivate_project_collaborator__Delete"></a>

> Code samples

```bash
curl https://example.com/account/projects/1/collaborators/1 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /account/projects/{project_id}/collaborators/{user_id}`

Remove project collaborator

<h3 id="remove-project-collaborator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|integer(int64)|true|Project unique identifier|
|user_id|path|integer(int64)|true|User unique identifier|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="remove-project-collaborator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Private Project Leave

<a id="opIdprivate_project_leave"></a>

> Code samples

```bash
curl https://example.com/account/projects/1/leave \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /account/projects/{project_id}/leave`

Please note: project's owner cannot leave the project.

<h3 id="private-project-leave-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|integer(int64)|true|Project unique identifier|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="private-project-leave-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## List project notes

<a id="opIdprivate_project_notes_list"></a>

> Code samples

```bash
curl https://example.com/account/projects/1/notes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/projects/{project_id}/notes`

List project notes

<h3 id="list-project-notes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int64)|false|Page number. Used for pagination with page_size|
|page_size|query|integer(int64)|false|The number of results included on a page. Used for pagination with page|
|limit|query|integer(int64)|false|Number of results included on a page. Used for pagination with query|
|offset|query|integer(int64)|false|Where to start the listing(the offset of the first result). Used for pagination with limit|
|project_id|path|integer(int64)|true|Project unique identifier|

> Example responses

> 200 Response

```json
[
  {
    "abstract": "text",
    "created_date": "2017-05-16T16:49:11Z",
    "id": 1,
    "modified_date": "2017-05-16T16:49:11Z",
    "user_id": 100008,
    "user_name": "user"
  }
]
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-project-notes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. List of project notes|Inline|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="list-project-notes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProjectNote](#schemaprojectnote)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Create project note

<a id="opIdprivate_project_notes_create"></a>

> Code samples

```bash
curl https://example.com/account/projects/1/notes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "text": "note to remember"
  }'
```

`POST /account/projects/{project_id}/notes`

Create a new project note

> Body parameter

```json
{
  "text": "note to remember"
}
```

<h3 id="create-project-note-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|integer(int64)|true|Project unique identifier|
|body|body|[ProjectNoteCreate](#schemaprojectnotecreate)|true|Note message|
|» text|body|string|true|Text of the note|

> Example responses

> 201 Response

```json
{
  "location": "http://example.com"
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-project-note-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[Location](#schemalocation)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string|url|Location note|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Project note details

<a id="opIdprivate_project_note"></a>

> Code samples

```bash
curl https://example.com/account/projects/1/notes/1 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account/projects/{project_id}/notes/{note_id}`

<h3 id="project-note-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|integer(int64)|true|Project unique identifier|
|note_id|path|integer(int64)|true|Note unique identifier|

> Example responses

> 200 Response

```json
{
  "abstract": "text",
  "created_date": "2017-05-16T16:49:11Z",
  "id": 1,
  "modified_date": "2017-05-16T16:49:11Z",
  "user_id": 100008,
  "user_name": "user",
  "text": "text"
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="project-note-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Note representation|[ProjectNotePrivate](#schemaprojectnoteprivate)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Update project note

<a id="opIdprivate_project_note_update"></a>

> Code samples

```bash
curl https://example.com/account/projects/1/notes/1 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "text": "note to remember"
  }'
```

`PUT /account/projects/{project_id}/notes/{note_id}`

> Body parameter

```json
{
  "text": "note to remember"
}
```

<h3 id="update-project-note-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|integer(int64)|true|Project unique identifier|
|note_id|path|integer(int64)|true|Note unique identifier|
|body|body|[ProjectNoteCreate](#schemaprojectnotecreate)|true|Note message|
|» text|body|string|true|Text of the note|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="update-project-note-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|205|Reset Content|Reset Content|None|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|205|Location|string|url|Location note|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Delete project note

<a id="opIdprivate_project_note_delete"></a>

> Code samples

```bash
curl https://example.com/account/projects/1/notes/1 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /account/projects/{project_id}/notes/{note_id}`

<h3 id="delete-project-note-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|integer(int64)|true|Project unique identifier|
|note_id|path|integer(int64)|true|Note unique identifier|

> Example responses

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-project-note-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Private Project Publish

<a id="opIdprivate_project_publish"></a>

> Code samples

```bash
curl https://example.com/account/projects/1/publish \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /account/projects/{project_id}/publish`

Publish a project. Possible after all items inside it are public

<h3 id="private-project-publish-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|integer(int64)|true|Project unique identifier|

> Example responses

> 200 Response

```json
{
  "message": "Project 1 has been published"
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="private-project-publish-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ResponseMessage](#schemaresponsemessage)|
|400|Bad Request|Bad Request|None|
|403|Forbidden|Forbidden|[ErrorMessage](#schemaerrormessage)|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: all )
</aside>

## Public Projects

<a id="opIdprojects_list"></a>

> Code samples

```bash
curl https://example.com/projects \
  -H 'Accept: application/json'
```

`GET /projects`

Returns a list of public projects

<h3 id="public-projects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Cursor|header|string(uuid)|false|Unique hash used for bypassing the item retrieval limit of 9,000 entities. When using this parameter, please note that the offset parameter will not be available, but the limit parameter will still work as expected.|
|page|query|integer(int64)|false|Page number. Used for pagination with page_size|
|page_size|query|integer(int64)|false|The number of results included on a page. Used for pagination with page|
|limit|query|integer(int64)|false|Number of results included on a page. Used for pagination with query|
|offset|query|integer(int64)|false|Where to start the listing(the offset of the first result). Used for pagination with limit|
|order|query|string|false|The field by which to order. Default varies by endpoint/resource.|
|order_direction|query|string|false|none|
|institution|query|integer(int64)|false|only return collections from this institution|
|published_since|query|string|false|Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD|
|group|query|integer(int64)|false|only return collections from this group|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|published_date|
|order|modified_date|
|order|views|
|order_direction|asc|
|order_direction|desc|

> Example responses

> 200 Response

```json
[
  {
    "id": 1,
    "published_date": "2017-05-16T14:55:08Z",
    "title": "project",
    "url": "http://api.figshare.com/v2/account/projects/1"
  }
]
```

<h3 id="public-projects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. An array of projects|Inline|
|400|Bad Request|Bad Request|None|
|422|Unprocessable Entity|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="public-projects-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Project](#schemaproject)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Cursor|string||Unique hash used for bypassing the item retrieval limit of 9,000 entities.|

<aside class="success">
This operation does not require authentication
</aside>

## Public Projects Search

<a id="opIdprojects_search"></a>

> Code samples

```bash
curl https://example.com/projects/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "group": 2000013,
    "institution": 2000013,
    "limit": 10,
    "modified_since": "2017-12-22",
    "offset": 0,
    "order_direction": "desc",
    "page": 1,
    "page_size": 10,
    "published_since": "2017-12-22",
    "search_for": "figshare",
    "order": "published_date"
  }'
```

`POST /projects/search`

Returns a list of public articles

> Body parameter

```json
{
  "group": 2000013,
  "institution": 2000013,
  "limit": 10,
  "modified_since": "2017-12-22",
  "offset": 0,
  "order_direction": "desc",
  "page": 1,
  "page_size": 10,
  "published_since": "2017-12-22",
  "search_for": "figshare",
  "order": "published_date"
}
```

<h3 id="public-projects-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Cursor|header|string(uuid)|false|Unique hash used for bypassing the item retrieval limit of 9,000 entities. When using this parameter, please note that the offset parameter will not be available, but the limit parameter will still work as expected.|
|body|body|[ProjectsSearch](#schemaprojectssearch)|false|Search Parameters|
|» group|body|integer(int32)|false|only return collections from this group|
|» institution|body|integer(int32)|false|only return collections from this institution|
|» limit|body|integer(int64)|false|Number of results included on a page. Used for pagination with query|
|» modified_since|body|string|false|Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD|
|» offset|body|integer(int64)|false|Where to start the listing(the offset of the first result). Used for pagination with limit|
|» order_direction|body|string|false|Direction of ordering|
|» page|body|integer(int64)|false|Page number. Used for pagination with page_size|
|» page_size|body|integer(int64)|false|The number of results included on a page. Used for pagination with page|
|» published_since|body|string|false|Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD|
|» search_for|body|string|false|Search term|
|» order|body|string|false|The field by which to order.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» order_direction|asc|
|» order_direction|desc|
|» order|published_date|
|» order|modified_date|
|» order|views|

> Example responses

> 200 Response

```json
[
  {
    "id": 1,
    "published_date": "2017-05-16T14:55:08Z",
    "title": "project",
    "url": "http://api.figshare.com/v2/account/projects/1"
  }
]
```

<h3 id="public-projects-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. An array of projects|Inline|
|400|Bad Request|Bad Request|None|
|422|Unprocessable Entity|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="public-projects-search-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Project](#schemaproject)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Cursor|string||Unique hash used for bypassing the item retrieval limit of 9,000 entities.|

<aside class="success">
This operation does not require authentication
</aside>

## Public Project

<a id="opIdproject_details"></a>

> Code samples

```bash
curl https://example.com/projects/1 \
  -H 'Accept: application/json'
```

`GET /projects/{project_id}`

View a project

<h3 id="public-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|integer(int64)|true|Project Unique identifier|

> Example responses

> 200 Response

```json
{
  "id": 1,
  "published_date": "2017-05-16T14:55:08Z",
  "title": "project",
  "url": "http://api.figshare.com/v2/account/projects/1",
  "collaborators": [
    {
      "name": "name",
      "role_name": "Owner",
      "user_id": 1
    }
  ],
  "description": "description",
  "figshare_url": "https://figshare.com/projects/project/1",
  "funding": "",
  "funding_list": [
    {
      "funder_name": "string",
      "grant_code": "string",
      "id": 1,
      "is_user_defined": true,
      "title": "Scholarly funding",
      "url": "https://app.dimensions.ai/details/grant/1"
    }
  ]
}
```

<h3 id="public-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Project representation|[ProjectComplete](#schemaprojectcomplete)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Public Project Articles

<a id="opIdproject_articles"></a>

> Code samples

```bash
curl https://example.com/projects/1/articles \
  -H 'Accept: application/json'
```

`GET /projects/{project_id}/articles`

List articles in project

<h3 id="public-project-articles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|integer(int64)|true|Project Unique identifier|

> Example responses

> 200 Response

```json
[
  {
    "defined_type": 3,
    "defined_type_name": "media",
    "doi": "10.6084/m9.figshare.1434614",
    "group_id": 1234,
    "handle": "111184/figshare.1234",
    "id": 1434614,
    "published_date": "2015-12-31T23:59:59.000Z",
    "thumb": "https://ndownloader.figshare.com/files/123456789/preview/12345678/thumb.png",
    "timeline": {
      "firstOnline": "2015-12-31",
      "publisherAcceptance": "2015-12-31",
      "publisherPublication": "2015-12-31",
      "posted": "2015-12-31",
      "revision": "2015-12-31",
      "submission": "2015-12-31"
    },
    "title": "Test article title",
    "url": "http://api.figshare.com/articles/1434614",
    "url_private_api": "https://api.figshare.com/account/articles/1434614",
    "url_private_html": "https://figshare.com/account/articles/1434614",
    "url_public_api": "https://api.figshare.com/articles/1434614",
    "url_public_html": "https://figshare.com/articles/media/Test_article_title/1434614"
  }
]
```

<h3 id="public-project-articles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK. Project articles list|Inline|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="public-project-articles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Article](#schemaarticle)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "active": 0,
  "created_date": "2018-05-22T04:04:04",
  "email": "user@domain.com",
  "first_name": "Doe",
  "group_id": 0,
  "id": 1495682,
  "institution_id": 1,
  "institution_user_id": "djohn42",
  "last_name": "John",
  "maximum_file_size": 0,
  "modified_date": "2018-05-22T04:04:04",
  "pending_quota_request": true,
  "quota": 0,
  "used_quota": 0,
  "used_quota_private": 0,
  "used_quota_public": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|integer(int64)|true|none|Account activity status|
|created_date|string|true|none|Date when account was created|
|email|string|true|none|User email|
|first_name|string|true|none|First Name|
|group_id|integer(int64)|true|none|Account group id|
|id|integer(int64)|true|none|Account id|
|institution_id|integer(int64)|true|none|Account institution|
|institution_user_id|string|true|none|Account institution user id|
|last_name|string|true|none|Last Name|
|maximum_file_size|integer(int64)|true|none|Maximum upload size for account|
|modified_date|string|true|none|Date of last account modification|
|pending_quota_request|boolean|true|none|True if a quota request is pending|
|quota|integer(int64)|true|none|Account quota|
|used_quota|integer(int64)|true|none|Account total used quota|
|used_quota_private|integer(int64)|true|none|Account used private quota|
|used_quota_public|integer(int64)|true|none|Account public used quota|

<h2 id="tocS_AccountCreate">AccountCreate</h2>
<!-- backwards compatibility -->
<a id="schemaaccountcreate"></a>
<a id="schema_AccountCreate"></a>
<a id="tocSaccountcreate"></a>
<a id="tocsaccountcreate"></a>

```json
{
  "email": "johndoe@example.com",
  "first_name": "John",
  "group_id": 0,
  "institution_user_id": "johndoe",
  "is_active": true,
  "last_name": "Doe",
  "quota": 1000,
  "symplectic_user_id": "johndoe"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|Email of account|
|first_name|string|true|none|First Name|
|group_id|integer(int64)|false|none|Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups|
|institution_user_id|string|false|none|Institution user id|
|is_active|boolean|false|none|Is account active|
|last_name|string|false|none|Last Name|
|quota|integer(int64)|false|none|Account quota|
|symplectic_user_id|string|false|none|Symplectic user id|

<h2 id="tocS_AccountGroupRoles">AccountGroupRoles</h2>
<!-- backwards compatibility -->
<a id="schemaaccountgrouproles"></a>
<a id="schema_AccountGroupRoles"></a>
<a id="tocSaccountgrouproles"></a>
<a id="tocsaccountgrouproles"></a>

```json
{
  "2": [
    {
      "category": "group",
      "id": 7,
      "name": "User"
    }
  ]
}
```

<h2 id="tocS_AccountGroupRolesCreate">AccountGroupRolesCreate</h2>
<!-- backwards compatibility -->
<a id="schemaaccountgrouprolescreate"></a>
<a id="schema_AccountGroupRolesCreate"></a>
<a id="tocSaccountgrouprolescreate"></a>
<a id="tocsaccountgrouprolescreate"></a>

```json
{
  "2": [
    2,
    7
  ],
  "3": [
    7,
    9
  ]
}
```

<h2 id="tocS_AccountReport">AccountReport</h2>
<!-- backwards compatibility -->
<a id="schemaaccountreport"></a>
<a id="schema_AccountReport"></a>
<a id="tocSaccountreport"></a>
<a id="tocsaccountreport"></a>

```json
{
  "account_id": 0,
  "created_date": "2017-05-15T15:12:26Z",
  "download_url": "https://some.com/storage/path/123/report-456.xlsx",
  "group_id": 0,
  "id": 0,
  "status": "missing"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int64)|true|none|The ID of the account which generated this report.|
|created_date|string|true|none|Date when the AccountReport was requested|
|download_url|string(url)|true|none|The download link for the generated XLSX|
|group_id|integer(int64)|true|none|The group ID that was used to filter the report, if any.|
|id|integer(int64)|true|none|A unique ID for the AccountRecord|
|status|string|true|none|Status of the report|

#### Enumerated Values

|Property|Value|
|---|---|
|status|missing|
|status|pending|
|status|done|

<h2 id="tocS_AccountUpdate">AccountUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaaccountupdate"></a>
<a id="schema_AccountUpdate"></a>
<a id="tocSaccountupdate"></a>
<a id="tocsaccountupdate"></a>

```json
{
  "group_id": 0,
  "is_active": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|integer(int64)|true|none|Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups|
|is_active|boolean|true|none|Is account active|

<h2 id="tocS_Article">Article</h2>
<!-- backwards compatibility -->
<a id="schemaarticle"></a>
<a id="schema_Article"></a>
<a id="tocSarticle"></a>
<a id="tocsarticle"></a>

```json
{
  "defined_type": 3,
  "defined_type_name": "media",
  "doi": "10.6084/m9.figshare.1434614",
  "group_id": 1234,
  "handle": "111184/figshare.1234",
  "id": 1434614,
  "published_date": "2015-12-31T23:59:59.000Z",
  "thumb": "https://ndownloader.figshare.com/files/123456789/preview/12345678/thumb.png",
  "timeline": {
    "firstOnline": "2015-12-31",
    "publisherAcceptance": "2015-12-31",
    "publisherPublication": "2015-12-31",
    "posted": "2015-12-31",
    "revision": "2015-12-31",
    "submission": "2015-12-31"
  },
  "title": "Test article title",
  "url": "http://api.figshare.com/articles/1434614",
  "url_private_api": "https://api.figshare.com/account/articles/1434614",
  "url_private_html": "https://figshare.com/account/articles/1434614",
  "url_public_api": "https://api.figshare.com/articles/1434614",
  "url_public_html": "https://figshare.com/articles/media/Test_article_title/1434614"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defined_type|integer(int64)|true|none|Type of article identifier|
|defined_type_name|string|true|none|Name of the article type identifier|
|doi|string|true|none|DOI|
|group_id|number \| null|true|none|Group ID|
|handle|string|true|none|Handle|
|id|integer(int64)|true|none|Unique identifier for article|
|published_date|string \| null|true|none|Posted date|
|thumb|string(url)|true|none|Thumbnail image|
|timeline|[Timeline](#schematimeline)|true|none|none|
|title|string|true|none|Title of article|
|url|string(url)|true|none|Api endpoint for article|
|url_private_api|string(url)|true|none|Private Api endpoint for article|
|url_private_html|string(url)|true|none|Private site endpoint for article|
|url_public_api|string(url)|true|none|Public Api endpoint for article|
|url_public_html|string(url)|true|none|Public site endpoint for article|

<h2 id="tocS_ArticleComplete">ArticleComplete</h2>
<!-- backwards compatibility -->
<a id="schemaarticlecomplete"></a>
<a id="schema_ArticleComplete"></a>
<a id="tocSarticlecomplete"></a>
<a id="tocsarticlecomplete"></a>

```json
{
  "defined_type": 3,
  "defined_type_name": "media",
  "doi": "10.6084/m9.figshare.1434614",
  "group_id": 1234,
  "handle": "111184/figshare.1234",
  "id": 1434614,
  "published_date": "2015-12-31T23:59:59.000Z",
  "thumb": "https://ndownloader.figshare.com/files/123456789/preview/12345678/thumb.png",
  "timeline": {
    "firstOnline": "2015-12-31",
    "publisherAcceptance": "2015-12-31",
    "publisherPublication": "2015-12-31",
    "posted": "2015-12-31",
    "revision": "2015-12-31",
    "submission": "2015-12-31"
  },
  "title": "Test article title",
  "url": "http://api.figshare.com/articles/1434614",
  "url_private_api": "https://api.figshare.com/account/articles/1434614",
  "url_private_html": "https://figshare.com/account/articles/1434614",
  "url_public_api": "https://api.figshare.com/articles/1434614",
  "url_public_html": "https://figshare.com/articles/media/Test_article_title/1434614",
  "categories": [
    {
      "id": 11,
      "parent_id": 1,
      "path": "/450/1024/6532",
      "source_id": "300204",
      "taxonomy_id": 4,
      "title": "Anatomy"
    }
  ],
  "citation": "lilliput, figshare admin (2017): first project item. figshare.\n \n Retrieved: 14 01, May 22, 2017 (GMT)",
  "confidential_reason": "none",
  "created_date": "2017-05-18T11:49:03Z",
  "description": "article description",
  "embargo_date": "2017-05-18T11:49:03Z",
  "embargo_reason": "not complete",
  "embargo_title": "File(s) under embargo",
  "embargo_type": "article",
  "funding": "none",
  "funding_list": [
    0
  ],
  "has_linked_file": true,
  "is_active": true,
  "is_confidential": true,
  "is_embargoed": true,
  "is_metadata_record": false,
  "is_public": true,
  "license": {
    "name": "CC BY",
    "url": "http://creativecommons.org/licenses/by/4.0/",
    "value": 1
  },
  "metadata_reason": "hosted somewhere else",
  "modified_date": "2017-05-18T11:49:03Z",
  "references": [
    "http://figshare.com",
    "http://figshare.com/api"
  ],
  "size": 69939,
  "status": "public",
  "tags": [
    "t1",
    "t2",
    "t3"
  ],
  "version": 1,
  "authors": [
    {
      "full_name": "John Doe",
      "id": 97657,
      "is_active": 1,
      "orcid_id": "1234-5678-9123-1234",
      "url_name": "John_Doe"
    }
  ],
  "custom_fields": [
    {
      "is_mandatory": false,
      "name": "key",
      "value": "value"
    }
  ],
  "embargo_options": [
    {
      "id": 364,
      "ip_name": "Figshare IP range",
      "type": "ip_range"
    }
  ],
  "figshare_url": "http://figshare.com/articles/media/article_name/2000005",
  "files": [
    {
      "computed_md5": "043a51806d646e88cafbf19e7b82846f",
      "download_url": "https://ndownloader.figshare.com/files/3000002",
      "id": 3000002,
      "is_link_only": false,
      "name": "test.xls",
      "size": 14848,
      "supplied_md5": "043a51806d646e88cafbf19e7b82846f"
    }
  ],
  "resource_doi": "10.5072/FK2.developmentfigshare.2000005",
  "resource_title": "first article"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defined_type|integer(int64)|true|none|Type of article identifier|
|defined_type_name|string|true|none|Name of the article type identifier|
|doi|string|true|none|DOI|
|group_id|number \| null|true|none|Group ID|
|handle|string|true|none|Handle|
|id|integer(int64)|true|none|Unique identifier for article|
|published_date|string \| null|true|none|Posted date|
|thumb|string(url)|true|none|Thumbnail image|
|timeline|[Timeline](#schematimeline)|true|none|none|
|title|string|true|none|Title of article|
|url|string(url)|true|none|Api endpoint for article|
|url_private_api|string(url)|true|none|Private Api endpoint for article|
|url_private_html|string(url)|true|none|Private site endpoint for article|
|url_public_api|string(url)|true|none|Public Api endpoint for article|
|url_public_html|string(url)|true|none|Public site endpoint for article|
|categories|[[Category](#schemacategory)]|true|none|List of categories selected for the article|
|citation|string|true|none|Article citation|
|confidential_reason|string|true|none|Confidentiality reason|
|created_date|string|true|none|Date when article was created|
|description|string|true|none|Article description|
|embargo_date|string \| null|true|none|Date when embargo lifts|
|embargo_reason|string|true|none|Reason for embargo|
|embargo_title|string|true|none|Title for embargo|
|embargo_type|string \| null|true|none|Article embargo|
|funding|string|true|none|Article funding|
|funding_list|[integer]|true|none|none|
|has_linked_file|boolean|true|none|True if any files are linked to the article|
|is_active|boolean|true|none|True if article is active|
|is_confidential|boolean|true|none|Article Confidentiality|
|is_embargoed|boolean|true|none|True if article is embargoed|
|is_metadata_record|boolean|true|none|True if article has no files|
|is_public|boolean|true|none|True if article is published|
|license|[License](#schemalicense)|true|none|none|
|metadata_reason|string|true|none|Article metadata reason|
|modified_date|string \| null|true|none|Date when article was last modified|
|references|[string(url)]|true|none|List of references|
|size|integer(int64)|true|none|Article size|
|status|string|true|none|Article status|
|tags|[string]|true|none|List of article tags|
|version|integer(int64)|true|none|Article version|
|authors|[[Author](#schemaauthor)]|true|none|List of article authors|
|custom_fields|[[CustomArticleField](#schemacustomarticlefield)]|true|none|List of custom fields values|
|embargo_options|[[GroupEmbargoOptions](#schemagroupembargooptions)]|true|none|List of embargo options|
|figshare_url|string(url)|true|none|Article public url|
|files|[[PublicFile](#schemapublicfile)]|true|none|List of article files|
|resource_doi|string \| null|true|none|Article DOI|
|resource_title|string \| null|true|none|Article resource title|

<h2 id="tocS_ArticleCompletePrivate">ArticleCompletePrivate</h2>
<!-- backwards compatibility -->
<a id="schemaarticlecompleteprivate"></a>
<a id="schema_ArticleCompletePrivate"></a>
<a id="tocSarticlecompleteprivate"></a>
<a id="tocsarticlecompleteprivate"></a>

```json
{
  "defined_type": 3,
  "defined_type_name": "media",
  "doi": "10.6084/m9.figshare.1434614",
  "group_id": 1234,
  "handle": "111184/figshare.1234",
  "id": 1434614,
  "published_date": "2015-12-31T23:59:59.000Z",
  "thumb": "https://ndownloader.figshare.com/files/123456789/preview/12345678/thumb.png",
  "timeline": {
    "firstOnline": "2015-12-31",
    "publisherAcceptance": "2015-12-31",
    "publisherPublication": "2015-12-31",
    "posted": "2015-12-31",
    "revision": "2015-12-31",
    "submission": "2015-12-31"
  },
  "title": "Test article title",
  "url": "http://api.figshare.com/articles/1434614",
  "url_private_api": "https://api.figshare.com/account/articles/1434614",
  "url_private_html": "https://figshare.com/account/articles/1434614",
  "url_public_api": "https://api.figshare.com/articles/1434614",
  "url_public_html": "https://figshare.com/articles/media/Test_article_title/1434614",
  "categories": [
    {
      "id": 11,
      "parent_id": 1,
      "path": "/450/1024/6532",
      "source_id": "300204",
      "taxonomy_id": 4,
      "title": "Anatomy"
    }
  ],
  "citation": "lilliput, figshare admin (2017): first project item. figshare.\n \n Retrieved: 14 01, May 22, 2017 (GMT)",
  "confidential_reason": "none",
  "created_date": "2017-05-18T11:49:03Z",
  "description": "article description",
  "embargo_date": "2017-05-18T11:49:03Z",
  "embargo_reason": "not complete",
  "embargo_title": "File(s) under embargo",
  "embargo_type": "article",
  "funding": "none",
  "funding_list": [
    0
  ],
  "has_linked_file": true,
  "is_active": true,
  "is_confidential": true,
  "is_embargoed": true,
  "is_metadata_record": false,
  "is_public": true,
  "license": {
    "name": "CC BY",
    "url": "http://creativecommons.org/licenses/by/4.0/",
    "value": 1
  },
  "metadata_reason": "hosted somewhere else",
  "modified_date": "2017-05-18T11:49:03Z",
  "references": [
    "http://figshare.com",
    "http://figshare.com/api"
  ],
  "size": 69939,
  "status": "public",
  "tags": [
    "t1",
    "t2",
    "t3"
  ],
  "version": 1,
  "authors": [
    {
      "full_name": "John Doe",
      "id": 97657,
      "is_active": 1,
      "orcid_id": "1234-5678-9123-1234",
      "url_name": "John_Doe"
    }
  ],
  "custom_fields": [
    {
      "is_mandatory": false,
      "name": "key",
      "value": "value"
    }
  ],
  "embargo_options": [
    {
      "id": 364,
      "ip_name": "Figshare IP range",
      "type": "ip_range"
    }
  ],
  "figshare_url": "http://figshare.com/articles/media/article_name/2000005",
  "files": [
    {
      "computed_md5": "043a51806d646e88cafbf19e7b82846f",
      "download_url": "https://ndownloader.figshare.com/files/3000002",
      "id": 3000002,
      "is_link_only": false,
      "name": "test.xls",
      "size": 14848,
      "supplied_md5": "043a51806d646e88cafbf19e7b82846f"
    }
  ],
  "resource_doi": "10.5072/FK2.developmentfigshare.2000005",
  "resource_title": "first article",
  "account_id": 1000001,
  "group_resource_id": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defined_type|integer(int64)|true|none|Type of article identifier|
|defined_type_name|string|true|none|Name of the article type identifier|
|doi|string|true|none|DOI|
|group_id|number \| null|true|none|Group ID|
|handle|string|true|none|Handle|
|id|integer(int64)|true|none|Unique identifier for article|
|published_date|string \| null|true|none|Posted date|
|thumb|string(url)|true|none|Thumbnail image|
|timeline|[Timeline](#schematimeline)|true|none|none|
|title|string|true|none|Title of article|
|url|string(url)|true|none|Api endpoint for article|
|url_private_api|string(url)|true|none|Private Api endpoint for article|
|url_private_html|string(url)|true|none|Private site endpoint for article|
|url_public_api|string(url)|true|none|Public Api endpoint for article|
|url_public_html|string(url)|true|none|Public site endpoint for article|
|categories|[[Category](#schemacategory)]|true|none|List of categories selected for the article|
|citation|string|true|none|Article citation|
|confidential_reason|string|true|none|Confidentiality reason|
|created_date|string|true|none|Date when article was created|
|description|string|true|none|Article description|
|embargo_date|string \| null|true|none|Date when embargo lifts|
|embargo_reason|string|true|none|Reason for embargo|
|embargo_title|string|true|none|Title for embargo|
|embargo_type|string \| null|true|none|Article embargo|
|funding|string|true|none|Article funding|
|funding_list|[integer]|true|none|none|
|has_linked_file|boolean|true|none|True if any files are linked to the article|
|is_active|boolean|true|none|True if article is active|
|is_confidential|boolean|true|none|Article Confidentiality|
|is_embargoed|boolean|true|none|True if article is embargoed|
|is_metadata_record|boolean|true|none|True if article has no files|
|is_public|boolean|true|none|True if article is published|
|license|[License](#schemalicense)|true|none|none|
|metadata_reason|string|true|none|Article metadata reason|
|modified_date|string \| null|true|none|Date when article was last modified|
|references|[string(url)]|true|none|List of references|
|size|integer(int64)|true|none|Article size|
|status|string|true|none|Article status|
|tags|[string]|true|none|List of article tags|
|version|integer(int64)|true|none|Article version|
|authors|[[Author](#schemaauthor)]|true|none|List of article authors|
|custom_fields|[[CustomArticleField](#schemacustomarticlefield)]|true|none|List of custom fields values|
|embargo_options|[[GroupEmbargoOptions](#schemagroupembargooptions)]|true|none|List of embargo options|
|figshare_url|string(url)|true|none|Article public url|
|files|[[PublicFile](#schemapublicfile)]|true|none|List of article files|
|resource_doi|string \| null|true|none|Article DOI|
|resource_title|string \| null|true|none|Article resource title|
|account_id|integer(int64)|true|none|ID of the account owning the article|
|group_resource_id|string \| null|true|none|Group resource id|

<h2 id="tocS_ArticleConfidentiality">ArticleConfidentiality</h2>
<!-- backwards compatibility -->
<a id="schemaarticleconfidentiality"></a>
<a id="schema_ArticleConfidentiality"></a>
<a id="tocSarticleconfidentiality"></a>
<a id="tocsarticleconfidentiality"></a>

```json
{
  "is_confidential": true,
  "reason": "need to"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_confidential|boolean|true|none|True if article is confidential|
|reason|string|true|none|Reason for confidentiality|

<h2 id="tocS_ArticleCreate">ArticleCreate</h2>
<!-- backwards compatibility -->
<a id="schemaarticlecreate"></a>
<a id="schema_ArticleCreate"></a>
<a id="tocSarticlecreate"></a>
<a id="tocsarticlecreate"></a>

```json
{
  "authors": [
    {
      "name": "John Doe"
    },
    {
      "id": 1000008
    }
  ],
  "categories": [
    1,
    10,
    11
  ],
  "categories_by_source_id": [
    "300204",
    "400207"
  ],
  "custom_fields": {
    "defined_key": "value for it"
  },
  "custom_fields_list": [
    {
      "name": "key",
      "value": "value"
    }
  ],
  "defined_type": "media",
  "description": "Test description of article",
  "doi": "",
  "funding": "",
  "funding_list": [
    {
      "id": 0,
      "title": "string"
    }
  ],
  "group_id": 0,
  "handle": "",
  "is_metadata_record": true,
  "keywords": [
    "tag1",
    "tag2"
  ],
  "license": 1,
  "metadata_reason": "hosted somewhere else",
  "references": [
    "http://figshare.com",
    "http://api.figshare.com"
  ],
  "resource_doi": "",
  "resource_title": "",
  "tags": [
    "tag1",
    "tag2"
  ],
  "timeline": {
    "firstOnline": "2015-12-31",
    "publisherAcceptance": "2015-12-31",
    "publisherPublication": "2015-12-31"
  },
  "title": "Test article title"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authors|[object]|false|none|List of authors to be associated with the article. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint.|
|categories|[integer(int64)]|false|none|List of category ids to be associated with the article(e.g [1, 23, 33, 66])|
|categories_by_source_id|[string]|false|none|List of category source ids to be associated with the article, supersedes the categories property|
|custom_fields|object|false|none|List of key, values pairs to be associated with the article|
|custom_fields_list|[[CustomArticleFieldAdd](#schemacustomarticlefieldadd)]|false|none|List of custom fields values, supersedes custom_fields parameter|
|defined_type|string|false|none|<b>One of:</b> <code>figure</code> <code>online resource</code> <code>preprint</code> <code>book</code> <code>conference contribution</code> <code>media</code> <code>dataset</code> <code>poster</code> <code>journal contribution</code> <code>presentation</code> <code>thesis</code> <code>software</code>|
|description|string|false|none|The article description. In a publisher case, usually this is the remote article description|
|doi|string|false|none|Not applicable for regular users. In an institutional case, make sure your group supports setting DOIs. This setting is applied by figshare via opening a ticket through our support/helpdesk system.|
|funding|string|false|none|Grant number or funding authority|
|funding_list|[[FundingCreate](#schemafundingcreate)]|false|none|Funding creation / update items|
|group_id|integer(int64)|false|none|Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups|
|handle|string|false|none|Not applicable for regular users. In an institutional case, make sure your group supports setting Handles. This setting is applied by figshare via opening a ticket through our support/helpdesk system.|
|is_metadata_record|boolean|false|none|True if article has no files|
|keywords|[string]|false|none|List of tags to be associated with the article. Tags can be used instead|
|license|integer(int64)|false|none|License id for this article.|
|metadata_reason|string|false|none|Article metadata reason|
|references|[string(link)]|false|none|List of links to be associated with the article (e.g ["http://link1", "http://link2", "http://link3"])|
|resource_doi|string|false|none|Not applicable to regular users. In a publisher case, this is the publisher article DOI.|
|resource_title|string|false|none|Not applicable to regular users. In a publisher case, this is the publisher article title.|
|tags|[string]|false|none|List of tags to be associated with the article. Keywords can be used instead|
|timeline|[TimelineUpdate](#schematimelineupdate)|false|none|none|
|title|string|true|none|Title of article|

<h2 id="tocS_ArticleDOI">ArticleDOI</h2>
<!-- backwards compatibility -->
<a id="schemaarticledoi"></a>
<a id="schema_ArticleDOI"></a>
<a id="tocSarticledoi"></a>
<a id="tocsarticledoi"></a>

```json
{
  "doi": "10.5072/FK2.FIGSHARE.20345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|doi|string|true|none|Reserved DOI|

<h2 id="tocS_ArticleEmbargo">ArticleEmbargo</h2>
<!-- backwards compatibility -->
<a id="schemaarticleembargo"></a>
<a id="schema_ArticleEmbargo"></a>
<a id="tocSarticleembargo"></a>
<a id="tocsarticleembargo"></a>

```json
{
  "embargo_date": "2018-05-22T04:04:04",
  "embargo_options": [
    {
      "group_ids": [],
      "id": 13,
      "ip_name": "bacau",
      "type": "ip_range"
    },
    {
      "group_ids": [
        550,
        9448
      ],
      "id": 12,
      "ip_name": "",
      "type": "logged_in"
    }
  ],
  "embargo_reason": "",
  "embargo_title": "File(s) under embargo",
  "embargo_type": "",
  "is_embargoed": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|embargo_date|string \| null|true|none|Date when embargo lifts|
|embargo_options|[object]|true|none|List of embargo permissions that are associated with the article. If the type is logged_in and the group_ids list is empty, then the whole institution can see the article; if there are multiple group_ids, then only users that are under those groups can see the article.|
|embargo_reason|string|true|none|Reason for embargo|
|embargo_title|string|true|none|Title for embargo|
|embargo_type|string \| null|true|none|Embargo type|
|is_embargoed|boolean|true|none|True if embargoed|

<h2 id="tocS_ArticleEmbargoUpdater">ArticleEmbargoUpdater</h2>
<!-- backwards compatibility -->
<a id="schemaarticleembargoupdater"></a>
<a id="schema_ArticleEmbargoUpdater"></a>
<a id="tocSarticleembargoupdater"></a>
<a id="tocsarticleembargoupdater"></a>

```json
{
  "embargo_date": "2018-05-22T04:04:04",
  "embargo_options": [
    {
      "id": 1321
    },
    {
      "id": 3345
    },
    {
      "group_ids": [
        4332,
        5433,
        678
      ],
      "id": 54621
    }
  ],
  "embargo_reason": "",
  "embargo_title": "File(s) under embargo",
  "embargo_type": "file",
  "is_embargoed": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|embargo_date|string|true|none|Date when the embargo expires and the article gets published, '0' value will set up permanent embargo|
|embargo_options|[object]|false|none|List of embargo permissions to be associated with the article. The list must contain `id` and can also contain `group_ids`(a field that only applies to 'logged_in' permissions). The new list replaces old options in the database, and an empty list removes all permissions for this article. Administration permission has to be set up alone but logged in and IP range permissions can be set up together.|
|embargo_reason|string|false|none|Reason for setting embargo|
|embargo_title|string|false|none|Title for embargo|
|embargo_type|string|true|none|Embargo can be enabled at the article or the file level. Possible values: article, file|
|is_embargoed|boolean|true|none|Embargo status|

#### Enumerated Values

|Property|Value|
|---|---|
|embargo_type|article|
|embargo_type|file|

<h2 id="tocS_ArticleHandle">ArticleHandle</h2>
<!-- backwards compatibility -->
<a id="schemaarticlehandle"></a>
<a id="schema_ArticleHandle"></a>
<a id="tocSarticlehandle"></a>
<a id="tocsarticlehandle"></a>

```json
{
  "handle": "11172/FK2.FIGSHARE.20345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|handle|string|true|none|Reserved Handle|

<h2 id="tocS_ArticleProjectCreate">ArticleProjectCreate</h2>
<!-- backwards compatibility -->
<a id="schemaarticleprojectcreate"></a>
<a id="schema_ArticleProjectCreate"></a>
<a id="tocSarticleprojectcreate"></a>
<a id="tocsarticleprojectcreate"></a>

```json
{
  "authors": [
    {
      "name": "John Doe"
    },
    {
      "id": 1000008
    }
  ],
  "categories": [
    1,
    10,
    11
  ],
  "categories_by_source_id": [
    "300204",
    "400207"
  ],
  "custom_fields": {
    "defined_key": "value for it"
  },
  "custom_fields_list": [
    {
      "name": "key",
      "value": "value"
    }
  ],
  "defined_type": "media",
  "description": "Test description of article",
  "doi": "",
  "funding": "",
  "funding_list": [
    {
      "id": 0,
      "title": "string"
    }
  ],
  "handle": "",
  "keywords": [
    "tag1",
    "tag2"
  ],
  "license": 1,
  "references": [
    "http://figshare.com",
    "http://api.figshare.com"
  ],
  "resource_doi": "",
  "resource_title": "",
  "tags": [
    "tag1",
    "tag2"
  ],
  "timeline": {
    "firstOnline": "2015-12-31",
    "publisherAcceptance": "2015-12-31",
    "publisherPublication": "2015-12-31"
  },
  "title": "Test article title"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authors|[object]|false|none|List of authors to be associated with the article. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint.|
|categories|[integer(int64)]|false|none|List of category ids to be associated with the article(e.g [1, 23, 33, 66])|
|categories_by_source_id|[string]|false|none|List of category source ids to be associated with the article, supersedes the categories property|
|custom_fields|object|false|none|List of key, values pairs to be associated with the article|
|custom_fields_list|[[CustomArticleFieldAdd](#schemacustomarticlefieldadd)]|false|none|List of custom fields values, supersedes custom_fields parameter|
|defined_type|string|false|none|<b>One of:</b> <code>figure</code> <code>online resource</code> <code>preprint</code> <code>book</code> <code>conference contribution</code> <code>media</code> <code>dataset</code> <code>poster</code> <code>journal contribution</code> <code>presentation</code> <code>thesis</code> <code>software</code>|
|description|string|false|none|The article description. In a publisher case, usually this is the remote article description|
|doi|string|false|none|Not applicable for regular users. In an institutional case, make sure your group supports setting DOIs. This setting is applied by figshare via opening a ticket through our support/helpdesk system.|
|funding|string|false|none|Grant number or funding authority|
|funding_list|[[FundingCreate](#schemafundingcreate)]|false|none|Funding creation / update items|
|handle|string|false|none|Not applicable for regular users. In an institutional case, make sure your group supports setting Handles. This setting is applied by figshare via opening a ticket through our support/helpdesk system.|
|keywords|[string]|false|none|List of tags to be associated with the article. Tags can be used instead|
|license|integer(int64)|false|none|License id for this article.|
|references|[string(link)]|false|none|List of links to be associated with the article (e.g ["http://link1", "http://link2", "http://link3"])|
|resource_doi|string|false|none|Not applicable to regular users. In a publisher case, this is the publisher article DOI.|
|resource_title|string|false|none|Not applicable to regular users. In a publisher case, this is the publisher article title.|
|tags|[string]|false|none|List of tags to be associated with the article. Keywords can be used instead|
|timeline|[TimelineUpdate](#schematimelineupdate)|false|none|none|
|title|string|true|none|Title of article|

<h2 id="tocS_ArticleSearch">ArticleSearch</h2>
<!-- backwards compatibility -->
<a id="schemaarticlesearch"></a>
<a id="schema_ArticleSearch"></a>
<a id="tocSarticlesearch"></a>
<a id="tocsarticlesearch"></a>

```json
{
  "group": 2000013,
  "institution": 2000013,
  "limit": 10,
  "modified_since": "2017-12-22",
  "offset": 0,
  "order_direction": "desc",
  "page": 1,
  "page_size": 10,
  "published_since": "2017-12-22",
  "search_for": "figshare",
  "doi": "10.6084/m9.figshare.1407024",
  "handle": "111084/m9.figshare.14074",
  "item_type": 1,
  "order": "published_date",
  "project_id": 1,
  "resource_doi": "10.6084/m9.figshare.1407024"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group|integer(int32)|false|none|only return collections from this group|
|institution|integer(int32)|false|none|only return collections from this institution|
|limit|integer(int64)|false|none|Number of results included on a page. Used for pagination with query|
|modified_since|string|false|none|Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD|
|offset|integer(int64)|false|none|Where to start the listing(the offset of the first result). Used for pagination with limit|
|order_direction|string|false|none|Direction of ordering|
|page|integer(int64)|false|none|Page number. Used for pagination with page_size|
|page_size|integer(int64)|false|none|The number of results included on a page. Used for pagination with page|
|published_since|string|false|none|Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD|
|search_for|string|false|none|Search term|
|doi|string|false|none|Only return articles with this doi|
|handle|string|false|none|Only return articles with this handle|
|item_type|integer(int64)|false|none|Only return articles with the respective type. Mapping for item_type is: 1 - Figure, 2 - Media, 3 - Dataset, 5 - Poster, 6 - Journal contribution, 7 - Presentation, 8 - Thesis, 9 - Software, 11 - Online resource, 12 - Preprint, 13 - Book, 14 - Conference contribution, 15 - Chapter, 16 - Peer review, 17 - Educational resource, 18 - Report, 19 - Standard, 20 - Composition, 21 - Funding, 22 - Physical object, 23 - Data management plan, 24 - Workflow, 25 - Monograph, 26 - Performance, 27 - Event, 28 - Service, 29 - Model|
|order|string|false|none|The field by which to order|
|project_id|integer(int64)|false|none|Only return articles in this project|
|resource_doi|string|false|none|Only return articles with this resource_doi|

#### Enumerated Values

|Property|Value|
|---|---|
|order_direction|asc|
|order_direction|desc|
|order|published_date|
|order|modified_date|
|order|views|
|order|shares|
|order|downloads|
|order|cites|

<h2 id="tocS_ArticleUpdate">ArticleUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaarticleupdate"></a>
<a id="schema_ArticleUpdate"></a>
<a id="tocSarticleupdate"></a>
<a id="tocsarticleupdate"></a>

```json
{
  "authors": [
    {
      "name": "John Doe"
    },
    {
      "id": 1000008
    }
  ],
  "categories": [
    1,
    10,
    11
  ],
  "categories_by_source_id": [
    "300204",
    "400207"
  ],
  "custom_fields": {
    "defined_key": "value for it"
  },
  "custom_fields_list": [
    {
      "name": "key",
      "value": "value"
    }
  ],
  "defined_type": "media",
  "description": "Test description of article",
  "doi": "",
  "funding": "",
  "funding_list": [
    {
      "id": 0,
      "title": "string"
    }
  ],
  "group_id": 0,
  "handle": "",
  "is_metadata_record": true,
  "keywords": [
    "tag1",
    "tag2"
  ],
  "license": 1,
  "metadata_reason": "hosted somewhere else",
  "references": [
    "http://figshare.com",
    "http://api.figshare.com"
  ],
  "resource_doi": "",
  "resource_title": "",
  "tags": [
    "tag1",
    "tag2"
  ],
  "timeline": {
    "firstOnline": "2015-12-31",
    "publisherAcceptance": "2015-12-31",
    "publisherPublication": "2015-12-31"
  },
  "title": "Test article title"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authors|[object]|false|none|List of authors to be associated with the article. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint.|
|categories|[integer(int64)]|false|none|List of category ids to be associated with the article(e.g [1, 23, 33, 66])|
|categories_by_source_id|[string]|false|none|List of category source ids to be associated with the article, supersedes the categories property|
|custom_fields|object|false|none|List of key, values pairs to be associated with the article|
|custom_fields_list|[[CustomArticleFieldAdd](#schemacustomarticlefieldadd)]|false|none|List of custom fields values, supersedes custom_fields parameter|
|defined_type|string|false|none|<b>One of:</b> <code>figure</code> <code>online resource</code> <code>preprint</code> <code>book</code> <code>conference contribution</code> <code>media</code> <code>dataset</code> <code>poster</code> <code>journal contribution</code> <code>presentation</code> <code>thesis</code> <code>software</code>|
|description|string|false|none|The article description. In a publisher case, usually this is the remote article description|
|doi|string|false|none|Not applicable for regular users. In an institutional case, make sure your group supports setting DOIs. This setting is applied by figshare via opening a ticket through our support/helpdesk system.|
|funding|string|false|none|Grant number or funding authority|
|funding_list|[[FundingCreate](#schemafundingcreate)]|false|none|Funding creation / update items|
|group_id|integer(int64)|false|none|Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups|
|handle|string|false|none|Not applicable for regular users. In an institutional case, make sure your group supports setting Handles. This setting is applied by figshare via opening a ticket through our support/helpdesk system.|
|is_metadata_record|boolean|false|none|True if article has no files|
|keywords|[string]|false|none|List of tags to be associated with the article. Tags can be used instead|
|license|integer(int64)|false|none|License id for this article.|
|metadata_reason|string|false|none|Article metadata reason|
|references|[string(link)]|false|none|List of links to be associated with the article (e.g ["http://link1", "http://link2", "http://link3"])|
|resource_doi|string|false|none|Not applicable to regular users. In a publisher case, this is the publisher article DOI.|
|resource_title|string|false|none|Not applicable to regular users. In a publisher case, this is the publisher article title.|
|tags|[string]|false|none|List of tags to be associated with the article. Keywords can be used instead|
|timeline|[TimelineUpdate](#schematimelineupdate)|false|none|none|
|title|string|false|none|Title of article|

<h2 id="tocS_ArticleVersions">ArticleVersions</h2>
<!-- backwards compatibility -->
<a id="schemaarticleversions"></a>
<a id="schema_ArticleVersions"></a>
<a id="tocSarticleversions"></a>
<a id="tocsarticleversions"></a>

```json
{
  "url": "https://api.figshare.com/v2/articles/2000005/versions/1",
  "version": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string(url)|true|none|Api endpoint for the item version|
|version|integer(int64)|true|none|Version number|

<h2 id="tocS_ArticleWithProject">ArticleWithProject</h2>
<!-- backwards compatibility -->
<a id="schemaarticlewithproject"></a>
<a id="schema_ArticleWithProject"></a>
<a id="tocSarticlewithproject"></a>
<a id="tocsarticlewithproject"></a>

```json
{
  "defined_type": 3,
  "defined_type_name": "media",
  "doi": "10.6084/m9.figshare.1434614",
  "group_id": 1234,
  "handle": "111184/figshare.1234",
  "id": 1434614,
  "published_date": "2015-12-31T23:59:59.000Z",
  "thumb": "https://ndownloader.figshare.com/files/123456789/preview/12345678/thumb.png",
  "timeline": {
    "firstOnline": "2015-12-31",
    "publisherAcceptance": "2015-12-31",
    "publisherPublication": "2015-12-31",
    "posted": "2015-12-31",
    "revision": "2015-12-31",
    "submission": "2015-12-31"
  },
  "title": "Test article title",
  "url": "http://api.figshare.com/articles/1434614",
  "url_private_api": "https://api.figshare.com/account/articles/1434614",
  "url_private_html": "https://figshare.com/account/articles/1434614",
  "url_public_api": "https://api.figshare.com/articles/1434614",
  "url_public_html": "https://figshare.com/articles/media/Test_article_title/1434614",
  "project_id": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defined_type|integer(int64)|true|none|Type of article identifier|
|defined_type_name|string|true|none|Name of the article type identifier|
|doi|string|true|none|DOI|
|group_id|number \| null|true|none|Group ID|
|handle|string|true|none|Handle|
|id|integer(int64)|true|none|Unique identifier for article|
|published_date|string \| null|true|none|Posted date|
|thumb|string(url)|true|none|Thumbnail image|
|timeline|[Timeline](#schematimeline)|true|none|none|
|title|string|true|none|Title of article|
|url|string(url)|true|none|Api endpoint for article|
|url_private_api|string(url)|true|none|Private Api endpoint for article|
|url_private_html|string(url)|true|none|Private site endpoint for article|
|url_public_api|string(url)|true|none|Public Api endpoint for article|
|url_public_html|string(url)|true|none|Public site endpoint for article|
|project_id|integer(int64)|true|none|Project id for this article.|

<h2 id="tocS_ArticlesCreator">ArticlesCreator</h2>
<!-- backwards compatibility -->
<a id="schemaarticlescreator"></a>
<a id="schema_ArticlesCreator"></a>
<a id="tocSarticlescreator"></a>
<a id="tocsarticlescreator"></a>

```json
{
  "articles": [
    2000003,
    2000004
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|articles|[integer(int64)]|true|none|List of article ids|

<h2 id="tocS_Author">Author</h2>
<!-- backwards compatibility -->
<a id="schemaauthor"></a>
<a id="schema_Author"></a>
<a id="tocSauthor"></a>
<a id="tocsauthor"></a>

```json
{
  "full_name": "John Doe",
  "id": 97657,
  "is_active": 1,
  "orcid_id": "1234-5678-9123-1234",
  "url_name": "John_Doe"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|full_name|string|true|none|Author full name|
|id|integer(int64)|true|none|Author id|
|is_active|boolean|true|none|True if author has published items|
|orcid_id|string|true|none|Author Orcid|
|url_name|string|true|none|Author url name|

<h2 id="tocS_AuthorComplete">AuthorComplete</h2>
<!-- backwards compatibility -->
<a id="schemaauthorcomplete"></a>
<a id="schema_AuthorComplete"></a>
<a id="tocSauthorcomplete"></a>
<a id="tocsauthorcomplete"></a>

```json
{
  "full_name": "John Doe",
  "id": 97657,
  "is_active": 1,
  "orcid_id": "1234-5678-9123-1234",
  "url_name": "John_Doe",
  "first_name": "string",
  "group_id": 0,
  "institution_id": 0,
  "is_public": 0,
  "job_title": "string",
  "last_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|full_name|string|true|none|Author full name|
|id|integer(int64)|true|none|Author id|
|is_active|boolean|true|none|True if author has published items|
|orcid_id|string|true|none|Author Orcid|
|url_name|string|true|none|Author url name|
|first_name|string|true|none|First Name|
|group_id|integer(int64)|true|none|Group id|
|institution_id|integer(int64)|true|none|Institution id|
|is_public|integer(int64)|true|none|if 1 then the author has published items|
|job_title|string|true|none|Job title|
|last_name|string|true|none|Last Name|

<h2 id="tocS_AuthorsCreator">AuthorsCreator</h2>
<!-- backwards compatibility -->
<a id="schemaauthorscreator"></a>
<a id="schema_AuthorsCreator"></a>
<a id="tocSauthorscreator"></a>
<a id="tocsauthorscreator"></a>

```json
{
  "authors": [
    {
      "id": 12121
    },
    {
      "id": 34345
    },
    {
      "name": "John Doe"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authors|[object]|true|none|List of authors to be associated with the article. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint.|

<h2 id="tocS_CategoriesCreator">CategoriesCreator</h2>
<!-- backwards compatibility -->
<a id="schemacategoriescreator"></a>
<a id="schema_CategoriesCreator"></a>
<a id="tocScategoriescreator"></a>
<a id="tocscategoriescreator"></a>

```json
{
  "categories": [
    1,
    10,
    11
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[integer(int64)]|true|none|List of category ids|

<h2 id="tocS_Category">Category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "id": 11,
  "parent_id": 1,
  "path": "/450/1024/6532",
  "source_id": "300204",
  "taxonomy_id": 4,
  "title": "Anatomy"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|Category id|
|parent_id|integer(int64)|true|none|Parent category|
|path|string|true|none|Path to all ancestor ids|
|source_id|string|true|none|ID in original standard taxonomy|
|taxonomy_id|integer(int64)|true|none|Internal id of taxonomy the category is part of|
|title|string|true|none|Category title|

<h2 id="tocS_Collaborator">Collaborator</h2>
<!-- backwards compatibility -->
<a id="schemacollaborator"></a>
<a id="schema_Collaborator"></a>
<a id="tocScollaborator"></a>
<a id="tocscollaborator"></a>

```json
{
  "name": "name",
  "role_name": "Owner",
  "user_id": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Collaborator name|
|role_name|string|true|none|Collaborator role|
|user_id|integer|true|none|Collaborator id|

<h2 id="tocS_Collection">Collection</h2>
<!-- backwards compatibility -->
<a id="schemacollection"></a>
<a id="schema_Collection"></a>
<a id="tocScollection"></a>
<a id="tocscollection"></a>

```json
{
  "doi": "10.6084/m9.figshare.123",
  "handle": "111184/figshare.1234",
  "id": 123,
  "published_date": "2015-08-12T00:39:55",
  "timeline": {
    "firstOnline": "2015-12-31",
    "publisherAcceptance": "2015-12-31",
    "publisherPublication": "2015-12-31",
    "posted": "2015-12-31",
    "revision": "2015-12-31",
    "submission": "2015-12-31"
  },
  "title": "Sample collection",
  "url": "https://api.figshare.com/v2/collections/123"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|doi|string|true|none|Collection DOI|
|handle|string|true|none|Collection Handle|
|id|integer(int64)|true|none|Collection id|
|published_date|string \| null|true|none|Date when collection was published |
|timeline|[Timeline](#schematimeline)|true|none|none|
|title|string|true|none|Collection title|
|url|string|true|none|Api endpoint|

<h2 id="tocS_CollectionComplete">CollectionComplete</h2>
<!-- backwards compatibility -->
<a id="schemacollectioncomplete"></a>
<a id="schema_CollectionComplete"></a>
<a id="tocScollectioncomplete"></a>
<a id="tocscollectioncomplete"></a>

```json
{
  "doi": "10.6084/m9.figshare.123",
  "handle": "111184/figshare.1234",
  "id": 123,
  "published_date": "2015-08-12T00:39:55",
  "timeline": {
    "firstOnline": "2015-12-31",
    "publisherAcceptance": "2015-12-31",
    "publisherPublication": "2015-12-31",
    "posted": "2015-12-31",
    "revision": "2015-12-31",
    "submission": "2015-12-31"
  },
  "title": "Sample collection",
  "url": "https://api.figshare.com/v2/collections/123",
  "articles_count": 1,
  "authors": [
    {
      "full_name": "John Doe",
      "id": 97657,
      "is_active": 1,
      "orcid_id": "1234-5678-9123-1234",
      "url_name": "John_Doe"
    }
  ],
  "categories": [
    {
      "id": 11,
      "parent_id": 1,
      "path": "/450/1024/6532",
      "source_id": "300204",
      "taxonomy_id": 4,
      "title": "Anatomy"
    }
  ],
  "citation": "citation",
  "created_date": "2017-05-15T15:12:26Z",
  "custom_fields": [
    {
      "is_mandatory": false,
      "name": "key",
      "value": "value"
    }
  ],
  "description": "description",
  "funding": [
    {
      "funder_name": "string",
      "grant_code": "string",
      "id": 1,
      "is_user_defined": true,
      "title": "Scholarly funding",
      "url": "https://app.dimensions.ai/details/grant/1"
    }
  ],
  "group_id": 1,
  "group_resource_id": 1,
  "institution_id": 1,
  "modified_date": "2017-05-15T15:12:26Z",
  "public": true,
  "references": [
    "http://example.com"
  ],
  "resource_doi": "10.6084/m9.figshare.123",
  "resource_id": "",
  "resource_link": "http://figshare.com",
  "resource_title": "test",
  "resource_version": 0,
  "tags": [
    "t1",
    "t2"
  ],
  "version": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|doi|string|true|none|Collection DOI|
|handle|string|true|none|Collection Handle|
|id|integer(int64)|true|none|Collection id|
|published_date|string \| null|true|none|Date when collection was published |
|timeline|[Timeline](#schematimeline)|true|none|none|
|title|string|true|none|Collection title|
|url|string|true|none|Api endpoint|
|articles_count|integer(int64)|true|none|Number of articles in collection|
|authors|[[Author](#schemaauthor)]|true|none|List of collection authors|
|categories|[[Category](#schemacategory)]|true|none|List of collection categories|
|citation|string|true|none|Collection citation|
|created_date|string|true|none|Date when collection was created|
|custom_fields|[[CustomArticleField](#schemacustomarticlefield)]|true|none|Collection custom fields|
|description|string|true|none|Collection description|
|funding|[[FundingInformation](#schemafundinginformation)]|true|none|Full Collection funding information|
|group_id|integer(int64)|true|none|Collection group|
|group_resource_id|string \| null|true|none|Collection group resource id|
|institution_id|integer(int64)|true|none|Collection institution|
|modified_date|string|true|none|Date when collection was last modified|
|public|boolean|true|none|True if collection is published|
|references|[string(url)]|true|none|List of collection references|
|resource_doi|string|true|none|Collection resource doi|
|resource_id|string|true|none|Collection resource id|
|resource_link|string|true|none|Collection resource link|
|resource_title|string|true|none|Collection resource title|
|resource_version|integer(int64)|true|none|Collection resource version|
|tags|[string]|true|none|List of collection tags|
|timeline|[Timeline](#schematimeline)|true|none|none|
|version|integer(int64)|true|none|Collection version|

<h2 id="tocS_CollectionCompletePrivate">CollectionCompletePrivate</h2>
<!-- backwards compatibility -->
<a id="schemacollectioncompleteprivate"></a>
<a id="schema_CollectionCompletePrivate"></a>
<a id="tocScollectioncompleteprivate"></a>
<a id="tocscollectioncompleteprivate"></a>

```json
{
  "doi": "10.6084/m9.figshare.123",
  "handle": "111184/figshare.1234",
  "id": 123,
  "published_date": "2015-08-12T00:39:55",
  "timeline": {
    "firstOnline": "2015-12-31",
    "publisherAcceptance": "2015-12-31",
    "publisherPublication": "2015-12-31",
    "posted": "2015-12-31",
    "revision": "2015-12-31",
    "submission": "2015-12-31"
  },
  "title": "Sample collection",
  "url": "https://api.figshare.com/v2/collections/123",
  "account_id": 1000001,
  "articles_count": 1,
  "authors": [
    {
      "full_name": "John Doe",
      "id": 97657,
      "is_active": 1,
      "orcid_id": "1234-5678-9123-1234",
      "url_name": "John_Doe"
    }
  ],
  "categories": [
    {
      "id": 11,
      "parent_id": 1,
      "path": "/450/1024/6532",
      "source_id": "300204",
      "taxonomy_id": 4,
      "title": "Anatomy"
    }
  ],
  "citation": "citation",
  "created_date": "2017-05-15T15:12:26Z",
  "custom_fields": [
    {
      "is_mandatory": false,
      "name": "key",
      "value": "value"
    }
  ],
  "description": "description",
  "funding": [
    {
      "funder_name": "string",
      "grant_code": "string",
      "id": 1,
      "is_user_defined": true,
      "title": "Scholarly funding",
      "url": "https://app.dimensions.ai/details/grant/1"
    }
  ],
  "group_id": 1,
  "group_resource_id": 1,
  "institution_id": 1,
  "modified_date": "2017-05-15T15:12:26Z",
  "public": true,
  "references": [
    "http://example.com"
  ],
  "resource_doi": "10.6084/m9.figshare.123",
  "resource_id": "",
  "resource_link": "http://figshare.com",
  "resource_title": "test",
  "resource_version": 0,
  "tags": [
    "t1",
    "t2"
  ],
  "version": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|doi|string|true|none|Collection DOI|
|handle|string|true|none|Collection Handle|
|id|integer(int64)|true|none|Collection id|
|published_date|string \| null|true|none|Date when collection was published |
|timeline|[Timeline](#schematimeline)|true|none|none|
|title|string|true|none|Collection title|
|url|string|true|none|Api endpoint|
|account_id|integer(int64)|true|none|ID of the account owning the collection|
|articles_count|integer(int64)|true|none|Number of articles in collection|
|authors|[[Author](#schemaauthor)]|true|none|List of collection authors|
|categories|[[Category](#schemacategory)]|true|none|List of collection categories|
|citation|string|true|none|Collection citation|
|created_date|string|true|none|Date when collection was created|
|custom_fields|[[CustomArticleField](#schemacustomarticlefield)]|true|none|Collection custom fields|
|description|string|true|none|Collection description|
|funding|[[FundingInformation](#schemafundinginformation)]|true|none|Full Collection funding information|
|group_id|integer(int64)|true|none|Collection group|
|group_resource_id|string \| null|true|none|Collection group resource id|
|institution_id|integer(int64)|true|none|Collection institution|
|modified_date|string|true|none|Date when collection was last modified|
|public|boolean|true|none|True if collection is published|
|references|[string(url)]|true|none|List of collection references|
|resource_doi|string|true|none|Collection resource doi|
|resource_id|string|true|none|Collection resource id|
|resource_link|string|true|none|Collection resource link|
|resource_title|string|true|none|Collection resource title|
|resource_version|integer(int64)|true|none|Collection resource version|
|tags|[string]|true|none|List of collection tags|
|timeline|[Timeline](#schematimeline)|true|none|none|
|version|integer(int64)|true|none|Collection version|

<h2 id="tocS_CollectionCreate">CollectionCreate</h2>
<!-- backwards compatibility -->
<a id="schemacollectioncreate"></a>
<a id="schema_CollectionCreate"></a>
<a id="tocScollectioncreate"></a>
<a id="tocscollectioncreate"></a>

```json
{
  "articles": [
    2000001,
    2000005
  ],
  "authors": [
    {
      "name": "John Doe"
    },
    {
      "id": 20005
    }
  ],
  "categories": [
    1,
    10,
    11
  ],
  "categories_by_source_id": [
    "300204",
    "400207"
  ],
  "custom_fields": {
    "defined_key": "value for it"
  },
  "custom_fields_list": [
    {
      "name": "key",
      "value": "value"
    }
  ],
  "description": "Test description of article",
  "doi": "",
  "funding": "",
  "funding_list": [
    {
      "id": 0,
      "title": "string"
    }
  ],
  "group_id": 0,
  "handle": "",
  "keywords": [
    "tag1",
    "tag2"
  ],
  "references": [
    "http://figshare.com",
    "http://api.figshare.com"
  ],
  "resource_doi": "",
  "resource_id": "string",
  "resource_link": "string",
  "resource_title": "",
  "resource_version": 0,
  "tags": [
    "tag1",
    "tag2"
  ],
  "timeline": {
    "firstOnline": "2015-12-31",
    "publisherAcceptance": "2015-12-31",
    "publisherPublication": "2015-12-31"
  },
  "title": "Test collection title"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|articles|[integer]|false|none|List of articles to be associated with the collection|
|authors|[object]|false|none|List of authors to be associated with the collection. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint.|
|categories|[integer(int64)]|false|none|List of category ids to be associated with the collection(e.g [1, 23, 33, 66])|
|categories_by_source_id|[string]|false|none|List of category source ids to be associated with the collection, supersedes the categories property|
|custom_fields|object|false|none|List of key, values pairs to be associated with the collection|
|custom_fields_list|[[CustomArticleFieldAdd](#schemacustomarticlefieldadd)]|false|none|List of custom fields values, supersedes custom_fields parameter|
|description|string|false|none|The collection description. In a publisher case, usually this is the remote collection description|
|doi|string|false|none|Not applicable for regular users. In an institutional case, make sure your group supports setting DOIs. This setting is applied by figshare via opening a ticket through our support/helpdesk system.|
|funding|string|false|none|Grant number or funding authority|
|funding_list|[[FundingCreate](#schemafundingcreate)]|false|none|Funding creation / update items|
|group_id|integer(int64)|false|none|Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups|
|handle|string|false|none|Not applicable for regular users. In an institutional case, make sure your group supports setting Handles. This setting is applied by figshare via opening a ticket through our support/helpdesk system.|
|keywords|[string]|false|none|List of tags to be associated with the collection. Tags can be used instead|
|references|[string(link)]|false|none|List of links to be associated with the collection (e.g ["http://link1", "http://link2", "http://link3"])|
|resource_doi|string|false|none|Not applicable to regular users. In a publisher case, this is the publisher article DOI.|
|resource_id|string|false|none|Not applicable to regular users. In a publisher case, this is the publisher article id|
|resource_link|string|false|none|Not applicable to regular users. In a publisher case, this is the publisher article link|
|resource_title|string|false|none|Not applicable to regular users. In a publisher case, this is the publisher article title.|
|resource_version|integer|false|none|Not applicable to regular users. In a publisher case, this is the publisher article version|
|tags|[string]|false|none|List of tags to be associated with the collection. Keywords can be used instead|
|timeline|[TimelineUpdate](#schematimelineupdate)|false|none|none|
|title|string|true|none|Title of collection|

<h2 id="tocS_CollectionDOI">CollectionDOI</h2>
<!-- backwards compatibility -->
<a id="schemacollectiondoi"></a>
<a id="schema_CollectionDOI"></a>
<a id="tocScollectiondoi"></a>
<a id="tocscollectiondoi"></a>

```json
{
  "doi": "10.5072/FK2.FIGSHARE.20345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|doi|string|true|none|Reserved DOI|

<h2 id="tocS_CollectionHandle">CollectionHandle</h2>
<!-- backwards compatibility -->
<a id="schemacollectionhandle"></a>
<a id="schema_CollectionHandle"></a>
<a id="tocScollectionhandle"></a>
<a id="tocscollectionhandle"></a>

```json
{
  "handle": "11172/FK2.FIGSHARE.20345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|handle|string|true|none|Reserved Handle|

<h2 id="tocS_CollectionPrivateLinkCreator">CollectionPrivateLinkCreator</h2>
<!-- backwards compatibility -->
<a id="schemacollectionprivatelinkcreator"></a>
<a id="schema_CollectionPrivateLinkCreator"></a>
<a id="tocScollectionprivatelinkcreator"></a>
<a id="tocscollectionprivatelinkcreator"></a>

```json
{
  "expires_date": "2018-02-22 22:22:22",
  "read_only": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expires_date|string|false|none|Date when this private link should expire - optional. By default private links expire in 365 days.|
|read_only|boolean|false|none|Optional, default true. Set to false to give private link users editing rights for this collection.|

<h2 id="tocS_CollectionSearch">CollectionSearch</h2>
<!-- backwards compatibility -->
<a id="schemacollectionsearch"></a>
<a id="schema_CollectionSearch"></a>
<a id="tocScollectionsearch"></a>
<a id="tocscollectionsearch"></a>

```json
{
  "group": 2000013,
  "institution": 2000013,
  "limit": 10,
  "modified_since": "2017-12-22",
  "offset": 0,
  "order_direction": "desc",
  "page": 1,
  "page_size": 10,
  "published_since": "2017-12-22",
  "search_for": "figshare",
  "doi": "10.6084/m9.figshare.1407024",
  "handle": "10084/figshare.1407024",
  "order": "published_date",
  "resource_doi": "10.6084/m9.figshare.1407024"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group|integer(int32)|false|none|only return collections from this group|
|institution|integer(int32)|false|none|only return collections from this institution|
|limit|integer(int64)|false|none|Number of results included on a page. Used for pagination with query|
|modified_since|string|false|none|Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD|
|offset|integer(int64)|false|none|Where to start the listing(the offset of the first result). Used for pagination with limit|
|order_direction|string|false|none|Direction of ordering|
|page|integer(int64)|false|none|Page number. Used for pagination with page_size|
|page_size|integer(int64)|false|none|The number of results included on a page. Used for pagination with page|
|published_since|string|false|none|Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD|
|search_for|string|false|none|Search term|
|doi|string|false|none|Only return collections with this doi|
|handle|string|false|none|Only return collections with this handle|
|order|string|false|none|The field by which to order.|
|resource_doi|string|false|none|Only return collections with this resource_doi|

#### Enumerated Values

|Property|Value|
|---|---|
|order_direction|asc|
|order_direction|desc|
|order|published_date|
|order|modified_date|
|order|views|
|order|shares|
|order|cites|

<h2 id="tocS_CollectionUpdate">CollectionUpdate</h2>
<!-- backwards compatibility -->
<a id="schemacollectionupdate"></a>
<a id="schema_CollectionUpdate"></a>
<a id="tocScollectionupdate"></a>
<a id="tocscollectionupdate"></a>

```json
{
  "articles": [
    2000001,
    2000005
  ],
  "authors": [
    {
      "name": "John Doe"
    },
    {
      "id": 20005
    }
  ],
  "categories": [
    1,
    10,
    11
  ],
  "categories_by_source_id": [
    "300204",
    "400207"
  ],
  "custom_fields": {
    "defined_key": "value for it"
  },
  "custom_fields_list": [
    {
      "name": "key",
      "value": "value"
    }
  ],
  "description": "Test description of collection",
  "doi": "",
  "funding": "",
  "funding_list": [
    {
      "id": 0,
      "title": "string"
    }
  ],
  "group_id": 0,
  "handle": "",
  "keywords": [
    "tag1",
    "tag2"
  ],
  "references": [
    "http://figshare.com",
    "http://api.figshare.com"
  ],
  "resource_doi": "",
  "resource_id": "string",
  "resource_link": "string",
  "resource_title": "",
  "resource_version": 0,
  "tags": [
    "tag1",
    "tag2"
  ],
  "timeline": {
    "firstOnline": "2015-12-31",
    "publisherAcceptance": "2015-12-31",
    "publisherPublication": "2015-12-31"
  },
  "title": "Test collection title"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|articles|[integer]|false|none|List of articles to be associated with the collection|
|authors|[object]|false|none|List of authors to be associated with the collection. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint.|
|categories|[integer(int64)]|false|none|List of category ids to be associated with the collection (e.g [1, 23, 33, 66])|
|categories_by_source_id|[string]|false|none|List of category source ids to be associated with the article, supersedes the categories property|
|custom_fields|object|false|none|List of key, values pairs to be associated with the collection|
|custom_fields_list|[[CustomArticleFieldAdd](#schemacustomarticlefieldadd)]|false|none|List of custom fields values, supersedes custom_fields parameter|
|description|string|false|none|The collection description. In a publisher case, usually this is the remote collection description|
|doi|string|false|none|Not applicable for regular users. In an institutional case, make sure your group supports setting DOIs. This setting is applied by figshare via opening a ticket through our support/helpdesk system.|
|funding|string|false|none|Grant number or funding authority|
|funding_list|[[FundingCreate](#schemafundingcreate)]|false|none|Funding creation / update items|
|group_id|integer(int64)|false|none|Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups|
|handle|string|false|none|Not applicable for regular users. In an institutional case, make sure your group supports setting Handles. This setting is applied by figshare via opening a ticket through our support/helpdesk system.|
|keywords|[string]|false|none|List of tags to be associated with the collection. Tags can be used instead|
|references|[string(link)]|false|none|List of links to be associated with the collection (e.g ["http://link1", "http://link2", "http://link3"])|
|resource_doi|string|false|none|Not applicable to regular users. In a publisher case, this is the publisher article DOI.|
|resource_id|string|false|none|Not applicable to regular users. In a publisher case, this is the publisher article id|
|resource_link|string|false|none|Not applicable to regular users. In a publisher case, this is the publisher article link|
|resource_title|string|false|none|Not applicable to regular users. In a publisher case, this is the publisher article title.|
|resource_version|integer|false|none|Not applicable to regular users. In a publisher case, this is the publisher article version|
|tags|[string]|false|none|List of tags to be associated with the collection. Keywords can be used instead|
|timeline|[TimelineUpdate](#schematimelineupdate)|false|none|none|
|title|string|false|none|Title of collection|

<h2 id="tocS_CollectionVersions">CollectionVersions</h2>
<!-- backwards compatibility -->
<a id="schemacollectionversions"></a>
<a id="schema_CollectionVersions"></a>
<a id="tocScollectionversions"></a>
<a id="tocscollectionversions"></a>

```json
{
  "id": 1,
  "url": "https://api.figshare.com/v2/collections/2000005/versions/1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|Version number|
|url|string(url)|true|none|Api endpoint for the collection version|

<h2 id="tocS_CommonSearch">CommonSearch</h2>
<!-- backwards compatibility -->
<a id="schemacommonsearch"></a>
<a id="schema_CommonSearch"></a>
<a id="tocScommonsearch"></a>
<a id="tocscommonsearch"></a>

```json
{
  "group": 2000013,
  "institution": 2000013,
  "limit": 10,
  "modified_since": "2017-12-22",
  "offset": 0,
  "order_direction": "desc",
  "page": 1,
  "page_size": 10,
  "published_since": "2017-12-22",
  "search_for": "figshare"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group|integer(int32)|false|none|only return collections from this group|
|institution|integer(int32)|false|none|only return collections from this institution|
|limit|integer(int64)|false|none|Number of results included on a page. Used for pagination with query|
|modified_since|string|false|none|Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD|
|offset|integer(int64)|false|none|Where to start the listing(the offset of the first result). Used for pagination with limit|
|order_direction|string|false|none|Direction of ordering|
|page|integer(int64)|false|none|Page number. Used for pagination with page_size|
|page_size|integer(int64)|false|none|The number of results included on a page. Used for pagination with page|
|published_since|string|false|none|Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD|
|search_for|string|false|none|Search term|

#### Enumerated Values

|Property|Value|
|---|---|
|order_direction|asc|
|order_direction|desc|

<h2 id="tocS_ConfidentialityCreator">ConfidentialityCreator</h2>
<!-- backwards compatibility -->
<a id="schemaconfidentialitycreator"></a>
<a id="schema_ConfidentialityCreator"></a>
<a id="tocSconfidentialitycreator"></a>
<a id="tocsconfidentialitycreator"></a>

```json
{
  "reason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|true|none|Reason for confidentiality|

<h2 id="tocS_CreateProjectResponse">CreateProjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateprojectresponse"></a>
<a id="schema_CreateProjectResponse"></a>
<a id="tocScreateprojectresponse"></a>
<a id="tocscreateprojectresponse"></a>

```json
{
  "entity_id": 33334444,
  "location": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|integer(int64)|true|none|Figshare ID of the entity|
|location|string(url)|true|none|Url for entity|

<h2 id="tocS_Curation">Curation</h2>
<!-- backwards compatibility -->
<a id="schemacuration"></a>
<a id="schema_Curation"></a>
<a id="tocScuration"></a>
<a id="tocscuration"></a>

```json
{
  "account_id": 0,
  "article_id": 0,
  "assigned_to": 0,
  "comments_count": 0,
  "created_date": "string",
  "group_id": 0,
  "id": 0,
  "modified_date": "string",
  "review_date": "string",
  "status": "pending",
  "version": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int64)|true|none|The ID of the account of the owner of the article of this review.|
|article_id|integer(int64)|true|none|The ID of the article of this review.|
|assigned_to|integer(int64)|true|none|The ID of the account to which this review is assigned.|
|comments_count|integer(int64)|true|none|The number of comments in the review.|
|created_date|string|true|none|The creation date of the review.|
|group_id|integer(int64)|true|none|The group in which the article is present.|
|id|integer(int64)|true|none|The review id|
|modified_date|string|true|none|The date the review has been modified.|
|review_date|string \| null|true|none|The last time a comment has been added to the review.|
|status|string|true|none|The status of the review.|
|version|integer(int64)|true|none|The Version number of the article in review.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|pending|
|status|approved|
|status|rejected|
|status|closed|

<h2 id="tocS_CurationComment">CurationComment</h2>
<!-- backwards compatibility -->
<a id="schemacurationcomment"></a>
<a id="schema_CurationComment"></a>
<a id="tocScurationcomment"></a>
<a id="tocscurationcomment"></a>

```json
{
  "account_id": 0,
  "id": 0,
  "text": "string",
  "type": "comment"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int64)|true|none|The ID of the account which generated this comment.|
|id|integer(int64)|true|none|The ID of the comment.|
|text|string|true|none|The value/content of the comment.|
|type|string|true|none|The ID of the account which generated this comment.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|comment|
|type|approved|
|type|rejected|
|type|closed|

<h2 id="tocS_CurationCommentCreate">CurationCommentCreate</h2>
<!-- backwards compatibility -->
<a id="schemacurationcommentcreate"></a>
<a id="schema_CurationCommentCreate"></a>
<a id="tocScurationcommentcreate"></a>
<a id="tocscurationcommentcreate"></a>

```json
{
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|The contents/value of the comment|

<h2 id="tocS_CurationDetail">CurationDetail</h2>
<!-- backwards compatibility -->
<a id="schemacurationdetail"></a>
<a id="schema_CurationDetail"></a>
<a id="tocScurationdetail"></a>
<a id="tocscurationdetail"></a>

```json
{
  "account_id": 0,
  "article_id": 0,
  "assigned_to": 0,
  "comments_count": 0,
  "created_date": "string",
  "group_id": 0,
  "id": 0,
  "modified_date": "string",
  "review_date": "string",
  "status": "pending",
  "version": 0,
  "item": {
    "defined_type": 3,
    "defined_type_name": "media",
    "doi": "10.6084/m9.figshare.1434614",
    "group_id": 1234,
    "handle": "111184/figshare.1234",
    "id": 1434614,
    "published_date": "2015-12-31T23:59:59.000Z",
    "thumb": "https://ndownloader.figshare.com/files/123456789/preview/12345678/thumb.png",
    "timeline": {
      "firstOnline": "2015-12-31",
      "publisherAcceptance": "2015-12-31",
      "publisherPublication": "2015-12-31",
      "posted": "2015-12-31",
      "revision": "2015-12-31",
      "submission": "2015-12-31"
    },
    "title": "Test article title",
    "url": "http://api.figshare.com/articles/1434614",
    "url_private_api": "https://api.figshare.com/account/articles/1434614",
    "url_private_html": "https://figshare.com/account/articles/1434614",
    "url_public_api": "https://api.figshare.com/articles/1434614",
    "url_public_html": "https://figshare.com/articles/media/Test_article_title/1434614",
    "categories": [
      {
        "id": 11,
        "parent_id": 1,
        "path": "/450/1024/6532",
        "source_id": "300204",
        "taxonomy_id": 4,
        "title": "Anatomy"
      }
    ],
    "citation": "lilliput, figshare admin (2017): first project item. figshare.\n \n Retrieved: 14 01, May 22, 2017 (GMT)",
    "confidential_reason": "none",
    "created_date": "2017-05-18T11:49:03Z",
    "description": "article description",
    "embargo_date": "2017-05-18T11:49:03Z",
    "embargo_reason": "not complete",
    "embargo_title": "File(s) under embargo",
    "embargo_type": "article",
    "funding": "none",
    "funding_list": [
      0
    ],
    "has_linked_file": true,
    "is_active": true,
    "is_confidential": true,
    "is_embargoed": true,
    "is_metadata_record": false,
    "is_public": true,
    "license": {
      "name": "CC BY",
      "url": "http://creativecommons.org/licenses/by/4.0/",
      "value": 1
    },
    "metadata_reason": "hosted somewhere else",
    "modified_date": "2017-05-18T11:49:03Z",
    "references": [
      "http://figshare.com",
      "http://figshare.com/api"
    ],
    "size": 69939,
    "status": "public",
    "tags": [
      "t1",
      "t2",
      "t3"
    ],
    "version": 1,
    "authors": [
      {
        "full_name": "John Doe",
        "id": 97657,
        "is_active": 1,
        "orcid_id": "1234-5678-9123-1234",
        "url_name": "John_Doe"
      }
    ],
    "custom_fields": [
      {
        "is_mandatory": false,
        "name": "key",
        "value": "value"
      }
    ],
    "embargo_options": [
      {
        "id": 364,
        "ip_name": "Figshare IP range",
        "type": "ip_range"
      }
    ],
    "figshare_url": "http://figshare.com/articles/media/article_name/2000005",
    "files": [
      {
        "computed_md5": "043a51806d646e88cafbf19e7b82846f",
        "download_url": "https://ndownloader.figshare.com/files/3000002",
        "id": 3000002,
        "is_link_only": false,
        "name": "test.xls",
        "size": 14848,
        "supplied_md5": "043a51806d646e88cafbf19e7b82846f"
      }
    ],
    "resource_doi": "10.5072/FK2.developmentfigshare.2000005",
    "resource_title": "first article"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|integer(int64)|true|none|The ID of the account of the owner of the article of this review.|
|article_id|integer(int64)|true|none|The ID of the article of this review.|
|assigned_to|integer(int64)|true|none|The ID of the account to which this review is assigned.|
|comments_count|integer(int64)|true|none|The number of comments in the review.|
|created_date|string|true|none|The creation date of the review.|
|group_id|integer(int64)|true|none|The group in which the article is present.|
|id|integer(int64)|true|none|The review id|
|modified_date|string|true|none|The date the review has been modified.|
|review_date|string \| null|true|none|The last time a comment has been added to the review.|
|status|string|true|none|The status of the review.|
|version|integer(int64)|true|none|The Version number of the article in review.|
|item|[ArticleComplete](#schemaarticlecomplete)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|pending|
|status|approved|
|status|rejected|
|status|closed|

<h2 id="tocS_CustomArticleField">CustomArticleField</h2>
<!-- backwards compatibility -->
<a id="schemacustomarticlefield"></a>
<a id="schema_CustomArticleField"></a>
<a id="tocScustomarticlefield"></a>
<a id="tocscustomarticlefield"></a>

```json
{
  "is_mandatory": false,
  "name": "key",
  "value": "value"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_mandatory|boolean \| null|true|none|True if field completion is mandatory|
|name|string|true|none|Custom  metadata name|
|value|string|true|none|Custom metadata value|

<h2 id="tocS_CustomArticleFieldAdd">CustomArticleFieldAdd</h2>
<!-- backwards compatibility -->
<a id="schemacustomarticlefieldadd"></a>
<a id="schema_CustomArticleFieldAdd"></a>
<a id="tocScustomarticlefieldadd"></a>
<a id="tocscustomarticlefieldadd"></a>

```json
{
  "name": "key",
  "value": "value"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Custom  metadata name|
|value|object|true|none|Custom metadata value|

<h2 id="tocS_ErrorMessage">ErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemaerrormessage"></a>
<a id="schema_ErrorMessage"></a>
<a id="tocSerrormessage"></a>
<a id="tocserrormessage"></a>

```json
{
  "code": 0,
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int64)|false|none|A machine friendly error code, used by the dev team to identify the error.|
|message|string|false|none|A human friendly message explaining the error.|

<h2 id="tocS_FileCreator">FileCreator</h2>
<!-- backwards compatibility -->
<a id="schemafilecreator"></a>
<a id="schema_FileCreator"></a>
<a id="tocSfilecreator"></a>
<a id="tocsfilecreator"></a>

```json
{
  "link": "http://figshare.com/file.txt",
  "md5": "6c16e6e7d7587bd078e5117dda01d565",
  "name": "test.py",
  "size": 70
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|link|string|false|none|Url for an existing file that will not be uploaded to Figshare|
|md5|string|false|none|MD5 sum pre-computed on client side.|
|name|string|false|none|File name including the extension; can be omitted only for linked files.|
|size|integer(int64)|false|none|File size in bytes; can be omitted only for linked files.|

<h2 id="tocS_FileId">FileId</h2>
<!-- backwards compatibility -->
<a id="schemafileid"></a>
<a id="schema_FileId"></a>
<a id="tocSfileid"></a>
<a id="tocsfileid"></a>

```json
{
  "file_id": 123
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file_id|integer(int64)|false|none|File ID|

<h2 id="tocS_FundingCreate">FundingCreate</h2>
<!-- backwards compatibility -->
<a id="schemafundingcreate"></a>
<a id="schema_FundingCreate"></a>
<a id="tocSfundingcreate"></a>
<a id="tocsfundingcreate"></a>

```json
{
  "id": 0,
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|A funding ID as returned by the Funding Search endpoint|
|title|string|false|none|The title of the new user created funding|

<h2 id="tocS_FundingInformation">FundingInformation</h2>
<!-- backwards compatibility -->
<a id="schemafundinginformation"></a>
<a id="schema_FundingInformation"></a>
<a id="tocSfundinginformation"></a>
<a id="tocsfundinginformation"></a>

```json
{
  "funder_name": "string",
  "grant_code": "string",
  "id": 1,
  "is_user_defined": true,
  "title": "Scholarly funding",
  "url": "https://app.dimensions.ai/details/grant/1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|funder_name|string|true|none|Funder's name|
|grant_code|string|true|none|The grant code|
|id|integer(int64)|true|none|Funding id|
|is_user_defined|boolean|true|none|Return whether the grant has been introduced manually|
|title|string|true|none|The funding name|
|url|string(url)|true|none|The grant url|

<h2 id="tocS_FundingSearch">FundingSearch</h2>
<!-- backwards compatibility -->
<a id="schemafundingsearch"></a>
<a id="schema_FundingSearch"></a>
<a id="tocSfundingsearch"></a>
<a id="tocsfundingsearch"></a>

```json
{
  "search_for": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|search_for|string|false|none|Search term|

<h2 id="tocS_Group">Group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_Group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
{
  "association_criteria": "IT",
  "id": 1,
  "name": "Materials",
  "parent_id": 0,
  "resource_id": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|association_criteria|string|true|none|HR code associated with group, if code exists|
|id|integer(int64)|true|none|Group id|
|name|string|true|none|Group name|
|parent_id|integer(int64)|true|none|Parent group if any|
|resource_id|string|true|none|Group resource id|

<h2 id="tocS_GroupEmbargoOptions">GroupEmbargoOptions</h2>
<!-- backwards compatibility -->
<a id="schemagroupembargooptions"></a>
<a id="schema_GroupEmbargoOptions"></a>
<a id="tocSgroupembargooptions"></a>
<a id="tocsgroupembargooptions"></a>

```json
{
  "id": 364,
  "ip_name": "Figshare IP range",
  "type": "ip_range"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|Embargo option id|
|ip_name|string|true|none|IP range name; value appears if type is ip_range|
|type|string|true|none|Embargo permission type|

#### Enumerated Values

|Property|Value|
|---|---|
|type|logged_in|
|type|ip_range|
|type|administrator|

<h2 id="tocS_Institution">Institution</h2>
<!-- backwards compatibility -->
<a id="schemainstitution"></a>
<a id="schema_Institution"></a>
<a id="tocSinstitution"></a>
<a id="tocsinstitution"></a>

```json
{
  "domain": null,
  "id": 0,
  "name": "Institution"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string \| null|true|none|Institution domain|
|id|integer(int64)|true|none|Institution id|
|name|string|true|none|Institution name|

<h2 id="tocS_InstitutionAccountsSearch">InstitutionAccountsSearch</h2>
<!-- backwards compatibility -->
<a id="schemainstitutionaccountssearch"></a>
<a id="schema_InstitutionAccountsSearch"></a>
<a id="tocSinstitutionaccountssearch"></a>
<a id="tocsinstitutionaccountssearch"></a>

```json
{
  "email": "alan@institution.com",
  "institution_user_id": "alan",
  "is_active": 0,
  "limit": 10,
  "offset": 0,
  "page": 1,
  "page_size": 10,
  "search_for": "figshare"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|filter by email|
|institution_user_id|string|false|none|filter by institution_user_id|
|is_active|integer(int64)|false|none|Filter by active status|
|limit|integer(int64)|false|none|Number of results included on a page. Used for pagination with query|
|offset|integer(int64)|false|none|Where to start the listing(the offset of the first result). Used for pagination with limit|
|page|integer(int64)|false|none|Page number. Used for pagination with page_size|
|page_size|integer(int64)|false|none|The number of results included on a page. Used for pagination with page|
|search_for|string|false|none|Search term|

<h2 id="tocS_ItemType">ItemType</h2>
<!-- backwards compatibility -->
<a id="schemaitemtype"></a>
<a id="schema_ItemType"></a>
<a id="tocSitemtype"></a>
<a id="tocsitemtype"></a>

```json
{
  "icon": "paper",
  "id": 1,
  "is_selectable": true,
  "name": "journal contribution",
  "public_description": "This is the description of an item type",
  "string_id": "journal_contribution",
  "url_name": "journal_contribution"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|icon|string|true|none|The string identifying the icon of the item type.|
|id|integer(int64)|true|none|The ID of the item type.|
|is_selectable|boolean|true|none|The selectable status|
|name|string|true|none|The name of the item type|
|public_description|string|true|none|The description of the item type.|
|string_id|string|true|none|The string identifier of the item type.|
|url_name|string|true|none|The URL name of the item type.|

<h2 id="tocS_License">License</h2>
<!-- backwards compatibility -->
<a id="schemalicense"></a>
<a id="schema_License"></a>
<a id="tocSlicense"></a>
<a id="tocslicense"></a>

```json
{
  "name": "CC BY",
  "url": "http://creativecommons.org/licenses/by/4.0/",
  "value": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|License name|
|url|string(url)|true|none|License url|
|value|integer(int64)|true|none|License value|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "location": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|string(url)|true|none|Url for item|

<h2 id="tocS_LocationWarnings">LocationWarnings</h2>
<!-- backwards compatibility -->
<a id="schemalocationwarnings"></a>
<a id="schema_LocationWarnings"></a>
<a id="tocSlocationwarnings"></a>
<a id="tocslocationwarnings"></a>

```json
{
  "entity_id": 33334444,
  "location": "http://example.com",
  "warnings": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|integer(int64)|true|none|Figshare ID of the entity|
|location|string(url)|true|none|Url for entity|
|warnings|[string]|true|none|Issues encountered during the operation|

<h2 id="tocS_LocationWarningsUpdate">LocationWarningsUpdate</h2>
<!-- backwards compatibility -->
<a id="schemalocationwarningsupdate"></a>
<a id="schema_LocationWarningsUpdate"></a>
<a id="tocSlocationwarningsupdate"></a>
<a id="tocslocationwarningsupdate"></a>

```json
{
  "location": "http://example.com",
  "warnings": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|string(url)|true|none|Url for entity|
|warnings|[string]|true|none|Issues encountered during the operation|

<h2 id="tocS_PrivateArticleSearch">PrivateArticleSearch</h2>
<!-- backwards compatibility -->
<a id="schemaprivatearticlesearch"></a>
<a id="schema_PrivateArticleSearch"></a>
<a id="tocSprivatearticlesearch"></a>
<a id="tocsprivatearticlesearch"></a>

```json
{
  "group": 2000013,
  "institution": 2000013,
  "limit": 10,
  "modified_since": "2017-12-22",
  "offset": 0,
  "order_direction": "desc",
  "page": 1,
  "page_size": 10,
  "published_since": "2017-12-22",
  "search_for": "figshare",
  "doi": "10.6084/m9.figshare.1407024",
  "handle": "111084/m9.figshare.14074",
  "item_type": 1,
  "order": "published_date",
  "project_id": 1,
  "resource_doi": "10.6084/m9.figshare.1407024",
  "resource_id": "1407024"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group|integer(int32)|false|none|only return collections from this group|
|institution|integer(int32)|false|none|only return collections from this institution|
|limit|integer(int64)|false|none|Number of results included on a page. Used for pagination with query|
|modified_since|string|false|none|Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD|
|offset|integer(int64)|false|none|Where to start the listing(the offset of the first result). Used for pagination with limit|
|order_direction|string|false|none|Direction of ordering|
|page|integer(int64)|false|none|Page number. Used for pagination with page_size|
|page_size|integer(int64)|false|none|The number of results included on a page. Used for pagination with page|
|published_since|string|false|none|Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD|
|search_for|string|false|none|Search term|
|doi|string|false|none|Only return articles with this doi|
|handle|string|false|none|Only return articles with this handle|
|item_type|integer(int64)|false|none|Only return articles with the respective type. Mapping for item_type is: 1 - Figure, 2 - Media, 3 - Dataset, 5 - Poster, 6 - Journal contribution, 7 - Presentation, 8 - Thesis, 9 - Software, 11 - Online resource, 12 - Preprint, 13 - Book, 14 - Conference contribution, 15 - Chapter, 16 - Peer review, 17 - Educational resource, 18 - Report, 19 - Standard, 20 - Composition, 21 - Funding, 22 - Physical object, 23 - Data management plan, 24 - Workflow, 25 - Monograph, 26 - Performance, 27 - Event, 28 - Service, 29 - Model|
|order|string|false|none|The field by which to order|
|project_id|integer(int64)|false|none|Only return articles in this project|
|resource_doi|string|false|none|Only return articles with this resource_doi|
|resource_id|string|false|none|only return collections with this resource_id|

#### Enumerated Values

|Property|Value|
|---|---|
|order_direction|asc|
|order_direction|desc|
|order|published_date|
|order|modified_date|
|order|views|
|order|shares|
|order|downloads|
|order|cites|

<h2 id="tocS_PrivateAuthorsSearch">PrivateAuthorsSearch</h2>
<!-- backwards compatibility -->
<a id="schemaprivateauthorssearch"></a>
<a id="schema_PrivateAuthorsSearch"></a>
<a id="tocSprivateauthorssearch"></a>
<a id="tocsprivateauthorssearch"></a>

```json
{
  "group_id": 0,
  "institution_id": 1,
  "is_active": true,
  "is_public": true,
  "limit": 10,
  "offset": 0,
  "orcid": "string",
  "order": "published_date",
  "order_direction": "desc",
  "page": 1,
  "page_size": 10,
  "search_for": "figshare"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group_id|integer(int64)|false|none|Return only authors in this group or subgroups of the group|
|institution_id|integer(int64)|false|none|Return only authors associated to this institution|
|is_active|boolean|false|none|Return only active authors if True|
|is_public|boolean|false|none|Return only authors that have published items if True|
|limit|integer(int64)|false|none|Number of results included on a page. Used for pagination with query|
|offset|integer(int64)|false|none|Where to start the listing(the offset of the first result). Used for pagination with limit|
|orcid|string|false|none|Orcid of author|
|order|string|false|none|The field by which to order. Default varies by endpoint/resource.|
|order_direction|string|false|none|Direction of ordering|
|page|integer(int64)|false|none|Page number. Used for pagination with page_size|
|page_size|integer(int64)|false|none|The number of results included on a page. Used for pagination with page|
|search_for|string|false|none|Search term|

#### Enumerated Values

|Property|Value|
|---|---|
|order|published_date|
|order|modified_date|
|order|views|
|order|shares|
|order|downloads|
|order|cites|
|order_direction|asc|
|order_direction|desc|

<h2 id="tocS_PrivateCollectionSearch">PrivateCollectionSearch</h2>
<!-- backwards compatibility -->
<a id="schemaprivatecollectionsearch"></a>
<a id="schema_PrivateCollectionSearch"></a>
<a id="tocSprivatecollectionsearch"></a>
<a id="tocsprivatecollectionsearch"></a>

```json
{
  "group": 2000013,
  "institution": 2000013,
  "limit": 10,
  "modified_since": "2017-12-22",
  "offset": 0,
  "order_direction": "desc",
  "page": 1,
  "page_size": 10,
  "published_since": "2017-12-22",
  "search_for": "figshare",
  "doi": "10.6084/m9.figshare.1407024",
  "handle": "10084/figshare.1407024",
  "order": "published_date",
  "resource_doi": "10.6084/m9.figshare.1407024",
  "resource_id": "1407024"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group|integer(int32)|false|none|only return collections from this group|
|institution|integer(int32)|false|none|only return collections from this institution|
|limit|integer(int64)|false|none|Number of results included on a page. Used for pagination with query|
|modified_since|string|false|none|Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD|
|offset|integer(int64)|false|none|Where to start the listing(the offset of the first result). Used for pagination with limit|
|order_direction|string|false|none|Direction of ordering|
|page|integer(int64)|false|none|Page number. Used for pagination with page_size|
|page_size|integer(int64)|false|none|The number of results included on a page. Used for pagination with page|
|published_since|string|false|none|Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD|
|search_for|string|false|none|Search term|
|doi|string|false|none|Only return collections with this doi|
|handle|string|false|none|Only return collections with this handle|
|order|string|false|none|The field by which to order.|
|resource_doi|string|false|none|Only return collections with this resource_doi|
|resource_id|string|false|none|only return collections with this resource_id|

#### Enumerated Values

|Property|Value|
|---|---|
|order_direction|asc|
|order_direction|desc|
|order|published_date|
|order|modified_date|
|order|views|
|order|shares|
|order|cites|

<h2 id="tocS_PrivateFile">PrivateFile</h2>
<!-- backwards compatibility -->
<a id="schemaprivatefile"></a>
<a id="schema_PrivateFile"></a>
<a id="tocSprivatefile"></a>
<a id="tocsprivatefile"></a>

```json
{
  "computed_md5": "043a51806d646e88cafbf19e7b82846f",
  "download_url": "https://ndownloader.figshare.com/files/3000002",
  "id": 3000002,
  "is_link_only": false,
  "name": "test.xls",
  "size": 14848,
  "supplied_md5": "043a51806d646e88cafbf19e7b82846f",
  "is_attached_to_public_version": true,
  "preview_state": "preview not available",
  "status": "created",
  "upload_token": "9dfc5fe3-d617-4d93-ac11-8afe7e984a4b",
  "upload_url": "https://uploads.figshare.com",
  "viewer_type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|computed_md5|string|true|none|File computed md5|
|download_url|string(url)|true|none|Url for file download|
|id|integer(int64)|true|none|File id|
|is_link_only|boolean|true|none|True if file is hosted somewhere else|
|name|string|true|none|File name|
|size|integer(int64)|true|none|File size|
|supplied_md5|string|true|none|File supplied md5|
|is_attached_to_public_version|boolean|true|none|True if the file is attached to a public item version|
|preview_state|string|true|none|File preview state|
|status|string \| null|true|none|Status for file upload|
|upload_token|string|true|none|Token for file upload|
|upload_url|string(url)|true|none|Upload url for file|
|viewer_type|string|true|none|File viewer type|

<h2 id="tocS_PrivateLink">PrivateLink</h2>
<!-- backwards compatibility -->
<a id="schemaprivatelink"></a>
<a id="schema_PrivateLink"></a>
<a id="tocSprivatelink"></a>
<a id="tocsprivatelink"></a>

```json
{
  "expires_date": "2015-07-03T00:00:00",
  "html_location": "https://figshare.com/s/d5ec7a85bcd6dbe9d9b2",
  "id": "0cfb0dbeac92df445df4aba45f63fdc85fa0b9a888b64e157ce3c93b576aa300fb3621ef3a219515dd482",
  "is_active": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expires_date|string|true|none|Date when link will expire|
|html_location|string(url)|true|none|HTML url for private link|
|id|string|true|none|Private link id|
|is_active|boolean|true|none|True if private link is active|

<h2 id="tocS_PrivateLinkCreator">PrivateLinkCreator</h2>
<!-- backwards compatibility -->
<a id="schemaprivatelinkcreator"></a>
<a id="schema_PrivateLinkCreator"></a>
<a id="tocSprivatelinkcreator"></a>
<a id="tocsprivatelinkcreator"></a>

```json
{
  "expires_date": "2018-02-22 22:22:22",
  "read_only": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expires_date|string|false|none|Date when this private link should expire - optional. By default private links expire in 365 days.|
|read_only|boolean|false|none|Optional, default true. Set to false to give private link users editing rights for this collection.|

<h2 id="tocS_PrivateLinkResponse">PrivateLinkResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprivatelinkresponse"></a>
<a id="schema_PrivateLinkResponse"></a>
<a id="tocSprivatelinkresponse"></a>
<a id="tocsprivatelinkresponse"></a>

```json
{
  "html_location": "https://figshare.com/s/d5ec7a85bcd6dbe9d9b2",
  "location": "http://example.com",
  "token": "d5ec7a85bcd6dbe9d9b2"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|html_location|string(url)|true|none|HTML url for private link|
|location|string(url)|true|none|Url for private link|
|token|string|true|none|Token for private link|

<h2 id="tocS_Project">Project</h2>
<!-- backwards compatibility -->
<a id="schemaproject"></a>
<a id="schema_Project"></a>
<a id="tocSproject"></a>
<a id="tocsproject"></a>

```json
{
  "id": 1,
  "published_date": "2017-05-16T14:55:08Z",
  "title": "project",
  "url": "http://api.figshare.com/v2/account/projects/1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|Project id|
|published_date|string \| null|true|none|Date when project was published|
|title|string|true|none|Project title|
|url|string|true|none|Api endpoint|

<h2 id="tocS_ProjectArticle">ProjectArticle</h2>
<!-- backwards compatibility -->
<a id="schemaprojectarticle"></a>
<a id="schema_ProjectArticle"></a>
<a id="tocSprojectarticle"></a>
<a id="tocsprojectarticle"></a>

```json
{
  "defined_type": 3,
  "defined_type_name": "media",
  "doi": "10.6084/m9.figshare.1434614",
  "group_id": 1234,
  "handle": "111184/figshare.1234",
  "id": 1434614,
  "published_date": "2015-12-31T23:59:59.000Z",
  "thumb": "https://ndownloader.figshare.com/files/123456789/preview/12345678/thumb.png",
  "timeline": {
    "firstOnline": "2015-12-31",
    "publisherAcceptance": "2015-12-31",
    "publisherPublication": "2015-12-31",
    "posted": "2015-12-31",
    "revision": "2015-12-31",
    "submission": "2015-12-31"
  },
  "title": "Test article title",
  "url": "http://api.figshare.com/articles/1434614",
  "url_private_api": "https://api.figshare.com/account/articles/1434614",
  "url_private_html": "https://figshare.com/account/articles/1434614",
  "url_public_api": "https://api.figshare.com/articles/1434614",
  "url_public_html": "https://figshare.com/articles/media/Test_article_title/1434614",
  "categories": [
    {
      "id": 11,
      "parent_id": 1,
      "path": "/450/1024/6532",
      "source_id": "300204",
      "taxonomy_id": 4,
      "title": "Anatomy"
    }
  ],
  "citation": "lilliput, figshare admin (2017): first project item. figshare.\n \n Retrieved: 14 01, May 22, 2017 (GMT)",
  "confidential_reason": "none",
  "created_date": "2017-05-18T11:49:03Z",
  "description": "article description",
  "embargo_date": "2017-05-18T11:49:03Z",
  "embargo_reason": "not complete",
  "embargo_title": "File(s) under embargo",
  "embargo_type": "article",
  "funding": "none",
  "funding_list": [
    0
  ],
  "has_linked_file": true,
  "is_active": true,
  "is_confidential": true,
  "is_embargoed": true,
  "is_metadata_record": false,
  "is_public": true,
  "license": {
    "name": "CC BY",
    "url": "http://creativecommons.org/licenses/by/4.0/",
    "value": 1
  },
  "metadata_reason": "hosted somewhere else",
  "modified_date": "2017-05-18T11:49:03Z",
  "references": [
    "http://figshare.com",
    "http://figshare.com/api"
  ],
  "size": 69939,
  "status": "public",
  "tags": [
    "t1",
    "t2",
    "t3"
  ],
  "version": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defined_type|integer(int64)|true|none|Type of article identifier|
|defined_type_name|string|true|none|Name of the article type identifier|
|doi|string|true|none|DOI|
|group_id|number \| null|true|none|Group ID|
|handle|string|true|none|Handle|
|id|integer(int64)|true|none|Unique identifier for article|
|published_date|string \| null|true|none|Posted date|
|thumb|string(url)|true|none|Thumbnail image|
|timeline|[Timeline](#schematimeline)|true|none|none|
|title|string|true|none|Title of article|
|url|string(url)|true|none|Api endpoint for article|
|url_private_api|string(url)|true|none|Private Api endpoint for article|
|url_private_html|string(url)|true|none|Private site endpoint for article|
|url_public_api|string(url)|true|none|Public Api endpoint for article|
|url_public_html|string(url)|true|none|Public site endpoint for article|
|categories|[[Category](#schemacategory)]|true|none|List of categories selected for the article|
|citation|string|true|none|Article citation|
|confidential_reason|string|true|none|Confidentiality reason|
|created_date|string|true|none|Date when article was created|
|description|string|true|none|Article description|
|embargo_date|string \| null|true|none|Date when embargo lifts|
|embargo_reason|string|true|none|Reason for embargo|
|embargo_title|string|true|none|Title for embargo|
|embargo_type|string \| null|true|none|Article embargo|
|funding|string|true|none|Article funding|
|funding_list|[integer]|true|none|none|
|has_linked_file|boolean|true|none|True if any files are linked to the article|
|is_active|boolean|true|none|True if article is active|
|is_confidential|boolean|true|none|Article Confidentiality|
|is_embargoed|boolean|true|none|True if article is embargoed|
|is_metadata_record|boolean|true|none|True if article has no files|
|is_public|boolean|true|none|True if article is published|
|license|[License](#schemalicense)|true|none|none|
|metadata_reason|string|true|none|Article metadata reason|
|modified_date|string \| null|true|none|Date when article was last modified|
|references|[string(url)]|true|none|List of references|
|size|integer(int64)|true|none|Article size|
|status|string|true|none|Article status|
|tags|[string]|true|none|List of article tags|
|version|integer(int64)|true|none|Article version|

<h2 id="tocS_ProjectCollaborator">ProjectCollaborator</h2>
<!-- backwards compatibility -->
<a id="schemaprojectcollaborator"></a>
<a id="schema_ProjectCollaborator"></a>
<a id="tocSprojectcollaborator"></a>
<a id="tocsprojectcollaborator"></a>

```json
{
  "name": "name",
  "role_name": "Owner",
  "status": "invited",
  "user_id": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Collaborator name|
|role_name|string|true|none|Collaborator role|
|status|string|true|none|Status of collaborator invitation|
|user_id|integer|true|none|Collaborator id|

<h2 id="tocS_ProjectCollaboratorInvite">ProjectCollaboratorInvite</h2>
<!-- backwards compatibility -->
<a id="schemaprojectcollaboratorinvite"></a>
<a id="schema_ProjectCollaboratorInvite"></a>
<a id="tocSprojectcollaboratorinvite"></a>
<a id="tocsprojectcollaboratorinvite"></a>

```json
{
  "comment": "hey",
  "email": "user@domain.com",
  "role_name": "viewer",
  "user_id": 100008
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string|false|none|Text sent when inviting the user to the project|
|email|string|false|none|Collaborator email|
|role_name|string|true|none|Role of the the collaborator inside the project|
|user_id|integer(int64)|false|none|User id of the collaborator|

#### Enumerated Values

|Property|Value|
|---|---|
|role_name|viewer|
|role_name|collaborator|

<h2 id="tocS_ProjectComplete">ProjectComplete</h2>
<!-- backwards compatibility -->
<a id="schemaprojectcomplete"></a>
<a id="schema_ProjectComplete"></a>
<a id="tocSprojectcomplete"></a>
<a id="tocsprojectcomplete"></a>

```json
{
  "id": 1,
  "published_date": "2017-05-16T14:55:08Z",
  "title": "project",
  "url": "http://api.figshare.com/v2/account/projects/1",
  "collaborators": [
    {
      "name": "name",
      "role_name": "Owner",
      "user_id": 1
    }
  ],
  "description": "description",
  "figshare_url": "https://figshare.com/projects/project/1",
  "funding": "",
  "funding_list": [
    {
      "funder_name": "string",
      "grant_code": "string",
      "id": 1,
      "is_user_defined": true,
      "title": "Scholarly funding",
      "url": "https://app.dimensions.ai/details/grant/1"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|Project id|
|published_date|string \| null|true|none|Date when project was published|
|title|string|true|none|Project title|
|url|string|true|none|Api endpoint|
|collaborators|[[Collaborator](#schemacollaborator)]|true|none|List of project collaborators|
|description|string|true|none|Project description|
|figshare_url|string \| null|true|none|Project public url|
|funding|string|true|none|Project funding|
|funding_list|[[FundingInformation](#schemafundinginformation)]|true|none|Full Project funding information|

<h2 id="tocS_ProjectCompletePrivate">ProjectCompletePrivate</h2>
<!-- backwards compatibility -->
<a id="schemaprojectcompleteprivate"></a>
<a id="schema_ProjectCompletePrivate"></a>
<a id="tocSprojectcompleteprivate"></a>
<a id="tocsprojectcompleteprivate"></a>

```json
{
  "id": 1,
  "published_date": "2017-05-16T14:55:08Z",
  "title": "project",
  "url": "http://api.figshare.com/v2/account/projects/1",
  "role": "Owner",
  "storage": "individual",
  "account_id": 1000001,
  "collaborators": [
    {
      "name": "name",
      "role_name": "Owner",
      "user_id": 1
    }
  ],
  "created_date": "2017-05-16T14:52:54Z",
  "custom_fields": [
    {
      "is_mandatory": false,
      "name": "key",
      "value": "value"
    }
  ],
  "description": "description",
  "figshare_url": "https://figshare.com/projects/project/1",
  "funding": "none",
  "funding_list": [
    {
      "funder_name": "string",
      "grant_code": "string",
      "id": 1,
      "is_user_defined": true,
      "title": "Scholarly funding",
      "url": "https://app.dimensions.ai/details/grant/1"
    }
  ],
  "group_id": 0,
  "modified_date": "2017-05-16T14:52:54Z",
  "quota": 0,
  "used_quota": 0,
  "used_quota_private": 0,
  "used_quota_public": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|Project id|
|published_date|string \| null|true|none|Date when project was published|
|title|string|true|none|Project title|
|url|string|true|none|Api endpoint|
|role|string|true|none|Role inside this project|
|storage|string|true|none|Project storage type|
|account_id|integer(int64)|true|none|ID of the account owning the project|
|collaborators|[[Collaborator](#schemacollaborator)]|true|none|List of project collaborators|
|created_date|string|true|none|Date when project was created|
|custom_fields|[[CustomArticleField](#schemacustomarticlefield)]|true|none|Collection custom fields|
|description|string|true|none|Project description|
|figshare_url|string \| null|true|none|Project public url|
|funding|string|true|none|Project funding|
|funding_list|[[FundingInformation](#schemafundinginformation)]|true|none|Full Project funding information|
|group_id|integer(int64)|true|none|Group of project if any|
|modified_date|string|true|none|Date when project was last modified|
|quota|integer(int64)|true|none|Project quota|
|used_quota|integer(int64)|true|none|Project used quota|
|used_quota_private|integer(int64)|true|none|Project private quota used|
|used_quota_public|integer(int64)|true|none|Project public quota used|

#### Enumerated Values

|Property|Value|
|---|---|
|role|Owner|
|role|Collaborator|
|role|Viewer|
|storage|individual|
|storage|group|

<h2 id="tocS_ProjectCreate">ProjectCreate</h2>
<!-- backwards compatibility -->
<a id="schemaprojectcreate"></a>
<a id="schema_ProjectCreate"></a>
<a id="tocSprojectcreate"></a>
<a id="tocsprojectcreate"></a>

```json
{
  "custom_fields": {
    "defined_key": "value for it"
  },
  "custom_fields_list": [
    {
      "name": "key",
      "value": "value"
    }
  ],
  "description": "project description",
  "funding": "",
  "funding_list": [
    {
      "id": 0,
      "title": "string"
    }
  ],
  "group_id": 0,
  "title": "project title"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|custom_fields|object|false|none|List of key, values pairs to be associated with the project|
|custom_fields_list|[[CustomArticleFieldAdd](#schemacustomarticlefieldadd)]|false|none|List of custom fields values, supersedes custom_fields parameter|
|description|string|false|none|Project description|
|funding|string|false|none|Grant number or organization(s) that funded this project. Up to 2000 characters permitted.|
|funding_list|[[FundingCreate](#schemafundingcreate)]|false|none|Funding creation / update items|
|group_id|integer(int64)|false|none|Only if project type is group.|
|title|string|true|none|The title for this project - mandatory. 3 - 1000 characters.|

<h2 id="tocS_ProjectNote">ProjectNote</h2>
<!-- backwards compatibility -->
<a id="schemaprojectnote"></a>
<a id="schema_ProjectNote"></a>
<a id="tocSprojectnote"></a>
<a id="tocsprojectnote"></a>

```json
{
  "abstract": "text",
  "created_date": "2017-05-16T16:49:11Z",
  "id": 1,
  "modified_date": "2017-05-16T16:49:11Z",
  "user_id": 100008,
  "user_name": "user"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abstract|string|true|none|Note Abstract - short/truncated content|
|created_date|string|true|none|Date when note was created|
|id|integer(int64)|true|none|Project note id|
|modified_date|string|true|none|Date when note was last modified|
|user_id|integer(int64)|true|none|User who wrote the note|
|user_name|string|true|none|Username of the one who wrote the note|

<h2 id="tocS_ProjectNoteCreate">ProjectNoteCreate</h2>
<!-- backwards compatibility -->
<a id="schemaprojectnotecreate"></a>
<a id="schema_ProjectNoteCreate"></a>
<a id="tocSprojectnotecreate"></a>
<a id="tocsprojectnotecreate"></a>

```json
{
  "text": "note to remember"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|Text of the note|

<h2 id="tocS_ProjectNotePrivate">ProjectNotePrivate</h2>
<!-- backwards compatibility -->
<a id="schemaprojectnoteprivate"></a>
<a id="schema_ProjectNotePrivate"></a>
<a id="tocSprojectnoteprivate"></a>
<a id="tocsprojectnoteprivate"></a>

```json
{
  "abstract": "text",
  "created_date": "2017-05-16T16:49:11Z",
  "id": 1,
  "modified_date": "2017-05-16T16:49:11Z",
  "user_id": 100008,
  "user_name": "user",
  "text": "text"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abstract|string|true|none|Note Abstract - short/truncated content|
|created_date|string|true|none|Date when note was created|
|id|integer(int64)|true|none|Project note id|
|modified_date|string|true|none|Date when note was last modified|
|user_id|integer(int64)|true|none|User who wrote the note|
|user_name|string|true|none|Username of the one who wrote the note|
|text|string|true|none|Full text of note|

<h2 id="tocS_ProjectPrivate">ProjectPrivate</h2>
<!-- backwards compatibility -->
<a id="schemaprojectprivate"></a>
<a id="schema_ProjectPrivate"></a>
<a id="tocSprojectprivate"></a>
<a id="tocsprojectprivate"></a>

```json
{
  "id": 1,
  "published_date": "2017-05-16T14:55:08Z",
  "title": "project",
  "url": "http://api.figshare.com/v2/account/projects/1",
  "role": "Owner",
  "storage": "individual"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|Project id|
|published_date|string \| null|true|none|Date when project was published|
|title|string|true|none|Project title|
|url|string|true|none|Api endpoint|
|role|string|true|none|Role inside this project|
|storage|string|true|none|Project storage type|

#### Enumerated Values

|Property|Value|
|---|---|
|role|Owner|
|role|Collaborator|
|role|Viewer|
|storage|individual|
|storage|group|

<h2 id="tocS_ProjectUpdate">ProjectUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaprojectupdate"></a>
<a id="schema_ProjectUpdate"></a>
<a id="tocSprojectupdate"></a>
<a id="tocsprojectupdate"></a>

```json
{
  "custom_fields": {
    "defined_key": "value for it"
  },
  "custom_fields_list": [
    {
      "name": "key",
      "value": "value"
    }
  ],
  "description": "project description",
  "funding": "",
  "funding_list": [
    {
      "id": 0,
      "title": "string"
    }
  ],
  "title": "project title"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|custom_fields|object|false|none|List of key, values pairs to be associated with the project|
|custom_fields_list|[[CustomArticleFieldAdd](#schemacustomarticlefieldadd)]|false|none|List of custom fields values, supersedes custom_fields parameter|
|description|string|false|none|Project description|
|funding|string|false|none|Grant number or organization(s) that funded this project. Up to 2000 characters permitted.|
|funding_list|[[FundingCreate](#schemafundingcreate)]|false|none|Funding creation / update items|
|title|string|false|none|The title for this project - mandatory. 3 - 1000 characters.|

<h2 id="tocS_ProjectsSearch">ProjectsSearch</h2>
<!-- backwards compatibility -->
<a id="schemaprojectssearch"></a>
<a id="schema_ProjectsSearch"></a>
<a id="tocSprojectssearch"></a>
<a id="tocsprojectssearch"></a>

```json
{
  "group": 2000013,
  "institution": 2000013,
  "limit": 10,
  "modified_since": "2017-12-22",
  "offset": 0,
  "order_direction": "desc",
  "page": 1,
  "page_size": 10,
  "published_since": "2017-12-22",
  "search_for": "figshare",
  "order": "published_date"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group|integer(int32)|false|none|only return collections from this group|
|institution|integer(int32)|false|none|only return collections from this institution|
|limit|integer(int64)|false|none|Number of results included on a page. Used for pagination with query|
|modified_since|string|false|none|Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD|
|offset|integer(int64)|false|none|Where to start the listing(the offset of the first result). Used for pagination with limit|
|order_direction|string|false|none|Direction of ordering|
|page|integer(int64)|false|none|Page number. Used for pagination with page_size|
|page_size|integer(int64)|false|none|The number of results included on a page. Used for pagination with page|
|published_since|string|false|none|Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD|
|search_for|string|false|none|Search term|
|order|string|false|none|The field by which to order.|

#### Enumerated Values

|Property|Value|
|---|---|
|order_direction|asc|
|order_direction|desc|
|order|published_date|
|order|modified_date|
|order|views|

<h2 id="tocS_PublicFile">PublicFile</h2>
<!-- backwards compatibility -->
<a id="schemapublicfile"></a>
<a id="schema_PublicFile"></a>
<a id="tocSpublicfile"></a>
<a id="tocspublicfile"></a>

```json
{
  "computed_md5": "043a51806d646e88cafbf19e7b82846f",
  "download_url": "https://ndownloader.figshare.com/files/3000002",
  "id": 3000002,
  "is_link_only": false,
  "name": "test.xls",
  "size": 14848,
  "supplied_md5": "043a51806d646e88cafbf19e7b82846f"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|computed_md5|string|true|none|File computed md5|
|download_url|string(url)|true|none|Url for file download|
|id|integer(int64)|true|none|File id|
|is_link_only|boolean|true|none|True if file is hosted somewhere else|
|name|string|true|none|File name|
|size|integer(int64)|true|none|File size|
|supplied_md5|string|true|none|File supplied md5|

<h2 id="tocS_Resource">Resource</h2>
<!-- backwards compatibility -->
<a id="schemaresource"></a>
<a id="schema_Resource"></a>
<a id="tocSresource"></a>
<a id="tocsresource"></a>

```json
{
  "doi": "",
  "id": "aaaa23512",
  "link": "https://docs.figshare.com",
  "status": "frozen",
  "title": "Test title",
  "version": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|doi|string|false|none|DOI of resource item|
|id|string|false|none|ID of resource item|
|link|string|false|none|Link of resource item|
|status|string|false|none|Status of resource item|
|title|string|false|none|Title of resource item|
|version|integer(int64)|false|none|Version of resource item|

<h2 id="tocS_ResponseMessage">ResponseMessage</h2>
<!-- backwards compatibility -->
<a id="schemaresponsemessage"></a>
<a id="schema_ResponseMessage"></a>
<a id="tocSresponsemessage"></a>
<a id="tocsresponsemessage"></a>

```json
{
  "message": "Project 1 has been published"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|Response message text|

<h2 id="tocS_Role">Role</h2>
<!-- backwards compatibility -->
<a id="schemarole"></a>
<a id="schema_Role"></a>
<a id="tocSrole"></a>
<a id="tocsrole"></a>

```json
{
  "category": "group",
  "description": "string",
  "id": 1,
  "name": "Curator"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|Role category|
|description|string|true|none|Role description|
|id|integer(int64)|true|none|Role id|
|name|string|true|none|Role name|

<h2 id="tocS_ShortAccount">ShortAccount</h2>
<!-- backwards compatibility -->
<a id="schemashortaccount"></a>
<a id="schema_ShortAccount"></a>
<a id="tocSshortaccount"></a>
<a id="tocsshortaccount"></a>

```json
{
  "active": 0,
  "email": "user@domain.com",
  "first_name": "Doe",
  "id": 1495682,
  "institution_id": 1,
  "institution_user_id": 1,
  "last_name": "John",
  "orcid_id": "0000-0001-2345-6789",
  "quota": 1074000000,
  "used_quota": 1074000000,
  "user_id": 1000001
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|integer(int64)|true|none|Account activity status|
|email|string|true|none|User email|
|first_name|string|true|none|First Name|
|id|integer(int64)|true|none|Account id|
|institution_id|integer(int64)|true|none|Account institution|
|institution_user_id|string|true|none|Account institution user id|
|last_name|string|true|none|Last Name|
|orcid_id|string|true|none|ORCID iD associated to account|
|quota|integer(int64)|true|none|Total storage available to account, in bytes|
|used_quota|integer(int64)|true|none|Storage used by the account, in bytes|
|user_id|integer(int64)|true|none|User id associated with account, useful for example for adding the account as an author to an item|

<h2 id="tocS_ShortCustomField">ShortCustomField</h2>
<!-- backwards compatibility -->
<a id="schemashortcustomfield"></a>
<a id="schema_ShortCustomField"></a>
<a id="tocSshortcustomfield"></a>
<a id="tocsshortcustomfield"></a>

```json
{
  "field_type": "textarea",
  "id": 365,
  "name": "my custom field"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field_type|string|true|none|Custom field type|
|id|integer(int64)|true|none|Custom field id|
|name|string|true|none|Custom field name|

#### Enumerated Values

|Property|Value|
|---|---|
|field_type|text|
|field_type|textarea|
|field_type|dropdown|
|field_type|url|
|field_type|email|
|field_type|date|
|field_type|dropdown_large_list|

<h2 id="tocS_Timeline">Timeline</h2>
<!-- backwards compatibility -->
<a id="schematimeline"></a>
<a id="schema_Timeline"></a>
<a id="tocStimeline"></a>
<a id="tocstimeline"></a>

```json
{
  "firstOnline": "2015-12-31",
  "publisherAcceptance": "2015-12-31",
  "publisherPublication": "2015-12-31",
  "posted": "2015-12-31",
  "revision": "2015-12-31",
  "submission": "2015-12-31"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstOnline|string|true|none|Online posted date|
|publisherAcceptance|string|true|none|Date when the item was accepted for publication|
|publisherPublication|string|true|none|Publish date|
|posted|string \| null|true|none|Posted date|
|revision|string \| null|true|none|Revision date from curation (if curated)|
|submission|string \| null|true|none|Submission date in curation (if curated)|

<h2 id="tocS_TimelineUpdate">TimelineUpdate</h2>
<!-- backwards compatibility -->
<a id="schematimelineupdate"></a>
<a id="schema_TimelineUpdate"></a>
<a id="tocStimelineupdate"></a>
<a id="tocstimelineupdate"></a>

```json
{
  "firstOnline": "2015-12-31",
  "publisherAcceptance": "2015-12-31",
  "publisherPublication": "2015-12-31"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstOnline|string|false|none|Online posted date|
|publisherAcceptance|string|false|none|Date when the item was accepted for publication|
|publisherPublication|string|false|none|Publish date|

<h2 id="tocS_UploadFilePart">UploadFilePart</h2>
<!-- backwards compatibility -->
<a id="schemauploadfilepart"></a>
<a id="schema_UploadFilePart"></a>
<a id="tocSuploadfilepart"></a>
<a id="tocsuploadfilepart"></a>

```json
{
  "endOffset": 69,
  "locked": true,
  "partNo": 1,
  "startOffset": 0,
  "status": "PENDING"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endOffset|integer(int64)|false|none|Indexes on byte range. zero-based and inclusive|
|locked|boolean|false|none|When a part is being uploaded it is being locked, by setting the locked flag to true. No changes/uploads can happen on this part from other requests.|
|partNo|integer(int64)|false|none|File part id|
|startOffset|integer(int64)|false|none|Indexes on byte range. zero-based and inclusive|
|status|string|false|none|part status|

#### Enumerated Values

|Property|Value|
|---|---|
|status|PENDING|
|status|COMPLETE|

<h2 id="tocS_UploadInfo">UploadInfo</h2>
<!-- backwards compatibility -->
<a id="schemauploadinfo"></a>
<a id="schema_UploadInfo"></a>
<a id="tocSuploadinfo"></a>
<a id="tocsuploadinfo"></a>

```json
{
  "md5": "3a7f451c068f4e13260034c611378140",
  "name": "3000017/test.py",
  "parts": [
    {
      "endOffset": 69,
      "locked": true,
      "partNo": 1,
      "startOffset": 0,
      "status": "PENDING"
    }
  ],
  "size": 70,
  "status": "PENDING",
  "token": "693a2802-cd61-430d-b89f-507f0f6d8fd3"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|md5|string|false|none|md5 provided on upload initialization|
|name|string|false|none|name of file on upload server|
|parts|[[UploadFilePart](#schemauploadfilepart)]|false|none|Uploads parts|
|size|integer(int64)|false|none|size of file in bytes|
|status|string|false|none|Upload status|
|token|string|false|none|token received after initializing a file upload|

#### Enumerated Values

|Property|Value|
|---|---|
|status|PENDING|
|status|COMPLETED|
|status|ABORTED|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "first_name": "Doe",
  "id": 1495682,
  "is_active": true,
  "is_public": true,
  "job_title": "programmer",
  "last_name": "John",
  "name": "John Doe",
  "orcid_id": "1234-5678-9123-1234",
  "url_name": "John_Doe"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string|true|none|First Name|
|id|integer(int64)|true|none|User id|
|is_active|boolean|true|none|Account activity status|
|is_public|boolean|true|none|Account public status|
|job_title|string|true|none|User Job title|
|last_name|string|true|none|Last Name|
|name|string|true|none|Full Name|
|orcid_id|string|true|none|Orcid associated to this User|
|url_name|string|true|none|Name that appears in website url|
