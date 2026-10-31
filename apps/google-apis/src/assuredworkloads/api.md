<h1 id="assured-workloads-api">Assured Workloads API v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://assuredworkloads.googleapis.com/">https://assuredworkloads.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/learnmoreurl">External documentation</a>

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

<h1 id="assured-workloads-api-organizations">organizations</h1>

## assuredworkloads.organizations.locations.workloads.violations.get

<a id="opIdassuredworkloads.organizations.locations.workloads.violations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}`

Retrieves Assured Workload Violation based on ID.

<h3 id="assuredworkloadsorganizationslocationsworkloadsviolationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the Violation to fetch (ie. Violation.name). Format: organizations/{organization}/locations/{location}/workloads/{workload}/violations/{violation}|
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
  "acknowledged": true,
  "acknowledgementTime": "string",
  "auditLogLink": "string",
  "beginTime": "string",
  "category": "string",
  "description": "string",
  "exceptionAuditLogLink": "string",
  "exceptionContexts": [
    {
      "acknowledgementTime": "string",
      "comment": "string",
      "principalEmail": "string"
    }
  ],
  "name": "string",
  "nonCompliantOrgPolicy": "string",
  "orgPolicyConstraint": "string",
  "remediation": {
    "compliantValues": [
      "string"
    ],
    "instructions": {
      "consoleInstructions": {
        "additionalLinks": [
          "string"
        ],
        "consoleUris": [
          "string"
        ],
        "steps": [
          "string"
        ]
      },
      "gcloudInstructions": {
        "additionalLinks": [
          "string"
        ],
        "gcloudCommands": [
          "string"
        ],
        "steps": [
          "string"
        ]
      }
    },
    "remediationType": "REMEDIATION_TYPE_UNSPECIFIED"
  },
  "resolveTime": "string",
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

<h3 id="assuredworkloadsorganizationslocationsworkloadsviolationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudAssuredworkloadsV1beta1Violation](#schemagooglecloudassuredworkloadsv1beta1violation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## assuredworkloads.organizations.locations.workloads.delete

<a id="opIdassuredworkloads.organizations.locations.workloads.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/{name}`

Deletes the workload. Make sure that workload's direct children are already in a deleted state, otherwise the request will fail with a FAILED_PRECONDITION error. In addition to assuredworkloads.workload.delete permission, the user should also have orgpolicy.policy.set permission on the deleted folder to remove Assured Workloads OrgPolicies.

<h3 id="assuredworkloadsorganizationslocationsworkloadsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The `name` field is used to identify the workload. Format: organizations/{org_id}/locations/{location_id}/workloads/{workload_id}|
|etag|query|string|false|Optional. The etag of the workload. If this is provided, it must match the server's etag.|
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

<h3 id="assuredworkloadsorganizationslocationsworkloadsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## assuredworkloads.organizations.locations.workloads.patch

<a id="opIdassuredworkloads.organizations.locations.workloads.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "billingAccount": "string",
    "cjisSettings": {
      "kmsSettings": {
        "nextRotationTime": "string",
        "rotationPeriod": "string"
      }
    },
    "complianceRegime": "COMPLIANCE_REGIME_UNSPECIFIED",
    "displayName": "string",
    "ekmProvisioningResponse": {
      "ekmProvisioningErrorDomain": "EKM_PROVISIONING_ERROR_DOMAIN_UNSPECIFIED",
      "ekmProvisioningErrorMapping": "EKM_PROVISIONING_ERROR_MAPPING_UNSPECIFIED",
      "ekmProvisioningState": "EKM_PROVISIONING_STATE_UNSPECIFIED"
    },
    "enableSovereignControls": true,
    "etag": "string",
    "fedrampHighSettings": {
      "kmsSettings": {
        "nextRotationTime": "string",
        "rotationPeriod": "string"
      }
    },
    "fedrampModerateSettings": {
      "kmsSettings": {
        "nextRotationTime": "string",
        "rotationPeriod": "string"
      }
    },
    "il4Settings": {
      "kmsSettings": {
        "nextRotationTime": "string",
        "rotationPeriod": "string"
      }
    },
    "kmsSettings": {
      "nextRotationTime": "string",
      "rotationPeriod": "string"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "partner": "PARTNER_UNSPECIFIED",
    "provisionedResourcesParent": "string",
    "resourceSettings": [
      {
        "displayName": "string",
        "resourceId": "string",
        "resourceType": "RESOURCE_TYPE_UNSPECIFIED"
      }
    ],
    "violationNotificationsEnabled": true
  }'
```

`PATCH /v1beta1/{name}`

Updates an existing workload. Currently allows updating of workload display_name and labels. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.

> Body parameter

```json
{
  "billingAccount": "string",
  "cjisSettings": {
    "kmsSettings": {
      "nextRotationTime": "string",
      "rotationPeriod": "string"
    }
  },
  "complianceRegime": "COMPLIANCE_REGIME_UNSPECIFIED",
  "displayName": "string",
  "ekmProvisioningResponse": {
    "ekmProvisioningErrorDomain": "EKM_PROVISIONING_ERROR_DOMAIN_UNSPECIFIED",
    "ekmProvisioningErrorMapping": "EKM_PROVISIONING_ERROR_MAPPING_UNSPECIFIED",
    "ekmProvisioningState": "EKM_PROVISIONING_STATE_UNSPECIFIED"
  },
  "enableSovereignControls": true,
  "etag": "string",
  "fedrampHighSettings": {
    "kmsSettings": {
      "nextRotationTime": "string",
      "rotationPeriod": "string"
    }
  },
  "fedrampModerateSettings": {
    "kmsSettings": {
      "nextRotationTime": "string",
      "rotationPeriod": "string"
    }
  },
  "il4Settings": {
    "kmsSettings": {
      "nextRotationTime": "string",
      "rotationPeriod": "string"
    }
  },
  "kmsSettings": {
    "nextRotationTime": "string",
    "rotationPeriod": "string"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "partner": "PARTNER_UNSPECIFIED",
  "provisionedResourcesParent": "string",
  "resourceSettings": [
    {
      "displayName": "string",
      "resourceId": "string",
      "resourceType": "RESOURCE_TYPE_UNSPECIFIED"
    }
  ],
  "violationNotificationsEnabled": true
}
```

<h3 id="assuredworkloadsorganizationslocationsworkloadspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Optional. The resource name of the workload. Format: organizations/{organization}/locations/{location}/workloads/{workload} Read-only.|
|updateMask|query|string|false|Required. The list of fields to be updated.|
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
|body|body|[GoogleCloudAssuredworkloadsV1beta1Workload](#schemagooglecloudassuredworkloadsv1beta1workload)|false|none|
|» billingAccount|body|string|false|Optional. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF`.|
|» cjisSettings|body|[GoogleCloudAssuredworkloadsV1beta1WorkloadCJISSettings](#schemagooglecloudassuredworkloadsv1beta1workloadcjissettings)|false|Input only. Immutable. Settings specific to resources needed for CJIS.|
|» complianceRegime|body|string|false|Required. Immutable. Compliance Regime associated with this workload.|
|» displayName|body|string|false|Required. The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload|
|» ekmProvisioningResponse|body|[GoogleCloudAssuredworkloadsV1beta1WorkloadEkmProvisioningResponse](#schemagooglecloudassuredworkloadsv1beta1workloadekmprovisioningresponse)|false|Optional. Represents the Ekm Provisioning State of the given workload.|
|» enableSovereignControls|body|boolean|false|Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers.|
|» etag|body|string|false|Optional. ETag of the workload, it is calculated on the basis of the Workload contents. It will be used in Update & Delete operations.|
|» fedrampHighSettings|body|[GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings](#schemagooglecloudassuredworkloadsv1beta1workloadfedramphighsettings)|false|Input only. Immutable. Settings specific to resources needed for FedRAMP High.|
|» fedrampModerateSettings|body|[GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings](#schemagooglecloudassuredworkloadsv1beta1workloadfedrampmoderatesettings)|false|Input only. Immutable. Settings specific to resources needed for FedRAMP Moderate.|
|» il4Settings|body|[GoogleCloudAssuredworkloadsV1beta1WorkloadIL4Settings](#schemagooglecloudassuredworkloadsv1beta1workloadil4settings)|false|Input only. Immutable. Settings specific to resources needed for IL4.|
|» kmsSettings|body|[GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings](#schemagooglecloudassuredworkloadsv1beta1workloadkmssettings)|false|Input only. Settings used to create a CMEK crypto key. When set, a project with a KMS CMEK key is provisioned. This field is deprecated as of Feb 28, 2022. In order to create a Keyring, callers should specify, ENCRYPTION_KEYS_PROJECT or KEYRING in ResourceSettings.resource_type field.|
|» labels|body|object|false|Optional. Labels applied to the workload.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Optional. The resource name of the workload. Format: organizations/{organization}/locations/{location}/workloads/{workload} Read-only.|
|» partner|body|string|false|Optional. Partner regime associated with this workload.|
|» provisionedResourcesParent|body|string|false|Input only. The parent resource for the resources managed by this Assured Workload. May be either empty or a folder resource which is a child of the Workload parent. If not specified all resources are created under the parent organization. Format: folders/{folder_id}|
|» resourceSettings|body|[[GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings](#schemagooglecloudassuredworkloadsv1beta1workloadresourcesettings)]|false|Input only. Resource properties that are used to customize workload resources. These properties (such as custom project id) will be used to create workload resources if possible. This field is optional.|
|» violationNotificationsEnabled|body|boolean|false|Optional. Indicates whether the e-mail notification for a violation is enabled for a workload. This value will be by default True, and if not present will be considered as true. This should only be updated via updateWorkload call. Any Changes to this field during the createWorkload call will not be honored. This will always be true while creating the workload.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» complianceRegime|COMPLIANCE_REGIME_UNSPECIFIED|
|» complianceRegime|IL4|
|» complianceRegime|CJIS|
|» complianceRegime|FEDRAMP_HIGH|
|» complianceRegime|FEDRAMP_MODERATE|
|» complianceRegime|US_REGIONAL_ACCESS|
|» complianceRegime|HIPAA|
|» complianceRegime|HITRUST|
|» complianceRegime|EU_REGIONS_AND_SUPPORT|
|» complianceRegime|CA_REGIONS_AND_SUPPORT|
|» complianceRegime|ITAR|
|» complianceRegime|AU_REGIONS_AND_US_SUPPORT|
|» complianceRegime|ASSURED_WORKLOADS_FOR_PARTNERS|
|» complianceRegime|ISR_REGIONS|
|» complianceRegime|ISR_REGIONS_AND_SUPPORT|
|» complianceRegime|CA_PROTECTED_B|
|» partner|PARTNER_UNSPECIFIED|
|» partner|LOCAL_CONTROLS_BY_S3NS|
|» partner|SOVEREIGN_CONTROLS_BY_T_SYSTEMS|
|» partner|SOVEREIGN_CONTROLS_BY_SIA_MINSAIT|
|» partner|SOVEREIGN_CONTROLS_BY_PSN|

> Example responses

> 200 Response

```json
{
  "billingAccount": "string",
  "cjisSettings": {
    "kmsSettings": {
      "nextRotationTime": "string",
      "rotationPeriod": "string"
    }
  },
  "complianceRegime": "COMPLIANCE_REGIME_UNSPECIFIED",
  "complianceStatus": {
    "acknowledgedViolationCount": 0,
    "activeViolationCount": 0
  },
  "compliantButDisallowedServices": [
    "string"
  ],
  "createTime": "string",
  "displayName": "string",
  "ekmProvisioningResponse": {
    "ekmProvisioningErrorDomain": "EKM_PROVISIONING_ERROR_DOMAIN_UNSPECIFIED",
    "ekmProvisioningErrorMapping": "EKM_PROVISIONING_ERROR_MAPPING_UNSPECIFIED",
    "ekmProvisioningState": "EKM_PROVISIONING_STATE_UNSPECIFIED"
  },
  "enableSovereignControls": true,
  "etag": "string",
  "fedrampHighSettings": {
    "kmsSettings": {
      "nextRotationTime": "string",
      "rotationPeriod": "string"
    }
  },
  "fedrampModerateSettings": {
    "kmsSettings": {
      "nextRotationTime": "string",
      "rotationPeriod": "string"
    }
  },
  "il4Settings": {
    "kmsSettings": {
      "nextRotationTime": "string",
      "rotationPeriod": "string"
    }
  },
  "kajEnrollmentState": "KAJ_ENROLLMENT_STATE_UNSPECIFIED",
  "kmsSettings": {
    "nextRotationTime": "string",
    "rotationPeriod": "string"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "partner": "PARTNER_UNSPECIFIED",
  "provisionedResourcesParent": "string",
  "resourceSettings": [
    {
      "displayName": "string",
      "resourceId": "string",
      "resourceType": "RESOURCE_TYPE_UNSPECIFIED"
    }
  ],
  "resources": [
    {
      "resourceId": "string",
      "resourceType": "RESOURCE_TYPE_UNSPECIFIED"
    }
  ],
  "saaEnrollmentResponse": {
    "setupErrors": [
      "SETUP_ERROR_UNSPECIFIED"
    ],
    "setupStatus": "SETUP_STATE_UNSPECIFIED"
  },
  "violationNotificationsEnabled": true
}
```

<h3 id="assuredworkloadsorganizationslocationsworkloadspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudAssuredworkloadsV1beta1Workload](#schemagooglecloudassuredworkloadsv1beta1workload)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## assuredworkloads.organizations.locations.operations.list

<a id="opIdassuredworkloads.organizations.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="assuredworkloadsorganizationslocationsoperationslist-parameters">Parameters</h3>

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

<h3 id="assuredworkloadsorganizationslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningListOperationsResponse](#schemagooglelongrunninglistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## assuredworkloads.organizations.locations.workloads.violations.acknowledge

<a id="opIdassuredworkloads.organizations.locations.workloads.violations.acknowledge"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:acknowledge \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "comment": "string",
    "nonCompliantOrgPolicy": "string"
  }'
```

`POST /v1beta1/{name}:acknowledge`

Acknowledges an existing violation. By acknowledging a violation, users acknowledge the existence of a compliance violation in their workload and decide to ignore it due to a valid business justification. Acknowledgement is a permanent operation and it cannot be reverted.

> Body parameter

```json
{
  "comment": "string",
  "nonCompliantOrgPolicy": "string"
}
```

<h3 id="assuredworkloadsorganizationslocationsworkloadsviolationsacknowledge-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the Violation to acknowledge. Format: organizations/{organization}/locations/{location}/workloads/{workload}/violations/{violation}|
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
|body|body|[GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationRequest](#schemagooglecloudassuredworkloadsv1beta1acknowledgeviolationrequest)|false|none|
|» comment|body|string|false|Required. Business justification explaining the need for violation acknowledgement|
|» nonCompliantOrgPolicy|body|string|false|Optional. This field is deprecated and will be removed in future version of the API. Name of the OrgPolicy which was modified with non-compliant change and resulted in this violation. Format: projects/{project_number}/policies/{constraint_name} folders/{folder_id}/policies/{constraint_name} organizations/{organization_id}/policies/{constraint_name}|

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

<h3 id="assuredworkloadsorganizationslocationsworkloadsviolationsacknowledge-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationResponse](#schemagooglecloudassuredworkloadsv1beta1acknowledgeviolationresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## assuredworkloads.organizations.locations.workloads.restrictAllowedResources

<a id="opIdassuredworkloads.organizations.locations.workloads.restrictAllowedResources"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:restrictAllowedResources \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "restrictionType": "RESTRICTION_TYPE_UNSPECIFIED"
  }'
```

`POST /v1beta1/{name}:restrictAllowedResources`

Restrict the list of resources allowed in the Workload environment. The current list of allowed products can be found at https://cloud.google.com/assured-workloads/docs/supported-products In addition to assuredworkloads.workload.update permission, the user should also have orgpolicy.policy.set permission on the folder resource to use this functionality.

> Body parameter

```json
{
  "restrictionType": "RESTRICTION_TYPE_UNSPECIFIED"
}
```

<h3 id="assuredworkloadsorganizationslocationsworkloadsrestrictallowedresources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the Workload. This is the workloads's relative path in the API, formatted as "organizations/{organization_id}/locations/{location_id}/workloads/{workload_id}". For example, "organizations/123/locations/us-east1/workloads/assured-workload-1".|
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
|body|body|[GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequest](#schemagooglecloudassuredworkloadsv1beta1restrictallowedresourcesrequest)|false|none|
|» restrictionType|body|string|false|Required. The type of restriction for using gcp products in the Workload environment.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» restrictionType|RESTRICTION_TYPE_UNSPECIFIED|
|» restrictionType|ALLOW_ALL_GCP_RESOURCES|
|» restrictionType|ALLOW_COMPLIANT_RESOURCES|
|» restrictionType|APPEND_COMPLIANT_RESOURCES|

> Example responses

> 200 Response

```json
{}
```

<h3 id="assuredworkloadsorganizationslocationsworkloadsrestrictallowedresources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesResponse](#schemagooglecloudassuredworkloadsv1beta1restrictallowedresourcesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## assuredworkloads.organizations.locations.workloads.violations.list

<a id="opIdassuredworkloads.organizations.locations.workloads.violations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/violations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/violations`

Lists the Violations in the AssuredWorkload Environment. Callers may also choose to read across multiple Workloads as per [AIP-159](https://google.aip.dev/159) by using '-' (the hyphen or dash character) as a wildcard character instead of workload-id in the parent. Format `organizations/{org_id}/locations/{location}/workloads/-`

<h3 id="assuredworkloadsorganizationslocationsworkloadsviolationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The Workload name. Format `organizations/{org_id}/locations/{location}/workloads/{workload}`.|
|filter|query|string|false|Optional. A custom filter for filtering by the Violations properties.|
|interval.endTime|query|string|false|The end of the time window.|
|interval.startTime|query|string|false|The start of the time window.|
|pageSize|query|integer|false|Optional. Page size.|
|pageToken|query|string|false|Optional. Page token returned from previous request.|
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
  "violations": [
    {
      "acknowledged": true,
      "acknowledgementTime": "string",
      "auditLogLink": "string",
      "beginTime": "string",
      "category": "string",
      "description": "string",
      "exceptionAuditLogLink": "string",
      "exceptionContexts": [
        {
          "acknowledgementTime": "string",
          "comment": "string",
          "principalEmail": "string"
        }
      ],
      "name": "string",
      "nonCompliantOrgPolicy": "string",
      "orgPolicyConstraint": "string",
      "remediation": {
        "compliantValues": [
          "string"
        ],
        "instructions": {
          "consoleInstructions": {
            "additionalLinks": [
              "string"
            ],
            "consoleUris": [
              "string"
            ],
            "steps": [
              "string"
            ]
          },
          "gcloudInstructions": {
            "additionalLinks": [
              "string"
            ],
            "gcloudCommands": [
              "string"
            ],
            "steps": [
              "string"
            ]
          }
        },
        "remediationType": "REMEDIATION_TYPE_UNSPECIFIED"
      },
      "resolveTime": "string",
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string"
    }
  ]
}
```

<h3 id="assuredworkloadsorganizationslocationsworkloadsviolationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse](#schemagooglecloudassuredworkloadsv1beta1listviolationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## assuredworkloads.organizations.locations.workloads.list

<a id="opIdassuredworkloads.organizations.locations.workloads.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/workloads \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/workloads`

Lists Assured Workloads under a CRM Node.

<h3 id="assuredworkloadsorganizationslocationsworkloadslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent Resource to list workloads from. Must be of the form `organizations/{org_id}/locations/{location}`.|
|filter|query|string|false|A custom filter for filtering by properties of a workload. At this time, only filtering by labels is supported.|
|pageSize|query|integer|false|Page size.|
|pageToken|query|string|false|Page token returned from previous request. Page token contains context from previous request. Page token needs to be passed in the second and following requests.|
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
  "workloads": [
    {
      "billingAccount": "string",
      "cjisSettings": {
        "kmsSettings": {
          "nextRotationTime": "string",
          "rotationPeriod": "string"
        }
      },
      "complianceRegime": "COMPLIANCE_REGIME_UNSPECIFIED",
      "complianceStatus": {
        "acknowledgedViolationCount": 0,
        "activeViolationCount": 0
      },
      "compliantButDisallowedServices": [
        "string"
      ],
      "createTime": "string",
      "displayName": "string",
      "ekmProvisioningResponse": {
        "ekmProvisioningErrorDomain": "EKM_PROVISIONING_ERROR_DOMAIN_UNSPECIFIED",
        "ekmProvisioningErrorMapping": "EKM_PROVISIONING_ERROR_MAPPING_UNSPECIFIED",
        "ekmProvisioningState": "EKM_PROVISIONING_STATE_UNSPECIFIED"
      },
      "enableSovereignControls": true,
      "etag": "string",
      "fedrampHighSettings": {
        "kmsSettings": {
          "nextRotationTime": "string",
          "rotationPeriod": "string"
        }
      },
      "fedrampModerateSettings": {
        "kmsSettings": {
          "nextRotationTime": "string",
          "rotationPeriod": "string"
        }
      },
      "il4Settings": {
        "kmsSettings": {
          "nextRotationTime": "string",
          "rotationPeriod": "string"
        }
      },
      "kajEnrollmentState": "KAJ_ENROLLMENT_STATE_UNSPECIFIED",
      "kmsSettings": {
        "nextRotationTime": "string",
        "rotationPeriod": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "partner": "PARTNER_UNSPECIFIED",
      "provisionedResourcesParent": "string",
      "resourceSettings": [
        {
          "displayName": "string",
          "resourceId": "string",
          "resourceType": "RESOURCE_TYPE_UNSPECIFIED"
        }
      ],
      "resources": [
        {
          "resourceId": "string",
          "resourceType": "RESOURCE_TYPE_UNSPECIFIED"
        }
      ],
      "saaEnrollmentResponse": {
        "setupErrors": [
          "SETUP_ERROR_UNSPECIFIED"
        ],
        "setupStatus": "SETUP_STATE_UNSPECIFIED"
      },
      "violationNotificationsEnabled": true
    }
  ]
}
```

<h3 id="assuredworkloadsorganizationslocationsworkloadslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse](#schemagooglecloudassuredworkloadsv1beta1listworkloadsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## assuredworkloads.organizations.locations.workloads.create

<a id="opIdassuredworkloads.organizations.locations.workloads.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/workloads \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "billingAccount": "string",
    "cjisSettings": {
      "kmsSettings": {
        "nextRotationTime": "string",
        "rotationPeriod": "string"
      }
    },
    "complianceRegime": "COMPLIANCE_REGIME_UNSPECIFIED",
    "displayName": "string",
    "ekmProvisioningResponse": {
      "ekmProvisioningErrorDomain": "EKM_PROVISIONING_ERROR_DOMAIN_UNSPECIFIED",
      "ekmProvisioningErrorMapping": "EKM_PROVISIONING_ERROR_MAPPING_UNSPECIFIED",
      "ekmProvisioningState": "EKM_PROVISIONING_STATE_UNSPECIFIED"
    },
    "enableSovereignControls": true,
    "etag": "string",
    "fedrampHighSettings": {
      "kmsSettings": {
        "nextRotationTime": "string",
        "rotationPeriod": "string"
      }
    },
    "fedrampModerateSettings": {
      "kmsSettings": {
        "nextRotationTime": "string",
        "rotationPeriod": "string"
      }
    },
    "il4Settings": {
      "kmsSettings": {
        "nextRotationTime": "string",
        "rotationPeriod": "string"
      }
    },
    "kmsSettings": {
      "nextRotationTime": "string",
      "rotationPeriod": "string"
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "partner": "PARTNER_UNSPECIFIED",
    "provisionedResourcesParent": "string",
    "resourceSettings": [
      {
        "displayName": "string",
        "resourceId": "string",
        "resourceType": "RESOURCE_TYPE_UNSPECIFIED"
      }
    ],
    "violationNotificationsEnabled": true
  }'
```

`POST /v1beta1/{parent}/workloads`

Creates Assured Workload.

> Body parameter

```json
{
  "billingAccount": "string",
  "cjisSettings": {
    "kmsSettings": {
      "nextRotationTime": "string",
      "rotationPeriod": "string"
    }
  },
  "complianceRegime": "COMPLIANCE_REGIME_UNSPECIFIED",
  "displayName": "string",
  "ekmProvisioningResponse": {
    "ekmProvisioningErrorDomain": "EKM_PROVISIONING_ERROR_DOMAIN_UNSPECIFIED",
    "ekmProvisioningErrorMapping": "EKM_PROVISIONING_ERROR_MAPPING_UNSPECIFIED",
    "ekmProvisioningState": "EKM_PROVISIONING_STATE_UNSPECIFIED"
  },
  "enableSovereignControls": true,
  "etag": "string",
  "fedrampHighSettings": {
    "kmsSettings": {
      "nextRotationTime": "string",
      "rotationPeriod": "string"
    }
  },
  "fedrampModerateSettings": {
    "kmsSettings": {
      "nextRotationTime": "string",
      "rotationPeriod": "string"
    }
  },
  "il4Settings": {
    "kmsSettings": {
      "nextRotationTime": "string",
      "rotationPeriod": "string"
    }
  },
  "kmsSettings": {
    "nextRotationTime": "string",
    "rotationPeriod": "string"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "partner": "PARTNER_UNSPECIFIED",
  "provisionedResourcesParent": "string",
  "resourceSettings": [
    {
      "displayName": "string",
      "resourceId": "string",
      "resourceType": "RESOURCE_TYPE_UNSPECIFIED"
    }
  ],
  "violationNotificationsEnabled": true
}
```

<h3 id="assuredworkloadsorganizationslocationsworkloadscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the new Workload's parent. Must be of the form `organizations/{org_id}/locations/{location_id}`.|
|externalId|query|string|false|Optional. A identifier associated with the workload and underlying projects which allows for the break down of billing costs for a workload. The value provided for the identifier will add a label to the workload and contained projects with the identifier as the value.|
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
|body|body|[GoogleCloudAssuredworkloadsV1beta1Workload](#schemagooglecloudassuredworkloadsv1beta1workload)|false|none|
|» billingAccount|body|string|false|Optional. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF`.|
|» cjisSettings|body|[GoogleCloudAssuredworkloadsV1beta1WorkloadCJISSettings](#schemagooglecloudassuredworkloadsv1beta1workloadcjissettings)|false|Input only. Immutable. Settings specific to resources needed for CJIS.|
|» complianceRegime|body|string|false|Required. Immutable. Compliance Regime associated with this workload.|
|» displayName|body|string|false|Required. The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload|
|» ekmProvisioningResponse|body|[GoogleCloudAssuredworkloadsV1beta1WorkloadEkmProvisioningResponse](#schemagooglecloudassuredworkloadsv1beta1workloadekmprovisioningresponse)|false|Optional. Represents the Ekm Provisioning State of the given workload.|
|» enableSovereignControls|body|boolean|false|Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers.|
|» etag|body|string|false|Optional. ETag of the workload, it is calculated on the basis of the Workload contents. It will be used in Update & Delete operations.|
|» fedrampHighSettings|body|[GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings](#schemagooglecloudassuredworkloadsv1beta1workloadfedramphighsettings)|false|Input only. Immutable. Settings specific to resources needed for FedRAMP High.|
|» fedrampModerateSettings|body|[GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings](#schemagooglecloudassuredworkloadsv1beta1workloadfedrampmoderatesettings)|false|Input only. Immutable. Settings specific to resources needed for FedRAMP Moderate.|
|» il4Settings|body|[GoogleCloudAssuredworkloadsV1beta1WorkloadIL4Settings](#schemagooglecloudassuredworkloadsv1beta1workloadil4settings)|false|Input only. Immutable. Settings specific to resources needed for IL4.|
|» kmsSettings|body|[GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings](#schemagooglecloudassuredworkloadsv1beta1workloadkmssettings)|false|Input only. Settings used to create a CMEK crypto key. When set, a project with a KMS CMEK key is provisioned. This field is deprecated as of Feb 28, 2022. In order to create a Keyring, callers should specify, ENCRYPTION_KEYS_PROJECT or KEYRING in ResourceSettings.resource_type field.|
|» labels|body|object|false|Optional. Labels applied to the workload.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Optional. The resource name of the workload. Format: organizations/{organization}/locations/{location}/workloads/{workload} Read-only.|
|» partner|body|string|false|Optional. Partner regime associated with this workload.|
|» provisionedResourcesParent|body|string|false|Input only. The parent resource for the resources managed by this Assured Workload. May be either empty or a folder resource which is a child of the Workload parent. If not specified all resources are created under the parent organization. Format: folders/{folder_id}|
|» resourceSettings|body|[[GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings](#schemagooglecloudassuredworkloadsv1beta1workloadresourcesettings)]|false|Input only. Resource properties that are used to customize workload resources. These properties (such as custom project id) will be used to create workload resources if possible. This field is optional.|
|» violationNotificationsEnabled|body|boolean|false|Optional. Indicates whether the e-mail notification for a violation is enabled for a workload. This value will be by default True, and if not present will be considered as true. This should only be updated via updateWorkload call. Any Changes to this field during the createWorkload call will not be honored. This will always be true while creating the workload.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» complianceRegime|COMPLIANCE_REGIME_UNSPECIFIED|
|» complianceRegime|IL4|
|» complianceRegime|CJIS|
|» complianceRegime|FEDRAMP_HIGH|
|» complianceRegime|FEDRAMP_MODERATE|
|» complianceRegime|US_REGIONAL_ACCESS|
|» complianceRegime|HIPAA|
|» complianceRegime|HITRUST|
|» complianceRegime|EU_REGIONS_AND_SUPPORT|
|» complianceRegime|CA_REGIONS_AND_SUPPORT|
|» complianceRegime|ITAR|
|» complianceRegime|AU_REGIONS_AND_US_SUPPORT|
|» complianceRegime|ASSURED_WORKLOADS_FOR_PARTNERS|
|» complianceRegime|ISR_REGIONS|
|» complianceRegime|ISR_REGIONS_AND_SUPPORT|
|» complianceRegime|CA_PROTECTED_B|
|» partner|PARTNER_UNSPECIFIED|
|» partner|LOCAL_CONTROLS_BY_S3NS|
|» partner|SOVEREIGN_CONTROLS_BY_T_SYSTEMS|
|» partner|SOVEREIGN_CONTROLS_BY_SIA_MINSAIT|
|» partner|SOVEREIGN_CONTROLS_BY_PSN|

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

<h3 id="assuredworkloadsorganizationslocationsworkloadscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## assuredworkloads.organizations.locations.workloads.organizations.locations.workloads.analyzeWorkloadMove

<a id="opIdassuredworkloads.organizations.locations.workloads.organizations.locations.workloads.analyzeWorkloadMove"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/string:analyzeWorkloadMove \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{source}/{target}:analyzeWorkloadMove`

Analyzes a hypothetical move of a source project or project-based workload to a target (destination) folder-based workload.

<h3 id="assuredworkloadsorganizationslocationsworkloadsorganizationslocationsworkloadsanalyzeworkloadmove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source|path|string|true|The source type is a project-based workload. Specify the workloads's relative resource name, formatted as: "organizations/{ORGANIZATION_ID}/locations/{LOCATION_ID}/workloads/{WORKLOAD_ID}" For example: "organizations/123/locations/us-east1/workloads/assured-workload-1"|
|target|path|string|true|Required. The resource ID of the folder-based destination workload. This workload is where the source project will hypothetically be moved to. Specify the workload's relative resource name, formatted as: "organizations/{ORGANIZATION_ID}/locations/{LOCATION_ID}/workloads/{WORKLOAD_ID}" For example: "organizations/123/locations/us-east1/workloads/assured-workload-2"|
|project|query|string|false|The source type is a project. Specify the project's relative resource name, formatted as either a project number or a project ID: "projects/{PROJECT_NUMBER}" or "projects/{PROJECT_ID}" For example: "projects/951040570662" when specifying a project number, or "projects/my-project-123" when specifying a project ID.|
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
  "blockers": [
    "string"
  ]
}
```

<h3 id="assuredworkloadsorganizationslocationsworkloadsorganizationslocationsworkloadsanalyzeworkloadmove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse](#schemagooglecloudassuredworkloadsv1beta1analyzeworkloadmoveresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="assured-workloads-api-projects">projects</h1>

## assuredworkloads.projects.organizations.locations.workloads.analyzeWorkloadMove

<a id="opIdassuredworkloads.projects.organizations.locations.workloads.analyzeWorkloadMove"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/string:analyzeWorkloadMove \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{project}/{target}:analyzeWorkloadMove`

Analyzes a hypothetical move of a source project or project-based workload to a target (destination) folder-based workload.

<h3 id="assuredworkloadsprojectsorganizationslocationsworkloadsanalyzeworkloadmove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|project|path|string|true|The source type is a project. Specify the project's relative resource name, formatted as either a project number or a project ID: "projects/{PROJECT_NUMBER}" or "projects/{PROJECT_ID}" For example: "projects/951040570662" when specifying a project number, or "projects/my-project-123" when specifying a project ID.|
|target|path|string|true|Required. The resource ID of the folder-based destination workload. This workload is where the source project will hypothetically be moved to. Specify the workload's relative resource name, formatted as: "organizations/{ORGANIZATION_ID}/locations/{LOCATION_ID}/workloads/{WORKLOAD_ID}" For example: "organizations/123/locations/us-east1/workloads/assured-workload-2"|
|source|query|string|false|The source type is a project-based workload. Specify the workloads's relative resource name, formatted as: "organizations/{ORGANIZATION_ID}/locations/{LOCATION_ID}/workloads/{WORKLOAD_ID}" For example: "organizations/123/locations/us-east1/workloads/assured-workload-1"|
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
  "blockers": [
    "string"
  ]
}
```

<h3 id="assuredworkloadsprojectsorganizationslocationsworkloadsanalyzeworkloadmove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse](#schemagooglecloudassuredworkloadsv1beta1analyzeworkloadmoveresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationRequest">GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudassuredworkloadsv1beta1acknowledgeviolationrequest"></a>
<a id="schema_GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationRequest"></a>
<a id="tocSgooglecloudassuredworkloadsv1beta1acknowledgeviolationrequest"></a>
<a id="tocsgooglecloudassuredworkloadsv1beta1acknowledgeviolationrequest"></a>

```json
{
  "comment": "string",
  "nonCompliantOrgPolicy": "string"
}
```

Request for acknowledging the violation Next Id: 4

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string|false|none|Required. Business justification explaining the need for violation acknowledgement|
|nonCompliantOrgPolicy|string|false|none|Optional. This field is deprecated and will be removed in future version of the API. Name of the OrgPolicy which was modified with non-compliant change and resulted in this violation. Format: projects/{project_number}/policies/{constraint_name} folders/{folder_id}/policies/{constraint_name} organizations/{organization_id}/policies/{constraint_name}|

<h2 id="tocS_GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationResponse">GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudassuredworkloadsv1beta1acknowledgeviolationresponse"></a>
<a id="schema_GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationResponse"></a>
<a id="tocSgooglecloudassuredworkloadsv1beta1acknowledgeviolationresponse"></a>
<a id="tocsgooglecloudassuredworkloadsv1beta1acknowledgeviolationresponse"></a>

```json
{}
```

Response for violation acknowledgement

<h2 id="tocS_GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse">GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudassuredworkloadsv1beta1analyzeworkloadmoveresponse"></a>
<a id="schema_GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse"></a>
<a id="tocSgooglecloudassuredworkloadsv1beta1analyzeworkloadmoveresponse"></a>
<a id="tocsgooglecloudassuredworkloadsv1beta1analyzeworkloadmoveresponse"></a>

```json
{
  "blockers": [
    "string"
  ]
}
```

A response that includes the analysis of the hypothetical resource move.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blockers|[string]|false|none|A list of blockers that should be addressed before moving the source project or project-based workload to the destination folder-based workload.|

<h2 id="tocS_GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse">GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudassuredworkloadsv1beta1listviolationsresponse"></a>
<a id="schema_GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse"></a>
<a id="tocSgooglecloudassuredworkloadsv1beta1listviolationsresponse"></a>
<a id="tocsgooglecloudassuredworkloadsv1beta1listviolationsresponse"></a>

```json
{
  "nextPageToken": "string",
  "violations": [
    {
      "acknowledged": true,
      "acknowledgementTime": "string",
      "auditLogLink": "string",
      "beginTime": "string",
      "category": "string",
      "description": "string",
      "exceptionAuditLogLink": "string",
      "exceptionContexts": [
        {
          "acknowledgementTime": "string",
          "comment": "string",
          "principalEmail": "string"
        }
      ],
      "name": "string",
      "nonCompliantOrgPolicy": "string",
      "orgPolicyConstraint": "string",
      "remediation": {
        "compliantValues": [
          "string"
        ],
        "instructions": {
          "consoleInstructions": {
            "additionalLinks": [
              "string"
            ],
            "consoleUris": [
              "string"
            ],
            "steps": [
              "string"
            ]
          },
          "gcloudInstructions": {
            "additionalLinks": [
              "string"
            ],
            "gcloudCommands": [
              "string"
            ],
            "steps": [
              "string"
            ]
          }
        },
        "remediationType": "REMEDIATION_TYPE_UNSPECIFIED"
      },
      "resolveTime": "string",
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string"
    }
  ]
}
```

Response of ListViolations endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The next page token. Returns empty if reached the last page.|
|violations|[[GoogleCloudAssuredworkloadsV1beta1Violation](#schemagooglecloudassuredworkloadsv1beta1violation)]|false|none|List of Violations under a Workload.|

<h2 id="tocS_GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse">GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudassuredworkloadsv1beta1listworkloadsresponse"></a>
<a id="schema_GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse"></a>
<a id="tocSgooglecloudassuredworkloadsv1beta1listworkloadsresponse"></a>
<a id="tocsgooglecloudassuredworkloadsv1beta1listworkloadsresponse"></a>

```json
{
  "nextPageToken": "string",
  "workloads": [
    {
      "billingAccount": "string",
      "cjisSettings": {
        "kmsSettings": {
          "nextRotationTime": "string",
          "rotationPeriod": "string"
        }
      },
      "complianceRegime": "COMPLIANCE_REGIME_UNSPECIFIED",
      "complianceStatus": {
        "acknowledgedViolationCount": 0,
        "activeViolationCount": 0
      },
      "compliantButDisallowedServices": [
        "string"
      ],
      "createTime": "string",
      "displayName": "string",
      "ekmProvisioningResponse": {
        "ekmProvisioningErrorDomain": "EKM_PROVISIONING_ERROR_DOMAIN_UNSPECIFIED",
        "ekmProvisioningErrorMapping": "EKM_PROVISIONING_ERROR_MAPPING_UNSPECIFIED",
        "ekmProvisioningState": "EKM_PROVISIONING_STATE_UNSPECIFIED"
      },
      "enableSovereignControls": true,
      "etag": "string",
      "fedrampHighSettings": {
        "kmsSettings": {
          "nextRotationTime": "string",
          "rotationPeriod": "string"
        }
      },
      "fedrampModerateSettings": {
        "kmsSettings": {
          "nextRotationTime": "string",
          "rotationPeriod": "string"
        }
      },
      "il4Settings": {
        "kmsSettings": {
          "nextRotationTime": "string",
          "rotationPeriod": "string"
        }
      },
      "kajEnrollmentState": "KAJ_ENROLLMENT_STATE_UNSPECIFIED",
      "kmsSettings": {
        "nextRotationTime": "string",
        "rotationPeriod": "string"
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "partner": "PARTNER_UNSPECIFIED",
      "provisionedResourcesParent": "string",
      "resourceSettings": [
        {
          "displayName": "string",
          "resourceId": "string",
          "resourceType": "RESOURCE_TYPE_UNSPECIFIED"
        }
      ],
      "resources": [
        {
          "resourceId": "string",
          "resourceType": "RESOURCE_TYPE_UNSPECIFIED"
        }
      ],
      "saaEnrollmentResponse": {
        "setupErrors": [
          "SETUP_ERROR_UNSPECIFIED"
        ],
        "setupStatus": "SETUP_STATE_UNSPECIFIED"
      },
      "violationNotificationsEnabled": true
    }
  ]
}
```

Response of ListWorkloads endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The next page token. Return empty if reached the last page.|
|workloads|[[GoogleCloudAssuredworkloadsV1beta1Workload](#schemagooglecloudassuredworkloadsv1beta1workload)]|false|none|List of Workloads under a given parent.|

<h2 id="tocS_GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequest">GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudassuredworkloadsv1beta1restrictallowedresourcesrequest"></a>
<a id="schema_GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequest"></a>
<a id="tocSgooglecloudassuredworkloadsv1beta1restrictallowedresourcesrequest"></a>
<a id="tocsgooglecloudassuredworkloadsv1beta1restrictallowedresourcesrequest"></a>

```json
{
  "restrictionType": "RESTRICTION_TYPE_UNSPECIFIED"
}
```

Request for restricting list of available resources in Workload environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|restrictionType|string|false|none|Required. The type of restriction for using gcp products in the Workload environment.|

#### Enumerated Values

|Property|Value|
|---|---|
|restrictionType|RESTRICTION_TYPE_UNSPECIFIED|
|restrictionType|ALLOW_ALL_GCP_RESOURCES|
|restrictionType|ALLOW_COMPLIANT_RESOURCES|
|restrictionType|APPEND_COMPLIANT_RESOURCES|

<h2 id="tocS_GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesResponse">GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudassuredworkloadsv1beta1restrictallowedresourcesresponse"></a>
<a id="schema_GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesResponse"></a>
<a id="tocSgooglecloudassuredworkloadsv1beta1restrictallowedresourcesresponse"></a>
<a id="tocsgooglecloudassuredworkloadsv1beta1restrictallowedresourcesresponse"></a>

```json
{}
```

Response for restricting the list of allowed resources.

<h2 id="tocS_GoogleCloudAssuredworkloadsV1beta1Violation">GoogleCloudAssuredworkloadsV1beta1Violation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudassuredworkloadsv1beta1violation"></a>
<a id="schema_GoogleCloudAssuredworkloadsV1beta1Violation"></a>
<a id="tocSgooglecloudassuredworkloadsv1beta1violation"></a>
<a id="tocsgooglecloudassuredworkloadsv1beta1violation"></a>

```json
{
  "acknowledged": true,
  "acknowledgementTime": "string",
  "auditLogLink": "string",
  "beginTime": "string",
  "category": "string",
  "description": "string",
  "exceptionAuditLogLink": "string",
  "exceptionContexts": [
    {
      "acknowledgementTime": "string",
      "comment": "string",
      "principalEmail": "string"
    }
  ],
  "name": "string",
  "nonCompliantOrgPolicy": "string",
  "orgPolicyConstraint": "string",
  "remediation": {
    "compliantValues": [
      "string"
    ],
    "instructions": {
      "consoleInstructions": {
        "additionalLinks": [
          "string"
        ],
        "consoleUris": [
          "string"
        ],
        "steps": [
          "string"
        ]
      },
      "gcloudInstructions": {
        "additionalLinks": [
          "string"
        ],
        "gcloudCommands": [
          "string"
        ],
        "steps": [
          "string"
        ]
      }
    },
    "remediationType": "REMEDIATION_TYPE_UNSPECIFIED"
  },
  "resolveTime": "string",
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

Workload monitoring Violation. Next Id: 22

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acknowledged|boolean|false|none|A boolean that indicates if the violation is acknowledged|
|acknowledgementTime|string(google-datetime)|false|none|Optional. Timestamp when this violation was acknowledged first. Check exception_contexts to find the last time the violation was acknowledged when there are more than one violations. This field will be absent when acknowledged field is marked as false.|
|auditLogLink|string|false|read-only|Output only. Immutable. Audit Log Link for violated resource Format: https://console.cloud.google.com/logs/query;query={logName}{protoPayload.resourceName}{timeRange}{folder}|
|beginTime|string(google-datetime)|false|read-only|Output only. Time of the event which triggered the Violation.|
|category|string|false|read-only|Output only. Category under which this violation is mapped. e.g. Location, Service Usage, Access, Encryption, etc.|
|description|string|false|read-only|Output only. Description for the Violation. e.g. OrgPolicy gcp.resourceLocations has non compliant value.|
|exceptionAuditLogLink|string|false|read-only|Output only. Immutable. Audit Log link to find business justification provided for violation exception. Format: https://console.cloud.google.com/logs/query;query={logName}{protoPayload.resourceName}{protoPayload.methodName}{timeRange}{organization}|
|exceptionContexts|[[GoogleCloudAssuredworkloadsV1beta1ViolationExceptionContext](#schemagooglecloudassuredworkloadsv1beta1violationexceptioncontext)]|false|read-only|Output only. List of all the exception detail added for the violation.|
|name|string|false|read-only|Output only. Immutable. Name of the Violation. Format: organizations/{organization}/locations/{location}/workloads/{workload_id}/violations/{violations_id}|
|nonCompliantOrgPolicy|string|false|read-only|Output only. Immutable. Name of the OrgPolicy which was modified with non-compliant change and resulted this violation. Format: projects/{project_number}/policies/{constraint_name} folders/{folder_id}/policies/{constraint_name} organizations/{organization_id}/policies/{constraint_name}|
|orgPolicyConstraint|string|false|read-only|Output only. Immutable. The org-policy-constraint that was incorrectly changed, which resulted in this violation.|
|remediation|[GoogleCloudAssuredworkloadsV1beta1ViolationRemediation](#schemagooglecloudassuredworkloadsv1beta1violationremediation)|false|none|Output only. Compliance violation remediation|
|resolveTime|string(google-datetime)|false|read-only|Output only. Time of the event which fixed the Violation. If the violation is ACTIVE this will be empty.|
|state|string|false|read-only|Output only. State of the violation|
|updateTime|string(google-datetime)|false|read-only|Output only. The last time when the Violation record was updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|RESOLVED|
|state|UNRESOLVED|
|state|EXCEPTION|

<h2 id="tocS_GoogleCloudAssuredworkloadsV1beta1ViolationExceptionContext">GoogleCloudAssuredworkloadsV1beta1ViolationExceptionContext</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudassuredworkloadsv1beta1violationexceptioncontext"></a>
<a id="schema_GoogleCloudAssuredworkloadsV1beta1ViolationExceptionContext"></a>
<a id="tocSgooglecloudassuredworkloadsv1beta1violationexceptioncontext"></a>
<a id="tocsgooglecloudassuredworkloadsv1beta1violationexceptioncontext"></a>

```json
{
  "acknowledgementTime": "string",
  "comment": "string",
  "principalEmail": "string"
}
```

Violation exception detail. Next Id: 5

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acknowledgementTime|string(google-datetime)|false|none|Timestamp when the violation was acknowledged.|
|comment|string|false|none|Business justification provided towards the acknowledgement of the violation.|
|principalEmail|string|false|none|Email address of the user (or service account) who acknowledged the violation.|

<h2 id="tocS_GoogleCloudAssuredworkloadsV1beta1ViolationRemediation">GoogleCloudAssuredworkloadsV1beta1ViolationRemediation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudassuredworkloadsv1beta1violationremediation"></a>
<a id="schema_GoogleCloudAssuredworkloadsV1beta1ViolationRemediation"></a>
<a id="tocSgooglecloudassuredworkloadsv1beta1violationremediation"></a>
<a id="tocsgooglecloudassuredworkloadsv1beta1violationremediation"></a>

```json
{
  "compliantValues": [
    "string"
  ],
  "instructions": {
    "consoleInstructions": {
      "additionalLinks": [
        "string"
      ],
      "consoleUris": [
        "string"
      ],
      "steps": [
        "string"
      ]
    },
    "gcloudInstructions": {
      "additionalLinks": [
        "string"
      ],
      "gcloudCommands": [
        "string"
      ],
      "steps": [
        "string"
      ]
    }
  },
  "remediationType": "REMEDIATION_TYPE_UNSPECIFIED"
}
```

Represents remediation guidance to resolve compliance violation for AssuredWorkload

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|compliantValues|[string]|false|none|Values that can resolve the violation For example: for list org policy violations, this will either be the list of allowed or denied values|
|instructions|[GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructions](#schemagooglecloudassuredworkloadsv1beta1violationremediationinstructions)|false|none|Required. Remediation instructions to resolve violations|
|remediationType|string|false|read-only|Output only. Reemediation type based on the type of org policy values violated|

#### Enumerated Values

|Property|Value|
|---|---|
|remediationType|REMEDIATION_TYPE_UNSPECIFIED|
|remediationType|REMEDIATION_BOOLEAN_ORG_POLICY_VIOLATION|
|remediationType|REMEDIATION_LIST_ALLOWED_VALUES_ORG_POLICY_VIOLATION|
|remediationType|REMEDIATION_LIST_DENIED_VALUES_ORG_POLICY_VIOLATION|
|remediationType|REMEDIATION_RESTRICT_CMEK_CRYPTO_KEY_PROJECTS_ORG_POLICY_VIOLATION|

<h2 id="tocS_GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructions">GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructions</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudassuredworkloadsv1beta1violationremediationinstructions"></a>
<a id="schema_GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructions"></a>
<a id="tocSgooglecloudassuredworkloadsv1beta1violationremediationinstructions"></a>
<a id="tocsgooglecloudassuredworkloadsv1beta1violationremediationinstructions"></a>

```json
{
  "consoleInstructions": {
    "additionalLinks": [
      "string"
    ],
    "consoleUris": [
      "string"
    ],
    "steps": [
      "string"
    ]
  },
  "gcloudInstructions": {
    "additionalLinks": [
      "string"
    ],
    "gcloudCommands": [
      "string"
    ],
    "steps": [
      "string"
    ]
  }
}
```

Instructions to remediate violation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consoleInstructions|[GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsConsole](#schemagooglecloudassuredworkloadsv1beta1violationremediationinstructionsconsole)|false|none|Remediation instructions to resolve violation via cloud console|
|gcloudInstructions|[GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsGcloud](#schemagooglecloudassuredworkloadsv1beta1violationremediationinstructionsgcloud)|false|none|Remediation instructions to resolve violation via gcloud cli|

<h2 id="tocS_GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsConsole">GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsConsole</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudassuredworkloadsv1beta1violationremediationinstructionsconsole"></a>
<a id="schema_GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsConsole"></a>
<a id="tocSgooglecloudassuredworkloadsv1beta1violationremediationinstructionsconsole"></a>
<a id="tocsgooglecloudassuredworkloadsv1beta1violationremediationinstructionsconsole"></a>

```json
{
  "additionalLinks": [
    "string"
  ],
  "consoleUris": [
    "string"
  ],
  "steps": [
    "string"
  ]
}
```

Remediation instructions to resolve violation via cloud console

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalLinks|[string]|false|none|Additional urls for more information about steps|
|consoleUris|[string]|false|none|Link to console page where violations can be resolved|
|steps|[string]|false|none|Steps to resolve violation via cloud console|

<h2 id="tocS_GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsGcloud">GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsGcloud</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudassuredworkloadsv1beta1violationremediationinstructionsgcloud"></a>
<a id="schema_GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsGcloud"></a>
<a id="tocSgooglecloudassuredworkloadsv1beta1violationremediationinstructionsgcloud"></a>
<a id="tocsgooglecloudassuredworkloadsv1beta1violationremediationinstructionsgcloud"></a>

```json
{
  "additionalLinks": [
    "string"
  ],
  "gcloudCommands": [
    "string"
  ],
  "steps": [
    "string"
  ]
}
```

Remediation instructions to resolve violation via gcloud cli

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalLinks|[string]|false|none|Additional urls for more information about steps|
|gcloudCommands|[string]|false|none|Gcloud command to resolve violation|
|steps|[string]|false|none|Steps to resolve violation via gcloud cli|

<h2 id="tocS_GoogleCloudAssuredworkloadsV1beta1Workload">GoogleCloudAssuredworkloadsV1beta1Workload</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudassuredworkloadsv1beta1workload"></a>
<a id="schema_GoogleCloudAssuredworkloadsV1beta1Workload"></a>
<a id="tocSgooglecloudassuredworkloadsv1beta1workload"></a>
<a id="tocsgooglecloudassuredworkloadsv1beta1workload"></a>

```json
{
  "billingAccount": "string",
  "cjisSettings": {
    "kmsSettings": {
      "nextRotationTime": "string",
      "rotationPeriod": "string"
    }
  },
  "complianceRegime": "COMPLIANCE_REGIME_UNSPECIFIED",
  "complianceStatus": {
    "acknowledgedViolationCount": 0,
    "activeViolationCount": 0
  },
  "compliantButDisallowedServices": [
    "string"
  ],
  "createTime": "string",
  "displayName": "string",
  "ekmProvisioningResponse": {
    "ekmProvisioningErrorDomain": "EKM_PROVISIONING_ERROR_DOMAIN_UNSPECIFIED",
    "ekmProvisioningErrorMapping": "EKM_PROVISIONING_ERROR_MAPPING_UNSPECIFIED",
    "ekmProvisioningState": "EKM_PROVISIONING_STATE_UNSPECIFIED"
  },
  "enableSovereignControls": true,
  "etag": "string",
  "fedrampHighSettings": {
    "kmsSettings": {
      "nextRotationTime": "string",
      "rotationPeriod": "string"
    }
  },
  "fedrampModerateSettings": {
    "kmsSettings": {
      "nextRotationTime": "string",
      "rotationPeriod": "string"
    }
  },
  "il4Settings": {
    "kmsSettings": {
      "nextRotationTime": "string",
      "rotationPeriod": "string"
    }
  },
  "kajEnrollmentState": "KAJ_ENROLLMENT_STATE_UNSPECIFIED",
  "kmsSettings": {
    "nextRotationTime": "string",
    "rotationPeriod": "string"
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "partner": "PARTNER_UNSPECIFIED",
  "provisionedResourcesParent": "string",
  "resourceSettings": [
    {
      "displayName": "string",
      "resourceId": "string",
      "resourceType": "RESOURCE_TYPE_UNSPECIFIED"
    }
  ],
  "resources": [
    {
      "resourceId": "string",
      "resourceType": "RESOURCE_TYPE_UNSPECIFIED"
    }
  ],
  "saaEnrollmentResponse": {
    "setupErrors": [
      "SETUP_ERROR_UNSPECIFIED"
    ],
    "setupStatus": "SETUP_STATE_UNSPECIFIED"
  },
  "violationNotificationsEnabled": true
}
```

A Workload object for managing highly regulated workloads of cloud customers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billingAccount|string|false|none|Optional. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF`.|
|cjisSettings|[GoogleCloudAssuredworkloadsV1beta1WorkloadCJISSettings](#schemagooglecloudassuredworkloadsv1beta1workloadcjissettings)|false|none|Input only. Immutable. Settings specific to resources needed for CJIS.|
|complianceRegime|string|false|none|Required. Immutable. Compliance Regime associated with this workload.|
|complianceStatus|[GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus](#schemagooglecloudassuredworkloadsv1beta1workloadcompliancestatus)|false|none|Output only. Count of active Violations in the Workload.|
|compliantButDisallowedServices|[string]|false|read-only|Output only. Urls for services which are compliant for this Assured Workload, but which are currently disallowed by the ResourceUsageRestriction org policy. Invoke RestrictAllowedResources endpoint to allow your project developers to use these services in their environment."|
|createTime|string(google-datetime)|false|read-only|Output only. Immutable. The Workload creation timestamp.|
|displayName|string|false|none|Required. The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload|
|ekmProvisioningResponse|[GoogleCloudAssuredworkloadsV1beta1WorkloadEkmProvisioningResponse](#schemagooglecloudassuredworkloadsv1beta1workloadekmprovisioningresponse)|false|none|Optional. Represents the Ekm Provisioning State of the given workload.|
|enableSovereignControls|boolean|false|none|Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers.|
|etag|string|false|none|Optional. ETag of the workload, it is calculated on the basis of the Workload contents. It will be used in Update & Delete operations.|
|fedrampHighSettings|[GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings](#schemagooglecloudassuredworkloadsv1beta1workloadfedramphighsettings)|false|none|Input only. Immutable. Settings specific to resources needed for FedRAMP High.|
|fedrampModerateSettings|[GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings](#schemagooglecloudassuredworkloadsv1beta1workloadfedrampmoderatesettings)|false|none|Input only. Immutable. Settings specific to resources needed for FedRAMP Moderate.|
|il4Settings|[GoogleCloudAssuredworkloadsV1beta1WorkloadIL4Settings](#schemagooglecloudassuredworkloadsv1beta1workloadil4settings)|false|none|Input only. Immutable. Settings specific to resources needed for IL4.|
|kajEnrollmentState|string|false|read-only|Output only. Represents the KAJ enrollment state of the given workload.|
|kmsSettings|[GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings](#schemagooglecloudassuredworkloadsv1beta1workloadkmssettings)|false|none|Input only. Settings used to create a CMEK crypto key. When set, a project with a KMS CMEK key is provisioned. This field is deprecated as of Feb 28, 2022. In order to create a Keyring, callers should specify, ENCRYPTION_KEYS_PROJECT or KEYRING in ResourceSettings.resource_type field.|
|labels|object|false|none|Optional. Labels applied to the workload.|
|name|string|false|none|Optional. The resource name of the workload. Format: organizations/{organization}/locations/{location}/workloads/{workload} Read-only.|
|partner|string|false|none|Optional. Partner regime associated with this workload.|
|provisionedResourcesParent|string|false|none|Input only. The parent resource for the resources managed by this Assured Workload. May be either empty or a folder resource which is a child of the Workload parent. If not specified all resources are created under the parent organization. Format: folders/{folder_id}|
|resourceSettings|[[GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings](#schemagooglecloudassuredworkloadsv1beta1workloadresourcesettings)]|false|none|Input only. Resource properties that are used to customize workload resources. These properties (such as custom project id) will be used to create workload resources if possible. This field is optional.|
|resources|[[GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo](#schemagooglecloudassuredworkloadsv1beta1workloadresourceinfo)]|false|read-only|Output only. The resources associated with this workload. These resources will be created when creating the workload. If any of the projects already exist, the workload creation will fail. Always read only.|
|saaEnrollmentResponse|[GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse](#schemagooglecloudassuredworkloadsv1beta1workloadsaaenrollmentresponse)|false|none|Output only. Represents the SAA enrollment response of the given workload. SAA enrollment response is queried during GetWorkload call. In failure cases, user friendly error message is shown in SAA details page.|
|violationNotificationsEnabled|boolean|false|none|Optional. Indicates whether the e-mail notification for a violation is enabled for a workload. This value will be by default True, and if not present will be considered as true. This should only be updated via updateWorkload call. Any Changes to this field during the createWorkload call will not be honored. This will always be true while creating the workload.|

#### Enumerated Values

|Property|Value|
|---|---|
|complianceRegime|COMPLIANCE_REGIME_UNSPECIFIED|
|complianceRegime|IL4|
|complianceRegime|CJIS|
|complianceRegime|FEDRAMP_HIGH|
|complianceRegime|FEDRAMP_MODERATE|
|complianceRegime|US_REGIONAL_ACCESS|
|complianceRegime|HIPAA|
|complianceRegime|HITRUST|
|complianceRegime|EU_REGIONS_AND_SUPPORT|
|complianceRegime|CA_REGIONS_AND_SUPPORT|
|complianceRegime|ITAR|
|complianceRegime|AU_REGIONS_AND_US_SUPPORT|
|complianceRegime|ASSURED_WORKLOADS_FOR_PARTNERS|
|complianceRegime|ISR_REGIONS|
|complianceRegime|ISR_REGIONS_AND_SUPPORT|
|complianceRegime|CA_PROTECTED_B|
|kajEnrollmentState|KAJ_ENROLLMENT_STATE_UNSPECIFIED|
|kajEnrollmentState|KAJ_ENROLLMENT_STATE_PENDING|
|kajEnrollmentState|KAJ_ENROLLMENT_STATE_COMPLETE|
|partner|PARTNER_UNSPECIFIED|
|partner|LOCAL_CONTROLS_BY_S3NS|
|partner|SOVEREIGN_CONTROLS_BY_T_SYSTEMS|
|partner|SOVEREIGN_CONTROLS_BY_SIA_MINSAIT|
|partner|SOVEREIGN_CONTROLS_BY_PSN|

<h2 id="tocS_GoogleCloudAssuredworkloadsV1beta1WorkloadCJISSettings">GoogleCloudAssuredworkloadsV1beta1WorkloadCJISSettings</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudassuredworkloadsv1beta1workloadcjissettings"></a>
<a id="schema_GoogleCloudAssuredworkloadsV1beta1WorkloadCJISSettings"></a>
<a id="tocSgooglecloudassuredworkloadsv1beta1workloadcjissettings"></a>
<a id="tocsgooglecloudassuredworkloadsv1beta1workloadcjissettings"></a>

```json
{
  "kmsSettings": {
    "nextRotationTime": "string",
    "rotationPeriod": "string"
  }
}
```

Settings specific to resources needed for CJIS.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kmsSettings|[GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings](#schemagooglecloudassuredworkloadsv1beta1workloadkmssettings)|false|none|Input only. Immutable. Settings used to create a CMEK crypto key.|

<h2 id="tocS_GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus">GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudassuredworkloadsv1beta1workloadcompliancestatus"></a>
<a id="schema_GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus"></a>
<a id="tocSgooglecloudassuredworkloadsv1beta1workloadcompliancestatus"></a>
<a id="tocsgooglecloudassuredworkloadsv1beta1workloadcompliancestatus"></a>

```json
{
  "acknowledgedViolationCount": 0,
  "activeViolationCount": 0
}
```

Represents the Compliance Status of this workload

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acknowledgedViolationCount|integer(int32)|false|none|Count of active Violations which are acknowledged in the Workload.|
|activeViolationCount|integer(int32)|false|none|Count of active Violations which haven't been acknowledged.|

<h2 id="tocS_GoogleCloudAssuredworkloadsV1beta1WorkloadEkmProvisioningResponse">GoogleCloudAssuredworkloadsV1beta1WorkloadEkmProvisioningResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudassuredworkloadsv1beta1workloadekmprovisioningresponse"></a>
<a id="schema_GoogleCloudAssuredworkloadsV1beta1WorkloadEkmProvisioningResponse"></a>
<a id="tocSgooglecloudassuredworkloadsv1beta1workloadekmprovisioningresponse"></a>
<a id="tocsgooglecloudassuredworkloadsv1beta1workloadekmprovisioningresponse"></a>

```json
{
  "ekmProvisioningErrorDomain": "EKM_PROVISIONING_ERROR_DOMAIN_UNSPECIFIED",
  "ekmProvisioningErrorMapping": "EKM_PROVISIONING_ERROR_MAPPING_UNSPECIFIED",
  "ekmProvisioningState": "EKM_PROVISIONING_STATE_UNSPECIFIED"
}
```

External key management systems(EKM) Provisioning response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ekmProvisioningErrorDomain|string|false|none|Indicates Ekm provisioning error if any.|
|ekmProvisioningErrorMapping|string|false|none|Detailed error message if Ekm provisioning fails|
|ekmProvisioningState|string|false|none|Indicates Ekm enrollment Provisioning of a given workload.|

#### Enumerated Values

|Property|Value|
|---|---|
|ekmProvisioningErrorDomain|EKM_PROVISIONING_ERROR_DOMAIN_UNSPECIFIED|
|ekmProvisioningErrorDomain|UNSPECIFIED_ERROR|
|ekmProvisioningErrorDomain|GOOGLE_SERVER_ERROR|
|ekmProvisioningErrorDomain|EXTERNAL_USER_ERROR|
|ekmProvisioningErrorDomain|EXTERNAL_PARTNER_ERROR|
|ekmProvisioningErrorDomain|TIMEOUT_ERROR|
|ekmProvisioningErrorMapping|EKM_PROVISIONING_ERROR_MAPPING_UNSPECIFIED|
|ekmProvisioningErrorMapping|INVALID_SERVICE_ACCOUNT|
|ekmProvisioningErrorMapping|MISSING_METRICS_SCOPE_ADMIN_PERMISSION|
|ekmProvisioningErrorMapping|MISSING_EKM_CONNECTION_ADMIN_PERMISSION|
|ekmProvisioningState|EKM_PROVISIONING_STATE_UNSPECIFIED|
|ekmProvisioningState|EKM_PROVISIONING_STATE_PENDING|
|ekmProvisioningState|EKM_PROVISIONING_STATE_FAILED|
|ekmProvisioningState|EKM_PROVISIONING_STATE_COMPLETED|

<h2 id="tocS_GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings">GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudassuredworkloadsv1beta1workloadfedramphighsettings"></a>
<a id="schema_GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings"></a>
<a id="tocSgooglecloudassuredworkloadsv1beta1workloadfedramphighsettings"></a>
<a id="tocsgooglecloudassuredworkloadsv1beta1workloadfedramphighsettings"></a>

```json
{
  "kmsSettings": {
    "nextRotationTime": "string",
    "rotationPeriod": "string"
  }
}
```

Settings specific to resources needed for FedRAMP High.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kmsSettings|[GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings](#schemagooglecloudassuredworkloadsv1beta1workloadkmssettings)|false|none|Input only. Immutable. Settings used to create a CMEK crypto key.|

<h2 id="tocS_GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings">GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudassuredworkloadsv1beta1workloadfedrampmoderatesettings"></a>
<a id="schema_GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings"></a>
<a id="tocSgooglecloudassuredworkloadsv1beta1workloadfedrampmoderatesettings"></a>
<a id="tocsgooglecloudassuredworkloadsv1beta1workloadfedrampmoderatesettings"></a>

```json
{
  "kmsSettings": {
    "nextRotationTime": "string",
    "rotationPeriod": "string"
  }
}
```

Settings specific to resources needed for FedRAMP Moderate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kmsSettings|[GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings](#schemagooglecloudassuredworkloadsv1beta1workloadkmssettings)|false|none|Input only. Immutable. Settings used to create a CMEK crypto key.|

<h2 id="tocS_GoogleCloudAssuredworkloadsV1beta1WorkloadIL4Settings">GoogleCloudAssuredworkloadsV1beta1WorkloadIL4Settings</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudassuredworkloadsv1beta1workloadil4settings"></a>
<a id="schema_GoogleCloudAssuredworkloadsV1beta1WorkloadIL4Settings"></a>
<a id="tocSgooglecloudassuredworkloadsv1beta1workloadil4settings"></a>
<a id="tocsgooglecloudassuredworkloadsv1beta1workloadil4settings"></a>

```json
{
  "kmsSettings": {
    "nextRotationTime": "string",
    "rotationPeriod": "string"
  }
}
```

Settings specific to resources needed for IL4.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kmsSettings|[GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings](#schemagooglecloudassuredworkloadsv1beta1workloadkmssettings)|false|none|Input only. Immutable. Settings used to create a CMEK crypto key.|

<h2 id="tocS_GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings">GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudassuredworkloadsv1beta1workloadkmssettings"></a>
<a id="schema_GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings"></a>
<a id="tocSgooglecloudassuredworkloadsv1beta1workloadkmssettings"></a>
<a id="tocsgooglecloudassuredworkloadsv1beta1workloadkmssettings"></a>

```json
{
  "nextRotationTime": "string",
  "rotationPeriod": "string"
}
```

Settings specific to the Key Management Service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextRotationTime|string(google-datetime)|false|none|Required. Input only. Immutable. The time at which the Key Management Service will automatically create a new version of the crypto key and mark it as the primary.|
|rotationPeriod|string(google-duration)|false|none|Required. Input only. Immutable. [next_rotation_time] will be advanced by this period when the Key Management Service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours.|

<h2 id="tocS_GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo">GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudassuredworkloadsv1beta1workloadresourceinfo"></a>
<a id="schema_GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo"></a>
<a id="tocSgooglecloudassuredworkloadsv1beta1workloadresourceinfo"></a>
<a id="tocsgooglecloudassuredworkloadsv1beta1workloadresourceinfo"></a>

```json
{
  "resourceId": "string",
  "resourceType": "RESOURCE_TYPE_UNSPECIFIED"
}
```

Represent the resources that are children of this Workload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceId|string(int64)|false|none|Resource identifier. For a project this represents project_number.|
|resourceType|string|false|none|Indicates the type of resource.|

#### Enumerated Values

|Property|Value|
|---|---|
|resourceType|RESOURCE_TYPE_UNSPECIFIED|
|resourceType|CONSUMER_PROJECT|
|resourceType|CONSUMER_FOLDER|
|resourceType|ENCRYPTION_KEYS_PROJECT|
|resourceType|KEYRING|

<h2 id="tocS_GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings">GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudassuredworkloadsv1beta1workloadresourcesettings"></a>
<a id="schema_GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings"></a>
<a id="tocSgooglecloudassuredworkloadsv1beta1workloadresourcesettings"></a>
<a id="tocsgooglecloudassuredworkloadsv1beta1workloadresourcesettings"></a>

```json
{
  "displayName": "string",
  "resourceId": "string",
  "resourceType": "RESOURCE_TYPE_UNSPECIFIED"
}
```

Represent the custom settings for the resources to be created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|User-assigned resource display name. If not empty it will be used to create a resource with the specified name.|
|resourceId|string|false|none|Resource identifier. For a project this represents project_id. If the project is already taken, the workload creation will fail. For KeyRing, this represents the keyring_id. For a folder, don't set this value as folder_id is assigned by Google.|
|resourceType|string|false|none|Indicates the type of resource. This field should be specified to correspond the id to the right project type (CONSUMER_PROJECT or ENCRYPTION_KEYS_PROJECT)|

#### Enumerated Values

|Property|Value|
|---|---|
|resourceType|RESOURCE_TYPE_UNSPECIFIED|
|resourceType|CONSUMER_PROJECT|
|resourceType|CONSUMER_FOLDER|
|resourceType|ENCRYPTION_KEYS_PROJECT|
|resourceType|KEYRING|

<h2 id="tocS_GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse">GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudassuredworkloadsv1beta1workloadsaaenrollmentresponse"></a>
<a id="schema_GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse"></a>
<a id="tocSgooglecloudassuredworkloadsv1beta1workloadsaaenrollmentresponse"></a>
<a id="tocsgooglecloudassuredworkloadsv1beta1workloadsaaenrollmentresponse"></a>

```json
{
  "setupErrors": [
    "SETUP_ERROR_UNSPECIFIED"
  ],
  "setupStatus": "SETUP_STATE_UNSPECIFIED"
}
```

Signed Access Approvals (SAA) enrollment response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|setupErrors|[string]|false|none|Indicates SAA enrollment setup error if any.|
|setupStatus|string|false|none|Indicates SAA enrollment status of a given workload.|

#### Enumerated Values

|Property|Value|
|---|---|
|setupErrors|SETUP_ERROR_UNSPECIFIED|
|setupErrors|ERROR_INVALID_BASE_SETUP|
|setupErrors|ERROR_MISSING_EXTERNAL_SIGNING_KEY|
|setupErrors|ERROR_NOT_ALL_SERVICES_ENROLLED|
|setupErrors|ERROR_SETUP_CHECK_FAILED|
|setupStatus|SETUP_STATE_UNSPECIFIED|
|setupStatus|STATUS_PENDING|
|setupStatus|STATUS_COMPLETE|

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
