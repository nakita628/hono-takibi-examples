<h1 id="organization-policy-api">Organization Policy API v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Org Policy API allows users to configure governance rules on their GCP resources across the Cloud Resource Hierarchy.

Base URLs:

* <a href="https://orgpolicy.googleapis.com/">https://orgpolicy.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/orgpolicy/docs/reference/rest/index.html">External documentation</a>

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

<h1 id="organization-policy-api-organizations">organizations</h1>

## orgpolicy.organizations.customConstraints.list

<a id="opIdorgpolicy.organizations.customConstraints.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/customConstraints \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/customConstraints`

Retrieves all of the custom constraints that exist on a particular organization resource.

<h3 id="orgpolicyorganizationscustomconstraintslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The target Google Cloud resource that parents the set of custom constraints that will be returned from this call. Must be in one of the following forms: * `organizations/{organization_id}`|
|pageSize|query|integer|false|Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.|
|pageToken|query|string|false|Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field.|
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
  "customConstraints": [
    {
      "actionType": "ACTION_TYPE_UNSPECIFIED",
      "condition": "string",
      "description": "string",
      "displayName": "string",
      "methodTypes": [
        "METHOD_TYPE_UNSPECIFIED"
      ],
      "name": "string",
      "resourceTypes": [
        "string"
      ],
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="orgpolicyorganizationscustomconstraintslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudOrgpolicyV2ListCustomConstraintsResponse](#schemagooglecloudorgpolicyv2listcustomconstraintsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## orgpolicy.organizations.customConstraints.create

<a id="opIdorgpolicy.organizations.customConstraints.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/customConstraints \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "actionType": "ACTION_TYPE_UNSPECIFIED",
    "condition": "string",
    "description": "string",
    "displayName": "string",
    "methodTypes": [
      "METHOD_TYPE_UNSPECIFIED"
    ],
    "name": "string",
    "resourceTypes": [
      "string"
    ]
  }'
```

`POST /v2/{parent}/customConstraints`

Creates a custom constraint. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the organization does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the constraint already exists on the given organization.

> Body parameter

```json
{
  "actionType": "ACTION_TYPE_UNSPECIFIED",
  "condition": "string",
  "description": "string",
  "displayName": "string",
  "methodTypes": [
    "METHOD_TYPE_UNSPECIFIED"
  ],
  "name": "string",
  "resourceTypes": [
    "string"
  ]
}
```

<h3 id="orgpolicyorganizationscustomconstraintscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Must be in the following form: * `organizations/{organization_id}`|
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
|body|body|[GoogleCloudOrgpolicyV2CustomConstraint](#schemagooglecloudorgpolicyv2customconstraint)|false|none|
|» actionType|body|string|false|Allow or deny type.|
|» condition|body|string|false|Org policy condition/expression. For example: `resource.instanceName.matches("[production\|test]_.*_(\d)+")'` or, `resource.management.auto_upgrade == true` The max length of the condition is 1000 characters.|
|» description|body|string|false|Detailed information about this custom policy constraint. The max length of the description is 2000 characters.|
|» displayName|body|string|false|One line display name for the UI. The max length of the display_name is 200 characters.|
|» methodTypes|body|[string]|false|All the operations being applied for this constraint.|
|» name|body|string|false|Immutable. Name of the constraint. This is unique within the organization. Format of the name should be * `organizations/{organization_id}/customConstraints/{custom_constraint_id}` Example: `organizations/123/customConstraints/custom.createOnlyE2TypeVms` The max length is 70 characters and the minimum length is 1. Note that the prefix `organizations/{organization_id}/customConstraints/` is not counted.|
|» resourceTypes|body|[string]|false|Immutable. The resource instance type on which this policy applies. Format will be of the form : `/` Example: * `compute.googleapis.com/Instance`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» actionType|ACTION_TYPE_UNSPECIFIED|
|» actionType|ALLOW|
|» actionType|DENY|
|» methodTypes|METHOD_TYPE_UNSPECIFIED|
|» methodTypes|CREATE|
|» methodTypes|UPDATE|
|» methodTypes|DELETE|

> Example responses

> 200 Response

```json
{
  "actionType": "ACTION_TYPE_UNSPECIFIED",
  "condition": "string",
  "description": "string",
  "displayName": "string",
  "methodTypes": [
    "METHOD_TYPE_UNSPECIFIED"
  ],
  "name": "string",
  "resourceTypes": [
    "string"
  ],
  "updateTime": "string"
}
```

<h3 id="orgpolicyorganizationscustomconstraintscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudOrgpolicyV2CustomConstraint](#schemagooglecloudorgpolicyv2customconstraint)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="organization-policy-api-projects">projects</h1>

## orgpolicy.projects.policies.get

<a id="opIdorgpolicy.projects.policies.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{name}`

Gets a policy on a resource. If no policy is set on the resource, `NOT_FOUND` is returned. The `etag` value can be used with `UpdatePolicy()` to update a policy during read-modify-write.

<h3 id="orgpolicyprojectspoliciesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Resource name of the policy. See `Policy` for naming requirements.|
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
  "alternate": {
    "launch": "string",
    "spec": {
      "etag": "string",
      "inheritFromParent": true,
      "reset": true,
      "rules": [
        {
          "allowAll": true,
          "condition": {
            "description": "string",
            "expression": "string",
            "location": "string",
            "title": "string"
          },
          "denyAll": true,
          "enforce": true,
          "values": {
            "allowedValues": [
              "string"
            ],
            "deniedValues": [
              "string"
            ]
          }
        }
      ],
      "updateTime": "string"
    }
  },
  "dryRunSpec": {
    "etag": "string",
    "inheritFromParent": true,
    "reset": true,
    "rules": [
      {
        "allowAll": true,
        "condition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "denyAll": true,
        "enforce": true,
        "values": {
          "allowedValues": [
            "string"
          ],
          "deniedValues": [
            "string"
          ]
        }
      }
    ],
    "updateTime": "string"
  },
  "name": "string",
  "spec": {
    "etag": "string",
    "inheritFromParent": true,
    "reset": true,
    "rules": [
      {
        "allowAll": true,
        "condition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "denyAll": true,
        "enforce": true,
        "values": {
          "allowedValues": [
            "string"
          ],
          "deniedValues": [
            "string"
          ]
        }
      }
    ],
    "updateTime": "string"
  }
}
```

<h3 id="orgpolicyprojectspoliciesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudOrgpolicyV2Policy](#schemagooglecloudorgpolicyv2policy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## orgpolicy.projects.policies.delete

<a id="opIdorgpolicy.projects.policies.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/{name}`

Deletes a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or organization policy does not exist.

<h3 id="orgpolicyprojectspoliciesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the policy to delete. See the policy entry for naming rules.|
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

<h3 id="orgpolicyprojectspoliciesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## orgpolicy.projects.policies.patch

<a id="opIdorgpolicy.projects.policies.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alternate": {
      "launch": "string",
      "spec": {
        "etag": "string",
        "inheritFromParent": true,
        "reset": true,
        "rules": [
          {
            "allowAll": true,
            "condition": {
              "description": "string",
              "expression": "string",
              "location": "string",
              "title": "string"
            },
            "denyAll": true,
            "enforce": true,
            "values": {
              "allowedValues": [
                "string"
              ],
              "deniedValues": [
                "string"
              ]
            }
          }
        ]
      }
    },
    "dryRunSpec": {
      "etag": "string",
      "inheritFromParent": true,
      "reset": true,
      "rules": [
        {
          "allowAll": true,
          "condition": {
            "description": "string",
            "expression": "string",
            "location": "string",
            "title": "string"
          },
          "denyAll": true,
          "enforce": true,
          "values": {
            "allowedValues": [
              "string"
            ],
            "deniedValues": [
              "string"
            ]
          }
        }
      ]
    },
    "name": "string",
    "spec": {
      "etag": "string",
      "inheritFromParent": true,
      "reset": true,
      "rules": [
        {
          "allowAll": true,
          "condition": {
            "description": "string",
            "expression": "string",
            "location": "string",
            "title": "string"
          },
          "denyAll": true,
          "enforce": true,
          "values": {
            "allowedValues": [
              "string"
            ],
            "deniedValues": [
              "string"
            ]
          }
        }
      ]
    }
  }'
```

`PATCH /v2/{name}`

Updates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or the policy do not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the policy Note: the supplied policy will perform a full overwrite of all fields.

> Body parameter

```json
{
  "alternate": {
    "launch": "string",
    "spec": {
      "etag": "string",
      "inheritFromParent": true,
      "reset": true,
      "rules": [
        {
          "allowAll": true,
          "condition": {
            "description": "string",
            "expression": "string",
            "location": "string",
            "title": "string"
          },
          "denyAll": true,
          "enforce": true,
          "values": {
            "allowedValues": [
              "string"
            ],
            "deniedValues": [
              "string"
            ]
          }
        }
      ]
    }
  },
  "dryRunSpec": {
    "etag": "string",
    "inheritFromParent": true,
    "reset": true,
    "rules": [
      {
        "allowAll": true,
        "condition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "denyAll": true,
        "enforce": true,
        "values": {
          "allowedValues": [
            "string"
          ],
          "deniedValues": [
            "string"
          ]
        }
      }
    ]
  },
  "name": "string",
  "spec": {
    "etag": "string",
    "inheritFromParent": true,
    "reset": true,
    "rules": [
      {
        "allowAll": true,
        "condition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "denyAll": true,
        "enforce": true,
        "values": {
          "allowedValues": [
            "string"
          ],
          "deniedValues": [
            "string"
          ]
        }
      }
    ]
  }
}
```

<h3 id="orgpolicyprojectspoliciespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Immutable. The resource name of the policy. Must be one of the following forms, where constraint_name is the name of the constraint which this policy configures: * `projects/{project_number}/policies/{constraint_name}` * `folders/{folder_id}/policies/{constraint_name}` * `organizations/{organization_id}/policies/{constraint_name}` For example, "projects/123/policies/compute.disableSerialPortAccess". Note: `projects/{project_id}/policies/{constraint_name}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number.|
|updateMask|query|string|false|Field mask used to specify the fields to be overwritten in the policy by the set. The fields specified in the update_mask are relative to the policy, not the full request.|
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
|body|body|[GoogleCloudOrgpolicyV2Policy](#schemagooglecloudorgpolicyv2policy)|false|none|
|» alternate|body|[GoogleCloudOrgpolicyV2AlternatePolicySpec](#schemagooglecloudorgpolicyv2alternatepolicyspec)|false|Deprecated.|
|» dryRunSpec|body|[GoogleCloudOrgpolicyV2PolicySpec](#schemagooglecloudorgpolicyv2policyspec)|false|Dry-run policy. Audit-only policy, can be used to monitor how the policy would have impacted the existing and future resources if it's enforced.|
|» name|body|string|false|Immutable. The resource name of the policy. Must be one of the following forms, where constraint_name is the name of the constraint which this policy configures: * `projects/{project_number}/policies/{constraint_name}` * `folders/{folder_id}/policies/{constraint_name}` * `organizations/{organization_id}/policies/{constraint_name}` For example, "projects/123/policies/compute.disableSerialPortAccess". Note: `projects/{project_id}/policies/{constraint_name}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number.|
|» spec|body|[GoogleCloudOrgpolicyV2PolicySpec](#schemagooglecloudorgpolicyv2policyspec)|false|Basic information about the Organization Policy.|

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
  "alternate": {
    "launch": "string",
    "spec": {
      "etag": "string",
      "inheritFromParent": true,
      "reset": true,
      "rules": [
        {
          "allowAll": true,
          "condition": {
            "description": "string",
            "expression": "string",
            "location": "string",
            "title": "string"
          },
          "denyAll": true,
          "enforce": true,
          "values": {
            "allowedValues": [
              "string"
            ],
            "deniedValues": [
              "string"
            ]
          }
        }
      ],
      "updateTime": "string"
    }
  },
  "dryRunSpec": {
    "etag": "string",
    "inheritFromParent": true,
    "reset": true,
    "rules": [
      {
        "allowAll": true,
        "condition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "denyAll": true,
        "enforce": true,
        "values": {
          "allowedValues": [
            "string"
          ],
          "deniedValues": [
            "string"
          ]
        }
      }
    ],
    "updateTime": "string"
  },
  "name": "string",
  "spec": {
    "etag": "string",
    "inheritFromParent": true,
    "reset": true,
    "rules": [
      {
        "allowAll": true,
        "condition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "denyAll": true,
        "enforce": true,
        "values": {
          "allowedValues": [
            "string"
          ],
          "deniedValues": [
            "string"
          ]
        }
      }
    ],
    "updateTime": "string"
  }
}
```

<h3 id="orgpolicyprojectspoliciespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudOrgpolicyV2Policy](#schemagooglecloudorgpolicyv2policy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## orgpolicy.projects.policies.getEffectivePolicy

<a id="opIdorgpolicy.projects.policies.getEffectivePolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:getEffectivePolicy \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{name}:getEffectivePolicy`

Gets the effective policy on a resource. This is the result of merging policies in the resource hierarchy and evaluating conditions. The returned policy will not have an `etag` or `condition` set because it is an evaluated policy across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.

<h3 id="orgpolicyprojectspoliciesgeteffectivepolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The effective policy to compute. See `Policy` for naming rules.|
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
  "alternate": {
    "launch": "string",
    "spec": {
      "etag": "string",
      "inheritFromParent": true,
      "reset": true,
      "rules": [
        {
          "allowAll": true,
          "condition": {
            "description": "string",
            "expression": "string",
            "location": "string",
            "title": "string"
          },
          "denyAll": true,
          "enforce": true,
          "values": {
            "allowedValues": [
              "string"
            ],
            "deniedValues": [
              "string"
            ]
          }
        }
      ],
      "updateTime": "string"
    }
  },
  "dryRunSpec": {
    "etag": "string",
    "inheritFromParent": true,
    "reset": true,
    "rules": [
      {
        "allowAll": true,
        "condition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "denyAll": true,
        "enforce": true,
        "values": {
          "allowedValues": [
            "string"
          ],
          "deniedValues": [
            "string"
          ]
        }
      }
    ],
    "updateTime": "string"
  },
  "name": "string",
  "spec": {
    "etag": "string",
    "inheritFromParent": true,
    "reset": true,
    "rules": [
      {
        "allowAll": true,
        "condition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "denyAll": true,
        "enforce": true,
        "values": {
          "allowedValues": [
            "string"
          ],
          "deniedValues": [
            "string"
          ]
        }
      }
    ],
    "updateTime": "string"
  }
}
```

<h3 id="orgpolicyprojectspoliciesgeteffectivepolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudOrgpolicyV2Policy](#schemagooglecloudorgpolicyv2policy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## orgpolicy.projects.constraints.list

<a id="opIdorgpolicy.projects.constraints.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/constraints \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/constraints`

Lists constraints that could be applied on the specified resource.

<h3 id="orgpolicyprojectsconstraintslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The Google Cloud resource that parents the constraint. Must be in one of the following forms: * `projects/{project_number}` * `projects/{project_id}` * `folders/{folder_id}` * `organizations/{organization_id}`|
|pageSize|query|integer|false|Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.|
|pageToken|query|string|false|Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field.|
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
  "constraints": [
    {
      "booleanConstraint": {},
      "constraintDefault": "CONSTRAINT_DEFAULT_UNSPECIFIED",
      "description": "string",
      "displayName": "string",
      "listConstraint": {
        "supportsIn": true,
        "supportsUnder": true
      },
      "name": "string",
      "supportsDryRun": true
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="orgpolicyprojectsconstraintslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudOrgpolicyV2ListConstraintsResponse](#schemagooglecloudorgpolicyv2listconstraintsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## orgpolicy.projects.policies.list

<a id="opIdorgpolicy.projects.policies.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/policies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/policies`

Retrieves all of the policies that exist on a particular resource.

<h3 id="orgpolicyprojectspolicieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The target Google Cloud resource that parents the set of constraints and policies that will be returned from this call. Must be in one of the following forms: * `projects/{project_number}` * `projects/{project_id}` * `folders/{folder_id}` * `organizations/{organization_id}`|
|pageSize|query|integer|false|Size of the pages to be returned. This is currently unsupported and will be ignored. The server may at any point start using this field to limit page size.|
|pageToken|query|string|false|Page token used to retrieve the next page. This is currently unsupported and will be ignored. The server may at any point start using this field.|
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
      "alternate": {
        "launch": "string",
        "spec": {
          "etag": "string",
          "inheritFromParent": true,
          "reset": true,
          "rules": [
            {
              "allowAll": true,
              "condition": {
                "description": "string",
                "expression": "string",
                "location": "string",
                "title": "string"
              },
              "denyAll": true,
              "enforce": true,
              "values": {
                "allowedValues": [
                  "string"
                ],
                "deniedValues": [
                  "string"
                ]
              }
            }
          ],
          "updateTime": "string"
        }
      },
      "dryRunSpec": {
        "etag": "string",
        "inheritFromParent": true,
        "reset": true,
        "rules": [
          {
            "allowAll": true,
            "condition": {
              "description": "string",
              "expression": "string",
              "location": "string",
              "title": "string"
            },
            "denyAll": true,
            "enforce": true,
            "values": {
              "allowedValues": [
                "string"
              ],
              "deniedValues": [
                "string"
              ]
            }
          }
        ],
        "updateTime": "string"
      },
      "name": "string",
      "spec": {
        "etag": "string",
        "inheritFromParent": true,
        "reset": true,
        "rules": [
          {
            "allowAll": true,
            "condition": {
              "description": "string",
              "expression": "string",
              "location": "string",
              "title": "string"
            },
            "denyAll": true,
            "enforce": true,
            "values": {
              "allowedValues": [
                "string"
              ],
              "deniedValues": [
                "string"
              ]
            }
          }
        ],
        "updateTime": "string"
      }
    }
  ]
}
```

<h3 id="orgpolicyprojectspolicieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudOrgpolicyV2ListPoliciesResponse](#schemagooglecloudorgpolicyv2listpoliciesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## orgpolicy.projects.policies.create

<a id="opIdorgpolicy.projects.policies.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/policies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alternate": {
      "launch": "string",
      "spec": {
        "etag": "string",
        "inheritFromParent": true,
        "reset": true,
        "rules": [
          {
            "allowAll": true,
            "condition": {
              "description": "string",
              "expression": "string",
              "location": "string",
              "title": "string"
            },
            "denyAll": true,
            "enforce": true,
            "values": {
              "allowedValues": [
                "string"
              ],
              "deniedValues": [
                "string"
              ]
            }
          }
        ]
      }
    },
    "dryRunSpec": {
      "etag": "string",
      "inheritFromParent": true,
      "reset": true,
      "rules": [
        {
          "allowAll": true,
          "condition": {
            "description": "string",
            "expression": "string",
            "location": "string",
            "title": "string"
          },
          "denyAll": true,
          "enforce": true,
          "values": {
            "allowedValues": [
              "string"
            ],
            "deniedValues": [
              "string"
            ]
          }
        }
      ]
    },
    "name": "string",
    "spec": {
      "etag": "string",
      "inheritFromParent": true,
      "reset": true,
      "rules": [
        {
          "allowAll": true,
          "condition": {
            "description": "string",
            "expression": "string",
            "location": "string",
            "title": "string"
          },
          "denyAll": true,
          "enforce": true,
          "values": {
            "allowedValues": [
              "string"
            ],
            "deniedValues": [
              "string"
            ]
          }
        }
      ]
    }
  }'
```

`POST /v2/{parent}/policies`

Creates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the policy already exists on the given Google Cloud resource.

> Body parameter

```json
{
  "alternate": {
    "launch": "string",
    "spec": {
      "etag": "string",
      "inheritFromParent": true,
      "reset": true,
      "rules": [
        {
          "allowAll": true,
          "condition": {
            "description": "string",
            "expression": "string",
            "location": "string",
            "title": "string"
          },
          "denyAll": true,
          "enforce": true,
          "values": {
            "allowedValues": [
              "string"
            ],
            "deniedValues": [
              "string"
            ]
          }
        }
      ]
    }
  },
  "dryRunSpec": {
    "etag": "string",
    "inheritFromParent": true,
    "reset": true,
    "rules": [
      {
        "allowAll": true,
        "condition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "denyAll": true,
        "enforce": true,
        "values": {
          "allowedValues": [
            "string"
          ],
          "deniedValues": [
            "string"
          ]
        }
      }
    ]
  },
  "name": "string",
  "spec": {
    "etag": "string",
    "inheritFromParent": true,
    "reset": true,
    "rules": [
      {
        "allowAll": true,
        "condition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "denyAll": true,
        "enforce": true,
        "values": {
          "allowedValues": [
            "string"
          ],
          "deniedValues": [
            "string"
          ]
        }
      }
    ]
  }
}
```

<h3 id="orgpolicyprojectspoliciescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The Google Cloud resource that will parent the new policy. Must be in one of the following forms: * `projects/{project_number}` * `projects/{project_id}` * `folders/{folder_id}` * `organizations/{organization_id}`|
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
|body|body|[GoogleCloudOrgpolicyV2Policy](#schemagooglecloudorgpolicyv2policy)|false|none|
|» alternate|body|[GoogleCloudOrgpolicyV2AlternatePolicySpec](#schemagooglecloudorgpolicyv2alternatepolicyspec)|false|Deprecated.|
|» dryRunSpec|body|[GoogleCloudOrgpolicyV2PolicySpec](#schemagooglecloudorgpolicyv2policyspec)|false|Dry-run policy. Audit-only policy, can be used to monitor how the policy would have impacted the existing and future resources if it's enforced.|
|» name|body|string|false|Immutable. The resource name of the policy. Must be one of the following forms, where constraint_name is the name of the constraint which this policy configures: * `projects/{project_number}/policies/{constraint_name}` * `folders/{folder_id}/policies/{constraint_name}` * `organizations/{organization_id}/policies/{constraint_name}` For example, "projects/123/policies/compute.disableSerialPortAccess". Note: `projects/{project_id}/policies/{constraint_name}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number.|
|» spec|body|[GoogleCloudOrgpolicyV2PolicySpec](#schemagooglecloudorgpolicyv2policyspec)|false|Basic information about the Organization Policy.|

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
  "alternate": {
    "launch": "string",
    "spec": {
      "etag": "string",
      "inheritFromParent": true,
      "reset": true,
      "rules": [
        {
          "allowAll": true,
          "condition": {
            "description": "string",
            "expression": "string",
            "location": "string",
            "title": "string"
          },
          "denyAll": true,
          "enforce": true,
          "values": {
            "allowedValues": [
              "string"
            ],
            "deniedValues": [
              "string"
            ]
          }
        }
      ],
      "updateTime": "string"
    }
  },
  "dryRunSpec": {
    "etag": "string",
    "inheritFromParent": true,
    "reset": true,
    "rules": [
      {
        "allowAll": true,
        "condition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "denyAll": true,
        "enforce": true,
        "values": {
          "allowedValues": [
            "string"
          ],
          "deniedValues": [
            "string"
          ]
        }
      }
    ],
    "updateTime": "string"
  },
  "name": "string",
  "spec": {
    "etag": "string",
    "inheritFromParent": true,
    "reset": true,
    "rules": [
      {
        "allowAll": true,
        "condition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "denyAll": true,
        "enforce": true,
        "values": {
          "allowedValues": [
            "string"
          ],
          "deniedValues": [
            "string"
          ]
        }
      }
    ],
    "updateTime": "string"
  }
}
```

<h3 id="orgpolicyprojectspoliciescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudOrgpolicyV2Policy](#schemagooglecloudorgpolicyv2policy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_GoogleCloudOrgpolicyV2AlternatePolicySpec">GoogleCloudOrgpolicyV2AlternatePolicySpec</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudorgpolicyv2alternatepolicyspec"></a>
<a id="schema_GoogleCloudOrgpolicyV2AlternatePolicySpec"></a>
<a id="tocSgooglecloudorgpolicyv2alternatepolicyspec"></a>
<a id="tocsgooglecloudorgpolicyv2alternatepolicyspec"></a>

```json
{
  "launch": "string",
  "spec": {
    "etag": "string",
    "inheritFromParent": true,
    "reset": true,
    "rules": [
      {
        "allowAll": true,
        "condition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "denyAll": true,
        "enforce": true,
        "values": {
          "allowedValues": [
            "string"
          ],
          "deniedValues": [
            "string"
          ]
        }
      }
    ],
    "updateTime": "string"
  }
}
```

Similar to PolicySpec but with an extra 'launch' field for launch reference. The PolicySpec here is specific for dry-run/darklaunch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|launch|string|false|none|Reference to the launch that will be used while audit logging and to control the launch. Should be set only in the alternate policy.|
|spec|[GoogleCloudOrgpolicyV2PolicySpec](#schemagooglecloudorgpolicyv2policyspec)|false|none|Specify constraint for configurations of Google Cloud resources.|

<h2 id="tocS_GoogleCloudOrgpolicyV2Constraint">GoogleCloudOrgpolicyV2Constraint</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudorgpolicyv2constraint"></a>
<a id="schema_GoogleCloudOrgpolicyV2Constraint"></a>
<a id="tocSgooglecloudorgpolicyv2constraint"></a>
<a id="tocsgooglecloudorgpolicyv2constraint"></a>

```json
{
  "booleanConstraint": {},
  "constraintDefault": "CONSTRAINT_DEFAULT_UNSPECIFIED",
  "description": "string",
  "displayName": "string",
  "listConstraint": {
    "supportsIn": true,
    "supportsUnder": true
  },
  "name": "string",
  "supportsDryRun": true
}
```

A constraint describes a way to restrict resource's configuration. For example, you could enforce a constraint that controls which Google Cloud services can be activated across an organization, or whether a Compute Engine instance can have serial port connections established. Constraints can be configured by the organization policy administrator to fit the needs of the organization by setting a policy that includes constraints at different locations in the organization's resource hierarchy. Policies are inherited down the resource hierarchy from higher levels, but can also be overridden. For details about the inheritance rules please read about `policies`. Constraints have a default behavior determined by the `constraint_default` field, which is the enforcement behavior that is used in the absence of a policy being defined or inherited for the resource in question.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|booleanConstraint|[GoogleCloudOrgpolicyV2ConstraintBooleanConstraint](#schemagooglecloudorgpolicyv2constraintbooleanconstraint)|false|none|Defines this constraint as being a BooleanConstraint.|
|constraintDefault|string|false|none|The evaluation behavior of this constraint in the absence of a policy.|
|description|string|false|none|Detailed description of what this constraint controls as well as how and where it is enforced. Mutable.|
|displayName|string|false|none|The human readable name. Mutable.|
|listConstraint|[GoogleCloudOrgpolicyV2ConstraintListConstraint](#schemagooglecloudorgpolicyv2constraintlistconstraint)|false|none|Defines this constraint as being a ListConstraint.|
|name|string|false|none|Immutable. The resource name of the constraint. Must be in one of the following forms: * `projects/{project_number}/constraints/{constraint_name}` * `folders/{folder_id}/constraints/{constraint_name}` * `organizations/{organization_id}/constraints/{constraint_name}` For example, "/projects/123/constraints/compute.disableSerialPortAccess".|
|supportsDryRun|boolean|false|none|Shows if dry run is supported for this constraint or not.|

#### Enumerated Values

|Property|Value|
|---|---|
|constraintDefault|CONSTRAINT_DEFAULT_UNSPECIFIED|
|constraintDefault|ALLOW|
|constraintDefault|DENY|

<h2 id="tocS_GoogleCloudOrgpolicyV2ConstraintBooleanConstraint">GoogleCloudOrgpolicyV2ConstraintBooleanConstraint</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudorgpolicyv2constraintbooleanconstraint"></a>
<a id="schema_GoogleCloudOrgpolicyV2ConstraintBooleanConstraint"></a>
<a id="tocSgooglecloudorgpolicyv2constraintbooleanconstraint"></a>
<a id="tocsgooglecloudorgpolicyv2constraintbooleanconstraint"></a>

```json
{}
```

A constraint that is either enforced or not. For example, a constraint `constraints/compute.disableSerialPortAccess`. If it is enforced on a VM instance, serial port connections will not be opened to that instance.

<h2 id="tocS_GoogleCloudOrgpolicyV2ConstraintListConstraint">GoogleCloudOrgpolicyV2ConstraintListConstraint</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudorgpolicyv2constraintlistconstraint"></a>
<a id="schema_GoogleCloudOrgpolicyV2ConstraintListConstraint"></a>
<a id="tocSgooglecloudorgpolicyv2constraintlistconstraint"></a>
<a id="tocsgooglecloudorgpolicyv2constraintlistconstraint"></a>

```json
{
  "supportsIn": true,
  "supportsUnder": true
}
```

A constraint that allows or disallows a list of string values, which are configured by an Organization Policy administrator with a policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|supportsIn|boolean|false|none|Indicates whether values grouped into categories can be used in `Policy.allowed_values` and `Policy.denied_values`. For example, `"in:Python"` would match any value in the 'Python' group.|
|supportsUnder|boolean|false|none|Indicates whether subtrees of the Resource Manager resource hierarchy can be used in `Policy.allowed_values` and `Policy.denied_values`. For example, `"under:folders/123"` would match any resource under the 'folders/123' folder.|

<h2 id="tocS_GoogleCloudOrgpolicyV2CustomConstraint">GoogleCloudOrgpolicyV2CustomConstraint</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudorgpolicyv2customconstraint"></a>
<a id="schema_GoogleCloudOrgpolicyV2CustomConstraint"></a>
<a id="tocSgooglecloudorgpolicyv2customconstraint"></a>
<a id="tocsgooglecloudorgpolicyv2customconstraint"></a>

```json
{
  "actionType": "ACTION_TYPE_UNSPECIFIED",
  "condition": "string",
  "description": "string",
  "displayName": "string",
  "methodTypes": [
    "METHOD_TYPE_UNSPECIFIED"
  ],
  "name": "string",
  "resourceTypes": [
    "string"
  ],
  "updateTime": "string"
}
```

A custom constraint defined by customers which can *only* be applied to the given resource types and organization. By creating a custom constraint, customers can apply policies of this custom constraint. *Creating a custom constraint itself does NOT apply any policy enforcement*.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionType|string|false|none|Allow or deny type.|
|condition|string|false|none|Org policy condition/expression. For example: `resource.instanceName.matches("[production\|test]_.*_(\d)+")'` or, `resource.management.auto_upgrade == true` The max length of the condition is 1000 characters.|
|description|string|false|none|Detailed information about this custom policy constraint. The max length of the description is 2000 characters.|
|displayName|string|false|none|One line display name for the UI. The max length of the display_name is 200 characters.|
|methodTypes|[string]|false|none|All the operations being applied for this constraint.|
|name|string|false|none|Immutable. Name of the constraint. This is unique within the organization. Format of the name should be * `organizations/{organization_id}/customConstraints/{custom_constraint_id}` Example: `organizations/123/customConstraints/custom.createOnlyE2TypeVms` The max length is 70 characters and the minimum length is 1. Note that the prefix `organizations/{organization_id}/customConstraints/` is not counted.|
|resourceTypes|[string]|false|none|Immutable. The resource instance type on which this policy applies. Format will be of the form : `/` Example: * `compute.googleapis.com/Instance`.|
|updateTime|string(google-datetime)|false|read-only|Output only. The last time this custom constraint was updated. This represents the last time that the `CreateCustomConstraint` or `UpdateCustomConstraint` RPC was called|

#### Enumerated Values

|Property|Value|
|---|---|
|actionType|ACTION_TYPE_UNSPECIFIED|
|actionType|ALLOW|
|actionType|DENY|
|methodTypes|METHOD_TYPE_UNSPECIFIED|
|methodTypes|CREATE|
|methodTypes|UPDATE|
|methodTypes|DELETE|

<h2 id="tocS_GoogleCloudOrgpolicyV2ListConstraintsResponse">GoogleCloudOrgpolicyV2ListConstraintsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudorgpolicyv2listconstraintsresponse"></a>
<a id="schema_GoogleCloudOrgpolicyV2ListConstraintsResponse"></a>
<a id="tocSgooglecloudorgpolicyv2listconstraintsresponse"></a>
<a id="tocsgooglecloudorgpolicyv2listconstraintsresponse"></a>

```json
{
  "constraints": [
    {
      "booleanConstraint": {},
      "constraintDefault": "CONSTRAINT_DEFAULT_UNSPECIFIED",
      "description": "string",
      "displayName": "string",
      "listConstraint": {
        "supportsIn": true,
        "supportsUnder": true
      },
      "name": "string",
      "supportsDryRun": true
    }
  ],
  "nextPageToken": "string"
}
```

The response returned from the ListConstraints method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|constraints|[[GoogleCloudOrgpolicyV2Constraint](#schemagooglecloudorgpolicyv2constraint)]|false|none|The collection of constraints that are available on the targeted resource.|
|nextPageToken|string|false|none|Page token used to retrieve the next page. This is currently not used.|

<h2 id="tocS_GoogleCloudOrgpolicyV2ListCustomConstraintsResponse">GoogleCloudOrgpolicyV2ListCustomConstraintsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudorgpolicyv2listcustomconstraintsresponse"></a>
<a id="schema_GoogleCloudOrgpolicyV2ListCustomConstraintsResponse"></a>
<a id="tocSgooglecloudorgpolicyv2listcustomconstraintsresponse"></a>
<a id="tocsgooglecloudorgpolicyv2listcustomconstraintsresponse"></a>

```json
{
  "customConstraints": [
    {
      "actionType": "ACTION_TYPE_UNSPECIFIED",
      "condition": "string",
      "description": "string",
      "displayName": "string",
      "methodTypes": [
        "METHOD_TYPE_UNSPECIFIED"
      ],
      "name": "string",
      "resourceTypes": [
        "string"
      ],
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response returned from the ListCustomConstraints method. It will be empty if no custom constraints are set on the organization resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customConstraints|[[GoogleCloudOrgpolicyV2CustomConstraint](#schemagooglecloudorgpolicyv2customconstraint)]|false|none|All custom constraints that exist on the organization resource. It will be empty if no custom constraints are set.|
|nextPageToken|string|false|none|Page token used to retrieve the next page. This is currently not used, but the server may at any point start supplying a valid token.|

<h2 id="tocS_GoogleCloudOrgpolicyV2ListPoliciesResponse">GoogleCloudOrgpolicyV2ListPoliciesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudorgpolicyv2listpoliciesresponse"></a>
<a id="schema_GoogleCloudOrgpolicyV2ListPoliciesResponse"></a>
<a id="tocSgooglecloudorgpolicyv2listpoliciesresponse"></a>
<a id="tocsgooglecloudorgpolicyv2listpoliciesresponse"></a>

```json
{
  "nextPageToken": "string",
  "policies": [
    {
      "alternate": {
        "launch": "string",
        "spec": {
          "etag": "string",
          "inheritFromParent": true,
          "reset": true,
          "rules": [
            {
              "allowAll": true,
              "condition": {
                "description": "string",
                "expression": "string",
                "location": "string",
                "title": "string"
              },
              "denyAll": true,
              "enforce": true,
              "values": {
                "allowedValues": [
                  "string"
                ],
                "deniedValues": [
                  "string"
                ]
              }
            }
          ],
          "updateTime": "string"
        }
      },
      "dryRunSpec": {
        "etag": "string",
        "inheritFromParent": true,
        "reset": true,
        "rules": [
          {
            "allowAll": true,
            "condition": {
              "description": "string",
              "expression": "string",
              "location": "string",
              "title": "string"
            },
            "denyAll": true,
            "enforce": true,
            "values": {
              "allowedValues": [
                "string"
              ],
              "deniedValues": [
                "string"
              ]
            }
          }
        ],
        "updateTime": "string"
      },
      "name": "string",
      "spec": {
        "etag": "string",
        "inheritFromParent": true,
        "reset": true,
        "rules": [
          {
            "allowAll": true,
            "condition": {
              "description": "string",
              "expression": "string",
              "location": "string",
              "title": "string"
            },
            "denyAll": true,
            "enforce": true,
            "values": {
              "allowedValues": [
                "string"
              ],
              "deniedValues": [
                "string"
              ]
            }
          }
        ],
        "updateTime": "string"
      }
    }
  ]
}
```

The response returned from the ListPolicies method. It will be empty if no policies are set on the resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Page token used to retrieve the next page. This is currently not used, but the server may at any point start supplying a valid token.|
|policies|[[GoogleCloudOrgpolicyV2Policy](#schemagooglecloudorgpolicyv2policy)]|false|none|All policies that exist on the resource. It will be empty if no policies are set.|

<h2 id="tocS_GoogleCloudOrgpolicyV2Policy">GoogleCloudOrgpolicyV2Policy</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudorgpolicyv2policy"></a>
<a id="schema_GoogleCloudOrgpolicyV2Policy"></a>
<a id="tocSgooglecloudorgpolicyv2policy"></a>
<a id="tocsgooglecloudorgpolicyv2policy"></a>

```json
{
  "alternate": {
    "launch": "string",
    "spec": {
      "etag": "string",
      "inheritFromParent": true,
      "reset": true,
      "rules": [
        {
          "allowAll": true,
          "condition": {
            "description": "string",
            "expression": "string",
            "location": "string",
            "title": "string"
          },
          "denyAll": true,
          "enforce": true,
          "values": {
            "allowedValues": [
              "string"
            ],
            "deniedValues": [
              "string"
            ]
          }
        }
      ],
      "updateTime": "string"
    }
  },
  "dryRunSpec": {
    "etag": "string",
    "inheritFromParent": true,
    "reset": true,
    "rules": [
      {
        "allowAll": true,
        "condition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "denyAll": true,
        "enforce": true,
        "values": {
          "allowedValues": [
            "string"
          ],
          "deniedValues": [
            "string"
          ]
        }
      }
    ],
    "updateTime": "string"
  },
  "name": "string",
  "spec": {
    "etag": "string",
    "inheritFromParent": true,
    "reset": true,
    "rules": [
      {
        "allowAll": true,
        "condition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "denyAll": true,
        "enforce": true,
        "values": {
          "allowedValues": [
            "string"
          ],
          "deniedValues": [
            "string"
          ]
        }
      }
    ],
    "updateTime": "string"
  }
}
```

Defines an organization policy which is used to specify constraints for configurations of Google Cloud resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternate|[GoogleCloudOrgpolicyV2AlternatePolicySpec](#schemagooglecloudorgpolicyv2alternatepolicyspec)|false|none|Deprecated.|
|dryRunSpec|[GoogleCloudOrgpolicyV2PolicySpec](#schemagooglecloudorgpolicyv2policyspec)|false|none|Dry-run policy. Audit-only policy, can be used to monitor how the policy would have impacted the existing and future resources if it's enforced.|
|name|string|false|none|Immutable. The resource name of the policy. Must be one of the following forms, where constraint_name is the name of the constraint which this policy configures: * `projects/{project_number}/policies/{constraint_name}` * `folders/{folder_id}/policies/{constraint_name}` * `organizations/{organization_id}/policies/{constraint_name}` For example, "projects/123/policies/compute.disableSerialPortAccess". Note: `projects/{project_id}/policies/{constraint_name}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number.|
|spec|[GoogleCloudOrgpolicyV2PolicySpec](#schemagooglecloudorgpolicyv2policyspec)|false|none|Basic information about the Organization Policy.|

<h2 id="tocS_GoogleCloudOrgpolicyV2PolicySpec">GoogleCloudOrgpolicyV2PolicySpec</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudorgpolicyv2policyspec"></a>
<a id="schema_GoogleCloudOrgpolicyV2PolicySpec"></a>
<a id="tocSgooglecloudorgpolicyv2policyspec"></a>
<a id="tocsgooglecloudorgpolicyv2policyspec"></a>

```json
{
  "etag": "string",
  "inheritFromParent": true,
  "reset": true,
  "rules": [
    {
      "allowAll": true,
      "condition": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "denyAll": true,
      "enforce": true,
      "values": {
        "allowedValues": [
          "string"
        ],
        "deniedValues": [
          "string"
        ]
      }
    }
  ],
  "updateTime": "string"
}
```

Defines a Google Cloud policy specification which is used to specify constraints for configurations of Google Cloud resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|An opaque tag indicating the current version of the policy, used for concurrency control. This field is ignored if used in a `CreatePolicy` request. When the policy` is returned from either a `GetPolicy` or a `ListPolicies` request, this `etag` indicates the version of the current policy to use when executing a read-modify-write loop. When the policy is returned from a `GetEffectivePolicy` request, the `etag` will be unset.|
|inheritFromParent|boolean|false|none|Determines the inheritance behavior for this policy. If `inherit_from_parent` is true, policy rules set higher up in the hierarchy (up to the closest root) are inherited and present in the effective policy. If it is false, then no rules are inherited, and this policy becomes the new root for evaluation. This field can be set only for policies which configure list constraints.|
|reset|boolean|false|none|Ignores policies set above this resource and restores the `constraint_default` enforcement behavior of the specific constraint at this resource. This field can be set in policies for either list or boolean constraints. If set, `rules` must be empty and `inherit_from_parent` must be set to false.|
|rules|[[GoogleCloudOrgpolicyV2PolicySpecPolicyRule](#schemagooglecloudorgpolicyv2policyspecpolicyrule)]|false|none|In policies for boolean constraints, the following requirements apply: - There must be one and only one policy rule where condition is unset. - Boolean policy rules with conditions must set `enforced` to the opposite of the policy rule without a condition. - During policy evaluation, policy rules with conditions that are true for a target resource take precedence.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time stamp this was previously updated. This represents the last time a call to `CreatePolicy` or `UpdatePolicy` was made for that policy.|

<h2 id="tocS_GoogleCloudOrgpolicyV2PolicySpecPolicyRule">GoogleCloudOrgpolicyV2PolicySpecPolicyRule</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudorgpolicyv2policyspecpolicyrule"></a>
<a id="schema_GoogleCloudOrgpolicyV2PolicySpecPolicyRule"></a>
<a id="tocSgooglecloudorgpolicyv2policyspecpolicyrule"></a>
<a id="tocsgooglecloudorgpolicyv2policyspecpolicyrule"></a>

```json
{
  "allowAll": true,
  "condition": {
    "description": "string",
    "expression": "string",
    "location": "string",
    "title": "string"
  },
  "denyAll": true,
  "enforce": true,
  "values": {
    "allowedValues": [
      "string"
    ],
    "deniedValues": [
      "string"
    ]
  }
}
```

A rule used to express this policy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowAll|boolean|false|none|Setting this to true means that all values are allowed. This field can be set only in policies for list constraints.|
|condition|[GoogleTypeExpr](#schemagoogletypeexpr)|false|none|A condition which determines whether this rule is used in the evaluation of the policy. When set, the `expression` field in the `Expr' must include from 1 to 10 subexpressions, joined by the "\|\|" or "&&" operators. Each subexpression must be of the form "resource.matchTag('/tag_key_short_name, 'tag_value_short_name')". or "resource.matchTagId('tagKeys/key_id', 'tagValues/value_id')". where key_name and value_name are the resource names for Label Keys and Values. These names are available from the Tag Manager Service. An example expression is: "resource.matchTag('123456789/environment, 'prod')". or "resource.matchTagId('tagKeys/123', 'tagValues/456')".|
|denyAll|boolean|false|none|Setting this to true means that all values are denied. This field can be set only in policies for list constraints.|
|enforce|boolean|false|none|If `true`, then the policy is enforced. If `false`, then any configuration is acceptable. This field can be set only in policies for boolean constraints.|
|values|[GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues](#schemagooglecloudorgpolicyv2policyspecpolicyrulestringvalues)|false|none|List of values to be used for this policy rule. This field can be set only in policies for list constraints.|

<h2 id="tocS_GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues">GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudorgpolicyv2policyspecpolicyrulestringvalues"></a>
<a id="schema_GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues"></a>
<a id="tocSgooglecloudorgpolicyv2policyspecpolicyrulestringvalues"></a>
<a id="tocsgooglecloudorgpolicyv2policyspecpolicyrulestringvalues"></a>

```json
{
  "allowedValues": [
    "string"
  ],
  "deniedValues": [
    "string"
  ]
}
```

A message that holds specific allowed and denied values. This message can define specific values and subtrees of the Resource Manager resource hierarchy (`Organizations`, `Folders`, `Projects`) that are allowed or denied. This is achieved by using the `under:` and optional `is:` prefixes. The `under:` prefix is used to denote resource subtree values. The `is:` prefix is used to denote specific values, and is required only if the value contains a ":". Values prefixed with "is:" are treated the same as values with no prefix. Ancestry subtrees must be in one of the following formats: - "projects/", e.g. "projects/tokyo-rain-123" - "folders/", e.g. "folders/1234" - "organizations/", e.g. "organizations/1234" The `supports_under` field of the associated `Constraint` defines whether ancestry prefixes can be used.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedValues|[string]|false|none|List of values allowed at this resource.|
|deniedValues|[string]|false|none|List of values denied at this resource.|

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
