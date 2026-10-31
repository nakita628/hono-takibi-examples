<h1 id="cloud-healthcare-api">Cloud Healthcare API v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Manage, store, and access healthcare data in Google Cloud Platform.

Base URLs:

* <a href="https://healthcare.googleapis.com/">https://healthcare.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/healthcare">External documentation</a>

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

<h1 id="cloud-healthcare-api-projects">projects</h1>

## healthcare.projects.locations.datasets.consentStores.checkDataAccess

<a id="opIdhealthcare.projects.locations.datasets.consentStores.checkDataAccess"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:checkDataAccess \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "consentList": {
      "consents": [
        "string"
      ]
    },
    "dataId": "string",
    "requestAttributes": {
      "property1": "string",
      "property2": "string"
    },
    "responseView": "RESPONSE_VIEW_UNSPECIFIED"
  }'
```

`POST /v1beta1/{consentStore}:checkDataAccess`

Checks if a particular data_id of a User data mapping in the specified consent store is consented for the specified use.

> Body parameter

```json
{
  "consentList": {
    "consents": [
      "string"
    ]
  },
  "dataId": "string",
  "requestAttributes": {
    "property1": "string",
    "property2": "string"
  },
  "responseView": "RESPONSE_VIEW_UNSPECIFIED"
}
```

<h3 id="healthcareprojectslocationsdatasetsconsentstorescheckdataaccess-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|consentStore|path|string|true|Required. Name of the consent store where the requested data_id is stored, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}`.|
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
|body|body|[CheckDataAccessRequest](#schemacheckdataaccessrequest)|false|none|
|» consentList|body|[ConsentList](#schemaconsentlist)|false|Optional. Specific Consents to evaluate the access request against. These Consents must have the same `user_id` as the evaluated User data mapping, must exist in the current `consent_store`, and have a `state` of either `ACTIVE` or `DRAFT`. A maximum of 100 Consents can be provided here. If no selection is specified, the access request is evaluated against all `ACTIVE` unexpired Consents with the same `user_id` as the evaluated User data mapping.|
|» dataId|body|string|false|Required. The unique identifier of the resource to check access for. This identifier must correspond to a User data mapping in the given consent store.|
|» requestAttributes|body|object|false|The values of request attributes associated with this access request.|
|» » **additionalProperties**|body|string|false|none|
|» responseView|body|string|false|Optional. The view for CheckDataAccessResponse. If unspecified, defaults to `BASIC` and returns `consented` as `TRUE` or `FALSE`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» responseView|RESPONSE_VIEW_UNSPECIFIED|
|» responseView|BASIC|
|» responseView|FULL|

> Example responses

> 200 Response

```json
{
  "consentDetails": {
    "property1": {
      "evaluationResult": "EVALUATION_RESULT_UNSPECIFIED"
    },
    "property2": {
      "evaluationResult": "EVALUATION_RESULT_UNSPECIFIED"
    }
  },
  "consented": true
}
```

<h3 id="healthcareprojectslocationsdatasetsconsentstorescheckdataaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CheckDataAccessResponse](#schemacheckdataaccessresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.consentStores.evaluateUserConsents

<a id="opIdhealthcare.projects.locations.datasets.consentStores.evaluateUserConsents"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:evaluateUserConsents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "consentList": {
      "consents": [
        "string"
      ]
    },
    "pageSize": 0,
    "pageToken": "string",
    "requestAttributes": {
      "property1": "string",
      "property2": "string"
    },
    "resourceAttributes": {
      "property1": "string",
      "property2": "string"
    },
    "responseView": "RESPONSE_VIEW_UNSPECIFIED",
    "userId": "string"
  }'
```

`POST /v1beta1/{consentStore}:evaluateUserConsents`

Evaluates the user's Consents for all matching User data mappings. Note: User data mappings are indexed asynchronously, which can cause a slight delay between the time mappings are created or updated and when they are included in EvaluateUserConsents results.

> Body parameter

```json
{
  "consentList": {
    "consents": [
      "string"
    ]
  },
  "pageSize": 0,
  "pageToken": "string",
  "requestAttributes": {
    "property1": "string",
    "property2": "string"
  },
  "resourceAttributes": {
    "property1": "string",
    "property2": "string"
  },
  "responseView": "RESPONSE_VIEW_UNSPECIFIED",
  "userId": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetsconsentstoresevaluateuserconsents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|consentStore|path|string|true|Required. Name of the consent store to retrieve User data mappings from.|
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
|body|body|[EvaluateUserConsentsRequest](#schemaevaluateuserconsentsrequest)|false|none|
|» consentList|body|[ConsentList](#schemaconsentlist)|false|Optional. Specific Consents to evaluate the access request against. These Consents must have the same `user_id` as the User data mappings being evalauted, must exist in the current `consent_store`, and must have a `state` of either `ACTIVE` or `DRAFT`. A maximum of 100 Consents can be provided here. If unspecified, all `ACTIVE` unexpired Consents in the current `consent_store` will be evaluated.|
|» pageSize|body|integer(int32)|false|Optional. Limit on the number of User data mappings to return in a single response. If not specified, 100 is used. May not be larger than 1000.|
|» pageToken|body|string|false|Optional. Token to retrieve the next page of results, or empty to get the first page.|
|» requestAttributes|body|object|false|Required. The values of request attributes associated with this access request.|
|» » **additionalProperties**|body|string|false|none|
|» resourceAttributes|body|object|false|Optional. The values of resource attributes associated with the resources being requested. If no values are specified, then all resources are queried.|
|» » **additionalProperties**|body|string|false|none|
|» responseView|body|string|false|Optional. The view for EvaluateUserConsentsResponse. If unspecified, defaults to `BASIC` and returns `consented` as `TRUE` or `FALSE`.|
|» userId|body|string|false|Required. User ID to evaluate consents for.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» responseView|RESPONSE_VIEW_UNSPECIFIED|
|» responseView|BASIC|
|» responseView|FULL|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "results": [
    {
      "consentDetails": {
        "property1": {
          "evaluationResult": "EVALUATION_RESULT_UNSPECIFIED"
        },
        "property2": {
          "evaluationResult": "EVALUATION_RESULT_UNSPECIFIED"
        }
      },
      "consented": true,
      "dataId": "string"
    }
  ]
}
```

<h3 id="healthcareprojectslocationsdatasetsconsentstoresevaluateuserconsents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[EvaluateUserConsentsResponse](#schemaevaluateuserconsentsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.consentStores.queryAccessibleData

<a id="opIdhealthcare.projects.locations.datasets.consentStores.queryAccessibleData"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:queryAccessibleData \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "gcsDestination": {
      "uriPrefix": "string"
    },
    "requestAttributes": {
      "property1": "string",
      "property2": "string"
    },
    "resourceAttributes": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v1beta1/{consentStore}:queryAccessibleData`

Queries all data_ids that are consented for a specified use in the given consent store and writes them to a specified destination. The returned Operation includes a progress counter for the number of User data mappings processed. If the request is successful, a detailed response is returned of type QueryAccessibleDataResponse, contained in the response field when the operation finishes. The metadata field type is OperationMetadata. Errors are logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)). For example, the following sample log entry shows a `failed to evaluate consent policy` error that occurred during a QueryAccessibleData call to consent store `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}`. ```json jsonPayload: { @type: "type.googleapis.com/google.cloud.healthcare.logging.QueryAccessibleDataLogEntry" error: { code: 9 message: "failed to evaluate consent policy" } resourceName: "projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consents/{consent_id}" } logName: "projects/{project_id}/logs/healthcare.googleapis.com%2Fquery_accessible_data" operation: { id: "projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/operations/{operation_id}" producer: "healthcare.googleapis.com/QueryAccessibleData" } receiveTimestamp: "TIMESTAMP" resource: { labels: { consent_store_id: "{consent_store_id}" dataset_id: "{dataset_id}" location: "{location_id}" project_id: "{project_id}" } type: "healthcare_consent_store" } severity: "ERROR" timestamp: "TIMESTAMP" ```

> Body parameter

```json
{
  "gcsDestination": {
    "uriPrefix": "string"
  },
  "requestAttributes": {
    "property1": "string",
    "property2": "string"
  },
  "resourceAttributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="healthcareprojectslocationsdatasetsconsentstoresqueryaccessibledata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|consentStore|path|string|true|Required. Name of the consent store to retrieve User data mappings from.|
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
|body|body|[QueryAccessibleDataRequest](#schemaqueryaccessibledatarequest)|false|none|
|» gcsDestination|body|[GoogleCloudHealthcareV1beta1ConsentGcsDestination](#schemagooglecloudhealthcarev1beta1consentgcsdestination)|false|The Cloud Storage destination. The Cloud Healthcare API service account must have the `roles/storage.objectAdmin` Cloud IAM role for this Cloud Storage location. The object name is in the following format: query-accessible-data-result-{operation_id}.txt where each line contains a single data_id.|
|» requestAttributes|body|object|false|The values of request attributes associated with this access request.|
|» » **additionalProperties**|body|string|false|none|
|» resourceAttributes|body|object|false|Optional. The values of resource attributes associated with the type of resources being requested. If no values are specified, then all resource types are included in the output.|
|» » **additionalProperties**|body|string|false|none|

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

<h3 id="healthcareprojectslocationsdatasetsconsentstoresqueryaccessibledata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.operations.get

<a id="opIdhealthcare.projects.locations.datasets.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<h3 id="healthcareprojectslocationsdatasetsoperationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource.|
|view|query|string|false|Specifies which parts of the Message resource to return in the response. When unspecified, equivalent to FULL.|
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
|view|MESSAGE_VIEW_UNSPECIFIED|
|view|RAW_ONLY|
|view|PARSED_ONLY|
|view|FULL|
|view|SCHEMATIZED_ONLY|
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

<h3 id="healthcareprojectslocationsdatasetsoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.fhirStores.fhir.update

<a id="opIdhealthcare.projects.locations.datasets.fhirStores.fhir.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
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

`PUT /v1beta1/{name}`

Updates the entire contents of a resource. Implements the FHIR standard update interaction ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/http.html#update), [STU3](https://hl7.org/implement/standards/fhir/STU3/http.html#update), [R4](https://hl7.org/implement/standards/fhir/R4/http.html#update)). If the specified resource does not exist and the FHIR store has enable_update_create set, creates the resource with the client-specified ID. It is strongly advised not to include or encode any sensitive data such as patient identifiers in client-specified resource IDs. Those IDs are part of the FHIR resource path recorded in Cloud Audit Logs and Pub/Sub notifications. Those IDs can also be contained in reference fields within other resources. The request body must contain a JSON-encoded FHIR resource, and the request headers must contain `Content-Type: application/fhir+json`. The resource must contain an `id` element having an identical value to the ID in the REST path of the request. On success, the response body contains a JSON-encoded representation of the updated resource, including the server-assigned version ID. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. For samples that show how to call `update`, see [Updating a FHIR resource](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#updating_a_fhir_resource).

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

<h3 id="healthcareprojectslocationsdatasetsfhirstoresfhirupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the resource to update.|
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
|body|body|[HttpBody](#schemahttpbody)|false|none|
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

<h3 id="healthcareprojectslocationsdatasetsfhirstoresfhirupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[HttpBody](#schemahttpbody)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.hl7V2Stores.messages.delete

<a id="opIdhealthcare.projects.locations.datasets.hl7V2Stores.messages.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/{name}`

Deletes an HL7v2 message.

<h3 id="healthcareprojectslocationsdatasetshl7v2storesmessagesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource name of the HL7v2 message to delete.|
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

<h3 id="healthcareprojectslocationsdatasetshl7v2storesmessagesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.hl7V2Stores.messages.patch

<a id="opIdhealthcare.projects.locations.datasets.hl7V2Stores.messages.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "data": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "messageType": "string",
    "name": "string",
    "patientIds": [
      {
        "type": "string",
        "value": "string"
      }
    ],
    "schematizedData": {
      "data": "string",
      "error": "string"
    },
    "sendFacility": "string",
    "sendTime": "string"
  }'
```

`PATCH /v1beta1/{name}`

Update the message. The contents of the message in Message.data and data extracted from the contents such as Message.create_time can't be altered. Only the Message.labels field is allowed to be updated. The labels in the request are merged with the existing set of labels. Existing labels with the same keys are updated.

> Body parameter

```json
{
  "data": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "messageType": "string",
  "name": "string",
  "patientIds": [
    {
      "type": "string",
      "value": "string"
    }
  ],
  "schematizedData": {
    "data": "string",
    "error": "string"
  },
  "sendFacility": "string",
  "sendTime": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetshl7v2storesmessagespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Resource name of the Message, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/hl7V2Stores/{hl7_v2_store_id}/messages/{message_id}`. Assigned by the server.|
|updateMask|query|string|false|The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask|
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
|body|body|[Message](#schemamessage)|false|none|
|» data|body|string(byte)|false|Raw message bytes.|
|» labels|body|object|false|User-supplied key-value pairs used to organize HL7v2 stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62} Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63} No more than 64 labels can be associated with a given store.|
|» » **additionalProperties**|body|string|false|none|
|» messageType|body|string|false|The message type for this message. MSH-9.1.|
|» name|body|string|false|Resource name of the Message, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/hl7V2Stores/{hl7_v2_store_id}/messages/{message_id}`. Assigned by the server.|
|» patientIds|body|[[PatientId](#schemapatientid)]|false|All patient IDs listed in the PID-2, PID-3, and PID-4 segments of this message.|
|» schematizedData|body|[SchematizedData](#schemaschematizeddata)|false|The parsed version of the raw message data schematized according to this store's schemas and type definitions.|
|» sendFacility|body|string|false|The hospital that this message came from. MSH-4.|
|» sendTime|body|string(google-datetime)|false|The datetime the sending application sent this message. MSH-7.|

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
  "data": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "messageType": "string",
  "name": "string",
  "parsedData": {
    "segments": [
      {
        "fields": {
          "property1": "string",
          "property2": "string"
        },
        "segmentId": "string",
        "setId": "string"
      }
    ]
  },
  "patientIds": [
    {
      "type": "string",
      "value": "string"
    }
  ],
  "schematizedData": {
    "data": "string",
    "error": "string"
  },
  "sendFacility": "string",
  "sendTime": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetshl7v2storesmessagespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Message](#schemamessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.fhirStores.fhir.Patient-everything

<a id="opIdhealthcare.projects.locations.datasets.fhirStores.fhir.Patient-everything"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/v1beta1/string/$everything' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}/$everything`

Retrieves a Patient resource and resources related to that patient. Implements the FHIR extended operation Patient-everything ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/patient-operations.html#everything), [STU3](https://hl7.org/implement/standards/fhir/STU3/patient-operations.html#everything), [R4](https://hl7.org/implement/standards/fhir/R4/patient-operations.html#everything)). On success, the response body contains a JSON-encoded representation of a `Bundle` resource of type `searchset`, containing the results of the operation. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. The resources in scope for the response are: * The patient resource itself. * All the resources directly referenced by the patient resource. * Resources directly referencing the patient resource that meet the inclusion criteria. The inclusion criteria are based on the membership rules in the patient compartment definition ([DSTU2](https://hl7.org/fhir/DSTU2/compartment-patient.html), [STU3](http://www.hl7.org/fhir/stu3/compartmentdefinition-patient.html), [R4](https://hl7.org/fhir/R4/compartmentdefinition-patient.html)), which details the eligible resource types and referencing search parameters. For samples that show how to call `Patient-everything`, see [Getting all patient compartment resources](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#getting_all_patient_compartment_resources).

<h3 id="healthcareprojectslocationsdatasetsfhirstoresfhirpatient-everything-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name of the `Patient` resource for which the information is required.|
|_count|query|integer|false|Maximum number of resources in a page. If not specified, 100 is used. May not be larger than 1000.|
|_page_token|query|string|false|Used to retrieve the next or previous page of results when using pagination. Set `_page_token` to the value of _page_token set in next or previous page links' url. Next and previous page are returned in the response bundle's links field, where `link.relation` is "previous" or "next". Omit `_page_token` if no previous request has been made.|
|_since|query|string|false|If provided, only resources updated after this time are returned. The time uses the format YYYY-MM-DDThh:mm:ss.sss+zz:zz. For example, `2015-02-07T13:28:17.239+02:00` or `2017-01-01T00:00:00Z`. The time must be specified to the second and include a time zone.|
|_type|query|string|false|String of comma-delimited FHIR resource types. If provided, only resources of the specified resource type(s) are returned. Specifying multiple `_type` parameters isn't supported. For example, the result of `_type=Observation&_type=Encounter` is undefined. Use `_type=Observation,Encounter` instead.|
|end|query|string|false|The response includes records prior to the end date. The date uses the format YYYY-MM-DD. If no end date is provided, all records subsequent to the start date are in scope.|
|start|query|string|false|The response includes records subsequent to the start date. The date uses the format YYYY-MM-DD. If no start date is provided, all records prior to the end date are in scope.|
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

<h3 id="healthcareprojectslocationsdatasetsfhirstoresfhirpatient-everything-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[HttpBody](#schemahttpbody)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.fhirStores.fhir.Resource-purge

<a id="opIdhealthcare.projects.locations.datasets.fhirStores.fhir.Resource-purge"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/v1beta1/string/$purge' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/{name}/$purge`

Deletes all the historical versions of a resource (excluding the current version) from the FHIR store. To remove all versions of a resource, first delete the current version and then call this method. This is not a FHIR standard operation. For samples that show how to call `Resource-purge`, see [Deleting historical versions of a FHIR resource](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#deleting_historical_versions_of_a_fhir_resource).

<h3 id="healthcareprojectslocationsdatasetsfhirstoresfhirresource-purge-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the resource to purge.|
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

<h3 id="healthcareprojectslocationsdatasetsfhirstoresfhirresource-purge-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.fhirStores.fhir.ConceptMap-translate

<a id="opIdhealthcare.projects.locations.datasets.fhirStores.fhir.ConceptMap-translate"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/v1beta1/string/$translate' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}/$translate`

Translates a code from one value set to another using a concept map. You can provide your own concept maps to translate any code system to another code system. Implements the FHIR standard $translate operation ([DSTU2](https://www.hl7.org/fhir/DSTU2/operation-conceptmap-translate.html), [STU3](https://www.hl7.org/fhir/STU3/operation-conceptmap-translate.html), [R4](https://www.hl7.org/fhir/R4/operation-conceptmap-translate.html)). On success, the response body contains a JSON-encoded representation of a FHIR Parameters resource, which includes the translation result. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead.

<h3 id="healthcareprojectslocationsdatasetsfhirstoresfhirconceptmap-translate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The URL for the concept map to use for the translation.|
|code|query|string|false|The code to translate.|
|conceptMapVersion|query|string|false|The version of the concept map to use. If unset, the most current version is used.|
|system|query|string|false|The system for the code to be translated.|
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

<h3 id="healthcareprojectslocationsdatasetsfhirstoresfhirconceptmap-translate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[HttpBody](#schemahttpbody)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.fhirStores.fhir.history

<a id="opIdhealthcare.projects.locations.datasets.fhirStores.fhir.history"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/_history \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}/_history`

Lists all the versions of a resource (including the current version and deleted versions) from the FHIR store. Implements the per-resource form of the FHIR standard history interaction ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/http.html#history), [STU3](https://hl7.org/implement/standards/fhir/STU3/http.html#history), [R4](https://hl7.org/implement/standards/fhir/R4/http.html#history)). On success, the response body contains a JSON-encoded representation of a `Bundle` resource of type `history`, containing the version history sorted from most recent to oldest versions. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. For samples that show how to call `history`, see [Listing FHIR resource versions](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#listing_fhir_resource_versions).

<h3 id="healthcareprojectslocationsdatasetsfhirstoresfhirhistory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the resource to retrieve.|
|_at|query|string|false|Only include resource versions that were current at some point during the time period specified in the date time value. The date parameter format is yyyy-mm-ddThh:mm:ss[Z\|(+\|-)hh:mm] Clients may specify any of the following: * An entire year: `_at=2019` * An entire month: `_at=2019-01` * A specific day: `_at=2019-01-20` * A specific second: `_at=2018-12-31T23:59:58Z`|
|_count|query|integer|false|The maximum number of search results on a page. If not specified, 100 is used. May not be larger than 1000.|
|_page_token|query|string|false|Used to retrieve the first, previous, next, or last page of resource versions when using pagination. Value should be set to the value of `_page_token` set in next or previous page links' URLs. Next and previous page are returned in the response bundle's links field, where `link.relation` is "previous" or "next". Omit `_page_token` if no previous request has been made.|
|_since|query|string|false|Only include resource versions that were created at or after the given instant in time. The instant in time uses the format YYYY-MM-DDThh:mm:ss.sss+zz:zz (for example 2015-02-07T13:28:17.239+02:00 or 2017-01-01T00:00:00Z). The time must be specified to the second and include a time zone.|
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

<h3 id="healthcareprojectslocationsdatasetsfhirstoresfhirhistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[HttpBody](#schemahttpbody)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.fhirStores.fhir.capabilities

<a id="opIdhealthcare.projects.locations.datasets.fhirStores.fhir.capabilities"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/fhir/metadata \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}/fhir/metadata`

Gets the FHIR capability statement ([STU3](https://hl7.org/implement/standards/fhir/STU3/capabilitystatement.html), [R4](https://hl7.org/implement/standards/fhir/R4/capabilitystatement.html)), or the [conformance statement](https://hl7.org/implement/standards/fhir/DSTU2/conformance.html) in the DSTU2 case for the store, which contains a description of functionality supported by the server. Implements the FHIR standard capabilities interaction ([STU3](https://hl7.org/implement/standards/fhir/STU3/http.html#capabilities), [R4](https://hl7.org/implement/standards/fhir/R4/http.html#capabilities)), or the [conformance interaction](https://hl7.org/implement/standards/fhir/DSTU2/http.html#conformance) in the DSTU2 case. On success, the response body contains a JSON-encoded representation of a `CapabilityStatement` resource.

<h3 id="healthcareprojectslocationsdatasetsfhirstoresfhircapabilities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name of the FHIR store to retrieve the capabilities for.|
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

<h3 id="healthcareprojectslocationsdatasetsfhirstoresfhircapabilities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[HttpBody](#schemahttpbody)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.list

<a id="opIdhealthcare.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="healthcareprojectslocationslist-parameters">Parameters</h3>

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

<h3 id="healthcareprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.operations.list

<a id="opIdhealthcare.projects.locations.datasets.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="healthcareprojectslocationsdatasetsoperationslist-parameters">Parameters</h3>

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

<h3 id="healthcareprojectslocationsdatasetsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.consentStores.consents.activate

<a id="opIdhealthcare.projects.locations.datasets.consentStores.consents.activate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:activate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "consentArtifact": "string",
    "expireTime": "string",
    "ttl": "string"
  }'
```

`POST /v1beta1/{name}:activate`

Activates the latest revision of the specified Consent by committing a new revision with `state` updated to `ACTIVE`. If the latest revision of the specified Consent is in the `ACTIVE` state, no new revision is committed. A FAILED_PRECONDITION error occurs if the latest revision of the specified consent is in the `REJECTED` or `REVOKED` state.

> Body parameter

```json
{
  "consentArtifact": "string",
  "expireTime": "string",
  "ttl": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetsconsentstoresconsentsactivate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the Consent to activate, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consents/{consent_id}`. An INVALID_ARGUMENT error occurs if `revision_id` is specified in the name.|
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
|body|body|[ActivateConsentRequest](#schemaactivateconsentrequest)|false|none|
|» consentArtifact|body|string|false|Required. The resource name of the Consent artifact that contains documentation of the user's consent, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consentArtifacts/{consent_artifact_id}`. If the draft Consent had a Consent artifact, this Consent artifact overwrites it.|
|» expireTime|body|string(google-datetime)|false|Timestamp in UTC of when this Consent is considered expired.|
|» ttl|body|string(google-duration)|false|The time to live for this Consent from when it is marked as active.|

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
  "consentArtifact": "string",
  "expireTime": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "policies": [
    {
      "authorizationRule": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "resourceAttributes": [
        {
          "attributeDefinitionId": "string",
          "values": [
            "string"
          ]
        }
      ]
    }
  ],
  "revisionCreateTime": "string",
  "revisionId": "string",
  "state": "STATE_UNSPECIFIED",
  "ttl": "string",
  "userId": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetsconsentstoresconsentsactivate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Consent](#schemaconsent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.consentStores.userDataMappings.archive

<a id="opIdhealthcare.projects.locations.datasets.consentStores.userDataMappings.archive"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:archive \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta1/{name}:archive`

Archives the specified User data mapping.

> Body parameter

```json
{}
```

<h3 id="healthcareprojectslocationsdatasetsconsentstoresuserdatamappingsarchive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the User data mapping to archive.|
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
|body|body|[ArchiveUserDataMappingRequest](#schemaarchiveuserdatamappingrequest)|false|none|

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

<h3 id="healthcareprojectslocationsdatasetsconsentstoresuserdatamappingsarchive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ArchiveUserDataMappingResponse](#schemaarchiveuserdatamappingresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.operations.cancel

<a id="opIdhealthcare.projects.locations.datasets.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta1/{name}:cancel`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

> Body parameter

```json
{}
```

<h3 id="healthcareprojectslocationsdatasetsoperationscancel-parameters">Parameters</h3>

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
|body|body|[CancelOperationRequest](#schemacanceloperationrequest)|false|none|

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

<h3 id="healthcareprojectslocationsdatasetsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.fhirStores.configureSearch

<a id="opIdhealthcare.projects.locations.datasets.fhirStores.configureSearch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:configureSearch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "canonicalUrls": [
      "string"
    ],
    "validateOnly": true
  }'
```

`POST /v1beta1/{name}:configureSearch`

Configure the search parameters for the FHIR store and reindex resources in the FHIR store according to the defined search parameters. The search parameters provided in this request will replace any previous search configuration. The target SearchParameter resources need to exist in the store before calling ConfigureSearch, otherwise an error will occur. This method returns an Operation that can be used to track the progress of the reindexing by calling GetOperation.

> Body parameter

```json
{
  "canonicalUrls": [
    "string"
  ],
  "validateOnly": true
}
```

<h3 id="healthcareprojectslocationsdatasetsfhirstoresconfiguresearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the FHIR store to configure, in the format `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.|
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
|body|body|[ConfigureSearchRequest](#schemaconfiguresearchrequest)|false|none|
|» canonicalUrls|body|[string]|false|The canonical URLs of the search parameters that are intended to be used for the FHIR store. See https://www.hl7.org/fhir/references.html#canonical for explanation on FHIR canonical urls|
|» validateOnly|body|boolean|false|If `validate_only` is set to true, the method will compile all the search parameters without actually setting the search config for the store and triggering the reindex.|

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

<h3 id="healthcareprojectslocationsdatasetsfhirstoresconfiguresearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.consentStores.consents.deleteRevision

<a id="opIdhealthcare.projects.locations.datasets.consentStores.consents.deleteRevision"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:deleteRevision \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/{name}:deleteRevision`

Deletes the specified revision of a Consent. An INVALID_ARGUMENT error occurs if the specified revision is the latest revision.

<h3 id="healthcareprojectslocationsdatasetsconsentstoresconsentsdeleterevision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the Consent revision to delete, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consents/{consent_id}@{revision_id}`. An INVALID_ARGUMENT error occurs if `revision_id` is not specified in the name.|
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

<h3 id="healthcareprojectslocationsdatasetsconsentstoresconsentsdeleterevision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.annotationStores.evaluate

<a id="opIdhealthcare.projects.locations.datasets.annotationStores.evaluate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:evaluate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bigqueryDestination": {
      "force": true,
      "schemaType": "SCHEMA_TYPE_UNSPECIFIED",
      "tableUri": "string",
      "writeDisposition": "WRITE_DISPOSITION_UNSPECIFIED"
    },
    "evalInfoTypeMapping": {
      "property1": "string",
      "property2": "string"
    },
    "goldenInfoTypeMapping": {
      "property1": "string",
      "property2": "string"
    },
    "goldenStore": "string",
    "infoTypeConfig": {
      "evaluateList": {
        "infoTypes": [
          "string"
        ]
      },
      "ignoreList": {
        "infoTypes": [
          "string"
        ]
      },
      "strictMatching": true
    }
  }'
```

`POST /v1beta1/{name}:evaluate`

Evaluate an Annotation store against a ground truth Annotation store. When the operation finishes successfully, a detailed response is returned of type EvaluateAnnotationStoreResponse, contained in the response. The metadata field type is OperationMetadata. Errors are logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)).

> Body parameter

```json
{
  "bigqueryDestination": {
    "force": true,
    "schemaType": "SCHEMA_TYPE_UNSPECIFIED",
    "tableUri": "string",
    "writeDisposition": "WRITE_DISPOSITION_UNSPECIFIED"
  },
  "evalInfoTypeMapping": {
    "property1": "string",
    "property2": "string"
  },
  "goldenInfoTypeMapping": {
    "property1": "string",
    "property2": "string"
  },
  "goldenStore": "string",
  "infoTypeConfig": {
    "evaluateList": {
      "infoTypes": [
        "string"
      ]
    },
    "ignoreList": {
      "infoTypes": [
        "string"
      ]
    },
    "strictMatching": true
  }
}
```

<h3 id="healthcareprojectslocationsdatasetsannotationstoresevaluate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The Annotation store to compare against `golden_store`, in the format of `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/annotationStores/{annotation_store_id}`.|
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
|body|body|[EvaluateAnnotationStoreRequest](#schemaevaluateannotationstorerequest)|false|none|
|» bigqueryDestination|body|[GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination](#schemagooglecloudhealthcarev1beta1annotationbigquerydestination)|false|The BigQuery table where the server writes the output. BigQueryDestination requires the `roles/bigquery.dataEditor` and `roles/bigquery.jobUser` Cloud IAM roles.|
|» evalInfoTypeMapping|body|object|false|Optional. InfoType mapping for `eval_store`. Different resources can map to the same infoType. For example, `PERSON_NAME`, `PERSON`, `NAME`, and `HUMAN` are different. To map all of these into a single infoType (such as `PERSON_NAME`), specify the following mapping: ``` info_type_mapping["PERSON"] = "PERSON_NAME" info_type_mapping["NAME"] = "PERSON_NAME" info_type_mapping["HUMAN"] = "PERSON_NAME" ``` Unmentioned infoTypes, such as `DATE`, are treated as identity mapping. For example: ``` info_type_mapping["DATE"] = "DATE" ``` InfoTypes are case-insensitive.|
|» » **additionalProperties**|body|string|false|none|
|» goldenInfoTypeMapping|body|object|false|Optional. Similar to `eval_info_type_mapping`, infoType mapping for `golden_store`.|
|» » **additionalProperties**|body|string|false|none|
|» goldenStore|body|string|false|The Annotation store to use as ground truth, in the format of `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/annotationStores/{annotation_store_id}`.|
|» infoTypeConfig|body|[InfoTypeConfig](#schemainfotypeconfig)|false|Specifies how to use infoTypes for evaluation. For example, a user might only want to evaluate `PERSON`, `LOCATION`, and `AGE`.|

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

<h3 id="healthcareprojectslocationsdatasetsannotationstoresevaluate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.hl7V2Stores.export

<a id="opIdhealthcare.projects.locations.datasets.hl7V2Stores.export"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:export \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "endTime": "string",
    "gcsDestination": {
      "contentStructure": "CONTENT_STRUCTURE_UNSPECIFIED",
      "messageView": "MESSAGE_VIEW_UNSPECIFIED",
      "uriPrefix": "string"
    },
    "startTime": "string"
  }'
```

`POST /v1beta1/{name}:export`

Exports the messages to a destination. To filter messages to be exported, define a filter using the start and end time, relative to the message generation time (MSH.7). This API returns an Operation that can be used to track the status of the job by calling GetOperation. Immediate fatal errors appear in the error field. Otherwise, when the operation finishes, a detailed response of type ExportMessagesResponse is returned in the response field. The metadata field type for this operation is OperationMetadata.

> Body parameter

```json
{
  "endTime": "string",
  "gcsDestination": {
    "contentStructure": "CONTENT_STRUCTURE_UNSPECIFIED",
    "messageView": "MESSAGE_VIEW_UNSPECIFIED",
    "uriPrefix": "string"
  },
  "startTime": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetshl7v2storesexport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the source HL7v2 store, in the format `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/hl7v2Stores/{hl7v2_store_id}`|
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
|body|body|[ExportMessagesRequest](#schemaexportmessagesrequest)|false|none|
|» endTime|body|string(google-datetime)|false|The end of the range in `send_time` (MSH.7, https://www.hl7.org/documentcenter/public_temp_2E58C1F9-1C23-BA17-0C6126475344DA9D/wg/conf/HL7MSH.htm) to process. If not specified, the time when the export is scheduled is used. This value has to come after the `start_time` defined below. Only messages whose `send_time` lies in the range `start_time` (inclusive) to `end_time` (exclusive) are exported.|
|» gcsDestination|body|[GcsDestination](#schemagcsdestination)|false|Exports to a Cloud Storage destination.|
|» startTime|body|string(google-datetime)|false|The start of the range in `send_time` (MSH.7, https://www.hl7.org/documentcenter/public_temp_2E58C1F9-1C23-BA17-0C6126475344DA9D/wg/conf/HL7MSH.htm) to process. If not specified, the UNIX epoch (1970-01-01T00:00:00Z) is used. This value has to come before the `end_time` defined below. Only messages whose `send_time` lies in the range `start_time` (inclusive) to `end_time` (exclusive) are exported.|

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

<h3 id="healthcareprojectslocationsdatasetshl7v2storesexport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.fhirStores.getFHIRStoreMetrics

<a id="opIdhealthcare.projects.locations.datasets.fhirStores.getFHIRStoreMetrics"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:getFHIRStoreMetrics \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}:getFHIRStoreMetrics`

Gets metrics associated with the FHIR store.

<h3 id="healthcareprojectslocationsdatasetsfhirstoresgetfhirstoremetrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource name of the FHIR store to get metrics for.|
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
  "metrics": [
    {
      "count": "string",
      "resourceType": "string",
      "structuredStorageSizeBytes": "string"
    }
  ],
  "name": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetsfhirstoresgetfhirstoremetrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[FhirStoreMetrics](#schemafhirstoremetrics)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.hl7V2Stores.import

<a id="opIdhealthcare.projects.locations.datasets.hl7V2Stores.import"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:import \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "gcsSource": {
      "uri": "string"
    }
  }'
```

`POST /v1beta1/{name}:import`

Import messages to the HL7v2 store by loading data from the specified sources. This method is optimized to load large quantities of data using import semantics that ignore some HL7v2 store configuration options and are not suitable for all use cases. It is primarily intended to load data into an empty HL7v2 store that is not being used by other clients. An existing message will be overwritten if a duplicate message is imported. A duplicate message is a message with the same raw bytes as a message that already exists in this HL7v2 store. When a message is overwritten, its labels will also be overwritten. The import operation is idempotent unless the input data contains multiple valid messages with the same raw bytes but different labels. In that case, after the import completes, the store contains exactly one message with those raw bytes but there is no ordering guarantee on which version of the labels it has. The operation result counters do not count duplicated raw bytes as an error and count one success for each message in the input, which might result in a success count larger than the number of messages in the HL7v2 store. If some messages fail to import, for example due to parsing errors, successfully imported messages are not rolled back. This method returns an Operation that can be used to track the status of the import by calling GetOperation. Immediate fatal errors appear in the error field, errors are also logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)). Otherwise, when the operation finishes, a response of type ImportMessagesResponse is returned in the response field. The metadata field type for this operation is OperationMetadata.

> Body parameter

```json
{
  "gcsSource": {
    "uri": "string"
  }
}
```

<h3 id="healthcareprojectslocationsdatasetshl7v2storesimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the target HL7v2 store, in the format `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/hl7v2Stores/{hl7v2_store_id}`|
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
|body|body|[ImportMessagesRequest](#schemaimportmessagesrequest)|false|none|
|» gcsSource|body|[GcsSource](#schemagcssource)|false|Cloud Storage source data location and import configuration. The Cloud Healthcare Service Agent requires the `roles/storage.objectViewer` Cloud IAM roles on the Cloud Storage location.|

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

<h3 id="healthcareprojectslocationsdatasetshl7v2storesimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.consentStores.consents.listRevisions

<a id="opIdhealthcare.projects.locations.datasets.consentStores.consents.listRevisions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:listRevisions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}:listRevisions`

Lists the revisions of the specified Consent in reverse chronological order.

<h3 id="healthcareprojectslocationsdatasetsconsentstoresconsentslistrevisions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the Consent to retrieve revisions for.|
|filter|query|string|false|Optional. Restricts the revisions returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it's just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. Fields/functions available for filtering are: - user_id. For example, `filter='user_id="user123"'`. - consent_artifact - state - revision_create_time - metadata. For example, `filter=Metadata(\"testkey\")=\"value\"` or `filter=HasMetadata(\"testkey\")`.|
|pageSize|query|integer|false|Optional. Limit on the number of revisions to return in a single response. If not specified, 100 is used. May not be larger than 1000.|
|pageToken|query|string|false|Optional. Token to retrieve the next page of results or empty if there are no more results in the list.|
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
  "consents": [
    {
      "consentArtifact": "string",
      "expireTime": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "policies": [
        {
          "authorizationRule": {
            "description": "string",
            "expression": "string",
            "location": "string",
            "title": "string"
          },
          "resourceAttributes": [
            {
              "attributeDefinitionId": "string",
              "values": [
                "string"
              ]
            }
          ]
        }
      ],
      "revisionCreateTime": "string",
      "revisionId": "string",
      "state": "STATE_UNSPECIFIED",
      "ttl": "string",
      "userId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetsconsentstoresconsentslistrevisions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListConsentRevisionsResponse](#schemalistconsentrevisionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.consentStores.consents.reject

<a id="opIdhealthcare.projects.locations.datasets.consentStores.consents.reject"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:reject \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "consentArtifact": "string"
  }'
```

`POST /v1beta1/{name}:reject`

Rejects the latest revision of the specified Consent by committing a new revision with `state` updated to `REJECTED`. If the latest revision of the specified Consent is in the `REJECTED` state, no new revision is committed. A FAILED_PRECONDITION error occurs if the latest revision of the specified Consent is in the `ACTIVE` or `REVOKED` state.

> Body parameter

```json
{
  "consentArtifact": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetsconsentstoresconsentsreject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the Consent to reject, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consents/{consent_id}`. An INVALID_ARGUMENT error occurs if `revision_id` is specified in the name.|
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
|body|body|[RejectConsentRequest](#schemarejectconsentrequest)|false|none|
|» consentArtifact|body|string|false|Optional. The resource name of the Consent artifact that contains documentation of the user's rejection of the draft Consent, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consentArtifacts/{consent_artifact_id}`. If the draft Consent had a Consent artifact, this Consent artifact overwrites it.|

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
  "consentArtifact": "string",
  "expireTime": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "policies": [
    {
      "authorizationRule": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "resourceAttributes": [
        {
          "attributeDefinitionId": "string",
          "values": [
            "string"
          ]
        }
      ]
    }
  ],
  "revisionCreateTime": "string",
  "revisionId": "string",
  "state": "STATE_UNSPECIFIED",
  "ttl": "string",
  "userId": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetsconsentstoresconsentsreject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Consent](#schemaconsent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.consentStores.consents.revoke

<a id="opIdhealthcare.projects.locations.datasets.consentStores.consents.revoke"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:revoke \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "consentArtifact": "string"
  }'
```

`POST /v1beta1/{name}:revoke`

Revokes the latest revision of the specified Consent by committing a new revision with `state` updated to `REVOKED`. If the latest revision of the specified Consent is in the `REVOKED` state, no new revision is committed. A FAILED_PRECONDITION error occurs if the latest revision of the given consent is in `DRAFT` or `REJECTED` state.

> Body parameter

```json
{
  "consentArtifact": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetsconsentstoresconsentsrevoke-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the Consent to revoke, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consents/{consent_id}`. An INVALID_ARGUMENT error occurs if `revision_id` is specified in the name.|
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
|body|body|[RevokeConsentRequest](#schemarevokeconsentrequest)|false|none|
|» consentArtifact|body|string|false|Optional. The resource name of the Consent artifact that contains proof of the user's revocation of the Consent, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consentArtifacts/{consent_artifact_id}`.|

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
  "consentArtifact": "string",
  "expireTime": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "policies": [
    {
      "authorizationRule": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "resourceAttributes": [
        {
          "attributeDefinitionId": "string",
          "values": [
            "string"
          ]
        }
      ]
    }
  ],
  "revisionCreateTime": "string",
  "revisionId": "string",
  "state": "STATE_UNSPECIFIED",
  "ttl": "string",
  "userId": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetsconsentstoresconsentsrevoke-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Consent](#schemaconsent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.services.nlp.analyzeEntities

<a id="opIdhealthcare.projects.locations.services.nlp.analyzeEntities"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:analyzeEntities \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "documentContent": "string",
    "licensedVocabularies": [
      "LICENSED_VOCABULARY_UNSPECIFIED"
    ]
  }'
```

`POST /v1beta1/{nlpService}:analyzeEntities`

Analyze heathcare entity in a document. Its response includes the recognized entity mentions and the relationships between them. AnalyzeEntities uses context aware models to detect entities. This method can only analyze documents written in English.

> Body parameter

```json
{
  "documentContent": "string",
  "licensedVocabularies": [
    "LICENSED_VOCABULARY_UNSPECIFIED"
  ]
}
```

<h3 id="healthcareprojectslocationsservicesnlpanalyzeentities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nlpService|path|string|true|The resource name of the service of the form: "projects/{project_id}/locations/{location_id}/services/nlp".|
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
|body|body|[AnalyzeEntitiesRequest](#schemaanalyzeentitiesrequest)|false|none|
|» documentContent|body|string|false|document_content is a document to be annotated.|
|» licensedVocabularies|body|[string]|false|A list of licensed vocabularies to use in the request, in addition to the default unlicensed vocabularies.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» licensedVocabularies|LICENSED_VOCABULARY_UNSPECIFIED|
|» licensedVocabularies|ICD10CM|
|» licensedVocabularies|SNOMEDCT_US|

> Example responses

> 200 Response

```json
{
  "entities": [
    {
      "entityId": "string",
      "preferredTerm": "string",
      "vocabularyCodes": [
        "string"
      ]
    }
  ],
  "entityMentions": [
    {
      "certaintyAssessment": {
        "confidence": 0,
        "value": "string"
      },
      "confidence": 0,
      "linkedEntities": [
        {
          "entityId": "string"
        }
      ],
      "mentionId": "string",
      "subject": {
        "confidence": 0,
        "value": "string"
      },
      "temporalAssessment": {
        "confidence": 0,
        "value": "string"
      },
      "text": {
        "beginOffset": 0,
        "content": "string"
      },
      "type": "string"
    }
  ],
  "relationships": [
    {
      "confidence": 0,
      "objectId": "string",
      "subjectId": "string"
    }
  ]
}
```

<h3 id="healthcareprojectslocationsservicesnlpanalyzeentities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AnalyzeEntitiesResponse](#schemaanalyzeentitiesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.annotationStores.list

<a id="opIdhealthcare.projects.locations.datasets.annotationStores.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/annotationStores \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/annotationStores`

Lists the Annotation stores in the given dataset for a source store.

<h3 id="healthcareprojectslocationsdatasetsannotationstoreslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Name of the dataset.|
|filter|query|string|false|Restricts stores returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it's just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. Only filtering on labels is supported, for example `labels.key=value`.|
|pageSize|query|integer|false|Limit on the number of Annotation stores to return in a single response. If not specified, 100 is used. May not be larger than 1000.|
|pageToken|query|string|false|The next_page_token value returned from the previous List request, if any.|
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
  "annotationStores": [
    {
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetsannotationstoreslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAnnotationStoresResponse](#schemalistannotationstoresresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.annotationStores.create

<a id="opIdhealthcare.projects.locations.datasets.annotationStores.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/annotationStores \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string"
  }'
```

`POST /v1beta1/{parent}/annotationStores`

Creates a new Annotation store within the parent dataset.

> Body parameter

```json
{
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetsannotationstorescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the dataset this Annotation store belongs to.|
|annotationStoreId|query|string|false|The ID of the Annotation store that is being created. The string must match the following regex: `[\p{L}\p{N}_\-\.]{1,256}`.|
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
|body|body|[AnnotationStore](#schemaannotationstore)|false|none|
|» labels|body|object|false|Optional. User-supplied key-value pairs used to organize Annotation stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62} Label values must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63} No more than 64 labels can be associated with a given store.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Resource name of the Annotation store, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/annotationStores/{annotation_store_id}`.|

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
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetsannotationstorescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AnnotationStore](#schemaannotationstore)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.annotationStores.annotations.list

<a id="opIdhealthcare.projects.locations.datasets.annotationStores.annotations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/annotations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/annotations`

Lists the Annotations in the given Annotation store for a source resource.

<h3 id="healthcareprojectslocationsdatasetsannotationstoresannotationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Name of the Annotation store to retrieve Annotations from.|
|filter|query|string|false|Restricts Annotations returned to those matching a filter. Functions available for filtering are: - `matches("annotation_source.cloud_healthcare_source.name", substring)`. Filter on `cloud_healthcare_source.name`. For example: `matches("annotation_source.cloud_healthcare_source.name", "some source")`. - `matches("annotation", substring)`. Filter on all fields of annotation. For example: `matches("annotation", "some-content")`. - `type("text")`, `type("image")`, `type("resource")`. Filter on the type of annotation `data`.|
|pageSize|query|integer|false|Limit on the number of Annotations to return in a single response. If not specified, 100 is used. May not be larger than 1000.|
|pageToken|query|string|false|The next_page_token value returned from the previous List request, if any.|
|view|query|string|false|Controls which fields are populated in the response.|
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
|view|ANNOTATION_VIEW_UNSPECIFIED|
|view|ANNOTATION_VIEW_BASIC|
|view|ANNOTATION_VIEW_FULL|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "annotations": [
    {
      "annotationSource": {
        "cloudHealthcareSource": {
          "name": "string"
        }
      },
      "customData": {
        "property1": "string",
        "property2": "string"
      },
      "imageAnnotation": {
        "boundingPolys": [
          {
            "label": "string",
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          }
        ],
        "frameIndex": 0
      },
      "name": "string",
      "resourceAnnotation": {
        "label": "string"
      },
      "textAnnotation": {
        "details": {
          "property1": {
            "findings": [
              {
                "end": "string",
                "infoType": "string",
                "quote": "string",
                "start": "string"
              }
            ]
          },
          "property2": {
            "findings": [
              {
                "end": "string",
                "infoType": "string",
                "quote": "string",
                "start": "string"
              }
            ]
          }
        }
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetsannotationstoresannotationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAnnotationsResponse](#schemalistannotationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.annotationStores.annotations.create

<a id="opIdhealthcare.projects.locations.datasets.annotationStores.annotations.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/annotations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "annotationSource": {
      "cloudHealthcareSource": {
        "name": "string"
      }
    },
    "customData": {
      "property1": "string",
      "property2": "string"
    },
    "imageAnnotation": {
      "boundingPolys": [
        {
          "label": "string",
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        }
      ],
      "frameIndex": 0
    },
    "name": "string",
    "resourceAnnotation": {
      "label": "string"
    },
    "textAnnotation": {
      "details": {
        "property1": {
          "findings": [
            {
              "end": "string",
              "infoType": "string",
              "quote": "string",
              "start": "string"
            }
          ]
        },
        "property2": {
          "findings": [
            {
              "end": "string",
              "infoType": "string",
              "quote": "string",
              "start": "string"
            }
          ]
        }
      }
    }
  }'
```

`POST /v1beta1/{parent}/annotations`

Creates a new Annotation record. It is valid to create Annotation objects for the same source more than once since a unique ID is assigned to each record by this service.

> Body parameter

```json
{
  "annotationSource": {
    "cloudHealthcareSource": {
      "name": "string"
    }
  },
  "customData": {
    "property1": "string",
    "property2": "string"
  },
  "imageAnnotation": {
    "boundingPolys": [
      {
        "label": "string",
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      }
    ],
    "frameIndex": 0
  },
  "name": "string",
  "resourceAnnotation": {
    "label": "string"
  },
  "textAnnotation": {
    "details": {
      "property1": {
        "findings": [
          {
            "end": "string",
            "infoType": "string",
            "quote": "string",
            "start": "string"
          }
        ]
      },
      "property2": {
        "findings": [
          {
            "end": "string",
            "infoType": "string",
            "quote": "string",
            "start": "string"
          }
        ]
      }
    }
  }
}
```

<h3 id="healthcareprojectslocationsdatasetsannotationstoresannotationscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the Annotation store this annotation belongs to. For example, `projects/my-project/locations/us-central1/datasets/mydataset/annotationStores/myannotationstore`.|
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
|body|body|[Annotation](#schemaannotation)|false|none|
|» annotationSource|body|[AnnotationSource](#schemaannotationsource)|false|Details of the source.|
|» customData|body|object|false|Additional information for this annotation record, such as annotator and verifier information or study campaign.|
|» » **additionalProperties**|body|string|false|none|
|» imageAnnotation|body|[ImageAnnotation](#schemaimageannotation)|false|Annotations for images. For example, bounding polygons.|
|» name|body|string|false|Resource name of the Annotation, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/annotationStores/{annotation_store_id}/annotations/{annotation_id}`.|
|» resourceAnnotation|body|[ResourceAnnotation](#schemaresourceannotation)|false|Annotations for resource. For example, classification tags.|
|» textAnnotation|body|[SensitiveTextAnnotation](#schemasensitivetextannotation)|false|Annotations for sensitive texts. For example, a range that describes the location of sensitive text.|

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
  "annotationSource": {
    "cloudHealthcareSource": {
      "name": "string"
    }
  },
  "customData": {
    "property1": "string",
    "property2": "string"
  },
  "imageAnnotation": {
    "boundingPolys": [
      {
        "label": "string",
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      }
    ],
    "frameIndex": 0
  },
  "name": "string",
  "resourceAnnotation": {
    "label": "string"
  },
  "textAnnotation": {
    "details": {
      "property1": {
        "findings": [
          {
            "end": "string",
            "infoType": "string",
            "quote": "string",
            "start": "string"
          }
        ]
      },
      "property2": {
        "findings": [
          {
            "end": "string",
            "infoType": "string",
            "quote": "string",
            "start": "string"
          }
        ]
      }
    }
  }
}
```

<h3 id="healthcareprojectslocationsdatasetsannotationstoresannotationscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Annotation](#schemaannotation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.consentStores.attributeDefinitions.list

<a id="opIdhealthcare.projects.locations.datasets.consentStores.attributeDefinitions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/attributeDefinitions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/attributeDefinitions`

Lists the Attribute definitions in the specified consent store.

<h3 id="healthcareprojectslocationsdatasetsconsentstoresattributedefinitionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the consent store to retrieve Attribute definitions from.|
|filter|query|string|false|Optional. Restricts the attributes returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it's just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. The only field available for filtering is `category`. For example, `filter=category=\"REQUEST\"`.|
|pageSize|query|integer|false|Optional. Limit on the number of Attribute definitions to return in a single response. If not specified, 100 is used. May not be larger than 1000.|
|pageToken|query|string|false|Optional. Token to retrieve the next page of results or empty to get the first page.|
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
  "attributeDefinitions": [
    {
      "allowedValues": [
        "string"
      ],
      "category": "CATEGORY_UNSPECIFIED",
      "consentDefaultValues": [
        "string"
      ],
      "dataMappingDefaultValue": "string",
      "description": "string",
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetsconsentstoresattributedefinitionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAttributeDefinitionsResponse](#schemalistattributedefinitionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.consentStores.attributeDefinitions.create

<a id="opIdhealthcare.projects.locations.datasets.consentStores.attributeDefinitions.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/attributeDefinitions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "allowedValues": [
      "string"
    ],
    "category": "CATEGORY_UNSPECIFIED",
    "consentDefaultValues": [
      "string"
    ],
    "dataMappingDefaultValue": "string",
    "description": "string",
    "name": "string"
  }'
```

`POST /v1beta1/{parent}/attributeDefinitions`

Creates a new Attribute definition in the parent consent store.

> Body parameter

```json
{
  "allowedValues": [
    "string"
  ],
  "category": "CATEGORY_UNSPECIFIED",
  "consentDefaultValues": [
    "string"
  ],
  "dataMappingDefaultValue": "string",
  "description": "string",
  "name": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetsconsentstoresattributedefinitionscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the consent store that this Attribute definition belongs to.|
|attributeDefinitionId|query|string|false|Required. The ID of the Attribute definition to create. The string must match the following regex: `_a-zA-Z{0,255}` and must not be a reserved keyword within the Common Expression Language as listed on https://github.com/google/cel-spec/blob/master/doc/langdef.md.|
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
|body|body|[AttributeDefinition](#schemaattributedefinition)|false|none|
|» allowedValues|body|[string]|false|Required. Possible values for the attribute. The number of allowed values must not exceed 500. An empty list is invalid. The list can only be expanded after creation.|
|» category|body|string|false|Required. The category of the attribute. The value of this field cannot be changed after creation.|
|» consentDefaultValues|body|[string]|false|Optional. Default values of the attribute in Consents. If no default values are specified, it defaults to an empty value.|
|» dataMappingDefaultValue|body|string|false|Optional. Default value of the attribute in User data mappings. If no default value is specified, it defaults to an empty value. This field is only applicable to attributes of the category `RESOURCE`.|
|» description|body|string|false|Optional. A description of the attribute.|
|» name|body|string|false|Resource name of the Attribute definition, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/attributeDefinitions/{attribute_definition_id}`. Cannot be changed after creation.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» category|CATEGORY_UNSPECIFIED|
|» category|RESOURCE|
|» category|REQUEST|

> Example responses

> 200 Response

```json
{
  "allowedValues": [
    "string"
  ],
  "category": "CATEGORY_UNSPECIFIED",
  "consentDefaultValues": [
    "string"
  ],
  "dataMappingDefaultValue": "string",
  "description": "string",
  "name": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetsconsentstoresattributedefinitionscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AttributeDefinition](#schemaattributedefinition)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.consentStores.consentArtifacts.list

<a id="opIdhealthcare.projects.locations.datasets.consentStores.consentArtifacts.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/consentArtifacts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/consentArtifacts`

Lists the Consent artifacts in the specified consent store.

<h3 id="healthcareprojectslocationsdatasetsconsentstoresconsentartifactslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the consent store to retrieve consent artifacts from.|
|filter|query|string|false|Optional. Restricts the artifacts returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it's just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. The fields available for filtering are: - user_id. For example, `filter=user_id=\"user123\"`. - consent_content_version - metadata. For example, `filter=Metadata(\"testkey\")=\"value\"` or `filter=HasMetadata(\"testkey\")`.|
|pageSize|query|integer|false|Optional. Limit on the number of consent artifacts to return in a single response. If not specified, 100 is used. May not be larger than 1000.|
|pageToken|query|string|false|Optional. The next_page_token value returned from the previous List request, if any.|
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
  "consentArtifacts": [
    {
      "consentContentScreenshots": [
        {
          "gcsUri": "string",
          "rawBytes": "string"
        }
      ],
      "consentContentVersion": "string",
      "guardianSignature": {
        "image": {
          "gcsUri": "string",
          "rawBytes": "string"
        },
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "signatureTime": "string",
        "userId": "string"
      },
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "userId": "string",
      "userSignature": {
        "image": {
          "gcsUri": "string",
          "rawBytes": "string"
        },
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "signatureTime": "string",
        "userId": "string"
      },
      "witnessSignature": {
        "image": {
          "gcsUri": "string",
          "rawBytes": "string"
        },
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "signatureTime": "string",
        "userId": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetsconsentstoresconsentartifactslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListConsentArtifactsResponse](#schemalistconsentartifactsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.consentStores.consentArtifacts.create

<a id="opIdhealthcare.projects.locations.datasets.consentStores.consentArtifacts.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/consentArtifacts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "consentContentScreenshots": [
      {
        "gcsUri": "string",
        "rawBytes": "string"
      }
    ],
    "consentContentVersion": "string",
    "guardianSignature": {
      "image": {
        "gcsUri": "string",
        "rawBytes": "string"
      },
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "signatureTime": "string",
      "userId": "string"
    },
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "userId": "string",
    "userSignature": {
      "image": {
        "gcsUri": "string",
        "rawBytes": "string"
      },
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "signatureTime": "string",
      "userId": "string"
    },
    "witnessSignature": {
      "image": {
        "gcsUri": "string",
        "rawBytes": "string"
      },
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "signatureTime": "string",
      "userId": "string"
    }
  }'
```

`POST /v1beta1/{parent}/consentArtifacts`

Creates a new Consent artifact in the parent consent store.

> Body parameter

```json
{
  "consentContentScreenshots": [
    {
      "gcsUri": "string",
      "rawBytes": "string"
    }
  ],
  "consentContentVersion": "string",
  "guardianSignature": {
    "image": {
      "gcsUri": "string",
      "rawBytes": "string"
    },
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "signatureTime": "string",
    "userId": "string"
  },
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "userId": "string",
  "userSignature": {
    "image": {
      "gcsUri": "string",
      "rawBytes": "string"
    },
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "signatureTime": "string",
    "userId": "string"
  },
  "witnessSignature": {
    "image": {
      "gcsUri": "string",
      "rawBytes": "string"
    },
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "signatureTime": "string",
    "userId": "string"
  }
}
```

<h3 id="healthcareprojectslocationsdatasetsconsentstoresconsentartifactscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the consent store this Consent artifact belongs to.|
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
|body|body|[ConsentArtifact](#schemaconsentartifact)|false|none|
|» consentContentScreenshots|body|[[Image](#schemaimage)]|false|Optional. Screenshots, PDFs, or other binary information documenting the user's consent.|
|» consentContentVersion|body|string|false|Optional. An string indicating the version of the consent information shown to the user.|
|» guardianSignature|body|[Signature](#schemasignature)|false|Optional. A signature from a guardian.|
|» metadata|body|object|false|Optional. Metadata associated with the Consent artifact. For example, the consent locale or user agent version.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Resource name of the Consent artifact, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consentArtifacts/{consent_artifact_id}`. Cannot be changed after creation.|
|» userId|body|string|false|Required. User's UUID provided by the client.|
|» userSignature|body|[Signature](#schemasignature)|false|Optional. User's signature.|
|» witnessSignature|body|[Signature](#schemasignature)|false|Optional. A signature from a witness.|

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
  "consentContentScreenshots": [
    {
      "gcsUri": "string",
      "rawBytes": "string"
    }
  ],
  "consentContentVersion": "string",
  "guardianSignature": {
    "image": {
      "gcsUri": "string",
      "rawBytes": "string"
    },
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "signatureTime": "string",
    "userId": "string"
  },
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "userId": "string",
  "userSignature": {
    "image": {
      "gcsUri": "string",
      "rawBytes": "string"
    },
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "signatureTime": "string",
    "userId": "string"
  },
  "witnessSignature": {
    "image": {
      "gcsUri": "string",
      "rawBytes": "string"
    },
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "signatureTime": "string",
    "userId": "string"
  }
}
```

<h3 id="healthcareprojectslocationsdatasetsconsentstoresconsentartifactscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ConsentArtifact](#schemaconsentartifact)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.consentStores.list

<a id="opIdhealthcare.projects.locations.datasets.consentStores.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/consentStores \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/consentStores`

Lists the consent stores in the specified dataset.

<h3 id="healthcareprojectslocationsdatasetsconsentstoreslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the dataset.|
|filter|query|string|false|Optional. Restricts the stores returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it's just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. Only filtering on labels is supported. For example, `filter=labels.key=value`.|
|pageSize|query|integer|false|Optional. Limit on the number of consent stores to return in a single response. If not specified, 100 is used. May not be larger than 1000.|
|pageToken|query|string|false|Optional. Token to retrieve the next page of results, or empty to get the first page.|
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
  "consentStores": [
    {
      "defaultConsentTtl": "string",
      "enableConsentCreateOnUpdate": true,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetsconsentstoreslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListConsentStoresResponse](#schemalistconsentstoresresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.consentStores.create

<a id="opIdhealthcare.projects.locations.datasets.consentStores.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/consentStores \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "defaultConsentTtl": "string",
    "enableConsentCreateOnUpdate": true,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string"
  }'
```

`POST /v1beta1/{parent}/consentStores`

Creates a new consent store in the parent dataset. Attempting to create a consent store with the same ID as an existing store fails with an ALREADY_EXISTS error.

> Body parameter

```json
{
  "defaultConsentTtl": "string",
  "enableConsentCreateOnUpdate": true,
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetsconsentstorescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the dataset this consent store belongs to.|
|consentStoreId|query|string|false|Required. The ID of the consent store to create. The string must match the following regex: `[\p{L}\p{N}_\-\.]{1,256}`. Cannot be changed after creation.|
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
|body|body|[ConsentStore](#schemaconsentstore)|false|none|
|» defaultConsentTtl|body|string(google-duration)|false|Optional. Default time to live for Consents created in this store. Must be at least 24 hours. Updating this field will not affect the expiration time of existing consents.|
|» enableConsentCreateOnUpdate|body|boolean|false|Optional. If `true`, UpdateConsent creates the Consent if it does not already exist. If unspecified, defaults to `false`.|
|» labels|body|object|false|Optional. User-supplied key-value pairs used to organize consent stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62}. Label values must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}. No more than 64 labels can be associated with a given store. For more information: https://cloud.google.com/healthcare/docs/how-tos/labeling-resources|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Resource name of the consent store, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}`. Cannot be changed after creation.|

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
  "defaultConsentTtl": "string",
  "enableConsentCreateOnUpdate": true,
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetsconsentstorescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ConsentStore](#schemaconsentstore)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.consentStores.consents.list

<a id="opIdhealthcare.projects.locations.datasets.consentStores.consents.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/consents \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/consents`

Lists the Consent in the given consent store, returning each Consent's latest revision.

<h3 id="healthcareprojectslocationsdatasetsconsentstoresconsentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the consent store to retrieve Consents from.|
|filter|query|string|false|Optional. Restricts the consents returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it's just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. The fields available for filtering are: - user_id. For example, `filter='user_id="user123"'`. - consent_artifact - state - revision_create_time - metadata. For example, `filter=Metadata(\"testkey\")=\"value\"` or `filter=HasMetadata(\"testkey\")`.|
|pageSize|query|integer|false|Optional. Limit on the number of Consents to return in a single response. If not specified, 100 is used. May not be larger than 1000.|
|pageToken|query|string|false|Optional. The next_page_token value returned from the previous List request, if any.|
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
  "consents": [
    {
      "consentArtifact": "string",
      "expireTime": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "policies": [
        {
          "authorizationRule": {
            "description": "string",
            "expression": "string",
            "location": "string",
            "title": "string"
          },
          "resourceAttributes": [
            {
              "attributeDefinitionId": "string",
              "values": [
                "string"
              ]
            }
          ]
        }
      ],
      "revisionCreateTime": "string",
      "revisionId": "string",
      "state": "STATE_UNSPECIFIED",
      "ttl": "string",
      "userId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetsconsentstoresconsentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListConsentsResponse](#schemalistconsentsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.consentStores.consents.create

<a id="opIdhealthcare.projects.locations.datasets.consentStores.consents.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/consents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "consentArtifact": "string",
    "expireTime": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "policies": [
      {
        "authorizationRule": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "resourceAttributes": [
          {
            "attributeDefinitionId": "string",
            "values": [
              "string"
            ]
          }
        ]
      }
    ],
    "state": "STATE_UNSPECIFIED",
    "ttl": "string",
    "userId": "string"
  }'
```

`POST /v1beta1/{parent}/consents`

Creates a new Consent in the parent consent store.

> Body parameter

```json
{
  "consentArtifact": "string",
  "expireTime": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "policies": [
    {
      "authorizationRule": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "resourceAttributes": [
        {
          "attributeDefinitionId": "string",
          "values": [
            "string"
          ]
        }
      ]
    }
  ],
  "state": "STATE_UNSPECIFIED",
  "ttl": "string",
  "userId": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetsconsentstoresconsentscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the consent store.|
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
|body|body|[Consent](#schemaconsent)|false|none|
|» consentArtifact|body|string|false|Required. The resource name of the Consent artifact that contains proof of the end user's consent, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consentArtifacts/{consent_artifact_id}`.|
|» expireTime|body|string(google-datetime)|false|Timestamp in UTC of when this Consent is considered expired.|
|» metadata|body|object|false|Optional. User-supplied key-value pairs used to organize Consent resources. Metadata keys must: - be between 1 and 63 characters long - have a UTF-8 encoding of maximum 128 bytes - begin with a letter - consist of up to 63 characters including lowercase letters, numeric characters, underscores, and dashes Metadata values must be: - be between 1 and 63 characters long - have a UTF-8 encoding of maximum 128 bytes - consist of up to 63 characters including lowercase letters, numeric characters, underscores, and dashes No more than 64 metadata entries can be associated with a given consent.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Resource name of the Consent, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consents/{consent_id}`. Cannot be changed after creation.|
|» policies|body|[[GoogleCloudHealthcareV1beta1ConsentPolicy](#schemagooglecloudhealthcarev1beta1consentpolicy)]|false|Optional. Represents a user's consent in terms of the resources that can be accessed and under what conditions.|
|» state|body|string|false|Required. Indicates the current state of this Consent.|
|» ttl|body|string(google-duration)|false|Input only. The time to live for this Consent from when it is created.|
|» userId|body|string|false|Required. User's UUID provided by the client.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» state|STATE_UNSPECIFIED|
|» state|ACTIVE|
|» state|ARCHIVED|
|» state|REVOKED|
|» state|DRAFT|
|» state|REJECTED|

> Example responses

> 200 Response

```json
{
  "consentArtifact": "string",
  "expireTime": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "policies": [
    {
      "authorizationRule": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "resourceAttributes": [
        {
          "attributeDefinitionId": "string",
          "values": [
            "string"
          ]
        }
      ]
    }
  ],
  "revisionCreateTime": "string",
  "revisionId": "string",
  "state": "STATE_UNSPECIFIED",
  "ttl": "string",
  "userId": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetsconsentstoresconsentscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Consent](#schemaconsent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.list

<a id="opIdhealthcare.projects.locations.datasets.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/datasets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/datasets`

Lists the health datasets in the current project.

<h3 id="healthcareprojectslocationsdatasetslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the project whose datasets should be listed. For example, `projects/{project_id}/locations/{location_id}`.|
|pageSize|query|integer|false|The maximum number of items to return. If not specified, 100 is used. May not be larger than 1000.|
|pageToken|query|string|false|The next_page_token value returned from a previous List request, if any.|
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
  "datasets": [
    {
      "name": "string",
      "timeZone": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListDatasetsResponse](#schemalistdatasetsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.create

<a id="opIdhealthcare.projects.locations.datasets.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/datasets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "timeZone": "string"
  }'
```

`POST /v1beta1/{parent}/datasets`

Creates a new health dataset. Results are returned through the Operation interface which returns either an `Operation.response` which contains a Dataset or `Operation.error`. The metadata field type is OperationMetadata.

> Body parameter

```json
{
  "name": "string",
  "timeZone": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the project where the server creates the dataset. For example, `projects/{project_id}/locations/{location_id}`.|
|datasetId|query|string|false|The ID of the dataset that is being created. The string must match the following regex: `[\p{L}\p{N}_\-\.]{1,256}`.|
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
|body|body|[Dataset](#schemadataset)|false|none|
|» name|body|string|false|Resource name of the dataset, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`.|
|» timeZone|body|string|false|The default timezone used by this dataset. Must be a either a valid IANA time zone name such as "America/New_York" or empty, which defaults to UTC. This is used for parsing times in resources, such as HL7 messages, where no explicit timezone is specified.|

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

<h3 id="healthcareprojectslocationsdatasetscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.dicomStores.list

<a id="opIdhealthcare.projects.locations.datasets.dicomStores.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/dicomStores \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/dicomStores`

Lists the DICOM stores in the given dataset.

<h3 id="healthcareprojectslocationsdatasetsdicomstoreslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Name of the dataset.|
|filter|query|string|false|Restricts stores returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it's just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. Only filtering on labels is supported. For example, `labels.key=value`.|
|pageSize|query|integer|false|Limit on the number of DICOM stores to return in a single response. If not specified, 100 is used. May not be larger than 1000.|
|pageToken|query|string|false|The next_page_token value returned from the previous List request, if any.|
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
  "dicomStores": [
    {
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "notificationConfig": {
        "pubsubTopic": "string",
        "sendForBulkImport": true
      },
      "streamConfigs": [
        {
          "bigqueryDestination": {
            "force": true,
            "tableUri": "string",
            "writeDisposition": "WRITE_DISPOSITION_UNSPECIFIED"
          }
        }
      ]
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetsdicomstoreslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListDicomStoresResponse](#schemalistdicomstoresresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.dicomStores.create

<a id="opIdhealthcare.projects.locations.datasets.dicomStores.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/dicomStores \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "notificationConfig": {
      "pubsubTopic": "string",
      "sendForBulkImport": true
    },
    "streamConfigs": [
      {
        "bigqueryDestination": {
          "force": true,
          "tableUri": "string",
          "writeDisposition": "WRITE_DISPOSITION_UNSPECIFIED"
        }
      }
    ]
  }'
```

`POST /v1beta1/{parent}/dicomStores`

Creates a new DICOM store within the parent dataset.

> Body parameter

```json
{
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "notificationConfig": {
    "pubsubTopic": "string",
    "sendForBulkImport": true
  },
  "streamConfigs": [
    {
      "bigqueryDestination": {
        "force": true,
        "tableUri": "string",
        "writeDisposition": "WRITE_DISPOSITION_UNSPECIFIED"
      }
    }
  ]
}
```

<h3 id="healthcareprojectslocationsdatasetsdicomstorescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the dataset this DICOM store belongs to.|
|dicomStoreId|query|string|false|The ID of the DICOM store that is being created. Any string value up to 256 characters in length.|
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
|body|body|[DicomStore](#schemadicomstore)|false|none|
|» labels|body|object|false|User-supplied key-value pairs used to organize DICOM stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62} Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63} No more than 64 labels can be associated with a given store.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Resource name of the DICOM store, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.|
|» notificationConfig|body|[NotificationConfig](#schemanotificationconfig)|false|Notification destination for new DICOM instances. Supplied by the client.|
|» streamConfigs|body|[[GoogleCloudHealthcareV1beta1DicomStreamConfig](#schemagooglecloudhealthcarev1beta1dicomstreamconfig)]|false|A list of streaming configs used to configure the destination of streaming exports for every DICOM instance insertion in this DICOM store. After a new config is added to `stream_configs`, DICOM instance insertions are streamed to the new destination. When a config is removed from `stream_configs`, the server stops streaming to that destination. Each config must contain a unique destination.|

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
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "notificationConfig": {
    "pubsubTopic": "string",
    "sendForBulkImport": true
  },
  "streamConfigs": [
    {
      "bigqueryDestination": {
        "force": true,
        "tableUri": "string",
        "writeDisposition": "WRITE_DISPOSITION_UNSPECIFIED"
      }
    }
  ]
}
```

<h3 id="healthcareprojectslocationsdatasetsdicomstorescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DicomStore](#schemadicomstore)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.dicomStores.studies.series.instances.frames.retrieveRendered

<a id="opIdhealthcare.projects.locations.datasets.dicomStores.studies.series.instances.frames.retrieveRendered"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/dicomWeb/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/dicomWeb/{dicomWebPath}`

RetrieveRenderedFrames returns instances associated with the given study, series, SOP Instance UID and frame numbers in an acceptable Rendered Media Type. See [RetrieveTransaction](http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4). For details on the implementation of RetrieveRenderedFrames, see [Rendered resources](https://cloud.google.com/healthcare/docs/dicom#rendered_resources) in the Cloud Healthcare API conformance statement. For samples that show how to call RetrieveRenderedFrames, see [Retrieving consumer image formats](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#retrieving_consumer_image_formats).

<h3 id="healthcareprojectslocationsdatasetsdicomstoresstudiesseriesinstancesframesretrieverendered-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.|
|dicomWebPath|path|string|true|The path of the RetrieveRenderedFrames DICOMweb request. For example, `studies/{study_uid}/series/{series_uid}/instances/{instance_uid}/frames/{frame_list}/rendered`.|
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

<h3 id="healthcareprojectslocationsdatasetsdicomstoresstudiesseriesinstancesframesretrieverendered-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[HttpBody](#schemahttpbody)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.dicomStores.studies.storeInstances

<a id="opIdhealthcare.projects.locations.datasets.dicomStores.studies.storeInstances"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/dicomWeb/string \
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

`POST /v1beta1/{parent}/dicomWeb/{dicomWebPath}`

StoreInstances stores DICOM instances associated with study instance unique identifiers (SUID). See [Store Transaction](http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.5). For details on the implementation of StoreInstances, see [Store transaction](https://cloud.google.com/healthcare/docs/dicom#store_transaction) in the Cloud Healthcare API conformance statement. For samples that show how to call StoreInstances, see [Storing DICOM data](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#storing_dicom_data).

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

<h3 id="healthcareprojectslocationsdatasetsdicomstoresstudiesstoreinstances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.|
|dicomWebPath|path|string|true|The path of the StoreInstances DICOMweb request. For example, `studies/[{study_uid}]`. Note that the `study_uid` is optional.|
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
|body|body|[HttpBody](#schemahttpbody)|false|none|
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

<h3 id="healthcareprojectslocationsdatasetsdicomstoresstudiesstoreinstances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[HttpBody](#schemahttpbody)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.dicomStores.studies.series.instances.delete

<a id="opIdhealthcare.projects.locations.datasets.dicomStores.studies.series.instances.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/dicomWeb/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/{parent}/dicomWeb/{dicomWebPath}`

DeleteInstance deletes an instance associated with the given study, series, and SOP Instance UID. Delete requests are equivalent to the GET requests specified in the Retrieve transaction. Study and series search results can take a few seconds to be updated after an instance is deleted using DeleteInstance. For samples that show how to call DeleteInstance, see [Deleting a study, series, or instance](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#deleting_a_study_series_or_instance).

<h3 id="healthcareprojectslocationsdatasetsdicomstoresstudiesseriesinstancesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.|
|dicomWebPath|path|string|true|The path of the DeleteInstance request. For example, `studies/{study_uid}/series/{series_uid}/instances/{instance_uid}`.|
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

<h3 id="healthcareprojectslocationsdatasetsdicomstoresstudiesseriesinstancesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.fhirStores.fhir.executeBundle

<a id="opIdhealthcare.projects.locations.datasets.fhirStores.fhir.executeBundle"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/fhir \
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

`POST /v1beta1/{parent}/fhir`

Executes all the requests in the given Bundle. Implements the FHIR standard batch/transaction interaction ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/http.html#transaction), [STU3](https://hl7.org/implement/standards/fhir/STU3/http.html#transaction), [R4](https://hl7.org/implement/standards/fhir/R4/http.html#transaction)). Supports all interactions within a bundle, except search. This method accepts Bundles of type `batch` and `transaction`, processing them according to the batch processing rules ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/http.html#2.1.0.16.1), [STU3](https://hl7.org/implement/standards/fhir/STU3/http.html#2.21.0.17.1), [R4](https://hl7.org/implement/standards/fhir/R4/http.html#brules)) and transaction processing rules ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/http.html#2.1.0.16.2), [STU3](https://hl7.org/implement/standards/fhir/STU3/http.html#2.21.0.17.2), [R4](https://hl7.org/implement/standards/fhir/R4/http.html#trules)). The request body must contain a JSON-encoded FHIR `Bundle` resource, and the request headers must contain `Content-Type: application/fhir+json`. For a batch bundle or a successful transaction, the response body contains a JSON-encoded representation of a `Bundle` resource of type `batch-response` or `transaction-response` containing one entry for each entry in the request, with the outcome of processing the entry. In the case of an error for a transaction bundle, the response body contains a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. This method checks permissions for each request in the bundle. The `executeBundle` permission is required to call this method, but you must also grant sufficient permissions to execute the individual requests in the bundle. For example, if the bundle contains a request to create a FHIR resource, the caller must also have been granted the `healthcare.fhirResources.create` permission. You can use audit logs to view the permissions for `executeBundle` and each request in the bundle. For more information, see [Viewing Cloud Audit logs](https://cloud.google.com/healthcare-api/docs/how-tos/audit-logging). For samples that show how to call `executeBundle`, see [Managing FHIR resources using FHIR bundles](https://cloud.google.com/healthcare/docs/how-tos/fhir-bundles).

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

<h3 id="healthcareprojectslocationsdatasetsfhirstoresfhirexecutebundle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Name of the FHIR store in which this bundle will be executed.|
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
|body|body|[HttpBody](#schemahttpbody)|false|none|
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

<h3 id="healthcareprojectslocationsdatasetsfhirstoresfhirexecutebundle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[HttpBody](#schemahttpbody)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.fhirStores.fhir.Resource-incoming-references

<a id="opIdhealthcare.projects.locations.datasets.fhirStores.fhir.Resource-incoming-references"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/v1beta1/string/fhir/$references' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/fhir/$references`

Gets all incoming references to a given target FHIR resource. Can also get all incoming references when the target resource does not exist, for example, if the target has been deleted. On success, the response body contains a Bundle with type `searchset`, where each entry in the Bundle contains the full content of the resource. If the operation fails, an `OperationOutcome` is returned describing the failure. If the request cannot be mapped to a valid API method on a FHIR store, a generic Google Cloud error might be returned instead.

<h3 id="healthcareprojectslocationsdatasetsfhirstoresfhirresource-incoming-references-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the FHIR store that holds the target resource.|
|_count|query|integer|false|Maximum number of resources in a page. If not specified, 100 is used. May not be larger than 1000.|
|_page_token|query|string|false|Used to retrieve the next page of results when using pagination. Set `_page_token` to the value of _page_token set in next page links' url. Next page are returned in the response bundle's links field, where `link.relation` is "next". Omit `_page_token` if no previous request has been made.|
|_summary|query|string|false|Used to simplify the representation of the returned resources. `_summary=text` returns only the `text`, `id`, and `meta` top-level fields. `_summary=data` removes the `text` field and returns all other fields. `_summary=false` returns all parts of the resource(s). Either not providing this parameter or providing an empty value to this parameter also returns all parts of the resource(s).|
|_type|query|string|false|String of comma-delimited FHIR resource types. If provided, only resources of the specified resource type(s) are returned. If not provided or an empty value is provided, no filter on the returned resource type(s) is applied.|
|target|query|string|false|Required. The target whose incoming references are requested. This param is required and must not be empty. It uses the format "ResourceType/ResourceID", for example, target=ResourceType/ResourceID.|
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

<h3 id="healthcareprojectslocationsdatasetsfhirstoresfhirresource-incoming-references-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[HttpBody](#schemahttpbody)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.fhirStores.fhir.ConceptMap-search-translate

<a id="opIdhealthcare.projects.locations.datasets.fhirStores.fhir.ConceptMap-search-translate"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/v1beta1/string/fhir/ConceptMap/$translate' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/fhir/ConceptMap/$translate`

Translates a code from one value set to another by searching for appropriate concept maps. Implements the FHIR standard $translate operation ([DSTU2](https://www.hl7.org/fhir/DSTU2/operation-conceptmap-translate.html), [STU3](https://www.hl7.org/fhir/STU3/operation-conceptmap-translate.html), [R4](https://www.hl7.org/fhir/R4/operation-conceptmap-translate.html)). On success, the response body contains a JSON-encoded representation of a FHIR Parameters resource, which includes the translation result. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead.

<h3 id="healthcareprojectslocationsdatasetsfhirstoresfhirconceptmap-search-translate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name for the FHIR store containing the concept map(s) to use for the translation.|
|code|query|string|false|The code to translate.|
|conceptMapVersion|query|string|false|The version of the concept map to use. If unset, the most current version is used.|
|source|query|string|false|The source value set of the concept map to be used. If unset, target is used to search for concept maps.|
|system|query|string|false|The system for the code to be translated.|
|target|query|string|false|The target value set of the concept map to be used. If unset, source is used to search for concept maps.|
|url|query|string|false|The canonical url of the concept map to use. If unset, the source and target is used to search for concept maps.|
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

<h3 id="healthcareprojectslocationsdatasetsfhirstoresfhirconceptmap-search-translate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[HttpBody](#schemahttpbody)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.fhirStores.fhir.Observation-lastn

<a id="opIdhealthcare.projects.locations.datasets.fhirStores.fhir.Observation-lastn"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/v1beta1/string/fhir/Observation/$lastn' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/fhir/Observation/$lastn`

Retrieves the N most recent `Observation` resources for a subject matching search criteria specified as query parameters, grouped by `Observation.code`, sorted from most recent to oldest. Implements the FHIR extended operation Observation-lastn ([STU3](https://hl7.org/implement/standards/fhir/STU3/observation-operations.html#lastn), [R4](https://hl7.org/implement/standards/fhir/R4/observation-operations.html#lastn)). DSTU2 doesn't define the Observation-lastn method, but the server supports it the same way it supports STU3. Search terms are provided as query parameters following the same pattern as the search method. The following search parameters must be provided: - `subject` or `patient` to specify a subject for the Observation. - `code`, `category` or any of the composite parameters that include `code`. Any other valid Observation search parameters can also be provided. This operation accepts an additional query parameter `max`, which specifies N, the maximum number of Observations to return from each group, with a default of 1. Searches with over 1000 results are rejected. Results are counted before grouping and limiting the results with `max`. To stay within the limit, constrain these searches using Observation search parameters such as `_lastUpdated` or `date`. On success, the response body contains a JSON-encoded representation of a `Bundle` resource of type `searchset`, containing the results of the operation. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead.

<h3 id="healthcareprojectslocationsdatasetsfhirstoresfhirobservation-lastn-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Name of the FHIR store to retrieve resources from.|
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

<h3 id="healthcareprojectslocationsdatasetsfhirstoresfhirobservation-lastn-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[HttpBody](#schemahttpbody)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.fhirStores.fhir.search

<a id="opIdhealthcare.projects.locations.datasets.fhirStores.fhir.search"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/fhir/_search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "resourceType": "string"
  }'
```

`POST /v1beta1/{parent}/fhir/_search`

Searches for resources in the given FHIR store according to criteria specified as query parameters. Implements the FHIR standard search interaction ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/http.html#search), [STU3](https://hl7.org/implement/standards/fhir/STU3/http.html#search), [R4](https://hl7.org/implement/standards/fhir/R4/http.html#search)) using the search semantics described in the FHIR Search specification ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/search.html), [STU3](https://hl7.org/implement/standards/fhir/STU3/search.html), [R4](https://hl7.org/implement/standards/fhir/R4/search.html)). Supports four methods of search defined by the specification: * `GET [base]?[parameters]` to search across all resources. * `GET [base]/[type]?[parameters]` to search resources of a specified type. * `POST [base]/_search?[parameters]` as an alternate form having the same semantics as the `GET` method across all resources. * `POST [base]/[type]/_search?[parameters]` as an alternate form having the same semantics as the `GET` method for the specified type. The `GET` and `POST` methods do not support compartment searches. The `POST` method does not support `application/x-www-form-urlencoded` search parameters. On success, the response body contains a JSON-encoded representation of a `Bundle` resource of type `searchset`, containing the results of the search. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. The server's capability statement, retrieved through capabilities, indicates what search parameters are supported on each FHIR resource. A list of all search parameters defined by the specification can be found in the FHIR Search Parameter Registry ([STU3](https://hl7.org/implement/standards/fhir/STU3/searchparameter-registry.html), [R4](https://hl7.org/implement/standards/fhir/R4/searchparameter-registry.html)). FHIR search parameters for DSTU2 can be found on each resource's definition page. Supported search modifiers: `:missing`, `:exact`, `:contains`, `:text`, `:in`, `:not-in`, `:above`, `:below`, `:[type]`, `:not`, and `recurse` (DSTU2 and STU3) or `:iterate` (R4). Supported search result parameters: `_sort`, `_count`, `_include`, `_revinclude`, `_summary=text`, `_summary=data`, and `_elements`. The maximum number of search results returned defaults to 100, which can be overridden by the `_count` parameter up to a maximum limit of 1000. The server might return fewer resources than requested to prevent excessively large responses. If there are additional results, the returned `Bundle` contains a link of `relation` "next", which has a `_page_token` parameter for an opaque pagination token that can be used to retrieve the next page. Resources with a total size larger than 5MB or a field count larger than 50,000 might not be fully searchable as the server might trim its generated search index in those cases. Note: FHIR resources are indexed asynchronously, so there might be a slight delay between the time a resource is created or changes and when the change is reflected in search results. For samples and detailed information, see [Searching for FHIR resources](https://cloud.google.com/healthcare/docs/how-tos/fhir-search) and [Advanced FHIR search features](https://cloud.google.com/healthcare/docs/how-tos/fhir-advanced-search).

> Body parameter

```json
{
  "resourceType": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetsfhirstoresfhirsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Name of the FHIR store to retrieve resources from.|
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
|body|body|[SearchResourcesRequest](#schemasearchresourcesrequest)|false|none|
|» resourceType|body|string|false|The FHIR resource type to search, such as Patient or Observation. For a complete list, see the FHIR Resource Index ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](https://hl7.org/implement/standards/fhir/STU3/resourcelist.html), [R4](https://hl7.org/implement/standards/fhir/R4/resourcelist.html)).|

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

<h3 id="healthcareprojectslocationsdatasetsfhirstoresfhirsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[HttpBody](#schemahttpbody)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.fhirStores.fhir.search-type

<a id="opIdhealthcare.projects.locations.datasets.fhirStores.fhir.search-type"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/fhir/string/_search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "resourceType": "string"
  }'
```

`POST /v1beta1/{parent}/fhir/{resourceType}/_search`

Searches for resources in the given FHIR store according to criteria specified as query parameters. Implements the FHIR standard search interaction ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/http.html#search), [STU3](https://hl7.org/implement/standards/fhir/STU3/http.html#search), [R4](https://hl7.org/implement/standards/fhir/R4/http.html#search)) using the search semantics described in the FHIR Search specification ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/search.html), [STU3](https://hl7.org/implement/standards/fhir/STU3/search.html), [R4](https://hl7.org/implement/standards/fhir/R4/search.html)). Supports four methods of search defined by the specification: * `GET [base]?[parameters]` to search across all resources. * `GET [base]/[type]?[parameters]` to search resources of a specified type. * `POST [base]/_search?[parameters]` as an alternate form having the same semantics as the `GET` method across all resources. * `POST [base]/[type]/_search?[parameters]` as an alternate form having the same semantics as the `GET` method for the specified type. The `GET` and `POST` methods do not support compartment searches. The `POST` method does not support `application/x-www-form-urlencoded` search parameters. On success, the response body contains a JSON-encoded representation of a `Bundle` resource of type `searchset`, containing the results of the search. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. The server's capability statement, retrieved through capabilities, indicates what search parameters are supported on each FHIR resource. A list of all search parameters defined by the specification can be found in the FHIR Search Parameter Registry ([STU3](https://hl7.org/implement/standards/fhir/STU3/searchparameter-registry.html), [R4](https://hl7.org/implement/standards/fhir/R4/searchparameter-registry.html)). FHIR search parameters for DSTU2 can be found on each resource's definition page. Supported search modifiers: `:missing`, `:exact`, `:contains`, `:text`, `:in`, `:not-in`, `:above`, `:below`, `:[type]`, `:not`, and `recurse` (DSTU2 and STU3) or `:iterate` (R4). Supported search result parameters: `_sort`, `_count`, `_include`, `_revinclude`, `_summary=text`, `_summary=data`, and `_elements`. The maximum number of search results returned defaults to 100, which can be overridden by the `_count` parameter up to a maximum limit of 1000. The server might return fewer resources than requested to prevent excessively large responses. If there are additional results, the returned `Bundle` contains a link of `relation` "next", which has a `_page_token` parameter for an opaque pagination token that can be used to retrieve the next page. Resources with a total size larger than 5MB or a field count larger than 50,000 might not be fully searchable as the server might trim its generated search index in those cases. Note: FHIR resources are indexed asynchronously, so there might be a slight delay between the time a resource is created or changes and when the change is reflected in search results. For samples and detailed information, see [Searching for FHIR resources](https://cloud.google.com/healthcare/docs/how-tos/fhir-search) and [Advanced FHIR search features](https://cloud.google.com/healthcare/docs/how-tos/fhir-advanced-search).

> Body parameter

```json
{
  "resourceType": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetsfhirstoresfhirsearch-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Name of the FHIR store to retrieve resources from.|
|resourceType|path|string|true|The FHIR resource type to search, such as Patient or Observation. For a complete list, see the FHIR Resource Index ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](https://hl7.org/implement/standards/fhir/STU3/resourcelist.html), [R4](https://hl7.org/implement/standards/fhir/R4/resourcelist.html)).|
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
|body|body|[SearchResourcesRequest](#schemasearchresourcesrequest)|false|none|
|» resourceType|body|string|false|The FHIR resource type to search, such as Patient or Observation. For a complete list, see the FHIR Resource Index ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](https://hl7.org/implement/standards/fhir/STU3/resourcelist.html), [R4](https://hl7.org/implement/standards/fhir/R4/resourcelist.html)).|

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

<h3 id="healthcareprojectslocationsdatasetsfhirstoresfhirsearch-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[HttpBody](#schemahttpbody)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.fhirStores.fhir.conditionalUpdate

<a id="opIdhealthcare.projects.locations.datasets.fhirStores.fhir.conditionalUpdate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/fhir/string \
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

`PUT /v1beta1/{parent}/fhir/{type}`

If a resource is found based on the search criteria specified in the query parameters, updates the entire contents of that resource. Implements the FHIR standard conditional update interaction ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/http.html#2.1.0.10.2), [STU3](https://hl7.org/implement/standards/fhir/STU3/http.html#cond-update), [R4](https://hl7.org/implement/standards/fhir/R4/http.html#cond-update)). Search terms are provided as query parameters following the same pattern as the search method. If the search criteria identify more than one match, the request returns a `412 Precondition Failed` error. If the search criteria identify zero matches, and the supplied resource body contains an `id`, and the FHIR store has enable_update_create set, creates the resource with the client-specified ID. It is strongly advised not to include or encode any sensitive data such as patient identifiers in client-specified resource IDs. Those IDs are part of the FHIR resource path recorded in Cloud Audit Logs and Pub/Sub notifications. Those IDs can also be contained in reference fields within other resources. If the search criteria identify zero matches, and the supplied resource body does not contain an `id`, the resource is created with a server-assigned ID as per the create method. The request body must contain a JSON-encoded FHIR resource, and the request headers must contain `Content-Type: application/fhir+json`. On success, the response body contains a JSON-encoded representation of the updated resource, including the server-assigned version ID. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. This method requires the`healthcare.fhirStores.searchResources` and `healthcare.fhirResources.update` permissions on the parent FHIR store. For samples that show how to call `conditionalUpdate`, see [Conditionally updating a FHIR resource](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#conditionally_updating_a_fhir_resource).

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

<h3 id="healthcareprojectslocationsdatasetsfhirstoresfhirconditionalupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the FHIR store this resource belongs to.|
|type|path|string|true|The FHIR resource type to update, such as Patient or Observation. For a complete list, see the FHIR Resource Index ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](https://hl7.org/implement/standards/fhir/STU3/resourcelist.html), [R4](https://hl7.org/implement/standards/fhir/R4/resourcelist.html)). Must match the resource type in the provided content.|
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
|body|body|[HttpBody](#schemahttpbody)|false|none|
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

<h3 id="healthcareprojectslocationsdatasetsfhirstoresfhirconditionalupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[HttpBody](#schemahttpbody)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.fhirStores.fhir.create

<a id="opIdhealthcare.projects.locations.datasets.fhirStores.fhir.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/fhir/string \
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

`POST /v1beta1/{parent}/fhir/{type}`

Creates a FHIR resource. Implements the FHIR standard create interaction ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/http.html#create), [STU3](https://hl7.org/implement/standards/fhir/STU3/http.html#create), [R4](https://hl7.org/implement/standards/fhir/R4/http.html#create)), which creates a new resource with a server-assigned resource ID. Also supports the FHIR standard conditional create interaction ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/http.html#ccreate), [STU3](https://hl7.org/implement/standards/fhir/STU3/http.html#ccreate), [R4](https://hl7.org/implement/standards/fhir/R4/http.html#ccreate)), specified by supplying an `If-None-Exist` header containing a FHIR search query. If no resources match this search query, the server processes the create operation as normal. The request body must contain a JSON-encoded FHIR resource, and the request headers must contain `Content-Type: application/fhir+json`. On success, the response body contains a JSON-encoded representation of the resource as it was created on the server, including the server-assigned resource ID and version ID. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. For samples that show how to call `create`, see [Creating a FHIR resource](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#creating_a_fhir_resource).

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

<h3 id="healthcareprojectslocationsdatasetsfhirstoresfhircreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the FHIR store this resource belongs to.|
|type|path|string|true|The FHIR resource type to create, such as Patient or Observation. For a complete list, see the FHIR Resource Index ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](https://hl7.org/implement/standards/fhir/STU3/resourcelist.html), [R4](https://hl7.org/implement/standards/fhir/R4/resourcelist.html)). Must match the resource type in the provided content.|
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
|body|body|[HttpBody](#schemahttpbody)|false|none|
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

<h3 id="healthcareprojectslocationsdatasetsfhirstoresfhircreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[HttpBody](#schemahttpbody)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.fhirStores.fhir.conditionalDelete

<a id="opIdhealthcare.projects.locations.datasets.fhirStores.fhir.conditionalDelete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/fhir/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/{parent}/fhir/{type}`

Deletes FHIR resources that match a search query. Implements the FHIR standard conditional delete interaction ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/http.html#2.1.0.12.1), [STU3](https://hl7.org/implement/standards/fhir/STU3/http.html#2.21.0.13.1), [R4](https://hl7.org/implement/standards/fhir/R4/http.html#3.1.0.7.1)). If multiple resources match, all matching resources are deleted. Search terms are provided as query parameters following the same pattern as the search method. Not all FHIR resources that match the search query might be deleted because, by default, a maximum of 100 FHIR resources can be deleted. The number of FHIR resources that can be deleted depends on the page size of the returned resources, which you can control using the `_count` query parameter. Even when using `_count`, you can delete a maximum 1,000 FHIR resources per each call of `conditionalDelete`. Note: Unless resource versioning is disabled by setting the disable_resource_versioning flag on the FHIR store, the deleted resources are moved to a history repository that can still be retrieved through vread and related methods, unless they are removed by the purge method. This method requires the`healthcare.fhirStores.searchResources` and `healthcare.fhirResources.delete` permissions on the parent FHIR store. For samples that show how to call `conditionalDelete`, see [Conditionally deleting a FHIR resource](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#conditionally_deleting_a_fhir_resource).

<h3 id="healthcareprojectslocationsdatasetsfhirstoresfhirconditionaldelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the FHIR store this resource belongs to.|
|type|path|string|true|The FHIR resource type to delete, such as Patient or Observation. For a complete list, see the FHIR Resource Index ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](https://hl7.org/implement/standards/fhir/STU3/resourcelist.html), [R4](https://hl7.org/implement/standards/fhir/R4/resourcelist.html)).|
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

<h3 id="healthcareprojectslocationsdatasetsfhirstoresfhirconditionaldelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.fhirStores.fhir.conditionalPatch

<a id="opIdhealthcare.projects.locations.datasets.fhirStores.fhir.conditionalPatch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/fhir/string \
  -X PATCH \
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

`PATCH /v1beta1/{parent}/fhir/{type}`

If a resource is found based on the search criteria specified in the query parameters, updates part of that resource by applying the operations specified in a [JSON Patch](http://jsonpatch.com/) document. Implements the FHIR standard conditional patch interaction ([STU3](https://hl7.org/implement/standards/fhir/STU3/http.html#patch), [R4](https://hl7.org/implement/standards/fhir/R4/http.html#patch)). DSTU2 doesn't define a conditional patch method, but the server supports it in the same way it supports STU3. Search terms are provided as query parameters following the same pattern as the search method. If the search criteria identify more than one match, the request returns a `412 Precondition Failed` error. The request body must contain a JSON Patch document, and the request headers must contain `Content-Type: application/json-patch+json`. On success, the response body contains a JSON-encoded representation of the updated resource, including the server-assigned version ID. Errors generated by the FHIR store contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. This method requires the`healthcare.fhirStores.searchResources` permission on the parent FHIR store and the `healthcare.fhirResources.patch` permission on the requested FHIR store resource. For samples that show how to call `conditionalPatch`, see [Conditionally patching a FHIR resource](https://cloud.google.com/healthcare/docs/how-tos/fhir-resources#conditionally_patching_a_fhir_resource).

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

<h3 id="healthcareprojectslocationsdatasetsfhirstoresfhirconditionalpatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the FHIR store this resource belongs to.|
|type|path|string|true|The FHIR resource type to update, such as Patient or Observation. For a complete list, see the FHIR Resource Index ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](https://hl7.org/implement/standards/fhir/STU3/resourcelist.html), [R4](https://hl7.org/implement/standards/fhir/R4/resourcelist.html)).|
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
|body|body|[HttpBody](#schemahttpbody)|false|none|
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

<h3 id="healthcareprojectslocationsdatasetsfhirstoresfhirconditionalpatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[HttpBody](#schemahttpbody)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.fhirStores.fhir.Resource-validate

<a id="opIdhealthcare.projects.locations.datasets.fhirStores.fhir.Resource-validate"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/v1beta1/string/fhir/string/$validate' \
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

`POST /v1beta1/{parent}/fhir/{type}/$validate`

Validates an input FHIR resource's conformance to its profiles and the profiles configured on the FHIR store. Implements the FHIR extended operation $validate ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/resource-operations.html#validate), [STU3](http://hl7.org/implement/standards/fhir/STU3/resource-operations.html#validate), or [R4](http://hl7.org/implement/standards/fhir/R4/resource-operation-validate.html)). The request body must contain a JSON-encoded FHIR resource, and the request headers must contain `Content-Type: application/fhir+json`. The `Parameters` input syntax is not supported. The `profile` query parameter can be used to request that the resource only be validated against a specific profile. If a profile with the given URL cannot be found in the FHIR store then an error is returned. Errors generated by validation contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead.

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

<h3 id="healthcareprojectslocationsdatasetsfhirstoresfhirresource-validate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the FHIR store that holds the profiles being used for validation.|
|type|path|string|true|The FHIR resource type of the resource being validated. For a complete list, see the FHIR Resource Index ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html), or [R4](http://hl7.org/implement/standards/fhir/R4/resourcelist.html)). Must match the resource type in the provided content.|
|profile|query|string|false|The canonical URL of a profile that this resource should be validated against. For example, to validate a Patient resource against the US Core Patient profile this parameter would be `http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient`. A StructureDefinition with this canonical URL must exist in the FHIR store.|
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
|body|body|[HttpBody](#schemahttpbody)|false|none|
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

<h3 id="healthcareprojectslocationsdatasetsfhirstoresfhirresource-validate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[HttpBody](#schemahttpbody)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.fhirStores.list

<a id="opIdhealthcare.projects.locations.datasets.fhirStores.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/fhirStores \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/fhirStores`

Lists the FHIR stores in the given dataset.

<h3 id="healthcareprojectslocationsdatasetsfhirstoreslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Name of the dataset.|
|filter|query|string|false|Restricts stores returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it's just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. Only filtering on labels is supported, for example `labels.key=value`.|
|pageSize|query|integer|false|Limit on the number of FHIR stores to return in a single response. If not specified, 100 is used. May not be larger than 1000.|
|pageToken|query|string|false|The next_page_token value returned from the previous List request, if any.|
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
  "fhirStores": [
    {
      "complexDataTypeReferenceParsing": "COMPLEX_DATA_TYPE_REFERENCE_PARSING_UNSPECIFIED",
      "defaultSearchHandlingStrict": true,
      "disableReferentialIntegrity": true,
      "disableResourceVersioning": true,
      "enableUpdateCreate": true,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "notificationConfig": {
        "pubsubTopic": "string",
        "sendForBulkImport": true
      },
      "notificationConfigs": [
        {
          "pubsubTopic": "string",
          "sendFullResource": true
        }
      ],
      "searchConfig": {
        "searchParameters": [
          {
            "canonicalUrl": "string",
            "parameter": "string"
          }
        ]
      },
      "streamConfigs": [
        {
          "bigqueryDestination": {
            "datasetUri": "string",
            "force": true,
            "schemaConfig": {
              "lastUpdatedPartitionConfig": {
                "expirationMs": "string",
                "type": "PARTITION_TYPE_UNSPECIFIED"
              },
              "recursiveStructureDepth": "string",
              "schemaType": "SCHEMA_TYPE_UNSPECIFIED"
            },
            "writeDisposition": "WRITE_DISPOSITION_UNSPECIFIED"
          },
          "deidentifiedStoreDestination": {
            "config": {
              "annotation": {
                "annotationStoreName": "string",
                "storeQuote": true
              },
              "dicom": {
                "filterProfile": "TAG_FILTER_PROFILE_UNSPECIFIED",
                "keepList": {
                  "tags": [
                    "string"
                  ]
                },
                "removeList": {
                  "tags": [
                    "string"
                  ]
                },
                "skipIdRedaction": true
              },
              "dicomTagConfig": {
                "actions": [
                  {
                    "cleanImageTag": {
                      "additionalInfoTypes": [
                        "string"
                      ],
                      "excludeInfoTypes": [
                        "string"
                      ],
                      "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
                    },
                    "cleanTextTag": {},
                    "deleteTag": {},
                    "keepTag": {},
                    "queries": [
                      "string"
                    ],
                    "recurseTag": {},
                    "regenUidTag": {},
                    "removeTag": {},
                    "resetTag": {}
                  }
                ],
                "options": {
                  "cleanDescriptors": {},
                  "cleanImage": {
                    "additionalInfoTypes": [
                      "string"
                    ],
                    "excludeInfoTypes": [
                      "string"
                    ],
                    "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
                  },
                  "primaryIds": "PRIMARY_IDS_OPTION_UNSPECIFIED"
                },
                "profileType": "PROFILE_TYPE_UNSPECIFIED"
              },
              "fhir": {
                "defaultKeepExtensions": true,
                "fieldMetadataList": [
                  {
                    "action": "ACTION_UNSPECIFIED",
                    "paths": [
                      "string"
                    ]
                  }
                ]
              },
              "fhirFieldConfig": {
                "fieldMetadataList": [
                  {
                    "characterMaskField": {},
                    "cleanTextField": {},
                    "cryptoHashField": {},
                    "dateShiftField": {},
                    "keepField": {},
                    "paths": [
                      "string"
                    ],
                    "removeField": {}
                  }
                ],
                "options": {
                  "characterMaskConfig": {
                    "maskingCharacter": "string"
                  },
                  "contextualDeid": {},
                  "cryptoHashConfig": {
                    "cryptoKey": "string",
                    "kmsWrapped": {
                      "cryptoKey": "string",
                      "wrappedKey": "string"
                    }
                  },
                  "dateShiftConfig": {
                    "cryptoKey": "string",
                    "kmsWrapped": {
                      "cryptoKey": "string",
                      "wrappedKey": "string"
                    }
                  },
                  "keepExtensions": {}
                },
                "profileType": "PROFILE_TYPE_UNSPECIFIED"
              },
              "image": {
                "additionalInfoTypes": [
                  "string"
                ],
                "excludeInfoTypes": [
                  "string"
                ],
                "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
              },
              "operationMetadata": {
                "fhirOutput": {
                  "fhirStore": "string"
                }
              },
              "text": {
                "additionalTransformations": [
                  {
                    "characterMaskConfig": {
                      "maskingCharacter": "string"
                    },
                    "cryptoHashConfig": {
                      "cryptoKey": "string",
                      "kmsWrapped": {
                        "cryptoKey": "string",
                        "wrappedKey": "string"
                      }
                    },
                    "dateShiftConfig": {
                      "cryptoKey": "string",
                      "kmsWrapped": {
                        "cryptoKey": "string",
                        "wrappedKey": "string"
                      }
                    },
                    "infoTypes": [
                      "string"
                    ],
                    "redactConfig": {},
                    "replaceWithInfoTypeConfig": {}
                  }
                ],
                "excludeInfoTypes": [
                  "string"
                ],
                "profileType": "PROFILE_TYPE_UNSPECIFIED",
                "transformations": [
                  {
                    "characterMaskConfig": {
                      "maskingCharacter": "string"
                    },
                    "cryptoHashConfig": {
                      "cryptoKey": "string",
                      "kmsWrapped": {
                        "cryptoKey": "string",
                        "wrappedKey": "string"
                      }
                    },
                    "dateShiftConfig": {
                      "cryptoKey": "string",
                      "kmsWrapped": {
                        "cryptoKey": "string",
                        "wrappedKey": "string"
                      }
                    },
                    "infoTypes": [
                      "string"
                    ],
                    "redactConfig": {},
                    "replaceWithInfoTypeConfig": {}
                  }
                ]
              }
            },
            "store": "string"
          },
          "resourceTypes": [
            "string"
          ]
        }
      ],
      "validationConfig": {
        "disableFhirpathValidation": true,
        "disableProfileValidation": true,
        "disableReferenceTypeValidation": true,
        "disableRequiredFieldValidation": true,
        "enabledImplementationGuides": [
          "string"
        ]
      },
      "version": "VERSION_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetsfhirstoreslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListFhirStoresResponse](#schemalistfhirstoresresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.fhirStores.create

<a id="opIdhealthcare.projects.locations.datasets.fhirStores.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/fhirStores \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "complexDataTypeReferenceParsing": "COMPLEX_DATA_TYPE_REFERENCE_PARSING_UNSPECIFIED",
    "defaultSearchHandlingStrict": true,
    "disableReferentialIntegrity": true,
    "disableResourceVersioning": true,
    "enableUpdateCreate": true,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "notificationConfig": {
      "pubsubTopic": "string",
      "sendForBulkImport": true
    },
    "notificationConfigs": [
      {
        "pubsubTopic": "string",
        "sendFullResource": true
      }
    ],
    "searchConfig": {
      "searchParameters": [
        {
          "canonicalUrl": "string",
          "parameter": "string"
        }
      ]
    },
    "streamConfigs": [
      {
        "bigqueryDestination": {
          "datasetUri": "string",
          "force": true,
          "schemaConfig": {
            "lastUpdatedPartitionConfig": {
              "expirationMs": "string",
              "type": "PARTITION_TYPE_UNSPECIFIED"
            },
            "recursiveStructureDepth": "string",
            "schemaType": "SCHEMA_TYPE_UNSPECIFIED"
          },
          "writeDisposition": "WRITE_DISPOSITION_UNSPECIFIED"
        },
        "deidentifiedStoreDestination": {
          "config": {
            "annotation": {
              "annotationStoreName": "string",
              "storeQuote": true
            },
            "dicom": {
              "filterProfile": "TAG_FILTER_PROFILE_UNSPECIFIED",
              "keepList": {
                "tags": [
                  "string"
                ]
              },
              "removeList": {
                "tags": [
                  "string"
                ]
              },
              "skipIdRedaction": true
            },
            "dicomTagConfig": {
              "actions": [
                {
                  "cleanImageTag": {
                    "additionalInfoTypes": [
                      "string"
                    ],
                    "excludeInfoTypes": [
                      "string"
                    ],
                    "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
                  },
                  "cleanTextTag": {},
                  "deleteTag": {},
                  "keepTag": {},
                  "queries": [
                    "string"
                  ],
                  "recurseTag": {},
                  "regenUidTag": {},
                  "removeTag": {},
                  "resetTag": {}
                }
              ],
              "options": {
                "cleanDescriptors": {},
                "cleanImage": {
                  "additionalInfoTypes": [
                    "string"
                  ],
                  "excludeInfoTypes": [
                    "string"
                  ],
                  "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
                },
                "primaryIds": "PRIMARY_IDS_OPTION_UNSPECIFIED"
              },
              "profileType": "PROFILE_TYPE_UNSPECIFIED"
            },
            "fhir": {
              "defaultKeepExtensions": true,
              "fieldMetadataList": [
                {
                  "action": "ACTION_UNSPECIFIED",
                  "paths": [
                    "string"
                  ]
                }
              ]
            },
            "fhirFieldConfig": {
              "fieldMetadataList": [
                {
                  "characterMaskField": {},
                  "cleanTextField": {},
                  "cryptoHashField": {},
                  "dateShiftField": {},
                  "keepField": {},
                  "paths": [
                    "string"
                  ],
                  "removeField": {}
                }
              ],
              "options": {
                "characterMaskConfig": {
                  "maskingCharacter": "string"
                },
                "contextualDeid": {},
                "cryptoHashConfig": {
                  "cryptoKey": "string",
                  "kmsWrapped": {
                    "cryptoKey": "string",
                    "wrappedKey": "string"
                  }
                },
                "dateShiftConfig": {
                  "cryptoKey": "string",
                  "kmsWrapped": {
                    "cryptoKey": "string",
                    "wrappedKey": "string"
                  }
                },
                "keepExtensions": {}
              },
              "profileType": "PROFILE_TYPE_UNSPECIFIED"
            },
            "image": {
              "additionalInfoTypes": [
                "string"
              ],
              "excludeInfoTypes": [
                "string"
              ],
              "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
            },
            "operationMetadata": {
              "fhirOutput": {
                "fhirStore": "string"
              }
            },
            "text": {
              "additionalTransformations": [
                {
                  "characterMaskConfig": {
                    "maskingCharacter": "string"
                  },
                  "cryptoHashConfig": {
                    "cryptoKey": "string",
                    "kmsWrapped": {
                      "cryptoKey": "string",
                      "wrappedKey": "string"
                    }
                  },
                  "dateShiftConfig": {
                    "cryptoKey": "string",
                    "kmsWrapped": {
                      "cryptoKey": "string",
                      "wrappedKey": "string"
                    }
                  },
                  "infoTypes": [
                    "string"
                  ],
                  "redactConfig": {},
                  "replaceWithInfoTypeConfig": {}
                }
              ],
              "excludeInfoTypes": [
                "string"
              ],
              "profileType": "PROFILE_TYPE_UNSPECIFIED",
              "transformations": [
                {
                  "characterMaskConfig": {
                    "maskingCharacter": "string"
                  },
                  "cryptoHashConfig": {
                    "cryptoKey": "string",
                    "kmsWrapped": {
                      "cryptoKey": "string",
                      "wrappedKey": "string"
                    }
                  },
                  "dateShiftConfig": {
                    "cryptoKey": "string",
                    "kmsWrapped": {
                      "cryptoKey": "string",
                      "wrappedKey": "string"
                    }
                  },
                  "infoTypes": [
                    "string"
                  ],
                  "redactConfig": {},
                  "replaceWithInfoTypeConfig": {}
                }
              ]
            }
          },
          "store": "string"
        },
        "resourceTypes": [
          "string"
        ]
      }
    ],
    "validationConfig": {
      "disableFhirpathValidation": true,
      "disableProfileValidation": true,
      "disableReferenceTypeValidation": true,
      "disableRequiredFieldValidation": true,
      "enabledImplementationGuides": [
        "string"
      ]
    },
    "version": "VERSION_UNSPECIFIED"
  }'
```

`POST /v1beta1/{parent}/fhirStores`

Creates a new FHIR store within the parent dataset.

> Body parameter

```json
{
  "complexDataTypeReferenceParsing": "COMPLEX_DATA_TYPE_REFERENCE_PARSING_UNSPECIFIED",
  "defaultSearchHandlingStrict": true,
  "disableReferentialIntegrity": true,
  "disableResourceVersioning": true,
  "enableUpdateCreate": true,
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "notificationConfig": {
    "pubsubTopic": "string",
    "sendForBulkImport": true
  },
  "notificationConfigs": [
    {
      "pubsubTopic": "string",
      "sendFullResource": true
    }
  ],
  "searchConfig": {
    "searchParameters": [
      {
        "canonicalUrl": "string",
        "parameter": "string"
      }
    ]
  },
  "streamConfigs": [
    {
      "bigqueryDestination": {
        "datasetUri": "string",
        "force": true,
        "schemaConfig": {
          "lastUpdatedPartitionConfig": {
            "expirationMs": "string",
            "type": "PARTITION_TYPE_UNSPECIFIED"
          },
          "recursiveStructureDepth": "string",
          "schemaType": "SCHEMA_TYPE_UNSPECIFIED"
        },
        "writeDisposition": "WRITE_DISPOSITION_UNSPECIFIED"
      },
      "deidentifiedStoreDestination": {
        "config": {
          "annotation": {
            "annotationStoreName": "string",
            "storeQuote": true
          },
          "dicom": {
            "filterProfile": "TAG_FILTER_PROFILE_UNSPECIFIED",
            "keepList": {
              "tags": [
                "string"
              ]
            },
            "removeList": {
              "tags": [
                "string"
              ]
            },
            "skipIdRedaction": true
          },
          "dicomTagConfig": {
            "actions": [
              {
                "cleanImageTag": {
                  "additionalInfoTypes": [
                    "string"
                  ],
                  "excludeInfoTypes": [
                    "string"
                  ],
                  "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
                },
                "cleanTextTag": {},
                "deleteTag": {},
                "keepTag": {},
                "queries": [
                  "string"
                ],
                "recurseTag": {},
                "regenUidTag": {},
                "removeTag": {},
                "resetTag": {}
              }
            ],
            "options": {
              "cleanDescriptors": {},
              "cleanImage": {
                "additionalInfoTypes": [
                  "string"
                ],
                "excludeInfoTypes": [
                  "string"
                ],
                "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
              },
              "primaryIds": "PRIMARY_IDS_OPTION_UNSPECIFIED"
            },
            "profileType": "PROFILE_TYPE_UNSPECIFIED"
          },
          "fhir": {
            "defaultKeepExtensions": true,
            "fieldMetadataList": [
              {
                "action": "ACTION_UNSPECIFIED",
                "paths": [
                  "string"
                ]
              }
            ]
          },
          "fhirFieldConfig": {
            "fieldMetadataList": [
              {
                "characterMaskField": {},
                "cleanTextField": {},
                "cryptoHashField": {},
                "dateShiftField": {},
                "keepField": {},
                "paths": [
                  "string"
                ],
                "removeField": {}
              }
            ],
            "options": {
              "characterMaskConfig": {
                "maskingCharacter": "string"
              },
              "contextualDeid": {},
              "cryptoHashConfig": {
                "cryptoKey": "string",
                "kmsWrapped": {
                  "cryptoKey": "string",
                  "wrappedKey": "string"
                }
              },
              "dateShiftConfig": {
                "cryptoKey": "string",
                "kmsWrapped": {
                  "cryptoKey": "string",
                  "wrappedKey": "string"
                }
              },
              "keepExtensions": {}
            },
            "profileType": "PROFILE_TYPE_UNSPECIFIED"
          },
          "image": {
            "additionalInfoTypes": [
              "string"
            ],
            "excludeInfoTypes": [
              "string"
            ],
            "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
          },
          "operationMetadata": {
            "fhirOutput": {
              "fhirStore": "string"
            }
          },
          "text": {
            "additionalTransformations": [
              {
                "characterMaskConfig": {
                  "maskingCharacter": "string"
                },
                "cryptoHashConfig": {
                  "cryptoKey": "string",
                  "kmsWrapped": {
                    "cryptoKey": "string",
                    "wrappedKey": "string"
                  }
                },
                "dateShiftConfig": {
                  "cryptoKey": "string",
                  "kmsWrapped": {
                    "cryptoKey": "string",
                    "wrappedKey": "string"
                  }
                },
                "infoTypes": [
                  "string"
                ],
                "redactConfig": {},
                "replaceWithInfoTypeConfig": {}
              }
            ],
            "excludeInfoTypes": [
              "string"
            ],
            "profileType": "PROFILE_TYPE_UNSPECIFIED",
            "transformations": [
              {
                "characterMaskConfig": {
                  "maskingCharacter": "string"
                },
                "cryptoHashConfig": {
                  "cryptoKey": "string",
                  "kmsWrapped": {
                    "cryptoKey": "string",
                    "wrappedKey": "string"
                  }
                },
                "dateShiftConfig": {
                  "cryptoKey": "string",
                  "kmsWrapped": {
                    "cryptoKey": "string",
                    "wrappedKey": "string"
                  }
                },
                "infoTypes": [
                  "string"
                ],
                "redactConfig": {},
                "replaceWithInfoTypeConfig": {}
              }
            ]
          }
        },
        "store": "string"
      },
      "resourceTypes": [
        "string"
      ]
    }
  ],
  "validationConfig": {
    "disableFhirpathValidation": true,
    "disableProfileValidation": true,
    "disableReferenceTypeValidation": true,
    "disableRequiredFieldValidation": true,
    "enabledImplementationGuides": [
      "string"
    ]
  },
  "version": "VERSION_UNSPECIFIED"
}
```

<h3 id="healthcareprojectslocationsdatasetsfhirstorescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the dataset this FHIR store belongs to.|
|fhirStoreId|query|string|false|The ID of the FHIR store that is being created. The string must match the following regex: `[\p{L}\p{N}_\-\.]{1,256}`.|
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
|body|body|[FhirStore](#schemafhirstore)|false|none|
|» complexDataTypeReferenceParsing|body|string|false|Enable parsing of references within complex FHIR data types such as Extensions. If this value is set to ENABLED, then features like referential integrity and Bundle reference rewriting apply to all references. If this flag has not been specified the behavior of the FHIR store will not change, references in complex data types will not be parsed. New stores will have this value set to ENABLED after a notification period. Warning: turning on this flag causes processing existing resources to fail if they contain references to non-existent resources.|
|» defaultSearchHandlingStrict|body|boolean|false|If true, overrides the default search behavior for this FHIR store to `handling=strict` which returns an error for unrecognized search parameters. If false, uses the FHIR specification default `handling=lenient` which ignores unrecognized search parameters. The handling can always be changed from the default on an individual API call by setting the HTTP header `Prefer: handling=strict` or `Prefer: handling=lenient`.|
|» disableReferentialIntegrity|body|boolean|false|Immutable. Whether to disable referential integrity in this FHIR store. This field is immutable after FHIR store creation. The default value is false, meaning that the API enforces referential integrity and fails the requests that result in inconsistent state in the FHIR store. When this field is set to true, the API skips referential integrity checks. Consequently, operations that rely on references, such as GetPatientEverything, do not return all the results if broken references exist.|
|» disableResourceVersioning|body|boolean|false|Immutable. Whether to disable resource versioning for this FHIR store. This field can not be changed after the creation of FHIR store. If set to false, which is the default behavior, all write operations cause historical versions to be recorded automatically. The historical versions can be fetched through the history APIs, but cannot be updated. If set to true, no historical versions are kept. The server sends errors for attempts to read the historical versions.|
|» enableUpdateCreate|body|boolean|false|Whether this FHIR store has the [updateCreate capability](https://www.hl7.org/fhir/capabilitystatement-definitions.html#CapabilityStatement.rest.resource.updateCreate). This determines if the client can use an Update operation to create a new resource with a client-specified ID. If false, all IDs are server-assigned through the Create operation and attempts to update a non-existent resource return errors. It is strongly advised not to include or encode any sensitive data such as patient identifiers in client-specified resource IDs. Those IDs are part of the FHIR resource path recorded in Cloud audit logs and Pub/Sub notifications. Those IDs can also be contained in reference fields within other resources.|
|» labels|body|object|false|User-supplied key-value pairs used to organize FHIR stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62} Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63} No more than 64 labels can be associated with a given store.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Output only. Resource name of the FHIR store, of the form `projects/{project_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.|
|» notificationConfig|body|[NotificationConfig](#schemanotificationconfig)|false|If non-empty, publish all resource modifications of this FHIR store to this destination. The Pub/Sub message attributes contain a map with a string describing the action that has triggered the notification. For example, "action":"CreateResource". Deprecated. Use `notification_configs` instead.|
|» notificationConfigs|body|[[FhirNotificationConfig](#schemafhirnotificationconfig)]|false|Specifies where and whether to send notifications upon changes to a Fhir store.|
|» searchConfig|body|[SearchConfig](#schemasearchconfig)|false|Configuration for how FHIR resources can be searched.|
|» streamConfigs|body|[[StreamConfig](#schemastreamconfig)]|false|A list of streaming configs that configure the destinations of streaming export for every resource mutation in this FHIR store. Each store is allowed to have up to 10 streaming configs. After a new config is added, the next resource mutation is streamed to the new location in addition to the existing ones. When a location is removed from the list, the server stops streaming to that location. Before adding a new config, you must add the required [`bigquery.dataEditor`](https://cloud.google.com/bigquery/docs/access-control#bigquery.dataEditor) role to your project's **Cloud Healthcare Service Agent** [service account](https://cloud.google.com/iam/docs/service-accounts). Some lag (typically on the order of dozens of seconds) is expected before the results show up in the streaming destination.|
|» validationConfig|body|[ValidationConfig](#schemavalidationconfig)|false|Configuration for how to validate incoming FHIR resources against configured profiles.|
|» version|body|string|false|Immutable. The FHIR specification version that this FHIR store supports natively. This field is immutable after store creation. Requests are rejected if they contain FHIR resources of a different version. Version is required for every FHIR store.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» complexDataTypeReferenceParsing|COMPLEX_DATA_TYPE_REFERENCE_PARSING_UNSPECIFIED|
|» complexDataTypeReferenceParsing|DISABLED|
|» complexDataTypeReferenceParsing|ENABLED|
|» version|VERSION_UNSPECIFIED|
|» version|DSTU2|
|» version|STU3|
|» version|R4|

> Example responses

> 200 Response

```json
{
  "complexDataTypeReferenceParsing": "COMPLEX_DATA_TYPE_REFERENCE_PARSING_UNSPECIFIED",
  "defaultSearchHandlingStrict": true,
  "disableReferentialIntegrity": true,
  "disableResourceVersioning": true,
  "enableUpdateCreate": true,
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "notificationConfig": {
    "pubsubTopic": "string",
    "sendForBulkImport": true
  },
  "notificationConfigs": [
    {
      "pubsubTopic": "string",
      "sendFullResource": true
    }
  ],
  "searchConfig": {
    "searchParameters": [
      {
        "canonicalUrl": "string",
        "parameter": "string"
      }
    ]
  },
  "streamConfigs": [
    {
      "bigqueryDestination": {
        "datasetUri": "string",
        "force": true,
        "schemaConfig": {
          "lastUpdatedPartitionConfig": {
            "expirationMs": "string",
            "type": "PARTITION_TYPE_UNSPECIFIED"
          },
          "recursiveStructureDepth": "string",
          "schemaType": "SCHEMA_TYPE_UNSPECIFIED"
        },
        "writeDisposition": "WRITE_DISPOSITION_UNSPECIFIED"
      },
      "deidentifiedStoreDestination": {
        "config": {
          "annotation": {
            "annotationStoreName": "string",
            "storeQuote": true
          },
          "dicom": {
            "filterProfile": "TAG_FILTER_PROFILE_UNSPECIFIED",
            "keepList": {
              "tags": [
                "string"
              ]
            },
            "removeList": {
              "tags": [
                "string"
              ]
            },
            "skipIdRedaction": true
          },
          "dicomTagConfig": {
            "actions": [
              {
                "cleanImageTag": {
                  "additionalInfoTypes": [
                    "string"
                  ],
                  "excludeInfoTypes": [
                    "string"
                  ],
                  "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
                },
                "cleanTextTag": {},
                "deleteTag": {},
                "keepTag": {},
                "queries": [
                  "string"
                ],
                "recurseTag": {},
                "regenUidTag": {},
                "removeTag": {},
                "resetTag": {}
              }
            ],
            "options": {
              "cleanDescriptors": {},
              "cleanImage": {
                "additionalInfoTypes": [
                  "string"
                ],
                "excludeInfoTypes": [
                  "string"
                ],
                "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
              },
              "primaryIds": "PRIMARY_IDS_OPTION_UNSPECIFIED"
            },
            "profileType": "PROFILE_TYPE_UNSPECIFIED"
          },
          "fhir": {
            "defaultKeepExtensions": true,
            "fieldMetadataList": [
              {
                "action": "ACTION_UNSPECIFIED",
                "paths": [
                  "string"
                ]
              }
            ]
          },
          "fhirFieldConfig": {
            "fieldMetadataList": [
              {
                "characterMaskField": {},
                "cleanTextField": {},
                "cryptoHashField": {},
                "dateShiftField": {},
                "keepField": {},
                "paths": [
                  "string"
                ],
                "removeField": {}
              }
            ],
            "options": {
              "characterMaskConfig": {
                "maskingCharacter": "string"
              },
              "contextualDeid": {},
              "cryptoHashConfig": {
                "cryptoKey": "string",
                "kmsWrapped": {
                  "cryptoKey": "string",
                  "wrappedKey": "string"
                }
              },
              "dateShiftConfig": {
                "cryptoKey": "string",
                "kmsWrapped": {
                  "cryptoKey": "string",
                  "wrappedKey": "string"
                }
              },
              "keepExtensions": {}
            },
            "profileType": "PROFILE_TYPE_UNSPECIFIED"
          },
          "image": {
            "additionalInfoTypes": [
              "string"
            ],
            "excludeInfoTypes": [
              "string"
            ],
            "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
          },
          "operationMetadata": {
            "fhirOutput": {
              "fhirStore": "string"
            }
          },
          "text": {
            "additionalTransformations": [
              {
                "characterMaskConfig": {
                  "maskingCharacter": "string"
                },
                "cryptoHashConfig": {
                  "cryptoKey": "string",
                  "kmsWrapped": {
                    "cryptoKey": "string",
                    "wrappedKey": "string"
                  }
                },
                "dateShiftConfig": {
                  "cryptoKey": "string",
                  "kmsWrapped": {
                    "cryptoKey": "string",
                    "wrappedKey": "string"
                  }
                },
                "infoTypes": [
                  "string"
                ],
                "redactConfig": {},
                "replaceWithInfoTypeConfig": {}
              }
            ],
            "excludeInfoTypes": [
              "string"
            ],
            "profileType": "PROFILE_TYPE_UNSPECIFIED",
            "transformations": [
              {
                "characterMaskConfig": {
                  "maskingCharacter": "string"
                },
                "cryptoHashConfig": {
                  "cryptoKey": "string",
                  "kmsWrapped": {
                    "cryptoKey": "string",
                    "wrappedKey": "string"
                  }
                },
                "dateShiftConfig": {
                  "cryptoKey": "string",
                  "kmsWrapped": {
                    "cryptoKey": "string",
                    "wrappedKey": "string"
                  }
                },
                "infoTypes": [
                  "string"
                ],
                "redactConfig": {},
                "replaceWithInfoTypeConfig": {}
              }
            ]
          }
        },
        "store": "string"
      },
      "resourceTypes": [
        "string"
      ]
    }
  ],
  "validationConfig": {
    "disableFhirpathValidation": true,
    "disableProfileValidation": true,
    "disableReferenceTypeValidation": true,
    "disableRequiredFieldValidation": true,
    "enabledImplementationGuides": [
      "string"
    ]
  },
  "version": "VERSION_UNSPECIFIED"
}
```

<h3 id="healthcareprojectslocationsdatasetsfhirstorescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[FhirStore](#schemafhirstore)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.hl7V2Stores.list

<a id="opIdhealthcare.projects.locations.datasets.hl7V2Stores.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/hl7V2Stores \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/hl7V2Stores`

Lists the HL7v2 stores in the given dataset.

<h3 id="healthcareprojectslocationsdatasetshl7v2storeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Name of the dataset.|
|filter|query|string|false|Restricts stores returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it's just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. Only filtering on labels is supported. For example, `labels.key=value`.|
|pageSize|query|integer|false|Limit on the number of HL7v2 stores to return in a single response. If not specified, 100 is used. May not be larger than 1000.|
|pageToken|query|string|false|The next_page_token value returned from the previous List request, if any.|
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
  "hl7V2Stores": [
    {
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "notificationConfig": {
        "pubsubTopic": "string",
        "sendForBulkImport": true
      },
      "notificationConfigs": [
        {
          "filter": "string",
          "pubsubTopic": "string"
        }
      ],
      "parserConfig": {
        "allowNullHeader": true,
        "schema": {
          "ignoreMinOccurs": true,
          "schemas": [
            {
              "messageSchemaConfigs": {
                "property1": {
                  "choice": true,
                  "maxOccurs": 0,
                  "members": [
                    {}
                  ],
                  "minOccurs": 0,
                  "name": "string"
                },
                "property2": {
                  "choice": true,
                  "maxOccurs": 0,
                  "members": [
                    {}
                  ],
                  "minOccurs": 0,
                  "name": "string"
                }
              },
              "version": [
                {
                  "mshField": "string",
                  "value": "string"
                }
              ]
            }
          ],
          "schematizedParsingType": "SCHEMATIZED_PARSING_TYPE_UNSPECIFIED",
          "types": [
            {
              "type": [
                {
                  "fields": [
                    {
                      "maxOccurs": 0,
                      "minOccurs": 0,
                      "name": "string",
                      "table": "string",
                      "type": "string"
                    }
                  ],
                  "name": "string",
                  "primitive": "PRIMITIVE_UNSPECIFIED"
                }
              ],
              "version": [
                {
                  "mshField": "string",
                  "value": "string"
                }
              ]
            }
          ],
          "unexpectedSegmentHandling": "UNEXPECTED_SEGMENT_HANDLING_MODE_UNSPECIFIED"
        },
        "segmentTerminator": "string",
        "version": "PARSER_VERSION_UNSPECIFIED"
      },
      "rejectDuplicateMessage": true
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetshl7v2storeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListHl7V2StoresResponse](#schemalisthl7v2storesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.hl7V2Stores.create

<a id="opIdhealthcare.projects.locations.datasets.hl7V2Stores.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/hl7V2Stores \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "notificationConfig": {
      "pubsubTopic": "string",
      "sendForBulkImport": true
    },
    "notificationConfigs": [
      {
        "filter": "string",
        "pubsubTopic": "string"
      }
    ],
    "parserConfig": {
      "allowNullHeader": true,
      "schema": {
        "ignoreMinOccurs": true,
        "schemas": [
          {
            "messageSchemaConfigs": {
              "property1": {
                "choice": true,
                "maxOccurs": 0,
                "members": [
                  {}
                ],
                "minOccurs": 0,
                "name": "string"
              },
              "property2": {
                "choice": true,
                "maxOccurs": 0,
                "members": [
                  {}
                ],
                "minOccurs": 0,
                "name": "string"
              }
            },
            "version": [
              {
                "mshField": "string",
                "value": "string"
              }
            ]
          }
        ],
        "schematizedParsingType": "SCHEMATIZED_PARSING_TYPE_UNSPECIFIED",
        "types": [
          {
            "type": [
              {
                "fields": [
                  {
                    "maxOccurs": 0,
                    "minOccurs": 0,
                    "name": "string",
                    "table": "string",
                    "type": "string"
                  }
                ],
                "name": "string",
                "primitive": "PRIMITIVE_UNSPECIFIED"
              }
            ],
            "version": [
              {
                "mshField": "string",
                "value": "string"
              }
            ]
          }
        ],
        "unexpectedSegmentHandling": "UNEXPECTED_SEGMENT_HANDLING_MODE_UNSPECIFIED"
      },
      "segmentTerminator": "string",
      "version": "PARSER_VERSION_UNSPECIFIED"
    },
    "rejectDuplicateMessage": true
  }'
```

`POST /v1beta1/{parent}/hl7V2Stores`

Creates a new HL7v2 store within the parent dataset.

> Body parameter

```json
{
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "notificationConfig": {
    "pubsubTopic": "string",
    "sendForBulkImport": true
  },
  "notificationConfigs": [
    {
      "filter": "string",
      "pubsubTopic": "string"
    }
  ],
  "parserConfig": {
    "allowNullHeader": true,
    "schema": {
      "ignoreMinOccurs": true,
      "schemas": [
        {
          "messageSchemaConfigs": {
            "property1": {
              "choice": true,
              "maxOccurs": 0,
              "members": [
                {}
              ],
              "minOccurs": 0,
              "name": "string"
            },
            "property2": {
              "choice": true,
              "maxOccurs": 0,
              "members": [
                {}
              ],
              "minOccurs": 0,
              "name": "string"
            }
          },
          "version": [
            {
              "mshField": "string",
              "value": "string"
            }
          ]
        }
      ],
      "schematizedParsingType": "SCHEMATIZED_PARSING_TYPE_UNSPECIFIED",
      "types": [
        {
          "type": [
            {
              "fields": [
                {
                  "maxOccurs": 0,
                  "minOccurs": 0,
                  "name": "string",
                  "table": "string",
                  "type": "string"
                }
              ],
              "name": "string",
              "primitive": "PRIMITIVE_UNSPECIFIED"
            }
          ],
          "version": [
            {
              "mshField": "string",
              "value": "string"
            }
          ]
        }
      ],
      "unexpectedSegmentHandling": "UNEXPECTED_SEGMENT_HANDLING_MODE_UNSPECIFIED"
    },
    "segmentTerminator": "string",
    "version": "PARSER_VERSION_UNSPECIFIED"
  },
  "rejectDuplicateMessage": true
}
```

<h3 id="healthcareprojectslocationsdatasetshl7v2storescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the dataset this HL7v2 store belongs to.|
|hl7V2StoreId|query|string|false|The ID of the HL7v2 store that is being created. The string must match the following regex: `[\p{L}\p{N}_\-\.]{1,256}`.|
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
|body|body|[Hl7V2Store](#schemahl7v2store)|false|none|
|» labels|body|object|false|User-supplied key-value pairs used to organize HL7v2 stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62} Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63} No more than 64 labels can be associated with a given store.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Resource name of the HL7v2 store, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/hl7V2Stores/{hl7v2_store_id}`.|
|» notificationConfig|body|[NotificationConfig](#schemanotificationconfig)|false|The notification destination all messages (both Ingest & Create) are published on. Only the message name is sent as part of the notification. If this is unset, no notifications are sent. Supplied by the client.|
|» notificationConfigs|body|[[Hl7V2NotificationConfig](#schemahl7v2notificationconfig)]|false|A list of notification configs. Each configuration uses a filter to determine whether to publish a message (both Ingest & Create) on the corresponding notification destination. Only the message name is sent as part of the notification. Supplied by the client.|
|» parserConfig|body|[ParserConfig](#schemaparserconfig)|false|The configuration for the parser. It determines how the server parses the messages.|
|» rejectDuplicateMessage|body|boolean|false|Determines whether to reject duplicate messages. A duplicate message is a message with the same raw bytes as a message that has already been ingested/created in this HL7v2 store. The default value is false, meaning that the store accepts the duplicate messages and it also returns the same ACK message in the IngestMessageResponse as has been returned previously. Note that only one resource is created in the store. When this field is set to true, CreateMessage/IngestMessage requests with a duplicate message will be rejected by the store, and IngestMessageErrorDetail returns a NACK message upon rejection.|

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
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "notificationConfig": {
    "pubsubTopic": "string",
    "sendForBulkImport": true
  },
  "notificationConfigs": [
    {
      "filter": "string",
      "pubsubTopic": "string"
    }
  ],
  "parserConfig": {
    "allowNullHeader": true,
    "schema": {
      "ignoreMinOccurs": true,
      "schemas": [
        {
          "messageSchemaConfigs": {
            "property1": {
              "choice": true,
              "maxOccurs": 0,
              "members": [
                {}
              ],
              "minOccurs": 0,
              "name": "string"
            },
            "property2": {
              "choice": true,
              "maxOccurs": 0,
              "members": [
                {}
              ],
              "minOccurs": 0,
              "name": "string"
            }
          },
          "version": [
            {
              "mshField": "string",
              "value": "string"
            }
          ]
        }
      ],
      "schematizedParsingType": "SCHEMATIZED_PARSING_TYPE_UNSPECIFIED",
      "types": [
        {
          "type": [
            {
              "fields": [
                {
                  "maxOccurs": 0,
                  "minOccurs": 0,
                  "name": "string",
                  "table": "string",
                  "type": "string"
                }
              ],
              "name": "string",
              "primitive": "PRIMITIVE_UNSPECIFIED"
            }
          ],
          "version": [
            {
              "mshField": "string",
              "value": "string"
            }
          ]
        }
      ],
      "unexpectedSegmentHandling": "UNEXPECTED_SEGMENT_HANDLING_MODE_UNSPECIFIED"
    },
    "segmentTerminator": "string",
    "version": "PARSER_VERSION_UNSPECIFIED"
  },
  "rejectDuplicateMessage": true
}
```

<h3 id="healthcareprojectslocationsdatasetshl7v2storescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Hl7V2Store](#schemahl7v2store)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.hl7V2Stores.messages.list

<a id="opIdhealthcare.projects.locations.datasets.hl7V2Stores.messages.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/messages \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/messages`

Lists all the messages in the given HL7v2 store with support for filtering. Note: HL7v2 messages are indexed asynchronously, so there might be a slight delay between the time a message is created and when it can be found through a filter.

<h3 id="healthcareprojectslocationsdatasetshl7v2storesmessageslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Name of the HL7v2 store to retrieve messages from.|
|filter|query|string|false|Restricts messages returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it's just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. Fields/functions available for filtering are: * `message_type`, from the MSH-9.1 field. For example, `NOT message_type = "ADT"`. * `send_date` or `sendDate`, the YYYY-MM-DD date the message was sent in the dataset's time_zone, from the MSH-7 segment. For example, `send_date < "2017-01-02"`. * `send_time`, the timestamp when the message was sent, using the RFC3339 time format for comparisons, from the MSH-7 segment. For example, `send_time < "2017-01-02T00:00:00-05:00"`. * `create_time`, the timestamp when the message was created in the HL7v2 store. Use the RFC3339 time format for comparisons. For example, `create_time < "2017-01-02T00:00:00-05:00"`. * `send_facility`, the care center that the message came from, from the MSH-4 segment. For example, `send_facility = "ABC"`. * `PatientId(value, type)`, which matches if the message lists a patient having an ID of the given value and type in the PID-2, PID-3, or PID-4 segments. For example, `PatientId("123456", "MRN")`. * `labels.x`, a string value of the label with key `x` as set using the Message.labels map. For example, `labels."priority"="high"`. The operator `:*` can be used to assert the existence of a label. For example, `labels."priority":*`.|
|orderBy|query|string|false|Orders messages returned by the specified order_by clause. Syntax: https://cloud.google.com/apis/design/design_patterns#sorting_order Fields available for ordering are: * `send_time`|
|pageSize|query|integer|false|Limit on the number of messages to return in a single response. If not specified, 100 is used. May not be larger than 1000.|
|pageToken|query|string|false|The next_page_token value returned from the previous List request, if any.|
|view|query|string|false|Specifies the parts of the Message to return in the response. When unspecified, equivalent to BASIC. Setting this to anything other than BASIC with a `page_size` larger than the default can generate a large response, which impacts the performance of this method.|
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
|view|MESSAGE_VIEW_UNSPECIFIED|
|view|RAW_ONLY|
|view|PARSED_ONLY|
|view|FULL|
|view|SCHEMATIZED_ONLY|
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
  "hl7V2Messages": [
    {
      "createTime": "string",
      "data": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "messageType": "string",
      "name": "string",
      "parsedData": {
        "segments": [
          {
            "fields": {
              "property1": "string",
              "property2": "string"
            },
            "segmentId": "string",
            "setId": "string"
          }
        ]
      },
      "patientIds": [
        {
          "type": "string",
          "value": "string"
        }
      ],
      "schematizedData": {
        "data": "string",
        "error": "string"
      },
      "sendFacility": "string",
      "sendTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetshl7v2storesmessageslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListMessagesResponse](#schemalistmessagesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.hl7V2Stores.messages.create

<a id="opIdhealthcare.projects.locations.datasets.hl7V2Stores.messages.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/messages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "message": {
      "data": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "messageType": "string",
      "name": "string",
      "patientIds": [
        {
          "type": "string",
          "value": "string"
        }
      ],
      "schematizedData": {
        "data": "string",
        "error": "string"
      },
      "sendFacility": "string",
      "sendTime": "string"
    }
  }'
```

`POST /v1beta1/{parent}/messages`

Parses and stores an HL7v2 message. This method triggers an asynchronous notification to any Pub/Sub topic configured in Hl7V2Store.Hl7V2NotificationConfig, if the filtering matches the message. If an MLLP adapter is configured to listen to a Pub/Sub topic, the adapter transmits the message when a notification is received.

> Body parameter

```json
{
  "message": {
    "data": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "messageType": "string",
    "name": "string",
    "patientIds": [
      {
        "type": "string",
        "value": "string"
      }
    ],
    "schematizedData": {
      "data": "string",
      "error": "string"
    },
    "sendFacility": "string",
    "sendTime": "string"
  }
}
```

<h3 id="healthcareprojectslocationsdatasetshl7v2storesmessagescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the HL7v2 store this message belongs to.|
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
|body|body|[CreateMessageRequest](#schemacreatemessagerequest)|false|none|
|» message|body|[Message](#schemamessage)|false|HL7v2 message.|

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
  "data": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "messageType": "string",
  "name": "string",
  "parsedData": {
    "segments": [
      {
        "fields": {
          "property1": "string",
          "property2": "string"
        },
        "segmentId": "string",
        "setId": "string"
      }
    ]
  },
  "patientIds": [
    {
      "type": "string",
      "value": "string"
    }
  ],
  "schematizedData": {
    "data": "string",
    "error": "string"
  },
  "sendFacility": "string",
  "sendTime": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetshl7v2storesmessagescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Message](#schemamessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.hl7V2Stores.messages.batchGet

<a id="opIdhealthcare.projects.locations.datasets.hl7V2Stores.messages.batchGet"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/messages:batchGet \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/messages:batchGet`

Gets multiple messages in the given HL7v2 store.

<h3 id="healthcareprojectslocationsdatasetshl7v2storesmessagesbatchget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Name of the HL7v2 store to retrieve messages from, in the format: `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/hl7v2Stores/{hl7v2_store_id}`.|
|ids|query|[string]|false|The resource id of the HL7v2 messages to retrieve in the format: `{message_id}`, where the full resource name is `{parent}/messages/{message_id}` A maximum of 100 messages can be retrieved in a batch. All 'ids' have to be under parent.|
|view|query|string|false|Specifies the parts of the Messages resource to return in the response. When unspecified, equivalent to BASIC.|
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
|view|MESSAGE_VIEW_UNSPECIFIED|
|view|RAW_ONLY|
|view|PARSED_ONLY|
|view|FULL|
|view|SCHEMATIZED_ONLY|
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
  "messages": [
    {
      "createTime": "string",
      "data": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "messageType": "string",
      "name": "string",
      "parsedData": {
        "segments": [
          {
            "fields": {
              "property1": "string",
              "property2": "string"
            },
            "segmentId": "string",
            "setId": "string"
          }
        ]
      },
      "patientIds": [
        {
          "type": "string",
          "value": "string"
        }
      ],
      "schematizedData": {
        "data": "string",
        "error": "string"
      },
      "sendFacility": "string",
      "sendTime": "string"
    }
  ]
}
```

<h3 id="healthcareprojectslocationsdatasetshl7v2storesmessagesbatchget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BatchGetMessagesResponse](#schemabatchgetmessagesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.hl7V2Stores.messages.ingest

<a id="opIdhealthcare.projects.locations.datasets.hl7V2Stores.messages.ingest"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/messages:ingest \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "message": {
      "data": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "messageType": "string",
      "name": "string",
      "patientIds": [
        {
          "type": "string",
          "value": "string"
        }
      ],
      "schematizedData": {
        "data": "string",
        "error": "string"
      },
      "sendFacility": "string",
      "sendTime": "string"
    }
  }'
```

`POST /v1beta1/{parent}/messages:ingest`

Parses and stores an HL7v2 message. This method triggers an asynchronous notification to any Pub/Sub topic configured in Hl7V2Store.Hl7V2NotificationConfig, if the filtering matches the message. If an MLLP adapter is configured to listen to a Pub/Sub topic, the adapter transmits the message when a notification is received. If the method is successful, it generates a response containing an HL7v2 acknowledgment (`ACK`) message. If the method encounters an error, it returns a negative acknowledgment (`NACK`) message. This behavior is suitable for replying to HL7v2 interface systems that expect these acknowledgments.

> Body parameter

```json
{
  "message": {
    "data": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "messageType": "string",
    "name": "string",
    "patientIds": [
      {
        "type": "string",
        "value": "string"
      }
    ],
    "schematizedData": {
      "data": "string",
      "error": "string"
    },
    "sendFacility": "string",
    "sendTime": "string"
  }
}
```

<h3 id="healthcareprojectslocationsdatasetshl7v2storesmessagesingest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The name of the HL7v2 store this message belongs to.|
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
|body|body|[IngestMessageRequest](#schemaingestmessagerequest)|false|none|
|» message|body|[Message](#schemamessage)|false|HL7v2 message to ingest.|

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
  "hl7Ack": "string",
  "message": {
    "createTime": "string",
    "data": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "messageType": "string",
    "name": "string",
    "parsedData": {
      "segments": [
        {
          "fields": {
            "property1": "string",
            "property2": "string"
          },
          "segmentId": "string",
          "setId": "string"
        }
      ]
    },
    "patientIds": [
      {
        "type": "string",
        "value": "string"
      }
    ],
    "schematizedData": {
      "data": "string",
      "error": "string"
    },
    "sendFacility": "string",
    "sendTime": "string"
  }
}
```

<h3 id="healthcareprojectslocationsdatasetshl7v2storesmessagesingest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[IngestMessageResponse](#schemaingestmessageresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.consentStores.userDataMappings.list

<a id="opIdhealthcare.projects.locations.datasets.consentStores.userDataMappings.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/userDataMappings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/userDataMappings`

Lists the User data mappings in the specified consent store.

<h3 id="healthcareprojectslocationsdatasetsconsentstoresuserdatamappingslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the consent store to retrieve User data mappings from.|
|filter|query|string|false|Optional. Restricts the user data mappings returned to those matching a filter. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it's just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. The fields available for filtering are: - data_id - user_id. For example, `filter=user_id=\"user123\"`. - archived - archive_time|
|pageSize|query|integer|false|Optional. Limit on the number of User data mappings to return in a single response. If not specified, 100 is used. May not be larger than 1000.|
|pageToken|query|string|false|Optional. Token to retrieve the next page of results, or empty to get the first page.|
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
  "userDataMappings": [
    {
      "archiveTime": "string",
      "archived": true,
      "dataId": "string",
      "name": "string",
      "resourceAttributes": [
        {
          "attributeDefinitionId": "string",
          "values": [
            "string"
          ]
        }
      ],
      "userId": "string"
    }
  ]
}
```

<h3 id="healthcareprojectslocationsdatasetsconsentstoresuserdatamappingslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListUserDataMappingsResponse](#schemalistuserdatamappingsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.consentStores.userDataMappings.create

<a id="opIdhealthcare.projects.locations.datasets.consentStores.userDataMappings.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/userDataMappings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dataId": "string",
    "name": "string",
    "resourceAttributes": [
      {
        "attributeDefinitionId": "string",
        "values": [
          "string"
        ]
      }
    ],
    "userId": "string"
  }'
```

`POST /v1beta1/{parent}/userDataMappings`

Creates a new User data mapping in the parent consent store.

> Body parameter

```json
{
  "dataId": "string",
  "name": "string",
  "resourceAttributes": [
    {
      "attributeDefinitionId": "string",
      "values": [
        "string"
      ]
    }
  ],
  "userId": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetsconsentstoresuserdatamappingscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the consent store.|
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
|body|body|[UserDataMapping](#schemauserdatamapping)|false|none|
|» dataId|body|string|false|Required. A unique identifier for the mapped resource.|
|» name|body|string|false|Resource name of the User data mapping, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/userDataMappings/{user_data_mapping_id}`.|
|» resourceAttributes|body|[[Attribute](#schemaattribute)]|false|Attributes of the resource. Only explicitly set attributes are displayed here. Attribute definitions with defaults set implicitly apply to these User data mappings. Attributes listed here must be single valued, that is, exactly one value is specified for the field "values" in each Attribute.|
|» userId|body|string|false|Required. User's UUID provided by the client.|

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
  "archiveTime": "string",
  "archived": true,
  "dataId": "string",
  "name": "string",
  "resourceAttributes": [
    {
      "attributeDefinitionId": "string",
      "values": [
        "string"
      ]
    }
  ],
  "userId": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetsconsentstoresuserdatamappingscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[UserDataMapping](#schemauserdatamapping)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.hl7V2Stores.getIamPolicy

<a id="opIdhealthcare.projects.locations.datasets.hl7V2Stores.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:getIamPolicy \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{resource}:getIamPolicy`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

<h3 id="healthcareprojectslocationsdatasetshl7v2storesgetiampolicy-parameters">Parameters</h3>

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

<h3 id="healthcareprojectslocationsdatasetshl7v2storesgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.hl7V2Stores.setIamPolicy

<a id="opIdhealthcare.projects.locations.datasets.hl7V2Stores.setIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:setIamPolicy \
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

`POST /v1beta1/{resource}:setIamPolicy`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

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

<h3 id="healthcareprojectslocationsdatasetshl7v2storessetiampolicy-parameters">Parameters</h3>

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

<h3 id="healthcareprojectslocationsdatasetshl7v2storessetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.hl7V2Stores.testIamPermissions

<a id="opIdhealthcare.projects.locations.datasets.hl7V2Stores.testIamPermissions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:testIamPermissions \
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

`POST /v1beta1/{resource}:testIamPermissions`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

> Body parameter

```json
{
  "permissions": [
    "string"
  ]
}
```

<h3 id="healthcareprojectslocationsdatasetshl7v2storestestiampermissions-parameters">Parameters</h3>

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

<h3 id="healthcareprojectslocationsdatasetshl7v2storestestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TestIamPermissionsResponse](#schematestiampermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.deidentify

<a id="opIdhealthcare.projects.locations.datasets.deidentify"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:deidentify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "config": {
      "annotation": {
        "annotationStoreName": "string",
        "storeQuote": true
      },
      "dicom": {
        "filterProfile": "TAG_FILTER_PROFILE_UNSPECIFIED",
        "keepList": {
          "tags": [
            "string"
          ]
        },
        "removeList": {
          "tags": [
            "string"
          ]
        },
        "skipIdRedaction": true
      },
      "dicomTagConfig": {
        "actions": [
          {
            "cleanImageTag": {
              "additionalInfoTypes": [
                "string"
              ],
              "excludeInfoTypes": [
                "string"
              ],
              "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
            },
            "cleanTextTag": {},
            "deleteTag": {},
            "keepTag": {},
            "queries": [
              "string"
            ],
            "recurseTag": {},
            "regenUidTag": {},
            "removeTag": {},
            "resetTag": {}
          }
        ],
        "options": {
          "cleanDescriptors": {},
          "cleanImage": {
            "additionalInfoTypes": [
              "string"
            ],
            "excludeInfoTypes": [
              "string"
            ],
            "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
          },
          "primaryIds": "PRIMARY_IDS_OPTION_UNSPECIFIED"
        },
        "profileType": "PROFILE_TYPE_UNSPECIFIED"
      },
      "fhir": {
        "defaultKeepExtensions": true,
        "fieldMetadataList": [
          {
            "action": "ACTION_UNSPECIFIED",
            "paths": [
              "string"
            ]
          }
        ]
      },
      "fhirFieldConfig": {
        "fieldMetadataList": [
          {
            "characterMaskField": {},
            "cleanTextField": {},
            "cryptoHashField": {},
            "dateShiftField": {},
            "keepField": {},
            "paths": [
              "string"
            ],
            "removeField": {}
          }
        ],
        "options": {
          "characterMaskConfig": {
            "maskingCharacter": "string"
          },
          "contextualDeid": {},
          "cryptoHashConfig": {
            "cryptoKey": "string",
            "kmsWrapped": {
              "cryptoKey": "string",
              "wrappedKey": "string"
            }
          },
          "dateShiftConfig": {
            "cryptoKey": "string",
            "kmsWrapped": {
              "cryptoKey": "string",
              "wrappedKey": "string"
            }
          },
          "keepExtensions": {}
        },
        "profileType": "PROFILE_TYPE_UNSPECIFIED"
      },
      "image": {
        "additionalInfoTypes": [
          "string"
        ],
        "excludeInfoTypes": [
          "string"
        ],
        "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
      },
      "operationMetadata": {
        "fhirOutput": {
          "fhirStore": "string"
        }
      },
      "text": {
        "additionalTransformations": [
          {
            "characterMaskConfig": {
              "maskingCharacter": "string"
            },
            "cryptoHashConfig": {
              "cryptoKey": "string",
              "kmsWrapped": {
                "cryptoKey": "string",
                "wrappedKey": "string"
              }
            },
            "dateShiftConfig": {
              "cryptoKey": "string",
              "kmsWrapped": {
                "cryptoKey": "string",
                "wrappedKey": "string"
              }
            },
            "infoTypes": [
              "string"
            ],
            "redactConfig": {},
            "replaceWithInfoTypeConfig": {}
          }
        ],
        "excludeInfoTypes": [
          "string"
        ],
        "profileType": "PROFILE_TYPE_UNSPECIFIED",
        "transformations": [
          {
            "characterMaskConfig": {
              "maskingCharacter": "string"
            },
            "cryptoHashConfig": {
              "cryptoKey": "string",
              "kmsWrapped": {
                "cryptoKey": "string",
                "wrappedKey": "string"
              }
            },
            "dateShiftConfig": {
              "cryptoKey": "string",
              "kmsWrapped": {
                "cryptoKey": "string",
                "wrappedKey": "string"
              }
            },
            "infoTypes": [
              "string"
            ],
            "redactConfig": {},
            "replaceWithInfoTypeConfig": {}
          }
        ]
      }
    },
    "destinationDataset": "string",
    "gcsConfigUri": "string"
  }'
```

`POST /v1beta1/{sourceDataset}:deidentify`

Creates a new dataset containing de-identified data from the source dataset. The metadata field type is OperationMetadata. If the request is successful, the response field type is DeidentifySummary. The LRO result may still be successful if de-identification fails for some resources. The new de-identified dataset will not contain these failed resources. The number of resources processed are tracked in Operation.metadata. Error details are logged to Cloud Logging. For more information, see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging).

> Body parameter

```json
{
  "config": {
    "annotation": {
      "annotationStoreName": "string",
      "storeQuote": true
    },
    "dicom": {
      "filterProfile": "TAG_FILTER_PROFILE_UNSPECIFIED",
      "keepList": {
        "tags": [
          "string"
        ]
      },
      "removeList": {
        "tags": [
          "string"
        ]
      },
      "skipIdRedaction": true
    },
    "dicomTagConfig": {
      "actions": [
        {
          "cleanImageTag": {
            "additionalInfoTypes": [
              "string"
            ],
            "excludeInfoTypes": [
              "string"
            ],
            "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
          },
          "cleanTextTag": {},
          "deleteTag": {},
          "keepTag": {},
          "queries": [
            "string"
          ],
          "recurseTag": {},
          "regenUidTag": {},
          "removeTag": {},
          "resetTag": {}
        }
      ],
      "options": {
        "cleanDescriptors": {},
        "cleanImage": {
          "additionalInfoTypes": [
            "string"
          ],
          "excludeInfoTypes": [
            "string"
          ],
          "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
        },
        "primaryIds": "PRIMARY_IDS_OPTION_UNSPECIFIED"
      },
      "profileType": "PROFILE_TYPE_UNSPECIFIED"
    },
    "fhir": {
      "defaultKeepExtensions": true,
      "fieldMetadataList": [
        {
          "action": "ACTION_UNSPECIFIED",
          "paths": [
            "string"
          ]
        }
      ]
    },
    "fhirFieldConfig": {
      "fieldMetadataList": [
        {
          "characterMaskField": {},
          "cleanTextField": {},
          "cryptoHashField": {},
          "dateShiftField": {},
          "keepField": {},
          "paths": [
            "string"
          ],
          "removeField": {}
        }
      ],
      "options": {
        "characterMaskConfig": {
          "maskingCharacter": "string"
        },
        "contextualDeid": {},
        "cryptoHashConfig": {
          "cryptoKey": "string",
          "kmsWrapped": {
            "cryptoKey": "string",
            "wrappedKey": "string"
          }
        },
        "dateShiftConfig": {
          "cryptoKey": "string",
          "kmsWrapped": {
            "cryptoKey": "string",
            "wrappedKey": "string"
          }
        },
        "keepExtensions": {}
      },
      "profileType": "PROFILE_TYPE_UNSPECIFIED"
    },
    "image": {
      "additionalInfoTypes": [
        "string"
      ],
      "excludeInfoTypes": [
        "string"
      ],
      "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
    },
    "operationMetadata": {
      "fhirOutput": {
        "fhirStore": "string"
      }
    },
    "text": {
      "additionalTransformations": [
        {
          "characterMaskConfig": {
            "maskingCharacter": "string"
          },
          "cryptoHashConfig": {
            "cryptoKey": "string",
            "kmsWrapped": {
              "cryptoKey": "string",
              "wrappedKey": "string"
            }
          },
          "dateShiftConfig": {
            "cryptoKey": "string",
            "kmsWrapped": {
              "cryptoKey": "string",
              "wrappedKey": "string"
            }
          },
          "infoTypes": [
            "string"
          ],
          "redactConfig": {},
          "replaceWithInfoTypeConfig": {}
        }
      ],
      "excludeInfoTypes": [
        "string"
      ],
      "profileType": "PROFILE_TYPE_UNSPECIFIED",
      "transformations": [
        {
          "characterMaskConfig": {
            "maskingCharacter": "string"
          },
          "cryptoHashConfig": {
            "cryptoKey": "string",
            "kmsWrapped": {
              "cryptoKey": "string",
              "wrappedKey": "string"
            }
          },
          "dateShiftConfig": {
            "cryptoKey": "string",
            "kmsWrapped": {
              "cryptoKey": "string",
              "wrappedKey": "string"
            }
          },
          "infoTypes": [
            "string"
          ],
          "redactConfig": {},
          "replaceWithInfoTypeConfig": {}
        }
      ]
    }
  },
  "destinationDataset": "string",
  "gcsConfigUri": "string"
}
```

<h3 id="healthcareprojectslocationsdatasetsdeidentify-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sourceDataset|path|string|true|Source dataset resource name. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`.|
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
|body|body|[DeidentifyDatasetRequest](#schemadeidentifydatasetrequest)|false|none|
|» config|body|[DeidentifyConfig](#schemadeidentifyconfig)|false|Deidentify configuration. Only one of `config` and `gcs_config_uri` can be specified.|
|» destinationDataset|body|string|false|The name of the dataset resource to create and write the redacted data to. * The destination dataset must not exist. * The destination dataset must be in the same location as the source dataset. De-identifying data across multiple locations is not supported.|
|» gcsConfigUri|body|string|false|Cloud Storage location to read the JSON cloud.healthcare.deidentify.DeidentifyConfig from, overriding the default config. Must be of the form `gs://{bucket_id}/path/to/object`. The Cloud Storage location must grant the Cloud IAM role `roles/storage.objectViewer` to the project's Cloud Healthcare Service Agent service account. Only one of `config` and `gcs_config_uri` can be specified.|

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

<h3 id="healthcareprojectslocationsdatasetsdeidentify-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## healthcare.projects.locations.datasets.fhirStores.deidentify

<a id="opIdhealthcare.projects.locations.datasets.fhirStores.deidentify"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:deidentify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "config": {
      "annotation": {
        "annotationStoreName": "string",
        "storeQuote": true
      },
      "dicom": {
        "filterProfile": "TAG_FILTER_PROFILE_UNSPECIFIED",
        "keepList": {
          "tags": [
            "string"
          ]
        },
        "removeList": {
          "tags": [
            "string"
          ]
        },
        "skipIdRedaction": true
      },
      "dicomTagConfig": {
        "actions": [
          {
            "cleanImageTag": {
              "additionalInfoTypes": [
                "string"
              ],
              "excludeInfoTypes": [
                "string"
              ],
              "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
            },
            "cleanTextTag": {},
            "deleteTag": {},
            "keepTag": {},
            "queries": [
              "string"
            ],
            "recurseTag": {},
            "regenUidTag": {},
            "removeTag": {},
            "resetTag": {}
          }
        ],
        "options": {
          "cleanDescriptors": {},
          "cleanImage": {
            "additionalInfoTypes": [
              "string"
            ],
            "excludeInfoTypes": [
              "string"
            ],
            "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
          },
          "primaryIds": "PRIMARY_IDS_OPTION_UNSPECIFIED"
        },
        "profileType": "PROFILE_TYPE_UNSPECIFIED"
      },
      "fhir": {
        "defaultKeepExtensions": true,
        "fieldMetadataList": [
          {
            "action": "ACTION_UNSPECIFIED",
            "paths": [
              "string"
            ]
          }
        ]
      },
      "fhirFieldConfig": {
        "fieldMetadataList": [
          {
            "characterMaskField": {},
            "cleanTextField": {},
            "cryptoHashField": {},
            "dateShiftField": {},
            "keepField": {},
            "paths": [
              "string"
            ],
            "removeField": {}
          }
        ],
        "options": {
          "characterMaskConfig": {
            "maskingCharacter": "string"
          },
          "contextualDeid": {},
          "cryptoHashConfig": {
            "cryptoKey": "string",
            "kmsWrapped": {
              "cryptoKey": "string",
              "wrappedKey": "string"
            }
          },
          "dateShiftConfig": {
            "cryptoKey": "string",
            "kmsWrapped": {
              "cryptoKey": "string",
              "wrappedKey": "string"
            }
          },
          "keepExtensions": {}
        },
        "profileType": "PROFILE_TYPE_UNSPECIFIED"
      },
      "image": {
        "additionalInfoTypes": [
          "string"
        ],
        "excludeInfoTypes": [
          "string"
        ],
        "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
      },
      "operationMetadata": {
        "fhirOutput": {
          "fhirStore": "string"
        }
      },
      "text": {
        "additionalTransformations": [
          {
            "characterMaskConfig": {
              "maskingCharacter": "string"
            },
            "cryptoHashConfig": {
              "cryptoKey": "string",
              "kmsWrapped": {
                "cryptoKey": "string",
                "wrappedKey": "string"
              }
            },
            "dateShiftConfig": {
              "cryptoKey": "string",
              "kmsWrapped": {
                "cryptoKey": "string",
                "wrappedKey": "string"
              }
            },
            "infoTypes": [
              "string"
            ],
            "redactConfig": {},
            "replaceWithInfoTypeConfig": {}
          }
        ],
        "excludeInfoTypes": [
          "string"
        ],
        "profileType": "PROFILE_TYPE_UNSPECIFIED",
        "transformations": [
          {
            "characterMaskConfig": {
              "maskingCharacter": "string"
            },
            "cryptoHashConfig": {
              "cryptoKey": "string",
              "kmsWrapped": {
                "cryptoKey": "string",
                "wrappedKey": "string"
              }
            },
            "dateShiftConfig": {
              "cryptoKey": "string",
              "kmsWrapped": {
                "cryptoKey": "string",
                "wrappedKey": "string"
              }
            },
            "infoTypes": [
              "string"
            ],
            "redactConfig": {},
            "replaceWithInfoTypeConfig": {}
          }
        ]
      }
    },
    "destinationStore": "string",
    "gcsConfigUri": "string",
    "resourceFilter": {
      "resources": {
        "resources": [
          "string"
        ]
      }
    },
    "skipModifiedResources": true
  }'
```

`POST /v1beta1/{sourceStore}:deidentify`

De-identifies data from the source store and writes it to the destination store. The metadata field type is OperationMetadata. If the request is successful, the response field type is DeidentifyFhirStoreSummary. The number of resources processed are tracked in Operation.metadata. Error details are logged to Cloud Logging. For more information, see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging).

> Body parameter

```json
{
  "config": {
    "annotation": {
      "annotationStoreName": "string",
      "storeQuote": true
    },
    "dicom": {
      "filterProfile": "TAG_FILTER_PROFILE_UNSPECIFIED",
      "keepList": {
        "tags": [
          "string"
        ]
      },
      "removeList": {
        "tags": [
          "string"
        ]
      },
      "skipIdRedaction": true
    },
    "dicomTagConfig": {
      "actions": [
        {
          "cleanImageTag": {
            "additionalInfoTypes": [
              "string"
            ],
            "excludeInfoTypes": [
              "string"
            ],
            "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
          },
          "cleanTextTag": {},
          "deleteTag": {},
          "keepTag": {},
          "queries": [
            "string"
          ],
          "recurseTag": {},
          "regenUidTag": {},
          "removeTag": {},
          "resetTag": {}
        }
      ],
      "options": {
        "cleanDescriptors": {},
        "cleanImage": {
          "additionalInfoTypes": [
            "string"
          ],
          "excludeInfoTypes": [
            "string"
          ],
          "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
        },
        "primaryIds": "PRIMARY_IDS_OPTION_UNSPECIFIED"
      },
      "profileType": "PROFILE_TYPE_UNSPECIFIED"
    },
    "fhir": {
      "defaultKeepExtensions": true,
      "fieldMetadataList": [
        {
          "action": "ACTION_UNSPECIFIED",
          "paths": [
            "string"
          ]
        }
      ]
    },
    "fhirFieldConfig": {
      "fieldMetadataList": [
        {
          "characterMaskField": {},
          "cleanTextField": {},
          "cryptoHashField": {},
          "dateShiftField": {},
          "keepField": {},
          "paths": [
            "string"
          ],
          "removeField": {}
        }
      ],
      "options": {
        "characterMaskConfig": {
          "maskingCharacter": "string"
        },
        "contextualDeid": {},
        "cryptoHashConfig": {
          "cryptoKey": "string",
          "kmsWrapped": {
            "cryptoKey": "string",
            "wrappedKey": "string"
          }
        },
        "dateShiftConfig": {
          "cryptoKey": "string",
          "kmsWrapped": {
            "cryptoKey": "string",
            "wrappedKey": "string"
          }
        },
        "keepExtensions": {}
      },
      "profileType": "PROFILE_TYPE_UNSPECIFIED"
    },
    "image": {
      "additionalInfoTypes": [
        "string"
      ],
      "excludeInfoTypes": [
        "string"
      ],
      "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
    },
    "operationMetadata": {
      "fhirOutput": {
        "fhirStore": "string"
      }
    },
    "text": {
      "additionalTransformations": [
        {
          "characterMaskConfig": {
            "maskingCharacter": "string"
          },
          "cryptoHashConfig": {
            "cryptoKey": "string",
            "kmsWrapped": {
              "cryptoKey": "string",
              "wrappedKey": "string"
            }
          },
          "dateShiftConfig": {
            "cryptoKey": "string",
            "kmsWrapped": {
              "cryptoKey": "string",
              "wrappedKey": "string"
            }
          },
          "infoTypes": [
            "string"
          ],
          "redactConfig": {},
          "replaceWithInfoTypeConfig": {}
        }
      ],
      "excludeInfoTypes": [
        "string"
      ],
      "profileType": "PROFILE_TYPE_UNSPECIFIED",
      "transformations": [
        {
          "characterMaskConfig": {
            "maskingCharacter": "string"
          },
          "cryptoHashConfig": {
            "cryptoKey": "string",
            "kmsWrapped": {
              "cryptoKey": "string",
              "wrappedKey": "string"
            }
          },
          "dateShiftConfig": {
            "cryptoKey": "string",
            "kmsWrapped": {
              "cryptoKey": "string",
              "wrappedKey": "string"
            }
          },
          "infoTypes": [
            "string"
          ],
          "redactConfig": {},
          "replaceWithInfoTypeConfig": {}
        }
      ]
    }
  },
  "destinationStore": "string",
  "gcsConfigUri": "string",
  "resourceFilter": {
    "resources": {
      "resources": [
        "string"
      ]
    }
  },
  "skipModifiedResources": true
}
```

<h3 id="healthcareprojectslocationsdatasetsfhirstoresdeidentify-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sourceStore|path|string|true|Source FHIR store resource name. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.|
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
|body|body|[DeidentifyFhirStoreRequest](#schemadeidentifyfhirstorerequest)|false|none|
|» config|body|[DeidentifyConfig](#schemadeidentifyconfig)|false|Deidentify configuration. Only one of `config` and `gcs_config_uri` can be specified.|
|» destinationStore|body|string|false|The name of the FHIR store to create and write the redacted data to. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`. * The destination dataset must exist. * The source dataset and destination dataset must both reside in the same location. De-identifying data across multiple locations is not supported. * The destination FHIR store must exist. * The caller must have the healthcare.fhirResources.update permission to write to the destination FHIR store.|
|» gcsConfigUri|body|string|false|Cloud Storage location to read the JSON cloud.healthcare.deidentify.DeidentifyConfig from, overriding the default config. Must be of the form `gs://{bucket_id}/path/to/object`. The Cloud Storage location must grant the Cloud IAM role `roles/storage.objectViewer` to the project's Cloud Healthcare Service Agent service account. Only one of `config` and `gcs_config_uri` can be specified.|
|» resourceFilter|body|[FhirFilter](#schemafhirfilter)|false|A filter specifying the resources to include in the output. If not specified, all resources are included in the output.|
|» skipModifiedResources|body|boolean|false|If true, skips resources that are created or modified after the de-identify operation is created.|

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

<h3 id="healthcareprojectslocationsdatasetsfhirstoresdeidentify-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
{
  "cleanImageTag": {
    "additionalInfoTypes": [
      "string"
    ],
    "excludeInfoTypes": [
      "string"
    ],
    "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
  },
  "cleanTextTag": {},
  "deleteTag": {},
  "keepTag": {},
  "queries": [
    "string"
  ],
  "recurseTag": {},
  "regenUidTag": {},
  "removeTag": {},
  "resetTag": {}
}
```

Specifies a selection of tags and an `Action` to apply to each one.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cleanImageTag|[ImageConfig](#schemaimageconfig)|false|none|Inspect image and transform sensitive burnt-in text. Doesn't apply to elements nested in a sequence, which revert to `Keep`. Supported [tags](http://dicom.nema.org/medical/dicom/2018e/output/chtml/part06/chapter_6.html): PixelData|
|cleanTextTag|[CleanTextTag](#schemacleantexttag)|false|none|Inspect text and transform sensitive text. Configurable via TextConfig. Supported Value Representations: AE, LO, LT, PN, SH, ST, UC, UT, DA, DT, AS|
|deleteTag|[DeleteTag](#schemadeletetag)|false|none|Delete tag.|
|keepTag|[KeepTag](#schemakeeptag)|false|none|Keep tag unchanged.|
|queries|[string]|false|none|Select all tags with the listed tag IDs, names, or Value Representations (VRs). Examples: ID: "00100010" Keyword: "PatientName" VR: "PN"|
|recurseTag|[RecurseTag](#schemarecursetag)|false|none|Recursively apply DICOM de-id to tags nested in a sequence. Supported [Value Representation] (http://dicom.nema.org/medical/dicom/2018e/output/chtml/part05/sect_6.2.html#table_6.2-1): SQ|
|regenUidTag|[RegenUidTag](#schemaregenuidtag)|false|none|Replace UID with a new generated UID. Supported [Value Representation] (http://dicom.nema.org/medical/dicom/2018e/output/chtml/part05/sect_6.2.html#table_6.2-1): UI|
|removeTag|[RemoveTag](#schemaremovetag)|false|none|Replace with empty tag.|
|resetTag|[ResetTag](#schemaresettag)|false|none|Reset tag to a placeholder value.|

<h2 id="tocS_ActivateConsentRequest">ActivateConsentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaactivateconsentrequest"></a>
<a id="schema_ActivateConsentRequest"></a>
<a id="tocSactivateconsentrequest"></a>
<a id="tocsactivateconsentrequest"></a>

```json
{
  "consentArtifact": "string",
  "expireTime": "string",
  "ttl": "string"
}
```

Activates the latest revision of the specified Consent by committing a new revision with `state` updated to `ACTIVE`. If the latest revision of the given Consent is in the `ACTIVE` state, no new revision is committed. A FAILED_PRECONDITION error occurs if the latest revision of the given consent is in the `REJECTED` or `REVOKED` state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consentArtifact|string|false|none|Required. The resource name of the Consent artifact that contains documentation of the user's consent, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consentArtifacts/{consent_artifact_id}`. If the draft Consent had a Consent artifact, this Consent artifact overwrites it.|
|expireTime|string(google-datetime)|false|none|Timestamp in UTC of when this Consent is considered expired.|
|ttl|string(google-duration)|false|none|The time to live for this Consent from when it is marked as active.|

<h2 id="tocS_AnalyzeEntitiesRequest">AnalyzeEntitiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzeentitiesrequest"></a>
<a id="schema_AnalyzeEntitiesRequest"></a>
<a id="tocSanalyzeentitiesrequest"></a>
<a id="tocsanalyzeentitiesrequest"></a>

```json
{
  "documentContent": "string",
  "licensedVocabularies": [
    "LICENSED_VOCABULARY_UNSPECIFIED"
  ]
}
```

The request to analyze healthcare entities in a document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documentContent|string|false|none|document_content is a document to be annotated.|
|licensedVocabularies|[string]|false|none|A list of licensed vocabularies to use in the request, in addition to the default unlicensed vocabularies.|

#### Enumerated Values

|Property|Value|
|---|---|
|licensedVocabularies|LICENSED_VOCABULARY_UNSPECIFIED|
|licensedVocabularies|ICD10CM|
|licensedVocabularies|SNOMEDCT_US|

<h2 id="tocS_AnalyzeEntitiesResponse">AnalyzeEntitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzeentitiesresponse"></a>
<a id="schema_AnalyzeEntitiesResponse"></a>
<a id="tocSanalyzeentitiesresponse"></a>
<a id="tocsanalyzeentitiesresponse"></a>

```json
{
  "entities": [
    {
      "entityId": "string",
      "preferredTerm": "string",
      "vocabularyCodes": [
        "string"
      ]
    }
  ],
  "entityMentions": [
    {
      "certaintyAssessment": {
        "confidence": 0,
        "value": "string"
      },
      "confidence": 0,
      "linkedEntities": [
        {
          "entityId": "string"
        }
      ],
      "mentionId": "string",
      "subject": {
        "confidence": 0,
        "value": "string"
      },
      "temporalAssessment": {
        "confidence": 0,
        "value": "string"
      },
      "text": {
        "beginOffset": 0,
        "content": "string"
      },
      "type": "string"
    }
  ],
  "relationships": [
    {
      "confidence": 0,
      "objectId": "string",
      "subjectId": "string"
    }
  ]
}
```

Includes recognized entity mentions and relationships between them.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entities|[[Entity](#schemaentity)]|false|none|The union of all the candidate entities that the entity_mentions in this response could link to. These are UMLS concepts or normalized mention content.|
|entityMentions|[[EntityMention](#schemaentitymention)]|false|none|entity_mentions contains all the annotated medical entities that were mentioned in the provided document.|
|relationships|[[EntityMentionRelationship](#schemaentitymentionrelationship)]|false|none|relationships contains all the binary relationships that were identified between entity mentions within the provided document.|

<h2 id="tocS_Annotation">Annotation</h2>
<!-- backwards compatibility -->
<a id="schemaannotation"></a>
<a id="schema_Annotation"></a>
<a id="tocSannotation"></a>
<a id="tocsannotation"></a>

```json
{
  "annotationSource": {
    "cloudHealthcareSource": {
      "name": "string"
    }
  },
  "customData": {
    "property1": "string",
    "property2": "string"
  },
  "imageAnnotation": {
    "boundingPolys": [
      {
        "label": "string",
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      }
    ],
    "frameIndex": 0
  },
  "name": "string",
  "resourceAnnotation": {
    "label": "string"
  },
  "textAnnotation": {
    "details": {
      "property1": {
        "findings": [
          {
            "end": "string",
            "infoType": "string",
            "quote": "string",
            "start": "string"
          }
        ]
      },
      "property2": {
        "findings": [
          {
            "end": "string",
            "infoType": "string",
            "quote": "string",
            "start": "string"
          }
        ]
      }
    }
  }
}
```

An annotation record.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationSource|[AnnotationSource](#schemaannotationsource)|false|none|Details of the source.|
|customData|object|false|none|Additional information for this annotation record, such as annotator and verifier information or study campaign.|
|imageAnnotation|[ImageAnnotation](#schemaimageannotation)|false|none|Annotations for images. For example, bounding polygons.|
|name|string|false|none|Resource name of the Annotation, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/annotationStores/{annotation_store_id}/annotations/{annotation_id}`.|
|resourceAnnotation|[ResourceAnnotation](#schemaresourceannotation)|false|none|Annotations for resource. For example, classification tags.|
|textAnnotation|[SensitiveTextAnnotation](#schemasensitivetextannotation)|false|none|Annotations for sensitive texts. For example, a range that describes the location of sensitive text.|

<h2 id="tocS_AnnotationConfig">AnnotationConfig</h2>
<!-- backwards compatibility -->
<a id="schemaannotationconfig"></a>
<a id="schema_AnnotationConfig"></a>
<a id="tocSannotationconfig"></a>
<a id="tocsannotationconfig"></a>

```json
{
  "annotationStoreName": "string",
  "storeQuote": true
}
```

Specifies how to store annotations during de-identification operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationStoreName|string|false|none|The name of the annotation store, in the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/annotationStores/{annotation_store_id}`). * The destination annotation store must be in the same project as the source data. De-identifying data across multiple projects is not supported. * The destination annotation store must exist when using DeidentifyDicomStore or DeidentifyFhirStore. DeidentifyDataset automatically creates the destination annotation store.|
|storeQuote|boolean|false|none|If set to true, the sensitive texts are included in SensitiveTextAnnotation of Annotation.|

<h2 id="tocS_AnnotationSource">AnnotationSource</h2>
<!-- backwards compatibility -->
<a id="schemaannotationsource"></a>
<a id="schema_AnnotationSource"></a>
<a id="tocSannotationsource"></a>
<a id="tocsannotationsource"></a>

```json
{
  "cloudHealthcareSource": {
    "name": "string"
  }
}
```

AnnotationSource holds the source information of the annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudHealthcareSource|[CloudHealthcareSource](#schemacloudhealthcaresource)|false|none|Cloud Healthcare API resource.|

<h2 id="tocS_AnnotationStore">AnnotationStore</h2>
<!-- backwards compatibility -->
<a id="schemaannotationstore"></a>
<a id="schema_AnnotationStore"></a>
<a id="tocSannotationstore"></a>
<a id="tocsannotationstore"></a>

```json
{
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string"
}
```

An Annotation store that can store annotation resources such as labels and tags for text, image and audio.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|object|false|none|Optional. User-supplied key-value pairs used to organize Annotation stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62} Label values must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63} No more than 64 labels can be associated with a given store.|
|name|string|false|none|Resource name of the Annotation store, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/annotationStores/{annotation_store_id}`.|

<h2 id="tocS_ArchiveUserDataMappingRequest">ArchiveUserDataMappingRequest</h2>
<!-- backwards compatibility -->
<a id="schemaarchiveuserdatamappingrequest"></a>
<a id="schema_ArchiveUserDataMappingRequest"></a>
<a id="tocSarchiveuserdatamappingrequest"></a>
<a id="tocsarchiveuserdatamappingrequest"></a>

```json
{}
```

Archives the specified User data mapping.

<h2 id="tocS_ArchiveUserDataMappingResponse">ArchiveUserDataMappingResponse</h2>
<!-- backwards compatibility -->
<a id="schemaarchiveuserdatamappingresponse"></a>
<a id="schema_ArchiveUserDataMappingResponse"></a>
<a id="tocSarchiveuserdatamappingresponse"></a>
<a id="tocsarchiveuserdatamappingresponse"></a>

```json
{}
```

Archives the specified User data mapping.

<h2 id="tocS_Attribute">Attribute</h2>
<!-- backwards compatibility -->
<a id="schemaattribute"></a>
<a id="schema_Attribute"></a>
<a id="tocSattribute"></a>
<a id="tocsattribute"></a>

```json
{
  "attributeDefinitionId": "string",
  "values": [
    "string"
  ]
}
```

An attribute value for a Consent or User data mapping. Each Attribute must have a corresponding AttributeDefinition in the consent store that defines the default and allowed values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributeDefinitionId|string|false|none|Indicates the name of an attribute defined in the consent store.|
|values|[string]|false|none|The value of the attribute. Must be an acceptable value as defined in the consent store. For example, if the consent store defines "data type" with acceptable values "questionnaire" and "step-count", when the attribute name is data type, this field must contain one of those values.|

<h2 id="tocS_AttributeDefinition">AttributeDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaattributedefinition"></a>
<a id="schema_AttributeDefinition"></a>
<a id="tocSattributedefinition"></a>
<a id="tocsattributedefinition"></a>

```json
{
  "allowedValues": [
    "string"
  ],
  "category": "CATEGORY_UNSPECIFIED",
  "consentDefaultValues": [
    "string"
  ],
  "dataMappingDefaultValue": "string",
  "description": "string",
  "name": "string"
}
```

A client-defined consent attribute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedValues|[string]|false|none|Required. Possible values for the attribute. The number of allowed values must not exceed 500. An empty list is invalid. The list can only be expanded after creation.|
|category|string|false|none|Required. The category of the attribute. The value of this field cannot be changed after creation.|
|consentDefaultValues|[string]|false|none|Optional. Default values of the attribute in Consents. If no default values are specified, it defaults to an empty value.|
|dataMappingDefaultValue|string|false|none|Optional. Default value of the attribute in User data mappings. If no default value is specified, it defaults to an empty value. This field is only applicable to attributes of the category `RESOURCE`.|
|description|string|false|none|Optional. A description of the attribute.|
|name|string|false|none|Resource name of the Attribute definition, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/attributeDefinitions/{attribute_definition_id}`. Cannot be changed after creation.|

#### Enumerated Values

|Property|Value|
|---|---|
|category|CATEGORY_UNSPECIFIED|
|category|RESOURCE|
|category|REQUEST|

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

<h2 id="tocS_BatchGetMessagesResponse">BatchGetMessagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetmessagesresponse"></a>
<a id="schema_BatchGetMessagesResponse"></a>
<a id="tocSbatchgetmessagesresponse"></a>
<a id="tocsbatchgetmessagesresponse"></a>

```json
{
  "messages": [
    {
      "createTime": "string",
      "data": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "messageType": "string",
      "name": "string",
      "parsedData": {
        "segments": [
          {
            "fields": {
              "property1": "string",
              "property2": "string"
            },
            "segmentId": "string",
            "setId": "string"
          }
        ]
      },
      "patientIds": [
        {
          "type": "string",
          "value": "string"
        }
      ],
      "schematizedData": {
        "data": "string",
        "error": "string"
      },
      "sendFacility": "string",
      "sendTime": "string"
    }
  ]
}
```

Gets multiple messages in a specified HL7v2 store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[[Message](#schemamessage)]|false|none|The returned Messages. See `MessageView` for populated fields.|

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

<h2 id="tocS_BoundingPoly">BoundingPoly</h2>
<!-- backwards compatibility -->
<a id="schemaboundingpoly"></a>
<a id="schema_BoundingPoly"></a>
<a id="tocSboundingpoly"></a>
<a id="tocsboundingpoly"></a>

```json
{
  "label": "string",
  "vertices": [
    {
      "x": 0,
      "y": 0
    }
  ]
}
```

A bounding polygon for the detected image annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|false|none|A description of this polygon.|
|vertices|[[Vertex](#schemavertex)]|false|none|List of the vertices of this polygon.|

<h2 id="tocS_CancelOperationRequest">CancelOperationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacanceloperationrequest"></a>
<a id="schema_CancelOperationRequest"></a>
<a id="tocScanceloperationrequest"></a>
<a id="tocscanceloperationrequest"></a>

```json
{}
```

The request message for Operations.CancelOperation.

<h2 id="tocS_CharacterMaskConfig">CharacterMaskConfig</h2>
<!-- backwards compatibility -->
<a id="schemacharactermaskconfig"></a>
<a id="schema_CharacterMaskConfig"></a>
<a id="tocScharactermaskconfig"></a>
<a id="tocscharactermaskconfig"></a>

```json
{
  "maskingCharacter": "string"
}
```

Mask a string by replacing its characters with a fixed character.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maskingCharacter|string|false|none|Character to mask the sensitive values. If not supplied, defaults to "*".|

<h2 id="tocS_CharacterMaskField">CharacterMaskField</h2>
<!-- backwards compatibility -->
<a id="schemacharactermaskfield"></a>
<a id="schema_CharacterMaskField"></a>
<a id="tocScharactermaskfield"></a>
<a id="tocscharactermaskfield"></a>

```json
{}
```

Replace field value with masking character. Supported [types](https://www.hl7.org/fhir/datatypes.html): Code, Decimal, HumanName, Id, LanguageCode, Markdown, Oid, String, Uri, Uuid, Xhtml

<h2 id="tocS_CheckDataAccessRequest">CheckDataAccessRequest</h2>
<!-- backwards compatibility -->
<a id="schemacheckdataaccessrequest"></a>
<a id="schema_CheckDataAccessRequest"></a>
<a id="tocScheckdataaccessrequest"></a>
<a id="tocscheckdataaccessrequest"></a>

```json
{
  "consentList": {
    "consents": [
      "string"
    ]
  },
  "dataId": "string",
  "requestAttributes": {
    "property1": "string",
    "property2": "string"
  },
  "responseView": "RESPONSE_VIEW_UNSPECIFIED"
}
```

Checks if a particular data_id of a User data mapping in the given consent store is consented for a given use.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consentList|[ConsentList](#schemaconsentlist)|false|none|Optional. Specific Consents to evaluate the access request against. These Consents must have the same `user_id` as the evaluated User data mapping, must exist in the current `consent_store`, and have a `state` of either `ACTIVE` or `DRAFT`. A maximum of 100 Consents can be provided here. If no selection is specified, the access request is evaluated against all `ACTIVE` unexpired Consents with the same `user_id` as the evaluated User data mapping.|
|dataId|string|false|none|Required. The unique identifier of the resource to check access for. This identifier must correspond to a User data mapping in the given consent store.|
|requestAttributes|object|false|none|The values of request attributes associated with this access request.|
|responseView|string|false|none|Optional. The view for CheckDataAccessResponse. If unspecified, defaults to `BASIC` and returns `consented` as `TRUE` or `FALSE`.|

#### Enumerated Values

|Property|Value|
|---|---|
|responseView|RESPONSE_VIEW_UNSPECIFIED|
|responseView|BASIC|
|responseView|FULL|

<h2 id="tocS_CheckDataAccessResponse">CheckDataAccessResponse</h2>
<!-- backwards compatibility -->
<a id="schemacheckdataaccessresponse"></a>
<a id="schema_CheckDataAccessResponse"></a>
<a id="tocScheckdataaccessresponse"></a>
<a id="tocscheckdataaccessresponse"></a>

```json
{
  "consentDetails": {
    "property1": {
      "evaluationResult": "EVALUATION_RESULT_UNSPECIFIED"
    },
    "property2": {
      "evaluationResult": "EVALUATION_RESULT_UNSPECIFIED"
    }
  },
  "consented": true
}
```

Checks if a particular data_id of a User data mapping in the given consent store is consented for a given use.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consentDetails|object|false|none|The resource names of all evaluated Consents mapped to their evaluation.|
|consented|boolean|false|none|Whether the requested resource is consented for the given use.|

<h2 id="tocS_CleanDescriptorsOption">CleanDescriptorsOption</h2>
<!-- backwards compatibility -->
<a id="schemacleandescriptorsoption"></a>
<a id="schema_CleanDescriptorsOption"></a>
<a id="tocScleandescriptorsoption"></a>
<a id="tocscleandescriptorsoption"></a>

```json
{}
```

This option is based on the DICOM Standard's [Clean Descriptors Option](http://dicom.nema.org/medical/dicom/2018e/output/chtml/part15/sect_E.3.5.html), and the `CleanText` `Action` is applied to all the specified fields. When cleaning text, the process attempts to transform phrases matching any of the tags marked for removal (action codes D, Z, X, and U) in the [Basic Profile](http://dicom.nema.org/medical/dicom/2018e/output/chtml/part15/chapter_E.html). These contextual phrases are replaced with the token "[CTX]". This option uses an additional `InfoType` during inspection.

<h2 id="tocS_CleanTextField">CleanTextField</h2>
<!-- backwards compatibility -->
<a id="schemacleantextfield"></a>
<a id="schema_CleanTextField"></a>
<a id="tocScleantextfield"></a>
<a id="tocscleantextfield"></a>

```json
{}
```

Inspect text and transform sensitive text. Configure using `TextConfig`. Supported [types](https://www.hl7.org/fhir/datatypes.html): Code, Date, DateTime, Decimal, HumanName, Id, LanguageCode, Markdown, Oid, String, Uri, Uuid, Xhtml

<h2 id="tocS_CleanTextTag">CleanTextTag</h2>
<!-- backwards compatibility -->
<a id="schemacleantexttag"></a>
<a id="schema_CleanTextTag"></a>
<a id="tocScleantexttag"></a>
<a id="tocscleantexttag"></a>

```json
{}
```

Inspect text and transform sensitive text. Configurable using `TextConfig`. Supported [Value Representations] (http://dicom.nema.org/medical/dicom/2018e/output/chtml/part05/sect_6.2.html#table_6.2-1): AE, LO, LT, PN, SH, ST, UC, UT, DA, DT, AS

<h2 id="tocS_CloudHealthcareSource">CloudHealthcareSource</h2>
<!-- backwards compatibility -->
<a id="schemacloudhealthcaresource"></a>
<a id="schema_CloudHealthcareSource"></a>
<a id="tocScloudhealthcaresource"></a>
<a id="tocscloudhealthcaresource"></a>

```json
{
  "name": "string"
}
```

Cloud Healthcare API resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Full path of a Cloud Healthcare API resource.|

<h2 id="tocS_ConfigureSearchRequest">ConfigureSearchRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconfiguresearchrequest"></a>
<a id="schema_ConfigureSearchRequest"></a>
<a id="tocSconfiguresearchrequest"></a>
<a id="tocsconfiguresearchrequest"></a>

```json
{
  "canonicalUrls": [
    "string"
  ],
  "validateOnly": true
}
```

Request to configure the search parameters for the specified FHIR store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canonicalUrls|[string]|false|none|The canonical URLs of the search parameters that are intended to be used for the FHIR store. See https://www.hl7.org/fhir/references.html#canonical for explanation on FHIR canonical urls|
|validateOnly|boolean|false|none|If `validate_only` is set to true, the method will compile all the search parameters without actually setting the search config for the store and triggering the reindex.|

<h2 id="tocS_Consent">Consent</h2>
<!-- backwards compatibility -->
<a id="schemaconsent"></a>
<a id="schema_Consent"></a>
<a id="tocSconsent"></a>
<a id="tocsconsent"></a>

```json
{
  "consentArtifact": "string",
  "expireTime": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "policies": [
    {
      "authorizationRule": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "resourceAttributes": [
        {
          "attributeDefinitionId": "string",
          "values": [
            "string"
          ]
        }
      ]
    }
  ],
  "revisionCreateTime": "string",
  "revisionId": "string",
  "state": "STATE_UNSPECIFIED",
  "ttl": "string",
  "userId": "string"
}
```

Represents a user's consent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consentArtifact|string|false|none|Required. The resource name of the Consent artifact that contains proof of the end user's consent, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consentArtifacts/{consent_artifact_id}`.|
|expireTime|string(google-datetime)|false|none|Timestamp in UTC of when this Consent is considered expired.|
|metadata|object|false|none|Optional. User-supplied key-value pairs used to organize Consent resources. Metadata keys must: - be between 1 and 63 characters long - have a UTF-8 encoding of maximum 128 bytes - begin with a letter - consist of up to 63 characters including lowercase letters, numeric characters, underscores, and dashes Metadata values must be: - be between 1 and 63 characters long - have a UTF-8 encoding of maximum 128 bytes - consist of up to 63 characters including lowercase letters, numeric characters, underscores, and dashes No more than 64 metadata entries can be associated with a given consent.|
|name|string|false|none|Resource name of the Consent, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consents/{consent_id}`. Cannot be changed after creation.|
|policies|[[GoogleCloudHealthcareV1beta1ConsentPolicy](#schemagooglecloudhealthcarev1beta1consentpolicy)]|false|none|Optional. Represents a user's consent in terms of the resources that can be accessed and under what conditions.|
|revisionCreateTime|string(google-datetime)|false|read-only|Output only. The timestamp that the revision was created.|
|revisionId|string|false|read-only|Output only. The revision ID of the Consent. The format is an 8-character hexadecimal string. Refer to a specific revision of a Consent by appending `@{revision_id}` to the Consent's resource name.|
|state|string|false|none|Required. Indicates the current state of this Consent.|
|ttl|string(google-duration)|false|none|Input only. The time to live for this Consent from when it is created.|
|userId|string|false|none|Required. User's UUID provided by the client.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|ACTIVE|
|state|ARCHIVED|
|state|REVOKED|
|state|DRAFT|
|state|REJECTED|

<h2 id="tocS_ConsentArtifact">ConsentArtifact</h2>
<!-- backwards compatibility -->
<a id="schemaconsentartifact"></a>
<a id="schema_ConsentArtifact"></a>
<a id="tocSconsentartifact"></a>
<a id="tocsconsentartifact"></a>

```json
{
  "consentContentScreenshots": [
    {
      "gcsUri": "string",
      "rawBytes": "string"
    }
  ],
  "consentContentVersion": "string",
  "guardianSignature": {
    "image": {
      "gcsUri": "string",
      "rawBytes": "string"
    },
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "signatureTime": "string",
    "userId": "string"
  },
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "userId": "string",
  "userSignature": {
    "image": {
      "gcsUri": "string",
      "rawBytes": "string"
    },
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "signatureTime": "string",
    "userId": "string"
  },
  "witnessSignature": {
    "image": {
      "gcsUri": "string",
      "rawBytes": "string"
    },
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "signatureTime": "string",
    "userId": "string"
  }
}
```

Documentation of a user's consent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consentContentScreenshots|[[Image](#schemaimage)]|false|none|Optional. Screenshots, PDFs, or other binary information documenting the user's consent.|
|consentContentVersion|string|false|none|Optional. An string indicating the version of the consent information shown to the user.|
|guardianSignature|[Signature](#schemasignature)|false|none|Optional. A signature from a guardian.|
|metadata|object|false|none|Optional. Metadata associated with the Consent artifact. For example, the consent locale or user agent version.|
|name|string|false|none|Resource name of the Consent artifact, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consentArtifacts/{consent_artifact_id}`. Cannot be changed after creation.|
|userId|string|false|none|Required. User's UUID provided by the client.|
|userSignature|[Signature](#schemasignature)|false|none|Optional. User's signature.|
|witnessSignature|[Signature](#schemasignature)|false|none|Optional. A signature from a witness.|

<h2 id="tocS_ConsentEvaluation">ConsentEvaluation</h2>
<!-- backwards compatibility -->
<a id="schemaconsentevaluation"></a>
<a id="schema_ConsentEvaluation"></a>
<a id="tocSconsentevaluation"></a>
<a id="tocsconsentevaluation"></a>

```json
{
  "evaluationResult": "EVALUATION_RESULT_UNSPECIFIED"
}
```

The detailed evaluation of a particular Consent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evaluationResult|string|false|none|The evaluation result.|

#### Enumerated Values

|Property|Value|
|---|---|
|evaluationResult|EVALUATION_RESULT_UNSPECIFIED|
|evaluationResult|NOT_APPLICABLE|
|evaluationResult|NO_MATCHING_POLICY|
|evaluationResult|NO_SATISFIED_POLICY|
|evaluationResult|HAS_SATISFIED_POLICY|

<h2 id="tocS_ConsentList">ConsentList</h2>
<!-- backwards compatibility -->
<a id="schemaconsentlist"></a>
<a id="schema_ConsentList"></a>
<a id="tocSconsentlist"></a>
<a id="tocsconsentlist"></a>

```json
{
  "consents": [
    "string"
  ]
}
```

List of resource names of Consent resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consents|[string]|false|none|The resource names of the Consents to evaluate against, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consents/{consent_id}`.|

<h2 id="tocS_ConsentStore">ConsentStore</h2>
<!-- backwards compatibility -->
<a id="schemaconsentstore"></a>
<a id="schema_ConsentStore"></a>
<a id="tocSconsentstore"></a>
<a id="tocsconsentstore"></a>

```json
{
  "defaultConsentTtl": "string",
  "enableConsentCreateOnUpdate": true,
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string"
}
```

Represents a consent store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultConsentTtl|string(google-duration)|false|none|Optional. Default time to live for Consents created in this store. Must be at least 24 hours. Updating this field will not affect the expiration time of existing consents.|
|enableConsentCreateOnUpdate|boolean|false|none|Optional. If `true`, UpdateConsent creates the Consent if it does not already exist. If unspecified, defaults to `false`.|
|labels|object|false|none|Optional. User-supplied key-value pairs used to organize consent stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62}. Label values must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}. No more than 64 labels can be associated with a given store. For more information: https://cloud.google.com/healthcare/docs/how-tos/labeling-resources|
|name|string|false|none|Resource name of the consent store, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}`. Cannot be changed after creation.|

<h2 id="tocS_ContextualDeidConfig">ContextualDeidConfig</h2>
<!-- backwards compatibility -->
<a id="schemacontextualdeidconfig"></a>
<a id="schema_ContextualDeidConfig"></a>
<a id="tocScontextualdeidconfig"></a>
<a id="tocscontextualdeidconfig"></a>

```json
{}
```

The fields that aren't marked `Keep` or `CleanText` in the `BASIC` profile are collected into a contextual phrase list. For fields marked `CleanText`, the process attempts to transform phrases matching these contextual entries. These contextual phrases are replaced with the token "[CTX]". This feature uses an additional InfoType during inspection.

<h2 id="tocS_CreateMessageRequest">CreateMessageRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemessagerequest"></a>
<a id="schema_CreateMessageRequest"></a>
<a id="tocScreatemessagerequest"></a>
<a id="tocscreatemessagerequest"></a>

```json
{
  "message": {
    "createTime": "string",
    "data": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "messageType": "string",
    "name": "string",
    "parsedData": {
      "segments": [
        {
          "fields": {
            "property1": "string",
            "property2": "string"
          },
          "segmentId": "string",
          "setId": "string"
        }
      ]
    },
    "patientIds": [
      {
        "type": "string",
        "value": "string"
      }
    ],
    "schematizedData": {
      "data": "string",
      "error": "string"
    },
    "sendFacility": "string",
    "sendTime": "string"
  }
}
```

Creates a new message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[Message](#schemamessage)|false|none|HL7v2 message.|

<h2 id="tocS_CryptoHashConfig">CryptoHashConfig</h2>
<!-- backwards compatibility -->
<a id="schemacryptohashconfig"></a>
<a id="schema_CryptoHashConfig"></a>
<a id="tocScryptohashconfig"></a>
<a id="tocscryptohashconfig"></a>

```json
{
  "cryptoKey": "string",
  "kmsWrapped": {
    "cryptoKey": "string",
    "wrappedKey": "string"
  }
}
```

Pseudonymization method that generates surrogates via cryptographic hashing. Uses SHA-256. Outputs a base64-encoded representation of the hashed output. For example, `L7k0BHmF1ha5U3NfGykjro4xWi1MPVQPjhMAZbSV9mM=`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cryptoKey|string(byte)|false|none|An AES 128/192/256 bit key. Causes the hash to be computed based on this key. A default key is generated for each Deidentify operation and is used when neither `crypto_key` nor `kms_wrapped` is specified. Must not be set if `kms_wrapped` is set.|
|kmsWrapped|[KmsWrappedCryptoKey](#schemakmswrappedcryptokey)|false|none|KMS wrapped key. Must not be set if `crypto_key` is set.|

<h2 id="tocS_CryptoHashField">CryptoHashField</h2>
<!-- backwards compatibility -->
<a id="schemacryptohashfield"></a>
<a id="schema_CryptoHashField"></a>
<a id="tocScryptohashfield"></a>
<a id="tocscryptohashfield"></a>

```json
{}
```

Replace field value with a hash of that value. Supported [types](https://www.hl7.org/fhir/datatypes.html): Code, Decimal, HumanName, Id, LanguageCode, Markdown, Oid, String, Uri, Uuid, Xhtml

<h2 id="tocS_Dataset">Dataset</h2>
<!-- backwards compatibility -->
<a id="schemadataset"></a>
<a id="schema_Dataset"></a>
<a id="tocSdataset"></a>
<a id="tocsdataset"></a>

```json
{
  "name": "string",
  "timeZone": "string"
}
```

A message representing a health dataset. A health dataset represents a collection of healthcare data pertaining to one or more patients. This may include multiple modalities of healthcare data, such as electronic medical records or medical imaging data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Resource name of the dataset, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`.|
|timeZone|string|false|none|The default timezone used by this dataset. Must be a either a valid IANA time zone name such as "America/New_York" or empty, which defaults to UTC. This is used for parsing times in resources, such as HL7 messages, where no explicit timezone is specified.|

<h2 id="tocS_DateShiftConfig">DateShiftConfig</h2>
<!-- backwards compatibility -->
<a id="schemadateshiftconfig"></a>
<a id="schema_DateShiftConfig"></a>
<a id="tocSdateshiftconfig"></a>
<a id="tocsdateshiftconfig"></a>

```json
{
  "cryptoKey": "string",
  "kmsWrapped": {
    "cryptoKey": "string",
    "wrappedKey": "string"
  }
}
```

Shift a date forward or backward in time by a random amount which is consistent for a given patient and crypto key combination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cryptoKey|string(byte)|false|none|An AES 128/192/256 bit key. The date shift is computed based on this key and the patient ID. If the patient ID is empty for a DICOM resource, the date shift is computed based on this key and the study instance UID. If `crypto_key` is not set, then `kms_wrapped` is used to calculate the date shift. If neither is set, a default key is generated for each de-identify operation. Must not be set if `kms_wrapped` is set.|
|kmsWrapped|[KmsWrappedCryptoKey](#schemakmswrappedcryptokey)|false|none|KMS wrapped key. If `kms_wrapped` is not set, then `crypto_key` is used to calculate the date shift. If neither is set, a default key is generated for each de-identify operation. Must not be set if `crypto_key` is set.|

<h2 id="tocS_DateShiftField">DateShiftField</h2>
<!-- backwards compatibility -->
<a id="schemadateshiftfield"></a>
<a id="schema_DateShiftField"></a>
<a id="tocSdateshiftfield"></a>
<a id="tocsdateshiftfield"></a>

```json
{}
```

Shift the date by a randomized number of days. See [date shifting](https://cloud.google.com/dlp/docs/concepts-date-shifting) for more information. Supported [types](https://www.hl7.org/fhir/datatypes.html): Date, DateTime

<h2 id="tocS_DeidentifiedStoreDestination">DeidentifiedStoreDestination</h2>
<!-- backwards compatibility -->
<a id="schemadeidentifiedstoredestination"></a>
<a id="schema_DeidentifiedStoreDestination"></a>
<a id="tocSdeidentifiedstoredestination"></a>
<a id="tocsdeidentifiedstoredestination"></a>

```json
{
  "config": {
    "annotation": {
      "annotationStoreName": "string",
      "storeQuote": true
    },
    "dicom": {
      "filterProfile": "TAG_FILTER_PROFILE_UNSPECIFIED",
      "keepList": {
        "tags": [
          "string"
        ]
      },
      "removeList": {
        "tags": [
          "string"
        ]
      },
      "skipIdRedaction": true
    },
    "dicomTagConfig": {
      "actions": [
        {
          "cleanImageTag": {
            "additionalInfoTypes": [
              "string"
            ],
            "excludeInfoTypes": [
              "string"
            ],
            "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
          },
          "cleanTextTag": {},
          "deleteTag": {},
          "keepTag": {},
          "queries": [
            "string"
          ],
          "recurseTag": {},
          "regenUidTag": {},
          "removeTag": {},
          "resetTag": {}
        }
      ],
      "options": {
        "cleanDescriptors": {},
        "cleanImage": {
          "additionalInfoTypes": [
            "string"
          ],
          "excludeInfoTypes": [
            "string"
          ],
          "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
        },
        "primaryIds": "PRIMARY_IDS_OPTION_UNSPECIFIED"
      },
      "profileType": "PROFILE_TYPE_UNSPECIFIED"
    },
    "fhir": {
      "defaultKeepExtensions": true,
      "fieldMetadataList": [
        {
          "action": "ACTION_UNSPECIFIED",
          "paths": [
            "string"
          ]
        }
      ]
    },
    "fhirFieldConfig": {
      "fieldMetadataList": [
        {
          "characterMaskField": {},
          "cleanTextField": {},
          "cryptoHashField": {},
          "dateShiftField": {},
          "keepField": {},
          "paths": [
            "string"
          ],
          "removeField": {}
        }
      ],
      "options": {
        "characterMaskConfig": {
          "maskingCharacter": "string"
        },
        "contextualDeid": {},
        "cryptoHashConfig": {
          "cryptoKey": "string",
          "kmsWrapped": {
            "cryptoKey": "string",
            "wrappedKey": "string"
          }
        },
        "dateShiftConfig": {
          "cryptoKey": "string",
          "kmsWrapped": {
            "cryptoKey": "string",
            "wrappedKey": "string"
          }
        },
        "keepExtensions": {}
      },
      "profileType": "PROFILE_TYPE_UNSPECIFIED"
    },
    "image": {
      "additionalInfoTypes": [
        "string"
      ],
      "excludeInfoTypes": [
        "string"
      ],
      "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
    },
    "operationMetadata": {
      "fhirOutput": {
        "fhirStore": "string"
      }
    },
    "text": {
      "additionalTransformations": [
        {
          "characterMaskConfig": {
            "maskingCharacter": "string"
          },
          "cryptoHashConfig": {
            "cryptoKey": "string",
            "kmsWrapped": {
              "cryptoKey": "string",
              "wrappedKey": "string"
            }
          },
          "dateShiftConfig": {
            "cryptoKey": "string",
            "kmsWrapped": {
              "cryptoKey": "string",
              "wrappedKey": "string"
            }
          },
          "infoTypes": [
            "string"
          ],
          "redactConfig": {},
          "replaceWithInfoTypeConfig": {}
        }
      ],
      "excludeInfoTypes": [
        "string"
      ],
      "profileType": "PROFILE_TYPE_UNSPECIFIED",
      "transformations": [
        {
          "characterMaskConfig": {
            "maskingCharacter": "string"
          },
          "cryptoHashConfig": {
            "cryptoKey": "string",
            "kmsWrapped": {
              "cryptoKey": "string",
              "wrappedKey": "string"
            }
          },
          "dateShiftConfig": {
            "cryptoKey": "string",
            "kmsWrapped": {
              "cryptoKey": "string",
              "wrappedKey": "string"
            }
          },
          "infoTypes": [
            "string"
          ],
          "redactConfig": {},
          "replaceWithInfoTypeConfig": {}
        }
      ]
    }
  },
  "store": "string"
}
```

Contains configuration for streaming de-identified FHIR export.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[DeidentifyConfig](#schemadeidentifyconfig)|false|none|The configuration to use when de-identifying resources that are added to this store.|
|store|string|false|none|The full resource name of a Cloud Healthcare FHIR store, for example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.|

<h2 id="tocS_DeidentifyConfig">DeidentifyConfig</h2>
<!-- backwards compatibility -->
<a id="schemadeidentifyconfig"></a>
<a id="schema_DeidentifyConfig"></a>
<a id="tocSdeidentifyconfig"></a>
<a id="tocsdeidentifyconfig"></a>

```json
{
  "annotation": {
    "annotationStoreName": "string",
    "storeQuote": true
  },
  "dicom": {
    "filterProfile": "TAG_FILTER_PROFILE_UNSPECIFIED",
    "keepList": {
      "tags": [
        "string"
      ]
    },
    "removeList": {
      "tags": [
        "string"
      ]
    },
    "skipIdRedaction": true
  },
  "dicomTagConfig": {
    "actions": [
      {
        "cleanImageTag": {
          "additionalInfoTypes": [
            "string"
          ],
          "excludeInfoTypes": [
            "string"
          ],
          "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
        },
        "cleanTextTag": {},
        "deleteTag": {},
        "keepTag": {},
        "queries": [
          "string"
        ],
        "recurseTag": {},
        "regenUidTag": {},
        "removeTag": {},
        "resetTag": {}
      }
    ],
    "options": {
      "cleanDescriptors": {},
      "cleanImage": {
        "additionalInfoTypes": [
          "string"
        ],
        "excludeInfoTypes": [
          "string"
        ],
        "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
      },
      "primaryIds": "PRIMARY_IDS_OPTION_UNSPECIFIED"
    },
    "profileType": "PROFILE_TYPE_UNSPECIFIED"
  },
  "fhir": {
    "defaultKeepExtensions": true,
    "fieldMetadataList": [
      {
        "action": "ACTION_UNSPECIFIED",
        "paths": [
          "string"
        ]
      }
    ]
  },
  "fhirFieldConfig": {
    "fieldMetadataList": [
      {
        "characterMaskField": {},
        "cleanTextField": {},
        "cryptoHashField": {},
        "dateShiftField": {},
        "keepField": {},
        "paths": [
          "string"
        ],
        "removeField": {}
      }
    ],
    "options": {
      "characterMaskConfig": {
        "maskingCharacter": "string"
      },
      "contextualDeid": {},
      "cryptoHashConfig": {
        "cryptoKey": "string",
        "kmsWrapped": {
          "cryptoKey": "string",
          "wrappedKey": "string"
        }
      },
      "dateShiftConfig": {
        "cryptoKey": "string",
        "kmsWrapped": {
          "cryptoKey": "string",
          "wrappedKey": "string"
        }
      },
      "keepExtensions": {}
    },
    "profileType": "PROFILE_TYPE_UNSPECIFIED"
  },
  "image": {
    "additionalInfoTypes": [
      "string"
    ],
    "excludeInfoTypes": [
      "string"
    ],
    "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
  },
  "operationMetadata": {
    "fhirOutput": {
      "fhirStore": "string"
    }
  },
  "text": {
    "additionalTransformations": [
      {
        "characterMaskConfig": {
          "maskingCharacter": "string"
        },
        "cryptoHashConfig": {
          "cryptoKey": "string",
          "kmsWrapped": {
            "cryptoKey": "string",
            "wrappedKey": "string"
          }
        },
        "dateShiftConfig": {
          "cryptoKey": "string",
          "kmsWrapped": {
            "cryptoKey": "string",
            "wrappedKey": "string"
          }
        },
        "infoTypes": [
          "string"
        ],
        "redactConfig": {},
        "replaceWithInfoTypeConfig": {}
      }
    ],
    "excludeInfoTypes": [
      "string"
    ],
    "profileType": "PROFILE_TYPE_UNSPECIFIED",
    "transformations": [
      {
        "characterMaskConfig": {
          "maskingCharacter": "string"
        },
        "cryptoHashConfig": {
          "cryptoKey": "string",
          "kmsWrapped": {
            "cryptoKey": "string",
            "wrappedKey": "string"
          }
        },
        "dateShiftConfig": {
          "cryptoKey": "string",
          "kmsWrapped": {
            "cryptoKey": "string",
            "wrappedKey": "string"
          }
        },
        "infoTypes": [
          "string"
        ],
        "redactConfig": {},
        "replaceWithInfoTypeConfig": {}
      }
    ]
  }
}
```

Configures de-id options specific to different types of content. Each submessage customizes the handling of an https://tools.ietf.org/html/rfc6838 media type or subtype. Configs are applied in a nested manner at runtime.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotation|[AnnotationConfig](#schemaannotationconfig)|false|none|Configures how annotations, meaning that the location and infoType of sensitive information findings, are created during de-identification. If unspecified, no annotations are created.|
|dicom|[DicomConfig](#schemadicomconfig)|false|none|Configures de-id of application/DICOM content. Deprecated. Use `dicom_tag_config` instead.|
|dicomTagConfig|[DicomTagConfig](#schemadicomtagconfig)|false|none|Configures de-id of application/DICOM content.|
|fhir|[FhirConfig](#schemafhirconfig)|false|none|Configures de-id of application/FHIR content. Deprecated. Use `fhir_field_config` instead.|
|fhirFieldConfig|[FhirFieldConfig](#schemafhirfieldconfig)|false|none|Configures de-id of application/FHIR content.|
|image|[ImageConfig](#schemaimageconfig)|false|none|Configures the de-identification of image pixels in the source_dataset. Deprecated. Use `dicom_tag_config.options.clean_image` instead.|
|operationMetadata|[DeidentifyOperationMetadata](#schemadeidentifyoperationmetadata)|false|none|Details about the work the de-identify operation performed.|
|text|[TextConfig](#schematextconfig)|false|none|Configures de-identification of text wherever it is found in the source_dataset.|

<h2 id="tocS_DeidentifyDatasetRequest">DeidentifyDatasetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeidentifydatasetrequest"></a>
<a id="schema_DeidentifyDatasetRequest"></a>
<a id="tocSdeidentifydatasetrequest"></a>
<a id="tocsdeidentifydatasetrequest"></a>

```json
{
  "config": {
    "annotation": {
      "annotationStoreName": "string",
      "storeQuote": true
    },
    "dicom": {
      "filterProfile": "TAG_FILTER_PROFILE_UNSPECIFIED",
      "keepList": {
        "tags": [
          "string"
        ]
      },
      "removeList": {
        "tags": [
          "string"
        ]
      },
      "skipIdRedaction": true
    },
    "dicomTagConfig": {
      "actions": [
        {
          "cleanImageTag": {
            "additionalInfoTypes": [
              "string"
            ],
            "excludeInfoTypes": [
              "string"
            ],
            "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
          },
          "cleanTextTag": {},
          "deleteTag": {},
          "keepTag": {},
          "queries": [
            "string"
          ],
          "recurseTag": {},
          "regenUidTag": {},
          "removeTag": {},
          "resetTag": {}
        }
      ],
      "options": {
        "cleanDescriptors": {},
        "cleanImage": {
          "additionalInfoTypes": [
            "string"
          ],
          "excludeInfoTypes": [
            "string"
          ],
          "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
        },
        "primaryIds": "PRIMARY_IDS_OPTION_UNSPECIFIED"
      },
      "profileType": "PROFILE_TYPE_UNSPECIFIED"
    },
    "fhir": {
      "defaultKeepExtensions": true,
      "fieldMetadataList": [
        {
          "action": "ACTION_UNSPECIFIED",
          "paths": [
            "string"
          ]
        }
      ]
    },
    "fhirFieldConfig": {
      "fieldMetadataList": [
        {
          "characterMaskField": {},
          "cleanTextField": {},
          "cryptoHashField": {},
          "dateShiftField": {},
          "keepField": {},
          "paths": [
            "string"
          ],
          "removeField": {}
        }
      ],
      "options": {
        "characterMaskConfig": {
          "maskingCharacter": "string"
        },
        "contextualDeid": {},
        "cryptoHashConfig": {
          "cryptoKey": "string",
          "kmsWrapped": {
            "cryptoKey": "string",
            "wrappedKey": "string"
          }
        },
        "dateShiftConfig": {
          "cryptoKey": "string",
          "kmsWrapped": {
            "cryptoKey": "string",
            "wrappedKey": "string"
          }
        },
        "keepExtensions": {}
      },
      "profileType": "PROFILE_TYPE_UNSPECIFIED"
    },
    "image": {
      "additionalInfoTypes": [
        "string"
      ],
      "excludeInfoTypes": [
        "string"
      ],
      "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
    },
    "operationMetadata": {
      "fhirOutput": {
        "fhirStore": "string"
      }
    },
    "text": {
      "additionalTransformations": [
        {
          "characterMaskConfig": {
            "maskingCharacter": "string"
          },
          "cryptoHashConfig": {
            "cryptoKey": "string",
            "kmsWrapped": {
              "cryptoKey": "string",
              "wrappedKey": "string"
            }
          },
          "dateShiftConfig": {
            "cryptoKey": "string",
            "kmsWrapped": {
              "cryptoKey": "string",
              "wrappedKey": "string"
            }
          },
          "infoTypes": [
            "string"
          ],
          "redactConfig": {},
          "replaceWithInfoTypeConfig": {}
        }
      ],
      "excludeInfoTypes": [
        "string"
      ],
      "profileType": "PROFILE_TYPE_UNSPECIFIED",
      "transformations": [
        {
          "characterMaskConfig": {
            "maskingCharacter": "string"
          },
          "cryptoHashConfig": {
            "cryptoKey": "string",
            "kmsWrapped": {
              "cryptoKey": "string",
              "wrappedKey": "string"
            }
          },
          "dateShiftConfig": {
            "cryptoKey": "string",
            "kmsWrapped": {
              "cryptoKey": "string",
              "wrappedKey": "string"
            }
          },
          "infoTypes": [
            "string"
          ],
          "redactConfig": {},
          "replaceWithInfoTypeConfig": {}
        }
      ]
    }
  },
  "destinationDataset": "string",
  "gcsConfigUri": "string"
}
```

Redacts identifying information from the specified dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[DeidentifyConfig](#schemadeidentifyconfig)|false|none|Deidentify configuration. Only one of `config` and `gcs_config_uri` can be specified.|
|destinationDataset|string|false|none|The name of the dataset resource to create and write the redacted data to. * The destination dataset must not exist. * The destination dataset must be in the same location as the source dataset. De-identifying data across multiple locations is not supported.|
|gcsConfigUri|string|false|none|Cloud Storage location to read the JSON cloud.healthcare.deidentify.DeidentifyConfig from, overriding the default config. Must be of the form `gs://{bucket_id}/path/to/object`. The Cloud Storage location must grant the Cloud IAM role `roles/storage.objectViewer` to the project's Cloud Healthcare Service Agent service account. Only one of `config` and `gcs_config_uri` can be specified.|

<h2 id="tocS_DeidentifyDicomStoreRequest">DeidentifyDicomStoreRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeidentifydicomstorerequest"></a>
<a id="schema_DeidentifyDicomStoreRequest"></a>
<a id="tocSdeidentifydicomstorerequest"></a>
<a id="tocsdeidentifydicomstorerequest"></a>

```json
{
  "config": {
    "annotation": {
      "annotationStoreName": "string",
      "storeQuote": true
    },
    "dicom": {
      "filterProfile": "TAG_FILTER_PROFILE_UNSPECIFIED",
      "keepList": {
        "tags": [
          "string"
        ]
      },
      "removeList": {
        "tags": [
          "string"
        ]
      },
      "skipIdRedaction": true
    },
    "dicomTagConfig": {
      "actions": [
        {
          "cleanImageTag": {
            "additionalInfoTypes": [
              "string"
            ],
            "excludeInfoTypes": [
              "string"
            ],
            "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
          },
          "cleanTextTag": {},
          "deleteTag": {},
          "keepTag": {},
          "queries": [
            "string"
          ],
          "recurseTag": {},
          "regenUidTag": {},
          "removeTag": {},
          "resetTag": {}
        }
      ],
      "options": {
        "cleanDescriptors": {},
        "cleanImage": {
          "additionalInfoTypes": [
            "string"
          ],
          "excludeInfoTypes": [
            "string"
          ],
          "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
        },
        "primaryIds": "PRIMARY_IDS_OPTION_UNSPECIFIED"
      },
      "profileType": "PROFILE_TYPE_UNSPECIFIED"
    },
    "fhir": {
      "defaultKeepExtensions": true,
      "fieldMetadataList": [
        {
          "action": "ACTION_UNSPECIFIED",
          "paths": [
            "string"
          ]
        }
      ]
    },
    "fhirFieldConfig": {
      "fieldMetadataList": [
        {
          "characterMaskField": {},
          "cleanTextField": {},
          "cryptoHashField": {},
          "dateShiftField": {},
          "keepField": {},
          "paths": [
            "string"
          ],
          "removeField": {}
        }
      ],
      "options": {
        "characterMaskConfig": {
          "maskingCharacter": "string"
        },
        "contextualDeid": {},
        "cryptoHashConfig": {
          "cryptoKey": "string",
          "kmsWrapped": {
            "cryptoKey": "string",
            "wrappedKey": "string"
          }
        },
        "dateShiftConfig": {
          "cryptoKey": "string",
          "kmsWrapped": {
            "cryptoKey": "string",
            "wrappedKey": "string"
          }
        },
        "keepExtensions": {}
      },
      "profileType": "PROFILE_TYPE_UNSPECIFIED"
    },
    "image": {
      "additionalInfoTypes": [
        "string"
      ],
      "excludeInfoTypes": [
        "string"
      ],
      "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
    },
    "operationMetadata": {
      "fhirOutput": {
        "fhirStore": "string"
      }
    },
    "text": {
      "additionalTransformations": [
        {
          "characterMaskConfig": {
            "maskingCharacter": "string"
          },
          "cryptoHashConfig": {
            "cryptoKey": "string",
            "kmsWrapped": {
              "cryptoKey": "string",
              "wrappedKey": "string"
            }
          },
          "dateShiftConfig": {
            "cryptoKey": "string",
            "kmsWrapped": {
              "cryptoKey": "string",
              "wrappedKey": "string"
            }
          },
          "infoTypes": [
            "string"
          ],
          "redactConfig": {},
          "replaceWithInfoTypeConfig": {}
        }
      ],
      "excludeInfoTypes": [
        "string"
      ],
      "profileType": "PROFILE_TYPE_UNSPECIFIED",
      "transformations": [
        {
          "characterMaskConfig": {
            "maskingCharacter": "string"
          },
          "cryptoHashConfig": {
            "cryptoKey": "string",
            "kmsWrapped": {
              "cryptoKey": "string",
              "wrappedKey": "string"
            }
          },
          "dateShiftConfig": {
            "cryptoKey": "string",
            "kmsWrapped": {
              "cryptoKey": "string",
              "wrappedKey": "string"
            }
          },
          "infoTypes": [
            "string"
          ],
          "redactConfig": {},
          "replaceWithInfoTypeConfig": {}
        }
      ]
    }
  },
  "destinationStore": "string",
  "filterConfig": {
    "resourcePathsGcsUri": "string"
  },
  "gcsConfigUri": "string"
}
```

Creates a new DICOM store with sensitive information de-identified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[DeidentifyConfig](#schemadeidentifyconfig)|false|none|Deidentify configuration. Only one of `config` and `gcs_config_uri` can be specified.|
|destinationStore|string|false|none|The name of the DICOM store to create and write the redacted data to. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`. * The destination dataset must exist. * The source dataset and destination dataset must both reside in the same location. De-identifying data across multiple locations is not supported. * The destination DICOM store must not exist. * The caller must have the necessary permissions to create the destination DICOM store.|
|filterConfig|[DicomFilterConfig](#schemadicomfilterconfig)|false|none|Filter configuration.|
|gcsConfigUri|string|false|none|Cloud Storage location to read the JSON cloud.healthcare.deidentify.DeidentifyConfig from, overriding the default config. Must be of the form `gs://{bucket_id}/path/to/object`. The Cloud Storage location must grant the Cloud IAM role `roles/storage.objectViewer` to the project's Cloud Healthcare Service Agent service account. Only one of `config` and `gcs_config_uri` can be specified.|

<h2 id="tocS_DeidentifyFhirStoreRequest">DeidentifyFhirStoreRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeidentifyfhirstorerequest"></a>
<a id="schema_DeidentifyFhirStoreRequest"></a>
<a id="tocSdeidentifyfhirstorerequest"></a>
<a id="tocsdeidentifyfhirstorerequest"></a>

```json
{
  "config": {
    "annotation": {
      "annotationStoreName": "string",
      "storeQuote": true
    },
    "dicom": {
      "filterProfile": "TAG_FILTER_PROFILE_UNSPECIFIED",
      "keepList": {
        "tags": [
          "string"
        ]
      },
      "removeList": {
        "tags": [
          "string"
        ]
      },
      "skipIdRedaction": true
    },
    "dicomTagConfig": {
      "actions": [
        {
          "cleanImageTag": {
            "additionalInfoTypes": [
              "string"
            ],
            "excludeInfoTypes": [
              "string"
            ],
            "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
          },
          "cleanTextTag": {},
          "deleteTag": {},
          "keepTag": {},
          "queries": [
            "string"
          ],
          "recurseTag": {},
          "regenUidTag": {},
          "removeTag": {},
          "resetTag": {}
        }
      ],
      "options": {
        "cleanDescriptors": {},
        "cleanImage": {
          "additionalInfoTypes": [
            "string"
          ],
          "excludeInfoTypes": [
            "string"
          ],
          "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
        },
        "primaryIds": "PRIMARY_IDS_OPTION_UNSPECIFIED"
      },
      "profileType": "PROFILE_TYPE_UNSPECIFIED"
    },
    "fhir": {
      "defaultKeepExtensions": true,
      "fieldMetadataList": [
        {
          "action": "ACTION_UNSPECIFIED",
          "paths": [
            "string"
          ]
        }
      ]
    },
    "fhirFieldConfig": {
      "fieldMetadataList": [
        {
          "characterMaskField": {},
          "cleanTextField": {},
          "cryptoHashField": {},
          "dateShiftField": {},
          "keepField": {},
          "paths": [
            "string"
          ],
          "removeField": {}
        }
      ],
      "options": {
        "characterMaskConfig": {
          "maskingCharacter": "string"
        },
        "contextualDeid": {},
        "cryptoHashConfig": {
          "cryptoKey": "string",
          "kmsWrapped": {
            "cryptoKey": "string",
            "wrappedKey": "string"
          }
        },
        "dateShiftConfig": {
          "cryptoKey": "string",
          "kmsWrapped": {
            "cryptoKey": "string",
            "wrappedKey": "string"
          }
        },
        "keepExtensions": {}
      },
      "profileType": "PROFILE_TYPE_UNSPECIFIED"
    },
    "image": {
      "additionalInfoTypes": [
        "string"
      ],
      "excludeInfoTypes": [
        "string"
      ],
      "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
    },
    "operationMetadata": {
      "fhirOutput": {
        "fhirStore": "string"
      }
    },
    "text": {
      "additionalTransformations": [
        {
          "characterMaskConfig": {
            "maskingCharacter": "string"
          },
          "cryptoHashConfig": {
            "cryptoKey": "string",
            "kmsWrapped": {
              "cryptoKey": "string",
              "wrappedKey": "string"
            }
          },
          "dateShiftConfig": {
            "cryptoKey": "string",
            "kmsWrapped": {
              "cryptoKey": "string",
              "wrappedKey": "string"
            }
          },
          "infoTypes": [
            "string"
          ],
          "redactConfig": {},
          "replaceWithInfoTypeConfig": {}
        }
      ],
      "excludeInfoTypes": [
        "string"
      ],
      "profileType": "PROFILE_TYPE_UNSPECIFIED",
      "transformations": [
        {
          "characterMaskConfig": {
            "maskingCharacter": "string"
          },
          "cryptoHashConfig": {
            "cryptoKey": "string",
            "kmsWrapped": {
              "cryptoKey": "string",
              "wrappedKey": "string"
            }
          },
          "dateShiftConfig": {
            "cryptoKey": "string",
            "kmsWrapped": {
              "cryptoKey": "string",
              "wrappedKey": "string"
            }
          },
          "infoTypes": [
            "string"
          ],
          "redactConfig": {},
          "replaceWithInfoTypeConfig": {}
        }
      ]
    }
  },
  "destinationStore": "string",
  "gcsConfigUri": "string",
  "resourceFilter": {
    "resources": {
      "resources": [
        "string"
      ]
    }
  },
  "skipModifiedResources": true
}
```

Creates a new FHIR store with sensitive information de-identified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[DeidentifyConfig](#schemadeidentifyconfig)|false|none|Deidentify configuration. Only one of `config` and `gcs_config_uri` can be specified.|
|destinationStore|string|false|none|The name of the FHIR store to create and write the redacted data to. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`. * The destination dataset must exist. * The source dataset and destination dataset must both reside in the same location. De-identifying data across multiple locations is not supported. * The destination FHIR store must exist. * The caller must have the healthcare.fhirResources.update permission to write to the destination FHIR store.|
|gcsConfigUri|string|false|none|Cloud Storage location to read the JSON cloud.healthcare.deidentify.DeidentifyConfig from, overriding the default config. Must be of the form `gs://{bucket_id}/path/to/object`. The Cloud Storage location must grant the Cloud IAM role `roles/storage.objectViewer` to the project's Cloud Healthcare Service Agent service account. Only one of `config` and `gcs_config_uri` can be specified.|
|resourceFilter|[FhirFilter](#schemafhirfilter)|false|none|A filter specifying the resources to include in the output. If not specified, all resources are included in the output.|
|skipModifiedResources|boolean|false|none|If true, skips resources that are created or modified after the de-identify operation is created.|

<h2 id="tocS_DeidentifyOperationMetadata">DeidentifyOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadeidentifyoperationmetadata"></a>
<a id="schema_DeidentifyOperationMetadata"></a>
<a id="tocSdeidentifyoperationmetadata"></a>
<a id="tocsdeidentifyoperationmetadata"></a>

```json
{
  "fhirOutput": {
    "fhirStore": "string"
  }
}
```

Details about the work the de-identify operation performed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fhirOutput|[FhirOutput](#schemafhiroutput)|false|none|Details about the FHIR store to write the output to.|

<h2 id="tocS_DeidentifySummary">DeidentifySummary</h2>
<!-- backwards compatibility -->
<a id="schemadeidentifysummary"></a>
<a id="schema_DeidentifySummary"></a>
<a id="tocSdeidentifysummary"></a>
<a id="tocsdeidentifysummary"></a>

```json
{}
```

Contains a detailed summary of the Deidentify operation.

<h2 id="tocS_DeleteTag">DeleteTag</h2>
<!-- backwards compatibility -->
<a id="schemadeletetag"></a>
<a id="schema_DeleteTag"></a>
<a id="tocSdeletetag"></a>
<a id="tocsdeletetag"></a>

```json
{}
```

Delete tag.

<h2 id="tocS_Detail">Detail</h2>
<!-- backwards compatibility -->
<a id="schemadetail"></a>
<a id="schema_Detail"></a>
<a id="tocSdetail"></a>
<a id="tocsdetail"></a>

```json
{
  "findings": [
    {
      "end": "string",
      "infoType": "string",
      "quote": "string",
      "start": "string"
    }
  ]
}
```

Contains multiple sensitive information findings for each resource slice.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|findings|[[Finding](#schemafinding)]|false|none|none|

<h2 id="tocS_DicomConfig">DicomConfig</h2>
<!-- backwards compatibility -->
<a id="schemadicomconfig"></a>
<a id="schema_DicomConfig"></a>
<a id="tocSdicomconfig"></a>
<a id="tocsdicomconfig"></a>

```json
{
  "filterProfile": "TAG_FILTER_PROFILE_UNSPECIFIED",
  "keepList": {
    "tags": [
      "string"
    ]
  },
  "removeList": {
    "tags": [
      "string"
    ]
  },
  "skipIdRedaction": true
}
```

Specifies the parameters needed for de-identification of DICOM stores.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterProfile|string|false|none|Tag filtering profile that determines which tags to keep/remove.|
|keepList|[TagFilterList](#schematagfilterlist)|false|none|List of tags to keep. Remove all other tags.|
|removeList|[TagFilterList](#schematagfilterlist)|false|none|List of tags to remove. Keep all other tags.|
|skipIdRedaction|boolean|false|none|If true, skip replacing StudyInstanceUID, SeriesInstanceUID, SOPInstanceUID, and MediaStorageSOPInstanceUID and leave them untouched. The Cloud Healthcare API regenerates these UIDs by default based on the DICOM Standard's reasoning: "Whilst these UIDs cannot be mapped directly to an individual out of context, given access to the original images, or to a database of the original images containing the UIDs, it would be possible to recover the individual's identity." http://dicom.nema.org/medical/dicom/current/output/chtml/part15/sect_E.3.9.html|

#### Enumerated Values

|Property|Value|
|---|---|
|filterProfile|TAG_FILTER_PROFILE_UNSPECIFIED|
|filterProfile|MINIMAL_KEEP_LIST_PROFILE|
|filterProfile|ATTRIBUTE_CONFIDENTIALITY_BASIC_PROFILE|
|filterProfile|KEEP_ALL_PROFILE|
|filterProfile|DEIDENTIFY_TAG_CONTENTS|

<h2 id="tocS_DicomFilterConfig">DicomFilterConfig</h2>
<!-- backwards compatibility -->
<a id="schemadicomfilterconfig"></a>
<a id="schema_DicomFilterConfig"></a>
<a id="tocSdicomfilterconfig"></a>
<a id="tocsdicomfilterconfig"></a>

```json
{
  "resourcePathsGcsUri": "string"
}
```

Specifies the filter configuration for DICOM resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourcePathsGcsUri|string|false|none|The Cloud Storage location of the filter configuration file. The `gcs_uri` must be in the format `gs://bucket/path/to/object`. The filter configuration file must contain a list of resource paths separated by newline characters (\n or \r\n). Each resource path must be in the format "/studies/{studyUID}[/series/{seriesUID}[/instances/{instanceUID}]]" The Cloud Healthcare API service account must have the `roles/storage.objectViewer` Cloud IAM role for this Cloud Storage location.|

<h2 id="tocS_DicomStore">DicomStore</h2>
<!-- backwards compatibility -->
<a id="schemadicomstore"></a>
<a id="schema_DicomStore"></a>
<a id="tocSdicomstore"></a>
<a id="tocsdicomstore"></a>

```json
{
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "notificationConfig": {
    "pubsubTopic": "string",
    "sendForBulkImport": true
  },
  "streamConfigs": [
    {
      "bigqueryDestination": {
        "force": true,
        "tableUri": "string",
        "writeDisposition": "WRITE_DISPOSITION_UNSPECIFIED"
      }
    }
  ]
}
```

Represents a DICOM store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|object|false|none|User-supplied key-value pairs used to organize DICOM stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62} Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63} No more than 64 labels can be associated with a given store.|
|name|string|false|none|Resource name of the DICOM store, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.|
|notificationConfig|[NotificationConfig](#schemanotificationconfig)|false|none|Notification destination for new DICOM instances. Supplied by the client.|
|streamConfigs|[[GoogleCloudHealthcareV1beta1DicomStreamConfig](#schemagooglecloudhealthcarev1beta1dicomstreamconfig)]|false|none|A list of streaming configs used to configure the destination of streaming exports for every DICOM instance insertion in this DICOM store. After a new config is added to `stream_configs`, DICOM instance insertions are streamed to the new destination. When a config is removed from `stream_configs`, the server stops streaming to that destination. Each config must contain a unique destination.|

<h2 id="tocS_DicomTagConfig">DicomTagConfig</h2>
<!-- backwards compatibility -->
<a id="schemadicomtagconfig"></a>
<a id="schema_DicomTagConfig"></a>
<a id="tocSdicomtagconfig"></a>
<a id="tocsdicomtagconfig"></a>

```json
{
  "actions": [
    {
      "cleanImageTag": {
        "additionalInfoTypes": [
          "string"
        ],
        "excludeInfoTypes": [
          "string"
        ],
        "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
      },
      "cleanTextTag": {},
      "deleteTag": {},
      "keepTag": {},
      "queries": [
        "string"
      ],
      "recurseTag": {},
      "regenUidTag": {},
      "removeTag": {},
      "resetTag": {}
    }
  ],
  "options": {
    "cleanDescriptors": {},
    "cleanImage": {
      "additionalInfoTypes": [
        "string"
      ],
      "excludeInfoTypes": [
        "string"
      ],
      "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
    },
    "primaryIds": "PRIMARY_IDS_OPTION_UNSPECIFIED"
  },
  "profileType": "PROFILE_TYPE_UNSPECIFIED"
}
```

Specifies the parameters needed for the de-identification of DICOM stores.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[[Action](#schemaaction)]|false|none|Specifies custom tag selections and `Actions` to apply to them. Overrides `options` and `profile`. Conflicting `Actions` are applied in the order given.|
|options|[Options](#schemaoptions)|false|none|Specifies additional options to apply, overriding the base `profile`.|
|profileType|string|false|none|Base profile type for handling DICOM tags.|

#### Enumerated Values

|Property|Value|
|---|---|
|profileType|PROFILE_TYPE_UNSPECIFIED|
|profileType|MINIMAL_KEEP_LIST_PROFILE|
|profileType|ATTRIBUTE_CONFIDENTIALITY_BASIC_PROFILE|
|profileType|KEEP_ALL_PROFILE|
|profileType|DEIDENTIFY_TAG_CONTENTS|

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

<h2 id="tocS_Entity">Entity</h2>
<!-- backwards compatibility -->
<a id="schemaentity"></a>
<a id="schema_Entity"></a>
<a id="tocSentity"></a>
<a id="tocsentity"></a>

```json
{
  "entityId": "string",
  "preferredTerm": "string",
  "vocabularyCodes": [
    "string"
  ]
}
```

The candidate entities that an entity mention could link to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entityId|string|false|none|entity_id is a first class field entity_id uniquely identifies this concept and its meta-vocabulary. For example, "UMLS/C0000970".|
|preferredTerm|string|false|none|preferred_term is the preferred term for this concept. For example, "Acetaminophen". For ad hoc entities formed by normalization, this is the most popular unnormalized string.|
|vocabularyCodes|[string]|false|none|Vocabulary codes are first-class fields and differentiated from the concept unique identifier (entity_id). vocabulary_codes contains the representation of this concept in particular vocabularies, such as ICD-10, SNOMED-CT and RxNORM. These are prefixed by the name of the vocabulary, followed by the unique code within that vocabulary. For example, "RXNORM/A10334543".|

<h2 id="tocS_EntityMention">EntityMention</h2>
<!-- backwards compatibility -->
<a id="schemaentitymention"></a>
<a id="schema_EntityMention"></a>
<a id="tocSentitymention"></a>
<a id="tocsentitymention"></a>

```json
{
  "certaintyAssessment": {
    "confidence": 0,
    "value": "string"
  },
  "confidence": 0,
  "linkedEntities": [
    {
      "entityId": "string"
    }
  ],
  "mentionId": "string",
  "subject": {
    "confidence": 0,
    "value": "string"
  },
  "temporalAssessment": {
    "confidence": 0,
    "value": "string"
  },
  "text": {
    "beginOffset": 0,
    "content": "string"
  },
  "type": "string"
}
```

An entity mention in the document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certaintyAssessment|[Feature](#schemafeature)|false|none|The certainty assessment of the entity mention. Its value is one of: LIKELY, SOMEWHAT_LIKELY, UNCERTAIN, SOMEWHAT_UNLIKELY, UNLIKELY, CONDITIONAL|
|confidence|number(double)|false|none|The model's confidence in this entity mention annotation. A number between 0 and 1.|
|linkedEntities|[[LinkedEntity](#schemalinkedentity)]|false|none|linked_entities are candidate ontological concepts that this entity mention may refer to. They are sorted by decreasing confidence.|
|mentionId|string|false|none|mention_id uniquely identifies each entity mention in a single response.|
|subject|[Feature](#schemafeature)|false|none|The subject this entity mention relates to. Its value is one of: PATIENT, FAMILY_MEMBER, OTHER|
|temporalAssessment|[Feature](#schemafeature)|false|none|How this entity mention relates to the subject temporally. Its value is one of: CURRENT, CLINICAL_HISTORY, FAMILY_HISTORY, UPCOMING, ALLERGY|
|text|[TextSpan](#schematextspan)|false|none|text is the location of the entity mention in the document.|
|type|string|false|none|The semantic type of the entity: UNKNOWN_ENTITY_TYPE, ALONE, ANATOMICAL_STRUCTURE, ASSISTED_LIVING, BF_RESULT, BM_RESULT, BM_UNIT, BM_VALUE, BODY_FUNCTION, BODY_MEASUREMENT, COMPLIANT, DOESNOT_FOLLOWUP, FAMILY, FOLLOWSUP, LABORATORY_DATA, LAB_RESULT, LAB_UNIT, LAB_VALUE, MEDICAL_DEVICE, MEDICINE, MED_DOSE, MED_DURATION, MED_FORM, MED_FREQUENCY, MED_ROUTE, MED_STATUS, MED_STRENGTH, MED_TOTALDOSE, MED_UNIT, NON_COMPLIANT, OTHER_LIVINGSTATUS, PROBLEM, PROCEDURE, PROCEDURE_RESULT, PROC_METHOD, REASON_FOR_NONCOMPLIANCE, SEVERITY, SUBSTANCE_ABUSE, UNCLEAR_FOLLOWUP.|

<h2 id="tocS_EntityMentionRelationship">EntityMentionRelationship</h2>
<!-- backwards compatibility -->
<a id="schemaentitymentionrelationship"></a>
<a id="schema_EntityMentionRelationship"></a>
<a id="tocSentitymentionrelationship"></a>
<a id="tocsentitymentionrelationship"></a>

```json
{
  "confidence": 0,
  "objectId": "string",
  "subjectId": "string"
}
```

Defines directed relationship from one entity mention to another.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(double)|false|none|The model's confidence in this annotation. A number between 0 and 1.|
|objectId|string|false|none|object_id is the id of the object entity mention.|
|subjectId|string|false|none|subject_id is the id of the subject entity mention.|

<h2 id="tocS_EvaluateAnnotationStoreRequest">EvaluateAnnotationStoreRequest</h2>
<!-- backwards compatibility -->
<a id="schemaevaluateannotationstorerequest"></a>
<a id="schema_EvaluateAnnotationStoreRequest"></a>
<a id="tocSevaluateannotationstorerequest"></a>
<a id="tocsevaluateannotationstorerequest"></a>

```json
{
  "bigqueryDestination": {
    "force": true,
    "schemaType": "SCHEMA_TYPE_UNSPECIFIED",
    "tableUri": "string",
    "writeDisposition": "WRITE_DISPOSITION_UNSPECIFIED"
  },
  "evalInfoTypeMapping": {
    "property1": "string",
    "property2": "string"
  },
  "goldenInfoTypeMapping": {
    "property1": "string",
    "property2": "string"
  },
  "goldenStore": "string",
  "infoTypeConfig": {
    "evaluateList": {
      "infoTypes": [
        "string"
      ]
    },
    "ignoreList": {
      "infoTypes": [
        "string"
      ]
    },
    "strictMatching": true
  }
}
```

Request to evaluate an Annotation store against a ground truth [Annotation store].

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigqueryDestination|[GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination](#schemagooglecloudhealthcarev1beta1annotationbigquerydestination)|false|none|The BigQuery table where the server writes the output. BigQueryDestination requires the `roles/bigquery.dataEditor` and `roles/bigquery.jobUser` Cloud IAM roles.|
|evalInfoTypeMapping|object|false|none|Optional. InfoType mapping for `eval_store`. Different resources can map to the same infoType. For example, `PERSON_NAME`, `PERSON`, `NAME`, and `HUMAN` are different. To map all of these into a single infoType (such as `PERSON_NAME`), specify the following mapping: ``` info_type_mapping["PERSON"] = "PERSON_NAME" info_type_mapping["NAME"] = "PERSON_NAME" info_type_mapping["HUMAN"] = "PERSON_NAME" ``` Unmentioned infoTypes, such as `DATE`, are treated as identity mapping. For example: ``` info_type_mapping["DATE"] = "DATE" ``` InfoTypes are case-insensitive.|
|goldenInfoTypeMapping|object|false|none|Optional. Similar to `eval_info_type_mapping`, infoType mapping for `golden_store`.|
|goldenStore|string|false|none|The Annotation store to use as ground truth, in the format of `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/annotationStores/{annotation_store_id}`.|
|infoTypeConfig|[InfoTypeConfig](#schemainfotypeconfig)|false|none|Specifies how to use infoTypes for evaluation. For example, a user might only want to evaluate `PERSON`, `LOCATION`, and `AGE`.|

<h2 id="tocS_EvaluateAnnotationStoreResponse">EvaluateAnnotationStoreResponse</h2>
<!-- backwards compatibility -->
<a id="schemaevaluateannotationstoreresponse"></a>
<a id="schema_EvaluateAnnotationStoreResponse"></a>
<a id="tocSevaluateannotationstoreresponse"></a>
<a id="tocsevaluateannotationstoreresponse"></a>

```json
{}
```

Response for successful Annotation store evaluation operations. This structure is included in the response upon operation completion.

<h2 id="tocS_EvaluateUserConsentsRequest">EvaluateUserConsentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaevaluateuserconsentsrequest"></a>
<a id="schema_EvaluateUserConsentsRequest"></a>
<a id="tocSevaluateuserconsentsrequest"></a>
<a id="tocsevaluateuserconsentsrequest"></a>

```json
{
  "consentList": {
    "consents": [
      "string"
    ]
  },
  "pageSize": 0,
  "pageToken": "string",
  "requestAttributes": {
    "property1": "string",
    "property2": "string"
  },
  "resourceAttributes": {
    "property1": "string",
    "property2": "string"
  },
  "responseView": "RESPONSE_VIEW_UNSPECIFIED",
  "userId": "string"
}
```

Evaluate a user's Consents for all matching User data mappings. Note: User data mappings are indexed asynchronously, causing slight delays between the time mappings are created or updated and when they are included in EvaluateUserConsents results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consentList|[ConsentList](#schemaconsentlist)|false|none|Optional. Specific Consents to evaluate the access request against. These Consents must have the same `user_id` as the User data mappings being evalauted, must exist in the current `consent_store`, and must have a `state` of either `ACTIVE` or `DRAFT`. A maximum of 100 Consents can be provided here. If unspecified, all `ACTIVE` unexpired Consents in the current `consent_store` will be evaluated.|
|pageSize|integer(int32)|false|none|Optional. Limit on the number of User data mappings to return in a single response. If not specified, 100 is used. May not be larger than 1000.|
|pageToken|string|false|none|Optional. Token to retrieve the next page of results, or empty to get the first page.|
|requestAttributes|object|false|none|Required. The values of request attributes associated with this access request.|
|resourceAttributes|object|false|none|Optional. The values of resource attributes associated with the resources being requested. If no values are specified, then all resources are queried.|
|responseView|string|false|none|Optional. The view for EvaluateUserConsentsResponse. If unspecified, defaults to `BASIC` and returns `consented` as `TRUE` or `FALSE`.|
|userId|string|false|none|Required. User ID to evaluate consents for.|

#### Enumerated Values

|Property|Value|
|---|---|
|responseView|RESPONSE_VIEW_UNSPECIFIED|
|responseView|BASIC|
|responseView|FULL|

<h2 id="tocS_EvaluateUserConsentsResponse">EvaluateUserConsentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaevaluateuserconsentsresponse"></a>
<a id="schema_EvaluateUserConsentsResponse"></a>
<a id="tocSevaluateuserconsentsresponse"></a>
<a id="tocsevaluateuserconsentsresponse"></a>

```json
{
  "nextPageToken": "string",
  "results": [
    {
      "consentDetails": {
        "property1": {
          "evaluationResult": "EVALUATION_RESULT_UNSPECIFIED"
        },
        "property2": {
          "evaluationResult": "EVALUATION_RESULT_UNSPECIFIED"
        }
      },
      "consented": true,
      "dataId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list. This token is valid for 72 hours after it is created.|
|results|[[Result](#schemaresult)]|false|none|The consent evaluation result for each `data_id`.|

<h2 id="tocS_ExportAnnotationsRequest">ExportAnnotationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexportannotationsrequest"></a>
<a id="schema_ExportAnnotationsRequest"></a>
<a id="tocSexportannotationsrequest"></a>
<a id="tocsexportannotationsrequest"></a>

```json
{
  "bigqueryDestination": {
    "force": true,
    "schemaType": "SCHEMA_TYPE_UNSPECIFIED",
    "tableUri": "string",
    "writeDisposition": "WRITE_DISPOSITION_UNSPECIFIED"
  },
  "gcsDestination": {
    "uriPrefix": "string"
  }
}
```

Request to export Annotations. The export operation is not atomic. If a failure occurs, any annotations already exported are not removed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigqueryDestination|[GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination](#schemagooglecloudhealthcarev1beta1annotationbigquerydestination)|false|none|The BigQuery output destination, which requires two IAM roles: `roles/bigquery.dataEditor` and `roles/bigquery.jobUser`.|
|gcsDestination|[GoogleCloudHealthcareV1beta1AnnotationGcsDestination](#schemagooglecloudhealthcarev1beta1annotationgcsdestination)|false|none|The Cloud Storage destination, which requires the `roles/storage.objectAdmin` Cloud IAM role.|

<h2 id="tocS_ExportAnnotationsResponse">ExportAnnotationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexportannotationsresponse"></a>
<a id="schema_ExportAnnotationsResponse"></a>
<a id="tocSexportannotationsresponse"></a>
<a id="tocsexportannotationsresponse"></a>

```json
{}
```

Response for successful annotation export operations. This structure is included in response upon operation completion.

<h2 id="tocS_ExportDicomDataRequest">ExportDicomDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexportdicomdatarequest"></a>
<a id="schema_ExportDicomDataRequest"></a>
<a id="tocSexportdicomdatarequest"></a>
<a id="tocsexportdicomdatarequest"></a>

```json
{
  "bigqueryDestination": {
    "force": true,
    "tableUri": "string",
    "writeDisposition": "WRITE_DISPOSITION_UNSPECIFIED"
  },
  "filterConfig": {
    "resourcePathsGcsUri": "string"
  },
  "gcsDestination": {
    "mimeType": "string",
    "uriPrefix": "string"
  }
}
```

Exports data from the specified DICOM store. If a given resource, such as a DICOM object with the same SOPInstance UID, already exists in the output, it is overwritten with the version in the source dataset. Exported DICOM data persists when the DICOM store from which it was exported is deleted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigqueryDestination|[GoogleCloudHealthcareV1beta1DicomBigQueryDestination](#schemagooglecloudhealthcarev1beta1dicombigquerydestination)|false|none|The BigQuery output destination. You can only export to a BigQuery dataset that's in the same project as the DICOM store you're exporting from. The Cloud Healthcare Service Agent requires two IAM roles on the BigQuery location: `roles/bigquery.dataEditor` and `roles/bigquery.jobUser`.|
|filterConfig|[DicomFilterConfig](#schemadicomfilterconfig)|false|none|Specifies the filter configuration.|
|gcsDestination|[GoogleCloudHealthcareV1beta1DicomGcsDestination](#schemagooglecloudhealthcarev1beta1dicomgcsdestination)|false|none|The Cloud Storage output destination. The Cloud Healthcare Service Agent requires the `roles/storage.objectAdmin` Cloud IAM roles on the Cloud Storage location.|

<h2 id="tocS_ExportDicomDataResponse">ExportDicomDataResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexportdicomdataresponse"></a>
<a id="schema_ExportDicomDataResponse"></a>
<a id="tocSexportdicomdataresponse"></a>
<a id="tocsexportdicomdataresponse"></a>

```json
{}
```

Returns additional information in regards to a completed DICOM store export.

<h2 id="tocS_ExportMessagesRequest">ExportMessagesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexportmessagesrequest"></a>
<a id="schema_ExportMessagesRequest"></a>
<a id="tocSexportmessagesrequest"></a>
<a id="tocsexportmessagesrequest"></a>

```json
{
  "endTime": "string",
  "gcsDestination": {
    "contentStructure": "CONTENT_STRUCTURE_UNSPECIFIED",
    "messageView": "MESSAGE_VIEW_UNSPECIFIED",
    "uriPrefix": "string"
  },
  "startTime": "string"
}
```

Request to schedule an export.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|The end of the range in `send_time` (MSH.7, https://www.hl7.org/documentcenter/public_temp_2E58C1F9-1C23-BA17-0C6126475344DA9D/wg/conf/HL7MSH.htm) to process. If not specified, the time when the export is scheduled is used. This value has to come after the `start_time` defined below. Only messages whose `send_time` lies in the range `start_time` (inclusive) to `end_time` (exclusive) are exported.|
|gcsDestination|[GcsDestination](#schemagcsdestination)|false|none|Exports to a Cloud Storage destination.|
|startTime|string(google-datetime)|false|none|The start of the range in `send_time` (MSH.7, https://www.hl7.org/documentcenter/public_temp_2E58C1F9-1C23-BA17-0C6126475344DA9D/wg/conf/HL7MSH.htm) to process. If not specified, the UNIX epoch (1970-01-01T00:00:00Z) is used. This value has to come before the `end_time` defined below. Only messages whose `send_time` lies in the range `start_time` (inclusive) to `end_time` (exclusive) are exported.|

<h2 id="tocS_ExportMessagesResponse">ExportMessagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexportmessagesresponse"></a>
<a id="schema_ExportMessagesResponse"></a>
<a id="tocSexportmessagesresponse"></a>
<a id="tocsexportmessagesresponse"></a>

```json
{}
```

Final response for the export operation. This structure is included in the response to describe the detailed outcome.

<h2 id="tocS_ExportResourcesRequest">ExportResourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexportresourcesrequest"></a>
<a id="schema_ExportResourcesRequest"></a>
<a id="tocSexportresourcesrequest"></a>
<a id="tocsexportresourcesrequest"></a>

```json
{
  "_since": "string",
  "_type": "string",
  "bigqueryDestination": {
    "datasetUri": "string",
    "force": true,
    "schemaConfig": {
      "lastUpdatedPartitionConfig": {
        "expirationMs": "string",
        "type": "PARTITION_TYPE_UNSPECIFIED"
      },
      "recursiveStructureDepth": "string",
      "schemaType": "SCHEMA_TYPE_UNSPECIFIED"
    },
    "writeDisposition": "WRITE_DISPOSITION_UNSPECIFIED"
  },
  "gcsDestination": {
    "uriPrefix": "string"
  }
}
```

Request to export resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_since|string|false|none|If provided, only resources updated after this time are exported. The time uses the format YYYY-MM-DDThh:mm:ss.sss+zz:zz. For example, `2015-02-07T13:28:17.239+02:00` or `2017-01-01T00:00:00Z`. The time must be specified to the second and include a time zone.|
|_type|string|false|none|String of comma-delimited FHIR resource types. If provided, only resources of the specified resource type(s) are exported.|
|bigqueryDestination|[GoogleCloudHealthcareV1beta1FhirBigQueryDestination](#schemagooglecloudhealthcarev1beta1fhirbigquerydestination)|false|none|The BigQuery output destination. The Cloud Healthcare Service Agent requires two IAM roles on the BigQuery location: `roles/bigquery.dataEditor` and `roles/bigquery.jobUser`. The output is one BigQuery table per resource type. Unlike when setting `BigQueryDestination` for `StreamConfig`, `ExportResources` does not create BigQuery views.|
|gcsDestination|[GoogleCloudHealthcareV1beta1FhirGcsDestination](#schemagooglecloudhealthcarev1beta1fhirgcsdestination)|false|none|The Cloud Storage output destination. The Cloud Healthcare Service Agent requires the `roles/storage.objectAdmin` Cloud IAM roles on the Cloud Storage location. The exported outputs are organized by FHIR resource types. The server creates one object per resource type. Each object contains newline delimited JSON, and each line is a FHIR resource.|

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

<h2 id="tocS_Feature">Feature</h2>
<!-- backwards compatibility -->
<a id="schemafeature"></a>
<a id="schema_Feature"></a>
<a id="tocSfeature"></a>
<a id="tocsfeature"></a>

```json
{
  "confidence": 0,
  "value": "string"
}
```

A feature of an entity mention.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(double)|false|none|The model's confidence in this feature annotation. A number between 0 and 1.|
|value|string|false|none|The value of this feature annotation. Its range depends on the type of the feature.|

<h2 id="tocS_FhirConfig">FhirConfig</h2>
<!-- backwards compatibility -->
<a id="schemafhirconfig"></a>
<a id="schema_FhirConfig"></a>
<a id="tocSfhirconfig"></a>
<a id="tocsfhirconfig"></a>

```json
{
  "defaultKeepExtensions": true,
  "fieldMetadataList": [
    {
      "action": "ACTION_UNSPECIFIED",
      "paths": [
        "string"
      ]
    }
  ]
}
```

Specifies how to handle de-identification of a FHIR store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultKeepExtensions|boolean|false|none|The behaviour for handling FHIR extensions that aren't otherwise specified for de-identification. If true, all extensions are preserved during de-identification by default. If false or unspecified, all extensions are removed during de-identification by default.|
|fieldMetadataList|[[FieldMetadata](#schemafieldmetadata)]|false|none|Specifies FHIR paths to match and how to transform them. Any field that is not matched by a FieldMetadata is passed through to the output dataset unmodified. All extensions will be processed according to `default_keep_extensions`. If a field can be matched by more than one FieldMetadata, the first FieldMetadata.Action is applied.|

<h2 id="tocS_FhirFieldConfig">FhirFieldConfig</h2>
<!-- backwards compatibility -->
<a id="schemafhirfieldconfig"></a>
<a id="schema_FhirFieldConfig"></a>
<a id="tocSfhirfieldconfig"></a>
<a id="tocsfhirfieldconfig"></a>

```json
{
  "fieldMetadataList": [
    {
      "characterMaskField": {},
      "cleanTextField": {},
      "cryptoHashField": {},
      "dateShiftField": {},
      "keepField": {},
      "paths": [
        "string"
      ],
      "removeField": {}
    }
  ],
  "options": {
    "characterMaskConfig": {
      "maskingCharacter": "string"
    },
    "contextualDeid": {},
    "cryptoHashConfig": {
      "cryptoKey": "string",
      "kmsWrapped": {
        "cryptoKey": "string",
        "wrappedKey": "string"
      }
    },
    "dateShiftConfig": {
      "cryptoKey": "string",
      "kmsWrapped": {
        "cryptoKey": "string",
        "wrappedKey": "string"
      }
    },
    "keepExtensions": {}
  },
  "profileType": "PROFILE_TYPE_UNSPECIFIED"
}
```

Specifies how to handle the de-identification of a FHIR store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldMetadataList|[[GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata](#schemagooglecloudhealthcarev1beta1deidentifyfieldmetadata)]|false|none|Specifies FHIR paths to match and how to transform them. Any field that is not matched by a `FieldMetadata` is passed through to the output dataset unmodified. All extensions will be processed according to `keep_extensions`. If a field can be matched by more than one `FieldMetadata`, the first `FieldMetadata.Action` is applied. Overrides `options` and `profile`.|
|options|[GoogleCloudHealthcareV1beta1DeidentifyOptions](#schemagooglecloudhealthcarev1beta1deidentifyoptions)|false|none|Specifies additional options, overriding the base `profile`.|
|profileType|string|false|none|Base profile type for handling FHIR fields.|

#### Enumerated Values

|Property|Value|
|---|---|
|profileType|PROFILE_TYPE_UNSPECIFIED|
|profileType|KEEP_ALL|
|profileType|BASIC|
|profileType|CLEAN_ALL|

<h2 id="tocS_FhirFilter">FhirFilter</h2>
<!-- backwards compatibility -->
<a id="schemafhirfilter"></a>
<a id="schema_FhirFilter"></a>
<a id="tocSfhirfilter"></a>
<a id="tocsfhirfilter"></a>

```json
{
  "resources": {
    "resources": [
      "string"
    ]
  }
}
```

Filter configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resources|[Resources](#schemaresources)|false|none|List of resources to include in the output. If this list is empty or not specified, all resources are included in the output.|

<h2 id="tocS_FhirNotificationConfig">FhirNotificationConfig</h2>
<!-- backwards compatibility -->
<a id="schemafhirnotificationconfig"></a>
<a id="schema_FhirNotificationConfig"></a>
<a id="tocSfhirnotificationconfig"></a>
<a id="tocsfhirnotificationconfig"></a>

```json
{
  "pubsubTopic": "string",
  "sendFullResource": true
}
```

Contains the configuration for FHIR notifications.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pubsubTopic|string|false|none|The [Pub/Sub](https://cloud.google.com/pubsub/docs/) topic that notifications of changes are published on. Supplied by the client. The notification is a `PubsubMessage` with the following fields: * `PubsubMessage.Data` contains the resource name. * `PubsubMessage.MessageId` is the ID of this notification. It is guaranteed to be unique within the topic. * `PubsubMessage.PublishTime` is the time when the message was published. Note that notifications are only sent if the topic is non-empty. [Topic names](https://cloud.google.com/pubsub/docs/overview#names) must be scoped to a project. The Cloud Healthcare API service account, service-@gcp-sa-healthcare.iam.gserviceaccount.com, must have publisher permissions on the given Pub/Sub topic. Not having adequate permissions causes the calls that send notifications to fail (https://cloud.google.com/healthcare-api/docs/permissions-healthcare-api-gcp-products#dicom_fhir_and_hl7v2_store_cloud_pubsub_permissions). If a notification can't be published to Pub/Sub, errors are logged to Cloud Logging. For more information, see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare-api/docs/how-tos/logging).|
|sendFullResource|boolean|false|none|Whether to send full FHIR resource to this Pub/Sub topic for Create and Update operation. Note that setting this to true does not guarantee that all resources will be sent in the format of full FHIR resource. When a resource change is too large or during heavy traffic, only the resource name will be sent. Clients should always check the "payloadType" label from a Pub/Sub message to determine whether it needs to fetch the full resource as a separate operation.|

<h2 id="tocS_FhirOutput">FhirOutput</h2>
<!-- backwards compatibility -->
<a id="schemafhiroutput"></a>
<a id="schema_FhirOutput"></a>
<a id="tocSfhiroutput"></a>
<a id="tocsfhiroutput"></a>

```json
{
  "fhirStore": "string"
}
```

Details about the FHIR store to write the output to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fhirStore|string|false|none|Name of the output FHIR store, which must already exist. You must grant the healthcare.fhirResources.update permission on the destination store to your project's **Cloud Healthcare Service Agent** [service account](https://cloud.google.com/healthcare/docs/how-tos/permissions-healthcare-api-gcp-products#the_cloud_healthcare_service_agent). The destination store must set `enable_update_create` to true. The destination store must use FHIR version R4. Writing these resources will consume FHIR operations quota from the project containing the source data. De-identify operation metadata is only generated for DICOM de-identification operations.|

<h2 id="tocS_FhirStore">FhirStore</h2>
<!-- backwards compatibility -->
<a id="schemafhirstore"></a>
<a id="schema_FhirStore"></a>
<a id="tocSfhirstore"></a>
<a id="tocsfhirstore"></a>

```json
{
  "complexDataTypeReferenceParsing": "COMPLEX_DATA_TYPE_REFERENCE_PARSING_UNSPECIFIED",
  "defaultSearchHandlingStrict": true,
  "disableReferentialIntegrity": true,
  "disableResourceVersioning": true,
  "enableUpdateCreate": true,
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "notificationConfig": {
    "pubsubTopic": "string",
    "sendForBulkImport": true
  },
  "notificationConfigs": [
    {
      "pubsubTopic": "string",
      "sendFullResource": true
    }
  ],
  "searchConfig": {
    "searchParameters": [
      {
        "canonicalUrl": "string",
        "parameter": "string"
      }
    ]
  },
  "streamConfigs": [
    {
      "bigqueryDestination": {
        "datasetUri": "string",
        "force": true,
        "schemaConfig": {
          "lastUpdatedPartitionConfig": {
            "expirationMs": "string",
            "type": "PARTITION_TYPE_UNSPECIFIED"
          },
          "recursiveStructureDepth": "string",
          "schemaType": "SCHEMA_TYPE_UNSPECIFIED"
        },
        "writeDisposition": "WRITE_DISPOSITION_UNSPECIFIED"
      },
      "deidentifiedStoreDestination": {
        "config": {
          "annotation": {
            "annotationStoreName": "string",
            "storeQuote": true
          },
          "dicom": {
            "filterProfile": "TAG_FILTER_PROFILE_UNSPECIFIED",
            "keepList": {
              "tags": [
                "string"
              ]
            },
            "removeList": {
              "tags": [
                "string"
              ]
            },
            "skipIdRedaction": true
          },
          "dicomTagConfig": {
            "actions": [
              {
                "cleanImageTag": {
                  "additionalInfoTypes": [
                    "string"
                  ],
                  "excludeInfoTypes": [
                    "string"
                  ],
                  "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
                },
                "cleanTextTag": {},
                "deleteTag": {},
                "keepTag": {},
                "queries": [
                  "string"
                ],
                "recurseTag": {},
                "regenUidTag": {},
                "removeTag": {},
                "resetTag": {}
              }
            ],
            "options": {
              "cleanDescriptors": {},
              "cleanImage": {
                "additionalInfoTypes": [
                  "string"
                ],
                "excludeInfoTypes": [
                  "string"
                ],
                "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
              },
              "primaryIds": "PRIMARY_IDS_OPTION_UNSPECIFIED"
            },
            "profileType": "PROFILE_TYPE_UNSPECIFIED"
          },
          "fhir": {
            "defaultKeepExtensions": true,
            "fieldMetadataList": [
              {
                "action": "ACTION_UNSPECIFIED",
                "paths": [
                  "string"
                ]
              }
            ]
          },
          "fhirFieldConfig": {
            "fieldMetadataList": [
              {
                "characterMaskField": {},
                "cleanTextField": {},
                "cryptoHashField": {},
                "dateShiftField": {},
                "keepField": {},
                "paths": [
                  "string"
                ],
                "removeField": {}
              }
            ],
            "options": {
              "characterMaskConfig": {
                "maskingCharacter": "string"
              },
              "contextualDeid": {},
              "cryptoHashConfig": {
                "cryptoKey": "string",
                "kmsWrapped": {
                  "cryptoKey": "string",
                  "wrappedKey": "string"
                }
              },
              "dateShiftConfig": {
                "cryptoKey": "string",
                "kmsWrapped": {
                  "cryptoKey": "string",
                  "wrappedKey": "string"
                }
              },
              "keepExtensions": {}
            },
            "profileType": "PROFILE_TYPE_UNSPECIFIED"
          },
          "image": {
            "additionalInfoTypes": [
              "string"
            ],
            "excludeInfoTypes": [
              "string"
            ],
            "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
          },
          "operationMetadata": {
            "fhirOutput": {
              "fhirStore": "string"
            }
          },
          "text": {
            "additionalTransformations": [
              {
                "characterMaskConfig": {
                  "maskingCharacter": "string"
                },
                "cryptoHashConfig": {
                  "cryptoKey": "string",
                  "kmsWrapped": {
                    "cryptoKey": "string",
                    "wrappedKey": "string"
                  }
                },
                "dateShiftConfig": {
                  "cryptoKey": "string",
                  "kmsWrapped": {
                    "cryptoKey": "string",
                    "wrappedKey": "string"
                  }
                },
                "infoTypes": [
                  "string"
                ],
                "redactConfig": {},
                "replaceWithInfoTypeConfig": {}
              }
            ],
            "excludeInfoTypes": [
              "string"
            ],
            "profileType": "PROFILE_TYPE_UNSPECIFIED",
            "transformations": [
              {
                "characterMaskConfig": {
                  "maskingCharacter": "string"
                },
                "cryptoHashConfig": {
                  "cryptoKey": "string",
                  "kmsWrapped": {
                    "cryptoKey": "string",
                    "wrappedKey": "string"
                  }
                },
                "dateShiftConfig": {
                  "cryptoKey": "string",
                  "kmsWrapped": {
                    "cryptoKey": "string",
                    "wrappedKey": "string"
                  }
                },
                "infoTypes": [
                  "string"
                ],
                "redactConfig": {},
                "replaceWithInfoTypeConfig": {}
              }
            ]
          }
        },
        "store": "string"
      },
      "resourceTypes": [
        "string"
      ]
    }
  ],
  "validationConfig": {
    "disableFhirpathValidation": true,
    "disableProfileValidation": true,
    "disableReferenceTypeValidation": true,
    "disableRequiredFieldValidation": true,
    "enabledImplementationGuides": [
      "string"
    ]
  },
  "version": "VERSION_UNSPECIFIED"
}
```

Represents a FHIR store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|complexDataTypeReferenceParsing|string|false|none|Enable parsing of references within complex FHIR data types such as Extensions. If this value is set to ENABLED, then features like referential integrity and Bundle reference rewriting apply to all references. If this flag has not been specified the behavior of the FHIR store will not change, references in complex data types will not be parsed. New stores will have this value set to ENABLED after a notification period. Warning: turning on this flag causes processing existing resources to fail if they contain references to non-existent resources.|
|defaultSearchHandlingStrict|boolean|false|none|If true, overrides the default search behavior for this FHIR store to `handling=strict` which returns an error for unrecognized search parameters. If false, uses the FHIR specification default `handling=lenient` which ignores unrecognized search parameters. The handling can always be changed from the default on an individual API call by setting the HTTP header `Prefer: handling=strict` or `Prefer: handling=lenient`.|
|disableReferentialIntegrity|boolean|false|none|Immutable. Whether to disable referential integrity in this FHIR store. This field is immutable after FHIR store creation. The default value is false, meaning that the API enforces referential integrity and fails the requests that result in inconsistent state in the FHIR store. When this field is set to true, the API skips referential integrity checks. Consequently, operations that rely on references, such as GetPatientEverything, do not return all the results if broken references exist.|
|disableResourceVersioning|boolean|false|none|Immutable. Whether to disable resource versioning for this FHIR store. This field can not be changed after the creation of FHIR store. If set to false, which is the default behavior, all write operations cause historical versions to be recorded automatically. The historical versions can be fetched through the history APIs, but cannot be updated. If set to true, no historical versions are kept. The server sends errors for attempts to read the historical versions.|
|enableUpdateCreate|boolean|false|none|Whether this FHIR store has the [updateCreate capability](https://www.hl7.org/fhir/capabilitystatement-definitions.html#CapabilityStatement.rest.resource.updateCreate). This determines if the client can use an Update operation to create a new resource with a client-specified ID. If false, all IDs are server-assigned through the Create operation and attempts to update a non-existent resource return errors. It is strongly advised not to include or encode any sensitive data such as patient identifiers in client-specified resource IDs. Those IDs are part of the FHIR resource path recorded in Cloud audit logs and Pub/Sub notifications. Those IDs can also be contained in reference fields within other resources.|
|labels|object|false|none|User-supplied key-value pairs used to organize FHIR stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62} Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63} No more than 64 labels can be associated with a given store.|
|name|string|false|none|Output only. Resource name of the FHIR store, of the form `projects/{project_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.|
|notificationConfig|[NotificationConfig](#schemanotificationconfig)|false|none|If non-empty, publish all resource modifications of this FHIR store to this destination. The Pub/Sub message attributes contain a map with a string describing the action that has triggered the notification. For example, "action":"CreateResource". Deprecated. Use `notification_configs` instead.|
|notificationConfigs|[[FhirNotificationConfig](#schemafhirnotificationconfig)]|false|none|Specifies where and whether to send notifications upon changes to a Fhir store.|
|searchConfig|[SearchConfig](#schemasearchconfig)|false|none|Configuration for how FHIR resources can be searched.|
|streamConfigs|[[StreamConfig](#schemastreamconfig)]|false|none|A list of streaming configs that configure the destinations of streaming export for every resource mutation in this FHIR store. Each store is allowed to have up to 10 streaming configs. After a new config is added, the next resource mutation is streamed to the new location in addition to the existing ones. When a location is removed from the list, the server stops streaming to that location. Before adding a new config, you must add the required [`bigquery.dataEditor`](https://cloud.google.com/bigquery/docs/access-control#bigquery.dataEditor) role to your project's **Cloud Healthcare Service Agent** [service account](https://cloud.google.com/iam/docs/service-accounts). Some lag (typically on the order of dozens of seconds) is expected before the results show up in the streaming destination.|
|validationConfig|[ValidationConfig](#schemavalidationconfig)|false|none|Configuration for how to validate incoming FHIR resources against configured profiles.|
|version|string|false|none|Immutable. The FHIR specification version that this FHIR store supports natively. This field is immutable after store creation. Requests are rejected if they contain FHIR resources of a different version. Version is required for every FHIR store.|

#### Enumerated Values

|Property|Value|
|---|---|
|complexDataTypeReferenceParsing|COMPLEX_DATA_TYPE_REFERENCE_PARSING_UNSPECIFIED|
|complexDataTypeReferenceParsing|DISABLED|
|complexDataTypeReferenceParsing|ENABLED|
|version|VERSION_UNSPECIFIED|
|version|DSTU2|
|version|STU3|
|version|R4|

<h2 id="tocS_FhirStoreMetric">FhirStoreMetric</h2>
<!-- backwards compatibility -->
<a id="schemafhirstoremetric"></a>
<a id="schema_FhirStoreMetric"></a>
<a id="tocSfhirstoremetric"></a>
<a id="tocsfhirstoremetric"></a>

```json
{
  "count": "string",
  "resourceType": "string",
  "structuredStorageSizeBytes": "string"
}
```

Count of resources and total storage size by type for a given FHIR store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|string(int64)|false|none|The total count of FHIR resources in the store of this resource type.|
|resourceType|string|false|none|The FHIR resource type this metric applies to.|
|structuredStorageSizeBytes|string(int64)|false|none|The total amount of structured storage used by FHIR resources of this resource type in the store.|

<h2 id="tocS_FhirStoreMetrics">FhirStoreMetrics</h2>
<!-- backwards compatibility -->
<a id="schemafhirstoremetrics"></a>
<a id="schema_FhirStoreMetrics"></a>
<a id="tocSfhirstoremetrics"></a>
<a id="tocsfhirstoremetrics"></a>

```json
{
  "metrics": [
    {
      "count": "string",
      "resourceType": "string",
      "structuredStorageSizeBytes": "string"
    }
  ],
  "name": "string"
}
```

List of metrics for a given FHIR store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metrics|[[FhirStoreMetric](#schemafhirstoremetric)]|false|none|List of FhirStoreMetric by resource type.|
|name|string|false|none|The resource name of the FHIR store to get metrics for, in the format `projects/{project_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.|

<h2 id="tocS_Field">Field</h2>
<!-- backwards compatibility -->
<a id="schemafield"></a>
<a id="schema_Field"></a>
<a id="tocSfield"></a>
<a id="tocsfield"></a>

```json
{
  "maxOccurs": 0,
  "minOccurs": 0,
  "name": "string",
  "table": "string",
  "type": "string"
}
```

A (sub) field of a type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxOccurs|integer(int32)|false|none|The maximum number of times this field can be repeated. 0 or -1 means unbounded.|
|minOccurs|integer(int32)|false|none|The minimum number of times this field must be present/repeated.|
|name|string|false|none|The name of the field. For example, "PID-1" or just "1".|
|table|string|false|none|The HL7v2 table this field refers to. For example, PID-15 (Patient's Primary Language) usually refers to table "0296".|
|type|string|false|none|The type of this field. A Type with this name must be defined in an Hl7TypesConfig.|

<h2 id="tocS_FieldMetadata">FieldMetadata</h2>
<!-- backwards compatibility -->
<a id="schemafieldmetadata"></a>
<a id="schema_FieldMetadata"></a>
<a id="tocSfieldmetadata"></a>
<a id="tocsfieldmetadata"></a>

```json
{
  "action": "ACTION_UNSPECIFIED",
  "paths": [
    "string"
  ]
}
```

Specifies FHIR paths to match, and how to handle de-identification of matching fields.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|Deidentify action for one field.|
|paths|[string]|false|none|List of paths to FHIR fields to redact. Each path is a period-separated list where each component is either a field name or FHIR type name. All types begin with an upper case letter. For example, the resource field "Patient.Address.city", which uses a string type, can be matched by "Patient.Address.String". Path also supports partial matching. For example, "Patient.Address.city" can be matched by "Address.city" (Patient omitted). Partial matching and type matching can be combined. For example, "Patient.Address.city" can be matched by "Address.String". For "choice" types (those defined in the FHIR spec with the form: field[x]), use two separate components. For example, "deceasedAge.unit" is matched by "Deceased.Age.unit". Supported types are: AdministrativeGenderCode, Base64Binary, Boolean, Code, Date, DateTime, Decimal, HumanName, Id, Instant, Integer, LanguageCode, Markdown, Oid, PositiveInt, String, UnsignedInt, Uri, Uuid, Xhtml. The sub-type for HumanName(for example HumanName.given, HumanName.family) can be omitted.|

#### Enumerated Values

|Property|Value|
|---|---|
|action|ACTION_UNSPECIFIED|
|action|TRANSFORM|
|action|INSPECT_AND_TRANSFORM|
|action|DO_NOT_TRANSFORM|

<h2 id="tocS_FilterList">FilterList</h2>
<!-- backwards compatibility -->
<a id="schemafilterlist"></a>
<a id="schema_FilterList"></a>
<a id="tocSfilterlist"></a>
<a id="tocsfilterlist"></a>

```json
{
  "infoTypes": [
    "string"
  ]
}
```

List of infoTypes to be filtered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|infoTypes|[string]|false|none|These infoTypes are based on after the `eval_info_type_mapping` and `golden_info_type_mapping`.|

<h2 id="tocS_Finding">Finding</h2>
<!-- backwards compatibility -->
<a id="schemafinding"></a>
<a id="schema_Finding"></a>
<a id="tocSfinding"></a>
<a id="tocsfinding"></a>

```json
{
  "end": "string",
  "infoType": "string",
  "quote": "string",
  "start": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|string(int64)|false|none|Zero-based ending index of the found text, exclusively.|
|infoType|string|false|none|The type of information stored in this text range. For example, HumanName, BirthDate, or Address.|
|quote|string|false|none|The snippet of the sensitive text. This field is only populated during deidentification if `store_quote` is set to true in DeidentifyConfig.|
|start|string(int64)|false|none|Zero-based starting index of the found text, inclusively.|

<h2 id="tocS_GcsDestination">GcsDestination</h2>
<!-- backwards compatibility -->
<a id="schemagcsdestination"></a>
<a id="schema_GcsDestination"></a>
<a id="tocSgcsdestination"></a>
<a id="tocsgcsdestination"></a>

```json
{
  "contentStructure": "CONTENT_STRUCTURE_UNSPECIFIED",
  "messageView": "MESSAGE_VIEW_UNSPECIFIED",
  "uriPrefix": "string"
}
```

The Cloud Storage output destination. The Cloud Healthcare Service Agent requires the `roles/storage.objectAdmin` Cloud IAM roles on the Cloud Storage location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentStructure|string|false|none|The format of the exported HL7v2 message files.|
|messageView|string|false|none|Specifies the parts of the Message resource to include in the export. If not specified, FULL is used.|
|uriPrefix|string|false|none|URI of an existing Cloud Storage directory where the server writes result files, in the format `gs://{bucket-id}/{path/to/destination/dir}`. If there is no trailing slash, the service appends one when composing the object path.|

#### Enumerated Values

|Property|Value|
|---|---|
|contentStructure|CONTENT_STRUCTURE_UNSPECIFIED|
|contentStructure|MESSAGE_JSON|
|messageView|MESSAGE_VIEW_UNSPECIFIED|
|messageView|RAW_ONLY|
|messageView|PARSED_ONLY|
|messageView|FULL|
|messageView|SCHEMATIZED_ONLY|
|messageView|BASIC|

<h2 id="tocS_GcsSource">GcsSource</h2>
<!-- backwards compatibility -->
<a id="schemagcssource"></a>
<a id="schema_GcsSource"></a>
<a id="tocSgcssource"></a>
<a id="tocsgcssource"></a>

```json
{
  "uri": "string"
}
```

Specifies the configuration for importing data from Cloud Storage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|false|none|Points to a Cloud Storage URI containing file(s) to import. The URI must be in the following format: `gs://{bucket_id}/{object_id}`. The URI can include wildcards in `object_id` and thus identify multiple files. Supported wildcards: * `*` to match 0 or more non-separator characters * `**` to match 0 or more characters (including separators). Must be used at the end of a path and with no other wildcards in the path. Can also be used with a file extension (such as .ndjson), which imports all files with the extension in the specified directory and its sub-directories. For example, `gs://my-bucket/my-directory/**.ndjson` imports all files with `.ndjson` extensions in `my-directory/` and its sub-directories. * `?` to match 1 character Files matching the wildcard are expected to contain content only, no metadata.|

<h2 id="tocS_GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination">GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudhealthcarev1beta1annotationbigquerydestination"></a>
<a id="schema_GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination"></a>
<a id="tocSgooglecloudhealthcarev1beta1annotationbigquerydestination"></a>
<a id="tocsgooglecloudhealthcarev1beta1annotationbigquerydestination"></a>

```json
{
  "force": true,
  "schemaType": "SCHEMA_TYPE_UNSPECIFIED",
  "tableUri": "string",
  "writeDisposition": "WRITE_DISPOSITION_UNSPECIFIED"
}
```

The BigQuery table for export.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|force|boolean|false|none|Use `write_disposition` instead. If `write_disposition` is specified, this parameter is ignored. force=false is equivalent to write_disposition=WRITE_EMPTY and force=true is equivalent to write_disposition=WRITE_TRUNCATE.|
|schemaType|string|false|none|Specifies the schema format to export.|
|tableUri|string|false|none|BigQuery URI to a table, up to 2000 characters long, must be of the form bq://projectId.bqDatasetId.tableId.|
|writeDisposition|string|false|none|Determines if existing data in the destination dataset is overwritten, appended to, or not written if the tables contain data. If a write_disposition is specified, the `force` parameter is ignored.|

#### Enumerated Values

|Property|Value|
|---|---|
|schemaType|SCHEMA_TYPE_UNSPECIFIED|
|schemaType|SIMPLE|
|writeDisposition|WRITE_DISPOSITION_UNSPECIFIED|
|writeDisposition|WRITE_EMPTY|
|writeDisposition|WRITE_TRUNCATE|
|writeDisposition|WRITE_APPEND|

<h2 id="tocS_GoogleCloudHealthcareV1beta1AnnotationGcsDestination">GoogleCloudHealthcareV1beta1AnnotationGcsDestination</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudhealthcarev1beta1annotationgcsdestination"></a>
<a id="schema_GoogleCloudHealthcareV1beta1AnnotationGcsDestination"></a>
<a id="tocSgooglecloudhealthcarev1beta1annotationgcsdestination"></a>
<a id="tocsgooglecloudhealthcarev1beta1annotationgcsdestination"></a>

```json
{
  "uriPrefix": "string"
}
```

The Cloud Storage location for export.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uriPrefix|string|false|none|The Cloud Storage destination to export to. URI for a Cloud Storage directory where the server writes result files, in the format `gs://{bucket-id}/{path/to/destination/dir}`. If there is no trailing slash, the service appends one when composing the object path. The user is responsible for creating the Cloud Storage bucket referenced in `uri_prefix`.|

<h2 id="tocS_GoogleCloudHealthcareV1beta1AnnotationGcsSource">GoogleCloudHealthcareV1beta1AnnotationGcsSource</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudhealthcarev1beta1annotationgcssource"></a>
<a id="schema_GoogleCloudHealthcareV1beta1AnnotationGcsSource"></a>
<a id="tocSgooglecloudhealthcarev1beta1annotationgcssource"></a>
<a id="tocsgooglecloudhealthcarev1beta1annotationgcssource"></a>

```json
{
  "uri": "string"
}
```

Specifies the configuration for importing data from Cloud Storage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|false|none|Points to a Cloud Storage URI containing file(s) with content only. The URI must be in the following format: `gs://{bucket_id}/{object_id}`. The URI can include wildcards in `object_id` and thus identify multiple files. Supported wildcards: '*' to match 0 or more non-separator characters '**' to match 0 or more characters (including separators). Must be used at the end of a path and with no other wildcards in the path. Can also be used with a file extension (such as .dcm), which imports all files with the extension in the specified directory and its sub-directories. For example, `gs://my-bucket/my-directory/**.json` imports all files with .json extensions in `my-directory/` and its sub-directories. '?' to match 1 character All other URI formats are invalid. Files matching the wildcard are expected to contain content only, no metadata.|

<h2 id="tocS_GoogleCloudHealthcareV1beta1ConsentGcsDestination">GoogleCloudHealthcareV1beta1ConsentGcsDestination</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudhealthcarev1beta1consentgcsdestination"></a>
<a id="schema_GoogleCloudHealthcareV1beta1ConsentGcsDestination"></a>
<a id="tocSgooglecloudhealthcarev1beta1consentgcsdestination"></a>
<a id="tocsgooglecloudhealthcarev1beta1consentgcsdestination"></a>

```json
{
  "uriPrefix": "string"
}
```

The Cloud Storage location for export.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uriPrefix|string|false|none|URI for a Cloud Storage directory where the server writes result files, in the format `gs://{bucket-id}/{path/to/destination/dir}`. If there is no trailing slash, the service appends one when composing the object path. The user is responsible for creating the Cloud Storage bucket and directory referenced in `uri_prefix`.|

<h2 id="tocS_GoogleCloudHealthcareV1beta1ConsentPolicy">GoogleCloudHealthcareV1beta1ConsentPolicy</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudhealthcarev1beta1consentpolicy"></a>
<a id="schema_GoogleCloudHealthcareV1beta1ConsentPolicy"></a>
<a id="tocSgooglecloudhealthcarev1beta1consentpolicy"></a>
<a id="tocsgooglecloudhealthcarev1beta1consentpolicy"></a>

```json
{
  "authorizationRule": {
    "description": "string",
    "expression": "string",
    "location": "string",
    "title": "string"
  },
  "resourceAttributes": [
    {
      "attributeDefinitionId": "string",
      "values": [
        "string"
      ]
    }
  ]
}
```

Represents a user's consent in terms of the resources that can be accessed and under what conditions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorizationRule|[Expr](#schemaexpr)|false|none|Required. The request conditions to meet to grant access. In addition to any supported comparison operators, authorization rules may have `IN` operator as well as at most 10 logical operators that are limited to `AND` (`&&`), `OR` (`\|\|`).|
|resourceAttributes|[[Attribute](#schemaattribute)]|false|none|The resources that this policy applies to. A resource is a match if it matches all the attributes listed here. If empty, this policy applies to all User data mappings for the given user.|

<h2 id="tocS_GoogleCloudHealthcareV1beta1DeidentifyDeidentifyDicomStoreSummary">GoogleCloudHealthcareV1beta1DeidentifyDeidentifyDicomStoreSummary</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudhealthcarev1beta1deidentifydeidentifydicomstoresummary"></a>
<a id="schema_GoogleCloudHealthcareV1beta1DeidentifyDeidentifyDicomStoreSummary"></a>
<a id="tocSgooglecloudhealthcarev1beta1deidentifydeidentifydicomstoresummary"></a>
<a id="tocsgooglecloudhealthcarev1beta1deidentifydeidentifydicomstoresummary"></a>

```json
{}
```

Contains a summary of the DeidentifyDicomStore operation.

<h2 id="tocS_GoogleCloudHealthcareV1beta1DeidentifyDeidentifyFhirStoreSummary">GoogleCloudHealthcareV1beta1DeidentifyDeidentifyFhirStoreSummary</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudhealthcarev1beta1deidentifydeidentifyfhirstoresummary"></a>
<a id="schema_GoogleCloudHealthcareV1beta1DeidentifyDeidentifyFhirStoreSummary"></a>
<a id="tocSgooglecloudhealthcarev1beta1deidentifydeidentifyfhirstoresummary"></a>
<a id="tocsgooglecloudhealthcarev1beta1deidentifydeidentifyfhirstoresummary"></a>

```json
{}
```

Contains a summary of the DeidentifyFhirStore operation.

<h2 id="tocS_GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata">GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudhealthcarev1beta1deidentifyfieldmetadata"></a>
<a id="schema_GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata"></a>
<a id="tocSgooglecloudhealthcarev1beta1deidentifyfieldmetadata"></a>
<a id="tocsgooglecloudhealthcarev1beta1deidentifyfieldmetadata"></a>

```json
{
  "characterMaskField": {},
  "cleanTextField": {},
  "cryptoHashField": {},
  "dateShiftField": {},
  "keepField": {},
  "paths": [
    "string"
  ],
  "removeField": {}
}
```

Specifies the FHIR paths to match and how to handle the de-identification of matching fields.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|characterMaskField|[CharacterMaskField](#schemacharactermaskfield)|false|none|Replace the field's value with a masking character. Supported [types](https://www.hl7.org/fhir/datatypes.html): Code, Decimal, HumanName, Id, LanguageCode, Markdown, Oid, String, Uri, Uuid, Xhtml|
|cleanTextField|[CleanTextField](#schemacleantextfield)|false|none|Inspect the field's text and transform sensitive text. Configure using `TextConfig`. Supported [types](https://www.hl7.org/fhir/datatypes.html): Code, Date, DateTime, Decimal, HumanName, Id, LanguageCode, Markdown, Oid, String, Uri, Uuid, Xhtml|
|cryptoHashField|[CryptoHashField](#schemacryptohashfield)|false|none|Replace field value with a hash of that value. Supported [types](https://www.hl7.org/fhir/datatypes.html): Code, Decimal, HumanName, Id, LanguageCode, Markdown, Oid, String, Uri, Uuid, Xhtml|
|dateShiftField|[DateShiftField](#schemadateshiftfield)|false|none|Shift the date by a randomized number of days. See [date shifting](https://cloud.google.com/dlp/docs/concepts-date-shifting) for more information. Supported [types](https://www.hl7.org/fhir/datatypes.html): Date, DateTime|
|keepField|[KeepField](#schemakeepfield)|false|none|Keep the field unchanged.|
|paths|[string]|false|none|List of paths to FHIR fields to redact. Each path is a period-separated list where each component is either a field name or FHIR type name. All types begin with an upper case letter. For example, the resource field "Patient.Address.city", which uses a string type, can be matched by "Patient.Address.String". Path also supports partialkk matching. For example, "Patient.Address.city" can be matched by "Address.city" (Patient omitted). Partial matching and type matching can be combined, for example "Patient.Address.city" can be matched by "Address.String". For "choice" types (those defined in the FHIR spec with the form: field[x]), use two separate components. For example, "deceasedAge.unit" is matched by "Deceased.Age.unit". Supported [types](https://www.hl7.org/fhir/datatypes.html) are: AdministrativeGenderCode, Base64Binary, Boolean, Code, Date, DateTime, Decimal, HumanName, Id, Instant, Integer, LanguageCode, Markdown, Oid, PositiveInt, String, UnsignedInt, Uri, Uuid, Xhtml. The sub-type for HumanName (for example HumanName.given, HumanName.family) can be omitted.|
|removeField|[RemoveField](#schemaremovefield)|false|none|Remove the field.|

<h2 id="tocS_GoogleCloudHealthcareV1beta1DeidentifyOptions">GoogleCloudHealthcareV1beta1DeidentifyOptions</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudhealthcarev1beta1deidentifyoptions"></a>
<a id="schema_GoogleCloudHealthcareV1beta1DeidentifyOptions"></a>
<a id="tocSgooglecloudhealthcarev1beta1deidentifyoptions"></a>
<a id="tocsgooglecloudhealthcarev1beta1deidentifyoptions"></a>

```json
{
  "characterMaskConfig": {
    "maskingCharacter": "string"
  },
  "contextualDeid": {},
  "cryptoHashConfig": {
    "cryptoKey": "string",
    "kmsWrapped": {
      "cryptoKey": "string",
      "wrappedKey": "string"
    }
  },
  "dateShiftConfig": {
    "cryptoKey": "string",
    "kmsWrapped": {
      "cryptoKey": "string",
      "wrappedKey": "string"
    }
  },
  "keepExtensions": {}
}
```

Specifies additional options to apply to the base `profile`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|characterMaskConfig|[CharacterMaskConfig](#schemacharactermaskconfig)|false|none|Character mask config for `CharacterMaskField` `FieldMetadatas`.|
|contextualDeid|[ContextualDeidConfig](#schemacontextualdeidconfig)|false|none|Configure contextual de-id.|
|cryptoHashConfig|[CryptoHashConfig](#schemacryptohashconfig)|false|none|Crypo hash config for `CharacterMaskField` `FieldMetadatas`.|
|dateShiftConfig|[DateShiftConfig](#schemadateshiftconfig)|false|none|Date shifting config for `CharacterMaskField` `FieldMetadatas`.|
|keepExtensions|[KeepExtensionsConfig](#schemakeepextensionsconfig)|false|none|Configure keeping extensions by default.|

<h2 id="tocS_GoogleCloudHealthcareV1beta1DicomBigQueryDestination">GoogleCloudHealthcareV1beta1DicomBigQueryDestination</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudhealthcarev1beta1dicombigquerydestination"></a>
<a id="schema_GoogleCloudHealthcareV1beta1DicomBigQueryDestination"></a>
<a id="tocSgooglecloudhealthcarev1beta1dicombigquerydestination"></a>
<a id="tocsgooglecloudhealthcarev1beta1dicombigquerydestination"></a>

```json
{
  "force": true,
  "tableUri": "string",
  "writeDisposition": "WRITE_DISPOSITION_UNSPECIFIED"
}
```

The BigQuery table where the server writes output.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|force|boolean|false|none|Use `write_disposition` instead. If `write_disposition` is specified, this parameter is ignored. force=false is equivalent to write_disposition=WRITE_EMPTY and force=true is equivalent to write_disposition=WRITE_TRUNCATE.|
|tableUri|string|false|none|BigQuery URI to a table, up to 2000 characters long, in the format `bq://projectId.bqDatasetId.tableId`|
|writeDisposition|string|false|none|Determines whether the existing table in the destination is to be overwritten or appended to. If a write_disposition is specified, the `force` parameter is ignored.|

#### Enumerated Values

|Property|Value|
|---|---|
|writeDisposition|WRITE_DISPOSITION_UNSPECIFIED|
|writeDisposition|WRITE_EMPTY|
|writeDisposition|WRITE_TRUNCATE|
|writeDisposition|WRITE_APPEND|

<h2 id="tocS_GoogleCloudHealthcareV1beta1DicomGcsDestination">GoogleCloudHealthcareV1beta1DicomGcsDestination</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudhealthcarev1beta1dicomgcsdestination"></a>
<a id="schema_GoogleCloudHealthcareV1beta1DicomGcsDestination"></a>
<a id="tocSgooglecloudhealthcarev1beta1dicomgcsdestination"></a>
<a id="tocsgooglecloudhealthcarev1beta1dicomgcsdestination"></a>

```json
{
  "mimeType": "string",
  "uriPrefix": "string"
}
```

The Cloud Storage location where the server writes the output and the export configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mimeType|string|false|none|MIME types supported by DICOM spec. Each file is written in the following format: `.../{study_id}/{series_id}/{instance_id}[/{frame_number}].{extension}` The frame_number component exists only for multi-frame instances. Supported MIME types are consistent with supported formats in DICOMweb: https://cloud.google.com/healthcare/docs/dicom#retrieve_transaction. Specifically, the following are supported: - application/dicom; transfer-syntax=1.2.840.10008.1.2.1 (uncompressed DICOM) - application/dicom; transfer-syntax=1.2.840.10008.1.2.4.50 (DICOM with embedded JPEG Baseline) - application/dicom; transfer-syntax=1.2.840.10008.1.2.4.90 (DICOM with embedded JPEG 2000 Lossless Only) - application/dicom; transfer-syntax=1.2.840.10008.1.2.4.91 (DICOM with embedded JPEG 2000)h - application/dicom; transfer-syntax=* (DICOM with no transcoding) - application/octet-stream; transfer-syntax=1.2.840.10008.1.2.1 (raw uncompressed PixelData) - application/octet-stream; transfer-syntax=* (raw PixelData in whatever format it was uploaded in) - image/jpeg; transfer-syntax=1.2.840.10008.1.2.4.50 (Consumer JPEG) - image/png The following extensions are used for output files: - application/dicom -> .dcm - image/jpeg -> .jpg - image/png -> .png - application/octet-stream -> no extension If unspecified, the instances are exported in the original DICOM format they were uploaded in.|
|uriPrefix|string|false|none|The Cloud Storage destination to export to. URI for a Cloud Storage directory where the server writes the result files, in the format `gs://{bucket-id}/{path/to/destination/dir}`). If there is no trailing slash, the service appends one when composing the object path. The user is responsible for creating the Cloud Storage bucket referenced in `uri_prefix`.|

<h2 id="tocS_GoogleCloudHealthcareV1beta1DicomGcsSource">GoogleCloudHealthcareV1beta1DicomGcsSource</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudhealthcarev1beta1dicomgcssource"></a>
<a id="schema_GoogleCloudHealthcareV1beta1DicomGcsSource"></a>
<a id="tocSgooglecloudhealthcarev1beta1dicomgcssource"></a>
<a id="tocsgooglecloudhealthcarev1beta1dicomgcssource"></a>

```json
{
  "uri": "string"
}
```

Specifies the configuration for importing data from Cloud Storage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|false|none|Points to a Cloud Storage URI containing file(s) with content only. The URI must be in the following format: `gs://{bucket_id}/{object_id}`. The URI can include wildcards in `object_id` and thus identify multiple files. Supported wildcards: * '*' to match 0 or more non-separator characters * '**' to match 0 or more characters (including separators). Must be used at the end of a path and with no other wildcards in the path. Can also be used with a file extension (such as .dcm), which imports all files with the extension in the specified directory and its sub-directories. For example, `gs://my-bucket/my-directory/**.dcm` imports all files with .dcm extensions in `my-directory/` and its sub-directories. * '?' to match 1 character. All other URI formats are invalid. Files matching the wildcard are expected to contain content only, no metadata.|

<h2 id="tocS_GoogleCloudHealthcareV1beta1DicomStreamConfig">GoogleCloudHealthcareV1beta1DicomStreamConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudhealthcarev1beta1dicomstreamconfig"></a>
<a id="schema_GoogleCloudHealthcareV1beta1DicomStreamConfig"></a>
<a id="tocSgooglecloudhealthcarev1beta1dicomstreamconfig"></a>
<a id="tocsgooglecloudhealthcarev1beta1dicomstreamconfig"></a>

```json
{
  "bigqueryDestination": {
    "force": true,
    "tableUri": "string",
    "writeDisposition": "WRITE_DISPOSITION_UNSPECIFIED"
  }
}
```

StreamConfig specifies configuration for a streaming DICOM export.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigqueryDestination|[GoogleCloudHealthcareV1beta1DicomBigQueryDestination](#schemagooglecloudhealthcarev1beta1dicombigquerydestination)|false|none|Results are appended to this table. The server creates a new table in the given BigQuery dataset if the specified table does not exist. To enable the Cloud Healthcare API to write to your BigQuery table, you must give the Cloud Healthcare API service account the bigquery.dataEditor role. The service account is: `service-{PROJECT_NUMBER}@gcp-sa-healthcare.iam.gserviceaccount.com`. The PROJECT_NUMBER identifies the project that the DICOM store resides in. To get the project number, go to the Cloud Console Dashboard. It is recommended to not have a custom schema in the destination table which could conflict with the schema created by the Cloud Healthcare API. Instance deletions are not applied to the destination table. The destination's table schema will be automatically updated in case a new instance's data is incompatible with the current schema. The schema should not be updated manually as this can cause incompatibilies that cannot be resolved automatically. One resolution in this case is to delete the incompatible table and let the server recreate one, though the newly created table only contains data after the table recreation. BigQuery imposes a 1 MB limit on streaming insert row size, therefore any instance that generates more than 1 MB of BigQuery data will not be streamed. If an instance cannot be streamed to BigQuery, errors will be logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)).|

<h2 id="tocS_GoogleCloudHealthcareV1beta1FhirBigQueryDestination">GoogleCloudHealthcareV1beta1FhirBigQueryDestination</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudhealthcarev1beta1fhirbigquerydestination"></a>
<a id="schema_GoogleCloudHealthcareV1beta1FhirBigQueryDestination"></a>
<a id="tocSgooglecloudhealthcarev1beta1fhirbigquerydestination"></a>
<a id="tocsgooglecloudhealthcarev1beta1fhirbigquerydestination"></a>

```json
{
  "datasetUri": "string",
  "force": true,
  "schemaConfig": {
    "lastUpdatedPartitionConfig": {
      "expirationMs": "string",
      "type": "PARTITION_TYPE_UNSPECIFIED"
    },
    "recursiveStructureDepth": "string",
    "schemaType": "SCHEMA_TYPE_UNSPECIFIED"
  },
  "writeDisposition": "WRITE_DISPOSITION_UNSPECIFIED"
}
```

The configuration for exporting to BigQuery.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetUri|string|false|none|BigQuery URI to an existing dataset, up to 2000 characters long, in the format `bq://projectId.bqDatasetId`.|
|force|boolean|false|none|Use `write_disposition` instead. If `write_disposition` is specified, this parameter is ignored. force=false is equivalent to write_disposition=WRITE_EMPTY and force=true is equivalent to write_disposition=WRITE_TRUNCATE.|
|schemaConfig|[SchemaConfig](#schemaschemaconfig)|false|none|The configuration for the exported BigQuery schema.|
|writeDisposition|string|false|none|Determines if existing data in the destination dataset is overwritten, appended to, or not written if the tables contain data. If a write_disposition is specified, the `force` parameter is ignored.|

#### Enumerated Values

|Property|Value|
|---|---|
|writeDisposition|WRITE_DISPOSITION_UNSPECIFIED|
|writeDisposition|WRITE_EMPTY|
|writeDisposition|WRITE_TRUNCATE|
|writeDisposition|WRITE_APPEND|

<h2 id="tocS_GoogleCloudHealthcareV1beta1FhirExportResourcesResponse">GoogleCloudHealthcareV1beta1FhirExportResourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudhealthcarev1beta1fhirexportresourcesresponse"></a>
<a id="schema_GoogleCloudHealthcareV1beta1FhirExportResourcesResponse"></a>
<a id="tocSgooglecloudhealthcarev1beta1fhirexportresourcesresponse"></a>
<a id="tocsgooglecloudhealthcarev1beta1fhirexportresourcesresponse"></a>

```json
{}
```

Response when all resources export successfully. This structure is included in the response to describe the detailed outcome after the operation finishes successfully.

<h2 id="tocS_GoogleCloudHealthcareV1beta1FhirGcsDestination">GoogleCloudHealthcareV1beta1FhirGcsDestination</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudhealthcarev1beta1fhirgcsdestination"></a>
<a id="schema_GoogleCloudHealthcareV1beta1FhirGcsDestination"></a>
<a id="tocSgooglecloudhealthcarev1beta1fhirgcsdestination"></a>
<a id="tocsgooglecloudhealthcarev1beta1fhirgcsdestination"></a>

```json
{
  "uriPrefix": "string"
}
```

The configuration for exporting to Cloud Storage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uriPrefix|string|false|none|URI for a Cloud Storage directory where result files should be written (in the format `gs://{bucket-id}/{path/to/destination/dir}`). If there is no trailing slash, the service appends one when composing the object path. The Cloud Storage bucket referenced in `uri_prefix` must exist or an error occurs.|

<h2 id="tocS_GoogleCloudHealthcareV1beta1FhirGcsSource">GoogleCloudHealthcareV1beta1FhirGcsSource</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudhealthcarev1beta1fhirgcssource"></a>
<a id="schema_GoogleCloudHealthcareV1beta1FhirGcsSource"></a>
<a id="tocSgooglecloudhealthcarev1beta1fhirgcssource"></a>
<a id="tocsgooglecloudhealthcarev1beta1fhirgcssource"></a>

```json
{
  "uri": "string"
}
```

Specifies the configuration for importing data from Cloud Storage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|false|none|Points to a Cloud Storage URI containing file(s) to import. The URI must be in the following format: `gs://{bucket_id}/{object_id}`. The URI can include wildcards in `object_id` and thus identify multiple files. Supported wildcards: * `*` to match 0 or more non-separator characters * `**` to match 0 or more characters (including separators). Must be used at the end of a path and with no other wildcards in the path. Can also be used with a file extension (such as .ndjson), which imports all files with the extension in the specified directory and its sub-directories. For example, `gs://my-bucket/my-directory/**.ndjson` imports all files with `.ndjson` extensions in `my-directory/` and its sub-directories. * `?` to match 1 character Files matching the wildcard are expected to contain content only, no metadata.|

<h2 id="tocS_GoogleCloudHealthcareV1beta1FhirImportResourcesResponse">GoogleCloudHealthcareV1beta1FhirImportResourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudhealthcarev1beta1fhirimportresourcesresponse"></a>
<a id="schema_GoogleCloudHealthcareV1beta1FhirImportResourcesResponse"></a>
<a id="tocSgooglecloudhealthcarev1beta1fhirimportresourcesresponse"></a>
<a id="tocsgooglecloudhealthcarev1beta1fhirimportresourcesresponse"></a>

```json
{}
```

Final response of importing resources. This structure is included in the response to describe the detailed outcome after the operation finishes successfully.

<h2 id="tocS_GroupOrSegment">GroupOrSegment</h2>
<!-- backwards compatibility -->
<a id="schemagrouporsegment"></a>
<a id="schema_GroupOrSegment"></a>
<a id="tocSgrouporsegment"></a>
<a id="tocsgrouporsegment"></a>

```json
{
  "group": {
    "choice": true,
    "maxOccurs": 0,
    "members": [
      {}
    ],
    "minOccurs": 0,
    "name": "string"
  },
  "segment": {
    "maxOccurs": 0,
    "minOccurs": 0,
    "type": "string"
  }
}
```

Construct representing a logical group or a segment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group|[SchemaGroup](#schemaschemagroup)|false|none|An HL7v2 logical group construct.|
|segment|[SchemaSegment](#schemaschemasegment)|false|none|An HL7v2 Segment.|

<h2 id="tocS_Hl7SchemaConfig">Hl7SchemaConfig</h2>
<!-- backwards compatibility -->
<a id="schemahl7schemaconfig"></a>
<a id="schema_Hl7SchemaConfig"></a>
<a id="tocShl7schemaconfig"></a>
<a id="tocshl7schemaconfig"></a>

```json
{
  "messageSchemaConfigs": {
    "property1": {
      "choice": true,
      "maxOccurs": 0,
      "members": [
        {}
      ],
      "minOccurs": 0,
      "name": "string"
    },
    "property2": {
      "choice": true,
      "maxOccurs": 0,
      "members": [
        {}
      ],
      "minOccurs": 0,
      "name": "string"
    }
  },
  "version": [
    {
      "mshField": "string",
      "value": "string"
    }
  ]
}
```

Root config message for HL7v2 schema. This contains a schema structure of groups and segments, and filters that determine which messages to apply the schema structure to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messageSchemaConfigs|object|false|none|Map from each HL7v2 message type and trigger event pair, such as ADT_A04, to its schema configuration root group.|
|version|[[VersionSource](#schemaversionsource)]|false|none|Each VersionSource is tested and only if they all match is the schema used for the message.|

<h2 id="tocS_Hl7TypesConfig">Hl7TypesConfig</h2>
<!-- backwards compatibility -->
<a id="schemahl7typesconfig"></a>
<a id="schema_Hl7TypesConfig"></a>
<a id="tocShl7typesconfig"></a>
<a id="tocshl7typesconfig"></a>

```json
{
  "type": [
    {
      "fields": [
        {
          "maxOccurs": 0,
          "minOccurs": 0,
          "name": "string",
          "table": "string",
          "type": "string"
        }
      ],
      "name": "string",
      "primitive": "PRIMITIVE_UNSPECIFIED"
    }
  ],
  "version": [
    {
      "mshField": "string",
      "value": "string"
    }
  ]
}
```

Root config for HL7v2 datatype definitions for a specific HL7v2 version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[[Type](#schematype)]|false|none|The HL7v2 type definitions.|
|version|[[VersionSource](#schemaversionsource)]|false|none|The version selectors that this config applies to. A message must match ALL version sources to apply.|

<h2 id="tocS_Hl7V2NotificationConfig">Hl7V2NotificationConfig</h2>
<!-- backwards compatibility -->
<a id="schemahl7v2notificationconfig"></a>
<a id="schema_Hl7V2NotificationConfig"></a>
<a id="tocShl7v2notificationconfig"></a>
<a id="tocshl7v2notificationconfig"></a>

```json
{
  "filter": "string",
  "pubsubTopic": "string"
}
```

Specifies where and whether to send notifications upon changes to a data store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|string|false|none|Restricts notifications sent for messages matching a filter. If this is empty, all messages are matched. The following syntax is available: * A string field value can be written as text inside quotation marks, for example `"query text"`. The only valid relational operation for text fields is equality (`=`), where text is searched within the field, rather than having the field be equal to the text. For example, `"Comment = great"` returns messages with `great` in the comment field. * A number field value can be written as an integer, a decimal, or an exponential. The valid relational operators for number fields are the equality operator (`=`), along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * A date field value must be written in `yyyy-mm-dd` form. Fields with date and time use the RFC3339 time format. Leading zeros are required for one-digit months and days. The valid relational operators for date fields are the equality operator (`=`) , along with the less than/greater than operators (`<`, `<=`, `>`, `>=`). Note that there is no inequality (`!=`) operator. You can prepend the `NOT` operator to an expression to negate it. * Multiple field query expressions can be combined in one query by adding `AND` or `OR` operators between the expressions. If a boolean operator appears within a quoted string, it is not treated as special, it's just another part of the character string to be matched. You can prepend the `NOT` operator to an expression to negate it. Fields/functions available for filtering are: * `message_type`, from the MSH-9.1 field. For example, `NOT message_type = "ADT"`. * `send_date` or `sendDate`, the YYYY-MM-DD date the message was sent in the dataset's time_zone, from the MSH-7 segment. For example, `send_date < "2017-01-02"`. * `send_time`, the timestamp when the message was sent, using the RFC3339 time format for comparisons, from the MSH-7 segment. For example, `send_time < "2017-01-02T00:00:00-05:00"`. * `create_time`, the timestamp when the message was created in the HL7v2 store. Use the RFC3339 time format for comparisons. For example, `create_time < "2017-01-02T00:00:00-05:00"`. * `send_facility`, the care center that the message came from, from the MSH-4 segment. For example, `send_facility = "ABC"`. * `PatientId(value, type)`, which matches if the message lists a patient having an ID of the given value and type in the PID-2, PID-3, or PID-4 segments. For example, `PatientId("123456", "MRN")`. * `labels.x`, a string value of the label with key `x` as set using the Message.labels map. For example, `labels."priority"="high"`. The operator `:*` can be used to assert the existence of a label. For example, `labels."priority":*`.|
|pubsubTopic|string|false|none|The [Pub/Sub](https://cloud.google.com/pubsub/docs/) topic that notifications of changes are published on. Supplied by the client. The notification is a `PubsubMessage` with the following fields: * `PubsubMessage.Data` contains the resource name. * `PubsubMessage.MessageId` is the ID of this notification. It is guaranteed to be unique within the topic. * `PubsubMessage.PublishTime` is the time when the message was published. Note that notifications are only sent if the topic is non-empty. [Topic names](https://cloud.google.com/pubsub/docs/overview#names) must be scoped to a project. Cloud Healthcare API service account must have publisher permissions on the given Pub/Sub topic. Not having adequate permissions causes the calls that send notifications to fail. If a notification can't be published to Pub/Sub, errors are logged to Cloud Logging. For more information, see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging).|

<h2 id="tocS_Hl7V2Store">Hl7V2Store</h2>
<!-- backwards compatibility -->
<a id="schemahl7v2store"></a>
<a id="schema_Hl7V2Store"></a>
<a id="tocShl7v2store"></a>
<a id="tocshl7v2store"></a>

```json
{
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "notificationConfig": {
    "pubsubTopic": "string",
    "sendForBulkImport": true
  },
  "notificationConfigs": [
    {
      "filter": "string",
      "pubsubTopic": "string"
    }
  ],
  "parserConfig": {
    "allowNullHeader": true,
    "schema": {
      "ignoreMinOccurs": true,
      "schemas": [
        {
          "messageSchemaConfigs": {
            "property1": {
              "choice": true,
              "maxOccurs": 0,
              "members": [
                {}
              ],
              "minOccurs": 0,
              "name": "string"
            },
            "property2": {
              "choice": true,
              "maxOccurs": 0,
              "members": [
                {}
              ],
              "minOccurs": 0,
              "name": "string"
            }
          },
          "version": [
            {
              "mshField": "string",
              "value": "string"
            }
          ]
        }
      ],
      "schematizedParsingType": "SCHEMATIZED_PARSING_TYPE_UNSPECIFIED",
      "types": [
        {
          "type": [
            {
              "fields": [
                {
                  "maxOccurs": 0,
                  "minOccurs": 0,
                  "name": "string",
                  "table": "string",
                  "type": "string"
                }
              ],
              "name": "string",
              "primitive": "PRIMITIVE_UNSPECIFIED"
            }
          ],
          "version": [
            {
              "mshField": "string",
              "value": "string"
            }
          ]
        }
      ],
      "unexpectedSegmentHandling": "UNEXPECTED_SEGMENT_HANDLING_MODE_UNSPECIFIED"
    },
    "segmentTerminator": "string",
    "version": "PARSER_VERSION_UNSPECIFIED"
  },
  "rejectDuplicateMessage": true
}
```

Represents an HL7v2 store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|object|false|none|User-supplied key-value pairs used to organize HL7v2 stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62} Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63} No more than 64 labels can be associated with a given store.|
|name|string|false|none|Resource name of the HL7v2 store, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/hl7V2Stores/{hl7v2_store_id}`.|
|notificationConfig|[NotificationConfig](#schemanotificationconfig)|false|none|The notification destination all messages (both Ingest & Create) are published on. Only the message name is sent as part of the notification. If this is unset, no notifications are sent. Supplied by the client.|
|notificationConfigs|[[Hl7V2NotificationConfig](#schemahl7v2notificationconfig)]|false|none|A list of notification configs. Each configuration uses a filter to determine whether to publish a message (both Ingest & Create) on the corresponding notification destination. Only the message name is sent as part of the notification. Supplied by the client.|
|parserConfig|[ParserConfig](#schemaparserconfig)|false|none|The configuration for the parser. It determines how the server parses the messages.|
|rejectDuplicateMessage|boolean|false|none|Determines whether to reject duplicate messages. A duplicate message is a message with the same raw bytes as a message that has already been ingested/created in this HL7v2 store. The default value is false, meaning that the store accepts the duplicate messages and it also returns the same ACK message in the IngestMessageResponse as has been returned previously. Note that only one resource is created in the store. When this field is set to true, CreateMessage/IngestMessage requests with a duplicate message will be rejected by the store, and IngestMessageErrorDetail returns a NACK message upon rejection.|

<h2 id="tocS_HttpBody">HttpBody</h2>
<!-- backwards compatibility -->
<a id="schemahttpbody"></a>
<a id="schema_HttpBody"></a>
<a id="tocShttpbody"></a>
<a id="tocshttpbody"></a>

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

<h2 id="tocS_Image">Image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "gcsUri": "string",
  "rawBytes": "string"
}
```

Raw bytes representing consent artifact content.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsUri|string|false|none|Input only. Points to a Cloud Storage URI containing the consent artifact content. The URI must be in the following format: `gs://{bucket_id}/{object_id}`. The Cloud Healthcare API service account must have the `roles/storage.objectViewer` Cloud IAM role for this Cloud Storage location. The consent artifact content at this URI is copied to a Cloud Storage location managed by the Cloud Healthcare API. Responses to fetching requests return the consent artifact content in raw_bytes.|
|rawBytes|string(byte)|false|none|Consent artifact content represented as a stream of bytes. This field is populated when returned in GetConsentArtifact response, but not included in CreateConsentArtifact and ListConsentArtifact response.|

<h2 id="tocS_ImageAnnotation">ImageAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemaimageannotation"></a>
<a id="schema_ImageAnnotation"></a>
<a id="tocSimageannotation"></a>
<a id="tocsimageannotation"></a>

```json
{
  "boundingPolys": [
    {
      "label": "string",
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    }
  ],
  "frameIndex": 0
}
```

Image annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingPolys|[[BoundingPoly](#schemaboundingpoly)]|false|none|The list of polygons outlining the sensitive regions in the image.|
|frameIndex|integer(int32)|false|none|0-based index of the image frame. For example, an image frame in a DICOM instance.|

<h2 id="tocS_ImageConfig">ImageConfig</h2>
<!-- backwards compatibility -->
<a id="schemaimageconfig"></a>
<a id="schema_ImageConfig"></a>
<a id="tocSimageconfig"></a>
<a id="tocsimageconfig"></a>

```json
{
  "additionalInfoTypes": [
    "string"
  ],
  "excludeInfoTypes": [
    "string"
  ],
  "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
}
```

Specifies how to handle de-identification of image pixels.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalInfoTypes|[string]|false|none|Additional InfoTypes to redact in the images in addition to those used by `text_redaction_mode`. Can only be used when `text_redaction_mode` is set to `REDACT_SENSITIVE_TEXT`, `REDACT_SENSITIVE_TEXT_CLEAN_DESCRIPTORS` or `TEXT_REDACTION_MODE_UNSPECIFIED`.|
|excludeInfoTypes|[string]|false|none|InfoTypes to skip redacting, overriding those used by `text_redaction_mode`. Can only be used when `text_redaction_mode` is set to `REDACT_SENSITIVE_TEXT` or `REDACT_SENSITIVE_TEXT_CLEAN_DESCRIPTORS`.|
|textRedactionMode|string|false|none|Determines how to redact text from image.|

#### Enumerated Values

|Property|Value|
|---|---|
|textRedactionMode|TEXT_REDACTION_MODE_UNSPECIFIED|
|textRedactionMode|REDACT_ALL_TEXT|
|textRedactionMode|REDACT_SENSITIVE_TEXT|
|textRedactionMode|REDACT_NO_TEXT|
|textRedactionMode|REDACT_SENSITIVE_TEXT_CLEAN_DESCRIPTORS|

<h2 id="tocS_ImportAnnotationsRequest">ImportAnnotationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportannotationsrequest"></a>
<a id="schema_ImportAnnotationsRequest"></a>
<a id="tocSimportannotationsrequest"></a>
<a id="tocsimportannotationsrequest"></a>

```json
{
  "gcsSource": {
    "uri": "string"
  }
}
```

Request to import Annotations. The Annotations to be imported must have client-supplied resource names which indicate the annotation resource. The import operation is not atomic. If a failure occurs, any annotations already imported are not removed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsSource|[GoogleCloudHealthcareV1beta1AnnotationGcsSource](#schemagooglecloudhealthcarev1beta1annotationgcssource)|false|none|Specifies the configuration for importing data from Cloud Storage.|

<h2 id="tocS_ImportAnnotationsResponse">ImportAnnotationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimportannotationsresponse"></a>
<a id="schema_ImportAnnotationsResponse"></a>
<a id="tocSimportannotationsresponse"></a>
<a id="tocsimportannotationsresponse"></a>

```json
{}
```

Final response of importing Annotations in successful case. This structure is included in the response. It is only included when the operation finishes.

<h2 id="tocS_ImportDicomDataRequest">ImportDicomDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportdicomdatarequest"></a>
<a id="schema_ImportDicomDataRequest"></a>
<a id="tocSimportdicomdatarequest"></a>
<a id="tocsimportdicomdatarequest"></a>

```json
{
  "gcsSource": {
    "uri": "string"
  }
}
```

Imports data into the specified DICOM store. Returns an error if any of the files to import are not DICOM files. This API accepts duplicate DICOM instances by ignoring the newly-pushed instance. It does not overwrite.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsSource|[GoogleCloudHealthcareV1beta1DicomGcsSource](#schemagooglecloudhealthcarev1beta1dicomgcssource)|false|none|Cloud Storage source data location and import configuration. The Cloud Healthcare Service Agent requires the `roles/storage.objectViewer` Cloud IAM roles on the Cloud Storage location.|

<h2 id="tocS_ImportDicomDataResponse">ImportDicomDataResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimportdicomdataresponse"></a>
<a id="schema_ImportDicomDataResponse"></a>
<a id="tocSimportdicomdataresponse"></a>
<a id="tocsimportdicomdataresponse"></a>

```json
{}
```

Returns additional information in regards to a completed DICOM store import.

<h2 id="tocS_ImportMessagesRequest">ImportMessagesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportmessagesrequest"></a>
<a id="schema_ImportMessagesRequest"></a>
<a id="tocSimportmessagesrequest"></a>
<a id="tocsimportmessagesrequest"></a>

```json
{
  "gcsSource": {
    "uri": "string"
  }
}
```

Request to import messages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsSource|[GcsSource](#schemagcssource)|false|none|Cloud Storage source data location and import configuration. The Cloud Healthcare Service Agent requires the `roles/storage.objectViewer` Cloud IAM roles on the Cloud Storage location.|

<h2 id="tocS_ImportMessagesResponse">ImportMessagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimportmessagesresponse"></a>
<a id="schema_ImportMessagesResponse"></a>
<a id="tocSimportmessagesresponse"></a>
<a id="tocsimportmessagesresponse"></a>

```json
{}
```

Final response of importing messages. This structure is included in the response to describe the detailed outcome. It is only included when the operation finishes successfully.

<h2 id="tocS_ImportResourcesRequest">ImportResourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportresourcesrequest"></a>
<a id="schema_ImportResourcesRequest"></a>
<a id="tocSimportresourcesrequest"></a>
<a id="tocsimportresourcesrequest"></a>

```json
{
  "contentStructure": "CONTENT_STRUCTURE_UNSPECIFIED",
  "gcsSource": {
    "uri": "string"
  }
}
```

Request to import resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentStructure|string|false|none|The content structure in the source location. If not specified, the server treats the input source files as BUNDLE.|
|gcsSource|[GoogleCloudHealthcareV1beta1FhirGcsSource](#schemagooglecloudhealthcarev1beta1fhirgcssource)|false|none|Cloud Storage source data location and import configuration. The Cloud Healthcare Service Agent requires the `roles/storage.objectViewer` Cloud IAM roles on the Cloud Storage location. The Healthcare Service Agent Each Cloud Storage object should be a text file that contains the format specified in ContentStructure.|

#### Enumerated Values

|Property|Value|
|---|---|
|contentStructure|CONTENT_STRUCTURE_UNSPECIFIED|
|contentStructure|BUNDLE|
|contentStructure|RESOURCE|
|contentStructure|BUNDLE_PRETTY|
|contentStructure|RESOURCE_PRETTY|

<h2 id="tocS_InfoTypeConfig">InfoTypeConfig</h2>
<!-- backwards compatibility -->
<a id="schemainfotypeconfig"></a>
<a id="schema_InfoTypeConfig"></a>
<a id="tocSinfotypeconfig"></a>
<a id="tocsinfotypeconfig"></a>

```json
{
  "evaluateList": {
    "infoTypes": [
      "string"
    ]
  },
  "ignoreList": {
    "infoTypes": [
      "string"
    ]
  },
  "strictMatching": true
}
```

Specifies how to use infoTypes for evaluation. For example, a user might only want to evaluate `PERSON`, `LOCATION`, and `AGE`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evaluateList|[FilterList](#schemafilterlist)|false|none|List of infoTypes to be filtered.|
|ignoreList|[FilterList](#schemafilterlist)|false|none|List of infoTypes to be filtered.|
|strictMatching|boolean|false|none|If `TRUE`, infoTypes described by `filter` are used for evaluation. Otherwise, infoTypes are not considered for evaluation. For example: * Annotated text: "Toronto is a location" * Finding 1: `{"infoType": "PERSON", "quote": "Toronto", "start": 0, "end": 7}` * Finding 2: `{"infoType": "CITY", "quote": "Toronto", "start": 0, "end": 7}` * Finding 3: `{}` * Ground truth: `{"infoType": "LOCATION", "quote": "Toronto", "start": 0, "end": 7}` When `strict_matching` is `TRUE`: * Finding 1: 1 false positive * Finding 2: 1 false positive * Finding 3: 1 false negative When `strict_matching` is `FALSE`: * Finding 1: 1 true positive * Finding 2: 1 true positive * Finding 3: 1 false negative|

<h2 id="tocS_InfoTypeTransformation">InfoTypeTransformation</h2>
<!-- backwards compatibility -->
<a id="schemainfotypetransformation"></a>
<a id="schema_InfoTypeTransformation"></a>
<a id="tocSinfotypetransformation"></a>
<a id="tocsinfotypetransformation"></a>

```json
{
  "characterMaskConfig": {
    "maskingCharacter": "string"
  },
  "cryptoHashConfig": {
    "cryptoKey": "string",
    "kmsWrapped": {
      "cryptoKey": "string",
      "wrappedKey": "string"
    }
  },
  "dateShiftConfig": {
    "cryptoKey": "string",
    "kmsWrapped": {
      "cryptoKey": "string",
      "wrappedKey": "string"
    }
  },
  "infoTypes": [
    "string"
  ],
  "redactConfig": {},
  "replaceWithInfoTypeConfig": {}
}
```

A transformation to apply to text that is identified as a specific info_type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|characterMaskConfig|[CharacterMaskConfig](#schemacharactermaskconfig)|false|none|Config for character mask.|
|cryptoHashConfig|[CryptoHashConfig](#schemacryptohashconfig)|false|none|Config for crypto hash.|
|dateShiftConfig|[DateShiftConfig](#schemadateshiftconfig)|false|none|Config for date shift.|
|infoTypes|[string]|false|none|`InfoTypes` to apply this transformation to. If this is not specified, this transformation becomes the default transformation, and is used for any `info_type` that is not specified in another transformation.|
|redactConfig|[RedactConfig](#schemaredactconfig)|false|none|Config for text redaction.|
|replaceWithInfoTypeConfig|[ReplaceWithInfoTypeConfig](#schemareplacewithinfotypeconfig)|false|none|Config for replace with InfoType.|

<h2 id="tocS_IngestMessageRequest">IngestMessageRequest</h2>
<!-- backwards compatibility -->
<a id="schemaingestmessagerequest"></a>
<a id="schema_IngestMessageRequest"></a>
<a id="tocSingestmessagerequest"></a>
<a id="tocsingestmessagerequest"></a>

```json
{
  "message": {
    "createTime": "string",
    "data": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "messageType": "string",
    "name": "string",
    "parsedData": {
      "segments": [
        {
          "fields": {
            "property1": "string",
            "property2": "string"
          },
          "segmentId": "string",
          "setId": "string"
        }
      ]
    },
    "patientIds": [
      {
        "type": "string",
        "value": "string"
      }
    ],
    "schematizedData": {
      "data": "string",
      "error": "string"
    },
    "sendFacility": "string",
    "sendTime": "string"
  }
}
```

Ingests a message into the specified HL7v2 store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|[Message](#schemamessage)|false|none|HL7v2 message to ingest.|

<h2 id="tocS_IngestMessageResponse">IngestMessageResponse</h2>
<!-- backwards compatibility -->
<a id="schemaingestmessageresponse"></a>
<a id="schema_IngestMessageResponse"></a>
<a id="tocSingestmessageresponse"></a>
<a id="tocsingestmessageresponse"></a>

```json
{
  "hl7Ack": "string",
  "message": {
    "createTime": "string",
    "data": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "messageType": "string",
    "name": "string",
    "parsedData": {
      "segments": [
        {
          "fields": {
            "property1": "string",
            "property2": "string"
          },
          "segmentId": "string",
          "setId": "string"
        }
      ]
    },
    "patientIds": [
      {
        "type": "string",
        "value": "string"
      }
    ],
    "schematizedData": {
      "data": "string",
      "error": "string"
    },
    "sendFacility": "string",
    "sendTime": "string"
  }
}
```

Acknowledges that a message has been ingested into the specified HL7v2 store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hl7Ack|string(byte)|false|none|HL7v2 ACK message.|
|message|[Message](#schemamessage)|false|none|Created message resource.|

<h2 id="tocS_KeepExtensionsConfig">KeepExtensionsConfig</h2>
<!-- backwards compatibility -->
<a id="schemakeepextensionsconfig"></a>
<a id="schema_KeepExtensionsConfig"></a>
<a id="tocSkeepextensionsconfig"></a>
<a id="tocskeepextensionsconfig"></a>

```json
{}
```

The behaviour for handling FHIR extensions that aren't otherwise specified for de-identification. If provided, all extensions are preserved during de-identification by default. If unspecified, all extensions are removed during de-identification by default.

<h2 id="tocS_KeepField">KeepField</h2>
<!-- backwards compatibility -->
<a id="schemakeepfield"></a>
<a id="schema_KeepField"></a>
<a id="tocSkeepfield"></a>
<a id="tocskeepfield"></a>

```json
{}
```

Keep field unchanged.

<h2 id="tocS_KeepTag">KeepTag</h2>
<!-- backwards compatibility -->
<a id="schemakeeptag"></a>
<a id="schema_KeepTag"></a>
<a id="tocSkeeptag"></a>
<a id="tocskeeptag"></a>

```json
{}
```

Keep tag unchanged.

<h2 id="tocS_KmsWrappedCryptoKey">KmsWrappedCryptoKey</h2>
<!-- backwards compatibility -->
<a id="schemakmswrappedcryptokey"></a>
<a id="schema_KmsWrappedCryptoKey"></a>
<a id="tocSkmswrappedcryptokey"></a>
<a id="tocskmswrappedcryptokey"></a>

```json
{
  "cryptoKey": "string",
  "wrappedKey": "string"
}
```

Include to use an existing data crypto key wrapped by KMS. The wrapped key must be a 128-, 192-, or 256-bit key. The key must grant the Cloud IAM permission `cloudkms.cryptoKeyVersions.useToDecrypt` to the project's Cloud Healthcare Service Agent service account. For more information, see [Creating a wrapped key] (https://cloud.google.com/dlp/docs/create-wrapped-key).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cryptoKey|string|false|none|Required. The resource name of the KMS CryptoKey to use for unwrapping. For example, `projects/{project_id}/locations/{location_id}/keyRings/{keyring}/cryptoKeys/{key}`.|
|wrappedKey|string(byte)|false|none|Required. The wrapped data crypto key.|

<h2 id="tocS_LinkedEntity">LinkedEntity</h2>
<!-- backwards compatibility -->
<a id="schemalinkedentity"></a>
<a id="schema_LinkedEntity"></a>
<a id="tocSlinkedentity"></a>
<a id="tocslinkedentity"></a>

```json
{
  "entityId": "string"
}
```

EntityMentions can be linked to multiple entities using a LinkedEntity message lets us add other fields, e.g. confidence.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entityId|string|false|none|entity_id is a concept unique identifier. These are prefixed by a string that identifies the entity coding system, followed by the unique identifier within that system. For example, "UMLS/C0000970". This also supports ad hoc entities, which are formed by normalizing entity mention content.|

<h2 id="tocS_ListAnnotationStoresResponse">ListAnnotationStoresResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistannotationstoresresponse"></a>
<a id="schema_ListAnnotationStoresResponse"></a>
<a id="tocSlistannotationstoresresponse"></a>
<a id="tocslistannotationstoresresponse"></a>

```json
{
  "annotationStores": [
    {
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Lists the Annotation stores in the given dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationStores|[[AnnotationStore](#schemaannotationstore)]|false|none|The returned Annotation stores. Won't be more Annotation stores than the value of page_size in the request.|
|nextPageToken|string|false|none|Token to retrieve the next page of results or empty if there are no more results in the list.|

<h2 id="tocS_ListAnnotationsResponse">ListAnnotationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistannotationsresponse"></a>
<a id="schema_ListAnnotationsResponse"></a>
<a id="tocSlistannotationsresponse"></a>
<a id="tocslistannotationsresponse"></a>

```json
{
  "annotations": [
    {
      "annotationSource": {
        "cloudHealthcareSource": {
          "name": "string"
        }
      },
      "customData": {
        "property1": "string",
        "property2": "string"
      },
      "imageAnnotation": {
        "boundingPolys": [
          {
            "label": "string",
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          }
        ],
        "frameIndex": 0
      },
      "name": "string",
      "resourceAnnotation": {
        "label": "string"
      },
      "textAnnotation": {
        "details": {
          "property1": {
            "findings": [
              {
                "end": "string",
                "infoType": "string",
                "quote": "string",
                "start": "string"
              }
            ]
          },
          "property2": {
            "findings": [
              {
                "end": "string",
                "infoType": "string",
                "quote": "string",
                "start": "string"
              }
            ]
          }
        }
      }
    }
  ],
  "nextPageToken": "string"
}
```

Lists the Annotations in the specified Annotation store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|[[Annotation](#schemaannotation)]|false|none|The returned Annotations. Won't be more values than the value of page_size in the request. See `AnnotationView` in the request for populated fields.|
|nextPageToken|string|false|none|Token to retrieve the next page of results or empty if there are no more results in the list.|

<h2 id="tocS_ListAttributeDefinitionsResponse">ListAttributeDefinitionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistattributedefinitionsresponse"></a>
<a id="schema_ListAttributeDefinitionsResponse"></a>
<a id="tocSlistattributedefinitionsresponse"></a>
<a id="tocslistattributedefinitionsresponse"></a>

```json
{
  "attributeDefinitions": [
    {
      "allowedValues": [
        "string"
      ],
      "category": "CATEGORY_UNSPECIFIED",
      "consentDefaultValues": [
        "string"
      ],
      "dataMappingDefaultValue": "string",
      "description": "string",
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributeDefinitions|[[AttributeDefinition](#schemaattributedefinition)]|false|none|The returned Attribute definitions. The maximum number of attributes returned is determined by the value of page_size in the ListAttributeDefinitionsRequest.|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|

<h2 id="tocS_ListConsentArtifactsResponse">ListConsentArtifactsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistconsentartifactsresponse"></a>
<a id="schema_ListConsentArtifactsResponse"></a>
<a id="tocSlistconsentartifactsresponse"></a>
<a id="tocslistconsentartifactsresponse"></a>

```json
{
  "consentArtifacts": [
    {
      "consentContentScreenshots": [
        {
          "gcsUri": "string",
          "rawBytes": "string"
        }
      ],
      "consentContentVersion": "string",
      "guardianSignature": {
        "image": {
          "gcsUri": "string",
          "rawBytes": "string"
        },
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "signatureTime": "string",
        "userId": "string"
      },
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "userId": "string",
      "userSignature": {
        "image": {
          "gcsUri": "string",
          "rawBytes": "string"
        },
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "signatureTime": "string",
        "userId": "string"
      },
      "witnessSignature": {
        "image": {
          "gcsUri": "string",
          "rawBytes": "string"
        },
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "signatureTime": "string",
        "userId": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consentArtifacts|[[ConsentArtifact](#schemaconsentartifact)]|false|none|The returned Consent artifacts. The maximum number of artifacts returned is determined by the value of page_size in the ListConsentArtifactsRequest.|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|

<h2 id="tocS_ListConsentRevisionsResponse">ListConsentRevisionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistconsentrevisionsresponse"></a>
<a id="schema_ListConsentRevisionsResponse"></a>
<a id="tocSlistconsentrevisionsresponse"></a>
<a id="tocslistconsentrevisionsresponse"></a>

```json
{
  "consents": [
    {
      "consentArtifact": "string",
      "expireTime": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "policies": [
        {
          "authorizationRule": {
            "description": "string",
            "expression": "string",
            "location": "string",
            "title": "string"
          },
          "resourceAttributes": [
            {
              "attributeDefinitionId": "string",
              "values": [
                "string"
              ]
            }
          ]
        }
      ],
      "revisionCreateTime": "string",
      "revisionId": "string",
      "state": "STATE_UNSPECIFIED",
      "ttl": "string",
      "userId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consents|[[Consent](#schemaconsent)]|false|none|The returned Consent revisions. The maximum number of revisions returned is determined by the value of `page_size` in the ListConsentRevisionsRequest.|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|

<h2 id="tocS_ListConsentStoresResponse">ListConsentStoresResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistconsentstoresresponse"></a>
<a id="schema_ListConsentStoresResponse"></a>
<a id="tocSlistconsentstoresresponse"></a>
<a id="tocslistconsentstoresresponse"></a>

```json
{
  "consentStores": [
    {
      "defaultConsentTtl": "string",
      "enableConsentCreateOnUpdate": true,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consentStores|[[ConsentStore](#schemaconsentstore)]|false|none|The returned consent stores. The maximum number of stores returned is determined by the value of page_size in the ListConsentStoresRequest.|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|

<h2 id="tocS_ListConsentsResponse">ListConsentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistconsentsresponse"></a>
<a id="schema_ListConsentsResponse"></a>
<a id="tocSlistconsentsresponse"></a>
<a id="tocslistconsentsresponse"></a>

```json
{
  "consents": [
    {
      "consentArtifact": "string",
      "expireTime": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "policies": [
        {
          "authorizationRule": {
            "description": "string",
            "expression": "string",
            "location": "string",
            "title": "string"
          },
          "resourceAttributes": [
            {
              "attributeDefinitionId": "string",
              "values": [
                "string"
              ]
            }
          ]
        }
      ],
      "revisionCreateTime": "string",
      "revisionId": "string",
      "state": "STATE_UNSPECIFIED",
      "ttl": "string",
      "userId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consents|[[Consent](#schemaconsent)]|false|none|The returned Consents. The maximum number of Consents returned is determined by the value of page_size in the ListConsentsRequest.|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|

<h2 id="tocS_ListDatasetsResponse">ListDatasetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetsresponse"></a>
<a id="schema_ListDatasetsResponse"></a>
<a id="tocSlistdatasetsresponse"></a>
<a id="tocslistdatasetsresponse"></a>

```json
{
  "datasets": [
    {
      "name": "string",
      "timeZone": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Lists the available datasets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasets|[[Dataset](#schemadataset)]|false|none|The first page of datasets.|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|

<h2 id="tocS_ListDicomStoresResponse">ListDicomStoresResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdicomstoresresponse"></a>
<a id="schema_ListDicomStoresResponse"></a>
<a id="tocSlistdicomstoresresponse"></a>
<a id="tocslistdicomstoresresponse"></a>

```json
{
  "dicomStores": [
    {
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "notificationConfig": {
        "pubsubTopic": "string",
        "sendForBulkImport": true
      },
      "streamConfigs": [
        {
          "bigqueryDestination": {
            "force": true,
            "tableUri": "string",
            "writeDisposition": "WRITE_DISPOSITION_UNSPECIFIED"
          }
        }
      ]
    }
  ],
  "nextPageToken": "string"
}
```

Lists the DICOM stores in the given dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dicomStores|[[DicomStore](#schemadicomstore)]|false|none|The returned DICOM stores. Won't be more DICOM stores than the value of page_size in the request.|
|nextPageToken|string|false|none|Token to retrieve the next page of results or empty if there are no more results in the list.|

<h2 id="tocS_ListFhirStoresResponse">ListFhirStoresResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfhirstoresresponse"></a>
<a id="schema_ListFhirStoresResponse"></a>
<a id="tocSlistfhirstoresresponse"></a>
<a id="tocslistfhirstoresresponse"></a>

```json
{
  "fhirStores": [
    {
      "complexDataTypeReferenceParsing": "COMPLEX_DATA_TYPE_REFERENCE_PARSING_UNSPECIFIED",
      "defaultSearchHandlingStrict": true,
      "disableReferentialIntegrity": true,
      "disableResourceVersioning": true,
      "enableUpdateCreate": true,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "notificationConfig": {
        "pubsubTopic": "string",
        "sendForBulkImport": true
      },
      "notificationConfigs": [
        {
          "pubsubTopic": "string",
          "sendFullResource": true
        }
      ],
      "searchConfig": {
        "searchParameters": [
          {
            "canonicalUrl": "string",
            "parameter": "string"
          }
        ]
      },
      "streamConfigs": [
        {
          "bigqueryDestination": {
            "datasetUri": "string",
            "force": true,
            "schemaConfig": {
              "lastUpdatedPartitionConfig": {
                "expirationMs": "string",
                "type": "PARTITION_TYPE_UNSPECIFIED"
              },
              "recursiveStructureDepth": "string",
              "schemaType": "SCHEMA_TYPE_UNSPECIFIED"
            },
            "writeDisposition": "WRITE_DISPOSITION_UNSPECIFIED"
          },
          "deidentifiedStoreDestination": {
            "config": {
              "annotation": {
                "annotationStoreName": "string",
                "storeQuote": true
              },
              "dicom": {
                "filterProfile": "TAG_FILTER_PROFILE_UNSPECIFIED",
                "keepList": {
                  "tags": [
                    "string"
                  ]
                },
                "removeList": {
                  "tags": [
                    "string"
                  ]
                },
                "skipIdRedaction": true
              },
              "dicomTagConfig": {
                "actions": [
                  {
                    "cleanImageTag": {
                      "additionalInfoTypes": [
                        "string"
                      ],
                      "excludeInfoTypes": [
                        "string"
                      ],
                      "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
                    },
                    "cleanTextTag": {},
                    "deleteTag": {},
                    "keepTag": {},
                    "queries": [
                      "string"
                    ],
                    "recurseTag": {},
                    "regenUidTag": {},
                    "removeTag": {},
                    "resetTag": {}
                  }
                ],
                "options": {
                  "cleanDescriptors": {},
                  "cleanImage": {
                    "additionalInfoTypes": [
                      "string"
                    ],
                    "excludeInfoTypes": [
                      "string"
                    ],
                    "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
                  },
                  "primaryIds": "PRIMARY_IDS_OPTION_UNSPECIFIED"
                },
                "profileType": "PROFILE_TYPE_UNSPECIFIED"
              },
              "fhir": {
                "defaultKeepExtensions": true,
                "fieldMetadataList": [
                  {
                    "action": "ACTION_UNSPECIFIED",
                    "paths": [
                      "string"
                    ]
                  }
                ]
              },
              "fhirFieldConfig": {
                "fieldMetadataList": [
                  {
                    "characterMaskField": {},
                    "cleanTextField": {},
                    "cryptoHashField": {},
                    "dateShiftField": {},
                    "keepField": {},
                    "paths": [
                      "string"
                    ],
                    "removeField": {}
                  }
                ],
                "options": {
                  "characterMaskConfig": {
                    "maskingCharacter": "string"
                  },
                  "contextualDeid": {},
                  "cryptoHashConfig": {
                    "cryptoKey": "string",
                    "kmsWrapped": {
                      "cryptoKey": "string",
                      "wrappedKey": "string"
                    }
                  },
                  "dateShiftConfig": {
                    "cryptoKey": "string",
                    "kmsWrapped": {
                      "cryptoKey": "string",
                      "wrappedKey": "string"
                    }
                  },
                  "keepExtensions": {}
                },
                "profileType": "PROFILE_TYPE_UNSPECIFIED"
              },
              "image": {
                "additionalInfoTypes": [
                  "string"
                ],
                "excludeInfoTypes": [
                  "string"
                ],
                "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
              },
              "operationMetadata": {
                "fhirOutput": {
                  "fhirStore": "string"
                }
              },
              "text": {
                "additionalTransformations": [
                  {
                    "characterMaskConfig": {
                      "maskingCharacter": "string"
                    },
                    "cryptoHashConfig": {
                      "cryptoKey": "string",
                      "kmsWrapped": {
                        "cryptoKey": "string",
                        "wrappedKey": "string"
                      }
                    },
                    "dateShiftConfig": {
                      "cryptoKey": "string",
                      "kmsWrapped": {
                        "cryptoKey": "string",
                        "wrappedKey": "string"
                      }
                    },
                    "infoTypes": [
                      "string"
                    ],
                    "redactConfig": {},
                    "replaceWithInfoTypeConfig": {}
                  }
                ],
                "excludeInfoTypes": [
                  "string"
                ],
                "profileType": "PROFILE_TYPE_UNSPECIFIED",
                "transformations": [
                  {
                    "characterMaskConfig": {
                      "maskingCharacter": "string"
                    },
                    "cryptoHashConfig": {
                      "cryptoKey": "string",
                      "kmsWrapped": {
                        "cryptoKey": "string",
                        "wrappedKey": "string"
                      }
                    },
                    "dateShiftConfig": {
                      "cryptoKey": "string",
                      "kmsWrapped": {
                        "cryptoKey": "string",
                        "wrappedKey": "string"
                      }
                    },
                    "infoTypes": [
                      "string"
                    ],
                    "redactConfig": {},
                    "replaceWithInfoTypeConfig": {}
                  }
                ]
              }
            },
            "store": "string"
          },
          "resourceTypes": [
            "string"
          ]
        }
      ],
      "validationConfig": {
        "disableFhirpathValidation": true,
        "disableProfileValidation": true,
        "disableReferenceTypeValidation": true,
        "disableRequiredFieldValidation": true,
        "enabledImplementationGuides": [
          "string"
        ]
      },
      "version": "VERSION_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

Lists the FHIR stores in the given dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fhirStores|[[FhirStore](#schemafhirstore)]|false|none|The returned FHIR stores. Won't be more FHIR stores than the value of page_size in the request.|
|nextPageToken|string|false|none|Token to retrieve the next page of results or empty if there are no more results in the list.|

<h2 id="tocS_ListHl7V2StoresResponse">ListHl7V2StoresResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisthl7v2storesresponse"></a>
<a id="schema_ListHl7V2StoresResponse"></a>
<a id="tocSlisthl7v2storesresponse"></a>
<a id="tocslisthl7v2storesresponse"></a>

```json
{
  "hl7V2Stores": [
    {
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "notificationConfig": {
        "pubsubTopic": "string",
        "sendForBulkImport": true
      },
      "notificationConfigs": [
        {
          "filter": "string",
          "pubsubTopic": "string"
        }
      ],
      "parserConfig": {
        "allowNullHeader": true,
        "schema": {
          "ignoreMinOccurs": true,
          "schemas": [
            {
              "messageSchemaConfigs": {
                "property1": {
                  "choice": true,
                  "maxOccurs": 0,
                  "members": [
                    {}
                  ],
                  "minOccurs": 0,
                  "name": "string"
                },
                "property2": {
                  "choice": true,
                  "maxOccurs": 0,
                  "members": [
                    {}
                  ],
                  "minOccurs": 0,
                  "name": "string"
                }
              },
              "version": [
                {
                  "mshField": "string",
                  "value": "string"
                }
              ]
            }
          ],
          "schematizedParsingType": "SCHEMATIZED_PARSING_TYPE_UNSPECIFIED",
          "types": [
            {
              "type": [
                {
                  "fields": [
                    {
                      "maxOccurs": 0,
                      "minOccurs": 0,
                      "name": "string",
                      "table": "string",
                      "type": "string"
                    }
                  ],
                  "name": "string",
                  "primitive": "PRIMITIVE_UNSPECIFIED"
                }
              ],
              "version": [
                {
                  "mshField": "string",
                  "value": "string"
                }
              ]
            }
          ],
          "unexpectedSegmentHandling": "UNEXPECTED_SEGMENT_HANDLING_MODE_UNSPECIFIED"
        },
        "segmentTerminator": "string",
        "version": "PARSER_VERSION_UNSPECIFIED"
      },
      "rejectDuplicateMessage": true
    }
  ],
  "nextPageToken": "string"
}
```

Lists the HL7v2 stores in the given dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hl7V2Stores|[[Hl7V2Store](#schemahl7v2store)]|false|none|The returned HL7v2 stores. Won't be more HL7v2 stores than the value of page_size in the request.|
|nextPageToken|string|false|none|Token to retrieve the next page of results or empty if there are no more results in the list.|

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

<h2 id="tocS_ListMessagesResponse">ListMessagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmessagesresponse"></a>
<a id="schema_ListMessagesResponse"></a>
<a id="tocSlistmessagesresponse"></a>
<a id="tocslistmessagesresponse"></a>

```json
{
  "hl7V2Messages": [
    {
      "createTime": "string",
      "data": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "messageType": "string",
      "name": "string",
      "parsedData": {
        "segments": [
          {
            "fields": {
              "property1": "string",
              "property2": "string"
            },
            "segmentId": "string",
            "setId": "string"
          }
        ]
      },
      "patientIds": [
        {
          "type": "string",
          "value": "string"
        }
      ],
      "schematizedData": {
        "data": "string",
        "error": "string"
      },
      "sendFacility": "string",
      "sendTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Lists the messages in the specified HL7v2 store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hl7V2Messages|[[Message](#schemamessage)]|false|none|The returned Messages. Won't be more Messages than the value of page_size in the request. See view for populated fields.|
|nextPageToken|string|false|none|Token to retrieve the next page of results or empty if there are no more results in the list.|

<h2 id="tocS_ListOperationsResponse">ListOperationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistoperationsresponse"></a>
<a id="schema_ListOperationsResponse"></a>
<a id="tocSlistoperationsresponse"></a>
<a id="tocslistoperationsresponse"></a>

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
|operations|[[Operation](#schemaoperation)]|false|none|A list of operations that matches the specified filter in the request.|

<h2 id="tocS_ListUserDataMappingsResponse">ListUserDataMappingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistuserdatamappingsresponse"></a>
<a id="schema_ListUserDataMappingsResponse"></a>
<a id="tocSlistuserdatamappingsresponse"></a>
<a id="tocslistuserdatamappingsresponse"></a>

```json
{
  "nextPageToken": "string",
  "userDataMappings": [
    {
      "archiveTime": "string",
      "archived": true,
      "dataId": "string",
      "name": "string",
      "resourceAttributes": [
        {
          "attributeDefinitionId": "string",
          "values": [
            "string"
          ]
        }
      ],
      "userId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|
|userDataMappings|[[UserDataMapping](#schemauserdatamapping)]|false|none|The returned User data mappings. The maximum number of User data mappings returned is determined by the value of page_size in the ListUserDataMappingsRequest.|

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

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "createTime": "string",
  "data": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "messageType": "string",
  "name": "string",
  "parsedData": {
    "segments": [
      {
        "fields": {
          "property1": "string",
          "property2": "string"
        },
        "segmentId": "string",
        "setId": "string"
      }
    ]
  },
  "patientIds": [
    {
      "type": "string",
      "value": "string"
    }
  ],
  "schematizedData": {
    "data": "string",
    "error": "string"
  },
  "sendFacility": "string",
  "sendTime": "string"
}
```

A complete HL7v2 message. See [Introduction to HL7 Standards] (https://www.hl7.org/implement/standards/index.cfm?ref=common) for details on the standard.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The datetime when the message was created. Set by the server.|
|data|string(byte)|false|none|Raw message bytes.|
|labels|object|false|none|User-supplied key-value pairs used to organize HL7v2 stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62} Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63} No more than 64 labels can be associated with a given store.|
|messageType|string|false|none|The message type for this message. MSH-9.1.|
|name|string|false|none|Resource name of the Message, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/hl7V2Stores/{hl7_v2_store_id}/messages/{message_id}`. Assigned by the server.|
|parsedData|[ParsedData](#schemaparseddata)|false|none|Output only. The parsed version of the raw message data.|
|patientIds|[[PatientId](#schemapatientid)]|false|none|All patient IDs listed in the PID-2, PID-3, and PID-4 segments of this message.|
|schematizedData|[SchematizedData](#schemaschematizeddata)|false|none|The parsed version of the raw message data schematized according to this store's schemas and type definitions.|
|sendFacility|string|false|none|The hospital that this message came from. MSH-4.|
|sendTime|string(google-datetime)|false|none|The datetime the sending application sent this message. MSH-7.|

<h2 id="tocS_NotificationConfig">NotificationConfig</h2>
<!-- backwards compatibility -->
<a id="schemanotificationconfig"></a>
<a id="schema_NotificationConfig"></a>
<a id="tocSnotificationconfig"></a>
<a id="tocsnotificationconfig"></a>

```json
{
  "pubsubTopic": "string",
  "sendForBulkImport": true
}
```

Specifies where to send notifications upon changes to a data store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pubsubTopic|string|false|none|The [Pub/Sub](https://cloud.google.com/pubsub/docs/) topic that notifications of changes are published on. Supplied by the client. PubsubMessage.Data contains the resource name. PubsubMessage.MessageId is the ID of this message. It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message was published. Notifications are only sent if the topic is non-empty. [Topic names](https://cloud.google.com/pubsub/docs/overview#names) must be scoped to a project. Cloud Healthcare API service account must have publisher permissions on the given Pub/Sub topic. Not having adequate permissions causes the calls that send notifications to fail. If a notification can't be published to Pub/Sub, errors are logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)). If the number of errors exceeds a certain rate, some aren't submitted. Note that not all operations trigger notifications, see [Configuring Pub/Sub notifications](https://cloud.google.com/healthcare/docs/how-tos/pubsub) for specific details.|
|sendForBulkImport|boolean|false|none|Indicates whether or not to send Pub/Sub notifications on bulk import. Only supported for DICOM imports.|

<h2 id="tocS_Operation">Operation</h2>
<!-- backwards compatibility -->
<a id="schemaoperation"></a>
<a id="schema_Operation"></a>
<a id="tocSoperation"></a>
<a id="tocsoperation"></a>

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
|error|[Status](#schemastatus)|false|none|The error result of the operation in case of failure or cancellation.|
|metadata|object|false|none|Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.|
|name|string|false|none|The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.|
|response|object|false|none|The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.|

<h2 id="tocS_OperationMetadata">OperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaoperationmetadata"></a>
<a id="schema_OperationMetadata"></a>
<a id="tocSoperationmetadata"></a>
<a id="tocsoperationmetadata"></a>

```json
{
  "apiMethodName": "string",
  "cancelRequested": true,
  "counter": {
    "failure": "string",
    "pending": "string",
    "success": "string"
  },
  "createTime": "string",
  "endTime": "string",
  "logsUrl": "string"
}
```

OperationMetadata provides information about the operation execution. Returned in the long-running operation's metadata field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiMethodName|string|false|none|The name of the API method that initiated the operation.|
|cancelRequested|boolean|false|none|Specifies if cancellation was requested for the operation.|
|counter|[ProgressCounter](#schemaprogresscounter)|false|none|ProgressCounter provides counters to describe an operation's progress.|
|createTime|string(google-datetime)|false|none|The time at which the operation was created by the API.|
|endTime|string(google-datetime)|false|none|The time at which execution was completed.|
|logsUrl|string|false|none|A link to audit and error logs in the log viewer. Error logs are generated only by some operations, listed at [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging).|

<h2 id="tocS_Options">Options</h2>
<!-- backwards compatibility -->
<a id="schemaoptions"></a>
<a id="schema_Options"></a>
<a id="tocSoptions"></a>
<a id="tocsoptions"></a>

```json
{
  "cleanDescriptors": {},
  "cleanImage": {
    "additionalInfoTypes": [
      "string"
    ],
    "excludeInfoTypes": [
      "string"
    ],
    "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
  },
  "primaryIds": "PRIMARY_IDS_OPTION_UNSPECIFIED"
}
```

Specifies additional options to apply to the base profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cleanDescriptors|[CleanDescriptorsOption](#schemacleandescriptorsoption)|false|none|Set Clean Descriptors Option.|
|cleanImage|[ImageConfig](#schemaimageconfig)|false|none|Apply `Action.clean_image` to [`PixelData`](http://dicom.nema.org/medical/dicom/2018e/output/chtml/part06/chapter_6.html) as configured.|
|primaryIds|string|false|none|Set `Action` for [`StudyInstanceUID`, `SeriesInstanceUID`, `SOPInstanceUID`, and `MediaStorageSOPInstanceUID`](http://dicom.nema.org/medical/dicom/2018e/output/chtml/part06/chapter_6.html).|

#### Enumerated Values

|Property|Value|
|---|---|
|primaryIds|PRIMARY_IDS_OPTION_UNSPECIFIED|
|primaryIds|KEEP|
|primaryIds|REGEN|

<h2 id="tocS_ParsedData">ParsedData</h2>
<!-- backwards compatibility -->
<a id="schemaparseddata"></a>
<a id="schema_ParsedData"></a>
<a id="tocSparseddata"></a>
<a id="tocsparseddata"></a>

```json
{
  "segments": [
    {
      "fields": {
        "property1": "string",
        "property2": "string"
      },
      "segmentId": "string",
      "setId": "string"
    }
  ]
}
```

The content of an HL7v2 message in a structured format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|segments|[[Segment](#schemasegment)]|false|none|none|

<h2 id="tocS_ParserConfig">ParserConfig</h2>
<!-- backwards compatibility -->
<a id="schemaparserconfig"></a>
<a id="schema_ParserConfig"></a>
<a id="tocSparserconfig"></a>
<a id="tocsparserconfig"></a>

```json
{
  "allowNullHeader": true,
  "schema": {
    "ignoreMinOccurs": true,
    "schemas": [
      {
        "messageSchemaConfigs": {
          "property1": {
            "choice": true,
            "maxOccurs": 0,
            "members": [
              {}
            ],
            "minOccurs": 0,
            "name": "string"
          },
          "property2": {
            "choice": true,
            "maxOccurs": 0,
            "members": [
              {}
            ],
            "minOccurs": 0,
            "name": "string"
          }
        },
        "version": [
          {
            "mshField": "string",
            "value": "string"
          }
        ]
      }
    ],
    "schematizedParsingType": "SCHEMATIZED_PARSING_TYPE_UNSPECIFIED",
    "types": [
      {
        "type": [
          {
            "fields": [
              {
                "maxOccurs": 0,
                "minOccurs": 0,
                "name": "string",
                "table": "string",
                "type": "string"
              }
            ],
            "name": "string",
            "primitive": "PRIMITIVE_UNSPECIFIED"
          }
        ],
        "version": [
          {
            "mshField": "string",
            "value": "string"
          }
        ]
      }
    ],
    "unexpectedSegmentHandling": "UNEXPECTED_SEGMENT_HANDLING_MODE_UNSPECIFIED"
  },
  "segmentTerminator": "string",
  "version": "PARSER_VERSION_UNSPECIFIED"
}
```

The configuration for the parser. It determines how the server parses the messages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowNullHeader|boolean|false|none|Determines whether messages with no header are allowed.|
|schema|[SchemaPackage](#schemaschemapackage)|false|none|Schemas used to parse messages in this store, if schematized parsing is desired.|
|segmentTerminator|string(byte)|false|none|Byte(s) to use as the segment terminator. If this is unset, '\r' is used as segment terminator, matching the HL7 version 2 specification.|
|version|string|false|none|Immutable. Determines the version of both the default parser to be used when `schema` is not given, as well as the schematized parser used when `schema` is specified. This field is immutable after HL7v2 store creation.|

#### Enumerated Values

|Property|Value|
|---|---|
|version|PARSER_VERSION_UNSPECIFIED|
|version|V1|
|version|V2|
|version|V3|

<h2 id="tocS_PatientId">PatientId</h2>
<!-- backwards compatibility -->
<a id="schemapatientid"></a>
<a id="schema_PatientId"></a>
<a id="tocSpatientid"></a>
<a id="tocspatientid"></a>

```json
{
  "type": "string",
  "value": "string"
}
```

A patient identifier and associated type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|ID type. For example, MRN or NHS.|
|value|string|false|none|The patient's unique identifier.|

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

<h2 id="tocS_ProgressCounter">ProgressCounter</h2>
<!-- backwards compatibility -->
<a id="schemaprogresscounter"></a>
<a id="schema_ProgressCounter"></a>
<a id="tocSprogresscounter"></a>
<a id="tocsprogresscounter"></a>

```json
{
  "failure": "string",
  "pending": "string",
  "success": "string"
}
```

ProgressCounter provides counters to describe an operation's progress.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failure|string(int64)|false|none|The number of units that failed in the operation.|
|pending|string(int64)|false|none|The number of units that are pending in the operation.|
|success|string(int64)|false|none|The number of units that succeeded in the operation.|

<h2 id="tocS_QueryAccessibleDataRequest">QueryAccessibleDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemaqueryaccessibledatarequest"></a>
<a id="schema_QueryAccessibleDataRequest"></a>
<a id="tocSqueryaccessibledatarequest"></a>
<a id="tocsqueryaccessibledatarequest"></a>

```json
{
  "gcsDestination": {
    "uriPrefix": "string"
  },
  "requestAttributes": {
    "property1": "string",
    "property2": "string"
  },
  "resourceAttributes": {
    "property1": "string",
    "property2": "string"
  }
}
```

Queries all data_ids that are consented for a given use in the given consent store and writes them to a specified destination. The returned Operation includes a progress counter for the number of User data mappings processed. Errors are logged to Cloud Logging (see [Viewing error logs in Cloud Logging] (https://cloud.google.com/healthcare/docs/how-tos/logging) and [QueryAccessibleData] for a sample log entry).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsDestination|[GoogleCloudHealthcareV1beta1ConsentGcsDestination](#schemagooglecloudhealthcarev1beta1consentgcsdestination)|false|none|The Cloud Storage destination. The Cloud Healthcare API service account must have the `roles/storage.objectAdmin` Cloud IAM role for this Cloud Storage location. The object name is in the following format: query-accessible-data-result-{operation_id}.txt where each line contains a single data_id.|
|requestAttributes|object|false|none|The values of request attributes associated with this access request.|
|resourceAttributes|object|false|none|Optional. The values of resource attributes associated with the type of resources being requested. If no values are specified, then all resource types are included in the output.|

<h2 id="tocS_QueryAccessibleDataResponse">QueryAccessibleDataResponse</h2>
<!-- backwards compatibility -->
<a id="schemaqueryaccessibledataresponse"></a>
<a id="schema_QueryAccessibleDataResponse"></a>
<a id="tocSqueryaccessibledataresponse"></a>
<a id="tocsqueryaccessibledataresponse"></a>

```json
{
  "gcsUris": [
    "string"
  ]
}
```

Response for successful QueryAccessibleData operations. This structure is included in the response upon operation completion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsUris|[string]|false|none|List of files, each of which contains a list of data_id(s) that are consented for a specified use in the request.|

<h2 id="tocS_RecurseTag">RecurseTag</h2>
<!-- backwards compatibility -->
<a id="schemarecursetag"></a>
<a id="schema_RecurseTag"></a>
<a id="tocSrecursetag"></a>
<a id="tocsrecursetag"></a>

```json
{}
```

Recursively apply DICOM de-id to tags nested in a sequence. Supported [Value Representation] (http://dicom.nema.org/medical/dicom/2018e/output/chtml/part05/sect_6.2.html#table_6.2-1): SQ

<h2 id="tocS_RedactConfig">RedactConfig</h2>
<!-- backwards compatibility -->
<a id="schemaredactconfig"></a>
<a id="schema_RedactConfig"></a>
<a id="tocSredactconfig"></a>
<a id="tocsredactconfig"></a>

```json
{}
```

Define how to redact sensitive values. Default behaviour is erase. For example, "My name is Jane." becomes "My name is ."

<h2 id="tocS_RegenUidTag">RegenUidTag</h2>
<!-- backwards compatibility -->
<a id="schemaregenuidtag"></a>
<a id="schema_RegenUidTag"></a>
<a id="tocSregenuidtag"></a>
<a id="tocsregenuidtag"></a>

```json
{}
```

Replace UID with a new generated UID. Supported [Value Representation] (http://dicom.nema.org/medical/dicom/2018e/output/chtml/part05/sect_6.2.html#table_6.2-1): UI

<h2 id="tocS_RejectConsentRequest">RejectConsentRequest</h2>
<!-- backwards compatibility -->
<a id="schemarejectconsentrequest"></a>
<a id="schema_RejectConsentRequest"></a>
<a id="tocSrejectconsentrequest"></a>
<a id="tocsrejectconsentrequest"></a>

```json
{
  "consentArtifact": "string"
}
```

Rejects the latest revision of the specified Consent by committing a new revision with `state` updated to `REJECTED`. If the latest revision of the given Consent is in the `REJECTED` state, no new revision is committed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consentArtifact|string|false|none|Optional. The resource name of the Consent artifact that contains documentation of the user's rejection of the draft Consent, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consentArtifacts/{consent_artifact_id}`. If the draft Consent had a Consent artifact, this Consent artifact overwrites it.|

<h2 id="tocS_RemoveField">RemoveField</h2>
<!-- backwards compatibility -->
<a id="schemaremovefield"></a>
<a id="schema_RemoveField"></a>
<a id="tocSremovefield"></a>
<a id="tocsremovefield"></a>

```json
{}
```

Remove field.

<h2 id="tocS_RemoveTag">RemoveTag</h2>
<!-- backwards compatibility -->
<a id="schemaremovetag"></a>
<a id="schema_RemoveTag"></a>
<a id="tocSremovetag"></a>
<a id="tocsremovetag"></a>

```json
{}
```

Replace with empty tag.

<h2 id="tocS_ReplaceWithInfoTypeConfig">ReplaceWithInfoTypeConfig</h2>
<!-- backwards compatibility -->
<a id="schemareplacewithinfotypeconfig"></a>
<a id="schema_ReplaceWithInfoTypeConfig"></a>
<a id="tocSreplacewithinfotypeconfig"></a>
<a id="tocsreplacewithinfotypeconfig"></a>

```json
{}
```

When using the INSPECT_AND_TRANSFORM action, each match is replaced with the name of the info_type. For example, "My name is Jane" becomes "My name is [PERSON_NAME]." The TRANSFORM action is equivalent to redacting.

<h2 id="tocS_ResetTag">ResetTag</h2>
<!-- backwards compatibility -->
<a id="schemaresettag"></a>
<a id="schema_ResetTag"></a>
<a id="tocSresettag"></a>
<a id="tocsresettag"></a>

```json
{}
```

Reset tag to a placeholder value.

<h2 id="tocS_ResourceAnnotation">ResourceAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemaresourceannotation"></a>
<a id="schema_ResourceAnnotation"></a>
<a id="tocSresourceannotation"></a>
<a id="tocsresourceannotation"></a>

```json
{
  "label": "string"
}
```

Resource level annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|false|none|A description of the annotation record.|

<h2 id="tocS_Resources">Resources</h2>
<!-- backwards compatibility -->
<a id="schemaresources"></a>
<a id="schema_Resources"></a>
<a id="tocSresources"></a>
<a id="tocsresources"></a>

```json
{
  "resources": [
    "string"
  ]
}
```

A list of FHIR resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resources|[string]|false|none|List of resources IDs. For example, "Patient/1234".|

<h2 id="tocS_Result">Result</h2>
<!-- backwards compatibility -->
<a id="schemaresult"></a>
<a id="schema_Result"></a>
<a id="tocSresult"></a>
<a id="tocsresult"></a>

```json
{
  "consentDetails": {
    "property1": {
      "evaluationResult": "EVALUATION_RESULT_UNSPECIFIED"
    },
    "property2": {
      "evaluationResult": "EVALUATION_RESULT_UNSPECIFIED"
    }
  },
  "consented": true,
  "dataId": "string"
}
```

The consent evaluation result for a single `data_id`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consentDetails|object|false|none|The resource names of all evaluated Consents mapped to their evaluation.|
|consented|boolean|false|none|Whether the resource is consented for the given use.|
|dataId|string|false|none|The unique identifier of the evaluated resource.|

<h2 id="tocS_RevokeConsentRequest">RevokeConsentRequest</h2>
<!-- backwards compatibility -->
<a id="schemarevokeconsentrequest"></a>
<a id="schema_RevokeConsentRequest"></a>
<a id="tocSrevokeconsentrequest"></a>
<a id="tocsrevokeconsentrequest"></a>

```json
{
  "consentArtifact": "string"
}
```

Revokes the latest revision of the specified Consent by committing a new revision with `state` updated to `REVOKED`. If the latest revision of the given Consent is in the `REVOKED` state, no new revision is committed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consentArtifact|string|false|none|Optional. The resource name of the Consent artifact that contains proof of the user's revocation of the Consent, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/consentArtifacts/{consent_artifact_id}`.|

<h2 id="tocS_SchemaConfig">SchemaConfig</h2>
<!-- backwards compatibility -->
<a id="schemaschemaconfig"></a>
<a id="schema_SchemaConfig"></a>
<a id="tocSschemaconfig"></a>
<a id="tocsschemaconfig"></a>

```json
{
  "lastUpdatedPartitionConfig": {
    "expirationMs": "string",
    "type": "PARTITION_TYPE_UNSPECIFIED"
  },
  "recursiveStructureDepth": "string",
  "schemaType": "SCHEMA_TYPE_UNSPECIFIED"
}
```

Configuration for the FHIR BigQuery schema. Determines how the server generates the schema.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastUpdatedPartitionConfig|[TimePartitioning](#schematimepartitioning)|false|none|The configuration for exported BigQuery tables to be partitioned by FHIR resource's last updated time column.|
|recursiveStructureDepth|string(int64)|false|none|The depth for all recursive structures in the output analytics schema. For example, `concept` in the CodeSystem resource is a recursive structure; when the depth is 2, the CodeSystem table will have a column called `concept.concept` but not `concept.concept.concept`. If not specified or set to 0, the server will use the default value 2. The maximum depth allowed is 5.|
|schemaType|string|false|none|Specifies the output schema type. Schema type is required.|

#### Enumerated Values

|Property|Value|
|---|---|
|schemaType|SCHEMA_TYPE_UNSPECIFIED|
|schemaType|LOSSLESS|
|schemaType|ANALYTICS|
|schemaType|ANALYTICS_V2|

<h2 id="tocS_SchemaGroup">SchemaGroup</h2>
<!-- backwards compatibility -->
<a id="schemaschemagroup"></a>
<a id="schema_SchemaGroup"></a>
<a id="tocSschemagroup"></a>
<a id="tocsschemagroup"></a>

```json
{
  "choice": true,
  "maxOccurs": 0,
  "members": [
    {
      "group": {},
      "segment": {
        "maxOccurs": 0,
        "minOccurs": 0,
        "type": "string"
      }
    }
  ],
  "minOccurs": 0,
  "name": "string"
}
```

An HL7v2 logical group construct.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|choice|boolean|false|none|True indicates that this is a choice group, meaning that only one of its segments can exist in a given message.|
|maxOccurs|integer(int32)|false|none|The maximum number of times this group can be repeated. 0 or -1 means unbounded.|
|members|[[GroupOrSegment](#schemagrouporsegment)]|false|none|Nested groups and/or segments.|
|minOccurs|integer(int32)|false|none|The minimum number of times this group must be present/repeated.|
|name|string|false|none|The name of this group. For example, "ORDER_DETAIL".|

<h2 id="tocS_SchemaPackage">SchemaPackage</h2>
<!-- backwards compatibility -->
<a id="schemaschemapackage"></a>
<a id="schema_SchemaPackage"></a>
<a id="tocSschemapackage"></a>
<a id="tocsschemapackage"></a>

```json
{
  "ignoreMinOccurs": true,
  "schemas": [
    {
      "messageSchemaConfigs": {
        "property1": {
          "choice": true,
          "maxOccurs": 0,
          "members": [
            {}
          ],
          "minOccurs": 0,
          "name": "string"
        },
        "property2": {
          "choice": true,
          "maxOccurs": 0,
          "members": [
            {}
          ],
          "minOccurs": 0,
          "name": "string"
        }
      },
      "version": [
        {
          "mshField": "string",
          "value": "string"
        }
      ]
    }
  ],
  "schematizedParsingType": "SCHEMATIZED_PARSING_TYPE_UNSPECIFIED",
  "types": [
    {
      "type": [
        {
          "fields": [
            {
              "maxOccurs": 0,
              "minOccurs": 0,
              "name": "string",
              "table": "string",
              "type": "string"
            }
          ],
          "name": "string",
          "primitive": "PRIMITIVE_UNSPECIFIED"
        }
      ],
      "version": [
        {
          "mshField": "string",
          "value": "string"
        }
      ]
    }
  ],
  "unexpectedSegmentHandling": "UNEXPECTED_SEGMENT_HANDLING_MODE_UNSPECIFIED"
}
```

A schema package contains a set of schemas and type definitions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ignoreMinOccurs|boolean|false|none|Flag to ignore all min_occurs restrictions in the schema. This means that incoming messages can omit any group, segment, field, component, or subcomponent.|
|schemas|[[Hl7SchemaConfig](#schemahl7schemaconfig)]|false|none|Schema configs that are layered based on their VersionSources that match the incoming message. Schema configs present in higher indices override those in lower indices with the same message type and trigger event if their VersionSources all match an incoming message.|
|schematizedParsingType|string|false|none|Determines how messages that fail to parse are handled.|
|types|[[Hl7TypesConfig](#schemahl7typesconfig)]|false|none|Schema type definitions that are layered based on their VersionSources that match the incoming message. Type definitions present in higher indices override those in lower indices with the same type name if their VersionSources all match an incoming message.|
|unexpectedSegmentHandling|string|false|none|Determines how unexpected segments (segments not matched to the schema) are handled.|

#### Enumerated Values

|Property|Value|
|---|---|
|schematizedParsingType|SCHEMATIZED_PARSING_TYPE_UNSPECIFIED|
|schematizedParsingType|SOFT_FAIL|
|schematizedParsingType|HARD_FAIL|
|unexpectedSegmentHandling|UNEXPECTED_SEGMENT_HANDLING_MODE_UNSPECIFIED|
|unexpectedSegmentHandling|FAIL|
|unexpectedSegmentHandling|SKIP|
|unexpectedSegmentHandling|PARSE|

<h2 id="tocS_SchemaSegment">SchemaSegment</h2>
<!-- backwards compatibility -->
<a id="schemaschemasegment"></a>
<a id="schema_SchemaSegment"></a>
<a id="tocSschemasegment"></a>
<a id="tocsschemasegment"></a>

```json
{
  "maxOccurs": 0,
  "minOccurs": 0,
  "type": "string"
}
```

An HL7v2 Segment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxOccurs|integer(int32)|false|none|The maximum number of times this segment can be present in this group. 0 or -1 means unbounded.|
|minOccurs|integer(int32)|false|none|The minimum number of times this segment can be present in this group.|
|type|string|false|none|The Segment type. For example, "PID".|

<h2 id="tocS_SchematizedData">SchematizedData</h2>
<!-- backwards compatibility -->
<a id="schemaschematizeddata"></a>
<a id="schema_SchematizedData"></a>
<a id="tocSschematizeddata"></a>
<a id="tocsschematizeddata"></a>

```json
{
  "data": "string",
  "error": "string"
}
```

The content of an HL7v2 message in a structured format as specified by a schema.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|false|none|JSON output of the parser.|
|error|string|false|none|The error output of the parser.|

<h2 id="tocS_SearchConfig">SearchConfig</h2>
<!-- backwards compatibility -->
<a id="schemasearchconfig"></a>
<a id="schema_SearchConfig"></a>
<a id="tocSsearchconfig"></a>
<a id="tocssearchconfig"></a>

```json
{
  "searchParameters": [
    {
      "canonicalUrl": "string",
      "parameter": "string"
    }
  ]
}
```

Contains the configuration for FHIR search.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|searchParameters|[[SearchParameter](#schemasearchparameter)]|false|none|A list of search parameters in this FHIR store that are used to configure this FHIR store.|

<h2 id="tocS_SearchParameter">SearchParameter</h2>
<!-- backwards compatibility -->
<a id="schemasearchparameter"></a>
<a id="schema_SearchParameter"></a>
<a id="tocSsearchparameter"></a>
<a id="tocssearchparameter"></a>

```json
{
  "canonicalUrl": "string",
  "parameter": "string"
}
```

Contains the versioned name and the URL for one SearchParameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canonicalUrl|string|false|none|The canonical url of the search parameter resource.|
|parameter|string|false|none|The versioned name of the search parameter resource. The format is projects/{project-id}/locations/{location}/datasets/{dataset-id}/fhirStores/{fhirStore-id}/fhir/SearchParameter/{resource-id}/_history/{version-id} For fhir stores with disable_resource_versioning=true, the format is projects/{project-id}/locations/{location}/datasets/{dataset-id}/fhirStores/{fhirStore-id}/fhir/SearchParameter/{resource-id}/|

<h2 id="tocS_SearchResourcesRequest">SearchResourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchresourcesrequest"></a>
<a id="schema_SearchResourcesRequest"></a>
<a id="tocSsearchresourcesrequest"></a>
<a id="tocssearchresourcesrequest"></a>

```json
{
  "resourceType": "string"
}
```

Request to search the resources in the specified FHIR store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|string|false|none|The FHIR resource type to search, such as Patient or Observation. For a complete list, see the FHIR Resource Index ([DSTU2](https://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](https://hl7.org/implement/standards/fhir/STU3/resourcelist.html), [R4](https://hl7.org/implement/standards/fhir/R4/resourcelist.html)).|

<h2 id="tocS_Segment">Segment</h2>
<!-- backwards compatibility -->
<a id="schemasegment"></a>
<a id="schema_Segment"></a>
<a id="tocSsegment"></a>
<a id="tocssegment"></a>

```json
{
  "fields": {
    "property1": "string",
    "property2": "string"
  },
  "segmentId": "string",
  "setId": "string"
}
```

A segment in a structured format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|object|false|none|A mapping from the positional location to the value. The key string uses zero-based indexes separated by dots to identify Fields, components and sub-components. A bracket notation is also used to identify different instances of a repeated field. Regex for key: (\d+)(\[\d+\])?(.\d+)?(.\d+)? Examples of (key, value) pairs: * (0.1, "hemoglobin") denotes that the first component of Field 0 has the value "hemoglobin". * (1.1.2, "CBC") denotes that the second sub-component of the first component of Field 1 has the value "CBC". * (1[0].1, "HbA1c") denotes that the first component of the first Instance of Field 1, which is repeated, has the value "HbA1c".|
|segmentId|string|false|none|A string that indicates the type of segment. For example, EVN or PID.|
|setId|string|false|none|Set ID for segments that can be in a set. This can be empty if it's missing or isn't applicable.|

<h2 id="tocS_SensitiveTextAnnotation">SensitiveTextAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemasensitivetextannotation"></a>
<a id="schema_SensitiveTextAnnotation"></a>
<a id="tocSsensitivetextannotation"></a>
<a id="tocssensitivetextannotation"></a>

```json
{
  "details": {
    "property1": {
      "findings": [
        {
          "end": "string",
          "infoType": "string",
          "quote": "string",
          "start": "string"
        }
      ]
    },
    "property2": {
      "findings": [
        {
          "end": "string",
          "infoType": "string",
          "quote": "string",
          "start": "string"
        }
      ]
    }
  }
}
```

A TextAnnotation specifies a text range that includes sensitive information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|object|false|none|Maps from a resource slice. For example, FHIR resource field path to a set of sensitive text findings. For example, Appointment.Narrative text1 --> {findings_1, findings_2, findings_3}|

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

<h2 id="tocS_Signature">Signature</h2>
<!-- backwards compatibility -->
<a id="schemasignature"></a>
<a id="schema_Signature"></a>
<a id="tocSsignature"></a>
<a id="tocssignature"></a>

```json
{
  "image": {
    "gcsUri": "string",
    "rawBytes": "string"
  },
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "signatureTime": "string",
  "userId": "string"
}
```

User signature.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image|[Image](#schemaimage)|false|none|Optional. An image of the user's signature.|
|metadata|object|false|none|Optional. Metadata associated with the user's signature. For example, the user's name or the user's title.|
|signatureTime|string(google-datetime)|false|none|Optional. Timestamp of the signature.|
|userId|string|false|none|Required. User's UUID provided by the client.|

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

<h2 id="tocS_StreamConfig">StreamConfig</h2>
<!-- backwards compatibility -->
<a id="schemastreamconfig"></a>
<a id="schema_StreamConfig"></a>
<a id="tocSstreamconfig"></a>
<a id="tocsstreamconfig"></a>

```json
{
  "bigqueryDestination": {
    "datasetUri": "string",
    "force": true,
    "schemaConfig": {
      "lastUpdatedPartitionConfig": {
        "expirationMs": "string",
        "type": "PARTITION_TYPE_UNSPECIFIED"
      },
      "recursiveStructureDepth": "string",
      "schemaType": "SCHEMA_TYPE_UNSPECIFIED"
    },
    "writeDisposition": "WRITE_DISPOSITION_UNSPECIFIED"
  },
  "deidentifiedStoreDestination": {
    "config": {
      "annotation": {
        "annotationStoreName": "string",
        "storeQuote": true
      },
      "dicom": {
        "filterProfile": "TAG_FILTER_PROFILE_UNSPECIFIED",
        "keepList": {
          "tags": [
            "string"
          ]
        },
        "removeList": {
          "tags": [
            "string"
          ]
        },
        "skipIdRedaction": true
      },
      "dicomTagConfig": {
        "actions": [
          {
            "cleanImageTag": {
              "additionalInfoTypes": [
                "string"
              ],
              "excludeInfoTypes": [
                "string"
              ],
              "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
            },
            "cleanTextTag": {},
            "deleteTag": {},
            "keepTag": {},
            "queries": [
              "string"
            ],
            "recurseTag": {},
            "regenUidTag": {},
            "removeTag": {},
            "resetTag": {}
          }
        ],
        "options": {
          "cleanDescriptors": {},
          "cleanImage": {
            "additionalInfoTypes": [
              "string"
            ],
            "excludeInfoTypes": [
              "string"
            ],
            "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
          },
          "primaryIds": "PRIMARY_IDS_OPTION_UNSPECIFIED"
        },
        "profileType": "PROFILE_TYPE_UNSPECIFIED"
      },
      "fhir": {
        "defaultKeepExtensions": true,
        "fieldMetadataList": [
          {
            "action": "ACTION_UNSPECIFIED",
            "paths": [
              "string"
            ]
          }
        ]
      },
      "fhirFieldConfig": {
        "fieldMetadataList": [
          {
            "characterMaskField": {},
            "cleanTextField": {},
            "cryptoHashField": {},
            "dateShiftField": {},
            "keepField": {},
            "paths": [
              "string"
            ],
            "removeField": {}
          }
        ],
        "options": {
          "characterMaskConfig": {
            "maskingCharacter": "string"
          },
          "contextualDeid": {},
          "cryptoHashConfig": {
            "cryptoKey": "string",
            "kmsWrapped": {
              "cryptoKey": "string",
              "wrappedKey": "string"
            }
          },
          "dateShiftConfig": {
            "cryptoKey": "string",
            "kmsWrapped": {
              "cryptoKey": "string",
              "wrappedKey": "string"
            }
          },
          "keepExtensions": {}
        },
        "profileType": "PROFILE_TYPE_UNSPECIFIED"
      },
      "image": {
        "additionalInfoTypes": [
          "string"
        ],
        "excludeInfoTypes": [
          "string"
        ],
        "textRedactionMode": "TEXT_REDACTION_MODE_UNSPECIFIED"
      },
      "operationMetadata": {
        "fhirOutput": {
          "fhirStore": "string"
        }
      },
      "text": {
        "additionalTransformations": [
          {
            "characterMaskConfig": {
              "maskingCharacter": "string"
            },
            "cryptoHashConfig": {
              "cryptoKey": "string",
              "kmsWrapped": {
                "cryptoKey": "string",
                "wrappedKey": "string"
              }
            },
            "dateShiftConfig": {
              "cryptoKey": "string",
              "kmsWrapped": {
                "cryptoKey": "string",
                "wrappedKey": "string"
              }
            },
            "infoTypes": [
              "string"
            ],
            "redactConfig": {},
            "replaceWithInfoTypeConfig": {}
          }
        ],
        "excludeInfoTypes": [
          "string"
        ],
        "profileType": "PROFILE_TYPE_UNSPECIFIED",
        "transformations": [
          {
            "characterMaskConfig": {
              "maskingCharacter": "string"
            },
            "cryptoHashConfig": {
              "cryptoKey": "string",
              "kmsWrapped": {
                "cryptoKey": "string",
                "wrappedKey": "string"
              }
            },
            "dateShiftConfig": {
              "cryptoKey": "string",
              "kmsWrapped": {
                "cryptoKey": "string",
                "wrappedKey": "string"
              }
            },
            "infoTypes": [
              "string"
            ],
            "redactConfig": {},
            "replaceWithInfoTypeConfig": {}
          }
        ]
      }
    },
    "store": "string"
  },
  "resourceTypes": [
    "string"
  ]
}
```

Contains configuration for streaming FHIR export.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigqueryDestination|[GoogleCloudHealthcareV1beta1FhirBigQueryDestination](#schemagooglecloudhealthcarev1beta1fhirbigquerydestination)|false|none|The destination BigQuery structure that contains both the dataset location and corresponding schema config. The output is organized in one table per resource type. The server reuses the existing tables (if any) that are named after the resource types, e.g. "Patient", "Observation". When there is no existing table for a given resource type, the server attempts to create one. When a table schema doesn't align with the schema config, either because of existing incompatible schema or out of band incompatible modification, the server does not stream in new data. One resolution in this case is to delete the incompatible table and let the server recreate one, though the newly created table only contains data after the table recreation. BigQuery imposes a 1 MB limit on streaming insert row size, therefore any resource mutation that generates more than 1 MB of BigQuery data will not be streamed. Results are written to BigQuery tables according to the parameters in BigQueryDestination.WriteDisposition. Different versions of the same resource are distinguishable by the meta.versionId and meta.lastUpdated columns. The operation (CREATE/UPDATE/DELETE) that results in the new version is recorded in the meta.tag. The tables contain all historical resource versions since streaming was enabled. For query convenience, the server also creates one view per table of the same name containing only the current resource version. The streamed data in the BigQuery dataset is not guaranteed to be completely unique. The combination of the id and meta.versionId columns should ideally identify a single unique row. But in rare cases, duplicates may exist. At query time, users may use the SQL select statement to keep only one of the duplicate rows given an id and meta.versionId pair. Alternatively, the server created view mentioned above also filters out duplicates. If a resource mutation cannot be streamed to BigQuery, errors will be logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)).|
|deidentifiedStoreDestination|[DeidentifiedStoreDestination](#schemadeidentifiedstoredestination)|false|none|The destination FHIR store for de-identified resources. After this field is added, all subsequent creates/updates/patches to the source store will be de-identified using the provided configuration and applied to the destination store. Importing resources to the source store will not trigger the streaming. If the source store already contains resources when this option is enabled, those resources will not be copied to the destination store unless they are subsequently updated. This may result in invalid references in the destination store. Before adding this config, you must grant the healthcare.fhirResources.update permission on the destination store to your project's **Cloud Healthcare Service Agent** [service account](https://cloud.google.com/healthcare/docs/how-tos/permissions-healthcare-api-gcp-products#the_cloud_healthcare_service_agent). The destination store must set enable_update_create to true. The destination store must have disable_referential_integrity set to true. If a resource cannot be de-identified, errors will be logged to Cloud Logging (see [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging)).|
|resourceTypes|[string]|false|none|Supply a FHIR resource type (such as "Patient" or "Observation"). See https://www.hl7.org/fhir/valueset-resource-types.html for a list of all FHIR resource types. The server treats an empty list as an intent to stream all the supported resource types in this FHIR store.|

<h2 id="tocS_TagFilterList">TagFilterList</h2>
<!-- backwards compatibility -->
<a id="schematagfilterlist"></a>
<a id="schema_TagFilterList"></a>
<a id="tocStagfilterlist"></a>
<a id="tocstagfilterlist"></a>

```json
{
  "tags": [
    "string"
  ]
}
```

List of tags to be filtered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tags|[string]|false|none|Tags to be filtered. Tags must be DICOM Data Elements, File Meta Elements, or Directory Structuring Elements, as defined at: http://dicom.nema.org/medical/dicom/current/output/html/part06.html#table_6-1,. They may be provided by "Keyword" or "Tag". For example, "PatientID", "00100010".|

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

<h2 id="tocS_TextConfig">TextConfig</h2>
<!-- backwards compatibility -->
<a id="schematextconfig"></a>
<a id="schema_TextConfig"></a>
<a id="tocStextconfig"></a>
<a id="tocstextconfig"></a>

```json
{
  "additionalTransformations": [
    {
      "characterMaskConfig": {
        "maskingCharacter": "string"
      },
      "cryptoHashConfig": {
        "cryptoKey": "string",
        "kmsWrapped": {
          "cryptoKey": "string",
          "wrappedKey": "string"
        }
      },
      "dateShiftConfig": {
        "cryptoKey": "string",
        "kmsWrapped": {
          "cryptoKey": "string",
          "wrappedKey": "string"
        }
      },
      "infoTypes": [
        "string"
      ],
      "redactConfig": {},
      "replaceWithInfoTypeConfig": {}
    }
  ],
  "excludeInfoTypes": [
    "string"
  ],
  "profileType": "PROFILE_TYPE_UNSPECIFIED",
  "transformations": [
    {
      "characterMaskConfig": {
        "maskingCharacter": "string"
      },
      "cryptoHashConfig": {
        "cryptoKey": "string",
        "kmsWrapped": {
          "cryptoKey": "string",
          "wrappedKey": "string"
        }
      },
      "dateShiftConfig": {
        "cryptoKey": "string",
        "kmsWrapped": {
          "cryptoKey": "string",
          "wrappedKey": "string"
        }
      },
      "infoTypes": [
        "string"
      ],
      "redactConfig": {},
      "replaceWithInfoTypeConfig": {}
    }
  ]
}
```

Configures how to transform sensitive text `InfoTypes`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalTransformations|[[InfoTypeTransformation](#schemainfotypetransformation)]|false|none|Additional transformations to apply to the detected data, overriding `profile`.|
|excludeInfoTypes|[string]|false|none|InfoTypes to skip transforming, overriding `profile`.|
|profileType|string|false|none|Base profile type for text transformation.|
|transformations|[[InfoTypeTransformation](#schemainfotypetransformation)]|false|none|The transformations to apply to the detected data. Deprecated. Use `additional_transformations` instead.|

#### Enumerated Values

|Property|Value|
|---|---|
|profileType|PROFILE_TYPE_UNSPECIFIED|
|profileType|EMPTY|
|profileType|BASIC|

<h2 id="tocS_TextSpan">TextSpan</h2>
<!-- backwards compatibility -->
<a id="schematextspan"></a>
<a id="schema_TextSpan"></a>
<a id="tocStextspan"></a>
<a id="tocstextspan"></a>

```json
{
  "beginOffset": 0,
  "content": "string"
}
```

A span of text in the provided document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|beginOffset|integer(int32)|false|none|The unicode codepoint index of the beginning of this span.|
|content|string|false|none|The original text contained in this span.|

<h2 id="tocS_TimePartitioning">TimePartitioning</h2>
<!-- backwards compatibility -->
<a id="schematimepartitioning"></a>
<a id="schema_TimePartitioning"></a>
<a id="tocStimepartitioning"></a>
<a id="tocstimepartitioning"></a>

```json
{
  "expirationMs": "string",
  "type": "PARTITION_TYPE_UNSPECIFIED"
}
```

Configuration for FHIR BigQuery time-partitioned tables.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expirationMs|string(int64)|false|none|Number of milliseconds for which to keep the storage for a partition.|
|type|string|false|none|Type of partitioning.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|PARTITION_TYPE_UNSPECIFIED|
|type|HOUR|
|type|DAY|
|type|MONTH|
|type|YEAR|

<h2 id="tocS_Type">Type</h2>
<!-- backwards compatibility -->
<a id="schematype"></a>
<a id="schema_Type"></a>
<a id="tocStype"></a>
<a id="tocstype"></a>

```json
{
  "fields": [
    {
      "maxOccurs": 0,
      "minOccurs": 0,
      "name": "string",
      "table": "string",
      "type": "string"
    }
  ],
  "name": "string",
  "primitive": "PRIMITIVE_UNSPECIFIED"
}
```

A type definition for some HL7v2 type (incl. Segments and Datatypes).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|[[Field](#schemafield)]|false|none|The (sub) fields this type has (if not primitive).|
|name|string|false|none|The name of this type. This would be the segment or datatype name. For example, "PID" or "XPN".|
|primitive|string|false|none|If this is a primitive type then this field is the type of the primitive For example, STRING. Leave unspecified for composite types.|

#### Enumerated Values

|Property|Value|
|---|---|
|primitive|PRIMITIVE_UNSPECIFIED|
|primitive|STRING|
|primitive|VARIES|
|primitive|UNESCAPED_STRING|

<h2 id="tocS_UserDataMapping">UserDataMapping</h2>
<!-- backwards compatibility -->
<a id="schemauserdatamapping"></a>
<a id="schema_UserDataMapping"></a>
<a id="tocSuserdatamapping"></a>
<a id="tocsuserdatamapping"></a>

```json
{
  "archiveTime": "string",
  "archived": true,
  "dataId": "string",
  "name": "string",
  "resourceAttributes": [
    {
      "attributeDefinitionId": "string",
      "values": [
        "string"
      ]
    }
  ],
  "userId": "string"
}
```

Maps a resource to the associated user and Attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archiveTime|string(google-datetime)|false|read-only|Output only. Indicates the time when this mapping was archived.|
|archived|boolean|false|read-only|Output only. Indicates whether this mapping is archived.|
|dataId|string|false|none|Required. A unique identifier for the mapped resource.|
|name|string|false|none|Resource name of the User data mapping, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/userDataMappings/{user_data_mapping_id}`.|
|resourceAttributes|[[Attribute](#schemaattribute)]|false|none|Attributes of the resource. Only explicitly set attributes are displayed here. Attribute definitions with defaults set implicitly apply to these User data mappings. Attributes listed here must be single valued, that is, exactly one value is specified for the field "values" in each Attribute.|
|userId|string|false|none|Required. User's UUID provided by the client.|

<h2 id="tocS_ValidationConfig">ValidationConfig</h2>
<!-- backwards compatibility -->
<a id="schemavalidationconfig"></a>
<a id="schema_ValidationConfig"></a>
<a id="tocSvalidationconfig"></a>
<a id="tocsvalidationconfig"></a>

```json
{
  "disableFhirpathValidation": true,
  "disableProfileValidation": true,
  "disableReferenceTypeValidation": true,
  "disableRequiredFieldValidation": true,
  "enabledImplementationGuides": [
    "string"
  ]
}
```

Contains the configuration for FHIR profiles and validation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disableFhirpathValidation|boolean|false|none|Whether to disable FHIRPath validation for incoming resources. Set this to true to disable checking incoming resources for conformance against FHIRPath requirement defined in the FHIR specification. This property only affects resource types that do not have profiles configured for them, any rules in enabled implementation guides will still be enforced.|
|disableProfileValidation|boolean|false|none|Whether to disable profile validation for this FHIR store. Set this to true to disable checking incoming resources for conformance against StructureDefinitions in this FHIR store.|
|disableReferenceTypeValidation|boolean|false|none|Whether to disable reference type validation for incoming resources. Set this to true to disable checking incoming resources for conformance against reference type requirement defined in the FHIR specification. This property only affects resource types that do not have profiles configured for them, any rules in enabled implementation guides will still be enforced.|
|disableRequiredFieldValidation|boolean|false|none|Whether to disable required fields validation for incoming resources. Set this to true to disable checking incoming resources for conformance against required fields requirement defined in the FHIR specification. This property only affects resource types that do not have profiles configured for them, any rules in enabled implementation guides will still be enforced.|
|enabledImplementationGuides|[string]|false|none|A list of ImplementationGuide URLs in this FHIR store that are used to configure the profiles to use for validation. For example, to use the US Core profiles for validation, set `enabled_implementation_guides` to `["http://hl7.org/fhir/us/core/ImplementationGuide/ig"]`. If `enabled_implementation_guides` is empty or omitted, then incoming resources are only required to conform to the base FHIR profiles. Otherwise, a resource must conform to at least one profile listed in the `global` property of one of the enabled ImplementationGuides. The Cloud Healthcare API does not currently enforce all of the rules in a StructureDefinition. The following rules are supported: - min/max - minValue/maxValue - maxLength - type - fixed[x] - pattern[x] on simple types - slicing, when using "value" as the discriminator type When a URL cannot be resolved (for example, in a type assertion), the server does not return an error.|

<h2 id="tocS_VersionSource">VersionSource</h2>
<!-- backwards compatibility -->
<a id="schemaversionsource"></a>
<a id="schema_VersionSource"></a>
<a id="tocSversionsource"></a>
<a id="tocsversionsource"></a>

```json
{
  "mshField": "string",
  "value": "string"
}
```

Describes a selector for extracting and matching an MSH field to a value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mshField|string|false|none|The field to extract from the MSH segment. For example, "3.1" or "18[1].1".|
|value|string|false|none|The value to match with the field. For example, "My Application Name" or "2.3".|

<h2 id="tocS_Vertex">Vertex</h2>
<!-- backwards compatibility -->
<a id="schemavertex"></a>
<a id="schema_Vertex"></a>
<a id="tocSvertex"></a>
<a id="tocsvertex"></a>

```json
{
  "x": 0,
  "y": 0
}
```

A 2D coordinate in an image. The origin is the top-left.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|number(float)|false|none|X coordinate.|
|y|number(float)|false|none|Y coordinate.|
