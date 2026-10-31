<h1 id="identity-and-access-management-iam-api">Identity and Access Management (IAM) API v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Manages identity and access control for Google Cloud Platform resources, including the creation of service accounts, which you can use to authenticate to Google and make API calls.

Base URLs:

* <a href="https://iam.googleapis.com/">https://iam.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/iam/">External documentation</a>

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

<h1 id="identity-and-access-management-iam-api-policies">policies</h1>

## iam.policies.operations.get

<a id="opIdiam.policies.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{name}`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<h3 id="iampoliciesoperationsget-parameters">Parameters</h3>

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

<h3 id="iampoliciesoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## iam.policies.update

<a id="opIdiam.policies.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "displayName": "string",
    "etag": "string",
    "name": "string",
    "rules": [
      {
        "denyRule": {
          "denialCondition": {
            "description": "string",
            "expression": "string",
            "location": "string",
            "title": "string"
          },
          "deniedPermissions": [
            "string"
          ],
          "deniedPrincipals": [
            "string"
          ],
          "exceptionPermissions": [
            "string"
          ],
          "exceptionPrincipals": [
            "string"
          ]
        },
        "description": "string"
      }
    ],
    "uid": "string"
  }'
```

`PUT /v2/{name}`

Updates the specified policy. You can update only the rules and the display name for the policy. To update a policy, you should use a read-modify-write loop: 1. Use GetPolicy to read the current version of the policy. 2. Modify the policy as needed. 3. Use `UpdatePolicy` to write the updated policy. This pattern helps prevent conflicts between concurrent updates.

> Body parameter

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "displayName": "string",
  "etag": "string",
  "name": "string",
  "rules": [
    {
      "denyRule": {
        "denialCondition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "deniedPermissions": [
          "string"
        ],
        "deniedPrincipals": [
          "string"
        ],
        "exceptionPermissions": [
          "string"
        ],
        "exceptionPrincipals": [
          "string"
        ]
      },
      "description": "string"
    }
  ],
  "uid": "string"
}
```

<h3 id="iampoliciesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Immutable. The resource name of the `Policy`, which must be unique. Format: `policies/{attachment_point}/denypolicies/{policy_id}` The attachment point is identified by its URL-encoded full resource name, which means that the forward-slash character, `/`, must be written as `%2F`. For example, `policies/cloudresourcemanager.googleapis.com%2Fprojects%2Fmy-project/denypolicies/my-deny-policy`. For organizations and folders, use the numeric ID in the full resource name. For projects, requests can use the alphanumeric or the numeric ID. Responses always contain the numeric ID.|
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
|body|body|[GoogleIamV2Policy](#schemagoogleiamv2policy)|false|none|
|» annotations|body|object|false|A key-value map to store arbitrary metadata for the `Policy`. Keys can be up to 63 characters. Values can be up to 255 characters.|
|» » **additionalProperties**|body|string|false|none|
|» displayName|body|string|false|A user-specified description of the `Policy`. This value can be up to 63 characters.|
|» etag|body|string|false|An opaque tag that identifies the current version of the `Policy`. IAM uses this value to help manage concurrent updates, so they do not cause one update to be overwritten by another. If this field is present in a CreatePolicyRequest, the value is ignored.|
|» name|body|string|false|Immutable. The resource name of the `Policy`, which must be unique. Format: `policies/{attachment_point}/denypolicies/{policy_id}` The attachment point is identified by its URL-encoded full resource name, which means that the forward-slash character, `/`, must be written as `%2F`. For example, `policies/cloudresourcemanager.googleapis.com%2Fprojects%2Fmy-project/denypolicies/my-deny-policy`. For organizations and folders, use the numeric ID in the full resource name. For projects, requests can use the alphanumeric or the numeric ID. Responses always contain the numeric ID.|
|» rules|body|[[GoogleIamV2PolicyRule](#schemagoogleiamv2policyrule)]|false|A list of rules that specify the behavior of the `Policy`. All of the rules should be of the `kind` specified in the `Policy`.|
|» uid|body|string|false|Immutable. The globally unique ID of the `Policy`. Assigned automatically when the `Policy` is created.|

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

<h3 id="iampoliciesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## iam.policies.delete

<a id="opIdiam.policies.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/{name}`

Deletes a policy. This action is permanent.

<h3 id="iampoliciesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the policy to delete. Format: `policies/{attachment_point}/denypolicies/{policy_id}` Use the URL-encoded full resource name, which means that the forward-slash character, `/`, must be written as `%2F`. For example, `policies/cloudresourcemanager.googleapis.com%2Fprojects%2Fmy-project/denypolicies/my-policy`. For organizations and folders, use the numeric ID in the full resource name. For projects, you can use the alphanumeric or the numeric ID.|
|etag|query|string|false|Optional. The expected `etag` of the policy to delete. If the value does not match the value that is stored in IAM, the request fails with a `409` error code and `ABORTED` status. If you omit this field, the policy is deleted regardless of its current `etag`.|
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

<h3 id="iampoliciesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## iam.policies.listPolicies

<a id="opIdiam.policies.listPolicies"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}`

Retrieves the policies of the specified kind that are attached to a resource. The response lists only policy metadata. In particular, policy rules are omitted.

<h3 id="iampolicieslistpolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource that the policy is attached to, along with the kind of policy to list. Format: `policies/{attachment_point}/denypolicies` The attachment point is identified by its URL-encoded full resource name, which means that the forward-slash character, `/`, must be written as `%2F`. For example, `policies/cloudresourcemanager.googleapis.com%2Fprojects%2Fmy-project/denypolicies`. For organizations and folders, use the numeric ID in the full resource name. For projects, you can use the alphanumeric or the numeric ID.|
|pageSize|query|integer|false|The maximum number of policies to return. IAM ignores this value and uses the value 1000.|
|pageToken|query|string|false|A page token received in a ListPoliciesResponse. Provide this token to retrieve the next page.|
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
  "policies": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "createTime": "string",
      "deleteTime": "string",
      "displayName": "string",
      "etag": "string",
      "kind": "string",
      "name": "string",
      "rules": [
        {
          "denyRule": {
            "denialCondition": {
              "description": "string",
              "expression": "string",
              "location": "string",
              "title": "string"
            },
            "deniedPermissions": [
              "string"
            ],
            "deniedPrincipals": [
              "string"
            ],
            "exceptionPermissions": [
              "string"
            ],
            "exceptionPrincipals": [
              "string"
            ]
          },
          "description": "string"
        }
      ],
      "uid": "string",
      "updateTime": "string"
    }
  ]
}
```

<h3 id="iampolicieslistpolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleIamV2ListPoliciesResponse](#schemagoogleiamv2listpoliciesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## iam.policies.createPolicy

<a id="opIdiam.policies.createPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "annotations": {
      "property1": "string",
      "property2": "string"
    },
    "displayName": "string",
    "etag": "string",
    "name": "string",
    "rules": [
      {
        "denyRule": {
          "denialCondition": {
            "description": "string",
            "expression": "string",
            "location": "string",
            "title": "string"
          },
          "deniedPermissions": [
            "string"
          ],
          "deniedPrincipals": [
            "string"
          ],
          "exceptionPermissions": [
            "string"
          ],
          "exceptionPrincipals": [
            "string"
          ]
        },
        "description": "string"
      }
    ],
    "uid": "string"
  }'
```

`POST /v2/{parent}`

Creates a policy.

> Body parameter

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "displayName": "string",
  "etag": "string",
  "name": "string",
  "rules": [
    {
      "denyRule": {
        "denialCondition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "deniedPermissions": [
          "string"
        ],
        "deniedPrincipals": [
          "string"
        ],
        "exceptionPermissions": [
          "string"
        ],
        "exceptionPrincipals": [
          "string"
        ]
      },
      "description": "string"
    }
  ],
  "uid": "string"
}
```

<h3 id="iampoliciescreatepolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource that the policy is attached to, along with the kind of policy to create. Format: `policies/{attachment_point}/denypolicies` The attachment point is identified by its URL-encoded full resource name, which means that the forward-slash character, `/`, must be written as `%2F`. For example, `policies/cloudresourcemanager.googleapis.com%2Fprojects%2Fmy-project/denypolicies`. For organizations and folders, use the numeric ID in the full resource name. For projects, you can use the alphanumeric or the numeric ID.|
|policyId|query|string|false|The ID to use for this policy, which will become the final component of the policy's resource name. The ID must contain 3 to 63 characters. It can contain lowercase letters and numbers, as well as dashes (`-`) and periods (`.`). The first character must be a lowercase letter.|
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
|body|body|[GoogleIamV2Policy](#schemagoogleiamv2policy)|false|none|
|» annotations|body|object|false|A key-value map to store arbitrary metadata for the `Policy`. Keys can be up to 63 characters. Values can be up to 255 characters.|
|» » **additionalProperties**|body|string|false|none|
|» displayName|body|string|false|A user-specified description of the `Policy`. This value can be up to 63 characters.|
|» etag|body|string|false|An opaque tag that identifies the current version of the `Policy`. IAM uses this value to help manage concurrent updates, so they do not cause one update to be overwritten by another. If this field is present in a CreatePolicyRequest, the value is ignored.|
|» name|body|string|false|Immutable. The resource name of the `Policy`, which must be unique. Format: `policies/{attachment_point}/denypolicies/{policy_id}` The attachment point is identified by its URL-encoded full resource name, which means that the forward-slash character, `/`, must be written as `%2F`. For example, `policies/cloudresourcemanager.googleapis.com%2Fprojects%2Fmy-project/denypolicies/my-deny-policy`. For organizations and folders, use the numeric ID in the full resource name. For projects, requests can use the alphanumeric or the numeric ID. Responses always contain the numeric ID.|
|» rules|body|[[GoogleIamV2PolicyRule](#schemagoogleiamv2policyrule)]|false|A list of rules that specify the behavior of the `Policy`. All of the rules should be of the `kind` specified in the `Policy`.|
|» uid|body|string|false|Immutable. The globally unique ID of the `Policy`. Assigned automatically when the `Policy` is created.|

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

<h3 id="iampoliciescreatepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_GoogleCloudCommonOperationMetadata">GoogleCloudCommonOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudcommonoperationmetadata"></a>
<a id="schema_GoogleCloudCommonOperationMetadata"></a>
<a id="tocSgooglecloudcommonoperationmetadata"></a>
<a id="tocsgooglecloudcommonoperationmetadata"></a>

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

<h2 id="tocS_GoogleIamAdminV1AuditData">GoogleIamAdminV1AuditData</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamadminv1auditdata"></a>
<a id="schema_GoogleIamAdminV1AuditData"></a>
<a id="tocSgoogleiamadminv1auditdata"></a>
<a id="tocsgoogleiamadminv1auditdata"></a>

```json
{
  "permissionDelta": {
    "addedPermissions": [
      "string"
    ],
    "removedPermissions": [
      "string"
    ]
  }
}
```

Audit log information specific to Cloud IAM admin APIs. This message is serialized as an `Any` type in the `ServiceData` message of an `AuditLog` message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissionDelta|[GoogleIamAdminV1AuditDataPermissionDelta](#schemagoogleiamadminv1auditdatapermissiondelta)|false|none|The permission_delta when when creating or updating a Role.|

<h2 id="tocS_GoogleIamAdminV1AuditDataPermissionDelta">GoogleIamAdminV1AuditDataPermissionDelta</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamadminv1auditdatapermissiondelta"></a>
<a id="schema_GoogleIamAdminV1AuditDataPermissionDelta"></a>
<a id="tocSgoogleiamadminv1auditdatapermissiondelta"></a>
<a id="tocsgoogleiamadminv1auditdatapermissiondelta"></a>

```json
{
  "addedPermissions": [
    "string"
  ],
  "removedPermissions": [
    "string"
  ]
}
```

A PermissionDelta message to record the added_permissions and removed_permissions inside a role.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addedPermissions|[string]|false|none|Added permissions.|
|removedPermissions|[string]|false|none|Removed permissions.|

<h2 id="tocS_GoogleIamV1BindingDelta">GoogleIamV1BindingDelta</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1bindingdelta"></a>
<a id="schema_GoogleIamV1BindingDelta"></a>
<a id="tocSgoogleiamv1bindingdelta"></a>
<a id="tocsgoogleiamv1bindingdelta"></a>

```json
{
  "action": "ACTION_UNSPECIFIED",
  "condition": {
    "description": "string",
    "expression": "string",
    "location": "string",
    "title": "string"
  },
  "member": "string",
  "role": "string"
}
```

One delta entry for Binding. Each individual change (only one member in each entry) to a binding will be a separate entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|The action that was performed on a Binding. Required|
|condition|[GoogleTypeExpr](#schemagoogletypeexpr)|false|none|The condition that is associated with this binding.|
|member|string|false|none|A single identity requesting access for a Google Cloud resource. Follows the same format of Binding.members. Required|
|role|string|false|none|Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. Required|

#### Enumerated Values

|Property|Value|
|---|---|
|action|ACTION_UNSPECIFIED|
|action|ADD|
|action|REMOVE|

<h2 id="tocS_GoogleIamV1LoggingAuditData">GoogleIamV1LoggingAuditData</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1loggingauditdata"></a>
<a id="schema_GoogleIamV1LoggingAuditData"></a>
<a id="tocSgoogleiamv1loggingauditdata"></a>
<a id="tocsgoogleiamv1loggingauditdata"></a>

```json
{
  "policyDelta": {
    "bindingDeltas": [
      {
        "action": "ACTION_UNSPECIFIED",
        "condition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "member": "string",
        "role": "string"
      }
    ]
  }
}
```

Audit log information specific to Cloud IAM. This message is serialized as an `Any` type in the `ServiceData` message of an `AuditLog` message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policyDelta|[GoogleIamV1PolicyDelta](#schemagoogleiamv1policydelta)|false|none|Policy delta between the original policy and the newly set policy.|

<h2 id="tocS_GoogleIamV1PolicyDelta">GoogleIamV1PolicyDelta</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1policydelta"></a>
<a id="schema_GoogleIamV1PolicyDelta"></a>
<a id="tocSgoogleiamv1policydelta"></a>
<a id="tocsgoogleiamv1policydelta"></a>

```json
{
  "bindingDeltas": [
    {
      "action": "ACTION_UNSPECIFIED",
      "condition": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "member": "string",
      "role": "string"
    }
  ]
}
```

The difference delta between two policies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bindingDeltas|[[GoogleIamV1BindingDelta](#schemagoogleiamv1bindingdelta)]|false|none|The delta for Bindings between two policies.|

<h2 id="tocS_GoogleIamV1betaWorkloadIdentityPoolOperationMetadata">GoogleIamV1betaWorkloadIdentityPoolOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1betaworkloadidentitypooloperationmetadata"></a>
<a id="schema_GoogleIamV1betaWorkloadIdentityPoolOperationMetadata"></a>
<a id="tocSgoogleiamv1betaworkloadidentitypooloperationmetadata"></a>
<a id="tocsgoogleiamv1betaworkloadidentitypooloperationmetadata"></a>

```json
{}
```

Metadata for long-running WorkloadIdentityPool operations.

<h2 id="tocS_GoogleIamV2DenyRule">GoogleIamV2DenyRule</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv2denyrule"></a>
<a id="schema_GoogleIamV2DenyRule"></a>
<a id="tocSgoogleiamv2denyrule"></a>
<a id="tocsgoogleiamv2denyrule"></a>

```json
{
  "denialCondition": {
    "description": "string",
    "expression": "string",
    "location": "string",
    "title": "string"
  },
  "deniedPermissions": [
    "string"
  ],
  "deniedPrincipals": [
    "string"
  ],
  "exceptionPermissions": [
    "string"
  ],
  "exceptionPrincipals": [
    "string"
  ]
}
```

A deny rule in an IAM deny policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|denialCondition|[GoogleTypeExpr](#schemagoogletypeexpr)|false|none|The condition that determines whether this deny rule applies to a request. If the condition expression evaluates to `true`, then the deny rule is applied; otherwise, the deny rule is not applied. Each deny rule is evaluated independently. If this deny rule does not apply to a request, other deny rules might still apply. The condition can use CEL functions that evaluate [resource tags](https://cloud.google.com/iam/help/conditions/resource-tags). Other functions and operators are not supported.|
|deniedPermissions|[string]|false|none|The permissions that are explicitly denied by this rule. Each permission uses the format `{service_fqdn}/{resource}.{verb}`, where `{service_fqdn}` is the fully qualified domain name for the service. For example, `iam.googleapis.com/roles.list`.|
|deniedPrincipals|[string]|false|none|The identities that are prevented from using one or more permissions on Google Cloud resources. This field can contain the following values: * `principal://goog/subject/{email_id}`: A specific Google Account. Includes Gmail, Cloud Identity, and Google Workspace user accounts. For example, `principal://goog/subject/alice@example.com`. * `principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id}`: A Google Cloud service account. For example, `principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com`. * `principalSet://goog/group/{group_id}`: A Google group. For example, `principalSet://goog/group/admins@example.com`. * `principalSet://goog/public:all`: A special identifier that represents any principal that is on the internet, even if they do not have a Google Account or are not logged in. * `principalSet://goog/cloudIdentityCustomerId/{customer_id}`: All of the principals associated with the specified Google Workspace or Cloud Identity customer ID. For example, `principalSet://goog/cloudIdentityCustomerId/C01Abc35`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:principal://goog/subject/{email_id}?uid={uid}`: A specific Google Account that was deleted recently. For example, `deleted:principal://goog/subject/alice@example.com?uid=1234567890`. If the Google Account is recovered, this identifier reverts to the standard identifier for a Google Account. * `deleted:principalSet://goog/group/{group_id}?uid={uid}`: A Google group that was deleted recently. For example, `deleted:principalSet://goog/group/admins@example.com?uid=1234567890`. If the Google group is restored, this identifier reverts to the standard identifier for a Google group. * `deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id}?uid={uid}`: A Google Cloud service account that was deleted recently. For example, `deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com?uid=1234567890`. If the service account is undeleted, this identifier reverts to the standard identifier for a service account. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`.|
|exceptionPermissions|[string]|false|none|Specifies the permissions that this rule excludes from the set of denied permissions given by `denied_permissions`. If a permission appears in `denied_permissions` _and_ in `exception_permissions` then it will _not_ be denied. The excluded permissions can be specified using the same syntax as `denied_permissions`.|
|exceptionPrincipals|[string]|false|none|The identities that are excluded from the deny rule, even if they are listed in the `denied_principals`. For example, you could add a Google group to the `denied_principals`, then exclude specific users who belong to that group. This field can contain the same values as the `denied_principals` field, excluding `principalSet://goog/public:all`, which represents all users on the internet.|

<h2 id="tocS_GoogleIamV2ListPoliciesResponse">GoogleIamV2ListPoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv2listpoliciesresponse"></a>
<a id="schema_GoogleIamV2ListPoliciesResponse"></a>
<a id="tocSgoogleiamv2listpoliciesresponse"></a>
<a id="tocsgoogleiamv2listpoliciesresponse"></a>

```json
{
  "nextPageToken": "string",
  "policies": [
    {
      "annotations": {
        "property1": "string",
        "property2": "string"
      },
      "createTime": "string",
      "deleteTime": "string",
      "displayName": "string",
      "etag": "string",
      "kind": "string",
      "name": "string",
      "rules": [
        {
          "denyRule": {
            "denialCondition": {
              "description": "string",
              "expression": "string",
              "location": "string",
              "title": "string"
            },
            "deniedPermissions": [
              "string"
            ],
            "deniedPrincipals": [
              "string"
            ],
            "exceptionPermissions": [
              "string"
            ],
            "exceptionPrincipals": [
              "string"
            ]
          },
          "description": "string"
        }
      ],
      "uid": "string",
      "updateTime": "string"
    }
  ]
}
```

Response message for `ListPolicies`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A page token that you can use in a ListPoliciesRequest to retrieve the next page. If this field is omitted, there are no additional pages.|
|policies|[[GoogleIamV2Policy](#schemagoogleiamv2policy)]|false|none|Metadata for the policies that are attached to the resource.|

<h2 id="tocS_GoogleIamV2Policy">GoogleIamV2Policy</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv2policy"></a>
<a id="schema_GoogleIamV2Policy"></a>
<a id="tocSgoogleiamv2policy"></a>
<a id="tocsgoogleiamv2policy"></a>

```json
{
  "annotations": {
    "property1": "string",
    "property2": "string"
  },
  "createTime": "string",
  "deleteTime": "string",
  "displayName": "string",
  "etag": "string",
  "kind": "string",
  "name": "string",
  "rules": [
    {
      "denyRule": {
        "denialCondition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "deniedPermissions": [
          "string"
        ],
        "deniedPrincipals": [
          "string"
        ],
        "exceptionPermissions": [
          "string"
        ],
        "exceptionPrincipals": [
          "string"
        ]
      },
      "description": "string"
    }
  ],
  "uid": "string",
  "updateTime": "string"
}
```

Data for an IAM policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|object|false|none|A key-value map to store arbitrary metadata for the `Policy`. Keys can be up to 63 characters. Values can be up to 255 characters.|
|createTime|string(google-datetime)|false|read-only|Output only. The time when the `Policy` was created.|
|deleteTime|string(google-datetime)|false|read-only|Output only. The time when the `Policy` was deleted. Empty if the policy is not deleted.|
|displayName|string|false|none|A user-specified description of the `Policy`. This value can be up to 63 characters.|
|etag|string|false|none|An opaque tag that identifies the current version of the `Policy`. IAM uses this value to help manage concurrent updates, so they do not cause one update to be overwritten by another. If this field is present in a CreatePolicyRequest, the value is ignored.|
|kind|string|false|read-only|Output only. The kind of the `Policy`. Always contains the value `DenyPolicy`.|
|name|string|false|none|Immutable. The resource name of the `Policy`, which must be unique. Format: `policies/{attachment_point}/denypolicies/{policy_id}` The attachment point is identified by its URL-encoded full resource name, which means that the forward-slash character, `/`, must be written as `%2F`. For example, `policies/cloudresourcemanager.googleapis.com%2Fprojects%2Fmy-project/denypolicies/my-deny-policy`. For organizations and folders, use the numeric ID in the full resource name. For projects, requests can use the alphanumeric or the numeric ID. Responses always contain the numeric ID.|
|rules|[[GoogleIamV2PolicyRule](#schemagoogleiamv2policyrule)]|false|none|A list of rules that specify the behavior of the `Policy`. All of the rules should be of the `kind` specified in the `Policy`.|
|uid|string|false|none|Immutable. The globally unique ID of the `Policy`. Assigned automatically when the `Policy` is created.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time when the `Policy` was last updated.|

<h2 id="tocS_GoogleIamV2PolicyOperationMetadata">GoogleIamV2PolicyOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv2policyoperationmetadata"></a>
<a id="schema_GoogleIamV2PolicyOperationMetadata"></a>
<a id="tocSgoogleiamv2policyoperationmetadata"></a>
<a id="tocsgoogleiamv2policyoperationmetadata"></a>

```json
{
  "createTime": "string"
}
```

Metadata for long-running `Policy` operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Timestamp when the `google.longrunning.Operation` was created.|

<h2 id="tocS_GoogleIamV2PolicyRule">GoogleIamV2PolicyRule</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv2policyrule"></a>
<a id="schema_GoogleIamV2PolicyRule"></a>
<a id="tocSgoogleiamv2policyrule"></a>
<a id="tocsgoogleiamv2policyrule"></a>

```json
{
  "denyRule": {
    "denialCondition": {
      "description": "string",
      "expression": "string",
      "location": "string",
      "title": "string"
    },
    "deniedPermissions": [
      "string"
    ],
    "deniedPrincipals": [
      "string"
    ],
    "exceptionPermissions": [
      "string"
    ],
    "exceptionPrincipals": [
      "string"
    ]
  },
  "description": "string"
}
```

A single rule in a `Policy`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|denyRule|[GoogleIamV2DenyRule](#schemagoogleiamv2denyrule)|false|none|A rule for a deny policy.|
|description|string|false|none|A user-specified description of the rule. This value can be up to 256 characters.|

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
|response|object|false|none|The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.|

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
