<h1 id="service-broker">Service Broker v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Google Cloud Platform Service Broker API provides Google hosted
implementation of the Open Service Broker API
(https://www.openservicebrokerapi.org/).

Base URLs:

* <a href="https://servicebroker.googleapis.com/">https://servicebroker.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/kubernetes-engine/docs/concepts/add-on/service-broker">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|View and manage your data across Google Cloud Platform services|

- oAuth2 authentication. Oauth 2.0 accessCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|View and manage your data across Google Cloud Platform services|

<h1 id="service-broker-projects">projects</h1>

## servicebroker.projects.brokers.v2.service_instances.service_bindings.get

<a id="opIdservicebroker.projects.brokers.v2.service_instances.service_bindings.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}`

GetBinding returns the binding information.

<h3 id="servicebrokerprojectsbrokersv2serviceinstancesservicebindingsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name must match<br>`projects/[PROJECT_ID]/brokers/[BROKER_ID]/v2/service_instances/[INSTANCE_ID]/service_bindings`.|
|planId|query|string|false|Plan id.|
|serviceId|query|string|false|Service id.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|callback|query|string|false|JSONP|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|$.xgafv|query|string|false|V1 error format.|
|alt|query|string|false|Data format for response.|
|access_token|query|string|false|OAuth access token.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="servicebrokerprojectsbrokersv2serviceinstancesservicebindingsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudServicebrokerV1beta1__GetBindingResponse](#schemagooglecloudservicebrokerv1beta1__getbindingresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## servicebroker.projects.brokers.v2.service_instances.service_bindings.delete

<a id="opIdservicebroker.projects.brokers.v2.service_instances.service_bindings.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/{name}`

Unbinds from a service instance.
For synchronous/asynchronous request details see CreateServiceInstance
method.
If binding does not exist HTTP 410 status will be returned.

<h3 id="servicebrokerprojectsbrokersv2serviceinstancesservicebindingsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name must match<br>`projects/[PROJECT_ID]/brokers/[BROKER_ID]/`<br>`v2/service_instances/[INSTANCE_ID]/service_bindings/[BINDING_ID]`<br>or<br>`projects/[PROJECT_ID]/brokers/[BROKER_ID]/`<br>`/instances/[INSTANCE_ID]/bindings/[BINDING_ID]`.|
|acceptsIncomplete|query|boolean|false|See CreateServiceInstanceRequest for details.|
|planId|query|string|false|The plan id of the service instance.|
|serviceId|query|string|false|Additional query parameter hints.<br>The service id of the service instance.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|callback|query|string|false|JSONP|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|$.xgafv|query|string|false|V1 error format.|
|alt|query|string|false|Data format for response.|
|access_token|query|string|false|OAuth access token.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="servicebrokerprojectsbrokersv2serviceinstancesservicebindingsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudServicebrokerV1beta1__DeleteBindingResponse](#schemagooglecloudservicebrokerv1beta1__deletebindingresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## servicebroker.projects.brokers.v2.service_instances.patch

<a id="opIdservicebroker.projects.brokers.v2.service_instances.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "context": {
      "property1": null,
      "property2": null
    },
    "createTime": "string",
    "deploymentName": "string",
    "description": "string",
    "instance_id": "string",
    "organization_guid": "string",
    "parameters": {
      "property1": null,
      "property2": null
    },
    "plan_id": "string",
    "previous_values": {
      "property1": null,
      "property2": null
    },
    "resourceName": "string",
    "service_id": "string",
    "space_guid": "string"
  }'
```

`PATCH /v1beta1/{name}`

Updates an existing service instance.
See CreateServiceInstance for possible response codes.

> Body parameter

```json
{
  "context": {
    "property1": null,
    "property2": null
  },
  "createTime": "string",
  "deploymentName": "string",
  "description": "string",
  "instance_id": "string",
  "organization_guid": "string",
  "parameters": {
    "property1": null,
    "property2": null
  },
  "plan_id": "string",
  "previous_values": {
    "property1": null,
    "property2": null
  },
  "resourceName": "string",
  "service_id": "string",
  "space_guid": "string"
}
```

<h3 id="servicebrokerprojectsbrokersv2serviceinstancespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name must match<br>`projects/[PROJECT_ID]/brokers/[BROKER_ID]/v2/service_instances/[INSTANCE_ID]`.|
|acceptsIncomplete|query|boolean|false|See CreateServiceInstanceRequest for details.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|callback|query|string|false|JSONP|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|$.xgafv|query|string|false|V1 error format.|
|alt|query|string|false|Data format for response.|
|access_token|query|string|false|OAuth access token.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|body|body|[GoogleCloudServicebrokerV1beta1__ServiceInstance](#schemagooglecloudservicebrokerv1beta1__serviceinstance)|false|none|
|» context|body|object|false|Platform specific contextual information under which the service instance<br>is to be provisioned. This replaces organization_guid and space_guid.<br>But can also contain anything.<br>Currently only used for logging context information.|
|» » **additionalProperties**|body|object|false|Properties of the object.|
|» createTime|body|string(google-datetime)|false|Output only. Timestamp for when the instance was created.|
|» deploymentName|body|string|false|Output only. String containing the Deployment Manager deployment name that was created<br>for this instance,|
|» description|body|string|false|To return errors when GetInstance call is done via HTTP to be unified with<br>other methods.|
|» instance_id|body|string|false|The id of the service instance. Must be unique within GCP project.<br>Maximum length is 64, GUID recommended.<br>Required.|
|» organization_guid|body|string|false|The platform GUID for the organization under which the service is to be<br>provisioned.<br>Required.|
|» parameters|body|object|false|Configuration options for the service instance.<br>Parameters is JSON object serialized to string.|
|» » **additionalProperties**|body|object|false|Properties of the object.|
|» plan_id|body|string|false|The ID of the plan. See `Service` and `Plan` resources for details.<br>Maximum length is 64, GUID recommended.<br>Required.|
|» previous_values|body|object|false|Used only in UpdateServiceInstance request to optionally specify previous<br>fields.|
|» » **additionalProperties**|body|object|false|Properties of the object.|
|» resourceName|body|string|false|Output only. The resource name of the instance, e.g.<br>projects/project_id/brokers/broker_id/service_instances/instance_id|
|» service_id|body|string|false|The id of the service. Must be a valid identifier of a service<br>contained in the list from a `ListServices()` call.<br>Maximum length is 64, GUID recommended.<br>Required.|
|» space_guid|body|string|false|The identifier for the project space within the platform organization.<br>Required.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="servicebrokerprojectsbrokersv2serviceinstancespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudServicebrokerV1beta1__UpdateServiceInstanceResponse](#schemagooglecloudservicebrokerv1beta1__updateserviceinstanceresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## servicebroker.projects.brokers.v2.service_instances.service_bindings.getLast_operation

<a id="opIdservicebroker.projects.brokers.v2.service_instances.service_bindings.getLast_operation"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/last_operation \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}/last_operation`

Returns the state of the last operation for the binding.
Only last (or current) operation can be polled.

<h3 id="servicebrokerprojectsbrokersv2serviceinstancesservicebindingsgetlastoperation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name must match<br>`projects/[PROJECT_ID]/brokers/[BROKER_ID]/v2/service_instances/[INSTANCE_ID]/service_binding/[BINDING_ID]`.|
|operation|query|string|false|If `operation` was returned during mutation operation, this field must be<br>populated with the provided value.|
|planId|query|string|false|Plan id.|
|serviceId|query|string|false|Service id.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|callback|query|string|false|JSONP|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|$.xgafv|query|string|false|V1 error format.|
|alt|query|string|false|Data format for response.|
|access_token|query|string|false|OAuth access token.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="servicebrokerprojectsbrokersv2serviceinstancesservicebindingsgetlastoperation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudServicebrokerV1beta1__Operation](#schemagooglecloudservicebrokerv1beta1__operation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## servicebroker.projects.brokers.instances.bindings.list

<a id="opIdservicebroker.projects.brokers.instances.bindings.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/bindings \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/bindings`

Lists all the bindings in the instance.

<h3 id="servicebrokerprojectsbrokersinstancesbindingslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Parent must match<br>`projects/[PROJECT_ID]/brokers/[BROKER_ID]/` +<br>`v2/service_instances/[INSTANCE_ID]`<br>or<br>`projects/[PROJECT_ID]/brokers/[BROKER_ID]/instances/[INSTANCE_ID]`.|
|pageSize|query|integer|false|Specifies the number of results to return per page. If there are fewer<br>elements than the specified number, returns all elements.<br>Optional. Acceptable values are 0 to 200, inclusive. (Default: 100)|
|pageToken|query|string|false|Specifies a page token to use. Set `pageToken` to a `nextPageToken`<br>returned by a previous list request to get the next page of results.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|callback|query|string|false|JSONP|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|$.xgafv|query|string|false|V1 error format.|
|alt|query|string|false|Data format for response.|
|access_token|query|string|false|OAuth access token.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="servicebrokerprojectsbrokersinstancesbindingslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudServicebrokerV1beta1__ListBindingsResponse](#schemagooglecloudservicebrokerv1beta1__listbindingsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## servicebroker.projects.brokers.list

<a id="opIdservicebroker.projects.brokers.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/brokers \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/brokers`

ListBrokers lists brokers.

<h3 id="servicebrokerprojectsbrokerslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Parent must match `projects/[PROJECT_ID]/brokers`.|
|pageSize|query|integer|false|Specifies the number of results to return per page. If there are fewer<br>elements than the specified number, returns all elements.<br>Optional. Acceptable values are 0 to 200, inclusive. (Default: 100)|
|pageToken|query|string|false|Specifies a page token to use. Set `pageToken` to a `nextPageToken`<br>returned by a previous list request to get the next page of results.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|callback|query|string|false|JSONP|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|$.xgafv|query|string|false|V1 error format.|
|alt|query|string|false|Data format for response.|
|access_token|query|string|false|OAuth access token.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="servicebrokerprojectsbrokerslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudServicebrokerV1beta1__ListBrokersResponse](#schemagooglecloudservicebrokerv1beta1__listbrokersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## servicebroker.projects.brokers.create

<a id="opIdservicebroker.projects.brokers.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/brokers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "createTime": "string",
    "name": "string",
    "title": "string",
    "url": "string"
  }'
```

`POST /v1beta1/{parent}/brokers`

CreateBroker creates a Broker.

> Body parameter

```json
{
  "createTime": "string",
  "name": "string",
  "title": "string",
  "url": "string"
}
```

<h3 id="servicebrokerprojectsbrokerscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The project in which to create broker.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|callback|query|string|false|JSONP|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|$.xgafv|query|string|false|V1 error format.|
|alt|query|string|false|Data format for response.|
|access_token|query|string|false|OAuth access token.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|body|body|[GoogleCloudServicebrokerV1beta1__Broker](#schemagooglecloudservicebrokerv1beta1__broker)|false|none|
|» createTime|body|string(google-datetime)|false|Output only. Timestamp for when the broker was created.|
|» name|body|string|false|Name of the broker in the format:<br><projects>/<project-id>/brokers/<broker>.<br>This allows for multiple brokers per project which can be used to<br>enable having custom brokers per GKE cluster, for example.|
|» title|body|string|false|User friendly title of the broker.<br>Limited to 1024 characters. Requests with longer titles will be rejected.|
|» url|body|string|false|Output only. URL of the broker OSB-compliant endpoint, for example:<br>https://servicebroker.googleapis.com/projects/<project>/brokers/<broker>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="servicebrokerprojectsbrokerscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudServicebrokerV1beta1__Broker](#schemagooglecloudservicebrokerv1beta1__broker)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## servicebroker.projects.brokers.instances.list

<a id="opIdservicebroker.projects.brokers.instances.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/instances \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/instances`

Lists all the instances in the brokers
This API is an extension and not part of the OSB spec.
Hence the path is a standard Google API URL.

<h3 id="servicebrokerprojectsbrokersinstanceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.|
|pageSize|query|integer|false|Specifies the number of results to return per page. If there are fewer<br>elements than the specified number, returns all elements.<br>Optional. Acceptable values are 0 to 200, inclusive. (Default: 100)|
|pageToken|query|string|false|Specifies a page token to use. Set `pageToken` to a `nextPageToken`<br>returned by a previous list request to get the next page of results.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|callback|query|string|false|JSONP|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|$.xgafv|query|string|false|V1 error format.|
|alt|query|string|false|Data format for response.|
|access_token|query|string|false|OAuth access token.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="servicebrokerprojectsbrokersinstanceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudServicebrokerV1beta1__ListServiceInstancesResponse](#schemagooglecloudservicebrokerv1beta1__listserviceinstancesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## servicebroker.projects.brokers.v2.service_instances.service_bindings.create

<a id="opIdservicebroker.projects.brokers.v2.service_instances.service_bindings.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/service_bindings/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bind_resource": {
      "property1": null,
      "property2": null
    },
    "binding_id": "string",
    "createTime": "string",
    "deploymentName": "string",
    "parameters": {
      "property1": null,
      "property2": null
    },
    "plan_id": "string",
    "resourceName": "string",
    "service_id": "string"
  }'
```

`PUT /v1beta1/{parent}/service_bindings/{binding_id}`

CreateBinding generates a service binding to an existing service instance.
See ProviServiceInstance for async operation details.

> Body parameter

```json
{
  "bind_resource": {
    "property1": null,
    "property2": null
  },
  "binding_id": "string",
  "createTime": "string",
  "deploymentName": "string",
  "parameters": {
    "property1": null,
    "property2": null
  },
  "plan_id": "string",
  "resourceName": "string",
  "service_id": "string"
}
```

<h3 id="servicebrokerprojectsbrokersv2serviceinstancesservicebindingscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The GCP container.<br>Must match<br>`projects/[PROJECT_ID]/brokers/[BROKER_ID]/v2/service_instances/[INSTANCE_ID]`.|
|binding_id|path|string|true|The id of the binding. Must be unique within GCP project.<br>Maximum length is 64, GUID recommended.<br>Required.|
|acceptsIncomplete|query|boolean|false|See CreateServiceInstanceRequest for details.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|callback|query|string|false|JSONP|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|$.xgafv|query|string|false|V1 error format.|
|alt|query|string|false|Data format for response.|
|access_token|query|string|false|OAuth access token.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|body|body|[GoogleCloudServicebrokerV1beta1__Binding](#schemagooglecloudservicebrokerv1beta1__binding)|false|none|
|» bind_resource|body|object|false|A JSON object that contains data for platform resources associated with<br>the binding to be created.|
|» » **additionalProperties**|body|object|false|Properties of the object.|
|» binding_id|body|string|false|The id of the binding. Must be unique within GCP project.<br>Maximum length is 64, GUID recommended.<br>Required.|
|» createTime|body|string(google-datetime)|false|Output only. Timestamp for when the binding was created.|
|» deploymentName|body|string|false|Output only. String containing the Deployment Manager deployment name that was created<br>for this binding,|
|» parameters|body|object|false|Configuration options for the service binding.|
|» » **additionalProperties**|body|object|false|Properties of the object.|
|» plan_id|body|string|false|The ID of the plan. See `Service` and `Plan` resources for details.<br>Maximum length is 64, GUID recommended.<br>Required.|
|» resourceName|body|string|false|Output only. The resource name of the binding, e.g.<br>projects/project_id/brokers/broker_id/service_instances/instance_id/bindings/binding_id.|
|» service_id|body|string|false|The id of the service. Must be a valid identifier of a service<br>contained in the list from a `ListServices()` call.<br>Maximum length is 64, GUID recommended.<br>Required.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="servicebrokerprojectsbrokersv2serviceinstancesservicebindingscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudServicebrokerV1beta1__CreateBindingResponse](#schemagooglecloudservicebrokerv1beta1__createbindingresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## servicebroker.projects.brokers.v2.catalog.list

<a id="opIdservicebroker.projects.brokers.v2.catalog.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/v2/catalog \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/v2/catalog`

Lists all the Services registered with this broker for consumption for
given service registry broker, which contains an set of services.
Note, that Service producer API is separate from Broker API.

<h3 id="servicebrokerprojectsbrokersv2cataloglist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.|
|pageSize|query|integer|false|Specifies the number of results to return per page. If there are fewer<br>elements than the specified number, returns all elements.<br>Optional. If unset or 0, all the results will be returned.|
|pageToken|query|string|false|Specifies a page token to use. Set `pageToken` to a `nextPageToken`<br>returned by a previous list request to get the next page of results.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|callback|query|string|false|JSONP|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|$.xgafv|query|string|false|V1 error format.|
|alt|query|string|false|Data format for response.|
|access_token|query|string|false|OAuth access token.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="servicebrokerprojectsbrokersv2cataloglist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudServicebrokerV1beta1__ListCatalogResponse](#schemagooglecloudservicebrokerv1beta1__listcatalogresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## servicebroker.projects.brokers.v2.service_instances.create

<a id="opIdservicebroker.projects.brokers.v2.service_instances.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/v2/service_instances/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "context": {
      "property1": null,
      "property2": null
    },
    "createTime": "string",
    "deploymentName": "string",
    "description": "string",
    "instance_id": "string",
    "organization_guid": "string",
    "parameters": {
      "property1": null,
      "property2": null
    },
    "plan_id": "string",
    "previous_values": {
      "property1": null,
      "property2": null
    },
    "resourceName": "string",
    "service_id": "string",
    "space_guid": "string"
  }'
```

`PUT /v1beta1/{parent}/v2/service_instances/{instance_id}`

Provisions a service instance.
If `request.accepts_incomplete` is false and Broker cannot execute request
synchronously HTTP 422 error will be returned along with
FAILED_PRECONDITION status.
If `request.accepts_incomplete` is true and the Broker decides to execute
resource asynchronously then HTTP 202 response code will be returned and a
valid polling operation in the response will be included.
If Broker executes the request synchronously and it succeeds HTTP 201
response will be furnished.
If identical instance exists, then HTTP 200 response will be returned.
If an instance with identical ID but mismatching parameters exists, then
HTTP 409 status code will be returned.

> Body parameter

```json
{
  "context": {
    "property1": null,
    "property2": null
  },
  "createTime": "string",
  "deploymentName": "string",
  "description": "string",
  "instance_id": "string",
  "organization_guid": "string",
  "parameters": {
    "property1": null,
    "property2": null
  },
  "plan_id": "string",
  "previous_values": {
    "property1": null,
    "property2": null
  },
  "resourceName": "string",
  "service_id": "string",
  "space_guid": "string"
}
```

<h3 id="servicebrokerprojectsbrokersv2serviceinstancescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.|
|instance_id|path|string|true|The id of the service instance. Must be unique within GCP project.<br>Maximum length is 64, GUID recommended.<br>Required.|
|acceptsIncomplete|query|boolean|false|Value indicating that API client supports asynchronous operations. If<br>Broker cannot execute the request synchronously HTTP 422 code will be<br>returned to HTTP clients along with FAILED_PRECONDITION error.<br>If true and broker will execute request asynchronously 202 HTTP code will<br>be returned.<br>This broker always requires this to be true as all mutator operations are<br>asynchronous.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|callback|query|string|false|JSONP|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|$.xgafv|query|string|false|V1 error format.|
|alt|query|string|false|Data format for response.|
|access_token|query|string|false|OAuth access token.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|body|body|[GoogleCloudServicebrokerV1beta1__ServiceInstance](#schemagooglecloudservicebrokerv1beta1__serviceinstance)|false|none|
|» context|body|object|false|Platform specific contextual information under which the service instance<br>is to be provisioned. This replaces organization_guid and space_guid.<br>But can also contain anything.<br>Currently only used for logging context information.|
|» » **additionalProperties**|body|object|false|Properties of the object.|
|» createTime|body|string(google-datetime)|false|Output only. Timestamp for when the instance was created.|
|» deploymentName|body|string|false|Output only. String containing the Deployment Manager deployment name that was created<br>for this instance,|
|» description|body|string|false|To return errors when GetInstance call is done via HTTP to be unified with<br>other methods.|
|» instance_id|body|string|false|The id of the service instance. Must be unique within GCP project.<br>Maximum length is 64, GUID recommended.<br>Required.|
|» organization_guid|body|string|false|The platform GUID for the organization under which the service is to be<br>provisioned.<br>Required.|
|» parameters|body|object|false|Configuration options for the service instance.<br>Parameters is JSON object serialized to string.|
|» » **additionalProperties**|body|object|false|Properties of the object.|
|» plan_id|body|string|false|The ID of the plan. See `Service` and `Plan` resources for details.<br>Maximum length is 64, GUID recommended.<br>Required.|
|» previous_values|body|object|false|Used only in UpdateServiceInstance request to optionally specify previous<br>fields.|
|» » **additionalProperties**|body|object|false|Properties of the object.|
|» resourceName|body|string|false|Output only. The resource name of the instance, e.g.<br>projects/project_id/brokers/broker_id/service_instances/instance_id|
|» service_id|body|string|false|The id of the service. Must be a valid identifier of a service<br>contained in the list from a `ListServices()` call.<br>Maximum length is 64, GUID recommended.<br>Required.|
|» space_guid|body|string|false|The identifier for the project space within the platform organization.<br>Required.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="servicebrokerprojectsbrokersv2serviceinstancescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudServicebrokerV1beta1__CreateServiceInstanceResponse](#schemagooglecloudservicebrokerv1beta1__createserviceinstanceresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="service-broker-v1beta1">v1beta1</h1>

## servicebroker.getIamPolicy

<a id="opIdservicebroker.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:getIamPolicy \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{resource}:getIamPolicy`

Gets the access control policy for a resource.
Returns an empty policy if the resource exists and does not have a policy
set.

<h3 id="servicebrokergetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy is being requested.<br>See the operation documentation for the appropriate value for this field.|
|options.requestedPolicyVersion|query|integer|false|Optional. The policy format version to be returned.<br><br>Valid values are 0, 1, and 3. Requests specifying an invalid value will be<br>rejected.<br><br>Requests for policies with any conditional bindings must specify version 3.<br>Policies without any conditional bindings may specify any valid value or<br>leave the field unset.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|callback|query|string|false|JSONP|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|$.xgafv|query|string|false|V1 error format.|
|alt|query|string|false|Data format for response.|
|access_token|query|string|false|OAuth access token.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="servicebrokergetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleIamV1__Policy](#schemagoogleiamv1__policy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## servicebroker.setIamPolicy

<a id="opIdservicebroker.setIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:setIamPolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "policy": {
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
  }'
```

`POST /v1beta1/{resource}:setIamPolicy`

Sets the access control policy on the specified resource. Replaces any
existing policy.

Can return Public Errors: NOT_FOUND, INVALID_ARGUMENT and PERMISSION_DENIED

> Body parameter

```json
{
  "policy": {
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
}
```

<h3 id="servicebrokersetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy is being specified.<br>See the operation documentation for the appropriate value for this field.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|callback|query|string|false|JSONP|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|$.xgafv|query|string|false|V1 error format.|
|alt|query|string|false|Data format for response.|
|access_token|query|string|false|OAuth access token.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|body|body|[GoogleIamV1__SetIamPolicyRequest](#schemagoogleiamv1__setiampolicyrequest)|false|none|
|» policy|body|[GoogleIamV1__Policy](#schemagoogleiamv1__policy)|false|REQUIRED: The complete policy to be applied to the `resource`. The size of<br>the policy is limited to a few 10s of KB. An empty policy is a<br>valid policy but certain Cloud Platform services (such as Projects)<br>might reject them.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="servicebrokersetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleIamV1__Policy](#schemagoogleiamv1__policy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## servicebroker.testIamPermissions

<a id="opIdservicebroker.testIamPermissions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:testIamPermissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "permissions": [
      "string"
    ]
  }'
```

`POST /v1beta1/{resource}:testIamPermissions`

Returns permissions that a caller has on the specified resource.
If the resource does not exist, this will return an empty set of
permissions, not a NOT_FOUND error.

Note: This operation is designed to be used for building permission-aware
UIs and command-line tools, not for authorization checking. This operation
may "fail open" without warning.

> Body parameter

```json
{
  "permissions": [
    "string"
  ]
}
```

<h3 id="servicebrokertestiampermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy detail is being requested.<br>See the operation documentation for the appropriate value for this field.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|callback|query|string|false|JSONP|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|$.xgafv|query|string|false|V1 error format.|
|alt|query|string|false|Data format for response.|
|access_token|query|string|false|OAuth access token.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|body|body|[GoogleIamV1__TestIamPermissionsRequest](#schemagoogleiamv1__testiampermissionsrequest)|false|none|
|» permissions|body|[string]|false|The set of permissions to check for the `resource`. Permissions with<br>wildcards (such as '*' or 'storage.*') are not allowed. For more<br>information see<br>[IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="servicebrokertestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleIamV1__TestIamPermissionsResponse](#schemagoogleiamv1__testiampermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_GoogleCloudServicebrokerV1beta1__Binding">GoogleCloudServicebrokerV1beta1__Binding</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudservicebrokerv1beta1__binding"></a>
<a id="schema_GoogleCloudServicebrokerV1beta1__Binding"></a>
<a id="tocSgooglecloudservicebrokerv1beta1__binding"></a>
<a id="tocsgooglecloudservicebrokerv1beta1__binding"></a>

```json
{
  "bind_resource": {
    "property1": null,
    "property2": null
  },
  "binding_id": "string",
  "createTime": "string",
  "deploymentName": "string",
  "parameters": {
    "property1": null,
    "property2": null
  },
  "plan_id": "string",
  "resourceName": "string",
  "service_id": "string"
}
```

Describes the binding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bind_resource|object|false|none|A JSON object that contains data for platform resources associated with<br>the binding to be created.|
|binding_id|string|false|none|The id of the binding. Must be unique within GCP project.<br>Maximum length is 64, GUID recommended.<br>Required.|
|createTime|string(google-datetime)|false|none|Output only. Timestamp for when the binding was created.|
|deploymentName|string|false|none|Output only. String containing the Deployment Manager deployment name that was created<br>for this binding,|
|parameters|object|false|none|Configuration options for the service binding.|
|plan_id|string|false|none|The ID of the plan. See `Service` and `Plan` resources for details.<br>Maximum length is 64, GUID recommended.<br>Required.|
|resourceName|string|false|none|Output only. The resource name of the binding, e.g.<br>projects/project_id/brokers/broker_id/service_instances/instance_id/bindings/binding_id.|
|service_id|string|false|none|The id of the service. Must be a valid identifier of a service<br>contained in the list from a `ListServices()` call.<br>Maximum length is 64, GUID recommended.<br>Required.|

<h2 id="tocS_GoogleCloudServicebrokerV1beta1__Broker">GoogleCloudServicebrokerV1beta1__Broker</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudservicebrokerv1beta1__broker"></a>
<a id="schema_GoogleCloudServicebrokerV1beta1__Broker"></a>
<a id="tocSgooglecloudservicebrokerv1beta1__broker"></a>
<a id="tocsgooglecloudservicebrokerv1beta1__broker"></a>

```json
{
  "createTime": "string",
  "name": "string",
  "title": "string",
  "url": "string"
}
```

Broker represents a consumable collection of Service Registry catalogs
exposed as an OSB Broker.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Output only. Timestamp for when the broker was created.|
|name|string|false|none|Name of the broker in the format:<br><projects>/<project-id>/brokers/<broker>.<br>This allows for multiple brokers per project which can be used to<br>enable having custom brokers per GKE cluster, for example.|
|title|string|false|none|User friendly title of the broker.<br>Limited to 1024 characters. Requests with longer titles will be rejected.|
|url|string|false|none|Output only. URL of the broker OSB-compliant endpoint, for example:<br>https://servicebroker.googleapis.com/projects/<project>/brokers/<broker>|

<h2 id="tocS_GoogleCloudServicebrokerV1beta1__CreateBindingResponse">GoogleCloudServicebrokerV1beta1__CreateBindingResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudservicebrokerv1beta1__createbindingresponse"></a>
<a id="schema_GoogleCloudServicebrokerV1beta1__CreateBindingResponse"></a>
<a id="tocSgooglecloudservicebrokerv1beta1__createbindingresponse"></a>
<a id="tocsgooglecloudservicebrokerv1beta1__createbindingresponse"></a>

```json
{
  "credentials": {
    "property1": null,
    "property2": null
  },
  "description": "string",
  "operation": "string",
  "route_service_url": "string",
  "syslog_drain_url": "string",
  "volume_mounts": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

Response for the `CreateBinding()` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|credentials|object|false|none|Credentials to use the binding.|
|description|string|false|none|Used to communicate description of the response. Usually for non-standard<br>error codes.<br>https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors|
|operation|string|false|none|If broker executes operation asynchronously, this is the operation ID that<br>can be polled to check the completion status of said operation.<br>This broker always executes all create/delete operations asynchronously.|
|route_service_url|string|false|none|A URL to which the platform may proxy requests for the address sent with<br>bind_resource.route|
|syslog_drain_url|string|false|none|From where to read system logs.|
|volume_mounts|[object]|false|none|An array of configuration for mounting volumes.|

<h2 id="tocS_GoogleCloudServicebrokerV1beta1__CreateServiceInstanceResponse">GoogleCloudServicebrokerV1beta1__CreateServiceInstanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudservicebrokerv1beta1__createserviceinstanceresponse"></a>
<a id="schema_GoogleCloudServicebrokerV1beta1__CreateServiceInstanceResponse"></a>
<a id="tocSgooglecloudservicebrokerv1beta1__createserviceinstanceresponse"></a>
<a id="tocsgooglecloudservicebrokerv1beta1__createserviceinstanceresponse"></a>

```json
{
  "description": "string",
  "operation": "string"
}
```

Response for the `CreateServiceInstance()` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Used to communicate description of the response. Usually for non-standard<br>error codes.<br>https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors|
|operation|string|false|none|If broker executes operation asynchronously, this is the operation ID that<br>can be polled to check the completion status of said operation.<br>This broker always will return a non-empty operation on success.|

<h2 id="tocS_GoogleCloudServicebrokerV1beta1__DashboardClient">GoogleCloudServicebrokerV1beta1__DashboardClient</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudservicebrokerv1beta1__dashboardclient"></a>
<a id="schema_GoogleCloudServicebrokerV1beta1__DashboardClient"></a>
<a id="tocSgooglecloudservicebrokerv1beta1__dashboardclient"></a>
<a id="tocsgooglecloudservicebrokerv1beta1__dashboardclient"></a>

```json
{
  "id": "string",
  "redirect_uri": "string",
  "secret": "string"
}
```

Message containing information required to activate Dashboard SSO feature.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The id of the Oauth client that the dashboard will use.|
|redirect_uri|string|false|none|A URI for the service dashboard.<br>Validated by the OAuth token server when the dashboard requests a token.|
|secret|string|false|none|A secret for the dashboard client.|

<h2 id="tocS_GoogleCloudServicebrokerV1beta1__DeleteBindingResponse">GoogleCloudServicebrokerV1beta1__DeleteBindingResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudservicebrokerv1beta1__deletebindingresponse"></a>
<a id="schema_GoogleCloudServicebrokerV1beta1__DeleteBindingResponse"></a>
<a id="tocSgooglecloudservicebrokerv1beta1__deletebindingresponse"></a>
<a id="tocsgooglecloudservicebrokerv1beta1__deletebindingresponse"></a>

```json
{
  "description": "string",
  "operation": "string"
}
```

Response for the `DeleteBinding()` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Used to communicate description of the response. Usually for non-standard<br>error codes.<br>https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors|
|operation|string|false|none|If broker executes operation asynchronously, this is the operation ID that<br>can be polled to check the completion status of said operation.|

<h2 id="tocS_GoogleCloudServicebrokerV1beta1__DeleteServiceInstanceResponse">GoogleCloudServicebrokerV1beta1__DeleteServiceInstanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudservicebrokerv1beta1__deleteserviceinstanceresponse"></a>
<a id="schema_GoogleCloudServicebrokerV1beta1__DeleteServiceInstanceResponse"></a>
<a id="tocSgooglecloudservicebrokerv1beta1__deleteserviceinstanceresponse"></a>
<a id="tocsgooglecloudservicebrokerv1beta1__deleteserviceinstanceresponse"></a>

```json
{
  "description": "string",
  "operation": "string"
}
```

Response for the `DeleteServiceInstance()` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Used to communicate description of the response. Usually for non-standard<br>error codes.<br>https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors|
|operation|string|false|none|If broker executes operation asynchronously, this is the operation ID that<br>can be polled to check the completion status of said operation.|

<h2 id="tocS_GoogleCloudServicebrokerV1beta1__GetBindingResponse">GoogleCloudServicebrokerV1beta1__GetBindingResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudservicebrokerv1beta1__getbindingresponse"></a>
<a id="schema_GoogleCloudServicebrokerV1beta1__GetBindingResponse"></a>
<a id="tocSgooglecloudservicebrokerv1beta1__getbindingresponse"></a>
<a id="tocsgooglecloudservicebrokerv1beta1__getbindingresponse"></a>

```json
{
  "credentials": {
    "property1": null,
    "property2": null
  },
  "deploymentName": "string",
  "description": "string",
  "resourceName": "string",
  "route_service_url": "string",
  "syslog_drain_url": "string",
  "volume_mounts": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

Response for the `GetBinding()` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|credentials|object|false|none|Credentials to use the binding.|
|deploymentName|string|false|none|String containing the Deployment Manager deployment name that was created<br>for this binding,|
|description|string|false|none|Used to communicate description of the response. Usually for non-standard<br>error codes.<br>https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors|
|resourceName|string|false|none|Output only. The resource name of the binding, e.g.<br>projects/project_id/brokers/broker_id/service_instances/instance_id/bindings/binding_id.|
|route_service_url|string|false|none|A URL to which the platform may proxy requests for the address sent with<br>bind_resource.route|
|syslog_drain_url|string|false|none|From where to read system logs.|
|volume_mounts|[object]|false|none|An array of configurations for mounting volumes.|

<h2 id="tocS_GoogleCloudServicebrokerV1beta1__ListBindingsResponse">GoogleCloudServicebrokerV1beta1__ListBindingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudservicebrokerv1beta1__listbindingsresponse"></a>
<a id="schema_GoogleCloudServicebrokerV1beta1__ListBindingsResponse"></a>
<a id="tocSgooglecloudservicebrokerv1beta1__listbindingsresponse"></a>
<a id="tocsgooglecloudservicebrokerv1beta1__listbindingsresponse"></a>

```json
{
  "bindings": [
    {
      "bind_resource": {
        "property1": null,
        "property2": null
      },
      "binding_id": "string",
      "createTime": "string",
      "deploymentName": "string",
      "parameters": {
        "property1": null,
        "property2": null
      },
      "plan_id": "string",
      "resourceName": "string",
      "service_id": "string"
    }
  ],
  "description": "string",
  "nextPageToken": "string"
}
```

The response for the `ListBindings()` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bindings|[[GoogleCloudServicebrokerV1beta1__Binding](#schemagooglecloudservicebrokerv1beta1__binding)]|false|none|The list of bindings in the instance.|
|description|string|false|none|Used to communicate description of the response. Usually for non-standard<br>error codes.<br>https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors|
|nextPageToken|string|false|none|This token allows you to get the next page of results for list requests.<br>If the number of results is larger than `pageSize`, use the `nextPageToken`<br>as a value for the query parameter `pageToken` in the next list request.<br>Subsequent list requests will have their own `nextPageToken` to continue<br>paging through the results|

<h2 id="tocS_GoogleCloudServicebrokerV1beta1__ListBrokersResponse">GoogleCloudServicebrokerV1beta1__ListBrokersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudservicebrokerv1beta1__listbrokersresponse"></a>
<a id="schema_GoogleCloudServicebrokerV1beta1__ListBrokersResponse"></a>
<a id="tocSgooglecloudservicebrokerv1beta1__listbrokersresponse"></a>
<a id="tocsgooglecloudservicebrokerv1beta1__listbrokersresponse"></a>

```json
{
  "brokers": [
    {
      "createTime": "string",
      "name": "string",
      "title": "string",
      "url": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response for the `ListBrokers()` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brokers|[[GoogleCloudServicebrokerV1beta1__Broker](#schemagooglecloudservicebrokerv1beta1__broker)]|false|none|The list of brokers in the container.|
|nextPageToken|string|false|none|This token allows you to get the next page of results for list requests.<br>If the number of results is larger than `pageSize`, use the `nextPageToken`<br>as a value for the query parameter `pageToken` in the next list request.<br>Subsequent list requests will have their own `nextPageToken` to continue<br>paging through the results|

<h2 id="tocS_GoogleCloudServicebrokerV1beta1__ListCatalogResponse">GoogleCloudServicebrokerV1beta1__ListCatalogResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudservicebrokerv1beta1__listcatalogresponse"></a>
<a id="schema_GoogleCloudServicebrokerV1beta1__ListCatalogResponse"></a>
<a id="tocSgooglecloudservicebrokerv1beta1__listcatalogresponse"></a>
<a id="tocsgooglecloudservicebrokerv1beta1__listcatalogresponse"></a>

```json
{
  "description": "string",
  "nextPageToken": "string",
  "services": [
    {
      "bindable": true,
      "binding_retrievable": true,
      "bindings_retrievable": true,
      "dashboard_client": {
        "id": "string",
        "redirect_uri": "string",
        "secret": "string"
      },
      "description": "string",
      "id": "string",
      "instances_retrievable": true,
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "plan_updateable": true,
      "plans": [
        {
          "bindable": true,
          "description": "string",
          "free": true,
          "id": "string",
          "metadata": {
            "property1": null,
            "property2": null
          },
          "name": "string",
          "schemas": {
            "property1": null,
            "property2": null
          }
        }
      ],
      "tags": [
        "string"
      ]
    }
  ]
}
```

Response message for the `ListCatalog()` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Used to communicate description of the response. Usually for non-standard<br>error codes.<br>https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors|
|nextPageToken|string|false|none|This token allows you to get the next page of results for list requests.<br>If the number of results is larger than `pageSize`, use the `nextPageToken`<br>as a value for the query parameter `pageToken` in the next list request.<br>Subsequent list requests will have their own `nextPageToken` to continue<br>paging through the results|
|services|[[GoogleCloudServicebrokerV1beta1__Service](#schemagooglecloudservicebrokerv1beta1__service)]|false|none|The services available for the requested GCP project.|

<h2 id="tocS_GoogleCloudServicebrokerV1beta1__ListServiceInstancesResponse">GoogleCloudServicebrokerV1beta1__ListServiceInstancesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudservicebrokerv1beta1__listserviceinstancesresponse"></a>
<a id="schema_GoogleCloudServicebrokerV1beta1__ListServiceInstancesResponse"></a>
<a id="tocSgooglecloudservicebrokerv1beta1__listserviceinstancesresponse"></a>
<a id="tocsgooglecloudservicebrokerv1beta1__listserviceinstancesresponse"></a>

```json
{
  "description": "string",
  "instances": [
    {
      "context": {
        "property1": null,
        "property2": null
      },
      "createTime": "string",
      "deploymentName": "string",
      "description": "string",
      "instance_id": "string",
      "organization_guid": "string",
      "parameters": {
        "property1": null,
        "property2": null
      },
      "plan_id": "string",
      "previous_values": {
        "property1": null,
        "property2": null
      },
      "resourceName": "string",
      "service_id": "string",
      "space_guid": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response for the `ListServiceInstances()` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Used to communicate description of the response. Usually for non-standard<br>error codes.<br>https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors|
|instances|[[GoogleCloudServicebrokerV1beta1__ServiceInstance](#schemagooglecloudservicebrokerv1beta1__serviceinstance)]|false|none|The list of instances in the broker.|
|nextPageToken|string|false|none|This token allows you to get the next page of results for list requests.<br>If the number of results is larger than `pageSize`, use the `nextPageToken`<br>as a value for the query parameter `pageToken` in the next list request.<br>Subsequent list requests will have their own `nextPageToken` to continue<br>paging through the results|

<h2 id="tocS_GoogleCloudServicebrokerV1beta1__Operation">GoogleCloudServicebrokerV1beta1__Operation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudservicebrokerv1beta1__operation"></a>
<a id="schema_GoogleCloudServicebrokerV1beta1__Operation"></a>
<a id="tocSgooglecloudservicebrokerv1beta1__operation"></a>
<a id="tocsgooglecloudservicebrokerv1beta1__operation"></a>

```json
{
  "description": "string",
  "state": "string"
}
```

Describes a long running operation, which conforms to OpenService API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Optional description of the Operation state.|
|state|string|false|none|The state of the operation.<br>Valid values are: "in progress", "succeeded", and "failed".|

<h2 id="tocS_GoogleCloudServicebrokerV1beta1__Plan">GoogleCloudServicebrokerV1beta1__Plan</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudservicebrokerv1beta1__plan"></a>
<a id="schema_GoogleCloudServicebrokerV1beta1__Plan"></a>
<a id="tocSgooglecloudservicebrokerv1beta1__plan"></a>
<a id="tocsgooglecloudservicebrokerv1beta1__plan"></a>

```json
{
  "bindable": true,
  "description": "string",
  "free": true,
  "id": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "schemas": {
    "property1": null,
    "property2": null
  }
}
```

Plan message describes a Service Plan.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bindable|boolean|false|none|Specifies whether instances of the service can be bound to applications.<br>If not specified, `Service.bindable` will be presumed.|
|description|string|false|none|Textual description of the plan. Optional.|
|free|boolean|false|none|Whether the service is free.|
|id|string|false|none|ID is a globally unique identifier used to uniquely identify the plan.<br>User must make no presumption about the format of this field.|
|metadata|object|false|none|A list of metadata for a service offering.<br>Metadata is an arbitrary JSON object.|
|name|string|false|none|User friendly name of the plan.<br>The name must be globally unique within GCP project.<br>Note, which is different from ("This must be globally unique within a<br>platform marketplace").|
|schemas|object|false|none|Schema definitions for service instances and bindings for the plan.|

<h2 id="tocS_GoogleCloudServicebrokerV1beta1__Service">GoogleCloudServicebrokerV1beta1__Service</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudservicebrokerv1beta1__service"></a>
<a id="schema_GoogleCloudServicebrokerV1beta1__Service"></a>
<a id="tocSgooglecloudservicebrokerv1beta1__service"></a>
<a id="tocsgooglecloudservicebrokerv1beta1__service"></a>

```json
{
  "bindable": true,
  "binding_retrievable": true,
  "bindings_retrievable": true,
  "dashboard_client": {
    "id": "string",
    "redirect_uri": "string",
    "secret": "string"
  },
  "description": "string",
  "id": "string",
  "instances_retrievable": true,
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "plan_updateable": true,
  "plans": [
    {
      "bindable": true,
      "description": "string",
      "free": true,
      "id": "string",
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "schemas": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "tags": [
    "string"
  ]
}
```

The resource model mostly follows the Open Service Broker API, as
described here:
https://github.com/openservicebrokerapi/servicebroker/blob/master/_spec.md
Though due to Google Specifics it has additional optional fields.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bindable|boolean|false|none|Specifies whether instances of the service can be bound to applications.<br>Required.|
|binding_retrievable|boolean|false|none|Whether the service provides an endpoint to get service bindings.|
|bindings_retrievable|boolean|false|none|Whether the service provides an endpoint to get service bindings.|
|dashboard_client|[GoogleCloudServicebrokerV1beta1__DashboardClient](#schemagooglecloudservicebrokerv1beta1__dashboardclient)|false|none|Information to activate Dashboard SSO feature.|
|description|string|false|none|Textual description of the service. Required.|
|id|string|false|none|ID is a globally unique identifier used to uniquely identify the service.<br>ID is an opaque string.|
|instances_retrievable|boolean|false|none|Whether the service provides an endpoint to get service instances.|
|metadata|object|false|none|A list of metadata for a service offering.<br>Metadata is an arbitrary JSON object.|
|name|string|false|none|User friendly service name.<br>Name must match [a-z0-9]+ regexp.<br>The name must be globally unique within GCP project.<br>Note, which is different from ("This must be globally unique within a<br>platform marketplace").<br>Required.|
|plan_updateable|boolean|false|none|Whether the service supports upgrade/downgrade for some plans.|
|plans|[[GoogleCloudServicebrokerV1beta1__Plan](#schemagooglecloudservicebrokerv1beta1__plan)]|false|none|A list of plans for this service.<br>At least one plan is required.|
|tags|[string]|false|none|Tags provide a flexible mechanism to expose a classification, attribute, or<br>base technology of a service.|

<h2 id="tocS_GoogleCloudServicebrokerV1beta1__ServiceInstance">GoogleCloudServicebrokerV1beta1__ServiceInstance</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudservicebrokerv1beta1__serviceinstance"></a>
<a id="schema_GoogleCloudServicebrokerV1beta1__ServiceInstance"></a>
<a id="tocSgooglecloudservicebrokerv1beta1__serviceinstance"></a>
<a id="tocsgooglecloudservicebrokerv1beta1__serviceinstance"></a>

```json
{
  "context": {
    "property1": null,
    "property2": null
  },
  "createTime": "string",
  "deploymentName": "string",
  "description": "string",
  "instance_id": "string",
  "organization_guid": "string",
  "parameters": {
    "property1": null,
    "property2": null
  },
  "plan_id": "string",
  "previous_values": {
    "property1": null,
    "property2": null
  },
  "resourceName": "string",
  "service_id": "string",
  "space_guid": "string"
}
```

Message describing inputs to Provision and Update Service instance requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|object|false|none|Platform specific contextual information under which the service instance<br>is to be provisioned. This replaces organization_guid and space_guid.<br>But can also contain anything.<br>Currently only used for logging context information.|
|createTime|string(google-datetime)|false|none|Output only. Timestamp for when the instance was created.|
|deploymentName|string|false|none|Output only. String containing the Deployment Manager deployment name that was created<br>for this instance,|
|description|string|false|none|To return errors when GetInstance call is done via HTTP to be unified with<br>other methods.|
|instance_id|string|false|none|The id of the service instance. Must be unique within GCP project.<br>Maximum length is 64, GUID recommended.<br>Required.|
|organization_guid|string|false|none|The platform GUID for the organization under which the service is to be<br>provisioned.<br>Required.|
|parameters|object|false|none|Configuration options for the service instance.<br>Parameters is JSON object serialized to string.|
|plan_id|string|false|none|The ID of the plan. See `Service` and `Plan` resources for details.<br>Maximum length is 64, GUID recommended.<br>Required.|
|previous_values|object|false|none|Used only in UpdateServiceInstance request to optionally specify previous<br>fields.|
|resourceName|string|false|none|Output only. The resource name of the instance, e.g.<br>projects/project_id/brokers/broker_id/service_instances/instance_id|
|service_id|string|false|none|The id of the service. Must be a valid identifier of a service<br>contained in the list from a `ListServices()` call.<br>Maximum length is 64, GUID recommended.<br>Required.|
|space_guid|string|false|none|The identifier for the project space within the platform organization.<br>Required.|

<h2 id="tocS_GoogleCloudServicebrokerV1beta1__UpdateServiceInstanceResponse">GoogleCloudServicebrokerV1beta1__UpdateServiceInstanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudservicebrokerv1beta1__updateserviceinstanceresponse"></a>
<a id="schema_GoogleCloudServicebrokerV1beta1__UpdateServiceInstanceResponse"></a>
<a id="tocSgooglecloudservicebrokerv1beta1__updateserviceinstanceresponse"></a>
<a id="tocsgooglecloudservicebrokerv1beta1__updateserviceinstanceresponse"></a>

```json
{
  "description": "string",
  "operation": "string"
}
```

Response for the `UpdateServiceInstance()` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Used to communicate description of the response. Usually for non-standard<br>error codes.<br>https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors|
|operation|string|false|none|If broker executes operation asynchronously, this is the operation ID that<br>can be polled to check the completion status of said operation.|

<h2 id="tocS_GoogleIamV1__Binding">GoogleIamV1__Binding</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1__binding"></a>
<a id="schema_GoogleIamV1__Binding"></a>
<a id="tocSgoogleiamv1__binding"></a>
<a id="tocsgoogleiamv1__binding"></a>

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

Associates `members` with a `role`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|condition|[GoogleType__Expr](#schemagoogletype__expr)|false|none|The condition that is associated with this binding.<br>NOTE: An unsatisfied condition will not allow user access via current<br>binding. Different bindings, including their conditions, are examined<br>independently.|
|members|[string]|false|none|Specifies the identities requesting access for a Cloud Platform resource.<br>`members` can have the following values:<br><br>* `allUsers`: A special identifier that represents anyone who is<br>   on the internet; with or without a Google account.<br><br>* `allAuthenticatedUsers`: A special identifier that represents anyone<br>   who is authenticated with a Google account or a service account.<br><br>* `user:{emailid}`: An email address that represents a specific Google<br>   account. For example, `alice@example.com` .<br><br><br>* `serviceAccount:{emailid}`: An email address that represents a service<br>   account. For example, `my-other-app@appspot.gserviceaccount.com`.<br><br>* `group:{emailid}`: An email address that represents a Google group.<br>   For example, `admins@example.com`.<br><br>* `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique<br>   identifier) representing a user that has been recently deleted. For<br>   example, `alice@example.com?uid=123456789012345678901`. If the user is<br>   recovered, this value reverts to `user:{emailid}` and the recovered user<br>   retains the role in the binding.<br><br>* `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus<br>   unique identifier) representing a service account that has been recently<br>   deleted. For example,<br>   `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`.<br>   If the service account is undeleted, this value reverts to<br>   `serviceAccount:{emailid}` and the undeleted service account retains the<br>   role in the binding.<br><br>* `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique<br>   identifier) representing a Google group that has been recently<br>   deleted. For example, `admins@example.com?uid=123456789012345678901`. If<br>   the group is recovered, this value reverts to `group:{emailid}` and the<br>   recovered group retains the role in the binding.<br><br><br>* `domain:{domain}`: The G Suite domain (primary) that represents all the    users of that domain. For example, `google.com` or `example.com`.<br><br>|
|role|string|false|none|Role that is assigned to `members`.<br>For example, `roles/viewer`, `roles/editor`, or `roles/owner`.|

<h2 id="tocS_GoogleIamV1__Policy">GoogleIamV1__Policy</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1__policy"></a>
<a id="schema_GoogleIamV1__Policy"></a>
<a id="tocSgoogleiamv1__policy"></a>
<a id="tocsgoogleiamv1__policy"></a>

```json
{
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

An Identity and Access Management (IAM) policy, which specifies access
controls for Google Cloud resources.


A `Policy` is a collection of `bindings`. A `binding` binds one or more
`members` to a single `role`. Members can be user accounts, service accounts,
Google groups, and domains (such as G Suite). A `role` is a named list of
permissions; each `role` can be an IAM predefined role or a user-created
custom role.

Optionally, a `binding` can specify a `condition`, which is a logical
expression that allows access to a resource only if the expression evaluates
to `true`. A condition can add constraints based on attributes of the
request, the resource, or both.

**JSON example:**

    {
      "bindings": [
        {
          "role": "roles/resourcemanager.organizationAdmin",
          "members": [
            "user:mike@example.com",
            "group:admins@example.com",
            "domain:google.com",
            "serviceAccount:my-project-id@appspot.gserviceaccount.com"
          ]
        },
        {
          "role": "roles/resourcemanager.organizationViewer",
          "members": ["user:eve@example.com"],
          "condition": {
            "title": "expirable access",
            "description": "Does not grant access after Sep 2020",
            "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')",
          }
        }
      ],
      "etag": "BwWWja0YfJA=",
      "version": 3
    }

**YAML example:**

    bindings:
    - members:
      - user:mike@example.com
      - group:admins@example.com
      - domain:google.com
      - serviceAccount:my-project-id@appspot.gserviceaccount.com
      role: roles/resourcemanager.organizationAdmin
    - members:
      - user:eve@example.com
      role: roles/resourcemanager.organizationViewer
      condition:
        title: expirable access
        description: Does not grant access after Sep 2020
        expression: request.time < timestamp('2020-10-01T00:00:00.000Z')
    - etag: BwWWja0YfJA=
    - version: 3

For a description of IAM and its features, see the
[IAM documentation](https://cloud.google.com/iam/docs/).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bindings|[[GoogleIamV1__Binding](#schemagoogleiamv1__binding)]|false|none|Associates a list of `members` to a `role`. Optionally, may specify a<br>`condition` that determines how and when the `bindings` are applied. Each<br>of the `bindings` must contain at least one member.|
|etag|string(byte)|false|none|`etag` is used for optimistic concurrency control as a way to help<br>prevent simultaneous updates of a policy from overwriting each other.<br>It is strongly suggested that systems make use of the `etag` in the<br>read-modify-write cycle to perform policy updates in order to avoid race<br>conditions: An `etag` is returned in the response to `getIamPolicy`, and<br>systems are expected to put that etag in the request to `setIamPolicy` to<br>ensure that their change will be applied to the same version of the policy.<br><br>**Important:** If you use IAM Conditions, you must include the `etag` field<br>whenever you call `setIamPolicy`. If you omit this field, then IAM allows<br>you to overwrite a version `3` policy with a version `1` policy, and all of<br>the conditions in the version `3` policy are lost.|
|version|integer(int32)|false|none|Specifies the format of the policy.<br><br>Valid values are `0`, `1`, and `3`. Requests that specify an invalid value<br>are rejected.<br><br>Any operation that affects conditional role bindings must specify version<br>`3`. This requirement applies to the following operations:<br><br>* Getting a policy that includes a conditional role binding<br>* Adding a conditional role binding to a policy<br>* Changing a conditional role binding in a policy<br>* Removing any role binding, with or without a condition, from a policy<br>  that includes conditions<br><br>**Important:** If you use IAM Conditions, you must include the `etag` field<br>whenever you call `setIamPolicy`. If you omit this field, then IAM allows<br>you to overwrite a version `3` policy with a version `1` policy, and all of<br>the conditions in the version `3` policy are lost.<br><br>If a policy does not include any conditions, operations on that policy may<br>specify any valid version or leave the field unset.|

<h2 id="tocS_GoogleIamV1__SetIamPolicyRequest">GoogleIamV1__SetIamPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1__setiampolicyrequest"></a>
<a id="schema_GoogleIamV1__SetIamPolicyRequest"></a>
<a id="tocSgoogleiamv1__setiampolicyrequest"></a>
<a id="tocsgoogleiamv1__setiampolicyrequest"></a>

```json
{
  "policy": {
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
}
```

Request message for `SetIamPolicy` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|[GoogleIamV1__Policy](#schemagoogleiamv1__policy)|false|none|REQUIRED: The complete policy to be applied to the `resource`. The size of<br>the policy is limited to a few 10s of KB. An empty policy is a<br>valid policy but certain Cloud Platform services (such as Projects)<br>might reject them.|

<h2 id="tocS_GoogleIamV1__TestIamPermissionsRequest">GoogleIamV1__TestIamPermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1__testiampermissionsrequest"></a>
<a id="schema_GoogleIamV1__TestIamPermissionsRequest"></a>
<a id="tocSgoogleiamv1__testiampermissionsrequest"></a>
<a id="tocsgoogleiamv1__testiampermissionsrequest"></a>

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
|permissions|[string]|false|none|The set of permissions to check for the `resource`. Permissions with<br>wildcards (such as '*' or 'storage.*') are not allowed. For more<br>information see<br>[IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).|

<h2 id="tocS_GoogleIamV1__TestIamPermissionsResponse">GoogleIamV1__TestIamPermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1__testiampermissionsresponse"></a>
<a id="schema_GoogleIamV1__TestIamPermissionsResponse"></a>
<a id="tocSgoogleiamv1__testiampermissionsresponse"></a>
<a id="tocsgoogleiamv1__testiampermissionsresponse"></a>

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
|permissions|[string]|false|none|A subset of `TestPermissionsRequest.permissions` that the caller is<br>allowed.|

<h2 id="tocS_GoogleProtobuf__Empty">GoogleProtobuf__Empty</h2>
<!-- backwards compatibility -->
<a id="schemagoogleprotobuf__empty"></a>
<a id="schema_GoogleProtobuf__Empty"></a>
<a id="tocSgoogleprotobuf__empty"></a>
<a id="tocsgoogleprotobuf__empty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated
empty messages in your APIs. A typical example is to use it as the request
or the response type of an API method. For instance:

    service Foo {
      rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
    }

The JSON representation for `Empty` is empty JSON object `{}`.

<h2 id="tocS_GoogleType__Expr">GoogleType__Expr</h2>
<!-- backwards compatibility -->
<a id="schemagoogletype__expr"></a>
<a id="schema_GoogleType__Expr"></a>
<a id="tocSgoogletype__expr"></a>
<a id="tocsgoogletype__expr"></a>

```json
{
  "description": "string",
  "expression": "string",
  "location": "string",
  "title": "string"
}
```

Represents an expression text. Example:

    title: "User account presence"
    description: "Determines whether the request has a user account"
    expression: "size(request.user) > 0"

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|An optional description of the expression. This is a longer text which<br>describes the expression, e.g. when hovered over it in a UI.|
|expression|string|false|none|Textual representation of an expression in<br>Common Expression Language syntax.<br><br>The application context of the containing message determines which<br>well-known feature set of CEL is supported.|
|location|string|false|none|An optional string indicating the location of the expression for error<br>reporting, e.g. a file name and a position in the file.|
|title|string|false|none|An optional title for the expression, i.e. a short string describing<br>its purpose. This can be used e.g. in UIs which allow to enter the<br>expression.|
