<h1 id="google-cloud-support-api">Google Cloud Support API v2beta</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Manages Google Cloud technical support cases for Customer Care support offerings.

Base URLs:

* <a href="https://cloudsupport.googleapis.com/">https://cloudsupport.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/support/docs/apis">External documentation</a>

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

<h1 id="google-cloud-support-api-caseclassifications">caseClassifications</h1>

## cloudsupport.caseClassifications.search

<a id="opIdcloudsupport.caseClassifications.search"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta/caseClassifications:search \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta/caseClassifications:search`

Retrieve valid classifications to be used when creating a support case. The classications are hierarchical, with each classification containing all levels of the hierarchy, separated by " > ". For example "Technical Issue > Compute > Compute Engine".

<h3 id="cloudsupportcaseclassificationssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer|false|The maximum number of cases fetched with each request.|
|pageToken|query|string|false|A token identifying the page of results to return. If unspecified, the first page is retrieved.|
|query|query|string|false|An expression written in the Cloud filter language. If non-empty, then only cases whose fields match the filter are returned. If empty, then no messages are filtered out.|
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
  "caseClassifications": [
    {
      "displayName": "string",
      "id": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="cloudsupportcaseclassificationssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SearchCaseClassificationsResponse](#schemasearchcaseclassificationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="google-cloud-support-api-cases">cases</h1>

## cloudsupport.cases.search

<a id="opIdcloudsupport.cases.search"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta/cases:search \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta/cases:search`

Search cases using the specified query.

<h3 id="cloudsupportcasessearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer|false|The maximum number of cases fetched with each request. The default page size is 10.|
|pageToken|query|string|false|A token identifying the page of results to return. If unspecified, the first page is retrieved.|
|query|query|string|false|An expression written in filter language. A query uses the following fields with the operators equals (`=`) and `AND`: - `organization`: An organization name in the form `organizations/`. - `project`: A project name in the form `projects/`. - `state`: The accepted values are `OPEN` or `CLOSED`. - `priority`: The accepted values are `P0`, `P1`, `P2`, `P3`, or `P4`. You can specify multiple values for priority using the `OR` operator. For example, `priority=P1 OR priority=P2`. - [DEPRECATED] `severity`: The accepted values are `S0`, `S1`, `S2`, `S3`, or `S4`. - `creator.email`: The email address of the case creator. - `billingAccount`: A billing account in the form `billingAccounts/` You must specify eitehr `organization` or `project`. To search across `displayName`, `description`, and comments, use a global restriction with no keyword or operator. For example, `"my search"`. To search only cases updated after a certain date, use `update_time` retricted with that particular date, time, and timezone in ISO datetime format. For example, `update_time>"2020-01-01T00:00:00-05:00"`. `update_time` only supports the greater than operator (`>`). Examples: - `organization="organizations/123456789"` - `project="projects/my-project-id"` - `project="projects/123456789"` - `billing_account="billingAccounts/123456-A0B0C0-CUZ789"` - `organization="organizations/123456789" AND state=CLOSED` - `project="projects/my-project-id" AND creator.email="tester@example.com"` - `project="projects/my-project-id" AND (priority=P0 OR priority=P1)`|
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
  "cases": [
    {
      "classification": {
        "displayName": "string",
        "id": "string"
      },
      "contactEmail": "string",
      "createTime": "string",
      "creator": {
        "displayName": "string",
        "email": "string",
        "googleSupport": true
      },
      "description": "string",
      "displayName": "string",
      "escalated": true,
      "languageCode": "string",
      "name": "string",
      "priority": "PRIORITY_UNSPECIFIED",
      "severity": "SEVERITY_UNSPECIFIED",
      "state": "STATE_UNSPECIFIED",
      "subscriberEmailAddresses": [
        "string"
      ],
      "testCase": true,
      "timeZone": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="cloudsupportcasessearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SearchCasesResponse](#schemasearchcasesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudsupport.cases.get

<a id="opIdcloudsupport.cases.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta/{name}`

Retrieve the specified case.

<h3 id="cloudsupportcasesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The fully qualified name of a case to be retrieved.|
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
  "classification": {
    "displayName": "string",
    "id": "string"
  },
  "contactEmail": "string",
  "createTime": "string",
  "creator": {
    "displayName": "string",
    "email": "string",
    "googleSupport": true
  },
  "description": "string",
  "displayName": "string",
  "escalated": true,
  "languageCode": "string",
  "name": "string",
  "priority": "PRIORITY_UNSPECIFIED",
  "severity": "SEVERITY_UNSPECIFIED",
  "state": "STATE_UNSPECIFIED",
  "subscriberEmailAddresses": [
    "string"
  ],
  "testCase": true,
  "timeZone": "string",
  "updateTime": "string"
}
```

<h3 id="cloudsupportcasesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Case](#schemacase)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudsupport.cases.patch

<a id="opIdcloudsupport.cases.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "classification": {
      "displayName": "string",
      "id": "string"
    },
    "contactEmail": "string",
    "creator": {
      "displayName": "string",
      "email": "string"
    },
    "description": "string",
    "displayName": "string",
    "escalated": true,
    "languageCode": "string",
    "name": "string",
    "priority": "PRIORITY_UNSPECIFIED",
    "severity": "SEVERITY_UNSPECIFIED",
    "subscriberEmailAddresses": [
      "string"
    ],
    "testCase": true,
    "timeZone": "string"
  }'
```

`PATCH /v2beta/{name}`

Update the specified case. Only a subset of fields can be updated.

> Body parameter

```json
{
  "classification": {
    "displayName": "string",
    "id": "string"
  },
  "contactEmail": "string",
  "creator": {
    "displayName": "string",
    "email": "string"
  },
  "description": "string",
  "displayName": "string",
  "escalated": true,
  "languageCode": "string",
  "name": "string",
  "priority": "PRIORITY_UNSPECIFIED",
  "severity": "SEVERITY_UNSPECIFIED",
  "subscriberEmailAddresses": [
    "string"
  ],
  "testCase": true,
  "timeZone": "string"
}
```

<h3 id="cloudsupportcasespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource name for the case.|
|updateMask|query|string|false|A list of attributes of the case object that should be updated as part of this request. Supported values are severity, display_name, and subscriber_email_addresses. If no fields are specified, all supported fields are updated. WARNING: If you do not provide a field mask, then you may accidentally clear some fields. For example, if you leave field mask empty and do not provide a value for subscriber_email_addresses, then subscriber_email_addresses is updated to empty.|
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
|body|body|[Case](#schemacase)|false|none|
|» classification|body|[CaseClassification](#schemacaseclassification)|false|The issue classification applicable to this case.|
|» contactEmail|body|string|false|A user-supplied email address to send case update notifications for. This should only be used in BYOID flows, where we cannot infer the user's email address directly from their EUCs.|
|» creator|body|[Actor](#schemaactor)|false|The user who created the case. Note: The name and email will be obfuscated if the case was created by Google Support.|
|» description|body|string|false|A broad description of the issue.|
|» displayName|body|string|false|The short summary of the issue reported in this case.|
|» escalated|body|boolean|false|Whether the case is currently escalated.|
|» languageCode|body|string|false|The language the user has requested to receive support in. This should be a BCP 47 language code (e.g., `"en"`, `"zh-CN"`, `"zh-TW"`, `"ja"`, `"ko"`). If no language or an unsupported language is specified, this field defaults to English (en). Language selection during case creation may affect your available support options. For a list of supported languages and their support working hours, see: https://cloud.google.com/support/docs/language-working-hours|
|» name|body|string|false|The resource name for the case.|
|» priority|body|string|false|The priority of this case. If this is set, do not set severity.|
|» severity|body|string|false|REMOVED. The severity of this case. Use priority instead.|
|» subscriberEmailAddresses|body|[string]|false|The email addresses to receive updates on this case.|
|» testCase|body|boolean|false|Whether this case was created for internal API testing and should not be acted on by the support team.|
|» timeZone|body|string|false|The timezone of the user who created the support case. It should be in a format IANA recognizes: https://www.iana.org/time-zones. There is no additional validation done by the API.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» priority|PRIORITY_UNSPECIFIED|
|» priority|P0|
|» priority|P1|
|» priority|P2|
|» priority|P3|
|» priority|P4|
|» severity|SEVERITY_UNSPECIFIED|
|» severity|S0|
|» severity|S1|
|» severity|S2|
|» severity|S3|
|» severity|S4|

> Example responses

> 200 Response

```json
{
  "classification": {
    "displayName": "string",
    "id": "string"
  },
  "contactEmail": "string",
  "createTime": "string",
  "creator": {
    "displayName": "string",
    "email": "string",
    "googleSupport": true
  },
  "description": "string",
  "displayName": "string",
  "escalated": true,
  "languageCode": "string",
  "name": "string",
  "priority": "PRIORITY_UNSPECIFIED",
  "severity": "SEVERITY_UNSPECIFIED",
  "state": "STATE_UNSPECIFIED",
  "subscriberEmailAddresses": [
    "string"
  ],
  "testCase": true,
  "timeZone": "string",
  "updateTime": "string"
}
```

<h3 id="cloudsupportcasespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Case](#schemacase)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudsupport.cases.close

<a id="opIdcloudsupport.cases.close"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta/string:close \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2beta/{name}:close`

Close the specified case.

> Body parameter

```json
{}
```

<h3 id="cloudsupportcasesclose-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The fully qualified name of the case resource to be closed.|
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
|body|body|[CloseCaseRequest](#schemaclosecaserequest)|false|none|

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
  "classification": {
    "displayName": "string",
    "id": "string"
  },
  "contactEmail": "string",
  "createTime": "string",
  "creator": {
    "displayName": "string",
    "email": "string",
    "googleSupport": true
  },
  "description": "string",
  "displayName": "string",
  "escalated": true,
  "languageCode": "string",
  "name": "string",
  "priority": "PRIORITY_UNSPECIFIED",
  "severity": "SEVERITY_UNSPECIFIED",
  "state": "STATE_UNSPECIFIED",
  "subscriberEmailAddresses": [
    "string"
  ],
  "testCase": true,
  "timeZone": "string",
  "updateTime": "string"
}
```

<h3 id="cloudsupportcasesclose-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Case](#schemacase)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudsupport.cases.escalate

<a id="opIdcloudsupport.cases.escalate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta/string:escalate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "escalation": {
      "justification": "string",
      "reason": "REASON_UNSPECIFIED"
    }
  }'
```

`POST /v2beta/{name}:escalate`

Escalate a case. Escalating a case will initiate the Cloud Support escalation management process. This operation is only available to certain Customer Care tiers. Go to https://cloud.google.com/support and look for 'Technical support escalations' in the feature list to find out which tiers are able to perform escalations.

> Body parameter

```json
{
  "escalation": {
    "justification": "string",
    "reason": "REASON_UNSPECIFIED"
  }
}
```

<h3 id="cloudsupportcasesescalate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The fully qualified name of the Case resource to be escalated.|
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
|body|body|[EscalateCaseRequest](#schemaescalatecaserequest)|false|none|
|» escalation|body|[Escalation](#schemaescalation)|false|The escalation object to be sent with the escalation request.|

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
  "classification": {
    "displayName": "string",
    "id": "string"
  },
  "contactEmail": "string",
  "createTime": "string",
  "creator": {
    "displayName": "string",
    "email": "string",
    "googleSupport": true
  },
  "description": "string",
  "displayName": "string",
  "escalated": true,
  "languageCode": "string",
  "name": "string",
  "priority": "PRIORITY_UNSPECIFIED",
  "severity": "SEVERITY_UNSPECIFIED",
  "state": "STATE_UNSPECIFIED",
  "subscriberEmailAddresses": [
    "string"
  ],
  "testCase": true,
  "timeZone": "string",
  "updateTime": "string"
}
```

<h3 id="cloudsupportcasesescalate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Case](#schemacase)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudsupport.cases.attachments.list

<a id="opIdcloudsupport.cases.attachments.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta/string/attachments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta/{parent}/attachments`

Retrieve all attachments associated with a support case.

<h3 id="cloudsupportcasesattachmentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of Case object for which attachments should be listed.|
|pageSize|query|integer|false|The maximum number of attachments fetched with each request. If not provided, the default is 10. The maximum page size that will be returned is 100.|
|pageToken|query|string|false|A token identifying the page of results to return. If unspecified, the first page is retrieved.|
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
  "attachments": [
    {
      "createTime": "string",
      "creator": {
        "displayName": "string",
        "email": "string",
        "googleSupport": true
      },
      "filename": "string",
      "mimeType": "string",
      "name": "string",
      "sizeBytes": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="cloudsupportcasesattachmentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAttachmentsResponse](#schemalistattachmentsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudsupport.cases.list

<a id="opIdcloudsupport.cases.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta/string/cases \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta/{parent}/cases`

Retrieve all cases under the specified parent. Note: Listing cases under an Organization returns only the cases directly parented by that organization. To retrieve all cases under an organization, including cases parented by projects under that organization, use `cases.search`.

<h3 id="cloudsupportcaseslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The fully qualified name of parent resource to list cases under.|
|filter|query|string|false|An expression written in filter language. If non-empty, the query returns the cases that match the filter. Else, the query doesn't filter the cases. Filter expressions use the following fields with the operators equals (`=`) and `AND`: - `state`: The accepted values are `OPEN` or `CLOSED`. - `priority`: The accepted values are `P0`, `P1`, `P2`, `P3`, or `P4`. You can specify multiple values for priority using the `OR` operator. For example, `priority=P1 OR priority=P2`. - [DEPRECATED] `severity`: The accepted values are `S0`, `S1`, `S2`, `S3`, or `S4`. - `creator.email`: The email address of the case creator. Examples: - `state=CLOSED` - `state=OPEN AND creator.email="tester@example.com"` - `state=OPEN AND (priority=P0 OR priority=P1)`|
|pageSize|query|integer|false|The maximum number of cases fetched with each request. Defaults to 10.|
|pageToken|query|string|false|A token identifying the page of results to return. If unspecified, the first page is retrieved.|
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
  "cases": [
    {
      "classification": {
        "displayName": "string",
        "id": "string"
      },
      "contactEmail": "string",
      "createTime": "string",
      "creator": {
        "displayName": "string",
        "email": "string",
        "googleSupport": true
      },
      "description": "string",
      "displayName": "string",
      "escalated": true,
      "languageCode": "string",
      "name": "string",
      "priority": "PRIORITY_UNSPECIFIED",
      "severity": "SEVERITY_UNSPECIFIED",
      "state": "STATE_UNSPECIFIED",
      "subscriberEmailAddresses": [
        "string"
      ],
      "testCase": true,
      "timeZone": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="cloudsupportcaseslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListCasesResponse](#schemalistcasesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudsupport.cases.create

<a id="opIdcloudsupport.cases.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta/string/cases \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "classification": {
      "displayName": "string",
      "id": "string"
    },
    "contactEmail": "string",
    "creator": {
      "displayName": "string",
      "email": "string"
    },
    "description": "string",
    "displayName": "string",
    "escalated": true,
    "languageCode": "string",
    "name": "string",
    "priority": "PRIORITY_UNSPECIFIED",
    "severity": "SEVERITY_UNSPECIFIED",
    "subscriberEmailAddresses": [
      "string"
    ],
    "testCase": true,
    "timeZone": "string"
  }'
```

`POST /v2beta/{parent}/cases`

Create a new case and associate it with the given Cloud resource. The case object must have the following fields set: display_name, description, classification, and severity.

> Body parameter

```json
{
  "classification": {
    "displayName": "string",
    "id": "string"
  },
  "contactEmail": "string",
  "creator": {
    "displayName": "string",
    "email": "string"
  },
  "description": "string",
  "displayName": "string",
  "escalated": true,
  "languageCode": "string",
  "name": "string",
  "priority": "PRIORITY_UNSPECIFIED",
  "severity": "SEVERITY_UNSPECIFIED",
  "subscriberEmailAddresses": [
    "string"
  ],
  "testCase": true,
  "timeZone": "string"
}
```

<h3 id="cloudsupportcasescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the Cloud resource under which the case should be created.|
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
|body|body|[Case](#schemacase)|false|none|
|» classification|body|[CaseClassification](#schemacaseclassification)|false|The issue classification applicable to this case.|
|» contactEmail|body|string|false|A user-supplied email address to send case update notifications for. This should only be used in BYOID flows, where we cannot infer the user's email address directly from their EUCs.|
|» creator|body|[Actor](#schemaactor)|false|The user who created the case. Note: The name and email will be obfuscated if the case was created by Google Support.|
|» description|body|string|false|A broad description of the issue.|
|» displayName|body|string|false|The short summary of the issue reported in this case.|
|» escalated|body|boolean|false|Whether the case is currently escalated.|
|» languageCode|body|string|false|The language the user has requested to receive support in. This should be a BCP 47 language code (e.g., `"en"`, `"zh-CN"`, `"zh-TW"`, `"ja"`, `"ko"`). If no language or an unsupported language is specified, this field defaults to English (en). Language selection during case creation may affect your available support options. For a list of supported languages and their support working hours, see: https://cloud.google.com/support/docs/language-working-hours|
|» name|body|string|false|The resource name for the case.|
|» priority|body|string|false|The priority of this case. If this is set, do not set severity.|
|» severity|body|string|false|REMOVED. The severity of this case. Use priority instead.|
|» subscriberEmailAddresses|body|[string]|false|The email addresses to receive updates on this case.|
|» testCase|body|boolean|false|Whether this case was created for internal API testing and should not be acted on by the support team.|
|» timeZone|body|string|false|The timezone of the user who created the support case. It should be in a format IANA recognizes: https://www.iana.org/time-zones. There is no additional validation done by the API.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» priority|PRIORITY_UNSPECIFIED|
|» priority|P0|
|» priority|P1|
|» priority|P2|
|» priority|P3|
|» priority|P4|
|» severity|SEVERITY_UNSPECIFIED|
|» severity|S0|
|» severity|S1|
|» severity|S2|
|» severity|S3|
|» severity|S4|

> Example responses

> 200 Response

```json
{
  "classification": {
    "displayName": "string",
    "id": "string"
  },
  "contactEmail": "string",
  "createTime": "string",
  "creator": {
    "displayName": "string",
    "email": "string",
    "googleSupport": true
  },
  "description": "string",
  "displayName": "string",
  "escalated": true,
  "languageCode": "string",
  "name": "string",
  "priority": "PRIORITY_UNSPECIFIED",
  "severity": "SEVERITY_UNSPECIFIED",
  "state": "STATE_UNSPECIFIED",
  "subscriberEmailAddresses": [
    "string"
  ],
  "testCase": true,
  "timeZone": "string",
  "updateTime": "string"
}
```

<h3 id="cloudsupportcasescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Case](#schemacase)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudsupport.cases.comments.list

<a id="opIdcloudsupport.cases.comments.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta/string/comments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta/{parent}/comments`

Retrieve all Comments associated with the Case object.

<h3 id="cloudsupportcasescommentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of Case object for which comments should be listed.|
|pageSize|query|integer|false|The maximum number of comments fetched with each request. Defaults to 10.|
|pageToken|query|string|false|A token identifying the page of results to return. If unspecified, the first page is retrieved.|
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
  "comments": [
    {
      "body": "string",
      "createTime": "string",
      "creator": {
        "displayName": "string",
        "email": "string",
        "googleSupport": true
      },
      "name": "string",
      "plainTextBody": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="cloudsupportcasescommentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListCommentsResponse](#schemalistcommentsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudsupport.cases.comments.create

<a id="opIdcloudsupport.cases.comments.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta/string/comments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "body": "string"
  }'
```

`POST /v2beta/{parent}/comments`

Add a new comment to the specified Case. The comment object must have the following fields set: body.

> Body parameter

```json
{
  "body": "string"
}
```

<h3 id="cloudsupportcasescommentscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of Case to which this comment should be added.|
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
|body|body|[Comment](#schemacomment)|false|none|
|» body|body|string|false|The full comment body. Maximum of 12800 characters. This can contain rich text syntax.|

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
  "body": "string",
  "createTime": "string",
  "creator": {
    "displayName": "string",
    "email": "string",
    "googleSupport": true
  },
  "name": "string",
  "plainTextBody": "string"
}
```

<h3 id="cloudsupportcasescommentscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Comment](#schemacomment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="google-cloud-support-api-media">media</h1>

## cloudsupport.media.download

<a id="opIdcloudsupport.media.download"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta/string:download \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta/{name}:download`

Download a file attachment on a case. Note: HTTP requests must append "?alt=media" to the URL.

<h3 id="cloudsupportmediadownload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource name of the attachment to be downloaded.|
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
  "algorithm": "string",
  "bigstoreObjectRef": "string",
  "blobRef": "string",
  "blobstore2Info": {
    "blobGeneration": "string",
    "blobId": "string",
    "downloadReadHandle": "string",
    "readToken": "string",
    "uploadMetadataContainer": "string"
  },
  "compositeMedia": [
    {
      "blobRef": "string",
      "blobstore2Info": {
        "blobGeneration": "string",
        "blobId": "string",
        "downloadReadHandle": "string",
        "readToken": "string",
        "uploadMetadataContainer": "string"
      },
      "cosmoBinaryReference": "string",
      "crc32cHash": 0,
      "inline": "string",
      "length": "string",
      "md5Hash": "string",
      "objectId": {
        "bucketName": "string",
        "generation": "string",
        "objectName": "string"
      },
      "path": "string",
      "referenceType": "PATH",
      "sha1Hash": "string"
    }
  ],
  "contentType": "string",
  "contentTypeInfo": {
    "bestGuess": "string",
    "fromBytes": "string",
    "fromFileName": "string",
    "fromHeader": "string",
    "fromUrlPath": "string"
  },
  "cosmoBinaryReference": "string",
  "crc32cHash": 0,
  "diffChecksumsResponse": {
    "checksumsLocation": {
      "blobRef": "string",
      "blobstore2Info": {
        "blobGeneration": "string",
        "blobId": "string",
        "downloadReadHandle": "string",
        "readToken": "string",
        "uploadMetadataContainer": "string"
      },
      "cosmoBinaryReference": "string",
      "crc32cHash": 0,
      "inline": "string",
      "length": "string",
      "md5Hash": "string",
      "objectId": {
        "bucketName": "string",
        "generation": "string",
        "objectName": "string"
      },
      "path": "string",
      "referenceType": "PATH",
      "sha1Hash": "string"
    },
    "chunkSizeBytes": "string",
    "objectLocation": {
      "blobRef": "string",
      "blobstore2Info": {
        "blobGeneration": "string",
        "blobId": "string",
        "downloadReadHandle": "string",
        "readToken": "string",
        "uploadMetadataContainer": "string"
      },
      "cosmoBinaryReference": "string",
      "crc32cHash": 0,
      "inline": "string",
      "length": "string",
      "md5Hash": "string",
      "objectId": {
        "bucketName": "string",
        "generation": "string",
        "objectName": "string"
      },
      "path": "string",
      "referenceType": "PATH",
      "sha1Hash": "string"
    },
    "objectSizeBytes": "string",
    "objectVersion": "string"
  },
  "diffDownloadResponse": {
    "objectLocation": {
      "blobRef": "string",
      "blobstore2Info": {
        "blobGeneration": "string",
        "blobId": "string",
        "downloadReadHandle": "string",
        "readToken": "string",
        "uploadMetadataContainer": "string"
      },
      "cosmoBinaryReference": "string",
      "crc32cHash": 0,
      "inline": "string",
      "length": "string",
      "md5Hash": "string",
      "objectId": {
        "bucketName": "string",
        "generation": "string",
        "objectName": "string"
      },
      "path": "string",
      "referenceType": "PATH",
      "sha1Hash": "string"
    }
  },
  "diffUploadRequest": {
    "checksumsInfo": {
      "blobRef": "string",
      "blobstore2Info": {
        "blobGeneration": "string",
        "blobId": "string",
        "downloadReadHandle": "string",
        "readToken": "string",
        "uploadMetadataContainer": "string"
      },
      "cosmoBinaryReference": "string",
      "crc32cHash": 0,
      "inline": "string",
      "length": "string",
      "md5Hash": "string",
      "objectId": {
        "bucketName": "string",
        "generation": "string",
        "objectName": "string"
      },
      "path": "string",
      "referenceType": "PATH",
      "sha1Hash": "string"
    },
    "objectInfo": {
      "blobRef": "string",
      "blobstore2Info": {
        "blobGeneration": "string",
        "blobId": "string",
        "downloadReadHandle": "string",
        "readToken": "string",
        "uploadMetadataContainer": "string"
      },
      "cosmoBinaryReference": "string",
      "crc32cHash": 0,
      "inline": "string",
      "length": "string",
      "md5Hash": "string",
      "objectId": {
        "bucketName": "string",
        "generation": "string",
        "objectName": "string"
      },
      "path": "string",
      "referenceType": "PATH",
      "sha1Hash": "string"
    },
    "objectVersion": "string"
  },
  "diffUploadResponse": {
    "objectVersion": "string",
    "originalObject": {
      "blobRef": "string",
      "blobstore2Info": {
        "blobGeneration": "string",
        "blobId": "string",
        "downloadReadHandle": "string",
        "readToken": "string",
        "uploadMetadataContainer": "string"
      },
      "cosmoBinaryReference": "string",
      "crc32cHash": 0,
      "inline": "string",
      "length": "string",
      "md5Hash": "string",
      "objectId": {
        "bucketName": "string",
        "generation": "string",
        "objectName": "string"
      },
      "path": "string",
      "referenceType": "PATH",
      "sha1Hash": "string"
    }
  },
  "diffVersionResponse": {
    "objectSizeBytes": "string",
    "objectVersion": "string"
  },
  "downloadParameters": {
    "allowGzipCompression": true,
    "ignoreRange": true
  },
  "filename": "string",
  "hash": "string",
  "hashVerified": true,
  "inline": "string",
  "isPotentialRetry": true,
  "length": "string",
  "md5Hash": "string",
  "mediaId": "string",
  "objectId": {
    "bucketName": "string",
    "generation": "string",
    "objectName": "string"
  },
  "path": "string",
  "referenceType": "PATH",
  "sha1Hash": "string",
  "sha256Hash": "string",
  "timestamp": "string",
  "token": "string"
}
```

<h3 id="cloudsupportmediadownload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Media](#schemamedia)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudsupport.media.upload

<a id="opIdcloudsupport.media.upload"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta/string/attachments \
  -X POST \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{"attachment":{"filename":"string"}}'
```

`POST /v2beta/{parent}/attachments`

Create a file attachment on a case or Cloud resource. The attachment object must have the following fields set: filename.

> Body parameter

```json
{
  "attachment": {
    "filename": "string"
  }
}
```

<h3 id="cloudsupportmediaupload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the case (or case parent) to which the attachment should be attached.|
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
|body|body|[CreateAttachmentRequest](#schemacreateattachmentrequest)|false|none|
|» attachment|body|[Attachment](#schemaattachment)|false|Required. The attachment to be created.|

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
  "creator": {
    "displayName": "string",
    "email": "string",
    "googleSupport": true
  },
  "filename": "string",
  "mimeType": "string",
  "name": "string",
  "sizeBytes": "string"
}
```

<h3 id="cloudsupportmediaupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Attachment](#schemaattachment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_Actor">Actor</h2>
<!-- backwards compatibility -->
<a id="schemaactor"></a>
<a id="schema_Actor"></a>
<a id="tocSactor"></a>
<a id="tocsactor"></a>

```json
{
  "displayName": "string",
  "email": "string",
  "googleSupport": true
}
```

An object containing information about the effective user and authenticated principal responsible for an action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The name to display for the actor. If not provided, it is inferred from credentials supplied during case creation. When an email is provided, a display name must also be provided. This will be obfuscated if the user is a Google Support agent.|
|email|string|false|none|The email address of the actor. If not provided, it is inferred from credentials supplied during case creation. If the authenticated principal does not have an email address, one must be provided. When a name is provided, an email must also be provided. This will be obfuscated if the user is a Google Support agent.|
|googleSupport|boolean|false|read-only|Output only. Whether the actor is a Google support actor.|

<h2 id="tocS_Attachment">Attachment</h2>
<!-- backwards compatibility -->
<a id="schemaattachment"></a>
<a id="schema_Attachment"></a>
<a id="tocSattachment"></a>
<a id="tocsattachment"></a>

```json
{
  "createTime": "string",
  "creator": {
    "displayName": "string",
    "email": "string",
    "googleSupport": true
  },
  "filename": "string",
  "mimeType": "string",
  "name": "string",
  "sizeBytes": "string"
}
```

Represents a file attached to a support case.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time at which the attachment was created.|
|creator|[Actor](#schemaactor)|false|none|Output only. The user who uploaded the attachment. Note, the name and email will be obfuscated if the attachment was uploaded by Google support.|
|filename|string|false|none|The filename of the attachment (e.g. `"graph.jpg"`).|
|mimeType|string|false|read-only|Output only. The MIME type of the attachment (e.g. text/plain).|
|name|string|false|read-only|Output only. The resource name of the attachment.|
|sizeBytes|string(int64)|false|read-only|Output only. The size of the attachment in bytes.|

<h2 id="tocS_Blobstore2Info">Blobstore2Info</h2>
<!-- backwards compatibility -->
<a id="schemablobstore2info"></a>
<a id="schema_Blobstore2Info"></a>
<a id="tocSblobstore2info"></a>
<a id="tocsblobstore2info"></a>

```json
{
  "blobGeneration": "string",
  "blobId": "string",
  "downloadReadHandle": "string",
  "readToken": "string",
  "uploadMetadataContainer": "string"
}
```

# gdata.* are outside protos with mising documentation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blobGeneration|string(int64)|false|none|# gdata.* are outside protos with mising documentation|
|blobId|string|false|none|# gdata.* are outside protos with mising documentation|
|downloadReadHandle|string(byte)|false|none|# gdata.* are outside protos with mising documentation|
|readToken|string|false|none|# gdata.* are outside protos with mising documentation|
|uploadMetadataContainer|string(byte)|false|none|# gdata.* are outside protos with mising documentation|

<h2 id="tocS_Case">Case</h2>
<!-- backwards compatibility -->
<a id="schemacase"></a>
<a id="schema_Case"></a>
<a id="tocScase"></a>
<a id="tocscase"></a>

```json
{
  "classification": {
    "displayName": "string",
    "id": "string"
  },
  "contactEmail": "string",
  "createTime": "string",
  "creator": {
    "displayName": "string",
    "email": "string",
    "googleSupport": true
  },
  "description": "string",
  "displayName": "string",
  "escalated": true,
  "languageCode": "string",
  "name": "string",
  "priority": "PRIORITY_UNSPECIFIED",
  "severity": "SEVERITY_UNSPECIFIED",
  "state": "STATE_UNSPECIFIED",
  "subscriberEmailAddresses": [
    "string"
  ],
  "testCase": true,
  "timeZone": "string",
  "updateTime": "string"
}
```

A support case.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classification|[CaseClassification](#schemacaseclassification)|false|none|The issue classification applicable to this case.|
|contactEmail|string|false|none|A user-supplied email address to send case update notifications for. This should only be used in BYOID flows, where we cannot infer the user's email address directly from their EUCs.|
|createTime|string(google-datetime)|false|read-only|Output only. The time this case was created.|
|creator|[Actor](#schemaactor)|false|none|The user who created the case. Note: The name and email will be obfuscated if the case was created by Google Support.|
|description|string|false|none|A broad description of the issue.|
|displayName|string|false|none|The short summary of the issue reported in this case.|
|escalated|boolean|false|none|Whether the case is currently escalated.|
|languageCode|string|false|none|The language the user has requested to receive support in. This should be a BCP 47 language code (e.g., `"en"`, `"zh-CN"`, `"zh-TW"`, `"ja"`, `"ko"`). If no language or an unsupported language is specified, this field defaults to English (en). Language selection during case creation may affect your available support options. For a list of supported languages and their support working hours, see: https://cloud.google.com/support/docs/language-working-hours|
|name|string|false|none|The resource name for the case.|
|priority|string|false|none|The priority of this case. If this is set, do not set severity.|
|severity|string|false|none|REMOVED. The severity of this case. Use priority instead.|
|state|string|false|read-only|Output only. The current status of the support case.|
|subscriberEmailAddresses|[string]|false|none|The email addresses to receive updates on this case.|
|testCase|boolean|false|none|Whether this case was created for internal API testing and should not be acted on by the support team.|
|timeZone|string|false|none|The timezone of the user who created the support case. It should be in a format IANA recognizes: https://www.iana.org/time-zones. There is no additional validation done by the API.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time this case was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|priority|PRIORITY_UNSPECIFIED|
|priority|P0|
|priority|P1|
|priority|P2|
|priority|P3|
|priority|P4|
|severity|SEVERITY_UNSPECIFIED|
|severity|S0|
|severity|S1|
|severity|S2|
|severity|S3|
|severity|S4|
|state|STATE_UNSPECIFIED|
|state|NEW|
|state|IN_PROGRESS_GOOGLE_SUPPORT|
|state|ACTION_REQUIRED|
|state|SOLUTION_PROVIDED|
|state|CLOSED|

<h2 id="tocS_CaseClassification">CaseClassification</h2>
<!-- backwards compatibility -->
<a id="schemacaseclassification"></a>
<a id="schema_CaseClassification"></a>
<a id="tocScaseclassification"></a>
<a id="tocscaseclassification"></a>

```json
{
  "displayName": "string",
  "id": "string"
}
```

A classification object with a product type and value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The display name of the classification.|
|id|string|false|none|The unique ID for a classification. Must be specified for case creation. To retrieve valid classification IDs for case creation, use `caseClassifications.search`.|

<h2 id="tocS_CloseCaseRequest">CloseCaseRequest</h2>
<!-- backwards compatibility -->
<a id="schemaclosecaserequest"></a>
<a id="schema_CloseCaseRequest"></a>
<a id="tocSclosecaserequest"></a>
<a id="tocsclosecaserequest"></a>

```json
{}
```

The request message for the CloseCase endpoint.

<h2 id="tocS_Comment">Comment</h2>
<!-- backwards compatibility -->
<a id="schemacomment"></a>
<a id="schema_Comment"></a>
<a id="tocScomment"></a>
<a id="tocscomment"></a>

```json
{
  "body": "string",
  "createTime": "string",
  "creator": {
    "displayName": "string",
    "email": "string",
    "googleSupport": true
  },
  "name": "string",
  "plainTextBody": "string"
}
```

A comment associated with a support case.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|The full comment body. Maximum of 12800 characters. This can contain rich text syntax.|
|createTime|string(google-datetime)|false|read-only|Output only. The time when this comment was created.|
|creator|[Actor](#schemaactor)|false|none|Output only. The user or Google Support agent created this comment.|
|name|string|false|read-only|Output only. The resource name for the comment.|
|plainTextBody|string|false|read-only|Output only. DEPRECATED. An automatically generated plain text version of body with all rich text syntax stripped.|

<h2 id="tocS_CompositeMedia">CompositeMedia</h2>
<!-- backwards compatibility -->
<a id="schemacompositemedia"></a>
<a id="schema_CompositeMedia"></a>
<a id="tocScompositemedia"></a>
<a id="tocscompositemedia"></a>

```json
{
  "blobRef": "string",
  "blobstore2Info": {
    "blobGeneration": "string",
    "blobId": "string",
    "downloadReadHandle": "string",
    "readToken": "string",
    "uploadMetadataContainer": "string"
  },
  "cosmoBinaryReference": "string",
  "crc32cHash": 0,
  "inline": "string",
  "length": "string",
  "md5Hash": "string",
  "objectId": {
    "bucketName": "string",
    "generation": "string",
    "objectName": "string"
  },
  "path": "string",
  "referenceType": "PATH",
  "sha1Hash": "string"
}
```

# gdata.* are outside protos with mising documentation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blobRef|string(byte)|false|none|# gdata.* are outside protos with mising documentation|
|blobstore2Info|[Blobstore2Info](#schemablobstore2info)|false|none|# gdata.* are outside protos with mising documentation|
|cosmoBinaryReference|string(byte)|false|none|# gdata.* are outside protos with mising documentation|
|crc32cHash|integer(uint32)|false|none|# gdata.* are outside protos with mising documentation|
|inline|string(byte)|false|none|# gdata.* are outside protos with mising documentation|
|length|string(int64)|false|none|# gdata.* are outside protos with mising documentation|
|md5Hash|string(byte)|false|none|# gdata.* are outside protos with mising documentation|
|objectId|[ObjectId](#schemaobjectid)|false|none|# gdata.* are outside protos with mising documentation|
|path|string|false|none|# gdata.* are outside protos with mising documentation|
|referenceType|string|false|none|# gdata.* are outside protos with mising documentation|
|sha1Hash|string(byte)|false|none|# gdata.* are outside protos with mising documentation|

#### Enumerated Values

|Property|Value|
|---|---|
|referenceType|PATH|
|referenceType|BLOB_REF|
|referenceType|INLINE|
|referenceType|BIGSTORE_REF|
|referenceType|COSMO_BINARY_REFERENCE|

<h2 id="tocS_ContentTypeInfo">ContentTypeInfo</h2>
<!-- backwards compatibility -->
<a id="schemacontenttypeinfo"></a>
<a id="schema_ContentTypeInfo"></a>
<a id="tocScontenttypeinfo"></a>
<a id="tocscontenttypeinfo"></a>

```json
{
  "bestGuess": "string",
  "fromBytes": "string",
  "fromFileName": "string",
  "fromHeader": "string",
  "fromUrlPath": "string"
}
```

# gdata.* are outside protos with mising documentation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bestGuess|string|false|none|# gdata.* are outside protos with mising documentation|
|fromBytes|string|false|none|# gdata.* are outside protos with mising documentation|
|fromFileName|string|false|none|# gdata.* are outside protos with mising documentation|
|fromHeader|string|false|none|# gdata.* are outside protos with mising documentation|
|fromUrlPath|string|false|none|# gdata.* are outside protos with mising documentation|

<h2 id="tocS_CreateAttachmentRequest">CreateAttachmentRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateattachmentrequest"></a>
<a id="schema_CreateAttachmentRequest"></a>
<a id="tocScreateattachmentrequest"></a>
<a id="tocscreateattachmentrequest"></a>

```json
{
  "attachment": {
    "createTime": "string",
    "creator": {
      "displayName": "string",
      "email": "string",
      "googleSupport": true
    },
    "filename": "string",
    "mimeType": "string",
    "name": "string",
    "sizeBytes": "string"
  }
}
```

The request message for the CreateAttachment endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachment|[Attachment](#schemaattachment)|false|none|Required. The attachment to be created.|

<h2 id="tocS_DiffChecksumsResponse">DiffChecksumsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadiffchecksumsresponse"></a>
<a id="schema_DiffChecksumsResponse"></a>
<a id="tocSdiffchecksumsresponse"></a>
<a id="tocsdiffchecksumsresponse"></a>

```json
{
  "checksumsLocation": {
    "blobRef": "string",
    "blobstore2Info": {
      "blobGeneration": "string",
      "blobId": "string",
      "downloadReadHandle": "string",
      "readToken": "string",
      "uploadMetadataContainer": "string"
    },
    "cosmoBinaryReference": "string",
    "crc32cHash": 0,
    "inline": "string",
    "length": "string",
    "md5Hash": "string",
    "objectId": {
      "bucketName": "string",
      "generation": "string",
      "objectName": "string"
    },
    "path": "string",
    "referenceType": "PATH",
    "sha1Hash": "string"
  },
  "chunkSizeBytes": "string",
  "objectLocation": {
    "blobRef": "string",
    "blobstore2Info": {
      "blobGeneration": "string",
      "blobId": "string",
      "downloadReadHandle": "string",
      "readToken": "string",
      "uploadMetadataContainer": "string"
    },
    "cosmoBinaryReference": "string",
    "crc32cHash": 0,
    "inline": "string",
    "length": "string",
    "md5Hash": "string",
    "objectId": {
      "bucketName": "string",
      "generation": "string",
      "objectName": "string"
    },
    "path": "string",
    "referenceType": "PATH",
    "sha1Hash": "string"
  },
  "objectSizeBytes": "string",
  "objectVersion": "string"
}
```

# gdata.* are outside protos with mising documentation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checksumsLocation|[CompositeMedia](#schemacompositemedia)|false|none|# gdata.* are outside protos with mising documentation|
|chunkSizeBytes|string(int64)|false|none|# gdata.* are outside protos with mising documentation|
|objectLocation|[CompositeMedia](#schemacompositemedia)|false|none|# gdata.* are outside protos with mising documentation|
|objectSizeBytes|string(int64)|false|none|# gdata.* are outside protos with mising documentation|
|objectVersion|string|false|none|# gdata.* are outside protos with mising documentation|

<h2 id="tocS_DiffDownloadResponse">DiffDownloadResponse</h2>
<!-- backwards compatibility -->
<a id="schemadiffdownloadresponse"></a>
<a id="schema_DiffDownloadResponse"></a>
<a id="tocSdiffdownloadresponse"></a>
<a id="tocsdiffdownloadresponse"></a>

```json
{
  "objectLocation": {
    "blobRef": "string",
    "blobstore2Info": {
      "blobGeneration": "string",
      "blobId": "string",
      "downloadReadHandle": "string",
      "readToken": "string",
      "uploadMetadataContainer": "string"
    },
    "cosmoBinaryReference": "string",
    "crc32cHash": 0,
    "inline": "string",
    "length": "string",
    "md5Hash": "string",
    "objectId": {
      "bucketName": "string",
      "generation": "string",
      "objectName": "string"
    },
    "path": "string",
    "referenceType": "PATH",
    "sha1Hash": "string"
  }
}
```

# gdata.* are outside protos with mising documentation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectLocation|[CompositeMedia](#schemacompositemedia)|false|none|# gdata.* are outside protos with mising documentation|

<h2 id="tocS_DiffUploadRequest">DiffUploadRequest</h2>
<!-- backwards compatibility -->
<a id="schemadiffuploadrequest"></a>
<a id="schema_DiffUploadRequest"></a>
<a id="tocSdiffuploadrequest"></a>
<a id="tocsdiffuploadrequest"></a>

```json
{
  "checksumsInfo": {
    "blobRef": "string",
    "blobstore2Info": {
      "blobGeneration": "string",
      "blobId": "string",
      "downloadReadHandle": "string",
      "readToken": "string",
      "uploadMetadataContainer": "string"
    },
    "cosmoBinaryReference": "string",
    "crc32cHash": 0,
    "inline": "string",
    "length": "string",
    "md5Hash": "string",
    "objectId": {
      "bucketName": "string",
      "generation": "string",
      "objectName": "string"
    },
    "path": "string",
    "referenceType": "PATH",
    "sha1Hash": "string"
  },
  "objectInfo": {
    "blobRef": "string",
    "blobstore2Info": {
      "blobGeneration": "string",
      "blobId": "string",
      "downloadReadHandle": "string",
      "readToken": "string",
      "uploadMetadataContainer": "string"
    },
    "cosmoBinaryReference": "string",
    "crc32cHash": 0,
    "inline": "string",
    "length": "string",
    "md5Hash": "string",
    "objectId": {
      "bucketName": "string",
      "generation": "string",
      "objectName": "string"
    },
    "path": "string",
    "referenceType": "PATH",
    "sha1Hash": "string"
  },
  "objectVersion": "string"
}
```

# gdata.* are outside protos with mising documentation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checksumsInfo|[CompositeMedia](#schemacompositemedia)|false|none|# gdata.* are outside protos with mising documentation|
|objectInfo|[CompositeMedia](#schemacompositemedia)|false|none|# gdata.* are outside protos with mising documentation|
|objectVersion|string|false|none|# gdata.* are outside protos with mising documentation|

<h2 id="tocS_DiffUploadResponse">DiffUploadResponse</h2>
<!-- backwards compatibility -->
<a id="schemadiffuploadresponse"></a>
<a id="schema_DiffUploadResponse"></a>
<a id="tocSdiffuploadresponse"></a>
<a id="tocsdiffuploadresponse"></a>

```json
{
  "objectVersion": "string",
  "originalObject": {
    "blobRef": "string",
    "blobstore2Info": {
      "blobGeneration": "string",
      "blobId": "string",
      "downloadReadHandle": "string",
      "readToken": "string",
      "uploadMetadataContainer": "string"
    },
    "cosmoBinaryReference": "string",
    "crc32cHash": 0,
    "inline": "string",
    "length": "string",
    "md5Hash": "string",
    "objectId": {
      "bucketName": "string",
      "generation": "string",
      "objectName": "string"
    },
    "path": "string",
    "referenceType": "PATH",
    "sha1Hash": "string"
  }
}
```

# gdata.* are outside protos with mising documentation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectVersion|string|false|none|# gdata.* are outside protos with mising documentation|
|originalObject|[CompositeMedia](#schemacompositemedia)|false|none|# gdata.* are outside protos with mising documentation|

<h2 id="tocS_DiffVersionResponse">DiffVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadiffversionresponse"></a>
<a id="schema_DiffVersionResponse"></a>
<a id="tocSdiffversionresponse"></a>
<a id="tocsdiffversionresponse"></a>

```json
{
  "objectSizeBytes": "string",
  "objectVersion": "string"
}
```

# gdata.* are outside protos with mising documentation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectSizeBytes|string(int64)|false|none|# gdata.* are outside protos with mising documentation|
|objectVersion|string|false|none|# gdata.* are outside protos with mising documentation|

<h2 id="tocS_DownloadParameters">DownloadParameters</h2>
<!-- backwards compatibility -->
<a id="schemadownloadparameters"></a>
<a id="schema_DownloadParameters"></a>
<a id="tocSdownloadparameters"></a>
<a id="tocsdownloadparameters"></a>

```json
{
  "allowGzipCompression": true,
  "ignoreRange": true
}
```

# gdata.* are outside protos with mising documentation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowGzipCompression|boolean|false|none|# gdata.* are outside protos with mising documentation|
|ignoreRange|boolean|false|none|# gdata.* are outside protos with mising documentation|

<h2 id="tocS_EscalateCaseRequest">EscalateCaseRequest</h2>
<!-- backwards compatibility -->
<a id="schemaescalatecaserequest"></a>
<a id="schema_EscalateCaseRequest"></a>
<a id="tocSescalatecaserequest"></a>
<a id="tocsescalatecaserequest"></a>

```json
{
  "escalation": {
    "justification": "string",
    "reason": "REASON_UNSPECIFIED"
  }
}
```

The request message for the EscalateCase endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|escalation|[Escalation](#schemaescalation)|false|none|The escalation object to be sent with the escalation request.|

<h2 id="tocS_Escalation">Escalation</h2>
<!-- backwards compatibility -->
<a id="schemaescalation"></a>
<a id="schema_Escalation"></a>
<a id="tocSescalation"></a>
<a id="tocsescalation"></a>

```json
{
  "justification": "string",
  "reason": "REASON_UNSPECIFIED"
}
```

An escalation of a support case.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|justification|string|false|none|Required. A free text description to accompany the `reason` field above. Provides additional context on why the case is being escalated.|
|reason|string|false|none|Required. The reason why the Case is being escalated.|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|REASON_UNSPECIFIED|
|reason|RESOLUTION_TIME|
|reason|TECHNICAL_EXPERTISE|
|reason|BUSINESS_IMPACT|

<h2 id="tocS_ListAttachmentsResponse">ListAttachmentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistattachmentsresponse"></a>
<a id="schema_ListAttachmentsResponse"></a>
<a id="tocSlistattachmentsresponse"></a>
<a id="tocslistattachmentsresponse"></a>

```json
{
  "attachments": [
    {
      "createTime": "string",
      "creator": {
        "displayName": "string",
        "email": "string",
        "googleSupport": true
      },
      "filename": "string",
      "mimeType": "string",
      "name": "string",
      "sizeBytes": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response message for the ListAttachments endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachments|[[Attachment](#schemaattachment)]|false|none|The list of attachments associated with the given case.|
|nextPageToken|string|false|none|A token to retrieve the next page of results. This should be set in the `page_token` field of subsequent `cases.attachments.list` requests. If unspecified, there are no more results to retrieve.|

<h2 id="tocS_ListCasesResponse">ListCasesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcasesresponse"></a>
<a id="schema_ListCasesResponse"></a>
<a id="tocSlistcasesresponse"></a>
<a id="tocslistcasesresponse"></a>

```json
{
  "cases": [
    {
      "classification": {
        "displayName": "string",
        "id": "string"
      },
      "contactEmail": "string",
      "createTime": "string",
      "creator": {
        "displayName": "string",
        "email": "string",
        "googleSupport": true
      },
      "description": "string",
      "displayName": "string",
      "escalated": true,
      "languageCode": "string",
      "name": "string",
      "priority": "PRIORITY_UNSPECIFIED",
      "severity": "SEVERITY_UNSPECIFIED",
      "state": "STATE_UNSPECIFIED",
      "subscriberEmailAddresses": [
        "string"
      ],
      "testCase": true,
      "timeZone": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response message for the ListCases endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cases|[[Case](#schemacase)]|false|none|The list of cases associated with the cloud resource, after any filters have been applied.|
|nextPageToken|string|false|none|A token to retrieve the next page of results. This should be set in the `page_token` field of subsequent `ListCasesRequest` message that is issued. If unspecified, there are no more results to retrieve.|

<h2 id="tocS_ListCommentsResponse">ListCommentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcommentsresponse"></a>
<a id="schema_ListCommentsResponse"></a>
<a id="tocSlistcommentsresponse"></a>
<a id="tocslistcommentsresponse"></a>

```json
{
  "comments": [
    {
      "body": "string",
      "createTime": "string",
      "creator": {
        "displayName": "string",
        "email": "string",
        "googleSupport": true
      },
      "name": "string",
      "plainTextBody": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response message for the ListComments endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comments|[[Comment](#schemacomment)]|false|none|The list of Comments associated with the given Case.|
|nextPageToken|string|false|none|A token to retrieve the next page of results. This should be set in the `page_token` field of subsequent `ListCommentsRequest` message that is issued. If unspecified, there are no more results to retrieve.|

<h2 id="tocS_Media">Media</h2>
<!-- backwards compatibility -->
<a id="schemamedia"></a>
<a id="schema_Media"></a>
<a id="tocSmedia"></a>
<a id="tocsmedia"></a>

```json
{
  "algorithm": "string",
  "bigstoreObjectRef": "string",
  "blobRef": "string",
  "blobstore2Info": {
    "blobGeneration": "string",
    "blobId": "string",
    "downloadReadHandle": "string",
    "readToken": "string",
    "uploadMetadataContainer": "string"
  },
  "compositeMedia": [
    {
      "blobRef": "string",
      "blobstore2Info": {
        "blobGeneration": "string",
        "blobId": "string",
        "downloadReadHandle": "string",
        "readToken": "string",
        "uploadMetadataContainer": "string"
      },
      "cosmoBinaryReference": "string",
      "crc32cHash": 0,
      "inline": "string",
      "length": "string",
      "md5Hash": "string",
      "objectId": {
        "bucketName": "string",
        "generation": "string",
        "objectName": "string"
      },
      "path": "string",
      "referenceType": "PATH",
      "sha1Hash": "string"
    }
  ],
  "contentType": "string",
  "contentTypeInfo": {
    "bestGuess": "string",
    "fromBytes": "string",
    "fromFileName": "string",
    "fromHeader": "string",
    "fromUrlPath": "string"
  },
  "cosmoBinaryReference": "string",
  "crc32cHash": 0,
  "diffChecksumsResponse": {
    "checksumsLocation": {
      "blobRef": "string",
      "blobstore2Info": {
        "blobGeneration": "string",
        "blobId": "string",
        "downloadReadHandle": "string",
        "readToken": "string",
        "uploadMetadataContainer": "string"
      },
      "cosmoBinaryReference": "string",
      "crc32cHash": 0,
      "inline": "string",
      "length": "string",
      "md5Hash": "string",
      "objectId": {
        "bucketName": "string",
        "generation": "string",
        "objectName": "string"
      },
      "path": "string",
      "referenceType": "PATH",
      "sha1Hash": "string"
    },
    "chunkSizeBytes": "string",
    "objectLocation": {
      "blobRef": "string",
      "blobstore2Info": {
        "blobGeneration": "string",
        "blobId": "string",
        "downloadReadHandle": "string",
        "readToken": "string",
        "uploadMetadataContainer": "string"
      },
      "cosmoBinaryReference": "string",
      "crc32cHash": 0,
      "inline": "string",
      "length": "string",
      "md5Hash": "string",
      "objectId": {
        "bucketName": "string",
        "generation": "string",
        "objectName": "string"
      },
      "path": "string",
      "referenceType": "PATH",
      "sha1Hash": "string"
    },
    "objectSizeBytes": "string",
    "objectVersion": "string"
  },
  "diffDownloadResponse": {
    "objectLocation": {
      "blobRef": "string",
      "blobstore2Info": {
        "blobGeneration": "string",
        "blobId": "string",
        "downloadReadHandle": "string",
        "readToken": "string",
        "uploadMetadataContainer": "string"
      },
      "cosmoBinaryReference": "string",
      "crc32cHash": 0,
      "inline": "string",
      "length": "string",
      "md5Hash": "string",
      "objectId": {
        "bucketName": "string",
        "generation": "string",
        "objectName": "string"
      },
      "path": "string",
      "referenceType": "PATH",
      "sha1Hash": "string"
    }
  },
  "diffUploadRequest": {
    "checksumsInfo": {
      "blobRef": "string",
      "blobstore2Info": {
        "blobGeneration": "string",
        "blobId": "string",
        "downloadReadHandle": "string",
        "readToken": "string",
        "uploadMetadataContainer": "string"
      },
      "cosmoBinaryReference": "string",
      "crc32cHash": 0,
      "inline": "string",
      "length": "string",
      "md5Hash": "string",
      "objectId": {
        "bucketName": "string",
        "generation": "string",
        "objectName": "string"
      },
      "path": "string",
      "referenceType": "PATH",
      "sha1Hash": "string"
    },
    "objectInfo": {
      "blobRef": "string",
      "blobstore2Info": {
        "blobGeneration": "string",
        "blobId": "string",
        "downloadReadHandle": "string",
        "readToken": "string",
        "uploadMetadataContainer": "string"
      },
      "cosmoBinaryReference": "string",
      "crc32cHash": 0,
      "inline": "string",
      "length": "string",
      "md5Hash": "string",
      "objectId": {
        "bucketName": "string",
        "generation": "string",
        "objectName": "string"
      },
      "path": "string",
      "referenceType": "PATH",
      "sha1Hash": "string"
    },
    "objectVersion": "string"
  },
  "diffUploadResponse": {
    "objectVersion": "string",
    "originalObject": {
      "blobRef": "string",
      "blobstore2Info": {
        "blobGeneration": "string",
        "blobId": "string",
        "downloadReadHandle": "string",
        "readToken": "string",
        "uploadMetadataContainer": "string"
      },
      "cosmoBinaryReference": "string",
      "crc32cHash": 0,
      "inline": "string",
      "length": "string",
      "md5Hash": "string",
      "objectId": {
        "bucketName": "string",
        "generation": "string",
        "objectName": "string"
      },
      "path": "string",
      "referenceType": "PATH",
      "sha1Hash": "string"
    }
  },
  "diffVersionResponse": {
    "objectSizeBytes": "string",
    "objectVersion": "string"
  },
  "downloadParameters": {
    "allowGzipCompression": true,
    "ignoreRange": true
  },
  "filename": "string",
  "hash": "string",
  "hashVerified": true,
  "inline": "string",
  "isPotentialRetry": true,
  "length": "string",
  "md5Hash": "string",
  "mediaId": "string",
  "objectId": {
    "bucketName": "string",
    "generation": "string",
    "objectName": "string"
  },
  "path": "string",
  "referenceType": "PATH",
  "sha1Hash": "string",
  "sha256Hash": "string",
  "timestamp": "string",
  "token": "string"
}
```

# gdata.* are outside protos with mising documentation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|string|false|none|# gdata.* are outside protos with mising documentation|
|bigstoreObjectRef|string(byte)|false|none|# gdata.* are outside protos with mising documentation|
|blobRef|string(byte)|false|none|# gdata.* are outside protos with mising documentation|
|blobstore2Info|[Blobstore2Info](#schemablobstore2info)|false|none|# gdata.* are outside protos with mising documentation|
|compositeMedia|[[CompositeMedia](#schemacompositemedia)]|false|none|# gdata.* are outside protos with mising documentation|
|contentType|string|false|none|# gdata.* are outside protos with mising documentation|
|contentTypeInfo|[ContentTypeInfo](#schemacontenttypeinfo)|false|none|# gdata.* are outside protos with mising documentation|
|cosmoBinaryReference|string(byte)|false|none|# gdata.* are outside protos with mising documentation|
|crc32cHash|integer(uint32)|false|none|# gdata.* are outside protos with mising documentation|
|diffChecksumsResponse|[DiffChecksumsResponse](#schemadiffchecksumsresponse)|false|none|# gdata.* are outside protos with mising documentation|
|diffDownloadResponse|[DiffDownloadResponse](#schemadiffdownloadresponse)|false|none|# gdata.* are outside protos with mising documentation|
|diffUploadRequest|[DiffUploadRequest](#schemadiffuploadrequest)|false|none|# gdata.* are outside protos with mising documentation|
|diffUploadResponse|[DiffUploadResponse](#schemadiffuploadresponse)|false|none|# gdata.* are outside protos with mising documentation|
|diffVersionResponse|[DiffVersionResponse](#schemadiffversionresponse)|false|none|# gdata.* are outside protos with mising documentation|
|downloadParameters|[DownloadParameters](#schemadownloadparameters)|false|none|# gdata.* are outside protos with mising documentation|
|filename|string|false|none|# gdata.* are outside protos with mising documentation|
|hash|string|false|none|# gdata.* are outside protos with mising documentation|
|hashVerified|boolean|false|none|# gdata.* are outside protos with mising documentation|
|inline|string(byte)|false|none|# gdata.* are outside protos with mising documentation|
|isPotentialRetry|boolean|false|none|# gdata.* are outside protos with mising documentation|
|length|string(int64)|false|none|# gdata.* are outside protos with mising documentation|
|md5Hash|string(byte)|false|none|# gdata.* are outside protos with mising documentation|
|mediaId|string(byte)|false|none|# gdata.* are outside protos with mising documentation|
|objectId|[ObjectId](#schemaobjectid)|false|none|# gdata.* are outside protos with mising documentation|
|path|string|false|none|# gdata.* are outside protos with mising documentation|
|referenceType|string|false|none|# gdata.* are outside protos with mising documentation|
|sha1Hash|string(byte)|false|none|# gdata.* are outside protos with mising documentation|
|sha256Hash|string(byte)|false|none|# gdata.* are outside protos with mising documentation|
|timestamp|string(uint64)|false|none|# gdata.* are outside protos with mising documentation|
|token|string|false|none|# gdata.* are outside protos with mising documentation|

#### Enumerated Values

|Property|Value|
|---|---|
|referenceType|PATH|
|referenceType|BLOB_REF|
|referenceType|INLINE|
|referenceType|GET_MEDIA|
|referenceType|COMPOSITE_MEDIA|
|referenceType|BIGSTORE_REF|
|referenceType|DIFF_VERSION_RESPONSE|
|referenceType|DIFF_CHECKSUMS_RESPONSE|
|referenceType|DIFF_DOWNLOAD_RESPONSE|
|referenceType|DIFF_UPLOAD_REQUEST|
|referenceType|DIFF_UPLOAD_RESPONSE|
|referenceType|COSMO_BINARY_REFERENCE|
|referenceType|ARBITRARY_BYTES|

<h2 id="tocS_ObjectId">ObjectId</h2>
<!-- backwards compatibility -->
<a id="schemaobjectid"></a>
<a id="schema_ObjectId"></a>
<a id="tocSobjectid"></a>
<a id="tocsobjectid"></a>

```json
{
  "bucketName": "string",
  "generation": "string",
  "objectName": "string"
}
```

# gdata.* are outside protos with mising documentation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketName|string|false|none|# gdata.* are outside protos with mising documentation|
|generation|string(int64)|false|none|# gdata.* are outside protos with mising documentation|
|objectName|string|false|none|# gdata.* are outside protos with mising documentation|

<h2 id="tocS_SearchCaseClassificationsResponse">SearchCaseClassificationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchcaseclassificationsresponse"></a>
<a id="schema_SearchCaseClassificationsResponse"></a>
<a id="tocSsearchcaseclassificationsresponse"></a>
<a id="tocssearchcaseclassificationsresponse"></a>

```json
{
  "caseClassifications": [
    {
      "displayName": "string",
      "id": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response message for SearchCaseClassifications endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caseClassifications|[[CaseClassification](#schemacaseclassification)]|false|none|The classifications retrieved.|
|nextPageToken|string|false|none|A token to retrieve the next page of results. This should be set in the `page_token` field of subsequent `SearchCaseClassificationsRequest` message that is issued. If unspecified, there are no more results to retrieve.|

<h2 id="tocS_SearchCasesResponse">SearchCasesResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchcasesresponse"></a>
<a id="schema_SearchCasesResponse"></a>
<a id="tocSsearchcasesresponse"></a>
<a id="tocssearchcasesresponse"></a>

```json
{
  "cases": [
    {
      "classification": {
        "displayName": "string",
        "id": "string"
      },
      "contactEmail": "string",
      "createTime": "string",
      "creator": {
        "displayName": "string",
        "email": "string",
        "googleSupport": true
      },
      "description": "string",
      "displayName": "string",
      "escalated": true,
      "languageCode": "string",
      "name": "string",
      "priority": "PRIORITY_UNSPECIFIED",
      "severity": "SEVERITY_UNSPECIFIED",
      "state": "STATE_UNSPECIFIED",
      "subscriberEmailAddresses": [
        "string"
      ],
      "testCase": true,
      "timeZone": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response message for the SearchCases endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cases|[[Case](#schemacase)]|false|none|The list of Case associated with the cloud resource, after any filters have been applied.|
|nextPageToken|string|false|none|A token to retrieve the next page of results. This should be set in the `page_token` field of subsequent `SearchCaseRequest` message that is issued. If unspecified, there are no more results to retrieve.|

<h2 id="tocS_WorkflowOperationMetadata">WorkflowOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowoperationmetadata"></a>
<a id="schema_WorkflowOperationMetadata"></a>
<a id="tocSworkflowoperationmetadata"></a>
<a id="tocsworkflowoperationmetadata"></a>

```json
{
  "namespace": "string",
  "operationAction": "OPERATION_ACTION_UNSPECIFIED",
  "workflowOperationType": "UNKNOWN_OPERATION_TYPE"
}
```

Metadata about the operation. Used to lookup the current status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namespace|string|false|none|The namespace that the job was scheduled in. Must be included in the workflow metadata so the workflow status can be retrieved.|
|operationAction|string|false|none|The type of action the operation is classified as.|
|workflowOperationType|string|false|none|Which version of the workflow service this operation came from.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationAction|OPERATION_ACTION_UNSPECIFIED|
|operationAction|CREATE_SUPPORT_ACCOUNT|
|operationAction|UPDATE_SUPPORT_ACCOUNT|
|operationAction|PURCHASE_SUPPORT_ACCOUNT|
|workflowOperationType|UNKNOWN_OPERATION_TYPE|
|workflowOperationType|WORKFLOWS_V1|
|workflowOperationType|WORKFLOWS_V2|
