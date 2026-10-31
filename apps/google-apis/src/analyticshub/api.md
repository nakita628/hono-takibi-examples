<h1 id="analytics-hub-api">Analytics Hub API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Exchange data and analytics assets securely and efficiently.

Base URLs:

* <a href="https://analyticshub.googleapis.com/">https://analyticshub.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/bigquery/docs/analytics-hub-introduction">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/bigquery|View and manage your data in Google BigQuery and see the email address for your Google Account|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/bigquery|View and manage your data in Google BigQuery and see the email address for your Google Account|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

<h1 id="analytics-hub-api-organizations">organizations</h1>

## analyticshub.organizations.locations.dataExchanges.list

<a id="opIdanalyticshub.organizations.locations.dataExchanges.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/dataExchanges \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{organization}/dataExchanges`

Lists all data exchanges from projects in a given organization and location.

<h3 id="analyticshuborganizationslocationsdataexchangeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organization|path|string|true|Required. The organization resource path of the projects containing DataExchanges. e.g. `organizations/myorg/locations/US`.|
|pageSize|query|integer|false|The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.|
|pageToken|query|string|false|Page token, returned by a previous call, to request the next page of results.|
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
  "dataExchanges": [
    {
      "description": "string",
      "displayName": "string",
      "documentation": "string",
      "icon": "string",
      "listingCount": 0,
      "name": "string",
      "primaryContact": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="analyticshuborganizationslocationsdataexchangeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOrgDataExchangesResponse](#schemalistorgdataexchangesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="analytics-hub-api-projects">projects</h1>

## analyticshub.projects.locations.dataExchanges.listings.get

<a id="opIdanalyticshub.projects.locations.dataExchanges.listings.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Gets the details of a listing.

<h3 id="analyticshubprojectslocationsdataexchangeslistingsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the listing. e.g. `projects/myproject/locations/US/dataExchanges/123/listings/456`.|
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
  "bigqueryDataset": {
    "dataset": "string"
  },
  "categories": [
    "CATEGORY_UNSPECIFIED"
  ],
  "dataProvider": {
    "name": "string",
    "primaryContact": "string"
  },
  "description": "string",
  "displayName": "string",
  "documentation": "string",
  "icon": "string",
  "name": "string",
  "primaryContact": "string",
  "publisher": {
    "name": "string",
    "primaryContact": "string"
  },
  "requestAccess": "string",
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="analyticshubprojectslocationsdataexchangeslistingsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Listing](#schemalisting)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## analyticshub.projects.locations.dataExchanges.listings.delete

<a id="opIdanalyticshub.projects.locations.dataExchanges.listings.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Deletes a listing.

<h3 id="analyticshubprojectslocationsdataexchangeslistingsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Resource name of the listing to delete. e.g. `projects/myproject/locations/US/dataExchanges/123/listings/456`.|
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

<h3 id="analyticshubprojectslocationsdataexchangeslistingsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## analyticshub.projects.locations.dataExchanges.listings.patch

<a id="opIdanalyticshub.projects.locations.dataExchanges.listings.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bigqueryDataset": {
      "dataset": "string"
    },
    "categories": [
      "CATEGORY_UNSPECIFIED"
    ],
    "dataProvider": {
      "name": "string",
      "primaryContact": "string"
    },
    "description": "string",
    "displayName": "string",
    "documentation": "string",
    "icon": "string",
    "primaryContact": "string",
    "publisher": {
      "name": "string",
      "primaryContact": "string"
    },
    "requestAccess": "string"
  }'
```

`PATCH /v1/{name}`

Updates an existing listing.

> Body parameter

```json
{
  "bigqueryDataset": {
    "dataset": "string"
  },
  "categories": [
    "CATEGORY_UNSPECIFIED"
  ],
  "dataProvider": {
    "name": "string",
    "primaryContact": "string"
  },
  "description": "string",
  "displayName": "string",
  "documentation": "string",
  "icon": "string",
  "primaryContact": "string",
  "publisher": {
    "name": "string",
    "primaryContact": "string"
  },
  "requestAccess": "string"
}
```

<h3 id="analyticshubprojectslocationsdataexchangeslistingspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Output only. The resource name of the listing. e.g. `projects/myproject/locations/US/dataExchanges/123/listings/456`|
|updateMask|query|string|false|Required. Field mask specifies the fields to update in the listing resource. The fields specified in the `updateMask` are relative to the resource and are not a full request.|
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
|body|body|[Listing](#schemalisting)|false|none|
|» bigqueryDataset|body|[BigQueryDatasetSource](#schemabigquerydatasetsource)|false|Required. Shared dataset i.e. BigQuery dataset source.|
|» categories|body|[string]|false|Optional. Categories of the listing. Up to two categories are allowed.|
|» dataProvider|body|[DataProvider](#schemadataprovider)|false|Optional. Details of the data provider who owns the source data.|
|» description|body|string|false|Optional. Short description of the listing. The description must not contain Unicode non-characters and C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF). Default value is an empty string. Max length: 2000 bytes.|
|» displayName|body|string|false|Required. Human-readable display name of the listing. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and can't start or end with spaces. Default value is an empty string. Max length: 63 bytes.|
|» documentation|body|string|false|Optional. Documentation describing the listing.|
|» icon|body|string(byte)|false|Optional. Base64 encoded image representing the listing. Max Size: 3.0MiB Expected image dimensions are 512x512 pixels, however the API only performs validation on size of the encoded data. Note: For byte fields, the contents of the field are base64-encoded (which increases the size of the data by 33-36%) when using JSON on the wire.|
|» primaryContact|body|string|false|Optional. Email or URL of the primary point of contact of the listing. Max Length: 1000 bytes.|
|» publisher|body|[Publisher](#schemapublisher)|false|Optional. Details of the publisher who owns the listing and who can share the source data.|
|» requestAccess|body|string|false|Optional. Email or URL of the request access of the listing. Subscribers can use this reference to request access. Max Length: 1000 bytes.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» categories|CATEGORY_UNSPECIFIED|
|» categories|CATEGORY_OTHERS|
|» categories|CATEGORY_ADVERTISING_AND_MARKETING|
|» categories|CATEGORY_COMMERCE|
|» categories|CATEGORY_CLIMATE_AND_ENVIRONMENT|
|» categories|CATEGORY_DEMOGRAPHICS|
|» categories|CATEGORY_ECONOMICS|
|» categories|CATEGORY_EDUCATION|
|» categories|CATEGORY_ENERGY|
|» categories|CATEGORY_FINANCIAL|
|» categories|CATEGORY_GAMING|
|» categories|CATEGORY_GEOSPATIAL|
|» categories|CATEGORY_HEALTHCARE_AND_LIFE_SCIENCE|
|» categories|CATEGORY_MEDIA|
|» categories|CATEGORY_PUBLIC_SECTOR|
|» categories|CATEGORY_RETAIL|
|» categories|CATEGORY_SPORTS|
|» categories|CATEGORY_SCIENCE_AND_RESEARCH|
|» categories|CATEGORY_TRANSPORTATION_AND_LOGISTICS|
|» categories|CATEGORY_TRAVEL_AND_TOURISM|

> Example responses

> 200 Response

```json
{
  "bigqueryDataset": {
    "dataset": "string"
  },
  "categories": [
    "CATEGORY_UNSPECIFIED"
  ],
  "dataProvider": {
    "name": "string",
    "primaryContact": "string"
  },
  "description": "string",
  "displayName": "string",
  "documentation": "string",
  "icon": "string",
  "name": "string",
  "primaryContact": "string",
  "publisher": {
    "name": "string",
    "primaryContact": "string"
  },
  "requestAccess": "string",
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="analyticshubprojectslocationsdataexchangeslistingspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Listing](#schemalisting)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## analyticshub.projects.locations.dataExchanges.listings.subscribe

<a id="opIdanalyticshub.projects.locations.dataExchanges.listings.subscribe"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:subscribe \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "destinationDataset": {
      "datasetReference": {
        "datasetId": "string",
        "projectId": "string"
      },
      "description": "string",
      "friendlyName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "location": "string"
    }
  }'
```

`POST /v1/{name}:subscribe`

Subscribes to a listing. Currently, with Analytics Hub, you can create listings that reference only BigQuery datasets. Upon subscription to a listing for a BigQuery dataset, Analytics Hub creates a linked dataset in the subscriber's project.

> Body parameter

```json
{
  "destinationDataset": {
    "datasetReference": {
      "datasetId": "string",
      "projectId": "string"
    },
    "description": "string",
    "friendlyName": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "location": "string"
  }
}
```

<h3 id="analyticshubprojectslocationsdataexchangeslistingssubscribe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Resource name of the listing that you want to subscribe to. e.g. `projects/myproject/locations/US/dataExchanges/123/listings/456`.|
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
|body|body|[SubscribeListingRequest](#schemasubscribelistingrequest)|false|none|
|» destinationDataset|body|[DestinationDataset](#schemadestinationdataset)|false|BigQuery destination dataset to create for the subscriber.|

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

<h3 id="analyticshubprojectslocationsdataexchangeslistingssubscribe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SubscribeListingResponse](#schemasubscribelistingresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## analyticshub.projects.locations.dataExchanges.list

<a id="opIdanalyticshub.projects.locations.dataExchanges.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/dataExchanges \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/dataExchanges`

Lists all data exchanges in a given project and location.

<h3 id="analyticshubprojectslocationsdataexchangeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource path of the data exchanges. e.g. `projects/myproject/locations/US`.|
|pageSize|query|integer|false|The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.|
|pageToken|query|string|false|Page token, returned by a previous call, to request the next page of results.|
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
  "dataExchanges": [
    {
      "description": "string",
      "displayName": "string",
      "documentation": "string",
      "icon": "string",
      "listingCount": 0,
      "name": "string",
      "primaryContact": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="analyticshubprojectslocationsdataexchangeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListDataExchangesResponse](#schemalistdataexchangesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## analyticshub.projects.locations.dataExchanges.create

<a id="opIdanalyticshub.projects.locations.dataExchanges.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/dataExchanges \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "displayName": "string",
    "documentation": "string",
    "icon": "string",
    "primaryContact": "string"
  }'
```

`POST /v1/{parent}/dataExchanges`

Creates a new data exchange.

> Body parameter

```json
{
  "description": "string",
  "displayName": "string",
  "documentation": "string",
  "icon": "string",
  "primaryContact": "string"
}
```

<h3 id="analyticshubprojectslocationsdataexchangescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource path of the data exchange. e.g. `projects/myproject/locations/US`.|
|dataExchangeId|query|string|false|Required. The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces. Max length: 100 bytes.|
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
|body|body|[DataExchange](#schemadataexchange)|false|none|
|» description|body|string|false|Optional. Description of the data exchange. The description must not contain Unicode non-characters as well as C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF). Default value is an empty string. Max length: 2000 bytes.|
|» displayName|body|string|false|Required. Human-readable display name of the data exchange. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and must not start or end with spaces. Default value is an empty string. Max length: 63 bytes.|
|» documentation|body|string|false|Optional. Documentation describing the data exchange.|
|» icon|body|string(byte)|false|Optional. Base64 encoded image representing the data exchange. Max Size: 3.0MiB Expected image dimensions are 512x512 pixels, however the API only performs validation on size of the encoded data. Note: For byte fields, the content of the fields are base64-encoded (which increases the size of the data by 33-36%) when using JSON on the wire.|
|» primaryContact|body|string|false|Optional. Email or URL of the primary point of contact of the data exchange. Max Length: 1000 bytes.|

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
  "description": "string",
  "displayName": "string",
  "documentation": "string",
  "icon": "string",
  "listingCount": 0,
  "name": "string",
  "primaryContact": "string"
}
```

<h3 id="analyticshubprojectslocationsdataexchangescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DataExchange](#schemadataexchange)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## analyticshub.projects.locations.dataExchanges.listings.list

<a id="opIdanalyticshub.projects.locations.dataExchanges.listings.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/listings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/listings`

Lists all listings in a given project and location.

<h3 id="analyticshubprojectslocationsdataexchangeslistingslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource path of the listing. e.g. `projects/myproject/locations/US/dataExchanges/123`.|
|pageSize|query|integer|false|The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.|
|pageToken|query|string|false|Page token, returned by a previous call, to request the next page of results.|
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
  "listings": [
    {
      "bigqueryDataset": {
        "dataset": "string"
      },
      "categories": [
        "CATEGORY_UNSPECIFIED"
      ],
      "dataProvider": {
        "name": "string",
        "primaryContact": "string"
      },
      "description": "string",
      "displayName": "string",
      "documentation": "string",
      "icon": "string",
      "name": "string",
      "primaryContact": "string",
      "publisher": {
        "name": "string",
        "primaryContact": "string"
      },
      "requestAccess": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="analyticshubprojectslocationsdataexchangeslistingslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListListingsResponse](#schemalistlistingsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## analyticshub.projects.locations.dataExchanges.listings.create

<a id="opIdanalyticshub.projects.locations.dataExchanges.listings.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/listings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bigqueryDataset": {
      "dataset": "string"
    },
    "categories": [
      "CATEGORY_UNSPECIFIED"
    ],
    "dataProvider": {
      "name": "string",
      "primaryContact": "string"
    },
    "description": "string",
    "displayName": "string",
    "documentation": "string",
    "icon": "string",
    "primaryContact": "string",
    "publisher": {
      "name": "string",
      "primaryContact": "string"
    },
    "requestAccess": "string"
  }'
```

`POST /v1/{parent}/listings`

Creates a new listing.

> Body parameter

```json
{
  "bigqueryDataset": {
    "dataset": "string"
  },
  "categories": [
    "CATEGORY_UNSPECIFIED"
  ],
  "dataProvider": {
    "name": "string",
    "primaryContact": "string"
  },
  "description": "string",
  "displayName": "string",
  "documentation": "string",
  "icon": "string",
  "primaryContact": "string",
  "publisher": {
    "name": "string",
    "primaryContact": "string"
  },
  "requestAccess": "string"
}
```

<h3 id="analyticshubprojectslocationsdataexchangeslistingscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource path of the listing. e.g. `projects/myproject/locations/US/dataExchanges/123`.|
|listingId|query|string|false|Required. The ID of the listing to create. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces. Max length: 100 bytes.|
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
|body|body|[Listing](#schemalisting)|false|none|
|» bigqueryDataset|body|[BigQueryDatasetSource](#schemabigquerydatasetsource)|false|Required. Shared dataset i.e. BigQuery dataset source.|
|» categories|body|[string]|false|Optional. Categories of the listing. Up to two categories are allowed.|
|» dataProvider|body|[DataProvider](#schemadataprovider)|false|Optional. Details of the data provider who owns the source data.|
|» description|body|string|false|Optional. Short description of the listing. The description must not contain Unicode non-characters and C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF). Default value is an empty string. Max length: 2000 bytes.|
|» displayName|body|string|false|Required. Human-readable display name of the listing. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and can't start or end with spaces. Default value is an empty string. Max length: 63 bytes.|
|» documentation|body|string|false|Optional. Documentation describing the listing.|
|» icon|body|string(byte)|false|Optional. Base64 encoded image representing the listing. Max Size: 3.0MiB Expected image dimensions are 512x512 pixels, however the API only performs validation on size of the encoded data. Note: For byte fields, the contents of the field are base64-encoded (which increases the size of the data by 33-36%) when using JSON on the wire.|
|» primaryContact|body|string|false|Optional. Email or URL of the primary point of contact of the listing. Max Length: 1000 bytes.|
|» publisher|body|[Publisher](#schemapublisher)|false|Optional. Details of the publisher who owns the listing and who can share the source data.|
|» requestAccess|body|string|false|Optional. Email or URL of the request access of the listing. Subscribers can use this reference to request access. Max Length: 1000 bytes.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» categories|CATEGORY_UNSPECIFIED|
|» categories|CATEGORY_OTHERS|
|» categories|CATEGORY_ADVERTISING_AND_MARKETING|
|» categories|CATEGORY_COMMERCE|
|» categories|CATEGORY_CLIMATE_AND_ENVIRONMENT|
|» categories|CATEGORY_DEMOGRAPHICS|
|» categories|CATEGORY_ECONOMICS|
|» categories|CATEGORY_EDUCATION|
|» categories|CATEGORY_ENERGY|
|» categories|CATEGORY_FINANCIAL|
|» categories|CATEGORY_GAMING|
|» categories|CATEGORY_GEOSPATIAL|
|» categories|CATEGORY_HEALTHCARE_AND_LIFE_SCIENCE|
|» categories|CATEGORY_MEDIA|
|» categories|CATEGORY_PUBLIC_SECTOR|
|» categories|CATEGORY_RETAIL|
|» categories|CATEGORY_SPORTS|
|» categories|CATEGORY_SCIENCE_AND_RESEARCH|
|» categories|CATEGORY_TRANSPORTATION_AND_LOGISTICS|
|» categories|CATEGORY_TRAVEL_AND_TOURISM|

> Example responses

> 200 Response

```json
{
  "bigqueryDataset": {
    "dataset": "string"
  },
  "categories": [
    "CATEGORY_UNSPECIFIED"
  ],
  "dataProvider": {
    "name": "string",
    "primaryContact": "string"
  },
  "description": "string",
  "displayName": "string",
  "documentation": "string",
  "icon": "string",
  "name": "string",
  "primaryContact": "string",
  "publisher": {
    "name": "string",
    "primaryContact": "string"
  },
  "requestAccess": "string",
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="analyticshubprojectslocationsdataexchangeslistingscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Listing](#schemalisting)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## analyticshub.projects.locations.dataExchanges.listings.getIamPolicy

<a id="opIdanalyticshub.projects.locations.dataExchanges.listings.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:getIamPolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "options": {
      "requestedPolicyVersion": 0
    }
  }'
```

`POST /v1/{resource}:getIamPolicy`

Gets the IAM policy.

> Body parameter

```json
{
  "options": {
    "requestedPolicyVersion": 0
  }
}
```

<h3 id="analyticshubprojectslocationsdataexchangeslistingsgetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
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
|body|body|[GetIamPolicyRequest](#schemagetiampolicyrequest)|false|none|
|» options|body|[GetPolicyOptions](#schemagetpolicyoptions)|false|OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`.|

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
  "auditConfigs": [
    {
      "auditLogConfigs": [
        {
          "exemptedMembers": [
            "string"
          ],
          "logType": "LOG_TYPE_UNSPECIFIED"
        }
      ],
      "service": "string"
    }
  ],
  "bindings": [
    {
      "condition": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "members": [
        "string"
      ],
      "role": "string"
    }
  ],
  "etag": "string",
  "version": 0
}
```

<h3 id="analyticshubprojectslocationsdataexchangeslistingsgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## analyticshub.projects.locations.dataExchanges.listings.setIamPolicy

<a id="opIdanalyticshub.projects.locations.dataExchanges.listings.setIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:setIamPolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "policy": {
      "auditConfigs": [
        {
          "auditLogConfigs": [
            {
              "exemptedMembers": [
                "string"
              ],
              "logType": "LOG_TYPE_UNSPECIFIED"
            }
          ],
          "service": "string"
        }
      ],
      "bindings": [
        {
          "condition": {
            "description": "string",
            "expression": "string",
            "location": "string",
            "title": "string"
          },
          "members": [
            "string"
          ],
          "role": "string"
        }
      ],
      "etag": "string",
      "version": 0
    },
    "updateMask": "string"
  }'
```

`POST /v1/{resource}:setIamPolicy`

Sets the IAM policy.

> Body parameter

```json
{
  "policy": {
    "auditConfigs": [
      {
        "auditLogConfigs": [
          {
            "exemptedMembers": [
              "string"
            ],
            "logType": "LOG_TYPE_UNSPECIFIED"
          }
        ],
        "service": "string"
      }
    ],
    "bindings": [
      {
        "condition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "members": [
          "string"
        ],
        "role": "string"
      }
    ],
    "etag": "string",
    "version": 0
  },
  "updateMask": "string"
}
```

<h3 id="analyticshubprojectslocationsdataexchangeslistingssetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
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
|body|body|[SetIamPolicyRequest](#schemasetiampolicyrequest)|false|none|
|» policy|body|[Policy](#schemapolicy)|false|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|
|» updateMask|body|string(google-fieldmask)|false|OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`|

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
  "auditConfigs": [
    {
      "auditLogConfigs": [
        {
          "exemptedMembers": [
            "string"
          ],
          "logType": "LOG_TYPE_UNSPECIFIED"
        }
      ],
      "service": "string"
    }
  ],
  "bindings": [
    {
      "condition": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "members": [
        "string"
      ],
      "role": "string"
    }
  ],
  "etag": "string",
  "version": 0
}
```

<h3 id="analyticshubprojectslocationsdataexchangeslistingssetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## analyticshub.projects.locations.dataExchanges.listings.testIamPermissions

<a id="opIdanalyticshub.projects.locations.dataExchanges.listings.testIamPermissions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:testIamPermissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "permissions": [
      "string"
    ]
  }'
```

`POST /v1/{resource}:testIamPermissions`

Returns the permissions that a caller has.

> Body parameter

```json
{
  "permissions": [
    "string"
  ]
}
```

<h3 id="analyticshubprojectslocationsdataexchangeslistingstestiampermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
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
|body|body|[TestIamPermissionsRequest](#schematestiampermissionsrequest)|false|none|
|» permissions|body|[string]|false|The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).|

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
  "permissions": [
    "string"
  ]
}
```

<h3 id="analyticshubprojectslocationsdataexchangeslistingstestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TestIamPermissionsResponse](#schematestiampermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/bigquery ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/bigquery ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AuditConfig">AuditConfig</h2>
<!-- backwards compatibility -->
<a id="schemaauditconfig"></a>
<a id="schema_AuditConfig"></a>
<a id="tocSauditconfig"></a>
<a id="tocsauditconfig"></a>

```json
{
  "auditLogConfigs": [
    {
      "exemptedMembers": [
        "string"
      ],
      "logType": "LOG_TYPE_UNSPECIFIED"
    }
  ],
  "service": "string"
}
```

Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auditLogConfigs|[[AuditLogConfig](#schemaauditlogconfig)]|false|none|The configuration for logging of each type of permission.|
|service|string|false|none|Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.|

<h2 id="tocS_AuditLogConfig">AuditLogConfig</h2>
<!-- backwards compatibility -->
<a id="schemaauditlogconfig"></a>
<a id="schema_AuditLogConfig"></a>
<a id="tocSauditlogconfig"></a>
<a id="tocsauditlogconfig"></a>

```json
{
  "exemptedMembers": [
    "string"
  ],
  "logType": "LOG_TYPE_UNSPECIFIED"
}
```

Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exemptedMembers|[string]|false|none|Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.|
|logType|string|false|none|The log type that this config enables.|

#### Enumerated Values

|Property|Value|
|---|---|
|logType|LOG_TYPE_UNSPECIFIED|
|logType|ADMIN_READ|
|logType|DATA_WRITE|
|logType|DATA_READ|

<h2 id="tocS_BigQueryDatasetSource">BigQueryDatasetSource</h2>
<!-- backwards compatibility -->
<a id="schemabigquerydatasetsource"></a>
<a id="schema_BigQueryDatasetSource"></a>
<a id="tocSbigquerydatasetsource"></a>
<a id="tocsbigquerydatasetsource"></a>

```json
{
  "dataset": "string"
}
```

A reference to a shared dataset. It is an existing BigQuery dataset with a collection of objects such as tables and views that you want to share with subscribers. When subscriber's subscribe to a listing, Analytics Hub creates a linked dataset in the subscriber's project. A Linked dataset is an opaque, read-only BigQuery dataset that serves as a _symbolic link_ to a shared dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataset|string|false|none|Resource name of the dataset source for this listing. e.g. `projects/myproject/datasets/123`|

<h2 id="tocS_Binding">Binding</h2>
<!-- backwards compatibility -->
<a id="schemabinding"></a>
<a id="schema_Binding"></a>
<a id="tocSbinding"></a>
<a id="tocsbinding"></a>

```json
{
  "condition": {
    "description": "string",
    "expression": "string",
    "location": "string",
    "title": "string"
  },
  "members": [
    "string"
  ],
  "role": "string"
}
```

Associates `members`, or principals, with a `role`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|condition|[Expr](#schemaexpr)|false|none|The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|
|members|[string]|false|none|Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding.|
|role|string|false|none|Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.|

<h2 id="tocS_DataExchange">DataExchange</h2>
<!-- backwards compatibility -->
<a id="schemadataexchange"></a>
<a id="schema_DataExchange"></a>
<a id="tocSdataexchange"></a>
<a id="tocsdataexchange"></a>

```json
{
  "description": "string",
  "displayName": "string",
  "documentation": "string",
  "icon": "string",
  "listingCount": 0,
  "name": "string",
  "primaryContact": "string"
}
```

A data exchange is a container that lets you share data. Along with the descriptive information about the data exchange, it contains listings that reference shared datasets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Optional. Description of the data exchange. The description must not contain Unicode non-characters as well as C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF). Default value is an empty string. Max length: 2000 bytes.|
|displayName|string|false|none|Required. Human-readable display name of the data exchange. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and must not start or end with spaces. Default value is an empty string. Max length: 63 bytes.|
|documentation|string|false|none|Optional. Documentation describing the data exchange.|
|icon|string(byte)|false|none|Optional. Base64 encoded image representing the data exchange. Max Size: 3.0MiB Expected image dimensions are 512x512 pixels, however the API only performs validation on size of the encoded data. Note: For byte fields, the content of the fields are base64-encoded (which increases the size of the data by 33-36%) when using JSON on the wire.|
|listingCount|integer(int32)|false|read-only|Output only. Number of listings contained in the data exchange.|
|name|string|false|read-only|Output only. The resource name of the data exchange. e.g. `projects/myproject/locations/US/dataExchanges/123`.|
|primaryContact|string|false|none|Optional. Email or URL of the primary point of contact of the data exchange. Max Length: 1000 bytes.|

<h2 id="tocS_DataProvider">DataProvider</h2>
<!-- backwards compatibility -->
<a id="schemadataprovider"></a>
<a id="schema_DataProvider"></a>
<a id="tocSdataprovider"></a>
<a id="tocsdataprovider"></a>

```json
{
  "name": "string",
  "primaryContact": "string"
}
```

Contains details of the data provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Optional. Name of the data provider.|
|primaryContact|string|false|none|Optional. Email or URL of the data provider. Max Length: 1000 bytes.|

<h2 id="tocS_DestinationDataset">DestinationDataset</h2>
<!-- backwards compatibility -->
<a id="schemadestinationdataset"></a>
<a id="schema_DestinationDataset"></a>
<a id="tocSdestinationdataset"></a>
<a id="tocsdestinationdataset"></a>

```json
{
  "datasetReference": {
    "datasetId": "string",
    "projectId": "string"
  },
  "description": "string",
  "friendlyName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "location": "string"
}
```

Defines the destination bigquery dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetReference|[DestinationDatasetReference](#schemadestinationdatasetreference)|false|none|Required. A reference that identifies the destination dataset.|
|description|string|false|none|Optional. A user-friendly description of the dataset.|
|friendlyName|string|false|none|Optional. A descriptive name for the dataset.|
|labels|object|false|none|Optional. The labels associated with this dataset. You can use these to organize and group your datasets. You can set this property when inserting or updating a dataset. See https://cloud.google.com/resource-manager/docs/creating-managing-labels for more information.|
|location|string|false|none|Required. The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations.|

<h2 id="tocS_DestinationDatasetReference">DestinationDatasetReference</h2>
<!-- backwards compatibility -->
<a id="schemadestinationdatasetreference"></a>
<a id="schema_DestinationDatasetReference"></a>
<a id="tocSdestinationdatasetreference"></a>
<a id="tocsdestinationdatasetreference"></a>

```json
{
  "datasetId": "string",
  "projectId": "string"
}
```

Contains the reference that identifies a destination bigquery dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetId|string|false|none|Required. A unique ID for this dataset, without the project name. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.|
|projectId|string|false|none|Required. The ID of the project containing this dataset.|

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

<h2 id="tocS_Expr">Expr</h2>
<!-- backwards compatibility -->
<a id="schemaexpr"></a>
<a id="schema_Expr"></a>
<a id="tocSexpr"></a>
<a id="tocsexpr"></a>

```json
{
  "description": "string",
  "expression": "string",
  "location": "string",
  "title": "string"
}
```

Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.|
|expression|string|false|none|Textual representation of an expression in Common Expression Language syntax.|
|location|string|false|none|Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.|
|title|string|false|none|Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.|

<h2 id="tocS_GetIamPolicyRequest">GetIamPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetiampolicyrequest"></a>
<a id="schema_GetIamPolicyRequest"></a>
<a id="tocSgetiampolicyrequest"></a>
<a id="tocsgetiampolicyrequest"></a>

```json
{
  "options": {
    "requestedPolicyVersion": 0
  }
}
```

Request message for `GetIamPolicy` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|options|[GetPolicyOptions](#schemagetpolicyoptions)|false|none|OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`.|

<h2 id="tocS_GetPolicyOptions">GetPolicyOptions</h2>
<!-- backwards compatibility -->
<a id="schemagetpolicyoptions"></a>
<a id="schema_GetPolicyOptions"></a>
<a id="tocSgetpolicyoptions"></a>
<a id="tocsgetpolicyoptions"></a>

```json
{
  "requestedPolicyVersion": 0
}
```

Encapsulates settings provided to GetIamPolicy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestedPolicyVersion|integer(int32)|false|none|Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|

<h2 id="tocS_ListDataExchangesResponse">ListDataExchangesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdataexchangesresponse"></a>
<a id="schema_ListDataExchangesResponse"></a>
<a id="tocSlistdataexchangesresponse"></a>
<a id="tocslistdataexchangesresponse"></a>

```json
{
  "dataExchanges": [
    {
      "description": "string",
      "displayName": "string",
      "documentation": "string",
      "icon": "string",
      "listingCount": 0,
      "name": "string",
      "primaryContact": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Message for response to the list of data exchanges.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataExchanges|[[DataExchange](#schemadataexchange)]|false|none|The list of data exchanges.|
|nextPageToken|string|false|none|A token to request the next page of results.|

<h2 id="tocS_ListListingsResponse">ListListingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlistingsresponse"></a>
<a id="schema_ListListingsResponse"></a>
<a id="tocSlistlistingsresponse"></a>
<a id="tocslistlistingsresponse"></a>

```json
{
  "listings": [
    {
      "bigqueryDataset": {
        "dataset": "string"
      },
      "categories": [
        "CATEGORY_UNSPECIFIED"
      ],
      "dataProvider": {
        "name": "string",
        "primaryContact": "string"
      },
      "description": "string",
      "displayName": "string",
      "documentation": "string",
      "icon": "string",
      "name": "string",
      "primaryContact": "string",
      "publisher": {
        "name": "string",
        "primaryContact": "string"
      },
      "requestAccess": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

Message for response to the list of Listings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|listings|[[Listing](#schemalisting)]|false|none|The list of Listing.|
|nextPageToken|string|false|none|A token to request the next page of results.|

<h2 id="tocS_ListOrgDataExchangesResponse">ListOrgDataExchangesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistorgdataexchangesresponse"></a>
<a id="schema_ListOrgDataExchangesResponse"></a>
<a id="tocSlistorgdataexchangesresponse"></a>
<a id="tocslistorgdataexchangesresponse"></a>

```json
{
  "dataExchanges": [
    {
      "description": "string",
      "displayName": "string",
      "documentation": "string",
      "icon": "string",
      "listingCount": 0,
      "name": "string",
      "primaryContact": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Message for response to listing data exchanges in an organization and location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataExchanges|[[DataExchange](#schemadataexchange)]|false|none|The list of data exchanges.|
|nextPageToken|string|false|none|A token to request the next page of results.|

<h2 id="tocS_Listing">Listing</h2>
<!-- backwards compatibility -->
<a id="schemalisting"></a>
<a id="schema_Listing"></a>
<a id="tocSlisting"></a>
<a id="tocslisting"></a>

```json
{
  "bigqueryDataset": {
    "dataset": "string"
  },
  "categories": [
    "CATEGORY_UNSPECIFIED"
  ],
  "dataProvider": {
    "name": "string",
    "primaryContact": "string"
  },
  "description": "string",
  "displayName": "string",
  "documentation": "string",
  "icon": "string",
  "name": "string",
  "primaryContact": "string",
  "publisher": {
    "name": "string",
    "primaryContact": "string"
  },
  "requestAccess": "string",
  "state": "STATE_UNSPECIFIED"
}
```

A listing is what gets published into a data exchange that a subscriber can subscribe to. It contains a reference to the data source along with descriptive information that will help subscribers find and subscribe the data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigqueryDataset|[BigQueryDatasetSource](#schemabigquerydatasetsource)|false|none|Required. Shared dataset i.e. BigQuery dataset source.|
|categories|[string]|false|none|Optional. Categories of the listing. Up to two categories are allowed.|
|dataProvider|[DataProvider](#schemadataprovider)|false|none|Optional. Details of the data provider who owns the source data.|
|description|string|false|none|Optional. Short description of the listing. The description must not contain Unicode non-characters and C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF). Default value is an empty string. Max length: 2000 bytes.|
|displayName|string|false|none|Required. Human-readable display name of the listing. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and can't start or end with spaces. Default value is an empty string. Max length: 63 bytes.|
|documentation|string|false|none|Optional. Documentation describing the listing.|
|icon|string(byte)|false|none|Optional. Base64 encoded image representing the listing. Max Size: 3.0MiB Expected image dimensions are 512x512 pixels, however the API only performs validation on size of the encoded data. Note: For byte fields, the contents of the field are base64-encoded (which increases the size of the data by 33-36%) when using JSON on the wire.|
|name|string|false|read-only|Output only. The resource name of the listing. e.g. `projects/myproject/locations/US/dataExchanges/123/listings/456`|
|primaryContact|string|false|none|Optional. Email or URL of the primary point of contact of the listing. Max Length: 1000 bytes.|
|publisher|[Publisher](#schemapublisher)|false|none|Optional. Details of the publisher who owns the listing and who can share the source data.|
|requestAccess|string|false|none|Optional. Email or URL of the request access of the listing. Subscribers can use this reference to request access. Max Length: 1000 bytes.|
|state|string|false|read-only|Output only. Current state of the listing.|

#### Enumerated Values

|Property|Value|
|---|---|
|categories|CATEGORY_UNSPECIFIED|
|categories|CATEGORY_OTHERS|
|categories|CATEGORY_ADVERTISING_AND_MARKETING|
|categories|CATEGORY_COMMERCE|
|categories|CATEGORY_CLIMATE_AND_ENVIRONMENT|
|categories|CATEGORY_DEMOGRAPHICS|
|categories|CATEGORY_ECONOMICS|
|categories|CATEGORY_EDUCATION|
|categories|CATEGORY_ENERGY|
|categories|CATEGORY_FINANCIAL|
|categories|CATEGORY_GAMING|
|categories|CATEGORY_GEOSPATIAL|
|categories|CATEGORY_HEALTHCARE_AND_LIFE_SCIENCE|
|categories|CATEGORY_MEDIA|
|categories|CATEGORY_PUBLIC_SECTOR|
|categories|CATEGORY_RETAIL|
|categories|CATEGORY_SPORTS|
|categories|CATEGORY_SCIENCE_AND_RESEARCH|
|categories|CATEGORY_TRANSPORTATION_AND_LOGISTICS|
|categories|CATEGORY_TRAVEL_AND_TOURISM|
|state|STATE_UNSPECIFIED|
|state|ACTIVE|

<h2 id="tocS_OperationMetadata">OperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaoperationmetadata"></a>
<a id="schema_OperationMetadata"></a>
<a id="tocSoperationmetadata"></a>
<a id="tocsoperationmetadata"></a>

```json
{
  "apiVersion": "string",
  "cancelRequested": true,
  "createTime": "string",
  "endTime": "string",
  "statusDetail": "string",
  "target": "string",
  "verb": "string"
}
```

Represents the metadata of the long-running operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|read-only|Output only. API version used to start the operation.|
|cancelRequested|boolean|false|read-only|Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.|
|createTime|string(google-datetime)|false|read-only|Output only. The time the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. The time the operation finished running.|
|statusDetail|string|false|read-only|Output only. Human-readable status of the operation, if any.|
|target|string|false|read-only|Output only. Server-defined resource path for the target of the operation.|
|verb|string|false|read-only|Output only. Name of the verb executed by the operation.|

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
{
  "auditConfigs": [
    {
      "auditLogConfigs": [
        {
          "exemptedMembers": [
            "string"
          ],
          "logType": "LOG_TYPE_UNSPECIFIED"
        }
      ],
      "service": "string"
    }
  ],
  "bindings": [
    {
      "condition": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "members": [
        "string"
      ],
      "role": "string"
    }
  ],
  "etag": "string",
  "version": 0
}
```

An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auditConfigs|[[AuditConfig](#schemaauditconfig)]|false|none|Specifies cloud audit logging configuration for this policy.|
|bindings|[[Binding](#schemabinding)]|false|none|Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.|
|etag|string(byte)|false|none|`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.|
|version|integer(int32)|false|none|Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|

<h2 id="tocS_Publisher">Publisher</h2>
<!-- backwards compatibility -->
<a id="schemapublisher"></a>
<a id="schema_Publisher"></a>
<a id="tocSpublisher"></a>
<a id="tocspublisher"></a>

```json
{
  "name": "string",
  "primaryContact": "string"
}
```

Contains details of the listing publisher.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Optional. Name of the listing publisher.|
|primaryContact|string|false|none|Optional. Email or URL of the listing publisher. Max Length: 1000 bytes.|

<h2 id="tocS_SetIamPolicyRequest">SetIamPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetiampolicyrequest"></a>
<a id="schema_SetIamPolicyRequest"></a>
<a id="tocSsetiampolicyrequest"></a>
<a id="tocssetiampolicyrequest"></a>

```json
{
  "policy": {
    "auditConfigs": [
      {
        "auditLogConfigs": [
          {
            "exemptedMembers": [
              "string"
            ],
            "logType": "LOG_TYPE_UNSPECIFIED"
          }
        ],
        "service": "string"
      }
    ],
    "bindings": [
      {
        "condition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "members": [
          "string"
        ],
        "role": "string"
      }
    ],
    "etag": "string",
    "version": 0
  },
  "updateMask": "string"
}
```

Request message for `SetIamPolicy` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|[Policy](#schemapolicy)|false|none|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|
|updateMask|string(google-fieldmask)|false|none|OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`|

<h2 id="tocS_SubscribeListingRequest">SubscribeListingRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubscribelistingrequest"></a>
<a id="schema_SubscribeListingRequest"></a>
<a id="tocSsubscribelistingrequest"></a>
<a id="tocssubscribelistingrequest"></a>

```json
{
  "destinationDataset": {
    "datasetReference": {
      "datasetId": "string",
      "projectId": "string"
    },
    "description": "string",
    "friendlyName": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "location": "string"
  }
}
```

Message for subscribing to a listing.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationDataset|[DestinationDataset](#schemadestinationdataset)|false|none|BigQuery destination dataset to create for the subscriber.|

<h2 id="tocS_SubscribeListingResponse">SubscribeListingResponse</h2>
<!-- backwards compatibility -->
<a id="schemasubscribelistingresponse"></a>
<a id="schema_SubscribeListingResponse"></a>
<a id="tocSsubscribelistingresponse"></a>
<a id="tocssubscribelistingresponse"></a>

```json
{}
```

Message for response when you subscribe to a listing.

<h2 id="tocS_TestIamPermissionsRequest">TestIamPermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schematestiampermissionsrequest"></a>
<a id="schema_TestIamPermissionsRequest"></a>
<a id="tocStestiampermissionsrequest"></a>
<a id="tocstestiampermissionsrequest"></a>

```json
{
  "permissions": [
    "string"
  ]
}
```

Request message for `TestIamPermissions` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[string]|false|none|The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).|

<h2 id="tocS_TestIamPermissionsResponse">TestIamPermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schematestiampermissionsresponse"></a>
<a id="schema_TestIamPermissionsResponse"></a>
<a id="tocStestiampermissionsresponse"></a>
<a id="tocstestiampermissionsresponse"></a>

```json
{
  "permissions": [
    "string"
  ]
}
```

Response message for `TestIamPermissions` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[string]|false|none|A subset of `TestPermissionsRequest.permissions` that the caller is allowed.|
