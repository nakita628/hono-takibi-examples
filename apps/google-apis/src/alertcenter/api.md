<h1 id="google-workspace-alert-center-api">Google Workspace Alert Center API v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Manages alerts on issues affecting your domain. Note: The current version of this API (v1beta1) is available to all Google Workspace customers.

Base URLs:

* <a href="https://alertcenter.googleapis.com/">https://alertcenter.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/admin-sdk/alertcenter/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/apps.alerts|See and delete your domain's G Suite alerts, and send alert feedback|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/apps.alerts|See and delete your domain's G Suite alerts, and send alert feedback|

<h1 id="google-workspace-alert-center-api-alerts">alerts</h1>

## alertcenter.alerts.list

<a id="opIdalertcenter.alerts.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/alerts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/alerts`

Lists the alerts.

<h3 id="alertcenteralertslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|query|string|false|Optional. The unique identifier of the Google Workspace account of the customer the alerts are associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).|
|filter|query|string|false|Optional. A query string for filtering alert results. For more details, see [Query filters](https://developers.google.com/admin-sdk/alertcenter/guides/query-filters) and [Supported query filter fields](https://developers.google.com/admin-sdk/alertcenter/reference/filter-fields#alerts.list).|
|orderBy|query|string|false|Optional. The sort order of the list results. If not specified results may be returned in arbitrary order. You can sort the results in descending order based on the creation timestamp using `order_by="create_time desc"`. Currently, supported sorting are `create_time asc`, `create_time desc`, `update_time desc`|
|pageSize|query|integer|false|Optional. The requested page size. Server may return fewer items than requested. If unspecified, server picks an appropriate default.|
|pageToken|query|string|false|Optional. A token identifying a page of results the server should return. If empty, a new iteration is started. To continue an iteration, pass in the value from the previous ListAlertsResponse's next_page_token field.|
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
  "alerts": [
    {
      "alertId": "string",
      "createTime": "string",
      "customerId": "string",
      "data": {
        "property1": null,
        "property2": null
      },
      "deleted": true,
      "endTime": "string",
      "etag": "string",
      "metadata": {
        "alertId": "string",
        "assignee": "string",
        "customerId": "string",
        "etag": "string",
        "severity": "string",
        "status": "string",
        "updateTime": "string"
      },
      "securityInvestigationToolLink": "string",
      "source": "string",
      "startTime": "string",
      "type": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="alertcenteralertslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAlertsResponse](#schemalistalertsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.alerts ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.alerts )
</aside>

## alertcenter.alerts.get

<a id="opIdalertcenter.alerts.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/alerts/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/alerts/{alertId}`

Gets the specified alert. Attempting to get a nonexistent alert returns `NOT_FOUND` error.

<h3 id="alertcenteralertsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alertId|path|string|true|Required. The identifier of the alert to retrieve.|
|customerId|query|string|false|Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).|
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
  "alertId": "string",
  "createTime": "string",
  "customerId": "string",
  "data": {
    "property1": null,
    "property2": null
  },
  "deleted": true,
  "endTime": "string",
  "etag": "string",
  "metadata": {
    "alertId": "string",
    "assignee": "string",
    "customerId": "string",
    "etag": "string",
    "severity": "string",
    "status": "string",
    "updateTime": "string"
  },
  "securityInvestigationToolLink": "string",
  "source": "string",
  "startTime": "string",
  "type": "string",
  "updateTime": "string"
}
```

<h3 id="alertcenteralertsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Alert](#schemaalert)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.alerts ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.alerts )
</aside>

## alertcenter.alerts.delete

<a id="opIdalertcenter.alerts.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/alerts/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/alerts/{alertId}`

Marks the specified alert for deletion. An alert that has been marked for deletion is removed from Alert Center after 30 days. Marking an alert for deletion has no effect on an alert which has already been marked for deletion. Attempting to mark a nonexistent alert for deletion results in a `NOT_FOUND` error.

<h3 id="alertcenteralertsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alertId|path|string|true|Required. The identifier of the alert to delete.|
|customerId|query|string|false|Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).|
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

<h3 id="alertcenteralertsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.alerts ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.alerts )
</aside>

## alertcenter.alerts.feedback.list

<a id="opIdalertcenter.alerts.feedback.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/alerts/string/feedback \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/alerts/{alertId}/feedback`

Lists all the feedback for an alert. Attempting to list feedbacks for a non-existent alert returns `NOT_FOUND` error.

<h3 id="alertcenteralertsfeedbacklist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alertId|path|string|true|Required. The alert identifier. The "-" wildcard could be used to represent all alerts.|
|customerId|query|string|false|Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).|
|filter|query|string|false|Optional. A query string for filtering alert feedback results. For more details, see [Query filters](https://developers.google.com/admin-sdk/alertcenter/guides/query-filters) and [Supported query filter fields](https://developers.google.com/admin-sdk/alertcenter/reference/filter-fields#alerts.feedback.list).|
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
  "feedback": [
    {
      "alertId": "string",
      "createTime": "string",
      "customerId": "string",
      "email": "string",
      "feedbackId": "string",
      "type": "ALERT_FEEDBACK_TYPE_UNSPECIFIED"
    }
  ]
}
```

<h3 id="alertcenteralertsfeedbacklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAlertFeedbackResponse](#schemalistalertfeedbackresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.alerts ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.alerts )
</aside>

## alertcenter.alerts.feedback.create

<a id="opIdalertcenter.alerts.feedback.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/alerts/string/feedback \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alertId": "string",
    "createTime": "string",
    "customerId": "string",
    "email": "string",
    "feedbackId": "string",
    "type": "ALERT_FEEDBACK_TYPE_UNSPECIFIED"
  }'
```

`POST /v1beta1/alerts/{alertId}/feedback`

Creates new feedback for an alert. Attempting to create a feedback for a non-existent alert returns `NOT_FOUND` error. Attempting to create a feedback for an alert that is marked for deletion returns `FAILED_PRECONDITION' error.

> Body parameter

```json
{
  "alertId": "string",
  "createTime": "string",
  "customerId": "string",
  "email": "string",
  "feedbackId": "string",
  "type": "ALERT_FEEDBACK_TYPE_UNSPECIFIED"
}
```

<h3 id="alertcenteralertsfeedbackcreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alertId|path|string|true|Required. The identifier of the alert this feedback belongs to.|
|customerId|query|string|false|Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).|
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
|body|body|[AlertFeedback](#schemaalertfeedback)|false|none|
|» alertId|body|string|false|Output only. The alert identifier.|
|» createTime|body|string(google-datetime)|false|Output only. The time this feedback was created.|
|» customerId|body|string|false|Output only. The unique identifier of the Google Workspace account of the customer.|
|» email|body|string|false|Output only. The email of the user that provided the feedback.|
|» feedbackId|body|string|false|Output only. The unique identifier for the feedback.|
|» type|body|string|false|Required. The type of the feedback.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» type|ALERT_FEEDBACK_TYPE_UNSPECIFIED|
|» type|NOT_USEFUL|
|» type|SOMEWHAT_USEFUL|
|» type|VERY_USEFUL|

> Example responses

> 200 Response

```json
{
  "alertId": "string",
  "createTime": "string",
  "customerId": "string",
  "email": "string",
  "feedbackId": "string",
  "type": "ALERT_FEEDBACK_TYPE_UNSPECIFIED"
}
```

<h3 id="alertcenteralertsfeedbackcreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AlertFeedback](#schemaalertfeedback)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.alerts ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.alerts )
</aside>

## alertcenter.alerts.getMetadata

<a id="opIdalertcenter.alerts.getMetadata"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/alerts/string/metadata \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/alerts/{alertId}/metadata`

Returns the metadata of an alert. Attempting to get metadata for a non-existent alert returns `NOT_FOUND` error.

<h3 id="alertcenteralertsgetmetadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alertId|path|string|true|Required. The identifier of the alert this metadata belongs to.|
|customerId|query|string|false|Optional. The unique identifier of the Google Workspace account of the customer the alert metadata is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).|
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
  "alertId": "string",
  "assignee": "string",
  "customerId": "string",
  "etag": "string",
  "severity": "string",
  "status": "string",
  "updateTime": "string"
}
```

<h3 id="alertcenteralertsgetmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AlertMetadata](#schemaalertmetadata)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.alerts ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.alerts )
</aside>

## alertcenter.alerts.undelete

<a id="opIdalertcenter.alerts.undelete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/alerts/string:undelete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "customerId": "string"
  }'
```

`POST /v1beta1/alerts/{alertId}:undelete`

Restores, or "undeletes", an alert that was marked for deletion within the past 30 days. Attempting to undelete an alert which was marked for deletion over 30 days ago (which has been removed from the Alert Center database) or a nonexistent alert returns a `NOT_FOUND` error. Attempting to undelete an alert which has not been marked for deletion has no effect.

> Body parameter

```json
{
  "customerId": "string"
}
```

<h3 id="alertcenteralertsundelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alertId|path|string|true|Required. The identifier of the alert to undelete.|
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
|body|body|[UndeleteAlertRequest](#schemaundeletealertrequest)|false|none|
|» customerId|body|string|false|Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).|

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
  "alertId": "string",
  "createTime": "string",
  "customerId": "string",
  "data": {
    "property1": null,
    "property2": null
  },
  "deleted": true,
  "endTime": "string",
  "etag": "string",
  "metadata": {
    "alertId": "string",
    "assignee": "string",
    "customerId": "string",
    "etag": "string",
    "severity": "string",
    "status": "string",
    "updateTime": "string"
  },
  "securityInvestigationToolLink": "string",
  "source": "string",
  "startTime": "string",
  "type": "string",
  "updateTime": "string"
}
```

<h3 id="alertcenteralertsundelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Alert](#schemaalert)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.alerts ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.alerts )
</aside>

## alertcenter.alerts.batchDelete

<a id="opIdalertcenter.alerts.batchDelete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/alerts:batchDelete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alertId": [
      "string"
    ],
    "customerId": "string"
  }'
```

`POST /v1beta1/alerts:batchDelete`

Performs batch delete operation on alerts.

> Body parameter

```json
{
  "alertId": [
    "string"
  ],
  "customerId": "string"
}
```

<h3 id="alertcenteralertsbatchdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[BatchDeleteAlertsRequest](#schemabatchdeletealertsrequest)|false|none|
|» alertId|body|[string]|false|Required. The list of alert IDs to delete.|
|» customerId|body|string|false|Optional. The unique identifier of the Google Workspace account of the customer the alerts are associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).|

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
  "failedAlertStatus": {
    "property1": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    },
    "property2": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    }
  },
  "successAlertIds": [
    "string"
  ]
}
```

<h3 id="alertcenteralertsbatchdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BatchDeleteAlertsResponse](#schemabatchdeletealertsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.alerts ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.alerts )
</aside>

## alertcenter.alerts.batchUndelete

<a id="opIdalertcenter.alerts.batchUndelete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/alerts:batchUndelete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alertId": [
      "string"
    ],
    "customerId": "string"
  }'
```

`POST /v1beta1/alerts:batchUndelete`

Performs batch undelete operation on alerts.

> Body parameter

```json
{
  "alertId": [
    "string"
  ],
  "customerId": "string"
}
```

<h3 id="alertcenteralertsbatchundelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[BatchUndeleteAlertsRequest](#schemabatchundeletealertsrequest)|false|none|
|» alertId|body|[string]|false|Required. The list of alert IDs to undelete.|
|» customerId|body|string|false|Optional. The unique identifier of the Google Workspace account of the customer the alerts are associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).|

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
  "failedAlertStatus": {
    "property1": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    },
    "property2": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    }
  },
  "successAlertIds": [
    "string"
  ]
}
```

<h3 id="alertcenteralertsbatchundelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BatchUndeleteAlertsResponse](#schemabatchundeletealertsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.alerts ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.alerts )
</aside>

<h1 id="google-workspace-alert-center-api-v1beta1">v1beta1</h1>

## alertcenter.getSettings

<a id="opIdalertcenter.getSettings"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/settings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/settings`

Returns customer-level settings.

<h3 id="alertcentergetsettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|query|string|false|Optional. The unique identifier of the Google Workspace account of the customer the alert settings are associated with. The `customer_id` must/ have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).|
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
  "notifications": [
    {
      "cloudPubsubTopic": {
        "payloadFormat": "PAYLOAD_FORMAT_UNSPECIFIED",
        "topicName": "string"
      }
    }
  ]
}
```

<h3 id="alertcentergetsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Settings](#schemasettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.alerts ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.alerts )
</aside>

## alertcenter.updateSettings

<a id="opIdalertcenter.updateSettings"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/settings \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "notifications": [
      {
        "cloudPubsubTopic": {
          "payloadFormat": "PAYLOAD_FORMAT_UNSPECIFIED",
          "topicName": "string"
        }
      }
    ]
  }'
```

`PATCH /v1beta1/settings`

Updates the customer-level settings.

> Body parameter

```json
{
  "notifications": [
    {
      "cloudPubsubTopic": {
        "payloadFormat": "PAYLOAD_FORMAT_UNSPECIFIED",
        "topicName": "string"
      }
    }
  ]
}
```

<h3 id="alertcenterupdatesettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|query|string|false|Optional. The unique identifier of the Google Workspace account of the customer the alert settings are associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).|
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
|body|body|[Settings](#schemasettings)|false|none|
|» notifications|body|[[Notification](#schemanotification)]|false|The list of notifications.|

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
  "notifications": [
    {
      "cloudPubsubTopic": {
        "payloadFormat": "PAYLOAD_FORMAT_UNSPECIFIED",
        "topicName": "string"
      }
    }
  ]
}
```

<h3 id="alertcenterupdatesettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Settings](#schemasettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.alerts ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.alerts )
</aside>

# Schemas

<h2 id="tocS_AccountSuspensionDetails">AccountSuspensionDetails</h2>
<!-- backwards compatibility -->
<a id="schemaaccountsuspensiondetails"></a>
<a id="schema_AccountSuspensionDetails"></a>
<a id="tocSaccountsuspensiondetails"></a>
<a id="tocsaccountsuspensiondetails"></a>

```json
{
  "abuseReason": "ACCOUNT_SUSPENSION_ABUSE_REASON_UNSPECIFIED",
  "productName": "string"
}
```

Details about why an account is receiving an account suspension warning.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abuseReason|string|false|none|The reason why this account is receiving an account suspension warning.|
|productName|string|false|none|The name of the product being abused. This is restricted to only the following values: "Gmail" "Google Workspace" "Payments" "Voice" "YouTube" "Other"|

#### Enumerated Values

|Property|Value|
|---|---|
|abuseReason|ACCOUNT_SUSPENSION_ABUSE_REASON_UNSPECIFIED|
|abuseReason|TOS_VIOLATION|
|abuseReason|SPAM|
|abuseReason|PHISHING|
|abuseReason|TRAFFIC_PUMPING|
|abuseReason|FRAUD|
|abuseReason|NUMBER_HARVESTING|
|abuseReason|PAYMENTS_FRAUD|
|abuseReason|UNWANTED_CONTENT|

<h2 id="tocS_AccountSuspensionWarning">AccountSuspensionWarning</h2>
<!-- backwards compatibility -->
<a id="schemaaccountsuspensionwarning"></a>
<a id="schema_AccountSuspensionWarning"></a>
<a id="tocSaccountsuspensionwarning"></a>
<a id="tocsaccountsuspensionwarning"></a>

```json
{
  "appealWindow": "string",
  "state": "ACCOUNT_SUSPENSION_WARNING_STATE_UNSPECIFIED",
  "suspensionDetails": [
    {
      "abuseReason": "ACCOUNT_SUSPENSION_ABUSE_REASON_UNSPECIFIED",
      "productName": "string"
    }
  ]
}
```

LINT.IfChange A warning that the customer's account is about to be suspended.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appealWindow|string(google-duration)|false|none|The amount of time remaining to appeal an imminent suspension. After this window has elapsed, the account will be suspended. Only populated if the account suspension is in WARNING state.|
|state|string|false|none|Account suspension warning state.|
|suspensionDetails|[[AccountSuspensionDetails](#schemaaccountsuspensiondetails)]|false|none|Details about why an account is being suspended.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|ACCOUNT_SUSPENSION_WARNING_STATE_UNSPECIFIED|
|state|WARNING|
|state|SUSPENDED|
|state|APPEAL_APPROVED|
|state|APPEAL_SUBMITTED|

<h2 id="tocS_AccountWarning">AccountWarning</h2>
<!-- backwards compatibility -->
<a id="schemaaccountwarning"></a>
<a id="schema_AccountWarning"></a>
<a id="tocSaccountwarning"></a>
<a id="tocsaccountwarning"></a>

```json
{
  "email": "string",
  "loginDetails": {
    "ipAddress": "string",
    "loginTime": "string"
  }
}
```

Alerts for user account warning events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|Required. The email of the user that this event belongs to.|
|loginDetails|[LoginDetails](#schemalogindetails)|false|none|Optional. Details of the login action associated with the warning event. This is only available for: * Suspicious login * Suspicious login (less secure app) * Suspicious programmatic login * User suspended (suspicious activity)|

<h2 id="tocS_ActionInfo">ActionInfo</h2>
<!-- backwards compatibility -->
<a id="schemaactioninfo"></a>
<a id="schema_ActionInfo"></a>
<a id="tocSactioninfo"></a>
<a id="tocsactioninfo"></a>

```json
{}
```

Metadata related to the action.

<h2 id="tocS_ActivityRule">ActivityRule</h2>
<!-- backwards compatibility -->
<a id="schemaactivityrule"></a>
<a id="schema_ActivityRule"></a>
<a id="tocSactivityrule"></a>
<a id="tocsactivityrule"></a>

```json
{
  "actionNames": [
    "string"
  ],
  "createTime": "string",
  "description": "string",
  "displayName": "string",
  "name": "string",
  "query": "string",
  "supersededAlerts": [
    "string"
  ],
  "supersedingAlert": "string",
  "threshold": "string",
  "triggerSource": "string",
  "updateTime": "string",
  "windowSize": "string"
}
```

Alerts from Google Workspace Security Center rules service configured by an admin.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionNames|[string]|false|none|List of action names associated with the rule threshold.|
|createTime|string(google-datetime)|false|none|Rule create timestamp.|
|description|string|false|none|Description of the rule.|
|displayName|string|false|none|Alert display name.|
|name|string|false|none|Rule name.|
|query|string|false|none|Query that is used to get the data from the associated source.|
|supersededAlerts|[string]|false|none|List of alert IDs superseded by this alert. It is used to indicate that this alert is essentially extension of superseded alerts and we found the relationship after creating these alerts.|
|supersedingAlert|string|false|none|Alert ID superseding this alert. It is used to indicate that superseding alert is essentially extension of this alert and we found the relationship after creating both alerts.|
|threshold|string|false|none|Alert threshold is for example “COUNT > 5”.|
|triggerSource|string|false|none|The trigger sources for this rule. * GMAIL_EVENTS * DEVICE_EVENTS * USER_EVENTS|
|updateTime|string(google-datetime)|false|none|The timestamp of the last update to the rule.|
|windowSize|string(google-duration)|false|none|Rule window size. Possible values are 1 hour or 24 hours.|

<h2 id="tocS_Alert">Alert</h2>
<!-- backwards compatibility -->
<a id="schemaalert"></a>
<a id="schema_Alert"></a>
<a id="tocSalert"></a>
<a id="tocsalert"></a>

```json
{
  "alertId": "string",
  "createTime": "string",
  "customerId": "string",
  "data": {
    "property1": null,
    "property2": null
  },
  "deleted": true,
  "endTime": "string",
  "etag": "string",
  "metadata": {
    "alertId": "string",
    "assignee": "string",
    "customerId": "string",
    "etag": "string",
    "severity": "string",
    "status": "string",
    "updateTime": "string"
  },
  "securityInvestigationToolLink": "string",
  "source": "string",
  "startTime": "string",
  "type": "string",
  "updateTime": "string"
}
```

An alert affecting a customer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alertId|string|false|none|Output only. The unique identifier for the alert.|
|createTime|string(google-datetime)|false|none|Output only. The time this alert was created.|
|customerId|string|false|none|Output only. The unique identifier of the Google Workspace account of the customer.|
|data|object|false|none|Optional. The data associated with this alert, for example google.apps.alertcenter.type.DeviceCompromised.|
|deleted|boolean|false|none|Output only. `True` if this alert is marked for deletion.|
|endTime|string(google-datetime)|false|none|Optional. The time the event that caused this alert ceased being active. If provided, the end time must not be earlier than the start time. If not provided, it indicates an ongoing alert.|
|etag|string|false|none|Optional. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of an alert from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform alert updates in order to avoid race conditions: An `etag` is returned in the response which contains alerts, and systems are expected to put that etag in the request to update alert to ensure that their change will be applied to the same version of the alert. If no `etag` is provided in the call to update alert, then the existing alert is overwritten blindly.|
|metadata|[AlertMetadata](#schemaalertmetadata)|false|none|Output only. The metadata associated with this alert.|
|securityInvestigationToolLink|string|false|none|Output only. An optional [Security Investigation Tool](https://support.google.com/a/answer/7575955) query for this alert.|
|source|string|false|none|Required. A unique identifier for the system that reported the alert. This is output only after alert is created. Supported sources are any of the following: * Google Operations * Mobile device management * Gmail phishing * Data Loss Prevention * Domain wide takeout * State sponsored attack * Google identity * Apps outage|
|startTime|string(google-datetime)|false|none|Required. The time the event that caused this alert was started or detected.|
|type|string|false|none|Required. The type of the alert. This is output only after alert is created. For a list of available alert types see [Google Workspace Alert types](https://developers.google.com/admin-sdk/alertcenter/reference/alert-types).|
|updateTime|string(google-datetime)|false|none|Output only. The time this alert was last updated.|

<h2 id="tocS_AlertFeedback">AlertFeedback</h2>
<!-- backwards compatibility -->
<a id="schemaalertfeedback"></a>
<a id="schema_AlertFeedback"></a>
<a id="tocSalertfeedback"></a>
<a id="tocsalertfeedback"></a>

```json
{
  "alertId": "string",
  "createTime": "string",
  "customerId": "string",
  "email": "string",
  "feedbackId": "string",
  "type": "ALERT_FEEDBACK_TYPE_UNSPECIFIED"
}
```

A customer feedback about an alert.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alertId|string|false|none|Output only. The alert identifier.|
|createTime|string(google-datetime)|false|none|Output only. The time this feedback was created.|
|customerId|string|false|none|Output only. The unique identifier of the Google Workspace account of the customer.|
|email|string|false|none|Output only. The email of the user that provided the feedback.|
|feedbackId|string|false|none|Output only. The unique identifier for the feedback.|
|type|string|false|none|Required. The type of the feedback.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ALERT_FEEDBACK_TYPE_UNSPECIFIED|
|type|NOT_USEFUL|
|type|SOMEWHAT_USEFUL|
|type|VERY_USEFUL|

<h2 id="tocS_AlertMetadata">AlertMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaalertmetadata"></a>
<a id="schema_AlertMetadata"></a>
<a id="tocSalertmetadata"></a>
<a id="tocsalertmetadata"></a>

```json
{
  "alertId": "string",
  "assignee": "string",
  "customerId": "string",
  "etag": "string",
  "severity": "string",
  "status": "string",
  "updateTime": "string"
}
```

An alert metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alertId|string|false|none|Output only. The alert identifier.|
|assignee|string|false|none|The email address of the user assigned to the alert.|
|customerId|string|false|none|Output only. The unique identifier of the Google Workspace account of the customer.|
|etag|string|false|none|Optional. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of an alert metadata from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform metadata updates in order to avoid race conditions: An `etag` is returned in the response which contains alert metadata, and systems are expected to put that etag in the request to update alert metadata to ensure that their change will be applied to the same version of the alert metadata. If no `etag` is provided in the call to update alert metadata, then the existing alert metadata is overwritten blindly.|
|severity|string|false|none|The severity value of the alert. Alert Center will set this field at alert creation time, default's to an empty string when it could not be determined. The supported values for update actions on this field are the following: * HIGH * MEDIUM * LOW|
|status|string|false|none|The current status of the alert. The supported values are the following: * NOT_STARTED * IN_PROGRESS * CLOSED|
|updateTime|string(google-datetime)|false|none|Output only. The time this metadata was last updated.|

<h2 id="tocS_ApnsCertificateExpirationInfo">ApnsCertificateExpirationInfo</h2>
<!-- backwards compatibility -->
<a id="schemaapnscertificateexpirationinfo"></a>
<a id="schema_ApnsCertificateExpirationInfo"></a>
<a id="tocSapnscertificateexpirationinfo"></a>
<a id="tocsapnscertificateexpirationinfo"></a>

```json
{
  "appleId": "string",
  "expirationTime": "string",
  "uid": "string"
}
```

The explanation message associated with "APNS certificate is expiring soon" and "APNS certificate has expired" alerts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appleId|string|false|none|The Apple ID used to create the certificate. It may be blank if admins didn't enter it.|
|expirationTime|string(google-datetime)|false|none|The expiration date of the APNS certificate.|
|uid|string|false|none|The UID of the certificate.|

<h2 id="tocS_AppMakerSqlSetupNotification">AppMakerSqlSetupNotification</h2>
<!-- backwards compatibility -->
<a id="schemaappmakersqlsetupnotification"></a>
<a id="schema_AppMakerSqlSetupNotification"></a>
<a id="tocSappmakersqlsetupnotification"></a>
<a id="tocsappmakersqlsetupnotification"></a>

```json
{
  "requestInfo": [
    {
      "appDeveloperEmail": [
        "string"
      ],
      "appKey": "string",
      "numberOfRequests": "string"
    }
  ]
}
```

Alerts from App Maker to notify admins to set up default SQL instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestInfo|[[RequestInfo](#schemarequestinfo)]|false|none|List of applications with requests for default SQL set up.|

<h2 id="tocS_AppSettingsChanged">AppSettingsChanged</h2>
<!-- backwards compatibility -->
<a id="schemaappsettingschanged"></a>
<a id="schema_AppSettingsChanged"></a>
<a id="tocSappsettingschanged"></a>
<a id="tocsappsettingschanged"></a>

```json
{
  "alertDetails": "string",
  "name": "string"
}
```

Alerts from AppSettingsChanged bucket Rules configured by Admin which contain the below rules. Calendar settings changed Drive settings changed Email settings changed Mobile settings changed

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alertDetails|string(byte)|false|none|Any other associated alert details, for example, AlertConfiguration.|
|name|string|false|none|Rule name|

<h2 id="tocS_AppsOutage">AppsOutage</h2>
<!-- backwards compatibility -->
<a id="schemaappsoutage"></a>
<a id="schema_AppsOutage"></a>
<a id="tocSappsoutage"></a>
<a id="tocsappsoutage"></a>

```json
{
  "dashboardUri": "string",
  "incidentTrackingId": "string",
  "mergeInfo": {
    "newAlertId": "string",
    "newIncidentTrackingId": "string"
  },
  "nextUpdateTime": "string",
  "products": [
    "string"
  ],
  "resolutionTime": "string",
  "status": "STATUS_UNSPECIFIED"
}
```

An outage incident reported for a Google Workspace service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dashboardUri|string|false|none|Link to the outage event in Google Workspace Status Dashboard|
|incidentTrackingId|string|false|none|Incident tracking ID.|
|mergeInfo|[MergeInfo](#schemamergeinfo)|false|none|Indicates new alert details under which the outage is communicated. Only populated when Status is MERGED.|
|nextUpdateTime|string(google-datetime)|false|none|Timestamp by which the next update is expected to arrive.|
|products|[string]|false|none|List of products impacted by the outage.|
|resolutionTime|string(google-datetime)|false|none|Timestamp when the outage is expected to be resolved, or has confirmed resolution. Provided only when known.|
|status|string|false|none|Current outage status.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|STATUS_UNSPECIFIED|
|status|NEW|
|status|ONGOING|
|status|RESOLVED|
|status|FALSE_POSITIVE|
|status|PARTIALLY_RESOLVED|
|status|MERGED|
|status|DOWNGRADED|

<h2 id="tocS_Attachment">Attachment</h2>
<!-- backwards compatibility -->
<a id="schemaattachment"></a>
<a id="schema_Attachment"></a>
<a id="tocSattachment"></a>
<a id="tocsattachment"></a>

```json
{
  "csv": {
    "dataRows": [
      {
        "entries": [
          "string"
        ]
      }
    ],
    "headers": [
      "string"
    ]
  }
}
```

Attachment with application-specific information about an alert.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csv|[Csv](#schemacsv)|false|none|A CSV file attachment.|

<h2 id="tocS_BadWhitelist">BadWhitelist</h2>
<!-- backwards compatibility -->
<a id="schemabadwhitelist"></a>
<a id="schema_BadWhitelist"></a>
<a id="tocSbadwhitelist"></a>
<a id="tocsbadwhitelist"></a>

```json
{
  "domainId": {
    "customerPrimaryDomain": "string"
  },
  "maliciousEntity": {
    "displayName": "string",
    "entity": {
      "displayName": "string",
      "emailAddress": "string"
    },
    "fromHeader": "string"
  },
  "messages": [
    {
      "attachmentsSha256Hash": [
        "string"
      ],
      "date": "string",
      "md5HashMessageBody": "string",
      "md5HashSubject": "string",
      "messageBodySnippet": "string",
      "messageId": "string",
      "recipient": "string",
      "sentTime": "string",
      "subjectText": "string"
    }
  ],
  "sourceIp": "string"
}
```

Alert for setting the domain or IP that malicious email comes from as whitelisted domain or IP in Gmail advanced settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainId|[DomainId](#schemadomainid)|false|none|The domain ID.|
|maliciousEntity|[MaliciousEntity](#schemamaliciousentity)|false|none|The entity whose actions triggered a Gmail phishing alert.|
|messages|[[GmailMessageInfo](#schemagmailmessageinfo)]|false|none|The list of messages contained by this alert.|
|sourceIp|string|false|none|The source IP address of the malicious email, for example, `127.0.0.1`.|

<h2 id="tocS_BatchDeleteAlertsRequest">BatchDeleteAlertsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletealertsrequest"></a>
<a id="schema_BatchDeleteAlertsRequest"></a>
<a id="tocSbatchdeletealertsrequest"></a>
<a id="tocsbatchdeletealertsrequest"></a>

```json
{
  "alertId": [
    "string"
  ],
  "customerId": "string"
}
```

A request to perform batch delete on alerts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alertId|[string]|false|none|Required. The list of alert IDs to delete.|
|customerId|string|false|none|Optional. The unique identifier of the Google Workspace account of the customer the alerts are associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).|

<h2 id="tocS_BatchDeleteAlertsResponse">BatchDeleteAlertsResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletealertsresponse"></a>
<a id="schema_BatchDeleteAlertsResponse"></a>
<a id="tocSbatchdeletealertsresponse"></a>
<a id="tocsbatchdeletealertsresponse"></a>

```json
{
  "failedAlertStatus": {
    "property1": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    },
    "property2": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    }
  },
  "successAlertIds": [
    "string"
  ]
}
```

Response to batch delete operation on alerts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failedAlertStatus|object|false|none|The status details for each failed `alert_id`.|
|successAlertIds|[string]|false|none|The successful list of alert IDs.|

<h2 id="tocS_BatchUndeleteAlertsRequest">BatchUndeleteAlertsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchundeletealertsrequest"></a>
<a id="schema_BatchUndeleteAlertsRequest"></a>
<a id="tocSbatchundeletealertsrequest"></a>
<a id="tocsbatchundeletealertsrequest"></a>

```json
{
  "alertId": [
    "string"
  ],
  "customerId": "string"
}
```

A request to perform batch undelete on alerts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alertId|[string]|false|none|Required. The list of alert IDs to undelete.|
|customerId|string|false|none|Optional. The unique identifier of the Google Workspace account of the customer the alerts are associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).|

<h2 id="tocS_BatchUndeleteAlertsResponse">BatchUndeleteAlertsResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchundeletealertsresponse"></a>
<a id="schema_BatchUndeleteAlertsResponse"></a>
<a id="tocSbatchundeletealertsresponse"></a>
<a id="tocsbatchundeletealertsresponse"></a>

```json
{
  "failedAlertStatus": {
    "property1": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    },
    "property2": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    }
  },
  "successAlertIds": [
    "string"
  ]
}
```

Response to batch undelete operation on alerts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failedAlertStatus|object|false|none|The status details for each failed `alert_id`.|
|successAlertIds|[string]|false|none|The successful list of alert IDs.|

<h2 id="tocS_CloudPubsubTopic">CloudPubsubTopic</h2>
<!-- backwards compatibility -->
<a id="schemacloudpubsubtopic"></a>
<a id="schema_CloudPubsubTopic"></a>
<a id="tocScloudpubsubtopic"></a>
<a id="tocscloudpubsubtopic"></a>

```json
{
  "payloadFormat": "PAYLOAD_FORMAT_UNSPECIFIED",
  "topicName": "string"
}
```

A reference to a Cloud Pubsub topic. To register for notifications, the owner of the topic must grant `alerts-api-push-notifications@system.gserviceaccount.com` the `projects.topics.publish` permission.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payloadFormat|string|false|none|Optional. The format of the payload that would be sent. If not specified the format will be JSON.|
|topicName|string|false|none|The `name` field of a Cloud Pubsub [Topic] (https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics#Topic).|

#### Enumerated Values

|Property|Value|
|---|---|
|payloadFormat|PAYLOAD_FORMAT_UNSPECIFIED|
|payloadFormat|JSON|

<h2 id="tocS_Csv">Csv</h2>
<!-- backwards compatibility -->
<a id="schemacsv"></a>
<a id="schema_Csv"></a>
<a id="tocScsv"></a>
<a id="tocscsv"></a>

```json
{
  "dataRows": [
    {
      "entries": [
        "string"
      ]
    }
  ],
  "headers": [
    "string"
  ]
}
```

A representation of a CSV file attachment, as a list of column headers and a list of data rows.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataRows|[[CsvRow](#schemacsvrow)]|false|none|The list of data rows in a CSV file, as string arrays rather than as a single comma-separated string.|
|headers|[string]|false|none|The list of headers for data columns in a CSV file.|

<h2 id="tocS_CsvRow">CsvRow</h2>
<!-- backwards compatibility -->
<a id="schemacsvrow"></a>
<a id="schema_CsvRow"></a>
<a id="tocScsvrow"></a>
<a id="tocscsvrow"></a>

```json
{
  "entries": [
    "string"
  ]
}
```

A representation of a single data row in a CSV file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[string]|false|none|The data entries in a CSV file row, as a string array rather than a single comma-separated string.|

<h2 id="tocS_DeviceCompromised">DeviceCompromised</h2>
<!-- backwards compatibility -->
<a id="schemadevicecompromised"></a>
<a id="schema_DeviceCompromised"></a>
<a id="tocSdevicecompromised"></a>
<a id="tocsdevicecompromised"></a>

```json
{
  "email": "string",
  "events": [
    {
      "deviceCompromisedState": "string",
      "deviceId": "string",
      "deviceModel": "string",
      "deviceType": "string",
      "iosVendorId": "string",
      "resourceId": "string",
      "serialNumber": "string"
    }
  ]
}
```

A mobile device compromised alert. Derived from audit logs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|The email of the user this alert was created for.|
|events|[[DeviceCompromisedSecurityDetail](#schemadevicecompromisedsecuritydetail)]|false|none|Required. The list of security events.|

<h2 id="tocS_DeviceCompromisedSecurityDetail">DeviceCompromisedSecurityDetail</h2>
<!-- backwards compatibility -->
<a id="schemadevicecompromisedsecuritydetail"></a>
<a id="schema_DeviceCompromisedSecurityDetail"></a>
<a id="tocSdevicecompromisedsecuritydetail"></a>
<a id="tocsdevicecompromisedsecuritydetail"></a>

```json
{
  "deviceCompromisedState": "string",
  "deviceId": "string",
  "deviceModel": "string",
  "deviceType": "string",
  "iosVendorId": "string",
  "resourceId": "string",
  "serialNumber": "string"
}
```

Detailed information of a single MDM device compromised event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceCompromisedState|string|false|none|The device compromised state. Possible values are "`Compromised`" or "`Not Compromised`".|
|deviceId|string|false|none|Required. The device ID.|
|deviceModel|string|false|none|The model of the device.|
|deviceType|string|false|none|The type of the device.|
|iosVendorId|string|false|none|Required for iOS, empty for others.|
|resourceId|string|false|none|The device resource ID.|
|serialNumber|string|false|none|The serial number of the device.|

<h2 id="tocS_DlpRuleViolation">DlpRuleViolation</h2>
<!-- backwards compatibility -->
<a id="schemadlpruleviolation"></a>
<a id="schema_DlpRuleViolation"></a>
<a id="tocSdlpruleviolation"></a>
<a id="tocsdlpruleviolation"></a>

```json
{
  "ruleViolationInfo": {
    "dataSource": "DATA_SOURCE_UNSPECIFIED",
    "matchInfo": [
      {
        "predefinedDetector": {
          "detectorName": "string"
        },
        "userDefinedDetector": {
          "displayName": "string",
          "resourceName": "string"
        }
      }
    ],
    "recipients": [
      "string"
    ],
    "resourceInfo": {
      "documentId": "string",
      "resourceTitle": "string"
    },
    "ruleInfo": {
      "displayName": "string",
      "resourceName": "string"
    },
    "suppressedActionTypes": [
      "ACTION_TYPE_UNSPECIFIED"
    ],
    "trigger": "TRIGGER_UNSPECIFIED",
    "triggeredActionInfo": [
      {}
    ],
    "triggeredActionTypes": [
      "ACTION_TYPE_UNSPECIFIED"
    ],
    "triggeringUserEmail": "string"
  }
}
```

Alerts that get triggered on violations of Data Loss Prevention (DLP) rules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ruleViolationInfo|[RuleViolationInfo](#schemaruleviolationinfo)|false|none|Details about the violated DLP rule. Admins can use the predefined detectors provided by Google Cloud DLP https://cloud.google.com/dlp/ when setting up a DLP rule. Matched Cloud DLP detectors in this violation if any will be captured in the MatchInfo.predefined_detector.|

<h2 id="tocS_DomainId">DomainId</h2>
<!-- backwards compatibility -->
<a id="schemadomainid"></a>
<a id="schema_DomainId"></a>
<a id="tocSdomainid"></a>
<a id="tocsdomainid"></a>

```json
{
  "customerPrimaryDomain": "string"
}
```

Domain ID of Gmail phishing alerts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customerPrimaryDomain|string|false|none|The primary domain for the customer.|

<h2 id="tocS_DomainWideTakeoutInitiated">DomainWideTakeoutInitiated</h2>
<!-- backwards compatibility -->
<a id="schemadomainwidetakeoutinitiated"></a>
<a id="schema_DomainWideTakeoutInitiated"></a>
<a id="tocSdomainwidetakeoutinitiated"></a>
<a id="tocsdomainwidetakeoutinitiated"></a>

```json
{
  "email": "string",
  "takeoutRequestId": "string"
}
```

A takeout operation for the entire domain was initiated by an admin. Derived from audit logs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|The email of the admin who initiated the takeout.|
|takeoutRequestId|string|false|none|The takeout request ID.|

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

<h2 id="tocS_GmailMessageInfo">GmailMessageInfo</h2>
<!-- backwards compatibility -->
<a id="schemagmailmessageinfo"></a>
<a id="schema_GmailMessageInfo"></a>
<a id="tocSgmailmessageinfo"></a>
<a id="tocsgmailmessageinfo"></a>

```json
{
  "attachmentsSha256Hash": [
    "string"
  ],
  "date": "string",
  "md5HashMessageBody": "string",
  "md5HashSubject": "string",
  "messageBodySnippet": "string",
  "messageId": "string",
  "recipient": "string",
  "sentTime": "string",
  "subjectText": "string"
}
```

Details of a message in phishing spike alert.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachmentsSha256Hash|[string]|false|none|The `SHA256` hash of email's attachment and all MIME parts.|
|date|string(google-datetime)|false|none|The date of the event related to this email.|
|md5HashMessageBody|string|false|none|The hash of the message body text.|
|md5HashSubject|string|false|none|The MD5 Hash of email's subject (only available for reported emails).|
|messageBodySnippet|string|false|none|The snippet of the message body text (only available for reported emails).|
|messageId|string|false|none|The message ID.|
|recipient|string|false|none|The recipient of this email.|
|sentTime|string(google-datetime)|false|none|The sent time of the email.|
|subjectText|string|false|none|The email subject text (only available for reported emails).|

<h2 id="tocS_GoogleOperations">GoogleOperations</h2>
<!-- backwards compatibility -->
<a id="schemagoogleoperations"></a>
<a id="schema_GoogleOperations"></a>
<a id="tocSgoogleoperations"></a>
<a id="tocsgoogleoperations"></a>

```json
{
  "affectedUserEmails": [
    "string"
  ],
  "attachmentData": {
    "csv": {
      "dataRows": [
        {
          "entries": [
            "string"
          ]
        }
      ],
      "headers": [
        "string"
      ]
    }
  },
  "description": "string",
  "domain": "string",
  "header": "string",
  "title": "string"
}
```

An incident reported by Google Operations for a Google Workspace application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|affectedUserEmails|[string]|false|none|The list of emails which correspond to the users directly affected by the incident.|
|attachmentData|[Attachment](#schemaattachment)|false|none|Optional. Application-specific data for an incident, provided when the Google Workspace application which reported the incident cannot be completely restored to a valid state.|
|description|string|false|none|A detailed, freeform incident description.|
|domain|string|false|none|Customer domain for email template personalization.|
|header|string|false|none|A header to display above the incident message. Typically used to attach a localized notice on the timeline for followup comms translations.|
|title|string|false|none|A one-line incident description.|

<h2 id="tocS_ListAlertFeedbackResponse">ListAlertFeedbackResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistalertfeedbackresponse"></a>
<a id="schema_ListAlertFeedbackResponse"></a>
<a id="tocSlistalertfeedbackresponse"></a>
<a id="tocslistalertfeedbackresponse"></a>

```json
{
  "feedback": [
    {
      "alertId": "string",
      "createTime": "string",
      "customerId": "string",
      "email": "string",
      "feedbackId": "string",
      "type": "ALERT_FEEDBACK_TYPE_UNSPECIFIED"
    }
  ]
}
```

Response message for an alert feedback listing request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|feedback|[[AlertFeedback](#schemaalertfeedback)]|false|none|The list of alert feedback. Feedback entries for each alert are ordered by creation time descending.|

<h2 id="tocS_ListAlertsResponse">ListAlertsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistalertsresponse"></a>
<a id="schema_ListAlertsResponse"></a>
<a id="tocSlistalertsresponse"></a>
<a id="tocslistalertsresponse"></a>

```json
{
  "alerts": [
    {
      "alertId": "string",
      "createTime": "string",
      "customerId": "string",
      "data": {
        "property1": null,
        "property2": null
      },
      "deleted": true,
      "endTime": "string",
      "etag": "string",
      "metadata": {
        "alertId": "string",
        "assignee": "string",
        "customerId": "string",
        "etag": "string",
        "severity": "string",
        "status": "string",
        "updateTime": "string"
      },
      "securityInvestigationToolLink": "string",
      "source": "string",
      "startTime": "string",
      "type": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for an alert listing request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alerts|[[Alert](#schemaalert)]|false|none|The list of alerts.|
|nextPageToken|string|false|none|The token for the next page. If not empty, indicates that there may be more alerts that match the listing request; this value can be used in a subsequent ListAlertsRequest to get alerts continuing from last result of the current list call.|

<h2 id="tocS_LoginDetails">LoginDetails</h2>
<!-- backwards compatibility -->
<a id="schemalogindetails"></a>
<a id="schema_LoginDetails"></a>
<a id="tocSlogindetails"></a>
<a id="tocslogindetails"></a>

```json
{
  "ipAddress": "string",
  "loginTime": "string"
}
```

The details of the login action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ipAddress|string|false|none|Optional. The human-readable IP address (for example, `11.22.33.44`) that is associated with the warning event.|
|loginTime|string(google-datetime)|false|none|Optional. The successful login time that is associated with the warning event. This isn't present for blocked login attempts.|

<h2 id="tocS_MailPhishing">MailPhishing</h2>
<!-- backwards compatibility -->
<a id="schemamailphishing"></a>
<a id="schema_MailPhishing"></a>
<a id="tocSmailphishing"></a>
<a id="tocsmailphishing"></a>

```json
{
  "domainId": {
    "customerPrimaryDomain": "string"
  },
  "isInternal": true,
  "maliciousEntity": {
    "displayName": "string",
    "entity": {
      "displayName": "string",
      "emailAddress": "string"
    },
    "fromHeader": "string"
  },
  "messages": [
    {
      "attachmentsSha256Hash": [
        "string"
      ],
      "date": "string",
      "md5HashMessageBody": "string",
      "md5HashSubject": "string",
      "messageBodySnippet": "string",
      "messageId": "string",
      "recipient": "string",
      "sentTime": "string",
      "subjectText": "string"
    }
  ],
  "systemActionType": "SYSTEM_ACTION_TYPE_UNSPECIFIED"
}
```

Proto for all phishing alerts with common payload. Supported types are any of the following: * User reported phishing * User reported spam spike * Suspicious message reported * Phishing reclassification * Malware reclassification * Gmail potential employee spoofing

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainId|[DomainId](#schemadomainid)|false|none|The domain ID.|
|isInternal|boolean|false|none|If `true`, the email originated from within the organization.|
|maliciousEntity|[MaliciousEntity](#schemamaliciousentity)|false|none|The entity whose actions triggered a Gmail phishing alert.|
|messages|[[GmailMessageInfo](#schemagmailmessageinfo)]|false|none|The list of messages contained by this alert.|
|systemActionType|string|false|none|System actions on the messages.|

#### Enumerated Values

|Property|Value|
|---|---|
|systemActionType|SYSTEM_ACTION_TYPE_UNSPECIFIED|
|systemActionType|NO_OPERATION|
|systemActionType|REMOVED_FROM_INBOX|

<h2 id="tocS_MaliciousEntity">MaliciousEntity</h2>
<!-- backwards compatibility -->
<a id="schemamaliciousentity"></a>
<a id="schema_MaliciousEntity"></a>
<a id="tocSmaliciousentity"></a>
<a id="tocsmaliciousentity"></a>

```json
{
  "displayName": "string",
  "entity": {
    "displayName": "string",
    "emailAddress": "string"
  },
  "fromHeader": "string"
}
```

Entity whose actions triggered a Gmail phishing alert.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The header from display name.|
|entity|[User](#schemauser)|false|none|The actor who triggered a gmail phishing alert.|
|fromHeader|string|false|none|The sender email address.|

<h2 id="tocS_MandatoryServiceAnnouncement">MandatoryServiceAnnouncement</h2>
<!-- backwards compatibility -->
<a id="schemamandatoryserviceannouncement"></a>
<a id="schema_MandatoryServiceAnnouncement"></a>
<a id="tocSmandatoryserviceannouncement"></a>
<a id="tocsmandatoryserviceannouncement"></a>

```json
{
  "description": "string",
  "title": "string"
}
```

Alert Created by the MSA team for communications necessary for continued use of Google Workspace Products.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Detailed, freeform text describing the announcement|
|title|string|false|none|One line summary of the announcement|

<h2 id="tocS_MatchInfo">MatchInfo</h2>
<!-- backwards compatibility -->
<a id="schemamatchinfo"></a>
<a id="schema_MatchInfo"></a>
<a id="tocSmatchinfo"></a>
<a id="tocsmatchinfo"></a>

```json
{
  "predefinedDetector": {
    "detectorName": "string"
  },
  "userDefinedDetector": {
    "displayName": "string",
    "resourceName": "string"
  }
}
```

Proto that contains match information from the condition part of the rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|predefinedDetector|[PredefinedDetectorInfo](#schemapredefineddetectorinfo)|false|none|For matched detector predefined by Google.|
|userDefinedDetector|[UserDefinedDetectorInfo](#schemauserdefineddetectorinfo)|false|none|For matched detector defined by administrators.|

<h2 id="tocS_MergeInfo">MergeInfo</h2>
<!-- backwards compatibility -->
<a id="schemamergeinfo"></a>
<a id="schema_MergeInfo"></a>
<a id="tocSmergeinfo"></a>
<a id="tocsmergeinfo"></a>

```json
{
  "newAlertId": "string",
  "newIncidentTrackingId": "string"
}
```

New alert tracking numbers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|newAlertId|string|false|none|Optional. New alert ID. Reference the [google.apps.alertcenter.Alert] with this ID for the current state.|
|newIncidentTrackingId|string|false|none|The new tracking ID from the parent incident.|

<h2 id="tocS_Notification">Notification</h2>
<!-- backwards compatibility -->
<a id="schemanotification"></a>
<a id="schema_Notification"></a>
<a id="tocSnotification"></a>
<a id="tocsnotification"></a>

```json
{
  "cloudPubsubTopic": {
    "payloadFormat": "PAYLOAD_FORMAT_UNSPECIFIED",
    "topicName": "string"
  }
}
```

Settings for callback notifications. For more details see [Google Workspace Alert Notification](https://developers.google.com/admin-sdk/alertcenter/guides/notifications).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudPubsubTopic|[CloudPubsubTopic](#schemacloudpubsubtopic)|false|none|A Google Cloud Pub/sub topic destination.|

<h2 id="tocS_PhishingSpike">PhishingSpike</h2>
<!-- backwards compatibility -->
<a id="schemaphishingspike"></a>
<a id="schema_PhishingSpike"></a>
<a id="tocSphishingspike"></a>
<a id="tocsphishingspike"></a>

```json
{
  "domainId": {
    "customerPrimaryDomain": "string"
  },
  "isInternal": true,
  "maliciousEntity": {
    "displayName": "string",
    "entity": {
      "displayName": "string",
      "emailAddress": "string"
    },
    "fromHeader": "string"
  },
  "messages": [
    {
      "attachmentsSha256Hash": [
        "string"
      ],
      "date": "string",
      "md5HashMessageBody": "string",
      "md5HashSubject": "string",
      "messageBodySnippet": "string",
      "messageId": "string",
      "recipient": "string",
      "sentTime": "string",
      "subjectText": "string"
    }
  ]
}
```

Alert for a spike in user reported phishing. *Warning*: This type has been deprecated. Use [MailPhishing](/admin-sdk/alertcenter/reference/rest/v1beta1/MailPhishing) instead.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainId|[DomainId](#schemadomainid)|false|none|The domain ID.|
|isInternal|boolean|false|none|If `true`, the email originated from within the organization.|
|maliciousEntity|[MaliciousEntity](#schemamaliciousentity)|false|none|The entity whose actions triggered a Gmail phishing alert.|
|messages|[[GmailMessageInfo](#schemagmailmessageinfo)]|false|none|The list of messages contained by this alert.|

<h2 id="tocS_PredefinedDetectorInfo">PredefinedDetectorInfo</h2>
<!-- backwards compatibility -->
<a id="schemapredefineddetectorinfo"></a>
<a id="schema_PredefinedDetectorInfo"></a>
<a id="tocSpredefineddetectorinfo"></a>
<a id="tocspredefineddetectorinfo"></a>

```json
{
  "detectorName": "string"
}
```

Detector provided by Google.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectorName|string|false|none|Name that uniquely identifies the detector.|

<h2 id="tocS_PrimaryAdminChangedEvent">PrimaryAdminChangedEvent</h2>
<!-- backwards compatibility -->
<a id="schemaprimaryadminchangedevent"></a>
<a id="schema_PrimaryAdminChangedEvent"></a>
<a id="tocSprimaryadminchangedevent"></a>
<a id="tocsprimaryadminchangedevent"></a>

```json
{
  "domain": "string",
  "previousAdminEmail": "string",
  "updatedAdminEmail": "string"
}
```

Event occurred when primary admin changed in customer's account. The event are being received from insight forwarder

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string|false|none|domain in which actioned occurred|
|previousAdminEmail|string|false|none|Email of person who was the primary admin before the action|
|updatedAdminEmail|string|false|none|Email of person who is the primary admin after the action|

<h2 id="tocS_ReportingRule">ReportingRule</h2>
<!-- backwards compatibility -->
<a id="schemareportingrule"></a>
<a id="schema_ReportingRule"></a>
<a id="tocSreportingrule"></a>
<a id="tocsreportingrule"></a>

```json
{
  "alertDetails": "string",
  "name": "string",
  "query": "string"
}
```

Alerts from Reporting Rules configured by Admin.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alertDetails|string(byte)|false|none|Any other associated alert details, for example, AlertConfiguration.|
|name|string|false|none|Rule name|
|query|string(byte)|false|none|Alert Rule query Sample Query query { condition { filter { expected_application_id: 777491262838 expected_event_name: "indexable_content_change" filter_op: IN } } conjunction_operator: OR }|

<h2 id="tocS_RequestInfo">RequestInfo</h2>
<!-- backwards compatibility -->
<a id="schemarequestinfo"></a>
<a id="schema_RequestInfo"></a>
<a id="tocSrequestinfo"></a>
<a id="tocsrequestinfo"></a>

```json
{
  "appDeveloperEmail": [
    "string"
  ],
  "appKey": "string",
  "numberOfRequests": "string"
}
```

Requests for one application that needs default SQL setup.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appDeveloperEmail|[string]|false|none|List of app developers who triggered notifications for above application.|
|appKey|string|false|none|Required. The application that requires the SQL setup.|
|numberOfRequests|string(int64)|false|none|Required. Number of requests sent for this application to set up default SQL instance.|

<h2 id="tocS_ResourceInfo">ResourceInfo</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinfo"></a>
<a id="schema_ResourceInfo"></a>
<a id="tocSresourceinfo"></a>
<a id="tocsresourceinfo"></a>

```json
{
  "documentId": "string",
  "resourceTitle": "string"
}
```

Proto that contains resource information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documentId|string|false|none|Drive file ID.|
|resourceTitle|string|false|none|Title of the resource, for example email subject, or document title.|

<h2 id="tocS_RuleInfo">RuleInfo</h2>
<!-- backwards compatibility -->
<a id="schemaruleinfo"></a>
<a id="schema_RuleInfo"></a>
<a id="tocSruleinfo"></a>
<a id="tocsruleinfo"></a>

```json
{
  "displayName": "string",
  "resourceName": "string"
}
```

Proto that contains rule information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|User provided name of the rule.|
|resourceName|string|false|none|Resource name that uniquely identifies the rule.|

<h2 id="tocS_RuleViolationInfo">RuleViolationInfo</h2>
<!-- backwards compatibility -->
<a id="schemaruleviolationinfo"></a>
<a id="schema_RuleViolationInfo"></a>
<a id="tocSruleviolationinfo"></a>
<a id="tocsruleviolationinfo"></a>

```json
{
  "dataSource": "DATA_SOURCE_UNSPECIFIED",
  "matchInfo": [
    {
      "predefinedDetector": {
        "detectorName": "string"
      },
      "userDefinedDetector": {
        "displayName": "string",
        "resourceName": "string"
      }
    }
  ],
  "recipients": [
    "string"
  ],
  "resourceInfo": {
    "documentId": "string",
    "resourceTitle": "string"
  },
  "ruleInfo": {
    "displayName": "string",
    "resourceName": "string"
  },
  "suppressedActionTypes": [
    "ACTION_TYPE_UNSPECIFIED"
  ],
  "trigger": "TRIGGER_UNSPECIFIED",
  "triggeredActionInfo": [
    {}
  ],
  "triggeredActionTypes": [
    "ACTION_TYPE_UNSPECIFIED"
  ],
  "triggeringUserEmail": "string"
}
```

Common alert information about violated rules that are configured by Google Workspace administrators.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataSource|string|false|none|Source of the data.|
|matchInfo|[[MatchInfo](#schemamatchinfo)]|false|none|List of matches that were found in the resource content.|
|recipients|[string]|false|none|Resource recipients. For Drive, they are grantees that the Drive file was shared with at the time of rule triggering. Valid values include user emails, group emails, domains, or 'anyone' if the file was publicly accessible. If the file was private the recipients list will be empty. For Gmail, they are emails of the users or groups that the Gmail message was sent to.|
|resourceInfo|[ResourceInfo](#schemaresourceinfo)|false|none|Details of the resource which violated the rule.|
|ruleInfo|[RuleInfo](#schemaruleinfo)|false|none|Details of the violated rule.|
|suppressedActionTypes|[string]|false|none|Actions suppressed due to other actions with higher priority.|
|trigger|string|false|none|Trigger of the rule.|
|triggeredActionInfo|[[ActionInfo](#schemaactioninfo)]|false|none|Metadata related to the triggered actions.|
|triggeredActionTypes|[string]|false|none|Actions applied as a consequence of the rule being triggered.|
|triggeringUserEmail|string|false|none|Email of the user who caused the violation. Value could be empty if not applicable, for example, a violation found by drive continuous scan.|

#### Enumerated Values

|Property|Value|
|---|---|
|dataSource|DATA_SOURCE_UNSPECIFIED|
|dataSource|DRIVE|
|suppressedActionTypes|ACTION_TYPE_UNSPECIFIED|
|suppressedActionTypes|DRIVE_BLOCK_EXTERNAL_SHARING|
|suppressedActionTypes|DRIVE_WARN_ON_EXTERNAL_SHARING|
|suppressedActionTypes|DELETE_WEBPROTECT_EVIDENCE|
|suppressedActionTypes|ALERT|
|suppressedActionTypes|RULE_ACTIVATE|
|suppressedActionTypes|RULE_DEACTIVATE|
|trigger|TRIGGER_UNSPECIFIED|
|trigger|DRIVE_SHARE|
|triggeredActionTypes|ACTION_TYPE_UNSPECIFIED|
|triggeredActionTypes|DRIVE_BLOCK_EXTERNAL_SHARING|
|triggeredActionTypes|DRIVE_WARN_ON_EXTERNAL_SHARING|
|triggeredActionTypes|DELETE_WEBPROTECT_EVIDENCE|
|triggeredActionTypes|ALERT|
|triggeredActionTypes|RULE_ACTIVATE|
|triggeredActionTypes|RULE_DEACTIVATE|

<h2 id="tocS_SSOProfileCreatedEvent">SSOProfileCreatedEvent</h2>
<!-- backwards compatibility -->
<a id="schemassoprofilecreatedevent"></a>
<a id="schema_SSOProfileCreatedEvent"></a>
<a id="tocSssoprofilecreatedevent"></a>
<a id="tocsssoprofilecreatedevent"></a>

```json
{
  "inboundSsoProfileName": "string"
}
```

Event occurred when SSO Profile created in customer's account. The event are being received from insight forwarder

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inboundSsoProfileName|string|false|none|sso profile name which got created|

<h2 id="tocS_SSOProfileDeletedEvent">SSOProfileDeletedEvent</h2>
<!-- backwards compatibility -->
<a id="schemassoprofiledeletedevent"></a>
<a id="schema_SSOProfileDeletedEvent"></a>
<a id="tocSssoprofiledeletedevent"></a>
<a id="tocsssoprofiledeletedevent"></a>

```json
{
  "inboundSsoProfileName": "string"
}
```

Event occurred when SSO Profile deleted in customer's account. The event are being received from insight forwarder

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inboundSsoProfileName|string|false|none|sso profile name which got deleted|

<h2 id="tocS_SSOProfileUpdatedEvent">SSOProfileUpdatedEvent</h2>
<!-- backwards compatibility -->
<a id="schemassoprofileupdatedevent"></a>
<a id="schema_SSOProfileUpdatedEvent"></a>
<a id="tocSssoprofileupdatedevent"></a>
<a id="tocsssoprofileupdatedevent"></a>

```json
{
  "inboundSsoProfileChanges": "string",
  "inboundSsoProfileName": "string"
}
```

Event occurred when SSO Profile updated in customer's account. The event are being received from insight forwarder

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inboundSsoProfileChanges|string|false|none|changes made to sso profile|
|inboundSsoProfileName|string|false|none|sso profile name which got updated|

<h2 id="tocS_SensitiveAdminAction">SensitiveAdminAction</h2>
<!-- backwards compatibility -->
<a id="schemasensitiveadminaction"></a>
<a id="schema_SensitiveAdminAction"></a>
<a id="tocSsensitiveadminaction"></a>
<a id="tocssensitiveadminaction"></a>

```json
{
  "actorEmail": "string",
  "eventTime": "string",
  "primaryAdminChangedEvent": {
    "domain": "string",
    "previousAdminEmail": "string",
    "updatedAdminEmail": "string"
  },
  "ssoProfileCreatedEvent": {
    "inboundSsoProfileName": "string"
  },
  "ssoProfileDeletedEvent": {
    "inboundSsoProfileName": "string"
  },
  "ssoProfileUpdatedEvent": {
    "inboundSsoProfileChanges": "string",
    "inboundSsoProfileName": "string"
  },
  "superAdminPasswordResetEvent": {
    "userEmail": "string"
  }
}
```

Alert that is triggered when Sensitive Admin Action occur in customer account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actorEmail|string|false|none|Email of person who performed the action|
|eventTime|string(google-datetime)|false|none|The time at which event occurred|
|primaryAdminChangedEvent|[PrimaryAdminChangedEvent](#schemaprimaryadminchangedevent)|false|none|Event occurred when primary admin changed in customer's account|
|ssoProfileCreatedEvent|[SSOProfileCreatedEvent](#schemassoprofilecreatedevent)|false|none|Event occurred when SSO Profile created in customer's account|
|ssoProfileDeletedEvent|[SSOProfileDeletedEvent](#schemassoprofiledeletedevent)|false|none|Event occurred when SSO Profile deleted in customer's account|
|ssoProfileUpdatedEvent|[SSOProfileUpdatedEvent](#schemassoprofileupdatedevent)|false|none|Event occurred when SSO Profile updated in customer's account|
|superAdminPasswordResetEvent|[SuperAdminPasswordResetEvent](#schemasuperadminpasswordresetevent)|false|none|Event occurred when password was reset for super admin in customer's account|

<h2 id="tocS_Settings">Settings</h2>
<!-- backwards compatibility -->
<a id="schemasettings"></a>
<a id="schema_Settings"></a>
<a id="tocSsettings"></a>
<a id="tocssettings"></a>

```json
{
  "notifications": [
    {
      "cloudPubsubTopic": {
        "payloadFormat": "PAYLOAD_FORMAT_UNSPECIFIED",
        "topicName": "string"
      }
    }
  ]
}
```

Customer-level settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notifications|[[Notification](#schemanotification)]|false|none|The list of notifications.|

<h2 id="tocS_StateSponsoredAttack">StateSponsoredAttack</h2>
<!-- backwards compatibility -->
<a id="schemastatesponsoredattack"></a>
<a id="schema_StateSponsoredAttack"></a>
<a id="tocSstatesponsoredattack"></a>
<a id="tocsstatesponsoredattack"></a>

```json
{
  "email": "string"
}
```

A state-sponsored attack alert. Derived from audit logs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|The email of the user this incident was created for.|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

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

<h2 id="tocS_SuperAdminPasswordResetEvent">SuperAdminPasswordResetEvent</h2>
<!-- backwards compatibility -->
<a id="schemasuperadminpasswordresetevent"></a>
<a id="schema_SuperAdminPasswordResetEvent"></a>
<a id="tocSsuperadminpasswordresetevent"></a>
<a id="tocssuperadminpasswordresetevent"></a>

```json
{
  "userEmail": "string"
}
```

Event occurred when password was reset for super admin in customer's account. The event are being received from insight forwarder

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userEmail|string|false|none|email of person whose password was reset|

<h2 id="tocS_SuspiciousActivity">SuspiciousActivity</h2>
<!-- backwards compatibility -->
<a id="schemasuspiciousactivity"></a>
<a id="schema_SuspiciousActivity"></a>
<a id="tocSsuspiciousactivity"></a>
<a id="tocssuspiciousactivity"></a>

```json
{
  "email": "string",
  "events": [
    {
      "deviceId": "string",
      "deviceModel": "string",
      "deviceProperty": "string",
      "deviceType": "string",
      "iosVendorId": "string",
      "newValue": "string",
      "oldValue": "string",
      "resourceId": "string",
      "serialNumber": "string"
    }
  ]
}
```

A mobile suspicious activity alert. Derived from audit logs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|The email of the user this alert was created for.|
|events|[[SuspiciousActivitySecurityDetail](#schemasuspiciousactivitysecuritydetail)]|false|none|Required. The list of security events.|

<h2 id="tocS_SuspiciousActivitySecurityDetail">SuspiciousActivitySecurityDetail</h2>
<!-- backwards compatibility -->
<a id="schemasuspiciousactivitysecuritydetail"></a>
<a id="schema_SuspiciousActivitySecurityDetail"></a>
<a id="tocSsuspiciousactivitysecuritydetail"></a>
<a id="tocssuspiciousactivitysecuritydetail"></a>

```json
{
  "deviceId": "string",
  "deviceModel": "string",
  "deviceProperty": "string",
  "deviceType": "string",
  "iosVendorId": "string",
  "newValue": "string",
  "oldValue": "string",
  "resourceId": "string",
  "serialNumber": "string"
}
```

Detailed information of a single MDM suspicious activity event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceId|string|false|none|Required. The device ID.|
|deviceModel|string|false|none|The model of the device.|
|deviceProperty|string|false|none|The device property which was changed.|
|deviceType|string|false|none|The type of the device.|
|iosVendorId|string|false|none|Required for iOS, empty for others.|
|newValue|string|false|none|The new value of the device property after the change.|
|oldValue|string|false|none|The old value of the device property before the change.|
|resourceId|string|false|none|The device resource ID.|
|serialNumber|string|false|none|The serial number of the device.|

<h2 id="tocS_TransferError">TransferError</h2>
<!-- backwards compatibility -->
<a id="schematransfererror"></a>
<a id="schema_TransferError"></a>
<a id="tocStransfererror"></a>
<a id="tocstransfererror"></a>

```json
{
  "email": "string",
  "entityType": "TRANSFER_ENTITY_TYPE_UNSPECIFIED",
  "id": "string",
  "invalidReason": "TRANSFER_INVALID_REASON_UNSPECIFIED",
  "name": "string"
}
```

Details for an invalid transfer or forward.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|User's email address. This may be unavailable if the entity was deleted.|
|entityType|string|false|none|Type of entity being transferred to. For ring group members, this should always be USER.|
|id|string|false|none|Ring group or auto attendant ID. Not set for users.|
|invalidReason|string|false|none|Reason for the error.|
|name|string|false|none|User's full name, or the ring group / auto attendant name. This may be unavailable if the entity was deleted.|

#### Enumerated Values

|Property|Value|
|---|---|
|entityType|TRANSFER_ENTITY_TYPE_UNSPECIFIED|
|entityType|TRANSFER_AUTO_ATTENDANT|
|entityType|TRANSFER_RING_GROUP|
|entityType|TRANSFER_USER|
|invalidReason|TRANSFER_INVALID_REASON_UNSPECIFIED|
|invalidReason|TRANSFER_TARGET_DELETED|
|invalidReason|UNLICENSED|
|invalidReason|SUSPENDED|
|invalidReason|NO_PHONE_NUMBER|

<h2 id="tocS_TransferMisconfiguration">TransferMisconfiguration</h2>
<!-- backwards compatibility -->
<a id="schematransfermisconfiguration"></a>
<a id="schema_TransferMisconfiguration"></a>
<a id="tocStransfermisconfiguration"></a>
<a id="tocstransfermisconfiguration"></a>

```json
{
  "errors": [
    {
      "email": "string",
      "entityType": "TRANSFER_ENTITY_TYPE_UNSPECIFIED",
      "id": "string",
      "invalidReason": "TRANSFER_INVALID_REASON_UNSPECIFIED",
      "name": "string"
    }
  ]
}
```

Error related to transferring or forwarding a phone call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[TransferError](#schematransfererror)]|false|none|Details for each invalid transfer or forward.|

<h2 id="tocS_UndeleteAlertRequest">UndeleteAlertRequest</h2>
<!-- backwards compatibility -->
<a id="schemaundeletealertrequest"></a>
<a id="schema_UndeleteAlertRequest"></a>
<a id="tocSundeletealertrequest"></a>
<a id="tocsundeletealertrequest"></a>

```json
{
  "customerId": "string"
}
```

A request to undelete a specific alert that was marked for deletion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customerId|string|false|none|Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "displayName": "string",
  "emailAddress": "string"
}
```

A user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Display name of the user.|
|emailAddress|string|false|none|Email address of the user.|

<h2 id="tocS_UserChanges">UserChanges</h2>
<!-- backwards compatibility -->
<a id="schemauserchanges"></a>
<a id="schema_UserChanges"></a>
<a id="tocSuserchanges"></a>
<a id="tocsuserchanges"></a>

```json
{
  "name": "string"
}
```

Alerts from UserChanges bucket Rules for predefined rules which contain the below rules. Suspended user made active New user Added User suspended (by admin) User granted admin privileges User admin privileges revoked User deleted Users password changed

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Rule name|

<h2 id="tocS_UserDefinedDetectorInfo">UserDefinedDetectorInfo</h2>
<!-- backwards compatibility -->
<a id="schemauserdefineddetectorinfo"></a>
<a id="schema_UserDefinedDetectorInfo"></a>
<a id="tocSuserdefineddetectorinfo"></a>
<a id="tocsuserdefineddetectorinfo"></a>

```json
{
  "displayName": "string",
  "resourceName": "string"
}
```

Detector defined by administrators.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Display name of the detector.|
|resourceName|string|false|none|Resource name that uniquely identifies the detector.|

<h2 id="tocS_VoiceMisconfiguration">VoiceMisconfiguration</h2>
<!-- backwards compatibility -->
<a id="schemavoicemisconfiguration"></a>
<a id="schema_VoiceMisconfiguration"></a>
<a id="tocSvoicemisconfiguration"></a>
<a id="tocsvoicemisconfiguration"></a>

```json
{
  "entityName": "string",
  "entityType": "ENTITY_TYPE_UNSPECIFIED",
  "fixUri": "string",
  "membersMisconfiguration": {
    "errors": [
      {
        "email": "string",
        "entityType": "TRANSFER_ENTITY_TYPE_UNSPECIFIED",
        "id": "string",
        "invalidReason": "TRANSFER_INVALID_REASON_UNSPECIFIED",
        "name": "string"
      }
    ]
  },
  "transferMisconfiguration": {
    "errors": [
      {
        "email": "string",
        "entityType": "TRANSFER_ENTITY_TYPE_UNSPECIFIED",
        "id": "string",
        "invalidReason": "TRANSFER_INVALID_REASON_UNSPECIFIED",
        "name": "string"
      }
    ]
  },
  "voicemailMisconfiguration": {
    "errors": [
      {
        "email": "string",
        "invalidReason": "EMAIL_INVALID_REASON_UNSPECIFIED"
      }
    ]
  }
}
```

An alert triggered when Google Voice configuration becomes invalid, generally due to an external entity being modified or deleted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entityName|string|false|none|Name of the entity whose configuration is now invalid.|
|entityType|string|false|none|Type of the entity whose configuration is now invalid.|
|fixUri|string|false|none|Link that the admin can follow to fix the issue.|
|membersMisconfiguration|[TransferMisconfiguration](#schematransfermisconfiguration)|false|none|Issue(s) with members of a ring group.|
|transferMisconfiguration|[TransferMisconfiguration](#schematransfermisconfiguration)|false|none|Issue(s) with transferring or forwarding to an external entity.|
|voicemailMisconfiguration|[VoicemailMisconfiguration](#schemavoicemailmisconfiguration)|false|none|Issue(s) with sending to voicemail.|

#### Enumerated Values

|Property|Value|
|---|---|
|entityType|ENTITY_TYPE_UNSPECIFIED|
|entityType|AUTO_ATTENDANT|
|entityType|RING_GROUP|

<h2 id="tocS_VoicemailMisconfiguration">VoicemailMisconfiguration</h2>
<!-- backwards compatibility -->
<a id="schemavoicemailmisconfiguration"></a>
<a id="schema_VoicemailMisconfiguration"></a>
<a id="tocSvoicemailmisconfiguration"></a>
<a id="tocsvoicemailmisconfiguration"></a>

```json
{
  "errors": [
    {
      "email": "string",
      "invalidReason": "EMAIL_INVALID_REASON_UNSPECIFIED"
    }
  ]
}
```

Issue(s) with sending to voicemail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[VoicemailRecipientError](#schemavoicemailrecipienterror)]|false|none|Issue(s) with voicemail recipients.|

<h2 id="tocS_VoicemailRecipientError">VoicemailRecipientError</h2>
<!-- backwards compatibility -->
<a id="schemavoicemailrecipienterror"></a>
<a id="schema_VoicemailRecipientError"></a>
<a id="tocSvoicemailrecipienterror"></a>
<a id="tocsvoicemailrecipienterror"></a>

```json
{
  "email": "string",
  "invalidReason": "EMAIL_INVALID_REASON_UNSPECIFIED"
}
```

Issue(s) with a voicemail recipient.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|Email address of the invalid recipient. This may be unavailable if the recipient was deleted.|
|invalidReason|string|false|none|Reason for the error.|

#### Enumerated Values

|Property|Value|
|---|---|
|invalidReason|EMAIL_INVALID_REASON_UNSPECIFIED|
|invalidReason|OUT_OF_QUOTA|
|invalidReason|RECIPIENT_DELETED|
