<h1 id="policy-troubleshooter-api">Policy Troubleshooter API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://policytroubleshooter.googleapis.com/">https://policytroubleshooter.googleapis.com/</a>

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

<h1 id="policy-troubleshooter-api-iam">iam</h1>

## policytroubleshooter.iam.troubleshoot

<a id="opIdpolicytroubleshooter.iam.troubleshoot"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/iam:troubleshoot \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accessTuple": {
      "fullResourceName": "string",
      "permission": "string",
      "principal": "string"
    }
  }'
```

`POST /v1/iam:troubleshoot`

Checks whether a principal has a specific permission for a specific resource, and explains why the principal does or does not have that permission.

> Body parameter

```json
{
  "accessTuple": {
    "fullResourceName": "string",
    "permission": "string",
    "principal": "string"
  }
}
```

<h3 id="policytroubleshooteriamtroubleshoot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest](#schemagooglecloudpolicytroubleshooterv1troubleshootiampolicyrequest)|false|none|
|» accessTuple|body|[GoogleCloudPolicytroubleshooterV1AccessTuple](#schemagooglecloudpolicytroubleshooterv1accesstuple)|false|The information to use for checking whether a principal has a permission for a resource.|

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
  "access": "ACCESS_STATE_UNSPECIFIED",
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
  "explainedPolicies": [
    {
      "access": "ACCESS_STATE_UNSPECIFIED",
      "bindingExplanations": [
        {
          "access": "ACCESS_STATE_UNSPECIFIED",
          "condition": {
            "description": "string",
            "expression": "string",
            "location": "string",
            "title": "string"
          },
          "memberships": {
            "property1": {
              "membership": "MEMBERSHIP_UNSPECIFIED",
              "relevance": "HEURISTIC_RELEVANCE_UNSPECIFIED"
            },
            "property2": {
              "membership": "MEMBERSHIP_UNSPECIFIED",
              "relevance": "HEURISTIC_RELEVANCE_UNSPECIFIED"
            }
          },
          "relevance": "HEURISTIC_RELEVANCE_UNSPECIFIED",
          "role": "string",
          "rolePermission": "ROLE_PERMISSION_UNSPECIFIED",
          "rolePermissionRelevance": "HEURISTIC_RELEVANCE_UNSPECIFIED"
        }
      ],
      "fullResourceName": "string",
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
      "relevance": "HEURISTIC_RELEVANCE_UNSPECIFIED"
    }
  ]
}
```

<h3 id="policytroubleshooteriamtroubleshoot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse](#schemagooglecloudpolicytroubleshooterv1troubleshootiampolicyresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_GoogleCloudPolicytroubleshooterV1AccessTuple">GoogleCloudPolicytroubleshooterV1AccessTuple</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpolicytroubleshooterv1accesstuple"></a>
<a id="schema_GoogleCloudPolicytroubleshooterV1AccessTuple"></a>
<a id="tocSgooglecloudpolicytroubleshooterv1accesstuple"></a>
<a id="tocsgooglecloudpolicytroubleshooterv1accesstuple"></a>

```json
{
  "fullResourceName": "string",
  "permission": "string",
  "principal": "string"
}
```

Information about the principal, resource, and permission to check.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fullResourceName|string|false|none|Required. The full resource name that identifies the resource. For example, `//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance`. For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names.|
|permission|string|false|none|Required. The IAM permission to check for the specified principal and resource. For a complete list of IAM permissions, see https://cloud.google.com/iam/help/permissions/reference. For a complete list of predefined IAM roles and the permissions in each role, see https://cloud.google.com/iam/help/roles/reference.|
|principal|string|false|none|Required. The principal whose access you want to check, in the form of the email address that represents that principal. For example, `alice@example.com` or `my-service-account@my-project.iam.gserviceaccount.com`. The principal must be a Google Account or a service account. Other types of principals are not supported.|

<h2 id="tocS_GoogleCloudPolicytroubleshooterV1BindingExplanation">GoogleCloudPolicytroubleshooterV1BindingExplanation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpolicytroubleshooterv1bindingexplanation"></a>
<a id="schema_GoogleCloudPolicytroubleshooterV1BindingExplanation"></a>
<a id="tocSgooglecloudpolicytroubleshooterv1bindingexplanation"></a>
<a id="tocsgooglecloudpolicytroubleshooterv1bindingexplanation"></a>

```json
{
  "access": "ACCESS_STATE_UNSPECIFIED",
  "condition": {
    "description": "string",
    "expression": "string",
    "location": "string",
    "title": "string"
  },
  "memberships": {
    "property1": {
      "membership": "MEMBERSHIP_UNSPECIFIED",
      "relevance": "HEURISTIC_RELEVANCE_UNSPECIFIED"
    },
    "property2": {
      "membership": "MEMBERSHIP_UNSPECIFIED",
      "relevance": "HEURISTIC_RELEVANCE_UNSPECIFIED"
    }
  },
  "relevance": "HEURISTIC_RELEVANCE_UNSPECIFIED",
  "role": "string",
  "rolePermission": "ROLE_PERMISSION_UNSPECIFIED",
  "rolePermissionRelevance": "HEURISTIC_RELEVANCE_UNSPECIFIED"
}
```

Details about how a binding in a policy affects a principal's ability to use a permission.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access|string|false|none|Required. Indicates whether _this binding_ provides the specified permission to the specified principal for the specified resource. This field does _not_ indicate whether the principal actually has the permission for the resource. There might be another binding that overrides this binding. To determine whether the principal actually has the permission, use the `access` field in the TroubleshootIamPolicyResponse.|
|condition|[GoogleTypeExpr](#schemagoogletypeexpr)|false|none|A condition expression that prevents this binding from granting access unless the expression evaluates to `true`. To learn about IAM Conditions, see https://cloud.google.com/iam/help/conditions/overview.|
|memberships|object|false|none|Indicates whether each principal in the binding includes the principal specified in the request, either directly or indirectly. Each key identifies a principal in the binding, and each value indicates whether the principal in the binding includes the principal in the request. For example, suppose that a binding includes the following principals: * `user:alice@example.com` * `group:product-eng@example.com` You want to troubleshoot access for `user:bob@example.com`. This user is a principal of the group `group:product-eng@example.com`. For the first principal in the binding, the key is `user:alice@example.com`, and the `membership` field in the value is set to `MEMBERSHIP_NOT_INCLUDED`. For the second principal in the binding, the key is `group:product-eng@example.com`, and the `membership` field in the value is set to `MEMBERSHIP_INCLUDED`.|
|relevance|string|false|none|The relevance of this binding to the overall determination for the entire policy.|
|role|string|false|none|The role that this binding grants. For example, `roles/compute.serviceAgent`. For a complete list of predefined IAM roles, as well as the permissions in each role, see https://cloud.google.com/iam/help/roles/reference.|
|rolePermission|string|false|none|Indicates whether the role granted by this binding contains the specified permission.|
|rolePermissionRelevance|string|false|none|The relevance of the permission's existence, or nonexistence, in the role to the overall determination for the entire policy.|

#### Enumerated Values

|Property|Value|
|---|---|
|access|ACCESS_STATE_UNSPECIFIED|
|access|GRANTED|
|access|NOT_GRANTED|
|access|UNKNOWN_CONDITIONAL|
|access|UNKNOWN_INFO_DENIED|
|relevance|HEURISTIC_RELEVANCE_UNSPECIFIED|
|relevance|NORMAL|
|relevance|HIGH|
|rolePermission|ROLE_PERMISSION_UNSPECIFIED|
|rolePermission|ROLE_PERMISSION_INCLUDED|
|rolePermission|ROLE_PERMISSION_NOT_INCLUDED|
|rolePermission|ROLE_PERMISSION_UNKNOWN_INFO_DENIED|
|rolePermissionRelevance|HEURISTIC_RELEVANCE_UNSPECIFIED|
|rolePermissionRelevance|NORMAL|
|rolePermissionRelevance|HIGH|

<h2 id="tocS_GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership">GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpolicytroubleshooterv1bindingexplanationannotatedmembership"></a>
<a id="schema_GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership"></a>
<a id="tocSgooglecloudpolicytroubleshooterv1bindingexplanationannotatedmembership"></a>
<a id="tocsgooglecloudpolicytroubleshooterv1bindingexplanationannotatedmembership"></a>

```json
{
  "membership": "MEMBERSHIP_UNSPECIFIED",
  "relevance": "HEURISTIC_RELEVANCE_UNSPECIFIED"
}
```

Details about whether the binding includes the principal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|membership|string|false|none|Indicates whether the binding includes the principal.|
|relevance|string|false|none|The relevance of the principal's status to the overall determination for the binding.|

#### Enumerated Values

|Property|Value|
|---|---|
|membership|MEMBERSHIP_UNSPECIFIED|
|membership|MEMBERSHIP_INCLUDED|
|membership|MEMBERSHIP_NOT_INCLUDED|
|membership|MEMBERSHIP_UNKNOWN_INFO_DENIED|
|membership|MEMBERSHIP_UNKNOWN_UNSUPPORTED|
|relevance|HEURISTIC_RELEVANCE_UNSPECIFIED|
|relevance|NORMAL|
|relevance|HIGH|

<h2 id="tocS_GoogleCloudPolicytroubleshooterV1ExplainedPolicy">GoogleCloudPolicytroubleshooterV1ExplainedPolicy</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpolicytroubleshooterv1explainedpolicy"></a>
<a id="schema_GoogleCloudPolicytroubleshooterV1ExplainedPolicy"></a>
<a id="tocSgooglecloudpolicytroubleshooterv1explainedpolicy"></a>
<a id="tocsgooglecloudpolicytroubleshooterv1explainedpolicy"></a>

```json
{
  "access": "ACCESS_STATE_UNSPECIFIED",
  "bindingExplanations": [
    {
      "access": "ACCESS_STATE_UNSPECIFIED",
      "condition": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "memberships": {
        "property1": {
          "membership": "MEMBERSHIP_UNSPECIFIED",
          "relevance": "HEURISTIC_RELEVANCE_UNSPECIFIED"
        },
        "property2": {
          "membership": "MEMBERSHIP_UNSPECIFIED",
          "relevance": "HEURISTIC_RELEVANCE_UNSPECIFIED"
        }
      },
      "relevance": "HEURISTIC_RELEVANCE_UNSPECIFIED",
      "role": "string",
      "rolePermission": "ROLE_PERMISSION_UNSPECIFIED",
      "rolePermissionRelevance": "HEURISTIC_RELEVANCE_UNSPECIFIED"
    }
  ],
  "fullResourceName": "string",
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
  "relevance": "HEURISTIC_RELEVANCE_UNSPECIFIED"
}
```

Details about how a specific IAM Policy contributed to the access check.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access|string|false|none|Indicates whether _this policy_ provides the specified permission to the specified principal for the specified resource. This field does _not_ indicate whether the principal actually has the permission for the resource. There might be another policy that overrides this policy. To determine whether the principal actually has the permission, use the `access` field in the TroubleshootIamPolicyResponse.|
|bindingExplanations|[[GoogleCloudPolicytroubleshooterV1BindingExplanation](#schemagooglecloudpolicytroubleshooterv1bindingexplanation)]|false|none|Details about how each binding in the policy affects the principal's ability, or inability, to use the permission for the resource. If the sender of the request does not have access to the policy, this field is omitted.|
|fullResourceName|string|false|none|The full resource name that identifies the resource. For example, `//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance`. If the sender of the request does not have access to the policy, this field is omitted. For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names.|
|policy|[GoogleIamV1Policy](#schemagoogleiamv1policy)|false|none|The IAM policy attached to the resource. If the sender of the request does not have access to the policy, this field is empty.|
|relevance|string|false|none|The relevance of this policy to the overall determination in the TroubleshootIamPolicyResponse. If the sender of the request does not have access to the policy, this field is omitted.|

#### Enumerated Values

|Property|Value|
|---|---|
|access|ACCESS_STATE_UNSPECIFIED|
|access|GRANTED|
|access|NOT_GRANTED|
|access|UNKNOWN_CONDITIONAL|
|access|UNKNOWN_INFO_DENIED|
|relevance|HEURISTIC_RELEVANCE_UNSPECIFIED|
|relevance|NORMAL|
|relevance|HIGH|

<h2 id="tocS_GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest">GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpolicytroubleshooterv1troubleshootiampolicyrequest"></a>
<a id="schema_GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest"></a>
<a id="tocSgooglecloudpolicytroubleshooterv1troubleshootiampolicyrequest"></a>
<a id="tocsgooglecloudpolicytroubleshooterv1troubleshootiampolicyrequest"></a>

```json
{
  "accessTuple": {
    "fullResourceName": "string",
    "permission": "string",
    "principal": "string"
  }
}
```

Request for TroubleshootIamPolicy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessTuple|[GoogleCloudPolicytroubleshooterV1AccessTuple](#schemagooglecloudpolicytroubleshooterv1accesstuple)|false|none|The information to use for checking whether a principal has a permission for a resource.|

<h2 id="tocS_GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse">GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudpolicytroubleshooterv1troubleshootiampolicyresponse"></a>
<a id="schema_GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse"></a>
<a id="tocSgooglecloudpolicytroubleshooterv1troubleshootiampolicyresponse"></a>
<a id="tocsgooglecloudpolicytroubleshooterv1troubleshootiampolicyresponse"></a>

```json
{
  "access": "ACCESS_STATE_UNSPECIFIED",
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
  "explainedPolicies": [
    {
      "access": "ACCESS_STATE_UNSPECIFIED",
      "bindingExplanations": [
        {
          "access": "ACCESS_STATE_UNSPECIFIED",
          "condition": {
            "description": "string",
            "expression": "string",
            "location": "string",
            "title": "string"
          },
          "memberships": {
            "property1": {
              "membership": "MEMBERSHIP_UNSPECIFIED",
              "relevance": "HEURISTIC_RELEVANCE_UNSPECIFIED"
            },
            "property2": {
              "membership": "MEMBERSHIP_UNSPECIFIED",
              "relevance": "HEURISTIC_RELEVANCE_UNSPECIFIED"
            }
          },
          "relevance": "HEURISTIC_RELEVANCE_UNSPECIFIED",
          "role": "string",
          "rolePermission": "ROLE_PERMISSION_UNSPECIFIED",
          "rolePermissionRelevance": "HEURISTIC_RELEVANCE_UNSPECIFIED"
        }
      ],
      "fullResourceName": "string",
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
      "relevance": "HEURISTIC_RELEVANCE_UNSPECIFIED"
    }
  ]
}
```

Response for TroubleshootIamPolicy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access|string|false|none|Indicates whether the principal has the specified permission for the specified resource, based on evaluating all of the applicable IAM policies.|
|errors|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|The general errors contained in the troubleshooting response.|
|explainedPolicies|[[GoogleCloudPolicytroubleshooterV1ExplainedPolicy](#schemagooglecloudpolicytroubleshooterv1explainedpolicy)]|false|none|List of IAM policies that were evaluated to check the principal's permissions, with annotations to indicate how each policy contributed to the final result. The list of policies can include the policy for the resource itself. It can also include policies that are inherited from higher levels of the resource hierarchy, including the organization, the folder, and the project. To learn more about the resource hierarchy, see https://cloud.google.com/iam/help/resource-hierarchy.|

#### Enumerated Values

|Property|Value|
|---|---|
|access|ACCESS_STATE_UNSPECIFIED|
|access|GRANTED|
|access|NOT_GRANTED|
|access|UNKNOWN_CONDITIONAL|
|access|UNKNOWN_INFO_DENIED|

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
