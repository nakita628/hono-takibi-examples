<h1 id="contact-center-ai-platform-api">Contact Center AI Platform API v1alpha1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://contactcenteraiplatform.googleapis.com/">https://contactcenteraiplatform.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/solutions/contact-center-ai-platform">External documentation</a>

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

<h1 id="contact-center-ai-platform-api-projects">projects</h1>

## contactcenteraiplatform.projects.locations.operations.get

<a id="opIdcontactcenteraiplatform.projects.locations.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{name}`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<h3 id="contactcenteraiplatformprojectslocationsoperationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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

<h3 id="contactcenteraiplatformprojectslocationsoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## contactcenteraiplatform.projects.locations.operations.delete

<a id="opIdcontactcenteraiplatform.projects.locations.operations.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1alpha1/{name}`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

<h3 id="contactcenteraiplatformprojectslocationsoperationsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource to be deleted.|
|requestId|query|string|false|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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

<h3 id="contactcenteraiplatformprojectslocationsoperationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## contactcenteraiplatform.projects.locations.contactCenters.patch

<a id="opIdcontactcenteraiplatform.projects.locations.contactCenters.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "adminUser": {
      "familyName": "string",
      "givenName": "string"
    },
    "ccaipManagedUsers": true,
    "customerDomainPrefix": "string",
    "displayName": "string",
    "instanceConfig": {
      "instanceSize": "INSTANCE_SIZE_UNSPECIFIED"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "samlParams": {
      "certificate": "string",
      "entityId": "string",
      "ssoUri": "string",
      "userEmail": "string"
    },
    "userEmail": "string"
  }'
```

`PATCH /v1alpha1/{name}`

Updates the parameters of a single ContactCenter.

> Body parameter

```json
{
  "adminUser": {
    "familyName": "string",
    "givenName": "string"
  },
  "ccaipManagedUsers": true,
  "customerDomainPrefix": "string",
  "displayName": "string",
  "instanceConfig": {
    "instanceSize": "INSTANCE_SIZE_UNSPECIFIED"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "samlParams": {
    "certificate": "string",
    "entityId": "string",
    "ssoUri": "string",
    "userEmail": "string"
  },
  "userEmail": "string"
}
```

<h3 id="contactcenteraiplatformprojectslocationscontactcenterspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|name of resource|
|requestId|query|string|false|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
|updateMask|query|string|false|Required. Field mask is used to specify the fields to be overwritten in the ContactCenter resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[ContactCenter](#schemacontactcenter)|false|none|
|» adminUser|body|[AdminUser](#schemaadminuser)|false|Optional. Info about the first admin user, such as given name and family name.|
|» ccaipManagedUsers|body|boolean|false|Optional. Whether to enable users to be created in the CCAIP-instance concurrently to having users in Cloud identity|
|» customerDomainPrefix|body|string|false|Required. Immutable. At least 2 and max 16 char long, must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt).|
|» displayName|body|string|false|Required. A user friendly name for the ContactCenter.|
|» instanceConfig|body|[InstanceConfig](#schemainstanceconfig)|false|The configuration of this instance, it is currently immutable once created.|
|» labels|body|object|false|Labels as key value pairs|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|name of resource|
|» samlParams|body|[SAMLParams](#schemasamlparams)|false|Optional. Params that sets up Google as IdP.|
|» userEmail|body|string|false|Optional. Email address of the first admin user.|

#### Enumerated Values

|Parameter|Value|
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

<h3 id="contactcenteraiplatformprojectslocationscontactcenterspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## contactcenteraiplatform.projects.locations.list

<a id="opIdcontactcenteraiplatform.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="contactcenteraiplatformprojectslocationslist-parameters">Parameters</h3>

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

<h3 id="contactcenteraiplatformprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## contactcenteraiplatform.projects.locations.operations.list

<a id="opIdcontactcenteraiplatform.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="contactcenteraiplatformprojectslocationsoperationslist-parameters">Parameters</h3>

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

<h3 id="contactcenteraiplatformprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## contactcenteraiplatform.projects.locations.operations.cancel

<a id="opIdcontactcenteraiplatform.projects.locations.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string:cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1alpha1/{name}:cancel`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

> Body parameter

```json
{}
```

<h3 id="contactcenteraiplatformprojectslocationsoperationscancel-parameters">Parameters</h3>

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

<h3 id="contactcenteraiplatformprojectslocationsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## contactcenteraiplatform.projects.locations.contactCenters.list

<a id="opIdcontactcenteraiplatform.projects.locations.contactCenters.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/contactCenters \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{parent}/contactCenters`

Lists ContactCenters in a given project and location.

<h3 id="contactcenteraiplatformprojectslocationscontactcenterslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent value for ListContactCentersRequest|
|filter|query|string|false|Filtering results|
|orderBy|query|string|false|Hint for how to order the results|
|pageSize|query|integer|false|Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results the server should return.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "contactCenters": [
    {
      "adminUser": {
        "familyName": "string",
        "givenName": "string"
      },
      "ccaipManagedUsers": true,
      "createTime": "string",
      "customerDomainPrefix": "string",
      "displayName": "string",
      "instanceConfig": {
        "instanceSize": "INSTANCE_SIZE_UNSPECIFIED"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "samlParams": {
        "certificate": "string",
        "entityId": "string",
        "ssoUri": "string",
        "userEmail": "string"
      },
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string",
      "uris": {
        "chatBotUri": "string",
        "mediaUri": "string",
        "rootUri": "string",
        "virtualAgentStreamingServiceUri": "string"
      },
      "userEmail": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="contactcenteraiplatformprojectslocationscontactcenterslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListContactCentersResponse](#schemalistcontactcentersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## contactcenteraiplatform.projects.locations.contactCenters.create

<a id="opIdcontactcenteraiplatform.projects.locations.contactCenters.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/contactCenters \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "adminUser": {
      "familyName": "string",
      "givenName": "string"
    },
    "ccaipManagedUsers": true,
    "customerDomainPrefix": "string",
    "displayName": "string",
    "instanceConfig": {
      "instanceSize": "INSTANCE_SIZE_UNSPECIFIED"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "samlParams": {
      "certificate": "string",
      "entityId": "string",
      "ssoUri": "string",
      "userEmail": "string"
    },
    "userEmail": "string"
  }'
```

`POST /v1alpha1/{parent}/contactCenters`

Creates a new ContactCenter in a given project and location.

> Body parameter

```json
{
  "adminUser": {
    "familyName": "string",
    "givenName": "string"
  },
  "ccaipManagedUsers": true,
  "customerDomainPrefix": "string",
  "displayName": "string",
  "instanceConfig": {
    "instanceSize": "INSTANCE_SIZE_UNSPECIFIED"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "samlParams": {
    "certificate": "string",
    "entityId": "string",
    "ssoUri": "string",
    "userEmail": "string"
  },
  "userEmail": "string"
}
```

<h3 id="contactcenteraiplatformprojectslocationscontactcenterscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Value for parent.|
|contactCenterId|query|string|false|Required. Id of the requesting object If auto-generating Id server-side, remove this field and contact_center_id from the method_signature of Create RPC|
|requestId|query|string|false|Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[ContactCenter](#schemacontactcenter)|false|none|
|» adminUser|body|[AdminUser](#schemaadminuser)|false|Optional. Info about the first admin user, such as given name and family name.|
|» ccaipManagedUsers|body|boolean|false|Optional. Whether to enable users to be created in the CCAIP-instance concurrently to having users in Cloud identity|
|» customerDomainPrefix|body|string|false|Required. Immutable. At least 2 and max 16 char long, must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt).|
|» displayName|body|string|false|Required. A user friendly name for the ContactCenter.|
|» instanceConfig|body|[InstanceConfig](#schemainstanceconfig)|false|The configuration of this instance, it is currently immutable once created.|
|» labels|body|object|false|Labels as key value pairs|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|name of resource|
|» samlParams|body|[SAMLParams](#schemasamlparams)|false|Optional. Params that sets up Google as IdP.|
|» userEmail|body|string|false|Optional. Email address of the first admin user.|

#### Enumerated Values

|Parameter|Value|
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

<h3 id="contactcenteraiplatformprojectslocationscontactcenterscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## contactcenteraiplatform.projects.locations.queryContactCenterQuota

<a id="opIdcontactcenteraiplatform.projects.locations.queryContactCenterQuota"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string:queryContactCenterQuota \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{parent}:queryContactCenterQuota`

Queries the contact center quota, an aggregation over all the projects, that belongs to the billing account, which the input project belongs to.

<h3 id="contactcenteraiplatformprojectslocationsquerycontactcenterquota-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent project resource id.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "contactCenterCountLimit": 0,
  "contactCenterCountSum": 0
}
```

<h3 id="contactcenteraiplatformprojectslocationsquerycontactcenterquota-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ContactCenterQuota](#schemacontactcenterquota)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AdminUser">AdminUser</h2>
<!-- backwards compatibility -->
<a id="schemaadminuser"></a>
<a id="schema_AdminUser"></a>
<a id="tocSadminuser"></a>
<a id="tocsadminuser"></a>

```json
{
  "familyName": "string",
  "givenName": "string"
}
```

Message storing info about the first admin user. Next ID: 3

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|familyName|string|false|none|Optional. Last/family name of the first admin user.|
|givenName|string|false|none|Optional. First/given name of the first admin user.|

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

<h2 id="tocS_ContactCenter">ContactCenter</h2>
<!-- backwards compatibility -->
<a id="schemacontactcenter"></a>
<a id="schema_ContactCenter"></a>
<a id="tocScontactcenter"></a>
<a id="tocscontactcenter"></a>

```json
{
  "adminUser": {
    "familyName": "string",
    "givenName": "string"
  },
  "ccaipManagedUsers": true,
  "createTime": "string",
  "customerDomainPrefix": "string",
  "displayName": "string",
  "instanceConfig": {
    "instanceSize": "INSTANCE_SIZE_UNSPECIFIED"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "samlParams": {
    "certificate": "string",
    "entityId": "string",
    "ssoUri": "string",
    "userEmail": "string"
  },
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string",
  "uris": {
    "chatBotUri": "string",
    "mediaUri": "string",
    "rootUri": "string",
    "virtualAgentStreamingServiceUri": "string"
  },
  "userEmail": "string"
}
```

Message describing ContactCenter object Next ID: 14

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adminUser|[AdminUser](#schemaadminuser)|false|none|Optional. Info about the first admin user, such as given name and family name.|
|ccaipManagedUsers|boolean|false|none|Optional. Whether to enable users to be created in the CCAIP-instance concurrently to having users in Cloud identity|
|createTime|string(google-datetime)|false|read-only|Output only. [Output only] Create time stamp|
|customerDomainPrefix|string|false|none|Required. Immutable. At least 2 and max 16 char long, must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt).|
|displayName|string|false|none|Required. A user friendly name for the ContactCenter.|
|instanceConfig|[InstanceConfig](#schemainstanceconfig)|false|none|The configuration of this instance, it is currently immutable once created.|
|labels|object|false|none|Labels as key value pairs|
|name|string|false|none|name of resource|
|samlParams|[SAMLParams](#schemasamlparams)|false|none|Optional. Params that sets up Google as IdP.|
|state|string|false|read-only|Output only. The state of this contact center.|
|updateTime|string(google-datetime)|false|read-only|Output only. [Output only] Update time stamp|
|uris|[URIs](#schemauris)|false|none|Output only. URIs to access the deployed ContactCenters.|
|userEmail|string|false|none|Optional. Email address of the first admin user.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|STATE_DEPLOYING|
|state|STATE_DEPLOYED|
|state|STATE_TERMINATING|
|state|STATE_FAILED|
|state|STATE_TERMINATING_FAILED|
|state|STATE_TERMINATED|

<h2 id="tocS_ContactCenterQuota">ContactCenterQuota</h2>
<!-- backwards compatibility -->
<a id="schemacontactcenterquota"></a>
<a id="schema_ContactCenterQuota"></a>
<a id="tocScontactcenterquota"></a>
<a id="tocscontactcenterquota"></a>

```json
{
  "contactCenterCountLimit": 0,
  "contactCenterCountSum": 0
}
```

Represents a quota for contact centers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactCenterCountLimit|integer(int32)|false|none|Reflects the count limit of contact centers on a billing account.|
|contactCenterCountSum|integer(int32)|false|none|Reflects the count sum of contact centers on a billing account.|

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

<h2 id="tocS_InstanceConfig">InstanceConfig</h2>
<!-- backwards compatibility -->
<a id="schemainstanceconfig"></a>
<a id="schema_InstanceConfig"></a>
<a id="tocSinstanceconfig"></a>
<a id="tocsinstanceconfig"></a>

```json
{
  "instanceSize": "INSTANCE_SIZE_UNSPECIFIED"
}
```

Message storing the instance configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceSize|string|false|none|The instance size of this the instance configuration.|

#### Enumerated Values

|Property|Value|
|---|---|
|instanceSize|INSTANCE_SIZE_UNSPECIFIED|
|instanceSize|STANDARD_SMALL|
|instanceSize|STANDARD_MEDIUM|
|instanceSize|STANDARD_LARGE|
|instanceSize|STANDARD_XLARGE|
|instanceSize|STANDARD_2XLARGE|
|instanceSize|STANDARD_3XLARGE|

<h2 id="tocS_ListContactCentersResponse">ListContactCentersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcontactcentersresponse"></a>
<a id="schema_ListContactCentersResponse"></a>
<a id="tocSlistcontactcentersresponse"></a>
<a id="tocslistcontactcentersresponse"></a>

```json
{
  "contactCenters": [
    {
      "adminUser": {
        "familyName": "string",
        "givenName": "string"
      },
      "ccaipManagedUsers": true,
      "createTime": "string",
      "customerDomainPrefix": "string",
      "displayName": "string",
      "instanceConfig": {
        "instanceSize": "INSTANCE_SIZE_UNSPECIFIED"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "samlParams": {
        "certificate": "string",
        "entityId": "string",
        "ssoUri": "string",
        "userEmail": "string"
      },
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string",
      "uris": {
        "chatBotUri": "string",
        "mediaUri": "string",
        "rootUri": "string",
        "virtualAgentStreamingServiceUri": "string"
      },
      "userEmail": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

Message for response to listing ContactCenters

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactCenters|[[ContactCenter](#schemacontactcenter)]|false|none|The list of ContactCenter|
|nextPageToken|string|false|none|A token identifying a page of results the server should return.|
|unreachable|[string]|false|none|Locations that could not be reached.|

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

A resource that represents Google Cloud location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The friendly name for this location, typically a nearby city name. For example, "Tokyo".|
|labels|object|false|none|Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}|
|locationId|string|false|none|The canonical id for this location. For example: `"us-east1"`.|
|metadata|object|false|none|Service-specific metadata. For example the available capacity at the given location.|
|name|string|false|none|Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`|

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
  "apiVersion": "string",
  "contactCenter": {
    "adminUser": {
      "familyName": "string",
      "givenName": "string"
    },
    "ccaipManagedUsers": true,
    "createTime": "string",
    "customerDomainPrefix": "string",
    "displayName": "string",
    "instanceConfig": {
      "instanceSize": "INSTANCE_SIZE_UNSPECIFIED"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "samlParams": {
      "certificate": "string",
      "entityId": "string",
      "ssoUri": "string",
      "userEmail": "string"
    },
    "state": "STATE_UNSPECIFIED",
    "updateTime": "string",
    "uris": {
      "chatBotUri": "string",
      "mediaUri": "string",
      "rootUri": "string",
      "virtualAgentStreamingServiceUri": "string"
    },
    "userEmail": "string"
  },
  "createTime": "string",
  "endTime": "string",
  "requestedCancellation": true,
  "statusMessage": "string",
  "target": "string",
  "verb": "string"
}
```

Represents the metadata of the long-running operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|read-only|Output only. API version used to start the operation.|
|contactCenter|[ContactCenter](#schemacontactcenter)|false|none|Contact center information for this request|
|createTime|string(google-datetime)|false|read-only|Output only. The time the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. The time the operation finished running.|
|requestedCancellation|boolean|false|read-only|Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.|
|statusMessage|string|false|read-only|Output only. Human-readable status of the operation, if any.|
|target|string|false|read-only|Output only. Server-defined resource path for the target of the operation.|
|verb|string|false|read-only|Output only. Name of the verb executed by the operation.|

<h2 id="tocS_SAMLParams">SAMLParams</h2>
<!-- backwards compatibility -->
<a id="schemasamlparams"></a>
<a id="schema_SAMLParams"></a>
<a id="tocSsamlparams"></a>
<a id="tocssamlparams"></a>

```json
{
  "certificate": "string",
  "entityId": "string",
  "ssoUri": "string",
  "userEmail": "string"
}
```

Message storing SAML params to enable Google as IDP.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificate|string|false|none|SAML certificate|
|entityId|string|false|none|Entity id URL|
|ssoUri|string|false|none|Single sign-on URL|
|userEmail|string|false|none|Email address of the first admin users.|

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

<h2 id="tocS_URIs">URIs</h2>
<!-- backwards compatibility -->
<a id="schemauris"></a>
<a id="schema_URIs"></a>
<a id="tocSuris"></a>
<a id="tocsuris"></a>

```json
{
  "chatBotUri": "string",
  "mediaUri": "string",
  "rootUri": "string",
  "virtualAgentStreamingServiceUri": "string"
}
```

Message storing the URIs of the ContactCenter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chatBotUri|string|false|none|Chat Bot Uri of the ContactCenter|
|mediaUri|string|false|none|Media Uri of the ContactCenter.|
|rootUri|string|false|none|Root Uri of the ContactCenter.|
|virtualAgentStreamingServiceUri|string|false|none|Virtual Agent Streaming Service Uri of the ContactCenter.|
