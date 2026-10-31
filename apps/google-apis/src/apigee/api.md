<h1 id="apigee-api">Apigee API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Use the Apigee API to programmatically develop and manage APIs with a set of RESTful operations. Develop and secure API proxies, deploy and undeploy API proxy revisions, monitor APIs, configure environments, manage users, and more. Note: This product is available as a free trial for a time period of 60 days.

Base URLs:

* <a href="https://apigee.googleapis.com/">https://apigee.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/apigee-api-management/">External documentation</a>

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

<h1 id="apigee-api-organizations">organizations</h1>

## apigee.organizations.create

<a id="opIdapigee.organizations.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/organizations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "addonsConfig": {
      "advancedApiOpsConfig": {
        "enabled": true
      },
      "apiSecurityConfig": {
        "enabled": true
      },
      "connectorsPlatformConfig": {
        "enabled": true
      },
      "integrationConfig": {
        "enabled": true
      },
      "monetizationConfig": {
        "enabled": true
      }
    },
    "analyticsRegion": "string",
    "apiConsumerDataEncryptionKeyName": "string",
    "apiConsumerDataLocation": "string",
    "attributes": [
      "string"
    ],
    "authorizedNetwork": "string",
    "billingType": "BILLING_TYPE_UNSPECIFIED",
    "controlPlaneEncryptionKeyName": "string",
    "customerName": "string",
    "description": "string",
    "displayName": "string",
    "portalDisabled": true,
    "properties": {
      "property": [
        {
          "name": "string",
          "value": "string"
        }
      ]
    },
    "runtimeDatabaseEncryptionKeyName": "string",
    "runtimeType": "RUNTIME_TYPE_UNSPECIFIED",
    "type": "TYPE_UNSPECIFIED"
  }'
```

`POST /v1/organizations`

Creates an Apigee organization. See [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).

> Body parameter

```json
{
  "addonsConfig": {
    "advancedApiOpsConfig": {
      "enabled": true
    },
    "apiSecurityConfig": {
      "enabled": true
    },
    "connectorsPlatformConfig": {
      "enabled": true
    },
    "integrationConfig": {
      "enabled": true
    },
    "monetizationConfig": {
      "enabled": true
    }
  },
  "analyticsRegion": "string",
  "apiConsumerDataEncryptionKeyName": "string",
  "apiConsumerDataLocation": "string",
  "attributes": [
    "string"
  ],
  "authorizedNetwork": "string",
  "billingType": "BILLING_TYPE_UNSPECIFIED",
  "controlPlaneEncryptionKeyName": "string",
  "customerName": "string",
  "description": "string",
  "displayName": "string",
  "portalDisabled": true,
  "properties": {
    "property": [
      {
        "name": "string",
        "value": "string"
      }
    ]
  },
  "runtimeDatabaseEncryptionKeyName": "string",
  "runtimeType": "RUNTIME_TYPE_UNSPECIFIED",
  "type": "TYPE_UNSPECIFIED"
}
```

<h3 id="apigeeorganizationscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|query|string|false|Required. Name of the Google Cloud project in which to associate the Apigee organization. Pass the information as a query parameter using the following structure in your request: `projects/`|
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
|body|body|[GoogleCloudApigeeV1Organization](#schemagooglecloudapigeev1organization)|false|none|
|» addonsConfig|body|[GoogleCloudApigeeV1AddonsConfig](#schemagooglecloudapigeev1addonsconfig)|false|Addon configurations of the Apigee organization.|
|» analyticsRegion|body|string|false|Required. DEPRECATED: This field will be deprecated once Apigee supports DRZ. Primary Google Cloud region for analytics data storage. For valid values, see [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).|
|» apiConsumerDataEncryptionKeyName|body|string|false|Cloud KMS key name used for encrypting API consumer data. Required for US/EU regions when [BillingType](#BillingType) is `SUBSCRIPTION`. When [BillingType](#BillingType) is `EVALUATION` or the region is not US/EU, a Google-Managed encryption key will be used. Format: `projects/*/locations/*/keyRings/*/cryptoKeys/*`|
|» apiConsumerDataLocation|body|string|false|This field is needed only for customers with control plane in US or EU. Apigee stores some control plane data only in single region. This field determines which single region Apigee should use. For example: "us-west1" when control plane is in US or "europe-west2" when control plane is in EU.|
|» attributes|body|[string]|false|Not used by Apigee.|
|» authorizedNetwork|body|string|false|Compute Engine network used for Service Networking to be peered with Apigee runtime instances. See [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started). Valid only when [RuntimeType](#RuntimeType) is set to `CLOUD`. The value must be set before the creation of a runtime instance and can be updated only when there are no runtime instances. For example: `default`. Apigee also supports shared VPC (that is, the host network project is not the same as the one that is peering with Apigee). See [Shared VPC overview](https://cloud.google.com/vpc/docs/shared-vpc). To use a shared VPC network, use the following format: `projects/{host-project-id}/{region}/networks/{network-name}`. For example: `projects/my-sharedvpc-host/global/networks/mynetwork` **Note:** Not supported for Apigee hybrid.|
|» billingType|body|string|false|Billing type of the Apigee organization. See [Apigee pricing](https://cloud.google.com/apigee/pricing).|
|» controlPlaneEncryptionKeyName|body|string|false|Cloud KMS key name used for encrypting control plane data that is stored in a multi region. Required when [BillingType](#BillingType) is `SUBSCRIPTION`. When [BillingType](#BillingType) is `EVALUATION`, a Google-Managed encryption key will be used. Format: `projects/*/locations/*/keyRings/*/cryptoKeys/*`|
|» customerName|body|string|false|Not used by Apigee.|
|» description|body|string|false|Description of the Apigee organization.|
|» displayName|body|string|false|Display name for the Apigee organization. Unused, but reserved for future use.|
|» portalDisabled|body|boolean|false|Configuration for the Portals settings.|
|» properties|body|[GoogleCloudApigeeV1Properties](#schemagooglecloudapigeev1properties)|false|Properties defined in the Apigee organization profile.|
|» runtimeDatabaseEncryptionKeyName|body|string|false|Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances. Update is not allowed after the organization is created. Required when [RuntimeType](#RuntimeType) is `CLOUD`. If not specified when [RuntimeType](#RuntimeType) is `TRIAL`, a Google-Managed encryption key will be used. For example: "projects/foo/locations/us/keyRings/bar/cryptoKeys/baz". **Note:** Not supported for Apigee hybrid.|
|» runtimeType|body|string|false|Required. Runtime type of the Apigee organization based on the Apigee subscription purchased.|
|» type|body|string|false|Not used by Apigee.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» billingType|BILLING_TYPE_UNSPECIFIED|
|» billingType|SUBSCRIPTION|
|» billingType|EVALUATION|
|» billingType|PAYG|
|» runtimeType|RUNTIME_TYPE_UNSPECIFIED|
|» runtimeType|CLOUD|
|» runtimeType|HYBRID|
|» type|TYPE_UNSPECIFIED|
|» type|TYPE_TRIAL|
|» type|TYPE_PAID|
|» type|TYPE_INTERNAL|

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

<h3 id="apigeeorganizationscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.instances.reportStatus

<a id="opIdapigee.organizations.instances.reportStatus"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:reportStatus \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "instanceUid": "string",
    "reportTime": "string",
    "resources": [
      {
        "resource": "string",
        "revisions": [
          {
            "errors": [
              {
                "code": "OK",
                "message": "string",
                "resource": "string",
                "type": "string"
              }
            ],
            "jsonSpec": "string",
            "replicas": 0,
            "revisionId": "string"
          }
        ],
        "totalReplicas": 0,
        "uid": "string"
      }
    ]
  }'
```

`POST /v1/{instance}:reportStatus`

Reports the latest status for a runtime instance.

> Body parameter

```json
{
  "instanceUid": "string",
  "reportTime": "string",
  "resources": [
    {
      "resource": "string",
      "revisions": [
        {
          "errors": [
            {
              "code": "OK",
              "message": "string",
              "resource": "string",
              "type": "string"
            }
          ],
          "jsonSpec": "string",
          "replicas": 0,
          "revisionId": "string"
        }
      ],
      "totalReplicas": 0,
      "uid": "string"
    }
  ]
}
```

<h3 id="apigeeorganizationsinstancesreportstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|instance|path|string|true|The name of the instance reporting this status. For SaaS the request will be rejected if no instance exists under this name. Format is organizations/{org}/instances/{instance}|
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
|body|body|[GoogleCloudApigeeV1ReportInstanceStatusRequest](#schemagooglecloudapigeev1reportinstancestatusrequest)|false|none|
|» instanceUid|body|string|false|A unique ID for the instance which is guaranteed to be unique in case the user installs multiple hybrid runtimes with the same instance ID.|
|» reportTime|body|string(google-datetime)|false|The time the report was generated in the runtime. Used to prevent an old status from overwriting a newer one. An instance should space out it's status reports so that clock skew does not play a factor.|
|» resources|body|[[GoogleCloudApigeeV1ResourceStatus](#schemagooglecloudapigeev1resourcestatus)]|false|Status for config resources|

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

<h3 id="apigeeorganizationsinstancesreportstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ReportInstanceStatusResponse](#schemagooglecloudapigeev1reportinstancestatusresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.sites.apicategories.get

<a id="opIdapigee.organizations.sites.apicategories.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Gets a category on the portal.

<h3 id="apigeeorganizationssitesapicategoriesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the category. Use the following structure in your request: `organizations/{org}/sites/{site}/apicategories/{apicategory}`|
|format|query|string|false|Specify `bundle` to export the contents of the shared flow bundle. Otherwise, the bundle metadata is returned.|
|envgroupHostname|query|string|false|Required. Hostname for which the interactive query will be executed.|
|filter|query|string|false|Filter that enables you to drill-down on specific dimension values.|
|limit|query|string|false|Maximum number of result items to return. The default and maximum value that can be returned is 14400.|
|offset|query|string|false|Offset value. Use `offset` with `limit` to enable pagination of results. For example, to display results 11-20, set limit to `10` and offset to `10`.|
|realtime|query|boolean|false|No longer used by Apigee. Supported for backwards compatibility.|
|select|query|string|false|Required. Comma-separated list of metrics. For example: `sum(message_count),sum(error_count)`|
|sort|query|string|false|Flag that specifies whether the sort order should be ascending or descending. Valid values include `DESC` and `ASC`.|
|sortby|query|string|false|Comma-separated list of columns used to sort the final result.|
|timeRange|query|string|false|Required. Time interval for the interactive query. Time range is specified in GMT as `start~end`. For example: `04/15/2017 00:00~05/15/2017 23:59`.|
|timeUnit|query|string|false|Granularity of metrics returned. Valid values include: `second`, `minute`, `hour`, `day`, `week`, or `month`.|
|topk|query|string|false|Top number of results to return. For example, to return the top 5 results, set `topk=5`.|
|tsAscending|query|boolean|false|Flag that specifies whether to list timestamps in ascending (`true`) or descending (`false`) order. Apigee recommends that you set this value to `true` if you are using `sortby` with `sort=DESC`.|
|tzo|query|string|false|Timezone offset value.|
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
|format|INGRESS_CONFIG_VIEW_UNSPECIFIED|
|format|BASIC|
|format|FULL|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "string",
    "name": "string",
    "siteId": "string",
    "updateTime": "string"
  },
  "errorCode": "string",
  "message": "string",
  "requestId": "string",
  "status": "string"
}
```

<h3 id="apigeeorganizationssitesapicategoriesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ApiCategory](#schemagooglecloudapigeev1apicategory)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.reports.update

<a id="opIdapigee.organizations.reports.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "chartType": "string",
    "comments": [
      "string"
    ],
    "dimensions": [
      "string"
    ],
    "displayName": "string",
    "filter": "string",
    "fromTime": "string",
    "limit": "string",
    "metrics": [
      {
        "function": "string",
        "name": "string"
      }
    ],
    "name": "string",
    "offset": "string",
    "properties": [
      {
        "property": "string",
        "value": [
          {
            "name": "string",
            "value": "string"
          }
        ]
      }
    ],
    "sortByCols": [
      "string"
    ],
    "sortOrder": "string",
    "tags": [
      "string"
    ],
    "timeUnit": "string",
    "toTime": "string",
    "topk": "string"
  }'
```

`PUT /v1/{name}`

Update an existing custom report definition

> Body parameter

```json
{
  "chartType": "string",
  "comments": [
    "string"
  ],
  "dimensions": [
    "string"
  ],
  "displayName": "string",
  "filter": "string",
  "fromTime": "string",
  "limit": "string",
  "metrics": [
    {
      "function": "string",
      "name": "string"
    }
  ],
  "name": "string",
  "offset": "string",
  "properties": [
    {
      "property": "string",
      "value": [
        {
          "name": "string",
          "value": "string"
        }
      ]
    }
  ],
  "sortByCols": [
    "string"
  ],
  "sortOrder": "string",
  "tags": [
    "string"
  ],
  "timeUnit": "string",
  "toTime": "string",
  "topk": "string"
}
```

<h3 id="apigeeorganizationsreportsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Custom Report name of the form: `organizations/{organization_id}/reports/{report_name}`|
|ignoreExpiryValidation|query|boolean|false|Required. Flag that specifies whether to ignore expiry validation. If set to `true`, no expiry validation will be performed.|
|ignoreNewlineValidation|query|boolean|false|Flag that specifies whether to ignore newline validation. If set to `true`, no error is thrown when the file contains a certificate chain with no newline between each certificate. Defaults to `false`.|
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
|body|body|[GoogleCloudApigeeV1CustomReport](#schemagooglecloudapigeev1customreport)|false|none|
|» chartType|body|string|false|This field contains the chart type for the report|
|» comments|body|[string]|false|Legacy field: not used. This field contains a list of comments associated with custom report|
|» dimensions|body|[string]|false|This contains the list of dimensions for the report|
|» displayName|body|string|false|This is the display name for the report|
|» filter|body|string|false|This field contains the filter expression|
|» fromTime|body|string|false|Legacy field: not used. Contains the from time for the report|
|» limit|body|string|false|Legacy field: not used This field contains the limit for the result retrieved|
|» metrics|body|[[GoogleCloudApigeeV1CustomReportMetric](#schemagooglecloudapigeev1customreportmetric)]|false|Required. This contains the list of metrics|
|» name|body|string|false|Required. Unique identifier for the report T his is a legacy field used to encode custom report unique id|
|» offset|body|string|false|Legacy field: not used. This field contains the offset for the data|
|» properties|body|[[GoogleCloudApigeeV1ReportProperty](#schemagooglecloudapigeev1reportproperty)]|false|This field contains report properties such as ui metadata etc.|
|» sortByCols|body|[string]|false|Legacy field: not used much. Contains the list of sort by columns|
|» sortOrder|body|string|false|Legacy field: not used much. Contains the sort order for the sort columns|
|» tags|body|[string]|false|Legacy field: not used. This field contains a list of tags associated with custom report|
|» timeUnit|body|string|false|This field contains the time unit of aggregation for the report|
|» toTime|body|string|false|Legacy field: not used. Contains the end time for the report|
|» topk|body|string|false|Legacy field: not used. This field contains the top k parameter value for restricting the result|

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
  "chartType": "string",
  "comments": [
    "string"
  ],
  "createdAt": "string",
  "dimensions": [
    "string"
  ],
  "displayName": "string",
  "environment": "string",
  "filter": "string",
  "fromTime": "string",
  "lastModifiedAt": "string",
  "lastViewedAt": "string",
  "limit": "string",
  "metrics": [
    {
      "function": "string",
      "name": "string"
    }
  ],
  "name": "string",
  "offset": "string",
  "organization": "string",
  "properties": [
    {
      "property": "string",
      "value": [
        {
          "name": "string",
          "value": "string"
        }
      ]
    }
  ],
  "sortByCols": [
    "string"
  ],
  "sortOrder": "string",
  "tags": [
    "string"
  ],
  "timeUnit": "string",
  "toTime": "string",
  "topk": "string"
}
```

<h3 id="apigeeorganizationsreportsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1CustomReport](#schemagooglecloudapigeev1customreport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.sharedflows.revisions.updateSharedFlowRevision

<a id="opIdapigee.organizations.sharedflows.revisions.updateSharedFlowRevision"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "contentType": "string",
    "data": "string",
    "extensions": [
      {
        "property1": null,
        "property2": null
      }
    ]
  }'
```

`POST /v1/{name}`

Updates a shared flow revision. This operation is only allowed on revisions which have never been deployed. After deployment a revision becomes immutable, even if it becomes undeployed. The payload is a ZIP-formatted shared flow. Content type must be either multipart/form-data or application/octet-stream.

> Body parameter

```json
{
  "contentType": "string",
  "data": "string",
  "extensions": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

<h3 id="apigeeorganizationssharedflowsrevisionsupdatesharedflowrevision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the shared flow revision to update. Must be of the form: `organizations/{organization_id}/sharedflows/{shared_flow_id}/revisions/{revision_id}`|
|validate|query|boolean|false|Ignored. All uploads are validated regardless of the value of this field. It is kept for compatibility with existing APIs. Must be `true` or `false` if provided.|
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
|body|body|[GoogleApiHttpBody](#schemagoogleapihttpbody)|false|none|
|» contentType|body|string|false|The HTTP Content-Type header value specifying the content type of the body.|
|» data|body|string(byte)|false|The HTTP request/response body as raw binary.|
|» extensions|body|[object]|false|Application specific response metadata. Must be set in the first response for streaming APIs.|
|» » **additionalProperties**|body|object|false|Properties of the object. Contains field @type with type URL.|

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
  "configurationVersion": {
    "majorVersion": 0,
    "minorVersion": 0
  },
  "contextInfo": "string",
  "createdAt": "string",
  "description": "string",
  "displayName": "string",
  "entityMetaDataAsProperties": {
    "property1": "string",
    "property2": "string"
  },
  "lastModifiedAt": "string",
  "name": "string",
  "policies": [
    "string"
  ],
  "resourceFiles": {
    "resourceFile": [
      {
        "name": "string",
        "type": "string"
      }
    ]
  },
  "resources": [
    "string"
  ],
  "revision": "string",
  "sharedFlows": [
    "string"
  ],
  "type": "string"
}
```

<h3 id="apigeeorganizationssharedflowsrevisionsupdatesharedflowrevision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1SharedFlowRevision](#schemagooglecloudapigeev1sharedflowrevision)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.sites.apicategories.delete

<a id="opIdapigee.organizations.sites.apicategories.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Deletes a category from the portal.

<h3 id="apigeeorganizationssitesapicategoriesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the category. Use the following structure in your request: `organizations/{org}/sites/{site}/apicategories/{apicategory}`|
|retention|query|string|false|Optional. This setting is applicable only for organizations that are soft-deleted (i.e., BillingType is not EVALUATION). It controls how long Organization data will be retained after the initial delete operation completes. During this period, the Organization may be restored to its last known state. After this period, the Organization will no longer be able to be restored.|
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
|retention|DELETION_RETENTION_UNSPECIFIED|
|retention|MINIMUM|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "errorCode": "string",
  "message": "string",
  "requestId": "string",
  "status": "string"
}
```

<h3 id="apigeeorganizationssitesapicategoriesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ApiResponseWrapper](#schemagooglecloudapigeev1apiresponsewrapper)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.sites.apicategories.patch

<a id="opIdapigee.organizations.sites.apicategories.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "name": "string",
    "siteId": "string",
    "updateTime": "string"
  }'
```

`PATCH /v1/{name}`

Updates a category on the portal.

> Body parameter

```json
{
  "id": "string",
  "name": "string",
  "siteId": "string",
  "updateTime": "string"
}
```

<h3 id="apigeeorganizationssitesapicategoriespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the category. Use the following structure in your request: `organizations/{org}/sites/{site}/apicategories/{apicategory}`|
|updateMask|query|string|false|List of fields to be updated.|
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
|body|body|[GoogleCloudApigeeV1ApiCategoryData](#schemagooglecloudapigeev1apicategorydata)|false|none|
|» id|body|string|false|ID of the category (a UUID).|
|» name|body|string|false|Name of the category.|
|» siteId|body|string|false|Name of the portal.|
|» updateTime|body|string(int64)|false|Time the category was last modified in milliseconds since epoch.|

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
  "data": {
    "id": "string",
    "name": "string",
    "siteId": "string",
    "updateTime": "string"
  },
  "errorCode": "string",
  "message": "string",
  "requestId": "string",
  "status": "string"
}
```

<h3 id="apigeeorganizationssitesapicategoriespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ApiCategory](#schemagooglecloudapigeev1apicategory)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.developers.apps.attributes

<a id="opIdapigee.organizations.developers.apps.attributes"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/attributes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attribute": [
      {
        "name": "string",
        "value": "string"
      }
    ]
  }'
```

`POST /v1/{name}/attributes`

Updates attributes for a developer app. This API replaces the current attributes with those specified in the request.

> Body parameter

```json
{
  "attribute": [
    {
      "name": "string",
      "value": "string"
    }
  ]
}
```

<h3 id="apigeeorganizationsdevelopersappsattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the developer app. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps/{app}`|
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
|body|body|[GoogleCloudApigeeV1Attributes](#schemagooglecloudapigeev1attributes)|false|none|
|» attribute|body|[[GoogleCloudApigeeV1Attribute](#schemagooglecloudapigeev1attribute)]|false|List of attributes.|

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
  "attribute": [
    {
      "name": "string",
      "value": "string"
    }
  ]
}
```

<h3 id="apigeeorganizationsdevelopersappsattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1Attributes](#schemagooglecloudapigeev1attributes)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.keystores.aliases.getCertificate

<a id="opIdapigee.organizations.environments.keystores.aliases.getCertificate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/certificate \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/certificate`

Gets the certificate from an alias in PEM-encoded form.

<h3 id="apigeeorganizationsenvironmentskeystoresaliasesgetcertificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the alias. Use the following format in your request: `organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}`.|
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
  "contentType": "string",
  "data": "string",
  "extensions": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

<h3 id="apigeeorganizationsenvironmentskeystoresaliasesgetcertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleApiHttpBody](#schemagoogleapihttpbody)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.keystores.aliases.csr

<a id="opIdapigee.organizations.environments.keystores.aliases.csr"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/csr \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/csr`

Generates a PKCS #10 Certificate Signing Request for the private key in an alias.

<h3 id="apigeeorganizationsenvironmentskeystoresaliasescsr-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the alias. Use the following format in your request: `organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}`.|
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
  "contentType": "string",
  "data": "string",
  "extensions": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

<h3 id="apigeeorganizationsenvironmentskeystoresaliasescsr-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleApiHttpBody](#schemagoogleapihttpbody)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.apis.revisions.debugsessions.deleteData

<a id="opIdapigee.organizations.environments.apis.revisions.debugsessions.deleteData"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/data \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}/data`

Deletes the data from a debug session. This does not cancel the debug session or prevent further data from being collected if the session is still active in runtime pods.

<h3 id="apigeeorganizationsenvironmentsapisrevisionsdebugsessionsdeletedata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the debug session to delete. Must be of the form: `organizations/{organization}/environments/{environment}/apis/{api}/revisions/{revision}/debugsessions/{debugsession}`.|
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

<h3 id="apigeeorganizationsenvironmentsapisrevisionsdebugsessionsdeletedata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.sharedflows.revisions.getDeployments

<a id="opIdapigee.organizations.environments.sharedflows.revisions.getDeployments"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/deployments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/deployments`

Gets the deployment of a shared flow revision and actual state reported by runtime pods.

<h3 id="apigeeorganizationsenvironmentssharedflowsrevisionsgetdeployments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name representing a shared flow in an environment in the following format: `organizations/{org}/environments/{env}/sharedflows/{sharedflow}/revisions/{rev}`|
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
  "apiProxy": "string",
  "deployStartTime": "string",
  "environment": "string",
  "errors": [
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
  "instances": [
    {
      "deployedRevisions": [
        {
          "percentage": 0,
          "revision": "string"
        }
      ],
      "deployedRoutes": [
        {
          "basepath": "string",
          "envgroup": "string",
          "environment": "string",
          "percentage": 0
        }
      ],
      "instance": "string"
    }
  ],
  "pods": [
    {
      "appVersion": "string",
      "deploymentStatus": "string",
      "deploymentStatusTime": "string",
      "deploymentTime": "string",
      "podName": "string",
      "podStatus": "string",
      "podStatusTime": "string",
      "statusCode": "string",
      "statusCodeDetails": "string"
    }
  ],
  "revision": "string",
  "routeConflicts": [
    {
      "conflictingDeployment": {
        "apiProxy": "string",
        "basepath": "string",
        "environment": "string",
        "revision": "string"
      },
      "description": "string",
      "environmentGroup": "string"
    }
  ],
  "serviceAccount": "string",
  "state": "RUNTIME_STATE_UNSPECIFIED"
}
```

<h3 id="apigeeorganizationsenvironmentssharedflowsrevisionsgetdeployments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1Deployment](#schemagooglecloudapigeev1deployment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.sharedflows.revisions.deploy

<a id="opIdapigee.organizations.environments.sharedflows.revisions.deploy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/deployments \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/{name}/deployments`

Deploys a revision of a shared flow. If another revision of the same shared flow is currently deployed, set the `override` parameter to `true` to have this revision replace the currently deployed revision. You cannot use a shared flow until it has been deployed to an environment. For a request path `organizations/{org}/environments/{env}/sharedflows/{sf}/revisions/{rev}/deployments`, two permissions are required: * `apigee.deployments.create` on the resource `organizations/{org}/environments/{env}` * `apigee.sharedflowrevisions.deploy` on the resource `organizations/{org}/sharedflows/{sf}/revisions/{rev}`

<h3 id="apigeeorganizationsenvironmentssharedflowsrevisionsdeploy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the shared flow revision to deploy in the following format: `organizations/{org}/environments/{env}/sharedflows/{sharedflow}/revisions/{rev}`|
|override|query|boolean|false|Flag that specifies whether the new deployment replaces other deployed revisions of the shared flow in the environment. Set `override` to `true` to replace other deployed revisions. By default, `override` is `false` and the deployment is rejected if other revisions of the shared flow are deployed in the environment.|
|serviceAccount|query|string|false|Google Cloud IAM service account. The service account represents the identity of the deployed proxy, and determines what permissions it has. The format must be `{ACCOUNT_ID}@{PROJECT}.iam.gserviceaccount.com`.|
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
  "apiProxy": "string",
  "deployStartTime": "string",
  "environment": "string",
  "errors": [
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
  "instances": [
    {
      "deployedRevisions": [
        {
          "percentage": 0,
          "revision": "string"
        }
      ],
      "deployedRoutes": [
        {
          "basepath": "string",
          "envgroup": "string",
          "environment": "string",
          "percentage": 0
        }
      ],
      "instance": "string"
    }
  ],
  "pods": [
    {
      "appVersion": "string",
      "deploymentStatus": "string",
      "deploymentStatusTime": "string",
      "deploymentTime": "string",
      "podName": "string",
      "podStatus": "string",
      "podStatusTime": "string",
      "statusCode": "string",
      "statusCodeDetails": "string"
    }
  ],
  "revision": "string",
  "routeConflicts": [
    {
      "conflictingDeployment": {
        "apiProxy": "string",
        "basepath": "string",
        "environment": "string",
        "revision": "string"
      },
      "description": "string",
      "environmentGroup": "string"
    }
  ],
  "serviceAccount": "string",
  "state": "RUNTIME_STATE_UNSPECIFIED"
}
```

<h3 id="apigeeorganizationsenvironmentssharedflowsrevisionsdeploy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1Deployment](#schemagooglecloudapigeev1deployment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.sharedflows.revisions.undeploy

<a id="opIdapigee.organizations.environments.sharedflows.revisions.undeploy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/deployments \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}/deployments`

Undeploys a shared flow revision from an environment. For a request path `organizations/{org}/environments/{env}/sharedflows/{sf}/revisions/{rev}/deployments`, two permissions are required: * `apigee.deployments.delete` on the resource `organizations/{org}/environments/{env}` * `apigee.sharedflowrevisions.undeploy` on the resource `organizations/{org}/sharedflows/{sf}/revisions/{rev}`

<h3 id="apigeeorganizationsenvironmentssharedflowsrevisionsundeploy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the shared flow revision to undeploy in the following format: `organizations/{org}/environments/{env}/sharedflows/{sharedflow}/revisions/{rev}`|
|sequencedRollout|query|boolean|false|Flag that specifies whether to enable sequenced rollout. If set to `true`, the environment group routing rules corresponding to this deployment will be removed before removing the deployment from the runtime. This is likely to be a rare use case; it is only needed when the intended effect of undeploying this proxy is to cause the traffic it currently handles to be rerouted to some other existing proxy in the environment group. The [GenerateUndeployChangeReport API](GenerateUndeployChangeReport) may be used to examine routing changes before issuing the undeployment request, and its response will indicate if a sequenced rollout is recommended for the undeployment.|
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

<h3 id="apigeeorganizationsenvironmentssharedflowsrevisionsundeploy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.apis.revisions.deployments.generateDeployChangeReport

<a id="opIdapigee.organizations.environments.apis.revisions.deployments.generateDeployChangeReport"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/deployments:generateDeployChangeReport \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/{name}/deployments:generateDeployChangeReport`

Generates a report for a dry run analysis of a DeployApiProxy request without committing the deployment. In addition to the standard validations performed when adding deployments, additional analysis will be done to detect possible traffic routing changes that would result from this deployment being created. Any potential routing conflicts or unsafe changes will be reported in the response. This routing analysis is not performed for a non-dry-run DeployApiProxy request. For a request path `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}/deployments:generateDeployChangeReport`, two permissions are required: * `apigee.deployments.create` on the resource `organizations/{org}/environments/{env}` * `apigee.proxyrevisions.deploy` on the resource `organizations/{org}/apis/{api}/revisions/{rev}`

<h3 id="apigeeorganizationsenvironmentsapisrevisionsdeploymentsgeneratedeploychangereport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name of the API proxy revision deployment in the following format: `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}`|
|override|query|boolean|false|Flag that specifies whether to force the deployment of the new revision over the currently deployed revision by overriding conflict checks.|
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
  "routingChanges": [
    {
      "description": "string",
      "environmentGroup": "string",
      "fromDeployment": {
        "apiProxy": "string",
        "basepath": "string",
        "environment": "string",
        "revision": "string"
      },
      "shouldSequenceRollout": true,
      "toDeployment": {
        "apiProxy": "string",
        "basepath": "string",
        "environment": "string",
        "revision": "string"
      }
    }
  ],
  "routingConflicts": [
    {
      "conflictingDeployment": {
        "apiProxy": "string",
        "basepath": "string",
        "environment": "string",
        "revision": "string"
      },
      "description": "string",
      "environmentGroup": "string"
    }
  ],
  "validationErrors": {
    "violations": [
      {
        "description": "string",
        "subject": "string",
        "type": "string"
      }
    ]
  }
}
```

<h3 id="apigeeorganizationsenvironmentsapisrevisionsdeploymentsgeneratedeploychangereport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1DeploymentChangeReport](#schemagooglecloudapigeev1deploymentchangereport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.apis.revisions.deployments.generateUndeployChangeReport

<a id="opIdapigee.organizations.environments.apis.revisions.deployments.generateUndeployChangeReport"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/deployments:generateUndeployChangeReport \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/{name}/deployments:generateUndeployChangeReport`

Generates a report for a dry run analysis of an UndeployApiProxy request without committing the undeploy. In addition to the standard validations performed when removing deployments, additional analysis will be done to detect possible traffic routing changes that would result from this deployment being removed. Any potential routing conflicts or unsafe changes will be reported in the response. This routing analysis is not performed for a non-dry-run UndeployApiProxy request. For a request path `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}/deployments:generateUndeployChangeReport`, two permissions are required: * `apigee.deployments.delete` on the resource `organizations/{org}/environments/{env}` * `apigee.proxyrevisions.undeploy` on the resource `organizations/{org}/apis/{api}/revisions/{rev}`

<h3 id="apigeeorganizationsenvironmentsapisrevisionsdeploymentsgenerateundeploychangereport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name of the API proxy revision deployment in the following format: `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}`|
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
  "routingChanges": [
    {
      "description": "string",
      "environmentGroup": "string",
      "fromDeployment": {
        "apiProxy": "string",
        "basepath": "string",
        "environment": "string",
        "revision": "string"
      },
      "shouldSequenceRollout": true,
      "toDeployment": {
        "apiProxy": "string",
        "basepath": "string",
        "environment": "string",
        "revision": "string"
      }
    }
  ],
  "routingConflicts": [
    {
      "conflictingDeployment": {
        "apiProxy": "string",
        "basepath": "string",
        "environment": "string",
        "revision": "string"
      },
      "description": "string",
      "environmentGroup": "string"
    }
  ],
  "validationErrors": {
    "violations": [
      {
        "description": "string",
        "subject": "string",
        "type": "string"
      }
    ]
  }
}
```

<h3 id="apigeeorganizationsenvironmentsapisrevisionsdeploymentsgenerateundeploychangereport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1DeploymentChangeReport](#schemagooglecloudapigeev1deploymentchangereport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.operations.list

<a id="opIdapigee.organizations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="apigeeorganizationsoperationslist-parameters">Parameters</h3>

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

<h3 id="apigeeorganizationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningListOperationsResponse](#schemagooglelongrunninglistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.instances.natAddresses.activate

<a id="opIdapigee.organizations.instances.natAddresses.activate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:activate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{name}:activate`

Activates the NAT address. The Apigee instance can now use this for Internet egress traffic. **Note:** Not supported for Apigee hybrid.

> Body parameter

```json
{}
```

<h3 id="apigeeorganizationsinstancesnataddressesactivate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the nat address. Use the following structure in your request: `organizations/{org}/instances/{instances}/natAddresses/{nataddress}``|
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
|body|body|[GoogleCloudApigeeV1ActivateNatAddressRequest](#schemagooglecloudapigeev1activatenataddressrequest)|false|none|

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

<h3 id="apigeeorganizationsinstancesnataddressesactivate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.developers.balance.adjust

<a id="opIdapigee.organizations.developers.balance.adjust"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:adjust \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "adjustment": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    }
  }'
```

`POST /v1/{name}:adjust`

Adjust the prepaid balance for the developer. This API will be used in scenarios where the developer has been under-charged or over-charged.

> Body parameter

```json
{
  "adjustment": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  }
}
```

<h3 id="apigeeorganizationsdevelopersbalanceadjust-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Account balance for the developer. Use the following structure in your request: `organizations/{org}/developers/{developer}/balance`|
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
|body|body|[GoogleCloudApigeeV1AdjustDeveloperBalanceRequest](#schemagooglecloudapigeev1adjustdeveloperbalancerequest)|false|none|
|» adjustment|body|[GoogleTypeMoney](#schemagoogletypemoney)|false|* A positive value of `adjustment` means that that the API provider wants to adjust the balance for an under-charged developer i.e. the balance of the developer will decrease. * A negative value of `adjustment` means that that the API provider wants to adjust the balance for an over-charged developer i.e. the balance of the developer will increase.|

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
  "wallets": [
    {
      "balance": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "lastCreditTime": "string"
    }
  ]
}
```

<h3 id="apigeeorganizationsdevelopersbalanceadjust-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1DeveloperBalance](#schemagooglecloudapigeev1developerbalance)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.developers.balance.credit

<a id="opIdapigee.organizations.developers.balance.credit"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:credit \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "transactionAmount": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "transactionId": "string"
  }'
```

`POST /v1/{name}:credit`

Credits the account balance for the developer.

> Body parameter

```json
{
  "transactionAmount": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "transactionId": "string"
}
```

<h3 id="apigeeorganizationsdevelopersbalancecredit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Account balance for the developer. Use the following structure in your request: `organizations/{org}/developers/{developer}/balance`|
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
|body|body|[GoogleCloudApigeeV1CreditDeveloperBalanceRequest](#schemagooglecloudapigeev1creditdeveloperbalancerequest)|false|none|
|» transactionAmount|body|[GoogleTypeMoney](#schemagoogletypemoney)|false|The amount of money to be credited. The wallet corresponding to the currency specified within `transaction_amount` will be updated. For example, if you specified `currency_code` within `transaction_amount` as "USD", then the amount would be added to the wallet which has the "USD" currency or if no such wallet exists, a new wallet will be created with the "USD" currency.|
|» transactionId|body|string|false|Each transaction_id uniquely identifies a credit balance request. If multiple requests are received with the same transaction_id, only one of them will be considered.|

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
  "wallets": [
    {
      "balance": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "lastCreditTime": "string"
    }
  ]
}
```

<h3 id="apigeeorganizationsdevelopersbalancecredit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1DeveloperBalance](#schemagooglecloudapigeev1developerbalance)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.developers.subscriptions.expire

<a id="opIdapigee.organizations.developers.subscriptions.expire"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:expire \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{name}:expire`

Expires an API product subscription immediately.

> Body parameter

```json
{}
```

<h3 id="apigeeorganizationsdeveloperssubscriptionsexpire-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the API product subscription. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/subscriptions/{subscription}`|
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
|body|body|[GoogleCloudApigeeV1ExpireDeveloperSubscriptionRequest](#schemagooglecloudapigeev1expiredevelopersubscriptionrequest)|false|none|

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
  "apiproduct": "string",
  "createdAt": "string",
  "endTime": "string",
  "lastModifiedAt": "string",
  "name": "string",
  "startTime": "string"
}
```

<h3 id="apigeeorganizationsdeveloperssubscriptionsexpire-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1DeveloperSubscription](#schemagooglecloudapigeev1developersubscription)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.archiveDeployments.generateDownloadUrl

<a id="opIdapigee.organizations.environments.archiveDeployments.generateDownloadUrl"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:generateDownloadUrl \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{name}:generateDownloadUrl`

Generates a signed URL for downloading the original zip file used to create an Archive Deployment. The URL is only valid for a limited period and should be used within minutes after generation. Each call returns a new upload URL.

> Body parameter

```json
{}
```

<h3 id="apigeeorganizationsenvironmentsarchivedeploymentsgeneratedownloadurl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the Archive Deployment you want to download.|
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
|body|body|[GoogleCloudApigeeV1GenerateDownloadUrlRequest](#schemagooglecloudapigeev1generatedownloadurlrequest)|false|none|

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
  "downloadUri": "string"
}
```

<h3 id="apigeeorganizationsenvironmentsarchivedeploymentsgeneratedownloadurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1GenerateDownloadUrlResponse](#schemagooglecloudapigeev1generatedownloadurlresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.getProjectMapping

<a id="opIdapigee.organizations.getProjectMapping"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:getProjectMapping \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}:getProjectMapping`

Gets the project ID and region for an Apigee organization.

<h3 id="apigeeorganizationsgetprojectmapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Apigee organization name in the following format: `organizations/{org}`|
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
  "location": "string",
  "organization": "string",
  "projectId": "string",
  "projectIds": [
    "string"
  ]
}
```

<h3 id="apigeeorganizationsgetprojectmapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1OrganizationProjectMapping](#schemagooglecloudapigeev1organizationprojectmapping)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.getSyncAuthorization

<a id="opIdapigee.organizations.getSyncAuthorization"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:getSyncAuthorization \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{name}:getSyncAuthorization`

Lists the service accounts with the permissions required to allow the Synchronizer to download environment data from the control plane. An ETag is returned in the response to `getSyncAuthorization`. Pass that ETag when calling [setSyncAuthorization](setSyncAuthorization) to ensure that you are updating the correct version. If you don't pass the ETag in the call to `setSyncAuthorization`, then the existing authorization is overwritten indiscriminately. For more information, see [Configure the Synchronizer](https://cloud.google.com/apigee/docs/hybrid/latest/synchronizer-access). **Note**: Available to Apigee hybrid only.

> Body parameter

```json
{}
```

<h3 id="apigeeorganizationsgetsyncauthorization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the Apigee organization. Use the following structure in your request: `organizations/{org}`|
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
|body|body|[GoogleCloudApigeeV1GetSyncAuthorizationRequest](#schemagooglecloudapigeev1getsyncauthorizationrequest)|false|none|

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
  "etag": "string",
  "identities": [
    "string"
  ]
}
```

<h3 id="apigeeorganizationsgetsyncauthorization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1SyncAuthorization](#schemagooglecloudapigeev1syncauthorization)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.securityProfiles.listRevisions

<a id="opIdapigee.organizations.securityProfiles.listRevisions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:listRevisions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}:listRevisions`

ListSecurityProfileRevisions lists all the revisions of the security profile.

<h3 id="apigeeorganizationssecurityprofileslistrevisions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. For a specific profile, list all the revisions. Format: `organizations/{org}/securityProfiles/{profile}`|
|pageSize|query|integer|false|The maximum number of profile revisions to return. The service may return fewer than this value. If unspecified, at most 50 revisions will be returned.|
|pageToken|query|string|false|A page token, received from a previous `ListSecurityProfileRevisions` call. Provide this to retrieve the subsequent page.|
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
  "securityProfiles": [
    {
      "displayName": "string",
      "environments": [
        {
          "attachTime": "string",
          "environment": "string"
        }
      ],
      "maxScore": 0,
      "minScore": 0,
      "name": "string",
      "revisionCreateTime": "string",
      "revisionId": "string",
      "revisionPublishTime": "string",
      "revisionUpdateTime": "string",
      "scoringConfigs": [
        {
          "description": "string",
          "scorePath": "string",
          "title": "string"
        }
      ]
    }
  ]
}
```

<h3 id="apigeeorganizationssecurityprofileslistrevisions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse](#schemagooglecloudapigeev1listsecurityprofilerevisionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.setSyncAuthorization

<a id="opIdapigee.organizations.setSyncAuthorization"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:setSyncAuthorization \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "etag": "string",
    "identities": [
      "string"
    ]
  }'
```

`POST /v1/{name}:setSyncAuthorization`

Sets the permissions required to allow the Synchronizer to download environment data from the control plane. You must call this API to enable proper functioning of hybrid. Pass the ETag when calling `setSyncAuthorization` to ensure that you are updating the correct version. To get an ETag, call [getSyncAuthorization](getSyncAuthorization). If you don't pass the ETag in the call to `setSyncAuthorization`, then the existing authorization is overwritten indiscriminately. For more information, see [Configure the Synchronizer](https://cloud.google.com/apigee/docs/hybrid/latest/synchronizer-access). **Note**: Available to Apigee hybrid only.

> Body parameter

```json
{
  "etag": "string",
  "identities": [
    "string"
  ]
}
```

<h3 id="apigeeorganizationssetsyncauthorization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the Apigee organization. Use the following structure in your request: `organizations/{org}`|
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
|body|body|[GoogleCloudApigeeV1SyncAuthorization](#schemagooglecloudapigeev1syncauthorization)|false|none|
|» etag|body|string(byte)|false|Entity tag (ETag) used for optimistic concurrency control as a way to help prevent simultaneous updates from overwriting each other. For example, when you call [getSyncAuthorization](organizations/getSyncAuthorization) an ETag is returned in the response. Pass that ETag when calling the [setSyncAuthorization](organizations/setSyncAuthorization) to ensure that you are updating the correct version. If you don't pass the ETag in the call to `setSyncAuthorization`, then the existing authorization is overwritten indiscriminately. **Note**: We strongly recommend that you use the ETag in the read-modify-write cycle to avoid race conditions.|
|» identities|body|[string]|false|Required. Array of service accounts to grant access to control plane resources, each specified using the following format: `serviceAccount:` service-account-name. The service-account-name is formatted like an email address. For example: `my-synchronizer-manager-service_account@my_project_id.iam.gserviceaccount.com` You might specify multiple service accounts, for example, if you have multiple environments and wish to assign a unique service account to each one. The service accounts must have **Apigee Synchronizer Manager** role. See also [Create service accounts](https://cloud.google.com/apigee/docs/hybrid/latest/sa-about#create-the-service-accounts).|

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
  "etag": "string",
  "identities": [
    "string"
  ]
}
```

<h3 id="apigeeorganizationssetsyncauthorization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1SyncAuthorization](#schemagooglecloudapigeev1syncauthorization)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.securityStats.queryTabularStats

<a id="opIdapigee.organizations.environments.securityStats.queryTabularStats"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/securityStats:queryTabularStats \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dimensions": [
      "string"
    ],
    "filter": "string",
    "metrics": [
      {
        "aggregation": "AGGREGATION_FUNCTION_UNSPECIFIED",
        "name": "string",
        "order": "ORDER_UNSPECIFIED"
      }
    ],
    "pageSize": 0,
    "pageToken": "string",
    "timeRange": {
      "endTime": "string",
      "startTime": "string"
    }
  }'
```

`POST /v1/{orgenv}/securityStats:queryTabularStats`

Retrieve security statistics as tabular rows.

> Body parameter

```json
{
  "dimensions": [
    "string"
  ],
  "filter": "string",
  "metrics": [
    {
      "aggregation": "AGGREGATION_FUNCTION_UNSPECIFIED",
      "name": "string",
      "order": "ORDER_UNSPECIFIED"
    }
  ],
  "pageSize": 0,
  "pageToken": "string",
  "timeRange": {
    "endTime": "string",
    "startTime": "string"
  }
}
```

<h3 id="apigeeorganizationsenvironmentssecuritystatsquerytabularstats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgenv|path|string|true|Required. Should be of the form organizations//environments/.|
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
|body|body|[GoogleCloudApigeeV1QueryTabularStatsRequest](#schemagooglecloudapigeev1querytabularstatsrequest)|false|none|
|» dimensions|body|[string]|false|Required. List of dimension names to group the aggregations by.|
|» filter|body|string|false|Filter further on specific dimension values. Follows the same grammar as custom report's filter expressions. Example, apiproxy eq 'foobar'. https://cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference#filters|
|» metrics|body|[[GoogleCloudApigeeV1MetricAggregation](#schemagooglecloudapigeev1metricaggregation)]|false|Required. List of metrics and their aggregations.|
|» pageSize|body|integer(int32)|false|Page size represents the number of rows.|
|» pageToken|body|string|false|Identifies a sequence of rows.|
|» timeRange|body|[GoogleTypeInterval](#schemagoogletypeinterval)|false|Time range for the stats.|

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
  "columns": [
    "string"
  ],
  "nextPageToken": "string",
  "values": [
    [
      null
    ]
  ]
}
```

<h3 id="apigeeorganizationsenvironmentssecuritystatsquerytabularstats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1QueryTabularStatsResponse](#schemagooglecloudapigeev1querytabularstatsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.securityStats.queryTimeSeriesStats

<a id="opIdapigee.organizations.environments.securityStats.queryTimeSeriesStats"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/securityStats:queryTimeSeriesStats \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dimensions": [
      "string"
    ],
    "filter": "string",
    "metrics": [
      {
        "aggregation": "AGGREGATION_FUNCTION_UNSPECIFIED",
        "name": "string",
        "order": "ORDER_UNSPECIFIED"
      }
    ],
    "pageSize": 0,
    "pageToken": "string",
    "timeRange": {
      "endTime": "string",
      "startTime": "string"
    },
    "timestampOrder": "ORDER_UNSPECIFIED",
    "windowSize": "WINDOW_SIZE_UNSPECIFIED"
  }'
```

`POST /v1/{orgenv}/securityStats:queryTimeSeriesStats`

Retrieve security statistics as a collection of time series.

> Body parameter

```json
{
  "dimensions": [
    "string"
  ],
  "filter": "string",
  "metrics": [
    {
      "aggregation": "AGGREGATION_FUNCTION_UNSPECIFIED",
      "name": "string",
      "order": "ORDER_UNSPECIFIED"
    }
  ],
  "pageSize": 0,
  "pageToken": "string",
  "timeRange": {
    "endTime": "string",
    "startTime": "string"
  },
  "timestampOrder": "ORDER_UNSPECIFIED",
  "windowSize": "WINDOW_SIZE_UNSPECIFIED"
}
```

<h3 id="apigeeorganizationsenvironmentssecuritystatsquerytimeseriesstats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgenv|path|string|true|Required. Should be of the form organizations//environments/.|
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
|body|body|[GoogleCloudApigeeV1QueryTimeSeriesStatsRequest](#schemagooglecloudapigeev1querytimeseriesstatsrequest)|false|none|
|» dimensions|body|[string]|false|List of dimension names to group the aggregations by. If no dimensions are passed, a single trend line representing the requested metric aggregations grouped by environment is returned.|
|» filter|body|string|false|Filter further on specific dimension values. Follows the same grammar as custom report's filter expressions. Example, apiproxy eq 'foobar'. https://cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference#filters|
|» metrics|body|[[GoogleCloudApigeeV1MetricAggregation](#schemagooglecloudapigeev1metricaggregation)]|false|Required. List of metrics and their aggregations.|
|» pageSize|body|integer(int32)|false|Page size represents the number of time series sequences, one per unique set of dimensions and their values.|
|» pageToken|body|string|false|Page token stands for a specific collection of time series sequences.|
|» timeRange|body|[GoogleTypeInterval](#schemagoogletypeinterval)|false|Required. Time range for the stats.|
|» timestampOrder|body|string|false|Order the sequences in increasing or decreasing order of timestamps. Default is descending order of timestamps (latest first).|
|» windowSize|body|string|false|Time buckets to group the stats by.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» timestampOrder|ORDER_UNSPECIFIED|
|» timestampOrder|ASCENDING|
|» timestampOrder|DESCENDING|
|» windowSize|WINDOW_SIZE_UNSPECIFIED|
|» windowSize|MINUTE|
|» windowSize|HOUR|
|» windowSize|DAY|
|» windowSize|MONTH|

> Example responses

> 200 Response

```json
{
  "columns": [
    "string"
  ],
  "nextPageToken": "string",
  "values": [
    {
      "dimensions": {
        "property1": "string",
        "property2": "string"
      },
      "points": [
        [
          null
        ]
      ]
    }
  ]
}
```

<h3 id="apigeeorganizationsenvironmentssecuritystatsquerytimeseriesstats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1QueryTimeSeriesStatsResponse](#schemagooglecloudapigeev1querytimeseriesstatsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.setAddons

<a id="opIdapigee.organizations.setAddons"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:setAddons \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "addonsConfig": {
      "advancedApiOpsConfig": {
        "enabled": true
      },
      "apiSecurityConfig": {
        "enabled": true
      },
      "connectorsPlatformConfig": {
        "enabled": true
      },
      "integrationConfig": {
        "enabled": true
      },
      "monetizationConfig": {
        "enabled": true
      }
    }
  }'
```

`POST /v1/{org}:setAddons`

Configures the add-ons for the Apigee organization. The existing add-on configuration will be fully replaced.

> Body parameter

```json
{
  "addonsConfig": {
    "advancedApiOpsConfig": {
      "enabled": true
    },
    "apiSecurityConfig": {
      "enabled": true
    },
    "connectorsPlatformConfig": {
      "enabled": true
    },
    "integrationConfig": {
      "enabled": true
    },
    "monetizationConfig": {
      "enabled": true
    }
  }
}
```

<h3 id="apigeeorganizationssetaddons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org|path|string|true|Required. Name of the organization. Use the following structure in your request: `organizations/{org}`|
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
|body|body|[GoogleCloudApigeeV1SetAddonsRequest](#schemagooglecloudapigeev1setaddonsrequest)|false|none|
|» addonsConfig|body|[GoogleCloudApigeeV1AddonsConfig](#schemagooglecloudapigeev1addonsconfig)|false|Required. Add-on configurations.|

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

<h3 id="apigeeorganizationssetaddons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.list

<a id="opIdapigee.organizations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}`

Lists the Apigee organizations and associated Google Cloud projects that you have permission to access. See [Understanding organizations](https://cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure).

<h3 id="apigeeorganizationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Use the following structure in your request: `organizations`|
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
  "organizations": [
    {
      "location": "string",
      "organization": "string",
      "projectId": "string",
      "projectIds": [
        "string"
      ]
    }
  ]
}
```

<h3 id="apigeeorganizationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ListOrganizationsResponse](#schemagooglecloudapigeev1listorganizationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.keystores.aliases.create

<a id="opIdapigee.organizations.environments.keystores.aliases.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/aliases \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "contentType": "string",
    "data": "string",
    "extensions": [
      {
        "property1": null,
        "property2": null
      }
    ]
  }'
```

`POST /v1/{parent}/aliases`

Creates an alias from a key/certificate pair. The structure of the request is controlled by the `format` query parameter: - `keycertfile` - Separate PEM-encoded key and certificate files are uploaded. Set `Content-Type: multipart/form-data` and include the `keyFile`, `certFile`, and `password` (if keys are encrypted) fields in the request body. If uploading to a truststore, omit `keyFile`. - `pkcs12` - A PKCS12 file is uploaded. Set `Content-Type: multipart/form-data`, provide the file in the `file` field, and include the `password` field if the file is encrypted in the request body. - `selfsignedcert` - A new private key and certificate are generated. Set `Content-Type: application/json` and include CertificateGenerationSpec in the request body.

> Body parameter

```json
{
  "contentType": "string",
  "data": "string",
  "extensions": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

<h3 id="apigeeorganizationsenvironmentskeystoresaliasescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the keystore. Use the following format in your request: `organizations/{org}/environments/{env}/keystores/{keystore}`.|
|_password|query|string|false|DEPRECATED: For improved security, specify the password in the request body instead of using the query parameter. To specify the password in the request body, set `Content-type: multipart/form-data` part with name `password`. Password for the private key file, if required.|
|alias|query|string|false|Alias for the key/certificate pair. Values must match the regular expression `[\w\s-.]{1,255}`. This must be provided for all formats except `selfsignedcert`; self-signed certs may specify the alias in either this parameter or the JSON body.|
|format|query|string|false|Required. Format of the data. Valid values include: `selfsignedcert`, `keycertfile`, or `pkcs12`|
|ignoreExpiryValidation|query|boolean|false|Flag that specifies whether to ignore expiry validation. If set to `true`, no expiry validation will be performed.|
|ignoreNewlineValidation|query|boolean|false|Flag that specifies whether to ignore newline validation. If set to `true`, no error is thrown when the file contains a certificate chain with no newline between each certificate. Defaults to `false`.|
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
|body|body|[GoogleApiHttpBody](#schemagoogleapihttpbody)|false|none|
|» contentType|body|string|false|The HTTP Content-Type header value specifying the content type of the body.|
|» data|body|string(byte)|false|The HTTP request/response body as raw binary.|
|» extensions|body|[object]|false|Application specific response metadata. Must be set in the first response for streaming APIs.|
|» » **additionalProperties**|body|object|false|Properties of the object. Contains field @type with type URL.|

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
  "alias": "string",
  "certsInfo": {
    "certInfo": [
      {
        "basicConstraints": "string",
        "expiryDate": "string",
        "isValid": "string",
        "issuer": "string",
        "publicKey": "string",
        "serialNumber": "string",
        "sigAlgName": "string",
        "subject": "string",
        "subjectAlternativeNames": [
          "string"
        ],
        "validFrom": "string",
        "version": 0
      }
    ]
  },
  "type": "ALIAS_TYPE_UNSPECIFIED"
}
```

<h3 id="apigeeorganizationsenvironmentskeystoresaliasescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1Alias](#schemagooglecloudapigeev1alias)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.analytics.datastores.list

<a id="opIdapigee.organizations.analytics.datastores.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/analytics/datastores \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/analytics/datastores`

List Datastores

<h3 id="apigeeorganizationsanalyticsdatastoreslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent organization name. Must be of the form `organizations/{org}`.|
|targetType|query|string|false|Optional. TargetType is used to fetch all Datastores that match the type|
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
  "datastores": [
    {
      "createTime": "string",
      "datastoreConfig": {
        "bucketName": "string",
        "datasetName": "string",
        "path": "string",
        "projectId": "string",
        "tablePrefix": "string"
      },
      "displayName": "string",
      "lastUpdateTime": "string",
      "org": "string",
      "self": "string",
      "targetType": "string"
    }
  ]
}
```

<h3 id="apigeeorganizationsanalyticsdatastoreslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ListDatastoresResponse](#schemagooglecloudapigeev1listdatastoresresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.analytics.datastores.create

<a id="opIdapigee.organizations.analytics.datastores.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/analytics/datastores \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "datastoreConfig": {
      "bucketName": "string",
      "datasetName": "string",
      "path": "string",
      "projectId": "string",
      "tablePrefix": "string"
    },
    "displayName": "string",
    "targetType": "string"
  }'
```

`POST /v1/{parent}/analytics/datastores`

Create a Datastore for an org

> Body parameter

```json
{
  "datastoreConfig": {
    "bucketName": "string",
    "datasetName": "string",
    "path": "string",
    "projectId": "string",
    "tablePrefix": "string"
  },
  "displayName": "string",
  "targetType": "string"
}
```

<h3 id="apigeeorganizationsanalyticsdatastorescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent organization name. Must be of the form `organizations/{org}`.|
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
|body|body|[GoogleCloudApigeeV1Datastore](#schemagooglecloudapigeev1datastore)|false|none|
|» datastoreConfig|body|[GoogleCloudApigeeV1DatastoreConfig](#schemagooglecloudapigeev1datastoreconfig)|false|Datastore Configurations.|
|» displayName|body|string|false|Required. Display name in UI|
|» targetType|body|string|false|Destination storage type. Supported types `gcs` or `bigquery`.|

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
  "datastoreConfig": {
    "bucketName": "string",
    "datasetName": "string",
    "path": "string",
    "projectId": "string",
    "tablePrefix": "string"
  },
  "displayName": "string",
  "lastUpdateTime": "string",
  "org": "string",
  "self": "string",
  "targetType": "string"
}
```

<h3 id="apigeeorganizationsanalyticsdatastorescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1Datastore](#schemagooglecloudapigeev1datastore)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.analytics.datastores.test

<a id="opIdapigee.organizations.analytics.datastores.test"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/analytics/datastores:test \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "datastoreConfig": {
      "bucketName": "string",
      "datasetName": "string",
      "path": "string",
      "projectId": "string",
      "tablePrefix": "string"
    },
    "displayName": "string",
    "targetType": "string"
  }'
```

`POST /v1/{parent}/analytics/datastores:test`

Test if Datastore configuration is correct. This includes checking if credentials provided by customer have required permissions in target destination storage

> Body parameter

```json
{
  "datastoreConfig": {
    "bucketName": "string",
    "datasetName": "string",
    "path": "string",
    "projectId": "string",
    "tablePrefix": "string"
  },
  "displayName": "string",
  "targetType": "string"
}
```

<h3 id="apigeeorganizationsanalyticsdatastorestest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent organization name Must be of the form `organizations/{org}`|
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
|body|body|[GoogleCloudApigeeV1Datastore](#schemagooglecloudapigeev1datastore)|false|none|
|» datastoreConfig|body|[GoogleCloudApigeeV1DatastoreConfig](#schemagooglecloudapigeev1datastoreconfig)|false|Datastore Configurations.|
|» displayName|body|string|false|Required. Display name in UI|
|» targetType|body|string|false|Destination storage type. Supported types `gcs` or `bigquery`.|

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
  "error": "string",
  "state": "string"
}
```

<h3 id="apigeeorganizationsanalyticsdatastorestest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1TestDatastoreResponse](#schemagooglecloudapigeev1testdatastoreresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.analytics.exports.list

<a id="opIdapigee.organizations.environments.analytics.exports.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/analytics/exports \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/analytics/exports`

Lists the details and status of all analytics export jobs belonging to the parent organization and environment.

<h3 id="apigeeorganizationsenvironmentsanalyticsexportslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Names of the parent organization and environment. Must be of the form `organizations/{org}/environments/{env}`.|
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
  "exports": [
    {
      "created": "string",
      "datastoreName": "string",
      "description": "string",
      "error": "string",
      "executionTime": "string",
      "name": "string",
      "self": "string",
      "state": "string",
      "updated": "string"
    }
  ]
}
```

<h3 id="apigeeorganizationsenvironmentsanalyticsexportslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ListExportsResponse](#schemagooglecloudapigeev1listexportsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.analytics.exports.create

<a id="opIdapigee.organizations.environments.analytics.exports.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/analytics/exports \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "csvDelimiter": "string",
    "datastoreName": "string",
    "dateRange": {
      "end": "string",
      "start": "string"
    },
    "description": "string",
    "name": "string",
    "outputFormat": "string"
  }'
```

`POST /v1/{parent}/analytics/exports`

Submit a data export job to be processed in the background. If the request is successful, the API returns a 201 status, a URI that can be used to retrieve the status of the export job, and the `state` value of "enqueued".

> Body parameter

```json
{
  "csvDelimiter": "string",
  "datastoreName": "string",
  "dateRange": {
    "end": "string",
    "start": "string"
  },
  "description": "string",
  "name": "string",
  "outputFormat": "string"
}
```

<h3 id="apigeeorganizationsenvironmentsanalyticsexportscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Names of the parent organization and environment. Must be of the form `organizations/{org}/environments/{env}`.|
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
|body|body|[GoogleCloudApigeeV1ExportRequest](#schemagooglecloudapigeev1exportrequest)|false|none|
|» csvDelimiter|body|string|false|Optional. Delimiter used in the CSV file, if `outputFormat` is set to `csv`. Defaults to the `,` (comma) character. Supported delimiter characters include comma (`,`), pipe (`\|`), and tab (`\t`).|
|» datastoreName|body|string|false|Required. Name of the preconfigured datastore.|
|» dateRange|body|[GoogleCloudApigeeV1DateRange](#schemagooglecloudapigeev1daterange)|false|Required. Date range of the data to export.|
|» description|body|string|false|Optional. Description of the export job.|
|» name|body|string|false|Required. Display name of the export job.|
|» outputFormat|body|string|false|Optional. Output format of the export. Valid values include: `csv` or `json`. Defaults to `json`. Note: Configure the delimiter for CSV output using the `csvDelimiter` property.|

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
  "created": "string",
  "datastoreName": "string",
  "description": "string",
  "error": "string",
  "executionTime": "string",
  "name": "string",
  "self": "string",
  "state": "string",
  "updated": "string"
}
```

<h3 id="apigeeorganizationsenvironmentsanalyticsexportscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1Export](#schemagooglecloudapigeev1export)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.sites.apicategories.list

<a id="opIdapigee.organizations.sites.apicategories.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/apicategories \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/apicategories`

Lists the categories on the portal.

<h3 id="apigeeorganizationssitesapicategorieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the portal. Use the following structure in your request: `organizations/{org}/sites/{site}`|
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
  "data": [
    {
      "id": "string",
      "name": "string",
      "siteId": "string",
      "updateTime": "string"
    }
  ],
  "errorCode": "string",
  "message": "string",
  "requestId": "string",
  "status": "string"
}
```

<h3 id="apigeeorganizationssitesapicategorieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ListApiCategoriesResponse](#schemagooglecloudapigeev1listapicategoriesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.sites.apicategories.create

<a id="opIdapigee.organizations.sites.apicategories.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/apicategories \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "name": "string",
    "siteId": "string",
    "updateTime": "string"
  }'
```

`POST /v1/{parent}/apicategories`

Creates a new category on the portal.

> Body parameter

```json
{
  "id": "string",
  "name": "string",
  "siteId": "string",
  "updateTime": "string"
}
```

<h3 id="apigeeorganizationssitesapicategoriescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the portal. Use the following structure in your request: `organizations/{org}/sites/{site}`|
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
|body|body|[GoogleCloudApigeeV1ApiCategoryData](#schemagooglecloudapigeev1apicategorydata)|false|none|
|» id|body|string|false|ID of the category (a UUID).|
|» name|body|string|false|Name of the category.|
|» siteId|body|string|false|Name of the portal.|
|» updateTime|body|string(int64)|false|Time the category was last modified in milliseconds since epoch.|

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
  "data": {
    "id": "string",
    "name": "string",
    "siteId": "string",
    "updateTime": "string"
  },
  "errorCode": "string",
  "message": "string",
  "requestId": "string",
  "status": "string"
}
```

<h3 id="apigeeorganizationssitesapicategoriescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ApiCategory](#schemagooglecloudapigeev1apicategory)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.apiproducts.list

<a id="opIdapigee.organizations.apiproducts.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/apiproducts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/apiproducts`

Lists all API product names for an organization. Filter the list by passing an `attributename` and `attibutevalue`. The maximum number of API products returned is 1000. You can paginate the list of API products returned using the `startKey` and `count` query parameters.

<h3 id="apigeeorganizationsapiproductslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the organization. Use the following structure in your request: `organizations/{org}`|
|attributename|query|string|false|Name of the attribute used to filter the search.|
|attributevalue|query|string|false|Value of the attribute used to filter the search.|
|count|query|string|false|Enter the number of API products you want returned in the API call. The limit is 1000.|
|expand|query|boolean|false|Flag that specifies whether to expand the results. Set to `true` to get expanded details about each API.|
|startKey|query|string|false|Gets a list of API products starting with a specific API product in the list. For example, if you're returning 50 API products at a time (using the `count` query parameter), you can view products 50-99 by entering the name of the 50th API product in the first API (without using `startKey`). Product name is case sensitive.|
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
  "apiProduct": [
    {
      "apiResources": [
        "string"
      ],
      "approvalType": "string",
      "attributes": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "createdAt": "string",
      "description": "string",
      "displayName": "string",
      "environments": [
        "string"
      ],
      "graphqlOperationGroup": {
        "operationConfigType": "string",
        "operationConfigs": [
          {
            "apiSource": "string",
            "attributes": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "operations": [
              {
                "operation": "string",
                "operationTypes": [
                  "string"
                ]
              }
            ],
            "quota": {
              "interval": "string",
              "limit": "string",
              "timeUnit": "string"
            }
          }
        ]
      },
      "lastModifiedAt": "string",
      "name": "string",
      "operationGroup": {
        "operationConfigType": "string",
        "operationConfigs": [
          {
            "apiSource": "string",
            "attributes": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "operations": [
              {
                "methods": [
                  "string"
                ],
                "resource": "string"
              }
            ],
            "quota": {
              "interval": "string",
              "limit": "string",
              "timeUnit": "string"
            }
          }
        ]
      },
      "proxies": [
        "string"
      ],
      "quota": "string",
      "quotaCounterScope": "QUOTA_COUNTER_SCOPE_UNSPECIFIED",
      "quotaInterval": "string",
      "quotaTimeUnit": "string",
      "scopes": [
        "string"
      ]
    }
  ]
}
```

<h3 id="apigeeorganizationsapiproductslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ListApiProductsResponse](#schemagooglecloudapigeev1listapiproductsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.apiproducts.create

<a id="opIdapigee.organizations.apiproducts.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/apiproducts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "apiResources": [
      "string"
    ],
    "approvalType": "string",
    "attributes": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "createdAt": "string",
    "description": "string",
    "displayName": "string",
    "environments": [
      "string"
    ],
    "graphqlOperationGroup": {
      "operationConfigType": "string",
      "operationConfigs": [
        {
          "apiSource": "string",
          "attributes": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "operations": [
            {
              "operation": "string",
              "operationTypes": [
                "string"
              ]
            }
          ],
          "quota": {
            "interval": "string",
            "limit": "string",
            "timeUnit": "string"
          }
        }
      ]
    },
    "lastModifiedAt": "string",
    "name": "string",
    "operationGroup": {
      "operationConfigType": "string",
      "operationConfigs": [
        {
          "apiSource": "string",
          "attributes": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "operations": [
            {
              "methods": [
                "string"
              ],
              "resource": "string"
            }
          ],
          "quota": {
            "interval": "string",
            "limit": "string",
            "timeUnit": "string"
          }
        }
      ]
    },
    "proxies": [
      "string"
    ],
    "quota": "string",
    "quotaCounterScope": "QUOTA_COUNTER_SCOPE_UNSPECIFIED",
    "quotaInterval": "string",
    "quotaTimeUnit": "string",
    "scopes": [
      "string"
    ]
  }'
```

`POST /v1/{parent}/apiproducts`

Creates an API product in an organization. You create API products after you have proxied backend services using API proxies. An API product is a collection of API resources combined with quota settings and metadata that you can use to deliver customized and productized API bundles to your developer community. This metadata can include: - Scope - Environments - API proxies - Extensible profile API products enable you repackage APIs on the fly, without having to do any additional coding or configuration. Apigee recommends that you start with a simple API product including only required elements. You then provision credentials to apps to enable them to start testing your APIs. After you have authentication and authorization working against a simple API product, you can iterate to create finer-grained API products, defining different sets of API resources for each API product. **WARNING:** - If you don't specify an API proxy in the request body, *any* app associated with the product can make calls to *any* API in your entire organization. - If you don't specify an environment in the request body, the product allows access to all environments. For more information, see What is an API product?

> Body parameter

```json
{
  "apiResources": [
    "string"
  ],
  "approvalType": "string",
  "attributes": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "createdAt": "string",
  "description": "string",
  "displayName": "string",
  "environments": [
    "string"
  ],
  "graphqlOperationGroup": {
    "operationConfigType": "string",
    "operationConfigs": [
      {
        "apiSource": "string",
        "attributes": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "operations": [
          {
            "operation": "string",
            "operationTypes": [
              "string"
            ]
          }
        ],
        "quota": {
          "interval": "string",
          "limit": "string",
          "timeUnit": "string"
        }
      }
    ]
  },
  "lastModifiedAt": "string",
  "name": "string",
  "operationGroup": {
    "operationConfigType": "string",
    "operationConfigs": [
      {
        "apiSource": "string",
        "attributes": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "operations": [
          {
            "methods": [
              "string"
            ],
            "resource": "string"
          }
        ],
        "quota": {
          "interval": "string",
          "limit": "string",
          "timeUnit": "string"
        }
      }
    ]
  },
  "proxies": [
    "string"
  ],
  "quota": "string",
  "quotaCounterScope": "QUOTA_COUNTER_SCOPE_UNSPECIFIED",
  "quotaInterval": "string",
  "quotaTimeUnit": "string",
  "scopes": [
    "string"
  ]
}
```

<h3 id="apigeeorganizationsapiproductscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the organization in which the API product will be created. Use the following structure in your request: `organizations/{org}`|
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
|body|body|[GoogleCloudApigeeV1ApiProduct](#schemagooglecloudapigeev1apiproduct)|false|none|
|» apiResources|body|[string]|false|Comma-separated list of API resources to be bundled in the API product. By default, the resource paths are mapped from the `proxy.pathsuffix` variable. The proxy path suffix is defined as the URI fragment following the ProxyEndpoint base path. For example, if the `apiResources` element is defined to be `/forecastrss` and the base path defined for the API proxy is `/weather`, then only requests to `/weather/forecastrss` are permitted by the API product. You can select a specific path, or you can select all subpaths with the following wildcard: - `/**`: Indicates that all sub-URIs are included. - `/*` : Indicates that only URIs one level down are included. By default, / supports the same resources as /** as well as the base path defined by the API proxy. For example, if the base path of the API proxy is `/v1/weatherapikey`, then the API product supports requests to `/v1/weatherapikey` and to any sub-URIs, such as `/v1/weatherapikey/forecastrss`, `/v1/weatherapikey/region/CA`, and so on. For more information, see Managing API products.|
|» approvalType|body|string|false|Flag that specifies how API keys are approved to access the APIs defined by the API product. If set to `manual`, the consumer key is generated and returned in "pending" state. In this case, the API keys won't work until they have been explicitly approved. If set to `auto`, the consumer key is generated and returned in "approved" state and can be used immediately. **Note:** Typically, `auto` is used to provide access to free or trial API products that provide limited quota or capabilities.|
|» attributes|body|[[GoogleCloudApigeeV1Attribute](#schemagooglecloudapigeev1attribute)]|false|Array of attributes that may be used to extend the default API product profile with customer-specific metadata. You can specify a maximum of 18 attributes. Use this property to specify the access level of the API product as either `public`, `private`, or `internal`. Only products marked `public` are available to developers in the Apigee developer portal. For example, you can set a product to `internal` while it is in development and then change access to `public` when it is ready to release on the portal. API products marked as `private` do not appear on the portal, but can be accessed by external developers.|
|» createdAt|body|string(int64)|false|Response only. Creation time of this environment as milliseconds since epoch.|
|» description|body|string|false|Description of the API product. Include key information about the API product that is not captured by other fields.|
|» displayName|body|string|false|Name displayed in the UI or developer portal to developers registering for API access.|
|» environments|body|[string]|false|Comma-separated list of environment names to which the API product is bound. Requests to environments that are not listed are rejected. By specifying one or more environments, you can bind the resources listed in the API product to a specific environment, preventing developers from accessing those resources through API proxies deployed in another environment. This setting is used, for example, to prevent resources associated with API proxies in `prod` from being accessed by API proxies deployed in `test`.|
|» graphqlOperationGroup|body|[GoogleCloudApigeeV1GraphQLOperationGroup](#schemagooglecloudapigeev1graphqloperationgroup)|false|Configuration used to group Apigee proxies or remote services with graphQL operation name, graphQL operation type and quotas. This grouping allows us to precisely set quota for a particular combination of graphQL name and operation type for a particular proxy request. If graphQL name is not set, this would imply quota will be applied on all graphQL requests matching the operation type.|
|» lastModifiedAt|body|string(int64)|false|Response only. Modified time of this environment as milliseconds since epoch.|
|» name|body|string|false|Internal name of the API product. Characters you can use in the name are restricted to: `A-Z0-9._\-$ %`. **Note:** The internal name cannot be edited when updating the API product.|
|» operationGroup|body|[GoogleCloudApigeeV1OperationGroup](#schemagooglecloudapigeev1operationgroup)|false|Configuration used to group Apigee proxies or remote services with resources, method types, and quotas. The resource refers to the resource URI (excluding the base path). With this grouping, the API product creator is able to fine-tune and give precise control over which REST methods have access to specific resources and how many calls can be made (using the `quota` setting). **Note:** The `api_resources` setting cannot be specified for both the API product and operation group; otherwise the call will fail.|
|» proxies|body|[string]|false|Comma-separated list of API proxy names to which this API product is bound. By specifying API proxies, you can associate resources in the API product with specific API proxies, preventing developers from accessing those resources through other API proxies. Apigee rejects requests to API proxies that are not listed. **Note:** The API proxy names must already exist in the specified environment as they will be validated upon creation.|
|» quota|body|string|false|Number of request messages permitted per app by this API product for the specified `quotaInterval` and `quotaTimeUnit`. For example, a `quota` of 50, for a `quotaInterval` of 12 and a `quotaTimeUnit` of hours means 50 requests are allowed every 12 hours.|
|» quotaCounterScope|body|string|false|Scope of the quota decides how the quota counter gets applied and evaluate for quota violation. If the Scope is set as PROXY, then all the operations defined for the APIproduct that are associated with the same proxy will share the same quota counter set at the APIproduct level, making it a global counter at a proxy level. If the Scope is set as OPERATION, then each operations get the counter set at the API product dedicated, making it a local counter. Note that, the QuotaCounterScope applies only when an operation does not have dedicated quota set for itself.|
|» quotaInterval|body|string|false|Time interval over which the number of request messages is calculated.|
|» quotaTimeUnit|body|string|false|Time unit defined for the `quotaInterval`. Valid values include `minute`, `hour`, `day`, or `month`.|
|» scopes|body|[string]|false|Comma-separated list of OAuth scopes that are validated at runtime. Apigee validates that the scopes in any access token presented match the scopes defined in the OAuth policy associated with the API product.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» quotaCounterScope|QUOTA_COUNTER_SCOPE_UNSPECIFIED|
|» quotaCounterScope|PROXY|
|» quotaCounterScope|OPERATION|

> Example responses

> 200 Response

```json
{
  "apiResources": [
    "string"
  ],
  "approvalType": "string",
  "attributes": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "createdAt": "string",
  "description": "string",
  "displayName": "string",
  "environments": [
    "string"
  ],
  "graphqlOperationGroup": {
    "operationConfigType": "string",
    "operationConfigs": [
      {
        "apiSource": "string",
        "attributes": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "operations": [
          {
            "operation": "string",
            "operationTypes": [
              "string"
            ]
          }
        ],
        "quota": {
          "interval": "string",
          "limit": "string",
          "timeUnit": "string"
        }
      }
    ]
  },
  "lastModifiedAt": "string",
  "name": "string",
  "operationGroup": {
    "operationConfigType": "string",
    "operationConfigs": [
      {
        "apiSource": "string",
        "attributes": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "operations": [
          {
            "methods": [
              "string"
            ],
            "resource": "string"
          }
        ],
        "quota": {
          "interval": "string",
          "limit": "string",
          "timeUnit": "string"
        }
      }
    ]
  },
  "proxies": [
    "string"
  ],
  "quota": "string",
  "quotaCounterScope": "QUOTA_COUNTER_SCOPE_UNSPECIFIED",
  "quotaInterval": "string",
  "quotaTimeUnit": "string",
  "scopes": [
    "string"
  ]
}
```

<h3 id="apigeeorganizationsapiproductscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ApiProduct](#schemagooglecloudapigeev1apiproduct)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.apis.list

<a id="opIdapigee.organizations.apis.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/apis \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/apis`

Lists the names of all API proxies in an organization. The names returned correspond to the names defined in the configuration files for each API proxy.

<h3 id="apigeeorganizationsapislist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the organization in the following format: `organizations/{org}`|
|includeMetaData|query|boolean|false|Flag that specifies whether to include API proxy metadata in the response.|
|includeRevisions|query|boolean|false|Flag that specifies whether to include a list of revisions in the response.|
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
  "proxies": [
    {
      "apiProxyType": "API_PROXY_TYPE_UNSPECIFIED",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "latestRevisionId": "string",
      "metaData": {
        "createdAt": "string",
        "lastModifiedAt": "string",
        "subType": "string"
      },
      "name": "string",
      "readOnly": true,
      "revision": [
        "string"
      ]
    }
  ]
}
```

<h3 id="apigeeorganizationsapislist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ListApiProxiesResponse](#schemagooglecloudapigeev1listapiproxiesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.apis.create

<a id="opIdapigee.organizations.apis.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/apis \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "contentType": "string",
    "data": "string",
    "extensions": [
      {
        "property1": null,
        "property2": null
      }
    ]
  }'
```

`POST /v1/{parent}/apis`

Creates an API proxy. The API proxy created will not be accessible at runtime until it is deployed to an environment. Create a new API proxy by setting the `name` query parameter to the name of the API proxy. Import an API proxy configuration bundle stored in zip format on your local machine to your organization by doing the following: * Set the `name` query parameter to the name of the API proxy. * Set the `action` query parameter to `import`. * Set the `Content-Type` header to `multipart/form-data`. * Pass as a file the name of API proxy configuration bundle stored in zip format on your local machine using the `file` form field. **Note**: To validate the API proxy configuration bundle only without importing it, set the `action` query parameter to `validate`. When importing an API proxy configuration bundle, if the API proxy does not exist, it will be created. If the API proxy exists, then a new revision is created. Invalid API proxy configurations are rejected, and a list of validation errors is returned to the client.

> Body parameter

```json
{
  "contentType": "string",
  "data": "string",
  "extensions": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

<h3 id="apigeeorganizationsapiscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the organization in the following format: `organizations/{org}`|
|action|query|string|false|Action to perform when importing an API proxy configuration bundle. Set this parameter to one of the following values: * `import` to import the API proxy configuration bundle. * `validate` to validate the API proxy configuration bundle without importing it.|
|name|query|string|false|Name of the API proxy. Restrict the characters used to: A-Za-z0-9._-|
|validate|query|boolean|false|Ignored. All uploads are validated regardless of the value of this field. Maintained for compatibility with Apigee Edge API.|
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
|body|body|[GoogleApiHttpBody](#schemagoogleapihttpbody)|false|none|
|» contentType|body|string|false|The HTTP Content-Type header value specifying the content type of the body.|
|» data|body|string(byte)|false|The HTTP request/response body as raw binary.|
|» extensions|body|[object]|false|Application specific response metadata. Must be set in the first response for streaming APIs.|
|» » **additionalProperties**|body|object|false|Properties of the object. Contains field @type with type URL.|

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
  "archive": "string",
  "basepaths": [
    "string"
  ],
  "configurationVersion": {
    "majorVersion": 0,
    "minorVersion": 0
  },
  "contextInfo": "string",
  "createdAt": "string",
  "description": "string",
  "displayName": "string",
  "entityMetaDataAsProperties": {
    "property1": "string",
    "property2": "string"
  },
  "integrationEndpoints": [
    "string"
  ],
  "lastModifiedAt": "string",
  "name": "string",
  "policies": [
    "string"
  ],
  "proxies": [
    "string"
  ],
  "proxyEndpoints": [
    "string"
  ],
  "resourceFiles": {
    "resourceFile": [
      {
        "name": "string",
        "type": "string"
      }
    ]
  },
  "resources": [
    "string"
  ],
  "revision": "string",
  "sharedFlows": [
    "string"
  ],
  "spec": "string",
  "targetEndpoints": [
    "string"
  ],
  "targetServers": [
    "string"
  ],
  "targets": [
    "string"
  ],
  "teams": [
    "string"
  ],
  "type": "string"
}
```

<h3 id="apigeeorganizationsapiscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ApiProxyRevision](#schemagooglecloudapigeev1apiproxyrevision)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.developers.apps.list

<a id="opIdapigee.organizations.developers.apps.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/apps \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/apps`

Lists all apps created by a developer in an Apigee organization. Optionally, you can request an expanded view of the developer apps. A maximum of 100 developer apps are returned per API call. You can paginate the list of deveoper apps returned using the `startKey` and `count` query parameters.

<h3 id="apigeeorganizationsdevelopersappslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the developer. Use the following structure in your request: `organizations/{org}/developers/{developer_email}`|
|count|query|string|false|Number of developer apps to return in the API call. Use with the `startKey` parameter to provide more targeted filtering. The limit is 1000.|
|expand|query|boolean|false|Optional. Specifies whether to expand the results. Set to `true` to expand the results. This query parameter is not valid if you use the `count` or `startKey` query parameters.|
|shallowExpand|query|boolean|false|Optional. Specifies whether to expand the results in shallow mode. Set to `true` to expand the results in shallow mode.|
|startKey|query|string|false|**Note**: Must be used in conjunction with the `count` parameter. Name of the developer app from which to start displaying the list of developer apps. For example, if you're returning 50 developer apps at a time (using the `count` query parameter), you can view developer apps 50-99 by entering the name of the 50th developer app. The developer app name is case sensitive.|
|includeCred|query|boolean|false|Optional. Flag that specifies whether to include credentials in the response.|
|keyStatus|query|string|false|Optional. Key status of the app. Valid values include `approved` or `revoked`. Defaults to `approved`.|
|rows|query|string|false|Optional. Maximum number of app IDs to return. Defaults to 10000.|
|status|query|string|false|Optional. Filter by the status of the app. Valid values are `approved` or `revoked`. Defaults to `approved`.|
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
  "app": [
    {
      "apiProducts": [
        "string"
      ],
      "appFamily": "string",
      "appId": "string",
      "attributes": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "callbackUrl": "string",
      "createdAt": "string",
      "credentials": [
        {
          "apiProducts": [
            {
              "apiproduct": "string",
              "status": "string"
            }
          ],
          "attributes": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "consumerKey": "string",
          "consumerSecret": "string",
          "expiresAt": "string",
          "issuedAt": "string",
          "scopes": [
            "string"
          ],
          "status": "string"
        }
      ],
      "developerId": "string",
      "keyExpiresIn": "string",
      "lastModifiedAt": "string",
      "name": "string",
      "scopes": [
        "string"
      ],
      "status": "string"
    }
  ]
}
```

<h3 id="apigeeorganizationsdevelopersappslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ListDeveloperAppsResponse](#schemagooglecloudapigeev1listdeveloperappsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.developers.apps.create

<a id="opIdapigee.organizations.developers.apps.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/apps \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "apiProducts": [
      "string"
    ],
    "appFamily": "string",
    "appId": "string",
    "attributes": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "callbackUrl": "string",
    "developerId": "string",
    "keyExpiresIn": "string",
    "name": "string",
    "scopes": [
      "string"
    ],
    "status": "string"
  }'
```

`POST /v1/{parent}/apps`

Creates an app associated with a developer. This API associates the developer app with the specified API product and auto-generates an API key for the app to use in calls to API proxies inside that API product. The `name` is the unique ID of the app that you can use in API calls. The `DisplayName` (set as an attribute) appears in the UI. If you don't set the `DisplayName` attribute, the `name` appears in the UI.

> Body parameter

```json
{
  "apiProducts": [
    "string"
  ],
  "appFamily": "string",
  "appId": "string",
  "attributes": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "callbackUrl": "string",
  "developerId": "string",
  "keyExpiresIn": "string",
  "name": "string",
  "scopes": [
    "string"
  ],
  "status": "string"
}
```

<h3 id="apigeeorganizationsdevelopersappscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the developer. Use the following structure in your request: `organizations/{org}/developers/{developer_email}`|
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
|body|body|[GoogleCloudApigeeV1DeveloperApp](#schemagooglecloudapigeev1developerapp)|false|none|
|» apiProducts|body|[string]|false|List of API products associated with the developer app.|
|» appFamily|body|string|false|Developer app family.|
|» appId|body|string|false|ID of the developer app.|
|» attributes|body|[[GoogleCloudApigeeV1Attribute](#schemagooglecloudapigeev1attribute)]|false|List of attributes for the developer app.|
|» callbackUrl|body|string|false|Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to developer apps.|
|» developerId|body|string|false|ID of the developer.|
|» keyExpiresIn|body|string(int64)|false|Expiration time, in milliseconds, for the consumer key that is generated for the developer app. If not set or left to the default value of `-1`, the API key never expires. The expiration time can't be updated after it is set.|
|» name|body|string|false|Name of the developer app.|
|» scopes|body|[string]|false|Scopes to apply to the developer app. The specified scopes must already exist for the API product that you associate with the developer app.|
|» status|body|string|false|Status of the credential. Valid values include `approved` or `revoked`.|

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
  "apiProducts": [
    "string"
  ],
  "appFamily": "string",
  "appId": "string",
  "attributes": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "callbackUrl": "string",
  "createdAt": "string",
  "credentials": [
    {
      "apiProducts": [
        {
          "apiproduct": "string",
          "status": "string"
        }
      ],
      "attributes": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "consumerKey": "string",
      "consumerSecret": "string",
      "expiresAt": "string",
      "issuedAt": "string",
      "scopes": [
        "string"
      ],
      "status": "string"
    }
  ],
  "developerId": "string",
  "keyExpiresIn": "string",
  "lastModifiedAt": "string",
  "name": "string",
  "scopes": [
    "string"
  ],
  "status": "string"
}
```

<h3 id="apigeeorganizationsdevelopersappscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1DeveloperApp](#schemagooglecloudapigeev1developerapp)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.archiveDeployments.list

<a id="opIdapigee.organizations.environments.archiveDeployments.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/archiveDeployments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/archiveDeployments`

Lists the ArchiveDeployments in the specified Environment.

<h3 id="apigeeorganizationsenvironmentsarchivedeploymentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the Environment for which to list Archive Deployments in the format: `organizations/{org}/environments/{env}`.|
|filter|query|string|false|Optional. An optional query used to return a subset of Archive Deployments using the semantics defined in https://google.aip.dev/160.|
|pageSize|query|integer|false|Optional. Maximum number of Archive Deployments to return. If unspecified, at most 25 deployments will be returned.|
|pageToken|query|string|false|Optional. Page token, returned from a previous ListArchiveDeployments call, that you can use to retrieve the next page.|
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
  "archiveDeployments": [
    {
      "createdAt": "string",
      "gcsUri": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "operation": "string",
      "updatedAt": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="apigeeorganizationsenvironmentsarchivedeploymentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ListArchiveDeploymentsResponse](#schemagooglecloudapigeev1listarchivedeploymentsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.archiveDeployments.create

<a id="opIdapigee.organizations.environments.archiveDeployments.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/archiveDeployments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "gcsUri": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string"
  }'
```

`POST /v1/{parent}/archiveDeployments`

Creates a new ArchiveDeployment.

> Body parameter

```json
{
  "gcsUri": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string"
}
```

<h3 id="apigeeorganizationsenvironmentsarchivedeploymentscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The Environment this Archive Deployment will be created in.|
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
|body|body|[GoogleCloudApigeeV1ArchiveDeployment](#schemagooglecloudapigeev1archivedeployment)|false|none|
|» gcsUri|body|string|false|Input only. The Google Cloud Storage signed URL returned from GenerateUploadUrl and used to upload the Archive zip file.|
|» labels|body|object|false|User-supplied key-value pairs used to organize ArchiveDeployments. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62} Label values must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63} No more than 64 labels can be associated with a given store.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Name of the Archive Deployment in the following format: `organizations/{org}/environments/{env}/archiveDeployments/{id}`.|

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

<h3 id="apigeeorganizationsenvironmentsarchivedeploymentscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.archiveDeployments.generateUploadUrl

<a id="opIdapigee.organizations.environments.archiveDeployments.generateUploadUrl"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/archiveDeployments:generateUploadUrl \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{parent}/archiveDeployments:generateUploadUrl`

Generates a signed URL for uploading an Archive zip file to Google Cloud Storage. Once the upload is complete, the signed URL should be passed to CreateArchiveDeployment. When uploading to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * Source file size should not exceed 1GB limit. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, these two headers need to be specified: * `content-type: application/zip` * `x-goog-content-length-range: 0,1073741824` And this header SHOULD NOT be specified: * `Authorization: Bearer YOUR_TOKEN`

> Body parameter

```json
{}
```

<h3 id="apigeeorganizationsenvironmentsarchivedeploymentsgenerateuploadurl-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The organization and environment to upload to.|
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
|body|body|[GoogleCloudApigeeV1GenerateUploadUrlRequest](#schemagooglecloudapigeev1generateuploadurlrequest)|false|none|

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
  "uploadUri": "string"
}
```

<h3 id="apigeeorganizationsenvironmentsarchivedeploymentsgenerateuploadurl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1GenerateUploadUrlResponse](#schemagooglecloudapigeev1generateuploadurlresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.instances.attachments.list

<a id="opIdapigee.organizations.instances.attachments.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/attachments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/attachments`

Lists all attachments to an instance. **Note:** Not supported for Apigee hybrid.

<h3 id="apigeeorganizationsinstancesattachmentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the organization. Use the following structure in your request: `organizations/{org}/instances/{instance}`|
|pageSize|query|integer|false|Maximum number of instance attachments to return. Defaults to 25.|
|pageToken|query|string|false|Page token, returned by a previous ListInstanceAttachments call, that you can use to retrieve the next page of content.|
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
      "createdAt": "string",
      "environment": "string",
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="apigeeorganizationsinstancesattachmentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ListInstanceAttachmentsResponse](#schemagooglecloudapigeev1listinstanceattachmentsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.instances.attachments.create

<a id="opIdapigee.organizations.instances.attachments.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/attachments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "environment": "string"
  }'
```

`POST /v1/{parent}/attachments`

Creates a new attachment of an environment to an instance. **Note:** Not supported for Apigee hybrid.

> Body parameter

```json
{
  "environment": "string"
}
```

<h3 id="apigeeorganizationsinstancesattachmentscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the instance. Use the following structure in your request: `organizations/{org}/instances/{instance}`.|
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
|body|body|[GoogleCloudApigeeV1InstanceAttachment](#schemagooglecloudapigeev1instanceattachment)|false|none|
|» environment|body|string|false|ID of the attached environment.|

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

<h3 id="apigeeorganizationsinstancesattachmentscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.developers.attributes.list

<a id="opIdapigee.organizations.developers.attributes.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/attributes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/attributes`

Returns a list of all developer attributes.

<h3 id="apigeeorganizationsdevelopersattributeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Email address of the developer for which attributes are being listed. Use the following structure in your request: `organizations/{org}/developers/{developer_email}`|
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
  "attribute": [
    {
      "name": "string",
      "value": "string"
    }
  ]
}
```

<h3 id="apigeeorganizationsdevelopersattributeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1Attributes](#schemagooglecloudapigeev1attributes)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.developers.attributes

<a id="opIdapigee.organizations.developers.attributes"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/attributes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attribute": [
      {
        "name": "string",
        "value": "string"
      }
    ]
  }'
```

`POST /v1/{parent}/attributes`

Updates developer attributes. This API replaces the existing attributes with those specified in the request. Add new attributes, and include or exclude any existing attributes that you want to retain or remove, respectively. The custom attribute limit is 18. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (default). Any custom attributes associated with these entities are cached for at least 180 seconds after the entity is accessed at runtime. Therefore, an `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.

> Body parameter

```json
{
  "attribute": [
    {
      "name": "string",
      "value": "string"
    }
  ]
}
```

<h3 id="apigeeorganizationsdevelopersattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Email address of the developer for which attributes are being updated. Use the following structure in your request: `organizations/{org}/developers/{developer_email}`|
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
|body|body|[GoogleCloudApigeeV1Attributes](#schemagooglecloudapigeev1attributes)|false|none|
|» attribute|body|[[GoogleCloudApigeeV1Attribute](#schemagooglecloudapigeev1attribute)]|false|List of attributes.|

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
  "attribute": [
    {
      "name": "string",
      "value": "string"
    }
  ]
}
```

<h3 id="apigeeorganizationsdevelopersattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1Attributes](#schemagooglecloudapigeev1attributes)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.instances.canaryevaluations.create

<a id="opIdapigee.organizations.instances.canaryevaluations.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/canaryevaluations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "control": "string",
    "endTime": "string",
    "metricLabels": {
      "env": "string",
      "instance_id": "string",
      "location": "string"
    },
    "startTime": "string",
    "treatment": "string"
  }'
```

`POST /v1/{parent}/canaryevaluations`

Creates a new canary evaluation for an organization.

> Body parameter

```json
{
  "control": "string",
  "endTime": "string",
  "metricLabels": {
    "env": "string",
    "instance_id": "string",
    "location": "string"
  },
  "startTime": "string",
  "treatment": "string"
}
```

<h3 id="apigeeorganizationsinstancescanaryevaluationscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the organization. Use the following structure in your request: `organizations/{org}/instances/{instance}`.|
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
|body|body|[GoogleCloudApigeeV1CanaryEvaluation](#schemagooglecloudapigeev1canaryevaluation)|false|none|
|» control|body|string|false|Required. The stable version that is serving requests.|
|» endTime|body|string(google-datetime)|false|Required. End time for the evaluation's analysis.|
|» metricLabels|body|[GoogleCloudApigeeV1CanaryEvaluationMetricLabels](#schemagooglecloudapigeev1canaryevaluationmetriclabels)|false|Required. Labels used to filter the metrics used for a canary evaluation.|
|» startTime|body|string(google-datetime)|false|Required. Start time for the canary evaluation's analysis.|
|» treatment|body|string|false|Required. The newer version that is serving requests.|

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

<h3 id="apigeeorganizationsinstancescanaryevaluationscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.datacollectors.list

<a id="opIdapigee.organizations.datacollectors.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/datacollectors \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/datacollectors`

Lists all data collectors.

<h3 id="apigeeorganizationsdatacollectorslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the organization for which to list data collectors in the following format: `organizations/{org}`.|
|pageSize|query|integer|false|Maximum number of data collectors to return. The page size defaults to 25.|
|pageToken|query|string|false|Page token, returned from a previous ListDataCollectors call, that you can use to retrieve the next page.|
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
  "dataCollectors": [
    {
      "createdAt": "string",
      "description": "string",
      "lastModifiedAt": "string",
      "name": "string",
      "type": "TYPE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="apigeeorganizationsdatacollectorslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ListDataCollectorsResponse](#schemagooglecloudapigeev1listdatacollectorsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.datacollectors.create

<a id="opIdapigee.organizations.datacollectors.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/datacollectors \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "name": "string",
    "type": "TYPE_UNSPECIFIED"
  }'
```

`POST /v1/{parent}/datacollectors`

Creates a new data collector.

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

<h3 id="apigeeorganizationsdatacollectorscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the organization in which to create the data collector in the following format: `organizations/{org}`.|
|dataCollectorId|query|string|false|ID of the data collector. Overrides any ID in the data collector resource. Must be a string beginning with `dc_` that contains only letters, numbers, and underscores.|
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
|body|body|[GoogleCloudApigeeV1DataCollector](#schemagooglecloudapigeev1datacollector)|false|none|
|» description|body|string|false|A description of the data collector.|
|» name|body|string|false|ID of the data collector. Must begin with `dc_`.|
|» type|body|string|false|Immutable. The type of data this data collector will collect.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» type|TYPE_UNSPECIFIED|
|» type|INTEGER|
|» type|FLOAT|
|» type|STRING|
|» type|BOOLEAN|
|» type|DATETIME|

> Example responses

> 200 Response

```json
{
  "createdAt": "string",
  "description": "string",
  "lastModifiedAt": "string",
  "name": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

<h3 id="apigeeorganizationsdatacollectorscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1DataCollector](#schemagooglecloudapigeev1datacollector)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.apis.revisions.debugsessions.list

<a id="opIdapigee.organizations.environments.apis.revisions.debugsessions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/debugsessions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/debugsessions`

Lists debug sessions that are currently active in the given API Proxy revision.

<h3 id="apigeeorganizationsenvironmentsapisrevisionsdebugsessionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the API Proxy revision deployment for which to list debug sessions. Must be of the form: `organizations/{organization}/environments/{environment}/apis/{api}/revisions/{revision}`.|
|pageSize|query|integer|false|Maximum number of debug sessions to return. The page size defaults to 25.|
|pageToken|query|string|false|Page token, returned from a previous ListDebugSessions call, that you can use to retrieve the next page.|
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
  "sessions": [
    {
      "id": "string",
      "timestampMs": "string"
    }
  ]
}
```

<h3 id="apigeeorganizationsenvironmentsapisrevisionsdebugsessionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ListDebugSessionsResponse](#schemagooglecloudapigeev1listdebugsessionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.apis.revisions.debugsessions.create

<a id="opIdapigee.organizations.environments.apis.revisions.debugsessions.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/debugsessions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "count": 0,
    "filter": "string",
    "name": "string",
    "timeout": "string",
    "tracesize": 0,
    "validity": 0
  }'
```

`POST /v1/{parent}/debugsessions`

Creates a debug session for a deployed API Proxy revision.

> Body parameter

```json
{
  "count": 0,
  "filter": "string",
  "name": "string",
  "timeout": "string",
  "tracesize": 0,
  "validity": 0
}
```

<h3 id="apigeeorganizationsenvironmentsapisrevisionsdebugsessionscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the API Proxy revision deployment for which to create the DebugSession. Must be of the form `organizations/{organization}/environments/{environment}/apis/{api}/revisions/{revision}`.|
|timeout|query|string|false|Optional. The time in seconds after which this DebugSession should end. A timeout specified in DebugSession will overwrite this value.|
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
|body|body|[GoogleCloudApigeeV1DebugSession](#schemagooglecloudapigeev1debugsession)|false|none|
|» count|body|integer(int32)|false|Optional. The number of request to be traced. Min = 1, Max = 15, Default = 10.|
|» filter|body|string|false|Optional. A conditional statement which is evaluated against the request message to determine if it should be traced. Syntax matches that of on API Proxy bundle flow Condition.|
|» name|body|string|false|A unique ID for this DebugSession.|
|» timeout|body|string(int64)|false|Optional. The time in seconds after which this DebugSession should end. This value will override the value in query param, if both are provided.|
|» tracesize|body|integer(int32)|false|Optional. The maximum number of bytes captured from the response payload. Min = 0, Max = 5120, Default = 5120.|
|» validity|body|integer(int32)|false|Optional. The length of time, in seconds, that this debug session is valid, starting from when it's received in the control plane. Min = 1, Max = 15, Default = 10.|

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
  "count": 0,
  "createTime": "string",
  "filter": "string",
  "name": "string",
  "timeout": "string",
  "tracesize": 0,
  "validity": 0
}
```

<h3 id="apigeeorganizationsenvironmentsapisrevisionsdebugsessionscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1DebugSession](#schemagooglecloudapigeev1debugsession)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.sharedflows.revisions.deployments.list

<a id="opIdapigee.organizations.sharedflows.revisions.deployments.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/deployments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/deployments`

Lists all deployments of a shared flow revision.

<h3 id="apigeeorganizationssharedflowsrevisionsdeploymentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the API proxy revision for which to return deployment information in the following format: `organizations/{org}/sharedflows/{sharedflow}/revisions/{rev}`.|
|sharedFlows|query|boolean|false|Optional. Flag that specifies whether to return shared flow or API proxy deployments. Set to `true` to return shared flow deployments; set to `false` to return API proxy deployments. Defaults to `false`.|
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
  "deployments": [
    {
      "apiProxy": "string",
      "deployStartTime": "string",
      "environment": "string",
      "errors": [
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
      "instances": [
        {
          "deployedRevisions": [
            {
              "percentage": 0,
              "revision": "string"
            }
          ],
          "deployedRoutes": [
            {
              "basepath": "string",
              "envgroup": "string",
              "environment": "string",
              "percentage": 0
            }
          ],
          "instance": "string"
        }
      ],
      "pods": [
        {
          "appVersion": "string",
          "deploymentStatus": "string",
          "deploymentStatusTime": "string",
          "deploymentTime": "string",
          "podName": "string",
          "podStatus": "string",
          "podStatusTime": "string",
          "statusCode": "string",
          "statusCodeDetails": "string"
        }
      ],
      "revision": "string",
      "routeConflicts": [
        {
          "conflictingDeployment": {
            "apiProxy": "string",
            "basepath": "string",
            "environment": "string",
            "revision": "string"
          },
          "description": "string",
          "environmentGroup": "string"
        }
      ],
      "serviceAccount": "string",
      "state": "RUNTIME_STATE_UNSPECIFIED"
    }
  ]
}
```

<h3 id="apigeeorganizationssharedflowsrevisionsdeploymentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ListDeploymentsResponse](#schemagooglecloudapigeev1listdeploymentsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.developers.list

<a id="opIdapigee.organizations.developers.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/developers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/developers`

Lists all developers in an organization by email address. By default, the response does not include company developers. Set the `includeCompany` query parameter to `true` to include company developers. **Note**: A maximum of 1000 developers are returned in the response. You paginate the list of developers returned using the `startKey` and `count` query parameters.

<h3 id="apigeeorganizationsdeveloperslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the Apigee organization. Use the following structure in your request: `organizations/{org}`.|
|app|query|string|false|Optional. List only Developers that are associated with the app. Note that start_key, count are not applicable for this filter criteria.|
|count|query|string|false|Optional. Number of developers to return in the API call. Use with the `startKey` parameter to provide more targeted filtering. The limit is 1000.|
|expand|query|boolean|false|Specifies whether to expand the results. Set to `true` to expand the results. This query parameter is not valid if you use the `count` or `startKey` query parameters.|
|ids|query|string|false|Optional. List of IDs to include, separated by commas.|
|includeCompany|query|boolean|false|Flag that specifies whether to include company details in the response.|
|startKey|query|string|false|**Note**: Must be used in conjunction with the `count` parameter. Email address of the developer from which to start displaying the list of developers. For example, if the an unfiltered list returns: ``` westley@example.com fezzik@example.com buttercup@example.com ``` and your `startKey` is `fezzik@example.com`, the list returned will be ``` fezzik@example.com buttercup@example.com ```|
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
  "developer": [
    {
      "accessType": "string",
      "appFamily": "string",
      "apps": [
        "string"
      ],
      "attributes": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "companies": [
        "string"
      ],
      "createdAt": "string",
      "developerId": "string",
      "email": "string",
      "firstName": "string",
      "lastModifiedAt": "string",
      "lastName": "string",
      "organizationName": "string",
      "status": "string",
      "userName": "string"
    }
  ]
}
```

<h3 id="apigeeorganizationsdeveloperslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ListOfDevelopersResponse](#schemagooglecloudapigeev1listofdevelopersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.developers.create

<a id="opIdapigee.organizations.developers.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/developers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accessType": "string",
    "appFamily": "string",
    "apps": [
      "string"
    ],
    "attributes": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "companies": [
      "string"
    ],
    "developerId": "string",
    "email": "string",
    "firstName": "string",
    "lastName": "string",
    "userName": "string"
  }'
```

`POST /v1/{parent}/developers`

Creates a developer. Once created, the developer can register an app and obtain an API key. At creation time, a developer is set as `active`. To change the developer status, use the SetDeveloperStatus API.

> Body parameter

```json
{
  "accessType": "string",
  "appFamily": "string",
  "apps": [
    "string"
  ],
  "attributes": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "companies": [
    "string"
  ],
  "developerId": "string",
  "email": "string",
  "firstName": "string",
  "lastName": "string",
  "userName": "string"
}
```

<h3 id="apigeeorganizationsdeveloperscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the Apigee organization in which the developer is created. Use the following structure in your request: `organizations/{org}`.|
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
|body|body|[GoogleCloudApigeeV1Developer](#schemagooglecloudapigeev1developer)|false|none|
|» accessType|body|string|false|Access type.|
|» appFamily|body|string|false|Developer app family.|
|» apps|body|[string]|false|List of apps associated with the developer.|
|» attributes|body|[[GoogleCloudApigeeV1Attribute](#schemagooglecloudapigeev1attribute)]|false|Optional. Developer attributes (name/value pairs). The custom attribute limit is 18.|
|» companies|body|[string]|false|List of companies associated with the developer.|
|» developerId|body|string|false|ID of the developer. **Note**: IDs are generated internally by Apigee and are not guaranteed to stay the same over time.|
|» email|body|string|false|Required. Email address of the developer. This value is used to uniquely identify the developer in Apigee hybrid. Note that the email address has to be in lowercase only.|
|» firstName|body|string|false|Required. First name of the developer.|
|» lastName|body|string|false|Required. Last name of the developer.|
|» userName|body|string|false|Required. User name of the developer. Not used by Apigee hybrid.|

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
  "accessType": "string",
  "appFamily": "string",
  "apps": [
    "string"
  ],
  "attributes": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "companies": [
    "string"
  ],
  "createdAt": "string",
  "developerId": "string",
  "email": "string",
  "firstName": "string",
  "lastModifiedAt": "string",
  "lastName": "string",
  "organizationName": "string",
  "status": "string",
  "userName": "string"
}
```

<h3 id="apigeeorganizationsdeveloperscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1Developer](#schemagooglecloudapigeev1developer)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.endpointAttachments.list

<a id="opIdapigee.organizations.endpointAttachments.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/endpointAttachments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/endpointAttachments`

Lists the endpoint attachments in an organization.

<h3 id="apigeeorganizationsendpointattachmentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the organization for which to list endpoint attachments. Use the following structure in your request: `organizations/{org}`|
|pageSize|query|integer|false|Optional. Maximum number of endpoint attachments to return. If unspecified, at most 25 attachments will be returned.|
|pageToken|query|string|false|Optional. Page token, returned from a previous `ListEndpointAttachments` call, that you can use to retrieve the next page.|
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
  "endpointAttachments": [
    {
      "connectionState": "CONNECTION_STATE_UNSPECIFIED",
      "host": "string",
      "location": "string",
      "name": "string",
      "serviceAttachment": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="apigeeorganizationsendpointattachmentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ListEndpointAttachmentsResponse](#schemagooglecloudapigeev1listendpointattachmentsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.endpointAttachments.create

<a id="opIdapigee.organizations.endpointAttachments.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/endpointAttachments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "location": "string",
    "name": "string",
    "serviceAttachment": "string"
  }'
```

`POST /v1/{parent}/endpointAttachments`

Creates an endpoint attachment. **Note:** Not supported for Apigee hybrid.

> Body parameter

```json
{
  "location": "string",
  "name": "string",
  "serviceAttachment": "string"
}
```

<h3 id="apigeeorganizationsendpointattachmentscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Organization the endpoint attachment will be created in.|
|endpointAttachmentId|query|string|false|ID to use for the endpoint attachment. ID must start with a lowercase letter followed by up to 31 lowercase letters, numbers, or hyphens, and cannot end with a hyphen. The minimum length is 2.|
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
|body|body|[GoogleCloudApigeeV1EndpointAttachment](#schemagooglecloudapigeev1endpointattachment)|false|none|
|» location|body|string|false|Required. Location of the endpoint attachment.|
|» name|body|string|false|Name of the endpoint attachment. Use the following structure in your request: `organizations/{org}/endpointAttachments/{endpoint_attachment}`|
|» serviceAttachment|body|string|false|Format: projects/*/regions/*/serviceAttachments/*|

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

<h3 id="apigeeorganizationsendpointattachmentscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.keyvaluemaps.entries.list

<a id="opIdapigee.organizations.keyvaluemaps.entries.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/entries \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/entries`

Lists key value entries for key values maps scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.

<h3 id="apigeeorganizationskeyvaluemapsentrieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Scope as indicated by the URI in which to list key value maps. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}`.|
|pageSize|query|integer|false|Optional. Maximum number of key value entries to return. If unspecified, at most 100 entries will be returned.|
|pageToken|query|string|false|Optional. Page token. If provides, must be a valid key value entry returned from a previous call that can be used to retrieve the next page.|
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
  "keyValueEntries": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="apigeeorganizationskeyvaluemapsentrieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ListKeyValueEntriesResponse](#schemagooglecloudapigeev1listkeyvalueentriesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.keyvaluemaps.entries.create

<a id="opIdapigee.organizations.keyvaluemaps.entries.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/entries \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "value": "string"
  }'
```

`POST /v1/{parent}/entries`

Creates key value entries in a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.

> Body parameter

```json
{
  "name": "string",
  "value": "string"
}
```

<h3 id="apigeeorganizationskeyvaluemapsentriescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Scope as indicated by the URI in which to create the key value map entry. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}`.|
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
|body|body|[GoogleCloudApigeeV1KeyValueEntry](#schemagooglecloudapigeev1keyvalueentry)|false|none|
|» name|body|string|false|Resource URI that can be used to identify the scope of the key value map entries.|
|» value|body|string|false|Required. Data or payload that is being retrieved and associated with the unique key.|

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
  "name": "string",
  "value": "string"
}
```

<h3 id="apigeeorganizationskeyvaluemapsentriescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1KeyValueEntry](#schemagooglecloudapigeev1keyvalueentry)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.envgroups.list

<a id="opIdapigee.organizations.envgroups.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/envgroups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/envgroups`

Lists all environment groups.

<h3 id="apigeeorganizationsenvgroupslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the organization for which to list environment groups in the following format: `organizations/{org}`.|
|pageSize|query|integer|false|Maximum number of environment groups to return. The page size defaults to 25.|
|pageToken|query|string|false|Page token, returned from a previous ListEnvironmentGroups call, that you can use to retrieve the next page.|
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
  "environmentGroups": [
    {
      "createdAt": "string",
      "hostnames": [
        "string"
      ],
      "lastModifiedAt": "string",
      "name": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="apigeeorganizationsenvgroupslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ListEnvironmentGroupsResponse](#schemagooglecloudapigeev1listenvironmentgroupsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.envgroups.create

<a id="opIdapigee.organizations.envgroups.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/envgroups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "hostnames": [
      "string"
    ],
    "name": "string"
  }'
```

`POST /v1/{parent}/envgroups`

Creates a new environment group.

> Body parameter

```json
{
  "hostnames": [
    "string"
  ],
  "name": "string"
}
```

<h3 id="apigeeorganizationsenvgroupscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the organization in which to create the environment group in the following format: `organizations/{org}`.|
|name|query|string|false|ID of the environment group. Overrides any ID in the environment_group resource.|
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
|body|body|[GoogleCloudApigeeV1EnvironmentGroup](#schemagooglecloudapigeev1environmentgroup)|false|none|
|» hostnames|body|[string]|false|Required. Host names for this environment group.|
|» name|body|string|false|ID of the environment group.|

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

<h3 id="apigeeorganizationsenvgroupscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.securityProfiles.environments.create

<a id="opIdapigee.organizations.securityProfiles.environments.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/environments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "securityProfileRevisionId": "string"
  }'
```

`POST /v1/{parent}/environments`

CreateSecurityProfileEnvironmentAssociation creates profile environment association i.e. attaches environment to security profile.

> Body parameter

```json
{
  "name": "string",
  "securityProfileRevisionId": "string"
}
```

<h3 id="apigeeorganizationssecurityprofilesenvironmentscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of organization and security profile ID. Format: organizations/{org}/securityProfiles/{profile}|
|name|query|string|false|Optional. Name of the environment.|
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
|body|body|[GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation](#schemagooglecloudapigeev1securityprofileenvironmentassociation)|false|none|
|» name|body|string|false|Immutable. Name of the profile-environment association resource. Format: organizations/{org}/securityProfiles/{profile}/environments/{env}|
|» securityProfileRevisionId|body|string(int64)|false|Revision ID of the security profile.|

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
  "attachTime": "string",
  "name": "string",
  "securityProfileRevisionId": "string"
}
```

<h3 id="apigeeorganizationssecurityprofilesenvironmentscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation](#schemagooglecloudapigeev1securityprofileenvironmentassociation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.hostQueries.list

<a id="opIdapigee.organizations.hostQueries.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/hostQueries \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/hostQueries`

Return a list of Asynchronous Queries at host level.

<h3 id="apigeeorganizationshostquerieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource name. Must be of the form `organizations/{org}`.|
|dataset|query|string|false|Filter response list by dataset. Example: `api`, `mint`|
|envgroupHostname|query|string|false|Required. Filter response list by hostname.|
|from|query|string|false|Filter response list by returning asynchronous queries that created after this date time. Time must be in ISO date-time format like '2011-12-03T10:15:30Z'.|
|inclQueriesWithoutReport|query|string|false|Flag to include asynchronous queries that don't have a report denifition.|
|status|query|string|false|Filter response list by asynchronous query status.|
|submittedBy|query|string|false|Filter response list by user who submitted queries.|
|to|query|string|false|Filter response list by returning asynchronous queries that created before this date time. Time must be in ISO date-time format like '2011-12-03T10:16:30Z'.|
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
  "queries": [
    {
      "created": "string",
      "envgroupHostname": "string",
      "error": "string",
      "executionTime": "string",
      "name": "string",
      "queryParams": {
        "dimensions": [
          "string"
        ],
        "endTimestamp": "string",
        "metrics": [
          "string"
        ],
        "outputFormat": "string",
        "startTimestamp": "string",
        "timeUnit": "string"
      },
      "reportDefinitionId": "string",
      "result": {
        "expires": "string",
        "self": "string"
      },
      "resultFileSize": "string",
      "resultRows": "string",
      "self": "string",
      "state": "string",
      "updated": "string"
    }
  ]
}
```

<h3 id="apigeeorganizationshostquerieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ListAsyncQueriesResponse](#schemagooglecloudapigeev1listasyncqueriesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.hostQueries.create

<a id="opIdapigee.organizations.hostQueries.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/hostQueries \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "csvDelimiter": "string",
    "dimensions": [
      "string"
    ],
    "envgroupHostname": "string",
    "filter": "string",
    "groupByTimeUnit": "string",
    "limit": 0,
    "metrics": [
      {
        "alias": "string",
        "function": "string",
        "name": "string",
        "operator": "string",
        "value": "string"
      }
    ],
    "name": "string",
    "outputFormat": "string",
    "reportDefinitionId": "string",
    "timeRange": null
  }'
```

`POST /v1/{parent}/hostQueries`

Submit a query at host level to be processed in the background. If the submission of the query succeeds, the API returns a 201 status and an ID that refer to the query. In addition to the HTTP status 201, the `state` of "enqueued" means that the request succeeded.

> Body parameter

```json
{
  "csvDelimiter": "string",
  "dimensions": [
    "string"
  ],
  "envgroupHostname": "string",
  "filter": "string",
  "groupByTimeUnit": "string",
  "limit": 0,
  "metrics": [
    {
      "alias": "string",
      "function": "string",
      "name": "string",
      "operator": "string",
      "value": "string"
    }
  ],
  "name": "string",
  "outputFormat": "string",
  "reportDefinitionId": "string",
  "timeRange": null
}
```

<h3 id="apigeeorganizationshostqueriescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource name. Must be of the form `organizations/{org}`.|
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
|body|body|[GoogleCloudApigeeV1Query](#schemagooglecloudapigeev1query)|false|none|
|» csvDelimiter|body|string|false|Delimiter used in the CSV file, if `outputFormat` is set to `csv`. Defaults to the `,` (comma) character. Supported delimiter characters include comma (`,`), pipe (`\|`), and tab (`\t`).|
|» dimensions|body|[string]|false|A list of dimensions. https://docs.apigee.com/api-platform/analytics/analytics-reference#dimensions|
|» envgroupHostname|body|string|false|Hostname needs to be specified if query intends to run at host level. This field is only allowed when query is submitted by CreateHostAsyncQuery where analytics data will be grouped by organization and hostname.|
|» filter|body|string|false|Boolean expression that can be used to filter data. Filter expressions can be combined using AND/OR terms and should be fully parenthesized to avoid ambiguity. See Analytics metrics, dimensions, and filters reference https://docs.apigee.com/api-platform/analytics/analytics-reference for more information on the fields available to filter on. For more information on the tokens that you use to build filter expressions, see Filter expression syntax. https://docs.apigee.com/api-platform/analytics/asynch-reports-api#filter-expression-syntax|
|» groupByTimeUnit|body|string|false|Time unit used to group the result set. Valid values include: second, minute, hour, day, week, or month. If a query includes groupByTimeUnit, then the result is an aggregation based on the specified time unit and the resultant timestamp does not include milliseconds precision. If a query omits groupByTimeUnit, then the resultant timestamp includes milliseconds precision.|
|» limit|body|integer(int32)|false|Maximum number of rows that can be returned in the result.|
|» metrics|body|[[GoogleCloudApigeeV1QueryMetric](#schemagooglecloudapigeev1querymetric)]|false|A list of Metrics.|
|» name|body|string|false|Asynchronous Query Name.|
|» outputFormat|body|string|false|Valid values include: `csv` or `json`. Defaults to `json`. Note: Configure the delimiter for CSV output using the csvDelimiter property.|
|» reportDefinitionId|body|string|false|Asynchronous Report ID.|
|» timeRange|body|object|false|Required. Time range for the query. Can use the following predefined strings to specify the time range: `last60minutes` `last24hours` `last7days` Or, specify the timeRange as a structure describing start and end timestamps in the ISO format: yyyy-mm-ddThh:mm:ssZ. Example: "timeRange": { "start": "2018-07-29T00:13:00Z", "end": "2018-08-01T00:18:00Z" }|

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
  "created": "string",
  "envgroupHostname": "string",
  "error": "string",
  "executionTime": "string",
  "name": "string",
  "queryParams": {
    "dimensions": [
      "string"
    ],
    "endTimestamp": "string",
    "metrics": [
      "string"
    ],
    "outputFormat": "string",
    "startTimestamp": "string",
    "timeUnit": "string"
  },
  "reportDefinitionId": "string",
  "result": {
    "expires": "string",
    "self": "string"
  },
  "resultFileSize": "string",
  "resultRows": "string",
  "self": "string",
  "state": "string",
  "updated": "string"
}
```

<h3 id="apigeeorganizationshostqueriescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1AsyncQuery](#schemagooglecloudapigeev1asyncquery)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.hostSecurityReports.list

<a id="opIdapigee.organizations.hostSecurityReports.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/hostSecurityReports \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/hostSecurityReports`

Return a list of Security Reports at host level.

<h3 id="apigeeorganizationshostsecurityreportslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource name. Must be of the form `organizations/{org}`.|
|dataset|query|string|false|Filter response list by dataset. Example: `api`, `mint`|
|envgroupHostname|query|string|false|Required. Filter response list by hostname.|
|from|query|string|false|Filter response list by returning security reports that created after this date time. Time must be in ISO date-time format like '2011-12-03T10:15:30Z'.|
|pageSize|query|integer|false|The maximum number of security report to return in the list response.|
|pageToken|query|string|false|Token returned from the previous list response to fetch the next page.|
|status|query|string|false|Filter response list by security report status.|
|submittedBy|query|string|false|Filter response list by user who submitted queries.|
|to|query|string|false|Filter response list by returning security reports that created before this date time. Time must be in ISO date-time format like '2011-12-03T10:16:30Z'.|
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
  "securityReports": [
    {
      "created": "string",
      "displayName": "string",
      "envgroupHostname": "string",
      "error": "string",
      "executionTime": "string",
      "queryParams": {
        "dimensions": [
          "string"
        ],
        "endTimestamp": "string",
        "metrics": [
          "string"
        ],
        "mimeType": "string",
        "startTimestamp": "string",
        "timeUnit": "string"
      },
      "reportDefinitionId": "string",
      "result": {
        "expires": "string",
        "self": "string"
      },
      "resultFileSize": "string",
      "resultRows": "string",
      "self": "string",
      "state": "string",
      "updated": "string"
    }
  ]
}
```

<h3 id="apigeeorganizationshostsecurityreportslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ListSecurityReportsResponse](#schemagooglecloudapigeev1listsecurityreportsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.hostSecurityReports.create

<a id="opIdapigee.organizations.hostSecurityReports.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/hostSecurityReports \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "csvDelimiter": "string",
    "dimensions": [
      "string"
    ],
    "displayName": "string",
    "envgroupHostname": "string",
    "filter": "string",
    "groupByTimeUnit": "string",
    "limit": 0,
    "metrics": [
      {
        "aggregationFunction": "string",
        "alias": "string",
        "name": "string",
        "operator": "string",
        "value": "string"
      }
    ],
    "mimeType": "string",
    "reportDefinitionId": "string",
    "timeRange": null
  }'
```

`POST /v1/{parent}/hostSecurityReports`

Submit a query at host level to be processed in the background. If the submission of the query succeeds, the API returns a 201 status and an ID that refer to the query. In addition to the HTTP status 201, the `state` of "enqueued" means that the request succeeded.

> Body parameter

```json
{
  "csvDelimiter": "string",
  "dimensions": [
    "string"
  ],
  "displayName": "string",
  "envgroupHostname": "string",
  "filter": "string",
  "groupByTimeUnit": "string",
  "limit": 0,
  "metrics": [
    {
      "aggregationFunction": "string",
      "alias": "string",
      "name": "string",
      "operator": "string",
      "value": "string"
    }
  ],
  "mimeType": "string",
  "reportDefinitionId": "string",
  "timeRange": null
}
```

<h3 id="apigeeorganizationshostsecurityreportscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource name. Must be of the form `organizations/{org}`.|
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
|body|body|[GoogleCloudApigeeV1SecurityReportQuery](#schemagooglecloudapigeev1securityreportquery)|false|none|
|» csvDelimiter|body|string|false|Delimiter used in the CSV file, if `outputFormat` is set to `csv`. Defaults to the `,` (comma) character. Supported delimiter characters include comma (`,`), pipe (`\|`), and tab (`\t`).|
|» dimensions|body|[string]|false|A list of dimensions. https://docs.apigee.com/api-platform/analytics/analytics-reference#dimensions|
|» displayName|body|string|false|Security Report display name which users can specify.|
|» envgroupHostname|body|string|false|Hostname needs to be specified if query intends to run at host level. This field is only allowed when query is submitted by CreateHostSecurityReport where analytics data will be grouped by organization and hostname.|
|» filter|body|string|false|Boolean expression that can be used to filter data. Filter expressions can be combined using AND/OR terms and should be fully parenthesized to avoid ambiguity. See Analytics metrics, dimensions, and filters reference https://docs.apigee.com/api-platform/analytics/analytics-reference for more information on the fields available to filter on. For more information on the tokens that you use to build filter expressions, see Filter expression syntax. https://docs.apigee.com/api-platform/analytics/asynch-reports-api#filter-expression-syntax|
|» groupByTimeUnit|body|string|false|Time unit used to group the result set. Valid values include: second, minute, hour, day, week, or month. If a query includes groupByTimeUnit, then the result is an aggregation based on the specified time unit and the resultant timestamp does not include milliseconds precision. If a query omits groupByTimeUnit, then the resultant timestamp includes milliseconds precision.|
|» limit|body|integer(int32)|false|Maximum number of rows that can be returned in the result.|
|» metrics|body|[[GoogleCloudApigeeV1SecurityReportQueryMetric](#schemagooglecloudapigeev1securityreportquerymetric)]|false|A list of Metrics.|
|» mimeType|body|string|false|Valid values include: `csv` or `json`. Defaults to `json`. Note: Configure the delimiter for CSV output using the csvDelimiter property.|
|» reportDefinitionId|body|string|false|Report Definition ID.|
|» timeRange|body|object|false|Required. Time range for the query. Can use the following predefined strings to specify the time range: `last60minutes` `last24hours` `last7days` Or, specify the timeRange as a structure describing start and end timestamps in the ISO format: yyyy-mm-ddThh:mm:ssZ. Example: "timeRange": { "start": "2018-07-29T00:13:00Z", "end": "2018-08-01T00:18:00Z" }|

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
  "created": "string",
  "displayName": "string",
  "envgroupHostname": "string",
  "error": "string",
  "executionTime": "string",
  "queryParams": {
    "dimensions": [
      "string"
    ],
    "endTimestamp": "string",
    "metrics": [
      "string"
    ],
    "mimeType": "string",
    "startTimestamp": "string",
    "timeUnit": "string"
  },
  "reportDefinitionId": "string",
  "result": {
    "expires": "string",
    "self": "string"
  },
  "resultFileSize": "string",
  "resultRows": "string",
  "self": "string",
  "state": "string",
  "updated": "string"
}
```

<h3 id="apigeeorganizationshostsecurityreportscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1SecurityReport](#schemagooglecloudapigeev1securityreport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.instances.list

<a id="opIdapigee.organizations.instances.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/instances \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/instances`

Lists all Apigee runtime instances for the organization. **Note:** Not supported for Apigee hybrid.

<h3 id="apigeeorganizationsinstanceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the organization. Use the following structure in your request: `organizations/{org}`.|
|pageSize|query|integer|false|Maximum number of instances to return. Defaults to 25.|
|pageToken|query|string|false|Page token, returned from a previous ListInstances call, that you can use to retrieve the next page of content.|
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
  "instances": [
    {
      "consumerAcceptList": [
        "string"
      ],
      "createdAt": "string",
      "description": "string",
      "diskEncryptionKeyName": "string",
      "displayName": "string",
      "host": "string",
      "ipRange": "string",
      "lastModifiedAt": "string",
      "location": "string",
      "name": "string",
      "peeringCidrRange": "CIDR_RANGE_UNSPECIFIED",
      "port": "string",
      "runtimeVersion": "string",
      "serviceAttachment": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="apigeeorganizationsinstanceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ListInstancesResponse](#schemagooglecloudapigeev1listinstancesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.instances.create

<a id="opIdapigee.organizations.instances.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/instances \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "consumerAcceptList": [
      "string"
    ],
    "description": "string",
    "diskEncryptionKeyName": "string",
    "displayName": "string",
    "ipRange": "string",
    "location": "string",
    "name": "string",
    "peeringCidrRange": "CIDR_RANGE_UNSPECIFIED"
  }'
```

`POST /v1/{parent}/instances`

Creates an Apigee runtime instance. The instance is accessible from the authorized network configured on the organization. **Note:** Not supported for Apigee hybrid.

> Body parameter

```json
{
  "consumerAcceptList": [
    "string"
  ],
  "description": "string",
  "diskEncryptionKeyName": "string",
  "displayName": "string",
  "ipRange": "string",
  "location": "string",
  "name": "string",
  "peeringCidrRange": "CIDR_RANGE_UNSPECIFIED"
}
```

<h3 id="apigeeorganizationsinstancescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the organization. Use the following structure in your request: `organizations/{org}`.|
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
|body|body|[GoogleCloudApigeeV1Instance](#schemagooglecloudapigeev1instance)|false|none|
|» consumerAcceptList|body|[string]|false|Optional. Customer accept list represents the list of projects (id/number) on customer side that can privately connect to the service attachment. It is an optional field which the customers can provide during the instance creation. By default, the customer project associated with the Apigee organization will be included to the list.|
|» description|body|string|false|Optional. Description of the instance.|
|» diskEncryptionKeyName|body|string|false|Customer Managed Encryption Key (CMEK) used for disk and volume encryption. Required for Apigee paid subscriptions only. Use the following format: `projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)`|
|» displayName|body|string|false|Optional. Display name for the instance.|
|» ipRange|body|string|false|Optional. Comma-separated list of CIDR blocks of length 22 and/or 28 used to create the Apigee instance. Providing CIDR ranges is optional. You can provide just /22 or /28 or both (or neither). Ranges you provide should be freely available as part of a larger named range you have allocated to the Service Networking peering. If this parameter is not provided, Apigee automatically requests an available /22 and /28 CIDR block from Service Networking. Use the /22 CIDR block for configuring your firewall needs to allow traffic from Apigee. Input formats: `a.b.c.d/22` or `e.f.g.h/28` or `a.b.c.d/22,e.f.g.h/28`|
|» location|body|string|false|Required. Compute Engine location where the instance resides.|
|» name|body|string|false|Required. Resource ID of the instance. Values must match the regular expression `^a-z{0,30}[a-z\d]$`.|
|» peeringCidrRange|body|string|false|Optional. Size of the CIDR block range that will be reserved by the instance. PAID organizations support `SLASH_16` to `SLASH_20` and defaults to `SLASH_16`. Evaluation organizations support only `SLASH_23`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» peeringCidrRange|CIDR_RANGE_UNSPECIFIED|
|» peeringCidrRange|SLASH_16|
|» peeringCidrRange|SLASH_17|
|» peeringCidrRange|SLASH_18|
|» peeringCidrRange|SLASH_19|
|» peeringCidrRange|SLASH_20|
|» peeringCidrRange|SLASH_22|
|» peeringCidrRange|SLASH_23|

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

<h3 id="apigeeorganizationsinstancescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.developers.apps.keys.create

<a id="opIdapigee.organizations.developers.apps.keys.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/keys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "apiProducts": [
      null
    ],
    "attributes": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "consumerKey": "string",
    "consumerSecret": "string",
    "expiresAt": "string",
    "expiresInSeconds": "string",
    "issuedAt": "string",
    "scopes": [
      "string"
    ],
    "status": "string"
  }'
```

`POST /v1/{parent}/keys`

Creates a custom consumer key and secret for a developer app. This is particularly useful if you want to migrate existing consumer keys and secrets to Apigee from another system. Consumer keys and secrets can contain letters, numbers, underscores, and hyphens. No other special characters are allowed. To avoid service disruptions, a consumer key and secret should not exceed 2 KBs each. **Note**: When creating the consumer key and secret, an association to API products will not be made. Therefore, you should not specify the associated API products in your request. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created. If a consumer key and secret already exist, you can keep them or delete them using the DeleteDeveloperAppKey API.

> Body parameter

```json
{
  "apiProducts": [
    null
  ],
  "attributes": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "consumerKey": "string",
  "consumerSecret": "string",
  "expiresAt": "string",
  "expiresInSeconds": "string",
  "issuedAt": "string",
  "scopes": [
    "string"
  ],
  "status": "string"
}
```

<h3 id="apigeeorganizationsdevelopersappskeyscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Parent of the developer app key. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps`|
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
|body|body|[GoogleCloudApigeeV1DeveloperAppKey](#schemagooglecloudapigeev1developerappkey)|false|none|
|» apiProducts|body|[object]|false|List of API products for which the credential can be used. **Note**: Do not specify the list of API products when creating a consumer key and secret for a developer app. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created.|
|» attributes|body|[[GoogleCloudApigeeV1Attribute](#schemagooglecloudapigeev1attribute)]|false|List of attributes associated with the credential.|
|» consumerKey|body|string|false|Consumer key.|
|» consumerSecret|body|string|false|Secret key.|
|» expiresAt|body|string(int64)|false|Time the developer app expires in milliseconds since epoch.|
|» expiresInSeconds|body|string(int64)|false|Input only. Expiration time, in seconds, for the consumer key. If not set or left to the default value of `-1`, the API key never expires. The expiration time can't be updated after it is set.|
|» issuedAt|body|string(int64)|false|Time the developer app was created in milliseconds since epoch.|
|» scopes|body|[string]|false|Scopes to apply to the app. The specified scope names must already be defined for the API product that you associate with the app.|
|» status|body|string|false|Status of the credential. Valid values include `approved` or `revoked`.|

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
  "apiProducts": [
    null
  ],
  "attributes": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "consumerKey": "string",
  "consumerSecret": "string",
  "expiresAt": "string",
  "expiresInSeconds": "string",
  "issuedAt": "string",
  "scopes": [
    "string"
  ],
  "status": "string"
}
```

<h3 id="apigeeorganizationsdevelopersappskeyscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1DeveloperAppKey](#schemagooglecloudapigeev1developerappkey)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.developers.apps.keys.create.create

<a id="opIdapigee.organizations.developers.apps.keys.create.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/keys/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "apiProducts": [
      null
    ],
    "attributes": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "consumerKey": "string",
    "consumerSecret": "string",
    "expiresAt": "string",
    "expiresInSeconds": "string",
    "issuedAt": "string",
    "scopes": [
      "string"
    ],
    "status": "string"
  }'
```

`POST /v1/{parent}/keys/create`

Creates a custom consumer key and secret for a developer app. This is particularly useful if you want to migrate existing consumer keys and secrets to Apigee from another system. Consumer keys and secrets can contain letters, numbers, underscores, and hyphens. No other special characters are allowed. To avoid service disruptions, a consumer key and secret should not exceed 2 KBs each. **Note**: When creating the consumer key and secret, an association to API products will not be made. Therefore, you should not specify the associated API products in your request. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created. If a consumer key and secret already exist, you can keep them or delete them using the DeleteDeveloperAppKey API.

> Body parameter

```json
{
  "apiProducts": [
    null
  ],
  "attributes": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "consumerKey": "string",
  "consumerSecret": "string",
  "expiresAt": "string",
  "expiresInSeconds": "string",
  "issuedAt": "string",
  "scopes": [
    "string"
  ],
  "status": "string"
}
```

<h3 id="apigeeorganizationsdevelopersappskeyscreatecreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Parent of the developer app key. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps`|
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
|body|body|[GoogleCloudApigeeV1DeveloperAppKey](#schemagooglecloudapigeev1developerappkey)|false|none|
|» apiProducts|body|[object]|false|List of API products for which the credential can be used. **Note**: Do not specify the list of API products when creating a consumer key and secret for a developer app. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created.|
|» attributes|body|[[GoogleCloudApigeeV1Attribute](#schemagooglecloudapigeev1attribute)]|false|List of attributes associated with the credential.|
|» consumerKey|body|string|false|Consumer key.|
|» consumerSecret|body|string|false|Secret key.|
|» expiresAt|body|string(int64)|false|Time the developer app expires in milliseconds since epoch.|
|» expiresInSeconds|body|string(int64)|false|Input only. Expiration time, in seconds, for the consumer key. If not set or left to the default value of `-1`, the API key never expires. The expiration time can't be updated after it is set.|
|» issuedAt|body|string(int64)|false|Time the developer app was created in milliseconds since epoch.|
|» scopes|body|[string]|false|Scopes to apply to the app. The specified scope names must already be defined for the API product that you associate with the app.|
|» status|body|string|false|Status of the credential. Valid values include `approved` or `revoked`.|

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
  "apiProducts": [
    null
  ],
  "attributes": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "consumerKey": "string",
  "consumerSecret": "string",
  "expiresAt": "string",
  "expiresInSeconds": "string",
  "issuedAt": "string",
  "scopes": [
    "string"
  ],
  "status": "string"
}
```

<h3 id="apigeeorganizationsdevelopersappskeyscreatecreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1DeveloperAppKey](#schemagooglecloudapigeev1developerappkey)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.keystores.create

<a id="opIdapigee.organizations.environments.keystores.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/keystores \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string"
  }'
```

`POST /v1/{parent}/keystores`

Creates a keystore or truststore. - Keystore: Contains certificates and their associated keys. - Truststore: Contains trusted certificates used to validate a server's certificate. These certificates are typically self-signed certificates or certificates that are not signed by a trusted CA.

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="apigeeorganizationsenvironmentskeystorescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the environment in which to create the keystore. Use the following format in your request: `organizations/{org}/environments/{env}`|
|name|query|string|false|Optional. Name of the keystore. Overrides the value in Keystore.|
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
|body|body|[GoogleCloudApigeeV1Keystore](#schemagooglecloudapigeev1keystore)|false|none|
|» name|body|string|false|Required. Resource ID for this keystore. Values must match the regular expression `[\w[:space:].-]{1,255}`.|

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
  "aliases": [
    "string"
  ],
  "name": "string"
}
```

<h3 id="apigeeorganizationsenvironmentskeystorescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1Keystore](#schemagooglecloudapigeev1keystore)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.keyvaluemaps.create

<a id="opIdapigee.organizations.keyvaluemaps.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/keyvaluemaps \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "encrypted": true,
    "name": "string"
  }'
```

`POST /v1/{parent}/keyvaluemaps`

Creates a key value map in an organization.

> Body parameter

```json
{
  "encrypted": true,
  "name": "string"
}
```

<h3 id="apigeeorganizationskeyvaluemapscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the organization in which to create the key value map file. Use the following structure in your request: `organizations/{org}`|
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
|body|body|[GoogleCloudApigeeV1KeyValueMap](#schemagooglecloudapigeev1keyvaluemap)|false|none|
|» encrypted|body|boolean|false|Required. Flag that specifies whether entry values will be encrypted. This field is retained for backward compatibility and the value of encrypted will always be `true`. Apigee X and hybrid do not support unencrypted key value maps.|
|» name|body|string|false|Required. ID of the key value map.|

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
  "encrypted": true,
  "name": "string"
}
```

<h3 id="apigeeorganizationskeyvaluemapscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1KeyValueMap](#schemagooglecloudapigeev1keyvaluemap)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.instances.natAddresses.list

<a id="opIdapigee.organizations.instances.natAddresses.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/natAddresses \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/natAddresses`

Lists the NAT addresses for an Apigee instance. **Note:** Not supported for Apigee hybrid.

<h3 id="apigeeorganizationsinstancesnataddresseslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the instance. Use the following structure in your request: `organizations/{org}/instances/{instance}`|
|pageSize|query|integer|false|Maximum number of natAddresses to return. Defaults to 25.|
|pageToken|query|string|false|Page token, returned from a previous ListNatAddresses call, that you can use to retrieve the next page of content.|
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
  "natAddresses": [
    {
      "ipAddress": "string",
      "name": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="apigeeorganizationsinstancesnataddresseslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ListNatAddressesResponse](#schemagooglecloudapigeev1listnataddressesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.instances.natAddresses.create

<a id="opIdapigee.organizations.instances.natAddresses.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/natAddresses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string"
  }'
```

`POST /v1/{parent}/natAddresses`

Creates a NAT address. The address is created in the RESERVED state and a static external IP address will be provisioned. At this time, the instance will not use this IP address for Internet egress traffic. The address can be activated for use once any required firewall IP whitelisting has been completed. **Note:** Not supported for Apigee hybrid.

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="apigeeorganizationsinstancesnataddressescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the instance. Use the following structure in your request: `organizations/{org}/instances/{instance}`|
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
|body|body|[GoogleCloudApigeeV1NatAddress](#schemagooglecloudapigeev1nataddress)|false|none|
|» name|body|string|false|Required. Resource ID of the NAT address.|

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

<h3 id="apigeeorganizationsinstancesnataddressescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.traceConfig.overrides.list

<a id="opIdapigee.organizations.environments.traceConfig.overrides.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/overrides \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/overrides`

Lists all of the distributed trace configuration overrides in an environment.

<h3 id="apigeeorganizationsenvironmentstraceconfigoverrideslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent resource of the trace configuration override. Use the following structure in your request: "organizations/*/environments/*/traceConfig".|
|pageSize|query|integer|false|Maximum number of trace configuration overrides to return. If not specified, the maximum number returned is 25. The maximum number cannot exceed 100.|
|pageToken|query|string|false|A page token, returned from a previous `ListTraceConfigOverrides` call. Token value that can be used to retrieve the subsequent page. When paginating, all other parameters provided to `ListTraceConfigOverrides` must match those specified in the call to obtain the page token.|
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
  "traceConfigOverrides": [
    {
      "apiProxy": "string",
      "name": "string",
      "samplingConfig": {
        "sampler": "SAMPLER_UNSPECIFIED",
        "samplingRate": 0
      }
    }
  ]
}
```

<h3 id="apigeeorganizationsenvironmentstraceconfigoverrideslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ListTraceConfigOverridesResponse](#schemagooglecloudapigeev1listtraceconfigoverridesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.traceConfig.overrides.create

<a id="opIdapigee.organizations.environments.traceConfig.overrides.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/overrides \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "apiProxy": "string",
    "name": "string",
    "samplingConfig": {
      "sampler": "SAMPLER_UNSPECIFIED",
      "samplingRate": 0
    }
  }'
```

`POST /v1/{parent}/overrides`

Creates a trace configuration override. The response contains a system-generated UUID, that can be used to view, update, or delete the configuration override. Use the List API to view the existing trace configuration overrides.

> Body parameter

```json
{
  "apiProxy": "string",
  "name": "string",
  "samplingConfig": {
    "sampler": "SAMPLER_UNSPECIFIED",
    "samplingRate": 0
  }
}
```

<h3 id="apigeeorganizationsenvironmentstraceconfigoverridescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent resource of the trace configuration override. Use the following structure in your request. "organizations/*/environments/*/traceConfig".|
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
|body|body|[GoogleCloudApigeeV1TraceConfigOverride](#schemagooglecloudapigeev1traceconfigoverride)|false|none|
|» apiProxy|body|string|false|ID of the API proxy that will have its trace configuration overridden.|
|» name|body|string|false|ID of the trace configuration override specified as a system-generated UUID.|
|» samplingConfig|body|[GoogleCloudApigeeV1TraceSamplingConfig](#schemagooglecloudapigeev1tracesamplingconfig)|false|Trace configuration to override.|

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
  "apiProxy": "string",
  "name": "string",
  "samplingConfig": {
    "sampler": "SAMPLER_UNSPECIFIED",
    "samplingRate": 0
  }
}
```

<h3 id="apigeeorganizationsenvironmentstraceconfigoverridescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1TraceConfigOverride](#schemagooglecloudapigeev1traceconfigoverride)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.queries.list

<a id="opIdapigee.organizations.environments.queries.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/queries \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/queries`

Return a list of Asynchronous Queries

<h3 id="apigeeorganizationsenvironmentsquerieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource name. Must be of the form `organizations/{org}/environments/{env}`.|
|dataset|query|string|false|Filter response list by dataset. Example: `api`, `mint`|
|from|query|string|false|Filter response list by returning asynchronous queries that created after this date time. Time must be in ISO date-time format like '2011-12-03T10:15:30Z'.|
|inclQueriesWithoutReport|query|string|false|Flag to include asynchronous queries that don't have a report denifition.|
|status|query|string|false|Filter response list by asynchronous query status.|
|submittedBy|query|string|false|Filter response list by user who submitted queries.|
|to|query|string|false|Filter response list by returning asynchronous queries that created before this date time. Time must be in ISO date-time format like '2011-12-03T10:16:30Z'.|
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
  "queries": [
    {
      "created": "string",
      "envgroupHostname": "string",
      "error": "string",
      "executionTime": "string",
      "name": "string",
      "queryParams": {
        "dimensions": [
          "string"
        ],
        "endTimestamp": "string",
        "metrics": [
          "string"
        ],
        "outputFormat": "string",
        "startTimestamp": "string",
        "timeUnit": "string"
      },
      "reportDefinitionId": "string",
      "result": {
        "expires": "string",
        "self": "string"
      },
      "resultFileSize": "string",
      "resultRows": "string",
      "self": "string",
      "state": "string",
      "updated": "string"
    }
  ]
}
```

<h3 id="apigeeorganizationsenvironmentsquerieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ListAsyncQueriesResponse](#schemagooglecloudapigeev1listasyncqueriesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.queries.create

<a id="opIdapigee.organizations.environments.queries.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/queries \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "csvDelimiter": "string",
    "dimensions": [
      "string"
    ],
    "envgroupHostname": "string",
    "filter": "string",
    "groupByTimeUnit": "string",
    "limit": 0,
    "metrics": [
      {
        "alias": "string",
        "function": "string",
        "name": "string",
        "operator": "string",
        "value": "string"
      }
    ],
    "name": "string",
    "outputFormat": "string",
    "reportDefinitionId": "string",
    "timeRange": null
  }'
```

`POST /v1/{parent}/queries`

Submit a query to be processed in the background. If the submission of the query succeeds, the API returns a 201 status and an ID that refer to the query. In addition to the HTTP status 201, the `state` of "enqueued" means that the request succeeded.

> Body parameter

```json
{
  "csvDelimiter": "string",
  "dimensions": [
    "string"
  ],
  "envgroupHostname": "string",
  "filter": "string",
  "groupByTimeUnit": "string",
  "limit": 0,
  "metrics": [
    {
      "alias": "string",
      "function": "string",
      "name": "string",
      "operator": "string",
      "value": "string"
    }
  ],
  "name": "string",
  "outputFormat": "string",
  "reportDefinitionId": "string",
  "timeRange": null
}
```

<h3 id="apigeeorganizationsenvironmentsqueriescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource name. Must be of the form `organizations/{org}/environments/{env}`.|
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
|body|body|[GoogleCloudApigeeV1Query](#schemagooglecloudapigeev1query)|false|none|
|» csvDelimiter|body|string|false|Delimiter used in the CSV file, if `outputFormat` is set to `csv`. Defaults to the `,` (comma) character. Supported delimiter characters include comma (`,`), pipe (`\|`), and tab (`\t`).|
|» dimensions|body|[string]|false|A list of dimensions. https://docs.apigee.com/api-platform/analytics/analytics-reference#dimensions|
|» envgroupHostname|body|string|false|Hostname needs to be specified if query intends to run at host level. This field is only allowed when query is submitted by CreateHostAsyncQuery where analytics data will be grouped by organization and hostname.|
|» filter|body|string|false|Boolean expression that can be used to filter data. Filter expressions can be combined using AND/OR terms and should be fully parenthesized to avoid ambiguity. See Analytics metrics, dimensions, and filters reference https://docs.apigee.com/api-platform/analytics/analytics-reference for more information on the fields available to filter on. For more information on the tokens that you use to build filter expressions, see Filter expression syntax. https://docs.apigee.com/api-platform/analytics/asynch-reports-api#filter-expression-syntax|
|» groupByTimeUnit|body|string|false|Time unit used to group the result set. Valid values include: second, minute, hour, day, week, or month. If a query includes groupByTimeUnit, then the result is an aggregation based on the specified time unit and the resultant timestamp does not include milliseconds precision. If a query omits groupByTimeUnit, then the resultant timestamp includes milliseconds precision.|
|» limit|body|integer(int32)|false|Maximum number of rows that can be returned in the result.|
|» metrics|body|[[GoogleCloudApigeeV1QueryMetric](#schemagooglecloudapigeev1querymetric)]|false|A list of Metrics.|
|» name|body|string|false|Asynchronous Query Name.|
|» outputFormat|body|string|false|Valid values include: `csv` or `json`. Defaults to `json`. Note: Configure the delimiter for CSV output using the csvDelimiter property.|
|» reportDefinitionId|body|string|false|Asynchronous Report ID.|
|» timeRange|body|object|false|Required. Time range for the query. Can use the following predefined strings to specify the time range: `last60minutes` `last24hours` `last7days` Or, specify the timeRange as a structure describing start and end timestamps in the ISO format: yyyy-mm-ddThh:mm:ssZ. Example: "timeRange": { "start": "2018-07-29T00:13:00Z", "end": "2018-08-01T00:18:00Z" }|

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
  "created": "string",
  "envgroupHostname": "string",
  "error": "string",
  "executionTime": "string",
  "name": "string",
  "queryParams": {
    "dimensions": [
      "string"
    ],
    "endTimestamp": "string",
    "metrics": [
      "string"
    ],
    "outputFormat": "string",
    "startTimestamp": "string",
    "timeUnit": "string"
  },
  "reportDefinitionId": "string",
  "result": {
    "expires": "string",
    "self": "string"
  },
  "resultFileSize": "string",
  "resultRows": "string",
  "self": "string",
  "state": "string",
  "updated": "string"
}
```

<h3 id="apigeeorganizationsenvironmentsqueriescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1AsyncQuery](#schemagooglecloudapigeev1asyncquery)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.apiproducts.rateplans.list

<a id="opIdapigee.organizations.apiproducts.rateplans.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/rateplans \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/rateplans`

Lists all the rate plans for an API product.

<h3 id="apigeeorganizationsapiproductsrateplanslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the API product. Use the following structure in your request: `organizations/{org}/apiproducts/{apiproduct}` Use `organizations/{org}/apiproducts/-` to return rate plans for all API products within the organization.|
|count|query|integer|false|Number of rate plans to return in the API call. Use with the `startKey` parameter to provide more targeted filtering. The maximum limit is 1000. Defaults to 100.|
|expand|query|boolean|false|Flag that specifies whether to expand the results. Set to `true` to get expanded details about each API. Defaults to `false`.|
|orderBy|query|string|false|Name of the attribute used for sorting. Valid values include: * `name`: Name of the rate plan. * `state`: State of the rate plan (`DRAFT`, `PUBLISHED`). * `startTime`: Time when the rate plan becomes active. * `endTime`: Time when the rate plan expires. **Note**: Not supported by Apigee at this time.|
|startKey|query|string|false|Name of the rate plan from which to start displaying the list of rate plans. If omitted, the list starts from the first item. For example, to view the rate plans from 51-150, set the value of `startKey` to the name of the 51st rate plan and set the value of `count` to 100.|
|state|query|string|false|State of the rate plans (`DRAFT`, `PUBLISHED`) that you want to display.|
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
|state|STATE_UNSPECIFIED|
|state|DRAFT|
|state|PUBLISHED|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextStartKey": "string",
  "ratePlans": [
    {
      "apiproduct": "string",
      "billingPeriod": "BILLING_PERIOD_UNSPECIFIED",
      "consumptionPricingRates": [
        {
          "end": "string",
          "fee": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "start": "string"
        }
      ],
      "consumptionPricingType": "CONSUMPTION_PRICING_TYPE_UNSPECIFIED",
      "createdAt": "string",
      "currencyCode": "string",
      "description": "string",
      "displayName": "string",
      "endTime": "string",
      "fixedFeeFrequency": 0,
      "fixedRecurringFee": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "lastModifiedAt": "string",
      "name": "string",
      "paymentFundingModel": "PAYMENT_FUNDING_MODEL_UNSPECIFIED",
      "revenueShareRates": [
        {
          "end": "string",
          "sharePercentage": 0,
          "start": "string"
        }
      ],
      "revenueShareType": "REVENUE_SHARE_TYPE_UNSPECIFIED",
      "setupFee": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "startTime": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ]
}
```

<h3 id="apigeeorganizationsapiproductsrateplanslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ListRatePlansResponse](#schemagooglecloudapigeev1listrateplansresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.apiproducts.rateplans.create

<a id="opIdapigee.organizations.apiproducts.rateplans.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/rateplans \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "apiproduct": "string",
    "billingPeriod": "BILLING_PERIOD_UNSPECIFIED",
    "consumptionPricingRates": [
      {
        "end": "string",
        "fee": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "start": "string"
      }
    ],
    "consumptionPricingType": "CONSUMPTION_PRICING_TYPE_UNSPECIFIED",
    "currencyCode": "string",
    "description": "string",
    "displayName": "string",
    "endTime": "string",
    "fixedFeeFrequency": 0,
    "fixedRecurringFee": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "paymentFundingModel": "PAYMENT_FUNDING_MODEL_UNSPECIFIED",
    "revenueShareRates": [
      {
        "end": "string",
        "sharePercentage": 0,
        "start": "string"
      }
    ],
    "revenueShareType": "REVENUE_SHARE_TYPE_UNSPECIFIED",
    "setupFee": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "startTime": "string",
    "state": "STATE_UNSPECIFIED"
  }'
```

`POST /v1/{parent}/rateplans`

Create a rate plan that is associated with an API product in an organization. Using rate plans, API product owners can monetize their API products by configuring one or more of the following: - Billing frequency - Initial setup fees for using an API product - Payment funding model (postpaid only) - Fixed recurring or consumption-based charges for using an API product - Revenue sharing with developer partners An API product can have multiple rate plans associated with it but *only one* rate plan can be active at any point of time. **Note: From the developer's perspective, they purchase API products not rate plans.

> Body parameter

```json
{
  "apiproduct": "string",
  "billingPeriod": "BILLING_PERIOD_UNSPECIFIED",
  "consumptionPricingRates": [
    {
      "end": "string",
      "fee": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "start": "string"
    }
  ],
  "consumptionPricingType": "CONSUMPTION_PRICING_TYPE_UNSPECIFIED",
  "currencyCode": "string",
  "description": "string",
  "displayName": "string",
  "endTime": "string",
  "fixedFeeFrequency": 0,
  "fixedRecurringFee": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "paymentFundingModel": "PAYMENT_FUNDING_MODEL_UNSPECIFIED",
  "revenueShareRates": [
    {
      "end": "string",
      "sharePercentage": 0,
      "start": "string"
    }
  ],
  "revenueShareType": "REVENUE_SHARE_TYPE_UNSPECIFIED",
  "setupFee": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "startTime": "string",
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="apigeeorganizationsapiproductsrateplanscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the API product that is associated with the rate plan. Use the following structure in your request: `organizations/{org}/apiproducts/{apiproduct}`|
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
|body|body|[GoogleCloudApigeeV1RatePlan](#schemagooglecloudapigeev1rateplan)|false|none|
|» apiproduct|body|string|false|Name of the API product that the rate plan is associated with.|
|» billingPeriod|body|string|false|Frequency at which the customer will be billed.|
|» consumptionPricingRates|body|[[GoogleCloudApigeeV1RateRange](#schemagooglecloudapigeev1raterange)]|false|API call volume ranges and the fees charged when the total number of API calls is within a given range. The method used to calculate the final fee depends on the selected pricing model. For example, if the pricing model is `STAIRSTEP` and the ranges are defined as follows: ``` { "start": 1, "end": 100, "fee": 75 }, { "start": 101, "end": 200, "fee": 100 }, } ``` Then the following fees would be charged based on the total number of API calls (assuming the currency selected is `USD`): * 1 call costs $75 * 50 calls cost $75 * 150 calls cost $100 The number of API calls cannot exceed 200.|
|» consumptionPricingType|body|string|false|Pricing model used for consumption-based charges.|
|» currencyCode|body|string|false|Currency to be used for billing. Consists of a three-letter code as defined by the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) standard.|
|» description|body|string|false|Description of the rate plan.|
|» displayName|body|string|false|Display name of the rate plan.|
|» endTime|body|string(int64)|false|Time when the rate plan will expire in milliseconds since epoch. Set to 0 or `null` to indicate that the rate plan should never expire.|
|» fixedFeeFrequency|body|integer(int32)|false|Frequency at which the fixed fee is charged.|
|» fixedRecurringFee|body|[GoogleTypeMoney](#schemagoogletypemoney)|false|Fixed amount that is charged at a defined interval and billed in advance of use of the API product. The fee will be prorated for the first billing period.|
|» paymentFundingModel|body|string|false|DEPRECATED: This field is no longer supported and will eventually be removed when Apigee Hybrid 1.5/1.6 is no longer supported. Instead, use the `billingType` field inside `DeveloperMonetizationConfig` resource. Flag that specifies the billing account type, prepaid or postpaid.|
|» revenueShareRates|body|[[GoogleCloudApigeeV1RevenueShareRange](#schemagooglecloudapigeev1revenuesharerange)]|false|Details of the revenue sharing model.|
|» revenueShareType|body|string|false|Method used to calculate the revenue that is shared with developers.|
|» setupFee|body|[GoogleTypeMoney](#schemagoogletypemoney)|false|Initial, one-time fee paid when purchasing the API product.|
|» startTime|body|string(int64)|false|Time when the rate plan becomes active in milliseconds since epoch.|
|» state|body|string|false|Current state of the rate plan (draft or published).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» billingPeriod|BILLING_PERIOD_UNSPECIFIED|
|» billingPeriod|WEEKLY|
|» billingPeriod|MONTHLY|
|» consumptionPricingType|CONSUMPTION_PRICING_TYPE_UNSPECIFIED|
|» consumptionPricingType|FIXED_PER_UNIT|
|» consumptionPricingType|BANDED|
|» consumptionPricingType|TIERED|
|» consumptionPricingType|STAIRSTEP|
|» paymentFundingModel|PAYMENT_FUNDING_MODEL_UNSPECIFIED|
|» paymentFundingModel|PREPAID|
|» paymentFundingModel|POSTPAID|
|» revenueShareType|REVENUE_SHARE_TYPE_UNSPECIFIED|
|» revenueShareType|FIXED|
|» revenueShareType|VOLUME_BANDED|
|» state|STATE_UNSPECIFIED|
|» state|DRAFT|
|» state|PUBLISHED|

> Example responses

> 200 Response

```json
{
  "apiproduct": "string",
  "billingPeriod": "BILLING_PERIOD_UNSPECIFIED",
  "consumptionPricingRates": [
    {
      "end": "string",
      "fee": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "start": "string"
    }
  ],
  "consumptionPricingType": "CONSUMPTION_PRICING_TYPE_UNSPECIFIED",
  "createdAt": "string",
  "currencyCode": "string",
  "description": "string",
  "displayName": "string",
  "endTime": "string",
  "fixedFeeFrequency": 0,
  "fixedRecurringFee": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "lastModifiedAt": "string",
  "name": "string",
  "paymentFundingModel": "PAYMENT_FUNDING_MODEL_UNSPECIFIED",
  "revenueShareRates": [
    {
      "end": "string",
      "sharePercentage": 0,
      "start": "string"
    }
  ],
  "revenueShareType": "REVENUE_SHARE_TYPE_UNSPECIFIED",
  "setupFee": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "startTime": "string",
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="apigeeorganizationsapiproductsrateplanscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1RatePlan](#schemagooglecloudapigeev1rateplan)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.references.create

<a id="opIdapigee.organizations.environments.references.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/references \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "name": "string",
    "refers": "string",
    "resourceType": "string"
  }'
```

`POST /v1/{parent}/references`

Creates a Reference in the specified environment.

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "refers": "string",
  "resourceType": "string"
}
```

<h3 id="apigeeorganizationsenvironmentsreferencescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent environment name under which the Reference will be created. Must be of the form `organizations/{org}/environments/{env}`.|
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
|body|body|[GoogleCloudApigeeV1Reference](#schemagooglecloudapigeev1reference)|false|none|
|» description|body|string|false|Optional. A human-readable description of this reference.|
|» name|body|string|false|Required. The resource id of this reference. Values must match the regular expression [\w\s\-.]+.|
|» refers|body|string|false|Required. The id of the resource to which this reference refers. Must be the id of a resource that exists in the parent environment and is of the given resource_type.|
|» resourceType|body|string|false|The type of resource referred to by this reference. Valid values are 'KeyStore' or 'TrustStore'.|

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
  "name": "string",
  "refers": "string",
  "resourceType": "string"
}
```

<h3 id="apigeeorganizationsenvironmentsreferencescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1Reference](#schemagooglecloudapigeev1reference)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.reports.list

<a id="opIdapigee.organizations.reports.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/reports \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/reports`

Return a list of Custom Reports

<h3 id="apigeeorganizationsreportslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent organization name under which the API product will be listed `organizations/{organization_id}/reports`|
|expand|query|boolean|false|Set to 'true' to get expanded details about each custom report.|
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
  "qualifier": [
    {
      "chartType": "string",
      "comments": [
        "string"
      ],
      "createdAt": "string",
      "dimensions": [
        "string"
      ],
      "displayName": "string",
      "environment": "string",
      "filter": "string",
      "fromTime": "string",
      "lastModifiedAt": "string",
      "lastViewedAt": "string",
      "limit": "string",
      "metrics": [
        {
          "function": "string",
          "name": "string"
        }
      ],
      "name": "string",
      "offset": "string",
      "organization": "string",
      "properties": [
        {
          "property": "string",
          "value": [
            {
              "name": "string",
              "value": "string"
            }
          ]
        }
      ],
      "sortByCols": [
        "string"
      ],
      "sortOrder": "string",
      "tags": [
        "string"
      ],
      "timeUnit": "string",
      "toTime": "string",
      "topk": "string"
    }
  ]
}
```

<h3 id="apigeeorganizationsreportslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ListCustomReportsResponse](#schemagooglecloudapigeev1listcustomreportsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.reports.create

<a id="opIdapigee.organizations.reports.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/reports \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "chartType": "string",
    "comments": [
      "string"
    ],
    "dimensions": [
      "string"
    ],
    "displayName": "string",
    "filter": "string",
    "fromTime": "string",
    "limit": "string",
    "metrics": [
      {
        "function": "string",
        "name": "string"
      }
    ],
    "name": "string",
    "offset": "string",
    "properties": [
      {
        "property": "string",
        "value": [
          {
            "name": "string",
            "value": "string"
          }
        ]
      }
    ],
    "sortByCols": [
      "string"
    ],
    "sortOrder": "string",
    "tags": [
      "string"
    ],
    "timeUnit": "string",
    "toTime": "string",
    "topk": "string"
  }'
```

`POST /v1/{parent}/reports`

Creates a Custom Report for an Organization. A Custom Report provides Apigee Customers to create custom dashboards in addition to the standard dashboards which are provided. The Custom Report in its simplest form contains specifications about metrics, dimensions and filters. It is important to note that the custom report by itself does not provide an executable entity. The Edge UI converts the custom report definition into an analytics query and displays the result in a chart.

> Body parameter

```json
{
  "chartType": "string",
  "comments": [
    "string"
  ],
  "dimensions": [
    "string"
  ],
  "displayName": "string",
  "filter": "string",
  "fromTime": "string",
  "limit": "string",
  "metrics": [
    {
      "function": "string",
      "name": "string"
    }
  ],
  "name": "string",
  "offset": "string",
  "properties": [
    {
      "property": "string",
      "value": [
        {
          "name": "string",
          "value": "string"
        }
      ]
    }
  ],
  "sortByCols": [
    "string"
  ],
  "sortOrder": "string",
  "tags": [
    "string"
  ],
  "timeUnit": "string",
  "toTime": "string",
  "topk": "string"
}
```

<h3 id="apigeeorganizationsreportscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent organization name under which the Custom Report will be created. Must be of the form: `organizations/{organization_id}/reports`|
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
|body|body|[GoogleCloudApigeeV1CustomReport](#schemagooglecloudapigeev1customreport)|false|none|
|» chartType|body|string|false|This field contains the chart type for the report|
|» comments|body|[string]|false|Legacy field: not used. This field contains a list of comments associated with custom report|
|» dimensions|body|[string]|false|This contains the list of dimensions for the report|
|» displayName|body|string|false|This is the display name for the report|
|» filter|body|string|false|This field contains the filter expression|
|» fromTime|body|string|false|Legacy field: not used. Contains the from time for the report|
|» limit|body|string|false|Legacy field: not used This field contains the limit for the result retrieved|
|» metrics|body|[[GoogleCloudApigeeV1CustomReportMetric](#schemagooglecloudapigeev1customreportmetric)]|false|Required. This contains the list of metrics|
|» name|body|string|false|Required. Unique identifier for the report T his is a legacy field used to encode custom report unique id|
|» offset|body|string|false|Legacy field: not used. This field contains the offset for the data|
|» properties|body|[[GoogleCloudApigeeV1ReportProperty](#schemagooglecloudapigeev1reportproperty)]|false|This field contains report properties such as ui metadata etc.|
|» sortByCols|body|[string]|false|Legacy field: not used much. Contains the list of sort by columns|
|» sortOrder|body|string|false|Legacy field: not used much. Contains the sort order for the sort columns|
|» tags|body|[string]|false|Legacy field: not used. This field contains a list of tags associated with custom report|
|» timeUnit|body|string|false|This field contains the time unit of aggregation for the report|
|» toTime|body|string|false|Legacy field: not used. Contains the end time for the report|
|» topk|body|string|false|Legacy field: not used. This field contains the top k parameter value for restricting the result|

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
  "chartType": "string",
  "comments": [
    "string"
  ],
  "createdAt": "string",
  "dimensions": [
    "string"
  ],
  "displayName": "string",
  "environment": "string",
  "filter": "string",
  "fromTime": "string",
  "lastModifiedAt": "string",
  "lastViewedAt": "string",
  "limit": "string",
  "metrics": [
    {
      "function": "string",
      "name": "string"
    }
  ],
  "name": "string",
  "offset": "string",
  "organization": "string",
  "properties": [
    {
      "property": "string",
      "value": [
        {
          "name": "string",
          "value": "string"
        }
      ]
    }
  ],
  "sortByCols": [
    "string"
  ],
  "sortOrder": "string",
  "tags": [
    "string"
  ],
  "timeUnit": "string",
  "toTime": "string",
  "topk": "string"
}
```

<h3 id="apigeeorganizationsreportscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1CustomReport](#schemagooglecloudapigeev1customreport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.resourcefiles.list

<a id="opIdapigee.organizations.environments.resourcefiles.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/resourcefiles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/resourcefiles`

Lists all resource files, optionally filtering by type. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).

<h3 id="apigeeorganizationsenvironmentsresourcefileslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the environment in which to list resource files in the following format: `organizations/{org}/environments/{env}`.|
|type|query|string|false|Optional. Type of resource files to list. {{ resource_file_type }}|
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
  "resourceFile": [
    {
      "name": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="apigeeorganizationsenvironmentsresourcefileslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ListEnvironmentResourcesResponse](#schemagooglecloudapigeev1listenvironmentresourcesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.resourcefiles.create

<a id="opIdapigee.organizations.environments.resourcefiles.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/resourcefiles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "contentType": "string",
    "data": "string",
    "extensions": [
      {
        "property1": null,
        "property2": null
      }
    ]
  }'
```

`POST /v1/{parent}/resourcefiles`

Creates a resource file. Specify the `Content-Type` as `application/octet-stream` or `multipart/form-data`. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).

> Body parameter

```json
{
  "contentType": "string",
  "data": "string",
  "extensions": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

<h3 id="apigeeorganizationsenvironmentsresourcefilescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the environment in which to create the resource file in the following format: `organizations/{org}/environments/{env}`.|
|name|query|string|false|Required. Name of the resource file. Must match the regular expression: [a-zA-Z0-9:/\\!@#$%^&{}\[\]()+\-=,.~'` ]{1,255}|
|type|query|string|false|Required. Resource file type. {{ resource_file_type }}|
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
|body|body|[GoogleApiHttpBody](#schemagoogleapihttpbody)|false|none|
|» contentType|body|string|false|The HTTP Content-Type header value specifying the content type of the body.|
|» data|body|string(byte)|false|The HTTP request/response body as raw binary.|
|» extensions|body|[object]|false|Application specific response metadata. Must be set in the first response for streaming APIs.|
|» » **additionalProperties**|body|object|false|Properties of the object. Contains field @type with type URL.|

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
  "name": "string",
  "type": "string"
}
```

<h3 id="apigeeorganizationsenvironmentsresourcefilescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ResourceFile](#schemagooglecloudapigeev1resourcefile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.resourcefiles.listEnvironmentResources

<a id="opIdapigee.organizations.environments.resourcefiles.listEnvironmentResources"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/resourcefiles/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/resourcefiles/{type}`

Lists all resource files, optionally filtering by type. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).

<h3 id="apigeeorganizationsenvironmentsresourcefileslistenvironmentresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the environment in which to list resource files in the following format: `organizations/{org}/environments/{env}`.|
|type|path|string|true|Optional. Type of resource files to list. {{ resource_file_type }}|
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
  "resourceFile": [
    {
      "name": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="apigeeorganizationsenvironmentsresourcefileslistenvironmentresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ListEnvironmentResourcesResponse](#schemagooglecloudapigeev1listenvironmentresourcesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.resourcefiles.get

<a id="opIdapigee.organizations.environments.resourcefiles.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/resourcefiles/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/resourcefiles/{type}/{name}`

Gets the contents of a resource file. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).

<h3 id="apigeeorganizationsenvironmentsresourcefilesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the environment in the following format: `organizations/{org}/environments/{env}`.|
|type|path|string|true|Required. Resource file type. {{ resource_file_type }}|
|name|path|string|true|Required. ID of the resource file. Must match the regular expression: [a-zA-Z0-9:/\\!@#$%^&{}\[\]()+\-=,.~'` ]{1,255}|
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
  "contentType": "string",
  "data": "string",
  "extensions": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

<h3 id="apigeeorganizationsenvironmentsresourcefilesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleApiHttpBody](#schemagoogleapihttpbody)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.resourcefiles.update

<a id="opIdapigee.organizations.environments.resourcefiles.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/resourcefiles/string/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "contentType": "string",
    "data": "string",
    "extensions": [
      {
        "property1": null,
        "property2": null
      }
    ]
  }'
```

`PUT /v1/{parent}/resourcefiles/{type}/{name}`

Updates a resource file. Specify the `Content-Type` as `application/octet-stream` or `multipart/form-data`. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).

> Body parameter

```json
{
  "contentType": "string",
  "data": "string",
  "extensions": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

<h3 id="apigeeorganizationsenvironmentsresourcefilesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the environment in the following format: `organizations/{org}/environments/{env}`.|
|type|path|string|true|Required. Resource file type. {{ resource_file_type }}|
|name|path|string|true|Required. ID of the resource file to update. Must match the regular expression: [a-zA-Z0-9:/\\!@#$%^&{}\[\]()+\-=,.~'` ]{1,255}|
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
|body|body|[GoogleApiHttpBody](#schemagoogleapihttpbody)|false|none|
|» contentType|body|string|false|The HTTP Content-Type header value specifying the content type of the body.|
|» data|body|string(byte)|false|The HTTP request/response body as raw binary.|
|» extensions|body|[object]|false|Application specific response metadata. Must be set in the first response for streaming APIs.|
|» » **additionalProperties**|body|object|false|Properties of the object. Contains field @type with type URL.|

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
  "name": "string",
  "type": "string"
}
```

<h3 id="apigeeorganizationsenvironmentsresourcefilesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ResourceFile](#schemagooglecloudapigeev1resourcefile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.resourcefiles.delete

<a id="opIdapigee.organizations.environments.resourcefiles.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/resourcefiles/string/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{parent}/resourcefiles/{type}/{name}`

Deletes a resource file. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).

<h3 id="apigeeorganizationsenvironmentsresourcefilesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the environment in the following format: `organizations/{org}/environments/{env}`.|
|type|path|string|true|Required. Resource file type. {{ resource_file_type }}|
|name|path|string|true|Required. ID of the resource file to delete. Must match the regular expression: [a-zA-Z0-9:/\\!@#$%^&{}\[\]()+\-=,.~'` ]{1,255}|
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
  "name": "string",
  "type": "string"
}
```

<h3 id="apigeeorganizationsenvironmentsresourcefilesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ResourceFile](#schemagooglecloudapigeev1resourcefile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.securityIncidents.list

<a id="opIdapigee.organizations.environments.securityIncidents.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/securityIncidents \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/securityIncidents`

ListSecurityIncidents lists all the security incident associated with the environment.

<h3 id="apigeeorganizationsenvironmentssecurityincidentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. For a specific organization, list of all the security incidents. Format: `organizations/{org}/environments/{environment}`|
|filter|query|string|false|The filter expression to be used to get the list of security incidents, where filtering can be done on API Proxies. Example: filter = "api_proxy = /", "first_detected_time >", "last_detected_time <"|
|pageSize|query|integer|false|The maximum number of incidents to return. The service may return fewer than this value. If unspecified, at most 50 incidents will be returned.|
|pageToken|query|string|false|A page token, received from a previous `ListSecurityIncident` call. Provide this to retrieve the subsequent page.|
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
  "securityIncidents": [
    {
      "detectionTypes": [
        "string"
      ],
      "displayName": "string",
      "firstDetectedTime": "string",
      "lastDetectedTime": "string",
      "name": "string",
      "riskLevel": "RISK_LEVEL_UNSPECIFIED",
      "trafficCount": "string"
    }
  ]
}
```

<h3 id="apigeeorganizationsenvironmentssecurityincidentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ListSecurityIncidentsResponse](#schemagooglecloudapigeev1listsecurityincidentsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.securityProfiles.list

<a id="opIdapigee.organizations.securityProfiles.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/securityProfiles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/securityProfiles`

ListSecurityProfiles lists all the security profiles associated with the org including attached and unattached profiles.

<h3 id="apigeeorganizationssecurityprofileslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. For a specific organization, list of all the security profiles. Format: `organizations/{org}`|
|pageSize|query|integer|false|The maximum number of profiles to return. The service may return fewer than this value. If unspecified, at most 50 profiles will be returned.|
|pageToken|query|string|false|A page token, received from a previous `ListSecurityProfiles` call. Provide this to retrieve the subsequent page.|
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
  "securityProfiles": [
    {
      "displayName": "string",
      "environments": [
        {
          "attachTime": "string",
          "environment": "string"
        }
      ],
      "maxScore": 0,
      "minScore": 0,
      "name": "string",
      "revisionCreateTime": "string",
      "revisionId": "string",
      "revisionPublishTime": "string",
      "revisionUpdateTime": "string",
      "scoringConfigs": [
        {
          "description": "string",
          "scorePath": "string",
          "title": "string"
        }
      ]
    }
  ]
}
```

<h3 id="apigeeorganizationssecurityprofileslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ListSecurityProfilesResponse](#schemagooglecloudapigeev1listsecurityprofilesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.securityReports.list

<a id="opIdapigee.organizations.environments.securityReports.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/securityReports \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/securityReports`

Return a list of Security Reports

<h3 id="apigeeorganizationsenvironmentssecurityreportslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource name. Must be of the form `organizations/{org}/environments/{env}`.|
|dataset|query|string|false|Filter response list by dataset. Example: `api`, `mint`|
|from|query|string|false|Filter response list by returning security reports that created after this date time. Time must be in ISO date-time format like '2011-12-03T10:15:30Z'.|
|pageSize|query|integer|false|The maximum number of security report to return in the list response.|
|pageToken|query|string|false|Token returned from the previous list response to fetch the next page.|
|status|query|string|false|Filter response list by security reports status.|
|submittedBy|query|string|false|Filter response list by user who submitted queries.|
|to|query|string|false|Filter response list by returning security reports that created before this date time. Time must be in ISO date-time format like '2011-12-03T10:16:30Z'.|
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
  "securityReports": [
    {
      "created": "string",
      "displayName": "string",
      "envgroupHostname": "string",
      "error": "string",
      "executionTime": "string",
      "queryParams": {
        "dimensions": [
          "string"
        ],
        "endTimestamp": "string",
        "metrics": [
          "string"
        ],
        "mimeType": "string",
        "startTimestamp": "string",
        "timeUnit": "string"
      },
      "reportDefinitionId": "string",
      "result": {
        "expires": "string",
        "self": "string"
      },
      "resultFileSize": "string",
      "resultRows": "string",
      "self": "string",
      "state": "string",
      "updated": "string"
    }
  ]
}
```

<h3 id="apigeeorganizationsenvironmentssecurityreportslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ListSecurityReportsResponse](#schemagooglecloudapigeev1listsecurityreportsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.securityReports.create

<a id="opIdapigee.organizations.environments.securityReports.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/securityReports \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "csvDelimiter": "string",
    "dimensions": [
      "string"
    ],
    "displayName": "string",
    "envgroupHostname": "string",
    "filter": "string",
    "groupByTimeUnit": "string",
    "limit": 0,
    "metrics": [
      {
        "aggregationFunction": "string",
        "alias": "string",
        "name": "string",
        "operator": "string",
        "value": "string"
      }
    ],
    "mimeType": "string",
    "reportDefinitionId": "string",
    "timeRange": null
  }'
```

`POST /v1/{parent}/securityReports`

Submit a report request to be processed in the background. If the submission succeeds, the API returns a 200 status and an ID that refer to the report request. In addition to the HTTP status 200, the `state` of "enqueued" means that the request succeeded.

> Body parameter

```json
{
  "csvDelimiter": "string",
  "dimensions": [
    "string"
  ],
  "displayName": "string",
  "envgroupHostname": "string",
  "filter": "string",
  "groupByTimeUnit": "string",
  "limit": 0,
  "metrics": [
    {
      "aggregationFunction": "string",
      "alias": "string",
      "name": "string",
      "operator": "string",
      "value": "string"
    }
  ],
  "mimeType": "string",
  "reportDefinitionId": "string",
  "timeRange": null
}
```

<h3 id="apigeeorganizationsenvironmentssecurityreportscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource name. Must be of the form `organizations/{org}/environments/{env}`.|
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
|body|body|[GoogleCloudApigeeV1SecurityReportQuery](#schemagooglecloudapigeev1securityreportquery)|false|none|
|» csvDelimiter|body|string|false|Delimiter used in the CSV file, if `outputFormat` is set to `csv`. Defaults to the `,` (comma) character. Supported delimiter characters include comma (`,`), pipe (`\|`), and tab (`\t`).|
|» dimensions|body|[string]|false|A list of dimensions. https://docs.apigee.com/api-platform/analytics/analytics-reference#dimensions|
|» displayName|body|string|false|Security Report display name which users can specify.|
|» envgroupHostname|body|string|false|Hostname needs to be specified if query intends to run at host level. This field is only allowed when query is submitted by CreateHostSecurityReport where analytics data will be grouped by organization and hostname.|
|» filter|body|string|false|Boolean expression that can be used to filter data. Filter expressions can be combined using AND/OR terms and should be fully parenthesized to avoid ambiguity. See Analytics metrics, dimensions, and filters reference https://docs.apigee.com/api-platform/analytics/analytics-reference for more information on the fields available to filter on. For more information on the tokens that you use to build filter expressions, see Filter expression syntax. https://docs.apigee.com/api-platform/analytics/asynch-reports-api#filter-expression-syntax|
|» groupByTimeUnit|body|string|false|Time unit used to group the result set. Valid values include: second, minute, hour, day, week, or month. If a query includes groupByTimeUnit, then the result is an aggregation based on the specified time unit and the resultant timestamp does not include milliseconds precision. If a query omits groupByTimeUnit, then the resultant timestamp includes milliseconds precision.|
|» limit|body|integer(int32)|false|Maximum number of rows that can be returned in the result.|
|» metrics|body|[[GoogleCloudApigeeV1SecurityReportQueryMetric](#schemagooglecloudapigeev1securityreportquerymetric)]|false|A list of Metrics.|
|» mimeType|body|string|false|Valid values include: `csv` or `json`. Defaults to `json`. Note: Configure the delimiter for CSV output using the csvDelimiter property.|
|» reportDefinitionId|body|string|false|Report Definition ID.|
|» timeRange|body|object|false|Required. Time range for the query. Can use the following predefined strings to specify the time range: `last60minutes` `last24hours` `last7days` Or, specify the timeRange as a structure describing start and end timestamps in the ISO format: yyyy-mm-ddThh:mm:ssZ. Example: "timeRange": { "start": "2018-07-29T00:13:00Z", "end": "2018-08-01T00:18:00Z" }|

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
  "created": "string",
  "displayName": "string",
  "envgroupHostname": "string",
  "error": "string",
  "executionTime": "string",
  "queryParams": {
    "dimensions": [
      "string"
    ],
    "endTimestamp": "string",
    "metrics": [
      "string"
    ],
    "mimeType": "string",
    "startTimestamp": "string",
    "timeUnit": "string"
  },
  "reportDefinitionId": "string",
  "result": {
    "expires": "string",
    "self": "string"
  },
  "resultFileSize": "string",
  "resultRows": "string",
  "self": "string",
  "state": "string",
  "updated": "string"
}
```

<h3 id="apigeeorganizationsenvironmentssecurityreportscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1SecurityReport](#schemagooglecloudapigeev1securityreport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.sharedflows.list

<a id="opIdapigee.organizations.sharedflows.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/sharedflows \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/sharedflows`

Lists all shared flows in the organization.

<h3 id="apigeeorganizationssharedflowslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the parent organization under which to get shared flows. Must be of the form: `organizations/{organization_id}`|
|includeMetaData|query|boolean|false|Indicates whether to include shared flow metadata in the response.|
|includeRevisions|query|boolean|false|Indicates whether to include a list of revisions in the response.|
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
  "sharedFlows": [
    {
      "latestRevisionId": "string",
      "metaData": {
        "createdAt": "string",
        "lastModifiedAt": "string",
        "subType": "string"
      },
      "name": "string",
      "revision": [
        "string"
      ]
    }
  ]
}
```

<h3 id="apigeeorganizationssharedflowslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ListSharedFlowsResponse](#schemagooglecloudapigeev1listsharedflowsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.sharedflows.create

<a id="opIdapigee.organizations.sharedflows.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/sharedflows \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "contentType": "string",
    "data": "string",
    "extensions": [
      {
        "property1": null,
        "property2": null
      }
    ]
  }'
```

`POST /v1/{parent}/sharedflows`

Uploads a ZIP-formatted shared flow configuration bundle to an organization. If the shared flow already exists, this creates a new revision of it. If the shared flow does not exist, this creates it. Once imported, the shared flow revision must be deployed before it can be accessed at runtime. The size limit of a shared flow bundle is 15 MB.

> Body parameter

```json
{
  "contentType": "string",
  "data": "string",
  "extensions": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

<h3 id="apigeeorganizationssharedflowscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the parent organization under which to create the shared flow. Must be of the form: `organizations/{organization_id}`|
|action|query|string|false|Required. Must be set to either `import` or `validate`.|
|name|query|string|false|Required. The name to give the shared flow|
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
|body|body|[GoogleApiHttpBody](#schemagoogleapihttpbody)|false|none|
|» contentType|body|string|false|The HTTP Content-Type header value specifying the content type of the body.|
|» data|body|string(byte)|false|The HTTP request/response body as raw binary.|
|» extensions|body|[object]|false|Application specific response metadata. Must be set in the first response for streaming APIs.|
|» » **additionalProperties**|body|object|false|Properties of the object. Contains field @type with type URL.|

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
  "configurationVersion": {
    "majorVersion": 0,
    "minorVersion": 0
  },
  "contextInfo": "string",
  "createdAt": "string",
  "description": "string",
  "displayName": "string",
  "entityMetaDataAsProperties": {
    "property1": "string",
    "property2": "string"
  },
  "lastModifiedAt": "string",
  "name": "string",
  "policies": [
    "string"
  ],
  "resourceFiles": {
    "resourceFile": [
      {
        "name": "string",
        "type": "string"
      }
    ]
  },
  "resources": [
    "string"
  ],
  "revision": "string",
  "sharedFlows": [
    "string"
  ],
  "type": "string"
}
```

<h3 id="apigeeorganizationssharedflowscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1SharedFlowRevision](#schemagooglecloudapigeev1sharedflowrevision)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.developers.subscriptions.list

<a id="opIdapigee.organizations.developers.subscriptions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/subscriptions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/subscriptions`

Lists all API product subscriptions for a developer.

<h3 id="apigeeorganizationsdeveloperssubscriptionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Email address of the developer. Use the following structure in your request: `organizations/{org}/developers/{developer_email}`|
|count|query|integer|false|Number of API product subscriptions to return in the API call. Use with `startKey` to provide more targeted filtering. Defaults to 100. The maximum limit is 1000.|
|startKey|query|string|false|Name of the API product subscription from which to start displaying the list of subscriptions. If omitted, the list starts from the first item. For example, to view the API product subscriptions from 51-150, set the value of `startKey` to the name of the 51st subscription and set the value of `count` to 100.|
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
  "developerSubscriptions": [
    {
      "apiproduct": "string",
      "createdAt": "string",
      "endTime": "string",
      "lastModifiedAt": "string",
      "name": "string",
      "startTime": "string"
    }
  ],
  "nextStartKey": "string"
}
```

<h3 id="apigeeorganizationsdeveloperssubscriptionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse](#schemagooglecloudapigeev1listdevelopersubscriptionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.developers.subscriptions.create

<a id="opIdapigee.organizations.developers.subscriptions.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/subscriptions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "apiproduct": "string",
    "endTime": "string",
    "startTime": "string"
  }'
```

`POST /v1/{parent}/subscriptions`

Creates a subscription to an API product. 

> Body parameter

```json
{
  "apiproduct": "string",
  "endTime": "string",
  "startTime": "string"
}
```

<h3 id="apigeeorganizationsdeveloperssubscriptionscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Email address of the developer that is purchasing a subscription to the API product. Use the following structure in your request: `organizations/{org}/developers/{developer_email}`|
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
|body|body|[GoogleCloudApigeeV1DeveloperSubscription](#schemagooglecloudapigeev1developersubscription)|false|none|
|» apiproduct|body|string|false|Name of the API product for which the developer is purchasing a subscription.|
|» endTime|body|string(int64)|false|Time when the API product subscription ends in milliseconds since epoch.|
|» startTime|body|string(int64)|false|Time when the API product subscription starts in milliseconds since epoch.|

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
  "apiproduct": "string",
  "createdAt": "string",
  "endTime": "string",
  "lastModifiedAt": "string",
  "name": "string",
  "startTime": "string"
}
```

<h3 id="apigeeorganizationsdeveloperssubscriptionscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1DeveloperSubscription](#schemagooglecloudapigeev1developersubscription)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.targetservers.create

<a id="opIdapigee.organizations.environments.targetservers.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/targetservers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "host": "string",
    "isEnabled": true,
    "name": "string",
    "port": 0,
    "protocol": "PROTOCOL_UNSPECIFIED",
    "sSLInfo": {
      "ciphers": [
        "string"
      ],
      "clientAuthEnabled": true,
      "commonName": {
        "value": "string",
        "wildcardMatch": true
      },
      "enabled": true,
      "ignoreValidationErrors": true,
      "keyAlias": "string",
      "keyStore": "string",
      "protocols": [
        "string"
      ],
      "trustStore": "string"
    }
  }'
```

`POST /v1/{parent}/targetservers`

Creates a TargetServer in the specified environment.

> Body parameter

```json
{
  "description": "string",
  "host": "string",
  "isEnabled": true,
  "name": "string",
  "port": 0,
  "protocol": "PROTOCOL_UNSPECIFIED",
  "sSLInfo": {
    "ciphers": [
      "string"
    ],
    "clientAuthEnabled": true,
    "commonName": {
      "value": "string",
      "wildcardMatch": true
    },
    "enabled": true,
    "ignoreValidationErrors": true,
    "keyAlias": "string",
    "keyStore": "string",
    "protocols": [
      "string"
    ],
    "trustStore": "string"
  }
}
```

<h3 id="apigeeorganizationsenvironmentstargetserverscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent environment name under which the TargetServer will be created. Must be of the form `organizations/{org}/environments/{env}`.|
|name|query|string|false|Optional. The ID to give the TargetServer. This will overwrite the value in TargetServer.|
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
|body|body|[GoogleCloudApigeeV1TargetServer](#schemagooglecloudapigeev1targetserver)|false|none|
|» description|body|string|false|Optional. A human-readable description of this TargetServer.|
|» host|body|string|false|Required. The host name this target connects to. Value must be a valid hostname as described by RFC-1123.|
|» isEnabled|body|boolean|false|Optional. Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically. Defaults to true.|
|» name|body|string|false|Required. The resource id of this target server. Values must match the regular expression |
|» port|body|integer(int32)|false|Required. The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive.|
|» protocol|body|string|false|Immutable. The protocol used by this TargetServer.|
|» sSLInfo|body|[GoogleCloudApigeeV1TlsInfo](#schemagooglecloudapigeev1tlsinfo)|false|Optional. Specifies TLS configuration info for this TargetServer. The JSON name is `sSLInfo` for legacy/backwards compatibility reasons -- Edge originally supported SSL, and the name is still used for TLS configuration.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» protocol|PROTOCOL_UNSPECIFIED|
|» protocol|HTTP|
|» protocol|GRPC|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "host": "string",
  "isEnabled": true,
  "name": "string",
  "port": 0,
  "protocol": "PROTOCOL_UNSPECIFIED",
  "sSLInfo": {
    "ciphers": [
      "string"
    ],
    "clientAuthEnabled": true,
    "commonName": {
      "value": "string",
      "wildcardMatch": true
    },
    "enabled": true,
    "ignoreValidationErrors": true,
    "keyAlias": "string",
    "keyStore": "string",
    "protocols": [
      "string"
    ],
    "trustStore": "string"
  }
}
```

<h3 id="apigeeorganizationsenvironmentstargetserverscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1TargetServer](#schemagooglecloudapigeev1targetserver)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.subscribe

<a id="opIdapigee.organizations.environments.subscribe"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:subscribe \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/{parent}:subscribe`

Creates a subscription for the environment's Pub/Sub topic. The server will assign a random name for this subscription. The "name" and "push_config" must *not* be specified.

<h3 id="apigeeorganizationsenvironmentssubscribe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the environment. Use the following structure in your request: `organizations/{org}/environments/{env}`|
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
  "name": "string"
}
```

<h3 id="apigeeorganizationsenvironmentssubscribe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1Subscription](#schemagooglecloudapigeev1subscription)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.unsubscribe

<a id="opIdapigee.organizations.environments.unsubscribe"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:unsubscribe \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string"
  }'
```

`POST /v1/{parent}:unsubscribe`

Deletes a subscription for the environment's Pub/Sub topic.

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="apigeeorganizationsenvironmentsunsubscribe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the environment. Use the following structure in your request: `organizations/{org}/environments/{env}`|
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
|body|body|[GoogleCloudApigeeV1Subscription](#schemagooglecloudapigeev1subscription)|false|none|
|» name|body|string|false|Full name of the Pub/Sub subcription. Use the following structure in your request: `subscription "projects/foo/subscription/bar"`|

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

<h3 id="apigeeorganizationsenvironmentsunsubscribe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.securityProfiles.environments.computeEnvironmentScores

<a id="opIdapigee.organizations.securityProfiles.environments.computeEnvironmentScores"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:computeEnvironmentScores \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "filters": [
      {
        "scorePath": "string"
      }
    ],
    "pageSize": 0,
    "pageToken": "string",
    "timeRange": {
      "endTime": "string",
      "startTime": "string"
    }
  }'
```

`POST /v1/{profileEnvironment}:computeEnvironmentScores`

ComputeEnvironmentScores calculates scores for requested time range for the specified security profile and environment.

> Body parameter

```json
{
  "filters": [
    {
      "scorePath": "string"
    }
  ],
  "pageSize": 0,
  "pageToken": "string",
  "timeRange": {
    "endTime": "string",
    "startTime": "string"
  }
}
```

<h3 id="apigeeorganizationssecurityprofilesenvironmentscomputeenvironmentscores-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|profileEnvironment|path|string|true|Required. Name of organization and environment and profile id for which score needs to be computed. Format: organizations/{org}/securityProfiles/{profile}/environments/{env}|
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
|body|body|[GoogleCloudApigeeV1ComputeEnvironmentScoresRequest](#schemagooglecloudapigeev1computeenvironmentscoresrequest)|false|none|
|» filters|body|[[GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter](#schemagooglecloudapigeev1computeenvironmentscoresrequestfilter)]|false|Optional. Filters are used to filter scored components. Return all the components if no filter is mentioned. Example: [{ "scorePath": "/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/source" }, { "scorePath": "/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/target", }] This will return components with path: "/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/source" OR "/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/target"|
|» pageSize|body|integer(int32)|false|Optional. The maximum number of subcomponents to be returned in a single page. The service may return fewer than this value. If unspecified, at most 100 subcomponents will be returned in a single page.|
|» pageToken|body|string|false|Optional. A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|» timeRange|body|[GoogleTypeInterval](#schemagoogletypeinterval)|false|Required. Time range for score calculation. At most 14 days of scores will be returned.|

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
  "scores": [
    {
      "component": {
        "calculateTime": "string",
        "dataCaptureTime": "string",
        "drilldownPaths": [
          "string"
        ],
        "recommendations": [
          {
            "actions": [
              {
                "actionContext": {
                  "documentationLink": "string"
                },
                "description": "string"
              }
            ],
            "description": "string",
            "impact": 0,
            "title": "string"
          }
        ],
        "score": 0,
        "scorePath": "string"
      },
      "subcomponents": [
        {
          "calculateTime": "string",
          "dataCaptureTime": "string",
          "drilldownPaths": [
            "string"
          ],
          "recommendations": [
            {
              "actions": [
                {
                  "actionContext": {
                    "documentationLink": "string"
                  },
                  "description": "string"
                }
              ],
              "description": "string",
              "impact": 0,
              "title": "string"
            }
          ],
          "score": 0,
          "scorePath": "string"
        }
      ],
      "timeRange": {
        "endTime": "string",
        "startTime": "string"
      }
    }
  ]
}
```

<h3 id="apigeeorganizationssecurityprofilesenvironmentscomputeenvironmentscores-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudApigeeV1ComputeEnvironmentScoresResponse](#schemagooglecloudapigeev1computeenvironmentscoresresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.getIamPolicy

<a id="opIdapigee.organizations.environments.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:getIamPolicy \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{resource}:getIamPolicy`

Gets the IAM policy on an environment. For more information, see [Manage users, roles, and permissions using the API](https://cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles). You must have the `apigee.environments.getIamPolicy` permission to call this API.

<h3 id="apigeeorganizationsenvironmentsgetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
|options.requestedPolicyVersion|query|integer|false|Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|
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

<h3 id="apigeeorganizationsenvironmentsgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleIamV1Policy](#schemagoogleiamv1policy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.setIamPolicy

<a id="opIdapigee.organizations.environments.setIamPolicy"></a>

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

Sets the IAM policy on an environment, if the policy already exists it will be replaced. For more information, see [Manage users, roles, and permissions using the API](https://cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles). You must have the `apigee.environments.setIamPolicy` permission to call this API.

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

<h3 id="apigeeorganizationsenvironmentssetiampolicy-parameters">Parameters</h3>

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
|body|body|[GoogleIamV1SetIamPolicyRequest](#schemagoogleiamv1setiampolicyrequest)|false|none|
|» policy|body|[GoogleIamV1Policy](#schemagoogleiamv1policy)|false|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|
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

<h3 id="apigeeorganizationsenvironmentssetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleIamV1Policy](#schemagoogleiamv1policy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## apigee.organizations.environments.testIamPermissions

<a id="opIdapigee.organizations.environments.testIamPermissions"></a>

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

Tests the permissions of a user on an environment, and returns a subset of permissions that the user has on the environment. If the environment does not exist, an empty permission set is returned (a NOT_FOUND error is not returned).

> Body parameter

```json
{
  "permissions": [
    "string"
  ]
}
```

<h3 id="apigeeorganizationsenvironmentstestiampermissions-parameters">Parameters</h3>

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
|body|body|[GoogleIamV1TestIamPermissionsRequest](#schemagoogleiamv1testiampermissionsrequest)|false|none|
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

<h3 id="apigeeorganizationsenvironmentstestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleIamV1TestIamPermissionsResponse](#schemagoogleiamv1testiampermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="apigee-api-projects">projects</h1>

## apigee.projects.provisionOrganization

<a id="opIdapigee.projects.provisionOrganization"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:provisionOrganization \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "analyticsRegion": "string",
    "authorizedNetwork": "string",
    "runtimeLocation": "string"
  }'
```

`POST /v1/{project}:provisionOrganization`

Provisions a new Apigee organization with a functioning runtime. This is the standard way to create trial organizations for a free Apigee trial.

> Body parameter

```json
{
  "analyticsRegion": "string",
  "authorizedNetwork": "string",
  "runtimeLocation": "string"
}
```

<h3 id="apigeeprojectsprovisionorganization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|Required. Name of the GCP project with which to associate the Apigee organization.|
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
|body|body|[GoogleCloudApigeeV1ProvisionOrganizationRequest](#schemagooglecloudapigeev1provisionorganizationrequest)|false|none|
|» analyticsRegion|body|string|false|Primary Cloud Platform region for analytics data storage. For valid values, see [Create an organization](https://cloud.google.com/apigee/docs/hybrid/latest/precog-provision). Defaults to `us-west1`.|
|» authorizedNetwork|body|string|false|Compute Engine network used for Service Networking to be peered with Apigee runtime instances. See [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started). Apigee also supports shared VPC (that is, the host network project is not the same as the one that is peering with Apigee). See [Shared VPC overview](https://cloud.google.com/vpc/docs/shared-vpc). To use a shared VPC network, use the following format: `projects/{host-project-id}/{region}/networks/{network-name}`. For example: `projects/my-sharedvpc-host/global/networks/mynetwork`|
|» runtimeLocation|body|string|false|Cloud Platform location for the runtime instance. Defaults to zone `us-west1-a`. If a region is provided, `EVAL` organizations will use the region for automatically selecting a zone for the runtime instance.|

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

<h3 id="apigeeprojectsprovisionorganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_EdgeConfigstoreBundleBadBundle">EdgeConfigstoreBundleBadBundle</h2>
<!-- backwards compatibility -->
<a id="schemaedgeconfigstorebundlebadbundle"></a>
<a id="schema_EdgeConfigstoreBundleBadBundle"></a>
<a id="tocSedgeconfigstorebundlebadbundle"></a>
<a id="tocsedgeconfigstorebundlebadbundle"></a>

```json
{
  "violations": [
    {
      "description": "string",
      "filename": "string"
    }
  ]
}
```

Describes why a bundle is invalid. Intended for use in error details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|violations|[[EdgeConfigstoreBundleBadBundleViolation](#schemaedgeconfigstorebundlebadbundleviolation)]|false|none|Describes all precondition violations.|

<h2 id="tocS_EdgeConfigstoreBundleBadBundleViolation">EdgeConfigstoreBundleBadBundleViolation</h2>
<!-- backwards compatibility -->
<a id="schemaedgeconfigstorebundlebadbundleviolation"></a>
<a id="schema_EdgeConfigstoreBundleBadBundleViolation"></a>
<a id="tocSedgeconfigstorebundlebadbundleviolation"></a>
<a id="tocsedgeconfigstorebundlebadbundleviolation"></a>

```json
{
  "description": "string",
  "filename": "string"
}
```

A message type used to describe a single bundle validation error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A description of why the bundle is invalid and how to fix it.|
|filename|string|false|none|The filename (including relative path from the bundle root) in which the error occurred.|

<h2 id="tocS_GoogleApiHttpBody">GoogleApiHttpBody</h2>
<!-- backwards compatibility -->
<a id="schemagoogleapihttpbody"></a>
<a id="schema_GoogleApiHttpBody"></a>
<a id="tocSgoogleapihttpbody"></a>
<a id="tocsgoogleapihttpbody"></a>

```json
{
  "contentType": "string",
  "data": "string",
  "extensions": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentType|string|false|none|The HTTP Content-Type header value specifying the content type of the body.|
|data|string(byte)|false|none|The HTTP request/response body as raw binary.|
|extensions|[object]|false|none|Application specific response metadata. Must be set in the first response for streaming APIs.|

<h2 id="tocS_GoogleCloudApigeeV1Access">GoogleCloudApigeeV1Access</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1access"></a>
<a id="schema_GoogleCloudApigeeV1Access"></a>
<a id="tocSgooglecloudapigeev1access"></a>
<a id="tocsgooglecloudapigeev1access"></a>

```json
{
  "Get": {
    "name": "string",
    "value": "string"
  },
  "Remove": {
    "name": "string",
    "success": true
  },
  "Set": {
    "name": "string",
    "success": true,
    "value": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Get|[GoogleCloudApigeeV1AccessGet](#schemagooglecloudapigeev1accessget)|false|none|Get action. For example, "Get" : { "name" : "target.name", "value" : "default" }|
|Remove|[GoogleCloudApigeeV1AccessRemove](#schemagooglecloudapigeev1accessremove)|false|none|Remove action. For example, "Remove" : { "name" : "target.name", "success" : true }|
|Set|[GoogleCloudApigeeV1AccessSet](#schemagooglecloudapigeev1accessset)|false|none|Set action. For example, "Set" : { "name" : "target.name", "success" : true, "value" : "default" }|

<h2 id="tocS_GoogleCloudApigeeV1AccessGet">GoogleCloudApigeeV1AccessGet</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1accessget"></a>
<a id="schema_GoogleCloudApigeeV1AccessGet"></a>
<a id="tocSgooglecloudapigeev1accessget"></a>
<a id="tocsgooglecloudapigeev1accessget"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

Get action. For example, "Get" : { "name" : "target.name", "value" : "default" }

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_GoogleCloudApigeeV1AccessRemove">GoogleCloudApigeeV1AccessRemove</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1accessremove"></a>
<a id="schema_GoogleCloudApigeeV1AccessRemove"></a>
<a id="tocSgooglecloudapigeev1accessremove"></a>
<a id="tocsgooglecloudapigeev1accessremove"></a>

```json
{
  "name": "string",
  "success": true
}
```

Remove action. For example, "Remove" : { "name" : "target.name", "success" : true }

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_GoogleCloudApigeeV1AccessSet">GoogleCloudApigeeV1AccessSet</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1accessset"></a>
<a id="schema_GoogleCloudApigeeV1AccessSet"></a>
<a id="tocSgooglecloudapigeev1accessset"></a>
<a id="tocsgooglecloudapigeev1accessset"></a>

```json
{
  "name": "string",
  "success": true,
  "value": "string"
}
```

Set action. For example, "Set" : { "name" : "target.name", "success" : true, "value" : "default" }

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|success|boolean|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_GoogleCloudApigeeV1ActivateNatAddressRequest">GoogleCloudApigeeV1ActivateNatAddressRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1activatenataddressrequest"></a>
<a id="schema_GoogleCloudApigeeV1ActivateNatAddressRequest"></a>
<a id="tocSgooglecloudapigeev1activatenataddressrequest"></a>
<a id="tocsgooglecloudapigeev1activatenataddressrequest"></a>

```json
{}
```

Request for ActivateNatAddressRequest. Activate the nat address request.

<h2 id="tocS_GoogleCloudApigeeV1AddonsConfig">GoogleCloudApigeeV1AddonsConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1addonsconfig"></a>
<a id="schema_GoogleCloudApigeeV1AddonsConfig"></a>
<a id="tocSgooglecloudapigeev1addonsconfig"></a>
<a id="tocsgooglecloudapigeev1addonsconfig"></a>

```json
{
  "advancedApiOpsConfig": {
    "enabled": true
  },
  "apiSecurityConfig": {
    "enabled": true,
    "expiresAt": "string"
  },
  "connectorsPlatformConfig": {
    "enabled": true,
    "expiresAt": "string"
  },
  "integrationConfig": {
    "enabled": true
  },
  "monetizationConfig": {
    "enabled": true
  }
}
```

Add-on configurations for the Apigee organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advancedApiOpsConfig|[GoogleCloudApigeeV1AdvancedApiOpsConfig](#schemagooglecloudapigeev1advancedapiopsconfig)|false|none|Configuration for the Advanced API Ops add-on.|
|apiSecurityConfig|[GoogleCloudApigeeV1ApiSecurityConfig](#schemagooglecloudapigeev1apisecurityconfig)|false|none|Configuration for the API Security add-on.|
|connectorsPlatformConfig|[GoogleCloudApigeeV1ConnectorsPlatformConfig](#schemagooglecloudapigeev1connectorsplatformconfig)|false|none|Configuration for the Connectors Platform add-on.|
|integrationConfig|[GoogleCloudApigeeV1IntegrationConfig](#schemagooglecloudapigeev1integrationconfig)|false|none|Configuration for the Integration add-on.|
|monetizationConfig|[GoogleCloudApigeeV1MonetizationConfig](#schemagooglecloudapigeev1monetizationconfig)|false|none|Configuration for the Monetization add-on.|

<h2 id="tocS_GoogleCloudApigeeV1AdjustDeveloperBalanceRequest">GoogleCloudApigeeV1AdjustDeveloperBalanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1adjustdeveloperbalancerequest"></a>
<a id="schema_GoogleCloudApigeeV1AdjustDeveloperBalanceRequest"></a>
<a id="tocSgooglecloudapigeev1adjustdeveloperbalancerequest"></a>
<a id="tocsgooglecloudapigeev1adjustdeveloperbalancerequest"></a>

```json
{
  "adjustment": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  }
}
```

Request for AdjustDeveloperBalance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adjustment|[GoogleTypeMoney](#schemagoogletypemoney)|false|none|* A positive value of `adjustment` means that that the API provider wants to adjust the balance for an under-charged developer i.e. the balance of the developer will decrease. * A negative value of `adjustment` means that that the API provider wants to adjust the balance for an over-charged developer i.e. the balance of the developer will increase.|

<h2 id="tocS_GoogleCloudApigeeV1AdvancedApiOpsConfig">GoogleCloudApigeeV1AdvancedApiOpsConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1advancedapiopsconfig"></a>
<a id="schema_GoogleCloudApigeeV1AdvancedApiOpsConfig"></a>
<a id="tocSgooglecloudapigeev1advancedapiopsconfig"></a>
<a id="tocsgooglecloudapigeev1advancedapiopsconfig"></a>

```json
{
  "enabled": true
}
```

Configuration for the Advanced API Ops add-on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Flag that specifies whether the Advanced API Ops add-on is enabled.|

<h2 id="tocS_GoogleCloudApigeeV1Alias">GoogleCloudApigeeV1Alias</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1alias"></a>
<a id="schema_GoogleCloudApigeeV1Alias"></a>
<a id="tocSgooglecloudapigeev1alias"></a>
<a id="tocsgooglecloudapigeev1alias"></a>

```json
{
  "alias": "string",
  "certsInfo": {
    "certInfo": [
      {
        "basicConstraints": "string",
        "expiryDate": "string",
        "isValid": "string",
        "issuer": "string",
        "publicKey": "string",
        "serialNumber": "string",
        "sigAlgName": "string",
        "subject": "string",
        "subjectAlternativeNames": [
          "string"
        ],
        "validFrom": "string",
        "version": 0
      }
    ]
  },
  "type": "ALIAS_TYPE_UNSPECIFIED"
}
```

Reference to a certificate or key/certificate pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|string|false|none|Resource ID for this alias. Values must match the regular expression `[^/]{1,255}`.|
|certsInfo|[GoogleCloudApigeeV1Certificate](#schemagooglecloudapigeev1certificate)|false|none|Chain of certificates under this alias.|
|type|string|false|none|Type of alias.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ALIAS_TYPE_UNSPECIFIED|
|type|CERT|
|type|KEY_CERT|

<h2 id="tocS_GoogleCloudApigeeV1AliasRevisionConfig">GoogleCloudApigeeV1AliasRevisionConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1aliasrevisionconfig"></a>
<a id="schema_GoogleCloudApigeeV1AliasRevisionConfig"></a>
<a id="tocSgooglecloudapigeev1aliasrevisionconfig"></a>
<a id="tocsgooglecloudapigeev1aliasrevisionconfig"></a>

```json
{
  "location": "string",
  "name": "string",
  "type": "ALIAS_TYPE_UNSPECIFIED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|string|false|none|Location of the alias file. For example, a Google Cloud Storage URI.|
|name|string|false|none|Name of the alias revision included in the keystore in the following format: `organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}/revisions/{rev}`|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ALIAS_TYPE_UNSPECIFIED|
|type|CERT|
|type|KEY_CERT|

<h2 id="tocS_GoogleCloudApigeeV1ApiCategory">GoogleCloudApigeeV1ApiCategory</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1apicategory"></a>
<a id="schema_GoogleCloudApigeeV1ApiCategory"></a>
<a id="tocSgooglecloudapigeev1apicategory"></a>
<a id="tocsgooglecloudapigeev1apicategory"></a>

```json
{
  "data": {
    "id": "string",
    "name": "string",
    "siteId": "string",
    "updateTime": "string"
  },
  "errorCode": "string",
  "message": "string",
  "requestId": "string",
  "status": "string"
}
```

the Api category resource wrapped with response status, error_code etc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[GoogleCloudApigeeV1ApiCategoryData](#schemagooglecloudapigeev1apicategorydata)|false|none|Details of category.|
|errorCode|string|false|none|ID that can be used to find errors in the log files.|
|message|string|false|none|Description of the operation.|
|requestId|string|false|none|ID that can be used to find request details in the log files.|
|status|string|false|none|Status of the operation.|

<h2 id="tocS_GoogleCloudApigeeV1ApiCategoryData">GoogleCloudApigeeV1ApiCategoryData</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1apicategorydata"></a>
<a id="schema_GoogleCloudApigeeV1ApiCategoryData"></a>
<a id="tocSgooglecloudapigeev1apicategorydata"></a>
<a id="tocsgooglecloudapigeev1apicategorydata"></a>

```json
{
  "id": "string",
  "name": "string",
  "siteId": "string",
  "updateTime": "string"
}
```

the Api category resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|ID of the category (a UUID).|
|name|string|false|none|Name of the category.|
|siteId|string|false|none|Name of the portal.|
|updateTime|string(int64)|false|none|Time the category was last modified in milliseconds since epoch.|

<h2 id="tocS_GoogleCloudApigeeV1ApiProduct">GoogleCloudApigeeV1ApiProduct</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1apiproduct"></a>
<a id="schema_GoogleCloudApigeeV1ApiProduct"></a>
<a id="tocSgooglecloudapigeev1apiproduct"></a>
<a id="tocsgooglecloudapigeev1apiproduct"></a>

```json
{
  "apiResources": [
    "string"
  ],
  "approvalType": "string",
  "attributes": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "createdAt": "string",
  "description": "string",
  "displayName": "string",
  "environments": [
    "string"
  ],
  "graphqlOperationGroup": {
    "operationConfigType": "string",
    "operationConfigs": [
      {
        "apiSource": "string",
        "attributes": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "operations": [
          {
            "operation": "string",
            "operationTypes": [
              "string"
            ]
          }
        ],
        "quota": {
          "interval": "string",
          "limit": "string",
          "timeUnit": "string"
        }
      }
    ]
  },
  "lastModifiedAt": "string",
  "name": "string",
  "operationGroup": {
    "operationConfigType": "string",
    "operationConfigs": [
      {
        "apiSource": "string",
        "attributes": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "operations": [
          {
            "methods": [
              "string"
            ],
            "resource": "string"
          }
        ],
        "quota": {
          "interval": "string",
          "limit": "string",
          "timeUnit": "string"
        }
      }
    ]
  },
  "proxies": [
    "string"
  ],
  "quota": "string",
  "quotaCounterScope": "QUOTA_COUNTER_SCOPE_UNSPECIFIED",
  "quotaInterval": "string",
  "quotaTimeUnit": "string",
  "scopes": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiResources|[string]|false|none|Comma-separated list of API resources to be bundled in the API product. By default, the resource paths are mapped from the `proxy.pathsuffix` variable. The proxy path suffix is defined as the URI fragment following the ProxyEndpoint base path. For example, if the `apiResources` element is defined to be `/forecastrss` and the base path defined for the API proxy is `/weather`, then only requests to `/weather/forecastrss` are permitted by the API product. You can select a specific path, or you can select all subpaths with the following wildcard: - `/**`: Indicates that all sub-URIs are included. - `/*` : Indicates that only URIs one level down are included. By default, / supports the same resources as /** as well as the base path defined by the API proxy. For example, if the base path of the API proxy is `/v1/weatherapikey`, then the API product supports requests to `/v1/weatherapikey` and to any sub-URIs, such as `/v1/weatherapikey/forecastrss`, `/v1/weatherapikey/region/CA`, and so on. For more information, see Managing API products.|
|approvalType|string|false|none|Flag that specifies how API keys are approved to access the APIs defined by the API product. If set to `manual`, the consumer key is generated and returned in "pending" state. In this case, the API keys won't work until they have been explicitly approved. If set to `auto`, the consumer key is generated and returned in "approved" state and can be used immediately. **Note:** Typically, `auto` is used to provide access to free or trial API products that provide limited quota or capabilities.|
|attributes|[[GoogleCloudApigeeV1Attribute](#schemagooglecloudapigeev1attribute)]|false|none|Array of attributes that may be used to extend the default API product profile with customer-specific metadata. You can specify a maximum of 18 attributes. Use this property to specify the access level of the API product as either `public`, `private`, or `internal`. Only products marked `public` are available to developers in the Apigee developer portal. For example, you can set a product to `internal` while it is in development and then change access to `public` when it is ready to release on the portal. API products marked as `private` do not appear on the portal, but can be accessed by external developers.|
|createdAt|string(int64)|false|none|Response only. Creation time of this environment as milliseconds since epoch.|
|description|string|false|none|Description of the API product. Include key information about the API product that is not captured by other fields.|
|displayName|string|false|none|Name displayed in the UI or developer portal to developers registering for API access.|
|environments|[string]|false|none|Comma-separated list of environment names to which the API product is bound. Requests to environments that are not listed are rejected. By specifying one or more environments, you can bind the resources listed in the API product to a specific environment, preventing developers from accessing those resources through API proxies deployed in another environment. This setting is used, for example, to prevent resources associated with API proxies in `prod` from being accessed by API proxies deployed in `test`.|
|graphqlOperationGroup|[GoogleCloudApigeeV1GraphQLOperationGroup](#schemagooglecloudapigeev1graphqloperationgroup)|false|none|Configuration used to group Apigee proxies or remote services with graphQL operation name, graphQL operation type and quotas. This grouping allows us to precisely set quota for a particular combination of graphQL name and operation type for a particular proxy request. If graphQL name is not set, this would imply quota will be applied on all graphQL requests matching the operation type.|
|lastModifiedAt|string(int64)|false|none|Response only. Modified time of this environment as milliseconds since epoch.|
|name|string|false|none|Internal name of the API product. Characters you can use in the name are restricted to: `A-Z0-9._\-$ %`. **Note:** The internal name cannot be edited when updating the API product.|
|operationGroup|[GoogleCloudApigeeV1OperationGroup](#schemagooglecloudapigeev1operationgroup)|false|none|Configuration used to group Apigee proxies or remote services with resources, method types, and quotas. The resource refers to the resource URI (excluding the base path). With this grouping, the API product creator is able to fine-tune and give precise control over which REST methods have access to specific resources and how many calls can be made (using the `quota` setting). **Note:** The `api_resources` setting cannot be specified for both the API product and operation group; otherwise the call will fail.|
|proxies|[string]|false|none|Comma-separated list of API proxy names to which this API product is bound. By specifying API proxies, you can associate resources in the API product with specific API proxies, preventing developers from accessing those resources through other API proxies. Apigee rejects requests to API proxies that are not listed. **Note:** The API proxy names must already exist in the specified environment as they will be validated upon creation.|
|quota|string|false|none|Number of request messages permitted per app by this API product for the specified `quotaInterval` and `quotaTimeUnit`. For example, a `quota` of 50, for a `quotaInterval` of 12 and a `quotaTimeUnit` of hours means 50 requests are allowed every 12 hours.|
|quotaCounterScope|string|false|none|Scope of the quota decides how the quota counter gets applied and evaluate for quota violation. If the Scope is set as PROXY, then all the operations defined for the APIproduct that are associated with the same proxy will share the same quota counter set at the APIproduct level, making it a global counter at a proxy level. If the Scope is set as OPERATION, then each operations get the counter set at the API product dedicated, making it a local counter. Note that, the QuotaCounterScope applies only when an operation does not have dedicated quota set for itself.|
|quotaInterval|string|false|none|Time interval over which the number of request messages is calculated.|
|quotaTimeUnit|string|false|none|Time unit defined for the `quotaInterval`. Valid values include `minute`, `hour`, `day`, or `month`.|
|scopes|[string]|false|none|Comma-separated list of OAuth scopes that are validated at runtime. Apigee validates that the scopes in any access token presented match the scopes defined in the OAuth policy associated with the API product.|

#### Enumerated Values

|Property|Value|
|---|---|
|quotaCounterScope|QUOTA_COUNTER_SCOPE_UNSPECIFIED|
|quotaCounterScope|PROXY|
|quotaCounterScope|OPERATION|

<h2 id="tocS_GoogleCloudApigeeV1ApiProductRef">GoogleCloudApigeeV1ApiProductRef</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1apiproductref"></a>
<a id="schema_GoogleCloudApigeeV1ApiProductRef"></a>
<a id="tocSgooglecloudapigeev1apiproductref"></a>
<a id="tocsgooglecloudapigeev1apiproductref"></a>

```json
{
  "apiproduct": "string",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiproduct|string|false|none|Name of the API product.|
|status|string|false|none|Status of the API product. Valid values are `approved` or `revoked`.|

<h2 id="tocS_GoogleCloudApigeeV1ApiProxy">GoogleCloudApigeeV1ApiProxy</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1apiproxy"></a>
<a id="schema_GoogleCloudApigeeV1ApiProxy"></a>
<a id="tocSgooglecloudapigeev1apiproxy"></a>
<a id="tocsgooglecloudapigeev1apiproxy"></a>

```json
{
  "apiProxyType": "API_PROXY_TYPE_UNSPECIFIED",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "latestRevisionId": "string",
  "metaData": {
    "createdAt": "string",
    "lastModifiedAt": "string",
    "subType": "string"
  },
  "name": "string",
  "readOnly": true,
  "revision": [
    "string"
  ]
}
```

Metadata describing the API proxy

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiProxyType|string|false|read-only|Output only. The type of the API proxy.|
|labels|object|false|none|User labels applied to this API Proxy.|
|latestRevisionId|string|false|read-only|Output only. The id of the most recently created revision for this api proxy.|
|metaData|[GoogleCloudApigeeV1EntityMetadata](#schemagooglecloudapigeev1entitymetadata)|false|none|Output only. Metadata describing the API proxy.|
|name|string|false|read-only|Output only. Name of the API proxy.|
|readOnly|boolean|false|read-only|Output only. Whether this proxy is read-only. A read-only proxy cannot have new revisions created through calls to CreateApiProxyRevision. A proxy is read-only if it was generated by an archive.|
|revision|[string]|false|read-only|Output only. List of revisions defined for the API proxy.|

#### Enumerated Values

|Property|Value|
|---|---|
|apiProxyType|API_PROXY_TYPE_UNSPECIFIED|
|apiProxyType|PROGRAMMABLE|
|apiProxyType|CONFIGURABLE|

<h2 id="tocS_GoogleCloudApigeeV1ApiProxyRevision">GoogleCloudApigeeV1ApiProxyRevision</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1apiproxyrevision"></a>
<a id="schema_GoogleCloudApigeeV1ApiProxyRevision"></a>
<a id="tocSgooglecloudapigeev1apiproxyrevision"></a>
<a id="tocsgooglecloudapigeev1apiproxyrevision"></a>

```json
{
  "archive": "string",
  "basepaths": [
    "string"
  ],
  "configurationVersion": {
    "majorVersion": 0,
    "minorVersion": 0
  },
  "contextInfo": "string",
  "createdAt": "string",
  "description": "string",
  "displayName": "string",
  "entityMetaDataAsProperties": {
    "property1": "string",
    "property2": "string"
  },
  "integrationEndpoints": [
    "string"
  ],
  "lastModifiedAt": "string",
  "name": "string",
  "policies": [
    "string"
  ],
  "proxies": [
    "string"
  ],
  "proxyEndpoints": [
    "string"
  ],
  "resourceFiles": {
    "resourceFile": [
      {
        "name": "string",
        "type": "string"
      }
    ]
  },
  "resources": [
    "string"
  ],
  "revision": "string",
  "sharedFlows": [
    "string"
  ],
  "spec": "string",
  "targetEndpoints": [
    "string"
  ],
  "targetServers": [
    "string"
  ],
  "targets": [
    "string"
  ],
  "teams": [
    "string"
  ],
  "type": "string"
}
```

API proxy revision.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archive|string|false|read-only|Output only. The archive that generated this proxy revision. This field is only present on proxy revisions that were generated by an archive. Proxies generated by archives cannot be updated, deleted, or deployed to other environments. Format: `organizations/*/environments/*/archiveDeployments/*`|
|basepaths|[string]|false|none|Base URL of the API proxy.|
|configurationVersion|[GoogleCloudApigeeV1ConfigVersion](#schemagooglecloudapigeev1configversion)|false|none|Version of the API proxy configuration schema to which the API proxy conforms. Currently, the only supported value is 4.0 (`majorVersion.minorVersion`). This setting may be used in the future to track the evolution of the API proxy format.|
|contextInfo|string|false|none|Revision number, app name, and organization for the API proxy.|
|createdAt|string(int64)|false|none|Time that the API proxy revision was created in milliseconds since epoch.|
|description|string|false|none|Description of the API proxy revision.|
|displayName|string|false|none|Human-readable name of the API proxy.|
|entityMetaDataAsProperties|object|false|none|Metadata describing the API proxy revision as a key-value map.|
|integrationEndpoints|[string]|false|none|List of IntegrationEndpoints in the '/integration-endpoints' directory of the API proxy. This is a 'manifest' setting designed to provide visibility into the contents of the API proxy.|
|lastModifiedAt|string(int64)|false|none|Time that the API proxy revision was last modified in milliseconds since epoch.|
|name|string|false|none|Name of the API proxy.|
|policies|[string]|false|none|List of policy names included in the API proxy revision..|
|proxies|[string]|false|none|List of proxy names included in the API proxy revision.|
|proxyEndpoints|[string]|false|none|List of ProxyEndpoints in the `/proxies` directory of the API proxy. Typically, this element is included only when the API proxy was created using the Edge UI. This is a 'manifest' setting designed to provide visibility into the contents of the API proxy.|
|resourceFiles|[GoogleCloudApigeeV1ResourceFiles](#schemagooglecloudapigeev1resourcefiles)|false|none|List of resource files included in the API proxy revision.|
|resources|[string]|false|none|List of the resources included in the API proxy revision formatted as "{type}://{name}".|
|revision|string|false|none|API proxy revision.|
|sharedFlows|[string]|false|none|List of the shared flows included in the API proxy revision.|
|spec|string|false|none|OpenAPI Specification that is associated with the API proxy. The value is set to a URL or to a path in the specification store.|
|targetEndpoints|[string]|false|none|List of TargetEndpoints in the `/targets` directory of the API proxy. Typically, this element is included only when the API proxy was created using the Edge UI. This is a 'manifest' setting designed to provide visibility into the contents of the API proxy.|
|targetServers|[string]|false|none|List of TargetServers referenced in any TargetEndpoint in the API proxy. Typically, you will see this element only when the API proxy was created using the Edge UI. This is a 'manifest' setting designed to provide visibility into the contents of the API proxy.|
|targets|[string]|false|none|List of the targets included in the API proxy revision.|
|teams|[string]|false|none|List of the teams included in the API proxy revision.|
|type|string|false|none|Type. Set to `Application`. Maintained for compatibility with the Apigee Edge API.|

<h2 id="tocS_GoogleCloudApigeeV1ApiResponseWrapper">GoogleCloudApigeeV1ApiResponseWrapper</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1apiresponsewrapper"></a>
<a id="schema_GoogleCloudApigeeV1ApiResponseWrapper"></a>
<a id="tocSgooglecloudapigeev1apiresponsewrapper"></a>
<a id="tocsgooglecloudapigeev1apiresponsewrapper"></a>

```json
{
  "errorCode": "string",
  "message": "string",
  "requestId": "string",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|string|false|none|ID that can be used to find errors in the log files.|
|message|string|false|none|Description of the operation.|
|requestId|string|false|none|ID that can be used to find request details in the log files.|
|status|string|false|none|Status of the operation.|

<h2 id="tocS_GoogleCloudApigeeV1ApiSecurityConfig">GoogleCloudApigeeV1ApiSecurityConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1apisecurityconfig"></a>
<a id="schema_GoogleCloudApigeeV1ApiSecurityConfig"></a>
<a id="tocSgooglecloudapigeev1apisecurityconfig"></a>
<a id="tocsgooglecloudapigeev1apisecurityconfig"></a>

```json
{
  "enabled": true,
  "expiresAt": "string"
}
```

Configurations of the API Security add-on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Flag that specifies whether the API security add-on is enabled.|
|expiresAt|string(int64)|false|read-only|Output only. Time at which the API Security add-on expires in in milliseconds since epoch. If unspecified, the add-on will never expire.|

<h2 id="tocS_GoogleCloudApigeeV1ApiSecurityRuntimeConfig">GoogleCloudApigeeV1ApiSecurityRuntimeConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1apisecurityruntimeconfig"></a>
<a id="schema_GoogleCloudApigeeV1ApiSecurityRuntimeConfig"></a>
<a id="tocSgooglecloudapigeev1apisecurityruntimeconfig"></a>
<a id="tocsgooglecloudapigeev1apisecurityruntimeconfig"></a>

```json
{
  "location": [
    "string"
  ],
  "name": "string",
  "revisionId": "string",
  "uid": "string",
  "updateTime": "string"
}
```

Response for GetApiSecurityRuntimeConfig[EnvironmentService.GetApiSecurityRuntimeConfig].

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|[string]|false|none|A list of up to 5 Cloud Storage Blobs that contain SecurityActions.|
|name|string|false|none|Name of the environment API Security Runtime configuration resource. Format: `organizations/{org}/environments/{env}/apiSecurityRuntimeConfig`|
|revisionId|string(int64)|false|none|Revision ID of the API Security Runtime configuration. The higher the value, the more recently the configuration was deployed.|
|uid|string|false|none|Unique ID for the API Security Runtime configuration. The ID will only change if the environment is deleted and recreated.|
|updateTime|string(google-datetime)|false|none|Time that the API Security Runtime configuration was updated.|

<h2 id="tocS_GoogleCloudApigeeV1App">GoogleCloudApigeeV1App</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1app"></a>
<a id="schema_GoogleCloudApigeeV1App"></a>
<a id="tocSgooglecloudapigeev1app"></a>
<a id="tocsgooglecloudapigeev1app"></a>

```json
{
  "apiProducts": [
    {
      "apiproduct": "string",
      "status": "string"
    }
  ],
  "appId": "string",
  "attributes": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "callbackUrl": "string",
  "companyName": "string",
  "createdAt": "string",
  "credentials": [
    {
      "apiProducts": [
        {
          "apiproduct": "string",
          "status": "string"
        }
      ],
      "attributes": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "consumerKey": "string",
      "consumerSecret": "string",
      "expiresAt": "string",
      "issuedAt": "string",
      "scopes": [
        "string"
      ],
      "status": "string"
    }
  ],
  "developerId": "string",
  "keyExpiresIn": "string",
  "lastModifiedAt": "string",
  "name": "string",
  "scopes": [
    "string"
  ],
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiProducts|[[GoogleCloudApigeeV1ApiProductRef](#schemagooglecloudapigeev1apiproductref)]|false|none|List of API products associated with the app.|
|appId|string|false|none|ID of the app.|
|attributes|[[GoogleCloudApigeeV1Attribute](#schemagooglecloudapigeev1attribute)]|false|none|List of attributes.|
|callbackUrl|string|false|none|Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to apps.|
|companyName|string|false|none|Name of the company that owns the app.|
|createdAt|string(int64)|false|read-only|Output only. Unix time when the app was created.|
|credentials|[[GoogleCloudApigeeV1Credential](#schemagooglecloudapigeev1credential)]|false|read-only|Output only. Set of credentials for the app. Credentials are API key/secret pairs associated with API products.|
|developerId|string|false|none|ID of the developer.|
|keyExpiresIn|string(int64)|false|none|Duration, in milliseconds, of the consumer key that will be generated for the app. The default value, -1, indicates an infinite validity period. Once set, the expiration can't be updated. json key: keyExpiresIn|
|lastModifiedAt|string(int64)|false|read-only|Output only. Last modified time as milliseconds since epoch.|
|name|string|false|none|Name of the app.|
|scopes|[string]|false|none|Scopes to apply to the app. The specified scope names must already exist on the API product that you associate with the app.|
|status|string|false|none|Status of the credential.|

<h2 id="tocS_GoogleCloudApigeeV1ArchiveDeployment">GoogleCloudApigeeV1ArchiveDeployment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1archivedeployment"></a>
<a id="schema_GoogleCloudApigeeV1ArchiveDeployment"></a>
<a id="tocSgooglecloudapigeev1archivedeployment"></a>
<a id="tocsgooglecloudapigeev1archivedeployment"></a>

```json
{
  "createdAt": "string",
  "gcsUri": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "operation": "string",
  "updatedAt": "string"
}
```

Archive Deployment information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(int64)|false|read-only|Output only. The time at which the Archive Deployment was created in milliseconds since the epoch.|
|gcsUri|string|false|none|Input only. The Google Cloud Storage signed URL returned from GenerateUploadUrl and used to upload the Archive zip file.|
|labels|object|false|none|User-supplied key-value pairs used to organize ArchiveDeployments. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62} Label values must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63} No more than 64 labels can be associated with a given store.|
|name|string|false|none|Name of the Archive Deployment in the following format: `organizations/{org}/environments/{env}/archiveDeployments/{id}`.|
|operation|string|false|read-only|Output only. A reference to the LRO that created this Archive Deployment in the following format: `organizations/{org}/operations/{id}`|
|updatedAt|string(int64)|false|read-only|Output only. The time at which the Archive Deployment was updated in milliseconds since the epoch.|

<h2 id="tocS_GoogleCloudApigeeV1AsyncQuery">GoogleCloudApigeeV1AsyncQuery</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1asyncquery"></a>
<a id="schema_GoogleCloudApigeeV1AsyncQuery"></a>
<a id="tocSgooglecloudapigeev1asyncquery"></a>
<a id="tocsgooglecloudapigeev1asyncquery"></a>

```json
{
  "created": "string",
  "envgroupHostname": "string",
  "error": "string",
  "executionTime": "string",
  "name": "string",
  "queryParams": {
    "dimensions": [
      "string"
    ],
    "endTimestamp": "string",
    "metrics": [
      "string"
    ],
    "outputFormat": "string",
    "startTimestamp": "string",
    "timeUnit": "string"
  },
  "reportDefinitionId": "string",
  "result": {
    "expires": "string",
    "self": "string"
  },
  "resultFileSize": "string",
  "resultRows": "string",
  "self": "string",
  "state": "string",
  "updated": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string|false|none|Creation time of the query.|
|envgroupHostname|string|false|none|Hostname is available only when query is executed at host level.|
|error|string|false|none|Error is set when query fails.|
|executionTime|string|false|none|ExecutionTime is available only after the query is completed.|
|name|string|false|none|Asynchronous Query Name.|
|queryParams|[GoogleCloudApigeeV1QueryMetadata](#schemagooglecloudapigeev1querymetadata)|false|none|Contains information like metrics, dimenstions etc of the AsyncQuery.|
|reportDefinitionId|string|false|none|Asynchronous Report ID.|
|result|[GoogleCloudApigeeV1AsyncQueryResult](#schemagooglecloudapigeev1asyncqueryresult)|false|none|Result is available only after the query is completed.|
|resultFileSize|string|false|none|ResultFileSize is available only after the query is completed.|
|resultRows|string(int64)|false|none|ResultRows is available only after the query is completed.|
|self|string|false|none|Self link of the query. Example: `/organizations/myorg/environments/myenv/queries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd` or following format if query is running at host level: `/organizations/myorg/hostQueries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd`|
|state|string|false|none|Query state could be "enqueued", "running", "completed", "failed".|
|updated|string|false|none|Last updated timestamp for the query.|

<h2 id="tocS_GoogleCloudApigeeV1AsyncQueryResult">GoogleCloudApigeeV1AsyncQueryResult</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1asyncqueryresult"></a>
<a id="schema_GoogleCloudApigeeV1AsyncQueryResult"></a>
<a id="tocSgooglecloudapigeev1asyncqueryresult"></a>
<a id="tocsgooglecloudapigeev1asyncqueryresult"></a>

```json
{
  "expires": "string",
  "self": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expires|string|false|none|Query result will be unaccessable after this time.|
|self|string|false|none|Self link of the query results. Example: `/organizations/myorg/environments/myenv/queries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd/result` or following format if query is running at host level: `/organizations/myorg/hostQueries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd/result`|

<h2 id="tocS_GoogleCloudApigeeV1AsyncQueryResultView">GoogleCloudApigeeV1AsyncQueryResultView</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1asyncqueryresultview"></a>
<a id="schema_GoogleCloudApigeeV1AsyncQueryResultView"></a>
<a id="tocSgooglecloudapigeev1asyncqueryresultview"></a>
<a id="tocsgooglecloudapigeev1asyncqueryresultview"></a>

```json
{
  "code": 0,
  "error": "string",
  "metadata": {
    "dimensions": [
      "string"
    ],
    "endTimestamp": "string",
    "metrics": [
      "string"
    ],
    "outputFormat": "string",
    "startTimestamp": "string",
    "timeUnit": "string"
  },
  "rows": [
    null
  ],
  "state": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|Error code when there is a failure.|
|error|string|false|none|Error message when there is a failure.|
|metadata|[GoogleCloudApigeeV1QueryMetadata](#schemagooglecloudapigeev1querymetadata)|false|none|Metadata contains information like metrics, dimenstions etc of the AsyncQuery.|
|rows|[object]|false|none|Rows of query result. Each row is a JSON object. Example: {sum(message_count): 1, developer_app: "(not set)",…}|
|state|string|false|none|State of retrieving ResultView.|

<h2 id="tocS_GoogleCloudApigeeV1Attribute">GoogleCloudApigeeV1Attribute</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1attribute"></a>
<a id="schema_GoogleCloudApigeeV1Attribute"></a>
<a id="tocSgooglecloudapigeev1attribute"></a>
<a id="tocsgooglecloudapigeev1attribute"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

Key-value pair to store extra metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|API key of the attribute.|
|value|string|false|none|Value of the attribute.|

<h2 id="tocS_GoogleCloudApigeeV1Attributes">GoogleCloudApigeeV1Attributes</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1attributes"></a>
<a id="schema_GoogleCloudApigeeV1Attributes"></a>
<a id="tocSgooglecloudapigeev1attributes"></a>
<a id="tocsgooglecloudapigeev1attributes"></a>

```json
{
  "attribute": [
    {
      "name": "string",
      "value": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attribute|[[GoogleCloudApigeeV1Attribute](#schemagooglecloudapigeev1attribute)]|false|none|List of attributes.|

<h2 id="tocS_GoogleCloudApigeeV1CanaryEvaluation">GoogleCloudApigeeV1CanaryEvaluation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1canaryevaluation"></a>
<a id="schema_GoogleCloudApigeeV1CanaryEvaluation"></a>
<a id="tocSgooglecloudapigeev1canaryevaluation"></a>
<a id="tocsgooglecloudapigeev1canaryevaluation"></a>

```json
{
  "control": "string",
  "createTime": "string",
  "endTime": "string",
  "metricLabels": {
    "env": "string",
    "instance_id": "string",
    "location": "string"
  },
  "name": "string",
  "startTime": "string",
  "state": "STATE_UNSPECIFIED",
  "treatment": "string",
  "verdict": "VERDICT_UNSPECIFIED"
}
```

CanaryEvaluation represents the canary analysis between two versions of the runtime that is serving requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|control|string|false|none|Required. The stable version that is serving requests.|
|createTime|string(google-datetime)|false|read-only|Output only. Create time of the canary evaluation.|
|endTime|string(google-datetime)|false|none|Required. End time for the evaluation's analysis.|
|metricLabels|[GoogleCloudApigeeV1CanaryEvaluationMetricLabels](#schemagooglecloudapigeev1canaryevaluationmetriclabels)|false|none|Required. Labels used to filter the metrics used for a canary evaluation.|
|name|string|false|read-only|Output only. Name of the canary evalution.|
|startTime|string(google-datetime)|false|none|Required. Start time for the canary evaluation's analysis.|
|state|string|false|read-only|Output only. The current state of the canary evaluation.|
|treatment|string|false|none|Required. The newer version that is serving requests.|
|verdict|string|false|read-only|Output only. The resulting verdict of the canary evaluations: NONE, PASS, or FAIL.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|RUNNING|
|state|SUCCEEDED|
|verdict|VERDICT_UNSPECIFIED|
|verdict|NONE|
|verdict|FAIL|
|verdict|PASS|

<h2 id="tocS_GoogleCloudApigeeV1CanaryEvaluationMetricLabels">GoogleCloudApigeeV1CanaryEvaluationMetricLabels</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1canaryevaluationmetriclabels"></a>
<a id="schema_GoogleCloudApigeeV1CanaryEvaluationMetricLabels"></a>
<a id="tocSgooglecloudapigeev1canaryevaluationmetriclabels"></a>
<a id="tocsgooglecloudapigeev1canaryevaluationmetriclabels"></a>

```json
{
  "env": "string",
  "instance_id": "string",
  "location": "string"
}
```

Labels that can be used to filter Apigee metrics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|env|string|false|none|The environment ID associated with the metrics.|
|instance_id|string|false|none|Required. The instance ID associated with the metrics. In Apigee Hybrid, the value is configured during installation.|
|location|string|false|none|Required. The location associated with the metrics.|

<h2 id="tocS_GoogleCloudApigeeV1CertInfo">GoogleCloudApigeeV1CertInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1certinfo"></a>
<a id="schema_GoogleCloudApigeeV1CertInfo"></a>
<a id="tocSgooglecloudapigeev1certinfo"></a>
<a id="tocsgooglecloudapigeev1certinfo"></a>

```json
{
  "basicConstraints": "string",
  "expiryDate": "string",
  "isValid": "string",
  "issuer": "string",
  "publicKey": "string",
  "serialNumber": "string",
  "sigAlgName": "string",
  "subject": "string",
  "subjectAlternativeNames": [
    "string"
  ],
  "validFrom": "string",
  "version": 0
}
```

X.509 certificate as defined in RFC 5280.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConstraints|string|false|none|X.509 basic constraints extension.|
|expiryDate|string(int64)|false|none|X.509 `notAfter` validity period in milliseconds since epoch.|
|isValid|string|false|none|Flag that specifies whether the certificate is valid. Flag is set to `Yes` if the certificate is valid, `No` if expired, or `Not yet` if not yet valid.|
|issuer|string|false|none|X.509 issuer.|
|publicKey|string|false|none|Public key component of the X.509 subject public key info.|
|serialNumber|string|false|none|X.509 serial number.|
|sigAlgName|string|false|none|X.509 signatureAlgorithm.|
|subject|string|false|none|X.509 subject.|
|subjectAlternativeNames|[string]|false|none|X.509 subject alternative names (SANs) extension.|
|validFrom|string(int64)|false|none|X.509 `notBefore` validity period in milliseconds since epoch.|
|version|integer(int32)|false|none|X.509 version.|

<h2 id="tocS_GoogleCloudApigeeV1Certificate">GoogleCloudApigeeV1Certificate</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1certificate"></a>
<a id="schema_GoogleCloudApigeeV1Certificate"></a>
<a id="tocSgooglecloudapigeev1certificate"></a>
<a id="tocsgooglecloudapigeev1certificate"></a>

```json
{
  "certInfo": [
    {
      "basicConstraints": "string",
      "expiryDate": "string",
      "isValid": "string",
      "issuer": "string",
      "publicKey": "string",
      "serialNumber": "string",
      "sigAlgName": "string",
      "subject": "string",
      "subjectAlternativeNames": [
        "string"
      ],
      "validFrom": "string",
      "version": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certInfo|[[GoogleCloudApigeeV1CertInfo](#schemagooglecloudapigeev1certinfo)]|false|none|Chain of certificates under this name.|

<h2 id="tocS_GoogleCloudApigeeV1CommonNameConfig">GoogleCloudApigeeV1CommonNameConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1commonnameconfig"></a>
<a id="schema_GoogleCloudApigeeV1CommonNameConfig"></a>
<a id="tocSgooglecloudapigeev1commonnameconfig"></a>
<a id="tocsgooglecloudapigeev1commonnameconfig"></a>

```json
{
  "matchWildCards": true,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matchWildCards|boolean|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_GoogleCloudApigeeV1ComputeEnvironmentScoresRequest">GoogleCloudApigeeV1ComputeEnvironmentScoresRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1computeenvironmentscoresrequest"></a>
<a id="schema_GoogleCloudApigeeV1ComputeEnvironmentScoresRequest"></a>
<a id="tocSgooglecloudapigeev1computeenvironmentscoresrequest"></a>
<a id="tocsgooglecloudapigeev1computeenvironmentscoresrequest"></a>

```json
{
  "filters": [
    {
      "scorePath": "string"
    }
  ],
  "pageSize": 0,
  "pageToken": "string",
  "timeRange": {
    "endTime": "string",
    "startTime": "string"
  }
}
```

Request for ComputeEnvironmentScores.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|[[GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter](#schemagooglecloudapigeev1computeenvironmentscoresrequestfilter)]|false|none|Optional. Filters are used to filter scored components. Return all the components if no filter is mentioned. Example: [{ "scorePath": "/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/source" }, { "scorePath": "/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/target", }] This will return components with path: "/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/source" OR "/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/target"|
|pageSize|integer(int32)|false|none|Optional. The maximum number of subcomponents to be returned in a single page. The service may return fewer than this value. If unspecified, at most 100 subcomponents will be returned in a single page.|
|pageToken|string|false|none|Optional. A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|timeRange|[GoogleTypeInterval](#schemagoogletypeinterval)|false|none|Required. Time range for score calculation. At most 14 days of scores will be returned.|

<h2 id="tocS_GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter">GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1computeenvironmentscoresrequestfilter"></a>
<a id="schema_GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter"></a>
<a id="tocSgooglecloudapigeev1computeenvironmentscoresrequestfilter"></a>
<a id="tocsgooglecloudapigeev1computeenvironmentscoresrequestfilter"></a>

```json
{
  "scorePath": "string"
}
```

Filter scores by component path. Used custom filter instead of AIP-160 as the use cases are highly constrained and predictable.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scorePath|string|false|none|Optional. Return scores for this component. Example: "/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/source"|

<h2 id="tocS_GoogleCloudApigeeV1ComputeEnvironmentScoresResponse">GoogleCloudApigeeV1ComputeEnvironmentScoresResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1computeenvironmentscoresresponse"></a>
<a id="schema_GoogleCloudApigeeV1ComputeEnvironmentScoresResponse"></a>
<a id="tocSgooglecloudapigeev1computeenvironmentscoresresponse"></a>
<a id="tocsgooglecloudapigeev1computeenvironmentscoresresponse"></a>

```json
{
  "nextPageToken": "string",
  "scores": [
    {
      "component": {
        "calculateTime": "string",
        "dataCaptureTime": "string",
        "drilldownPaths": [
          "string"
        ],
        "recommendations": [
          {
            "actions": [
              {
                "actionContext": {
                  "documentationLink": "string"
                },
                "description": "string"
              }
            ],
            "description": "string",
            "impact": 0,
            "title": "string"
          }
        ],
        "score": 0,
        "scorePath": "string"
      },
      "subcomponents": [
        {
          "calculateTime": "string",
          "dataCaptureTime": "string",
          "drilldownPaths": [
            "string"
          ],
          "recommendations": [
            {
              "actions": [
                {
                  "actionContext": {
                    "documentationLink": "string"
                  },
                  "description": "string"
                }
              ],
              "description": "string",
              "impact": 0,
              "title": "string"
            }
          ],
          "score": 0,
          "scorePath": "string"
        }
      ],
      "timeRange": {
        "endTime": "string",
        "startTime": "string"
      }
    }
  ]
}
```

Response for ComputeEnvironmentScores.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A page token, received from a previous `ComputeScore` call. Provide this to retrieve the subsequent page.|
|scores|[[GoogleCloudApigeeV1Score](#schemagooglecloudapigeev1score)]|false|none|List of scores. One score per day.|

<h2 id="tocS_GoogleCloudApigeeV1ConfigVersion">GoogleCloudApigeeV1ConfigVersion</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1configversion"></a>
<a id="schema_GoogleCloudApigeeV1ConfigVersion"></a>
<a id="tocSgooglecloudapigeev1configversion"></a>
<a id="tocsgooglecloudapigeev1configversion"></a>

```json
{
  "majorVersion": 0,
  "minorVersion": 0
}
```

Version of the API proxy configuration schema. Currently, only 4.0 is supported.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|majorVersion|integer(int32)|false|none|Major version of the API proxy configuration schema.|
|minorVersion|integer(int32)|false|none|Minor version of the API proxy configuration schema.|

<h2 id="tocS_GoogleCloudApigeeV1ConnectorsPlatformConfig">GoogleCloudApigeeV1ConnectorsPlatformConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1connectorsplatformconfig"></a>
<a id="schema_GoogleCloudApigeeV1ConnectorsPlatformConfig"></a>
<a id="tocSgooglecloudapigeev1connectorsplatformconfig"></a>
<a id="tocsgooglecloudapigeev1connectorsplatformconfig"></a>

```json
{
  "enabled": true,
  "expiresAt": "string"
}
```

Configuration for the Connectors Platform add-on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Flag that specifies whether the Connectors Platform add-on is enabled.|
|expiresAt|string(int64)|false|read-only|Output only. Time at which the Connectors Platform add-on expires in milliseconds since epoch. If unspecified, the add-on will never expire.|

<h2 id="tocS_GoogleCloudApigeeV1Credential">GoogleCloudApigeeV1Credential</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1credential"></a>
<a id="schema_GoogleCloudApigeeV1Credential"></a>
<a id="tocSgooglecloudapigeev1credential"></a>
<a id="tocsgooglecloudapigeev1credential"></a>

```json
{
  "apiProducts": [
    {
      "apiproduct": "string",
      "status": "string"
    }
  ],
  "attributes": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "consumerKey": "string",
  "consumerSecret": "string",
  "expiresAt": "string",
  "issuedAt": "string",
  "scopes": [
    "string"
  ],
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiProducts|[[GoogleCloudApigeeV1ApiProductRef](#schemagooglecloudapigeev1apiproductref)]|false|none|List of API products this credential can be used for.|
|attributes|[[GoogleCloudApigeeV1Attribute](#schemagooglecloudapigeev1attribute)]|false|none|List of attributes associated with this credential.|
|consumerKey|string|false|none|Consumer key.|
|consumerSecret|string|false|none|Secret key.|
|expiresAt|string(int64)|false|none|Time the credential will expire in milliseconds since epoch.|
|issuedAt|string(int64)|false|none|Time the credential was issued in milliseconds since epoch.|
|scopes|[string]|false|none|List of scopes to apply to the app. Specified scopes must already exist on the API product that you associate with the app.|
|status|string|false|none|Status of the credential. Valid values include `approved` or `revoked`.|

<h2 id="tocS_GoogleCloudApigeeV1CreditDeveloperBalanceRequest">GoogleCloudApigeeV1CreditDeveloperBalanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1creditdeveloperbalancerequest"></a>
<a id="schema_GoogleCloudApigeeV1CreditDeveloperBalanceRequest"></a>
<a id="tocSgooglecloudapigeev1creditdeveloperbalancerequest"></a>
<a id="tocsgooglecloudapigeev1creditdeveloperbalancerequest"></a>

```json
{
  "transactionAmount": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "transactionId": "string"
}
```

Request for CreditDeveloperBalance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transactionAmount|[GoogleTypeMoney](#schemagoogletypemoney)|false|none|The amount of money to be credited. The wallet corresponding to the currency specified within `transaction_amount` will be updated. For example, if you specified `currency_code` within `transaction_amount` as "USD", then the amount would be added to the wallet which has the "USD" currency or if no such wallet exists, a new wallet will be created with the "USD" currency.|
|transactionId|string|false|none|Each transaction_id uniquely identifies a credit balance request. If multiple requests are received with the same transaction_id, only one of them will be considered.|

<h2 id="tocS_GoogleCloudApigeeV1CustomReport">GoogleCloudApigeeV1CustomReport</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1customreport"></a>
<a id="schema_GoogleCloudApigeeV1CustomReport"></a>
<a id="tocSgooglecloudapigeev1customreport"></a>
<a id="tocsgooglecloudapigeev1customreport"></a>

```json
{
  "chartType": "string",
  "comments": [
    "string"
  ],
  "createdAt": "string",
  "dimensions": [
    "string"
  ],
  "displayName": "string",
  "environment": "string",
  "filter": "string",
  "fromTime": "string",
  "lastModifiedAt": "string",
  "lastViewedAt": "string",
  "limit": "string",
  "metrics": [
    {
      "function": "string",
      "name": "string"
    }
  ],
  "name": "string",
  "offset": "string",
  "organization": "string",
  "properties": [
    {
      "property": "string",
      "value": [
        {
          "name": "string",
          "value": "string"
        }
      ]
    }
  ],
  "sortByCols": [
    "string"
  ],
  "sortOrder": "string",
  "tags": [
    "string"
  ],
  "timeUnit": "string",
  "toTime": "string",
  "topk": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chartType|string|false|none|This field contains the chart type for the report|
|comments|[string]|false|none|Legacy field: not used. This field contains a list of comments associated with custom report|
|createdAt|string(int64)|false|read-only|Output only. Unix time when the app was created json key: createdAt|
|dimensions|[string]|false|none|This contains the list of dimensions for the report|
|displayName|string|false|none|This is the display name for the report|
|environment|string|false|read-only|Output only. Environment name|
|filter|string|false|none|This field contains the filter expression|
|fromTime|string|false|none|Legacy field: not used. Contains the from time for the report|
|lastModifiedAt|string(int64)|false|read-only|Output only. Modified time of this entity as milliseconds since epoch. json key: lastModifiedAt|
|lastViewedAt|string(int64)|false|read-only|Output only. Last viewed time of this entity as milliseconds since epoch|
|limit|string|false|none|Legacy field: not used This field contains the limit for the result retrieved|
|metrics|[[GoogleCloudApigeeV1CustomReportMetric](#schemagooglecloudapigeev1customreportmetric)]|false|none|Required. This contains the list of metrics|
|name|string|false|none|Required. Unique identifier for the report T his is a legacy field used to encode custom report unique id|
|offset|string|false|none|Legacy field: not used. This field contains the offset for the data|
|organization|string|false|read-only|Output only. Organization name|
|properties|[[GoogleCloudApigeeV1ReportProperty](#schemagooglecloudapigeev1reportproperty)]|false|none|This field contains report properties such as ui metadata etc.|
|sortByCols|[string]|false|none|Legacy field: not used much. Contains the list of sort by columns|
|sortOrder|string|false|none|Legacy field: not used much. Contains the sort order for the sort columns|
|tags|[string]|false|none|Legacy field: not used. This field contains a list of tags associated with custom report|
|timeUnit|string|false|none|This field contains the time unit of aggregation for the report|
|toTime|string|false|none|Legacy field: not used. Contains the end time for the report|
|topk|string|false|none|Legacy field: not used. This field contains the top k parameter value for restricting the result|

<h2 id="tocS_GoogleCloudApigeeV1CustomReportMetric">GoogleCloudApigeeV1CustomReportMetric</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1customreportmetric"></a>
<a id="schema_GoogleCloudApigeeV1CustomReportMetric"></a>
<a id="tocSgooglecloudapigeev1customreportmetric"></a>
<a id="tocsgooglecloudapigeev1customreportmetric"></a>

```json
{
  "function": "string",
  "name": "string"
}
```

This encapsulates a metric property of the form sum(message_count) where name is message_count and function is sum

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|function|string|false|none|aggregate function|
|name|string|false|none|name of the metric|

<h2 id="tocS_GoogleCloudApigeeV1DataCollector">GoogleCloudApigeeV1DataCollector</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1datacollector"></a>
<a id="schema_GoogleCloudApigeeV1DataCollector"></a>
<a id="tocSgooglecloudapigeev1datacollector"></a>
<a id="tocsgooglecloudapigeev1datacollector"></a>

```json
{
  "createdAt": "string",
  "description": "string",
  "lastModifiedAt": "string",
  "name": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

Data collector configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(int64)|false|read-only|Output only. The time at which the data collector was created in milliseconds since the epoch.|
|description|string|false|none|A description of the data collector.|
|lastModifiedAt|string(int64)|false|read-only|Output only. The time at which the Data Collector was last updated in milliseconds since the epoch.|
|name|string|false|none|ID of the data collector. Must begin with `dc_`.|
|type|string|false|none|Immutable. The type of data this data collector will collect.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|INTEGER|
|type|FLOAT|
|type|STRING|
|type|BOOLEAN|
|type|DATETIME|

<h2 id="tocS_GoogleCloudApigeeV1DataCollectorConfig">GoogleCloudApigeeV1DataCollectorConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1datacollectorconfig"></a>
<a id="schema_GoogleCloudApigeeV1DataCollectorConfig"></a>
<a id="tocSgooglecloudapigeev1datacollectorconfig"></a>
<a id="tocsgooglecloudapigeev1datacollectorconfig"></a>

```json
{
  "name": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

Data collector and its configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the data collector in the following format: `organizations/{org}/datacollectors/{datacollector}`|
|type|string|false|none|Data type accepted by the data collector.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|INTEGER|
|type|FLOAT|
|type|STRING|
|type|BOOLEAN|
|type|DATETIME|

<h2 id="tocS_GoogleCloudApigeeV1Datastore">GoogleCloudApigeeV1Datastore</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1datastore"></a>
<a id="schema_GoogleCloudApigeeV1Datastore"></a>
<a id="tocSgooglecloudapigeev1datastore"></a>
<a id="tocsgooglecloudapigeev1datastore"></a>

```json
{
  "createTime": "string",
  "datastoreConfig": {
    "bucketName": "string",
    "datasetName": "string",
    "path": "string",
    "projectId": "string",
    "tablePrefix": "string"
  },
  "displayName": "string",
  "lastUpdateTime": "string",
  "org": "string",
  "self": "string",
  "targetType": "string"
}
```

The data store defines the connection to export data repository (Cloud Storage, BigQuery), including the credentials used to access the data repository.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(int64)|false|read-only|Output only. Datastore create time, in milliseconds since the epoch of 1970-01-01T00:00:00Z|
|datastoreConfig|[GoogleCloudApigeeV1DatastoreConfig](#schemagooglecloudapigeev1datastoreconfig)|false|none|Datastore Configurations.|
|displayName|string|false|none|Required. Display name in UI|
|lastUpdateTime|string(int64)|false|read-only|Output only. Datastore last update time, in milliseconds since the epoch of 1970-01-01T00:00:00Z|
|org|string|false|read-only|Output only. Organization that the datastore belongs to|
|self|string|false|read-only|Output only. Resource link of Datastore. Example: `/organizations/{org}/analytics/datastores/{uuid}`|
|targetType|string|false|none|Destination storage type. Supported types `gcs` or `bigquery`.|

<h2 id="tocS_GoogleCloudApigeeV1DatastoreConfig">GoogleCloudApigeeV1DatastoreConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1datastoreconfig"></a>
<a id="schema_GoogleCloudApigeeV1DatastoreConfig"></a>
<a id="tocSgooglecloudapigeev1datastoreconfig"></a>
<a id="tocsgooglecloudapigeev1datastoreconfig"></a>

```json
{
  "bucketName": "string",
  "datasetName": "string",
  "path": "string",
  "projectId": "string",
  "tablePrefix": "string"
}
```

Configuration detail for datastore

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketName|string|false|none|Name of the Cloud Storage bucket. Required for `gcs` target_type.|
|datasetName|string|false|none|BigQuery dataset name Required for `bigquery` target_type.|
|path|string|false|none|Path of Cloud Storage bucket Required for `gcs` target_type.|
|projectId|string|false|none|Required. GCP project in which the datastore exists|
|tablePrefix|string|false|none|Prefix of BigQuery table Required for `bigquery` target_type.|

<h2 id="tocS_GoogleCloudApigeeV1DateRange">GoogleCloudApigeeV1DateRange</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1daterange"></a>
<a id="schema_GoogleCloudApigeeV1DateRange"></a>
<a id="tocSgooglecloudapigeev1daterange"></a>
<a id="tocsgooglecloudapigeev1daterange"></a>

```json
{
  "end": "string",
  "start": "string"
}
```

Date range of the data to export.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|string|false|none|Required. End date (exclusive) of the data to export in the format `yyyy-mm-dd`. The date range ends at 00:00:00 UTC on the end date- which will not be in the output.|
|start|string|false|none|Required. Start date of the data to export in the format `yyyy-mm-dd`. The date range begins at 00:00:00 UTC on the start date.|

<h2 id="tocS_GoogleCloudApigeeV1DebugMask">GoogleCloudApigeeV1DebugMask</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1debugmask"></a>
<a id="schema_GoogleCloudApigeeV1DebugMask"></a>
<a id="tocSgooglecloudapigeev1debugmask"></a>
<a id="tocsgooglecloudapigeev1debugmask"></a>

```json
{
  "faultJSONPaths": [
    "string"
  ],
  "faultXPaths": [
    "string"
  ],
  "name": "string",
  "namespaces": {
    "property1": "string",
    "property2": "string"
  },
  "requestJSONPaths": [
    "string"
  ],
  "requestXPaths": [
    "string"
  ],
  "responseJSONPaths": [
    "string"
  ],
  "responseXPaths": [
    "string"
  ],
  "variables": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|faultJSONPaths|[string]|false|none|List of JSON paths that specify the JSON elements to be filtered from JSON payloads in error flows.|
|faultXPaths|[string]|false|none|List of XPaths that specify the XML elements to be filtered from XML payloads in error flows.|
|name|string|false|none|Name of the debug mask.|
|namespaces|object|false|none|Map of namespaces to URIs.|
|requestJSONPaths|[string]|false|none|List of JSON paths that specify the JSON elements to be filtered from JSON request message payloads.|
|requestXPaths|[string]|false|none|List of XPaths that specify the XML elements to be filtered from XML request message payloads.|
|responseJSONPaths|[string]|false|none|List of JSON paths that specify the JSON elements to be filtered from JSON response message payloads.|
|responseXPaths|[string]|false|none|List of XPaths that specify the XML elements to be filtered from XML response message payloads.|
|variables|[string]|false|none|List of variables that should be masked from the debug output.|

<h2 id="tocS_GoogleCloudApigeeV1DebugSession">GoogleCloudApigeeV1DebugSession</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1debugsession"></a>
<a id="schema_GoogleCloudApigeeV1DebugSession"></a>
<a id="tocSgooglecloudapigeev1debugsession"></a>
<a id="tocsgooglecloudapigeev1debugsession"></a>

```json
{
  "count": 0,
  "createTime": "string",
  "filter": "string",
  "name": "string",
  "timeout": "string",
  "tracesize": 0,
  "validity": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32)|false|none|Optional. The number of request to be traced. Min = 1, Max = 15, Default = 10.|
|createTime|string(google-datetime)|false|read-only|Output only. The first transaction creation timestamp, recorded by UAP.|
|filter|string|false|none|Optional. A conditional statement which is evaluated against the request message to determine if it should be traced. Syntax matches that of on API Proxy bundle flow Condition.|
|name|string|false|none|A unique ID for this DebugSession.|
|timeout|string(int64)|false|none|Optional. The time in seconds after which this DebugSession should end. This value will override the value in query param, if both are provided.|
|tracesize|integer(int32)|false|none|Optional. The maximum number of bytes captured from the response payload. Min = 0, Max = 5120, Default = 5120.|
|validity|integer(int32)|false|none|Optional. The length of time, in seconds, that this debug session is valid, starting from when it's received in the control plane. Min = 1, Max = 15, Default = 10.|

<h2 id="tocS_GoogleCloudApigeeV1DebugSessionTransaction">GoogleCloudApigeeV1DebugSessionTransaction</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1debugsessiontransaction"></a>
<a id="schema_GoogleCloudApigeeV1DebugSessionTransaction"></a>
<a id="tocSgooglecloudapigeev1debugsessiontransaction"></a>
<a id="tocsgooglecloudapigeev1debugsessiontransaction"></a>

```json
{
  "completed": true,
  "point": [
    {
      "id": "string",
      "results": [
        {
          "ActionResult": "string",
          "accessList": [
            {
              "Get": {
                "name": "string",
                "value": "string"
              },
              "Remove": {
                "name": "string",
                "success": true
              },
              "Set": {
                "name": "string",
                "success": true,
                "value": "string"
              }
            }
          ],
          "content": "string",
          "headers": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "properties": {
            "property": [
              {
                "name": "string",
                "value": "string"
              }
            ]
          },
          "reasonPhrase": "string",
          "statusCode": "string",
          "timestamp": "string",
          "uRI": "string",
          "verb": "string"
        }
      ]
    }
  ]
}
```

A transaction contains all of the debug information of the entire message flow of an API call processed by the runtime plane. The information is collected and recorded at critical points of the message flow in the runtime apiproxy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completed|boolean|false|none|Flag indicating whether a transaction is completed or not|
|point|[[GoogleCloudApigeeV1Point](#schemagooglecloudapigeev1point)]|false|none|List of debug data collected by runtime plane at various defined points in the flow.|

<h2 id="tocS_GoogleCloudApigeeV1DeleteCustomReportResponse">GoogleCloudApigeeV1DeleteCustomReportResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1deletecustomreportresponse"></a>
<a id="schema_GoogleCloudApigeeV1DeleteCustomReportResponse"></a>
<a id="tocSgooglecloudapigeev1deletecustomreportresponse"></a>
<a id="tocsgooglecloudapigeev1deletecustomreportresponse"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|The response contains only a message field.|

<h2 id="tocS_GoogleCloudApigeeV1Deployment">GoogleCloudApigeeV1Deployment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1deployment"></a>
<a id="schema_GoogleCloudApigeeV1Deployment"></a>
<a id="tocSgooglecloudapigeev1deployment"></a>
<a id="tocsgooglecloudapigeev1deployment"></a>

```json
{
  "apiProxy": "string",
  "deployStartTime": "string",
  "environment": "string",
  "errors": [
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
  "instances": [
    {
      "deployedRevisions": [
        {
          "percentage": 0,
          "revision": "string"
        }
      ],
      "deployedRoutes": [
        {
          "basepath": "string",
          "envgroup": "string",
          "environment": "string",
          "percentage": 0
        }
      ],
      "instance": "string"
    }
  ],
  "pods": [
    {
      "appVersion": "string",
      "deploymentStatus": "string",
      "deploymentStatusTime": "string",
      "deploymentTime": "string",
      "podName": "string",
      "podStatus": "string",
      "podStatusTime": "string",
      "statusCode": "string",
      "statusCodeDetails": "string"
    }
  ],
  "revision": "string",
  "routeConflicts": [
    {
      "conflictingDeployment": {
        "apiProxy": "string",
        "basepath": "string",
        "environment": "string",
        "revision": "string"
      },
      "description": "string",
      "environmentGroup": "string"
    }
  ],
  "serviceAccount": "string",
  "state": "RUNTIME_STATE_UNSPECIFIED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiProxy|string|false|none|API proxy.|
|deployStartTime|string(int64)|false|none|Time the API proxy was marked `deployed` in the control plane in millisconds since epoch.|
|environment|string|false|none|Environment.|
|errors|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|Errors reported for this deployment. Populated only when state == ERROR. **Note**: This field is displayed only when viewing deployment status.|
|instances|[[GoogleCloudApigeeV1InstanceDeploymentStatus](#schemagooglecloudapigeev1instancedeploymentstatus)]|false|none|Status reported by each runtime instance. **Note**: This field is displayed only when viewing deployment status.|
|pods|[[GoogleCloudApigeeV1PodStatus](#schemagooglecloudapigeev1podstatus)]|false|none|Status reported by runtime pods. **Note**: **This field is deprecated**. Runtime versions 1.3 and above report instance level status rather than pod status.|
|revision|string|false|none|API proxy revision.|
|routeConflicts|[[GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict](#schemagooglecloudapigeev1deploymentchangereportroutingconflict)]|false|none|Conflicts in the desired state routing configuration. The presence of conflicts does not cause the state to be `ERROR`, but it will mean that some of the deployment's base paths are not routed to its environment. If the conflicts change, the state will transition to `PROGRESSING` until the latest configuration is rolled out to all instances. **Note**: This field is displayed only when viewing deployment status.|
|serviceAccount|string|false|none|The full resource name of Cloud IAM Service Account that this deployment is using, eg, `projects/-/serviceAccounts/{email}`.|
|state|string|false|none|Current state of the deployment. **Note**: This field is displayed only when viewing deployment status.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|RUNTIME_STATE_UNSPECIFIED|
|state|READY|
|state|PROGRESSING|
|state|ERROR|

<h2 id="tocS_GoogleCloudApigeeV1DeploymentChangeReport">GoogleCloudApigeeV1DeploymentChangeReport</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1deploymentchangereport"></a>
<a id="schema_GoogleCloudApigeeV1DeploymentChangeReport"></a>
<a id="tocSgooglecloudapigeev1deploymentchangereport"></a>
<a id="tocsgooglecloudapigeev1deploymentchangereport"></a>

```json
{
  "routingChanges": [
    {
      "description": "string",
      "environmentGroup": "string",
      "fromDeployment": {
        "apiProxy": "string",
        "basepath": "string",
        "environment": "string",
        "revision": "string"
      },
      "shouldSequenceRollout": true,
      "toDeployment": {
        "apiProxy": "string",
        "basepath": "string",
        "environment": "string",
        "revision": "string"
      }
    }
  ],
  "routingConflicts": [
    {
      "conflictingDeployment": {
        "apiProxy": "string",
        "basepath": "string",
        "environment": "string",
        "revision": "string"
      },
      "description": "string",
      "environmentGroup": "string"
    }
  ],
  "validationErrors": {
    "violations": [
      {
        "description": "string",
        "subject": "string",
        "type": "string"
      }
    ]
  }
}
```

Response for GenerateDeployChangeReport and GenerateUndeployChangeReport. This report contains any validation failures that would cause the deployment to be rejected, as well changes and conflicts in routing that may occur due to the new deployment. The existence of a routing warning does not necessarily imply that the deployment request is bad, if the desired state of the deployment request is to effect a routing change. The primary purposes of the routing messages are: 1) To inform users of routing changes that may have an effect on traffic currently being routed to other existing deployments. 2) To warn users if some base path in the proxy will not receive traffic due to an existing deployment having already claimed that base path. The presence of routing conflicts/changes will not cause non-dry-run DeployApiProxy/UndeployApiProxy requests to be rejected.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|routingChanges|[[GoogleCloudApigeeV1DeploymentChangeReportRoutingChange](#schemagooglecloudapigeev1deploymentchangereportroutingchange)]|false|none|All routing changes that may result from a deployment request.|
|routingConflicts|[[GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict](#schemagooglecloudapigeev1deploymentchangereportroutingconflict)]|false|none|All base path conflicts detected for a deployment request.|
|validationErrors|[GoogleRpcPreconditionFailure](#schemagooglerpcpreconditionfailure)|false|none|Validation errors that would cause the deployment change request to be rejected.|

<h2 id="tocS_GoogleCloudApigeeV1DeploymentChangeReportRoutingChange">GoogleCloudApigeeV1DeploymentChangeReportRoutingChange</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1deploymentchangereportroutingchange"></a>
<a id="schema_GoogleCloudApigeeV1DeploymentChangeReportRoutingChange"></a>
<a id="tocSgooglecloudapigeev1deploymentchangereportroutingchange"></a>
<a id="tocsgooglecloudapigeev1deploymentchangereportroutingchange"></a>

```json
{
  "description": "string",
  "environmentGroup": "string",
  "fromDeployment": {
    "apiProxy": "string",
    "basepath": "string",
    "environment": "string",
    "revision": "string"
  },
  "shouldSequenceRollout": true,
  "toDeployment": {
    "apiProxy": "string",
    "basepath": "string",
    "environment": "string",
    "revision": "string"
  }
}
```

Describes a potential routing change that may occur as a result of some deployment operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Human-readable description of this routing change.|
|environmentGroup|string|false|none|Name of the environment group affected by this routing change.|
|fromDeployment|[GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment](#schemagooglecloudapigeev1deploymentchangereportroutingdeployment)|false|none|Base path/deployment that may stop receiving some traffic.|
|shouldSequenceRollout|boolean|false|none|Set to `true` if using sequenced rollout would make this routing change safer. **Note**: This does not necessarily imply that automated sequenced rollout mode is supported for the operation.|
|toDeployment|[GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment](#schemagooglecloudapigeev1deploymentchangereportroutingdeployment)|false|none|Base path/deployment that may start receiving that traffic. May be null if no deployment is able to receive the traffic.|

<h2 id="tocS_GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict">GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1deploymentchangereportroutingconflict"></a>
<a id="schema_GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict"></a>
<a id="tocSgooglecloudapigeev1deploymentchangereportroutingconflict"></a>
<a id="tocsgooglecloudapigeev1deploymentchangereportroutingconflict"></a>

```json
{
  "conflictingDeployment": {
    "apiProxy": "string",
    "basepath": "string",
    "environment": "string",
    "revision": "string"
  },
  "description": "string",
  "environmentGroup": "string"
}
```

Describes a routing conflict that may cause a deployment not to receive traffic at some base path.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conflictingDeployment|[GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment](#schemagooglecloudapigeev1deploymentchangereportroutingdeployment)|false|none|Existing base path/deployment causing the conflict.|
|description|string|false|none|Human-readable description of this conflict.|
|environmentGroup|string|false|none|Name of the environment group in which this conflict exists.|

<h2 id="tocS_GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment">GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1deploymentchangereportroutingdeployment"></a>
<a id="schema_GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment"></a>
<a id="tocSgooglecloudapigeev1deploymentchangereportroutingdeployment"></a>
<a id="tocsgooglecloudapigeev1deploymentchangereportroutingdeployment"></a>

```json
{
  "apiProxy": "string",
  "basepath": "string",
  "environment": "string",
  "revision": "string"
}
```

Tuple representing a base path and the deployment containing it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiProxy|string|false|none|Name of the deployed API proxy revision containing the base path.|
|basepath|string|false|none|Base path receiving traffic.|
|environment|string|false|none|Name of the environment in which the proxy is deployed.|
|revision|string|false|none|Name of the deployed API proxy revision containing the base path.|

<h2 id="tocS_GoogleCloudApigeeV1DeploymentConfig">GoogleCloudApigeeV1DeploymentConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1deploymentconfig"></a>
<a id="schema_GoogleCloudApigeeV1DeploymentConfig"></a>
<a id="tocSgooglecloudapigeev1deploymentconfig"></a>
<a id="tocsgooglecloudapigeev1deploymentconfig"></a>

```json
{
  "attributes": {
    "property1": "string",
    "property2": "string"
  },
  "basePath": "string",
  "deploymentGroups": [
    "string"
  ],
  "endpoints": {
    "property1": "string",
    "property2": "string"
  },
  "location": "string",
  "name": "string",
  "proxyUid": "string",
  "serviceAccount": "string",
  "uid": "string"
}
```

NEXT ID: 11

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|Additional key-value metadata for the deployment.|
|basePath|string|false|none|Base path where the application will be hosted. Defaults to "/".|
|deploymentGroups|[string]|false|none|The list of deployment groups in which this proxy should be deployed. Not currently populated for shared flows.|
|endpoints|object|false|none|A mapping from basepaths to proxy endpoint names in this proxy. Not populated for shared flows.|
|location|string|false|none|Location of the API proxy bundle as a URI.|
|name|string|false|none|Name of the API or shared flow revision to be deployed in the following format: `organizations/{org}/apis/{api}/revisions/{rev}` or `organizations/{org}/sharedflows/{sharedflow}/revisions/{rev}`|
|proxyUid|string|false|none|Unique ID of the API proxy revision.|
|serviceAccount|string|false|none|The service account identity associated with this deployment. If non-empty, will be in the following format: `projects/-/serviceAccounts/{account_email}`|
|uid|string|false|none|Unique ID. The ID will only change if the deployment is deleted and recreated.|

<h2 id="tocS_GoogleCloudApigeeV1DeploymentGroupConfig">GoogleCloudApigeeV1DeploymentGroupConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1deploymentgroupconfig"></a>
<a id="schema_GoogleCloudApigeeV1DeploymentGroupConfig"></a>
<a id="tocSgooglecloudapigeev1deploymentgroupconfig"></a>
<a id="tocsgooglecloudapigeev1deploymentgroupconfig"></a>

```json
{
  "deploymentGroupType": "DEPLOYMENT_GROUP_TYPE_UNSPECIFIED",
  "name": "string",
  "revisionId": "string",
  "uid": "string"
}
```

DeploymentGroupConfig represents a deployment group that should be present in a particular environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentGroupType|string|false|none|Type of the deployment group, which will be either Standard or Extensible.|
|name|string|false|none|Name of the deployment group in the following format: `organizations/{org}/environments/{env}/deploymentGroups/{group}`.|
|revisionId|string(int64)|false|none|Revision number which can be used by the runtime to detect if the deployment group has changed between two versions.|
|uid|string|false|none|Unique ID. The ID will only change if the deployment group is deleted and recreated.|

#### Enumerated Values

|Property|Value|
|---|---|
|deploymentGroupType|DEPLOYMENT_GROUP_TYPE_UNSPECIFIED|
|deploymentGroupType|STANDARD|
|deploymentGroupType|EXTENSIBLE|

<h2 id="tocS_GoogleCloudApigeeV1Developer">GoogleCloudApigeeV1Developer</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1developer"></a>
<a id="schema_GoogleCloudApigeeV1Developer"></a>
<a id="tocSgooglecloudapigeev1developer"></a>
<a id="tocsgooglecloudapigeev1developer"></a>

```json
{
  "accessType": "string",
  "appFamily": "string",
  "apps": [
    "string"
  ],
  "attributes": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "companies": [
    "string"
  ],
  "createdAt": "string",
  "developerId": "string",
  "email": "string",
  "firstName": "string",
  "lastModifiedAt": "string",
  "lastName": "string",
  "organizationName": "string",
  "status": "string",
  "userName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessType|string|false|none|Access type.|
|appFamily|string|false|none|Developer app family.|
|apps|[string]|false|none|List of apps associated with the developer.|
|attributes|[[GoogleCloudApigeeV1Attribute](#schemagooglecloudapigeev1attribute)]|false|none|Optional. Developer attributes (name/value pairs). The custom attribute limit is 18.|
|companies|[string]|false|none|List of companies associated with the developer.|
|createdAt|string(int64)|false|read-only|Output only. Time at which the developer was created in milliseconds since epoch.|
|developerId|string|false|none|ID of the developer. **Note**: IDs are generated internally by Apigee and are not guaranteed to stay the same over time.|
|email|string|false|none|Required. Email address of the developer. This value is used to uniquely identify the developer in Apigee hybrid. Note that the email address has to be in lowercase only.|
|firstName|string|false|none|Required. First name of the developer.|
|lastModifiedAt|string(int64)|false|read-only|Output only. Time at which the developer was last modified in milliseconds since epoch.|
|lastName|string|false|none|Required. Last name of the developer.|
|organizationName|string|false|read-only|Output only. Name of the Apigee organization in which the developer resides.|
|status|string|false|read-only|Output only. Status of the developer. Valid values are `active` and `inactive`.|
|userName|string|false|none|Required. User name of the developer. Not used by Apigee hybrid.|

<h2 id="tocS_GoogleCloudApigeeV1DeveloperApp">GoogleCloudApigeeV1DeveloperApp</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1developerapp"></a>
<a id="schema_GoogleCloudApigeeV1DeveloperApp"></a>
<a id="tocSgooglecloudapigeev1developerapp"></a>
<a id="tocsgooglecloudapigeev1developerapp"></a>

```json
{
  "apiProducts": [
    "string"
  ],
  "appFamily": "string",
  "appId": "string",
  "attributes": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "callbackUrl": "string",
  "createdAt": "string",
  "credentials": [
    {
      "apiProducts": [
        {
          "apiproduct": "string",
          "status": "string"
        }
      ],
      "attributes": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "consumerKey": "string",
      "consumerSecret": "string",
      "expiresAt": "string",
      "issuedAt": "string",
      "scopes": [
        "string"
      ],
      "status": "string"
    }
  ],
  "developerId": "string",
  "keyExpiresIn": "string",
  "lastModifiedAt": "string",
  "name": "string",
  "scopes": [
    "string"
  ],
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiProducts|[string]|false|none|List of API products associated with the developer app.|
|appFamily|string|false|none|Developer app family.|
|appId|string|false|none|ID of the developer app.|
|attributes|[[GoogleCloudApigeeV1Attribute](#schemagooglecloudapigeev1attribute)]|false|none|List of attributes for the developer app.|
|callbackUrl|string|false|none|Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to developer apps.|
|createdAt|string(int64)|false|read-only|Output only. Time the developer app was created in milliseconds since epoch.|
|credentials|[[GoogleCloudApigeeV1Credential](#schemagooglecloudapigeev1credential)]|false|read-only|Output only. Set of credentials for the developer app consisting of the consumer key/secret pairs associated with the API products.|
|developerId|string|false|none|ID of the developer.|
|keyExpiresIn|string(int64)|false|none|Expiration time, in milliseconds, for the consumer key that is generated for the developer app. If not set or left to the default value of `-1`, the API key never expires. The expiration time can't be updated after it is set.|
|lastModifiedAt|string(int64)|false|read-only|Output only. Time the developer app was modified in milliseconds since epoch.|
|name|string|false|none|Name of the developer app.|
|scopes|[string]|false|none|Scopes to apply to the developer app. The specified scopes must already exist for the API product that you associate with the developer app.|
|status|string|false|none|Status of the credential. Valid values include `approved` or `revoked`.|

<h2 id="tocS_GoogleCloudApigeeV1DeveloperAppKey">GoogleCloudApigeeV1DeveloperAppKey</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1developerappkey"></a>
<a id="schema_GoogleCloudApigeeV1DeveloperAppKey"></a>
<a id="tocSgooglecloudapigeev1developerappkey"></a>
<a id="tocsgooglecloudapigeev1developerappkey"></a>

```json
{
  "apiProducts": [
    null
  ],
  "attributes": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "consumerKey": "string",
  "consumerSecret": "string",
  "expiresAt": "string",
  "expiresInSeconds": "string",
  "issuedAt": "string",
  "scopes": [
    "string"
  ],
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiProducts|[object]|false|none|List of API products for which the credential can be used. **Note**: Do not specify the list of API products when creating a consumer key and secret for a developer app. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created.|
|attributes|[[GoogleCloudApigeeV1Attribute](#schemagooglecloudapigeev1attribute)]|false|none|List of attributes associated with the credential.|
|consumerKey|string|false|none|Consumer key.|
|consumerSecret|string|false|none|Secret key.|
|expiresAt|string(int64)|false|none|Time the developer app expires in milliseconds since epoch.|
|expiresInSeconds|string(int64)|false|none|Input only. Expiration time, in seconds, for the consumer key. If not set or left to the default value of `-1`, the API key never expires. The expiration time can't be updated after it is set.|
|issuedAt|string(int64)|false|none|Time the developer app was created in milliseconds since epoch.|
|scopes|[string]|false|none|Scopes to apply to the app. The specified scope names must already be defined for the API product that you associate with the app.|
|status|string|false|none|Status of the credential. Valid values include `approved` or `revoked`.|

<h2 id="tocS_GoogleCloudApigeeV1DeveloperBalance">GoogleCloudApigeeV1DeveloperBalance</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1developerbalance"></a>
<a id="schema_GoogleCloudApigeeV1DeveloperBalance"></a>
<a id="tocSgooglecloudapigeev1developerbalance"></a>
<a id="tocsgooglecloudapigeev1developerbalance"></a>

```json
{
  "wallets": [
    {
      "balance": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "lastCreditTime": "string"
    }
  ]
}
```

Account balance for the developer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|wallets|[[GoogleCloudApigeeV1DeveloperBalanceWallet](#schemagooglecloudapigeev1developerbalancewallet)]|false|read-only|Output only. List of all wallets. Each individual wallet stores the account balance for a particular currency.|

<h2 id="tocS_GoogleCloudApigeeV1DeveloperBalanceWallet">GoogleCloudApigeeV1DeveloperBalanceWallet</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1developerbalancewallet"></a>
<a id="schema_GoogleCloudApigeeV1DeveloperBalanceWallet"></a>
<a id="tocSgooglecloudapigeev1developerbalancewallet"></a>
<a id="tocsgooglecloudapigeev1developerbalancewallet"></a>

```json
{
  "balance": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "lastCreditTime": "string"
}
```

Wallet used to manage an account balance for a particular currency.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balance|[GoogleTypeMoney](#schemagoogletypemoney)|false|none|Current remaining balance of the developer for a particular currency.|
|lastCreditTime|string(int64)|false|read-only|Output only. Time at which the developer last added credit to the account in milliseconds since epoch.|

<h2 id="tocS_GoogleCloudApigeeV1DeveloperMonetizationConfig">GoogleCloudApigeeV1DeveloperMonetizationConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1developermonetizationconfig"></a>
<a id="schema_GoogleCloudApigeeV1DeveloperMonetizationConfig"></a>
<a id="tocSgooglecloudapigeev1developermonetizationconfig"></a>
<a id="tocsgooglecloudapigeev1developermonetizationconfig"></a>

```json
{
  "billingType": "BILLING_TYPE_UNSPECIFIED"
}
```

Monetization configuration for the developer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billingType|string|false|none|Billing type.|

#### Enumerated Values

|Property|Value|
|---|---|
|billingType|BILLING_TYPE_UNSPECIFIED|
|billingType|PREPAID|
|billingType|POSTPAID|

<h2 id="tocS_GoogleCloudApigeeV1DeveloperSubscription">GoogleCloudApigeeV1DeveloperSubscription</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1developersubscription"></a>
<a id="schema_GoogleCloudApigeeV1DeveloperSubscription"></a>
<a id="tocSgooglecloudapigeev1developersubscription"></a>
<a id="tocsgooglecloudapigeev1developersubscription"></a>

```json
{
  "apiproduct": "string",
  "createdAt": "string",
  "endTime": "string",
  "lastModifiedAt": "string",
  "name": "string",
  "startTime": "string"
}
```

Structure of a DeveloperSubscription.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiproduct|string|false|none|Name of the API product for which the developer is purchasing a subscription.|
|createdAt|string(int64)|false|read-only|Output only. Time when the API product subscription was created in milliseconds since epoch.|
|endTime|string(int64)|false|none|Time when the API product subscription ends in milliseconds since epoch.|
|lastModifiedAt|string(int64)|false|read-only|Output only. Time when the API product subscription was last modified in milliseconds since epoch.|
|name|string|false|read-only|Output only. Name of the API product subscription.|
|startTime|string(int64)|false|none|Time when the API product subscription starts in milliseconds since epoch.|

<h2 id="tocS_GoogleCloudApigeeV1DimensionMetric">GoogleCloudApigeeV1DimensionMetric</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1dimensionmetric"></a>
<a id="schema_GoogleCloudApigeeV1DimensionMetric"></a>
<a id="tocSgooglecloudapigeev1dimensionmetric"></a>
<a id="tocsgooglecloudapigeev1dimensionmetric"></a>

```json
{
  "metrics": [
    {
      "name": "string",
      "values": [
        null
      ]
    }
  ],
  "name": "string"
}
```

Encapsulates a metric grouped by dimension.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metrics|[[GoogleCloudApigeeV1Metric](#schemagooglecloudapigeev1metric)]|false|none|List of metrics.|
|name|string|false|none|Name of the dimension.|

<h2 id="tocS_GoogleCloudApigeeV1EndpointAttachment">GoogleCloudApigeeV1EndpointAttachment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1endpointattachment"></a>
<a id="schema_GoogleCloudApigeeV1EndpointAttachment"></a>
<a id="tocSgooglecloudapigeev1endpointattachment"></a>
<a id="tocsgooglecloudapigeev1endpointattachment"></a>

```json
{
  "connectionState": "CONNECTION_STATE_UNSPECIFIED",
  "host": "string",
  "location": "string",
  "name": "string",
  "serviceAttachment": "string",
  "state": "STATE_UNSPECIFIED"
}
```

Apigee endpoint attachment. For more information, see [Southbound networking patterns] (https://cloud.google.com/apigee/docs/api-platform/architecture/southbound-networking-patterns-endpoints).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionState|string|false|read-only|Output only. State of the endpoint attachment connection to the service attachment.|
|host|string|false|read-only|Output only. Host that can be used in either the HTTP target endpoint directly or as the host in target server.|
|location|string|false|none|Required. Location of the endpoint attachment.|
|name|string|false|none|Name of the endpoint attachment. Use the following structure in your request: `organizations/{org}/endpointAttachments/{endpoint_attachment}`|
|serviceAttachment|string|false|none|Format: projects/*/regions/*/serviceAttachments/*|
|state|string|false|read-only|Output only. State of the endpoint attachment. Values other than `ACTIVE` mean the resource is not ready to use.|

#### Enumerated Values

|Property|Value|
|---|---|
|connectionState|CONNECTION_STATE_UNSPECIFIED|
|connectionState|UNAVAILABLE|
|connectionState|PENDING|
|connectionState|ACCEPTED|
|connectionState|REJECTED|
|connectionState|CLOSED|
|connectionState|FROZEN|
|connectionState|NEEDS_ATTENTION|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|ACTIVE|
|state|DELETING|
|state|UPDATING|

<h2 id="tocS_GoogleCloudApigeeV1EndpointChainingRule">GoogleCloudApigeeV1EndpointChainingRule</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1endpointchainingrule"></a>
<a id="schema_GoogleCloudApigeeV1EndpointChainingRule"></a>
<a id="tocSgooglecloudapigeev1endpointchainingrule"></a>
<a id="tocsgooglecloudapigeev1endpointchainingrule"></a>

```json
{
  "deploymentGroup": "string",
  "proxyIds": [
    "string"
  ]
}
```

EndpointChainingRule specifies the proxies contained in a particular deployment group, so that other deployment groups can find them in chaining calls.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploymentGroup|string|false|none|The deployment group to target for cross-shard chaining calls to these proxies.|
|proxyIds|[string]|false|none|List of proxy ids which may be found in the given deployment group.|

<h2 id="tocS_GoogleCloudApigeeV1EntityMetadata">GoogleCloudApigeeV1EntityMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1entitymetadata"></a>
<a id="schema_GoogleCloudApigeeV1EntityMetadata"></a>
<a id="tocSgooglecloudapigeev1entitymetadata"></a>
<a id="tocsgooglecloudapigeev1entitymetadata"></a>

```json
{
  "createdAt": "string",
  "lastModifiedAt": "string",
  "subType": "string"
}
```

Metadata common to many entities in this API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(int64)|false|none|Time at which the API proxy was created, in milliseconds since epoch.|
|lastModifiedAt|string(int64)|false|none|Time at which the API proxy was most recently modified, in milliseconds since epoch.|
|subType|string|false|none|The type of entity described|

<h2 id="tocS_GoogleCloudApigeeV1Environment">GoogleCloudApigeeV1Environment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1environment"></a>
<a id="schema_GoogleCloudApigeeV1Environment"></a>
<a id="tocSgooglecloudapigeev1environment"></a>
<a id="tocsgooglecloudapigeev1environment"></a>

```json
{
  "apiProxyType": "API_PROXY_TYPE_UNSPECIFIED",
  "createdAt": "string",
  "deploymentType": "DEPLOYMENT_TYPE_UNSPECIFIED",
  "description": "string",
  "displayName": "string",
  "forwardProxyUri": "string",
  "lastModifiedAt": "string",
  "name": "string",
  "nodeConfig": {
    "currentAggregateNodeCount": "string",
    "maxNodeCount": "string",
    "minNodeCount": "string"
  },
  "properties": {
    "property": [
      {
        "name": "string",
        "value": "string"
      }
    ]
  },
  "state": "STATE_UNSPECIFIED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiProxyType|string|false|none|Optional. API Proxy type supported by the environment. The type can be set when creating the Environment and cannot be changed.|
|createdAt|string(int64)|false|read-only|Output only. Creation time of this environment as milliseconds since epoch.|
|deploymentType|string|false|none|Optional. Deployment type supported by the environment. The deployment type can be set when creating the environment and cannot be changed. When you enable archive deployment, you will be **prevented from performing** a [subset of actions](/apigee/docs/api-platform/local-development/overview#prevented-actions) within the environment, including: * Managing the deployment of API proxy or shared flow revisions * Creating, updating, or deleting resource files * Creating, updating, or deleting target servers|
|description|string|false|none|Optional. Description of the environment.|
|displayName|string|false|none|Optional. Display name for this environment.|
|forwardProxyUri|string|false|none|Optional. Url of the forward proxy to be applied to the runtime instances in this environment. Must be in the format of {scheme}://{hostname}:{port}. Note that scheme must be one of "http" or "https", and port must be supplied.|
|lastModifiedAt|string(int64)|false|read-only|Output only. Last modification time of this environment as milliseconds since epoch.|
|name|string|false|none|Required. Name of the environment. Values must match the regular expression `^[.\\p{Alnum}-_]{1,255}$`|
|nodeConfig|[GoogleCloudApigeeV1NodeConfig](#schemagooglecloudapigeev1nodeconfig)|false|none|Optional. NodeConfig of the environment.|
|properties|[GoogleCloudApigeeV1Properties](#schemagooglecloudapigeev1properties)|false|none|Optional. Key-value pairs that may be used for customizing the environment.|
|state|string|false|read-only|Output only. State of the environment. Values other than ACTIVE means the resource is not ready to use.|

#### Enumerated Values

|Property|Value|
|---|---|
|apiProxyType|API_PROXY_TYPE_UNSPECIFIED|
|apiProxyType|PROGRAMMABLE|
|apiProxyType|CONFIGURABLE|
|deploymentType|DEPLOYMENT_TYPE_UNSPECIFIED|
|deploymentType|PROXY|
|deploymentType|ARCHIVE|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|ACTIVE|
|state|DELETING|
|state|UPDATING|

<h2 id="tocS_GoogleCloudApigeeV1EnvironmentConfig">GoogleCloudApigeeV1EnvironmentConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1environmentconfig"></a>
<a id="schema_GoogleCloudApigeeV1EnvironmentConfig"></a>
<a id="tocSgooglecloudapigeev1environmentconfig"></a>
<a id="tocsgooglecloudapigeev1environmentconfig"></a>

```json
{
  "arcConfigLocation": "string",
  "createTime": "string",
  "dataCollectors": [
    {
      "name": "string",
      "type": "TYPE_UNSPECIFIED"
    }
  ],
  "debugMask": {
    "faultJSONPaths": [
      "string"
    ],
    "faultXPaths": [
      "string"
    ],
    "name": "string",
    "namespaces": {
      "property1": "string",
      "property2": "string"
    },
    "requestJSONPaths": [
      "string"
    ],
    "requestXPaths": [
      "string"
    ],
    "responseJSONPaths": [
      "string"
    ],
    "responseXPaths": [
      "string"
    ],
    "variables": [
      "string"
    ]
  },
  "deploymentGroups": [
    {
      "deploymentGroupType": "DEPLOYMENT_GROUP_TYPE_UNSPECIFIED",
      "name": "string",
      "revisionId": "string",
      "uid": "string"
    }
  ],
  "deployments": [
    {
      "attributes": {
        "property1": "string",
        "property2": "string"
      },
      "basePath": "string",
      "deploymentGroups": [
        "string"
      ],
      "endpoints": {
        "property1": "string",
        "property2": "string"
      },
      "location": "string",
      "name": "string",
      "proxyUid": "string",
      "serviceAccount": "string",
      "uid": "string"
    }
  ],
  "envScopedRevisionId": "string",
  "featureFlags": {
    "property1": "string",
    "property2": "string"
  },
  "flowhooks": [
    {
      "continueOnError": true,
      "name": "string",
      "sharedFlowName": "string"
    }
  ],
  "forwardProxyUri": "string",
  "gatewayConfigLocation": "string",
  "keystores": [
    {
      "aliases": [
        {
          "location": "string",
          "name": "string",
          "type": "ALIAS_TYPE_UNSPECIFIED"
        }
      ],
      "name": "string"
    }
  ],
  "name": "string",
  "provider": "string",
  "pubsubTopic": "string",
  "resourceReferences": [
    {
      "name": "string",
      "resourceName": "string"
    }
  ],
  "resources": [
    {
      "location": "string",
      "name": "string"
    }
  ],
  "revisionId": "string",
  "sequenceNumber": "string",
  "targets": [
    {
      "enabled": true,
      "host": "string",
      "name": "string",
      "port": 0,
      "protocol": "PROTOCOL_UNSPECIFIED",
      "tlsInfo": {
        "ciphers": [
          "string"
        ],
        "clientAuthEnabled": true,
        "commonName": {
          "matchWildCards": true,
          "name": "string"
        },
        "enabled": true,
        "ignoreValidationErrors": true,
        "keyAlias": "string",
        "keyAliasReference": {
          "aliasId": "string",
          "reference": "string"
        },
        "protocols": [
          "string"
        ],
        "trustStore": "string"
      }
    }
  ],
  "traceConfig": {
    "endpoint": "string",
    "exporter": "EXPORTER_UNSPECIFIED",
    "name": "string",
    "overrides": [
      {
        "apiProxy": "string",
        "name": "string",
        "revisionCreateTime": "string",
        "revisionId": "string",
        "samplingConfig": {
          "sampler": "SAMPLER_UNSPECIFIED",
          "samplingRate": 0
        },
        "uid": "string"
      }
    ],
    "revisionCreateTime": "string",
    "revisionId": "string",
    "samplingConfig": {
      "sampler": "SAMPLER_UNSPECIFIED",
      "samplingRate": 0
    }
  },
  "uid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arcConfigLocation|string|false|none|The location for the config blob of API Runtime Control, aka Envoy Adapter, for op-based authentication as a URI, e.g. a Cloud Storage URI. This is only used by Envoy-based gateways.|
|createTime|string(google-datetime)|false|none|Time that the environment configuration was created.|
|dataCollectors|[[GoogleCloudApigeeV1DataCollectorConfig](#schemagooglecloudapigeev1datacollectorconfig)]|false|none|List of data collectors used by the deployments in the environment.|
|debugMask|[GoogleCloudApigeeV1DebugMask](#schemagooglecloudapigeev1debugmask)|false|none|Debug mask that applies to all deployments in the environment.|
|deploymentGroups|[[GoogleCloudApigeeV1DeploymentGroupConfig](#schemagooglecloudapigeev1deploymentgroupconfig)]|false|none|List of deployment groups in the environment.|
|deployments|[[GoogleCloudApigeeV1DeploymentConfig](#schemagooglecloudapigeev1deploymentconfig)]|false|none|List of deployments in the environment.|
|envScopedRevisionId|string(int64)|false|none|Revision ID for environment-scoped resources (e.g. target servers, keystores) in this config. This ID will increment any time a resource not scoped to a deployment group changes.|
|featureFlags|object|false|none|Feature flags inherited from the organization and environment.|
|flowhooks|[[GoogleCloudApigeeV1FlowHookConfig](#schemagooglecloudapigeev1flowhookconfig)]|false|none|List of flow hooks in the environment.|
|forwardProxyUri|string|false|none|The forward proxy's url to be used by the runtime. When set, runtime will send requests to the target via the given forward proxy. This is only used by programmable gateways.|
|gatewayConfigLocation|string|false|none|The location for the gateway config blob as a URI, e.g. a Cloud Storage URI. This is only used by Envoy-based gateways.|
|keystores|[[GoogleCloudApigeeV1KeystoreConfig](#schemagooglecloudapigeev1keystoreconfig)]|false|none|List of keystores in the environment.|
|name|string|false|none|Name of the environment configuration in the following format: `organizations/{org}/environments/{env}/configs/{config}`|
|provider|string|false|none|Used by the Control plane to add context information to help detect the source of the document during diagnostics and debugging.|
|pubsubTopic|string|false|none|Name of the PubSub topic for the environment.|
|resourceReferences|[[GoogleCloudApigeeV1ReferenceConfig](#schemagooglecloudapigeev1referenceconfig)]|false|none|List of resource references in the environment.|
|resources|[[GoogleCloudApigeeV1ResourceConfig](#schemagooglecloudapigeev1resourceconfig)]|false|none|List of resource versions in the environment.|
|revisionId|string(int64)|false|none|Revision ID of the environment configuration. The higher the value, the more recently the configuration was deployed.|
|sequenceNumber|string(int64)|false|none|DEPRECATED: Use revision_id.|
|targets|[[GoogleCloudApigeeV1TargetServerConfig](#schemagooglecloudapigeev1targetserverconfig)]|false|none|List of target servers in the environment. Disabled target servers are not displayed.|
|traceConfig|[GoogleCloudApigeeV1RuntimeTraceConfig](#schemagooglecloudapigeev1runtimetraceconfig)|false|none|Trace configurations. Contains config for the environment and config overrides for specific API proxies.|
|uid|string|false|none|Unique ID for the environment configuration. The ID will only change if the environment is deleted and recreated.|

<h2 id="tocS_GoogleCloudApigeeV1EnvironmentGroup">GoogleCloudApigeeV1EnvironmentGroup</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1environmentgroup"></a>
<a id="schema_GoogleCloudApigeeV1EnvironmentGroup"></a>
<a id="tocSgooglecloudapigeev1environmentgroup"></a>
<a id="tocsgooglecloudapigeev1environmentgroup"></a>

```json
{
  "createdAt": "string",
  "hostnames": [
    "string"
  ],
  "lastModifiedAt": "string",
  "name": "string",
  "state": "STATE_UNSPECIFIED"
}
```

EnvironmentGroup configuration. An environment group is used to group one or more Apigee environments under a single host name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(int64)|false|read-only|Output only. The time at which the environment group was created as milliseconds since epoch.|
|hostnames|[string]|false|none|Required. Host names for this environment group.|
|lastModifiedAt|string(int64)|false|read-only|Output only. The time at which the environment group was last updated as milliseconds since epoch.|
|name|string|false|none|ID of the environment group.|
|state|string|false|read-only|Output only. State of the environment group. Values other than ACTIVE means the resource is not ready to use.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|ACTIVE|
|state|DELETING|
|state|UPDATING|

<h2 id="tocS_GoogleCloudApigeeV1EnvironmentGroupAttachment">GoogleCloudApigeeV1EnvironmentGroupAttachment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1environmentgroupattachment"></a>
<a id="schema_GoogleCloudApigeeV1EnvironmentGroupAttachment"></a>
<a id="tocSgooglecloudapigeev1environmentgroupattachment"></a>
<a id="tocsgooglecloudapigeev1environmentgroupattachment"></a>

```json
{
  "createdAt": "string",
  "environment": "string",
  "environmentGroupId": "string",
  "name": "string"
}
```

EnvironmentGroupAttachment is a resource which defines an attachment of an environment to an environment group.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(int64)|false|read-only|Output only. The time at which the environment group attachment was created as milliseconds since epoch.|
|environment|string|false|none|Required. ID of the attached environment.|
|environmentGroupId|string|false|read-only|Output only. ID of the environment group.|
|name|string|false|none|ID of the environment group attachment.|

<h2 id="tocS_GoogleCloudApigeeV1EnvironmentGroupConfig">GoogleCloudApigeeV1EnvironmentGroupConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1environmentgroupconfig"></a>
<a id="schema_GoogleCloudApigeeV1EnvironmentGroupConfig"></a>
<a id="tocSgooglecloudapigeev1environmentgroupconfig"></a>
<a id="tocsgooglecloudapigeev1environmentgroupconfig"></a>

```json
{
  "endpointChainingRules": [
    {
      "deploymentGroup": "string",
      "proxyIds": [
        "string"
      ]
    }
  ],
  "hostnames": [
    "string"
  ],
  "location": "string",
  "name": "string",
  "revisionId": "string",
  "routingRules": [
    {
      "basepath": "string",
      "deploymentGroup": "string",
      "envGroupRevision": "string",
      "environment": "string",
      "otherTargets": [
        "string"
      ],
      "receiver": "string",
      "updateTime": "string"
    }
  ],
  "uid": "string"
}
```

EnvironmentGroupConfig is a revisioned snapshot of an EnvironmentGroup and its associated routing rules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpointChainingRules|[[GoogleCloudApigeeV1EndpointChainingRule](#schemagooglecloudapigeev1endpointchainingrule)]|false|none|A list of proxies in each deployment group for proxy chaining calls.|
|hostnames|[string]|false|none|Host names for the environment group.|
|location|string|false|none|When this message appears in the top-level IngressConfig, this field will be populated in lieu of the inlined routing_rules and hostnames fields. Some URL for downloading the full EnvironmentGroupConfig for this group.|
|name|string|false|none|Name of the environment group in the following format: `organizations/{org}/envgroups/{envgroup}`.|
|revisionId|string(int64)|false|none|Revision id that defines the ordering of the EnvironmentGroupConfig resource. The higher the revision, the more recently the configuration was deployed.|
|routingRules|[[GoogleCloudApigeeV1RoutingRule](#schemagooglecloudapigeev1routingrule)]|false|none|Ordered list of routing rules defining how traffic to this environment group's hostnames should be routed to different environments.|
|uid|string|false|none|A unique id for the environment group config that will only change if the environment group is deleted and recreated.|

<h2 id="tocS_GoogleCloudApigeeV1ExpireDeveloperSubscriptionRequest">GoogleCloudApigeeV1ExpireDeveloperSubscriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1expiredevelopersubscriptionrequest"></a>
<a id="schema_GoogleCloudApigeeV1ExpireDeveloperSubscriptionRequest"></a>
<a id="tocSgooglecloudapigeev1expiredevelopersubscriptionrequest"></a>
<a id="tocsgooglecloudapigeev1expiredevelopersubscriptionrequest"></a>

```json
{}
```

Request for ExpireDeveloperSubscription.

<h2 id="tocS_GoogleCloudApigeeV1Export">GoogleCloudApigeeV1Export</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1export"></a>
<a id="schema_GoogleCloudApigeeV1Export"></a>
<a id="tocSgooglecloudapigeev1export"></a>
<a id="tocsgooglecloudapigeev1export"></a>

```json
{
  "created": "string",
  "datastoreName": "string",
  "description": "string",
  "error": "string",
  "executionTime": "string",
  "name": "string",
  "self": "string",
  "state": "string",
  "updated": "string"
}
```

Details of an export job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string|false|read-only|Output only. Time the export job was created.|
|datastoreName|string|false|none|Name of the datastore that is the destination of the export job [datastore]|
|description|string|false|none|Description of the export job.|
|error|string|false|read-only|Output only. Error is set when export fails|
|executionTime|string|false|read-only|Output only. Execution time for this export job. If the job is still in progress, it will be set to the amount of time that has elapsed since`created`, in seconds. Else, it will set to (`updated` - `created`), in seconds.|
|name|string|false|none|Display name of the export job.|
|self|string|false|read-only|Output only. Self link of the export job. A URI that can be used to retrieve the status of an export job. Example: `/organizations/myorg/environments/myenv/analytics/exports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd`|
|state|string|false|read-only|Output only. Status of the export job. Valid values include `enqueued`, `running`, `completed`, and `failed`.|
|updated|string|false|read-only|Output only. Time the export job was last updated.|

<h2 id="tocS_GoogleCloudApigeeV1ExportRequest">GoogleCloudApigeeV1ExportRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1exportrequest"></a>
<a id="schema_GoogleCloudApigeeV1ExportRequest"></a>
<a id="tocSgooglecloudapigeev1exportrequest"></a>
<a id="tocsgooglecloudapigeev1exportrequest"></a>

```json
{
  "csvDelimiter": "string",
  "datastoreName": "string",
  "dateRange": {
    "end": "string",
    "start": "string"
  },
  "description": "string",
  "name": "string",
  "outputFormat": "string"
}
```

Request body for [CreateExportRequest]

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csvDelimiter|string|false|none|Optional. Delimiter used in the CSV file, if `outputFormat` is set to `csv`. Defaults to the `,` (comma) character. Supported delimiter characters include comma (`,`), pipe (`\|`), and tab (`\t`).|
|datastoreName|string|false|none|Required. Name of the preconfigured datastore.|
|dateRange|[GoogleCloudApigeeV1DateRange](#schemagooglecloudapigeev1daterange)|false|none|Required. Date range of the data to export.|
|description|string|false|none|Optional. Description of the export job.|
|name|string|false|none|Required. Display name of the export job.|
|outputFormat|string|false|none|Optional. Output format of the export. Valid values include: `csv` or `json`. Defaults to `json`. Note: Configure the delimiter for CSV output using the `csvDelimiter` property.|

<h2 id="tocS_GoogleCloudApigeeV1FlowHook">GoogleCloudApigeeV1FlowHook</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1flowhook"></a>
<a id="schema_GoogleCloudApigeeV1FlowHook"></a>
<a id="tocSgooglecloudapigeev1flowhook"></a>
<a id="tocsgooglecloudapigeev1flowhook"></a>

```json
{
  "continueOnError": true,
  "description": "string",
  "flowHookPoint": "string",
  "sharedFlow": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|continueOnError|boolean|false|none|Optional. Flag that specifies whether execution should continue if the flow hook throws an exception. Set to `true` to continue execution. Set to `false` to stop execution if the flow hook throws an exception. Defaults to `true`.|
|description|string|false|none|Description of the flow hook.|
|flowHookPoint|string|false|read-only|Output only. Where in the API call flow the flow hook is invoked. Must be one of `PreProxyFlowHook`, `PostProxyFlowHook`, `PreTargetFlowHook`, or `PostTargetFlowHook`.|
|sharedFlow|string|false|none|Shared flow attached to this flow hook, or empty if there is none attached.|

<h2 id="tocS_GoogleCloudApigeeV1FlowHookConfig">GoogleCloudApigeeV1FlowHookConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1flowhookconfig"></a>
<a id="schema_GoogleCloudApigeeV1FlowHookConfig"></a>
<a id="tocSgooglecloudapigeev1flowhookconfig"></a>
<a id="tocsgooglecloudapigeev1flowhookconfig"></a>

```json
{
  "continueOnError": true,
  "name": "string",
  "sharedFlowName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|continueOnError|boolean|false|none|Flag that specifies whether the flow should abort after an error in the flow hook. Defaults to `true` (continue on error).|
|name|string|false|none|Name of the flow hook in the following format: `organizations/{org}/environments/{env}/flowhooks/{point}`. Valid `point` values include: `PreProxyFlowHook`, `PostProxyFlowHook`, `PreTargetFlowHook`, and `PostTargetFlowHook`|
|sharedFlowName|string|false|none|Name of the shared flow to invoke in the following format: `organizations/{org}/sharedflows/{sharedflow}`|

<h2 id="tocS_GoogleCloudApigeeV1GenerateDownloadUrlRequest">GoogleCloudApigeeV1GenerateDownloadUrlRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1generatedownloadurlrequest"></a>
<a id="schema_GoogleCloudApigeeV1GenerateDownloadUrlRequest"></a>
<a id="tocSgooglecloudapigeev1generatedownloadurlrequest"></a>
<a id="tocsgooglecloudapigeev1generatedownloadurlrequest"></a>

```json
{}
```

Request for GenerateDownloadUrl method.

<h2 id="tocS_GoogleCloudApigeeV1GenerateDownloadUrlResponse">GoogleCloudApigeeV1GenerateDownloadUrlResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1generatedownloadurlresponse"></a>
<a id="schema_GoogleCloudApigeeV1GenerateDownloadUrlResponse"></a>
<a id="tocSgooglecloudapigeev1generatedownloadurlresponse"></a>
<a id="tocsgooglecloudapigeev1generatedownloadurlresponse"></a>

```json
{
  "downloadUri": "string"
}
```

Response for GenerateDownloadUrl method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|downloadUri|string|false|none|The Google Cloud Storage signed URL that can be used to download the Archive zip file.|

<h2 id="tocS_GoogleCloudApigeeV1GenerateUploadUrlRequest">GoogleCloudApigeeV1GenerateUploadUrlRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1generateuploadurlrequest"></a>
<a id="schema_GoogleCloudApigeeV1GenerateUploadUrlRequest"></a>
<a id="tocSgooglecloudapigeev1generateuploadurlrequest"></a>
<a id="tocsgooglecloudapigeev1generateuploadurlrequest"></a>

```json
{}
```

Request for GenerateUploadUrl method.

<h2 id="tocS_GoogleCloudApigeeV1GenerateUploadUrlResponse">GoogleCloudApigeeV1GenerateUploadUrlResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1generateuploadurlresponse"></a>
<a id="schema_GoogleCloudApigeeV1GenerateUploadUrlResponse"></a>
<a id="tocSgooglecloudapigeev1generateuploadurlresponse"></a>
<a id="tocsgooglecloudapigeev1generateuploadurlresponse"></a>

```json
{
  "uploadUri": "string"
}
```

Response for GenerateUploadUrl method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uploadUri|string|false|none|The Google Cloud Storage signed URL that can be used to upload a new Archive zip file.|

<h2 id="tocS_GoogleCloudApigeeV1GetAsyncQueryResultUrlResponse">GoogleCloudApigeeV1GetAsyncQueryResultUrlResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1getasyncqueryresulturlresponse"></a>
<a id="schema_GoogleCloudApigeeV1GetAsyncQueryResultUrlResponse"></a>
<a id="tocSgooglecloudapigeev1getasyncqueryresulturlresponse"></a>
<a id="tocsgooglecloudapigeev1getasyncqueryresulturlresponse"></a>

```json
{
  "urls": [
    {
      "md5": "string",
      "sizeBytes": "string",
      "uri": "string"
    }
  ]
}
```

The response for GetAsyncQueryResultUrl

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|urls|[[GoogleCloudApigeeV1GetAsyncQueryResultUrlResponseURLInfo](#schemagooglecloudapigeev1getasyncqueryresulturlresponseurlinfo)]|false|none|The list of Signed URLs generated by the CreateAsyncQuery request|

<h2 id="tocS_GoogleCloudApigeeV1GetAsyncQueryResultUrlResponseURLInfo">GoogleCloudApigeeV1GetAsyncQueryResultUrlResponseURLInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1getasyncqueryresulturlresponseurlinfo"></a>
<a id="schema_GoogleCloudApigeeV1GetAsyncQueryResultUrlResponseURLInfo"></a>
<a id="tocSgooglecloudapigeev1getasyncqueryresulturlresponseurlinfo"></a>
<a id="tocsgooglecloudapigeev1getasyncqueryresulturlresponseurlinfo"></a>

```json
{
  "md5": "string",
  "sizeBytes": "string",
  "uri": "string"
}
```

A Signed URL and the relevant metadata associated with it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|md5|string|false|none|The MD5 Hash of the JSON data|
|sizeBytes|string(int64)|false|none|The size of the returned file in bytes|
|uri|string|false|none|The signed URL of the JSON data. Will be of the form `https://storage.googleapis.com/example-bucket/cat.jpeg?X-Goog-Algorithm= GOOG4-RSA-SHA256&X-Goog-Credential=example%40example-project.iam.gserviceaccount .com%2F20181026%2Fus-central1%2Fstorage%2Fgoog4_request&X-Goog-Date=20181026T18 1309Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host&X-Goog-Signature=247a2aa45f16 9edf4d187d54e7cc46e4731b1e6273242c4f4c39a1d2507a0e58706e25e3a85a7dbb891d62afa849 6def8e260c1db863d9ace85ff0a184b894b117fe46d1225c82f2aa19efd52cf21d3e2022b3b868dc c1aca2741951ed5bf3bb25a34f5e9316a2841e8ff4c530b22ceaa1c5ce09c7cbb5732631510c2058 0e61723f5594de3aea497f195456a2ff2bdd0d13bad47289d8611b6f9cfeef0c46c91a455b94e90a 66924f722292d21e24d31dcfb38ce0c0f353ffa5a9756fc2a9f2b40bc2113206a81e324fc4fd6823 a29163fa845c8ae7eca1fcf6e5bb48b3200983c56c5ca81fffb151cca7402beddfc4a76b13344703 2ea7abedc098d2eb14a7`|

<h2 id="tocS_GoogleCloudApigeeV1GetSyncAuthorizationRequest">GoogleCloudApigeeV1GetSyncAuthorizationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1getsyncauthorizationrequest"></a>
<a id="schema_GoogleCloudApigeeV1GetSyncAuthorizationRequest"></a>
<a id="tocSgooglecloudapigeev1getsyncauthorizationrequest"></a>
<a id="tocsgooglecloudapigeev1getsyncauthorizationrequest"></a>

```json
{}
```

Request for GetSyncAuthorization.

<h2 id="tocS_GoogleCloudApigeeV1GraphQLOperation">GoogleCloudApigeeV1GraphQLOperation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1graphqloperation"></a>
<a id="schema_GoogleCloudApigeeV1GraphQLOperation"></a>
<a id="tocSgooglecloudapigeev1graphqloperation"></a>
<a id="tocsgooglecloudapigeev1graphqloperation"></a>

```json
{
  "operation": "string",
  "operationTypes": [
    "string"
  ]
}
```

Represents the pairing of GraphQL operation types and the GraphQL operation name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|string|false|none|GraphQL operation name. The name and operation type will be used to apply quotas. If no name is specified, the quota will be applied to all GraphQL operations irrespective of their operation names in the payload.|
|operationTypes|[string]|false|none|Required. GraphQL operation types. Valid values include `query` or `mutation`. **Note**: Apigee does not currently support `subscription` types.|

<h2 id="tocS_GoogleCloudApigeeV1GraphQLOperationConfig">GoogleCloudApigeeV1GraphQLOperationConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1graphqloperationconfig"></a>
<a id="schema_GoogleCloudApigeeV1GraphQLOperationConfig"></a>
<a id="tocSgooglecloudapigeev1graphqloperationconfig"></a>
<a id="tocsgooglecloudapigeev1graphqloperationconfig"></a>

```json
{
  "apiSource": "string",
  "attributes": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "operations": [
    {
      "operation": "string",
      "operationTypes": [
        "string"
      ]
    }
  ],
  "quota": {
    "interval": "string",
    "limit": "string",
    "timeUnit": "string"
  }
}
```

Binds the resources in a proxy or remote service with the GraphQL operation and its associated quota enforcement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiSource|string|false|none|Required. Name of the API proxy endpoint or remote service with which the GraphQL operation and quota are associated.|
|attributes|[[GoogleCloudApigeeV1Attribute](#schemagooglecloudapigeev1attribute)]|false|none|Custom attributes associated with the operation.|
|operations|[[GoogleCloudApigeeV1GraphQLOperation](#schemagooglecloudapigeev1graphqloperation)]|false|none|Required. List of GraphQL name/operation type pairs for the proxy or remote service to which quota will be applied. If only operation types are specified, the quota will be applied to all GraphQL requests irrespective of the GraphQL name. **Note**: Currently, you can specify only a single GraphQLOperation. Specifying more than one will cause the operation to fail.|
|quota|[GoogleCloudApigeeV1Quota](#schemagooglecloudapigeev1quota)|false|none|Quota parameters to be enforced for the resources, methods, and API source combination. If none are specified, quota enforcement will not be done.|

<h2 id="tocS_GoogleCloudApigeeV1GraphQLOperationGroup">GoogleCloudApigeeV1GraphQLOperationGroup</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1graphqloperationgroup"></a>
<a id="schema_GoogleCloudApigeeV1GraphQLOperationGroup"></a>
<a id="tocSgooglecloudapigeev1graphqloperationgroup"></a>
<a id="tocsgooglecloudapigeev1graphqloperationgroup"></a>

```json
{
  "operationConfigType": "string",
  "operationConfigs": [
    {
      "apiSource": "string",
      "attributes": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "operations": [
        {
          "operation": "string",
          "operationTypes": [
            "string"
          ]
        }
      ],
      "quota": {
        "interval": "string",
        "limit": "string",
        "timeUnit": "string"
      }
    }
  ]
}
```

List of graphQL operation configuration details associated with Apigee API proxies or remote services. Remote services are non-Apigee proxies, such as Istio-Envoy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operationConfigType|string|false|none|Flag that specifies whether the configuration is for Apigee API proxy or a remote service. Valid values include `proxy` or `remoteservice`. Defaults to `proxy`. Set to `proxy` when Apigee API proxies are associated with the API product. Set to `remoteservice` when non-Apigee proxies like Istio-Envoy are associated with the API product.|
|operationConfigs|[[GoogleCloudApigeeV1GraphQLOperationConfig](#schemagooglecloudapigeev1graphqloperationconfig)]|false|none|Required. List of operation configurations for either Apigee API proxies or other remote services that are associated with this API product.|

<h2 id="tocS_GoogleCloudApigeeV1IngressConfig">GoogleCloudApigeeV1IngressConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1ingressconfig"></a>
<a id="schema_GoogleCloudApigeeV1IngressConfig"></a>
<a id="tocSgooglecloudapigeev1ingressconfig"></a>
<a id="tocsgooglecloudapigeev1ingressconfig"></a>

```json
{
  "environmentGroups": [
    {
      "endpointChainingRules": [
        {
          "deploymentGroup": "string",
          "proxyIds": [
            "string"
          ]
        }
      ],
      "hostnames": [
        "string"
      ],
      "location": "string",
      "name": "string",
      "revisionId": "string",
      "routingRules": [
        {
          "basepath": "string",
          "deploymentGroup": "string",
          "envGroupRevision": "string",
          "environment": "string",
          "otherTargets": [
            "string"
          ],
          "receiver": "string",
          "updateTime": "string"
        }
      ],
      "uid": "string"
    }
  ],
  "name": "string",
  "revisionCreateTime": "string",
  "revisionId": "string",
  "uid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentGroups|[[GoogleCloudApigeeV1EnvironmentGroupConfig](#schemagooglecloudapigeev1environmentgroupconfig)]|false|none|List of environment groups in the organization.|
|name|string|false|none|Name of the resource in the following format: `organizations/{org}/deployedIngressConfig`.|
|revisionCreateTime|string(google-datetime)|false|none|Time at which the IngressConfig revision was created.|
|revisionId|string(int64)|false|none|Revision id that defines the ordering on IngressConfig resources. The higher the revision, the more recently the configuration was deployed.|
|uid|string|false|none|A unique id for the ingress config that will only change if the organization is deleted and recreated.|

<h2 id="tocS_GoogleCloudApigeeV1Instance">GoogleCloudApigeeV1Instance</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1instance"></a>
<a id="schema_GoogleCloudApigeeV1Instance"></a>
<a id="tocSgooglecloudapigeev1instance"></a>
<a id="tocsgooglecloudapigeev1instance"></a>

```json
{
  "consumerAcceptList": [
    "string"
  ],
  "createdAt": "string",
  "description": "string",
  "diskEncryptionKeyName": "string",
  "displayName": "string",
  "host": "string",
  "ipRange": "string",
  "lastModifiedAt": "string",
  "location": "string",
  "name": "string",
  "peeringCidrRange": "CIDR_RANGE_UNSPECIFIED",
  "port": "string",
  "runtimeVersion": "string",
  "serviceAttachment": "string",
  "state": "STATE_UNSPECIFIED"
}
```

Apigee runtime instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consumerAcceptList|[string]|false|none|Optional. Customer accept list represents the list of projects (id/number) on customer side that can privately connect to the service attachment. It is an optional field which the customers can provide during the instance creation. By default, the customer project associated with the Apigee organization will be included to the list.|
|createdAt|string(int64)|false|read-only|Output only. Time the instance was created in milliseconds since epoch.|
|description|string|false|none|Optional. Description of the instance.|
|diskEncryptionKeyName|string|false|none|Customer Managed Encryption Key (CMEK) used for disk and volume encryption. Required for Apigee paid subscriptions only. Use the following format: `projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)`|
|displayName|string|false|none|Optional. Display name for the instance.|
|host|string|false|read-only|Output only. Internal hostname or IP address of the Apigee endpoint used by clients to connect to the service.|
|ipRange|string|false|none|Optional. Comma-separated list of CIDR blocks of length 22 and/or 28 used to create the Apigee instance. Providing CIDR ranges is optional. You can provide just /22 or /28 or both (or neither). Ranges you provide should be freely available as part of a larger named range you have allocated to the Service Networking peering. If this parameter is not provided, Apigee automatically requests an available /22 and /28 CIDR block from Service Networking. Use the /22 CIDR block for configuring your firewall needs to allow traffic from Apigee. Input formats: `a.b.c.d/22` or `e.f.g.h/28` or `a.b.c.d/22,e.f.g.h/28`|
|lastModifiedAt|string(int64)|false|read-only|Output only. Time the instance was last modified in milliseconds since epoch.|
|location|string|false|none|Required. Compute Engine location where the instance resides.|
|name|string|false|none|Required. Resource ID of the instance. Values must match the regular expression `^a-z{0,30}[a-z\d]$`.|
|peeringCidrRange|string|false|none|Optional. Size of the CIDR block range that will be reserved by the instance. PAID organizations support `SLASH_16` to `SLASH_20` and defaults to `SLASH_16`. Evaluation organizations support only `SLASH_23`.|
|port|string|false|read-only|Output only. Port number of the exposed Apigee endpoint.|
|runtimeVersion|string|false|read-only|Output only. Version of the runtime system running in the instance. The runtime system is the set of components that serve the API Proxy traffic in your Environments.|
|serviceAttachment|string|false|read-only|Output only. Resource name of the service attachment created for the instance in the format: `projects/*/regions/*/serviceAttachments/*` Apigee customers can privately forward traffic to this service attachment using the PSC endpoints.|
|state|string|false|read-only|Output only. State of the instance. Values other than `ACTIVE` means the resource is not ready to use.|

#### Enumerated Values

|Property|Value|
|---|---|
|peeringCidrRange|CIDR_RANGE_UNSPECIFIED|
|peeringCidrRange|SLASH_16|
|peeringCidrRange|SLASH_17|
|peeringCidrRange|SLASH_18|
|peeringCidrRange|SLASH_19|
|peeringCidrRange|SLASH_20|
|peeringCidrRange|SLASH_22|
|peeringCidrRange|SLASH_23|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|ACTIVE|
|state|DELETING|
|state|UPDATING|

<h2 id="tocS_GoogleCloudApigeeV1InstanceAttachment">GoogleCloudApigeeV1InstanceAttachment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1instanceattachment"></a>
<a id="schema_GoogleCloudApigeeV1InstanceAttachment"></a>
<a id="tocSgooglecloudapigeev1instanceattachment"></a>
<a id="tocsgooglecloudapigeev1instanceattachment"></a>

```json
{
  "createdAt": "string",
  "environment": "string",
  "name": "string"
}
```

InstanceAttachment represents the installation of an environment onto an instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(int64)|false|read-only|Output only. Time the attachment was created in milliseconds since epoch.|
|environment|string|false|none|ID of the attached environment.|
|name|string|false|read-only|Output only. ID of the attachment.|

<h2 id="tocS_GoogleCloudApigeeV1InstanceDeploymentStatus">GoogleCloudApigeeV1InstanceDeploymentStatus</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1instancedeploymentstatus"></a>
<a id="schema_GoogleCloudApigeeV1InstanceDeploymentStatus"></a>
<a id="tocSgooglecloudapigeev1instancedeploymentstatus"></a>
<a id="tocsgooglecloudapigeev1instancedeploymentstatus"></a>

```json
{
  "deployedRevisions": [
    {
      "percentage": 0,
      "revision": "string"
    }
  ],
  "deployedRoutes": [
    {
      "basepath": "string",
      "envgroup": "string",
      "environment": "string",
      "percentage": 0
    }
  ],
  "instance": "string"
}
```

The status of a deployment as reported by a single instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deployedRevisions|[[GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision](#schemagooglecloudapigeev1instancedeploymentstatusdeployedrevision)]|false|none|Revisions currently deployed in MPs.|
|deployedRoutes|[[GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute](#schemagooglecloudapigeev1instancedeploymentstatusdeployedroute)]|false|none|Current routes deployed in the ingress routing table. A route which is missing will appear in `missing_routes`.|
|instance|string|false|none|ID of the instance reporting the status.|

<h2 id="tocS_GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision">GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1instancedeploymentstatusdeployedrevision"></a>
<a id="schema_GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision"></a>
<a id="tocSgooglecloudapigeev1instancedeploymentstatusdeployedrevision"></a>
<a id="tocsgooglecloudapigeev1instancedeploymentstatusdeployedrevision"></a>

```json
{
  "percentage": 0,
  "revision": "string"
}
```

Revisions deployed in the MPs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|percentage|integer(int32)|false|none|Percentage of MP replicas reporting this revision.|
|revision|string|false|none|API proxy revision reported as deployed.|

<h2 id="tocS_GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute">GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1instancedeploymentstatusdeployedroute"></a>
<a id="schema_GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute"></a>
<a id="tocSgooglecloudapigeev1instancedeploymentstatusdeployedroute"></a>
<a id="tocsgooglecloudapigeev1instancedeploymentstatusdeployedroute"></a>

```json
{
  "basepath": "string",
  "envgroup": "string",
  "environment": "string",
  "percentage": 0
}
```

Route deployed in the ingress routing table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basepath|string|false|none|Base path in the routing table.|
|envgroup|string|false|none|Environment group where this route is installed.|
|environment|string|false|none|Destination environment. This will be empty if the route is not yet reported.|
|percentage|integer(int32)|false|none|Percentage of ingress replicas reporting this route.|

<h2 id="tocS_GoogleCloudApigeeV1IntegrationConfig">GoogleCloudApigeeV1IntegrationConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1integrationconfig"></a>
<a id="schema_GoogleCloudApigeeV1IntegrationConfig"></a>
<a id="tocSgooglecloudapigeev1integrationconfig"></a>
<a id="tocsgooglecloudapigeev1integrationconfig"></a>

```json
{
  "enabled": true
}
```

Configuration for the Integration add-on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Flag that specifies whether the Integration add-on is enabled.|

<h2 id="tocS_GoogleCloudApigeeV1KeyAliasReference">GoogleCloudApigeeV1KeyAliasReference</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1keyaliasreference"></a>
<a id="schema_GoogleCloudApigeeV1KeyAliasReference"></a>
<a id="tocSgooglecloudapigeev1keyaliasreference"></a>
<a id="tocsgooglecloudapigeev1keyaliasreference"></a>

```json
{
  "aliasId": "string",
  "reference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aliasId|string|false|none|Alias ID. Must exist in the keystore referred to by the reference.|
|reference|string|false|none|Reference name in the following format: `organizations/{org}/environments/{env}/references/{reference}`|

<h2 id="tocS_GoogleCloudApigeeV1KeyValueEntry">GoogleCloudApigeeV1KeyValueEntry</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1keyvalueentry"></a>
<a id="schema_GoogleCloudApigeeV1KeyValueEntry"></a>
<a id="tocSgooglecloudapigeev1keyvalueentry"></a>
<a id="tocsgooglecloudapigeev1keyvalueentry"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

Key value map pair where the value represents the data associated with the corresponding key. **Note**: Supported for Apigee hybrid 1.8.x and higher.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Resource URI that can be used to identify the scope of the key value map entries.|
|value|string|false|none|Required. Data or payload that is being retrieved and associated with the unique key.|

<h2 id="tocS_GoogleCloudApigeeV1KeyValueMap">GoogleCloudApigeeV1KeyValueMap</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1keyvaluemap"></a>
<a id="schema_GoogleCloudApigeeV1KeyValueMap"></a>
<a id="tocSgooglecloudapigeev1keyvaluemap"></a>
<a id="tocsgooglecloudapigeev1keyvaluemap"></a>

```json
{
  "encrypted": true,
  "name": "string"
}
```

Collection of key/value string pairs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encrypted|boolean|false|none|Required. Flag that specifies whether entry values will be encrypted. This field is retained for backward compatibility and the value of encrypted will always be `true`. Apigee X and hybrid do not support unencrypted key value maps.|
|name|string|false|none|Required. ID of the key value map.|

<h2 id="tocS_GoogleCloudApigeeV1Keystore">GoogleCloudApigeeV1Keystore</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1keystore"></a>
<a id="schema_GoogleCloudApigeeV1Keystore"></a>
<a id="tocSgooglecloudapigeev1keystore"></a>
<a id="tocsgooglecloudapigeev1keystore"></a>

```json
{
  "aliases": [
    "string"
  ],
  "name": "string"
}
```

Datastore for Certificates and Aliases.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aliases|[string]|false|read-only|Output only. Aliases in this keystore.|
|name|string|false|none|Required. Resource ID for this keystore. Values must match the regular expression `[\w[:space:].-]{1,255}`.|

<h2 id="tocS_GoogleCloudApigeeV1KeystoreConfig">GoogleCloudApigeeV1KeystoreConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1keystoreconfig"></a>
<a id="schema_GoogleCloudApigeeV1KeystoreConfig"></a>
<a id="tocSgooglecloudapigeev1keystoreconfig"></a>
<a id="tocsgooglecloudapigeev1keystoreconfig"></a>

```json
{
  "aliases": [
    {
      "location": "string",
      "name": "string",
      "type": "ALIAS_TYPE_UNSPECIFIED"
    }
  ],
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aliases|[[GoogleCloudApigeeV1AliasRevisionConfig](#schemagooglecloudapigeev1aliasrevisionconfig)]|false|none|Aliases in the keystore.|
|name|string|false|none|Resource name in the following format: `organizations/{org}/environments/{env}/keystores/{keystore}`|

<h2 id="tocS_GoogleCloudApigeeV1ListApiCategoriesResponse">GoogleCloudApigeeV1ListApiCategoriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1listapicategoriesresponse"></a>
<a id="schema_GoogleCloudApigeeV1ListApiCategoriesResponse"></a>
<a id="tocSgooglecloudapigeev1listapicategoriesresponse"></a>
<a id="tocsgooglecloudapigeev1listapicategoriesresponse"></a>

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "siteId": "string",
      "updateTime": "string"
    }
  ],
  "errorCode": "string",
  "message": "string",
  "requestId": "string",
  "status": "string"
}
```

the response for ListApiCategoriesRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[GoogleCloudApigeeV1ApiCategoryData](#schemagooglecloudapigeev1apicategorydata)]|false|none|Details of categories.|
|errorCode|string|false|none|ID that can be used to find errors in the log files.|
|message|string|false|none|Description of the operation.|
|requestId|string|false|none|ID that can be used to find request details in the log files.|
|status|string|false|none|Status of the operation.|

<h2 id="tocS_GoogleCloudApigeeV1ListApiProductsResponse">GoogleCloudApigeeV1ListApiProductsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1listapiproductsresponse"></a>
<a id="schema_GoogleCloudApigeeV1ListApiProductsResponse"></a>
<a id="tocSgooglecloudapigeev1listapiproductsresponse"></a>
<a id="tocsgooglecloudapigeev1listapiproductsresponse"></a>

```json
{
  "apiProduct": [
    {
      "apiResources": [
        "string"
      ],
      "approvalType": "string",
      "attributes": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "createdAt": "string",
      "description": "string",
      "displayName": "string",
      "environments": [
        "string"
      ],
      "graphqlOperationGroup": {
        "operationConfigType": "string",
        "operationConfigs": [
          {
            "apiSource": "string",
            "attributes": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "operations": [
              {
                "operation": "string",
                "operationTypes": [
                  "string"
                ]
              }
            ],
            "quota": {
              "interval": "string",
              "limit": "string",
              "timeUnit": "string"
            }
          }
        ]
      },
      "lastModifiedAt": "string",
      "name": "string",
      "operationGroup": {
        "operationConfigType": "string",
        "operationConfigs": [
          {
            "apiSource": "string",
            "attributes": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "operations": [
              {
                "methods": [
                  "string"
                ],
                "resource": "string"
              }
            ],
            "quota": {
              "interval": "string",
              "limit": "string",
              "timeUnit": "string"
            }
          }
        ]
      },
      "proxies": [
        "string"
      ],
      "quota": "string",
      "quotaCounterScope": "QUOTA_COUNTER_SCOPE_UNSPECIFIED",
      "quotaInterval": "string",
      "quotaTimeUnit": "string",
      "scopes": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiProduct|[[GoogleCloudApigeeV1ApiProduct](#schemagooglecloudapigeev1apiproduct)]|false|none|Lists all API product names defined for an organization.|

<h2 id="tocS_GoogleCloudApigeeV1ListApiProxiesResponse">GoogleCloudApigeeV1ListApiProxiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1listapiproxiesresponse"></a>
<a id="schema_GoogleCloudApigeeV1ListApiProxiesResponse"></a>
<a id="tocSgooglecloudapigeev1listapiproxiesresponse"></a>
<a id="tocsgooglecloudapigeev1listapiproxiesresponse"></a>

```json
{
  "proxies": [
    {
      "apiProxyType": "API_PROXY_TYPE_UNSPECIFIED",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "latestRevisionId": "string",
      "metaData": {
        "createdAt": "string",
        "lastModifiedAt": "string",
        "subType": "string"
      },
      "name": "string",
      "readOnly": true,
      "revision": [
        "string"
      ]
    }
  ]
}
```

To change this message, in the same CL add a change log in go/changing-api-proto-breaks-ui

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|proxies|[[GoogleCloudApigeeV1ApiProxy](#schemagooglecloudapigeev1apiproxy)]|false|none|none|

<h2 id="tocS_GoogleCloudApigeeV1ListAppsResponse">GoogleCloudApigeeV1ListAppsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1listappsresponse"></a>
<a id="schema_GoogleCloudApigeeV1ListAppsResponse"></a>
<a id="tocSgooglecloudapigeev1listappsresponse"></a>
<a id="tocsgooglecloudapigeev1listappsresponse"></a>

```json
{
  "app": [
    {
      "apiProducts": [
        {
          "apiproduct": "string",
          "status": "string"
        }
      ],
      "appId": "string",
      "attributes": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "callbackUrl": "string",
      "companyName": "string",
      "createdAt": "string",
      "credentials": [
        {
          "apiProducts": [
            {
              "apiproduct": "string",
              "status": "string"
            }
          ],
          "attributes": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "consumerKey": "string",
          "consumerSecret": "string",
          "expiresAt": "string",
          "issuedAt": "string",
          "scopes": [
            "string"
          ],
          "status": "string"
        }
      ],
      "developerId": "string",
      "keyExpiresIn": "string",
      "lastModifiedAt": "string",
      "name": "string",
      "scopes": [
        "string"
      ],
      "status": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app|[[GoogleCloudApigeeV1App](#schemagooglecloudapigeev1app)]|false|none|none|

<h2 id="tocS_GoogleCloudApigeeV1ListArchiveDeploymentsResponse">GoogleCloudApigeeV1ListArchiveDeploymentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1listarchivedeploymentsresponse"></a>
<a id="schema_GoogleCloudApigeeV1ListArchiveDeploymentsResponse"></a>
<a id="tocSgooglecloudapigeev1listarchivedeploymentsresponse"></a>
<a id="tocsgooglecloudapigeev1listarchivedeploymentsresponse"></a>

```json
{
  "archiveDeployments": [
    {
      "createdAt": "string",
      "gcsUri": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "operation": "string",
      "updatedAt": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response for ListArchiveDeployments method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archiveDeployments|[[GoogleCloudApigeeV1ArchiveDeployment](#schemagooglecloudapigeev1archivedeployment)]|false|none|Archive Deployments in the specified environment.|
|nextPageToken|string|false|none|Page token that you can include in a ListArchiveDeployments request to retrieve the next page. If omitted, no subsequent pages exist.|

<h2 id="tocS_GoogleCloudApigeeV1ListAsyncQueriesResponse">GoogleCloudApigeeV1ListAsyncQueriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1listasyncqueriesresponse"></a>
<a id="schema_GoogleCloudApigeeV1ListAsyncQueriesResponse"></a>
<a id="tocSgooglecloudapigeev1listasyncqueriesresponse"></a>
<a id="tocsgooglecloudapigeev1listasyncqueriesresponse"></a>

```json
{
  "queries": [
    {
      "created": "string",
      "envgroupHostname": "string",
      "error": "string",
      "executionTime": "string",
      "name": "string",
      "queryParams": {
        "dimensions": [
          "string"
        ],
        "endTimestamp": "string",
        "metrics": [
          "string"
        ],
        "outputFormat": "string",
        "startTimestamp": "string",
        "timeUnit": "string"
      },
      "reportDefinitionId": "string",
      "result": {
        "expires": "string",
        "self": "string"
      },
      "resultFileSize": "string",
      "resultRows": "string",
      "self": "string",
      "state": "string",
      "updated": "string"
    }
  ]
}
```

The response for ListAsyncQueries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queries|[[GoogleCloudApigeeV1AsyncQuery](#schemagooglecloudapigeev1asyncquery)]|false|none|The asynchronous queries belong to requested resource name.|

<h2 id="tocS_GoogleCloudApigeeV1ListCustomReportsResponse">GoogleCloudApigeeV1ListCustomReportsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1listcustomreportsresponse"></a>
<a id="schema_GoogleCloudApigeeV1ListCustomReportsResponse"></a>
<a id="tocSgooglecloudapigeev1listcustomreportsresponse"></a>
<a id="tocsgooglecloudapigeev1listcustomreportsresponse"></a>

```json
{
  "qualifier": [
    {
      "chartType": "string",
      "comments": [
        "string"
      ],
      "createdAt": "string",
      "dimensions": [
        "string"
      ],
      "displayName": "string",
      "environment": "string",
      "filter": "string",
      "fromTime": "string",
      "lastModifiedAt": "string",
      "lastViewedAt": "string",
      "limit": "string",
      "metrics": [
        {
          "function": "string",
          "name": "string"
        }
      ],
      "name": "string",
      "offset": "string",
      "organization": "string",
      "properties": [
        {
          "property": "string",
          "value": [
            {
              "name": "string",
              "value": "string"
            }
          ]
        }
      ],
      "sortByCols": [
        "string"
      ],
      "sortOrder": "string",
      "tags": [
        "string"
      ],
      "timeUnit": "string",
      "toTime": "string",
      "topk": "string"
    }
  ]
}
```

This message encapsulates a list of custom report definitions

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|qualifier|[[GoogleCloudApigeeV1CustomReport](#schemagooglecloudapigeev1customreport)]|false|none|none|

<h2 id="tocS_GoogleCloudApigeeV1ListDataCollectorsResponse">GoogleCloudApigeeV1ListDataCollectorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1listdatacollectorsresponse"></a>
<a id="schema_GoogleCloudApigeeV1ListDataCollectorsResponse"></a>
<a id="tocSgooglecloudapigeev1listdatacollectorsresponse"></a>
<a id="tocsgooglecloudapigeev1listdatacollectorsresponse"></a>

```json
{
  "dataCollectors": [
    {
      "createdAt": "string",
      "description": "string",
      "lastModifiedAt": "string",
      "name": "string",
      "type": "TYPE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

Response for ListDataCollectors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataCollectors|[[GoogleCloudApigeeV1DataCollector](#schemagooglecloudapigeev1datacollector)]|false|none|Data collectors in the specified organization.|
|nextPageToken|string|false|none|Page token that you can include in a ListDataCollectors request to retrieve the next page. If omitted, no subsequent pages exist.|

<h2 id="tocS_GoogleCloudApigeeV1ListDatastoresResponse">GoogleCloudApigeeV1ListDatastoresResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1listdatastoresresponse"></a>
<a id="schema_GoogleCloudApigeeV1ListDatastoresResponse"></a>
<a id="tocSgooglecloudapigeev1listdatastoresresponse"></a>
<a id="tocsgooglecloudapigeev1listdatastoresresponse"></a>

```json
{
  "datastores": [
    {
      "createTime": "string",
      "datastoreConfig": {
        "bucketName": "string",
        "datasetName": "string",
        "path": "string",
        "projectId": "string",
        "tablePrefix": "string"
      },
      "displayName": "string",
      "lastUpdateTime": "string",
      "org": "string",
      "self": "string",
      "targetType": "string"
    }
  ]
}
```

The response for ListDatastores

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datastores|[[GoogleCloudApigeeV1Datastore](#schemagooglecloudapigeev1datastore)]|false|none|A list of datastores|

<h2 id="tocS_GoogleCloudApigeeV1ListDebugSessionsResponse">GoogleCloudApigeeV1ListDebugSessionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1listdebugsessionsresponse"></a>
<a id="schema_GoogleCloudApigeeV1ListDebugSessionsResponse"></a>
<a id="tocSgooglecloudapigeev1listdebugsessionsresponse"></a>
<a id="tocsgooglecloudapigeev1listdebugsessionsresponse"></a>

```json
{
  "nextPageToken": "string",
  "sessions": [
    {
      "id": "string",
      "timestampMs": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Page token that you can include in a ListDebugSessionsRequest to retrieve the next page. If omitted, no subsequent pages exist.|
|sessions|[[GoogleCloudApigeeV1Session](#schemagooglecloudapigeev1session)]|false|none|Session info that includes debug session ID and the first transaction creation timestamp.|

<h2 id="tocS_GoogleCloudApigeeV1ListDeploymentsResponse">GoogleCloudApigeeV1ListDeploymentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1listdeploymentsresponse"></a>
<a id="schema_GoogleCloudApigeeV1ListDeploymentsResponse"></a>
<a id="tocSgooglecloudapigeev1listdeploymentsresponse"></a>
<a id="tocsgooglecloudapigeev1listdeploymentsresponse"></a>

```json
{
  "deployments": [
    {
      "apiProxy": "string",
      "deployStartTime": "string",
      "environment": "string",
      "errors": [
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
      "instances": [
        {
          "deployedRevisions": [
            {
              "percentage": 0,
              "revision": "string"
            }
          ],
          "deployedRoutes": [
            {
              "basepath": "string",
              "envgroup": "string",
              "environment": "string",
              "percentage": 0
            }
          ],
          "instance": "string"
        }
      ],
      "pods": [
        {
          "appVersion": "string",
          "deploymentStatus": "string",
          "deploymentStatusTime": "string",
          "deploymentTime": "string",
          "podName": "string",
          "podStatus": "string",
          "podStatusTime": "string",
          "statusCode": "string",
          "statusCodeDetails": "string"
        }
      ],
      "revision": "string",
      "routeConflicts": [
        {
          "conflictingDeployment": {
            "apiProxy": "string",
            "basepath": "string",
            "environment": "string",
            "revision": "string"
          },
          "description": "string",
          "environmentGroup": "string"
        }
      ],
      "serviceAccount": "string",
      "state": "RUNTIME_STATE_UNSPECIFIED"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deployments|[[GoogleCloudApigeeV1Deployment](#schemagooglecloudapigeev1deployment)]|false|none|List of deployments.|

<h2 id="tocS_GoogleCloudApigeeV1ListDeveloperAppsResponse">GoogleCloudApigeeV1ListDeveloperAppsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1listdeveloperappsresponse"></a>
<a id="schema_GoogleCloudApigeeV1ListDeveloperAppsResponse"></a>
<a id="tocSgooglecloudapigeev1listdeveloperappsresponse"></a>
<a id="tocsgooglecloudapigeev1listdeveloperappsresponse"></a>

```json
{
  "app": [
    {
      "apiProducts": [
        "string"
      ],
      "appFamily": "string",
      "appId": "string",
      "attributes": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "callbackUrl": "string",
      "createdAt": "string",
      "credentials": [
        {
          "apiProducts": [
            {
              "apiproduct": "string",
              "status": "string"
            }
          ],
          "attributes": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "consumerKey": "string",
          "consumerSecret": "string",
          "expiresAt": "string",
          "issuedAt": "string",
          "scopes": [
            "string"
          ],
          "status": "string"
        }
      ],
      "developerId": "string",
      "keyExpiresIn": "string",
      "lastModifiedAt": "string",
      "name": "string",
      "scopes": [
        "string"
      ],
      "status": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app|[[GoogleCloudApigeeV1DeveloperApp](#schemagooglecloudapigeev1developerapp)]|false|none|List of developer apps and their credentials.|

<h2 id="tocS_GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse">GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1listdevelopersubscriptionsresponse"></a>
<a id="schema_GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse"></a>
<a id="tocSgooglecloudapigeev1listdevelopersubscriptionsresponse"></a>
<a id="tocsgooglecloudapigeev1listdevelopersubscriptionsresponse"></a>

```json
{
  "developerSubscriptions": [
    {
      "apiproduct": "string",
      "createdAt": "string",
      "endTime": "string",
      "lastModifiedAt": "string",
      "name": "string",
      "startTime": "string"
    }
  ],
  "nextStartKey": "string"
}
```

Response for ListDeveloperSubscriptions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|developerSubscriptions|[[GoogleCloudApigeeV1DeveloperSubscription](#schemagooglecloudapigeev1developersubscription)]|false|none|List of all subscriptions.|
|nextStartKey|string|false|none|Value that can be sent as `startKey` to retrieve the next page of content. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_GoogleCloudApigeeV1ListEndpointAttachmentsResponse">GoogleCloudApigeeV1ListEndpointAttachmentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1listendpointattachmentsresponse"></a>
<a id="schema_GoogleCloudApigeeV1ListEndpointAttachmentsResponse"></a>
<a id="tocSgooglecloudapigeev1listendpointattachmentsresponse"></a>
<a id="tocsgooglecloudapigeev1listendpointattachmentsresponse"></a>

```json
{
  "endpointAttachments": [
    {
      "connectionState": "CONNECTION_STATE_UNSPECIFIED",
      "host": "string",
      "location": "string",
      "name": "string",
      "serviceAttachment": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

Response for ListEndpointAttachments method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpointAttachments|[[GoogleCloudApigeeV1EndpointAttachment](#schemagooglecloudapigeev1endpointattachment)]|false|none|Endpoint attachments in the specified organization.|
|nextPageToken|string|false|none|Page token that you can include in an `ListEndpointAttachments` request to retrieve the next page. If omitted, no subsequent pages exist.|

<h2 id="tocS_GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponse">GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1listenvironmentgroupattachmentsresponse"></a>
<a id="schema_GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponse"></a>
<a id="tocSgooglecloudapigeev1listenvironmentgroupattachmentsresponse"></a>
<a id="tocsgooglecloudapigeev1listenvironmentgroupattachmentsresponse"></a>

```json
{
  "environmentGroupAttachments": [
    {
      "createdAt": "string",
      "environment": "string",
      "environmentGroupId": "string",
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response for ListEnvironmentGroupAttachments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentGroupAttachments|[[GoogleCloudApigeeV1EnvironmentGroupAttachment](#schemagooglecloudapigeev1environmentgroupattachment)]|false|none|EnvironmentGroupAttachments for the specified environment group.|
|nextPageToken|string|false|none|Page token that you can include in a ListEnvironmentGroupAttachments request to retrieve the next page. If omitted, no subsequent pages exist.|

<h2 id="tocS_GoogleCloudApigeeV1ListEnvironmentGroupsResponse">GoogleCloudApigeeV1ListEnvironmentGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1listenvironmentgroupsresponse"></a>
<a id="schema_GoogleCloudApigeeV1ListEnvironmentGroupsResponse"></a>
<a id="tocSgooglecloudapigeev1listenvironmentgroupsresponse"></a>
<a id="tocsgooglecloudapigeev1listenvironmentgroupsresponse"></a>

```json
{
  "environmentGroups": [
    {
      "createdAt": "string",
      "hostnames": [
        "string"
      ],
      "lastModifiedAt": "string",
      "name": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

Response for ListEnvironmentGroups.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environmentGroups|[[GoogleCloudApigeeV1EnvironmentGroup](#schemagooglecloudapigeev1environmentgroup)]|false|none|EnvironmentGroups in the specified organization.|
|nextPageToken|string|false|none|Page token that you can include in a ListEnvironmentGroups request to retrieve the next page. If omitted, no subsequent pages exist.|

<h2 id="tocS_GoogleCloudApigeeV1ListEnvironmentResourcesResponse">GoogleCloudApigeeV1ListEnvironmentResourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1listenvironmentresourcesresponse"></a>
<a id="schema_GoogleCloudApigeeV1ListEnvironmentResourcesResponse"></a>
<a id="tocSgooglecloudapigeev1listenvironmentresourcesresponse"></a>
<a id="tocsgooglecloudapigeev1listenvironmentresourcesresponse"></a>

```json
{
  "resourceFile": [
    {
      "name": "string",
      "type": "string"
    }
  ]
}
```

Response for ListEnvironmentResources

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceFile|[[GoogleCloudApigeeV1ResourceFile](#schemagooglecloudapigeev1resourcefile)]|false|none|List of resources files.|

<h2 id="tocS_GoogleCloudApigeeV1ListExportsResponse">GoogleCloudApigeeV1ListExportsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1listexportsresponse"></a>
<a id="schema_GoogleCloudApigeeV1ListExportsResponse"></a>
<a id="tocSgooglecloudapigeev1listexportsresponse"></a>
<a id="tocsgooglecloudapigeev1listexportsresponse"></a>

```json
{
  "exports": [
    {
      "created": "string",
      "datastoreName": "string",
      "description": "string",
      "error": "string",
      "executionTime": "string",
      "name": "string",
      "self": "string",
      "state": "string",
      "updated": "string"
    }
  ]
}
```

The response for ListExports

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exports|[[GoogleCloudApigeeV1Export](#schemagooglecloudapigeev1export)]|false|none|Details of the export jobs.|

<h2 id="tocS_GoogleCloudApigeeV1ListHybridIssuersResponse">GoogleCloudApigeeV1ListHybridIssuersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1listhybridissuersresponse"></a>
<a id="schema_GoogleCloudApigeeV1ListHybridIssuersResponse"></a>
<a id="tocSgooglecloudapigeev1listhybridissuersresponse"></a>
<a id="tocsgooglecloudapigeev1listhybridissuersresponse"></a>

```json
{
  "issuers": [
    {
      "emailIds": [
        "string"
      ],
      "service": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issuers|[[GoogleCloudApigeeV1ServiceIssuersMapping](#schemagooglecloudapigeev1serviceissuersmapping)]|false|none|Lists of hybrid services and its trusted issuer email ids.|

<h2 id="tocS_GoogleCloudApigeeV1ListInstanceAttachmentsResponse">GoogleCloudApigeeV1ListInstanceAttachmentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1listinstanceattachmentsresponse"></a>
<a id="schema_GoogleCloudApigeeV1ListInstanceAttachmentsResponse"></a>
<a id="tocSgooglecloudapigeev1listinstanceattachmentsresponse"></a>
<a id="tocsgooglecloudapigeev1listinstanceattachmentsresponse"></a>

```json
{
  "attachments": [
    {
      "createdAt": "string",
      "environment": "string",
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response for ListInstanceAttachments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachments|[[GoogleCloudApigeeV1InstanceAttachment](#schemagooglecloudapigeev1instanceattachment)]|false|none|Attachments for the instance.|
|nextPageToken|string|false|none|Page token that you can include in a ListInstanceAttachments request to retrieve the next page of content. If omitted, no subsequent pages exist.|

<h2 id="tocS_GoogleCloudApigeeV1ListInstancesResponse">GoogleCloudApigeeV1ListInstancesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1listinstancesresponse"></a>
<a id="schema_GoogleCloudApigeeV1ListInstancesResponse"></a>
<a id="tocSgooglecloudapigeev1listinstancesresponse"></a>
<a id="tocsgooglecloudapigeev1listinstancesresponse"></a>

```json
{
  "instances": [
    {
      "consumerAcceptList": [
        "string"
      ],
      "createdAt": "string",
      "description": "string",
      "diskEncryptionKeyName": "string",
      "displayName": "string",
      "host": "string",
      "ipRange": "string",
      "lastModifiedAt": "string",
      "location": "string",
      "name": "string",
      "peeringCidrRange": "CIDR_RANGE_UNSPECIFIED",
      "port": "string",
      "runtimeVersion": "string",
      "serviceAttachment": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

Response for ListInstances.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instances|[[GoogleCloudApigeeV1Instance](#schemagooglecloudapigeev1instance)]|false|none|Instances in the specified organization.|
|nextPageToken|string|false|none|Page token that you can include in a ListInstance request to retrieve the next page of content. If omitted, no subsequent pages exist.|

<h2 id="tocS_GoogleCloudApigeeV1ListKeyValueEntriesResponse">GoogleCloudApigeeV1ListKeyValueEntriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1listkeyvalueentriesresponse"></a>
<a id="schema_GoogleCloudApigeeV1ListKeyValueEntriesResponse"></a>
<a id="tocSgooglecloudapigeev1listkeyvalueentriesresponse"></a>
<a id="tocsgooglecloudapigeev1listkeyvalueentriesresponse"></a>

```json
{
  "keyValueEntries": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The request structure for listing key value map keys and its corresponding values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyValueEntries|[[GoogleCloudApigeeV1KeyValueEntry](#schemagooglecloudapigeev1keyvalueentry)]|false|none|One or more key value map keys and values.|
|nextPageToken|string|false|none|Token that can be sent as `next_page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_GoogleCloudApigeeV1ListNatAddressesResponse">GoogleCloudApigeeV1ListNatAddressesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1listnataddressesresponse"></a>
<a id="schema_GoogleCloudApigeeV1ListNatAddressesResponse"></a>
<a id="tocSgooglecloudapigeev1listnataddressesresponse"></a>
<a id="tocsgooglecloudapigeev1listnataddressesresponse"></a>

```json
{
  "natAddresses": [
    {
      "ipAddress": "string",
      "name": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

Response for ListNatAddresses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|natAddresses|[[GoogleCloudApigeeV1NatAddress](#schemagooglecloudapigeev1nataddress)]|false|none|List of NAT Addresses for the instance.|
|nextPageToken|string|false|none|Page token that you can include in a ListNatAddresses request to retrieve the next page of content. If omitted, no subsequent pages exist.|

<h2 id="tocS_GoogleCloudApigeeV1ListOfDevelopersResponse">GoogleCloudApigeeV1ListOfDevelopersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1listofdevelopersresponse"></a>
<a id="schema_GoogleCloudApigeeV1ListOfDevelopersResponse"></a>
<a id="tocSgooglecloudapigeev1listofdevelopersresponse"></a>
<a id="tocsgooglecloudapigeev1listofdevelopersresponse"></a>

```json
{
  "developer": [
    {
      "accessType": "string",
      "appFamily": "string",
      "apps": [
        "string"
      ],
      "attributes": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "companies": [
        "string"
      ],
      "createdAt": "string",
      "developerId": "string",
      "email": "string",
      "firstName": "string",
      "lastModifiedAt": "string",
      "lastName": "string",
      "organizationName": "string",
      "status": "string",
      "userName": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|developer|[[GoogleCloudApigeeV1Developer](#schemagooglecloudapigeev1developer)]|false|none|List of developers.|

<h2 id="tocS_GoogleCloudApigeeV1ListOrganizationsResponse">GoogleCloudApigeeV1ListOrganizationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1listorganizationsresponse"></a>
<a id="schema_GoogleCloudApigeeV1ListOrganizationsResponse"></a>
<a id="tocSgooglecloudapigeev1listorganizationsresponse"></a>
<a id="tocsgooglecloudapigeev1listorganizationsresponse"></a>

```json
{
  "organizations": [
    {
      "location": "string",
      "organization": "string",
      "projectId": "string",
      "projectIds": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|organizations|[[GoogleCloudApigeeV1OrganizationProjectMapping](#schemagooglecloudapigeev1organizationprojectmapping)]|false|none|List of Apigee organizations and associated Google Cloud projects.|

<h2 id="tocS_GoogleCloudApigeeV1ListRatePlansResponse">GoogleCloudApigeeV1ListRatePlansResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1listrateplansresponse"></a>
<a id="schema_GoogleCloudApigeeV1ListRatePlansResponse"></a>
<a id="tocSgooglecloudapigeev1listrateplansresponse"></a>
<a id="tocsgooglecloudapigeev1listrateplansresponse"></a>

```json
{
  "nextStartKey": "string",
  "ratePlans": [
    {
      "apiproduct": "string",
      "billingPeriod": "BILLING_PERIOD_UNSPECIFIED",
      "consumptionPricingRates": [
        {
          "end": "string",
          "fee": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "start": "string"
        }
      ],
      "consumptionPricingType": "CONSUMPTION_PRICING_TYPE_UNSPECIFIED",
      "createdAt": "string",
      "currencyCode": "string",
      "description": "string",
      "displayName": "string",
      "endTime": "string",
      "fixedFeeFrequency": 0,
      "fixedRecurringFee": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "lastModifiedAt": "string",
      "name": "string",
      "paymentFundingModel": "PAYMENT_FUNDING_MODEL_UNSPECIFIED",
      "revenueShareRates": [
        {
          "end": "string",
          "sharePercentage": 0,
          "start": "string"
        }
      ],
      "revenueShareType": "REVENUE_SHARE_TYPE_UNSPECIFIED",
      "setupFee": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "startTime": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ]
}
```

Response for ListRatePlans.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextStartKey|string|false|none|Value that can be sent as `startKey` to retrieve the next page of content. If this field is omitted, there are no subsequent pages.|
|ratePlans|[[GoogleCloudApigeeV1RatePlan](#schemagooglecloudapigeev1rateplan)]|false|none|List of rate plans in an organization.|

<h2 id="tocS_GoogleCloudApigeeV1ListSecurityIncidentsResponse">GoogleCloudApigeeV1ListSecurityIncidentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1listsecurityincidentsresponse"></a>
<a id="schema_GoogleCloudApigeeV1ListSecurityIncidentsResponse"></a>
<a id="tocSgooglecloudapigeev1listsecurityincidentsresponse"></a>
<a id="tocsgooglecloudapigeev1listsecurityincidentsresponse"></a>

```json
{
  "nextPageToken": "string",
  "securityIncidents": [
    {
      "detectionTypes": [
        "string"
      ],
      "displayName": "string",
      "firstDetectedTime": "string",
      "lastDetectedTime": "string",
      "name": "string",
      "riskLevel": "RISK_LEVEL_UNSPECIFIED",
      "trafficCount": "string"
    }
  ]
}
```

Response for ListSecurityIncidents.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|securityIncidents|[[GoogleCloudApigeeV1SecurityIncident](#schemagooglecloudapigeev1securityincident)]|false|none|List of security incidents in the organization|

<h2 id="tocS_GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse">GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1listsecurityprofilerevisionsresponse"></a>
<a id="schema_GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse"></a>
<a id="tocSgooglecloudapigeev1listsecurityprofilerevisionsresponse"></a>
<a id="tocsgooglecloudapigeev1listsecurityprofilerevisionsresponse"></a>

```json
{
  "nextPageToken": "string",
  "securityProfiles": [
    {
      "displayName": "string",
      "environments": [
        {
          "attachTime": "string",
          "environment": "string"
        }
      ],
      "maxScore": 0,
      "minScore": 0,
      "name": "string",
      "revisionCreateTime": "string",
      "revisionId": "string",
      "revisionPublishTime": "string",
      "revisionUpdateTime": "string",
      "scoringConfigs": [
        {
          "description": "string",
          "scorePath": "string",
          "title": "string"
        }
      ]
    }
  ]
}
```

Response for ListSecurityProfileRevisions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|securityProfiles|[[GoogleCloudApigeeV1SecurityProfile](#schemagooglecloudapigeev1securityprofile)]|false|none|List of security profile revisions. The revisions may be attached or unattached to any environment.|

<h2 id="tocS_GoogleCloudApigeeV1ListSecurityProfilesResponse">GoogleCloudApigeeV1ListSecurityProfilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1listsecurityprofilesresponse"></a>
<a id="schema_GoogleCloudApigeeV1ListSecurityProfilesResponse"></a>
<a id="tocSgooglecloudapigeev1listsecurityprofilesresponse"></a>
<a id="tocsgooglecloudapigeev1listsecurityprofilesresponse"></a>

```json
{
  "nextPageToken": "string",
  "securityProfiles": [
    {
      "displayName": "string",
      "environments": [
        {
          "attachTime": "string",
          "environment": "string"
        }
      ],
      "maxScore": 0,
      "minScore": 0,
      "name": "string",
      "revisionCreateTime": "string",
      "revisionId": "string",
      "revisionPublishTime": "string",
      "revisionUpdateTime": "string",
      "scoringConfigs": [
        {
          "description": "string",
          "scorePath": "string",
          "title": "string"
        }
      ]
    }
  ]
}
```

Response for ListSecurityProfiles.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|securityProfiles|[[GoogleCloudApigeeV1SecurityProfile](#schemagooglecloudapigeev1securityprofile)]|false|none|List of security profiles in the organization. The profiles may be attached or unattached to any environment. This will return latest revision of each profile.|

<h2 id="tocS_GoogleCloudApigeeV1ListSecurityReportsResponse">GoogleCloudApigeeV1ListSecurityReportsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1listsecurityreportsresponse"></a>
<a id="schema_GoogleCloudApigeeV1ListSecurityReportsResponse"></a>
<a id="tocSgooglecloudapigeev1listsecurityreportsresponse"></a>
<a id="tocsgooglecloudapigeev1listsecurityreportsresponse"></a>

```json
{
  "nextPageToken": "string",
  "securityReports": [
    {
      "created": "string",
      "displayName": "string",
      "envgroupHostname": "string",
      "error": "string",
      "executionTime": "string",
      "queryParams": {
        "dimensions": [
          "string"
        ],
        "endTimestamp": "string",
        "metrics": [
          "string"
        ],
        "mimeType": "string",
        "startTimestamp": "string",
        "timeUnit": "string"
      },
      "reportDefinitionId": "string",
      "result": {
        "expires": "string",
        "self": "string"
      },
      "resultFileSize": "string",
      "resultRows": "string",
      "self": "string",
      "state": "string",
      "updated": "string"
    }
  ]
}
```

The response for SecurityReports.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|If the number of security reports exceeded the page size requested, the token can be used to fetch the next page in a subsequent call. If the response is the last page and there are no more reports to return this field is left empty.|
|securityReports|[[GoogleCloudApigeeV1SecurityReport](#schemagooglecloudapigeev1securityreport)]|false|none|The security reports belong to requested resource name.|

<h2 id="tocS_GoogleCloudApigeeV1ListSharedFlowsResponse">GoogleCloudApigeeV1ListSharedFlowsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1listsharedflowsresponse"></a>
<a id="schema_GoogleCloudApigeeV1ListSharedFlowsResponse"></a>
<a id="tocSgooglecloudapigeev1listsharedflowsresponse"></a>
<a id="tocsgooglecloudapigeev1listsharedflowsresponse"></a>

```json
{
  "sharedFlows": [
    {
      "latestRevisionId": "string",
      "metaData": {
        "createdAt": "string",
        "lastModifiedAt": "string",
        "subType": "string"
      },
      "name": "string",
      "revision": [
        "string"
      ]
    }
  ]
}
```

To change this message, in the same CL add a change log in go/changing-api-proto-breaks-ui

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sharedFlows|[[GoogleCloudApigeeV1SharedFlow](#schemagooglecloudapigeev1sharedflow)]|false|none|none|

<h2 id="tocS_GoogleCloudApigeeV1ListTraceConfigOverridesResponse">GoogleCloudApigeeV1ListTraceConfigOverridesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1listtraceconfigoverridesresponse"></a>
<a id="schema_GoogleCloudApigeeV1ListTraceConfigOverridesResponse"></a>
<a id="tocSgooglecloudapigeev1listtraceconfigoverridesresponse"></a>
<a id="tocsgooglecloudapigeev1listtraceconfigoverridesresponse"></a>

```json
{
  "nextPageToken": "string",
  "traceConfigOverrides": [
    {
      "apiProxy": "string",
      "name": "string",
      "samplingConfig": {
        "sampler": "SAMPLER_UNSPECIFIED",
        "samplingRate": 0
      }
    }
  ]
}
```

Response for ListTraceConfigOverrides.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token value that can be passed as `page_token` to retrieve the next page of content.|
|traceConfigOverrides|[[GoogleCloudApigeeV1TraceConfigOverride](#schemagooglecloudapigeev1traceconfigoverride)]|false|none|List all trace configuration overrides in an environment.|

<h2 id="tocS_GoogleCloudApigeeV1Metadata">GoogleCloudApigeeV1Metadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1metadata"></a>
<a id="schema_GoogleCloudApigeeV1Metadata"></a>
<a id="tocSgooglecloudapigeev1metadata"></a>
<a id="tocsgooglecloudapigeev1metadata"></a>

```json
{
  "errors": [
    "string"
  ],
  "notices": [
    "string"
  ]
}
```

Encapsulates additional information about query execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[string]|false|none|List of error messages as strings.|
|notices|[string]|false|none|List of additional information such as data source, if result was truncated. For example: ``` "notices": [ "Source:Postgres", "PG Host:uappg0rw.e2e.apigeeks.net", "query served by:4b64601e-40de-4eb1-bfb9-eeee7ac929ed", "Table used: edge.api.uapgroup2.agg_api" ]```|

<h2 id="tocS_GoogleCloudApigeeV1Metric">GoogleCloudApigeeV1Metric</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1metric"></a>
<a id="schema_GoogleCloudApigeeV1Metric"></a>
<a id="tocSgooglecloudapigeev1metric"></a>
<a id="tocsgooglecloudapigeev1metric"></a>

```json
{
  "name": "string",
  "values": [
    null
  ]
}
```

Encapsulates the metric data point. For example: ```{ "name": "sum(message_count)", "values" : [ { "timestamp": 1549004400000, "value": "39.0" }, { "timestamp" : 1548997200000, "value" : "0.0" } ] }``` or ```{ "name": "sum(message_count)", "values" : ["39.0"] }```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Metric name.|
|values|[object]|false|none|List of metric values. Possible value formats include: `"values":["39.0"]` or `"values":[ { "value": "39.0", "timestamp": 1232434354} ]`|

<h2 id="tocS_GoogleCloudApigeeV1MetricAggregation">GoogleCloudApigeeV1MetricAggregation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1metricaggregation"></a>
<a id="schema_GoogleCloudApigeeV1MetricAggregation"></a>
<a id="tocSgooglecloudapigeev1metricaggregation"></a>
<a id="tocsgooglecloudapigeev1metricaggregation"></a>

```json
{
  "aggregation": "AGGREGATION_FUNCTION_UNSPECIFIED",
  "name": "string",
  "order": "ORDER_UNSPECIFIED"
}
```

The optionally aggregated metric to query with its ordering.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregation|string|false|none|Aggregation function associated with the metric.|
|name|string|false|none|Name of the metric|
|order|string|false|none|Ordering for this aggregation in the result. For time series this is ignored since the ordering of points depends only on the timestamp, not the values.|

#### Enumerated Values

|Property|Value|
|---|---|
|aggregation|AGGREGATION_FUNCTION_UNSPECIFIED|
|aggregation|AVG|
|aggregation|SUM|
|aggregation|MIN|
|aggregation|MAX|
|aggregation|COUNT_DISTINCT|
|order|ORDER_UNSPECIFIED|
|order|ASCENDING|
|order|DESCENDING|

<h2 id="tocS_GoogleCloudApigeeV1MonetizationConfig">GoogleCloudApigeeV1MonetizationConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1monetizationconfig"></a>
<a id="schema_GoogleCloudApigeeV1MonetizationConfig"></a>
<a id="tocSgooglecloudapigeev1monetizationconfig"></a>
<a id="tocsgooglecloudapigeev1monetizationconfig"></a>

```json
{
  "enabled": true
}
```

Configuration for the Monetization add-on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Flag that specifies whether the Monetization add-on is enabled.|

<h2 id="tocS_GoogleCloudApigeeV1NatAddress">GoogleCloudApigeeV1NatAddress</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1nataddress"></a>
<a id="schema_GoogleCloudApigeeV1NatAddress"></a>
<a id="tocSgooglecloudapigeev1nataddress"></a>
<a id="tocsgooglecloudapigeev1nataddress"></a>

```json
{
  "ipAddress": "string",
  "name": "string",
  "state": "STATE_UNSPECIFIED"
}
```

Apigee NAT(network address translation) address. A NAT address is a static external IP address used for Internet egress traffic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ipAddress|string|false|read-only|Output only. The static IPV4 address.|
|name|string|false|none|Required. Resource ID of the NAT address.|
|state|string|false|read-only|Output only. State of the nat address.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|RESERVED|
|state|ACTIVE|
|state|DELETING|

<h2 id="tocS_GoogleCloudApigeeV1NodeConfig">GoogleCloudApigeeV1NodeConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1nodeconfig"></a>
<a id="schema_GoogleCloudApigeeV1NodeConfig"></a>
<a id="tocSgooglecloudapigeev1nodeconfig"></a>
<a id="tocsgooglecloudapigeev1nodeconfig"></a>

```json
{
  "currentAggregateNodeCount": "string",
  "maxNodeCount": "string",
  "minNodeCount": "string"
}
```

NodeConfig for setting the min/max number of nodes associated with the environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentAggregateNodeCount|string(int64)|false|read-only|Output only. The current total number of gateway nodes that each environment currently has across all instances.|
|maxNodeCount|string(int64)|false|none|Optional. The maximum total number of gateway nodes that the is reserved for all instances that has the specified environment. If not specified, the default is determined by the recommended maximum number of nodes for that gateway.|
|minNodeCount|string(int64)|false|none|Optional. The minimum total number of gateway nodes that the is reserved for all instances that has the specified environment. If not specified, the default is determined by the recommended minimum number of nodes for that gateway.|

<h2 id="tocS_GoogleCloudApigeeV1Operation">GoogleCloudApigeeV1Operation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1operation"></a>
<a id="schema_GoogleCloudApigeeV1Operation"></a>
<a id="tocSgooglecloudapigeev1operation"></a>
<a id="tocsgooglecloudapigeev1operation"></a>

```json
{
  "methods": [
    "string"
  ],
  "resource": "string"
}
```

Represents the pairing of REST resource path and the actions (verbs) allowed on the resource path.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|methods|[string]|false|none|methods refers to the REST verbs as in https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html. When none specified, all verb types are allowed.|
|resource|string|false|none|Required. REST resource path associated with the API proxy or remote service.|

<h2 id="tocS_GoogleCloudApigeeV1OperationConfig">GoogleCloudApigeeV1OperationConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1operationconfig"></a>
<a id="schema_GoogleCloudApigeeV1OperationConfig"></a>
<a id="tocSgooglecloudapigeev1operationconfig"></a>
<a id="tocsgooglecloudapigeev1operationconfig"></a>

```json
{
  "apiSource": "string",
  "attributes": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "operations": [
    {
      "methods": [
        "string"
      ],
      "resource": "string"
    }
  ],
  "quota": {
    "interval": "string",
    "limit": "string",
    "timeUnit": "string"
  }
}
```

Binds the resources in an API proxy or remote service with the allowed REST methods and associated quota enforcement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiSource|string|false|none|Required. Name of the API proxy or remote service with which the resources, methods, and quota are associated.|
|attributes|[[GoogleCloudApigeeV1Attribute](#schemagooglecloudapigeev1attribute)]|false|none|Custom attributes associated with the operation.|
|operations|[[GoogleCloudApigeeV1Operation](#schemagooglecloudapigeev1operation)]|false|none|List of resource/method pairs for the API proxy or remote service to which quota will applied. **Note**: Currently, you can specify only a single resource/method pair. The call will fail if more than one resource/method pair is provided.|
|quota|[GoogleCloudApigeeV1Quota](#schemagooglecloudapigeev1quota)|false|none|Quota parameters to be enforced for the resources, methods, and API source combination. If none are specified, quota enforcement will not be done.|

<h2 id="tocS_GoogleCloudApigeeV1OperationGroup">GoogleCloudApigeeV1OperationGroup</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1operationgroup"></a>
<a id="schema_GoogleCloudApigeeV1OperationGroup"></a>
<a id="tocSgooglecloudapigeev1operationgroup"></a>
<a id="tocsgooglecloudapigeev1operationgroup"></a>

```json
{
  "operationConfigType": "string",
  "operationConfigs": [
    {
      "apiSource": "string",
      "attributes": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "operations": [
        {
          "methods": [
            "string"
          ],
          "resource": "string"
        }
      ],
      "quota": {
        "interval": "string",
        "limit": "string",
        "timeUnit": "string"
      }
    }
  ]
}
```

List of operation configuration details associated with Apigee API proxies or remote services. Remote services are non-Apigee proxies, such as Istio-Envoy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operationConfigType|string|false|none|Flag that specifes whether the configuration is for Apigee API proxy or a remote service. Valid values include `proxy` or `remoteservice`. Defaults to `proxy`. Set to `proxy` when Apigee API proxies are associated with the API product. Set to `remoteservice` when non-Apigee proxies like Istio-Envoy are associated with the API product.|
|operationConfigs|[[GoogleCloudApigeeV1OperationConfig](#schemagooglecloudapigeev1operationconfig)]|false|none|Required. List of operation configurations for either Apigee API proxies or other remote services that are associated with this API product.|

<h2 id="tocS_GoogleCloudApigeeV1OperationMetadata">GoogleCloudApigeeV1OperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1operationmetadata"></a>
<a id="schema_GoogleCloudApigeeV1OperationMetadata"></a>
<a id="tocSgooglecloudapigeev1operationmetadata"></a>
<a id="tocsgooglecloudapigeev1operationmetadata"></a>

```json
{
  "operationType": "OPERATION_TYPE_UNSPECIFIED",
  "progress": {
    "description": "string",
    "details": {
      "property1": null,
      "property2": null
    },
    "percentDone": 0,
    "state": "STATE_UNSPECIFIED"
  },
  "state": "STATE_UNSPECIFIED",
  "targetResourceName": "string",
  "warnings": [
    "string"
  ]
}
```

Metadata describing an Operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operationType|string|false|none|none|
|progress|[GoogleCloudApigeeV1OperationMetadataProgress](#schemagooglecloudapigeev1operationmetadataprogress)|false|none|Progress of the operation.|
|state|string|false|none|none|
|targetResourceName|string|false|none|Name of the resource for which the operation is operating on.|
|warnings|[string]|false|none|Warnings encountered while executing the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|OPERATION_TYPE_UNSPECIFIED|
|operationType|INSERT|
|operationType|DELETE|
|operationType|UPDATE|
|state|STATE_UNSPECIFIED|
|state|NOT_STARTED|
|state|IN_PROGRESS|
|state|FINISHED|

<h2 id="tocS_GoogleCloudApigeeV1OperationMetadataProgress">GoogleCloudApigeeV1OperationMetadataProgress</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1operationmetadataprogress"></a>
<a id="schema_GoogleCloudApigeeV1OperationMetadataProgress"></a>
<a id="tocSgooglecloudapigeev1operationmetadataprogress"></a>
<a id="tocsgooglecloudapigeev1operationmetadataprogress"></a>

```json
{
  "description": "string",
  "details": {
    "property1": null,
    "property2": null
  },
  "percentDone": 0,
  "state": "STATE_UNSPECIFIED"
}
```

Information about operation progress.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Description of the operation's progress.|
|details|object|false|none|The additional details of the progress.|
|percentDone|integer(int32)|false|none|The percentage of the operation progress.|
|state|string|false|none|State of the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|NOT_STARTED|
|state|IN_PROGRESS|
|state|FINISHED|

<h2 id="tocS_GoogleCloudApigeeV1OptimizedStats">GoogleCloudApigeeV1OptimizedStats</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1optimizedstats"></a>
<a id="schema_GoogleCloudApigeeV1OptimizedStats"></a>
<a id="tocSgooglecloudapigeev1optimizedstats"></a>
<a id="tocsgooglecloudapigeev1optimizedstats"></a>

```json
{
  "Response": {
    "TimeUnit": [
      "string"
    ],
    "metaData": {
      "errors": [
        "string"
      ],
      "notices": [
        "string"
      ]
    },
    "resultTruncated": true,
    "stats": {
      "data": [
        null
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Response|[GoogleCloudApigeeV1OptimizedStatsResponse](#schemagooglecloudapigeev1optimizedstatsresponse)|false|none|Wraps the `stats` response for JavaScript Optimized Scenario with a response key. For example: ```{ "Response": { "TimeUnit": [], "metaData": { "errors": [], "notices": [ "Source:Postgres", "Table used: edge.api.aaxgroup001.agg_api", "PG Host:ruappg08-ro.production.apigeeks.net", "query served by:80c4ebca-6a10-4a2e-8faf-c60c1ee306ca" ] }, "resultTruncated": false, "stats": { "data": [ { "identifier": { "names": [ "apiproxy" ], "values": [ "sirjee" ] }, "metric": [ { "env": "prod", "name": "sum(message_count)", "values": [ 36.0 ] }, { "env": "prod", "name": "sum(is_error)", "values": [ 36.0 ] } ] } ] } } }```|

<h2 id="tocS_GoogleCloudApigeeV1OptimizedStatsNode">GoogleCloudApigeeV1OptimizedStatsNode</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1optimizedstatsnode"></a>
<a id="schema_GoogleCloudApigeeV1OptimizedStatsNode"></a>
<a id="tocSgooglecloudapigeev1optimizedstatsnode"></a>
<a id="tocsgooglecloudapigeev1optimizedstatsnode"></a>

```json
{
  "data": [
    null
  ]
}
```

Encapsulates a data node as represented below: ``` { "identifier": { "names": [ "apiproxy" ], "values": [ "sirjee" ] }, "metric": [ { "env": "prod", "name": "sum(message_count)", "values": [ 36.0 ] } ] }``` or ``` { "env": "prod", "name": "sum(message_count)", "values": [ 36.0 ] }``` Depending on whether a dimension is present in the query or not the data node type can be a simple metric value or dimension identifier with list of metrics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|none|

<h2 id="tocS_GoogleCloudApigeeV1OptimizedStatsResponse">GoogleCloudApigeeV1OptimizedStatsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1optimizedstatsresponse"></a>
<a id="schema_GoogleCloudApigeeV1OptimizedStatsResponse"></a>
<a id="tocSgooglecloudapigeev1optimizedstatsresponse"></a>
<a id="tocsgooglecloudapigeev1optimizedstatsresponse"></a>

```json
{
  "TimeUnit": [
    "string"
  ],
  "metaData": {
    "errors": [
      "string"
    ],
    "notices": [
      "string"
    ]
  },
  "resultTruncated": true,
  "stats": {
    "data": [
      null
    ]
  }
}
```

Encapsulates a response format for JavaScript Optimized Scenario.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimeUnit|[string(int64)]|false|none|List of time unit values. Time unit refers to an epoch timestamp value.|
|metaData|[GoogleCloudApigeeV1Metadata](#schemagooglecloudapigeev1metadata)|false|none|Metadata information about the query executed.|
|resultTruncated|boolean|false|none|Boolean flag that indicates whether the results were truncated based on the limit parameter.|
|stats|[GoogleCloudApigeeV1OptimizedStatsNode](#schemagooglecloudapigeev1optimizedstatsnode)|false|none|`stats` results.|

<h2 id="tocS_GoogleCloudApigeeV1Organization">GoogleCloudApigeeV1Organization</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1organization"></a>
<a id="schema_GoogleCloudApigeeV1Organization"></a>
<a id="tocSgooglecloudapigeev1organization"></a>
<a id="tocsgooglecloudapigeev1organization"></a>

```json
{
  "addonsConfig": {
    "advancedApiOpsConfig": {
      "enabled": true
    },
    "apiSecurityConfig": {
      "enabled": true,
      "expiresAt": "string"
    },
    "connectorsPlatformConfig": {
      "enabled": true,
      "expiresAt": "string"
    },
    "integrationConfig": {
      "enabled": true
    },
    "monetizationConfig": {
      "enabled": true
    }
  },
  "analyticsRegion": "string",
  "apiConsumerDataEncryptionKeyName": "string",
  "apiConsumerDataLocation": "string",
  "apigeeProjectId": "string",
  "attributes": [
    "string"
  ],
  "authorizedNetwork": "string",
  "billingType": "BILLING_TYPE_UNSPECIFIED",
  "caCertificate": "string",
  "controlPlaneEncryptionKeyName": "string",
  "createdAt": "string",
  "customerName": "string",
  "description": "string",
  "displayName": "string",
  "environments": [
    "string"
  ],
  "expiresAt": "string",
  "lastModifiedAt": "string",
  "name": "string",
  "portalDisabled": true,
  "projectId": "string",
  "properties": {
    "property": [
      {
        "name": "string",
        "value": "string"
      }
    ]
  },
  "runtimeDatabaseEncryptionKeyName": "string",
  "runtimeType": "RUNTIME_TYPE_UNSPECIFIED",
  "state": "STATE_UNSPECIFIED",
  "subscriptionType": "SUBSCRIPTION_TYPE_UNSPECIFIED",
  "type": "TYPE_UNSPECIFIED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addonsConfig|[GoogleCloudApigeeV1AddonsConfig](#schemagooglecloudapigeev1addonsconfig)|false|none|Addon configurations of the Apigee organization.|
|analyticsRegion|string|false|none|Required. DEPRECATED: This field will be deprecated once Apigee supports DRZ. Primary Google Cloud region for analytics data storage. For valid values, see [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).|
|apiConsumerDataEncryptionKeyName|string|false|none|Cloud KMS key name used for encrypting API consumer data. Required for US/EU regions when [BillingType](#BillingType) is `SUBSCRIPTION`. When [BillingType](#BillingType) is `EVALUATION` or the region is not US/EU, a Google-Managed encryption key will be used. Format: `projects/*/locations/*/keyRings/*/cryptoKeys/*`|
|apiConsumerDataLocation|string|false|none|This field is needed only for customers with control plane in US or EU. Apigee stores some control plane data only in single region. This field determines which single region Apigee should use. For example: "us-west1" when control plane is in US or "europe-west2" when control plane is in EU.|
|apigeeProjectId|string|false|read-only|Output only. Apigee Project ID associated with the organization. Use this project to allowlist Apigee in the Service Attachment when using private service connect with Apigee.|
|attributes|[string]|false|none|Not used by Apigee.|
|authorizedNetwork|string|false|none|Compute Engine network used for Service Networking to be peered with Apigee runtime instances. See [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started). Valid only when [RuntimeType](#RuntimeType) is set to `CLOUD`. The value must be set before the creation of a runtime instance and can be updated only when there are no runtime instances. For example: `default`. Apigee also supports shared VPC (that is, the host network project is not the same as the one that is peering with Apigee). See [Shared VPC overview](https://cloud.google.com/vpc/docs/shared-vpc). To use a shared VPC network, use the following format: `projects/{host-project-id}/{region}/networks/{network-name}`. For example: `projects/my-sharedvpc-host/global/networks/mynetwork` **Note:** Not supported for Apigee hybrid.|
|billingType|string|false|none|Billing type of the Apigee organization. See [Apigee pricing](https://cloud.google.com/apigee/pricing).|
|caCertificate|string(byte)|false|read-only|Output only. Base64-encoded public certificate for the root CA of the Apigee organization. Valid only when [RuntimeType](#RuntimeType) is `CLOUD`.|
|controlPlaneEncryptionKeyName|string|false|none|Cloud KMS key name used for encrypting control plane data that is stored in a multi region. Required when [BillingType](#BillingType) is `SUBSCRIPTION`. When [BillingType](#BillingType) is `EVALUATION`, a Google-Managed encryption key will be used. Format: `projects/*/locations/*/keyRings/*/cryptoKeys/*`|
|createdAt|string(int64)|false|read-only|Output only. Time that the Apigee organization was created in milliseconds since epoch.|
|customerName|string|false|none|Not used by Apigee.|
|description|string|false|none|Description of the Apigee organization.|
|displayName|string|false|none|Display name for the Apigee organization. Unused, but reserved for future use.|
|environments|[string]|false|read-only|Output only. List of environments in the Apigee organization.|
|expiresAt|string(int64)|false|read-only|Output only. Time that the Apigee organization is scheduled for deletion.|
|lastModifiedAt|string(int64)|false|read-only|Output only. Time that the Apigee organization was last modified in milliseconds since epoch.|
|name|string|false|read-only|Output only. Name of the Apigee organization.|
|portalDisabled|boolean|false|none|Configuration for the Portals settings.|
|projectId|string|false|read-only|Output only. Project ID associated with the Apigee organization.|
|properties|[GoogleCloudApigeeV1Properties](#schemagooglecloudapigeev1properties)|false|none|Properties defined in the Apigee organization profile.|
|runtimeDatabaseEncryptionKeyName|string|false|none|Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances. Update is not allowed after the organization is created. Required when [RuntimeType](#RuntimeType) is `CLOUD`. If not specified when [RuntimeType](#RuntimeType) is `TRIAL`, a Google-Managed encryption key will be used. For example: "projects/foo/locations/us/keyRings/bar/cryptoKeys/baz". **Note:** Not supported for Apigee hybrid.|
|runtimeType|string|false|none|Required. Runtime type of the Apigee organization based on the Apigee subscription purchased.|
|state|string|false|read-only|Output only. State of the organization. Values other than ACTIVE means the resource is not ready to use.|
|subscriptionType|string|false|read-only|Output only. DEPRECATED: This will eventually be replaced by BillingType. Subscription type of the Apigee organization. Valid values include trial (free, limited, and for evaluation purposes only) or paid (full subscription has been purchased). See [Apigee pricing](https://cloud.google.com/apigee/pricing/).|
|type|string|false|none|Not used by Apigee.|

#### Enumerated Values

|Property|Value|
|---|---|
|billingType|BILLING_TYPE_UNSPECIFIED|
|billingType|SUBSCRIPTION|
|billingType|EVALUATION|
|billingType|PAYG|
|runtimeType|RUNTIME_TYPE_UNSPECIFIED|
|runtimeType|CLOUD|
|runtimeType|HYBRID|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|ACTIVE|
|state|DELETING|
|state|UPDATING|
|subscriptionType|SUBSCRIPTION_TYPE_UNSPECIFIED|
|subscriptionType|PAID|
|subscriptionType|TRIAL|
|type|TYPE_UNSPECIFIED|
|type|TYPE_TRIAL|
|type|TYPE_PAID|
|type|TYPE_INTERNAL|

<h2 id="tocS_GoogleCloudApigeeV1OrganizationProjectMapping">GoogleCloudApigeeV1OrganizationProjectMapping</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1organizationprojectmapping"></a>
<a id="schema_GoogleCloudApigeeV1OrganizationProjectMapping"></a>
<a id="tocSgooglecloudapigeev1organizationprojectmapping"></a>
<a id="tocsgooglecloudapigeev1organizationprojectmapping"></a>

```json
{
  "location": "string",
  "organization": "string",
  "projectId": "string",
  "projectIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|string|false|read-only|Output only. The Google Cloud region where control plane data is located. For more information, see https://cloud.google.com/about/locations/.|
|organization|string|false|none|Name of the Apigee organization.|
|projectId|string|false|none|Google Cloud project associated with the Apigee organization|
|projectIds|[string]|false|none|DEPRECATED: Use `project_id`. An Apigee Organization is mapped to a single project.|

<h2 id="tocS_GoogleCloudApigeeV1PodStatus">GoogleCloudApigeeV1PodStatus</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1podstatus"></a>
<a id="schema_GoogleCloudApigeeV1PodStatus"></a>
<a id="tocSgooglecloudapigeev1podstatus"></a>
<a id="tocsgooglecloudapigeev1podstatus"></a>

```json
{
  "appVersion": "string",
  "deploymentStatus": "string",
  "deploymentStatusTime": "string",
  "deploymentTime": "string",
  "podName": "string",
  "podStatus": "string",
  "podStatusTime": "string",
  "statusCode": "string",
  "statusCodeDetails": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appVersion|string|false|none|Version of the application running in the pod.|
|deploymentStatus|string|false|none|Status of the deployment. Valid values include: - `deployed`: Successful. - `error` : Failed. - `pending` : Pod has not yet reported on the deployment.|
|deploymentStatusTime|string(int64)|false|none|Time the deployment status was reported in milliseconds since epoch.|
|deploymentTime|string(int64)|false|none|Time the proxy was deployed in milliseconds since epoch.|
|podName|string|false|none|Name of the pod which is reporting the status.|
|podStatus|string|false|none|Overall status of the pod (not this specific deployment). Valid values include: - `active`: Up to date. - `stale` : Recently out of date. Pods that have not reported status in a long time are excluded from the output.|
|podStatusTime|string(int64)|false|none|Time the pod status was reported in milliseconds since epoch.|
|statusCode|string|false|none|Code associated with the deployment status.|
|statusCodeDetails|string|false|none|Human-readable message associated with the status code.|

<h2 id="tocS_GoogleCloudApigeeV1Point">GoogleCloudApigeeV1Point</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1point"></a>
<a id="schema_GoogleCloudApigeeV1Point"></a>
<a id="tocSgooglecloudapigeev1point"></a>
<a id="tocsgooglecloudapigeev1point"></a>

```json
{
  "id": "string",
  "results": [
    {
      "ActionResult": "string",
      "accessList": [
        {
          "Get": {
            "name": "string",
            "value": "string"
          },
          "Remove": {
            "name": "string",
            "success": true
          },
          "Set": {
            "name": "string",
            "success": true,
            "value": "string"
          }
        }
      ],
      "content": "string",
      "headers": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "properties": {
        "property": [
          {
            "name": "string",
            "value": "string"
          }
        ]
      },
      "reasonPhrase": "string",
      "statusCode": "string",
      "timestamp": "string",
      "uRI": "string",
      "verb": "string"
    }
  ]
}
```

Point is a group of information collected by runtime plane at critical points of the message flow of the processed API request. This is a list of supported point IDs, categorized to three major buckets. For each category, debug points that we are currently supporting are listed below: - Flow status debug points: StateChange FlowInfo Condition Execution DebugMask Error - Flow control debug points: FlowCallout Paused Resumed FlowReturn BreakFlow Error - Runtime debug points: ScriptExecutor FlowCalloutStepDefinition CustomTarget StepDefinition Oauth2ServicePoint RaiseFault NodeJS The detail information of the given debug point is stored in a list of results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Name of a step in the transaction.|
|results|[[GoogleCloudApigeeV1Result](#schemagooglecloudapigeev1result)]|false|none|List of results extracted from a given debug point.|

<h2 id="tocS_GoogleCloudApigeeV1Properties">GoogleCloudApigeeV1Properties</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1properties"></a>
<a id="schema_GoogleCloudApigeeV1Properties"></a>
<a id="tocSgooglecloudapigeev1properties"></a>
<a id="tocsgooglecloudapigeev1properties"></a>

```json
{
  "property": [
    {
      "name": "string",
      "value": "string"
    }
  ]
}
```

Message for compatibility with legacy Edge specification for Java Properties object in JSON.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|property|[[GoogleCloudApigeeV1Property](#schemagooglecloudapigeev1property)]|false|none|List of all properties in the object|

<h2 id="tocS_GoogleCloudApigeeV1Property">GoogleCloudApigeeV1Property</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1property"></a>
<a id="schema_GoogleCloudApigeeV1Property"></a>
<a id="tocSgooglecloudapigeev1property"></a>
<a id="tocsgooglecloudapigeev1property"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

A single property entry in the Properties message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The property key|
|value|string|false|none|The property value|

<h2 id="tocS_GoogleCloudApigeeV1ProvisionOrganizationRequest">GoogleCloudApigeeV1ProvisionOrganizationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1provisionorganizationrequest"></a>
<a id="schema_GoogleCloudApigeeV1ProvisionOrganizationRequest"></a>
<a id="tocSgooglecloudapigeev1provisionorganizationrequest"></a>
<a id="tocsgooglecloudapigeev1provisionorganizationrequest"></a>

```json
{
  "analyticsRegion": "string",
  "authorizedNetwork": "string",
  "runtimeLocation": "string"
}
```

Request for ProvisionOrganization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analyticsRegion|string|false|none|Primary Cloud Platform region for analytics data storage. For valid values, see [Create an organization](https://cloud.google.com/apigee/docs/hybrid/latest/precog-provision). Defaults to `us-west1`.|
|authorizedNetwork|string|false|none|Compute Engine network used for Service Networking to be peered with Apigee runtime instances. See [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started). Apigee also supports shared VPC (that is, the host network project is not the same as the one that is peering with Apigee). See [Shared VPC overview](https://cloud.google.com/vpc/docs/shared-vpc). To use a shared VPC network, use the following format: `projects/{host-project-id}/{region}/networks/{network-name}`. For example: `projects/my-sharedvpc-host/global/networks/mynetwork`|
|runtimeLocation|string|false|none|Cloud Platform location for the runtime instance. Defaults to zone `us-west1-a`. If a region is provided, `EVAL` organizations will use the region for automatically selecting a zone for the runtime instance.|

<h2 id="tocS_GoogleCloudApigeeV1Query">GoogleCloudApigeeV1Query</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1query"></a>
<a id="schema_GoogleCloudApigeeV1Query"></a>
<a id="tocSgooglecloudapigeev1query"></a>
<a id="tocsgooglecloudapigeev1query"></a>

```json
{
  "csvDelimiter": "string",
  "dimensions": [
    "string"
  ],
  "envgroupHostname": "string",
  "filter": "string",
  "groupByTimeUnit": "string",
  "limit": 0,
  "metrics": [
    {
      "alias": "string",
      "function": "string",
      "name": "string",
      "operator": "string",
      "value": "string"
    }
  ],
  "name": "string",
  "outputFormat": "string",
  "reportDefinitionId": "string",
  "timeRange": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csvDelimiter|string|false|none|Delimiter used in the CSV file, if `outputFormat` is set to `csv`. Defaults to the `,` (comma) character. Supported delimiter characters include comma (`,`), pipe (`\|`), and tab (`\t`).|
|dimensions|[string]|false|none|A list of dimensions. https://docs.apigee.com/api-platform/analytics/analytics-reference#dimensions|
|envgroupHostname|string|false|none|Hostname needs to be specified if query intends to run at host level. This field is only allowed when query is submitted by CreateHostAsyncQuery where analytics data will be grouped by organization and hostname.|
|filter|string|false|none|Boolean expression that can be used to filter data. Filter expressions can be combined using AND/OR terms and should be fully parenthesized to avoid ambiguity. See Analytics metrics, dimensions, and filters reference https://docs.apigee.com/api-platform/analytics/analytics-reference for more information on the fields available to filter on. For more information on the tokens that you use to build filter expressions, see Filter expression syntax. https://docs.apigee.com/api-platform/analytics/asynch-reports-api#filter-expression-syntax|
|groupByTimeUnit|string|false|none|Time unit used to group the result set. Valid values include: second, minute, hour, day, week, or month. If a query includes groupByTimeUnit, then the result is an aggregation based on the specified time unit and the resultant timestamp does not include milliseconds precision. If a query omits groupByTimeUnit, then the resultant timestamp includes milliseconds precision.|
|limit|integer(int32)|false|none|Maximum number of rows that can be returned in the result.|
|metrics|[[GoogleCloudApigeeV1QueryMetric](#schemagooglecloudapigeev1querymetric)]|false|none|A list of Metrics.|
|name|string|false|none|Asynchronous Query Name.|
|outputFormat|string|false|none|Valid values include: `csv` or `json`. Defaults to `json`. Note: Configure the delimiter for CSV output using the csvDelimiter property.|
|reportDefinitionId|string|false|none|Asynchronous Report ID.|
|timeRange|object|false|none|Required. Time range for the query. Can use the following predefined strings to specify the time range: `last60minutes` `last24hours` `last7days` Or, specify the timeRange as a structure describing start and end timestamps in the ISO format: yyyy-mm-ddThh:mm:ssZ. Example: "timeRange": { "start": "2018-07-29T00:13:00Z", "end": "2018-08-01T00:18:00Z" }|

<h2 id="tocS_GoogleCloudApigeeV1QueryMetadata">GoogleCloudApigeeV1QueryMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1querymetadata"></a>
<a id="schema_GoogleCloudApigeeV1QueryMetadata"></a>
<a id="tocSgooglecloudapigeev1querymetadata"></a>
<a id="tocsgooglecloudapigeev1querymetadata"></a>

```json
{
  "dimensions": [
    "string"
  ],
  "endTimestamp": "string",
  "metrics": [
    "string"
  ],
  "outputFormat": "string",
  "startTimestamp": "string",
  "timeUnit": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensions|[string]|false|none|Dimensions of the AsyncQuery.|
|endTimestamp|string|false|none|End timestamp of the query range.|
|metrics|[string]|false|none|Metrics of the AsyncQuery. Example: ["name:message_count,func:sum,alias:sum_message_count"]|
|outputFormat|string|false|none|Output format.|
|startTimestamp|string|false|none|Start timestamp of the query range.|
|timeUnit|string|false|none|Query GroupBy time unit.|

<h2 id="tocS_GoogleCloudApigeeV1QueryMetric">GoogleCloudApigeeV1QueryMetric</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1querymetric"></a>
<a id="schema_GoogleCloudApigeeV1QueryMetric"></a>
<a id="tocSgooglecloudapigeev1querymetric"></a>
<a id="tocsgooglecloudapigeev1querymetric"></a>

```json
{
  "alias": "string",
  "function": "string",
  "name": "string",
  "operator": "string",
  "value": "string"
}
```

More info about Metric: https://docs.apigee.com/api-platform/analytics/analytics-reference#metrics

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|string|false|none|Alias for the metric. Alias will be used to replace metric name in query results.|
|function|string|false|none|Aggregation function: avg, min, max, or sum.|
|name|string|false|none|Required. Metric name.|
|operator|string|false|none|One of `+`, `-`, `/`, `%`, `*`.|
|value|string|false|none|Operand value should be provided when operator is set.|

<h2 id="tocS_GoogleCloudApigeeV1QueryTabularStatsRequest">GoogleCloudApigeeV1QueryTabularStatsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1querytabularstatsrequest"></a>
<a id="schema_GoogleCloudApigeeV1QueryTabularStatsRequest"></a>
<a id="tocSgooglecloudapigeev1querytabularstatsrequest"></a>
<a id="tocsgooglecloudapigeev1querytabularstatsrequest"></a>

```json
{
  "dimensions": [
    "string"
  ],
  "filter": "string",
  "metrics": [
    {
      "aggregation": "AGGREGATION_FUNCTION_UNSPECIFIED",
      "name": "string",
      "order": "ORDER_UNSPECIFIED"
    }
  ],
  "pageSize": 0,
  "pageToken": "string",
  "timeRange": {
    "endTime": "string",
    "startTime": "string"
  }
}
```

Request payload representing the query to be run for fetching security statistics as rows.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensions|[string]|false|none|Required. List of dimension names to group the aggregations by.|
|filter|string|false|none|Filter further on specific dimension values. Follows the same grammar as custom report's filter expressions. Example, apiproxy eq 'foobar'. https://cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference#filters|
|metrics|[[GoogleCloudApigeeV1MetricAggregation](#schemagooglecloudapigeev1metricaggregation)]|false|none|Required. List of metrics and their aggregations.|
|pageSize|integer(int32)|false|none|Page size represents the number of rows.|
|pageToken|string|false|none|Identifies a sequence of rows.|
|timeRange|[GoogleTypeInterval](#schemagoogletypeinterval)|false|none|Time range for the stats.|

<h2 id="tocS_GoogleCloudApigeeV1QueryTabularStatsResponse">GoogleCloudApigeeV1QueryTabularStatsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1querytabularstatsresponse"></a>
<a id="schema_GoogleCloudApigeeV1QueryTabularStatsResponse"></a>
<a id="tocSgooglecloudapigeev1querytabularstatsresponse"></a>
<a id="tocsgooglecloudapigeev1querytabularstatsresponse"></a>

```json
{
  "columns": [
    "string"
  ],
  "nextPageToken": "string",
  "values": [
    [
      null
    ]
  ]
}
```

Encapsulates two kinds of stats that are results of the dimensions and aggregations requested. - Tabular rows. - Time series data. Example of tabular rows, Represents security stats results as a row of flat values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columns|[string]|false|none|Column names corresponding to the same order as the inner values in the stats field.|
|nextPageToken|string|false|none|Next page token.|
|values|[[object]]|false|none|Resultant rows from the executed query.|

<h2 id="tocS_GoogleCloudApigeeV1QueryTimeSeriesStatsRequest">GoogleCloudApigeeV1QueryTimeSeriesStatsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1querytimeseriesstatsrequest"></a>
<a id="schema_GoogleCloudApigeeV1QueryTimeSeriesStatsRequest"></a>
<a id="tocSgooglecloudapigeev1querytimeseriesstatsrequest"></a>
<a id="tocsgooglecloudapigeev1querytimeseriesstatsrequest"></a>

```json
{
  "dimensions": [
    "string"
  ],
  "filter": "string",
  "metrics": [
    {
      "aggregation": "AGGREGATION_FUNCTION_UNSPECIFIED",
      "name": "string",
      "order": "ORDER_UNSPECIFIED"
    }
  ],
  "pageSize": 0,
  "pageToken": "string",
  "timeRange": {
    "endTime": "string",
    "startTime": "string"
  },
  "timestampOrder": "ORDER_UNSPECIFIED",
  "windowSize": "WINDOW_SIZE_UNSPECIFIED"
}
```

QueryTimeSeriesStatsRequest represents a query that returns a collection of time series sequences grouped by their values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensions|[string]|false|none|List of dimension names to group the aggregations by. If no dimensions are passed, a single trend line representing the requested metric aggregations grouped by environment is returned.|
|filter|string|false|none|Filter further on specific dimension values. Follows the same grammar as custom report's filter expressions. Example, apiproxy eq 'foobar'. https://cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference#filters|
|metrics|[[GoogleCloudApigeeV1MetricAggregation](#schemagooglecloudapigeev1metricaggregation)]|false|none|Required. List of metrics and their aggregations.|
|pageSize|integer(int32)|false|none|Page size represents the number of time series sequences, one per unique set of dimensions and their values.|
|pageToken|string|false|none|Page token stands for a specific collection of time series sequences.|
|timeRange|[GoogleTypeInterval](#schemagoogletypeinterval)|false|none|Required. Time range for the stats.|
|timestampOrder|string|false|none|Order the sequences in increasing or decreasing order of timestamps. Default is descending order of timestamps (latest first).|
|windowSize|string|false|none|Time buckets to group the stats by.|

#### Enumerated Values

|Property|Value|
|---|---|
|timestampOrder|ORDER_UNSPECIFIED|
|timestampOrder|ASCENDING|
|timestampOrder|DESCENDING|
|windowSize|WINDOW_SIZE_UNSPECIFIED|
|windowSize|MINUTE|
|windowSize|HOUR|
|windowSize|DAY|
|windowSize|MONTH|

<h2 id="tocS_GoogleCloudApigeeV1QueryTimeSeriesStatsResponse">GoogleCloudApigeeV1QueryTimeSeriesStatsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1querytimeseriesstatsresponse"></a>
<a id="schema_GoogleCloudApigeeV1QueryTimeSeriesStatsResponse"></a>
<a id="tocSgooglecloudapigeev1querytimeseriesstatsresponse"></a>
<a id="tocsgooglecloudapigeev1querytimeseriesstatsresponse"></a>

```json
{
  "columns": [
    "string"
  ],
  "nextPageToken": "string",
  "values": [
    {
      "dimensions": {
        "property1": "string",
        "property2": "string"
      },
      "points": [
        [
          null
        ]
      ]
    }
  ]
}
```

Represents security stats result as a collection of time series sequences.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columns|[string]|false|none|Column names corresponding to the same order as the inner values in the stats field.|
|nextPageToken|string|false|none|Next page token.|
|values|[[GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence](#schemagooglecloudapigeev1querytimeseriesstatsresponsesequence)]|false|none|Results of the query returned as a JSON array.|

<h2 id="tocS_GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence">GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1querytimeseriesstatsresponsesequence"></a>
<a id="schema_GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence"></a>
<a id="tocSgooglecloudapigeev1querytimeseriesstatsresponsesequence"></a>
<a id="tocsgooglecloudapigeev1querytimeseriesstatsresponsesequence"></a>

```json
{
  "dimensions": {
    "property1": "string",
    "property2": "string"
  },
  "points": [
    [
      null
    ]
  ]
}
```

A sequence of time series.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensions|object|false|none|Map of dimensions and their values that uniquely identifies a time series sequence.|
|points|[[object]]|false|none|List of points. First value of each inner list is a timestamp.|

<h2 id="tocS_GoogleCloudApigeeV1Quota">GoogleCloudApigeeV1Quota</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1quota"></a>
<a id="schema_GoogleCloudApigeeV1Quota"></a>
<a id="tocSgooglecloudapigeev1quota"></a>
<a id="tocsgooglecloudapigeev1quota"></a>

```json
{
  "interval": "string",
  "limit": "string",
  "timeUnit": "string"
}
```

Quota contains the essential parameters needed that can be applied on the resources, methods, API source combination associated with this API product. While Quota is optional, setting it prevents requests from exceeding the provisioned parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interval|string|false|none|Required. Time interval over which the number of request messages is calculated.|
|limit|string|false|none|Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected.|
|timeUnit|string|false|none|Time unit defined for the `interval`. Valid values include `minute`, `hour`, `day`, or `month`. If `limit` and `interval` are valid, the default value is `hour`; otherwise, the default is null.|

<h2 id="tocS_GoogleCloudApigeeV1RatePlan">GoogleCloudApigeeV1RatePlan</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1rateplan"></a>
<a id="schema_GoogleCloudApigeeV1RatePlan"></a>
<a id="tocSgooglecloudapigeev1rateplan"></a>
<a id="tocsgooglecloudapigeev1rateplan"></a>

```json
{
  "apiproduct": "string",
  "billingPeriod": "BILLING_PERIOD_UNSPECIFIED",
  "consumptionPricingRates": [
    {
      "end": "string",
      "fee": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "start": "string"
    }
  ],
  "consumptionPricingType": "CONSUMPTION_PRICING_TYPE_UNSPECIFIED",
  "createdAt": "string",
  "currencyCode": "string",
  "description": "string",
  "displayName": "string",
  "endTime": "string",
  "fixedFeeFrequency": 0,
  "fixedRecurringFee": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "lastModifiedAt": "string",
  "name": "string",
  "paymentFundingModel": "PAYMENT_FUNDING_MODEL_UNSPECIFIED",
  "revenueShareRates": [
    {
      "end": "string",
      "sharePercentage": 0,
      "start": "string"
    }
  ],
  "revenueShareType": "REVENUE_SHARE_TYPE_UNSPECIFIED",
  "setupFee": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "startTime": "string",
  "state": "STATE_UNSPECIFIED"
}
```

Rate plan details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiproduct|string|false|none|Name of the API product that the rate plan is associated with.|
|billingPeriod|string|false|none|Frequency at which the customer will be billed.|
|consumptionPricingRates|[[GoogleCloudApigeeV1RateRange](#schemagooglecloudapigeev1raterange)]|false|none|API call volume ranges and the fees charged when the total number of API calls is within a given range. The method used to calculate the final fee depends on the selected pricing model. For example, if the pricing model is `STAIRSTEP` and the ranges are defined as follows: ``` { "start": 1, "end": 100, "fee": 75 }, { "start": 101, "end": 200, "fee": 100 }, } ``` Then the following fees would be charged based on the total number of API calls (assuming the currency selected is `USD`): * 1 call costs $75 * 50 calls cost $75 * 150 calls cost $100 The number of API calls cannot exceed 200.|
|consumptionPricingType|string|false|none|Pricing model used for consumption-based charges.|
|createdAt|string(int64)|false|read-only|Output only. Time that the rate plan was created in milliseconds since epoch.|
|currencyCode|string|false|none|Currency to be used for billing. Consists of a three-letter code as defined by the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) standard.|
|description|string|false|none|Description of the rate plan.|
|displayName|string|false|none|Display name of the rate plan.|
|endTime|string(int64)|false|none|Time when the rate plan will expire in milliseconds since epoch. Set to 0 or `null` to indicate that the rate plan should never expire.|
|fixedFeeFrequency|integer(int32)|false|none|Frequency at which the fixed fee is charged.|
|fixedRecurringFee|[GoogleTypeMoney](#schemagoogletypemoney)|false|none|Fixed amount that is charged at a defined interval and billed in advance of use of the API product. The fee will be prorated for the first billing period.|
|lastModifiedAt|string(int64)|false|read-only|Output only. Time the rate plan was last modified in milliseconds since epoch.|
|name|string|false|read-only|Output only. Name of the rate plan.|
|paymentFundingModel|string|false|none|DEPRECATED: This field is no longer supported and will eventually be removed when Apigee Hybrid 1.5/1.6 is no longer supported. Instead, use the `billingType` field inside `DeveloperMonetizationConfig` resource. Flag that specifies the billing account type, prepaid or postpaid.|
|revenueShareRates|[[GoogleCloudApigeeV1RevenueShareRange](#schemagooglecloudapigeev1revenuesharerange)]|false|none|Details of the revenue sharing model.|
|revenueShareType|string|false|none|Method used to calculate the revenue that is shared with developers.|
|setupFee|[GoogleTypeMoney](#schemagoogletypemoney)|false|none|Initial, one-time fee paid when purchasing the API product.|
|startTime|string(int64)|false|none|Time when the rate plan becomes active in milliseconds since epoch.|
|state|string|false|none|Current state of the rate plan (draft or published).|

#### Enumerated Values

|Property|Value|
|---|---|
|billingPeriod|BILLING_PERIOD_UNSPECIFIED|
|billingPeriod|WEEKLY|
|billingPeriod|MONTHLY|
|consumptionPricingType|CONSUMPTION_PRICING_TYPE_UNSPECIFIED|
|consumptionPricingType|FIXED_PER_UNIT|
|consumptionPricingType|BANDED|
|consumptionPricingType|TIERED|
|consumptionPricingType|STAIRSTEP|
|paymentFundingModel|PAYMENT_FUNDING_MODEL_UNSPECIFIED|
|paymentFundingModel|PREPAID|
|paymentFundingModel|POSTPAID|
|revenueShareType|REVENUE_SHARE_TYPE_UNSPECIFIED|
|revenueShareType|FIXED|
|revenueShareType|VOLUME_BANDED|
|state|STATE_UNSPECIFIED|
|state|DRAFT|
|state|PUBLISHED|

<h2 id="tocS_GoogleCloudApigeeV1RateRange">GoogleCloudApigeeV1RateRange</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1raterange"></a>
<a id="schema_GoogleCloudApigeeV1RateRange"></a>
<a id="tocSgooglecloudapigeev1raterange"></a>
<a id="tocsgooglecloudapigeev1raterange"></a>

```json
{
  "end": "string",
  "fee": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "start": "string"
}
```

API call volume range and the fees charged when the total number of API calls is within the range.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|string(int64)|false|none|Ending value of the range. Set to 0 or `null` for the last range of values.|
|fee|[GoogleTypeMoney](#schemagoogletypemoney)|false|none|Fee to charge when total number of API calls falls within this range.|
|start|string(int64)|false|none|Starting value of the range. Set to 0 or `null` for the initial range of values.|

<h2 id="tocS_GoogleCloudApigeeV1Reference">GoogleCloudApigeeV1Reference</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1reference"></a>
<a id="schema_GoogleCloudApigeeV1Reference"></a>
<a id="tocSgooglecloudapigeev1reference"></a>
<a id="tocsgooglecloudapigeev1reference"></a>

```json
{
  "description": "string",
  "name": "string",
  "refers": "string",
  "resourceType": "string"
}
```

A Reference configuration. References must refer to a keystore that also exists in the parent environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Optional. A human-readable description of this reference.|
|name|string|false|none|Required. The resource id of this reference. Values must match the regular expression [\w\s\-.]+.|
|refers|string|false|none|Required. The id of the resource to which this reference refers. Must be the id of a resource that exists in the parent environment and is of the given resource_type.|
|resourceType|string|false|none|The type of resource referred to by this reference. Valid values are 'KeyStore' or 'TrustStore'.|

<h2 id="tocS_GoogleCloudApigeeV1ReferenceConfig">GoogleCloudApigeeV1ReferenceConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1referenceconfig"></a>
<a id="schema_GoogleCloudApigeeV1ReferenceConfig"></a>
<a id="tocSgooglecloudapigeev1referenceconfig"></a>
<a id="tocsgooglecloudapigeev1referenceconfig"></a>

```json
{
  "name": "string",
  "resourceName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the reference in the following format: `organizations/{org}/environments/{env}/references/{reference}`|
|resourceName|string|false|none|Name of the referenced resource in the following format: `organizations/{org}/environments/{env}/keystores/{keystore}` Only references to keystore resources are supported.|

<h2 id="tocS_GoogleCloudApigeeV1ReportInstanceStatusRequest">GoogleCloudApigeeV1ReportInstanceStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1reportinstancestatusrequest"></a>
<a id="schema_GoogleCloudApigeeV1ReportInstanceStatusRequest"></a>
<a id="tocSgooglecloudapigeev1reportinstancestatusrequest"></a>
<a id="tocsgooglecloudapigeev1reportinstancestatusrequest"></a>

```json
{
  "instanceUid": "string",
  "reportTime": "string",
  "resources": [
    {
      "resource": "string",
      "revisions": [
        {
          "errors": [
            {
              "code": "OK",
              "message": "string",
              "resource": "string",
              "type": "string"
            }
          ],
          "jsonSpec": "string",
          "replicas": 0,
          "revisionId": "string"
        }
      ],
      "totalReplicas": 0,
      "uid": "string"
    }
  ]
}
```

Request for ReportInstanceStatus.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceUid|string|false|none|A unique ID for the instance which is guaranteed to be unique in case the user installs multiple hybrid runtimes with the same instance ID.|
|reportTime|string(google-datetime)|false|none|The time the report was generated in the runtime. Used to prevent an old status from overwriting a newer one. An instance should space out it's status reports so that clock skew does not play a factor.|
|resources|[[GoogleCloudApigeeV1ResourceStatus](#schemagooglecloudapigeev1resourcestatus)]|false|none|Status for config resources|

<h2 id="tocS_GoogleCloudApigeeV1ReportInstanceStatusResponse">GoogleCloudApigeeV1ReportInstanceStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1reportinstancestatusresponse"></a>
<a id="schema_GoogleCloudApigeeV1ReportInstanceStatusResponse"></a>
<a id="tocSgooglecloudapigeev1reportinstancestatusresponse"></a>
<a id="tocsgooglecloudapigeev1reportinstancestatusresponse"></a>

```json
{}
```

Placeholder for future enhancements to status reporting protocol

<h2 id="tocS_GoogleCloudApigeeV1ReportProperty">GoogleCloudApigeeV1ReportProperty</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1reportproperty"></a>
<a id="schema_GoogleCloudApigeeV1ReportProperty"></a>
<a id="tocSgooglecloudapigeev1reportproperty"></a>
<a id="tocsgooglecloudapigeev1reportproperty"></a>

```json
{
  "property": "string",
  "value": [
    {
      "name": "string",
      "value": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|property|string|false|none|name of the property|
|value|[[GoogleCloudApigeeV1Attribute](#schemagooglecloudapigeev1attribute)]|false|none|property values|

<h2 id="tocS_GoogleCloudApigeeV1ResourceConfig">GoogleCloudApigeeV1ResourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1resourceconfig"></a>
<a id="schema_GoogleCloudApigeeV1ResourceConfig"></a>
<a id="tocSgooglecloudapigeev1resourceconfig"></a>
<a id="tocsgooglecloudapigeev1resourceconfig"></a>

```json
{
  "location": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|string|false|none|Location of the resource as a URI.|
|name|string|false|none|Resource name in the following format: `organizations/{org}/environments/{env}/resourcefiles/{type}/{file}/revisions/{rev}` Only environment-scoped resource files are supported.|

<h2 id="tocS_GoogleCloudApigeeV1ResourceFile">GoogleCloudApigeeV1ResourceFile</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1resourcefile"></a>
<a id="schema_GoogleCloudApigeeV1ResourceFile"></a>
<a id="tocSgooglecloudapigeev1resourcefile"></a>
<a id="tocsgooglecloudapigeev1resourcefile"></a>

```json
{
  "name": "string",
  "type": "string"
}
```

Metadata about a resource file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|ID of the resource file.|
|type|string|false|none|Resource file type. {{ resource_file_type }}|

<h2 id="tocS_GoogleCloudApigeeV1ResourceFiles">GoogleCloudApigeeV1ResourceFiles</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1resourcefiles"></a>
<a id="schema_GoogleCloudApigeeV1ResourceFiles"></a>
<a id="tocSgooglecloudapigeev1resourcefiles"></a>
<a id="tocsgooglecloudapigeev1resourcefiles"></a>

```json
{
  "resourceFile": [
    {
      "name": "string",
      "type": "string"
    }
  ]
}
```

List of resource files.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceFile|[[GoogleCloudApigeeV1ResourceFile](#schemagooglecloudapigeev1resourcefile)]|false|none|List of resource files.|

<h2 id="tocS_GoogleCloudApigeeV1ResourceStatus">GoogleCloudApigeeV1ResourceStatus</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1resourcestatus"></a>
<a id="schema_GoogleCloudApigeeV1ResourceStatus"></a>
<a id="tocSgooglecloudapigeev1resourcestatus"></a>
<a id="tocsgooglecloudapigeev1resourcestatus"></a>

```json
{
  "resource": "string",
  "revisions": [
    {
      "errors": [
        {
          "code": "OK",
          "message": "string",
          "resource": "string",
          "type": "string"
        }
      ],
      "jsonSpec": "string",
      "replicas": 0,
      "revisionId": "string"
    }
  ],
  "totalReplicas": 0,
  "uid": "string"
}
```

The status of a resource loaded in the runtime.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resource|string|false|none|The resource name. Currently only two resources are supported: EnvironmentGroup - organizations/{org}/envgroups/{envgroup} EnvironmentConfig - organizations/{org}/environments/{environment}/deployedConfig|
|revisions|[[GoogleCloudApigeeV1RevisionStatus](#schemagooglecloudapigeev1revisionstatus)]|false|none|Revisions of the resource currently deployed in the instance.|
|totalReplicas|integer(int32)|false|none|The total number of replicas that should have this resource.|
|uid|string|false|none|The uid of the resource. In the unexpected case that the instance has multiple uids for the same name, they should be reported under separate ResourceStatuses.|

<h2 id="tocS_GoogleCloudApigeeV1Result">GoogleCloudApigeeV1Result</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1result"></a>
<a id="schema_GoogleCloudApigeeV1Result"></a>
<a id="tocSgooglecloudapigeev1result"></a>
<a id="tocsgooglecloudapigeev1result"></a>

```json
{
  "ActionResult": "string",
  "accessList": [
    {
      "Get": {
        "name": "string",
        "value": "string"
      },
      "Remove": {
        "name": "string",
        "success": true
      },
      "Set": {
        "name": "string",
        "success": true,
        "value": "string"
      }
    }
  ],
  "content": "string",
  "headers": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "properties": {
    "property": [
      {
        "name": "string",
        "value": "string"
      }
    ]
  },
  "reasonPhrase": "string",
  "statusCode": "string",
  "timestamp": "string",
  "uRI": "string",
  "verb": "string"
}
```

Result is short for "action result", could be different types identified by "action_result" field. Supported types: 1. DebugInfo : generic debug info collected by runtime recorded as a list of properties. For example, the contents could be virtual host info, state change result, or execution metadata. Required fields : properties, timestamp 2. RequestMessage: information of a http request. Contains headers, request URI and http methods type.Required fields : headers, uri, verb 3. ResponseMessage: information of a http response. Contains headers, reason phrase and http status code. Required fields : headers, reasonPhrase, statusCode 4. ErrorMessage: information of a http error message. Contains detail error message, reason phrase and status code. Required fields : content, headers, reasonPhrase, statusCode 5. VariableAccess: a list of variable access actions, can be Get, Set and Remove. Required fields : accessList

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActionResult|string|false|none|Type of the action result. Can be one of the five: DebugInfo, RequestMessage, ResponseMessage, ErrorMessage, VariableAccess|
|accessList|[[GoogleCloudApigeeV1Access](#schemagooglecloudapigeev1access)]|false|none|A list of variable access actions agaist the api proxy. Supported values: Get, Set, Remove.|
|content|string|false|none|Error message content. for example, "content" : "{\"fault\":{\"faultstring\":\"API timed out\",\"detail\":{\"errorcode\":\"flow.APITimedOut\"}}}"|
|headers|[[GoogleCloudApigeeV1Property](#schemagooglecloudapigeev1property)]|false|none|A list of HTTP headers. for example, '"headers" : [ { "name" : "Content-Length", "value" : "83" }, { "name" : "Content-Type", "value" : "application/json" } ]'|
|properties|[GoogleCloudApigeeV1Properties](#schemagooglecloudapigeev1properties)|false|none|Name value pairs used for DebugInfo ActionResult.|
|reasonPhrase|string|false|none|HTTP response phrase|
|statusCode|string|false|none|HTTP response code|
|timestamp|string|false|none|Timestamp of when the result is recorded. Its format is dd-mm-yy hh:mm:ss:xxx. For example, `"timestamp" : "12-08-19 00:31:59:960"`|
|uRI|string|false|none|The relative path of the api proxy. for example, `"uRI" : "/iloveapis"`|
|verb|string|false|none|HTTP method verb|

<h2 id="tocS_GoogleCloudApigeeV1RevenueShareRange">GoogleCloudApigeeV1RevenueShareRange</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1revenuesharerange"></a>
<a id="schema_GoogleCloudApigeeV1RevenueShareRange"></a>
<a id="tocSgooglecloudapigeev1revenuesharerange"></a>
<a id="tocsgooglecloudapigeev1revenuesharerange"></a>

```json
{
  "end": "string",
  "sharePercentage": 0,
  "start": "string"
}
```

API call volume range and the percentage of revenue to share with the developer when the total number of API calls is within the range.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|string(int64)|false|none|Ending value of the range. Set to 0 or `null` for the last range of values.|
|sharePercentage|number(double)|false|none|Percentage of the revenue to be shared with the developer. For example, to share 21 percent of the total revenue with the developer, set this value to 21. Specify a decimal number with a maximum of two digits following the decimal point.|
|start|string(int64)|false|none|Starting value of the range. Set to 0 or `null` for the initial range of values.|

<h2 id="tocS_GoogleCloudApigeeV1RevisionStatus">GoogleCloudApigeeV1RevisionStatus</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1revisionstatus"></a>
<a id="schema_GoogleCloudApigeeV1RevisionStatus"></a>
<a id="tocSgooglecloudapigeev1revisionstatus"></a>
<a id="tocsgooglecloudapigeev1revisionstatus"></a>

```json
{
  "errors": [
    {
      "code": "OK",
      "message": "string",
      "resource": "string",
      "type": "string"
    }
  ],
  "jsonSpec": "string",
  "replicas": 0,
  "revisionId": "string"
}
```

The status of a specific resource revision.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[GoogleCloudApigeeV1UpdateError](#schemagooglecloudapigeev1updateerror)]|false|none|Errors reported when attempting to load this revision.|
|jsonSpec|string|false|none|The json content of the resource revision. Large specs should be sent individually via the spec field to avoid hitting request size limits.|
|replicas|integer(int32)|false|none|The number of replicas that have successfully loaded this revision.|
|revisionId|string|false|none|The revision of the resource.|

<h2 id="tocS_GoogleCloudApigeeV1RoutingRule">GoogleCloudApigeeV1RoutingRule</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1routingrule"></a>
<a id="schema_GoogleCloudApigeeV1RoutingRule"></a>
<a id="tocSgooglecloudapigeev1routingrule"></a>
<a id="tocsgooglecloudapigeev1routingrule"></a>

```json
{
  "basepath": "string",
  "deploymentGroup": "string",
  "envGroupRevision": "string",
  "environment": "string",
  "otherTargets": [
    "string"
  ],
  "receiver": "string",
  "updateTime": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basepath|string|false|none|URI path prefix used to route to the specified environment. May contain one or more wildcards. For example, path segments consisting of a single `*` character will match any string.|
|deploymentGroup|string|false|none|Name of a deployment group in an environment bound to the environment group in the following format: `organizations/{org}/environment/{env}/deploymentGroups/{group}` Only one of environment or deployment_group will be set.|
|envGroupRevision|string(int64)|false|none|The env group config revision_id when this rule was added or last updated. This value is set when the rule is created and will only update if the the environment_id changes. It is used to determine if the runtime is up to date with respect to this rule. This field is omitted from the IngressConfig unless the GetDeployedIngressConfig API is called with view=FULL.|
|environment|string|false|none|Name of an environment bound to the environment group in the following format: `organizations/{org}/environments/{env}`. Only one of environment or deployment_group will be set.|
|otherTargets|[string]|false|none|Conflicting targets, which will be resource names specifying either deployment groups or environments.|
|receiver|string|false|none|The resource name of the proxy revision that is receiving this basepath in the following format: `organizations/{org}/apis/{api}/revisions/{rev}`. This field is omitted from the IngressConfig unless the GetDeployedIngressConfig API is called with view=FULL.|
|updateTime|string(google-datetime)|false|none|The unix timestamp when this rule was updated. This is updated whenever env_group_revision is updated. This field is omitted from the IngressConfig unless the GetDeployedIngressConfig API is called with view=FULL.|

<h2 id="tocS_GoogleCloudApigeeV1RuntimeConfig">GoogleCloudApigeeV1RuntimeConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1runtimeconfig"></a>
<a id="schema_GoogleCloudApigeeV1RuntimeConfig"></a>
<a id="tocSgooglecloudapigeev1runtimeconfig"></a>
<a id="tocsgooglecloudapigeev1runtimeconfig"></a>

```json
{
  "analyticsBucket": "string",
  "name": "string",
  "tenantProjectId": "string",
  "traceBucket": "string"
}
```

Runtime configuration for the organization. Response for GetRuntimeConfig.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analyticsBucket|string|false|none|Cloud Storage bucket used for uploading Analytics records.|
|name|string|false|none|Name of the resource in the following format: `organizations/{org}/runtimeConfig`.|
|tenantProjectId|string|false|read-only|Output only. Tenant project ID associated with the Apigee organization. The tenant project is used to host Google-managed resources that are dedicated to this Apigee organization. Clients have limited access to resources within the tenant project used to support Apigee runtime instances. Access to the tenant project is managed using SetSyncAuthorization. It can be empty if the tenant project hasn't been created yet.|
|traceBucket|string|false|none|Cloud Storage bucket used for uploading Trace records.|

<h2 id="tocS_GoogleCloudApigeeV1RuntimeTraceConfig">GoogleCloudApigeeV1RuntimeTraceConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1runtimetraceconfig"></a>
<a id="schema_GoogleCloudApigeeV1RuntimeTraceConfig"></a>
<a id="tocSgooglecloudapigeev1runtimetraceconfig"></a>
<a id="tocsgooglecloudapigeev1runtimetraceconfig"></a>

```json
{
  "endpoint": "string",
  "exporter": "EXPORTER_UNSPECIFIED",
  "name": "string",
  "overrides": [
    {
      "apiProxy": "string",
      "name": "string",
      "revisionCreateTime": "string",
      "revisionId": "string",
      "samplingConfig": {
        "sampler": "SAMPLER_UNSPECIFIED",
        "samplingRate": 0
      },
      "uid": "string"
    }
  ],
  "revisionCreateTime": "string",
  "revisionId": "string",
  "samplingConfig": {
    "sampler": "SAMPLER_UNSPECIFIED",
    "samplingRate": 0
  }
}
```

NEXT ID: 8 RuntimeTraceConfig defines the configurations for distributed trace in an environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|string|false|none|Endpoint of the exporter.|
|exporter|string|false|none|Exporter that is used to view the distributed trace captured using OpenCensus. An exporter sends traces to any backend that is capable of consuming them. Recorded spans can be exported by registered exporters.|
|name|string|false|none|Name of the trace config in the following format: `organizations/{org}/environment/{env}/traceConfig`|
|overrides|[[GoogleCloudApigeeV1RuntimeTraceConfigOverride](#schemagooglecloudapigeev1runtimetraceconfigoverride)]|false|none|List of trace configuration overrides for spicific API proxies.|
|revisionCreateTime|string(google-datetime)|false|none|The timestamp that the revision was created or updated.|
|revisionId|string|false|none|Revision number which can be used by the runtime to detect if the trace config has changed between two versions.|
|samplingConfig|[GoogleCloudApigeeV1RuntimeTraceSamplingConfig](#schemagooglecloudapigeev1runtimetracesamplingconfig)|false|none|Trace configuration for all API proxies in an environment.|

#### Enumerated Values

|Property|Value|
|---|---|
|exporter|EXPORTER_UNSPECIFIED|
|exporter|JAEGER|
|exporter|CLOUD_TRACE|

<h2 id="tocS_GoogleCloudApigeeV1RuntimeTraceConfigOverride">GoogleCloudApigeeV1RuntimeTraceConfigOverride</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1runtimetraceconfigoverride"></a>
<a id="schema_GoogleCloudApigeeV1RuntimeTraceConfigOverride"></a>
<a id="tocSgooglecloudapigeev1runtimetraceconfigoverride"></a>
<a id="tocsgooglecloudapigeev1runtimetraceconfigoverride"></a>

```json
{
  "apiProxy": "string",
  "name": "string",
  "revisionCreateTime": "string",
  "revisionId": "string",
  "samplingConfig": {
    "sampler": "SAMPLER_UNSPECIFIED",
    "samplingRate": 0
  },
  "uid": "string"
}
```

NEXT ID: 7 Trace configuration override for a specific API proxy in an environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiProxy|string|false|none|Name of the API proxy that will have its trace configuration overridden following format: `organizations/{org}/apis/{api}`|
|name|string|false|none|Name of the trace config override in the following format: `organizations/{org}/environment/{env}/traceConfig/overrides/{override}`|
|revisionCreateTime|string(google-datetime)|false|none|The timestamp that the revision was created or updated.|
|revisionId|string|false|none|Revision number which can be used by the runtime to detect if the trace config override has changed between two versions.|
|samplingConfig|[GoogleCloudApigeeV1RuntimeTraceSamplingConfig](#schemagooglecloudapigeev1runtimetracesamplingconfig)|false|none|Trace configuration override for a specific API proxy in an environment.|
|uid|string|false|none|Unique ID for the configuration override. The ID will only change if the override is deleted and recreated. Corresponds to name's "override" field.|

<h2 id="tocS_GoogleCloudApigeeV1RuntimeTraceSamplingConfig">GoogleCloudApigeeV1RuntimeTraceSamplingConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1runtimetracesamplingconfig"></a>
<a id="schema_GoogleCloudApigeeV1RuntimeTraceSamplingConfig"></a>
<a id="tocSgooglecloudapigeev1runtimetracesamplingconfig"></a>
<a id="tocsgooglecloudapigeev1runtimetracesamplingconfig"></a>

```json
{
  "sampler": "SAMPLER_UNSPECIFIED",
  "samplingRate": 0
}
```

NEXT ID: 3 RuntimeTraceSamplingConfig represents the detail settings of distributed tracing. Only the fields that are defined in the distributed trace configuration can be overridden using the distribute trace configuration override APIs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sampler|string|false|none|Sampler of distributed tracing. OFF is the default value.|
|samplingRate|number(float)|false|none|Field sampling rate. This value is only applicable when using the PROBABILITY sampler. The supported values are > 0 and <= 0.5.|

#### Enumerated Values

|Property|Value|
|---|---|
|sampler|SAMPLER_UNSPECIFIED|
|sampler|OFF|
|sampler|PROBABILITY|

<h2 id="tocS_GoogleCloudApigeeV1Schema">GoogleCloudApigeeV1Schema</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1schema"></a>
<a id="schema_GoogleCloudApigeeV1Schema"></a>
<a id="tocSgooglecloudapigeev1schema"></a>
<a id="tocsgooglecloudapigeev1schema"></a>

```json
{
  "dimensions": [
    {
      "name": "string",
      "properties": {
        "createTime": "string",
        "custom": "string",
        "type": "string"
      }
    }
  ],
  "meta": [
    "string"
  ],
  "metrics": [
    {
      "name": "string",
      "properties": {
        "createTime": "string",
        "custom": "string",
        "type": "string"
      }
    }
  ]
}
```

Response for Schema call

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensions|[[GoogleCloudApigeeV1SchemaSchemaElement](#schemagooglecloudapigeev1schemaschemaelement)]|false|none|List of schema fields grouped as dimensions.|
|meta|[string]|false|none|Additional metadata associated with schema. This is a legacy field and usually consists of an empty array of strings.|
|metrics|[[GoogleCloudApigeeV1SchemaSchemaElement](#schemagooglecloudapigeev1schemaschemaelement)]|false|none|List of schema fields grouped as dimensions that can be used with an aggregate function such as `sum`, `avg`, `min`, and `max`.|

<h2 id="tocS_GoogleCloudApigeeV1SchemaSchemaElement">GoogleCloudApigeeV1SchemaSchemaElement</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1schemaschemaelement"></a>
<a id="schema_GoogleCloudApigeeV1SchemaSchemaElement"></a>
<a id="tocSgooglecloudapigeev1schemaschemaelement"></a>
<a id="tocsgooglecloudapigeev1schemaschemaelement"></a>

```json
{
  "name": "string",
  "properties": {
    "createTime": "string",
    "custom": "string",
    "type": "string"
  }
}
```

Message type for the schema element

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the field.|
|properties|[GoogleCloudApigeeV1SchemaSchemaProperty](#schemagooglecloudapigeev1schemaschemaproperty)|false|none|Properties for the schema field. For example: { "createTime": "2016-02-26T10:23:09.592Z", "custom": "false", "type": "string" }|

<h2 id="tocS_GoogleCloudApigeeV1SchemaSchemaProperty">GoogleCloudApigeeV1SchemaSchemaProperty</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1schemaschemaproperty"></a>
<a id="schema_GoogleCloudApigeeV1SchemaSchemaProperty"></a>
<a id="tocSgooglecloudapigeev1schemaschemaproperty"></a>
<a id="tocsgooglecloudapigeev1schemaschemaproperty"></a>

```json
{
  "createTime": "string",
  "custom": "string",
  "type": "string"
}
```

Properties for the schema field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string|false|none|Time the field was created in RFC3339 string form. For example: `2016-02-26T10:23:09.592Z`.|
|custom|string|false|none|Flag that specifies whether the field is standard in the dataset or a custom field created by the customer. `true` indicates that it is a custom field.|
|type|string|false|none|Data type of the field.|

<h2 id="tocS_GoogleCloudApigeeV1Score">GoogleCloudApigeeV1Score</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1score"></a>
<a id="schema_GoogleCloudApigeeV1Score"></a>
<a id="tocSgooglecloudapigeev1score"></a>
<a id="tocsgooglecloudapigeev1score"></a>

```json
{
  "component": {
    "calculateTime": "string",
    "dataCaptureTime": "string",
    "drilldownPaths": [
      "string"
    ],
    "recommendations": [
      {
        "actions": [
          {
            "actionContext": {
              "documentationLink": "string"
            },
            "description": "string"
          }
        ],
        "description": "string",
        "impact": 0,
        "title": "string"
      }
    ],
    "score": 0,
    "scorePath": "string"
  },
  "subcomponents": [
    {
      "calculateTime": "string",
      "dataCaptureTime": "string",
      "drilldownPaths": [
        "string"
      ],
      "recommendations": [
        {
          "actions": [
            {
              "actionContext": {
                "documentationLink": "string"
              },
              "description": "string"
            }
          ],
          "description": "string",
          "impact": 0,
          "title": "string"
        }
      ],
      "score": 0,
      "scorePath": "string"
    }
  ],
  "timeRange": {
    "endTime": "string",
    "startTime": "string"
  }
}
```

Represents Security Score.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|component|[GoogleCloudApigeeV1ScoreComponent](#schemagooglecloudapigeev1scorecomponent)|false|none|Component containing score, recommendations and actions.|
|subcomponents|[[GoogleCloudApigeeV1ScoreComponent](#schemagooglecloudapigeev1scorecomponent)]|false|none|List of all the drilldown score components.|
|timeRange|[GoogleTypeInterval](#schemagoogletypeinterval)|false|none|Start and end time for the score.|

<h2 id="tocS_GoogleCloudApigeeV1ScoreComponent">GoogleCloudApigeeV1ScoreComponent</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1scorecomponent"></a>
<a id="schema_GoogleCloudApigeeV1ScoreComponent"></a>
<a id="tocSgooglecloudapigeev1scorecomponent"></a>
<a id="tocsgooglecloudapigeev1scorecomponent"></a>

```json
{
  "calculateTime": "string",
  "dataCaptureTime": "string",
  "drilldownPaths": [
    "string"
  ],
  "recommendations": [
    {
      "actions": [
        {
          "actionContext": {
            "documentationLink": "string"
          },
          "description": "string"
        }
      ],
      "description": "string",
      "impact": 0,
      "title": "string"
    }
  ],
  "score": 0,
  "scorePath": "string"
}
```

Component is an individual security element that is scored.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calculateTime|string(google-datetime)|false|none|Time when score was calculated.|
|dataCaptureTime|string(google-datetime)|false|none|Time in the requested time period when data was last captured to compute the score.|
|drilldownPaths|[string]|false|none|List of paths for next components.|
|recommendations|[[GoogleCloudApigeeV1ScoreComponentRecommendation](#schemagooglecloudapigeev1scorecomponentrecommendation)]|false|none|List of recommendations to improve API security.|
|score|integer(int32)|false|none|Score for the component.|
|scorePath|string|false|none|Path of the component. Example: /org@myorg/envgroup@myenvgroup/proxies/proxy@myproxy|

<h2 id="tocS_GoogleCloudApigeeV1ScoreComponentRecommendation">GoogleCloudApigeeV1ScoreComponentRecommendation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1scorecomponentrecommendation"></a>
<a id="schema_GoogleCloudApigeeV1ScoreComponentRecommendation"></a>
<a id="tocSgooglecloudapigeev1scorecomponentrecommendation"></a>
<a id="tocsgooglecloudapigeev1scorecomponentrecommendation"></a>

```json
{
  "actions": [
    {
      "actionContext": {
        "documentationLink": "string"
      },
      "description": "string"
    }
  ],
  "description": "string",
  "impact": 0,
  "title": "string"
}
```

Recommendation based on security concerns and score.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[[GoogleCloudApigeeV1ScoreComponentRecommendationAction](#schemagooglecloudapigeev1scorecomponentrecommendationaction)]|false|none|Actions for the recommendation to improve the security score.|
|description|string|false|none|Description of the recommendation.|
|impact|integer(int32)|false|none|Potential impact of this recommendation on the overall score. This denotes how important this recommendation is to improve the score.|
|title|string|false|none|Title represents recommendation title.|

<h2 id="tocS_GoogleCloudApigeeV1ScoreComponentRecommendationAction">GoogleCloudApigeeV1ScoreComponentRecommendationAction</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1scorecomponentrecommendationaction"></a>
<a id="schema_GoogleCloudApigeeV1ScoreComponentRecommendationAction"></a>
<a id="tocSgooglecloudapigeev1scorecomponentrecommendationaction"></a>
<a id="tocsgooglecloudapigeev1scorecomponentrecommendationaction"></a>

```json
{
  "actionContext": {
    "documentationLink": "string"
  },
  "description": "string"
}
```

Action to improve security score.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionContext|[GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContext](#schemagooglecloudapigeev1scorecomponentrecommendationactionactioncontext)|false|none|Action context for the action.|
|description|string|false|none|Description of the action.|

<h2 id="tocS_GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContext">GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContext</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1scorecomponentrecommendationactionactioncontext"></a>
<a id="schema_GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContext"></a>
<a id="tocSgooglecloudapigeev1scorecomponentrecommendationactionactioncontext"></a>
<a id="tocsgooglecloudapigeev1scorecomponentrecommendationactionactioncontext"></a>

```json
{
  "documentationLink": "string"
}
```

Action context are all the relevant details for the action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documentationLink|string|false|none|Documentation link for the action.|

<h2 id="tocS_GoogleCloudApigeeV1SecurityIncident">GoogleCloudApigeeV1SecurityIncident</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1securityincident"></a>
<a id="schema_GoogleCloudApigeeV1SecurityIncident"></a>
<a id="tocSgooglecloudapigeev1securityincident"></a>
<a id="tocsgooglecloudapigeev1securityincident"></a>

```json
{
  "detectionTypes": [
    "string"
  ],
  "displayName": "string",
  "firstDetectedTime": "string",
  "lastDetectedTime": "string",
  "name": "string",
  "riskLevel": "RISK_LEVEL_UNSPECIFIED",
  "trafficCount": "string"
}
```

Represents an SecurityIncident resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectionTypes|[string]|false|read-only|Output only. Detection types which are part of the incident. Examples: Flooder, OAuth Abuser, Static Content Scraper, Anomaly Detection.|
|displayName|string|false|none|Display name of the security incident.|
|firstDetectedTime|string(google-datetime)|false|read-only|Output only. The time when events associated with the incident were first detected.|
|lastDetectedTime|string(google-datetime)|false|read-only|Output only. The time when events associated with the incident were last detected.|
|name|string|false|none|Immutable. Name of the security incident resource. Format: organizations/{org}/environments/{environment}/securityIncidents/{incident} Example: organizations/apigee-org/environments/dev/securityIncidents/1234-5678-9101-1111|
|riskLevel|string|false|read-only|Output only. Risk level of the incident.|
|trafficCount|string(int64)|false|none|Total traffic detected as part of the incident.|

#### Enumerated Values

|Property|Value|
|---|---|
|riskLevel|RISK_LEVEL_UNSPECIFIED|
|riskLevel|LOW|
|riskLevel|MODERATE|
|riskLevel|SEVERE|

<h2 id="tocS_GoogleCloudApigeeV1SecurityProfile">GoogleCloudApigeeV1SecurityProfile</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1securityprofile"></a>
<a id="schema_GoogleCloudApigeeV1SecurityProfile"></a>
<a id="tocSgooglecloudapigeev1securityprofile"></a>
<a id="tocsgooglecloudapigeev1securityprofile"></a>

```json
{
  "displayName": "string",
  "environments": [
    {
      "attachTime": "string",
      "environment": "string"
    }
  ],
  "maxScore": 0,
  "minScore": 0,
  "name": "string",
  "revisionCreateTime": "string",
  "revisionId": "string",
  "revisionPublishTime": "string",
  "revisionUpdateTime": "string",
  "scoringConfigs": [
    {
      "description": "string",
      "scorePath": "string",
      "title": "string"
    }
  ]
}
```

Represents a SecurityProfile resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Display name of the security profile.|
|environments|[[GoogleCloudApigeeV1SecurityProfileEnvironment](#schemagooglecloudapigeev1securityprofileenvironment)]|false|none|List of environments attached to security profile.|
|maxScore|integer(int32)|false|read-only|Output only. Maximum security score that can be generated by this profile.|
|minScore|integer(int32)|false|read-only|Output only. Minimum security score that can be generated by this profile.|
|name|string|false|none|Immutable. Name of the security profile resource. Format: organizations/{org}/securityProfiles/{profile}|
|revisionCreateTime|string(google-datetime)|false|read-only|Output only. The time when revision was created.|
|revisionId|string(int64)|false|read-only|Output only. Revision ID of the security profile.|
|revisionPublishTime|string(google-datetime)|false|read-only|Output only. The time when revision was published. Once published, the security profile revision cannot be updated further and can be attached to environments.|
|revisionUpdateTime|string(google-datetime)|false|read-only|Output only. The time when revision was updated.|
|scoringConfigs|[[GoogleCloudApigeeV1SecurityProfileScoringConfig](#schemagooglecloudapigeev1securityprofilescoringconfig)]|false|none|List of profile scoring configs in this revision.|

<h2 id="tocS_GoogleCloudApigeeV1SecurityProfileEnvironment">GoogleCloudApigeeV1SecurityProfileEnvironment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1securityprofileenvironment"></a>
<a id="schema_GoogleCloudApigeeV1SecurityProfileEnvironment"></a>
<a id="tocSgooglecloudapigeev1securityprofileenvironment"></a>
<a id="tocsgooglecloudapigeev1securityprofileenvironment"></a>

```json
{
  "attachTime": "string",
  "environment": "string"
}
```

Environment information of attached environments. Scoring an environment is enabled only if it is attached to a security profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachTime|string(google-datetime)|false|read-only|Output only. Time at which environment was attached to the security profile.|
|environment|string|false|read-only|Output only. Name of the environment.|

<h2 id="tocS_GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation">GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1securityprofileenvironmentassociation"></a>
<a id="schema_GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation"></a>
<a id="tocSgooglecloudapigeev1securityprofileenvironmentassociation"></a>
<a id="tocsgooglecloudapigeev1securityprofileenvironmentassociation"></a>

```json
{
  "attachTime": "string",
  "name": "string",
  "securityProfileRevisionId": "string"
}
```

Represents a SecurityProfileEnvironmentAssociation resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachTime|string(google-datetime)|false|read-only|Output only. The time when environment was attached to the security profile.|
|name|string|false|none|Immutable. Name of the profile-environment association resource. Format: organizations/{org}/securityProfiles/{profile}/environments/{env}|
|securityProfileRevisionId|string(int64)|false|none|Revision ID of the security profile.|

<h2 id="tocS_GoogleCloudApigeeV1SecurityProfileScoringConfig">GoogleCloudApigeeV1SecurityProfileScoringConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1securityprofilescoringconfig"></a>
<a id="schema_GoogleCloudApigeeV1SecurityProfileScoringConfig"></a>
<a id="tocSgooglecloudapigeev1securityprofilescoringconfig"></a>
<a id="tocsgooglecloudapigeev1securityprofilescoringconfig"></a>

```json
{
  "description": "string",
  "scorePath": "string",
  "title": "string"
}
```

Security configurations to manage scoring.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Description of the config.|
|scorePath|string|false|none|Path of the component config used for scoring.|
|title|string|false|none|Title of the config.|

<h2 id="tocS_GoogleCloudApigeeV1SecurityReport">GoogleCloudApigeeV1SecurityReport</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1securityreport"></a>
<a id="schema_GoogleCloudApigeeV1SecurityReport"></a>
<a id="tocSgooglecloudapigeev1securityreport"></a>
<a id="tocsgooglecloudapigeev1securityreport"></a>

```json
{
  "created": "string",
  "displayName": "string",
  "envgroupHostname": "string",
  "error": "string",
  "executionTime": "string",
  "queryParams": {
    "dimensions": [
      "string"
    ],
    "endTimestamp": "string",
    "metrics": [
      "string"
    ],
    "mimeType": "string",
    "startTimestamp": "string",
    "timeUnit": "string"
  },
  "reportDefinitionId": "string",
  "result": {
    "expires": "string",
    "self": "string"
  },
  "resultFileSize": "string",
  "resultRows": "string",
  "self": "string",
  "state": "string",
  "updated": "string"
}
```

SecurityReport saves all the information about the created security report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string|false|none|Creation time of the query.|
|displayName|string|false|none|Display Name specified by the user.|
|envgroupHostname|string|false|none|Hostname is available only when query is executed at host level.|
|error|string|false|none|Error is set when query fails.|
|executionTime|string|false|none|ExecutionTime is available only after the query is completed.|
|queryParams|[GoogleCloudApigeeV1SecurityReportMetadata](#schemagooglecloudapigeev1securityreportmetadata)|false|none|Contains information like metrics, dimenstions etc of the Security Report.|
|reportDefinitionId|string|false|none|Report Definition ID.|
|result|[GoogleCloudApigeeV1SecurityReportResultMetadata](#schemagooglecloudapigeev1securityreportresultmetadata)|false|none|Result is available only after the query is completed.|
|resultFileSize|string|false|none|ResultFileSize is available only after the query is completed.|
|resultRows|string(int64)|false|none|ResultRows is available only after the query is completed.|
|self|string|false|none|Self link of the query. Example: `/organizations/myorg/environments/myenv/securityReports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd` or following format if query is running at host level: `/organizations/myorg/hostSecurityReports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd`|
|state|string|false|none|Query state could be "enqueued", "running", "completed", "expired" and "failed".|
|updated|string|false|read-only|Output only. Last updated timestamp for the query.|

<h2 id="tocS_GoogleCloudApigeeV1SecurityReportMetadata">GoogleCloudApigeeV1SecurityReportMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1securityreportmetadata"></a>
<a id="schema_GoogleCloudApigeeV1SecurityReportMetadata"></a>
<a id="tocSgooglecloudapigeev1securityreportmetadata"></a>
<a id="tocsgooglecloudapigeev1securityreportmetadata"></a>

```json
{
  "dimensions": [
    "string"
  ],
  "endTimestamp": "string",
  "metrics": [
    "string"
  ],
  "mimeType": "string",
  "startTimestamp": "string",
  "timeUnit": "string"
}
```

Metadata for the security report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensions|[string]|false|none|Dimensions of the SecurityReport.|
|endTimestamp|string(google-datetime)|false|none|End timestamp of the query range.|
|metrics|[string]|false|none|Metrics of the SecurityReport. Example: ["name:bot_count,func:sum,alias:sum_bot_count"]|
|mimeType|string|false|none|MIME type / Output format.|
|startTimestamp|string(google-datetime)|false|none|Start timestamp of the query range.|
|timeUnit|string|false|none|Query GroupBy time unit. Example: "seconds", "minute", "hour"|

<h2 id="tocS_GoogleCloudApigeeV1SecurityReportQuery">GoogleCloudApigeeV1SecurityReportQuery</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1securityreportquery"></a>
<a id="schema_GoogleCloudApigeeV1SecurityReportQuery"></a>
<a id="tocSgooglecloudapigeev1securityreportquery"></a>
<a id="tocsgooglecloudapigeev1securityreportquery"></a>

```json
{
  "csvDelimiter": "string",
  "dimensions": [
    "string"
  ],
  "displayName": "string",
  "envgroupHostname": "string",
  "filter": "string",
  "groupByTimeUnit": "string",
  "limit": 0,
  "metrics": [
    {
      "aggregationFunction": "string",
      "alias": "string",
      "name": "string",
      "operator": "string",
      "value": "string"
    }
  ],
  "mimeType": "string",
  "reportDefinitionId": "string",
  "timeRange": null
}
```

Body structure when user makes a request to create a security report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csvDelimiter|string|false|none|Delimiter used in the CSV file, if `outputFormat` is set to `csv`. Defaults to the `,` (comma) character. Supported delimiter characters include comma (`,`), pipe (`\|`), and tab (`\t`).|
|dimensions|[string]|false|none|A list of dimensions. https://docs.apigee.com/api-platform/analytics/analytics-reference#dimensions|
|displayName|string|false|none|Security Report display name which users can specify.|
|envgroupHostname|string|false|none|Hostname needs to be specified if query intends to run at host level. This field is only allowed when query is submitted by CreateHostSecurityReport where analytics data will be grouped by organization and hostname.|
|filter|string|false|none|Boolean expression that can be used to filter data. Filter expressions can be combined using AND/OR terms and should be fully parenthesized to avoid ambiguity. See Analytics metrics, dimensions, and filters reference https://docs.apigee.com/api-platform/analytics/analytics-reference for more information on the fields available to filter on. For more information on the tokens that you use to build filter expressions, see Filter expression syntax. https://docs.apigee.com/api-platform/analytics/asynch-reports-api#filter-expression-syntax|
|groupByTimeUnit|string|false|none|Time unit used to group the result set. Valid values include: second, minute, hour, day, week, or month. If a query includes groupByTimeUnit, then the result is an aggregation based on the specified time unit and the resultant timestamp does not include milliseconds precision. If a query omits groupByTimeUnit, then the resultant timestamp includes milliseconds precision.|
|limit|integer(int32)|false|none|Maximum number of rows that can be returned in the result.|
|metrics|[[GoogleCloudApigeeV1SecurityReportQueryMetric](#schemagooglecloudapigeev1securityreportquerymetric)]|false|none|A list of Metrics.|
|mimeType|string|false|none|Valid values include: `csv` or `json`. Defaults to `json`. Note: Configure the delimiter for CSV output using the csvDelimiter property.|
|reportDefinitionId|string|false|none|Report Definition ID.|
|timeRange|object|false|none|Required. Time range for the query. Can use the following predefined strings to specify the time range: `last60minutes` `last24hours` `last7days` Or, specify the timeRange as a structure describing start and end timestamps in the ISO format: yyyy-mm-ddThh:mm:ssZ. Example: "timeRange": { "start": "2018-07-29T00:13:00Z", "end": "2018-08-01T00:18:00Z" }|

<h2 id="tocS_GoogleCloudApigeeV1SecurityReportQueryMetric">GoogleCloudApigeeV1SecurityReportQueryMetric</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1securityreportquerymetric"></a>
<a id="schema_GoogleCloudApigeeV1SecurityReportQueryMetric"></a>
<a id="tocSgooglecloudapigeev1securityreportquerymetric"></a>
<a id="tocsgooglecloudapigeev1securityreportquerymetric"></a>

```json
{
  "aggregationFunction": "string",
  "alias": "string",
  "name": "string",
  "operator": "string",
  "value": "string"
}
```

Metric of the Query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregationFunction|string|false|none|Aggregation function: avg, min, max, or sum.|
|alias|string|false|none|Alias for the metric. Alias will be used to replace metric name in query results.|
|name|string|false|none|Required. Metric name.|
|operator|string|false|none|One of `+`, `-`, `/`, `%`, `*`.|
|value|string|false|none|Operand value should be provided when operator is set.|

<h2 id="tocS_GoogleCloudApigeeV1SecurityReportResultMetadata">GoogleCloudApigeeV1SecurityReportResultMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1securityreportresultmetadata"></a>
<a id="schema_GoogleCloudApigeeV1SecurityReportResultMetadata"></a>
<a id="tocSgooglecloudapigeev1securityreportresultmetadata"></a>
<a id="tocsgooglecloudapigeev1securityreportresultmetadata"></a>

```json
{
  "expires": "string",
  "self": "string"
}
```

Contains informations about the security report results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expires|string|false|read-only|Output only. Expire_time is set to 7 days after report creation. Query result will be unaccessable after this time. Example: "2021-05-04T13:38:52-07:00"|
|self|string|false|none|Self link of the query results. Example: `/organizations/myorg/environments/myenv/securityReports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd/result` or following format if query is running at host level: `/organizations/myorg/hostSecurityReports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd/result`|

<h2 id="tocS_GoogleCloudApigeeV1SecurityReportResultView">GoogleCloudApigeeV1SecurityReportResultView</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1securityreportresultview"></a>
<a id="schema_GoogleCloudApigeeV1SecurityReportResultView"></a>
<a id="tocSgooglecloudapigeev1securityreportresultview"></a>
<a id="tocsgooglecloudapigeev1securityreportresultview"></a>

```json
{
  "code": 0,
  "error": "string",
  "metadata": {
    "dimensions": [
      "string"
    ],
    "endTimestamp": "string",
    "metrics": [
      "string"
    ],
    "mimeType": "string",
    "startTimestamp": "string",
    "timeUnit": "string"
  },
  "rows": [
    null
  ],
  "state": "string"
}
```

The response for security report result view APIs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|Error code when there is a failure.|
|error|string|false|none|Error message when there is a failure.|
|metadata|[GoogleCloudApigeeV1SecurityReportMetadata](#schemagooglecloudapigeev1securityreportmetadata)|false|none|Metadata contains information like metrics, dimenstions etc of the security report.|
|rows|[object]|false|none|Rows of security report result. Each row is a JSON object. Example: {sum(message_count): 1, developer_app: "(not set)",…}|
|state|string|false|none|State of retrieving ResultView.|

<h2 id="tocS_GoogleCloudApigeeV1ServiceIssuersMapping">GoogleCloudApigeeV1ServiceIssuersMapping</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1serviceissuersmapping"></a>
<a id="schema_GoogleCloudApigeeV1ServiceIssuersMapping"></a>
<a id="tocSgooglecloudapigeev1serviceissuersmapping"></a>
<a id="tocsgooglecloudapigeev1serviceissuersmapping"></a>

```json
{
  "emailIds": [
    "string"
  ],
  "service": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emailIds|[string]|false|none|List of trusted issuer email ids.|
|service|string|false|none|String indicating the Apigee service name.|

<h2 id="tocS_GoogleCloudApigeeV1Session">GoogleCloudApigeeV1Session</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1session"></a>
<a id="schema_GoogleCloudApigeeV1Session"></a>
<a id="tocSgooglecloudapigeev1session"></a>
<a id="tocsgooglecloudapigeev1session"></a>

```json
{
  "id": "string",
  "timestampMs": "string"
}
```

Session carries the debug session id and its creation time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The debug session ID.|
|timestampMs|string(int64)|false|none|The first transaction creation timestamp in millisecond, recorded by UAP.|

<h2 id="tocS_GoogleCloudApigeeV1SetAddonsRequest">GoogleCloudApigeeV1SetAddonsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1setaddonsrequest"></a>
<a id="schema_GoogleCloudApigeeV1SetAddonsRequest"></a>
<a id="tocSgooglecloudapigeev1setaddonsrequest"></a>
<a id="tocsgooglecloudapigeev1setaddonsrequest"></a>

```json
{
  "addonsConfig": {
    "advancedApiOpsConfig": {
      "enabled": true
    },
    "apiSecurityConfig": {
      "enabled": true,
      "expiresAt": "string"
    },
    "connectorsPlatformConfig": {
      "enabled": true,
      "expiresAt": "string"
    },
    "integrationConfig": {
      "enabled": true
    },
    "monetizationConfig": {
      "enabled": true
    }
  }
}
```

Request for SetAddons.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addonsConfig|[GoogleCloudApigeeV1AddonsConfig](#schemagooglecloudapigeev1addonsconfig)|false|none|Required. Add-on configurations.|

<h2 id="tocS_GoogleCloudApigeeV1SharedFlow">GoogleCloudApigeeV1SharedFlow</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1sharedflow"></a>
<a id="schema_GoogleCloudApigeeV1SharedFlow"></a>
<a id="tocSgooglecloudapigeev1sharedflow"></a>
<a id="tocsgooglecloudapigeev1sharedflow"></a>

```json
{
  "latestRevisionId": "string",
  "metaData": {
    "createdAt": "string",
    "lastModifiedAt": "string",
    "subType": "string"
  },
  "name": "string",
  "revision": [
    "string"
  ]
}
```

The metadata describing a shared flow

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latestRevisionId|string|false|none|The id of the most recently created revision for this shared flow.|
|metaData|[GoogleCloudApigeeV1EntityMetadata](#schemagooglecloudapigeev1entitymetadata)|false|none|Metadata describing the shared flow.|
|name|string|false|none|The ID of the shared flow.|
|revision|[string]|false|none|A list of revisions of this shared flow.|

<h2 id="tocS_GoogleCloudApigeeV1SharedFlowRevision">GoogleCloudApigeeV1SharedFlowRevision</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1sharedflowrevision"></a>
<a id="schema_GoogleCloudApigeeV1SharedFlowRevision"></a>
<a id="tocSgooglecloudapigeev1sharedflowrevision"></a>
<a id="tocsgooglecloudapigeev1sharedflowrevision"></a>

```json
{
  "configurationVersion": {
    "majorVersion": 0,
    "minorVersion": 0
  },
  "contextInfo": "string",
  "createdAt": "string",
  "description": "string",
  "displayName": "string",
  "entityMetaDataAsProperties": {
    "property1": "string",
    "property2": "string"
  },
  "lastModifiedAt": "string",
  "name": "string",
  "policies": [
    "string"
  ],
  "resourceFiles": {
    "resourceFile": [
      {
        "name": "string",
        "type": "string"
      }
    ]
  },
  "resources": [
    "string"
  ],
  "revision": "string",
  "sharedFlows": [
    "string"
  ],
  "type": "string"
}
```

The metadata describing a shared flow revision.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configurationVersion|[GoogleCloudApigeeV1ConfigVersion](#schemagooglecloudapigeev1configversion)|false|none|The version of the configuration schema to which this shared flow conforms. The only supported value currently is majorVersion 4 and minorVersion 0. This setting may be used in the future to enable evolution of the shared flow format.|
|contextInfo|string|false|none|A textual description of the shared flow revision.|
|createdAt|string(int64)|false|none|Time at which this shared flow revision was created, in milliseconds since epoch.|
|description|string|false|none|Description of the shared flow revision.|
|displayName|string|false|none|The human readable name of this shared flow.|
|entityMetaDataAsProperties|object|false|none|A Key-Value map of metadata about this shared flow revision.|
|lastModifiedAt|string(int64)|false|none|Time at which this shared flow revision was most recently modified, in milliseconds since epoch.|
|name|string|false|none|The resource ID of the parent shared flow.|
|policies|[string]|false|none|A list of policy names included in this shared flow revision.|
|resourceFiles|[GoogleCloudApigeeV1ResourceFiles](#schemagooglecloudapigeev1resourcefiles)|false|none|The resource files included in this shared flow revision.|
|resources|[string]|false|none|A list of the resources included in this shared flow revision formatted as "{type}://{name}".|
|revision|string|false|none|The resource ID of this revision.|
|sharedFlows|[string]|false|none|A list of the shared flow names included in this shared flow revision.|
|type|string|false|none|The string "Application"|

<h2 id="tocS_GoogleCloudApigeeV1Stats">GoogleCloudApigeeV1Stats</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1stats"></a>
<a id="schema_GoogleCloudApigeeV1Stats"></a>
<a id="tocSgooglecloudapigeev1stats"></a>
<a id="tocsgooglecloudapigeev1stats"></a>

```json
{
  "environments": [
    {
      "dimensions": [
        {
          "metrics": [
            {
              "name": "string",
              "values": [
                null
              ]
            }
          ],
          "name": "string"
        }
      ],
      "metrics": [
        {
          "name": "string",
          "values": [
            null
          ]
        }
      ],
      "name": "string"
    }
  ],
  "hosts": [
    {
      "dimensions": [
        {
          "metrics": [
            {
              "name": "string",
              "values": [
                null
              ]
            }
          ],
          "name": "string"
        }
      ],
      "metrics": [
        {
          "name": "string",
          "values": [
            null
          ]
        }
      ],
      "name": "string"
    }
  ],
  "metaData": {
    "errors": [
      "string"
    ],
    "notices": [
      "string"
    ]
  }
}
```

Encapsulates a `stats` response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environments|[[GoogleCloudApigeeV1StatsEnvironmentStats](#schemagooglecloudapigeev1statsenvironmentstats)]|false|none|List of query results on the environment level.|
|hosts|[[GoogleCloudApigeeV1StatsHostStats](#schemagooglecloudapigeev1statshoststats)]|false|none|List of query results grouped by host.|
|metaData|[GoogleCloudApigeeV1Metadata](#schemagooglecloudapigeev1metadata)|false|none|Metadata information.|

<h2 id="tocS_GoogleCloudApigeeV1StatsEnvironmentStats">GoogleCloudApigeeV1StatsEnvironmentStats</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1statsenvironmentstats"></a>
<a id="schema_GoogleCloudApigeeV1StatsEnvironmentStats"></a>
<a id="tocSgooglecloudapigeev1statsenvironmentstats"></a>
<a id="tocsgooglecloudapigeev1statsenvironmentstats"></a>

```json
{
  "dimensions": [
    {
      "metrics": [
        {
          "name": "string",
          "values": [
            null
          ]
        }
      ],
      "name": "string"
    }
  ],
  "metrics": [
    {
      "name": "string",
      "values": [
        null
      ]
    }
  ],
  "name": "string"
}
```

Encapsulates the environment wrapper: ``` "environments": [ { "metrics": [ { "name": "sum(message_count)", "values": [ "2.52056245E8" ] } ], "name": "prod" } ]```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensions|[[GoogleCloudApigeeV1DimensionMetric](#schemagooglecloudapigeev1dimensionmetric)]|false|none|List of metrics grouped under dimensions.|
|metrics|[[GoogleCloudApigeeV1Metric](#schemagooglecloudapigeev1metric)]|false|none|In the final response, only one of the following fields will be present based on the dimensions provided. If no dimensions are provided, then only top-level metrics is provided. If dimensions are included, then there will be a top-level dimensions field under environments which will contain metrics values and the dimension name. Example: ``` "environments": [ { "dimensions": [ { "metrics": [ { "name": "sum(message_count)", "values": [ "2.14049521E8" ] } ], "name": "nit_proxy" } ], "name": "prod" } ]``` or ```"environments": [ { "metrics": [ { "name": "sum(message_count)", "values": [ "2.19026331E8" ] } ], "name": "prod" } ]``` List of metric values.|
|name|string|false|none|Name of the environment.|

<h2 id="tocS_GoogleCloudApigeeV1StatsHostStats">GoogleCloudApigeeV1StatsHostStats</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1statshoststats"></a>
<a id="schema_GoogleCloudApigeeV1StatsHostStats"></a>
<a id="tocSgooglecloudapigeev1statshoststats"></a>
<a id="tocsgooglecloudapigeev1statshoststats"></a>

```json
{
  "dimensions": [
    {
      "metrics": [
        {
          "name": "string",
          "values": [
            null
          ]
        }
      ],
      "name": "string"
    }
  ],
  "metrics": [
    {
      "name": "string",
      "values": [
        null
      ]
    }
  ],
  "name": "string"
}
```

Encapsulates the hostname wrapper: ``` "hosts": [ { "metrics": [ { "name": "sum(message_count)", "values": [ "2.52056245E8" ] } ], "name": "example.com" } ]```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensions|[[GoogleCloudApigeeV1DimensionMetric](#schemagooglecloudapigeev1dimensionmetric)]|false|none|List of metrics grouped under dimensions.|
|metrics|[[GoogleCloudApigeeV1Metric](#schemagooglecloudapigeev1metric)]|false|none|In the final response, only one of the following fields will be present based on the dimensions provided. If no dimensions are provided, then only the top-level metrics are provided. If dimensions are included, then there will be a top-level dimensions field under hostnames which will contain metrics values and the dimension name. Example: ``` "hosts": [ { "dimensions": [ { "metrics": [ { "name": "sum(message_count)", "values": [ "2.14049521E8" ] } ], "name": "nit_proxy" } ], "name": "example.com" } ]``` OR ```"hosts": [ { "metrics": [ { "name": "sum(message_count)", "values": [ "2.19026331E8" ] } ], "name": "example.com" } ]``` List of metric values.|
|name|string|false|none|Hostname used in query.|

<h2 id="tocS_GoogleCloudApigeeV1Subscription">GoogleCloudApigeeV1Subscription</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1subscription"></a>
<a id="schema_GoogleCloudApigeeV1Subscription"></a>
<a id="tocSgooglecloudapigeev1subscription"></a>
<a id="tocsgooglecloudapigeev1subscription"></a>

```json
{
  "name": "string"
}
```

Pub/Sub subscription of an environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Full name of the Pub/Sub subcription. Use the following structure in your request: `subscription "projects/foo/subscription/bar"`|

<h2 id="tocS_GoogleCloudApigeeV1SyncAuthorization">GoogleCloudApigeeV1SyncAuthorization</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1syncauthorization"></a>
<a id="schema_GoogleCloudApigeeV1SyncAuthorization"></a>
<a id="tocSgooglecloudapigeev1syncauthorization"></a>
<a id="tocsgooglecloudapigeev1syncauthorization"></a>

```json
{
  "etag": "string",
  "identities": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string(byte)|false|none|Entity tag (ETag) used for optimistic concurrency control as a way to help prevent simultaneous updates from overwriting each other. For example, when you call [getSyncAuthorization](organizations/getSyncAuthorization) an ETag is returned in the response. Pass that ETag when calling the [setSyncAuthorization](organizations/setSyncAuthorization) to ensure that you are updating the correct version. If you don't pass the ETag in the call to `setSyncAuthorization`, then the existing authorization is overwritten indiscriminately. **Note**: We strongly recommend that you use the ETag in the read-modify-write cycle to avoid race conditions.|
|identities|[string]|false|none|Required. Array of service accounts to grant access to control plane resources, each specified using the following format: `serviceAccount:` service-account-name. The service-account-name is formatted like an email address. For example: `my-synchronizer-manager-service_account@my_project_id.iam.gserviceaccount.com` You might specify multiple service accounts, for example, if you have multiple environments and wish to assign a unique service account to each one. The service accounts must have **Apigee Synchronizer Manager** role. See also [Create service accounts](https://cloud.google.com/apigee/docs/hybrid/latest/sa-about#create-the-service-accounts).|

<h2 id="tocS_GoogleCloudApigeeV1TargetServer">GoogleCloudApigeeV1TargetServer</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1targetserver"></a>
<a id="schema_GoogleCloudApigeeV1TargetServer"></a>
<a id="tocSgooglecloudapigeev1targetserver"></a>
<a id="tocsgooglecloudapigeev1targetserver"></a>

```json
{
  "description": "string",
  "host": "string",
  "isEnabled": true,
  "name": "string",
  "port": 0,
  "protocol": "PROTOCOL_UNSPECIFIED",
  "sSLInfo": {
    "ciphers": [
      "string"
    ],
    "clientAuthEnabled": true,
    "commonName": {
      "value": "string",
      "wildcardMatch": true
    },
    "enabled": true,
    "ignoreValidationErrors": true,
    "keyAlias": "string",
    "keyStore": "string",
    "protocols": [
      "string"
    ],
    "trustStore": "string"
  }
}
```

TargetServer configuration. TargetServers are used to decouple a proxy TargetEndpoint HTTPTargetConnections from concrete URLs for backend services.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Optional. A human-readable description of this TargetServer.|
|host|string|false|none|Required. The host name this target connects to. Value must be a valid hostname as described by RFC-1123.|
|isEnabled|boolean|false|none|Optional. Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically. Defaults to true.|
|name|string|false|none|Required. The resource id of this target server. Values must match the regular expression |
|port|integer(int32)|false|none|Required. The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive.|
|protocol|string|false|none|Immutable. The protocol used by this TargetServer.|
|sSLInfo|[GoogleCloudApigeeV1TlsInfo](#schemagooglecloudapigeev1tlsinfo)|false|none|Optional. Specifies TLS configuration info for this TargetServer. The JSON name is `sSLInfo` for legacy/backwards compatibility reasons -- Edge originally supported SSL, and the name is still used for TLS configuration.|

#### Enumerated Values

|Property|Value|
|---|---|
|protocol|PROTOCOL_UNSPECIFIED|
|protocol|HTTP|
|protocol|GRPC|

<h2 id="tocS_GoogleCloudApigeeV1TargetServerConfig">GoogleCloudApigeeV1TargetServerConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1targetserverconfig"></a>
<a id="schema_GoogleCloudApigeeV1TargetServerConfig"></a>
<a id="tocSgooglecloudapigeev1targetserverconfig"></a>
<a id="tocsgooglecloudapigeev1targetserverconfig"></a>

```json
{
  "enabled": true,
  "host": "string",
  "name": "string",
  "port": 0,
  "protocol": "PROTOCOL_UNSPECIFIED",
  "tlsInfo": {
    "ciphers": [
      "string"
    ],
    "clientAuthEnabled": true,
    "commonName": {
      "matchWildCards": true,
      "name": "string"
    },
    "enabled": true,
    "ignoreValidationErrors": true,
    "keyAlias": "string",
    "keyAliasReference": {
      "aliasId": "string",
      "reference": "string"
    },
    "protocols": [
      "string"
    ],
    "trustStore": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether the target server is enabled. An empty/omitted value for this field should be interpreted as true.|
|host|string|false|none|Host name of the target server.|
|name|string|false|none|Target server revision name in the following format: `organizations/{org}/environments/{env}/targetservers/{targetserver}/revisions/{rev}`|
|port|integer(int32)|false|none|Port number for the target server.|
|protocol|string|false|none|The protocol used by this target server.|
|tlsInfo|[GoogleCloudApigeeV1TlsInfoConfig](#schemagooglecloudapigeev1tlsinfoconfig)|false|none|TLS settings for the target server.|

#### Enumerated Values

|Property|Value|
|---|---|
|protocol|PROTOCOL_UNSPECIFIED|
|protocol|HTTP|
|protocol|GRPC|

<h2 id="tocS_GoogleCloudApigeeV1TestDatastoreResponse">GoogleCloudApigeeV1TestDatastoreResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1testdatastoreresponse"></a>
<a id="schema_GoogleCloudApigeeV1TestDatastoreResponse"></a>
<a id="tocSgooglecloudapigeev1testdatastoreresponse"></a>
<a id="tocsgooglecloudapigeev1testdatastoreresponse"></a>

```json
{
  "error": "string",
  "state": "string"
}
```

The response for TestDatastore

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|read-only|Output only. Error message of test connection failure|
|state|string|false|read-only|Output only. It could be `completed` or `failed`|

<h2 id="tocS_GoogleCloudApigeeV1TlsInfo">GoogleCloudApigeeV1TlsInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1tlsinfo"></a>
<a id="schema_GoogleCloudApigeeV1TlsInfo"></a>
<a id="tocSgooglecloudapigeev1tlsinfo"></a>
<a id="tocsgooglecloudapigeev1tlsinfo"></a>

```json
{
  "ciphers": [
    "string"
  ],
  "clientAuthEnabled": true,
  "commonName": {
    "value": "string",
    "wildcardMatch": true
  },
  "enabled": true,
  "ignoreValidationErrors": true,
  "keyAlias": "string",
  "keyStore": "string",
  "protocols": [
    "string"
  ],
  "trustStore": "string"
}
```

TLS configuration information for virtual hosts and TargetServers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ciphers|[string]|false|none|The SSL/TLS cipher suites to be used. For programmable proxies, it must be one of the cipher suite names listed in: http://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#ciphersuites. For configurable proxies, it must follow the configuration specified in: https://commondatastorage.googleapis.com/chromium-boringssl-docs/ssl.h.html#Cipher-suite-configuration. This setting has no effect for configurable proxies when negotiating TLS 1.3.|
|clientAuthEnabled|boolean|false|none|Optional. Enables two-way TLS.|
|commonName|[GoogleCloudApigeeV1TlsInfoCommonName](#schemagooglecloudapigeev1tlsinfocommonname)|false|none|The TLS Common Name of the certificate.|
|enabled|boolean|false|none|Required. Enables TLS. If false, neither one-way nor two-way TLS will be enabled.|
|ignoreValidationErrors|boolean|false|none|If true, Edge ignores TLS certificate errors. Valid when configuring TLS for target servers and target endpoints, and when configuring virtual hosts that use 2-way TLS. When used with a target endpoint/target server, if the backend system uses SNI and returns a cert with a subject Distinguished Name (DN) that does not match the hostname, there is no way to ignore the error and the connection fails.|
|keyAlias|string|false|none|Required if `client_auth_enabled` is true. The resource ID for the alias containing the private key and cert.|
|keyStore|string|false|none|Required if `client_auth_enabled` is true. The resource ID of the keystore.|
|protocols|[string]|false|none|The TLS versioins to be used.|
|trustStore|string|false|none|The resource ID of the truststore.|

<h2 id="tocS_GoogleCloudApigeeV1TlsInfoCommonName">GoogleCloudApigeeV1TlsInfoCommonName</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1tlsinfocommonname"></a>
<a id="schema_GoogleCloudApigeeV1TlsInfoCommonName"></a>
<a id="tocSgooglecloudapigeev1tlsinfocommonname"></a>
<a id="tocsgooglecloudapigeev1tlsinfocommonname"></a>

```json
{
  "value": "string",
  "wildcardMatch": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|The TLS Common Name string of the certificate.|
|wildcardMatch|boolean|false|none|Indicates whether the cert should be matched against as a wildcard cert.|

<h2 id="tocS_GoogleCloudApigeeV1TlsInfoConfig">GoogleCloudApigeeV1TlsInfoConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1tlsinfoconfig"></a>
<a id="schema_GoogleCloudApigeeV1TlsInfoConfig"></a>
<a id="tocSgooglecloudapigeev1tlsinfoconfig"></a>
<a id="tocsgooglecloudapigeev1tlsinfoconfig"></a>

```json
{
  "ciphers": [
    "string"
  ],
  "clientAuthEnabled": true,
  "commonName": {
    "matchWildCards": true,
    "name": "string"
  },
  "enabled": true,
  "ignoreValidationErrors": true,
  "keyAlias": "string",
  "keyAliasReference": {
    "aliasId": "string",
    "reference": "string"
  },
  "protocols": [
    "string"
  ],
  "trustStore": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ciphers|[string]|false|none|List of ciphers that are granted access.|
|clientAuthEnabled|boolean|false|none|Flag that specifies whether client-side authentication is enabled for the target server. Enables two-way TLS.|
|commonName|[GoogleCloudApigeeV1CommonNameConfig](#schemagooglecloudapigeev1commonnameconfig)|false|none|Common name to validate the target server against.|
|enabled|boolean|false|none|Flag that specifies whether one-way TLS is enabled. Set to `true` to enable one-way TLS.|
|ignoreValidationErrors|boolean|false|none|Flag that specifies whether to ignore TLS certificate validation errors. Set to `true` to ignore errors.|
|keyAlias|string|false|none|Name of the alias used for client-side authentication in the following format: `organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}`|
|keyAliasReference|[GoogleCloudApigeeV1KeyAliasReference](#schemagooglecloudapigeev1keyaliasreference)|false|none|Reference name and alias pair to use for client-side authentication.|
|protocols|[string]|false|none|List of TLS protocols that are granted access.|
|trustStore|string|false|none|Name of the keystore or keystore reference containing trusted certificates for the server in the following format: `organizations/{org}/environments/{env}/keystores/{keystore}` or `organizations/{org}/environments/{env}/references/{reference}`|

<h2 id="tocS_GoogleCloudApigeeV1TraceConfig">GoogleCloudApigeeV1TraceConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1traceconfig"></a>
<a id="schema_GoogleCloudApigeeV1TraceConfig"></a>
<a id="tocSgooglecloudapigeev1traceconfig"></a>
<a id="tocsgooglecloudapigeev1traceconfig"></a>

```json
{
  "endpoint": "string",
  "exporter": "EXPORTER_UNSPECIFIED",
  "samplingConfig": {
    "sampler": "SAMPLER_UNSPECIFIED",
    "samplingRate": 0
  }
}
```

TraceConfig defines the configurations in an environment of distributed trace.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|string|false|none|Required. Endpoint of the exporter.|
|exporter|string|false|none|Required. Exporter that is used to view the distributed trace captured using OpenCensus. An exporter sends traces to any backend that is capable of consuming them. Recorded spans can be exported by registered exporters.|
|samplingConfig|[GoogleCloudApigeeV1TraceSamplingConfig](#schemagooglecloudapigeev1tracesamplingconfig)|false|none|Distributed trace configuration for all API proxies in an environment. You can also override the configuration for a specific API proxy using the distributed trace configuration overrides API.|

#### Enumerated Values

|Property|Value|
|---|---|
|exporter|EXPORTER_UNSPECIFIED|
|exporter|JAEGER|
|exporter|CLOUD_TRACE|

<h2 id="tocS_GoogleCloudApigeeV1TraceConfigOverride">GoogleCloudApigeeV1TraceConfigOverride</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1traceconfigoverride"></a>
<a id="schema_GoogleCloudApigeeV1TraceConfigOverride"></a>
<a id="tocSgooglecloudapigeev1traceconfigoverride"></a>
<a id="tocsgooglecloudapigeev1traceconfigoverride"></a>

```json
{
  "apiProxy": "string",
  "name": "string",
  "samplingConfig": {
    "sampler": "SAMPLER_UNSPECIFIED",
    "samplingRate": 0
  }
}
```

A representation of a configuration override.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiProxy|string|false|none|ID of the API proxy that will have its trace configuration overridden.|
|name|string|false|none|ID of the trace configuration override specified as a system-generated UUID.|
|samplingConfig|[GoogleCloudApigeeV1TraceSamplingConfig](#schemagooglecloudapigeev1tracesamplingconfig)|false|none|Trace configuration to override.|

<h2 id="tocS_GoogleCloudApigeeV1TraceSamplingConfig">GoogleCloudApigeeV1TraceSamplingConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1tracesamplingconfig"></a>
<a id="schema_GoogleCloudApigeeV1TraceSamplingConfig"></a>
<a id="tocSgooglecloudapigeev1tracesamplingconfig"></a>
<a id="tocsgooglecloudapigeev1tracesamplingconfig"></a>

```json
{
  "sampler": "SAMPLER_UNSPECIFIED",
  "samplingRate": 0
}
```

TraceSamplingConfig represents the detail settings of distributed tracing. Only the fields that are defined in the distributed trace configuration can be overridden using the distribute trace configuration override APIs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sampler|string|false|none|Sampler of distributed tracing. OFF is the default value.|
|samplingRate|number(float)|false|none|Field sampling rate. This value is only applicable when using the PROBABILITY sampler. The supported values are > 0 and <= 0.5.|

#### Enumerated Values

|Property|Value|
|---|---|
|sampler|SAMPLER_UNSPECIFIED|
|sampler|OFF|
|sampler|PROBABILITY|

<h2 id="tocS_GoogleCloudApigeeV1UpdateError">GoogleCloudApigeeV1UpdateError</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudapigeev1updateerror"></a>
<a id="schema_GoogleCloudApigeeV1UpdateError"></a>
<a id="tocSgooglecloudapigeev1updateerror"></a>
<a id="tocsgooglecloudapigeev1updateerror"></a>

```json
{
  "code": "OK",
  "message": "string",
  "resource": "string",
  "type": "string"
}
```

Details on why a resource update failed in the runtime.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Status code.|
|message|string|false|none|User-friendly error message.|
|resource|string|false|none|The sub resource specific to this error (e.g. a proxy deployed within the EnvironmentConfig). If empty the error refers to the top level resource.|
|type|string|false|none|A string that uniquely identifies the type of error. This provides a more reliable means to deduplicate errors across revisions and instances.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|OK|
|code|CANCELLED|
|code|UNKNOWN|
|code|INVALID_ARGUMENT|
|code|DEADLINE_EXCEEDED|
|code|NOT_FOUND|
|code|ALREADY_EXISTS|
|code|PERMISSION_DENIED|
|code|UNAUTHENTICATED|
|code|RESOURCE_EXHAUSTED|
|code|FAILED_PRECONDITION|
|code|ABORTED|
|code|OUT_OF_RANGE|
|code|UNIMPLEMENTED|
|code|INTERNAL|
|code|UNAVAILABLE|
|code|DATA_LOSS|

<h2 id="tocS_GoogleIamV1AuditConfig">GoogleIamV1AuditConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1auditconfig"></a>
<a id="schema_GoogleIamV1AuditConfig"></a>
<a id="tocSgoogleiamv1auditconfig"></a>
<a id="tocsgoogleiamv1auditconfig"></a>

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
|auditLogConfigs|[[GoogleIamV1AuditLogConfig](#schemagoogleiamv1auditlogconfig)]|false|none|The configuration for logging of each type of permission.|
|service|string|false|none|Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.|

<h2 id="tocS_GoogleIamV1AuditLogConfig">GoogleIamV1AuditLogConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1auditlogconfig"></a>
<a id="schema_GoogleIamV1AuditLogConfig"></a>
<a id="tocSgoogleiamv1auditlogconfig"></a>
<a id="tocsgoogleiamv1auditlogconfig"></a>

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

<h2 id="tocS_GoogleIamV1Binding">GoogleIamV1Binding</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1binding"></a>
<a id="schema_GoogleIamV1Binding"></a>
<a id="tocSgoogleiamv1binding"></a>
<a id="tocsgoogleiamv1binding"></a>

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
|condition|[GoogleTypeExpr](#schemagoogletypeexpr)|false|none|The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|
|members|[string]|false|none|Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding.|
|role|string|false|none|Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.|

<h2 id="tocS_GoogleIamV1Policy">GoogleIamV1Policy</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1policy"></a>
<a id="schema_GoogleIamV1Policy"></a>
<a id="tocSgoogleiamv1policy"></a>
<a id="tocsgoogleiamv1policy"></a>

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
|auditConfigs|[[GoogleIamV1AuditConfig](#schemagoogleiamv1auditconfig)]|false|none|Specifies cloud audit logging configuration for this policy.|
|bindings|[[GoogleIamV1Binding](#schemagoogleiamv1binding)]|false|none|Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.|
|etag|string(byte)|false|none|`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.|
|version|integer(int32)|false|none|Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|

<h2 id="tocS_GoogleIamV1SetIamPolicyRequest">GoogleIamV1SetIamPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1setiampolicyrequest"></a>
<a id="schema_GoogleIamV1SetIamPolicyRequest"></a>
<a id="tocSgoogleiamv1setiampolicyrequest"></a>
<a id="tocsgoogleiamv1setiampolicyrequest"></a>

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
|policy|[GoogleIamV1Policy](#schemagoogleiamv1policy)|false|none|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|
|updateMask|string(google-fieldmask)|false|none|OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`|

<h2 id="tocS_GoogleIamV1TestIamPermissionsRequest">GoogleIamV1TestIamPermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1testiampermissionsrequest"></a>
<a id="schema_GoogleIamV1TestIamPermissionsRequest"></a>
<a id="tocSgoogleiamv1testiampermissionsrequest"></a>
<a id="tocsgoogleiamv1testiampermissionsrequest"></a>

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

<h2 id="tocS_GoogleIamV1TestIamPermissionsResponse">GoogleIamV1TestIamPermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1testiampermissionsresponse"></a>
<a id="schema_GoogleIamV1TestIamPermissionsResponse"></a>
<a id="tocSgoogleiamv1testiampermissionsresponse"></a>
<a id="tocsgoogleiamv1testiampermissionsresponse"></a>

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

<h2 id="tocS_GoogleRpcPreconditionFailure">GoogleRpcPreconditionFailure</h2>
<!-- backwards compatibility -->
<a id="schemagooglerpcpreconditionfailure"></a>
<a id="schema_GoogleRpcPreconditionFailure"></a>
<a id="tocSgooglerpcpreconditionfailure"></a>
<a id="tocsgooglerpcpreconditionfailure"></a>

```json
{
  "violations": [
    {
      "description": "string",
      "subject": "string",
      "type": "string"
    }
  ]
}
```

Describes what preconditions have failed. For example, if an RPC failed because it required the Terms of Service to be acknowledged, it could list the terms of service violation in the PreconditionFailure message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|violations|[[GoogleRpcPreconditionFailureViolation](#schemagooglerpcpreconditionfailureviolation)]|false|none|Describes all precondition violations.|

<h2 id="tocS_GoogleRpcPreconditionFailureViolation">GoogleRpcPreconditionFailureViolation</h2>
<!-- backwards compatibility -->
<a id="schemagooglerpcpreconditionfailureviolation"></a>
<a id="schema_GoogleRpcPreconditionFailureViolation"></a>
<a id="tocSgooglerpcpreconditionfailureviolation"></a>
<a id="tocsgooglerpcpreconditionfailureviolation"></a>

```json
{
  "description": "string",
  "subject": "string",
  "type": "string"
}
```

A message type used to describe a single precondition failure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A description of how the precondition failed. Developers can use this description to understand how to fix the failure. For example: "Terms of service not accepted".|
|subject|string|false|none|The subject, relative to the type, that failed. For example, "google.com/cloud" relative to the "TOS" type would indicate which terms of service is being referenced.|
|type|string|false|none|The type of PreconditionFailure. We recommend using a service-specific enum type to define the supported precondition violation subjects. For example, "TOS" for "Terms of Service violation".|

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

<h2 id="tocS_GoogleTypeExpr">GoogleTypeExpr</h2>
<!-- backwards compatibility -->
<a id="schemagoogletypeexpr"></a>
<a id="schema_GoogleTypeExpr"></a>
<a id="tocSgoogletypeexpr"></a>
<a id="tocsgoogletypeexpr"></a>

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

<h2 id="tocS_GoogleTypeInterval">GoogleTypeInterval</h2>
<!-- backwards compatibility -->
<a id="schemagoogletypeinterval"></a>
<a id="schema_GoogleTypeInterval"></a>
<a id="tocSgoogletypeinterval"></a>
<a id="tocsgoogletypeinterval"></a>

```json
{
  "endTime": "string",
  "startTime": "string"
}
```

Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.|
|startTime|string(google-datetime)|false|none|Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.|

<h2 id="tocS_GoogleTypeMoney">GoogleTypeMoney</h2>
<!-- backwards compatibility -->
<a id="schemagoogletypemoney"></a>
<a id="schema_GoogleTypeMoney"></a>
<a id="tocSgoogletypemoney"></a>
<a id="tocsgoogletypemoney"></a>

```json
{
  "currencyCode": "string",
  "nanos": 0,
  "units": "string"
}
```

Represents an amount of money with its currency type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|string|false|none|The three-letter currency code defined in ISO 4217.|
|nanos|integer(int32)|false|none|Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.|
|units|string(int64)|false|none|The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.|
