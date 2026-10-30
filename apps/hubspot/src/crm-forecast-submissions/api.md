<h1 id="crm-forecast-submissions">CRM Forecast Submissions v2026-09</h1>

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

<h1 id="crm-forecast-submissions-basic">Basic</h1>

## List events

<a id="opIdget-/forecast-submissions/2026-09/events"></a>

> Code samples

```bash
curl https://api.hubapi.com/forecast-submissions/2026-09/events \
  -H 'Accept: application/json'
```

`GET /forecast-submissions/2026-09/events`

Retrieve a list of forecast submission events from your HubSpot account. This endpoint allows you to filter events by their occurrence date and paginate through results. Useful for tracking and analyzing forecast submissions over time.

<h3 id="list-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The paging cursor token of the last successfully read resource, returned as the `paging.next.after` JSON property of a paged response containing more results.|
|limit|query|integer(int32)|false|The maximum number of results to display per page. Defaults to 100 and the max is 100.|
|occurredAfter|query|integer(int64)|false|Filter events that occurred after this timestamp. The value should be an integer representing the time in milliseconds since the epoch.|
|occurredBefore|query|integer(int64)|false|Filter events that occurred before this timestamp. The value should be an integer representing the time in milliseconds since the epoch.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="list-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseForecastSubmissionEventForwardPaging](#schemacollectionresponseforecastsubmissioneventforwardpaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_CollectionResponseForecastSubmissionEventForwardPaging">CollectionResponseForecastSubmissionEventForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponseforecastsubmissioneventforwardpaging"></a>
<a id="schema_CollectionResponseForecastSubmissionEventForwardPaging"></a>
<a id="tocScollectionresponseforecastsubmissioneventforwardpaging"></a>
<a id="tocscollectionresponseforecastsubmissioneventforwardpaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[ForwardPaging](#schemaforwardpaging)|false|none|Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.|
|results|[[ForecastSubmissionEvent](#schemaforecastsubmissionevent)]|true|none|An array of ForecastSubmissionEvent objects, each representing a specific forecast submission event.|

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
|context|object|false|none|An object providing context about the error condition, where each property is an array of strings.|
|correlationId|string(uuid)|true|none|A unique identifier for the request, formatted as a UUID. Include this value with any error reports or support tickets.|
|errors|[[ErrorDetail](#schemaerrordetail)]|false|none|An array providing further information about the error, with each item being an ErrorDetail object.|
|links|object|false|none|A map of link names to associated URIs containing documentation about the error or recommended remediation steps, represented as an object with string properties.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate. This is a string.|
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
|code|string|false|none|The status code associated with the error detail.|
|context|object|false|none|Context about the error condition, represented as an object where each key maps to an array of strings providing additional information.|
|in|string|false|none|The name of the field or parameter in which the error was found.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate. This is a required property.|
|subCategory|string|false|none|A specific category that contains more specific detail about the error.|

<h2 id="tocS_ForecastSubmissionEvent">ForecastSubmissionEvent</h2>
<!-- backwards compatibility -->
<a id="schemaforecastsubmissionevent"></a>
<a id="schema_ForecastSubmissionEvent"></a>
<a id="tocSforecastsubmissionevent"></a>
<a id="tocsforecastsubmissionevent"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|true|none|A boolean indicating whether the forecast submission event is archived.|
|objectId|string|true|none|A string that uniquely identifies the object related to the forecast submission event.|
|objectType|string|true|none|A string representing the type of the object associated with the forecast submission event.|
|occurredAt|string(date-time)|true|none|The date and time when the forecast submission event occurred, in ISO 8601 format.|
|properties|object|true|none|An object containing additional properties related to the forecast submission event, where each property is a key-value pair with string values.|

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
|after|string|true|none|A string token that indicates the position after the last item on the current page, used to retrieve the next set of results.|
|link|string|false|none|A string URL that provides a direct link to the next page of results.|
