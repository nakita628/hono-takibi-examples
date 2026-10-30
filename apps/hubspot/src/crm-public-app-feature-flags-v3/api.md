<h1 id="crm-public-app-feature-flags-v3">CRM Public App Feature Flags V3 v2026-09</h1>

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

<h1 id="crm-public-app-feature-flags-v3-basic">Basic</h1>

## List Flags

<a id="opIdget-/feature-flags/2026-09/{appId}/flags/all_/feature-flags/v3/{appId}/flags/all"></a>

> Code samples

```bash
curl "https://api.hubapi.com/feature-flags/2026-09/{appId}/flags/all?hapikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /feature-flags/2026-09/{appId}/flags/all`

Retrieve all feature flags associated with a specific application in your HubSpot account. This endpoint is useful for developers who need to manage or audit feature flags for their applications. It requires the application ID to identify which application's flags to list.

<h3 id="list-flags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the application for which to retrieve all feature flags.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="list-flags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[FlagsForAppResponse](#schemaflagsforappresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Retrieve an app's feature flags

<a id="opIdget-/feature-flags/2026-09/{appId}/flags/{flagName}"></a>

> Code samples

```bash
curl "https://api.hubapi.com/feature-flags/2026-09/{appId}/flags/{flagName}?hapikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /feature-flags/2026-09/{appId}/flags/{flagName}`

Retrieve the current status of the app's feature flags. No request body is included.

<h3 id="retrieve-an-apps-feature-flags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app associated with the feature flag.|
|flagName|path|string|true|The name of the feature flag to retrieve.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-an-apps-feature-flags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[FlagResponse](#schemaflagresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Set an app's feature flag

<a id="opIdput-/feature-flags/2026-09/{appId}/flags/{flagName}"></a>

> Code samples

```bash
curl "https://api.hubapi.com/feature-flags/2026-09/{appId}/flags/{flagName}?hapikey=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`PUT /feature-flags/2026-09/{appId}/flags/{flagName}`

Set a feature flag for an app. For example, update the `hs-hide-crm-cards` flag's `defaultState` to `ON` to hide classic CRM cards from new installs.

> Body parameter

```json
null
```

<h3 id="set-an-apps-feature-flag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the application associated with the feature flag.|
|flagName|path|string|true|The name of the feature flag to update.|
|body|body|[FlagPutRequest](#schemaflagputrequest)|true|none|
|» defaultState|body|string|true|The state that the flag should have if there are no overrides for a particular portal|
|» overrideState|body|string|false|A flag value that supercedes all other overrides, including portal-level values. Mostly used for things like emergency overrides|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» defaultState|ABSENT|
|» defaultState|OFF|
|» defaultState|ON|
|» overrideState|ABSENT|
|» overrideState|OFF|
|» overrideState|ON|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="set-an-apps-feature-flag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[FlagResponse](#schemaflagresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Delete an app's feature flag

<a id="opIddelete-/feature-flags/2026-09/{appId}/flags/{flagName}"></a>

> Code samples

```bash
curl "https://api.hubapi.com/feature-flags/2026-09/{appId}/flags/{flagName}?hapikey=${API_KEY}" \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /feature-flags/2026-09/{appId}/flags/{flagName}`

Delete a feature flag in an app.  For example, delete the `hs-release-app-cards` flag after all accounts have been migrated.

<h3 id="delete-an-apps-feature-flag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the application from which the feature flag will be deleted.|
|flagName|path|string|true|The name of the feature flag to be deleted.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="delete-an-apps-feature-flag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[FlagResponse](#schemaflagresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Retrieve accounts with a set flag state

<a id="opIdget-/feature-flags/2026-09/{appId}/flags/{flagName}/portals"></a>

> Code samples

```bash
curl "https://api.hubapi.com/feature-flags/2026-09/{appId}/flags/{flagName}/portals?hapikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /feature-flags/2026-09/{appId}/flags/{flagName}/portals`

Retrieve a list of HubSpot accounts with an account-level flag setting for the specified app. No request body is included.

<h3 id="retrieve-accounts-with-a-set-flag-state-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app associated with the feature flag.|
|flagName|path|string|true|The name of the feature flag to retrieve portal information for.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|startPortalId|query|integer(int32)|false|The ID of the portal to start the list from. Useful for pagination.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-accounts-with-a-set-flag-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PortalFlagStateBatchResponse](#schemaportalflagstatebatchresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Retrieve account flag state

<a id="opIdget-/feature-flags/2026-09/{appId}/flags/{flagName}/portals/{portalId}"></a>

> Code samples

```bash
curl "https://api.hubapi.com/feature-flags/2026-09/{appId}/flags/{flagName}/portals/{portalId}?hapikey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /feature-flags/2026-09/{appId}/flags/{flagName}/portals/{portalId}`

Retrieve the account-level flag state of a specific HubSpot account.

<h3 id="retrieve-account-flag-state-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app containing the feature flag.|
|flagName|path|string|true|The name of the feature flag to retrieve.|
|portalId|path|integer(int32)|true|The unique identifier of the portal for which the flag state is being retrieved.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-account-flag-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PortalFlagStateResponse](#schemaportalflagstateresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Set an account flag state

<a id="opIdput-/feature-flags/2026-09/{appId}/flags/{flagName}/portals/{portalId}"></a>

> Code samples

```bash
curl "https://api.hubapi.com/feature-flags/2026-09/{appId}/flags/{flagName}/portals/{portalId}?hapikey=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`PUT /feature-flags/2026-09/{appId}/flags/{flagName}/portals/{portalId}`

Specify an account-level flag state for a specific HubSpot account.

> Body parameter

```json
null
```

<h3 id="set-an-account-flag-state-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the application associated with the feature flag.|
|flagName|path|string|true|The name of the feature flag to update.|
|portalId|path|integer(int32)|true|The unique identifier of the portal where the feature flag state is being updated.|
|body|body|[PortalFlagStatePutRequest](#schemaportalflagstateputrequest)|true|none|
|» flagState|body|string|true|The state that the given flag should be in for this portal|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» flagState|ABSENT|
|» flagState|OFF|
|» flagState|ON|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="set-an-account-flag-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PortalFlagStateResponse](#schemaportalflagstateresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Delete an account flag state

<a id="opIddelete-/feature-flags/2026-09/{appId}/flags/{flagName}/portals/{portalId}"></a>

> Code samples

```bash
curl "https://api.hubapi.com/feature-flags/2026-09/{appId}/flags/{flagName}/portals/{portalId}?hapikey=${API_KEY}" \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /feature-flags/2026-09/{appId}/flags/{flagName}/portals/{portalId}`

Delete an account-level flag state for a specific HubSpot account. No request body is included.

<h3 id="delete-an-account-flag-state-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app associated with the feature flag.|
|flagName|path|string|true|The name of the feature flag to delete.|
|portalId|path|integer(int32)|true|The unique identifier of the portal from which the feature flag will be deleted.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="delete-an-account-flag-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PortalFlagStateResponse](#schemaportalflagstateresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

<h1 id="crm-public-app-feature-flags-v3-batch">Batch</h1>

## Batch delete account flag state

<a id="opIdpost-/feature-flags/2026-09/{appId}/flags/{flagName}/portals/batch/delete"></a>

> Code samples

```bash
curl "https://api.hubapi.com/feature-flags/2026-09/{appId}/flags/{flagName}/portals/batch/delete?hapikey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /feature-flags/2026-09/{appId}/flags/{flagName}/portals/batch/delete`

Delete an account-level flag state for multiple HubSpot accounts at once. Use this endpoint to manage flag exposure for groups of HubSpot accounts.

> Body parameter

```json
null
```

<h3 id="batch-delete-account-flag-state-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the application associated with the feature flag.|
|flagName|path|string|true|The name of the feature flag to be deleted.|
|body|body|[PortalFlagStateBatchDeleteRequest](#schemaportalflagstatebatchdeleterequest)|true|none|
|» portalIds|body|[integer(int32)]|true|An array of integers representing the unique identifiers of the portals for which the feature flag states are to be deleted.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="batch-delete-account-flag-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PortalFlagStateBatchResponse](#schemaportalflagstatebatchresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

## Batch set account flag state

<a id="opIdpost-/feature-flags/2026-09/{appId}/flags/{flagName}/portals/batch/upsert"></a>

> Code samples

```bash
curl "https://api.hubapi.com/feature-flags/2026-09/{appId}/flags/{flagName}/portals/batch/upsert?hapikey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d 'null'
```

`POST /feature-flags/2026-09/{appId}/flags/{flagName}/portals/batch/upsert`

Set the portal flag state for multiple HubSpot accounts at once. Use this endpoint to manage flag exposure for groups of HubSpot accounts.

> Body parameter

```json
null
```

<h3 id="batch-set-account-flag-state-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|integer(int32)|true|The unique identifier of the app for which the feature flags are being managed.|
|flagName|path|string|true|The name of the feature flag to upsert.|
|body|body|[PortalFlagStateBatchPutRequest](#schemaportalflagstatebatchputrequest)|true|none|
|» portalStates|body|[[BatchPortalEntry](#schemabatchportalentry)]|true|An array of portal flag state entries to be updated. Each entry contains details about the portal ID and the desired flag state.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="batch-set-account-flag-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PortalFlagStateBatchResponse](#schemaportalflagstatebatchresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developer_hapikey
</aside>

# Schemas

<h2 id="tocS_BatchPortalEntry">BatchPortalEntry</h2>
<!-- backwards compatibility -->
<a id="schemabatchportalentry"></a>
<a id="schema_BatchPortalEntry"></a>
<a id="tocSbatchportalentry"></a>
<a id="tocsbatchportalentry"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flagState|string|true|none|The flag state for this portal (e.g. ON or OFF)|
|portalId|integer(int32)|true|none|The ID of the portal|

#### Enumerated Values

|Property|Value|
|---|---|
|flagState|ABSENT|
|flagState|OFF|
|flagState|ON|

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

<h2 id="tocS_FlagPutRequest">FlagPutRequest</h2>
<!-- backwards compatibility -->
<a id="schemaflagputrequest"></a>
<a id="schema_FlagPutRequest"></a>
<a id="tocSflagputrequest"></a>
<a id="tocsflagputrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultState|string|true|none|The state that the flag should have if there are no overrides for a particular portal|
|overrideState|string|false|none|A flag value that supercedes all other overrides, including portal-level values. Mostly used for things like emergency overrides|

#### Enumerated Values

|Property|Value|
|---|---|
|defaultState|ABSENT|
|defaultState|OFF|
|defaultState|ON|
|overrideState|ABSENT|
|overrideState|OFF|
|overrideState|ON|

<h2 id="tocS_FlagResponse">FlagResponse</h2>
<!-- backwards compatibility -->
<a id="schemaflagresponse"></a>
<a id="schema_FlagResponse"></a>
<a id="tocSflagresponse"></a>
<a id="tocsflagresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|integer(int32)|true|none|The ID of the app|
|defaultState|string|true|none|The flag state for any portal that doesn't have an override value|
|flagName|string|true|none|The name of the flag|
|overrideState|string|false|none|An optional flag value that overrides all others for this flag name and app, including portal-level values|

#### Enumerated Values

|Property|Value|
|---|---|
|defaultState|ABSENT|
|defaultState|OFF|
|defaultState|ON|
|overrideState|ABSENT|
|overrideState|OFF|
|overrideState|ON|

<h2 id="tocS_FlagsForAppResponse">FlagsForAppResponse</h2>
<!-- backwards compatibility -->
<a id="schemaflagsforappresponse"></a>
<a id="schema_FlagsForAppResponse"></a>
<a id="tocSflagsforappresponse"></a>
<a id="tocsflagsforappresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flagsForApp|[string]|true|none|An array of strings representing the feature flags associated with the application. Each string corresponds to a specific feature flag name.|

<h2 id="tocS_PortalFlagStateBatchDeleteRequest">PortalFlagStateBatchDeleteRequest</h2>
<!-- backwards compatibility -->
<a id="schemaportalflagstatebatchdeleterequest"></a>
<a id="schema_PortalFlagStateBatchDeleteRequest"></a>
<a id="tocSportalflagstatebatchdeleterequest"></a>
<a id="tocsportalflagstatebatchdeleterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portalIds|[integer(int32)]|true|none|An array of integers representing the unique identifiers of the portals for which the feature flag states are to be deleted.|

<h2 id="tocS_PortalFlagStateBatchPutRequest">PortalFlagStateBatchPutRequest</h2>
<!-- backwards compatibility -->
<a id="schemaportalflagstatebatchputrequest"></a>
<a id="schema_PortalFlagStateBatchPutRequest"></a>
<a id="tocSportalflagstatebatchputrequest"></a>
<a id="tocsportalflagstatebatchputrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portalStates|[[BatchPortalEntry](#schemabatchportalentry)]|true|none|An array of portal flag state entries to be updated. Each entry contains details about the portal ID and the desired flag state.|

<h2 id="tocS_PortalFlagStateBatchResponse">PortalFlagStateBatchResponse</h2>
<!-- backwards compatibility -->
<a id="schemaportalflagstatebatchresponse"></a>
<a id="schema_PortalFlagStateBatchResponse"></a>
<a id="tocSportalflagstatebatchresponse"></a>
<a id="tocsportalflagstatebatchresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portalFlagStates|[[PortalFlagStateResponse](#schemaportalflagstateresponse)]|true|none|An array of portal flag state responses, each representing the state of a feature flag for a specific portal.|

<h2 id="tocS_PortalFlagStatePutRequest">PortalFlagStatePutRequest</h2>
<!-- backwards compatibility -->
<a id="schemaportalflagstateputrequest"></a>
<a id="schema_PortalFlagStatePutRequest"></a>
<a id="tocSportalflagstateputrequest"></a>
<a id="tocsportalflagstateputrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flagState|string|true|none|The state that the given flag should be in for this portal|

#### Enumerated Values

|Property|Value|
|---|---|
|flagState|ABSENT|
|flagState|OFF|
|flagState|ON|

<h2 id="tocS_PortalFlagStateResponse">PortalFlagStateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaportalflagstateresponse"></a>
<a id="schema_PortalFlagStateResponse"></a>
<a id="tocSportalflagstateresponse"></a>
<a id="tocsportalflagstateresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|integer(int32)|true|none|The ID of the app|
|flagName|string|true|none|The name of the flag|
|flagState|string|true|none|The state of the flag for this portal|
|portalId|integer(int32)|true|none|The ID of the portal|

#### Enumerated Values

|Property|Value|
|---|---|
|flagState|ABSENT|
|flagState|OFF|
|flagState|ON|
