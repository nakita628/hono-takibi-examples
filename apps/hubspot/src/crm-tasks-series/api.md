<h1 id="crm-tasks-series">CRM Tasks Series v2026-09</h1>

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
|crm.objects.appointments.read||
|crm.objects.appointments.sensitive.read.v2||
|crm.objects.appointments.sensitive.write.v2||
|crm.objects.appointments.write||
|crm.objects.commercepayments.write||
|crm.objects.companies.highly_sensitive.read.v2||
|crm.objects.companies.highly_sensitive.write.v2||
|crm.objects.companies.read||
|crm.objects.companies.sensitive.read.v2||
|crm.objects.companies.sensitive.write.v2||
|crm.objects.companies.write||
|crm.objects.contacts.highly_sensitive.read.v2||
|crm.objects.contacts.highly_sensitive.write.v2||
|crm.objects.contacts.read||
|crm.objects.contacts.sensitive.read.v2||
|crm.objects.contacts.sensitive.write.v2||
|crm.objects.contacts.write||
|crm.objects.courses.read||
|crm.objects.courses.write||
|crm.objects.deals.highly_sensitive.read.v2||
|crm.objects.deals.highly_sensitive.write.v2||
|crm.objects.deals.read||
|crm.objects.deals.sensitive.read.v2||
|crm.objects.deals.sensitive.write.v2||
|crm.objects.deals.write||
|crm.objects.goals.read||
|crm.objects.goals.write||
|crm.objects.line_items.read||
|crm.objects.line_items.write||
|crm.objects.listings.read||
|crm.objects.listings.write||
|crm.objects.products.read||
|crm.objects.products.write||
|crm.objects.projects.highly_sensitive.read||
|crm.objects.projects.highly_sensitive.write||
|crm.objects.projects.read||
|crm.objects.projects.sensitive.read||
|crm.objects.projects.sensitive.write||
|crm.objects.projects.write||
|crm.objects.services.read||
|crm.objects.services.write||
|crm.objects.tasks.read||
|crm.schemas.tasks.read||
|crm.schemas.tasks.write||
|tickets.highly_sensitive.v2||
|tickets.sensitive.v2||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="crm-tasks-series-advanced">Advanced</h1>

## Create

<a id="opIdpost-/crm/task-series/2026-09"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/task-series/2026-09 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/task-series/2026-09`

Create a new task series in the HubSpot CRM. This endpoint allows you to start a series of tasks by providing the necessary properties and series details. It is useful for automating repetitive task sequences within your CRM workflows.

> Body parameter

```json
null
```

<h3 id="create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[StartTaskSeriesBody](#schemastarttaskseriesbody)|true|none|
|» properties|body|object|true|A map of additional property names to their values, represented as a string-to-string object.|
|» » **additionalProperties**|body|string|false|none|
|» series|body|[PublicTaskSeries](#schemapublictaskseries)|true|none|
|» taskId|body|integer(int64)|true|The unique identifier for the task, represented as an integer in int64 format.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicTaskSeriesResponse](#schemapublictaskseriesresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.schemas.tasks.write )
</aside>

<h1 id="crm-tasks-series-basic">Basic</h1>

## Retrieve task series

<a id="opIdget-/crm/task-series/2026-09/{taskId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/task-series/2026-09/{taskId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/task-series/2026-09/{taskId}`

Retrieve details of a specific task series using its unique identifier. This endpoint allows you to access the properties and series information associated with the specified taskId. It's useful for obtaining detailed information about a task series, including any custom properties.

<h3 id="retrieve-task-series-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskId|path|integer(int64)|true|The unique identifier of the task series to retrieve. This is required to specify which task series you are interested in.|
|properties|query|[string]|false|A comma-separated list of property names to include in the response. This allows you to specify which properties of the task series you want to retrieve.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-task-series-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicTaskSeriesResponse](#schemapublictaskseriesresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.products.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.schemas.tasks.read ), oauth2 ( Scopes: crm.objects.tasks.read )
</aside>

## Delete

<a id="opIddelete-/crm/task-series/2026-09/{taskId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/task-series/2026-09/{taskId}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /crm/task-series/2026-09/{taskId}`

Delete a specific task series in your HubSpot account using its unique identifier. This operation permanently removes the task series, and it cannot be undone. Ensure that you have the necessary permissions to perform this action.

<h3 id="delete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskId|path|integer(int64)|true|The unique identifier of the task series to delete. It must be an integer.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.schemas.tasks.write )
</aside>

## Update task series

<a id="opIdpatch-/crm/task-series/2026-09/{taskId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/task-series/2026-09/{taskId}' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PATCH /crm/task-series/2026-09/{taskId}`

Update the details of a specific task series in your HubSpot account. This endpoint allows you to modify properties and series configurations for the task identified by the taskId. Use this to adjust task scheduling or update task-related information.

> Body parameter

```json
null
```

<h3 id="update-task-series-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskId|path|integer(int64)|true|The unique identifier of the task series to update.|
|body|body|[UpdateTaskSeriesBody](#schemaupdatetaskseriesbody)|true|none|
|» properties|body|object|false|A map of additional property names to their values, represented as key-value pairs where both keys and values are strings.|
|» » **additionalProperties**|body|string|false|none|
|» series|body|[PublicTaskSeries](#schemapublictaskseries)|false|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-task-series-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicTaskSeriesResponse](#schemapublictaskseriesresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.schemas.tasks.write )
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
|category|string|true|none|The error category, represented as a string.|
|context|object|false|none|An object providing context about the error condition, with additional properties as arrays of strings.|
|correlationId|string(uuid)|true|none|A unique identifier for the request, represented as a UUID. This should be included with any error reports or support tickets.|
|errors|[[ErrorDetail](#schemaerrordetail)]|false|none|An array providing further information about the error, where each item is an ErrorDetail object.|
|links|object|false|none|A map of link names to associated URIs containing documentation about the error or recommended remediation steps, represented as an object with string properties.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate. It is a string.|
|subCategory|string|false|none|A specific category that contains more detailed information about the error, represented as a string.|

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
|context|object|false|none|Context about the error condition, represented as an object where each key is a context name and the value is an array of strings providing additional details.|
|in|string|false|none|The name of the field or parameter in which the error was found.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate. This is a required property.|
|subCategory|string|false|none|A specific category that contains more specific detail about the error.|

<h2 id="tocS_PublicTaskSeries">PublicTaskSeries</h2>
<!-- backwards compatibility -->
<a id="schemapublictaskseries"></a>
<a id="schema_PublicTaskSeries"></a>
<a id="tocSpublictaskseries"></a>
<a id="tocspublictaskseries"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repeatInterval|string|false|none|The recurrence schedule as a standards-compliant RFC-5545 RRULE string.|
|repeatStatus|string|false|none|A string representing the current status of the task series repetition.|
|startsAt|string(date-time)|false|none|The date and time when the task series is scheduled to start, in ISO 8601 format.|

<h2 id="tocS_PublicTaskSeriesResponse">PublicTaskSeriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublictaskseriesresponse"></a>
<a id="schema_PublicTaskSeriesResponse"></a>
<a id="tocSpublictaskseriesresponse"></a>
<a id="tocspublictaskseriesresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|none|The date and time when the task series was created, in ISO 8601 format.|
|id|string|true|none|The unique identifier for the task series, represented as a string.|
|properties|object|true|none|A map of custom property names to their values, where each value is a string.|
|series|[PublicTaskSeries](#schemapublictaskseries)|true|none|none|
|updatedAt|string(date-time)|false|none|The date and time when the task series was last updated, in ISO 8601 format.|

<h2 id="tocS_StartTaskSeriesBody">StartTaskSeriesBody</h2>
<!-- backwards compatibility -->
<a id="schemastarttaskseriesbody"></a>
<a id="schema_StartTaskSeriesBody"></a>
<a id="tocSstarttaskseriesbody"></a>
<a id="tocsstarttaskseriesbody"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|properties|object|true|none|A map of additional property names to their values, represented as a string-to-string object.|
|series|[PublicTaskSeries](#schemapublictaskseries)|true|none|none|
|taskId|integer(int64)|true|none|The unique identifier for the task, represented as an integer in int64 format.|

<h2 id="tocS_UpdateTaskSeriesBody">UpdateTaskSeriesBody</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetaskseriesbody"></a>
<a id="schema_UpdateTaskSeriesBody"></a>
<a id="tocSupdatetaskseriesbody"></a>
<a id="tocsupdatetaskseriesbody"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|properties|object|false|none|A map of additional property names to their values, represented as key-value pairs where both keys and values are strings.|
|series|[PublicTaskSeries](#schemapublictaskseries)|false|none|none|
