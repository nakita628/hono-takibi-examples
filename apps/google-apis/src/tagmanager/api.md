<h1 id="tag-manager-api">Tag Manager API v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API allows clients to access and modify container and tag configuration.

Base URLs:

* <a href="https://tagmanager.googleapis.com/">https://tagmanager.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/tag-manager">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/tagmanager.delete.containers|Delete your Google Tag Manager containers|
|https://www.googleapis.com/auth/tagmanager.edit.containers|Manage your Google Tag Manager container and its subcomponents, excluding versioning and publishing|
|https://www.googleapis.com/auth/tagmanager.edit.containerversions|Manage your Google Tag Manager container versions|
|https://www.googleapis.com/auth/tagmanager.manage.accounts|View and manage your Google Tag Manager accounts|
|https://www.googleapis.com/auth/tagmanager.manage.users|Manage user permissions of your Google Tag Manager account and container|
|https://www.googleapis.com/auth/tagmanager.publish|Publish your Google Tag Manager container versions|
|https://www.googleapis.com/auth/tagmanager.readonly|View your Google Tag Manager container and its subcomponents|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/tagmanager.delete.containers|Delete your Google Tag Manager containers|
|https://www.googleapis.com/auth/tagmanager.edit.containers|Manage your Google Tag Manager container and its subcomponents, excluding versioning and publishing|
|https://www.googleapis.com/auth/tagmanager.edit.containerversions|Manage your Google Tag Manager container versions|
|https://www.googleapis.com/auth/tagmanager.manage.accounts|View and manage your Google Tag Manager accounts|
|https://www.googleapis.com/auth/tagmanager.manage.users|Manage user permissions of your Google Tag Manager account and container|
|https://www.googleapis.com/auth/tagmanager.publish|Publish your Google Tag Manager container versions|
|https://www.googleapis.com/auth/tagmanager.readonly|View your Google Tag Manager container and its subcomponents|

<h1 id="tag-manager-api-accounts">accounts</h1>

## tagmanager.accounts.list

<a id="opIdtagmanager.accounts.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/accounts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tagmanager/v2/accounts`

Lists all GTM Accounts that a user has access to.

<h3 id="tagmanageraccountslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|includeGoogleTags|query|boolean|false|Also retrieve accounts associated with Google Tag when true.|
|pageToken|query|string|false|Continuation token for fetching the next page of results.|
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
  "account": [
    {
      "accountId": "string",
      "features": {
        "supportMultipleContainers": true,
        "supportUserPermissions": true
      },
      "fingerprint": "string",
      "name": "string",
      "path": "string",
      "shareData": true,
      "tagManagerUrl": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="tagmanageraccountslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAccountsResponse](#schemalistaccountsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.manage.accounts ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.manage.accounts ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly )
</aside>

## tagmanager.accounts.containers.lookup

<a id="opIdtagmanager.accounts.containers.lookup"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/accounts/containers:lookup \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tagmanager/v2/accounts/containers:lookup`

Looks up a Container by destination ID.

<h3 id="tagmanageraccountscontainerslookup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|destinationId|query|string|false|Destination ID linked to a GTM Container, e.g. AW-123456789. Example: accounts/containers:lookup?destination_id={destination_id}.|
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
  "accountId": "string",
  "containerId": "string",
  "domainName": [
    "string"
  ],
  "features": {
    "supportBuiltInVariables": true,
    "supportClients": true,
    "supportEnvironments": true,
    "supportFolders": true,
    "supportGtagConfigs": true,
    "supportTags": true,
    "supportTemplates": true,
    "supportTriggers": true,
    "supportUserPermissions": true,
    "supportVariables": true,
    "supportVersions": true,
    "supportWorkspaces": true,
    "supportZones": true
  },
  "fingerprint": "string",
  "name": "string",
  "notes": "string",
  "path": "string",
  "publicId": "string",
  "tagIds": [
    "string"
  ],
  "tagManagerUrl": "string",
  "taggingServerUrls": [
    "string"
  ],
  "usageContext": [
    "usageContextUnspecified"
  ]
}
```

<h3 id="tagmanageraccountscontainerslookup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Container](#schemacontainer)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly )
</aside>

## tagmanager.accounts.containers.workspaces.built_in_variables.list

<a id="opIdtagmanager.accounts.containers.workspaces.built_in_variables.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string/built_in_variables \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tagmanager/v2/{parent}/built_in_variables`

Lists all the enabled Built-In Variables of a GTM Container.

<h3 id="tagmanageraccountscontainersworkspacesbuiltinvariableslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}|
|pageToken|query|string|false|Continuation token for fetching the next page of results.|
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
  "builtInVariable": [
    {
      "accountId": "string",
      "containerId": "string",
      "name": "string",
      "path": "string",
      "type": "builtInVariableTypeUnspecified",
      "workspaceId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="tagmanageraccountscontainersworkspacesbuiltinvariableslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListEnabledBuiltInVariablesResponse](#schemalistenabledbuiltinvariablesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly )
</aside>

## tagmanager.accounts.containers.workspaces.built_in_variables.create

<a id="opIdtagmanager.accounts.containers.workspaces.built_in_variables.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string/built_in_variables \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /tagmanager/v2/{parent}/built_in_variables`

Creates one or more GTM Built-In Variables.

<h3 id="tagmanageraccountscontainersworkspacesbuiltinvariablescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}|
|type|query|[string]|false|The types of built-in variables to enable.|
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
|type|builtInVariableTypeUnspecified|
|type|pageUrl|
|type|pageHostname|
|type|pagePath|
|type|referrer|
|type|event|
|type|clickElement|
|type|clickClasses|
|type|clickId|
|type|clickTarget|
|type|clickUrl|
|type|clickText|
|type|firstPartyServingUrl|
|type|formElement|
|type|formClasses|
|type|formId|
|type|formTarget|
|type|formUrl|
|type|formText|
|type|errorMessage|
|type|errorUrl|
|type|errorLine|
|type|newHistoryUrl|
|type|oldHistoryUrl|
|type|newHistoryFragment|
|type|oldHistoryFragment|
|type|newHistoryState|
|type|oldHistoryState|
|type|historySource|
|type|containerVersion|
|type|debugMode|
|type|randomNumber|
|type|containerId|
|type|appId|
|type|appName|
|type|appVersionCode|
|type|appVersionName|
|type|language|
|type|osVersion|
|type|platform|
|type|sdkVersion|
|type|deviceName|
|type|resolution|
|type|advertiserId|
|type|advertisingTrackingEnabled|
|type|htmlId|
|type|environmentName|
|type|ampBrowserLanguage|
|type|ampCanonicalPath|
|type|ampCanonicalUrl|
|type|ampCanonicalHost|
|type|ampReferrer|
|type|ampTitle|
|type|ampClientId|
|type|ampClientTimezone|
|type|ampClientTimestamp|
|type|ampClientScreenWidth|
|type|ampClientScreenHeight|
|type|ampClientScrollX|
|type|ampClientScrollY|
|type|ampClientMaxScrollX|
|type|ampClientMaxScrollY|
|type|ampTotalEngagedTime|
|type|ampPageViewId|
|type|ampPageLoadTime|
|type|ampPageDownloadTime|
|type|ampGtmEvent|
|type|eventName|
|type|firebaseEventParameterCampaign|
|type|firebaseEventParameterCampaignAclid|
|type|firebaseEventParameterCampaignAnid|
|type|firebaseEventParameterCampaignClickTimestamp|
|type|firebaseEventParameterCampaignContent|
|type|firebaseEventParameterCampaignCp1|
|type|firebaseEventParameterCampaignGclid|
|type|firebaseEventParameterCampaignSource|
|type|firebaseEventParameterCampaignTerm|
|type|firebaseEventParameterCurrency|
|type|firebaseEventParameterDynamicLinkAcceptTime|
|type|firebaseEventParameterDynamicLinkLinkid|
|type|firebaseEventParameterNotificationMessageDeviceTime|
|type|firebaseEventParameterNotificationMessageId|
|type|firebaseEventParameterNotificationMessageName|
|type|firebaseEventParameterNotificationMessageTime|
|type|firebaseEventParameterNotificationTopic|
|type|firebaseEventParameterPreviousAppVersion|
|type|firebaseEventParameterPreviousOsVersion|
|type|firebaseEventParameterPrice|
|type|firebaseEventParameterProductId|
|type|firebaseEventParameterQuantity|
|type|firebaseEventParameterValue|
|type|videoProvider|
|type|videoUrl|
|type|videoTitle|
|type|videoDuration|
|type|videoPercent|
|type|videoVisible|
|type|videoStatus|
|type|videoCurrentTime|
|type|scrollDepthThreshold|
|type|scrollDepthUnits|
|type|scrollDepthDirection|
|type|elementVisibilityRatio|
|type|elementVisibilityTime|
|type|elementVisibilityFirstTime|
|type|elementVisibilityRecentTime|
|type|requestPath|
|type|requestMethod|
|type|clientName|
|type|queryString|
|type|serverPageLocationUrl|
|type|serverPageLocationPath|
|type|serverPageLocationHostname|
|type|visitorRegion|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "builtInVariable": [
    {
      "accountId": "string",
      "containerId": "string",
      "name": "string",
      "path": "string",
      "type": "builtInVariableTypeUnspecified",
      "workspaceId": "string"
    }
  ]
}
```

<h3 id="tagmanageraccountscontainersworkspacesbuiltinvariablescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CreateBuiltInVariableResponse](#schemacreatebuiltinvariableresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers )
</aside>

## tagmanager.accounts.containers.workspaces.clients.list

<a id="opIdtagmanager.accounts.containers.workspaces.clients.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string/clients \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tagmanager/v2/{parent}/clients`

Lists all GTM Clients of a GTM container workspace.

<h3 id="tagmanageraccountscontainersworkspacesclientslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}|
|pageToken|query|string|false|Continuation token for fetching the next page of results.|
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
  "client": [
    {
      "accountId": "string",
      "clientId": "string",
      "containerId": "string",
      "fingerprint": "string",
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "priority": 0,
      "tagManagerUrl": "string",
      "type": "string",
      "workspaceId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="tagmanageraccountscontainersworkspacesclientslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListClientsResponse](#schemalistclientsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly )
</aside>

## tagmanager.accounts.containers.workspaces.clients.create

<a id="opIdtagmanager.accounts.containers.workspaces.clients.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string/clients \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "clientId": "string",
    "containerId": "string",
    "fingerprint": "string",
    "name": "string",
    "notes": "string",
    "parameter": [
      {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      }
    ],
    "parentFolderId": "string",
    "path": "string",
    "priority": 0,
    "tagManagerUrl": "string",
    "type": "string",
    "workspaceId": "string"
  }'
```

`POST /tagmanager/v2/{parent}/clients`

Creates a GTM Client.

> Body parameter

```json
{
  "accountId": "string",
  "clientId": "string",
  "containerId": "string",
  "fingerprint": "string",
  "name": "string",
  "notes": "string",
  "parameter": [
    {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    }
  ],
  "parentFolderId": "string",
  "path": "string",
  "priority": 0,
  "tagManagerUrl": "string",
  "type": "string",
  "workspaceId": "string"
}
```

<h3 id="tagmanageraccountscontainersworkspacesclientscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}|
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
|body|body|[Client](#schemaclient)|false|none|
|» accountId|body|string|false|GTM Account ID.|
|» clientId|body|string|false|The Client ID uniquely identifies the GTM client.|
|» containerId|body|string|false|GTM Container ID.|
|» fingerprint|body|string|false|The fingerprint of the GTM Client as computed at storage time. This value is recomputed whenever the client is modified.|
|» name|body|string|false|Client display name. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update|
|» notes|body|string|false|User notes on how to apply this tag in the container. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|» parameter|body|[[Parameter](#schemaparameter)]|false|The client's parameters. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update|
|» parentFolderId|body|string|false|Parent folder id.|
|» path|body|string|false|GTM client's API relative path.|
|» priority|body|integer(int32)|false|Priority determines relative firing order. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update|
|» tagManagerUrl|body|string|false|Auto generated link to the tag manager UI|
|» type|body|string|false|Client type. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update|
|» workspaceId|body|string|false|GTM Workspace ID.|

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
  "accountId": "string",
  "clientId": "string",
  "containerId": "string",
  "fingerprint": "string",
  "name": "string",
  "notes": "string",
  "parameter": [
    {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    }
  ],
  "parentFolderId": "string",
  "path": "string",
  "priority": 0,
  "tagManagerUrl": "string",
  "type": "string",
  "workspaceId": "string"
}
```

<h3 id="tagmanageraccountscontainersworkspacesclientscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Client](#schemaclient)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers )
</aside>

## tagmanager.accounts.containers.list

<a id="opIdtagmanager.accounts.containers.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string/containers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tagmanager/v2/{parent}/containers`

Lists all Containers that belongs to a GTM Account.

<h3 id="tagmanageraccountscontainerslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|GTM Account's API relative path. Example: accounts/{account_id}.|
|pageToken|query|string|false|Continuation token for fetching the next page of results.|
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
  "container": [
    {
      "accountId": "string",
      "containerId": "string",
      "domainName": [
        "string"
      ],
      "features": {
        "supportBuiltInVariables": true,
        "supportClients": true,
        "supportEnvironments": true,
        "supportFolders": true,
        "supportGtagConfigs": true,
        "supportTags": true,
        "supportTemplates": true,
        "supportTriggers": true,
        "supportUserPermissions": true,
        "supportVariables": true,
        "supportVersions": true,
        "supportWorkspaces": true,
        "supportZones": true
      },
      "fingerprint": "string",
      "name": "string",
      "notes": "string",
      "path": "string",
      "publicId": "string",
      "tagIds": [
        "string"
      ],
      "tagManagerUrl": "string",
      "taggingServerUrls": [
        "string"
      ],
      "usageContext": [
        "usageContextUnspecified"
      ]
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="tagmanageraccountscontainerslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListContainersResponse](#schemalistcontainersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly )
</aside>

## tagmanager.accounts.containers.create

<a id="opIdtagmanager.accounts.containers.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string/containers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "containerId": "string",
    "domainName": [
      "string"
    ],
    "features": {
      "supportBuiltInVariables": true,
      "supportClients": true,
      "supportEnvironments": true,
      "supportFolders": true,
      "supportGtagConfigs": true,
      "supportTags": true,
      "supportTemplates": true,
      "supportTriggers": true,
      "supportUserPermissions": true,
      "supportVariables": true,
      "supportVersions": true,
      "supportWorkspaces": true,
      "supportZones": true
    },
    "fingerprint": "string",
    "name": "string",
    "notes": "string",
    "path": "string",
    "publicId": "string",
    "tagIds": [
      "string"
    ],
    "tagManagerUrl": "string",
    "taggingServerUrls": [
      "string"
    ],
    "usageContext": [
      "usageContextUnspecified"
    ]
  }'
```

`POST /tagmanager/v2/{parent}/containers`

Creates a Container.

> Body parameter

```json
{
  "accountId": "string",
  "containerId": "string",
  "domainName": [
    "string"
  ],
  "features": {
    "supportBuiltInVariables": true,
    "supportClients": true,
    "supportEnvironments": true,
    "supportFolders": true,
    "supportGtagConfigs": true,
    "supportTags": true,
    "supportTemplates": true,
    "supportTriggers": true,
    "supportUserPermissions": true,
    "supportVariables": true,
    "supportVersions": true,
    "supportWorkspaces": true,
    "supportZones": true
  },
  "fingerprint": "string",
  "name": "string",
  "notes": "string",
  "path": "string",
  "publicId": "string",
  "tagIds": [
    "string"
  ],
  "tagManagerUrl": "string",
  "taggingServerUrls": [
    "string"
  ],
  "usageContext": [
    "usageContextUnspecified"
  ]
}
```

<h3 id="tagmanageraccountscontainerscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|GTM Account's API relative path. Example: accounts/{account_id}.|
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
|body|body|[Container](#schemacontainer)|false|none|
|» accountId|body|string|false|GTM Account ID.|
|» containerId|body|string|false|The Container ID uniquely identifies the GTM Container.|
|» domainName|body|[string]|false|List of domain names associated with the Container. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update|
|» features|body|[ContainerFeatures](#schemacontainerfeatures)|false|Read-only Container feature set.|
|» fingerprint|body|string|false|The fingerprint of the GTM Container as computed at storage time. This value is recomputed whenever the account is modified.|
|» name|body|string|false|Container display name. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update|
|» notes|body|string|false|Container Notes. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update|
|» path|body|string|false|GTM Container's API relative path.|
|» publicId|body|string|false|Container Public ID.|
|» tagIds|body|[string]|false|All Tag IDs that refer to this Container.|
|» tagManagerUrl|body|string|false|Auto generated link to the tag manager UI|
|» taggingServerUrls|body|[string]|false|List of server-side container URLs for the Container. If multiple URLs are provided, all URL paths must match. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update|
|» usageContext|body|[string]|false|List of Usage Contexts for the Container. Valid values include: web, android, or ios. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» usageContext|usageContextUnspecified|
|» usageContext|web|
|» usageContext|android|
|» usageContext|ios|
|» usageContext|androidSdk5|
|» usageContext|iosSdk5|
|» usageContext|amp|
|» usageContext|server|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "containerId": "string",
  "domainName": [
    "string"
  ],
  "features": {
    "supportBuiltInVariables": true,
    "supportClients": true,
    "supportEnvironments": true,
    "supportFolders": true,
    "supportGtagConfigs": true,
    "supportTags": true,
    "supportTemplates": true,
    "supportTriggers": true,
    "supportUserPermissions": true,
    "supportVariables": true,
    "supportVersions": true,
    "supportWorkspaces": true,
    "supportZones": true
  },
  "fingerprint": "string",
  "name": "string",
  "notes": "string",
  "path": "string",
  "publicId": "string",
  "tagIds": [
    "string"
  ],
  "tagManagerUrl": "string",
  "taggingServerUrls": [
    "string"
  ],
  "usageContext": [
    "usageContextUnspecified"
  ]
}
```

<h3 id="tagmanageraccountscontainerscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Container](#schemacontainer)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers )
</aside>

## tagmanager.accounts.containers.destinations.list

<a id="opIdtagmanager.accounts.containers.destinations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string/destinations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tagmanager/v2/{parent}/destinations`

Lists all Destinations linked to a GTM Container.

<h3 id="tagmanageraccountscontainersdestinationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|GTM parent Container's API relative path. Example: accounts/{account_id}/containers/{container_id}|
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
  "destination": [
    {
      "accountId": "string",
      "containerId": "string",
      "destinationId": "string",
      "destinationLinkId": "string",
      "fingerprint": "string",
      "name": "string",
      "path": "string",
      "tagManagerUrl": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="tagmanageraccountscontainersdestinationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListDestinationsResponse](#schemalistdestinationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly )
</aside>

## tagmanager.accounts.containers.destinations.link

<a id="opIdtagmanager.accounts.containers.destinations.link"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string/destinations:link \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /tagmanager/v2/{parent}/destinations:link`

Adds a Destination to this Container and removes it from the Container to which it is currently linked.

<h3 id="tagmanageraccountscontainersdestinationslink-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|GTM parent Container's API relative path. Example: accounts/{account_id}/containers/{container_id}|
|allowUserPermissionFeatureUpdate|query|boolean|false|Must be set to true to allow features.user_permissions to change from false to true. If this operation causes an update but this bit is false, the operation will fail.|
|destinationId|query|string|false|Destination ID to be linked to the current container.|
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
  "accountId": "string",
  "containerId": "string",
  "destinationId": "string",
  "destinationLinkId": "string",
  "fingerprint": "string",
  "name": "string",
  "path": "string",
  "tagManagerUrl": "string"
}
```

<h3 id="tagmanageraccountscontainersdestinationslink-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Destination](#schemadestination)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers )
</aside>

## tagmanager.accounts.containers.environments.list

<a id="opIdtagmanager.accounts.containers.environments.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string/environments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tagmanager/v2/{parent}/environments`

Lists all GTM Environments of a GTM Container.

<h3 id="tagmanageraccountscontainersenvironmentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}|
|pageToken|query|string|false|Continuation token for fetching the next page of results.|
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
  "environment": [
    {
      "accountId": "string",
      "authorizationCode": "string",
      "authorizationTimestamp": "string",
      "containerId": "string",
      "containerVersionId": "string",
      "description": "string",
      "enableDebug": true,
      "environmentId": "string",
      "fingerprint": "string",
      "name": "string",
      "path": "string",
      "tagManagerUrl": "string",
      "type": "user",
      "url": "string",
      "workspaceId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="tagmanageraccountscontainersenvironmentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListEnvironmentsResponse](#schemalistenvironmentsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly )
</aside>

## tagmanager.accounts.containers.environments.create

<a id="opIdtagmanager.accounts.containers.environments.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string/environments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "authorizationCode": "string",
    "authorizationTimestamp": "string",
    "containerId": "string",
    "containerVersionId": "string",
    "description": "string",
    "enableDebug": true,
    "environmentId": "string",
    "fingerprint": "string",
    "name": "string",
    "path": "string",
    "tagManagerUrl": "string",
    "type": "user",
    "url": "string",
    "workspaceId": "string"
  }'
```

`POST /tagmanager/v2/{parent}/environments`

Creates a GTM Environment.

> Body parameter

```json
{
  "accountId": "string",
  "authorizationCode": "string",
  "authorizationTimestamp": "string",
  "containerId": "string",
  "containerVersionId": "string",
  "description": "string",
  "enableDebug": true,
  "environmentId": "string",
  "fingerprint": "string",
  "name": "string",
  "path": "string",
  "tagManagerUrl": "string",
  "type": "user",
  "url": "string",
  "workspaceId": "string"
}
```

<h3 id="tagmanageraccountscontainersenvironmentscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}|
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
|body|body|[Environment](#schemaenvironment)|false|none|
|» accountId|body|string|false|GTM Account ID.|
|» authorizationCode|body|string|false|The environment authorization code.|
|» authorizationTimestamp|body|string(google-datetime)|false|The last update time-stamp for the authorization code.|
|» containerId|body|string|false|GTM Container ID.|
|» containerVersionId|body|string|false|Represents a link to a container version.|
|» description|body|string|false|The environment description. Can be set or changed only on USER type environments. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update|
|» enableDebug|body|boolean|false|Whether or not to enable debug by default for the environment. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update|
|» environmentId|body|string|false|GTM Environment ID uniquely identifies the GTM Environment.|
|» fingerprint|body|string|false|The fingerprint of the GTM environment as computed at storage time. This value is recomputed whenever the environment is modified.|
|» name|body|string|false|The environment display name. Can be set or changed only on USER type environments. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update|
|» path|body|string|false|GTM Environment's API relative path.|
|» tagManagerUrl|body|string|false|Auto generated link to the tag manager UI|
|» type|body|string|false|The type of this environment.|
|» url|body|string|false|Default preview page url for the environment. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update|
|» workspaceId|body|string|false|Represents a link to a quick preview of a workspace.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» type|user|
|» type|live|
|» type|latest|
|» type|workspace|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "authorizationCode": "string",
  "authorizationTimestamp": "string",
  "containerId": "string",
  "containerVersionId": "string",
  "description": "string",
  "enableDebug": true,
  "environmentId": "string",
  "fingerprint": "string",
  "name": "string",
  "path": "string",
  "tagManagerUrl": "string",
  "type": "user",
  "url": "string",
  "workspaceId": "string"
}
```

<h3 id="tagmanageraccountscontainersenvironmentscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Environment](#schemaenvironment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers )
</aside>

## tagmanager.accounts.containers.workspaces.folders.list

<a id="opIdtagmanager.accounts.containers.workspaces.folders.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string/folders \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tagmanager/v2/{parent}/folders`

Lists all GTM Folders of a Container.

<h3 id="tagmanageraccountscontainersworkspacesfolderslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}|
|pageToken|query|string|false|Continuation token for fetching the next page of results.|
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
  "folder": [
    {
      "accountId": "string",
      "containerId": "string",
      "fingerprint": "string",
      "folderId": "string",
      "name": "string",
      "notes": "string",
      "path": "string",
      "tagManagerUrl": "string",
      "workspaceId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="tagmanageraccountscontainersworkspacesfolderslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListFoldersResponse](#schemalistfoldersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly )
</aside>

## tagmanager.accounts.containers.workspaces.folders.create

<a id="opIdtagmanager.accounts.containers.workspaces.folders.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string/folders \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "containerId": "string",
    "fingerprint": "string",
    "folderId": "string",
    "name": "string",
    "notes": "string",
    "path": "string",
    "tagManagerUrl": "string",
    "workspaceId": "string"
  }'
```

`POST /tagmanager/v2/{parent}/folders`

Creates a GTM Folder.

> Body parameter

```json
{
  "accountId": "string",
  "containerId": "string",
  "fingerprint": "string",
  "folderId": "string",
  "name": "string",
  "notes": "string",
  "path": "string",
  "tagManagerUrl": "string",
  "workspaceId": "string"
}
```

<h3 id="tagmanageraccountscontainersworkspacesfolderscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}|
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
|body|body|[Folder](#schemafolder)|false|none|
|» accountId|body|string|false|GTM Account ID.|
|» containerId|body|string|false|GTM Container ID.|
|» fingerprint|body|string|false|The fingerprint of the GTM Folder as computed at storage time. This value is recomputed whenever the folder is modified.|
|» folderId|body|string|false|The Folder ID uniquely identifies the GTM Folder.|
|» name|body|string|false|Folder display name. @mutable tagmanager.accounts.containers.workspaces.folders.create @mutable tagmanager.accounts.containers.workspaces.folders.update|
|» notes|body|string|false|User notes on how to apply this folder in the container. @mutable tagmanager.accounts.containers.workspaces.folders.create @mutable tagmanager.accounts.containers.workspaces.folders.update|
|» path|body|string|false|GTM Folder's API relative path.|
|» tagManagerUrl|body|string|false|Auto generated link to the tag manager UI|
|» workspaceId|body|string|false|GTM Workspace ID.|

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
  "accountId": "string",
  "containerId": "string",
  "fingerprint": "string",
  "folderId": "string",
  "name": "string",
  "notes": "string",
  "path": "string",
  "tagManagerUrl": "string",
  "workspaceId": "string"
}
```

<h3 id="tagmanageraccountscontainersworkspacesfolderscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Folder](#schemafolder)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers )
</aside>

## tagmanager.accounts.containers.workspaces.gtag_config.list

<a id="opIdtagmanager.accounts.containers.workspaces.gtag_config.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string/gtag_config \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tagmanager/v2/{parent}/gtag_config`

Lists all Google tag configs in a Container.

<h3 id="tagmanageraccountscontainersworkspacesgtagconfiglist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}|
|pageToken|query|string|false|Continuation token for fetching the next page of results.|
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
  "gtagConfig": [
    {
      "accountId": "string",
      "containerId": "string",
      "fingerprint": "string",
      "gtagConfigId": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "path": "string",
      "tagManagerUrl": "string",
      "type": "string",
      "workspaceId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="tagmanageraccountscontainersworkspacesgtagconfiglist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListGtagConfigResponse](#schemalistgtagconfigresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly )
</aside>

## tagmanager.accounts.containers.workspaces.gtag_config.create

<a id="opIdtagmanager.accounts.containers.workspaces.gtag_config.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string/gtag_config \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "containerId": "string",
    "fingerprint": "string",
    "gtagConfigId": "string",
    "parameter": [
      {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      }
    ],
    "path": "string",
    "tagManagerUrl": "string",
    "type": "string",
    "workspaceId": "string"
  }'
```

`POST /tagmanager/v2/{parent}/gtag_config`

Creates a Google tag config.

> Body parameter

```json
{
  "accountId": "string",
  "containerId": "string",
  "fingerprint": "string",
  "gtagConfigId": "string",
  "parameter": [
    {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    }
  ],
  "path": "string",
  "tagManagerUrl": "string",
  "type": "string",
  "workspaceId": "string"
}
```

<h3 id="tagmanageraccountscontainersworkspacesgtagconfigcreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}|
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
|body|body|[GtagConfig](#schemagtagconfig)|false|none|
|» accountId|body|string|false|Google tag account ID.|
|» containerId|body|string|false|Google tag container ID.|
|» fingerprint|body|string|false|The fingerprint of the Google tag config as computed at storage time. This value is recomputed whenever the config is modified.|
|» gtagConfigId|body|string|false|The ID uniquely identifies the Google tag config.|
|» parameter|body|[[Parameter](#schemaparameter)]|false|The Google tag config's parameters. @mutable tagmanager.accounts.containers.workspaces.gtag_config.create @mutable tagmanager.accounts.containers.workspaces.gtag_config.update|
|» path|body|string|false|Google tag config's API relative path.|
|» tagManagerUrl|body|string|false|Auto generated link to the tag manager UI|
|» type|body|string|false|Google tag config type. @required tagmanager.accounts.containers.workspaces.gtag_config.create @required tagmanager.accounts.containers.workspaces.gtag_config.update @mutable tagmanager.accounts.containers.workspaces.gtag_config.create @mutable tagmanager.accounts.containers.workspaces.gtag_config.update|
|» workspaceId|body|string|false|Google tag workspace ID. Only used by GTM containers. Set to 0 otherwise.|

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
  "accountId": "string",
  "containerId": "string",
  "fingerprint": "string",
  "gtagConfigId": "string",
  "parameter": [
    {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    }
  ],
  "path": "string",
  "tagManagerUrl": "string",
  "type": "string",
  "workspaceId": "string"
}
```

<h3 id="tagmanageraccountscontainersworkspacesgtagconfigcreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GtagConfig](#schemagtagconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers )
</aside>

## tagmanager.accounts.containers.workspaces.tags.list

<a id="opIdtagmanager.accounts.containers.workspaces.tags.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string/tags \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tagmanager/v2/{parent}/tags`

Lists all GTM Tags of a Container.

<h3 id="tagmanageraccountscontainersworkspacestagslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}|
|pageToken|query|string|false|Continuation token for fetching the next page of results.|
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
  "tag": [
    {
      "accountId": "string",
      "blockingRuleId": [
        "string"
      ],
      "blockingTriggerId": [
        "string"
      ],
      "consentSettings": {
        "consentStatus": "notSet",
        "consentType": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      },
      "containerId": "string",
      "fingerprint": "string",
      "firingRuleId": [
        "string"
      ],
      "firingTriggerId": [
        "string"
      ],
      "liveOnly": true,
      "monitoringMetadata": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "monitoringMetadataTagNameKey": "string",
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "paused": true,
      "priority": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "scheduleEndMs": "string",
      "scheduleStartMs": "string",
      "setupTag": [
        {
          "stopOnSetupFailure": true,
          "tagName": "string"
        }
      ],
      "tagFiringOption": "tagFiringOptionUnspecified",
      "tagId": "string",
      "tagManagerUrl": "string",
      "teardownTag": [
        {
          "stopTeardownOnFailure": true,
          "tagName": "string"
        }
      ],
      "type": "string",
      "workspaceId": "string"
    }
  ]
}
```

<h3 id="tagmanageraccountscontainersworkspacestagslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListTagsResponse](#schemalisttagsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly )
</aside>

## tagmanager.accounts.containers.workspaces.tags.create

<a id="opIdtagmanager.accounts.containers.workspaces.tags.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string/tags \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "blockingRuleId": [
      "string"
    ],
    "blockingTriggerId": [
      "string"
    ],
    "consentSettings": {
      "consentStatus": "notSet",
      "consentType": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      }
    },
    "containerId": "string",
    "fingerprint": "string",
    "firingRuleId": [
      "string"
    ],
    "firingTriggerId": [
      "string"
    ],
    "liveOnly": true,
    "monitoringMetadata": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "monitoringMetadataTagNameKey": "string",
    "name": "string",
    "notes": "string",
    "parameter": [
      {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      }
    ],
    "parentFolderId": "string",
    "path": "string",
    "paused": true,
    "priority": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "scheduleEndMs": "string",
    "scheduleStartMs": "string",
    "setupTag": [
      {
        "stopOnSetupFailure": true,
        "tagName": "string"
      }
    ],
    "tagFiringOption": "tagFiringOptionUnspecified",
    "tagId": "string",
    "tagManagerUrl": "string",
    "teardownTag": [
      {
        "stopTeardownOnFailure": true,
        "tagName": "string"
      }
    ],
    "type": "string",
    "workspaceId": "string"
  }'
```

`POST /tagmanager/v2/{parent}/tags`

Creates a GTM Tag.

> Body parameter

```json
{
  "accountId": "string",
  "blockingRuleId": [
    "string"
  ],
  "blockingTriggerId": [
    "string"
  ],
  "consentSettings": {
    "consentStatus": "notSet",
    "consentType": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    }
  },
  "containerId": "string",
  "fingerprint": "string",
  "firingRuleId": [
    "string"
  ],
  "firingTriggerId": [
    "string"
  ],
  "liveOnly": true,
  "monitoringMetadata": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "monitoringMetadataTagNameKey": "string",
  "name": "string",
  "notes": "string",
  "parameter": [
    {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    }
  ],
  "parentFolderId": "string",
  "path": "string",
  "paused": true,
  "priority": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "scheduleEndMs": "string",
  "scheduleStartMs": "string",
  "setupTag": [
    {
      "stopOnSetupFailure": true,
      "tagName": "string"
    }
  ],
  "tagFiringOption": "tagFiringOptionUnspecified",
  "tagId": "string",
  "tagManagerUrl": "string",
  "teardownTag": [
    {
      "stopTeardownOnFailure": true,
      "tagName": "string"
    }
  ],
  "type": "string",
  "workspaceId": "string"
}
```

<h3 id="tagmanageraccountscontainersworkspacestagscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}|
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
|body|body|[Tag](#schematag)|false|none|
|» accountId|body|string|false|GTM Account ID.|
|» blockingRuleId|body|[string]|false|Blocking rule IDs. If any of the listed rules evaluate to true, the tag will not fire. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|» blockingTriggerId|body|[string]|false|Blocking trigger IDs. If any of the listed triggers evaluate to true, the tag will not fire. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|» consentSettings|body|[TagConsentSetting](#schematagconsentsetting)|false|Consent settings of a tag. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|» containerId|body|string|false|GTM Container ID.|
|» fingerprint|body|string|false|The fingerprint of the GTM Tag as computed at storage time. This value is recomputed whenever the tag is modified.|
|» firingRuleId|body|[string]|false|Firing rule IDs. A tag will fire when any of the listed rules are true and all of its blockingRuleIds (if any specified) are false. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|» firingTriggerId|body|[string]|false|Firing trigger IDs. A tag will fire when any of the listed triggers are true and all of its blockingTriggerIds (if any specified) are false. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|» liveOnly|body|boolean|false|If set to true, this tag will only fire in the live environment (e.g. not in preview or debug mode). @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|» monitoringMetadata|body|[Parameter](#schemaparameter)|false|A map of key-value pairs of tag metadata to be included in the event data for tag monitoring. Notes: - This parameter must be type MAP. - Each parameter in the map are type TEMPLATE, however cannot contain variable references. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|» monitoringMetadataTagNameKey|body|string|false|If non-empty, then the tag display name will be included in the monitoring metadata map using the key specified. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|» name|body|string|false|Tag display name. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|» notes|body|string|false|User notes on how to apply this tag in the container. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|» parameter|body|[[Parameter](#schemaparameter)]|false|The tag's parameters. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|» parentFolderId|body|string|false|Parent folder id.|
|» path|body|string|false|GTM Tag's API relative path.|
|» paused|body|boolean|false|Indicates whether the tag is paused, which prevents the tag from firing. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|» priority|body|[Parameter](#schemaparameter)|false|User defined numeric priority of the tag. Tags are fired asynchronously in order of priority. Tags with higher numeric value fire first. A tag's priority can be a positive or negative value. The default value is 0. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|» scheduleEndMs|body|string(int64)|false|The end timestamp in milliseconds to schedule a tag. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|» scheduleStartMs|body|string(int64)|false|The start timestamp in milliseconds to schedule a tag. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|» setupTag|body|[[SetupTag](#schemasetuptag)]|false|The list of setup tags. Currently we only allow one.|
|» tagFiringOption|body|string|false|Option to fire this tag.|
|» tagId|body|string|false|The Tag ID uniquely identifies the GTM Tag.|
|» tagManagerUrl|body|string|false|Auto generated link to the tag manager UI|
|» teardownTag|body|[[TeardownTag](#schemateardowntag)]|false|The list of teardown tags. Currently we only allow one.|
|» type|body|string|false|GTM Tag Type. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|» workspaceId|body|string|false|GTM Workspace ID.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» tagFiringOption|tagFiringOptionUnspecified|
|» tagFiringOption|unlimited|
|» tagFiringOption|oncePerEvent|
|» tagFiringOption|oncePerLoad|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "blockingRuleId": [
    "string"
  ],
  "blockingTriggerId": [
    "string"
  ],
  "consentSettings": {
    "consentStatus": "notSet",
    "consentType": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    }
  },
  "containerId": "string",
  "fingerprint": "string",
  "firingRuleId": [
    "string"
  ],
  "firingTriggerId": [
    "string"
  ],
  "liveOnly": true,
  "monitoringMetadata": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "monitoringMetadataTagNameKey": "string",
  "name": "string",
  "notes": "string",
  "parameter": [
    {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    }
  ],
  "parentFolderId": "string",
  "path": "string",
  "paused": true,
  "priority": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "scheduleEndMs": "string",
  "scheduleStartMs": "string",
  "setupTag": [
    {
      "stopOnSetupFailure": true,
      "tagName": "string"
    }
  ],
  "tagFiringOption": "tagFiringOptionUnspecified",
  "tagId": "string",
  "tagManagerUrl": "string",
  "teardownTag": [
    {
      "stopTeardownOnFailure": true,
      "tagName": "string"
    }
  ],
  "type": "string",
  "workspaceId": "string"
}
```

<h3 id="tagmanageraccountscontainersworkspacestagscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Tag](#schematag)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers )
</aside>

## tagmanager.accounts.containers.workspaces.templates.list

<a id="opIdtagmanager.accounts.containers.workspaces.templates.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string/templates \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tagmanager/v2/{parent}/templates`

Lists all GTM Templates of a GTM container workspace.

<h3 id="tagmanageraccountscontainersworkspacestemplateslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}|
|pageToken|query|string|false|Continuation token for fetching the next page of results.|
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
  "template": [
    {
      "accountId": "string",
      "containerId": "string",
      "fingerprint": "string",
      "galleryReference": {
        "host": "string",
        "isModified": true,
        "owner": "string",
        "repository": "string",
        "signature": "string",
        "version": "string"
      },
      "name": "string",
      "path": "string",
      "tagManagerUrl": "string",
      "templateData": "string",
      "templateId": "string",
      "workspaceId": "string"
    }
  ]
}
```

<h3 id="tagmanageraccountscontainersworkspacestemplateslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListTemplatesResponse](#schemalisttemplatesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly )
</aside>

## tagmanager.accounts.containers.workspaces.templates.create

<a id="opIdtagmanager.accounts.containers.workspaces.templates.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string/templates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "containerId": "string",
    "fingerprint": "string",
    "galleryReference": {
      "host": "string",
      "isModified": true,
      "owner": "string",
      "repository": "string",
      "signature": "string",
      "version": "string"
    },
    "name": "string",
    "path": "string",
    "tagManagerUrl": "string",
    "templateData": "string",
    "templateId": "string",
    "workspaceId": "string"
  }'
```

`POST /tagmanager/v2/{parent}/templates`

Creates a GTM Custom Template.

> Body parameter

```json
{
  "accountId": "string",
  "containerId": "string",
  "fingerprint": "string",
  "galleryReference": {
    "host": "string",
    "isModified": true,
    "owner": "string",
    "repository": "string",
    "signature": "string",
    "version": "string"
  },
  "name": "string",
  "path": "string",
  "tagManagerUrl": "string",
  "templateData": "string",
  "templateId": "string",
  "workspaceId": "string"
}
```

<h3 id="tagmanageraccountscontainersworkspacestemplatescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}|
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
|body|body|[CustomTemplate](#schemacustomtemplate)|false|none|
|» accountId|body|string|false|GTM Account ID.|
|» containerId|body|string|false|GTM Container ID.|
|» fingerprint|body|string|false|The fingerprint of the GTM Custom Template as computed at storage time. This value is recomputed whenever the template is modified.|
|» galleryReference|body|[GalleryReference](#schemagalleryreference)|false|A reference to the Community Template Gallery entry.|
|» name|body|string|false|Custom Template display name.|
|» path|body|string|false|GTM Custom Template's API relative path.|
|» tagManagerUrl|body|string|false|Auto generated link to the tag manager UI|
|» templateData|body|string|false|The custom template in text format.|
|» templateId|body|string|false|The Custom Template ID uniquely identifies the GTM custom template.|
|» workspaceId|body|string|false|GTM Workspace ID.|

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
  "accountId": "string",
  "containerId": "string",
  "fingerprint": "string",
  "galleryReference": {
    "host": "string",
    "isModified": true,
    "owner": "string",
    "repository": "string",
    "signature": "string",
    "version": "string"
  },
  "name": "string",
  "path": "string",
  "tagManagerUrl": "string",
  "templateData": "string",
  "templateId": "string",
  "workspaceId": "string"
}
```

<h3 id="tagmanageraccountscontainersworkspacestemplatescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CustomTemplate](#schemacustomtemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers )
</aside>

## tagmanager.accounts.containers.workspaces.triggers.list

<a id="opIdtagmanager.accounts.containers.workspaces.triggers.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string/triggers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tagmanager/v2/{parent}/triggers`

Lists all GTM Triggers of a Container.

<h3 id="tagmanageraccountscontainersworkspacestriggerslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}|
|pageToken|query|string|false|Continuation token for fetching the next page of results.|
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
  "trigger": [
    {
      "accountId": "string",
      "autoEventFilter": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "checkValidation": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "containerId": "string",
      "continuousTimeMinMilliseconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "customEventFilter": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "eventName": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "filter": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "fingerprint": "string",
      "horizontalScrollPercentageList": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "interval": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "intervalSeconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "limit": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "maxTimerLengthSeconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "selector": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "tagManagerUrl": "string",
      "totalTimeMinMilliseconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "triggerId": "string",
      "type": "eventTypeUnspecified",
      "uniqueTriggerId": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "verticalScrollPercentageList": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "visibilitySelector": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "visiblePercentageMax": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "visiblePercentageMin": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "waitForTags": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "waitForTagsTimeout": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "workspaceId": "string"
    }
  ]
}
```

<h3 id="tagmanageraccountscontainersworkspacestriggerslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListTriggersResponse](#schemalisttriggersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly )
</aside>

## tagmanager.accounts.containers.workspaces.triggers.create

<a id="opIdtagmanager.accounts.containers.workspaces.triggers.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string/triggers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "autoEventFilter": [
      {
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "type": "conditionTypeUnspecified"
      }
    ],
    "checkValidation": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "containerId": "string",
    "continuousTimeMinMilliseconds": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "customEventFilter": [
      {
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "type": "conditionTypeUnspecified"
      }
    ],
    "eventName": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "filter": [
      {
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "type": "conditionTypeUnspecified"
      }
    ],
    "fingerprint": "string",
    "horizontalScrollPercentageList": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "interval": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "intervalSeconds": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "limit": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "maxTimerLengthSeconds": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "name": "string",
    "notes": "string",
    "parameter": [
      {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      }
    ],
    "parentFolderId": "string",
    "path": "string",
    "selector": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "tagManagerUrl": "string",
    "totalTimeMinMilliseconds": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "triggerId": "string",
    "type": "eventTypeUnspecified",
    "uniqueTriggerId": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "verticalScrollPercentageList": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "visibilitySelector": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "visiblePercentageMax": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "visiblePercentageMin": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "waitForTags": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "waitForTagsTimeout": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "workspaceId": "string"
  }'
```

`POST /tagmanager/v2/{parent}/triggers`

Creates a GTM Trigger.

> Body parameter

```json
{
  "accountId": "string",
  "autoEventFilter": [
    {
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "type": "conditionTypeUnspecified"
    }
  ],
  "checkValidation": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "containerId": "string",
  "continuousTimeMinMilliseconds": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "customEventFilter": [
    {
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "type": "conditionTypeUnspecified"
    }
  ],
  "eventName": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "filter": [
    {
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "type": "conditionTypeUnspecified"
    }
  ],
  "fingerprint": "string",
  "horizontalScrollPercentageList": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "interval": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "intervalSeconds": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "limit": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "maxTimerLengthSeconds": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "name": "string",
  "notes": "string",
  "parameter": [
    {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    }
  ],
  "parentFolderId": "string",
  "path": "string",
  "selector": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "tagManagerUrl": "string",
  "totalTimeMinMilliseconds": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "triggerId": "string",
  "type": "eventTypeUnspecified",
  "uniqueTriggerId": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "verticalScrollPercentageList": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "visibilitySelector": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "visiblePercentageMax": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "visiblePercentageMin": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "waitForTags": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "waitForTagsTimeout": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "workspaceId": "string"
}
```

<h3 id="tagmanageraccountscontainersworkspacestriggerscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}|
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
|body|body|[Trigger](#schematrigger)|false|none|
|» accountId|body|string|false|GTM Account ID.|
|» autoEventFilter|body|[[Condition](#schemacondition)]|false|Used in the case of auto event tracking. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|» checkValidation|body|[Parameter](#schemaparameter)|false|Whether or not we should only fire tags if the form submit or link click event is not cancelled by some other event handler (e.g. because of validation). Only valid for Form Submission and Link Click triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|» containerId|body|string|false|GTM Container ID.|
|» continuousTimeMinMilliseconds|body|[Parameter](#schemaparameter)|false|A visibility trigger minimum continuous visible time (in milliseconds). Only valid for AMP Visibility trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|» customEventFilter|body|[[Condition](#schemacondition)]|false|Used in the case of custom event, which is fired iff all Conditions are true. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|» eventName|body|[Parameter](#schemaparameter)|false|Name of the GTM event that is fired. Only valid for Timer triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|» filter|body|[[Condition](#schemacondition)]|false|The trigger will only fire iff all Conditions are true. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|» fingerprint|body|string|false|The fingerprint of the GTM Trigger as computed at storage time. This value is recomputed whenever the trigger is modified.|
|» horizontalScrollPercentageList|body|[Parameter](#schemaparameter)|false|List of integer percentage values for scroll triggers. The trigger will fire when each percentage is reached when the view is scrolled horizontally. Only valid for AMP scroll triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|» interval|body|[Parameter](#schemaparameter)|false|Time between triggering recurring Timer Events (in milliseconds). Only valid for Timer triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|» intervalSeconds|body|[Parameter](#schemaparameter)|false|Time between Timer Events to fire (in seconds). Only valid for AMP Timer trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|» limit|body|[Parameter](#schemaparameter)|false|Limit of the number of GTM events this Timer Trigger will fire. If no limit is set, we will continue to fire GTM events until the user leaves the page. Only valid for Timer triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|» maxTimerLengthSeconds|body|[Parameter](#schemaparameter)|false|Max time to fire Timer Events (in seconds). Only valid for AMP Timer trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|» name|body|string|false|Trigger display name. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|» notes|body|string|false|User notes on how to apply this trigger in the container. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|» parameter|body|[[Parameter](#schemaparameter)]|false|Additional parameters. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|» parentFolderId|body|string|false|Parent folder id.|
|» path|body|string|false|GTM Trigger's API relative path.|
|» selector|body|[Parameter](#schemaparameter)|false|A click trigger CSS selector (i.e. "a", "button" etc.). Only valid for AMP Click trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|» tagManagerUrl|body|string|false|Auto generated link to the tag manager UI|
|» totalTimeMinMilliseconds|body|[Parameter](#schemaparameter)|false|A visibility trigger minimum total visible time (in milliseconds). Only valid for AMP Visibility trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|» triggerId|body|string|false|The Trigger ID uniquely identifies the GTM Trigger.|
|» type|body|string|false|Defines the data layer event that causes this trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|» uniqueTriggerId|body|[Parameter](#schemaparameter)|false|Globally unique id of the trigger that auto-generates this (a Form Submit, Link Click or Timer listener) if any. Used to make incompatible auto-events work together with trigger filtering based on trigger ids. This value is populated during output generation since the tags implied by triggers don't exist until then. Only valid for Form Submit, Link Click and Timer triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|» verticalScrollPercentageList|body|[Parameter](#schemaparameter)|false|List of integer percentage values for scroll triggers. The trigger will fire when each percentage is reached when the view is scrolled vertically. Only valid for AMP scroll triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|» visibilitySelector|body|[Parameter](#schemaparameter)|false|A visibility trigger CSS selector (i.e. "#id"). Only valid for AMP Visibility trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|» visiblePercentageMax|body|[Parameter](#schemaparameter)|false|A visibility trigger maximum percent visibility. Only valid for AMP Visibility trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|» visiblePercentageMin|body|[Parameter](#schemaparameter)|false|A visibility trigger minimum percent visibility. Only valid for AMP Visibility trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|» waitForTags|body|[Parameter](#schemaparameter)|false|Whether or not we should delay the form submissions or link opening until all of the tags have fired (by preventing the default action and later simulating the default action). Only valid for Form Submission and Link Click triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|» waitForTagsTimeout|body|[Parameter](#schemaparameter)|false|How long to wait (in milliseconds) for tags to fire when 'waits_for_tags' above evaluates to true. Only valid for Form Submission and Link Click triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|» workspaceId|body|string|false|GTM Workspace ID.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» type|eventTypeUnspecified|
|» type|pageview|
|» type|domReady|
|» type|windowLoaded|
|» type|customEvent|
|» type|triggerGroup|
|» type|init|
|» type|consentInit|
|» type|serverPageview|
|» type|always|
|» type|firebaseAppException|
|» type|firebaseAppUpdate|
|» type|firebaseCampaign|
|» type|firebaseFirstOpen|
|» type|firebaseInAppPurchase|
|» type|firebaseNotificationDismiss|
|» type|firebaseNotificationForeground|
|» type|firebaseNotificationOpen|
|» type|firebaseNotificationReceive|
|» type|firebaseOsUpdate|
|» type|firebaseSessionStart|
|» type|firebaseUserEngagement|
|» type|formSubmission|
|» type|click|
|» type|linkClick|
|» type|jsError|
|» type|historyChange|
|» type|timer|
|» type|ampClick|
|» type|ampTimer|
|» type|ampScroll|
|» type|ampVisibility|
|» type|youTubeVideo|
|» type|scrollDepth|
|» type|elementVisibility|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "autoEventFilter": [
    {
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "type": "conditionTypeUnspecified"
    }
  ],
  "checkValidation": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "containerId": "string",
  "continuousTimeMinMilliseconds": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "customEventFilter": [
    {
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "type": "conditionTypeUnspecified"
    }
  ],
  "eventName": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "filter": [
    {
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "type": "conditionTypeUnspecified"
    }
  ],
  "fingerprint": "string",
  "horizontalScrollPercentageList": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "interval": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "intervalSeconds": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "limit": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "maxTimerLengthSeconds": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "name": "string",
  "notes": "string",
  "parameter": [
    {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    }
  ],
  "parentFolderId": "string",
  "path": "string",
  "selector": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "tagManagerUrl": "string",
  "totalTimeMinMilliseconds": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "triggerId": "string",
  "type": "eventTypeUnspecified",
  "uniqueTriggerId": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "verticalScrollPercentageList": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "visibilitySelector": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "visiblePercentageMax": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "visiblePercentageMin": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "waitForTags": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "waitForTagsTimeout": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "workspaceId": "string"
}
```

<h3 id="tagmanageraccountscontainersworkspacestriggerscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Trigger](#schematrigger)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers )
</aside>

## tagmanager.accounts.user_permissions.list

<a id="opIdtagmanager.accounts.user_permissions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string/user_permissions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tagmanager/v2/{parent}/user_permissions`

List all users that have access to the account along with Account and Container user access granted to each of them.

<h3 id="tagmanageraccountsuserpermissionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|GTM Account's API relative path. Example: accounts/{account_id}|
|pageToken|query|string|false|Continuation token for fetching the next page of results.|
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
  "userPermission": [
    {
      "accountAccess": {
        "permission": "accountPermissionUnspecified"
      },
      "accountId": "string",
      "containerAccess": [
        {
          "containerId": "string",
          "permission": "containerPermissionUnspecified"
        }
      ],
      "emailAddress": "string",
      "path": "string"
    }
  ]
}
```

<h3 id="tagmanageraccountsuserpermissionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListUserPermissionsResponse](#schemalistuserpermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.manage.users ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.manage.users )
</aside>

## tagmanager.accounts.user_permissions.create

<a id="opIdtagmanager.accounts.user_permissions.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string/user_permissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountAccess": {
      "permission": "accountPermissionUnspecified"
    },
    "accountId": "string",
    "containerAccess": [
      {
        "containerId": "string",
        "permission": "containerPermissionUnspecified"
      }
    ],
    "emailAddress": "string",
    "path": "string"
  }'
```

`POST /tagmanager/v2/{parent}/user_permissions`

Creates a user's Account & Container access.

> Body parameter

```json
{
  "accountAccess": {
    "permission": "accountPermissionUnspecified"
  },
  "accountId": "string",
  "containerAccess": [
    {
      "containerId": "string",
      "permission": "containerPermissionUnspecified"
    }
  ],
  "emailAddress": "string",
  "path": "string"
}
```

<h3 id="tagmanageraccountsuserpermissionscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|GTM Account's API relative path. Example: accounts/{account_id}|
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
|body|body|[UserPermission](#schemauserpermission)|false|none|
|» accountAccess|body|[AccountAccess](#schemaaccountaccess)|false|GTM Account access permissions. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update|
|» accountId|body|string|false|The Account ID uniquely identifies the GTM Account.|
|» containerAccess|body|[[ContainerAccess](#schemacontaineraccess)]|false|GTM Container access permissions. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update|
|» emailAddress|body|string|false|User's email address. @mutable tagmanager.accounts.permissions.create|
|» path|body|string|false|GTM UserPermission's API relative path.|

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
  "accountAccess": {
    "permission": "accountPermissionUnspecified"
  },
  "accountId": "string",
  "containerAccess": [
    {
      "containerId": "string",
      "permission": "containerPermissionUnspecified"
    }
  ],
  "emailAddress": "string",
  "path": "string"
}
```

<h3 id="tagmanageraccountsuserpermissionscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[UserPermission](#schemauserpermission)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.manage.users ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.manage.users )
</aside>

## tagmanager.accounts.containers.workspaces.variables.list

<a id="opIdtagmanager.accounts.containers.workspaces.variables.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string/variables \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tagmanager/v2/{parent}/variables`

Lists all GTM Variables of a Container.

<h3 id="tagmanageraccountscontainersworkspacesvariableslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}|
|pageToken|query|string|false|Continuation token for fetching the next page of results.|
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
  "variable": [
    {
      "accountId": "string",
      "containerId": "string",
      "disablingTriggerId": [
        "string"
      ],
      "enablingTriggerId": [
        "string"
      ],
      "fingerprint": "string",
      "formatValue": {
        "caseConversionType": "none",
        "convertFalseToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "convertNullToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "convertTrueToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "convertUndefinedToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      },
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "scheduleEndMs": "string",
      "scheduleStartMs": "string",
      "tagManagerUrl": "string",
      "type": "string",
      "variableId": "string",
      "workspaceId": "string"
    }
  ]
}
```

<h3 id="tagmanageraccountscontainersworkspacesvariableslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListVariablesResponse](#schemalistvariablesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly )
</aside>

## tagmanager.accounts.containers.workspaces.variables.create

<a id="opIdtagmanager.accounts.containers.workspaces.variables.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string/variables \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "containerId": "string",
    "disablingTriggerId": [
      "string"
    ],
    "enablingTriggerId": [
      "string"
    ],
    "fingerprint": "string",
    "formatValue": {
      "caseConversionType": "none",
      "convertFalseToValue": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "convertNullToValue": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "convertTrueToValue": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "convertUndefinedToValue": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      }
    },
    "name": "string",
    "notes": "string",
    "parameter": [
      {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      }
    ],
    "parentFolderId": "string",
    "path": "string",
    "scheduleEndMs": "string",
    "scheduleStartMs": "string",
    "tagManagerUrl": "string",
    "type": "string",
    "variableId": "string",
    "workspaceId": "string"
  }'
```

`POST /tagmanager/v2/{parent}/variables`

Creates a GTM Variable.

> Body parameter

```json
{
  "accountId": "string",
  "containerId": "string",
  "disablingTriggerId": [
    "string"
  ],
  "enablingTriggerId": [
    "string"
  ],
  "fingerprint": "string",
  "formatValue": {
    "caseConversionType": "none",
    "convertFalseToValue": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "convertNullToValue": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "convertTrueToValue": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "convertUndefinedToValue": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    }
  },
  "name": "string",
  "notes": "string",
  "parameter": [
    {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    }
  ],
  "parentFolderId": "string",
  "path": "string",
  "scheduleEndMs": "string",
  "scheduleStartMs": "string",
  "tagManagerUrl": "string",
  "type": "string",
  "variableId": "string",
  "workspaceId": "string"
}
```

<h3 id="tagmanageraccountscontainersworkspacesvariablescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}|
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
|body|body|[Variable](#schemavariable)|false|none|
|» accountId|body|string|false|GTM Account ID.|
|» containerId|body|string|false|GTM Container ID.|
|» disablingTriggerId|body|[string]|false|For mobile containers only: A list of trigger IDs for disabling conditional variables; the variable is enabled if one of the enabling trigger is true while all the disabling trigger are false. Treated as an unordered set. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update|
|» enablingTriggerId|body|[string]|false|For mobile containers only: A list of trigger IDs for enabling conditional variables; the variable is enabled if one of the enabling triggers is true while all the disabling triggers are false. Treated as an unordered set. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update|
|» fingerprint|body|string|false|The fingerprint of the GTM Variable as computed at storage time. This value is recomputed whenever the variable is modified.|
|» formatValue|body|[VariableFormatValue](#schemavariableformatvalue)|false|Option to convert a variable value to other value.|
|» name|body|string|false|Variable display name. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update|
|» notes|body|string|false|User notes on how to apply this variable in the container. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update|
|» parameter|body|[[Parameter](#schemaparameter)]|false|The variable's parameters. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update|
|» parentFolderId|body|string|false|Parent folder id.|
|» path|body|string|false|GTM Variable's API relative path.|
|» scheduleEndMs|body|string(int64)|false|The end timestamp in milliseconds to schedule a variable. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update|
|» scheduleStartMs|body|string(int64)|false|The start timestamp in milliseconds to schedule a variable. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update|
|» tagManagerUrl|body|string|false|Auto generated link to the tag manager UI|
|» type|body|string|false|GTM Variable Type. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update|
|» variableId|body|string|false|The Variable ID uniquely identifies the GTM Variable.|
|» workspaceId|body|string|false|GTM Workspace ID.|

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
  "accountId": "string",
  "containerId": "string",
  "disablingTriggerId": [
    "string"
  ],
  "enablingTriggerId": [
    "string"
  ],
  "fingerprint": "string",
  "formatValue": {
    "caseConversionType": "none",
    "convertFalseToValue": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "convertNullToValue": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "convertTrueToValue": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "convertUndefinedToValue": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    }
  },
  "name": "string",
  "notes": "string",
  "parameter": [
    {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    }
  ],
  "parentFolderId": "string",
  "path": "string",
  "scheduleEndMs": "string",
  "scheduleStartMs": "string",
  "tagManagerUrl": "string",
  "type": "string",
  "variableId": "string",
  "workspaceId": "string"
}
```

<h3 id="tagmanageraccountscontainersworkspacesvariablescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Variable](#schemavariable)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers )
</aside>

## tagmanager.accounts.containers.version_headers.list

<a id="opIdtagmanager.accounts.containers.version_headers.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string/version_headers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tagmanager/v2/{parent}/version_headers`

Lists all Container Versions of a GTM Container.

<h3 id="tagmanageraccountscontainersversionheaderslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}|
|includeDeleted|query|boolean|false|Also retrieve deleted (archived) versions when true.|
|pageToken|query|string|false|Continuation token for fetching the next page of results.|
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
  "containerVersionHeader": [
    {
      "accountId": "string",
      "containerId": "string",
      "containerVersionId": "string",
      "deleted": true,
      "name": "string",
      "numClients": "string",
      "numCustomTemplates": "string",
      "numGtagConfigs": "string",
      "numMacros": "string",
      "numRules": "string",
      "numTags": "string",
      "numTransformations": "string",
      "numTriggers": "string",
      "numVariables": "string",
      "numZones": "string",
      "path": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="tagmanageraccountscontainersversionheaderslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListContainerVersionsResponse](#schemalistcontainerversionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containerversions ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containerversions ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly )
</aside>

## tagmanager.accounts.containers.version_headers.latest

<a id="opIdtagmanager.accounts.containers.version_headers.latest"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string/version_headers:latest \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tagmanager/v2/{parent}/version_headers:latest`

Gets the latest container version header

<h3 id="tagmanageraccountscontainersversionheaderslatest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}|
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
  "accountId": "string",
  "containerId": "string",
  "containerVersionId": "string",
  "deleted": true,
  "name": "string",
  "numClients": "string",
  "numCustomTemplates": "string",
  "numGtagConfigs": "string",
  "numMacros": "string",
  "numRules": "string",
  "numTags": "string",
  "numTransformations": "string",
  "numTriggers": "string",
  "numVariables": "string",
  "numZones": "string",
  "path": "string"
}
```

<h3 id="tagmanageraccountscontainersversionheaderslatest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ContainerVersionHeader](#schemacontainerversionheader)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly )
</aside>

## tagmanager.accounts.containers.versions.live

<a id="opIdtagmanager.accounts.containers.versions.live"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string/versions:live \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tagmanager/v2/{parent}/versions:live`

Gets the live (i.e. published) container version

<h3 id="tagmanageraccountscontainersversionslive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}|
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
  "accountId": "string",
  "builtInVariable": [
    {
      "accountId": "string",
      "containerId": "string",
      "name": "string",
      "path": "string",
      "type": "builtInVariableTypeUnspecified",
      "workspaceId": "string"
    }
  ],
  "client": [
    {
      "accountId": "string",
      "clientId": "string",
      "containerId": "string",
      "fingerprint": "string",
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "priority": 0,
      "tagManagerUrl": "string",
      "type": "string",
      "workspaceId": "string"
    }
  ],
  "container": {
    "accountId": "string",
    "containerId": "string",
    "domainName": [
      "string"
    ],
    "features": {
      "supportBuiltInVariables": true,
      "supportClients": true,
      "supportEnvironments": true,
      "supportFolders": true,
      "supportGtagConfigs": true,
      "supportTags": true,
      "supportTemplates": true,
      "supportTriggers": true,
      "supportUserPermissions": true,
      "supportVariables": true,
      "supportVersions": true,
      "supportWorkspaces": true,
      "supportZones": true
    },
    "fingerprint": "string",
    "name": "string",
    "notes": "string",
    "path": "string",
    "publicId": "string",
    "tagIds": [
      "string"
    ],
    "tagManagerUrl": "string",
    "taggingServerUrls": [
      "string"
    ],
    "usageContext": [
      "usageContextUnspecified"
    ]
  },
  "containerId": "string",
  "containerVersionId": "string",
  "customTemplate": [
    {
      "accountId": "string",
      "containerId": "string",
      "fingerprint": "string",
      "galleryReference": {
        "host": "string",
        "isModified": true,
        "owner": "string",
        "repository": "string",
        "signature": "string",
        "version": "string"
      },
      "name": "string",
      "path": "string",
      "tagManagerUrl": "string",
      "templateData": "string",
      "templateId": "string",
      "workspaceId": "string"
    }
  ],
  "deleted": true,
  "description": "string",
  "fingerprint": "string",
  "folder": [
    {
      "accountId": "string",
      "containerId": "string",
      "fingerprint": "string",
      "folderId": "string",
      "name": "string",
      "notes": "string",
      "path": "string",
      "tagManagerUrl": "string",
      "workspaceId": "string"
    }
  ],
  "gtagConfig": [
    {
      "accountId": "string",
      "containerId": "string",
      "fingerprint": "string",
      "gtagConfigId": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "path": "string",
      "tagManagerUrl": "string",
      "type": "string",
      "workspaceId": "string"
    }
  ],
  "name": "string",
  "path": "string",
  "tag": [
    {
      "accountId": "string",
      "blockingRuleId": [
        "string"
      ],
      "blockingTriggerId": [
        "string"
      ],
      "consentSettings": {
        "consentStatus": "notSet",
        "consentType": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      },
      "containerId": "string",
      "fingerprint": "string",
      "firingRuleId": [
        "string"
      ],
      "firingTriggerId": [
        "string"
      ],
      "liveOnly": true,
      "monitoringMetadata": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "monitoringMetadataTagNameKey": "string",
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "paused": true,
      "priority": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "scheduleEndMs": "string",
      "scheduleStartMs": "string",
      "setupTag": [
        {
          "stopOnSetupFailure": true,
          "tagName": "string"
        }
      ],
      "tagFiringOption": "tagFiringOptionUnspecified",
      "tagId": "string",
      "tagManagerUrl": "string",
      "teardownTag": [
        {
          "stopTeardownOnFailure": true,
          "tagName": "string"
        }
      ],
      "type": "string",
      "workspaceId": "string"
    }
  ],
  "tagManagerUrl": "string",
  "trigger": [
    {
      "accountId": "string",
      "autoEventFilter": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "checkValidation": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "containerId": "string",
      "continuousTimeMinMilliseconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "customEventFilter": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "eventName": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "filter": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "fingerprint": "string",
      "horizontalScrollPercentageList": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "interval": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "intervalSeconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "limit": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "maxTimerLengthSeconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "selector": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "tagManagerUrl": "string",
      "totalTimeMinMilliseconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "triggerId": "string",
      "type": "eventTypeUnspecified",
      "uniqueTriggerId": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "verticalScrollPercentageList": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "visibilitySelector": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "visiblePercentageMax": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "visiblePercentageMin": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "waitForTags": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "waitForTagsTimeout": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "workspaceId": "string"
    }
  ],
  "variable": [
    {
      "accountId": "string",
      "containerId": "string",
      "disablingTriggerId": [
        "string"
      ],
      "enablingTriggerId": [
        "string"
      ],
      "fingerprint": "string",
      "formatValue": {
        "caseConversionType": "none",
        "convertFalseToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "convertNullToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "convertTrueToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "convertUndefinedToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      },
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "scheduleEndMs": "string",
      "scheduleStartMs": "string",
      "tagManagerUrl": "string",
      "type": "string",
      "variableId": "string",
      "workspaceId": "string"
    }
  ],
  "zone": [
    {
      "accountId": "string",
      "boundary": {
        "condition": [
          {
            "parameter": [
              {
                "key": "string",
                "list": [
                  {}
                ],
                "map": [
                  {}
                ],
                "type": "typeUnspecified",
                "value": "string"
              }
            ],
            "type": "conditionTypeUnspecified"
          }
        ],
        "customEvaluationTriggerId": [
          "string"
        ]
      },
      "childContainer": [
        {
          "nickname": "string",
          "publicId": "string"
        }
      ],
      "containerId": "string",
      "fingerprint": "string",
      "name": "string",
      "notes": "string",
      "path": "string",
      "tagManagerUrl": "string",
      "typeRestriction": {
        "enable": true,
        "whitelistedTypeId": [
          "string"
        ]
      },
      "workspaceId": "string",
      "zoneId": "string"
    }
  ]
}
```

<h3 id="tagmanageraccountscontainersversionslive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ContainerVersion](#schemacontainerversion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly )
</aside>

## tagmanager.accounts.containers.workspaces.list

<a id="opIdtagmanager.accounts.containers.workspaces.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string/workspaces \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tagmanager/v2/{parent}/workspaces`

Lists all Workspaces that belong to a GTM Container.

<h3 id="tagmanageraccountscontainersworkspaceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|GTM parent Container's API relative path. Example: accounts/{account_id}/containers/{container_id}|
|pageToken|query|string|false|Continuation token for fetching the next page of results.|
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
  "workspace": [
    {
      "accountId": "string",
      "containerId": "string",
      "description": "string",
      "fingerprint": "string",
      "name": "string",
      "path": "string",
      "tagManagerUrl": "string",
      "workspaceId": "string"
    }
  ]
}
```

<h3 id="tagmanageraccountscontainersworkspaceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListWorkspacesResponse](#schemalistworkspacesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly )
</aside>

## tagmanager.accounts.containers.workspaces.create

<a id="opIdtagmanager.accounts.containers.workspaces.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string/workspaces \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "containerId": "string",
    "description": "string",
    "fingerprint": "string",
    "name": "string",
    "path": "string",
    "tagManagerUrl": "string",
    "workspaceId": "string"
  }'
```

`POST /tagmanager/v2/{parent}/workspaces`

Creates a Workspace.

> Body parameter

```json
{
  "accountId": "string",
  "containerId": "string",
  "description": "string",
  "fingerprint": "string",
  "name": "string",
  "path": "string",
  "tagManagerUrl": "string",
  "workspaceId": "string"
}
```

<h3 id="tagmanageraccountscontainersworkspacescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|GTM parent Container's API relative path. Example: accounts/{account_id}/containers/{container_id}|
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
|body|body|[Workspace](#schemaworkspace)|false|none|
|» accountId|body|string|false|GTM Account ID.|
|» containerId|body|string|false|GTM Container ID.|
|» description|body|string|false|Workspace description. @mutable tagmanager.accounts.containers.workspaces.create @mutable tagmanager.accounts.containers.workspaces.update|
|» fingerprint|body|string|false|The fingerprint of the GTM Workspace as computed at storage time. This value is recomputed whenever the workspace is modified.|
|» name|body|string|false|Workspace display name. @mutable tagmanager.accounts.containers.workspaces.create @mutable tagmanager.accounts.containers.workspaces.update|
|» path|body|string|false|GTM Workspace's API relative path.|
|» tagManagerUrl|body|string|false|Auto generated link to the tag manager UI|
|» workspaceId|body|string|false|The Workspace ID uniquely identifies the GTM Workspace.|

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
  "accountId": "string",
  "containerId": "string",
  "description": "string",
  "fingerprint": "string",
  "name": "string",
  "path": "string",
  "tagManagerUrl": "string",
  "workspaceId": "string"
}
```

<h3 id="tagmanageraccountscontainersworkspacescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Workspace](#schemaworkspace)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers )
</aside>

## tagmanager.accounts.containers.workspaces.zones.list

<a id="opIdtagmanager.accounts.containers.workspaces.zones.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string/zones \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tagmanager/v2/{parent}/zones`

Lists all GTM Zones of a GTM container workspace.

<h3 id="tagmanageraccountscontainersworkspaceszoneslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}|
|pageToken|query|string|false|Continuation token for fetching the next page of results.|
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
  "zone": [
    {
      "accountId": "string",
      "boundary": {
        "condition": [
          {
            "parameter": [
              {
                "key": "string",
                "list": [
                  {}
                ],
                "map": [
                  {}
                ],
                "type": "typeUnspecified",
                "value": "string"
              }
            ],
            "type": "conditionTypeUnspecified"
          }
        ],
        "customEvaluationTriggerId": [
          "string"
        ]
      },
      "childContainer": [
        {
          "nickname": "string",
          "publicId": "string"
        }
      ],
      "containerId": "string",
      "fingerprint": "string",
      "name": "string",
      "notes": "string",
      "path": "string",
      "tagManagerUrl": "string",
      "typeRestriction": {
        "enable": true,
        "whitelistedTypeId": [
          "string"
        ]
      },
      "workspaceId": "string",
      "zoneId": "string"
    }
  ]
}
```

<h3 id="tagmanageraccountscontainersworkspaceszoneslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListZonesResponse](#schemalistzonesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly )
</aside>

## tagmanager.accounts.containers.workspaces.zones.create

<a id="opIdtagmanager.accounts.containers.workspaces.zones.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string/zones \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "boundary": {
      "condition": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "customEvaluationTriggerId": [
        "string"
      ]
    },
    "childContainer": [
      {
        "nickname": "string",
        "publicId": "string"
      }
    ],
    "containerId": "string",
    "fingerprint": "string",
    "name": "string",
    "notes": "string",
    "path": "string",
    "tagManagerUrl": "string",
    "typeRestriction": {
      "enable": true,
      "whitelistedTypeId": [
        "string"
      ]
    },
    "workspaceId": "string",
    "zoneId": "string"
  }'
```

`POST /tagmanager/v2/{parent}/zones`

Creates a GTM Zone.

> Body parameter

```json
{
  "accountId": "string",
  "boundary": {
    "condition": [
      {
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "type": "conditionTypeUnspecified"
      }
    ],
    "customEvaluationTriggerId": [
      "string"
    ]
  },
  "childContainer": [
    {
      "nickname": "string",
      "publicId": "string"
    }
  ],
  "containerId": "string",
  "fingerprint": "string",
  "name": "string",
  "notes": "string",
  "path": "string",
  "tagManagerUrl": "string",
  "typeRestriction": {
    "enable": true,
    "whitelistedTypeId": [
      "string"
    ]
  },
  "workspaceId": "string",
  "zoneId": "string"
}
```

<h3 id="tagmanageraccountscontainersworkspaceszonescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}|
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
|body|body|[Zone](#schemazone)|false|none|
|» accountId|body|string|false|GTM Account ID.|
|» boundary|body|[ZoneBoundary](#schemazoneboundary)|false|This Zone's boundary.|
|» childContainer|body|[[ZoneChildContainer](#schemazonechildcontainer)]|false|Containers that are children of this Zone.|
|» containerId|body|string|false|GTM Container ID.|
|» fingerprint|body|string|false|The fingerprint of the GTM Zone as computed at storage time. This value is recomputed whenever the zone is modified.|
|» name|body|string|false|Zone display name.|
|» notes|body|string|false|User notes on how to apply this zone in the container.|
|» path|body|string|false|GTM Zone's API relative path.|
|» tagManagerUrl|body|string|false|Auto generated link to the tag manager UI|
|» typeRestriction|body|[ZoneTypeRestriction](#schemazonetyperestriction)|false|This Zone's type restrictions.|
|» workspaceId|body|string|false|GTM Workspace ID.|
|» zoneId|body|string|false|The Zone ID uniquely identifies the GTM Zone.|

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
  "accountId": "string",
  "boundary": {
    "condition": [
      {
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "type": "conditionTypeUnspecified"
      }
    ],
    "customEvaluationTriggerId": [
      "string"
    ]
  },
  "childContainer": [
    {
      "nickname": "string",
      "publicId": "string"
    }
  ],
  "containerId": "string",
  "fingerprint": "string",
  "name": "string",
  "notes": "string",
  "path": "string",
  "tagManagerUrl": "string",
  "typeRestriction": {
    "enable": true,
    "whitelistedTypeId": [
      "string"
    ]
  },
  "workspaceId": "string",
  "zoneId": "string"
}
```

<h3 id="tagmanageraccountscontainersworkspaceszonescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Zone](#schemazone)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers )
</aside>

## tagmanager.accounts.user_permissions.get

<a id="opIdtagmanager.accounts.user_permissions.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tagmanager/v2/{path}`

Gets a user's Account & Container access.

<h3 id="tagmanageraccountsuserpermissionsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|GTM UserPermission's API relative path. Example: accounts/{account_id}/user_permissions/{user_permission_id}|
|containerVersionId|query|string|false|The GTM ContainerVersion ID. Specify published to retrieve the currently published version.|
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
  "accountAccess": {
    "permission": "accountPermissionUnspecified"
  },
  "accountId": "string",
  "containerAccess": [
    {
      "containerId": "string",
      "permission": "containerPermissionUnspecified"
    }
  ],
  "emailAddress": "string",
  "path": "string"
}
```

<h3 id="tagmanageraccountsuserpermissionsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[UserPermission](#schemauserpermission)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.manage.users ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.manage.users ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly )
</aside>

## tagmanager.accounts.user_permissions.update

<a id="opIdtagmanager.accounts.user_permissions.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountAccess": {
      "permission": "accountPermissionUnspecified"
    },
    "accountId": "string",
    "containerAccess": [
      {
        "containerId": "string",
        "permission": "containerPermissionUnspecified"
      }
    ],
    "emailAddress": "string",
    "path": "string"
  }'
```

`PUT /tagmanager/v2/{path}`

Updates a user's Account & Container access.

> Body parameter

```json
{
  "accountAccess": {
    "permission": "accountPermissionUnspecified"
  },
  "accountId": "string",
  "containerAccess": [
    {
      "containerId": "string",
      "permission": "containerPermissionUnspecified"
    }
  ],
  "emailAddress": "string",
  "path": "string"
}
```

<h3 id="tagmanageraccountsuserpermissionsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|GTM UserPermission's API relative path. Example: accounts/{account_id}/user_permissions/{user_permission_id}|
|fingerprint|query|string|false|When provided, this fingerprint must match the fingerprint of the zone in storage.|
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
|body|body|[UserPermission](#schemauserpermission)|false|none|
|» accountAccess|body|[AccountAccess](#schemaaccountaccess)|false|GTM Account access permissions. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update|
|» accountId|body|string|false|The Account ID uniquely identifies the GTM Account.|
|» containerAccess|body|[[ContainerAccess](#schemacontaineraccess)]|false|GTM Container access permissions. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update|
|» emailAddress|body|string|false|User's email address. @mutable tagmanager.accounts.permissions.create|
|» path|body|string|false|GTM UserPermission's API relative path.|

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
  "accountAccess": {
    "permission": "accountPermissionUnspecified"
  },
  "accountId": "string",
  "containerAccess": [
    {
      "containerId": "string",
      "permission": "containerPermissionUnspecified"
    }
  ],
  "emailAddress": "string",
  "path": "string"
}
```

<h3 id="tagmanageraccountsuserpermissionsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[UserPermission](#schemauserpermission)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.manage.users ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.manage.users )
</aside>

## tagmanager.accounts.user_permissions.delete

<a id="opIdtagmanager.accounts.user_permissions.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /tagmanager/v2/{path}`

Removes a user from the account, revoking access to it and all of its containers.

<h3 id="tagmanageraccountsuserpermissionsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|GTM UserPermission's API relative path. Example: accounts/{account_id}/user_permissions/{user_permission_id}|
|type|query|[string]|false|The types of built-in variables to delete.|
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
|type|builtInVariableTypeUnspecified|
|type|pageUrl|
|type|pageHostname|
|type|pagePath|
|type|referrer|
|type|event|
|type|clickElement|
|type|clickClasses|
|type|clickId|
|type|clickTarget|
|type|clickUrl|
|type|clickText|
|type|firstPartyServingUrl|
|type|formElement|
|type|formClasses|
|type|formId|
|type|formTarget|
|type|formUrl|
|type|formText|
|type|errorMessage|
|type|errorUrl|
|type|errorLine|
|type|newHistoryUrl|
|type|oldHistoryUrl|
|type|newHistoryFragment|
|type|oldHistoryFragment|
|type|newHistoryState|
|type|oldHistoryState|
|type|historySource|
|type|containerVersion|
|type|debugMode|
|type|randomNumber|
|type|containerId|
|type|appId|
|type|appName|
|type|appVersionCode|
|type|appVersionName|
|type|language|
|type|osVersion|
|type|platform|
|type|sdkVersion|
|type|deviceName|
|type|resolution|
|type|advertiserId|
|type|advertisingTrackingEnabled|
|type|htmlId|
|type|environmentName|
|type|ampBrowserLanguage|
|type|ampCanonicalPath|
|type|ampCanonicalUrl|
|type|ampCanonicalHost|
|type|ampReferrer|
|type|ampTitle|
|type|ampClientId|
|type|ampClientTimezone|
|type|ampClientTimestamp|
|type|ampClientScreenWidth|
|type|ampClientScreenHeight|
|type|ampClientScrollX|
|type|ampClientScrollY|
|type|ampClientMaxScrollX|
|type|ampClientMaxScrollY|
|type|ampTotalEngagedTime|
|type|ampPageViewId|
|type|ampPageLoadTime|
|type|ampPageDownloadTime|
|type|ampGtmEvent|
|type|eventName|
|type|firebaseEventParameterCampaign|
|type|firebaseEventParameterCampaignAclid|
|type|firebaseEventParameterCampaignAnid|
|type|firebaseEventParameterCampaignClickTimestamp|
|type|firebaseEventParameterCampaignContent|
|type|firebaseEventParameterCampaignCp1|
|type|firebaseEventParameterCampaignGclid|
|type|firebaseEventParameterCampaignSource|
|type|firebaseEventParameterCampaignTerm|
|type|firebaseEventParameterCurrency|
|type|firebaseEventParameterDynamicLinkAcceptTime|
|type|firebaseEventParameterDynamicLinkLinkid|
|type|firebaseEventParameterNotificationMessageDeviceTime|
|type|firebaseEventParameterNotificationMessageId|
|type|firebaseEventParameterNotificationMessageName|
|type|firebaseEventParameterNotificationMessageTime|
|type|firebaseEventParameterNotificationTopic|
|type|firebaseEventParameterPreviousAppVersion|
|type|firebaseEventParameterPreviousOsVersion|
|type|firebaseEventParameterPrice|
|type|firebaseEventParameterProductId|
|type|firebaseEventParameterQuantity|
|type|firebaseEventParameterValue|
|type|videoProvider|
|type|videoUrl|
|type|videoTitle|
|type|videoDuration|
|type|videoPercent|
|type|videoVisible|
|type|videoStatus|
|type|videoCurrentTime|
|type|scrollDepthThreshold|
|type|scrollDepthUnits|
|type|scrollDepthDirection|
|type|elementVisibilityRatio|
|type|elementVisibilityTime|
|type|elementVisibilityFirstTime|
|type|elementVisibilityRecentTime|
|type|requestPath|
|type|requestMethod|
|type|clientName|
|type|queryString|
|type|serverPageLocationUrl|
|type|serverPageLocationPath|
|type|serverPageLocationHostname|
|type|visitorRegion|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="tagmanageraccountsuserpermissionsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.manage.users ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.manage.users )
</aside>

## tagmanager.accounts.containers.workspaces.built_in_variables.revert

<a id="opIdtagmanager.accounts.containers.workspaces.built_in_variables.revert"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string/built_in_variables:revert \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /tagmanager/v2/{path}/built_in_variables:revert`

Reverts changes to a GTM Built-In Variables in a GTM Workspace.

<h3 id="tagmanageraccountscontainersworkspacesbuiltinvariablesrevert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|GTM BuiltInVariable's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/built_in_variables|
|type|query|string|false|The type of built-in variable to revert.|
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
|type|builtInVariableTypeUnspecified|
|type|pageUrl|
|type|pageHostname|
|type|pagePath|
|type|referrer|
|type|event|
|type|clickElement|
|type|clickClasses|
|type|clickId|
|type|clickTarget|
|type|clickUrl|
|type|clickText|
|type|firstPartyServingUrl|
|type|formElement|
|type|formClasses|
|type|formId|
|type|formTarget|
|type|formUrl|
|type|formText|
|type|errorMessage|
|type|errorUrl|
|type|errorLine|
|type|newHistoryUrl|
|type|oldHistoryUrl|
|type|newHistoryFragment|
|type|oldHistoryFragment|
|type|newHistoryState|
|type|oldHistoryState|
|type|historySource|
|type|containerVersion|
|type|debugMode|
|type|randomNumber|
|type|containerId|
|type|appId|
|type|appName|
|type|appVersionCode|
|type|appVersionName|
|type|language|
|type|osVersion|
|type|platform|
|type|sdkVersion|
|type|deviceName|
|type|resolution|
|type|advertiserId|
|type|advertisingTrackingEnabled|
|type|htmlId|
|type|environmentName|
|type|ampBrowserLanguage|
|type|ampCanonicalPath|
|type|ampCanonicalUrl|
|type|ampCanonicalHost|
|type|ampReferrer|
|type|ampTitle|
|type|ampClientId|
|type|ampClientTimezone|
|type|ampClientTimestamp|
|type|ampClientScreenWidth|
|type|ampClientScreenHeight|
|type|ampClientScrollX|
|type|ampClientScrollY|
|type|ampClientMaxScrollX|
|type|ampClientMaxScrollY|
|type|ampTotalEngagedTime|
|type|ampPageViewId|
|type|ampPageLoadTime|
|type|ampPageDownloadTime|
|type|ampGtmEvent|
|type|eventName|
|type|firebaseEventParameterCampaign|
|type|firebaseEventParameterCampaignAclid|
|type|firebaseEventParameterCampaignAnid|
|type|firebaseEventParameterCampaignClickTimestamp|
|type|firebaseEventParameterCampaignContent|
|type|firebaseEventParameterCampaignCp1|
|type|firebaseEventParameterCampaignGclid|
|type|firebaseEventParameterCampaignSource|
|type|firebaseEventParameterCampaignTerm|
|type|firebaseEventParameterCurrency|
|type|firebaseEventParameterDynamicLinkAcceptTime|
|type|firebaseEventParameterDynamicLinkLinkid|
|type|firebaseEventParameterNotificationMessageDeviceTime|
|type|firebaseEventParameterNotificationMessageId|
|type|firebaseEventParameterNotificationMessageName|
|type|firebaseEventParameterNotificationMessageTime|
|type|firebaseEventParameterNotificationTopic|
|type|firebaseEventParameterPreviousAppVersion|
|type|firebaseEventParameterPreviousOsVersion|
|type|firebaseEventParameterPrice|
|type|firebaseEventParameterProductId|
|type|firebaseEventParameterQuantity|
|type|firebaseEventParameterValue|
|type|videoProvider|
|type|videoUrl|
|type|videoTitle|
|type|videoDuration|
|type|videoPercent|
|type|videoVisible|
|type|videoStatus|
|type|videoCurrentTime|
|type|scrollDepthThreshold|
|type|scrollDepthUnits|
|type|scrollDepthDirection|
|type|elementVisibilityRatio|
|type|elementVisibilityTime|
|type|elementVisibilityFirstTime|
|type|elementVisibilityRecentTime|
|type|requestPath|
|type|requestMethod|
|type|clientName|
|type|queryString|
|type|serverPageLocationUrl|
|type|serverPageLocationPath|
|type|serverPageLocationHostname|
|type|visitorRegion|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "enabled": true
}
```

<h3 id="tagmanageraccountscontainersworkspacesbuiltinvariablesrevert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[RevertBuiltInVariableResponse](#schemarevertbuiltinvariableresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers )
</aside>

## tagmanager.accounts.containers.workspaces.getStatus

<a id="opIdtagmanager.accounts.containers.workspaces.getStatus"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string/status \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tagmanager/v2/{path}/status`

Finds conflicting and modified entities in the workspace.

<h3 id="tagmanageraccountscontainersworkspacesgetstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}|
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
  "mergeConflict": [
    {
      "entityInBaseVersion": {
        "changeStatus": "changeStatusUnspecified",
        "client": {
          "accountId": "string",
          "clientId": "string",
          "containerId": "string",
          "fingerprint": "string",
          "name": "string",
          "notes": "string",
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "parentFolderId": "string",
          "path": "string",
          "priority": 0,
          "tagManagerUrl": "string",
          "type": "string",
          "workspaceId": "string"
        },
        "folder": {
          "accountId": "string",
          "containerId": "string",
          "fingerprint": "string",
          "folderId": "string",
          "name": "string",
          "notes": "string",
          "path": "string",
          "tagManagerUrl": "string",
          "workspaceId": "string"
        },
        "tag": {
          "accountId": "string",
          "blockingRuleId": [
            "string"
          ],
          "blockingTriggerId": [
            "string"
          ],
          "consentSettings": {
            "consentStatus": "notSet",
            "consentType": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          },
          "containerId": "string",
          "fingerprint": "string",
          "firingRuleId": [
            "string"
          ],
          "firingTriggerId": [
            "string"
          ],
          "liveOnly": true,
          "monitoringMetadata": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "monitoringMetadataTagNameKey": "string",
          "name": "string",
          "notes": "string",
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "parentFolderId": "string",
          "path": "string",
          "paused": true,
          "priority": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "scheduleEndMs": "string",
          "scheduleStartMs": "string",
          "setupTag": [
            {
              "stopOnSetupFailure": true,
              "tagName": "string"
            }
          ],
          "tagFiringOption": "tagFiringOptionUnspecified",
          "tagId": "string",
          "tagManagerUrl": "string",
          "teardownTag": [
            {
              "stopTeardownOnFailure": true,
              "tagName": "string"
            }
          ],
          "type": "string",
          "workspaceId": "string"
        },
        "trigger": {
          "accountId": "string",
          "autoEventFilter": [
            {
              "parameter": [
                {
                  "key": "string",
                  "list": [
                    {}
                  ],
                  "map": [
                    {}
                  ],
                  "type": "typeUnspecified",
                  "value": "string"
                }
              ],
              "type": "conditionTypeUnspecified"
            }
          ],
          "checkValidation": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "containerId": "string",
          "continuousTimeMinMilliseconds": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "customEventFilter": [
            {
              "parameter": [
                {
                  "key": "string",
                  "list": [
                    {}
                  ],
                  "map": [
                    {}
                  ],
                  "type": "typeUnspecified",
                  "value": "string"
                }
              ],
              "type": "conditionTypeUnspecified"
            }
          ],
          "eventName": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "filter": [
            {
              "parameter": [
                {
                  "key": "string",
                  "list": [
                    {}
                  ],
                  "map": [
                    {}
                  ],
                  "type": "typeUnspecified",
                  "value": "string"
                }
              ],
              "type": "conditionTypeUnspecified"
            }
          ],
          "fingerprint": "string",
          "horizontalScrollPercentageList": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "interval": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "intervalSeconds": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "limit": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "maxTimerLengthSeconds": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "name": "string",
          "notes": "string",
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "parentFolderId": "string",
          "path": "string",
          "selector": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "tagManagerUrl": "string",
          "totalTimeMinMilliseconds": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "triggerId": "string",
          "type": "eventTypeUnspecified",
          "uniqueTriggerId": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "verticalScrollPercentageList": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "visibilitySelector": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "visiblePercentageMax": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "visiblePercentageMin": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "waitForTags": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "waitForTagsTimeout": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "workspaceId": "string"
        },
        "variable": {
          "accountId": "string",
          "containerId": "string",
          "disablingTriggerId": [
            "string"
          ],
          "enablingTriggerId": [
            "string"
          ],
          "fingerprint": "string",
          "formatValue": {
            "caseConversionType": "none",
            "convertFalseToValue": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            },
            "convertNullToValue": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            },
            "convertTrueToValue": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            },
            "convertUndefinedToValue": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          },
          "name": "string",
          "notes": "string",
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "parentFolderId": "string",
          "path": "string",
          "scheduleEndMs": "string",
          "scheduleStartMs": "string",
          "tagManagerUrl": "string",
          "type": "string",
          "variableId": "string",
          "workspaceId": "string"
        }
      },
      "entityInWorkspace": {
        "changeStatus": "changeStatusUnspecified",
        "client": {
          "accountId": "string",
          "clientId": "string",
          "containerId": "string",
          "fingerprint": "string",
          "name": "string",
          "notes": "string",
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "parentFolderId": "string",
          "path": "string",
          "priority": 0,
          "tagManagerUrl": "string",
          "type": "string",
          "workspaceId": "string"
        },
        "folder": {
          "accountId": "string",
          "containerId": "string",
          "fingerprint": "string",
          "folderId": "string",
          "name": "string",
          "notes": "string",
          "path": "string",
          "tagManagerUrl": "string",
          "workspaceId": "string"
        },
        "tag": {
          "accountId": "string",
          "blockingRuleId": [
            "string"
          ],
          "blockingTriggerId": [
            "string"
          ],
          "consentSettings": {
            "consentStatus": "notSet",
            "consentType": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          },
          "containerId": "string",
          "fingerprint": "string",
          "firingRuleId": [
            "string"
          ],
          "firingTriggerId": [
            "string"
          ],
          "liveOnly": true,
          "monitoringMetadata": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "monitoringMetadataTagNameKey": "string",
          "name": "string",
          "notes": "string",
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "parentFolderId": "string",
          "path": "string",
          "paused": true,
          "priority": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "scheduleEndMs": "string",
          "scheduleStartMs": "string",
          "setupTag": [
            {
              "stopOnSetupFailure": true,
              "tagName": "string"
            }
          ],
          "tagFiringOption": "tagFiringOptionUnspecified",
          "tagId": "string",
          "tagManagerUrl": "string",
          "teardownTag": [
            {
              "stopTeardownOnFailure": true,
              "tagName": "string"
            }
          ],
          "type": "string",
          "workspaceId": "string"
        },
        "trigger": {
          "accountId": "string",
          "autoEventFilter": [
            {
              "parameter": [
                {
                  "key": "string",
                  "list": [
                    {}
                  ],
                  "map": [
                    {}
                  ],
                  "type": "typeUnspecified",
                  "value": "string"
                }
              ],
              "type": "conditionTypeUnspecified"
            }
          ],
          "checkValidation": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "containerId": "string",
          "continuousTimeMinMilliseconds": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "customEventFilter": [
            {
              "parameter": [
                {
                  "key": "string",
                  "list": [
                    {}
                  ],
                  "map": [
                    {}
                  ],
                  "type": "typeUnspecified",
                  "value": "string"
                }
              ],
              "type": "conditionTypeUnspecified"
            }
          ],
          "eventName": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "filter": [
            {
              "parameter": [
                {
                  "key": "string",
                  "list": [
                    {}
                  ],
                  "map": [
                    {}
                  ],
                  "type": "typeUnspecified",
                  "value": "string"
                }
              ],
              "type": "conditionTypeUnspecified"
            }
          ],
          "fingerprint": "string",
          "horizontalScrollPercentageList": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "interval": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "intervalSeconds": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "limit": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "maxTimerLengthSeconds": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "name": "string",
          "notes": "string",
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "parentFolderId": "string",
          "path": "string",
          "selector": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "tagManagerUrl": "string",
          "totalTimeMinMilliseconds": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "triggerId": "string",
          "type": "eventTypeUnspecified",
          "uniqueTriggerId": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "verticalScrollPercentageList": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "visibilitySelector": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "visiblePercentageMax": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "visiblePercentageMin": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "waitForTags": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "waitForTagsTimeout": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "workspaceId": "string"
        },
        "variable": {
          "accountId": "string",
          "containerId": "string",
          "disablingTriggerId": [
            "string"
          ],
          "enablingTriggerId": [
            "string"
          ],
          "fingerprint": "string",
          "formatValue": {
            "caseConversionType": "none",
            "convertFalseToValue": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            },
            "convertNullToValue": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            },
            "convertTrueToValue": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            },
            "convertUndefinedToValue": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          },
          "name": "string",
          "notes": "string",
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "parentFolderId": "string",
          "path": "string",
          "scheduleEndMs": "string",
          "scheduleStartMs": "string",
          "tagManagerUrl": "string",
          "type": "string",
          "variableId": "string",
          "workspaceId": "string"
        }
      }
    }
  ],
  "workspaceChange": [
    {
      "changeStatus": "changeStatusUnspecified",
      "client": {
        "accountId": "string",
        "clientId": "string",
        "containerId": "string",
        "fingerprint": "string",
        "name": "string",
        "notes": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "parentFolderId": "string",
        "path": "string",
        "priority": 0,
        "tagManagerUrl": "string",
        "type": "string",
        "workspaceId": "string"
      },
      "folder": {
        "accountId": "string",
        "containerId": "string",
        "fingerprint": "string",
        "folderId": "string",
        "name": "string",
        "notes": "string",
        "path": "string",
        "tagManagerUrl": "string",
        "workspaceId": "string"
      },
      "tag": {
        "accountId": "string",
        "blockingRuleId": [
          "string"
        ],
        "blockingTriggerId": [
          "string"
        ],
        "consentSettings": {
          "consentStatus": "notSet",
          "consentType": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        },
        "containerId": "string",
        "fingerprint": "string",
        "firingRuleId": [
          "string"
        ],
        "firingTriggerId": [
          "string"
        ],
        "liveOnly": true,
        "monitoringMetadata": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "monitoringMetadataTagNameKey": "string",
        "name": "string",
        "notes": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "parentFolderId": "string",
        "path": "string",
        "paused": true,
        "priority": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "scheduleEndMs": "string",
        "scheduleStartMs": "string",
        "setupTag": [
          {
            "stopOnSetupFailure": true,
            "tagName": "string"
          }
        ],
        "tagFiringOption": "tagFiringOptionUnspecified",
        "tagId": "string",
        "tagManagerUrl": "string",
        "teardownTag": [
          {
            "stopTeardownOnFailure": true,
            "tagName": "string"
          }
        ],
        "type": "string",
        "workspaceId": "string"
      },
      "trigger": {
        "accountId": "string",
        "autoEventFilter": [
          {
            "parameter": [
              {
                "key": "string",
                "list": [
                  {}
                ],
                "map": [
                  {}
                ],
                "type": "typeUnspecified",
                "value": "string"
              }
            ],
            "type": "conditionTypeUnspecified"
          }
        ],
        "checkValidation": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "containerId": "string",
        "continuousTimeMinMilliseconds": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "customEventFilter": [
          {
            "parameter": [
              {
                "key": "string",
                "list": [
                  {}
                ],
                "map": [
                  {}
                ],
                "type": "typeUnspecified",
                "value": "string"
              }
            ],
            "type": "conditionTypeUnspecified"
          }
        ],
        "eventName": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "filter": [
          {
            "parameter": [
              {
                "key": "string",
                "list": [
                  {}
                ],
                "map": [
                  {}
                ],
                "type": "typeUnspecified",
                "value": "string"
              }
            ],
            "type": "conditionTypeUnspecified"
          }
        ],
        "fingerprint": "string",
        "horizontalScrollPercentageList": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "interval": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "intervalSeconds": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "limit": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "maxTimerLengthSeconds": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "name": "string",
        "notes": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "parentFolderId": "string",
        "path": "string",
        "selector": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "tagManagerUrl": "string",
        "totalTimeMinMilliseconds": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "triggerId": "string",
        "type": "eventTypeUnspecified",
        "uniqueTriggerId": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "verticalScrollPercentageList": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "visibilitySelector": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "visiblePercentageMax": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "visiblePercentageMin": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "waitForTags": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "waitForTagsTimeout": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "workspaceId": "string"
      },
      "variable": {
        "accountId": "string",
        "containerId": "string",
        "disablingTriggerId": [
          "string"
        ],
        "enablingTriggerId": [
          "string"
        ],
        "fingerprint": "string",
        "formatValue": {
          "caseConversionType": "none",
          "convertFalseToValue": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "convertNullToValue": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "convertTrueToValue": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "convertUndefinedToValue": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        },
        "name": "string",
        "notes": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "parentFolderId": "string",
        "path": "string",
        "scheduleEndMs": "string",
        "scheduleStartMs": "string",
        "tagManagerUrl": "string",
        "type": "string",
        "variableId": "string",
        "workspaceId": "string"
      }
    }
  ]
}
```

<h3 id="tagmanageraccountscontainersworkspacesgetstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GetWorkspaceStatusResponse](#schemagetworkspacestatusresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly )
</aside>

## tagmanager.accounts.containers.combine

<a id="opIdtagmanager.accounts.containers.combine"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string:combine \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /tagmanager/v2/{path}:combine`

Combines Containers.

<h3 id="tagmanageraccountscontainerscombine-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}|
|allowUserPermissionFeatureUpdate|query|boolean|false|Must be set to true to allow features.user_permissions to change from false to true. If this operation causes an update but this bit is false, the operation will fail.|
|containerId|query|string|false|ID of container that will be merged into the current container.|
|settingSource|query|string|false|Specify the source of config setting after combine|
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
|settingSource|settingSourceUnspecified|
|settingSource|current|
|settingSource|other|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "containerId": "string",
  "domainName": [
    "string"
  ],
  "features": {
    "supportBuiltInVariables": true,
    "supportClients": true,
    "supportEnvironments": true,
    "supportFolders": true,
    "supportGtagConfigs": true,
    "supportTags": true,
    "supportTemplates": true,
    "supportTriggers": true,
    "supportUserPermissions": true,
    "supportVariables": true,
    "supportVersions": true,
    "supportWorkspaces": true,
    "supportZones": true
  },
  "fingerprint": "string",
  "name": "string",
  "notes": "string",
  "path": "string",
  "publicId": "string",
  "tagIds": [
    "string"
  ],
  "tagManagerUrl": "string",
  "taggingServerUrls": [
    "string"
  ],
  "usageContext": [
    "usageContextUnspecified"
  ]
}
```

<h3 id="tagmanageraccountscontainerscombine-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Container](#schemacontainer)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers )
</aside>

## tagmanager.accounts.containers.workspaces.create_version

<a id="opIdtagmanager.accounts.containers.workspaces.create_version"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string:create_version \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "notes": "string"
  }'
```

`POST /tagmanager/v2/{path}:create_version`

Creates a Container Version from the entities present in the workspace, deletes the workspace, and sets the base container version to the newly created version.

> Body parameter

```json
{
  "name": "string",
  "notes": "string"
}
```

<h3 id="tagmanageraccountscontainersworkspacescreateversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}|
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
|body|body|[CreateContainerVersionRequestVersionOptions](#schemacreatecontainerversionrequestversionoptions)|false|none|
|» name|body|string|false|The name of the container version to be created.|
|» notes|body|string|false|The notes of the container version to be created.|

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
  "compilerError": true,
  "containerVersion": {
    "accountId": "string",
    "builtInVariable": [
      {
        "accountId": "string",
        "containerId": "string",
        "name": "string",
        "path": "string",
        "type": "builtInVariableTypeUnspecified",
        "workspaceId": "string"
      }
    ],
    "client": [
      {
        "accountId": "string",
        "clientId": "string",
        "containerId": "string",
        "fingerprint": "string",
        "name": "string",
        "notes": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "parentFolderId": "string",
        "path": "string",
        "priority": 0,
        "tagManagerUrl": "string",
        "type": "string",
        "workspaceId": "string"
      }
    ],
    "container": {
      "accountId": "string",
      "containerId": "string",
      "domainName": [
        "string"
      ],
      "features": {
        "supportBuiltInVariables": true,
        "supportClients": true,
        "supportEnvironments": true,
        "supportFolders": true,
        "supportGtagConfigs": true,
        "supportTags": true,
        "supportTemplates": true,
        "supportTriggers": true,
        "supportUserPermissions": true,
        "supportVariables": true,
        "supportVersions": true,
        "supportWorkspaces": true,
        "supportZones": true
      },
      "fingerprint": "string",
      "name": "string",
      "notes": "string",
      "path": "string",
      "publicId": "string",
      "tagIds": [
        "string"
      ],
      "tagManagerUrl": "string",
      "taggingServerUrls": [
        "string"
      ],
      "usageContext": [
        "usageContextUnspecified"
      ]
    },
    "containerId": "string",
    "containerVersionId": "string",
    "customTemplate": [
      {
        "accountId": "string",
        "containerId": "string",
        "fingerprint": "string",
        "galleryReference": {
          "host": "string",
          "isModified": true,
          "owner": "string",
          "repository": "string",
          "signature": "string",
          "version": "string"
        },
        "name": "string",
        "path": "string",
        "tagManagerUrl": "string",
        "templateData": "string",
        "templateId": "string",
        "workspaceId": "string"
      }
    ],
    "deleted": true,
    "description": "string",
    "fingerprint": "string",
    "folder": [
      {
        "accountId": "string",
        "containerId": "string",
        "fingerprint": "string",
        "folderId": "string",
        "name": "string",
        "notes": "string",
        "path": "string",
        "tagManagerUrl": "string",
        "workspaceId": "string"
      }
    ],
    "gtagConfig": [
      {
        "accountId": "string",
        "containerId": "string",
        "fingerprint": "string",
        "gtagConfigId": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "path": "string",
        "tagManagerUrl": "string",
        "type": "string",
        "workspaceId": "string"
      }
    ],
    "name": "string",
    "path": "string",
    "tag": [
      {
        "accountId": "string",
        "blockingRuleId": [
          "string"
        ],
        "blockingTriggerId": [
          "string"
        ],
        "consentSettings": {
          "consentStatus": "notSet",
          "consentType": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        },
        "containerId": "string",
        "fingerprint": "string",
        "firingRuleId": [
          "string"
        ],
        "firingTriggerId": [
          "string"
        ],
        "liveOnly": true,
        "monitoringMetadata": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "monitoringMetadataTagNameKey": "string",
        "name": "string",
        "notes": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "parentFolderId": "string",
        "path": "string",
        "paused": true,
        "priority": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "scheduleEndMs": "string",
        "scheduleStartMs": "string",
        "setupTag": [
          {
            "stopOnSetupFailure": true,
            "tagName": "string"
          }
        ],
        "tagFiringOption": "tagFiringOptionUnspecified",
        "tagId": "string",
        "tagManagerUrl": "string",
        "teardownTag": [
          {
            "stopTeardownOnFailure": true,
            "tagName": "string"
          }
        ],
        "type": "string",
        "workspaceId": "string"
      }
    ],
    "tagManagerUrl": "string",
    "trigger": [
      {
        "accountId": "string",
        "autoEventFilter": [
          {
            "parameter": [
              {
                "key": "string",
                "list": [
                  {}
                ],
                "map": [
                  {}
                ],
                "type": "typeUnspecified",
                "value": "string"
              }
            ],
            "type": "conditionTypeUnspecified"
          }
        ],
        "checkValidation": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "containerId": "string",
        "continuousTimeMinMilliseconds": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "customEventFilter": [
          {
            "parameter": [
              {
                "key": "string",
                "list": [
                  {}
                ],
                "map": [
                  {}
                ],
                "type": "typeUnspecified",
                "value": "string"
              }
            ],
            "type": "conditionTypeUnspecified"
          }
        ],
        "eventName": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "filter": [
          {
            "parameter": [
              {
                "key": "string",
                "list": [
                  {}
                ],
                "map": [
                  {}
                ],
                "type": "typeUnspecified",
                "value": "string"
              }
            ],
            "type": "conditionTypeUnspecified"
          }
        ],
        "fingerprint": "string",
        "horizontalScrollPercentageList": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "interval": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "intervalSeconds": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "limit": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "maxTimerLengthSeconds": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "name": "string",
        "notes": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "parentFolderId": "string",
        "path": "string",
        "selector": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "tagManagerUrl": "string",
        "totalTimeMinMilliseconds": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "triggerId": "string",
        "type": "eventTypeUnspecified",
        "uniqueTriggerId": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "verticalScrollPercentageList": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "visibilitySelector": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "visiblePercentageMax": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "visiblePercentageMin": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "waitForTags": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "waitForTagsTimeout": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "workspaceId": "string"
      }
    ],
    "variable": [
      {
        "accountId": "string",
        "containerId": "string",
        "disablingTriggerId": [
          "string"
        ],
        "enablingTriggerId": [
          "string"
        ],
        "fingerprint": "string",
        "formatValue": {
          "caseConversionType": "none",
          "convertFalseToValue": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "convertNullToValue": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "convertTrueToValue": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "convertUndefinedToValue": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        },
        "name": "string",
        "notes": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "parentFolderId": "string",
        "path": "string",
        "scheduleEndMs": "string",
        "scheduleStartMs": "string",
        "tagManagerUrl": "string",
        "type": "string",
        "variableId": "string",
        "workspaceId": "string"
      }
    ],
    "zone": [
      {
        "accountId": "string",
        "boundary": {
          "condition": [
            {
              "parameter": [
                {
                  "key": "string",
                  "list": [
                    {}
                  ],
                  "map": [
                    {}
                  ],
                  "type": "typeUnspecified",
                  "value": "string"
                }
              ],
              "type": "conditionTypeUnspecified"
            }
          ],
          "customEvaluationTriggerId": [
            "string"
          ]
        },
        "childContainer": [
          {
            "nickname": "string",
            "publicId": "string"
          }
        ],
        "containerId": "string",
        "fingerprint": "string",
        "name": "string",
        "notes": "string",
        "path": "string",
        "tagManagerUrl": "string",
        "typeRestriction": {
          "enable": true,
          "whitelistedTypeId": [
            "string"
          ]
        },
        "workspaceId": "string",
        "zoneId": "string"
      }
    ]
  },
  "newWorkspacePath": "string",
  "syncStatus": {
    "mergeConflict": true,
    "syncError": true
  }
}
```

<h3 id="tagmanageraccountscontainersworkspacescreateversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CreateContainerVersionResponse](#schemacreatecontainerversionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containerversions ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containerversions )
</aside>

## tagmanager.accounts.containers.workspaces.folders.entities

<a id="opIdtagmanager.accounts.containers.workspaces.folders.entities"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string:entities \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /tagmanager/v2/{path}:entities`

List all entities in a GTM Folder.

<h3 id="tagmanageraccountscontainersworkspacesfoldersentities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}|
|pageToken|query|string|false|Continuation token for fetching the next page of results.|
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
  "tag": [
    {
      "accountId": "string",
      "blockingRuleId": [
        "string"
      ],
      "blockingTriggerId": [
        "string"
      ],
      "consentSettings": {
        "consentStatus": "notSet",
        "consentType": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      },
      "containerId": "string",
      "fingerprint": "string",
      "firingRuleId": [
        "string"
      ],
      "firingTriggerId": [
        "string"
      ],
      "liveOnly": true,
      "monitoringMetadata": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "monitoringMetadataTagNameKey": "string",
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "paused": true,
      "priority": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "scheduleEndMs": "string",
      "scheduleStartMs": "string",
      "setupTag": [
        {
          "stopOnSetupFailure": true,
          "tagName": "string"
        }
      ],
      "tagFiringOption": "tagFiringOptionUnspecified",
      "tagId": "string",
      "tagManagerUrl": "string",
      "teardownTag": [
        {
          "stopTeardownOnFailure": true,
          "tagName": "string"
        }
      ],
      "type": "string",
      "workspaceId": "string"
    }
  ],
  "trigger": [
    {
      "accountId": "string",
      "autoEventFilter": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "checkValidation": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "containerId": "string",
      "continuousTimeMinMilliseconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "customEventFilter": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "eventName": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "filter": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "fingerprint": "string",
      "horizontalScrollPercentageList": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "interval": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "intervalSeconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "limit": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "maxTimerLengthSeconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "selector": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "tagManagerUrl": "string",
      "totalTimeMinMilliseconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "triggerId": "string",
      "type": "eventTypeUnspecified",
      "uniqueTriggerId": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "verticalScrollPercentageList": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "visibilitySelector": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "visiblePercentageMax": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "visiblePercentageMin": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "waitForTags": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "waitForTagsTimeout": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "workspaceId": "string"
    }
  ],
  "variable": [
    {
      "accountId": "string",
      "containerId": "string",
      "disablingTriggerId": [
        "string"
      ],
      "enablingTriggerId": [
        "string"
      ],
      "fingerprint": "string",
      "formatValue": {
        "caseConversionType": "none",
        "convertFalseToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "convertNullToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "convertTrueToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "convertUndefinedToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      },
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "scheduleEndMs": "string",
      "scheduleStartMs": "string",
      "tagManagerUrl": "string",
      "type": "string",
      "variableId": "string",
      "workspaceId": "string"
    }
  ]
}
```

<h3 id="tagmanageraccountscontainersworkspacesfoldersentities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[FolderEntities](#schemafolderentities)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly )
</aside>

## tagmanager.accounts.containers.workspaces.folders.move_entities_to_folder

<a id="opIdtagmanager.accounts.containers.workspaces.folders.move_entities_to_folder"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string:move_entities_to_folder \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "containerId": "string",
    "fingerprint": "string",
    "folderId": "string",
    "name": "string",
    "notes": "string",
    "path": "string",
    "tagManagerUrl": "string",
    "workspaceId": "string"
  }'
```

`POST /tagmanager/v2/{path}:move_entities_to_folder`

Moves entities to a GTM Folder.

> Body parameter

```json
{
  "accountId": "string",
  "containerId": "string",
  "fingerprint": "string",
  "folderId": "string",
  "name": "string",
  "notes": "string",
  "path": "string",
  "tagManagerUrl": "string",
  "workspaceId": "string"
}
```

<h3 id="tagmanageraccountscontainersworkspacesfoldersmoveentitiestofolder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}|
|tagId|query|[string]|false|The tags to be moved to the folder.|
|triggerId|query|[string]|false|The triggers to be moved to the folder.|
|variableId|query|[string]|false|The variables to be moved to the folder.|
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
|body|body|[Folder](#schemafolder)|false|none|
|» accountId|body|string|false|GTM Account ID.|
|» containerId|body|string|false|GTM Container ID.|
|» fingerprint|body|string|false|The fingerprint of the GTM Folder as computed at storage time. This value is recomputed whenever the folder is modified.|
|» folderId|body|string|false|The Folder ID uniquely identifies the GTM Folder.|
|» name|body|string|false|Folder display name. @mutable tagmanager.accounts.containers.workspaces.folders.create @mutable tagmanager.accounts.containers.workspaces.folders.update|
|» notes|body|string|false|User notes on how to apply this folder in the container. @mutable tagmanager.accounts.containers.workspaces.folders.create @mutable tagmanager.accounts.containers.workspaces.folders.update|
|» path|body|string|false|GTM Folder's API relative path.|
|» tagManagerUrl|body|string|false|Auto generated link to the tag manager UI|
|» workspaceId|body|string|false|GTM Workspace ID.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="tagmanageraccountscontainersworkspacesfoldersmoveentitiestofolder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers )
</aside>

## tagmanager.accounts.containers.move_tag_id

<a id="opIdtagmanager.accounts.containers.move_tag_id"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string:move_tag_id \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /tagmanager/v2/{path}:move_tag_id`

Move Tag ID out of a Container.

<h3 id="tagmanageraccountscontainersmovetagid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}|
|allowUserPermissionFeatureUpdate|query|boolean|false|Must be set to true to allow features.user_permissions to change from false to true. If this operation causes an update but this bit is false, the operation will fail.|
|copySettings|query|boolean|false|Whether or not to copy tag settings from this tag to the new tag.|
|copyTermsOfService|query|boolean|false|Must be set to true to accept all terms of service agreements copied from the current tag to the newly created tag. If this bit is false, the operation will fail.|
|copyUsers|query|boolean|false|Whether or not to copy users from this tag to the new tag.|
|tagId|query|string|false|Tag ID to be removed from the current Container.|
|tagName|query|string|false|The name for the newly created tag.|
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
  "accountId": "string",
  "containerId": "string",
  "domainName": [
    "string"
  ],
  "features": {
    "supportBuiltInVariables": true,
    "supportClients": true,
    "supportEnvironments": true,
    "supportFolders": true,
    "supportGtagConfigs": true,
    "supportTags": true,
    "supportTemplates": true,
    "supportTriggers": true,
    "supportUserPermissions": true,
    "supportVariables": true,
    "supportVersions": true,
    "supportWorkspaces": true,
    "supportZones": true
  },
  "fingerprint": "string",
  "name": "string",
  "notes": "string",
  "path": "string",
  "publicId": "string",
  "tagIds": [
    "string"
  ],
  "tagManagerUrl": "string",
  "taggingServerUrls": [
    "string"
  ],
  "usageContext": [
    "usageContextUnspecified"
  ]
}
```

<h3 id="tagmanageraccountscontainersmovetagid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Container](#schemacontainer)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers )
</aside>

## tagmanager.accounts.containers.versions.publish

<a id="opIdtagmanager.accounts.containers.versions.publish"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string:publish \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /tagmanager/v2/{path}:publish`

Publishes a Container Version.

<h3 id="tagmanageraccountscontainersversionspublish-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}|
|fingerprint|query|string|false|When provided, this fingerprint must match the fingerprint of the container version in storage.|
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
  "compilerError": true,
  "containerVersion": {
    "accountId": "string",
    "builtInVariable": [
      {
        "accountId": "string",
        "containerId": "string",
        "name": "string",
        "path": "string",
        "type": "builtInVariableTypeUnspecified",
        "workspaceId": "string"
      }
    ],
    "client": [
      {
        "accountId": "string",
        "clientId": "string",
        "containerId": "string",
        "fingerprint": "string",
        "name": "string",
        "notes": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "parentFolderId": "string",
        "path": "string",
        "priority": 0,
        "tagManagerUrl": "string",
        "type": "string",
        "workspaceId": "string"
      }
    ],
    "container": {
      "accountId": "string",
      "containerId": "string",
      "domainName": [
        "string"
      ],
      "features": {
        "supportBuiltInVariables": true,
        "supportClients": true,
        "supportEnvironments": true,
        "supportFolders": true,
        "supportGtagConfigs": true,
        "supportTags": true,
        "supportTemplates": true,
        "supportTriggers": true,
        "supportUserPermissions": true,
        "supportVariables": true,
        "supportVersions": true,
        "supportWorkspaces": true,
        "supportZones": true
      },
      "fingerprint": "string",
      "name": "string",
      "notes": "string",
      "path": "string",
      "publicId": "string",
      "tagIds": [
        "string"
      ],
      "tagManagerUrl": "string",
      "taggingServerUrls": [
        "string"
      ],
      "usageContext": [
        "usageContextUnspecified"
      ]
    },
    "containerId": "string",
    "containerVersionId": "string",
    "customTemplate": [
      {
        "accountId": "string",
        "containerId": "string",
        "fingerprint": "string",
        "galleryReference": {
          "host": "string",
          "isModified": true,
          "owner": "string",
          "repository": "string",
          "signature": "string",
          "version": "string"
        },
        "name": "string",
        "path": "string",
        "tagManagerUrl": "string",
        "templateData": "string",
        "templateId": "string",
        "workspaceId": "string"
      }
    ],
    "deleted": true,
    "description": "string",
    "fingerprint": "string",
    "folder": [
      {
        "accountId": "string",
        "containerId": "string",
        "fingerprint": "string",
        "folderId": "string",
        "name": "string",
        "notes": "string",
        "path": "string",
        "tagManagerUrl": "string",
        "workspaceId": "string"
      }
    ],
    "gtagConfig": [
      {
        "accountId": "string",
        "containerId": "string",
        "fingerprint": "string",
        "gtagConfigId": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "path": "string",
        "tagManagerUrl": "string",
        "type": "string",
        "workspaceId": "string"
      }
    ],
    "name": "string",
    "path": "string",
    "tag": [
      {
        "accountId": "string",
        "blockingRuleId": [
          "string"
        ],
        "blockingTriggerId": [
          "string"
        ],
        "consentSettings": {
          "consentStatus": "notSet",
          "consentType": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        },
        "containerId": "string",
        "fingerprint": "string",
        "firingRuleId": [
          "string"
        ],
        "firingTriggerId": [
          "string"
        ],
        "liveOnly": true,
        "monitoringMetadata": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "monitoringMetadataTagNameKey": "string",
        "name": "string",
        "notes": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "parentFolderId": "string",
        "path": "string",
        "paused": true,
        "priority": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "scheduleEndMs": "string",
        "scheduleStartMs": "string",
        "setupTag": [
          {
            "stopOnSetupFailure": true,
            "tagName": "string"
          }
        ],
        "tagFiringOption": "tagFiringOptionUnspecified",
        "tagId": "string",
        "tagManagerUrl": "string",
        "teardownTag": [
          {
            "stopTeardownOnFailure": true,
            "tagName": "string"
          }
        ],
        "type": "string",
        "workspaceId": "string"
      }
    ],
    "tagManagerUrl": "string",
    "trigger": [
      {
        "accountId": "string",
        "autoEventFilter": [
          {
            "parameter": [
              {
                "key": "string",
                "list": [
                  {}
                ],
                "map": [
                  {}
                ],
                "type": "typeUnspecified",
                "value": "string"
              }
            ],
            "type": "conditionTypeUnspecified"
          }
        ],
        "checkValidation": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "containerId": "string",
        "continuousTimeMinMilliseconds": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "customEventFilter": [
          {
            "parameter": [
              {
                "key": "string",
                "list": [
                  {}
                ],
                "map": [
                  {}
                ],
                "type": "typeUnspecified",
                "value": "string"
              }
            ],
            "type": "conditionTypeUnspecified"
          }
        ],
        "eventName": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "filter": [
          {
            "parameter": [
              {
                "key": "string",
                "list": [
                  {}
                ],
                "map": [
                  {}
                ],
                "type": "typeUnspecified",
                "value": "string"
              }
            ],
            "type": "conditionTypeUnspecified"
          }
        ],
        "fingerprint": "string",
        "horizontalScrollPercentageList": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "interval": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "intervalSeconds": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "limit": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "maxTimerLengthSeconds": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "name": "string",
        "notes": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "parentFolderId": "string",
        "path": "string",
        "selector": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "tagManagerUrl": "string",
        "totalTimeMinMilliseconds": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "triggerId": "string",
        "type": "eventTypeUnspecified",
        "uniqueTriggerId": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "verticalScrollPercentageList": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "visibilitySelector": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "visiblePercentageMax": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "visiblePercentageMin": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "waitForTags": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "waitForTagsTimeout": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "workspaceId": "string"
      }
    ],
    "variable": [
      {
        "accountId": "string",
        "containerId": "string",
        "disablingTriggerId": [
          "string"
        ],
        "enablingTriggerId": [
          "string"
        ],
        "fingerprint": "string",
        "formatValue": {
          "caseConversionType": "none",
          "convertFalseToValue": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "convertNullToValue": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "convertTrueToValue": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "convertUndefinedToValue": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        },
        "name": "string",
        "notes": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "parentFolderId": "string",
        "path": "string",
        "scheduleEndMs": "string",
        "scheduleStartMs": "string",
        "tagManagerUrl": "string",
        "type": "string",
        "variableId": "string",
        "workspaceId": "string"
      }
    ],
    "zone": [
      {
        "accountId": "string",
        "boundary": {
          "condition": [
            {
              "parameter": [
                {
                  "key": "string",
                  "list": [
                    {}
                  ],
                  "map": [
                    {}
                  ],
                  "type": "typeUnspecified",
                  "value": "string"
                }
              ],
              "type": "conditionTypeUnspecified"
            }
          ],
          "customEvaluationTriggerId": [
            "string"
          ]
        },
        "childContainer": [
          {
            "nickname": "string",
            "publicId": "string"
          }
        ],
        "containerId": "string",
        "fingerprint": "string",
        "name": "string",
        "notes": "string",
        "path": "string",
        "tagManagerUrl": "string",
        "typeRestriction": {
          "enable": true,
          "whitelistedTypeId": [
            "string"
          ]
        },
        "workspaceId": "string",
        "zoneId": "string"
      }
    ]
  }
}
```

<h3 id="tagmanageraccountscontainersversionspublish-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PublishContainerVersionResponse](#schemapublishcontainerversionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.publish ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.publish )
</aside>

## tagmanager.accounts.containers.workspaces.quick_preview

<a id="opIdtagmanager.accounts.containers.workspaces.quick_preview"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string:quick_preview \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /tagmanager/v2/{path}:quick_preview`

Quick previews a workspace by creating a fake container version from all entities in the provided workspace.

<h3 id="tagmanageraccountscontainersworkspacesquickpreview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}|
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
  "compilerError": true,
  "containerVersion": {
    "accountId": "string",
    "builtInVariable": [
      {
        "accountId": "string",
        "containerId": "string",
        "name": "string",
        "path": "string",
        "type": "builtInVariableTypeUnspecified",
        "workspaceId": "string"
      }
    ],
    "client": [
      {
        "accountId": "string",
        "clientId": "string",
        "containerId": "string",
        "fingerprint": "string",
        "name": "string",
        "notes": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "parentFolderId": "string",
        "path": "string",
        "priority": 0,
        "tagManagerUrl": "string",
        "type": "string",
        "workspaceId": "string"
      }
    ],
    "container": {
      "accountId": "string",
      "containerId": "string",
      "domainName": [
        "string"
      ],
      "features": {
        "supportBuiltInVariables": true,
        "supportClients": true,
        "supportEnvironments": true,
        "supportFolders": true,
        "supportGtagConfigs": true,
        "supportTags": true,
        "supportTemplates": true,
        "supportTriggers": true,
        "supportUserPermissions": true,
        "supportVariables": true,
        "supportVersions": true,
        "supportWorkspaces": true,
        "supportZones": true
      },
      "fingerprint": "string",
      "name": "string",
      "notes": "string",
      "path": "string",
      "publicId": "string",
      "tagIds": [
        "string"
      ],
      "tagManagerUrl": "string",
      "taggingServerUrls": [
        "string"
      ],
      "usageContext": [
        "usageContextUnspecified"
      ]
    },
    "containerId": "string",
    "containerVersionId": "string",
    "customTemplate": [
      {
        "accountId": "string",
        "containerId": "string",
        "fingerprint": "string",
        "galleryReference": {
          "host": "string",
          "isModified": true,
          "owner": "string",
          "repository": "string",
          "signature": "string",
          "version": "string"
        },
        "name": "string",
        "path": "string",
        "tagManagerUrl": "string",
        "templateData": "string",
        "templateId": "string",
        "workspaceId": "string"
      }
    ],
    "deleted": true,
    "description": "string",
    "fingerprint": "string",
    "folder": [
      {
        "accountId": "string",
        "containerId": "string",
        "fingerprint": "string",
        "folderId": "string",
        "name": "string",
        "notes": "string",
        "path": "string",
        "tagManagerUrl": "string",
        "workspaceId": "string"
      }
    ],
    "gtagConfig": [
      {
        "accountId": "string",
        "containerId": "string",
        "fingerprint": "string",
        "gtagConfigId": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "path": "string",
        "tagManagerUrl": "string",
        "type": "string",
        "workspaceId": "string"
      }
    ],
    "name": "string",
    "path": "string",
    "tag": [
      {
        "accountId": "string",
        "blockingRuleId": [
          "string"
        ],
        "blockingTriggerId": [
          "string"
        ],
        "consentSettings": {
          "consentStatus": "notSet",
          "consentType": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        },
        "containerId": "string",
        "fingerprint": "string",
        "firingRuleId": [
          "string"
        ],
        "firingTriggerId": [
          "string"
        ],
        "liveOnly": true,
        "monitoringMetadata": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "monitoringMetadataTagNameKey": "string",
        "name": "string",
        "notes": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "parentFolderId": "string",
        "path": "string",
        "paused": true,
        "priority": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "scheduleEndMs": "string",
        "scheduleStartMs": "string",
        "setupTag": [
          {
            "stopOnSetupFailure": true,
            "tagName": "string"
          }
        ],
        "tagFiringOption": "tagFiringOptionUnspecified",
        "tagId": "string",
        "tagManagerUrl": "string",
        "teardownTag": [
          {
            "stopTeardownOnFailure": true,
            "tagName": "string"
          }
        ],
        "type": "string",
        "workspaceId": "string"
      }
    ],
    "tagManagerUrl": "string",
    "trigger": [
      {
        "accountId": "string",
        "autoEventFilter": [
          {
            "parameter": [
              {
                "key": "string",
                "list": [
                  {}
                ],
                "map": [
                  {}
                ],
                "type": "typeUnspecified",
                "value": "string"
              }
            ],
            "type": "conditionTypeUnspecified"
          }
        ],
        "checkValidation": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "containerId": "string",
        "continuousTimeMinMilliseconds": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "customEventFilter": [
          {
            "parameter": [
              {
                "key": "string",
                "list": [
                  {}
                ],
                "map": [
                  {}
                ],
                "type": "typeUnspecified",
                "value": "string"
              }
            ],
            "type": "conditionTypeUnspecified"
          }
        ],
        "eventName": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "filter": [
          {
            "parameter": [
              {
                "key": "string",
                "list": [
                  {}
                ],
                "map": [
                  {}
                ],
                "type": "typeUnspecified",
                "value": "string"
              }
            ],
            "type": "conditionTypeUnspecified"
          }
        ],
        "fingerprint": "string",
        "horizontalScrollPercentageList": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "interval": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "intervalSeconds": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "limit": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "maxTimerLengthSeconds": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "name": "string",
        "notes": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "parentFolderId": "string",
        "path": "string",
        "selector": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "tagManagerUrl": "string",
        "totalTimeMinMilliseconds": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "triggerId": "string",
        "type": "eventTypeUnspecified",
        "uniqueTriggerId": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "verticalScrollPercentageList": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "visibilitySelector": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "visiblePercentageMax": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "visiblePercentageMin": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "waitForTags": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "waitForTagsTimeout": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "workspaceId": "string"
      }
    ],
    "variable": [
      {
        "accountId": "string",
        "containerId": "string",
        "disablingTriggerId": [
          "string"
        ],
        "enablingTriggerId": [
          "string"
        ],
        "fingerprint": "string",
        "formatValue": {
          "caseConversionType": "none",
          "convertFalseToValue": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "convertNullToValue": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "convertTrueToValue": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "convertUndefinedToValue": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        },
        "name": "string",
        "notes": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "parentFolderId": "string",
        "path": "string",
        "scheduleEndMs": "string",
        "scheduleStartMs": "string",
        "tagManagerUrl": "string",
        "type": "string",
        "variableId": "string",
        "workspaceId": "string"
      }
    ],
    "zone": [
      {
        "accountId": "string",
        "boundary": {
          "condition": [
            {
              "parameter": [
                {
                  "key": "string",
                  "list": [
                    {}
                  ],
                  "map": [
                    {}
                  ],
                  "type": "typeUnspecified",
                  "value": "string"
                }
              ],
              "type": "conditionTypeUnspecified"
            }
          ],
          "customEvaluationTriggerId": [
            "string"
          ]
        },
        "childContainer": [
          {
            "nickname": "string",
            "publicId": "string"
          }
        ],
        "containerId": "string",
        "fingerprint": "string",
        "name": "string",
        "notes": "string",
        "path": "string",
        "tagManagerUrl": "string",
        "typeRestriction": {
          "enable": true,
          "whitelistedTypeId": [
            "string"
          ]
        },
        "workspaceId": "string",
        "zoneId": "string"
      }
    ]
  },
  "syncStatus": {
    "mergeConflict": true,
    "syncError": true
  }
}
```

<h3 id="tagmanageraccountscontainersworkspacesquickpreview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[QuickPreviewResponse](#schemaquickpreviewresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containerversions ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containerversions )
</aside>

## tagmanager.accounts.containers.environments.reauthorize

<a id="opIdtagmanager.accounts.containers.environments.reauthorize"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string:reauthorize \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "authorizationCode": "string",
    "authorizationTimestamp": "string",
    "containerId": "string",
    "containerVersionId": "string",
    "description": "string",
    "enableDebug": true,
    "environmentId": "string",
    "fingerprint": "string",
    "name": "string",
    "path": "string",
    "tagManagerUrl": "string",
    "type": "user",
    "url": "string",
    "workspaceId": "string"
  }'
```

`POST /tagmanager/v2/{path}:reauthorize`

Re-generates the authorization code for a GTM Environment.

> Body parameter

```json
{
  "accountId": "string",
  "authorizationCode": "string",
  "authorizationTimestamp": "string",
  "containerId": "string",
  "containerVersionId": "string",
  "description": "string",
  "enableDebug": true,
  "environmentId": "string",
  "fingerprint": "string",
  "name": "string",
  "path": "string",
  "tagManagerUrl": "string",
  "type": "user",
  "url": "string",
  "workspaceId": "string"
}
```

<h3 id="tagmanageraccountscontainersenvironmentsreauthorize-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|GTM Environment's API relative path. Example: accounts/{account_id}/containers/{container_id}/environments/{environment_id}|
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
|body|body|[Environment](#schemaenvironment)|false|none|
|» accountId|body|string|false|GTM Account ID.|
|» authorizationCode|body|string|false|The environment authorization code.|
|» authorizationTimestamp|body|string(google-datetime)|false|The last update time-stamp for the authorization code.|
|» containerId|body|string|false|GTM Container ID.|
|» containerVersionId|body|string|false|Represents a link to a container version.|
|» description|body|string|false|The environment description. Can be set or changed only on USER type environments. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update|
|» enableDebug|body|boolean|false|Whether or not to enable debug by default for the environment. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update|
|» environmentId|body|string|false|GTM Environment ID uniquely identifies the GTM Environment.|
|» fingerprint|body|string|false|The fingerprint of the GTM environment as computed at storage time. This value is recomputed whenever the environment is modified.|
|» name|body|string|false|The environment display name. Can be set or changed only on USER type environments. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update|
|» path|body|string|false|GTM Environment's API relative path.|
|» tagManagerUrl|body|string|false|Auto generated link to the tag manager UI|
|» type|body|string|false|The type of this environment.|
|» url|body|string|false|Default preview page url for the environment. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update|
|» workspaceId|body|string|false|Represents a link to a quick preview of a workspace.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» type|user|
|» type|live|
|» type|latest|
|» type|workspace|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "authorizationCode": "string",
  "authorizationTimestamp": "string",
  "containerId": "string",
  "containerVersionId": "string",
  "description": "string",
  "enableDebug": true,
  "environmentId": "string",
  "fingerprint": "string",
  "name": "string",
  "path": "string",
  "tagManagerUrl": "string",
  "type": "user",
  "url": "string",
  "workspaceId": "string"
}
```

<h3 id="tagmanageraccountscontainersenvironmentsreauthorize-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Environment](#schemaenvironment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.publish ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.publish )
</aside>

## tagmanager.accounts.containers.workspaces.resolve_conflict

<a id="opIdtagmanager.accounts.containers.workspaces.resolve_conflict"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string:resolve_conflict \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "changeStatus": "changeStatusUnspecified",
    "client": {
      "accountId": "string",
      "clientId": "string",
      "containerId": "string",
      "fingerprint": "string",
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "priority": 0,
      "tagManagerUrl": "string",
      "type": "string",
      "workspaceId": "string"
    },
    "folder": {
      "accountId": "string",
      "containerId": "string",
      "fingerprint": "string",
      "folderId": "string",
      "name": "string",
      "notes": "string",
      "path": "string",
      "tagManagerUrl": "string",
      "workspaceId": "string"
    },
    "tag": {
      "accountId": "string",
      "blockingRuleId": [
        "string"
      ],
      "blockingTriggerId": [
        "string"
      ],
      "consentSettings": {
        "consentStatus": "notSet",
        "consentType": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      },
      "containerId": "string",
      "fingerprint": "string",
      "firingRuleId": [
        "string"
      ],
      "firingTriggerId": [
        "string"
      ],
      "liveOnly": true,
      "monitoringMetadata": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "monitoringMetadataTagNameKey": "string",
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "paused": true,
      "priority": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "scheduleEndMs": "string",
      "scheduleStartMs": "string",
      "setupTag": [
        {
          "stopOnSetupFailure": true,
          "tagName": "string"
        }
      ],
      "tagFiringOption": "tagFiringOptionUnspecified",
      "tagId": "string",
      "tagManagerUrl": "string",
      "teardownTag": [
        {
          "stopTeardownOnFailure": true,
          "tagName": "string"
        }
      ],
      "type": "string",
      "workspaceId": "string"
    },
    "trigger": {
      "accountId": "string",
      "autoEventFilter": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "checkValidation": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "containerId": "string",
      "continuousTimeMinMilliseconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "customEventFilter": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "eventName": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "filter": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "fingerprint": "string",
      "horizontalScrollPercentageList": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "interval": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "intervalSeconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "limit": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "maxTimerLengthSeconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "selector": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "tagManagerUrl": "string",
      "totalTimeMinMilliseconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "triggerId": "string",
      "type": "eventTypeUnspecified",
      "uniqueTriggerId": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "verticalScrollPercentageList": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "visibilitySelector": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "visiblePercentageMax": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "visiblePercentageMin": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "waitForTags": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "waitForTagsTimeout": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "workspaceId": "string"
    },
    "variable": {
      "accountId": "string",
      "containerId": "string",
      "disablingTriggerId": [
        "string"
      ],
      "enablingTriggerId": [
        "string"
      ],
      "fingerprint": "string",
      "formatValue": {
        "caseConversionType": "none",
        "convertFalseToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "convertNullToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "convertTrueToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "convertUndefinedToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      },
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "scheduleEndMs": "string",
      "scheduleStartMs": "string",
      "tagManagerUrl": "string",
      "type": "string",
      "variableId": "string",
      "workspaceId": "string"
    }
  }'
```

`POST /tagmanager/v2/{path}:resolve_conflict`

Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.

> Body parameter

```json
{
  "changeStatus": "changeStatusUnspecified",
  "client": {
    "accountId": "string",
    "clientId": "string",
    "containerId": "string",
    "fingerprint": "string",
    "name": "string",
    "notes": "string",
    "parameter": [
      {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      }
    ],
    "parentFolderId": "string",
    "path": "string",
    "priority": 0,
    "tagManagerUrl": "string",
    "type": "string",
    "workspaceId": "string"
  },
  "folder": {
    "accountId": "string",
    "containerId": "string",
    "fingerprint": "string",
    "folderId": "string",
    "name": "string",
    "notes": "string",
    "path": "string",
    "tagManagerUrl": "string",
    "workspaceId": "string"
  },
  "tag": {
    "accountId": "string",
    "blockingRuleId": [
      "string"
    ],
    "blockingTriggerId": [
      "string"
    ],
    "consentSettings": {
      "consentStatus": "notSet",
      "consentType": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      }
    },
    "containerId": "string",
    "fingerprint": "string",
    "firingRuleId": [
      "string"
    ],
    "firingTriggerId": [
      "string"
    ],
    "liveOnly": true,
    "monitoringMetadata": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "monitoringMetadataTagNameKey": "string",
    "name": "string",
    "notes": "string",
    "parameter": [
      {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      }
    ],
    "parentFolderId": "string",
    "path": "string",
    "paused": true,
    "priority": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "scheduleEndMs": "string",
    "scheduleStartMs": "string",
    "setupTag": [
      {
        "stopOnSetupFailure": true,
        "tagName": "string"
      }
    ],
    "tagFiringOption": "tagFiringOptionUnspecified",
    "tagId": "string",
    "tagManagerUrl": "string",
    "teardownTag": [
      {
        "stopTeardownOnFailure": true,
        "tagName": "string"
      }
    ],
    "type": "string",
    "workspaceId": "string"
  },
  "trigger": {
    "accountId": "string",
    "autoEventFilter": [
      {
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "type": "conditionTypeUnspecified"
      }
    ],
    "checkValidation": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "containerId": "string",
    "continuousTimeMinMilliseconds": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "customEventFilter": [
      {
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "type": "conditionTypeUnspecified"
      }
    ],
    "eventName": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "filter": [
      {
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "type": "conditionTypeUnspecified"
      }
    ],
    "fingerprint": "string",
    "horizontalScrollPercentageList": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "interval": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "intervalSeconds": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "limit": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "maxTimerLengthSeconds": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "name": "string",
    "notes": "string",
    "parameter": [
      {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      }
    ],
    "parentFolderId": "string",
    "path": "string",
    "selector": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "tagManagerUrl": "string",
    "totalTimeMinMilliseconds": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "triggerId": "string",
    "type": "eventTypeUnspecified",
    "uniqueTriggerId": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "verticalScrollPercentageList": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "visibilitySelector": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "visiblePercentageMax": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "visiblePercentageMin": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "waitForTags": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "waitForTagsTimeout": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "workspaceId": "string"
  },
  "variable": {
    "accountId": "string",
    "containerId": "string",
    "disablingTriggerId": [
      "string"
    ],
    "enablingTriggerId": [
      "string"
    ],
    "fingerprint": "string",
    "formatValue": {
      "caseConversionType": "none",
      "convertFalseToValue": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "convertNullToValue": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "convertTrueToValue": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "convertUndefinedToValue": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      }
    },
    "name": "string",
    "notes": "string",
    "parameter": [
      {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      }
    ],
    "parentFolderId": "string",
    "path": "string",
    "scheduleEndMs": "string",
    "scheduleStartMs": "string",
    "tagManagerUrl": "string",
    "type": "string",
    "variableId": "string",
    "workspaceId": "string"
  }
}
```

<h3 id="tagmanageraccountscontainersworkspacesresolveconflict-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}|
|fingerprint|query|string|false|When provided, this fingerprint must match the fingerprint of the entity_in_workspace in the merge conflict.|
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
|» changeStatus|body|string|false|Represents how the entity has been changed in the workspace.|
|» client|body|[Client](#schemaclient)|false|The client being represented by the entity.|
|» folder|body|[Folder](#schemafolder)|false|The folder being represented by the entity.|
|» tag|body|[Tag](#schematag)|false|The tag being represented by the entity.|
|» trigger|body|[Trigger](#schematrigger)|false|The trigger being represented by the entity.|
|» variable|body|[Variable](#schemavariable)|false|The variable being represented by the entity.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» changeStatus|changeStatusUnspecified|
|» changeStatus|none|
|» changeStatus|added|
|» changeStatus|deleted|
|» changeStatus|updated|

<h3 id="tagmanageraccountscontainersworkspacesresolveconflict-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers )
</aside>

## tagmanager.accounts.containers.workspaces.zones.revert

<a id="opIdtagmanager.accounts.containers.workspaces.zones.revert"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string:revert \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /tagmanager/v2/{path}:revert`

Reverts changes to a GTM Zone in a GTM Workspace.

<h3 id="tagmanageraccountscontainersworkspaceszonesrevert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|GTM Zone's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/zones/{zone_id}|
|fingerprint|query|string|false|When provided, this fingerprint must match the fingerprint of the zone in storage.|
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
  "zone": {
    "accountId": "string",
    "boundary": {
      "condition": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "customEvaluationTriggerId": [
        "string"
      ]
    },
    "childContainer": [
      {
        "nickname": "string",
        "publicId": "string"
      }
    ],
    "containerId": "string",
    "fingerprint": "string",
    "name": "string",
    "notes": "string",
    "path": "string",
    "tagManagerUrl": "string",
    "typeRestriction": {
      "enable": true,
      "whitelistedTypeId": [
        "string"
      ]
    },
    "workspaceId": "string",
    "zoneId": "string"
  }
}
```

<h3 id="tagmanageraccountscontainersworkspaceszonesrevert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[RevertZoneResponse](#schemarevertzoneresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers )
</aside>

## tagmanager.accounts.containers.versions.set_latest

<a id="opIdtagmanager.accounts.containers.versions.set_latest"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string:set_latest \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /tagmanager/v2/{path}:set_latest`

Sets the latest version used for synchronization of workspaces when detecting conflicts and errors.

<h3 id="tagmanageraccountscontainersversionssetlatest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}|
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
  "accountId": "string",
  "builtInVariable": [
    {
      "accountId": "string",
      "containerId": "string",
      "name": "string",
      "path": "string",
      "type": "builtInVariableTypeUnspecified",
      "workspaceId": "string"
    }
  ],
  "client": [
    {
      "accountId": "string",
      "clientId": "string",
      "containerId": "string",
      "fingerprint": "string",
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "priority": 0,
      "tagManagerUrl": "string",
      "type": "string",
      "workspaceId": "string"
    }
  ],
  "container": {
    "accountId": "string",
    "containerId": "string",
    "domainName": [
      "string"
    ],
    "features": {
      "supportBuiltInVariables": true,
      "supportClients": true,
      "supportEnvironments": true,
      "supportFolders": true,
      "supportGtagConfigs": true,
      "supportTags": true,
      "supportTemplates": true,
      "supportTriggers": true,
      "supportUserPermissions": true,
      "supportVariables": true,
      "supportVersions": true,
      "supportWorkspaces": true,
      "supportZones": true
    },
    "fingerprint": "string",
    "name": "string",
    "notes": "string",
    "path": "string",
    "publicId": "string",
    "tagIds": [
      "string"
    ],
    "tagManagerUrl": "string",
    "taggingServerUrls": [
      "string"
    ],
    "usageContext": [
      "usageContextUnspecified"
    ]
  },
  "containerId": "string",
  "containerVersionId": "string",
  "customTemplate": [
    {
      "accountId": "string",
      "containerId": "string",
      "fingerprint": "string",
      "galleryReference": {
        "host": "string",
        "isModified": true,
        "owner": "string",
        "repository": "string",
        "signature": "string",
        "version": "string"
      },
      "name": "string",
      "path": "string",
      "tagManagerUrl": "string",
      "templateData": "string",
      "templateId": "string",
      "workspaceId": "string"
    }
  ],
  "deleted": true,
  "description": "string",
  "fingerprint": "string",
  "folder": [
    {
      "accountId": "string",
      "containerId": "string",
      "fingerprint": "string",
      "folderId": "string",
      "name": "string",
      "notes": "string",
      "path": "string",
      "tagManagerUrl": "string",
      "workspaceId": "string"
    }
  ],
  "gtagConfig": [
    {
      "accountId": "string",
      "containerId": "string",
      "fingerprint": "string",
      "gtagConfigId": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "path": "string",
      "tagManagerUrl": "string",
      "type": "string",
      "workspaceId": "string"
    }
  ],
  "name": "string",
  "path": "string",
  "tag": [
    {
      "accountId": "string",
      "blockingRuleId": [
        "string"
      ],
      "blockingTriggerId": [
        "string"
      ],
      "consentSettings": {
        "consentStatus": "notSet",
        "consentType": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      },
      "containerId": "string",
      "fingerprint": "string",
      "firingRuleId": [
        "string"
      ],
      "firingTriggerId": [
        "string"
      ],
      "liveOnly": true,
      "monitoringMetadata": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "monitoringMetadataTagNameKey": "string",
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "paused": true,
      "priority": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "scheduleEndMs": "string",
      "scheduleStartMs": "string",
      "setupTag": [
        {
          "stopOnSetupFailure": true,
          "tagName": "string"
        }
      ],
      "tagFiringOption": "tagFiringOptionUnspecified",
      "tagId": "string",
      "tagManagerUrl": "string",
      "teardownTag": [
        {
          "stopTeardownOnFailure": true,
          "tagName": "string"
        }
      ],
      "type": "string",
      "workspaceId": "string"
    }
  ],
  "tagManagerUrl": "string",
  "trigger": [
    {
      "accountId": "string",
      "autoEventFilter": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "checkValidation": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "containerId": "string",
      "continuousTimeMinMilliseconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "customEventFilter": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "eventName": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "filter": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "fingerprint": "string",
      "horizontalScrollPercentageList": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "interval": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "intervalSeconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "limit": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "maxTimerLengthSeconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "selector": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "tagManagerUrl": "string",
      "totalTimeMinMilliseconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "triggerId": "string",
      "type": "eventTypeUnspecified",
      "uniqueTriggerId": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "verticalScrollPercentageList": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "visibilitySelector": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "visiblePercentageMax": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "visiblePercentageMin": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "waitForTags": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "waitForTagsTimeout": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "workspaceId": "string"
    }
  ],
  "variable": [
    {
      "accountId": "string",
      "containerId": "string",
      "disablingTriggerId": [
        "string"
      ],
      "enablingTriggerId": [
        "string"
      ],
      "fingerprint": "string",
      "formatValue": {
        "caseConversionType": "none",
        "convertFalseToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "convertNullToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "convertTrueToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "convertUndefinedToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      },
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "scheduleEndMs": "string",
      "scheduleStartMs": "string",
      "tagManagerUrl": "string",
      "type": "string",
      "variableId": "string",
      "workspaceId": "string"
    }
  ],
  "zone": [
    {
      "accountId": "string",
      "boundary": {
        "condition": [
          {
            "parameter": [
              {
                "key": "string",
                "list": [
                  {}
                ],
                "map": [
                  {}
                ],
                "type": "typeUnspecified",
                "value": "string"
              }
            ],
            "type": "conditionTypeUnspecified"
          }
        ],
        "customEvaluationTriggerId": [
          "string"
        ]
      },
      "childContainer": [
        {
          "nickname": "string",
          "publicId": "string"
        }
      ],
      "containerId": "string",
      "fingerprint": "string",
      "name": "string",
      "notes": "string",
      "path": "string",
      "tagManagerUrl": "string",
      "typeRestriction": {
        "enable": true,
        "whitelistedTypeId": [
          "string"
        ]
      },
      "workspaceId": "string",
      "zoneId": "string"
    }
  ]
}
```

<h3 id="tagmanageraccountscontainersversionssetlatest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ContainerVersion](#schemacontainerversion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers )
</aside>

## tagmanager.accounts.containers.snippet

<a id="opIdtagmanager.accounts.containers.snippet"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string:snippet \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tagmanager/v2/{path}:snippet`

Gets the tagging snippet for a Container.

<h3 id="tagmanageraccountscontainerssnippet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|Container snippet's API relative path. Example: accounts/{account_id}/containers/{container_id}:snippet|
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
  "snippet": "string"
}
```

<h3 id="tagmanageraccountscontainerssnippet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GetContainerSnippetResponse](#schemagetcontainersnippetresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ), Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.readonly )
</aside>

## tagmanager.accounts.containers.workspaces.sync

<a id="opIdtagmanager.accounts.containers.workspaces.sync"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string:sync \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /tagmanager/v2/{path}:sync`

Syncs a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts for modified entities.

<h3 id="tagmanageraccountscontainersworkspacessync-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}|
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
  "mergeConflict": [
    {
      "entityInBaseVersion": {
        "changeStatus": "changeStatusUnspecified",
        "client": {
          "accountId": "string",
          "clientId": "string",
          "containerId": "string",
          "fingerprint": "string",
          "name": "string",
          "notes": "string",
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "parentFolderId": "string",
          "path": "string",
          "priority": 0,
          "tagManagerUrl": "string",
          "type": "string",
          "workspaceId": "string"
        },
        "folder": {
          "accountId": "string",
          "containerId": "string",
          "fingerprint": "string",
          "folderId": "string",
          "name": "string",
          "notes": "string",
          "path": "string",
          "tagManagerUrl": "string",
          "workspaceId": "string"
        },
        "tag": {
          "accountId": "string",
          "blockingRuleId": [
            "string"
          ],
          "blockingTriggerId": [
            "string"
          ],
          "consentSettings": {
            "consentStatus": "notSet",
            "consentType": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          },
          "containerId": "string",
          "fingerprint": "string",
          "firingRuleId": [
            "string"
          ],
          "firingTriggerId": [
            "string"
          ],
          "liveOnly": true,
          "monitoringMetadata": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "monitoringMetadataTagNameKey": "string",
          "name": "string",
          "notes": "string",
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "parentFolderId": "string",
          "path": "string",
          "paused": true,
          "priority": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "scheduleEndMs": "string",
          "scheduleStartMs": "string",
          "setupTag": [
            {
              "stopOnSetupFailure": true,
              "tagName": "string"
            }
          ],
          "tagFiringOption": "tagFiringOptionUnspecified",
          "tagId": "string",
          "tagManagerUrl": "string",
          "teardownTag": [
            {
              "stopTeardownOnFailure": true,
              "tagName": "string"
            }
          ],
          "type": "string",
          "workspaceId": "string"
        },
        "trigger": {
          "accountId": "string",
          "autoEventFilter": [
            {
              "parameter": [
                {
                  "key": "string",
                  "list": [
                    {}
                  ],
                  "map": [
                    {}
                  ],
                  "type": "typeUnspecified",
                  "value": "string"
                }
              ],
              "type": "conditionTypeUnspecified"
            }
          ],
          "checkValidation": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "containerId": "string",
          "continuousTimeMinMilliseconds": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "customEventFilter": [
            {
              "parameter": [
                {
                  "key": "string",
                  "list": [
                    {}
                  ],
                  "map": [
                    {}
                  ],
                  "type": "typeUnspecified",
                  "value": "string"
                }
              ],
              "type": "conditionTypeUnspecified"
            }
          ],
          "eventName": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "filter": [
            {
              "parameter": [
                {
                  "key": "string",
                  "list": [
                    {}
                  ],
                  "map": [
                    {}
                  ],
                  "type": "typeUnspecified",
                  "value": "string"
                }
              ],
              "type": "conditionTypeUnspecified"
            }
          ],
          "fingerprint": "string",
          "horizontalScrollPercentageList": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "interval": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "intervalSeconds": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "limit": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "maxTimerLengthSeconds": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "name": "string",
          "notes": "string",
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "parentFolderId": "string",
          "path": "string",
          "selector": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "tagManagerUrl": "string",
          "totalTimeMinMilliseconds": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "triggerId": "string",
          "type": "eventTypeUnspecified",
          "uniqueTriggerId": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "verticalScrollPercentageList": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "visibilitySelector": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "visiblePercentageMax": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "visiblePercentageMin": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "waitForTags": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "waitForTagsTimeout": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "workspaceId": "string"
        },
        "variable": {
          "accountId": "string",
          "containerId": "string",
          "disablingTriggerId": [
            "string"
          ],
          "enablingTriggerId": [
            "string"
          ],
          "fingerprint": "string",
          "formatValue": {
            "caseConversionType": "none",
            "convertFalseToValue": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            },
            "convertNullToValue": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            },
            "convertTrueToValue": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            },
            "convertUndefinedToValue": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          },
          "name": "string",
          "notes": "string",
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "parentFolderId": "string",
          "path": "string",
          "scheduleEndMs": "string",
          "scheduleStartMs": "string",
          "tagManagerUrl": "string",
          "type": "string",
          "variableId": "string",
          "workspaceId": "string"
        }
      },
      "entityInWorkspace": {
        "changeStatus": "changeStatusUnspecified",
        "client": {
          "accountId": "string",
          "clientId": "string",
          "containerId": "string",
          "fingerprint": "string",
          "name": "string",
          "notes": "string",
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "parentFolderId": "string",
          "path": "string",
          "priority": 0,
          "tagManagerUrl": "string",
          "type": "string",
          "workspaceId": "string"
        },
        "folder": {
          "accountId": "string",
          "containerId": "string",
          "fingerprint": "string",
          "folderId": "string",
          "name": "string",
          "notes": "string",
          "path": "string",
          "tagManagerUrl": "string",
          "workspaceId": "string"
        },
        "tag": {
          "accountId": "string",
          "blockingRuleId": [
            "string"
          ],
          "blockingTriggerId": [
            "string"
          ],
          "consentSettings": {
            "consentStatus": "notSet",
            "consentType": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          },
          "containerId": "string",
          "fingerprint": "string",
          "firingRuleId": [
            "string"
          ],
          "firingTriggerId": [
            "string"
          ],
          "liveOnly": true,
          "monitoringMetadata": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "monitoringMetadataTagNameKey": "string",
          "name": "string",
          "notes": "string",
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "parentFolderId": "string",
          "path": "string",
          "paused": true,
          "priority": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "scheduleEndMs": "string",
          "scheduleStartMs": "string",
          "setupTag": [
            {
              "stopOnSetupFailure": true,
              "tagName": "string"
            }
          ],
          "tagFiringOption": "tagFiringOptionUnspecified",
          "tagId": "string",
          "tagManagerUrl": "string",
          "teardownTag": [
            {
              "stopTeardownOnFailure": true,
              "tagName": "string"
            }
          ],
          "type": "string",
          "workspaceId": "string"
        },
        "trigger": {
          "accountId": "string",
          "autoEventFilter": [
            {
              "parameter": [
                {
                  "key": "string",
                  "list": [
                    {}
                  ],
                  "map": [
                    {}
                  ],
                  "type": "typeUnspecified",
                  "value": "string"
                }
              ],
              "type": "conditionTypeUnspecified"
            }
          ],
          "checkValidation": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "containerId": "string",
          "continuousTimeMinMilliseconds": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "customEventFilter": [
            {
              "parameter": [
                {
                  "key": "string",
                  "list": [
                    {}
                  ],
                  "map": [
                    {}
                  ],
                  "type": "typeUnspecified",
                  "value": "string"
                }
              ],
              "type": "conditionTypeUnspecified"
            }
          ],
          "eventName": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "filter": [
            {
              "parameter": [
                {
                  "key": "string",
                  "list": [
                    {}
                  ],
                  "map": [
                    {}
                  ],
                  "type": "typeUnspecified",
                  "value": "string"
                }
              ],
              "type": "conditionTypeUnspecified"
            }
          ],
          "fingerprint": "string",
          "horizontalScrollPercentageList": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "interval": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "intervalSeconds": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "limit": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "maxTimerLengthSeconds": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "name": "string",
          "notes": "string",
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "parentFolderId": "string",
          "path": "string",
          "selector": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "tagManagerUrl": "string",
          "totalTimeMinMilliseconds": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "triggerId": "string",
          "type": "eventTypeUnspecified",
          "uniqueTriggerId": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "verticalScrollPercentageList": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "visibilitySelector": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "visiblePercentageMax": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "visiblePercentageMin": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "waitForTags": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "waitForTagsTimeout": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "workspaceId": "string"
        },
        "variable": {
          "accountId": "string",
          "containerId": "string",
          "disablingTriggerId": [
            "string"
          ],
          "enablingTriggerId": [
            "string"
          ],
          "fingerprint": "string",
          "formatValue": {
            "caseConversionType": "none",
            "convertFalseToValue": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            },
            "convertNullToValue": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            },
            "convertTrueToValue": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            },
            "convertUndefinedToValue": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          },
          "name": "string",
          "notes": "string",
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "parentFolderId": "string",
          "path": "string",
          "scheduleEndMs": "string",
          "scheduleStartMs": "string",
          "tagManagerUrl": "string",
          "type": "string",
          "variableId": "string",
          "workspaceId": "string"
        }
      }
    }
  ],
  "syncStatus": {
    "mergeConflict": true,
    "syncError": true
  }
}
```

<h3 id="tagmanageraccountscontainersworkspacessync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SyncWorkspaceResponse](#schemasyncworkspaceresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containers )
</aside>

## tagmanager.accounts.containers.versions.undelete

<a id="opIdtagmanager.accounts.containers.versions.undelete"></a>

> Code samples

```bash
curl https://www.googleapis.com/tagmanager/v2/string:undelete \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /tagmanager/v2/{path}:undelete`

Undeletes a Container Version.

<h3 id="tagmanageraccountscontainersversionsundelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}|
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
  "accountId": "string",
  "builtInVariable": [
    {
      "accountId": "string",
      "containerId": "string",
      "name": "string",
      "path": "string",
      "type": "builtInVariableTypeUnspecified",
      "workspaceId": "string"
    }
  ],
  "client": [
    {
      "accountId": "string",
      "clientId": "string",
      "containerId": "string",
      "fingerprint": "string",
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "priority": 0,
      "tagManagerUrl": "string",
      "type": "string",
      "workspaceId": "string"
    }
  ],
  "container": {
    "accountId": "string",
    "containerId": "string",
    "domainName": [
      "string"
    ],
    "features": {
      "supportBuiltInVariables": true,
      "supportClients": true,
      "supportEnvironments": true,
      "supportFolders": true,
      "supportGtagConfigs": true,
      "supportTags": true,
      "supportTemplates": true,
      "supportTriggers": true,
      "supportUserPermissions": true,
      "supportVariables": true,
      "supportVersions": true,
      "supportWorkspaces": true,
      "supportZones": true
    },
    "fingerprint": "string",
    "name": "string",
    "notes": "string",
    "path": "string",
    "publicId": "string",
    "tagIds": [
      "string"
    ],
    "tagManagerUrl": "string",
    "taggingServerUrls": [
      "string"
    ],
    "usageContext": [
      "usageContextUnspecified"
    ]
  },
  "containerId": "string",
  "containerVersionId": "string",
  "customTemplate": [
    {
      "accountId": "string",
      "containerId": "string",
      "fingerprint": "string",
      "galleryReference": {
        "host": "string",
        "isModified": true,
        "owner": "string",
        "repository": "string",
        "signature": "string",
        "version": "string"
      },
      "name": "string",
      "path": "string",
      "tagManagerUrl": "string",
      "templateData": "string",
      "templateId": "string",
      "workspaceId": "string"
    }
  ],
  "deleted": true,
  "description": "string",
  "fingerprint": "string",
  "folder": [
    {
      "accountId": "string",
      "containerId": "string",
      "fingerprint": "string",
      "folderId": "string",
      "name": "string",
      "notes": "string",
      "path": "string",
      "tagManagerUrl": "string",
      "workspaceId": "string"
    }
  ],
  "gtagConfig": [
    {
      "accountId": "string",
      "containerId": "string",
      "fingerprint": "string",
      "gtagConfigId": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "path": "string",
      "tagManagerUrl": "string",
      "type": "string",
      "workspaceId": "string"
    }
  ],
  "name": "string",
  "path": "string",
  "tag": [
    {
      "accountId": "string",
      "blockingRuleId": [
        "string"
      ],
      "blockingTriggerId": [
        "string"
      ],
      "consentSettings": {
        "consentStatus": "notSet",
        "consentType": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      },
      "containerId": "string",
      "fingerprint": "string",
      "firingRuleId": [
        "string"
      ],
      "firingTriggerId": [
        "string"
      ],
      "liveOnly": true,
      "monitoringMetadata": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "monitoringMetadataTagNameKey": "string",
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "paused": true,
      "priority": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "scheduleEndMs": "string",
      "scheduleStartMs": "string",
      "setupTag": [
        {
          "stopOnSetupFailure": true,
          "tagName": "string"
        }
      ],
      "tagFiringOption": "tagFiringOptionUnspecified",
      "tagId": "string",
      "tagManagerUrl": "string",
      "teardownTag": [
        {
          "stopTeardownOnFailure": true,
          "tagName": "string"
        }
      ],
      "type": "string",
      "workspaceId": "string"
    }
  ],
  "tagManagerUrl": "string",
  "trigger": [
    {
      "accountId": "string",
      "autoEventFilter": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "checkValidation": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "containerId": "string",
      "continuousTimeMinMilliseconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "customEventFilter": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "eventName": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "filter": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "fingerprint": "string",
      "horizontalScrollPercentageList": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "interval": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "intervalSeconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "limit": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "maxTimerLengthSeconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "selector": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "tagManagerUrl": "string",
      "totalTimeMinMilliseconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "triggerId": "string",
      "type": "eventTypeUnspecified",
      "uniqueTriggerId": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "verticalScrollPercentageList": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "visibilitySelector": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "visiblePercentageMax": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "visiblePercentageMin": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "waitForTags": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "waitForTagsTimeout": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "workspaceId": "string"
    }
  ],
  "variable": [
    {
      "accountId": "string",
      "containerId": "string",
      "disablingTriggerId": [
        "string"
      ],
      "enablingTriggerId": [
        "string"
      ],
      "fingerprint": "string",
      "formatValue": {
        "caseConversionType": "none",
        "convertFalseToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "convertNullToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "convertTrueToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "convertUndefinedToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      },
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "scheduleEndMs": "string",
      "scheduleStartMs": "string",
      "tagManagerUrl": "string",
      "type": "string",
      "variableId": "string",
      "workspaceId": "string"
    }
  ],
  "zone": [
    {
      "accountId": "string",
      "boundary": {
        "condition": [
          {
            "parameter": [
              {
                "key": "string",
                "list": [
                  {}
                ],
                "map": [
                  {}
                ],
                "type": "typeUnspecified",
                "value": "string"
              }
            ],
            "type": "conditionTypeUnspecified"
          }
        ],
        "customEvaluationTriggerId": [
          "string"
        ]
      },
      "childContainer": [
        {
          "nickname": "string",
          "publicId": "string"
        }
      ],
      "containerId": "string",
      "fingerprint": "string",
      "name": "string",
      "notes": "string",
      "path": "string",
      "tagManagerUrl": "string",
      "typeRestriction": {
        "enable": true,
        "whitelistedTypeId": [
          "string"
        ]
      },
      "workspaceId": "string",
      "zoneId": "string"
    }
  ]
}
```

<h3 id="tagmanageraccountscontainersversionsundelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ContainerVersion](#schemacontainerversion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containerversions ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/tagmanager.edit.containerversions )
</aside>

# Schemas

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "accountId": "string",
  "features": {
    "supportMultipleContainers": true,
    "supportUserPermissions": true
  },
  "fingerprint": "string",
  "name": "string",
  "path": "string",
  "shareData": true,
  "tagManagerUrl": "string"
}
```

Represents a Google Tag Manager Account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|The Account ID uniquely identifies the GTM Account.|
|features|[AccountFeatures](#schemaaccountfeatures)|false|none|Read-only Account feature set|
|fingerprint|string|false|none|The fingerprint of the GTM Account as computed at storage time. This value is recomputed whenever the account is modified.|
|name|string|false|none|Account display name. @mutable tagmanager.accounts.create @mutable tagmanager.accounts.update|
|path|string|false|none|GTM Account's API relative path.|
|shareData|boolean|false|none|Whether the account shares data anonymously with Google and others. This flag enables benchmarking by sharing your data in an anonymous form. Google will remove all identifiable information about your website, combine the data with hundreds of other anonymous sites and report aggregate trends in the benchmarking service. @mutable tagmanager.accounts.create @mutable tagmanager.accounts.update|
|tagManagerUrl|string|false|none|Auto generated link to the tag manager UI|

<h2 id="tocS_AccountAccess">AccountAccess</h2>
<!-- backwards compatibility -->
<a id="schemaaccountaccess"></a>
<a id="schema_AccountAccess"></a>
<a id="tocSaccountaccess"></a>
<a id="tocsaccountaccess"></a>

```json
{
  "permission": "accountPermissionUnspecified"
}
```

Defines the Google Tag Manager Account access permissions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permission|string|false|none|Whether the user has no access, user access, or admin access to an account. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update|

#### Enumerated Values

|Property|Value|
|---|---|
|permission|accountPermissionUnspecified|
|permission|noAccess|
|permission|user|
|permission|admin|

<h2 id="tocS_AccountFeatures">AccountFeatures</h2>
<!-- backwards compatibility -->
<a id="schemaaccountfeatures"></a>
<a id="schema_AccountFeatures"></a>
<a id="tocSaccountfeatures"></a>
<a id="tocsaccountfeatures"></a>

```json
{
  "supportMultipleContainers": true,
  "supportUserPermissions": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|supportMultipleContainers|boolean|false|none|Whether this Account supports multiple Containers.|
|supportUserPermissions|boolean|false|none|Whether this Account supports user permissions managed by GTM.|

<h2 id="tocS_BuiltInVariable">BuiltInVariable</h2>
<!-- backwards compatibility -->
<a id="schemabuiltinvariable"></a>
<a id="schema_BuiltInVariable"></a>
<a id="tocSbuiltinvariable"></a>
<a id="tocsbuiltinvariable"></a>

```json
{
  "accountId": "string",
  "containerId": "string",
  "name": "string",
  "path": "string",
  "type": "builtInVariableTypeUnspecified",
  "workspaceId": "string"
}
```

Built-in variables are a special category of variables that are pre-created and non-customizable. They provide common functionality like accessing properties of the gtm data layer, monitoring clicks, or accessing elements of a page URL.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|GTM Account ID.|
|containerId|string|false|none|GTM Container ID.|
|name|string|false|none|Name of the built-in variable to be used to refer to the built-in variable.|
|path|string|false|none|GTM BuiltInVariable's API relative path.|
|type|string|false|none|Type of built-in variable. @required.tagmanager.accounts.containers.workspaces.built_in_variable.update @mutable tagmanager.accounts.containers.workspaces.built_in_variable.update|
|workspaceId|string|false|none|GTM Workspace ID.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|builtInVariableTypeUnspecified|
|type|pageUrl|
|type|pageHostname|
|type|pagePath|
|type|referrer|
|type|event|
|type|clickElement|
|type|clickClasses|
|type|clickId|
|type|clickTarget|
|type|clickUrl|
|type|clickText|
|type|firstPartyServingUrl|
|type|formElement|
|type|formClasses|
|type|formId|
|type|formTarget|
|type|formUrl|
|type|formText|
|type|errorMessage|
|type|errorUrl|
|type|errorLine|
|type|newHistoryUrl|
|type|oldHistoryUrl|
|type|newHistoryFragment|
|type|oldHistoryFragment|
|type|newHistoryState|
|type|oldHistoryState|
|type|historySource|
|type|containerVersion|
|type|debugMode|
|type|randomNumber|
|type|containerId|
|type|appId|
|type|appName|
|type|appVersionCode|
|type|appVersionName|
|type|language|
|type|osVersion|
|type|platform|
|type|sdkVersion|
|type|deviceName|
|type|resolution|
|type|advertiserId|
|type|advertisingTrackingEnabled|
|type|htmlId|
|type|environmentName|
|type|ampBrowserLanguage|
|type|ampCanonicalPath|
|type|ampCanonicalUrl|
|type|ampCanonicalHost|
|type|ampReferrer|
|type|ampTitle|
|type|ampClientId|
|type|ampClientTimezone|
|type|ampClientTimestamp|
|type|ampClientScreenWidth|
|type|ampClientScreenHeight|
|type|ampClientScrollX|
|type|ampClientScrollY|
|type|ampClientMaxScrollX|
|type|ampClientMaxScrollY|
|type|ampTotalEngagedTime|
|type|ampPageViewId|
|type|ampPageLoadTime|
|type|ampPageDownloadTime|
|type|ampGtmEvent|
|type|eventName|
|type|firebaseEventParameterCampaign|
|type|firebaseEventParameterCampaignAclid|
|type|firebaseEventParameterCampaignAnid|
|type|firebaseEventParameterCampaignClickTimestamp|
|type|firebaseEventParameterCampaignContent|
|type|firebaseEventParameterCampaignCp1|
|type|firebaseEventParameterCampaignGclid|
|type|firebaseEventParameterCampaignSource|
|type|firebaseEventParameterCampaignTerm|
|type|firebaseEventParameterCurrency|
|type|firebaseEventParameterDynamicLinkAcceptTime|
|type|firebaseEventParameterDynamicLinkLinkid|
|type|firebaseEventParameterNotificationMessageDeviceTime|
|type|firebaseEventParameterNotificationMessageId|
|type|firebaseEventParameterNotificationMessageName|
|type|firebaseEventParameterNotificationMessageTime|
|type|firebaseEventParameterNotificationTopic|
|type|firebaseEventParameterPreviousAppVersion|
|type|firebaseEventParameterPreviousOsVersion|
|type|firebaseEventParameterPrice|
|type|firebaseEventParameterProductId|
|type|firebaseEventParameterQuantity|
|type|firebaseEventParameterValue|
|type|videoProvider|
|type|videoUrl|
|type|videoTitle|
|type|videoDuration|
|type|videoPercent|
|type|videoVisible|
|type|videoStatus|
|type|videoCurrentTime|
|type|scrollDepthThreshold|
|type|scrollDepthUnits|
|type|scrollDepthDirection|
|type|elementVisibilityRatio|
|type|elementVisibilityTime|
|type|elementVisibilityFirstTime|
|type|elementVisibilityRecentTime|
|type|requestPath|
|type|requestMethod|
|type|clientName|
|type|queryString|
|type|serverPageLocationUrl|
|type|serverPageLocationPath|
|type|serverPageLocationHostname|
|type|visitorRegion|

<h2 id="tocS_Client">Client</h2>
<!-- backwards compatibility -->
<a id="schemaclient"></a>
<a id="schema_Client"></a>
<a id="tocSclient"></a>
<a id="tocsclient"></a>

```json
{
  "accountId": "string",
  "clientId": "string",
  "containerId": "string",
  "fingerprint": "string",
  "name": "string",
  "notes": "string",
  "parameter": [
    {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    }
  ],
  "parentFolderId": "string",
  "path": "string",
  "priority": 0,
  "tagManagerUrl": "string",
  "type": "string",
  "workspaceId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|GTM Account ID.|
|clientId|string|false|none|The Client ID uniquely identifies the GTM client.|
|containerId|string|false|none|GTM Container ID.|
|fingerprint|string|false|none|The fingerprint of the GTM Client as computed at storage time. This value is recomputed whenever the client is modified.|
|name|string|false|none|Client display name. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update|
|notes|string|false|none|User notes on how to apply this tag in the container. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|parameter|[[Parameter](#schemaparameter)]|false|none|The client's parameters. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update|
|parentFolderId|string|false|none|Parent folder id.|
|path|string|false|none|GTM client's API relative path.|
|priority|integer(int32)|false|none|Priority determines relative firing order. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update|
|tagManagerUrl|string|false|none|Auto generated link to the tag manager UI|
|type|string|false|none|Client type. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update|
|workspaceId|string|false|none|GTM Workspace ID.|

<h2 id="tocS_Condition">Condition</h2>
<!-- backwards compatibility -->
<a id="schemacondition"></a>
<a id="schema_Condition"></a>
<a id="tocScondition"></a>
<a id="tocscondition"></a>

```json
{
  "parameter": [
    {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    }
  ],
  "type": "conditionTypeUnspecified"
}
```

Represents a predicate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parameter|[[Parameter](#schemaparameter)]|false|none|A list of named parameters (key/value), depending on the condition's type. Notes: - For binary operators, include parameters named arg0 and arg1 for specifying the left and right operands, respectively. - At this time, the left operand (arg0) must be a reference to a variable. - For case-insensitive Regex matching, include a boolean parameter named ignore_case that is set to true. If not specified or set to any other value, the matching will be case sensitive. - To negate an operator, include a boolean parameter named negate boolean parameter that is set to true. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|type|string|false|none|The type of operator for this condition. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|

#### Enumerated Values

|Property|Value|
|---|---|
|type|conditionTypeUnspecified|
|type|equals|
|type|contains|
|type|startsWith|
|type|endsWith|
|type|matchRegex|
|type|greater|
|type|greaterOrEquals|
|type|less|
|type|lessOrEquals|
|type|cssSelector|
|type|urlMatches|

<h2 id="tocS_Container">Container</h2>
<!-- backwards compatibility -->
<a id="schemacontainer"></a>
<a id="schema_Container"></a>
<a id="tocScontainer"></a>
<a id="tocscontainer"></a>

```json
{
  "accountId": "string",
  "containerId": "string",
  "domainName": [
    "string"
  ],
  "features": {
    "supportBuiltInVariables": true,
    "supportClients": true,
    "supportEnvironments": true,
    "supportFolders": true,
    "supportGtagConfigs": true,
    "supportTags": true,
    "supportTemplates": true,
    "supportTriggers": true,
    "supportUserPermissions": true,
    "supportVariables": true,
    "supportVersions": true,
    "supportWorkspaces": true,
    "supportZones": true
  },
  "fingerprint": "string",
  "name": "string",
  "notes": "string",
  "path": "string",
  "publicId": "string",
  "tagIds": [
    "string"
  ],
  "tagManagerUrl": "string",
  "taggingServerUrls": [
    "string"
  ],
  "usageContext": [
    "usageContextUnspecified"
  ]
}
```

Represents a Google Tag Manager Container, which specifies the platform tags will run on, manages workspaces, and retains container versions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|GTM Account ID.|
|containerId|string|false|none|The Container ID uniquely identifies the GTM Container.|
|domainName|[string]|false|none|List of domain names associated with the Container. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update|
|features|[ContainerFeatures](#schemacontainerfeatures)|false|none|Read-only Container feature set.|
|fingerprint|string|false|none|The fingerprint of the GTM Container as computed at storage time. This value is recomputed whenever the account is modified.|
|name|string|false|none|Container display name. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update|
|notes|string|false|none|Container Notes. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update|
|path|string|false|none|GTM Container's API relative path.|
|publicId|string|false|none|Container Public ID.|
|tagIds|[string]|false|none|All Tag IDs that refer to this Container.|
|tagManagerUrl|string|false|none|Auto generated link to the tag manager UI|
|taggingServerUrls|[string]|false|none|List of server-side container URLs for the Container. If multiple URLs are provided, all URL paths must match. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update|
|usageContext|[string]|false|none|List of Usage Contexts for the Container. Valid values include: web, android, or ios. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update|

#### Enumerated Values

|Property|Value|
|---|---|
|usageContext|usageContextUnspecified|
|usageContext|web|
|usageContext|android|
|usageContext|ios|
|usageContext|androidSdk5|
|usageContext|iosSdk5|
|usageContext|amp|
|usageContext|server|

<h2 id="tocS_ContainerAccess">ContainerAccess</h2>
<!-- backwards compatibility -->
<a id="schemacontaineraccess"></a>
<a id="schema_ContainerAccess"></a>
<a id="tocScontaineraccess"></a>
<a id="tocscontaineraccess"></a>

```json
{
  "containerId": "string",
  "permission": "containerPermissionUnspecified"
}
```

Defines the Google Tag Manager Container access permissions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerId|string|false|none|GTM Container ID. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update|
|permission|string|false|none|List of Container permissions. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update|

#### Enumerated Values

|Property|Value|
|---|---|
|permission|containerPermissionUnspecified|
|permission|noAccess|
|permission|read|
|permission|edit|
|permission|approve|
|permission|publish|

<h2 id="tocS_ContainerFeatures">ContainerFeatures</h2>
<!-- backwards compatibility -->
<a id="schemacontainerfeatures"></a>
<a id="schema_ContainerFeatures"></a>
<a id="tocScontainerfeatures"></a>
<a id="tocscontainerfeatures"></a>

```json
{
  "supportBuiltInVariables": true,
  "supportClients": true,
  "supportEnvironments": true,
  "supportFolders": true,
  "supportGtagConfigs": true,
  "supportTags": true,
  "supportTemplates": true,
  "supportTriggers": true,
  "supportUserPermissions": true,
  "supportVariables": true,
  "supportVersions": true,
  "supportWorkspaces": true,
  "supportZones": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|supportBuiltInVariables|boolean|false|none|Whether this Container supports built-in variables|
|supportClients|boolean|false|none|Whether this Container supports clients.|
|supportEnvironments|boolean|false|none|Whether this Container supports environments.|
|supportFolders|boolean|false|none|Whether this Container supports folders.|
|supportGtagConfigs|boolean|false|none|Whether this Container supports Google tag config.|
|supportTags|boolean|false|none|Whether this Container supports tags.|
|supportTemplates|boolean|false|none|Whether this Container supports templates.|
|supportTriggers|boolean|false|none|Whether this Container supports triggers.|
|supportUserPermissions|boolean|false|none|Whether this Container supports user permissions managed by GTM.|
|supportVariables|boolean|false|none|Whether this Container supports variables.|
|supportVersions|boolean|false|none|Whether this Container supports Container versions.|
|supportWorkspaces|boolean|false|none|Whether this Container supports workspaces.|
|supportZones|boolean|false|none|Whether this Container supports zones.|

<h2 id="tocS_ContainerVersion">ContainerVersion</h2>
<!-- backwards compatibility -->
<a id="schemacontainerversion"></a>
<a id="schema_ContainerVersion"></a>
<a id="tocScontainerversion"></a>
<a id="tocscontainerversion"></a>

```json
{
  "accountId": "string",
  "builtInVariable": [
    {
      "accountId": "string",
      "containerId": "string",
      "name": "string",
      "path": "string",
      "type": "builtInVariableTypeUnspecified",
      "workspaceId": "string"
    }
  ],
  "client": [
    {
      "accountId": "string",
      "clientId": "string",
      "containerId": "string",
      "fingerprint": "string",
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "priority": 0,
      "tagManagerUrl": "string",
      "type": "string",
      "workspaceId": "string"
    }
  ],
  "container": {
    "accountId": "string",
    "containerId": "string",
    "domainName": [
      "string"
    ],
    "features": {
      "supportBuiltInVariables": true,
      "supportClients": true,
      "supportEnvironments": true,
      "supportFolders": true,
      "supportGtagConfigs": true,
      "supportTags": true,
      "supportTemplates": true,
      "supportTriggers": true,
      "supportUserPermissions": true,
      "supportVariables": true,
      "supportVersions": true,
      "supportWorkspaces": true,
      "supportZones": true
    },
    "fingerprint": "string",
    "name": "string",
    "notes": "string",
    "path": "string",
    "publicId": "string",
    "tagIds": [
      "string"
    ],
    "tagManagerUrl": "string",
    "taggingServerUrls": [
      "string"
    ],
    "usageContext": [
      "usageContextUnspecified"
    ]
  },
  "containerId": "string",
  "containerVersionId": "string",
  "customTemplate": [
    {
      "accountId": "string",
      "containerId": "string",
      "fingerprint": "string",
      "galleryReference": {
        "host": "string",
        "isModified": true,
        "owner": "string",
        "repository": "string",
        "signature": "string",
        "version": "string"
      },
      "name": "string",
      "path": "string",
      "tagManagerUrl": "string",
      "templateData": "string",
      "templateId": "string",
      "workspaceId": "string"
    }
  ],
  "deleted": true,
  "description": "string",
  "fingerprint": "string",
  "folder": [
    {
      "accountId": "string",
      "containerId": "string",
      "fingerprint": "string",
      "folderId": "string",
      "name": "string",
      "notes": "string",
      "path": "string",
      "tagManagerUrl": "string",
      "workspaceId": "string"
    }
  ],
  "gtagConfig": [
    {
      "accountId": "string",
      "containerId": "string",
      "fingerprint": "string",
      "gtagConfigId": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "path": "string",
      "tagManagerUrl": "string",
      "type": "string",
      "workspaceId": "string"
    }
  ],
  "name": "string",
  "path": "string",
  "tag": [
    {
      "accountId": "string",
      "blockingRuleId": [
        "string"
      ],
      "blockingTriggerId": [
        "string"
      ],
      "consentSettings": {
        "consentStatus": "notSet",
        "consentType": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      },
      "containerId": "string",
      "fingerprint": "string",
      "firingRuleId": [
        "string"
      ],
      "firingTriggerId": [
        "string"
      ],
      "liveOnly": true,
      "monitoringMetadata": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "monitoringMetadataTagNameKey": "string",
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "paused": true,
      "priority": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "scheduleEndMs": "string",
      "scheduleStartMs": "string",
      "setupTag": [
        {
          "stopOnSetupFailure": true,
          "tagName": "string"
        }
      ],
      "tagFiringOption": "tagFiringOptionUnspecified",
      "tagId": "string",
      "tagManagerUrl": "string",
      "teardownTag": [
        {
          "stopTeardownOnFailure": true,
          "tagName": "string"
        }
      ],
      "type": "string",
      "workspaceId": "string"
    }
  ],
  "tagManagerUrl": "string",
  "trigger": [
    {
      "accountId": "string",
      "autoEventFilter": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "checkValidation": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "containerId": "string",
      "continuousTimeMinMilliseconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "customEventFilter": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "eventName": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "filter": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "fingerprint": "string",
      "horizontalScrollPercentageList": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "interval": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "intervalSeconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "limit": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "maxTimerLengthSeconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "selector": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "tagManagerUrl": "string",
      "totalTimeMinMilliseconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "triggerId": "string",
      "type": "eventTypeUnspecified",
      "uniqueTriggerId": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "verticalScrollPercentageList": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "visibilitySelector": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "visiblePercentageMax": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "visiblePercentageMin": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "waitForTags": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "waitForTagsTimeout": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "workspaceId": "string"
    }
  ],
  "variable": [
    {
      "accountId": "string",
      "containerId": "string",
      "disablingTriggerId": [
        "string"
      ],
      "enablingTriggerId": [
        "string"
      ],
      "fingerprint": "string",
      "formatValue": {
        "caseConversionType": "none",
        "convertFalseToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "convertNullToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "convertTrueToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "convertUndefinedToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      },
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "scheduleEndMs": "string",
      "scheduleStartMs": "string",
      "tagManagerUrl": "string",
      "type": "string",
      "variableId": "string",
      "workspaceId": "string"
    }
  ],
  "zone": [
    {
      "accountId": "string",
      "boundary": {
        "condition": [
          {
            "parameter": [
              {
                "key": "string",
                "list": [
                  {}
                ],
                "map": [
                  {}
                ],
                "type": "typeUnspecified",
                "value": "string"
              }
            ],
            "type": "conditionTypeUnspecified"
          }
        ],
        "customEvaluationTriggerId": [
          "string"
        ]
      },
      "childContainer": [
        {
          "nickname": "string",
          "publicId": "string"
        }
      ],
      "containerId": "string",
      "fingerprint": "string",
      "name": "string",
      "notes": "string",
      "path": "string",
      "tagManagerUrl": "string",
      "typeRestriction": {
        "enable": true,
        "whitelistedTypeId": [
          "string"
        ]
      },
      "workspaceId": "string",
      "zoneId": "string"
    }
  ]
}
```

Represents a Google Tag Manager Container Version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|GTM Account ID.|
|builtInVariable|[[BuiltInVariable](#schemabuiltinvariable)]|false|none|The built-in variables in the container that this version was taken from.|
|client|[[Client](#schemaclient)]|false|none|The clients in the container that this version was taken from.|
|container|[Container](#schemacontainer)|false|none|The container that this version was taken from.|
|containerId|string|false|none|GTM Container ID.|
|containerVersionId|string|false|none|The Container Version ID uniquely identifies the GTM Container Version.|
|customTemplate|[[CustomTemplate](#schemacustomtemplate)]|false|none|The custom templates in the container that this version was taken from.|
|deleted|boolean|false|none|A value of true indicates this container version has been deleted.|
|description|string|false|none|Container version description. @mutable tagmanager.accounts.containers.versions.update|
|fingerprint|string|false|none|The fingerprint of the GTM Container Version as computed at storage time. This value is recomputed whenever the container version is modified.|
|folder|[[Folder](#schemafolder)]|false|none|The folders in the container that this version was taken from.|
|gtagConfig|[[GtagConfig](#schemagtagconfig)]|false|none|The Google tag configs in the container that this version was taken from.|
|name|string|false|none|Container version display name. @mutable tagmanager.accounts.containers.versions.update|
|path|string|false|none|GTM Container Version's API relative path.|
|tag|[[Tag](#schematag)]|false|none|The tags in the container that this version was taken from.|
|tagManagerUrl|string|false|none|Auto generated link to the tag manager UI|
|trigger|[[Trigger](#schematrigger)]|false|none|The triggers in the container that this version was taken from.|
|variable|[[Variable](#schemavariable)]|false|none|The variables in the container that this version was taken from.|
|zone|[[Zone](#schemazone)]|false|none|The zones in the container that this version was taken from.|

<h2 id="tocS_ContainerVersionHeader">ContainerVersionHeader</h2>
<!-- backwards compatibility -->
<a id="schemacontainerversionheader"></a>
<a id="schema_ContainerVersionHeader"></a>
<a id="tocScontainerversionheader"></a>
<a id="tocscontainerversionheader"></a>

```json
{
  "accountId": "string",
  "containerId": "string",
  "containerVersionId": "string",
  "deleted": true,
  "name": "string",
  "numClients": "string",
  "numCustomTemplates": "string",
  "numGtagConfigs": "string",
  "numMacros": "string",
  "numRules": "string",
  "numTags": "string",
  "numTransformations": "string",
  "numTriggers": "string",
  "numVariables": "string",
  "numZones": "string",
  "path": "string"
}
```

Represents a Google Tag Manager Container Version Header.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|GTM Account ID.|
|containerId|string|false|none|GTM Container ID.|
|containerVersionId|string|false|none|The Container Version ID uniquely identifies the GTM Container Version.|
|deleted|boolean|false|none|A value of true indicates this container version has been deleted.|
|name|string|false|none|Container version display name.|
|numClients|string|false|none|Number of clients in the container version.|
|numCustomTemplates|string|false|none|Number of custom templates in the container version.|
|numGtagConfigs|string|false|none|Number of Google tag configs in the container version.|
|numMacros|string|false|none|Number of macros in the container version.|
|numRules|string|false|none|Number of rules in the container version.|
|numTags|string|false|none|Number of tags in the container version.|
|numTransformations|string|false|none|Number of transformations in the container version.|
|numTriggers|string|false|none|Number of triggers in the container version.|
|numVariables|string|false|none|Number of variables in the container version.|
|numZones|string|false|none|Number of zones in the container version.|
|path|string|false|none|GTM Container Version's API relative path.|

<h2 id="tocS_CreateBuiltInVariableResponse">CreateBuiltInVariableResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatebuiltinvariableresponse"></a>
<a id="schema_CreateBuiltInVariableResponse"></a>
<a id="tocScreatebuiltinvariableresponse"></a>
<a id="tocscreatebuiltinvariableresponse"></a>

```json
{
  "builtInVariable": [
    {
      "accountId": "string",
      "containerId": "string",
      "name": "string",
      "path": "string",
      "type": "builtInVariableTypeUnspecified",
      "workspaceId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|builtInVariable|[[BuiltInVariable](#schemabuiltinvariable)]|false|none|List of created built-in variables.|

<h2 id="tocS_CreateContainerVersionRequestVersionOptions">CreateContainerVersionRequestVersionOptions</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontainerversionrequestversionoptions"></a>
<a id="schema_CreateContainerVersionRequestVersionOptions"></a>
<a id="tocScreatecontainerversionrequestversionoptions"></a>
<a id="tocscreatecontainerversionrequestversionoptions"></a>

```json
{
  "name": "string",
  "notes": "string"
}
```

Options for new container versions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the container version to be created.|
|notes|string|false|none|The notes of the container version to be created.|

<h2 id="tocS_CreateContainerVersionResponse">CreateContainerVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecontainerversionresponse"></a>
<a id="schema_CreateContainerVersionResponse"></a>
<a id="tocScreatecontainerversionresponse"></a>
<a id="tocscreatecontainerversionresponse"></a>

```json
{
  "compilerError": true,
  "containerVersion": {
    "accountId": "string",
    "builtInVariable": [
      {
        "accountId": "string",
        "containerId": "string",
        "name": "string",
        "path": "string",
        "type": "builtInVariableTypeUnspecified",
        "workspaceId": "string"
      }
    ],
    "client": [
      {
        "accountId": "string",
        "clientId": "string",
        "containerId": "string",
        "fingerprint": "string",
        "name": "string",
        "notes": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "parentFolderId": "string",
        "path": "string",
        "priority": 0,
        "tagManagerUrl": "string",
        "type": "string",
        "workspaceId": "string"
      }
    ],
    "container": {
      "accountId": "string",
      "containerId": "string",
      "domainName": [
        "string"
      ],
      "features": {
        "supportBuiltInVariables": true,
        "supportClients": true,
        "supportEnvironments": true,
        "supportFolders": true,
        "supportGtagConfigs": true,
        "supportTags": true,
        "supportTemplates": true,
        "supportTriggers": true,
        "supportUserPermissions": true,
        "supportVariables": true,
        "supportVersions": true,
        "supportWorkspaces": true,
        "supportZones": true
      },
      "fingerprint": "string",
      "name": "string",
      "notes": "string",
      "path": "string",
      "publicId": "string",
      "tagIds": [
        "string"
      ],
      "tagManagerUrl": "string",
      "taggingServerUrls": [
        "string"
      ],
      "usageContext": [
        "usageContextUnspecified"
      ]
    },
    "containerId": "string",
    "containerVersionId": "string",
    "customTemplate": [
      {
        "accountId": "string",
        "containerId": "string",
        "fingerprint": "string",
        "galleryReference": {
          "host": "string",
          "isModified": true,
          "owner": "string",
          "repository": "string",
          "signature": "string",
          "version": "string"
        },
        "name": "string",
        "path": "string",
        "tagManagerUrl": "string",
        "templateData": "string",
        "templateId": "string",
        "workspaceId": "string"
      }
    ],
    "deleted": true,
    "description": "string",
    "fingerprint": "string",
    "folder": [
      {
        "accountId": "string",
        "containerId": "string",
        "fingerprint": "string",
        "folderId": "string",
        "name": "string",
        "notes": "string",
        "path": "string",
        "tagManagerUrl": "string",
        "workspaceId": "string"
      }
    ],
    "gtagConfig": [
      {
        "accountId": "string",
        "containerId": "string",
        "fingerprint": "string",
        "gtagConfigId": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "path": "string",
        "tagManagerUrl": "string",
        "type": "string",
        "workspaceId": "string"
      }
    ],
    "name": "string",
    "path": "string",
    "tag": [
      {
        "accountId": "string",
        "blockingRuleId": [
          "string"
        ],
        "blockingTriggerId": [
          "string"
        ],
        "consentSettings": {
          "consentStatus": "notSet",
          "consentType": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        },
        "containerId": "string",
        "fingerprint": "string",
        "firingRuleId": [
          "string"
        ],
        "firingTriggerId": [
          "string"
        ],
        "liveOnly": true,
        "monitoringMetadata": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "monitoringMetadataTagNameKey": "string",
        "name": "string",
        "notes": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "parentFolderId": "string",
        "path": "string",
        "paused": true,
        "priority": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "scheduleEndMs": "string",
        "scheduleStartMs": "string",
        "setupTag": [
          {
            "stopOnSetupFailure": true,
            "tagName": "string"
          }
        ],
        "tagFiringOption": "tagFiringOptionUnspecified",
        "tagId": "string",
        "tagManagerUrl": "string",
        "teardownTag": [
          {
            "stopTeardownOnFailure": true,
            "tagName": "string"
          }
        ],
        "type": "string",
        "workspaceId": "string"
      }
    ],
    "tagManagerUrl": "string",
    "trigger": [
      {
        "accountId": "string",
        "autoEventFilter": [
          {
            "parameter": [
              {
                "key": "string",
                "list": [
                  {}
                ],
                "map": [
                  {}
                ],
                "type": "typeUnspecified",
                "value": "string"
              }
            ],
            "type": "conditionTypeUnspecified"
          }
        ],
        "checkValidation": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "containerId": "string",
        "continuousTimeMinMilliseconds": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "customEventFilter": [
          {
            "parameter": [
              {
                "key": "string",
                "list": [
                  {}
                ],
                "map": [
                  {}
                ],
                "type": "typeUnspecified",
                "value": "string"
              }
            ],
            "type": "conditionTypeUnspecified"
          }
        ],
        "eventName": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "filter": [
          {
            "parameter": [
              {
                "key": "string",
                "list": [
                  {}
                ],
                "map": [
                  {}
                ],
                "type": "typeUnspecified",
                "value": "string"
              }
            ],
            "type": "conditionTypeUnspecified"
          }
        ],
        "fingerprint": "string",
        "horizontalScrollPercentageList": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "interval": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "intervalSeconds": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "limit": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "maxTimerLengthSeconds": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "name": "string",
        "notes": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "parentFolderId": "string",
        "path": "string",
        "selector": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "tagManagerUrl": "string",
        "totalTimeMinMilliseconds": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "triggerId": "string",
        "type": "eventTypeUnspecified",
        "uniqueTriggerId": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "verticalScrollPercentageList": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "visibilitySelector": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "visiblePercentageMax": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "visiblePercentageMin": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "waitForTags": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "waitForTagsTimeout": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "workspaceId": "string"
      }
    ],
    "variable": [
      {
        "accountId": "string",
        "containerId": "string",
        "disablingTriggerId": [
          "string"
        ],
        "enablingTriggerId": [
          "string"
        ],
        "fingerprint": "string",
        "formatValue": {
          "caseConversionType": "none",
          "convertFalseToValue": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "convertNullToValue": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "convertTrueToValue": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "convertUndefinedToValue": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        },
        "name": "string",
        "notes": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "parentFolderId": "string",
        "path": "string",
        "scheduleEndMs": "string",
        "scheduleStartMs": "string",
        "tagManagerUrl": "string",
        "type": "string",
        "variableId": "string",
        "workspaceId": "string"
      }
    ],
    "zone": [
      {
        "accountId": "string",
        "boundary": {
          "condition": [
            {
              "parameter": [
                {
                  "key": "string",
                  "list": [
                    {}
                  ],
                  "map": [
                    {}
                  ],
                  "type": "typeUnspecified",
                  "value": "string"
                }
              ],
              "type": "conditionTypeUnspecified"
            }
          ],
          "customEvaluationTriggerId": [
            "string"
          ]
        },
        "childContainer": [
          {
            "nickname": "string",
            "publicId": "string"
          }
        ],
        "containerId": "string",
        "fingerprint": "string",
        "name": "string",
        "notes": "string",
        "path": "string",
        "tagManagerUrl": "string",
        "typeRestriction": {
          "enable": true,
          "whitelistedTypeId": [
            "string"
          ]
        },
        "workspaceId": "string",
        "zoneId": "string"
      }
    ]
  },
  "newWorkspacePath": "string",
  "syncStatus": {
    "mergeConflict": true,
    "syncError": true
  }
}
```

Create container versions response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compilerError|boolean|false|none|Compiler errors or not.|
|containerVersion|[ContainerVersion](#schemacontainerversion)|false|none|The container version created.|
|newWorkspacePath|string|false|none|Auto generated workspace path created as a result of version creation. This field should only be populated if the created version was not a quick preview.|
|syncStatus|[SyncStatus](#schemasyncstatus)|false|none|Whether version creation failed when syncing the workspace to the latest container version.|

<h2 id="tocS_CustomTemplate">CustomTemplate</h2>
<!-- backwards compatibility -->
<a id="schemacustomtemplate"></a>
<a id="schema_CustomTemplate"></a>
<a id="tocScustomtemplate"></a>
<a id="tocscustomtemplate"></a>

```json
{
  "accountId": "string",
  "containerId": "string",
  "fingerprint": "string",
  "galleryReference": {
    "host": "string",
    "isModified": true,
    "owner": "string",
    "repository": "string",
    "signature": "string",
    "version": "string"
  },
  "name": "string",
  "path": "string",
  "tagManagerUrl": "string",
  "templateData": "string",
  "templateId": "string",
  "workspaceId": "string"
}
```

Represents a Google Tag Manager Custom Template's contents.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|GTM Account ID.|
|containerId|string|false|none|GTM Container ID.|
|fingerprint|string|false|none|The fingerprint of the GTM Custom Template as computed at storage time. This value is recomputed whenever the template is modified.|
|galleryReference|[GalleryReference](#schemagalleryreference)|false|none|A reference to the Community Template Gallery entry.|
|name|string|false|none|Custom Template display name.|
|path|string|false|none|GTM Custom Template's API relative path.|
|tagManagerUrl|string|false|none|Auto generated link to the tag manager UI|
|templateData|string|false|none|The custom template in text format.|
|templateId|string|false|none|The Custom Template ID uniquely identifies the GTM custom template.|
|workspaceId|string|false|none|GTM Workspace ID.|

<h2 id="tocS_Destination">Destination</h2>
<!-- backwards compatibility -->
<a id="schemadestination"></a>
<a id="schema_Destination"></a>
<a id="tocSdestination"></a>
<a id="tocsdestination"></a>

```json
{
  "accountId": "string",
  "containerId": "string",
  "destinationId": "string",
  "destinationLinkId": "string",
  "fingerprint": "string",
  "name": "string",
  "path": "string",
  "tagManagerUrl": "string"
}
```

Represents a Google Tag Destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|GTM Account ID.|
|containerId|string|false|none|GTM Container ID.|
|destinationId|string|false|none|Destination ID.|
|destinationLinkId|string|false|none|The Destination link ID uniquely identifies the Destination.|
|fingerprint|string|false|none|The fingerprint of the Google Tag Destination as computed at storage time. This value is recomputed whenever the destination is modified.|
|name|string|false|none|Destination display name.|
|path|string|false|none|Destination's API relative path.|
|tagManagerUrl|string|false|none|Auto generated link to the tag manager UI.|

<h2 id="tocS_Entity">Entity</h2>
<!-- backwards compatibility -->
<a id="schemaentity"></a>
<a id="schema_Entity"></a>
<a id="tocSentity"></a>
<a id="tocsentity"></a>

```json
{
  "changeStatus": "changeStatusUnspecified",
  "client": {
    "accountId": "string",
    "clientId": "string",
    "containerId": "string",
    "fingerprint": "string",
    "name": "string",
    "notes": "string",
    "parameter": [
      {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      }
    ],
    "parentFolderId": "string",
    "path": "string",
    "priority": 0,
    "tagManagerUrl": "string",
    "type": "string",
    "workspaceId": "string"
  },
  "folder": {
    "accountId": "string",
    "containerId": "string",
    "fingerprint": "string",
    "folderId": "string",
    "name": "string",
    "notes": "string",
    "path": "string",
    "tagManagerUrl": "string",
    "workspaceId": "string"
  },
  "tag": {
    "accountId": "string",
    "blockingRuleId": [
      "string"
    ],
    "blockingTriggerId": [
      "string"
    ],
    "consentSettings": {
      "consentStatus": "notSet",
      "consentType": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      }
    },
    "containerId": "string",
    "fingerprint": "string",
    "firingRuleId": [
      "string"
    ],
    "firingTriggerId": [
      "string"
    ],
    "liveOnly": true,
    "monitoringMetadata": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "monitoringMetadataTagNameKey": "string",
    "name": "string",
    "notes": "string",
    "parameter": [
      {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      }
    ],
    "parentFolderId": "string",
    "path": "string",
    "paused": true,
    "priority": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "scheduleEndMs": "string",
    "scheduleStartMs": "string",
    "setupTag": [
      {
        "stopOnSetupFailure": true,
        "tagName": "string"
      }
    ],
    "tagFiringOption": "tagFiringOptionUnspecified",
    "tagId": "string",
    "tagManagerUrl": "string",
    "teardownTag": [
      {
        "stopTeardownOnFailure": true,
        "tagName": "string"
      }
    ],
    "type": "string",
    "workspaceId": "string"
  },
  "trigger": {
    "accountId": "string",
    "autoEventFilter": [
      {
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "type": "conditionTypeUnspecified"
      }
    ],
    "checkValidation": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "containerId": "string",
    "continuousTimeMinMilliseconds": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "customEventFilter": [
      {
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "type": "conditionTypeUnspecified"
      }
    ],
    "eventName": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "filter": [
      {
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "type": "conditionTypeUnspecified"
      }
    ],
    "fingerprint": "string",
    "horizontalScrollPercentageList": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "interval": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "intervalSeconds": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "limit": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "maxTimerLengthSeconds": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "name": "string",
    "notes": "string",
    "parameter": [
      {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      }
    ],
    "parentFolderId": "string",
    "path": "string",
    "selector": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "tagManagerUrl": "string",
    "totalTimeMinMilliseconds": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "triggerId": "string",
    "type": "eventTypeUnspecified",
    "uniqueTriggerId": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "verticalScrollPercentageList": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "visibilitySelector": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "visiblePercentageMax": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "visiblePercentageMin": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "waitForTags": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "waitForTagsTimeout": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "workspaceId": "string"
  },
  "variable": {
    "accountId": "string",
    "containerId": "string",
    "disablingTriggerId": [
      "string"
    ],
    "enablingTriggerId": [
      "string"
    ],
    "fingerprint": "string",
    "formatValue": {
      "caseConversionType": "none",
      "convertFalseToValue": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "convertNullToValue": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "convertTrueToValue": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "convertUndefinedToValue": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      }
    },
    "name": "string",
    "notes": "string",
    "parameter": [
      {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      }
    ],
    "parentFolderId": "string",
    "path": "string",
    "scheduleEndMs": "string",
    "scheduleStartMs": "string",
    "tagManagerUrl": "string",
    "type": "string",
    "variableId": "string",
    "workspaceId": "string"
  }
}
```

A workspace entity that may represent a tag, trigger, variable, or folder in addition to its status in the workspace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changeStatus|string|false|none|Represents how the entity has been changed in the workspace.|
|client|[Client](#schemaclient)|false|none|The client being represented by the entity.|
|folder|[Folder](#schemafolder)|false|none|The folder being represented by the entity.|
|tag|[Tag](#schematag)|false|none|The tag being represented by the entity.|
|trigger|[Trigger](#schematrigger)|false|none|The trigger being represented by the entity.|
|variable|[Variable](#schemavariable)|false|none|The variable being represented by the entity.|

#### Enumerated Values

|Property|Value|
|---|---|
|changeStatus|changeStatusUnspecified|
|changeStatus|none|
|changeStatus|added|
|changeStatus|deleted|
|changeStatus|updated|

<h2 id="tocS_Environment">Environment</h2>
<!-- backwards compatibility -->
<a id="schemaenvironment"></a>
<a id="schema_Environment"></a>
<a id="tocSenvironment"></a>
<a id="tocsenvironment"></a>

```json
{
  "accountId": "string",
  "authorizationCode": "string",
  "authorizationTimestamp": "string",
  "containerId": "string",
  "containerVersionId": "string",
  "description": "string",
  "enableDebug": true,
  "environmentId": "string",
  "fingerprint": "string",
  "name": "string",
  "path": "string",
  "tagManagerUrl": "string",
  "type": "user",
  "url": "string",
  "workspaceId": "string"
}
```

Represents a Google Tag Manager Environment. Note that a user can create, delete and update environments of type USER, but can only update the enable_debug and url fields of environments of other types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|GTM Account ID.|
|authorizationCode|string|false|none|The environment authorization code.|
|authorizationTimestamp|string(google-datetime)|false|none|The last update time-stamp for the authorization code.|
|containerId|string|false|none|GTM Container ID.|
|containerVersionId|string|false|none|Represents a link to a container version.|
|description|string|false|none|The environment description. Can be set or changed only on USER type environments. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update|
|enableDebug|boolean|false|none|Whether or not to enable debug by default for the environment. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update|
|environmentId|string|false|none|GTM Environment ID uniquely identifies the GTM Environment.|
|fingerprint|string|false|none|The fingerprint of the GTM environment as computed at storage time. This value is recomputed whenever the environment is modified.|
|name|string|false|none|The environment display name. Can be set or changed only on USER type environments. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update|
|path|string|false|none|GTM Environment's API relative path.|
|tagManagerUrl|string|false|none|Auto generated link to the tag manager UI|
|type|string|false|none|The type of this environment.|
|url|string|false|none|Default preview page url for the environment. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update|
|workspaceId|string|false|none|Represents a link to a quick preview of a workspace.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|user|
|type|live|
|type|latest|
|type|workspace|

<h2 id="tocS_Folder">Folder</h2>
<!-- backwards compatibility -->
<a id="schemafolder"></a>
<a id="schema_Folder"></a>
<a id="tocSfolder"></a>
<a id="tocsfolder"></a>

```json
{
  "accountId": "string",
  "containerId": "string",
  "fingerprint": "string",
  "folderId": "string",
  "name": "string",
  "notes": "string",
  "path": "string",
  "tagManagerUrl": "string",
  "workspaceId": "string"
}
```

Represents a Google Tag Manager Folder.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|GTM Account ID.|
|containerId|string|false|none|GTM Container ID.|
|fingerprint|string|false|none|The fingerprint of the GTM Folder as computed at storage time. This value is recomputed whenever the folder is modified.|
|folderId|string|false|none|The Folder ID uniquely identifies the GTM Folder.|
|name|string|false|none|Folder display name. @mutable tagmanager.accounts.containers.workspaces.folders.create @mutable tagmanager.accounts.containers.workspaces.folders.update|
|notes|string|false|none|User notes on how to apply this folder in the container. @mutable tagmanager.accounts.containers.workspaces.folders.create @mutable tagmanager.accounts.containers.workspaces.folders.update|
|path|string|false|none|GTM Folder's API relative path.|
|tagManagerUrl|string|false|none|Auto generated link to the tag manager UI|
|workspaceId|string|false|none|GTM Workspace ID.|

<h2 id="tocS_FolderEntities">FolderEntities</h2>
<!-- backwards compatibility -->
<a id="schemafolderentities"></a>
<a id="schema_FolderEntities"></a>
<a id="tocSfolderentities"></a>
<a id="tocsfolderentities"></a>

```json
{
  "nextPageToken": "string",
  "tag": [
    {
      "accountId": "string",
      "blockingRuleId": [
        "string"
      ],
      "blockingTriggerId": [
        "string"
      ],
      "consentSettings": {
        "consentStatus": "notSet",
        "consentType": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      },
      "containerId": "string",
      "fingerprint": "string",
      "firingRuleId": [
        "string"
      ],
      "firingTriggerId": [
        "string"
      ],
      "liveOnly": true,
      "monitoringMetadata": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "monitoringMetadataTagNameKey": "string",
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "paused": true,
      "priority": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "scheduleEndMs": "string",
      "scheduleStartMs": "string",
      "setupTag": [
        {
          "stopOnSetupFailure": true,
          "tagName": "string"
        }
      ],
      "tagFiringOption": "tagFiringOptionUnspecified",
      "tagId": "string",
      "tagManagerUrl": "string",
      "teardownTag": [
        {
          "stopTeardownOnFailure": true,
          "tagName": "string"
        }
      ],
      "type": "string",
      "workspaceId": "string"
    }
  ],
  "trigger": [
    {
      "accountId": "string",
      "autoEventFilter": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "checkValidation": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "containerId": "string",
      "continuousTimeMinMilliseconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "customEventFilter": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "eventName": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "filter": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "fingerprint": "string",
      "horizontalScrollPercentageList": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "interval": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "intervalSeconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "limit": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "maxTimerLengthSeconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "selector": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "tagManagerUrl": "string",
      "totalTimeMinMilliseconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "triggerId": "string",
      "type": "eventTypeUnspecified",
      "uniqueTriggerId": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "verticalScrollPercentageList": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "visibilitySelector": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "visiblePercentageMax": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "visiblePercentageMin": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "waitForTags": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "waitForTagsTimeout": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "workspaceId": "string"
    }
  ],
  "variable": [
    {
      "accountId": "string",
      "containerId": "string",
      "disablingTriggerId": [
        "string"
      ],
      "enablingTriggerId": [
        "string"
      ],
      "fingerprint": "string",
      "formatValue": {
        "caseConversionType": "none",
        "convertFalseToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "convertNullToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "convertTrueToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "convertUndefinedToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      },
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "scheduleEndMs": "string",
      "scheduleStartMs": "string",
      "tagManagerUrl": "string",
      "type": "string",
      "variableId": "string",
      "workspaceId": "string"
    }
  ]
}
```

Represents a Google Tag Manager Folder's contents.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Continuation token for fetching the next page of results.|
|tag|[[Tag](#schematag)]|false|none|The list of tags inside the folder.|
|trigger|[[Trigger](#schematrigger)]|false|none|The list of triggers inside the folder.|
|variable|[[Variable](#schemavariable)]|false|none|The list of variables inside the folder.|

<h2 id="tocS_GalleryReference">GalleryReference</h2>
<!-- backwards compatibility -->
<a id="schemagalleryreference"></a>
<a id="schema_GalleryReference"></a>
<a id="tocSgalleryreference"></a>
<a id="tocsgalleryreference"></a>

```json
{
  "host": "string",
  "isModified": true,
  "owner": "string",
  "repository": "string",
  "signature": "string",
  "version": "string"
}
```

Represents the link between a custom template and an entry on the Community Template Gallery site.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|host|string|false|none|The name of the host for the community gallery template.|
|isModified|boolean|false|none|If a user has manually edited the community gallery template.|
|owner|string|false|none|The name of the owner for the community gallery template.|
|repository|string|false|none|The name of the repository for the community gallery template.|
|signature|string|false|none|The signature of the community gallery template as computed at import time. This value is recomputed whenever the template is updated from the gallery.|
|version|string|false|none|The version of the community gallery template.|

<h2 id="tocS_GetContainerSnippetResponse">GetContainerSnippetResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcontainersnippetresponse"></a>
<a id="schema_GetContainerSnippetResponse"></a>
<a id="tocSgetcontainersnippetresponse"></a>
<a id="tocsgetcontainersnippetresponse"></a>

```json
{
  "snippet": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|snippet|string|false|none|Tagging snippet for a Container.|

<h2 id="tocS_GetWorkspaceStatusResponse">GetWorkspaceStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetworkspacestatusresponse"></a>
<a id="schema_GetWorkspaceStatusResponse"></a>
<a id="tocSgetworkspacestatusresponse"></a>
<a id="tocsgetworkspacestatusresponse"></a>

```json
{
  "mergeConflict": [
    {
      "entityInBaseVersion": {
        "changeStatus": "changeStatusUnspecified",
        "client": {
          "accountId": "string",
          "clientId": "string",
          "containerId": "string",
          "fingerprint": "string",
          "name": "string",
          "notes": "string",
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "parentFolderId": "string",
          "path": "string",
          "priority": 0,
          "tagManagerUrl": "string",
          "type": "string",
          "workspaceId": "string"
        },
        "folder": {
          "accountId": "string",
          "containerId": "string",
          "fingerprint": "string",
          "folderId": "string",
          "name": "string",
          "notes": "string",
          "path": "string",
          "tagManagerUrl": "string",
          "workspaceId": "string"
        },
        "tag": {
          "accountId": "string",
          "blockingRuleId": [
            "string"
          ],
          "blockingTriggerId": [
            "string"
          ],
          "consentSettings": {
            "consentStatus": "notSet",
            "consentType": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          },
          "containerId": "string",
          "fingerprint": "string",
          "firingRuleId": [
            "string"
          ],
          "firingTriggerId": [
            "string"
          ],
          "liveOnly": true,
          "monitoringMetadata": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "monitoringMetadataTagNameKey": "string",
          "name": "string",
          "notes": "string",
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "parentFolderId": "string",
          "path": "string",
          "paused": true,
          "priority": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "scheduleEndMs": "string",
          "scheduleStartMs": "string",
          "setupTag": [
            {
              "stopOnSetupFailure": true,
              "tagName": "string"
            }
          ],
          "tagFiringOption": "tagFiringOptionUnspecified",
          "tagId": "string",
          "tagManagerUrl": "string",
          "teardownTag": [
            {
              "stopTeardownOnFailure": true,
              "tagName": "string"
            }
          ],
          "type": "string",
          "workspaceId": "string"
        },
        "trigger": {
          "accountId": "string",
          "autoEventFilter": [
            {
              "parameter": [
                {
                  "key": "string",
                  "list": [
                    {}
                  ],
                  "map": [
                    {}
                  ],
                  "type": "typeUnspecified",
                  "value": "string"
                }
              ],
              "type": "conditionTypeUnspecified"
            }
          ],
          "checkValidation": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "containerId": "string",
          "continuousTimeMinMilliseconds": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "customEventFilter": [
            {
              "parameter": [
                {
                  "key": "string",
                  "list": [
                    {}
                  ],
                  "map": [
                    {}
                  ],
                  "type": "typeUnspecified",
                  "value": "string"
                }
              ],
              "type": "conditionTypeUnspecified"
            }
          ],
          "eventName": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "filter": [
            {
              "parameter": [
                {
                  "key": "string",
                  "list": [
                    {}
                  ],
                  "map": [
                    {}
                  ],
                  "type": "typeUnspecified",
                  "value": "string"
                }
              ],
              "type": "conditionTypeUnspecified"
            }
          ],
          "fingerprint": "string",
          "horizontalScrollPercentageList": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "interval": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "intervalSeconds": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "limit": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "maxTimerLengthSeconds": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "name": "string",
          "notes": "string",
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "parentFolderId": "string",
          "path": "string",
          "selector": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "tagManagerUrl": "string",
          "totalTimeMinMilliseconds": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "triggerId": "string",
          "type": "eventTypeUnspecified",
          "uniqueTriggerId": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "verticalScrollPercentageList": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "visibilitySelector": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "visiblePercentageMax": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "visiblePercentageMin": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "waitForTags": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "waitForTagsTimeout": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "workspaceId": "string"
        },
        "variable": {
          "accountId": "string",
          "containerId": "string",
          "disablingTriggerId": [
            "string"
          ],
          "enablingTriggerId": [
            "string"
          ],
          "fingerprint": "string",
          "formatValue": {
            "caseConversionType": "none",
            "convertFalseToValue": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            },
            "convertNullToValue": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            },
            "convertTrueToValue": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            },
            "convertUndefinedToValue": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          },
          "name": "string",
          "notes": "string",
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "parentFolderId": "string",
          "path": "string",
          "scheduleEndMs": "string",
          "scheduleStartMs": "string",
          "tagManagerUrl": "string",
          "type": "string",
          "variableId": "string",
          "workspaceId": "string"
        }
      },
      "entityInWorkspace": {
        "changeStatus": "changeStatusUnspecified",
        "client": {
          "accountId": "string",
          "clientId": "string",
          "containerId": "string",
          "fingerprint": "string",
          "name": "string",
          "notes": "string",
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "parentFolderId": "string",
          "path": "string",
          "priority": 0,
          "tagManagerUrl": "string",
          "type": "string",
          "workspaceId": "string"
        },
        "folder": {
          "accountId": "string",
          "containerId": "string",
          "fingerprint": "string",
          "folderId": "string",
          "name": "string",
          "notes": "string",
          "path": "string",
          "tagManagerUrl": "string",
          "workspaceId": "string"
        },
        "tag": {
          "accountId": "string",
          "blockingRuleId": [
            "string"
          ],
          "blockingTriggerId": [
            "string"
          ],
          "consentSettings": {
            "consentStatus": "notSet",
            "consentType": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          },
          "containerId": "string",
          "fingerprint": "string",
          "firingRuleId": [
            "string"
          ],
          "firingTriggerId": [
            "string"
          ],
          "liveOnly": true,
          "monitoringMetadata": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "monitoringMetadataTagNameKey": "string",
          "name": "string",
          "notes": "string",
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "parentFolderId": "string",
          "path": "string",
          "paused": true,
          "priority": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "scheduleEndMs": "string",
          "scheduleStartMs": "string",
          "setupTag": [
            {
              "stopOnSetupFailure": true,
              "tagName": "string"
            }
          ],
          "tagFiringOption": "tagFiringOptionUnspecified",
          "tagId": "string",
          "tagManagerUrl": "string",
          "teardownTag": [
            {
              "stopTeardownOnFailure": true,
              "tagName": "string"
            }
          ],
          "type": "string",
          "workspaceId": "string"
        },
        "trigger": {
          "accountId": "string",
          "autoEventFilter": [
            {
              "parameter": [
                {
                  "key": "string",
                  "list": [
                    {}
                  ],
                  "map": [
                    {}
                  ],
                  "type": "typeUnspecified",
                  "value": "string"
                }
              ],
              "type": "conditionTypeUnspecified"
            }
          ],
          "checkValidation": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "containerId": "string",
          "continuousTimeMinMilliseconds": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "customEventFilter": [
            {
              "parameter": [
                {
                  "key": "string",
                  "list": [
                    {}
                  ],
                  "map": [
                    {}
                  ],
                  "type": "typeUnspecified",
                  "value": "string"
                }
              ],
              "type": "conditionTypeUnspecified"
            }
          ],
          "eventName": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "filter": [
            {
              "parameter": [
                {
                  "key": "string",
                  "list": [
                    {}
                  ],
                  "map": [
                    {}
                  ],
                  "type": "typeUnspecified",
                  "value": "string"
                }
              ],
              "type": "conditionTypeUnspecified"
            }
          ],
          "fingerprint": "string",
          "horizontalScrollPercentageList": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "interval": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "intervalSeconds": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "limit": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "maxTimerLengthSeconds": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "name": "string",
          "notes": "string",
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "parentFolderId": "string",
          "path": "string",
          "selector": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "tagManagerUrl": "string",
          "totalTimeMinMilliseconds": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "triggerId": "string",
          "type": "eventTypeUnspecified",
          "uniqueTriggerId": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "verticalScrollPercentageList": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "visibilitySelector": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "visiblePercentageMax": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "visiblePercentageMin": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "waitForTags": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "waitForTagsTimeout": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "workspaceId": "string"
        },
        "variable": {
          "accountId": "string",
          "containerId": "string",
          "disablingTriggerId": [
            "string"
          ],
          "enablingTriggerId": [
            "string"
          ],
          "fingerprint": "string",
          "formatValue": {
            "caseConversionType": "none",
            "convertFalseToValue": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            },
            "convertNullToValue": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            },
            "convertTrueToValue": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            },
            "convertUndefinedToValue": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          },
          "name": "string",
          "notes": "string",
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "parentFolderId": "string",
          "path": "string",
          "scheduleEndMs": "string",
          "scheduleStartMs": "string",
          "tagManagerUrl": "string",
          "type": "string",
          "variableId": "string",
          "workspaceId": "string"
        }
      }
    }
  ],
  "workspaceChange": [
    {
      "changeStatus": "changeStatusUnspecified",
      "client": {
        "accountId": "string",
        "clientId": "string",
        "containerId": "string",
        "fingerprint": "string",
        "name": "string",
        "notes": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "parentFolderId": "string",
        "path": "string",
        "priority": 0,
        "tagManagerUrl": "string",
        "type": "string",
        "workspaceId": "string"
      },
      "folder": {
        "accountId": "string",
        "containerId": "string",
        "fingerprint": "string",
        "folderId": "string",
        "name": "string",
        "notes": "string",
        "path": "string",
        "tagManagerUrl": "string",
        "workspaceId": "string"
      },
      "tag": {
        "accountId": "string",
        "blockingRuleId": [
          "string"
        ],
        "blockingTriggerId": [
          "string"
        ],
        "consentSettings": {
          "consentStatus": "notSet",
          "consentType": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        },
        "containerId": "string",
        "fingerprint": "string",
        "firingRuleId": [
          "string"
        ],
        "firingTriggerId": [
          "string"
        ],
        "liveOnly": true,
        "monitoringMetadata": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "monitoringMetadataTagNameKey": "string",
        "name": "string",
        "notes": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "parentFolderId": "string",
        "path": "string",
        "paused": true,
        "priority": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "scheduleEndMs": "string",
        "scheduleStartMs": "string",
        "setupTag": [
          {
            "stopOnSetupFailure": true,
            "tagName": "string"
          }
        ],
        "tagFiringOption": "tagFiringOptionUnspecified",
        "tagId": "string",
        "tagManagerUrl": "string",
        "teardownTag": [
          {
            "stopTeardownOnFailure": true,
            "tagName": "string"
          }
        ],
        "type": "string",
        "workspaceId": "string"
      },
      "trigger": {
        "accountId": "string",
        "autoEventFilter": [
          {
            "parameter": [
              {
                "key": "string",
                "list": [
                  {}
                ],
                "map": [
                  {}
                ],
                "type": "typeUnspecified",
                "value": "string"
              }
            ],
            "type": "conditionTypeUnspecified"
          }
        ],
        "checkValidation": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "containerId": "string",
        "continuousTimeMinMilliseconds": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "customEventFilter": [
          {
            "parameter": [
              {
                "key": "string",
                "list": [
                  {}
                ],
                "map": [
                  {}
                ],
                "type": "typeUnspecified",
                "value": "string"
              }
            ],
            "type": "conditionTypeUnspecified"
          }
        ],
        "eventName": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "filter": [
          {
            "parameter": [
              {
                "key": "string",
                "list": [
                  {}
                ],
                "map": [
                  {}
                ],
                "type": "typeUnspecified",
                "value": "string"
              }
            ],
            "type": "conditionTypeUnspecified"
          }
        ],
        "fingerprint": "string",
        "horizontalScrollPercentageList": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "interval": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "intervalSeconds": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "limit": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "maxTimerLengthSeconds": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "name": "string",
        "notes": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "parentFolderId": "string",
        "path": "string",
        "selector": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "tagManagerUrl": "string",
        "totalTimeMinMilliseconds": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "triggerId": "string",
        "type": "eventTypeUnspecified",
        "uniqueTriggerId": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "verticalScrollPercentageList": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "visibilitySelector": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "visiblePercentageMax": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "visiblePercentageMin": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "waitForTags": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "waitForTagsTimeout": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "workspaceId": "string"
      },
      "variable": {
        "accountId": "string",
        "containerId": "string",
        "disablingTriggerId": [
          "string"
        ],
        "enablingTriggerId": [
          "string"
        ],
        "fingerprint": "string",
        "formatValue": {
          "caseConversionType": "none",
          "convertFalseToValue": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "convertNullToValue": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "convertTrueToValue": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "convertUndefinedToValue": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        },
        "name": "string",
        "notes": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "parentFolderId": "string",
        "path": "string",
        "scheduleEndMs": "string",
        "scheduleStartMs": "string",
        "tagManagerUrl": "string",
        "type": "string",
        "variableId": "string",
        "workspaceId": "string"
      }
    }
  ]
}
```

The changes that have occurred in the workspace since the base container version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mergeConflict|[[MergeConflict](#schemamergeconflict)]|false|none|The merge conflict after sync.|
|workspaceChange|[[Entity](#schemaentity)]|false|none|Entities that have been changed in the workspace.|

<h2 id="tocS_GtagConfig">GtagConfig</h2>
<!-- backwards compatibility -->
<a id="schemagtagconfig"></a>
<a id="schema_GtagConfig"></a>
<a id="tocSgtagconfig"></a>
<a id="tocsgtagconfig"></a>

```json
{
  "accountId": "string",
  "containerId": "string",
  "fingerprint": "string",
  "gtagConfigId": "string",
  "parameter": [
    {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    }
  ],
  "path": "string",
  "tagManagerUrl": "string",
  "type": "string",
  "workspaceId": "string"
}
```

Represents a Google tag configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|Google tag account ID.|
|containerId|string|false|none|Google tag container ID.|
|fingerprint|string|false|none|The fingerprint of the Google tag config as computed at storage time. This value is recomputed whenever the config is modified.|
|gtagConfigId|string|false|none|The ID uniquely identifies the Google tag config.|
|parameter|[[Parameter](#schemaparameter)]|false|none|The Google tag config's parameters. @mutable tagmanager.accounts.containers.workspaces.gtag_config.create @mutable tagmanager.accounts.containers.workspaces.gtag_config.update|
|path|string|false|none|Google tag config's API relative path.|
|tagManagerUrl|string|false|none|Auto generated link to the tag manager UI|
|type|string|false|none|Google tag config type. @required tagmanager.accounts.containers.workspaces.gtag_config.create @required tagmanager.accounts.containers.workspaces.gtag_config.update @mutable tagmanager.accounts.containers.workspaces.gtag_config.create @mutable tagmanager.accounts.containers.workspaces.gtag_config.update|
|workspaceId|string|false|none|Google tag workspace ID. Only used by GTM containers. Set to 0 otherwise.|

<h2 id="tocS_ListAccountsResponse">ListAccountsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistaccountsresponse"></a>
<a id="schema_ListAccountsResponse"></a>
<a id="tocSlistaccountsresponse"></a>
<a id="tocslistaccountsresponse"></a>

```json
{
  "account": [
    {
      "accountId": "string",
      "features": {
        "supportMultipleContainers": true,
        "supportUserPermissions": true
      },
      "fingerprint": "string",
      "name": "string",
      "path": "string",
      "shareData": true,
      "tagManagerUrl": "string"
    }
  ],
  "nextPageToken": "string"
}
```

List Accounts Response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[[Account](#schemaaccount)]|false|none|List of GTM Accounts that a user has access to.|
|nextPageToken|string|false|none|Continuation token for fetching the next page of results.|

<h2 id="tocS_ListClientsResponse">ListClientsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistclientsresponse"></a>
<a id="schema_ListClientsResponse"></a>
<a id="tocSlistclientsresponse"></a>
<a id="tocslistclientsresponse"></a>

```json
{
  "client": [
    {
      "accountId": "string",
      "clientId": "string",
      "containerId": "string",
      "fingerprint": "string",
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "priority": 0,
      "tagManagerUrl": "string",
      "type": "string",
      "workspaceId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client|[[Client](#schemaclient)]|false|none|All GTM Clients of a GTM Container.|
|nextPageToken|string|false|none|Continuation token for fetching the next page of results.|

<h2 id="tocS_ListContainerVersionsResponse">ListContainerVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcontainerversionsresponse"></a>
<a id="schema_ListContainerVersionsResponse"></a>
<a id="tocSlistcontainerversionsresponse"></a>
<a id="tocslistcontainerversionsresponse"></a>

```json
{
  "containerVersionHeader": [
    {
      "accountId": "string",
      "containerId": "string",
      "containerVersionId": "string",
      "deleted": true,
      "name": "string",
      "numClients": "string",
      "numCustomTemplates": "string",
      "numGtagConfigs": "string",
      "numMacros": "string",
      "numRules": "string",
      "numTags": "string",
      "numTransformations": "string",
      "numTriggers": "string",
      "numVariables": "string",
      "numZones": "string",
      "path": "string"
    }
  ],
  "nextPageToken": "string"
}
```

List container versions response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerVersionHeader|[[ContainerVersionHeader](#schemacontainerversionheader)]|false|none|All container version headers of a GTM Container.|
|nextPageToken|string|false|none|Continuation token for fetching the next page of results.|

<h2 id="tocS_ListContainersResponse">ListContainersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcontainersresponse"></a>
<a id="schema_ListContainersResponse"></a>
<a id="tocSlistcontainersresponse"></a>
<a id="tocslistcontainersresponse"></a>

```json
{
  "container": [
    {
      "accountId": "string",
      "containerId": "string",
      "domainName": [
        "string"
      ],
      "features": {
        "supportBuiltInVariables": true,
        "supportClients": true,
        "supportEnvironments": true,
        "supportFolders": true,
        "supportGtagConfigs": true,
        "supportTags": true,
        "supportTemplates": true,
        "supportTriggers": true,
        "supportUserPermissions": true,
        "supportVariables": true,
        "supportVersions": true,
        "supportWorkspaces": true,
        "supportZones": true
      },
      "fingerprint": "string",
      "name": "string",
      "notes": "string",
      "path": "string",
      "publicId": "string",
      "tagIds": [
        "string"
      ],
      "tagManagerUrl": "string",
      "taggingServerUrls": [
        "string"
      ],
      "usageContext": [
        "usageContextUnspecified"
      ]
    }
  ],
  "nextPageToken": "string"
}
```

List Containers Response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|container|[[Container](#schemacontainer)]|false|none|All Containers of a GTM Account.|
|nextPageToken|string|false|none|Continuation token for fetching the next page of results.|

<h2 id="tocS_ListDestinationsResponse">ListDestinationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdestinationsresponse"></a>
<a id="schema_ListDestinationsResponse"></a>
<a id="tocSlistdestinationsresponse"></a>
<a id="tocslistdestinationsresponse"></a>

```json
{
  "destination": [
    {
      "accountId": "string",
      "containerId": "string",
      "destinationId": "string",
      "destinationLinkId": "string",
      "fingerprint": "string",
      "name": "string",
      "path": "string",
      "tagManagerUrl": "string"
    }
  ],
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destination|[[Destination](#schemadestination)]|false|none|All Destinations linked to a GTM Container.|
|nextPageToken|string|false|none|Continuation token for fetching the next page of results.|

<h2 id="tocS_ListEnabledBuiltInVariablesResponse">ListEnabledBuiltInVariablesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistenabledbuiltinvariablesresponse"></a>
<a id="schema_ListEnabledBuiltInVariablesResponse"></a>
<a id="tocSlistenabledbuiltinvariablesresponse"></a>
<a id="tocslistenabledbuiltinvariablesresponse"></a>

```json
{
  "builtInVariable": [
    {
      "accountId": "string",
      "containerId": "string",
      "name": "string",
      "path": "string",
      "type": "builtInVariableTypeUnspecified",
      "workspaceId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

A list of enabled built-in variables.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|builtInVariable|[[BuiltInVariable](#schemabuiltinvariable)]|false|none|All GTM BuiltInVariables of a GTM container.|
|nextPageToken|string|false|none|Continuation token for fetching the next page of results.|

<h2 id="tocS_ListEnvironmentsResponse">ListEnvironmentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistenvironmentsresponse"></a>
<a id="schema_ListEnvironmentsResponse"></a>
<a id="tocSlistenvironmentsresponse"></a>
<a id="tocslistenvironmentsresponse"></a>

```json
{
  "environment": [
    {
      "accountId": "string",
      "authorizationCode": "string",
      "authorizationTimestamp": "string",
      "containerId": "string",
      "containerVersionId": "string",
      "description": "string",
      "enableDebug": true,
      "environmentId": "string",
      "fingerprint": "string",
      "name": "string",
      "path": "string",
      "tagManagerUrl": "string",
      "type": "user",
      "url": "string",
      "workspaceId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

List Environments Response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environment|[[Environment](#schemaenvironment)]|false|none|All Environments of a GTM Container.|
|nextPageToken|string|false|none|Continuation token for fetching the next page of results.|

<h2 id="tocS_ListFoldersResponse">ListFoldersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfoldersresponse"></a>
<a id="schema_ListFoldersResponse"></a>
<a id="tocSlistfoldersresponse"></a>
<a id="tocslistfoldersresponse"></a>

```json
{
  "folder": [
    {
      "accountId": "string",
      "containerId": "string",
      "fingerprint": "string",
      "folderId": "string",
      "name": "string",
      "notes": "string",
      "path": "string",
      "tagManagerUrl": "string",
      "workspaceId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

List Folders Response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|folder|[[Folder](#schemafolder)]|false|none|All GTM Folders of a GTM Container.|
|nextPageToken|string|false|none|Continuation token for fetching the next page of results.|

<h2 id="tocS_ListGtagConfigResponse">ListGtagConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistgtagconfigresponse"></a>
<a id="schema_ListGtagConfigResponse"></a>
<a id="tocSlistgtagconfigresponse"></a>
<a id="tocslistgtagconfigresponse"></a>

```json
{
  "gtagConfig": [
    {
      "accountId": "string",
      "containerId": "string",
      "fingerprint": "string",
      "gtagConfigId": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "path": "string",
      "tagManagerUrl": "string",
      "type": "string",
      "workspaceId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gtagConfig|[[GtagConfig](#schemagtagconfig)]|false|none|All Google tag configs in a Container.|
|nextPageToken|string|false|none|Continuation token for fetching the next page of results.|

<h2 id="tocS_ListTagsResponse">ListTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsresponse"></a>
<a id="schema_ListTagsResponse"></a>
<a id="tocSlisttagsresponse"></a>
<a id="tocslisttagsresponse"></a>

```json
{
  "nextPageToken": "string",
  "tag": [
    {
      "accountId": "string",
      "blockingRuleId": [
        "string"
      ],
      "blockingTriggerId": [
        "string"
      ],
      "consentSettings": {
        "consentStatus": "notSet",
        "consentType": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      },
      "containerId": "string",
      "fingerprint": "string",
      "firingRuleId": [
        "string"
      ],
      "firingTriggerId": [
        "string"
      ],
      "liveOnly": true,
      "monitoringMetadata": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "monitoringMetadataTagNameKey": "string",
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "paused": true,
      "priority": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "scheduleEndMs": "string",
      "scheduleStartMs": "string",
      "setupTag": [
        {
          "stopOnSetupFailure": true,
          "tagName": "string"
        }
      ],
      "tagFiringOption": "tagFiringOptionUnspecified",
      "tagId": "string",
      "tagManagerUrl": "string",
      "teardownTag": [
        {
          "stopTeardownOnFailure": true,
          "tagName": "string"
        }
      ],
      "type": "string",
      "workspaceId": "string"
    }
  ]
}
```

List Tags Response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Continuation token for fetching the next page of results.|
|tag|[[Tag](#schematag)]|false|none|All GTM Tags of a GTM Container.|

<h2 id="tocS_ListTemplatesResponse">ListTemplatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttemplatesresponse"></a>
<a id="schema_ListTemplatesResponse"></a>
<a id="tocSlisttemplatesresponse"></a>
<a id="tocslisttemplatesresponse"></a>

```json
{
  "nextPageToken": "string",
  "template": [
    {
      "accountId": "string",
      "containerId": "string",
      "fingerprint": "string",
      "galleryReference": {
        "host": "string",
        "isModified": true,
        "owner": "string",
        "repository": "string",
        "signature": "string",
        "version": "string"
      },
      "name": "string",
      "path": "string",
      "tagManagerUrl": "string",
      "templateData": "string",
      "templateId": "string",
      "workspaceId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Continuation token for fetching the next page of results.|
|template|[[CustomTemplate](#schemacustomtemplate)]|false|none|All GTM Custom Templates of a GTM Container.|

<h2 id="tocS_ListTriggersResponse">ListTriggersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttriggersresponse"></a>
<a id="schema_ListTriggersResponse"></a>
<a id="tocSlisttriggersresponse"></a>
<a id="tocslisttriggersresponse"></a>

```json
{
  "nextPageToken": "string",
  "trigger": [
    {
      "accountId": "string",
      "autoEventFilter": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "checkValidation": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "containerId": "string",
      "continuousTimeMinMilliseconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "customEventFilter": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "eventName": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "filter": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "fingerprint": "string",
      "horizontalScrollPercentageList": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "interval": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "intervalSeconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "limit": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "maxTimerLengthSeconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "selector": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "tagManagerUrl": "string",
      "totalTimeMinMilliseconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "triggerId": "string",
      "type": "eventTypeUnspecified",
      "uniqueTriggerId": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "verticalScrollPercentageList": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "visibilitySelector": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "visiblePercentageMax": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "visiblePercentageMin": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "waitForTags": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "waitForTagsTimeout": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "workspaceId": "string"
    }
  ]
}
```

List triggers response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Continuation token for fetching the next page of results.|
|trigger|[[Trigger](#schematrigger)]|false|none|All GTM Triggers of a GTM Container.|

<h2 id="tocS_ListUserPermissionsResponse">ListUserPermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistuserpermissionsresponse"></a>
<a id="schema_ListUserPermissionsResponse"></a>
<a id="tocSlistuserpermissionsresponse"></a>
<a id="tocslistuserpermissionsresponse"></a>

```json
{
  "nextPageToken": "string",
  "userPermission": [
    {
      "accountAccess": {
        "permission": "accountPermissionUnspecified"
      },
      "accountId": "string",
      "containerAccess": [
        {
          "containerId": "string",
          "permission": "containerPermissionUnspecified"
        }
      ],
      "emailAddress": "string",
      "path": "string"
    }
  ]
}
```

List user permissions response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Continuation token for fetching the next page of results.|
|userPermission|[[UserPermission](#schemauserpermission)]|false|none|All GTM UserPermissions of a GTM Account.|

<h2 id="tocS_ListVariablesResponse">ListVariablesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistvariablesresponse"></a>
<a id="schema_ListVariablesResponse"></a>
<a id="tocSlistvariablesresponse"></a>
<a id="tocslistvariablesresponse"></a>

```json
{
  "nextPageToken": "string",
  "variable": [
    {
      "accountId": "string",
      "containerId": "string",
      "disablingTriggerId": [
        "string"
      ],
      "enablingTriggerId": [
        "string"
      ],
      "fingerprint": "string",
      "formatValue": {
        "caseConversionType": "none",
        "convertFalseToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "convertNullToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "convertTrueToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "convertUndefinedToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      },
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "scheduleEndMs": "string",
      "scheduleStartMs": "string",
      "tagManagerUrl": "string",
      "type": "string",
      "variableId": "string",
      "workspaceId": "string"
    }
  ]
}
```

List Variables Response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Continuation token for fetching the next page of results.|
|variable|[[Variable](#schemavariable)]|false|none|All GTM Variables of a GTM Container.|

<h2 id="tocS_ListWorkspacesResponse">ListWorkspacesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistworkspacesresponse"></a>
<a id="schema_ListWorkspacesResponse"></a>
<a id="tocSlistworkspacesresponse"></a>
<a id="tocslistworkspacesresponse"></a>

```json
{
  "nextPageToken": "string",
  "workspace": [
    {
      "accountId": "string",
      "containerId": "string",
      "description": "string",
      "fingerprint": "string",
      "name": "string",
      "path": "string",
      "tagManagerUrl": "string",
      "workspaceId": "string"
    }
  ]
}
```

A list of workspaces in a container.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Continuation token for fetching the next page of results.|
|workspace|[[Workspace](#schemaworkspace)]|false|none|All Workspaces of a GTM Container.|

<h2 id="tocS_ListZonesResponse">ListZonesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistzonesresponse"></a>
<a id="schema_ListZonesResponse"></a>
<a id="tocSlistzonesresponse"></a>
<a id="tocslistzonesresponse"></a>

```json
{
  "nextPageToken": "string",
  "zone": [
    {
      "accountId": "string",
      "boundary": {
        "condition": [
          {
            "parameter": [
              {
                "key": "string",
                "list": [
                  {}
                ],
                "map": [
                  {}
                ],
                "type": "typeUnspecified",
                "value": "string"
              }
            ],
            "type": "conditionTypeUnspecified"
          }
        ],
        "customEvaluationTriggerId": [
          "string"
        ]
      },
      "childContainer": [
        {
          "nickname": "string",
          "publicId": "string"
        }
      ],
      "containerId": "string",
      "fingerprint": "string",
      "name": "string",
      "notes": "string",
      "path": "string",
      "tagManagerUrl": "string",
      "typeRestriction": {
        "enable": true,
        "whitelistedTypeId": [
          "string"
        ]
      },
      "workspaceId": "string",
      "zoneId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Continuation token for fetching the next page of results.|
|zone|[[Zone](#schemazone)]|false|none|All GTM Zones of a GTM Container.|

<h2 id="tocS_MergeConflict">MergeConflict</h2>
<!-- backwards compatibility -->
<a id="schemamergeconflict"></a>
<a id="schema_MergeConflict"></a>
<a id="tocSmergeconflict"></a>
<a id="tocsmergeconflict"></a>

```json
{
  "entityInBaseVersion": {
    "changeStatus": "changeStatusUnspecified",
    "client": {
      "accountId": "string",
      "clientId": "string",
      "containerId": "string",
      "fingerprint": "string",
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "priority": 0,
      "tagManagerUrl": "string",
      "type": "string",
      "workspaceId": "string"
    },
    "folder": {
      "accountId": "string",
      "containerId": "string",
      "fingerprint": "string",
      "folderId": "string",
      "name": "string",
      "notes": "string",
      "path": "string",
      "tagManagerUrl": "string",
      "workspaceId": "string"
    },
    "tag": {
      "accountId": "string",
      "blockingRuleId": [
        "string"
      ],
      "blockingTriggerId": [
        "string"
      ],
      "consentSettings": {
        "consentStatus": "notSet",
        "consentType": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      },
      "containerId": "string",
      "fingerprint": "string",
      "firingRuleId": [
        "string"
      ],
      "firingTriggerId": [
        "string"
      ],
      "liveOnly": true,
      "monitoringMetadata": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "monitoringMetadataTagNameKey": "string",
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "paused": true,
      "priority": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "scheduleEndMs": "string",
      "scheduleStartMs": "string",
      "setupTag": [
        {
          "stopOnSetupFailure": true,
          "tagName": "string"
        }
      ],
      "tagFiringOption": "tagFiringOptionUnspecified",
      "tagId": "string",
      "tagManagerUrl": "string",
      "teardownTag": [
        {
          "stopTeardownOnFailure": true,
          "tagName": "string"
        }
      ],
      "type": "string",
      "workspaceId": "string"
    },
    "trigger": {
      "accountId": "string",
      "autoEventFilter": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "checkValidation": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "containerId": "string",
      "continuousTimeMinMilliseconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "customEventFilter": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "eventName": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "filter": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "fingerprint": "string",
      "horizontalScrollPercentageList": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "interval": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "intervalSeconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "limit": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "maxTimerLengthSeconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "selector": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "tagManagerUrl": "string",
      "totalTimeMinMilliseconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "triggerId": "string",
      "type": "eventTypeUnspecified",
      "uniqueTriggerId": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "verticalScrollPercentageList": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "visibilitySelector": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "visiblePercentageMax": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "visiblePercentageMin": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "waitForTags": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "waitForTagsTimeout": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "workspaceId": "string"
    },
    "variable": {
      "accountId": "string",
      "containerId": "string",
      "disablingTriggerId": [
        "string"
      ],
      "enablingTriggerId": [
        "string"
      ],
      "fingerprint": "string",
      "formatValue": {
        "caseConversionType": "none",
        "convertFalseToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "convertNullToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "convertTrueToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "convertUndefinedToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      },
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "scheduleEndMs": "string",
      "scheduleStartMs": "string",
      "tagManagerUrl": "string",
      "type": "string",
      "variableId": "string",
      "workspaceId": "string"
    }
  },
  "entityInWorkspace": {
    "changeStatus": "changeStatusUnspecified",
    "client": {
      "accountId": "string",
      "clientId": "string",
      "containerId": "string",
      "fingerprint": "string",
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "priority": 0,
      "tagManagerUrl": "string",
      "type": "string",
      "workspaceId": "string"
    },
    "folder": {
      "accountId": "string",
      "containerId": "string",
      "fingerprint": "string",
      "folderId": "string",
      "name": "string",
      "notes": "string",
      "path": "string",
      "tagManagerUrl": "string",
      "workspaceId": "string"
    },
    "tag": {
      "accountId": "string",
      "blockingRuleId": [
        "string"
      ],
      "blockingTriggerId": [
        "string"
      ],
      "consentSettings": {
        "consentStatus": "notSet",
        "consentType": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      },
      "containerId": "string",
      "fingerprint": "string",
      "firingRuleId": [
        "string"
      ],
      "firingTriggerId": [
        "string"
      ],
      "liveOnly": true,
      "monitoringMetadata": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "monitoringMetadataTagNameKey": "string",
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "paused": true,
      "priority": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "scheduleEndMs": "string",
      "scheduleStartMs": "string",
      "setupTag": [
        {
          "stopOnSetupFailure": true,
          "tagName": "string"
        }
      ],
      "tagFiringOption": "tagFiringOptionUnspecified",
      "tagId": "string",
      "tagManagerUrl": "string",
      "teardownTag": [
        {
          "stopTeardownOnFailure": true,
          "tagName": "string"
        }
      ],
      "type": "string",
      "workspaceId": "string"
    },
    "trigger": {
      "accountId": "string",
      "autoEventFilter": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "checkValidation": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "containerId": "string",
      "continuousTimeMinMilliseconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "customEventFilter": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "eventName": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "filter": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "fingerprint": "string",
      "horizontalScrollPercentageList": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "interval": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "intervalSeconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "limit": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "maxTimerLengthSeconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "selector": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "tagManagerUrl": "string",
      "totalTimeMinMilliseconds": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "triggerId": "string",
      "type": "eventTypeUnspecified",
      "uniqueTriggerId": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "verticalScrollPercentageList": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "visibilitySelector": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "visiblePercentageMax": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "visiblePercentageMin": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "waitForTags": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "waitForTagsTimeout": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "workspaceId": "string"
    },
    "variable": {
      "accountId": "string",
      "containerId": "string",
      "disablingTriggerId": [
        "string"
      ],
      "enablingTriggerId": [
        "string"
      ],
      "fingerprint": "string",
      "formatValue": {
        "caseConversionType": "none",
        "convertFalseToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "convertNullToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "convertTrueToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "convertUndefinedToValue": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      },
      "name": "string",
      "notes": "string",
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "parentFolderId": "string",
      "path": "string",
      "scheduleEndMs": "string",
      "scheduleStartMs": "string",
      "tagManagerUrl": "string",
      "type": "string",
      "variableId": "string",
      "workspaceId": "string"
    }
  }
}
```

Represents a merge conflict.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entityInBaseVersion|[Entity](#schemaentity)|false|none|The base version entity (since the latest sync operation) that has conflicting changes compared to the workspace. If this field is missing, it means the workspace entity is deleted from the base version.|
|entityInWorkspace|[Entity](#schemaentity)|false|none|The workspace entity that has conflicting changes compared to the base version. If an entity is deleted in a workspace, it will still appear with a deleted change status.|

<h2 id="tocS_Parameter">Parameter</h2>
<!-- backwards compatibility -->
<a id="schemaparameter"></a>
<a id="schema_Parameter"></a>
<a id="tocSparameter"></a>
<a id="tocsparameter"></a>

```json
{
  "key": "string",
  "list": [
    {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    }
  ],
  "map": [
    {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    }
  ],
  "type": "typeUnspecified",
  "value": "string"
}
```

Represents a Google Tag Manager Parameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|The named key that uniquely identifies a parameter. Required for top-level parameters, as well as map values. Ignored for list values. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|list|[[Parameter](#schemaparameter)]|false|none|This list parameter's parameters (keys will be ignored). @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|map|[[Parameter](#schemaparameter)]|false|none|This map parameter's parameters (must have keys; keys must be unique). @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|type|string|false|none|The parameter type. Valid values are: - boolean: The value represents a boolean, represented as 'true' or 'false' - integer: The value represents a 64-bit signed integer value, in base 10 - list: A list of parameters should be specified - map: A map of parameters should be specified - template: The value represents any text; this can include variable references (even variable references that might return non-string types) - trigger_reference: The value represents a trigger, represented as the trigger id - tag_reference: The value represents a tag, represented as the tag name @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|value|string|false|none|A parameter's value (may contain variable references such as "{{myVariable}}") as appropriate to the specified type. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|

#### Enumerated Values

|Property|Value|
|---|---|
|type|typeUnspecified|
|type|template|
|type|integer|
|type|boolean|
|type|list|
|type|map|
|type|triggerReference|
|type|tagReference|

<h2 id="tocS_PublishContainerVersionResponse">PublishContainerVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemapublishcontainerversionresponse"></a>
<a id="schema_PublishContainerVersionResponse"></a>
<a id="tocSpublishcontainerversionresponse"></a>
<a id="tocspublishcontainerversionresponse"></a>

```json
{
  "compilerError": true,
  "containerVersion": {
    "accountId": "string",
    "builtInVariable": [
      {
        "accountId": "string",
        "containerId": "string",
        "name": "string",
        "path": "string",
        "type": "builtInVariableTypeUnspecified",
        "workspaceId": "string"
      }
    ],
    "client": [
      {
        "accountId": "string",
        "clientId": "string",
        "containerId": "string",
        "fingerprint": "string",
        "name": "string",
        "notes": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "parentFolderId": "string",
        "path": "string",
        "priority": 0,
        "tagManagerUrl": "string",
        "type": "string",
        "workspaceId": "string"
      }
    ],
    "container": {
      "accountId": "string",
      "containerId": "string",
      "domainName": [
        "string"
      ],
      "features": {
        "supportBuiltInVariables": true,
        "supportClients": true,
        "supportEnvironments": true,
        "supportFolders": true,
        "supportGtagConfigs": true,
        "supportTags": true,
        "supportTemplates": true,
        "supportTriggers": true,
        "supportUserPermissions": true,
        "supportVariables": true,
        "supportVersions": true,
        "supportWorkspaces": true,
        "supportZones": true
      },
      "fingerprint": "string",
      "name": "string",
      "notes": "string",
      "path": "string",
      "publicId": "string",
      "tagIds": [
        "string"
      ],
      "tagManagerUrl": "string",
      "taggingServerUrls": [
        "string"
      ],
      "usageContext": [
        "usageContextUnspecified"
      ]
    },
    "containerId": "string",
    "containerVersionId": "string",
    "customTemplate": [
      {
        "accountId": "string",
        "containerId": "string",
        "fingerprint": "string",
        "galleryReference": {
          "host": "string",
          "isModified": true,
          "owner": "string",
          "repository": "string",
          "signature": "string",
          "version": "string"
        },
        "name": "string",
        "path": "string",
        "tagManagerUrl": "string",
        "templateData": "string",
        "templateId": "string",
        "workspaceId": "string"
      }
    ],
    "deleted": true,
    "description": "string",
    "fingerprint": "string",
    "folder": [
      {
        "accountId": "string",
        "containerId": "string",
        "fingerprint": "string",
        "folderId": "string",
        "name": "string",
        "notes": "string",
        "path": "string",
        "tagManagerUrl": "string",
        "workspaceId": "string"
      }
    ],
    "gtagConfig": [
      {
        "accountId": "string",
        "containerId": "string",
        "fingerprint": "string",
        "gtagConfigId": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "path": "string",
        "tagManagerUrl": "string",
        "type": "string",
        "workspaceId": "string"
      }
    ],
    "name": "string",
    "path": "string",
    "tag": [
      {
        "accountId": "string",
        "blockingRuleId": [
          "string"
        ],
        "blockingTriggerId": [
          "string"
        ],
        "consentSettings": {
          "consentStatus": "notSet",
          "consentType": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        },
        "containerId": "string",
        "fingerprint": "string",
        "firingRuleId": [
          "string"
        ],
        "firingTriggerId": [
          "string"
        ],
        "liveOnly": true,
        "monitoringMetadata": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "monitoringMetadataTagNameKey": "string",
        "name": "string",
        "notes": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "parentFolderId": "string",
        "path": "string",
        "paused": true,
        "priority": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "scheduleEndMs": "string",
        "scheduleStartMs": "string",
        "setupTag": [
          {
            "stopOnSetupFailure": true,
            "tagName": "string"
          }
        ],
        "tagFiringOption": "tagFiringOptionUnspecified",
        "tagId": "string",
        "tagManagerUrl": "string",
        "teardownTag": [
          {
            "stopTeardownOnFailure": true,
            "tagName": "string"
          }
        ],
        "type": "string",
        "workspaceId": "string"
      }
    ],
    "tagManagerUrl": "string",
    "trigger": [
      {
        "accountId": "string",
        "autoEventFilter": [
          {
            "parameter": [
              {
                "key": "string",
                "list": [
                  {}
                ],
                "map": [
                  {}
                ],
                "type": "typeUnspecified",
                "value": "string"
              }
            ],
            "type": "conditionTypeUnspecified"
          }
        ],
        "checkValidation": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "containerId": "string",
        "continuousTimeMinMilliseconds": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "customEventFilter": [
          {
            "parameter": [
              {
                "key": "string",
                "list": [
                  {}
                ],
                "map": [
                  {}
                ],
                "type": "typeUnspecified",
                "value": "string"
              }
            ],
            "type": "conditionTypeUnspecified"
          }
        ],
        "eventName": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "filter": [
          {
            "parameter": [
              {
                "key": "string",
                "list": [
                  {}
                ],
                "map": [
                  {}
                ],
                "type": "typeUnspecified",
                "value": "string"
              }
            ],
            "type": "conditionTypeUnspecified"
          }
        ],
        "fingerprint": "string",
        "horizontalScrollPercentageList": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "interval": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "intervalSeconds": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "limit": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "maxTimerLengthSeconds": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "name": "string",
        "notes": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "parentFolderId": "string",
        "path": "string",
        "selector": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "tagManagerUrl": "string",
        "totalTimeMinMilliseconds": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "triggerId": "string",
        "type": "eventTypeUnspecified",
        "uniqueTriggerId": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "verticalScrollPercentageList": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "visibilitySelector": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "visiblePercentageMax": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "visiblePercentageMin": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "waitForTags": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "waitForTagsTimeout": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "workspaceId": "string"
      }
    ],
    "variable": [
      {
        "accountId": "string",
        "containerId": "string",
        "disablingTriggerId": [
          "string"
        ],
        "enablingTriggerId": [
          "string"
        ],
        "fingerprint": "string",
        "formatValue": {
          "caseConversionType": "none",
          "convertFalseToValue": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "convertNullToValue": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "convertTrueToValue": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "convertUndefinedToValue": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        },
        "name": "string",
        "notes": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "parentFolderId": "string",
        "path": "string",
        "scheduleEndMs": "string",
        "scheduleStartMs": "string",
        "tagManagerUrl": "string",
        "type": "string",
        "variableId": "string",
        "workspaceId": "string"
      }
    ],
    "zone": [
      {
        "accountId": "string",
        "boundary": {
          "condition": [
            {
              "parameter": [
                {
                  "key": "string",
                  "list": [
                    {}
                  ],
                  "map": [
                    {}
                  ],
                  "type": "typeUnspecified",
                  "value": "string"
                }
              ],
              "type": "conditionTypeUnspecified"
            }
          ],
          "customEvaluationTriggerId": [
            "string"
          ]
        },
        "childContainer": [
          {
            "nickname": "string",
            "publicId": "string"
          }
        ],
        "containerId": "string",
        "fingerprint": "string",
        "name": "string",
        "notes": "string",
        "path": "string",
        "tagManagerUrl": "string",
        "typeRestriction": {
          "enable": true,
          "whitelistedTypeId": [
            "string"
          ]
        },
        "workspaceId": "string",
        "zoneId": "string"
      }
    ]
  }
}
```

Publish container version response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compilerError|boolean|false|none|Compiler errors or not.|
|containerVersion|[ContainerVersion](#schemacontainerversion)|false|none|The container version created.|

<h2 id="tocS_QuickPreviewResponse">QuickPreviewResponse</h2>
<!-- backwards compatibility -->
<a id="schemaquickpreviewresponse"></a>
<a id="schema_QuickPreviewResponse"></a>
<a id="tocSquickpreviewresponse"></a>
<a id="tocsquickpreviewresponse"></a>

```json
{
  "compilerError": true,
  "containerVersion": {
    "accountId": "string",
    "builtInVariable": [
      {
        "accountId": "string",
        "containerId": "string",
        "name": "string",
        "path": "string",
        "type": "builtInVariableTypeUnspecified",
        "workspaceId": "string"
      }
    ],
    "client": [
      {
        "accountId": "string",
        "clientId": "string",
        "containerId": "string",
        "fingerprint": "string",
        "name": "string",
        "notes": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "parentFolderId": "string",
        "path": "string",
        "priority": 0,
        "tagManagerUrl": "string",
        "type": "string",
        "workspaceId": "string"
      }
    ],
    "container": {
      "accountId": "string",
      "containerId": "string",
      "domainName": [
        "string"
      ],
      "features": {
        "supportBuiltInVariables": true,
        "supportClients": true,
        "supportEnvironments": true,
        "supportFolders": true,
        "supportGtagConfigs": true,
        "supportTags": true,
        "supportTemplates": true,
        "supportTriggers": true,
        "supportUserPermissions": true,
        "supportVariables": true,
        "supportVersions": true,
        "supportWorkspaces": true,
        "supportZones": true
      },
      "fingerprint": "string",
      "name": "string",
      "notes": "string",
      "path": "string",
      "publicId": "string",
      "tagIds": [
        "string"
      ],
      "tagManagerUrl": "string",
      "taggingServerUrls": [
        "string"
      ],
      "usageContext": [
        "usageContextUnspecified"
      ]
    },
    "containerId": "string",
    "containerVersionId": "string",
    "customTemplate": [
      {
        "accountId": "string",
        "containerId": "string",
        "fingerprint": "string",
        "galleryReference": {
          "host": "string",
          "isModified": true,
          "owner": "string",
          "repository": "string",
          "signature": "string",
          "version": "string"
        },
        "name": "string",
        "path": "string",
        "tagManagerUrl": "string",
        "templateData": "string",
        "templateId": "string",
        "workspaceId": "string"
      }
    ],
    "deleted": true,
    "description": "string",
    "fingerprint": "string",
    "folder": [
      {
        "accountId": "string",
        "containerId": "string",
        "fingerprint": "string",
        "folderId": "string",
        "name": "string",
        "notes": "string",
        "path": "string",
        "tagManagerUrl": "string",
        "workspaceId": "string"
      }
    ],
    "gtagConfig": [
      {
        "accountId": "string",
        "containerId": "string",
        "fingerprint": "string",
        "gtagConfigId": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "path": "string",
        "tagManagerUrl": "string",
        "type": "string",
        "workspaceId": "string"
      }
    ],
    "name": "string",
    "path": "string",
    "tag": [
      {
        "accountId": "string",
        "blockingRuleId": [
          "string"
        ],
        "blockingTriggerId": [
          "string"
        ],
        "consentSettings": {
          "consentStatus": "notSet",
          "consentType": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        },
        "containerId": "string",
        "fingerprint": "string",
        "firingRuleId": [
          "string"
        ],
        "firingTriggerId": [
          "string"
        ],
        "liveOnly": true,
        "monitoringMetadata": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "monitoringMetadataTagNameKey": "string",
        "name": "string",
        "notes": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "parentFolderId": "string",
        "path": "string",
        "paused": true,
        "priority": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "scheduleEndMs": "string",
        "scheduleStartMs": "string",
        "setupTag": [
          {
            "stopOnSetupFailure": true,
            "tagName": "string"
          }
        ],
        "tagFiringOption": "tagFiringOptionUnspecified",
        "tagId": "string",
        "tagManagerUrl": "string",
        "teardownTag": [
          {
            "stopTeardownOnFailure": true,
            "tagName": "string"
          }
        ],
        "type": "string",
        "workspaceId": "string"
      }
    ],
    "tagManagerUrl": "string",
    "trigger": [
      {
        "accountId": "string",
        "autoEventFilter": [
          {
            "parameter": [
              {
                "key": "string",
                "list": [
                  {}
                ],
                "map": [
                  {}
                ],
                "type": "typeUnspecified",
                "value": "string"
              }
            ],
            "type": "conditionTypeUnspecified"
          }
        ],
        "checkValidation": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "containerId": "string",
        "continuousTimeMinMilliseconds": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "customEventFilter": [
          {
            "parameter": [
              {
                "key": "string",
                "list": [
                  {}
                ],
                "map": [
                  {}
                ],
                "type": "typeUnspecified",
                "value": "string"
              }
            ],
            "type": "conditionTypeUnspecified"
          }
        ],
        "eventName": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "filter": [
          {
            "parameter": [
              {
                "key": "string",
                "list": [
                  {}
                ],
                "map": [
                  {}
                ],
                "type": "typeUnspecified",
                "value": "string"
              }
            ],
            "type": "conditionTypeUnspecified"
          }
        ],
        "fingerprint": "string",
        "horizontalScrollPercentageList": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "interval": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "intervalSeconds": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "limit": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "maxTimerLengthSeconds": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "name": "string",
        "notes": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "parentFolderId": "string",
        "path": "string",
        "selector": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "tagManagerUrl": "string",
        "totalTimeMinMilliseconds": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "triggerId": "string",
        "type": "eventTypeUnspecified",
        "uniqueTriggerId": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "verticalScrollPercentageList": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "visibilitySelector": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "visiblePercentageMax": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "visiblePercentageMin": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "waitForTags": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "waitForTagsTimeout": {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        },
        "workspaceId": "string"
      }
    ],
    "variable": [
      {
        "accountId": "string",
        "containerId": "string",
        "disablingTriggerId": [
          "string"
        ],
        "enablingTriggerId": [
          "string"
        ],
        "fingerprint": "string",
        "formatValue": {
          "caseConversionType": "none",
          "convertFalseToValue": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "convertNullToValue": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "convertTrueToValue": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "convertUndefinedToValue": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        },
        "name": "string",
        "notes": "string",
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "parentFolderId": "string",
        "path": "string",
        "scheduleEndMs": "string",
        "scheduleStartMs": "string",
        "tagManagerUrl": "string",
        "type": "string",
        "variableId": "string",
        "workspaceId": "string"
      }
    ],
    "zone": [
      {
        "accountId": "string",
        "boundary": {
          "condition": [
            {
              "parameter": [
                {
                  "key": "string",
                  "list": [
                    {}
                  ],
                  "map": [
                    {}
                  ],
                  "type": "typeUnspecified",
                  "value": "string"
                }
              ],
              "type": "conditionTypeUnspecified"
            }
          ],
          "customEvaluationTriggerId": [
            "string"
          ]
        },
        "childContainer": [
          {
            "nickname": "string",
            "publicId": "string"
          }
        ],
        "containerId": "string",
        "fingerprint": "string",
        "name": "string",
        "notes": "string",
        "path": "string",
        "tagManagerUrl": "string",
        "typeRestriction": {
          "enable": true,
          "whitelistedTypeId": [
            "string"
          ]
        },
        "workspaceId": "string",
        "zoneId": "string"
      }
    ]
  },
  "syncStatus": {
    "mergeConflict": true,
    "syncError": true
  }
}
```

Response to quick previewing a workspace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compilerError|boolean|false|none|Were there compiler errors or not.|
|containerVersion|[ContainerVersion](#schemacontainerversion)|false|none|The quick previewed container version.|
|syncStatus|[SyncStatus](#schemasyncstatus)|false|none|Whether quick previewing failed when syncing the workspace to the latest container version.|

<h2 id="tocS_RevertBuiltInVariableResponse">RevertBuiltInVariableResponse</h2>
<!-- backwards compatibility -->
<a id="schemarevertbuiltinvariableresponse"></a>
<a id="schema_RevertBuiltInVariableResponse"></a>
<a id="tocSrevertbuiltinvariableresponse"></a>
<a id="tocsrevertbuiltinvariableresponse"></a>

```json
{
  "enabled": true
}
```

The result of reverting a built-in variable in a workspace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether the built-in variable is enabled after reversion.|

<h2 id="tocS_RevertClientResponse">RevertClientResponse</h2>
<!-- backwards compatibility -->
<a id="schemarevertclientresponse"></a>
<a id="schema_RevertClientResponse"></a>
<a id="tocSrevertclientresponse"></a>
<a id="tocsrevertclientresponse"></a>

```json
{
  "client": {
    "accountId": "string",
    "clientId": "string",
    "containerId": "string",
    "fingerprint": "string",
    "name": "string",
    "notes": "string",
    "parameter": [
      {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      }
    ],
    "parentFolderId": "string",
    "path": "string",
    "priority": 0,
    "tagManagerUrl": "string",
    "type": "string",
    "workspaceId": "string"
  }
}
```

The result of reverting a client in a workspace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client|[Client](#schemaclient)|false|none|Client as it appears in the latest container version since the last workspace synchronization operation. If no client is present, that means the client was deleted in the latest container version.|

<h2 id="tocS_RevertFolderResponse">RevertFolderResponse</h2>
<!-- backwards compatibility -->
<a id="schemarevertfolderresponse"></a>
<a id="schema_RevertFolderResponse"></a>
<a id="tocSrevertfolderresponse"></a>
<a id="tocsrevertfolderresponse"></a>

```json
{
  "folder": {
    "accountId": "string",
    "containerId": "string",
    "fingerprint": "string",
    "folderId": "string",
    "name": "string",
    "notes": "string",
    "path": "string",
    "tagManagerUrl": "string",
    "workspaceId": "string"
  }
}
```

The result of reverting folder changes in a workspace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|folder|[Folder](#schemafolder)|false|none|Folder as it appears in the latest container version since the last workspace synchronization operation. If no folder is present, that means the folder was deleted in the latest container version.|

<h2 id="tocS_RevertTagResponse">RevertTagResponse</h2>
<!-- backwards compatibility -->
<a id="schemareverttagresponse"></a>
<a id="schema_RevertTagResponse"></a>
<a id="tocSreverttagresponse"></a>
<a id="tocsreverttagresponse"></a>

```json
{
  "tag": {
    "accountId": "string",
    "blockingRuleId": [
      "string"
    ],
    "blockingTriggerId": [
      "string"
    ],
    "consentSettings": {
      "consentStatus": "notSet",
      "consentType": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      }
    },
    "containerId": "string",
    "fingerprint": "string",
    "firingRuleId": [
      "string"
    ],
    "firingTriggerId": [
      "string"
    ],
    "liveOnly": true,
    "monitoringMetadata": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "monitoringMetadataTagNameKey": "string",
    "name": "string",
    "notes": "string",
    "parameter": [
      {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      }
    ],
    "parentFolderId": "string",
    "path": "string",
    "paused": true,
    "priority": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "scheduleEndMs": "string",
    "scheduleStartMs": "string",
    "setupTag": [
      {
        "stopOnSetupFailure": true,
        "tagName": "string"
      }
    ],
    "tagFiringOption": "tagFiringOptionUnspecified",
    "tagId": "string",
    "tagManagerUrl": "string",
    "teardownTag": [
      {
        "stopTeardownOnFailure": true,
        "tagName": "string"
      }
    ],
    "type": "string",
    "workspaceId": "string"
  }
}
```

The result of reverting a tag in a workspace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tag|[Tag](#schematag)|false|none|Tag as it appears in the latest container version since the last workspace synchronization operation. If no tag is present, that means the tag was deleted in the latest container version.|

<h2 id="tocS_RevertTemplateResponse">RevertTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemareverttemplateresponse"></a>
<a id="schema_RevertTemplateResponse"></a>
<a id="tocSreverttemplateresponse"></a>
<a id="tocsreverttemplateresponse"></a>

```json
{
  "template": {
    "accountId": "string",
    "containerId": "string",
    "fingerprint": "string",
    "galleryReference": {
      "host": "string",
      "isModified": true,
      "owner": "string",
      "repository": "string",
      "signature": "string",
      "version": "string"
    },
    "name": "string",
    "path": "string",
    "tagManagerUrl": "string",
    "templateData": "string",
    "templateId": "string",
    "workspaceId": "string"
  }
}
```

The result of reverting a template in a workspace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|template|[CustomTemplate](#schemacustomtemplate)|false|none|Template as it appears in the latest container version since the last workspace synchronization operation. If no template is present, that means the template was deleted in the latest container version.|

<h2 id="tocS_RevertTriggerResponse">RevertTriggerResponse</h2>
<!-- backwards compatibility -->
<a id="schemareverttriggerresponse"></a>
<a id="schema_RevertTriggerResponse"></a>
<a id="tocSreverttriggerresponse"></a>
<a id="tocsreverttriggerresponse"></a>

```json
{
  "trigger": {
    "accountId": "string",
    "autoEventFilter": [
      {
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "type": "conditionTypeUnspecified"
      }
    ],
    "checkValidation": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "containerId": "string",
    "continuousTimeMinMilliseconds": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "customEventFilter": [
      {
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "type": "conditionTypeUnspecified"
      }
    ],
    "eventName": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "filter": [
      {
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "type": "conditionTypeUnspecified"
      }
    ],
    "fingerprint": "string",
    "horizontalScrollPercentageList": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "interval": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "intervalSeconds": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "limit": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "maxTimerLengthSeconds": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "name": "string",
    "notes": "string",
    "parameter": [
      {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      }
    ],
    "parentFolderId": "string",
    "path": "string",
    "selector": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "tagManagerUrl": "string",
    "totalTimeMinMilliseconds": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "triggerId": "string",
    "type": "eventTypeUnspecified",
    "uniqueTriggerId": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "verticalScrollPercentageList": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "visibilitySelector": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "visiblePercentageMax": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "visiblePercentageMin": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "waitForTags": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "waitForTagsTimeout": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "workspaceId": "string"
  }
}
```

The result of reverting a trigger in a workspace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trigger|[Trigger](#schematrigger)|false|none|Trigger as it appears in the latest container version since the last workspace synchronization operation. If no trigger is present, that means the trigger was deleted in the latest container version.|

<h2 id="tocS_RevertVariableResponse">RevertVariableResponse</h2>
<!-- backwards compatibility -->
<a id="schemarevertvariableresponse"></a>
<a id="schema_RevertVariableResponse"></a>
<a id="tocSrevertvariableresponse"></a>
<a id="tocsrevertvariableresponse"></a>

```json
{
  "variable": {
    "accountId": "string",
    "containerId": "string",
    "disablingTriggerId": [
      "string"
    ],
    "enablingTriggerId": [
      "string"
    ],
    "fingerprint": "string",
    "formatValue": {
      "caseConversionType": "none",
      "convertFalseToValue": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "convertNullToValue": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "convertTrueToValue": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      },
      "convertUndefinedToValue": {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      }
    },
    "name": "string",
    "notes": "string",
    "parameter": [
      {
        "key": "string",
        "list": [
          {}
        ],
        "map": [
          {}
        ],
        "type": "typeUnspecified",
        "value": "string"
      }
    ],
    "parentFolderId": "string",
    "path": "string",
    "scheduleEndMs": "string",
    "scheduleStartMs": "string",
    "tagManagerUrl": "string",
    "type": "string",
    "variableId": "string",
    "workspaceId": "string"
  }
}
```

The result of reverting a variable in a workspace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|variable|[Variable](#schemavariable)|false|none|Variable as it appears in the latest container version since the last workspace synchronization operation. If no variable is present, that means the variable was deleted in the latest container version.|

<h2 id="tocS_RevertZoneResponse">RevertZoneResponse</h2>
<!-- backwards compatibility -->
<a id="schemarevertzoneresponse"></a>
<a id="schema_RevertZoneResponse"></a>
<a id="tocSrevertzoneresponse"></a>
<a id="tocsrevertzoneresponse"></a>

```json
{
  "zone": {
    "accountId": "string",
    "boundary": {
      "condition": [
        {
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "type": "conditionTypeUnspecified"
        }
      ],
      "customEvaluationTriggerId": [
        "string"
      ]
    },
    "childContainer": [
      {
        "nickname": "string",
        "publicId": "string"
      }
    ],
    "containerId": "string",
    "fingerprint": "string",
    "name": "string",
    "notes": "string",
    "path": "string",
    "tagManagerUrl": "string",
    "typeRestriction": {
      "enable": true,
      "whitelistedTypeId": [
        "string"
      ]
    },
    "workspaceId": "string",
    "zoneId": "string"
  }
}
```

The result of reverting a zone in a workspace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|zone|[Zone](#schemazone)|false|none|Zone as it appears in the latest container version since the last workspace synchronization operation. If no zone is present, that means the zone was deleted in the latest container version.|

<h2 id="tocS_SetupTag">SetupTag</h2>
<!-- backwards compatibility -->
<a id="schemasetuptag"></a>
<a id="schema_SetupTag"></a>
<a id="tocSsetuptag"></a>
<a id="tocssetuptag"></a>

```json
{
  "stopOnSetupFailure": true,
  "tagName": "string"
}
```

Represents a reference to atag that fires before another tag in order to set up dependencies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stopOnSetupFailure|boolean|false|none|If true, fire the main tag if and only if the setup tag fires successfully. If false, fire the main tag regardless of setup tag firing status.|
|tagName|string|false|none|The name of the setup tag.|

<h2 id="tocS_SyncStatus">SyncStatus</h2>
<!-- backwards compatibility -->
<a id="schemasyncstatus"></a>
<a id="schema_SyncStatus"></a>
<a id="tocSsyncstatus"></a>
<a id="tocssyncstatus"></a>

```json
{
  "mergeConflict": true,
  "syncError": true
}
```

The status of a workspace after synchronization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mergeConflict|boolean|false|none|Synchornization operation detected a merge conflict.|
|syncError|boolean|false|none|An error occurred during the synchronization operation.|

<h2 id="tocS_SyncWorkspaceResponse">SyncWorkspaceResponse</h2>
<!-- backwards compatibility -->
<a id="schemasyncworkspaceresponse"></a>
<a id="schema_SyncWorkspaceResponse"></a>
<a id="tocSsyncworkspaceresponse"></a>
<a id="tocssyncworkspaceresponse"></a>

```json
{
  "mergeConflict": [
    {
      "entityInBaseVersion": {
        "changeStatus": "changeStatusUnspecified",
        "client": {
          "accountId": "string",
          "clientId": "string",
          "containerId": "string",
          "fingerprint": "string",
          "name": "string",
          "notes": "string",
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "parentFolderId": "string",
          "path": "string",
          "priority": 0,
          "tagManagerUrl": "string",
          "type": "string",
          "workspaceId": "string"
        },
        "folder": {
          "accountId": "string",
          "containerId": "string",
          "fingerprint": "string",
          "folderId": "string",
          "name": "string",
          "notes": "string",
          "path": "string",
          "tagManagerUrl": "string",
          "workspaceId": "string"
        },
        "tag": {
          "accountId": "string",
          "blockingRuleId": [
            "string"
          ],
          "blockingTriggerId": [
            "string"
          ],
          "consentSettings": {
            "consentStatus": "notSet",
            "consentType": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          },
          "containerId": "string",
          "fingerprint": "string",
          "firingRuleId": [
            "string"
          ],
          "firingTriggerId": [
            "string"
          ],
          "liveOnly": true,
          "monitoringMetadata": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "monitoringMetadataTagNameKey": "string",
          "name": "string",
          "notes": "string",
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "parentFolderId": "string",
          "path": "string",
          "paused": true,
          "priority": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "scheduleEndMs": "string",
          "scheduleStartMs": "string",
          "setupTag": [
            {
              "stopOnSetupFailure": true,
              "tagName": "string"
            }
          ],
          "tagFiringOption": "tagFiringOptionUnspecified",
          "tagId": "string",
          "tagManagerUrl": "string",
          "teardownTag": [
            {
              "stopTeardownOnFailure": true,
              "tagName": "string"
            }
          ],
          "type": "string",
          "workspaceId": "string"
        },
        "trigger": {
          "accountId": "string",
          "autoEventFilter": [
            {
              "parameter": [
                {
                  "key": "string",
                  "list": [
                    {}
                  ],
                  "map": [
                    {}
                  ],
                  "type": "typeUnspecified",
                  "value": "string"
                }
              ],
              "type": "conditionTypeUnspecified"
            }
          ],
          "checkValidation": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "containerId": "string",
          "continuousTimeMinMilliseconds": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "customEventFilter": [
            {
              "parameter": [
                {
                  "key": "string",
                  "list": [
                    {}
                  ],
                  "map": [
                    {}
                  ],
                  "type": "typeUnspecified",
                  "value": "string"
                }
              ],
              "type": "conditionTypeUnspecified"
            }
          ],
          "eventName": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "filter": [
            {
              "parameter": [
                {
                  "key": "string",
                  "list": [
                    {}
                  ],
                  "map": [
                    {}
                  ],
                  "type": "typeUnspecified",
                  "value": "string"
                }
              ],
              "type": "conditionTypeUnspecified"
            }
          ],
          "fingerprint": "string",
          "horizontalScrollPercentageList": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "interval": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "intervalSeconds": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "limit": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "maxTimerLengthSeconds": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "name": "string",
          "notes": "string",
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "parentFolderId": "string",
          "path": "string",
          "selector": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "tagManagerUrl": "string",
          "totalTimeMinMilliseconds": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "triggerId": "string",
          "type": "eventTypeUnspecified",
          "uniqueTriggerId": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "verticalScrollPercentageList": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "visibilitySelector": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "visiblePercentageMax": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "visiblePercentageMin": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "waitForTags": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "waitForTagsTimeout": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "workspaceId": "string"
        },
        "variable": {
          "accountId": "string",
          "containerId": "string",
          "disablingTriggerId": [
            "string"
          ],
          "enablingTriggerId": [
            "string"
          ],
          "fingerprint": "string",
          "formatValue": {
            "caseConversionType": "none",
            "convertFalseToValue": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            },
            "convertNullToValue": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            },
            "convertTrueToValue": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            },
            "convertUndefinedToValue": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          },
          "name": "string",
          "notes": "string",
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "parentFolderId": "string",
          "path": "string",
          "scheduleEndMs": "string",
          "scheduleStartMs": "string",
          "tagManagerUrl": "string",
          "type": "string",
          "variableId": "string",
          "workspaceId": "string"
        }
      },
      "entityInWorkspace": {
        "changeStatus": "changeStatusUnspecified",
        "client": {
          "accountId": "string",
          "clientId": "string",
          "containerId": "string",
          "fingerprint": "string",
          "name": "string",
          "notes": "string",
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "parentFolderId": "string",
          "path": "string",
          "priority": 0,
          "tagManagerUrl": "string",
          "type": "string",
          "workspaceId": "string"
        },
        "folder": {
          "accountId": "string",
          "containerId": "string",
          "fingerprint": "string",
          "folderId": "string",
          "name": "string",
          "notes": "string",
          "path": "string",
          "tagManagerUrl": "string",
          "workspaceId": "string"
        },
        "tag": {
          "accountId": "string",
          "blockingRuleId": [
            "string"
          ],
          "blockingTriggerId": [
            "string"
          ],
          "consentSettings": {
            "consentStatus": "notSet",
            "consentType": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          },
          "containerId": "string",
          "fingerprint": "string",
          "firingRuleId": [
            "string"
          ],
          "firingTriggerId": [
            "string"
          ],
          "liveOnly": true,
          "monitoringMetadata": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "monitoringMetadataTagNameKey": "string",
          "name": "string",
          "notes": "string",
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "parentFolderId": "string",
          "path": "string",
          "paused": true,
          "priority": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "scheduleEndMs": "string",
          "scheduleStartMs": "string",
          "setupTag": [
            {
              "stopOnSetupFailure": true,
              "tagName": "string"
            }
          ],
          "tagFiringOption": "tagFiringOptionUnspecified",
          "tagId": "string",
          "tagManagerUrl": "string",
          "teardownTag": [
            {
              "stopTeardownOnFailure": true,
              "tagName": "string"
            }
          ],
          "type": "string",
          "workspaceId": "string"
        },
        "trigger": {
          "accountId": "string",
          "autoEventFilter": [
            {
              "parameter": [
                {
                  "key": "string",
                  "list": [
                    {}
                  ],
                  "map": [
                    {}
                  ],
                  "type": "typeUnspecified",
                  "value": "string"
                }
              ],
              "type": "conditionTypeUnspecified"
            }
          ],
          "checkValidation": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "containerId": "string",
          "continuousTimeMinMilliseconds": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "customEventFilter": [
            {
              "parameter": [
                {
                  "key": "string",
                  "list": [
                    {}
                  ],
                  "map": [
                    {}
                  ],
                  "type": "typeUnspecified",
                  "value": "string"
                }
              ],
              "type": "conditionTypeUnspecified"
            }
          ],
          "eventName": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "filter": [
            {
              "parameter": [
                {
                  "key": "string",
                  "list": [
                    {}
                  ],
                  "map": [
                    {}
                  ],
                  "type": "typeUnspecified",
                  "value": "string"
                }
              ],
              "type": "conditionTypeUnspecified"
            }
          ],
          "fingerprint": "string",
          "horizontalScrollPercentageList": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "interval": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "intervalSeconds": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "limit": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "maxTimerLengthSeconds": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "name": "string",
          "notes": "string",
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "parentFolderId": "string",
          "path": "string",
          "selector": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "tagManagerUrl": "string",
          "totalTimeMinMilliseconds": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "triggerId": "string",
          "type": "eventTypeUnspecified",
          "uniqueTriggerId": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "verticalScrollPercentageList": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "visibilitySelector": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "visiblePercentageMax": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "visiblePercentageMin": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "waitForTags": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "waitForTagsTimeout": {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          },
          "workspaceId": "string"
        },
        "variable": {
          "accountId": "string",
          "containerId": "string",
          "disablingTriggerId": [
            "string"
          ],
          "enablingTriggerId": [
            "string"
          ],
          "fingerprint": "string",
          "formatValue": {
            "caseConversionType": "none",
            "convertFalseToValue": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            },
            "convertNullToValue": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            },
            "convertTrueToValue": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            },
            "convertUndefinedToValue": {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          },
          "name": "string",
          "notes": "string",
          "parameter": [
            {
              "key": "string",
              "list": [
                {}
              ],
              "map": [
                {}
              ],
              "type": "typeUnspecified",
              "value": "string"
            }
          ],
          "parentFolderId": "string",
          "path": "string",
          "scheduleEndMs": "string",
          "scheduleStartMs": "string",
          "tagManagerUrl": "string",
          "type": "string",
          "variableId": "string",
          "workspaceId": "string"
        }
      }
    }
  ],
  "syncStatus": {
    "mergeConflict": true,
    "syncError": true
  }
}
```

A response after synchronizing the workspace to the latest container version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mergeConflict|[[MergeConflict](#schemamergeconflict)]|false|none|The merge conflict after sync. If this field is not empty, the sync is still treated as successful. But a version cannot be created until all conflicts are resolved.|
|syncStatus|[SyncStatus](#schemasyncstatus)|false|none|Indicates whether synchronization caused a merge conflict or sync error.|

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "accountId": "string",
  "blockingRuleId": [
    "string"
  ],
  "blockingTriggerId": [
    "string"
  ],
  "consentSettings": {
    "consentStatus": "notSet",
    "consentType": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    }
  },
  "containerId": "string",
  "fingerprint": "string",
  "firingRuleId": [
    "string"
  ],
  "firingTriggerId": [
    "string"
  ],
  "liveOnly": true,
  "monitoringMetadata": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "monitoringMetadataTagNameKey": "string",
  "name": "string",
  "notes": "string",
  "parameter": [
    {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    }
  ],
  "parentFolderId": "string",
  "path": "string",
  "paused": true,
  "priority": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "scheduleEndMs": "string",
  "scheduleStartMs": "string",
  "setupTag": [
    {
      "stopOnSetupFailure": true,
      "tagName": "string"
    }
  ],
  "tagFiringOption": "tagFiringOptionUnspecified",
  "tagId": "string",
  "tagManagerUrl": "string",
  "teardownTag": [
    {
      "stopTeardownOnFailure": true,
      "tagName": "string"
    }
  ],
  "type": "string",
  "workspaceId": "string"
}
```

Represents a Google Tag Manager Tag.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|GTM Account ID.|
|blockingRuleId|[string]|false|none|Blocking rule IDs. If any of the listed rules evaluate to true, the tag will not fire. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|blockingTriggerId|[string]|false|none|Blocking trigger IDs. If any of the listed triggers evaluate to true, the tag will not fire. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|consentSettings|[TagConsentSetting](#schematagconsentsetting)|false|none|Consent settings of a tag. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|containerId|string|false|none|GTM Container ID.|
|fingerprint|string|false|none|The fingerprint of the GTM Tag as computed at storage time. This value is recomputed whenever the tag is modified.|
|firingRuleId|[string]|false|none|Firing rule IDs. A tag will fire when any of the listed rules are true and all of its blockingRuleIds (if any specified) are false. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|firingTriggerId|[string]|false|none|Firing trigger IDs. A tag will fire when any of the listed triggers are true and all of its blockingTriggerIds (if any specified) are false. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|liveOnly|boolean|false|none|If set to true, this tag will only fire in the live environment (e.g. not in preview or debug mode). @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|monitoringMetadata|[Parameter](#schemaparameter)|false|none|A map of key-value pairs of tag metadata to be included in the event data for tag monitoring. Notes: - This parameter must be type MAP. - Each parameter in the map are type TEMPLATE, however cannot contain variable references. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|monitoringMetadataTagNameKey|string|false|none|If non-empty, then the tag display name will be included in the monitoring metadata map using the key specified. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|name|string|false|none|Tag display name. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|notes|string|false|none|User notes on how to apply this tag in the container. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|parameter|[[Parameter](#schemaparameter)]|false|none|The tag's parameters. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|parentFolderId|string|false|none|Parent folder id.|
|path|string|false|none|GTM Tag's API relative path.|
|paused|boolean|false|none|Indicates whether the tag is paused, which prevents the tag from firing. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|priority|[Parameter](#schemaparameter)|false|none|User defined numeric priority of the tag. Tags are fired asynchronously in order of priority. Tags with higher numeric value fire first. A tag's priority can be a positive or negative value. The default value is 0. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|scheduleEndMs|string(int64)|false|none|The end timestamp in milliseconds to schedule a tag. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|scheduleStartMs|string(int64)|false|none|The start timestamp in milliseconds to schedule a tag. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|setupTag|[[SetupTag](#schemasetuptag)]|false|none|The list of setup tags. Currently we only allow one.|
|tagFiringOption|string|false|none|Option to fire this tag.|
|tagId|string|false|none|The Tag ID uniquely identifies the GTM Tag.|
|tagManagerUrl|string|false|none|Auto generated link to the tag manager UI|
|teardownTag|[[TeardownTag](#schemateardowntag)]|false|none|The list of teardown tags. Currently we only allow one.|
|type|string|false|none|GTM Tag Type. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update|
|workspaceId|string|false|none|GTM Workspace ID.|

#### Enumerated Values

|Property|Value|
|---|---|
|tagFiringOption|tagFiringOptionUnspecified|
|tagFiringOption|unlimited|
|tagFiringOption|oncePerEvent|
|tagFiringOption|oncePerLoad|

<h2 id="tocS_TagConsentSetting">TagConsentSetting</h2>
<!-- backwards compatibility -->
<a id="schematagconsentsetting"></a>
<a id="schema_TagConsentSetting"></a>
<a id="tocStagconsentsetting"></a>
<a id="tocstagconsentsetting"></a>

```json
{
  "consentStatus": "notSet",
  "consentType": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consentStatus|string|false|none|The tag's consent status. If set to NEEDED, the runtime will check that the consent types specified by the consent_type field have been granted.|
|consentType|[Parameter](#schemaparameter)|false|none|The type of consents to check for during tag firing if in the consent NEEDED state. This parameter must be of type LIST where each list item is of type STRING.|

#### Enumerated Values

|Property|Value|
|---|---|
|consentStatus|notSet|
|consentStatus|notNeeded|
|consentStatus|needed|

<h2 id="tocS_TeardownTag">TeardownTag</h2>
<!-- backwards compatibility -->
<a id="schemateardowntag"></a>
<a id="schema_TeardownTag"></a>
<a id="tocSteardowntag"></a>
<a id="tocsteardowntag"></a>

```json
{
  "stopTeardownOnFailure": true,
  "tagName": "string"
}
```

Represents a tag that fires after another tag in order to tear down dependencies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stopTeardownOnFailure|boolean|false|none|If true, fire the teardown tag if and only if the main tag fires successfully. If false, fire the teardown tag regardless of main tag firing status.|
|tagName|string|false|none|The name of the teardown tag.|

<h2 id="tocS_Trigger">Trigger</h2>
<!-- backwards compatibility -->
<a id="schematrigger"></a>
<a id="schema_Trigger"></a>
<a id="tocStrigger"></a>
<a id="tocstrigger"></a>

```json
{
  "accountId": "string",
  "autoEventFilter": [
    {
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "type": "conditionTypeUnspecified"
    }
  ],
  "checkValidation": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "containerId": "string",
  "continuousTimeMinMilliseconds": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "customEventFilter": [
    {
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "type": "conditionTypeUnspecified"
    }
  ],
  "eventName": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "filter": [
    {
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "type": "conditionTypeUnspecified"
    }
  ],
  "fingerprint": "string",
  "horizontalScrollPercentageList": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "interval": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "intervalSeconds": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "limit": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "maxTimerLengthSeconds": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "name": "string",
  "notes": "string",
  "parameter": [
    {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    }
  ],
  "parentFolderId": "string",
  "path": "string",
  "selector": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "tagManagerUrl": "string",
  "totalTimeMinMilliseconds": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "triggerId": "string",
  "type": "eventTypeUnspecified",
  "uniqueTriggerId": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "verticalScrollPercentageList": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "visibilitySelector": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "visiblePercentageMax": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "visiblePercentageMin": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "waitForTags": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "waitForTagsTimeout": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "workspaceId": "string"
}
```

Represents a Google Tag Manager Trigger

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|GTM Account ID.|
|autoEventFilter|[[Condition](#schemacondition)]|false|none|Used in the case of auto event tracking. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|checkValidation|[Parameter](#schemaparameter)|false|none|Whether or not we should only fire tags if the form submit or link click event is not cancelled by some other event handler (e.g. because of validation). Only valid for Form Submission and Link Click triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|containerId|string|false|none|GTM Container ID.|
|continuousTimeMinMilliseconds|[Parameter](#schemaparameter)|false|none|A visibility trigger minimum continuous visible time (in milliseconds). Only valid for AMP Visibility trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|customEventFilter|[[Condition](#schemacondition)]|false|none|Used in the case of custom event, which is fired iff all Conditions are true. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|eventName|[Parameter](#schemaparameter)|false|none|Name of the GTM event that is fired. Only valid for Timer triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|filter|[[Condition](#schemacondition)]|false|none|The trigger will only fire iff all Conditions are true. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|fingerprint|string|false|none|The fingerprint of the GTM Trigger as computed at storage time. This value is recomputed whenever the trigger is modified.|
|horizontalScrollPercentageList|[Parameter](#schemaparameter)|false|none|List of integer percentage values for scroll triggers. The trigger will fire when each percentage is reached when the view is scrolled horizontally. Only valid for AMP scroll triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|interval|[Parameter](#schemaparameter)|false|none|Time between triggering recurring Timer Events (in milliseconds). Only valid for Timer triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|intervalSeconds|[Parameter](#schemaparameter)|false|none|Time between Timer Events to fire (in seconds). Only valid for AMP Timer trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|limit|[Parameter](#schemaparameter)|false|none|Limit of the number of GTM events this Timer Trigger will fire. If no limit is set, we will continue to fire GTM events until the user leaves the page. Only valid for Timer triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|maxTimerLengthSeconds|[Parameter](#schemaparameter)|false|none|Max time to fire Timer Events (in seconds). Only valid for AMP Timer trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|name|string|false|none|Trigger display name. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|notes|string|false|none|User notes on how to apply this trigger in the container. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|parameter|[[Parameter](#schemaparameter)]|false|none|Additional parameters. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|parentFolderId|string|false|none|Parent folder id.|
|path|string|false|none|GTM Trigger's API relative path.|
|selector|[Parameter](#schemaparameter)|false|none|A click trigger CSS selector (i.e. "a", "button" etc.). Only valid for AMP Click trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|tagManagerUrl|string|false|none|Auto generated link to the tag manager UI|
|totalTimeMinMilliseconds|[Parameter](#schemaparameter)|false|none|A visibility trigger minimum total visible time (in milliseconds). Only valid for AMP Visibility trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|triggerId|string|false|none|The Trigger ID uniquely identifies the GTM Trigger.|
|type|string|false|none|Defines the data layer event that causes this trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|uniqueTriggerId|[Parameter](#schemaparameter)|false|none|Globally unique id of the trigger that auto-generates this (a Form Submit, Link Click or Timer listener) if any. Used to make incompatible auto-events work together with trigger filtering based on trigger ids. This value is populated during output generation since the tags implied by triggers don't exist until then. Only valid for Form Submit, Link Click and Timer triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|verticalScrollPercentageList|[Parameter](#schemaparameter)|false|none|List of integer percentage values for scroll triggers. The trigger will fire when each percentage is reached when the view is scrolled vertically. Only valid for AMP scroll triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|visibilitySelector|[Parameter](#schemaparameter)|false|none|A visibility trigger CSS selector (i.e. "#id"). Only valid for AMP Visibility trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|visiblePercentageMax|[Parameter](#schemaparameter)|false|none|A visibility trigger maximum percent visibility. Only valid for AMP Visibility trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|visiblePercentageMin|[Parameter](#schemaparameter)|false|none|A visibility trigger minimum percent visibility. Only valid for AMP Visibility trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|waitForTags|[Parameter](#schemaparameter)|false|none|Whether or not we should delay the form submissions or link opening until all of the tags have fired (by preventing the default action and later simulating the default action). Only valid for Form Submission and Link Click triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|waitForTagsTimeout|[Parameter](#schemaparameter)|false|none|How long to wait (in milliseconds) for tags to fire when 'waits_for_tags' above evaluates to true. Only valid for Form Submission and Link Click triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update|
|workspaceId|string|false|none|GTM Workspace ID.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|eventTypeUnspecified|
|type|pageview|
|type|domReady|
|type|windowLoaded|
|type|customEvent|
|type|triggerGroup|
|type|init|
|type|consentInit|
|type|serverPageview|
|type|always|
|type|firebaseAppException|
|type|firebaseAppUpdate|
|type|firebaseCampaign|
|type|firebaseFirstOpen|
|type|firebaseInAppPurchase|
|type|firebaseNotificationDismiss|
|type|firebaseNotificationForeground|
|type|firebaseNotificationOpen|
|type|firebaseNotificationReceive|
|type|firebaseOsUpdate|
|type|firebaseSessionStart|
|type|firebaseUserEngagement|
|type|formSubmission|
|type|click|
|type|linkClick|
|type|jsError|
|type|historyChange|
|type|timer|
|type|ampClick|
|type|ampTimer|
|type|ampScroll|
|type|ampVisibility|
|type|youTubeVideo|
|type|scrollDepth|
|type|elementVisibility|

<h2 id="tocS_UserPermission">UserPermission</h2>
<!-- backwards compatibility -->
<a id="schemauserpermission"></a>
<a id="schema_UserPermission"></a>
<a id="tocSuserpermission"></a>
<a id="tocsuserpermission"></a>

```json
{
  "accountAccess": {
    "permission": "accountPermissionUnspecified"
  },
  "accountId": "string",
  "containerAccess": [
    {
      "containerId": "string",
      "permission": "containerPermissionUnspecified"
    }
  ],
  "emailAddress": "string",
  "path": "string"
}
```

Represents a user's permissions to an account and its container.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountAccess|[AccountAccess](#schemaaccountaccess)|false|none|GTM Account access permissions. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update|
|accountId|string|false|none|The Account ID uniquely identifies the GTM Account.|
|containerAccess|[[ContainerAccess](#schemacontaineraccess)]|false|none|GTM Container access permissions. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update|
|emailAddress|string|false|none|User's email address. @mutable tagmanager.accounts.permissions.create|
|path|string|false|none|GTM UserPermission's API relative path.|

<h2 id="tocS_Variable">Variable</h2>
<!-- backwards compatibility -->
<a id="schemavariable"></a>
<a id="schema_Variable"></a>
<a id="tocSvariable"></a>
<a id="tocsvariable"></a>

```json
{
  "accountId": "string",
  "containerId": "string",
  "disablingTriggerId": [
    "string"
  ],
  "enablingTriggerId": [
    "string"
  ],
  "fingerprint": "string",
  "formatValue": {
    "caseConversionType": "none",
    "convertFalseToValue": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "convertNullToValue": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "convertTrueToValue": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    },
    "convertUndefinedToValue": {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    }
  },
  "name": "string",
  "notes": "string",
  "parameter": [
    {
      "key": "string",
      "list": [
        {}
      ],
      "map": [
        {}
      ],
      "type": "typeUnspecified",
      "value": "string"
    }
  ],
  "parentFolderId": "string",
  "path": "string",
  "scheduleEndMs": "string",
  "scheduleStartMs": "string",
  "tagManagerUrl": "string",
  "type": "string",
  "variableId": "string",
  "workspaceId": "string"
}
```

Represents a Google Tag Manager Variable.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|GTM Account ID.|
|containerId|string|false|none|GTM Container ID.|
|disablingTriggerId|[string]|false|none|For mobile containers only: A list of trigger IDs for disabling conditional variables; the variable is enabled if one of the enabling trigger is true while all the disabling trigger are false. Treated as an unordered set. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update|
|enablingTriggerId|[string]|false|none|For mobile containers only: A list of trigger IDs for enabling conditional variables; the variable is enabled if one of the enabling triggers is true while all the disabling triggers are false. Treated as an unordered set. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update|
|fingerprint|string|false|none|The fingerprint of the GTM Variable as computed at storage time. This value is recomputed whenever the variable is modified.|
|formatValue|[VariableFormatValue](#schemavariableformatvalue)|false|none|Option to convert a variable value to other value.|
|name|string|false|none|Variable display name. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update|
|notes|string|false|none|User notes on how to apply this variable in the container. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update|
|parameter|[[Parameter](#schemaparameter)]|false|none|The variable's parameters. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update|
|parentFolderId|string|false|none|Parent folder id.|
|path|string|false|none|GTM Variable's API relative path.|
|scheduleEndMs|string(int64)|false|none|The end timestamp in milliseconds to schedule a variable. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update|
|scheduleStartMs|string(int64)|false|none|The start timestamp in milliseconds to schedule a variable. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update|
|tagManagerUrl|string|false|none|Auto generated link to the tag manager UI|
|type|string|false|none|GTM Variable Type. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update|
|variableId|string|false|none|The Variable ID uniquely identifies the GTM Variable.|
|workspaceId|string|false|none|GTM Workspace ID.|

<h2 id="tocS_VariableFormatValue">VariableFormatValue</h2>
<!-- backwards compatibility -->
<a id="schemavariableformatvalue"></a>
<a id="schema_VariableFormatValue"></a>
<a id="tocSvariableformatvalue"></a>
<a id="tocsvariableformatvalue"></a>

```json
{
  "caseConversionType": "none",
  "convertFalseToValue": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "convertNullToValue": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "convertTrueToValue": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  },
  "convertUndefinedToValue": {
    "key": "string",
    "list": [
      {}
    ],
    "map": [
      {}
    ],
    "type": "typeUnspecified",
    "value": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caseConversionType|string|false|none|The option to convert a string-type variable value to either lowercase or uppercase.|
|convertFalseToValue|[Parameter](#schemaparameter)|false|none|The value to convert if a variable value is false.|
|convertNullToValue|[Parameter](#schemaparameter)|false|none|The value to convert if a variable value is null.|
|convertTrueToValue|[Parameter](#schemaparameter)|false|none|The value to convert if a variable value is true.|
|convertUndefinedToValue|[Parameter](#schemaparameter)|false|none|The value to convert if a variable value is undefined.|

#### Enumerated Values

|Property|Value|
|---|---|
|caseConversionType|none|
|caseConversionType|lowercase|
|caseConversionType|uppercase|

<h2 id="tocS_Workspace">Workspace</h2>
<!-- backwards compatibility -->
<a id="schemaworkspace"></a>
<a id="schema_Workspace"></a>
<a id="tocSworkspace"></a>
<a id="tocsworkspace"></a>

```json
{
  "accountId": "string",
  "containerId": "string",
  "description": "string",
  "fingerprint": "string",
  "name": "string",
  "path": "string",
  "tagManagerUrl": "string",
  "workspaceId": "string"
}
```

Represents a Google Tag Manager Container Workspace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|GTM Account ID.|
|containerId|string|false|none|GTM Container ID.|
|description|string|false|none|Workspace description. @mutable tagmanager.accounts.containers.workspaces.create @mutable tagmanager.accounts.containers.workspaces.update|
|fingerprint|string|false|none|The fingerprint of the GTM Workspace as computed at storage time. This value is recomputed whenever the workspace is modified.|
|name|string|false|none|Workspace display name. @mutable tagmanager.accounts.containers.workspaces.create @mutable tagmanager.accounts.containers.workspaces.update|
|path|string|false|none|GTM Workspace's API relative path.|
|tagManagerUrl|string|false|none|Auto generated link to the tag manager UI|
|workspaceId|string|false|none|The Workspace ID uniquely identifies the GTM Workspace.|

<h2 id="tocS_Zone">Zone</h2>
<!-- backwards compatibility -->
<a id="schemazone"></a>
<a id="schema_Zone"></a>
<a id="tocSzone"></a>
<a id="tocszone"></a>

```json
{
  "accountId": "string",
  "boundary": {
    "condition": [
      {
        "parameter": [
          {
            "key": "string",
            "list": [
              {}
            ],
            "map": [
              {}
            ],
            "type": "typeUnspecified",
            "value": "string"
          }
        ],
        "type": "conditionTypeUnspecified"
      }
    ],
    "customEvaluationTriggerId": [
      "string"
    ]
  },
  "childContainer": [
    {
      "nickname": "string",
      "publicId": "string"
    }
  ],
  "containerId": "string",
  "fingerprint": "string",
  "name": "string",
  "notes": "string",
  "path": "string",
  "tagManagerUrl": "string",
  "typeRestriction": {
    "enable": true,
    "whitelistedTypeId": [
      "string"
    ]
  },
  "workspaceId": "string",
  "zoneId": "string"
}
```

Represents a Google Tag Manager Zone's contents.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|GTM Account ID.|
|boundary|[ZoneBoundary](#schemazoneboundary)|false|none|This Zone's boundary.|
|childContainer|[[ZoneChildContainer](#schemazonechildcontainer)]|false|none|Containers that are children of this Zone.|
|containerId|string|false|none|GTM Container ID.|
|fingerprint|string|false|none|The fingerprint of the GTM Zone as computed at storage time. This value is recomputed whenever the zone is modified.|
|name|string|false|none|Zone display name.|
|notes|string|false|none|User notes on how to apply this zone in the container.|
|path|string|false|none|GTM Zone's API relative path.|
|tagManagerUrl|string|false|none|Auto generated link to the tag manager UI|
|typeRestriction|[ZoneTypeRestriction](#schemazonetyperestriction)|false|none|This Zone's type restrictions.|
|workspaceId|string|false|none|GTM Workspace ID.|
|zoneId|string|false|none|The Zone ID uniquely identifies the GTM Zone.|

<h2 id="tocS_ZoneBoundary">ZoneBoundary</h2>
<!-- backwards compatibility -->
<a id="schemazoneboundary"></a>
<a id="schema_ZoneBoundary"></a>
<a id="tocSzoneboundary"></a>
<a id="tocszoneboundary"></a>

```json
{
  "condition": [
    {
      "parameter": [
        {
          "key": "string",
          "list": [
            {}
          ],
          "map": [
            {}
          ],
          "type": "typeUnspecified",
          "value": "string"
        }
      ],
      "type": "conditionTypeUnspecified"
    }
  ],
  "customEvaluationTriggerId": [
    "string"
  ]
}
```

Represents a Zone's boundaries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|condition|[[Condition](#schemacondition)]|false|none|The conditions that, when conjoined, make up the boundary.|
|customEvaluationTriggerId|[string]|false|none|Custom evaluation trigger IDs. A zone will evaluate its boundary conditions when any of the listed triggers are true.|

<h2 id="tocS_ZoneChildContainer">ZoneChildContainer</h2>
<!-- backwards compatibility -->
<a id="schemazonechildcontainer"></a>
<a id="schema_ZoneChildContainer"></a>
<a id="tocSzonechildcontainer"></a>
<a id="tocszonechildcontainer"></a>

```json
{
  "nickname": "string",
  "publicId": "string"
}
```

Represents a child container of a Zone.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nickname|string|false|none|The zone's nickname for the child container.|
|publicId|string|false|none|The child container's public id.|

<h2 id="tocS_ZoneTypeRestriction">ZoneTypeRestriction</h2>
<!-- backwards compatibility -->
<a id="schemazonetyperestriction"></a>
<a id="schema_ZoneTypeRestriction"></a>
<a id="tocSzonetyperestriction"></a>
<a id="tocszonetyperestriction"></a>

```json
{
  "enable": true,
  "whitelistedTypeId": [
    "string"
  ]
}
```

Represents a Zone's type restrictions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enable|boolean|false|none|True if type restrictions have been enabled for this Zone.|
|whitelistedTypeId|[string]|false|none|List of type public ids that have been whitelisted for use in this Zone.|
