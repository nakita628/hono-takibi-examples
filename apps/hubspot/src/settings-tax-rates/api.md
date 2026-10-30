<h1 id="settings-tax-rates">Settings Tax Rates v2026-09</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Basepom for all HubSpot Projects

Base URLs:

* <a href="https://api.hubapi.com">https://api.hubapi.com</a>

# Authentication

* API Key (developer_hapikey)
    - Parameter Name: **hapikey**, in: query.

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://app.hubspot.com/oauth/authorize](https://app.hubspot.com/oauth/authorize)
    - Token URL = [https://api.hubapi.com/oauth/v1/token](https://api.hubapi.com/oauth/v1/token)

|Scope|Scope Description|
|---|---|
|cpq.quotes.read||
|cpq.quotes.write||
|crm.objects.quotes.read||
|crm.objects.quotes.write||
|tax_rates.read||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="settings-tax-rates-basic">Basic</h1>

## Get all tax rates

<a id="opIdget-/tax-rates/2026-09/tax-rates"></a>

> Code samples

```bash
curl https://api.hubapi.com/tax-rates/2026-09/tax-rates \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tax-rates/2026-09/tax-rates`

Retrieve a paginated list of all tax rates set up in the account tax rate library

<h3 id="get-all-tax-rates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|active|query|boolean|false|A boolean to filter results by their active status.|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-all-tax-rates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponsePublicTaxRateGroupForwardPaging](#schemacollectionresponsepublictaxrategroupforwardpaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: cpq.quotes.write ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: tax_rates.read ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: cpq.quotes.read )
</aside>

## Get a specific tax rate

<a id="opIdget-/tax-rates/2026-09/tax-rates/{taxRateGroupId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/tax-rates/2026-09/tax-rates/{taxRateGroupId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tax-rates/2026-09/tax-rates/{taxRateGroupId}`

Retrieve a specific tax rate by its `taxRateGroupId`.

<h3 id="get-a-specific-tax-rate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taxRateGroupId|path|string|true|The unique identifier of the tax rate group to retrieve.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-a-specific-tax-rate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicTaxRateGroup](#schemapublictaxrategroup)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: cpq.quotes.write ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: tax_rates.read ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: cpq.quotes.read )
</aside>

# Schemas

<h2 id="tocS_CollectionResponsePublicTaxRateGroupForwardPaging">CollectionResponsePublicTaxRateGroupForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsepublictaxrategroupforwardpaging"></a>
<a id="schema_CollectionResponsePublicTaxRateGroupForwardPaging"></a>
<a id="tocScollectionresponsepublictaxrategroupforwardpaging"></a>
<a id="tocscollectionresponsepublictaxrategroupforwardpaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[ForwardPaging](#schemaforwardpaging)|false|none|Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.|
|results|[[PublicTaxRateGroup](#schemapublictaxrategroup)]|true|none|An array of PublicTaxRateGroup objects, each representing a tax rate group with its properties.|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "message": "Invalid input (details will vary based on the error)",
  "correlationId": "aeb5f871-7f07-4993-9211-075dc63e7cbf",
  "category": "VALIDATION_ERROR",
  "links": {
    "knowledge-base": "https://www.hubspot.com/products/service/knowledge-base"
  }
}
```

Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|The error category|
|context|object|false|none|Context about the error condition|
|correlationId|string(uuid)|true|none|A unique identifier for the request. Include this value with any error reports or support tickets|
|errors|[[ErrorDetail](#schemaerrordetail)]|false|none|further information about the error|
|links|object|false|none|A map of link names to associated URIs containing documentation about the error or recommended remediation steps|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|string|false|none|A specific category that contains more specific detail about the error|

<h2 id="tocS_ErrorDetail">ErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetail"></a>
<a id="schema_ErrorDetail"></a>
<a id="tocSerrordetail"></a>
<a id="tocserrordetail"></a>

```json
null
```

Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The status code associated with the error detail|
|context|object|false|none|Context about the error condition|
|in|string|false|none|The name of the field or parameter in which the error was found.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|string|false|none|A specific category that contains more specific detail about the error|

<h2 id="tocS_ForwardPaging">ForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemaforwardpaging"></a>
<a id="schema_ForwardPaging"></a>
<a id="tocSforwardpaging"></a>
<a id="tocsforwardpaging"></a>

```json
null
```

Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|[NextPage](#schemanextpage)|false|none|Specifies the paging information needed to retrieve the next set of results in a paginated API response|

<h2 id="tocS_NextPage">NextPage</h2>
<!-- backwards compatibility -->
<a id="schemanextpage"></a>
<a id="schema_NextPage"></a>
<a id="tocSnextpage"></a>
<a id="tocsnextpage"></a>

```json
null
```

Specifies the paging information needed to retrieve the next set of results in a paginated API response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|after|string|true|none|A paging cursor token for retrieving subsequent pages.|
|link|string|false|none|A URL that can be used to retrieve the next page results.|

<h2 id="tocS_PublicTaxRateGroup">PublicTaxRateGroup</h2>
<!-- backwards compatibility -->
<a id="schemapublictaxrategroup"></a>
<a id="schema_PublicTaxRateGroup"></a>
<a id="tocSpublictaxrategroup"></a>
<a id="tocspublictaxrategroup"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|true|none|Indicates whether the tax rate group is currently active.|
|createdAt|string(date-time)|true|none|The date and time when the tax rate was created.|
|id|string|true|none|The unique identifier for the tax rate.|
|label|string|true|none|The display label for the tax rate.|
|name|string|true|none|The name of the tax rate.|
|percentageRate|number|true|none|The percentage rate applied.|
|updatedAt|string(date-time)|true|none|The date and time when the tax rate was last updated.|
