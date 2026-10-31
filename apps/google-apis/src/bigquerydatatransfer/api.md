<h1 id="bigquery-data-transfer-api">BigQuery Data Transfer API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Schedule queries or transfer external data from SaaS applications to Google BigQuery on a regular basis.

Base URLs:

* <a href="https://bigquerydatatransfer.googleapis.com/">https://bigquerydatatransfer.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/bigquery-transfer/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/bigquery|View and manage your data in Google BigQuery and see the email address for your Google Account|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/cloud-platform.read-only|View your data across Google Cloud services and see the email address of your Google Account|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/bigquery|View and manage your data in Google BigQuery and see the email address for your Google Account|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/cloud-platform.read-only|View your data across Google Cloud services and see the email address of your Google Account|

<h1 id="bigquery-data-transfer-api-projects">projects</h1>

## bigquerydatatransfer.projects.transferConfigs.runs.get

<a id="opIdbigquerydatatransfer.projects.transferConfigs.runs.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Returns information about the particular transfer run.

<h3 id="bigquerydatatransferprojectstransferconfigsrunsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`|
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
  "dataSourceId": "string",
  "destinationDatasetId": "string",
  "emailPreferences": {
    "enableFailureEmail": true
  },
  "endTime": "string",
  "errorStatus": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "name": "string",
  "notificationPubsubTopic": "string",
  "params": {
    "property1": null,
    "property2": null
  },
  "runTime": "string",
  "schedule": "string",
  "scheduleTime": "string",
  "startTime": "string",
  "state": "TRANSFER_STATE_UNSPECIFIED",
  "updateTime": "string",
  "userId": "string"
}
```

<h3 id="bigquerydatatransferprojectstransferconfigsrunsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TransferRun](#schematransferrun)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## bigquerydatatransfer.projects.transferConfigs.runs.delete

<a id="opIdbigquerydatatransfer.projects.transferConfigs.runs.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Deletes the specified transfer run.

<h3 id="bigquerydatatransferprojectstransferconfigsrunsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`|
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

<h3 id="bigquerydatatransferprojectstransferconfigsrunsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigquerydatatransfer.projects.transferConfigs.patch

<a id="opIdbigquerydatatransfer.projects.transferConfigs.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dataRefreshWindowDays": 0,
    "dataSourceId": "string",
    "destinationDatasetId": "string",
    "disabled": true,
    "displayName": "string",
    "emailPreferences": {
      "enableFailureEmail": true
    },
    "name": "string",
    "notificationPubsubTopic": "string",
    "params": {
      "property1": null,
      "property2": null
    },
    "schedule": "string",
    "scheduleOptions": {
      "disableAutoScheduling": true,
      "endTime": "string",
      "startTime": "string"
    },
    "userId": "string"
  }'
```

`PATCH /v1/{name}`

Updates a data transfer configuration. All fields must be set, even if they are not updated.

> Body parameter

```json
{
  "dataRefreshWindowDays": 0,
  "dataSourceId": "string",
  "destinationDatasetId": "string",
  "disabled": true,
  "displayName": "string",
  "emailPreferences": {
    "enableFailureEmail": true
  },
  "name": "string",
  "notificationPubsubTopic": "string",
  "params": {
    "property1": null,
    "property2": null
  },
  "schedule": "string",
  "scheduleOptions": {
    "disableAutoScheduling": true,
    "endTime": "string",
    "startTime": "string"
  },
  "userId": "string"
}
```

<h3 id="bigquerydatatransferprojectstransferconfigspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource name of the transfer config. Transfer config names have the form `projects/{project_id}/locations/{region}/transferConfigs/{config_id}`. Where `config_id` is usually a uuid, even though it is not guaranteed or required. The name is ignored when creating a transfer config.|
|authorizationCode|query|string|false|Optional OAuth2 authorization code to use with this transfer configuration. This is required only if `transferConfig.dataSourceId` is 'youtube_channel' and new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain authorization_code, make a request to the following URL: https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=authorization_code&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the a data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to update the transfer config.|
|serviceAccountName|query|string|false|Optional service account email. If this field is set, the transfer config will be created with this service account's credentials. It requires that the requesting user calling this API has permissions to act as this service account. Note that not all data sources support service account credentials when creating a transfer config. For the latest list of data sources, read about [using service accounts](https://cloud.google.com/bigquery-transfer/docs/use-service-accounts).|
|updateMask|query|string|false|Required. Required list of fields to be updated in this request.|
|versionInfo|query|string|false|Optional version info. This is required only if `transferConfig.dataSourceId` is not 'youtube_channel' and new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain version info, make a request to the following URL: https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=version_info&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the a data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to update the transfer config.|
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
|body|body|[TransferConfig](#schematransferconfig)|false|none|
|» dataRefreshWindowDays|body|integer(int32)|false|The number of days to look back to automatically refresh the data. For example, if `data_refresh_window_days = 10`, then every day BigQuery reingests data for [today-10, today-1], rather than ingesting data for just [today-1]. Only valid if the data source supports the feature. Set the value to 0 to use the default value.|
|» dataSourceId|body|string|false|Data source ID. This cannot be changed once data transfer is created. The full list of available data source IDs can be returned through an API call: https://cloud.google.com/bigquery-transfer/docs/reference/datatransfer/rest/v1/projects.locations.dataSources/list|
|» destinationDatasetId|body|string|false|The BigQuery target dataset id.|
|» disabled|body|boolean|false|Is this config disabled. When set to true, no runs are scheduled for a given transfer.|
|» displayName|body|string|false|User specified display name for the data transfer.|
|» emailPreferences|body|[EmailPreferences](#schemaemailpreferences)|false|Email notifications will be sent according to these preferences to the email address of the user who owns this transfer config.|
|» name|body|string|false|The resource name of the transfer config. Transfer config names have the form `projects/{project_id}/locations/{region}/transferConfigs/{config_id}`. Where `config_id` is usually a uuid, even though it is not guaranteed or required. The name is ignored when creating a transfer config.|
|» notificationPubsubTopic|body|string|false|Pub/Sub topic where notifications will be sent after transfer runs associated with this transfer config finish. The format for specifying a pubsub topic is: `projects/{project}/topics/{topic}`|
|» params|body|object|false|Parameters specific to each data source. For more information see the bq tab in the 'Setting up a data transfer' section for each data source. For example the parameters for Cloud Storage transfers are listed here: https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq|
|» » **additionalProperties**|body|object|false|Properties of the object.|
|» schedule|body|string|false|Data transfer schedule. If the data source does not support a custom schedule, this should be empty. If it is empty, the default value for the data source will be used. The specified times are in UTC. Examples of valid format: `1st,3rd monday of month 15:30`, `every wed,fri of jan,jun 13:15`, and `first sunday of quarter 00:00`. See more explanation about the format here: https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format NOTE: The minimum interval time between recurring transfers depends on the data source; refer to the documentation for your data source.|
|» scheduleOptions|body|[ScheduleOptions](#schemascheduleoptions)|false|Options customizing the data transfer schedule.|
|» userId|body|string(int64)|false|Deprecated. Unique ID of the user on whose behalf transfer is done.|

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
  "dataRefreshWindowDays": 0,
  "dataSourceId": "string",
  "datasetRegion": "string",
  "destinationDatasetId": "string",
  "disabled": true,
  "displayName": "string",
  "emailPreferences": {
    "enableFailureEmail": true
  },
  "name": "string",
  "nextRunTime": "string",
  "notificationPubsubTopic": "string",
  "ownerInfo": {
    "email": "string"
  },
  "params": {
    "property1": null,
    "property2": null
  },
  "schedule": "string",
  "scheduleOptions": {
    "disableAutoScheduling": true,
    "endTime": "string",
    "startTime": "string"
  },
  "state": "TRANSFER_STATE_UNSPECIFIED",
  "updateTime": "string",
  "userId": "string"
}
```

<h3 id="bigquerydatatransferprojectstransferconfigspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TransferConfig](#schematransferconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigquerydatatransfer.projects.locations.list

<a id="opIdbigquerydatatransfer.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="bigquerydatatransferprojectslocationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource that owns the locations collection, if applicable.|
|filter|query|string|false|A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).|
|pageSize|query|integer|false|The maximum number of results to return. If not set, the service selects a default.|
|pageToken|query|string|false|A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.|
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
  "locations": [
    {
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "locationId": "string",
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="bigquerydatatransferprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## bigquerydatatransfer.projects.locations.dataSources.checkValidCreds

<a id="opIdbigquerydatatransfer.projects.locations.dataSources.checkValidCreds"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:checkValidCreds \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{name}:checkValidCreds`

Returns true if valid credentials exist for the given data source and requesting user.

> Body parameter

```json
{}
```

<h3 id="bigquerydatatransferprojectslocationsdatasourcescheckvalidcreds-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The data source in the form: `projects/{project_id}/dataSources/{data_source_id}` or `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}`.|
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
|body|body|[CheckValidCredsRequest](#schemacheckvalidcredsrequest)|false|none|

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
  "hasValidCreds": true
}
```

<h3 id="bigquerydatatransferprojectslocationsdatasourcescheckvalidcreds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CheckValidCredsResponse](#schemacheckvalidcredsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## bigquerydatatransfer.projects.locations.enrollDataSources

<a id="opIdbigquerydatatransfer.projects.locations.enrollDataSources"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:enrollDataSources \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dataSourceIds": [
      "string"
    ]
  }'
```

`POST /v1/{name}:enrollDataSources`

Enroll data sources in a user project. This allows users to create transfer configurations for these data sources. They will also appear in the ListDataSources RPC and as such, will appear in the [BigQuery UI](https://console.cloud.google.com/bigquery), and the documents can be found in the public guide for [BigQuery Web UI](https://cloud.google.com/bigquery/bigquery-web-ui) and [Data Transfer Service](https://cloud.google.com/bigquery/docs/working-with-transfers).

> Body parameter

```json
{
  "dataSourceIds": [
    "string"
  ]
}
```

<h3 id="bigquerydatatransferprojectslocationsenrolldatasources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the project resource in the form: `projects/{project_id}`|
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
|body|body|[EnrollDataSourcesRequest](#schemaenrolldatasourcesrequest)|false|none|
|» dataSourceIds|body|[string]|false|Data sources that are enrolled. It is required to provide at least one data source id.|

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

<h3 id="bigquerydatatransferprojectslocationsenrolldatasources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigquerydatatransfer.projects.locations.dataSources.list

<a id="opIdbigquerydatatransfer.projects.locations.dataSources.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/dataSources \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/dataSources`

Lists supported data sources and returns their settings.

<h3 id="bigquerydatatransferprojectslocationsdatasourceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The BigQuery project id for which data sources should be returned. Must be in the form: `projects/{project_id}` or `projects/{project_id}/locations/{location_id}`|
|pageSize|query|integer|false|Page size. The default page size is the maximum value of 1000 results.|
|pageToken|query|string|false|Pagination token, which can be used to request a specific page of `ListDataSourcesRequest` list results. For multiple-page results, `ListDataSourcesResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.|
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
  "dataSources": [
    {
      "authorizationType": "AUTHORIZATION_TYPE_UNSPECIFIED",
      "clientId": "string",
      "dataRefreshType": "DATA_REFRESH_TYPE_UNSPECIFIED",
      "dataSourceId": "string",
      "defaultDataRefreshWindowDays": 0,
      "defaultSchedule": "string",
      "description": "string",
      "displayName": "string",
      "helpUrl": "string",
      "manualRunsDisabled": true,
      "minimumScheduleInterval": "string",
      "name": "string",
      "parameters": [
        {
          "allowedValues": [
            "string"
          ],
          "deprecated": true,
          "description": "string",
          "displayName": "string",
          "fields": [
            {}
          ],
          "immutable": true,
          "maxValue": 0,
          "minValue": 0,
          "paramId": "string",
          "recurse": true,
          "repeated": true,
          "required": true,
          "type": "TYPE_UNSPECIFIED",
          "validationDescription": "string",
          "validationHelpUrl": "string",
          "validationRegex": "string"
        }
      ],
      "scopes": [
        "string"
      ],
      "supportsCustomSchedule": true,
      "supportsMultipleTransfers": true,
      "transferType": "TRANSFER_TYPE_UNSPECIFIED",
      "updateDeadlineSeconds": 0
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="bigquerydatatransferprojectslocationsdatasourceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListDataSourcesResponse](#schemalistdatasourcesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## bigquerydatatransfer.projects.transferConfigs.runs.list

<a id="opIdbigquerydatatransfer.projects.transferConfigs.runs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/runs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/runs`

Returns information about running and completed transfer runs.

<h3 id="bigquerydatatransferprojectstransferconfigsrunslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of transfer configuration for which transfer runs should be retrieved. Format of transfer configuration resource name is: `projects/{project_id}/transferConfigs/{config_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.|
|pageSize|query|integer|false|Page size. The default page size is the maximum value of 1000 results.|
|pageToken|query|string|false|Pagination token, which can be used to request a specific page of `ListTransferRunsRequest` list results. For multiple-page results, `ListTransferRunsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.|
|runAttempt|query|string|false|Indicates how run attempts are to be pulled.|
|states|query|[string]|false|When specified, only transfer runs with requested states are returned.|
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
|runAttempt|RUN_ATTEMPT_UNSPECIFIED|
|runAttempt|LATEST|
|states|TRANSFER_STATE_UNSPECIFIED|
|states|PENDING|
|states|RUNNING|
|states|SUCCEEDED|
|states|FAILED|
|states|CANCELLED|
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
  "transferRuns": [
    {
      "dataSourceId": "string",
      "destinationDatasetId": "string",
      "emailPreferences": {
        "enableFailureEmail": true
      },
      "endTime": "string",
      "errorStatus": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "name": "string",
      "notificationPubsubTopic": "string",
      "params": {
        "property1": null,
        "property2": null
      },
      "runTime": "string",
      "schedule": "string",
      "scheduleTime": "string",
      "startTime": "string",
      "state": "TRANSFER_STATE_UNSPECIFIED",
      "updateTime": "string",
      "userId": "string"
    }
  ]
}
```

<h3 id="bigquerydatatransferprojectstransferconfigsrunslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListTransferRunsResponse](#schemalisttransferrunsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## bigquerydatatransfer.projects.transferConfigs.list

<a id="opIdbigquerydatatransfer.projects.transferConfigs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/transferConfigs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/transferConfigs`

Returns information about all transfer configs owned by a project in the specified location.

<h3 id="bigquerydatatransferprojectstransferconfigslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The BigQuery project id for which transfer configs should be returned: `projects/{project_id}` or `projects/{project_id}/locations/{location_id}`|
|dataSourceIds|query|[string]|false|When specified, only configurations of requested data sources are returned.|
|pageSize|query|integer|false|Page size. The default page size is the maximum value of 1000 results.|
|pageToken|query|string|false|Pagination token, which can be used to request a specific page of `ListTransfersRequest` list results. For multiple-page results, `ListTransfersResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.|
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
  "transferConfigs": [
    {
      "dataRefreshWindowDays": 0,
      "dataSourceId": "string",
      "datasetRegion": "string",
      "destinationDatasetId": "string",
      "disabled": true,
      "displayName": "string",
      "emailPreferences": {
        "enableFailureEmail": true
      },
      "name": "string",
      "nextRunTime": "string",
      "notificationPubsubTopic": "string",
      "ownerInfo": {
        "email": "string"
      },
      "params": {
        "property1": null,
        "property2": null
      },
      "schedule": "string",
      "scheduleOptions": {
        "disableAutoScheduling": true,
        "endTime": "string",
        "startTime": "string"
      },
      "state": "TRANSFER_STATE_UNSPECIFIED",
      "updateTime": "string",
      "userId": "string"
    }
  ]
}
```

<h3 id="bigquerydatatransferprojectstransferconfigslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListTransferConfigsResponse](#schemalisttransferconfigsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## bigquerydatatransfer.projects.transferConfigs.create

<a id="opIdbigquerydatatransfer.projects.transferConfigs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/transferConfigs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dataRefreshWindowDays": 0,
    "dataSourceId": "string",
    "destinationDatasetId": "string",
    "disabled": true,
    "displayName": "string",
    "emailPreferences": {
      "enableFailureEmail": true
    },
    "name": "string",
    "notificationPubsubTopic": "string",
    "params": {
      "property1": null,
      "property2": null
    },
    "schedule": "string",
    "scheduleOptions": {
      "disableAutoScheduling": true,
      "endTime": "string",
      "startTime": "string"
    },
    "userId": "string"
  }'
```

`POST /v1/{parent}/transferConfigs`

Creates a new data transfer configuration.

> Body parameter

```json
{
  "dataRefreshWindowDays": 0,
  "dataSourceId": "string",
  "destinationDatasetId": "string",
  "disabled": true,
  "displayName": "string",
  "emailPreferences": {
    "enableFailureEmail": true
  },
  "name": "string",
  "notificationPubsubTopic": "string",
  "params": {
    "property1": null,
    "property2": null
  },
  "schedule": "string",
  "scheduleOptions": {
    "disableAutoScheduling": true,
    "endTime": "string",
    "startTime": "string"
  },
  "userId": "string"
}
```

<h3 id="bigquerydatatransferprojectstransferconfigscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The BigQuery project id where the transfer configuration should be created. Must be in the format projects/{project_id}/locations/{location_id} or projects/{project_id}. If specified location and location of the destination bigquery dataset do not match - the request will fail.|
|authorizationCode|query|string|false|Optional OAuth2 authorization code to use with this transfer configuration. This is required only if `transferConfig.dataSourceId` is 'youtube_channel' and new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain authorization_code, make a request to the following URL: https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=authorization_code&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the a data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to create the transfer config.|
|serviceAccountName|query|string|false|Optional service account email. If this field is set, the transfer config will be created with this service account's credentials. It requires that the requesting user calling this API has permissions to act as this service account. Note that not all data sources support service account credentials when creating a transfer config. For the latest list of data sources, read about [using service accounts](https://cloud.google.com/bigquery-transfer/docs/use-service-accounts).|
|versionInfo|query|string|false|Optional version info. This is required only if `transferConfig.dataSourceId` is not 'youtube_channel' and new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain version info, make a request to the following URL: https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=version_info&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the a data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to create the transfer config.|
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
|body|body|[TransferConfig](#schematransferconfig)|false|none|
|» dataRefreshWindowDays|body|integer(int32)|false|The number of days to look back to automatically refresh the data. For example, if `data_refresh_window_days = 10`, then every day BigQuery reingests data for [today-10, today-1], rather than ingesting data for just [today-1]. Only valid if the data source supports the feature. Set the value to 0 to use the default value.|
|» dataSourceId|body|string|false|Data source ID. This cannot be changed once data transfer is created. The full list of available data source IDs can be returned through an API call: https://cloud.google.com/bigquery-transfer/docs/reference/datatransfer/rest/v1/projects.locations.dataSources/list|
|» destinationDatasetId|body|string|false|The BigQuery target dataset id.|
|» disabled|body|boolean|false|Is this config disabled. When set to true, no runs are scheduled for a given transfer.|
|» displayName|body|string|false|User specified display name for the data transfer.|
|» emailPreferences|body|[EmailPreferences](#schemaemailpreferences)|false|Email notifications will be sent according to these preferences to the email address of the user who owns this transfer config.|
|» name|body|string|false|The resource name of the transfer config. Transfer config names have the form `projects/{project_id}/locations/{region}/transferConfigs/{config_id}`. Where `config_id` is usually a uuid, even though it is not guaranteed or required. The name is ignored when creating a transfer config.|
|» notificationPubsubTopic|body|string|false|Pub/Sub topic where notifications will be sent after transfer runs associated with this transfer config finish. The format for specifying a pubsub topic is: `projects/{project}/topics/{topic}`|
|» params|body|object|false|Parameters specific to each data source. For more information see the bq tab in the 'Setting up a data transfer' section for each data source. For example the parameters for Cloud Storage transfers are listed here: https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq|
|» » **additionalProperties**|body|object|false|Properties of the object.|
|» schedule|body|string|false|Data transfer schedule. If the data source does not support a custom schedule, this should be empty. If it is empty, the default value for the data source will be used. The specified times are in UTC. Examples of valid format: `1st,3rd monday of month 15:30`, `every wed,fri of jan,jun 13:15`, and `first sunday of quarter 00:00`. See more explanation about the format here: https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format NOTE: The minimum interval time between recurring transfers depends on the data source; refer to the documentation for your data source.|
|» scheduleOptions|body|[ScheduleOptions](#schemascheduleoptions)|false|Options customizing the data transfer schedule.|
|» userId|body|string(int64)|false|Deprecated. Unique ID of the user on whose behalf transfer is done.|

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
  "dataRefreshWindowDays": 0,
  "dataSourceId": "string",
  "datasetRegion": "string",
  "destinationDatasetId": "string",
  "disabled": true,
  "displayName": "string",
  "emailPreferences": {
    "enableFailureEmail": true
  },
  "name": "string",
  "nextRunTime": "string",
  "notificationPubsubTopic": "string",
  "ownerInfo": {
    "email": "string"
  },
  "params": {
    "property1": null,
    "property2": null
  },
  "schedule": "string",
  "scheduleOptions": {
    "disableAutoScheduling": true,
    "endTime": "string",
    "startTime": "string"
  },
  "state": "TRANSFER_STATE_UNSPECIFIED",
  "updateTime": "string",
  "userId": "string"
}
```

<h3 id="bigquerydatatransferprojectstransferconfigscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TransferConfig](#schematransferconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigquerydatatransfer.projects.transferConfigs.runs.transferLogs.list

<a id="opIdbigquerydatatransfer.projects.transferConfigs.runs.transferLogs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/transferLogs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/transferLogs`

Returns log messages for the transfer run.

<h3 id="bigquerydatatransferprojectstransferconfigsrunstransferlogslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Transfer run name in the form: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`|
|messageTypes|query|[string]|false|Message types to return. If not populated - INFO, WARNING and ERROR messages are returned.|
|pageSize|query|integer|false|Page size. The default page size is the maximum value of 1000 results.|
|pageToken|query|string|false|Pagination token, which can be used to request a specific page of `ListTransferLogsRequest` list results. For multiple-page results, `ListTransferLogsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.|
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
|messageTypes|MESSAGE_SEVERITY_UNSPECIFIED|
|messageTypes|INFO|
|messageTypes|WARNING|
|messageTypes|ERROR|
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
  "transferMessages": [
    {
      "messageText": "string",
      "messageTime": "string",
      "severity": "MESSAGE_SEVERITY_UNSPECIFIED"
    }
  ]
}
```

<h3 id="bigquerydatatransferprojectstransferconfigsrunstransferlogslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListTransferLogsResponse](#schemalisttransferlogsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## bigquerydatatransfer.projects.transferConfigs.scheduleRuns

<a id="opIdbigquerydatatransfer.projects.transferConfigs.scheduleRuns"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:scheduleRuns \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "endTime": "string",
    "startTime": "string"
  }'
```

`POST /v1/{parent}:scheduleRuns`

Creates transfer runs for a time range [start_time, end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead.

> Body parameter

```json
{
  "endTime": "string",
  "startTime": "string"
}
```

<h3 id="bigquerydatatransferprojectstransferconfigsscheduleruns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Transfer configuration name in the form: `projects/{project_id}/transferConfigs/{config_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.|
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
|body|body|[ScheduleTransferRunsRequest](#schemascheduletransferrunsrequest)|false|none|
|» endTime|body|string(google-datetime)|false|Required. End time of the range of transfer runs. For example, `"2017-05-30T00:00:00+00:00"`.|
|» startTime|body|string(google-datetime)|false|Required. Start time of the range of transfer runs. For example, `"2017-05-25T00:00:00+00:00"`.|

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
  "runs": [
    {
      "dataSourceId": "string",
      "destinationDatasetId": "string",
      "emailPreferences": {
        "enableFailureEmail": true
      },
      "endTime": "string",
      "errorStatus": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "name": "string",
      "notificationPubsubTopic": "string",
      "params": {
        "property1": null,
        "property2": null
      },
      "runTime": "string",
      "schedule": "string",
      "scheduleTime": "string",
      "startTime": "string",
      "state": "TRANSFER_STATE_UNSPECIFIED",
      "updateTime": "string",
      "userId": "string"
    }
  ]
}
```

<h3 id="bigquerydatatransferprojectstransferconfigsscheduleruns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ScheduleTransferRunsResponse](#schemascheduletransferrunsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## bigquerydatatransfer.projects.transferConfigs.startManualRuns

<a id="opIdbigquerydatatransfer.projects.transferConfigs.startManualRuns"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:startManualRuns \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "requestedRunTime": "string",
    "requestedTimeRange": {
      "endTime": "string",
      "startTime": "string"
    }
  }'
```

`POST /v1/{parent}:startManualRuns`

Start manual transfer runs to be executed now with schedule_time equal to current time. The transfer runs can be created for a time range where the run_time is between start_time (inclusive) and end_time (exclusive), or for a specific run_time.

> Body parameter

```json
{
  "requestedRunTime": "string",
  "requestedTimeRange": {
    "endTime": "string",
    "startTime": "string"
  }
}
```

<h3 id="bigquerydatatransferprojectstransferconfigsstartmanualruns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Transfer configuration name in the form: `projects/{project_id}/transferConfigs/{config_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.|
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
|body|body|[StartManualTransferRunsRequest](#schemastartmanualtransferrunsrequest)|false|none|
|» requestedRunTime|body|string(google-datetime)|false|Specific run_time for a transfer run to be started. The requested_run_time must not be in the future.|
|» requestedTimeRange|body|[TimeRange](#schematimerange)|false|Time range for the transfer runs that should be started.|

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
  "runs": [
    {
      "dataSourceId": "string",
      "destinationDatasetId": "string",
      "emailPreferences": {
        "enableFailureEmail": true
      },
      "endTime": "string",
      "errorStatus": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "name": "string",
      "notificationPubsubTopic": "string",
      "params": {
        "property1": null,
        "property2": null
      },
      "runTime": "string",
      "schedule": "string",
      "scheduleTime": "string",
      "startTime": "string",
      "state": "TRANSFER_STATE_UNSPECIFIED",
      "updateTime": "string",
      "userId": "string"
    }
  ]
}
```

<h3 id="bigquerydatatransferprojectstransferconfigsstartmanualruns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[StartManualTransferRunsResponse](#schemastartmanualtransferrunsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_CheckValidCredsRequest">CheckValidCredsRequest</h2>
<!-- backwards compatibility -->
<a id="schemacheckvalidcredsrequest"></a>
<a id="schema_CheckValidCredsRequest"></a>
<a id="tocScheckvalidcredsrequest"></a>
<a id="tocscheckvalidcredsrequest"></a>

```json
{}
```

A request to determine whether the user has valid credentials. This method is used to limit the number of OAuth popups in the user interface. The user id is inferred from the API call context. If the data source has the Google+ authorization type, this method returns false, as it cannot be determined whether the credentials are already valid merely based on the user id.

<h2 id="tocS_CheckValidCredsResponse">CheckValidCredsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacheckvalidcredsresponse"></a>
<a id="schema_CheckValidCredsResponse"></a>
<a id="tocScheckvalidcredsresponse"></a>
<a id="tocscheckvalidcredsresponse"></a>

```json
{
  "hasValidCreds": true
}
```

A response indicating whether the credentials exist and are valid.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hasValidCreds|boolean|false|none|If set to `true`, the credentials exist and are valid.|

<h2 id="tocS_DataSource">DataSource</h2>
<!-- backwards compatibility -->
<a id="schemadatasource"></a>
<a id="schema_DataSource"></a>
<a id="tocSdatasource"></a>
<a id="tocsdatasource"></a>

```json
{
  "authorizationType": "AUTHORIZATION_TYPE_UNSPECIFIED",
  "clientId": "string",
  "dataRefreshType": "DATA_REFRESH_TYPE_UNSPECIFIED",
  "dataSourceId": "string",
  "defaultDataRefreshWindowDays": 0,
  "defaultSchedule": "string",
  "description": "string",
  "displayName": "string",
  "helpUrl": "string",
  "manualRunsDisabled": true,
  "minimumScheduleInterval": "string",
  "name": "string",
  "parameters": [
    {
      "allowedValues": [
        "string"
      ],
      "deprecated": true,
      "description": "string",
      "displayName": "string",
      "fields": [
        {}
      ],
      "immutable": true,
      "maxValue": 0,
      "minValue": 0,
      "paramId": "string",
      "recurse": true,
      "repeated": true,
      "required": true,
      "type": "TYPE_UNSPECIFIED",
      "validationDescription": "string",
      "validationHelpUrl": "string",
      "validationRegex": "string"
    }
  ],
  "scopes": [
    "string"
  ],
  "supportsCustomSchedule": true,
  "supportsMultipleTransfers": true,
  "transferType": "TRANSFER_TYPE_UNSPECIFIED",
  "updateDeadlineSeconds": 0
}
```

Defines the properties and custom parameters for a data source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorizationType|string|false|none|Indicates the type of authorization.|
|clientId|string|false|none|Data source client id which should be used to receive refresh token.|
|dataRefreshType|string|false|none|Specifies whether the data source supports automatic data refresh for the past few days, and how it's supported. For some data sources, data might not be complete until a few days later, so it's useful to refresh data automatically.|
|dataSourceId|string|false|none|Data source id.|
|defaultDataRefreshWindowDays|integer(int32)|false|none|Default data refresh window on days. Only meaningful when `data_refresh_type` = `SLIDING_WINDOW`.|
|defaultSchedule|string|false|none|Default data transfer schedule. Examples of valid schedules include: `1st,3rd monday of month 15:30`, `every wed,fri of jan,jun 13:15`, and `first sunday of quarter 00:00`.|
|description|string|false|none|User friendly data source description string.|
|displayName|string|false|none|User friendly data source name.|
|helpUrl|string|false|none|Url for the help document for this data source.|
|manualRunsDisabled|boolean|false|none|Disables backfilling and manual run scheduling for the data source.|
|minimumScheduleInterval|string(google-duration)|false|none|The minimum interval for scheduler to schedule runs.|
|name|string|false|read-only|Output only. Data source resource name.|
|parameters|[[DataSourceParameter](#schemadatasourceparameter)]|false|none|Data source parameters.|
|scopes|[string]|false|none|Api auth scopes for which refresh token needs to be obtained. These are scopes needed by a data source to prepare data and ingest them into BigQuery, e.g., https://www.googleapis.com/auth/bigquery|
|supportsCustomSchedule|boolean|false|none|Specifies whether the data source supports a user defined schedule, or operates on the default schedule. When set to `true`, user can override default schedule.|
|supportsMultipleTransfers|boolean|false|none|Deprecated. This field has no effect.|
|transferType|string|false|none|Deprecated. This field has no effect.|
|updateDeadlineSeconds|integer(int32)|false|none|The number of seconds to wait for an update from the data source before the Data Transfer Service marks the transfer as FAILED.|

#### Enumerated Values

|Property|Value|
|---|---|
|authorizationType|AUTHORIZATION_TYPE_UNSPECIFIED|
|authorizationType|AUTHORIZATION_CODE|
|authorizationType|GOOGLE_PLUS_AUTHORIZATION_CODE|
|authorizationType|FIRST_PARTY_OAUTH|
|dataRefreshType|DATA_REFRESH_TYPE_UNSPECIFIED|
|dataRefreshType|SLIDING_WINDOW|
|dataRefreshType|CUSTOM_SLIDING_WINDOW|
|transferType|TRANSFER_TYPE_UNSPECIFIED|
|transferType|BATCH|
|transferType|STREAMING|

<h2 id="tocS_DataSourceParameter">DataSourceParameter</h2>
<!-- backwards compatibility -->
<a id="schemadatasourceparameter"></a>
<a id="schema_DataSourceParameter"></a>
<a id="tocSdatasourceparameter"></a>
<a id="tocsdatasourceparameter"></a>

```json
{
  "allowedValues": [
    "string"
  ],
  "deprecated": true,
  "description": "string",
  "displayName": "string",
  "fields": [
    {
      "allowedValues": [
        "string"
      ],
      "deprecated": true,
      "description": "string",
      "displayName": "string",
      "fields": [
        {}
      ],
      "immutable": true,
      "maxValue": 0,
      "minValue": 0,
      "paramId": "string",
      "recurse": true,
      "repeated": true,
      "required": true,
      "type": "TYPE_UNSPECIFIED",
      "validationDescription": "string",
      "validationHelpUrl": "string",
      "validationRegex": "string"
    }
  ],
  "immutable": true,
  "maxValue": 0,
  "minValue": 0,
  "paramId": "string",
  "recurse": true,
  "repeated": true,
  "required": true,
  "type": "TYPE_UNSPECIFIED",
  "validationDescription": "string",
  "validationHelpUrl": "string",
  "validationRegex": "string"
}
```

A parameter used to define custom fields in a data source definition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedValues|[string]|false|none|All possible values for the parameter.|
|deprecated|boolean|false|none|If true, it should not be used in new transfers, and it should not be visible to users.|
|description|string|false|none|Parameter description.|
|displayName|string|false|none|Parameter display name in the user interface.|
|fields|[[DataSourceParameter](#schemadatasourceparameter)]|false|none|Deprecated. This field has no effect.|
|immutable|boolean|false|none|Cannot be changed after initial creation.|
|maxValue|number(double)|false|none|For integer and double values specifies maximum allowed value.|
|minValue|number(double)|false|none|For integer and double values specifies minimum allowed value.|
|paramId|string|false|none|Parameter identifier.|
|recurse|boolean|false|none|Deprecated. This field has no effect.|
|repeated|boolean|false|none|Deprecated. This field has no effect.|
|required|boolean|false|none|Is parameter required.|
|type|string|false|none|Parameter type.|
|validationDescription|string|false|none|Description of the requirements for this field, in case the user input does not fulfill the regex pattern or min/max values.|
|validationHelpUrl|string|false|none|URL to a help document to further explain the naming requirements.|
|validationRegex|string|false|none|Regular expression which can be used for parameter validation.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|STRING|
|type|INTEGER|
|type|DOUBLE|
|type|BOOLEAN|
|type|RECORD|
|type|PLUS_PAGE|

<h2 id="tocS_EmailPreferences">EmailPreferences</h2>
<!-- backwards compatibility -->
<a id="schemaemailpreferences"></a>
<a id="schema_EmailPreferences"></a>
<a id="tocSemailpreferences"></a>
<a id="tocsemailpreferences"></a>

```json
{
  "enableFailureEmail": true
}
```

Represents preferences for sending email notifications for transfer run events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enableFailureEmail|boolean|false|none|If true, email notifications will be sent on transfer run failures.|

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

<h2 id="tocS_EnrollDataSourcesRequest">EnrollDataSourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenrolldatasourcesrequest"></a>
<a id="schema_EnrollDataSourcesRequest"></a>
<a id="tocSenrolldatasourcesrequest"></a>
<a id="tocsenrolldatasourcesrequest"></a>

```json
{
  "dataSourceIds": [
    "string"
  ]
}
```

A request to enroll a set of data sources so they are visible in the BigQuery UI's `Transfer` tab.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataSourceIds|[string]|false|none|Data sources that are enrolled. It is required to provide at least one data source id.|

<h2 id="tocS_ListDataSourcesResponse">ListDataSourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasourcesresponse"></a>
<a id="schema_ListDataSourcesResponse"></a>
<a id="tocSlistdatasourcesresponse"></a>
<a id="tocslistdatasourcesresponse"></a>

```json
{
  "dataSources": [
    {
      "authorizationType": "AUTHORIZATION_TYPE_UNSPECIFIED",
      "clientId": "string",
      "dataRefreshType": "DATA_REFRESH_TYPE_UNSPECIFIED",
      "dataSourceId": "string",
      "defaultDataRefreshWindowDays": 0,
      "defaultSchedule": "string",
      "description": "string",
      "displayName": "string",
      "helpUrl": "string",
      "manualRunsDisabled": true,
      "minimumScheduleInterval": "string",
      "name": "string",
      "parameters": [
        {
          "allowedValues": [
            "string"
          ],
          "deprecated": true,
          "description": "string",
          "displayName": "string",
          "fields": [
            {}
          ],
          "immutable": true,
          "maxValue": 0,
          "minValue": 0,
          "paramId": "string",
          "recurse": true,
          "repeated": true,
          "required": true,
          "type": "TYPE_UNSPECIFIED",
          "validationDescription": "string",
          "validationHelpUrl": "string",
          "validationRegex": "string"
        }
      ],
      "scopes": [
        "string"
      ],
      "supportsCustomSchedule": true,
      "supportsMultipleTransfers": true,
      "transferType": "TRANSFER_TYPE_UNSPECIFIED",
      "updateDeadlineSeconds": 0
    }
  ],
  "nextPageToken": "string"
}
```

Returns list of supported data sources and their metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataSources|[[DataSource](#schemadatasource)]|false|none|List of supported data sources and their transfer settings.|
|nextPageToken|string|false|read-only|Output only. The next-pagination token. For multiple-page list results, this token can be used as the `ListDataSourcesRequest.page_token` to request the next page of list results.|

<h2 id="tocS_ListLocationsResponse">ListLocationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlocationsresponse"></a>
<a id="schema_ListLocationsResponse"></a>
<a id="tocSlistlocationsresponse"></a>
<a id="tocslistlocationsresponse"></a>

```json
{
  "locations": [
    {
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "locationId": "string",
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response message for Locations.ListLocations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locations|[[Location](#schemalocation)]|false|none|A list of locations that matches the specified filter in the request.|
|nextPageToken|string|false|none|The standard List next-page token.|

<h2 id="tocS_ListTransferConfigsResponse">ListTransferConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttransferconfigsresponse"></a>
<a id="schema_ListTransferConfigsResponse"></a>
<a id="tocSlisttransferconfigsresponse"></a>
<a id="tocslisttransferconfigsresponse"></a>

```json
{
  "nextPageToken": "string",
  "transferConfigs": [
    {
      "dataRefreshWindowDays": 0,
      "dataSourceId": "string",
      "datasetRegion": "string",
      "destinationDatasetId": "string",
      "disabled": true,
      "displayName": "string",
      "emailPreferences": {
        "enableFailureEmail": true
      },
      "name": "string",
      "nextRunTime": "string",
      "notificationPubsubTopic": "string",
      "ownerInfo": {
        "email": "string"
      },
      "params": {
        "property1": null,
        "property2": null
      },
      "schedule": "string",
      "scheduleOptions": {
        "disableAutoScheduling": true,
        "endTime": "string",
        "startTime": "string"
      },
      "state": "TRANSFER_STATE_UNSPECIFIED",
      "updateTime": "string",
      "userId": "string"
    }
  ]
}
```

The returned list of pipelines in the project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|read-only|Output only. The next-pagination token. For multiple-page list results, this token can be used as the `ListTransferConfigsRequest.page_token` to request the next page of list results.|
|transferConfigs|[[TransferConfig](#schematransferconfig)]|false|read-only|Output only. The stored pipeline transfer configurations.|

<h2 id="tocS_ListTransferLogsResponse">ListTransferLogsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttransferlogsresponse"></a>
<a id="schema_ListTransferLogsResponse"></a>
<a id="tocSlisttransferlogsresponse"></a>
<a id="tocslisttransferlogsresponse"></a>

```json
{
  "nextPageToken": "string",
  "transferMessages": [
    {
      "messageText": "string",
      "messageTime": "string",
      "severity": "MESSAGE_SEVERITY_UNSPECIFIED"
    }
  ]
}
```

The returned list transfer run messages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|read-only|Output only. The next-pagination token. For multiple-page list results, this token can be used as the `GetTransferRunLogRequest.page_token` to request the next page of list results.|
|transferMessages|[[TransferMessage](#schematransfermessage)]|false|read-only|Output only. The stored pipeline transfer messages.|

<h2 id="tocS_ListTransferRunsResponse">ListTransferRunsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttransferrunsresponse"></a>
<a id="schema_ListTransferRunsResponse"></a>
<a id="tocSlisttransferrunsresponse"></a>
<a id="tocslisttransferrunsresponse"></a>

```json
{
  "nextPageToken": "string",
  "transferRuns": [
    {
      "dataSourceId": "string",
      "destinationDatasetId": "string",
      "emailPreferences": {
        "enableFailureEmail": true
      },
      "endTime": "string",
      "errorStatus": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "name": "string",
      "notificationPubsubTopic": "string",
      "params": {
        "property1": null,
        "property2": null
      },
      "runTime": "string",
      "schedule": "string",
      "scheduleTime": "string",
      "startTime": "string",
      "state": "TRANSFER_STATE_UNSPECIFIED",
      "updateTime": "string",
      "userId": "string"
    }
  ]
}
```

The returned list of pipelines in the project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|read-only|Output only. The next-pagination token. For multiple-page list results, this token can be used as the `ListTransferRunsRequest.page_token` to request the next page of list results.|
|transferRuns|[[TransferRun](#schematransferrun)]|false|read-only|Output only. The stored pipeline transfer runs.|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "locationId": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string"
}
```

A resource that represents Google Cloud Platform location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The friendly name for this location, typically a nearby city name. For example, "Tokyo".|
|labels|object|false|none|Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}|
|locationId|string|false|none|The canonical id for this location. For example: `"us-east1"`.|
|metadata|object|false|none|Service-specific metadata. For example the available capacity at the given location.|
|name|string|false|none|Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`|

<h2 id="tocS_ScheduleOptions">ScheduleOptions</h2>
<!-- backwards compatibility -->
<a id="schemascheduleoptions"></a>
<a id="schema_ScheduleOptions"></a>
<a id="tocSscheduleoptions"></a>
<a id="tocsscheduleoptions"></a>

```json
{
  "disableAutoScheduling": true,
  "endTime": "string",
  "startTime": "string"
}
```

Options customizing the data transfer schedule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disableAutoScheduling|boolean|false|none|If true, automatic scheduling of data transfer runs for this configuration will be disabled. The runs can be started on ad-hoc basis using StartManualTransferRuns API. When automatic scheduling is disabled, the TransferConfig.schedule field will be ignored.|
|endTime|string(google-datetime)|false|none|Defines time to stop scheduling transfer runs. A transfer run cannot be scheduled at or after the end time. The end time can be changed at any moment. The time when a data transfer can be trigerred manually is not limited by this option.|
|startTime|string(google-datetime)|false|none|Specifies time to start scheduling transfer runs. The first run will be scheduled at or after the start time according to a recurrence pattern defined in the schedule string. The start time can be changed at any moment. The time when a data transfer can be trigerred manually is not limited by this option.|

<h2 id="tocS_ScheduleTransferRunsRequest">ScheduleTransferRunsRequest</h2>
<!-- backwards compatibility -->
<a id="schemascheduletransferrunsrequest"></a>
<a id="schema_ScheduleTransferRunsRequest"></a>
<a id="tocSscheduletransferrunsrequest"></a>
<a id="tocsscheduletransferrunsrequest"></a>

```json
{
  "endTime": "string",
  "startTime": "string"
}
```

A request to schedule transfer runs for a time range.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|Required. End time of the range of transfer runs. For example, `"2017-05-30T00:00:00+00:00"`.|
|startTime|string(google-datetime)|false|none|Required. Start time of the range of transfer runs. For example, `"2017-05-25T00:00:00+00:00"`.|

<h2 id="tocS_ScheduleTransferRunsResponse">ScheduleTransferRunsResponse</h2>
<!-- backwards compatibility -->
<a id="schemascheduletransferrunsresponse"></a>
<a id="schema_ScheduleTransferRunsResponse"></a>
<a id="tocSscheduletransferrunsresponse"></a>
<a id="tocsscheduletransferrunsresponse"></a>

```json
{
  "runs": [
    {
      "dataSourceId": "string",
      "destinationDatasetId": "string",
      "emailPreferences": {
        "enableFailureEmail": true
      },
      "endTime": "string",
      "errorStatus": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "name": "string",
      "notificationPubsubTopic": "string",
      "params": {
        "property1": null,
        "property2": null
      },
      "runTime": "string",
      "schedule": "string",
      "scheduleTime": "string",
      "startTime": "string",
      "state": "TRANSFER_STATE_UNSPECIFIED",
      "updateTime": "string",
      "userId": "string"
    }
  ]
}
```

A response to schedule transfer runs for a time range.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|runs|[[TransferRun](#schematransferrun)]|false|none|The transfer runs that were scheduled.|

<h2 id="tocS_StartManualTransferRunsRequest">StartManualTransferRunsRequest</h2>
<!-- backwards compatibility -->
<a id="schemastartmanualtransferrunsrequest"></a>
<a id="schema_StartManualTransferRunsRequest"></a>
<a id="tocSstartmanualtransferrunsrequest"></a>
<a id="tocsstartmanualtransferrunsrequest"></a>

```json
{
  "requestedRunTime": "string",
  "requestedTimeRange": {
    "endTime": "string",
    "startTime": "string"
  }
}
```

A request to start manual transfer runs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestedRunTime|string(google-datetime)|false|none|Specific run_time for a transfer run to be started. The requested_run_time must not be in the future.|
|requestedTimeRange|[TimeRange](#schematimerange)|false|none|Time range for the transfer runs that should be started.|

<h2 id="tocS_StartManualTransferRunsResponse">StartManualTransferRunsResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartmanualtransferrunsresponse"></a>
<a id="schema_StartManualTransferRunsResponse"></a>
<a id="tocSstartmanualtransferrunsresponse"></a>
<a id="tocsstartmanualtransferrunsresponse"></a>

```json
{
  "runs": [
    {
      "dataSourceId": "string",
      "destinationDatasetId": "string",
      "emailPreferences": {
        "enableFailureEmail": true
      },
      "endTime": "string",
      "errorStatus": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "name": "string",
      "notificationPubsubTopic": "string",
      "params": {
        "property1": null,
        "property2": null
      },
      "runTime": "string",
      "schedule": "string",
      "scheduleTime": "string",
      "startTime": "string",
      "state": "TRANSFER_STATE_UNSPECIFIED",
      "updateTime": "string",
      "userId": "string"
    }
  ]
}
```

A response to start manual transfer runs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|runs|[[TransferRun](#schematransferrun)]|false|none|The transfer runs that were created.|

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

<h2 id="tocS_TimeRange">TimeRange</h2>
<!-- backwards compatibility -->
<a id="schematimerange"></a>
<a id="schema_TimeRange"></a>
<a id="tocStimerange"></a>
<a id="tocstimerange"></a>

```json
{
  "endTime": "string",
  "startTime": "string"
}
```

A specification for a time range, this will request transfer runs with run_time between start_time (inclusive) and end_time (exclusive).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|End time of the range of transfer runs. For example, `"2017-05-30T00:00:00+00:00"`. The end_time must not be in the future. Creates transfer runs where run_time is in the range between start_time (inclusive) and end_time (exclusive).|
|startTime|string(google-datetime)|false|none|Start time of the range of transfer runs. For example, `"2017-05-25T00:00:00+00:00"`. The start_time must be strictly less than the end_time. Creates transfer runs where run_time is in the range between start_time (inclusive) and end_time (exclusive).|

<h2 id="tocS_TransferConfig">TransferConfig</h2>
<!-- backwards compatibility -->
<a id="schematransferconfig"></a>
<a id="schema_TransferConfig"></a>
<a id="tocStransferconfig"></a>
<a id="tocstransferconfig"></a>

```json
{
  "dataRefreshWindowDays": 0,
  "dataSourceId": "string",
  "datasetRegion": "string",
  "destinationDatasetId": "string",
  "disabled": true,
  "displayName": "string",
  "emailPreferences": {
    "enableFailureEmail": true
  },
  "name": "string",
  "nextRunTime": "string",
  "notificationPubsubTopic": "string",
  "ownerInfo": {
    "email": "string"
  },
  "params": {
    "property1": null,
    "property2": null
  },
  "schedule": "string",
  "scheduleOptions": {
    "disableAutoScheduling": true,
    "endTime": "string",
    "startTime": "string"
  },
  "state": "TRANSFER_STATE_UNSPECIFIED",
  "updateTime": "string",
  "userId": "string"
}
```

Represents a data transfer configuration. A transfer configuration contains all metadata needed to perform a data transfer. For example, `destination_dataset_id` specifies where data should be stored. When a new transfer configuration is created, the specified `destination_dataset_id` is created when needed and shared with the appropriate data source service account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataRefreshWindowDays|integer(int32)|false|none|The number of days to look back to automatically refresh the data. For example, if `data_refresh_window_days = 10`, then every day BigQuery reingests data for [today-10, today-1], rather than ingesting data for just [today-1]. Only valid if the data source supports the feature. Set the value to 0 to use the default value.|
|dataSourceId|string|false|none|Data source ID. This cannot be changed once data transfer is created. The full list of available data source IDs can be returned through an API call: https://cloud.google.com/bigquery-transfer/docs/reference/datatransfer/rest/v1/projects.locations.dataSources/list|
|datasetRegion|string|false|read-only|Output only. Region in which BigQuery dataset is located.|
|destinationDatasetId|string|false|none|The BigQuery target dataset id.|
|disabled|boolean|false|none|Is this config disabled. When set to true, no runs are scheduled for a given transfer.|
|displayName|string|false|none|User specified display name for the data transfer.|
|emailPreferences|[EmailPreferences](#schemaemailpreferences)|false|none|Email notifications will be sent according to these preferences to the email address of the user who owns this transfer config.|
|name|string|false|none|The resource name of the transfer config. Transfer config names have the form `projects/{project_id}/locations/{region}/transferConfigs/{config_id}`. Where `config_id` is usually a uuid, even though it is not guaranteed or required. The name is ignored when creating a transfer config.|
|nextRunTime|string(google-datetime)|false|read-only|Output only. Next time when data transfer will run.|
|notificationPubsubTopic|string|false|none|Pub/Sub topic where notifications will be sent after transfer runs associated with this transfer config finish. The format for specifying a pubsub topic is: `projects/{project}/topics/{topic}`|
|ownerInfo|[UserInfo](#schemauserinfo)|false|none|Output only. Information about the user whose credentials are used to transfer data. Populated only for `transferConfigs.get` requests. In case the user information is not available, this field will not be populated.|
|params|object|false|none|Parameters specific to each data source. For more information see the bq tab in the 'Setting up a data transfer' section for each data source. For example the parameters for Cloud Storage transfers are listed here: https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq|
|schedule|string|false|none|Data transfer schedule. If the data source does not support a custom schedule, this should be empty. If it is empty, the default value for the data source will be used. The specified times are in UTC. Examples of valid format: `1st,3rd monday of month 15:30`, `every wed,fri of jan,jun 13:15`, and `first sunday of quarter 00:00`. See more explanation about the format here: https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format NOTE: The minimum interval time between recurring transfers depends on the data source; refer to the documentation for your data source.|
|scheduleOptions|[ScheduleOptions](#schemascheduleoptions)|false|none|Options customizing the data transfer schedule.|
|state|string|false|read-only|Output only. State of the most recently updated transfer run.|
|updateTime|string(google-datetime)|false|read-only|Output only. Data transfer modification time. Ignored by server on input.|
|userId|string(int64)|false|none|Deprecated. Unique ID of the user on whose behalf transfer is done.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|TRANSFER_STATE_UNSPECIFIED|
|state|PENDING|
|state|RUNNING|
|state|SUCCEEDED|
|state|FAILED|
|state|CANCELLED|

<h2 id="tocS_TransferMessage">TransferMessage</h2>
<!-- backwards compatibility -->
<a id="schematransfermessage"></a>
<a id="schema_TransferMessage"></a>
<a id="tocStransfermessage"></a>
<a id="tocstransfermessage"></a>

```json
{
  "messageText": "string",
  "messageTime": "string",
  "severity": "MESSAGE_SEVERITY_UNSPECIFIED"
}
```

Represents a user facing message for a particular data transfer run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messageText|string|false|none|Message text.|
|messageTime|string(google-datetime)|false|none|Time when message was logged.|
|severity|string|false|none|Message severity.|

#### Enumerated Values

|Property|Value|
|---|---|
|severity|MESSAGE_SEVERITY_UNSPECIFIED|
|severity|INFO|
|severity|WARNING|
|severity|ERROR|

<h2 id="tocS_TransferRun">TransferRun</h2>
<!-- backwards compatibility -->
<a id="schematransferrun"></a>
<a id="schema_TransferRun"></a>
<a id="tocStransferrun"></a>
<a id="tocstransferrun"></a>

```json
{
  "dataSourceId": "string",
  "destinationDatasetId": "string",
  "emailPreferences": {
    "enableFailureEmail": true
  },
  "endTime": "string",
  "errorStatus": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "name": "string",
  "notificationPubsubTopic": "string",
  "params": {
    "property1": null,
    "property2": null
  },
  "runTime": "string",
  "schedule": "string",
  "scheduleTime": "string",
  "startTime": "string",
  "state": "TRANSFER_STATE_UNSPECIFIED",
  "updateTime": "string",
  "userId": "string"
}
```

Represents a data transfer run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataSourceId|string|false|read-only|Output only. Data source id.|
|destinationDatasetId|string|false|read-only|Output only. The BigQuery target dataset id.|
|emailPreferences|[EmailPreferences](#schemaemailpreferences)|false|none|Output only. Email notifications will be sent according to these preferences to the email address of the user who owns the transfer config this run was derived from.|
|endTime|string(google-datetime)|false|read-only|Output only. Time when transfer run ended. Parameter ignored by server for input requests.|
|errorStatus|[Status](#schemastatus)|false|none|Status of the transfer run.|
|name|string|false|none|The resource name of the transfer run. Transfer run names have the form `projects/{project_id}/locations/{location}/transferConfigs/{config_id}/runs/{run_id}`. The name is ignored when creating a transfer run.|
|notificationPubsubTopic|string|false|read-only|Output only. Pub/Sub topic where a notification will be sent after this transfer run finishes. The format for specifying a pubsub topic is: `projects/{project}/topics/{topic}`|
|params|object|false|read-only|Output only. Parameters specific to each data source. For more information see the bq tab in the 'Setting up a data transfer' section for each data source. For example the parameters for Cloud Storage transfers are listed here: https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq|
|runTime|string(google-datetime)|false|none|For batch transfer runs, specifies the date and time of the data should be ingested.|
|schedule|string|false|read-only|Output only. Describes the schedule of this transfer run if it was created as part of a regular schedule. For batch transfer runs that are scheduled manually, this is empty. NOTE: the system might choose to delay the schedule depending on the current load, so `schedule_time` doesn't always match this.|
|scheduleTime|string(google-datetime)|false|none|Minimum time after which a transfer run can be started.|
|startTime|string(google-datetime)|false|read-only|Output only. Time when transfer run was started. Parameter ignored by server for input requests.|
|state|string|false|none|Data transfer run state. Ignored for input requests.|
|updateTime|string(google-datetime)|false|read-only|Output only. Last time the data transfer run state was updated.|
|userId|string(int64)|false|none|Deprecated. Unique ID of the user on whose behalf transfer is done.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|TRANSFER_STATE_UNSPECIFIED|
|state|PENDING|
|state|RUNNING|
|state|SUCCEEDED|
|state|FAILED|
|state|CANCELLED|

<h2 id="tocS_UserInfo">UserInfo</h2>
<!-- backwards compatibility -->
<a id="schemauserinfo"></a>
<a id="schema_UserInfo"></a>
<a id="tocSuserinfo"></a>
<a id="tocsuserinfo"></a>

```json
{
  "email": "string"
}
```

Information about a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|E-mail address of the user.|
