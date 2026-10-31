<h1 id="highways-england-api">Highways England API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://webtris.highwaysengland.co.uk/api">https://webtris.highwaysengland.co.uk/api</a>

<h1 id="highways-england-api-areas">Areas</h1>

## Returns list of areas

<a id="opIdAreas_Get"></a>

> Code samples

```bash
curl https://example.com/vstring/areas \
  -H 'Accept: application/json'
```

`GET /v{version}/areas`

<h3 id="returns-list-of-areas-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|version|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "areas": [
    {
      "Description": "string",
      "Id": "string",
      "Name": "string",
      "XLatitude": "string",
      "XLongitude": "string",
      "YLatitude": "string",
      "YLongitude": "string"
    }
  ],
  "row_count": 0
}
```

<h3 id="returns-list-of-areas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AreaResponse](#schemaarearesponse)|
|400|Bad Request|Bad request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns details of selected area

> Code samples

```bash
curl https://example.com/vstring/areas/string \
  -H 'Accept: application/json'
```

`GET /v{version}/areas/{area_Ids}`

<h3 id="returns-details-of-selected-area-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|area_Ids|path|string|true|none|
|version|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "areas": [
    {
      "Description": "string",
      "Id": "string",
      "Name": "string",
      "XLatitude": "string",
      "XLongitude": "string",
      "YLatitude": "string",
      "YLongitude": "string"
    }
  ],
  "row_count": 0
}
```

<h3 id="returns-details-of-selected-area-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[AreaResponse](#schemaarearesponse)|
|400|Bad Request|Bad request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="highways-england-api-quality">Quality</h1>

## Get Site DailyQuality

<a id="opIdQuality_GetDailyDataQualityForSite"></a>

> Code samples

```bash
curl 'https://example.com/vstring/quality/daily?siteId=string&start_date=string&end_date=string' \
  -H 'Accept: application/json'
```

`GET /v{version}/quality/daily`

<h3 id="get-site-dailyquality-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteId|query|string|true|none|
|start_date|query|string|true|The start date of the report in the format ddmmyyyy (i.e 31012016)|
|end_date|query|string|true|The end date of the report in the format ddmmyyyy (i.e 31012016)|
|version|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "Qualities": [
    {
      "Date": "1970-01-01T00:00:00Z",
      "Quality": 0
    }
  ],
  "row_count": 0
}
```

<h3 id="get-site-dailyquality-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[DailyQualityResponse](#schemadailyqualityresponse)|
|400|Bad Request|Bad request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Site OverallQuality

<a id="opIdQuality_GetOverallDataQualityForSites"></a>

> Code samples

```bash
curl 'https://example.com/vstring/quality/overall?sites=string&start_date=string&end_date=string' \
  -H 'Accept: application/json'
```

`GET /v{version}/quality/overall`

<h3 id="get-site-overallquality-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sites|query|string|true|Get site quality by site id delimited by ,|
|start_date|query|string|true|The start date of the report in the format ddmmyyyy (i.e 31012016)|
|end_date|query|string|true|The end date of the report in the format ddmmyyyy (i.e 31012016)|
|version|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data_quality": 0,
  "end_date": "string",
  "row_count": 0,
  "sites": "string",
  "start_date": "string"
}
```

<h3 id="get-site-overallquality-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[OverallQualityResponse](#schemaoverallqualityresponse)|
|400|Bad Request|Bad request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="highways-england-api-reports">Reports</h1>

## Gets the daily report.

<a id="opIdReports_Index"></a>

> Code samples

```bash
curl 'https://example.com/vstring/reports/string?sites=string&start_date=string&end_date=string&page=0&page_size=0' \
  -H 'Accept: application/json'
```

`GET /v{version}/reports/{report_type}`

Get's the report.

<h3 id="gets-the-daily-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|report_type|path|string|true|Report Type Id (i.e Daily, Monthly, Annual)|
|sites|query|string|true|Comma separated list of site Ids.|
|start_date|query|string|true|The start date of the report in the format ddmmyyyy (i.e 31012016)|
|end_date|query|string|true|The end date of the report in the format ddmmyyyy (i.e 31012016)|
|page|query|integer(int32)|true|The page offset to return.|
|page_size|query|integer(int32)|true|The number of rows to return.|
|reportSubTypeId|query|integer(int32)|false|none|
|version|path|string|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="gets-the-daily-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Object](#schemaobject)|
|400|Bad Request|Bad request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the daily report.

> Code samples

```bash
curl 'https://example.com/vstring/reports/string/to/string/string?sites=string&page=0&page_size=0' \
  -H 'Accept: application/json'
```

`GET /v{version}/reports/{start_date}/to/{end_date}/{report_type}`

Get's the report.

<h3 id="gets-the-daily-report-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|report_type|path|string|true|Report Type Id (i.e Daily, Monthly, Annual)|
|sites|query|string|true|Comma separated list of site Ids.|
|start_date|path|string|true|The start date of the report in the format ddmmyyyy (i.e 31012016)|
|end_date|path|string|true|The end date of the report in the format ddmmyyyy (i.e 31012016)|
|page|query|integer(int32)|true|The page offset to return.|
|page_size|query|integer(int32)|true|The number of rows to return.|
|reportSubTypeId|query|integer(int32)|false|none|
|version|path|string|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="gets-the-daily-report-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Object](#schemaobject)|
|400|Bad Request|Bad request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="highways-england-api-sites">Sites</h1>

## Get a list of sites

<a id="opIdSites_Index"></a>

> Code samples

```bash
curl https://example.com/vstring/sites \
  -H 'Accept: application/json'
```

`GET /v{version}/sites`

<h3 id="get-a-list-of-sites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|version|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "row_count": 0,
  "sites": [
    {
      "Description": "string",
      "Id": "string",
      "Latitude": 0,
      "Longitude": 0,
      "Name": "string",
      "Status": "string"
    }
  ]
}
```

<h3 id="get-a-list-of-sites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SiteResponse](#schemasiteresponse)|
|400|Bad Request|Bad request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get selected sites

> Code samples

```bash
curl https://example.com/vstring/sites/string \
  -H 'Accept: application/json'
```

`GET /v{version}/sites/{site_Ids}`

<h3 id="get-selected-sites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_Ids|path|string|true|site id|
|version|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "row_count": 0,
  "sites": [
    {
      "Description": "string",
      "Id": "string",
      "Latitude": 0,
      "Longitude": 0,
      "Name": "string",
      "Status": "string"
    }
  ]
}
```

<h3 id="get-selected-sites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SiteResponse](#schemasiteresponse)|
|400|Bad Request|Bad request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="highways-england-api-sitetypes">SiteTypes</h1>

## Return list of site types

<a id="opIdSiteTypes_Index"></a>

> Code samples

```bash
curl https://example.com/vstring/sitetypes \
  -H 'Accept: application/json'
```

`GET /v{version}/sitetypes`

<h3 id="return-list-of-site-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|version|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "row_count": 0,
  "sitetypes": [
    {
      "Description": "string",
      "Id": "string"
    }
  ]
}
```

<h3 id="return-list-of-site-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SiteTypeResponse](#schemasitetyperesponse)|
|400|Bad Request|Bad request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns the layer metadata for the LayerId specified.

<a id="opIdSiteTypes_GetSitesForPublicFacingAPI"></a>

> Code samples

```bash
curl https://example.com/vstring/sitetypes/0/sites \
  -H 'Accept: application/json'
```

`GET /v{version}/sitetypes/{siteType_Id}/sites`

<h3 id="returns-the-layer-metadata-for-the-layerid-specified-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteType_Id|path|integer(int32)|true|1 = MIDAS, 2 = TAME, 3 = TMU, 4 = TRADS Legacy|
|version|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "Sites": [
    {
      "Active": [
        true
      ],
      "Description": [
        "string"
      ],
      "Id": [
        "string"
      ],
      "Lattitude": [
        0
      ],
      "Longitude": [
        0
      ],
      "SiteId": [
        "string"
      ]
    }
  ]
}
```

<h3 id="returns-the-layer-metadata-for-the-layerid-specified-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[SiteTypeLayer](#schemasitetypelayer)|
|400|Bad Request|Bad request|None|
|404|Not Found|Layer not found|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Area">Area</h2>
<!-- backwards compatibility -->
<a id="schemaarea"></a>
<a id="schema_Area"></a>
<a id="tocSarea"></a>
<a id="tocsarea"></a>

```json
{
  "Description": "string",
  "Id": "string",
  "Name": "string",
  "XLatitude": "string",
  "XLongitude": "string",
  "YLatitude": "string",
  "YLongitude": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|string|true|none|none|
|Id|string|false|none|none|
|Name|string|true|none|none|
|XLatitude|string|true|none|none|
|XLongitude|string|true|none|none|
|YLatitude|string|true|none|none|
|YLongitude|string|true|none|none|

<h2 id="tocS_AreaResponse">AreaResponse</h2>
<!-- backwards compatibility -->
<a id="schemaarearesponse"></a>
<a id="schema_AreaResponse"></a>
<a id="tocSarearesponse"></a>
<a id="tocsarearesponse"></a>

```json
{
  "areas": [
    {
      "Description": "string",
      "Id": "string",
      "Name": "string",
      "XLatitude": "string",
      "XLongitude": "string",
      "YLatitude": "string",
      "YLongitude": "string"
    }
  ],
  "row_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|areas|[[Area](#schemaarea)]|false|none|none|
|row_count|integer(int32)|false|none|none|

<h2 id="tocS_DailyQualityResponse">DailyQualityResponse</h2>
<!-- backwards compatibility -->
<a id="schemadailyqualityresponse"></a>
<a id="schema_DailyQualityResponse"></a>
<a id="tocSdailyqualityresponse"></a>
<a id="tocsdailyqualityresponse"></a>

```json
{
  "Qualities": [
    {
      "Date": "1970-01-01T00:00:00Z",
      "Quality": 0
    }
  ],
  "row_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Qualities|[[Qualities](#schemaqualities)]|false|none|none|
|row_count|integer(int32)|false|none|none|

<h2 id="tocS_Object">Object</h2>
<!-- backwards compatibility -->
<a id="schemaobject"></a>
<a id="schema_Object"></a>
<a id="tocSobject"></a>
<a id="tocsobject"></a>

```json
{}
```

<h2 id="tocS_OverallQualityResponse">OverallQualityResponse</h2>
<!-- backwards compatibility -->
<a id="schemaoverallqualityresponse"></a>
<a id="schema_OverallQualityResponse"></a>
<a id="tocSoverallqualityresponse"></a>
<a id="tocsoverallqualityresponse"></a>

```json
{
  "data_quality": 0,
  "end_date": "string",
  "row_count": 0,
  "sites": "string",
  "start_date": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data_quality|integer(int32)|false|none|none|
|end_date|string|false|none|none|
|row_count|integer(int32)|false|none|none|
|sites|string|false|none|none|
|start_date|string|false|none|none|

<h2 id="tocS_Qualities">Qualities</h2>
<!-- backwards compatibility -->
<a id="schemaqualities"></a>
<a id="schema_Qualities"></a>
<a id="tocSqualities"></a>
<a id="tocsqualities"></a>

```json
{
  "Date": "1970-01-01T00:00:00Z",
  "Quality": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Date|string(date-time)|false|none|none|
|Quality|integer(int32)|false|none|none|

<h2 id="tocS_SiteResponse">SiteResponse</h2>
<!-- backwards compatibility -->
<a id="schemasiteresponse"></a>
<a id="schema_SiteResponse"></a>
<a id="tocSsiteresponse"></a>
<a id="tocssiteresponse"></a>

```json
{
  "row_count": 0,
  "sites": [
    {
      "Description": "string",
      "Id": "string",
      "Latitude": 0,
      "Longitude": 0,
      "Name": "string",
      "Status": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|row_count|integer(int32)|false|none|none|
|sites|[[SiteResult](#schemasiteresult)]|false|none|none|

<h2 id="tocS_SiteResult">SiteResult</h2>
<!-- backwards compatibility -->
<a id="schemasiteresult"></a>
<a id="schema_SiteResult"></a>
<a id="tocSsiteresult"></a>
<a id="tocssiteresult"></a>

```json
{
  "Description": "string",
  "Id": "string",
  "Latitude": 0,
  "Longitude": 0,
  "Name": "string",
  "Status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|string|false|none|none|
|Id|string|false|none|none|
|Latitude|number(double)|false|none|none|
|Longitude|number(double)|false|none|none|
|Name|string|false|none|none|
|Status|string|false|none|none|

<h2 id="tocS_SiteType">SiteType</h2>
<!-- backwards compatibility -->
<a id="schemasitetype"></a>
<a id="schema_SiteType"></a>
<a id="tocSsitetype"></a>
<a id="tocssitetype"></a>

```json
{
  "Description": "string",
  "Id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|string|false|none|none|
|Id|string|false|none|none|

<h2 id="tocS_SiteTypeLayer">SiteTypeLayer</h2>
<!-- backwards compatibility -->
<a id="schemasitetypelayer"></a>
<a id="schema_SiteTypeLayer"></a>
<a id="tocSsitetypelayer"></a>
<a id="tocssitetypelayer"></a>

```json
{
  "Sites": [
    {
      "Active": [
        true
      ],
      "Description": [
        "string"
      ],
      "Id": [
        "string"
      ],
      "Lattitude": [
        0
      ],
      "Longitude": [
        0
      ],
      "SiteId": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Sites|[[Sites](#schemasites)]|false|none|none|

<h2 id="tocS_SiteTypeResponse">SiteTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemasitetyperesponse"></a>
<a id="schema_SiteTypeResponse"></a>
<a id="tocSsitetyperesponse"></a>
<a id="tocssitetyperesponse"></a>

```json
{
  "row_count": 0,
  "sitetypes": [
    {
      "Description": "string",
      "Id": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|row_count|integer(int32)|false|none|none|
|sitetypes|[[SiteType](#schemasitetype)]|false|none|none|

<h2 id="tocS_Sites">Sites</h2>
<!-- backwards compatibility -->
<a id="schemasites"></a>
<a id="schema_Sites"></a>
<a id="tocSsites"></a>
<a id="tocssites"></a>

```json
{
  "Active": [
    true
  ],
  "Description": [
    "string"
  ],
  "Id": [
    "string"
  ],
  "Lattitude": [
    0
  ],
  "Longitude": [
    0
  ],
  "SiteId": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Active|[boolean]|false|none|none|
|Description|[string]|false|none|none|
|Id|[string]|false|none|none|
|Lattitude|[number(double)]|false|none|none|
|Longitude|[number(double)]|false|none|none|
|SiteId|[string]|false|none|none|
