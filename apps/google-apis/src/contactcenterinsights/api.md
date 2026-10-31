<h1 id="contact-center-ai-insights-api">Contact Center AI Insights API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://contactcenterinsights.googleapis.com/">https://contactcenterinsights.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/contact-center/insights/docs">External documentation</a>

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

<h1 id="contact-center-ai-insights-api-projects">projects</h1>

## contactcenterinsights.projects.locations.issueModels.calculateIssueModelStats

<a id="opIdcontactcenterinsights.projects.locations.issueModels.calculateIssueModelStats"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:calculateIssueModelStats \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{issueModel}:calculateIssueModelStats`

Gets an issue model's statistics.

<h3 id="contactcenterinsightsprojectslocationsissuemodelscalculateissuemodelstats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|issueModel|path|string|true|Required. The resource name of the issue model to query against.|
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
  "currentStats": {
    "analyzedConversationsCount": "string",
    "issueStats": {
      "property1": {
        "displayName": "string",
        "issue": "string",
        "labeledConversationsCount": "string"
      },
      "property2": {
        "displayName": "string",
        "issue": "string",
        "labeledConversationsCount": "string"
      }
    },
    "unclassifiedConversationsCount": "string"
  }
}
```

<h3 id="contactcenterinsightsprojectslocationsissuemodelscalculateissuemodelstats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse](#schemagooglecloudcontactcenterinsightsv1calculateissuemodelstatsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## contactcenterinsights.projects.locations.conversations.calculateStats

<a id="opIdcontactcenterinsights.projects.locations.conversations.calculateStats"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/conversations:calculateStats \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{location}/conversations:calculateStats`

Gets conversation statistics.

<h3 id="contactcenterinsightsprojectslocationsconversationscalculatestats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|location|path|string|true|Required. The location of the conversations.|
|filter|query|string|false|A filter to reduce results to a specific subset. This field is useful for getting statistics about conversations with specific properties.|
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
  "averageDuration": "string",
  "averageTurnCount": 0,
  "conversationCount": 0,
  "conversationCountTimeSeries": {
    "intervalDuration": "string",
    "points": [
      {
        "conversationCount": 0,
        "startTime": "string"
      }
    ]
  },
  "customHighlighterMatches": {
    "property1": 0,
    "property2": 0
  },
  "issueMatches": {
    "property1": 0,
    "property2": 0
  },
  "issueMatchesStats": {
    "property1": {
      "displayName": "string",
      "issue": "string",
      "labeledConversationsCount": "string"
    },
    "property2": {
      "displayName": "string",
      "issue": "string",
      "labeledConversationsCount": "string"
    }
  },
  "smartHighlighterMatches": {
    "property1": 0,
    "property2": 0
  }
}
```

<h3 id="contactcenterinsightsprojectslocationsconversationscalculatestats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudContactcenterinsightsV1CalculateStatsResponse](#schemagooglecloudcontactcenterinsightsv1calculatestatsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## contactcenterinsights.projects.locations.views.get

<a id="opIdcontactcenterinsights.projects.locations.views.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Gets a view.

<h3 id="contactcenterinsightsprojectslocationsviewsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the view to get.|
|view|query|string|false|The level of details of the conversation. Default is `FULL`.|
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
|view|CONVERSATION_VIEW_UNSPECIFIED|
|view|FULL|
|view|BASIC|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "createTime": "string",
  "displayName": "string",
  "name": "string",
  "updateTime": "string",
  "value": "string"
}
```

<h3 id="contactcenterinsightsprojectslocationsviewsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudContactcenterinsightsV1View](#schemagooglecloudcontactcenterinsightsv1view)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## contactcenterinsights.projects.locations.views.delete

<a id="opIdcontactcenterinsights.projects.locations.views.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Deletes a view.

<h3 id="contactcenterinsightsprojectslocationsviewsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the view to delete.|
|force|query|boolean|false|If set to true, all of this conversation's analyses will also be deleted. Otherwise, the request will only succeed if the conversation has no analyses.|
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

<h3 id="contactcenterinsightsprojectslocationsviewsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## contactcenterinsights.projects.locations.views.patch

<a id="opIdcontactcenterinsights.projects.locations.views.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "name": "string",
    "value": "string"
  }'
```

`PATCH /v1/{name}`

Updates a view.

> Body parameter

```json
{
  "displayName": "string",
  "name": "string",
  "value": "string"
}
```

<h3 id="contactcenterinsightsprojectslocationsviewspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Immutable. The resource name of the view. Format: projects/{project}/locations/{location}/views/{view}|
|updateMask|query|string|false|The list of fields to be updated.|
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
|body|body|[GoogleCloudContactcenterinsightsV1View](#schemagooglecloudcontactcenterinsightsv1view)|false|none|
|» displayName|body|string|false|The human-readable display name of the view.|
|» name|body|string|false|Immutable. The resource name of the view. Format: projects/{project}/locations/{location}/views/{view}|
|» value|body|string|false|String with specific view properties, must be non-empty.|

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
  "createTime": "string",
  "displayName": "string",
  "name": "string",
  "updateTime": "string",
  "value": "string"
}
```

<h3 id="contactcenterinsightsprojectslocationsviewspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudContactcenterinsightsV1View](#schemagooglecloudcontactcenterinsightsv1view)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## contactcenterinsights.projects.locations.operations.list

<a id="opIdcontactcenterinsights.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="contactcenterinsightsprojectslocationsoperationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation's parent resource.|
|filter|query|string|false|The standard list filter.|
|pageSize|query|integer|false|The standard list page size.|
|pageToken|query|string|false|The standard list page token.|
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
  "operations": [
    {
      "done": true,
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "response": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

<h3 id="contactcenterinsightsprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningListOperationsResponse](#schemagooglelongrunninglistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## contactcenterinsights.projects.locations.operations.cancel

<a id="opIdcontactcenterinsights.projects.locations.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/{name}:cancel`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

<h3 id="contactcenterinsightsprojectslocationsoperationscancel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource to be cancelled.|
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

<h3 id="contactcenterinsightsprojectslocationsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## contactcenterinsights.projects.locations.issueModels.deploy

<a id="opIdcontactcenterinsights.projects.locations.issueModels.deploy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:deploy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string"
  }'
```

`POST /v1/{name}:deploy`

Deploys an issue model. Returns an error if a model is already deployed. An issue model can only be used in analysis after it has been deployed.

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="contactcenterinsightsprojectslocationsissuemodelsdeploy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The issue model to deploy.|
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
|body|body|[GoogleCloudContactcenterinsightsV1DeployIssueModelRequest](#schemagooglecloudcontactcenterinsightsv1deployissuemodelrequest)|false|none|
|» name|body|string|false|Required. The issue model to deploy.|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="contactcenterinsightsprojectslocationsissuemodelsdeploy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## contactcenterinsights.projects.locations.issueModels.undeploy

<a id="opIdcontactcenterinsights.projects.locations.issueModels.undeploy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:undeploy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string"
  }'
```

`POST /v1/{name}:undeploy`

Undeploys an issue model. An issue model can not be used in analysis after it has been undeployed.

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="contactcenterinsightsprojectslocationsissuemodelsundeploy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The issue model to undeploy.|
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
|body|body|[GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest](#schemagooglecloudcontactcenterinsightsv1undeployissuemodelrequest)|false|none|
|» name|body|string|false|Required. The issue model to undeploy.|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="contactcenterinsightsprojectslocationsissuemodelsundeploy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## contactcenterinsights.projects.locations.conversations.analyses.list

<a id="opIdcontactcenterinsights.projects.locations.conversations.analyses.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/analyses \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/analyses`

Lists analyses.

<h3 id="contactcenterinsightsprojectslocationsconversationsanalyseslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the analyses.|
|filter|query|string|false|A filter to reduce results to a specific subset. Useful for querying conversations with specific properties.|
|pageSize|query|integer|false|The maximum number of analyses to return in the response. If this value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.|
|pageToken|query|string|false|The value returned by the last `ListAnalysesResponse`; indicates that this is a continuation of a prior `ListAnalyses` call and the system should return the next page of data.|
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
  "analyses": [
    {
      "analysisResult": {
        "callAnalysisMetadata": {
          "annotations": [
            {
              "annotationEndBoundary": {
                "transcriptIndex": 0,
                "wordIndex": 0
              },
              "annotationStartBoundary": {
                "transcriptIndex": 0,
                "wordIndex": 0
              },
              "channelTag": 0,
              "entityMentionData": {
                "entityUniqueId": "string",
                "sentiment": {
                  "magnitude": 0,
                  "score": 0
                },
                "type": "MENTION_TYPE_UNSPECIFIED"
              },
              "holdData": {},
              "intentMatchData": {
                "intentUniqueId": "string"
              },
              "interruptionData": {},
              "issueMatchData": {
                "issueAssignment": {
                  "displayName": "string",
                  "issue": "string",
                  "score": 0
                }
              },
              "phraseMatchData": {
                "displayName": "string",
                "phraseMatcher": "string"
              },
              "sentimentData": {
                "magnitude": 0,
                "score": 0
              },
              "silenceData": {}
            }
          ],
          "entities": {
            "property1": {
              "displayName": "string",
              "metadata": {
                "property1": "string",
                "property2": "string"
              },
              "salience": 0,
              "sentiment": {
                "magnitude": 0,
                "score": 0
              },
              "type": "TYPE_UNSPECIFIED"
            },
            "property2": {
              "displayName": "string",
              "metadata": {
                "property1": "string",
                "property2": "string"
              },
              "salience": 0,
              "sentiment": {
                "magnitude": 0,
                "score": 0
              },
              "type": "TYPE_UNSPECIFIED"
            }
          },
          "intents": {
            "property1": {
              "displayName": "string",
              "id": "string"
            },
            "property2": {
              "displayName": "string",
              "id": "string"
            }
          },
          "issueModelResult": {
            "issueModel": "string",
            "issues": [
              {
                "displayName": "string",
                "issue": "string",
                "score": 0
              }
            ]
          },
          "phraseMatchers": {
            "property1": {
              "displayName": "string",
              "phraseMatcher": "string"
            },
            "property2": {
              "displayName": "string",
              "phraseMatcher": "string"
            }
          },
          "sentiments": [
            {
              "channelTag": 0,
              "sentimentData": {
                "magnitude": 0,
                "score": 0
              }
            }
          ]
        },
        "endTime": "string"
      },
      "annotatorSelector": {
        "issueModels": [
          "string"
        ],
        "phraseMatchers": [
          "string"
        ],
        "runEntityAnnotator": true,
        "runIntentAnnotator": true,
        "runInterruptionAnnotator": true,
        "runIssueModelAnnotator": true,
        "runPhraseMatcherAnnotator": true,
        "runSentimentAnnotator": true,
        "runSilenceAnnotator": true
      },
      "createTime": "string",
      "name": "string",
      "requestTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="contactcenterinsightsprojectslocationsconversationsanalyseslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudContactcenterinsightsV1ListAnalysesResponse](#schemagooglecloudcontactcenterinsightsv1listanalysesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## contactcenterinsights.projects.locations.conversations.analyses.create

<a id="opIdcontactcenterinsights.projects.locations.conversations.analyses.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/analyses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "annotatorSelector": {
      "issueModels": [
        "string"
      ],
      "phraseMatchers": [
        "string"
      ],
      "runEntityAnnotator": true,
      "runIntentAnnotator": true,
      "runInterruptionAnnotator": true,
      "runIssueModelAnnotator": true,
      "runPhraseMatcherAnnotator": true,
      "runSentimentAnnotator": true,
      "runSilenceAnnotator": true
    },
    "name": "string"
  }'
```

`POST /v1/{parent}/analyses`

Creates an analysis. The long running operation is done when the analysis has completed.

> Body parameter

```json
{
  "annotatorSelector": {
    "issueModels": [
      "string"
    ],
    "phraseMatchers": [
      "string"
    ],
    "runEntityAnnotator": true,
    "runIntentAnnotator": true,
    "runInterruptionAnnotator": true,
    "runIssueModelAnnotator": true,
    "runPhraseMatcherAnnotator": true,
    "runSentimentAnnotator": true,
    "runSilenceAnnotator": true
  },
  "name": "string"
}
```

<h3 id="contactcenterinsightsprojectslocationsconversationsanalysescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the analysis.|
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
|body|body|[GoogleCloudContactcenterinsightsV1Analysis](#schemagooglecloudcontactcenterinsightsv1analysis)|false|none|
|» annotatorSelector|body|[GoogleCloudContactcenterinsightsV1AnnotatorSelector](#schemagooglecloudcontactcenterinsightsv1annotatorselector)|false|To select the annotators to run and the phrase matchers to use (if any). If not specified, all annotators will be run.|
|» name|body|string|false|Immutable. The resource name of the analysis. Format: projects/{project}/locations/{location}/conversations/{conversation}/analyses/{analysis}|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="contactcenterinsightsprojectslocationsconversationsanalysescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## contactcenterinsights.projects.locations.conversations.list

<a id="opIdcontactcenterinsights.projects.locations.conversations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/conversations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/conversations`

Lists conversations.

<h3 id="contactcenterinsightsprojectslocationsconversationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the conversation.|
|filter|query|string|false|A filter to reduce results to a specific subset. Useful for querying conversations with specific properties.|
|pageSize|query|integer|false|The maximum number of conversations to return in the response. A valid page size ranges from 0 to 1,000 inclusive. If the page size is zero or unspecified, a default page size of 100 will be chosen. Note that a call might return fewer results than the requested page size.|
|pageToken|query|string|false|The value returned by the last `ListConversationsResponse`. This value indicates that this is a continuation of a prior `ListConversations` call and that the system should return the next page of data.|
|view|query|string|false|The level of details of the conversation. Default is `BASIC`.|
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
|view|CONVERSATION_VIEW_UNSPECIFIED|
|view|FULL|
|view|BASIC|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "conversations": [
    {
      "agentId": "string",
      "callMetadata": {
        "agentChannel": 0,
        "customerChannel": 0
      },
      "createTime": "string",
      "dataSource": {
        "dialogflowSource": {
          "audioUri": "string",
          "dialogflowConversation": "string"
        },
        "gcsSource": {
          "audioUri": "string",
          "transcriptUri": "string"
        }
      },
      "dialogflowIntents": {
        "property1": {
          "displayName": "string"
        },
        "property2": {
          "displayName": "string"
        }
      },
      "duration": "string",
      "expireTime": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "languageCode": "string",
      "latestAnalysis": {
        "analysisResult": {
          "callAnalysisMetadata": {
            "annotations": [
              {
                "annotationEndBoundary": {
                  "transcriptIndex": 0,
                  "wordIndex": 0
                },
                "annotationStartBoundary": {
                  "transcriptIndex": 0,
                  "wordIndex": 0
                },
                "channelTag": 0,
                "entityMentionData": {
                  "entityUniqueId": "string",
                  "sentiment": {
                    "magnitude": 0,
                    "score": 0
                  },
                  "type": "MENTION_TYPE_UNSPECIFIED"
                },
                "holdData": {},
                "intentMatchData": {
                  "intentUniqueId": "string"
                },
                "interruptionData": {},
                "issueMatchData": {
                  "issueAssignment": {
                    "displayName": "string",
                    "issue": "string",
                    "score": 0
                  }
                },
                "phraseMatchData": {
                  "displayName": "string",
                  "phraseMatcher": "string"
                },
                "sentimentData": {
                  "magnitude": 0,
                  "score": 0
                },
                "silenceData": {}
              }
            ],
            "entities": {
              "property1": {
                "displayName": "string",
                "metadata": {
                  "property1": "string",
                  "property2": "string"
                },
                "salience": 0,
                "sentiment": {
                  "magnitude": 0,
                  "score": 0
                },
                "type": "TYPE_UNSPECIFIED"
              },
              "property2": {
                "displayName": "string",
                "metadata": {
                  "property1": "string",
                  "property2": "string"
                },
                "salience": 0,
                "sentiment": {
                  "magnitude": 0,
                  "score": 0
                },
                "type": "TYPE_UNSPECIFIED"
              }
            },
            "intents": {
              "property1": {
                "displayName": "string",
                "id": "string"
              },
              "property2": {
                "displayName": "string",
                "id": "string"
              }
            },
            "issueModelResult": {
              "issueModel": "string",
              "issues": [
                {
                  "displayName": "string",
                  "issue": "string",
                  "score": 0
                }
              ]
            },
            "phraseMatchers": {
              "property1": {
                "displayName": "string",
                "phraseMatcher": "string"
              },
              "property2": {
                "displayName": "string",
                "phraseMatcher": "string"
              }
            },
            "sentiments": [
              {
                "channelTag": 0,
                "sentimentData": {
                  "magnitude": 0,
                  "score": 0
                }
              }
            ]
          },
          "endTime": "string"
        },
        "annotatorSelector": {
          "issueModels": [
            "string"
          ],
          "phraseMatchers": [
            "string"
          ],
          "runEntityAnnotator": true,
          "runIntentAnnotator": true,
          "runInterruptionAnnotator": true,
          "runIssueModelAnnotator": true,
          "runPhraseMatcherAnnotator": true,
          "runSentimentAnnotator": true,
          "runSilenceAnnotator": true
        },
        "createTime": "string",
        "name": "string",
        "requestTime": "string"
      },
      "medium": "MEDIUM_UNSPECIFIED",
      "name": "string",
      "obfuscatedUserId": "string",
      "runtimeAnnotations": [
        {
          "annotationId": "string",
          "answerFeedback": {
            "clicked": true,
            "correctnessLevel": "CORRECTNESS_LEVEL_UNSPECIFIED",
            "displayed": true
          },
          "articleSuggestion": {
            "confidenceScore": 0,
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "queryRecord": "string",
            "source": "string",
            "title": "string",
            "uri": "string"
          },
          "createTime": "string",
          "dialogflowInteraction": {
            "confidence": 0,
            "dialogflowIntentId": "string"
          },
          "endBoundary": {
            "transcriptIndex": 0,
            "wordIndex": 0
          },
          "faqAnswer": {
            "answer": "string",
            "confidenceScore": 0,
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "queryRecord": "string",
            "question": "string",
            "source": "string"
          },
          "smartComposeSuggestion": {
            "confidenceScore": 0,
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "queryRecord": "string",
            "suggestion": "string"
          },
          "smartReply": {
            "confidenceScore": 0,
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "queryRecord": "string",
            "reply": "string"
          },
          "startBoundary": {
            "transcriptIndex": 0,
            "wordIndex": 0
          }
        }
      ],
      "startTime": "string",
      "transcript": {
        "transcriptSegments": [
          {
            "channelTag": 0,
            "confidence": 0,
            "dialogflowSegmentMetadata": {
              "smartReplyAllowlistCovered": true
            },
            "languageCode": "string",
            "messageTime": "string",
            "segmentParticipant": {
              "dialogflowParticipant": "string",
              "dialogflowParticipantName": "string",
              "obfuscatedExternalUserId": "string",
              "role": "ROLE_UNSPECIFIED",
              "userId": "string"
            },
            "sentiment": {
              "magnitude": 0,
              "score": 0
            },
            "text": "string",
            "words": [
              {
                "confidence": 0,
                "endOffset": "string",
                "startOffset": "string",
                "word": "string"
              }
            ]
          }
        ]
      },
      "ttl": "string",
      "turnCount": 0,
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="contactcenterinsightsprojectslocationsconversationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudContactcenterinsightsV1ListConversationsResponse](#schemagooglecloudcontactcenterinsightsv1listconversationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## contactcenterinsights.projects.locations.conversations.create

<a id="opIdcontactcenterinsights.projects.locations.conversations.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/conversations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "agentId": "string",
    "callMetadata": {
      "agentChannel": 0,
      "customerChannel": 0
    },
    "dataSource": {
      "dialogflowSource": {
        "audioUri": "string"
      },
      "gcsSource": {
        "audioUri": "string",
        "transcriptUri": "string"
      }
    },
    "expireTime": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "languageCode": "string",
    "medium": "MEDIUM_UNSPECIFIED",
    "name": "string",
    "obfuscatedUserId": "string",
    "startTime": "string",
    "ttl": "string"
  }'
```

`POST /v1/{parent}/conversations`

Creates a conversation.

> Body parameter

```json
{
  "agentId": "string",
  "callMetadata": {
    "agentChannel": 0,
    "customerChannel": 0
  },
  "dataSource": {
    "dialogflowSource": {
      "audioUri": "string"
    },
    "gcsSource": {
      "audioUri": "string",
      "transcriptUri": "string"
    }
  },
  "expireTime": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "languageCode": "string",
  "medium": "MEDIUM_UNSPECIFIED",
  "name": "string",
  "obfuscatedUserId": "string",
  "startTime": "string",
  "ttl": "string"
}
```

<h3 id="contactcenterinsightsprojectslocationsconversationscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the conversation.|
|conversationId|query|string|false|A unique ID for the new conversation. This ID will become the final component of the conversation's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z0-9-]{4,64}$`. Valid characters are `a-z-`|
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
|body|body|[GoogleCloudContactcenterinsightsV1Conversation](#schemagooglecloudcontactcenterinsightsv1conversation)|false|none|
|» agentId|body|string|false|An opaque, user-specified string representing the human agent who handled the conversation.|
|» callMetadata|body|[GoogleCloudContactcenterinsightsV1ConversationCallMetadata](#schemagooglecloudcontactcenterinsightsv1conversationcallmetadata)|false|Call-specific metadata.|
|» dataSource|body|[GoogleCloudContactcenterinsightsV1ConversationDataSource](#schemagooglecloudcontactcenterinsightsv1conversationdatasource)|false|The source of the audio and transcription for the conversation.|
|» expireTime|body|string(google-datetime)|false|The time at which this conversation should expire. After this time, the conversation data and any associated analyses will be deleted.|
|» labels|body|object|false|A map for the user to specify any custom fields. A maximum of 20 labels per conversation is allowed, with a maximum of 256 characters per entry.|
|» » **additionalProperties**|body|string|false|none|
|» languageCode|body|string|false|A user-specified language code for the conversation.|
|» medium|body|string|false|Immutable. The conversation medium, if unspecified will default to PHONE_CALL.|
|» name|body|string|false|Immutable. The resource name of the conversation. Format: projects/{project}/locations/{location}/conversations/{conversation}|
|» obfuscatedUserId|body|string|false|Obfuscated user ID which the customer sent to us.|
|» startTime|body|string(google-datetime)|false|The time at which the conversation started.|
|» ttl|body|string(google-duration)|false|Input only. The TTL for this resource. If specified, then this TTL will be used to calculate the expire time.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» medium|MEDIUM_UNSPECIFIED|
|» medium|PHONE_CALL|
|» medium|CHAT|

> Example responses

> 200 Response

```json
{
  "agentId": "string",
  "callMetadata": {
    "agentChannel": 0,
    "customerChannel": 0
  },
  "createTime": "string",
  "dataSource": {
    "dialogflowSource": {
      "audioUri": "string",
      "dialogflowConversation": "string"
    },
    "gcsSource": {
      "audioUri": "string",
      "transcriptUri": "string"
    }
  },
  "dialogflowIntents": {
    "property1": {
      "displayName": "string"
    },
    "property2": {
      "displayName": "string"
    }
  },
  "duration": "string",
  "expireTime": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "languageCode": "string",
  "latestAnalysis": {
    "analysisResult": {
      "callAnalysisMetadata": {
        "annotations": [
          {
            "annotationEndBoundary": {
              "transcriptIndex": 0,
              "wordIndex": 0
            },
            "annotationStartBoundary": {
              "transcriptIndex": 0,
              "wordIndex": 0
            },
            "channelTag": 0,
            "entityMentionData": {
              "entityUniqueId": "string",
              "sentiment": {
                "magnitude": 0,
                "score": 0
              },
              "type": "MENTION_TYPE_UNSPECIFIED"
            },
            "holdData": {},
            "intentMatchData": {
              "intentUniqueId": "string"
            },
            "interruptionData": {},
            "issueMatchData": {
              "issueAssignment": {
                "displayName": "string",
                "issue": "string",
                "score": 0
              }
            },
            "phraseMatchData": {
              "displayName": "string",
              "phraseMatcher": "string"
            },
            "sentimentData": {
              "magnitude": 0,
              "score": 0
            },
            "silenceData": {}
          }
        ],
        "entities": {
          "property1": {
            "displayName": "string",
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "salience": 0,
            "sentiment": {
              "magnitude": 0,
              "score": 0
            },
            "type": "TYPE_UNSPECIFIED"
          },
          "property2": {
            "displayName": "string",
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "salience": 0,
            "sentiment": {
              "magnitude": 0,
              "score": 0
            },
            "type": "TYPE_UNSPECIFIED"
          }
        },
        "intents": {
          "property1": {
            "displayName": "string",
            "id": "string"
          },
          "property2": {
            "displayName": "string",
            "id": "string"
          }
        },
        "issueModelResult": {
          "issueModel": "string",
          "issues": [
            {
              "displayName": "string",
              "issue": "string",
              "score": 0
            }
          ]
        },
        "phraseMatchers": {
          "property1": {
            "displayName": "string",
            "phraseMatcher": "string"
          },
          "property2": {
            "displayName": "string",
            "phraseMatcher": "string"
          }
        },
        "sentiments": [
          {
            "channelTag": 0,
            "sentimentData": {
              "magnitude": 0,
              "score": 0
            }
          }
        ]
      },
      "endTime": "string"
    },
    "annotatorSelector": {
      "issueModels": [
        "string"
      ],
      "phraseMatchers": [
        "string"
      ],
      "runEntityAnnotator": true,
      "runIntentAnnotator": true,
      "runInterruptionAnnotator": true,
      "runIssueModelAnnotator": true,
      "runPhraseMatcherAnnotator": true,
      "runSentimentAnnotator": true,
      "runSilenceAnnotator": true
    },
    "createTime": "string",
    "name": "string",
    "requestTime": "string"
  },
  "medium": "MEDIUM_UNSPECIFIED",
  "name": "string",
  "obfuscatedUserId": "string",
  "runtimeAnnotations": [
    {
      "annotationId": "string",
      "answerFeedback": {
        "clicked": true,
        "correctnessLevel": "CORRECTNESS_LEVEL_UNSPECIFIED",
        "displayed": true
      },
      "articleSuggestion": {
        "confidenceScore": 0,
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "queryRecord": "string",
        "source": "string",
        "title": "string",
        "uri": "string"
      },
      "createTime": "string",
      "dialogflowInteraction": {
        "confidence": 0,
        "dialogflowIntentId": "string"
      },
      "endBoundary": {
        "transcriptIndex": 0,
        "wordIndex": 0
      },
      "faqAnswer": {
        "answer": "string",
        "confidenceScore": 0,
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "queryRecord": "string",
        "question": "string",
        "source": "string"
      },
      "smartComposeSuggestion": {
        "confidenceScore": 0,
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "queryRecord": "string",
        "suggestion": "string"
      },
      "smartReply": {
        "confidenceScore": 0,
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "queryRecord": "string",
        "reply": "string"
      },
      "startBoundary": {
        "transcriptIndex": 0,
        "wordIndex": 0
      }
    }
  ],
  "startTime": "string",
  "transcript": {
    "transcriptSegments": [
      {
        "channelTag": 0,
        "confidence": 0,
        "dialogflowSegmentMetadata": {
          "smartReplyAllowlistCovered": true
        },
        "languageCode": "string",
        "messageTime": "string",
        "segmentParticipant": {
          "dialogflowParticipant": "string",
          "dialogflowParticipantName": "string",
          "obfuscatedExternalUserId": "string",
          "role": "ROLE_UNSPECIFIED",
          "userId": "string"
        },
        "sentiment": {
          "magnitude": 0,
          "score": 0
        },
        "text": "string",
        "words": [
          {
            "confidence": 0,
            "endOffset": "string",
            "startOffset": "string",
            "word": "string"
          }
        ]
      }
    ]
  },
  "ttl": "string",
  "turnCount": 0,
  "updateTime": "string"
}
```

<h3 id="contactcenterinsightsprojectslocationsconversationscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudContactcenterinsightsV1Conversation](#schemagooglecloudcontactcenterinsightsv1conversation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## contactcenterinsights.projects.locations.conversations.bulkAnalyze

<a id="opIdcontactcenterinsights.projects.locations.conversations.bulkAnalyze"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/conversations:bulkAnalyze \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "analysisPercentage": 0,
    "annotatorSelector": {
      "issueModels": [
        "string"
      ],
      "phraseMatchers": [
        "string"
      ],
      "runEntityAnnotator": true,
      "runIntentAnnotator": true,
      "runInterruptionAnnotator": true,
      "runIssueModelAnnotator": true,
      "runPhraseMatcherAnnotator": true,
      "runSentimentAnnotator": true,
      "runSilenceAnnotator": true
    },
    "filter": "string",
    "parent": "string"
  }'
```

`POST /v1/{parent}/conversations:bulkAnalyze`

Analyzes multiple conversations in a single request.

> Body parameter

```json
{
  "analysisPercentage": 0,
  "annotatorSelector": {
    "issueModels": [
      "string"
    ],
    "phraseMatchers": [
      "string"
    ],
    "runEntityAnnotator": true,
    "runIntentAnnotator": true,
    "runInterruptionAnnotator": true,
    "runIssueModelAnnotator": true,
    "runPhraseMatcherAnnotator": true,
    "runSentimentAnnotator": true,
    "runSilenceAnnotator": true
  },
  "filter": "string",
  "parent": "string"
}
```

<h3 id="contactcenterinsightsprojectslocationsconversationsbulkanalyze-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource to create analyses in.|
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
|body|body|[GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest](#schemagooglecloudcontactcenterinsightsv1bulkanalyzeconversationsrequest)|false|none|
|» analysisPercentage|body|number(float)|false|Required. Percentage of selected conversation to analyze, between [0, 100].|
|» annotatorSelector|body|[GoogleCloudContactcenterinsightsV1AnnotatorSelector](#schemagooglecloudcontactcenterinsightsv1annotatorselector)|false|To select the annotators to run and the phrase matchers to use (if any). If not specified, all annotators will be run.|
|» filter|body|string|false|Required. Filter used to select the subset of conversations to analyze.|
|» parent|body|string|false|Required. The parent resource to create analyses in.|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="contactcenterinsightsprojectslocationsconversationsbulkanalyze-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## contactcenterinsights.projects.locations.conversations.ingest

<a id="opIdcontactcenterinsights.projects.locations.conversations.ingest"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/conversations:ingest \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "conversationConfig": {
      "agentId": "string"
    },
    "gcsSource": {
      "bucketUri": "string"
    },
    "parent": "string",
    "transcriptObjectConfig": {
      "medium": "MEDIUM_UNSPECIFIED"
    }
  }'
```

`POST /v1/{parent}/conversations:ingest`

Imports conversations and processes them according to the user's configuration.

> Body parameter

```json
{
  "conversationConfig": {
    "agentId": "string"
  },
  "gcsSource": {
    "bucketUri": "string"
  },
  "parent": "string",
  "transcriptObjectConfig": {
    "medium": "MEDIUM_UNSPECIFIED"
  }
}
```

<h3 id="contactcenterinsightsprojectslocationsconversationsingest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource for new conversations.|
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
|body|body|[GoogleCloudContactcenterinsightsV1IngestConversationsRequest](#schemagooglecloudcontactcenterinsightsv1ingestconversationsrequest)|false|none|
|» conversationConfig|body|[GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfig](#schemagooglecloudcontactcenterinsightsv1ingestconversationsrequestconversationconfig)|false|Configuration that applies to all conversations.|
|» gcsSource|body|[GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource](#schemagooglecloudcontactcenterinsightsv1ingestconversationsrequestgcssource)|false|A cloud storage bucket source.|
|» parent|body|string|false|Required. The parent resource for new conversations.|
|» transcriptObjectConfig|body|[GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig](#schemagooglecloudcontactcenterinsightsv1ingestconversationsrequesttranscriptobjectconfig)|false|Configuration for when `source` contains conversation transcripts.|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="contactcenterinsightsprojectslocationsconversationsingest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## contactcenterinsights.projects.locations.conversations.upload

<a id="opIdcontactcenterinsights.projects.locations.conversations.upload"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/conversations:upload \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "conversation": {
      "agentId": "string",
      "callMetadata": {
        "agentChannel": 0,
        "customerChannel": 0
      },
      "dataSource": {
        "dialogflowSource": {
          "audioUri": "string"
        },
        "gcsSource": {
          "audioUri": "string",
          "transcriptUri": "string"
        }
      },
      "expireTime": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "languageCode": "string",
      "medium": "MEDIUM_UNSPECIFIED",
      "name": "string",
      "obfuscatedUserId": "string",
      "startTime": "string",
      "ttl": "string"
    },
    "conversationId": "string",
    "parent": "string",
    "redactionConfig": {
      "deidentifyTemplate": "string",
      "inspectTemplate": "string"
    }
  }'
```

`POST /v1/{parent}/conversations:upload`

Create a longrunning conversation upload operation. This method differs from CreateConversation by allowing audio transcription and optional DLP redaction.

> Body parameter

```json
{
  "conversation": {
    "agentId": "string",
    "callMetadata": {
      "agentChannel": 0,
      "customerChannel": 0
    },
    "dataSource": {
      "dialogflowSource": {
        "audioUri": "string"
      },
      "gcsSource": {
        "audioUri": "string",
        "transcriptUri": "string"
      }
    },
    "expireTime": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "languageCode": "string",
    "medium": "MEDIUM_UNSPECIFIED",
    "name": "string",
    "obfuscatedUserId": "string",
    "startTime": "string",
    "ttl": "string"
  },
  "conversationId": "string",
  "parent": "string",
  "redactionConfig": {
    "deidentifyTemplate": "string",
    "inspectTemplate": "string"
  }
}
```

<h3 id="contactcenterinsightsprojectslocationsconversationsupload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the conversation.|
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
|body|body|[GoogleCloudContactcenterinsightsV1UploadConversationRequest](#schemagooglecloudcontactcenterinsightsv1uploadconversationrequest)|false|none|
|» conversation|body|[GoogleCloudContactcenterinsightsV1Conversation](#schemagooglecloudcontactcenterinsightsv1conversation)|false|Required. The conversation resource to create.|
|» conversationId|body|string|false|Optional. A unique ID for the new conversation. This ID will become the final component of the conversation's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z0-9-]{4,64}$`. Valid characters are `a-z-`|
|» parent|body|string|false|Required. The parent resource of the conversation.|
|» redactionConfig|body|[GoogleCloudContactcenterinsightsV1RedactionConfig](#schemagooglecloudcontactcenterinsightsv1redactionconfig)|false|Optional. DLP settings for transcript redaction. Optional, will default to the config specified in Settings.|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="contactcenterinsightsprojectslocationsconversationsupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## contactcenterinsights.projects.locations.insightsdata.export

<a id="opIdcontactcenterinsights.projects.locations.insightsdata.export"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/insightsdata:export \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bigQueryDestination": {
      "dataset": "string",
      "projectId": "string",
      "table": "string"
    },
    "filter": "string",
    "kmsKey": "string",
    "parent": "string",
    "writeDisposition": "WRITE_DISPOSITION_UNSPECIFIED"
  }'
```

`POST /v1/{parent}/insightsdata:export`

Export insights data to a destination defined in the request body.

> Body parameter

```json
{
  "bigQueryDestination": {
    "dataset": "string",
    "projectId": "string",
    "table": "string"
  },
  "filter": "string",
  "kmsKey": "string",
  "parent": "string",
  "writeDisposition": "WRITE_DISPOSITION_UNSPECIFIED"
}
```

<h3 id="contactcenterinsightsprojectslocationsinsightsdataexport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource to export data from.|
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
|body|body|[GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest](#schemagooglecloudcontactcenterinsightsv1exportinsightsdatarequest)|false|none|
|» bigQueryDestination|body|[GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination](#schemagooglecloudcontactcenterinsightsv1exportinsightsdatarequestbigquerydestination)|false|Specified if sink is a BigQuery table.|
|» filter|body|string|false|A filter to reduce results to a specific subset. Useful for exporting conversations with specific properties.|
|» kmsKey|body|string|false|A fully qualified KMS key name for BigQuery tables protected by CMEK. Format: projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}/cryptoKeyVersions/{version}|
|» parent|body|string|false|Required. The parent resource to export data from.|
|» writeDisposition|body|string|false|Options for what to do if the destination table already exists.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» writeDisposition|WRITE_DISPOSITION_UNSPECIFIED|
|» writeDisposition|WRITE_TRUNCATE|
|» writeDisposition|WRITE_APPEND|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="contactcenterinsightsprojectslocationsinsightsdataexport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## contactcenterinsights.projects.locations.issueModels.list

<a id="opIdcontactcenterinsights.projects.locations.issueModels.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/issueModels \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/issueModels`

Lists issue models.

<h3 id="contactcenterinsightsprojectslocationsissuemodelslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the issue model.|
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
  "issueModels": [
    {
      "createTime": "string",
      "displayName": "string",
      "inputDataConfig": {
        "filter": "string",
        "medium": "MEDIUM_UNSPECIFIED",
        "trainingConversationsCount": "string"
      },
      "issueCount": "string",
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "trainingStats": {
        "analyzedConversationsCount": "string",
        "issueStats": {
          "property1": {
            "displayName": "string",
            "issue": "string",
            "labeledConversationsCount": "string"
          },
          "property2": {
            "displayName": "string",
            "issue": "string",
            "labeledConversationsCount": "string"
          }
        },
        "unclassifiedConversationsCount": "string"
      },
      "updateTime": "string"
    }
  ]
}
```

<h3 id="contactcenterinsightsprojectslocationsissuemodelslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudContactcenterinsightsV1ListIssueModelsResponse](#schemagooglecloudcontactcenterinsightsv1listissuemodelsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## contactcenterinsights.projects.locations.issueModels.create

<a id="opIdcontactcenterinsights.projects.locations.issueModels.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/issueModels \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "inputDataConfig": {
      "filter": "string",
      "medium": "MEDIUM_UNSPECIFIED"
    },
    "name": "string"
  }'
```

`POST /v1/{parent}/issueModels`

Creates an issue model.

> Body parameter

```json
{
  "displayName": "string",
  "inputDataConfig": {
    "filter": "string",
    "medium": "MEDIUM_UNSPECIFIED"
  },
  "name": "string"
}
```

<h3 id="contactcenterinsightsprojectslocationsissuemodelscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the issue model.|
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
|body|body|[GoogleCloudContactcenterinsightsV1IssueModel](#schemagooglecloudcontactcenterinsightsv1issuemodel)|false|none|
|» displayName|body|string|false|The representative name for the issue model.|
|» inputDataConfig|body|[GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig](#schemagooglecloudcontactcenterinsightsv1issuemodelinputdataconfig)|false|Configs for the input data that used to create the issue model.|
|» name|body|string|false|Immutable. The resource name of the issue model. Format: projects/{project}/locations/{location}/issueModels/{issue_model}|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="contactcenterinsightsprojectslocationsissuemodelscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## contactcenterinsights.projects.locations.issueModels.issues.list

<a id="opIdcontactcenterinsights.projects.locations.issueModels.issues.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/issues \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/issues`

Lists issues.

<h3 id="contactcenterinsightsprojectslocationsissuemodelsissueslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the issue.|
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
  "issues": [
    {
      "createTime": "string",
      "displayName": "string",
      "name": "string",
      "sampleUtterances": [
        "string"
      ],
      "updateTime": "string"
    }
  ]
}
```

<h3 id="contactcenterinsightsprojectslocationsissuemodelsissueslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudContactcenterinsightsV1ListIssuesResponse](#schemagooglecloudcontactcenterinsightsv1listissuesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## contactcenterinsights.projects.locations.phraseMatchers.list

<a id="opIdcontactcenterinsights.projects.locations.phraseMatchers.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/phraseMatchers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/phraseMatchers`

Lists phrase matchers.

<h3 id="contactcenterinsightsprojectslocationsphrasematcherslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the phrase matcher.|
|filter|query|string|false|A filter to reduce results to a specific subset. Useful for querying phrase matchers with specific properties.|
|pageSize|query|integer|false|The maximum number of phrase matchers to return in the response. If this value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.|
|pageToken|query|string|false|The value returned by the last `ListPhraseMatchersResponse`. This value indicates that this is a continuation of a prior `ListPhraseMatchers` call and that the system should return the next page of data.|
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
  "phraseMatchers": [
    {
      "activationUpdateTime": "string",
      "active": true,
      "displayName": "string",
      "name": "string",
      "phraseMatchRuleGroups": [
        {
          "phraseMatchRules": [
            {
              "config": {
                "exactMatchConfig": {
                  "caseSensitive": true
                }
              },
              "negated": true,
              "query": "string"
            }
          ],
          "type": "PHRASE_MATCH_RULE_GROUP_TYPE_UNSPECIFIED"
        }
      ],
      "revisionCreateTime": "string",
      "revisionId": "string",
      "roleMatch": "ROLE_UNSPECIFIED",
      "type": "PHRASE_MATCHER_TYPE_UNSPECIFIED",
      "updateTime": "string",
      "versionTag": "string"
    }
  ]
}
```

<h3 id="contactcenterinsightsprojectslocationsphrasematcherslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse](#schemagooglecloudcontactcenterinsightsv1listphrasematchersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## contactcenterinsights.projects.locations.phraseMatchers.create

<a id="opIdcontactcenterinsights.projects.locations.phraseMatchers.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/phraseMatchers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "active": true,
    "displayName": "string",
    "name": "string",
    "phraseMatchRuleGroups": [
      {
        "phraseMatchRules": [
          {
            "config": {
              "exactMatchConfig": {
                "caseSensitive": true
              }
            },
            "negated": true,
            "query": "string"
          }
        ],
        "type": "PHRASE_MATCH_RULE_GROUP_TYPE_UNSPECIFIED"
      }
    ],
    "roleMatch": "ROLE_UNSPECIFIED",
    "type": "PHRASE_MATCHER_TYPE_UNSPECIFIED",
    "versionTag": "string"
  }'
```

`POST /v1/{parent}/phraseMatchers`

Creates a phrase matcher.

> Body parameter

```json
{
  "active": true,
  "displayName": "string",
  "name": "string",
  "phraseMatchRuleGroups": [
    {
      "phraseMatchRules": [
        {
          "config": {
            "exactMatchConfig": {
              "caseSensitive": true
            }
          },
          "negated": true,
          "query": "string"
        }
      ],
      "type": "PHRASE_MATCH_RULE_GROUP_TYPE_UNSPECIFIED"
    }
  ],
  "roleMatch": "ROLE_UNSPECIFIED",
  "type": "PHRASE_MATCHER_TYPE_UNSPECIFIED",
  "versionTag": "string"
}
```

<h3 id="contactcenterinsightsprojectslocationsphrasematcherscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the phrase matcher. Required. The location to create a phrase matcher for. Format: `projects//locations/` or `projects//locations/`|
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
|body|body|[GoogleCloudContactcenterinsightsV1PhraseMatcher](#schemagooglecloudcontactcenterinsightsv1phrasematcher)|false|none|
|» active|body|boolean|false|Applies the phrase matcher only when it is active.|
|» displayName|body|string|false|The human-readable name of the phrase matcher.|
|» name|body|string|false|The resource name of the phrase matcher. Format: projects/{project}/locations/{location}/phraseMatchers/{phrase_matcher}|
|» phraseMatchRuleGroups|body|[[GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup](#schemagooglecloudcontactcenterinsightsv1phrasematchrulegroup)]|false|A list of phase match rule groups that are included in this matcher.|
|» roleMatch|body|string|false|The role whose utterances the phrase matcher should be matched against. If the role is ROLE_UNSPECIFIED it will be matched against any utterances in the transcript.|
|» type|body|string|false|Required. The type of this phrase matcher.|
|» versionTag|body|string|false|The customized version tag to use for the phrase matcher. If not specified, it will default to `revision_id`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» roleMatch|ROLE_UNSPECIFIED|
|» roleMatch|HUMAN_AGENT|
|» roleMatch|AUTOMATED_AGENT|
|» roleMatch|END_USER|
|» roleMatch|ANY_AGENT|
|» type|PHRASE_MATCHER_TYPE_UNSPECIFIED|
|» type|ALL_OF|
|» type|ANY_OF|

> Example responses

> 200 Response

```json
{
  "activationUpdateTime": "string",
  "active": true,
  "displayName": "string",
  "name": "string",
  "phraseMatchRuleGroups": [
    {
      "phraseMatchRules": [
        {
          "config": {
            "exactMatchConfig": {
              "caseSensitive": true
            }
          },
          "negated": true,
          "query": "string"
        }
      ],
      "type": "PHRASE_MATCH_RULE_GROUP_TYPE_UNSPECIFIED"
    }
  ],
  "revisionCreateTime": "string",
  "revisionId": "string",
  "roleMatch": "ROLE_UNSPECIFIED",
  "type": "PHRASE_MATCHER_TYPE_UNSPECIFIED",
  "updateTime": "string",
  "versionTag": "string"
}
```

<h3 id="contactcenterinsightsprojectslocationsphrasematcherscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudContactcenterinsightsV1PhraseMatcher](#schemagooglecloudcontactcenterinsightsv1phrasematcher)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## contactcenterinsights.projects.locations.views.list

<a id="opIdcontactcenterinsights.projects.locations.views.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/views \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/views`

Lists views.

<h3 id="contactcenterinsightsprojectslocationsviewslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the views.|
|pageSize|query|integer|false|The maximum number of views to return in the response. If this value is zero, the service will select a default size. A call may return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.|
|pageToken|query|string|false|The value returned by the last `ListViewsResponse`; indicates that this is a continuation of a prior `ListViews` call and the system should return the next page of data.|
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
  "views": [
    {
      "createTime": "string",
      "displayName": "string",
      "name": "string",
      "updateTime": "string",
      "value": "string"
    }
  ]
}
```

<h3 id="contactcenterinsightsprojectslocationsviewslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudContactcenterinsightsV1ListViewsResponse](#schemagooglecloudcontactcenterinsightsv1listviewsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## contactcenterinsights.projects.locations.views.create

<a id="opIdcontactcenterinsights.projects.locations.views.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/views \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "name": "string",
    "value": "string"
  }'
```

`POST /v1/{parent}/views`

Creates a view.

> Body parameter

```json
{
  "displayName": "string",
  "name": "string",
  "value": "string"
}
```

<h3 id="contactcenterinsightsprojectslocationsviewscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the view. Required. The location to create a view for. Format: `projects//locations/` or `projects//locations/`|
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
|body|body|[GoogleCloudContactcenterinsightsV1View](#schemagooglecloudcontactcenterinsightsv1view)|false|none|
|» displayName|body|string|false|The human-readable display name of the view.|
|» name|body|string|false|Immutable. The resource name of the view. Format: projects/{project}/locations/{location}/views/{view}|
|» value|body|string|false|String with specific view properties, must be non-empty.|

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
  "createTime": "string",
  "displayName": "string",
  "name": "string",
  "updateTime": "string",
  "value": "string"
}
```

<h3 id="contactcenterinsightsprojectslocationsviewscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudContactcenterinsightsV1View](#schemagooglecloudcontactcenterinsightsv1view)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_GoogleCloudContactcenterinsightsV1Analysis">GoogleCloudContactcenterinsightsV1Analysis</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1analysis"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1Analysis"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1analysis"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1analysis"></a>

```json
{
  "analysisResult": {
    "callAnalysisMetadata": {
      "annotations": [
        {
          "annotationEndBoundary": {
            "transcriptIndex": 0,
            "wordIndex": 0
          },
          "annotationStartBoundary": {
            "transcriptIndex": 0,
            "wordIndex": 0
          },
          "channelTag": 0,
          "entityMentionData": {
            "entityUniqueId": "string",
            "sentiment": {
              "magnitude": 0,
              "score": 0
            },
            "type": "MENTION_TYPE_UNSPECIFIED"
          },
          "holdData": {},
          "intentMatchData": {
            "intentUniqueId": "string"
          },
          "interruptionData": {},
          "issueMatchData": {
            "issueAssignment": {
              "displayName": "string",
              "issue": "string",
              "score": 0
            }
          },
          "phraseMatchData": {
            "displayName": "string",
            "phraseMatcher": "string"
          },
          "sentimentData": {
            "magnitude": 0,
            "score": 0
          },
          "silenceData": {}
        }
      ],
      "entities": {
        "property1": {
          "displayName": "string",
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "salience": 0,
          "sentiment": {
            "magnitude": 0,
            "score": 0
          },
          "type": "TYPE_UNSPECIFIED"
        },
        "property2": {
          "displayName": "string",
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "salience": 0,
          "sentiment": {
            "magnitude": 0,
            "score": 0
          },
          "type": "TYPE_UNSPECIFIED"
        }
      },
      "intents": {
        "property1": {
          "displayName": "string",
          "id": "string"
        },
        "property2": {
          "displayName": "string",
          "id": "string"
        }
      },
      "issueModelResult": {
        "issueModel": "string",
        "issues": [
          {
            "displayName": "string",
            "issue": "string",
            "score": 0
          }
        ]
      },
      "phraseMatchers": {
        "property1": {
          "displayName": "string",
          "phraseMatcher": "string"
        },
        "property2": {
          "displayName": "string",
          "phraseMatcher": "string"
        }
      },
      "sentiments": [
        {
          "channelTag": 0,
          "sentimentData": {
            "magnitude": 0,
            "score": 0
          }
        }
      ]
    },
    "endTime": "string"
  },
  "annotatorSelector": {
    "issueModels": [
      "string"
    ],
    "phraseMatchers": [
      "string"
    ],
    "runEntityAnnotator": true,
    "runIntentAnnotator": true,
    "runInterruptionAnnotator": true,
    "runIssueModelAnnotator": true,
    "runPhraseMatcherAnnotator": true,
    "runSentimentAnnotator": true,
    "runSilenceAnnotator": true
  },
  "createTime": "string",
  "name": "string",
  "requestTime": "string"
}
```

The analysis resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analysisResult|[GoogleCloudContactcenterinsightsV1AnalysisResult](#schemagooglecloudcontactcenterinsightsv1analysisresult)|false|none|Output only. The result of the analysis, which is populated when the analysis finishes.|
|annotatorSelector|[GoogleCloudContactcenterinsightsV1AnnotatorSelector](#schemagooglecloudcontactcenterinsightsv1annotatorselector)|false|none|To select the annotators to run and the phrase matchers to use (if any). If not specified, all annotators will be run.|
|createTime|string(google-datetime)|false|read-only|Output only. The time at which the analysis was created, which occurs when the long-running operation completes.|
|name|string|false|none|Immutable. The resource name of the analysis. Format: projects/{project}/locations/{location}/conversations/{conversation}/analyses/{analysis}|
|requestTime|string(google-datetime)|false|read-only|Output only. The time at which the analysis was requested.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1AnalysisResult">GoogleCloudContactcenterinsightsV1AnalysisResult</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1analysisresult"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1AnalysisResult"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1analysisresult"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1analysisresult"></a>

```json
{
  "callAnalysisMetadata": {
    "annotations": [
      {
        "annotationEndBoundary": {
          "transcriptIndex": 0,
          "wordIndex": 0
        },
        "annotationStartBoundary": {
          "transcriptIndex": 0,
          "wordIndex": 0
        },
        "channelTag": 0,
        "entityMentionData": {
          "entityUniqueId": "string",
          "sentiment": {
            "magnitude": 0,
            "score": 0
          },
          "type": "MENTION_TYPE_UNSPECIFIED"
        },
        "holdData": {},
        "intentMatchData": {
          "intentUniqueId": "string"
        },
        "interruptionData": {},
        "issueMatchData": {
          "issueAssignment": {
            "displayName": "string",
            "issue": "string",
            "score": 0
          }
        },
        "phraseMatchData": {
          "displayName": "string",
          "phraseMatcher": "string"
        },
        "sentimentData": {
          "magnitude": 0,
          "score": 0
        },
        "silenceData": {}
      }
    ],
    "entities": {
      "property1": {
        "displayName": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "salience": 0,
        "sentiment": {
          "magnitude": 0,
          "score": 0
        },
        "type": "TYPE_UNSPECIFIED"
      },
      "property2": {
        "displayName": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "salience": 0,
        "sentiment": {
          "magnitude": 0,
          "score": 0
        },
        "type": "TYPE_UNSPECIFIED"
      }
    },
    "intents": {
      "property1": {
        "displayName": "string",
        "id": "string"
      },
      "property2": {
        "displayName": "string",
        "id": "string"
      }
    },
    "issueModelResult": {
      "issueModel": "string",
      "issues": [
        {
          "displayName": "string",
          "issue": "string",
          "score": 0
        }
      ]
    },
    "phraseMatchers": {
      "property1": {
        "displayName": "string",
        "phraseMatcher": "string"
      },
      "property2": {
        "displayName": "string",
        "phraseMatcher": "string"
      }
    },
    "sentiments": [
      {
        "channelTag": 0,
        "sentimentData": {
          "magnitude": 0,
          "score": 0
        }
      }
    ]
  },
  "endTime": "string"
}
```

The result of an analysis.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callAnalysisMetadata|[GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata](#schemagooglecloudcontactcenterinsightsv1analysisresultcallanalysismetadata)|false|none|Call-specific metadata created by the analysis.|
|endTime|string(google-datetime)|false|none|The time at which the analysis ended.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata">GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1analysisresultcallanalysismetadata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1analysisresultcallanalysismetadata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1analysisresultcallanalysismetadata"></a>

```json
{
  "annotations": [
    {
      "annotationEndBoundary": {
        "transcriptIndex": 0,
        "wordIndex": 0
      },
      "annotationStartBoundary": {
        "transcriptIndex": 0,
        "wordIndex": 0
      },
      "channelTag": 0,
      "entityMentionData": {
        "entityUniqueId": "string",
        "sentiment": {
          "magnitude": 0,
          "score": 0
        },
        "type": "MENTION_TYPE_UNSPECIFIED"
      },
      "holdData": {},
      "intentMatchData": {
        "intentUniqueId": "string"
      },
      "interruptionData": {},
      "issueMatchData": {
        "issueAssignment": {
          "displayName": "string",
          "issue": "string",
          "score": 0
        }
      },
      "phraseMatchData": {
        "displayName": "string",
        "phraseMatcher": "string"
      },
      "sentimentData": {
        "magnitude": 0,
        "score": 0
      },
      "silenceData": {}
    }
  ],
  "entities": {
    "property1": {
      "displayName": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "salience": 0,
      "sentiment": {
        "magnitude": 0,
        "score": 0
      },
      "type": "TYPE_UNSPECIFIED"
    },
    "property2": {
      "displayName": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "salience": 0,
      "sentiment": {
        "magnitude": 0,
        "score": 0
      },
      "type": "TYPE_UNSPECIFIED"
    }
  },
  "intents": {
    "property1": {
      "displayName": "string",
      "id": "string"
    },
    "property2": {
      "displayName": "string",
      "id": "string"
    }
  },
  "issueModelResult": {
    "issueModel": "string",
    "issues": [
      {
        "displayName": "string",
        "issue": "string",
        "score": 0
      }
    ]
  },
  "phraseMatchers": {
    "property1": {
      "displayName": "string",
      "phraseMatcher": "string"
    },
    "property2": {
      "displayName": "string",
      "phraseMatcher": "string"
    }
  },
  "sentiments": [
    {
      "channelTag": 0,
      "sentimentData": {
        "magnitude": 0,
        "score": 0
      }
    }
  ]
}
```

Call-specific metadata created during analysis.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|[[GoogleCloudContactcenterinsightsV1CallAnnotation](#schemagooglecloudcontactcenterinsightsv1callannotation)]|false|none|A list of call annotations that apply to this call.|
|entities|object|false|none|All the entities in the call.|
|intents|object|false|none|All the matched intents in the call.|
|issueModelResult|[GoogleCloudContactcenterinsightsV1IssueModelResult](#schemagooglecloudcontactcenterinsightsv1issuemodelresult)|false|none|Overall conversation-level issue modeling result.|
|phraseMatchers|object|false|none|All the matched phrase matchers in the call.|
|sentiments|[[GoogleCloudContactcenterinsightsV1ConversationLevelSentiment](#schemagooglecloudcontactcenterinsightsv1conversationlevelsentiment)]|false|none|Overall conversation-level sentiment for each channel of the call.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1AnnotationBoundary">GoogleCloudContactcenterinsightsV1AnnotationBoundary</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1annotationboundary"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1AnnotationBoundary"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1annotationboundary"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1annotationboundary"></a>

```json
{
  "transcriptIndex": 0,
  "wordIndex": 0
}
```

A point in a conversation that marks the start or the end of an annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transcriptIndex|integer(int32)|false|none|The index in the sequence of transcribed pieces of the conversation where the boundary is located. This index starts at zero.|
|wordIndex|integer(int32)|false|none|The word index of this boundary with respect to the first word in the transcript piece. This index starts at zero.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1AnnotatorSelector">GoogleCloudContactcenterinsightsV1AnnotatorSelector</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1annotatorselector"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1AnnotatorSelector"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1annotatorselector"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1annotatorselector"></a>

```json
{
  "issueModels": [
    "string"
  ],
  "phraseMatchers": [
    "string"
  ],
  "runEntityAnnotator": true,
  "runIntentAnnotator": true,
  "runInterruptionAnnotator": true,
  "runIssueModelAnnotator": true,
  "runPhraseMatcherAnnotator": true,
  "runSentimentAnnotator": true,
  "runSilenceAnnotator": true
}
```

Selector of all available annotators and phrase matchers to run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issueModels|[string]|false|none|The issue model to run. If not provided, the most recently deployed topic model will be used. The provided issue model will only be used for inference if the issue model is deployed and if run_issue_model_annotator is set to true. If more than one issue model is provided, only the first provided issue model will be used for inference.|
|phraseMatchers|[string]|false|none|The list of phrase matchers to run. If not provided, all active phrase matchers will be used. If inactive phrase matchers are provided, they will not be used. Phrase matchers will be run only if run_phrase_matcher_annotator is set to true. Format: projects/{project}/locations/{location}/phraseMatchers/{phrase_matcher}|
|runEntityAnnotator|boolean|false|none|Whether to run the entity annotator.|
|runIntentAnnotator|boolean|false|none|Whether to run the intent annotator.|
|runInterruptionAnnotator|boolean|false|none|Whether to run the interruption annotator.|
|runIssueModelAnnotator|boolean|false|none|Whether to run the issue model annotator. A model should have already been deployed for this to take effect.|
|runPhraseMatcherAnnotator|boolean|false|none|Whether to run the active phrase matcher annotator(s).|
|runSentimentAnnotator|boolean|false|none|Whether to run the sentiment annotator.|
|runSilenceAnnotator|boolean|false|none|Whether to run the silence annotator.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1AnswerFeedback">GoogleCloudContactcenterinsightsV1AnswerFeedback</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1answerfeedback"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1AnswerFeedback"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1answerfeedback"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1answerfeedback"></a>

```json
{
  "clicked": true,
  "correctnessLevel": "CORRECTNESS_LEVEL_UNSPECIFIED",
  "displayed": true
}
```

The feedback that the customer has about a certain answer in the conversation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clicked|boolean|false|none|Indicates whether an answer or item was clicked by the human agent.|
|correctnessLevel|string|false|none|The correctness level of an answer.|
|displayed|boolean|false|none|Indicates whether an answer or item was displayed to the human agent in the agent desktop UI.|

#### Enumerated Values

|Property|Value|
|---|---|
|correctnessLevel|CORRECTNESS_LEVEL_UNSPECIFIED|
|correctnessLevel|NOT_CORRECT|
|correctnessLevel|PARTIALLY_CORRECT|
|correctnessLevel|FULLY_CORRECT|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1ArticleSuggestionData">GoogleCloudContactcenterinsightsV1ArticleSuggestionData</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1articlesuggestiondata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1ArticleSuggestionData"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1articlesuggestiondata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1articlesuggestiondata"></a>

```json
{
  "confidenceScore": 0,
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "queryRecord": "string",
  "source": "string",
  "title": "string",
  "uri": "string"
}
```

Agent Assist Article Suggestion data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidenceScore|number(float)|false|none|The system's confidence score that this article is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain).|
|metadata|object|false|none|Map that contains metadata about the Article Suggestion and the document that it originates from.|
|queryRecord|string|false|none|The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record}|
|source|string|false|none|The knowledge document that this answer was extracted from. Format: projects/{project}/knowledgeBases/{knowledge_base}/documents/{document}|
|title|string|false|none|Article title.|
|uri|string|false|none|Article URI.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsMetadata">GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1bulkanalyzeconversationsmetadata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsMetadata"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1bulkanalyzeconversationsmetadata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1bulkanalyzeconversationsmetadata"></a>

```json
{
  "completedAnalysesCount": 0,
  "createTime": "string",
  "endTime": "string",
  "failedAnalysesCount": 0,
  "request": {
    "analysisPercentage": 0,
    "annotatorSelector": {
      "issueModels": [
        "string"
      ],
      "phraseMatchers": [
        "string"
      ],
      "runEntityAnnotator": true,
      "runIntentAnnotator": true,
      "runInterruptionAnnotator": true,
      "runIssueModelAnnotator": true,
      "runPhraseMatcherAnnotator": true,
      "runSentimentAnnotator": true,
      "runSilenceAnnotator": true
    },
    "filter": "string",
    "parent": "string"
  },
  "totalRequestedAnalysesCount": 0
}
```

The metadata for a bulk analyze conversations operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAnalysesCount|integer(int32)|false|none|The number of requested analyses that have completed successfully so far.|
|createTime|string(google-datetime)|false|none|The time the operation was created.|
|endTime|string(google-datetime)|false|none|The time the operation finished running.|
|failedAnalysesCount|integer(int32)|false|none|The number of requested analyses that have failed so far.|
|request|[GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest](#schemagooglecloudcontactcenterinsightsv1bulkanalyzeconversationsrequest)|false|none|The original request for bulk analyze.|
|totalRequestedAnalysesCount|integer(int32)|false|none|Total number of analyses requested. Computed by the number of conversations returned by `filter` multiplied by `analysis_percentage` in the request.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest">GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1bulkanalyzeconversationsrequest"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1bulkanalyzeconversationsrequest"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1bulkanalyzeconversationsrequest"></a>

```json
{
  "analysisPercentage": 0,
  "annotatorSelector": {
    "issueModels": [
      "string"
    ],
    "phraseMatchers": [
      "string"
    ],
    "runEntityAnnotator": true,
    "runIntentAnnotator": true,
    "runInterruptionAnnotator": true,
    "runIssueModelAnnotator": true,
    "runPhraseMatcherAnnotator": true,
    "runSentimentAnnotator": true,
    "runSilenceAnnotator": true
  },
  "filter": "string",
  "parent": "string"
}
```

The request to analyze conversations in bulk.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analysisPercentage|number(float)|false|none|Required. Percentage of selected conversation to analyze, between [0, 100].|
|annotatorSelector|[GoogleCloudContactcenterinsightsV1AnnotatorSelector](#schemagooglecloudcontactcenterinsightsv1annotatorselector)|false|none|To select the annotators to run and the phrase matchers to use (if any). If not specified, all annotators will be run.|
|filter|string|false|none|Required. Filter used to select the subset of conversations to analyze.|
|parent|string|false|none|Required. The parent resource to create analyses in.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsResponse">GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1bulkanalyzeconversationsresponse"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsResponse"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1bulkanalyzeconversationsresponse"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1bulkanalyzeconversationsresponse"></a>

```json
{
  "failedAnalysisCount": 0,
  "successfulAnalysisCount": 0
}
```

The response for a bulk analyze conversations operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failedAnalysisCount|integer(int32)|false|none|Count of failed analyses.|
|successfulAnalysisCount|integer(int32)|false|none|Count of successful analyses.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse">GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1calculateissuemodelstatsresponse"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1calculateissuemodelstatsresponse"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1calculateissuemodelstatsresponse"></a>

```json
{
  "currentStats": {
    "analyzedConversationsCount": "string",
    "issueStats": {
      "property1": {
        "displayName": "string",
        "issue": "string",
        "labeledConversationsCount": "string"
      },
      "property2": {
        "displayName": "string",
        "issue": "string",
        "labeledConversationsCount": "string"
      }
    },
    "unclassifiedConversationsCount": "string"
  }
}
```

Response of querying an issue model's statistics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentStats|[GoogleCloudContactcenterinsightsV1IssueModelLabelStats](#schemagooglecloudcontactcenterinsightsv1issuemodellabelstats)|false|none|The latest label statistics for the queried issue model. Includes results on both training data and data labeled after deployment.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1CalculateStatsResponse">GoogleCloudContactcenterinsightsV1CalculateStatsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1calculatestatsresponse"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1CalculateStatsResponse"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1calculatestatsresponse"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1calculatestatsresponse"></a>

```json
{
  "averageDuration": "string",
  "averageTurnCount": 0,
  "conversationCount": 0,
  "conversationCountTimeSeries": {
    "intervalDuration": "string",
    "points": [
      {
        "conversationCount": 0,
        "startTime": "string"
      }
    ]
  },
  "customHighlighterMatches": {
    "property1": 0,
    "property2": 0
  },
  "issueMatches": {
    "property1": 0,
    "property2": 0
  },
  "issueMatchesStats": {
    "property1": {
      "displayName": "string",
      "issue": "string",
      "labeledConversationsCount": "string"
    },
    "property2": {
      "displayName": "string",
      "issue": "string",
      "labeledConversationsCount": "string"
    }
  },
  "smartHighlighterMatches": {
    "property1": 0,
    "property2": 0
  }
}
```

The response for calculating conversation statistics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|averageDuration|string(google-duration)|false|none|The average duration of all conversations. The average is calculated using only conversations that have a time duration.|
|averageTurnCount|integer(int32)|false|none|The average number of turns per conversation.|
|conversationCount|integer(int32)|false|none|The total number of conversations.|
|conversationCountTimeSeries|[GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries](#schemagooglecloudcontactcenterinsightsv1calculatestatsresponsetimeseries)|false|none|A time series representing the count of conversations created over time that match that requested filter criteria.|
|customHighlighterMatches|object|false|none|A map associating each custom highlighter resource name with its respective number of matches in the set of conversations.|
|issueMatches|object|false|none|A map associating each issue resource name with its respective number of matches in the set of conversations. Key has the format: `projects//locations//issueModels//issues/` Deprecated, use `issue_matches_stats` field instead.|
|issueMatchesStats|object|false|none|A map associating each issue resource name with its respective number of matches in the set of conversations. Key has the format: `projects//locations//issueModels//issues/`|
|smartHighlighterMatches|object|false|none|A map associating each smart highlighter display name with its respective number of matches in the set of conversations.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries">GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1calculatestatsresponsetimeseries"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1calculatestatsresponsetimeseries"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1calculatestatsresponsetimeseries"></a>

```json
{
  "intervalDuration": "string",
  "points": [
    {
      "conversationCount": 0,
      "startTime": "string"
    }
  ]
}
```

A time series representing conversations over time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|intervalDuration|string(google-duration)|false|none|The duration of each interval.|
|points|[[GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval](#schemagooglecloudcontactcenterinsightsv1calculatestatsresponsetimeseriesinterval)]|false|none|An ordered list of intervals from earliest to latest, where each interval represents the number of conversations that transpired during the time window.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval">GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1calculatestatsresponsetimeseriesinterval"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1calculatestatsresponsetimeseriesinterval"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1calculatestatsresponsetimeseriesinterval"></a>

```json
{
  "conversationCount": 0,
  "startTime": "string"
}
```

A single interval in a time series.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversationCount|integer(int32)|false|none|The number of conversations created in this interval.|
|startTime|string(google-datetime)|false|none|The start time of this interval.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1CallAnnotation">GoogleCloudContactcenterinsightsV1CallAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1callannotation"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1CallAnnotation"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1callannotation"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1callannotation"></a>

```json
{
  "annotationEndBoundary": {
    "transcriptIndex": 0,
    "wordIndex": 0
  },
  "annotationStartBoundary": {
    "transcriptIndex": 0,
    "wordIndex": 0
  },
  "channelTag": 0,
  "entityMentionData": {
    "entityUniqueId": "string",
    "sentiment": {
      "magnitude": 0,
      "score": 0
    },
    "type": "MENTION_TYPE_UNSPECIFIED"
  },
  "holdData": {},
  "intentMatchData": {
    "intentUniqueId": "string"
  },
  "interruptionData": {},
  "issueMatchData": {
    "issueAssignment": {
      "displayName": "string",
      "issue": "string",
      "score": 0
    }
  },
  "phraseMatchData": {
    "displayName": "string",
    "phraseMatcher": "string"
  },
  "sentimentData": {
    "magnitude": 0,
    "score": 0
  },
  "silenceData": {}
}
```

A piece of metadata that applies to a window of a call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationEndBoundary|[GoogleCloudContactcenterinsightsV1AnnotationBoundary](#schemagooglecloudcontactcenterinsightsv1annotationboundary)|false|none|The boundary in the conversation where the annotation ends, inclusive.|
|annotationStartBoundary|[GoogleCloudContactcenterinsightsV1AnnotationBoundary](#schemagooglecloudcontactcenterinsightsv1annotationboundary)|false|none|The boundary in the conversation where the annotation starts, inclusive.|
|channelTag|integer(int32)|false|none|The channel of the audio where the annotation occurs. For single-channel audio, this field is not populated.|
|entityMentionData|[GoogleCloudContactcenterinsightsV1EntityMentionData](#schemagooglecloudcontactcenterinsightsv1entitymentiondata)|false|none|Data specifying an entity mention.|
|holdData|[GoogleCloudContactcenterinsightsV1HoldData](#schemagooglecloudcontactcenterinsightsv1holddata)|false|none|Data specifying a hold.|
|intentMatchData|[GoogleCloudContactcenterinsightsV1IntentMatchData](#schemagooglecloudcontactcenterinsightsv1intentmatchdata)|false|none|Data specifying an intent match.|
|interruptionData|[GoogleCloudContactcenterinsightsV1InterruptionData](#schemagooglecloudcontactcenterinsightsv1interruptiondata)|false|none|Data specifying an interruption.|
|issueMatchData|[GoogleCloudContactcenterinsightsV1IssueMatchData](#schemagooglecloudcontactcenterinsightsv1issuematchdata)|false|none|Data specifying an issue match.|
|phraseMatchData|[GoogleCloudContactcenterinsightsV1PhraseMatchData](#schemagooglecloudcontactcenterinsightsv1phrasematchdata)|false|none|Data specifying a phrase match.|
|sentimentData|[GoogleCloudContactcenterinsightsV1SentimentData](#schemagooglecloudcontactcenterinsightsv1sentimentdata)|false|none|Data specifying sentiment.|
|silenceData|[GoogleCloudContactcenterinsightsV1SilenceData](#schemagooglecloudcontactcenterinsightsv1silencedata)|false|none|Data specifying silence.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1Conversation">GoogleCloudContactcenterinsightsV1Conversation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1conversation"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1Conversation"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1conversation"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1conversation"></a>

```json
{
  "agentId": "string",
  "callMetadata": {
    "agentChannel": 0,
    "customerChannel": 0
  },
  "createTime": "string",
  "dataSource": {
    "dialogflowSource": {
      "audioUri": "string",
      "dialogflowConversation": "string"
    },
    "gcsSource": {
      "audioUri": "string",
      "transcriptUri": "string"
    }
  },
  "dialogflowIntents": {
    "property1": {
      "displayName": "string"
    },
    "property2": {
      "displayName": "string"
    }
  },
  "duration": "string",
  "expireTime": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "languageCode": "string",
  "latestAnalysis": {
    "analysisResult": {
      "callAnalysisMetadata": {
        "annotations": [
          {
            "annotationEndBoundary": {
              "transcriptIndex": 0,
              "wordIndex": 0
            },
            "annotationStartBoundary": {
              "transcriptIndex": 0,
              "wordIndex": 0
            },
            "channelTag": 0,
            "entityMentionData": {
              "entityUniqueId": "string",
              "sentiment": {
                "magnitude": 0,
                "score": 0
              },
              "type": "MENTION_TYPE_UNSPECIFIED"
            },
            "holdData": {},
            "intentMatchData": {
              "intentUniqueId": "string"
            },
            "interruptionData": {},
            "issueMatchData": {
              "issueAssignment": {
                "displayName": "string",
                "issue": "string",
                "score": 0
              }
            },
            "phraseMatchData": {
              "displayName": "string",
              "phraseMatcher": "string"
            },
            "sentimentData": {
              "magnitude": 0,
              "score": 0
            },
            "silenceData": {}
          }
        ],
        "entities": {
          "property1": {
            "displayName": "string",
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "salience": 0,
            "sentiment": {
              "magnitude": 0,
              "score": 0
            },
            "type": "TYPE_UNSPECIFIED"
          },
          "property2": {
            "displayName": "string",
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "salience": 0,
            "sentiment": {
              "magnitude": 0,
              "score": 0
            },
            "type": "TYPE_UNSPECIFIED"
          }
        },
        "intents": {
          "property1": {
            "displayName": "string",
            "id": "string"
          },
          "property2": {
            "displayName": "string",
            "id": "string"
          }
        },
        "issueModelResult": {
          "issueModel": "string",
          "issues": [
            {
              "displayName": "string",
              "issue": "string",
              "score": 0
            }
          ]
        },
        "phraseMatchers": {
          "property1": {
            "displayName": "string",
            "phraseMatcher": "string"
          },
          "property2": {
            "displayName": "string",
            "phraseMatcher": "string"
          }
        },
        "sentiments": [
          {
            "channelTag": 0,
            "sentimentData": {
              "magnitude": 0,
              "score": 0
            }
          }
        ]
      },
      "endTime": "string"
    },
    "annotatorSelector": {
      "issueModels": [
        "string"
      ],
      "phraseMatchers": [
        "string"
      ],
      "runEntityAnnotator": true,
      "runIntentAnnotator": true,
      "runInterruptionAnnotator": true,
      "runIssueModelAnnotator": true,
      "runPhraseMatcherAnnotator": true,
      "runSentimentAnnotator": true,
      "runSilenceAnnotator": true
    },
    "createTime": "string",
    "name": "string",
    "requestTime": "string"
  },
  "medium": "MEDIUM_UNSPECIFIED",
  "name": "string",
  "obfuscatedUserId": "string",
  "runtimeAnnotations": [
    {
      "annotationId": "string",
      "answerFeedback": {
        "clicked": true,
        "correctnessLevel": "CORRECTNESS_LEVEL_UNSPECIFIED",
        "displayed": true
      },
      "articleSuggestion": {
        "confidenceScore": 0,
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "queryRecord": "string",
        "source": "string",
        "title": "string",
        "uri": "string"
      },
      "createTime": "string",
      "dialogflowInteraction": {
        "confidence": 0,
        "dialogflowIntentId": "string"
      },
      "endBoundary": {
        "transcriptIndex": 0,
        "wordIndex": 0
      },
      "faqAnswer": {
        "answer": "string",
        "confidenceScore": 0,
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "queryRecord": "string",
        "question": "string",
        "source": "string"
      },
      "smartComposeSuggestion": {
        "confidenceScore": 0,
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "queryRecord": "string",
        "suggestion": "string"
      },
      "smartReply": {
        "confidenceScore": 0,
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "queryRecord": "string",
        "reply": "string"
      },
      "startBoundary": {
        "transcriptIndex": 0,
        "wordIndex": 0
      }
    }
  ],
  "startTime": "string",
  "transcript": {
    "transcriptSegments": [
      {
        "channelTag": 0,
        "confidence": 0,
        "dialogflowSegmentMetadata": {
          "smartReplyAllowlistCovered": true
        },
        "languageCode": "string",
        "messageTime": "string",
        "segmentParticipant": {
          "dialogflowParticipant": "string",
          "dialogflowParticipantName": "string",
          "obfuscatedExternalUserId": "string",
          "role": "ROLE_UNSPECIFIED",
          "userId": "string"
        },
        "sentiment": {
          "magnitude": 0,
          "score": 0
        },
        "text": "string",
        "words": [
          {
            "confidence": 0,
            "endOffset": "string",
            "startOffset": "string",
            "word": "string"
          }
        ]
      }
    ]
  },
  "ttl": "string",
  "turnCount": 0,
  "updateTime": "string"
}
```

The conversation resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentId|string|false|none|An opaque, user-specified string representing the human agent who handled the conversation.|
|callMetadata|[GoogleCloudContactcenterinsightsV1ConversationCallMetadata](#schemagooglecloudcontactcenterinsightsv1conversationcallmetadata)|false|none|Call-specific metadata.|
|createTime|string(google-datetime)|false|read-only|Output only. The time at which the conversation was created.|
|dataSource|[GoogleCloudContactcenterinsightsV1ConversationDataSource](#schemagooglecloudcontactcenterinsightsv1conversationdatasource)|false|none|The source of the audio and transcription for the conversation.|
|dialogflowIntents|object|false|read-only|Output only. All the matched Dialogflow intents in the call. The key corresponds to a Dialogflow intent, format: projects/{project}/agent/{agent}/intents/{intent}|
|duration|string(google-duration)|false|read-only|Output only. The duration of the conversation.|
|expireTime|string(google-datetime)|false|none|The time at which this conversation should expire. After this time, the conversation data and any associated analyses will be deleted.|
|labels|object|false|none|A map for the user to specify any custom fields. A maximum of 20 labels per conversation is allowed, with a maximum of 256 characters per entry.|
|languageCode|string|false|none|A user-specified language code for the conversation.|
|latestAnalysis|[GoogleCloudContactcenterinsightsV1Analysis](#schemagooglecloudcontactcenterinsightsv1analysis)|false|none|Output only. The conversation's latest analysis, if one exists.|
|medium|string|false|none|Immutable. The conversation medium, if unspecified will default to PHONE_CALL.|
|name|string|false|none|Immutable. The resource name of the conversation. Format: projects/{project}/locations/{location}/conversations/{conversation}|
|obfuscatedUserId|string|false|none|Obfuscated user ID which the customer sent to us.|
|runtimeAnnotations|[[GoogleCloudContactcenterinsightsV1RuntimeAnnotation](#schemagooglecloudcontactcenterinsightsv1runtimeannotation)]|false|read-only|Output only. The annotations that were generated during the customer and agent interaction.|
|startTime|string(google-datetime)|false|none|The time at which the conversation started.|
|transcript|[GoogleCloudContactcenterinsightsV1ConversationTranscript](#schemagooglecloudcontactcenterinsightsv1conversationtranscript)|false|none|Output only. The conversation transcript.|
|ttl|string(google-duration)|false|none|Input only. The TTL for this resource. If specified, then this TTL will be used to calculate the expire time.|
|turnCount|integer(int32)|false|read-only|Output only. The number of turns in the conversation.|
|updateTime|string(google-datetime)|false|read-only|Output only. The most recent time at which the conversation was updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|medium|MEDIUM_UNSPECIFIED|
|medium|PHONE_CALL|
|medium|CHAT|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1ConversationCallMetadata">GoogleCloudContactcenterinsightsV1ConversationCallMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1conversationcallmetadata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1ConversationCallMetadata"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1conversationcallmetadata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1conversationcallmetadata"></a>

```json
{
  "agentChannel": 0,
  "customerChannel": 0
}
```

Call-specific metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentChannel|integer(int32)|false|none|The audio channel that contains the agent.|
|customerChannel|integer(int32)|false|none|The audio channel that contains the customer.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1ConversationDataSource">GoogleCloudContactcenterinsightsV1ConversationDataSource</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1conversationdatasource"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1ConversationDataSource"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1conversationdatasource"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1conversationdatasource"></a>

```json
{
  "dialogflowSource": {
    "audioUri": "string",
    "dialogflowConversation": "string"
  },
  "gcsSource": {
    "audioUri": "string",
    "transcriptUri": "string"
  }
}
```

The conversation source, which is a combination of transcript and audio.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dialogflowSource|[GoogleCloudContactcenterinsightsV1DialogflowSource](#schemagooglecloudcontactcenterinsightsv1dialogflowsource)|false|none|The source when the conversation comes from Dialogflow.|
|gcsSource|[GoogleCloudContactcenterinsightsV1GcsSource](#schemagooglecloudcontactcenterinsightsv1gcssource)|false|none|A Cloud Storage location specification for the audio and transcript.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1ConversationLevelSentiment">GoogleCloudContactcenterinsightsV1ConversationLevelSentiment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1conversationlevelsentiment"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1ConversationLevelSentiment"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1conversationlevelsentiment"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1conversationlevelsentiment"></a>

```json
{
  "channelTag": 0,
  "sentimentData": {
    "magnitude": 0,
    "score": 0
  }
}
```

One channel of conversation-level sentiment data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelTag|integer(int32)|false|none|The channel of the audio that the data applies to.|
|sentimentData|[GoogleCloudContactcenterinsightsV1SentimentData](#schemagooglecloudcontactcenterinsightsv1sentimentdata)|false|none|Data specifying sentiment.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1ConversationParticipant">GoogleCloudContactcenterinsightsV1ConversationParticipant</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1conversationparticipant"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1ConversationParticipant"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1conversationparticipant"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1conversationparticipant"></a>

```json
{
  "dialogflowParticipant": "string",
  "dialogflowParticipantName": "string",
  "obfuscatedExternalUserId": "string",
  "role": "ROLE_UNSPECIFIED",
  "userId": "string"
}
```

The call participant speaking for a given utterance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dialogflowParticipant|string|false|none|Deprecated. Use `dialogflow_participant_name` instead. The name of the Dialogflow participant. Format: projects/{project}/locations/{location}/conversations/{conversation}/participants/{participant}|
|dialogflowParticipantName|string|false|none|The name of the participant provided by Dialogflow. Format: projects/{project}/locations/{location}/conversations/{conversation}/participants/{participant}|
|obfuscatedExternalUserId|string|false|none|Obfuscated user ID from Dialogflow.|
|role|string|false|none|The role of the participant.|
|userId|string|false|none|A user-specified ID representing the participant.|

#### Enumerated Values

|Property|Value|
|---|---|
|role|ROLE_UNSPECIFIED|
|role|HUMAN_AGENT|
|role|AUTOMATED_AGENT|
|role|END_USER|
|role|ANY_AGENT|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1ConversationTranscript">GoogleCloudContactcenterinsightsV1ConversationTranscript</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1conversationtranscript"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1ConversationTranscript"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1conversationtranscript"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1conversationtranscript"></a>

```json
{
  "transcriptSegments": [
    {
      "channelTag": 0,
      "confidence": 0,
      "dialogflowSegmentMetadata": {
        "smartReplyAllowlistCovered": true
      },
      "languageCode": "string",
      "messageTime": "string",
      "segmentParticipant": {
        "dialogflowParticipant": "string",
        "dialogflowParticipantName": "string",
        "obfuscatedExternalUserId": "string",
        "role": "ROLE_UNSPECIFIED",
        "userId": "string"
      },
      "sentiment": {
        "magnitude": 0,
        "score": 0
      },
      "text": "string",
      "words": [
        {
          "confidence": 0,
          "endOffset": "string",
          "startOffset": "string",
          "word": "string"
        }
      ]
    }
  ]
}
```

A message representing the transcript of a conversation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transcriptSegments|[[GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment](#schemagooglecloudcontactcenterinsightsv1conversationtranscripttranscriptsegment)]|false|none|A list of sequential transcript segments that comprise the conversation.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment">GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1conversationtranscripttranscriptsegment"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1conversationtranscripttranscriptsegment"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1conversationtranscripttranscriptsegment"></a>

```json
{
  "channelTag": 0,
  "confidence": 0,
  "dialogflowSegmentMetadata": {
    "smartReplyAllowlistCovered": true
  },
  "languageCode": "string",
  "messageTime": "string",
  "segmentParticipant": {
    "dialogflowParticipant": "string",
    "dialogflowParticipantName": "string",
    "obfuscatedExternalUserId": "string",
    "role": "ROLE_UNSPECIFIED",
    "userId": "string"
  },
  "sentiment": {
    "magnitude": 0,
    "score": 0
  },
  "text": "string",
  "words": [
    {
      "confidence": 0,
      "endOffset": "string",
      "startOffset": "string",
      "word": "string"
    }
  ]
}
```

A segment of a full transcript.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelTag|integer(int32)|false|none|For conversations derived from multi-channel audio, this is the channel number corresponding to the audio from that channel. For audioChannelCount = N, its output values can range from '1' to 'N'. A channel tag of 0 indicates that the audio is mono.|
|confidence|number(float)|false|none|A confidence estimate between 0.0 and 1.0 of the fidelity of this segment. A default value of 0.0 indicates that the value is unset.|
|dialogflowSegmentMetadata|[GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata](#schemagooglecloudcontactcenterinsightsv1conversationtranscripttranscriptsegmentdialogflowsegmentmetadata)|false|none|CCAI metadata relating to the current transcript segment.|
|languageCode|string|false|none|The language code of this segment as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US".|
|messageTime|string(google-datetime)|false|none|The time that the message occurred, if provided.|
|segmentParticipant|[GoogleCloudContactcenterinsightsV1ConversationParticipant](#schemagooglecloudcontactcenterinsightsv1conversationparticipant)|false|none|The participant of this segment.|
|sentiment|[GoogleCloudContactcenterinsightsV1SentimentData](#schemagooglecloudcontactcenterinsightsv1sentimentdata)|false|none|The sentiment for this transcript segment.|
|text|string|false|none|The text of this segment.|
|words|[[GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo](#schemagooglecloudcontactcenterinsightsv1conversationtranscripttranscriptsegmentwordinfo)]|false|none|A list of the word-specific information for each word in the segment.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata">GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1conversationtranscripttranscriptsegmentdialogflowsegmentmetadata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1conversationtranscripttranscriptsegmentdialogflowsegmentmetadata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1conversationtranscripttranscriptsegmentdialogflowsegmentmetadata"></a>

```json
{
  "smartReplyAllowlistCovered": true
}
```

Metadata from Dialogflow relating to the current transcript segment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|smartReplyAllowlistCovered|boolean|false|none|Whether the transcript segment was covered under the configured smart reply allowlist in Agent Assist.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo">GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1conversationtranscripttranscriptsegmentwordinfo"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1conversationtranscripttranscriptsegmentwordinfo"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1conversationtranscripttranscriptsegmentwordinfo"></a>

```json
{
  "confidence": 0,
  "endOffset": "string",
  "startOffset": "string",
  "word": "string"
}
```

Word-level info for words in a transcript.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|A confidence estimate between 0.0 and 1.0 of the fidelity of this word. A default value of 0.0 indicates that the value is unset.|
|endOffset|string(google-duration)|false|none|Time offset of the end of this word relative to the beginning of the total conversation.|
|startOffset|string(google-duration)|false|none|Time offset of the start of this word relative to the beginning of the total conversation.|
|word|string|false|none|The word itself. Includes punctuation marks that surround the word.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1CreateAnalysisOperationMetadata">GoogleCloudContactcenterinsightsV1CreateAnalysisOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1createanalysisoperationmetadata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1CreateAnalysisOperationMetadata"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1createanalysisoperationmetadata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1createanalysisoperationmetadata"></a>

```json
{
  "annotatorSelector": {
    "issueModels": [
      "string"
    ],
    "phraseMatchers": [
      "string"
    ],
    "runEntityAnnotator": true,
    "runIntentAnnotator": true,
    "runInterruptionAnnotator": true,
    "runIssueModelAnnotator": true,
    "runPhraseMatcherAnnotator": true,
    "runSentimentAnnotator": true,
    "runSilenceAnnotator": true
  },
  "conversation": "string",
  "createTime": "string",
  "endTime": "string"
}
```

Metadata for a create analysis operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotatorSelector|[GoogleCloudContactcenterinsightsV1AnnotatorSelector](#schemagooglecloudcontactcenterinsightsv1annotatorselector)|false|none|Output only. The annotator selector used for the analysis (if any).|
|conversation|string|false|read-only|Output only. The Conversation that this Analysis Operation belongs to.|
|createTime|string(google-datetime)|false|read-only|Output only. The time the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. The time the operation finished running.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1CreateIssueModelMetadata">GoogleCloudContactcenterinsightsV1CreateIssueModelMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1createissuemodelmetadata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1CreateIssueModelMetadata"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1createissuemodelmetadata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1createissuemodelmetadata"></a>

```json
{
  "createTime": "string",
  "endTime": "string",
  "request": {
    "issueModel": {
      "createTime": "string",
      "displayName": "string",
      "inputDataConfig": {
        "filter": "string",
        "medium": "MEDIUM_UNSPECIFIED",
        "trainingConversationsCount": "string"
      },
      "issueCount": "string",
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "trainingStats": {
        "analyzedConversationsCount": "string",
        "issueStats": {
          "property1": {
            "displayName": "string",
            "issue": "string",
            "labeledConversationsCount": "string"
          },
          "property2": {
            "displayName": "string",
            "issue": "string",
            "labeledConversationsCount": "string"
          }
        },
        "unclassifiedConversationsCount": "string"
      },
      "updateTime": "string"
    },
    "parent": "string"
  }
}
```

Metadata for creating an issue model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. The time the operation finished running.|
|request|[GoogleCloudContactcenterinsightsV1CreateIssueModelRequest](#schemagooglecloudcontactcenterinsightsv1createissuemodelrequest)|false|none|The original request for creation.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1CreateIssueModelRequest">GoogleCloudContactcenterinsightsV1CreateIssueModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1createissuemodelrequest"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1CreateIssueModelRequest"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1createissuemodelrequest"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1createissuemodelrequest"></a>

```json
{
  "issueModel": {
    "createTime": "string",
    "displayName": "string",
    "inputDataConfig": {
      "filter": "string",
      "medium": "MEDIUM_UNSPECIFIED",
      "trainingConversationsCount": "string"
    },
    "issueCount": "string",
    "name": "string",
    "state": "STATE_UNSPECIFIED",
    "trainingStats": {
      "analyzedConversationsCount": "string",
      "issueStats": {
        "property1": {
          "displayName": "string",
          "issue": "string",
          "labeledConversationsCount": "string"
        },
        "property2": {
          "displayName": "string",
          "issue": "string",
          "labeledConversationsCount": "string"
        }
      },
      "unclassifiedConversationsCount": "string"
    },
    "updateTime": "string"
  },
  "parent": "string"
}
```

The request to create an issue model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issueModel|[GoogleCloudContactcenterinsightsV1IssueModel](#schemagooglecloudcontactcenterinsightsv1issuemodel)|false|none|Required. The issue model to create.|
|parent|string|false|none|Required. The parent resource of the issue model.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1DeleteIssueModelMetadata">GoogleCloudContactcenterinsightsV1DeleteIssueModelMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1deleteissuemodelmetadata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1DeleteIssueModelMetadata"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1deleteissuemodelmetadata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1deleteissuemodelmetadata"></a>

```json
{
  "createTime": "string",
  "endTime": "string",
  "request": {
    "name": "string"
  }
}
```

Metadata for deleting an issue model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. The time the operation finished running.|
|request|[GoogleCloudContactcenterinsightsV1DeleteIssueModelRequest](#schemagooglecloudcontactcenterinsightsv1deleteissuemodelrequest)|false|none|The original request for deletion.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1DeleteIssueModelRequest">GoogleCloudContactcenterinsightsV1DeleteIssueModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1deleteissuemodelrequest"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1DeleteIssueModelRequest"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1deleteissuemodelrequest"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1deleteissuemodelrequest"></a>

```json
{
  "name": "string"
}
```

The request to delete an issue model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Required. The name of the issue model to delete.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1DeployIssueModelMetadata">GoogleCloudContactcenterinsightsV1DeployIssueModelMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1deployissuemodelmetadata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1DeployIssueModelMetadata"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1deployissuemodelmetadata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1deployissuemodelmetadata"></a>

```json
{
  "createTime": "string",
  "endTime": "string",
  "request": {
    "name": "string"
  }
}
```

Metadata for deploying an issue model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. The time the operation finished running.|
|request|[GoogleCloudContactcenterinsightsV1DeployIssueModelRequest](#schemagooglecloudcontactcenterinsightsv1deployissuemodelrequest)|false|none|The original request for deployment.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1DeployIssueModelRequest">GoogleCloudContactcenterinsightsV1DeployIssueModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1deployissuemodelrequest"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1DeployIssueModelRequest"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1deployissuemodelrequest"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1deployissuemodelrequest"></a>

```json
{
  "name": "string"
}
```

The request to deploy an issue model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Required. The issue model to deploy.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1DeployIssueModelResponse">GoogleCloudContactcenterinsightsV1DeployIssueModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1deployissuemodelresponse"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1DeployIssueModelResponse"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1deployissuemodelresponse"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1deployissuemodelresponse"></a>

```json
{}
```

The response to deploy an issue model.

<h2 id="tocS_GoogleCloudContactcenterinsightsV1DialogflowIntent">GoogleCloudContactcenterinsightsV1DialogflowIntent</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1dialogflowintent"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1DialogflowIntent"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1dialogflowintent"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1dialogflowintent"></a>

```json
{
  "displayName": "string"
}
```

The data for a Dialogflow intent. Represents a detected intent in the conversation, e.g. MAKES_PROMISE.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The human-readable name of the intent.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1DialogflowInteractionData">GoogleCloudContactcenterinsightsV1DialogflowInteractionData</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1dialogflowinteractiondata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1DialogflowInteractionData"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1dialogflowinteractiondata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1dialogflowinteractiondata"></a>

```json
{
  "confidence": 0,
  "dialogflowIntentId": "string"
}
```

Dialogflow interaction data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|The confidence of the match ranging from 0.0 (completely uncertain) to 1.0 (completely certain).|
|dialogflowIntentId|string|false|none|The Dialogflow intent resource path. Format: projects/{project}/agent/{agent}/intents/{intent}|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1DialogflowSource">GoogleCloudContactcenterinsightsV1DialogflowSource</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1dialogflowsource"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1DialogflowSource"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1dialogflowsource"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1dialogflowsource"></a>

```json
{
  "audioUri": "string",
  "dialogflowConversation": "string"
}
```

A Dialogflow source of conversation data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audioUri|string|false|none|Cloud Storage URI that points to a file that contains the conversation audio.|
|dialogflowConversation|string|false|read-only|Output only. The name of the Dialogflow conversation that this conversation resource is derived from. Format: projects/{project}/locations/{location}/conversations/{conversation}|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1Entity">GoogleCloudContactcenterinsightsV1Entity</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1entity"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1Entity"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1entity"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1entity"></a>

```json
{
  "displayName": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "salience": 0,
  "sentiment": {
    "magnitude": 0,
    "score": 0
  },
  "type": "TYPE_UNSPECIFIED"
}
```

The data for an entity annotation. Represents a phrase in the conversation that is a known entity, such as a person, an organization, or location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The representative name for the entity.|
|metadata|object|false|none|Metadata associated with the entity. For most entity types, the metadata is a Wikipedia URL (`wikipedia_url`) and Knowledge Graph MID (`mid`), if they are available. For the metadata associated with other entity types, see the Type table below.|
|salience|number(float)|false|none|The salience score associated with the entity in the [0, 1.0] range. The salience score for an entity provides information about the importance or centrality of that entity to the entire document text. Scores closer to 0 are less salient, while scores closer to 1.0 are highly salient.|
|sentiment|[GoogleCloudContactcenterinsightsV1SentimentData](#schemagooglecloudcontactcenterinsightsv1sentimentdata)|false|none|The aggregate sentiment expressed for this entity in the conversation.|
|type|string|false|none|The entity type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|PERSON|
|type|LOCATION|
|type|ORGANIZATION|
|type|EVENT|
|type|WORK_OF_ART|
|type|CONSUMER_GOOD|
|type|OTHER|
|type|PHONE_NUMBER|
|type|ADDRESS|
|type|DATE|
|type|NUMBER|
|type|PRICE|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1EntityMentionData">GoogleCloudContactcenterinsightsV1EntityMentionData</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1entitymentiondata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1EntityMentionData"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1entitymentiondata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1entitymentiondata"></a>

```json
{
  "entityUniqueId": "string",
  "sentiment": {
    "magnitude": 0,
    "score": 0
  },
  "type": "MENTION_TYPE_UNSPECIFIED"
}
```

The data for an entity mention annotation. This represents a mention of an `Entity` in the conversation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entityUniqueId|string|false|none|The key of this entity in conversation entities. Can be used to retrieve the exact `Entity` this mention is attached to.|
|sentiment|[GoogleCloudContactcenterinsightsV1SentimentData](#schemagooglecloudcontactcenterinsightsv1sentimentdata)|false|none|Sentiment expressed for this mention of the entity.|
|type|string|false|none|The type of the entity mention.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|MENTION_TYPE_UNSPECIFIED|
|type|PROPER|
|type|COMMON|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1ExactMatchConfig">GoogleCloudContactcenterinsightsV1ExactMatchConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1exactmatchconfig"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1ExactMatchConfig"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1exactmatchconfig"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1exactmatchconfig"></a>

```json
{
  "caseSensitive": true
}
```

Exact match configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caseSensitive|boolean|false|none|Whether to consider case sensitivity when performing an exact match.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1ExportInsightsDataMetadata">GoogleCloudContactcenterinsightsV1ExportInsightsDataMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1exportinsightsdatametadata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1ExportInsightsDataMetadata"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1exportinsightsdatametadata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1exportinsightsdatametadata"></a>

```json
{
  "createTime": "string",
  "endTime": "string",
  "partialErrors": [
    {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    }
  ],
  "request": {
    "bigQueryDestination": {
      "dataset": "string",
      "projectId": "string",
      "table": "string"
    },
    "filter": "string",
    "kmsKey": "string",
    "parent": "string",
    "writeDisposition": "WRITE_DISPOSITION_UNSPECIFIED"
  }
}
```

Metadata for an export insights operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. The time the operation finished running.|
|partialErrors|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|Partial errors during export operation that might cause the operation output to be incomplete.|
|request|[GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest](#schemagooglecloudcontactcenterinsightsv1exportinsightsdatarequest)|false|none|The original request for export.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest">GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1exportinsightsdatarequest"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1exportinsightsdatarequest"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1exportinsightsdatarequest"></a>

```json
{
  "bigQueryDestination": {
    "dataset": "string",
    "projectId": "string",
    "table": "string"
  },
  "filter": "string",
  "kmsKey": "string",
  "parent": "string",
  "writeDisposition": "WRITE_DISPOSITION_UNSPECIFIED"
}
```

The request to export insights.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigQueryDestination|[GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination](#schemagooglecloudcontactcenterinsightsv1exportinsightsdatarequestbigquerydestination)|false|none|Specified if sink is a BigQuery table.|
|filter|string|false|none|A filter to reduce results to a specific subset. Useful for exporting conversations with specific properties.|
|kmsKey|string|false|none|A fully qualified KMS key name for BigQuery tables protected by CMEK. Format: projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}/cryptoKeyVersions/{version}|
|parent|string|false|none|Required. The parent resource to export data from.|
|writeDisposition|string|false|none|Options for what to do if the destination table already exists.|

#### Enumerated Values

|Property|Value|
|---|---|
|writeDisposition|WRITE_DISPOSITION_UNSPECIFIED|
|writeDisposition|WRITE_TRUNCATE|
|writeDisposition|WRITE_APPEND|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination">GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1exportinsightsdatarequestbigquerydestination"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1exportinsightsdatarequestbigquerydestination"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1exportinsightsdatarequestbigquerydestination"></a>

```json
{
  "dataset": "string",
  "projectId": "string",
  "table": "string"
}
```

A BigQuery Table Reference.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataset|string|false|none|Required. The name of the BigQuery dataset that the snapshot result should be exported to. If this dataset does not exist, the export call returns an INVALID_ARGUMENT error.|
|projectId|string|false|none|A project ID or number. If specified, then export will attempt to write data to this project instead of the resource project. Otherwise, the resource project will be used.|
|table|string|false|none|The BigQuery table name to which the insights data should be written. If this table does not exist, the export call returns an INVALID_ARGUMENT error.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1ExportInsightsDataResponse">GoogleCloudContactcenterinsightsV1ExportInsightsDataResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1exportinsightsdataresponse"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1ExportInsightsDataResponse"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1exportinsightsdataresponse"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1exportinsightsdataresponse"></a>

```json
{}
```

Response for an export insights operation.

<h2 id="tocS_GoogleCloudContactcenterinsightsV1FaqAnswerData">GoogleCloudContactcenterinsightsV1FaqAnswerData</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1faqanswerdata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1FaqAnswerData"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1faqanswerdata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1faqanswerdata"></a>

```json
{
  "answer": "string",
  "confidenceScore": 0,
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "queryRecord": "string",
  "question": "string",
  "source": "string"
}
```

Agent Assist frequently-asked-question answer data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answer|string|false|none|The piece of text from the `source` knowledge base document.|
|confidenceScore|number(float)|false|none|The system's confidence score that this answer is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain).|
|metadata|object|false|none|Map that contains metadata about the FAQ answer and the document that it originates from.|
|queryRecord|string|false|none|The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record}|
|question|string|false|none|The corresponding FAQ question.|
|source|string|false|none|The knowledge document that this answer was extracted from. Format: projects/{project}/knowledgeBases/{knowledge_base}/documents/{document}.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1GcsSource">GoogleCloudContactcenterinsightsV1GcsSource</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1gcssource"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1GcsSource"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1gcssource"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1gcssource"></a>

```json
{
  "audioUri": "string",
  "transcriptUri": "string"
}
```

A Cloud Storage source of conversation data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audioUri|string|false|none|Cloud Storage URI that points to a file that contains the conversation audio.|
|transcriptUri|string|false|none|Immutable. Cloud Storage URI that points to a file that contains the conversation transcript.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1HoldData">GoogleCloudContactcenterinsightsV1HoldData</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1holddata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1HoldData"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1holddata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1holddata"></a>

```json
{}
```

The data for a hold annotation.

<h2 id="tocS_GoogleCloudContactcenterinsightsV1IngestConversationsMetadata">GoogleCloudContactcenterinsightsV1IngestConversationsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1ingestconversationsmetadata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1IngestConversationsMetadata"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1ingestconversationsmetadata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1ingestconversationsmetadata"></a>

```json
{
  "createTime": "string",
  "endTime": "string",
  "ingestConversationsStats": {
    "duplicatesSkippedCount": 0,
    "failedIngestCount": 0,
    "processedObjectCount": 0,
    "successfulIngestCount": 0
  },
  "partialErrors": [
    {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    }
  ],
  "request": {
    "conversationConfig": {
      "agentId": "string"
    },
    "gcsSource": {
      "bucketUri": "string"
    },
    "parent": "string",
    "transcriptObjectConfig": {
      "medium": "MEDIUM_UNSPECIFIED"
    }
  }
}
```

The metadata for an IngestConversations operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. The time the operation finished running.|
|ingestConversationsStats|[GoogleCloudContactcenterinsightsV1IngestConversationsMetadataIngestConversationsStats](#schemagooglecloudcontactcenterinsightsv1ingestconversationsmetadataingestconversationsstats)|false|none|Output only. Statistics for IngestConversations operation.|
|partialErrors|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|read-only|Output only. Partial errors during ingest operation that might cause the operation output to be incomplete.|
|request|[GoogleCloudContactcenterinsightsV1IngestConversationsRequest](#schemagooglecloudcontactcenterinsightsv1ingestconversationsrequest)|false|none|Output only. The original request for ingest.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1IngestConversationsMetadataIngestConversationsStats">GoogleCloudContactcenterinsightsV1IngestConversationsMetadataIngestConversationsStats</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1ingestconversationsmetadataingestconversationsstats"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1IngestConversationsMetadataIngestConversationsStats"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1ingestconversationsmetadataingestconversationsstats"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1ingestconversationsmetadataingestconversationsstats"></a>

```json
{
  "duplicatesSkippedCount": 0,
  "failedIngestCount": 0,
  "processedObjectCount": 0,
  "successfulIngestCount": 0
}
```

Statistics for IngestConversations operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duplicatesSkippedCount|integer(int32)|false|read-only|Output only. The number of objects skipped because another conversation with the same transcript uri had already been ingested.|
|failedIngestCount|integer(int32)|false|read-only|Output only. The number of objects which were unable to be ingested due to errors. The errors are populated in the partial_errors field.|
|processedObjectCount|integer(int32)|false|read-only|Output only. The number of objects processed during the ingest operation.|
|successfulIngestCount|integer(int32)|false|read-only|Output only. The number of new conversations added during this ingest operation.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1IngestConversationsRequest">GoogleCloudContactcenterinsightsV1IngestConversationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1ingestconversationsrequest"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1IngestConversationsRequest"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1ingestconversationsrequest"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1ingestconversationsrequest"></a>

```json
{
  "conversationConfig": {
    "agentId": "string"
  },
  "gcsSource": {
    "bucketUri": "string"
  },
  "parent": "string",
  "transcriptObjectConfig": {
    "medium": "MEDIUM_UNSPECIFIED"
  }
}
```

The request to ingest conversations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversationConfig|[GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfig](#schemagooglecloudcontactcenterinsightsv1ingestconversationsrequestconversationconfig)|false|none|Configuration that applies to all conversations.|
|gcsSource|[GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource](#schemagooglecloudcontactcenterinsightsv1ingestconversationsrequestgcssource)|false|none|A cloud storage bucket source.|
|parent|string|false|none|Required. The parent resource for new conversations.|
|transcriptObjectConfig|[GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig](#schemagooglecloudcontactcenterinsightsv1ingestconversationsrequesttranscriptobjectconfig)|false|none|Configuration for when `source` contains conversation transcripts.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfig">GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1ingestconversationsrequestconversationconfig"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfig"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1ingestconversationsrequestconversationconfig"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1ingestconversationsrequestconversationconfig"></a>

```json
{
  "agentId": "string"
}
```

Configuration that applies to all conversations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentId|string|false|none|An opaque, user-specified string representing the human agent who handled the conversations.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource">GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1ingestconversationsrequestgcssource"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1ingestconversationsrequestgcssource"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1ingestconversationsrequestgcssource"></a>

```json
{
  "bucketUri": "string"
}
```

Configuration for Cloud Storage bucket sources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketUri|string|false|none|Required. The Cloud Storage bucket containing source objects.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig">GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1ingestconversationsrequesttranscriptobjectconfig"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1ingestconversationsrequesttranscriptobjectconfig"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1ingestconversationsrequesttranscriptobjectconfig"></a>

```json
{
  "medium": "MEDIUM_UNSPECIFIED"
}
```

Configuration for processing transcript objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|medium|string|false|none|Required. The medium transcript objects represent.|

#### Enumerated Values

|Property|Value|
|---|---|
|medium|MEDIUM_UNSPECIFIED|
|medium|PHONE_CALL|
|medium|CHAT|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1IngestConversationsResponse">GoogleCloudContactcenterinsightsV1IngestConversationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1ingestconversationsresponse"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1IngestConversationsResponse"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1ingestconversationsresponse"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1ingestconversationsresponse"></a>

```json
{}
```

The response to an IngestConversations operation.

<h2 id="tocS_GoogleCloudContactcenterinsightsV1Intent">GoogleCloudContactcenterinsightsV1Intent</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1intent"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1Intent"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1intent"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1intent"></a>

```json
{
  "displayName": "string",
  "id": "string"
}
```

The data for an intent. Represents a detected intent in the conversation, for example MAKES_PROMISE.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The human-readable name of the intent.|
|id|string|false|none|The unique identifier of the intent.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1IntentMatchData">GoogleCloudContactcenterinsightsV1IntentMatchData</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1intentmatchdata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1IntentMatchData"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1intentmatchdata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1intentmatchdata"></a>

```json
{
  "intentUniqueId": "string"
}
```

The data for an intent match. Represents an intent match for a text segment in the conversation. A text segment can be part of a sentence, a complete sentence, or an utterance with multiple sentences.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|intentUniqueId|string|false|none|The id of the matched intent. Can be used to retrieve the corresponding intent information.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1InterruptionData">GoogleCloudContactcenterinsightsV1InterruptionData</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1interruptiondata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1InterruptionData"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1interruptiondata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1interruptiondata"></a>

```json
{}
```

The data for an interruption annotation.

<h2 id="tocS_GoogleCloudContactcenterinsightsV1Issue">GoogleCloudContactcenterinsightsV1Issue</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1issue"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1Issue"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1issue"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1issue"></a>

```json
{
  "createTime": "string",
  "displayName": "string",
  "name": "string",
  "sampleUtterances": [
    "string"
  ],
  "updateTime": "string"
}
```

The issue resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time at which this issue was created.|
|displayName|string|false|none|The representative name for the issue.|
|name|string|false|none|Immutable. The resource name of the issue. Format: projects/{project}/locations/{location}/issueModels/{issue_model}/issues/{issue}|
|sampleUtterances|[string]|false|read-only|Output only. Resource names of the sample representative utterances that match to this issue.|
|updateTime|string(google-datetime)|false|read-only|Output only. The most recent time that this issue was updated.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1IssueAssignment">GoogleCloudContactcenterinsightsV1IssueAssignment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1issueassignment"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1IssueAssignment"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1issueassignment"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1issueassignment"></a>

```json
{
  "displayName": "string",
  "issue": "string",
  "score": 0
}
```

Information about the issue.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Immutable. Display name of the assigned issue. This field is set at time of analyis and immutable since then.|
|issue|string|false|none|Resource name of the assigned issue.|
|score|number(double)|false|none|Score indicating the likelihood of the issue assignment. currently bounded on [0,1].|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1IssueMatchData">GoogleCloudContactcenterinsightsV1IssueMatchData</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1issuematchdata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1IssueMatchData"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1issuematchdata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1issuematchdata"></a>

```json
{
  "issueAssignment": {
    "displayName": "string",
    "issue": "string",
    "score": 0
  }
}
```

The data for an issue match annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issueAssignment|[GoogleCloudContactcenterinsightsV1IssueAssignment](#schemagooglecloudcontactcenterinsightsv1issueassignment)|false|none|Information about the issue's assignment.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1IssueModel">GoogleCloudContactcenterinsightsV1IssueModel</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1issuemodel"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1IssueModel"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1issuemodel"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1issuemodel"></a>

```json
{
  "createTime": "string",
  "displayName": "string",
  "inputDataConfig": {
    "filter": "string",
    "medium": "MEDIUM_UNSPECIFIED",
    "trainingConversationsCount": "string"
  },
  "issueCount": "string",
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "trainingStats": {
    "analyzedConversationsCount": "string",
    "issueStats": {
      "property1": {
        "displayName": "string",
        "issue": "string",
        "labeledConversationsCount": "string"
      },
      "property2": {
        "displayName": "string",
        "issue": "string",
        "labeledConversationsCount": "string"
      }
    },
    "unclassifiedConversationsCount": "string"
  },
  "updateTime": "string"
}
```

The issue model resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time at which this issue model was created.|
|displayName|string|false|none|The representative name for the issue model.|
|inputDataConfig|[GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig](#schemagooglecloudcontactcenterinsightsv1issuemodelinputdataconfig)|false|none|Configs for the input data that used to create the issue model.|
|issueCount|string(int64)|false|read-only|Output only. Number of issues in this issue model.|
|name|string|false|none|Immutable. The resource name of the issue model. Format: projects/{project}/locations/{location}/issueModels/{issue_model}|
|state|string|false|read-only|Output only. State of the model.|
|trainingStats|[GoogleCloudContactcenterinsightsV1IssueModelLabelStats](#schemagooglecloudcontactcenterinsightsv1issuemodellabelstats)|false|none|Output only. Immutable. The issue model's label statistics on its training data.|
|updateTime|string(google-datetime)|false|read-only|Output only. The most recent time at which the issue model was updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|UNDEPLOYED|
|state|DEPLOYING|
|state|DEPLOYED|
|state|UNDEPLOYING|
|state|DELETING|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig">GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1issuemodelinputdataconfig"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1issuemodelinputdataconfig"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1issuemodelinputdataconfig"></a>

```json
{
  "filter": "string",
  "medium": "MEDIUM_UNSPECIFIED",
  "trainingConversationsCount": "string"
}
```

Configs for the input data used to create the issue model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|string|false|none|A filter to reduce the conversations used for training the model to a specific subset.|
|medium|string|false|none|Medium of conversations used in training data. This field is being deprecated. To specify the medium to be used in training a new issue model, set the `medium` field on `filter`.|
|trainingConversationsCount|string(int64)|false|read-only|Output only. Number of conversations used in training. Output only.|

#### Enumerated Values

|Property|Value|
|---|---|
|medium|MEDIUM_UNSPECIFIED|
|medium|PHONE_CALL|
|medium|CHAT|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1IssueModelLabelStats">GoogleCloudContactcenterinsightsV1IssueModelLabelStats</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1issuemodellabelstats"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1IssueModelLabelStats"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1issuemodellabelstats"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1issuemodellabelstats"></a>

```json
{
  "analyzedConversationsCount": "string",
  "issueStats": {
    "property1": {
      "displayName": "string",
      "issue": "string",
      "labeledConversationsCount": "string"
    },
    "property2": {
      "displayName": "string",
      "issue": "string",
      "labeledConversationsCount": "string"
    }
  },
  "unclassifiedConversationsCount": "string"
}
```

Aggregated statistics about an issue model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analyzedConversationsCount|string(int64)|false|none|Number of conversations the issue model has analyzed at this point in time.|
|issueStats|object|false|none|Statistics on each issue. Key is the issue's resource name.|
|unclassifiedConversationsCount|string(int64)|false|none|Number of analyzed conversations for which no issue was applicable at this point in time.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats">GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1issuemodellabelstatsissuestats"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1issuemodellabelstatsissuestats"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1issuemodellabelstatsissuestats"></a>

```json
{
  "displayName": "string",
  "issue": "string",
  "labeledConversationsCount": "string"
}
```

Aggregated statistics about an issue.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Display name of the issue.|
|issue|string|false|none|Issue resource. Format: projects/{project}/locations/{location}/issueModels/{issue_model}/issues/{issue}|
|labeledConversationsCount|string(int64)|false|none|Number of conversations attached to the issue at this point in time.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1IssueModelResult">GoogleCloudContactcenterinsightsV1IssueModelResult</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1issuemodelresult"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1IssueModelResult"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1issuemodelresult"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1issuemodelresult"></a>

```json
{
  "issueModel": "string",
  "issues": [
    {
      "displayName": "string",
      "issue": "string",
      "score": 0
    }
  ]
}
```

Issue Modeling result on a conversation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issueModel|string|false|none|Issue model that generates the result. Format: projects/{project}/locations/{location}/issueModels/{issue_model}|
|issues|[[GoogleCloudContactcenterinsightsV1IssueAssignment](#schemagooglecloudcontactcenterinsightsv1issueassignment)]|false|none|All the matched issues.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1ListAnalysesResponse">GoogleCloudContactcenterinsightsV1ListAnalysesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1listanalysesresponse"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1ListAnalysesResponse"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1listanalysesresponse"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1listanalysesresponse"></a>

```json
{
  "analyses": [
    {
      "analysisResult": {
        "callAnalysisMetadata": {
          "annotations": [
            {
              "annotationEndBoundary": {
                "transcriptIndex": 0,
                "wordIndex": 0
              },
              "annotationStartBoundary": {
                "transcriptIndex": 0,
                "wordIndex": 0
              },
              "channelTag": 0,
              "entityMentionData": {
                "entityUniqueId": "string",
                "sentiment": {
                  "magnitude": 0,
                  "score": 0
                },
                "type": "MENTION_TYPE_UNSPECIFIED"
              },
              "holdData": {},
              "intentMatchData": {
                "intentUniqueId": "string"
              },
              "interruptionData": {},
              "issueMatchData": {
                "issueAssignment": {
                  "displayName": "string",
                  "issue": "string",
                  "score": 0
                }
              },
              "phraseMatchData": {
                "displayName": "string",
                "phraseMatcher": "string"
              },
              "sentimentData": {
                "magnitude": 0,
                "score": 0
              },
              "silenceData": {}
            }
          ],
          "entities": {
            "property1": {
              "displayName": "string",
              "metadata": {
                "property1": "string",
                "property2": "string"
              },
              "salience": 0,
              "sentiment": {
                "magnitude": 0,
                "score": 0
              },
              "type": "TYPE_UNSPECIFIED"
            },
            "property2": {
              "displayName": "string",
              "metadata": {
                "property1": "string",
                "property2": "string"
              },
              "salience": 0,
              "sentiment": {
                "magnitude": 0,
                "score": 0
              },
              "type": "TYPE_UNSPECIFIED"
            }
          },
          "intents": {
            "property1": {
              "displayName": "string",
              "id": "string"
            },
            "property2": {
              "displayName": "string",
              "id": "string"
            }
          },
          "issueModelResult": {
            "issueModel": "string",
            "issues": [
              {
                "displayName": "string",
                "issue": "string",
                "score": 0
              }
            ]
          },
          "phraseMatchers": {
            "property1": {
              "displayName": "string",
              "phraseMatcher": "string"
            },
            "property2": {
              "displayName": "string",
              "phraseMatcher": "string"
            }
          },
          "sentiments": [
            {
              "channelTag": 0,
              "sentimentData": {
                "magnitude": 0,
                "score": 0
              }
            }
          ]
        },
        "endTime": "string"
      },
      "annotatorSelector": {
        "issueModels": [
          "string"
        ],
        "phraseMatchers": [
          "string"
        ],
        "runEntityAnnotator": true,
        "runIntentAnnotator": true,
        "runInterruptionAnnotator": true,
        "runIssueModelAnnotator": true,
        "runPhraseMatcherAnnotator": true,
        "runSentimentAnnotator": true,
        "runSilenceAnnotator": true
      },
      "createTime": "string",
      "name": "string",
      "requestTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response to list analyses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analyses|[[GoogleCloudContactcenterinsightsV1Analysis](#schemagooglecloudcontactcenterinsightsv1analysis)]|false|none|The analyses that match the request.|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1ListConversationsResponse">GoogleCloudContactcenterinsightsV1ListConversationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1listconversationsresponse"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1ListConversationsResponse"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1listconversationsresponse"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1listconversationsresponse"></a>

```json
{
  "conversations": [
    {
      "agentId": "string",
      "callMetadata": {
        "agentChannel": 0,
        "customerChannel": 0
      },
      "createTime": "string",
      "dataSource": {
        "dialogflowSource": {
          "audioUri": "string",
          "dialogflowConversation": "string"
        },
        "gcsSource": {
          "audioUri": "string",
          "transcriptUri": "string"
        }
      },
      "dialogflowIntents": {
        "property1": {
          "displayName": "string"
        },
        "property2": {
          "displayName": "string"
        }
      },
      "duration": "string",
      "expireTime": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "languageCode": "string",
      "latestAnalysis": {
        "analysisResult": {
          "callAnalysisMetadata": {
            "annotations": [
              {
                "annotationEndBoundary": {
                  "transcriptIndex": 0,
                  "wordIndex": 0
                },
                "annotationStartBoundary": {
                  "transcriptIndex": 0,
                  "wordIndex": 0
                },
                "channelTag": 0,
                "entityMentionData": {
                  "entityUniqueId": "string",
                  "sentiment": {
                    "magnitude": 0,
                    "score": 0
                  },
                  "type": "MENTION_TYPE_UNSPECIFIED"
                },
                "holdData": {},
                "intentMatchData": {
                  "intentUniqueId": "string"
                },
                "interruptionData": {},
                "issueMatchData": {
                  "issueAssignment": {
                    "displayName": "string",
                    "issue": "string",
                    "score": 0
                  }
                },
                "phraseMatchData": {
                  "displayName": "string",
                  "phraseMatcher": "string"
                },
                "sentimentData": {
                  "magnitude": 0,
                  "score": 0
                },
                "silenceData": {}
              }
            ],
            "entities": {
              "property1": {
                "displayName": "string",
                "metadata": {
                  "property1": "string",
                  "property2": "string"
                },
                "salience": 0,
                "sentiment": {
                  "magnitude": 0,
                  "score": 0
                },
                "type": "TYPE_UNSPECIFIED"
              },
              "property2": {
                "displayName": "string",
                "metadata": {
                  "property1": "string",
                  "property2": "string"
                },
                "salience": 0,
                "sentiment": {
                  "magnitude": 0,
                  "score": 0
                },
                "type": "TYPE_UNSPECIFIED"
              }
            },
            "intents": {
              "property1": {
                "displayName": "string",
                "id": "string"
              },
              "property2": {
                "displayName": "string",
                "id": "string"
              }
            },
            "issueModelResult": {
              "issueModel": "string",
              "issues": [
                {
                  "displayName": "string",
                  "issue": "string",
                  "score": 0
                }
              ]
            },
            "phraseMatchers": {
              "property1": {
                "displayName": "string",
                "phraseMatcher": "string"
              },
              "property2": {
                "displayName": "string",
                "phraseMatcher": "string"
              }
            },
            "sentiments": [
              {
                "channelTag": 0,
                "sentimentData": {
                  "magnitude": 0,
                  "score": 0
                }
              }
            ]
          },
          "endTime": "string"
        },
        "annotatorSelector": {
          "issueModels": [
            "string"
          ],
          "phraseMatchers": [
            "string"
          ],
          "runEntityAnnotator": true,
          "runIntentAnnotator": true,
          "runInterruptionAnnotator": true,
          "runIssueModelAnnotator": true,
          "runPhraseMatcherAnnotator": true,
          "runSentimentAnnotator": true,
          "runSilenceAnnotator": true
        },
        "createTime": "string",
        "name": "string",
        "requestTime": "string"
      },
      "medium": "MEDIUM_UNSPECIFIED",
      "name": "string",
      "obfuscatedUserId": "string",
      "runtimeAnnotations": [
        {
          "annotationId": "string",
          "answerFeedback": {
            "clicked": true,
            "correctnessLevel": "CORRECTNESS_LEVEL_UNSPECIFIED",
            "displayed": true
          },
          "articleSuggestion": {
            "confidenceScore": 0,
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "queryRecord": "string",
            "source": "string",
            "title": "string",
            "uri": "string"
          },
          "createTime": "string",
          "dialogflowInteraction": {
            "confidence": 0,
            "dialogflowIntentId": "string"
          },
          "endBoundary": {
            "transcriptIndex": 0,
            "wordIndex": 0
          },
          "faqAnswer": {
            "answer": "string",
            "confidenceScore": 0,
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "queryRecord": "string",
            "question": "string",
            "source": "string"
          },
          "smartComposeSuggestion": {
            "confidenceScore": 0,
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "queryRecord": "string",
            "suggestion": "string"
          },
          "smartReply": {
            "confidenceScore": 0,
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "queryRecord": "string",
            "reply": "string"
          },
          "startBoundary": {
            "transcriptIndex": 0,
            "wordIndex": 0
          }
        }
      ],
      "startTime": "string",
      "transcript": {
        "transcriptSegments": [
          {
            "channelTag": 0,
            "confidence": 0,
            "dialogflowSegmentMetadata": {
              "smartReplyAllowlistCovered": true
            },
            "languageCode": "string",
            "messageTime": "string",
            "segmentParticipant": {
              "dialogflowParticipant": "string",
              "dialogflowParticipantName": "string",
              "obfuscatedExternalUserId": "string",
              "role": "ROLE_UNSPECIFIED",
              "userId": "string"
            },
            "sentiment": {
              "magnitude": 0,
              "score": 0
            },
            "text": "string",
            "words": [
              {
                "confidence": 0,
                "endOffset": "string",
                "startOffset": "string",
                "word": "string"
              }
            ]
          }
        ]
      },
      "ttl": "string",
      "turnCount": 0,
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response of listing conversations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversations|[[GoogleCloudContactcenterinsightsV1Conversation](#schemagooglecloudcontactcenterinsightsv1conversation)]|false|none|The conversations that match the request.|
|nextPageToken|string|false|none|A token which can be sent as `page_token` to retrieve the next page. If this field is set, it means there is another page available. If it is not set, it means no other pages are available.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1ListIssueModelsResponse">GoogleCloudContactcenterinsightsV1ListIssueModelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1listissuemodelsresponse"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1ListIssueModelsResponse"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1listissuemodelsresponse"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1listissuemodelsresponse"></a>

```json
{
  "issueModels": [
    {
      "createTime": "string",
      "displayName": "string",
      "inputDataConfig": {
        "filter": "string",
        "medium": "MEDIUM_UNSPECIFIED",
        "trainingConversationsCount": "string"
      },
      "issueCount": "string",
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "trainingStats": {
        "analyzedConversationsCount": "string",
        "issueStats": {
          "property1": {
            "displayName": "string",
            "issue": "string",
            "labeledConversationsCount": "string"
          },
          "property2": {
            "displayName": "string",
            "issue": "string",
            "labeledConversationsCount": "string"
          }
        },
        "unclassifiedConversationsCount": "string"
      },
      "updateTime": "string"
    }
  ]
}
```

The response of listing issue models.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issueModels|[[GoogleCloudContactcenterinsightsV1IssueModel](#schemagooglecloudcontactcenterinsightsv1issuemodel)]|false|none|The issue models that match the request.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1ListIssuesResponse">GoogleCloudContactcenterinsightsV1ListIssuesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1listissuesresponse"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1ListIssuesResponse"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1listissuesresponse"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1listissuesresponse"></a>

```json
{
  "issues": [
    {
      "createTime": "string",
      "displayName": "string",
      "name": "string",
      "sampleUtterances": [
        "string"
      ],
      "updateTime": "string"
    }
  ]
}
```

The response of listing issues.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issues|[[GoogleCloudContactcenterinsightsV1Issue](#schemagooglecloudcontactcenterinsightsv1issue)]|false|none|The issues that match the request.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse">GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1listphrasematchersresponse"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1listphrasematchersresponse"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1listphrasematchersresponse"></a>

```json
{
  "nextPageToken": "string",
  "phraseMatchers": [
    {
      "activationUpdateTime": "string",
      "active": true,
      "displayName": "string",
      "name": "string",
      "phraseMatchRuleGroups": [
        {
          "phraseMatchRules": [
            {
              "config": {
                "exactMatchConfig": {
                  "caseSensitive": true
                }
              },
              "negated": true,
              "query": "string"
            }
          ],
          "type": "PHRASE_MATCH_RULE_GROUP_TYPE_UNSPECIFIED"
        }
      ],
      "revisionCreateTime": "string",
      "revisionId": "string",
      "roleMatch": "ROLE_UNSPECIFIED",
      "type": "PHRASE_MATCHER_TYPE_UNSPECIFIED",
      "updateTime": "string",
      "versionTag": "string"
    }
  ]
}
```

The response of listing phrase matchers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|phraseMatchers|[[GoogleCloudContactcenterinsightsV1PhraseMatcher](#schemagooglecloudcontactcenterinsightsv1phrasematcher)]|false|none|The phrase matchers that match the request.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1ListViewsResponse">GoogleCloudContactcenterinsightsV1ListViewsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1listviewsresponse"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1ListViewsResponse"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1listviewsresponse"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1listviewsresponse"></a>

```json
{
  "nextPageToken": "string",
  "views": [
    {
      "createTime": "string",
      "displayName": "string",
      "name": "string",
      "updateTime": "string",
      "value": "string"
    }
  ]
}
```

The response of listing views.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|views|[[GoogleCloudContactcenterinsightsV1View](#schemagooglecloudcontactcenterinsightsv1view)]|false|none|The views that match the request.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1PhraseMatchData">GoogleCloudContactcenterinsightsV1PhraseMatchData</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1phrasematchdata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1PhraseMatchData"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1phrasematchdata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1phrasematchdata"></a>

```json
{
  "displayName": "string",
  "phraseMatcher": "string"
}
```

The data for a matched phrase matcher. Represents information identifying a phrase matcher for a given match.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The human-readable name of the phrase matcher.|
|phraseMatcher|string|false|none|The unique identifier (the resource name) of the phrase matcher.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1PhraseMatchRule">GoogleCloudContactcenterinsightsV1PhraseMatchRule</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1phrasematchrule"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1PhraseMatchRule"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1phrasematchrule"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1phrasematchrule"></a>

```json
{
  "config": {
    "exactMatchConfig": {
      "caseSensitive": true
    }
  },
  "negated": true,
  "query": "string"
}
```

The data for a phrase match rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig](#schemagooglecloudcontactcenterinsightsv1phrasematchruleconfig)|false|none|Provides additional information about the rule that specifies how to apply the rule.|
|negated|boolean|false|none|Specifies whether the phrase must be missing from the transcript segment or present in the transcript segment.|
|query|string|false|none|Required. The phrase to be matched.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig">GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1phrasematchruleconfig"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1phrasematchruleconfig"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1phrasematchruleconfig"></a>

```json
{
  "exactMatchConfig": {
    "caseSensitive": true
  }
}
```

Configuration information of a phrase match rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exactMatchConfig|[GoogleCloudContactcenterinsightsV1ExactMatchConfig](#schemagooglecloudcontactcenterinsightsv1exactmatchconfig)|false|none|The configuration for the exact match rule.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup">GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1phrasematchrulegroup"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1phrasematchrulegroup"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1phrasematchrulegroup"></a>

```json
{
  "phraseMatchRules": [
    {
      "config": {
        "exactMatchConfig": {
          "caseSensitive": true
        }
      },
      "negated": true,
      "query": "string"
    }
  ],
  "type": "PHRASE_MATCH_RULE_GROUP_TYPE_UNSPECIFIED"
}
```

A message representing a rule in the phrase matcher.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phraseMatchRules|[[GoogleCloudContactcenterinsightsV1PhraseMatchRule](#schemagooglecloudcontactcenterinsightsv1phrasematchrule)]|false|none|A list of phrase match rules that are included in this group.|
|type|string|false|none|Required. The type of this phrase match rule group.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|PHRASE_MATCH_RULE_GROUP_TYPE_UNSPECIFIED|
|type|ALL_OF|
|type|ANY_OF|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1PhraseMatcher">GoogleCloudContactcenterinsightsV1PhraseMatcher</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1phrasematcher"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1PhraseMatcher"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1phrasematcher"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1phrasematcher"></a>

```json
{
  "activationUpdateTime": "string",
  "active": true,
  "displayName": "string",
  "name": "string",
  "phraseMatchRuleGroups": [
    {
      "phraseMatchRules": [
        {
          "config": {
            "exactMatchConfig": {
              "caseSensitive": true
            }
          },
          "negated": true,
          "query": "string"
        }
      ],
      "type": "PHRASE_MATCH_RULE_GROUP_TYPE_UNSPECIFIED"
    }
  ],
  "revisionCreateTime": "string",
  "revisionId": "string",
  "roleMatch": "ROLE_UNSPECIFIED",
  "type": "PHRASE_MATCHER_TYPE_UNSPECIFIED",
  "updateTime": "string",
  "versionTag": "string"
}
```

The phrase matcher resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activationUpdateTime|string(google-datetime)|false|read-only|Output only. The most recent time at which the activation status was updated.|
|active|boolean|false|none|Applies the phrase matcher only when it is active.|
|displayName|string|false|none|The human-readable name of the phrase matcher.|
|name|string|false|none|The resource name of the phrase matcher. Format: projects/{project}/locations/{location}/phraseMatchers/{phrase_matcher}|
|phraseMatchRuleGroups|[[GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup](#schemagooglecloudcontactcenterinsightsv1phrasematchrulegroup)]|false|none|A list of phase match rule groups that are included in this matcher.|
|revisionCreateTime|string(google-datetime)|false|read-only|Output only. The timestamp of when the revision was created. It is also the create time when a new matcher is added.|
|revisionId|string|false|read-only|Output only. Immutable. The revision ID of the phrase matcher. A new revision is committed whenever the matcher is changed, except when it is activated or deactivated. A server generated random ID will be used. Example: locations/global/phraseMatchers/my-first-matcher@1234567|
|roleMatch|string|false|none|The role whose utterances the phrase matcher should be matched against. If the role is ROLE_UNSPECIFIED it will be matched against any utterances in the transcript.|
|type|string|false|none|Required. The type of this phrase matcher.|
|updateTime|string(google-datetime)|false|read-only|Output only. The most recent time at which the phrase matcher was updated.|
|versionTag|string|false|none|The customized version tag to use for the phrase matcher. If not specified, it will default to `revision_id`.|

#### Enumerated Values

|Property|Value|
|---|---|
|roleMatch|ROLE_UNSPECIFIED|
|roleMatch|HUMAN_AGENT|
|roleMatch|AUTOMATED_AGENT|
|roleMatch|END_USER|
|roleMatch|ANY_AGENT|
|type|PHRASE_MATCHER_TYPE_UNSPECIFIED|
|type|ALL_OF|
|type|ANY_OF|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1RedactionConfig">GoogleCloudContactcenterinsightsV1RedactionConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1redactionconfig"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1RedactionConfig"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1redactionconfig"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1redactionconfig"></a>

```json
{
  "deidentifyTemplate": "string",
  "inspectTemplate": "string"
}
```

DLP resources used for redaction while ingesting conversations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deidentifyTemplate|string|false|none|The fully-qualified DLP deidentify template resource name. Format: `projects/{project}/deidentifyTemplates/{template}`|
|inspectTemplate|string|false|none|The fully-qualified DLP inspect template resource name. Format: `projects/{project}/inspectTemplates/{template}`|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1RuntimeAnnotation">GoogleCloudContactcenterinsightsV1RuntimeAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1runtimeannotation"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1RuntimeAnnotation"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1runtimeannotation"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1runtimeannotation"></a>

```json
{
  "annotationId": "string",
  "answerFeedback": {
    "clicked": true,
    "correctnessLevel": "CORRECTNESS_LEVEL_UNSPECIFIED",
    "displayed": true
  },
  "articleSuggestion": {
    "confidenceScore": 0,
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "queryRecord": "string",
    "source": "string",
    "title": "string",
    "uri": "string"
  },
  "createTime": "string",
  "dialogflowInteraction": {
    "confidence": 0,
    "dialogflowIntentId": "string"
  },
  "endBoundary": {
    "transcriptIndex": 0,
    "wordIndex": 0
  },
  "faqAnswer": {
    "answer": "string",
    "confidenceScore": 0,
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "queryRecord": "string",
    "question": "string",
    "source": "string"
  },
  "smartComposeSuggestion": {
    "confidenceScore": 0,
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "queryRecord": "string",
    "suggestion": "string"
  },
  "smartReply": {
    "confidenceScore": 0,
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "queryRecord": "string",
    "reply": "string"
  },
  "startBoundary": {
    "transcriptIndex": 0,
    "wordIndex": 0
  }
}
```

An annotation that was generated during the customer and agent interaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationId|string|false|none|The unique identifier of the annotation. Format: projects/{project}/locations/{location}/conversationDatasets/{dataset}/conversationDataItems/{data_item}/conversationAnnotations/{annotation}|
|answerFeedback|[GoogleCloudContactcenterinsightsV1AnswerFeedback](#schemagooglecloudcontactcenterinsightsv1answerfeedback)|false|none|The feedback that the customer has about the answer in `data`.|
|articleSuggestion|[GoogleCloudContactcenterinsightsV1ArticleSuggestionData](#schemagooglecloudcontactcenterinsightsv1articlesuggestiondata)|false|none|Agent Assist Article Suggestion data.|
|createTime|string(google-datetime)|false|none|The time at which this annotation was created.|
|dialogflowInteraction|[GoogleCloudContactcenterinsightsV1DialogflowInteractionData](#schemagooglecloudcontactcenterinsightsv1dialogflowinteractiondata)|false|none|Dialogflow interaction data.|
|endBoundary|[GoogleCloudContactcenterinsightsV1AnnotationBoundary](#schemagooglecloudcontactcenterinsightsv1annotationboundary)|false|none|The boundary in the conversation where the annotation ends, inclusive.|
|faqAnswer|[GoogleCloudContactcenterinsightsV1FaqAnswerData](#schemagooglecloudcontactcenterinsightsv1faqanswerdata)|false|none|Agent Assist FAQ answer data.|
|smartComposeSuggestion|[GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData](#schemagooglecloudcontactcenterinsightsv1smartcomposesuggestiondata)|false|none|Agent Assist Smart Compose suggestion data.|
|smartReply|[GoogleCloudContactcenterinsightsV1SmartReplyData](#schemagooglecloudcontactcenterinsightsv1smartreplydata)|false|none|Agent Assist Smart Reply data.|
|startBoundary|[GoogleCloudContactcenterinsightsV1AnnotationBoundary](#schemagooglecloudcontactcenterinsightsv1annotationboundary)|false|none|The boundary in the conversation where the annotation starts, inclusive.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1SentimentData">GoogleCloudContactcenterinsightsV1SentimentData</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1sentimentdata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1SentimentData"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1sentimentdata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1sentimentdata"></a>

```json
{
  "magnitude": 0,
  "score": 0
}
```

The data for a sentiment annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|magnitude|number(float)|false|none|A non-negative number from 0 to infinity which represents the abolute magnitude of sentiment regardless of score.|
|score|number(float)|false|none|The sentiment score between -1.0 (negative) and 1.0 (positive).|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1Settings">GoogleCloudContactcenterinsightsV1Settings</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1settings"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1Settings"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1settings"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1settings"></a>

```json
{
  "analysisConfig": {
    "annotatorSelector": {
      "issueModels": [
        "string"
      ],
      "phraseMatchers": [
        "string"
      ],
      "runEntityAnnotator": true,
      "runIntentAnnotator": true,
      "runInterruptionAnnotator": true,
      "runIssueModelAnnotator": true,
      "runPhraseMatcherAnnotator": true,
      "runSentimentAnnotator": true,
      "runSilenceAnnotator": true
    },
    "runtimeIntegrationAnalysisPercentage": 0,
    "uploadConversationAnalysisPercentage": 0
  },
  "conversationTtl": "string",
  "createTime": "string",
  "languageCode": "string",
  "name": "string",
  "pubsubNotificationSettings": {
    "property1": "string",
    "property2": "string"
  },
  "redactionConfig": {
    "deidentifyTemplate": "string",
    "inspectTemplate": "string"
  },
  "updateTime": "string"
}
```

The settings resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analysisConfig|[GoogleCloudContactcenterinsightsV1SettingsAnalysisConfig](#schemagooglecloudcontactcenterinsightsv1settingsanalysisconfig)|false|none|Default analysis settings.|
|conversationTtl|string(google-duration)|false|none|The default TTL for newly-created conversations. If a conversation has a specified expiration, that value will be used instead. Changing this value will not change the expiration of existing conversations. Conversations with no expire time persist until they are deleted.|
|createTime|string(google-datetime)|false|read-only|Output only. The time at which the settings was created.|
|languageCode|string|false|none|A language code to be applied to each transcript segment unless the segment already specifies a language code. Language code defaults to "en-US" if it is neither specified on the segment nor here.|
|name|string|false|none|Immutable. The resource name of the settings resource. Format: projects/{project}/locations/{location}/settings|
|pubsubNotificationSettings|object|false|none|A map that maps a notification trigger to a Pub/Sub topic. Each time a specified trigger occurs, Insights will notify the corresponding Pub/Sub topic. Keys are notification triggers. Supported keys are: * "all-triggers": Notify each time any of the supported triggers occurs. * "create-analysis": Notify each time an analysis is created. * "create-conversation": Notify each time a conversation is created. * "export-insights-data": Notify each time an export is complete. * "update-conversation": Notify each time a conversation is updated via UpdateConversation. Values are Pub/Sub topics. The format of each Pub/Sub topic is: projects/{project}/topics/{topic}|
|redactionConfig|[GoogleCloudContactcenterinsightsV1RedactionConfig](#schemagooglecloudcontactcenterinsightsv1redactionconfig)|false|none|Default DLP redaction resources to be applied while ingesting conversations.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time at which the settings were last updated.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1SettingsAnalysisConfig">GoogleCloudContactcenterinsightsV1SettingsAnalysisConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1settingsanalysisconfig"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1SettingsAnalysisConfig"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1settingsanalysisconfig"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1settingsanalysisconfig"></a>

```json
{
  "annotatorSelector": {
    "issueModels": [
      "string"
    ],
    "phraseMatchers": [
      "string"
    ],
    "runEntityAnnotator": true,
    "runIntentAnnotator": true,
    "runInterruptionAnnotator": true,
    "runIssueModelAnnotator": true,
    "runPhraseMatcherAnnotator": true,
    "runSentimentAnnotator": true,
    "runSilenceAnnotator": true
  },
  "runtimeIntegrationAnalysisPercentage": 0,
  "uploadConversationAnalysisPercentage": 0
}
```

Default configuration when creating Analyses in Insights.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotatorSelector|[GoogleCloudContactcenterinsightsV1AnnotatorSelector](#schemagooglecloudcontactcenterinsightsv1annotatorselector)|false|none|To select the annotators to run and the phrase matchers to use (if any). If not specified, all annotators will be run.|
|runtimeIntegrationAnalysisPercentage|number(double)|false|none|Percentage of conversations created using Dialogflow runtime integration to analyze automatically, between [0, 100].|
|uploadConversationAnalysisPercentage|number(double)|false|none|Percentage of conversations created using the UploadConversation endpoint to analyze automatically, between [0, 100].|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1SilenceData">GoogleCloudContactcenterinsightsV1SilenceData</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1silencedata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1SilenceData"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1silencedata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1silencedata"></a>

```json
{}
```

The data for a silence annotation.

<h2 id="tocS_GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData">GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1smartcomposesuggestiondata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1smartcomposesuggestiondata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1smartcomposesuggestiondata"></a>

```json
{
  "confidenceScore": 0,
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "queryRecord": "string",
  "suggestion": "string"
}
```

Agent Assist Smart Compose suggestion data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidenceScore|number(double)|false|none|The system's confidence score that this suggestion is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain).|
|metadata|object|false|none|Map that contains metadata about the Smart Compose suggestion and the document from which it originates.|
|queryRecord|string|false|none|The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record}|
|suggestion|string|false|none|The content of the suggestion.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1SmartReplyData">GoogleCloudContactcenterinsightsV1SmartReplyData</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1smartreplydata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1SmartReplyData"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1smartreplydata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1smartreplydata"></a>

```json
{
  "confidenceScore": 0,
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "queryRecord": "string",
  "reply": "string"
}
```

Agent Assist Smart Reply data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidenceScore|number(double)|false|none|The system's confidence score that this reply is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain).|
|metadata|object|false|none|Map that contains metadata about the Smart Reply and the document from which it originates.|
|queryRecord|string|false|none|The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record}|
|reply|string|false|none|The content of the reply.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1UndeployIssueModelMetadata">GoogleCloudContactcenterinsightsV1UndeployIssueModelMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1undeployissuemodelmetadata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1UndeployIssueModelMetadata"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1undeployissuemodelmetadata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1undeployissuemodelmetadata"></a>

```json
{
  "createTime": "string",
  "endTime": "string",
  "request": {
    "name": "string"
  }
}
```

Metadata for undeploying an issue model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. The time the operation finished running.|
|request|[GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest](#schemagooglecloudcontactcenterinsightsv1undeployissuemodelrequest)|false|none|The original request for undeployment.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest">GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1undeployissuemodelrequest"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1undeployissuemodelrequest"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1undeployissuemodelrequest"></a>

```json
{
  "name": "string"
}
```

The request to undeploy an issue model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Required. The issue model to undeploy.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1UndeployIssueModelResponse">GoogleCloudContactcenterinsightsV1UndeployIssueModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1undeployissuemodelresponse"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1UndeployIssueModelResponse"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1undeployissuemodelresponse"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1undeployissuemodelresponse"></a>

```json
{}
```

The response to undeploy an issue model.

<h2 id="tocS_GoogleCloudContactcenterinsightsV1UploadConversationMetadata">GoogleCloudContactcenterinsightsV1UploadConversationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1uploadconversationmetadata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1UploadConversationMetadata"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1uploadconversationmetadata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1uploadconversationmetadata"></a>

```json
{
  "analysisOperation": "string",
  "appliedRedactionConfig": {
    "deidentifyTemplate": "string",
    "inspectTemplate": "string"
  },
  "createTime": "string",
  "endTime": "string",
  "request": {
    "conversation": {
      "agentId": "string",
      "callMetadata": {
        "agentChannel": 0,
        "customerChannel": 0
      },
      "createTime": "string",
      "dataSource": {
        "dialogflowSource": {
          "audioUri": "string",
          "dialogflowConversation": "string"
        },
        "gcsSource": {
          "audioUri": "string",
          "transcriptUri": "string"
        }
      },
      "dialogflowIntents": {
        "property1": {
          "displayName": "string"
        },
        "property2": {
          "displayName": "string"
        }
      },
      "duration": "string",
      "expireTime": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "languageCode": "string",
      "latestAnalysis": {
        "analysisResult": {
          "callAnalysisMetadata": {
            "annotations": [
              {
                "annotationEndBoundary": {
                  "transcriptIndex": 0,
                  "wordIndex": 0
                },
                "annotationStartBoundary": {
                  "transcriptIndex": 0,
                  "wordIndex": 0
                },
                "channelTag": 0,
                "entityMentionData": {
                  "entityUniqueId": "string",
                  "sentiment": {
                    "magnitude": 0,
                    "score": 0
                  },
                  "type": "MENTION_TYPE_UNSPECIFIED"
                },
                "holdData": {},
                "intentMatchData": {
                  "intentUniqueId": "string"
                },
                "interruptionData": {},
                "issueMatchData": {
                  "issueAssignment": {
                    "displayName": "string",
                    "issue": "string",
                    "score": 0
                  }
                },
                "phraseMatchData": {
                  "displayName": "string",
                  "phraseMatcher": "string"
                },
                "sentimentData": {
                  "magnitude": 0,
                  "score": 0
                },
                "silenceData": {}
              }
            ],
            "entities": {
              "property1": {
                "displayName": "string",
                "metadata": {
                  "property1": "string",
                  "property2": "string"
                },
                "salience": 0,
                "sentiment": {
                  "magnitude": 0,
                  "score": 0
                },
                "type": "TYPE_UNSPECIFIED"
              },
              "property2": {
                "displayName": "string",
                "metadata": {
                  "property1": "string",
                  "property2": "string"
                },
                "salience": 0,
                "sentiment": {
                  "magnitude": 0,
                  "score": 0
                },
                "type": "TYPE_UNSPECIFIED"
              }
            },
            "intents": {
              "property1": {
                "displayName": "string",
                "id": "string"
              },
              "property2": {
                "displayName": "string",
                "id": "string"
              }
            },
            "issueModelResult": {
              "issueModel": "string",
              "issues": [
                {
                  "displayName": "string",
                  "issue": "string",
                  "score": 0
                }
              ]
            },
            "phraseMatchers": {
              "property1": {
                "displayName": "string",
                "phraseMatcher": "string"
              },
              "property2": {
                "displayName": "string",
                "phraseMatcher": "string"
              }
            },
            "sentiments": [
              {
                "channelTag": 0,
                "sentimentData": {
                  "magnitude": 0,
                  "score": 0
                }
              }
            ]
          },
          "endTime": "string"
        },
        "annotatorSelector": {
          "issueModels": [
            "string"
          ],
          "phraseMatchers": [
            "string"
          ],
          "runEntityAnnotator": true,
          "runIntentAnnotator": true,
          "runInterruptionAnnotator": true,
          "runIssueModelAnnotator": true,
          "runPhraseMatcherAnnotator": true,
          "runSentimentAnnotator": true,
          "runSilenceAnnotator": true
        },
        "createTime": "string",
        "name": "string",
        "requestTime": "string"
      },
      "medium": "MEDIUM_UNSPECIFIED",
      "name": "string",
      "obfuscatedUserId": "string",
      "runtimeAnnotations": [
        {
          "annotationId": "string",
          "answerFeedback": {
            "clicked": true,
            "correctnessLevel": "CORRECTNESS_LEVEL_UNSPECIFIED",
            "displayed": true
          },
          "articleSuggestion": {
            "confidenceScore": 0,
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "queryRecord": "string",
            "source": "string",
            "title": "string",
            "uri": "string"
          },
          "createTime": "string",
          "dialogflowInteraction": {
            "confidence": 0,
            "dialogflowIntentId": "string"
          },
          "endBoundary": {
            "transcriptIndex": 0,
            "wordIndex": 0
          },
          "faqAnswer": {
            "answer": "string",
            "confidenceScore": 0,
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "queryRecord": "string",
            "question": "string",
            "source": "string"
          },
          "smartComposeSuggestion": {
            "confidenceScore": 0,
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "queryRecord": "string",
            "suggestion": "string"
          },
          "smartReply": {
            "confidenceScore": 0,
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "queryRecord": "string",
            "reply": "string"
          },
          "startBoundary": {
            "transcriptIndex": 0,
            "wordIndex": 0
          }
        }
      ],
      "startTime": "string",
      "transcript": {
        "transcriptSegments": [
          {
            "channelTag": 0,
            "confidence": 0,
            "dialogflowSegmentMetadata": {
              "smartReplyAllowlistCovered": true
            },
            "languageCode": "string",
            "messageTime": "string",
            "segmentParticipant": {
              "dialogflowParticipant": "string",
              "dialogflowParticipantName": "string",
              "obfuscatedExternalUserId": "string",
              "role": "ROLE_UNSPECIFIED",
              "userId": "string"
            },
            "sentiment": {
              "magnitude": 0,
              "score": 0
            },
            "text": "string",
            "words": [
              {
                "confidence": 0,
                "endOffset": "string",
                "startOffset": "string",
                "word": "string"
              }
            ]
          }
        ]
      },
      "ttl": "string",
      "turnCount": 0,
      "updateTime": "string"
    },
    "conversationId": "string",
    "parent": "string",
    "redactionConfig": {
      "deidentifyTemplate": "string",
      "inspectTemplate": "string"
    }
  }
}
```

The metadata for an UploadConversation operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analysisOperation|string|false|read-only|Output only. The operation name for a successfully created analysis operation, if any.|
|appliedRedactionConfig|[GoogleCloudContactcenterinsightsV1RedactionConfig](#schemagooglecloudcontactcenterinsightsv1redactionconfig)|false|none|Output only. The redaction config applied to the uploaded conversation.|
|createTime|string(google-datetime)|false|read-only|Output only. The time the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. The time the operation finished running.|
|request|[GoogleCloudContactcenterinsightsV1UploadConversationRequest](#schemagooglecloudcontactcenterinsightsv1uploadconversationrequest)|false|none|Output only. The original request.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1UploadConversationRequest">GoogleCloudContactcenterinsightsV1UploadConversationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1uploadconversationrequest"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1UploadConversationRequest"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1uploadconversationrequest"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1uploadconversationrequest"></a>

```json
{
  "conversation": {
    "agentId": "string",
    "callMetadata": {
      "agentChannel": 0,
      "customerChannel": 0
    },
    "createTime": "string",
    "dataSource": {
      "dialogflowSource": {
        "audioUri": "string",
        "dialogflowConversation": "string"
      },
      "gcsSource": {
        "audioUri": "string",
        "transcriptUri": "string"
      }
    },
    "dialogflowIntents": {
      "property1": {
        "displayName": "string"
      },
      "property2": {
        "displayName": "string"
      }
    },
    "duration": "string",
    "expireTime": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "languageCode": "string",
    "latestAnalysis": {
      "analysisResult": {
        "callAnalysisMetadata": {
          "annotations": [
            {
              "annotationEndBoundary": {
                "transcriptIndex": 0,
                "wordIndex": 0
              },
              "annotationStartBoundary": {
                "transcriptIndex": 0,
                "wordIndex": 0
              },
              "channelTag": 0,
              "entityMentionData": {
                "entityUniqueId": "string",
                "sentiment": {
                  "magnitude": 0,
                  "score": 0
                },
                "type": "MENTION_TYPE_UNSPECIFIED"
              },
              "holdData": {},
              "intentMatchData": {
                "intentUniqueId": "string"
              },
              "interruptionData": {},
              "issueMatchData": {
                "issueAssignment": {
                  "displayName": "string",
                  "issue": "string",
                  "score": 0
                }
              },
              "phraseMatchData": {
                "displayName": "string",
                "phraseMatcher": "string"
              },
              "sentimentData": {
                "magnitude": 0,
                "score": 0
              },
              "silenceData": {}
            }
          ],
          "entities": {
            "property1": {
              "displayName": "string",
              "metadata": {
                "property1": "string",
                "property2": "string"
              },
              "salience": 0,
              "sentiment": {
                "magnitude": 0,
                "score": 0
              },
              "type": "TYPE_UNSPECIFIED"
            },
            "property2": {
              "displayName": "string",
              "metadata": {
                "property1": "string",
                "property2": "string"
              },
              "salience": 0,
              "sentiment": {
                "magnitude": 0,
                "score": 0
              },
              "type": "TYPE_UNSPECIFIED"
            }
          },
          "intents": {
            "property1": {
              "displayName": "string",
              "id": "string"
            },
            "property2": {
              "displayName": "string",
              "id": "string"
            }
          },
          "issueModelResult": {
            "issueModel": "string",
            "issues": [
              {
                "displayName": "string",
                "issue": "string",
                "score": 0
              }
            ]
          },
          "phraseMatchers": {
            "property1": {
              "displayName": "string",
              "phraseMatcher": "string"
            },
            "property2": {
              "displayName": "string",
              "phraseMatcher": "string"
            }
          },
          "sentiments": [
            {
              "channelTag": 0,
              "sentimentData": {
                "magnitude": 0,
                "score": 0
              }
            }
          ]
        },
        "endTime": "string"
      },
      "annotatorSelector": {
        "issueModels": [
          "string"
        ],
        "phraseMatchers": [
          "string"
        ],
        "runEntityAnnotator": true,
        "runIntentAnnotator": true,
        "runInterruptionAnnotator": true,
        "runIssueModelAnnotator": true,
        "runPhraseMatcherAnnotator": true,
        "runSentimentAnnotator": true,
        "runSilenceAnnotator": true
      },
      "createTime": "string",
      "name": "string",
      "requestTime": "string"
    },
    "medium": "MEDIUM_UNSPECIFIED",
    "name": "string",
    "obfuscatedUserId": "string",
    "runtimeAnnotations": [
      {
        "annotationId": "string",
        "answerFeedback": {
          "clicked": true,
          "correctnessLevel": "CORRECTNESS_LEVEL_UNSPECIFIED",
          "displayed": true
        },
        "articleSuggestion": {
          "confidenceScore": 0,
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "queryRecord": "string",
          "source": "string",
          "title": "string",
          "uri": "string"
        },
        "createTime": "string",
        "dialogflowInteraction": {
          "confidence": 0,
          "dialogflowIntentId": "string"
        },
        "endBoundary": {
          "transcriptIndex": 0,
          "wordIndex": 0
        },
        "faqAnswer": {
          "answer": "string",
          "confidenceScore": 0,
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "queryRecord": "string",
          "question": "string",
          "source": "string"
        },
        "smartComposeSuggestion": {
          "confidenceScore": 0,
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "queryRecord": "string",
          "suggestion": "string"
        },
        "smartReply": {
          "confidenceScore": 0,
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "queryRecord": "string",
          "reply": "string"
        },
        "startBoundary": {
          "transcriptIndex": 0,
          "wordIndex": 0
        }
      }
    ],
    "startTime": "string",
    "transcript": {
      "transcriptSegments": [
        {
          "channelTag": 0,
          "confidence": 0,
          "dialogflowSegmentMetadata": {
            "smartReplyAllowlistCovered": true
          },
          "languageCode": "string",
          "messageTime": "string",
          "segmentParticipant": {
            "dialogflowParticipant": "string",
            "dialogflowParticipantName": "string",
            "obfuscatedExternalUserId": "string",
            "role": "ROLE_UNSPECIFIED",
            "userId": "string"
          },
          "sentiment": {
            "magnitude": 0,
            "score": 0
          },
          "text": "string",
          "words": [
            {
              "confidence": 0,
              "endOffset": "string",
              "startOffset": "string",
              "word": "string"
            }
          ]
        }
      ]
    },
    "ttl": "string",
    "turnCount": 0,
    "updateTime": "string"
  },
  "conversationId": "string",
  "parent": "string",
  "redactionConfig": {
    "deidentifyTemplate": "string",
    "inspectTemplate": "string"
  }
}
```

Request to upload a conversation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversation|[GoogleCloudContactcenterinsightsV1Conversation](#schemagooglecloudcontactcenterinsightsv1conversation)|false|none|Required. The conversation resource to create.|
|conversationId|string|false|none|Optional. A unique ID for the new conversation. This ID will become the final component of the conversation's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z0-9-]{4,64}$`. Valid characters are `a-z-`|
|parent|string|false|none|Required. The parent resource of the conversation.|
|redactionConfig|[GoogleCloudContactcenterinsightsV1RedactionConfig](#schemagooglecloudcontactcenterinsightsv1redactionconfig)|false|none|Optional. DLP settings for transcript redaction. Optional, will default to the config specified in Settings.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1View">GoogleCloudContactcenterinsightsV1View</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1view"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1View"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1view"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1view"></a>

```json
{
  "createTime": "string",
  "displayName": "string",
  "name": "string",
  "updateTime": "string",
  "value": "string"
}
```

The View resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time at which this view was created.|
|displayName|string|false|none|The human-readable display name of the view.|
|name|string|false|none|Immutable. The resource name of the view. Format: projects/{project}/locations/{location}/views/{view}|
|updateTime|string(google-datetime)|false|read-only|Output only. The most recent time at which the view was updated.|
|value|string|false|none|String with specific view properties, must be non-empty.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1Analysis">GoogleCloudContactcenterinsightsV1alpha1Analysis</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1analysis"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1Analysis"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1analysis"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1analysis"></a>

```json
{
  "analysisResult": {
    "callAnalysisMetadata": {
      "annotations": [
        {
          "annotationEndBoundary": {
            "transcriptIndex": 0,
            "wordIndex": 0
          },
          "annotationStartBoundary": {
            "transcriptIndex": 0,
            "wordIndex": 0
          },
          "channelTag": 0,
          "entityMentionData": {
            "entityUniqueId": "string",
            "sentiment": {
              "magnitude": 0,
              "score": 0
            },
            "type": "MENTION_TYPE_UNSPECIFIED"
          },
          "holdData": {},
          "intentMatchData": {
            "intentUniqueId": "string"
          },
          "interruptionData": {},
          "issueMatchData": {
            "issueAssignment": {
              "displayName": "string",
              "issue": "string",
              "score": 0
            }
          },
          "phraseMatchData": {
            "displayName": "string",
            "phraseMatcher": "string"
          },
          "sentimentData": {
            "magnitude": 0,
            "score": 0
          },
          "silenceData": {}
        }
      ],
      "entities": {
        "property1": {
          "displayName": "string",
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "salience": 0,
          "sentiment": {
            "magnitude": 0,
            "score": 0
          },
          "type": "TYPE_UNSPECIFIED"
        },
        "property2": {
          "displayName": "string",
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "salience": 0,
          "sentiment": {
            "magnitude": 0,
            "score": 0
          },
          "type": "TYPE_UNSPECIFIED"
        }
      },
      "intents": {
        "property1": {
          "displayName": "string",
          "id": "string"
        },
        "property2": {
          "displayName": "string",
          "id": "string"
        }
      },
      "issueModelResult": {
        "issueModel": "string",
        "issues": [
          {
            "displayName": "string",
            "issue": "string",
            "score": 0
          }
        ]
      },
      "phraseMatchers": {
        "property1": {
          "displayName": "string",
          "phraseMatcher": "string"
        },
        "property2": {
          "displayName": "string",
          "phraseMatcher": "string"
        }
      },
      "sentiments": [
        {
          "channelTag": 0,
          "sentimentData": {
            "magnitude": 0,
            "score": 0
          }
        }
      ]
    },
    "endTime": "string"
  },
  "annotatorSelector": {
    "issueModels": [
      "string"
    ],
    "phraseMatchers": [
      "string"
    ],
    "runEntityAnnotator": true,
    "runIntentAnnotator": true,
    "runInterruptionAnnotator": true,
    "runIssueModelAnnotator": true,
    "runPhraseMatcherAnnotator": true,
    "runSentimentAnnotator": true,
    "runSilenceAnnotator": true
  },
  "createTime": "string",
  "name": "string",
  "requestTime": "string"
}
```

The analysis resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analysisResult|[GoogleCloudContactcenterinsightsV1alpha1AnalysisResult](#schemagooglecloudcontactcenterinsightsv1alpha1analysisresult)|false|none|Output only. The result of the analysis, which is populated when the analysis finishes.|
|annotatorSelector|[GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelector](#schemagooglecloudcontactcenterinsightsv1alpha1annotatorselector)|false|none|To select the annotators to run and the phrase matchers to use (if any). If not specified, all annotators will be run.|
|createTime|string(google-datetime)|false|read-only|Output only. The time at which the analysis was created, which occurs when the long-running operation completes.|
|name|string|false|none|Immutable. The resource name of the analysis. Format: projects/{project}/locations/{location}/conversations/{conversation}/analyses/{analysis}|
|requestTime|string(google-datetime)|false|read-only|Output only. The time at which the analysis was requested.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1AnalysisResult">GoogleCloudContactcenterinsightsV1alpha1AnalysisResult</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1analysisresult"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1AnalysisResult"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1analysisresult"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1analysisresult"></a>

```json
{
  "callAnalysisMetadata": {
    "annotations": [
      {
        "annotationEndBoundary": {
          "transcriptIndex": 0,
          "wordIndex": 0
        },
        "annotationStartBoundary": {
          "transcriptIndex": 0,
          "wordIndex": 0
        },
        "channelTag": 0,
        "entityMentionData": {
          "entityUniqueId": "string",
          "sentiment": {
            "magnitude": 0,
            "score": 0
          },
          "type": "MENTION_TYPE_UNSPECIFIED"
        },
        "holdData": {},
        "intentMatchData": {
          "intentUniqueId": "string"
        },
        "interruptionData": {},
        "issueMatchData": {
          "issueAssignment": {
            "displayName": "string",
            "issue": "string",
            "score": 0
          }
        },
        "phraseMatchData": {
          "displayName": "string",
          "phraseMatcher": "string"
        },
        "sentimentData": {
          "magnitude": 0,
          "score": 0
        },
        "silenceData": {}
      }
    ],
    "entities": {
      "property1": {
        "displayName": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "salience": 0,
        "sentiment": {
          "magnitude": 0,
          "score": 0
        },
        "type": "TYPE_UNSPECIFIED"
      },
      "property2": {
        "displayName": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "salience": 0,
        "sentiment": {
          "magnitude": 0,
          "score": 0
        },
        "type": "TYPE_UNSPECIFIED"
      }
    },
    "intents": {
      "property1": {
        "displayName": "string",
        "id": "string"
      },
      "property2": {
        "displayName": "string",
        "id": "string"
      }
    },
    "issueModelResult": {
      "issueModel": "string",
      "issues": [
        {
          "displayName": "string",
          "issue": "string",
          "score": 0
        }
      ]
    },
    "phraseMatchers": {
      "property1": {
        "displayName": "string",
        "phraseMatcher": "string"
      },
      "property2": {
        "displayName": "string",
        "phraseMatcher": "string"
      }
    },
    "sentiments": [
      {
        "channelTag": 0,
        "sentimentData": {
          "magnitude": 0,
          "score": 0
        }
      }
    ]
  },
  "endTime": "string"
}
```

The result of an analysis.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callAnalysisMetadata|[GoogleCloudContactcenterinsightsV1alpha1AnalysisResultCallAnalysisMetadata](#schemagooglecloudcontactcenterinsightsv1alpha1analysisresultcallanalysismetadata)|false|none|Call-specific metadata created by the analysis.|
|endTime|string(google-datetime)|false|none|The time at which the analysis ended.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1AnalysisResultCallAnalysisMetadata">GoogleCloudContactcenterinsightsV1alpha1AnalysisResultCallAnalysisMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1analysisresultcallanalysismetadata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1AnalysisResultCallAnalysisMetadata"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1analysisresultcallanalysismetadata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1analysisresultcallanalysismetadata"></a>

```json
{
  "annotations": [
    {
      "annotationEndBoundary": {
        "transcriptIndex": 0,
        "wordIndex": 0
      },
      "annotationStartBoundary": {
        "transcriptIndex": 0,
        "wordIndex": 0
      },
      "channelTag": 0,
      "entityMentionData": {
        "entityUniqueId": "string",
        "sentiment": {
          "magnitude": 0,
          "score": 0
        },
        "type": "MENTION_TYPE_UNSPECIFIED"
      },
      "holdData": {},
      "intentMatchData": {
        "intentUniqueId": "string"
      },
      "interruptionData": {},
      "issueMatchData": {
        "issueAssignment": {
          "displayName": "string",
          "issue": "string",
          "score": 0
        }
      },
      "phraseMatchData": {
        "displayName": "string",
        "phraseMatcher": "string"
      },
      "sentimentData": {
        "magnitude": 0,
        "score": 0
      },
      "silenceData": {}
    }
  ],
  "entities": {
    "property1": {
      "displayName": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "salience": 0,
      "sentiment": {
        "magnitude": 0,
        "score": 0
      },
      "type": "TYPE_UNSPECIFIED"
    },
    "property2": {
      "displayName": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "salience": 0,
      "sentiment": {
        "magnitude": 0,
        "score": 0
      },
      "type": "TYPE_UNSPECIFIED"
    }
  },
  "intents": {
    "property1": {
      "displayName": "string",
      "id": "string"
    },
    "property2": {
      "displayName": "string",
      "id": "string"
    }
  },
  "issueModelResult": {
    "issueModel": "string",
    "issues": [
      {
        "displayName": "string",
        "issue": "string",
        "score": 0
      }
    ]
  },
  "phraseMatchers": {
    "property1": {
      "displayName": "string",
      "phraseMatcher": "string"
    },
    "property2": {
      "displayName": "string",
      "phraseMatcher": "string"
    }
  },
  "sentiments": [
    {
      "channelTag": 0,
      "sentimentData": {
        "magnitude": 0,
        "score": 0
      }
    }
  ]
}
```

Call-specific metadata created during analysis.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|[[GoogleCloudContactcenterinsightsV1alpha1CallAnnotation](#schemagooglecloudcontactcenterinsightsv1alpha1callannotation)]|false|none|A list of call annotations that apply to this call.|
|entities|object|false|none|All the entities in the call.|
|intents|object|false|none|All the matched intents in the call.|
|issueModelResult|[GoogleCloudContactcenterinsightsV1alpha1IssueModelResult](#schemagooglecloudcontactcenterinsightsv1alpha1issuemodelresult)|false|none|Overall conversation-level issue modeling result.|
|phraseMatchers|object|false|none|All the matched phrase matchers in the call.|
|sentiments|[[GoogleCloudContactcenterinsightsV1alpha1ConversationLevelSentiment](#schemagooglecloudcontactcenterinsightsv1alpha1conversationlevelsentiment)]|false|none|Overall conversation-level sentiment for each channel of the call.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundary">GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundary</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1annotationboundary"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundary"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1annotationboundary"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1annotationboundary"></a>

```json
{
  "transcriptIndex": 0,
  "wordIndex": 0
}
```

A point in a conversation that marks the start or the end of an annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transcriptIndex|integer(int32)|false|none|The index in the sequence of transcribed pieces of the conversation where the boundary is located. This index starts at zero.|
|wordIndex|integer(int32)|false|none|The word index of this boundary with respect to the first word in the transcript piece. This index starts at zero.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelector">GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelector</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1annotatorselector"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelector"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1annotatorselector"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1annotatorselector"></a>

```json
{
  "issueModels": [
    "string"
  ],
  "phraseMatchers": [
    "string"
  ],
  "runEntityAnnotator": true,
  "runIntentAnnotator": true,
  "runInterruptionAnnotator": true,
  "runIssueModelAnnotator": true,
  "runPhraseMatcherAnnotator": true,
  "runSentimentAnnotator": true,
  "runSilenceAnnotator": true
}
```

Selector of all available annotators and phrase matchers to run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issueModels|[string]|false|none|The issue model to run. If not provided, the most recently deployed topic model will be used. The provided issue model will only be used for inference if the issue model is deployed and if run_issue_model_annotator is set to true. If more than one issue model is provided, only the first provided issue model will be used for inference.|
|phraseMatchers|[string]|false|none|The list of phrase matchers to run. If not provided, all active phrase matchers will be used. If inactive phrase matchers are provided, they will not be used. Phrase matchers will be run only if run_phrase_matcher_annotator is set to true. Format: projects/{project}/locations/{location}/phraseMatchers/{phrase_matcher}|
|runEntityAnnotator|boolean|false|none|Whether to run the entity annotator.|
|runIntentAnnotator|boolean|false|none|Whether to run the intent annotator.|
|runInterruptionAnnotator|boolean|false|none|Whether to run the interruption annotator.|
|runIssueModelAnnotator|boolean|false|none|Whether to run the issue model annotator. A model should have already been deployed for this to take effect.|
|runPhraseMatcherAnnotator|boolean|false|none|Whether to run the active phrase matcher annotator(s).|
|runSentimentAnnotator|boolean|false|none|Whether to run the sentiment annotator.|
|runSilenceAnnotator|boolean|false|none|Whether to run the silence annotator.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1AnswerFeedback">GoogleCloudContactcenterinsightsV1alpha1AnswerFeedback</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1answerfeedback"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1AnswerFeedback"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1answerfeedback"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1answerfeedback"></a>

```json
{
  "clicked": true,
  "correctnessLevel": "CORRECTNESS_LEVEL_UNSPECIFIED",
  "displayed": true
}
```

The feedback that the customer has about a certain answer in the conversation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clicked|boolean|false|none|Indicates whether an answer or item was clicked by the human agent.|
|correctnessLevel|string|false|none|The correctness level of an answer.|
|displayed|boolean|false|none|Indicates whether an answer or item was displayed to the human agent in the agent desktop UI.|

#### Enumerated Values

|Property|Value|
|---|---|
|correctnessLevel|CORRECTNESS_LEVEL_UNSPECIFIED|
|correctnessLevel|NOT_CORRECT|
|correctnessLevel|PARTIALLY_CORRECT|
|correctnessLevel|FULLY_CORRECT|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1ArticleSuggestionData">GoogleCloudContactcenterinsightsV1alpha1ArticleSuggestionData</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1articlesuggestiondata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1ArticleSuggestionData"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1articlesuggestiondata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1articlesuggestiondata"></a>

```json
{
  "confidenceScore": 0,
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "queryRecord": "string",
  "source": "string",
  "title": "string",
  "uri": "string"
}
```

Agent Assist Article Suggestion data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidenceScore|number(float)|false|none|The system's confidence score that this article is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain).|
|metadata|object|false|none|Map that contains metadata about the Article Suggestion and the document that it originates from.|
|queryRecord|string|false|none|The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record}|
|source|string|false|none|The knowledge document that this answer was extracted from. Format: projects/{project}/knowledgeBases/{knowledge_base}/documents/{document}|
|title|string|false|none|Article title.|
|uri|string|false|none|Article URI.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsMetadata">GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1bulkanalyzeconversationsmetadata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsMetadata"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1bulkanalyzeconversationsmetadata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1bulkanalyzeconversationsmetadata"></a>

```json
{
  "completedAnalysesCount": 0,
  "createTime": "string",
  "endTime": "string",
  "failedAnalysesCount": 0,
  "request": {
    "analysisPercentage": 0,
    "annotatorSelector": {
      "issueModels": [
        "string"
      ],
      "phraseMatchers": [
        "string"
      ],
      "runEntityAnnotator": true,
      "runIntentAnnotator": true,
      "runInterruptionAnnotator": true,
      "runIssueModelAnnotator": true,
      "runPhraseMatcherAnnotator": true,
      "runSentimentAnnotator": true,
      "runSilenceAnnotator": true
    },
    "filter": "string",
    "parent": "string"
  },
  "totalRequestedAnalysesCount": 0
}
```

The metadata for a bulk analyze conversations operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAnalysesCount|integer(int32)|false|none|The number of requested analyses that have completed successfully so far.|
|createTime|string(google-datetime)|false|none|The time the operation was created.|
|endTime|string(google-datetime)|false|none|The time the operation finished running.|
|failedAnalysesCount|integer(int32)|false|none|The number of requested analyses that have failed so far.|
|request|[GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsRequest](#schemagooglecloudcontactcenterinsightsv1alpha1bulkanalyzeconversationsrequest)|false|none|The original request for bulk analyze.|
|totalRequestedAnalysesCount|integer(int32)|false|none|Total number of analyses requested. Computed by the number of conversations returned by `filter` multiplied by `analysis_percentage` in the request.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsRequest">GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1bulkanalyzeconversationsrequest"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsRequest"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1bulkanalyzeconversationsrequest"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1bulkanalyzeconversationsrequest"></a>

```json
{
  "analysisPercentage": 0,
  "annotatorSelector": {
    "issueModels": [
      "string"
    ],
    "phraseMatchers": [
      "string"
    ],
    "runEntityAnnotator": true,
    "runIntentAnnotator": true,
    "runInterruptionAnnotator": true,
    "runIssueModelAnnotator": true,
    "runPhraseMatcherAnnotator": true,
    "runSentimentAnnotator": true,
    "runSilenceAnnotator": true
  },
  "filter": "string",
  "parent": "string"
}
```

The request to analyze conversations in bulk.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analysisPercentage|number(float)|false|none|Required. Percentage of selected conversation to analyze, between [0, 100].|
|annotatorSelector|[GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelector](#schemagooglecloudcontactcenterinsightsv1alpha1annotatorselector)|false|none|To select the annotators to run and the phrase matchers to use (if any). If not specified, all annotators will be run.|
|filter|string|false|none|Required. Filter used to select the subset of conversations to analyze.|
|parent|string|false|none|Required. The parent resource to create analyses in.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsResponse">GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1bulkanalyzeconversationsresponse"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsResponse"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1bulkanalyzeconversationsresponse"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1bulkanalyzeconversationsresponse"></a>

```json
{
  "failedAnalysisCount": 0,
  "successfulAnalysisCount": 0
}
```

The response for a bulk analyze conversations operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failedAnalysisCount|integer(int32)|false|none|Count of failed analyses.|
|successfulAnalysisCount|integer(int32)|false|none|Count of successful analyses.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1CallAnnotation">GoogleCloudContactcenterinsightsV1alpha1CallAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1callannotation"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1CallAnnotation"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1callannotation"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1callannotation"></a>

```json
{
  "annotationEndBoundary": {
    "transcriptIndex": 0,
    "wordIndex": 0
  },
  "annotationStartBoundary": {
    "transcriptIndex": 0,
    "wordIndex": 0
  },
  "channelTag": 0,
  "entityMentionData": {
    "entityUniqueId": "string",
    "sentiment": {
      "magnitude": 0,
      "score": 0
    },
    "type": "MENTION_TYPE_UNSPECIFIED"
  },
  "holdData": {},
  "intentMatchData": {
    "intentUniqueId": "string"
  },
  "interruptionData": {},
  "issueMatchData": {
    "issueAssignment": {
      "displayName": "string",
      "issue": "string",
      "score": 0
    }
  },
  "phraseMatchData": {
    "displayName": "string",
    "phraseMatcher": "string"
  },
  "sentimentData": {
    "magnitude": 0,
    "score": 0
  },
  "silenceData": {}
}
```

A piece of metadata that applies to a window of a call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationEndBoundary|[GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundary](#schemagooglecloudcontactcenterinsightsv1alpha1annotationboundary)|false|none|The boundary in the conversation where the annotation ends, inclusive.|
|annotationStartBoundary|[GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundary](#schemagooglecloudcontactcenterinsightsv1alpha1annotationboundary)|false|none|The boundary in the conversation where the annotation starts, inclusive.|
|channelTag|integer(int32)|false|none|The channel of the audio where the annotation occurs. For single-channel audio, this field is not populated.|
|entityMentionData|[GoogleCloudContactcenterinsightsV1alpha1EntityMentionData](#schemagooglecloudcontactcenterinsightsv1alpha1entitymentiondata)|false|none|Data specifying an entity mention.|
|holdData|[GoogleCloudContactcenterinsightsV1alpha1HoldData](#schemagooglecloudcontactcenterinsightsv1alpha1holddata)|false|none|Data specifying a hold.|
|intentMatchData|[GoogleCloudContactcenterinsightsV1alpha1IntentMatchData](#schemagooglecloudcontactcenterinsightsv1alpha1intentmatchdata)|false|none|Data specifying an intent match.|
|interruptionData|[GoogleCloudContactcenterinsightsV1alpha1InterruptionData](#schemagooglecloudcontactcenterinsightsv1alpha1interruptiondata)|false|none|Data specifying an interruption.|
|issueMatchData|[GoogleCloudContactcenterinsightsV1alpha1IssueMatchData](#schemagooglecloudcontactcenterinsightsv1alpha1issuematchdata)|false|none|Data specifying an issue match.|
|phraseMatchData|[GoogleCloudContactcenterinsightsV1alpha1PhraseMatchData](#schemagooglecloudcontactcenterinsightsv1alpha1phrasematchdata)|false|none|Data specifying a phrase match.|
|sentimentData|[GoogleCloudContactcenterinsightsV1alpha1SentimentData](#schemagooglecloudcontactcenterinsightsv1alpha1sentimentdata)|false|none|Data specifying sentiment.|
|silenceData|[GoogleCloudContactcenterinsightsV1alpha1SilenceData](#schemagooglecloudcontactcenterinsightsv1alpha1silencedata)|false|none|Data specifying silence.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1Conversation">GoogleCloudContactcenterinsightsV1alpha1Conversation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1conversation"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1Conversation"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1conversation"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1conversation"></a>

```json
{
  "agentId": "string",
  "callMetadata": {
    "agentChannel": 0,
    "customerChannel": 0
  },
  "createTime": "string",
  "dataSource": {
    "dialogflowSource": {
      "audioUri": "string",
      "dialogflowConversation": "string"
    },
    "gcsSource": {
      "audioUri": "string",
      "transcriptUri": "string"
    }
  },
  "dialogflowIntents": {
    "property1": {
      "displayName": "string"
    },
    "property2": {
      "displayName": "string"
    }
  },
  "duration": "string",
  "expireTime": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "languageCode": "string",
  "latestAnalysis": {
    "analysisResult": {
      "callAnalysisMetadata": {
        "annotations": [
          {
            "annotationEndBoundary": {
              "transcriptIndex": 0,
              "wordIndex": 0
            },
            "annotationStartBoundary": {
              "transcriptIndex": 0,
              "wordIndex": 0
            },
            "channelTag": 0,
            "entityMentionData": {
              "entityUniqueId": "string",
              "sentiment": {
                "magnitude": 0,
                "score": 0
              },
              "type": "MENTION_TYPE_UNSPECIFIED"
            },
            "holdData": {},
            "intentMatchData": {
              "intentUniqueId": "string"
            },
            "interruptionData": {},
            "issueMatchData": {
              "issueAssignment": {
                "displayName": "string",
                "issue": "string",
                "score": 0
              }
            },
            "phraseMatchData": {
              "displayName": "string",
              "phraseMatcher": "string"
            },
            "sentimentData": {
              "magnitude": 0,
              "score": 0
            },
            "silenceData": {}
          }
        ],
        "entities": {
          "property1": {
            "displayName": "string",
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "salience": 0,
            "sentiment": {
              "magnitude": 0,
              "score": 0
            },
            "type": "TYPE_UNSPECIFIED"
          },
          "property2": {
            "displayName": "string",
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "salience": 0,
            "sentiment": {
              "magnitude": 0,
              "score": 0
            },
            "type": "TYPE_UNSPECIFIED"
          }
        },
        "intents": {
          "property1": {
            "displayName": "string",
            "id": "string"
          },
          "property2": {
            "displayName": "string",
            "id": "string"
          }
        },
        "issueModelResult": {
          "issueModel": "string",
          "issues": [
            {
              "displayName": "string",
              "issue": "string",
              "score": 0
            }
          ]
        },
        "phraseMatchers": {
          "property1": {
            "displayName": "string",
            "phraseMatcher": "string"
          },
          "property2": {
            "displayName": "string",
            "phraseMatcher": "string"
          }
        },
        "sentiments": [
          {
            "channelTag": 0,
            "sentimentData": {
              "magnitude": 0,
              "score": 0
            }
          }
        ]
      },
      "endTime": "string"
    },
    "annotatorSelector": {
      "issueModels": [
        "string"
      ],
      "phraseMatchers": [
        "string"
      ],
      "runEntityAnnotator": true,
      "runIntentAnnotator": true,
      "runInterruptionAnnotator": true,
      "runIssueModelAnnotator": true,
      "runPhraseMatcherAnnotator": true,
      "runSentimentAnnotator": true,
      "runSilenceAnnotator": true
    },
    "createTime": "string",
    "name": "string",
    "requestTime": "string"
  },
  "medium": "MEDIUM_UNSPECIFIED",
  "name": "string",
  "obfuscatedUserId": "string",
  "runtimeAnnotations": [
    {
      "annotationId": "string",
      "answerFeedback": {
        "clicked": true,
        "correctnessLevel": "CORRECTNESS_LEVEL_UNSPECIFIED",
        "displayed": true
      },
      "articleSuggestion": {
        "confidenceScore": 0,
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "queryRecord": "string",
        "source": "string",
        "title": "string",
        "uri": "string"
      },
      "createTime": "string",
      "dialogflowInteraction": {
        "confidence": 0,
        "dialogflowIntentId": "string"
      },
      "endBoundary": {
        "transcriptIndex": 0,
        "wordIndex": 0
      },
      "faqAnswer": {
        "answer": "string",
        "confidenceScore": 0,
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "queryRecord": "string",
        "question": "string",
        "source": "string"
      },
      "smartComposeSuggestion": {
        "confidenceScore": 0,
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "queryRecord": "string",
        "suggestion": "string"
      },
      "smartReply": {
        "confidenceScore": 0,
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "queryRecord": "string",
        "reply": "string"
      },
      "startBoundary": {
        "transcriptIndex": 0,
        "wordIndex": 0
      }
    }
  ],
  "startTime": "string",
  "transcript": {
    "transcriptSegments": [
      {
        "channelTag": 0,
        "confidence": 0,
        "dialogflowSegmentMetadata": {
          "smartReplyAllowlistCovered": true
        },
        "languageCode": "string",
        "messageTime": "string",
        "segmentParticipant": {
          "dialogflowParticipant": "string",
          "dialogflowParticipantName": "string",
          "obfuscatedExternalUserId": "string",
          "role": "ROLE_UNSPECIFIED",
          "userId": "string"
        },
        "sentiment": {
          "magnitude": 0,
          "score": 0
        },
        "text": "string",
        "words": [
          {
            "confidence": 0,
            "endOffset": "string",
            "startOffset": "string",
            "word": "string"
          }
        ]
      }
    ]
  },
  "ttl": "string",
  "turnCount": 0,
  "updateTime": "string"
}
```

The conversation resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentId|string|false|none|An opaque, user-specified string representing the human agent who handled the conversation.|
|callMetadata|[GoogleCloudContactcenterinsightsV1alpha1ConversationCallMetadata](#schemagooglecloudcontactcenterinsightsv1alpha1conversationcallmetadata)|false|none|Call-specific metadata.|
|createTime|string(google-datetime)|false|read-only|Output only. The time at which the conversation was created.|
|dataSource|[GoogleCloudContactcenterinsightsV1alpha1ConversationDataSource](#schemagooglecloudcontactcenterinsightsv1alpha1conversationdatasource)|false|none|The source of the audio and transcription for the conversation.|
|dialogflowIntents|object|false|read-only|Output only. All the matched Dialogflow intents in the call. The key corresponds to a Dialogflow intent, format: projects/{project}/agent/{agent}/intents/{intent}|
|duration|string(google-duration)|false|read-only|Output only. The duration of the conversation.|
|expireTime|string(google-datetime)|false|none|The time at which this conversation should expire. After this time, the conversation data and any associated analyses will be deleted.|
|labels|object|false|none|A map for the user to specify any custom fields. A maximum of 20 labels per conversation is allowed, with a maximum of 256 characters per entry.|
|languageCode|string|false|none|A user-specified language code for the conversation.|
|latestAnalysis|[GoogleCloudContactcenterinsightsV1alpha1Analysis](#schemagooglecloudcontactcenterinsightsv1alpha1analysis)|false|none|Output only. The conversation's latest analysis, if one exists.|
|medium|string|false|none|Immutable. The conversation medium, if unspecified will default to PHONE_CALL.|
|name|string|false|none|Immutable. The resource name of the conversation. Format: projects/{project}/locations/{location}/conversations/{conversation}|
|obfuscatedUserId|string|false|none|Obfuscated user ID which the customer sent to us.|
|runtimeAnnotations|[[GoogleCloudContactcenterinsightsV1alpha1RuntimeAnnotation](#schemagooglecloudcontactcenterinsightsv1alpha1runtimeannotation)]|false|read-only|Output only. The annotations that were generated during the customer and agent interaction.|
|startTime|string(google-datetime)|false|none|The time at which the conversation started.|
|transcript|[GoogleCloudContactcenterinsightsV1alpha1ConversationTranscript](#schemagooglecloudcontactcenterinsightsv1alpha1conversationtranscript)|false|none|Output only. The conversation transcript.|
|ttl|string(google-duration)|false|none|Input only. The TTL for this resource. If specified, then this TTL will be used to calculate the expire time.|
|turnCount|integer(int32)|false|read-only|Output only. The number of turns in the conversation.|
|updateTime|string(google-datetime)|false|read-only|Output only. The most recent time at which the conversation was updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|medium|MEDIUM_UNSPECIFIED|
|medium|PHONE_CALL|
|medium|CHAT|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1ConversationCallMetadata">GoogleCloudContactcenterinsightsV1alpha1ConversationCallMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1conversationcallmetadata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1ConversationCallMetadata"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1conversationcallmetadata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1conversationcallmetadata"></a>

```json
{
  "agentChannel": 0,
  "customerChannel": 0
}
```

Call-specific metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentChannel|integer(int32)|false|none|The audio channel that contains the agent.|
|customerChannel|integer(int32)|false|none|The audio channel that contains the customer.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1ConversationDataSource">GoogleCloudContactcenterinsightsV1alpha1ConversationDataSource</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1conversationdatasource"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1ConversationDataSource"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1conversationdatasource"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1conversationdatasource"></a>

```json
{
  "dialogflowSource": {
    "audioUri": "string",
    "dialogflowConversation": "string"
  },
  "gcsSource": {
    "audioUri": "string",
    "transcriptUri": "string"
  }
}
```

The conversation source, which is a combination of transcript and audio.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dialogflowSource|[GoogleCloudContactcenterinsightsV1alpha1DialogflowSource](#schemagooglecloudcontactcenterinsightsv1alpha1dialogflowsource)|false|none|The source when the conversation comes from Dialogflow.|
|gcsSource|[GoogleCloudContactcenterinsightsV1alpha1GcsSource](#schemagooglecloudcontactcenterinsightsv1alpha1gcssource)|false|none|A Cloud Storage location specification for the audio and transcript.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1ConversationLevelSentiment">GoogleCloudContactcenterinsightsV1alpha1ConversationLevelSentiment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1conversationlevelsentiment"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1ConversationLevelSentiment"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1conversationlevelsentiment"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1conversationlevelsentiment"></a>

```json
{
  "channelTag": 0,
  "sentimentData": {
    "magnitude": 0,
    "score": 0
  }
}
```

One channel of conversation-level sentiment data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelTag|integer(int32)|false|none|The channel of the audio that the data applies to.|
|sentimentData|[GoogleCloudContactcenterinsightsV1alpha1SentimentData](#schemagooglecloudcontactcenterinsightsv1alpha1sentimentdata)|false|none|Data specifying sentiment.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1ConversationParticipant">GoogleCloudContactcenterinsightsV1alpha1ConversationParticipant</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1conversationparticipant"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1ConversationParticipant"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1conversationparticipant"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1conversationparticipant"></a>

```json
{
  "dialogflowParticipant": "string",
  "dialogflowParticipantName": "string",
  "obfuscatedExternalUserId": "string",
  "role": "ROLE_UNSPECIFIED",
  "userId": "string"
}
```

The call participant speaking for a given utterance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dialogflowParticipant|string|false|none|Deprecated. Use `dialogflow_participant_name` instead. The name of the Dialogflow participant. Format: projects/{project}/locations/{location}/conversations/{conversation}/participants/{participant}|
|dialogflowParticipantName|string|false|none|The name of the participant provided by Dialogflow. Format: projects/{project}/locations/{location}/conversations/{conversation}/participants/{participant}|
|obfuscatedExternalUserId|string|false|none|Obfuscated user ID from Dialogflow.|
|role|string|false|none|The role of the participant.|
|userId|string|false|none|A user-specified ID representing the participant.|

#### Enumerated Values

|Property|Value|
|---|---|
|role|ROLE_UNSPECIFIED|
|role|HUMAN_AGENT|
|role|AUTOMATED_AGENT|
|role|END_USER|
|role|ANY_AGENT|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1ConversationTranscript">GoogleCloudContactcenterinsightsV1alpha1ConversationTranscript</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1conversationtranscript"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1ConversationTranscript"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1conversationtranscript"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1conversationtranscript"></a>

```json
{
  "transcriptSegments": [
    {
      "channelTag": 0,
      "confidence": 0,
      "dialogflowSegmentMetadata": {
        "smartReplyAllowlistCovered": true
      },
      "languageCode": "string",
      "messageTime": "string",
      "segmentParticipant": {
        "dialogflowParticipant": "string",
        "dialogflowParticipantName": "string",
        "obfuscatedExternalUserId": "string",
        "role": "ROLE_UNSPECIFIED",
        "userId": "string"
      },
      "sentiment": {
        "magnitude": 0,
        "score": 0
      },
      "text": "string",
      "words": [
        {
          "confidence": 0,
          "endOffset": "string",
          "startOffset": "string",
          "word": "string"
        }
      ]
    }
  ]
}
```

A message representing the transcript of a conversation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transcriptSegments|[[GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegment](#schemagooglecloudcontactcenterinsightsv1alpha1conversationtranscripttranscriptsegment)]|false|none|A list of sequential transcript segments that comprise the conversation.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegment">GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1conversationtranscripttranscriptsegment"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegment"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1conversationtranscripttranscriptsegment"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1conversationtranscripttranscriptsegment"></a>

```json
{
  "channelTag": 0,
  "confidence": 0,
  "dialogflowSegmentMetadata": {
    "smartReplyAllowlistCovered": true
  },
  "languageCode": "string",
  "messageTime": "string",
  "segmentParticipant": {
    "dialogflowParticipant": "string",
    "dialogflowParticipantName": "string",
    "obfuscatedExternalUserId": "string",
    "role": "ROLE_UNSPECIFIED",
    "userId": "string"
  },
  "sentiment": {
    "magnitude": 0,
    "score": 0
  },
  "text": "string",
  "words": [
    {
      "confidence": 0,
      "endOffset": "string",
      "startOffset": "string",
      "word": "string"
    }
  ]
}
```

A segment of a full transcript.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelTag|integer(int32)|false|none|For conversations derived from multi-channel audio, this is the channel number corresponding to the audio from that channel. For audioChannelCount = N, its output values can range from '1' to 'N'. A channel tag of 0 indicates that the audio is mono.|
|confidence|number(float)|false|none|A confidence estimate between 0.0 and 1.0 of the fidelity of this segment. A default value of 0.0 indicates that the value is unset.|
|dialogflowSegmentMetadata|[GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata](#schemagooglecloudcontactcenterinsightsv1alpha1conversationtranscripttranscriptsegmentdialogflowsegmentmetadata)|false|none|CCAI metadata relating to the current transcript segment.|
|languageCode|string|false|none|The language code of this segment as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US".|
|messageTime|string(google-datetime)|false|none|The time that the message occurred, if provided.|
|segmentParticipant|[GoogleCloudContactcenterinsightsV1alpha1ConversationParticipant](#schemagooglecloudcontactcenterinsightsv1alpha1conversationparticipant)|false|none|The participant of this segment.|
|sentiment|[GoogleCloudContactcenterinsightsV1alpha1SentimentData](#schemagooglecloudcontactcenterinsightsv1alpha1sentimentdata)|false|none|The sentiment for this transcript segment.|
|text|string|false|none|The text of this segment.|
|words|[[GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentWordInfo](#schemagooglecloudcontactcenterinsightsv1alpha1conversationtranscripttranscriptsegmentwordinfo)]|false|none|A list of the word-specific information for each word in the segment.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata">GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1conversationtranscripttranscriptsegmentdialogflowsegmentmetadata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1conversationtranscripttranscriptsegmentdialogflowsegmentmetadata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1conversationtranscripttranscriptsegmentdialogflowsegmentmetadata"></a>

```json
{
  "smartReplyAllowlistCovered": true
}
```

Metadata from Dialogflow relating to the current transcript segment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|smartReplyAllowlistCovered|boolean|false|none|Whether the transcript segment was covered under the configured smart reply allowlist in Agent Assist.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentWordInfo">GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentWordInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1conversationtranscripttranscriptsegmentwordinfo"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentWordInfo"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1conversationtranscripttranscriptsegmentwordinfo"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1conversationtranscripttranscriptsegmentwordinfo"></a>

```json
{
  "confidence": 0,
  "endOffset": "string",
  "startOffset": "string",
  "word": "string"
}
```

Word-level info for words in a transcript.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|A confidence estimate between 0.0 and 1.0 of the fidelity of this word. A default value of 0.0 indicates that the value is unset.|
|endOffset|string(google-duration)|false|none|Time offset of the end of this word relative to the beginning of the total conversation.|
|startOffset|string(google-duration)|false|none|Time offset of the start of this word relative to the beginning of the total conversation.|
|word|string|false|none|The word itself. Includes punctuation marks that surround the word.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1CreateAnalysisOperationMetadata">GoogleCloudContactcenterinsightsV1alpha1CreateAnalysisOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1createanalysisoperationmetadata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1CreateAnalysisOperationMetadata"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1createanalysisoperationmetadata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1createanalysisoperationmetadata"></a>

```json
{
  "annotatorSelector": {
    "issueModels": [
      "string"
    ],
    "phraseMatchers": [
      "string"
    ],
    "runEntityAnnotator": true,
    "runIntentAnnotator": true,
    "runInterruptionAnnotator": true,
    "runIssueModelAnnotator": true,
    "runPhraseMatcherAnnotator": true,
    "runSentimentAnnotator": true,
    "runSilenceAnnotator": true
  },
  "conversation": "string",
  "createTime": "string",
  "endTime": "string"
}
```

Metadata for a create analysis operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotatorSelector|[GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelector](#schemagooglecloudcontactcenterinsightsv1alpha1annotatorselector)|false|none|Output only. The annotator selector used for the analysis (if any).|
|conversation|string|false|read-only|Output only. The Conversation that this Analysis Operation belongs to.|
|createTime|string(google-datetime)|false|read-only|Output only. The time the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. The time the operation finished running.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1CreateIssueModelMetadata">GoogleCloudContactcenterinsightsV1alpha1CreateIssueModelMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1createissuemodelmetadata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1CreateIssueModelMetadata"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1createissuemodelmetadata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1createissuemodelmetadata"></a>

```json
{
  "createTime": "string",
  "endTime": "string",
  "request": {
    "issueModel": {
      "createTime": "string",
      "displayName": "string",
      "inputDataConfig": {
        "filter": "string",
        "medium": "MEDIUM_UNSPECIFIED",
        "trainingConversationsCount": "string"
      },
      "issueCount": "string",
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "trainingStats": {
        "analyzedConversationsCount": "string",
        "issueStats": {
          "property1": {
            "displayName": "string",
            "issue": "string",
            "labeledConversationsCount": "string"
          },
          "property2": {
            "displayName": "string",
            "issue": "string",
            "labeledConversationsCount": "string"
          }
        },
        "unclassifiedConversationsCount": "string"
      },
      "updateTime": "string"
    },
    "parent": "string"
  }
}
```

Metadata for creating an issue model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. The time the operation finished running.|
|request|[GoogleCloudContactcenterinsightsV1alpha1CreateIssueModelRequest](#schemagooglecloudcontactcenterinsightsv1alpha1createissuemodelrequest)|false|none|The original request for creation.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1CreateIssueModelRequest">GoogleCloudContactcenterinsightsV1alpha1CreateIssueModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1createissuemodelrequest"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1CreateIssueModelRequest"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1createissuemodelrequest"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1createissuemodelrequest"></a>

```json
{
  "issueModel": {
    "createTime": "string",
    "displayName": "string",
    "inputDataConfig": {
      "filter": "string",
      "medium": "MEDIUM_UNSPECIFIED",
      "trainingConversationsCount": "string"
    },
    "issueCount": "string",
    "name": "string",
    "state": "STATE_UNSPECIFIED",
    "trainingStats": {
      "analyzedConversationsCount": "string",
      "issueStats": {
        "property1": {
          "displayName": "string",
          "issue": "string",
          "labeledConversationsCount": "string"
        },
        "property2": {
          "displayName": "string",
          "issue": "string",
          "labeledConversationsCount": "string"
        }
      },
      "unclassifiedConversationsCount": "string"
    },
    "updateTime": "string"
  },
  "parent": "string"
}
```

The request to create an issue model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issueModel|[GoogleCloudContactcenterinsightsV1alpha1IssueModel](#schemagooglecloudcontactcenterinsightsv1alpha1issuemodel)|false|none|Required. The issue model to create.|
|parent|string|false|none|Required. The parent resource of the issue model.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1DeleteIssueModelMetadata">GoogleCloudContactcenterinsightsV1alpha1DeleteIssueModelMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1deleteissuemodelmetadata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1DeleteIssueModelMetadata"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1deleteissuemodelmetadata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1deleteissuemodelmetadata"></a>

```json
{
  "createTime": "string",
  "endTime": "string",
  "request": {
    "name": "string"
  }
}
```

Metadata for deleting an issue model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. The time the operation finished running.|
|request|[GoogleCloudContactcenterinsightsV1alpha1DeleteIssueModelRequest](#schemagooglecloudcontactcenterinsightsv1alpha1deleteissuemodelrequest)|false|none|The original request for deletion.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1DeleteIssueModelRequest">GoogleCloudContactcenterinsightsV1alpha1DeleteIssueModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1deleteissuemodelrequest"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1DeleteIssueModelRequest"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1deleteissuemodelrequest"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1deleteissuemodelrequest"></a>

```json
{
  "name": "string"
}
```

The request to delete an issue model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Required. The name of the issue model to delete.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1DeployIssueModelMetadata">GoogleCloudContactcenterinsightsV1alpha1DeployIssueModelMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1deployissuemodelmetadata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1DeployIssueModelMetadata"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1deployissuemodelmetadata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1deployissuemodelmetadata"></a>

```json
{
  "createTime": "string",
  "endTime": "string",
  "request": {
    "name": "string"
  }
}
```

Metadata for deploying an issue model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. The time the operation finished running.|
|request|[GoogleCloudContactcenterinsightsV1alpha1DeployIssueModelRequest](#schemagooglecloudcontactcenterinsightsv1alpha1deployissuemodelrequest)|false|none|The original request for deployment.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1DeployIssueModelRequest">GoogleCloudContactcenterinsightsV1alpha1DeployIssueModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1deployissuemodelrequest"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1DeployIssueModelRequest"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1deployissuemodelrequest"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1deployissuemodelrequest"></a>

```json
{
  "name": "string"
}
```

The request to deploy an issue model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Required. The issue model to deploy.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1DeployIssueModelResponse">GoogleCloudContactcenterinsightsV1alpha1DeployIssueModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1deployissuemodelresponse"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1DeployIssueModelResponse"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1deployissuemodelresponse"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1deployissuemodelresponse"></a>

```json
{}
```

The response to deploy an issue model.

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1DialogflowIntent">GoogleCloudContactcenterinsightsV1alpha1DialogflowIntent</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1dialogflowintent"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1DialogflowIntent"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1dialogflowintent"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1dialogflowintent"></a>

```json
{
  "displayName": "string"
}
```

The data for a Dialogflow intent. Represents a detected intent in the conversation, e.g. MAKES_PROMISE.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The human-readable name of the intent.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1DialogflowInteractionData">GoogleCloudContactcenterinsightsV1alpha1DialogflowInteractionData</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1dialogflowinteractiondata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1DialogflowInteractionData"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1dialogflowinteractiondata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1dialogflowinteractiondata"></a>

```json
{
  "confidence": 0,
  "dialogflowIntentId": "string"
}
```

Dialogflow interaction data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|The confidence of the match ranging from 0.0 (completely uncertain) to 1.0 (completely certain).|
|dialogflowIntentId|string|false|none|The Dialogflow intent resource path. Format: projects/{project}/agent/{agent}/intents/{intent}|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1DialogflowSource">GoogleCloudContactcenterinsightsV1alpha1DialogflowSource</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1dialogflowsource"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1DialogflowSource"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1dialogflowsource"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1dialogflowsource"></a>

```json
{
  "audioUri": "string",
  "dialogflowConversation": "string"
}
```

A Dialogflow source of conversation data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audioUri|string|false|none|Cloud Storage URI that points to a file that contains the conversation audio.|
|dialogflowConversation|string|false|read-only|Output only. The name of the Dialogflow conversation that this conversation resource is derived from. Format: projects/{project}/locations/{location}/conversations/{conversation}|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1Entity">GoogleCloudContactcenterinsightsV1alpha1Entity</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1entity"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1Entity"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1entity"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1entity"></a>

```json
{
  "displayName": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "salience": 0,
  "sentiment": {
    "magnitude": 0,
    "score": 0
  },
  "type": "TYPE_UNSPECIFIED"
}
```

The data for an entity annotation. Represents a phrase in the conversation that is a known entity, such as a person, an organization, or location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The representative name for the entity.|
|metadata|object|false|none|Metadata associated with the entity. For most entity types, the metadata is a Wikipedia URL (`wikipedia_url`) and Knowledge Graph MID (`mid`), if they are available. For the metadata associated with other entity types, see the Type table below.|
|salience|number(float)|false|none|The salience score associated with the entity in the [0, 1.0] range. The salience score for an entity provides information about the importance or centrality of that entity to the entire document text. Scores closer to 0 are less salient, while scores closer to 1.0 are highly salient.|
|sentiment|[GoogleCloudContactcenterinsightsV1alpha1SentimentData](#schemagooglecloudcontactcenterinsightsv1alpha1sentimentdata)|false|none|The aggregate sentiment expressed for this entity in the conversation.|
|type|string|false|none|The entity type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|PERSON|
|type|LOCATION|
|type|ORGANIZATION|
|type|EVENT|
|type|WORK_OF_ART|
|type|CONSUMER_GOOD|
|type|OTHER|
|type|PHONE_NUMBER|
|type|ADDRESS|
|type|DATE|
|type|NUMBER|
|type|PRICE|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1EntityMentionData">GoogleCloudContactcenterinsightsV1alpha1EntityMentionData</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1entitymentiondata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1EntityMentionData"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1entitymentiondata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1entitymentiondata"></a>

```json
{
  "entityUniqueId": "string",
  "sentiment": {
    "magnitude": 0,
    "score": 0
  },
  "type": "MENTION_TYPE_UNSPECIFIED"
}
```

The data for an entity mention annotation. This represents a mention of an `Entity` in the conversation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entityUniqueId|string|false|none|The key of this entity in conversation entities. Can be used to retrieve the exact `Entity` this mention is attached to.|
|sentiment|[GoogleCloudContactcenterinsightsV1alpha1SentimentData](#schemagooglecloudcontactcenterinsightsv1alpha1sentimentdata)|false|none|Sentiment expressed for this mention of the entity.|
|type|string|false|none|The type of the entity mention.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|MENTION_TYPE_UNSPECIFIED|
|type|PROPER|
|type|COMMON|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataMetadata">GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1exportinsightsdatametadata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataMetadata"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1exportinsightsdatametadata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1exportinsightsdatametadata"></a>

```json
{
  "createTime": "string",
  "endTime": "string",
  "partialErrors": [
    {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    }
  ],
  "request": {
    "bigQueryDestination": {
      "dataset": "string",
      "projectId": "string",
      "table": "string"
    },
    "filter": "string",
    "kmsKey": "string",
    "parent": "string",
    "writeDisposition": "WRITE_DISPOSITION_UNSPECIFIED"
  }
}
```

Metadata for an export insights operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. The time the operation finished running.|
|partialErrors|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|Partial errors during export operation that might cause the operation output to be incomplete.|
|request|[GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataRequest](#schemagooglecloudcontactcenterinsightsv1alpha1exportinsightsdatarequest)|false|none|The original request for export.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataRequest">GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1exportinsightsdatarequest"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataRequest"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1exportinsightsdatarequest"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1exportinsightsdatarequest"></a>

```json
{
  "bigQueryDestination": {
    "dataset": "string",
    "projectId": "string",
    "table": "string"
  },
  "filter": "string",
  "kmsKey": "string",
  "parent": "string",
  "writeDisposition": "WRITE_DISPOSITION_UNSPECIFIED"
}
```

The request to export insights.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigQueryDestination|[GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataRequestBigQueryDestination](#schemagooglecloudcontactcenterinsightsv1alpha1exportinsightsdatarequestbigquerydestination)|false|none|Specified if sink is a BigQuery table.|
|filter|string|false|none|A filter to reduce results to a specific subset. Useful for exporting conversations with specific properties.|
|kmsKey|string|false|none|A fully qualified KMS key name for BigQuery tables protected by CMEK. Format: projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}/cryptoKeyVersions/{version}|
|parent|string|false|none|Required. The parent resource to export data from.|
|writeDisposition|string|false|none|Options for what to do if the destination table already exists.|

#### Enumerated Values

|Property|Value|
|---|---|
|writeDisposition|WRITE_DISPOSITION_UNSPECIFIED|
|writeDisposition|WRITE_TRUNCATE|
|writeDisposition|WRITE_APPEND|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataRequestBigQueryDestination">GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataRequestBigQueryDestination</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1exportinsightsdatarequestbigquerydestination"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataRequestBigQueryDestination"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1exportinsightsdatarequestbigquerydestination"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1exportinsightsdatarequestbigquerydestination"></a>

```json
{
  "dataset": "string",
  "projectId": "string",
  "table": "string"
}
```

A BigQuery Table Reference.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataset|string|false|none|Required. The name of the BigQuery dataset that the snapshot result should be exported to. If this dataset does not exist, the export call returns an INVALID_ARGUMENT error.|
|projectId|string|false|none|A project ID or number. If specified, then export will attempt to write data to this project instead of the resource project. Otherwise, the resource project will be used.|
|table|string|false|none|The BigQuery table name to which the insights data should be written. If this table does not exist, the export call returns an INVALID_ARGUMENT error.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataResponse">GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1exportinsightsdataresponse"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataResponse"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1exportinsightsdataresponse"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1exportinsightsdataresponse"></a>

```json
{}
```

Response for an export insights operation.

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1FaqAnswerData">GoogleCloudContactcenterinsightsV1alpha1FaqAnswerData</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1faqanswerdata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1FaqAnswerData"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1faqanswerdata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1faqanswerdata"></a>

```json
{
  "answer": "string",
  "confidenceScore": 0,
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "queryRecord": "string",
  "question": "string",
  "source": "string"
}
```

Agent Assist frequently-asked-question answer data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answer|string|false|none|The piece of text from the `source` knowledge base document.|
|confidenceScore|number(float)|false|none|The system's confidence score that this answer is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain).|
|metadata|object|false|none|Map that contains metadata about the FAQ answer and the document that it originates from.|
|queryRecord|string|false|none|The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record}|
|question|string|false|none|The corresponding FAQ question.|
|source|string|false|none|The knowledge document that this answer was extracted from. Format: projects/{project}/knowledgeBases/{knowledge_base}/documents/{document}.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1GcsSource">GoogleCloudContactcenterinsightsV1alpha1GcsSource</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1gcssource"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1GcsSource"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1gcssource"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1gcssource"></a>

```json
{
  "audioUri": "string",
  "transcriptUri": "string"
}
```

A Cloud Storage source of conversation data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audioUri|string|false|none|Cloud Storage URI that points to a file that contains the conversation audio.|
|transcriptUri|string|false|none|Immutable. Cloud Storage URI that points to a file that contains the conversation transcript.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1HoldData">GoogleCloudContactcenterinsightsV1alpha1HoldData</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1holddata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1HoldData"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1holddata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1holddata"></a>

```json
{}
```

The data for a hold annotation.

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadata">GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1ingestconversationsmetadata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadata"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1ingestconversationsmetadata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1ingestconversationsmetadata"></a>

```json
{
  "createTime": "string",
  "endTime": "string",
  "ingestConversationsStats": {
    "duplicatesSkippedCount": 0,
    "failedIngestCount": 0,
    "processedObjectCount": 0,
    "successfulIngestCount": 0
  },
  "partialErrors": [
    {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    }
  ],
  "request": {
    "conversationConfig": {
      "agentId": "string"
    },
    "gcsSource": {
      "bucketUri": "string"
    },
    "parent": "string",
    "transcriptObjectConfig": {
      "medium": "MEDIUM_UNSPECIFIED"
    }
  }
}
```

The metadata for an IngestConversations operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. The time the operation finished running.|
|ingestConversationsStats|[GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadataIngestConversationsStats](#schemagooglecloudcontactcenterinsightsv1alpha1ingestconversationsmetadataingestconversationsstats)|false|none|Output only. Statistics for IngestConversations operation.|
|partialErrors|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|read-only|Output only. Partial errors during ingest operation that might cause the operation output to be incomplete.|
|request|[GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequest](#schemagooglecloudcontactcenterinsightsv1alpha1ingestconversationsrequest)|false|none|Output only. The original request for ingest.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadataIngestConversationsStats">GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadataIngestConversationsStats</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1ingestconversationsmetadataingestconversationsstats"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadataIngestConversationsStats"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1ingestconversationsmetadataingestconversationsstats"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1ingestconversationsmetadataingestconversationsstats"></a>

```json
{
  "duplicatesSkippedCount": 0,
  "failedIngestCount": 0,
  "processedObjectCount": 0,
  "successfulIngestCount": 0
}
```

Statistics for IngestConversations operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duplicatesSkippedCount|integer(int32)|false|read-only|Output only. The number of objects skipped because another conversation with the same transcript uri had already been ingested.|
|failedIngestCount|integer(int32)|false|read-only|Output only. The number of objects which were unable to be ingested due to errors. The errors are populated in the partial_errors field.|
|processedObjectCount|integer(int32)|false|read-only|Output only. The number of objects processed during the ingest operation.|
|successfulIngestCount|integer(int32)|false|read-only|Output only. The number of new conversations added during this ingest operation.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequest">GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1ingestconversationsrequest"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequest"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1ingestconversationsrequest"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1ingestconversationsrequest"></a>

```json
{
  "conversationConfig": {
    "agentId": "string"
  },
  "gcsSource": {
    "bucketUri": "string"
  },
  "parent": "string",
  "transcriptObjectConfig": {
    "medium": "MEDIUM_UNSPECIFIED"
  }
}
```

The request to ingest conversations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversationConfig|[GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestConversationConfig](#schemagooglecloudcontactcenterinsightsv1alpha1ingestconversationsrequestconversationconfig)|false|none|Configuration that applies to all conversations.|
|gcsSource|[GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestGcsSource](#schemagooglecloudcontactcenterinsightsv1alpha1ingestconversationsrequestgcssource)|false|none|A cloud storage bucket source.|
|parent|string|false|none|Required. The parent resource for new conversations.|
|transcriptObjectConfig|[GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestTranscriptObjectConfig](#schemagooglecloudcontactcenterinsightsv1alpha1ingestconversationsrequesttranscriptobjectconfig)|false|none|Configuration for when `source` contains conversation transcripts.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestConversationConfig">GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestConversationConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1ingestconversationsrequestconversationconfig"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestConversationConfig"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1ingestconversationsrequestconversationconfig"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1ingestconversationsrequestconversationconfig"></a>

```json
{
  "agentId": "string"
}
```

Configuration that applies to all conversations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentId|string|false|none|An opaque, user-specified string representing the human agent who handled the conversations.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestGcsSource">GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestGcsSource</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1ingestconversationsrequestgcssource"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestGcsSource"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1ingestconversationsrequestgcssource"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1ingestconversationsrequestgcssource"></a>

```json
{
  "bucketUri": "string"
}
```

Configuration for Cloud Storage bucket sources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketUri|string|false|none|Required. The Cloud Storage bucket containing source objects.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestTranscriptObjectConfig">GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestTranscriptObjectConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1ingestconversationsrequesttranscriptobjectconfig"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestTranscriptObjectConfig"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1ingestconversationsrequesttranscriptobjectconfig"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1ingestconversationsrequesttranscriptobjectconfig"></a>

```json
{
  "medium": "MEDIUM_UNSPECIFIED"
}
```

Configuration for processing transcript objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|medium|string|false|none|Required. The medium transcript objects represent.|

#### Enumerated Values

|Property|Value|
|---|---|
|medium|MEDIUM_UNSPECIFIED|
|medium|PHONE_CALL|
|medium|CHAT|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1IngestConversationsResponse">GoogleCloudContactcenterinsightsV1alpha1IngestConversationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1ingestconversationsresponse"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1IngestConversationsResponse"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1ingestconversationsresponse"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1ingestconversationsresponse"></a>

```json
{}
```

The response to an IngestConversations operation.

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1Intent">GoogleCloudContactcenterinsightsV1alpha1Intent</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1intent"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1Intent"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1intent"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1intent"></a>

```json
{
  "displayName": "string",
  "id": "string"
}
```

The data for an intent. Represents a detected intent in the conversation, for example MAKES_PROMISE.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The human-readable name of the intent.|
|id|string|false|none|The unique identifier of the intent.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1IntentMatchData">GoogleCloudContactcenterinsightsV1alpha1IntentMatchData</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1intentmatchdata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1IntentMatchData"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1intentmatchdata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1intentmatchdata"></a>

```json
{
  "intentUniqueId": "string"
}
```

The data for an intent match. Represents an intent match for a text segment in the conversation. A text segment can be part of a sentence, a complete sentence, or an utterance with multiple sentences.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|intentUniqueId|string|false|none|The id of the matched intent. Can be used to retrieve the corresponding intent information.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1InterruptionData">GoogleCloudContactcenterinsightsV1alpha1InterruptionData</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1interruptiondata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1InterruptionData"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1interruptiondata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1interruptiondata"></a>

```json
{}
```

The data for an interruption annotation.

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1IssueAssignment">GoogleCloudContactcenterinsightsV1alpha1IssueAssignment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1issueassignment"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1IssueAssignment"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1issueassignment"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1issueassignment"></a>

```json
{
  "displayName": "string",
  "issue": "string",
  "score": 0
}
```

Information about the issue.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Immutable. Display name of the assigned issue. This field is set at time of analyis and immutable since then.|
|issue|string|false|none|Resource name of the assigned issue.|
|score|number(double)|false|none|Score indicating the likelihood of the issue assignment. currently bounded on [0,1].|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1IssueMatchData">GoogleCloudContactcenterinsightsV1alpha1IssueMatchData</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1issuematchdata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1IssueMatchData"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1issuematchdata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1issuematchdata"></a>

```json
{
  "issueAssignment": {
    "displayName": "string",
    "issue": "string",
    "score": 0
  }
}
```

The data for an issue match annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issueAssignment|[GoogleCloudContactcenterinsightsV1alpha1IssueAssignment](#schemagooglecloudcontactcenterinsightsv1alpha1issueassignment)|false|none|Information about the issue's assignment.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1IssueModel">GoogleCloudContactcenterinsightsV1alpha1IssueModel</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1issuemodel"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1IssueModel"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1issuemodel"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1issuemodel"></a>

```json
{
  "createTime": "string",
  "displayName": "string",
  "inputDataConfig": {
    "filter": "string",
    "medium": "MEDIUM_UNSPECIFIED",
    "trainingConversationsCount": "string"
  },
  "issueCount": "string",
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "trainingStats": {
    "analyzedConversationsCount": "string",
    "issueStats": {
      "property1": {
        "displayName": "string",
        "issue": "string",
        "labeledConversationsCount": "string"
      },
      "property2": {
        "displayName": "string",
        "issue": "string",
        "labeledConversationsCount": "string"
      }
    },
    "unclassifiedConversationsCount": "string"
  },
  "updateTime": "string"
}
```

The issue model resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time at which this issue model was created.|
|displayName|string|false|none|The representative name for the issue model.|
|inputDataConfig|[GoogleCloudContactcenterinsightsV1alpha1IssueModelInputDataConfig](#schemagooglecloudcontactcenterinsightsv1alpha1issuemodelinputdataconfig)|false|none|Configs for the input data that used to create the issue model.|
|issueCount|string(int64)|false|read-only|Output only. Number of issues in this issue model.|
|name|string|false|none|Immutable. The resource name of the issue model. Format: projects/{project}/locations/{location}/issueModels/{issue_model}|
|state|string|false|read-only|Output only. State of the model.|
|trainingStats|[GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStats](#schemagooglecloudcontactcenterinsightsv1alpha1issuemodellabelstats)|false|none|Output only. Immutable. The issue model's label statistics on its training data.|
|updateTime|string(google-datetime)|false|read-only|Output only. The most recent time at which the issue model was updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|UNDEPLOYED|
|state|DEPLOYING|
|state|DEPLOYED|
|state|UNDEPLOYING|
|state|DELETING|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1IssueModelInputDataConfig">GoogleCloudContactcenterinsightsV1alpha1IssueModelInputDataConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1issuemodelinputdataconfig"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1IssueModelInputDataConfig"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1issuemodelinputdataconfig"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1issuemodelinputdataconfig"></a>

```json
{
  "filter": "string",
  "medium": "MEDIUM_UNSPECIFIED",
  "trainingConversationsCount": "string"
}
```

Configs for the input data used to create the issue model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|string|false|none|A filter to reduce the conversations used for training the model to a specific subset.|
|medium|string|false|none|Medium of conversations used in training data. This field is being deprecated. To specify the medium to be used in training a new issue model, set the `medium` field on `filter`.|
|trainingConversationsCount|string(int64)|false|read-only|Output only. Number of conversations used in training. Output only.|

#### Enumerated Values

|Property|Value|
|---|---|
|medium|MEDIUM_UNSPECIFIED|
|medium|PHONE_CALL|
|medium|CHAT|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStats">GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStats</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1issuemodellabelstats"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStats"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1issuemodellabelstats"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1issuemodellabelstats"></a>

```json
{
  "analyzedConversationsCount": "string",
  "issueStats": {
    "property1": {
      "displayName": "string",
      "issue": "string",
      "labeledConversationsCount": "string"
    },
    "property2": {
      "displayName": "string",
      "issue": "string",
      "labeledConversationsCount": "string"
    }
  },
  "unclassifiedConversationsCount": "string"
}
```

Aggregated statistics about an issue model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analyzedConversationsCount|string(int64)|false|none|Number of conversations the issue model has analyzed at this point in time.|
|issueStats|object|false|none|Statistics on each issue. Key is the issue's resource name.|
|unclassifiedConversationsCount|string(int64)|false|none|Number of analyzed conversations for which no issue was applicable at this point in time.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStatsIssueStats">GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStatsIssueStats</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1issuemodellabelstatsissuestats"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStatsIssueStats"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1issuemodellabelstatsissuestats"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1issuemodellabelstatsissuestats"></a>

```json
{
  "displayName": "string",
  "issue": "string",
  "labeledConversationsCount": "string"
}
```

Aggregated statistics about an issue.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Display name of the issue.|
|issue|string|false|none|Issue resource. Format: projects/{project}/locations/{location}/issueModels/{issue_model}/issues/{issue}|
|labeledConversationsCount|string(int64)|false|none|Number of conversations attached to the issue at this point in time.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1IssueModelResult">GoogleCloudContactcenterinsightsV1alpha1IssueModelResult</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1issuemodelresult"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1IssueModelResult"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1issuemodelresult"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1issuemodelresult"></a>

```json
{
  "issueModel": "string",
  "issues": [
    {
      "displayName": "string",
      "issue": "string",
      "score": 0
    }
  ]
}
```

Issue Modeling result on a conversation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issueModel|string|false|none|Issue model that generates the result. Format: projects/{project}/locations/{location}/issueModels/{issue_model}|
|issues|[[GoogleCloudContactcenterinsightsV1alpha1IssueAssignment](#schemagooglecloudcontactcenterinsightsv1alpha1issueassignment)]|false|none|All the matched issues.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1PhraseMatchData">GoogleCloudContactcenterinsightsV1alpha1PhraseMatchData</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1phrasematchdata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1PhraseMatchData"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1phrasematchdata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1phrasematchdata"></a>

```json
{
  "displayName": "string",
  "phraseMatcher": "string"
}
```

The data for a matched phrase matcher. Represents information identifying a phrase matcher for a given match.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The human-readable name of the phrase matcher.|
|phraseMatcher|string|false|none|The unique identifier (the resource name) of the phrase matcher.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1RedactionConfig">GoogleCloudContactcenterinsightsV1alpha1RedactionConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1redactionconfig"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1RedactionConfig"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1redactionconfig"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1redactionconfig"></a>

```json
{
  "deidentifyTemplate": "string",
  "inspectTemplate": "string"
}
```

DLP resources used for redaction while ingesting conversations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deidentifyTemplate|string|false|none|The fully-qualified DLP deidentify template resource name. Format: `projects/{project}/deidentifyTemplates/{template}`|
|inspectTemplate|string|false|none|The fully-qualified DLP inspect template resource name. Format: `projects/{project}/inspectTemplates/{template}`|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1RuntimeAnnotation">GoogleCloudContactcenterinsightsV1alpha1RuntimeAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1runtimeannotation"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1RuntimeAnnotation"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1runtimeannotation"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1runtimeannotation"></a>

```json
{
  "annotationId": "string",
  "answerFeedback": {
    "clicked": true,
    "correctnessLevel": "CORRECTNESS_LEVEL_UNSPECIFIED",
    "displayed": true
  },
  "articleSuggestion": {
    "confidenceScore": 0,
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "queryRecord": "string",
    "source": "string",
    "title": "string",
    "uri": "string"
  },
  "createTime": "string",
  "dialogflowInteraction": {
    "confidence": 0,
    "dialogflowIntentId": "string"
  },
  "endBoundary": {
    "transcriptIndex": 0,
    "wordIndex": 0
  },
  "faqAnswer": {
    "answer": "string",
    "confidenceScore": 0,
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "queryRecord": "string",
    "question": "string",
    "source": "string"
  },
  "smartComposeSuggestion": {
    "confidenceScore": 0,
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "queryRecord": "string",
    "suggestion": "string"
  },
  "smartReply": {
    "confidenceScore": 0,
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "queryRecord": "string",
    "reply": "string"
  },
  "startBoundary": {
    "transcriptIndex": 0,
    "wordIndex": 0
  }
}
```

An annotation that was generated during the customer and agent interaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationId|string|false|none|The unique identifier of the annotation. Format: projects/{project}/locations/{location}/conversationDatasets/{dataset}/conversationDataItems/{data_item}/conversationAnnotations/{annotation}|
|answerFeedback|[GoogleCloudContactcenterinsightsV1alpha1AnswerFeedback](#schemagooglecloudcontactcenterinsightsv1alpha1answerfeedback)|false|none|The feedback that the customer has about the answer in `data`.|
|articleSuggestion|[GoogleCloudContactcenterinsightsV1alpha1ArticleSuggestionData](#schemagooglecloudcontactcenterinsightsv1alpha1articlesuggestiondata)|false|none|Agent Assist Article Suggestion data.|
|createTime|string(google-datetime)|false|none|The time at which this annotation was created.|
|dialogflowInteraction|[GoogleCloudContactcenterinsightsV1alpha1DialogflowInteractionData](#schemagooglecloudcontactcenterinsightsv1alpha1dialogflowinteractiondata)|false|none|Dialogflow interaction data.|
|endBoundary|[GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundary](#schemagooglecloudcontactcenterinsightsv1alpha1annotationboundary)|false|none|The boundary in the conversation where the annotation ends, inclusive.|
|faqAnswer|[GoogleCloudContactcenterinsightsV1alpha1FaqAnswerData](#schemagooglecloudcontactcenterinsightsv1alpha1faqanswerdata)|false|none|Agent Assist FAQ answer data.|
|smartComposeSuggestion|[GoogleCloudContactcenterinsightsV1alpha1SmartComposeSuggestionData](#schemagooglecloudcontactcenterinsightsv1alpha1smartcomposesuggestiondata)|false|none|Agent Assist Smart Compose suggestion data.|
|smartReply|[GoogleCloudContactcenterinsightsV1alpha1SmartReplyData](#schemagooglecloudcontactcenterinsightsv1alpha1smartreplydata)|false|none|Agent Assist Smart Reply data.|
|startBoundary|[GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundary](#schemagooglecloudcontactcenterinsightsv1alpha1annotationboundary)|false|none|The boundary in the conversation where the annotation starts, inclusive.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1SentimentData">GoogleCloudContactcenterinsightsV1alpha1SentimentData</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1sentimentdata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1SentimentData"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1sentimentdata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1sentimentdata"></a>

```json
{
  "magnitude": 0,
  "score": 0
}
```

The data for a sentiment annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|magnitude|number(float)|false|none|A non-negative number from 0 to infinity which represents the abolute magnitude of sentiment regardless of score.|
|score|number(float)|false|none|The sentiment score between -1.0 (negative) and 1.0 (positive).|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1SilenceData">GoogleCloudContactcenterinsightsV1alpha1SilenceData</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1silencedata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1SilenceData"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1silencedata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1silencedata"></a>

```json
{}
```

The data for a silence annotation.

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1SmartComposeSuggestionData">GoogleCloudContactcenterinsightsV1alpha1SmartComposeSuggestionData</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1smartcomposesuggestiondata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1SmartComposeSuggestionData"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1smartcomposesuggestiondata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1smartcomposesuggestiondata"></a>

```json
{
  "confidenceScore": 0,
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "queryRecord": "string",
  "suggestion": "string"
}
```

Agent Assist Smart Compose suggestion data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidenceScore|number(double)|false|none|The system's confidence score that this suggestion is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain).|
|metadata|object|false|none|Map that contains metadata about the Smart Compose suggestion and the document from which it originates.|
|queryRecord|string|false|none|The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record}|
|suggestion|string|false|none|The content of the suggestion.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1SmartReplyData">GoogleCloudContactcenterinsightsV1alpha1SmartReplyData</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1smartreplydata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1SmartReplyData"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1smartreplydata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1smartreplydata"></a>

```json
{
  "confidenceScore": 0,
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "queryRecord": "string",
  "reply": "string"
}
```

Agent Assist Smart Reply data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidenceScore|number(double)|false|none|The system's confidence score that this reply is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain).|
|metadata|object|false|none|Map that contains metadata about the Smart Reply and the document from which it originates.|
|queryRecord|string|false|none|The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record}|
|reply|string|false|none|The content of the reply.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1UndeployIssueModelMetadata">GoogleCloudContactcenterinsightsV1alpha1UndeployIssueModelMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1undeployissuemodelmetadata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1UndeployIssueModelMetadata"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1undeployissuemodelmetadata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1undeployissuemodelmetadata"></a>

```json
{
  "createTime": "string",
  "endTime": "string",
  "request": {
    "name": "string"
  }
}
```

Metadata for undeploying an issue model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. The time the operation finished running.|
|request|[GoogleCloudContactcenterinsightsV1alpha1UndeployIssueModelRequest](#schemagooglecloudcontactcenterinsightsv1alpha1undeployissuemodelrequest)|false|none|The original request for undeployment.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1UndeployIssueModelRequest">GoogleCloudContactcenterinsightsV1alpha1UndeployIssueModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1undeployissuemodelrequest"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1UndeployIssueModelRequest"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1undeployissuemodelrequest"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1undeployissuemodelrequest"></a>

```json
{
  "name": "string"
}
```

The request to undeploy an issue model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Required. The issue model to undeploy.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1UndeployIssueModelResponse">GoogleCloudContactcenterinsightsV1alpha1UndeployIssueModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1undeployissuemodelresponse"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1UndeployIssueModelResponse"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1undeployissuemodelresponse"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1undeployissuemodelresponse"></a>

```json
{}
```

The response to undeploy an issue model.

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1UploadConversationMetadata">GoogleCloudContactcenterinsightsV1alpha1UploadConversationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1uploadconversationmetadata"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1UploadConversationMetadata"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1uploadconversationmetadata"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1uploadconversationmetadata"></a>

```json
{
  "analysisOperation": "string",
  "appliedRedactionConfig": {
    "deidentifyTemplate": "string",
    "inspectTemplate": "string"
  },
  "createTime": "string",
  "endTime": "string",
  "request": {
    "conversation": {
      "agentId": "string",
      "callMetadata": {
        "agentChannel": 0,
        "customerChannel": 0
      },
      "createTime": "string",
      "dataSource": {
        "dialogflowSource": {
          "audioUri": "string",
          "dialogflowConversation": "string"
        },
        "gcsSource": {
          "audioUri": "string",
          "transcriptUri": "string"
        }
      },
      "dialogflowIntents": {
        "property1": {
          "displayName": "string"
        },
        "property2": {
          "displayName": "string"
        }
      },
      "duration": "string",
      "expireTime": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "languageCode": "string",
      "latestAnalysis": {
        "analysisResult": {
          "callAnalysisMetadata": {
            "annotations": [
              {
                "annotationEndBoundary": {
                  "transcriptIndex": 0,
                  "wordIndex": 0
                },
                "annotationStartBoundary": {
                  "transcriptIndex": 0,
                  "wordIndex": 0
                },
                "channelTag": 0,
                "entityMentionData": {
                  "entityUniqueId": "string",
                  "sentiment": {
                    "magnitude": 0,
                    "score": 0
                  },
                  "type": "MENTION_TYPE_UNSPECIFIED"
                },
                "holdData": {},
                "intentMatchData": {
                  "intentUniqueId": "string"
                },
                "interruptionData": {},
                "issueMatchData": {
                  "issueAssignment": {
                    "displayName": "string",
                    "issue": "string",
                    "score": 0
                  }
                },
                "phraseMatchData": {
                  "displayName": "string",
                  "phraseMatcher": "string"
                },
                "sentimentData": {
                  "magnitude": 0,
                  "score": 0
                },
                "silenceData": {}
              }
            ],
            "entities": {
              "property1": {
                "displayName": "string",
                "metadata": {
                  "property1": "string",
                  "property2": "string"
                },
                "salience": 0,
                "sentiment": {
                  "magnitude": 0,
                  "score": 0
                },
                "type": "TYPE_UNSPECIFIED"
              },
              "property2": {
                "displayName": "string",
                "metadata": {
                  "property1": "string",
                  "property2": "string"
                },
                "salience": 0,
                "sentiment": {
                  "magnitude": 0,
                  "score": 0
                },
                "type": "TYPE_UNSPECIFIED"
              }
            },
            "intents": {
              "property1": {
                "displayName": "string",
                "id": "string"
              },
              "property2": {
                "displayName": "string",
                "id": "string"
              }
            },
            "issueModelResult": {
              "issueModel": "string",
              "issues": [
                {
                  "displayName": "string",
                  "issue": "string",
                  "score": 0
                }
              ]
            },
            "phraseMatchers": {
              "property1": {
                "displayName": "string",
                "phraseMatcher": "string"
              },
              "property2": {
                "displayName": "string",
                "phraseMatcher": "string"
              }
            },
            "sentiments": [
              {
                "channelTag": 0,
                "sentimentData": {
                  "magnitude": 0,
                  "score": 0
                }
              }
            ]
          },
          "endTime": "string"
        },
        "annotatorSelector": {
          "issueModels": [
            "string"
          ],
          "phraseMatchers": [
            "string"
          ],
          "runEntityAnnotator": true,
          "runIntentAnnotator": true,
          "runInterruptionAnnotator": true,
          "runIssueModelAnnotator": true,
          "runPhraseMatcherAnnotator": true,
          "runSentimentAnnotator": true,
          "runSilenceAnnotator": true
        },
        "createTime": "string",
        "name": "string",
        "requestTime": "string"
      },
      "medium": "MEDIUM_UNSPECIFIED",
      "name": "string",
      "obfuscatedUserId": "string",
      "runtimeAnnotations": [
        {
          "annotationId": "string",
          "answerFeedback": {
            "clicked": true,
            "correctnessLevel": "CORRECTNESS_LEVEL_UNSPECIFIED",
            "displayed": true
          },
          "articleSuggestion": {
            "confidenceScore": 0,
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "queryRecord": "string",
            "source": "string",
            "title": "string",
            "uri": "string"
          },
          "createTime": "string",
          "dialogflowInteraction": {
            "confidence": 0,
            "dialogflowIntentId": "string"
          },
          "endBoundary": {
            "transcriptIndex": 0,
            "wordIndex": 0
          },
          "faqAnswer": {
            "answer": "string",
            "confidenceScore": 0,
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "queryRecord": "string",
            "question": "string",
            "source": "string"
          },
          "smartComposeSuggestion": {
            "confidenceScore": 0,
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "queryRecord": "string",
            "suggestion": "string"
          },
          "smartReply": {
            "confidenceScore": 0,
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "queryRecord": "string",
            "reply": "string"
          },
          "startBoundary": {
            "transcriptIndex": 0,
            "wordIndex": 0
          }
        }
      ],
      "startTime": "string",
      "transcript": {
        "transcriptSegments": [
          {
            "channelTag": 0,
            "confidence": 0,
            "dialogflowSegmentMetadata": {
              "smartReplyAllowlistCovered": true
            },
            "languageCode": "string",
            "messageTime": "string",
            "segmentParticipant": {
              "dialogflowParticipant": "string",
              "dialogflowParticipantName": "string",
              "obfuscatedExternalUserId": "string",
              "role": "ROLE_UNSPECIFIED",
              "userId": "string"
            },
            "sentiment": {
              "magnitude": 0,
              "score": 0
            },
            "text": "string",
            "words": [
              {
                "confidence": 0,
                "endOffset": "string",
                "startOffset": "string",
                "word": "string"
              }
            ]
          }
        ]
      },
      "ttl": "string",
      "turnCount": 0,
      "updateTime": "string"
    },
    "conversationId": "string",
    "parent": "string",
    "redactionConfig": {
      "deidentifyTemplate": "string",
      "inspectTemplate": "string"
    }
  }
}
```

The metadata for an UploadConversation operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analysisOperation|string|false|read-only|Output only. The operation name for a successfully created analysis operation, if any.|
|appliedRedactionConfig|[GoogleCloudContactcenterinsightsV1alpha1RedactionConfig](#schemagooglecloudcontactcenterinsightsv1alpha1redactionconfig)|false|none|Output only. The redaction config applied to the uploaded conversation.|
|createTime|string(google-datetime)|false|read-only|Output only. The time the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. The time the operation finished running.|
|request|[GoogleCloudContactcenterinsightsV1alpha1UploadConversationRequest](#schemagooglecloudcontactcenterinsightsv1alpha1uploadconversationrequest)|false|none|Output only. The original request.|

<h2 id="tocS_GoogleCloudContactcenterinsightsV1alpha1UploadConversationRequest">GoogleCloudContactcenterinsightsV1alpha1UploadConversationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcontactcenterinsightsv1alpha1uploadconversationrequest"></a>
<a id="schema_GoogleCloudContactcenterinsightsV1alpha1UploadConversationRequest"></a>
<a id="tocSgooglecloudcontactcenterinsightsv1alpha1uploadconversationrequest"></a>
<a id="tocsgooglecloudcontactcenterinsightsv1alpha1uploadconversationrequest"></a>

```json
{
  "conversation": {
    "agentId": "string",
    "callMetadata": {
      "agentChannel": 0,
      "customerChannel": 0
    },
    "createTime": "string",
    "dataSource": {
      "dialogflowSource": {
        "audioUri": "string",
        "dialogflowConversation": "string"
      },
      "gcsSource": {
        "audioUri": "string",
        "transcriptUri": "string"
      }
    },
    "dialogflowIntents": {
      "property1": {
        "displayName": "string"
      },
      "property2": {
        "displayName": "string"
      }
    },
    "duration": "string",
    "expireTime": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "languageCode": "string",
    "latestAnalysis": {
      "analysisResult": {
        "callAnalysisMetadata": {
          "annotations": [
            {
              "annotationEndBoundary": {
                "transcriptIndex": 0,
                "wordIndex": 0
              },
              "annotationStartBoundary": {
                "transcriptIndex": 0,
                "wordIndex": 0
              },
              "channelTag": 0,
              "entityMentionData": {
                "entityUniqueId": "string",
                "sentiment": {
                  "magnitude": 0,
                  "score": 0
                },
                "type": "MENTION_TYPE_UNSPECIFIED"
              },
              "holdData": {},
              "intentMatchData": {
                "intentUniqueId": "string"
              },
              "interruptionData": {},
              "issueMatchData": {
                "issueAssignment": {
                  "displayName": "string",
                  "issue": "string",
                  "score": 0
                }
              },
              "phraseMatchData": {
                "displayName": "string",
                "phraseMatcher": "string"
              },
              "sentimentData": {
                "magnitude": 0,
                "score": 0
              },
              "silenceData": {}
            }
          ],
          "entities": {
            "property1": {
              "displayName": "string",
              "metadata": {
                "property1": "string",
                "property2": "string"
              },
              "salience": 0,
              "sentiment": {
                "magnitude": 0,
                "score": 0
              },
              "type": "TYPE_UNSPECIFIED"
            },
            "property2": {
              "displayName": "string",
              "metadata": {
                "property1": "string",
                "property2": "string"
              },
              "salience": 0,
              "sentiment": {
                "magnitude": 0,
                "score": 0
              },
              "type": "TYPE_UNSPECIFIED"
            }
          },
          "intents": {
            "property1": {
              "displayName": "string",
              "id": "string"
            },
            "property2": {
              "displayName": "string",
              "id": "string"
            }
          },
          "issueModelResult": {
            "issueModel": "string",
            "issues": [
              {
                "displayName": "string",
                "issue": "string",
                "score": 0
              }
            ]
          },
          "phraseMatchers": {
            "property1": {
              "displayName": "string",
              "phraseMatcher": "string"
            },
            "property2": {
              "displayName": "string",
              "phraseMatcher": "string"
            }
          },
          "sentiments": [
            {
              "channelTag": 0,
              "sentimentData": {
                "magnitude": 0,
                "score": 0
              }
            }
          ]
        },
        "endTime": "string"
      },
      "annotatorSelector": {
        "issueModels": [
          "string"
        ],
        "phraseMatchers": [
          "string"
        ],
        "runEntityAnnotator": true,
        "runIntentAnnotator": true,
        "runInterruptionAnnotator": true,
        "runIssueModelAnnotator": true,
        "runPhraseMatcherAnnotator": true,
        "runSentimentAnnotator": true,
        "runSilenceAnnotator": true
      },
      "createTime": "string",
      "name": "string",
      "requestTime": "string"
    },
    "medium": "MEDIUM_UNSPECIFIED",
    "name": "string",
    "obfuscatedUserId": "string",
    "runtimeAnnotations": [
      {
        "annotationId": "string",
        "answerFeedback": {
          "clicked": true,
          "correctnessLevel": "CORRECTNESS_LEVEL_UNSPECIFIED",
          "displayed": true
        },
        "articleSuggestion": {
          "confidenceScore": 0,
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "queryRecord": "string",
          "source": "string",
          "title": "string",
          "uri": "string"
        },
        "createTime": "string",
        "dialogflowInteraction": {
          "confidence": 0,
          "dialogflowIntentId": "string"
        },
        "endBoundary": {
          "transcriptIndex": 0,
          "wordIndex": 0
        },
        "faqAnswer": {
          "answer": "string",
          "confidenceScore": 0,
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "queryRecord": "string",
          "question": "string",
          "source": "string"
        },
        "smartComposeSuggestion": {
          "confidenceScore": 0,
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "queryRecord": "string",
          "suggestion": "string"
        },
        "smartReply": {
          "confidenceScore": 0,
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "queryRecord": "string",
          "reply": "string"
        },
        "startBoundary": {
          "transcriptIndex": 0,
          "wordIndex": 0
        }
      }
    ],
    "startTime": "string",
    "transcript": {
      "transcriptSegments": [
        {
          "channelTag": 0,
          "confidence": 0,
          "dialogflowSegmentMetadata": {
            "smartReplyAllowlistCovered": true
          },
          "languageCode": "string",
          "messageTime": "string",
          "segmentParticipant": {
            "dialogflowParticipant": "string",
            "dialogflowParticipantName": "string",
            "obfuscatedExternalUserId": "string",
            "role": "ROLE_UNSPECIFIED",
            "userId": "string"
          },
          "sentiment": {
            "magnitude": 0,
            "score": 0
          },
          "text": "string",
          "words": [
            {
              "confidence": 0,
              "endOffset": "string",
              "startOffset": "string",
              "word": "string"
            }
          ]
        }
      ]
    },
    "ttl": "string",
    "turnCount": 0,
    "updateTime": "string"
  },
  "conversationId": "string",
  "parent": "string",
  "redactionConfig": {
    "deidentifyTemplate": "string",
    "inspectTemplate": "string"
  }
}
```

Request to upload a conversation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversation|[GoogleCloudContactcenterinsightsV1alpha1Conversation](#schemagooglecloudcontactcenterinsightsv1alpha1conversation)|false|none|Required. The conversation resource to create.|
|conversationId|string|false|none|Optional. A unique ID for the new conversation. This ID will become the final component of the conversation's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z0-9-]{4,64}$`. Valid characters are `a-z-`|
|parent|string|false|none|Required. The parent resource of the conversation.|
|redactionConfig|[GoogleCloudContactcenterinsightsV1alpha1RedactionConfig](#schemagooglecloudcontactcenterinsightsv1alpha1redactionconfig)|false|none|Optional. DLP settings for transcript redaction. Optional, will default to the config specified in Settings.|

<h2 id="tocS_GoogleLongrunningListOperationsResponse">GoogleLongrunningListOperationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglelongrunninglistoperationsresponse"></a>
<a id="schema_GoogleLongrunningListOperationsResponse"></a>
<a id="tocSgooglelongrunninglistoperationsresponse"></a>
<a id="tocsgooglelongrunninglistoperationsresponse"></a>

```json
{
  "nextPageToken": "string",
  "operations": [
    {
      "done": true,
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "response": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

The response message for Operations.ListOperations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The standard List next-page token.|
|operations|[[GoogleLongrunningOperation](#schemagooglelongrunningoperation)]|false|none|A list of operations that matches the specified filter in the request.|

<h2 id="tocS_GoogleLongrunningOperation">GoogleLongrunningOperation</h2>
<!-- backwards compatibility -->
<a id="schemagooglelongrunningoperation"></a>
<a id="schema_GoogleLongrunningOperation"></a>
<a id="tocSgooglelongrunningoperation"></a>
<a id="tocsgooglelongrunningoperation"></a>

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

This resource represents a long-running operation that is the result of a network API call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|done|boolean|false|none|If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.|
|error|[GoogleRpcStatus](#schemagooglerpcstatus)|false|none|The error result of the operation in case of failure or cancellation.|
|metadata|object|false|none|Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.|
|name|string|false|none|The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.|
|response|object|false|none|The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.|

<h2 id="tocS_GoogleProtobufEmpty">GoogleProtobufEmpty</h2>
<!-- backwards compatibility -->
<a id="schemagoogleprotobufempty"></a>
<a id="schema_GoogleProtobufEmpty"></a>
<a id="tocSgoogleprotobufempty"></a>
<a id="tocsgoogleprotobufempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

<h2 id="tocS_GoogleRpcStatus">GoogleRpcStatus</h2>
<!-- backwards compatibility -->
<a id="schemagooglerpcstatus"></a>
<a id="schema_GoogleRpcStatus"></a>
<a id="tocSgooglerpcstatus"></a>
<a id="tocsgooglerpcstatus"></a>

```json
{
  "code": 0,
  "details": [
    {
      "property1": null,
      "property2": null
    }
  ],
  "message": "string"
}
```

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|The status code, which should be an enum value of google.rpc.Code.|
|details|[object]|false|none|A list of messages that carry the error details. There is a common set of message types for APIs to use.|
|message|string|false|none|A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.|
