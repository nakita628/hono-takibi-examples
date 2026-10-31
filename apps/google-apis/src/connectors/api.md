<h1 id="connectors-api">Connectors API v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Enables users to create and manage connections to Google Cloud services and third-party business applications using the Connectors interface.

Base URLs:

* <a href="https://connectors.googleapis.com/">https://connectors.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/apigee/docs/api-platform/connectors/about-connectors">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

<h1 id="connectors-api-projects">projects</h1>

## connectors.projects.locations.connections.executeSqlQuery

<a id="opIdconnectors.projects.locations.connections.executeSqlQuery"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:executeSqlQuery \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "query": {
      "query": "string"
    }
  }'
```

`POST /v2/{connection}:executeSqlQuery`

Executes a SQL statement specified in the body of the request. An example of this SQL statement in the case of Salesforce connector would be 'select * from Account a, Order o where a.Id = o.AccountId'.

> Body parameter

```json
{
  "query": {
    "query": "string"
  }
}
```

<h3 id="connectorsprojectslocationsconnectionsexecutesqlquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connection|path|string|true|Required. Resource name of the Connection. Format: projects/{project}/locations/{location}/connections/{connection}|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[ExecuteSqlQueryRequest](#schemaexecutesqlqueryrequest)|false|none|
|» query|body|[Query](#schemaquery)|false|Required. SQL statement passed by clients like Integration Platform, the query is passed as-is to the driver used for interfacing with external systems.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

<h3 id="connectorsprojectslocationsconnectionsexecutesqlquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ExecuteSqlQueryResponse](#schemaexecutesqlqueryresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## connectors.projects.locations.connections.entityTypes.entities.deleteEntitiesWithConditions

<a id="opIdconnectors.projects.locations.connections.entityTypes.entities.deleteEntitiesWithConditions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/entities:deleteEntitiesWithConditions \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/{entityType}/entities:deleteEntitiesWithConditions`

Deletes entities based on conditions specified in the request and not on entity id.

<h3 id="connectorsprojectslocationsconnectionsentitytypesentitiesdeleteentitieswithconditions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entityType|path|string|true|Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}|
|conditions|query|string|false|Required. Conditions to be used when deleting entities. From a proto standpoint, There are no restrictions on what can be passed using this field. The connector documentation should have information about what format of filters/conditions are supported. Note: If this conditions field is left empty, an exception is thrown. We don't want to consider 'empty conditions' to be a match-all case. Connector developers can determine and document what a match-all case constraint would be.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="connectorsprojectslocationsconnectionsentitytypesentitiesdeleteentitieswithconditions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## connectors.projects.locations.connections.entityTypes.entities.updateEntitiesWithConditions

<a id="opIdconnectors.projects.locations.connections.entityTypes.entities.updateEntitiesWithConditions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/entities:updateEntitiesWithConditions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "fields": {
      "property1": null,
      "property2": null
    }
  }'
```

`POST /v2/{entityType}/entities:updateEntitiesWithConditions`

Updates entities based on conditions specified in the request and not on entity id.

> Body parameter

```json
{
  "fields": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="connectorsprojectslocationsconnectionsentitytypesentitiesupdateentitieswithconditions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entityType|path|string|true|Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}|
|conditions|query|string|false|Required. Conditions to be used when updating entities. From a proto standpoint, There are no restrictions on what can be passed using this field. The connector documentation should have information about what format of filters/conditions are supported. Note: If this conditions field is left empty, an exception is thrown. We don't want to consider 'empty conditions' to be a match-all case. Connector developers can determine and document what a match-all case constraint would be.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Entity](#schemaentity)|false|none|
|» fields|body|object|false|Fields of the entity. The key is name of the field and the value contains the applicable `google.protobuf.Value` entry for this field.|
|» » **additionalProperties**|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="connectorsprojectslocationsconnectionsentitytypesentitiesupdateentitieswithconditions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[UpdateEntitiesWithConditionsResponse](#schemaupdateentitieswithconditionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## connectors.projects.locations.connections.entityTypes.entities.get

<a id="opIdconnectors.projects.locations.connections.entityTypes.entities.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{name}`

Gets a single entity row matching the entity type and entity id specified in the request.

<h3 id="connectorsprojectslocationsconnectionsentitytypesentitiesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}/entities/{id}|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "fields": {
    "property1": null,
    "property2": null
  },
  "name": "string"
}
```

<h3 id="connectorsprojectslocationsconnectionsentitytypesentitiesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Entity](#schemaentity)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## connectors.projects.locations.connections.entityTypes.entities.delete

<a id="opIdconnectors.projects.locations.connections.entityTypes.entities.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/{name}`

Deletes an existing entity row matching the entity type and entity id specified in the request.

<h3 id="connectorsprojectslocationsconnectionsentitytypesentitiesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}/entities/{id}|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="connectorsprojectslocationsconnectionsentitytypesentitiesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## connectors.projects.locations.connections.entityTypes.entities.patch

<a id="opIdconnectors.projects.locations.connections.entityTypes.entities.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "fields": {
      "property1": null,
      "property2": null
    }
  }'
```

`PATCH /v2/{name}`

Updates an existing entity row matching the entity type and entity id specified in the request. The fields in the entity row that need to be modified are contained in the body of the request. All unspecified fields are left unchanged. The response message contains a `Entity` message object returned as a response by the external system.

> Body parameter

```json
{
  "fields": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="connectorsprojectslocationsconnectionsentitytypesentitiespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Output only. Resource name of the Entity. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}/entities/{id}|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Entity](#schemaentity)|false|none|
|» fields|body|object|false|Fields of the entity. The key is name of the field and the value contains the applicable `google.protobuf.Value` entry for this field.|
|» » **additionalProperties**|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "fields": {
    "property1": null,
    "property2": null
  },
  "name": "string"
}
```

<h3 id="connectorsprojectslocationsconnectionsentitytypesentitiespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Entity](#schemaentity)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## connectors.projects.locations.connections.actions.execute

<a id="opIdconnectors.projects.locations.connections.actions.execute"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:execute \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "parameters": {
      "property1": null,
      "property2": null
    }
  }'
```

`POST /v2/{name}:execute`

Executes an action with the name specified in the request. The input parameters for executing the action are passed through the body of the ExecuteAction request.

> Body parameter

```json
{
  "parameters": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="connectorsprojectslocationsconnectionsactionsexecute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Resource name of the Action. Format: projects/{project}/locations/{location}/connections/{connection}/actions/{action}|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[ExecuteActionRequest](#schemaexecuteactionrequest)|false|none|
|» parameters|body|object|false|Parameters for executing the action. The parameters can be key/value pairs or nested structs.|
|» » **additionalProperties**|body|object|false|Properties of the object.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

<h3 id="connectorsprojectslocationsconnectionsactionsexecute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ExecuteActionResponse](#schemaexecuteactionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## connectors.projects.locations.connections.actions.list

<a id="opIdconnectors.projects.locations.connections.actions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/actions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/actions`

Gets the schema of all the actions supported by the connector.

<h3 id="connectorsprojectslocationsconnectionsactionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent resource name of the Action. Format: projects/{project}/locations/{location}/connections/{connection}|
|pageSize|query|integer|false|Number of Actions to return. Defaults to 25.|
|pageToken|query|string|false|Page token, return from a previous ListActions call, that can be used retrieve the next page of content. If unspecified, the request returns the first page of actions.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "actions": [
    {
      "inputParameters": [
        {
          "dataType": "DATA_TYPE_UNSPECIFIED",
          "defaultValue": null,
          "description": "string",
          "name": "string",
          "nullable": true
        }
      ],
      "name": "string",
      "resultMetadata": [
        {
          "dataType": "DATA_TYPE_UNSPECIFIED",
          "description": "string",
          "name": "string"
        }
      ]
    }
  ],
  "nextPageToken": "string",
  "unsupportedActionNames": [
    "string"
  ]
}
```

<h3 id="connectorsprojectslocationsconnectionsactionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListActionsResponse](#schemalistactionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## connectors.projects.locations.connections.entityTypes.entities.list

<a id="opIdconnectors.projects.locations.connections.entityTypes.entities.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/entities \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/entities`

Lists entity rows of a particular entity type contained in the request. Note: 1. Currently, only max of one 'sort_by' column is supported. 2. If no 'sort_by' column is provided, the primary key of the table is used. If zero or more than one primary key is available, we default to the unpaginated list entities logic which only returns the first page. 3. The values of the 'sort_by' columns must uniquely identify an entity row, otherwise undefined behaviors may be observed during pagination. 4. Since transactions are not supported, any updates, inserts or deletes during pagination can lead to stale data being returned or other unexpected behaviors.

<h3 id="connectorsprojectslocationsconnectionsentitytypesentitieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}|
|conditions|query|string|false|Conditions to be used when listing entities. From a proto standpoint, There are no restrictions on what can be passed using this field. The connector documentation should have information about what format of filters/conditions are supported.|
|pageSize|query|integer|false|Number of entity rows to return. Defaults page size = 25. Max page size = 200.|
|pageToken|query|string|false|Page token value if available from a previous request.|
|sortBy|query|[string]|false|List of 'sort_by' columns to use when returning the results.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "entities": [
    {
      "fields": {
        "property1": null,
        "property2": null
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="connectorsprojectslocationsconnectionsentitytypesentitieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListEntitiesResponse](#schemalistentitiesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## connectors.projects.locations.connections.entityTypes.entities.create

<a id="opIdconnectors.projects.locations.connections.entityTypes.entities.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/entities \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "fields": {
      "property1": null,
      "property2": null
    }
  }'
```

`POST /v2/{parent}/entities`

Creates a new entity row of the specified entity type in the external system. The field values for creating the row are contained in the body of the request. The response message contains a `Entity` message object returned as a response by the external system.

> Body parameter

```json
{
  "fields": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="connectorsprojectslocationsconnectionsentitytypesentitiescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Entity](#schemaentity)|false|none|
|» fields|body|object|false|Fields of the entity. The key is name of the field and the value contains the applicable `google.protobuf.Value` entry for this field.|
|» » **additionalProperties**|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "fields": {
    "property1": null,
    "property2": null
  },
  "name": "string"
}
```

<h3 id="connectorsprojectslocationsconnectionsentitytypesentitiescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Entity](#schemaentity)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## connectors.projects.locations.connections.entityTypes.list

<a id="opIdconnectors.projects.locations.connections.entityTypes.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/entityTypes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/entityTypes`

Lists metadata related to all entity types present in the external system.

<h3 id="connectorsprojectslocationsconnectionsentitytypeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}|
|pageSize|query|integer|false|Number of entity types to return. Defaults to 25.|
|pageToken|query|string|false|Page token, return from a previous ListEntityTypes call, that can be used retrieve the next page of content. If unspecified, the request returns the first page of entity types.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "types": [
    {
      "fields": [
        {
          "additionalDetails": {
            "property1": null,
            "property2": null
          },
          "dataType": "DATA_TYPE_UNSPECIFIED",
          "defaultValue": null,
          "description": "string",
          "key": true,
          "name": "string",
          "nullable": true,
          "reference": {
            "name": "string",
            "type": "string"
          }
        }
      ],
      "name": "string"
    }
  ],
  "unsupportedTypeNames": [
    "string"
  ]
}
```

<h3 id="connectorsprojectslocationsconnectionsentitytypeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListEntityTypesResponse](#schemalistentitytypesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
{
  "inputParameters": [
    {
      "dataType": "DATA_TYPE_UNSPECIFIED",
      "defaultValue": null,
      "description": "string",
      "name": "string",
      "nullable": true
    }
  ],
  "name": "string",
  "resultMetadata": [
    {
      "dataType": "DATA_TYPE_UNSPECIFIED",
      "description": "string",
      "name": "string"
    }
  ]
}
```

Action message contains metadata information about a single action present in the external system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputParameters|[[InputParameter](#schemainputparameter)]|false|none|List containing input parameter metadata.|
|name|string|false|none|Name of the action.|
|resultMetadata|[[ResultMetadata](#schemaresultmetadata)]|false|none|List containing the metadata of result fields.|

<h2 id="tocS_Empty">Empty</h2>
<!-- backwards compatibility -->
<a id="schemaempty"></a>
<a id="schema_Empty"></a>
<a id="tocSempty"></a>
<a id="tocsempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

<h2 id="tocS_Entity">Entity</h2>
<!-- backwards compatibility -->
<a id="schemaentity"></a>
<a id="schema_Entity"></a>
<a id="tocSentity"></a>
<a id="tocsentity"></a>

```json
{
  "fields": {
    "property1": null,
    "property2": null
  },
  "name": "string"
}
```

'Entity row'/ 'Entity' refers to a single row of an entity type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|object|false|none|Fields of the entity. The key is name of the field and the value contains the applicable `google.protobuf.Value` entry for this field.|
|name|string|false|read-only|Output only. Resource name of the Entity. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}/entities/{id}|

<h2 id="tocS_EntityType">EntityType</h2>
<!-- backwards compatibility -->
<a id="schemaentitytype"></a>
<a id="schema_EntityType"></a>
<a id="tocSentitytype"></a>
<a id="tocsentitytype"></a>

```json
{
  "fields": [
    {
      "additionalDetails": {
        "property1": null,
        "property2": null
      },
      "dataType": "DATA_TYPE_UNSPECIFIED",
      "defaultValue": null,
      "description": "string",
      "key": true,
      "name": "string",
      "nullable": true,
      "reference": {
        "name": "string",
        "type": "string"
      }
    }
  ],
  "name": "string"
}
```

EntityType message contains metadata information about a single entity type present in the external system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|[[Field](#schemafield)]|false|none|List containing metadata information about each field of the entity type.|
|name|string|false|none|The name of the entity type.|

<h2 id="tocS_ExecuteActionRequest">ExecuteActionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexecuteactionrequest"></a>
<a id="schema_ExecuteActionRequest"></a>
<a id="tocSexecuteactionrequest"></a>
<a id="tocsexecuteactionrequest"></a>

```json
{
  "parameters": {
    "property1": null,
    "property2": null
  }
}
```

Request message for ActionService.ExecuteAction

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parameters|object|false|none|Parameters for executing the action. The parameters can be key/value pairs or nested structs.|

<h2 id="tocS_ExecuteActionResponse">ExecuteActionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexecuteactionresponse"></a>
<a id="schema_ExecuteActionResponse"></a>
<a id="tocSexecuteactionresponse"></a>
<a id="tocsexecuteactionresponse"></a>

```json
{
  "results": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

Response message for ActionService.ExecuteAction

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|false|none|In the case of successful invocation of the specified action, the results Struct contains values based on the response of the action invoked. 1. If the action execution produces any entities as a result, they are returned as an array of Structs with the 'key' being the field name and the 'value' being the value of that field in each result row. { 'results': [{'key': 'value'}, ...] }|

<h2 id="tocS_ExecuteSqlQueryRequest">ExecuteSqlQueryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexecutesqlqueryrequest"></a>
<a id="schema_ExecuteSqlQueryRequest"></a>
<a id="tocSexecutesqlqueryrequest"></a>
<a id="tocsexecutesqlqueryrequest"></a>

```json
{
  "query": {
    "query": "string"
  }
}
```

An execute sql query request containing the query and the connection to execute it on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|[Query](#schemaquery)|false|none|Required. SQL statement passed by clients like Integration Platform, the query is passed as-is to the driver used for interfacing with external systems.|

<h2 id="tocS_ExecuteSqlQueryResponse">ExecuteSqlQueryResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexecutesqlqueryresponse"></a>
<a id="schema_ExecuteSqlQueryResponse"></a>
<a id="tocSexecutesqlqueryresponse"></a>
<a id="tocsexecutesqlqueryresponse"></a>

```json
{
  "results": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

A response returned by the connection after executing the sql query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|false|none|In the case of successful execution of the query the response contains results returned by the external system. For example, the result rows of the query are contained in the 'results' Struct list - "results": [ { "field1": "val1", "field2": "val2",.. },.. ] Each Struct row can contain fields any type of like nested Structs or lists.|

<h2 id="tocS_Field">Field</h2>
<!-- backwards compatibility -->
<a id="schemafield"></a>
<a id="schema_Field"></a>
<a id="tocSfield"></a>
<a id="tocsfield"></a>

```json
{
  "additionalDetails": {
    "property1": null,
    "property2": null
  },
  "dataType": "DATA_TYPE_UNSPECIFIED",
  "defaultValue": null,
  "description": "string",
  "key": true,
  "name": "string",
  "nullable": true,
  "reference": {
    "name": "string",
    "type": "string"
  }
}
```

Message contains EntityType's Field metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalDetails|object|false|none|The following map contains fields that are not explicitly mentioned above,this give connectors the flexibility to add new metadata fields.|
|dataType|string|false|none|The data type of the Field.|
|defaultValue|object|false|none|The following field specifies the default value of the Field provided by the external system if a value is not provided.|
|description|string|false|none|A brief description of the Field.|
|key|boolean|false|none|The following boolean field specifies if the current Field acts as a primary key or id if the parent is of type entity.|
|name|string|false|none|Name of the Field.|
|nullable|boolean|false|none|Specifies whether a null value is allowed.|
|reference|[Reference](#schemareference)|false|none|Reference captures the association between two different entity types. Value links to the reference of another entity type.|

#### Enumerated Values

|Property|Value|
|---|---|
|dataType|DATA_TYPE_UNSPECIFIED|
|dataType|INT|
|dataType|SMALLINT|
|dataType|DOUBLE|
|dataType|DATE|
|dataType|DATETIME|
|dataType|TIME|
|dataType|STRING|
|dataType|LONG|
|dataType|BOOLEAN|
|dataType|DECIMAL|
|dataType|UUID|
|dataType|BLOB|
|dataType|BIT|
|dataType|TINYINT|
|dataType|INTEGER|
|dataType|BIGINT|
|dataType|FLOAT|
|dataType|REAL|
|dataType|NUMERIC|
|dataType|CHAR|
|dataType|VARCHAR|
|dataType|LONGVARCHAR|
|dataType|TIMESTAMP|
|dataType|NCHAR|
|dataType|NVARCHAR|
|dataType|LONGNVARCHAR|
|dataType|NULL|
|dataType|OTHER|
|dataType|JAVA_OBJECT|
|dataType|DISTINCT|
|dataType|STRUCT|
|dataType|ARRAY|
|dataType|CLOB|
|dataType|REF|
|dataType|DATALINK|
|dataType|ROWID|
|dataType|BINARY|
|dataType|VARBINARY|
|dataType|LONGVARBINARY|
|dataType|NCLOB|
|dataType|SQLXML|
|dataType|REF_CURSOR|
|dataType|TIME_WITH_TIMEZONE|
|dataType|TIMESTAMP_WITH_TIMEZONE|

<h2 id="tocS_InputParameter">InputParameter</h2>
<!-- backwards compatibility -->
<a id="schemainputparameter"></a>
<a id="schema_InputParameter"></a>
<a id="tocSinputparameter"></a>
<a id="tocsinputparameter"></a>

```json
{
  "dataType": "DATA_TYPE_UNSPECIFIED",
  "defaultValue": null,
  "description": "string",
  "name": "string",
  "nullable": true
}
```

Input Parameter message contains metadata about the parameters required for executing an Action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataType|string|false|none|The data type of the Parameter|
|defaultValue|object|false|none|The following field specifies the default value of the Parameter provided by the external system if a value is not provided.|
|description|string|false|none|A brief description of the Parameter.|
|name|string|false|none|Name of the Parameter.|
|nullable|boolean|false|none|Specifies whether a null value is allowed.|

#### Enumerated Values

|Property|Value|
|---|---|
|dataType|DATA_TYPE_UNSPECIFIED|
|dataType|INT|
|dataType|SMALLINT|
|dataType|DOUBLE|
|dataType|DATE|
|dataType|DATETIME|
|dataType|TIME|
|dataType|STRING|
|dataType|LONG|
|dataType|BOOLEAN|
|dataType|DECIMAL|
|dataType|UUID|
|dataType|BLOB|
|dataType|BIT|
|dataType|TINYINT|
|dataType|INTEGER|
|dataType|BIGINT|
|dataType|FLOAT|
|dataType|REAL|
|dataType|NUMERIC|
|dataType|CHAR|
|dataType|VARCHAR|
|dataType|LONGVARCHAR|
|dataType|TIMESTAMP|
|dataType|NCHAR|
|dataType|NVARCHAR|
|dataType|LONGNVARCHAR|
|dataType|NULL|
|dataType|OTHER|
|dataType|JAVA_OBJECT|
|dataType|DISTINCT|
|dataType|STRUCT|
|dataType|ARRAY|
|dataType|CLOB|
|dataType|REF|
|dataType|DATALINK|
|dataType|ROWID|
|dataType|BINARY|
|dataType|VARBINARY|
|dataType|LONGVARBINARY|
|dataType|NCLOB|
|dataType|SQLXML|
|dataType|REF_CURSOR|
|dataType|TIME_WITH_TIMEZONE|
|dataType|TIMESTAMP_WITH_TIMEZONE|

<h2 id="tocS_ListActionsResponse">ListActionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistactionsresponse"></a>
<a id="schema_ListActionsResponse"></a>
<a id="tocSlistactionsresponse"></a>
<a id="tocslistactionsresponse"></a>

```json
{
  "actions": [
    {
      "inputParameters": [
        {
          "dataType": "DATA_TYPE_UNSPECIFIED",
          "defaultValue": null,
          "description": "string",
          "name": "string",
          "nullable": true
        }
      ],
      "name": "string",
      "resultMetadata": [
        {
          "dataType": "DATA_TYPE_UNSPECIFIED",
          "description": "string",
          "name": "string"
        }
      ]
    }
  ],
  "nextPageToken": "string",
  "unsupportedActionNames": [
    "string"
  ]
}
```

Response message for ActionService.ListActions

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[[Action](#schemaaction)]|false|none|List of action metadata.|
|nextPageToken|string|false|none|Next page token if more actions available.|
|unsupportedActionNames|[string]|false|none|List of actions which contain unsupported Datatypes. Check datatype.proto for more information.|

<h2 id="tocS_ListEntitiesResponse">ListEntitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistentitiesresponse"></a>
<a id="schema_ListEntitiesResponse"></a>
<a id="tocSlistentitiesresponse"></a>
<a id="tocslistentitiesresponse"></a>

```json
{
  "entities": [
    {
      "fields": {
        "property1": null,
        "property2": null
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for EntityService.ListEntities

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entities|[[Entity](#schemaentity)]|false|none|List containing entity rows.|
|nextPageToken|string|false|none|Next page token if more records are available.|

<h2 id="tocS_ListEntityTypesResponse">ListEntityTypesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistentitytypesresponse"></a>
<a id="schema_ListEntityTypesResponse"></a>
<a id="tocSlistentitytypesresponse"></a>
<a id="tocslistentitytypesresponse"></a>

```json
{
  "nextPageToken": "string",
  "types": [
    {
      "fields": [
        {
          "additionalDetails": {
            "property1": null,
            "property2": null
          },
          "dataType": "DATA_TYPE_UNSPECIFIED",
          "defaultValue": null,
          "description": "string",
          "key": true,
          "name": "string",
          "nullable": true,
          "reference": {
            "name": "string",
            "type": "string"
          }
        }
      ],
      "name": "string"
    }
  ],
  "unsupportedTypeNames": [
    "string"
  ]
}
```

Response message for EntityService.ListEntityTypes

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Next page token if more entity types available.|
|types|[[EntityType](#schemaentitytype)]|false|none|List of metadata related to all entity types.|
|unsupportedTypeNames|[string]|false|none|List of entity type names which contain unsupported Datatypes. Check datatype.proto for more information.|

<h2 id="tocS_Query">Query</h2>
<!-- backwards compatibility -->
<a id="schemaquery"></a>
<a id="schema_Query"></a>
<a id="tocSquery"></a>
<a id="tocsquery"></a>

```json
{
  "query": "string"
}
```

A wrapper around the SQL query statement. This is needed so that the JSON representation of ExecuteSqlQueryRequest has the following format: `{"query":"select *"}`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|string|false|none|Required. Sql query to execute.|

<h2 id="tocS_Reference">Reference</h2>
<!-- backwards compatibility -->
<a id="schemareference"></a>
<a id="schema_Reference"></a>
<a id="tocSreference"></a>
<a id="tocsreference"></a>

```json
{
  "name": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the reference field.|
|type|string|false|none|Name of reference entity type.|

<h2 id="tocS_ResultMetadata">ResultMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaresultmetadata"></a>
<a id="schema_ResultMetadata"></a>
<a id="tocSresultmetadata"></a>
<a id="tocsresultmetadata"></a>

```json
{
  "dataType": "DATA_TYPE_UNSPECIFIED",
  "description": "string",
  "name": "string"
}
```

Result Metadata message contains metadata about the result returned after executing an Action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataType|string|false|none|The data type of the metadata field|
|description|string|false|none|A brief description of the metadata field.|
|name|string|false|none|Name of the metadata field.|

#### Enumerated Values

|Property|Value|
|---|---|
|dataType|DATA_TYPE_UNSPECIFIED|
|dataType|INT|
|dataType|SMALLINT|
|dataType|DOUBLE|
|dataType|DATE|
|dataType|DATETIME|
|dataType|TIME|
|dataType|STRING|
|dataType|LONG|
|dataType|BOOLEAN|
|dataType|DECIMAL|
|dataType|UUID|
|dataType|BLOB|
|dataType|BIT|
|dataType|TINYINT|
|dataType|INTEGER|
|dataType|BIGINT|
|dataType|FLOAT|
|dataType|REAL|
|dataType|NUMERIC|
|dataType|CHAR|
|dataType|VARCHAR|
|dataType|LONGVARCHAR|
|dataType|TIMESTAMP|
|dataType|NCHAR|
|dataType|NVARCHAR|
|dataType|LONGNVARCHAR|
|dataType|NULL|
|dataType|OTHER|
|dataType|JAVA_OBJECT|
|dataType|DISTINCT|
|dataType|STRUCT|
|dataType|ARRAY|
|dataType|CLOB|
|dataType|REF|
|dataType|DATALINK|
|dataType|ROWID|
|dataType|BINARY|
|dataType|VARBINARY|
|dataType|LONGVARBINARY|
|dataType|NCLOB|
|dataType|SQLXML|
|dataType|REF_CURSOR|
|dataType|TIME_WITH_TIMEZONE|
|dataType|TIMESTAMP_WITH_TIMEZONE|

<h2 id="tocS_UpdateEntitiesWithConditionsResponse">UpdateEntitiesWithConditionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateentitieswithconditionsresponse"></a>
<a id="schema_UpdateEntitiesWithConditionsResponse"></a>
<a id="tocSupdateentitieswithconditionsresponse"></a>
<a id="tocsupdateentitieswithconditionsresponse"></a>

```json
{
  "response": {
    "property1": null,
    "property2": null
  }
}
```

Response message for EntityService.UpdateEntitiesWithConditions

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|response|object|false|none|Response returned by the external system.|
