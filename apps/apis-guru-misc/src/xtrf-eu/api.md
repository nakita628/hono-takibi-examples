<h1 id="xtrf-home-portal-api">XTRF Home Portal API v2.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

XTRF Home Portal API enables you to perform operations on Projects, Quotes, Customers, Vendors etc. as a XTRF Home Portal user. <br>The documentation is generated from OpenAPI specification 3.0 available <a href="/home-api/openapi.json">here</a> <br>
  The API client/consumer code may be easily generated in 60+ programming languages using an open source code generator available at the time of writing this documentation at <a href='https://editor.swagger.io/'>https://editor.swagger.io/</a> Thank you for using XTRF Application Programming interface (XTRF API). By using the API you agree to the terms below. If you disagree with any of these terms, XTRF does not grant you a license to use the XTRF API. XTRF reserves the right to update and change these terms from time to time without a prior notice of API users. You can always find the most recent version of these terms here:

Base URLs:

* <a href="https://presentation.s.xtrf.eu/home-api">https://presentation.s.xtrf.eu/home-api</a>

<a href="https://legal.xtrf.eu/2017/products/GeneralTermsAndConditions.pdf">Terms of service</a>
License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

# Authentication

* API Key (X-AUTH-ACCESS-TOKEN)
    - Parameter Name: **X-AUTH-ACCESS-TOKEN**, in: header.

<h1 id="xtrf-home-portal-api-browser">Browser</h1>

To change the description use /examples/TagsDescriptions.json

## Searches for data (ie. customer, task, etc) and returns it in a tabular form.

<a id="opIdbrowseJSON"></a>

> Code samples

```bash
curl https://example.com/browser \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /browser`

Searches for data (ie. customer, task, etc) and returns it in a tabular form.

<h3 id="searches-for-data-ie-customer-task-etc-and-returns-it-in-a-tabular-form-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|viewId|query|integer(int64)|false|view's identifier|
|page|query|integer(int32)|false|none|
|additionalOrder|query|string|false|none|
|useDeferredColumns|query|string|false|none|
|maxRows|query|integer(int32)|false|overrides view's default rows limit, supported values 10 to 1000|

> Example responses

> default Response

```json
"/home-api/assets/examples/browsers/browseProjects.json#responseBody"
```

<h3 id="searches-for-data-ie-customer-task-etc-and-returns-it-in-a-tabular-form-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Searches for data (ie. customer, task, etc) and returns it in a CSV form.

<a id="opIdbrowseCSV"></a>

> Code samples

```bash
curl https://example.com/browser/csv \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /browser/csv`

Searches for data (ie. customer, task, etc) and returns it in a CSV form.

<h3 id="searches-for-data-ie-customer-task-etc-and-returns-it-in-a-csv-form-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|viewId|query|integer(int64)|false|view's identifier|
|separator|query|string|false|csv field separator|
|secondarySeparator|query|string|false|secondary csv field separator|
|additionalOrder|query|string|false|none|

> Example responses

> default Response

```json
"/home-api/assets/examples/browsers/exportToCSV.json#responseBody"
```

<h3 id="searches-for-data-ie-customer-task-etc-and-returns-it-in-a-csv-form-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns current view's detailed information, suitable for browser.

<a id="opIdgetCurrentViewDetails"></a>

> Code samples

```bash
curl https://example.com/browser/views/details/for/string \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /browser/views/details/for/{className}`

Returns current view's detailed information, suitable for browser.

<h3 id="returns-current-views-detailed-information-suitable-for-browser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|className|path|string|true|views' class name|
|placeName|query|string|false|place name (denotes specific place in system with the table)|

> Example responses

> default Response

```json
"/home-api/assets/examples/browsers/views/getCurrentDetails.json#responseBody"
```

<h3 id="returns-current-views-detailed-information-suitable-for-browser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ViewDetailsDTO](#schemaviewdetailsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns view's detailed information, suitable for browser.

<a id="opIdgetViewDetails"></a>

> Code samples

```bash
curl https://example.com/browser/views/details/for/string/0 \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /browser/views/details/for/{className}/{viewId}`

Returns view's detailed information, suitable for browser.

<h3 id="returns-views-detailed-information-suitable-for-browser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|className|path|string|true|views' class name|
|placeName|query|string|false|place name (denotes specific place in system with the table)|
|viewId|path|integer(int64)|true|none|

> Example responses

> default Response

```json
"/home-api/assets/examples/browsers/views/getDetails.json#responseBody"
```

<h3 id="returns-views-detailed-information-suitable-for-browser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ViewDetailsDTO](#schemaviewdetailsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Selects given view as current and returns its detailed information, suitable for browser.

<a id="opIdselectViewAndGetItsDetails"></a>

> Code samples

```bash
curl https://example.com/browser/views/details/for/string/0 \
  -X POST \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`POST /browser/views/details/for/{className}/{viewId}`

Selects given view as current and returns its detailed information, suitable for browser.

<h3 id="selects-given-view-as-current-and-returns-its-detailed-information-suitable-for-browser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|className|path|string|true|views' class name|
|place name (denotes specific place in system with the table)|query|string|false|none|
|viewId|path|integer(int64)|true|none|

> Example responses

> default Response

```json
"/home-api/assets/examples/browsers/views/selectViewAndGetItsDetails.json#responseBody"
```

<h3 id="selects-given-view-as-current-and-returns-its-detailed-information-suitable-for-browser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ViewDetailsDTO](#schemaviewdetailsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns views' brief.

<a id="opIdgetViewsBrief"></a>

> Code samples

```bash
curl https://example.com/browser/views/for/string \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /browser/views/for/{className}`

Returns views' brief.

<h3 id="returns-views-brief-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|className|path|string|true|views' class name|
|placeName|query|string|false|place name (denotes specific place in system with the table)|

> Example responses

> default Response

```json
"/home-api/assets/examples/browsers/views/getViewsBrief.json#responseBody"
```

<h3 id="returns-views-brief-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ViewsBriefDTO](#schemaviewsbriefdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Creates view for given class.

<a id="opIdcreate"></a>

> Code samples

```bash
curl https://example.com/browser/views/for/string \
  -X POST \
  -H 'Content-Type: application/json;charset=UTF-8' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '{
    "columns": [
      {
        "name": "string",
        "settings": {}
      }
    ],
    "order": {
      "column": "string",
      "type": "string"
    },
    "permissions": {
      "sharedGroups": [
        0
      ]
    },
    "settings": {
      "local": {
        "maxLinesInRow": 0,
        "maxRows": 0
      },
      "name": "string"
    }
  }'
```

`POST /browser/views/for/{className}`

Creates view for given class.

> Body parameter

```json
{
  "columns": [
    {
      "name": "string",
      "settings": {}
    }
  ],
  "order": {
    "column": "string",
    "type": "string"
  },
  "permissions": {
    "sharedGroups": [
      0
    ]
  },
  "settings": {
    "local": {
      "maxLinesInRow": 0,
      "maxRows": 0
    },
    "name": "string"
  }
}
```

<h3 id="creates-view-for-given-class-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|className|path|string|true|view's class name|
|body|body|[ViewDTO](#schemaviewdto)|true|Created view for given class.|
|» columns|body|[[ColumnDTO](#schemacolumndto)]|false|none|
|» order|body|[OrderDTO](#schemaorderdto)|false|none|
|» permissions|body|[PermissionsDTO](#schemapermissionsdto)|false|none|
|» settings|body|[SettingsDTO](#schemasettingsdto)|false|none|

> Example responses

> default Response

```json
"/home-api/assets/examples/browsers/views/create.json#responseBody"
```

<h3 id="creates-view-for-given-class-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ViewWithIdDTO](#schemaviewwithiddto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns all view's information.

<a id="opIdget"></a>

> Code samples

```bash
curl https://example.com/browser/views/0 \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /browser/views/{viewId}`

Returns all view's information (ie. name, columns, filters, etc).

<h3 id="returns-all-views-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|viewId|path|integer(int64)|true|view's identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/browsers/views/get.json#responseBody"
```

<h3 id="returns-all-views-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ViewDTO](#schemaviewdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates all view's information.

<a id="opIdupdate"></a>

> Code samples

```bash
curl https://example.com/browser/views/0 \
  -X PUT \
  -H 'Content-Type: application/json;charset=UTF-8' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '{
    "columns": [
      {
        "name": "string",
        "settings": {}
      }
    ],
    "order": {
      "column": "string",
      "type": "string"
    },
    "permissions": {
      "sharedGroups": [
        0
      ]
    },
    "settings": {
      "local": {
        "maxLinesInRow": 0,
        "maxRows": 0
      },
      "name": "string"
    }
  }'
```

`PUT /browser/views/{viewId}`

Updates all view's information (ie. name, columns, filters, etc).

> Body parameter

```json
{
  "columns": [
    {
      "name": "string",
      "settings": {}
    }
  ],
  "order": {
    "column": "string",
    "type": "string"
  },
  "permissions": {
    "sharedGroups": [
      0
    ]
  },
  "settings": {
    "local": {
      "maxLinesInRow": 0,
      "maxRows": 0
    },
    "name": "string"
  }
}
```

<h3 id="updates-all-views-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|viewId|path|integer(int64)|true|view's identifier|
|body|body|[ViewDTO](#schemaviewdto)|true|Updated all view's information.|
|» columns|body|[[ColumnDTO](#schemacolumndto)]|false|none|
|» order|body|[OrderDTO](#schemaorderdto)|false|none|
|» permissions|body|[PermissionsDTO](#schemapermissionsdto)|false|none|
|» settings|body|[SettingsDTO](#schemasettingsdto)|false|none|

> Example responses

> default Response

```json
"/home-api/assets/examples/browsers/views/update.json#responseBody"
```

<h3 id="updates-all-views-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ViewDTO](#schemaviewdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Removes a view.

<a id="opIddelete"></a>

> Code samples

```bash
curl https://example.com/browser/views/0 \
  -X DELETE \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`DELETE /browser/views/{viewId}`

Removes a view. No content is returned upon success (204).

<h3 id="removes-a-view-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|viewId|path|integer(int64)|true|view's internal identifier|

<h3 id="removes-a-view-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns columns defined in view.

<a id="opIdgetColumns"></a>

> Code samples

```bash
curl https://example.com/browser/views/0/columns \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /browser/views/{viewId}/columns`

Returns columns defined in view.

<h3 id="returns-columns-defined-in-view-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|viewId|path|integer(int64)|true|view's identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/browsers/views/getColumns.json#responseBody"
```

<h3 id="returns-columns-defined-in-view-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|Inline|

<h3 id="returns-columns-defined-in-view-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ColumnDTO](#schemacolumndto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates columns in view.

<a id="opIdupdateColumns"></a>

> Code samples

```bash
curl https://example.com/browser/views/0/columns \
  -X PUT \
  -H 'Content-Type: application/json;charset=UTF-8' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/browsers/views/updateColumns.json#requestBody"'
```

`PUT /browser/views/{viewId}/columns`

Updates columns in view.

> Body parameter

```json
"/home-api/assets/examples/browsers/views/updateColumns.json#requestBody"
```

<h3 id="updates-columns-in-view-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|viewId|path|integer(int64)|true|view's identifier|
|body|body|[[ColumnDTO](#schemacolumndto)]|true|Updated columns in view.|

> Example responses

> default Response

```json
"/home-api/assets/examples/browsers/views/updateColumns.json#responseBody"
```

<h3 id="updates-columns-in-view-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|Inline|

<h3 id="updates-columns-in-view-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ColumnDTO](#schemacolumndto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Deletes a single column from view.

<a id="opIddeleteColumn"></a>

> Code samples

```bash
curl https://example.com/browser/views/0/columns/string \
  -X DELETE \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`DELETE /browser/views/{viewId}/columns/{columnName}`

Deletes a single column from view.

<h3 id="deletes-a-single-column-from-view-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|viewId|path|integer(int64)|true|view's identifier|
|columnName|path|string|true|column's name|

> Example responses

> default Response

```json
"/home-api/assets/examples/browsers/views/deleteColumn.json#responseBody"
```

<h3 id="deletes-a-single-column-from-view-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|Inline|

<h3 id="deletes-a-single-column-from-view-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ColumnDTO](#schemacolumndto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns column's specific settings.

<a id="opIdgetColumnSettings"></a>

> Code samples

```bash
curl https://example.com/browser/views/0/columns/string/settings \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /browser/views/{viewId}/columns/{columnName}/settings`

Returns column's specific settings. For example when column describes money amount we can decide whether it should display currency or not.

<h3 id="returns-columns-specific-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|viewId|path|integer(int64)|true|view's identifier|
|columnName|path|string|true|column's name|

> Example responses

> default Response

```json
"/home-api/assets/examples/browsers/views/getColumnSettings.json#responseBody"
```

<h3 id="returns-columns-specific-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates column's specific settings.

<a id="opIdupdateColumnSettings"></a>

> Code samples

```bash
curl https://example.com/browser/views/0/columns/string/settings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/browsers/views/updateColumnSettings.json#requestBody"'
```

`PUT /browser/views/{viewId}/columns/{columnName}/settings`

Updates column's specific settings. For example when column describes money amount we can decide whether it should display currency or not.

> Body parameter

```json
"/home-api/assets/examples/browsers/views/updateColumnSettings.json#requestBody"
```

<h3 id="updates-columns-specific-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|viewId|path|integer(int64)|true|view's identifier|
|columnName|path|string|true|column's name|
|body|body|object|true|Updated column's specific settings.|

> Example responses

> default Response

```json
"/home-api/assets/examples/browsers/views/updateColumnSettings.json#responseBody"
```

<h3 id="updates-columns-specific-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns view's filter.

<a id="opIdgetFilter"></a>

> Code samples

```bash
curl https://example.com/browser/views/0/filter \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /browser/views/{viewId}/filter`

Returns view's filter.

<h3 id="returns-views-filter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|viewId|path|integer(int64)|true|view's identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/browsers/views/filter/getTextProperty.json#responseBody"
```

<h3 id="returns-views-filter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[FilterDTO](#schemafilterdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates view's filter.

<a id="opIdupdateFilter"></a>

> Code samples

```bash
curl https://example.com/browser/views/0/filter \
  -X PUT \
  -H 'Content-Type: application/json;charset=UTF-8' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/browsers/views/updateFilter.json#requestBody"'
```

`PUT /browser/views/{viewId}/filter`

Updates view's filter.

> Body parameter

```json
"/home-api/assets/examples/browsers/views/updateFilter.json#requestBody"
```

<h3 id="updates-views-filter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|viewId|path|integer(int64)|true|view's identifier|
|body|body|[[FilterPropertyDTO](#schemafilterpropertydto)]|true|Updated view's filter.|

> Example responses

> default Response

```json
"/home-api/assets/examples/browsers/views/updateFilter.json#responseBody"
```

<h3 id="updates-views-filter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[FilterDTO](#schemafilterdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates view's filter property.

<a id="opIdupdateFilterProperty"></a>

> Code samples

```bash
curl https://example.com/browser/views/0/filter/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/browsers/views/updateFilterProperty.json#requestBody"'
```

`PUT /browser/views/{viewId}/filter/{filterProperty}`

Updates view's filter property.

> Body parameter

```json
"/home-api/assets/examples/browsers/views/updateFilterProperty.json#requestBody"
```

<h3 id="updates-views-filter-property-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|viewId|path|integer(int64)|true|view's identifier|
|filterProperty|path|string|true|view's filter property name|
|body|body|[FilterPropertyDTO](#schemafilterpropertydto)|true|Updated view's filter property.|
|» name|body|string|false|none|
|» settings|body|object|false|none|
|» settingsPresent|body|boolean|false|none|
|» type|body|string|false|none|

> Example responses

> default Response

```json
"/home-api/assets/examples/browsers/views/updateFilterProperty.json#responseBody"
```

<h3 id="updates-views-filter-property-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns view's order settings.

<a id="opIdgetOrder"></a>

> Code samples

```bash
curl https://example.com/browser/views/0/order \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /browser/views/{viewId}/order`

Returns view's order settings.

<h3 id="returns-views-order-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|viewId|path|integer(int64)|true|view's identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/browsers/views/getOrder.json#responseBody"
```

<h3 id="returns-views-order-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[OrderDTO](#schemaorderdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates view's order settings.

<a id="opIdupdateOrder"></a>

> Code samples

```bash
curl https://example.com/browser/views/0/order \
  -X PUT \
  -H 'Content-Type: application/json;charset=UTF-8' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/browsers/views/updateOrder.json#requestBody"'
```

`PUT /browser/views/{viewId}/order`

Updates view's order settings.

> Body parameter

```json
"/home-api/assets/examples/browsers/views/updateOrder.json#requestBody"
```

<h3 id="updates-views-order-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|viewId|path|integer(int64)|true|view's identifier|
|body|body|[OrderDTO](#schemaorderdto)|true|Updated view's order settings.|
|» column|body|string|false|none|
|» type|body|string|false|none|

> Example responses

> default Response

```json
"/home-api/assets/examples/browsers/views/updateOrder.json#responseBody"
```

<h3 id="updates-views-order-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[OrderDTO](#schemaorderdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns view's permissions.

<a id="opIdgetPermissions"></a>

> Code samples

```bash
curl https://example.com/browser/views/0/permissions \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /browser/views/{viewId}/permissions`

Returns view's permissions.

<h3 id="returns-views-permissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|viewId|path|integer(int64)|true|view's identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/browsers/views/getPermissions.json#responseBody"
```

<h3 id="returns-views-permissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[PermissionsDTO](#schemapermissionsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates view's permissions.

<a id="opIdupdatePermissions"></a>

> Code samples

```bash
curl https://example.com/browser/views/0/permissions \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/browsers/views/updatePermissions.json#requestBody"'
```

`PUT /browser/views/{viewId}/permissions`

Updates view's permissions.

> Body parameter

```json
"/home-api/assets/examples/browsers/views/updatePermissions.json#requestBody"
```

<h3 id="updates-views-permissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|viewId|path|integer(int64)|true|view's identifier|
|body|body|[PermissionsDTO](#schemapermissionsdto)|true|Updated view's permissions.|
|» sharedGroups|body|[integer(int64)]|false|none|

> Example responses

> default Response

```json
"/home-api/assets/examples/browsers/views/updatePermissions.json#responseBody"
```

<h3 id="updates-views-permissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[PermissionsDTO](#schemapermissionsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns view's settings.

<a id="opIdgetSettings"></a>

> Code samples

```bash
curl https://example.com/browser/views/0/settings \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /browser/views/{viewId}/settings`

Returns view's settings (ie. name).

<h3 id="returns-views-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|viewId|path|integer(int64)|true|view's identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/browsers/views/getSettings.json#responseBody"
```

<h3 id="returns-views-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[SettingsDTO](#schemasettingsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates view's settings.

<a id="opIdupdateSettings"></a>

> Code samples

```bash
curl https://example.com/browser/views/0/settings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/browsers/views/updateSettings.json#requestBody"'
```

`PUT /browser/views/{viewId}/settings`

Updates view's settings.

> Body parameter

```json
"/home-api/assets/examples/browsers/views/updateSettings.json#requestBody"
```

<h3 id="updates-views-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|viewId|path|integer(int64)|true|view's identifier|
|body|body|[SettingsDTO](#schemasettingsdto)|true|Updated view's settings.|
|» local|body|[LocalSettingsDTO](#schemalocalsettingsdto)|false|none|
|» name|body|string|false|none|

> Example responses

> default Response

```json
"/home-api/assets/examples/browsers/views/updateSettings.json#responseBody"
```

<h3 id="updates-views-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[SettingsDTO](#schemasettingsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns view's local settings (for current user).

<a id="opIdgetLocalSettings"></a>

> Code samples

```bash
curl https://example.com/browser/views/0/settings/local \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /browser/views/{viewId}/settings/local`

Returns view's local settings (for current user).

<h3 id="returns-views-local-settings-for-current-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|viewId|path|integer(int64)|true|view's identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/browsers/views/getLocalSettings.json#responseBody"
```

<h3 id="returns-views-local-settings-for-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[LocalSettingsDTO](#schemalocalsettingsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates view's local settings (for current user).

<a id="opIdupdateLocalSettings"></a>

> Code samples

```bash
curl https://example.com/browser/views/0/settings/local \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/browsers/views/updateLocalSettings.json#requestBody"'
```

`PUT /browser/views/{viewId}/settings/local`

Updates view's local settings (for current user).

> Body parameter

```json
"/home-api/assets/examples/browsers/views/updateLocalSettings.json#requestBody"
```

<h3 id="updates-views-local-settings-for-current-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|viewId|path|integer(int64)|true|view's identifier|
|body|body|[LocalSettingsDTO](#schemalocalsettingsdto)|true|Updated view's local settings (for current user).|
|» maxLinesInRow|body|integer(int32)|false|none|
|» maxRows|body|integer(int32)|false|none|

> Example responses

> default Response

```json
"/home-api/assets/examples/browsers/views/updateLocalSettings.json#responseBody"
```

<h3 id="updates-views-local-settings-for-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[LocalSettingsDTO](#schemalocalsettingsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

<h1 id="xtrf-home-portal-api-client-invoices">Client Invoices</h1>

To change the description use /examples/TagsDescriptions.json

## Lists all client invoices in all statuses (including not ready and drafts) that have been updated since a specific date.

<a id="opIdgetAll"></a>

> Code samples

```bash
curl https://example.com/accounting/customers/invoices \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /accounting/customers/invoices`

Lists all client invoices in all statuses (including not ready and drafts) that have been updated since a specific date.

<h3 id="lists-all-client-invoices-in-all-statuses-including-not-ready-and-drafts-that-have-been-updated-since-a-specific-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|updatedSince|query|integer(int64)|false|only client invoices modified since this timestamp|

> Example responses

> default Response

```json
"/home-api/assets/examples/accounting/customers/invoices/getAll.json#responseBody"
```

<h3 id="lists-all-client-invoices-in-all-statuses-including-not-ready-and-drafts-that-have-been-updated-since-a-specific-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|client invoices|Inline|

<h3 id="lists-all-client-invoices-in-all-statuses-including-not-ready-and-drafts-that-have-been-updated-since-a-specific-date-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CustomerInvoiceDTO](#schemacustomerinvoicedto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Creates a new invoice.

<a id="opIdcreate_1"></a>

> Code samples

```bash
curl https://example.com/accounting/customers/invoices \
  -X POST \
  -H 'Content-Type: application/json;charset=UTF-8' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/accounting/customers/invoices/createMultipleFromTasks.json#requestBody"'
```

`POST /accounting/customers/invoices`

Creates a new invoice from tasks. Tasks are grouped by client and currency, therefore multiple invoices can be created.If any of the tasks cannot be invoiced (ie. it is already invoiced, not invoiceable, not associated with a project) then an error is reported.

> Body parameter

```json
"/home-api/assets/examples/accounting/customers/invoices/createMultipleFromTasks.json#requestBody"
```

<h3 id="creates-a-new-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CustomerInvoiceCreateDTO](#schemacustomerinvoicecreatedto)|true|Created new invoice.|
|» prepaymentsIds|body|[integer(int64)]|false|none|
|» tasksIds|body|[integer(int64)]|false|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|FINAL|
|» type|DRAFT|
|» type|CREDIT_NOTE|

> Example responses

> default Response

```json
"/home-api/assets/examples/accounting/customers/invoices/createMultipleFromTasks.json#responseBody"
```

<h3 id="creates-a-new-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CustomerInvoiceCreateResultDTO](#schemacustomerinvoicecreateresultdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Generates client invoices' documents.

<a id="opIddownloadDocuments"></a>

> Code samples

```bash
curl https://example.com/accounting/customers/invoices/documents \
  -X POST \
  -H 'Content-Type: application/json;charset=UTF-8' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/accounting/customers/invoices/downloadDocuments.json#requestBody"'
```

`POST /accounting/customers/invoices/documents`

Generates client invoices' documents.

> Body parameter

```json
"/home-api/assets/examples/accounting/customers/invoices/downloadDocuments.json#requestBody"
```

<h3 id="generates-client-invoices-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DownloadDocumentsRequestDTO](#schemadownloaddocumentsrequestdto)|true|Generated client invoices documents.|
|» ids|body|[integer(int64)]|false|none|

> Example responses

> default Response

```json
"/home-api/assets/examples/accounting/customers/invoices/downloadDocuments.json#responseBody"
```

<h3 id="generates-client-invoices-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[UrlResultDTO](#schemaurlresultdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns client invoices' internal identifiers.

<a id="opIdgetAllIds"></a>

> Code samples

```bash
curl https://example.com/accounting/customers/invoices/ids \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /accounting/customers/invoices/ids`

Returns client invoices' internal identifiers.

<h3 id="returns-client-invoices-internal-identifiers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|updatedSince|query|integer(int64)|false|only client invoices modified since this timestamp|

> Example responses

> default Response

```json
"/home-api/assets/examples/accounting/customers/invoices/getIds.json#responseBody"
```

<h3 id="returns-client-invoices-internal-identifiers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|client invoices' internal identifiers|Inline|

<h3 id="returns-client-invoices-internal-identifiers-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Sends reminders. Returns number of sent e-mails.

<a id="opIdsendReminders"></a>

> Code samples

```bash
curl https://example.com/accounting/customers/invoices/sendReminders \
  -X POST \
  -H 'Content-Type: application/json;charset=UTF-8' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/accounting/customers/invoices/sendReminders.json#requestBody"'
```

`POST /accounting/customers/invoices/sendReminders`

Sends reminders. Returns number of sent e-mails.

> Body parameter

```json
"/home-api/assets/examples/accounting/customers/invoices/sendReminders.json#requestBody"
```

<h3 id="sends-reminders-returns-number-of-sent-e-mails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SendRemindersRequestDTO](#schemasendremindersrequestdto)|true|Number of sent e-mails.|
|» ids|body|[integer(int64)]|false|none|

> Example responses

> default Response

```json
"/home-api/assets/examples/accounting/customers/invoices/sendReminders.json#responseBody"
```

<h3 id="sends-reminders-returns-number-of-sent-e-mails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[SendRemindersResponseDTO](#schemasendremindersresponsedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns client invoice details.

<a id="opIdgetById"></a>

> Code samples

```bash
curl https://example.com/accounting/customers/invoices/0 \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /accounting/customers/invoices/{invoiceId}`

Returns client invoice details.

<h3 id="returns-client-invoice-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invoiceId|path|integer(int64)|true|client invoice's internal identifier|
|embed|query|string|false|list of adittional fields which should be embedded in the response (ie. tasks)|

> Example responses

> default Response

```json
"/home-api/assets/examples/accounting/customers/invoices/getById.json#responseBody"
```

<h3 id="returns-client-invoice-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CustomerInvoiceDTO](#schemacustomerinvoicedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Removes a client invoice.

<a id="opIddelete_1"></a>

> Code samples

```bash
curl https://example.com/accounting/customers/invoices/0 \
  -X DELETE \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`DELETE /accounting/customers/invoices/{invoiceId}`

Removes a client invoice.

<h3 id="removes-a-client-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invoiceId|path|integer(int64)|true|client invoice's internal identifier|

<h3 id="removes-a-client-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns dates of a given client invoice.

<a id="opIdgetDates"></a>

> Code samples

```bash
curl https://example.com/accounting/customers/invoices/0/dates \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /accounting/customers/invoices/{invoiceId}/dates`

Returns dates of a given client invoice.

<h3 id="returns-dates-of-a-given-client-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invoiceId|path|integer(int64)|true|client invoice's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/accounting/customers/invoices/getDates.json#responseBody"
```

<h3 id="returns-dates-of-a-given-client-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CustomerInvoiceDatesDTO](#schemacustomerinvoicedatesdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Generates client invoice document (PDF).

<a id="opIdgetDocument"></a>

> Code samples

```bash
curl https://example.com/accounting/customers/invoices/0/document \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /accounting/customers/invoices/{invoiceId}/document`

Generates client invoice document (PDF).

<h3 id="generates-client-invoice-document-pdf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invoiceId|path|integer(int64)|true|client invoice's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/accounting/customers/invoices/getDocument.json#responseBody"
```

<h3 id="generates-client-invoice-document-pdf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[UrlResultDTO](#schemaurlresultdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Duplicate client invoice.

<a id="opIdduplicate"></a>

> Code samples

```bash
curl https://example.com/accounting/customers/invoices/0/duplicate \
  -X POST \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`POST /accounting/customers/invoices/{invoiceId}/duplicate`

Duplicate client invoice.

<h3 id="duplicate-client-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invoiceId|path|integer(int64)|true|client invoice's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/accounting/customers/invoices/duplicate.json#responseBody"
```

<h3 id="duplicate-client-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CustomerInvoiceDTO](#schemacustomerinvoicedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Duplicate client invoice as pro forma.

<a id="opIdduplicateAsProForma"></a>

> Code samples

```bash
curl https://example.com/accounting/customers/invoices/0/duplicate/proForma \
  -X POST \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`POST /accounting/customers/invoices/{invoiceId}/duplicate/proForma`

Duplicate client invoice as pro forma.

<h3 id="duplicate-client-invoice-as-pro-forma-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invoiceId|path|integer(int64)|true|client invoice's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/accounting/customers/invoices/duplicateAsProForma.json#responseBody"
```

<h3 id="duplicate-client-invoice-as-pro-forma-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CustomerInvoiceDTO](#schemacustomerinvoicedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns payment terms of a given client invoice.

<a id="opIdgetPaymentTerms"></a>

> Code samples

```bash
curl https://example.com/accounting/customers/invoices/0/paymentTerms \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /accounting/customers/invoices/{invoiceId}/paymentTerms`

Returns payment terms of a given client invoice.

<h3 id="returns-payment-terms-of-a-given-client-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invoiceId|path|integer(int64)|true|client invoice's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/accounting/customers/invoices/getPaymentTerms.json#responseBody"
```

<h3 id="returns-payment-terms-of-a-given-client-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[PaymentTermsDTO](#schemapaymenttermsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns all payments for the client invoice.

<a id="opIdgetPayments"></a>

> Code samples

```bash
curl https://example.com/accounting/customers/invoices/0/payments \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /accounting/customers/invoices/{invoiceId}/payments`

Returns all payments for the client invoice.

<h3 id="returns-all-payments-for-the-client-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invoiceId|path|integer(int64)|true|client invoice's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/accounting/customers/invoices/getPayments.json#responseBody"
```

<h3 id="returns-all-payments-for-the-client-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|client invoice's payments|Inline|

<h3 id="returns-all-payments-for-the-client-invoice-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PaymentDTO](#schemapaymentdto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Adds a new payment to the client invoice. The invoice payment status (Not Paid, Partially Paid, Fully Paid) is automatically recalculated.

<a id="opIdcreatePayment"></a>

> Code samples

```bash
curl https://example.com/accounting/customers/invoices/0/payments \
  -X POST \
  -H 'Content-Type: application/json;charset=UTF-8' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/accounting/customers/invoices/createPayment.json#requestBody"'
```

`POST /accounting/customers/invoices/{invoiceId}/payments`

Adds a new payment to the client invoice. The invoice payment status (Not Paid, Partially Paid, Fully Paid) is automatically recalculated.

> Body parameter

```json
"/home-api/assets/examples/accounting/customers/invoices/createPayment.json#requestBody"
```

<h3 id="adds-a-new-payment-to-the-client-invoice-the-invoice-payment-status-not-paid-partially-paid-fully-paid-is-automatically-recalculated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invoiceId|path|integer(int64)|true|client invoice's internal identifier|
|body|body|[PaymentDTO](#schemapaymentdto)|true|New payment.|
|» amount|body|number|false|none|
|» notes|body|string|false|none|
|» paymentDate|body|[TimeDTO](#schematimedto)|false|none|
|» paymentMethodId|body|integer(int64)|false|none|

<h3 id="adds-a-new-payment-to-the-client-invoice-the-invoice-payment-status-not-paid-partially-paid-fully-paid-is-automatically-recalculated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Sends reminder.

<a id="opIdsendReminder"></a>

> Code samples

```bash
curl https://example.com/accounting/customers/invoices/0/sendReminder \
  -X POST \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`POST /accounting/customers/invoices/{invoiceId}/sendReminder`

Sends reminder.

<h3 id="sends-reminder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invoiceId|path|integer(int64)|true|client invoice's internal identifier|

<h3 id="sends-reminder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Removes a customer payment.

<a id="opIddelete_2"></a>

> Code samples

```bash
curl https://example.com/accounting/customers/payments/0 \
  -X DELETE \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`DELETE /accounting/customers/payments/{paymentId}`

Removes a customer payment.

<h3 id="removes-a-customer-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|paymentId|path|integer(int64)|true|customer payment's internal identifier|

<h3 id="removes-a-customer-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

<h1 id="xtrf-home-portal-api-clients">Clients</h1>

To change the description use /examples/TagsDescriptions.json

## Returns list of simple clients representations

<a id="opIdgetAllNamesWithIds"></a>

> Code samples

```bash
curl https://example.com/customers \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /customers`

Returns list of simple clients representations

<h3 id="returns-list-of-simple-clients-representations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|updatedSince|query|integer(int64)|false|only clients modified since this timestamp|

> Example responses

> default Response

```json
"/home-api/assets/examples/customers/getAllNamesWithIds.json#responseBody"
```

<h3 id="returns-list-of-simple-clients-representations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|Inline|

<h3 id="returns-list-of-simple-clients-representations-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[EntityWithNameDTO](#schemaentitywithnamedto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Creates a new client.

<a id="opIdcreate_3"></a>

> Code samples

```bash
curl https://example.com/customers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/customers/create.json#requestBody"'
```

`POST /customers`

Creates a new client. All available fields are presented in PUT request.<p>
  Required fields:
  <ul>
    <li>name</li>
    <li>fullName</li>
    <li>contact -> emails -> primary</li>
  </ul>
</p>


> Body parameter

```json
"/home-api/assets/examples/customers/create.json#requestBody"
```

<h3 id="creates-a-new-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CustomerDTO](#schemacustomerdto)|true|Created user object|
|» accountOnCustomerServer|body|string|false|none|
|» accounting|body|[CustomerAccountingDTO](#schemacustomeraccountingdto)|false|none|
|» billingAddress|body|[AddressDTO](#schemaaddressdto)|false|none|
|» branchId|body|integer(int64)|false|none|
|» categoriesIds|body|[integer(int64)]|false|none|
|» clientFirstProjectDate|body|string(date-time)|false|none|
|» clientFirstQuoteDate|body|string(date-time)|false|none|
|» clientLastProjectDate|body|string(date-time)|false|none|
|» clientLastQuoteDate|body|string(date-time)|false|none|
|» clientNumberOfProjects|body|integer(int32)|false|none|
|» clientNumberOfQuotes|body|integer(int32)|false|none|
|» contact|body|[ContactDTO](#schemacontactdto)|false|none|
|» contractNumber|body|string|false|none|
|» correspondenceAddress|body|[AddressDTO](#schemaaddressdto)|false|none|
|» customFields|body|[[CustomFieldDTO](#schemacustomfielddto)]|false|none|
|» fullName|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» idNumber|body|string|false|none|
|» industriesIds|body|[integer(int64)]|false|none|
|» leadSourceId|body|integer(int64)|false|none|
|» limitAccessToPeopleResponsible|body|boolean|false|none|
|» name|body|string|false|none|
|» notes|body|string|false|none|
|» persons|body|[[CustomerPersonDTO](#schemacustomerpersondto)]|false|none|
|» responsiblePersons|body|[CustomerResponsiblePersonsDTO](#schemacustomerresponsiblepersonsdto)|false|none|
|» salesNotes|body|string|false|none|
|» status|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|ACTIVE|
|» status|INACTIVE|
|» status|POTENTIAL|

> Example responses

> default Response

```json
"/home-api/assets/examples/customers/create.json#responseBody"
```

<h3 id="creates-a-new-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CustomerDTO](#schemacustomerdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns clients' internal identifiers.

<a id="opIdgetAllIds_2"></a>

> Code samples

```bash
curl https://example.com/customers/ids \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /customers/ids`

Returns clients' internal identifiers.

<h3 id="returns-clients-internal-identifiers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|updatedSince|query|integer(int64)|false|only clients modified since this timestamp|
|nameEquals|query|string|false|exact name of client|
|emailEquals|query|string|false|exact email of client|

> Example responses

> default Response

```json
"/home-api/assets/examples/customers/getIds.json#responseBody"
```

<h3 id="returns-clients-internal-identifiers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|Inline|

<h3 id="returns-clients-internal-identifiers-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Creates a new person.

<a id="opIdcreate_2"></a>

> Code samples

```bash
curl https://example.com/customers/persons \
  -X POST \
  -H 'Content-Type: application/json;charset=UTF-8' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/customers/persons/create.json#requestBody"'
```

`POST /customers/persons`

Creates a new person. Required fields are presented in the example. Other fields (from PUT) may also be specified here.

> Body parameter

```json
"/home-api/assets/examples/customers/persons/create.json#requestBody"
```

<h3 id="creates-a-new-person-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CustomerPersonDTO](#schemacustomerpersondto)|true|Brand new person.|
|» active|body|boolean|false|none|
|» contact|body|[PersonContactDTO](#schemapersoncontactdto)|false|none|
|» customFields|body|[[CustomFieldDTO](#schemacustomfielddto)]|false|none|
|» customerId|body|integer(int64)|false|none|
|» firstProjectDate|body|string(date-time)|false|none|
|» firstQuoteDate|body|string(date-time)|false|none|
|» gender|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» lastName|body|string|false|none|
|» lastProjectDate|body|string(date-time)|false|none|
|» lastQuoteDate|body|string(date-time)|false|none|
|» motherTonguesIds|body|[integer(int64)]|false|none|
|» name|body|string|false|none|
|» numberOfProjects|body|integer(int32)|false|none|
|» numberOfQuotes|body|integer(int32)|false|none|
|» positionId|body|integer(int64)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» gender|FEMALE|
|» gender|MALE|

> Example responses

> default Response

```json
"/home-api/assets/examples/customers/persons/create.json#responseBody"
```

<h3 id="creates-a-new-person-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CustomerPersonDTO](#schemacustomerpersondto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Generates a single use sign-in token.

<a id="opIdgenerateSingleUseSignInToken"></a>

> Code samples

```bash
curl https://example.com/customers/persons/accessToken \
  -X POST \
  -H 'Content-Type: application/json;charset=UTF-8' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/customers/persons/generateSingleUseSignInToken.json#requestBody"'
```

`POST /customers/persons/accessToken`

Generates a single use sign-in token for the customer person found for given login or e-mail. Returns 'url' and 'token' which allows to sign-in to customer portal as this person. Token is valid for two minutes and can be used only once. To sign-in to customer portal you should post 'token' provided as the 'accessToken' form param to the 'url' using POST method.Detailed description is available in the Customer API <a href="/api-doc/customer-api/authentication">authentication</a>.

> Body parameter

```json
"/home-api/assets/examples/customers/persons/generateSingleUseSignInToken.json#requestBody"
```

<h3 id="generates-a-single-use-sign-in-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AccessTokenRequestDTO](#schemaaccesstokenrequestdto)|true|Generated sign-in token.|
|» loginOrEmail|body|string|false|none|

> Example responses

> default Response

```json
"/home-api/assets/examples/customers/persons/generateSingleUseSignInToken.json#responseBody"
```

<h3 id="generates-a-single-use-sign-in-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[AccessTokenDTO](#schemaaccesstokendto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns persons' internal identifiers.

<a id="opIdgetAllIds_1"></a>

> Code samples

```bash
curl https://example.com/customers/persons/ids \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /customers/persons/ids`

Returns persons' internal identifiers.

<h3 id="returns-persons-internal-identifiers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|updatedSince|query|integer(int64)|false|only persons modified since this timestamp|

> Example responses

> default Response

```json
"/home-api/assets/examples/customers/persons/getIds.json#responseBody"
```

<h3 id="returns-persons-internal-identifiers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|Inline|

<h3 id="returns-persons-internal-identifiers-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns person details.

<a id="opIdgetById_1"></a>

> Code samples

```bash
curl https://example.com/customers/persons/0 \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /customers/persons/{personId}`

Returns person details.

<h3 id="returns-person-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|personId|path|integer(int64)|true|person's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/customers/persons/getById.json#responseBody"
```

<h3 id="returns-person-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CustomerPersonDTO](#schemacustomerpersondto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates an existing person.

<a id="opIdupdate_1"></a>

> Code samples

```bash
curl https://example.com/customers/persons/0 \
  -X PUT \
  -H 'Content-Type: application/json;charset=UTF-8' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/customers/persons/update.json#requestBody"'
```

`PUT /customers/persons/{personId}`

Only specified fields will be changed. One may not specify embeddable fields here - use separate API calls for updating them.

> Body parameter

```json
"/home-api/assets/examples/customers/persons/update.json#requestBody"
```

<h3 id="updates-an-existing-person-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|personId|path|integer(int64)|true|person's internal identifier|
|body|body|[CustomerPersonDTO](#schemacustomerpersondto)|true|Updated existing person.|
|» active|body|boolean|false|none|
|» contact|body|[PersonContactDTO](#schemapersoncontactdto)|false|none|
|» customFields|body|[[CustomFieldDTO](#schemacustomfielddto)]|false|none|
|» customerId|body|integer(int64)|false|none|
|» firstProjectDate|body|string(date-time)|false|none|
|» firstQuoteDate|body|string(date-time)|false|none|
|» gender|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» lastName|body|string|false|none|
|» lastProjectDate|body|string(date-time)|false|none|
|» lastQuoteDate|body|string(date-time)|false|none|
|» motherTonguesIds|body|[integer(int64)]|false|none|
|» name|body|string|false|none|
|» numberOfProjects|body|integer(int32)|false|none|
|» numberOfQuotes|body|integer(int32)|false|none|
|» positionId|body|integer(int64)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» gender|FEMALE|
|» gender|MALE|

> Example responses

> default Response

```json
"/home-api/assets/examples/customers/persons/update.json#responseBody"
```

<h3 id="updates-an-existing-person-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CustomerPersonDTO](#schemacustomerpersondto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Removes a person.

<a id="opIddelete_3"></a>

> Code samples

```bash
curl https://example.com/customers/persons/0 \
  -X DELETE \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`DELETE /customers/persons/{personId}`

Removes a person.

<h3 id="removes-a-person-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|personId|path|integer(int64)|true|person's internal identifier|

<h3 id="removes-a-person-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns contact of a given person.

<a id="opIdgetContact"></a>

> Code samples

```bash
curl https://example.com/customers/persons/0/contact \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /customers/persons/{personId}/contact`

Returns contact of a given person.

<h3 id="returns-contact-of-a-given-person-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|personId|path|integer(int64)|true|person's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/customers/persons/getContact.json#responseBody"
```

<h3 id="returns-contact-of-a-given-person-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[PersonContactDTO](#schemapersoncontactdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates contact of a given person.

<a id="opIdupdateContact"></a>

> Code samples

```bash
curl https://example.com/customers/persons/0/contact \
  -X PUT \
  -H 'Content-Type: application/json;charset=UTF-8' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/customers/persons/updateContact.json#requestBody"'
```

`PUT /customers/persons/{personId}/contact`

Updates contact of a given person. Sets that this person uses specific address and contact (not the one from customer).

> Body parameter

```json
"/home-api/assets/examples/customers/persons/updateContact.json#requestBody"
```

<h3 id="updates-contact-of-a-given-person-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|personId|path|integer(int64)|true|person's internal identifier|
|body|body|[PersonContactDTO](#schemapersoncontactdto)|true|Updated contact of a given person.|
|» emails|body|[PersonContactEmailsDTO](#schemapersoncontactemailsdto)|false|emails|
|» fax|body|string|false|fax number|
|» phones|body|[string]|false|phones' numbers|
|» sms|body|string|false|mobile phone for which SMS notifications will be sent (if configured)|

> Example responses

> default Response

```json
"/home-api/assets/examples/customers/persons/updateContact.json#responseBody"
```

<h3 id="updates-contact-of-a-given-person-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[PersonContactDTO](#schemapersoncontactdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns custom fields of a given person.

<a id="opIdgetCustomFields"></a>

> Code samples

```bash
curl https://example.com/customers/persons/0/customFields \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /customers/persons/{personId}/customFields`

Returns custom fields of a given person.

<h3 id="returns-custom-fields-of-a-given-person-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|personId|path|integer(int64)|true|person's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/customers/persons/getCustomFields.json#responseBody"
```

<h3 id="returns-custom-fields-of-a-given-person-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CustomFieldsDTO](#schemacustomfieldsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates custom fields of a given person.

<a id="opIdupdateCustomFields"></a>

> Code samples

```bash
curl https://example.com/customers/persons/0/customFields \
  -X PUT \
  -H 'Content-Type: application/json;charset=UTF-8' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/customers/persons/updateCustomFields.json#requestBody"'
```

`PUT /customers/persons/{personId}/customFields`

Updates custom fields of a given person.

> Body parameter

```json
"/home-api/assets/examples/customers/persons/updateCustomFields.json#requestBody"
```

<h3 id="updates-custom-fields-of-a-given-person-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|personId|path|integer(int64)|true|person's internal identifier|
|body|body|[CustomFieldsDTO](#schemacustomfieldsdto)|true|Updated custom fields of a given person.|

> Example responses

> default Response

```json
"/home-api/assets/examples/customers/persons/updateCustomFields.json#responseBody"
```

<h3 id="updates-custom-fields-of-a-given-person-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CustomFieldsDTO](#schemacustomfieldsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Removes a customer price list.

<a id="opIddelete_4"></a>

> Code samples

```bash
curl https://example.com/customers/priceLists/0 \
  -X DELETE \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`DELETE /customers/priceLists/{priceListId}`

Removes a customer price list.

<h3 id="removes-a-customer-price-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|priceListId|path|integer(int64)|true|customer price list's internal identifier|

<h3 id="removes-a-customer-price-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns client details.

<a id="opIdgetById_2"></a>

> Code samples

```bash
curl https://example.com/customers/0 \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /customers/{customerId}`

Returns client details.

<h3 id="returns-client-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|integer(int64)|true|client's internal identifier|
|embed|query|string|false|list of additional fields which should be embedded in the response (available options: persons)|

> Example responses

> default Response

```json
"/home-api/assets/examples/customers/getById.json#responseBody"
```

<h3 id="returns-client-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CustomerDTO](#schemacustomerdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates an existing client.

<a id="opIdupdate_2"></a>

> Code samples

```bash
curl https://example.com/customers/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/customers/update.json#requestBody"'
```

`PUT /customers/{customerId}`

Only specified fields will be changed (id is required). One may not specify embeddable fields here - use separate API calls for updating them.

> Body parameter

```json
"/home-api/assets/examples/customers/update.json#requestBody"
```

<h3 id="updates-an-existing-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|integer(int64)|true|client's internal identifier|
|body|body|[CustomerDTO](#schemacustomerdto)|true|Updated client|
|» accountOnCustomerServer|body|string|false|none|
|» accounting|body|[CustomerAccountingDTO](#schemacustomeraccountingdto)|false|none|
|» billingAddress|body|[AddressDTO](#schemaaddressdto)|false|none|
|» branchId|body|integer(int64)|false|none|
|» categoriesIds|body|[integer(int64)]|false|none|
|» clientFirstProjectDate|body|string(date-time)|false|none|
|» clientFirstQuoteDate|body|string(date-time)|false|none|
|» clientLastProjectDate|body|string(date-time)|false|none|
|» clientLastQuoteDate|body|string(date-time)|false|none|
|» clientNumberOfProjects|body|integer(int32)|false|none|
|» clientNumberOfQuotes|body|integer(int32)|false|none|
|» contact|body|[ContactDTO](#schemacontactdto)|false|none|
|» contractNumber|body|string|false|none|
|» correspondenceAddress|body|[AddressDTO](#schemaaddressdto)|false|none|
|» customFields|body|[[CustomFieldDTO](#schemacustomfielddto)]|false|none|
|» fullName|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» idNumber|body|string|false|none|
|» industriesIds|body|[integer(int64)]|false|none|
|» leadSourceId|body|integer(int64)|false|none|
|» limitAccessToPeopleResponsible|body|boolean|false|none|
|» name|body|string|false|none|
|» notes|body|string|false|none|
|» persons|body|[[CustomerPersonDTO](#schemacustomerpersondto)]|false|none|
|» responsiblePersons|body|[CustomerResponsiblePersonsDTO](#schemacustomerresponsiblepersonsdto)|false|none|
|» salesNotes|body|string|false|none|
|» status|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|ACTIVE|
|» status|INACTIVE|
|» status|POTENTIAL|

> Example responses

> default Response

```json
"/home-api/assets/examples/customers/update.json#responseBody"
```

<h3 id="updates-an-existing-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CustomerDTO](#schemacustomerdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Removes a client.

<a id="opIddelete_5"></a>

> Code samples

```bash
curl https://example.com/customers/0 \
  -X DELETE \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`DELETE /customers/{customerId}`

Removes a client.

<h3 id="removes-a-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|integer(int64)|true|client's internal identifier|

<h3 id="removes-a-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns address of a given client.

<a id="opIdgetAddress"></a>

> Code samples

```bash
curl https://example.com/customers/0/address \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /customers/{customerId}/address`

Returns address of a given client.

<h3 id="returns-address-of-a-given-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|integer(int64)|true|client's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/customers/address/getAddress.json#responseBody"
```

<h3 id="returns-address-of-a-given-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[AddressDTO](#schemaaddressdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates address of a given client.

<a id="opIdupdateAddress"></a>

> Code samples

```bash
curl https://example.com/customers/0/address \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/customers/address/updateAddress.json#requestBody"'
```

`PUT /customers/{customerId}/address`

Updates address of a given client.

> Body parameter

```json
"/home-api/assets/examples/customers/address/updateAddress.json#requestBody"
```

<h3 id="updates-address-of-a-given-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|integer(int64)|true|client's internal identifier|
|body|body|[AddressDTO](#schemaaddressdto)|true|Updated address of a given client.|
|» addressLine1|body|string|false|first line of address|
|» addressLine2|body|string|false|second line of address|
|» city|body|string|false|city|
|» countryId|body|integer(int64)|false|country|
|» postalCode|body|string|false|postal code|
|» provinceId|body|integer(int64)|false|province|
|» sameAsBillingAddress|body|boolean|false|should billing address be used instead of this one|

> Example responses

> default Response

```json
"/home-api/assets/examples/customers/address/updateAddress.json#responseBody"
```

<h3 id="updates-address-of-a-given-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[AddressDTO](#schemaaddressdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns categories of a given client.

<a id="opIdgetCategories"></a>

> Code samples

```bash
curl https://example.com/customers/0/categories \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /customers/{customerId}/categories`

Returns categories of a given client.

<h3 id="returns-categories-of-a-given-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|integer(int64)|true|client's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/customers/getCategories.json#responseBody"
```

<h3 id="returns-categories-of-a-given-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CategoriesDTO](#schemacategoriesdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates categories of a given client.

<a id="opIdupdateCategories"></a>

> Code samples

```bash
curl https://example.com/customers/0/categories \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/customers/updateCategories.json#requestBody"'
```

`PUT /customers/{customerId}/categories`

Updates categories of a given client.

> Body parameter

```json
"/home-api/assets/examples/customers/updateCategories.json#requestBody"
```

<h3 id="updates-categories-of-a-given-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|integer(int64)|true|client's internal identifier|
|body|body|[CategoriesDTO](#schemacategoriesdto)|true|Updated categories of a given client.|

> Example responses

> default Response

```json
"/home-api/assets/examples/customers/updateCategories.json#responseBody"
```

<h3 id="updates-categories-of-a-given-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CategoriesDTO](#schemacategoriesdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns contact of a given client.

<a id="opIdgetContact_1"></a>

> Code samples

```bash
curl https://example.com/customers/0/contact \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /customers/{customerId}/contact`

Returns contact of a given client.

<h3 id="returns-contact-of-a-given-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|integer(int64)|true|client's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/customers/getContact.json#responseBody"
```

<h3 id="returns-contact-of-a-given-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ContactDTO](#schemacontactdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates contact of a given client.

<a id="opIdupdateContact_1"></a>

> Code samples

```bash
curl https://example.com/customers/0/contact \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/customers/updateContact.json#requestBody"'
```

`PUT /customers/{customerId}/contact`

Updates contact of a given client.

> Body parameter

```json
"/home-api/assets/examples/customers/updateContact.json#requestBody"
```

<h3 id="updates-contact-of-a-given-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|integer(int64)|true|client's internal identifier|
|body|body|[ContactDTO](#schemacontactdto)|true|Updated contact of a given client.|
|» emails|body|[CustomerContactEmailsDTO](#schemacustomercontactemailsdto)|false|emails|
|» fax|body|string|false|fax number|
|» phones|body|[string]|false|phones' numbers|
|» sms|body|string|false|mobile phone for which SMS notifications will be sent (if configured)|
|» websites|body|[string]|false|websites|

> Example responses

> default Response

```json
"/home-api/assets/examples/customers/updateContact.json#responseBody"
```

<h3 id="updates-contact-of-a-given-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ContactDTO](#schemacontactdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns correspondence address of a given client.

<a id="opIdgetCorrespondenceAddress"></a>

> Code samples

```bash
curl https://example.com/customers/0/correspondenceAddress \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /customers/{customerId}/correspondenceAddress`

Returns correspondence address of a given client.

<h3 id="returns-correspondence-address-of-a-given-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|integer(int64)|true|client's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/customers/address/getCorrespondenceAddress.json#responseBody"
```

<h3 id="returns-correspondence-address-of-a-given-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[AddressDTO](#schemaaddressdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates correspondence address of a given client.

<a id="opIdupdateCorrespondenceAddress"></a>

> Code samples

```bash
curl https://example.com/customers/0/correspondenceAddress \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/customers/address/updateCorrespondenceAddress.json#requestBody"'
```

`PUT /customers/{customerId}/correspondenceAddress`

Updates correspondence address of a given client.

> Body parameter

```json
"/home-api/assets/examples/customers/address/updateCorrespondenceAddress.json#requestBody"
```

<h3 id="updates-correspondence-address-of-a-given-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|integer(int64)|true|client's internal identifier|
|body|body|[AddressDTO](#schemaaddressdto)|true|Updated address of a given client.|
|» addressLine1|body|string|false|first line of address|
|» addressLine2|body|string|false|second line of address|
|» city|body|string|false|city|
|» countryId|body|integer(int64)|false|country|
|» postalCode|body|string|false|postal code|
|» provinceId|body|integer(int64)|false|province|
|» sameAsBillingAddress|body|boolean|false|should billing address be used instead of this one|

> Example responses

> default Response

```json
"/home-api/assets/examples/customers/address/updateCorrespondenceAddress.json#responseBody"
```

<h3 id="updates-correspondence-address-of-a-given-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[AddressDTO](#schemaaddressdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns custom fields of a given client.

<a id="opIdgetCustomFields_1"></a>

> Code samples

```bash
curl https://example.com/customers/0/customFields \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /customers/{customerId}/customFields`

Returns custom fields of a given client.

<h3 id="returns-custom-fields-of-a-given-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|integer(int64)|true|client's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/customers/getCustomFields.json#responseBody"
```

<h3 id="returns-custom-fields-of-a-given-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CustomFieldsDTO](#schemacustomfieldsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates custom fields of a given client.

<a id="opIdupdateCustomFields_1"></a>

> Code samples

```bash
curl https://example.com/customers/0/customFields \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/customers/updateCustomFields.json#requestBody"'
```

`PUT /customers/{customerId}/customFields`

Updates custom fields of a given client.

> Body parameter

```json
"/home-api/assets/examples/customers/updateCustomFields.json#requestBody"
```

<h3 id="updates-custom-fields-of-a-given-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|integer(int64)|true|client's internal identifier|
|body|body|[CustomFieldsDTO](#schemacustomfieldsdto)|true|Updated custom fields of a given client.|

> Example responses

> default Response

```json
"/home-api/assets/examples/customers/updateCustomFields.json#responseBody"
```

<h3 id="updates-custom-fields-of-a-given-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CustomFieldsDTO](#schemacustomfieldsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns custom field of a given client.

<a id="opIdgetCustomField"></a>

> Code samples

```bash
curl https://example.com/customers/0/customFields/string \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /customers/{customerId}/customFields/{customFieldKey}`

Returns custom field of a given client.

<h3 id="returns-custom-field-of-a-given-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|integer(int64)|true|client's internal identifier|
|customFieldKey|path|string|true|custom field's key|

> Example responses

> default Response

```json
"/home-api/assets/examples/customers/getCustomField.json#responseBody"
```

<h3 id="returns-custom-field-of-a-given-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CustomFieldDTO](#schemacustomfielddto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates given custom field of a given client.

<a id="opIdupdateCustomField"></a>

> Code samples

```bash
curl https://example.com/customers/0/customFields/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/customers/updateCustomField.json#requestBody"'
```

`PUT /customers/{customerId}/customFields/{customFieldKey}`

Updates given custom field of a given client.

> Body parameter

```json
"/home-api/assets/examples/customers/updateCustomField.json#requestBody"
```

<h3 id="updates-given-custom-field-of-a-given-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|integer(int64)|true|client's internal identifier|
|customFieldKey|path|string|true|custom field's key|
|body|body|[CustomFieldDTO](#schemacustomfielddto)|true|Updated custom field of a given client.|
|» key|body|string|false|none|
|» name|body|string|false|none|
|» type|body|string|false|none|
|» value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|TEXT|
|» type|DATE|
|» type|DATE_AND_TIME|
|» type|NUMBER|
|» type|CHECKBOX|
|» type|SELECTION|
|» type|MULTI_SELECTION|

> Example responses

> default Response

```json
"/home-api/assets/examples/customers/updateCustomField.json#responseBody"
```

<h3 id="updates-given-custom-field-of-a-given-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CustomFieldDTO](#schemacustomfielddto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns industries of a given client.

<a id="opIdgetIndustries"></a>

> Code samples

```bash
curl https://example.com/customers/0/industries \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /customers/{customerId}/industries`

Returns industries of a given client.

<h3 id="returns-industries-of-a-given-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|integer(int64)|true|client's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/customers/getIndustries.json#responseBody"
```

<h3 id="returns-industries-of-a-given-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[IndustriesDTO](#schemaindustriesdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates industries of a given client.

<a id="opIdupdateIndustries"></a>

> Code samples

```bash
curl https://example.com/customers/0/industries \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/customers/updateIndustries.json#requestBody"'
```

`PUT /customers/{customerId}/industries`

Updates industries of a given client.

> Body parameter

```json
"/home-api/assets/examples/customers/updateIndustries.json#requestBody"
```

<h3 id="updates-industries-of-a-given-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|integer(int64)|true|client's internal identifier|
|body|body|[CategoriesDTO](#schemacategoriesdto)|true|Updated industries of a given client.|

> Example responses

> default Response

```json
"/home-api/assets/examples/customers/updateIndustries.json#responseBody"
```

<h3 id="updates-industries-of-a-given-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[IndustriesDTO](#schemaindustriesdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

<h1 id="xtrf-home-portal-api-dictionaries">Dictionaries</h1>

To change the description use /examples/TagsDescriptions.json

## Returns active dictionary entities for all types.

<a id="opIdgetActive"></a>

> Code samples

```bash
curl https://example.com/dictionaries/active \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /dictionaries/active`

Returns active dictionary entities for all types.

> Example responses

> default Response

```json
"/home-api/assets/examples/dictionaries/map-active.json#responseBody"
```

<h3 id="returns-active-dictionary-entities-for-all-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ManyValuesPerTypeDTO](#schemamanyvaluespertypedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns dictionary entities for all types. Both active and not active ones.

<a id="opIdgetAll_1"></a>

> Code samples

```bash
curl https://example.com/dictionaries/all \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /dictionaries/all`

<div>
  <p>
    XTRF holds many user-defined dictionaries (ie. countries).
    Each dictionary contains a set of values (ie. Poland or Germany).
    A default value may be defined for a dictionary.
  </p>
  <p>
    Dictionary values are identified using internal identifier which is constant and unique among other values from the same dictionary.
    Please note that name used in dictionary values is presented in the locale of the current identity.
    The same dictionary value can have different names, ie. "Poland" for one user, "Polska" for another one.
  </p>
  <p>
    Possible dictionary types with short explanation:
    <ul>
      <li>calculationUnit - predefined values of how to calculate the volume of work into the price</li>
      <li>category - labels to organize data on the platform</li>
      <li>country - list of countries used on the platform</li>
      <li>currency - currencies used in financial operations in the system</li>
      <li>industry - industry sectors which clients specialize in</li>
      <li>jobType - services offered by a company used in customized workflows</li>
      <li>language - list of languages and its values used on the platform</li>
      <li>leadSource - lead/recruitment places where new clients and vendors may be found</li>
      <li>personDepartment - departments in which contact person may be assigned to</li>
      <li>personPosition - positions in which user may be associated with</li>
      <li>province - states and provinces used in various documents on the platform</li>
      <li>specialization - list of specific qualifications required to perform a specific job in the task, for ex. medical, military</li>
    </ul>
  </p>
</div>

> Example responses

> default Response

```json
"/home-api/assets/examples/dictionaries/map-all.json#responseBody"
```

<h3 id="returns-dictionary-entities-for-all-types-both-active-and-not-active-ones-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ManyValuesPerTypeDTO](#schemamanyvaluespertypedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns active values from a given dictionary.

<a id="opIdgetActiveByType"></a>

> Code samples

```bash
curl https://example.com/dictionaries/string/active \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /dictionaries/{type}/active`

Returns active values from a given dictionary.

<h3 id="returns-active-values-from-a-given-dictionary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|dictionary type|
|nameEquals|query|string|false|exact name of entity|

> Example responses

> default Response

```json
"/home-api/assets/examples/dictionaries/currency-active-v1.json#responseBody"
```

<h3 id="returns-active-values-from-a-given-dictionary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[DictionaryEntity](#schemadictionaryentity)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns all values (both active and not active) from a given dictionary.

<a id="opIdgetAllByType"></a>

> Code samples

```bash
curl https://example.com/dictionaries/string/all \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /dictionaries/{type}/all`

Returns all values (both active and not active) from a given dictionary.

<h3 id="returns-all-values-both-active-and-not-active-from-a-given-dictionary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|dictionary type|
|nameEquals|query|string|false|exact name of entity|

> Example responses

> default Response

```json
"/home-api/assets/examples/dictionaries/currency-all-v1.json#responseBody"
```

<h3 id="returns-all-values-both-active-and-not-active-from-a-given-dictionary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[DictionaryEntity](#schemadictionaryentity)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns specific value from a given dictionary.

<a id="opIdgetByTypeAndId"></a>

> Code samples

```bash
curl https://example.com/dictionaries/string/0 \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /dictionaries/{type}/{id}`

Returns specific value from a given dictionary.

<h3 id="returns-specific-value-from-a-given-dictionary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|dictionary type|
|id|path|integer(int64)|true|dictionary value identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/dictionaries/currency-v1.json#responseBody"
```

<h3 id="returns-specific-value-from-a-given-dictionary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[DictionaryEntity](#schemadictionaryentity)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns active services list

<a id="opIdgetAllActive"></a>

> Code samples

```bash
curl https://example.com/services/active \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /services/active`

Returns active workflows list

<h3 id="returns-active-services-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nameEquals|query|string|false|exact name of entity|

> Example responses

> default Response

```json
"/home-api/assets/examples/services/active-v1.json#responseBody"
```

<h3 id="returns-active-services-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ServiceDTO](#schemaservicedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns services list

<a id="opIdgetAll_3"></a>

> Code samples

```bash
curl https://example.com/services/all \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /services/all`

Returns workflows list. Both active and not active ones.

<h3 id="returns-services-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nameEquals|query|string|false|exact name of entity|

> Example responses

> default Response

```json
"/home-api/assets/examples/services/all-v1.json#responseBody"
```

<h3 id="returns-services-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ServiceDTO](#schemaservicedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

<h1 id="xtrf-home-portal-api-currency-exchange-rates">Currency exchange rates</h1>

To change the description use /examples/TagsDescriptions.json

## Returns currency exchange rates.

<a id="opIdgetByIsoCode"></a>

> Code samples

```bash
curl https://example.com/dictionaries/currency/string/exchangeRate \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /dictionaries/currency/{isoCode}/exchangeRate`

Returns currency exchange rates.

<h3 id="returns-currency-exchange-rates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|isoCode|path|string|true|iso code, https://www.xe.com/iso4217.php|

> Example responses

> default Response

```json
"/home-api/assets/examples/dictionaries/currency/getByIsoCode.json#responseBody"
```

<h3 id="returns-currency-exchange-rates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CurrencyHistoryDTO](#schemacurrencyhistorydto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Adding currency exchange rates.

<a id="opIdcreateExchangeRate"></a>

> Code samples

```bash
curl https://example.com/dictionaries/currency/string/exchangeRate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/dictionaries/currency/createExchangeRate.json#requestBody"'
```

`POST /dictionaries/currency/{isoCode}/exchangeRate`

Adding currency exchange rates via API

> Body parameter

```json
"/home-api/assets/examples/dictionaries/currency/createExchangeRate.json#requestBody"
```

<h3 id="adding-currency-exchange-rates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|isoCode|path|string|true|iso code, https://www.xe.com/iso4217.php|
|body|body|[CurrencyHistoryDTO](#schemacurrencyhistorydto)|true|Adding new currency exchange rates|
|» dateFrom|body|[TimeDTO](#schematimedto)|false|none|
|» exchangeRate|body|string|false|none|
|» lastModification|body|[TimeDTO](#schematimedto)|false|none|
|» originDetails|body|string|false|none|
|» publicationDate|body|[TimeDTO](#schematimedto)|false|none|

<h3 id="adding-currency-exchange-rates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

<h1 id="xtrf-home-portal-api-files">Files</h1>

To change the description use /examples/TagsDescriptions.json

## Uploads a temporary file (ie. for XML import). Returns token which can be used in other API calls.

<a id="opIduploadFile"></a>

> Code samples

```bash
curl https://example.com/files \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -F 'file=@/path/to/file'
```

`POST /files`

When a file is required by an operation (ie. task creation) it must be uploaded previously to the API.
Uploading a file will result in a file token, which can be used to reference this file in other API calls.
 Each file must be uploaded separately.
 Keep in mind that file token has limited validity (ie. 10 minutes).
 Therefore files must be uploaded just before issuing API call which reference them.


> Body parameter

```yaml
file: string
```

<h3 id="uploads-a-temporary-file-ie-for-xml-import-returns-token-which-can-be-used-in-other-api-calls-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FileToUploadDto](#schemafiletouploaddto)|true|Uploaded file|
|» file|body|string(binary)|false|none|

<h3 id="uploads-a-temporary-file-ie-for-xml-import-returns-token-which-can-be-used-in-other-api-calls-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

<h1 id="xtrf-home-portal-api-license">License</h1>

To change the description use /examples/TagsDescriptions.json

## Returns license content.

<a id="opIdgetLicense"></a>

> Code samples

```bash
curl https://example.com/license \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /license`

Returns license content.

> Example responses

> 200 Response

```json
"/home-api/assets/examples/license/getLicense.json#responseBody"
```

<h3 id="returns-license-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetLicenseResult](#schemagetlicenseresult)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Refreshes license content.

<a id="opIdrefresh"></a>

> Code samples

```bash
curl https://example.com/license/refresh \
  -X POST \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`POST /license/refresh`

Refreshes license content. This method returns OK immediately and license is refreshed asynchronously. It takes a while (usually a few seconds) for the license to be actually refreshed.

<h3 id="refreshes-license-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

<h1 id="xtrf-home-portal-api-macros">Macros</h1>

To change the description use /examples/TagsDescriptions.json

## Executes a macro.

<a id="opIdrun"></a>

> Code samples

```bash
curl https://example.com/macros/0/run \
  -X POST \
  -H 'Content-Type: application/json;charset=UTF-8' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/macros/runMacroAsynchronously.json#requestBody"'
```

`POST /macros/{macroId}/run`

Runs a specified macro on a specified list of items ("list" variable in the macro code). The list of items can be empty if the macro doesn't use it. Additional custom parameters can be provided to the macro when necessary ("params" variable in the macro code).

 <BR>Note: Macros that support parameters can be also run from GUI (Views in Home Portal),so they should also handle the empty parameters map (e.g. by defining default values when parameters are not provided).

> Body parameter

```json
"/home-api/assets/examples/macros/runMacroAsynchronously.json#requestBody"
```

<h3 id="executes-a-macro-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|macroId|path|integer(int64)|true|macro internal identifier|
|body|body|[MacroRequestDTO](#schemamacrorequestdto)|true|Generated client invoices documents.|
|» async|body|boolean|false|indicates whether the macro should be executed asynchronously or synchronously (default: false)|
|» ids|body|[integer(int64)]|false|list of internal identifiers of elements to be processed by the macro, can be empty for certain macros|
|» params|body|object|false|map of custom key-value pairs that can optionally parametrize the macro execution|
|» » **additionalProperties**|body|object|false|map of custom key-value pairs that can optionally parametrize the macro execution|

> Example responses

> default Response

```json
"/home-api/assets/examples/macros/runMacroSynchronouslyWithParametersWithoutIds.json#responseBody"
```

<h3 id="executes-a-macro-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ActionStartedDTO](#schemaactionstarteddto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

<h1 id="xtrf-home-portal-api-vendor-invoices">Vendor Invoices</h1>

To change the description use /examples/TagsDescriptions.json

## Lists all vendor invoices in all statuses (including not ready and drafts) that have been updated since a specific date.

<a id="opIdgetAll_2"></a>

> Code samples

```bash
curl https://example.com/accounting/providers/invoices \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /accounting/providers/invoices`

Lists all vendor invoices in all statuses (including not ready and drafts) that have been updated since a specific date.

<h3 id="lists-all-vendor-invoices-in-all-statuses-including-not-ready-and-drafts-that-have-been-updated-since-a-specific-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|updatedSince|query|integer(int64)|false|only vendor invoices modified since this timestamp|

> Example responses

> default Response

```json
"/home-api/assets/examples/accounting/providers/invoices/getAll.json#responseBody"
```

<h3 id="lists-all-vendor-invoices-in-all-statuses-including-not-ready-and-drafts-that-have-been-updated-since-a-specific-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|vendor invoices|Inline|

<h3 id="lists-all-vendor-invoices-in-all-statuses-including-not-ready-and-drafts-that-have-been-updated-since-a-specific-date-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProviderInvoiceDTO](#schemaproviderinvoicedto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Creates a new invoice.

<a id="opIdcreate_4"></a>

> Code samples

```bash
curl https://example.com/accounting/providers/invoices \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/accounting/providers/invoices/createSingleFromJobs.json#requestBody"'
```

`POST /accounting/providers/invoices`

Creates a new invoice from jobs. Jobs are grouped by provider and currency, therefore multiple invoices can be created.If any of the jobs cannot be invoiced (ie. it is already invoiced) then an error is reported.

> Body parameter

```json
"/home-api/assets/examples/accounting/providers/invoices/createSingleFromJobs.json#requestBody"
```

<h3 id="creates-a-new-invoice-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ProviderInvoiceCreateDTO](#schemaproviderinvoicecreatedto)|true|Created new invoice.|
|» jobsIds|body|[integer(int64)]|false|none|

> Example responses

> 200 Response

```json
"/home-api/assets/examples/accounting/providers/invoices/createSingleFromJobs.json#responseBody"
```

<h3 id="creates-a-new-invoice-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ProviderInvoiceCreateResultDTO](#schemaproviderinvoicecreateresultdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns vendor invoices' internal identifiers.

<a id="opIdgetAllIds_3"></a>

> Code samples

```bash
curl https://example.com/accounting/providers/invoices/ids \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /accounting/providers/invoices/ids`

Returns vendor invoices' internal identifiers.

<h3 id="returns-vendor-invoices-internal-identifiers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|updatedSince|query|integer(int64)|false|only vendor invoices modified since this timestamp|

> Example responses

> default Response

```json
"/home-api/assets/examples/accounting/providers/invoices/getIds.json#responseBody"
```

<h3 id="returns-vendor-invoices-internal-identifiers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|vendor invoices' internal identifiers|Inline|

<h3 id="returns-vendor-invoices-internal-identifiers-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns provider invoice details.

<a id="opIdgetById_3"></a>

> Code samples

```bash
curl https://example.com/accounting/providers/invoices/0 \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /accounting/providers/invoices/{invoiceId}`

Returns provider invoice details.

<h3 id="returns-provider-invoice-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invoiceId|path|integer(int64)|true|provider invoice's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/accounting/providers/invoices/getById.json#responseBody"
```

<h3 id="returns-provider-invoice-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ProviderInvoiceDTO](#schemaproviderinvoicedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Removes a provider invoice.

<a id="opIddelete_6"></a>

> Code samples

```bash
curl https://example.com/accounting/providers/invoices/0 \
  -X DELETE \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`DELETE /accounting/providers/invoices/{invoiceId}`

Removes a provider invoice.

<h3 id="removes-a-provider-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invoiceId|path|integer(int64)|true|provider invoice's internal identifier|

<h3 id="removes-a-provider-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Generates provider invoice document (PDF).

<a id="opIdgetDocument_1"></a>

> Code samples

```bash
curl https://example.com/accounting/providers/invoices/0/document \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /accounting/providers/invoices/{invoiceId}/document`

Generates provider invoice document (PDF).

<h3 id="generates-provider-invoice-document-pdf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invoiceId|path|integer(int64)|true|provider invoice's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/accounting/providers/invoices/getDocument.json#responseBody"
```

<h3 id="generates-provider-invoice-document-pdf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[UrlResultDTO](#schemaurlresultdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns all payments for the vendor invoice.

<a id="opIdgetPayments_1"></a>

> Code samples

```bash
curl https://example.com/accounting/providers/invoices/0/payments \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /accounting/providers/invoices/{invoiceId}/payments`

Returns all payments for the vendor invoice.

<h3 id="returns-all-payments-for-the-vendor-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invoiceId|path|integer(int64)|true|vendor invoice's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/accounting/providers/invoices/getPayments.json#responseBody"
```

<h3 id="returns-all-payments-for-the-vendor-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|vendor invoice's payments|Inline|

<h3 id="returns-all-payments-for-the-vendor-invoice-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PaymentDTO](#schemapaymentdto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Creates a new payment on the vendor account and assigns the payment to the invoice.

<a id="opIdcreatePayment_1"></a>

> Code samples

```bash
curl https://example.com/accounting/providers/invoices/0/payments \
  -X POST \
  -H 'Content-Type: application/json;charset=UTF-8' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/accounting/providers/invoices/createPayment.json#requestBody"'
```

`POST /accounting/providers/invoices/{invoiceId}/payments`

Creates a new payment on the vendor account and assigns the payment to the invoice.

> Body parameter

```json
"/home-api/assets/examples/accounting/providers/invoices/createPayment.json#requestBody"
```

<h3 id="creates-a-new-payment-on-the-vendor-account-and-assigns-the-payment-to-the-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invoiceId|path|integer(int64)|true|vendor invoice's internal identifier|
|body|body|[PaymentDTO](#schemapaymentdto)|true|New payment.|
|» amount|body|number|false|none|
|» notes|body|string|false|none|
|» paymentDate|body|[TimeDTO](#schematimedto)|false|none|
|» paymentMethodId|body|integer(int64)|false|none|

<h3 id="creates-a-new-payment-on-the-vendor-account-and-assigns-the-payment-to-the-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Sends a provider invoice.

<a id="opIdsend"></a>

> Code samples

```bash
curl https://example.com/accounting/providers/invoices/0/send \
  -X POST \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`POST /accounting/providers/invoices/{invoiceId}/send`

Sends a provider invoice.

<h3 id="sends-a-provider-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invoiceId|path|integer(int64)|true|provider invoice's internal identifier|

<h3 id="sends-a-provider-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Changes invoice status to given status.

<a id="opIdsetStatus"></a>

> Code samples

```bash
curl https://example.com/accounting/providers/invoices/0/status \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/accounting/providers/invoices/setStatus.json#requestBody"'
```

`POST /accounting/providers/invoices/{invoiceId}/status`

Changes invoice status to given status.

> Body parameter

```json
"/home-api/assets/examples/accounting/providers/invoices/setStatus.json#requestBody"
```

<h3 id="changes-invoice-status-to-given-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invoiceId|path|integer(int64)|true|provider invoice's internal identifier|
|body|body|[StatusRequestDTO](#schemastatusrequestdto)|true|Changed invoice status to given status.|
|» status|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|POSTPONED|
|» status|TO_BE_SENT|
|» status|SENT|
|» status|CONFIRMED|
|» status|BILL_CREATED|

<h3 id="changes-invoice-status-to-given-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Removes a provider payment.

<a id="opIddelete_7"></a>

> Code samples

```bash
curl https://example.com/accounting/providers/payments/0 \
  -X DELETE \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`DELETE /accounting/providers/payments/{paymentId}`

Removes a provider payment.

<h3 id="removes-a-provider-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|paymentId|path|integer(int64)|true|provider payment's internal identifier|

<h3 id="removes-a-provider-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

<h1 id="xtrf-home-portal-api-vendors">Vendors</h1>

To change the description use /examples/TagsDescriptions.json

## Returns providers' internal identifiers.

<a id="opIdgetAllIds_5"></a>

> Code samples

```bash
curl https://example.com/providers/ids \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /providers/ids`

Returns providers' internal identifiers.

<h3 id="returns-providers-internal-identifiers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|updatedSince|query|integer(int64)|false|only providers modified since this timestamp|

> Example responses

> default Response

```json
"/home-api/assets/examples/providers/getIds.json#responseBody"
```

<h3 id="returns-providers-internal-identifiers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|Inline|

<h3 id="returns-providers-internal-identifiers-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns persons' internal identifiers.

<a id="opIdgetAllIds_4"></a>

> Code samples

```bash
curl https://example.com/providers/persons/ids \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /providers/persons/ids`

Returns persons' internal identifiers.

<h3 id="returns-persons-internal-identifiers-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|updatedSince|query|integer(int64)|false|only persons modified since this timestamp|

> Example responses

> default Response

```json
"/home-api/assets/examples/providers/persons/getIds.json#responseBody"
```

<h3 id="returns-persons-internal-identifiers-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|Inline|

<h3 id="returns-persons-internal-identifiers-1-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns person details.

<a id="opIdgetById_4"></a>

> Code samples

```bash
curl https://example.com/providers/persons/0 \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /providers/persons/{personId}`

Returns person details.

<h3 id="returns-person-details-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|personId|path|integer(int64)|true|person's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/providers/persons/getById.json#responseBody"
```

<h3 id="returns-person-details-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ProviderPersonDTO](#schemaproviderpersondto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Removes a person.

<a id="opIddelete_8"></a>

> Code samples

```bash
curl https://example.com/providers/persons/0 \
  -X DELETE \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`DELETE /providers/persons/{personId}`

Removes a person.

<h3 id="removes-a-person-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|personId|path|integer(int64)|true|person's internal identifier|

<h3 id="removes-a-person-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns contact of a given person.

<a id="opIdgetContact_2"></a>

> Code samples

```bash
curl https://example.com/providers/persons/0/contact \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /providers/persons/{personId}/contact`

Returns contact of a given person.

<h3 id="returns-contact-of-a-given-person-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|personId|path|integer(int64)|true|person's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/providers/persons/getContact.json#responseBody"
```

<h3 id="returns-contact-of-a-given-person-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[PersonContactDTO](#schemapersoncontactdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns custom fields of a given person.

<a id="opIdgetCustomFields_2"></a>

> Code samples

```bash
curl https://example.com/providers/persons/0/customFields \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /providers/persons/{personId}/customFields`

Returns custom fields of a given person.

<h3 id="returns-custom-fields-of-a-given-person-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|personId|path|integer(int64)|true|person's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/providers/persons/getCustomFields.json#responseBody"
```

<h3 id="returns-custom-fields-of-a-given-person-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CustomFieldsDTO](#schemacustomfieldsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Sends invitation to Vendor Portal.

<a id="opIdsendInvitations"></a>

> Code samples

```bash
curl https://example.com/providers/persons/0/notification/invitation \
  -X POST \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`POST /providers/persons/{personId}/notification/invitation`

Sends invitation to Vendor Portal.

<h3 id="sends-invitation-to-vendor-portal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|personId|path|integer(int64)|true|person's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/providers/persons/sendInvitations.json#responseBody"
```

<h3 id="sends-invitation-to-vendor-portal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[InvitationStatisticsDTO](#schemainvitationstatisticsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Removes a provider price list.

<a id="opIddelete_9"></a>

> Code samples

```bash
curl https://example.com/providers/priceLists/0 \
  -X DELETE \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`DELETE /providers/priceLists/{priceListId}`

Removes a provider price list.

<h3 id="removes-a-provider-price-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|priceListId|path|integer(int64)|true|provider price list's internal identifier|

<h3 id="removes-a-provider-price-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns provider details.

<a id="opIdgetById_5"></a>

> Code samples

```bash
curl https://example.com/providers/0 \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /providers/{providerId}`

Returns provider details.

<h3 id="returns-provider-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|providerId|path|integer(int64)|true|provider's internal identifier|
|embed|query|string|false|list of adittional fields which should be embedded in the response (ie. persons)|

> Example responses

> default Response

```json
"/home-api/assets/examples/providers/getById.json#responseBody"
```

<h3 id="returns-provider-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ProviderDTO](#schemaproviderdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Removes a provider.

<a id="opIddelete_10"></a>

> Code samples

```bash
curl https://example.com/providers/0 \
  -X DELETE \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`DELETE /providers/{providerId}`

Removes a provider.

<h3 id="removes-a-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|providerId|path|integer(int64)|true|provider's internal identifier|

<h3 id="removes-a-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns address of a given provider.

<a id="opIdgetAddress_1"></a>

> Code samples

```bash
curl https://example.com/providers/0/address \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /providers/{providerId}/address`

Returns address of a given provider.

<h3 id="returns-address-of-a-given-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|providerId|path|integer(int64)|true|provider's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/providers/address/getAddress.json#responseBody"
```

<h3 id="returns-address-of-a-given-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[AddressDTO](#schemaaddressdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns competencies of a given provider.

<a id="opIdgetCompetencies"></a>

> Code samples

```bash
curl https://example.com/providers/0/competencies \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /providers/{providerId}/competencies`

Returns competencies of a given provider.

<h3 id="returns-competencies-of-a-given-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|providerId|path|integer(int64)|true|provider's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/providers/getCompetencies.json#responseBody"
```

<h3 id="returns-competencies-of-a-given-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CompetenciesDTO](#schemacompetenciesdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns contact of a given provider.

<a id="opIdgetContact_3"></a>

> Code samples

```bash
curl https://example.com/providers/0/contact \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /providers/{providerId}/contact`

Returns contact of a given provider.

<h3 id="returns-contact-of-a-given-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|providerId|path|integer(int64)|true|provider's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/providers/getContact.json#responseBody"
```

<h3 id="returns-contact-of-a-given-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ContactDTO](#schemacontactdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns correspondence address of a given provider.

<a id="opIdgetCorrespondenceAddress_1"></a>

> Code samples

```bash
curl https://example.com/providers/0/correspondenceAddress \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /providers/{providerId}/correspondenceAddress`

Returns correspondence address of a given provider.

<h3 id="returns-correspondence-address-of-a-given-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|providerId|path|integer(int64)|true|provider's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/providers/address/getCorrespondenceAddress.json#responseBody"
```

<h3 id="returns-correspondence-address-of-a-given-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[AddressDTO](#schemaaddressdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns custom fields of a given provider.

<a id="opIdgetCustomFields_3"></a>

> Code samples

```bash
curl https://example.com/providers/0/customFields \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /providers/{providerId}/customFields`

Returns custom fields of a given provider.

<h3 id="returns-custom-fields-of-a-given-provider-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|providerId|path|integer(int64)|true|provider's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/providers/getCustomFields.json#responseBody"
```

<h3 id="returns-custom-fields-of-a-given-provider-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CustomFieldsDTO](#schemacustomfieldsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Sends invitations to Vendor Portal.

<a id="opIdsendInvitations_1"></a>

> Code samples

```bash
curl https://example.com/providers/0/notification/invitation \
  -X POST \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`POST /providers/{providerId}/notification/invitation`

Sends invitations to Vendor Portal.

<h3 id="sends-invitations-to-vendor-portal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|providerId|path|integer(int64)|true|provider's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/providers/sendInvitations.json#responseBody"
```

<h3 id="sends-invitations-to-vendor-portal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[InvitationStatisticsDTO](#schemainvitationstatisticsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

<h1 id="xtrf-home-portal-api-reports">Reports</h1>

To change the description use /examples/TagsDescriptions.json

## Exports reports definition to XML.

<a id="opIdexportToXML"></a>

> Code samples

```bash
curl https://example.com/reports/export/xml \
  -X POST \
  -H 'Content-Type: application/json;charset=UTF-8' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/reports/exportToXML.json#requestBody"'
```

`POST /reports/export/xml`

Exports reports definition to XML.

> Body parameter

```json
"/home-api/assets/examples/reports/exportToXML.json#requestBody"
```

<h3 id="exports-reports-definition-to-xml-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ExportRequestDTO](#schemaexportrequestdto)|true|Exported reports definition to XML.|
|» ids|body|[integer(int64)]|false|none|

> Example responses

> default Response

```json
"/home-api/assets/examples/reports/exportToXML.json#responseBody"
```

<h3 id="exports-reports-definition-to-xml-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ReportResultDTO](#schemareportresultdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Imports reports definition from XML.

<a id="opIdimportFromXML"></a>

> Code samples

```bash
curl https://example.com/reports/import/xml \
  -X POST \
  -H 'Content-Type: application/json;charset=UTF-8' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/reports/importFromXML.json#requestBody"'
```

`POST /reports/import/xml`

Imports a report definition from an XML using a file token. To obtain the token, you first need to upload a temporary XML file, as specified in the Files section. Note that the name of the imported report must be unique.

> Body parameter

```json
"/home-api/assets/examples/reports/importFromXML.json#requestBody"
```

<h3 id="imports-reports-definition-from-xml-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ImportRequestDTO](#schemaimportrequestdto)|true|Imported reports definition from XML.|
|» fileToken|body|string|false|none|

> Example responses

> default Response

```json
"/home-api/assets/examples/reports/importFromXML.json#responseBody"
```

<h3 id="imports-reports-definition-from-xml-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ImportResultDTO](#schemaimportresultdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Removes a report.

<a id="opIddelete_11"></a>

> Code samples

```bash
curl https://example.com/reports/0 \
  -X DELETE \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`DELETE /reports/{reportId}`

Removes a report.

<h3 id="removes-a-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportId|path|integer(int64)|true|report's internal identifier|

<h3 id="removes-a-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Duplicates a report.

<a id="opIdduplicate_1"></a>

> Code samples

```bash
curl https://example.com/reports/0/duplicate \
  -X POST \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`POST /reports/{reportId}/duplicate`

Duplicates a report.

<h3 id="duplicates-a-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportId|path|integer(int64)|true|report's internal identifier|

<h3 id="duplicates-a-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Marks report as preferred or not.

<a id="opIdsetPreferred"></a>

> Code samples

```bash
curl https://example.com/reports/0/preferred \
  -X PUT \
  -H 'Content-Type: application/json;charset=UTF-8' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '{
    "preferred": true
  }'
```

`PUT /reports/{reportId}/preferred`

Marks report as preferred or not.

> Body parameter

```json
{
  "preferred": true
}
```

<h3 id="marks-report-as-preferred-or-not-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportId|path|integer(int64)|true|report's internal identifier|
|body|body|[PreferredRequestDTO](#schemapreferredrequestdto)|true|Marked report as preferred or not.|
|» preferred|body|boolean|false|none|

<h3 id="marks-report-as-preferred-or-not-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Generates CSV content for a report.

<a id="opIdgenerateCSV"></a>

> Code samples

```bash
curl https://example.com/reports/0/result/csv \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /reports/{reportId}/result/csv`

Generates CSV content for a report.

<h3 id="generates-csv-content-for-a-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportId|path|integer(int64)|true|report's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/reports//generateCSV.json#responseBody"
```

<h3 id="generates-csv-content-for-a-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ReportResultDTO](#schemareportresultdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Generates printer friendly content for a report.

<a id="opIdgeneratePrinterFriendly"></a>

> Code samples

```bash
curl https://example.com/reports/0/result/printerFriendly \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /reports/{reportId}/result/printerFriendly`

Generates printer friendly content for a report.

<h3 id="generates-printer-friendly-content-for-a-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportId|path|integer(int64)|true|report's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/reports//generatePrinterFriendly.json#responseBody"
```

<h3 id="generates-printer-friendly-content-for-a-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ReportResultDTO](#schemareportresultdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

<h1 id="xtrf-home-portal-api-subscription">Subscription</h1>

To change the description use /examples/TagsDescriptions.json

## Returns all subscriptions

<a id="opIdgetAll_4"></a>

> Code samples

```bash
curl https://example.com/subscription \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /subscription`

Returns all subscriptions. Subscriptions are automatically removed if they do not work (ie. if 404 status is returned). To improve notification reliability one can use this method to check if subscription is still active and re-subscribe if necessary.

> Example responses

> default Response

```json
"/home-api/assets/examples/subscription/getAll.json#responseBody"
```

<h3 id="returns-all-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|Inline|

<h3 id="returns-all-subscriptions-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ActiveSubscriptionDTO](#schemaactivesubscriptiondto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Subscribe to event

<a id="opIdsubscribe"></a>

> Code samples

```bash
curl https://example.com/subscription \
  -X POST \
  -H 'Content-Type: application/json;charset=UTF-8' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '{
    "embed": "string",
    "event": "string",
    "filter": "string",
    "url": "string"
  }'
```

`POST /subscription`

Subscribe to event. Returns subscription Id.

> Body parameter

```json
{
  "embed": "string",
  "event": "string",
  "filter": "string",
  "url": "string"
}
```

<h3 id="subscribe-to-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SubscriptionDTO](#schemasubscriptiondto)|true|Returns subscription Id.|
|» embed|body|string|false|additional fields which should be embedded in the event|
|» event|body|string|false|event to which you want to subscribe|
|» filter|body|string|false|filter expression in the form 'attribute=value'|
|» url|body|string|false|url that will be invoked by XTRF on event|

> Example responses

> 201 Response

```json
"/home-api/assets/examples/subscription/subscribe_created.json#responseBody"
```

> 409 Response

```json
"/home-api/assets/examples/subscription/subscribe_conflict.json#responseBody"
```

<h3 id="subscribe-to-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|Inline|
|409|Conflict|Success|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## This method can be used to determine if hooks are supported.

<a id="opIdareHooksSupported"></a>

> Code samples

```bash
curl https://example.com/subscription/supports \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /subscription/supports`

This method can be used to determine if hooks are supported.

> Example responses

> default Response

```json
true
```

<h3 id="this-method-can-be-used-to-determine-if-hooks-are-supported-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Unsubscribe from event

<a id="opIdunsubscribe"></a>

> Code samples

```bash
curl https://example.com/subscription/string \
  -X DELETE \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`DELETE /subscription/{subscriptionId}`

Unsubscribe from job status changed event

<h3 id="unsubscribe-from-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|

<h3 id="unsubscribe-from-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

<h1 id="xtrf-home-portal-api-users">Users</h1>

To change the description use /examples/TagsDescriptions.json

## Returns list of simple users representations

<a id="opIdgetAllNamesWithIds_1"></a>

> Code samples

```bash
curl https://example.com/users \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /users`

Returns list of simple users representations

> Example responses

> default Response

```json
"/home-api/assets/examples/users/getAllNamesWithIds.json#responseBody"
```

<h3 id="returns-list-of-simple-users-representations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|Inline|

<h3 id="returns-list-of-simple-users-representations-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[EntityWithNameDTO](#schemaentitywithnamedto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns currently signed in user details.

<a id="opIdgetMe"></a>

> Code samples

```bash
curl https://example.com/users/me \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /users/me`

Returns currently signed in user details.

> Example responses

> default Response

```json
"/home-api/assets/examples/users/getMe.json#responseBody"
```

<h3 id="returns-currently-signed-in-user-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[UserDTO](#schemauserdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns time zone preferred by user currently signed in.

<a id="opIdgetTimeZone"></a>

> Code samples

```bash
curl https://example.com/users/me/timeZone \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /users/me/timeZone`

Returns time zone preferred by user currently signed in.

> Example responses

> default Response

```json
"/home-api/assets/examples/users/getTimeZone.json#responseBody"
```

<h3 id="returns-time-zone-preferred-by-user-currently-signed-in-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[TimeZoneDTO](#schematimezonedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns user details.

<a id="opIdgetById_6"></a>

> Code samples

```bash
curl https://example.com/users/0 \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /users/{userId}`

Returns user details.

<h3 id="returns-user-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|user's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/users/getById.json#responseBody"
```

<h3 id="returns-user-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[UserDTO](#schemauserdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates an existing user.

<a id="opIdupdate_3"></a>

> Code samples

```bash
curl https://example.com/users/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/users/update2.json#requestBody"'
```

`PUT /users/{userId}`

Updates an existing user.

> Body parameter

```json
"/home-api/assets/examples/users/update2.json#requestBody"
```

<h3 id="updates-an-existing-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|user's internal identifier|
|body|body|[UserDTO](#schemauserdto)|true|Updated existing user.|
|» customFields|body|[[CustomFieldDTO](#schemacustomfielddto)]|false|none|
|» email|body|string|false|none|
|» firstName|body|string|false|none|
|» gender|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» lastName|body|string|false|none|
|» login|body|string|false|none|
|» mobilePhone|body|string|false|none|
|» phone|body|string|false|none|
|» positionName|body|string|false|none|
|» timeZoneId|body|string|false|none|
|» userGroupName|body|string|false|none|

> Example responses

> default Response

```json
"/home-api/assets/examples/users/update2.json#responseBody"
```

<h3 id="updates-an-existing-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[UserDTO](#schemauserdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns custom fields of a given user.

<a id="opIdgetCustomFields_4"></a>

> Code samples

```bash
curl https://example.com/users/0/customFields \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /users/{userId}/customFields`

Returns custom fields of a given user.

<h3 id="returns-custom-fields-of-a-given-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|user's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/users/getCustomFields.json#responseBody"
```

<h3 id="returns-custom-fields-of-a-given-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CustomFieldsDTO](#schemacustomfieldsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates custom fields of a given user.

<a id="opIdupdateCustomFields_2"></a>

> Code samples

```bash
curl https://example.com/users/0/customFields \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/users/updateCustomFields.json#requestBody"'
```

`PUT /users/{userId}/customFields`

Updates custom fields of a given user.

> Body parameter

```json
"/home-api/assets/examples/users/updateCustomFields.json#requestBody"
```

<h3 id="updates-custom-fields-of-a-given-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|user's internal identifier|
|body|body|[CustomFieldsDTO](#schemacustomfieldsdto)|true|Updated custom fields of a given user.|

> Example responses

> default Response

```json
"/home-api/assets/examples/users/updateCustomFields.json#responseBody"
```

<h3 id="updates-custom-fields-of-a-given-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CustomFieldsDTO](#schemacustomfieldsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns custom field of a given user.

<a id="opIdgetCustomField_1"></a>

> Code samples

```bash
curl https://example.com/users/0/customFields/string \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /users/{userId}/customFields/{customFieldKey}`

Returns custom field of a given user.

<h3 id="returns-custom-field-of-a-given-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|user's internal identifier|
|customFieldKey|path|string|true|custom field's key|

> Example responses

> default Response

```json
"/home-api/assets/examples/users/getCustomField.json#responseBody"
```

<h3 id="returns-custom-field-of-a-given-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CustomFieldDTO](#schemacustomfielddto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates given custom field of a given user.

<a id="opIdupdateCustomField_1"></a>

> Code samples

```bash
curl https://example.com/users/0/customFields/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/users/updateCustomField.json#requestBody"'
```

`PUT /users/{userId}/customFields/{customFieldKey}`

Updates given custom field of a given user.

> Body parameter

```json
"/home-api/assets/examples/users/updateCustomField.json#requestBody"
```

<h3 id="updates-given-custom-field-of-a-given-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|user's internal identifier|
|customFieldKey|path|string|true|custom field's key|
|body|body|[CustomFieldDTO](#schemacustomfielddto)|true|Updated custom fields of a given user.|
|» key|body|string|false|none|
|» name|body|string|false|none|
|» type|body|string|false|none|
|» value|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|TEXT|
|» type|DATE|
|» type|DATE_AND_TIME|
|» type|NUMBER|
|» type|CHECKBOX|
|» type|SELECTION|
|» type|MULTI_SELECTION|

> Example responses

> default Response

```json
"/home-api/assets/examples/users/updateCustomField.json#responseBody"
```

<h3 id="updates-given-custom-field-of-a-given-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CustomFieldDTO](#schemacustomfielddto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Sets user's password to a new value.

<a id="opIdchangePassword"></a>

> Code samples

```bash
curl https://example.com/users/0/password \
  -X PUT \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d 'newPassword=string&oldPassword=string'
```

`PUT /users/{userId}/password`

Sets user's password to a new value.

> Body parameter

```yaml
newPassword: string
oldPassword: string
```

<h3 id="sets-users-password-to-a-new-value-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|integer(int64)|true|user's internal identifier|
|body|body|object|false|none|
|» newPassword|body|string|false|new password|
|» oldPassword|body|string|false|old password|

<h3 id="sets-users-password-to-a-new-value-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

<h1 id="xtrf-home-portal-api-jobs-classic">Jobs (Classic)</h1>

To change the description use /examples/TagsDescriptions.json

## Returns job details by jobId.

<a id="opIdgetJobDetails"></a>

> Code samples

```bash
curl https://example.com/jobs/string \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /jobs/{jobId}`

Returns job details by jobId.

<h3 id="returns-job-details-by-jobid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|job's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/v1/jobs/getJobDetails.json#responseBody"
```

<h3 id="returns-job-details-by-jobid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[JobDto](#schemajobdto-1)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates dates of a given job.

<a id="opIdupdateDates"></a>

> Code samples

```bash
curl https://example.com/jobs/string/dates \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v1/jobs/updateDates.json#requestBody"'
```

`PUT /jobs/{jobId}/dates`

Updates dates of a given job.

> Body parameter

```json
"/home-api/assets/examples/v1/jobs/updateDates.json#requestBody"
```

<h3 id="updates-dates-of-a-given-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|job's internal identifier|
|body|body|[JobDatesDto](#schemajobdatesdto)|true|New job dates.|
|» actualEndDate|body|integer(int64)|false|none|
|» actualStartDate|body|integer(int64)|false|none|
|» deadline|body|integer(int64)|false|none|
|» startDate|body|integer(int64)|false|none|

<h3 id="updates-dates-of-a-given-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns list of input and output files of a job.

<a id="opIdgetJobFiles"></a>

> Code samples

```bash
curl https://example.com/jobs/string/files \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /jobs/{jobId}/files`

Returns list of input and output files of a job.

<h3 id="returns-list-of-input-and-output-files-of-a-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|job's internal identifier|

> Example responses

> 200 Response

```json
"/home-api/assets/examples/v1/jobs/getJobFiles.json#responseBody"
```

<h3 id="returns-list-of-input-and-output-files-of-a-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[JobFilesDTO](#schemajobfilesdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## assignFileToJobOutput

<a id="opIdassignFileToJobOutput"></a>

> Code samples

```bash
curl https://example.com/jobs/string/files/output \
  -X POST \
  -H 'Content-Type: application/json;charset=UTF-8' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v1/jobs/assignFileToJobOutput.json#requestBody"'
```

`POST /jobs/{jobId}/files/output`

> Body parameter

```json
"/home-api/assets/examples/v1/jobs/assignFileToJobOutput.json#requestBody"
```

<h3 id="assignfiletojoboutput-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|job's internal identifier|
|body|body|[TaskFileDTO](#schemataskfiledto)|true|Assigns file to job output files.|
|» category|body|string|false|file category|
|» content|body|string|false|none|
|» name|body|string|false|none|
|» token|body|string|false|none|
|» url|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» category|WORKFILE|
|» category|TM|
|» category|DICTIONARY|
|» category|REF|
|» category|LOG_FILE|

<h3 id="assignfiletojoboutput-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns file metadata.

<a id="opIdgetJobFiles_1"></a>

> Code samples

```bash
curl https://example.com/jobs/string/files/0 \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /jobs/{jobId}/files/{fileId}`

Returns file metadata.

<h3 id="returns-file-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|job's internal identifier|
|fileId|path|integer(int64)|true|file's internal identifier|

> Example responses

> 200 Response

```json
"/home-api/assets/examples/v1/jobs/getJobFileMetadata.json#responseBody"
```

<h3 id="returns-file-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[FileMetadataDTO](#schemafilemetadatadto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates instructions for a job.

<a id="opIdupdateInstructions"></a>

> Code samples

```bash
curl https://example.com/jobs/string/instructions \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v1/jobs/updateInstructionsForJob.json#requestBody"'
```

`PUT /jobs/{jobId}/instructions`

Updates instructions for a job.

> Body parameter

```json
"/home-api/assets/examples/v1/jobs/updateInstructionsForJob.json#requestBody"
```

<h3 id="updates-instructions-for-a-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|job's internal identifier|
|body|body|[InstructionsDTO](#schemainstructionsdto)|true|Updated instructions for a job.|
|» forProvider|body|string|false|none|
|» fromCustomer|body|string|false|none|
|» internal|body|string|false|none|
|» notes|body|string|false|none|
|» paymentNoteForCustomer|body|string|false|none|
|» paymentNoteForVendor|body|string|false|none|

<h3 id="updates-instructions-for-a-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Changes job status if possible (400 Bad Request is returned otherwise).

<a id="opIdchangeStatus"></a>

> Code samples

```bash
curl https://example.com/jobs/string/status \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v1/jobs/changeStatus.json#requestBody"'
```

`PUT /jobs/{jobId}/status`

Changes job status if possible (400 Bad Request is returned otherwise). The status has to be specified using one of the following keys:<ul><li>OPEN – available when the job has one of the following statuses: ACCEPTED, CANCELED</li><li>ACCEPTED – available when the job has one of the following statuses: OPEN (Vendor and dates have to be set before calling the operation), STARTED</li><li>STARTED – available when the job has one of the following statuses: ACCEPTED, READY</li><li>READY – available when the job has one of the following statuses: STARTED</li><li>CANCELLED – available when the job has one of the following statuses: OPEN, ACCEPTED, STARTED, OFFERS_SENT</li><li>OFFERS_SENT – not available as a target status for this operation</li></ul>

> Body parameter

```json
"/home-api/assets/examples/v1/jobs/changeStatus.json#requestBody"
```

<h3 id="changes-job-status-if-possible-400-bad-request-is-returned-otherwise-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|job's internal identifier|
|body|body|[JobStatusDTO](#schemajobstatusdto)|true|Changed job status.|
|» externalId|body|string|false|none|
|» status|body|string|false|none|

<h3 id="changes-job-status-if-possible-400-bad-request-is-returned-otherwise-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Assigns vendor to a job in a project.

<a id="opIdassignVendor"></a>

> Code samples

```bash
curl https://example.com/jobs/string/vendor \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v1/jobs/assignVendor.json#requestBody"'
```

`PUT /jobs/{jobId}/vendor`

Assigns vendor to a job in a project.

> Body parameter

```json
"/home-api/assets/examples/v1/jobs/assignVendor.json#requestBody"
```

<h3 id="assigns-vendor-to-a-job-in-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|job's internal identifier|
|body|body|[AssignVendorDTO](#schemaassignvendordto)|true|Assigned vendor to a job in a project.|
|» recalculateRates|body|boolean|false|none|
|» vendorPriceProfileId|body|integer(int64)|false|none|

<h3 id="assigns-vendor-to-a-job-in-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

<h1 id="xtrf-home-portal-api-projects-classic">Projects (Classic)</h1>

To change the description use /examples/TagsDescriptions.json

## Creates a new Classic Project.

<a id="opIdcreate_5"></a>

> Code samples

```bash
curl https://example.com/projects \
  -X POST \
  -H 'Content-Type: application/json;charset=UTF-8' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v1/projects/createProject.json#requestBody"'
```

`POST /projects`

Creates a new Classic Project. If the specified service ID refers to Smart Project, 400 Bad Request is returned instead.

> Body parameter

```json
"/home-api/assets/examples/v1/projects/createProject.json#requestBody"
```

<h3 id="creates-a-new-classic-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ClassicProjectCreateDTO](#schemaclassicprojectcreatedto)|true|Created a new Classic Project.|
|» categoriesIds|body|[integer(int64)]|false|list of language categories|
|» customerId|body|integer(int64)|true|none|
|» dates|body|[ProjectDatesDTO](#schemaprojectdatesdto)|false|none|
|» inputFiles|body|[[TaskFileDTO](#schemataskfiledto)]|false|input files|
|» instructions|body|[InstructionsDTO](#schemainstructionsdto)|false|none|
|» name|body|string|false|none|
|» people|body|[ClassicPeopleDTO](#schemaclassicpeopledto)|false|people|
|» serviceId|body|integer(int64)|true|none|
|» sourceLanguageId|body|integer(int64)|false|none|
|» specializationId|body|integer(int64)|true|none|
|» targetLanguagesIds|body|[integer(int64)]|false|none|

> Example responses

> default Response

```json
"/home-api/assets/examples/v1/projects/createProject.json#responseBody"
```

<h3 id="creates-a-new-classic-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ProjectDTOv1](#schemaprojectdtov1)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Downloads a file.

<a id="opIdgetFileById"></a>

> Code samples

```bash
curl https://example.com/projects/files/string/download \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /projects/files/{fileId}/download`

Downloads a file.

<h3 id="downloads-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|file's internal identifier|

<h3 id="downloads-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success!|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns projects' internal identifiers.

<a id="opIdgetAllIds_6"></a>

> Code samples

```bash
curl https://example.com/projects/ids \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /projects/ids`

Returns projects' internal identifiers.

<h3 id="returns-projects-internal-identifiers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|updatedSince|query|integer(int64)|false|only projects modified since this timestamp|

> Example responses

> default Response

```json
"/home-api/assets/examples/v1/projects/getIds.json#responseBody"
```

<h3 id="returns-projects-internal-identifiers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|Inline|

<h3 id="returns-projects-internal-identifiers-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns project details.

<a id="opIdgetById_7"></a>

> Code samples

```bash
curl https://example.com/projects/string \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /projects/{projectId}`

Returns project details. If the specified project ID refers to Smart Project, 400 Bad Request is returned instead.

<h3 id="returns-project-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|embed|query|string|false|list of additional fields which should be embedded in the response (available options: tasks)|

> Example responses

> default Response

```json
"/home-api/assets/examples/v1/projects/getById.json#responseBody"
```

<h3 id="returns-project-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ProjectDTOv1](#schemaprojectdtov1)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Removes a project.

<a id="opIddelete_12"></a>

> Code samples

```bash
curl https://example.com/projects/string \
  -X DELETE \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`DELETE /projects/{projectId}`

Removes a project.

<h3 id="removes-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|

<h3 id="removes-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns contacts of a given project.

<a id="opIdgetContacts"></a>

> Code samples

```bash
curl https://example.com/projects/string/contacts \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /projects/{projectId}/contacts`

Returns contacts of a given project.

<h3 id="returns-contacts-of-a-given-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/v1/projects/getContacts.json#responseBody"
```

<h3 id="returns-contacts-of-a-given-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ContactsDTO](#schemacontactsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates contacts of a given project.

<a id="opIdupdateContacts"></a>

> Code samples

```bash
curl https://example.com/projects/string/contacts \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v1/projects/updateContacts.json#requestBody"'
```

`PUT /projects/{projectId}/contacts`

Updates contacts of a given project.

> Body parameter

```json
"/home-api/assets/examples/v1/projects/updateContacts.json#requestBody"
```

<h3 id="updates-contacts-of-a-given-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|body|body|[ContactsDTO](#schemacontactsdto)|true|Updated contacts of a given project.|
|» additionalIds|body|[integer(int64)]|false|none|
|» primaryId|body|integer(int64)|false|none|
|» sendBackToId|body|integer(int64)|false|none|

> Example responses

> default Response

```json
"/home-api/assets/examples/v1/projects/updateContacts.json#responseBody"
```

<h3 id="updates-contacts-of-a-given-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ContactsDTO](#schemacontactsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns custom fields of a given project.

<a id="opIdgetCustomFields_5"></a>

> Code samples

```bash
curl https://example.com/projects/string/customFields \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /projects/{projectId}/customFields`

Returns custom fields of a given project.

<h3 id="returns-custom-fields-of-a-given-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/v1/projects/getCustomFields.json#responseBody"
```

<h3 id="returns-custom-fields-of-a-given-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CustomFieldsDTO](#schemacustomfieldsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates custom fields of a given project.

<a id="opIdupdateCustomFields_3"></a>

> Code samples

```bash
curl https://example.com/projects/string/customFields \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v1/projects/updateCustomFields.json#requestBody"'
```

`PUT /projects/{projectId}/customFields`

Updates custom fields of a given project.

> Body parameter

```json
"/home-api/assets/examples/v1/projects/updateCustomFields.json#requestBody"
```

<h3 id="updates-custom-fields-of-a-given-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|body|body|[CustomFieldsDTO](#schemacustomfieldsdto)|true|Updated custom fields of a given project.|

> Example responses

> default Response

```json
"/home-api/assets/examples/v1/projects/updateCustomFields.json#responseBody"
```

<h3 id="updates-custom-fields-of-a-given-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CustomFieldsDTO](#schemacustomfieldsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns dates of a given project.

<a id="opIdgetDates_1"></a>

> Code samples

```bash
curl https://example.com/projects/string/dates \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /projects/{projectId}/dates`

Returns dates of a given project.

<h3 id="returns-dates-of-a-given-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/v1/projects/getDates.json#responseBody"
```

<h3 id="returns-dates-of-a-given-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ProjectDatesDTO](#schemaprojectdatesdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates dates of a given project.

<a id="opIdupdateDates_1"></a>

> Code samples

```bash
curl https://example.com/projects/string/dates \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v1/projects/updateDates.json#requestBody"'
```

`PUT /projects/{projectId}/dates`

Updates dates of a given project.

> Body parameter

```json
"/home-api/assets/examples/v1/projects/updateDates.json#requestBody"
```

<h3 id="updates-dates-of-a-given-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|body|body|[ProjectDatesDTO](#schemaprojectdatesdto)|true|Updated dates of a given project..|
|» actualDeliveryDate|body|[TimeDTO](#schematimedto)|false|none|
|» actualStartDate|body|[TimeDTO](#schematimedto)|false|none|
|» deadline|body|[TimeDTO](#schematimedto)|false|none|
|» startDate|body|[TimeDTO](#schematimedto)|false|none|

> Example responses

> default Response

```json
"/home-api/assets/examples/v1/projects/updateDates.json#responseBody"
```

<h3 id="updates-dates-of-a-given-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ProjectDatesDTO](#schemaprojectdatesdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns finance of a given project.

<a id="opIdgetFinance"></a>

> Code samples

```bash
curl https://example.com/projects/string/finance \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /projects/{projectId}/finance`

Returns finance of a given project.

<h3 id="returns-finance-of-a-given-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/v1/projects/getFinance.json#responseBody"
```

<h3 id="returns-finance-of-a-given-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[FinanceDTO](#schemafinancedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Adds a payable to a project.

<a id="opIdcreatePayable"></a>

> Code samples

```bash
curl https://example.com/projects/string/finance/payables \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v1/projects/createPayable.json#requestBody"'
```

`POST /projects/{projectId}/finance/payables`

Adds a payable to a project.

> Body parameter

```json
"/home-api/assets/examples/v1/projects/createPayable.json#requestBody"
```

<h3 id="adds-a-payable-to-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|body|body|[PayableCreateDTO](#schemapayablecreatedto)|true|none|
|» calculationUnitId|body|integer(int64)|false|none|
|» catLogFile|body|[FileDTO](#schemafiledto)|false|none|
|» currencyId|body|integer(int64)|false|none|
|» description|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» ignoreMinimumCharge|body|boolean|false|none|
|» invoiceId|body|string|false|none|
|» jobId|body|object|false|none|
|» jobTypeId|body|integer(int64)|false|none|
|» languageCombination|body|[ChargeLanguageCombinationDTO](#schemachargelanguagecombinationdto)|false|none|
|» languageCombinationIdNumber|body|string|false|none|
|» minimumCharge|body|number|false|none|
|» quantity|body|number|false|none|
|» rate|body|number|false|none|
|» rateOrigin|body|string|false|none|
|» total|body|number|false|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» rateOrigin|PRICE_PROFILE|
|» rateOrigin|PRICE_LIST|
|» rateOrigin|FILLED_MANUALLY|
|» rateOrigin|AUTOCALCULATED|
|» type|SIMPLE|
|» type|CAT|

> Example responses

> default Response

```json
"/home-api/assets/examples/v1/projects/createPayable.json#responseBody"
```

<h3 id="adds-a-payable-to-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[PayableDTO](#schemapayabledto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates a payable.

<a id="opIdupdatePayable"></a>

> Code samples

```bash
curl https://example.com/projects/string/finance/payables/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v1/projects/updatePayable.json#requestBody"'
```

`PUT /projects/{projectId}/finance/payables/{payableId}`

Updates a payable.

> Body parameter

```json
"/home-api/assets/examples/v1/projects/updatePayable.json#requestBody"
```

<h3 id="updates-a-payable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|payableId|path|integer(int64)|true|payable's internal identifier|
|body|body|[PayableDTO](#schemapayabledto)|true|none|
|» calculationUnitId|body|integer(int64)|false|none|
|» currencyId|body|integer(int64)|false|none|
|» description|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» ignoreMinimumCharge|body|boolean|false|none|
|» invoiceId|body|string|false|none|
|» jobId|body|object|false|none|
|» jobTypeId|body|integer(int64)|false|none|
|» languageCombination|body|[ChargeLanguageCombinationDTO](#schemachargelanguagecombinationdto)|false|none|
|» languageCombinationIdNumber|body|string|false|none|
|» minimumCharge|body|number|false|none|
|» quantity|body|number|false|none|
|» rate|body|number|false|none|
|» rateOrigin|body|string|false|none|
|» total|body|number|false|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» rateOrigin|PRICE_PROFILE|
|» rateOrigin|PRICE_LIST|
|» rateOrigin|FILLED_MANUALLY|
|» rateOrigin|AUTOCALCULATED|
|» type|SIMPLE|
|» type|CAT|

> Example responses

> default Response

```json
"/home-api/assets/examples/v1/projects/updatePayable.json#responseBody"
```

<h3 id="updates-a-payable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[PayableDTO](#schemapayabledto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Deletes a payable.

<a id="opIddeletePayable"></a>

> Code samples

```bash
curl https://example.com/projects/string/finance/payables/0 \
  -X DELETE \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`DELETE /projects/{projectId}/finance/payables/{payableId}`

Deletes a payable.

<h3 id="deletes-a-payable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|payableId|path|integer(int64)|true|payable's internal identifier|

<h3 id="deletes-a-payable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Adds a receivable to a project.

<a id="opIdcreateReceivable"></a>

> Code samples

```bash
curl https://example.com/projects/string/finance/receivables \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v1/projects/createReceivable.json#requestBody"'
```

`POST /projects/{projectId}/finance/receivables`

Adds a receivable to a project.

> Body parameter

```json
"/home-api/assets/examples/v1/projects/createReceivable.json#requestBody"
```

<h3 id="adds-a-receivable-to-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|body|body|[ReceivableCreateDTO](#schemareceivablecreatedto)|true|none|
|» calculationUnitId|body|integer(int64)|false|none|
|» catLogFile|body|[FileDTO](#schemafiledto)|false|none|
|» currencyId|body|integer(int64)|false|none|
|» description|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» ignoreMinimumCharge|body|boolean|false|none|
|» invoiceId|body|string|false|none|
|» jobTypeId|body|integer(int64)|false|none|
|» languageCombination|body|[ChargeLanguageCombinationDTO](#schemachargelanguagecombinationdto)|false|none|
|» languageCombinationIdNumber|body|string|false|none|
|» minimumCharge|body|number|false|none|
|» quantity|body|number|false|none|
|» rate|body|number|false|none|
|» rateOrigin|body|string|false|none|
|» taskId|body|integer(int64)|false|none|
|» total|body|number|false|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» rateOrigin|PRICE_PROFILE|
|» rateOrigin|PRICE_LIST|
|» rateOrigin|FILLED_MANUALLY|
|» rateOrigin|AUTOCALCULATED|
|» type|SIMPLE|
|» type|CAT|

> Example responses

> default Response

```json
"/home-api/assets/examples/v1/projects/createReceivable.json#responseBody"
```

<h3 id="adds-a-receivable-to-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ReceivableDTO](#schemareceivabledto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates a receivable.

<a id="opIdupdateReceivable"></a>

> Code samples

```bash
curl https://example.com/projects/string/finance/receivables/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v1/projects/updateReceivable.json#requestBody"'
```

`PUT /projects/{projectId}/finance/receivables/{receivableId}`

Updates a receivable.

> Body parameter

```json
"/home-api/assets/examples/v1/projects/updateReceivable.json#requestBody"
```

<h3 id="updates-a-receivable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|receivableId|path|integer(int64)|true|receivable's internal identifier|
|body|body|[ReceivableDTO](#schemareceivabledto)|true|none|
|» calculationUnitId|body|integer(int64)|false|none|
|» currencyId|body|integer(int64)|false|none|
|» description|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» ignoreMinimumCharge|body|boolean|false|none|
|» invoiceId|body|string|false|none|
|» jobTypeId|body|integer(int64)|false|none|
|» languageCombination|body|[ChargeLanguageCombinationDTO](#schemachargelanguagecombinationdto)|false|none|
|» languageCombinationIdNumber|body|string|false|none|
|» minimumCharge|body|number|false|none|
|» quantity|body|number|false|none|
|» rate|body|number|false|none|
|» rateOrigin|body|string|false|none|
|» taskId|body|integer(int64)|false|none|
|» total|body|number|false|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» rateOrigin|PRICE_PROFILE|
|» rateOrigin|PRICE_LIST|
|» rateOrigin|FILLED_MANUALLY|
|» rateOrigin|AUTOCALCULATED|
|» type|SIMPLE|
|» type|CAT|

> Example responses

> default Response

```json
"/home-api/assets/examples/v1/projects/updateReceivable.json#responseBody"
```

<h3 id="updates-a-receivable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ReceivableDTO](#schemareceivabledto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Deletes a receivable.

<a id="opIddeleteReceivable"></a>

> Code samples

```bash
curl https://example.com/projects/string/finance/receivables/0 \
  -X DELETE \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`DELETE /projects/{projectId}/finance/receivables/{receivableId}`

Deletes a receivable.

<h3 id="deletes-a-receivable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|receivableId|path|integer(int64)|true|receivable's internal identifier|

<h3 id="deletes-a-receivable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns instructions of a given project.

<a id="opIdgetInstructions"></a>

> Code samples

```bash
curl https://example.com/projects/string/instructions \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /projects/{projectId}/instructions`

Returns instructions of a given project.

<h3 id="returns-instructions-of-a-given-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/v1/projects/getInstructions.json#responseBody"
```

<h3 id="returns-instructions-of-a-given-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[InstructionsDTO](#schemainstructionsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates instructions of a given project.

<a id="opIdupdateInstructions_1"></a>

> Code samples

```bash
curl https://example.com/projects/string/instructions \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v1/projects/updateInstructions.json#requestBody"'
```

`PUT /projects/{projectId}/instructions`

Updates instructions of a given project.

> Body parameter

```json
"/home-api/assets/examples/v1/projects/updateInstructions.json#requestBody"
```

<h3 id="updates-instructions-of-a-given-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|body|body|[InstructionsDTO](#schemainstructionsdto)|true|Updated instructions of a given project.|
|» forProvider|body|string|false|none|
|» fromCustomer|body|string|false|none|
|» internal|body|string|false|none|
|» notes|body|string|false|none|
|» paymentNoteForCustomer|body|string|false|none|
|» paymentNoteForVendor|body|string|false|none|

> Example responses

> default Response

```json
"/home-api/assets/examples/v1/projects/updateInstructions.json#responseBody"
```

<h3 id="updates-instructions-of-a-given-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[InstructionsDTO](#schemainstructionsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Creates a new language combination for a given project without creating a task.

<a id="opIdcreateLanguageCombination"></a>

> Code samples

```bash
curl https://example.com/projects/string/languageCombinations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v1/projects/createLanguageCombination.json#requestBody"'
```

`POST /projects/{projectId}/languageCombinations`

Creates a new language combination for a given project without creating a task.

> Body parameter

```json
"/home-api/assets/examples/v1/projects/createLanguageCombination.json#requestBody"
```

<h3 id="creates-a-new-language-combination-for-a-given-project-without-creating-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|body|body|[CommonLanguageCombinationDTO](#schemacommonlanguagecombinationdto)|true|Created language combination for a given project without creating a task.|
|» sourceLanguageId|body|integer(int64)|false|none|
|» targetLanguageId|body|integer(int64)|false|none|

> Example responses

> default Response

```json
"/home-api/assets/examples/v1/projects/createLanguageCombination.json#responseBody"
```

<h3 id="creates-a-new-language-combination-for-a-given-project-without-creating-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CommonLanguageCombinationDTO](#schemacommonlanguagecombinationdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Creates a new task for a given project.

<a id="opIdcreateTask"></a>

> Code samples

```bash
curl https://example.com/projects/string/tasks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v1/projects/createTask.json#requestBody"'
```

`POST /projects/{projectId}/tasks`

Creates a new task for a given project.<p>
  Required fields:
  <ul>
    <li>languageCombination</li>
    <li>specializationId</li>
    <li>workflowId</li>
  </ul>
</p>


> Body parameter

```json
"/home-api/assets/examples/v1/projects/createTask.json#requestBody"
```

<h3 id="creates-a-new-task-for-a-given-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|body|body|[TaskCreateDTO](#schemataskcreatedto)|true|Created new task for a given project.|
|» clientTaskPONumber|body|string|false|client task PO number|
|» dates|body|[ProjectDatesDTO](#schemaprojectdatesdto)|false|none|
|» files|body|[[TaskFileDTO](#schemataskfiledto)]|false|files|
|» instructions|body|[InstructionsDTO](#schemainstructionsdto)|false|none|
|» languageCombination|body|[CommonLanguageCombinationDTO](#schemacommonlanguagecombinationdto)|false|language combination (ie. PL -> EN)|
|» name|body|string|false|name|
|» people|body|[ClassicPeopleDTO](#schemaclassicpeopledto)|false|people|
|» specializationId|body|integer(int64)|false|specialization|
|» workflowId|body|integer(int64)|false|workflow|

> Example responses

> default Response

```json
"/home-api/assets/examples/v1/projects/createTask.json#responseBody"
```

<h3 id="creates-a-new-task-for-a-given-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[TaskDTO](#schemataskdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

<h1 id="xtrf-home-portal-api-quotes-classic">Quotes (Classic)</h1>

To change the description use /examples/TagsDescriptions.json

## Returns quotes' internal identifiers.

<a id="opIdgetAllIds_7"></a>

> Code samples

```bash
curl https://example.com/quotes/ids \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /quotes/ids`

Returns quotes' internal identifiers.

<h3 id="returns-quotes-internal-identifiers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|updatedSince|query|integer(int64)|false|only quotes modified since this timestamp|

> Example responses

> default Response

```json
"/home-api/assets/examples/v1/quotes/getIds.json#responseBody"
```

<h3 id="returns-quotes-internal-identifiers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|Inline|

<h3 id="returns-quotes-internal-identifiers-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[integer(int32)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns quote details.

<a id="opIdgetById_8"></a>

> Code samples

```bash
curl https://example.com/quotes/string \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /quotes/{quoteId}`

Returns quote details. If the specified quote ID refers to Smart Quote, 400 Bad Request is returned instead.

<h3 id="returns-quote-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|
|embed|query|string|false|list of adittional fields which should be embedded in the response (ie. tasks)|

> Example responses

> default Response

```json
"/home-api/assets/examples/v1/quotes/getById.json#responseBody"
```

<h3 id="returns-quote-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[QuoteDTOv1](#schemaquotedtov1)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Removes a quote.

<a id="opIddelete_13"></a>

> Code samples

```bash
curl https://example.com/quotes/string \
  -X DELETE \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`DELETE /quotes/{quoteId}`

Removes a quote.

<h3 id="removes-a-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|

<h3 id="removes-a-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Sends a quote for customer confirmation.

<a id="opIdsend_1"></a>

> Code samples

```bash
curl https://example.com/quotes/string/confirmation/send \
  -X POST \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`POST /quotes/{quoteId}/confirmation/send`

Sends a quote for customer confirmation. Quote status is changed to SENT and a document is sent to the customer.

<h3 id="sends-a-quote-for-customer-confirmation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|

<h3 id="sends-a-quote-for-customer-confirmation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns custom fields of a given quote.

<a id="opIdgetCustomFields_6"></a>

> Code samples

```bash
curl https://example.com/quotes/string/customFields \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /quotes/{quoteId}/customFields`

Returns custom fields of a given quote.

<h3 id="returns-custom-fields-of-a-given-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/v1/quotes/getCustomFields.json#responseBody"
```

<h3 id="returns-custom-fields-of-a-given-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CustomFieldsDTO](#schemacustomfieldsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates custom fields of a given quote.

<a id="opIdupdateCustomFields_4"></a>

> Code samples

```bash
curl https://example.com/quotes/string/customFields \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v1/quotes/updateCustomFields.json#requestBody"'
```

`PUT /quotes/{quoteId}/customFields`

Updates custom fields of a given quote.

> Body parameter

```json
"/home-api/assets/examples/v1/quotes/updateCustomFields.json#requestBody"
```

<h3 id="updates-custom-fields-of-a-given-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|
|body|body|[CustomFieldsDTO](#schemacustomfieldsdto)|true|Updated custom fields of a given quote.|

> Example responses

> default Response

```json
"/home-api/assets/examples/v1/quotes/updateCustomFields.json#responseBody"
```

<h3 id="updates-custom-fields-of-a-given-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CustomFieldsDTO](#schemacustomfieldsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns dates of a given quote.

<a id="opIdgetDates_2"></a>

> Code samples

```bash
curl https://example.com/quotes/string/dates \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /quotes/{quoteId}/dates`

Returns dates of a given quote.

<h3 id="returns-dates-of-a-given-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/v1/quotes/getDates.json#responseBody"
```

<h3 id="returns-dates-of-a-given-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[QuoteDatesDTO](#schemaquotedatesdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns finance of a given quote.

<a id="opIdgetFinance_1"></a>

> Code samples

```bash
curl https://example.com/quotes/string/finance \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /quotes/{quoteId}/finance`

Returns finance of a given quote.

<h3 id="returns-finance-of-a-given-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/v1/quotes/getFinance.json#responseBody"
```

<h3 id="returns-finance-of-a-given-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[FinanceDTO](#schemafinancedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Adds a payable.

<a id="opIdcreatePayable_1"></a>

> Code samples

```bash
curl https://example.com/quotes/string/finance/payables \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v1/quotes/createCATPayable.json#requestBody"'
```

`POST /quotes/{quoteId}/finance/payables`

Adds a payable.

> Body parameter

```json
"/home-api/assets/examples/v1/quotes/createCATPayable.json#requestBody"
```

<h3 id="adds-a-payable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|
|body|body|[PayableCreateDTO](#schemapayablecreatedto)|true|Adds a payable.|
|» calculationUnitId|body|integer(int64)|false|none|
|» catLogFile|body|[FileDTO](#schemafiledto)|false|none|
|» currencyId|body|integer(int64)|false|none|
|» description|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» ignoreMinimumCharge|body|boolean|false|none|
|» invoiceId|body|string|false|none|
|» jobId|body|object|false|none|
|» jobTypeId|body|integer(int64)|false|none|
|» languageCombination|body|[ChargeLanguageCombinationDTO](#schemachargelanguagecombinationdto)|false|none|
|» languageCombinationIdNumber|body|string|false|none|
|» minimumCharge|body|number|false|none|
|» quantity|body|number|false|none|
|» rate|body|number|false|none|
|» rateOrigin|body|string|false|none|
|» total|body|number|false|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» rateOrigin|PRICE_PROFILE|
|» rateOrigin|PRICE_LIST|
|» rateOrigin|FILLED_MANUALLY|
|» rateOrigin|AUTOCALCULATED|
|» type|SIMPLE|
|» type|CAT|

> Example responses

> default Response

```json
"/home-api/assets/examples/v1/quotes/createCATPayable.json#responseBody"
```

<h3 id="adds-a-payable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[PayableDTO](#schemapayabledto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates a payable.

<a id="opIdupdatePayable_1"></a>

> Code samples

```bash
curl https://example.com/quotes/string/finance/payables/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v1/quotes/updatePayable.json#requestBody"'
```

`PUT /quotes/{quoteId}/finance/payables/{payableId}`

Updates a payable.

> Body parameter

```json
"/home-api/assets/examples/v1/quotes/updatePayable.json#requestBody"
```

<h3 id="updates-a-payable-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|
|payableId|path|integer(int64)|true|payable's internal identifier|
|body|body|[PayableDTO](#schemapayabledto)|true|Updates a payable.|
|» calculationUnitId|body|integer(int64)|false|none|
|» currencyId|body|integer(int64)|false|none|
|» description|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» ignoreMinimumCharge|body|boolean|false|none|
|» invoiceId|body|string|false|none|
|» jobId|body|object|false|none|
|» jobTypeId|body|integer(int64)|false|none|
|» languageCombination|body|[ChargeLanguageCombinationDTO](#schemachargelanguagecombinationdto)|false|none|
|» languageCombinationIdNumber|body|string|false|none|
|» minimumCharge|body|number|false|none|
|» quantity|body|number|false|none|
|» rate|body|number|false|none|
|» rateOrigin|body|string|false|none|
|» total|body|number|false|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» rateOrigin|PRICE_PROFILE|
|» rateOrigin|PRICE_LIST|
|» rateOrigin|FILLED_MANUALLY|
|» rateOrigin|AUTOCALCULATED|
|» type|SIMPLE|
|» type|CAT|

> Example responses

> default Response

```json
"/home-api/assets/examples/v1/quotes/updatePayable.json#responseBody"
```

<h3 id="updates-a-payable-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[PayableDTO](#schemapayabledto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Deletes a payable.

<a id="opIddeletePayable_1"></a>

> Code samples

```bash
curl https://example.com/quotes/string/finance/payables/0 \
  -X DELETE \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`DELETE /quotes/{quoteId}/finance/payables/{payableId}`

Deletes a payable.

<h3 id="deletes-a-payable-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quoteId's internal identifier|
|payableId|path|integer(int64)|true|payable's internal identifier|

<h3 id="deletes-a-payable-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Adds a receivable.

<a id="opIdcreateReceivable_1"></a>

> Code samples

```bash
curl https://example.com/quotes/string/finance/receivables \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v1/quotes/createReceivable.json#requestBody"'
```

`POST /quotes/{quoteId}/finance/receivables`

Adds a receivable.

> Body parameter

```json
"/home-api/assets/examples/v1/quotes/createReceivable.json#requestBody"
```

<h3 id="adds-a-receivable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|
|body|body|[ReceivableCreateDTO](#schemareceivablecreatedto)|true|Adds a receivable.|
|» calculationUnitId|body|integer(int64)|false|none|
|» catLogFile|body|[FileDTO](#schemafiledto)|false|none|
|» currencyId|body|integer(int64)|false|none|
|» description|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» ignoreMinimumCharge|body|boolean|false|none|
|» invoiceId|body|string|false|none|
|» jobTypeId|body|integer(int64)|false|none|
|» languageCombination|body|[ChargeLanguageCombinationDTO](#schemachargelanguagecombinationdto)|false|none|
|» languageCombinationIdNumber|body|string|false|none|
|» minimumCharge|body|number|false|none|
|» quantity|body|number|false|none|
|» rate|body|number|false|none|
|» rateOrigin|body|string|false|none|
|» taskId|body|integer(int64)|false|none|
|» total|body|number|false|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» rateOrigin|PRICE_PROFILE|
|» rateOrigin|PRICE_LIST|
|» rateOrigin|FILLED_MANUALLY|
|» rateOrigin|AUTOCALCULATED|
|» type|SIMPLE|
|» type|CAT|

> Example responses

> default Response

```json
"/home-api/assets/examples/v1/quotes/createReceivable.json#responseBody"
```

<h3 id="adds-a-receivable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ReceivableDTO](#schemareceivabledto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates a receivable.

<a id="opIdupdateReceivable_1"></a>

> Code samples

```bash
curl https://example.com/quotes/string/finance/receivables/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v1/quotes/updateReceivable.json#requestBody"'
```

`PUT /quotes/{quoteId}/finance/receivables/{receivableId}`

Updates a receivable.

> Body parameter

```json
"/home-api/assets/examples/v1/quotes/updateReceivable.json#requestBody"
```

<h3 id="updates-a-receivable-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|
|receivableId|path|integer(int64)|true|receivable's internal identifier|
|body|body|[ReceivableDTO](#schemareceivabledto)|true|Updates a receivable.|
|» calculationUnitId|body|integer(int64)|false|none|
|» currencyId|body|integer(int64)|false|none|
|» description|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» ignoreMinimumCharge|body|boolean|false|none|
|» invoiceId|body|string|false|none|
|» jobTypeId|body|integer(int64)|false|none|
|» languageCombination|body|[ChargeLanguageCombinationDTO](#schemachargelanguagecombinationdto)|false|none|
|» languageCombinationIdNumber|body|string|false|none|
|» minimumCharge|body|number|false|none|
|» quantity|body|number|false|none|
|» rate|body|number|false|none|
|» rateOrigin|body|string|false|none|
|» taskId|body|integer(int64)|false|none|
|» total|body|number|false|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» rateOrigin|PRICE_PROFILE|
|» rateOrigin|PRICE_LIST|
|» rateOrigin|FILLED_MANUALLY|
|» rateOrigin|AUTOCALCULATED|
|» type|SIMPLE|
|» type|CAT|

> Example responses

> default Response

```json
"/home-api/assets/examples/v1/quotes/updateReceivable.json#responseBody"
```

<h3 id="updates-a-receivable-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ReceivableDTO](#schemareceivabledto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Deletes a receivable.

<a id="opIddeleteReceivable_1"></a>

> Code samples

```bash
curl https://example.com/quotes/string/finance/receivables/0 \
  -X DELETE \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`DELETE /quotes/{quoteId}/finance/receivables/{receivableId}`

Deletes a receivable.

<h3 id="deletes-a-receivable-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quoteId's internal identifier|
|receivableId|path|integer(int64)|true|receivable's internal identifier|

<h3 id="deletes-a-receivable-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns instructions of a given quote.

<a id="opIdgetInstructions_1"></a>

> Code samples

```bash
curl https://example.com/quotes/string/instructions \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /quotes/{quoteId}/instructions`

Returns instructions of a given quote.

<h3 id="returns-instructions-of-a-given-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/v1/quotes/getInstructions.json#responseBody"
```

<h3 id="returns-instructions-of-a-given-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[InstructionsDTO](#schemainstructionsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates instructions of a given quote.

<a id="opIdupdateInstructions_2"></a>

> Code samples

```bash
curl https://example.com/quotes/string/instructions \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v1/quotes/updateInstructions.json#requestBody"'
```

`PUT /quotes/{quoteId}/instructions`

Updates instructions of a given quote.

> Body parameter

```json
"/home-api/assets/examples/v1/quotes/updateInstructions.json#requestBody"
```

<h3 id="updates-instructions-of-a-given-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|
|body|body|[InstructionsDTO](#schemainstructionsdto)|true|Updated instructions of a given project.|
|» forProvider|body|string|false|none|
|» fromCustomer|body|string|false|none|
|» internal|body|string|false|none|
|» notes|body|string|false|none|
|» paymentNoteForCustomer|body|string|false|none|
|» paymentNoteForVendor|body|string|false|none|

> Example responses

> default Response

```json
"/home-api/assets/examples/v1/quotes/updateInstructions.json#responseBody"
```

<h3 id="updates-instructions-of-a-given-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[InstructionsDTO](#schemainstructionsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Creates a new language combination for a given quote without creating a task.

<a id="opIdcreateLanguageCombination_1"></a>

> Code samples

```bash
curl https://example.com/quotes/string/languageCombinations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v1/quotes/createLanguageCombination.json#requestBody"'
```

`POST /quotes/{quoteId}/languageCombinations`

Creates a new language combination for a given quote without creating a task.

> Body parameter

```json
"/home-api/assets/examples/v1/quotes/createLanguageCombination.json#requestBody"
```

<h3 id="creates-a-new-language-combination-for-a-given-quote-without-creating-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|
|body|body|[CommonLanguageCombinationDTO](#schemacommonlanguagecombinationdto)|true|Created a new language combination for a given quote without creating a task.|
|» sourceLanguageId|body|integer(int64)|false|none|
|» targetLanguageId|body|integer(int64)|false|none|

> Example responses

> default Response

```json
"/home-api/assets/examples/v1/quotes/createLanguageCombination.json#responseBody"
```

<h3 id="creates-a-new-language-combination-for-a-given-quote-without-creating-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CommonLanguageCombinationDTO](#schemacommonlanguagecombinationdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Starts a quote.

<a id="opIdstart"></a>

> Code samples

```bash
curl https://example.com/quotes/string/start \
  -X POST \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`POST /quotes/{quoteId}/start`

Starts a quote.

<h3 id="starts-a-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|

<h3 id="starts-a-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Creates a new task for a given quote.

<a id="opIdcreateTask_1"></a>

> Code samples

```bash
curl https://example.com/quotes/string/tasks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v1/quotes/createTask.json#requestBody"'
```

`POST /quotes/{quoteId}/tasks`

Creates a new task for a given quote. Required fields are presented in the example.

> Body parameter

```json
"/home-api/assets/examples/v1/quotes/createTask.json#requestBody"
```

<h3 id="creates-a-new-task-for-a-given-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|
|body|body|[TaskDTO](#schemataskdto)|true|Updated custom fields of a given quote.|
|» clientTaskPONumber|body|string|false|client task PO number|
|» customFields|body|[[CustomFieldDTO](#schemacustomfielddto)]|false|none|
|» dates|body|[ProjectDatesDTO](#schemaprojectdatesdto)|false|none|
|» finance|body|[TaskFinanceDTO](#schemataskfinancedto)|false|finance|
|» id|body|integer(int64)|false|internal identifier|
|» idNumber|body|string|false|identifier|
|» instructions|body|[InstructionsDTO](#schemainstructionsdto)|false|none|
|» jobs|body|[TaskJobsDTO](#schemataskjobsdto)|false|none|
|» languageCombination|body|[CommonLanguageCombinationDTO](#schemacommonlanguagecombinationdto)|false|language combination (ie. PL -> EN)|
|» name|body|string|false|name|
|» people|body|[ClassicPeopleDTO](#schemaclassicpeopledto)|false|people|
|» projectId|body|integer(int64)|false|project's internal identifier|
|» quoteId|body|integer(int64)|false|quote's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/v1/quotes/createTask.json#responseBody"
```

<h3 id="creates-a-new-task-for-a-given-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[TaskDTO](#schemataskdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

<h1 id="xtrf-home-portal-api-tasks-classic">Tasks (Classic)</h1>

To change the description use /examples/TagsDescriptions.json

## Removes a task.

<a id="opIddelete_14"></a>

> Code samples

```bash
curl https://example.com/tasks/string \
  -X DELETE \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`DELETE /tasks/{taskId}`

Removes a task.

<h3 id="removes-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskId|path|string|true|task's internal identifier|
|removeFilesFromDisc|query|boolean|false|remove files from disc|
|removeExternalProjects|query|boolean|false|remove external projects (ie. from CAT Tool)|
|forceJobsRemoval|query|boolean|false|force jobs removal (ie. started or ready)|

<h3 id="removes-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates Client Task PO Number of a given task.

<a id="opIdupdateClientTaskPONumber"></a>

> Code samples

```bash
curl https://example.com/tasks/string/clientTaskPONumber \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v1/tasks/updateClientTaskPONumber.json#requestBody"'
```

`PUT /tasks/{taskId}/clientTaskPONumber`

Updates Client Task PO Number of a given task.

> Body parameter

```json
"/home-api/assets/examples/v1/tasks/updateClientTaskPONumber.json#requestBody"
```

<h3 id="updates-client-task-po-number-of-a-given-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskId|path|string|true|task's internal identifier|
|body|body|[StringDTO](#schemastringdto)|true|Updated Client Task PO Number of a given task.|
|» value|body|string|false|none|

> Example responses

> 200 Response

```json
"/home-api/assets/examples/v1/tasks/updateClientTaskPONumber.json#responseBody"
```

<h3 id="updates-client-task-po-number-of-a-given-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StringDTO](#schemastringdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns contacts of a given task.

<a id="opIdgetContacts_1"></a>

> Code samples

```bash
curl https://example.com/tasks/string/contacts \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /tasks/{taskId}/contacts`

Returns contacts of a given task.

<h3 id="returns-contacts-of-a-given-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskId|path|string|true|task's internal identifier|

> Example responses

> 200 Response

```json
"/home-api/assets/examples/v1/tasks/getContacts.json#responseBody"
```

<h3 id="returns-contacts-of-a-given-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ContactsDTO](#schemacontactsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates contacts of a given task.

<a id="opIdupdateContacts_1"></a>

> Code samples

```bash
curl https://example.com/tasks/string/contacts \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v1/tasks/updateContacts.json#requestBody"'
```

`PUT /tasks/{taskId}/contacts`

Updates contacts of a given task.

> Body parameter

```json
"/home-api/assets/examples/v1/tasks/updateContacts.json#requestBody"
```

<h3 id="updates-contacts-of-a-given-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskId|path|string|true|task's internal identifier|
|body|body|[ContactsDTO](#schemacontactsdto)|true|Updated contacts of given task.|
|» additionalIds|body|[integer(int64)]|false|none|
|» primaryId|body|integer(int64)|false|none|
|» sendBackToId|body|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{
  "additionalIds": [
    0
  ],
  "primaryId": 0,
  "sendBackToId": 0
}
```

<h3 id="updates-contacts-of-a-given-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ContactsDTO](#schemacontactsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns custom fields of a given task.

<a id="opIdgetCustomFields_7"></a>

> Code samples

```bash
curl https://example.com/tasks/string/customFields \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /tasks/{taskId}/customFields`

Returns custom fields of a given task.

<h3 id="returns-custom-fields-of-a-given-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskId|path|string|true|task's internal identifier|

> Example responses

> 200 Response

```json
"/home-api/assets/examples/v1/tasks/getCustomFields.json#responseBody"
```

<h3 id="returns-custom-fields-of-a-given-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CustomFieldsDTO](#schemacustomfieldsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates custom fields of a given task.

<a id="opIdupdateCustomFields_5"></a>

> Code samples

```bash
curl https://example.com/tasks/string/customFields \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v1/tasks/updateCustomFields.json#requestBody"'
```

`PUT /tasks/{taskId}/customFields`

Updates custom fields of a given task.

> Body parameter

```json
"/home-api/assets/examples/v1/tasks/updateCustomFields.json#requestBody"
```

<h3 id="updates-custom-fields-of-a-given-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskId|path|string|true|task's internal identifier|
|body|body|[CustomFieldsDTO](#schemacustomfieldsdto)|true|Updated custom fields|

> Example responses

> 200 Response

```json
"/home-api/assets/examples/v1/tasks/updateCustomFields.json#responseBody"
```

<h3 id="updates-custom-fields-of-a-given-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CustomFieldsDTO](#schemacustomfieldsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns dates of a given task.

<a id="opIdgetDates_3"></a>

> Code samples

```bash
curl https://example.com/tasks/string/dates \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /tasks/{taskId}/dates`

Returns dates of a given task.

<h3 id="returns-dates-of-a-given-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskId|path|string|true|task's internal identifier|

> Example responses

> 200 Response

```json
"/home-api/assets/examples/v1/tasks/getDates.json#responseBody"
```

<h3 id="returns-dates-of-a-given-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ProjectDatesDTO](#schemaprojectdatesdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates dates of a given task.

<a id="opIdupdateDates_2"></a>

> Code samples

```bash
curl https://example.com/tasks/string/dates \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v1/tasks/updateDates.json#requestBody"'
```

`PUT /tasks/{taskId}/dates`

Updates dates of a given task.

> Body parameter

```json
"/home-api/assets/examples/v1/tasks/updateDates.json#requestBody"
```

<h3 id="updates-dates-of-a-given-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskId|path|string|true|task's internal identifier|
|body|body|[ProjectDatesDTO](#schemaprojectdatesdto)|true|Updated dates of a given task.|
|» actualDeliveryDate|body|[TimeDTO](#schematimedto)|false|none|
|» actualStartDate|body|[TimeDTO](#schematimedto)|false|none|
|» deadline|body|[TimeDTO](#schematimedto)|false|none|
|» startDate|body|[TimeDTO](#schematimedto)|false|none|

> Example responses

> 200 Response

```json
{
  "actualDeliveryDate": {
    "value": 0
  },
  "actualStartDate": {
    "value": 0
  },
  "deadline": {
    "value": 0
  },
  "startDate": {
    "value": 0
  }
}
```

<h3 id="updates-dates-of-a-given-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ProjectDatesDTO](#schemaprojectdatesdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns lists of files of a given task.

<a id="opIdgetTaskFiles"></a>

> Code samples

```bash
curl https://example.com/tasks/string/files \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /tasks/{taskId}/files`

Returns several lists of files for a given task: input files divided by type, output files, bundles, files per job, preview files.

<h3 id="returns-lists-of-files-of-a-given-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskId|path|string|true|task's internal identifier|

> Example responses

> 200 Response

```json
"/home-api/assets/examples/v1/tasks/getTaskFiles.json#responseBody"
```

<h3 id="returns-lists-of-files-of-a-given-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TaskFilesDTO](#schemataskfilesdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Adds files to a given task.

<a id="opIdaddFile"></a>

> Code samples

```bash
curl https://example.com/tasks/string/files/input \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v1/tasks/addFile.json#requestBody"'
```

`POST /tasks/{taskId}/files/input`

Adds files to a given task.

> Body parameter

```json
"/home-api/assets/examples/v1/tasks/addFile.json#requestBody"
```

<h3 id="adds-files-to-a-given-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskId|path|string|true|task's internal identifier|
|body|body|[FileDTO](#schemafiledto)|true|none|
|» content|body|string|false|none|
|» name|body|string|false|none|
|» token|body|string|false|none|
|» url|body|string|false|none|

<h3 id="adds-files-to-a-given-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns instructions of a given task.

<a id="opIdgetInstructions_2"></a>

> Code samples

```bash
curl https://example.com/tasks/string/instructions \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /tasks/{taskId}/instructions`

Returns instructions of a given task.

<h3 id="returns-instructions-of-a-given-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskId|path|string|true|task's internal identifier|

> Example responses

> 200 Response

```json
"/home-api/assets/examples/v1/tasks/getInstructions.json#responseBody"
```

<h3 id="returns-instructions-of-a-given-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[InstructionsDTO](#schemainstructionsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates instructions of a given task.

<a id="opIdupdateInstructions_3"></a>

> Code samples

```bash
curl https://example.com/tasks/string/instructions \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v1/tasks/updateInstructions.json#requestBody"'
```

`PUT /tasks/{taskId}/instructions`

Updates instructions of a given task.

> Body parameter

```json
"/home-api/assets/examples/v1/tasks/updateInstructions.json#requestBody"
```

<h3 id="updates-instructions-of-a-given-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskId|path|string|true|task's internal identifier|
|body|body|[InstructionsDTO](#schemainstructionsdto)|true|Updated instructions of a given task.|
|» forProvider|body|string|false|none|
|» fromCustomer|body|string|false|none|
|» internal|body|string|false|none|
|» notes|body|string|false|none|
|» paymentNoteForCustomer|body|string|false|none|
|» paymentNoteForVendor|body|string|false|none|

> Example responses

> 200 Response

```json
"/home-api/assets/examples/v1/tasks/updateInstructions.json#responseBody"
```

<h3 id="updates-instructions-of-a-given-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[InstructionsDTO](#schemainstructionsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates name of a given task.

<a id="opIdupdateName"></a>

> Code samples

```bash
curl https://example.com/tasks/string/name \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v1/tasks/updateName.json#requestBody"'
```

`PUT /tasks/{taskId}/name`

Updates name of a given task.

> Body parameter

```json
"/home-api/assets/examples/v1/tasks/updateName.json#requestBody"
```

<h3 id="updates-name-of-a-given-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskId|path|string|true|task's internal identifier|
|body|body|[StringDTO](#schemastringdto)|true|none|
|» value|body|string|false|none|

> Example responses

> 200 Response

```json
"/home-api/assets/examples/v1/tasks/updateName.json#responseBody"
```

<h3 id="updates-name-of-a-given-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[StringDTO](#schemastringdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns progress of a given task.

<a id="opIdgetProgress"></a>

> Code samples

```bash
curl https://example.com/tasks/string/progress \
  -H 'Accept: application/vnd.xtrf-v1+json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /tasks/{taskId}/progress`

Returns progress of a given task. Progress contains information about task's status (ie. opened or ready) and current phase (ie. translation). Workflow phase is defined as the first one which contains not ready jobs (ie. opened or started). When no such job exists then workflow phase is not included.

<h3 id="returns-progress-of-a-given-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskId|path|string|true|task's internal identifier|

> Example responses

> 200 Response

```json
"/home-api/assets/examples/v1/tasks/getProgress.json#responseBody"
```

<h3 id="returns-progress-of-a-given-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TaskProgressDTO](#schemataskprogressdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Starts a task.

<a id="opIdstart_1"></a>

> Code samples

```bash
curl https://example.com/tasks/string/start \
  -X POST \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`POST /tasks/{taskId}/start`

Starts a task.

<h3 id="starts-a-task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskId|path|string|true|task's internal identifier|

<h3 id="starts-a-task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

<h1 id="xtrf-home-portal-api-jobs-smartv2">Jobs (Smart)(v2)</h1>

To change the description use /examples/TagsDescriptions.json

## getByExternalId

<a id="opIdgetByExternalId"></a>

> Code samples

```bash
curl https://example.com/v2/jobs/for-external-id \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /v2/jobs/for-external-id`

<h3 id="getbyexternalid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|externalProjectId|query|string|false|job's externalProjectId|
|externalId|query|string|false|job's external identifier|

<h3 id="getbyexternalid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns details for a job.

<a id="opIdgetFileById_1"></a>

> Code samples

```bash
curl https://example.com/v2/jobs/string \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /v2/jobs/{jobId}`

Returns details for a job.

<h3 id="returns-details-for-a-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|job's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/jobs/getById.json#responseBody"
```

<h3 id="returns-details-for-a-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ProjectFileDto](#schemaprojectfiledto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates dates of a given job.

<a id="opIdchangeDates"></a>

> Code samples

```bash
curl https://example.com/v2/jobs/string/dates \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/jobs/changeDates.json#requestBody"'
```

`PUT /v2/jobs/{jobId}/dates`

Updates dates of a given job.

> Body parameter

```json
"/home-api/assets/examples/v2/jobs/changeDates.json#requestBody"
```

<h3 id="updates-dates-of-a-given-job-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|job's internal identifier|
|body|body|[JobDatesDto](#schemajobdatesdto)|true|New job dates.|
|» actualEndDate|body|integer(int64)|false|none|
|» actualStartDate|body|integer(int64)|false|none|
|» deadline|body|integer(int64)|false|none|
|» startDate|body|integer(int64)|false|none|

<h3 id="updates-dates-of-a-given-job-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## addExternalFileLink

<a id="opIdaddExternalFileLink"></a>

> Code samples

```bash
curl https://example.com/v2/jobs/string/files/addExternalLink \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '{
    "category": "string",
    "externalInfo": {
      "property1": "string",
      "property2": "string"
    },
    "filename": "string",
    "languageCombinationIds": [
      {
        "sourceLanguageId": 0,
        "targetLanguageId": 0
      }
    ],
    "languageIds": [
      0
    ]
  }'
```

`POST /v2/jobs/{jobId}/files/addExternalLink`

> Body parameter

```json
{
  "category": "string",
  "externalInfo": {
    "property1": "string",
    "property2": "string"
  },
  "filename": "string",
  "languageCombinationIds": [
    {
      "sourceLanguageId": 0,
      "targetLanguageId": 0
    }
  ],
  "languageIds": [
    0
  ]
}
```

<h3 id="addexternalfilelink-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|job's internal identifier|
|body|body|[ExternalFileDto](#schemaexternalfiledto)|true|Added file links to the project as added by PM.|
|» category|body|string|false|none|
|» externalInfo|body|object|false|none|
|» » **additionalProperties**|body|string|false|none|
|» filename|body|string|false|none|
|» languageCombinationIds|body|[[LanguageCombinationDto](#schemalanguagecombinationdto-1)]|false|none|
|» languageIds|body|[integer(int64)]|false|none|

<h3 id="addexternalfilelink-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns list of files delivered in the job.

<a id="opIdgetDeliveredFiles"></a>

> Code samples

```bash
curl https://example.com/v2/jobs/string/files/delivered \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /v2/jobs/{jobId}/files/delivered`

Returns list of files delivered in the job.

<h3 id="returns-list-of-files-delivered-in-the-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|job's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/jobs/getDeliveredFiles.json#responseBody"
```

<h3 id="returns-list-of-files-delivered-in-the-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|Inline|

<h3 id="returns-list-of-files-delivered-in-the-job-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProjectFileDto](#schemaprojectfiledto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Adds files to the project as delivered in the job.

<a id="opIdaddFiles"></a>

> Code samples

```bash
curl https://example.com/v2/jobs/string/files/delivered/add \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/jobs/addFiles.json#requestBody"'
```

`PUT /v2/jobs/{jobId}/files/delivered/add`

Adds files to the project as delivered in the job. The files have to be uploaded beforehand (see "POST /jobs/{jobId}/files/upload" operation). The following properties can be specified for each file:<ul><li>category (required, 400 Bad Request is returned otherwise)</li><li>languageIds – when the file category depends on a list of languages</li><li>languageCombinationIds – when the file category depends on a list of language combinations</li></ul>

> Body parameter

```json
"/home-api/assets/examples/v2/jobs/addFiles.json#requestBody"
```

<h3 id="adds-files-to-the-project-as-delivered-in-the-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|job's internal identifier|
|body|body|[FileCategorizationsDto](#schemafilecategorizationsdto)|true|Added files to the project as delivered in the job.|
|» files|body|[[FileCategorizationDto](#schemafilecategorizationdto)]|false|none|

<h3 id="adds-files-to-the-project-as-delivered-in-the-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Adds file link to the project as a link delivered in the job.

<a id="opIdaddFileLinks"></a>

> Code samples

```bash
curl https://example.com/v2/jobs/string/files/delivered/addLink \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/jobs/addFileLinksToJob.json#requestBody"'
```

`POST /v2/jobs/{jobId}/files/delivered/addLink`

Adds file link to the project as a link delivered in the job. The following properties can be specified for each file link:<ul><li>url (required, 400 Bad Request is returned otherwise)</li><li>category (required, 400 Bad Request is returned otherwise)</li><li>languageIds – when the file category depends on a list of languages</li><li>languageCombinationIds – when the file category depends on a list of language combinations</li></ul>

> Body parameter

```json
"/home-api/assets/examples/v2/jobs/addFileLinksToJob.json#requestBody"
```

<h3 id="adds-file-link-to-the-project-as-a-link-delivered-in-the-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|job's internal identifier|
|body|body|[FileLinkCategorizationsDto](#schemafilelinkcategorizationsdto)|true|Adds file link to the project as a link delivered in the job.|
|» fileLinks|body|[[FileLinkCategorizationDto](#schemafilelinkcategorizationdto)]|false|none|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/jobs/addFileLinksToJob.json#responseBody"
```

<h3 id="adds-file-link-to-the-project-as-a-link-delivered-in-the-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[FilesDto](#schemafilesdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Uploads file to the project as a file delivered in the job.

<a id="opIduploadFile_1"></a>

> Code samples

```bash
curl https://example.com/v2/jobs/string/files/delivered/upload \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -F 'file=@/path/to/file'
```

`POST /v2/jobs/{jobId}/files/delivered/upload`

Uploads file to the project as a file delivered in the job. Only one file can be uploaded at once. When the upload is finished the file has to be added by specifying its category and languages (see "PUT /jobs/{jobId}/files/add" operation).

> Body parameter

```yaml
file: string
```

<h3 id="uploads-file-to-the-project-as-a-file-delivered-in-the-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|job's internal identifier|
|body|body|[FileToUploadDto](#schemafiletouploaddto)|true|Uploaded file to the project as a file delivered in the job.|
|» file|body|string(binary)|false|none|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/jobs/uploadFile.json#responseBody"
```

<h3 id="uploads-file-to-the-project-as-a-file-delivered-in-the-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[FileDto](#schemafiledto-1)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns list of files shared with the job as Reference Files.

<a id="opIdgetSharedReferenceFiles"></a>

> Code samples

```bash
curl https://example.com/v2/jobs/string/files/sharedReferenceFiles \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /v2/jobs/{jobId}/files/sharedReferenceFiles`

Returns list of files shared with the job as Reference Files.

<h3 id="returns-list-of-files-shared-with-the-job-as-reference-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|job's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/jobs/getSharedReferenceFiles.json#responseBody"
```

<h3 id="returns-list-of-files-shared-with-the-job-as-reference-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|Inline|

<h3 id="returns-list-of-files-shared-with-the-job-as-reference-files-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProjectFileDto](#schemaprojectfiledto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Shares selected files as Reference Files with a job in a project.

<a id="opIdshareAsReferenceFiles"></a>

> Code samples

```bash
curl https://example.com/v2/jobs/string/files/sharedReferenceFiles/share \
  -X PUT \
  -H 'Content-Type: application/json;charset=UTF-8' \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/jobs/shareAsReferenceFiles.json#requestBody"'
```

`PUT /v2/jobs/{jobId}/files/sharedReferenceFiles/share`

Shares selected files as Reference Files with a job in a project. The files and the job have to be part of the same project. The operation is finished successfully even if some of the selected files were already shared with the job. If a file was shared with the job as Work File, it will now be shared as Reference File (and not as Work File).

> Body parameter

```json
"/home-api/assets/examples/v2/jobs/shareAsReferenceFiles.json#requestBody"
```

<h3 id="shares-selected-files-as-reference-files-with-a-job-in-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|job's internal identifier|
|body|body|[FilesDto](#schemafilesdto)|true|Shared selected files as Reference Files with a job in a project.|
|» files|body|[string]|false|none|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/jobs/shareAsReferenceFiles.json#responseBody"
```

<h3 id="shares-selected-files-as-reference-files-with-a-job-in-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[FilesShareStatusDto](#schemafilessharestatusdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns list of files shared with the job as Work Files.

<a id="opIdgetSharedWorkFiles"></a>

> Code samples

```bash
curl https://example.com/v2/jobs/string/files/sharedWorkFiles \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /v2/jobs/{jobId}/files/sharedWorkFiles`

Returns list of files shared with the job as Work Files.

<h3 id="returns-list-of-files-shared-with-the-job-as-work-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|job's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/jobs/getSharedWorkFiles.json#responseBody"
```

<h3 id="returns-list-of-files-shared-with-the-job-as-work-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|Inline|

<h3 id="returns-list-of-files-shared-with-the-job-as-work-files-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProjectFileDto](#schemaprojectfiledto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Shares selected files as Work Files with a job in a project.

<a id="opIdshareAsWorkFiles"></a>

> Code samples

```bash
curl https://example.com/v2/jobs/string/files/sharedWorkFiles/share \
  -X PUT \
  -H 'Content-Type: application/json;charset=UTF-8' \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/jobs/shareAsWorkFiles.json#requestBody"'
```

`PUT /v2/jobs/{jobId}/files/sharedWorkFiles/share`

Shares selected files as Work Files with a job in a project. The files and the job have to be part of the same project. The operation is finished successfully even if some of the selected files were already shared with the job. If a file was shared with the job as Reference File, it will now be shared as Work File (and not as Reference File).

> Body parameter

```json
"/home-api/assets/examples/v2/jobs/shareAsWorkFiles.json#requestBody"
```

<h3 id="shares-selected-files-as-work-files-with-a-job-in-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|job's internal identifier|
|body|body|[FilesDto](#schemafilesdto)|true|Shared selected files as Work Files with a job in a project.|
|» files|body|[string]|false|none|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/jobs/shareAsWorkFiles.json#responseBody"
```

<h3 id="shares-selected-files-as-work-files-with-a-job-in-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[FilesShareStatusDto](#schemafilessharestatusdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Stops sharing selected files with a job in a project.

<a id="opIdstopSharing"></a>

> Code samples

```bash
curl https://example.com/v2/jobs/string/files/stopSharing \
  -X PUT \
  -H 'Content-Type: application/json;charset=UTF-8' \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/jobs/stopSharing.json#requestBody"'
```

`PUT /v2/jobs/{jobId}/files/stopSharing`

Stops sharing selected files with a job in a project. The files and the job have to be part of the same project. The operation is finished successfully even if some of the selected files were not shared with the job.

> Body parameter

```json
"/home-api/assets/examples/v2/jobs/stopSharing.json#requestBody"
```

<h3 id="stops-sharing-selected-files-with-a-job-in-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|job's internal identifier|
|body|body|[FilesDto](#schemafilesdto)|true|File sharing stopped for a project task.|
|» files|body|[string]|false|none|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/jobs/stopSharing.json#responseBody"
```

<h3 id="stops-sharing-selected-files-with-a-job-in-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[FilesShareStatusDto](#schemafilessharestatusdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates instructions for a job.

<a id="opIdupdateInstructions_4"></a>

> Code samples

```bash
curl https://example.com/v2/jobs/string/instructions \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/jobs/updateInstructionsForJob.json#requestBody"'
```

`PUT /v2/jobs/{jobId}/instructions`

Updates instructions for a job. See also "PUT /projects/{projectId}/vendorInstructions" and "PUT /quotes/{quoteId}/vendorInstructions" for updating instructions for all jobs in a project or quote.

> Body parameter

```json
"/home-api/assets/examples/v2/jobs/updateInstructionsForJob.json#requestBody"
```

<h3 id="updates-instructions-for-a-job-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|job's internal identifier|
|body|body|[StringDTO](#schemastringdto)|true|Updated instructions for a job.|
|» value|body|string|false|none|

<h3 id="updates-instructions-for-a-job-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Changes job status if possible (400 Bad Request is returned otherwise).

<a id="opIdchangeStatus_1"></a>

> Code samples

```bash
curl https://example.com/v2/jobs/string/status \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/jobs/changeStatus.json#requestBody"'
```

`PUT /v2/jobs/{jobId}/status`

Changes job status if possible (400 Bad Request is returned otherwise). The status has to be specified using one of the following keys:<ul><li>OPEN – available when the job has one of the following statuses: ACCEPTED, CANCELED</li><li>ACCEPTED – available when the job has one of the following statuses: OPEN (Vendor and dates have to be set before calling the operation), STARTED</li><li>STARTED – available when the job has one of the following statuses: ACCEPTED, READY</li><li>READY – available when the job has one of the following statuses: STARTED</li><li>CANCELLED – available when the job has one of the following statuses: OPEN, ACCEPTED, STARTED, OFFERS_SENT</li><li>OFFERS_SENT – not available as a target status for this operation</li></ul>

> Body parameter

```json
"/home-api/assets/examples/v2/jobs/changeStatus.json#requestBody"
```

<h3 id="changes-job-status-if-possible-400-bad-request-is-returned-otherwise-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|job's internal identifier|
|body|body|[JobStatusDTO](#schemajobstatusdto)|true|Changed job status.|
|» externalId|body|string|false|none|
|» status|body|string|false|none|

<h3 id="changes-job-status-if-possible-400-bad-request-is-returned-otherwise-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Assigns vendor to a job in a project.

<a id="opIdassignVendor_1"></a>

> Code samples

```bash
curl https://example.com/v2/jobs/string/vendor \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/jobs/assignVendor.json#requestBody"'
```

`PUT /v2/jobs/{jobId}/vendor`

Assigns vendor to a job in a project.

> Body parameter

```json
"/home-api/assets/examples/v2/jobs/assignVendor.json#requestBody"
```

<h3 id="assigns-vendor-to-a-job-in-a-project-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|job's internal identifier|
|body|body|[VendorPriceProfileDTO](#schemavendorpriceprofiledto)|true|Assigned vendor to a job in a project.|
|» vendorPriceProfileId|body|integer(int64)|false|none|

<h3 id="assigns-vendor-to-a-job-in-a-project-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

<h1 id="xtrf-home-portal-api-projects-smartv2">Projects (Smart)(v2)</h1>

To change the description use /examples/TagsDescriptions.json

## Creates a new Smart Project.

<a id="opIdcreate_6"></a>

> Code samples

```bash
curl https://example.com/v2/projects \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '{
    "clientId": 0,
    "externalId": "string",
    "name": "string",
    "serviceId": 0
  }'
```

`POST /v2/projects`

Creates a new Smart Project. If the specified service ID refers to Classic Project, 400 Bad Request is returned instead.

> Body parameter

```json
{
  "clientId": 0,
  "externalId": "string",
  "name": "string",
  "serviceId": 0
}
```

<h3 id="creates-a-new-smart-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ProjectCreateDTO](#schemaprojectcreatedto)|false|none|
|» clientId|body|integer(int64)|false|none|
|» externalId|body|string|false|none|
|» name|body|string|false|none|
|» serviceId|body|integer(int64)|false|none|

> Example responses

> 201 Response

```json
"/home-api/assets/examples/v2/projects/createProject.json#responseBody"
```

<h3 id="creates-a-new-smart-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[ProjectDTOv2](#schemaprojectdtov2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Prepares a ZIP archive that contains the specified files.

<a id="opIdarchive"></a>

> Code samples

```bash
curl https://example.com/v2/projects/files/archive \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/projects/archive.json#requestBody"'
```

`POST /v2/projects/files/archive`

Prepares a ZIP archive that contains the specified files.

> Body parameter

```json
"/home-api/assets/examples/v2/projects/archive.json#requestBody"
```

<h3 id="prepares-a-zip-archive-that-contains-the-specified-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FilesDto](#schemafilesdto)|true|Prepared ZIP archive that contains the specified files.|
|» files|body|[string]|false|none|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/projects/archive.json#responseBody"
```

<h3 id="prepares-a-zip-archive-that-contains-the-specified-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[FilesArchiveDto](#schemafilesarchivedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns details of a file.

<a id="opIdgetFileById_2"></a>

> Code samples

```bash
curl https://example.com/v2/projects/files/string \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /v2/projects/files/{fileId}`

Returns details of a file.

<h3 id="returns-details-of-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|file's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/projects/getFileById.json#responseBody"
```

<h3 id="returns-details-of-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ProjectFileDto](#schemaprojectfiledto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Downloads a file content.

<a id="opIdgetFileContentById"></a>

> Code samples

```bash
curl https://example.com/v2/projects/files/string/download/string \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /v2/projects/files/{fileId}/download/{fileName}`

Downloads a file content.

<h3 id="downloads-a-file-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|file's internal identifier|
|fileName|path|string|true|file's name|

<h3 id="downloads-a-file-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns project details.

<a id="opIdgetByExternalId_1"></a>

> Code samples

```bash
curl https://example.com/v2/projects/for-external-id/string \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /v2/projects/for-external-id/{externalProjectId}`

Returns project details.

<h3 id="returns-project-details-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|externalProjectId|path|string|true|project's external identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/projects/getById.json#responseBody"
```

<h3 id="returns-project-details-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ProjectDTOv2](#schemaprojectdtov2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns project details.

<a id="opIdgetById_9"></a>

> Code samples

```bash
curl https://example.com/v2/projects/string \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /v2/projects/{projectId}`

Returns project details. If the specified project ID refers to Classic Project, 400 Bad Request is returned instead.

<h3 id="returns-project-details-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/projects/getById.json#responseBody"
```

<h3 id="returns-project-details-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ProjectDTOv2](#schemaprojectdtov2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns process id.

<a id="opIdaddJobToProcess"></a>

> Code samples

```bash
curl https://example.com/v2/projects/string/addJob \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`POST /v2/projects/{projectId}/addJob`

<h3 id="returns-process-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|none|

> Example responses

> default Response

```json
{
  "projectCreatedInCatToolOrCreationIsQueued": true
}
```

<h3 id="returns-process-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CATToolProjectDTO](#schemacattoolprojectdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns if cat tool project is created or queued.

<a id="opIdgetCATToolProjectInfo"></a>

> Code samples

```bash
curl https://example.com/v2/projects/string/catToolProject \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /v2/projects/{projectId}/catToolProject`

<h3 id="returns-if-cat-tool-project-is-created-or-queued-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|none|

> Example responses

> default Response

```json
{
  "projectCreatedInCatToolOrCreationIsQueued": true
}
```

<h3 id="returns-if-cat-tool-project-is-created-or-queued-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CATToolProjectDTO](#schemacattoolprojectdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns Client Contacts information for a project.

<a id="opIdgetContacts_2"></a>

> Code samples

```bash
curl https://example.com/v2/projects/string/clientContacts \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /v2/projects/{projectId}/clientContacts`

Returns Client Contacts information for a project

<h3 id="returns-client-contacts-information-for-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/projects/getClientContacts.json#responseBody"
```

<h3 id="returns-client-contacts-information-for-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[SmartContactsDTO](#schemasmartcontactsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates Client Contacts for a project.

<a id="opIdupdateContacts_2"></a>

> Code samples

```bash
curl https://example.com/v2/projects/string/clientContacts \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/projects/updateClientContacts.json#requestBody"'
```

`PUT /v2/projects/{projectId}/clientContacts`

Updates Client Contacts for a project.

> Body parameter

```json
"/home-api/assets/examples/v2/projects/updateClientContacts.json#requestBody"
```

<h3 id="updates-client-contacts-for-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|body|body|[SmartContactsDTO](#schemasmartcontactsdto)|true|Updated Client Contacts for a project.|
|» additionalIds|body|[integer(int64)]|false|none|
|» primaryId|body|integer(int64)|false|none|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/projects/updateClientContacts.json#responseBody"
```

<h3 id="updates-client-contacts-for-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[SmartContactsDTO](#schemasmartcontactsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates Client Deadline for a project.

<a id="opIdupdateClientDeadline"></a>

> Code samples

```bash
curl https://example.com/v2/projects/string/clientDeadline \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/projects/updateClientDeadline.json#requestBody"'
```

`PUT /v2/projects/{projectId}/clientDeadline`

Updates Client Deadline for a project.

> Body parameter

```json
"/home-api/assets/examples/v2/projects/updateClientDeadline.json#requestBody"
```

<h3 id="updates-client-deadline-for-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|body|body|[TimeDTO](#schematimedto)|true|Updated Client Deadline for a project.|
|» value|body|integer(int64)|false|none|

<h3 id="updates-client-deadline-for-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates Client Notes for a project.

<a id="opIdupdateClientNotes"></a>

> Code samples

```bash
curl https://example.com/v2/projects/string/clientNotes \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/projects/updateClientNotes.json#requestBody"'
```

`PUT /v2/projects/{projectId}/clientNotes`

Updates Client Notes for a project.

> Body parameter

```json
"/home-api/assets/examples/v2/projects/updateClientNotes.json#requestBody"
```

<h3 id="updates-client-notes-for-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|body|body|[StringDTO](#schemastringdto)|true|Updated Client Notes for a project.|
|» value|body|string|false|none|

<h3 id="updates-client-notes-for-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates Client Reference Number for a project.

<a id="opIdupdateClientReferenceNumber"></a>

> Code samples

```bash
curl https://example.com/v2/projects/string/clientReferenceNumber \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/projects/updateClientReferenceNumber.json#requestBody"'
```

`PUT /v2/projects/{projectId}/clientReferenceNumber`

Updates Client Reference Number for a project.

> Body parameter

```json
"/home-api/assets/examples/v2/projects/updateClientReferenceNumber.json#requestBody"
```

<h3 id="updates-client-reference-number-for-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|body|body|[StringDTO](#schemastringdto)|true|Updated Client Reference Number for a project.|
|» value|body|string|false|none|

<h3 id="updates-client-reference-number-for-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns a list of custom field keys and values for a project.

<a id="opIdgetCustomFields_8"></a>

> Code samples

```bash
curl https://example.com/v2/projects/string/customFields \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /v2/projects/{projectId}/customFields`

Returns a list of custom field keys and values for a project.

<h3 id="returns-a-list-of-custom-field-keys-and-values-for-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/projects/getCustomFields.json#responseBody"
```

<h3 id="returns-a-list-of-custom-field-keys-and-values-for-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CustomFieldsDTO](#schemacustomfieldsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates a custom field with a specified key in a project

<a id="opIdupdateCustomField_2"></a>

> Code samples

```bash
curl https://example.com/v2/projects/string/customFields/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/projects/updateCustomField.json#requestBody"'
```

`PUT /v2/projects/{projectId}/customFields/{key}`

Updates a custom field with a specified key in a project

> Body parameter

```json
"/home-api/assets/examples/v2/projects/updateCustomField.json#requestBody"
```

<h3 id="updates-a-custom-field-with-a-specified-key-in-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|key|path|string|true|custom field's key|
|body|body|[SmartCustomFieldDTO](#schemasmartcustomfielddto)|true|Updated custom field with a specified key in a project.|
|» value|body|object|false|none|

<h3 id="updates-a-custom-field-with-a-specified-key-in-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns list of files in a project.

<a id="opIdgetFiles"></a>

> Code samples

```bash
curl https://example.com/v2/projects/string/files \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /v2/projects/{projectId}/files`

Returns list of files in a project. Only files added to the project (i.e. files that have assigned category and languages) are listed.

<h3 id="returns-list-of-files-in-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/projects/getFiles.json#responseBody"
```

<h3 id="returns-list-of-files-in-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|Inline|

<h3 id="returns-list-of-files-in-a-project-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProjectFileDto](#schemaprojectfiledto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Adds files to the project as added by PM.

<a id="opIdaddFiles_1"></a>

> Code samples

```bash
curl https://example.com/v2/projects/string/files/add \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/projects/addFiles.json#requestBody"'
```

`PUT /v2/projects/{projectId}/files/add`

Adds files to the project as added by PM. The files have to be uploaded beforehand (see "POST /v2/projects/{projectId}/files/upload" operation). The following properties can be specified for each file:<ul><li>category (required, 400 Bad Request is returned otherwise)</li><li>languageIds – when the file category depends on a list of languages</li><li>languageCombinationIds – when the file category depends on a list of language combinations</li></ul>

> Body parameter

```json
"/home-api/assets/examples/v2/projects/addFiles.json#requestBody"
```

<h3 id="adds-files-to-the-project-as-added-by-pm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|body|body|[FileCategorizationsDto](#schemafilecategorizationsdto)|true|Added files to the project as added by PM.|
|» files|body|[[FileCategorizationDto](#schemafilecategorizationdto)]|false|none|

<h3 id="adds-files-to-the-project-as-added-by-pm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## addExternalFileLinks

<a id="opIdaddExternalFileLinks"></a>

> Code samples

```bash
curl https://example.com/v2/projects/string/files/addExternalLink \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '{
    "category": "string",
    "externalInfo": {
      "property1": "string",
      "property2": "string"
    },
    "filename": "string",
    "languageCombinationIds": [
      {
        "sourceLanguageId": 0,
        "targetLanguageId": 0
      }
    ],
    "languageIds": [
      0
    ]
  }'
```

`POST /v2/projects/{projectId}/files/addExternalLink`

> Body parameter

```json
{
  "category": "string",
  "externalInfo": {
    "property1": "string",
    "property2": "string"
  },
  "filename": "string",
  "languageCombinationIds": [
    {
      "sourceLanguageId": 0,
      "targetLanguageId": 0
    }
  ],
  "languageIds": [
    0
  ]
}
```

<h3 id="addexternalfilelinks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|body|body|[ExternalFileDto](#schemaexternalfiledto)|true|Added file links to the project as added by PM.|
|» category|body|string|false|none|
|» externalInfo|body|object|false|none|
|» » **additionalProperties**|body|string|false|none|
|» filename|body|string|false|none|
|» languageCombinationIds|body|[[LanguageCombinationDto](#schemalanguagecombinationdto-1)]|false|none|
|» languageIds|body|[integer(int64)]|false|none|

<h3 id="addexternalfilelinks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Adds file links to the project as added by PM.

<a id="opIdaddFileLinks_1"></a>

> Code samples

```bash
curl https://example.com/v2/projects/string/files/addLink \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/projects/addFileLinks.json#requestBody"'
```

`POST /v2/projects/{projectId}/files/addLink`

Adds file links to the project as added by PM. The following properties can be specified for each file link:<ul><li>url (required, 400 Bad Request is returned otherwise)</li><li>category (required, 400 Bad Request is returned otherwise)</li><li>languageIds – when the file category depends on a list of languages</li><li>languageCombinationIds – when the file category depends on a list of language combinations</li></ul>

> Body parameter

```json
"/home-api/assets/examples/v2/projects/addFileLinks.json#requestBody"
```

<h3 id="adds-file-links-to-the-project-as-added-by-pm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|body|body|[FileLinkCategorizationsDto](#schemafilelinkcategorizationsdto)|true|Added file links to the project as added by PM.|
|» fileLinks|body|[[FileLinkCategorizationDto](#schemafilelinkcategorizationdto)]|false|none|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/projects/addFileLinks.json#responseBody"
```

<h3 id="adds-file-links-to-the-project-as-added-by-pm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[FilesDto](#schemafilesdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns list of files in a project, that are ready to be delivered to client.

<a id="opIdgetDeliverableFiles"></a>

> Code samples

```bash
curl https://example.com/v2/projects/string/files/deliverable \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /v2/projects/{projectId}/files/deliverable`

Returns list of files in a project, that are ready to be delivered to client. A file is considered deliverable to client when all of the following criteria are met:<ul><li>the file was added to a job in the last step in the process</li><li>the file is marked as verified (if it was added in a verification step and the file is verifiable, according to its category)</li><li>the job is finished (has Ready status)</li></ul>

<h3 id="returns-list-of-files-in-a-project-that-are-ready-to-be-delivered-to-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/projects/getDeliverableFiles.json#responseBody"
```

<h3 id="returns-list-of-files-in-a-project-that-are-ready-to-be-delivered-to-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|Inline|

<h3 id="returns-list-of-files-in-a-project-that-are-ready-to-be-delivered-to-client-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProjectFileDto](#schemaprojectfiledto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Uploads file to the project as a file uploaded by PM.

<a id="opIduploadFile_2"></a>

> Code samples

```bash
curl https://example.com/v2/projects/string/files/upload \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -F 'file=@/path/to/file'
```

`POST /v2/projects/{projectId}/files/upload`

Uploads file to the project as a file uploaded by PM. Only one file can be uploaded at once. When the upload is finished the file has to be added by specifying its category and languages (see "PUT /v2/projects/{projectId}/files/add" operation

> Body parameter

```yaml
file: string
```

<h3 id="uploads-file-to-the-project-as-a-file-uploaded-by-pm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|body|body|[FileToUploadDto](#schemafiletouploaddto)|true|Uploaded file|
|» file|body|string(binary)|false|none|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/projects/uploadFile.json#responseBody"
```

<h3 id="uploads-file-to-the-project-as-a-file-uploaded-by-pm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[FileDto](#schemafiledto-1)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns finance information for a project.

<a id="opIdgetFinance_2"></a>

> Code samples

```bash
curl https://example.com/v2/projects/string/finance \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /v2/projects/{projectId}/finance`

Returns finance information for a project.

<h3 id="returns-finance-information-for-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/projects/getFinance.json#responseBody"
```

<h3 id="returns-finance-information-for-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[FinanceDTO](#schemafinancedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Adds a payable to a project.

<a id="opIdcreatePayable_2"></a>

> Code samples

```bash
curl https://example.com/v2/projects/string/finance/payables \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/projects/createPayable.json#requestBody"'
```

`POST /v2/projects/{projectId}/finance/payables`

Adds a payable to a project.

> Body parameter

```json
"/home-api/assets/examples/v2/projects/createPayable.json#requestBody"
```

<h3 id="adds-a-payable-to-a-project-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|body|body|[PayableCreateDTO](#schemapayablecreatedto)|true|none|
|» calculationUnitId|body|integer(int64)|false|none|
|» catLogFile|body|[FileDTO](#schemafiledto)|false|none|
|» currencyId|body|integer(int64)|false|none|
|» description|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» ignoreMinimumCharge|body|boolean|false|none|
|» invoiceId|body|string|false|none|
|» jobId|body|object|false|none|
|» jobTypeId|body|integer(int64)|false|none|
|» languageCombination|body|[ChargeLanguageCombinationDTO](#schemachargelanguagecombinationdto)|false|none|
|» languageCombinationIdNumber|body|string|false|none|
|» minimumCharge|body|number|false|none|
|» quantity|body|number|false|none|
|» rate|body|number|false|none|
|» rateOrigin|body|string|false|none|
|» total|body|number|false|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» rateOrigin|PRICE_PROFILE|
|» rateOrigin|PRICE_LIST|
|» rateOrigin|FILLED_MANUALLY|
|» rateOrigin|AUTOCALCULATED|
|» type|SIMPLE|
|» type|CAT|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/projects/createPayable.json#responseBody"
```

<h3 id="adds-a-payable-to-a-project-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[PayableDTO](#schemapayabledto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates a payable.

<a id="opIdupdatePayable_2"></a>

> Code samples

```bash
curl https://example.com/v2/projects/string/finance/payables/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/projects/updatePayable.json#requestBody"'
```

`PUT /v2/projects/{projectId}/finance/payables/{payableId}`

Updates a payable.

> Body parameter

```json
"/home-api/assets/examples/v2/projects/updatePayable.json#requestBody"
```

<h3 id="updates-a-payable-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|payableId|path|integer(int64)|true|payable's internal identifier|
|body|body|[PayableDTO](#schemapayabledto)|true|none|
|» calculationUnitId|body|integer(int64)|false|none|
|» currencyId|body|integer(int64)|false|none|
|» description|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» ignoreMinimumCharge|body|boolean|false|none|
|» invoiceId|body|string|false|none|
|» jobId|body|object|false|none|
|» jobTypeId|body|integer(int64)|false|none|
|» languageCombination|body|[ChargeLanguageCombinationDTO](#schemachargelanguagecombinationdto)|false|none|
|» languageCombinationIdNumber|body|string|false|none|
|» minimumCharge|body|number|false|none|
|» quantity|body|number|false|none|
|» rate|body|number|false|none|
|» rateOrigin|body|string|false|none|
|» total|body|number|false|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» rateOrigin|PRICE_PROFILE|
|» rateOrigin|PRICE_LIST|
|» rateOrigin|FILLED_MANUALLY|
|» rateOrigin|AUTOCALCULATED|
|» type|SIMPLE|
|» type|CAT|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/projects/updatePayable.json#responseBody"
```

<h3 id="updates-a-payable-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[PayableDTO](#schemapayabledto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Deletes a payable.

<a id="opIddeletePayable_2"></a>

> Code samples

```bash
curl https://example.com/v2/projects/string/finance/payables/0 \
  -X DELETE \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`DELETE /v2/projects/{projectId}/finance/payables/{payableId}`

Deletes a payable.

<h3 id="deletes-a-payable-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|payableId|path|integer(int64)|true|payable's internal identifier|

<h3 id="deletes-a-payable-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Adds a receivable to a project.

<a id="opIdcreateReceivable_2"></a>

> Code samples

```bash
curl https://example.com/v2/projects/string/finance/receivables \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/projects/createReceivable.json#requestBody"'
```

`POST /v2/projects/{projectId}/finance/receivables`

Adds a receivable to a project.

> Body parameter

```json
"/home-api/assets/examples/v2/projects/createReceivable.json#requestBody"
```

<h3 id="adds-a-receivable-to-a-project-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|body|body|[ReceivableCreateDTO](#schemareceivablecreatedto)|true|none|
|» calculationUnitId|body|integer(int64)|false|none|
|» catLogFile|body|[FileDTO](#schemafiledto)|false|none|
|» currencyId|body|integer(int64)|false|none|
|» description|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» ignoreMinimumCharge|body|boolean|false|none|
|» invoiceId|body|string|false|none|
|» jobTypeId|body|integer(int64)|false|none|
|» languageCombination|body|[ChargeLanguageCombinationDTO](#schemachargelanguagecombinationdto)|false|none|
|» languageCombinationIdNumber|body|string|false|none|
|» minimumCharge|body|number|false|none|
|» quantity|body|number|false|none|
|» rate|body|number|false|none|
|» rateOrigin|body|string|false|none|
|» taskId|body|integer(int64)|false|none|
|» total|body|number|false|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» rateOrigin|PRICE_PROFILE|
|» rateOrigin|PRICE_LIST|
|» rateOrigin|FILLED_MANUALLY|
|» rateOrigin|AUTOCALCULATED|
|» type|SIMPLE|
|» type|CAT|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/projects/createReceivable.json#responseBody"
```

<h3 id="adds-a-receivable-to-a-project-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ReceivableDTO](#schemareceivabledto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates a receivable.

<a id="opIdupdateReceivable_2"></a>

> Code samples

```bash
curl https://example.com/v2/projects/string/finance/receivables/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/projects/updateReceivable.json#requestBody"'
```

`PUT /v2/projects/{projectId}/finance/receivables/{receivableId}`

Updates a receivable.

> Body parameter

```json
"/home-api/assets/examples/v2/projects/updateReceivable.json#requestBody"
```

<h3 id="updates-a-receivable-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|receivableId|path|integer(int64)|true|receivable's internal identifier|
|body|body|[ReceivableDTO](#schemareceivabledto)|true|none|
|» calculationUnitId|body|integer(int64)|false|none|
|» currencyId|body|integer(int64)|false|none|
|» description|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» ignoreMinimumCharge|body|boolean|false|none|
|» invoiceId|body|string|false|none|
|» jobTypeId|body|integer(int64)|false|none|
|» languageCombination|body|[ChargeLanguageCombinationDTO](#schemachargelanguagecombinationdto)|false|none|
|» languageCombinationIdNumber|body|string|false|none|
|» minimumCharge|body|number|false|none|
|» quantity|body|number|false|none|
|» rate|body|number|false|none|
|» rateOrigin|body|string|false|none|
|» taskId|body|integer(int64)|false|none|
|» total|body|number|false|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» rateOrigin|PRICE_PROFILE|
|» rateOrigin|PRICE_LIST|
|» rateOrigin|FILLED_MANUALLY|
|» rateOrigin|AUTOCALCULATED|
|» type|SIMPLE|
|» type|CAT|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/projects/updateReceivable.json#responseBody"
```

<h3 id="updates-a-receivable-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ReceivableDTO](#schemareceivabledto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Deletes a receivable.

<a id="opIddeleteReceivable_2"></a>

> Code samples

```bash
curl https://example.com/v2/projects/string/finance/receivables/0 \
  -X DELETE \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`DELETE /v2/projects/{projectId}/finance/receivables/{receivableId}`

Deletes a receivable.

<h3 id="deletes-a-receivable-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|receivableId|path|integer(int64)|true|receivable's internal identifier|

<h3 id="deletes-a-receivable-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates Internal Notes for a project.

<a id="opIdupdateInternalNotes"></a>

> Code samples

```bash
curl https://example.com/v2/projects/string/internalNotes \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/projects/updateInternalNotes.json#requestBody"'
```

`PUT /v2/projects/{projectId}/internalNotes`

Updates Internal Notes for a project.

> Body parameter

```json
"/home-api/assets/examples/v2/projects/updateInternalNotes.json#requestBody"
```

<h3 id="updates-internal-notes-for-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|body|body|[StringDTO](#schemastringdto)|true|Updated Internal Notes for a project.|
|» value|body|string|false|none|

<h3 id="updates-internal-notes-for-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns list of jobs in a project.

<a id="opIdgetJobs"></a>

> Code samples

```bash
curl https://example.com/v2/projects/string/jobs \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /v2/projects/{projectId}/jobs`

Returns list of jobs in a project.

<h3 id="returns-list-of-jobs-in-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/projects/getJobs.json#responseBody"
```

<h3 id="returns-list-of-jobs-in-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|Inline|

<h3 id="returns-list-of-jobs-in-a-project-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[JobDto](#schemajobdto-1)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates Order Date for a project.

<a id="opIdupdateOrderedOn"></a>

> Code samples

```bash
curl https://example.com/v2/projects/string/orderDate \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/projects/updateOrderedOn.json#requestBody"'
```

`PUT /v2/projects/{projectId}/orderDate`

Updates Order Date for a project.

> Body parameter

```json
"/home-api/assets/examples/v2/projects/updateOrderedOn.json#requestBody"
```

<h3 id="updates-order-date-for-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|body|body|[TimeDTO](#schematimedto)|true|Updated Order Date for a project.|
|» value|body|integer(int64)|false|none|

<h3 id="updates-order-date-for-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns process id.

<a id="opIdgetProcessId"></a>

> Code samples

```bash
curl https://example.com/v2/projects/string/process \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /v2/projects/{projectId}/process`

<h3 id="returns-process-id-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|none|

> Example responses

> default Response

```json
{
  "projectCreatedInCatToolOrCreationIsQueued": true
}
```

<h3 id="returns-process-id-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CATToolProjectDTO](#schemacattoolprojectdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates source language for a project.

<a id="opIdupdateSourceLanguage"></a>

> Code samples

```bash
curl https://example.com/v2/projects/string/sourceLanguage \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/projects/updateSourceLanguage.json#requestBody"'
```

`PUT /v2/projects/{projectId}/sourceLanguage`

Updates source language for a project.

> Body parameter

```json
"/home-api/assets/examples/v2/projects/updateSourceLanguage.json#requestBody"
```

<h3 id="updates-source-language-for-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|body|body|[SourceLanguageDTO](#schemasourcelanguagedto)|true|Updated source language for a project.|
|» sourceLanguageId|body|integer(int64)|false|none|

<h3 id="updates-source-language-for-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates specialization for a project.

<a id="opIdupdateSpecialization"></a>

> Code samples

```bash
curl https://example.com/v2/projects/string/specialization \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/projects/updateSpecialization.json#requestBody"'
```

`PUT /v2/projects/{projectId}/specialization`

Updates specialization for a project.

> Body parameter

```json
"/home-api/assets/examples/v2/projects/updateSpecialization.json#requestBody"
```

<h3 id="updates-specialization-for-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|body|body|[SpecializationDTO](#schemaspecializationdto)|true|Updated specialization for a project.|
|» specializationId|body|integer(int64)|false|none|

<h3 id="updates-specialization-for-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Changes project status if possible (400 Bad Request is returned otherwise).

<a id="opIdchangeStatus_2"></a>

> Code samples

```bash
curl https://example.com/v2/projects/string/status \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/projects/changeStatus.json#requestBody"'
```

`PUT /v2/projects/{projectId}/status`

Changes project status if possible (400 Bad Request is returned otherwise). The status has to be specified using one of the following keys: <ul><li>CANCELLED – available when the job has one of the following statuses: OPEN, STARTED</li></ul>

> Body parameter

```json
"/home-api/assets/examples/v2/projects/changeStatus.json#requestBody"
```

<h3 id="changes-project-status-if-possible-400-bad-request-is-returned-otherwise-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|body|body|[ProjectStatusDTO](#schemaprojectstatusdto)|true|Changed project status.|
|» status|body|string|false|none|

<h3 id="changes-project-status-if-possible-400-bad-request-is-returned-otherwise-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates target languages for a project.

<a id="opIdupdateTargetLanguages"></a>

> Code samples

```bash
curl https://example.com/v2/projects/string/targetLanguages \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/projects/updateTargetLanguages.json#requestBody"'
```

`PUT /v2/projects/{projectId}/targetLanguages`

Updates target languages for a project.

> Body parameter

```json
"/home-api/assets/examples/v2/projects/updateTargetLanguages.json#requestBody"
```

<h3 id="updates-target-languages-for-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|body|body|[TargetLanguagesDTO](#schematargetlanguagesdto)|true|Updated target languages for a project.|
|» targetLanguageIds|body|[integer(int64)]|false|none|

<h3 id="updates-target-languages-for-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates instructions for all vendors performing the jobs in a project.

<a id="opIdupdateVendorInstructions"></a>

> Code samples

```bash
curl https://example.com/v2/projects/string/vendorInstructions \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/projects/updateSpecialization.json#requestBody"'
```

`PUT /v2/projects/{projectId}/vendorInstructions`

Updates instructions for all vendors performing the jobs in a project. See also "PUT /jobs/{jobId}/instructions" for updating instructions for a specific job in a project or quote.

> Body parameter

```json
"/home-api/assets/examples/v2/projects/updateSpecialization.json#requestBody"
```

<h3 id="updates-instructions-for-all-vendors-performing-the-jobs-in-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|body|body|[StringDTO](#schemastringdto)|true|Updated instructions for all vendors performing the jobs in a project.|
|» value|body|string|false|none|

<h3 id="updates-instructions-for-all-vendors-performing-the-jobs-in-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates volume for a project.

<a id="opIdupdateVolume"></a>

> Code samples

```bash
curl https://example.com/v2/projects/string/volume \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/projects/updateVolume.json#requestBody"'
```

`PUT /v2/projects/{projectId}/volume`

Updates volume for a project.

> Body parameter

```json
"/home-api/assets/examples/v2/projects/updateVolume.json#requestBody"
```

<h3 id="updates-volume-for-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|project's internal identifier|
|body|body|[BigDecimalDTO](#schemabigdecimaldto)|true|Updated volume for a project.|
|» value|body|number|false|none|

<h3 id="updates-volume-for-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

<h1 id="xtrf-home-portal-api-quotes-smartv2">Quotes (Smart)(v2)</h1>

To change the description use /examples/TagsDescriptions.json

## Creates a new Smart Quote.

<a id="opIdcreate_7"></a>

> Code samples

```bash
curl https://example.com/v2/quotes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '{
    "clientId": 0,
    "name": "string",
    "opportunityOfferId": 0,
    "serviceId": 0
  }'
```

`POST /v2/quotes`

Creates a new Smart Quote. If the specified service ID refers to Classic Quote, 400 Bad Request is returned instead.

> Body parameter

```json
{
  "clientId": 0,
  "name": "string",
  "opportunityOfferId": 0,
  "serviceId": 0
}
```

<h3 id="creates-a-new-smart-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[QuoteCreateDTO](#schemaquotecreatedto)|false|Project to create|
|» clientId|body|integer(int64)|false|none|
|» name|body|string|false|none|
|» opportunityOfferId|body|integer(int64)|false|none|
|» serviceId|body|integer(int64)|false|none|

> Example responses

> 201 Response

```json
"/home-api/assets/examples/v2/quotes/createQuote.json#responseBody"
```

<h3 id="creates-a-new-smart-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[QuoteDTOv2](#schemaquotedtov2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Prepares a ZIP archive that contains the specified files.

<a id="opIdarchive_1"></a>

> Code samples

```bash
curl https://example.com/v2/quotes/files/archive \
  -X POST \
  -H 'Content-Type: application/json;charset=UTF-8' \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/quotes/archive.json#requestBody"'
```

`POST /v2/quotes/files/archive`

Prepares a ZIP archive that contains the specified files.

> Body parameter

```json
"/home-api/assets/examples/v2/quotes/archive.json#requestBody"
```

<h3 id="prepares-a-zip-archive-that-contains-the-specified-files-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FilesDto](#schemafilesdto)|true|Prepared ZIP archive that contains the specified files.|
|» files|body|[string]|false|none|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/quotes/archive.json#responseBody"
```

<h3 id="prepares-a-zip-archive-that-contains-the-specified-files-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[FilesArchiveDto](#schemafilesarchivedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns details of a file.

<a id="opIdgetFileById_3"></a>

> Code samples

```bash
curl https://example.com/v2/quotes/files/string \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /v2/quotes/files/{fileId}`

Returns details of a file.

<h3 id="returns-details-of-a-file-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|file's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/quotes/getFileById.json#responseBody"
```

<h3 id="returns-details-of-a-file-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ProjectFileDto](#schemaprojectfiledto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Downloads a file content.

<a id="opIdgetFileContentById_1"></a>

> Code samples

```bash
curl https://example.com/v2/quotes/files/string/download/string \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /v2/quotes/files/{fileId}/download/{fileName}`

Downloads a file content.

<h3 id="downloads-a-file-content-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|path|string|true|file's internal identifier|
|fileName|path|string|true|file's name|

> Example responses

> default Response

```text
/home-api/assets/examples/v2/quotes/getFileContentById.json#responseBody
```

<h3 id="downloads-a-file-content-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns quote details.

<a id="opIdgetById_10"></a>

> Code samples

```bash
curl https://example.com/v2/quotes/string \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /v2/quotes/{quoteId}`

Returns quote details. If the specified quote ID refers to Classic Quote, 400 Bad Request is returned instead.

<h3 id="returns-quote-details-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/quotes/getById.json#responseBody"
```

<h3 id="returns-quote-details-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[QuoteDTOv2](#schemaquotedtov2)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates Business Days for a quote.

<a id="opIdupdateBusinessDays"></a>

> Code samples

```bash
curl https://example.com/v2/quotes/string/businessDays \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/quotes/updateBusinessDays.json#requestBody"'
```

`PUT /v2/quotes/{quoteId}/businessDays`

Updates Business Days for a quote.

> Body parameter

```json
"/home-api/assets/examples/v2/quotes/updateBusinessDays.json#requestBody"
```

<h3 id="updates-business-days-for-a-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|
|body|body|integer(int32)|true|Updated Business Days for a quote.|

<h3 id="updates-business-days-for-a-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns Client Contacts information for a quote.

<a id="opIdgetContacts_3"></a>

> Code samples

```bash
curl https://example.com/v2/quotes/string/clientContacts \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /v2/quotes/{quoteId}/clientContacts`

Returns Client Contacts information for a quote.

<h3 id="returns-client-contacts-information-for-a-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/quotes/getClientContacts.json#responseBody"
```

<h3 id="returns-client-contacts-information-for-a-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[SmartContactsDTO](#schemasmartcontactsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates Client Contacts for a quote.

<a id="opIdupdateContacts_3"></a>

> Code samples

```bash
curl https://example.com/v2/quotes/string/clientContacts \
  -X PUT \
  -H 'Content-Type: application/json;charset=UTF-8' \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/quotes/updateClientContacts.json#requestBody"'
```

`PUT /v2/quotes/{quoteId}/clientContacts`

Updates Client Contacts for a quote.

> Body parameter

```json
"/home-api/assets/examples/v2/quotes/updateClientContacts.json#requestBody"
```

<h3 id="updates-client-contacts-for-a-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|
|body|body|[SmartContactsDTO](#schemasmartcontactsdto)|true|Updated Client Contacts for a quote.|
|» additionalIds|body|[integer(int64)]|false|none|
|» primaryId|body|integer(int64)|false|none|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/quotes/updateClientContacts.json#responseBody"
```

<h3 id="updates-client-contacts-for-a-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[SmartContactsDTO](#schemasmartcontactsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates Client Notes for a quote.

<a id="opIdupdateClientNotes_1"></a>

> Code samples

```bash
curl https://example.com/v2/quotes/string/clientNotes \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/quotes/updateClientNotes.json#requestBody"'
```

`PUT /v2/quotes/{quoteId}/clientNotes`

Updates Client Notes for a quote.

> Body parameter

```json
"/home-api/assets/examples/v2/quotes/updateClientNotes.json#requestBody"
```

<h3 id="updates-client-notes-for-a-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|
|body|body|[StringDTO](#schemastringdto)|true|Updated Client Notes for a quote.|
|» value|body|string|false|none|

<h3 id="updates-client-notes-for-a-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates Client Reference Number for a quote.

<a id="opIdupdateClientReferenceNumber_1"></a>

> Code samples

```bash
curl https://example.com/v2/quotes/string/clientReferenceNumber \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/quotes/updateClientReferenceNumber.json#requestBody"'
```

`PUT /v2/quotes/{quoteId}/clientReferenceNumber`

Updates Client Reference Number for a quote.

> Body parameter

```json
"/home-api/assets/examples/v2/quotes/updateClientReferenceNumber.json#requestBody"
```

<h3 id="updates-client-reference-number-for-a-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|
|body|body|[StringDTO](#schemastringdto)|true|Updated Client Reference Number for a quote.|
|» value|body|string|false|none|

<h3 id="updates-client-reference-number-for-a-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns a list of custom field keys and values for a project.

<a id="opIdgetCustomFields_9"></a>

> Code samples

```bash
curl https://example.com/v2/quotes/string/customFields \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /v2/quotes/{quoteId}/customFields`

Returns a list of custom field keys and values for a project.

<h3 id="returns-a-list-of-custom-field-keys-and-values-for-a-project-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/quotes/getCustomFields.json#responseBody"
```

<h3 id="returns-a-list-of-custom-field-keys-and-values-for-a-project-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[CustomFieldsDTO](#schemacustomfieldsdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates a custom field with a specified key in a quote.

<a id="opIdupdateCustomField_3"></a>

> Code samples

```bash
curl https://example.com/v2/quotes/string/customFields/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/quotes/updateCustomField.json#requestBody"'
```

`PUT /v2/quotes/{quoteId}/customFields/{key}`

Updates a custom field with a specified key in a quote.

> Body parameter

```json
"/home-api/assets/examples/v2/quotes/updateCustomField.json#requestBody"
```

<h3 id="updates-a-custom-field-with-a-specified-key-in-a-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|
|key|path|string|true|custom field's key|
|body|body|[SmartCustomFieldDTO](#schemasmartcustomfielddto)|true|Updated custom field with a specified key in a quote.|
|» value|body|object|false|none|

<h3 id="updates-a-custom-field-with-a-specified-key-in-a-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates Expected Delivery Date for a quote.

<a id="opIdupdateExpectedDeliveryDate"></a>

> Code samples

```bash
curl https://example.com/v2/quotes/string/expectedDeliveryDate \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/quotes/updateExpectedDeliveryDate.json#requestBody"'
```

`PUT /v2/quotes/{quoteId}/expectedDeliveryDate`

Updates Expected Delivery Date for a quote.

> Body parameter

```json
"/home-api/assets/examples/v2/quotes/updateExpectedDeliveryDate.json#requestBody"
```

<h3 id="updates-expected-delivery-date-for-a-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|
|body|body|[TimeDTO](#schematimedto)|true|Updated Expected Delivery Date for a quote.|
|» value|body|integer(int64)|false|none|

<h3 id="updates-expected-delivery-date-for-a-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns list of files in a quote.

<a id="opIdgetFiles_1"></a>

> Code samples

```bash
curl https://example.com/v2/quotes/string/files \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /v2/quotes/{quoteId}/files`

Returns list of files in a quote. Only files added to the quote (i.e. files that have assigned category and languages) are listed.

<h3 id="returns-list-of-files-in-a-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/quotes/getFiles.json#responseBody"
```

<h3 id="returns-list-of-files-in-a-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|ok|Inline|

<h3 id="returns-list-of-files-in-a-quote-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ProjectFileDto](#schemaprojectfiledto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Adds files to the quote as added by PM.

<a id="opIdaddFiles_2"></a>

> Code samples

```bash
curl https://example.com/v2/quotes/string/files/add \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/quotes/addFiles.json#requestBody"'
```

`PUT /v2/quotes/{quoteId}/files/add`

Adds files to the quote as added by PM. The files have to be uploaded beforehand (see "POST v2/quotes/{quoteId}/files/upload" operation). The following properties can be specified for each file:<ul><li>category (required, 400 Bad Request is returned otherwise)</li><li>languageIds – when the file category depends on a list of languages</li><li>languageCombinationIds – when the file category depends on a list of language combinations</li></ul>

> Body parameter

```json
"/home-api/assets/examples/v2/quotes/addFiles.json#requestBody"
```

<h3 id="adds-files-to-the-quote-as-added-by-pm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|
|body|body|[TimeDTO](#schematimedto)|true|Added files to the quote as added by PM.|
|» value|body|integer(int64)|false|none|

<h3 id="adds-files-to-the-quote-as-added-by-pm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Uploads file to the quote as a file uploaded by PM.

<a id="opIduploadFile_3"></a>

> Code samples

```bash
curl https://example.com/v2/quotes/string/files/upload \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`POST /v2/quotes/{quoteId}/files/upload`

Uploads file to the quote as a file uploaded by PM. Only one file can be uploaded at once. When the upload is finished the file has to be added by specifying its category and languages (see "PUT /v2/quotes/{quoteId}/files/add" operation).

> Body parameter

```yaml
"/home-api/assets/examples/v2/quotes/uploadFile.json#requestBody"
```

<h3 id="uploads-file-to-the-quote-as-a-file-uploaded-by-pm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|
|body|body|[FileToUploadDto](#schemafiletouploaddto)|true|Uploaded file to the quote as a file uploaded by PM.|
|» file|body|string(binary)|false|none|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/quotes/uploadFile.json#responseBody"
```

<h3 id="uploads-file-to-the-quote-as-a-file-uploaded-by-pm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[FileDto](#schemafiledto-1)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns finance information for a quote.

<a id="opIdgetFinance_3"></a>

> Code samples

```bash
curl https://example.com/v2/quotes/string/finance \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /v2/quotes/{quoteId}/finance`

Returns finance information for a quote.

<h3 id="returns-finance-information-for-a-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/quotes/getFinance.json#responseBody"
```

<h3 id="returns-finance-information-for-a-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[FinanceDTO](#schemafinancedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Adds a payable to a quote.

<a id="opIdcreatePayable_3"></a>

> Code samples

```bash
curl https://example.com/v2/quotes/string/finance/payables \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/quotes/createPayable.json#requestBody"'
```

`POST /v2/quotes/{quoteId}/finance/payables`

Adds a payable to a quote.

> Body parameter

```json
"/home-api/assets/examples/v2/quotes/createPayable.json#requestBody"
```

<h3 id="adds-a-payable-to-a-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|
|body|body|[PayableCreateDTO](#schemapayablecreatedto)|true|none|
|» calculationUnitId|body|integer(int64)|false|none|
|» catLogFile|body|[FileDTO](#schemafiledto)|false|none|
|» currencyId|body|integer(int64)|false|none|
|» description|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» ignoreMinimumCharge|body|boolean|false|none|
|» invoiceId|body|string|false|none|
|» jobId|body|object|false|none|
|» jobTypeId|body|integer(int64)|false|none|
|» languageCombination|body|[ChargeLanguageCombinationDTO](#schemachargelanguagecombinationdto)|false|none|
|» languageCombinationIdNumber|body|string|false|none|
|» minimumCharge|body|number|false|none|
|» quantity|body|number|false|none|
|» rate|body|number|false|none|
|» rateOrigin|body|string|false|none|
|» total|body|number|false|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» rateOrigin|PRICE_PROFILE|
|» rateOrigin|PRICE_LIST|
|» rateOrigin|FILLED_MANUALLY|
|» rateOrigin|AUTOCALCULATED|
|» type|SIMPLE|
|» type|CAT|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/quotes/createPayable.json#responseBody"
```

<h3 id="adds-a-payable-to-a-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[PayableDTO](#schemapayabledto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates a payable.

<a id="opIdupdatePayable_3"></a>

> Code samples

```bash
curl https://example.com/v2/quotes/string/finance/payables/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/quotes/updatePayable.json#requestBody"'
```

`PUT /v2/quotes/{quoteId}/finance/payables/{payableId}`

Updates a payable.

> Body parameter

```json
"/home-api/assets/examples/v2/quotes/updatePayable.json#requestBody"
```

<h3 id="updates-a-payable-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|
|payableId|path|integer(int64)|true|payable's internal identifier|
|body|body|[PayableDTO](#schemapayabledto)|true|none|
|» calculationUnitId|body|integer(int64)|false|none|
|» currencyId|body|integer(int64)|false|none|
|» description|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» ignoreMinimumCharge|body|boolean|false|none|
|» invoiceId|body|string|false|none|
|» jobId|body|object|false|none|
|» jobTypeId|body|integer(int64)|false|none|
|» languageCombination|body|[ChargeLanguageCombinationDTO](#schemachargelanguagecombinationdto)|false|none|
|» languageCombinationIdNumber|body|string|false|none|
|» minimumCharge|body|number|false|none|
|» quantity|body|number|false|none|
|» rate|body|number|false|none|
|» rateOrigin|body|string|false|none|
|» total|body|number|false|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» rateOrigin|PRICE_PROFILE|
|» rateOrigin|PRICE_LIST|
|» rateOrigin|FILLED_MANUALLY|
|» rateOrigin|AUTOCALCULATED|
|» type|SIMPLE|
|» type|CAT|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/quotes/updatePayable.json#responseBody"
```

<h3 id="updates-a-payable-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[PayableDTO](#schemapayabledto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Deletes a payable.

<a id="opIddeletePayable_3"></a>

> Code samples

```bash
curl https://example.com/v2/quotes/string/finance/payables/0 \
  -X DELETE \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`DELETE /v2/quotes/{quoteId}/finance/payables/{payableId}`

Deletes a payable.

<h3 id="deletes-a-payable-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|
|payableId|path|integer(int64)|true|payable's internal identifier|

<h3 id="deletes-a-payable-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Adds a receivable to a quote.

<a id="opIdcreateReceivable_3"></a>

> Code samples

```bash
curl https://example.com/v2/quotes/string/finance/receivables \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/quotes/createReceivable.json#requestBody"'
```

`POST /v2/quotes/{quoteId}/finance/receivables`

Adds a receivable to a quote.

> Body parameter

```json
"/home-api/assets/examples/v2/quotes/createReceivable.json#requestBody"
```

<h3 id="adds-a-receivable-to-a-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|
|body|body|[ReceivableCreateDTO](#schemareceivablecreatedto)|true|none|
|» calculationUnitId|body|integer(int64)|false|none|
|» catLogFile|body|[FileDTO](#schemafiledto)|false|none|
|» currencyId|body|integer(int64)|false|none|
|» description|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» ignoreMinimumCharge|body|boolean|false|none|
|» invoiceId|body|string|false|none|
|» jobTypeId|body|integer(int64)|false|none|
|» languageCombination|body|[ChargeLanguageCombinationDTO](#schemachargelanguagecombinationdto)|false|none|
|» languageCombinationIdNumber|body|string|false|none|
|» minimumCharge|body|number|false|none|
|» quantity|body|number|false|none|
|» rate|body|number|false|none|
|» rateOrigin|body|string|false|none|
|» taskId|body|integer(int64)|false|none|
|» total|body|number|false|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» rateOrigin|PRICE_PROFILE|
|» rateOrigin|PRICE_LIST|
|» rateOrigin|FILLED_MANUALLY|
|» rateOrigin|AUTOCALCULATED|
|» type|SIMPLE|
|» type|CAT|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/quotes/createReceivable.json#responseBody"
```

<h3 id="adds-a-receivable-to-a-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ReceivableDTO](#schemareceivabledto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates a receivable.

<a id="opIdupdateReceivable_3"></a>

> Code samples

```bash
curl https://example.com/v2/quotes/string/finance/receivables/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/quotes/updateReceivable.json#requestBody"'
```

`PUT /v2/quotes/{quoteId}/finance/receivables/{receivableId}`

Updates a receivable.

> Body parameter

```json
"/home-api/assets/examples/v2/quotes/updateReceivable.json#requestBody"
```

<h3 id="updates-a-receivable-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|
|receivableId|path|integer(int64)|true|receivable's internal identifier|
|body|body|[ReceivableDTO](#schemareceivabledto)|true|none|
|» calculationUnitId|body|integer(int64)|false|none|
|» currencyId|body|integer(int64)|false|none|
|» description|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» ignoreMinimumCharge|body|boolean|false|none|
|» invoiceId|body|string|false|none|
|» jobTypeId|body|integer(int64)|false|none|
|» languageCombination|body|[ChargeLanguageCombinationDTO](#schemachargelanguagecombinationdto)|false|none|
|» languageCombinationIdNumber|body|string|false|none|
|» minimumCharge|body|number|false|none|
|» quantity|body|number|false|none|
|» rate|body|number|false|none|
|» rateOrigin|body|string|false|none|
|» taskId|body|integer(int64)|false|none|
|» total|body|number|false|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» rateOrigin|PRICE_PROFILE|
|» rateOrigin|PRICE_LIST|
|» rateOrigin|FILLED_MANUALLY|
|» rateOrigin|AUTOCALCULATED|
|» type|SIMPLE|
|» type|CAT|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/quotes/updateReceivable.json#responseBody"
```

<h3 id="updates-a-receivable-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|[ReceivableDTO](#schemareceivabledto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Deletes a receivable.

<a id="opIddeleteReceivable_3"></a>

> Code samples

```bash
curl https://example.com/v2/quotes/string/finance/receivables/0 \
  -X DELETE \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`DELETE /v2/quotes/{quoteId}/finance/receivables/{receivableId}`

Deletes a receivable.

<h3 id="deletes-a-receivable-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|
|receivableId|path|integer(int64)|true|receivable's internal identifier|

<h3 id="deletes-a-receivable-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates Internal Notes for a quote.

<a id="opIdupdateInternalNotes_1"></a>

> Code samples

```bash
curl https://example.com/v2/quotes/string/internalNotes \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/quotes/updateInternalNotes.json#requestBody"'
```

`PUT /v2/quotes/{quoteId}/internalNotes`

Updates Internal Notes for a quote.

> Body parameter

```json
"/home-api/assets/examples/v2/quotes/updateInternalNotes.json#requestBody"
```

<h3 id="updates-internal-notes-for-a-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|
|body|body|[StringDTO](#schemastringdto)|true|Updated Internal Notes for a quote.|
|» value|body|string|false|none|

<h3 id="updates-internal-notes-for-a-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Returns list of jobs in a quote.

<a id="opIdgetJobs_1"></a>

> Code samples

```bash
curl https://example.com/v2/quotes/string/jobs \
  -H 'Accept: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}"
```

`GET /v2/quotes/{quoteId}/jobs`

Returns list of jobs in a quote.

<h3 id="returns-list-of-jobs-in-a-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|

> Example responses

> default Response

```json
"/home-api/assets/examples/v2/quotes/getJobs.json#responseBody"
```

<h3 id="returns-list-of-jobs-in-a-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Success|Inline|

<h3 id="returns-list-of-jobs-in-a-quote-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[JobDto](#schemajobdto-1)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates Quote Expiry Date for a quote.

<a id="opIdupdateQuoteExpiry"></a>

> Code samples

```bash
curl https://example.com/v2/quotes/string/quoteExpiry \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/quotes/updateQuoteExpiry.json#requestBody"'
```

`PUT /v2/quotes/{quoteId}/quoteExpiry`

Updates Quote Expiry Date for a quote.

> Body parameter

```json
"/home-api/assets/examples/v2/quotes/updateQuoteExpiry.json#requestBody"
```

<h3 id="updates-quote-expiry-date-for-a-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|
|body|body|[TimeDTO](#schematimedto)|true|Updated Quote Expiry Date for a quote.|
|» value|body|integer(int64)|false|none|

<h3 id="updates-quote-expiry-date-for-a-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates source language for a quote.

<a id="opIdupdateSourceLanguage_1"></a>

> Code samples

```bash
curl https://example.com/v2/quotes/string/sourceLanguage \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/quotes/updateSourceLanguage.json#requestBody"'
```

`PUT /v2/quotes/{quoteId}/sourceLanguage`

Updates source language for a quote.

> Body parameter

```json
"/home-api/assets/examples/v2/quotes/updateSourceLanguage.json#requestBody"
```

<h3 id="updates-source-language-for-a-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|
|body|body|[SourceLanguageDTO](#schemasourcelanguagedto)|true|Updated source language for a quote.|
|» sourceLanguageId|body|integer(int64)|false|none|

<h3 id="updates-source-language-for-a-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates specialization for a quote.

<a id="opIdupdateSpecialization_1"></a>

> Code samples

```bash
curl https://example.com/v2/quotes/string/specialization \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/quotes/updateSpecialization.json#requestBody"'
```

`PUT /v2/quotes/{quoteId}/specialization`

Updates specialization for a quote.

> Body parameter

```json
"/home-api/assets/examples/v2/quotes/updateSpecialization.json#requestBody"
```

<h3 id="updates-specialization-for-a-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|
|body|body|[SpecializationDTO](#schemaspecializationdto)|true|Updated specialization for a quote.|
|» specializationId|body|integer(int64)|false|none|

<h3 id="updates-specialization-for-a-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Changes quote status if possible (400 Bad Request is returned otherwise).

<a id="opIdchangeStatus_3"></a>

> Code samples

```bash
curl https://example.com/v2/quotes/string/status \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/quotes/changeStatus.json#requestBody"'
```

`PUT /v2/quotes/{quoteId}/status`

Changes quote status if possible (400 Bad Request is returned otherwise). The status has to be specified using one of the following keys: <ul><li>PENDING – available when the job has one of the following statuses: REQUESTED, REJECTED</li><li>SENT – available when the job has one of the following statuses: PENDING</li><li>APPROVED – available when the job has one of the following statuses: REQUESTED, PENDING, SENT, APPROVED_BY_CLIENT</li><li>REJECTED – available when the job has one of the following statuses: REQUESTED, PENDING, SENT</li></ul>

> Body parameter

```json
"/home-api/assets/examples/v2/quotes/changeStatus.json#requestBody"
```

<h3 id="changes-quote-status-if-possible-400-bad-request-is-returned-otherwise-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|
|body|body|[ProjectStatusDTO](#schemaprojectstatusdto)|true|Changed Quote status.|
|» status|body|string|false|none|

<h3 id="changes-quote-status-if-possible-400-bad-request-is-returned-otherwise-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates target languages for a quote.

<a id="opIdupdateTargetLanguages_1"></a>

> Code samples

```bash
curl https://example.com/v2/quotes/string/targetLanguages \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/quotes/updateTargetLanguages.json#requestBody"'
```

`PUT /v2/quotes/{quoteId}/targetLanguages`

Updates target languages for a quote.

> Body parameter

```json
"/home-api/assets/examples/v2/quotes/updateTargetLanguages.json#requestBody"
```

<h3 id="updates-target-languages-for-a-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|
|body|body|[TargetLanguagesDTO](#schematargetlanguagesdto)|true|Updated target languages for a quote.|
|» targetLanguageIds|body|[integer(int64)]|false|none|

<h3 id="updates-target-languages-for-a-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates instructions for all vendors performing the jobs in a quote.

<a id="opIdupdateVendorInstructions_1"></a>

> Code samples

```bash
curl https://example.com/v2/quotes/string/vendorInstructions \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/quotes/updateInstructionsForAllJobs.json#requestBody"'
```

`PUT /v2/quotes/{quoteId}/vendorInstructions`

Updates instructions for all vendors performing the jobs in a quote. See also "PUT /jobs/{jobId}/instructions" for updating instructions for a specific job in a project or quote.

> Body parameter

```json
"/home-api/assets/examples/v2/quotes/updateInstructionsForAllJobs.json#requestBody"
```

<h3 id="updates-instructions-for-all-vendors-performing-the-jobs-in-a-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|
|body|body|[StringDTO](#schemastringdto)|true|Updated instructions for all vendors performing the jobs in a quote.|
|» value|body|string|false|none|

<h3 id="updates-instructions-for-all-vendors-performing-the-jobs-in-a-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

## Updates volume for a quote.

<a id="opIdupdateVolume_1"></a>

> Code samples

```bash
curl https://example.com/v2/quotes/string/volume \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "X-AUTH-ACCESS-TOKEN: ${API_KEY}" \
  -d '"/home-api/assets/examples/v2/quotes/updateVolume.json#requestBody"'
```

`PUT /v2/quotes/{quoteId}/volume`

Updates volume for a quote.

> Body parameter

```json
"/home-api/assets/examples/v2/quotes/updateVolume.json#requestBody"
```

<h3 id="updates-volume-for-a-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quoteId|path|string|true|quote's internal identifier|
|body|body|[BigDecimalDTO](#schemabigdecimaldto)|true|Updated volume for a quote.|
|» value|body|number|false|none|

<h3 id="updates-volume-for-a-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN, X-AUTH-ACCESS-TOKEN
</aside>

# Schemas

<h2 id="tocS_AccessDTO">AccessDTO</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdto"></a>
<a id="schema_AccessDTO"></a>
<a id="tocSaccessdto"></a>
<a id="tocsaccessdto"></a>

```json
{
  "change": true,
  "delete": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|change|boolean|false|none|none|
|delete|boolean|false|none|none|

<h2 id="tocS_AccessTokenDTO">AccessTokenDTO</h2>
<!-- backwards compatibility -->
<a id="schemaaccesstokendto"></a>
<a id="schema_AccessTokenDTO"></a>
<a id="tocSaccesstokendto"></a>
<a id="tocsaccesstokendto"></a>

```json
{
  "token": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_AccessTokenRequestDTO">AccessTokenRequestDTO</h2>
<!-- backwards compatibility -->
<a id="schemaaccesstokenrequestdto"></a>
<a id="schema_AccessTokenRequestDTO"></a>
<a id="tocSaccesstokenrequestdto"></a>
<a id="tocsaccesstokenrequestdto"></a>

```json
{
  "loginOrEmail": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loginOrEmail|string|false|none|none|

<h2 id="tocS_ActionDTO">ActionDTO</h2>
<!-- backwards compatibility -->
<a id="schemaactiondto"></a>
<a id="schema_ActionDTO"></a>
<a id="tocSactiondto"></a>
<a id="tocsactiondto"></a>

```json
{
  "header": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|header|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_ActionStartedDTO">ActionStartedDTO</h2>
<!-- backwards compatibility -->
<a id="schemaactionstarteddto"></a>
<a id="schema_ActionStartedDTO"></a>
<a id="tocSactionstarteddto"></a>
<a id="tocsactionstarteddto"></a>

```json
{
  "actionId": "string",
  "resultUrl": "string",
  "statusUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionId|string|false|none|none|
|resultUrl|string|false|none|none|
|statusUrl|string|false|none|none|

<h2 id="tocS_ActiveSubscriptionDTO">ActiveSubscriptionDTO</h2>
<!-- backwards compatibility -->
<a id="schemaactivesubscriptiondto"></a>
<a id="schema_ActiveSubscriptionDTO"></a>
<a id="tocSactivesubscriptiondto"></a>
<a id="tocsactivesubscriptiondto"></a>

```json
{
  "embed": "string",
  "event": "string",
  "filter": "string",
  "subscriptionId": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|embed|string|false|none|additional fields which should be embedded in the event|
|event|string|false|none|event to which you want to subscribe|
|filter|string|false|none|filter expression in the form 'attribute=value'|
|subscriptionId|string|false|none|subscription identifier|
|url|string|false|none|url that will be invoked by XTRF on event|

<h2 id="tocS_AddJobToProcessDTO">AddJobToProcessDTO</h2>
<!-- backwards compatibility -->
<a id="schemaaddjobtoprocessdto"></a>
<a id="schema_AddJobToProcessDTO"></a>
<a id="tocSaddjobtoprocessdto"></a>
<a id="tocsaddjobtoprocessdto"></a>

```json
{
  "externalInfo": {
    "steps": [
      {
        "property1": "string",
        "property2": "string"
      }
    ]
  },
  "externalProjectId": "string",
  "previousStepNumber": 0,
  "stepTypeId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|externalInfo|[ExternalInfo](#schemaexternalinfo)|false|none|none|
|externalProjectId|string|false|none|none|
|previousStepNumber|integer(int32)|false|none|none|
|stepTypeId|string|false|none|none|

<h2 id="tocS_AddressDTO">AddressDTO</h2>
<!-- backwards compatibility -->
<a id="schemaaddressdto"></a>
<a id="schema_AddressDTO"></a>
<a id="tocSaddressdto"></a>
<a id="tocsaddressdto"></a>

```json
{
  "addressLine1": "string",
  "addressLine2": "string",
  "city": "string",
  "countryId": 0,
  "postalCode": "string",
  "provinceId": 0,
  "sameAsBillingAddress": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressLine1|string|false|none|first line of address|
|addressLine2|string|false|none|second line of address|
|city|string|false|none|city|
|countryId|integer(int64)|false|none|country|
|postalCode|string|false|none|postal code|
|provinceId|integer(int64)|false|none|province|
|sameAsBillingAddress|boolean|false|none|should billing address be used instead of this one|

<h2 id="tocS_AssignVendorDTO">AssignVendorDTO</h2>
<!-- backwards compatibility -->
<a id="schemaassignvendordto"></a>
<a id="schema_AssignVendorDTO"></a>
<a id="tocSassignvendordto"></a>
<a id="tocsassignvendordto"></a>

```json
{
  "recalculateRates": true,
  "vendorPriceProfileId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recalculateRates|boolean|false|none|none|
|vendorPriceProfileId|integer(int64)|false|none|none|

<h2 id="tocS_BigDecimalDTO">BigDecimalDTO</h2>
<!-- backwards compatibility -->
<a id="schemabigdecimaldto"></a>
<a id="schema_BigDecimalDTO"></a>
<a id="tocSbigdecimaldto"></a>
<a id="tocsbigdecimaldto"></a>

```json
{
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|number|false|none|none|

<h2 id="tocS_BodyPart">BodyPart</h2>
<!-- backwards compatibility -->
<a id="schemabodypart"></a>
<a id="schema_BodyPart"></a>
<a id="tocSbodypart"></a>
<a id="tocsbodypart"></a>

```json
{
  "contentDisposition": {
    "creationDate": "1970-01-01T00:00:00Z",
    "fileName": "string",
    "modificationDate": "1970-01-01T00:00:00Z",
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "readDate": "1970-01-01T00:00:00Z",
    "size": 0,
    "type": "string"
  },
  "entity": {},
  "headers": {
    "empty": true,
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "mediaType": {
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "subtype": "string",
    "type": "string",
    "wildcardSubtype": true,
    "wildcardType": true
  },
  "messageBodyWorkers": {},
  "parameterizedHeaders": {
    "empty": true,
    "property1": [
      {
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "value": "string"
      }
    ],
    "property2": [
      {
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "value": "string"
      }
    ]
  },
  "parent": {
    "bodyParts": [
      {}
    ],
    "contentDisposition": {
      "creationDate": "1970-01-01T00:00:00Z",
      "fileName": "string",
      "modificationDate": "1970-01-01T00:00:00Z",
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "readDate": "1970-01-01T00:00:00Z",
      "size": 0,
      "type": "string"
    },
    "entity": {},
    "headers": {
      "empty": true,
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "mediaType": {
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "subtype": "string",
      "type": "string",
      "wildcardSubtype": true,
      "wildcardType": true
    },
    "messageBodyWorkers": {},
    "parameterizedHeaders": {
      "empty": true,
      "property1": [
        {
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "value": "string"
        }
      ],
      "property2": [
        {
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "value": "string"
        }
      ]
    },
    "parent": {},
    "providers": {}
  },
  "providers": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentDisposition|[ContentDisposition](#schemacontentdisposition)|false|none|none|
|entity|object|false|none|none|
|headers|object|false|none|none|
|mediaType|object|false|none|none|
|messageBodyWorkers|[MessageBodyWorkers](#schemamessagebodyworkers)|false|none|none|
|parameterizedHeaders|object|false|none|none|
|parent|[MultiPart](#schemamultipart)|false|none|none|
|providers|object|false|none|none|

<h2 id="tocS_CATToolProjectDTO">CATToolProjectDTO</h2>
<!-- backwards compatibility -->
<a id="schemacattoolprojectdto"></a>
<a id="schema_CATToolProjectDTO"></a>
<a id="tocScattoolprojectdto"></a>
<a id="tocscattoolprojectdto"></a>

```json
{
  "projectCreatedInCatToolOrCreationIsQueued": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectCreatedInCatToolOrCreationIsQueued|boolean|false|none|none|

<h2 id="tocS_CalculationUnitDTO">CalculationUnitDTO</h2>
<!-- backwards compatibility -->
<a id="schemacalculationunitdto"></a>
<a id="schema_CalculationUnitDTO"></a>
<a id="tocScalculationunitdto"></a>
<a id="tocscalculationunitdto"></a>

```json
{
  "active": true,
  "canBeUsedInCatAnalysis": true,
  "catQuantityConversionExpression": "string",
  "default": true,
  "exchangeRatio": 0,
  "fileStatsConversionExpression": "string",
  "id": 0,
  "jobTypeIds": [
    0
  ],
  "name": "string",
  "preferred": true,
  "symbol": "string",
  "timeToQuantityConversionExpression": "string",
  "type": "TIME"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|should this value be available on the XTRF selection lists|
|canBeUsedInCatAnalysis|boolean|false|none|none|
|catQuantityConversionExpression|string|false|none|none|
|default|boolean|false|none|should this value be set by default in XTRF selection lists|
|exchangeRatio|number|false|none|none|
|fileStatsConversionExpression|string|false|none|none|
|id|integer(int64)|false|none|internal identifier|
|jobTypeIds|[integer(int64)]|false|none|none|
|name|string|false|none|localised name (formatted in the current user's locale)|
|preferred|boolean|false|none|should this value be available on the top of XTRF selection lists, in the Preferred section|
|symbol|string|false|none|none|
|timeToQuantityConversionExpression|string|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TIME|
|type|VOLUME|
|type|PERCENT|

<h2 id="tocS_CategoriesDTO">CategoriesDTO</h2>
<!-- backwards compatibility -->
<a id="schemacategoriesdto"></a>
<a id="schema_CategoriesDTO"></a>
<a id="tocScategoriesdto"></a>
<a id="tocscategoriesdto"></a>

```json
[
  0
]
```

<h2 id="tocS_CategoryDTO">CategoryDTO</h2>
<!-- backwards compatibility -->
<a id="schemacategorydto"></a>
<a id="schema_CategoryDTO"></a>
<a id="tocScategorydto"></a>
<a id="tocscategorydto"></a>

```json
{
  "active": true,
  "default": true,
  "id": 0,
  "name": "string",
  "preferred": true,
  "supportedClasses": [
    "PROJECT"
  ]
}
```

group of things (ie. customers or projects) similar in some way (ie. VIP customers)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|should this value be available on the XTRF selection lists|
|default|boolean|false|none|should this value be set by default in XTRF selection lists|
|id|integer(int64)|false|none|internal identifier|
|name|string|false|none|localised name (formatted in the current user's locale)|
|preferred|boolean|false|none|should this value be available on the top of XTRF selection lists, in the Preferred section|
|supportedClasses|[string]|false|none|set of types for which this category can be selected|

#### Enumerated Values

|Property|Value|
|---|---|
|supportedClasses|PROJECT|
|supportedClasses|QUOTE|
|supportedClasses|QUOTE_TASK|
|supportedClasses|TASK|
|supportedClasses|PROVIDER|
|supportedClasses|CUSTOMER|
|supportedClasses|CUSTOMER_PERSON|
|supportedClasses|PROVIDER_PERSON|
|supportedClasses|FINANCIAL_REPORT|
|supportedClasses|REMINDER|
|supportedClasses|PROVIDER_INVOICE|
|supportedClasses|CUSTOMER_INVOICE|
|supportedClasses|PROJECT_GROUP|

<h2 id="tocS_ChargeDTO">ChargeDTO</h2>
<!-- backwards compatibility -->
<a id="schemachargedto"></a>
<a id="schema_ChargeDTO"></a>
<a id="tocSchargedto"></a>
<a id="tocschargedto"></a>

```json
{
  "calculationUnitId": 0,
  "currencyId": 0,
  "description": "string",
  "id": 0,
  "ignoreMinimumCharge": true,
  "invoiceId": "string",
  "jobTypeId": 0,
  "languageCombination": {
    "sourceLanguageId": 0,
    "targetLanguageId": 0
  },
  "languageCombinationIdNumber": "string",
  "minimumCharge": 0,
  "rateOrigin": "PRICE_PROFILE",
  "total": 0,
  "type": "SIMPLE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calculationUnitId|integer(int64)|false|none|none|
|currencyId|integer(int64)|false|none|none|
|description|string|false|none|none|
|id|integer(int64)|false|none|none|
|ignoreMinimumCharge|boolean|false|none|none|
|invoiceId|string|false|none|none|
|jobTypeId|integer(int64)|false|none|none|
|languageCombination|[ChargeLanguageCombinationDTO](#schemachargelanguagecombinationdto)|false|none|none|
|languageCombinationIdNumber|string|false|none|none|
|minimumCharge|number|false|none|none|
|rateOrigin|string|false|none|none|
|total|number|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|rateOrigin|PRICE_PROFILE|
|rateOrigin|PRICE_LIST|
|rateOrigin|FILLED_MANUALLY|
|rateOrigin|AUTOCALCULATED|
|type|SIMPLE|
|type|CAT|

<h2 id="tocS_ChargeLanguageCombinationDTO">ChargeLanguageCombinationDTO</h2>
<!-- backwards compatibility -->
<a id="schemachargelanguagecombinationdto"></a>
<a id="schema_ChargeLanguageCombinationDTO"></a>
<a id="tocSchargelanguagecombinationdto"></a>
<a id="tocschargelanguagecombinationdto"></a>

```json
{
  "sourceLanguageId": 0,
  "targetLanguageId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceLanguageId|integer(int64)|false|none|none|
|targetLanguageId|integer(int64)|false|none|none|

<h2 id="tocS_ClassicPeopleDTO">ClassicPeopleDTO</h2>
<!-- backwards compatibility -->
<a id="schemaclassicpeopledto"></a>
<a id="schema_ClassicPeopleDTO"></a>
<a id="tocSclassicpeopledto"></a>
<a id="tocsclassicpeopledto"></a>

```json
{
  "customerContacts": {
    "additionalIds": [
      0
    ],
    "primaryId": 0,
    "sendBackToId": 0
  },
  "responsiblePersons": {
    "projectCoordinatorId": 0,
    "projectManagerId": 0
  }
}
```

people

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customerContacts|[ContactsDTO](#schemacontactsdto)|false|none|none|
|responsiblePersons|[ResponsiblePersonsDTO](#schemaresponsiblepersonsdto)|false|none|none|

<h2 id="tocS_ClassicProjectCreateDTO">ClassicProjectCreateDTO</h2>
<!-- backwards compatibility -->
<a id="schemaclassicprojectcreatedto"></a>
<a id="schema_ClassicProjectCreateDTO"></a>
<a id="tocSclassicprojectcreatedto"></a>
<a id="tocsclassicprojectcreatedto"></a>

```json
{
  "categoriesIds": [
    0
  ],
  "customerId": 0,
  "dates": {
    "actualDeliveryDate": {
      "value": 0
    },
    "actualStartDate": {
      "value": 0
    },
    "deadline": {
      "value": 0
    },
    "startDate": {
      "value": 0
    }
  },
  "inputFiles": [
    {
      "category": "WORKFILE",
      "content": "string",
      "name": "string",
      "token": "string",
      "url": "string"
    }
  ],
  "instructions": {
    "forProvider": "string",
    "fromCustomer": "string",
    "internal": "string",
    "notes": "string",
    "paymentNoteForCustomer": "string",
    "paymentNoteForVendor": "string"
  },
  "name": "string",
  "people": {
    "customerContacts": {
      "additionalIds": [
        0
      ],
      "primaryId": 0,
      "sendBackToId": 0
    },
    "responsiblePersons": {
      "projectCoordinatorId": 0,
      "projectManagerId": 0
    }
  },
  "serviceId": 0,
  "sourceLanguageId": 0,
  "specializationId": 0,
  "targetLanguagesIds": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoriesIds|[integer(int64)]|false|none|list of language categories|
|customerId|integer(int64)|true|none|none|
|dates|[ProjectDatesDTO](#schemaprojectdatesdto)|false|none|none|
|inputFiles|[[TaskFileDTO](#schemataskfiledto)]|false|none|input files|
|instructions|[InstructionsDTO](#schemainstructionsdto)|false|none|none|
|name|string|false|none|none|
|people|[ClassicPeopleDTO](#schemaclassicpeopledto)|false|none|people|
|serviceId|integer(int64)|true|none|none|
|sourceLanguageId|integer(int64)|false|none|none|
|specializationId|integer(int64)|true|none|none|
|targetLanguagesIds|[integer(int64)]|false|none|none|

<h2 id="tocS_ColumnDTO">ColumnDTO</h2>
<!-- backwards compatibility -->
<a id="schemacolumndto"></a>
<a id="schema_ColumnDTO"></a>
<a id="tocScolumndto"></a>
<a id="tocscolumndto"></a>

```json
{
  "name": "string",
  "settings": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|settings|[JsonNode](#schemajsonnode)|false|none|none|

<h2 id="tocS_CommonLanguageCombinationDTO">CommonLanguageCombinationDTO</h2>
<!-- backwards compatibility -->
<a id="schemacommonlanguagecombinationdto"></a>
<a id="schema_CommonLanguageCombinationDTO"></a>
<a id="tocScommonlanguagecombinationdto"></a>
<a id="tocscommonlanguagecombinationdto"></a>

```json
{
  "sourceLanguageId": 0,
  "targetLanguageId": 0
}
```

language combination (ie. PL -> EN)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceLanguageId|integer(int64)|false|none|none|
|targetLanguageId|integer(int64)|false|none|none|

<h2 id="tocS_CompetenciesDTO">CompetenciesDTO</h2>
<!-- backwards compatibility -->
<a id="schemacompetenciesdto"></a>
<a id="schema_CompetenciesDTO"></a>
<a id="tocScompetenciesdto"></a>
<a id="tocscompetenciesdto"></a>

```json
{
  "languageCombinations": [
    {
      "sourceLanguageId": 0,
      "targetLanguageId": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languageCombinations|[[CommonLanguageCombinationDTO](#schemacommonlanguagecombinationdto)]|false|none|none|

<h2 id="tocS_ContactDTO">ContactDTO</h2>
<!-- backwards compatibility -->
<a id="schemacontactdto"></a>
<a id="schema_ContactDTO"></a>
<a id="tocScontactdto"></a>
<a id="tocscontactdto"></a>

```json
{
  "emails": {
    "additional": [
      "string"
    ],
    "cc": [
      "string"
    ],
    "primary": "string"
  },
  "fax": "string",
  "phones": [
    "string"
  ],
  "sms": "string",
  "websites": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emails|[CustomerContactEmailsDTO](#schemacustomercontactemailsdto)|false|none|emails|
|fax|string|false|none|fax number|
|phones|[string]|false|none|phones' numbers|
|sms|string|false|none|mobile phone for which SMS notifications will be sent (if configured)|
|websites|[string]|false|none|websites|

<h2 id="tocS_ContactsDTO">ContactsDTO</h2>
<!-- backwards compatibility -->
<a id="schemacontactsdto"></a>
<a id="schema_ContactsDTO"></a>
<a id="tocScontactsdto"></a>
<a id="tocscontactsdto"></a>

```json
{
  "additionalIds": [
    0
  ],
  "primaryId": 0,
  "sendBackToId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalIds|[integer(int64)]|false|none|none|
|primaryId|integer(int64)|false|none|none|
|sendBackToId|integer(int64)|false|none|none|

<h2 id="tocS_ContentDisposition">ContentDisposition</h2>
<!-- backwards compatibility -->
<a id="schemacontentdisposition"></a>
<a id="schema_ContentDisposition"></a>
<a id="tocScontentdisposition"></a>
<a id="tocscontentdisposition"></a>

```json
{
  "creationDate": "1970-01-01T00:00:00Z",
  "fileName": "string",
  "modificationDate": "1970-01-01T00:00:00Z",
  "parameters": {
    "property1": "string",
    "property2": "string"
  },
  "readDate": "1970-01-01T00:00:00Z",
  "size": 0,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationDate|string(date-time)|false|none|none|
|fileName|string|false|none|none|
|modificationDate|string(date-time)|false|none|none|
|parameters|object|false|none|none|
|readDate|string(date-time)|false|none|none|
|size|integer(int64)|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_CountryDTO">CountryDTO</h2>
<!-- backwards compatibility -->
<a id="schemacountrydto"></a>
<a id="schema_CountryDTO"></a>
<a id="tocScountrydto"></a>
<a id="tocscountrydto"></a>

```json
{
  "active": true,
  "default": true,
  "id": 0,
  "name": "string",
  "preferred": true,
  "symbol": "string"
}
```

distinct entity in political geography (ie. Poland)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|should this value be available on the XTRF selection lists|
|default|boolean|false|none|should this value be set by default in XTRF selection lists|
|id|integer(int64)|false|none|internal identifier|
|name|string|false|none|localised name (formatted in the current user's locale)|
|preferred|boolean|false|none|should this value be available on the top of XTRF selection lists, in the Preferred section|
|symbol|string|false|none|specific symbol or abbreviation|

<h2 id="tocS_CurrencyDTO">CurrencyDTO</h2>
<!-- backwards compatibility -->
<a id="schemacurrencydto"></a>
<a id="schema_CurrencyDTO"></a>
<a id="tocScurrencydto"></a>
<a id="tocscurrencydto"></a>

```json
{
  "active": true,
  "default": true,
  "id": 0,
  "isoCode": "string",
  "name": "string",
  "preferred": true,
  "symbol": "string"
}
```

medium of money exchange (ie. euro or dollar)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|should this value be available on the XTRF selection lists|
|default|boolean|false|none|should this value be set by default in XTRF selection lists|
|id|integer(int64)|false|none|internal identifier|
|isoCode|string|false|none|<a href="http://en.wikipedia.org/wiki/ISO_4217">ISO 4217 code</a>|
|name|string|false|none|localised name (formatted in the current user's locale)|
|preferred|boolean|false|none|should this value be available on the top of XTRF selection lists, in the Preferred section|
|symbol|string|false|none|specific symbol or abbreviation|

<h2 id="tocS_CurrencyHistoryDTO">CurrencyHistoryDTO</h2>
<!-- backwards compatibility -->
<a id="schemacurrencyhistorydto"></a>
<a id="schema_CurrencyHistoryDTO"></a>
<a id="tocScurrencyhistorydto"></a>
<a id="tocscurrencyhistorydto"></a>

```json
{
  "dateFrom": {
    "value": 0
  },
  "exchangeRate": "string",
  "lastModification": {
    "value": 0
  },
  "originDetails": "string",
  "publicationDate": {
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateFrom|[TimeDTO](#schematimedto)|false|none|none|
|exchangeRate|string|false|none|none|
|lastModification|[TimeDTO](#schematimedto)|false|none|none|
|originDetails|string|false|none|none|
|publicationDate|[TimeDTO](#schematimedto)|false|none|none|

<h2 id="tocS_CustomFieldDTO">CustomFieldDTO</h2>
<!-- backwards compatibility -->
<a id="schemacustomfielddto"></a>
<a id="schema_CustomFieldDTO"></a>
<a id="tocScustomfielddto"></a>
<a id="tocscustomfielddto"></a>

```json
{
  "key": "string",
  "name": "string",
  "type": "TEXT",
  "value": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|name|string|false|none|none|
|type|string|false|none|none|
|value|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TEXT|
|type|DATE|
|type|DATE_AND_TIME|
|type|NUMBER|
|type|CHECKBOX|
|type|SELECTION|
|type|MULTI_SELECTION|

<h2 id="tocS_CustomFieldsDTO">CustomFieldsDTO</h2>
<!-- backwards compatibility -->
<a id="schemacustomfieldsdto"></a>
<a id="schema_CustomFieldsDTO"></a>
<a id="tocScustomfieldsdto"></a>
<a id="tocscustomfieldsdto"></a>

```json
[
  {
    "key": "string",
    "name": "string",
    "type": "TEXT",
    "value": {}
  }
]
```

<h2 id="tocS_CustomerAccountingDTO">CustomerAccountingDTO</h2>
<!-- backwards compatibility -->
<a id="schemacustomeraccountingdto"></a>
<a id="schema_CustomerAccountingDTO"></a>
<a id="tocScustomeraccountingdto"></a>
<a id="tocscustomeraccountingdto"></a>

```json
{
  "taxNumbers": [
    {
      "number": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taxNumbers|[[CustomerTaxNoDTO](#schemacustomertaxnodto)]|false|none|none|

<h2 id="tocS_CustomerContactEmailsDTO">CustomerContactEmailsDTO</h2>
<!-- backwards compatibility -->
<a id="schemacustomercontactemailsdto"></a>
<a id="schema_CustomerContactEmailsDTO"></a>
<a id="tocScustomercontactemailsdto"></a>
<a id="tocscustomercontactemailsdto"></a>

```json
{
  "additional": [
    "string"
  ],
  "cc": [
    "string"
  ],
  "primary": "string"
}
```

emails

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional|[string]|false|none|additional e-mails addresses|
|cc|[string]|false|none|e-mails which will be included in the CC list|
|primary|string|true|none|primary e-mail|

<h2 id="tocS_CustomerDTO">CustomerDTO</h2>
<!-- backwards compatibility -->
<a id="schemacustomerdto"></a>
<a id="schema_CustomerDTO"></a>
<a id="tocScustomerdto"></a>
<a id="tocscustomerdto"></a>

```json
{
  "accountOnCustomerServer": "string",
  "accounting": {
    "taxNumbers": [
      {
        "number": "string",
        "type": "string"
      }
    ]
  },
  "billingAddress": {
    "addressLine1": "string",
    "addressLine2": "string",
    "city": "string",
    "countryId": 0,
    "postalCode": "string",
    "provinceId": 0,
    "sameAsBillingAddress": true
  },
  "branchId": 0,
  "categoriesIds": [
    0
  ],
  "clientFirstProjectDate": "1970-01-01T00:00:00Z",
  "clientFirstQuoteDate": "1970-01-01T00:00:00Z",
  "clientLastProjectDate": "1970-01-01T00:00:00Z",
  "clientLastQuoteDate": "1970-01-01T00:00:00Z",
  "clientNumberOfProjects": 0,
  "clientNumberOfQuotes": 0,
  "contact": {
    "emails": {
      "additional": [
        "string"
      ],
      "cc": [
        "string"
      ],
      "primary": "string"
    },
    "fax": "string",
    "phones": [
      "string"
    ],
    "sms": "string",
    "websites": [
      "string"
    ]
  },
  "contractNumber": "string",
  "correspondenceAddress": {
    "addressLine1": "string",
    "addressLine2": "string",
    "city": "string",
    "countryId": 0,
    "postalCode": "string",
    "provinceId": 0,
    "sameAsBillingAddress": true
  },
  "customFields": [
    {
      "key": "string",
      "name": "string",
      "type": "TEXT",
      "value": {}
    }
  ],
  "fullName": "string",
  "id": 0,
  "idNumber": "string",
  "industriesIds": [
    0
  ],
  "leadSourceId": 0,
  "limitAccessToPeopleResponsible": true,
  "name": "string",
  "notes": "string",
  "persons": [
    {
      "active": true,
      "contact": {
        "emails": {
          "additional": [
            "string"
          ],
          "primary": "string"
        },
        "fax": "string",
        "phones": [
          "string"
        ],
        "sms": "string"
      },
      "customFields": [
        {
          "key": "string",
          "name": "string",
          "type": "TEXT",
          "value": {}
        }
      ],
      "customerId": 0,
      "firstProjectDate": "1970-01-01T00:00:00Z",
      "firstQuoteDate": "1970-01-01T00:00:00Z",
      "gender": "FEMALE",
      "id": 0,
      "lastName": "string",
      "lastProjectDate": "1970-01-01T00:00:00Z",
      "lastQuoteDate": "1970-01-01T00:00:00Z",
      "motherTonguesIds": [
        0
      ],
      "name": "string",
      "numberOfProjects": 0,
      "numberOfQuotes": 0,
      "positionId": 0
    }
  ],
  "responsiblePersons": {
    "accountManagerId": 0,
    "projectCoordinatorId": 0,
    "projectManagerId": 0,
    "salesPersonId": 0
  },
  "salesNotes": "string",
  "status": "ACTIVE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountOnCustomerServer|string|false|none|none|
|accounting|[CustomerAccountingDTO](#schemacustomeraccountingdto)|false|none|none|
|billingAddress|[AddressDTO](#schemaaddressdto)|false|none|none|
|branchId|integer(int64)|false|none|none|
|categoriesIds|[integer(int64)]|false|none|none|
|clientFirstProjectDate|string(date-time)|false|none|none|
|clientFirstQuoteDate|string(date-time)|false|none|none|
|clientLastProjectDate|string(date-time)|false|none|none|
|clientLastQuoteDate|string(date-time)|false|none|none|
|clientNumberOfProjects|integer(int32)|false|none|none|
|clientNumberOfQuotes|integer(int32)|false|none|none|
|contact|[ContactDTO](#schemacontactdto)|false|none|none|
|contractNumber|string|false|none|none|
|correspondenceAddress|[AddressDTO](#schemaaddressdto)|false|none|none|
|customFields|[[CustomFieldDTO](#schemacustomfielddto)]|false|none|none|
|fullName|string|false|none|none|
|id|integer(int64)|false|none|none|
|idNumber|string|false|none|none|
|industriesIds|[integer(int64)]|false|none|none|
|leadSourceId|integer(int64)|false|none|none|
|limitAccessToPeopleResponsible|boolean|false|none|none|
|name|string|false|none|none|
|notes|string|false|none|none|
|persons|[[CustomerPersonDTO](#schemacustomerpersondto)]|false|none|none|
|responsiblePersons|[CustomerResponsiblePersonsDTO](#schemacustomerresponsiblepersonsdto)|false|none|none|
|salesNotes|string|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|INACTIVE|
|status|POTENTIAL|

<h2 id="tocS_CustomerDetailsDTO">CustomerDetailsDTO</h2>
<!-- backwards compatibility -->
<a id="schemacustomerdetailsdto"></a>
<a id="schema_CustomerDetailsDTO"></a>
<a id="tocScustomerdetailsdto"></a>
<a id="tocscustomerdetailsdto"></a>

```json
{
  "addressLine": "string",
  "city": "string",
  "country": "string",
  "countryId": 0,
  "name": "string",
  "postalCode": "string",
  "vatUE": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressLine|string|false|none|none|
|city|string|false|none|none|
|country|string|false|none|none|
|countryId|integer(int64)|false|none|none|
|name|string|false|none|none|
|postalCode|string|false|none|none|
|vatUE|string|false|none|none|

<h2 id="tocS_CustomerInvoiceCreateDTO">CustomerInvoiceCreateDTO</h2>
<!-- backwards compatibility -->
<a id="schemacustomerinvoicecreatedto"></a>
<a id="schema_CustomerInvoiceCreateDTO"></a>
<a id="tocScustomerinvoicecreatedto"></a>
<a id="tocscustomerinvoicecreatedto"></a>

```json
{
  "prepaymentsIds": [
    0
  ],
  "tasksIds": [
    0
  ],
  "type": "FINAL"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prepaymentsIds|[integer(int64)]|false|none|none|
|tasksIds|[integer(int64)]|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|FINAL|
|type|DRAFT|
|type|CREDIT_NOTE|

<h2 id="tocS_CustomerInvoiceCreateResultDTO">CustomerInvoiceCreateResultDTO</h2>
<!-- backwards compatibility -->
<a id="schemacustomerinvoicecreateresultdto"></a>
<a id="schema_CustomerInvoiceCreateResultDTO"></a>
<a id="tocScustomerinvoicecreateresultdto"></a>
<a id="tocscustomerinvoicecreateresultdto"></a>

```json
{
  "invoiceUrl": "string",
  "invoicesIds": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invoiceUrl|string|false|none|none|
|invoicesIds|[integer(int64)]|false|none|none|

<h2 id="tocS_CustomerInvoiceDTO">CustomerInvoiceDTO</h2>
<!-- backwards compatibility -->
<a id="schemacustomerinvoicedto"></a>
<a id="schema_CustomerInvoiceDTO"></a>
<a id="tocScustomerinvoicedto"></a>
<a id="tocscustomerinvoicedto"></a>

```json
{
  "currencyId": 0,
  "customerDetails": {
    "addressLine": "string",
    "city": "string",
    "country": "string",
    "countryId": 0,
    "name": "string",
    "postalCode": "string",
    "vatUE": "string"
  },
  "customerId": 0,
  "dates": {
    "draftDate": {
      "value": 0
    },
    "finalDate": {
      "value": 0
    },
    "invoiceDate": {
      "value": 0
    },
    "paymentDueDate": {
      "value": 0
    }
  },
  "id": 0,
  "invoiceNumber": "string",
  "paymentMethodId": 0,
  "paymentTerms": {
    "description": "string",
    "name": "string"
  },
  "status": "NOT_READY",
  "tasks": [
    {
      "clientTaskPONumber": "string",
      "customFields": [
        {
          "key": "string",
          "name": "string",
          "type": "TEXT",
          "value": {}
        }
      ],
      "dates": {
        "actualDeliveryDate": {
          "value": 0
        },
        "actualStartDate": {
          "value": 0
        },
        "deadline": {
          "value": 0
        },
        "startDate": {
          "value": 0
        }
      },
      "finance": {
        "invoiceable": true
      },
      "id": 0,
      "idNumber": "string",
      "instructions": {
        "forProvider": "string",
        "fromCustomer": "string",
        "internal": "string",
        "notes": "string",
        "paymentNoteForCustomer": "string",
        "paymentNoteForVendor": "string"
      },
      "jobs": {
        "jobCount": 0,
        "jobIds": [
          0
        ]
      },
      "languageCombination": {
        "sourceLanguageId": 0,
        "targetLanguageId": 0
      },
      "name": "string",
      "people": {
        "customerContacts": {
          "additionalIds": [
            0
          ],
          "primaryId": 0,
          "sendBackToId": 0
        },
        "responsiblePersons": {
          "projectCoordinatorId": 0,
          "projectManagerId": 0
        }
      },
      "projectId": 0,
      "quoteId": 0
    }
  ],
  "tasksValue": 0,
  "totalGross": 0,
  "totalInWords": "string",
  "totalNetto": 0,
  "type": "FINAL",
  "vatCalculationRule": "SUM_ITEMS"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyId|integer(int64)|false|none|none|
|customerDetails|[CustomerDetailsDTO](#schemacustomerdetailsdto)|false|none|none|
|customerId|integer(int64)|false|none|none|
|dates|[CustomerInvoiceDatesDTO](#schemacustomerinvoicedatesdto)|false|none|none|
|id|integer(int64)|false|none|none|
|invoiceNumber|string|false|none|none|
|paymentMethodId|integer(int64)|false|none|none|
|paymentTerms|[PaymentTermsDTO](#schemapaymenttermsdto)|false|none|none|
|status|string|false|none|none|
|tasks|[[TaskDTO](#schemataskdto)]|false|none|none|
|tasksValue|number|false|none|none|
|totalGross|number|false|none|none|
|totalInWords|string|false|none|none|
|totalNetto|number|false|none|none|
|type|string|false|none|none|
|vatCalculationRule|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|NOT_READY|
|status|READY|
|status|SENT|
|type|FINAL|
|type|DRAFT|
|type|CREDIT_NOTE|
|vatCalculationRule|SUM_ITEMS|
|vatCalculationRule|BY_NET_TOTAL|

<h2 id="tocS_CustomerInvoiceDatesDTO">CustomerInvoiceDatesDTO</h2>
<!-- backwards compatibility -->
<a id="schemacustomerinvoicedatesdto"></a>
<a id="schema_CustomerInvoiceDatesDTO"></a>
<a id="tocScustomerinvoicedatesdto"></a>
<a id="tocscustomerinvoicedatesdto"></a>

```json
{
  "draftDate": {
    "value": 0
  },
  "finalDate": {
    "value": 0
  },
  "invoiceDate": {
    "value": 0
  },
  "paymentDueDate": {
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|draftDate|[TimeDTO](#schematimedto)|false|none|none|
|finalDate|[TimeDTO](#schematimedto)|false|none|none|
|invoiceDate|[TimeDTO](#schematimedto)|false|none|none|
|paymentDueDate|[TimeDTO](#schematimedto)|false|none|none|

<h2 id="tocS_CustomerPersonDTO">CustomerPersonDTO</h2>
<!-- backwards compatibility -->
<a id="schemacustomerpersondto"></a>
<a id="schema_CustomerPersonDTO"></a>
<a id="tocScustomerpersondto"></a>
<a id="tocscustomerpersondto"></a>

```json
{
  "active": true,
  "contact": {
    "emails": {
      "additional": [
        "string"
      ],
      "primary": "string"
    },
    "fax": "string",
    "phones": [
      "string"
    ],
    "sms": "string"
  },
  "customFields": [
    {
      "key": "string",
      "name": "string",
      "type": "TEXT",
      "value": {}
    }
  ],
  "customerId": 0,
  "firstProjectDate": "1970-01-01T00:00:00Z",
  "firstQuoteDate": "1970-01-01T00:00:00Z",
  "gender": "FEMALE",
  "id": 0,
  "lastName": "string",
  "lastProjectDate": "1970-01-01T00:00:00Z",
  "lastQuoteDate": "1970-01-01T00:00:00Z",
  "motherTonguesIds": [
    0
  ],
  "name": "string",
  "numberOfProjects": 0,
  "numberOfQuotes": 0,
  "positionId": 0
}
```

CustomerPerson

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|none|
|contact|[PersonContactDTO](#schemapersoncontactdto)|false|none|none|
|customFields|[[CustomFieldDTO](#schemacustomfielddto)]|false|none|none|
|customerId|integer(int64)|false|none|none|
|firstProjectDate|string(date-time)|false|none|none|
|firstQuoteDate|string(date-time)|false|none|none|
|gender|string|false|none|none|
|id|integer(int64)|false|none|none|
|lastName|string|false|none|none|
|lastProjectDate|string(date-time)|false|none|none|
|lastQuoteDate|string(date-time)|false|none|none|
|motherTonguesIds|[integer(int64)]|false|none|none|
|name|string|false|none|none|
|numberOfProjects|integer(int32)|false|none|none|
|numberOfQuotes|integer(int32)|false|none|none|
|positionId|integer(int64)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|gender|FEMALE|
|gender|MALE|

<h2 id="tocS_CustomerResponsiblePersonsDTO">CustomerResponsiblePersonsDTO</h2>
<!-- backwards compatibility -->
<a id="schemacustomerresponsiblepersonsdto"></a>
<a id="schema_CustomerResponsiblePersonsDTO"></a>
<a id="tocScustomerresponsiblepersonsdto"></a>
<a id="tocscustomerresponsiblepersonsdto"></a>

```json
{
  "accountManagerId": 0,
  "projectCoordinatorId": 0,
  "projectManagerId": 0,
  "salesPersonId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountManagerId|integer(int64)|false|none|account manager|
|projectCoordinatorId|integer(int64)|false|none|project coordinator|
|projectManagerId|integer(int64)|true|none|project manager|
|salesPersonId|integer(int64)|true|none|sales person|

<h2 id="tocS_CustomerTaxNoDTO">CustomerTaxNoDTO</h2>
<!-- backwards compatibility -->
<a id="schemacustomertaxnodto"></a>
<a id="schema_CustomerTaxNoDTO"></a>
<a id="tocScustomertaxnodto"></a>
<a id="tocscustomertaxnodto"></a>

```json
{
  "number": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number|string|false|none|tax number|
|type|string|false|none|type (ie. NIP, VAT Reg No, P.IVA) or empty value if unknown|

<h2 id="tocS_DictionaryEntity">DictionaryEntity</h2>
<!-- backwards compatibility -->
<a id="schemadictionaryentity"></a>
<a id="schema_DictionaryEntity"></a>
<a id="tocSdictionaryentity"></a>
<a id="tocsdictionaryentity"></a>

```json
{
  "active": true,
  "andClearEventsQueue": {
    "all": [
      {
        "raiseTime": 0
      }
    ],
    "empty": true,
    "readyToBeDispatched": true
  },
  "auditDisplayName": "string",
  "auditPath": "string",
  "classNameKey": "string",
  "classSimpleName": "string",
  "compoundId": "string",
  "defaultEntity": true,
  "displayName": "string",
  "entityMarkedAsNotSupposedToBePersisted": true,
  "eventsQueueReadyToBeDispatched": true,
  "id": 0,
  "identifier": {
    "compoundId": "string",
    "id": 0
  },
  "internalDescription": "string",
  "lastModificationDate": "1970-01-01T00:00:00Z",
  "name": "string",
  "packedCompoundId": "string",
  "preferedEntity": true,
  "preferred": true,
  "version": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|none|
|andClearEventsQueue|[EventsQueue](#schemaeventsqueue)|false|none|none|
|auditDisplayName|string|false|none|none|
|auditPath|string|false|none|none|
|classNameKey|string|false|none|none|
|classSimpleName|string|false|none|none|
|compoundId|string|false|none|none|
|defaultEntity|boolean|false|none|none|
|displayName|string|false|none|none|
|entityMarkedAsNotSupposedToBePersisted|boolean|false|none|none|
|eventsQueueReadyToBeDispatched|boolean|false|none|none|
|id|integer(int64)|false|none|none|
|identifier|[Identifier](#schemaidentifier)|false|none|none|
|internalDescription|string|false|none|none|
|lastModificationDate|string(date-time)|false|none|none|
|name|string|true|none|none|
|packedCompoundId|string|false|none|none|
|preferedEntity|boolean|true|none|none|
|preferred|boolean|false|none|none|
|version|integer(int32)|false|none|none|

<h2 id="tocS_DocumentsDTO">DocumentsDTO</h2>
<!-- backwards compatibility -->
<a id="schemadocumentsdto"></a>
<a id="schema_DocumentsDTO"></a>
<a id="tocSdocumentsdto"></a>
<a id="tocsdocumentsdto"></a>

```json
{
  "projectConfirmationStatus": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectConfirmationStatus|string|false|none|none|

<h2 id="tocS_DownloadDocumentsRequestDTO">DownloadDocumentsRequestDTO</h2>
<!-- backwards compatibility -->
<a id="schemadownloaddocumentsrequestdto"></a>
<a id="schema_DownloadDocumentsRequestDTO"></a>
<a id="tocSdownloaddocumentsrequestdto"></a>
<a id="tocsdownloaddocumentsrequestdto"></a>

```json
{
  "ids": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[integer(int64)]|false|none|none|

<h2 id="tocS_EntityWithNameDTO">EntityWithNameDTO</h2>
<!-- backwards compatibility -->
<a id="schemaentitywithnamedto"></a>
<a id="schema_EntityWithNameDTO"></a>
<a id="tocSentitywithnamedto"></a>
<a id="tocsentitywithnamedto"></a>

```json
{
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "raiseTime": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|raiseTime|integer(int64)|false|write-only|none|

<h2 id="tocS_EventsQueue">EventsQueue</h2>
<!-- backwards compatibility -->
<a id="schemaeventsqueue"></a>
<a id="schema_EventsQueue"></a>
<a id="tocSeventsqueue"></a>
<a id="tocseventsqueue"></a>

```json
{
  "all": [
    {
      "raiseTime": 0
    }
  ],
  "empty": true,
  "readyToBeDispatched": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|all|[[Event](#schemaevent)]|false|none|none|
|empty|boolean|false|none|none|
|readyToBeDispatched|boolean|false|none|none|

<h2 id="tocS_ExportRequestDTO">ExportRequestDTO</h2>
<!-- backwards compatibility -->
<a id="schemaexportrequestdto"></a>
<a id="schema_ExportRequestDTO"></a>
<a id="tocSexportrequestdto"></a>
<a id="tocsexportrequestdto"></a>

```json
{
  "ids": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[integer(int64)]|false|none|none|

<h2 id="tocS_ExternalFileDto">ExternalFileDto</h2>
<!-- backwards compatibility -->
<a id="schemaexternalfiledto"></a>
<a id="schema_ExternalFileDto"></a>
<a id="tocSexternalfiledto"></a>
<a id="tocsexternalfiledto"></a>

```json
{
  "category": "string",
  "externalInfo": {
    "property1": "string",
    "property2": "string"
  },
  "filename": "string",
  "languageCombinationIds": [
    {
      "sourceLanguageId": 0,
      "targetLanguageId": 0
    }
  ],
  "languageIds": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|none|
|externalInfo|object|false|none|none|
|filename|string|false|none|none|
|languageCombinationIds|[[LanguageCombinationDto](#schemalanguagecombinationdto-1)]|false|none|none|
|languageIds|[integer(int64)]|false|none|none|

<h2 id="tocS_ExternalInfo">ExternalInfo</h2>
<!-- backwards compatibility -->
<a id="schemaexternalinfo"></a>
<a id="schema_ExternalInfo"></a>
<a id="tocSexternalinfo"></a>
<a id="tocsexternalinfo"></a>

```json
{
  "steps": [
    {
      "property1": "string",
      "property2": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|steps|[object]|false|none|none|

<h2 id="tocS_FileCategorizationDto">FileCategorizationDto</h2>
<!-- backwards compatibility -->
<a id="schemafilecategorizationdto"></a>
<a id="schema_FileCategorizationDto"></a>
<a id="tocSfilecategorizationdto"></a>
<a id="tocsfilecategorizationdto"></a>

```json
{
  "category": "string",
  "fileId": "string",
  "languageCombinationIds": [
    {
      "sourceLanguageId": 0,
      "targetLanguageId": 0
    }
  ],
  "languageIds": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|none|
|fileId|string|false|none|none|
|languageCombinationIds|[[LanguageCombinationDto](#schemalanguagecombinationdto-1)]|false|none|none|
|languageIds|[integer(int64)]|false|none|none|

<h2 id="tocS_FileCategorizationsDto">FileCategorizationsDto</h2>
<!-- backwards compatibility -->
<a id="schemafilecategorizationsdto"></a>
<a id="schema_FileCategorizationsDto"></a>
<a id="tocSfilecategorizationsdto"></a>
<a id="tocsfilecategorizationsdto"></a>

```json
{
  "files": [
    {
      "category": "string",
      "fileId": "string",
      "languageCombinationIds": [
        {
          "sourceLanguageId": 0,
          "targetLanguageId": 0
        }
      ],
      "languageIds": [
        0
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|[[FileCategorizationDto](#schemafilecategorizationdto)]|false|none|none|

<h2 id="tocS_FileDTO">FileDTO</h2>
<!-- backwards compatibility -->
<a id="schemafiledto"></a>
<a id="schema_FileDTO"></a>
<a id="tocSfiledto"></a>
<a id="tocsfiledto"></a>

```json
{
  "content": "string",
  "name": "string",
  "token": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|none|
|name|string|false|none|none|
|token|string|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_FileDto">FileDto</h2>
<!-- backwards compatibility -->
<a id="schemafiledto-1"></a>
<a id="schema_FileDto"></a>
<a id="tocSfiledto-1"></a>
<a id="tocsfiledto-1"></a>

```json
{
  "fileId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileId|string|false|none|none|

<h2 id="tocS_FileLinkCategorizationDto">FileLinkCategorizationDto</h2>
<!-- backwards compatibility -->
<a id="schemafilelinkcategorizationdto"></a>
<a id="schema_FileLinkCategorizationDto"></a>
<a id="tocSfilelinkcategorizationdto"></a>
<a id="tocsfilelinkcategorizationdto"></a>

```json
{
  "category": "string",
  "externalInfo": {
    "property1": "string",
    "property2": "string"
  },
  "filename": "string",
  "languageCombinationIds": [
    {
      "sourceLanguageId": 0,
      "targetLanguageId": 0
    }
  ],
  "languageIds": [
    0
  ],
  "toBeGenerated": true,
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|none|
|externalInfo|object|false|none|none|
|filename|string|false|none|none|
|languageCombinationIds|[[LanguageCombinationDto](#schemalanguagecombinationdto-1)]|false|none|none|
|languageIds|[integer(int64)]|false|none|none|
|toBeGenerated|boolean|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_FileLinkCategorizationsDto">FileLinkCategorizationsDto</h2>
<!-- backwards compatibility -->
<a id="schemafilelinkcategorizationsdto"></a>
<a id="schema_FileLinkCategorizationsDto"></a>
<a id="tocSfilelinkcategorizationsdto"></a>
<a id="tocsfilelinkcategorizationsdto"></a>

```json
{
  "fileLinks": [
    {
      "category": "string",
      "externalInfo": {
        "property1": "string",
        "property2": "string"
      },
      "filename": "string",
      "languageCombinationIds": [
        {
          "sourceLanguageId": 0,
          "targetLanguageId": 0
        }
      ],
      "languageIds": [
        0
      ],
      "toBeGenerated": true,
      "url": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileLinks|[[FileLinkCategorizationDto](#schemafilelinkcategorizationdto)]|false|none|none|

<h2 id="tocS_FileMetadataDTO">FileMetadataDTO</h2>
<!-- backwards compatibility -->
<a id="schemafilemetadatadto"></a>
<a id="schema_FileMetadataDTO"></a>
<a id="tocSfilemetadatadto"></a>
<a id="tocsfilemetadatadto"></a>

```json
{
  "categoryKey": "string",
  "id": 0,
  "lastModifiedOn": 0,
  "name": "string",
  "size": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryKey|string|false|none|none|
|id|integer(int64)|false|none|none|
|lastModifiedOn|integer(int64)|false|none|none|
|name|string|false|none|none|
|size|integer(int64)|false|none|none|

<h2 id="tocS_FileShareStatusDto">FileShareStatusDto</h2>
<!-- backwards compatibility -->
<a id="schemafilesharestatusdto"></a>
<a id="schema_FileShareStatusDto"></a>
<a id="tocSfilesharestatusdto"></a>
<a id="tocsfilesharestatusdto"></a>

```json
{
  "fileId": "string",
  "message": "string",
  "successful": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileId|string|false|none|none|
|message|string|false|none|none|
|successful|boolean|false|none|none|

<h2 id="tocS_FileToUploadDto">FileToUploadDto</h2>
<!-- backwards compatibility -->
<a id="schemafiletouploaddto"></a>
<a id="schema_FileToUploadDto"></a>
<a id="tocSfiletouploaddto"></a>
<a id="tocsfiletouploaddto"></a>

```json
{
  "file": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string(binary)|false|none|none|

<h2 id="tocS_FilesArchiveDto">FilesArchiveDto</h2>
<!-- backwards compatibility -->
<a id="schemafilesarchivedto"></a>
<a id="schema_FilesArchiveDto"></a>
<a id="tocSfilesarchivedto"></a>
<a id="tocsfilesarchivedto"></a>

```json
{
  "archiveUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archiveUrl|string|false|none|none|

<h2 id="tocS_FilesDto">FilesDto</h2>
<!-- backwards compatibility -->
<a id="schemafilesdto"></a>
<a id="schema_FilesDto"></a>
<a id="tocSfilesdto"></a>
<a id="tocsfilesdto"></a>

```json
{
  "files": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|[string]|false|none|none|

<h2 id="tocS_FilesShareStatusDto">FilesShareStatusDto</h2>
<!-- backwards compatibility -->
<a id="schemafilessharestatusdto"></a>
<a id="schema_FilesShareStatusDto"></a>
<a id="tocSfilessharestatusdto"></a>
<a id="tocsfilessharestatusdto"></a>

```json
{
  "statuses": [
    {
      "fileId": "string",
      "message": "string",
      "successful": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statuses|[[FileShareStatusDto](#schemafilesharestatusdto)]|false|none|none|

<h2 id="tocS_FilterDTO">FilterDTO</h2>
<!-- backwards compatibility -->
<a id="schemafilterdto"></a>
<a id="schema_FilterDTO"></a>
<a id="tocSfilterdto"></a>
<a id="tocsfilterdto"></a>

```json
{
  "properties": [
    {}
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|properties|[object]|false|none|none|

<h2 id="tocS_FilterPropertyDTO">FilterPropertyDTO</h2>
<!-- backwards compatibility -->
<a id="schemafilterpropertydto"></a>
<a id="schema_FilterPropertyDTO"></a>
<a id="tocSfilterpropertydto"></a>
<a id="tocsfilterpropertydto"></a>

```json
{
  "name": "string",
  "settings": {},
  "settingsPresent": true,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|settings|object|false|none|none|
|settingsPresent|boolean|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_FinanceDTO">FinanceDTO</h2>
<!-- backwards compatibility -->
<a id="schemafinancedto"></a>
<a id="schema_FinanceDTO"></a>
<a id="tocSfinancedto"></a>
<a id="tocsfinancedto"></a>

```json
{
  "ROI": 0,
  "currencyId": 0,
  "margin": 0,
  "payables": [
    {
      "calculationUnitId": 0,
      "currencyId": 0,
      "description": "string",
      "id": 0,
      "ignoreMinimumCharge": true,
      "invoiceId": "string",
      "jobTypeId": 0,
      "languageCombination": {
        "sourceLanguageId": 0,
        "targetLanguageId": 0
      },
      "languageCombinationIdNumber": "string",
      "minimumCharge": 0,
      "rateOrigin": "PRICE_PROFILE",
      "total": 0,
      "type": "SIMPLE"
    }
  ],
  "profit": 0,
  "receivables": [
    {
      "calculationUnitId": 0,
      "currencyId": 0,
      "description": "string",
      "id": 0,
      "ignoreMinimumCharge": true,
      "invoiceId": "string",
      "jobTypeId": 0,
      "languageCombination": {
        "sourceLanguageId": 0,
        "targetLanguageId": 0
      },
      "languageCombinationIdNumber": "string",
      "minimumCharge": 0,
      "rateOrigin": "PRICE_PROFILE",
      "total": 0,
      "type": "SIMPLE"
    }
  ],
  "totalAgreed": 0,
  "totalCost": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ROI|number|false|none|none|
|currencyId|integer(int64)|false|none|none|
|margin|number|false|none|none|
|payables|[[ChargeDTO](#schemachargedto)]|false|none|none|
|profit|number|false|none|none|
|receivables|[[ChargeDTO](#schemachargedto)]|false|none|none|
|totalAgreed|number|false|none|none|
|totalCost|number|false|none|none|

<h2 id="tocS_FormDataBodyPart">FormDataBodyPart</h2>
<!-- backwards compatibility -->
<a id="schemaformdatabodypart"></a>
<a id="schema_FormDataBodyPart"></a>
<a id="tocSformdatabodypart"></a>
<a id="tocsformdatabodypart"></a>

```json
{
  "contentDisposition": {
    "creationDate": "1970-01-01T00:00:00Z",
    "fileName": "string",
    "modificationDate": "1970-01-01T00:00:00Z",
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "readDate": "1970-01-01T00:00:00Z",
    "size": 0,
    "type": "string"
  },
  "entity": {},
  "formDataContentDisposition": {
    "creationDate": "1970-01-01T00:00:00Z",
    "fileName": "string",
    "modificationDate": "1970-01-01T00:00:00Z",
    "name": "string",
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "readDate": "1970-01-01T00:00:00Z",
    "size": 0,
    "type": "string"
  },
  "headers": {
    "empty": true,
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "mediaType": {
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "subtype": "string",
    "type": "string",
    "wildcardSubtype": true,
    "wildcardType": true
  },
  "messageBodyWorkers": {},
  "name": "string",
  "parameterizedHeaders": {
    "empty": true,
    "property1": [
      {
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "value": "string"
      }
    ],
    "property2": [
      {
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "value": "string"
      }
    ]
  },
  "parent": {
    "bodyParts": [
      {}
    ],
    "contentDisposition": {
      "creationDate": "1970-01-01T00:00:00Z",
      "fileName": "string",
      "modificationDate": "1970-01-01T00:00:00Z",
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "readDate": "1970-01-01T00:00:00Z",
      "size": 0,
      "type": "string"
    },
    "entity": {},
    "headers": {
      "empty": true,
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "mediaType": {
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "subtype": "string",
      "type": "string",
      "wildcardSubtype": true,
      "wildcardType": true
    },
    "messageBodyWorkers": {},
    "parameterizedHeaders": {
      "empty": true,
      "property1": [
        {
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "value": "string"
        }
      ],
      "property2": [
        {
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "value": "string"
        }
      ]
    },
    "parent": {},
    "providers": {}
  },
  "providers": {},
  "simple": true,
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentDisposition|[ContentDisposition](#schemacontentdisposition)|false|none|none|
|entity|object|false|none|none|
|formDataContentDisposition|[FormDataContentDisposition](#schemaformdatacontentdisposition)|false|none|none|
|headers|object|false|none|none|
|mediaType|object|false|none|none|
|messageBodyWorkers|[MessageBodyWorkers](#schemamessagebodyworkers)|false|none|none|
|name|string|false|none|none|
|parameterizedHeaders|object|false|none|none|
|parent|[MultiPart](#schemamultipart)|false|none|none|
|providers|object|false|none|none|
|simple|boolean|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_FormDataContentDisposition">FormDataContentDisposition</h2>
<!-- backwards compatibility -->
<a id="schemaformdatacontentdisposition"></a>
<a id="schema_FormDataContentDisposition"></a>
<a id="tocSformdatacontentdisposition"></a>
<a id="tocsformdatacontentdisposition"></a>

```json
{
  "creationDate": "1970-01-01T00:00:00Z",
  "fileName": "string",
  "modificationDate": "1970-01-01T00:00:00Z",
  "name": "string",
  "parameters": {
    "property1": "string",
    "property2": "string"
  },
  "readDate": "1970-01-01T00:00:00Z",
  "size": 0,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationDate|string(date-time)|false|none|none|
|fileName|string|false|none|none|
|modificationDate|string(date-time)|false|none|none|
|name|string|false|none|none|
|parameters|object|false|none|none|
|readDate|string(date-time)|false|none|none|
|size|integer(int64)|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_FormDataMultiPart">FormDataMultiPart</h2>
<!-- backwards compatibility -->
<a id="schemaformdatamultipart"></a>
<a id="schema_FormDataMultiPart"></a>
<a id="tocSformdatamultipart"></a>
<a id="tocsformdatamultipart"></a>

```json
{
  "bodyParts": [
    {
      "contentDisposition": {
        "creationDate": "1970-01-01T00:00:00Z",
        "fileName": "string",
        "modificationDate": "1970-01-01T00:00:00Z",
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "readDate": "1970-01-01T00:00:00Z",
        "size": 0,
        "type": "string"
      },
      "entity": {},
      "headers": {
        "empty": true,
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "mediaType": {
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "subtype": "string",
        "type": "string",
        "wildcardSubtype": true,
        "wildcardType": true
      },
      "messageBodyWorkers": {},
      "parameterizedHeaders": {
        "empty": true,
        "property1": [
          {
            "parameters": {
              "property1": "string",
              "property2": "string"
            },
            "value": "string"
          }
        ],
        "property2": [
          {
            "parameters": {
              "property1": "string",
              "property2": "string"
            },
            "value": "string"
          }
        ]
      },
      "parent": {},
      "providers": {}
    }
  ],
  "contentDisposition": {
    "creationDate": "1970-01-01T00:00:00Z",
    "fileName": "string",
    "modificationDate": "1970-01-01T00:00:00Z",
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "readDate": "1970-01-01T00:00:00Z",
    "size": 0,
    "type": "string"
  },
  "entity": {},
  "fields": {
    "property1": [
      {
        "contentDisposition": {
          "creationDate": "1970-01-01T00:00:00Z",
          "fileName": "string",
          "modificationDate": "1970-01-01T00:00:00Z",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "readDate": "1970-01-01T00:00:00Z",
          "size": 0,
          "type": "string"
        },
        "entity": {},
        "formDataContentDisposition": {
          "creationDate": "1970-01-01T00:00:00Z",
          "fileName": "string",
          "modificationDate": "1970-01-01T00:00:00Z",
          "name": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "readDate": "1970-01-01T00:00:00Z",
          "size": 0,
          "type": "string"
        },
        "headers": {
          "empty": true,
          "property1": [
            "string"
          ],
          "property2": [
            "string"
          ]
        },
        "mediaType": {
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "subtype": "string",
          "type": "string",
          "wildcardSubtype": true,
          "wildcardType": true
        },
        "messageBodyWorkers": {},
        "name": "string",
        "parameterizedHeaders": {
          "empty": true,
          "property1": [
            {
              "parameters": {
                "property1": "string",
                "property2": "string"
              },
              "value": "string"
            }
          ],
          "property2": [
            {
              "parameters": {
                "property1": "string",
                "property2": "string"
              },
              "value": "string"
            }
          ]
        },
        "parent": {
          "bodyParts": [
            {}
          ],
          "contentDisposition": {
            "creationDate": "1970-01-01T00:00:00Z",
            "fileName": "string",
            "modificationDate": "1970-01-01T00:00:00Z",
            "parameters": {
              "property1": "string",
              "property2": "string"
            },
            "readDate": "1970-01-01T00:00:00Z",
            "size": 0,
            "type": "string"
          },
          "entity": {},
          "headers": {
            "empty": true,
            "property1": [
              "string"
            ],
            "property2": [
              "string"
            ]
          },
          "mediaType": {
            "parameters": {
              "property1": "string",
              "property2": "string"
            },
            "subtype": "string",
            "type": "string",
            "wildcardSubtype": true,
            "wildcardType": true
          },
          "messageBodyWorkers": {},
          "parameterizedHeaders": {
            "empty": true,
            "property1": [
              {
                "parameters": {
                  "property1": "string",
                  "property2": "string"
                },
                "value": "string"
              }
            ],
            "property2": [
              {
                "parameters": {
                  "property1": "string",
                  "property2": "string"
                },
                "value": "string"
              }
            ]
          },
          "parent": {},
          "providers": {}
        },
        "providers": {},
        "simple": true,
        "value": "string"
      }
    ],
    "property2": [
      {
        "contentDisposition": {
          "creationDate": "1970-01-01T00:00:00Z",
          "fileName": "string",
          "modificationDate": "1970-01-01T00:00:00Z",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "readDate": "1970-01-01T00:00:00Z",
          "size": 0,
          "type": "string"
        },
        "entity": {},
        "formDataContentDisposition": {
          "creationDate": "1970-01-01T00:00:00Z",
          "fileName": "string",
          "modificationDate": "1970-01-01T00:00:00Z",
          "name": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "readDate": "1970-01-01T00:00:00Z",
          "size": 0,
          "type": "string"
        },
        "headers": {
          "empty": true,
          "property1": [
            "string"
          ],
          "property2": [
            "string"
          ]
        },
        "mediaType": {
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "subtype": "string",
          "type": "string",
          "wildcardSubtype": true,
          "wildcardType": true
        },
        "messageBodyWorkers": {},
        "name": "string",
        "parameterizedHeaders": {
          "empty": true,
          "property1": [
            {
              "parameters": {
                "property1": "string",
                "property2": "string"
              },
              "value": "string"
            }
          ],
          "property2": [
            {
              "parameters": {
                "property1": "string",
                "property2": "string"
              },
              "value": "string"
            }
          ]
        },
        "parent": {
          "bodyParts": [
            {}
          ],
          "contentDisposition": {
            "creationDate": "1970-01-01T00:00:00Z",
            "fileName": "string",
            "modificationDate": "1970-01-01T00:00:00Z",
            "parameters": {
              "property1": "string",
              "property2": "string"
            },
            "readDate": "1970-01-01T00:00:00Z",
            "size": 0,
            "type": "string"
          },
          "entity": {},
          "headers": {
            "empty": true,
            "property1": [
              "string"
            ],
            "property2": [
              "string"
            ]
          },
          "mediaType": {
            "parameters": {
              "property1": "string",
              "property2": "string"
            },
            "subtype": "string",
            "type": "string",
            "wildcardSubtype": true,
            "wildcardType": true
          },
          "messageBodyWorkers": {},
          "parameterizedHeaders": {
            "empty": true,
            "property1": [
              {
                "parameters": {
                  "property1": "string",
                  "property2": "string"
                },
                "value": "string"
              }
            ],
            "property2": [
              {
                "parameters": {
                  "property1": "string",
                  "property2": "string"
                },
                "value": "string"
              }
            ]
          },
          "parent": {},
          "providers": {}
        },
        "providers": {},
        "simple": true,
        "value": "string"
      }
    ]
  },
  "headers": {
    "empty": true,
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "mediaType": {
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "subtype": "string",
    "type": "string",
    "wildcardSubtype": true,
    "wildcardType": true
  },
  "messageBodyWorkers": {},
  "parameterizedHeaders": {
    "empty": true,
    "property1": [
      {
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "value": "string"
      }
    ],
    "property2": [
      {
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "value": "string"
      }
    ]
  },
  "parent": {
    "bodyParts": [
      {}
    ],
    "contentDisposition": {
      "creationDate": "1970-01-01T00:00:00Z",
      "fileName": "string",
      "modificationDate": "1970-01-01T00:00:00Z",
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "readDate": "1970-01-01T00:00:00Z",
      "size": 0,
      "type": "string"
    },
    "entity": {},
    "headers": {
      "empty": true,
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "mediaType": {
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "subtype": "string",
      "type": "string",
      "wildcardSubtype": true,
      "wildcardType": true
    },
    "messageBodyWorkers": {},
    "parameterizedHeaders": {
      "empty": true,
      "property1": [
        {
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "value": "string"
        }
      ],
      "property2": [
        {
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "value": "string"
        }
      ]
    },
    "parent": {},
    "providers": {}
  },
  "providers": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bodyParts|[[BodyPart](#schemabodypart)]|false|none|none|
|contentDisposition|[ContentDisposition](#schemacontentdisposition)|false|none|none|
|entity|object|false|none|none|
|fields|object|false|none|none|
|headers|object|false|none|none|
|mediaType|object|false|none|none|
|messageBodyWorkers|[MessageBodyWorkers](#schemamessagebodyworkers)|false|none|none|
|parameterizedHeaders|object|false|none|none|
|parent|[MultiPart](#schemamultipart)|false|none|none|
|providers|object|false|none|none|

<h2 id="tocS_GetLicenseResult">GetLicenseResult</h2>
<!-- backwards compatibility -->
<a id="schemagetlicenseresult"></a>
<a id="schema_GetLicenseResult"></a>
<a id="tocSgetlicenseresult"></a>
<a id="tocsgetlicenseresult"></a>

```json
{
  "clientId": "string",
  "parameters": {
    "property1": {
      "type": "string",
      "value": "string"
    },
    "property2": {
      "type": "string",
      "value": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|string|false|none|none|
|parameters|object|false|none|none|

<h2 id="tocS_Identifier">Identifier</h2>
<!-- backwards compatibility -->
<a id="schemaidentifier"></a>
<a id="schema_Identifier"></a>
<a id="tocSidentifier"></a>
<a id="tocsidentifier"></a>

```json
{
  "compoundId": "string",
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compoundId|string|false|none|none|
|id|integer(int64)|false|none|none|

<h2 id="tocS_ImportRequestDTO">ImportRequestDTO</h2>
<!-- backwards compatibility -->
<a id="schemaimportrequestdto"></a>
<a id="schema_ImportRequestDTO"></a>
<a id="tocSimportrequestdto"></a>
<a id="tocsimportrequestdto"></a>

```json
{
  "fileToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileToken|string|false|none|none|

<h2 id="tocS_ImportResultDTO">ImportResultDTO</h2>
<!-- backwards compatibility -->
<a id="schemaimportresultdto"></a>
<a id="schema_ImportResultDTO"></a>
<a id="tocSimportresultdto"></a>
<a id="tocsimportresultdto"></a>

```json
{
  "currentSystemVersion": "string",
  "importedReportsNames": [
    "string"
  ],
  "invalidReportsNames": [
    "string"
  ],
  "targetSystemVersion": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentSystemVersion|string|false|none|none|
|importedReportsNames|[string]|false|none|none|
|invalidReportsNames|[string]|false|none|none|
|targetSystemVersion|string|false|none|none|

<h2 id="tocS_IndustriesDTO">IndustriesDTO</h2>
<!-- backwards compatibility -->
<a id="schemaindustriesdto"></a>
<a id="schema_IndustriesDTO"></a>
<a id="tocSindustriesdto"></a>
<a id="tocsindustriesdto"></a>

```json
[
  0
]
```

<h2 id="tocS_IndustryDTO">IndustryDTO</h2>
<!-- backwards compatibility -->
<a id="schemaindustrydto"></a>
<a id="schema_IndustryDTO"></a>
<a id="tocSindustrydto"></a>
<a id="tocsindustrydto"></a>

```json
{
  "active": true,
  "default": true,
  "id": 0,
  "name": "string",
  "preferred": true
}
```

industry related with translation (ie. biotechnology)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|should this value be available on the XTRF selection lists|
|default|boolean|false|none|should this value be set by default in XTRF selection lists|
|id|integer(int64)|false|none|internal identifier|
|name|string|false|none|localised name (formatted in the current user's locale)|
|preferred|boolean|false|none|should this value be available on the top of XTRF selection lists, in the Preferred section|

<h2 id="tocS_InputFilesDTO">InputFilesDTO</h2>
<!-- backwards compatibility -->
<a id="schemainputfilesdto"></a>
<a id="schema_InputFilesDTO"></a>
<a id="tocSinputfilesdto"></a>
<a id="tocsinputfilesdto"></a>

```json
{
  "logFiles": [
    {
      "content": "string",
      "name": "string",
      "token": "string",
      "url": "string"
    }
  ],
  "referenceFiles": [
    {
      "content": "string",
      "name": "string",
      "token": "string",
      "url": "string"
    }
  ],
  "terminology": [
    {
      "content": "string",
      "name": "string",
      "token": "string",
      "url": "string"
    }
  ],
  "tm": [
    {
      "content": "string",
      "name": "string",
      "token": "string",
      "url": "string"
    }
  ],
  "workFiles": [
    {
      "content": "string",
      "name": "string",
      "token": "string",
      "url": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logFiles|[[FileDTO](#schemafiledto)]|false|none|none|
|referenceFiles|[[FileDTO](#schemafiledto)]|false|none|none|
|terminology|[[FileDTO](#schemafiledto)]|false|none|none|
|tm|[[FileDTO](#schemafiledto)]|false|none|none|
|workFiles|[[FileDTO](#schemafiledto)]|false|none|none|

<h2 id="tocS_InstructionsDTO">InstructionsDTO</h2>
<!-- backwards compatibility -->
<a id="schemainstructionsdto"></a>
<a id="schema_InstructionsDTO"></a>
<a id="tocSinstructionsdto"></a>
<a id="tocsinstructionsdto"></a>

```json
{
  "forProvider": "string",
  "fromCustomer": "string",
  "internal": "string",
  "notes": "string",
  "paymentNoteForCustomer": "string",
  "paymentNoteForVendor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|forProvider|string|false|none|none|
|fromCustomer|string|false|none|none|
|internal|string|false|none|none|
|notes|string|false|none|none|
|paymentNoteForCustomer|string|false|none|none|
|paymentNoteForVendor|string|false|none|none|

<h2 id="tocS_InvitationStatisticsDTO">InvitationStatisticsDTO</h2>
<!-- backwards compatibility -->
<a id="schemainvitationstatisticsdto"></a>
<a id="schema_InvitationStatisticsDTO"></a>
<a id="tocSinvitationstatisticsdto"></a>
<a id="tocsinvitationstatisticsdto"></a>

```json
{
  "alreadyRegisteredPersonsCount": 0,
  "invitedPersonsCount": 0,
  "providersWithAlreadyRegisteredPersonCount": 0,
  "providersWithInvitedPersonCount": 0,
  "providersWithoutPersonCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alreadyRegisteredPersonsCount|integer(int32)|false|none|none|
|invitedPersonsCount|integer(int32)|false|none|none|
|providersWithAlreadyRegisteredPersonCount|integer(int32)|false|none|none|
|providersWithInvitedPersonCount|integer(int32)|false|none|none|
|providersWithoutPersonCount|integer(int32)|false|none|none|

<h2 id="tocS_JobCommunicationDto">JobCommunicationDto</h2>
<!-- backwards compatibility -->
<a id="schemajobcommunicationdto"></a>
<a id="schema_JobCommunicationDto"></a>
<a id="tocSjobcommunicationdto"></a>
<a id="tocsjobcommunicationdto"></a>

```json
{
  "instructionsForAllJobs": "string",
  "instructionsForJob": "string",
  "noteFromVendor": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instructionsForAllJobs|string|false|none|none|
|instructionsForJob|string|false|none|none|
|noteFromVendor|string|false|none|none|

<h2 id="tocS_JobDTO">JobDTO</h2>
<!-- backwards compatibility -->
<a id="schemajobdto"></a>
<a id="schema_JobDTO"></a>
<a id="tocSjobdto"></a>
<a id="tocsjobdto"></a>

```json
{
  "files": {
    "inputFiles": [
      {
        "content": "string",
        "name": "string",
        "token": "string",
        "url": "string"
      }
    ],
    "outputFiles": [
      {
        "content": "string",
        "name": "string",
        "token": "string",
        "url": "string"
      }
    ]
  },
  "id": 0,
  "idNumber": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|[JobFilesDTO](#schemajobfilesdto)|false|none|none|
|id|integer(int64)|false|none|none|
|idNumber|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_JobDatesDto">JobDatesDto</h2>
<!-- backwards compatibility -->
<a id="schemajobdatesdto"></a>
<a id="schema_JobDatesDto"></a>
<a id="tocSjobdatesdto"></a>
<a id="tocsjobdatesdto"></a>

```json
{
  "actualEndDate": 0,
  "actualStartDate": 0,
  "deadline": 0,
  "startDate": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actualEndDate|integer(int64)|false|none|none|
|actualStartDate|integer(int64)|false|none|none|
|deadline|integer(int64)|false|none|none|
|startDate|integer(int64)|false|none|none|

<h2 id="tocS_JobDocumentsDto">JobDocumentsDto</h2>
<!-- backwards compatibility -->
<a id="schemajobdocumentsdto"></a>
<a id="schema_JobDocumentsDto"></a>
<a id="tocSjobdocumentsdto"></a>
<a id="tocsjobdocumentsdto"></a>

```json
{
  "purchaseOrderStatus": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|purchaseOrderStatus|string|false|none|none|

<h2 id="tocS_JobDto">JobDto</h2>
<!-- backwards compatibility -->
<a id="schemajobdto-1"></a>
<a id="schema_JobDto"></a>
<a id="tocSjobdto-1"></a>
<a id="tocsjobdto-1"></a>

```json
{
  "communication": {
    "instructionsForAllJobs": "string",
    "instructionsForJob": "string",
    "noteFromVendor": "string"
  },
  "dates": {
    "actualEndDate": 0,
    "actualStartDate": 0,
    "deadline": 0,
    "startDate": 0
  },
  "documents": {
    "purchaseOrderStatus": "string"
  },
  "files": {
    "deliveredInJobFiles": [
      "string"
    ],
    "sharedReferenceFiles": [
      "string"
    ],
    "sharedWorkFiles": [
      "string"
    ]
  },
  "id": "string",
  "idNumber": "string",
  "languages": [
    {
      "sourceLanguageId": 0,
      "specializationId": 0,
      "targetLanguageId": 0
    }
  ],
  "name": "string",
  "status": "string",
  "stepNumber": 0,
  "stepType": {
    "id": "string",
    "jobTypeId": 0,
    "name": "string",
    "semantics": {
      "canVerifyFiles": true,
      "isScripted": true
    }
  },
  "vendorId": 0,
  "vendorPriceProfileId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|communication|[JobCommunicationDto](#schemajobcommunicationdto)|false|none|none|
|dates|[JobDatesDto](#schemajobdatesdto)|false|none|none|
|documents|[JobDocumentsDto](#schemajobdocumentsdto)|false|none|none|
|files|[JobFilesDto](#schemajobfilesdto-1)|false|none|none|
|id|string|false|none|none|
|idNumber|string|false|none|none|
|languages|[[JobLanguageCombinationDto](#schemajoblanguagecombinationdto)]|false|none|none|
|name|string|false|none|none|
|status|string|false|none|none|
|stepNumber|integer(int32)|false|none|none|
|stepType|[StepTypeDto](#schemasteptypedto)|false|none|none|
|vendorId|integer(int64)|false|none|none|
|vendorPriceProfileId|integer(int64)|false|none|none|

<h2 id="tocS_JobFilesDTO">JobFilesDTO</h2>
<!-- backwards compatibility -->
<a id="schemajobfilesdto"></a>
<a id="schema_JobFilesDTO"></a>
<a id="tocSjobfilesdto"></a>
<a id="tocsjobfilesdto"></a>

```json
{
  "inputFiles": [
    {
      "content": "string",
      "name": "string",
      "token": "string",
      "url": "string"
    }
  ],
  "outputFiles": [
    {
      "content": "string",
      "name": "string",
      "token": "string",
      "url": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputFiles|[[FileDTO](#schemafiledto)]|false|none|none|
|outputFiles|[[FileDTO](#schemafiledto)]|false|none|none|

<h2 id="tocS_JobFilesDto">JobFilesDto</h2>
<!-- backwards compatibility -->
<a id="schemajobfilesdto-1"></a>
<a id="schema_JobFilesDto"></a>
<a id="tocSjobfilesdto-1"></a>
<a id="tocsjobfilesdto-1"></a>

```json
{
  "deliveredInJobFiles": [
    "string"
  ],
  "sharedReferenceFiles": [
    "string"
  ],
  "sharedWorkFiles": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deliveredInJobFiles|[string]|false|none|none|
|sharedReferenceFiles|[string]|false|none|none|
|sharedWorkFiles|[string]|false|none|none|

<h2 id="tocS_JobLanguageCombinationDto">JobLanguageCombinationDto</h2>
<!-- backwards compatibility -->
<a id="schemajoblanguagecombinationdto"></a>
<a id="schema_JobLanguageCombinationDto"></a>
<a id="tocSjoblanguagecombinationdto"></a>
<a id="tocsjoblanguagecombinationdto"></a>

```json
{
  "sourceLanguageId": 0,
  "specializationId": 0,
  "targetLanguageId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceLanguageId|integer(int64)|false|none|none|
|specializationId|integer(int64)|false|none|none|
|targetLanguageId|integer(int64)|false|none|none|

<h2 id="tocS_JobStatusDTO">JobStatusDTO</h2>
<!-- backwards compatibility -->
<a id="schemajobstatusdto"></a>
<a id="schema_JobStatusDTO"></a>
<a id="tocSjobstatusdto"></a>
<a id="tocsjobstatusdto"></a>

```json
{
  "externalId": "string",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|externalId|string|false|none|none|
|status|string|false|none|none|

<h2 id="tocS_JobTypeDTO">JobTypeDTO</h2>
<!-- backwards compatibility -->
<a id="schemajobtypedto"></a>
<a id="schema_JobTypeDTO"></a>
<a id="tocSjobtypedto"></a>
<a id="tocsjobtypedto"></a>

```json
{
  "active": true,
  "calculationUnitIds": [
    0
  ],
  "default": true,
  "filesNeeded": true,
  "id": 0,
  "name": "string",
  "preferred": true,
  "providedByClient": true,
  "relationToLanguage": "LANGUAGE_COMBINATION_RELATED",
  "vendorProductivity": 0,
  "vendorProductivityCalculationUnitId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|should this value be available on the XTRF selection lists|
|calculationUnitIds|[integer(int64)]|false|none|none|
|default|boolean|false|none|should this value be set by default in XTRF selection lists|
|filesNeeded|boolean|false|none|none|
|id|integer(int64)|false|none|internal identifier|
|name|string|false|none|localised name (formatted in the current user's locale)|
|preferred|boolean|false|none|should this value be available on the top of XTRF selection lists, in the Preferred section|
|providedByClient|boolean|false|none|none|
|relationToLanguage|string|false|none|none|
|vendorProductivity|number|false|none|none|
|vendorProductivityCalculationUnitId|integer(int64)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|relationToLanguage|LANGUAGE_COMBINATION_RELATED|
|relationToLanguage|SOURCE_LANGUAGE_RELATED_ONLY|
|relationToLanguage|TARGET_LANGUAGE_RELATED_ONLY|
|relationToLanguage|LANGUAGE_INDEPENDENT|

<h2 id="tocS_JsonNode">JsonNode</h2>
<!-- backwards compatibility -->
<a id="schemajsonnode"></a>
<a id="schema_JsonNode"></a>
<a id="tocSjsonnode"></a>
<a id="tocsjsonnode"></a>

```json
{}
```

<h2 id="tocS_LanguageCombinationDTO">LanguageCombinationDTO</h2>
<!-- backwards compatibility -->
<a id="schemalanguagecombinationdto"></a>
<a id="schema_LanguageCombinationDTO"></a>
<a id="tocSlanguagecombinationdto"></a>
<a id="tocslanguagecombinationdto"></a>

```json
{
  "sourceLanguageId": 0,
  "specializationId": 0,
  "targetLanguageId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceLanguageId|integer(int64)|false|none|none|
|specializationId|integer(int64)|false|none|none|
|targetLanguageId|integer(int64)|false|none|none|

<h2 id="tocS_LanguageCombinationDto">LanguageCombinationDto</h2>
<!-- backwards compatibility -->
<a id="schemalanguagecombinationdto-1"></a>
<a id="schema_LanguageCombinationDto"></a>
<a id="tocSlanguagecombinationdto-1"></a>
<a id="tocslanguagecombinationdto-1"></a>

```json
{
  "sourceLanguageId": 0,
  "targetLanguageId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceLanguageId|integer(int64)|false|none|none|
|targetLanguageId|integer(int64)|false|none|none|

<h2 id="tocS_LanguageDTO">LanguageDTO</h2>
<!-- backwards compatibility -->
<a id="schemalanguagedto"></a>
<a id="schema_LanguageDTO"></a>
<a id="tocSlanguagedto"></a>
<a id="tocslanguagedto"></a>

```json
{
  "active": true,
  "default": true,
  "id": 0,
  "iso6391": "string",
  "iso6392": "string",
  "name": "string",
  "preferred": true,
  "symbol": "string"
}
```

language (ie. Polish)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|should this value be available on the XTRF selection lists|
|default|boolean|false|none|should this value be set by default in XTRF selection lists|
|id|integer(int64)|false|none|internal identifier|
|iso6391|string|false|none|<a href="http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes">ISO 639-1 code</a>|
|iso6392|string|false|none|<a href="http://en.wikipedia.org/wiki/List_of_ISO_639-2_codes">ISO 639-2 code</a>|
|name|string|false|none|localised name (formatted in the current user's locale)|
|preferred|boolean|false|none|should this value be available on the top of XTRF selection lists, in the Preferred section|
|symbol|string|false|none|specific symbol or abbreviation|

<h2 id="tocS_LanguageRelationDto">LanguageRelationDto</h2>
<!-- backwards compatibility -->
<a id="schemalanguagerelationdto"></a>
<a id="schema_LanguageRelationDto"></a>
<a id="tocSlanguagerelationdto"></a>
<a id="tocslanguagerelationdto"></a>

```json
{
  "languageCombinations": [
    {
      "sourceLanguageId": 0,
      "targetLanguageId": 0
    }
  ],
  "languages": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languageCombinations|[[LanguageCombinationDto](#schemalanguagecombinationdto-1)]|false|none|none|
|languages|[integer(int64)]|false|none|none|

<h2 id="tocS_LanguageSpecializationDTO">LanguageSpecializationDTO</h2>
<!-- backwards compatibility -->
<a id="schemalanguagespecializationdto"></a>
<a id="schema_LanguageSpecializationDTO"></a>
<a id="tocSlanguagespecializationdto"></a>
<a id="tocslanguagespecializationdto"></a>

```json
{
  "active": true,
  "default": true,
  "id": 0,
  "name": "string",
  "preferred": true
}
```

language specialization (ie. railways)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|should this value be available on the XTRF selection lists|
|default|boolean|false|none|should this value be set by default in XTRF selection lists|
|id|integer(int64)|false|none|internal identifier|
|name|string|false|none|localised name (formatted in the current user's locale)|
|preferred|boolean|false|none|should this value be available on the top of XTRF selection lists, in the Preferred section|

<h2 id="tocS_LastModificationDTO">LastModificationDTO</h2>
<!-- backwards compatibility -->
<a id="schemalastmodificationdto"></a>
<a id="schema_LastModificationDTO"></a>
<a id="tocSlastmodificationdto"></a>
<a id="tocslastmodificationdto"></a>

```json
{
  "date": "string",
  "modifier": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string|false|none|none|
|modifier|string|false|none|none|

<h2 id="tocS_LeadSourceDTO">LeadSourceDTO</h2>
<!-- backwards compatibility -->
<a id="schemaleadsourcedto"></a>
<a id="schema_LeadSourceDTO"></a>
<a id="tocSleadsourcedto"></a>
<a id="tocsleadsourcedto"></a>

```json
{
  "active": true,
  "availableForCustomer": true,
  "availableForProvider": true,
  "default": true,
  "id": 0,
  "name": "string",
  "preferred": true
}
```

origin of a customer (ie. recomendation from another customer)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|should this value be available on the XTRF selection lists|
|availableForCustomer|boolean|false|none|should be available for customer|
|availableForProvider|boolean|false|none|should be available for provider|
|default|boolean|false|none|should this value be set by default in XTRF selection lists|
|id|integer(int64)|false|none|internal identifier|
|name|string|false|none|localised name (formatted in the current user's locale)|
|preferred|boolean|false|none|should this value be available on the top of XTRF selection lists, in the Preferred section|

<h2 id="tocS_LocalSettingsDTO">LocalSettingsDTO</h2>
<!-- backwards compatibility -->
<a id="schemalocalsettingsdto"></a>
<a id="schema_LocalSettingsDTO"></a>
<a id="tocSlocalsettingsdto"></a>
<a id="tocslocalsettingsdto"></a>

```json
{
  "maxLinesInRow": 0,
  "maxRows": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxLinesInRow|integer(int32)|false|none|none|
|maxRows|integer(int32)|false|none|none|

<h2 id="tocS_LongDTO">LongDTO</h2>
<!-- backwards compatibility -->
<a id="schemalongdto"></a>
<a id="schema_LongDTO"></a>
<a id="tocSlongdto"></a>
<a id="tocslongdto"></a>

```json
{
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|integer(int64)|false|none|none|

<h2 id="tocS_MacroRequestDTO">MacroRequestDTO</h2>
<!-- backwards compatibility -->
<a id="schemamacrorequestdto"></a>
<a id="schema_MacroRequestDTO"></a>
<a id="tocSmacrorequestdto"></a>
<a id="tocsmacrorequestdto"></a>

```json
{
  "async": true,
  "ids": [
    0
  ],
  "params": {
    "property1": {},
    "property2": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|async|boolean|false|none|indicates whether the macro should be executed asynchronously or synchronously (default: false)|
|ids|[integer(int64)]|false|none|list of internal identifiers of elements to be processed by the macro, can be empty for certain macros|
|params|object|false|none|map of custom key-value pairs that can optionally parametrize the macro execution|

<h2 id="tocS_ManyValuesPerTypeDTO">ManyValuesPerTypeDTO</h2>
<!-- backwards compatibility -->
<a id="schemamanyvaluespertypedto"></a>
<a id="schema_ManyValuesPerTypeDTO"></a>
<a id="tocSmanyvaluespertypedto"></a>
<a id="tocsmanyvaluespertypedto"></a>

```json
{
  "calculationUnit": [
    {
      "active": true,
      "canBeUsedInCatAnalysis": true,
      "catQuantityConversionExpression": "string",
      "default": true,
      "exchangeRatio": 0,
      "fileStatsConversionExpression": "string",
      "id": 0,
      "jobTypeIds": [
        0
      ],
      "name": "string",
      "preferred": true,
      "symbol": "string",
      "timeToQuantityConversionExpression": "string",
      "type": "TIME"
    }
  ],
  "category": [
    {
      "active": true,
      "default": true,
      "id": 0,
      "name": "string",
      "preferred": true,
      "supportedClasses": [
        "PROJECT"
      ]
    }
  ],
  "country": [
    {
      "active": true,
      "default": true,
      "id": 0,
      "name": "string",
      "preferred": true,
      "symbol": "string"
    }
  ],
  "currency": [
    {
      "active": true,
      "default": true,
      "id": 0,
      "isoCode": "string",
      "name": "string",
      "preferred": true,
      "symbol": "string"
    }
  ],
  "industry": [
    {
      "active": true,
      "default": true,
      "id": 0,
      "name": "string",
      "preferred": true
    }
  ],
  "jobType": [
    {
      "active": true,
      "calculationUnitIds": [
        0
      ],
      "default": true,
      "filesNeeded": true,
      "id": 0,
      "name": "string",
      "preferred": true,
      "providedByClient": true,
      "relationToLanguage": "LANGUAGE_COMBINATION_RELATED",
      "vendorProductivity": 0,
      "vendorProductivityCalculationUnitId": 0
    }
  ],
  "language": [
    {
      "active": true,
      "default": true,
      "id": 0,
      "iso6391": "string",
      "iso6392": "string",
      "name": "string",
      "preferred": true,
      "symbol": "string"
    }
  ],
  "leadSource": [
    {
      "active": true,
      "availableForCustomer": true,
      "availableForProvider": true,
      "default": true,
      "id": 0,
      "name": "string",
      "preferred": true
    }
  ],
  "personDepartment": [
    {
      "active": true,
      "default": true,
      "id": 0,
      "name": "string",
      "preferred": true
    }
  ],
  "personPosition": [
    {
      "active": true,
      "default": true,
      "id": 0,
      "name": "string",
      "preferred": true
    }
  ],
  "province": [
    {
      "active": true,
      "countryId": 0,
      "default": true,
      "id": 0,
      "name": "string",
      "preferred": true
    }
  ],
  "specialization": [
    {
      "active": true,
      "default": true,
      "id": 0,
      "name": "string",
      "preferred": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calculationUnit|[[CalculationUnitDTO](#schemacalculationunitdto)]|false|none|none|
|category|[[CategoryDTO](#schemacategorydto)]|false|none|none|
|country|[[CountryDTO](#schemacountrydto)]|false|none|none|
|currency|[[CurrencyDTO](#schemacurrencydto)]|false|none|none|
|industry|[[IndustryDTO](#schemaindustrydto)]|false|none|none|
|jobType|[[JobTypeDTO](#schemajobtypedto)]|false|none|none|
|language|[[LanguageDTO](#schemalanguagedto)]|false|none|none|
|leadSource|[[LeadSourceDTO](#schemaleadsourcedto)]|false|none|none|
|personDepartment|[[PersonDepartmentDTO](#schemapersondepartmentdto)]|false|none|none|
|personPosition|[[PersonPositionDTO](#schemapersonpositiondto)]|false|none|none|
|province|[[ProvinceDTO](#schemaprovincedto)]|false|none|none|
|specialization|[[LanguageSpecializationDTO](#schemalanguagespecializationdto)]|false|none|none|

<h2 id="tocS_MessageBodyWorkers">MessageBodyWorkers</h2>
<!-- backwards compatibility -->
<a id="schemamessagebodyworkers"></a>
<a id="schema_MessageBodyWorkers"></a>
<a id="tocSmessagebodyworkers"></a>
<a id="tocsmessagebodyworkers"></a>

```json
{}
```

<h2 id="tocS_MultiPart">MultiPart</h2>
<!-- backwards compatibility -->
<a id="schemamultipart"></a>
<a id="schema_MultiPart"></a>
<a id="tocSmultipart"></a>
<a id="tocsmultipart"></a>

```json
{
  "bodyParts": [
    {
      "contentDisposition": {
        "creationDate": "1970-01-01T00:00:00Z",
        "fileName": "string",
        "modificationDate": "1970-01-01T00:00:00Z",
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "readDate": "1970-01-01T00:00:00Z",
        "size": 0,
        "type": "string"
      },
      "entity": {},
      "headers": {
        "empty": true,
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "mediaType": {
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "subtype": "string",
        "type": "string",
        "wildcardSubtype": true,
        "wildcardType": true
      },
      "messageBodyWorkers": {},
      "parameterizedHeaders": {
        "empty": true,
        "property1": [
          {
            "parameters": {
              "property1": "string",
              "property2": "string"
            },
            "value": "string"
          }
        ],
        "property2": [
          {
            "parameters": {
              "property1": "string",
              "property2": "string"
            },
            "value": "string"
          }
        ]
      },
      "parent": {},
      "providers": {}
    }
  ],
  "contentDisposition": {
    "creationDate": "1970-01-01T00:00:00Z",
    "fileName": "string",
    "modificationDate": "1970-01-01T00:00:00Z",
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "readDate": "1970-01-01T00:00:00Z",
    "size": 0,
    "type": "string"
  },
  "entity": {},
  "headers": {
    "empty": true,
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "mediaType": {
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "subtype": "string",
    "type": "string",
    "wildcardSubtype": true,
    "wildcardType": true
  },
  "messageBodyWorkers": {},
  "parameterizedHeaders": {
    "empty": true,
    "property1": [
      {
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "value": "string"
      }
    ],
    "property2": [
      {
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "value": "string"
      }
    ]
  },
  "parent": {
    "bodyParts": [
      {}
    ],
    "contentDisposition": {
      "creationDate": "1970-01-01T00:00:00Z",
      "fileName": "string",
      "modificationDate": "1970-01-01T00:00:00Z",
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "readDate": "1970-01-01T00:00:00Z",
      "size": 0,
      "type": "string"
    },
    "entity": {},
    "headers": {
      "empty": true,
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "mediaType": {
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "subtype": "string",
      "type": "string",
      "wildcardSubtype": true,
      "wildcardType": true
    },
    "messageBodyWorkers": {},
    "parameterizedHeaders": {
      "empty": true,
      "property1": [
        {
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "value": "string"
        }
      ],
      "property2": [
        {
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "value": "string"
        }
      ]
    },
    "parent": {},
    "providers": {}
  },
  "providers": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bodyParts|[[BodyPart](#schemabodypart)]|false|none|none|
|contentDisposition|[ContentDisposition](#schemacontentdisposition)|false|none|none|
|entity|object|false|none|none|
|headers|object|false|none|none|
|mediaType|object|false|none|none|
|messageBodyWorkers|[MessageBodyWorkers](#schemamessagebodyworkers)|false|none|none|
|parameterizedHeaders|object|false|none|none|
|parent|[MultiPart](#schemamultipart)|false|none|none|
|providers|object|false|none|none|

<h2 id="tocS_OrderDTO">OrderDTO</h2>
<!-- backwards compatibility -->
<a id="schemaorderdto"></a>
<a id="schema_OrderDTO"></a>
<a id="tocSorderdto"></a>
<a id="tocsorderdto"></a>

```json
{
  "column": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|column|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_Parameter">Parameter</h2>
<!-- backwards compatibility -->
<a id="schemaparameter"></a>
<a id="schema_Parameter"></a>
<a id="tocSparameter"></a>
<a id="tocsparameter"></a>

```json
{
  "type": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_ParameterizedHeader">ParameterizedHeader</h2>
<!-- backwards compatibility -->
<a id="schemaparameterizedheader"></a>
<a id="schema_ParameterizedHeader"></a>
<a id="tocSparameterizedheader"></a>
<a id="tocsparameterizedheader"></a>

```json
{
  "parameters": {
    "property1": "string",
    "property2": "string"
  },
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parameters|object|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_PayableCreateDTO">PayableCreateDTO</h2>
<!-- backwards compatibility -->
<a id="schemapayablecreatedto"></a>
<a id="schema_PayableCreateDTO"></a>
<a id="tocSpayablecreatedto"></a>
<a id="tocspayablecreatedto"></a>

```json
{
  "calculationUnitId": 0,
  "catLogFile": {
    "content": "string",
    "name": "string",
    "token": "string",
    "url": "string"
  },
  "currencyId": 0,
  "description": "string",
  "id": 0,
  "ignoreMinimumCharge": true,
  "invoiceId": "string",
  "jobId": {},
  "jobTypeId": 0,
  "languageCombination": {
    "sourceLanguageId": 0,
    "targetLanguageId": 0
  },
  "languageCombinationIdNumber": "string",
  "minimumCharge": 0,
  "quantity": 0,
  "rate": 0,
  "rateOrigin": "PRICE_PROFILE",
  "total": 0,
  "type": "SIMPLE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calculationUnitId|integer(int64)|false|none|none|
|catLogFile|[FileDTO](#schemafiledto)|false|none|none|
|currencyId|integer(int64)|false|none|none|
|description|string|false|none|none|
|id|integer(int64)|false|none|none|
|ignoreMinimumCharge|boolean|false|none|none|
|invoiceId|string|false|none|none|
|jobId|object|false|none|none|
|jobTypeId|integer(int64)|false|none|none|
|languageCombination|[ChargeLanguageCombinationDTO](#schemachargelanguagecombinationdto)|false|none|none|
|languageCombinationIdNumber|string|false|none|none|
|minimumCharge|number|false|none|none|
|quantity|number|false|none|none|
|rate|number|false|none|none|
|rateOrigin|string|false|none|none|
|total|number|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|rateOrigin|PRICE_PROFILE|
|rateOrigin|PRICE_LIST|
|rateOrigin|FILLED_MANUALLY|
|rateOrigin|AUTOCALCULATED|
|type|SIMPLE|
|type|CAT|

<h2 id="tocS_PayableDTO">PayableDTO</h2>
<!-- backwards compatibility -->
<a id="schemapayabledto"></a>
<a id="schema_PayableDTO"></a>
<a id="tocSpayabledto"></a>
<a id="tocspayabledto"></a>

```json
{
  "calculationUnitId": 0,
  "currencyId": 0,
  "description": "string",
  "id": 0,
  "ignoreMinimumCharge": true,
  "invoiceId": "string",
  "jobId": {},
  "jobTypeId": 0,
  "languageCombination": {
    "sourceLanguageId": 0,
    "targetLanguageId": 0
  },
  "languageCombinationIdNumber": "string",
  "minimumCharge": 0,
  "quantity": 0,
  "rate": 0,
  "rateOrigin": "PRICE_PROFILE",
  "total": 0,
  "type": "SIMPLE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calculationUnitId|integer(int64)|false|none|none|
|currencyId|integer(int64)|false|none|none|
|description|string|false|none|none|
|id|integer(int64)|false|none|none|
|ignoreMinimumCharge|boolean|false|none|none|
|invoiceId|string|false|none|none|
|jobId|object|false|none|none|
|jobTypeId|integer(int64)|false|none|none|
|languageCombination|[ChargeLanguageCombinationDTO](#schemachargelanguagecombinationdto)|false|none|none|
|languageCombinationIdNumber|string|false|none|none|
|minimumCharge|number|false|none|none|
|quantity|number|false|none|none|
|rate|number|false|none|none|
|rateOrigin|string|false|none|none|
|total|number|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|rateOrigin|PRICE_PROFILE|
|rateOrigin|PRICE_LIST|
|rateOrigin|FILLED_MANUALLY|
|rateOrigin|AUTOCALCULATED|
|type|SIMPLE|
|type|CAT|

<h2 id="tocS_PaymentDTO">PaymentDTO</h2>
<!-- backwards compatibility -->
<a id="schemapaymentdto"></a>
<a id="schema_PaymentDTO"></a>
<a id="tocSpaymentdto"></a>
<a id="tocspaymentdto"></a>

```json
{
  "amount": 0,
  "notes": "string",
  "paymentDate": {
    "value": 0
  },
  "paymentMethodId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|false|none|none|
|notes|string|false|none|none|
|paymentDate|[TimeDTO](#schematimedto)|false|none|none|
|paymentMethodId|integer(int64)|false|none|none|

<h2 id="tocS_PaymentTermsDTO">PaymentTermsDTO</h2>
<!-- backwards compatibility -->
<a id="schemapaymenttermsdto"></a>
<a id="schema_PaymentTermsDTO"></a>
<a id="tocSpaymenttermsdto"></a>
<a id="tocspaymenttermsdto"></a>

```json
{
  "description": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_PeopleDTO">PeopleDTO</h2>
<!-- backwards compatibility -->
<a id="schemapeopledto"></a>
<a id="schema_PeopleDTO"></a>
<a id="tocSpeopledto"></a>
<a id="tocspeopledto"></a>

```json
{
  "projectManagerId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectManagerId|integer(int64)|false|none|none|

<h2 id="tocS_PermissionsDTO">PermissionsDTO</h2>
<!-- backwards compatibility -->
<a id="schemapermissionsdto"></a>
<a id="schema_PermissionsDTO"></a>
<a id="tocSpermissionsdto"></a>
<a id="tocspermissionsdto"></a>

```json
{
  "sharedGroups": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sharedGroups|[integer(int64)]|false|none|none|

<h2 id="tocS_PersonContactDTO">PersonContactDTO</h2>
<!-- backwards compatibility -->
<a id="schemapersoncontactdto"></a>
<a id="schema_PersonContactDTO"></a>
<a id="tocSpersoncontactdto"></a>
<a id="tocspersoncontactdto"></a>

```json
{
  "emails": {
    "additional": [
      "string"
    ],
    "primary": "string"
  },
  "fax": "string",
  "phones": [
    "string"
  ],
  "sms": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emails|[PersonContactEmailsDTO](#schemapersoncontactemailsdto)|false|none|emails|
|fax|string|false|none|fax number|
|phones|[string]|false|none|phones' numbers|
|sms|string|false|none|mobile phone for which SMS notifications will be sent (if configured)|

<h2 id="tocS_PersonContactEmailsDTO">PersonContactEmailsDTO</h2>
<!-- backwards compatibility -->
<a id="schemapersoncontactemailsdto"></a>
<a id="schema_PersonContactEmailsDTO"></a>
<a id="tocSpersoncontactemailsdto"></a>
<a id="tocspersoncontactemailsdto"></a>

```json
{
  "additional": [
    "string"
  ],
  "primary": "string"
}
```

emails

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additional|[string]|false|none|additional e-mails addresses|
|primary|string|true|none|primary e-mail|

<h2 id="tocS_PersonDepartmentDTO">PersonDepartmentDTO</h2>
<!-- backwards compatibility -->
<a id="schemapersondepartmentdto"></a>
<a id="schema_PersonDepartmentDTO"></a>
<a id="tocSpersondepartmentdto"></a>
<a id="tocspersondepartmentdto"></a>

```json
{
  "active": true,
  "default": true,
  "id": 0,
  "name": "string",
  "preferred": true
}
```

person's department (ie. human resources)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|should this value be available on the XTRF selection lists|
|default|boolean|false|none|should this value be set by default in XTRF selection lists|
|id|integer(int64)|false|none|internal identifier|
|name|string|false|none|localised name (formatted in the current user's locale)|
|preferred|boolean|false|none|should this value be available on the top of XTRF selection lists, in the Preferred section|

<h2 id="tocS_PersonPositionDTO">PersonPositionDTO</h2>
<!-- backwards compatibility -->
<a id="schemapersonpositiondto"></a>
<a id="schema_PersonPositionDTO"></a>
<a id="tocSpersonpositiondto"></a>
<a id="tocspersonpositiondto"></a>

```json
{
  "active": true,
  "default": true,
  "id": 0,
  "name": "string",
  "preferred": true
}
```

person's position (ie. proofreader)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|should this value be available on the XTRF selection lists|
|default|boolean|false|none|should this value be set by default in XTRF selection lists|
|id|integer(int64)|false|none|internal identifier|
|name|string|false|none|localised name (formatted in the current user's locale)|
|preferred|boolean|false|none|should this value be available on the top of XTRF selection lists, in the Preferred section|

<h2 id="tocS_PreferredRequestDTO">PreferredRequestDTO</h2>
<!-- backwards compatibility -->
<a id="schemapreferredrequestdto"></a>
<a id="schema_PreferredRequestDTO"></a>
<a id="tocSpreferredrequestdto"></a>
<a id="tocspreferredrequestdto"></a>

```json
{
  "preferred": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|preferred|boolean|false|none|none|

<h2 id="tocS_ProjectCreateDTO">ProjectCreateDTO</h2>
<!-- backwards compatibility -->
<a id="schemaprojectcreatedto"></a>
<a id="schema_ProjectCreateDTO"></a>
<a id="tocSprojectcreatedto"></a>
<a id="tocsprojectcreatedto"></a>

```json
{
  "clientId": 0,
  "externalId": "string",
  "name": "string",
  "serviceId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|integer(int64)|false|none|none|
|externalId|string|false|none|none|
|name|string|false|none|none|
|serviceId|integer(int64)|false|none|none|

<h2 id="tocS_ProjectDTOv1">ProjectDTOv1</h2>
<!-- backwards compatibility -->
<a id="schemaprojectdtov1"></a>
<a id="schema_ProjectDTOv1"></a>
<a id="tocSprojectdtov1"></a>
<a id="tocsprojectdtov1"></a>

```json
{
  "categoriesIds": [
    0
  ],
  "contactPersonId": 0,
  "contacts": {
    "additionalIds": [
      0
    ],
    "primaryId": 0,
    "sendBackToId": 0
  },
  "customFields": [
    {
      "key": "string",
      "name": "string",
      "type": "TEXT",
      "value": {}
    }
  ],
  "customerId": 0,
  "dates": {
    "actualDeliveryDate": {
      "value": 0
    },
    "actualStartDate": {
      "value": 0
    },
    "deadline": {
      "value": 0
    },
    "startDate": {
      "value": 0
    }
  },
  "finance": {
    "ROI": 0,
    "currencyId": 0,
    "margin": 0,
    "payables": [
      {
        "calculationUnitId": 0,
        "currencyId": 0,
        "description": "string",
        "id": 0,
        "ignoreMinimumCharge": true,
        "invoiceId": "string",
        "jobTypeId": 0,
        "languageCombination": {
          "sourceLanguageId": 0,
          "targetLanguageId": 0
        },
        "languageCombinationIdNumber": "string",
        "minimumCharge": 0,
        "rateOrigin": "PRICE_PROFILE",
        "total": 0,
        "type": "SIMPLE"
      }
    ],
    "profit": 0,
    "receivables": [
      {
        "calculationUnitId": 0,
        "currencyId": 0,
        "description": "string",
        "id": 0,
        "ignoreMinimumCharge": true,
        "invoiceId": "string",
        "jobTypeId": 0,
        "languageCombination": {
          "sourceLanguageId": 0,
          "targetLanguageId": 0
        },
        "languageCombinationIdNumber": "string",
        "minimumCharge": 0,
        "rateOrigin": "PRICE_PROFILE",
        "total": 0,
        "type": "SIMPLE"
      }
    ],
    "totalAgreed": 0,
    "totalCost": 0
  },
  "id": 0,
  "idNumber": "string",
  "instructions": {
    "forProvider": "string",
    "fromCustomer": "string",
    "internal": "string",
    "notes": "string",
    "paymentNoteForCustomer": "string",
    "paymentNoteForVendor": "string"
  },
  "isClassicProject": true,
  "name": "string",
  "projectId": "string",
  "projectManagerId": 0,
  "specializationId": 0,
  "status": "REQUESTED_PROJECT",
  "tasks": [
    {
      "clientTaskPONumber": "string",
      "customFields": [
        {
          "key": "string",
          "name": "string",
          "type": "TEXT",
          "value": {}
        }
      ],
      "dates": {
        "actualDeliveryDate": {
          "value": 0
        },
        "actualStartDate": {
          "value": 0
        },
        "deadline": {
          "value": 0
        },
        "startDate": {
          "value": 0
        }
      },
      "finance": {
        "invoiceable": true
      },
      "id": 0,
      "idNumber": "string",
      "instructions": {
        "forProvider": "string",
        "fromCustomer": "string",
        "internal": "string",
        "notes": "string",
        "paymentNoteForCustomer": "string",
        "paymentNoteForVendor": "string"
      },
      "jobs": {
        "jobCount": 0,
        "jobIds": [
          0
        ]
      },
      "languageCombination": {
        "sourceLanguageId": 0,
        "targetLanguageId": 0
      },
      "name": "string",
      "people": {
        "customerContacts": {
          "additionalIds": [
            0
          ],
          "primaryId": 0,
          "sendBackToId": 0
        },
        "responsiblePersons": {
          "projectCoordinatorId": 0,
          "projectManagerId": 0
        }
      },
      "projectId": 0,
      "quoteId": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoriesIds|[integer(int64)]|false|none|none|
|contactPersonId|integer(int64)|false|none|none|
|contacts|[ContactsDTO](#schemacontactsdto)|false|none|none|
|customFields|[[CustomFieldDTO](#schemacustomfielddto)]|false|none|none|
|customerId|integer(int64)|false|none|none|
|dates|[ProjectDatesDTO](#schemaprojectdatesdto)|false|none|none|
|finance|[FinanceDTO](#schemafinancedto)|false|none|none|
|id|integer(int64)|false|none|none|
|idNumber|string|false|none|none|
|instructions|[InstructionsDTO](#schemainstructionsdto)|false|none|none|
|isClassicProject|boolean|false|none|none|
|name|string|false|none|none|
|projectId|string|false|none|none|
|projectManagerId|integer(int64)|false|none|none|
|specializationId|integer(int64)|false|none|none|
|status|string|false|none|none|
|tasks|[[TaskDTO](#schemataskdto)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|REQUESTED_PROJECT|
|status|OPENED|
|status|CLOSED|
|status|CANCELLED|
|status|CLAIM|

<h2 id="tocS_ProjectDTOv2">ProjectDTOv2</h2>
<!-- backwards compatibility -->
<a id="schemaprojectdtov2"></a>
<a id="schema_ProjectDTOv2"></a>
<a id="tocSprojectdtov2"></a>
<a id="tocsprojectdtov2"></a>

```json
{
  "budgetCode": "string",
  "categoryIds": [
    0
  ],
  "clientDeadline": 0,
  "clientId": 0,
  "clientNotes": "string",
  "clientReferenceNumber": "string",
  "documents": {
    "projectConfirmationStatus": "string"
  },
  "id": "string",
  "instructionsForAllJobs": "string",
  "internalNotes": "string",
  "isClassicProject": true,
  "languages": {
    "languageCombinations": [
      {
        "sourceLanguageId": 0,
        "specializationId": 0,
        "targetLanguageId": 0
      }
    ],
    "sourceLanguageId": 0,
    "specializationId": 0,
    "targetLanguageIds": [
      0
    ]
  },
  "name": "string",
  "orderedOn": 0,
  "origin": "string",
  "people": {
    "projectManagerId": 0
  },
  "projectId": "string",
  "projectIdNumber": "string",
  "quoteIdNumber": "string",
  "serviceId": 0,
  "status": "string",
  "volume": {
    "unitId": 0,
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|budgetCode|string|false|none|none|
|categoryIds|[integer(int64)]|false|none|none|
|clientDeadline|integer(int64)|false|none|none|
|clientId|integer(int64)|false|none|none|
|clientNotes|string|false|none|none|
|clientReferenceNumber|string|false|none|none|
|documents|[DocumentsDTO](#schemadocumentsdto)|false|none|none|
|id|string|false|none|none|
|instructionsForAllJobs|string|false|none|none|
|internalNotes|string|false|none|none|
|isClassicProject|boolean|false|none|none|
|languages|[ProjectLanguagesDTO](#schemaprojectlanguagesdto)|false|none|none|
|name|string|false|none|none|
|orderedOn|integer(int64)|false|none|none|
|origin|string|false|none|none|
|people|[PeopleDTO](#schemapeopledto)|false|none|none|
|projectId|string|false|none|none|
|projectIdNumber|string|false|none|none|
|quoteIdNumber|string|false|none|none|
|serviceId|integer(int64)|false|none|none|
|status|string|false|none|none|
|volume|[VolumeDTO](#schemavolumedto)|false|none|none|

<h2 id="tocS_ProjectDatesDTO">ProjectDatesDTO</h2>
<!-- backwards compatibility -->
<a id="schemaprojectdatesdto"></a>
<a id="schema_ProjectDatesDTO"></a>
<a id="tocSprojectdatesdto"></a>
<a id="tocsprojectdatesdto"></a>

```json
{
  "actualDeliveryDate": {
    "value": 0
  },
  "actualStartDate": {
    "value": 0
  },
  "deadline": {
    "value": 0
  },
  "startDate": {
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actualDeliveryDate|[TimeDTO](#schematimedto)|false|none|none|
|actualStartDate|[TimeDTO](#schematimedto)|false|none|none|
|deadline|[TimeDTO](#schematimedto)|false|none|none|
|startDate|[TimeDTO](#schematimedto)|false|none|none|

<h2 id="tocS_ProjectFileAddedByDto">ProjectFileAddedByDto</h2>
<!-- backwards compatibility -->
<a id="schemaprojectfileaddedbydto"></a>
<a id="schema_ProjectFileAddedByDto"></a>
<a id="tocSprojectfileaddedbydto"></a>
<a id="tocsprojectfileaddedbydto"></a>

```json
{
  "userType": "string",
  "vendorId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userType|string|false|none|none|
|vendorId|integer(int64)|false|none|none|

<h2 id="tocS_ProjectFileDto">ProjectFileDto</h2>
<!-- backwards compatibility -->
<a id="schemaprojectfiledto"></a>
<a id="schema_ProjectFileDto"></a>
<a id="tocSprojectfiledto"></a>
<a id="tocsprojectfiledto"></a>

```json
{
  "addedBy": {
    "userType": "string",
    "vendorId": 0
  },
  "addedInJob": "string",
  "addedInLastStep": true,
  "addedInStep": 0,
  "categoryKey": "string",
  "id": "string",
  "isAccepted": true,
  "isLink": true,
  "isRemote": true,
  "languageRelation": {
    "languageCombinations": [
      {
        "sourceLanguageId": 0,
        "targetLanguageId": 0
      }
    ],
    "languages": [
      0
    ]
  },
  "lastModifiedOn": 0,
  "name": "string",
  "remoteCATToolReferences": {
    "catResourceId": "string",
    "catToolDocumentId": "string",
    "editorUrl": "string"
  },
  "sharedWithJobs": [
    "string"
  ],
  "size": 0,
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addedBy|[ProjectFileAddedByDto](#schemaprojectfileaddedbydto)|false|none|none|
|addedInJob|string|false|none|none|
|addedInLastStep|boolean|false|none|none|
|addedInStep|integer(int64)|false|none|none|
|categoryKey|string|false|none|none|
|id|string|false|none|none|
|isAccepted|boolean|false|none|none|
|isLink|boolean|false|none|none|
|isRemote|boolean|false|none|none|
|languageRelation|[LanguageRelationDto](#schemalanguagerelationdto)|false|none|none|
|lastModifiedOn|integer(int64)|false|none|none|
|name|string|false|none|none|
|remoteCATToolReferences|[RemoteCATToolReferencesDto](#schemaremotecattoolreferencesdto)|false|none|none|
|sharedWithJobs|[string]|false|none|none|
|size|integer(int64)|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_ProjectLanguagesDTO">ProjectLanguagesDTO</h2>
<!-- backwards compatibility -->
<a id="schemaprojectlanguagesdto"></a>
<a id="schema_ProjectLanguagesDTO"></a>
<a id="tocSprojectlanguagesdto"></a>
<a id="tocsprojectlanguagesdto"></a>

```json
{
  "languageCombinations": [
    {
      "sourceLanguageId": 0,
      "specializationId": 0,
      "targetLanguageId": 0
    }
  ],
  "sourceLanguageId": 0,
  "specializationId": 0,
  "targetLanguageIds": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languageCombinations|[[LanguageCombinationDTO](#schemalanguagecombinationdto)]|false|none|none|
|sourceLanguageId|integer(int64)|false|none|none|
|specializationId|integer(int64)|false|none|none|
|targetLanguageIds|[integer(int64)]|false|none|none|

<h2 id="tocS_ProjectStatusDTO">ProjectStatusDTO</h2>
<!-- backwards compatibility -->
<a id="schemaprojectstatusdto"></a>
<a id="schema_ProjectStatusDTO"></a>
<a id="tocSprojectstatusdto"></a>
<a id="tocsprojectstatusdto"></a>

```json
{
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|

<h2 id="tocS_ProviderDTO">ProviderDTO</h2>
<!-- backwards compatibility -->
<a id="schemaproviderdto"></a>
<a id="schema_ProviderDTO"></a>
<a id="tocSproviderdto"></a>
<a id="tocsproviderdto"></a>

```json
{
  "billingAddress": {
    "addressLine1": "string",
    "addressLine2": "string",
    "city": "string",
    "countryId": 0,
    "postalCode": "string",
    "provinceId": 0,
    "sameAsBillingAddress": true
  },
  "branchId": 0,
  "competencies": {
    "languageCombinations": [
      {
        "sourceLanguageId": 0,
        "targetLanguageId": 0
      }
    ]
  },
  "contact": {
    "emails": {
      "additional": [
        "string"
      ],
      "cc": [
        "string"
      ],
      "primary": "string"
    },
    "fax": "string",
    "phones": [
      "string"
    ],
    "sms": "string",
    "websites": [
      "string"
    ]
  },
  "correspondenceAddress": {
    "addressLine1": "string",
    "addressLine2": "string",
    "city": "string",
    "countryId": 0,
    "postalCode": "string",
    "provinceId": 0,
    "sameAsBillingAddress": true
  },
  "customFields": [
    {
      "key": "string",
      "name": "string",
      "type": "TEXT",
      "value": {}
    }
  ],
  "fullName": "string",
  "id": 0,
  "idNumber": "string",
  "leadSourceId": 0,
  "name": "string",
  "notes": "string",
  "persons": [
    {
      "active": true,
      "contact": {
        "emails": {
          "additional": [
            "string"
          ],
          "primary": "string"
        },
        "fax": "string",
        "phones": [
          "string"
        ],
        "sms": "string"
      },
      "customFields": [
        {
          "key": "string",
          "name": "string",
          "type": "TEXT",
          "value": {}
        }
      ],
      "gender": "FEMALE",
      "id": 0,
      "lastName": "string",
      "motherTonguesIds": [
        0
      ],
      "name": "string",
      "positionId": 0,
      "providerId": 0
    }
  ],
  "status": "ACTIVE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billingAddress|[AddressDTO](#schemaaddressdto)|false|none|none|
|branchId|integer(int64)|false|none|none|
|competencies|[CompetenciesDTO](#schemacompetenciesdto)|false|none|none|
|contact|[ContactDTO](#schemacontactdto)|false|none|none|
|correspondenceAddress|[AddressDTO](#schemaaddressdto)|false|none|none|
|customFields|[[CustomFieldDTO](#schemacustomfielddto)]|false|none|none|
|fullName|string|false|none|none|
|id|integer(int64)|false|none|none|
|idNumber|string|false|none|none|
|leadSourceId|integer(int64)|false|none|none|
|name|string|false|none|none|
|notes|string|false|none|none|
|persons|[[ProviderPersonDTO](#schemaproviderpersondto)]|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|INACTIVE|
|status|WAITING_FOR_APPROVAL|
|status|REJECTED|
|status|TOO_EXPENSIVE|
|status|INCOMPLETE_DATA|
|status|POTENTIAL|
|status|NOT_CONFIRMED|

<h2 id="tocS_ProviderInvoiceCreateDTO">ProviderInvoiceCreateDTO</h2>
<!-- backwards compatibility -->
<a id="schemaproviderinvoicecreatedto"></a>
<a id="schema_ProviderInvoiceCreateDTO"></a>
<a id="tocSproviderinvoicecreatedto"></a>
<a id="tocsproviderinvoicecreatedto"></a>

```json
{
  "jobsIds": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobsIds|[integer(int64)]|false|none|none|

<h2 id="tocS_ProviderInvoiceCreateResultDTO">ProviderInvoiceCreateResultDTO</h2>
<!-- backwards compatibility -->
<a id="schemaproviderinvoicecreateresultdto"></a>
<a id="schema_ProviderInvoiceCreateResultDTO"></a>
<a id="tocSproviderinvoicecreateresultdto"></a>
<a id="tocsproviderinvoicecreateresultdto"></a>

```json
{
  "invoiceUrl": "string",
  "invoicesIds": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invoiceUrl|string|false|none|none|
|invoicesIds|[integer(int64)]|false|none|none|

<h2 id="tocS_ProviderInvoiceDTO">ProviderInvoiceDTO</h2>
<!-- backwards compatibility -->
<a id="schemaproviderinvoicedto"></a>
<a id="schema_ProviderInvoiceDTO"></a>
<a id="tocSproviderinvoicedto"></a>
<a id="tocsproviderinvoicedto"></a>

```json
{
  "currencyId": 0,
  "dates": {
    "draftDate": {
      "value": 0
    },
    "finalDate": {
      "value": 0
    },
    "invoiceUploadedDate": {
      "value": 0
    },
    "paymentDueDate": {
      "value": 0
    }
  },
  "draftNumber": "string",
  "finalNumber": "string",
  "id": 0,
  "internalNumber": "string",
  "jobsNetValue": 0,
  "notesFromProvider": "string",
  "paymentStatus": "NOT_PAID",
  "providerId": 0,
  "status": "POSTPONED",
  "totalGross": 0,
  "totalGrossInWords": "string",
  "totalNetto": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyId|integer(int64)|false|none|none|
|dates|[ProviderInvoiceDatesDTO](#schemaproviderinvoicedatesdto)|false|none|none|
|draftNumber|string|false|none|none|
|finalNumber|string|false|none|none|
|id|integer(int64)|false|none|none|
|internalNumber|string|false|none|none|
|jobsNetValue|number|false|none|none|
|notesFromProvider|string|false|none|none|
|paymentStatus|string|false|none|none|
|providerId|integer(int64)|false|none|none|
|status|string|false|none|none|
|totalGross|number|false|none|none|
|totalGrossInWords|string|false|none|none|
|totalNetto|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|paymentStatus|NOT_PAID|
|paymentStatus|FULLY_PAID|
|paymentStatus|IRRECOVERABLE|
|paymentStatus|PARTIALLY_PAID|
|status|POSTPONED|
|status|TO_BE_SENT|
|status|SENT|
|status|CONFIRMED|
|status|BILL_CREATED|

<h2 id="tocS_ProviderInvoiceDatesDTO">ProviderInvoiceDatesDTO</h2>
<!-- backwards compatibility -->
<a id="schemaproviderinvoicedatesdto"></a>
<a id="schema_ProviderInvoiceDatesDTO"></a>
<a id="tocSproviderinvoicedatesdto"></a>
<a id="tocsproviderinvoicedatesdto"></a>

```json
{
  "draftDate": {
    "value": 0
  },
  "finalDate": {
    "value": 0
  },
  "invoiceUploadedDate": {
    "value": 0
  },
  "paymentDueDate": {
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|draftDate|[TimeDTO](#schematimedto)|false|none|none|
|finalDate|[TimeDTO](#schematimedto)|false|none|none|
|invoiceUploadedDate|[TimeDTO](#schematimedto)|false|none|none|
|paymentDueDate|[TimeDTO](#schematimedto)|false|none|none|

<h2 id="tocS_ProviderPersonDTO">ProviderPersonDTO</h2>
<!-- backwards compatibility -->
<a id="schemaproviderpersondto"></a>
<a id="schema_ProviderPersonDTO"></a>
<a id="tocSproviderpersondto"></a>
<a id="tocsproviderpersondto"></a>

```json
{
  "active": true,
  "contact": {
    "emails": {
      "additional": [
        "string"
      ],
      "primary": "string"
    },
    "fax": "string",
    "phones": [
      "string"
    ],
    "sms": "string"
  },
  "customFields": [
    {
      "key": "string",
      "name": "string",
      "type": "TEXT",
      "value": {}
    }
  ],
  "gender": "FEMALE",
  "id": 0,
  "lastName": "string",
  "motherTonguesIds": [
    0
  ],
  "name": "string",
  "positionId": 0,
  "providerId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|none|
|contact|[PersonContactDTO](#schemapersoncontactdto)|false|none|none|
|customFields|[[CustomFieldDTO](#schemacustomfielddto)]|false|none|none|
|gender|string|false|none|none|
|id|integer(int64)|false|none|none|
|lastName|string|false|none|none|
|motherTonguesIds|[integer(int64)]|false|none|none|
|name|string|false|none|none|
|positionId|integer(int64)|false|none|none|
|providerId|integer(int64)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|gender|FEMALE|
|gender|MALE|

<h2 id="tocS_ProvinceDTO">ProvinceDTO</h2>
<!-- backwards compatibility -->
<a id="schemaprovincedto"></a>
<a id="schema_ProvinceDTO"></a>
<a id="tocSprovincedto"></a>
<a id="tocsprovincedto"></a>

```json
{
  "active": true,
  "countryId": 0,
  "default": true,
  "id": 0,
  "name": "string",
  "preferred": true
}
```

territorial unit within a country (ie. Nebraska)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|should this value be available on the XTRF selection lists|
|countryId|integer(int64)|false|none|country's identifier|
|default|boolean|false|none|should this value be set by default in XTRF selection lists|
|id|integer(int64)|false|none|internal identifier|
|name|string|false|none|localised name (formatted in the current user's locale)|
|preferred|boolean|false|none|should this value be available on the top of XTRF selection lists, in the Preferred section|

<h2 id="tocS_QuoteCreateDTO">QuoteCreateDTO</h2>
<!-- backwards compatibility -->
<a id="schemaquotecreatedto"></a>
<a id="schema_QuoteCreateDTO"></a>
<a id="tocSquotecreatedto"></a>
<a id="tocsquotecreatedto"></a>

```json
{
  "clientId": 0,
  "name": "string",
  "opportunityOfferId": 0,
  "serviceId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|integer(int64)|false|none|none|
|name|string|false|none|none|
|opportunityOfferId|integer(int64)|false|none|none|
|serviceId|integer(int64)|false|none|none|

<h2 id="tocS_QuoteDTOv1">QuoteDTOv1</h2>
<!-- backwards compatibility -->
<a id="schemaquotedtov1"></a>
<a id="schema_QuoteDTOv1"></a>
<a id="tocSquotedtov1"></a>
<a id="tocsquotedtov1"></a>

```json
{
  "automaticallyAcceptSentQuote": true,
  "categoriesIds": [
    0
  ],
  "contactPersonId": 0,
  "customFields": [
    {
      "key": "string",
      "name": "string",
      "type": "TEXT",
      "value": {}
    }
  ],
  "customerId": 0,
  "dates": {
    "createdOn": {
      "value": 0
    },
    "deadline": {
      "value": 0
    },
    "offerExpiry": {
      "value": 0
    },
    "startDate": {
      "value": 0
    }
  },
  "finance": {
    "ROI": 0,
    "currencyId": 0,
    "margin": 0,
    "payables": [
      {
        "calculationUnitId": 0,
        "currencyId": 0,
        "description": "string",
        "id": 0,
        "ignoreMinimumCharge": true,
        "invoiceId": "string",
        "jobTypeId": 0,
        "languageCombination": {
          "sourceLanguageId": 0,
          "targetLanguageId": 0
        },
        "languageCombinationIdNumber": "string",
        "minimumCharge": 0,
        "rateOrigin": "PRICE_PROFILE",
        "total": 0,
        "type": "SIMPLE"
      }
    ],
    "profit": 0,
    "receivables": [
      {
        "calculationUnitId": 0,
        "currencyId": 0,
        "description": "string",
        "id": 0,
        "ignoreMinimumCharge": true,
        "invoiceId": "string",
        "jobTypeId": 0,
        "languageCombination": {
          "sourceLanguageId": 0,
          "targetLanguageId": 0
        },
        "languageCombinationIdNumber": "string",
        "minimumCharge": 0,
        "rateOrigin": "PRICE_PROFILE",
        "total": 0,
        "type": "SIMPLE"
      }
    ],
    "totalAgreed": 0,
    "totalCost": 0
  },
  "id": 0,
  "idNumber": "string",
  "instructions": {
    "forProvider": "string",
    "fromCustomer": "string",
    "internal": "string",
    "notes": "string",
    "paymentNoteForCustomer": "string",
    "paymentNoteForVendor": "string"
  },
  "isClassicQuote": true,
  "name": "string",
  "quoteId": "string",
  "salesPersonId": 0,
  "status": "string",
  "tasks": [
    {
      "clientTaskPONumber": "string",
      "customFields": [
        {
          "key": "string",
          "name": "string",
          "type": "TEXT",
          "value": {}
        }
      ],
      "dates": {
        "actualDeliveryDate": {
          "value": 0
        },
        "actualStartDate": {
          "value": 0
        },
        "deadline": {
          "value": 0
        },
        "startDate": {
          "value": 0
        }
      },
      "finance": {
        "invoiceable": true
      },
      "id": 0,
      "idNumber": "string",
      "instructions": {
        "forProvider": "string",
        "fromCustomer": "string",
        "internal": "string",
        "notes": "string",
        "paymentNoteForCustomer": "string",
        "paymentNoteForVendor": "string"
      },
      "jobs": {
        "jobCount": 0,
        "jobIds": [
          0
        ]
      },
      "languageCombination": {
        "sourceLanguageId": 0,
        "targetLanguageId": 0
      },
      "name": "string",
      "people": {
        "customerContacts": {
          "additionalIds": [
            0
          ],
          "primaryId": 0,
          "sendBackToId": 0
        },
        "responsiblePersons": {
          "projectCoordinatorId": 0,
          "projectManagerId": 0
        }
      },
      "projectId": 0,
      "quoteId": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|automaticallyAcceptSentQuote|boolean|false|none|none|
|categoriesIds|[integer(int64)]|false|none|none|
|contactPersonId|integer(int64)|false|none|none|
|customFields|[[CustomFieldDTO](#schemacustomfielddto)]|false|none|none|
|customerId|integer(int64)|false|none|none|
|dates|[QuoteDatesDTO](#schemaquotedatesdto)|false|none|none|
|finance|[FinanceDTO](#schemafinancedto)|false|none|none|
|id|integer(int64)|false|none|none|
|idNumber|string|false|none|none|
|instructions|[InstructionsDTO](#schemainstructionsdto)|false|none|none|
|isClassicQuote|boolean|false|none|none|
|name|string|false|none|none|
|quoteId|string|false|none|none|
|salesPersonId|integer(int64)|false|none|none|
|status|string|false|none|none|
|tasks|[[TaskDTO](#schemataskdto)]|false|none|none|

<h2 id="tocS_QuoteDTOv2">QuoteDTOv2</h2>
<!-- backwards compatibility -->
<a id="schemaquotedtov2"></a>
<a id="schema_QuoteDTOv2"></a>
<a id="tocSquotedtov2"></a>
<a id="tocsquotedtov2"></a>

```json
{
  "budgetCode": "string",
  "businessDays": 0,
  "categoryIds": [
    0
  ],
  "clientDeadline": 0,
  "clientId": 0,
  "clientNotes": "string",
  "clientReferenceNumber": "string",
  "createdOn": 0,
  "documents": {
    "projectConfirmationStatus": "string"
  },
  "expectedDeliveryDate": 0,
  "id": "string",
  "instructionsForAllJobs": "string",
  "internalNotes": "string",
  "isClassicQuote": true,
  "languages": {
    "languageCombinations": [
      {
        "sourceLanguageId": 0,
        "specializationId": 0,
        "targetLanguageId": 0
      }
    ],
    "sourceLanguageId": 0,
    "specializationId": 0,
    "targetLanguageIds": [
      0
    ]
  },
  "name": "string",
  "origin": "string",
  "people": {
    "projectManagerId": 0
  },
  "quoteExpiry": 0,
  "quoteId": "string",
  "quoteIdNumber": "string",
  "serviceId": 0,
  "status": "string",
  "volume": {
    "unitId": 0,
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|budgetCode|string|false|none|none|
|businessDays|integer(int64)|false|none|none|
|categoryIds|[integer(int64)]|false|none|none|
|clientDeadline|integer(int64)|false|none|none|
|clientId|integer(int64)|false|none|none|
|clientNotes|string|false|none|none|
|clientReferenceNumber|string|false|none|none|
|createdOn|integer(int64)|false|none|none|
|documents|[DocumentsDTO](#schemadocumentsdto)|false|none|none|
|expectedDeliveryDate|integer(int64)|false|none|none|
|id|string|false|none|none|
|instructionsForAllJobs|string|false|none|none|
|internalNotes|string|false|none|none|
|isClassicQuote|boolean|false|none|none|
|languages|[ProjectLanguagesDTO](#schemaprojectlanguagesdto)|false|none|none|
|name|string|false|none|none|
|origin|string|false|none|none|
|people|[PeopleDTO](#schemapeopledto)|false|none|none|
|quoteExpiry|integer(int64)|false|none|none|
|quoteId|string|false|none|none|
|quoteIdNumber|string|false|none|none|
|serviceId|integer(int64)|false|none|none|
|status|string|false|none|none|
|volume|[VolumeDTO](#schemavolumedto)|false|none|none|

<h2 id="tocS_QuoteDatesDTO">QuoteDatesDTO</h2>
<!-- backwards compatibility -->
<a id="schemaquotedatesdto"></a>
<a id="schema_QuoteDatesDTO"></a>
<a id="tocSquotedatesdto"></a>
<a id="tocsquotedatesdto"></a>

```json
{
  "createdOn": {
    "value": 0
  },
  "deadline": {
    "value": 0
  },
  "offerExpiry": {
    "value": 0
  },
  "startDate": {
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdOn|[TimeDTO](#schematimedto)|false|none|none|
|deadline|[TimeDTO](#schematimedto)|false|none|none|
|offerExpiry|[TimeDTO](#schematimedto)|false|none|none|
|startDate|[TimeDTO](#schematimedto)|false|none|none|

<h2 id="tocS_ReceivableCreateDTO">ReceivableCreateDTO</h2>
<!-- backwards compatibility -->
<a id="schemareceivablecreatedto"></a>
<a id="schema_ReceivableCreateDTO"></a>
<a id="tocSreceivablecreatedto"></a>
<a id="tocsreceivablecreatedto"></a>

```json
{
  "calculationUnitId": 0,
  "catLogFile": {
    "content": "string",
    "name": "string",
    "token": "string",
    "url": "string"
  },
  "currencyId": 0,
  "description": "string",
  "id": 0,
  "ignoreMinimumCharge": true,
  "invoiceId": "string",
  "jobTypeId": 0,
  "languageCombination": {
    "sourceLanguageId": 0,
    "targetLanguageId": 0
  },
  "languageCombinationIdNumber": "string",
  "minimumCharge": 0,
  "quantity": 0,
  "rate": 0,
  "rateOrigin": "PRICE_PROFILE",
  "taskId": 0,
  "total": 0,
  "type": "SIMPLE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calculationUnitId|integer(int64)|false|none|none|
|catLogFile|[FileDTO](#schemafiledto)|false|none|none|
|currencyId|integer(int64)|false|none|none|
|description|string|false|none|none|
|id|integer(int64)|false|none|none|
|ignoreMinimumCharge|boolean|false|none|none|
|invoiceId|string|false|none|none|
|jobTypeId|integer(int64)|false|none|none|
|languageCombination|[ChargeLanguageCombinationDTO](#schemachargelanguagecombinationdto)|false|none|none|
|languageCombinationIdNumber|string|false|none|none|
|minimumCharge|number|false|none|none|
|quantity|number|false|none|none|
|rate|number|false|none|none|
|rateOrigin|string|false|none|none|
|taskId|integer(int64)|false|none|none|
|total|number|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|rateOrigin|PRICE_PROFILE|
|rateOrigin|PRICE_LIST|
|rateOrigin|FILLED_MANUALLY|
|rateOrigin|AUTOCALCULATED|
|type|SIMPLE|
|type|CAT|

<h2 id="tocS_ReceivableDTO">ReceivableDTO</h2>
<!-- backwards compatibility -->
<a id="schemareceivabledto"></a>
<a id="schema_ReceivableDTO"></a>
<a id="tocSreceivabledto"></a>
<a id="tocsreceivabledto"></a>

```json
{
  "calculationUnitId": 0,
  "currencyId": 0,
  "description": "string",
  "id": 0,
  "ignoreMinimumCharge": true,
  "invoiceId": "string",
  "jobTypeId": 0,
  "languageCombination": {
    "sourceLanguageId": 0,
    "targetLanguageId": 0
  },
  "languageCombinationIdNumber": "string",
  "minimumCharge": 0,
  "quantity": 0,
  "rate": 0,
  "rateOrigin": "PRICE_PROFILE",
  "taskId": 0,
  "total": 0,
  "type": "SIMPLE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calculationUnitId|integer(int64)|false|none|none|
|currencyId|integer(int64)|false|none|none|
|description|string|false|none|none|
|id|integer(int64)|false|none|none|
|ignoreMinimumCharge|boolean|false|none|none|
|invoiceId|string|false|none|none|
|jobTypeId|integer(int64)|false|none|none|
|languageCombination|[ChargeLanguageCombinationDTO](#schemachargelanguagecombinationdto)|false|none|none|
|languageCombinationIdNumber|string|false|none|none|
|minimumCharge|number|false|none|none|
|quantity|number|false|none|none|
|rate|number|false|none|none|
|rateOrigin|string|false|none|none|
|taskId|integer(int64)|false|none|none|
|total|number|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|rateOrigin|PRICE_PROFILE|
|rateOrigin|PRICE_LIST|
|rateOrigin|FILLED_MANUALLY|
|rateOrigin|AUTOCALCULATED|
|type|SIMPLE|
|type|CAT|

<h2 id="tocS_RemoteCATToolReferencesDto">RemoteCATToolReferencesDto</h2>
<!-- backwards compatibility -->
<a id="schemaremotecattoolreferencesdto"></a>
<a id="schema_RemoteCATToolReferencesDto"></a>
<a id="tocSremotecattoolreferencesdto"></a>
<a id="tocsremotecattoolreferencesdto"></a>

```json
{
  "catResourceId": "string",
  "catToolDocumentId": "string",
  "editorUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|catResourceId|string|false|none|none|
|catToolDocumentId|string|false|none|none|
|editorUrl|string|false|none|none|

<h2 id="tocS_ReportResultDTO">ReportResultDTO</h2>
<!-- backwards compatibility -->
<a id="schemareportresultdto"></a>
<a id="schema_ReportResultDTO"></a>
<a id="tocSreportresultdto"></a>
<a id="tocsreportresultdto"></a>

```json
{
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|none|none|

<h2 id="tocS_ResponsiblePersonsDTO">ResponsiblePersonsDTO</h2>
<!-- backwards compatibility -->
<a id="schemaresponsiblepersonsdto"></a>
<a id="schema_ResponsiblePersonsDTO"></a>
<a id="tocSresponsiblepersonsdto"></a>
<a id="tocsresponsiblepersonsdto"></a>

```json
{
  "projectCoordinatorId": 0,
  "projectManagerId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|projectCoordinatorId|integer(int64)|false|none|none|
|projectManagerId|integer(int64)|false|none|none|

<h2 id="tocS_SendRemindersRequestDTO">SendRemindersRequestDTO</h2>
<!-- backwards compatibility -->
<a id="schemasendremindersrequestdto"></a>
<a id="schema_SendRemindersRequestDTO"></a>
<a id="tocSsendremindersrequestdto"></a>
<a id="tocssendremindersrequestdto"></a>

```json
{
  "ids": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[integer(int64)]|false|none|none|

<h2 id="tocS_SendRemindersResponseDTO">SendRemindersResponseDTO</h2>
<!-- backwards compatibility -->
<a id="schemasendremindersresponsedto"></a>
<a id="schema_SendRemindersResponseDTO"></a>
<a id="tocSsendremindersresponsedto"></a>
<a id="tocssendremindersresponsedto"></a>

```json
{
  "numberOfSentEmails": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numberOfSentEmails|integer(int32)|false|none|none|

<h2 id="tocS_ServiceDTO">ServiceDTO</h2>
<!-- backwards compatibility -->
<a id="schemaservicedto"></a>
<a id="schema_ServiceDTO"></a>
<a id="tocSservicedto"></a>
<a id="tocsservicedto"></a>

```json
{
  "active": true,
  "default": true,
  "id": 0,
  "name": "string",
  "preferred": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|should this value be available on the XTRF selection lists|
|default|boolean|false|none|should this value be set by default in XTRF selection lists|
|id|integer(int64)|false|none|internal identifier|
|name|string|false|none|localised name (formatted in the current user's locale)|
|preferred|boolean|false|none|should this value be available on the top of XTRF selection lists, in the Preferred section|

<h2 id="tocS_SettingsDTO">SettingsDTO</h2>
<!-- backwards compatibility -->
<a id="schemasettingsdto"></a>
<a id="schema_SettingsDTO"></a>
<a id="tocSsettingsdto"></a>
<a id="tocssettingsdto"></a>

```json
{
  "local": {
    "maxLinesInRow": 0,
    "maxRows": 0
  },
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|local|[LocalSettingsDTO](#schemalocalsettingsdto)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_SmartContactsDTO">SmartContactsDTO</h2>
<!-- backwards compatibility -->
<a id="schemasmartcontactsdto"></a>
<a id="schema_SmartContactsDTO"></a>
<a id="tocSsmartcontactsdto"></a>
<a id="tocssmartcontactsdto"></a>

```json
{
  "additionalIds": [
    0
  ],
  "primaryId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalIds|[integer(int64)]|false|none|none|
|primaryId|integer(int64)|false|none|none|

<h2 id="tocS_SmartCustomFieldDTO">SmartCustomFieldDTO</h2>
<!-- backwards compatibility -->
<a id="schemasmartcustomfielddto"></a>
<a id="schema_SmartCustomFieldDTO"></a>
<a id="tocSsmartcustomfielddto"></a>
<a id="tocssmartcustomfielddto"></a>

```json
{
  "value": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|object|false|none|none|

<h2 id="tocS_SourceLanguageDTO">SourceLanguageDTO</h2>
<!-- backwards compatibility -->
<a id="schemasourcelanguagedto"></a>
<a id="schema_SourceLanguageDTO"></a>
<a id="tocSsourcelanguagedto"></a>
<a id="tocssourcelanguagedto"></a>

```json
{
  "sourceLanguageId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceLanguageId|integer(int64)|false|none|none|

<h2 id="tocS_SpecializationDTO">SpecializationDTO</h2>
<!-- backwards compatibility -->
<a id="schemaspecializationdto"></a>
<a id="schema_SpecializationDTO"></a>
<a id="tocSspecializationdto"></a>
<a id="tocsspecializationdto"></a>

```json
{
  "specializationId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|specializationId|integer(int64)|false|none|none|

<h2 id="tocS_StatusRequestDTO">StatusRequestDTO</h2>
<!-- backwards compatibility -->
<a id="schemastatusrequestdto"></a>
<a id="schema_StatusRequestDTO"></a>
<a id="tocSstatusrequestdto"></a>
<a id="tocsstatusrequestdto"></a>

```json
{
  "status": "POSTPONED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|POSTPONED|
|status|TO_BE_SENT|
|status|SENT|
|status|CONFIRMED|
|status|BILL_CREATED|

<h2 id="tocS_StepTypeDto">StepTypeDto</h2>
<!-- backwards compatibility -->
<a id="schemasteptypedto"></a>
<a id="schema_StepTypeDto"></a>
<a id="tocSsteptypedto"></a>
<a id="tocssteptypedto"></a>

```json
{
  "id": "string",
  "jobTypeId": 0,
  "name": "string",
  "semantics": {
    "canVerifyFiles": true,
    "isScripted": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|jobTypeId|integer(int64)|false|none|none|
|name|string|false|none|none|
|semantics|[StepTypeSemanticsDto](#schemasteptypesemanticsdto)|false|none|none|

<h2 id="tocS_StepTypeSemanticsDto">StepTypeSemanticsDto</h2>
<!-- backwards compatibility -->
<a id="schemasteptypesemanticsdto"></a>
<a id="schema_StepTypeSemanticsDto"></a>
<a id="tocSsteptypesemanticsdto"></a>
<a id="tocssteptypesemanticsdto"></a>

```json
{
  "canVerifyFiles": true,
  "isScripted": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canVerifyFiles|boolean|false|none|none|
|isScripted|boolean|false|none|none|

<h2 id="tocS_StringDTO">StringDTO</h2>
<!-- backwards compatibility -->
<a id="schemastringdto"></a>
<a id="schema_StringDTO"></a>
<a id="tocSstringdto"></a>
<a id="tocsstringdto"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|none|

<h2 id="tocS_SubscriptionDTO">SubscriptionDTO</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptiondto"></a>
<a id="schema_SubscriptionDTO"></a>
<a id="tocSsubscriptiondto"></a>
<a id="tocssubscriptiondto"></a>

```json
{
  "embed": "string",
  "event": "string",
  "filter": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|embed|string|false|none|additional fields which should be embedded in the event|
|event|string|false|none|event to which you want to subscribe|
|filter|string|false|none|filter expression in the form 'attribute=value'|
|url|string|false|none|url that will be invoked by XTRF on event|

<h2 id="tocS_TargetLanguagesDTO">TargetLanguagesDTO</h2>
<!-- backwards compatibility -->
<a id="schematargetlanguagesdto"></a>
<a id="schema_TargetLanguagesDTO"></a>
<a id="tocStargetlanguagesdto"></a>
<a id="tocstargetlanguagesdto"></a>

```json
{
  "targetLanguageIds": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|targetLanguageIds|[integer(int64)]|false|none|none|

<h2 id="tocS_TaskCreateDTO">TaskCreateDTO</h2>
<!-- backwards compatibility -->
<a id="schemataskcreatedto"></a>
<a id="schema_TaskCreateDTO"></a>
<a id="tocStaskcreatedto"></a>
<a id="tocstaskcreatedto"></a>

```json
{
  "clientTaskPONumber": "string",
  "dates": {
    "actualDeliveryDate": {
      "value": 0
    },
    "actualStartDate": {
      "value": 0
    },
    "deadline": {
      "value": 0
    },
    "startDate": {
      "value": 0
    }
  },
  "files": [
    {
      "category": "WORKFILE",
      "content": "string",
      "name": "string",
      "token": "string",
      "url": "string"
    }
  ],
  "instructions": {
    "forProvider": "string",
    "fromCustomer": "string",
    "internal": "string",
    "notes": "string",
    "paymentNoteForCustomer": "string",
    "paymentNoteForVendor": "string"
  },
  "languageCombination": {
    "sourceLanguageId": 0,
    "targetLanguageId": 0
  },
  "name": "string",
  "people": {
    "customerContacts": {
      "additionalIds": [
        0
      ],
      "primaryId": 0,
      "sendBackToId": 0
    },
    "responsiblePersons": {
      "projectCoordinatorId": 0,
      "projectManagerId": 0
    }
  },
  "specializationId": 0,
  "workflowId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientTaskPONumber|string|false|none|client task PO number|
|dates|[ProjectDatesDTO](#schemaprojectdatesdto)|false|none|none|
|files|[[TaskFileDTO](#schemataskfiledto)]|false|none|files|
|instructions|[InstructionsDTO](#schemainstructionsdto)|false|none|none|
|languageCombination|[CommonLanguageCombinationDTO](#schemacommonlanguagecombinationdto)|false|none|language combination (ie. PL -> EN)|
|name|string|false|none|name|
|people|[ClassicPeopleDTO](#schemaclassicpeopledto)|false|none|people|
|specializationId|integer(int64)|false|none|specialization|
|workflowId|integer(int64)|false|none|workflow|

<h2 id="tocS_TaskDTO">TaskDTO</h2>
<!-- backwards compatibility -->
<a id="schemataskdto"></a>
<a id="schema_TaskDTO"></a>
<a id="tocStaskdto"></a>
<a id="tocstaskdto"></a>

```json
{
  "clientTaskPONumber": "string",
  "customFields": [
    {
      "key": "string",
      "name": "string",
      "type": "TEXT",
      "value": {}
    }
  ],
  "dates": {
    "actualDeliveryDate": {
      "value": 0
    },
    "actualStartDate": {
      "value": 0
    },
    "deadline": {
      "value": 0
    },
    "startDate": {
      "value": 0
    }
  },
  "finance": {
    "invoiceable": true
  },
  "id": 0,
  "idNumber": "string",
  "instructions": {
    "forProvider": "string",
    "fromCustomer": "string",
    "internal": "string",
    "notes": "string",
    "paymentNoteForCustomer": "string",
    "paymentNoteForVendor": "string"
  },
  "jobs": {
    "jobCount": 0,
    "jobIds": [
      0
    ]
  },
  "languageCombination": {
    "sourceLanguageId": 0,
    "targetLanguageId": 0
  },
  "name": "string",
  "people": {
    "customerContacts": {
      "additionalIds": [
        0
      ],
      "primaryId": 0,
      "sendBackToId": 0
    },
    "responsiblePersons": {
      "projectCoordinatorId": 0,
      "projectManagerId": 0
    }
  },
  "projectId": 0,
  "quoteId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientTaskPONumber|string|false|none|client task PO number|
|customFields|[[CustomFieldDTO](#schemacustomfielddto)]|false|none|none|
|dates|[ProjectDatesDTO](#schemaprojectdatesdto)|false|none|none|
|finance|[TaskFinanceDTO](#schemataskfinancedto)|false|none|finance|
|id|integer(int64)|false|none|internal identifier|
|idNumber|string|false|none|identifier|
|instructions|[InstructionsDTO](#schemainstructionsdto)|false|none|none|
|jobs|[TaskJobsDTO](#schemataskjobsdto)|false|none|none|
|languageCombination|[CommonLanguageCombinationDTO](#schemacommonlanguagecombinationdto)|false|none|language combination (ie. PL -> EN)|
|name|string|false|none|name|
|people|[ClassicPeopleDTO](#schemaclassicpeopledto)|false|none|people|
|projectId|integer(int64)|false|none|project's internal identifier|
|quoteId|integer(int64)|false|none|quote's internal identifier|

<h2 id="tocS_TaskFileDTO">TaskFileDTO</h2>
<!-- backwards compatibility -->
<a id="schemataskfiledto"></a>
<a id="schema_TaskFileDTO"></a>
<a id="tocStaskfiledto"></a>
<a id="tocstaskfiledto"></a>

```json
{
  "category": "WORKFILE",
  "content": "string",
  "name": "string",
  "token": "string",
  "url": "string"
}
```

describes files; remember that either url, content or token should be filled

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|file category|
|content|string|false|none|none|
|name|string|false|none|none|
|token|string|false|none|none|
|url|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|category|WORKFILE|
|category|TM|
|category|DICTIONARY|
|category|REF|
|category|LOG_FILE|

<h2 id="tocS_TaskFilesDTO">TaskFilesDTO</h2>
<!-- backwards compatibility -->
<a id="schemataskfilesdto"></a>
<a id="schema_TaskFilesDTO"></a>
<a id="tocStaskfilesdto"></a>
<a id="tocstaskfilesdto"></a>

```json
{
  "bundles": {
    "property1": [
      {
        "content": "string",
        "name": "string",
        "token": "string",
        "url": "string"
      }
    ],
    "property2": [
      {
        "content": "string",
        "name": "string",
        "token": "string",
        "url": "string"
      }
    ]
  },
  "inputFiles": {
    "logFiles": [
      {
        "content": "string",
        "name": "string",
        "token": "string",
        "url": "string"
      }
    ],
    "referenceFiles": [
      {
        "content": "string",
        "name": "string",
        "token": "string",
        "url": "string"
      }
    ],
    "terminology": [
      {
        "content": "string",
        "name": "string",
        "token": "string",
        "url": "string"
      }
    ],
    "tm": [
      {
        "content": "string",
        "name": "string",
        "token": "string",
        "url": "string"
      }
    ],
    "workFiles": [
      {
        "content": "string",
        "name": "string",
        "token": "string",
        "url": "string"
      }
    ]
  },
  "jobs": [
    {
      "files": {
        "inputFiles": [
          {
            "content": "string",
            "name": "string",
            "token": "string",
            "url": "string"
          }
        ],
        "outputFiles": [
          {
            "content": "string",
            "name": "string",
            "token": "string",
            "url": "string"
          }
        ]
      },
      "id": 0,
      "idNumber": "string",
      "name": "string"
    }
  ],
  "outputFiles": [
    {
      "content": "string",
      "name": "string",
      "token": "string",
      "url": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bundles|object|false|none|none|
|inputFiles|[InputFilesDTO](#schemainputfilesdto)|false|none|none|
|jobs|[[JobDTO](#schemajobdto)]|false|none|none|
|outputFiles|[[FileDTO](#schemafiledto)]|false|none|none|

<h2 id="tocS_TaskFinanceDTO">TaskFinanceDTO</h2>
<!-- backwards compatibility -->
<a id="schemataskfinancedto"></a>
<a id="schema_TaskFinanceDTO"></a>
<a id="tocStaskfinancedto"></a>
<a id="tocstaskfinancedto"></a>

```json
{
  "invoiceable": true
}
```

finance

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invoiceable|boolean|false|none|is this task invoiceable or not|

<h2 id="tocS_TaskJobsDTO">TaskJobsDTO</h2>
<!-- backwards compatibility -->
<a id="schemataskjobsdto"></a>
<a id="schema_TaskJobsDTO"></a>
<a id="tocStaskjobsdto"></a>
<a id="tocstaskjobsdto"></a>

```json
{
  "jobCount": 0,
  "jobIds": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobCount|integer(int32)|false|none|none|
|jobIds|[integer(int64)]|false|none|none|

<h2 id="tocS_TaskProgressDTO">TaskProgressDTO</h2>
<!-- backwards compatibility -->
<a id="schemataskprogressdto"></a>
<a id="schema_TaskProgressDTO"></a>
<a id="tocStaskprogressdto"></a>
<a id="tocstaskprogressdto"></a>

```json
{
  "phase": "string",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phase|string|false|none|none|
|status|string|false|none|none|

<h2 id="tocS_TimeDTO">TimeDTO</h2>
<!-- backwards compatibility -->
<a id="schematimedto"></a>
<a id="schema_TimeDTO"></a>
<a id="tocStimedto"></a>
<a id="tocstimedto"></a>

```json
{
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|integer(int64)|false|none|none|

<h2 id="tocS_TimeZoneDTO">TimeZoneDTO</h2>
<!-- backwards compatibility -->
<a id="schematimezonedto"></a>
<a id="schema_TimeZoneDTO"></a>
<a id="tocStimezonedto"></a>
<a id="tocstimezonedto"></a>

```json
{
  "displayName": "string",
  "id": "string",
  "offset": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|none|
|id|string|false|none|none|
|offset|integer(int32)|false|none|none|

<h2 id="tocS_UrlResultDTO">UrlResultDTO</h2>
<!-- backwards compatibility -->
<a id="schemaurlresultdto"></a>
<a id="schema_UrlResultDTO"></a>
<a id="tocSurlresultdto"></a>
<a id="tocsurlresultdto"></a>

```json
{
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|none|none|

<h2 id="tocS_UserDTO">UserDTO</h2>
<!-- backwards compatibility -->
<a id="schemauserdto"></a>
<a id="schema_UserDTO"></a>
<a id="tocSuserdto"></a>
<a id="tocsuserdto"></a>

```json
{
  "customFields": [
    {
      "key": "string",
      "name": "string",
      "type": "TEXT",
      "value": {}
    }
  ],
  "email": "string",
  "firstName": "string",
  "gender": "string",
  "id": 0,
  "lastName": "string",
  "login": "string",
  "mobilePhone": "string",
  "phone": "string",
  "positionName": "string",
  "timeZoneId": "string",
  "userGroupName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customFields|[[CustomFieldDTO](#schemacustomfielddto)]|false|none|none|
|email|string|false|none|none|
|firstName|string|false|none|none|
|gender|string|false|none|none|
|id|integer(int64)|false|none|none|
|lastName|string|false|none|none|
|login|string|false|none|none|
|mobilePhone|string|false|none|none|
|phone|string|false|none|none|
|positionName|string|false|none|none|
|timeZoneId|string|false|none|none|
|userGroupName|string|false|none|none|

<h2 id="tocS_VendorPriceProfileDTO">VendorPriceProfileDTO</h2>
<!-- backwards compatibility -->
<a id="schemavendorpriceprofiledto"></a>
<a id="schema_VendorPriceProfileDTO"></a>
<a id="tocSvendorpriceprofiledto"></a>
<a id="tocsvendorpriceprofiledto"></a>

```json
{
  "vendorPriceProfileId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vendorPriceProfileId|integer(int64)|false|none|none|

<h2 id="tocS_ViewBriefDTO">ViewBriefDTO</h2>
<!-- backwards compatibility -->
<a id="schemaviewbriefdto"></a>
<a id="schema_ViewBriefDTO"></a>
<a id="tocSviewbriefdto"></a>
<a id="tocsviewbriefdto"></a>

```json
{
  "access": {
    "change": true,
    "delete": true
  },
  "current": true,
  "id": 0,
  "lastModification": {
    "date": "string",
    "modifier": "string"
  },
  "mine": true,
  "name": "string",
  "owner": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access|[AccessDTO](#schemaaccessdto)|false|none|none|
|current|boolean|false|none|none|
|id|integer(int64)|false|none|none|
|lastModification|[LastModificationDTO](#schemalastmodificationdto)|false|none|none|
|mine|boolean|false|none|none|
|name|string|false|none|none|
|owner|string|false|none|none|

<h2 id="tocS_ViewDTO">ViewDTO</h2>
<!-- backwards compatibility -->
<a id="schemaviewdto"></a>
<a id="schema_ViewDTO"></a>
<a id="tocSviewdto"></a>
<a id="tocsviewdto"></a>

```json
{
  "columns": [
    {
      "name": "string",
      "settings": {}
    }
  ],
  "order": {
    "column": "string",
    "type": "string"
  },
  "permissions": {
    "sharedGroups": [
      0
    ]
  },
  "settings": {
    "local": {
      "maxLinesInRow": 0,
      "maxRows": 0
    },
    "name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columns|[[ColumnDTO](#schemacolumndto)]|false|none|none|
|order|[OrderDTO](#schemaorderdto)|false|none|none|
|permissions|[PermissionsDTO](#schemapermissionsdto)|false|none|none|
|settings|[SettingsDTO](#schemasettingsdto)|false|none|none|

<h2 id="tocS_ViewDetailsDTO">ViewDetailsDTO</h2>
<!-- backwards compatibility -->
<a id="schemaviewdetailsdto"></a>
<a id="schema_ViewDetailsDTO"></a>
<a id="tocSviewdetailsdto"></a>
<a id="tocsviewdetailsdto"></a>

```json
{
  "access": {
    "change": true,
    "delete": true
  },
  "actions": [
    {
      "header": "string",
      "name": "string"
    }
  ],
  "filter": {
    "properties": [
      {}
    ]
  },
  "view": {
    "columns": [
      {
        "name": "string",
        "settings": {}
      }
    ],
    "order": {
      "column": "string",
      "type": "string"
    },
    "permissions": {
      "sharedGroups": [
        0
      ]
    },
    "settings": {
      "local": {
        "maxLinesInRow": 0,
        "maxRows": 0
      },
      "name": "string"
    }
  },
  "viewId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access|[AccessDTO](#schemaaccessdto)|false|none|none|
|actions|[[ActionDTO](#schemaactiondto)]|false|none|none|
|filter|[FilterDTO](#schemafilterdto)|false|none|none|
|view|[ViewDTO](#schemaviewdto)|false|none|none|
|viewId|integer(int64)|false|none|none|

<h2 id="tocS_ViewWithIdDTO">ViewWithIdDTO</h2>
<!-- backwards compatibility -->
<a id="schemaviewwithiddto"></a>
<a id="schema_ViewWithIdDTO"></a>
<a id="tocSviewwithiddto"></a>
<a id="tocsviewwithiddto"></a>

```json
{
  "columns": [
    {
      "name": "string",
      "settings": {}
    }
  ],
  "order": {
    "column": "string",
    "type": "string"
  },
  "permissions": {
    "sharedGroups": [
      0
    ]
  },
  "settings": {
    "local": {
      "maxLinesInRow": 0,
      "maxRows": 0
    },
    "name": "string"
  },
  "viewId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columns|[[ColumnDTO](#schemacolumndto)]|false|none|none|
|order|[OrderDTO](#schemaorderdto)|false|none|none|
|permissions|[PermissionsDTO](#schemapermissionsdto)|false|none|none|
|settings|[SettingsDTO](#schemasettingsdto)|false|none|none|
|viewId|integer(int64)|false|none|none|

<h2 id="tocS_ViewsBriefDTO">ViewsBriefDTO</h2>
<!-- backwards compatibility -->
<a id="schemaviewsbriefdto"></a>
<a id="schema_ViewsBriefDTO"></a>
<a id="tocSviewsbriefdto"></a>
<a id="tocsviewsbriefdto"></a>

```json
{
  "access": {
    "change": true,
    "delete": true
  },
  "list": [
    {
      "access": {
        "change": true,
        "delete": true
      },
      "current": true,
      "id": 0,
      "lastModification": {
        "date": "string",
        "modifier": "string"
      },
      "mine": true,
      "name": "string",
      "owner": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access|[AccessDTO](#schemaaccessdto)|false|none|none|
|list|[[ViewBriefDTO](#schemaviewbriefdto)]|false|none|none|

<h2 id="tocS_VolumeDTO">VolumeDTO</h2>
<!-- backwards compatibility -->
<a id="schemavolumedto"></a>
<a id="schema_VolumeDTO"></a>
<a id="tocSvolumedto"></a>
<a id="tocsvolumedto"></a>

```json
{
  "unitId": 0,
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unitId|integer(int64)|false|none|none|
|value|number|false|none|none|
