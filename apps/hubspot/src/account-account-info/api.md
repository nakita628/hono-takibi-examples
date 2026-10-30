<h1 id="account-account-info">Account Account Info v2026-09</h1>

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
|account-info.security.read||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="account-account-info-basic">Basic</h1>

## Retrieve API Usage

<a id="opIdget-/account-info/2026-09/api-usage/daily/private-apps"></a>

> Code samples

```bash
curl https://api.hubapi.com/account-info/2026-09/api-usage/daily/private-apps \
  -H 'Accept: application/json'
```

`GET /account-info/2026-09/api-usage/daily/private-apps`

Retrieve the daily API usage for private apps in the account. This endpoint provides insights into the API consumption patterns, helping users monitor and manage their API usage effectively.

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-api-usage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseApiUsageNoPaging](#schemacollectionresponseapiusagenopaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve details

<a id="opIdget-/account-info/2026-09/details"></a>

> Code samples

```bash
curl https://api.hubapi.com/account-info/2026-09/details \
  -H 'Accept: application/json'
```

`GET /account-info/2026-09/details`

Retrieve detailed information about the account associated with the HubSpot portal. This endpoint provides insights into the account type, time zone, currency settings, and data hosting location. It is useful for obtaining a comprehensive overview of the account's configuration and settings.

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PortalInformationResponseSeptember2026](#schemaportalinformationresponseseptember2026)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ApiUsage">ApiUsage</h2>
<!-- backwards compatibility -->
<a id="schemaapiusage"></a>
<a id="schema_ApiUsage"></a>
<a id="tocSapiusage"></a>
<a id="tocsapiusage"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collectedAt|string(date-time)|true|none|The date and time when the usage data was collected, in ISO 8601 format.|
|currentUsage|integer(int32)|true|none|An integer indicating the current usage count of the API resource.|
|fetchStatus|string|true|none|The status of the data fetch operation. Valid values include 'SUCCESS', 'TIMEOUT', 'FAILURE', 'CACHED', and 'NOTFOUND'.|
|name|string|true|none|The name of the API resource being tracked.|
|resetsAt|string(date-time)|false|none|The date and time when the usage limit will reset, in ISO 8601 format.|
|usageLimit|integer(int32)|true|none|An integer representing the maximum allowable usage for the API resource.|

#### Enumerated Values

|Property|Value|
|---|---|
|fetchStatus|CACHED|
|fetchStatus|FAILURE|
|fetchStatus|NOTFOUND|
|fetchStatus|SUCCESS|
|fetchStatus|TIMEOUT|

<h2 id="tocS_CollectionResponseApiUsageNoPaging">CollectionResponseApiUsageNoPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponseapiusagenopaging"></a>
<a id="schema_CollectionResponseApiUsageNoPaging"></a>
<a id="tocScollectionresponseapiusagenopaging"></a>
<a id="tocscollectionresponseapiusagenopaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[ApiUsage](#schemaapiusage)]|true|none|An array of API usage records, each detailing the usage metrics for a specific API. Each record includes information such as the name of the API, usage limits, current usage, and the status of the data fetch.|

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
|category|string|true|none|The error category, represented as a string.|
|context|object|false|none|An object containing context about the error condition. It maps property names to arrays of strings.|
|correlationId|string(uuid)|true|none|A unique identifier for the request, represented as a UUID. Include this value with any error reports or support tickets.|
|errors|[[ErrorDetail](#schemaerrordetail)]|false|none|An array providing further information about the error, with each item being an ErrorDetail object.|
|links|object|false|none|A map of link names to associated URIs containing documentation about the error or recommended remediation steps. Each value is a string.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate. It is a string.|
|subCategory|string|false|none|A specific category that contains more specific detail about the error, represented as a string.|

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
|code|string|false|none|The status code associated with the error detail. It is a string.|
|context|object|false|none|Context about the error condition, represented as an object where each key is a string and each value is an array of strings.|
|in|string|false|none|The name of the field or parameter in which the error was found. It is a string.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate. It is a string.|
|subCategory|string|false|none|A specific category that contains more specific detail about the error. It is a string.|

<h2 id="tocS_PortalInformationResponseSeptember2026">PortalInformationResponseSeptember2026</h2>
<!-- backwards compatibility -->
<a id="schemaportalinformationresponseseptember2026"></a>
<a id="schema_PortalInformationResponseSeptember2026"></a>
<a id="tocSportalinformationresponseseptember2026"></a>
<a id="tocsportalinformationresponseseptember2026"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountType|string|true|none|The type of account associated with the portal. Valid values include 'STANDARD', 'DEVELOPER_TEST', 'SANDBOX', and 'APP_DEVELOPER'.|
|additionalCurrencies|[string]|true|none|An array of additional currencies supported by the portal, each represented as a string.|
|companyCurrency|string|true|none|The primary currency used by the company, represented as a string.|
|createdAt|integer(int64)|false|none|The timestamp when the portal was created, represented as a Unix timestamp in milliseconds.|
|dataHostingLocation|string|true|none|The location where the portal's data is hosted, represented as a string.|
|portalId|integer(int32)|true|none|The unique identifier for the HubSpot portal, represented as an integer.|
|portalName|string|false|none|The name of the portal, represented as a string.|
|timeZone|string|true|none|The time zone setting of the portal, represented as a string.|
|uiDomain|string|true|none|The domain used for the portal's user interface, represented as a string.|
|utcOffset|string|true|none|The UTC offset of the portal's time zone, represented as a string.|
|utcOffsetMilliseconds|integer(int64)|true|none|The UTC offset of the portal's time zone in milliseconds, represented as an integer.|

#### Enumerated Values

|Property|Value|
|---|---|
|accountType|APP_DEVELOPER|
|accountType|DEVELOPER_TEST|
|accountType|SANDBOX|
|accountType|STANDARD|
