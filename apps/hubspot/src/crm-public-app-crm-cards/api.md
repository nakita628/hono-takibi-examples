<h1 id="public-app-crm-cards">Public App Crm Cards v2026-09</h1>

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

<h1 id="public-app-crm-cards-advanced">Advanced</h1>

## Migrate Card Views

<a id="opIdpost-/crm/extensions/cards-dev/2026-09/{appId}/views/migrate_/crm/v3/extensions/cards-dev/{appId}/views/migrate"></a>

> Code samples

```bash
curl "https://api.hubapi.com/crm/extensions/cards-dev/2026-09/{appId}/views/migrate?hapikey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /crm/extensions/cards-dev/2026-09/{appId}/views/migrate`

Swaps a Legacy CRM Card with an App Card in views. Reference the "Migrate a legacy CRM card to an app card" docs for more information

> Body parameter

```json
null
```

<h3 id="migrate-card-views-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app for which views are being migrated.|
|body|body|[CardMigrateViewsRequest](#schemacardmigrateviewsrequest)|true|none|
|» allowDuplicateAppCardIds|body|boolean|true|A boolean flag indicating whether duplicate app card IDs are allowed during the migration process.|
|» appCardId|body|integer(int64)|true|The unique identifier for the new app card to which views will be migrated. This is an integer in int64 format.|
|» helpdeskAppCardId|body|integer(int64)|false|The unique identifier for the helpdesk app card, if applicable. This is an integer in int64 format.|
|» legacyCrmCardId|body|integer(int64)|true|The unique identifier for the legacy CRM card. This is an integer in int64 format.|
|» tabAppCardId|body|integer(int64)|false|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="migrate-card-views-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CardMigrateViewsResponse](#schemacardmigrateviewsresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

<h1 id="public-app-crm-cards-basic">Basic</h1>

## Get sample card detail response

<a id="opIdget-/crm/extensions/cards-dev/2026-09/sample-response_getCardsSampleResponse"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/extensions/cards-dev/2026-09/sample-response \
  -H 'Accept: application/json'
```

`GET /crm/extensions/cards-dev/2026-09/sample-response`

Returns an example card detail response. This is the payload with displayed details for a card that will be shown to a user. An app should send this in response to the data fetch request.

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-sample-card-detail-response-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[IntegratorCardPayloadResponse](#schemaintegratorcardpayloadresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get all cards

<a id="opIdget-/crm/extensions/cards-dev/2026-09/{appId}_getAll"></a>

> Code samples

```bash
curl "https://api.hubapi.com/crm/extensions/cards-dev/2026-09/{appId}?hapikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /crm/extensions/cards-dev/2026-09/{appId}`

Returns a list of cards for a given app.

<h3 id="get-all-cards-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app for which to retrieve the cards. It must be an integer.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-all-cards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicCardListResponse](#schemapubliccardlistresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Create a new card

<a id="opIdpost-/crm/extensions/cards-dev/2026-09/{appId}_create"></a>

> Code samples

```bash
curl "https://api.hubapi.com/crm/extensions/cards-dev/2026-09/{appId}?hapikey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /crm/extensions/cards-dev/2026-09/{appId}`

Defines a new card that will become active on an account when this app is installed.

> Body parameter

```json
null
```

<h3 id="create-a-new-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app for which the card is being created. This is an integer value.|
|body|body|[CardCreateRequest](#schemacardcreaterequest)|true|none|
|» actions|body|[CardActions](#schemacardactions)|true|none|
|» display|body|[CardDisplayBody](#schemacarddisplaybody)|true|none|
|» fetch|body|[CardFetchBody](#schemacardfetchbody)|true|none|
|» title|body|string|true|The top-level title for this card. Displayed to users in the CRM UI.|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-a-new-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[PublicCardResponse](#schemapubliccardresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Get a card.

<a id="opIdget-/crm/extensions/cards-dev/2026-09/{appId}/{cardId}_getById"></a>

> Code samples

```bash
curl "https://api.hubapi.com/crm/extensions/cards-dev/2026-09/{appId}/{cardId}?hapikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /crm/extensions/cards-dev/2026-09/{appId}/{cardId}`

Returns the definition for a card with the given ID.

<h3 id="get-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app associated with the card. This should be an integer.|
|cardId|path|string|true|The unique identifier of the card to retrieve.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicCardResponse](#schemapubliccardresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Delete a card

<a id="opIddelete-/crm/extensions/cards-dev/2026-09/{appId}/{cardId}_archive"></a>

> Code samples

```bash
curl "https://api.hubapi.com/crm/extensions/cards-dev/2026-09/{appId}/{cardId}?hapikey=${API_KEY}" \
  -X DELETE
```

`DELETE /crm/extensions/cards-dev/2026-09/{appId}/{cardId}`

Permanently deletes a card definition with the given ID. Once deleted, data fetch requests for this card will no longer be sent to your service. This can't be undone.

<h3 id="delete-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the application associated with the card.|
|cardId|path|string|true|The unique identifier of the card to delete.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Update a card

<a id="opIdpatch-/crm/extensions/cards-dev/2026-09/{appId}/{cardId}_update"></a>

> Code samples

```bash
curl "https://api.hubapi.com/crm/extensions/cards-dev/2026-09/{appId}/{cardId}?hapikey=${API_KEY}" \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`PATCH /crm/extensions/cards-dev/2026-09/{appId}/{cardId}`

Update a card definition with new details.

> Body parameter

```json
null
```

<h3 id="update-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app associated with the card.|
|cardId|path|string|true|The unique identifier of the card to update.|
|body|body|[CardPatchRequest](#schemacardpatchrequest)|true|none|
|» actions|body|[CardActions](#schemacardactions)|false|none|
|» display|body|[CardDisplayBody](#schemacarddisplaybody)|false|none|
|» fetch|body|[CardFetchBodyPatch](#schemacardfetchbodypatch)|false|none|
|» title|body|string|false|The top-level title for this card. Displayed to users in the CRM UI.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicCardResponse](#schemapubliccardresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

# Schemas

<h2 id="tocS_ActionConfirmationBody">ActionConfirmationBody</h2>
<!-- backwards compatibility -->
<a id="schemaactionconfirmationbody"></a>
<a id="schema_ActionConfirmationBody"></a>
<a id="tocSactionconfirmationbody"></a>
<a id="tocsactionconfirmationbody"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancelButtonLabel|string|true|none|The label for the button that cancels the action.|
|confirmButtonLabel|string|true|none|The label for the button that confirms the action.|
|prompt|string|true|none|The message displayed to the user to confirm the action.|

<h2 id="tocS_ActionHookActionBody">ActionHookActionBody</h2>
<!-- backwards compatibility -->
<a id="schemaactionhookactionbody"></a>
<a id="schema_ActionHookActionBody"></a>
<a id="tocSactionhookactionbody"></a>
<a id="tocsactionhookactionbody"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confirmation|[ActionConfirmationBody](#schemaactionconfirmationbody)|false|none|none|
|httpMethod|string|true|none|The HTTP method to be used when making the call, which can be set to GET, POST, PUT, DELETE, or PATCH. If using GET or DELETE|
|label|string|false|none|The label for this property as you'd like it displayed to users.|
|propertyNamesIncluded|[string]|true|none|A list of property names that will be included on the action. See the documentation for more information|
|type|string|true|none|The type of status.|
|url|string|true|none|The URL endpoint that will be called when the action is triggered.|

#### Enumerated Values

|Property|Value|
|---|---|
|httpMethod|CONNECT|
|httpMethod|DELETE|
|httpMethod|GET|
|httpMethod|HEAD|
|httpMethod|OPTIONS|
|httpMethod|PATCH|
|httpMethod|POST|
|httpMethod|PUT|
|httpMethod|TRACE|
|type|ACTION_HOOK|

<h2 id="tocS_CardActions">CardActions</h2>
<!-- backwards compatibility -->
<a id="schemacardactions"></a>
<a id="schema_CardActions"></a>
<a id="tocScardactions"></a>
<a id="tocscardactions"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseUrls|[string]|true|none|A list of URL prefixes that will be accepted for card action URLs. If your data fetch response includes an action URL that doesn't begin with one of these values, it will result in an error and the card will not be displayed.|

<h2 id="tocS_CardAuditResponse">CardAuditResponse</h2>
<!-- backwards compatibility -->
<a id="schemacardauditresponse"></a>
<a id="schema_CardAuditResponse"></a>
<a id="tocScardauditresponse"></a>
<a id="tocscardauditresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionType|string|true|none|The type of action performed, with possible values: CREATE, DELETE, UPDATE.|
|applicationId|integer(int32)|true|none|The ID of the application associated with the card.|
|authSource|string|true|none|The source of authentication for the action, with possible values: APP, EXTERNAL, INTERNAL.|
|changedAt|integer(int64)|true|none|The timestamp indicating when the change occurred.|
|initiatingUserId|integer(int32)|true|none|The ID of the user who initiated the action.|
|objectTypeId|integer(int64)|true|none|The ID of the card.|

#### Enumerated Values

|Property|Value|
|---|---|
|actionType|CREATE|
|actionType|DELETE|
|actionType|UPDATE|
|authSource|APP|
|authSource|EXTERNAL|
|authSource|INTERNAL|

<h2 id="tocS_CardCreateRequest">CardCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacardcreaterequest"></a>
<a id="schema_CardCreateRequest"></a>
<a id="tocScardcreaterequest"></a>
<a id="tocscardcreaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[CardActions](#schemacardactions)|true|none|none|
|display|[CardDisplayBody](#schemacarddisplaybody)|true|none|none|
|fetch|[CardFetchBody](#schemacardfetchbody)|true|none|none|
|title|string|true|none|The top-level title for this card. Displayed to users in the CRM UI.|

<h2 id="tocS_CardDisplayBody">CardDisplayBody</h2>
<!-- backwards compatibility -->
<a id="schemacarddisplaybody"></a>
<a id="schema_CardDisplayBody"></a>
<a id="tocScarddisplaybody"></a>
<a id="tocscarddisplaybody"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|properties|[[CardDisplayProperty](#schemacarddisplayproperty)]|true|none|Card display properties. These will will be rendered as "label : value" pairs in the card UI. See the [example card](#) in the overview docs for more details.|

<h2 id="tocS_CardDisplayProperty">CardDisplayProperty</h2>
<!-- backwards compatibility -->
<a id="schemacarddisplayproperty"></a>
<a id="schema_CardDisplayProperty"></a>
<a id="tocScarddisplayproperty"></a>
<a id="tocscarddisplayproperty"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataType|string|true|none|Type of data represented by this property.|
|label|string|true|none|The label for this property as you'd like it displayed to users.|
|name|string|true|none|An internal identifier for this property. This value must be unique TODO.|
|options|[[DisplayOption](#schemadisplayoption)]|true|none|An array of available options that can be displayed. Only used in when `dataType` is `STATUS`.|

#### Enumerated Values

|Property|Value|
|---|---|
|dataType|BOOLEAN|
|dataType|CURRENCY|
|dataType|DATE|
|dataType|DATETIME|
|dataType|EMAIL|
|dataType|LINK|
|dataType|NUMERIC|
|dataType|STATUS|
|dataType|STRING|

<h2 id="tocS_CardFetchBody">CardFetchBody</h2>
<!-- backwards compatibility -->
<a id="schemacardfetchbody"></a>
<a id="schema_CardFetchBody"></a>
<a id="tocScardfetchbody"></a>
<a id="tocscardfetchbody"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardType|string|true|none|A deprecated field to determine the type of card returned.|
|objectTypes|[[CardObjectTypeBody](#schemacardobjecttypebody)]|true|none|An array of CRM object types where this card should be displayed. HubSpot will call your data fetch URL whenever a user visits a record page of the types defined here.|
|serverlessFunction|string|false|none|A deprecated field to specify serverless functionality with the card|
|targetUrl|string|true|none|URL to a service endpoints that will respond with card details. HubSpot will call this endpoint each time a user visits a CRM record page where this card should be displayed.|

#### Enumerated Values

|Property|Value|
|---|---|
|cardType|EXTERNAL|
|cardType|SERVERLESS|

<h2 id="tocS_CardFetchBodyPatch">CardFetchBodyPatch</h2>
<!-- backwards compatibility -->
<a id="schemacardfetchbodypatch"></a>
<a id="schema_CardFetchBodyPatch"></a>
<a id="tocScardfetchbodypatch"></a>
<a id="tocscardfetchbodypatch"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardType|string|false|none|A deprecated field to determine the type of card returned.|
|objectTypes|[[CardObjectTypeBody](#schemacardobjecttypebody)]|true|none|An array of CRM object types where this card should be displayed. HubSpot will call your target URL whenever a user visits a record page of the types defined here.|
|serverlessFunction|string|false|none|A deprecated field to specify serverless functionality with the card|
|targetUrl|string|false|none|URL to a service endpoint that will respond with details for this card. HubSpot will call this endpoint each time a user visits a CRM record page where this card should be displayed.|

#### Enumerated Values

|Property|Value|
|---|---|
|cardType|EXTERNAL|
|cardType|SERVERLESS|

<h2 id="tocS_CardMigrateViewsRequest">CardMigrateViewsRequest</h2>
<!-- backwards compatibility -->
<a id="schemacardmigrateviewsrequest"></a>
<a id="schema_CardMigrateViewsRequest"></a>
<a id="tocScardmigrateviewsrequest"></a>
<a id="tocscardmigrateviewsrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowDuplicateAppCardIds|boolean|true|none|A boolean flag indicating whether duplicate app card IDs are allowed during the migration process.|
|appCardId|integer(int64)|true|none|The unique identifier for the new app card to which views will be migrated. This is an integer in int64 format.|
|helpdeskAppCardId|integer(int64)|false|none|The unique identifier for the helpdesk app card, if applicable. This is an integer in int64 format.|
|legacyCrmCardId|integer(int64)|true|none|The unique identifier for the legacy CRM card. This is an integer in int64 format.|
|tabAppCardId|integer(int64)|false|none|none|

<h2 id="tocS_CardMigrateViewsResponse">CardMigrateViewsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacardmigrateviewsresponse"></a>
<a id="schema_CardMigrateViewsResponse"></a>
<a id="tocScardmigrateviewsresponse"></a>
<a id="tocscardmigrateviewsresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endedAt|integer(int64)|false|none|The timestamp for when the migration ended.|
|message|string|true|none|A human readable message describing the progress of the migration.|
|remainingPortalCount|integer(int64)|false|none|The number of portals that remain to be swapped from the Legacy CRM Card to the App Card|
|startedAt|integer(int64)|false|none|The timestamp for when the migration started.|
|totalPortalCount|integer(int64)|false|none|The total number of portals that have access to the Legacy CRM Card|

<h2 id="tocS_CardObjectTypeBody">CardObjectTypeBody</h2>
<!-- backwards compatibility -->
<a id="schemacardobjecttypebody"></a>
<a id="schema_CardObjectTypeBody"></a>
<a id="tocScardobjecttypebody"></a>
<a id="tocscardobjecttypebody"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A CRM object type where this card should be displayed.|
|propertiesToSend|[string]|true|none|An array of properties that should be sent to this card's target URL when the data fetch request is made. Must be valid properties for the corresponding CRM object type.|

#### Enumerated Values

|Property|Value|
|---|---|
|name|companies|
|name|contacts|
|name|deals|
|name|marketing_events|
|name|tickets|

<h2 id="tocS_CardPatchRequest">CardPatchRequest</h2>
<!-- backwards compatibility -->
<a id="schemacardpatchrequest"></a>
<a id="schema_CardPatchRequest"></a>
<a id="tocScardpatchrequest"></a>
<a id="tocscardpatchrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[CardActions](#schemacardactions)|false|none|none|
|display|[CardDisplayBody](#schemacarddisplaybody)|false|none|none|
|fetch|[CardFetchBodyPatch](#schemacardfetchbodypatch)|false|none|none|
|title|string|false|none|The top-level title for this card. Displayed to users in the CRM UI.|

<h2 id="tocS_DisplayOption">DisplayOption</h2>
<!-- backwards compatibility -->
<a id="schemadisplayoption"></a>
<a id="schema_DisplayOption"></a>
<a id="tocSdisplayoption"></a>
<a id="tocsdisplayoption"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|The text that will be displayed to users for this option.|
|name|string|true|none|JSON-friendly unique name for option.|
|type|string|true|none|The type of status.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|DANGER|
|type|DEFAULT|
|type|INFO|
|type|SUCCESS|
|type|WARNING|

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

<h2 id="tocS_IFrameActionBody">IFrameActionBody</h2>
<!-- backwards compatibility -->
<a id="schemaiframeactionbody"></a>
<a id="schema_IFrameActionBody"></a>
<a id="tocSiframeactionbody"></a>
<a id="tocsiframeactionbody"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|integer(int32)|true|none|The height of the iframe in pixels.|
|label|string|false|none|The label for this property as you'd like it displayed to users.|
|propertyNamesIncluded|[string]|true|none|A list of property names that will be included on the url of the iframe.|
|type|string|true|none|The type of status.|
|url|string|true|none|The URL endpoint that will be loaded in the iframe when triggered.|
|width|integer(int32)|true|none|The width of the iframe in pixels.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|IFRAME|

<h2 id="tocS_IntegratorCardPayloadResponse">IntegratorCardPayloadResponse</h2>
<!-- backwards compatibility -->
<a id="schemaintegratorcardpayloadresponse"></a>
<a id="schema_IntegratorCardPayloadResponse"></a>
<a id="tocSintegratorcardpayloadresponse"></a>
<a id="tocsintegratorcardpayloadresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allItemsLinkUrl|string|false|none|URL to a page the integrator has built that displays all details for this card. This URL will be displayed to users under a `See more [x]` link if there are more than five items in your response, where `[x]` is the value of `itemLabel`.|
|cardLabel|string|false|none|The label to be used for the `allItemsLinkUrl` link (e.g. 'See more tickets'). If not provided, this falls back to the card's title.|
|responseVersion|string|true|none|The number version of the response.|
|sections|[[IntegratorObjectResult](#schemaintegratorobjectresult)]|true|none|A list of up to five valid card sub categories.|
|topLevelActions|[TopLevelActions](#schematoplevelactions)|false|none|none|
|totalCount|integer(int32)|true|none|The total number of card properties that will be sent in this response.|

#### Enumerated Values

|Property|Value|
|---|---|
|responseVersion|v1|
|responseVersion|v3|

<h2 id="tocS_IntegratorObjectResult">IntegratorObjectResult</h2>
<!-- backwards compatibility -->
<a id="schemaintegratorobjectresult"></a>
<a id="schema_IntegratorObjectResult"></a>
<a id="tocSintegratorobjectresult"></a>
<a id="tocsintegratorobjectresult"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[[ActionHookActionBody](#schemaactionhookactionbody) \| [IFrameActionBody](#schemaiframeactionbody)]|true|none|A list of actions associated with the card, which can include action hooks, confirmation action hooks, or iframes.|
|id|string|true|none|The unique identifier for the card.|
|linkUrl|string|false|none|A URL used on the title of the card|
|title|string|true|none|The top-level title for this card. Displayed to users in the CRM UI.|
|tokens|[[ObjectToken](#schemaobjecttoken)]|true|none|A collection of tokens representing specific properties related to the card.|

<h2 id="tocS_ObjectToken">ObjectToken</h2>
<!-- backwards compatibility -->
<a id="schemaobjecttoken"></a>
<a id="schema_ObjectToken"></a>
<a id="tocSobjecttoken"></a>
<a id="tocsobjecttoken"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataType|string|false|none|Type of data represented by this property.|
|label|string|false|none|The label for this property as you'd like it displayed to users.|
|name|string|false|none|An internal identifier for this property. This value must be unique TODO.|
|value|string|true|none|The value of the property|

#### Enumerated Values

|Property|Value|
|---|---|
|dataType|BOOLEAN|
|dataType|CURRENCY|
|dataType|DATE|
|dataType|DATETIME|
|dataType|EMAIL|
|dataType|LINK|
|dataType|NUMERIC|
|dataType|STATUS|
|dataType|STRING|

<h2 id="tocS_PublicCardFetchBody">PublicCardFetchBody</h2>
<!-- backwards compatibility -->
<a id="schemapubliccardfetchbody"></a>
<a id="schema_PublicCardFetchBody"></a>
<a id="tocSpubliccardfetchbody"></a>
<a id="tocspubliccardfetchbody"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectTypes|[[CardObjectTypeBody](#schemacardobjecttypebody)]|true|none|An array of CRM object types where this card should be displayed. HubSpot will call your target URL whenever a user visits a record page of the types defined here.|
|targetUrl|string|true|none|URL to a service endpoint that will respond with details for this card. HubSpot will call this endpoint each time a user visits a CRM record page where this card should be displayed.|

<h2 id="tocS_PublicCardListResponse">PublicCardListResponse</h2>
<!-- backwards compatibility -->
<a id="schemapubliccardlistresponse"></a>
<a id="schema_PublicCardListResponse"></a>
<a id="tocSpubliccardlistresponse"></a>
<a id="tocspubliccardlistresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[PublicCardResponse](#schemapubliccardresponse)]|true|none|A list of card responses|

<h2 id="tocS_PublicCardResponse">PublicCardResponse</h2>
<!-- backwards compatibility -->
<a id="schemapubliccardresponse"></a>
<a id="schema_PublicCardResponse"></a>
<a id="tocSpubliccardresponse"></a>
<a id="tocspubliccardresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[CardActions](#schemacardactions)|true|none|none|
|auditHistory|[[CardAuditResponse](#schemacardauditresponse)]|true|none|A list of actions performed on the card, including creation, deletion, and updates.|
|createdAt|string(date-time)|false|none|The date and time when the card was created.|
|display|[CardDisplayBody](#schemacarddisplaybody)|true|none|none|
|fetch|[PublicCardFetchBody](#schemapubliccardfetchbody)|true|none|none|
|id|string|true|none|The unique id of the card.|
|title|string|true|none|The top-level title for this card. Displayed to users in the CRM UI.|
|updatedAt|string(date-time)|false|none|The date and time when the card was last updated.|

<h2 id="tocS_TopLevelActions">TopLevelActions</h2>
<!-- backwards compatibility -->
<a id="schematoplevelactions"></a>
<a id="schema_TopLevelActions"></a>
<a id="tocStoplevelactions"></a>
<a id="tocstoplevelactions"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|primary|[ActionHookActionBody](#schemaactionhookactionbody) \| [IFrameActionBody](#schemaiframeactionbody)|false|none|Defines the primary action for a card, which can be either an action hook or an iframe.|
|secondary|[[ActionHookActionBody](#schemaactionhookactionbody) \| [IFrameActionBody](#schemaiframeactionbody)]|true|none|Specifies a list of secondary actions for a card, each of which can be an action hook or an iframe.|
|settings|[IFrameActionBody](#schemaiframeactionbody)|false|none|none|
