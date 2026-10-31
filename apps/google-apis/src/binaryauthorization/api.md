<h1 id="binary-authorization-api">Binary Authorization API v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The management interface for Binary Authorization, a service that provides policy-based deployment validation and control for images deployed to Google Kubernetes Engine (GKE), Anthos Service Mesh, Anthos Clusters, and Cloud Run.

Base URLs:

* <a href="https://binaryauthorization.googleapis.com/">https://binaryauthorization.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/binary-authorization/">External documentation</a>

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

<h1 id="binary-authorization-api-projects">projects</h1>

## binaryauthorization.projects.attestors.validateAttestationOccurrence

<a id="opIdbinaryauthorization.projects.attestors.validateAttestationOccurrence"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:validateAttestationOccurrence \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attestation": {
      "jwts": [
        {
          "compactJwt": "string"
        }
      ],
      "serializedPayload": "string",
      "signatures": [
        {
          "publicKeyId": "string",
          "signature": "string"
        }
      ]
    },
    "occurrenceNote": "string",
    "occurrenceResourceUri": "string"
  }'
```

`POST /v1beta1/{attestor}:validateAttestationOccurrence`

Returns whether the given Attestation for the given image URI was signed by the given Attestor

> Body parameter

```json
{
  "attestation": {
    "jwts": [
      {
        "compactJwt": "string"
      }
    ],
    "serializedPayload": "string",
    "signatures": [
      {
        "publicKeyId": "string",
        "signature": "string"
      }
    ]
  },
  "occurrenceNote": "string",
  "occurrenceResourceUri": "string"
}
```

<h3 id="binaryauthorizationprojectsattestorsvalidateattestationoccurrence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|attestor|path|string|true|Required. The resource name of the Attestor of the occurrence, in the format `projects/*/attestors/*`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[ValidateAttestationOccurrenceRequest](#schemavalidateattestationoccurrencerequest)|false|none|
|» attestation|body|[AttestationOccurrence](#schemaattestationoccurrence)|false|Required. An AttestationOccurrence to be checked that it can be verified by the Attestor. It does not have to be an existing entity in Container Analysis. It must otherwise be a valid AttestationOccurrence.|
|» occurrenceNote|body|string|false|Required. The resource name of the Note to which the containing Occurrence is associated.|
|» occurrenceResourceUri|body|string|false|Required. The URI of the artifact (e.g. container image) that is the subject of the containing Occurrence.|

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
  "denialReason": "string",
  "result": "RESULT_UNSPECIFIED"
}
```

<h3 id="binaryauthorizationprojectsattestorsvalidateattestationoccurrence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ValidateAttestationOccurrenceResponse](#schemavalidateattestationoccurrenceresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## binaryauthorization.projects.attestors.update

<a id="opIdbinaryauthorization.projects.attestors.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "etag": "string",
    "name": "string",
    "userOwnedDrydockNote": {
      "noteReference": "string",
      "publicKeys": [
        {
          "asciiArmoredPgpPublicKey": "string",
          "comment": "string",
          "id": "string",
          "pkixPublicKey": {
            "publicKeyPem": "string",
            "signatureAlgorithm": "SIGNATURE_ALGORITHM_UNSPECIFIED"
          }
        }
      ]
    }
  }'
```

`PUT /v1beta1/{name}`

Updates an attestor. Returns NOT_FOUND if the attestor does not exist.

> Body parameter

```json
{
  "description": "string",
  "etag": "string",
  "name": "string",
  "userOwnedDrydockNote": {
    "noteReference": "string",
    "publicKeys": [
      {
        "asciiArmoredPgpPublicKey": "string",
        "comment": "string",
        "id": "string",
        "pkixPublicKey": {
          "publicKeyPem": "string",
          "signatureAlgorithm": "SIGNATURE_ALGORITHM_UNSPECIFIED"
        }
      }
    ]
  }
}
```

<h3 id="binaryauthorizationprojectsattestorsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name, in the format: `projects/*/attestors/*`. This field may not be updated.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Attestor](#schemaattestor)|false|none|
|» description|body|string|false|Optional. A descriptive comment. This field may be updated. The field may be displayed in chooser dialogs.|
|» etag|body|string|false|Optional. A checksum, returned by the server, that can be sent on update requests to ensure the attestor has an up-to-date value before attempting to update it. See https://google.aip.dev/154.|
|» name|body|string|false|Required. The resource name, in the format: `projects/*/attestors/*`. This field may not be updated.|
|» userOwnedDrydockNote|body|[UserOwnedDrydockNote](#schemauserowneddrydocknote)|false|A Drydock ATTESTATION_AUTHORITY Note, created by the user.|

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
  "etag": "string",
  "name": "string",
  "updateTime": "string",
  "userOwnedDrydockNote": {
    "delegationServiceAccountEmail": "string",
    "noteReference": "string",
    "publicKeys": [
      {
        "asciiArmoredPgpPublicKey": "string",
        "comment": "string",
        "id": "string",
        "pkixPublicKey": {
          "publicKeyPem": "string",
          "signatureAlgorithm": "SIGNATURE_ALGORITHM_UNSPECIFIED"
        }
      }
    ]
  }
}
```

<h3 id="binaryauthorizationprojectsattestorsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Attestor](#schemaattestor)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## binaryauthorization.projects.attestors.delete

<a id="opIdbinaryauthorization.projects.attestors.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/{name}`

Deletes an attestor. Returns NOT_FOUND if the attestor does not exist.

<h3 id="binaryauthorizationprojectsattestorsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the attestors to delete, in the format `projects/*/attestors/*`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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

<h3 id="binaryauthorizationprojectsattestorsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## binaryauthorization.projects.attestors.list

<a id="opIdbinaryauthorization.projects.attestors.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/attestors \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/attestors`

Lists attestors. Returns INVALID_ARGUMENT if the project does not exist.

<h3 id="binaryauthorizationprojectsattestorslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the project associated with the attestors, in the format `projects/*`.|
|pageSize|query|integer|false|Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results the server should return. Typically, this is the value of ListAttestorsResponse.next_page_token returned from the previous call to the `ListAttestors` method.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "attestors": [
    {
      "description": "string",
      "etag": "string",
      "name": "string",
      "updateTime": "string",
      "userOwnedDrydockNote": {
        "delegationServiceAccountEmail": "string",
        "noteReference": "string",
        "publicKeys": [
          {
            "asciiArmoredPgpPublicKey": "string",
            "comment": "string",
            "id": "string",
            "pkixPublicKey": {
              "publicKeyPem": "string",
              "signatureAlgorithm": "SIGNATURE_ALGORITHM_UNSPECIFIED"
            }
          }
        ]
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="binaryauthorizationprojectsattestorslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAttestorsResponse](#schemalistattestorsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## binaryauthorization.projects.attestors.create

<a id="opIdbinaryauthorization.projects.attestors.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/attestors \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "etag": "string",
    "name": "string",
    "userOwnedDrydockNote": {
      "noteReference": "string",
      "publicKeys": [
        {
          "asciiArmoredPgpPublicKey": "string",
          "comment": "string",
          "id": "string",
          "pkixPublicKey": {
            "publicKeyPem": "string",
            "signatureAlgorithm": "SIGNATURE_ALGORITHM_UNSPECIFIED"
          }
        }
      ]
    }
  }'
```

`POST /v1beta1/{parent}/attestors`

Creates an attestor, and returns a copy of the new attestor. Returns NOT_FOUND if the project does not exist, INVALID_ARGUMENT if the request is malformed, ALREADY_EXISTS if the attestor already exists.

> Body parameter

```json
{
  "description": "string",
  "etag": "string",
  "name": "string",
  "userOwnedDrydockNote": {
    "noteReference": "string",
    "publicKeys": [
      {
        "asciiArmoredPgpPublicKey": "string",
        "comment": "string",
        "id": "string",
        "pkixPublicKey": {
          "publicKeyPem": "string",
          "signatureAlgorithm": "SIGNATURE_ALGORITHM_UNSPECIFIED"
        }
      }
    ]
  }
}
```

<h3 id="binaryauthorizationprojectsattestorscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent of this attestor.|
|attestorId|query|string|false|Required. The attestors ID.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Attestor](#schemaattestor)|false|none|
|» description|body|string|false|Optional. A descriptive comment. This field may be updated. The field may be displayed in chooser dialogs.|
|» etag|body|string|false|Optional. A checksum, returned by the server, that can be sent on update requests to ensure the attestor has an up-to-date value before attempting to update it. See https://google.aip.dev/154.|
|» name|body|string|false|Required. The resource name, in the format: `projects/*/attestors/*`. This field may not be updated.|
|» userOwnedDrydockNote|body|[UserOwnedDrydockNote](#schemauserowneddrydocknote)|false|A Drydock ATTESTATION_AUTHORITY Note, created by the user.|

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
  "etag": "string",
  "name": "string",
  "updateTime": "string",
  "userOwnedDrydockNote": {
    "delegationServiceAccountEmail": "string",
    "noteReference": "string",
    "publicKeys": [
      {
        "asciiArmoredPgpPublicKey": "string",
        "comment": "string",
        "id": "string",
        "pkixPublicKey": {
          "publicKeyPem": "string",
          "signatureAlgorithm": "SIGNATURE_ALGORITHM_UNSPECIFIED"
        }
      }
    ]
  }
}
```

<h3 id="binaryauthorizationprojectsattestorscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Attestor](#schemaattestor)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## binaryauthorization.projects.policy.getIamPolicy

<a id="opIdbinaryauthorization.projects.policy.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:getIamPolicy \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{resource}:getIamPolicy`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

<h3 id="binaryauthorizationprojectspolicygetiampolicy-parameters">Parameters</h3>

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

<h3 id="binaryauthorizationprojectspolicygetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[IamPolicy](#schemaiampolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## binaryauthorization.projects.policy.setIamPolicy

<a id="opIdbinaryauthorization.projects.policy.setIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:setIamPolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
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

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

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

<h3 id="binaryauthorizationprojectspolicysetiampolicy-parameters">Parameters</h3>

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
|» policy|body|[IamPolicy](#schemaiampolicy)|false|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|

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

<h3 id="binaryauthorizationprojectspolicysetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[IamPolicy](#schemaiampolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## binaryauthorization.projects.policy.testIamPermissions

<a id="opIdbinaryauthorization.projects.policy.testIamPermissions"></a>

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

<h3 id="binaryauthorizationprojectspolicytestiampermissions-parameters">Parameters</h3>

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

<h3 id="binaryauthorizationprojectspolicytestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TestIamPermissionsResponse](#schematestiampermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="binary-authorization-api-systempolicy">systempolicy</h1>

## binaryauthorization.systempolicy.getPolicy

<a id="opIdbinaryauthorization.systempolicy.getPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}`

Gets the current system policy in the specified location.

<h3 id="binaryauthorizationsystempolicygetpolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name, in the format `locations/*/policy`. Note that the system policy is not associated with a project.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
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
  "admissionWhitelistPatterns": [
    {
      "namePattern": "string"
    }
  ],
  "clusterAdmissionRules": {
    "property1": {
      "enforcementMode": "ENFORCEMENT_MODE_UNSPECIFIED",
      "evaluationMode": "EVALUATION_MODE_UNSPECIFIED",
      "requireAttestationsBy": [
        "string"
      ]
    },
    "property2": {
      "enforcementMode": "ENFORCEMENT_MODE_UNSPECIFIED",
      "evaluationMode": "EVALUATION_MODE_UNSPECIFIED",
      "requireAttestationsBy": [
        "string"
      ]
    }
  },
  "defaultAdmissionRule": {
    "enforcementMode": "ENFORCEMENT_MODE_UNSPECIFIED",
    "evaluationMode": "EVALUATION_MODE_UNSPECIFIED",
    "requireAttestationsBy": [
      "string"
    ]
  },
  "description": "string",
  "etag": "string",
  "globalPolicyEvaluationMode": "GLOBAL_POLICY_EVALUATION_MODE_UNSPECIFIED",
  "istioServiceIdentityAdmissionRules": {
    "property1": {
      "enforcementMode": "ENFORCEMENT_MODE_UNSPECIFIED",
      "evaluationMode": "EVALUATION_MODE_UNSPECIFIED",
      "requireAttestationsBy": [
        "string"
      ]
    },
    "property2": {
      "enforcementMode": "ENFORCEMENT_MODE_UNSPECIFIED",
      "evaluationMode": "EVALUATION_MODE_UNSPECIFIED",
      "requireAttestationsBy": [
        "string"
      ]
    }
  },
  "kubernetesNamespaceAdmissionRules": {
    "property1": {
      "enforcementMode": "ENFORCEMENT_MODE_UNSPECIFIED",
      "evaluationMode": "EVALUATION_MODE_UNSPECIFIED",
      "requireAttestationsBy": [
        "string"
      ]
    },
    "property2": {
      "enforcementMode": "ENFORCEMENT_MODE_UNSPECIFIED",
      "evaluationMode": "EVALUATION_MODE_UNSPECIFIED",
      "requireAttestationsBy": [
        "string"
      ]
    }
  },
  "kubernetesServiceAccountAdmissionRules": {
    "property1": {
      "enforcementMode": "ENFORCEMENT_MODE_UNSPECIFIED",
      "evaluationMode": "EVALUATION_MODE_UNSPECIFIED",
      "requireAttestationsBy": [
        "string"
      ]
    },
    "property2": {
      "enforcementMode": "ENFORCEMENT_MODE_UNSPECIFIED",
      "evaluationMode": "EVALUATION_MODE_UNSPECIFIED",
      "requireAttestationsBy": [
        "string"
      ]
    }
  },
  "name": "string",
  "updateTime": "string"
}
```

<h3 id="binaryauthorizationsystempolicygetpolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AdmissionRule">AdmissionRule</h2>
<!-- backwards compatibility -->
<a id="schemaadmissionrule"></a>
<a id="schema_AdmissionRule"></a>
<a id="tocSadmissionrule"></a>
<a id="tocsadmissionrule"></a>

```json
{
  "enforcementMode": "ENFORCEMENT_MODE_UNSPECIFIED",
  "evaluationMode": "EVALUATION_MODE_UNSPECIFIED",
  "requireAttestationsBy": [
    "string"
  ]
}
```

An admission rule specifies either that all container images used in a pod creation request must be attested to by one or more attestors, that all pod creations will be allowed, or that all pod creations will be denied. Images matching an admission allowlist pattern are exempted from admission rules and will never block a pod creation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enforcementMode|string|false|none|Required. The action when a pod creation is denied by the admission rule.|
|evaluationMode|string|false|none|Required. How this admission rule will be evaluated.|
|requireAttestationsBy|[string]|false|none|Optional. The resource names of the attestors that must attest to a container image, in the format `projects/*/attestors/*`. Each attestor must exist before a policy can reference it. To add an attestor to a policy the principal issuing the policy change request must be able to read the attestor resource. Note: this field must be non-empty when the evaluation_mode field specifies REQUIRE_ATTESTATION, otherwise it must be empty.|

#### Enumerated Values

|Property|Value|
|---|---|
|enforcementMode|ENFORCEMENT_MODE_UNSPECIFIED|
|enforcementMode|ENFORCED_BLOCK_AND_AUDIT_LOG|
|enforcementMode|DRYRUN_AUDIT_LOG_ONLY|
|evaluationMode|EVALUATION_MODE_UNSPECIFIED|
|evaluationMode|ALWAYS_ALLOW|
|evaluationMode|REQUIRE_ATTESTATION|
|evaluationMode|ALWAYS_DENY|

<h2 id="tocS_AdmissionWhitelistPattern">AdmissionWhitelistPattern</h2>
<!-- backwards compatibility -->
<a id="schemaadmissionwhitelistpattern"></a>
<a id="schema_AdmissionWhitelistPattern"></a>
<a id="tocSadmissionwhitelistpattern"></a>
<a id="tocsadmissionwhitelistpattern"></a>

```json
{
  "namePattern": "string"
}
```

An admission allowlist pattern exempts images from checks by admission rules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namePattern|string|false|none|An image name pattern to allowlist, in the form `registry/path/to/image`. This supports a trailing `*` as a wildcard, but this is allowed only in text after the `registry/` part. `*` wildcard does not match `/`, i.e., `gcr.io/nginx*` matches `gcr.io/nginx@latest`, but it does not match `gcr.io/nginx/image`. This also supports a trailing `**` wildcard which matches subdirectories, i.e., `gcr.io/nginx**` matches `gcr.io/nginx/image`.|

<h2 id="tocS_AttestationOccurrence">AttestationOccurrence</h2>
<!-- backwards compatibility -->
<a id="schemaattestationoccurrence"></a>
<a id="schema_AttestationOccurrence"></a>
<a id="tocSattestationoccurrence"></a>
<a id="tocsattestationoccurrence"></a>

```json
{
  "jwts": [
    {
      "compactJwt": "string"
    }
  ],
  "serializedPayload": "string",
  "signatures": [
    {
      "publicKeyId": "string",
      "signature": "string"
    }
  ]
}
```

Occurrence that represents a single "attestation". The authenticity of an attestation can be verified using the attached signature. If the verifier trusts the public key of the signer, then verifying the signature is sufficient to establish trust. In this circumstance, the authority to which this attestation is attached is primarily useful for lookup (how to find this attestation if you already know the authority and artifact to be verified) and intent (for which authority this attestation was intended to sign.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jwts|[[Jwt](#schemajwt)]|false|none|One or more JWTs encoding a self-contained attestation. Each JWT encodes the payload that it verifies within the JWT itself. Verifier implementation SHOULD ignore the `serialized_payload` field when verifying these JWTs. If only JWTs are present on this AttestationOccurrence, then the `serialized_payload` SHOULD be left empty. Each JWT SHOULD encode a claim specific to the `resource_uri` of this Occurrence, but this is not validated by Grafeas metadata API implementations. The JWT itself is opaque to Grafeas.|
|serializedPayload|string(byte)|false|none|Required. The serialized payload that is verified by one or more `signatures`.|
|signatures|[[Signature](#schemasignature)]|false|none|One or more signatures over `serialized_payload`. Verifier implementations should consider this attestation message verified if at least one `signature` verifies `serialized_payload`. See `Signature` in common.proto for more details on signature structure and verification.|

<h2 id="tocS_Attestor">Attestor</h2>
<!-- backwards compatibility -->
<a id="schemaattestor"></a>
<a id="schema_Attestor"></a>
<a id="tocSattestor"></a>
<a id="tocsattestor"></a>

```json
{
  "description": "string",
  "etag": "string",
  "name": "string",
  "updateTime": "string",
  "userOwnedDrydockNote": {
    "delegationServiceAccountEmail": "string",
    "noteReference": "string",
    "publicKeys": [
      {
        "asciiArmoredPgpPublicKey": "string",
        "comment": "string",
        "id": "string",
        "pkixPublicKey": {
          "publicKeyPem": "string",
          "signatureAlgorithm": "SIGNATURE_ALGORITHM_UNSPECIFIED"
        }
      }
    ]
  }
}
```

An attestor that attests to container image artifacts. An existing attestor cannot be modified except where indicated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Optional. A descriptive comment. This field may be updated. The field may be displayed in chooser dialogs.|
|etag|string|false|none|Optional. A checksum, returned by the server, that can be sent on update requests to ensure the attestor has an up-to-date value before attempting to update it. See https://google.aip.dev/154.|
|name|string|false|none|Required. The resource name, in the format: `projects/*/attestors/*`. This field may not be updated.|
|updateTime|string(google-datetime)|false|read-only|Output only. Time when the attestor was last updated.|
|userOwnedDrydockNote|[UserOwnedDrydockNote](#schemauserowneddrydocknote)|false|none|A Drydock ATTESTATION_AUTHORITY Note, created by the user.|

<h2 id="tocS_AttestorPublicKey">AttestorPublicKey</h2>
<!-- backwards compatibility -->
<a id="schemaattestorpublickey"></a>
<a id="schema_AttestorPublicKey"></a>
<a id="tocSattestorpublickey"></a>
<a id="tocsattestorpublickey"></a>

```json
{
  "asciiArmoredPgpPublicKey": "string",
  "comment": "string",
  "id": "string",
  "pkixPublicKey": {
    "publicKeyPem": "string",
    "signatureAlgorithm": "SIGNATURE_ALGORITHM_UNSPECIFIED"
  }
}
```

An attestor public key that will be used to verify attestations signed by this attestor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asciiArmoredPgpPublicKey|string|false|none|ASCII-armored representation of a PGP public key, as the entire output by the command `gpg --export --armor foo@example.com` (either LF or CRLF line endings). When using this field, `id` should be left blank. The BinAuthz API handlers will calculate the ID and fill it in automatically. BinAuthz computes this ID as the OpenPGP RFC4880 V4 fingerprint, represented as upper-case hex. If `id` is provided by the caller, it will be overwritten by the API-calculated ID.|
|comment|string|false|none|Optional. A descriptive comment. This field may be updated.|
|id|string|false|none|The ID of this public key. Signatures verified by BinAuthz must include the ID of the public key that can be used to verify them, and that ID must match the contents of this field exactly. Additional restrictions on this field can be imposed based on which public key type is encapsulated. See the documentation on `public_key` cases below for details.|
|pkixPublicKey|[PkixPublicKey](#schemapkixpublickey)|false|none|A raw PKIX SubjectPublicKeyInfo format public key. NOTE: `id` may be explicitly provided by the caller when using this type of public key, but it MUST be a valid RFC3986 URI. If `id` is left blank, a default one will be computed based on the digest of the DER encoding of the public key.|

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

<h2 id="tocS_IamPolicy">IamPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaiampolicy"></a>
<a id="schema_IamPolicy"></a>
<a id="tocSiampolicy"></a>
<a id="tocsiampolicy"></a>

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

An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bindings|[[Binding](#schemabinding)]|false|none|Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.|
|etag|string(byte)|false|none|`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.|
|version|integer(int32)|false|none|Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|

<h2 id="tocS_Jwt">Jwt</h2>
<!-- backwards compatibility -->
<a id="schemajwt"></a>
<a id="schema_Jwt"></a>
<a id="tocSjwt"></a>
<a id="tocsjwt"></a>

```json
{
  "compactJwt": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compactJwt|string|false|none|The compact encoding of a JWS, which is always three base64 encoded strings joined by periods. For details, see: https://tools.ietf.org/html/rfc7515.html#section-3.1|

<h2 id="tocS_ListAttestorsResponse">ListAttestorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistattestorsresponse"></a>
<a id="schema_ListAttestorsResponse"></a>
<a id="tocSlistattestorsresponse"></a>
<a id="tocslistattestorsresponse"></a>

```json
{
  "attestors": [
    {
      "description": "string",
      "etag": "string",
      "name": "string",
      "updateTime": "string",
      "userOwnedDrydockNote": {
        "delegationServiceAccountEmail": "string",
        "noteReference": "string",
        "publicKeys": [
          {
            "asciiArmoredPgpPublicKey": "string",
            "comment": "string",
            "id": "string",
            "pkixPublicKey": {
              "publicKeyPem": "string",
              "signatureAlgorithm": "SIGNATURE_ALGORITHM_UNSPECIFIED"
            }
          }
        ]
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response message for BinauthzManagementService.ListAttestors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attestors|[[Attestor](#schemaattestor)]|false|none|The list of attestors.|
|nextPageToken|string|false|none|A token to retrieve the next page of results. Pass this value in the ListAttestorsRequest.page_token field in the subsequent call to the `ListAttestors` method to retrieve the next page of results.|

<h2 id="tocS_PkixPublicKey">PkixPublicKey</h2>
<!-- backwards compatibility -->
<a id="schemapkixpublickey"></a>
<a id="schema_PkixPublicKey"></a>
<a id="tocSpkixpublickey"></a>
<a id="tocspkixpublickey"></a>

```json
{
  "publicKeyPem": "string",
  "signatureAlgorithm": "SIGNATURE_ALGORITHM_UNSPECIFIED"
}
```

A public key in the PkixPublicKey format (see https://tools.ietf.org/html/rfc5280#section-4.1.2.7 for details). Public keys of this type are typically textually encoded using the PEM format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|publicKeyPem|string|false|none|A PEM-encoded public key, as described in https://tools.ietf.org/html/rfc7468#section-13|
|signatureAlgorithm|string|false|none|The signature algorithm used to verify a message against a signature using this key. These signature algorithm must match the structure and any object identifiers encoded in `public_key_pem` (i.e. this algorithm must match that of the public key).|

#### Enumerated Values

|Property|Value|
|---|---|
|signatureAlgorithm|SIGNATURE_ALGORITHM_UNSPECIFIED|
|signatureAlgorithm|RSA_PSS_2048_SHA256|
|signatureAlgorithm|RSA_SIGN_PSS_2048_SHA256|
|signatureAlgorithm|RSA_PSS_3072_SHA256|
|signatureAlgorithm|RSA_SIGN_PSS_3072_SHA256|
|signatureAlgorithm|RSA_PSS_4096_SHA256|
|signatureAlgorithm|RSA_SIGN_PSS_4096_SHA256|
|signatureAlgorithm|RSA_PSS_4096_SHA512|
|signatureAlgorithm|RSA_SIGN_PSS_4096_SHA512|
|signatureAlgorithm|RSA_SIGN_PKCS1_2048_SHA256|
|signatureAlgorithm|RSA_SIGN_PKCS1_3072_SHA256|
|signatureAlgorithm|RSA_SIGN_PKCS1_4096_SHA256|
|signatureAlgorithm|RSA_SIGN_PKCS1_4096_SHA512|
|signatureAlgorithm|ECDSA_P256_SHA256|
|signatureAlgorithm|EC_SIGN_P256_SHA256|
|signatureAlgorithm|ECDSA_P384_SHA384|
|signatureAlgorithm|EC_SIGN_P384_SHA384|
|signatureAlgorithm|ECDSA_P521_SHA512|
|signatureAlgorithm|EC_SIGN_P521_SHA512|

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
{
  "admissionWhitelistPatterns": [
    {
      "namePattern": "string"
    }
  ],
  "clusterAdmissionRules": {
    "property1": {
      "enforcementMode": "ENFORCEMENT_MODE_UNSPECIFIED",
      "evaluationMode": "EVALUATION_MODE_UNSPECIFIED",
      "requireAttestationsBy": [
        "string"
      ]
    },
    "property2": {
      "enforcementMode": "ENFORCEMENT_MODE_UNSPECIFIED",
      "evaluationMode": "EVALUATION_MODE_UNSPECIFIED",
      "requireAttestationsBy": [
        "string"
      ]
    }
  },
  "defaultAdmissionRule": {
    "enforcementMode": "ENFORCEMENT_MODE_UNSPECIFIED",
    "evaluationMode": "EVALUATION_MODE_UNSPECIFIED",
    "requireAttestationsBy": [
      "string"
    ]
  },
  "description": "string",
  "etag": "string",
  "globalPolicyEvaluationMode": "GLOBAL_POLICY_EVALUATION_MODE_UNSPECIFIED",
  "istioServiceIdentityAdmissionRules": {
    "property1": {
      "enforcementMode": "ENFORCEMENT_MODE_UNSPECIFIED",
      "evaluationMode": "EVALUATION_MODE_UNSPECIFIED",
      "requireAttestationsBy": [
        "string"
      ]
    },
    "property2": {
      "enforcementMode": "ENFORCEMENT_MODE_UNSPECIFIED",
      "evaluationMode": "EVALUATION_MODE_UNSPECIFIED",
      "requireAttestationsBy": [
        "string"
      ]
    }
  },
  "kubernetesNamespaceAdmissionRules": {
    "property1": {
      "enforcementMode": "ENFORCEMENT_MODE_UNSPECIFIED",
      "evaluationMode": "EVALUATION_MODE_UNSPECIFIED",
      "requireAttestationsBy": [
        "string"
      ]
    },
    "property2": {
      "enforcementMode": "ENFORCEMENT_MODE_UNSPECIFIED",
      "evaluationMode": "EVALUATION_MODE_UNSPECIFIED",
      "requireAttestationsBy": [
        "string"
      ]
    }
  },
  "kubernetesServiceAccountAdmissionRules": {
    "property1": {
      "enforcementMode": "ENFORCEMENT_MODE_UNSPECIFIED",
      "evaluationMode": "EVALUATION_MODE_UNSPECIFIED",
      "requireAttestationsBy": [
        "string"
      ]
    },
    "property2": {
      "enforcementMode": "ENFORCEMENT_MODE_UNSPECIFIED",
      "evaluationMode": "EVALUATION_MODE_UNSPECIFIED",
      "requireAttestationsBy": [
        "string"
      ]
    }
  },
  "name": "string",
  "updateTime": "string"
}
```

A policy for Binary Authorization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|admissionWhitelistPatterns|[[AdmissionWhitelistPattern](#schemaadmissionwhitelistpattern)]|false|none|Optional. Admission policy allowlisting. A matching admission request will always be permitted. This feature is typically used to exclude Google or third-party infrastructure images from Binary Authorization policies.|
|clusterAdmissionRules|object|false|none|Optional. Per-cluster admission rules. Cluster spec format: `location.clusterId`. There can be at most one admission rule per cluster spec. A `location` is either a compute zone (e.g. us-central1-a) or a region (e.g. us-central1). For `clusterId` syntax restrictions see https://cloud.google.com/container-engine/reference/rest/v1/projects.zones.clusters.|
|defaultAdmissionRule|[AdmissionRule](#schemaadmissionrule)|false|none|Required. Default admission rule for a cluster without a per-cluster, per- kubernetes-service-account, or per-istio-service-identity admission rule.|
|description|string|false|none|Optional. A descriptive comment.|
|etag|string|false|none|Optional. A checksum, returned by the server, that can be sent on update requests to ensure the policy has an up-to-date value before attempting to update it. See https://google.aip.dev/154.|
|globalPolicyEvaluationMode|string|false|none|Optional. Controls the evaluation of a Google-maintained global admission policy for common system-level images. Images not covered by the global policy will be subject to the project admission policy. This setting has no effect when specified inside a global admission policy.|
|istioServiceIdentityAdmissionRules|object|false|none|Optional. Per-istio-service-identity admission rules. Istio service identity spec format: `spiffe:///ns//sa/` or `/ns//sa/` e.g. `spiffe://example.com/ns/test-ns/sa/default`|
|kubernetesNamespaceAdmissionRules|object|false|none|Optional. Per-kubernetes-namespace admission rules. K8s namespace spec format: `[a-z.-]+`, e.g. `some-namespace`|
|kubernetesServiceAccountAdmissionRules|object|false|none|Optional. Per-kubernetes-service-account admission rules. Service account spec format: `namespace:serviceaccount`. e.g. `test-ns:default`|
|name|string|false|read-only|Output only. The resource name, in the format `projects/*/policy`. There is at most one policy per project.|
|updateTime|string(google-datetime)|false|read-only|Output only. Time when the policy was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|globalPolicyEvaluationMode|GLOBAL_POLICY_EVALUATION_MODE_UNSPECIFIED|
|globalPolicyEvaluationMode|ENABLE|
|globalPolicyEvaluationMode|DISABLE|

<h2 id="tocS_SetIamPolicyRequest">SetIamPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetiampolicyrequest"></a>
<a id="schema_SetIamPolicyRequest"></a>
<a id="tocSsetiampolicyrequest"></a>
<a id="tocssetiampolicyrequest"></a>

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
|policy|[IamPolicy](#schemaiampolicy)|false|none|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|

<h2 id="tocS_Signature">Signature</h2>
<!-- backwards compatibility -->
<a id="schemasignature"></a>
<a id="schema_Signature"></a>
<a id="tocSsignature"></a>
<a id="tocssignature"></a>

```json
{
  "publicKeyId": "string",
  "signature": "string"
}
```

Verifiers (e.g. Kritis implementations) MUST verify signatures with respect to the trust anchors defined in policy (e.g. a Kritis policy). Typically this means that the verifier has been configured with a map from `public_key_id` to public key material (and any required parameters, e.g. signing algorithm). In particular, verification implementations MUST NOT treat the signature `public_key_id` as anything more than a key lookup hint. The `public_key_id` DOES NOT validate or authenticate a public key; it only provides a mechanism for quickly selecting a public key ALREADY CONFIGURED on the verifier through a trusted channel. Verification implementations MUST reject signatures in any of the following circumstances: * The `public_key_id` is not recognized by the verifier. * The public key that `public_key_id` refers to does not verify the signature with respect to the payload. The `signature` contents SHOULD NOT be "attached" (where the payload is included with the serialized `signature` bytes). Verifiers MUST ignore any "attached" payload and only verify signatures with respect to explicitly provided payload (e.g. a `payload` field on the proto message that holds this Signature, or the canonical serialization of the proto message that holds this signature).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|publicKeyId|string|false|none|The identifier for the public key that verifies this signature. * The `public_key_id` is required. * The `public_key_id` SHOULD be an RFC3986 conformant URI. * When possible, the `public_key_id` SHOULD be an immutable reference, such as a cryptographic digest. Examples of valid `public_key_id`s: OpenPGP V4 public key fingerprint: * "openpgp4fpr:74FAF3B861BDA0870C7B6DEF607E48D2A663AEEA" See https://www.iana.org/assignments/uri-schemes/prov/openpgp4fpr for more details on this scheme. RFC6920 digest-named SubjectPublicKeyInfo (digest of the DER serialization): * "ni:///sha-256;cD9o9Cq6LG3jD0iKXqEi_vdjJGecm_iXkbqVoScViaU" * "nih:///sha-256;703f68f42aba2c6de30f488a5ea122fef76324679c9bf89791ba95a1271589a5"|
|signature|string(byte)|false|none|The content of the signature, an opaque bytestring. The payload that this signature verifies MUST be unambiguously provided with the Signature during verification. A wrapper message might provide the payload explicitly. Alternatively, a message might have a canonical serialization that can always be unambiguously computed to derive the payload.|

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

<h2 id="tocS_UserOwnedDrydockNote">UserOwnedDrydockNote</h2>
<!-- backwards compatibility -->
<a id="schemauserowneddrydocknote"></a>
<a id="schema_UserOwnedDrydockNote"></a>
<a id="tocSuserowneddrydocknote"></a>
<a id="tocsuserowneddrydocknote"></a>

```json
{
  "delegationServiceAccountEmail": "string",
  "noteReference": "string",
  "publicKeys": [
    {
      "asciiArmoredPgpPublicKey": "string",
      "comment": "string",
      "id": "string",
      "pkixPublicKey": {
        "publicKeyPem": "string",
        "signatureAlgorithm": "SIGNATURE_ALGORITHM_UNSPECIFIED"
      }
    }
  ]
}
```

An user owned drydock note references a Drydock ATTESTATION_AUTHORITY Note created by the user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delegationServiceAccountEmail|string|false|read-only|Output only. This field will contain the service account email address that this Attestor will use as the principal when querying Container Analysis. Attestor administrators must grant this service account the IAM role needed to read attestations from the note_reference in Container Analysis (`containeranalysis.notes.occurrences.viewer`). This email address is fixed for the lifetime of the Attestor, but callers should not make any other assumptions about the service account email; future versions may use an email based on a different naming pattern.|
|noteReference|string|false|none|Required. The Drydock resource name of a ATTESTATION_AUTHORITY Note, created by the user, in the format: `projects/*/notes/*` (or the legacy `providers/*/notes/*`). This field may not be updated. An attestation by this attestor is stored as a Drydock ATTESTATION_AUTHORITY Occurrence that names a container image and that links to this Note. Drydock is an external dependency.|
|publicKeys|[[AttestorPublicKey](#schemaattestorpublickey)]|false|none|Optional. Public keys that verify attestations signed by this attestor. This field may be updated. If this field is non-empty, one of the specified public keys must verify that an attestation was signed by this attestor for the image specified in the admission request. If this field is empty, this attestor always returns that no valid attestations exist.|

<h2 id="tocS_ValidateAttestationOccurrenceRequest">ValidateAttestationOccurrenceRequest</h2>
<!-- backwards compatibility -->
<a id="schemavalidateattestationoccurrencerequest"></a>
<a id="schema_ValidateAttestationOccurrenceRequest"></a>
<a id="tocSvalidateattestationoccurrencerequest"></a>
<a id="tocsvalidateattestationoccurrencerequest"></a>

```json
{
  "attestation": {
    "jwts": [
      {
        "compactJwt": "string"
      }
    ],
    "serializedPayload": "string",
    "signatures": [
      {
        "publicKeyId": "string",
        "signature": "string"
      }
    ]
  },
  "occurrenceNote": "string",
  "occurrenceResourceUri": "string"
}
```

Request message for ValidationHelperV1.ValidateAttestationOccurrence.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attestation|[AttestationOccurrence](#schemaattestationoccurrence)|false|none|Required. An AttestationOccurrence to be checked that it can be verified by the Attestor. It does not have to be an existing entity in Container Analysis. It must otherwise be a valid AttestationOccurrence.|
|occurrenceNote|string|false|none|Required. The resource name of the Note to which the containing Occurrence is associated.|
|occurrenceResourceUri|string|false|none|Required. The URI of the artifact (e.g. container image) that is the subject of the containing Occurrence.|

<h2 id="tocS_ValidateAttestationOccurrenceResponse">ValidateAttestationOccurrenceResponse</h2>
<!-- backwards compatibility -->
<a id="schemavalidateattestationoccurrenceresponse"></a>
<a id="schema_ValidateAttestationOccurrenceResponse"></a>
<a id="tocSvalidateattestationoccurrenceresponse"></a>
<a id="tocsvalidateattestationoccurrenceresponse"></a>

```json
{
  "denialReason": "string",
  "result": "RESULT_UNSPECIFIED"
}
```

Response message for ValidationHelperV1.ValidateAttestationOccurrence.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|denialReason|string|false|none|The reason for denial if the Attestation couldn't be validated.|
|result|string|false|none|The result of the Attestation validation.|

#### Enumerated Values

|Property|Value|
|---|---|
|result|RESULT_UNSPECIFIED|
|result|VERIFIED|
|result|ATTESTATION_NOT_VERIFIABLE|
