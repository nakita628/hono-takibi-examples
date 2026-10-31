<h1 id="api">API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://api.apis.guru//api.ote-godaddy.com">https://api.apis.guru//api.ote-godaddy.com</a>

<h1 id="api-v1">v1</h1>

## Remove listings from GoDaddy Auction

<a id="opIddeleteListings"></a>

> Code samples

```bash
curl 'https://example.com/v1/aftermarket/listings?domains=string' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/aftermarket/listings`

<h3 id="remove-listings-from-godaddy-auction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domains|query|[string]|true|A comma separated list of domain names|

> Example responses

> 200 Response

```json
{
  "listingActionId": 0
}
```

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
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
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
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
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
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
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="remove-listings-from-godaddy-auction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|[AftermarketListingAction](#schemaaftermarketlistingaction)|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|422|Unprocessable Entity|	Required parameters must be specified in correct format|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Add expiry listings into GoDaddy Auction

<a id="opIdaddExpiryListings"></a>

> Code samples

```bash
curl https://example.com/v1/aftermarket/listings/expiry \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "domain": "string",
      "expiresAt": "string",
      "losingRegistrarId": 1,
      "pageViewsMonthly": 0,
      "revenueMonthly": 0
    }
  ]'
```

`POST /v1/aftermarket/listings/expiry`

> Body parameter

```json
[
  {
    "domain": "string",
    "expiresAt": "string",
    "losingRegistrarId": 1,
    "pageViewsMonthly": 0,
    "revenueMonthly": 0
  }
]
```

<h3 id="add-expiry-listings-into-godaddy-auction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[AftermarketListingExpiryCreate](#schemaaftermarketlistingexpirycreate)]|true|An array of expiry listings to be loaded|

> Example responses

> 200 Response

```json
{
  "listingActionId": 0
}
```

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
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
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
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
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
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
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="add-expiry-listings-into-godaddy-auction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|[AftermarketListingAction](#schemaaftermarketlistingaction)|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|422|Unprocessable Entity|Required parameters must be specified in correct format<br>Too many Listings provided<br>Invalid Losing Registrar Id|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AftermarketListingAction">AftermarketListingAction</h2>
<!-- backwards compatibility -->
<a id="schemaaftermarketlistingaction"></a>
<a id="schema_AftermarketListingAction"></a>
<a id="tocSaftermarketlistingaction"></a>
<a id="tocsaftermarketlistingaction"></a>

```json
{
  "listingActionId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|listingActionId|integer|true|none|Action Id|

<h2 id="tocS_AftermarketListingExpiryCreate">AftermarketListingExpiryCreate</h2>
<!-- backwards compatibility -->
<a id="schemaaftermarketlistingexpirycreate"></a>
<a id="schema_AftermarketListingExpiryCreate"></a>
<a id="tocSaftermarketlistingexpirycreate"></a>
<a id="tocsaftermarketlistingexpirycreate"></a>

```json
{
  "domain": "string",
  "expiresAt": "string",
  "losingRegistrarId": 1,
  "pageViewsMonthly": 0,
  "revenueMonthly": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string|true|none|Domain name|
|expiresAt|string(iso-datetime)|true|none|Date when the domain expires|
|losingRegistrarId|integer|true|none|Losing registrar id for the domain|
|pageViewsMonthly|integer|false|none|Monthly traffic page view for the domain|
|revenueMonthly|integer|false|none|Monthly parking revenue (in USD micro unit) for the domain|

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
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string(constant)|true|none|Short identifier for the error, suitable for indicating the specific error within client code|
|fields|[[ErrorField](#schemaerrorfield)]|false|none|List of the specific fields, and the errors found with their contents|
|message|string|false|none|Human-readable, English description of the error|

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
  "path": "string",
  "pathRelated": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string(constant)|true|none|Short identifier for the error, suitable for indicating the specific error within client code|
|message|string|false|none|Human-readable, English description of the problem with the contents of the field|
|path|string(json-path)|true|none|<ul><br><li style='margin-left: 12px;'>JSONPath referring to a field containing an error</li><br><strong style='margin-left: 12px;'>OR</strong><br><li style='margin-left: 12px;'>JSONPath referring to a field that refers to an object containing an error, with more detail in `pathRelated`</li><br></ul>|
|pathRelated|string(json-path)|false|none|JSONPath referring to a field containing an error, which is referenced by `path`|

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
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string(constant)|true|none|Short identifier for the error, suitable for indicating the specific error within client code|
|fields|[[ErrorField](#schemaerrorfield)]|false|none|List of the specific fields, and the errors found with their contents|
|message|string|false|none|Human-readable, English description of the error|
|retryAfterSec|integer(integer-positive)|true|none|Number of seconds to wait before attempting a similar request|

<h2 id="tocS_expiry">expiry</h2>
<!-- backwards compatibility -->
<a id="schemaexpiry"></a>
<a id="schema_expiry"></a>
<a id="tocSexpiry"></a>
<a id="tocsexpiry"></a>

```json
{
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number(double)|false|none|none|
