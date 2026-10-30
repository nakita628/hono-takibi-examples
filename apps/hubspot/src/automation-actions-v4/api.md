<h1 id="automation-actions-v4">Automation Actions V4 v2026-09</h1>

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
|automation||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="automation-actions-v4-callbacks">Callbacks</h1>

## Complete a batch of callbacks

<a id="opIdpost-/automation/actions/callbacks/2026-09/complete_completeBatch"></a>

> Code samples

```bash
curl https://api.hubapi.com/automation/actions/callbacks/2026-09/complete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /automation/actions/callbacks/2026-09/complete`

Complete a batch of blocked action executions.

> Body parameter

```json
null
```

<h3 id="complete-a-batch-of-callbacks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchInputCallbackCompletionBatchRequest](#schemabatchinputcallbackcompletionbatchrequest)|true|none|
|» inputs|body|[[CallbackCompletionBatchRequest](#schemacallbackcompletionbatchrequest)]|true|An array of CallbackCompletionBatchRequest objects, each representing a single callback completion request. This property is required.|

> Example responses

> default Response

```json
null
```

<h3 id="complete-a-batch-of-callbacks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: automation )
</aside>

## Completes a callback

<a id="opIdpost-/automation/actions/callbacks/2026-09/{callbackId}/complete_complete"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/automation/actions/callbacks/2026-09/{callbackId}/complete' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /automation/actions/callbacks/2026-09/{callbackId}/complete`

Complete a specific blocked action execution by ID.

> Body parameter

```json
null
```

<h3 id="completes-a-callback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|callbackId|path|string|true|The unique identifier of the callback to complete.|
|body|body|[CallbackCompletionRequest](#schemacallbackcompletionrequest)|true|none|
|» failureReasonType|body|string|false|Indicates the reason for the failure of a callback completion.|
|» outputFields|body|object|true|Contains the output fields associated with the callback, with each field represented as a key-value pair.|
|» » **additionalProperties**|body|string|false|none|
|» typedOutputs|body|object|true|Holds the typed outputs related to the callback, structured as an object.|

> Example responses

> default Response

```json
null
```

<h3 id="completes-a-callback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: automation )
</aside>

<h1 id="automation-actions-v4-definitions">Definitions</h1>

## Retrieve custom action definitions

<a id="opIdget-/automation/actions/2026-09/{appId}_getPage"></a>

> Code samples

```bash
curl "https://api.hubapi.com/automation/actions/2026-09/{appId}?hapikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /automation/actions/2026-09/{appId}`

Retrieve custom workflow action definitions by app ID.

<h3 id="retrieve-custom-action-definitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the application to retrieve extension definitions for.|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
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

<h3 id="retrieve-custom-action-definitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponsePublicActionDefinitionForwardPaging](#schemacollectionresponsepublicactiondefinitionforwardpaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Create a new custom action definition

<a id="opIdpost-/automation/actions/2026-09/{appId}_create"></a>

> Code samples

```bash
curl "https://api.hubapi.com/automation/actions/2026-09/{appId}?hapikey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /automation/actions/2026-09/{appId}`

Create a new custom workflow action.

> Body parameter

```json
null
```

<h3 id="create-a-new-custom-action-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app for which the extension definition is being created.|
|body|body|[PublicActionDefinitionEgg](#schemapublicactiondefinitionegg)|true|none|
|» actionUrl|body|string|true|The URL endpoint where the action is executed.|
|» archivedAt|body|integer(int64)|false|The timestamp indicating when the action was archived.|
|» executionRules|body|[[PublicExecutionTranslationRule](#schemapublicexecutiontranslationrule)]|false|An array of PublicExecutionTranslationRule objects that define rules for executing the action.|
|» functions|body|[[PublicActionFunction](#schemapublicactionfunction)]|true|An array of PublicActionFunction objects that define the functions associated with the action, including their type and source.|
|» inputFieldDependencies|body|[[PublicSingleFieldDependency](#schemapublicsinglefielddependency) \| [PublicConditionalSingleFieldDependency](#schemapublicconditionalsinglefielddependency)]|false|An array that can contain either PublicSingleFieldDependency or PublicConditionalSingleFieldDependency objects, defining dependencies between input fields.|
|» » *oneOf*|body|[PublicSingleFieldDependency](#schemapublicsinglefielddependency)|false|none|
|» » *oneOf*|body|[PublicConditionalSingleFieldDependency](#schemapublicconditionalsinglefielddependency)|false|none|
|» inputFields|body|[[PublicInputFieldDefinition](#schemapublicinputfielddefinition)]|true|An array of PublicInputFieldDefinition objects defining the input fields required for the action.|
|» labels|body|object|true|Holds various labels associated with the action, including names and descriptions.|
|» » **additionalProperties**|body|[PublicActionLabels](#schemapublicactionlabels)|false|none|
|» objectRequestOptions|body|[PublicObjectRequestOptions](#schemapublicobjectrequestoptions)|false|none|
|» objectTypes|body|[string]|true|An array of strings representing the types of objects associated with the action.|
|» outputFields|body|[[OutputFieldDefinition](#schemaoutputfielddefinition)]|false|An array of OutputFieldDefinition objects specifying the output fields of the action.|
|» published|body|boolean|true|Indicates whether the action is published and available for use.|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-a-new-custom-action-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[PublicActionDefinition](#schemapublicactiondefinition)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Retrieve a custom action definition

<a id="opIdget-/automation/actions/2026-09/{appId}/{definitionId}_getById"></a>

> Code samples

```bash
curl "https://api.hubapi.com/automation/actions/2026-09/{appId}/{definitionId}?hapikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /automation/actions/2026-09/{appId}/{definitionId}`

Retrieve a custom workflow action definition by ID.

<h3 id="retrieve-a-custom-action-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app containing the extension definition.|
|definitionId|path|string|true|The unique identifier of the extension definition to retrieve.|
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

<h3 id="retrieve-a-custom-action-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicActionDefinition](#schemapublicactiondefinition)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Delete an action definition

<a id="opIddelete-/automation/actions/2026-09/{appId}/{definitionId}_archive"></a>

> Code samples

```bash
curl "https://api.hubapi.com/automation/actions/2026-09/{appId}/{definitionId}?hapikey=${API_KEY}" \
  -X DELETE
```

`DELETE /automation/actions/2026-09/{appId}/{definitionId}`

Delete an action definition by ID.

<h3 id="delete-an-action-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app associated with the extension definition.|
|definitionId|path|string|true|The unique identifier of the extension definition to archive.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-an-action-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Update an existing action definition

<a id="opIdpatch-/automation/actions/2026-09/{appId}/{definitionId}_update"></a>

> Code samples

```bash
curl "https://api.hubapi.com/automation/actions/2026-09/{appId}/{definitionId}?hapikey=${API_KEY}" \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`PATCH /automation/actions/2026-09/{appId}/{definitionId}`

Update an existing action definition by ID.

> Body parameter

```json
null
```

<h3 id="update-an-existing-action-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app associated with the extension definition.|
|definitionId|path|string|true|The unique identifier of the extension definition to update.|
|body|body|[PublicActionDefinitionPatch](#schemapublicactiondefinitionpatch)|true|none|
|» actionUrl|body|string|false|The URL endpoint where the action is executed.|
|» executionRules|body|[[PublicExecutionTranslationRule](#schemapublicexecutiontranslationrule)]|false|An array of execution rules that define the conditions under which the action executes. Each item is a PublicExecutionTranslationRule object.|
|» inputFieldDependencies|body|[[PublicSingleFieldDependency](#schemapublicsinglefielddependency) \| [PublicConditionalSingleFieldDependency](#schemapublicconditionalsinglefielddependency)]|false|An array of dependencies between input fields. Each item can be a PublicSingleFieldDependency or a PublicConditionalSingleFieldDependency.|
|» » *oneOf*|body|[PublicSingleFieldDependency](#schemapublicsinglefielddependency)|false|none|
|» » *oneOf*|body|[PublicConditionalSingleFieldDependency](#schemapublicconditionalsinglefielddependency)|false|none|
|» inputFields|body|[[PublicInputFieldDefinition](#schemapublicinputfielddefinition)]|false|An array of input field definitions required for the action. Each item is a PublicInputFieldDefinition object.|
|» labels|body|object|false|Contains labels for the action, including names and descriptions.|
|» » **additionalProperties**|body|[PublicActionLabels](#schemapublicactionlabels)|false|none|
|» objectRequestOptions|body|[PublicObjectRequestOptions](#schemapublicobjectrequestoptions)|false|none|
|» objectTypes|body|[string]|false|An array of strings representing the types of objects associated with the action.|
|» outputFields|body|[[OutputFieldDefinition](#schemaoutputfielddefinition)]|false|An array of output field definitions that the action will produce. Each item is an OutputFieldDefinition object.|
|» published|body|boolean|false|Indicates whether the action is published and available for use.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-an-existing-action-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicActionDefinition](#schemapublicactiondefinition)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Retrieve the object requirement status for a custom action definition.

<a id="opIdget-/automation/actions/2026-09/{appId}/{definitionId}/requires-object_/automation/v4/actions/{appId}/{definitionId}/requires-object"></a>

> Code samples

```bash
curl "https://api.hubapi.com/automation/actions/2026-09/{appId}/{definitionId}/requires-object?hapikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /automation/actions/2026-09/{appId}/{definitionId}/requires-object`

Retrieve whether a custom action definition requires an object.

<h3 id="retrieve-the-object-requirement-status-for-a-custom-action-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app associated with the extension definition.|
|definitionId|path|string|true|The unique identifier of the extension definition to check.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-the-object-requirement-status-for-a-custom-action-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicActionDefinitionRequiresObjectResponse](#schemapublicactiondefinitionrequiresobjectresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Set the object requirement for a custom action definition.

<a id="opIdpost-/automation/actions/2026-09/{appId}/{definitionId}/requires-object_/automation/v4/actions/{appId}/{definitionId}/requires-object"></a>

> Code samples

```bash
curl "https://api.hubapi.com/automation/actions/2026-09/{appId}/{definitionId}/requires-object?hapikey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d 'null'
```

`POST /automation/actions/2026-09/{appId}/{definitionId}/requires-object`

Set whether a custom action definition requires an object.

> Body parameter

```json
null
```

<h3 id="set-the-object-requirement-for-a-custom-action-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app associated with the extension definition.|
|definitionId|path|string|true|The unique identifier of the extension definition for which the requirement is being set.|
|body|body|[PublicActionDefinitionRequiresObjectRequest](#schemapublicactiondefinitionrequiresobjectrequest)|true|none|
|» requiresObject|body|boolean|true|Indicates whether a custom action definition requires an associated object.|

> Example responses

> default Response

```json
null
```

<h3 id="set-the-object-requirement-for-a-custom-action-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

<h1 id="automation-actions-v4-functions">Functions</h1>

## Retrieve functions for a given definition

<a id="opIdget-/automation/actions/2026-09/{appId}/{definitionId}/functions_getPage"></a>

> Code samples

```bash
curl "https://api.hubapi.com/automation/actions/2026-09/{appId}/{definitionId}/functions?hapikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /automation/actions/2026-09/{appId}/{definitionId}/functions`

Retrieve all functions included in a definition.

<h3 id="retrieve-functions-for-a-given-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app associated with the action definition.|
|definitionId|path|string|true|The unique identifier of the action definition for which functions are being retrieved.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-functions-for-a-given-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponsePublicActionFunctionIdentifierNoPaging](#schemacollectionresponsepublicactionfunctionidentifiernopaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Retrieve functions by a type for a given definition

<a id="opIdget-/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}_getByFunctionType"></a>

> Code samples

```bash
curl "https://api.hubapi.com/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}?hapikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}`

Retrieve functions of a specific type for a given definition.

<h3 id="retrieve-functions-by-a-type-for-a-given-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app associated with the automation action definition.|
|definitionId|path|string|true|The unique identifier of the automation action definition for which functions are being retrieved.|
|functionType|path|string|true|The type of function to retrieve. Valid values are PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS, POST_FETCH_OPTIONS, and POST_ACTION_EXECUTION.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|functionType|POST_ACTION_EXECUTION|
|functionType|POST_FETCH_OPTIONS|
|functionType|PRE_ACTION_EXECUTION|
|functionType|PRE_FETCH_OPTIONS|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-functions-by-a-type-for-a-given-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicActionFunction](#schemapublicactionfunction)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Insert a function for a definition

<a id="opIdput-/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}_createOrReplaceByFunctionType"></a>

> Code samples

```bash
curl "https://api.hubapi.com/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}?hapikey=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: text/plain' \
  -H 'Accept: application/json'
```

`PUT /automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}`

Add a function for a given definition.

> Body parameter

```json
null
```

<h3 id="insert-a-function-for-a-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app associated with the automation action.|
|definitionId|path|string|true|The unique identifier of the definition to which the function will be added.|
|functionType|path|string|true|The type of function to insert. Valid values are PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS, POST_FETCH_OPTIONS, and POST_ACTION_EXECUTION.|
|body|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|functionType|POST_ACTION_EXECUTION|
|functionType|POST_FETCH_OPTIONS|
|functionType|PRE_ACTION_EXECUTION|
|functionType|PRE_FETCH_OPTIONS|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="insert-a-function-for-a-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicActionFunctionIdentifier](#schemapublicactionfunctionidentifier)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Delete a function for a definition

<a id="opIddelete-/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}_archiveByFunctionType"></a>

> Code samples

```bash
curl "https://api.hubapi.com/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}?hapikey=${API_KEY}" \
  -X DELETE
```

`DELETE /automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}`

Delete a function within a given definition.

<h3 id="delete-a-function-for-a-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app associated with the automation action.|
|definitionId|path|string|true|The unique identifier of the automation action definition.|
|functionType|path|string|true|The type of function to delete. Valid values are PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS, POST_FETCH_OPTIONS, POST_ACTION_EXECUTION.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|functionType|POST_ACTION_EXECUTION|
|functionType|POST_FETCH_OPTIONS|
|functionType|PRE_ACTION_EXECUTION|
|functionType|PRE_FETCH_OPTIONS|

> Example responses

> default Response

```json
null
```

<h3 id="delete-a-function-for-a-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Retrieve a function from a given definition

<a id="opIdget-/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}/{functionId}_getById"></a>

> Code samples

```bash
curl "https://api.hubapi.com/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}/{functionId}?hapikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}/{functionId}`

Retrieve a specific function from a given definition.

<h3 id="retrieve-a-function-from-a-given-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app associated with the function.|
|definitionId|path|string|true|The unique identifier of the definition to which the function belongs.|
|functionId|path|string|true|The unique identifier of the function to retrieve.|
|functionType|path|string|true|The type of function to retrieve. Valid values are PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS, POST_FETCH_OPTIONS, and POST_ACTION_EXECUTION.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|functionType|POST_ACTION_EXECUTION|
|functionType|POST_FETCH_OPTIONS|
|functionType|PRE_ACTION_EXECUTION|
|functionType|PRE_FETCH_OPTIONS|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-a-function-from-a-given-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicActionFunction](#schemapublicactionfunction)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Update a function for a definition

<a id="opIdput-/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}/{functionId}_createOrReplace"></a>

> Code samples

```bash
curl "https://api.hubapi.com/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}/{functionId}?hapikey=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: text/plain' \
  -H 'Accept: application/json'
```

`PUT /automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}/{functionId}`

Update a function for a given definition by ID.

> Body parameter

```json
null
```

<h3 id="update-a-function-for-a-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app associated with the definition.|
|definitionId|path|string|true|The unique identifier of the definition to which the function belongs.|
|functionId|path|string|true|The unique identifier of the function to insert.|
|functionType|path|string|true|The type of function to insert, indicating when it is executed. Valid values include PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS, POST_FETCH_OPTIONS, and POST_ACTION_EXECUTION.|
|body|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|functionType|POST_ACTION_EXECUTION|
|functionType|POST_FETCH_OPTIONS|
|functionType|PRE_ACTION_EXECUTION|
|functionType|PRE_FETCH_OPTIONS|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-a-function-for-a-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicActionFunctionIdentifier](#schemapublicactionfunctionidentifier)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Archive a function for a definition

<a id="opIddelete-/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}/{functionId}_archive"></a>

> Code samples

```bash
curl "https://api.hubapi.com/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}/{functionId}?hapikey=${API_KEY}" \
  -X DELETE
```

`DELETE /automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}/{functionId}`

Archive a function for a specific definition.

<h3 id="archive-a-function-for-a-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app that contains the action definition.|
|definitionId|path|string|true|The unique identifier of the action definition to which the function belongs.|
|functionId|path|string|true|The unique identifier of the function to delete.|
|functionType|path|string|true|The type of the function to delete. Valid values are PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS, POST_FETCH_OPTIONS, and POST_ACTION_EXECUTION.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|functionType|POST_ACTION_EXECUTION|
|functionType|POST_FETCH_OPTIONS|
|functionType|PRE_ACTION_EXECUTION|
|functionType|PRE_FETCH_OPTIONS|

> Example responses

> default Response

```json
null
```

<h3 id="archive-a-function-for-a-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

<h1 id="automation-actions-v4-revisions">Revisions</h1>

## Retrieve revisions for a given definition

<a id="opIdget-/automation/actions/2026-09/{appId}/{definitionId}/revisions_getPage"></a>

> Code samples

```bash
curl "https://api.hubapi.com/automation/actions/2026-09/{appId}/{definitionId}/revisions?hapikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /automation/actions/2026-09/{appId}/{definitionId}/revisions`

Retrieve the versions of a definition by ID.

<h3 id="retrieve-revisions-for-a-given-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app associated with the action definition.|
|definitionId|path|string|true|The unique identifier of the action definition for which revisions are being retrieved.|
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

<h3 id="retrieve-revisions-for-a-given-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponsePublicActionRevisionForwardPaging](#schemacollectionresponsepublicactionrevisionforwardpaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Retrieve a specific revision of a definition

<a id="opIdget-/automation/actions/2026-09/{appId}/{definitionId}/revisions/{revisionId}_getById"></a>

> Code samples

```bash
curl "https://api.hubapi.com/automation/actions/2026-09/{appId}/{definitionId}/revisions/{revisionId}?hapikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /automation/actions/2026-09/{appId}/{definitionId}/revisions/{revisionId}`

Retrieve a specific revision of a definition by revision ID.

<h3 id="retrieve-a-specific-revision-of-a-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app associated with the action definition.|
|definitionId|path|string|true|The unique identifier of the action definition for which the revision is being retrieved.|
|revisionId|path|string|true|The unique identifier of the specific revision to retrieve.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-a-specific-revision-of-a-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicActionRevision](#schemapublicactionrevision)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

# Schemas

<h2 id="tocS_ArrayFieldSchema">ArrayFieldSchema</h2>
<!-- backwards compatibility -->
<a id="schemaarrayfieldschema"></a>
<a id="schema_ArrayFieldSchema"></a>
<a id="tocSarrayfieldschema"></a>
<a id="tocsarrayfieldschema"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[IntegerFieldSchema](#schemaintegerfieldschema) \| [LongFieldSchema](#schemalongfieldschema) \| [DoubleFieldSchema](#schemadoublefieldschema) \| [StringFieldSchema](#schemastringfieldschema) \| [BooleanFieldSchema](#schemabooleanfieldschema) \| [ArrayFieldSchema](#schemaarrayfieldschema) \| [ObjectFieldSchema](#schemaobjectfieldschema) \| [UnknownFieldSchema](#schemaunknownfieldschema)|true|none|Defines the type of elements contained within the array, which can be an integer, long, double, string, boolean, another array, or an object.|
|type|string|true|none|Specifies that the field is of type 'ARRAY'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ARRAY|

<h2 id="tocS_BatchInputCallbackCompletionBatchRequest">BatchInputCallbackCompletionBatchRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputcallbackcompletionbatchrequest"></a>
<a id="schema_BatchInputCallbackCompletionBatchRequest"></a>
<a id="tocSbatchinputcallbackcompletionbatchrequest"></a>
<a id="tocsbatchinputcallbackcompletionbatchrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[CallbackCompletionBatchRequest](#schemacallbackcompletionbatchrequest)]|true|none|An array of CallbackCompletionBatchRequest objects, each representing a single callback completion request. This property is required.|

<h2 id="tocS_BooleanFieldSchema">BooleanFieldSchema</h2>
<!-- backwards compatibility -->
<a id="schemabooleanfieldschema"></a>
<a id="schema_BooleanFieldSchema"></a>
<a id="tocSbooleanfieldschema"></a>
<a id="tocsbooleanfieldschema"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|Specifies the field type as BOOLEAN, indicating that the field can hold a true or false value.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|BOOLEAN|

<h2 id="tocS_CallbackCompletionBatchRequest">CallbackCompletionBatchRequest</h2>
<!-- backwards compatibility -->
<a id="schemacallbackcompletionbatchrequest"></a>
<a id="schema_CallbackCompletionBatchRequest"></a>
<a id="tocScallbackcompletionbatchrequest"></a>
<a id="tocscallbackcompletionbatchrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callbackId|string|true|none|The unique identifier for the callback.|
|failureReasonType|string|false|none|Specifies the type of failure reason for the callback completion.|
|outputFields|object|true|none|Holds the output fields for the callback completion.|
|typedOutputs|object|true|none|Contains the typed outputs for the callback completion.|

<h2 id="tocS_CallbackCompletionRequest">CallbackCompletionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacallbackcompletionrequest"></a>
<a id="schema_CallbackCompletionRequest"></a>
<a id="tocScallbackcompletionrequest"></a>
<a id="tocscallbackcompletionrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failureReasonType|string|false|none|Indicates the reason for the failure of a callback completion.|
|outputFields|object|true|none|Contains the output fields associated with the callback, with each field represented as a key-value pair.|
|typedOutputs|object|true|none|Holds the typed outputs related to the callback, structured as an object.|

<h2 id="tocS_CollectionResponsePublicActionDefinitionForwardPaging">CollectionResponsePublicActionDefinitionForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsepublicactiondefinitionforwardpaging"></a>
<a id="schema_CollectionResponsePublicActionDefinitionForwardPaging"></a>
<a id="tocScollectionresponsepublicactiondefinitionforwardpaging"></a>
<a id="tocscollectionresponsepublicactiondefinitionforwardpaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[ForwardPaging](#schemaforwardpaging)|false|none|Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.|
|results|[[PublicActionDefinition](#schemapublicactiondefinition)]|true|none|An array of public action definitions, each represented by a PublicActionDefinition object.|

<h2 id="tocS_CollectionResponsePublicActionFunctionIdentifierNoPaging">CollectionResponsePublicActionFunctionIdentifierNoPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsepublicactionfunctionidentifiernopaging"></a>
<a id="schema_CollectionResponsePublicActionFunctionIdentifierNoPaging"></a>
<a id="tocScollectionresponsepublicactionfunctionidentifiernopaging"></a>
<a id="tocscollectionresponsepublicactionfunctionidentifiernopaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[PublicActionFunctionIdentifier](#schemapublicactionfunctionidentifier)]|true|none|An array of PublicActionFunctionIdentifier objects, each representing a specific function associated with an automation action definition.|

<h2 id="tocS_CollectionResponsePublicActionRevisionForwardPaging">CollectionResponsePublicActionRevisionForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsepublicactionrevisionforwardpaging"></a>
<a id="schema_CollectionResponsePublicActionRevisionForwardPaging"></a>
<a id="tocScollectionresponsepublicactionrevisionforwardpaging"></a>
<a id="tocscollectionresponsepublicactionrevisionforwardpaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[ForwardPaging](#schemaforwardpaging)|false|none|Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.|
|results|[[PublicActionRevision](#schemapublicactionrevision)]|true|none|An array of PublicActionRevision objects, each representing a specific revision of a public action definition.|

<h2 id="tocS_DoubleFieldSchema">DoubleFieldSchema</h2>
<!-- backwards compatibility -->
<a id="schemadoublefieldschema"></a>
<a id="schema_DoubleFieldSchema"></a>
<a id="tocSdoublefieldschema"></a>
<a id="tocsdoublefieldschema"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maximum|number|false|none|The maximum allowable value for the double field.|
|minimum|number|false|none|The minimum allowable value for the double field.|
|type|string|true|none|Indicates the field type as DOUBLE.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|DOUBLE|

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

<h2 id="tocS_FieldTypeDefinition">FieldTypeDefinition</h2>
<!-- backwards compatibility -->
<a id="schemafieldtypedefinition"></a>
<a id="schema_FieldTypeDefinition"></a>
<a id="tocSfieldtypedefinition"></a>
<a id="tocsfieldtypedefinition"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A detailed explanation of the field's purpose and usage.|
|externalOptions|boolean|true|none|Indicates whether the field's options are sourced externally.|
|externalOptionsReferenceType|string|false|none|Specifies the type of external reference for options.|
|fieldType|string|false|none|Describes the field's type in the UI, with accepted values like booleancheckbox, calculation_equation, checkbox, date, file, html, number, phonenumber, radio, select, text, textarea, unknown.|
|helpText|string|false|none|Additional information or guidance about the field.|
|label|string|false|none|The user-friendly label for the field.|
|name|string|true|none|The unique identifier for the field.|
|options|[[Option](#schemaoption)]|true|none|An array of options available for the field, each represented by an Option object.|
|optionsUrl|string|false|none|A URL that provides options for the field.|
|referencedObjectType|string|false|none|Indicates the type of object that the field references, with accepted values like OWNER.|
|schema|[IntegerFieldSchema](#schemaintegerfieldschema) \| [LongFieldSchema](#schemalongfieldschema) \| [DoubleFieldSchema](#schemadoublefieldschema) \| [StringFieldSchema](#schemastringfieldschema) \| [BooleanFieldSchema](#schemabooleanfieldschema) \| [ArrayFieldSchema](#schemaarrayfieldschema) \| [ObjectFieldSchema](#schemaobjectfieldschema) \| [UnknownFieldSchema](#schemaunknownfieldschema)|true|none|Defines the structure and constraints of the field.|
|type|string|true|none|Specifies the data type of the field, with accepted values like bool, date, datetime, enumeration, json, number, object_coordinates, phone_number, string.|
|useChirp|boolean|true|none|Specifies whether the field uses the Chirp feature.|

#### Enumerated Values

|Property|Value|
|---|---|
|fieldType|booleancheckbox|
|fieldType|calculation_equation|
|fieldType|calculation_read_time|
|fieldType|calculation_rollup|
|fieldType|calculation_score|
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
|fieldType|unknown|
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

<h2 id="tocS_IntegerFieldSchema">IntegerFieldSchema</h2>
<!-- backwards compatibility -->
<a id="schemaintegerfieldschema"></a>
<a id="schema_IntegerFieldSchema"></a>
<a id="tocSintegerfieldschema"></a>
<a id="tocsintegerfieldschema"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maximum|integer(int32)|false|none|The maximum value allowed for the integer field.|
|minimum|integer(int32)|false|none|The minimum value allowed for the integer field.|
|type|string|true|none|The type of the field, which is set to INTEGER.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|INTEGER|

<h2 id="tocS_LongFieldSchema">LongFieldSchema</h2>
<!-- backwards compatibility -->
<a id="schemalongfieldschema"></a>
<a id="schema_LongFieldSchema"></a>
<a id="tocSlongfieldschema"></a>
<a id="tocslongfieldschema"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maximum|integer(int64)|false|none|The maximum value allowed for the long field.|
|minimum|integer(int64)|false|none|The minimum value allowed for the long field.|
|type|string|true|none|The type of the field, which is LONG by default.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|LONG|

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
|after|string|true|none|A string token that indicates the position after the last item on the current page. This token is used to fetch the next page of results.|
|link|string|false|none|A string URL that provides a direct link to the next page of results.|

<h2 id="tocS_ObjectFieldSchema">ObjectFieldSchema</h2>
<!-- backwards compatibility -->
<a id="schemaobjectfieldschema"></a>
<a id="schema_ObjectFieldSchema"></a>
<a id="tocSobjectfieldschema"></a>
<a id="tocsobjectfieldschema"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|properties|object|true|none|Contains the properties of the object.|
|type|string|true|none|Specifies the type of the field, which is 'OBJECT' by default.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|OBJECT|

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
|description|string|true|none|A string providing additional details about the option.|
|displayOrder|integer(int32)|true|none|An integer indicating the order in which the option should be displayed relative to other options.|
|doubleData|number|true|none|A numerical value associated with the option.|
|hidden|boolean|true|none|A boolean indicating whether the option is hidden from the user interface.|
|label|string|true|none|The display name of the option, shown to users. It is a string.|
|readOnly|boolean|true|none|A boolean indicating whether the option is read-only and cannot be modified.|
|value|string|true|none|The internal value of the option, used in data processing. It is a string.|

<h2 id="tocS_OutputFieldDefinition">OutputFieldDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaoutputfielddefinition"></a>
<a id="schema_OutputFieldDefinition"></a>
<a id="tocSoutputfielddefinition"></a>
<a id="tocsoutputfielddefinition"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|typeDefinition|[FieldTypeDefinition](#schemafieldtypedefinition)|true|none|none|

<h2 id="tocS_PublicActionDefinition">PublicActionDefinition</h2>
<!-- backwards compatibility -->
<a id="schemapublicactiondefinition"></a>
<a id="schema_PublicActionDefinition"></a>
<a id="tocSpublicactiondefinition"></a>
<a id="tocspublicactiondefinition"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionUrl|string|true|none|The URL endpoint where the action is executed. It is a string.|
|archivedAt|integer(int64)|false|none|A Unix timestamp in milliseconds representing when the action was archived. It is an integer.|
|executionRules|[[PublicExecutionTranslationRule](#schemapublicexecutiontranslationrule)]|false|none|An array of execution translation rules for the action, where each item is a PublicExecutionTranslationRule.|
|functions|[[PublicActionFunctionIdentifier](#schemapublicactionfunctionidentifier)]|true|none|An array of function identifiers associated with the action, where each item is a PublicActionFunctionIdentifier.|
|id|string|true|none|The unique identifier for the action definition. It is a string.|
|inputFieldDependencies|[[PublicSingleFieldDependency](#schemapublicsinglefielddependency) \| [PublicConditionalSingleFieldDependency](#schemapublicconditionalsinglefielddependency)]|false|none|An array of dependencies between input fields, where each item can be a PublicSingleFieldDependency or PublicConditionalSingleFieldDependency.|
|inputFields|[[PublicInputFieldDefinition](#schemapublicinputfielddefinition)]|true|none|An array of input field definitions required for the action. Each item is a PublicInputFieldDefinition object.|
|labels|object|true|none|An object containing labels for the action, with each property being a PublicActionLabels object.|
|objectRequestOptions|[PublicObjectRequestOptions](#schemapublicobjectrequestoptions)|false|none|none|
|objectTypes|[string]|true|none|An array of strings representing the types of objects associated with the action.|
|outputFields|[[OutputFieldDefinition](#schemaoutputfielddefinition)]|false|none|An array of output field definitions produced by the action. Each item is an OutputFieldDefinition object.|
|published|boolean|true|none|A boolean indicating whether the action is published and available for use.|
|revisionId|string|true|none|The unique identifier for the current revision of the action definition. It is a string.|

<h2 id="tocS_PublicActionDefinitionEgg">PublicActionDefinitionEgg</h2>
<!-- backwards compatibility -->
<a id="schemapublicactiondefinitionegg"></a>
<a id="schema_PublicActionDefinitionEgg"></a>
<a id="tocSpublicactiondefinitionegg"></a>
<a id="tocspublicactiondefinitionegg"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionUrl|string|true|none|The URL endpoint where the action is executed.|
|archivedAt|integer(int64)|false|none|The timestamp indicating when the action was archived.|
|executionRules|[[PublicExecutionTranslationRule](#schemapublicexecutiontranslationrule)]|false|none|An array of PublicExecutionTranslationRule objects that define rules for executing the action.|
|functions|[[PublicActionFunction](#schemapublicactionfunction)]|true|none|An array of PublicActionFunction objects that define the functions associated with the action, including their type and source.|
|inputFieldDependencies|[[PublicSingleFieldDependency](#schemapublicsinglefielddependency) \| [PublicConditionalSingleFieldDependency](#schemapublicconditionalsinglefielddependency)]|false|none|An array that can contain either PublicSingleFieldDependency or PublicConditionalSingleFieldDependency objects, defining dependencies between input fields.|
|inputFields|[[PublicInputFieldDefinition](#schemapublicinputfielddefinition)]|true|none|An array of PublicInputFieldDefinition objects defining the input fields required for the action.|
|labels|object|true|none|Holds various labels associated with the action, including names and descriptions.|
|objectRequestOptions|[PublicObjectRequestOptions](#schemapublicobjectrequestoptions)|false|none|none|
|objectTypes|[string]|true|none|An array of strings representing the types of objects associated with the action.|
|outputFields|[[OutputFieldDefinition](#schemaoutputfielddefinition)]|false|none|An array of OutputFieldDefinition objects specifying the output fields of the action.|
|published|boolean|true|none|Indicates whether the action is published and available for use.|

<h2 id="tocS_PublicActionDefinitionPatch">PublicActionDefinitionPatch</h2>
<!-- backwards compatibility -->
<a id="schemapublicactiondefinitionpatch"></a>
<a id="schema_PublicActionDefinitionPatch"></a>
<a id="tocSpublicactiondefinitionpatch"></a>
<a id="tocspublicactiondefinitionpatch"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionUrl|string|false|none|The URL endpoint where the action is executed.|
|executionRules|[[PublicExecutionTranslationRule](#schemapublicexecutiontranslationrule)]|false|none|An array of execution rules that define the conditions under which the action executes. Each item is a PublicExecutionTranslationRule object.|
|inputFieldDependencies|[[PublicSingleFieldDependency](#schemapublicsinglefielddependency) \| [PublicConditionalSingleFieldDependency](#schemapublicconditionalsinglefielddependency)]|false|none|An array of dependencies between input fields. Each item can be a PublicSingleFieldDependency or a PublicConditionalSingleFieldDependency.|
|inputFields|[[PublicInputFieldDefinition](#schemapublicinputfielddefinition)]|false|none|An array of input field definitions required for the action. Each item is a PublicInputFieldDefinition object.|
|labels|object|false|none|Contains labels for the action, including names and descriptions.|
|objectRequestOptions|[PublicObjectRequestOptions](#schemapublicobjectrequestoptions)|false|none|none|
|objectTypes|[string]|false|none|An array of strings representing the types of objects associated with the action.|
|outputFields|[[OutputFieldDefinition](#schemaoutputfielddefinition)]|false|none|An array of output field definitions that the action will produce. Each item is an OutputFieldDefinition object.|
|published|boolean|false|none|Indicates whether the action is published and available for use.|

<h2 id="tocS_PublicActionDefinitionRequiresObjectRequest">PublicActionDefinitionRequiresObjectRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublicactiondefinitionrequiresobjectrequest"></a>
<a id="schema_PublicActionDefinitionRequiresObjectRequest"></a>
<a id="tocSpublicactiondefinitionrequiresobjectrequest"></a>
<a id="tocspublicactiondefinitionrequiresobjectrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requiresObject|boolean|true|none|Indicates whether a custom action definition requires an associated object.|

<h2 id="tocS_PublicActionDefinitionRequiresObjectResponse">PublicActionDefinitionRequiresObjectResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublicactiondefinitionrequiresobjectresponse"></a>
<a id="schema_PublicActionDefinitionRequiresObjectResponse"></a>
<a id="tocSpublicactiondefinitionrequiresobjectresponse"></a>
<a id="tocspublicactiondefinitionrequiresobjectresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requiresObject|boolean|true|none|Indicates whether a custom action definition requires an object.|

<h2 id="tocS_PublicActionFunction">PublicActionFunction</h2>
<!-- backwards compatibility -->
<a id="schemapublicactionfunction"></a>
<a id="schema_PublicActionFunction"></a>
<a id="tocSpublicactionfunction"></a>
<a id="tocspublicactionfunction"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|functionSource|string|true|none|The source code or script that defines the function's behavior.|
|functionType|string|true|none|The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.|
|id|string|false|none|The unique identifier for the action function.|

#### Enumerated Values

|Property|Value|
|---|---|
|functionType|POST_ACTION_EXECUTION|
|functionType|POST_FETCH_OPTIONS|
|functionType|PRE_ACTION_EXECUTION|
|functionType|PRE_FETCH_OPTIONS|

<h2 id="tocS_PublicActionFunctionIdentifier">PublicActionFunctionIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemapublicactionfunctionidentifier"></a>
<a id="schema_PublicActionFunctionIdentifier"></a>
<a id="tocSpublicactionfunctionidentifier"></a>
<a id="tocspublicactionfunctionidentifier"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|functionType|string|true|none|The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.|
|id|string|false|none|The unique identifier for the function.|

#### Enumerated Values

|Property|Value|
|---|---|
|functionType|POST_ACTION_EXECUTION|
|functionType|POST_FETCH_OPTIONS|
|functionType|PRE_ACTION_EXECUTION|
|functionType|PRE_FETCH_OPTIONS|

<h2 id="tocS_PublicActionLabels">PublicActionLabels</h2>
<!-- backwards compatibility -->
<a id="schemapublicactionlabels"></a>
<a id="schema_PublicActionLabels"></a>
<a id="tocSpublicactionlabels"></a>
<a id="tocspublicactionlabels"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionCardContent|string|false|none|Content displayed on the action card.|
|actionDescription|string|false|none|A description of what the action does.|
|actionName|string|true|none|The name of the action.|
|appDisplayName|string|false|none|The display name of the application associated with the action.|
|executionRules|object|false|none|Rules that govern the execution of the action.|
|inputFieldDescriptions|object|false|none|Descriptions for each input field.|
|inputFieldLabels|object|false|none|Labels for the input fields.|
|inputFieldOptionLabels|object|false|none|Labels for the options available in input fields.|
|outputFieldLabels|object|false|none|Labels for the output fields.|

<h2 id="tocS_PublicActionRevision">PublicActionRevision</h2>
<!-- backwards compatibility -->
<a id="schemapublicactionrevision"></a>
<a id="schema_PublicActionRevision"></a>
<a id="tocSpublicactionrevision"></a>
<a id="tocspublicactionrevision"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|The date and time when the action revision was created.|
|definition|[PublicActionDefinition](#schemapublicactiondefinition)|true|none|none|
|id|string|true|none|The unique identifier for the action revision.|
|revisionId|string|true|none|The unique identifier for the specific revision of the action.|

<h2 id="tocS_PublicConditionalSingleFieldDependency">PublicConditionalSingleFieldDependency</h2>
<!-- backwards compatibility -->
<a id="schemapublicconditionalsinglefielddependency"></a>
<a id="schema_PublicConditionalSingleFieldDependency"></a>
<a id="tocSpublicconditionalsinglefielddependency"></a>
<a id="tocspublicconditionalsinglefielddependency"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|controllingFieldName|string|true|none|The name of the field that determines the dependency.|
|controllingFieldValue|string|true|none|The value of the controlling field that triggers the dependency.|
|dependencyType|string|true|none|The type of dependency, with the default value being CONDITIONAL_SINGLE_FIELD.|
|dependentFieldNames|[string]|true|none|An array of strings representing the names of fields that are dependent on the controlling field.|

#### Enumerated Values

|Property|Value|
|---|---|
|dependencyType|CONDITIONAL_SINGLE_FIELD|

<h2 id="tocS_PublicExecutionTranslationRule">PublicExecutionTranslationRule</h2>
<!-- backwards compatibility -->
<a id="schemapublicexecutiontranslationrule"></a>
<a id="schema_PublicExecutionTranslationRule"></a>
<a id="tocSpublicexecutiontranslationrule"></a>
<a id="tocspublicexecutiontranslationrule"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|object|true|none|Defines the conditions that must be met for the execution rule to apply.|
|labelName|string|true|none|Specifies the name of the label associated with the execution rule.|

<h2 id="tocS_PublicFieldTypeDefinition">PublicFieldTypeDefinition</h2>
<!-- backwards compatibility -->
<a id="schemapublicfieldtypedefinition"></a>
<a id="schema_PublicFieldTypeDefinition"></a>
<a id="tocSpublicfieldtypedefinition"></a>
<a id="tocspublicfieldtypedefinition"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A detailed explanation of the field's purpose.|
|fieldType|string|false|none|The type of field, with accepted values including booleancheckbox, calculation_equation, checkbox, date, file, html, number, phonenumber, radio, select, text, and textarea.|
|helpText|string|false|none|Additional information or guidance about the field.|
|label|string|false|none|A user-friendly name for the field.|
|name|string|true|none|The internal name used to identify the field.|
|options|[[PublicOption](#schemapublicoption)]|true|none|An array of options available for the field, each defined by the PublicOption schema.|
|optionsUrl|string|false|none|A URL that provides options for the field.|
|referencedObjectType|string|false|none|The type of object that the field references, with accepted values including OWNER.|
|type|string|true|none|The data type of the field, with accepted values including bool, date, datetime, enumeration, json, number, object_coordinates, phone_number, and string.|

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
|referencedObjectType|OWNER|
|type|bool|
|type|date|
|type|datetime|
|type|enumeration|
|type|json|
|type|number|
|type|object_coordinates|
|type|phone_number|
|type|string|

<h2 id="tocS_PublicInputFieldDefinition">PublicInputFieldDefinition</h2>
<!-- backwards compatibility -->
<a id="schemapublicinputfielddefinition"></a>
<a id="schema_PublicInputFieldDefinition"></a>
<a id="tocSpublicinputfielddefinition"></a>
<a id="tocspublicinputfielddefinition"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isRequired|boolean|true|none|Indicates whether the input field is mandatory.|
|supportedValueTypes|[string]|false|none|An array indicating the types of values that the input field can support. Valid values include 'STATIC_VALUE' and 'OBJECT_PROPERTY'.|
|typeDefinition|[PublicFieldTypeDefinition](#schemapublicfieldtypedefinition)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|supportedValueTypes|STATIC_VALUE|
|supportedValueTypes|OBJECT_PROPERTY|

<h2 id="tocS_PublicObjectRequestOptions">PublicObjectRequestOptions</h2>
<!-- backwards compatibility -->
<a id="schemapublicobjectrequestoptions"></a>
<a id="schema_PublicObjectRequestOptions"></a>
<a id="tocSpublicobjectrequestoptions"></a>
<a id="tocspublicobjectrequestoptions"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|properties|[string]|true|none|An array of strings representing the names of the properties to be requested. Each string in the array specifies a property of the object that should be included in the response.|

<h2 id="tocS_PublicOption">PublicOption</h2>
<!-- backwards compatibility -->
<a id="schemapublicoption"></a>
<a id="schema_PublicOption"></a>
<a id="tocSpublicoption"></a>
<a id="tocspublicoption"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A description of the option.|
|displayOrder|integer(int32)|false|none|The position of the option relative to others in the list.|
|label|string|true|none|A user-friendly label that identifies the option.|
|value|string|true|none|The actual value of the option.|

<h2 id="tocS_PublicSingleFieldDependency">PublicSingleFieldDependency</h2>
<!-- backwards compatibility -->
<a id="schemapublicsinglefielddependency"></a>
<a id="schema_PublicSingleFieldDependency"></a>
<a id="tocSpublicsinglefielddependency"></a>
<a id="tocspublicsinglefielddependency"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|controllingFieldName|string|true|none|The name of the field that controls the dependency.|
|dependencyType|string|true|none|The type of dependency, with the default value being 'SINGLE_FIELD'.|
|dependentFieldNames|[string]|true|none|An array of strings representing the names of fields that are dependent on the controlling field.|

#### Enumerated Values

|Property|Value|
|---|---|
|dependencyType|SINGLE_FIELD|

<h2 id="tocS_StringFieldSchema">StringFieldSchema</h2>
<!-- backwards compatibility -->
<a id="schemastringfieldschema"></a>
<a id="schema_StringFieldSchema"></a>
<a id="tocSstringfieldschema"></a>
<a id="tocsstringfieldschema"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|string|false|none|Specifies the format of the string, with accepted values: DATE, DATE_TIME, OBJECT_COORDINATE, TIME, URI.|
|type|string|true|none|Indicates that the type is a string, with the default value being STRING.|

#### Enumerated Values

|Property|Value|
|---|---|
|format|DATE|
|format|DATE_TIME|
|format|MONTH_AND_DAY|
|format|OBJECT_COORDINATE|
|format|OBJECT_TYPE|
|format|TIME|
|format|URI|
|type|STRING|

<h2 id="tocS_UnknownFieldSchema">UnknownFieldSchema</h2>
<!-- backwards compatibility -->
<a id="schemaunknownfieldschema"></a>
<a id="schema_UnknownFieldSchema"></a>
<a id="tocSunknownfieldschema"></a>
<a id="tocsunknownfieldschema"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|A string that indicates the type of the field. In this schema, it is always set to 'UNKNOWN'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|UNKNOWN|
