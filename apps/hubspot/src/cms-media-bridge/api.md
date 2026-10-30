<h1 id="cms-media-bridge">CMS Media Bridge v2026-09</h1>

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
|media_bridge.write||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="cms-media-bridge-advanced">Advanced</h1>

## Create Event

<a id="opIdpost-/media-bridge/2026-09/events/attention-span"></a>

> Code samples

```bash
curl https://api.hubapi.com/media-bridge/2026-09/events/attention-span \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /media-bridge/2026-09/events/attention-span`

Create a new attention span event in the MediaBridgeService. This endpoint is used to record attention span events, which can be useful for tracking user engagement with media content. The request must include a valid JSON body conforming to the AttentionSpanEventRequest schema.

> Body parameter

```json
null
```

<h3 id="create-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AttentionSpanEventRequest](#schemaattentionspaneventrequest)|true|none|
|» _hsenc|body|string|false|An encoded string used for HubSpot-specific encoding purposes.|
|» contactId|body|integer(int64)|false|The unique identifier for the contact associated with the event.|
|» contactUtk|body|string|false|The unique tracking key for the contact, used for tracking purposes.|
|» derivedValues|body|[AttentionSpanCalculatedValues](#schemaattentionspancalculatedvalues)|false|none|
|» externalId|body|string|false|An external identifier for the event, typically used to correlate with external systems.|
|» externalPlayContext|body|string|false|Additional context about the play event, typically used for external integrations.|
|» mediaBridgeId|body|integer(int64)|false|The unique identifier for the media bridge instance.|
|» mediaName|body|string|false|The name of the media involved in the event.|
|» mediaType|body|string|true|The type of media involved in the event. Valid values include 'VIDEO', 'AUDIO', 'DOCUMENT', 'OTHER', and 'IMAGE'.|
|» mediaUrl|body|string|false|The URL of the media involved in the event.|
|» occurredTimestamp|body|integer(int64)|true|The timestamp when the event occurred, represented as a Unix timestamp in milliseconds.|
|» pageId|body|integer(int64)|false|The unique identifier for the page where the event occurred.|
|» pageName|body|string|false|The name of the page where the event occurred.|
|» pageUrl|body|string|false|The URL of the page where the event occurred.|
|» rawDataMap|body|object|true|A map of raw data key-value pairs providing additional context about the event.|
|» » **additionalProperties**|body|integer(int32)|false|none|
|» rawDataString|body|string|false|A raw data string containing additional information about the event.|
|» sessionId|body|string|true|The unique identifier for the session during which the event occurred.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» externalPlayContext|EMAIL|
|» externalPlayContext|EXTERNAL_PAGE|
|» mediaType|AUDIO|
|» mediaType|DOCUMENT|
|» mediaType|IMAGE|
|» mediaType|OTHER|
|» mediaType|VIDEO|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[AttentionSpanEvent](#schemaattentionspanevent)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: media_bridge.write )
</aside>

## Create

<a id="opIdpost-/media-bridge/2026-09/events/media-played"></a>

> Code samples

```bash
curl https://api.hubapi.com/media-bridge/2026-09/events/media-played \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /media-bridge/2026-09/events/media-played`

Create a media played event in the HubSpot account. This endpoint is used to log when media content has been played, which can be useful for tracking user engagement with media resources.

> Body parameter

```json
null
```

<h3 id="create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MediaPlayedEventRequest](#schemamediaplayedeventrequest)|true|none|
|» _hsenc|body|string|false|An encoding parameter used internally by HubSpot.|
|» contactId|body|integer(int64)|false|The unique identifier for the contact associated with the media play event.|
|» contactUtk|body|string|false|The unique tracking key for the contact, used for tracking purposes.|
|» externalId|body|string|false|An external identifier for the media, used to correlate with external systems.|
|» externalPlayContext|body|string|false|Additional context about the media play event, provided by external systems.|
|» iframeUrl|body|string|false|The URL of the iframe containing the media, if applicable.|
|» mediaBridgeId|body|integer(int64)|false|A unique identifier for the media bridge instance.|
|» mediaName|body|string|false|The name of the media that was played.|
|» mediaType|body|string|true|The type of media that was played, such as 'VIDEO', 'AUDIO', 'DOCUMENT', 'OTHER', or 'IMAGE'.|
|» mediaUrl|body|string|false|The URL of the media that was played.|
|» occurredTimestamp|body|integer(int64)|true|The timestamp when the media play event occurred, in Unix time format.|
|» pageId|body|integer(int64)|false|A unique identifier for the page where the media was played.|
|» pageName|body|string|false|The name of the page where the media was played.|
|» pageUrl|body|string|false|The URL of the page where the media was played.|
|» sessionId|body|string|true|A unique identifier for the session during which the media was played.|
|» state|body|string|true|The state of the media play event, indicating the current status.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» externalPlayContext|EMAIL|
|» externalPlayContext|EXTERNAL_PAGE|
|» mediaType|AUDIO|
|» mediaType|DOCUMENT|
|» mediaType|IMAGE|
|» mediaType|OTHER|
|» mediaType|VIDEO|
|» state|STARTED|
|» state|VIEWED|

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
|200|OK|successful operation|[MediaPlayedEvent](#schemamediaplayedevent)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: media_bridge.write )
</aside>

## Record Media Played Percentage

<a id="opIdpost-/media-bridge/2026-09/events/media-played-percent"></a>

> Code samples

```bash
curl https://api.hubapi.com/media-bridge/2026-09/events/media-played-percent \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /media-bridge/2026-09/events/media-played-percent`

This endpoint allows you to record the percentage of media that has been played. It is useful for tracking user engagement with media content, such as videos or audio files, by capturing the extent to which the media has been consumed. This data can be used for analytics and improving content delivery strategies.

> Body parameter

```json
null
```

<h3 id="record-media-played-percentage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MediaPlayedPercentageEventRequest](#schemamediaplayedpercentageeventrequest)|true|none|
|» _hsenc|body|string|false|HubSpot encoding parameter for tracking purposes.|
|» contactId|body|integer(int64)|false|The unique identifier for the contact associated with the media play event.|
|» contactUtk|body|string|false|The user token key associated with the contact.|
|» externalId|body|string|false|An external identifier for the media, provided by the user.|
|» externalPlayContext|body|string|false|Additional context provided externally about the media play event.|
|» mediaBridgeId|body|integer(int64)|false|The unique identifier for the media bridge instance.|
|» mediaName|body|string|false|The name of the media that was played.|
|» mediaType|body|string|true|The type of media that was played. Valid values include 'VIDEO', 'AUDIO', 'DOCUMENT', 'OTHER', and 'IMAGE'.|
|» mediaUrl|body|string|false|The URL where the media is hosted.|
|» occurredTimestamp|body|integer(int64)|true|The timestamp when the media play event occurred.|
|» pageId|body|integer(int64)|false|The unique identifier for the page where the media was played.|
|» pageName|body|string|false|The name of the page where the media was played.|
|» pageUrl|body|string|false|The URL of the page where the media was played.|
|» playedPercent|body|integer(int32)|true|The percentage of the media that has been played.|
|» sessionId|body|string|true|The unique identifier for the session in which the media was played.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» externalPlayContext|EMAIL|
|» externalPlayContext|EXTERNAL_PAGE|
|» mediaType|AUDIO|
|» mediaType|DOCUMENT|
|» mediaType|IMAGE|
|» mediaType|OTHER|
|» mediaType|VIDEO|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="record-media-played-percentage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[MediaPlayedPercentageEvent](#schemamediaplayedpercentageevent)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: media_bridge.write )
</aside>

## Create associations

<a id="opIdpost-/media-bridge/2026-09/{appId}/schemas/{objectType}/associations"></a>

> Code samples

```bash
curl "https://api.hubapi.com/media-bridge/2026-09/{appId}/schemas/{objectType}/associations?hapikey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /media-bridge/2026-09/{appId}/schemas/{objectType}/associations`

Create new associations for a specified object type within a given app. This endpoint allows you to define relationships between different object types, enhancing data connectivity and integration within your HubSpot account.

> Body parameter

```json
null
```

<h3 id="create-associations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app where the association is to be created.|
|objectType|path|string|true|The type of object for which the association is being created.|
|body|body|[AssociationDefinitionEgg](#schemaassociationdefinitionegg)|true|none|
|» fromObjectTypeId|body|string|true|The unique identifier for the object type from which the association originates.|
|» name|body|string|false|The name of the association, used to identify and reference the relationship.|
|» toObjectTypeId|body|string|true|The unique identifier for the object type to which the association is directed.|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-associations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[AssociationDefinition](#schemaassociationdefinition)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Create Object Definitions

<a id="opIdpost-/media-bridge/2026-09/{appId}/settings/object-definitions"></a>

> Code samples

```bash
curl "https://api.hubapi.com/media-bridge/2026-09/{appId}/settings/object-definitions?hapikey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /media-bridge/2026-09/{appId}/settings/object-definitions`

Create new object definitions for a specific app in the HubSpot Media Bridge. This endpoint is used to define new objects that can be utilized within the app, allowing for customization and integration of media-related functionalities.

> Body parameter

```json
null
```

<h3 id="create-object-definitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app for which the object definitions are being created.|
|body|body|[IntegratorObjectCreationRequest](#schemaintegratorobjectcreationrequest)|true|none|
|» mediaTypes|body|[string]|true|An array of strings representing the types of media objects that can be created. Valid values include 'VIDEO', 'AUDIO', 'DOCUMENT', 'OTHER', and 'IMAGE'.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» mediaTypes|VIDEO|
|» mediaTypes|AUDIO|
|» mediaTypes|DOCUMENT|
|» mediaTypes|OTHER|
|» mediaTypes|IMAGE|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-object-definitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BulkIntegratorObjectCreationResponse](#schemabulkintegratorobjectcreationresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Register Settings

<a id="opIdpost-/media-bridge/2026-09/{appId}/settings/register"></a>

> Code samples

```bash
curl "https://api.hubapi.com/media-bridge/2026-09/{appId}/settings/register?hapikey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /media-bridge/2026-09/{appId}/settings/register`

<aside class="warning">
This operation is deprecated
</aside>

Register settings for a specific app in the MediaBridge service. This endpoint is deprecated and should be used with caution. It allows for the registration of settings associated with the specified app ID.

> Body parameter

```json
null
```

<h3 id="register-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app for which the settings are being registered.|
|body|body|[MediaBridgeProviderPartial](#schemamediabridgeproviderpartial)|true|none|
|» allowImportOnDisconnect|body|boolean|false|A boolean indicating whether import is allowed when the connection is disconnected.|
|» moduleName|body|string|false|The module name associated with the media bridge provider. It is a string value.|
|» name|body|string|false|The name of the media bridge provider. It is a string value.|
|» updatedAt|body|integer(int64)|true|The date and time when the media bridge provider was last updated, in ISO 8601 format.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="register-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[MediaBridgeProviderRegistrationResponse](#schemamediabridgeproviderregistrationresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Define Video Association

<a id="opIdpost-/media-bridge/2026-09/{appId}/settings/video-association-definition_/media-bridge/v1/{appId}/settings/video-association-definition"></a>

> Code samples

```bash
curl "https://api.hubapi.com/media-bridge/2026-09/{appId}/settings/video-association-definition?hapikey=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /media-bridge/2026-09/{appId}/settings/video-association-definition`

Create a video association definition for a specific application in the HubSpot Media Bridge. This endpoint is used to define how videos are associated with other objects within the specified app. It is particularly useful for applications that need to manage video content and its relationships programmatically.

<h3 id="define-video-association-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the application for which the video association definition is being created.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="define-video-association-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[AssociationDefinition](#schemaassociationdefinition)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

<h1 id="cms-media-bridge-basic">Basic</h1>

## Retrieve properties

<a id="opIdget-/media-bridge/2026-09/{appId}/properties/{objectType}"></a>

> Code samples

```bash
curl "https://api.hubapi.com/media-bridge/2026-09/{appId}/properties/{objectType}?hapikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /media-bridge/2026-09/{appId}/properties/{objectType}`

Retrieve properties for a specified object type within a given app. This endpoint allows you to filter properties based on whether they are archived and to specify which properties to include in the response. It is useful for accessing and managing the properties associated with different object types in your application.

<h3 id="retrieve-properties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app for which properties are being retrieved.|
|objectType|path|string|true|The type of object for which properties are being retrieved.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|properties|query|string|false|A comma-separated list of property names to include in the response.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-properties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponsePropertyNoPaging](#schemacollectionresponsepropertynopaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Create property

<a id="opIdpost-/media-bridge/2026-09/{appId}/properties/{objectType}"></a>

> Code samples

```bash
curl "https://api.hubapi.com/media-bridge/2026-09/{appId}/properties/{objectType}?hapikey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /media-bridge/2026-09/{appId}/properties/{objectType}`

Create a new property for a specified object type within a given app in the MediaBridge service. This endpoint allows you to define new properties that can be used to store additional information related to the object type. The request must include the necessary property details in the request body.

> Body parameter

```json
null
```

<h3 id="create-property-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app in which the property will be created.|
|objectType|path|string|true|The type of object for which the property is being created.|
|body|body|[PropertyCreate](#schemapropertycreate)|true|none|
|» calculationFormula|body|string|false|A string representing the formula used to calculate the property's value, applicable for calculated properties.|
|» currencyPropertyName|body|string|false|A string that specifies the name of the property used to determine the currency for currency-type properties.|
|» dataSensitivity|body|string|false|A string indicating the sensitivity level of the data, such as 'PII' (Personally Identifiable Information).|
|» description|body|string|false|A string providing a description of the property, explaining its purpose or usage.|
|» displayOrder|body|integer(int32)|false|An integer that determines the order in which the property is displayed relative to other properties.|
|» externalOptions|body|boolean|false|A boolean that specifies whether the property options are managed externally.|
|» fieldType|body|string|true|A string indicating the field type for the property, such as 'booleancheckbox', 'calculation_equation', 'checkbox', 'date', 'file', 'html', 'number', 'phonenumber', 'radio', 'select', 'text', or 'textarea'.|
|» formField|body|boolean|false|A boolean indicating whether the property is available for use in forms.|
|» groupName|body|string|true|The name of the group to which the property belongs, represented as a string.|
|» hasUniqueValue|body|boolean|false|A boolean indicating whether the property must have a unique value across all records.|
|» hidden|body|boolean|false|A boolean that specifies whether the property is hidden from user interfaces.|
|» label|body|string|true|A string representing the display label for the property, used in user interfaces.|
|» name|body|string|true|The unique name of the property. It is a string that identifies the property within the object type.|
|» numberDisplayHint|body|string|false|A string that provides a hint for displaying number properties, such as 'unformatted', 'formatted', 'currency', 'percentage', 'duration', or 'probability'.|
|» options|body|[[OptionInput](#schemaoptioninput)]|false|An array of OptionInput objects, specifying the options available for properties of type 'enumeration'.|
|» referencedObjectType|body|string|false|A string that denotes the object type referenced by the property, if applicable.|
|» showCurrencySymbol|body|boolean|false|A boolean indicating whether to display a currency symbol for currency-type properties.|
|» textDisplayHint|body|string|false|A string that provides a hint for displaying text properties, such as 'unformatted_single_line', 'multi_line', 'email', 'phone_number', 'domain_name', 'ip_address', 'physical_address', or 'postal_code'.|
|» type|body|string|true|The data type of the property, which can be one of 'bool', 'date', 'datetime', 'enumeration', 'number', 'phone_number', or 'string'.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» dataSensitivity|highly_sensitive|
|» dataSensitivity|non_sensitive|
|» dataSensitivity|sensitive|
|» fieldType|booleancheckbox|
|» fieldType|calculation_equation|
|» fieldType|checkbox|
|» fieldType|date|
|» fieldType|file|
|» fieldType|html|
|» fieldType|number|
|» fieldType|phonenumber|
|» fieldType|radio|
|» fieldType|select|
|» fieldType|text|
|» fieldType|textarea|
|» numberDisplayHint|currency|
|» numberDisplayHint|duration|
|» numberDisplayHint|formatted|
|» numberDisplayHint|percentage|
|» numberDisplayHint|probability|
|» numberDisplayHint|unformatted|
|» textDisplayHint|domain_name|
|» textDisplayHint|email|
|» textDisplayHint|ip_address|
|» textDisplayHint|multi_line|
|» textDisplayHint|phone_number|
|» textDisplayHint|physical_address|
|» textDisplayHint|postal_code|
|» textDisplayHint|unformatted_single_line|
|» type|bool|
|» type|date|
|» type|datetime|
|» type|enumeration|
|» type|number|
|» type|phone_number|
|» type|string|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-property-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[Property](#schemaproperty)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## List groups

<a id="opIdget-/media-bridge/2026-09/{appId}/properties/{objectType}/groups"></a>

> Code samples

```bash
curl "https://api.hubapi.com/media-bridge/2026-09/{appId}/properties/{objectType}/groups?hapikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /media-bridge/2026-09/{appId}/properties/{objectType}/groups`

Retrieve a list of property groups for a specified object type within a given app. This endpoint is useful for obtaining organizational information about properties associated with different object types in your application.

<h3 id="list-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app for which the property groups are being retrieved.|
|objectType|path|string|true|The type of object for which property groups are being retrieved.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="list-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponsePropertyGroupNoPaging](#schemacollectionresponsepropertygroupnopaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Create Group

<a id="opIdpost-/media-bridge/2026-09/{appId}/properties/{objectType}/groups"></a>

> Code samples

```bash
curl "https://api.hubapi.com/media-bridge/2026-09/{appId}/properties/{objectType}/groups?hapikey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /media-bridge/2026-09/{appId}/properties/{objectType}/groups`

Create a new property group for a specified object type within a given app. This endpoint allows you to organize properties into groups, making it easier to manage and categorize them within your application.

> Body parameter

```json
null
```

<h3 id="create-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app in which the property group is being created. This is an integer value.|
|objectType|path|string|true|The type of object for which the property group is being created. This is a string value that identifies the object type.|
|body|body|[PropertyGroupCreate](#schemapropertygroupcreate)|true|none|
|» displayOrder|body|integer(int32)|false|An integer representing the order in which the property group should be displayed relative to other groups.|
|» label|body|string|true|The display label for the property group. This is a string that is shown in the user interface to represent the group.|
|» name|body|string|true|The unique name of the property group. This is a string that identifies the group within the system.|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[PropertyGroup](#schemapropertygroup)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Retrieve group

<a id="opIdget-/media-bridge/2026-09/{appId}/properties/{objectType}/groups/{groupName}"></a>

> Code samples

```bash
curl "https://api.hubapi.com/media-bridge/2026-09/{appId}/properties/{objectType}/groups/{groupName}?hapikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /media-bridge/2026-09/{appId}/properties/{objectType}/groups/{groupName}`

Retrieve a specific property group for a given object type within an app. This endpoint is useful for accessing detailed information about how properties are grouped under a specific group name for a particular object type in your application.

<h3 id="retrieve-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app containing the property group.|
|groupName|path|string|true|The name of the property group to retrieve.|
|objectType|path|string|true|The type of object for which the property group is being retrieved.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PropertyGroup](#schemapropertygroup)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Delete group

<a id="opIddelete-/media-bridge/2026-09/{appId}/properties/{objectType}/groups/{groupName}"></a>

> Code samples

```bash
curl "https://api.hubapi.com/media-bridge/2026-09/{appId}/properties/{objectType}/groups/{groupName}?hapikey=${API_KEY}" \
  -X DELETE
```

`DELETE /media-bridge/2026-09/{appId}/properties/{objectType}/groups/{groupName}`

Delete a specific property group for a given object type within an app. This operation is useful for removing unnecessary or obsolete property groups, helping to maintain a clean and organized structure within your app's properties.

<h3 id="delete-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app where the property group exists.|
|groupName|path|string|true|The name of the property group to be deleted.|
|objectType|path|string|true|The type of object for which the property group is defined.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Update group

<a id="opIdpatch-/media-bridge/2026-09/{appId}/properties/{objectType}/groups/{groupName}"></a>

> Code samples

```bash
curl "https://api.hubapi.com/media-bridge/2026-09/{appId}/properties/{objectType}/groups/{groupName}?hapikey=${API_KEY}" \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`PATCH /media-bridge/2026-09/{appId}/properties/{objectType}/groups/{groupName}`

Update the properties of a specific group within a specified object type for a given app. This operation allows you to modify the details of a property group, such as its label or display order, within the context of the MediaBridge service.

> Body parameter

```json
null
```

<h3 id="update-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app where the property group exists.|
|groupName|path|string|true|The name of the property group to update.|
|objectType|path|string|true|The type of object for which the property group is being updated.|
|body|body|[PropertyGroupUpdate](#schemapropertygroupupdate)|true|none|
|» displayOrder|body|integer(int32)|false|An integer indicating the display order of the property group.|
|» label|body|string|false|A string representing the label of the property group.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PropertyGroup](#schemapropertygroup)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Retrieve property

<a id="opIdget-/media-bridge/2026-09/{appId}/properties/{objectType}/{propertyName}"></a>

> Code samples

```bash
curl "https://api.hubapi.com/media-bridge/2026-09/{appId}/properties/{objectType}/{propertyName}?hapikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /media-bridge/2026-09/{appId}/properties/{objectType}/{propertyName}`

Retrieve a specific property for a given object type within a specified app. This endpoint allows you to access details about a property, including its configuration and settings, for a particular object type identified by the property name. This can be useful for understanding property configurations or for integration purposes.

<h3 id="retrieve-property-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app.|
|objectType|path|string|true|The type of object that the property belongs to.|
|propertyName|path|string|true|The name of the property to retrieve.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|properties|query|string|false|A comma-separated list of property names to include in the response.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-property-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Property](#schemaproperty)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Delete property

<a id="opIddelete-/media-bridge/2026-09/{appId}/properties/{objectType}/{propertyName}"></a>

> Code samples

```bash
curl "https://api.hubapi.com/media-bridge/2026-09/{appId}/properties/{objectType}/{propertyName}?hapikey=${API_KEY}" \
  -X DELETE
```

`DELETE /media-bridge/2026-09/{appId}/properties/{objectType}/{propertyName}`

Delete a specific property from a given object type within an app. This operation is useful for removing properties that are no longer needed or were created in error. The endpoint requires specifying the app ID, object type, and property name to identify the property to be deleted.

<h3 id="delete-property-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app from which the property will be deleted.|
|objectType|path|string|true|The type of object from which the property will be deleted.|
|propertyName|path|string|true|The name of the property to be deleted.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-property-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Update property

<a id="opIdpatch-/media-bridge/2026-09/{appId}/properties/{objectType}/{propertyName}"></a>

> Code samples

```bash
curl "https://api.hubapi.com/media-bridge/2026-09/{appId}/properties/{objectType}/{propertyName}?hapikey=${API_KEY}" \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`PATCH /media-bridge/2026-09/{appId}/properties/{objectType}/{propertyName}`

Update an existing property for a specified object type within a given app. This operation allows you to modify the details of a property, such as its label, type, or description, to better fit your application's requirements.

> Body parameter

```json
null
```

<h3 id="update-property-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app associated with the property.|
|objectType|path|string|true|The type of object that the property belongs to.|
|propertyName|path|string|true|The name of the property to update.|
|body|body|[MediaBridgePropertyUpdate](#schemamediabridgepropertyupdate)|true|none|
|» calculationFormula|body|string|false|A string representing the formula used for calculating the property's value.|
|» currencyPropertyName|body|string|false|A string representing the name of the currency property associated with this property.|
|» description|body|string|false|A string providing a description of the property.|
|» displayOrder|body|integer(int32)|false|An integer indicating the display order of the property.|
|» fieldType|body|string|false|A string specifying the field type of the property. Valid values include 'booleancheckbox', 'calculation_equation', 'checkbox', 'date', 'file', 'html', 'number', 'phonenumber', 'radio', 'select', 'text', and 'textarea'.|
|» formField|body|boolean|false|A boolean indicating whether the property is a form field.|
|» groupName|body|string|false|A string representing the name of the group to which the property belongs.|
|» hasUniqueValue|body|boolean|false|A boolean indicating whether the property has a unique value.|
|» hidden|body|boolean|false|A boolean indicating whether the property is hidden.|
|» label|body|string|false|A string representing the display label for the property.|
|» numberDisplayHint|body|string|false|A string providing a hint on how to display numbers. Valid values include 'unformatted', 'formatted', 'currency', 'percentage', 'duration', and 'probability'.|
|» options|body|[[OptionInput](#schemaoptioninput)]|false|An array of OptionInput objects representing the options available for the property.|
|» showCurrencySymbol|body|boolean|false|A boolean indicating whether to show the currency symbol for the property.|
|» textDisplayHint|body|string|false|A string providing a hint on how to display text. Valid values include 'unformatted_single_line', 'multi_line', 'email', 'phone_number', 'domain_name', 'ip_address', 'physical_address', and 'postal_code'.|
|» type|body|string|false|A string indicating the data type of the property. Valid values include 'bool', 'date', 'datetime', 'enumeration', 'number', 'phone_number', and 'string'.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» fieldType|booleancheckbox|
|» fieldType|calculation_equation|
|» fieldType|checkbox|
|» fieldType|date|
|» fieldType|file|
|» fieldType|html|
|» fieldType|number|
|» fieldType|phonenumber|
|» fieldType|radio|
|» fieldType|select|
|» fieldType|text|
|» fieldType|textarea|
|» numberDisplayHint|currency|
|» numberDisplayHint|duration|
|» numberDisplayHint|formatted|
|» numberDisplayHint|percentage|
|» numberDisplayHint|probability|
|» numberDisplayHint|unformatted|
|» textDisplayHint|domain_name|
|» textDisplayHint|email|
|» textDisplayHint|ip_address|
|» textDisplayHint|multi_line|
|» textDisplayHint|phone_number|
|» textDisplayHint|physical_address|
|» textDisplayHint|postal_code|
|» textDisplayHint|unformatted_single_line|
|» type|bool|
|» type|date|
|» type|datetime|
|» type|enumeration|
|» type|number|
|» type|phone_number|
|» type|string|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-property-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Property](#schemaproperty)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Retrieve schemas

<a id="opIdget-/media-bridge/2026-09/{appId}/schemas"></a>

> Code samples

```bash
curl "https://api.hubapi.com/media-bridge/2026-09/{appId}/schemas?hapikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /media-bridge/2026-09/{appId}/schemas`

Retrieve the schemas associated with a specific app in the HubSpot account. This endpoint allows you to fetch schema details, which can be useful for understanding the data structure and properties associated with the app. You can optionally filter the results to include only archived schemas.

<h3 id="retrieve-schemas-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app for which to retrieve schemas.|
|archived|query|boolean|false|Whether to return only results that have been archived.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-schemas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseObjectSchemaNoPaging](#schemacollectionresponseobjectschemanopaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Retrieve schema

<a id="opIdget-/media-bridge/2026-09/{appId}/schemas/{objectType}"></a>

> Code samples

```bash
curl "https://api.hubapi.com/media-bridge/2026-09/{appId}/schemas/{objectType}?hapikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /media-bridge/2026-09/{appId}/schemas/{objectType}`

Retrieve the schema for a specific object type within a given app in your HubSpot account. This endpoint is useful for understanding the structure and properties of a particular object type, which can assist in data integration and management tasks.

<h3 id="retrieve-schema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app associated with the object type.|
|objectType|path|string|true|The type of object for which the schema is being retrieved.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ObjectSchema](#schemaobjectschema)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Update schema

<a id="opIdpatch-/media-bridge/2026-09/{appId}/schemas/{objectType}"></a>

> Code samples

```bash
curl "https://api.hubapi.com/media-bridge/2026-09/{appId}/schemas/{objectType}?hapikey=${API_KEY}" \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`PATCH /media-bridge/2026-09/{appId}/schemas/{objectType}`

Update the schema for a specific object type within a given app. This operation allows you to modify the existing schema details, which can be useful for adapting to changes in data structure requirements or business logic.

> Body parameter

```json
null
```

<h3 id="update-schema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app associated with the schema.|
|objectType|path|string|true|The type of object whose schema is being updated.|
|body|body|[ObjectTypeDefinitionPatch](#schemaobjecttypedefinitionpatch)|true|none|
|» allowsSensitiveProperties|body|boolean|false|A boolean that specifies if the object type allows properties marked as sensitive.|
|» clearDescription|body|boolean|true|A boolean indicating whether the description should be cleared or reset.|
|» description|body|string|false|A string providing a description of the object type.|
|» labels|body|[ObjectTypeDefinitionLabels](#schemaobjecttypedefinitionlabels)|false|none|
|» primaryDisplayProperty|body|string|false|A string that identifies the primary property used for displaying the object.|
|» requiredProperties|body|[string]|false|An array of strings indicating which properties are required for the object type.|
|» restorable|body|boolean|false|A boolean indicating whether the object type can be restored after deletion.|
|» searchableProperties|body|[string]|false|An array of strings specifying which properties can be used in search queries.|
|» secondaryDisplayProperties|body|[string]|false|An array of strings that list additional properties used for displaying the object.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ObjectTypeDefinition](#schemaobjecttypedefinition)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Delete association

<a id="opIddelete-/media-bridge/2026-09/{appId}/schemas/{objectType}/associations/{associationId}"></a>

> Code samples

```bash
curl "https://api.hubapi.com/media-bridge/2026-09/{appId}/schemas/{objectType}/associations/{associationId}?hapikey=${API_KEY}" \
  -X DELETE
```

`DELETE /media-bridge/2026-09/{appId}/schemas/{objectType}/associations/{associationId}`

Remove an existing association between schemas for a specified app in the MediaBridge service. This operation is useful when you need to disassociate entities that are no longer related or to clean up outdated associations.

<h3 id="delete-association-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app in which the association exists.|
|associationId|path|string|true|The unique identifier of the association to be deleted.|
|objectType|path|string|true|The type of object for which the association is defined.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-association-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Update settings

<a id="opIdput-/media-bridge/2026-09/{appId}/settings"></a>

> Code samples

```bash
curl "https://api.hubapi.com/media-bridge/2026-09/{appId}/settings?hapikey=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`PUT /media-bridge/2026-09/{appId}/settings`

Update the settings for a specific app in the MediaBridgeService. This endpoint allows you to modify the configuration settings associated with the specified appId. It is useful for updating app-specific settings to ensure they align with your current requirements.

> Body parameter

```json
null
```

<h3 id="update-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app whose settings are to be updated.|
|body|body|[MediaBridgeProviderPartial](#schemamediabridgeproviderpartial)|true|none|
|» allowImportOnDisconnect|body|boolean|false|A boolean indicating whether import is allowed when the connection is disconnected.|
|» moduleName|body|string|false|The module name associated with the media bridge provider. It is a string value.|
|» name|body|string|false|The name of the media bridge provider. It is a string value.|
|» updatedAt|body|integer(int64)|true|The date and time when the media bridge provider was last updated, in ISO 8601 format.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[MediaBridgeProviderRegistrationResponse](#schemamediabridgeproviderregistrationresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Retrieve settings

<a id="opIdget-/media-bridge/2026-09/{appId}/settings/event-visibility"></a>

> Code samples

```bash
curl "https://api.hubapi.com/media-bridge/2026-09/{appId}/settings/event-visibility?hapikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /media-bridge/2026-09/{appId}/settings/event-visibility`

Retrieve the event visibility settings for a specific app in the MediaBridge service. This endpoint provides information on how events are visible within the specified application context.

<h3 id="retrieve-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app for which the event visibility settings are being retrieved.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[EventVisibilityResponse](#schemaeventvisibilityresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Update settings

<a id="opIdpatch-/media-bridge/2026-09/{appId}/settings/event-visibility"></a>

> Code samples

```bash
curl "https://api.hubapi.com/media-bridge/2026-09/{appId}/settings/event-visibility?hapikey=${API_KEY}" \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`PATCH /media-bridge/2026-09/{appId}/settings/event-visibility`

Update the event visibility settings for a specific app in the MediaBridgeService. This operation allows you to modify how events are displayed or managed for the specified app. It is useful for configuring event visibility preferences based on your application's requirements.

> Body parameter

```json
null
```

<h3 id="update-settings-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the application for which the event visibility settings are being updated.|
|body|body|[EventVisibilityChange](#schemaeventvisibilitychange)|true|none|
|» eventType|body|string|true|A string representing the type of event whose visibility settings are being changed.|
|» showInReporting|body|boolean|false|A boolean indicating whether the event should be included in reporting.|
|» showInTimeline|body|boolean|false|A boolean indicating whether the event should be displayed in the timeline.|
|» showInWorkflows|body|boolean|false|A boolean indicating whether the event should be available for use in workflows.|
|» updatedAt|body|integer(int64)|true|A string representing the date and time when the visibility settings were last updated, in ISO 8601 format.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» eventType|ALL|
|» eventType|ATTENTION_SPAN|
|» eventType|MEDIA_PLAYS|
|» eventType|MEDIA_PLAYS_PERCENT|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-settings-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[EventVisibilityChange](#schemaeventvisibilitychange)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Retrieve object definitions

<a id="opIdget-/media-bridge/2026-09/{appId}/settings/object-definitions/{mediaType}"></a>

> Code samples

```bash
curl "https://api.hubapi.com/media-bridge/2026-09/{appId}/settings/object-definitions/{mediaType}?hapikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /media-bridge/2026-09/{appId}/settings/object-definitions/{mediaType}`

Retrieve the object definitions for a specified media type within an app. This endpoint allows you to access the settings related to the object definitions of various media types such as VIDEO, AUDIO, DOCUMENT, OTHER, and IMAGE. It is useful for understanding the structure and properties associated with different media types in your application.

<h3 id="retrieve-object-definitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app for which the settings are being retrieved.|
|mediaType|path|string|true|The type of media for which the object definitions are being retrieved. Valid values are VIDEO, AUDIO, DOCUMENT, OTHER, and IMAGE.|
|includeFullDefinition|query|boolean|false|A boolean indicating whether to include the full definition of the object. If not specified, the default behavior is to return a partial definition.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mediaType|AUDIO|
|mediaType|DOCUMENT|
|mediaType|IMAGE|
|mediaType|OTHER|
|mediaType|VIDEO|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-object-definitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ObjectDefinitionResponse](#schemaobjectdefinitionresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## List OEmbed Domains

<a id="opIdget-/media-bridge/2026-09/{appId}/settings/oembed-domains"></a>

> Code samples

```bash
curl "https://api.hubapi.com/media-bridge/2026-09/{appId}/settings/oembed-domains?hapikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /media-bridge/2026-09/{appId}/settings/oembed-domains`

Retrieve the list of OEmbed domains associated with a specific app in your HubSpot account. This endpoint is useful for managing and verifying the domains that are allowed to embed media content. It provides a way to ensure that only trusted domains are used for embedding media.

<h3 id="list-oembed-domains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app for which to retrieve oEmbed domains.|
|domainPortalId|query|integer(int32)|false|The ID of the domain portal to filter the oEmbed domains. Defaults to -1.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="list-oembed-domains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[OEmbedDomainsCollectionResponse](#schemaoembeddomainscollectionresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Create

<a id="opIdpost-/media-bridge/2026-09/{appId}/settings/oembed-domains"></a>

> Code samples

```bash
curl "https://api.hubapi.com/media-bridge/2026-09/{appId}/settings/oembed-domains?hapikey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /media-bridge/2026-09/{appId}/settings/oembed-domains`

Create a new oEmbed domain setting for a specific app in your HubSpot account. This endpoint allows you to define domains that can be used for oEmbed purposes, facilitating the integration of media content from external sources.

> Body parameter

```json
null
```

<h3 id="create-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app for which the oEmbed domains are being created.|
|body|body|[IntegratorOEmbedDomainRequest](#schemaintegratoroembeddomainrequest)|true|none|
|» endpoints|body|[Endpoints](#schemaendpoints)|true|none|
|» portalId|body|integer(int32)|false|An integer representing the unique identifier of the HubSpot portal where the oEmbed domain is being configured.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[IntegratorOEmbedDomainModel](#schemaintegratoroembeddomainmodel)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Delete domains

<a id="opIddelete-/media-bridge/2026-09/{appId}/settings/oembed-domains"></a>

> Code samples

```bash
curl "https://api.hubapi.com/media-bridge/2026-09/{appId}/settings/oembed-domains?hapikey=${API_KEY}" \
  -X DELETE
```

`DELETE /media-bridge/2026-09/{appId}/settings/oembed-domains`

Delete oEmbed domains associated with a specific app in HubSpot. This operation allows you to manage and remove domains that are no longer needed for embedding media content within the app's settings.

<h3 id="delete-domains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app for which the oEmbed domains are being managed.|
|domainPortalId|query|integer(int32)|false|The portal ID associated with the domain. Defaults to -1.|
|id|query|integer(int64)|false|The unique identifier of the oEmbed domain to delete.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-domains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Retrieve domain

<a id="opIdget-/media-bridge/2026-09/{appId}/settings/oembed-domains/{oEmbedDomainId}"></a>

> Code samples

```bash
curl "https://api.hubapi.com/media-bridge/2026-09/{appId}/settings/oembed-domains/{oEmbedDomainId}?hapikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /media-bridge/2026-09/{appId}/settings/oembed-domains/{oEmbedDomainId}`

Retrieve details of a specific oEmbed domain for a given app. This endpoint is useful for fetching configuration or settings related to oEmbed domains associated with a particular application.

<h3 id="retrieve-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app associated with the oEmbed domain.|
|oEmbedDomainId|path|string|true|The unique identifier of the oEmbed domain to retrieve.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[IntegratorOEmbedDomainModel](#schemaintegratoroembeddomainmodel)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Update oEmbed domain

<a id="opIdpatch-/media-bridge/2026-09/{appId}/settings/oembed-domains/{oEmbedDomainId}"></a>

> Code samples

```bash
curl "https://api.hubapi.com/media-bridge/2026-09/{appId}/settings/oembed-domains/{oEmbedDomainId}?hapikey=${API_KEY}" \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`PATCH /media-bridge/2026-09/{appId}/settings/oembed-domains/{oEmbedDomainId}`

Update the settings for a specific oEmbed domain associated with a given app. This endpoint allows you to modify the configuration of an oEmbed domain, which can be useful for managing how media content is embedded across different domains.

> Body parameter

```json
null
```

<h3 id="update-oembed-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app associated with the oEmbed domain.|
|oEmbedDomainId|path|string|true|The unique identifier of the oEmbed domain to update.|
|body|body|[IntegratorOEmbedDomainRequest](#schemaintegratoroembeddomainrequest)|true|none|
|» endpoints|body|[Endpoints](#schemaendpoints)|true|none|
|» portalId|body|integer(int32)|false|An integer representing the unique identifier of the HubSpot portal where the oEmbed domain is being configured.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-oembed-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[IntegratorOEmbedDomainModel](#schemaintegratoroembeddomainmodel)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

<h1 id="cms-media-bridge-batch">Batch</h1>

## Batch archive properties

<a id="opIdpost-/media-bridge/2026-09/{appId}/properties/{objectType}/batch/archive"></a>

> Code samples

```bash
curl "https://api.hubapi.com/media-bridge/2026-09/{appId}/properties/{objectType}/batch/archive?hapikey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d 'null'
```

`POST /media-bridge/2026-09/{appId}/properties/{objectType}/batch/archive`

Archive multiple properties for a specified object type within a given app. This endpoint is useful for managing large sets of properties that are no longer needed or should be hidden from active use. It requires specifying the app ID and object type in the path parameters.

> Body parameter

```json
null
```

<h3 id="batch-archive-properties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app associated with the properties to be archived.|
|objectType|path|string|true|The type of object whose properties are being archived.|
|body|body|[BatchInputPropertyName](#schemabatchinputpropertyname)|true|none|
|» inputs|body|[[PropertyName](#schemapropertyname)]|true|An array of property names to be processed in the batch operation. Each item in the array is expected to be a string representing a property name.|

> Example responses

> default Response

```json
null
```

<h3 id="batch-archive-properties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Batch create properties

<a id="opIdpost-/media-bridge/2026-09/{appId}/properties/{objectType}/batch/create"></a>

> Code samples

```bash
curl "https://api.hubapi.com/media-bridge/2026-09/{appId}/properties/{objectType}/batch/create?hapikey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /media-bridge/2026-09/{appId}/properties/{objectType}/batch/create`

Create multiple properties in a batch for a specified object type within a given app. This endpoint is useful for efficiently setting up multiple properties at once, reducing the need for multiple individual API calls.

> Body parameter

```json
null
```

<h3 id="batch-create-properties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app within which the properties are being created. It specifies the app context for the operation.|
|objectType|path|string|true|The type of object for which properties are being created. It identifies the specific object type within the app.|
|body|body|[BatchInputPropertyCreate](#schemabatchinputpropertycreate)|true|none|
|» inputs|body|[[PropertyCreate](#schemapropertycreate)]|true|An array of PropertyCreate objects, each representing a property to be created. This is a required field.|

> Example responses

> 201 Response

```json
null
```

> 207 Response

```json
null
```

> default Response

```json
null
```

<h3 id="batch-create-properties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[BatchResponseProperty](#schemabatchresponseproperty)|
|207|Multi-Status|multiple statuses|[BatchResponsePropertyWithErrors](#schemabatchresponsepropertywitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Batch read properties

<a id="opIdpost-/media-bridge/2026-09/{appId}/properties/{objectType}/batch/read"></a>

> Code samples

```bash
curl "https://api.hubapi.com/media-bridge/2026-09/{appId}/properties/{objectType}/batch/read?hapikey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /media-bridge/2026-09/{appId}/properties/{objectType}/batch/read`

Retrieve a batch of properties for a specified object type within a given app. This endpoint is useful for fetching multiple properties efficiently in a single request, especially when dealing with large datasets or when specific properties are needed for processing.

> Body parameter

```json
null
```

<h3 id="batch-read-properties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app from which properties are being retrieved. This ensures the request is directed to the correct application context.|
|objectType|path|string|true|The type of object for which properties are being retrieved. This identifies the specific category or entity within the app.|
|body|body|[BatchReadInputPropertyName](#schemabatchreadinputpropertyname)|true|none|
|» archived|body|boolean|true|A boolean indicating whether to include archived properties in the batch read. Defaults to false if not specified.|
|» dataSensitivity|body|string|true|A string representing the sensitivity level of the data being accessed. This property helps in determining the security measures needed for handling the data.|
|» inputs|body|[[PropertyName](#schemapropertyname)]|true|An array of strings, each representing a property name to be included in the batch read operation.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» dataSensitivity|highly_sensitive|
|» dataSensitivity|non_sensitive|
|» dataSensitivity|sensitive|

> Example responses

> 200 Response

```json
null
```

> 207 Response

```json
null
```

> default Response

```json
null
```

<h3 id="batch-read-properties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseProperty](#schemabatchresponseproperty)|
|207|Multi-Status|multiple statuses|[BatchResponsePropertyWithErrors](#schemabatchresponsepropertywitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

# Schemas

<h2 id="tocS_AbsoluteValue">AbsoluteValue</h2>
<!-- backwards compatibility -->
<a id="schemaabsolutevalue"></a>
<a id="schema_AbsoluteValue"></a>
<a id="tocSabsolutevalue"></a>
<a id="tocsabsolutevalue"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs for the absolute value calculation. Each input can be a constant number or a reference to another numerical value.|
|operator|string|true|none|A string representing the operator for the absolute value calculation. It is expected to be 'ABSOLUTE_VALUE'.|
|propertyName|string|false|none|A string that specifies the name of the property being operated on.|
|value|number|false|none|The result of the absolute value operation, represented as a number.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|ABSOLUTE_VALUE|

<h2 id="tocS_AddNumbers">AddNumbers</h2>
<!-- backwards compatibility -->
<a id="schemaaddnumbers"></a>
<a id="schema_AddNumbers"></a>
<a id="tocSaddnumbers"></a>
<a id="tocsaddnumbers"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enclosedInParentheses|boolean|true|none|A boolean indicating whether the operation is enclosed in parentheses, affecting the order of operations.|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs for the addition operation. Each input can be a constant, a variable, or another operation.|
|operator|string|true|none|A string representing the operation type. The default value is 'ADD_NUMBERS'.|
|propertyName|string|false|none|A string representing the name of the property involved in the operation.|
|value|number|false|none|A number that represents the result of the addition operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|ADD_NUMBERS|

<h2 id="tocS_AddTime">AddTime</h2>
<!-- backwards compatibility -->
<a id="schemaaddtime"></a>
<a id="schema_AddTime"></a>
<a id="tocSaddtime"></a>
<a id="tocsaddtime"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs used for the time addition operation. Each input can be a constant, property variable, or another operation.|
|operator|string|true|none|A string representing the operation to be performed, defaulting to 'ADD_TIME'.|
|propertyName|string|false|none|A string representing the name of the property involved in the time addition operation.|
|stringToCheck|[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)|true|none|A string value that may be used to validate or perform checks within the operation.|
|value|number|false|none|The result of the time addition operation, represented as a string.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|ADD_TIME|

<h2 id="tocS_AllCharsMatch">AllCharsMatch</h2>
<!-- backwards compatibility -->
<a id="schemaallcharsmatch"></a>
<a id="schema_AllCharsMatch"></a>
<a id="tocSallcharsmatch"></a>
<a id="tocsallcharsmatch"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|none|
|operator|string|true|none|none|
|propertyName|string|false|none|none|
|value|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|ALL_CHARS_MATCH|

<h2 id="tocS_And">And</h2>
<!-- backwards compatibility -->
<a id="schemaand"></a>
<a id="schema_And"></a>
<a id="tocSand"></a>
<a id="tocsand"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enclosedInParentheses|boolean|true|none|A boolean indicating whether the 'AND' operation is enclosed in parentheses, affecting the order of evaluation.|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that are evaluated in the 'AND' operation. These inputs can include various types of expressions or variables.|
|operator|string|true|none|A string representing the logical operator, which is 'AND' by default.|
|propertyName|string|false|none|A string representing the name of the property involved in the 'AND' operation.|
|value|boolean|false|none|A boolean value indicating the result of the 'AND' operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|AND|

<h2 id="tocS_AnyCharsMatch">AnyCharsMatch</h2>
<!-- backwards compatibility -->
<a id="schemaanycharsmatch"></a>
<a id="schema_AnyCharsMatch"></a>
<a id="tocSanycharsmatch"></a>
<a id="tocsanycharsmatch"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|none|
|operator|string|true|none|none|
|propertyName|string|false|none|none|
|value|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|ANY_CHARS_MATCH|

<h2 id="tocS_AssociationDefinition">AssociationDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaassociationdefinition"></a>
<a id="schema_AssociationDefinition"></a>
<a id="tocSassociationdefinition"></a>
<a id="tocsassociationdefinition"></a>

```json
null
```

The definition of an association

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|none|The date and time when this association definition was created, in ISO 8601 format.|
|fromObjectTypeId|string|true|none|The unique identifier of the object type from which the association originates.|
|id|string|true|none|The unique identifier for this association definition.|
|name|string|false|none|The name of the association, which serves as a human-readable identifier.|
|toObjectTypeId|string|true|none|The unique identifier of the object type to which the association points.|
|updatedAt|string(date-time)|false|none|The date and time when this association definition was last updated, in ISO 8601 format.|

<h2 id="tocS_AssociationDefinitionEgg">AssociationDefinitionEgg</h2>
<!-- backwards compatibility -->
<a id="schemaassociationdefinitionegg"></a>
<a id="schema_AssociationDefinitionEgg"></a>
<a id="tocSassociationdefinitionegg"></a>
<a id="tocsassociationdefinitionegg"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fromObjectTypeId|string|true|none|The unique identifier for the object type from which the association originates.|
|name|string|false|none|The name of the association, used to identify and reference the relationship.|
|toObjectTypeId|string|true|none|The unique identifier for the object type to which the association is directed.|

<h2 id="tocS_AssociationSpec">AssociationSpec</h2>
<!-- backwards compatibility -->
<a id="schemaassociationspec"></a>
<a id="schema_AssociationSpec"></a>
<a id="tocSassociationspec"></a>
<a id="tocsassociationspec"></a>

```json
null
```

Defines the type, direction, and details of the relationship between two CRM objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associationCategory|string|true|none|A string representing the category of the association. This property defines the broader classification of the association.|
|associationTypeId|integer(int32)|true|none|A string representing the unique identifier for the type of association. This property specifies the specific type of association within the given category.|

#### Enumerated Values

|Property|Value|
|---|---|
|associationCategory|HUBSPOT_DEFINED|
|associationCategory|INTEGRATOR_DEFINED|
|associationCategory|USER_DEFINED|
|associationCategory|WORK|

<h2 id="tocS_AttentionSpanCalculatedValues">AttentionSpanCalculatedValues</h2>
<!-- backwards compatibility -->
<a id="schemaattentionspancalculatedvalues"></a>
<a id="schema_AttentionSpanCalculatedValues"></a>
<a id="tocSattentionspancalculatedvalues"></a>
<a id="tocsattentionspancalculatedvalues"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalPercentPlayed|number|true|none|The percentage of the media content that was played. This is a numerical value indicating how much of the total content was viewed, expressed as a percentage.|
|totalSecondsPlayed|integer(int32)|true|none|The total duration in seconds that the media content was played. This is a numerical value representing the cumulative playtime.|

<h2 id="tocS_AttentionSpanEvent">AttentionSpanEvent</h2>
<!-- backwards compatibility -->
<a id="schemaattentionspanevent"></a>
<a id="schema_AttentionSpanEvent"></a>
<a id="tocSattentionspanevent"></a>
<a id="tocsattentionspanevent"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactId|integer(int64)|true|none|A string representing the unique identifier for the contact associated with the event.|
|externalPlayContext|string|false|none|A string providing additional context about the play event from an external source.|
|mediaBridgeId|integer(int64)|true|none|A string representing the unique identifier for the media bridge instance.|
|mediaBridgeObjectCoordinates|string|true|none|A string detailing the coordinates of the media bridge object.|
|mediaBridgeObjectTypeId|string|true|none|A string representing the type identifier for the media bridge object.|
|mediaName|string|true|none|A string representing the name of the media content.|
|mediaType|string|true|none|A string indicating the type of media involved in the event, such as 'VIDEO', 'AUDIO', etc.|
|mediaUrl|string|false|none|A string containing the URL of the media content.|
|occurredTimestamp|integer(int64)|true|none|A string representing the timestamp of when the event occurred, in ISO 8601 format.|
|pageId|integer(int64)|false|none|A string representing the unique identifier for the page.|
|pageName|string|false|none|A string representing the name of the page where the media was accessed.|
|pageObjectCoordinates|string|false|none|A string detailing the coordinates of the page object.|
|pageUrl|string|false|none|A string containing the URL of the page where the media was accessed.|
|percentRange|string|true|none|A string indicating the range of percentages that were played during the session.|
|portalId|integer(int32)|true|none|An integer representing the unique identifier for the HubSpot portal.|
|providerId|integer(int32)|true|none|A string representing the unique identifier for the media provider.|
|rawData|string|false|none|A string containing raw data associated with the event.|
|sessionId|string|true|none|A string representing the unique identifier for the session during which the media was played.|
|totalPercentPlayed|number|true|none|A number indicating the total percentage of the media that was played.|
|totalSecondsPlayed|integer(int32)|false|none|A number representing the total seconds of media that were played.|

#### Enumerated Values

|Property|Value|
|---|---|
|externalPlayContext|EMAIL|
|externalPlayContext|EXTERNAL_PAGE|
|mediaType|AUDIO|
|mediaType|DOCUMENT|
|mediaType|IMAGE|
|mediaType|OTHER|
|mediaType|VIDEO|

<h2 id="tocS_AttentionSpanEventRequest">AttentionSpanEventRequest</h2>
<!-- backwards compatibility -->
<a id="schemaattentionspaneventrequest"></a>
<a id="schema_AttentionSpanEventRequest"></a>
<a id="tocSattentionspaneventrequest"></a>
<a id="tocsattentionspaneventrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_hsenc|string|false|none|An encoded string used for HubSpot-specific encoding purposes.|
|contactId|integer(int64)|false|none|The unique identifier for the contact associated with the event.|
|contactUtk|string|false|none|The unique tracking key for the contact, used for tracking purposes.|
|derivedValues|[AttentionSpanCalculatedValues](#schemaattentionspancalculatedvalues)|false|none|none|
|externalId|string|false|none|An external identifier for the event, typically used to correlate with external systems.|
|externalPlayContext|string|false|none|Additional context about the play event, typically used for external integrations.|
|mediaBridgeId|integer(int64)|false|none|The unique identifier for the media bridge instance.|
|mediaName|string|false|none|The name of the media involved in the event.|
|mediaType|string|true|none|The type of media involved in the event. Valid values include 'VIDEO', 'AUDIO', 'DOCUMENT', 'OTHER', and 'IMAGE'.|
|mediaUrl|string|false|none|The URL of the media involved in the event.|
|occurredTimestamp|integer(int64)|true|none|The timestamp when the event occurred, represented as a Unix timestamp in milliseconds.|
|pageId|integer(int64)|false|none|The unique identifier for the page where the event occurred.|
|pageName|string|false|none|The name of the page where the event occurred.|
|pageUrl|string|false|none|The URL of the page where the event occurred.|
|rawDataMap|object|true|none|A map of raw data key-value pairs providing additional context about the event.|
|rawDataString|string|false|none|A raw data string containing additional information about the event.|
|sessionId|string|true|none|The unique identifier for the session during which the event occurred.|

#### Enumerated Values

|Property|Value|
|---|---|
|externalPlayContext|EMAIL|
|externalPlayContext|EXTERNAL_PAGE|
|mediaType|AUDIO|
|mediaType|DOCUMENT|
|mediaType|IMAGE|
|mediaType|OTHER|
|mediaType|VIDEO|

<h2 id="tocS_BatchInputPropertyCreate">BatchInputPropertyCreate</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputpropertycreate"></a>
<a id="schema_BatchInputPropertyCreate"></a>
<a id="tocSbatchinputpropertycreate"></a>
<a id="tocsbatchinputpropertycreate"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[PropertyCreate](#schemapropertycreate)]|true|none|An array of PropertyCreate objects, each representing a property to be created. This is a required field.|

<h2 id="tocS_BatchInputPropertyName">BatchInputPropertyName</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputpropertyname"></a>
<a id="schema_BatchInputPropertyName"></a>
<a id="tocSbatchinputpropertyname"></a>
<a id="tocsbatchinputpropertyname"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[PropertyName](#schemapropertyname)]|true|none|An array of property names to be processed in the batch operation. Each item in the array is expected to be a string representing a property name.|

<h2 id="tocS_BatchReadInputPropertyName">BatchReadInputPropertyName</h2>
<!-- backwards compatibility -->
<a id="schemabatchreadinputpropertyname"></a>
<a id="schema_BatchReadInputPropertyName"></a>
<a id="tocSbatchreadinputpropertyname"></a>
<a id="tocsbatchreadinputpropertyname"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|true|none|A boolean indicating whether to include archived properties in the batch read. Defaults to false if not specified.|
|dataSensitivity|string|true|none|A string representing the sensitivity level of the data being accessed. This property helps in determining the security measures needed for handling the data.|
|inputs|[[PropertyName](#schemapropertyname)]|true|none|An array of strings, each representing a property name to be included in the batch read operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|dataSensitivity|highly_sensitive|
|dataSensitivity|non_sensitive|
|dataSensitivity|sensitive|

<h2 id="tocS_BatchResponseProperty">BatchResponseProperty</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponseproperty"></a>
<a id="schema_BatchResponseProperty"></a>
<a id="tocSbatchresponseproperty"></a>
<a id="tocsbatchresponseproperty"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The date and time when the batch operation was completed, in ISO 8601 format.|
|links|object|false|none|A collection of links related to the batch operation, typically used for navigation or additional actions.|
|requestedAt|string(date-time)|false|none|The date and time when the batch operation was requested, in ISO 8601 format.|
|results|[[Property](#schemaproperty)]|true|none|An array containing the results of the batch operation, detailing the outcome for each property involved.|
|startedAt|string(date-time)|true|none|The date and time when the batch operation began, in ISO 8601 format.|
|status|string|true|none|The current status of the batch operation, indicating success or failure.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BatchResponsePropertyWithErrors">BatchResponsePropertyWithErrors</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsepropertywitherrors"></a>
<a id="schema_BatchResponsePropertyWithErrors"></a>
<a id="tocSbatchresponsepropertywitherrors"></a>
<a id="tocsbatchresponsepropertywitherrors"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The date and time when the batch operation was completed, in ISO 8601 format.|
|errors|[[StandardError](#schemastandarderror)]|false|none|An array containing error details for properties that failed during the batch operation.|
|links|object|false|none|A collection of links related to the batch operation, typically used for navigation or further actions.|
|numErrors|integer(int32)|false|none|The number of errors encountered during the batch operation.|
|requestedAt|string(date-time)|false|none|The date and time when the batch operation was requested, in ISO 8601 format.|
|results|[[Property](#schemaproperty)]|true|none|An array containing the results of the batch operation, detailing each property's operation outcome.|
|startedAt|string(date-time)|true|none|The date and time when the batch operation started, in ISO 8601 format.|
|status|string|true|none|The overall status of the batch operation, indicating success or failure.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BeginsWith">BeginsWith</h2>
<!-- backwards compatibility -->
<a id="schemabeginswith"></a>
<a id="schema_BeginsWith"></a>
<a id="tocSbeginswith"></a>
<a id="tocsbeginswith"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that are evaluated by the 'BeginsWith' operation. These inputs can be various types such as constants or property variables.|
|operator|string|true|none|A string representing the operation being performed. The default value is 'BEGINS_WITH'.|
|propertyName|string|false|none|A string representing the name of the property being checked.|
|stringToCheck|[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)|true|none|The string that is being evaluated to determine if it begins with the specified prefix.|
|value|boolean|false|none|A boolean indicating the result of the 'BeginsWith' operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|BEGINS_WITH|

<h2 id="tocS_BooleanPropertyVariable">BooleanPropertyVariable</h2>
<!-- backwards compatibility -->
<a id="schemabooleanpropertyvariable"></a>
<a id="schema_BooleanPropertyVariable"></a>
<a id="tocSbooleanpropertyvariable"></a>
<a id="tocsbooleanpropertyvariable"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|A string representing the operation to be performed. It is required and has a default value of 'OR'.|
|propertyName|string|false|none|A string representing the name of the property to which the operation applies.|
|value|boolean|false|none|A boolean value associated with the property.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|BOOLEAN_PROPERTY_VARIABLE|

<h2 id="tocS_BooleanTargetPropertyVariable">BooleanTargetPropertyVariable</h2>
<!-- backwards compatibility -->
<a id="schemabooleantargetpropertyvariable"></a>
<a id="schema_BooleanTargetPropertyVariable"></a>
<a id="tocSbooleantargetpropertyvariable"></a>
<a id="tocsbooleantargetpropertyvariable"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|A string representing the operation to be performed. It is required and must be 'OR'.|
|propertyName|string|false|none|The name of the property being targeted or manipulated, represented as a string.|
|value|boolean|false|none|A boolean value associated with the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|BOOLEAN_TARGET_PROPERTY_VARIABLE|

<h2 id="tocS_BulkIntegratorObjectCreationResponse">BulkIntegratorObjectCreationResponse</h2>
<!-- backwards compatibility -->
<a id="schemabulkintegratorobjectcreationresponse"></a>
<a id="schema_BulkIntegratorObjectCreationResponse"></a>
<a id="tocSbulkintegratorobjectcreationresponse"></a>
<a id="tocsbulkintegratorobjectcreationresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdObjects|object|true|none|An array of objects that have been successfully created. Each object in the array represents a newly created integrator object.|

<h2 id="tocS_CaseChangeTestExtensionData">CaseChangeTestExtensionData</h2>
<!-- backwards compatibility -->
<a id="schemacasechangetestextensiondata"></a>
<a id="schema_CaseChangeTestExtensionData"></a>
<a id="tocScasechangetestextensiondata"></a>
<a id="tocscasechangetestextensiondata"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mood|string|true|none|A property representing the mood, typically used for testing case changes in text. The data type and constraints are not specified in the provided schema.|

#### Enumerated Values

|Property|Value|
|---|---|
|mood|ANGRY|
|mood|HAPPY|
|mood|SAD|
|mood|SARCASTIC|

<h2 id="tocS_CoalesceBoolean">CoalesceBoolean</h2>
<!-- backwards compatibility -->
<a id="schemacoalesceboolean"></a>
<a id="schema_CoalesceBoolean"></a>
<a id="tocScoalesceboolean"></a>
<a id="tocscoalesceboolean"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that the coalesce operation will evaluate. Each input can be a boolean, number, string, or various types of property variables.|
|operator|string|true|none|A string representing the logical operation to be performed. The default value is 'COALESCE_BOOLEAN'.|
|propertyName|string|false|none|A string representing the name of the property associated with the coalesce operation.|
|value|boolean|false|none|A boolean value that represents the result of the coalesce operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|COALESCE_BOOLEAN|

<h2 id="tocS_CoalesceNumber">CoalesceNumber</h2>
<!-- backwards compatibility -->
<a id="schemacoalescenumber"></a>
<a id="schema_CoalesceNumber"></a>
<a id="tocScoalescenumber"></a>
<a id="tocscoalescenumber"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that can include various types of numerical or property variables. These inputs are processed to determine the final output value.|
|operator|string|true|none|A string representing the operation to be performed. It is a required field with a default value of 'COALESCE_NUMBER'.|
|propertyName|string|false|none|A string representing the name of the property involved in the operation. This is used to identify the specific property being processed.|
|value|number|false|none|A number representing the result of the coalesce operation. This is the output value after processing the inputs.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|COALESCE_NUMBER|

<h2 id="tocS_CoalesceString">CoalesceString</h2>
<!-- backwards compatibility -->
<a id="schemacoalescestring"></a>
<a id="schema_CoalesceString"></a>
<a id="tocScoalescestring"></a>
<a id="tocscoalescestring"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of potential string values. The component evaluates these inputs to find the first non-null string.|
|operator|string|true|none|A string that specifies the operation type. For CoalesceString, this is typically set to 'COALESCE_STRING'.|
|propertyName|string|false|none|The name of the property being evaluated or assigned the coalesced string value.|
|value|string|false|none|The resulting string value after evaluating the inputs. It represents the first non-null string found.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|COALESCE_STRING|

<h2 id="tocS_CollapseMatchingChars">CollapseMatchingChars</h2>
<!-- backwards compatibility -->
<a id="schemacollapsematchingchars"></a>
<a id="schema_CollapseMatchingChars"></a>
<a id="tocScollapsematchingchars"></a>
<a id="tocscollapsematchingchars"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|none|
|operator|string|true|none|none|
|propertyName|string|false|none|none|
|value|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|COLLAPSE_MATCHING_CHARS|

<h2 id="tocS_CollectionResponseObjectSchemaNoPaging">CollectionResponseObjectSchemaNoPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponseobjectschemanopaging"></a>
<a id="schema_CollectionResponseObjectSchemaNoPaging"></a>
<a id="tocScollectionresponseobjectschemanopaging"></a>
<a id="tocscollectionresponseobjectschemanopaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[ObjectSchema](#schemaobjectschema)]|true|none|An array of object schemas included in the response. Each item in the array is an object schema.|

<h2 id="tocS_CollectionResponsePropertyGroupNoPaging">CollectionResponsePropertyGroupNoPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsepropertygroupnopaging"></a>
<a id="schema_CollectionResponsePropertyGroupNoPaging"></a>
<a id="tocScollectionresponsepropertygroupnopaging"></a>
<a id="tocscollectionresponsepropertygroupnopaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[PropertyGroup](#schemapropertygroup)]|true|none|An array of PropertyGroup objects. Each PropertyGroup contains details such as name, label, display order, and archived status.|

<h2 id="tocS_CollectionResponsePropertyNoPaging">CollectionResponsePropertyNoPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsepropertynopaging"></a>
<a id="schema_CollectionResponsePropertyNoPaging"></a>
<a id="tocScollectionresponsepropertynopaging"></a>
<a id="tocscollectionresponsepropertynopaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[Property_1](#schemaproperty_1)]|true|none|An array of Property objects, each representing a property associated with the specified object type.|

<h2 id="tocS_ConcatStrings">ConcatStrings</h2>
<!-- backwards compatibility -->
<a id="schemaconcatstrings"></a>
<a id="schema_ConcatStrings"></a>
<a id="tocSconcatstrings"></a>
<a id="tocsconcatstrings"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of input strings to be concatenated. Each item in the array can be a constant string or a reference to a string variable.|
|operator|string|true|none|A string indicating the type of operation, which is 'CONCAT_STRINGS' by default.|
|propertyName|string|false|none|A string representing the name of the property associated with this operation.|
|value|string|false|none|The resulting concatenated string after the operation is performed.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|CONCAT_STRINGS|

<h2 id="tocS_ConstantBoolean">ConstantBoolean</h2>
<!-- backwards compatibility -->
<a id="schemaconstantboolean"></a>
<a id="schema_ConstantBoolean"></a>
<a id="tocSconstantboolean"></a>
<a id="tocsconstantboolean"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|A string that specifies the operator type. For ConstantBoolean, this is typically set to 'CONSTANT_BOOLEAN'.|
|propertyName|string|false|none|A string indicating the name of the property associated with this constant boolean value.|
|value|boolean|false|none|A boolean value representing the constant true or false state.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|CONSTANT_BOOLEAN|

<h2 id="tocS_ConstantNumber">ConstantNumber</h2>
<!-- backwards compatibility -->
<a id="schemaconstantnumber"></a>
<a id="schema_ConstantNumber"></a>
<a id="tocSconstantnumber"></a>
<a id="tocsconstantnumber"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|A string that specifies the operation type. It defaults to 'CONSTANT_NUMBER' and is used to identify the component as a constant number.|
|propertyName|string|false|none|A string representing the name of the property associated with this constant number.|
|value|number|false|none|A number representing the constant value. This is the numerical value that the component holds.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|CONSTANT_NUMBER|

<h2 id="tocS_ConstantString">ConstantString</h2>
<!-- backwards compatibility -->
<a id="schemaconstantstring"></a>
<a id="schema_ConstantString"></a>
<a id="tocSconstantstring"></a>
<a id="tocsconstantstring"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|A string representing the operation type. For this component, it is set to a specific operation related to constant strings.|
|propertyName|string|false|none|The name of the property that this constant string is associated with or applied to.|
|value|string|false|none|The constant string value associated with this component. It is used as a fixed input in operations.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|CONSTANT_STRING|

<h2 id="tocS_Contains">Contains</h2>
<!-- backwards compatibility -->
<a id="schemacontains"></a>
<a id="schema_Contains"></a>
<a id="tocScontains"></a>
<a id="tocscontains"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that are evaluated by the 'contains' operation. These inputs can include various types of variables and operations.|
|operator|string|true|none|A string that specifies the operation type, which is 'CONTAINS' in this context.|
|propertyName|string|false|none|A string representing the name of the property being evaluated in the 'contains' operation.|
|stringToCheck|[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)|true|none|The string within which the presence of another string is being checked.|
|value|boolean|false|none|A boolean indicating the result of the 'contains' operation, where true means the string is found and false means it is not.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|CONTAINS|

<h2 id="tocS_CountMatchingChars">CountMatchingChars</h2>
<!-- backwards compatibility -->
<a id="schemacountmatchingchars"></a>
<a id="schema_CountMatchingChars"></a>
<a id="tocScountmatchingchars"></a>
<a id="tocscountmatchingchars"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|none|
|operator|string|true|none|none|
|propertyName|string|false|none|none|
|value|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|COUNT_MATCHING_CHARS|

<h2 id="tocS_Date">Date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_Date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that can include various types such as constants, property variables, and operations, which are used in the date evaluation.|
|operator|string|true|none|A string that specifies the operation to be performed. It defaults to 'DATE' and is part of the enumeration for date operations.|
|propertyName|string|false|none|A string indicating the name of the property associated with the date operation.|
|value|number|false|none|A string representing the date value involved in the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|DATE|

<h2 id="tocS_DatedExchangeRate">DatedExchangeRate</h2>
<!-- backwards compatibility -->
<a id="schemadatedexchangerate"></a>
<a id="schema_DatedExchangeRate"></a>
<a id="tocSdatedexchangerate"></a>
<a id="tocsdatedexchangerate"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that can include various types of variables and operations such as constants, property variables, and arithmetic operations.|
|operator|string|true|none|A string representing the operator used in the exchange rate logic. The default value is 'OR'.|
|propertyName|string|false|none|A string representing the name of the property involved in the exchange rate operation.|
|value|number|false|none|A boolean value that represents the outcome of the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|DATED_EXCHANGE_RATE|

<h2 id="tocS_DefaultRequirements">DefaultRequirements</h2>
<!-- backwards compatibility -->
<a id="schemadefaultrequirements"></a>
<a id="schema_DefaultRequirements"></a>
<a id="tocSdefaultrequirements"></a>
<a id="tocsdefaultrequirements"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gates|[string]|true|none|An array of conditions or constraints that must be satisfied. Each element in the array represents a specific gate or requirement.|
|operator|string|true|none|A string representing the logical operator used to evaluate the requirements. Common operators include 'AND' and 'OR'.|
|scopeNames|[string]|true|none|An array of scope names that define the permissions or access levels required. Each scope name corresponds to a specific permission.|
|settings|[string]|true|none|A collection of configuration settings that influence the behavior of the operation. These settings may include various options and parameters.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|AND|
|operator|OR|

<h2 id="tocS_DefinitionSource">DefinitionSource</h2>
<!-- backwards compatibility -->
<a id="schemadefinitionsource"></a>
<a id="schema_DefinitionSource"></a>
<a id="tocSdefinitionsource"></a>
<a id="tocsdefinitionsource"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|A string representing the name of the definition source.|
|type|string|true|none|A string indicating the type of definition source. Valid values include 'GLOBAL', 'OBJECT_TYPE', 'HAVEN_BRANCH', and 'PORTAL'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|GLOBAL|
|type|HAVEN_BRANCH|
|type|OBJECT_TYPE|
|type|PORTAL|

<h2 id="tocS_DivideNumbers">DivideNumbers</h2>
<!-- backwards compatibility -->
<a id="schemadividenumbers"></a>
<a id="schema_DivideNumbers"></a>
<a id="tocSdividenumbers"></a>
<a id="tocsdividenumbers"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enclosedInParentheses|boolean|true|none|A boolean indicating whether the division operation should be enclosed in parentheses, affecting the order of operations in a larger expression.|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of numerical inputs that are divided. Each input can be a constant number or a reference to another calculation component.|
|operator|string|true|none|A string representing the type of operation, which is 'DIVIDE' for this component.|
|propertyName|string|false|none|A string representing the name of the property associated with this division operation.|
|value|number|false|none|A number representing the result of the division operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|DIVIDE_NUMBERS|

<h2 id="tocS_Endpoints">Endpoints</h2>
<!-- backwards compatibility -->
<a id="schemaendpoints"></a>
<a id="schema_Endpoints"></a>
<a id="tocSendpoints"></a>
<a id="tocsendpoints"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discovery|boolean|true|none|Information related to the discovery of the endpoint, which may include metadata or additional details for client integration.|
|schemes|[string]|true|none|An array of supported schemes for the endpoint, such as 'http' or 'https'.|
|url|string|true|none|The URL of the endpoint, specifying where the API can be accessed.|

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

<h2 id="tocS_Euler">Euler</h2>
<!-- backwards compatibility -->
<a id="schemaeuler"></a>
<a id="schema_Euler"></a>
<a id="tocSeuler"></a>
<a id="tocseuler"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|A string representing the operation to be performed. The default value is 'EULER'.|
|propertyName|string|false|none|A string representing the name of the property involved in the operation.|
|value|number|false|none|The result of the operation, represented as a string.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|EULER|

<h2 id="tocS_EventVisibilityChange">EventVisibilityChange</h2>
<!-- backwards compatibility -->
<a id="schemaeventvisibilitychange"></a>
<a id="schema_EventVisibilityChange"></a>
<a id="tocSeventvisibilitychange"></a>
<a id="tocseventvisibilitychange"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventType|string|true|none|A string representing the type of event whose visibility settings are being changed.|
|showInReporting|boolean|false|none|A boolean indicating whether the event should be included in reporting.|
|showInTimeline|boolean|false|none|A boolean indicating whether the event should be displayed in the timeline.|
|showInWorkflows|boolean|false|none|A boolean indicating whether the event should be available for use in workflows.|
|updatedAt|integer(int64)|true|none|A string representing the date and time when the visibility settings were last updated, in ISO 8601 format.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventType|ALL|
|eventType|ATTENTION_SPAN|
|eventType|MEDIA_PLAYS|
|eventType|MEDIA_PLAYS_PERCENT|

<h2 id="tocS_EventVisibilityResponse">EventVisibilityResponse</h2>
<!-- backwards compatibility -->
<a id="schemaeventvisibilityresponse"></a>
<a id="schema_EventVisibilityResponse"></a>
<a id="tocSeventvisibilityresponse"></a>
<a id="tocseventvisibilityresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|The date and time when the visibility settings were created, in ISO 8601 format.|
|visibilitySettings|[[EventVisibilityChange](#schemaeventvisibilitychange)]|true|none|An object containing the visibility settings for events. The specific structure and properties of this object are not detailed in the provided specification.|

<h2 id="tocS_ExtensionData">ExtensionData</h2>
<!-- backwards compatibility -->
<a id="schemaextensiondata"></a>
<a id="schema_ExtensionData"></a>
<a id="tocSextensiondata"></a>
<a id="tocsextensiondata"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caseChangeTestExtensionData|[CaseChangeTestExtensionData](#schemacasechangetestextensiondata)|false|none|none|
|extensionStatusMap|object|true|none|A map that holds the status of various extensions. The keys are extension identifiers, and the values represent the status of each extension.|
|optionDecoratorsExtensionData|[OptionDecoratorsExtensionData](#schemaoptiondecoratorsextensiondata)|false|none|none|
|requiredPropertiesExtensionData|[RequiredPropertiesExtensionData](#schemarequiredpropertiesextensiondata)|false|none|none|
|softRequiredPropertiesExtensionData|[SoftRequiredPropertiesExtensionData](#schemasoftrequiredpropertiesextensiondata)|false|none|none|
|tags|[string]|true|none|An array of tags associated with the extension data. Each tag is a string that categorizes or describes the extension.|

<h2 id="tocS_ExternalOptionsMetaData">ExternalOptionsMetaData</h2>
<!-- backwards compatibility -->
<a id="schemaexternaloptionsmetadata"></a>
<a id="schema_ExternalOptionsMetaData"></a>
<a id="tocSexternaloptionsmetadata"></a>
<a id="tocsexternaloptionsmetadata"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|[FilteringMetaData](#schemafilteringmetadata)|false|none|none|
|fromObjectId|integer(int64)|false|none|A string representing the identifier of the object from which the external options are derived or related.|
|propertyName|string|false|none|A string indicating the name of the property for which the external options metadata is being defined.|
|relatedObjectTypeId|string|false|none|A string representing the identifier of the related object type. This is used to specify which type of object the external options are associated with.|

<h2 id="tocS_ExtractMostRecentEmailReplyHtml">ExtractMostRecentEmailReplyHtml</h2>
<!-- backwards compatibility -->
<a id="schemaextractmostrecentemailreplyhtml"></a>
<a id="schema_ExtractMostRecentEmailReplyHtml"></a>
<a id="tocSextractmostrecentemailreplyhtml"></a>
<a id="tocsextractmostrecentemailreplyhtml"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that can include various data types and operations, such as constants, property variables, and mathematical operations.|
|operator|string|true|none|A string that specifies the operation type, defaulting to 'EXTRACT_MOST_RECENT_EMAIL_REPLY_HTML'.|
|propertyName|string|false|none|A string indicating the name of the property from which the most recent email reply HTML is extracted.|
|value|string|false|none|A string representing the HTML content of the most recent email reply.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|EXTRACT_MOST_RECENT_EMAIL_REPLY_HTML|

<h2 id="tocS_ExtractMostRecentEmailReplyText">ExtractMostRecentEmailReplyText</h2>
<!-- backwards compatibility -->
<a id="schemaextractmostrecentemailreplytext"></a>
<a id="schema_ExtractMostRecentEmailReplyText"></a>
<a id="tocSextractmostrecentemailreplytext"></a>
<a id="tocsextractmostrecentemailreplytext"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that can include various types of data such as constants, property variables, and other operations. These inputs are used to determine the context or source from which the email reply text is extracted.|
|operator|string|true|none|A string that specifies the operation type. The default value is 'EXTRACT_MOST_RECENT_EMAIL_REPLY_TEXT'.|
|propertyName|string|false|none|A string that specifies the name of the property associated with the extracted email reply text.|
|value|string|false|none|A string representing the extracted text from the most recent email reply.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|EXTRACT_MOST_RECENT_EMAIL_REPLY_TEXT|

<h2 id="tocS_ExtractMostRecentPlainTextEmailReply">ExtractMostRecentPlainTextEmailReply</h2>
<!-- backwards compatibility -->
<a id="schemaextractmostrecentplaintextemailreply"></a>
<a id="schema_ExtractMostRecentPlainTextEmailReply"></a>
<a id="tocSextractmostrecentplaintextemailreply"></a>
<a id="tocsextractmostrecentplaintextemailreply"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that can include various types of data or operations, such as constants, property variables, and mathematical operations.|
|operator|string|true|none|A string that specifies the operation type. The default value is 'EXTRACT_MOST_RECENT_PLAIN_TEXT_EMAIL_REPLY'.|
|propertyName|string|false|none|A string representing the name of the property associated with the extracted email reply.|
|value|string|false|none|A string representing the extracted plain text from the most recent email reply.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|EXTRACT_MOST_RECENT_PLAIN_TEXT_EMAIL_REPLY|

<h2 id="tocS_FetchCurrencyDecimalPlaces">FetchCurrencyDecimalPlaces</h2>
<!-- backwards compatibility -->
<a id="schemafetchcurrencydecimalplaces"></a>
<a id="schema_FetchCurrencyDecimalPlaces"></a>
<a id="tocSfetchcurrencydecimalplaces"></a>
<a id="tocsfetchcurrencydecimalplaces"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of input values that are used to determine the currency for which the decimal places are fetched. Each item in the array can be a reference to various schemas such as ConstantString or StringPropertyVariable.|
|operator|string|true|none|A string representing the operation type, with a default value of 'FETCH_CURRENCY_DECIMAL_PLACES'.|
|propertyName|string|false|none|A string representing the name of the property associated with the currency decimal places.|
|value|number|false|none|A number indicating the decimal places for the specified currency.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|FETCH_CURRENCY_DECIMAL_PLACES|

<h2 id="tocS_FetchExchangeRate">FetchExchangeRate</h2>
<!-- backwards compatibility -->
<a id="schemafetchexchangerate"></a>
<a id="schema_FetchExchangeRate"></a>
<a id="tocSfetchexchangerate"></a>
<a id="tocsfetchexchangerate"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that are used to determine the exchange rate. Each input can be one of several types, such as constants or property variables.|
|operator|string|true|none|A string representing the operation to be performed, with a default value of 'FETCH_EXCHANGE_RATE'.|
|propertyName|string|false|none|A string representing the name of the property for which the exchange rate is being fetched.|
|value|number|false|none|A number representing the exchange rate value fetched by the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|FETCH_EXCHANGE_RATE|

<h2 id="tocS_FetchPortalHomeCurrency">FetchPortalHomeCurrency</h2>
<!-- backwards compatibility -->
<a id="schemafetchportalhomecurrency"></a>
<a id="schema_FetchPortalHomeCurrency"></a>
<a id="tocSfetchportalhomecurrency"></a>
<a id="tocsfetchportalhomecurrency"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|A string that specifies the operation to be performed. The default value is 'FETCH_PORTAL_HOME_CURRENCY'.|
|propertyName|string|false|none|A string indicating the name of the property associated with the home currency.|
|value|string|false|none|A string representing the value of the home currency for the portal.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|FETCH_PORTAL_HOME_CURRENCY|

<h2 id="tocS_FetchSingleCurrencyPortalCurrency">FetchSingleCurrencyPortalCurrency</h2>
<!-- backwards compatibility -->
<a id="schemafetchsinglecurrencyportalcurrency"></a>
<a id="schema_FetchSingleCurrencyPortalCurrency"></a>
<a id="tocSfetchsinglecurrencyportalcurrency"></a>
<a id="tocsfetchsinglecurrencyportalcurrency"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|A string that specifies the operation to be performed. It is required and has a default value of 'FETCH_SINGLE_CURRENCY_PORTAL_CURRENCY'.|
|propertyName|string|false|none|A string that indicates the name of the property related to the currency.|
|value|string|false|none|A string that represents the value associated with the currency being fetched.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|FETCH_SINGLE_CURRENCY_PORTAL_CURRENCY|

<h2 id="tocS_FieldLevelPermission">FieldLevelPermission</h2>
<!-- backwards compatibility -->
<a id="schemafieldlevelpermission"></a>
<a id="schema_FieldLevelPermission"></a>
<a id="tocSfieldlevelpermission"></a>
<a id="tocsfieldlevelpermission"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessLevel|string|true|none|The level of access granted for the field. This is a string value that specifies the permission level.|

<h2 id="tocS_FilteringMetaData">FilteringMetaData</h2>
<!-- backwards compatibility -->
<a id="schemafilteringmetadata"></a>
<a id="schema_FilteringMetaData"></a>
<a id="tocSfilteringmetadata"></a>
<a id="tocsfilteringmetadata"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeHelpdeskRoutableTeamsOnly|boolean|true|none|A boolean indicating whether to include only teams that are routable by the helpdesk in the results.|
|includeUnconfirmedUsers|boolean|true|none|A boolean indicating whether to include users who have not been confirmed in the results.|
|listProcessingTypes|[string]|true|none|An array of strings specifying the types of processing to be included in the list.|
|pipelineIds|[string]|true|none|An array of strings representing the IDs of pipelines to filter the results by.|
|teamIds|[string]|true|none|An array of strings representing the IDs of teams to filter the results by.|

<h2 id="tocS_FormatFullName">FormatFullName</h2>
<!-- backwards compatibility -->
<a id="schemaformatfullname"></a>
<a id="schema_FormatFullName"></a>
<a id="tocSformatfullname"></a>
<a id="tocsformatfullname"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that can be used in the formatting operation. These inputs can be various types, including constants, property variables, and other operations.|
|operator|string|true|none|A string representing the operation type, which is 'FORMAT_FULL_NAME' by default.|
|propertyName|string|false|none|A string representing the name of the property involved in the operation.|
|value|string|false|none|A string that holds the result of the full name formatting operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|FORMAT_FULL_NAME|

<h2 id="tocS_FormatPhoneNumber">FormatPhoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemaformatphonenumber"></a>
<a id="schema_FormatPhoneNumber"></a>
<a id="tocSformatphonenumber"></a>
<a id="tocsformatphonenumber"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that can include various types of property variables and operations, used to derive the phone number format.|
|operator|string|true|none|A string representing the operation type, defaulting to 'FORMAT_PHONE_NUMBER'.|
|propertyName|string|false|none|A string representing the name of the property associated with the phone number.|
|value|string|false|none|A string that holds the formatted phone number.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|FORMAT_PHONE_NUMBER|

<h2 id="tocS_FormatSearchablePhoneNumber">FormatSearchablePhoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemaformatsearchablephonenumber"></a>
<a id="schema_FormatSearchablePhoneNumber"></a>
<a id="tocSformatsearchablephonenumber"></a>
<a id="tocsformatsearchablephonenumber"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that can include various types of data, such as constants or property variables, used to derive the formatted phone number.|
|operator|string|true|none|A string that specifies the operation to be performed. The default value is 'FORMAT_SEARCHABLE_PHONE_NUMBER'.|
|propertyName|string|false|none|A string representing the name of the property associated with the phone number.|
|value|string|false|none|The formatted phone number as a string.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|FORMAT_SEARCHABLE_PHONE_NUMBER|

<h2 id="tocS_GetStartTime">GetStartTime</h2>
<!-- backwards compatibility -->
<a id="schemagetstarttime"></a>
<a id="schema_GetStartTime"></a>
<a id="tocSgetstarttime"></a>
<a id="tocsgetstarttime"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|none|
|positionalSubExpressions|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|none|
|propertyName|string|false|none|none|
|value|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|GET_START_TIME|

<h2 id="tocS_Group">Group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_Group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deleted|boolean|true|none|A boolean indicating whether this group has been deleted.|
|displayName|string|true|none|A string representing the display name of the group, used for user-friendly identification.|
|displayOrder|integer(int32)|true|none|An integer indicating the order in which this group should be displayed relative to other groups.|
|fulcrumPortalId|integer(int32)|true|none|An integer representing the unique identifier of the Fulcrum portal associated with this group.|
|fulcrumTimestamp|integer(int64)|true|none|A string representing the timestamp of the last update to this group, in ISO 8601 format.|
|hubspotDefined|boolean|true|none|A boolean indicating whether this group is defined by HubSpot.|
|name|string|true|none|A string representing the name of the group.|
|portalId|integer(int64)|true|none|An integer representing the unique identifier of the portal associated with this group.|

<h2 id="tocS_GroupView">GroupView</h2>
<!-- backwards compatibility -->
<a id="schemagroupview"></a>
<a id="schema_GroupView"></a>
<a id="tocSgroupview"></a>
<a id="tocsgroupview"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|true|none|A string representing the display name of the group, used for user-friendly identification.|
|displayOrder|integer(int32)|true|none|An integer that determines the order in which the group is displayed relative to other groups.|
|fulcrumPortalId|integer(int32)|true|none|An integer representing the ID of the portal associated with this group.|
|fulcrumTimestamp|integer(int64)|true|none|A Unix timestamp in milliseconds indicating when the group was last updated.|
|hubspotDefined|boolean|true|none|A boolean indicating whether the group is defined by HubSpot. If true, the group is a default HubSpot group.|
|name|string|true|none|The name of the group. It is a string that uniquely identifies the group within the context of the MediaBridgeService.|

<h2 id="tocS_HasEmailReply">HasEmailReply</h2>
<!-- backwards compatibility -->
<a id="schemahasemailreply"></a>
<a id="schema_HasEmailReply"></a>
<a id="tocShasemailreply"></a>
<a id="tocshasemailreply"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that can include various types of property variables and operations, used to evaluate the condition.|
|operator|string|true|none|A string representing the operation type, defaulting to 'HAS_EMAIL_REPLY'.|
|propertyName|string|false|none|A string specifying the name of the property being evaluated.|
|value|boolean|false|none|A boolean indicating the presence of an email reply.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|HAS_EMAIL_REPLY|

<h2 id="tocS_HasPlainTextEmailReply">HasPlainTextEmailReply</h2>
<!-- backwards compatibility -->
<a id="schemahasplaintextemailreply"></a>
<a id="schema_HasPlainTextEmailReply"></a>
<a id="tocShasplaintextemailreply"></a>
<a id="tocshasplaintextemailreply"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that the operation will evaluate. Each input can be a variety of types, such as constants or variables.|
|operator|string|true|none|A string that specifies the operation type, which is 'HAS_PLAIN_TEXT_EMAIL_REPLY' by default.|
|propertyName|string|false|none|A string representing the name of the property being evaluated.|
|value|boolean|false|none|A boolean indicating the result of the operation, whether a plain text email reply is present.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|HAS_PLAIN_TEXT_EMAIL_REPLY|

<h2 id="tocS_IfBoolean">IfBoolean</h2>
<!-- backwards compatibility -->
<a id="schemaifboolean"></a>
<a id="schema_IfBoolean"></a>
<a id="tocSifboolean"></a>
<a id="tocsifboolean"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elseExpression|[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)|false|none|The expression that is executed if the condition evaluates to false.|
|enclosedInParentheses|boolean|true|none|A boolean indicating whether the condition is enclosed in parentheses, affecting the order of evaluation.|
|ifExpression|[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)|true|none|The expression that is executed if the condition evaluates to true.|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that are evaluated as part of the condition. These inputs can be various types of expressions or variables.|
|operator|string|true|none|A string representing the logical operator used in the condition. It is required and typically set to 'IF'.|
|propertyName|string|false|none|A string representing the name of the property involved in the condition.|
|value|boolean|false|none|A boolean value that represents the result of the conditional evaluation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|IF_BOOLEAN|

<h2 id="tocS_IfChainBoolean">IfChainBoolean</h2>
<!-- backwards compatibility -->
<a id="schemaifchainboolean"></a>
<a id="schema_IfChainBoolean"></a>
<a id="tocSifchainboolean"></a>
<a id="tocsifchainboolean"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|true|none|An array of conditions that make up the boolean chain. Each condition is evaluated in sequence to determine the final boolean result.|
|defaultExpression|[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)|false|none|A default expression that is evaluated if none of the conditions in the chain are met. It provides a fallback boolean value.|
|enclosedInParentheses|boolean|true|none|A boolean indicating whether the entire chain is enclosed in parentheses, affecting the order of operations.|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that are evaluated within the chain. Each input can be a constant, a property variable, or a result of another operation.|
|operator|string|true|none|A string representing the logical operator used in the boolean chain. It is required and typically set to 'IF_CHAIN_BOOLEAN'.|
|outputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|true|none|An array of outputs that result from the evaluation of the chain. These outputs can be used in further processing or decision-making.|
|propertyName|string|false|none|A string representing the name of the property associated with this boolean chain.|
|value|boolean|false|none|A boolean value that represents the result of the evaluated chain of conditions.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|IF_CHAIN_BOOLEAN|

<h2 id="tocS_IfChainNumber">IfChainNumber</h2>
<!-- backwards compatibility -->
<a id="schemaifchainnumber"></a>
<a id="schema_IfChainNumber"></a>
<a id="tocSifchainnumber"></a>
<a id="tocsifchainnumber"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|true|none|An array of conditions that are evaluated in the logic chain to determine the final numeric value.|
|defaultExpression|[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)|false|none|The default expression to be used if none of the conditions are met.|
|enclosedInParentheses|boolean|true|none|A boolean indicating whether the expression is enclosed in parentheses.|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that can include various types of variables and operations, such as constants, property variables, or mathematical operations.|
|operator|string|true|none|A string representing the operation to be performed. The default value is 'IF_CHAIN_NUMBER'.|
|outputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|true|none|An array of possible outputs based on the evaluation of the conditions.|
|propertyName|string|false|none|A string representing the name of the property involved in the conditional logic.|
|value|number|false|none|The numeric result of the conditional logic chain evaluation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|IF_CHAIN_NUMBER|

<h2 id="tocS_IfChainString">IfChainString</h2>
<!-- backwards compatibility -->
<a id="schemaifchainstring"></a>
<a id="schema_IfChainString"></a>
<a id="tocSifchainstring"></a>
<a id="tocsifchainstring"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|true|none|An array of conditions that are evaluated in sequence to determine which value to return.|
|defaultExpression|[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)|false|none|The default expression to evaluate if none of the conditions are met.|
|enclosedInParentheses|boolean|true|none|A boolean indicating whether the expression is enclosed in parentheses, affecting the order of evaluation.|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that can include various types of expressions or variables, which are evaluated in the conditional logic.|
|operator|string|true|none|A string indicating the type of operation, with a default value of 'IF_CHAIN_STRING'.|
|outputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|true|none|An array of possible output values corresponding to the conditions.|
|propertyName|string|false|none|A string representing the name of the property involved in the conditional logic.|
|value|string|false|none|The resulting string value if the conditions are met.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|IF_CHAIN_STRING|

<h2 id="tocS_IfNumber">IfNumber</h2>
<!-- backwards compatibility -->
<a id="schemaifnumber"></a>
<a id="schema_IfNumber"></a>
<a id="tocSifnumber"></a>
<a id="tocsifnumber"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elseExpression|[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)|false|none|An expression that is evaluated if the condition is false.|
|enclosedInParentheses|boolean|true|none|A boolean indicating whether the expression is enclosed in parentheses, affecting the order of operations.|
|ifExpression|[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)|true|none|An expression that is evaluated if the condition is true.|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that the conditional expression will evaluate. Each input can be a constant, a variable, or another expression.|
|operator|string|true|none|A string representing the operation to be performed. The default value is 'IF_NUMBER'.|
|propertyName|string|false|none|A string representing the name of the property involved in the conditional expression.|
|value|number|false|none|A number that is the result of the conditional expression.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|IF_NUMBER|

<h2 id="tocS_IfString">IfString</h2>
<!-- backwards compatibility -->
<a id="schemaifstring"></a>
<a id="schema_IfString"></a>
<a id="tocSifstring"></a>
<a id="tocsifstring"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elseExpression|[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)|false|none|The expression to evaluate if the condition is false.|
|enclosedInParentheses|boolean|true|none|A boolean indicating whether the expression is enclosed in parentheses, affecting the order of operations.|
|ifExpression|[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)|true|none|The expression to evaluate if the condition is true.|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that the condition will evaluate. Each input can be a constant, a property variable, or another expression.|
|operator|string|true|none|A string indicating the operation type. It defaults to 'IF_STRING'.|
|propertyName|string|false|none|A string representing the name of the property involved in the condition.|
|value|string|false|none|The resulting string value if the condition evaluates to true.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|IF_STRING|

<h2 id="tocS_InboundDbObjectType">InboundDbObjectType</h2>
<!-- backwards compatibility -->
<a id="schemainbounddbobjecttype"></a>
<a id="schema_InboundDbObjectType"></a>
<a id="tocSinbounddbobjecttype"></a>
<a id="tocsinbounddbobjecttype"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessScopeName|string|false|none|The name of the scope required to access the object type.|
|allowsSensitiveProperties|boolean|true|none|A boolean indicating whether the object type allows sensitive properties.|
|createDatePropertyName|string|true|none|The property name that stores the creation date of the object.|
|createdAt|integer(int64)|false|none|The date and time when the object type was created, in ISO 8601 format.|
|defaultSearchPropertyNames|[string]|true|none|An array of strings representing the default property names used for search.|
|deleted|boolean|true|none|A boolean indicating whether the object type is deleted.|
|description|string|false|none|A description of the object type.|
|fullyQualifiedName|string|true|none|The fully qualified name of the object type.|
|hasCustomProperties|boolean|true|none|A boolean indicating whether the object type has custom properties.|
|hasDefaultProperties|boolean|true|none|A boolean indicating whether the object type has default properties.|
|hasExternalObjectIds|boolean|true|none|A boolean indicating whether the object type supports external object IDs.|
|hasOwners|boolean|true|none|A boolean indicating whether the object type can have owners.|
|hasPipelines|boolean|true|none|A boolean indicating whether the object type supports pipelines.|
|id|integer(int32)|true|none|The unique identifier for the object type.|
|indexedForFiltersAndReports|boolean|true|none|A boolean indicating whether the object type is indexed for filters and reports.|
|integrationAppId|integer(int32)|false|none|The ID of the integration application associated with the object type.|
|janusGroup|string|false|none|The Janus group associated with the object type.|
|lastModifiedPropertyName|string|true|none|The property name that stores the last modified date of the object.|
|metaType|string|true|none|The metadata type associated with the object.|
|metaTypeId|integer(int32)|true|none|The unique identifier for the metadata type.|
|name|string|true|none|The name of the database object type.|
|objectTypeId|string|true|none|The unique identifier for the object type.|
|objectTypeIdString|string|true|none|The string representation of the object type ID.|
|ownerPortalId|integer(int32)|false|none|The portal ID of the owner associated with the object type.|
|permissioningType|string|true|none|The type of permissioning applied to the object type.|
|pipelineCloseDatePropertyName|string|false|none|The property name associated with the pipeline close date of the object.|
|pipelinePropertyName|string|true|none|The property name associated with the pipeline of the object.|
|pipelineStagePropertyName|string|true|none|The property name associated with the pipeline stage of the object.|
|pipelineTimeToClosePropertyName|string|false|none|The property name associated with the time to close in the pipeline.|
|pluralForm|string|false|none|The plural form of the object type's name.|
|primaryDisplayLabelPropertyName|string|false|none|The property name used as the primary display label.|
|readScopeName|string|false|none|The name of the scope required to read the object type.|
|requiredProperties|[string]|true|none|An array of strings representing the properties that are required for the object type.|
|restorable|boolean|true|none|A boolean indicating whether the object type can be restored if deleted.|
|scopeMappings|[[ScopeMapping](#schemascopemapping)]|true|none|Mappings of scopes related to the object type.|
|secondaryDisplayLabelPropertyNames|[string]|true|none|An array of strings representing the property names used as secondary display labels.|
|singularForm|string|false|none|The singular form of the object type's name.|
|status|string|false|none|The status of the object type.|
|visibilities|[string]|false|none|An array representing different visibility settings for the object type.|
|visibility|string|false|none|The visibility setting of the object type.|
|writeScopeName|string|false|none|The name of the scope required to write to the object type.|

#### Enumerated Values

|Property|Value|
|---|---|
|metaType|CMS_HUBDB|
|metaType|HUBSPOT|
|metaType|HUBSPOT_EVENT|
|metaType|INTEGRATION|
|metaType|INTEGRATION_EVENT|
|metaType|PORTAL_SPECIFIC|
|metaType|PORTAL_SPECIFIC_EVENT|
|metaType|WORK|
|metaType|WORK_SUB|
|permissioningType|ALL_OR_NONE|
|permissioningType|DO_NOT_CHECK_PERMISSIONS|
|permissioningType|EXPLICIT|
|permissioningType|OWNER_BASED|
|permissioningType|TEAM_BASED|
|status|Deprecated|
|status|In development|
|status|Live|
|visibilities|Customer-facing|
|visibilities|Internal only|
|visibilities|Customer-facing UI|
|visibilities|Customer-facing public API|
|visibility|Customer-facing|
|visibility|Customer-facing public API|
|visibility|Customer-facing UI|
|visibility|Internal only|

<h2 id="tocS_IntegratorOEmbedDomainModel">IntegratorOEmbedDomainModel</h2>
<!-- backwards compatibility -->
<a id="schemaintegratoroembeddomainmodel"></a>
<a id="schema_IntegratorOEmbedDomainModel"></a>
<a id="tocSintegratoroembeddomainmodel"></a>
<a id="tocsintegratoroembeddomainmodel"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|integer(int32)|true|none|The application ID associated with the oEmbed domain, represented as an integer.|
|createdAt|integer(int64)|true|none|The date and time when the oEmbed domain entry was created, in ISO 8601 format.|
|deletedAt|integer(int64)|true|none|The date and time when the oEmbed domain entry was deleted, in ISO 8601 format. This field may be null if the entry has not been deleted.|
|endpoints|[Endpoints](#schemaendpoints)|true|none|none|
|id|integer(int64)|true|none|The unique identifier for the oEmbed domain entry, represented as a string.|
|portalId|integer(int32)|true|none|The portal ID related to the oEmbed domain, represented as an integer.|
|updatedAt|integer(int64)|true|none|The date and time when the oEmbed domain entry was last updated, in ISO 8601 format.|

<h2 id="tocS_IntegratorOEmbedDomainRequest">IntegratorOEmbedDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemaintegratoroembeddomainrequest"></a>
<a id="schema_IntegratorOEmbedDomainRequest"></a>
<a id="tocSintegratoroembeddomainrequest"></a>
<a id="tocsintegratoroembeddomainrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoints|[Endpoints](#schemaendpoints)|true|none|none|
|portalId|integer(int32)|false|none|An integer representing the unique identifier of the HubSpot portal where the oEmbed domain is being configured.|

<h2 id="tocS_IntegratorObjectCreationRequest">IntegratorObjectCreationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaintegratorobjectcreationrequest"></a>
<a id="schema_IntegratorObjectCreationRequest"></a>
<a id="tocSintegratorobjectcreationrequest"></a>
<a id="tocsintegratorobjectcreationrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mediaTypes|[string]|true|none|An array of strings representing the types of media objects that can be created. Valid values include 'VIDEO', 'AUDIO', 'DOCUMENT', 'OTHER', and 'IMAGE'.|

#### Enumerated Values

|Property|Value|
|---|---|
|mediaTypes|VIDEO|
|mediaTypes|AUDIO|
|mediaTypes|DOCUMENT|
|mediaTypes|OTHER|
|mediaTypes|IMAGE|

<h2 id="tocS_IntegratorObjectCreationResponse">IntegratorObjectCreationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaintegratorobjectcreationresponse"></a>
<a id="schema_IntegratorObjectCreationResponse"></a>
<a id="tocSintegratorobjectcreationresponse"></a>
<a id="tocsintegratorobjectcreationresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectType|[InboundDbObjectType](#schemainbounddbobjecttype)|true|none|none|
|properties|[[PropertyDefinition](#schemapropertydefinition)]|true|none|A collection of properties that belong to the created object, detailing its characteristics and attributes.|
|propertyGroups|[[Group](#schemagroup)]|true|none|An array of property groups associated with the created object. Each group contains related properties.|

<h2 id="tocS_IsBlank">IsBlank</h2>
<!-- backwards compatibility -->
<a id="schemaisblank"></a>
<a id="schema_IsBlank"></a>
<a id="tocSisblank"></a>
<a id="tocsisblank"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs to be evaluated by the IsBlank operation. Each input can be a constant, property variable, or result of another operation.|
|operator|string|true|none|A string representing the operation to be performed. For IsBlank, this is typically 'IS_BLANK'.|
|propertyName|string|false|none|A string specifying the name of the property being evaluated for blankness.|
|value|boolean|false|none|A boolean indicating the result of the operation, where true means the input is blank and false means it is not.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|IS_BLANK|

<h2 id="tocS_IsDayBasedIsoPeriod">IsDayBasedIsoPeriod</h2>
<!-- backwards compatibility -->
<a id="schemaisdaybasedisoperiod"></a>
<a id="schema_IsDayBasedIsoPeriod"></a>
<a id="tocSisdaybasedisoperiod"></a>
<a id="tocsisdaybasedisoperiod"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that can be evaluated, which may include various types of property variables and operations.|
|operator|string|true|none|A string representing the operation type, which defaults to 'IS_DAY_BASED_ISO_PERIOD'.|
|propertyName|string|false|none|A string representing the name of the property being evaluated.|
|value|boolean|false|none|A boolean indicating the result of the validation, where true means the ISO period is day-based.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|IS_DAY_BASED_ISO_PERIOD|

<h2 id="tocS_IsEngagementType">IsEngagementType</h2>
<!-- backwards compatibility -->
<a id="schemaisengagementtype"></a>
<a id="schema_IsEngagementType"></a>
<a id="tocSisengagementtype"></a>
<a id="tocsisengagementtype"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|A string representing the operation to be performed, with a default value of 'IS_ENGAGEMENT_TYPE'.|
|propertyName|string|false|none|A string specifying the name of the property to be evaluated.|
|value|boolean|false|none|A boolean indicating the result of the engagement type evaluation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|IS_ENGAGEMENT_TYPE|

<h2 id="tocS_IsMonthBasedIsoPeriod">IsMonthBasedIsoPeriod</h2>
<!-- backwards compatibility -->
<a id="schemaismonthbasedisoperiod"></a>
<a id="schema_IsMonthBasedIsoPeriod"></a>
<a id="tocSismonthbasedisoperiod"></a>
<a id="tocsismonthbasedisoperiod"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that can include various types of property variables and operations, used as the basis for the evaluation.|
|operator|string|true|none|A string representing the operation type, which is 'IS_MONTH_BASED_ISO_PERIOD' by default.|
|propertyName|string|false|none|A string representing the name of the property being evaluated.|
|value|boolean|false|none|A boolean indicating the result of the operation, determining whether the ISO period is month-based.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|IS_MONTH_BASED_ISO_PERIOD|

<h2 id="tocS_IsMultipleOf">IsMultipleOf</h2>
<!-- backwards compatibility -->
<a id="schemaismultipleof"></a>
<a id="schema_IsMultipleOf"></a>
<a id="tocSismultipleof"></a>
<a id="tocsismultipleof"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that can include various types such as constants, property variables, or other operations. These inputs are used to perform the multiple check.|
|operator|string|true|none|A string representing the operation type, which is 'IS_MULTIPLE_OF' for this component.|
|propertyName|string|false|none|A string representing the name of the property involved in the multiple check operation.|
|value|boolean|false|none|A boolean indicating whether the input number is a multiple of the specified value.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|IS_MULTIPLE_OF|

<h2 id="tocS_IsPipelineStageClosed">IsPipelineStageClosed</h2>
<!-- backwards compatibility -->
<a id="schemaispipelinestageclosed"></a>
<a id="schema_IsPipelineStageClosed"></a>
<a id="tocSispipelinestageclosed"></a>
<a id="tocsispipelinestageclosed"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that are evaluated to determine if the pipeline stage is closed. These inputs can be various types of property variables or logical operations.|
|operator|string|true|none|A string representing the operation type. For this component, it is fixed to 'IsPipelineStageClosed'.|
|propertyName|string|false|none|A string representing the name of the property related to the pipeline stage being evaluated.|
|value|boolean|false|none|A boolean value indicating the result of the operation, whether the pipeline stage is closed or not.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|IS_PIPELINE_STAGE_CLOSED|

<h2 id="tocS_IsPortalEnabledCurrency">IsPortalEnabledCurrency</h2>
<!-- backwards compatibility -->
<a id="schemaisportalenabledcurrency"></a>
<a id="schema_IsPortalEnabledCurrency"></a>
<a id="tocSisportalenabledcurrency"></a>
<a id="tocsisportalenabledcurrency"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that can include various types of property variables and operations. These inputs are used to perform the currency check.|
|operator|string|true|none|A string that specifies the operation type, with a default value of 'OR'.|
|propertyName|string|false|none|A string representing the name of the property being evaluated.|
|value|boolean|false|none|A boolean indicating the result of the currency check operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|IS_PORTAL_ENABLED_CURRENCY|

<h2 id="tocS_IsPortalMulticurrencyEnabled">IsPortalMulticurrencyEnabled</h2>
<!-- backwards compatibility -->
<a id="schemaisportalmulticurrencyenabled"></a>
<a id="schema_IsPortalMulticurrencyEnabled"></a>
<a id="tocSisportalmulticurrencyenabled"></a>
<a id="tocsisportalmulticurrencyenabled"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|A string that specifies the operation to be performed. The default value is 'IS_PORTAL_MULTICURRENCY_ENABLED'.|
|propertyName|string|false|none|A string representing the name of the property being evaluated.|
|value|boolean|false|none|A boolean indicating whether the portal has multicurrency enabled.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|IS_PORTAL_MULTICURRENCY_ENABLED|

<h2 id="tocS_IsPresent">IsPresent</h2>
<!-- backwards compatibility -->
<a id="schemaispresent"></a>
<a id="schema_IsPresent"></a>
<a id="tocSispresent"></a>
<a id="tocsispresent"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expressionToEvaluate|[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)|true|none|An expression that is evaluated to determine the presence of the specified property. This can involve various logical or arithmetic operations.|
|operator|string|true|none|A string that specifies the operation being performed. For the IsPresent component, this is typically a predefined value indicating presence checking.|
|propertyName|string|false|none|A string that represents the name of the property being evaluated for presence.|
|value|boolean|false|none|A boolean value indicating the result of the presence check. True if the property is present, otherwise false.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|IS_PRESENT|

<h2 id="tocS_IsValidIsoPeriod">IsValidIsoPeriod</h2>
<!-- backwards compatibility -->
<a id="schemaisvalidisoperiod"></a>
<a id="schema_IsValidIsoPeriod"></a>
<a id="tocSisvalidisoperiod"></a>
<a id="tocsisvalidisoperiod"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that the operation will evaluate. Each input can be a constant, property variable, or result of another operation.|
|operator|string|true|none|A string representing the operation type. For this component, it is expected to be 'IS_VALID_ISO_PERIOD'.|
|propertyName|string|false|none|A string representing the name of the property being evaluated.|
|value|boolean|false|none|A boolean indicating whether the ISO period is valid.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|IS_VALID_ISO_PERIOD|

<h2 id="tocS_KeepMatchingChars">KeepMatchingChars</h2>
<!-- backwards compatibility -->
<a id="schemakeepmatchingchars"></a>
<a id="schema_KeepMatchingChars"></a>
<a id="tocSkeepmatchingchars"></a>
<a id="tocskeepmatchingchars"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|none|
|operator|string|true|none|none|
|propertyName|string|false|none|none|
|value|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|KEEP_MATCHING_CHARS|

<h2 id="tocS_LessThan">LessThan</h2>
<!-- backwards compatibility -->
<a id="schemalessthan"></a>
<a id="schema_LessThan"></a>
<a id="tocSlessthan"></a>
<a id="tocslessthan"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs used in the comparison, which can include various types of property variables and constants.|
|operator|string|true|none|A string representing the operation type, which is 'LESS_THAN' by default.|
|propertyName|string|false|none|A string representing the name of the property involved in the comparison.|
|value|boolean|false|none|A boolean indicating the result of the less than comparison.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|LESS_THAN|

<h2 id="tocS_LessThanOrEqual">LessThanOrEqual</h2>
<!-- backwards compatibility -->
<a id="schemalessthanorequal"></a>
<a id="schema_LessThanOrEqual"></a>
<a id="tocSlessthanorequal"></a>
<a id="tocslessthanorequal"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that are evaluated in the less than or equal operation. Each input can be a constant, a property variable, or another operation.|
|operator|string|true|none|A string representing the operation type, which is 'LESS_THAN_OR_EQUAL' by default.|
|propertyName|string|false|none|A string representing the name of the property involved in the comparison.|
|value|boolean|false|none|A boolean indicating the result of the less than or equal comparison.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|LESS_THAN_OR_EQUAL|

<h2 id="tocS_LookupAssociationSpec">LookupAssociationSpec</h2>
<!-- backwards compatibility -->
<a id="schemalookupassociationspec"></a>
<a id="schema_LookupAssociationSpec"></a>
<a id="tocSlookupassociationspec"></a>
<a id="tocslookupassociationspec"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associationSpec|[AssociationSpec](#schemaassociationspec)|true|none|Defines the type, direction, and details of the relationship between two CRM objects.|
|cardinality|string|false|none|Specifies the nature of the association in terms of its cardinality, such as one-to-one or one-to-many.|
|maxToObjectIds|integer(int32)|false|none|An integer indicating the maximum number of target object IDs that can be associated. This sets a limit on how many associations can be made to the target object type.|
|toObjectTypeId|string|false|none|A string representing the unique identifier of the target object type to which the association is made.|

#### Enumerated Values

|Property|Value|
|---|---|
|cardinality|ONE_TO_MANY|
|cardinality|ONE_TO_ONE|

<h2 id="tocS_LowerCase">LowerCase</h2>
<!-- backwards compatibility -->
<a id="schemalowercase"></a>
<a id="schema_LowerCase"></a>
<a id="tocSlowercase"></a>
<a id="tocslowercase"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that can include various types such as constants, property variables, and other operations, which are to be transformed to lowercase.|
|operator|string|true|none|A string indicating the operation to be performed, which is 'LOWER_CASE' by default.|
|propertyName|string|false|none|A string representing the name of the property being processed.|
|value|string|false|none|The resulting string after the input has been converted to lowercase.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|LOWER_CASE|

<h2 id="tocS_MaxNumbers">MaxNumbers</h2>
<!-- backwards compatibility -->
<a id="schemamaxnumbers"></a>
<a id="schema_MaxNumbers"></a>
<a id="tocSmaxnumbers"></a>
<a id="tocsmaxnumbers"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that can include various types of values or operations, such as constants or property variables, from which the maximum number will be calculated.|
|operator|string|true|none|A string that specifies the operation to be performed. The default value is 'MAX_NUMBERS'.|
|propertyName|string|false|none|A string representing the name of the property associated with this operation.|
|value|number|false|none|A number representing the maximum value determined from the inputs.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|MAX_NUMBERS|

<h2 id="tocS_MediaBridgePropertyUpdate">MediaBridgePropertyUpdate</h2>
<!-- backwards compatibility -->
<a id="schemamediabridgepropertyupdate"></a>
<a id="schema_MediaBridgePropertyUpdate"></a>
<a id="tocSmediabridgepropertyupdate"></a>
<a id="tocsmediabridgepropertyupdate"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calculationFormula|string|false|none|A string representing the formula used for calculating the property's value.|
|currencyPropertyName|string|false|none|A string representing the name of the currency property associated with this property.|
|description|string|false|none|A string providing a description of the property.|
|displayOrder|integer(int32)|false|none|An integer indicating the display order of the property.|
|fieldType|string|false|none|A string specifying the field type of the property. Valid values include 'booleancheckbox', 'calculation_equation', 'checkbox', 'date', 'file', 'html', 'number', 'phonenumber', 'radio', 'select', 'text', and 'textarea'.|
|formField|boolean|false|none|A boolean indicating whether the property is a form field.|
|groupName|string|false|none|A string representing the name of the group to which the property belongs.|
|hasUniqueValue|boolean|false|none|A boolean indicating whether the property has a unique value.|
|hidden|boolean|false|none|A boolean indicating whether the property is hidden.|
|label|string|false|none|A string representing the display label for the property.|
|numberDisplayHint|string|false|none|A string providing a hint on how to display numbers. Valid values include 'unformatted', 'formatted', 'currency', 'percentage', 'duration', and 'probability'.|
|options|[[OptionInput](#schemaoptioninput)]|false|none|An array of OptionInput objects representing the options available for the property.|
|showCurrencySymbol|boolean|false|none|A boolean indicating whether to show the currency symbol for the property.|
|textDisplayHint|string|false|none|A string providing a hint on how to display text. Valid values include 'unformatted_single_line', 'multi_line', 'email', 'phone_number', 'domain_name', 'ip_address', 'physical_address', and 'postal_code'.|
|type|string|false|none|A string indicating the data type of the property. Valid values include 'bool', 'date', 'datetime', 'enumeration', 'number', 'phone_number', and 'string'.|

#### Enumerated Values

|Property|Value|
|---|---|
|fieldType|booleancheckbox|
|fieldType|calculation_equation|
|fieldType|checkbox|
|fieldType|date|
|fieldType|file|
|fieldType|html|
|fieldType|number|
|fieldType|phonenumber|
|fieldType|radio|
|fieldType|select|
|fieldType|text|
|fieldType|textarea|
|numberDisplayHint|currency|
|numberDisplayHint|duration|
|numberDisplayHint|formatted|
|numberDisplayHint|percentage|
|numberDisplayHint|probability|
|numberDisplayHint|unformatted|
|textDisplayHint|domain_name|
|textDisplayHint|email|
|textDisplayHint|ip_address|
|textDisplayHint|multi_line|
|textDisplayHint|phone_number|
|textDisplayHint|physical_address|
|textDisplayHint|postal_code|
|textDisplayHint|unformatted_single_line|
|type|bool|
|type|date|
|type|datetime|
|type|enumeration|
|type|number|
|type|phone_number|
|type|string|

<h2 id="tocS_MediaBridgeProviderPartial">MediaBridgeProviderPartial</h2>
<!-- backwards compatibility -->
<a id="schemamediabridgeproviderpartial"></a>
<a id="schema_MediaBridgeProviderPartial"></a>
<a id="tocSmediabridgeproviderpartial"></a>
<a id="tocsmediabridgeproviderpartial"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowImportOnDisconnect|boolean|false|none|A boolean indicating whether import is allowed when the connection is disconnected.|
|moduleName|string|false|none|The module name associated with the media bridge provider. It is a string value.|
|name|string|false|none|The name of the media bridge provider. It is a string value.|
|updatedAt|integer(int64)|true|none|The date and time when the media bridge provider was last updated, in ISO 8601 format.|

<h2 id="tocS_MediaBridgeProviderRegistrationResponse">MediaBridgeProviderRegistrationResponse</h2>
<!-- backwards compatibility -->
<a id="schemamediabridgeproviderregistrationresponse"></a>
<a id="schema_MediaBridgeProviderRegistrationResponse"></a>
<a id="tocSmediabridgeproviderregistrationresponse"></a>
<a id="tocsmediabridgeproviderregistrationresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|integer(int32)|true|none|An integer representing the unique identifier of the application associated with the media bridge provider.|
|name|string|true|none|A string representing the name of the media bridge provider.|

<h2 id="tocS_MediaPlayedEvent">MediaPlayedEvent</h2>
<!-- backwards compatibility -->
<a id="schemamediaplayedevent"></a>
<a id="schema_MediaPlayedEvent"></a>
<a id="tocSmediaplayedevent"></a>
<a id="tocsmediaplayedevent"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactId|integer(int64)|true|none|The unique identifier for the contact associated with this media event.|
|externalPlayContext|string|false|none|Additional context provided by external systems about the play event.|
|iframeUrl|string|false|none|The URL of the iframe where the media was embedded and played.|
|mediaBridgeId|integer(int64)|true|none|The unique identifier for the media bridge instance associated with this event.|
|mediaBridgeObjectCoordinates|string|true|none|Coordinates that specify the location or context of the media bridge object.|
|mediaBridgeObjectTypeId|string|true|none|The type identifier of the media bridge object involved in the event.|
|mediaName|string|true|none|The name of the media content that was played.|
|mediaType|string|true|none|The type of media that was played, such as video or audio.|
|mediaUrl|string|false|none|The URL where the media content is hosted.|
|occurredTimestamp|integer(int64)|true|none|A Unix timestamp in milliseconds indicating when the media play event occurred.|
|pageId|integer(int64)|false|none|The unique identifier for the page where the media was played.|
|pageName|string|false|none|The name of the page where the media was played.|
|pageObjectCoordinates|string|false|none|Coordinates that specify the location or context of the page object.|
|pageUrl|string|false|none|The URL of the page where the media was played.|
|portalId|integer(int32)|true|none|The unique identifier of the HubSpot portal where the event occurred.|
|providerId|integer(int32)|true|none|The unique identifier for the media provider.|
|sessionId|string|true|none|The unique identifier for the session during which the media was played.|
|state|string|true|none|The state of the media play event, such as 'started' or 'completed'.|

#### Enumerated Values

|Property|Value|
|---|---|
|externalPlayContext|EMAIL|
|externalPlayContext|EXTERNAL_PAGE|
|mediaType|AUDIO|
|mediaType|DOCUMENT|
|mediaType|IMAGE|
|mediaType|OTHER|
|mediaType|VIDEO|
|state|STARTED|
|state|VIEWED|

<h2 id="tocS_MediaPlayedEventRequest">MediaPlayedEventRequest</h2>
<!-- backwards compatibility -->
<a id="schemamediaplayedeventrequest"></a>
<a id="schema_MediaPlayedEventRequest"></a>
<a id="tocSmediaplayedeventrequest"></a>
<a id="tocsmediaplayedeventrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_hsenc|string|false|none|An encoding parameter used internally by HubSpot.|
|contactId|integer(int64)|false|none|The unique identifier for the contact associated with the media play event.|
|contactUtk|string|false|none|The unique tracking key for the contact, used for tracking purposes.|
|externalId|string|false|none|An external identifier for the media, used to correlate with external systems.|
|externalPlayContext|string|false|none|Additional context about the media play event, provided by external systems.|
|iframeUrl|string|false|none|The URL of the iframe containing the media, if applicable.|
|mediaBridgeId|integer(int64)|false|none|A unique identifier for the media bridge instance.|
|mediaName|string|false|none|The name of the media that was played.|
|mediaType|string|true|none|The type of media that was played, such as 'VIDEO', 'AUDIO', 'DOCUMENT', 'OTHER', or 'IMAGE'.|
|mediaUrl|string|false|none|The URL of the media that was played.|
|occurredTimestamp|integer(int64)|true|none|The timestamp when the media play event occurred, in Unix time format.|
|pageId|integer(int64)|false|none|A unique identifier for the page where the media was played.|
|pageName|string|false|none|The name of the page where the media was played.|
|pageUrl|string|false|none|The URL of the page where the media was played.|
|sessionId|string|true|none|A unique identifier for the session during which the media was played.|
|state|string|true|none|The state of the media play event, indicating the current status.|

#### Enumerated Values

|Property|Value|
|---|---|
|externalPlayContext|EMAIL|
|externalPlayContext|EXTERNAL_PAGE|
|mediaType|AUDIO|
|mediaType|DOCUMENT|
|mediaType|IMAGE|
|mediaType|OTHER|
|mediaType|VIDEO|
|state|STARTED|
|state|VIEWED|

<h2 id="tocS_MediaPlayedPercentageEvent">MediaPlayedPercentageEvent</h2>
<!-- backwards compatibility -->
<a id="schemamediaplayedpercentageevent"></a>
<a id="schema_MediaPlayedPercentageEvent"></a>
<a id="tocSmediaplayedpercentageevent"></a>
<a id="tocsmediaplayedpercentageevent"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactId|integer(int64)|true|none|The unique identifier for the contact associated with the media event. It is a string value.|
|externalPlayContext|string|false|none|Contextual information about the external environment where the media is played. It is a string value.|
|mediaBridgeId|integer(int64)|true|none|The unique identifier for the media bridge instance. It is a string value.|
|mediaBridgeObjectCoordinates|string|true|none|Coordinates that specify the location of the media bridge object. It is a string value.|
|mediaBridgeObjectTypeId|string|true|none|The type identifier for the media bridge object. It is a string value.|
|mediaName|string|true|none|The name of the media content being played. It is a string value.|
|mediaType|string|true|none|The type of media being played, such as 'VIDEO', 'AUDIO', etc. It is a string value.|
|mediaUrl|string|false|none|The URL of the media content being played. It is a string value.|
|occurredTimestamp|integer(int64)|true|none|The timestamp when the media play event occurred. It is a string value in ISO 8601 format.|
|pageId|integer(int64)|false|none|The unique identifier for the page where the media is being played. It is a string value.|
|pageName|string|false|none|The name of the page where the media is being played. It is a string value.|
|pageObjectCoordinates|string|false|none|Coordinates that specify the location of the page object. It is a string value.|
|pageUrl|string|false|none|The URL of the page where the media is being played. It is a string value.|
|playedPercent|integer(int32)|true|none|The percentage of the media content that has been played. It is a number value.|
|portalId|integer(int32)|true|none|The unique identifier for the HubSpot portal. It is an integer value.|
|providerId|integer(int32)|true|none|The unique identifier for the media provider. It is a string value.|
|sessionId|string|true|none|The unique identifier for the session during which the media was played. It is a string value.|

#### Enumerated Values

|Property|Value|
|---|---|
|externalPlayContext|EMAIL|
|externalPlayContext|EXTERNAL_PAGE|
|mediaType|AUDIO|
|mediaType|DOCUMENT|
|mediaType|IMAGE|
|mediaType|OTHER|
|mediaType|VIDEO|

<h2 id="tocS_MediaPlayedPercentageEventRequest">MediaPlayedPercentageEventRequest</h2>
<!-- backwards compatibility -->
<a id="schemamediaplayedpercentageeventrequest"></a>
<a id="schema_MediaPlayedPercentageEventRequest"></a>
<a id="tocSmediaplayedpercentageeventrequest"></a>
<a id="tocsmediaplayedpercentageeventrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_hsenc|string|false|none|HubSpot encoding parameter for tracking purposes.|
|contactId|integer(int64)|false|none|The unique identifier for the contact associated with the media play event.|
|contactUtk|string|false|none|The user token key associated with the contact.|
|externalId|string|false|none|An external identifier for the media, provided by the user.|
|externalPlayContext|string|false|none|Additional context provided externally about the media play event.|
|mediaBridgeId|integer(int64)|false|none|The unique identifier for the media bridge instance.|
|mediaName|string|false|none|The name of the media that was played.|
|mediaType|string|true|none|The type of media that was played. Valid values include 'VIDEO', 'AUDIO', 'DOCUMENT', 'OTHER', and 'IMAGE'.|
|mediaUrl|string|false|none|The URL where the media is hosted.|
|occurredTimestamp|integer(int64)|true|none|The timestamp when the media play event occurred.|
|pageId|integer(int64)|false|none|The unique identifier for the page where the media was played.|
|pageName|string|false|none|The name of the page where the media was played.|
|pageUrl|string|false|none|The URL of the page where the media was played.|
|playedPercent|integer(int32)|true|none|The percentage of the media that has been played.|
|sessionId|string|true|none|The unique identifier for the session in which the media was played.|

#### Enumerated Values

|Property|Value|
|---|---|
|externalPlayContext|EMAIL|
|externalPlayContext|EXTERNAL_PAGE|
|mediaType|AUDIO|
|mediaType|DOCUMENT|
|mediaType|IMAGE|
|mediaType|OTHER|
|mediaType|VIDEO|

<h2 id="tocS_MinNumbers">MinNumbers</h2>
<!-- backwards compatibility -->
<a id="schemaminnumbers"></a>
<a id="schema_MinNumbers"></a>
<a id="tocSminnumbers"></a>
<a id="tocsminnumbers"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that the operation will evaluate to determine the minimum value. These inputs can include various types of numerical expressions or variables.|
|operator|string|true|none|A string representing the operation type, which is 'MIN_NUMBERS' by default. It indicates that the operation is to find the minimum value.|
|propertyName|string|false|none|A string that specifies the name of the property involved in the operation, if applicable.|
|value|number|false|none|A number representing the result of the operation, which is the minimum value found among the inputs.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|MIN_NUMBERS|

<h2 id="tocS_Month">Month</h2>
<!-- backwards compatibility -->
<a id="schemamonth"></a>
<a id="schema_Month"></a>
<a id="tocSmonth"></a>
<a id="tocsmonth"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that can be various types such as constants, property variables, or other operations, used as inputs for the month operation.|
|operator|string|true|none|A string indicating the type of operation, which is 'MONTH' by default.|
|propertyName|string|false|none|A string that may represent the name of a property involved in the operation.|
|value|number|false|none|A number representing the result or output of the month operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|MONTH|

<h2 id="tocS_MoreThan">MoreThan</h2>
<!-- backwards compatibility -->
<a id="schemamorethan"></a>
<a id="schema_MoreThan"></a>
<a id="tocSmorethan"></a>
<a id="tocsmorethan"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that can be various types of expressions or variables, which are used in the comparison operation.|
|operator|string|true|none|A string representing the operation type, which is 'MORE_THAN' by default.|
|propertyName|string|false|none|A string representing the name of the property involved in the comparison.|
|value|boolean|false|none|A boolean indicating the result of the comparison operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|MORE_THAN|

<h2 id="tocS_MoreThanOrEqual">MoreThanOrEqual</h2>
<!-- backwards compatibility -->
<a id="schemamorethanorequal"></a>
<a id="schema_MoreThanOrEqual"></a>
<a id="tocSmorethanorequal"></a>
<a id="tocsmorethanorequal"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that are evaluated against the 'value'. These inputs can be various types of expressions or variables.|
|operator|string|true|none|A string representing the operation to be performed. For this component, the operator is 'MORE_THAN_OR_EQUAL'.|
|propertyName|string|false|none|A string representing the name of the property involved in the comparison.|
|value|boolean|false|none|A number representing the threshold value that the input is compared against.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|MORE_THAN_OR_EQUAL|

<h2 id="tocS_MultiplyNumbers">MultiplyNumbers</h2>
<!-- backwards compatibility -->
<a id="schemamultiplynumbers"></a>
<a id="schema_MultiplyNumbers"></a>
<a id="tocSmultiplynumbers"></a>
<a id="tocsmultiplynumbers"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enclosedInParentheses|boolean|true|none|A boolean indicating whether the operation is enclosed in parentheses, affecting the order of operations.|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs to be multiplied, which can include constants, property variables, or other operations.|
|operator|string|true|none|A string that specifies the operation type, which is 'MULTIPLY' by default.|
|propertyName|string|false|none|A string representing the name of the property associated with this multiplication operation.|
|value|number|false|none|A number that represents the result of the multiplication operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|MULTIPLY_NUMBERS|

<h2 id="tocS_Not">Not</h2>
<!-- backwards compatibility -->
<a id="schemanot"></a>
<a id="schema_Not"></a>
<a id="tocSnot"></a>
<a id="tocsnot"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that the NOT operation will be applied to. Each input can be a boolean, number, string, or a more complex expression.|
|operator|string|true|none|A string that specifies the type of operation, which is 'NOT' for this component.|
|propertyName|string|false|none|A string representing the name of the property associated with this NOT operation, if applicable.|
|value|boolean|false|none|A boolean value representing the result of the NOT operation on the inputs.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|NOT|

<h2 id="tocS_Now">Now</h2>
<!-- backwards compatibility -->
<a id="schemanow"></a>
<a id="schema_Now"></a>
<a id="tocSnow"></a>
<a id="tocsnow"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|A string representing the operation type, with a default value of 'NOW'.|
|propertyName|string|false|none|A string indicating the name of the property associated with the current date and time.|
|value|number|false|none|A string that holds the current date and time value.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|NOW|

<h2 id="tocS_NumberEquals">NumberEquals</h2>
<!-- backwards compatibility -->
<a id="schemanumberequals"></a>
<a id="schema_NumberEquals"></a>
<a id="tocSnumberequals"></a>
<a id="tocsnumberequals"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that can include various types of property variables and operations, used to determine the value to compare.|
|operator|string|true|none|A string representing the operation type, which is 'EQUALS' for this component.|
|propertyName|string|false|none|A string indicating the name of the property being evaluated for equality.|
|value|boolean|false|none|A number that the property is compared against to check for equality.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|NUMBER_EQUALS|

<h2 id="tocS_NumberPropertyVariable">NumberPropertyVariable</h2>
<!-- backwards compatibility -->
<a id="schemanumberpropertyvariable"></a>
<a id="schema_NumberPropertyVariable"></a>
<a id="tocSnumberpropertyvariable"></a>
<a id="tocsnumberpropertyvariable"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|A string representing the operation to be performed. This property is required.|
|propertyName|string|false|none|A string indicating the name of the property. This property is used to identify the specific numerical property being referenced.|
|value|number|false|none|The numerical value associated with the property variable. It is used in calculations or comparisons.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|NUMBER_PROPERTY_VARIABLE|

<h2 id="tocS_NumberTargetPropertyVariable">NumberTargetPropertyVariable</h2>
<!-- backwards compatibility -->
<a id="schemanumbertargetpropertyvariable"></a>
<a id="schema_NumberTargetPropertyVariable"></a>
<a id="tocSnumbertargetpropertyvariable"></a>
<a id="tocsnumbertargetpropertyvariable"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|A string representing the operation to be performed. It is required and must be one of the predefined operations.|
|propertyName|string|false|none|The name of the property being targeted, represented as a string.|
|value|number|false|none|The value associated with the number property, represented as a number.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|NUMBER_TARGET_PROPERTY_VARIABLE|

<h2 id="tocS_NumberToString">NumberToString</h2>
<!-- backwards compatibility -->
<a id="schemanumbertostring"></a>
<a id="schema_NumberToString"></a>
<a id="tocSnumbertostring"></a>
<a id="tocsnumbertostring"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of input elements that can include various types like constants, property variables, or other operations, which are used as inputs for the number-to-string conversion.|
|operator|string|true|none|A string that specifies the operation type, which is 'NumberToString' in this context.|
|propertyName|string|false|none|A string representing the name of the property associated with this operation.|
|value|string|false|none|The resulting string value after the number has been converted.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|NUMBER_TO_STRING|

<h2 id="tocS_OEmbedDomainsCollectionResponse">OEmbedDomainsCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaoembeddomainscollectionresponse"></a>
<a id="schema_OEmbedDomainsCollectionResponse"></a>
<a id="tocSoembeddomainscollectionresponse"></a>
<a id="tocsoembeddomainscollectionresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[IntegratorOEmbedDomainModel](#schemaintegratoroembeddomainmodel)]|true|none|An array containing the OEmbed domains. Each item in the array represents a single OEmbed domain.|
|totalCount|integer(int32)|false|none|An integer representing the total number of OEmbed domains available.|

<h2 id="tocS_ObjectDefinitionResponse">ObjectDefinitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaobjectdefinitionresponse"></a>
<a id="schema_ObjectDefinitionResponse"></a>
<a id="tocSobjectdefinitionresponse"></a>
<a id="tocsobjectdefinitionresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectTypeId|string|true|none|A string representing the unique identifier for the object type.|
|objectTypeName|string|true|none|A string representing the name of the object type.|
|properties|[[PropertyDefinition](#schemapropertydefinition)]|true|none|An array of properties that belong to the object type, each defining specific attributes of the object.|
|propertyGroups|[[GroupView](#schemagroupview)]|true|none|An array of property groups associated with the object type, detailing how properties are grouped together.|
|schema|[InboundDbObjectType](#schemainbounddbobjecttype)|false|none|none|

<h2 id="tocS_ObjectSchema">ObjectSchema</h2>
<!-- backwards compatibility -->
<a id="schemaobjectschema"></a>
<a id="schema_ObjectSchema"></a>
<a id="tocSobjectschema"></a>
<a id="tocsobjectschema"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowsSensitiveProperties|boolean|true|none|A boolean indicating whether the object allows sensitive properties.|
|archived|boolean|true|none|A boolean indicating whether the object is archived.|
|associations|[[AssociationDefinition](#schemaassociationdefinition)]|true|none|A reference to the associations of the object, which are defined elsewhere in the schema.|
|createdAt|string(date-time)|false|none|A string in date-time format indicating when the object was created.|
|createdByUserId|integer(int32)|false|none|A string representing the ID of the user who created the object.|
|description|string|false|none|A string providing a description of the object.|
|fullyQualifiedName|string|true|none|A string representing the fully qualified name of the object.|
|id|string|true|none|A string representing the unique identifier of the object.|
|labels|[ObjectTypeDefinitionLabels](#schemaobjecttypedefinitionlabels)|true|none|none|
|name|string|true|none|A string representing the name of the object.|
|objectTypeId|string|true|none|A string representing the type identifier of the object.|
|primaryDisplayProperty|string|false|none|A string representing the primary property used for displaying the object.|
|properties|[[Property_1](#schemaproperty_1)]|true|none|A reference to the properties of the object, which are defined elsewhere in the schema.|
|requiredProperties|[string]|true|none|An array of strings representing the properties that are required for the object.|
|searchableProperties|[string]|true|none|An array of strings indicating which properties of the object are searchable.|
|secondaryDisplayProperties|[string]|true|none|An array of strings representing additional properties used for displaying the object.|
|updatedAt|string(date-time)|false|none|A string in date-time format indicating when the object was last updated.|
|updatedByUserId|integer(int32)|false|none|A string representing the ID of the user who last updated the object.|

<h2 id="tocS_ObjectTypeDefinition">ObjectTypeDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaobjecttypedefinition"></a>
<a id="schema_ObjectTypeDefinition"></a>
<a id="tocSobjecttypedefinition"></a>
<a id="tocsobjecttypedefinition"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowsSensitiveProperties|boolean|true|none|A boolean indicating whether the object type allows sensitive properties.|
|archived|boolean|true|none|A boolean indicating whether the object type is archived.|
|createdAt|string(date-time)|false|none|A string representing the date and time when the object type was created, in ISO 8601 format.|
|description|string|false|none|A string providing a description of the object type.|
|fullyQualifiedName|string|true|none|A string representing the fully qualified name of the object type.|
|id|string|true|none|A string representing the unique identifier for the object type.|
|labels|[ObjectTypeDefinitionLabels](#schemaobjecttypedefinitionlabels)|true|none|none|
|name|string|true|none|A string representing the name of the object type.|
|objectTypeId|string|true|none|A string representing the unique identifier for the object type within the system.|
|portalId|integer(int32)|false|none|An integer representing the portal ID associated with the object type.|
|primaryDisplayProperty|string|false|none|A string representing the primary property used for displaying this object type.|
|requiredProperties|[string]|true|none|An array of strings representing the properties that are required for this object type.|
|searchableProperties|[string]|true|none|An array of strings indicating which properties can be used in search operations.|
|secondaryDisplayProperties|[string]|true|none|An array of strings representing additional properties used for displaying this object type.|
|updatedAt|string(date-time)|false|none|A string representing the date and time when the object type was last updated, in ISO 8601 format.|

<h2 id="tocS_ObjectTypeDefinitionLabels">ObjectTypeDefinitionLabels</h2>
<!-- backwards compatibility -->
<a id="schemaobjecttypedefinitionlabels"></a>
<a id="schema_ObjectTypeDefinitionLabels"></a>
<a id="tocSobjecttypedefinitionlabels"></a>
<a id="tocsobjecttypedefinitionlabels"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|plural|string|false|none|The plural label for the object type, used to represent multiple instances of the object. It is a string.|
|singular|string|false|none|The singular label for the object type, used to represent a single instance of the object. It is a string.|

<h2 id="tocS_ObjectTypeDefinitionPatch">ObjectTypeDefinitionPatch</h2>
<!-- backwards compatibility -->
<a id="schemaobjecttypedefinitionpatch"></a>
<a id="schema_ObjectTypeDefinitionPatch"></a>
<a id="tocSobjecttypedefinitionpatch"></a>
<a id="tocsobjecttypedefinitionpatch"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowsSensitiveProperties|boolean|false|none|A boolean that specifies if the object type allows properties marked as sensitive.|
|clearDescription|boolean|true|none|A boolean indicating whether the description should be cleared or reset.|
|description|string|false|none|A string providing a description of the object type.|
|labels|[ObjectTypeDefinitionLabels](#schemaobjecttypedefinitionlabels)|false|none|none|
|primaryDisplayProperty|string|false|none|A string that identifies the primary property used for displaying the object.|
|requiredProperties|[string]|false|none|An array of strings indicating which properties are required for the object type.|
|restorable|boolean|false|none|A boolean indicating whether the object type can be restored after deletion.|
|searchableProperties|[string]|false|none|An array of strings specifying which properties can be used in search queries.|
|secondaryDisplayProperties|[string]|false|none|An array of strings that list additional properties used for displaying the object.|

<h2 id="tocS_ObjectTypeIdProto">ObjectTypeIdProto</h2>
<!-- backwards compatibility -->
<a id="schemaobjecttypeidproto"></a>
<a id="schema_ObjectTypeIdProto"></a>
<a id="tocSobjecttypeidproto"></a>
<a id="tocsobjecttypeidproto"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|innerId|integer(int32)|true|none|A property likely representing an internal identifier for the object type. The data type is not specified in the provided spec.|
|metaTypeId|integer(int32)|true|none|A property that probably refers to a meta type identifier associated with the object type. The data type is not specified in the provided spec.|

<h2 id="tocS_Option">Option</h2>
<!-- backwards compatibility -->
<a id="schemaoption"></a>
<a id="schema_Option"></a>
<a id="tocSoption"></a>
<a id="tocsoption"></a>

```json
null
```

A HubSpot property option

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|A string providing additional information about the option.|
|displayOrder|integer(int32)|true|none|An integer indicating the order in which the option should be displayed relative to other options.|
|doubleData|number|true|none|A number that may provide additional data associated with the option.|
|hidden|boolean|true|none|A boolean indicating whether the option is hidden from display.|
|label|string|true|none|A string representing the display name of the option.|
|readOnly|boolean|true|none|A boolean specifying if the option is read-only and cannot be modified.|
|value|string|true|none|A string representing the unique value associated with the option.|

<h2 id="tocS_OptionDecorations">OptionDecorations</h2>
<!-- backwards compatibility -->
<a id="schemaoptiondecorations"></a>
<a id="schema_OptionDecorations"></a>
<a id="tocSoptiondecorations"></a>
<a id="tocsoptiondecorations"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|string|true|none|A string representing the color to be applied to the element. The format or specific values for the color are not defined in the specification.|

#### Enumerated Values

|Property|Value|
|---|---|
|color|BLACK|
|color|BLUE|
|color|BLUE_LIGHT|
|color|GRAY|
|color|GREEN|
|color|GREEN_LIGHT|
|color|ORANGE|
|color|ORANGE_LIGHT|
|color|PINK|
|color|PINK_LIGHT|
|color|PURPLE|
|color|PURPLE_LIGHT|
|color|RED|
|color|RED_LIGHT|
|color|TEAL|
|color|TEAL_LIGHT|
|color|YELLOW|
|color|YELLOW_LIGHT|

<h2 id="tocS_OptionDecoratorsExtensionData">OptionDecoratorsExtensionData</h2>
<!-- backwards compatibility -->
<a id="schemaoptiondecoratorsextensiondata"></a>
<a id="schema_OptionDecoratorsExtensionData"></a>
<a id="tocSoptiondecoratorsextensiondata"></a>
<a id="tocsoptiondecoratorsextensiondata"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|optionDecoratorStyle|string|true|none|A string representing the style applied to the option decorators. This property defines how the decorators should be visually presented.|
|optionDecorators|object|true|none|An array containing the option decorators. Each decorator provides additional configuration or styling options for media elements.|

#### Enumerated Values

|Property|Value|
|---|---|
|optionDecoratorStyle|LABEL_ONLY|
|optionDecoratorStyle|LABEL_WITH_BADGE|
|optionDecoratorStyle|LABEL_WITH_COLOR|

<h2 id="tocS_OptionInput">OptionInput</h2>
<!-- backwards compatibility -->
<a id="schemaoptioninput"></a>
<a id="schema_OptionInput"></a>
<a id="tocSoptioninput"></a>
<a id="tocsoptioninput"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A string providing additional information about the option.|
|displayOrder|integer(int32)|true|none|An integer indicating the order in which the option should appear relative to other options.|
|hidden|boolean|true|none|A boolean indicating whether the option should be hidden from the user interface.|
|label|string|true|none|The display label for the option, shown to users. It is a string.|
|value|string|true|none|The underlying value associated with the option, used in data processing. It is a string.|

<h2 id="tocS_Option_1">Option_1</h2>
<!-- backwards compatibility -->
<a id="schemaoption_1"></a>
<a id="schema_Option_1"></a>
<a id="tocSoption_1"></a>
<a id="tocsoption_1"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A string providing additional information about the option.|
|displayOrder|integer(int32)|false|none|An integer indicating the order in which the option should be displayed relative to other options.|
|hidden|boolean|true|none|A boolean indicating whether the option is hidden from display.|
|label|string|true|none|A string representing the display label for the option.|
|value|string|true|none|A string representing the value assigned to the option.|

<h2 id="tocS_Or">Or</h2>
<!-- backwards compatibility -->
<a id="schemaor"></a>
<a id="schema_Or"></a>
<a id="tocSor"></a>
<a id="tocsor"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enclosedInParentheses|boolean|true|none|A boolean indicating whether the 'OR' operation is enclosed in parentheses, affecting its precedence in logical expressions.|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of various input types that can be used in the 'OR' operation. Each input can be a constant, a property variable, or another operation.|
|operator|string|true|none|A string that specifies the type of logical operation. The default and only valid value is 'OR'.|
|propertyName|string|false|none|A string representing the name of the property involved in the 'OR' operation.|
|value|boolean|false|none|A boolean indicating the result of the 'OR' operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|OR|

<h2 id="tocS_ParseNumber">ParseNumber</h2>
<!-- backwards compatibility -->
<a id="schemaparsenumber"></a>
<a id="schema_ParseNumber"></a>
<a id="tocSparsenumber"></a>
<a id="tocsparsenumber"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that can include various types such as strings or numbers, which are to be parsed into a numeric format.|
|operator|string|true|none|A string that specifies the operation type, which is 'PARSE_NUMBER' for this component.|
|propertyName|string|false|none|A string representing the name of the property associated with the parsed number.|
|value|number|false|none|The numeric value obtained after parsing the input string.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|PARSE_NUMBER|

<h2 id="tocS_PeriodToMonths">PeriodToMonths</h2>
<!-- backwards compatibility -->
<a id="schemaperiodtomonths"></a>
<a id="schema_PeriodToMonths"></a>
<a id="tocSperiodtomonths"></a>
<a id="tocsperiodtomonths"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that the operation will process. Each input can be a constant, variable, or another operation.|
|operator|string|true|none|A string that specifies the operation to be performed. The default value is 'PERIOD_TO_MONTHS'.|
|propertyName|string|false|none|A string representing the name of the property involved in the operation.|
|value|number|false|none|A number representing the result of the conversion, expressed in months.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|PERIOD_TO_MONTHS|

<h2 id="tocS_PeriodToWeeks">PeriodToWeeks</h2>
<!-- backwards compatibility -->
<a id="schemaperiodtoweeks"></a>
<a id="schema_PeriodToWeeks"></a>
<a id="tocSperiodtoweeks"></a>
<a id="tocsperiodtoweeks"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that are used in the conversion operation. These inputs can be various data types, including constants and property variables.|
|operator|string|true|none|A string representing the operation type, which is 'PERIOD_TO_WEEKS' by default.|
|propertyName|string|false|none|A string representing the name of the property involved in the conversion operation.|
|value|number|false|none|A number indicating the result of the conversion from the period to weeks.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|PERIOD_TO_WEEKS|

<h2 id="tocS_PipelineProbability">PipelineProbability</h2>
<!-- backwards compatibility -->
<a id="schemapipelineprobability"></a>
<a id="schema_PipelineProbability"></a>
<a id="tocSpipelineprobability"></a>
<a id="tocspipelineprobability"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that can include various types of property variables and operations, used to determine the pipeline probability.|
|operator|string|true|none|A string representing the operation type, defaulting to 'PIPELINE_PROBABILITY'.|
|propertyName|string|false|none|A string indicating the name of the property involved in the calculation.|
|value|number|false|none|A number representing the calculated probability value.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|PIPELINE_PROBABILITY|

<h2 id="tocS_PortalTimezone">PortalTimezone</h2>
<!-- backwards compatibility -->
<a id="schemaportaltimezone"></a>
<a id="schema_PortalTimezone"></a>
<a id="tocSportaltimezone"></a>
<a id="tocsportaltimezone"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|none|
|propertyName|string|false|none|none|
|value|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|PORTAL_TIMEZONE|

<h2 id="tocS_Power">Power</h2>
<!-- backwards compatibility -->
<a id="schemapower"></a>
<a id="schema_Power"></a>
<a id="tocSpower"></a>
<a id="tocspower"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that are used in the power calculation. Each input can be a constant value, a variable, or another operation.|
|operator|string|true|none|A string that specifies the type of operation, which in this case is 'POWER'.|
|propertyName|string|false|none|A string representing the name of the property involved in the power calculation.|
|value|number|false|none|The result of the power operation, represented as a number.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|POWER|

<h2 id="tocS_Property">Property</h2>
<!-- backwards compatibility -->
<a id="schemaproperty"></a>
<a id="schema_Property"></a>
<a id="tocSproperty"></a>
<a id="tocsproperty"></a>

```json
null
```

A HubSpot property

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedObjectTypes|[[ObjectTypeIdProto](#schemaobjecttypeidproto)]|true|none|An array of strings representing the object types that are allowed for this property.|
|calculated|boolean|true|none|A boolean indicating if the property is calculated.|
|canArchive|boolean|true|none|A boolean indicating if the property can be archived.|
|canRestore|boolean|true|none|A boolean indicating if the property can be restored.|
|createdAt|integer(int64)|true|none|A string representing the date and time when the property was created, in ISO 8601 format.|
|createdUserId|integer(int64)|true|none|A string representing the user ID who created the property.|
|currencyPropertyName|string|true|none|A string representing the name of the currency property associated with this property.|
|dataSensitivity|string|true|none|A string indicating the sensitivity level of the data.|
|dateDisplayHint|string|true|none|A string providing a hint for displaying dates.|
|deleted|boolean|true|none|A boolean indicating if the property has been deleted.|
|description|string|true|none|A string providing a description of the property.|
|displayMode|string|true|none|A string indicating the display mode of the property.|
|displayOrder|integer(int32)|true|none|An integer specifying the order in which the property is displayed.|
|enforceMultivalueUniqueness|boolean|true|none|A boolean indicating if uniqueness is enforced for multivalue properties.|
|externalOptions|boolean|true|none|A boolean indicating if the property has external options.|
|externalOptionsReferenceType|string|true|none|A string indicating the reference type for external options.|
|favorited|boolean|true|none|A boolean indicating if the property is marked as a favorite.|
|favoritedOrder|integer(int32)|true|none|An integer specifying the order of the property among favorites.|
|fieldType|string|true|none|A string indicating the field type of the property, such as 'booleancheckbox', 'calculation_equation', 'checkbox', 'date', 'file', 'html', 'number', 'phonenumber', 'radio', 'select', 'text', or 'textarea'.|
|formField|boolean|true|none|A boolean indicating whether the property is used as a form field.|
|fromUserId|integer(int64)|true|none|A string representing the user ID from which the property originates.|
|groupName|string|true|none|A string representing the name of the group to which the property belongs.|
|hasUniqueValue|boolean|true|none|A boolean indicating if the property has a unique value.|
|hidden|boolean|true|none|A boolean indicating whether the property is hidden.|
|hubspotDefined|boolean|true|none|A boolean indicating if the property is defined by HubSpot.|
|isCustomizedDefault|boolean|true|none|A boolean indicating if the property is a customized default.|
|isMultiValued|boolean|true|none|A boolean indicating if the property can have multiple values.|
|isPartial|boolean|true|none|A boolean indicating if the property is partial.|
|label|string|true|none|A string representing the label of the property, used for display purposes.|
|mutableDefinitionNotDeletable|boolean|true|none|A boolean indicating if the property definition is mutable but not deletable.|
|name|string|true|none|A string representing the name of the property.|
|numberDisplayHint|string|true|none|A string providing a hint for displaying numbers, with options like 'unformatted', 'formatted', 'currency', 'percentage', 'duration', or 'probability'.|
|optionSortStrategy|string|true|none|A string indicating the strategy used to sort options.|
|options|[[Option](#schemaoption)]|true|none|An array of options available for the property, applicable if the property type supports options.|
|optionsAreMutable|boolean|true|none|A boolean indicating if the options for the property are mutable.|
|owningAppId|integer(int64)|true|none|An integer representing the ID of the app that owns the property.|
|portalId|integer(int64)|true|none|An integer representing the unique identifier for the portal.|
|readOnlyDefinition|boolean|true|none|A boolean indicating if the property's definition is read-only.|
|readOnlyValue|boolean|true|none|A boolean indicating if the property's value is read-only.|
|referencedObjectType|string|true|none|A string indicating the type of object referenced by the property.|
|searchTextAnalysisMode|string|true|none|A string indicating the mode of text analysis for search purposes.|
|searchableInGlobalSearch|boolean|true|none|A boolean indicating if the property is searchable in global search.|
|sensitiveDataCategories|[string]|true|none|An array of strings representing the categories of sensitive data associated with this property.|
|showCurrencySymbol|boolean|true|none|A boolean indicating if the currency symbol should be displayed for the property.|
|textDisplayHint|string|true|none|A string providing a hint for displaying text, with options like 'unformatted_single_line', 'multi_line', 'email', 'phone_number', 'domain_name', 'ip_address', 'physical_address', or 'postal_code'.|
|type|string|true|none|A string indicating the type of the property, such as 'bool', 'date', 'datetime', 'enumeration', 'number', 'phone_number', or 'string'.|
|updatedAt|integer(int64)|true|none|A string representing the date and time when the property was last updated, in ISO 8601 format.|

#### Enumerated Values

|Property|Value|
|---|---|
|dataSensitivity|high|
|dataSensitivity|none|
|dataSensitivity|standard|
|dateDisplayHint|absolute|
|dateDisplayHint|absolute_with_relative|
|dateDisplayHint|time_since|
|dateDisplayHint|time_until|
|displayMode|all_unique_versions|
|displayMode|current_value|
|numberDisplayHint|currency|
|numberDisplayHint|duration|
|numberDisplayHint|formatted|
|numberDisplayHint|percentage|
|numberDisplayHint|probability|
|numberDisplayHint|unformatted|
|optionSortStrategy|ALPHABETICAL|
|optionSortStrategy|DISPLAY_ORDER|
|referencedObjectType|ABANDONED_CART|
|referencedObjectType|ACCEPTANCE_TEST|
|referencedObjectType|AD|
|referencedObjectType|AD_ACCOUNT|
|referencedObjectType|AD_CAMPAIGN|
|referencedObjectType|AD_GROUP|
|referencedObjectType|AI_FORECAST|
|referencedObjectType|ALL_PAGES|
|referencedObjectType|APPROVAL|
|referencedObjectType|APPROVAL_STEP|
|referencedObjectType|ATTRIBUTION|
|referencedObjectType|AUDIENCE|
|referencedObjectType|AUTOMATION_JOURNEY|
|referencedObjectType|AUTOMATION_PLATFORM_FLOW|
|referencedObjectType|AUTOMATION_PLATFORM_FLOW_ACTION|
|referencedObjectType|BET_ALERT|
|referencedObjectType|BET_DELIVERABLE_SERVICE|
|referencedObjectType|BLOG_LISTING_PAGE|
|referencedObjectType|BLOG_POST|
|referencedObjectType|CALL|
|referencedObjectType|CAMPAIGN|
|referencedObjectType|CAMPAIGN_BUDGET_ITEM|
|referencedObjectType|CAMPAIGN_SPEND_ITEM|
|referencedObjectType|CAMPAIGN_STEP|
|referencedObjectType|CAMPAIGN_TEMPLATE|
|referencedObjectType|CAMPAIGN_TEMPLATE_STEP|
|referencedObjectType|CART|
|referencedObjectType|CASE_STUDY|
|referencedObjectType|CHATFLOW|
|referencedObjectType|CLIP|
|referencedObjectType|CMS_URL|
|referencedObjectType|COMBO_EVENT_CONFIGURATION|
|referencedObjectType|COMMERCE_PAYMENT|
|referencedObjectType|COMMUNICATION|
|referencedObjectType|COMPANY|
|referencedObjectType|CONTACT|
|referencedObjectType|CONTACT_CREATE_ATTRIBUTION|
|referencedObjectType|CONTENT|
|referencedObjectType|CONTENT_AUDIT|
|referencedObjectType|CONTENT_AUDIT_PAGE|
|referencedObjectType|CONVERSATION|
|referencedObjectType|CONVERSATION_INBOX|
|referencedObjectType|CONVERSATION_SESSION|
|referencedObjectType|CRM_OBJECTS_DUMMY_TYPE|
|referencedObjectType|CRM_PIPELINES_DUMMY_TYPE|
|referencedObjectType|CTA|
|referencedObjectType|CTA_VARIANT|
|referencedObjectType|DATA_PRIVACY_CONSENT|
|referencedObjectType|DATA_SYNC_STATE|
|referencedObjectType|DEAL|
|referencedObjectType|DEAL_CREATE_ATTRIBUTION|
|referencedObjectType|DEAL_REGISTRATION|
|referencedObjectType|DEAL_SPLIT|
|referencedObjectType|DISCOUNT|
|referencedObjectType|DISCOUNT_CODE|
|referencedObjectType|DISCOUNT_TEMPLATE|
|referencedObjectType|EMAIL|
|referencedObjectType|ENGAGEMENT|
|referencedObjectType|EXPORT|
|referencedObjectType|EXTERNAL_WEB_URL|
|referencedObjectType|FEE|
|referencedObjectType|FEEDBACK_SUBMISSION|
|referencedObjectType|FEEDBACK_SURVEY|
|referencedObjectType|FILE_MANAGER_FILE|
|referencedObjectType|FILE_MANAGER_FOLDER|
|referencedObjectType|FOLDER|
|referencedObjectType|FORECAST|
|referencedObjectType|FORM|
|referencedObjectType|FORM_SUBMISSION_INBOUNDDB|
|referencedObjectType|GOAL_TARGET|
|referencedObjectType|GOAL_TARGET_GROUP|
|referencedObjectType|GOAL_TEMPLATE|
|referencedObjectType|GSC_PROPERTY|
|referencedObjectType|HUB|
|referencedObjectType|IMPORT|
|referencedObjectType|INVOICE|
|referencedObjectType|KEYWORD|
|referencedObjectType|KNOWLEDGE_ARTICLE|
|referencedObjectType|LANDING_PAGE|
|referencedObjectType|LEAD|
|referencedObjectType|LINE_ITEM|
|referencedObjectType|MARKETING_CALENDAR|
|referencedObjectType|MARKETING_CAMPAIGN_UTM|
|referencedObjectType|MARKETING_EMAIL|
|referencedObjectType|MARKETING_EVENT|
|referencedObjectType|MARKETING_EVENT_ATTENDANCE|
|referencedObjectType|MARKETING_SMS|
|referencedObjectType|MEDIA_BRIDGE|
|referencedObjectType|MEETING_EVENT|
|referencedObjectType|MIC|
|referencedObjectType|NOTE|
|referencedObjectType|OBJECT_LIST|
|referencedObjectType|ORDER|
|referencedObjectType|OWNER|
|referencedObjectType|PARTNER_ACCOUNT|
|referencedObjectType|PARTNER_CLIENT|
|referencedObjectType|PARTNER_CLIENT_REVENUE|
|referencedObjectType|PARTNER_SERVICE|
|referencedObjectType|PAYMENT_LINK|
|referencedObjectType|PAYMENT_SCHEDULE|
|referencedObjectType|PAYMENT_SCHEDULE_INSTALLMENT|
|referencedObjectType|PERMISSIONS_TESTING|
|referencedObjectType|PLAYBOOK|
|referencedObjectType|PLAYBOOK_QUESTION|
|referencedObjectType|PLAYBOOK_SUBMISSION|
|referencedObjectType|PLAYBOOK_SUBMISSION_ANSWER|
|referencedObjectType|PLAYLIST|
|referencedObjectType|PLAYLIST_FOLDER|
|referencedObjectType|PODCAST_EPISODE|
|referencedObjectType|PORTAL|
|referencedObjectType|PORTAL_OBJECT_SYNC_MESSAGE|
|referencedObjectType|POSTAL_MAIL|
|referencedObjectType|PRIVACY_SCANNER_COOKIE|
|referencedObjectType|PRODUCT|
|referencedObjectType|PRODUCT_OR_FOLDER|
|referencedObjectType|PROPERTY_INFO|
|referencedObjectType|PROSPECTING_AGENT_CONTACT_ASSIGNMENT|
|referencedObjectType|PUBLISHING_TASK|
|referencedObjectType|QUARANTINED_SUBMISSION|
|referencedObjectType|QUOTA|
|referencedObjectType|QUOTE|
|referencedObjectType|QUOTE_FIELD|
|referencedObjectType|QUOTE_MODULE|
|referencedObjectType|QUOTE_MODULE_FIELD|
|referencedObjectType|QUOTE_TEMPLATE|
|referencedObjectType|RESTORABLE_CRM_OBJECT|
|referencedObjectType|ROSTER|
|referencedObjectType|ROSTER_MEMBER|
|referencedObjectType|SALES_DOCUMENT|
|referencedObjectType|SALES_TASK|
|referencedObjectType|SALES_WORKLOAD|
|referencedObjectType|SALESFORCE_SYNC_ERROR|
|referencedObjectType|SCHEDULING_PAGE|
|referencedObjectType|SCHEMAS_BACKEND_TEST|
|referencedObjectType|SCORE_CONFIGURATION|
|referencedObjectType|SEQUENCE|
|referencedObjectType|SEQUENCE_ENROLLMENT|
|referencedObjectType|SEQUENCE_STEP|
|referencedObjectType|SEQUENCE_STEP_ENROLLMENT|
|referencedObjectType|SERVICE|
|referencedObjectType|SITE_PAGE|
|referencedObjectType|SNIPPET|
|referencedObjectType|SOCIAL_BROADCAST|
|referencedObjectType|SOCIAL_CHANNEL|
|referencedObjectType|SOCIAL_POST|
|referencedObjectType|SOCIAL_PROFILE|
|referencedObjectType|SOX_PROTECTED_DUMMY_TYPE|
|referencedObjectType|SOX_PROTECTED_TEST_TYPE|
|referencedObjectType|SUBMISSION_TAG|
|referencedObjectType|SUBSCRIPTION|
|referencedObjectType|TASK|
|referencedObjectType|TASK_TEMPLATE|
|referencedObjectType|TAX|
|referencedObjectType|TEMPLATE|
|referencedObjectType|TICKET|
|referencedObjectType|UNKNOWN|
|referencedObjectType|UNSUBSCRIBE|
|referencedObjectType|USER|
|referencedObjectType|VIEW|
|referencedObjectType|VIEW_BLOCK|
|referencedObjectType|WEB_INTERACTIVE|
|searchTextAnalysisMode|NONE|
|searchTextAnalysisMode|NOT_ANALYZED_TEXT|
|textDisplayHint|domain_name|
|textDisplayHint|email|
|textDisplayHint|ip_address|
|textDisplayHint|multi_line|
|textDisplayHint|phone_number|
|textDisplayHint|physical_address|
|textDisplayHint|postal_code|
|textDisplayHint|unformatted_single_line|
|type|bool|
|type|currency_number|
|type|date|
|type|datetime|
|type|enumeration|
|type|json|
|type|number|
|type|object_coordinates|
|type|phone_number|
|type|string|
|type|time_range|

<h2 id="tocS_PropertyCreate">PropertyCreate</h2>
<!-- backwards compatibility -->
<a id="schemapropertycreate"></a>
<a id="schema_PropertyCreate"></a>
<a id="tocSpropertycreate"></a>
<a id="tocspropertycreate"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calculationFormula|string|false|none|A string representing the formula used to calculate the property's value, applicable for calculated properties.|
|currencyPropertyName|string|false|none|A string that specifies the name of the property used to determine the currency for currency-type properties.|
|dataSensitivity|string|false|none|A string indicating the sensitivity level of the data, such as 'PII' (Personally Identifiable Information).|
|description|string|false|none|A string providing a description of the property, explaining its purpose or usage.|
|displayOrder|integer(int32)|false|none|An integer that determines the order in which the property is displayed relative to other properties.|
|externalOptions|boolean|false|none|A boolean that specifies whether the property options are managed externally.|
|fieldType|string|true|none|A string indicating the field type for the property, such as 'booleancheckbox', 'calculation_equation', 'checkbox', 'date', 'file', 'html', 'number', 'phonenumber', 'radio', 'select', 'text', or 'textarea'.|
|formField|boolean|false|none|A boolean indicating whether the property is available for use in forms.|
|groupName|string|true|none|The name of the group to which the property belongs, represented as a string.|
|hasUniqueValue|boolean|false|none|A boolean indicating whether the property must have a unique value across all records.|
|hidden|boolean|false|none|A boolean that specifies whether the property is hidden from user interfaces.|
|label|string|true|none|A string representing the display label for the property, used in user interfaces.|
|name|string|true|none|The unique name of the property. It is a string that identifies the property within the object type.|
|numberDisplayHint|string|false|none|A string that provides a hint for displaying number properties, such as 'unformatted', 'formatted', 'currency', 'percentage', 'duration', or 'probability'.|
|options|[[OptionInput](#schemaoptioninput)]|false|none|An array of OptionInput objects, specifying the options available for properties of type 'enumeration'.|
|referencedObjectType|string|false|none|A string that denotes the object type referenced by the property, if applicable.|
|showCurrencySymbol|boolean|false|none|A boolean indicating whether to display a currency symbol for currency-type properties.|
|textDisplayHint|string|false|none|A string that provides a hint for displaying text properties, such as 'unformatted_single_line', 'multi_line', 'email', 'phone_number', 'domain_name', 'ip_address', 'physical_address', or 'postal_code'.|
|type|string|true|none|The data type of the property, which can be one of 'bool', 'date', 'datetime', 'enumeration', 'number', 'phone_number', or 'string'.|

#### Enumerated Values

|Property|Value|
|---|---|
|dataSensitivity|highly_sensitive|
|dataSensitivity|non_sensitive|
|dataSensitivity|sensitive|
|fieldType|booleancheckbox|
|fieldType|calculation_equation|
|fieldType|checkbox|
|fieldType|date|
|fieldType|file|
|fieldType|html|
|fieldType|number|
|fieldType|phonenumber|
|fieldType|radio|
|fieldType|select|
|fieldType|text|
|fieldType|textarea|
|numberDisplayHint|currency|
|numberDisplayHint|duration|
|numberDisplayHint|formatted|
|numberDisplayHint|percentage|
|numberDisplayHint|probability|
|numberDisplayHint|unformatted|
|textDisplayHint|domain_name|
|textDisplayHint|email|
|textDisplayHint|ip_address|
|textDisplayHint|multi_line|
|textDisplayHint|phone_number|
|textDisplayHint|physical_address|
|textDisplayHint|postal_code|
|textDisplayHint|unformatted_single_line|
|type|bool|
|type|date|
|type|datetime|
|type|enumeration|
|type|number|
|type|phone_number|
|type|string|

<h2 id="tocS_PropertyDefinition">PropertyDefinition</h2>
<!-- backwards compatibility -->
<a id="schemapropertydefinition"></a>
<a id="schema_PropertyDefinition"></a>
<a id="tocSpropertydefinition"></a>
<a id="tocspropertydefinition"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calculationExpression|[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)|false|none|An expression used to calculate the property's value based on other properties or constants.|
|calculationFormula|string|false|none|A formula that defines how the property's value is computed.|
|definitionSource|[PropertyDefinitionSource](#schemapropertydefinitionsource)|false|none|none|
|extensionData|[ExtensionData](#schemaextensiondata)|false|none|none|
|externalOptionsMetaData|[ExternalOptionsMetaData](#schemaexternaloptionsmetadata)|false|none|none|
|fulcrumPortalId|integer(int32)|false|none|An identifier for the portal or account within which this property is used.|
|fulcrumTimestamp|integer(int64)|false|none|A timestamp indicating when the property was last updated or synchronized.|
|janusGroup|string|false|none|The group or category to which this property belongs, potentially used for organizing properties.|
|lookupAssociationSpec|[LookupAssociationSpec](#schemalookupassociationspec)|false|none|none|
|objectTypeId|string|true|none|The identifier for the type of object to which this property belongs.|
|permission|[FieldLevelPermission](#schemafieldlevelpermission)|false|none|none|
|property|[Property](#schemaproperty)|true|none|A HubSpot property|
|propertyDefinitionSource|[DefinitionSource](#schemadefinitionsource)|false|none|none|
|propertyRequirements|[DefaultRequirements](#schemadefaultrequirements)|false|none|none|
|rollupExpression|[RollupExpression](#schemarollupexpression)|false|none|none|

<h2 id="tocS_PropertyDefinitionSource">PropertyDefinitionSource</h2>
<!-- backwards compatibility -->
<a id="schemapropertydefinitionsource"></a>
<a id="schema_PropertyDefinitionSource"></a>
<a id="tocSpropertydefinitionsource"></a>
<a id="tocspropertydefinitionsource"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|A string representing the name of the source.|
|type|string|true|none|A string indicating the source type of the property definition. Valid values include 'GLOBAL', 'OBJECT_TYPE', 'HAVEN_BRANCH', and 'PORTAL'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|GLOBAL|
|type|HAVEN_BRANCH|
|type|OBJECT_TYPE|
|type|PORTAL|

<h2 id="tocS_PropertyGroup">PropertyGroup</h2>
<!-- backwards compatibility -->
<a id="schemapropertygroup"></a>
<a id="schema_PropertyGroup"></a>
<a id="tocSpropertygroup"></a>
<a id="tocspropertygroup"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|true|none|A boolean indicating whether the property group is archived. It is required.|
|displayOrder|integer(int32)|false|none|An integer indicating the order in which the property group should be displayed.|
|label|string|true|none|A human-readable label for the property group. It is a string and is required.|
|name|string|true|none|The name of the property group. It is a string and is required.|

<h2 id="tocS_PropertyGroupCreate">PropertyGroupCreate</h2>
<!-- backwards compatibility -->
<a id="schemapropertygroupcreate"></a>
<a id="schema_PropertyGroupCreate"></a>
<a id="tocSpropertygroupcreate"></a>
<a id="tocspropertygroupcreate"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayOrder|integer(int32)|false|none|An integer representing the order in which the property group should be displayed relative to other groups.|
|label|string|true|none|The display label for the property group. This is a string that is shown in the user interface to represent the group.|
|name|string|true|none|The unique name of the property group. This is a string that identifies the group within the system.|

<h2 id="tocS_PropertyGroupUpdate">PropertyGroupUpdate</h2>
<!-- backwards compatibility -->
<a id="schemapropertygroupupdate"></a>
<a id="schema_PropertyGroupUpdate"></a>
<a id="tocSpropertygroupupdate"></a>
<a id="tocspropertygroupupdate"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayOrder|integer(int32)|false|none|An integer indicating the display order of the property group.|
|label|string|false|none|A string representing the label of the property group.|

<h2 id="tocS_PropertyModificationMetadata">PropertyModificationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemapropertymodificationmetadata"></a>
<a id="schema_PropertyModificationMetadata"></a>
<a id="tocSpropertymodificationmetadata"></a>
<a id="tocspropertymodificationmetadata"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archivable|boolean|true|none|A boolean indicating whether the property can be archived.|
|readOnlyDefinition|boolean|true|none|A boolean indicating if the property's definition is read-only, meaning it cannot be modified.|
|readOnlyOptions|boolean|false|none|A boolean indicating if the options for the property are read-only.|
|readOnlyValue|boolean|true|none|A boolean indicating if the property's value is read-only, meaning it cannot be changed.|

<h2 id="tocS_PropertyName">PropertyName</h2>
<!-- backwards compatibility -->
<a id="schemapropertyname"></a>
<a id="schema_PropertyName"></a>
<a id="tocSpropertyname"></a>
<a id="tocspropertyname"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A string representing the name of the property.|

<h2 id="tocS_Property_1">Property_1</h2>
<!-- backwards compatibility -->
<a id="schemaproperty_1"></a>
<a id="schema_Property_1"></a>
<a id="tocSproperty_1"></a>
<a id="tocsproperty_1"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|none|A boolean indicating whether the property is archived.|
|archivedAt|string(date-time)|false|none|The date and time when the property was archived, in ISO 8601 format.|
|calculated|boolean|false|none|A boolean indicating whether the property is calculated.|
|calculationFormula|string|false|none|The formula used for calculating the property value, if applicable.|
|createdAt|string(date-time)|false|none|The date and time when the property was created, in ISO 8601 format.|
|createdUserId|string|false|none|The ID of the user who created the property.|
|currencyPropertyName|string|false|none|The name of the currency property associated with this property.|
|dataSensitivity|string|false|none|The sensitivity level of the data contained in the property.|
|dateDisplayHint|string|false|none|A hint for displaying date properties.|
|description|string|true|none|A description of the property.|
|displayOrder|integer(int32)|false|none|An integer indicating the display order of the property.|
|externalOptions|boolean|false|none|A boolean indicating whether the property options are external.|
|fieldType|string|true|none|The field type of the property, which can be one of 'booleancheckbox', 'calculation_equation', 'checkbox', 'date', 'file', 'html', 'number', 'phonenumber', 'radio', 'select', 'text', or 'textarea'.|
|formField|boolean|false|none|A boolean indicating whether the property is a form field.|
|groupName|string|true|none|The name of the group to which the property belongs.|
|hasUniqueValue|boolean|false|none|A boolean indicating whether the property value is unique.|
|hidden|boolean|false|none|A boolean indicating whether the property is hidden.|
|hubspotDefined|boolean|false|none|A boolean indicating whether the property is defined by HubSpot.|
|label|string|true|none|The display label for the property.|
|modificationMetadata|[PropertyModificationMetadata](#schemapropertymodificationmetadata)|false|none|none|
|name|string|true|none|The unique name of the property.|
|numberDisplayHint|string|false|none|A hint for displaying number properties, which can be 'unformatted', 'formatted', 'currency', 'percentage', 'duration', or 'probability'.|
|options|[[Option_1](#schemaoption_1)]|true|none|An array of options available for the property, applicable if the property type is 'enumeration'.|
|referencedObjectType|string|false|none|The object type that the property references, if applicable.|
|sensitiveDataCategories|[string]|false|none|Categories of sensitive data associated with the property.|
|showCurrencySymbol|boolean|false|none|A boolean indicating whether to show the currency symbol for the property.|
|textDisplayHint|string|false|none|A hint for displaying text properties, which can be 'unformatted_single_line', 'multi_line', 'email', 'phone_number', 'domain_name', 'ip_address', 'physical_address', or 'postal_code'.|
|type|string|true|none|The data type of the property, such as 'bool', 'date', 'datetime', 'enumeration', 'number', 'phone_number', or 'string'.|
|updatedAt|string(date-time)|false|none|The date and time when the property was last updated, in ISO 8601 format.|
|updatedUserId|string|false|none|The ID of the user who last updated the property.|

#### Enumerated Values

|Property|Value|
|---|---|
|dataSensitivity|highly_sensitive|
|dataSensitivity|non_sensitive|
|dataSensitivity|sensitive|
|dateDisplayHint|absolute|
|dateDisplayHint|absolute_with_relative|
|dateDisplayHint|time_since|
|dateDisplayHint|time_until|
|numberDisplayHint|currency|
|numberDisplayHint|duration|
|numberDisplayHint|formatted|
|numberDisplayHint|percentage|
|numberDisplayHint|probability|
|numberDisplayHint|unformatted|
|textDisplayHint|domain_name|
|textDisplayHint|email|
|textDisplayHint|ip_address|
|textDisplayHint|multi_line|
|textDisplayHint|phone_number|
|textDisplayHint|physical_address|
|textDisplayHint|postal_code|
|textDisplayHint|unformatted_single_line|

<h2 id="tocS_RegexMatches">RegexMatches</h2>
<!-- backwards compatibility -->
<a id="schemaregexmatches"></a>
<a id="schema_RegexMatches"></a>
<a id="tocSregexmatches"></a>
<a id="tocsregexmatches"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs to be evaluated against the regular expression. Each input can be a constant or a variable of various types.|
|operator|string|true|none|A string that specifies the operation type, which in this case is 'REGEX_MATCHES'.|
|propertyName|string|false|none|A string representing the name of the property being evaluated.|
|value|boolean|false|none|A boolean indicating the result of the regex match operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|REGEX_MATCHES|

<h2 id="tocS_RemoveMatchingChars">RemoveMatchingChars</h2>
<!-- backwards compatibility -->
<a id="schemaremovematchingchars"></a>
<a id="schema_RemoveMatchingChars"></a>
<a id="tocSremovematchingchars"></a>
<a id="tocsremovematchingchars"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|none|
|operator|string|true|none|none|
|propertyName|string|false|none|none|
|value|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|REMOVE_MATCHING_CHARS|

<h2 id="tocS_ReplaceMatchingChars">ReplaceMatchingChars</h2>
<!-- backwards compatibility -->
<a id="schemareplacematchingchars"></a>
<a id="schema_ReplaceMatchingChars"></a>
<a id="tocSreplacematchingchars"></a>
<a id="tocsreplacematchingchars"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|none|
|operator|string|true|none|none|
|propertyName|string|false|none|none|
|value|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|REPLACE_MATCHING_CHARS|

<h2 id="tocS_RequiredPropertiesExtensionData">RequiredPropertiesExtensionData</h2>
<!-- backwards compatibility -->
<a id="schemarequiredpropertiesextensiondata"></a>
<a id="schema_RequiredPropertiesExtensionData"></a>
<a id="tocSrequiredpropertiesextensiondata"></a>
<a id="tocsrequiredpropertiesextensiondata"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isRequiredProperty|boolean|true|none|A boolean indicating if the property is required. This field is used to determine the necessity of a property within a given schema or operation.|

<h2 id="tocS_RollupExpression">RollupExpression</h2>
<!-- backwards compatibility -->
<a id="schemarollupexpression"></a>
<a id="schema_RollupExpression"></a>
<a id="tocSrollupexpression"></a>
<a id="tocsrollupexpression"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associationTypes|[[AssociationSpec](#schemaassociationspec)]|true|none|An array of association types that define the relationships between the source object and the target object for the rollup operation.|
|conditionalExpression|[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)|false|none|An expression that specifies conditions under which the rollup operation should be performed.|
|conditionalFormula|string|false|none|A formula that defines additional conditions or calculations to be applied during the rollup operation.|
|emptyRollupValue|string|false|none|The value to be used when the rollup operation results in no data, often a default or placeholder value.|
|rollupOperator|string|true|none|The operator used to perform the rollup operation, such as sum, average, or count.|
|sourceCompareByPropertyName|string|false|none|The name of the property on the source object used for comparison during the rollup operation.|
|sourceObjectTypeId|string|true|none|The unique identifier for the type of object from which data is being sourced.|
|sourcePropertyName|string|true|none|The name of the property on the source object that is being used in the rollup operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|rollupOperator|AVERAGE|
|rollupOperator|COUNT|
|rollupOperator|EARLIEST_VALUE|
|rollupOperator|LATEST_VALUE|
|rollupOperator|MAX|
|rollupOperator|MAX_BY|
|rollupOperator|MIN|
|rollupOperator|MIN_BY|
|rollupOperator|REFERENCED_ID_SET|
|rollupOperator|REFERENCED_STRING_SET|
|rollupOperator|REFERENCED_STRING_SET_INTERSECTION|
|rollupOperator|SUM|
|rollupOperator|SYNC_MAX_BY|
|rollupOperator|SYNC_MIN_BY|
|rollupOperator|SYNC_VALUE|
|rollupOperator|UNKNOWN_ROLLUP_OPERATOR|

<h2 id="tocS_RoundDownNumbers">RoundDownNumbers</h2>
<!-- backwards compatibility -->
<a id="schemarounddownnumbers"></a>
<a id="schema_RoundDownNumbers"></a>
<a id="tocSrounddownnumbers"></a>
<a id="tocsrounddownnumbers"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that can include various types such as constants, property variables, or other operations, which are used as operands in the rounding down operation.|
|operator|string|true|none|A string that specifies the operation type, which is 'ROUND_DOWN_NUMBERS' by default.|
|propertyName|string|false|none|A string representing the name of the property associated with this operation.|
|value|number|false|none|The resulting number after the rounding down operation is applied.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|ROUND_DOWN|

<h2 id="tocS_RoundNearestNumbers">RoundNearestNumbers</h2>
<!-- backwards compatibility -->
<a id="schemaroundnearestnumbers"></a>
<a id="schema_RoundNearestNumbers"></a>
<a id="tocSroundnearestnumbers"></a>
<a id="tocsroundnearestnumbers"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of input values that are considered for the rounding operation. Each input can be a constant, property variable, or another operation.|
|operator|string|true|none|A string indicating the operation type, which is 'ROUND_NEAREST' by default.|
|propertyName|string|false|none|A string representing the name of the property associated with the rounding operation.|
|value|number|false|none|The resulting number after rounding, represented as a number.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|ROUND_NEAREST|

<h2 id="tocS_RoundUpNumbers">RoundUpNumbers</h2>
<!-- backwards compatibility -->
<a id="schemaroundupnumbers"></a>
<a id="schema_RoundUpNumbers"></a>
<a id="tocSroundupnumbers"></a>
<a id="tocsroundupnumbers"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs for the rounding operation, which can include various types of numerical or property variables.|
|operator|string|true|none|A string representing the operation type, which is 'ROUND_UP_NUMBERS' by default.|
|propertyName|string|false|none|A string representing the name of the property associated with the rounding operation.|
|value|number|false|none|A number indicating the result of the rounding operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|ROUND_UP|

<h2 id="tocS_ScopeMapping">ScopeMapping</h2>
<!-- backwards compatibility -->
<a id="schemascopemapping"></a>
<a id="schema_ScopeMapping"></a>
<a id="tocSscopemapping"></a>
<a id="tocsscopemapping"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessLevel|string|true|none|A string indicating the level of access granted for the scope.|
|requestAction|string|true|none|A string representing the action that can be requested within the scope.|
|scopeName|string|true|none|A string representing the name of the scope for which the access permissions are defined.|

#### Enumerated Values

|Property|Value|
|---|---|
|accessLevel|ALL|
|accessLevel|OWNED|
|accessLevel|TEAM_OWNED|
|accessLevel|UNASSIGNED|
|requestAction|COMMUNICATE|
|requestAction|DELETE|
|requestAction|DELETE_SCHEMA|
|requestAction|EDIT|
|requestAction|EDIT_ASSOCIATION|
|requestAction|EDIT_SCHEMA|
|requestAction|MERGE|
|requestAction|VIEW|
|requestAction|VIEW_SCHEMA|

<h2 id="tocS_SetContainsAnyString">SetContainsAnyString</h2>
<!-- backwards compatibility -->
<a id="schemasetcontainsanystring"></a>
<a id="schema_SetContainsAnyString"></a>
<a id="tocSsetcontainsanystring"></a>
<a id="tocssetcontainsanystring"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that can include various types of string or property variables to be checked against the stringToCheck.|
|operator|string|true|none|A string representing the operation type, which is 'SET_CONTAINS_ANY_STRING' by default.|
|propertyName|string|false|none|A string representing the name of the property involved in the operation.|
|stringToCheck|[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)|true|none|A string against which the presence of any strings from the set is evaluated.|
|value|boolean|false|none|A boolean indicating the result of the operation, where true means at least one string from the set is found in the stringToCheck.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|SET_CONTAINS_ANY_STRING|

<h2 id="tocS_SetContainsString">SetContainsString</h2>
<!-- backwards compatibility -->
<a id="schemasetcontainsstring"></a>
<a id="schema_SetContainsString"></a>
<a id="tocSsetcontainsstring"></a>
<a id="tocssetcontainsstring"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs used in the operation, which can include various types of data such as constants or property variables.|
|operator|string|true|none|A string indicating the operation type, which is 'SET_CONTAINS_STRING' for this component.|
|propertyName|string|false|none|A string representing the name of the property being evaluated.|
|stringToCheck|[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)|true|none|The specific string that is being checked for presence within the set.|
|value|boolean|false|none|A boolean value representing the result of the operation, indicating whether the string is contained within the set.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|SET_CONTAINS_STRING|

<h2 id="tocS_SetEqualsStrings">SetEqualsStrings</h2>
<!-- backwards compatibility -->
<a id="schemasetequalsstrings"></a>
<a id="schema_SetEqualsStrings"></a>
<a id="tocSsetequalsstrings"></a>
<a id="tocssetequalsstrings"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|none|
|operator|string|true|none|none|
|propertyName|string|false|none|none|
|stringToCheck|[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)|true|none|none|
|value|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|SET_EQUALS_STRINGS|

<h2 id="tocS_ShiftDate">ShiftDate</h2>
<!-- backwards compatibility -->
<a id="schemashiftdate"></a>
<a id="schema_ShiftDate"></a>
<a id="tocSshiftdate"></a>
<a id="tocsshiftdate"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|none|
|positionalSubExpressions|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|none|
|propertyName|string|false|none|none|
|value|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|SHIFT_DATE|

<h2 id="tocS_SoftRequiredPropertiesExtensionData">SoftRequiredPropertiesExtensionData</h2>
<!-- backwards compatibility -->
<a id="schemasoftrequiredpropertiesextensiondata"></a>
<a id="schema_SoftRequiredPropertiesExtensionData"></a>
<a id="tocSsoftrequiredpropertiesextensiondata"></a>
<a id="tocssoftrequiredpropertiesextensiondata"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isSoftRequiredProperty|boolean|true|none|A boolean indicating whether a property is considered soft-required. This means the property is recommended but not mandatory.|

<h2 id="tocS_SquareRoot">SquareRoot</h2>
<!-- backwards compatibility -->
<a id="schemasquareroot"></a>
<a id="schema_SquareRoot"></a>
<a id="tocSsquareroot"></a>
<a id="tocssquareroot"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs for the square root operation. Each input can be a constant number or a variable reference.|
|operator|string|true|none|A string that specifies the operation type, which is 'SQUARE_ROOT' by default.|
|propertyName|string|false|none|The name of the property associated with the square root operation, represented as a string.|
|value|number|false|none|The result of the square root operation, represented as a number.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|SQUARE_ROOT|

<h2 id="tocS_StandardError">StandardError</h2>
<!-- backwards compatibility -->
<a id="schemastandarderror"></a>
<a id="schema_StandardError"></a>
<a id="tocSstandarderror"></a>
<a id="tocsstandarderror"></a>

```json
null
```

Ye olde error

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|A broad classification of the error, indicating the type of issue encountered.|
|context|object|true|none|A map of additional context or metadata related to the error, which may include specific parameters or values involved in the error.|
|errors|[[ErrorDetail](#schemaerrordetail)]|true|none|An array of detailed error messages or codes that provide more granular information about the error.|
|id|string|false|none|A unique identifier for the error instance.|
|links|object|true|none|A collection of URLs or references to related resources or documentation that may help in understanding or resolving the error.|
|message|string|true|none|A human-readable message describing the error.|
|status|string|true|none|The HTTP status code associated with the error.|
|subCategory|object|false|none|A more specific classification of the error, providing additional context about the issue.|

<h2 id="tocS_StringEquals">StringEquals</h2>
<!-- backwards compatibility -->
<a id="schemastringequals"></a>
<a id="schema_StringEquals"></a>
<a id="tocSstringequals"></a>
<a id="tocsstringequals"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that are used in the operation, which can include various types of property variables and constants.|
|operator|string|true|none|A string indicating the type of operation, which defaults to 'STRING_EQUALS'.|
|propertyName|string|false|none|The name of the property whose value is being compared.|
|value|boolean|false|none|The string value to compare against the property value.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|STRING_EQUALS|

<h2 id="tocS_StringLength">StringLength</h2>
<!-- backwards compatibility -->
<a id="schemastringlength"></a>
<a id="schema_StringLength"></a>
<a id="tocSstringlength"></a>
<a id="tocsstringlength"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that can include various types of string-related operations or variables.|
|operator|string|true|none|A string indicating the operation type, which is 'STRING_LENGTH' by default.|
|propertyName|string|false|none|A string representing the name of the property being evaluated.|
|value|number|false|none|A number representing the length of the string.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|STRING_LENGTH|

<h2 id="tocS_StringPropertyVariable">StringPropertyVariable</h2>
<!-- backwards compatibility -->
<a id="schemastringpropertyvariable"></a>
<a id="schema_StringPropertyVariable"></a>
<a id="tocSstringpropertyvariable"></a>
<a id="tocsstringpropertyvariable"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|A string representing the operation to be performed on the string property. It is a required field.|
|propertyName|string|false|none|The name of the string property being referenced.|
|value|string|false|none|The string value associated with the property variable.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|STRING_PROPERTY_VARIABLE|

<h2 id="tocS_StringTargetPropertyVariable">StringTargetPropertyVariable</h2>
<!-- backwards compatibility -->
<a id="schemastringtargetpropertyvariable"></a>
<a id="schema_StringTargetPropertyVariable"></a>
<a id="tocSstringtargetpropertyvariable"></a>
<a id="tocsstringtargetpropertyvariable"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|A string representing the operation to be performed. The default value is 'LOWER_CASE'.|
|propertyName|string|false|none|A string indicating the name of the property on which the operation is performed.|
|value|string|false|none|A string representing the result of the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|STRING_TARGET_PROPERTY_VARIABLE|

<h2 id="tocS_Substring">Substring</h2>
<!-- backwards compatibility -->
<a id="schemasubstring"></a>
<a id="schema_Substring"></a>
<a id="tocSsubstring"></a>
<a id="tocssubstring"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs required for the operation, which may include various types of data or variables needed to determine the substring.|
|operator|string|true|none|A string representing the type of operation. For this component, it is likely to be 'SUBSTRING'.|
|propertyName|string|false|none|The name of the property that is being operated on or affected by the substring operation.|
|stringToCheck|[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)|true|none|The original string from which the substring will be extracted.|
|value|string|false|none|The resulting substring obtained from the operation, represented as a string.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|SUBSTRING|

<h2 id="tocS_SubtractNumbers">SubtractNumbers</h2>
<!-- backwards compatibility -->
<a id="schemasubtractnumbers"></a>
<a id="schema_SubtractNumbers"></a>
<a id="tocSsubtractnumbers"></a>
<a id="tocssubtractnumbers"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enclosedInParentheses|boolean|true|none|A boolean indicating whether the operation is enclosed in parentheses, affecting the order of operations.|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that are used in the subtraction operation. These inputs can be constants, variables, or results of other operations.|
|operator|string|true|none|A string representing the operation type, which is 'SUBTRACT' for this component. It is a required property.|
|propertyName|string|false|none|A string representing the name of the property associated with this operation.|
|value|number|false|none|A number representing the result of the subtraction operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|SUBTRACT_NUMBERS|

<h2 id="tocS_SubtractTime">SubtractTime</h2>
<!-- backwards compatibility -->
<a id="schemasubtracttime"></a>
<a id="schema_SubtractTime"></a>
<a id="tocSsubtracttime"></a>
<a id="tocssubtracttime"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs required for the time subtraction operation. These inputs can include timestamps, dates, or other relevant time-related data.|
|operator|string|true|none|A string representing the operation to be performed. For this component, it is specifically used for time subtraction.|
|propertyName|string|false|none|A string indicating the name of the property involved in the time subtraction operation.|
|stringToCheck|[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)|true|none|A string input that may be used in conjunction with the time subtraction operation, potentially for validation or comparison purposes.|
|value|number|false|none|The result of the time subtraction operation, typically represented as a timestamp or duration.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|SUBTRACT_TIME|

<h2 id="tocS_TimeBetween">TimeBetween</h2>
<!-- backwards compatibility -->
<a id="schematimebetween"></a>
<a id="schema_TimeBetween"></a>
<a id="tocStimebetween"></a>
<a id="tocstimebetween"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that are used in the time calculation, which can include various data types and operations.|
|operator|string|true|none|A string indicating the type of operation, specifically 'TIME_BETWEEN'.|
|propertyName|string|false|none|A string representing the name of the property involved in the time calculation.|
|value|number|false|none|A number representing the calculated time interval.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|TIME_BETWEEN|

<h2 id="tocS_TimeBetweenSkipWeekends">TimeBetweenSkipWeekends</h2>
<!-- backwards compatibility -->
<a id="schematimebetweenskipweekends"></a>
<a id="schema_TimeBetweenSkipWeekends"></a>
<a id="tocStimebetweenskipweekends"></a>
<a id="tocstimebetweenskipweekends"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs required for the calculation. Each input can be of various types, including constants, property variables, or other operations.|
|operator|string|true|none|A string representing the operation type, which is 'TimeBetweenSkipWeekends' by default.|
|propertyName|string|false|none|A string representing the name of the property associated with this calculation.|
|value|number|false|none|The calculated time between the specified dates, excluding weekends. The data type is not explicitly defined in the spec.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|TIME_BETWEEN_SKIP_WEEKENDS|

<h2 id="tocS_TimestampOfPropertyVariable">TimestampOfPropertyVariable</h2>
<!-- backwards compatibility -->
<a id="schematimestampofpropertyvariable"></a>
<a id="schema_TimestampOfPropertyVariable"></a>
<a id="tocStimestampofpropertyvariable"></a>
<a id="tocstimestampofpropertyvariable"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|A string representing the operation to be performed, typically involving timestamps.|
|propertyName|string|false|none|The name of the property for which the timestamp is being referenced, represented as a string.|
|value|string|false|none|The value associated with the timestamp operation, represented as a string.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|TIMESTAMP_OF_PROPERTY_VARIABLE|

<h2 id="tocS_TimestampOfTargetPropertyVariable">TimestampOfTargetPropertyVariable</h2>
<!-- backwards compatibility -->
<a id="schematimestampoftargetpropertyvariable"></a>
<a id="schema_TimestampOfTargetPropertyVariable"></a>
<a id="tocStimestampoftargetpropertyvariable"></a>
<a id="tocstimestampoftargetpropertyvariable"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operator|string|true|none|A string representing the operation type. It is required and has a default value of 'TIMESTAMP_OF_TARGET_PROPERTY'.|
|propertyName|string|false|none|A string indicating the name of the target property for which the timestamp is being captured.|
|value|string|false|none|A number representing the timestamp value.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|TIMESTAMP_OF_TARGET_PROPERTY_VARIABLE|

<h2 id="tocS_TrimLeadingChars">TrimLeadingChars</h2>
<!-- backwards compatibility -->
<a id="schematrimleadingchars"></a>
<a id="schema_TrimLeadingChars"></a>
<a id="tocStrimleadingchars"></a>
<a id="tocstrimleadingchars"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|none|
|operator|string|true|none|none|
|propertyName|string|false|none|none|
|value|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|TRIM_LEADING_CHARS|

<h2 id="tocS_TrimOuterChars">TrimOuterChars</h2>
<!-- backwards compatibility -->
<a id="schematrimouterchars"></a>
<a id="schema_TrimOuterChars"></a>
<a id="tocStrimouterchars"></a>
<a id="tocstrimouterchars"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|none|
|operator|string|true|none|none|
|propertyName|string|false|none|none|
|value|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|TRIM_OUTER_CHARS|

<h2 id="tocS_TrimTrailingChars">TrimTrailingChars</h2>
<!-- backwards compatibility -->
<a id="schematrimtrailingchars"></a>
<a id="schema_TrimTrailingChars"></a>
<a id="tocStrimtrailingchars"></a>
<a id="tocstrimtrailingchars"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|none|
|operator|string|true|none|none|
|propertyName|string|false|none|none|
|value|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|TRIM_TRAILING_CHARS|

<h2 id="tocS_UpperCase">UpperCase</h2>
<!-- backwards compatibility -->
<a id="schemauppercase"></a>
<a id="schema_UpperCase"></a>
<a id="tocSuppercase"></a>
<a id="tocsuppercase"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that can include various types such as strings, numbers, or other operations, which will be processed to produce the uppercase result.|
|operator|string|true|none|A string indicating the operation to be performed, which is 'UPPER_CASE' by default.|
|propertyName|string|false|none|A string representing the name of the property being manipulated or transformed.|
|value|string|false|none|The resulting string after the input has been converted to uppercase.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|UPPER_CASE|

<h2 id="tocS_ValidateWhen">ValidateWhen</h2>
<!-- backwards compatibility -->
<a id="schemavalidatewhen"></a>
<a id="schema_ValidateWhen"></a>
<a id="tocSvalidatewhen"></a>
<a id="tocsvalidatewhen"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkExpression|[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)|true|none|A boolean indicating whether the expression should be checked for validity before evaluation.|
|enclosedInParentheses|boolean|true|none|A boolean indicating whether the condition is enclosed in parentheses, affecting its precedence in complex expressions.|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that are evaluated by the operator. These can include various types of expressions or variables.|
|operator|string|true|none|A string representing the logical operator used in the condition, such as 'AND', 'OR', etc.|
|propertyName|string|false|none|A string representing the name of the property involved in the condition.|
|value|boolean|false|none|A boolean value indicating the result of the condition evaluation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|VALIDATE_WHEN|

<h2 id="tocS_Xor">Xor</h2>
<!-- backwards compatibility -->
<a id="schemaxor"></a>
<a id="schema_Xor"></a>
<a id="tocSxor"></a>
<a id="tocsxor"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enclosedInParentheses|boolean|true|none|A boolean indicating whether the XOR operation is enclosed in parentheses, affecting the order of evaluation.|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that can include various types of variables and operations, which are evaluated in the XOR operation.|
|operator|string|true|none|A string representing the logical operator for this component, defaulting to 'XOR'.|
|propertyName|string|false|none|A string representing the name of the property associated with this XOR operation.|
|value|boolean|false|none|A boolean indicating the result of the XOR operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|XOR|

<h2 id="tocS_Year">Year</h2>
<!-- backwards compatibility -->
<a id="schemayear"></a>
<a id="schema_Year"></a>
<a id="tocSyear"></a>
<a id="tocsyear"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ConstantBoolean](#schemaconstantboolean) \| [ConstantNumber](#schemaconstantnumber) \| [ConstantString](#schemaconstantstring) \| [BooleanPropertyVariable](#schemabooleanpropertyvariable) \| [StringPropertyVariable](#schemastringpropertyvariable) \| [NumberPropertyVariable](#schemanumberpropertyvariable) \| [TimestampOfPropertyVariable](#schematimestampofpropertyvariable) \| [BooleanTargetPropertyVariable](#schemabooleantargetpropertyvariable) \| [StringTargetPropertyVariable](#schemastringtargetpropertyvariable) \| [NumberTargetPropertyVariable](#schemanumbertargetpropertyvariable) \| [TimestampOfTargetPropertyVariable](#schematimestampoftargetpropertyvariable) \| [AddNumbers](#schemaaddnumbers) \| [SubtractNumbers](#schemasubtractnumbers) \| [MultiplyNumbers](#schemamultiplynumbers) \| [DivideNumbers](#schemadividenumbers) \| [RoundDownNumbers](#schemarounddownnumbers) \| [RoundUpNumbers](#schemaroundupnumbers) \| [RoundNearestNumbers](#schemaroundnearestnumbers) \| [UpperCase](#schemauppercase) \| [LowerCase](#schemalowercase) \| [ConcatStrings](#schemaconcatstrings) \| [Contains](#schemacontains) \| [BeginsWith](#schemabeginswith) \| [NumberToString](#schemanumbertostring) \| [ParseNumber](#schemaparsenumber) \| [FetchExchangeRate](#schemafetchexchangerate) \| [FetchCurrencyDecimalPlaces](#schemafetchcurrencydecimalplaces) \| [FetchSingleCurrencyPortalCurrency](#schemafetchsinglecurrencyportalcurrency) \| [FetchPortalHomeCurrency](#schemafetchportalhomecurrency) \| [IsPortalEnabledCurrency](#schemaisportalenabledcurrency) \| [IsPortalMulticurrencyEnabled](#schemaisportalmulticurrencyenabled) \| [DatedExchangeRate](#schemadatedexchangerate) \| [PipelineProbability](#schemapipelineprobability) \| [MaxNumbers](#schemamaxnumbers) \| [MinNumbers](#schemaminnumbers) \| [LessThan](#schemalessthan) \| [LessThanOrEqual](#schemalessthanorequal) \| [MoreThan](#schemamorethan) \| [MoreThanOrEqual](#schemamorethanorequal) \| [NumberEquals](#schemanumberequals) \| [StringEquals](#schemastringequals) \| [IsPipelineStageClosed](#schemaispipelinestageclosed) \| [Not](#schemanot) \| [Date](#schemadate) \| [Month](#schemamonth) \| [Year](#schemayear) \| [Now](#schemanow) \| [TimeBetween](#schematimebetween) \| [TimeBetweenSkipWeekends](#schematimebetweenskipweekends) \| [PeriodToMonths](#schemaperiodtomonths) \| [PeriodToWeeks](#schemaperiodtoweeks) \| [And](#schemaand) \| [Or](#schemaor) \| [Xor](#schemaxor) \| [IfString](#schemaifstring) \| [IfNumber](#schemaifnumber) \| [IfBoolean](#schemaifboolean) \| [IsPresent](#schemaispresent) \| [IfChainString](#schemaifchainstring) \| [IfChainNumber](#schemaifchainnumber) \| [IfChainBoolean](#schemaifchainboolean) \| [HasEmailReply](#schemahasemailreply) \| [HasPlainTextEmailReply](#schemahasplaintextemailreply) \| [ExtractMostRecentEmailReplyHtml](#schemaextractmostrecentemailreplyhtml) \| [ExtractMostRecentEmailReplyText](#schemaextractmostrecentemailreplytext) \| [ExtractMostRecentPlainTextEmailReply](#schemaextractmostrecentplaintextemailreply) \| [SetContainsString](#schemasetcontainsstring) \| [SetContainsAnyString](#schemasetcontainsanystring) \| [SetEqualsStrings](#schemasetequalsstrings) \| [IsEngagementType](#schemaisengagementtype) \| [FormatFullName](#schemaformatfullname) \| [FormatPhoneNumber](#schemaformatphonenumber) \| [FormatSearchablePhoneNumber](#schemaformatsearchablephonenumber) \| [AbsoluteValue](#schemaabsolutevalue) \| [SquareRoot](#schemasquareroot) \| [Power](#schemapower) \| [Substring](#schemasubstring) \| [Euler](#schemaeuler) \| [StringLength](#schemastringlength) \| [IsBlank](#schemaisblank) \| [AddTime](#schemaaddtime) \| [SubtractTime](#schemasubtracttime) \| [RegexMatches](#schemaregexmatches) \| [IsValidIsoPeriod](#schemaisvalidisoperiod) \| [IsMonthBasedIsoPeriod](#schemaismonthbasedisoperiod) \| [IsDayBasedIsoPeriod](#schemaisdaybasedisoperiod) \| [IsMultipleOf](#schemaismultipleof) \| [ValidateWhen](#schemavalidatewhen) \| [CoalesceString](#schemacoalescestring) \| [CoalesceNumber](#schemacoalescenumber) \| [CoalesceBoolean](#schemacoalesceboolean) \| [GetStartTime](#schemagetstarttime) \| [ShiftDate](#schemashiftdate) \| [PortalTimezone](#schemaportaltimezone) \| [AnyCharsMatch](#schemaanycharsmatch) \| [AllCharsMatch](#schemaallcharsmatch) \| [RemoveMatchingChars](#schemaremovematchingchars) \| [KeepMatchingChars](#schemakeepmatchingchars) \| [TrimOuterChars](#schematrimouterchars) \| [TrimLeadingChars](#schematrimleadingchars) \| [TrimTrailingChars](#schematrimtrailingchars) \| [ReplaceMatchingChars](#schemareplacematchingchars) \| [CollapseMatchingChars](#schemacollapsematchingchars) \| [CountMatchingChars](#schemacountmatchingchars)]|false|none|An array of inputs that can include various types of property variables and operations, used for year-related calculations.|
|operator|string|true|none|A string that specifies the operation type, with a default value of 'YEAR'.|
|propertyName|string|false|none|A string representing the name of the property associated with the year.|
|value|number|false|none|A number representing the year value.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|YEAR|
