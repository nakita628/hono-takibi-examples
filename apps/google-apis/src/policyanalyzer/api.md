<h1 id="policy-analyzer-api">Policy Analyzer API v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://policyanalyzer.googleapis.com/">https://policyanalyzer.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://www.google.com">External documentation</a>

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

<h1 id="policy-analyzer-api-projects">projects</h1>

## policyanalyzer.projects.locations.activityTypes.activities.query

<a id="opIdpolicyanalyzer.projects.locations.activityTypes.activities.query"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/activities:query \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/activities:query`

Queries policy activities on GCP resources.

<h3 id="policyanalyzerprojectslocationsactivitytypesactivitiesquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The container resource on which to execute the request. Acceptable formats: `projects/[PROJECT_ID\|PROJECT_NUMBER]/locations/[LOCATION]/activityTypes/[ACTIVITY_TYPE]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/|
|filter|query|string|false|Optional. Optional filter expression to restrict the activities returned. Supported filters are: - service_account_last_authn.full_resource_name {=} - service_account_key_last_authn.full_resource_name {=} |
|pageSize|query|integer|false|Optional. The maximum number of results to return from this request. Max limit is 1000. Non-positive values are ignored. The presence of `nextPageToken` in the response indicates that more results might be available.|
|pageToken|query|string|false|Optional. If present, then retrieve the next batch of results from the preceding call to this method. `pageToken` must be the value of `nextPageToken` from the previous response. The values of other method parameters should be identical to those in the previous call.|
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
  "activities": [
    {
      "activity": {
        "property1": null,
        "property2": null
      },
      "activityType": "string",
      "fullResourceName": "string",
      "observationPeriod": {
        "endTime": "string",
        "startTime": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="policyanalyzerprojectslocationsactivitytypesactivitiesquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse](#schemagooglecloudpolicyanalyzerv1beta1queryactivityresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_GoogleCloudPolicyanalyzerV1beta1Activity">GoogleCloudPolicyanalyzerV1beta1Activity</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpolicyanalyzerv1beta1activity"></a>
<a id="schema_GoogleCloudPolicyanalyzerV1beta1Activity"></a>
<a id="tocSgooglecloudpolicyanalyzerv1beta1activity"></a>
<a id="tocsgooglecloudpolicyanalyzerv1beta1activity"></a>

```json
{
  "activity": {
    "property1": null,
    "property2": null
  },
  "activityType": "string",
  "fullResourceName": "string",
  "observationPeriod": {
    "endTime": "string",
    "startTime": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activity|object|false|none|A struct of custom fields to explain the activity.|
|activityType|string|false|none|The type of the activity.|
|fullResourceName|string|false|none|The full resource name that identifies the resource. For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names.|
|observationPeriod|[GoogleCloudPolicyanalyzerV1beta1ObservationPeriod](#schemagooglecloudpolicyanalyzerv1beta1observationperiod)|false|none|The data observation period to build the activity.|

<h2 id="tocS_GoogleCloudPolicyanalyzerV1beta1ObservationPeriod">GoogleCloudPolicyanalyzerV1beta1ObservationPeriod</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpolicyanalyzerv1beta1observationperiod"></a>
<a id="schema_GoogleCloudPolicyanalyzerV1beta1ObservationPeriod"></a>
<a id="tocSgooglecloudpolicyanalyzerv1beta1observationperiod"></a>
<a id="tocsgooglecloudpolicyanalyzerv1beta1observationperiod"></a>

```json
{
  "endTime": "string",
  "startTime": "string"
}
```

Represents data observation period.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|The observation end time.|
|startTime|string(google-datetime)|false|none|The observation start time.|

<h2 id="tocS_GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse">GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpolicyanalyzerv1beta1queryactivityresponse"></a>
<a id="schema_GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse"></a>
<a id="tocSgooglecloudpolicyanalyzerv1beta1queryactivityresponse"></a>
<a id="tocsgooglecloudpolicyanalyzerv1beta1queryactivityresponse"></a>

```json
{
  "activities": [
    {
      "activity": {
        "property1": null,
        "property2": null
      },
      "activityType": "string",
      "fullResourceName": "string",
      "observationPeriod": {
        "endTime": "string",
        "startTime": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response to the `QueryActivity` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activities|[[GoogleCloudPolicyanalyzerV1beta1Activity](#schemagooglecloudpolicyanalyzerv1beta1activity)]|false|none|The set of activities that match the filter included in the request.|
|nextPageToken|string|false|none|If there might be more results than those appearing in this response, then `nextPageToken` is included. To get the next set of results, call this method again using the value of `nextPageToken` as `pageToken`.|
