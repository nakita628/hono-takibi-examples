<h1 id="domains-index-api">Domains-Index API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Domains-Index database powered API

Base URLs:

* <a href="https://api.apis.guru/v1">https://api.apis.guru/v1</a>

<h1 id="domains-index-api-info">info/</h1>

TLD Statistics

## get_api_info_item

<a id="opIdget_api_info_item"></a>

> Code samples

```bash
curl https://example.com/info/api \
  -H 'Accept: application/json'
```

`GET /info/api`

<h3 id="getapiinfoitem-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "customer_email": "string",
  "customer_name": "string",
  "expires": "string",
  "item_id": "string",
  "item_name": "string",
  "license": "string",
  "license_limit": "string",
  "price_id": "string",
  "success": "string"
}
```

<h3 id="getapiinfoitem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[API_Key_Info](#schemaapi_key_info)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns overall stagtistics

<a id="opIdget_statistics_collection"></a>

> Code samples

```bash
curl https://example.com/info/stat/ \
  -H 'Accept: application/json'
```

`GET /info/stat/`

<h3 id="returns-overall-stagtistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|string|false|Search page to request|
|limit|query|integer|false|Results per page|

> Example responses

> 200 Response

```json
[
  {
    "next_page": "string",
    "time": "string",
    "total": 0,
    "statistics": [
      {
        "date": "1970-01-01T00:00:00Z",
        "dec": 0,
        "inc": 0,
        "total": 0,
        "zone": "string"
      }
    ]
  }
]
```

<h3 id="returns-overall-stagtistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="returns-overall-stagtistics-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Zone_stats](#schemazone_stats)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns statistics for specific zone

<a id="opIdget_statistics_item"></a>

> Code samples

```bash
curl https://example.com/info/stat/string \
  -H 'Accept: application/json'
```

`GET /info/stat/{zone}`

<h3 id="returns-statistics-for-specific-zone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|string|false|Search page to request|
|limit|query|integer|false|Results per page|
|zone|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "next_page": "string",
  "time": "string",
  "total": 0,
  "statistics": [
    {
      "date": "1970-01-01T00:00:00Z",
      "dec": 0,
      "inc": 0,
      "total": 0,
      "zone": "string"
    }
  ]
}
```

<h3 id="returns-statistics-for-specific-zone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Zone_stats](#schemazone_stats)|
|404|Not Found|Zone not found.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Returns overall Tld info

> Code samples

```bash
curl https://example.com/info/tld/ \
  -H 'Accept: application/json'
```

`GET /info/tld/`

> Example responses

> 200 Response

```json
[
  {
    "description": [
      "string"
    ],
    "in_bundles": [
      "string"
    ],
    "includes": [
      "string"
    ],
    "type": "string",
    "zone": "string"
  }
]
```

<h3 id="returns-overall-tld-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="returns-overall-tld-info-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Zone_info](#schemazone_info)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns statistics for specific zone

> Code samples

```bash
curl https://example.com/info/tld/string \
  -H 'Accept: application/json'
```

`GET /info/tld/{zone}`

<h3 id="returns-statistics-for-specific-zone-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|string|false|Search page to request|
|limit|query|integer|false|Results per page|
|zone|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "description": [
    "string"
  ],
  "in_bundles": [
    "string"
  ],
  "includes": [
    "string"
  ],
  "type": "string",
  "zone": "string"
}
```

<h3 id="returns-statistics-for-specific-zone-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Zone_info](#schemazone_info)|
|404|Not Found|Zone not found.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="domains-index-api-domains">domains/</h1>

Domains Database

## Domains Database Search

<a id="opIdget_search_domain_item"></a>

> Code samples

```bash
curl https://example.com/domains/search \
  -H 'Accept: application/json'
```

`GET /domains/search`

<h3 id="domains-database-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|API key|
|date|query|string|false|Request date|
|page|query|string|false|Search page to request|
|limit|query|integer|false|Results per page|
|domain|query|string|false|Domain includes|
|zone|query|string|false|In Zone|
|country|query|string|false|Hosting Country|
|isDead|query|boolean|false|Dead or Not, default not|
|A|query|string|false|A record includes|
|NS|query|string|false|NS record includes|
|CNAME|query|string|false|CNAME record includes|
|MX|query|string|false|MX record includes|
|TXT|query|string|false|TXT record includes|

> Example responses

> 200 Response

```json
{
  "next_page": "string",
  "time": "string",
  "total": 0,
  "domains": [
    {
      "A": [
        "string"
      ],
      "CNAME": [
        "string"
      ],
      "MX": [
        {
          "exchange": "string",
          "priority": 0
        }
      ],
      "NS": [
        "string"
      ],
      "TXT": [
        "string"
      ],
      "country": "string",
      "create_date": "1970-01-01T00:00:00Z",
      "domain": "string",
      "isDead": "string",
      "update_date": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="domains-database-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Search_Results](#schemasearch_results)|
|403|Forbidden|api_key is not valid|None|
|404|Not Found|Results not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get TLD records

<a id="opIdget_tld_domain_item"></a>

> Code samples

```bash
curl https://example.com/domains/tld/string \
  -H 'Accept: application/json'
```

`GET /domains/tld/{zone_id}`

<h3 id="get-tld-records-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|API key|
|date|query|string|false|Request date|
|page|query|string|false|Search page to request|
|limit|query|integer|false|Results per page|
|domain|query|string|false|Domain includes|
|country|query|string|false|Hosting Country|
|isDead|query|boolean|false|Dead or Not, default not|
|A|query|string|false|A record includes|
|NS|query|string|false|NS record includes|
|CNAME|query|string|false|CNAME record includes|
|MX|query|string|false|MX record includes|
|TXT|query|string|false|TXT record includes|
|zone_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "next_page": "string",
  "time": "string",
  "total": 0,
  "domains": [
    {
      "A": [
        "string"
      ],
      "CNAME": [
        "string"
      ],
      "MX": [
        {
          "exchange": "string",
          "priority": 0
        }
      ],
      "NS": [
        "string"
      ],
      "TXT": [
        "string"
      ],
      "country": "string",
      "create_date": "1970-01-01T00:00:00Z",
      "domain": "string",
      "isDead": "string",
      "update_date": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="get-tld-records-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Search_Results](#schemasearch_results)|
|403|Forbidden|No api_key or it's not valid|None|
|404|Not Found|Results not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Download Whole Dataset for TLD

> Code samples

```bash
curl https://example.com/domains/tld/string/download
```

`GET /domains/tld/{zone_id}/download`

<h3 id="download-whole-dataset-for-tld-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|API key|
|date|query|string|false|Request date|
|zone_id|path|string|true|none|

<h3 id="download-whole-dataset-for-tld-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|403|Forbidden|No api_key or it's not valid|None|
|404|Not Found|Results not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Domains Search for TLD

> Code samples

```bash
curl https://example.com/domains/tld/string/search \
  -H 'Accept: application/json'
```

`GET /domains/tld/{zone_id}/search`

<h3 id="domains-search-for-tld-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|API key|
|date|query|string|false|Request date|
|page|query|string|false|Search page to request|
|limit|query|integer|false|Results per page|
|domain|query|string|false|Domain includes|
|country|query|string|false|Hosting Country|
|isDead|query|boolean|false|Dead or Not, default not|
|A|query|string|false|A record includes|
|NS|query|string|false|NS record includes|
|CNAME|query|string|false|CNAME record includes|
|MX|query|string|false|MX record includes|
|TXT|query|string|false|TXT record includes|
|zone_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "next_page": "string",
  "time": "string",
  "total": 0,
  "domains": [
    {
      "A": [
        "string"
      ],
      "CNAME": [
        "string"
      ],
      "MX": [
        {
          "exchange": "string",
          "priority": 0
        }
      ],
      "NS": [
        "string"
      ],
      "TXT": [
        "string"
      ],
      "country": "string",
      "create_date": "1970-01-01T00:00:00Z",
      "domain": "string",
      "isDead": "string",
      "update_date": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="domains-search-for-tld-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Search_Results](#schemasearch_results)|
|403|Forbidden|No api_key or it's not valid|None|
|404|Not Found|Results not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get added domains, latest if date not specified

> Code samples

```bash
curl https://example.com/domains/updates/added \
  -H 'Accept: application/json'
```

`GET /domains/updates/added`

<h3 id="get-added-domains-latest-if-date-not-specified-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|API key|
|date|query|string|false|Request date|
|page|query|string|false|Search page to request|
|limit|query|integer|false|Results per page|

> Example responses

> 200 Response

```json
{
  "next_page": "string",
  "time": "string",
  "total": 0,
  "domains": [
    {
      "A": [
        "string"
      ],
      "CNAME": [
        "string"
      ],
      "MX": [
        {
          "exchange": "string",
          "priority": 0
        }
      ],
      "NS": [
        "string"
      ],
      "TXT": [
        "string"
      ],
      "country": "string",
      "create_date": "1970-01-01T00:00:00Z",
      "domain": "string",
      "isDead": "string",
      "update_date": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="get-added-domains-latest-if-date-not-specified-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Search_Results](#schemasearch_results)|
|403|Forbidden|No api_key or it's not valid|None|
|404|Not Found|Results not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Download added domains, latest if date not specified

> Code samples

```bash
curl https://example.com/domains/updates/added/download
```

`GET /domains/updates/added/download`

<h3 id="download-added-domains-latest-if-date-not-specified-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|API key|
|date|query|string|false|Request date|

<h3 id="download-added-domains-latest-if-date-not-specified-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|403|Forbidden|No api_key or it's not valid|None|
|404|Not Found|Results not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get deleted domains, latest if date not specified

> Code samples

```bash
curl https://example.com/domains/updates/deleted \
  -H 'Accept: application/json'
```

`GET /domains/updates/deleted`

<h3 id="get-deleted-domains-latest-if-date-not-specified-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|API key|
|date|query|string|false|Request date|
|page|query|string|false|Search page to request|
|limit|query|integer|false|Results per page|

> Example responses

> 200 Response

```json
{
  "next_page": "string",
  "time": "string",
  "total": 0,
  "domains": [
    {
      "A": [
        "string"
      ],
      "CNAME": [
        "string"
      ],
      "MX": [
        {
          "exchange": "string",
          "priority": 0
        }
      ],
      "NS": [
        "string"
      ],
      "TXT": [
        "string"
      ],
      "country": "string",
      "create_date": "1970-01-01T00:00:00Z",
      "domain": "string",
      "isDead": "string",
      "update_date": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="get-deleted-domains-latest-if-date-not-specified-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Search_Results](#schemasearch_results)|
|403|Forbidden|No api_key or it's not valid|None|
|404|Not Found|Results not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Download deleted domains, latest if date not specified

> Code samples

```bash
curl https://example.com/domains/updates/deleted/download
```

`GET /domains/updates/deleted/download`

<h3 id="download-deleted-domains-latest-if-date-not-specified-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|API key|
|date|query|string|false|Request date|

<h3 id="download-deleted-domains-latest-if-date-not-specified-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|403|Forbidden|No api_key or it's not valid|None|
|404|Not Found|Results not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## List of updates

> Code samples

```bash
curl https://example.com/domains/updates/list \
  -H 'Accept: application/json'
```

`GET /domains/updates/list`

<h3 id="list-of-updates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api_key|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "added": "string",
  "added_download": "string",
  "date": "string",
  "deleted": "string",
  "deleted_download": "string"
}
```

<h3 id="list-of-updates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Update_model](#schemaupdate_model)|
|403|Forbidden|No api_key or it's not valid|None|
|404|Not Found|Results not found|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_API_Key_Info">API_Key_Info</h2>
<!-- backwards compatibility -->
<a id="schemaapi_key_info"></a>
<a id="schema_API_Key_Info"></a>
<a id="tocSapi_key_info"></a>
<a id="tocsapi_key_info"></a>

```json
{
  "customer_email": "string",
  "customer_name": "string",
  "expires": "string",
  "item_id": "string",
  "item_name": "string",
  "license": "string",
  "license_limit": "string",
  "price_id": "string",
  "success": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customer_email|string|false|none|State|
|customer_name|string|false|none|State|
|expires|string|false|none|State|
|item_id|string|false|none|State|
|item_name|string|false|none|State|
|license|string|false|none|State|
|license_limit|string|false|none|State|
|price_id|string|false|none|State|
|success|string|false|none|State|

<h2 id="tocS_Domains">Domains</h2>
<!-- backwards compatibility -->
<a id="schemadomains"></a>
<a id="schema_Domains"></a>
<a id="tocSdomains"></a>
<a id="tocsdomains"></a>

```json
{
  "A": [
    "string"
  ],
  "CNAME": [
    "string"
  ],
  "MX": [
    {
      "exchange": "string",
      "priority": 0
    }
  ],
  "NS": [
    "string"
  ],
  "TXT": [
    "string"
  ],
  "country": "string",
  "create_date": "1970-01-01T00:00:00Z",
  "domain": "string",
  "isDead": "string",
  "update_date": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|A|[string]|false|none|none|
|CNAME|[string]|false|none|none|
|MX|[[MX_records](#schemamx_records)]|false|none|none|
|NS|[string]|false|none|none|
|TXT|[string]|false|none|none|
|country|string|false|none|Hosting Country|
|create_date|string(date-time)|false|none|Domain creation date|
|domain|string|false|none|Domain name|
|isDead|string|false|none|If Domain is Dead|
|update_date|string(date-time)|false|none|Domain last update date|

<h2 id="tocS_MX_records">MX_records</h2>
<!-- backwards compatibility -->
<a id="schemamx_records"></a>
<a id="schema_MX_records"></a>
<a id="tocSmx_records"></a>
<a id="tocsmx_records"></a>

```json
{
  "exchange": "string",
  "priority": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exchange|string|false|none|MX domain|
|priority|integer|false|none|none|

<h2 id="tocS_Response_Parameters">Response_Parameters</h2>
<!-- backwards compatibility -->
<a id="schemaresponse_parameters"></a>
<a id="schema_Response_Parameters"></a>
<a id="tocSresponse_parameters"></a>
<a id="tocsresponse_parameters"></a>

```json
{
  "next_page": "string",
  "time": "string",
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_page|string|false|none|Next page id|
|time|string|true|none|Time took|
|total|integer|false|none|Total days reported|

<h2 id="tocS_Search_Results">Search_Results</h2>
<!-- backwards compatibility -->
<a id="schemasearch_results"></a>
<a id="schema_Search_Results"></a>
<a id="tocSsearch_results"></a>
<a id="tocssearch_results"></a>

```json
{
  "next_page": "string",
  "time": "string",
  "total": 0,
  "domains": [
    {
      "A": [
        "string"
      ],
      "CNAME": [
        "string"
      ],
      "MX": [
        {
          "exchange": "string",
          "priority": 0
        }
      ],
      "NS": [
        "string"
      ],
      "TXT": [
        "string"
      ],
      "country": "string",
      "create_date": "1970-01-01T00:00:00Z",
      "domain": "string",
      "isDead": "string",
      "update_date": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_page|string|false|none|Next page id|
|time|string|true|none|Time took|
|total|integer|false|none|Total days reported|
|domains|[[Domains](#schemadomains)]|false|none|none|

<h2 id="tocS_Update_model">Update_model</h2>
<!-- backwards compatibility -->
<a id="schemaupdate_model"></a>
<a id="schema_Update_model"></a>
<a id="tocSupdate_model"></a>
<a id="tocsupdate_model"></a>

```json
{
  "added": "string",
  "added_download": "string",
  "date": "string",
  "deleted": "string",
  "deleted_download": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|added|string|false|none|Updates added list|
|added_download|string|false|none|Download link for added|
|date|string|false|none|Update date|
|deleted|string|false|none|Updates deleted list|
|deleted_download|string|false|none|Download link for deleted|

<h2 id="tocS_Zone_info">Zone_info</h2>
<!-- backwards compatibility -->
<a id="schemazone_info"></a>
<a id="schema_Zone_info"></a>
<a id="tocSzone_info"></a>
<a id="tocszone_info"></a>

```json
{
  "description": [
    "string"
  ],
  "in_bundles": [
    "string"
  ],
  "includes": [
    "string"
  ],
  "type": "string",
  "zone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|[string]|false|none|none|
|in_bundles|[string]|false|none|none|
|includes|[string]|false|none|none|
|type|string|true|none|TLD type|
|zone|string|true|none|TLD name|

<h2 id="tocS_Zone_statistics">Zone_statistics</h2>
<!-- backwards compatibility -->
<a id="schemazone_statistics"></a>
<a id="schema_Zone_statistics"></a>
<a id="tocSzone_statistics"></a>
<a id="tocszone_statistics"></a>

```json
{
  "date": "1970-01-01T00:00:00Z",
  "dec": 0,
  "inc": 0,
  "total": 0,
  "zone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string(date-time)|true|none|Report Date|
|dec|integer|true|none|Increase|
|inc|integer|true|none|Decrease|
|total|integer|true|none|Total number of records|
|zone|string|true|none|TLD name|

<h2 id="tocS_Zone_stats">Zone_stats</h2>
<!-- backwards compatibility -->
<a id="schemazone_stats"></a>
<a id="schema_Zone_stats"></a>
<a id="tocSzone_stats"></a>
<a id="tocszone_stats"></a>

```json
{
  "next_page": "string",
  "time": "string",
  "total": 0,
  "statistics": [
    {
      "date": "1970-01-01T00:00:00Z",
      "dec": 0,
      "inc": 0,
      "total": 0,
      "zone": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_page|string|false|none|Next page id|
|time|string|true|none|Time took|
|total|integer|false|none|Total days reported|
|statistics|[[Zone_statistics](#schemazone_statistics)]|false|none|none|
