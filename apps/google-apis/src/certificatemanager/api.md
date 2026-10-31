<h1 id="certificate-manager-api">Certificate Manager API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://certificatemanager.googleapis.com/">https://certificatemanager.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/certificate-manager">External documentation</a>

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

<h1 id="certificate-manager-api-projects">projects</h1>

## certificatemanager.projects.locations.trustConfigs.get

<a id="opIdcertificatemanager.projects.locations.trustConfigs.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Gets details of a single TrustConfig.

<h3 id="certificatemanagerprojectslocationstrustconfigsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. A name of the TrustConfig to describe. Must be in the format `projects/*/locations/*/trustConfigs/*`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "createTime": "string",
  "description": "string",
  "etag": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "trustStores": [
    {
      "intermediateCas": [
        {
          "pemCertificate": "string"
        }
      ],
      "trustAnchors": [
        {
          "pemCertificate": "string"
        }
      ]
    }
  ],
  "updateTime": "string"
}
```

<h3 id="certificatemanagerprojectslocationstrustconfigsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TrustConfig](#schematrustconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## certificatemanager.projects.locations.trustConfigs.delete

<a id="opIdcertificatemanager.projects.locations.trustConfigs.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Deletes a single TrustConfig.

<h3 id="certificatemanagerprojectslocationstrustconfigsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. A name of the TrustConfig to delete. Must be in the format `projects/*/locations/*/trustConfigs/*`.|
|etag|query|string|false|The current etag of the TrustConfig. If an etag is provided and does not match the current etag of the resource, deletion will be blocked and an ABORTED error will be returned.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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

<h3 id="certificatemanagerprojectslocationstrustconfigsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## certificatemanager.projects.locations.trustConfigs.patch

<a id="opIdcertificatemanager.projects.locations.trustConfigs.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "etag": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "trustStores": [
      {
        "intermediateCas": [
          {
            "pemCertificate": "string"
          }
        ],
        "trustAnchors": [
          {
            "pemCertificate": "string"
          }
        ]
      }
    ]
  }'
```

`PATCH /v1/{name}`

Updates a TrustConfig.

> Body parameter

```json
{
  "description": "string",
  "etag": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "trustStores": [
    {
      "intermediateCas": [
        {
          "pemCertificate": "string"
        }
      ],
      "trustAnchors": [
        {
          "pemCertificate": "string"
        }
      ]
    }
  ]
}
```

<h3 id="certificatemanagerprojectslocationstrustconfigspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|A user-defined name of the trust config. TrustConfig names must be unique globally and match pattern `projects/*/locations/*/trustConfigs/*`.|
|updateMask|query|string|false|Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[TrustConfig](#schematrustconfig)|false|none|
|» description|body|string|false|One or more paragraphs of text description of a TrustConfig.|
|» etag|body|string|false|This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.|
|» labels|body|object|false|Set of labels associated with a TrustConfig.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|A user-defined name of the trust config. TrustConfig names must be unique globally and match pattern `projects/*/locations/*/trustConfigs/*`.|
|» trustStores|body|[[TrustStore](#schematruststore)]|false|Set of trust stores to perform validation against. This field is supported when TrustConfig is configured with Load Balancers, currently not supported for SPIFFE certificate validation. Only one TrustStore specified is currently allowed.|

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

<h3 id="certificatemanagerprojectslocationstrustconfigspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## certificatemanager.projects.locations.list

<a id="opIdcertificatemanager.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="certificatemanagerprojectslocationslist-parameters">Parameters</h3>

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

<h3 id="certificatemanagerprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## certificatemanager.projects.locations.operations.list

<a id="opIdcertificatemanager.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="certificatemanagerprojectslocationsoperationslist-parameters">Parameters</h3>

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

<h3 id="certificatemanagerprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## certificatemanager.projects.locations.operations.cancel

<a id="opIdcertificatemanager.projects.locations.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{name}:cancel`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

> Body parameter

```json
{}
```

<h3 id="certificatemanagerprojectslocationsoperationscancel-parameters">Parameters</h3>

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

<h3 id="certificatemanagerprojectslocationsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## certificatemanager.projects.locations.certificateIssuanceConfigs.list

<a id="opIdcertificatemanager.projects.locations.certificateIssuanceConfigs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/certificateIssuanceConfigs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/certificateIssuanceConfigs`

Lists CertificateIssuanceConfigs in a given project and location.

<h3 id="certificatemanagerprojectslocationscertificateissuanceconfigslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project and location from which the certificate should be listed, specified in the format `projects/*/locations/*`.|
|filter|query|string|false|Filter expression to restrict the Certificates Configs returned.|
|orderBy|query|string|false|A list of Certificate Config field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix " desc".|
|pageSize|query|integer|false|Maximum number of certificate configs to return per call.|
|pageToken|query|string|false|The value returned by the last `ListCertificateIssuanceConfigsResponse`. Indicates that this is a continuation of a prior `ListCertificateIssuanceConfigs` call, and that the system should return the next page of data.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "certificateIssuanceConfigs": [
    {
      "certificateAuthorityConfig": {
        "certificateAuthorityServiceConfig": {
          "caPool": "string"
        }
      },
      "createTime": "string",
      "description": "string",
      "keyAlgorithm": "KEY_ALGORITHM_UNSPECIFIED",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "lifetime": "string",
      "name": "string",
      "rotationWindowPercentage": 0,
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="certificatemanagerprojectslocationscertificateissuanceconfigslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListCertificateIssuanceConfigsResponse](#schemalistcertificateissuanceconfigsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## certificatemanager.projects.locations.certificateIssuanceConfigs.create

<a id="opIdcertificatemanager.projects.locations.certificateIssuanceConfigs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/certificateIssuanceConfigs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "certificateAuthorityConfig": {
      "certificateAuthorityServiceConfig": {
        "caPool": "string"
      }
    },
    "description": "string",
    "keyAlgorithm": "KEY_ALGORITHM_UNSPECIFIED",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "lifetime": "string",
    "name": "string",
    "rotationWindowPercentage": 0
  }'
```

`POST /v1/{parent}/certificateIssuanceConfigs`

Creates a new CertificateIssuanceConfig in a given project and location.

> Body parameter

```json
{
  "certificateAuthorityConfig": {
    "certificateAuthorityServiceConfig": {
      "caPool": "string"
    }
  },
  "description": "string",
  "keyAlgorithm": "KEY_ALGORITHM_UNSPECIFIED",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "lifetime": "string",
  "name": "string",
  "rotationWindowPercentage": 0
}
```

<h3 id="certificatemanagerprojectslocationscertificateissuanceconfigscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the certificate issuance config. Must be in the format `projects/*/locations/*`.|
|certificateIssuanceConfigId|query|string|false|Required. A user-provided name of the certificate config.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[CertificateIssuanceConfig](#schemacertificateissuanceconfig)|false|none|
|» certificateAuthorityConfig|body|[CertificateAuthorityConfig](#schemacertificateauthorityconfig)|false|Required. The CA that issues the workload certificate. It includes the CA address, type, authentication to CA service, etc.|
|» description|body|string|false|One or more paragraphs of text description of a CertificateIssuanceConfig.|
|» keyAlgorithm|body|string|false|Required. The key algorithm to use when generating the private key.|
|» labels|body|object|false|Set of labels associated with a CertificateIssuanceConfig.|
|» » **additionalProperties**|body|string|false|none|
|» lifetime|body|string(google-duration)|false|Required. Workload certificate lifetime requested.|
|» name|body|string|false|A user-defined name of the certificate issuance config. CertificateIssuanceConfig names must be unique globally and match pattern `projects/*/locations/*/certificateIssuanceConfigs/*`.|
|» rotationWindowPercentage|body|integer(int32)|false|Required. Specifies the percentage of elapsed time of the certificate lifetime to wait before renewing the certificate. Must be a number between 1-99, inclusive.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» keyAlgorithm|KEY_ALGORITHM_UNSPECIFIED|
|» keyAlgorithm|RSA_2048|
|» keyAlgorithm|ECDSA_P256|

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

<h3 id="certificatemanagerprojectslocationscertificateissuanceconfigscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## certificatemanager.projects.locations.certificateMaps.certificateMapEntries.list

<a id="opIdcertificatemanager.projects.locations.certificateMaps.certificateMapEntries.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/certificateMapEntries \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/certificateMapEntries`

Lists CertificateMapEntries in a given project and location.

<h3 id="certificatemanagerprojectslocationscertificatemapscertificatemapentrieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project, location and certificate map from which the certificate map entries should be listed, specified in the format `projects/*/locations/*/certificateMaps/*`.|
|filter|query|string|false|Filter expression to restrict the returned Certificate Map Entries.|
|orderBy|query|string|false|A list of Certificate Map Entry field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix " desc".|
|pageSize|query|integer|false|Maximum number of certificate map entries to return. The service may return fewer than this value. If unspecified, at most 50 certificate map entries will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.|
|pageToken|query|string|false|The value returned by the last `ListCertificateMapEntriesResponse`. Indicates that this is a continuation of a prior `ListCertificateMapEntries` call, and that the system should return the next page of data.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "certificateMapEntries": [
    {
      "certificates": [
        "string"
      ],
      "createTime": "string",
      "description": "string",
      "hostname": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "matcher": "MATCHER_UNSPECIFIED",
      "name": "string",
      "state": "SERVING_STATE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="certificatemanagerprojectslocationscertificatemapscertificatemapentrieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListCertificateMapEntriesResponse](#schemalistcertificatemapentriesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## certificatemanager.projects.locations.certificateMaps.certificateMapEntries.create

<a id="opIdcertificatemanager.projects.locations.certificateMaps.certificateMapEntries.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/certificateMapEntries \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "certificates": [
      "string"
    ],
    "description": "string",
    "hostname": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "matcher": "MATCHER_UNSPECIFIED",
    "name": "string"
  }'
```

`POST /v1/{parent}/certificateMapEntries`

Creates a new CertificateMapEntry in a given project and location.

> Body parameter

```json
{
  "certificates": [
    "string"
  ],
  "description": "string",
  "hostname": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "matcher": "MATCHER_UNSPECIFIED",
  "name": "string"
}
```

<h3 id="certificatemanagerprojectslocationscertificatemapscertificatemapentriescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the certificate map entry. Must be in the format `projects/*/locations/*/certificateMaps/*`.|
|certificateMapEntryId|query|string|false|Required. A user-provided name of the certificate map entry.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[CertificateMapEntry](#schemacertificatemapentry)|false|none|
|» certificates|body|[string]|false|A set of Certificates defines for the given `hostname`. There can be defined up to four certificates in each Certificate Map Entry. Each certificate must match pattern `projects/*/locations/*/certificates/*`.|
|» description|body|string|false|One or more paragraphs of text description of a certificate map entry.|
|» hostname|body|string|false|A Hostname (FQDN, e.g. `example.com`) or a wildcard hostname expression (`*.example.com`) for a set of hostnames with common suffix. Used as Server Name Indication (SNI) for selecting a proper certificate.|
|» labels|body|object|false|Set of labels associated with a Certificate Map Entry.|
|» » **additionalProperties**|body|string|false|none|
|» matcher|body|string|false|A predefined matcher for particular cases, other than SNI selection.|
|» name|body|string|false|A user-defined name of the Certificate Map Entry. Certificate Map Entry names must be unique globally and match pattern `projects/*/locations/*/certificateMaps/*/certificateMapEntries/*`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» matcher|MATCHER_UNSPECIFIED|
|» matcher|PRIMARY|

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

<h3 id="certificatemanagerprojectslocationscertificatemapscertificatemapentriescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## certificatemanager.projects.locations.certificateMaps.list

<a id="opIdcertificatemanager.projects.locations.certificateMaps.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/certificateMaps \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/certificateMaps`

Lists CertificateMaps in a given project and location.

<h3 id="certificatemanagerprojectslocationscertificatemapslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project and location from which the certificate maps should be listed, specified in the format `projects/*/locations/*`.|
|filter|query|string|false|Filter expression to restrict the Certificates Maps returned.|
|orderBy|query|string|false|A list of Certificate Map field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix " desc".|
|pageSize|query|integer|false|Maximum number of certificate maps to return per call.|
|pageToken|query|string|false|The value returned by the last `ListCertificateMapsResponse`. Indicates that this is a continuation of a prior `ListCertificateMaps` call, and that the system should return the next page of data.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "certificateMaps": [
    {
      "createTime": "string",
      "description": "string",
      "gclbTargets": [
        {
          "ipConfigs": [
            {
              "ipAddress": "string",
              "ports": [
                0
              ]
            }
          ],
          "targetHttpsProxy": "string",
          "targetSslProxy": "string"
        }
      ],
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="certificatemanagerprojectslocationscertificatemapslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListCertificateMapsResponse](#schemalistcertificatemapsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## certificatemanager.projects.locations.certificateMaps.create

<a id="opIdcertificatemanager.projects.locations.certificateMaps.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/certificateMaps \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string"
  }'
```

`POST /v1/{parent}/certificateMaps`

Creates a new CertificateMap in a given project and location.

> Body parameter

```json
{
  "description": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string"
}
```

<h3 id="certificatemanagerprojectslocationscertificatemapscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the certificate map. Must be in the format `projects/*/locations/*`.|
|certificateMapId|query|string|false|Required. A user-provided name of the certificate map.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[CertificateMap](#schemacertificatemap)|false|none|
|» description|body|string|false|One or more paragraphs of text description of a certificate map.|
|» labels|body|object|false|Set of labels associated with a Certificate Map.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|A user-defined name of the Certificate Map. Certificate Map names must be unique globally and match pattern `projects/*/locations/*/certificateMaps/*`.|

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

<h3 id="certificatemanagerprojectslocationscertificatemapscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## certificatemanager.projects.locations.certificates.list

<a id="opIdcertificatemanager.projects.locations.certificates.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/certificates \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/certificates`

Lists Certificates in a given project and location.

<h3 id="certificatemanagerprojectslocationscertificateslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project and location from which the certificate should be listed, specified in the format `projects/*/locations/*`.|
|filter|query|string|false|Filter expression to restrict the Certificates returned.|
|orderBy|query|string|false|A list of Certificate field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix " desc".|
|pageSize|query|integer|false|Maximum number of certificates to return per call.|
|pageToken|query|string|false|The value returned by the last `ListCertificatesResponse`. Indicates that this is a continuation of a prior `ListCertificates` call, and that the system should return the next page of data.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "certificates": [
    {
      "createTime": "string",
      "description": "string",
      "expireTime": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "managed": {
        "authorizationAttemptInfo": [
          {
            "details": "string",
            "domain": "string",
            "failureReason": "FAILURE_REASON_UNSPECIFIED",
            "state": "STATE_UNSPECIFIED"
          }
        ],
        "dnsAuthorizations": [
          "string"
        ],
        "domains": [
          "string"
        ],
        "issuanceConfig": "string",
        "provisioningIssue": {
          "details": "string",
          "reason": "REASON_UNSPECIFIED"
        },
        "state": "STATE_UNSPECIFIED"
      },
      "name": "string",
      "pemCertificate": "string",
      "sanDnsnames": [
        "string"
      ],
      "scope": "DEFAULT",
      "selfManaged": {
        "pemCertificate": "string",
        "pemPrivateKey": "string"
      },
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="certificatemanagerprojectslocationscertificateslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListCertificatesResponse](#schemalistcertificatesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## certificatemanager.projects.locations.certificates.create

<a id="opIdcertificatemanager.projects.locations.certificates.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/certificates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "managed": {
      "dnsAuthorizations": [
        "string"
      ],
      "domains": [
        "string"
      ],
      "issuanceConfig": "string"
    },
    "name": "string",
    "scope": "DEFAULT",
    "selfManaged": {
      "pemCertificate": "string",
      "pemPrivateKey": "string"
    }
  }'
```

`POST /v1/{parent}/certificates`

Creates a new Certificate in a given project and location.

> Body parameter

```json
{
  "description": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "managed": {
    "dnsAuthorizations": [
      "string"
    ],
    "domains": [
      "string"
    ],
    "issuanceConfig": "string"
  },
  "name": "string",
  "scope": "DEFAULT",
  "selfManaged": {
    "pemCertificate": "string",
    "pemPrivateKey": "string"
  }
}
```

<h3 id="certificatemanagerprojectslocationscertificatescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the certificate. Must be in the format `projects/*/locations/*`.|
|certificateId|query|string|false|Required. A user-provided name of the certificate.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Certificate](#schemacertificate)|false|none|
|» description|body|string|false|One or more paragraphs of text description of a certificate.|
|» labels|body|object|false|Set of labels associated with a Certificate.|
|» » **additionalProperties**|body|string|false|none|
|» managed|body|[ManagedCertificate](#schemamanagedcertificate)|false|If set, contains configuration and state of a managed certificate.|
|» name|body|string|false|A user-defined name of the certificate. Certificate names must be unique globally and match pattern `projects/*/locations/*/certificates/*`.|
|» scope|body|string|false|Immutable. The scope of the certificate.|
|» selfManaged|body|[SelfManagedCertificate](#schemaselfmanagedcertificate)|false|If set, defines data of a self-managed certificate.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» scope|DEFAULT|
|» scope|EDGE_CACHE|

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

<h3 id="certificatemanagerprojectslocationscertificatescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## certificatemanager.projects.locations.dnsAuthorizations.list

<a id="opIdcertificatemanager.projects.locations.dnsAuthorizations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/dnsAuthorizations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/dnsAuthorizations`

Lists DnsAuthorizations in a given project and location.

<h3 id="certificatemanagerprojectslocationsdnsauthorizationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project and location from which the dns authorizations should be listed, specified in the format `projects/*/locations/*`.|
|filter|query|string|false|Filter expression to restrict the Dns Authorizations returned.|
|orderBy|query|string|false|A list of Dns Authorization field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix " desc".|
|pageSize|query|integer|false|Maximum number of dns authorizations to return per call.|
|pageToken|query|string|false|The value returned by the last `ListDnsAuthorizationsResponse`. Indicates that this is a continuation of a prior `ListDnsAuthorizations` call, and that the system should return the next page of data.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "dnsAuthorizations": [
    {
      "createTime": "string",
      "description": "string",
      "dnsResourceRecord": {
        "data": "string",
        "name": "string",
        "type": "string"
      },
      "domain": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="certificatemanagerprojectslocationsdnsauthorizationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListDnsAuthorizationsResponse](#schemalistdnsauthorizationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## certificatemanager.projects.locations.dnsAuthorizations.create

<a id="opIdcertificatemanager.projects.locations.dnsAuthorizations.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/dnsAuthorizations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "domain": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string"
  }'
```

`POST /v1/{parent}/dnsAuthorizations`

Creates a new DnsAuthorization in a given project and location.

> Body parameter

```json
{
  "description": "string",
  "domain": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string"
}
```

<h3 id="certificatemanagerprojectslocationsdnsauthorizationscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the dns authorization. Must be in the format `projects/*/locations/*`.|
|dnsAuthorizationId|query|string|false|Required. A user-provided name of the dns authorization.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[DnsAuthorization](#schemadnsauthorization)|false|none|
|» description|body|string|false|One or more paragraphs of text description of a DnsAuthorization.|
|» domain|body|string|false|Required. Immutable. A domain that is being authorized. A DnsAuthorization resource covers a single domain and its wildcard, e.g. authorization for `example.com` can be used to issue certificates for `example.com` and `*.example.com`.|
|» labels|body|object|false|Set of labels associated with a DnsAuthorization.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|A user-defined name of the dns authorization. DnsAuthorization names must be unique globally and match pattern `projects/*/locations/*/dnsAuthorizations/*`.|

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

<h3 id="certificatemanagerprojectslocationsdnsauthorizationscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## certificatemanager.projects.locations.trustConfigs.list

<a id="opIdcertificatemanager.projects.locations.trustConfigs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/trustConfigs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/trustConfigs`

Lists TrustConfigs in a given project and location.

<h3 id="certificatemanagerprojectslocationstrustconfigslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project and location from which the TrustConfigs should be listed, specified in the format `projects/*/locations/*`.|
|filter|query|string|false|Filter expression to restrict the TrustConfigs returned.|
|orderBy|query|string|false|A list of TrustConfig field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix " desc".|
|pageSize|query|integer|false|Maximum number of TrustConfigs to return per call.|
|pageToken|query|string|false|The value returned by the last `ListTrustConfigsResponse`. Indicates that this is a continuation of a prior `ListTrustConfigs` call, and that the system should return the next page of data.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "trustConfigs": [
    {
      "createTime": "string",
      "description": "string",
      "etag": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "trustStores": [
        {
          "intermediateCas": [
            {
              "pemCertificate": "string"
            }
          ],
          "trustAnchors": [
            {
              "pemCertificate": "string"
            }
          ]
        }
      ],
      "updateTime": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

<h3 id="certificatemanagerprojectslocationstrustconfigslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListTrustConfigsResponse](#schemalisttrustconfigsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## certificatemanager.projects.locations.trustConfigs.create

<a id="opIdcertificatemanager.projects.locations.trustConfigs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/trustConfigs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "etag": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "trustStores": [
      {
        "intermediateCas": [
          {
            "pemCertificate": "string"
          }
        ],
        "trustAnchors": [
          {
            "pemCertificate": "string"
          }
        ]
      }
    ]
  }'
```

`POST /v1/{parent}/trustConfigs`

Creates a new TrustConfig in a given project and location.

> Body parameter

```json
{
  "description": "string",
  "etag": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "trustStores": [
    {
      "intermediateCas": [
        {
          "pemCertificate": "string"
        }
      ],
      "trustAnchors": [
        {
          "pemCertificate": "string"
        }
      ]
    }
  ]
}
```

<h3 id="certificatemanagerprojectslocationstrustconfigscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource of the TrustConfig. Must be in the format `projects/*/locations/*`.|
|trustConfigId|query|string|false|Required. A user-provided name of the TrustConfig.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[TrustConfig](#schematrustconfig)|false|none|
|» description|body|string|false|One or more paragraphs of text description of a TrustConfig.|
|» etag|body|string|false|This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.|
|» labels|body|object|false|Set of labels associated with a TrustConfig.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|A user-defined name of the trust config. TrustConfig names must be unique globally and match pattern `projects/*/locations/*/trustConfigs/*`.|
|» trustStores|body|[[TrustStore](#schematruststore)]|false|Set of trust stores to perform validation against. This field is supported when TrustConfig is configured with Load Balancers, currently not supported for SPIFFE certificate validation. Only one TrustStore specified is currently allowed.|

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

<h3 id="certificatemanagerprojectslocationstrustconfigscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AuthorizationAttemptInfo">AuthorizationAttemptInfo</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizationattemptinfo"></a>
<a id="schema_AuthorizationAttemptInfo"></a>
<a id="tocSauthorizationattemptinfo"></a>
<a id="tocsauthorizationattemptinfo"></a>

```json
{
  "details": "string",
  "domain": "string",
  "failureReason": "FAILURE_REASON_UNSPECIFIED",
  "state": "STATE_UNSPECIFIED"
}
```

State of the latest attempt to authorize a domain for certificate issuance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|string|false|read-only|Output only. Human readable explanation for reaching the state. Provided to help address the configuration issues. Not guaranteed to be stable. For programmatic access use FailureReason enum.|
|domain|string|false|none|Domain name of the authorization attempt.|
|failureReason|string|false|read-only|Output only. Reason for failure of the authorization attempt for the domain.|
|state|string|false|read-only|Output only. State of the domain for managed certificate issuance.|

#### Enumerated Values

|Property|Value|
|---|---|
|failureReason|FAILURE_REASON_UNSPECIFIED|
|failureReason|CONFIG|
|failureReason|CAA|
|failureReason|RATE_LIMITED|
|state|STATE_UNSPECIFIED|
|state|AUTHORIZING|
|state|AUTHORIZED|
|state|FAILED|

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

<h2 id="tocS_Certificate">Certificate</h2>
<!-- backwards compatibility -->
<a id="schemacertificate"></a>
<a id="schema_Certificate"></a>
<a id="tocScertificate"></a>
<a id="tocscertificate"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "expireTime": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "managed": {
    "authorizationAttemptInfo": [
      {
        "details": "string",
        "domain": "string",
        "failureReason": "FAILURE_REASON_UNSPECIFIED",
        "state": "STATE_UNSPECIFIED"
      }
    ],
    "dnsAuthorizations": [
      "string"
    ],
    "domains": [
      "string"
    ],
    "issuanceConfig": "string",
    "provisioningIssue": {
      "details": "string",
      "reason": "REASON_UNSPECIFIED"
    },
    "state": "STATE_UNSPECIFIED"
  },
  "name": "string",
  "pemCertificate": "string",
  "sanDnsnames": [
    "string"
  ],
  "scope": "DEFAULT",
  "selfManaged": {
    "pemCertificate": "string",
    "pemPrivateKey": "string"
  },
  "updateTime": "string"
}
```

Defines TLS certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The creation timestamp of a Certificate.|
|description|string|false|none|One or more paragraphs of text description of a certificate.|
|expireTime|string(google-datetime)|false|read-only|Output only. The expiry timestamp of a Certificate.|
|labels|object|false|none|Set of labels associated with a Certificate.|
|managed|[ManagedCertificate](#schemamanagedcertificate)|false|none|If set, contains configuration and state of a managed certificate.|
|name|string|false|none|A user-defined name of the certificate. Certificate names must be unique globally and match pattern `projects/*/locations/*/certificates/*`.|
|pemCertificate|string|false|read-only|Output only. The PEM-encoded certificate chain.|
|sanDnsnames|[string]|false|read-only|Output only. The list of Subject Alternative Names of dnsName type defined in the certificate (see RFC 5280 4.2.1.6). Managed certificates that haven't been provisioned yet have this field populated with a value of the managed.domains field.|
|scope|string|false|none|Immutable. The scope of the certificate.|
|selfManaged|[SelfManagedCertificate](#schemaselfmanagedcertificate)|false|none|If set, defines data of a self-managed certificate.|
|updateTime|string(google-datetime)|false|read-only|Output only. The last update timestamp of a Certificate.|

#### Enumerated Values

|Property|Value|
|---|---|
|scope|DEFAULT|
|scope|EDGE_CACHE|

<h2 id="tocS_CertificateAuthorityConfig">CertificateAuthorityConfig</h2>
<!-- backwards compatibility -->
<a id="schemacertificateauthorityconfig"></a>
<a id="schema_CertificateAuthorityConfig"></a>
<a id="tocScertificateauthorityconfig"></a>
<a id="tocscertificateauthorityconfig"></a>

```json
{
  "certificateAuthorityServiceConfig": {
    "caPool": "string"
  }
}
```

The CA that issues the workload certificate. It includes CA address, type, authentication to CA service, etc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificateAuthorityServiceConfig|[CertificateAuthorityServiceConfig](#schemacertificateauthorityserviceconfig)|false|none|Defines a CertificateAuthorityServiceConfig.|

<h2 id="tocS_CertificateAuthorityServiceConfig">CertificateAuthorityServiceConfig</h2>
<!-- backwards compatibility -->
<a id="schemacertificateauthorityserviceconfig"></a>
<a id="schema_CertificateAuthorityServiceConfig"></a>
<a id="tocScertificateauthorityserviceconfig"></a>
<a id="tocscertificateauthorityserviceconfig"></a>

```json
{
  "caPool": "string"
}
```

Contains information required to contact CA service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caPool|string|false|none|Required. A CA pool resource used to issue a certificate. The CA pool string has a relative resource path following the form "projects/{project}/locations/{location}/caPools/{ca_pool}".|

<h2 id="tocS_CertificateIssuanceConfig">CertificateIssuanceConfig</h2>
<!-- backwards compatibility -->
<a id="schemacertificateissuanceconfig"></a>
<a id="schema_CertificateIssuanceConfig"></a>
<a id="tocScertificateissuanceconfig"></a>
<a id="tocscertificateissuanceconfig"></a>

```json
{
  "certificateAuthorityConfig": {
    "certificateAuthorityServiceConfig": {
      "caPool": "string"
    }
  },
  "createTime": "string",
  "description": "string",
  "keyAlgorithm": "KEY_ALGORITHM_UNSPECIFIED",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "lifetime": "string",
  "name": "string",
  "rotationWindowPercentage": 0,
  "updateTime": "string"
}
```

CertificateIssuanceConfig specifies how to issue and manage a certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificateAuthorityConfig|[CertificateAuthorityConfig](#schemacertificateauthorityconfig)|false|none|Required. The CA that issues the workload certificate. It includes the CA address, type, authentication to CA service, etc.|
|createTime|string(google-datetime)|false|read-only|Output only. The creation timestamp of a CertificateIssuanceConfig.|
|description|string|false|none|One or more paragraphs of text description of a CertificateIssuanceConfig.|
|keyAlgorithm|string|false|none|Required. The key algorithm to use when generating the private key.|
|labels|object|false|none|Set of labels associated with a CertificateIssuanceConfig.|
|lifetime|string(google-duration)|false|none|Required. Workload certificate lifetime requested.|
|name|string|false|none|A user-defined name of the certificate issuance config. CertificateIssuanceConfig names must be unique globally and match pattern `projects/*/locations/*/certificateIssuanceConfigs/*`.|
|rotationWindowPercentage|integer(int32)|false|none|Required. Specifies the percentage of elapsed time of the certificate lifetime to wait before renewing the certificate. Must be a number between 1-99, inclusive.|
|updateTime|string(google-datetime)|false|read-only|Output only. The last update timestamp of a CertificateIssuanceConfig.|

#### Enumerated Values

|Property|Value|
|---|---|
|keyAlgorithm|KEY_ALGORITHM_UNSPECIFIED|
|keyAlgorithm|RSA_2048|
|keyAlgorithm|ECDSA_P256|

<h2 id="tocS_CertificateMap">CertificateMap</h2>
<!-- backwards compatibility -->
<a id="schemacertificatemap"></a>
<a id="schema_CertificateMap"></a>
<a id="tocScertificatemap"></a>
<a id="tocscertificatemap"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "gclbTargets": [
    {
      "ipConfigs": [
        {
          "ipAddress": "string",
          "ports": [
            0
          ]
        }
      ],
      "targetHttpsProxy": "string",
      "targetSslProxy": "string"
    }
  ],
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "updateTime": "string"
}
```

Defines a collection of certificate configurations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The creation timestamp of a Certificate Map.|
|description|string|false|none|One or more paragraphs of text description of a certificate map.|
|gclbTargets|[[GclbTarget](#schemagclbtarget)]|false|read-only|Output only. A list of GCLB targets that use this Certificate Map. A Target Proxy is only present on this list if it's attached to a Forwarding Rule.|
|labels|object|false|none|Set of labels associated with a Certificate Map.|
|name|string|false|none|A user-defined name of the Certificate Map. Certificate Map names must be unique globally and match pattern `projects/*/locations/*/certificateMaps/*`.|
|updateTime|string(google-datetime)|false|read-only|Output only. The update timestamp of a Certificate Map.|

<h2 id="tocS_CertificateMapEntry">CertificateMapEntry</h2>
<!-- backwards compatibility -->
<a id="schemacertificatemapentry"></a>
<a id="schema_CertificateMapEntry"></a>
<a id="tocScertificatemapentry"></a>
<a id="tocscertificatemapentry"></a>

```json
{
  "certificates": [
    "string"
  ],
  "createTime": "string",
  "description": "string",
  "hostname": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "matcher": "MATCHER_UNSPECIFIED",
  "name": "string",
  "state": "SERVING_STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

Defines a certificate map entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificates|[string]|false|none|A set of Certificates defines for the given `hostname`. There can be defined up to four certificates in each Certificate Map Entry. Each certificate must match pattern `projects/*/locations/*/certificates/*`.|
|createTime|string(google-datetime)|false|read-only|Output only. The creation timestamp of a Certificate Map Entry.|
|description|string|false|none|One or more paragraphs of text description of a certificate map entry.|
|hostname|string|false|none|A Hostname (FQDN, e.g. `example.com`) or a wildcard hostname expression (`*.example.com`) for a set of hostnames with common suffix. Used as Server Name Indication (SNI) for selecting a proper certificate.|
|labels|object|false|none|Set of labels associated with a Certificate Map Entry.|
|matcher|string|false|none|A predefined matcher for particular cases, other than SNI selection.|
|name|string|false|none|A user-defined name of the Certificate Map Entry. Certificate Map Entry names must be unique globally and match pattern `projects/*/locations/*/certificateMaps/*/certificateMapEntries/*`.|
|state|string|false|read-only|Output only. A serving state of this Certificate Map Entry.|
|updateTime|string(google-datetime)|false|read-only|Output only. The update timestamp of a Certificate Map Entry.|

#### Enumerated Values

|Property|Value|
|---|---|
|matcher|MATCHER_UNSPECIFIED|
|matcher|PRIMARY|
|state|SERVING_STATE_UNSPECIFIED|
|state|ACTIVE|
|state|PENDING|

<h2 id="tocS_DnsAuthorization">DnsAuthorization</h2>
<!-- backwards compatibility -->
<a id="schemadnsauthorization"></a>
<a id="schema_DnsAuthorization"></a>
<a id="tocSdnsauthorization"></a>
<a id="tocsdnsauthorization"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "dnsResourceRecord": {
    "data": "string",
    "name": "string",
    "type": "string"
  },
  "domain": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "updateTime": "string"
}
```

A DnsAuthorization resource describes a way to perform domain authorization for certificate issuance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The creation timestamp of a DnsAuthorization.|
|description|string|false|none|One or more paragraphs of text description of a DnsAuthorization.|
|dnsResourceRecord|[DnsResourceRecord](#schemadnsresourcerecord)|false|none|Output only. DNS Resource Record that needs to be added to DNS configuration.|
|domain|string|false|none|Required. Immutable. A domain that is being authorized. A DnsAuthorization resource covers a single domain and its wildcard, e.g. authorization for `example.com` can be used to issue certificates for `example.com` and `*.example.com`.|
|labels|object|false|none|Set of labels associated with a DnsAuthorization.|
|name|string|false|none|A user-defined name of the dns authorization. DnsAuthorization names must be unique globally and match pattern `projects/*/locations/*/dnsAuthorizations/*`.|
|updateTime|string(google-datetime)|false|read-only|Output only. The last update timestamp of a DnsAuthorization.|

<h2 id="tocS_DnsResourceRecord">DnsResourceRecord</h2>
<!-- backwards compatibility -->
<a id="schemadnsresourcerecord"></a>
<a id="schema_DnsResourceRecord"></a>
<a id="tocSdnsresourcerecord"></a>
<a id="tocsdnsresourcerecord"></a>

```json
{
  "data": "string",
  "name": "string",
  "type": "string"
}
```

The structure describing the DNS Resource Record that needs to be added to DNS configuration for the authorization to be usable by certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|false|read-only|Output only. Data of the DNS Resource Record.|
|name|string|false|read-only|Output only. Fully qualified name of the DNS Resource Record. e.g. `_acme-challenge.example.com`|
|type|string|false|read-only|Output only. Type of the DNS Resource Record. Currently always set to "CNAME".|

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

<h2 id="tocS_GclbTarget">GclbTarget</h2>
<!-- backwards compatibility -->
<a id="schemagclbtarget"></a>
<a id="schema_GclbTarget"></a>
<a id="tocSgclbtarget"></a>
<a id="tocsgclbtarget"></a>

```json
{
  "ipConfigs": [
    {
      "ipAddress": "string",
      "ports": [
        0
      ]
    }
  ],
  "targetHttpsProxy": "string",
  "targetSslProxy": "string"
}
```

Describes a Target Proxy that uses this Certificate Map.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ipConfigs|[[IpConfig](#schemaipconfig)]|false|read-only|Output only. IP configurations for this Target Proxy where the Certificate Map is serving.|
|targetHttpsProxy|string|false|read-only|Output only. This field returns the resource name in the following format: `//compute.googleapis.com/projects/*/global/targetHttpsProxies/*`.|
|targetSslProxy|string|false|read-only|Output only. This field returns the resource name in the following format: `//compute.googleapis.com/projects/*/global/targetSslProxies/*`.|

<h2 id="tocS_IntermediateCA">IntermediateCA</h2>
<!-- backwards compatibility -->
<a id="schemaintermediateca"></a>
<a id="schema_IntermediateCA"></a>
<a id="tocSintermediateca"></a>
<a id="tocsintermediateca"></a>

```json
{
  "pemCertificate": "string"
}
```

Defines an intermediate CA.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pemCertificate|string|false|none|PEM intermediate certificate used for building up paths for validation. Each certificate provided in PEM format may occupy up to 5kB.|

<h2 id="tocS_IpConfig">IpConfig</h2>
<!-- backwards compatibility -->
<a id="schemaipconfig"></a>
<a id="schema_IpConfig"></a>
<a id="tocSipconfig"></a>
<a id="tocsipconfig"></a>

```json
{
  "ipAddress": "string",
  "ports": [
    0
  ]
}
```

Defines IP configuration where this Certificate Map is serving.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ipAddress|string|false|read-only|Output only. An external IP address.|
|ports|[integer(uint32)]|false|read-only|Output only. Ports.|

<h2 id="tocS_ListCertificateIssuanceConfigsResponse">ListCertificateIssuanceConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcertificateissuanceconfigsresponse"></a>
<a id="schema_ListCertificateIssuanceConfigsResponse"></a>
<a id="tocSlistcertificateissuanceconfigsresponse"></a>
<a id="tocslistcertificateissuanceconfigsresponse"></a>

```json
{
  "certificateIssuanceConfigs": [
    {
      "certificateAuthorityConfig": {
        "certificateAuthorityServiceConfig": {
          "caPool": "string"
        }
      },
      "createTime": "string",
      "description": "string",
      "keyAlgorithm": "KEY_ALGORITHM_UNSPECIFIED",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "lifetime": "string",
      "name": "string",
      "rotationWindowPercentage": 0,
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

Response for the `ListCertificateIssuanceConfigs` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificateIssuanceConfigs|[[CertificateIssuanceConfig](#schemacertificateissuanceconfig)]|false|none|A list of certificate configs for the parent resource.|
|nextPageToken|string|false|none|If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.|
|unreachable|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_ListCertificateMapEntriesResponse">ListCertificateMapEntriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcertificatemapentriesresponse"></a>
<a id="schema_ListCertificateMapEntriesResponse"></a>
<a id="tocSlistcertificatemapentriesresponse"></a>
<a id="tocslistcertificatemapentriesresponse"></a>

```json
{
  "certificateMapEntries": [
    {
      "certificates": [
        "string"
      ],
      "createTime": "string",
      "description": "string",
      "hostname": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "matcher": "MATCHER_UNSPECIFIED",
      "name": "string",
      "state": "SERVING_STATE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

Response for the `ListCertificateMapEntries` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificateMapEntries|[[CertificateMapEntry](#schemacertificatemapentry)]|false|none|A list of certificate map entries for the parent resource.|
|nextPageToken|string|false|none|If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.|
|unreachable|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_ListCertificateMapsResponse">ListCertificateMapsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcertificatemapsresponse"></a>
<a id="schema_ListCertificateMapsResponse"></a>
<a id="tocSlistcertificatemapsresponse"></a>
<a id="tocslistcertificatemapsresponse"></a>

```json
{
  "certificateMaps": [
    {
      "createTime": "string",
      "description": "string",
      "gclbTargets": [
        {
          "ipConfigs": [
            {
              "ipAddress": "string",
              "ports": [
                0
              ]
            }
          ],
          "targetHttpsProxy": "string",
          "targetSslProxy": "string"
        }
      ],
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

Response for the `ListCertificateMaps` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificateMaps|[[CertificateMap](#schemacertificatemap)]|false|none|A list of certificate maps for the parent resource.|
|nextPageToken|string|false|none|If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.|
|unreachable|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_ListCertificatesResponse">ListCertificatesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcertificatesresponse"></a>
<a id="schema_ListCertificatesResponse"></a>
<a id="tocSlistcertificatesresponse"></a>
<a id="tocslistcertificatesresponse"></a>

```json
{
  "certificates": [
    {
      "createTime": "string",
      "description": "string",
      "expireTime": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "managed": {
        "authorizationAttemptInfo": [
          {
            "details": "string",
            "domain": "string",
            "failureReason": "FAILURE_REASON_UNSPECIFIED",
            "state": "STATE_UNSPECIFIED"
          }
        ],
        "dnsAuthorizations": [
          "string"
        ],
        "domains": [
          "string"
        ],
        "issuanceConfig": "string",
        "provisioningIssue": {
          "details": "string",
          "reason": "REASON_UNSPECIFIED"
        },
        "state": "STATE_UNSPECIFIED"
      },
      "name": "string",
      "pemCertificate": "string",
      "sanDnsnames": [
        "string"
      ],
      "scope": "DEFAULT",
      "selfManaged": {
        "pemCertificate": "string",
        "pemPrivateKey": "string"
      },
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

Response for the `ListCertificates` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificates|[[Certificate](#schemacertificate)]|false|none|A list of certificates for the parent resource.|
|nextPageToken|string|false|none|If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.|
|unreachable|[string]|false|none|A list of locations that could not be reached.|

<h2 id="tocS_ListDnsAuthorizationsResponse">ListDnsAuthorizationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdnsauthorizationsresponse"></a>
<a id="schema_ListDnsAuthorizationsResponse"></a>
<a id="tocSlistdnsauthorizationsresponse"></a>
<a id="tocslistdnsauthorizationsresponse"></a>

```json
{
  "dnsAuthorizations": [
    {
      "createTime": "string",
      "description": "string",
      "dnsResourceRecord": {
        "data": "string",
        "name": "string",
        "type": "string"
      },
      "domain": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

Response for the `ListDnsAuthorizations` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dnsAuthorizations|[[DnsAuthorization](#schemadnsauthorization)]|false|none|A list of dns authorizations for the parent resource.|
|nextPageToken|string|false|none|If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.|
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

<h2 id="tocS_ListTrustConfigsResponse">ListTrustConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttrustconfigsresponse"></a>
<a id="schema_ListTrustConfigsResponse"></a>
<a id="tocSlisttrustconfigsresponse"></a>
<a id="tocslisttrustconfigsresponse"></a>

```json
{
  "nextPageToken": "string",
  "trustConfigs": [
    {
      "createTime": "string",
      "description": "string",
      "etag": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "trustStores": [
        {
          "intermediateCas": [
            {
              "pemCertificate": "string"
            }
          ],
          "trustAnchors": [
            {
              "pemCertificate": "string"
            }
          ]
        }
      ],
      "updateTime": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

Response for the `ListTrustConfigs` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.|
|trustConfigs|[[TrustConfig](#schematrustconfig)]|false|none|A list of TrustConfigs for the parent resource.|
|unreachable|[string]|false|none|Locations that could not be reached.|

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

<h2 id="tocS_ManagedCertificate">ManagedCertificate</h2>
<!-- backwards compatibility -->
<a id="schemamanagedcertificate"></a>
<a id="schema_ManagedCertificate"></a>
<a id="tocSmanagedcertificate"></a>
<a id="tocsmanagedcertificate"></a>

```json
{
  "authorizationAttemptInfo": [
    {
      "details": "string",
      "domain": "string",
      "failureReason": "FAILURE_REASON_UNSPECIFIED",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "dnsAuthorizations": [
    "string"
  ],
  "domains": [
    "string"
  ],
  "issuanceConfig": "string",
  "provisioningIssue": {
    "details": "string",
    "reason": "REASON_UNSPECIFIED"
  },
  "state": "STATE_UNSPECIFIED"
}
```

Configuration and state of a Managed Certificate. Certificate Manager provisions and renews Managed Certificates automatically, for as long as it's authorized to do so.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorizationAttemptInfo|[[AuthorizationAttemptInfo](#schemaauthorizationattemptinfo)]|false|read-only|Output only. Detailed state of the latest authorization attempt for each domain specified for managed certificate resource.|
|dnsAuthorizations|[string]|false|none|Immutable. Authorizations that will be used for performing domain authorization.|
|domains|[string]|false|none|Immutable. The domains for which a managed SSL certificate will be generated. Wildcard domains are only supported with DNS challenge resolution.|
|issuanceConfig|string|false|none|Immutable. The resource name for a CertificateIssuanceConfig used to configure private PKI certificates in the format `projects/*/locations/*/certificateIssuanceConfigs/*`. If this field is not set, the certificates will instead be publicly signed as documented at https://cloud.google.com/load-balancing/docs/ssl-certificates/google-managed-certs#caa.|
|provisioningIssue|[ProvisioningIssue](#schemaprovisioningissue)|false|none|Output only. Information about issues with provisioning a Managed Certificate.|
|state|string|false|read-only|Output only. State of the managed certificate resource.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|PROVISIONING|
|state|FAILED|
|state|ACTIVE|

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
  "createTime": "string",
  "endTime": "string",
  "requestedCancellation": true,
  "statusMessage": "string",
  "target": "string",
  "verb": "string"
}
```

Represents the metadata of the long-running operation. Output only.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|none|API version used to start the operation.|
|createTime|string(google-datetime)|false|none|The time the operation was created.|
|endTime|string(google-datetime)|false|none|The time the operation finished running.|
|requestedCancellation|boolean|false|none|Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.|
|statusMessage|string|false|none|Human-readable status of the operation, if any.|
|target|string|false|none|Server-defined resource path for the target of the operation.|
|verb|string|false|none|Name of the verb executed by the operation.|

<h2 id="tocS_ProvisioningIssue">ProvisioningIssue</h2>
<!-- backwards compatibility -->
<a id="schemaprovisioningissue"></a>
<a id="schema_ProvisioningIssue"></a>
<a id="tocSprovisioningissue"></a>
<a id="tocsprovisioningissue"></a>

```json
{
  "details": "string",
  "reason": "REASON_UNSPECIFIED"
}
```

Information about issues with provisioning a Managed Certificate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|string|false|read-only|Output only. Human readable explanation about the issue. Provided to help address the configuration issues. Not guaranteed to be stable. For programmatic access use Reason enum.|
|reason|string|false|read-only|Output only. Reason for provisioning failures.|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|REASON_UNSPECIFIED|
|reason|AUTHORIZATION_ISSUE|
|reason|RATE_LIMITED|

<h2 id="tocS_SelfManagedCertificate">SelfManagedCertificate</h2>
<!-- backwards compatibility -->
<a id="schemaselfmanagedcertificate"></a>
<a id="schema_SelfManagedCertificate"></a>
<a id="tocSselfmanagedcertificate"></a>
<a id="tocsselfmanagedcertificate"></a>

```json
{
  "pemCertificate": "string",
  "pemPrivateKey": "string"
}
```

Certificate data for a SelfManaged Certificate. SelfManaged Certificates are uploaded by the user. Updating such certificates before they expire remains the user's responsibility.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pemCertificate|string|false|none|Input only. The PEM-encoded certificate chain. Leaf certificate comes first, followed by intermediate ones if any.|
|pemPrivateKey|string|false|none|Input only. The PEM-encoded private key of the leaf certificate.|

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

<h2 id="tocS_TrustAnchor">TrustAnchor</h2>
<!-- backwards compatibility -->
<a id="schematrustanchor"></a>
<a id="schema_TrustAnchor"></a>
<a id="tocStrustanchor"></a>
<a id="tocstrustanchor"></a>

```json
{
  "pemCertificate": "string"
}
```

Defines a trust anchor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pemCertificate|string|false|none|PEM root certificate of the PKI used for validation. Each certificate provided in PEM format may occupy up to 5kB.|

<h2 id="tocS_TrustConfig">TrustConfig</h2>
<!-- backwards compatibility -->
<a id="schematrustconfig"></a>
<a id="schema_TrustConfig"></a>
<a id="tocStrustconfig"></a>
<a id="tocstrustconfig"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "etag": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "trustStores": [
    {
      "intermediateCas": [
        {
          "pemCertificate": "string"
        }
      ],
      "trustAnchors": [
        {
          "pemCertificate": "string"
        }
      ]
    }
  ],
  "updateTime": "string"
}
```

Defines a trust config.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The creation timestamp of a TrustConfig.|
|description|string|false|none|One or more paragraphs of text description of a TrustConfig.|
|etag|string|false|none|This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.|
|labels|object|false|none|Set of labels associated with a TrustConfig.|
|name|string|false|none|A user-defined name of the trust config. TrustConfig names must be unique globally and match pattern `projects/*/locations/*/trustConfigs/*`.|
|trustStores|[[TrustStore](#schematruststore)]|false|none|Set of trust stores to perform validation against. This field is supported when TrustConfig is configured with Load Balancers, currently not supported for SPIFFE certificate validation. Only one TrustStore specified is currently allowed.|
|updateTime|string(google-datetime)|false|read-only|Output only. The last update timestamp of a TrustConfig.|

<h2 id="tocS_TrustStore">TrustStore</h2>
<!-- backwards compatibility -->
<a id="schematruststore"></a>
<a id="schema_TrustStore"></a>
<a id="tocStruststore"></a>
<a id="tocstruststore"></a>

```json
{
  "intermediateCas": [
    {
      "pemCertificate": "string"
    }
  ],
  "trustAnchors": [
    {
      "pemCertificate": "string"
    }
  ]
}
```

Defines a trust store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|intermediateCas|[[IntermediateCA](#schemaintermediateca)]|false|none|Set of intermediate CA certificates used for the path building phase of chain validation. The field is currently not supported if TrustConfig is used for the workload certificate feature.|
|trustAnchors|[[TrustAnchor](#schematrustanchor)]|false|none|List of Trust Anchors to be used while performing validation against a given TrustStore.|
