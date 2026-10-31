<h1 id="cloud-asset-api">Cloud Asset API v1p7beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Cloud Asset API manages the history and inventory of Google Cloud resources.

Base URLs:

* <a href="https://cloudasset.googleapis.com/">https://cloudasset.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/asset-inventory/docs/quickstart">External documentation</a>

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

<h1 id="cloud-asset-api-operations">operations</h1>

## cloudasset.operations.get

<a id="opIdcloudasset.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1p7beta1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1p7beta1/{name}`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<h3 id="cloudassetoperationsget-parameters">Parameters</h3>

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

<h3 id="cloudassetoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="cloud-asset-api-v1p7beta1">v1p7beta1</h1>

## cloudasset.exportAssets

<a id="opIdcloudasset.exportAssets"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1p7beta1/string:exportAssets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "assetTypes": [
      "string"
    ],
    "contentType": "CONTENT_TYPE_UNSPECIFIED",
    "outputConfig": {
      "bigqueryDestination": {
        "dataset": "string",
        "force": true,
        "partitionSpec": {
          "partitionKey": "PARTITION_KEY_UNSPECIFIED"
        },
        "separateTablesPerAssetType": true,
        "table": "string"
      },
      "gcsDestination": {
        "uri": "string",
        "uriPrefix": "string"
      }
    },
    "readTime": "string",
    "relationshipTypes": [
      "string"
    ]
  }'
```

`POST /v1p7beta1/{parent}:exportAssets`

Exports assets with time and resource types to a given Cloud Storage location/BigQuery table. For Cloud Storage location destinations, the output format is newline-delimited JSON. Each line represents a google.cloud.asset.v1p7beta1.Asset in the JSON format; for BigQuery table destinations, the output table stores the fields in asset proto as columns. This API implements the google.longrunning.Operation API , which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes.

> Body parameter

```json
{
  "assetTypes": [
    "string"
  ],
  "contentType": "CONTENT_TYPE_UNSPECIFIED",
  "outputConfig": {
    "bigqueryDestination": {
      "dataset": "string",
      "force": true,
      "partitionSpec": {
        "partitionKey": "PARTITION_KEY_UNSPECIFIED"
      },
      "separateTablesPerAssetType": true,
      "table": "string"
    },
    "gcsDestination": {
      "uri": "string",
      "uriPrefix": "string"
    }
  },
  "readTime": "string",
  "relationshipTypes": [
    "string"
  ]
}
```

<h3 id="cloudassetexportassets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The relative name of the root asset. This can only be an organization number (such as "organizations/123"), a project ID (such as "projects/my-project-id"), or a project number (such as "projects/12345"), or a folder number (such as "folders/123").|
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
|body|body|[GoogleCloudAssetV1p7beta1ExportAssetsRequest](#schemagooglecloudassetv1p7beta1exportassetsrequest)|false|none|
|» assetTypes|body|[string]|false|A list of asset types to take a snapshot for. For example: "compute.googleapis.com/Disk". Regular expressions are also supported. For example: * "compute.googleapis.com.*" snapshots resources whose asset type starts with "compute.googleapis.com". * ".*Instance" snapshots resources whose asset type ends with "Instance". * ".*Instance.*" snapshots resources whose asset type contains "Instance". See [RE2](https://github.com/google/re2/wiki/Syntax) for all supported regular expression syntax. If the regular expression does not match any supported asset type, an INVALID_ARGUMENT error will be returned. If specified, only matching assets will be returned, otherwise, it will snapshot all asset types. See [Introduction to Cloud Asset Inventory](https://cloud.google.com/asset-inventory/docs/overview) for all supported asset types.|
|» contentType|body|string|false|Asset content type. If not specified, no content but the asset name will be returned.|
|» outputConfig|body|[GoogleCloudAssetV1p7beta1OutputConfig](#schemagooglecloudassetv1p7beta1outputconfig)|false|Required. Output configuration indicating where the results will be output to.|
|» readTime|body|string(google-datetime)|false|Timestamp to take an asset snapshot. This can only be set to a timestamp between the current time and the current time minus 35 days (inclusive). If not specified, the current time will be used. Due to delays in resource data collection and indexing, there is a volatile window during which running the same query may get different results.|
|» relationshipTypes|body|[string]|false|A list of relationship types to export, for example: `INSTANCE_TO_INSTANCEGROUP`. This field should only be specified if content_type=RELATIONSHIP. If specified, it will snapshot [asset_types]' specified relationships, or give errors if any relationship_types' supported types are not in [asset_types]. If not specified, it will snapshot all [asset_types]' supported relationships. An unspecified [asset_types] field means all supported asset_types. See [Introduction to Cloud Asset Inventory](https://cloud.google.com/asset-inventory/docs/overview) for all supported asset types and relationship types.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» contentType|CONTENT_TYPE_UNSPECIFIED|
|» contentType|RESOURCE|
|» contentType|IAM_POLICY|
|» contentType|ORG_POLICY|
|» contentType|ACCESS_POLICY|
|» contentType|RELATIONSHIP|

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

<h3 id="cloudassetexportassets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AnalyzeIamPolicyLongrunningMetadata">AnalyzeIamPolicyLongrunningMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzeiampolicylongrunningmetadata"></a>
<a id="schema_AnalyzeIamPolicyLongrunningMetadata"></a>
<a id="tocSanalyzeiampolicylongrunningmetadata"></a>
<a id="tocsanalyzeiampolicylongrunningmetadata"></a>

```json
{
  "createTime": "string"
}
```

Represents the metadata of the longrunning operation for the AnalyzeIamPolicyLongrunning RPC.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time the operation was created.|

<h2 id="tocS_AnalyzeIamPolicyLongrunningResponse">AnalyzeIamPolicyLongrunningResponse</h2>
<!-- backwards compatibility -->
<a id="schemaanalyzeiampolicylongrunningresponse"></a>
<a id="schema_AnalyzeIamPolicyLongrunningResponse"></a>
<a id="tocSanalyzeiampolicylongrunningresponse"></a>
<a id="tocsanalyzeiampolicylongrunningresponse"></a>

```json
{}
```

A response message for AssetService.AnalyzeIamPolicyLongrunning.

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

<h2 id="tocS_GoogleCloudAssetV1p7beta1Asset">GoogleCloudAssetV1p7beta1Asset</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudassetv1p7beta1asset"></a>
<a id="schema_GoogleCloudAssetV1p7beta1Asset"></a>
<a id="tocSgooglecloudassetv1p7beta1asset"></a>
<a id="tocsgooglecloudassetv1p7beta1asset"></a>

```json
{
  "accessLevel": {
    "basic": {
      "combiningFunction": "AND",
      "conditions": [
        {
          "devicePolicy": {
            "allowedDeviceManagementLevels": [
              "MANAGEMENT_UNSPECIFIED"
            ],
            "allowedEncryptionStatuses": [
              "ENCRYPTION_UNSPECIFIED"
            ],
            "osConstraints": [
              {
                "minimumVersion": "string",
                "osType": "OS_UNSPECIFIED",
                "requireVerifiedChromeOs": true
              }
            ],
            "requireAdminApproval": true,
            "requireCorpOwned": true,
            "requireScreenlock": true
          },
          "ipSubnetworks": [
            "string"
          ],
          "members": [
            "string"
          ],
          "negate": true,
          "regions": [
            "string"
          ],
          "requiredAccessLevels": [
            "string"
          ]
        }
      ]
    },
    "custom": {
      "expr": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      }
    },
    "description": "string",
    "name": "string",
    "title": "string"
  },
  "accessPolicy": {
    "etag": "string",
    "name": "string",
    "parent": "string",
    "scopes": [
      "string"
    ],
    "title": "string"
  },
  "ancestors": [
    "string"
  ],
  "assetType": "string",
  "iamPolicy": {
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
  "name": "string",
  "orgPolicy": [
    {
      "booleanPolicy": {
        "enforced": true
      },
      "constraint": "string",
      "etag": "string",
      "listPolicy": {
        "allValues": "ALL_VALUES_UNSPECIFIED",
        "allowedValues": [
          "string"
        ],
        "deniedValues": [
          "string"
        ],
        "inheritFromParent": true,
        "suggestedValue": "string"
      },
      "restoreDefault": {},
      "updateTime": "string",
      "version": 0
    }
  ],
  "relatedAssets": {
    "assets": [
      {
        "ancestors": [
          "string"
        ],
        "asset": "string",
        "assetType": "string"
      }
    ],
    "relationshipAttributes": {
      "action": "string",
      "sourceResourceType": "string",
      "targetResourceType": "string",
      "type": "string"
    }
  },
  "resource": {
    "data": {
      "property1": null,
      "property2": null
    },
    "discoveryDocumentUri": "string",
    "discoveryName": "string",
    "location": "string",
    "parent": "string",
    "resourceUrl": "string",
    "version": "string"
  },
  "servicePerimeter": {
    "description": "string",
    "name": "string",
    "perimeterType": "PERIMETER_TYPE_REGULAR",
    "spec": {
      "accessLevels": [
        "string"
      ],
      "egressPolicies": [
        {
          "egressFrom": {
            "identities": [
              "string"
            ],
            "identityType": "IDENTITY_TYPE_UNSPECIFIED"
          },
          "egressTo": {
            "externalResources": [
              "string"
            ],
            "operations": [
              {
                "methodSelectors": [
                  {
                    "method": "string",
                    "permission": "string"
                  }
                ],
                "serviceName": "string"
              }
            ],
            "resources": [
              "string"
            ]
          }
        }
      ],
      "ingressPolicies": [
        {
          "ingressFrom": {
            "identities": [
              "string"
            ],
            "identityType": "IDENTITY_TYPE_UNSPECIFIED",
            "sources": [
              {
                "accessLevel": "string",
                "resource": "string"
              }
            ]
          },
          "ingressTo": {
            "operations": [
              {
                "methodSelectors": [
                  {
                    "method": "string",
                    "permission": "string"
                  }
                ],
                "serviceName": "string"
              }
            ],
            "resources": [
              "string"
            ]
          }
        }
      ],
      "resources": [
        "string"
      ],
      "restrictedServices": [
        "string"
      ],
      "vpcAccessibleServices": {
        "allowedServices": [
          "string"
        ],
        "enableRestriction": true
      }
    },
    "status": {
      "accessLevels": [
        "string"
      ],
      "egressPolicies": [
        {
          "egressFrom": {
            "identities": [
              "string"
            ],
            "identityType": "IDENTITY_TYPE_UNSPECIFIED"
          },
          "egressTo": {
            "externalResources": [
              "string"
            ],
            "operations": [
              {
                "methodSelectors": [
                  {
                    "method": "string",
                    "permission": "string"
                  }
                ],
                "serviceName": "string"
              }
            ],
            "resources": [
              "string"
            ]
          }
        }
      ],
      "ingressPolicies": [
        {
          "ingressFrom": {
            "identities": [
              "string"
            ],
            "identityType": "IDENTITY_TYPE_UNSPECIFIED",
            "sources": [
              {
                "accessLevel": "string",
                "resource": "string"
              }
            ]
          },
          "ingressTo": {
            "operations": [
              {
                "methodSelectors": [
                  {
                    "method": "string",
                    "permission": "string"
                  }
                ],
                "serviceName": "string"
              }
            ],
            "resources": [
              "string"
            ]
          }
        }
      ],
      "resources": [
        "string"
      ],
      "restrictedServices": [
        "string"
      ],
      "vpcAccessibleServices": {
        "allowedServices": [
          "string"
        ],
        "enableRestriction": true
      }
    },
    "title": "string",
    "useExplicitDryRunSpec": true
  },
  "updateTime": "string"
}
```

An asset in Google Cloud. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. IAM policy). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessLevel|[GoogleIdentityAccesscontextmanagerV1AccessLevel](#schemagoogleidentityaccesscontextmanagerv1accesslevel)|false|none|Please also refer to the [access level user guide](https://cloud.google.com/access-context-manager/docs/overview#access-levels).|
|accessPolicy|[GoogleIdentityAccesscontextmanagerV1AccessPolicy](#schemagoogleidentityaccesscontextmanagerv1accesspolicy)|false|none|Please also refer to the [access policy user guide](https://cloud.google.com/access-context-manager/docs/overview#access-policies).|
|ancestors|[string]|false|none|The ancestry path of an asset in Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), represented as a list of relative resource names. An ancestry path starts with the closest ancestor in the hierarchy and ends at root. If the asset is a project, folder, or organization, the ancestry path starts from the asset itself. Example: `["projects/123456789", "folders/5432", "organizations/1234"]`|
|assetType|string|false|none|The type of the asset. Example: `compute.googleapis.com/Disk` See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information.|
|iamPolicy|[Policy](#schemapolicy)|false|none|A representation of the IAM policy set on a Google Cloud resource. There can be a maximum of one IAM policy set on any given resource. In addition, IAM policies inherit their granted access scope from any policies set on parent resources in the resource hierarchy. Therefore, the effectively policy is the union of both the policy set on this resource and each policy set on all of the resource's ancestry resource levels in the hierarchy. See [this topic](https://cloud.google.com/iam/help/allow-policies/inheritance) for more information.|
|name|string|false|none|The full name of the asset. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1` See [Resource names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information.|
|orgPolicy|[[GoogleCloudOrgpolicyV1Policy](#schemagooglecloudorgpolicyv1policy)]|false|none|A representation of an [organization policy](https://cloud.google.com/resource-manager/docs/organization-policy/overview#organization_policy). There can be more than one organization policy with different constraints set on a given resource.|
|relatedAssets|[GoogleCloudAssetV1p7beta1RelatedAssets](#schemagooglecloudassetv1p7beta1relatedassets)|false|none|The related assets of the asset of one relationship type. One asset only represents one type of relationship.|
|resource|[GoogleCloudAssetV1p7beta1Resource](#schemagooglecloudassetv1p7beta1resource)|false|none|A representation of the resource.|
|servicePerimeter|[GoogleIdentityAccesscontextmanagerV1ServicePerimeter](#schemagoogleidentityaccesscontextmanagerv1serviceperimeter)|false|none|Please also refer to the [service perimeter user guide](https://cloud.google.com/vpc-service-controls/docs/overview).|
|updateTime|string(google-datetime)|false|none|The last update timestamp of an asset. update_time is updated when create/update/delete operation is performed.|

<h2 id="tocS_GoogleCloudAssetV1p7beta1BigQueryDestination">GoogleCloudAssetV1p7beta1BigQueryDestination</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudassetv1p7beta1bigquerydestination"></a>
<a id="schema_GoogleCloudAssetV1p7beta1BigQueryDestination"></a>
<a id="tocSgooglecloudassetv1p7beta1bigquerydestination"></a>
<a id="tocsgooglecloudassetv1p7beta1bigquerydestination"></a>

```json
{
  "dataset": "string",
  "force": true,
  "partitionSpec": {
    "partitionKey": "PARTITION_KEY_UNSPECIFIED"
  },
  "separateTablesPerAssetType": true,
  "table": "string"
}
```

A BigQuery destination for exporting assets to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataset|string|false|none|Required. The BigQuery dataset in format "projects/projectId/datasets/datasetId", to which the snapshot result should be exported. If this dataset does not exist, the export call returns an INVALID_ARGUMENT error.|
|force|boolean|false|none|If the destination table already exists and this flag is `TRUE`, the table will be overwritten by the contents of assets snapshot. If the flag is `FALSE` or unset and the destination table already exists, the export call returns an INVALID_ARGUMEMT error.|
|partitionSpec|[GoogleCloudAssetV1p7beta1PartitionSpec](#schemagooglecloudassetv1p7beta1partitionspec)|false|none|[partition_spec] determines whether to export to partitioned table(s) and how to partition the data. If [partition_spec] is unset or [partition_spec.partition_key] is unset or `PARTITION_KEY_UNSPECIFIED`, the snapshot results will be exported to non-partitioned table(s). [force] will decide whether to overwrite existing table(s). If [partition_spec] is specified. First, the snapshot results will be written to partitioned table(s) with two additional timestamp columns, readTime and requestTime, one of which will be the partition key. Secondly, in the case when any destination table already exists, it will first try to update existing table's schema as necessary by appending additional columns. Then, if [force] is `TRUE`, the corresponding partition will be overwritten by the snapshot results (data in different partitions will remain intact); if [force] is unset or `FALSE`, it will append the data. An error will be returned if the schema update or data appension fails.|
|separateTablesPerAssetType|boolean|false|none|If this flag is `TRUE`, the snapshot results will be written to one or multiple tables, each of which contains results of one asset type. The [force] and [partition_spec] fields will apply to each of them. Field [table] will be concatenated with "_" and the asset type names (see https://cloud.google.com/asset-inventory/docs/supported-asset-types for supported asset types) to construct per-asset-type table names, in which all non-alphanumeric characters like "." and "/" will be substituted by "_". Example: if field [table] is "mytable" and snapshot results contain "storage.googleapis.com/Bucket" assets, the corresponding table name will be "mytable_storage_googleapis_com_Bucket". If any of these tables does not exist, a new table with the concatenated name will be created. When [content_type] in the ExportAssetsRequest is `RESOURCE`, the schema of each table will include RECORD-type columns mapped to the nested fields in the Asset.resource.data field of that asset type (up to the 15 nested level BigQuery supports (https://cloud.google.com/bigquery/docs/nested-repeated#limitations)). The fields in >15 nested levels will be stored in JSON format string as a child column of its parent RECORD column. If error occurs when exporting to any table, the whole export call will return an error but the export results that already succeed will persist. Example: if exporting to table_type_A succeeds when exporting to table_type_B fails during one export call, the results in table_type_A will persist and there will not be partial results persisting in a table.|
|table|string|false|none|Required. The BigQuery table to which the snapshot result should be written. If this table does not exist, a new table with the given name will be created.|

<h2 id="tocS_GoogleCloudAssetV1p7beta1ExportAssetsRequest">GoogleCloudAssetV1p7beta1ExportAssetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudassetv1p7beta1exportassetsrequest"></a>
<a id="schema_GoogleCloudAssetV1p7beta1ExportAssetsRequest"></a>
<a id="tocSgooglecloudassetv1p7beta1exportassetsrequest"></a>
<a id="tocsgooglecloudassetv1p7beta1exportassetsrequest"></a>

```json
{
  "assetTypes": [
    "string"
  ],
  "contentType": "CONTENT_TYPE_UNSPECIFIED",
  "outputConfig": {
    "bigqueryDestination": {
      "dataset": "string",
      "force": true,
      "partitionSpec": {
        "partitionKey": "PARTITION_KEY_UNSPECIFIED"
      },
      "separateTablesPerAssetType": true,
      "table": "string"
    },
    "gcsDestination": {
      "uri": "string",
      "uriPrefix": "string"
    }
  },
  "readTime": "string",
  "relationshipTypes": [
    "string"
  ]
}
```

Export asset request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetTypes|[string]|false|none|A list of asset types to take a snapshot for. For example: "compute.googleapis.com/Disk". Regular expressions are also supported. For example: * "compute.googleapis.com.*" snapshots resources whose asset type starts with "compute.googleapis.com". * ".*Instance" snapshots resources whose asset type ends with "Instance". * ".*Instance.*" snapshots resources whose asset type contains "Instance". See [RE2](https://github.com/google/re2/wiki/Syntax) for all supported regular expression syntax. If the regular expression does not match any supported asset type, an INVALID_ARGUMENT error will be returned. If specified, only matching assets will be returned, otherwise, it will snapshot all asset types. See [Introduction to Cloud Asset Inventory](https://cloud.google.com/asset-inventory/docs/overview) for all supported asset types.|
|contentType|string|false|none|Asset content type. If not specified, no content but the asset name will be returned.|
|outputConfig|[GoogleCloudAssetV1p7beta1OutputConfig](#schemagooglecloudassetv1p7beta1outputconfig)|false|none|Required. Output configuration indicating where the results will be output to.|
|readTime|string(google-datetime)|false|none|Timestamp to take an asset snapshot. This can only be set to a timestamp between the current time and the current time minus 35 days (inclusive). If not specified, the current time will be used. Due to delays in resource data collection and indexing, there is a volatile window during which running the same query may get different results.|
|relationshipTypes|[string]|false|none|A list of relationship types to export, for example: `INSTANCE_TO_INSTANCEGROUP`. This field should only be specified if content_type=RELATIONSHIP. If specified, it will snapshot [asset_types]' specified relationships, or give errors if any relationship_types' supported types are not in [asset_types]. If not specified, it will snapshot all [asset_types]' supported relationships. An unspecified [asset_types] field means all supported asset_types. See [Introduction to Cloud Asset Inventory](https://cloud.google.com/asset-inventory/docs/overview) for all supported asset types and relationship types.|

#### Enumerated Values

|Property|Value|
|---|---|
|contentType|CONTENT_TYPE_UNSPECIFIED|
|contentType|RESOURCE|
|contentType|IAM_POLICY|
|contentType|ORG_POLICY|
|contentType|ACCESS_POLICY|
|contentType|RELATIONSHIP|

<h2 id="tocS_GoogleCloudAssetV1p7beta1GcsDestination">GoogleCloudAssetV1p7beta1GcsDestination</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudassetv1p7beta1gcsdestination"></a>
<a id="schema_GoogleCloudAssetV1p7beta1GcsDestination"></a>
<a id="tocSgooglecloudassetv1p7beta1gcsdestination"></a>
<a id="tocsgooglecloudassetv1p7beta1gcsdestination"></a>

```json
{
  "uri": "string",
  "uriPrefix": "string"
}
```

A Cloud Storage location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|false|none|The URI of the Cloud Storage object. It's the same URI that is used by gsutil. Example: "gs://bucket_name/object_name". See [Viewing and Editing Object Metadata](https://cloud.google.com/storage/docs/viewing-editing-metadata) for more information.|
|uriPrefix|string|false|none|The URI prefix of all generated Cloud Storage objects. Example: "gs://bucket_name/object_name_prefix". Each object URI is in format: "gs://bucket_name/object_name_prefix/{ASSET_TYPE}/{SHARD_NUMBER} and only contains assets for that type. starts from 0. Example: "gs://bucket_name/object_name_prefix/compute.googleapis.com/Disk/0" is the first shard of output objects containing all compute.googleapis.com/Disk assets. An INVALID_ARGUMENT error will be returned if file with the same name "gs://bucket_name/object_name_prefix" already exists.|

<h2 id="tocS_GoogleCloudAssetV1p7beta1OutputConfig">GoogleCloudAssetV1p7beta1OutputConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudassetv1p7beta1outputconfig"></a>
<a id="schema_GoogleCloudAssetV1p7beta1OutputConfig"></a>
<a id="tocSgooglecloudassetv1p7beta1outputconfig"></a>
<a id="tocsgooglecloudassetv1p7beta1outputconfig"></a>

```json
{
  "bigqueryDestination": {
    "dataset": "string",
    "force": true,
    "partitionSpec": {
      "partitionKey": "PARTITION_KEY_UNSPECIFIED"
    },
    "separateTablesPerAssetType": true,
    "table": "string"
  },
  "gcsDestination": {
    "uri": "string",
    "uriPrefix": "string"
  }
}
```

Output configuration for export assets destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigqueryDestination|[GoogleCloudAssetV1p7beta1BigQueryDestination](#schemagooglecloudassetv1p7beta1bigquerydestination)|false|none|Destination on BigQuery. The output table stores the fields in asset proto as columns in BigQuery.|
|gcsDestination|[GoogleCloudAssetV1p7beta1GcsDestination](#schemagooglecloudassetv1p7beta1gcsdestination)|false|none|Destination on Cloud Storage.|

<h2 id="tocS_GoogleCloudAssetV1p7beta1PartitionSpec">GoogleCloudAssetV1p7beta1PartitionSpec</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudassetv1p7beta1partitionspec"></a>
<a id="schema_GoogleCloudAssetV1p7beta1PartitionSpec"></a>
<a id="tocSgooglecloudassetv1p7beta1partitionspec"></a>
<a id="tocsgooglecloudassetv1p7beta1partitionspec"></a>

```json
{
  "partitionKey": "PARTITION_KEY_UNSPECIFIED"
}
```

Specifications of BigQuery partitioned table as export destination.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|partitionKey|string|false|none|The partition key for BigQuery partitioned table.|

#### Enumerated Values

|Property|Value|
|---|---|
|partitionKey|PARTITION_KEY_UNSPECIFIED|
|partitionKey|READ_TIME|
|partitionKey|REQUEST_TIME|

<h2 id="tocS_GoogleCloudAssetV1p7beta1RelatedAsset">GoogleCloudAssetV1p7beta1RelatedAsset</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudassetv1p7beta1relatedasset"></a>
<a id="schema_GoogleCloudAssetV1p7beta1RelatedAsset"></a>
<a id="tocSgooglecloudassetv1p7beta1relatedasset"></a>
<a id="tocsgooglecloudassetv1p7beta1relatedasset"></a>

```json
{
  "ancestors": [
    "string"
  ],
  "asset": "string",
  "assetType": "string"
}
```

An asset identify in Google Cloud which contains its name, type and ancestors. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. IAM policy). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ancestors|[string]|false|none|The ancestors of an asset in Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), represented as a list of relative resource names. An ancestry path starts with the closest ancestor in the hierarchy and ends at root. Example: `["projects/123456789", "folders/5432", "organizations/1234"]`|
|asset|string|false|none|The full name of the asset. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1` See [Resource names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information.|
|assetType|string|false|none|The type of the asset. Example: `compute.googleapis.com/Disk` See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information.|

<h2 id="tocS_GoogleCloudAssetV1p7beta1RelatedAssets">GoogleCloudAssetV1p7beta1RelatedAssets</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudassetv1p7beta1relatedassets"></a>
<a id="schema_GoogleCloudAssetV1p7beta1RelatedAssets"></a>
<a id="tocSgooglecloudassetv1p7beta1relatedassets"></a>
<a id="tocsgooglecloudassetv1p7beta1relatedassets"></a>

```json
{
  "assets": [
    {
      "ancestors": [
        "string"
      ],
      "asset": "string",
      "assetType": "string"
    }
  ],
  "relationshipAttributes": {
    "action": "string",
    "sourceResourceType": "string",
    "targetResourceType": "string",
    "type": "string"
  }
}
```

The detailed related assets with the `relationship_type`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets|[[GoogleCloudAssetV1p7beta1RelatedAsset](#schemagooglecloudassetv1p7beta1relatedasset)]|false|none|The peer resources of the relationship.|
|relationshipAttributes|[GoogleCloudAssetV1p7beta1RelationshipAttributes](#schemagooglecloudassetv1p7beta1relationshipattributes)|false|none|The detailed relation attributes.|

<h2 id="tocS_GoogleCloudAssetV1p7beta1RelationshipAttributes">GoogleCloudAssetV1p7beta1RelationshipAttributes</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudassetv1p7beta1relationshipattributes"></a>
<a id="schema_GoogleCloudAssetV1p7beta1RelationshipAttributes"></a>
<a id="tocSgooglecloudassetv1p7beta1relationshipattributes"></a>
<a id="tocsgooglecloudassetv1p7beta1relationshipattributes"></a>

```json
{
  "action": "string",
  "sourceResourceType": "string",
  "targetResourceType": "string",
  "type": "string"
}
```

The relationship attributes which include `type`, `source_resource_type`, `target_resource_type` and `action`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|The detail of the relationship, e.g. `contains`, `attaches`|
|sourceResourceType|string|false|none|The source asset type. Example: `compute.googleapis.com/Instance`|
|targetResourceType|string|false|none|The target asset type. Example: `compute.googleapis.com/Disk`|
|type|string|false|none|The unique identifier of the relationship type. Example: `INSTANCE_TO_INSTANCEGROUP`|

<h2 id="tocS_GoogleCloudAssetV1p7beta1Resource">GoogleCloudAssetV1p7beta1Resource</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudassetv1p7beta1resource"></a>
<a id="schema_GoogleCloudAssetV1p7beta1Resource"></a>
<a id="tocSgooglecloudassetv1p7beta1resource"></a>
<a id="tocsgooglecloudassetv1p7beta1resource"></a>

```json
{
  "data": {
    "property1": null,
    "property2": null
  },
  "discoveryDocumentUri": "string",
  "discoveryName": "string",
  "location": "string",
  "parent": "string",
  "resourceUrl": "string",
  "version": "string"
}
```

A representation of a Google Cloud resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|The content of the resource, in which some sensitive fields are removed and may not be present.|
|discoveryDocumentUri|string|false|none|The URL of the discovery document containing the resource's JSON schema. Example: `https://www.googleapis.com/discovery/v1/apis/compute/v1/rest` This value is unspecified for resources that do not have an API based on a discovery document, such as Cloud Bigtable.|
|discoveryName|string|false|none|The JSON schema name listed in the discovery document. Example: `Project` This value is unspecified for resources that do not have an API based on a discovery document, such as Cloud Bigtable.|
|location|string|false|none|The location of the resource in Google Cloud, such as its zone and region. For more information, see https://cloud.google.com/about/locations/.|
|parent|string|false|none|The full name of the immediate parent of this resource. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. For Google Cloud assets, this value is the parent resource defined in the [IAM policy hierarchy](https://cloud.google.com/iam/docs/overview#policy_hierarchy). Example: `//cloudresourcemanager.googleapis.com/projects/my_project_123` For third-party assets, this field may be set differently.|
|resourceUrl|string|false|none|The REST URL for accessing the resource. An HTTP `GET` request using this URL returns the resource itself. Example: `https://cloudresourcemanager.googleapis.com/v1/projects/my-project-123` This value is unspecified for resources without a REST API.|
|version|string|false|none|The API version. Example: `v1`|

<h2 id="tocS_GoogleCloudOrgpolicyV1BooleanPolicy">GoogleCloudOrgpolicyV1BooleanPolicy</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudorgpolicyv1booleanpolicy"></a>
<a id="schema_GoogleCloudOrgpolicyV1BooleanPolicy"></a>
<a id="tocSgooglecloudorgpolicyv1booleanpolicy"></a>
<a id="tocsgooglecloudorgpolicyv1booleanpolicy"></a>

```json
{
  "enforced": true
}
```

Used in `policy_type` to specify how `boolean_policy` will behave at this resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enforced|boolean|false|none|If `true`, then the `Policy` is enforced. If `false`, then any configuration is acceptable. Suppose you have a `Constraint` `constraints/compute.disableSerialPortAccess` with `constraint_default` set to `ALLOW`. A `Policy` for that `Constraint` exhibits the following behavior: - If the `Policy` at this resource has enforced set to `false`, serial port connection attempts will be allowed. - If the `Policy` at this resource has enforced set to `true`, serial port connection attempts will be refused. - If the `Policy` at this resource is `RestoreDefault`, serial port connection attempts will be allowed. - If no `Policy` is set at this resource or anywhere higher in the resource hierarchy, serial port connection attempts will be allowed. - If no `Policy` is set at this resource, but one exists higher in the resource hierarchy, the behavior is as if the`Policy` were set at this resource. The following examples demonstrate the different possible layerings: Example 1 (nearest `Constraint` wins): `organizations/foo` has a `Policy` with: {enforced: false} `projects/bar` has no `Policy` set. The constraint at `projects/bar` and `organizations/foo` will not be enforced. Example 2 (enforcement gets replaced): `organizations/foo` has a `Policy` with: {enforced: false} `projects/bar` has a `Policy` with: {enforced: true} The constraint at `organizations/foo` is not enforced. The constraint at `projects/bar` is enforced. Example 3 (RestoreDefault): `organizations/foo` has a `Policy` with: {enforced: true} `projects/bar` has a `Policy` with: {RestoreDefault: {}} The constraint at `organizations/foo` is enforced. The constraint at `projects/bar` is not enforced, because `constraint_default` for the `Constraint` is `ALLOW`.|

<h2 id="tocS_GoogleCloudOrgpolicyV1ListPolicy">GoogleCloudOrgpolicyV1ListPolicy</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudorgpolicyv1listpolicy"></a>
<a id="schema_GoogleCloudOrgpolicyV1ListPolicy"></a>
<a id="tocSgooglecloudorgpolicyv1listpolicy"></a>
<a id="tocsgooglecloudorgpolicyv1listpolicy"></a>

```json
{
  "allValues": "ALL_VALUES_UNSPECIFIED",
  "allowedValues": [
    "string"
  ],
  "deniedValues": [
    "string"
  ],
  "inheritFromParent": true,
  "suggestedValue": "string"
}
```

Used in `policy_type` to specify how `list_policy` behaves at this resource. `ListPolicy` can define specific values and subtrees of Cloud Resource Manager resource hierarchy (`Organizations`, `Folders`, `Projects`) that are allowed or denied by setting the `allowed_values` and `denied_values` fields. This is achieved by using the `under:` and optional `is:` prefixes. The `under:` prefix is used to denote resource subtree values. The `is:` prefix is used to denote specific values, and is required only if the value contains a ":". Values prefixed with "is:" are treated the same as values with no prefix. Ancestry subtrees must be in one of the following formats: - "projects/", e.g. "projects/tokyo-rain-123" - "folders/", e.g. "folders/1234" - "organizations/", e.g. "organizations/1234" The `supports_under` field of the associated `Constraint` defines whether ancestry prefixes can be used. You can set `allowed_values` and `denied_values` in the same `Policy` if `all_values` is `ALL_VALUES_UNSPECIFIED`. `ALLOW` or `DENY` are used to allow or deny all values. If `all_values` is set to either `ALLOW` or `DENY`, `allowed_values` and `denied_values` must be unset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allValues|string|false|none|The policy all_values state.|
|allowedValues|[string]|false|none|List of values allowed at this resource. Can only be set if `all_values` is set to `ALL_VALUES_UNSPECIFIED`.|
|deniedValues|[string]|false|none|List of values denied at this resource. Can only be set if `all_values` is set to `ALL_VALUES_UNSPECIFIED`.|
|inheritFromParent|boolean|false|none|Determines the inheritance behavior for this `Policy`. By default, a `ListPolicy` set at a resource supersedes any `Policy` set anywhere up the resource hierarchy. However, if `inherit_from_parent` is set to `true`, then the values from the effective `Policy` of the parent resource are inherited, meaning the values set in this `Policy` are added to the values inherited up the hierarchy. Setting `Policy` hierarchies that inherit both allowed values and denied values isn't recommended in most circumstances to keep the configuration simple and understandable. However, it is possible to set a `Policy` with `allowed_values` set that inherits a `Policy` with `denied_values` set. In this case, the values that are allowed must be in `allowed_values` and not present in `denied_values`. For example, suppose you have a `Constraint` `constraints/serviceuser.services`, which has a `constraint_type` of `list_constraint`, and with `constraint_default` set to `ALLOW`. Suppose that at the Organization level, a `Policy` is applied that restricts the allowed API activations to {`E1`, `E2`}. Then, if a `Policy` is applied to a project below the Organization that has `inherit_from_parent` set to `false` and field all_values set to DENY, then an attempt to activate any API will be denied. The following examples demonstrate different possible layerings for `projects/bar` parented by `organizations/foo`: Example 1 (no inherited values): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values:"E2"} `projects/bar` has `inherit_from_parent` `false` and values: {allowed_values: "E3" allowed_values: "E4"} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are `E3`, and `E4`. Example 2 (inherited values): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values:"E2"} `projects/bar` has a `Policy` with values: {value: "E3" value: "E4" inherit_from_parent: true} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are `E1`, `E2`, `E3`, and `E4`. Example 3 (inheriting both allowed and denied values): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values: "E2"} `projects/bar` has a `Policy` with: {denied_values: "E1"} The accepted values at `organizations/foo` are `E1`, `E2`. The value accepted at `projects/bar` is `E2`. Example 4 (RestoreDefault): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values:"E2"} `projects/bar` has a `Policy` with values: {RestoreDefault: {}} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are either all or none depending on the value of `constraint_default` (if `ALLOW`, all; if `DENY`, none). Example 5 (no policy inherits parent policy): `organizations/foo` has no `Policy` set. `projects/bar` has no `Policy` set. The accepted values at both levels are either all or none depending on the value of `constraint_default` (if `ALLOW`, all; if `DENY`, none). Example 6 (ListConstraint allowing all): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values: "E2"} `projects/bar` has a `Policy` with: {all: ALLOW} The accepted values at `organizations/foo` are `E1`, E2`. Any value is accepted at `projects/bar`. Example 7 (ListConstraint allowing none): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values: "E2"} `projects/bar` has a `Policy` with: {all: DENY} The accepted values at `organizations/foo` are `E1`, E2`. No value is accepted at `projects/bar`. Example 10 (allowed and denied subtrees of Resource Manager hierarchy): Given the following resource hierarchy O1->{F1, F2}; F1->{P1}; F2->{P2, P3}, `organizations/foo` has a `Policy` with values: {allowed_values: "under:organizations/O1"} `projects/bar` has a `Policy` with: {allowed_values: "under:projects/P3"} {denied_values: "under:folders/F2"} The accepted values at `organizations/foo` are `organizations/O1`, `folders/F1`, `folders/F2`, `projects/P1`, `projects/P2`, `projects/P3`. The accepted values at `projects/bar` are `organizations/O1`, `folders/F1`, `projects/P1`.|
|suggestedValue|string|false|none|Optional. The Google Cloud Console will try to default to a configuration that matches the value specified in this `Policy`. If `suggested_value` is not set, it will inherit the value specified higher in the hierarchy, unless `inherit_from_parent` is `false`.|

#### Enumerated Values

|Property|Value|
|---|---|
|allValues|ALL_VALUES_UNSPECIFIED|
|allValues|ALLOW|
|allValues|DENY|

<h2 id="tocS_GoogleCloudOrgpolicyV1Policy">GoogleCloudOrgpolicyV1Policy</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudorgpolicyv1policy"></a>
<a id="schema_GoogleCloudOrgpolicyV1Policy"></a>
<a id="tocSgooglecloudorgpolicyv1policy"></a>
<a id="tocsgooglecloudorgpolicyv1policy"></a>

```json
{
  "booleanPolicy": {
    "enforced": true
  },
  "constraint": "string",
  "etag": "string",
  "listPolicy": {
    "allValues": "ALL_VALUES_UNSPECIFIED",
    "allowedValues": [
      "string"
    ],
    "deniedValues": [
      "string"
    ],
    "inheritFromParent": true,
    "suggestedValue": "string"
  },
  "restoreDefault": {},
  "updateTime": "string",
  "version": 0
}
```

Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|booleanPolicy|[GoogleCloudOrgpolicyV1BooleanPolicy](#schemagooglecloudorgpolicyv1booleanpolicy)|false|none|For boolean `Constraints`, whether to enforce the `Constraint` or not.|
|constraint|string|false|none|The name of the `Constraint` the `Policy` is configuring, for example, `constraints/serviceuser.services`. A [list of available constraints](/resource-manager/docs/organization-policy/org-policy-constraints) is available. Immutable after creation.|
|etag|string(byte)|false|none|An opaque tag indicating the current version of the `Policy`, used for concurrency control. When the `Policy` is returned from either a `GetPolicy` or a `ListOrgPolicy` request, this `etag` indicates the version of the current `Policy` to use when executing a read-modify-write loop. When the `Policy` is returned from a `GetEffectivePolicy` request, the `etag` will be unset. When the `Policy` is used in a `SetOrgPolicy` method, use the `etag` value that was returned from a `GetOrgPolicy` request as part of a read-modify-write loop for concurrency control. Not setting the `etag`in a `SetOrgPolicy` request will result in an unconditional write of the `Policy`.|
|listPolicy|[GoogleCloudOrgpolicyV1ListPolicy](#schemagooglecloudorgpolicyv1listpolicy)|false|none|List of values either allowed or disallowed.|
|restoreDefault|[GoogleCloudOrgpolicyV1RestoreDefault](#schemagooglecloudorgpolicyv1restoredefault)|false|none|Restores the default behavior of the constraint; independent of `Constraint` type.|
|updateTime|string(google-datetime)|false|none|The time stamp the `Policy` was previously updated. This is set by the server, not specified by the caller, and represents the last time a call to `SetOrgPolicy` was made for that `Policy`. Any value set by the client will be ignored.|
|version|integer(int32)|false|none|Version of the `Policy`. Default version is 0;|

<h2 id="tocS_GoogleCloudOrgpolicyV1RestoreDefault">GoogleCloudOrgpolicyV1RestoreDefault</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudorgpolicyv1restoredefault"></a>
<a id="schema_GoogleCloudOrgpolicyV1RestoreDefault"></a>
<a id="tocSgooglecloudorgpolicyv1restoredefault"></a>
<a id="tocsgooglecloudorgpolicyv1restoredefault"></a>

```json
{}
```

Ignores policies set above this resource and restores the `constraint_default` enforcement behavior of the specific `Constraint` at this resource. Suppose that `constraint_default` is set to `ALLOW` for the `Constraint` `constraints/serviceuser.services`. Suppose that organization foo.com sets a `Policy` at their Organization resource node that restricts the allowed service activations to deny all service activations. They could then set a `Policy` with the `policy_type` `restore_default` on several experimental projects, restoring the `constraint_default` enforcement of the `Constraint` for only those projects, allowing those projects to have all services activated.

<h2 id="tocS_GoogleIdentityAccesscontextmanagerV1AccessLevel">GoogleIdentityAccesscontextmanagerV1AccessLevel</h2>
<!-- backwards compatibility -->
<a id="schemagoogleidentityaccesscontextmanagerv1accesslevel"></a>
<a id="schema_GoogleIdentityAccesscontextmanagerV1AccessLevel"></a>
<a id="tocSgoogleidentityaccesscontextmanagerv1accesslevel"></a>
<a id="tocsgoogleidentityaccesscontextmanagerv1accesslevel"></a>

```json
{
  "basic": {
    "combiningFunction": "AND",
    "conditions": [
      {
        "devicePolicy": {
          "allowedDeviceManagementLevels": [
            "MANAGEMENT_UNSPECIFIED"
          ],
          "allowedEncryptionStatuses": [
            "ENCRYPTION_UNSPECIFIED"
          ],
          "osConstraints": [
            {
              "minimumVersion": "string",
              "osType": "OS_UNSPECIFIED",
              "requireVerifiedChromeOs": true
            }
          ],
          "requireAdminApproval": true,
          "requireCorpOwned": true,
          "requireScreenlock": true
        },
        "ipSubnetworks": [
          "string"
        ],
        "members": [
          "string"
        ],
        "negate": true,
        "regions": [
          "string"
        ],
        "requiredAccessLevels": [
          "string"
        ]
      }
    ]
  },
  "custom": {
    "expr": {
      "description": "string",
      "expression": "string",
      "location": "string",
      "title": "string"
    }
  },
  "description": "string",
  "name": "string",
  "title": "string"
}
```

An `AccessLevel` is a label that can be applied to requests to Google Cloud services, along with a list of requirements necessary for the label to be applied.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basic|[GoogleIdentityAccesscontextmanagerV1BasicLevel](#schemagoogleidentityaccesscontextmanagerv1basiclevel)|false|none|A `BasicLevel` composed of `Conditions`.|
|custom|[GoogleIdentityAccesscontextmanagerV1CustomLevel](#schemagoogleidentityaccesscontextmanagerv1customlevel)|false|none|A `CustomLevel` written in the Common Expression Language.|
|description|string|false|none|Description of the `AccessLevel` and its use. Does not affect behavior.|
|name|string|false|none|Resource name for the `AccessLevel`. Format: `accessPolicies/{access_policy}/accessLevels/{access_level}`. The `access_level` component must begin with a letter, followed by alphanumeric characters or `_`. Its maximum length is 50 characters. After you create an `AccessLevel`, you cannot change its `name`.|
|title|string|false|none|Human readable title. Must be unique within the Policy.|

<h2 id="tocS_GoogleIdentityAccesscontextmanagerV1AccessPolicy">GoogleIdentityAccesscontextmanagerV1AccessPolicy</h2>
<!-- backwards compatibility -->
<a id="schemagoogleidentityaccesscontextmanagerv1accesspolicy"></a>
<a id="schema_GoogleIdentityAccesscontextmanagerV1AccessPolicy"></a>
<a id="tocSgoogleidentityaccesscontextmanagerv1accesspolicy"></a>
<a id="tocsgoogleidentityaccesscontextmanagerv1accesspolicy"></a>

```json
{
  "etag": "string",
  "name": "string",
  "parent": "string",
  "scopes": [
    "string"
  ],
  "title": "string"
}
```

`AccessPolicy` is a container for `AccessLevels` (which define the necessary attributes to use Google Cloud services) and `ServicePerimeters` (which define regions of services able to freely pass data within a perimeter). An access policy is globally visible within an organization, and the restrictions it specifies apply to all projects within an organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|etag|string|false|none|Output only. An opaque identifier for the current version of the `AccessPolicy`. This will always be a strongly validated etag, meaning that two Access Polices will be identical if and only if their etags are identical. Clients should not expect this to be in any specific format.|
|name|string|false|none|Output only. Resource name of the `AccessPolicy`. Format: `accessPolicies/{access_policy}`|
|parent|string|false|none|Required. The parent of this `AccessPolicy` in the Cloud Resource Hierarchy. Currently immutable once created. Format: `organizations/{organization_id}`|
|scopes|[string]|false|none|The scopes of a policy define which resources an ACM policy can restrict, and where ACM resources can be referenced. For example, a policy with scopes=["folders/123"] has the following behavior: - vpcsc perimeters can only restrict projects within folders/123 - access levels can only be referenced by resources within folders/123. If empty, there are no limitations on which resources can be restricted by an ACM policy, and there are no limitations on where ACM resources can be referenced. Only one policy can include a given scope (attempting to create a second policy which includes "folders/123" will result in an error). Currently, scopes cannot be modified after a policy is created. Currently, policies can only have a single scope. Format: list of `folders/{folder_number}` or `projects/{project_number}`|
|title|string|false|none|Required. Human readable title. Does not affect behavior.|

<h2 id="tocS_GoogleIdentityAccesscontextmanagerV1ApiOperation">GoogleIdentityAccesscontextmanagerV1ApiOperation</h2>
<!-- backwards compatibility -->
<a id="schemagoogleidentityaccesscontextmanagerv1apioperation"></a>
<a id="schema_GoogleIdentityAccesscontextmanagerV1ApiOperation"></a>
<a id="tocSgoogleidentityaccesscontextmanagerv1apioperation"></a>
<a id="tocsgoogleidentityaccesscontextmanagerv1apioperation"></a>

```json
{
  "methodSelectors": [
    {
      "method": "string",
      "permission": "string"
    }
  ],
  "serviceName": "string"
}
```

Identification for an API Operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|methodSelectors|[[GoogleIdentityAccesscontextmanagerV1MethodSelector](#schemagoogleidentityaccesscontextmanagerv1methodselector)]|false|none|API methods or permissions to allow. Method or permission must belong to the service specified by `service_name` field. A single MethodSelector entry with `*` specified for the `method` field will allow all methods AND permissions for the service specified in `service_name`.|
|serviceName|string|false|none|The name of the API whose methods or permissions the IngressPolicy or EgressPolicy want to allow. A single ApiOperation with `service_name` field set to `*` will allow all methods AND permissions for all services.|

<h2 id="tocS_GoogleIdentityAccesscontextmanagerV1BasicLevel">GoogleIdentityAccesscontextmanagerV1BasicLevel</h2>
<!-- backwards compatibility -->
<a id="schemagoogleidentityaccesscontextmanagerv1basiclevel"></a>
<a id="schema_GoogleIdentityAccesscontextmanagerV1BasicLevel"></a>
<a id="tocSgoogleidentityaccesscontextmanagerv1basiclevel"></a>
<a id="tocsgoogleidentityaccesscontextmanagerv1basiclevel"></a>

```json
{
  "combiningFunction": "AND",
  "conditions": [
    {
      "devicePolicy": {
        "allowedDeviceManagementLevels": [
          "MANAGEMENT_UNSPECIFIED"
        ],
        "allowedEncryptionStatuses": [
          "ENCRYPTION_UNSPECIFIED"
        ],
        "osConstraints": [
          {
            "minimumVersion": "string",
            "osType": "OS_UNSPECIFIED",
            "requireVerifiedChromeOs": true
          }
        ],
        "requireAdminApproval": true,
        "requireCorpOwned": true,
        "requireScreenlock": true
      },
      "ipSubnetworks": [
        "string"
      ],
      "members": [
        "string"
      ],
      "negate": true,
      "regions": [
        "string"
      ],
      "requiredAccessLevels": [
        "string"
      ]
    }
  ]
}
```

`BasicLevel` is an `AccessLevel` using a set of recommended features.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|combiningFunction|string|false|none|How the `conditions` list should be combined to determine if a request is granted this `AccessLevel`. If AND is used, each `Condition` in `conditions` must be satisfied for the `AccessLevel` to be applied. If OR is used, at least one `Condition` in `conditions` must be satisfied for the `AccessLevel` to be applied. Default behavior is AND.|
|conditions|[[GoogleIdentityAccesscontextmanagerV1Condition](#schemagoogleidentityaccesscontextmanagerv1condition)]|false|none|Required. A list of requirements for the `AccessLevel` to be granted.|

#### Enumerated Values

|Property|Value|
|---|---|
|combiningFunction|AND|
|combiningFunction|OR|

<h2 id="tocS_GoogleIdentityAccesscontextmanagerV1Condition">GoogleIdentityAccesscontextmanagerV1Condition</h2>
<!-- backwards compatibility -->
<a id="schemagoogleidentityaccesscontextmanagerv1condition"></a>
<a id="schema_GoogleIdentityAccesscontextmanagerV1Condition"></a>
<a id="tocSgoogleidentityaccesscontextmanagerv1condition"></a>
<a id="tocsgoogleidentityaccesscontextmanagerv1condition"></a>

```json
{
  "devicePolicy": {
    "allowedDeviceManagementLevels": [
      "MANAGEMENT_UNSPECIFIED"
    ],
    "allowedEncryptionStatuses": [
      "ENCRYPTION_UNSPECIFIED"
    ],
    "osConstraints": [
      {
        "minimumVersion": "string",
        "osType": "OS_UNSPECIFIED",
        "requireVerifiedChromeOs": true
      }
    ],
    "requireAdminApproval": true,
    "requireCorpOwned": true,
    "requireScreenlock": true
  },
  "ipSubnetworks": [
    "string"
  ],
  "members": [
    "string"
  ],
  "negate": true,
  "regions": [
    "string"
  ],
  "requiredAccessLevels": [
    "string"
  ]
}
```

A condition necessary for an `AccessLevel` to be granted. The Condition is an AND over its fields. So a Condition is true if: 1) the request IP is from one of the listed subnetworks AND 2) the originating device complies with the listed device policy AND 3) all listed access levels are granted AND 4) the request was sent at a time allowed by the DateTimeRestriction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devicePolicy|[GoogleIdentityAccesscontextmanagerV1DevicePolicy](#schemagoogleidentityaccesscontextmanagerv1devicepolicy)|false|none|Device specific restrictions, all restrictions must hold for the Condition to be true. If not specified, all devices are allowed.|
|ipSubnetworks|[string]|false|none|CIDR block IP subnetwork specification. May be IPv4 or IPv6. Note that for a CIDR IP address block, the specified IP address portion must be properly truncated (i.e. all the host bits must be zero) or the input is considered malformed. For example, "192.0.2.0/24" is accepted but "192.0.2.1/24" is not. Similarly, for IPv6, "2001:db8::/32" is accepted whereas "2001:db8::1/32" is not. The originating IP of a request must be in one of the listed subnets in order for this Condition to be true. If empty, all IP addresses are allowed.|
|members|[string]|false|none|The request must be made by one of the provided user or service accounts. Groups are not supported. Syntax: `user:{emailid}` `serviceAccount:{emailid}` If not specified, a request may come from any user.|
|negate|boolean|false|none|Whether to negate the Condition. If true, the Condition becomes a NAND over its non-empty fields, each field must be false for the Condition overall to be satisfied. Defaults to false.|
|regions|[string]|false|none|The request must originate from one of the provided countries/regions. Must be valid ISO 3166-1 alpha-2 codes.|
|requiredAccessLevels|[string]|false|none|A list of other access levels defined in the same `Policy`, referenced by resource name. Referencing an `AccessLevel` which does not exist is an error. All access levels listed must be granted for the Condition to be true. Example: "`accessPolicies/MY_POLICY/accessLevels/LEVEL_NAME"`|

<h2 id="tocS_GoogleIdentityAccesscontextmanagerV1CustomLevel">GoogleIdentityAccesscontextmanagerV1CustomLevel</h2>
<!-- backwards compatibility -->
<a id="schemagoogleidentityaccesscontextmanagerv1customlevel"></a>
<a id="schema_GoogleIdentityAccesscontextmanagerV1CustomLevel"></a>
<a id="tocSgoogleidentityaccesscontextmanagerv1customlevel"></a>
<a id="tocsgoogleidentityaccesscontextmanagerv1customlevel"></a>

```json
{
  "expr": {
    "description": "string",
    "expression": "string",
    "location": "string",
    "title": "string"
  }
}
```

`CustomLevel` is an `AccessLevel` using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request. See CEL spec at: https://github.com/google/cel-spec

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expr|[Expr](#schemaexpr)|false|none|Required. A Cloud CEL expression evaluating to a boolean.|

<h2 id="tocS_GoogleIdentityAccesscontextmanagerV1DevicePolicy">GoogleIdentityAccesscontextmanagerV1DevicePolicy</h2>
<!-- backwards compatibility -->
<a id="schemagoogleidentityaccesscontextmanagerv1devicepolicy"></a>
<a id="schema_GoogleIdentityAccesscontextmanagerV1DevicePolicy"></a>
<a id="tocSgoogleidentityaccesscontextmanagerv1devicepolicy"></a>
<a id="tocsgoogleidentityaccesscontextmanagerv1devicepolicy"></a>

```json
{
  "allowedDeviceManagementLevels": [
    "MANAGEMENT_UNSPECIFIED"
  ],
  "allowedEncryptionStatuses": [
    "ENCRYPTION_UNSPECIFIED"
  ],
  "osConstraints": [
    {
      "minimumVersion": "string",
      "osType": "OS_UNSPECIFIED",
      "requireVerifiedChromeOs": true
    }
  ],
  "requireAdminApproval": true,
  "requireCorpOwned": true,
  "requireScreenlock": true
}
```

`DevicePolicy` specifies device specific restrictions necessary to acquire a given access level. A `DevicePolicy` specifies requirements for requests from devices to be granted access levels, it does not do any enforcement on the device. `DevicePolicy` acts as an AND over all specified fields, and each repeated field is an OR over its elements. Any unset fields are ignored. For example, if the proto is { os_type : DESKTOP_WINDOWS, os_type : DESKTOP_LINUX, encryption_status: ENCRYPTED}, then the DevicePolicy will be true for requests originating from encrypted Linux desktops and encrypted Windows desktops.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedDeviceManagementLevels|[string]|false|none|Allowed device management levels, an empty list allows all management levels.|
|allowedEncryptionStatuses|[string]|false|none|Allowed encryptions statuses, an empty list allows all statuses.|
|osConstraints|[[GoogleIdentityAccesscontextmanagerV1OsConstraint](#schemagoogleidentityaccesscontextmanagerv1osconstraint)]|false|none|Allowed OS versions, an empty list allows all types and all versions.|
|requireAdminApproval|boolean|false|none|Whether the device needs to be approved by the customer admin.|
|requireCorpOwned|boolean|false|none|Whether the device needs to be corp owned.|
|requireScreenlock|boolean|false|none|Whether or not screenlock is required for the DevicePolicy to be true. Defaults to `false`.|

#### Enumerated Values

|Property|Value|
|---|---|
|allowedDeviceManagementLevels|MANAGEMENT_UNSPECIFIED|
|allowedDeviceManagementLevels|NONE|
|allowedDeviceManagementLevels|BASIC|
|allowedDeviceManagementLevels|COMPLETE|
|allowedEncryptionStatuses|ENCRYPTION_UNSPECIFIED|
|allowedEncryptionStatuses|ENCRYPTION_UNSUPPORTED|
|allowedEncryptionStatuses|UNENCRYPTED|
|allowedEncryptionStatuses|ENCRYPTED|

<h2 id="tocS_GoogleIdentityAccesscontextmanagerV1EgressFrom">GoogleIdentityAccesscontextmanagerV1EgressFrom</h2>
<!-- backwards compatibility -->
<a id="schemagoogleidentityaccesscontextmanagerv1egressfrom"></a>
<a id="schema_GoogleIdentityAccesscontextmanagerV1EgressFrom"></a>
<a id="tocSgoogleidentityaccesscontextmanagerv1egressfrom"></a>
<a id="tocsgoogleidentityaccesscontextmanagerv1egressfrom"></a>

```json
{
  "identities": [
    "string"
  ],
  "identityType": "IDENTITY_TYPE_UNSPECIFIED"
}
```

Defines the conditions under which an EgressPolicy matches a request. Conditions based on information about the source of the request. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identities|[string]|false|none|A list of identities that are allowed access through this [EgressPolicy]. Should be in the format of email address. The email address should represent individual user or service account only.|
|identityType|string|false|none|Specifies the type of identities that are allowed access to outside the perimeter. If left unspecified, then members of `identities` field will be allowed access.|

#### Enumerated Values

|Property|Value|
|---|---|
|identityType|IDENTITY_TYPE_UNSPECIFIED|
|identityType|ANY_IDENTITY|
|identityType|ANY_USER_ACCOUNT|
|identityType|ANY_SERVICE_ACCOUNT|

<h2 id="tocS_GoogleIdentityAccesscontextmanagerV1EgressPolicy">GoogleIdentityAccesscontextmanagerV1EgressPolicy</h2>
<!-- backwards compatibility -->
<a id="schemagoogleidentityaccesscontextmanagerv1egresspolicy"></a>
<a id="schema_GoogleIdentityAccesscontextmanagerV1EgressPolicy"></a>
<a id="tocSgoogleidentityaccesscontextmanagerv1egresspolicy"></a>
<a id="tocsgoogleidentityaccesscontextmanagerv1egresspolicy"></a>

```json
{
  "egressFrom": {
    "identities": [
      "string"
    ],
    "identityType": "IDENTITY_TYPE_UNSPECIFIED"
  },
  "egressTo": {
    "externalResources": [
      "string"
    ],
    "operations": [
      {
        "methodSelectors": [
          {
            "method": "string",
            "permission": "string"
          }
        ],
        "serviceName": "string"
      }
    ],
    "resources": [
      "string"
    ]
  }
}
```

Policy for egress from perimeter. EgressPolicies match requests based on `egress_from` and `egress_to` stanzas. For an EgressPolicy to match, both `egress_from` and `egress_to` stanzas must be matched. If an EgressPolicy matches a request, the request is allowed to span the ServicePerimeter boundary. For example, an EgressPolicy can be used to allow VMs on networks within the ServicePerimeter to access a defined set of projects outside the perimeter in certain contexts (e.g. to read data from a Cloud Storage bucket or query against a BigQuery dataset). EgressPolicies are concerned with the *resources* that a request relates as well as the API services and API actions being used. They do not related to the direction of data movement. More detailed documentation for this concept can be found in the descriptions of EgressFrom and EgressTo.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|egressFrom|[GoogleIdentityAccesscontextmanagerV1EgressFrom](#schemagoogleidentityaccesscontextmanagerv1egressfrom)|false|none|Defines conditions on the source of a request causing this EgressPolicy to apply.|
|egressTo|[GoogleIdentityAccesscontextmanagerV1EgressTo](#schemagoogleidentityaccesscontextmanagerv1egressto)|false|none|Defines the conditions on the ApiOperation and destination resources that cause this EgressPolicy to apply.|

<h2 id="tocS_GoogleIdentityAccesscontextmanagerV1EgressTo">GoogleIdentityAccesscontextmanagerV1EgressTo</h2>
<!-- backwards compatibility -->
<a id="schemagoogleidentityaccesscontextmanagerv1egressto"></a>
<a id="schema_GoogleIdentityAccesscontextmanagerV1EgressTo"></a>
<a id="tocSgoogleidentityaccesscontextmanagerv1egressto"></a>
<a id="tocsgoogleidentityaccesscontextmanagerv1egressto"></a>

```json
{
  "externalResources": [
    "string"
  ],
  "operations": [
    {
      "methodSelectors": [
        {
          "method": "string",
          "permission": "string"
        }
      ],
      "serviceName": "string"
    }
  ],
  "resources": [
    "string"
  ]
}
```

Defines the conditions under which an EgressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the `resources` specified. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed. The request must match `operations` AND `resources` fields in order to be allowed egress out of the perimeter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|externalResources|[string]|false|none|A list of external resources that are allowed to be accessed. Only AWS and Azure resources are supported. For Amazon S3, the supported format is s3://BUCKET_NAME. For Azure Storage, the supported format is azure://myaccount.blob.core.windows.net/CONTAINER_NAME. A request matches if it contains an external resource in this list (Example: s3://bucket/path). Currently '*' is not allowed.|
|operations|[[GoogleIdentityAccesscontextmanagerV1ApiOperation](#schemagoogleidentityaccesscontextmanagerv1apioperation)]|false|none|A list of ApiOperations allowed to be performed by the sources specified in the corresponding EgressFrom. A request matches if it uses an operation/service in this list.|
|resources|[string]|false|none|A list of resources, currently only projects in the form `projects/`, that are allowed to be accessed by sources defined in the corresponding EgressFrom. A request matches if it contains a resource in this list. If `*` is specified for `resources`, then this EgressTo rule will authorize access to all resources outside the perimeter.|

<h2 id="tocS_GoogleIdentityAccesscontextmanagerV1IngressFrom">GoogleIdentityAccesscontextmanagerV1IngressFrom</h2>
<!-- backwards compatibility -->
<a id="schemagoogleidentityaccesscontextmanagerv1ingressfrom"></a>
<a id="schema_GoogleIdentityAccesscontextmanagerV1IngressFrom"></a>
<a id="tocSgoogleidentityaccesscontextmanagerv1ingressfrom"></a>
<a id="tocsgoogleidentityaccesscontextmanagerv1ingressfrom"></a>

```json
{
  "identities": [
    "string"
  ],
  "identityType": "IDENTITY_TYPE_UNSPECIFIED",
  "sources": [
    {
      "accessLevel": "string",
      "resource": "string"
    }
  ]
}
```

Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the source of the request. The request must satisfy what is defined in `sources` AND identity related fields in order to match.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identities|[string]|false|none|A list of identities that are allowed access through this ingress policy. Should be in the format of email address. The email address should represent individual user or service account only.|
|identityType|string|false|none|Specifies the type of identities that are allowed access from outside the perimeter. If left unspecified, then members of `identities` field will be allowed access.|
|sources|[[GoogleIdentityAccesscontextmanagerV1IngressSource](#schemagoogleidentityaccesscontextmanagerv1ingresssource)]|false|none|Sources that this IngressPolicy authorizes access from.|

#### Enumerated Values

|Property|Value|
|---|---|
|identityType|IDENTITY_TYPE_UNSPECIFIED|
|identityType|ANY_IDENTITY|
|identityType|ANY_USER_ACCOUNT|
|identityType|ANY_SERVICE_ACCOUNT|

<h2 id="tocS_GoogleIdentityAccesscontextmanagerV1IngressPolicy">GoogleIdentityAccesscontextmanagerV1IngressPolicy</h2>
<!-- backwards compatibility -->
<a id="schemagoogleidentityaccesscontextmanagerv1ingresspolicy"></a>
<a id="schema_GoogleIdentityAccesscontextmanagerV1IngressPolicy"></a>
<a id="tocSgoogleidentityaccesscontextmanagerv1ingresspolicy"></a>
<a id="tocsgoogleidentityaccesscontextmanagerv1ingresspolicy"></a>

```json
{
  "ingressFrom": {
    "identities": [
      "string"
    ],
    "identityType": "IDENTITY_TYPE_UNSPECIFIED",
    "sources": [
      {
        "accessLevel": "string",
        "resource": "string"
      }
    ]
  },
  "ingressTo": {
    "operations": [
      {
        "methodSelectors": [
          {
            "method": "string",
            "permission": "string"
          }
        ],
        "serviceName": "string"
      }
    ],
    "resources": [
      "string"
    ]
  }
}
```

Policy for ingress into ServicePerimeter. IngressPolicies match requests based on `ingress_from` and `ingress_to` stanzas. For an ingress policy to match, both the `ingress_from` and `ingress_to` stanzas must be matched. If an IngressPolicy matches a request, the request is allowed through the perimeter boundary from outside the perimeter. For example, access from the internet can be allowed either based on an AccessLevel or, for traffic hosted on Google Cloud, the project of the source network. For access from private networks, using the project of the hosting network is required. Individual ingress policies can be limited by restricting which services and/or actions they match using the `ingress_to` field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ingressFrom|[GoogleIdentityAccesscontextmanagerV1IngressFrom](#schemagoogleidentityaccesscontextmanagerv1ingressfrom)|false|none|Defines the conditions on the source of a request causing this IngressPolicy to apply.|
|ingressTo|[GoogleIdentityAccesscontextmanagerV1IngressTo](#schemagoogleidentityaccesscontextmanagerv1ingressto)|false|none|Defines the conditions on the ApiOperation and request destination that cause this IngressPolicy to apply.|

<h2 id="tocS_GoogleIdentityAccesscontextmanagerV1IngressSource">GoogleIdentityAccesscontextmanagerV1IngressSource</h2>
<!-- backwards compatibility -->
<a id="schemagoogleidentityaccesscontextmanagerv1ingresssource"></a>
<a id="schema_GoogleIdentityAccesscontextmanagerV1IngressSource"></a>
<a id="tocSgoogleidentityaccesscontextmanagerv1ingresssource"></a>
<a id="tocsgoogleidentityaccesscontextmanagerv1ingresssource"></a>

```json
{
  "accessLevel": "string",
  "resource": "string"
}
```

The source that IngressPolicy authorizes access from.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessLevel|string|false|none|An AccessLevel resource name that allow resources within the ServicePerimeters to be accessed from the internet. AccessLevels listed must be in the same policy as this ServicePerimeter. Referencing a nonexistent AccessLevel will cause an error. If no AccessLevel names are listed, resources within the perimeter can only be accessed via Google Cloud calls with request origins within the perimeter. Example: `accessPolicies/MY_POLICY/accessLevels/MY_LEVEL`. If a single `*` is specified for `access_level`, then all IngressSources will be allowed.|
|resource|string|false|none|A Google Cloud resource that is allowed to ingress the perimeter. Requests from these resources will be allowed to access perimeter data. Currently only projects and VPCs are allowed. Project format: `projects/{project_number}` VPC network format: `//compute.googleapis.com/projects/{PROJECT_ID}/global/networks/{NAME}`. The project may be in any Google Cloud organization, not just the organization that the perimeter is defined in. `*` is not allowed, the case of allowing all Google Cloud resources only is not supported.|

<h2 id="tocS_GoogleIdentityAccesscontextmanagerV1IngressTo">GoogleIdentityAccesscontextmanagerV1IngressTo</h2>
<!-- backwards compatibility -->
<a id="schemagoogleidentityaccesscontextmanagerv1ingressto"></a>
<a id="schema_GoogleIdentityAccesscontextmanagerV1IngressTo"></a>
<a id="tocSgoogleidentityaccesscontextmanagerv1ingressto"></a>
<a id="tocsgoogleidentityaccesscontextmanagerv1ingressto"></a>

```json
{
  "operations": [
    {
      "methodSelectors": [
        {
          "method": "string",
          "permission": "string"
        }
      ],
      "serviceName": "string"
    }
  ],
  "resources": [
    "string"
  ]
}
```

Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the target resource of the request. The request must satisfy what is defined in `operations` AND `resources` in order to match.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operations|[[GoogleIdentityAccesscontextmanagerV1ApiOperation](#schemagoogleidentityaccesscontextmanagerv1apioperation)]|false|none|A list of ApiOperations allowed to be performed by the sources specified in corresponding IngressFrom in this ServicePerimeter.|
|resources|[string]|false|none|A list of resources, currently only projects in the form `projects/`, protected by this ServicePerimeter that are allowed to be accessed by sources defined in the corresponding IngressFrom. If a single `*` is specified, then access to all resources inside the perimeter are allowed.|

<h2 id="tocS_GoogleIdentityAccesscontextmanagerV1MethodSelector">GoogleIdentityAccesscontextmanagerV1MethodSelector</h2>
<!-- backwards compatibility -->
<a id="schemagoogleidentityaccesscontextmanagerv1methodselector"></a>
<a id="schema_GoogleIdentityAccesscontextmanagerV1MethodSelector"></a>
<a id="tocSgoogleidentityaccesscontextmanagerv1methodselector"></a>
<a id="tocsgoogleidentityaccesscontextmanagerv1methodselector"></a>

```json
{
  "method": "string",
  "permission": "string"
}
```

An allowed method or permission of a service specified in ApiOperation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|method|string|false|none|Value for `method` should be a valid method name for the corresponding `service_name` in ApiOperation. If `*` used as value for `method`, then ALL methods and permissions are allowed.|
|permission|string|false|none|Value for `permission` should be a valid Cloud IAM permission for the corresponding `service_name` in ApiOperation.|

<h2 id="tocS_GoogleIdentityAccesscontextmanagerV1OsConstraint">GoogleIdentityAccesscontextmanagerV1OsConstraint</h2>
<!-- backwards compatibility -->
<a id="schemagoogleidentityaccesscontextmanagerv1osconstraint"></a>
<a id="schema_GoogleIdentityAccesscontextmanagerV1OsConstraint"></a>
<a id="tocSgoogleidentityaccesscontextmanagerv1osconstraint"></a>
<a id="tocsgoogleidentityaccesscontextmanagerv1osconstraint"></a>

```json
{
  "minimumVersion": "string",
  "osType": "OS_UNSPECIFIED",
  "requireVerifiedChromeOs": true
}
```

A restriction on the OS type and version of devices making requests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|minimumVersion|string|false|none|The minimum allowed OS version. If not set, any version of this OS satisfies the constraint. Format: `"major.minor.patch"`. Examples: `"10.5.301"`, `"9.2.1"`.|
|osType|string|false|none|Required. The allowed OS type.|
|requireVerifiedChromeOs|boolean|false|none|Only allows requests from devices with a verified Chrome OS. Verifications includes requirements that the device is enterprise-managed, conformant to domain policies, and the caller has permission to call the API targeted by the request.|

#### Enumerated Values

|Property|Value|
|---|---|
|osType|OS_UNSPECIFIED|
|osType|DESKTOP_MAC|
|osType|DESKTOP_WINDOWS|
|osType|DESKTOP_LINUX|
|osType|DESKTOP_CHROME_OS|
|osType|ANDROID|
|osType|IOS|

<h2 id="tocS_GoogleIdentityAccesscontextmanagerV1ServicePerimeter">GoogleIdentityAccesscontextmanagerV1ServicePerimeter</h2>
<!-- backwards compatibility -->
<a id="schemagoogleidentityaccesscontextmanagerv1serviceperimeter"></a>
<a id="schema_GoogleIdentityAccesscontextmanagerV1ServicePerimeter"></a>
<a id="tocSgoogleidentityaccesscontextmanagerv1serviceperimeter"></a>
<a id="tocsgoogleidentityaccesscontextmanagerv1serviceperimeter"></a>

```json
{
  "description": "string",
  "name": "string",
  "perimeterType": "PERIMETER_TYPE_REGULAR",
  "spec": {
    "accessLevels": [
      "string"
    ],
    "egressPolicies": [
      {
        "egressFrom": {
          "identities": [
            "string"
          ],
          "identityType": "IDENTITY_TYPE_UNSPECIFIED"
        },
        "egressTo": {
          "externalResources": [
            "string"
          ],
          "operations": [
            {
              "methodSelectors": [
                {
                  "method": "string",
                  "permission": "string"
                }
              ],
              "serviceName": "string"
            }
          ],
          "resources": [
            "string"
          ]
        }
      }
    ],
    "ingressPolicies": [
      {
        "ingressFrom": {
          "identities": [
            "string"
          ],
          "identityType": "IDENTITY_TYPE_UNSPECIFIED",
          "sources": [
            {
              "accessLevel": "string",
              "resource": "string"
            }
          ]
        },
        "ingressTo": {
          "operations": [
            {
              "methodSelectors": [
                {
                  "method": "string",
                  "permission": "string"
                }
              ],
              "serviceName": "string"
            }
          ],
          "resources": [
            "string"
          ]
        }
      }
    ],
    "resources": [
      "string"
    ],
    "restrictedServices": [
      "string"
    ],
    "vpcAccessibleServices": {
      "allowedServices": [
        "string"
      ],
      "enableRestriction": true
    }
  },
  "status": {
    "accessLevels": [
      "string"
    ],
    "egressPolicies": [
      {
        "egressFrom": {
          "identities": [
            "string"
          ],
          "identityType": "IDENTITY_TYPE_UNSPECIFIED"
        },
        "egressTo": {
          "externalResources": [
            "string"
          ],
          "operations": [
            {
              "methodSelectors": [
                {
                  "method": "string",
                  "permission": "string"
                }
              ],
              "serviceName": "string"
            }
          ],
          "resources": [
            "string"
          ]
        }
      }
    ],
    "ingressPolicies": [
      {
        "ingressFrom": {
          "identities": [
            "string"
          ],
          "identityType": "IDENTITY_TYPE_UNSPECIFIED",
          "sources": [
            {
              "accessLevel": "string",
              "resource": "string"
            }
          ]
        },
        "ingressTo": {
          "operations": [
            {
              "methodSelectors": [
                {
                  "method": "string",
                  "permission": "string"
                }
              ],
              "serviceName": "string"
            }
          ],
          "resources": [
            "string"
          ]
        }
      }
    ],
    "resources": [
      "string"
    ],
    "restrictedServices": [
      "string"
    ],
    "vpcAccessibleServices": {
      "allowedServices": [
        "string"
      ],
      "enableRestriction": true
    }
  },
  "title": "string",
  "useExplicitDryRunSpec": true
}
```

`ServicePerimeter` describes a set of Google Cloud resources which can freely import and export data amongst themselves, but not export outside of the `ServicePerimeter`. If a request with a source within this `ServicePerimeter` has a target outside of the `ServicePerimeter`, the request will be blocked. Otherwise the request is allowed. There are two types of Service Perimeter - Regular and Bridge. Regular Service Perimeters cannot overlap, a single Google Cloud project or VPC network can only belong to a single regular Service Perimeter. Service Perimeter Bridges can contain only Google Cloud projects as members, a single Google Cloud project may belong to multiple Service Perimeter Bridges.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Description of the `ServicePerimeter` and its use. Does not affect behavior.|
|name|string|false|none|Resource name for the `ServicePerimeter`. Format: `accessPolicies/{access_policy}/servicePerimeters/{service_perimeter}`. The `service_perimeter` component must begin with a letter, followed by alphanumeric characters or `_`. After you create a `ServicePerimeter`, you cannot change its `name`.|
|perimeterType|string|false|none|Perimeter type indicator. A single project or VPC network is allowed to be a member of single regular perimeter, but multiple service perimeter bridges. A project cannot be a included in a perimeter bridge without being included in regular perimeter. For perimeter bridges, the restricted service list as well as access level lists must be empty.|
|spec|[GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig](#schemagoogleidentityaccesscontextmanagerv1serviceperimeterconfig)|false|none|Proposed (or dry run) ServicePerimeter configuration. This configuration allows to specify and test ServicePerimeter configuration without enforcing actual access restrictions. Only allowed to be set when the "use_explicit_dry_run_spec" flag is set.|
|status|[GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig](#schemagoogleidentityaccesscontextmanagerv1serviceperimeterconfig)|false|none|Current ServicePerimeter configuration. Specifies sets of resources, restricted services and access levels that determine perimeter content and boundaries.|
|title|string|false|none|Human readable title. Must be unique within the Policy.|
|useExplicitDryRunSpec|boolean|false|none|Use explicit dry run spec flag. Ordinarily, a dry-run spec implicitly exists for all Service Perimeters, and that spec is identical to the status for those Service Perimeters. When this flag is set, it inhibits the generation of the implicit spec, thereby allowing the user to explicitly provide a configuration ("spec") to use in a dry-run version of the Service Perimeter. This allows the user to test changes to the enforced config ("status") without actually enforcing them. This testing is done through analyzing the differences between currently enforced and suggested restrictions. use_explicit_dry_run_spec must bet set to True if any of the fields in the spec are set to non-default values.|

#### Enumerated Values

|Property|Value|
|---|---|
|perimeterType|PERIMETER_TYPE_REGULAR|
|perimeterType|PERIMETER_TYPE_BRIDGE|

<h2 id="tocS_GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig">GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleidentityaccesscontextmanagerv1serviceperimeterconfig"></a>
<a id="schema_GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig"></a>
<a id="tocSgoogleidentityaccesscontextmanagerv1serviceperimeterconfig"></a>
<a id="tocsgoogleidentityaccesscontextmanagerv1serviceperimeterconfig"></a>

```json
{
  "accessLevels": [
    "string"
  ],
  "egressPolicies": [
    {
      "egressFrom": {
        "identities": [
          "string"
        ],
        "identityType": "IDENTITY_TYPE_UNSPECIFIED"
      },
      "egressTo": {
        "externalResources": [
          "string"
        ],
        "operations": [
          {
            "methodSelectors": [
              {
                "method": "string",
                "permission": "string"
              }
            ],
            "serviceName": "string"
          }
        ],
        "resources": [
          "string"
        ]
      }
    }
  ],
  "ingressPolicies": [
    {
      "ingressFrom": {
        "identities": [
          "string"
        ],
        "identityType": "IDENTITY_TYPE_UNSPECIFIED",
        "sources": [
          {
            "accessLevel": "string",
            "resource": "string"
          }
        ]
      },
      "ingressTo": {
        "operations": [
          {
            "methodSelectors": [
              {
                "method": "string",
                "permission": "string"
              }
            ],
            "serviceName": "string"
          }
        ],
        "resources": [
          "string"
        ]
      }
    }
  ],
  "resources": [
    "string"
  ],
  "restrictedServices": [
    "string"
  ],
  "vpcAccessibleServices": {
    "allowedServices": [
      "string"
    ],
    "enableRestriction": true
  }
}
```

`ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessLevels|[string]|false|none|A list of `AccessLevel` resource names that allow resources within the `ServicePerimeter` to be accessed from the internet. `AccessLevels` listed must be in the same policy as this `ServicePerimeter`. Referencing a nonexistent `AccessLevel` is a syntax error. If no `AccessLevel` names are listed, resources within the perimeter can only be accessed via Google Cloud calls with request origins within the perimeter. Example: `"accessPolicies/MY_POLICY/accessLevels/MY_LEVEL"`. For Service Perimeter Bridge, must be empty.|
|egressPolicies|[[GoogleIdentityAccesscontextmanagerV1EgressPolicy](#schemagoogleidentityaccesscontextmanagerv1egresspolicy)]|false|none|List of EgressPolicies to apply to the perimeter. A perimeter may have multiple EgressPolicies, each of which is evaluated separately. Access is granted if any EgressPolicy grants it. Must be empty for a perimeter bridge.|
|ingressPolicies|[[GoogleIdentityAccesscontextmanagerV1IngressPolicy](#schemagoogleidentityaccesscontextmanagerv1ingresspolicy)]|false|none|List of IngressPolicies to apply to the perimeter. A perimeter may have multiple IngressPolicies, each of which is evaluated separately. Access is granted if any Ingress Policy grants it. Must be empty for a perimeter bridge.|
|resources|[string]|false|none|A list of Google Cloud resources that are inside of the service perimeter. Currently only projects and VPCs are allowed. Project format: `projects/{project_number}` VPC network format: `//compute.googleapis.com/projects/{PROJECT_ID}/global/networks/{NAME}`.|
|restrictedServices|[string]|false|none|Google Cloud services that are subject to the Service Perimeter restrictions. For example, if `storage.googleapis.com` is specified, access to the storage buckets inside the perimeter must meet the perimeter's access restrictions.|
|vpcAccessibleServices|[GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices](#schemagoogleidentityaccesscontextmanagerv1vpcaccessibleservices)|false|none|Configuration for APIs allowed within Perimeter.|

<h2 id="tocS_GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices">GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices</h2>
<!-- backwards compatibility -->
<a id="schemagoogleidentityaccesscontextmanagerv1vpcaccessibleservices"></a>
<a id="schema_GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices"></a>
<a id="tocSgoogleidentityaccesscontextmanagerv1vpcaccessibleservices"></a>
<a id="tocsgoogleidentityaccesscontextmanagerv1vpcaccessibleservices"></a>

```json
{
  "allowedServices": [
    "string"
  ],
  "enableRestriction": true
}
```

Specifies how APIs are allowed to communicate within the Service Perimeter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedServices|[string]|false|none|The list of APIs usable within the Service Perimeter. Must be empty unless 'enable_restriction' is True. You can specify a list of individual services, as well as include the 'RESTRICTED-SERVICES' value, which automatically includes all of the services protected by the perimeter.|
|enableRestriction|boolean|false|none|Whether to restrict API calls within the Service Perimeter to the list of APIs specified in 'allowed_services'.|

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
