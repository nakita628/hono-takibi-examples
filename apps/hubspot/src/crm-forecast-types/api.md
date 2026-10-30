<h1 id="crm-forecast-types">CRM Forecast Types v2026-09</h1>

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

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="crm-forecast-types-basic">Basic</h1>

## Retrieve forecast types

<a id="opIdget-/forecast-settings/2026-09/forecast-types_/forecast-settings/2026-09-beta/forecast-types"></a>

> Code samples

```bash
curl https://api.hubapi.com/forecast-settings/2026-09/forecast-types \
  -H 'Accept: application/json'
```

`GET /forecast-settings/2026-09/forecast-types`

Returns all forecast types configured for the portal. Forecast types define which properties are used to calculate forecasts. This endpoint is useful for retrieving the different forecast configurations available in your HubSpot account, allowing you to understand how forecasts are generated based on various properties.

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-forecast-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ForecastTypeSettingPublicResponse](#schemaforecasttypesettingpublicresponse)|
|401|Unauthorized|Unauthorized - missing or invalid authentication|None|
|403|Forbidden|Forbidden - insufficient permissions|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a forecast type

<a id="opIdget-/forecast-settings/2026-09/forecast-types/{forecastTypeId}_/forecast-settings/2026-09-beta/forecast-types/{forecastTypeId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/forecast-settings/2026-09/forecast-types/{forecastTypeId}' \
  -H 'Accept: application/json'
```

`GET /forecast-settings/2026-09/forecast-types/{forecastTypeId}`

Retrieve a specific forecast type by its ID from the HubSpot account. This endpoint is useful for accessing detailed information about a particular forecast type, which defines the properties used in forecasting calculations.

<h3 id="retrieve-a-forecast-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|forecastTypeId|path|integer(int64)|true|The ID of the forecast type to retrieve|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-a-forecast-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ForecastTypeSettingPublicResponse](#schemaforecasttypesettingpublicresponse)|
|401|Unauthorized|Unauthorized - missing or invalid authentication|None|
|403|Forbidden|Forbidden - insufficient permissions|None|
|404|Not Found|Forecast type not found|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

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

<h2 id="tocS_ForecastTypeDealSplitProperties">ForecastTypeDealSplitProperties</h2>
<!-- backwards compatibility -->
<a id="schemaforecasttypedealsplitproperties"></a>
<a id="schema_ForecastTypeDealSplitProperties"></a>
<a id="tocSforecasttypedealsplitproperties"></a>
<a id="tocsforecasttypedealsplitproperties"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dealCustomAmountProperty|string|true|none|A string representing a custom amount property for a deal.|
|dealCustomAmountPropertyInHomeCurrency|string|true|none|A string representing a custom amount property for a deal, expressed in the home currency.|
|dealCustomDateProperty|string|true|none|A string representing a custom date property for a deal.|
|dealSplitCustomAmountProperty|string|true|none|A string representing a custom amount property for a deal split.|
|dealSplitCustomAmountPropertyInHomeCurrency|string|true|none|A string representing a custom amount property for a deal split, expressed in the home currency.|
|dealSplitWeightedCustomAmountProperty|string|true|none|A string representing a weighted custom amount property for a deal split.|
|dealSplitWeightedCustomAmountPropertyInHomeCurrency|string|true|none|A string representing a weighted custom amount property for a deal split, expressed in the home currency.|

<h2 id="tocS_ForecastTypeSettingPublicResponse">ForecastTypeSettingPublicResponse</h2>
<!-- backwards compatibility -->
<a id="schemaforecasttypesettingpublicresponse"></a>
<a id="schema_ForecastTypeSettingPublicResponse"></a>
<a id="tocSforecasttypesettingpublicresponse"></a>
<a id="tocsforecasttypesettingpublicresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amountInHomeCurrencyProperty|string|false|none|A string representing the property for the amount in the home currency.|
|amountOrDatePropertyRestrictedForUser|boolean|true|none|A boolean indicating whether the amount or date property is restricted for the user.|
|amountProperty|string|true|none|The property used to represent the amount in the forecast, specified as a string.|
|createdAt|string(date-time)|true|none|The date and time when the forecast type was created, in ISO 8601 format.|
|createdAtTimestamp|integer(int64)|true|none|An integer representing the timestamp of creation, in milliseconds since the Unix epoch.|
|createdBy|integer(int32)|true|none|An integer representing the ID of the user who created the forecast type.|
|dateProperty|string|true|none|The property used to represent the date in the forecast, specified as a string.|
|dealSplitProperties|[ForecastTypeDealSplitProperties](#schemaforecasttypedealsplitproperties)|false|none|none|
|defaultType|boolean|true|none|A boolean indicating whether this forecast type is the default.|
|forecastName|string|true|none|The name of the forecast type, represented as a string.|
|forecastTypeId|integer(int64)|true|none|An integer identifier for the forecast type.|
|id|string|true|none|A string identifier for the forecast type setting.|
|objectTypeId|string|true|none|A string identifier for the object type associated with the forecast.|
|updatedAt|string(date-time)|true|none|The date and time when the forecast type was last updated, in ISO 8601 format.|
|updatedBy|integer(int32)|true|none|An integer representing the ID of the user who last updated the forecast type.|
|updatedTimestamp|integer(int64)|true|none|An integer representing the timestamp of the last update, in milliseconds since the Unix epoch.|
|weightedAmountInHomeCurrencyProperty|string|false|none|A string representing the property for the weighted amount in the home currency.|
|weightedAmountProperty|string|false|none|The property representing the weighted amount, specified as a string.|
