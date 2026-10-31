<h1 id="api">API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://api.apis.guru//api.ote-godaddy.com">https://api.apis.guru//api.ote-godaddy.com</a>

<h1 id="api-v1">v1</h1>

## Retrieves summary country information for the provided marketId and filters

<a id="opIdgetCountries"></a>

> Code samples

```bash
curl 'https://example.com/v1/countries?marketId=string' \
  -H 'Accept: application/json'
```

`GET /v1/countries`

Authorization is not required

<h3 id="retrieves-summary-country-information-for-the-provided-marketid-and-filters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|marketId|query|string(bcp-47)|true|MarketId in which the request is being made, and for which responses should be localized|
|regionTypeId|query|integer|false|Restrict countries to this region type; required if regionName is supplied|
|regionName|query|string|false|Restrict countries to this region name; required if regionTypeId is supplied|
|sort|query|string|false|The term to sort the result countries by.|
|order|query|string|false|The direction to sort the result countries by.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|key|
|sort|label|
|order|ascending|
|order|descending|

> Example responses

> 200 Response

```json
[
  {
    "callingCode": "string",
    "countryKey": "string",
    "label": "string"
  }
]
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string",
  "stack": [
    "string"
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0,
  "stack": [
    "string"
  ]
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string",
  "stack": [
    "string"
  ]
}
```

<h3 id="retrieves-summary-country-information-for-the-provided-marketid-and-filters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|[ArrayOfCountrySummary](#schemaarrayofcountrysummary)|
|422|Unprocessable Entity|marketId is required<br>regionTypeId is not a valid integer<br>regionName is required when regionTypeId is provided<br>regionTypeId is required when regionName is provided|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieves country and summary state information for provided countryKey

<a id="opIdgetCountry"></a>

> Code samples

```bash
curl 'https://example.com/v1/countries/string?marketId=string' \
  -H 'Accept: application/json'
```

`GET /v1/countries/{countryKey}`

Authorization is not required

<h3 id="retrieves-country-and-summary-state-information-for-provided-countrykey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|countryKey|path|string(iso-country-code)|true|The country key|
|marketId|query|string(bcp-47)|true|MarketId in which the request is being made, and for which responses should be localized|
|sort|query|string|false|The term to sort the result country states by.|
|order|query|string|false|The direction to sort the result country states by.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|key|
|sort|label|
|order|ascending|
|order|descending|

> Example responses

> 200 Response

```json
[
  {
    "callingCode": "string",
    "countryKey": "string",
    "label": "string",
    "states": [
      {
        "label": "string",
        "stateKey": "string"
      }
    ]
  }
]
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string",
  "stack": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string",
  "stack": [
    "string"
  ]
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0,
  "stack": [
    "string"
  ]
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string",
  "stack": [
    "string"
  ]
}
```

<h3 id="retrieves-country-and-summary-state-information-for-provided-countrykey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|[ArrayOfCountry](#schemaarrayofcountry)|
|404|Not Found|Country not found|[Error](#schemaerror)|
|422|Unprocessable Entity|marketId is required|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ArrayOfCountry">ArrayOfCountry</h2>
<!-- backwards compatibility -->
<a id="schemaarrayofcountry"></a>
<a id="schema_ArrayOfCountry"></a>
<a id="tocSarrayofcountry"></a>
<a id="tocsarrayofcountry"></a>

```json
[
  {
    "callingCode": "string",
    "countryKey": "string",
    "label": "string",
    "states": [
      {
        "label": "string",
        "stateKey": "string"
      }
    ]
  }
]
```

<h2 id="tocS_ArrayOfCountrySummary">ArrayOfCountrySummary</h2>
<!-- backwards compatibility -->
<a id="schemaarrayofcountrysummary"></a>
<a id="schema_ArrayOfCountrySummary"></a>
<a id="tocSarrayofcountrysummary"></a>
<a id="tocsarrayofcountrysummary"></a>

```json
[
  {
    "callingCode": "string",
    "countryKey": "string",
    "label": "string"
  }
]
```

<h2 id="tocS_Country">Country</h2>
<!-- backwards compatibility -->
<a id="schemacountry"></a>
<a id="schema_Country"></a>
<a id="tocScountry"></a>
<a id="tocscountry"></a>

```json
{
  "callingCode": "string",
  "countryKey": "string",
  "label": "string",
  "states": [
    {
      "label": "string",
      "stateKey": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callingCode|string|false|none|The calling code prefix used for phone numbers in this country|
|countryKey|string(iso-country-code)|false|none|The ISO country-code|
|label|string|false|none|The localized name of the country|
|states|[[State](#schemastate)]|false|none|List of states/provinces in this country|

<h2 id="tocS_CountrySummary">CountrySummary</h2>
<!-- backwards compatibility -->
<a id="schemacountrysummary"></a>
<a id="schema_CountrySummary"></a>
<a id="tocScountrysummary"></a>
<a id="tocscountrysummary"></a>

```json
{
  "callingCode": "string",
  "countryKey": "string",
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callingCode|string|false|none|The calling code prefix used for phone numbers in this country|
|countryKey|string(iso-country-code)|false|none|The ISO country-code|
|label|string|false|none|The localized name of the country|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string",
  "stack": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string(constant)|true|none|Short identifier for the error, suitable for indicating the specific error within client code|
|fields|[[ErrorField](#schemaerrorfield)]|false|none|List of the specific fields, and the errors found with their contents|
|message|string|false|none|Human-readable, English description of the error|
|stack|[string]|false|none|Stack trace indicating where the error occurred.<br/><br>NOTE: This attribute <strong>MAY</strong> be included for Development and Test environments.<br>However, it <strong>MUST NOT</strong> be exposed from OTE nor Production systems|

<h2 id="tocS_ErrorField">ErrorField</h2>
<!-- backwards compatibility -->
<a id="schemaerrorfield"></a>
<a id="schema_ErrorField"></a>
<a id="tocSerrorfield"></a>
<a id="tocserrorfield"></a>

```json
{
  "code": "string",
  "message": "string",
  "path": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string(constant)|true|none|Short identifier for the error, suitable for indicating the specific error within client code|
|message|string|false|none|Human-readable, English description of the problem with the contents of the field|
|path|string(json-path)|true|none|JSONPath referring to the field within the submitted data containing an error|

<h2 id="tocS_ErrorLimit">ErrorLimit</h2>
<!-- backwards compatibility -->
<a id="schemaerrorlimit"></a>
<a id="schema_ErrorLimit"></a>
<a id="tocSerrorlimit"></a>
<a id="tocserrorlimit"></a>

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0,
  "stack": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string(constant)|true|none|Short identifier for the error, suitable for indicating the specific error within client code|
|fields|[[ErrorField](#schemaerrorfield)]|false|none|List of the specific fields, and the errors found with their contents|
|message|string|false|none|Human-readable, English description of the error|
|retryAfterSec|integer(integer-positive)|true|none|Number of seconds to wait before attempting a similar request|
|stack|[string]|false|none|Stack trace indicating where the error occurred.<br/><br>NOTE: This attribute <strong>MAY</strong> be included for Development and Test environments.<br>However, it <strong>MUST NOT</strong> be exposed from OTE nor Production systems|

<h2 id="tocS_State">State</h2>
<!-- backwards compatibility -->
<a id="schemastate"></a>
<a id="schema_State"></a>
<a id="tocSstate"></a>
<a id="tocsstate"></a>

```json
{
  "label": "string",
  "stateKey": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|false|none|The localized name of the state, province, or territory|
|stateKey|string|false|none|The state code|
