<h1 id="area120-tables-api">Area120 Tables API v1alpha1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://area120tables.googleapis.com/">https://area120tables.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://support.google.com/area120-tables/answer/10011390">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/drive|See, edit, create, and delete all of your Google Drive files|
|https://www.googleapis.com/auth/drive.file|See, edit, create, and delete only the specific Google Drive files you use with this app|
|https://www.googleapis.com/auth/drive.readonly|See and download all your Google Drive files|
|https://www.googleapis.com/auth/spreadsheets|See, edit, create, and delete all your Google Sheets spreadsheets|
|https://www.googleapis.com/auth/spreadsheets.readonly|See all your Google Sheets spreadsheets|
|https://www.googleapis.com/auth/tables|See, edit, create, and delete your tables in Tables by Area 120|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/drive|See, edit, create, and delete all of your Google Drive files|
|https://www.googleapis.com/auth/drive.file|See, edit, create, and delete only the specific Google Drive files you use with this app|
|https://www.googleapis.com/auth/drive.readonly|See and download all your Google Drive files|
|https://www.googleapis.com/auth/spreadsheets|See, edit, create, and delete all your Google Sheets spreadsheets|
|https://www.googleapis.com/auth/spreadsheets.readonly|See all your Google Sheets spreadsheets|
|https://www.googleapis.com/auth/tables|See, edit, create, and delete your tables in Tables by Area 120|

<h1 id="area120-tables-api-tables">tables</h1>

## area120tables.tables.list

<a id="opIdarea120tables.tables.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/tables \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/tables`

Lists tables for the user.

<h3 id="area120tablestableslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderBy|query|string|false|Optional. Sorting order for the list of tables on createTime/updateTime.|
|pageSize|query|integer|false|The maximum number of tables to return. The service may return fewer than this value. If unspecified, at most 20 tables are returned. The maximum value is 100; values above 100 are coerced to 100.|
|pageToken|query|string|false|A page token, received from a previous `ListTables` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTables` must match the call that provided the page token.|
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
  "tables": [
    {
      "columns": [
        {
          "dataType": "string",
          "dateDetails": {
            "hasTime": true
          },
          "id": "string",
          "labels": [
            {
              "id": "string",
              "name": "string"
            }
          ],
          "lookupDetails": {
            "relationshipColumn": "string",
            "relationshipColumnId": "string"
          },
          "multipleValuesDisallowed": true,
          "name": "string",
          "readonly": true,
          "relationshipDetails": {
            "linkedTable": "string"
          }
        }
      ],
      "createTime": "string",
      "displayName": "string",
      "name": "string",
      "savedViews": [
        {
          "id": "string",
          "name": "string"
        }
      ],
      "timeZone": "string",
      "updateTime": "string"
    }
  ]
}
```

<h3 id="area120tablestableslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListTablesResponse](#schemalisttablesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spreadsheets ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spreadsheets ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spreadsheets.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spreadsheets.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tables ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tables )
</aside>

## area120tables.tables.rows.delete

<a id="opIdarea120tables.tables.rows.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1alpha1/{name}`

Deletes a row.

<h3 id="area120tablestablesrowsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the row to delete. Format: tables/{table}/rows/{row}|
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
{}
```

<h3 id="area120tablestablesrowsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spreadsheets ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spreadsheets ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tables ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tables )
</aside>

## area120tables.tables.rows.patch

<a id="opIdarea120tables.tables.rows.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "createTime": "string",
    "name": "string",
    "updateTime": "string",
    "values": {
      "property1": null,
      "property2": null
    }
  }'
```

`PATCH /v1alpha1/{name}`

Updates a row.

> Body parameter

```json
{
  "createTime": "string",
  "name": "string",
  "updateTime": "string",
  "values": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="area120tablestablesrowspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource name of the row. Row names have the form `tables/{table}/rows/{row}`. The name is ignored when creating a row.|
|updateMask|query|string|false|The list of fields to update.|
|view|query|string|false|Optional. Column key to use for values in the row. Defaults to user entered name.|
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
|body|body|[Row](#schemarow)|false|none|
|» createTime|body|string(google-datetime)|false|Time when the row was created.|
|» name|body|string|false|The resource name of the row. Row names have the form `tables/{table}/rows/{row}`. The name is ignored when creating a row.|
|» updateTime|body|string(google-datetime)|false|Time when the row was last updated.|
|» values|body|object|false|The values of the row. This is a map of column key to value. Key is user entered name(default) or the internal column id based on the view in the request.|
|» » **additionalProperties**|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|view|VIEW_UNSPECIFIED|
|view|COLUMN_ID_VIEW|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "createTime": "string",
  "name": "string",
  "updateTime": "string",
  "values": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="area120tablestablesrowspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Row](#schemarow)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spreadsheets ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spreadsheets ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tables ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tables )
</aside>

## area120tables.tables.rows.list

<a id="opIdarea120tables.tables.rows.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/rows \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{parent}/rows`

Lists rows in a table. Returns NOT_FOUND if the table does not exist.

<h3 id="area120tablestablesrowslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent table. Format: tables/{table}|
|filter|query|string|false|Optional. Filter to only include resources matching the requirements. For more information, see [Filtering list results](https://support.google.com/area120-tables/answer/10503371).|
|orderBy|query|string|false|Optional. Sorting order for the list of rows on createTime/updateTime.|
|pageSize|query|integer|false|The maximum number of rows to return. The service may return fewer than this value. If unspecified, at most 50 rows are returned. The maximum value is 1,000; values above 1,000 are coerced to 1,000.|
|pageToken|query|string|false|A page token, received from a previous `ListRows` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRows` must match the call that provided the page token.|
|view|query|string|false|Optional. Column key to use for values in the row. Defaults to user entered name.|
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
|view|VIEW_UNSPECIFIED|
|view|COLUMN_ID_VIEW|
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
  "rows": [
    {
      "createTime": "string",
      "name": "string",
      "updateTime": "string",
      "values": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

<h3 id="area120tablestablesrowslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListRowsResponse](#schemalistrowsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spreadsheets ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spreadsheets ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spreadsheets.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spreadsheets.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tables ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tables )
</aside>

## area120tables.tables.rows.create

<a id="opIdarea120tables.tables.rows.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/rows \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "createTime": "string",
    "name": "string",
    "updateTime": "string",
    "values": {
      "property1": null,
      "property2": null
    }
  }'
```

`POST /v1alpha1/{parent}/rows`

Creates a row.

> Body parameter

```json
{
  "createTime": "string",
  "name": "string",
  "updateTime": "string",
  "values": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="area120tablestablesrowscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent table where this row will be created. Format: tables/{table}|
|view|query|string|false|Optional. Column key to use for values in the row. Defaults to user entered name.|
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
|body|body|[Row](#schemarow)|false|none|
|» createTime|body|string(google-datetime)|false|Time when the row was created.|
|» name|body|string|false|The resource name of the row. Row names have the form `tables/{table}/rows/{row}`. The name is ignored when creating a row.|
|» updateTime|body|string(google-datetime)|false|Time when the row was last updated.|
|» values|body|object|false|The values of the row. This is a map of column key to value. Key is user entered name(default) or the internal column id based on the view in the request.|
|» » **additionalProperties**|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|view|VIEW_UNSPECIFIED|
|view|COLUMN_ID_VIEW|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "createTime": "string",
  "name": "string",
  "updateTime": "string",
  "values": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="area120tablestablesrowscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Row](#schemarow)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spreadsheets ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spreadsheets ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tables ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tables )
</aside>

## area120tables.tables.rows.batchCreate

<a id="opIdarea120tables.tables.rows.batchCreate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/rows:batchCreate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requests": [
      {
        "parent": "string",
        "row": {
          "createTime": "string",
          "name": "string",
          "updateTime": "string",
          "values": {
            "property1": null,
            "property2": null
          }
        },
        "view": "VIEW_UNSPECIFIED"
      }
    ]
  }'
```

`POST /v1alpha1/{parent}/rows:batchCreate`

Creates multiple rows.

> Body parameter

```json
{
  "requests": [
    {
      "parent": "string",
      "row": {
        "createTime": "string",
        "name": "string",
        "updateTime": "string",
        "values": {
          "property1": null,
          "property2": null
        }
      },
      "view": "VIEW_UNSPECIFIED"
    }
  ]
}
```

<h3 id="area120tablestablesrowsbatchcreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent table where the rows will be created. Format: tables/{table}|
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
|body|body|[BatchCreateRowsRequest](#schemabatchcreaterowsrequest)|false|none|
|» requests|body|[[CreateRowRequest](#schemacreaterowrequest)]|false|Required. The request message specifying the rows to create. A maximum of 500 rows can be created in a single batch.|

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
  "rows": [
    {
      "createTime": "string",
      "name": "string",
      "updateTime": "string",
      "values": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

<h3 id="area120tablestablesrowsbatchcreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BatchCreateRowsResponse](#schemabatchcreaterowsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spreadsheets ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spreadsheets ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tables ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tables )
</aside>

## area120tables.tables.rows.batchDelete

<a id="opIdarea120tables.tables.rows.batchDelete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/rows:batchDelete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "names": [
      "string"
    ]
  }'
```

`POST /v1alpha1/{parent}/rows:batchDelete`

Deletes multiple rows.

> Body parameter

```json
{
  "names": [
    "string"
  ]
}
```

<h3 id="area120tablestablesrowsbatchdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent table shared by all rows being deleted. Format: tables/{table}|
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
|body|body|[BatchDeleteRowsRequest](#schemabatchdeleterowsrequest)|false|none|
|» names|body|[string]|false|Required. The names of the rows to delete. All rows must belong to the parent table or else the entire batch will fail. A maximum of 500 rows can be deleted in a batch. Format: tables/{table}/rows/{row}|

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
{}
```

<h3 id="area120tablestablesrowsbatchdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spreadsheets ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spreadsheets ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tables ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tables )
</aside>

## area120tables.tables.rows.batchUpdate

<a id="opIdarea120tables.tables.rows.batchUpdate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/rows:batchUpdate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requests": [
      {
        "row": {
          "createTime": "string",
          "name": "string",
          "updateTime": "string",
          "values": {
            "property1": null,
            "property2": null
          }
        },
        "updateMask": "string",
        "view": "VIEW_UNSPECIFIED"
      }
    ]
  }'
```

`POST /v1alpha1/{parent}/rows:batchUpdate`

Updates multiple rows.

> Body parameter

```json
{
  "requests": [
    {
      "row": {
        "createTime": "string",
        "name": "string",
        "updateTime": "string",
        "values": {
          "property1": null,
          "property2": null
        }
      },
      "updateMask": "string",
      "view": "VIEW_UNSPECIFIED"
    }
  ]
}
```

<h3 id="area120tablestablesrowsbatchupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent table shared by all rows being updated. Format: tables/{table}|
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
|body|body|[BatchUpdateRowsRequest](#schemabatchupdaterowsrequest)|false|none|
|» requests|body|[[UpdateRowRequest](#schemaupdaterowrequest)]|false|Required. The request messages specifying the rows to update. A maximum of 500 rows can be modified in a single batch.|

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
  "rows": [
    {
      "createTime": "string",
      "name": "string",
      "updateTime": "string",
      "values": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

<h3 id="area120tablestablesrowsbatchupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BatchUpdateRowsResponse](#schemabatchupdaterowsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spreadsheets ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spreadsheets ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tables ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tables )
</aside>

<h1 id="area120-tables-api-workspaces">workspaces</h1>

## area120tables.workspaces.list

<a id="opIdarea120tables.workspaces.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/workspaces \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/workspaces`

Lists workspaces for the user.

<h3 id="area120tablesworkspaceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer|false|The maximum number of workspaces to return. The service may return fewer than this value. If unspecified, at most 10 workspaces are returned. The maximum value is 25; values above 25 are coerced to 25.|
|pageToken|query|string|false|A page token, received from a previous `ListWorkspaces` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkspaces` must match the call that provided the page token.|
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
  "workspaces": [
    {
      "createTime": "string",
      "displayName": "string",
      "name": "string",
      "tables": [
        {
          "columns": [
            {
              "dataType": "string",
              "dateDetails": {
                "hasTime": true
              },
              "id": "string",
              "labels": [
                {
                  "id": "string",
                  "name": "string"
                }
              ],
              "lookupDetails": {
                "relationshipColumn": "string",
                "relationshipColumnId": "string"
              },
              "multipleValuesDisallowed": true,
              "name": "string",
              "readonly": true,
              "relationshipDetails": {
                "linkedTable": "string"
              }
            }
          ],
          "createTime": "string",
          "displayName": "string",
          "name": "string",
          "savedViews": [
            {
              "id": "string",
              "name": "string"
            }
          ],
          "timeZone": "string",
          "updateTime": "string"
        }
      ],
      "updateTime": "string"
    }
  ]
}
```

<h3 id="area120tablesworkspaceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListWorkspacesResponse](#schemalistworkspacesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spreadsheets ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spreadsheets ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spreadsheets.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spreadsheets.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tables ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tables )
</aside>

## area120tables.workspaces.get

<a id="opIdarea120tables.workspaces.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{name}`

Gets a workspace. Returns NOT_FOUND if the workspace does not exist.

<h3 id="area120tablesworkspacesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the workspace to retrieve. Format: workspaces/{workspace}|
|view|query|string|false|Optional. Column key to use for values in the row. Defaults to user entered name.|
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
|view|VIEW_UNSPECIFIED|
|view|COLUMN_ID_VIEW|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "createTime": "string",
  "displayName": "string",
  "name": "string",
  "tables": [
    {
      "columns": [
        {
          "dataType": "string",
          "dateDetails": {
            "hasTime": true
          },
          "id": "string",
          "labels": [
            {
              "id": "string",
              "name": "string"
            }
          ],
          "lookupDetails": {
            "relationshipColumn": "string",
            "relationshipColumnId": "string"
          },
          "multipleValuesDisallowed": true,
          "name": "string",
          "readonly": true,
          "relationshipDetails": {
            "linkedTable": "string"
          }
        }
      ],
      "createTime": "string",
      "displayName": "string",
      "name": "string",
      "savedViews": [
        {
          "id": "string",
          "name": "string"
        }
      ],
      "timeZone": "string",
      "updateTime": "string"
    }
  ],
  "updateTime": "string"
}
```

<h3 id="area120tablesworkspacesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Workspace](#schemaworkspace)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/drive ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.file ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.file ), Oauth2 ( Scopes: https://www.googleapis.com/auth/drive.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/drive.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spreadsheets ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spreadsheets ), Oauth2 ( Scopes: https://www.googleapis.com/auth/spreadsheets.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/spreadsheets.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tables ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tables )
</aside>

# Schemas

<h2 id="tocS_BatchCreateRowsRequest">BatchCreateRowsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreaterowsrequest"></a>
<a id="schema_BatchCreateRowsRequest"></a>
<a id="tocSbatchcreaterowsrequest"></a>
<a id="tocsbatchcreaterowsrequest"></a>

```json
{
  "requests": [
    {
      "parent": "string",
      "row": {
        "createTime": "string",
        "name": "string",
        "updateTime": "string",
        "values": {
          "property1": null,
          "property2": null
        }
      },
      "view": "VIEW_UNSPECIFIED"
    }
  ]
}
```

Request message for TablesService.BatchCreateRows.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requests|[[CreateRowRequest](#schemacreaterowrequest)]|false|none|Required. The request message specifying the rows to create. A maximum of 500 rows can be created in a single batch.|

<h2 id="tocS_BatchCreateRowsResponse">BatchCreateRowsResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchcreaterowsresponse"></a>
<a id="schema_BatchCreateRowsResponse"></a>
<a id="tocSbatchcreaterowsresponse"></a>
<a id="tocsbatchcreaterowsresponse"></a>

```json
{
  "rows": [
    {
      "createTime": "string",
      "name": "string",
      "updateTime": "string",
      "values": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

Response message for TablesService.BatchCreateRows.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[[Row](#schemarow)]|false|none|The created rows.|

<h2 id="tocS_BatchDeleteRowsRequest">BatchDeleteRowsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeleterowsrequest"></a>
<a id="schema_BatchDeleteRowsRequest"></a>
<a id="tocSbatchdeleterowsrequest"></a>
<a id="tocsbatchdeleterowsrequest"></a>

```json
{
  "names": [
    "string"
  ]
}
```

Request message for TablesService.BatchDeleteRows

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|names|[string]|false|none|Required. The names of the rows to delete. All rows must belong to the parent table or else the entire batch will fail. A maximum of 500 rows can be deleted in a batch. Format: tables/{table}/rows/{row}|

<h2 id="tocS_BatchUpdateRowsRequest">BatchUpdateRowsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchupdaterowsrequest"></a>
<a id="schema_BatchUpdateRowsRequest"></a>
<a id="tocSbatchupdaterowsrequest"></a>
<a id="tocsbatchupdaterowsrequest"></a>

```json
{
  "requests": [
    {
      "row": {
        "createTime": "string",
        "name": "string",
        "updateTime": "string",
        "values": {
          "property1": null,
          "property2": null
        }
      },
      "updateMask": "string",
      "view": "VIEW_UNSPECIFIED"
    }
  ]
}
```

Request message for TablesService.BatchUpdateRows.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requests|[[UpdateRowRequest](#schemaupdaterowrequest)]|false|none|Required. The request messages specifying the rows to update. A maximum of 500 rows can be modified in a single batch.|

<h2 id="tocS_BatchUpdateRowsResponse">BatchUpdateRowsResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchupdaterowsresponse"></a>
<a id="schema_BatchUpdateRowsResponse"></a>
<a id="tocSbatchupdaterowsresponse"></a>
<a id="tocsbatchupdaterowsresponse"></a>

```json
{
  "rows": [
    {
      "createTime": "string",
      "name": "string",
      "updateTime": "string",
      "values": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

Response message for TablesService.BatchUpdateRows.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rows|[[Row](#schemarow)]|false|none|The updated rows.|

<h2 id="tocS_ColumnDescription">ColumnDescription</h2>
<!-- backwards compatibility -->
<a id="schemacolumndescription"></a>
<a id="schema_ColumnDescription"></a>
<a id="tocScolumndescription"></a>
<a id="tocscolumndescription"></a>

```json
{
  "dataType": "string",
  "dateDetails": {
    "hasTime": true
  },
  "id": "string",
  "labels": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "lookupDetails": {
    "relationshipColumn": "string",
    "relationshipColumnId": "string"
  },
  "multipleValuesDisallowed": true,
  "name": "string",
  "readonly": true,
  "relationshipDetails": {
    "linkedTable": "string"
  }
}
```

Details on a column in the table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataType|string|false|none|Data type of the column Supported types are auto_id, boolean, boolean_list, creator, create_timestamp, date, dropdown, location, integer, integer_list, number, number_list, person, person_list, tags, check_list, text, text_list, update_timestamp, updater, relationship, file_attachment_list. These types directly map to the column types supported on Tables website.|
|dateDetails|[DateDetails](#schemadatedetails)|false|none|Optional. Additional details about a date column.|
|id|string|false|none|Internal id for a column.|
|labels|[[LabeledItem](#schemalabeleditem)]|false|none|Optional. Range of labeled values for the column. Some columns like tags and drop-downs limit the values to a set of possible values. We return the range of values in such cases to help clients implement better user data validation.|
|lookupDetails|[LookupDetails](#schemalookupdetails)|false|none|Optional. Indicates that this is a lookup column whose value is derived from the relationship column specified in the details. Lookup columns can not be updated directly. To change the value you must update the associated relationship column.|
|multipleValuesDisallowed|boolean|false|none|Optional. Indicates whether or not multiple values are allowed for array types where such a restriction is possible.|
|name|string|false|none|column name|
|readonly|boolean|false|none|Optional. Indicates that values for the column cannot be set by the user.|
|relationshipDetails|[RelationshipDetails](#schemarelationshipdetails)|false|none|Optional. Additional details about a relationship column. Specified when data_type is relationship.|

<h2 id="tocS_CreateRowRequest">CreateRowRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreaterowrequest"></a>
<a id="schema_CreateRowRequest"></a>
<a id="tocScreaterowrequest"></a>
<a id="tocscreaterowrequest"></a>

```json
{
  "parent": "string",
  "row": {
    "createTime": "string",
    "name": "string",
    "updateTime": "string",
    "values": {
      "property1": null,
      "property2": null
    }
  },
  "view": "VIEW_UNSPECIFIED"
}
```

Request message for TablesService.CreateRow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parent|string|false|none|Required. The parent table where this row will be created. Format: tables/{table}|
|row|[Row](#schemarow)|false|none|Required. The row to create.|
|view|string|false|none|Optional. Column key to use for values in the row. Defaults to user entered name.|

#### Enumerated Values

|Property|Value|
|---|---|
|view|VIEW_UNSPECIFIED|
|view|COLUMN_ID_VIEW|

<h2 id="tocS_DateDetails">DateDetails</h2>
<!-- backwards compatibility -->
<a id="schemadatedetails"></a>
<a id="schema_DateDetails"></a>
<a id="tocSdatedetails"></a>
<a id="tocsdatedetails"></a>

```json
{
  "hasTime": true
}
```

Details about a date column.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hasTime|boolean|false|none|Whether the date column includes time.|

<h2 id="tocS_Empty">Empty</h2>
<!-- backwards compatibility -->
<a id="schemaempty"></a>
<a id="schema_Empty"></a>
<a id="tocSempty"></a>
<a id="tocsempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

<h2 id="tocS_LabeledItem">LabeledItem</h2>
<!-- backwards compatibility -->
<a id="schemalabeleditem"></a>
<a id="schema_LabeledItem"></a>
<a id="tocSlabeleditem"></a>
<a id="tocslabeleditem"></a>

```json
{
  "id": "string",
  "name": "string"
}
```

A single item in a labeled column.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Internal id associated with the item.|
|name|string|false|none|Display string as entered by user.|

<h2 id="tocS_ListRowsResponse">ListRowsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrowsresponse"></a>
<a id="schema_ListRowsResponse"></a>
<a id="tocSlistrowsresponse"></a>
<a id="tocslistrowsresponse"></a>

```json
{
  "nextPageToken": "string",
  "rows": [
    {
      "createTime": "string",
      "name": "string",
      "updateTime": "string",
      "values": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

Response message for TablesService.ListRows.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages.|
|rows|[[Row](#schemarow)]|false|none|The rows from the specified table.|

<h2 id="tocS_ListTablesResponse">ListTablesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttablesresponse"></a>
<a id="schema_ListTablesResponse"></a>
<a id="tocSlisttablesresponse"></a>
<a id="tocslisttablesresponse"></a>

```json
{
  "nextPageToken": "string",
  "tables": [
    {
      "columns": [
        {
          "dataType": "string",
          "dateDetails": {
            "hasTime": true
          },
          "id": "string",
          "labels": [
            {
              "id": "string",
              "name": "string"
            }
          ],
          "lookupDetails": {
            "relationshipColumn": "string",
            "relationshipColumnId": "string"
          },
          "multipleValuesDisallowed": true,
          "name": "string",
          "readonly": true,
          "relationshipDetails": {
            "linkedTable": "string"
          }
        }
      ],
      "createTime": "string",
      "displayName": "string",
      "name": "string",
      "savedViews": [
        {
          "id": "string",
          "name": "string"
        }
      ],
      "timeZone": "string",
      "updateTime": "string"
    }
  ]
}
```

Response message for TablesService.ListTables.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages.|
|tables|[[Table](#schematable)]|false|none|The list of tables.|

<h2 id="tocS_ListWorkspacesResponse">ListWorkspacesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistworkspacesresponse"></a>
<a id="schema_ListWorkspacesResponse"></a>
<a id="tocSlistworkspacesresponse"></a>
<a id="tocslistworkspacesresponse"></a>

```json
{
  "nextPageToken": "string",
  "workspaces": [
    {
      "createTime": "string",
      "displayName": "string",
      "name": "string",
      "tables": [
        {
          "columns": [
            {
              "dataType": "string",
              "dateDetails": {
                "hasTime": true
              },
              "id": "string",
              "labels": [
                {
                  "id": "string",
                  "name": "string"
                }
              ],
              "lookupDetails": {
                "relationshipColumn": "string",
                "relationshipColumnId": "string"
              },
              "multipleValuesDisallowed": true,
              "name": "string",
              "readonly": true,
              "relationshipDetails": {
                "linkedTable": "string"
              }
            }
          ],
          "createTime": "string",
          "displayName": "string",
          "name": "string",
          "savedViews": [
            {
              "id": "string",
              "name": "string"
            }
          ],
          "timeZone": "string",
          "updateTime": "string"
        }
      ],
      "updateTime": "string"
    }
  ]
}
```

Response message for TablesService.ListWorkspaces.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages.|
|workspaces|[[Workspace](#schemaworkspace)]|false|none|The list of workspaces.|

<h2 id="tocS_LookupDetails">LookupDetails</h2>
<!-- backwards compatibility -->
<a id="schemalookupdetails"></a>
<a id="schema_LookupDetails"></a>
<a id="tocSlookupdetails"></a>
<a id="tocslookupdetails"></a>

```json
{
  "relationshipColumn": "string",
  "relationshipColumnId": "string"
}
```

Details about a lookup column whose value comes from the associated relationship.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|relationshipColumn|string|false|none|The name of the relationship column associated with the lookup.|
|relationshipColumnId|string|false|none|The id of the relationship column.|

<h2 id="tocS_RelationshipDetails">RelationshipDetails</h2>
<!-- backwards compatibility -->
<a id="schemarelationshipdetails"></a>
<a id="schema_RelationshipDetails"></a>
<a id="tocSrelationshipdetails"></a>
<a id="tocsrelationshipdetails"></a>

```json
{
  "linkedTable": "string"
}
```

Details about a relationship column.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|linkedTable|string|false|none|The name of the table this relationship is linked to.|

<h2 id="tocS_Row">Row</h2>
<!-- backwards compatibility -->
<a id="schemarow"></a>
<a id="schema_Row"></a>
<a id="tocSrow"></a>
<a id="tocsrow"></a>

```json
{
  "createTime": "string",
  "name": "string",
  "updateTime": "string",
  "values": {
    "property1": null,
    "property2": null
  }
}
```

A single row in a table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Time when the row was created.|
|name|string|false|none|The resource name of the row. Row names have the form `tables/{table}/rows/{row}`. The name is ignored when creating a row.|
|updateTime|string(google-datetime)|false|none|Time when the row was last updated.|
|values|object|false|none|The values of the row. This is a map of column key to value. Key is user entered name(default) or the internal column id based on the view in the request.|

<h2 id="tocS_SavedView">SavedView</h2>
<!-- backwards compatibility -->
<a id="schemasavedview"></a>
<a id="schema_SavedView"></a>
<a id="tocSsavedview"></a>
<a id="tocssavedview"></a>

```json
{
  "id": "string",
  "name": "string"
}
```

A saved view of a table. NextId: 3

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Internal id associated with the saved view.|
|name|string|false|none|Display name of the saved view.|

<h2 id="tocS_Table">Table</h2>
<!-- backwards compatibility -->
<a id="schematable"></a>
<a id="schema_Table"></a>
<a id="tocStable"></a>
<a id="tocstable"></a>

```json
{
  "columns": [
    {
      "dataType": "string",
      "dateDetails": {
        "hasTime": true
      },
      "id": "string",
      "labels": [
        {
          "id": "string",
          "name": "string"
        }
      ],
      "lookupDetails": {
        "relationshipColumn": "string",
        "relationshipColumnId": "string"
      },
      "multipleValuesDisallowed": true,
      "name": "string",
      "readonly": true,
      "relationshipDetails": {
        "linkedTable": "string"
      }
    }
  ],
  "createTime": "string",
  "displayName": "string",
  "name": "string",
  "savedViews": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "timeZone": "string",
  "updateTime": "string"
}
```

A single table. NextId: 8

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columns|[[ColumnDescription](#schemacolumndescription)]|false|none|List of columns in this table. Order of columns matches the display order.|
|createTime|string(google-datetime)|false|none|Time when the table was created.|
|displayName|string|false|none|The human readable title of the table.|
|name|string|false|none|The resource name of the table. Table names have the form `tables/{table}`.|
|savedViews|[[SavedView](#schemasavedview)]|false|none|Saved views for this table.|
|timeZone|string|false|none|The time zone of the table. IANA Time Zone Database time zone, e.g. "America/New_York".|
|updateTime|string(google-datetime)|false|none|Time when the table was last updated excluding updates to individual rows|

<h2 id="tocS_UpdateRowRequest">UpdateRowRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdaterowrequest"></a>
<a id="schema_UpdateRowRequest"></a>
<a id="tocSupdaterowrequest"></a>
<a id="tocsupdaterowrequest"></a>

```json
{
  "row": {
    "createTime": "string",
    "name": "string",
    "updateTime": "string",
    "values": {
      "property1": null,
      "property2": null
    }
  },
  "updateMask": "string",
  "view": "VIEW_UNSPECIFIED"
}
```

Request message for TablesService.UpdateRow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|row|[Row](#schemarow)|false|none|Required. The row to update.|
|updateMask|string(google-fieldmask)|false|none|The list of fields to update.|
|view|string|false|none|Optional. Column key to use for values in the row. Defaults to user entered name.|

#### Enumerated Values

|Property|Value|
|---|---|
|view|VIEW_UNSPECIFIED|
|view|COLUMN_ID_VIEW|

<h2 id="tocS_Workspace">Workspace</h2>
<!-- backwards compatibility -->
<a id="schemaworkspace"></a>
<a id="schema_Workspace"></a>
<a id="tocSworkspace"></a>
<a id="tocsworkspace"></a>

```json
{
  "createTime": "string",
  "displayName": "string",
  "name": "string",
  "tables": [
    {
      "columns": [
        {
          "dataType": "string",
          "dateDetails": {
            "hasTime": true
          },
          "id": "string",
          "labels": [
            {
              "id": "string",
              "name": "string"
            }
          ],
          "lookupDetails": {
            "relationshipColumn": "string",
            "relationshipColumnId": "string"
          },
          "multipleValuesDisallowed": true,
          "name": "string",
          "readonly": true,
          "relationshipDetails": {
            "linkedTable": "string"
          }
        }
      ],
      "createTime": "string",
      "displayName": "string",
      "name": "string",
      "savedViews": [
        {
          "id": "string",
          "name": "string"
        }
      ],
      "timeZone": "string",
      "updateTime": "string"
    }
  ],
  "updateTime": "string"
}
```

A single workspace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Time when the workspace was created.|
|displayName|string|false|none|The human readable title of the workspace.|
|name|string|false|none|The resource name of the workspace. Workspace names have the form `workspaces/{workspace}`.|
|tables|[[Table](#schematable)]|false|none|The list of tables in the workspace.|
|updateTime|string(google-datetime)|false|none|Time when the workspace was last updated.|
