<h1 id="canada-holidays-api">Canada Holidays API v1.8.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API lists all 31 public holidays for all 13 provinces and territories in Canada, including federal holidays.

Base URLs:

* <a href="https://canada-holidays.ca">https://canada-holidays.ca</a>

Email: <a href="mailto:paul@pcraig3.ca">Paul Craig</a> 
Web: <a href="https://canada-holidays.ca/api">Paul Craig</a> 
License: <a href="https://github.com/pcraig3/hols/blob/main/LICENSE">MIT</a>

<h1 id="canada-holidays-api-info">info</h1>

Get welcome message and links

## root

<a id="opIdRoot"></a>

> Code samples

```bash
curl https://example.com/api/v1 \
  -H 'Accept: application/json'
```

`GET /api/v1`

Returns a welcome message.

> Example responses

> 200 Response

```json
{
  "_links": {
    "holidays": {
      "href": "https://canada-holidays.ca/api/v1/holidays"
    },
    "provinces": {
      "href": "https://canada-holidays.ca/api/v1/provinces"
    },
    "self": {
      "href": "https://canada-holidays.ca/api/v1/"
    },
    "spec": {
      "href": "https://canada-holidays.ca/api/v1/spec"
    }
  },
  "message": "Hello / Bonjour! Welcome to the Canada Holidays API / Bienvenue dans l’API canadienne des jours fériés"
}
```

<h3 id="root-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="root-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|object|false|none|none|
|» holidays|object|false|none|none|
|» » href|string|false|none|Domain to get all holidays|
|» provinces|object|false|none|none|
|» » href|string|false|none|Domain to get all provinces|
|» self|object|false|none|none|
|» » href|string|false|none|Root domain|
|» spec|object|false|none|none|
|» » href|string|false|none|none|
|message|string|false|none|A welcome message|

<aside class="success">
This operation does not require authentication
</aside>

## Get JSON schema

<a id="opIdSpec"></a>

> Code samples

```bash
curl https://example.com/api/v1/spec
```

`GET /api/v1/spec`

Gets the schema for the JSON API as a yaml file.

<h3 id="get-json-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|content-type|string||text/yaml; charset=UTF-8|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="canada-holidays-api-holidays">holidays</h1>

Get holiday(s) with associated provinces

## Get all holidays

<a id="opIdHolidays"></a>

> Code samples

```bash
curl https://example.com/api/v1/holidays \
  -H 'Accept: application/json'
```

`GET /api/v1/holidays`

Returns Canadian public holidays. Each holiday lists the regions that observe it.

<h3 id="get-all-holidays-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|false|A calendar year|
|federal|query|string|false|A boolean parameter. If true or 1, will return only federal holidays. If false or 0, will return no federal holidays.|
|optional|query|string|false|A boolean parameter. If false or 0 (default), will return only legislated holidays. If true or 1, will return optional holidays from Alberta and BC.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|federal|1|
|federal|0|
|federal|true|
|federal|false|
|optional|1|
|optional|0|
|optional|true|
|optional|false|

> Example responses

> 200 Response

```json
{
  "holidays": [
    {
      "date": "2023-01-01",
      "federal": 1,
      "id": 1,
      "nameEn": "New Year’s Day",
      "nameFr": "Jour de l’An",
      "observedDate": "2023-01-02",
      "provinces": [
        {
          "id": "AB",
          "nameEn": "Alberta",
          "nameFr": "Alberta",
          "sourceEn": "General holidays in Alberta",
          "sourceLink": "https://www.alberta.ca/alberta-general-holidays.aspx#jumplinks-1"
        },
        {
          "id": "BC",
          "nameEn": "British Columbia",
          "nameFr": "Colombie-Britannique",
          "sourceEn": "Statutory Holidays in British Columbia",
          "sourceLink": "https://www2.gov.bc.ca/gov/content/employment-business/employment-standards-advice/employment-standards/statutory-holidays#body"
        },
        {
          "id": "MB",
          "nameEn": "Manitoba",
          "nameFr": "Manitoba",
          "sourceEn": "General holidays in Manitoba",
          "sourceLink": "https://www.gov.mb.ca/labour/standards/doc,gen-holidays-after-april-30-07,factsheet.html#q12"
        },
        {
          "id": "NB",
          "nameEn": "New Brunswick",
          "nameFr": "Nouveau-Brunswick",
          "sourceEn": "10 prescribed days of rest",
          "sourceLink": "https://www2.gnb.ca/content/gnb/en/departments/elg/local_government/content/governance/content/days_of_rest_act/faq.html#2"
        },
        {
          "id": "NL",
          "nameEn": "Newfoundland and Labrador",
          "nameFr": "Terre-Neuve-et-Labrador",
          "sourceEn": "Public holidays in Newfoundland",
          "sourceLink": "https://gist.github.com/pcraig3/81dff348ddf52777c9f918c3032531bd"
        },
        {
          "id": "NT",
          "nameEn": "Northwest Territories",
          "nameFr": "Territoires du Nord-Ouest",
          "sourceEn": "Employment Standards, Northwest Territories",
          "sourceLink": "https://www.ece.gov.nt.ca/en/services/employment-standards/frequently-asked-questions#Statutory%20Holidays"
        },
        {
          "id": "NS",
          "nameEn": "Nova Scotia",
          "nameFr": "Nouvelle-Écosse",
          "sourceEn": "Paid holidays in Nova Scotia",
          "sourceLink": "https://novascotia.ca/lae/employmentrights/holidaychart.asp"
        },
        {
          "id": "NU",
          "nameEn": "Nunavut",
          "nameFr": "Nunavut",
          "sourceEn": "Nunavut General Holidays",
          "sourceLink": "https://nu-lsco.ca/faq-s?tmpl=component&faqid=11"
        },
        {
          "id": "ON",
          "nameEn": "Ontario",
          "nameFr": "Ontario",
          "sourceEn": "Ontario Public holidays",
          "sourceLink": "https://www.ontario.ca/document/your-guide-employment-standards-act-0/public-holidays"
        },
        {
          "id": "PE",
          "nameEn": "Prince Edward Island",
          "nameFr": "Île-du-Prince-Édouard",
          "sourceEn": "PEI Paid Holidays",
          "sourceLink": "https://www.princeedwardisland.ca/en/information/economic-growth-tourism-and-culture/paid-holidays"
        },
        {
          "id": "QC",
          "nameEn": "Quebec",
          "nameFr": "Québec",
          "sourceEn": "Jours fériés, chômés et payés",
          "sourceLink": "https://www2.gouv.qc.ca/entreprises/portail/quebec/ressourcesh?lang=fr&g=ressourcesh&sg=personnel&t=o&e=2318829344:3908165687"
        },
        {
          "id": "SK",
          "nameEn": "Saskatchewan",
          "nameFr": "Saskatchewan",
          "sourceEn": "Saskatchewan Public Holidays",
          "sourceLink": "https://www.saskatchewan.ca/business/employment-standards/public-statutory-holidays/list-of-saskatchewan-public-holidays"
        },
        {
          "id": "YT",
          "nameEn": "Yukon",
          "nameFr": "Yukon",
          "sourceEn": "Yukon statutory holiday dates",
          "sourceLink": "https://yukon.ca/en/doing-business/employer-responsibilities/find-yukon-statutory-holiday"
        }
      ]
    },
    {
      "date": "2023-02-20",
      "federal": 0,
      "id": 2,
      "nameEn": "Louis Riel Day",
      "nameFr": "Journée Louis Riel",
      "observedDate": "2023-02-20",
      "provinces": [
        {
          "id": "MB",
          "nameEn": "Manitoba",
          "nameFr": "Manitoba",
          "sourceEn": "General holidays in Manitoba",
          "sourceLink": "https://www.gov.mb.ca/labour/standards/doc,gen-holidays-after-april-30-07,factsheet.html#q12"
        }
      ]
    }
  ]
}
```

<h3 id="get-all-holidays-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-all-holidays-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|holidays|[[Holiday](#schemaholiday)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a holiday by id

<a id="opIdHoliday"></a>

> Code samples

```bash
curl https://example.com/api/v1/holidays/2 \
  -H 'Accept: application/json'
```

`GET /api/v1/holidays/{holidayId}`

Returns one Canadian statutory holiday by integer id. Returns a 404 response for invalid ids.

<h3 id="get-a-holiday-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|false|A calendar year|
|optional|query|string|false|A boolean parameter. If false or 0 (default), will return provinces for which this is a legislated holiday. If true or 1, will return provinces which optionally celebrate this holiday.|
|holidayId|path|integer|true|Primary key for a holiday|

#### Enumerated Values

|Parameter|Value|
|---|---|
|optional|1|
|optional|0|
|optional|true|
|optional|false|

> Example responses

> 200 Response

```json
{
  "holiday": {
    "date": "2023-12-26",
    "federal": 1,
    "id": 32,
    "nameEn": "Boxing Day",
    "nameFr": "Lendemain de Noël",
    "observedDate": "2023-12-26",
    "provinces": [
      {
        "id": "NL",
        "nameEn": "Newfoundland and Labrador",
        "nameFr": "Terre-Neuve-et-Labrador",
        "sourceEn": "Public holidays in Newfoundland",
        "sourceLink": "https://gist.github.com/pcraig3/81dff348ddf52777c9f918c3032531bd"
      },
      {
        "id": "ON",
        "nameEn": "Ontario",
        "nameFr": "Ontario",
        "sourceEn": "Ontario Public holidays",
        "sourceLink": "https://www.ontario.ca/document/your-guide-employment-standards-act-0/public-holidays"
      }
    ]
  }
}
```

> 400 Response

```json
{
  "error": {
    "message": "Error: request.params.holidayId should be <= 31",
    "status": 400,
    "timestamp": "2020-04-28T03:59:56.605Z"
  }
}
```

<h3 id="get-a-holiday-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="get-a-holiday-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|holiday|[Holiday](#schemaholiday)|false|none|A Canadian holiday. Includes a name, the literal date of the holiday, the observed date of the holiday (ie, accommodating for weekends), and a list of regions that observe this holiday.|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[Error](#schemaerror)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="canada-holidays-api-provinces">provinces</h1>

Get province(s) with associated holidays

## Get all provinces

<a id="opIdProvinces"></a>

> Code samples

```bash
curl https://example.com/api/v1/provinces \
  -H 'Accept: application/json'
```

`GET /api/v1/provinces`

Returns provinces and territories in Canada. Each province or territory lists its associated holidays.

<h3 id="get-all-provinces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|false|A calendar year|
|optional|query|string|false|A boolean parameter. If false or 0 (default), will return only legislated holidays. If true or 1, will return optional holidays from Alberta and BC.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|optional|1|
|optional|0|
|optional|true|
|optional|false|

> Example responses

> 200 Response

```json
{
  "provinces": [
    {
      "holidays": [
        {
          "date": "2023-01-01",
          "federal": 1,
          "id": 1,
          "nameEn": "New Year’s Day",
          "nameFr": "Jour de l’An",
          "observedDate": "2023-01-02"
        },
        {
          "date": "2023-02-20",
          "federal": 0,
          "id": 4,
          "nameEn": "Family Day",
          "nameFr": "Fête de la famille",
          "observedDate": "2023-02-20"
        }
      ],
      "id": "AB",
      "nameEn": "Alberta",
      "nameFr": "Alberta",
      "nextHoliday": {
        "date": "2023-01-01",
        "federal": 1,
        "id": 1,
        "nameEn": "New Year’s Day",
        "nameFr": "Jour de l’An",
        "observedDate": "2023-01-02"
      },
      "sourceEn": "General holidays in Alberta",
      "sourceLink": "https://www.alberta.ca/alberta-general-holidays.aspx#jumplinks-1"
    },
    {
      "holidays": [
        {
          "date": "2023-01-01",
          "federal": 1,
          "id": 1,
          "nameEn": "New Year’s Day",
          "nameFr": "Jour de l’An",
          "observedDate": "2023-01-02"
        },
        {
          "date": "2023-02-20",
          "federal": 0,
          "id": 4,
          "nameEn": "Family Day",
          "nameFr": "Fête de la famille",
          "observedDate": "2023-02-20"
        }
      ],
      "id": "BC",
      "nameEn": "British Columbia",
      "nameFr": "Colombie-Britannique",
      "nextHoliday": {
        "date": "2023-01-01",
        "federal": 1,
        "id": 1,
        "nameEn": "New Year’s Day",
        "nameFr": "Jour de l’An",
        "observedDate": "2023-01-02"
      },
      "sourceEn": "Statutory Holidays in British Columbia",
      "sourceLink": "https://www2.gov.bc.ca/gov/content/employment-business/employment-standards-advice/employment-standards/statutory-holidays#body"
    }
  ]
}
```

<h3 id="get-all-provinces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-all-provinces-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|provinces|[[Province](#schemaprovince)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a province or territory by abbreviation

<a id="opIdProvince"></a>

> Code samples

```bash
curl https://example.com/api/v1/provinces/MB \
  -H 'Accept: application/json'
```

`GET /api/v1/provinces/{provinceId}`

Returns a Canadian province or territory with its associated holidays. Returns a 404 response for invalid abbreviations.

<h3 id="get-a-province-or-territory-by-abbreviation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|query|integer|false|A calendar year|
|optional|query|string|false|A boolean parameter (AB and BC only). If false or 0 (default), will return only legislated holidays. If true or 1, will return optional holidays from Alberta and BC.|
|provinceId|path|string|true|A Canadian province abbreviation|

#### Enumerated Values

|Parameter|Value|
|---|---|
|optional|1|
|optional|0|
|optional|true|
|optional|false|
|provinceId|AB|
|provinceId|BC|
|provinceId|MB|
|provinceId|NB|
|provinceId|NL|
|provinceId|NS|
|provinceId|NT|
|provinceId|NU|
|provinceId|ON|
|provinceId|PE|
|provinceId|QC|
|provinceId|SK|
|provinceId|YT|

> Example responses

> 200 Response

```json
{
  "province": {
    "holidays": [
      {
        "date": "2023-01-01",
        "federal": 1,
        "id": 1,
        "nameEn": "New Year’s Day",
        "nameFr": "Jour de l’An",
        "observedDate": "2023-01-02"
      },
      {
        "date": "2023-02-20",
        "federal": 0,
        "id": 2,
        "nameEn": "Louis Riel Day",
        "nameFr": "Journée Louis Riel",
        "observedDate": "2023-02-20"
      },
      {
        "date": "2023-04-07",
        "federal": 1,
        "id": 7,
        "nameEn": "Good Friday",
        "nameFr": "Vendredi saint",
        "observedDate": "2023-04-07"
      },
      {
        "date": "2023-05-22",
        "federal": 1,
        "id": 11,
        "nameEn": "Victoria Day",
        "nameFr": "Fête de la Reine",
        "observedDate": "2023-05-22"
      },
      {
        "date": "2023-07-01",
        "federal": 1,
        "id": 15,
        "nameEn": "Canada Day",
        "nameFr": "Fête du Canada",
        "observedDate": "2023-07-03"
      },
      {
        "date": "2023-09-04",
        "federal": 1,
        "id": 26,
        "nameEn": "Labour Day",
        "nameFr": "Fête du travail",
        "observedDate": "2023-09-04"
      },
      {
        "date": "2023-10-09",
        "federal": 1,
        "id": 29,
        "nameEn": "Thanksgiving",
        "nameFr": "Action de grâce",
        "observedDate": "2023-10-09"
      },
      {
        "date": "2023-12-25",
        "federal": 1,
        "id": 31,
        "nameEn": "Christmas Day",
        "nameFr": "Noël",
        "observedDate": "2023-12-25"
      }
    ],
    "id": "MB",
    "nameEn": "Manitoba",
    "nameFr": "Manitoba",
    "nextHoliday": {
      "date": "2023-01-01",
      "federal": 1,
      "id": 1,
      "nameEn": "New Year’s Day",
      "nameFr": "Jour de l’An",
      "observedDate": "2023-01-02"
    },
    "sourceEn": "General holidays in Manitoba",
    "sourceLink": "https://www.gov.mb.ca/labour/standards/doc,gen-holidays-after-april-30-07,factsheet.html#q12"
  }
}
```

> 400 Response

```json
{
  "error": {
    "message": "Error: request.params.provinceId should be equal to one of the allowed values: AB, BC, MB, NB, NL, NS, NT, NU, ON, PE, QC, SK, YT",
    "status": 400,
    "timestamp": "2020-04-28T04:02:38.813Z"
  }
}
```

<h3 id="get-a-province-or-territory-by-abbreviation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|

<h3 id="get-a-province-or-territory-by-abbreviation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|province|[Province](#schemaprovince)|false|none|A Canadian province or territory |

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[Error](#schemaerror)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "message": "Error: No holiday with id “100”",
  "status": 404,
  "timestamp": "2020-04-27T05:41:10.710Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|An error message|
|status|integer|false|none|An HTTP status code|
|timestamp|string(date-time)|false|none|A UTC ISO timestamp|

<h2 id="tocS_Holiday">Holiday</h2>
<!-- backwards compatibility -->
<a id="schemaholiday"></a>
<a id="schema_Holiday"></a>
<a id="tocSholiday"></a>
<a id="tocsholiday"></a>

```json
{
  "date": "2020-12-26",
  "federal": 1,
  "id": 2,
  "nameEn": "Louis Riel Day",
  "nameFr": "Journée Louis Riel",
  "observedDate": "2020-12-28",
  "optional": 1,
  "provinces": [
    {
      "id": "MB",
      "nameEn": "Manitoba",
      "nameFr": "Manitoba",
      "nextHoliday": {},
      "optional": 1,
      "provinces": [
        {}
      ],
      "sourceEn": "What are the general holidays in Manitoba?",
      "sourceLink": "https://www.gov.mb.ca/labour/standards/doc,gen-holidays-after-april-30-07,factsheet.html#q12"
    }
  ]
}
```

A Canadian holiday. Includes a name, the literal date of the holiday, the observed date of the holiday (ie, accommodating for weekends), and a list of regions that observe this holiday.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string(date)|true|none|ISO date: the literal date of the holiday|
|federal|integer|true|none|Whether this holiday is observed by federally-regulated industries.|
|id|integer|true|none|Primary key for a holiday|
|nameEn|string|true|none|English name|
|nameFr|string|true|none|French name|
|observedDate|string(date)|true|none|ISO date: when this holiday is observed|
|optional|integer|false|none|Whether this is a province-wide statutory holiday, or one that is optional for employers.|
|provinces|[[Province](#schemaprovince)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|federal|1|
|federal|0|
|optional|1|

<h2 id="tocS_Province">Province</h2>
<!-- backwards compatibility -->
<a id="schemaprovince"></a>
<a id="schema_Province"></a>
<a id="tocSprovince"></a>
<a id="tocsprovince"></a>

```json
{
  "id": "MB",
  "nameEn": "Manitoba",
  "nameFr": "Manitoba",
  "nextHoliday": {
    "date": "2020-12-26",
    "federal": 1,
    "id": 2,
    "nameEn": "Louis Riel Day",
    "nameFr": "Journée Louis Riel",
    "observedDate": "2020-12-28",
    "optional": 1,
    "provinces": [
      {}
    ]
  },
  "optional": 1,
  "provinces": [
    {
      "date": "2020-12-26",
      "federal": 1,
      "id": 2,
      "nameEn": "Louis Riel Day",
      "nameFr": "Journée Louis Riel",
      "observedDate": "2020-12-28",
      "optional": 1,
      "provinces": [
        {}
      ]
    }
  ],
  "sourceEn": "What are the general holidays in Manitoba?",
  "sourceLink": "https://www.gov.mb.ca/labour/standards/doc,gen-holidays-after-april-30-07,factsheet.html#q12"
}
```

A Canadian province or territory

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Canadian province abbreviations|
|nameEn|string|true|none|English name|
|nameFr|string|true|none|French name|
|nextHoliday|[Holiday](#schemaholiday)|false|none|A Canadian holiday. Includes a name, the literal date of the holiday, the observed date of the holiday (ie, accommodating for weekends), and a list of regions that observe this holiday.|
|optional|integer|false|none|Whether this province optionally observes a given holiday.|
|provinces|[[Holiday](#schemaholiday)]|false|none|none|
|sourceEn|string|true|none|Name of reference page with public holidays for this region|
|sourceLink|string(uri)|true|none|URL to public holidays reference for this region|

#### Enumerated Values

|Property|Value|
|---|---|
|id|AB|
|id|BC|
|id|MB|
|id|NB|
|id|NL|
|id|NS|
|id|NT|
|id|NU|
|id|ON|
|id|PE|
|id|QC|
|id|SK|
|id|YT|
|optional|1|
