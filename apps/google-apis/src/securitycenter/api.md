<h1 id="security-command-center-api">Security Command Center API v1beta2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Security Command Center API provides access to temporal views of assets and findings within an organization.

Base URLs:

* <a href="https://securitycenter.googleapis.com/">https://securitycenter.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/security-command-center">External documentation</a>

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

<h1 id="security-command-center-api-projects">projects</h1>

## securitycenter.projects.locations.clusters.getContainerThreatDetectionSettings

<a id="opIdsecuritycenter.projects.locations.clusters.getContainerThreatDetectionSettings"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta2/{name}`

Get the ContainerThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetContainerThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateContainerThreatDetectionSettings for this purpose.

<h3 id="securitycenterprojectslocationsclustersgetcontainerthreatdetectionsettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings|
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
  "modules": {
    "property1": {
      "moduleEnablementState": "ENABLEMENT_STATE_UNSPECIFIED",
      "value": {
        "property1": null,
        "property2": null
      }
    },
    "property2": {
      "moduleEnablementState": "ENABLEMENT_STATE_UNSPECIFIED",
      "value": {
        "property1": null,
        "property2": null
      }
    }
  },
  "name": "string",
  "serviceAccount": "string",
  "serviceEnablementState": "ENABLEMENT_STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

<h3 id="securitycenterprojectslocationsclustersgetcontainerthreatdetectionsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ContainerThreatDetectionSettings](#schemacontainerthreatdetectionsettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## securitycenter.projects.locations.clusters.updateContainerThreatDetectionSettings

<a id="opIdsecuritycenter.projects.locations.clusters.updateContainerThreatDetectionSettings"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "modules": {
      "property1": {
        "moduleEnablementState": "ENABLEMENT_STATE_UNSPECIFIED",
        "value": {
          "property1": null,
          "property2": null
        }
      },
      "property2": {
        "moduleEnablementState": "ENABLEMENT_STATE_UNSPECIFIED",
        "value": {
          "property1": null,
          "property2": null
        }
      }
    },
    "name": "string",
    "serviceEnablementState": "ENABLEMENT_STATE_UNSPECIFIED"
  }'
```

`PATCH /v1beta2/{name}`

Update the ContainerThreatDetectionSettings resource.

> Body parameter

```json
{
  "modules": {
    "property1": {
      "moduleEnablementState": "ENABLEMENT_STATE_UNSPECIFIED",
      "value": {
        "property1": null,
        "property2": null
      }
    },
    "property2": {
      "moduleEnablementState": "ENABLEMENT_STATE_UNSPECIFIED",
      "value": {
        "property1": null,
        "property2": null
      }
    }
  },
  "name": "string",
  "serviceEnablementState": "ENABLEMENT_STATE_UNSPECIFIED"
}
```

<h3 id="securitycenterprojectslocationsclustersupdatecontainerthreatdetectionsettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings|
|updateMask|query|string|false|The list of fields to be updated.|
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
|body|body|[ContainerThreatDetectionSettings](#schemacontainerthreatdetectionsettings)|false|none|
|» modules|body|object|false|The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's.|
|» » **additionalProperties**|body|[Config](#schemaconfig)|false|Configuration of a module.|
|» name|body|string|false|The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings|
|» serviceEnablementState|body|string|false|The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» serviceEnablementState|ENABLEMENT_STATE_UNSPECIFIED|
|» serviceEnablementState|INHERITED|
|» serviceEnablementState|ENABLED|
|» serviceEnablementState|DISABLED|

> Example responses

> 200 Response

```json
{
  "modules": {
    "property1": {
      "moduleEnablementState": "ENABLEMENT_STATE_UNSPECIFIED",
      "value": {
        "property1": null,
        "property2": null
      }
    },
    "property2": {
      "moduleEnablementState": "ENABLEMENT_STATE_UNSPECIFIED",
      "value": {
        "property1": null,
        "property2": null
      }
    }
  },
  "name": "string",
  "serviceAccount": "string",
  "serviceEnablementState": "ENABLEMENT_STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

<h3 id="securitycenterprojectslocationsclustersupdatecontainerthreatdetectionsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ContainerThreatDetectionSettings](#schemacontainerthreatdetectionsettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## securitycenter.projects.webSecurityScannerSettings.calculate

<a id="opIdsecuritycenter.projects.webSecurityScannerSettings.calculate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string:calculate \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta2/{name}:calculate`

Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

<h3 id="securitycenterprojectswebsecurityscannersettingscalculate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the WebSecurityScannerSettings to calculate. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings|
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
  "modules": {
    "property1": {
      "moduleEnablementState": "ENABLEMENT_STATE_UNSPECIFIED",
      "value": {
        "property1": null,
        "property2": null
      }
    },
    "property2": {
      "moduleEnablementState": "ENABLEMENT_STATE_UNSPECIFIED",
      "value": {
        "property1": null,
        "property2": null
      }
    }
  },
  "name": "string",
  "serviceEnablementState": "ENABLEMENT_STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

<h3 id="securitycenterprojectswebsecurityscannersettingscalculate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[WebSecurityScannerSettings](#schemawebsecurityscannersettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_Access">Access</h2>
<!-- backwards compatibility -->
<a id="schemaaccess"></a>
<a id="schema_Access"></a>
<a id="tocSaccess"></a>
<a id="tocsaccess"></a>

```json
{
  "callerIp": "string",
  "callerIpGeo": {
    "regionCode": "string"
  },
  "methodName": "string",
  "principalEmail": "string",
  "principalSubject": "string",
  "serviceAccountDelegationInfo": [
    {
      "principalEmail": "string",
      "principalSubject": "string"
    }
  ],
  "serviceAccountKeyName": "string",
  "serviceName": "string",
  "userAgentFamily": "string",
  "userName": "string"
}
```

Represents an access event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callerIp|string|false|none|Caller's IP address, such as "1.1.1.1".|
|callerIpGeo|[Geolocation](#schemageolocation)|false|none|The caller IP's geolocation, which identifies where the call came from.|
|methodName|string|false|none|The method that the service account called, e.g. "SetIamPolicy".|
|principalEmail|string|false|none|Associated email, such as "foo@google.com". The email address of the authenticated user or a service account acting on behalf of a third party principal making the request. For third party identity callers, the `principal_subject` field is populated instead of this field. For privacy reasons, the principal email address is sometimes redacted. For more information, see [Caller identities in audit logs](https://cloud.google.com/logging/docs/audit#user-id).|
|principalSubject|string|false|none|A string that represents the principal_subject that is associated with the identity. Unlike `principal_email`, `principal_subject` supports principals that aren't associated with email addresses, such as third party principals. For most identities, the format is `principal://iam.googleapis.com/{identity pool name}/subject/{subject}`. Some GKE identities, such as GKE_WORKLOAD, FREEFORM, and GKE_HUB_WORKLOAD, still use the legacy format `serviceAccount:{identity pool name}[{subject}]`.|
|serviceAccountDelegationInfo|[[ServiceAccountDelegationInfo](#schemaserviceaccountdelegationinfo)]|false|none|The identity delegation history of an authenticated service account that made the request. The `serviceAccountDelegationInfo[]` object contains information about the real authorities that try to access Google Cloud resources by delegating on a service account. When multiple authorities are present, they are guaranteed to be sorted based on the original ordering of the identity delegation events.|
|serviceAccountKeyName|string|false|none|The name of the service account key that was used to create or exchange credentials when authenticating the service account that made the request. This is a scheme-less URI full resource name. For example: "//iam.googleapis.com/projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}". |
|serviceName|string|false|none|This is the API service that the service account made a call to, e.g. "iam.googleapis.com"|
|userAgentFamily|string|false|none|Type of user agent associated with the finding. For example, an operating system shell or an embedded or standalone application.|
|userName|string|false|none|A string that represents a username. The username provided depends on the type of the finding and is likely not an IAM principal. For example, this can be a system username if the finding is related to a virtual machine, or it can be an application login username.|

<h2 id="tocS_AccessReview">AccessReview</h2>
<!-- backwards compatibility -->
<a id="schemaaccessreview"></a>
<a id="schema_AccessReview"></a>
<a id="tocSaccessreview"></a>
<a id="tocsaccessreview"></a>

```json
{
  "group": "string",
  "name": "string",
  "ns": "string",
  "resource": "string",
  "subresource": "string",
  "verb": "string",
  "version": "string"
}
```

Conveys information about a Kubernetes access review (e.g. kubectl auth can-i ...) that was involved in a finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group|string|false|none|Group is the API Group of the Resource. "*" means all.|
|name|string|false|none|Name is the name of the resource being requested. Empty means all.|
|ns|string|false|none|Namespace of the action being requested. Currently, there is no distinction between no namespace and all namespaces. Both are represented by "" (empty).|
|resource|string|false|none|Resource is the optional resource type requested. "*" means all.|
|subresource|string|false|none|Subresource is the optional subresource type.|
|verb|string|false|none|Verb is a Kubernetes resource API verb, like: get, list, watch, create, update, delete, proxy. "*" means all.|
|version|string|false|none|Version is the API Version of the Resource. "*" means all.|

<h2 id="tocS_CloudDlpDataProfile">CloudDlpDataProfile</h2>
<!-- backwards compatibility -->
<a id="schemaclouddlpdataprofile"></a>
<a id="schema_CloudDlpDataProfile"></a>
<a id="tocSclouddlpdataprofile"></a>
<a id="tocsclouddlpdataprofile"></a>

```json
{
  "dataProfile": "string"
}
```

The [data profile](https://cloud.google.com/dlp/docs/data-profiles) associated with the finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataProfile|string|false|none|Name of the data profile, for example, `projects/123/locations/europe/tableProfiles/8383929`.|

<h2 id="tocS_CloudDlpInspection">CloudDlpInspection</h2>
<!-- backwards compatibility -->
<a id="schemaclouddlpinspection"></a>
<a id="schema_CloudDlpInspection"></a>
<a id="tocSclouddlpinspection"></a>
<a id="tocsclouddlpinspection"></a>

```json
{
  "fullScan": true,
  "infoType": "string",
  "infoTypeCount": "string",
  "inspectJob": "string"
}
```

Details about the Cloud Data Loss Prevention (Cloud DLP) [inspection job](https://cloud.google.com/dlp/docs/concepts-job-triggers) that produced the finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fullScan|boolean|false|none|Whether Cloud DLP scanned the complete resource or a sampled subset.|
|infoType|string|false|none|The [type of information](https://cloud.google.com/dlp/docs/infotypes-reference) found, for example, `EMAIL_ADDRESS` or `STREET_ADDRESS`.|
|infoTypeCount|string(int64)|false|none|The number of times Cloud DLP found this infoType within this job and resource.|
|inspectJob|string|false|none|Name of the inspection job, for example, `projects/123/locations/europe/dlpJobs/i-8383929`.|

<h2 id="tocS_Compliance">Compliance</h2>
<!-- backwards compatibility -->
<a id="schemacompliance"></a>
<a id="schema_Compliance"></a>
<a id="tocScompliance"></a>
<a id="tocscompliance"></a>

```json
{
  "ids": [
    "string"
  ],
  "standard": "string",
  "version": "string"
}
```

Contains compliance information about a security standard indicating unmet recommendations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[string]|false|none|Policies within the standard/benchmark e.g. A.12.4.1|
|standard|string|false|none|Refers to industry wide standards or benchmarks e.g. "cis", "pci", "owasp", etc.|
|version|string|false|none|Version of the standard/benchmark e.g. 1.1|

<h2 id="tocS_Config">Config</h2>
<!-- backwards compatibility -->
<a id="schemaconfig"></a>
<a id="schema_Config"></a>
<a id="tocSconfig"></a>
<a id="tocsconfig"></a>

```json
{
  "moduleEnablementState": "ENABLEMENT_STATE_UNSPECIFIED",
  "value": {
    "property1": null,
    "property2": null
  }
}
```

Configuration of a module.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|moduleEnablementState|string|false|none|The state of enablement for the module at its level of the resource hierarchy.|
|value|object|false|none|The configuration value for the module. The absence of this field implies its inheritance from the parent.|

#### Enumerated Values

|Property|Value|
|---|---|
|moduleEnablementState|ENABLEMENT_STATE_UNSPECIFIED|
|moduleEnablementState|INHERITED|
|moduleEnablementState|ENABLED|
|moduleEnablementState|DISABLED|

<h2 id="tocS_Connection">Connection</h2>
<!-- backwards compatibility -->
<a id="schemaconnection"></a>
<a id="schema_Connection"></a>
<a id="tocSconnection"></a>
<a id="tocsconnection"></a>

```json
{
  "destinationIp": "string",
  "destinationPort": 0,
  "protocol": "PROTOCOL_UNSPECIFIED",
  "sourceIp": "string",
  "sourcePort": 0
}
```

Contains information about the IP connection associated with the finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationIp|string|false|none|Destination IP address. Not present for sockets that are listening and not connected.|
|destinationPort|integer(int32)|false|none|Destination port. Not present for sockets that are listening and not connected.|
|protocol|string|false|none|IANA Internet Protocol Number such as TCP(6) and UDP(17).|
|sourceIp|string|false|none|Source IP address.|
|sourcePort|integer(int32)|false|none|Source port.|

#### Enumerated Values

|Property|Value|
|---|---|
|protocol|PROTOCOL_UNSPECIFIED|
|protocol|ICMP|
|protocol|TCP|
|protocol|UDP|
|protocol|GRE|
|protocol|ESP|

<h2 id="tocS_Contact">Contact</h2>
<!-- backwards compatibility -->
<a id="schemacontact"></a>
<a id="schema_Contact"></a>
<a id="tocScontact"></a>
<a id="tocscontact"></a>

```json
{
  "email": "string"
}
```

The email address of a contact.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|An email address. For example, "`person123@company.com`".|

<h2 id="tocS_ContactDetails">ContactDetails</h2>
<!-- backwards compatibility -->
<a id="schemacontactdetails"></a>
<a id="schema_ContactDetails"></a>
<a id="tocScontactdetails"></a>
<a id="tocscontactdetails"></a>

```json
{
  "contacts": [
    {
      "email": "string"
    }
  ]
}
```

The details pertaining to specific contacts

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contacts|[[Contact](#schemacontact)]|false|none|A list of contacts|

<h2 id="tocS_Container">Container</h2>
<!-- backwards compatibility -->
<a id="schemacontainer"></a>
<a id="schema_Container"></a>
<a id="tocScontainer"></a>
<a id="tocscontainer"></a>

```json
{
  "imageId": "string",
  "labels": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "name": "string",
  "uri": "string"
}
```

Container associated with the finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageId|string|false|none|Optional container image id, when provided by the container runtime. Uniquely identifies the container image launched using a container image digest.|
|labels|[[Label](#schemalabel)]|false|none|Container labels, as provided by the container runtime.|
|name|string|false|none|Container name.|
|uri|string|false|none|Container image URI provided when configuring a pod/container. May identify a container image version using mutable tags.|

<h2 id="tocS_ContainerThreatDetectionSettings">ContainerThreatDetectionSettings</h2>
<!-- backwards compatibility -->
<a id="schemacontainerthreatdetectionsettings"></a>
<a id="schema_ContainerThreatDetectionSettings"></a>
<a id="tocScontainerthreatdetectionsettings"></a>
<a id="tocscontainerthreatdetectionsettings"></a>

```json
{
  "modules": {
    "property1": {
      "moduleEnablementState": "ENABLEMENT_STATE_UNSPECIFIED",
      "value": {
        "property1": null,
        "property2": null
      }
    },
    "property2": {
      "moduleEnablementState": "ENABLEMENT_STATE_UNSPECIFIED",
      "value": {
        "property1": null,
        "property2": null
      }
    }
  },
  "name": "string",
  "serviceAccount": "string",
  "serviceEnablementState": "ENABLEMENT_STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

Resource capturing the settings for the Container Threat Detection service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modules|object|false|none|The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's.|
|name|string|false|none|The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings|
|serviceAccount|string|false|read-only|Output only. The service account used by Container Threat Detection for scanning. Service accounts are scoped at the project level meaning this field will be empty at any level above a project.|
|serviceEnablementState|string|false|none|The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time the settings were last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|serviceEnablementState|ENABLEMENT_STATE_UNSPECIFIED|
|serviceEnablementState|INHERITED|
|serviceEnablementState|ENABLED|
|serviceEnablementState|DISABLED|

<h2 id="tocS_Cve">Cve</h2>
<!-- backwards compatibility -->
<a id="schemacve"></a>
<a id="schema_Cve"></a>
<a id="tocScve"></a>
<a id="tocscve"></a>

```json
{
  "cvssv3": {
    "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
    "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
    "availabilityImpact": "IMPACT_UNSPECIFIED",
    "baseScore": 0,
    "confidentialityImpact": "IMPACT_UNSPECIFIED",
    "integrityImpact": "IMPACT_UNSPECIFIED",
    "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
    "scope": "SCOPE_UNSPECIFIED",
    "userInteraction": "USER_INTERACTION_UNSPECIFIED"
  },
  "id": "string",
  "references": [
    {
      "source": "string",
      "uri": "string"
    }
  ],
  "upstreamFixAvailable": true
}
```

CVE stands for Common Vulnerabilities and Exposures. More information: https://cve.mitre.org

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cvssv3|[Cvssv3](#schemacvssv3)|false|none|Describe Common Vulnerability Scoring System specified at https://www.first.org/cvss/v3.1/specification-document|
|id|string|false|none|The unique identifier for the vulnerability. e.g. CVE-2021-34527|
|references|[[Reference](#schemareference)]|false|none|Additional information about the CVE. e.g. https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-34527|
|upstreamFixAvailable|boolean|false|none|Whether upstream fix is available for the CVE.|

<h2 id="tocS_Cvssv3">Cvssv3</h2>
<!-- backwards compatibility -->
<a id="schemacvssv3"></a>
<a id="schema_Cvssv3"></a>
<a id="tocScvssv3"></a>
<a id="tocscvssv3"></a>

```json
{
  "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
  "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
  "availabilityImpact": "IMPACT_UNSPECIFIED",
  "baseScore": 0,
  "confidentialityImpact": "IMPACT_UNSPECIFIED",
  "integrityImpact": "IMPACT_UNSPECIFIED",
  "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
  "scope": "SCOPE_UNSPECIFIED",
  "userInteraction": "USER_INTERACTION_UNSPECIFIED"
}
```

Common Vulnerability Scoring System version 3.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attackComplexity|string|false|none|This metric describes the conditions beyond the attacker's control that must exist in order to exploit the vulnerability.|
|attackVector|string|false|none|Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments. This metric reflects the context by which vulnerability exploitation is possible.|
|availabilityImpact|string|false|none|This metric measures the impact to the availability of the impacted component resulting from a successfully exploited vulnerability.|
|baseScore|number(double)|false|none|The base score is a function of the base metric scores.|
|confidentialityImpact|string|false|none|This metric measures the impact to the confidentiality of the information resources managed by a software component due to a successfully exploited vulnerability.|
|integrityImpact|string|false|none|This metric measures the impact to integrity of a successfully exploited vulnerability.|
|privilegesRequired|string|false|none|This metric describes the level of privileges an attacker must possess before successfully exploiting the vulnerability.|
|scope|string|false|none|The Scope metric captures whether a vulnerability in one vulnerable component impacts resources in components beyond its security scope.|
|userInteraction|string|false|none|This metric captures the requirement for a human user, other than the attacker, to participate in the successful compromise of the vulnerable component.|

#### Enumerated Values

|Property|Value|
|---|---|
|attackComplexity|ATTACK_COMPLEXITY_UNSPECIFIED|
|attackComplexity|ATTACK_COMPLEXITY_LOW|
|attackComplexity|ATTACK_COMPLEXITY_HIGH|
|attackVector|ATTACK_VECTOR_UNSPECIFIED|
|attackVector|ATTACK_VECTOR_NETWORK|
|attackVector|ATTACK_VECTOR_ADJACENT|
|attackVector|ATTACK_VECTOR_LOCAL|
|attackVector|ATTACK_VECTOR_PHYSICAL|
|availabilityImpact|IMPACT_UNSPECIFIED|
|availabilityImpact|IMPACT_HIGH|
|availabilityImpact|IMPACT_LOW|
|availabilityImpact|IMPACT_NONE|
|confidentialityImpact|IMPACT_UNSPECIFIED|
|confidentialityImpact|IMPACT_HIGH|
|confidentialityImpact|IMPACT_LOW|
|confidentialityImpact|IMPACT_NONE|
|integrityImpact|IMPACT_UNSPECIFIED|
|integrityImpact|IMPACT_HIGH|
|integrityImpact|IMPACT_LOW|
|integrityImpact|IMPACT_NONE|
|privilegesRequired|PRIVILEGES_REQUIRED_UNSPECIFIED|
|privilegesRequired|PRIVILEGES_REQUIRED_NONE|
|privilegesRequired|PRIVILEGES_REQUIRED_LOW|
|privilegesRequired|PRIVILEGES_REQUIRED_HIGH|
|scope|SCOPE_UNSPECIFIED|
|scope|SCOPE_UNCHANGED|
|scope|SCOPE_CHANGED|
|userInteraction|USER_INTERACTION_UNSPECIFIED|
|userInteraction|USER_INTERACTION_NONE|
|userInteraction|USER_INTERACTION_REQUIRED|

<h2 id="tocS_Database">Database</h2>
<!-- backwards compatibility -->
<a id="schemadatabase"></a>
<a id="schema_Database"></a>
<a id="tocSdatabase"></a>
<a id="tocsdatabase"></a>

```json
{
  "displayName": "string",
  "grantees": [
    "string"
  ],
  "name": "string",
  "query": "string",
  "userName": "string"
}
```

Represents database access information, such as queries. A database may be a sub-resource of an instance (as in the case of CloudSQL instances or Cloud Spanner instances), or the database instance itself. Some database resources may not have the full resource name populated because these resource types are not yet supported by Cloud Asset Inventory (e.g. CloudSQL databases). In these cases only the display name will be provided.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The human readable name of the database the user connected to.|
|grantees|[string]|false|none|The target usernames/roles/groups of a SQL privilege grant (not an IAM policy change).|
|name|string|false|none|The full resource name of the database the user connected to, if it is supported by CAI. (https://google.aip.dev/122#full-resource-names)|
|query|string|false|none|The SQL statement associated with the relevant access.|
|userName|string|false|none|The username used to connect to the DB. This may not necessarily be an IAM principal, and has no required format.|

<h2 id="tocS_Details">Details</h2>
<!-- backwards compatibility -->
<a id="schemadetails"></a>
<a id="schema_Details"></a>
<a id="tocSdetails"></a>
<a id="tocsdetails"></a>

```json
{
  "endTime": "string",
  "startTime": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

Details of a subscription.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|The time the subscription has or will end.|
|startTime|string(google-datetime)|false|none|The time the subscription has or will start.|
|type|string|false|none|The type of subscription|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|STANDARD|
|type|TRIAL|
|type|ALPHA|
|type|DEMO|
|type|PAY_AS_YOU_GO|

<h2 id="tocS_Detection">Detection</h2>
<!-- backwards compatibility -->
<a id="schemadetection"></a>
<a id="schema_Detection"></a>
<a id="tocSdetection"></a>
<a id="tocsdetection"></a>

```json
{
  "binary": "string",
  "percentPagesMatched": 0
}
```

Memory hash detection contributing to the binary family match.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|binary|string|false|none|The name of the binary associated with the memory hash signature detection.|
|percentPagesMatched|number(double)|false|none|The percentage of memory page hashes in the signature that were matched.|

<h2 id="tocS_EnvironmentVariable">EnvironmentVariable</h2>
<!-- backwards compatibility -->
<a id="schemaenvironmentvariable"></a>
<a id="schema_EnvironmentVariable"></a>
<a id="tocSenvironmentvariable"></a>
<a id="tocsenvironmentvariable"></a>

```json
{
  "name": "string",
  "val": "string"
}
```

EnvironmentVariable is a name-value pair to store environment variables for Process.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Environment variable name as a JSON encoded string.|
|val|string|false|none|Environment variable value as a JSON encoded string.|

<h2 id="tocS_EventThreatDetectionSettings">EventThreatDetectionSettings</h2>
<!-- backwards compatibility -->
<a id="schemaeventthreatdetectionsettings"></a>
<a id="schema_EventThreatDetectionSettings"></a>
<a id="tocSeventthreatdetectionsettings"></a>
<a id="tocseventthreatdetectionsettings"></a>

```json
{
  "modules": {
    "property1": {
      "moduleEnablementState": "ENABLEMENT_STATE_UNSPECIFIED",
      "value": {
        "property1": null,
        "property2": null
      }
    },
    "property2": {
      "moduleEnablementState": "ENABLEMENT_STATE_UNSPECIFIED",
      "value": {
        "property1": null,
        "property2": null
      }
    }
  },
  "name": "string",
  "serviceEnablementState": "ENABLEMENT_STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

Resource capturing the settings for the Event Threat Detection service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modules|object|false|none|The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's.|
|name|string|false|none|The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings|
|serviceEnablementState|string|false|none|The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time the settings were last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|serviceEnablementState|ENABLEMENT_STATE_UNSPECIFIED|
|serviceEnablementState|INHERITED|
|serviceEnablementState|ENABLED|
|serviceEnablementState|DISABLED|

<h2 id="tocS_ExfilResource">ExfilResource</h2>
<!-- backwards compatibility -->
<a id="schemaexfilresource"></a>
<a id="schema_ExfilResource"></a>
<a id="tocSexfilresource"></a>
<a id="tocsexfilresource"></a>

```json
{
  "components": [
    "string"
  ],
  "name": "string"
}
```

Resource that has been exfiltrated or exfiltrated_to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|components|[string]|false|none|Subcomponents of the asset that is exfiltrated - these could be URIs used during exfiltration, table names, databases, filenames, etc. For example, multiple tables may be exfiltrated from the same CloudSQL instance, or multiple files from the same Cloud Storage bucket.|
|name|string|false|none|Resource's URI (https://google.aip.dev/122#full-resource-names)|

<h2 id="tocS_Exfiltration">Exfiltration</h2>
<!-- backwards compatibility -->
<a id="schemaexfiltration"></a>
<a id="schema_Exfiltration"></a>
<a id="tocSexfiltration"></a>
<a id="tocsexfiltration"></a>

```json
{
  "sources": [
    {
      "components": [
        "string"
      ],
      "name": "string"
    }
  ],
  "targets": [
    {
      "components": [
        "string"
      ],
      "name": "string"
    }
  ]
}
```

Exfiltration represents a data exfiltration attempt of one or more sources to one or more targets. Sources represent the source of data that is exfiltrated, and Targets represents the destination the data was copied to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sources|[[ExfilResource](#schemaexfilresource)]|false|none|If there are multiple sources, then the data is considered "joined" between them. For instance, BigQuery can join multiple tables, and each table would be considered a source.|
|targets|[[ExfilResource](#schemaexfilresource)]|false|none|If there are multiple targets, each target would get a complete copy of the "joined" source data.|

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

<h2 id="tocS_File">File</h2>
<!-- backwards compatibility -->
<a id="schemafile"></a>
<a id="schema_File"></a>
<a id="tocSfile"></a>
<a id="tocsfile"></a>

```json
{
  "contents": "string",
  "hashedSize": "string",
  "partiallyHashed": true,
  "path": "string",
  "sha256": "string",
  "size": "string"
}
```

File information about the related binary/library used by an executable, or the script used by a script interpreter

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contents|string|false|none|Prefix of the file contents as a JSON encoded string. (Currently only populated for Malicious Script Executed findings.)|
|hashedSize|string(int64)|false|none|The length in bytes of the file prefix that was hashed. If hashed_size == size, any hashes reported represent the entire file.|
|partiallyHashed|boolean|false|none|True when the hash covers only a prefix of the file.|
|path|string|false|none|Absolute path of the file as a JSON encoded string.|
|sha256|string|false|none|SHA256 hash of the first hashed_size bytes of the file encoded as a hex string. If hashed_size == size, sha256 represents the SHA256 hash of the entire file.|
|size|string(int64)|false|none|Size of the file in bytes.|

<h2 id="tocS_Finding">Finding</h2>
<!-- backwards compatibility -->
<a id="schemafinding"></a>
<a id="schema_Finding"></a>
<a id="tocSfinding"></a>
<a id="tocsfinding"></a>

```json
{
  "access": {
    "callerIp": "string",
    "callerIpGeo": {
      "regionCode": "string"
    },
    "methodName": "string",
    "principalEmail": "string",
    "principalSubject": "string",
    "serviceAccountDelegationInfo": [
      {
        "principalEmail": "string",
        "principalSubject": "string"
      }
    ],
    "serviceAccountKeyName": "string",
    "serviceName": "string",
    "userAgentFamily": "string",
    "userName": "string"
  },
  "canonicalName": "string",
  "category": "string",
  "cloudDlpDataProfile": {
    "dataProfile": "string"
  },
  "cloudDlpInspection": {
    "fullScan": true,
    "infoType": "string",
    "infoTypeCount": "string",
    "inspectJob": "string"
  },
  "compliances": [
    {
      "ids": [
        "string"
      ],
      "standard": "string",
      "version": "string"
    }
  ],
  "connections": [
    {
      "destinationIp": "string",
      "destinationPort": 0,
      "protocol": "PROTOCOL_UNSPECIFIED",
      "sourceIp": "string",
      "sourcePort": 0
    }
  ],
  "contacts": {
    "property1": {
      "contacts": [
        {
          "email": "string"
        }
      ]
    },
    "property2": {
      "contacts": [
        {
          "email": "string"
        }
      ]
    }
  },
  "containers": [
    {
      "imageId": "string",
      "labels": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "name": "string",
      "uri": "string"
    }
  ],
  "createTime": "string",
  "database": {
    "displayName": "string",
    "grantees": [
      "string"
    ],
    "name": "string",
    "query": "string",
    "userName": "string"
  },
  "description": "string",
  "eventTime": "string",
  "exfiltration": {
    "sources": [
      {
        "components": [
          "string"
        ],
        "name": "string"
      }
    ],
    "targets": [
      {
        "components": [
          "string"
        ],
        "name": "string"
      }
    ]
  },
  "externalSystems": {
    "property1": {
      "assignees": [
        "string"
      ],
      "externalSystemUpdateTime": "string",
      "externalUid": "string",
      "name": "string",
      "status": "string"
    },
    "property2": {
      "assignees": [
        "string"
      ],
      "externalSystemUpdateTime": "string",
      "externalUid": "string",
      "name": "string",
      "status": "string"
    }
  },
  "externalUri": "string",
  "files": [
    {
      "contents": "string",
      "hashedSize": "string",
      "partiallyHashed": true,
      "path": "string",
      "sha256": "string",
      "size": "string"
    }
  ],
  "findingClass": "FINDING_CLASS_UNSPECIFIED",
  "iamBindings": [
    {
      "action": "ACTION_UNSPECIFIED",
      "member": "string",
      "role": "string"
    }
  ],
  "indicator": {
    "domains": [
      "string"
    ],
    "ipAddresses": [
      "string"
    ],
    "signatures": [
      {
        "memoryHashSignature": {
          "binaryFamily": "string",
          "detections": [
            {
              "binary": "string",
              "percentPagesMatched": 0
            }
          ]
        },
        "yaraRuleSignature": {
          "yaraRule": "string"
        }
      }
    ],
    "uris": [
      "string"
    ]
  },
  "kernelRootkit": {
    "name": "string",
    "unexpectedCodeModification": true,
    "unexpectedFtraceHandler": true,
    "unexpectedInterruptHandler": true,
    "unexpectedKernelCodePages": true,
    "unexpectedKprobeHandler": true,
    "unexpectedProcessesInRunqueue": true,
    "unexpectedReadOnlyDataModification": true,
    "unexpectedSystemCallHandler": true
  },
  "kubernetes": {
    "accessReviews": [
      {
        "group": "string",
        "name": "string",
        "ns": "string",
        "resource": "string",
        "subresource": "string",
        "verb": "string",
        "version": "string"
      }
    ],
    "bindings": [
      {
        "name": "string",
        "ns": "string",
        "role": {
          "kind": "KIND_UNSPECIFIED",
          "name": "string",
          "ns": "string"
        },
        "subjects": [
          {
            "kind": "AUTH_TYPE_UNSPECIFIED",
            "name": "string",
            "ns": "string"
          }
        ]
      }
    ],
    "nodePools": [
      {
        "name": "string",
        "nodes": [
          {
            "name": "string"
          }
        ]
      }
    ],
    "nodes": [
      {
        "name": "string"
      }
    ],
    "pods": [
      {
        "containers": [
          {
            "imageId": "string",
            "labels": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "name": "string",
            "uri": "string"
          }
        ],
        "labels": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "name": "string",
        "ns": "string"
      }
    ],
    "roles": [
      {
        "kind": "KIND_UNSPECIFIED",
        "name": "string",
        "ns": "string"
      }
    ]
  },
  "mitreAttack": {
    "additionalTactics": [
      "TACTIC_UNSPECIFIED"
    ],
    "additionalTechniques": [
      "TECHNIQUE_UNSPECIFIED"
    ],
    "primaryTactic": "TACTIC_UNSPECIFIED",
    "primaryTechniques": [
      "TECHNIQUE_UNSPECIFIED"
    ],
    "version": "string"
  },
  "moduleName": "string",
  "mute": "MUTE_UNSPECIFIED",
  "muteInitiator": "string",
  "muteUpdateTime": "string",
  "name": "string",
  "nextSteps": "string",
  "parent": "string",
  "parentDisplayName": "string",
  "processes": [
    {
      "args": [
        "string"
      ],
      "argumentsTruncated": true,
      "binary": {
        "contents": "string",
        "hashedSize": "string",
        "partiallyHashed": true,
        "path": "string",
        "sha256": "string",
        "size": "string"
      },
      "envVariables": [
        {
          "name": "string",
          "val": "string"
        }
      ],
      "envVariablesTruncated": true,
      "libraries": [
        {
          "contents": "string",
          "hashedSize": "string",
          "partiallyHashed": true,
          "path": "string",
          "sha256": "string",
          "size": "string"
        }
      ],
      "name": "string",
      "parentPid": "string",
      "pid": "string",
      "script": {
        "contents": "string",
        "hashedSize": "string",
        "partiallyHashed": true,
        "path": "string",
        "sha256": "string",
        "size": "string"
      }
    }
  ],
  "resourceName": "string",
  "securityMarks": {
    "canonicalName": "string",
    "marks": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string"
  },
  "severity": "SEVERITY_UNSPECIFIED",
  "sourceProperties": {
    "property1": null,
    "property2": null
  },
  "state": "STATE_UNSPECIFIED",
  "vulnerability": {
    "cve": {
      "cvssv3": {
        "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
        "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
        "availabilityImpact": "IMPACT_UNSPECIFIED",
        "baseScore": 0,
        "confidentialityImpact": "IMPACT_UNSPECIFIED",
        "integrityImpact": "IMPACT_UNSPECIFIED",
        "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
        "scope": "SCOPE_UNSPECIFIED",
        "userInteraction": "USER_INTERACTION_UNSPECIFIED"
      },
      "id": "string",
      "references": [
        {
          "source": "string",
          "uri": "string"
        }
      ],
      "upstreamFixAvailable": true
    }
  }
}
```

Security Command Center finding. A finding is a record of assessment data like security, risk, health, or privacy, that is ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, a cross-site scripting (XSS) vulnerability in an App Engine application is a finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access|[Access](#schemaaccess)|false|none|Access details associated with the finding, such as more information on the caller, which method was accessed, and from where.|
|canonicalName|string|false|none|The canonical name of the finding. It's either "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}", "folders/{folder_id}/sources/{source_id}/findings/{finding_id}" or "projects/{project_number}/sources/{source_id}/findings/{finding_id}", depending on the closest CRM ancestor of the resource associated with the finding.|
|category|string|false|none|The additional taxonomy group within findings from a given source. This field is immutable after creation time. Example: "XSS_FLASH_INJECTION"|
|cloudDlpDataProfile|[CloudDlpDataProfile](#schemaclouddlpdataprofile)|false|none|Cloud DLP data profile that is associated with the finding.|
|cloudDlpInspection|[CloudDlpInspection](#schemaclouddlpinspection)|false|none|Cloud Data Loss Prevention (Cloud DLP) inspection results that are associated with the finding.|
|compliances|[[Compliance](#schemacompliance)]|false|none|Contains compliance information for security standards associated to the finding.|
|connections|[[Connection](#schemaconnection)]|false|none|Contains information about the IP connection associated with the finding.|
|contacts|object|false|read-only|Output only. Map containing the points of contact for the given finding. The key represents the type of contact, while the value contains a list of all the contacts that pertain. Please refer to: https://cloud.google.com/resource-manager/docs/managing-notification-contacts#notification-categories { "security": { "contacts": [ { "email": "person1@company.com" }, { "email": "person2@company.com" } ] } }|
|containers|[[Container](#schemacontainer)]|false|none|Containers associated with the finding. This field provides information for both Kubernetes and non-Kubernetes containers.|
|createTime|string(google-datetime)|false|none|The time at which the finding was created in Security Command Center.|
|database|[Database](#schemadatabase)|false|none|Database associated with the finding.|
|description|string|false|none|Contains more details about the finding.|
|eventTime|string(google-datetime)|false|none|The time the finding was first detected. If an existing finding is updated, then this is the time the update occurred. For example, if the finding represents an open firewall, this property captures the time the detector believes the firewall became open. The accuracy is determined by the detector. If the finding is later resolved, then this time reflects when the finding was resolved. This must not be set to a value greater than the current timestamp.|
|exfiltration|[Exfiltration](#schemaexfiltration)|false|none|Represents exfiltrations associated with the finding.|
|externalSystems|object|false|read-only|Output only. Third party SIEM/SOAR fields within SCC, contains external system information and external system finding fields.|
|externalUri|string|false|none|The URI that, if available, points to a web page outside of Security Command Center where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL.|
|files|[[File](#schemafile)]|false|none|File associated with the finding.|
|findingClass|string|false|none|The class of the finding.|
|iamBindings|[[IamBinding](#schemaiambinding)]|false|none|Represents IAM bindings associated with the finding.|
|indicator|[Indicator](#schemaindicator)|false|none|Represents what's commonly known as an *indicator of compromise* (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion. For more information, see [Indicator of compromise](https://en.wikipedia.org/wiki/Indicator_of_compromise).|
|kernelRootkit|[KernelRootkit](#schemakernelrootkit)|false|none|Signature of the kernel rootkit.|
|kubernetes|[Kubernetes](#schemakubernetes)|false|none|Kubernetes resources associated with the finding.|
|mitreAttack|[MitreAttack](#schemamitreattack)|false|none|MITRE ATT&CK tactics and techniques related to this finding. See: https://attack.mitre.org|
|moduleName|string|false|none|Unique identifier of the module which generated the finding. Example: folders/598186756061/securityHealthAnalyticsSettings/customModules/56799441161885|
|mute|string|false|none|Indicates the mute state of a finding (either muted, unmuted or undefined). Unlike other attributes of a finding, a finding provider shouldn't set the value of mute.|
|muteInitiator|string|false|none|Records additional information about the mute operation, for example, the [mute configuration](/security-command-center/docs/how-to-mute-findings) that muted the finding and the user who muted the finding.|
|muteUpdateTime|string(google-datetime)|false|read-only|Output only. The most recent time this finding was muted or unmuted.|
|name|string|false|none|The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}", "folders/{folder_id}/sources/{source_id}/findings/{finding_id}", "projects/{project_id}/sources/{source_id}/findings/{finding_id}".|
|nextSteps|string|false|none|Steps to address the finding.|
|parent|string|false|none|The relative resource name of the source the finding belongs to. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name This field is immutable after creation time. For example: "organizations/{organization_id}/sources/{source_id}"|
|parentDisplayName|string|false|read-only|Output only. The human readable display name of the finding source such as "Event Threat Detection" or "Security Health Analytics".|
|processes|[[Process](#schemaprocess)]|false|none|Represents operating system processes associated with the Finding.|
|resourceName|string|false|none|For findings on Google Cloud resources, the full resource name of the Google Cloud resource this finding is for. See: https://cloud.google.com/apis/design/resource_names#full_resource_name When the finding is for a non-Google Cloud resource, the resourceName can be a customer or partner defined string. This field is immutable after creation time.|
|securityMarks|[SecurityMarks](#schemasecuritymarks)|false|none|Output only. User specified security marks. These marks are entirely managed by the user and come from the SecurityMarks resource that belongs to the finding.|
|severity|string|false|none|The severity of the finding. This field is managed by the source that writes the finding.|
|sourceProperties|object|false|none|Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only.|
|state|string|false|none|The state of the finding.|
|vulnerability|[Vulnerability](#schemavulnerability)|false|none|Represents vulnerability-specific fields like CVE and CVSS scores. CVE stands for Common Vulnerabilities and Exposures (https://cve.mitre.org/about/)|

#### Enumerated Values

|Property|Value|
|---|---|
|findingClass|FINDING_CLASS_UNSPECIFIED|
|findingClass|THREAT|
|findingClass|VULNERABILITY|
|findingClass|MISCONFIGURATION|
|findingClass|OBSERVATION|
|findingClass|SCC_ERROR|
|mute|MUTE_UNSPECIFIED|
|mute|MUTED|
|mute|UNMUTED|
|mute|UNDEFINED|
|severity|SEVERITY_UNSPECIFIED|
|severity|CRITICAL|
|severity|HIGH|
|severity|MEDIUM|
|severity|LOW|
|state|STATE_UNSPECIFIED|
|state|ACTIVE|
|state|INACTIVE|

<h2 id="tocS_Folder">Folder</h2>
<!-- backwards compatibility -->
<a id="schemafolder"></a>
<a id="schema_Folder"></a>
<a id="tocSfolder"></a>
<a id="tocsfolder"></a>

```json
{
  "resourceFolder": "string",
  "resourceFolderDisplayName": "string"
}
```

Message that contains the resource name and display name of a folder resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceFolder|string|false|none|Full resource name of this folder. See: https://cloud.google.com/apis/design/resource_names#full_resource_name|
|resourceFolderDisplayName|string|false|none|The user defined display name for this folder.|

<h2 id="tocS_Geolocation">Geolocation</h2>
<!-- backwards compatibility -->
<a id="schemageolocation"></a>
<a id="schema_Geolocation"></a>
<a id="tocSgeolocation"></a>
<a id="tocsgeolocation"></a>

```json
{
  "regionCode": "string"
}
```

Represents a geographical location for a given access.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|regionCode|string|false|none|A CLDR.|

<h2 id="tocS_GoogleCloudSecuritycenterV1BigQueryExport">GoogleCloudSecuritycenterV1BigQueryExport</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsecuritycenterv1bigqueryexport"></a>
<a id="schema_GoogleCloudSecuritycenterV1BigQueryExport"></a>
<a id="tocSgooglecloudsecuritycenterv1bigqueryexport"></a>
<a id="tocsgooglecloudsecuritycenterv1bigqueryexport"></a>

```json
{
  "createTime": "string",
  "dataset": "string",
  "description": "string",
  "filter": "string",
  "mostRecentEditor": "string",
  "name": "string",
  "principal": "string",
  "updateTime": "string"
}
```

Configures how to deliver Findings to BigQuery Instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time at which the BigQuery export was created. This field is set by the server and will be ignored if provided on export on creation.|
|dataset|string|false|none|The dataset to write findings' updates to. Its format is "projects/[project_id]/datasets/[bigquery_dataset_id]". BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_).|
|description|string|false|none|The description of the export (max of 1024 characters).|
|filter|string|false|none|Expression that defines the filter to apply across create/update events of findings. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the corresponding resource. The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes.|
|mostRecentEditor|string|false|read-only|Output only. Email address of the user who last edited the BigQuery export. This field is set by the server and will be ignored if provided on export creation or update.|
|name|string|false|none|The relative resource name of this export. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name. Example format: "organizations/{organization_id}/bigQueryExports/{export_id}" Example format: "folders/{folder_id}/bigQueryExports/{export_id}" Example format: "projects/{project_id}/bigQueryExports/{export_id}" This field is provided in responses, and is ignored when provided in create requests.|
|principal|string|false|read-only|Output only. The service account that needs permission to create table and upload data to the BigQuery dataset.|
|updateTime|string(google-datetime)|false|read-only|Output only. The most recent time at which the BigQuery export was updated. This field is set by the server and will be ignored if provided on export creation or update.|

<h2 id="tocS_GoogleCloudSecuritycenterV1Binding">GoogleCloudSecuritycenterV1Binding</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsecuritycenterv1binding"></a>
<a id="schema_GoogleCloudSecuritycenterV1Binding"></a>
<a id="tocSgooglecloudsecuritycenterv1binding"></a>
<a id="tocsgooglecloudsecuritycenterv1binding"></a>

```json
{
  "name": "string",
  "ns": "string",
  "role": {
    "kind": "KIND_UNSPECIFIED",
    "name": "string",
    "ns": "string"
  },
  "subjects": [
    {
      "kind": "AUTH_TYPE_UNSPECIFIED",
      "name": "string",
      "ns": "string"
    }
  ]
}
```

Represents a Kubernetes RoleBinding or ClusterRoleBinding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name for binding.|
|ns|string|false|none|Namespace for binding.|
|role|[Role](#schemarole)|false|none|The Role or ClusterRole referenced by the binding.|
|subjects|[[Subject](#schemasubject)]|false|none|Represents one or more subjects that are bound to the role. Not always available for PATCH requests.|

<h2 id="tocS_GoogleCloudSecuritycenterV1BulkMuteFindingsResponse">GoogleCloudSecuritycenterV1BulkMuteFindingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsecuritycenterv1bulkmutefindingsresponse"></a>
<a id="schema_GoogleCloudSecuritycenterV1BulkMuteFindingsResponse"></a>
<a id="tocSgooglecloudsecuritycenterv1bulkmutefindingsresponse"></a>
<a id="tocsgooglecloudsecuritycenterv1bulkmutefindingsresponse"></a>

```json
{}
```

The response to a BulkMute request. Contains the LRO information.

<h2 id="tocS_GoogleCloudSecuritycenterV1CustomConfig">GoogleCloudSecuritycenterV1CustomConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsecuritycenterv1customconfig"></a>
<a id="schema_GoogleCloudSecuritycenterV1CustomConfig"></a>
<a id="tocSgooglecloudsecuritycenterv1customconfig"></a>
<a id="tocsgooglecloudsecuritycenterv1customconfig"></a>

```json
{
  "customOutput": {
    "properties": [
      {
        "name": "string",
        "valueExpression": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        }
      }
    ]
  },
  "description": "string",
  "predicate": {
    "description": "string",
    "expression": "string",
    "location": "string",
    "title": "string"
  },
  "recommendation": "string",
  "resourceSelector": {
    "resourceTypes": [
      "string"
    ]
  },
  "severity": "SEVERITY_UNSPECIFIED"
}
```

Defines the properties in a custom module configuration for Security Health Analytics. Use the custom module configuration to create custom detectors that generate custom findings for resources that you specify.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customOutput|[GoogleCloudSecuritycenterV1CustomOutputSpec](#schemagooglecloudsecuritycenterv1customoutputspec)|false|none|Custom output properties.|
|description|string|false|none|Text that describes the vulnerability or misconfiguration that the custom module detects. This explanation is returned with each finding instance to help investigators understand the detected issue. The text must be enclosed in quotation marks.|
|predicate|[Expr](#schemaexpr)|false|none|The CEL expression to evaluate to produce findings. When the expression evaluates to true against a resource, a finding is generated.|
|recommendation|string|false|none|An explanation of the recommended steps that security teams can take to resolve the detected issue. This explanation is returned with each finding generated by this module in the `nextSteps` property of the finding JSON.|
|resourceSelector|[GoogleCloudSecuritycenterV1ResourceSelector](#schemagooglecloudsecuritycenterv1resourceselector)|false|none|The resource types that the custom module operates on. Each custom module can specify up to 5 resource types.|
|severity|string|false|none|The severity to assign to findings generated by the module.|

#### Enumerated Values

|Property|Value|
|---|---|
|severity|SEVERITY_UNSPECIFIED|
|severity|CRITICAL|
|severity|HIGH|
|severity|MEDIUM|
|severity|LOW|

<h2 id="tocS_GoogleCloudSecuritycenterV1CustomOutputSpec">GoogleCloudSecuritycenterV1CustomOutputSpec</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsecuritycenterv1customoutputspec"></a>
<a id="schema_GoogleCloudSecuritycenterV1CustomOutputSpec"></a>
<a id="tocSgooglecloudsecuritycenterv1customoutputspec"></a>
<a id="tocsgooglecloudsecuritycenterv1customoutputspec"></a>

```json
{
  "properties": [
    {
      "name": "string",
      "valueExpression": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      }
    }
  ]
}
```

A set of optional name-value pairs that define custom source properties to return with each finding that is generated by the custom module. The custom source properties that are defined here are included in the finding JSON under `sourceProperties`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|properties|[[GoogleCloudSecuritycenterV1Property](#schemagooglecloudsecuritycenterv1property)]|false|none|A list of custom output properties to add to the finding.|

<h2 id="tocS_GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule">GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsecuritycenterv1effectivesecurityhealthanalyticscustommodule"></a>
<a id="schema_GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule"></a>
<a id="tocSgooglecloudsecuritycenterv1effectivesecurityhealthanalyticscustommodule"></a>
<a id="tocsgooglecloudsecuritycenterv1effectivesecurityhealthanalyticscustommodule"></a>

```json
{
  "customConfig": {
    "customOutput": {
      "properties": [
        {
          "name": "string",
          "valueExpression": {
            "description": "string",
            "expression": "string",
            "location": "string",
            "title": "string"
          }
        }
      ]
    },
    "description": "string",
    "predicate": {
      "description": "string",
      "expression": "string",
      "location": "string",
      "title": "string"
    },
    "recommendation": "string",
    "resourceSelector": {
      "resourceTypes": [
        "string"
      ]
    },
    "severity": "SEVERITY_UNSPECIFIED"
  },
  "displayName": "string",
  "enablementState": "ENABLEMENT_STATE_UNSPECIFIED",
  "name": "string"
}
```

An EffectiveSecurityHealthAnalyticsCustomModule is the representation of a Security Health Analytics custom module at a specified level of the resource hierarchy: organization, folder, or project. If a custom module is inherited from a parent organization or folder, the value of the `enablementState` property in EffectiveSecurityHealthAnalyticsCustomModule is set to the value that is effective in the parent, instead of `INHERITED`. For example, if the module is enabled in a parent organization or folder, the effective enablement_state for the module in all child folders or projects is also `enabled`. EffectiveSecurityHealthAnalyticsCustomModule is read-only.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customConfig|[GoogleCloudSecuritycenterV1CustomConfig](#schemagooglecloudsecuritycenterv1customconfig)|false|none|Output only. The user-specified configuration for the module.|
|displayName|string|false|read-only|Output only. The display name for the custom module. The name must be between 1 and 128 characters, start with a lowercase letter, and contain alphanumeric characters or underscores only.|
|enablementState|string|false|read-only|Output only. The effective state of enablement for the module at the given level of the hierarchy.|
|name|string|false|read-only|Output only. The resource name of the custom module. Its format is "organizations/{organization}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}", or "folders/{folder}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}", or "projects/{project}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}"|

#### Enumerated Values

|Property|Value|
|---|---|
|enablementState|ENABLEMENT_STATE_UNSPECIFIED|
|enablementState|ENABLED|
|enablementState|DISABLED|

<h2 id="tocS_GoogleCloudSecuritycenterV1ExternalSystem">GoogleCloudSecuritycenterV1ExternalSystem</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsecuritycenterv1externalsystem"></a>
<a id="schema_GoogleCloudSecuritycenterV1ExternalSystem"></a>
<a id="tocSgooglecloudsecuritycenterv1externalsystem"></a>
<a id="tocsgooglecloudsecuritycenterv1externalsystem"></a>

```json
{
  "assignees": [
    "string"
  ],
  "externalSystemUpdateTime": "string",
  "externalUid": "string",
  "name": "string",
  "status": "string"
}
```

Representation of third party SIEM/SOAR fields within SCC.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assignees|[string]|false|none|References primary/secondary etc assignees in the external system.|
|externalSystemUpdateTime|string(google-datetime)|false|none|The most recent time when the corresponding finding's ticket/tracker was updated in the external system.|
|externalUid|string|false|none|Identifier that's used to track the given finding in the external system.|
|name|string|false|none|Full resource name of the external system, for example: "organizations/1234/sources/5678/findings/123456/externalSystems/jira", "folders/1234/sources/5678/findings/123456/externalSystems/jira", "projects/1234/sources/5678/findings/123456/externalSystems/jira"|
|status|string|false|none|Most recent status of the corresponding finding's ticket/tracker in the external system.|

<h2 id="tocS_GoogleCloudSecuritycenterV1MuteConfig">GoogleCloudSecuritycenterV1MuteConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsecuritycenterv1muteconfig"></a>
<a id="schema_GoogleCloudSecuritycenterV1MuteConfig"></a>
<a id="tocSgooglecloudsecuritycenterv1muteconfig"></a>
<a id="tocsgooglecloudsecuritycenterv1muteconfig"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "displayName": "string",
  "filter": "string",
  "mostRecentEditor": "string",
  "name": "string",
  "updateTime": "string"
}
```

A mute config is a Cloud SCC resource that contains the configuration to mute create/update events of findings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time at which the mute config was created. This field is set by the server and will be ignored if provided on config creation.|
|description|string|false|none|A description of the mute config.|
|displayName|string|false|none|The human readable name to be displayed for the mute config.|
|filter|string|false|none|Required. An expression that defines the filter to apply across create/update events of findings. While creating a filter string, be mindful of the scope in which the mute configuration is being created. E.g., If a filter contains project = X but is created under the project = Y scope, it might not match any findings. The following field and operator combinations are supported: * severity: `=`, `:` * category: `=`, `:` * resource.name: `=`, `:` * resource.project_name: `=`, `:` * resource.project_display_name: `=`, `:` * resource.folders.resource_folder: `=`, `:` * resource.parent_name: `=`, `:` * resource.parent_display_name: `=`, `:` * resource.type: `=`, `:` * finding_class: `=`, `:` * indicator.ip_addresses: `=`, `:` * indicator.domains: `=`, `:`|
|mostRecentEditor|string|false|read-only|Output only. Email address of the user who last edited the mute config. This field is set by the server and will be ignored if provided on config creation or update.|
|name|string|false|none|This field will be ignored if provided on config creation. Format "organizations/{organization}/muteConfigs/{mute_config}" "folders/{folder}/muteConfigs/{mute_config}" "projects/{project}/muteConfigs/{mute_config}"|
|updateTime|string(google-datetime)|false|read-only|Output only. The most recent time at which the mute config was updated. This field is set by the server and will be ignored if provided on config creation or update.|

<h2 id="tocS_GoogleCloudSecuritycenterV1NotificationMessage">GoogleCloudSecuritycenterV1NotificationMessage</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsecuritycenterv1notificationmessage"></a>
<a id="schema_GoogleCloudSecuritycenterV1NotificationMessage"></a>
<a id="tocSgooglecloudsecuritycenterv1notificationmessage"></a>
<a id="tocsgooglecloudsecuritycenterv1notificationmessage"></a>

```json
{
  "finding": {
    "access": {
      "callerIp": "string",
      "callerIpGeo": {
        "regionCode": "string"
      },
      "methodName": "string",
      "principalEmail": "string",
      "principalSubject": "string",
      "serviceAccountDelegationInfo": [
        {
          "principalEmail": "string",
          "principalSubject": "string"
        }
      ],
      "serviceAccountKeyName": "string",
      "serviceName": "string",
      "userAgentFamily": "string",
      "userName": "string"
    },
    "canonicalName": "string",
    "category": "string",
    "cloudDlpDataProfile": {
      "dataProfile": "string"
    },
    "cloudDlpInspection": {
      "fullScan": true,
      "infoType": "string",
      "infoTypeCount": "string",
      "inspectJob": "string"
    },
    "compliances": [
      {
        "ids": [
          "string"
        ],
        "standard": "string",
        "version": "string"
      }
    ],
    "connections": [
      {
        "destinationIp": "string",
        "destinationPort": 0,
        "protocol": "PROTOCOL_UNSPECIFIED",
        "sourceIp": "string",
        "sourcePort": 0
      }
    ],
    "contacts": {
      "property1": {
        "contacts": [
          {
            "email": "string"
          }
        ]
      },
      "property2": {
        "contacts": [
          {
            "email": "string"
          }
        ]
      }
    },
    "containers": [
      {
        "imageId": "string",
        "labels": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "name": "string",
        "uri": "string"
      }
    ],
    "createTime": "string",
    "database": {
      "displayName": "string",
      "grantees": [
        "string"
      ],
      "name": "string",
      "query": "string",
      "userName": "string"
    },
    "description": "string",
    "eventTime": "string",
    "exfiltration": {
      "sources": [
        {
          "components": [
            "string"
          ],
          "name": "string"
        }
      ],
      "targets": [
        {
          "components": [
            "string"
          ],
          "name": "string"
        }
      ]
    },
    "externalSystems": {
      "property1": {
        "assignees": [
          "string"
        ],
        "externalSystemUpdateTime": "string",
        "externalUid": "string",
        "name": "string",
        "status": "string"
      },
      "property2": {
        "assignees": [
          "string"
        ],
        "externalSystemUpdateTime": "string",
        "externalUid": "string",
        "name": "string",
        "status": "string"
      }
    },
    "externalUri": "string",
    "files": [
      {
        "contents": "string",
        "hashedSize": "string",
        "partiallyHashed": true,
        "path": "string",
        "sha256": "string",
        "size": "string"
      }
    ],
    "findingClass": "FINDING_CLASS_UNSPECIFIED",
    "iamBindings": [
      {
        "action": "ACTION_UNSPECIFIED",
        "member": "string",
        "role": "string"
      }
    ],
    "indicator": {
      "domains": [
        "string"
      ],
      "ipAddresses": [
        "string"
      ],
      "signatures": [
        {
          "memoryHashSignature": {
            "binaryFamily": "string",
            "detections": [
              {
                "binary": "string",
                "percentPagesMatched": 0
              }
            ]
          },
          "yaraRuleSignature": {
            "yaraRule": "string"
          }
        }
      ],
      "uris": [
        "string"
      ]
    },
    "kernelRootkit": {
      "name": "string",
      "unexpectedCodeModification": true,
      "unexpectedFtraceHandler": true,
      "unexpectedInterruptHandler": true,
      "unexpectedKernelCodePages": true,
      "unexpectedKprobeHandler": true,
      "unexpectedProcessesInRunqueue": true,
      "unexpectedReadOnlyDataModification": true,
      "unexpectedSystemCallHandler": true
    },
    "kubernetes": {
      "accessReviews": [
        {
          "group": "string",
          "name": "string",
          "ns": "string",
          "resource": "string",
          "subresource": "string",
          "verb": "string",
          "version": "string"
        }
      ],
      "bindings": [
        {
          "name": "string",
          "ns": "string",
          "role": {
            "kind": "KIND_UNSPECIFIED",
            "name": "string",
            "ns": "string"
          },
          "subjects": [
            {
              "kind": "AUTH_TYPE_UNSPECIFIED",
              "name": "string",
              "ns": "string"
            }
          ]
        }
      ],
      "nodePools": [
        {
          "name": "string",
          "nodes": [
            {
              "name": "string"
            }
          ]
        }
      ],
      "nodes": [
        {
          "name": "string"
        }
      ],
      "pods": [
        {
          "containers": [
            {
              "imageId": "string",
              "labels": [
                {
                  "name": "string",
                  "value": "string"
                }
              ],
              "name": "string",
              "uri": "string"
            }
          ],
          "labels": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "name": "string",
          "ns": "string"
        }
      ],
      "roles": [
        {
          "kind": "KIND_UNSPECIFIED",
          "name": "string",
          "ns": "string"
        }
      ]
    },
    "mitreAttack": {
      "additionalTactics": [
        "TACTIC_UNSPECIFIED"
      ],
      "additionalTechniques": [
        "TECHNIQUE_UNSPECIFIED"
      ],
      "primaryTactic": "TACTIC_UNSPECIFIED",
      "primaryTechniques": [
        "TECHNIQUE_UNSPECIFIED"
      ],
      "version": "string"
    },
    "moduleName": "string",
    "mute": "MUTE_UNSPECIFIED",
    "muteInitiator": "string",
    "muteUpdateTime": "string",
    "name": "string",
    "nextSteps": "string",
    "parent": "string",
    "parentDisplayName": "string",
    "processes": [
      {
        "args": [
          "string"
        ],
        "argumentsTruncated": true,
        "binary": {
          "contents": "string",
          "hashedSize": "string",
          "partiallyHashed": true,
          "path": "string",
          "sha256": "string",
          "size": "string"
        },
        "envVariables": [
          {
            "name": "string",
            "val": "string"
          }
        ],
        "envVariablesTruncated": true,
        "libraries": [
          {
            "contents": "string",
            "hashedSize": "string",
            "partiallyHashed": true,
            "path": "string",
            "sha256": "string",
            "size": "string"
          }
        ],
        "name": "string",
        "parentPid": "string",
        "pid": "string",
        "script": {
          "contents": "string",
          "hashedSize": "string",
          "partiallyHashed": true,
          "path": "string",
          "sha256": "string",
          "size": "string"
        }
      }
    ],
    "resourceName": "string",
    "securityMarks": {
      "canonicalName": "string",
      "marks": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string"
    },
    "severity": "SEVERITY_UNSPECIFIED",
    "sourceProperties": {
      "property1": null,
      "property2": null
    },
    "state": "STATE_UNSPECIFIED",
    "vulnerability": {
      "cve": {
        "cvssv3": {
          "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
          "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
          "availabilityImpact": "IMPACT_UNSPECIFIED",
          "baseScore": 0,
          "confidentialityImpact": "IMPACT_UNSPECIFIED",
          "integrityImpact": "IMPACT_UNSPECIFIED",
          "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
          "scope": "SCOPE_UNSPECIFIED",
          "userInteraction": "USER_INTERACTION_UNSPECIFIED"
        },
        "id": "string",
        "references": [
          {
            "source": "string",
            "uri": "string"
          }
        ],
        "upstreamFixAvailable": true
      }
    }
  },
  "notificationConfigName": "string",
  "resource": {
    "displayName": "string",
    "folders": [
      {
        "resourceFolder": "string",
        "resourceFolderDisplayName": "string"
      }
    ],
    "name": "string",
    "parent": "string",
    "parentDisplayName": "string",
    "project": "string",
    "projectDisplayName": "string",
    "type": "string"
  }
}
```

Cloud SCC's Notification

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|finding|[Finding](#schemafinding)|false|none|If it's a Finding based notification config, this field will be populated.|
|notificationConfigName|string|false|none|Name of the notification config that generated current notification.|
|resource|[GoogleCloudSecuritycenterV1Resource](#schemagooglecloudsecuritycenterv1resource)|false|none|The Cloud resource tied to this notification's Finding.|

<h2 id="tocS_GoogleCloudSecuritycenterV1Property">GoogleCloudSecuritycenterV1Property</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsecuritycenterv1property"></a>
<a id="schema_GoogleCloudSecuritycenterV1Property"></a>
<a id="tocSgooglecloudsecuritycenterv1property"></a>
<a id="tocsgooglecloudsecuritycenterv1property"></a>

```json
{
  "name": "string",
  "valueExpression": {
    "description": "string",
    "expression": "string",
    "location": "string",
    "title": "string"
  }
}
```

An individual name-value pair that defines a custom source property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the property for the custom output.|
|valueExpression|[Expr](#schemaexpr)|false|none|The CEL expression for the custom output. A resource property can be specified to return the value of the property or a text string enclosed in quotation marks.|

<h2 id="tocS_GoogleCloudSecuritycenterV1Resource">GoogleCloudSecuritycenterV1Resource</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsecuritycenterv1resource"></a>
<a id="schema_GoogleCloudSecuritycenterV1Resource"></a>
<a id="tocSgooglecloudsecuritycenterv1resource"></a>
<a id="tocsgooglecloudsecuritycenterv1resource"></a>

```json
{
  "displayName": "string",
  "folders": [
    {
      "resourceFolder": "string",
      "resourceFolderDisplayName": "string"
    }
  ],
  "name": "string",
  "parent": "string",
  "parentDisplayName": "string",
  "project": "string",
  "projectDisplayName": "string",
  "type": "string"
}
```

Information related to the Google Cloud resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The human readable name of the resource.|
|folders|[[Folder](#schemafolder)]|false|read-only|Output only. Contains a Folder message for each folder in the assets ancestry. The first folder is the deepest nested folder, and the last folder is the folder directly under the Organization.|
|name|string|false|none|The full resource name of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name|
|parent|string|false|none|The full resource name of resource's parent.|
|parentDisplayName|string|false|none|The human readable name of resource's parent.|
|project|string|false|none|The full resource name of project that the resource belongs to.|
|projectDisplayName|string|false|none|The project ID that the resource belongs to.|
|type|string|false|none|The full resource type of the resource.|

<h2 id="tocS_GoogleCloudSecuritycenterV1ResourceSelector">GoogleCloudSecuritycenterV1ResourceSelector</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsecuritycenterv1resourceselector"></a>
<a id="schema_GoogleCloudSecuritycenterV1ResourceSelector"></a>
<a id="tocSgooglecloudsecuritycenterv1resourceselector"></a>
<a id="tocsgooglecloudsecuritycenterv1resourceselector"></a>

```json
{
  "resourceTypes": [
    "string"
  ]
}
```

Resource for selecting resource type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceTypes|[string]|false|none|The resource types to run the detector on.|

<h2 id="tocS_GoogleCloudSecuritycenterV1RunAssetDiscoveryResponse">GoogleCloudSecuritycenterV1RunAssetDiscoveryResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsecuritycenterv1runassetdiscoveryresponse"></a>
<a id="schema_GoogleCloudSecuritycenterV1RunAssetDiscoveryResponse"></a>
<a id="tocSgooglecloudsecuritycenterv1runassetdiscoveryresponse"></a>
<a id="tocsgooglecloudsecuritycenterv1runassetdiscoveryresponse"></a>

```json
{
  "duration": "string",
  "state": "STATE_UNSPECIFIED"
}
```

Response of asset discovery run

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duration|string(google-duration)|false|none|The duration between asset discovery run start and end|
|state|string|false|none|The state of an asset discovery run.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|COMPLETED|
|state|SUPERSEDED|
|state|TERMINATED|

<h2 id="tocS_GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule">GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsecuritycenterv1securityhealthanalyticscustommodule"></a>
<a id="schema_GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule"></a>
<a id="tocSgooglecloudsecuritycenterv1securityhealthanalyticscustommodule"></a>
<a id="tocsgooglecloudsecuritycenterv1securityhealthanalyticscustommodule"></a>

```json
{
  "ancestorModule": "string",
  "customConfig": {
    "customOutput": {
      "properties": [
        {
          "name": "string",
          "valueExpression": {
            "description": "string",
            "expression": "string",
            "location": "string",
            "title": "string"
          }
        }
      ]
    },
    "description": "string",
    "predicate": {
      "description": "string",
      "expression": "string",
      "location": "string",
      "title": "string"
    },
    "recommendation": "string",
    "resourceSelector": {
      "resourceTypes": [
        "string"
      ]
    },
    "severity": "SEVERITY_UNSPECIFIED"
  },
  "displayName": "string",
  "enablementState": "ENABLEMENT_STATE_UNSPECIFIED",
  "lastEditor": "string",
  "name": "string",
  "updateTime": "string"
}
```

Represents an instance of a Security Health Analytics custom module, including its full module name, display name, enablement state, and last updated time. You can create a custom module at the organization, folder, or project level. Custom modules that you create at the organization or folder level are inherited by the child folders and projects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ancestorModule|string|false|read-only|Output only. If empty, indicates that the custom module was created in the organization, folder, or project in which you are viewing the custom module. Otherwise, `ancestor_module` specifies the organization or folder from which the custom module is inherited.|
|customConfig|[GoogleCloudSecuritycenterV1CustomConfig](#schemagooglecloudsecuritycenterv1customconfig)|false|none|The user specified custom configuration for the module.|
|displayName|string|false|none|The display name of the Security Health Analytics custom module. This display name becomes the finding category for all findings that are returned by this custom module. The display name must be between 1 and 128 characters, start with a lowercase letter, and contain alphanumeric characters or underscores only.|
|enablementState|string|false|none|The enablement state of the custom module.|
|lastEditor|string|false|read-only|Output only. The editor that last updated the custom module.|
|name|string|false|none|Immutable. The resource name of the custom module. Its format is "organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}", or "folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}", or "projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}" The id {customModule} is server-generated and is not user settable. It will be a numeric id containing 1-20 digits.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time at which the custom module was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|enablementState|ENABLEMENT_STATE_UNSPECIFIED|
|enablementState|ENABLED|
|enablementState|DISABLED|
|enablementState|INHERITED|

<h2 id="tocS_GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse">GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsecuritycenterv1beta1runassetdiscoveryresponse"></a>
<a id="schema_GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse"></a>
<a id="tocSgooglecloudsecuritycenterv1beta1runassetdiscoveryresponse"></a>
<a id="tocsgooglecloudsecuritycenterv1beta1runassetdiscoveryresponse"></a>

```json
{
  "duration": "string",
  "state": "STATE_UNSPECIFIED"
}
```

Response of asset discovery run

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duration|string(google-duration)|false|none|The duration between asset discovery run start and end|
|state|string|false|none|The state of an asset discovery run.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|COMPLETED|
|state|SUPERSEDED|
|state|TERMINATED|

<h2 id="tocS_GoogleCloudSecuritycenterV1p1beta1Finding">GoogleCloudSecuritycenterV1p1beta1Finding</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsecuritycenterv1p1beta1finding"></a>
<a id="schema_GoogleCloudSecuritycenterV1p1beta1Finding"></a>
<a id="tocSgooglecloudsecuritycenterv1p1beta1finding"></a>
<a id="tocsgooglecloudsecuritycenterv1p1beta1finding"></a>

```json
{
  "canonicalName": "string",
  "category": "string",
  "createTime": "string",
  "eventTime": "string",
  "externalUri": "string",
  "name": "string",
  "parent": "string",
  "resourceName": "string",
  "securityMarks": {
    "canonicalName": "string",
    "marks": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string"
  },
  "severity": "SEVERITY_UNSPECIFIED",
  "sourceProperties": {
    "property1": null,
    "property2": null
  },
  "state": "STATE_UNSPECIFIED"
}
```

Security Command Center finding. A finding is a record of assessment data (security, risk, health or privacy) ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, an XSS vulnerability in an App Engine application is a finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canonicalName|string|false|none|The canonical name of the finding. It's either "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}", "folders/{folder_id}/sources/{source_id}/findings/{finding_id}" or "projects/{project_number}/sources/{source_id}/findings/{finding_id}", depending on the closest CRM ancestor of the resource associated with the finding.|
|category|string|false|none|The additional taxonomy group within findings from a given source. This field is immutable after creation time. Example: "XSS_FLASH_INJECTION"|
|createTime|string(google-datetime)|false|none|The time at which the finding was created in Security Command Center.|
|eventTime|string(google-datetime)|false|none|The time at which the event took place, or when an update to the finding occurred. For example, if the finding represents an open firewall it would capture the time the detector believes the firewall became open. The accuracy is determined by the detector. If the finding were to be resolved afterward, this time would reflect when the finding was resolved. Must not be set to a value greater than the current timestamp.|
|externalUri|string|false|none|The URI that, if available, points to a web page outside of Security Command Center where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL.|
|name|string|false|none|The relative resource name of this finding. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}"|
|parent|string|false|none|The relative resource name of the source the finding belongs to. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name This field is immutable after creation time. For example: "organizations/{organization_id}/sources/{source_id}"|
|resourceName|string|false|none|For findings on Google Cloud resources, the full resource name of the Google Cloud resource this finding is for. See: https://cloud.google.com/apis/design/resource_names#full_resource_name When the finding is for a non-Google Cloud resource, the resourceName can be a customer or partner defined string. This field is immutable after creation time.|
|securityMarks|[GoogleCloudSecuritycenterV1p1beta1SecurityMarks](#schemagooglecloudsecuritycenterv1p1beta1securitymarks)|false|none|Output only. User specified security marks. These marks are entirely managed by the user and come from the SecurityMarks resource that belongs to the finding.|
|severity|string|false|none|The severity of the finding. This field is managed by the source that writes the finding.|
|sourceProperties|object|false|none|Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only.|
|state|string|false|none|The state of the finding.|

#### Enumerated Values

|Property|Value|
|---|---|
|severity|SEVERITY_UNSPECIFIED|
|severity|CRITICAL|
|severity|HIGH|
|severity|MEDIUM|
|severity|LOW|
|state|STATE_UNSPECIFIED|
|state|ACTIVE|
|state|INACTIVE|

<h2 id="tocS_GoogleCloudSecuritycenterV1p1beta1Folder">GoogleCloudSecuritycenterV1p1beta1Folder</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsecuritycenterv1p1beta1folder"></a>
<a id="schema_GoogleCloudSecuritycenterV1p1beta1Folder"></a>
<a id="tocSgooglecloudsecuritycenterv1p1beta1folder"></a>
<a id="tocsgooglecloudsecuritycenterv1p1beta1folder"></a>

```json
{
  "resourceFolder": "string",
  "resourceFolderDisplayName": "string"
}
```

Message that contains the resource name and display name of a folder resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceFolder|string|false|none|Full resource name of this folder. See: https://cloud.google.com/apis/design/resource_names#full_resource_name|
|resourceFolderDisplayName|string|false|none|The user defined display name for this folder.|

<h2 id="tocS_GoogleCloudSecuritycenterV1p1beta1NotificationMessage">GoogleCloudSecuritycenterV1p1beta1NotificationMessage</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsecuritycenterv1p1beta1notificationmessage"></a>
<a id="schema_GoogleCloudSecuritycenterV1p1beta1NotificationMessage"></a>
<a id="tocSgooglecloudsecuritycenterv1p1beta1notificationmessage"></a>
<a id="tocsgooglecloudsecuritycenterv1p1beta1notificationmessage"></a>

```json
{
  "finding": {
    "canonicalName": "string",
    "category": "string",
    "createTime": "string",
    "eventTime": "string",
    "externalUri": "string",
    "name": "string",
    "parent": "string",
    "resourceName": "string",
    "securityMarks": {
      "canonicalName": "string",
      "marks": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string"
    },
    "severity": "SEVERITY_UNSPECIFIED",
    "sourceProperties": {
      "property1": null,
      "property2": null
    },
    "state": "STATE_UNSPECIFIED"
  },
  "notificationConfigName": "string",
  "resource": {
    "folders": [
      {
        "resourceFolder": "string",
        "resourceFolderDisplayName": "string"
      }
    ],
    "name": "string",
    "parent": "string",
    "parentDisplayName": "string",
    "project": "string",
    "projectDisplayName": "string"
  }
}
```

Security Command Center's Notification

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|finding|[GoogleCloudSecuritycenterV1p1beta1Finding](#schemagooglecloudsecuritycenterv1p1beta1finding)|false|none|If it's a Finding based notification config, this field will be populated.|
|notificationConfigName|string|false|none|Name of the notification config that generated current notification.|
|resource|[GoogleCloudSecuritycenterV1p1beta1Resource](#schemagooglecloudsecuritycenterv1p1beta1resource)|false|none|The Cloud resource tied to the notification.|

<h2 id="tocS_GoogleCloudSecuritycenterV1p1beta1Resource">GoogleCloudSecuritycenterV1p1beta1Resource</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsecuritycenterv1p1beta1resource"></a>
<a id="schema_GoogleCloudSecuritycenterV1p1beta1Resource"></a>
<a id="tocSgooglecloudsecuritycenterv1p1beta1resource"></a>
<a id="tocsgooglecloudsecuritycenterv1p1beta1resource"></a>

```json
{
  "folders": [
    {
      "resourceFolder": "string",
      "resourceFolderDisplayName": "string"
    }
  ],
  "name": "string",
  "parent": "string",
  "parentDisplayName": "string",
  "project": "string",
  "projectDisplayName": "string"
}
```

Information related to the Google Cloud resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|folders|[[GoogleCloudSecuritycenterV1p1beta1Folder](#schemagooglecloudsecuritycenterv1p1beta1folder)]|false|read-only|Output only. Contains a Folder message for each folder in the assets ancestry. The first folder is the deepest nested folder, and the last folder is the folder directly under the Organization.|
|name|string|false|none|The full resource name of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name|
|parent|string|false|none|The full resource name of resource's parent.|
|parentDisplayName|string|false|none|The human readable name of resource's parent.|
|project|string|false|none|The full resource name of project that the resource belongs to.|
|projectDisplayName|string|false|none|The project id that the resource belongs to.|

<h2 id="tocS_GoogleCloudSecuritycenterV1p1beta1RunAssetDiscoveryResponse">GoogleCloudSecuritycenterV1p1beta1RunAssetDiscoveryResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsecuritycenterv1p1beta1runassetdiscoveryresponse"></a>
<a id="schema_GoogleCloudSecuritycenterV1p1beta1RunAssetDiscoveryResponse"></a>
<a id="tocSgooglecloudsecuritycenterv1p1beta1runassetdiscoveryresponse"></a>
<a id="tocsgooglecloudsecuritycenterv1p1beta1runassetdiscoveryresponse"></a>

```json
{
  "duration": "string",
  "state": "STATE_UNSPECIFIED"
}
```

Response of asset discovery run

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duration|string(google-duration)|false|none|The duration between asset discovery run start and end|
|state|string|false|none|The state of an asset discovery run.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|COMPLETED|
|state|SUPERSEDED|
|state|TERMINATED|

<h2 id="tocS_GoogleCloudSecuritycenterV1p1beta1SecurityMarks">GoogleCloudSecuritycenterV1p1beta1SecurityMarks</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsecuritycenterv1p1beta1securitymarks"></a>
<a id="schema_GoogleCloudSecuritycenterV1p1beta1SecurityMarks"></a>
<a id="tocSgooglecloudsecuritycenterv1p1beta1securitymarks"></a>
<a id="tocsgooglecloudsecuritycenterv1p1beta1securitymarks"></a>

```json
{
  "canonicalName": "string",
  "marks": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string"
}
```

User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have proper permissions on the organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canonicalName|string|false|none|The canonical name of the marks. Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "folders/{folder_id}/assets/{asset_id}/securityMarks" "projects/{project_number}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks" "folders/{folder_id}/sources/{source_id}/findings/{finding_id}/securityMarks" "projects/{project_number}/sources/{source_id}/findings/{finding_id}/securityMarks"|
|marks|object|false|none|Mutable user specified security marks belonging to the parent resource. Constraints are as follows: * Keys and values are treated as case insensitive * Keys must be between 1 - 256 characters (inclusive) * Keys must be letters, numbers, underscores, or dashes * Values have leading and trailing whitespace trimmed, remaining characters must be between 1 - 4096 characters (inclusive)|
|name|string|false|none|The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks".|

<h2 id="tocS_IamBinding">IamBinding</h2>
<!-- backwards compatibility -->
<a id="schemaiambinding"></a>
<a id="schema_IamBinding"></a>
<a id="tocSiambinding"></a>
<a id="tocsiambinding"></a>

```json
{
  "action": "ACTION_UNSPECIFIED",
  "member": "string",
  "role": "string"
}
```

Represents a particular IAM binding, which captures a member's role addition, removal, or state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|The action that was performed on a Binding.|
|member|string|false|none|A single identity requesting access for a Cloud Platform resource, e.g. "foo@google.com".|
|role|string|false|none|Role that is assigned to "members". For example, "roles/viewer", "roles/editor", or "roles/owner".|

#### Enumerated Values

|Property|Value|
|---|---|
|action|ACTION_UNSPECIFIED|
|action|ADD|
|action|REMOVE|

<h2 id="tocS_Indicator">Indicator</h2>
<!-- backwards compatibility -->
<a id="schemaindicator"></a>
<a id="schema_Indicator"></a>
<a id="tocSindicator"></a>
<a id="tocsindicator"></a>

```json
{
  "domains": [
    "string"
  ],
  "ipAddresses": [
    "string"
  ],
  "signatures": [
    {
      "memoryHashSignature": {
        "binaryFamily": "string",
        "detections": [
          {
            "binary": "string",
            "percentPagesMatched": 0
          }
        ]
      },
      "yaraRuleSignature": {
        "yaraRule": "string"
      }
    }
  ],
  "uris": [
    "string"
  ]
}
```

Represents what's commonly known as an _indicator of compromise_ (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion. For more information, see [Indicator of compromise](https://en.wikipedia.org/wiki/Indicator_of_compromise).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domains|[string]|false|none|List of domains associated to the Finding.|
|ipAddresses|[string]|false|none|The list of IP addresses that are associated with the finding.|
|signatures|[[ProcessSignature](#schemaprocesssignature)]|false|none|The list of matched signatures indicating that the given process is present in the environment.|
|uris|[string]|false|none|The list of URIs associated to the Findings.|

<h2 id="tocS_KernelRootkit">KernelRootkit</h2>
<!-- backwards compatibility -->
<a id="schemakernelrootkit"></a>
<a id="schema_KernelRootkit"></a>
<a id="tocSkernelrootkit"></a>
<a id="tocskernelrootkit"></a>

```json
{
  "name": "string",
  "unexpectedCodeModification": true,
  "unexpectedFtraceHandler": true,
  "unexpectedInterruptHandler": true,
  "unexpectedKernelCodePages": true,
  "unexpectedKprobeHandler": true,
  "unexpectedProcessesInRunqueue": true,
  "unexpectedReadOnlyDataModification": true,
  "unexpectedSystemCallHandler": true
}
```

Kernel mode rootkit signatures.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Rootkit name when available.|
|unexpectedCodeModification|boolean|false|none|True when unexpected modifications of kernel code memory are present.|
|unexpectedFtraceHandler|boolean|false|none|True when `ftrace` points are present with callbacks pointing to regions that are not in the expected kernel or module code range.|
|unexpectedInterruptHandler|boolean|false|none|True when interrupt handlers that are are not in the expected kernel or module code regions are present.|
|unexpectedKernelCodePages|boolean|false|none|True when kernel code pages that are not in the expected kernel or module code regions are present.|
|unexpectedKprobeHandler|boolean|false|none|True when `kprobe` points are present with callbacks pointing to regions that are not in the expected kernel or module code range.|
|unexpectedProcessesInRunqueue|boolean|false|none|True when unexpected processes in the scheduler run queue are present. Such processes are in the run queue, but not in the process task list.|
|unexpectedReadOnlyDataModification|boolean|false|none|True when unexpected modifications of kernel read-only data memory are present.|
|unexpectedSystemCallHandler|boolean|false|none|True when system call handlers that are are not in the expected kernel or module code regions are present.|

<h2 id="tocS_Kubernetes">Kubernetes</h2>
<!-- backwards compatibility -->
<a id="schemakubernetes"></a>
<a id="schema_Kubernetes"></a>
<a id="tocSkubernetes"></a>
<a id="tocskubernetes"></a>

```json
{
  "accessReviews": [
    {
      "group": "string",
      "name": "string",
      "ns": "string",
      "resource": "string",
      "subresource": "string",
      "verb": "string",
      "version": "string"
    }
  ],
  "bindings": [
    {
      "name": "string",
      "ns": "string",
      "role": {
        "kind": "KIND_UNSPECIFIED",
        "name": "string",
        "ns": "string"
      },
      "subjects": [
        {
          "kind": "AUTH_TYPE_UNSPECIFIED",
          "name": "string",
          "ns": "string"
        }
      ]
    }
  ],
  "nodePools": [
    {
      "name": "string",
      "nodes": [
        {
          "name": "string"
        }
      ]
    }
  ],
  "nodes": [
    {
      "name": "string"
    }
  ],
  "pods": [
    {
      "containers": [
        {
          "imageId": "string",
          "labels": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "name": "string",
          "uri": "string"
        }
      ],
      "labels": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "name": "string",
      "ns": "string"
    }
  ],
  "roles": [
    {
      "kind": "KIND_UNSPECIFIED",
      "name": "string",
      "ns": "string"
    }
  ]
}
```

Kubernetes-related attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessReviews|[[AccessReview](#schemaaccessreview)]|false|none|Provides information on any Kubernetes access reviews (i.e. privilege checks) relevant to the finding.|
|bindings|[[GoogleCloudSecuritycenterV1Binding](#schemagooglecloudsecuritycenterv1binding)]|false|none|Provides Kubernetes role binding information for findings that involve RoleBindings or ClusterRoleBindings.|
|nodePools|[[NodePool](#schemanodepool)]|false|none|GKE Node Pools associated with the finding. This field will contain NodePool information for each Node, when it is available.|
|nodes|[[Node](#schemanode)]|false|none|Provides Kubernetes Node information.|
|pods|[[Pod](#schemapod)]|false|none|Kubernetes Pods associated with the finding. This field will contain Pod records for each container that is owned by a Pod.|
|roles|[[Role](#schemarole)]|false|none|Provides Kubernetes role information for findings that involve Roles or ClusterRoles.|

<h2 id="tocS_Label">Label</h2>
<!-- backwards compatibility -->
<a id="schemalabel"></a>
<a id="schema_Label"></a>
<a id="tocSlabel"></a>
<a id="tocslabel"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

Label represents a generic name=value label. Label has separate name and value fields to support filtering with contains().

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Label name.|
|value|string|false|none|Label value.|

<h2 id="tocS_MemoryHashSignature">MemoryHashSignature</h2>
<!-- backwards compatibility -->
<a id="schemamemoryhashsignature"></a>
<a id="schema_MemoryHashSignature"></a>
<a id="tocSmemoryhashsignature"></a>
<a id="tocsmemoryhashsignature"></a>

```json
{
  "binaryFamily": "string",
  "detections": [
    {
      "binary": "string",
      "percentPagesMatched": 0
    }
  ]
}
```

A signature corresponding to memory page hashes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|binaryFamily|string|false|none|The binary family.|
|detections|[[Detection](#schemadetection)]|false|none|The list of memory hash detections contributing to the binary family match.|

<h2 id="tocS_MitreAttack">MitreAttack</h2>
<!-- backwards compatibility -->
<a id="schemamitreattack"></a>
<a id="schema_MitreAttack"></a>
<a id="tocSmitreattack"></a>
<a id="tocsmitreattack"></a>

```json
{
  "additionalTactics": [
    "TACTIC_UNSPECIFIED"
  ],
  "additionalTechniques": [
    "TECHNIQUE_UNSPECIFIED"
  ],
  "primaryTactic": "TACTIC_UNSPECIFIED",
  "primaryTechniques": [
    "TECHNIQUE_UNSPECIFIED"
  ],
  "version": "string"
}
```

MITRE ATT&CK tactics and techniques related to this finding. See: https://attack.mitre.org

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalTactics|[string]|false|none|Additional MITRE ATT&CK tactics related to this finding, if any.|
|additionalTechniques|[string]|false|none|Additional MITRE ATT&CK techniques related to this finding, if any, along with any of their respective parent techniques.|
|primaryTactic|string|false|none|The MITRE ATT&CK tactic most closely represented by this finding, if any.|
|primaryTechniques|[string]|false|none|The MITRE ATT&CK technique most closely represented by this finding, if any. primary_techniques is a repeated field because there are multiple levels of MITRE ATT&CK techniques. If the technique most closely represented by this finding is a sub-technique (e.g. `SCANNING_IP_BLOCKS`), both the sub-technique and its parent technique(s) will be listed (e.g. `SCANNING_IP_BLOCKS`, `ACTIVE_SCANNING`).|
|version|string|false|none|The MITRE ATT&CK version referenced by the above fields. E.g. "8".|

#### Enumerated Values

|Property|Value|
|---|---|
|additionalTactics|TACTIC_UNSPECIFIED|
|additionalTactics|RECONNAISSANCE|
|additionalTactics|RESOURCE_DEVELOPMENT|
|additionalTactics|INITIAL_ACCESS|
|additionalTactics|EXECUTION|
|additionalTactics|PERSISTENCE|
|additionalTactics|PRIVILEGE_ESCALATION|
|additionalTactics|DEFENSE_EVASION|
|additionalTactics|CREDENTIAL_ACCESS|
|additionalTactics|DISCOVERY|
|additionalTactics|LATERAL_MOVEMENT|
|additionalTactics|COLLECTION|
|additionalTactics|COMMAND_AND_CONTROL|
|additionalTactics|EXFILTRATION|
|additionalTactics|IMPACT|
|additionalTechniques|TECHNIQUE_UNSPECIFIED|
|additionalTechniques|ACTIVE_SCANNING|
|additionalTechniques|SCANNING_IP_BLOCKS|
|additionalTechniques|INGRESS_TOOL_TRANSFER|
|additionalTechniques|NATIVE_API|
|additionalTechniques|SHARED_MODULES|
|additionalTechniques|COMMAND_AND_SCRIPTING_INTERPRETER|
|additionalTechniques|UNIX_SHELL|
|additionalTechniques|RESOURCE_HIJACKING|
|additionalTechniques|PROXY|
|additionalTechniques|EXTERNAL_PROXY|
|additionalTechniques|MULTI_HOP_PROXY|
|additionalTechniques|DYNAMIC_RESOLUTION|
|additionalTechniques|UNSECURED_CREDENTIALS|
|additionalTechniques|VALID_ACCOUNTS|
|additionalTechniques|LOCAL_ACCOUNTS|
|additionalTechniques|CLOUD_ACCOUNTS|
|additionalTechniques|NETWORK_DENIAL_OF_SERVICE|
|additionalTechniques|PERMISSION_GROUPS_DISCOVERY|
|additionalTechniques|CLOUD_GROUPS|
|additionalTechniques|EXFILTRATION_OVER_WEB_SERVICE|
|additionalTechniques|EXFILTRATION_TO_CLOUD_STORAGE|
|additionalTechniques|ACCOUNT_MANIPULATION|
|additionalTechniques|SSH_AUTHORIZED_KEYS|
|additionalTechniques|CREATE_OR_MODIFY_SYSTEM_PROCESS|
|additionalTechniques|STEAL_WEB_SESSION_COOKIE|
|additionalTechniques|MODIFY_CLOUD_COMPUTE_INFRASTRUCTURE|
|additionalTechniques|EXPLOIT_PUBLIC_FACING_APPLICATION|
|additionalTechniques|MODIFY_AUTHENTICATION_PROCESS|
|additionalTechniques|DATA_DESTRUCTION|
|additionalTechniques|DOMAIN_POLICY_MODIFICATION|
|additionalTechniques|IMPAIR_DEFENSES|
|additionalTechniques|NETWORK_SERVICE_DISCOVERY|
|additionalTechniques|ACCESS_TOKEN_MANIPULATION|
|additionalTechniques|ABUSE_ELEVATION_CONTROL_MECHANISM|
|additionalTechniques|DEFAULT_ACCOUNTS|
|primaryTactic|TACTIC_UNSPECIFIED|
|primaryTactic|RECONNAISSANCE|
|primaryTactic|RESOURCE_DEVELOPMENT|
|primaryTactic|INITIAL_ACCESS|
|primaryTactic|EXECUTION|
|primaryTactic|PERSISTENCE|
|primaryTactic|PRIVILEGE_ESCALATION|
|primaryTactic|DEFENSE_EVASION|
|primaryTactic|CREDENTIAL_ACCESS|
|primaryTactic|DISCOVERY|
|primaryTactic|LATERAL_MOVEMENT|
|primaryTactic|COLLECTION|
|primaryTactic|COMMAND_AND_CONTROL|
|primaryTactic|EXFILTRATION|
|primaryTactic|IMPACT|
|primaryTechniques|TECHNIQUE_UNSPECIFIED|
|primaryTechniques|ACTIVE_SCANNING|
|primaryTechniques|SCANNING_IP_BLOCKS|
|primaryTechniques|INGRESS_TOOL_TRANSFER|
|primaryTechniques|NATIVE_API|
|primaryTechniques|SHARED_MODULES|
|primaryTechniques|COMMAND_AND_SCRIPTING_INTERPRETER|
|primaryTechniques|UNIX_SHELL|
|primaryTechniques|RESOURCE_HIJACKING|
|primaryTechniques|PROXY|
|primaryTechniques|EXTERNAL_PROXY|
|primaryTechniques|MULTI_HOP_PROXY|
|primaryTechniques|DYNAMIC_RESOLUTION|
|primaryTechniques|UNSECURED_CREDENTIALS|
|primaryTechniques|VALID_ACCOUNTS|
|primaryTechniques|LOCAL_ACCOUNTS|
|primaryTechniques|CLOUD_ACCOUNTS|
|primaryTechniques|NETWORK_DENIAL_OF_SERVICE|
|primaryTechniques|PERMISSION_GROUPS_DISCOVERY|
|primaryTechniques|CLOUD_GROUPS|
|primaryTechniques|EXFILTRATION_OVER_WEB_SERVICE|
|primaryTechniques|EXFILTRATION_TO_CLOUD_STORAGE|
|primaryTechniques|ACCOUNT_MANIPULATION|
|primaryTechniques|SSH_AUTHORIZED_KEYS|
|primaryTechniques|CREATE_OR_MODIFY_SYSTEM_PROCESS|
|primaryTechniques|STEAL_WEB_SESSION_COOKIE|
|primaryTechniques|MODIFY_CLOUD_COMPUTE_INFRASTRUCTURE|
|primaryTechniques|EXPLOIT_PUBLIC_FACING_APPLICATION|
|primaryTechniques|MODIFY_AUTHENTICATION_PROCESS|
|primaryTechniques|DATA_DESTRUCTION|
|primaryTechniques|DOMAIN_POLICY_MODIFICATION|
|primaryTechniques|IMPAIR_DEFENSES|
|primaryTechniques|NETWORK_SERVICE_DISCOVERY|
|primaryTechniques|ACCESS_TOKEN_MANIPULATION|
|primaryTechniques|ABUSE_ELEVATION_CONTROL_MECHANISM|
|primaryTechniques|DEFAULT_ACCOUNTS|

<h2 id="tocS_Node">Node</h2>
<!-- backwards compatibility -->
<a id="schemanode"></a>
<a id="schema_Node"></a>
<a id="tocSnode"></a>
<a id="tocsnode"></a>

```json
{
  "name": "string"
}
```

Kubernetes Nodes associated with the finding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Full Resource name of the Compute Engine VM running the cluster node.|

<h2 id="tocS_NodePool">NodePool</h2>
<!-- backwards compatibility -->
<a id="schemanodepool"></a>
<a id="schema_NodePool"></a>
<a id="tocSnodepool"></a>
<a id="tocsnodepool"></a>

```json
{
  "name": "string",
  "nodes": [
    {
      "name": "string"
    }
  ]
}
```

Provides GKE Node Pool information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Kubernetes Node pool name.|
|nodes|[[Node](#schemanode)]|false|none|Nodes associated with the finding.|

<h2 id="tocS_OnboardingState">OnboardingState</h2>
<!-- backwards compatibility -->
<a id="schemaonboardingstate"></a>
<a id="schema_OnboardingState"></a>
<a id="tocSonboardingstate"></a>
<a id="tocsonboardingstate"></a>

```json
{
  "name": "string",
  "onboardingLevel": "ONBOARDING_LEVEL_UNSPECIFIED"
}
```

Resource capturing onboarding information for a given CRM resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The resource name of the OnboardingState. Format: organizations/{organization}/onboardingState Format: folders/{folder}/onboardingState Format: projects/{project}/onboardingState|
|onboardingLevel|string|false|none|Describes the level a given organization, folder, or project is onboarded with SCC. If the resource wasn't onboarded, NOT_FOUND would have been thrown.|

#### Enumerated Values

|Property|Value|
|---|---|
|onboardingLevel|ONBOARDING_LEVEL_UNSPECIFIED|
|onboardingLevel|ONBOARDING_LEVEL_PROJECT|
|onboardingLevel|ONBOARDING_LEVEL_ORGANIZATION|

<h2 id="tocS_Pod">Pod</h2>
<!-- backwards compatibility -->
<a id="schemapod"></a>
<a id="schema_Pod"></a>
<a id="tocSpod"></a>
<a id="tocspod"></a>

```json
{
  "containers": [
    {
      "imageId": "string",
      "labels": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "name": "string",
      "uri": "string"
    }
  ],
  "labels": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "name": "string",
  "ns": "string"
}
```

Kubernetes Pod.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containers|[[Container](#schemacontainer)]|false|none|Pod containers associated with this finding, if any.|
|labels|[[Label](#schemalabel)]|false|none|Pod labels. For Kubernetes containers, these are applied to the container.|
|name|string|false|none|Kubernetes Pod name.|
|ns|string|false|none|Kubernetes Pod namespace.|

<h2 id="tocS_Process">Process</h2>
<!-- backwards compatibility -->
<a id="schemaprocess"></a>
<a id="schema_Process"></a>
<a id="tocSprocess"></a>
<a id="tocsprocess"></a>

```json
{
  "args": [
    "string"
  ],
  "argumentsTruncated": true,
  "binary": {
    "contents": "string",
    "hashedSize": "string",
    "partiallyHashed": true,
    "path": "string",
    "sha256": "string",
    "size": "string"
  },
  "envVariables": [
    {
      "name": "string",
      "val": "string"
    }
  ],
  "envVariablesTruncated": true,
  "libraries": [
    {
      "contents": "string",
      "hashedSize": "string",
      "partiallyHashed": true,
      "path": "string",
      "sha256": "string",
      "size": "string"
    }
  ],
  "name": "string",
  "parentPid": "string",
  "pid": "string",
  "script": {
    "contents": "string",
    "hashedSize": "string",
    "partiallyHashed": true,
    "path": "string",
    "sha256": "string",
    "size": "string"
  }
}
```

Represents an operating system process.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|args|[string]|false|none|Process arguments as JSON encoded strings.|
|argumentsTruncated|boolean|false|none|True if `args` is incomplete.|
|binary|[File](#schemafile)|false|none|File information for the process executable.|
|envVariables|[[EnvironmentVariable](#schemaenvironmentvariable)]|false|none|Process environment variables.|
|envVariablesTruncated|boolean|false|none|True if `env_variables` is incomplete.|
|libraries|[[File](#schemafile)]|false|none|File information for libraries loaded by the process.|
|name|string|false|none|The process name visible in utilities like `top` and `ps`; it can be accessed via `/proc/[pid]/comm` and changed with `prctl(PR_SET_NAME)`.|
|parentPid|string(int64)|false|none|The parent process id.|
|pid|string(int64)|false|none|The process id.|
|script|[File](#schemafile)|false|none|When the process represents the invocation of a script, `binary` provides information about the interpreter while `script` provides information about the script file provided to the interpreter.|

<h2 id="tocS_ProcessSignature">ProcessSignature</h2>
<!-- backwards compatibility -->
<a id="schemaprocesssignature"></a>
<a id="schema_ProcessSignature"></a>
<a id="tocSprocesssignature"></a>
<a id="tocsprocesssignature"></a>

```json
{
  "memoryHashSignature": {
    "binaryFamily": "string",
    "detections": [
      {
        "binary": "string",
        "percentPagesMatched": 0
      }
    ]
  },
  "yaraRuleSignature": {
    "yaraRule": "string"
  }
}
```

Indicates what signature matched this process.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memoryHashSignature|[MemoryHashSignature](#schemamemoryhashsignature)|false|none|Signature indicating that a binary family was matched.|
|yaraRuleSignature|[YaraRuleSignature](#schemayararulesignature)|false|none|Signature indicating that a YARA rule was matched.|

<h2 id="tocS_RapidVulnerabilityDetectionSettings">RapidVulnerabilityDetectionSettings</h2>
<!-- backwards compatibility -->
<a id="schemarapidvulnerabilitydetectionsettings"></a>
<a id="schema_RapidVulnerabilityDetectionSettings"></a>
<a id="tocSrapidvulnerabilitydetectionsettings"></a>
<a id="tocsrapidvulnerabilitydetectionsettings"></a>

```json
{
  "modules": {
    "property1": {
      "moduleEnablementState": "ENABLEMENT_STATE_UNSPECIFIED",
      "value": {
        "property1": null,
        "property2": null
      }
    },
    "property2": {
      "moduleEnablementState": "ENABLEMENT_STATE_UNSPECIFIED",
      "value": {
        "property1": null,
        "property2": null
      }
    }
  },
  "name": "string",
  "serviceEnablementState": "ENABLEMENT_STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

Resource capturing the settings for the Rapid Vulnerability Detection service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modules|object|false|none|The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's.|
|name|string|false|none|The resource name of the RapidVulnerabilityDetectionSettings. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings|
|serviceEnablementState|string|false|none|The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time the settings were last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|serviceEnablementState|ENABLEMENT_STATE_UNSPECIFIED|
|serviceEnablementState|INHERITED|
|serviceEnablementState|ENABLED|
|serviceEnablementState|DISABLED|

<h2 id="tocS_Reference">Reference</h2>
<!-- backwards compatibility -->
<a id="schemareference"></a>
<a id="schema_Reference"></a>
<a id="tocSreference"></a>
<a id="tocsreference"></a>

```json
{
  "source": "string",
  "uri": "string"
}
```

Additional Links

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|string|false|none|Source of the reference e.g. NVD|
|uri|string|false|none|Uri for the mentioned source e.g. https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-34527.|

<h2 id="tocS_Role">Role</h2>
<!-- backwards compatibility -->
<a id="schemarole"></a>
<a id="schema_Role"></a>
<a id="tocSrole"></a>
<a id="tocsrole"></a>

```json
{
  "kind": "KIND_UNSPECIFIED",
  "name": "string",
  "ns": "string"
}
```

Kubernetes Role or ClusterRole.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Role type.|
|name|string|false|none|Role name.|
|ns|string|false|none|Role namespace.|

#### Enumerated Values

|Property|Value|
|---|---|
|kind|KIND_UNSPECIFIED|
|kind|ROLE|
|kind|CLUSTER_ROLE|

<h2 id="tocS_SecurityCenterSettings">SecurityCenterSettings</h2>
<!-- backwards compatibility -->
<a id="schemasecuritycentersettings"></a>
<a id="schema_SecurityCenterSettings"></a>
<a id="tocSsecuritycentersettings"></a>
<a id="tocssecuritycentersettings"></a>

```json
{
  "logSinkProject": "string",
  "name": "string",
  "onboardingTime": "string",
  "orgServiceAccount": "string"
}
```

Resource capturing the settings for Security Center.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logSinkProject|string|false|none|The resource name of the project to send logs to. This project must be part of the organization this resource resides in. The format is `projects/{project_id}`. An empty value disables logging. This value is only referenced by services that support log sink. Please refer to the documentation for an updated list of compatible services. This may only be specified for organization level onboarding.|
|name|string|false|none|The resource name of the SecurityCenterSettings. Format: organizations/{organization}/securityCenterSettings Format: folders/{folder}/securityCenterSettings Format: projects/{project}/securityCenterSettings|
|onboardingTime|string(google-datetime)|false|read-only|Output only. Timestamp of when the customer organization was onboarded to SCC.|
|orgServiceAccount|string|false|read-only|Output only. The organization level service account to be used for security center components.|

<h2 id="tocS_SecurityHealthAnalyticsSettings">SecurityHealthAnalyticsSettings</h2>
<!-- backwards compatibility -->
<a id="schemasecurityhealthanalyticssettings"></a>
<a id="schema_SecurityHealthAnalyticsSettings"></a>
<a id="tocSsecurityhealthanalyticssettings"></a>
<a id="tocssecurityhealthanalyticssettings"></a>

```json
{
  "modules": {
    "property1": {
      "moduleEnablementState": "ENABLEMENT_STATE_UNSPECIFIED",
      "value": {
        "property1": null,
        "property2": null
      }
    },
    "property2": {
      "moduleEnablementState": "ENABLEMENT_STATE_UNSPECIFIED",
      "value": {
        "property1": null,
        "property2": null
      }
    }
  },
  "name": "string",
  "serviceAccount": "string",
  "serviceEnablementState": "ENABLEMENT_STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

Resource capturing the settings for the Security Health Analytics service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modules|object|false|none|The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's.|
|name|string|false|none|The resource name of the SecurityHealthAnalyticsSettings. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings|
|serviceAccount|string|false|read-only|Output only. The service account used by Security Health Analytics detectors.|
|serviceEnablementState|string|false|none|The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time the settings were last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|serviceEnablementState|ENABLEMENT_STATE_UNSPECIFIED|
|serviceEnablementState|INHERITED|
|serviceEnablementState|ENABLED|
|serviceEnablementState|DISABLED|

<h2 id="tocS_SecurityMarks">SecurityMarks</h2>
<!-- backwards compatibility -->
<a id="schemasecuritymarks"></a>
<a id="schema_SecurityMarks"></a>
<a id="tocSsecuritymarks"></a>
<a id="tocssecuritymarks"></a>

```json
{
  "canonicalName": "string",
  "marks": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string"
}
```

User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have proper permissions on the organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canonicalName|string|false|none|The canonical name of the marks. Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "folders/{folder_id}/assets/{asset_id}/securityMarks" "projects/{project_number}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks" "folders/{folder_id}/sources/{source_id}/findings/{finding_id}/securityMarks" "projects/{project_number}/sources/{source_id}/findings/{finding_id}/securityMarks"|
|marks|object|false|none|Mutable user specified security marks belonging to the parent resource. Constraints are as follows: * Keys and values are treated as case insensitive * Keys must be between 1 - 256 characters (inclusive) * Keys must be letters, numbers, underscores, or dashes * Values have leading and trailing whitespace trimmed, remaining characters must be between 1 - 4096 characters (inclusive)|
|name|string|false|none|The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks".|

<h2 id="tocS_ServiceAccountDelegationInfo">ServiceAccountDelegationInfo</h2>
<!-- backwards compatibility -->
<a id="schemaserviceaccountdelegationinfo"></a>
<a id="schema_ServiceAccountDelegationInfo"></a>
<a id="tocSserviceaccountdelegationinfo"></a>
<a id="tocsserviceaccountdelegationinfo"></a>

```json
{
  "principalEmail": "string",
  "principalSubject": "string"
}
```

Identity delegation history of an authenticated service account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|principalEmail|string|false|none|The email address of a Google account.|
|principalSubject|string|false|none|A string representing the principal_subject associated with the identity. As compared to `principal_email`, supports principals that aren't associated with email addresses, such as third party principals. For most identities, the format will be `principal://iam.googleapis.com/{identity pool name}/subjects/{subject}` except for some GKE identities (GKE_WORKLOAD, FREEFORM, GKE_HUB_WORKLOAD) that are still in the legacy format `serviceAccount:{identity pool name}[{subject}]`|

<h2 id="tocS_Subject">Subject</h2>
<!-- backwards compatibility -->
<a id="schemasubject"></a>
<a id="schema_Subject"></a>
<a id="tocSsubject"></a>
<a id="tocssubject"></a>

```json
{
  "kind": "AUTH_TYPE_UNSPECIFIED",
  "name": "string",
  "ns": "string"
}
```

Represents a Kubernetes Subject.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Authentication type for subject.|
|name|string|false|none|Name for subject.|
|ns|string|false|none|Namespace for subject.|

#### Enumerated Values

|Property|Value|
|---|---|
|kind|AUTH_TYPE_UNSPECIFIED|
|kind|USER|
|kind|SERVICEACCOUNT|
|kind|GROUP|

<h2 id="tocS_Subscription">Subscription</h2>
<!-- backwards compatibility -->
<a id="schemasubscription"></a>
<a id="schema_Subscription"></a>
<a id="tocSsubscription"></a>
<a id="tocssubscription"></a>

```json
{
  "details": {
    "endTime": "string",
    "startTime": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "name": "string",
  "tier": "TIER_UNSPECIFIED"
}
```

Resource capturing the state of an organization's subscription.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[Details](#schemadetails)|false|none|The details of the most recent active subscription. If there has never been a subscription this will be empty.|
|name|string|false|none|The resource name of the subscription. Format: organizations/{organization}/subscription|
|tier|string|false|none|The tier of SCC features this organization currently has access to.|

#### Enumerated Values

|Property|Value|
|---|---|
|tier|TIER_UNSPECIFIED|
|tier|STANDARD|
|tier|PREMIUM|

<h2 id="tocS_VirtualMachineThreatDetectionSettings">VirtualMachineThreatDetectionSettings</h2>
<!-- backwards compatibility -->
<a id="schemavirtualmachinethreatdetectionsettings"></a>
<a id="schema_VirtualMachineThreatDetectionSettings"></a>
<a id="tocSvirtualmachinethreatdetectionsettings"></a>
<a id="tocsvirtualmachinethreatdetectionsettings"></a>

```json
{
  "modules": {
    "property1": {
      "moduleEnablementState": "ENABLEMENT_STATE_UNSPECIFIED",
      "value": {
        "property1": null,
        "property2": null
      }
    },
    "property2": {
      "moduleEnablementState": "ENABLEMENT_STATE_UNSPECIFIED",
      "value": {
        "property1": null,
        "property2": null
      }
    }
  },
  "name": "string",
  "serviceAccount": "string",
  "serviceEnablementState": "ENABLEMENT_STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

Resource capturing the settings for the Virtual Machine Threat Detection service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modules|object|false|none|The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's.|
|name|string|false|none|The resource name of the VirtualMachineThreatDetectionSettings. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings|
|serviceAccount|string|false|read-only|Output only. The service account used by Virtual Machine Threat Detection detectors.|
|serviceEnablementState|string|false|none|The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time the settings were last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|serviceEnablementState|ENABLEMENT_STATE_UNSPECIFIED|
|serviceEnablementState|INHERITED|
|serviceEnablementState|ENABLED|
|serviceEnablementState|DISABLED|

<h2 id="tocS_Vulnerability">Vulnerability</h2>
<!-- backwards compatibility -->
<a id="schemavulnerability"></a>
<a id="schema_Vulnerability"></a>
<a id="tocSvulnerability"></a>
<a id="tocsvulnerability"></a>

```json
{
  "cve": {
    "cvssv3": {
      "attackComplexity": "ATTACK_COMPLEXITY_UNSPECIFIED",
      "attackVector": "ATTACK_VECTOR_UNSPECIFIED",
      "availabilityImpact": "IMPACT_UNSPECIFIED",
      "baseScore": 0,
      "confidentialityImpact": "IMPACT_UNSPECIFIED",
      "integrityImpact": "IMPACT_UNSPECIFIED",
      "privilegesRequired": "PRIVILEGES_REQUIRED_UNSPECIFIED",
      "scope": "SCOPE_UNSPECIFIED",
      "userInteraction": "USER_INTERACTION_UNSPECIFIED"
    },
    "id": "string",
    "references": [
      {
        "source": "string",
        "uri": "string"
      }
    ],
    "upstreamFixAvailable": true
  }
}
```

Refers to common vulnerability fields e.g. cve, cvss, cwe etc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cve|[Cve](#schemacve)|false|none|CVE stands for Common Vulnerabilities and Exposures (https://cve.mitre.org/about/)|

<h2 id="tocS_WebSecurityScannerSettings">WebSecurityScannerSettings</h2>
<!-- backwards compatibility -->
<a id="schemawebsecurityscannersettings"></a>
<a id="schema_WebSecurityScannerSettings"></a>
<a id="tocSwebsecurityscannersettings"></a>
<a id="tocswebsecurityscannersettings"></a>

```json
{
  "modules": {
    "property1": {
      "moduleEnablementState": "ENABLEMENT_STATE_UNSPECIFIED",
      "value": {
        "property1": null,
        "property2": null
      }
    },
    "property2": {
      "moduleEnablementState": "ENABLEMENT_STATE_UNSPECIFIED",
      "value": {
        "property1": null,
        "property2": null
      }
    }
  },
  "name": "string",
  "serviceEnablementState": "ENABLEMENT_STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

Resource capturing the settings for the Web Security Scanner service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modules|object|false|none|The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's.|
|name|string|false|none|The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings|
|serviceEnablementState|string|false|none|The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time the settings were last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|serviceEnablementState|ENABLEMENT_STATE_UNSPECIFIED|
|serviceEnablementState|INHERITED|
|serviceEnablementState|ENABLED|
|serviceEnablementState|DISABLED|

<h2 id="tocS_YaraRuleSignature">YaraRuleSignature</h2>
<!-- backwards compatibility -->
<a id="schemayararulesignature"></a>
<a id="schema_YaraRuleSignature"></a>
<a id="tocSyararulesignature"></a>
<a id="tocsyararulesignature"></a>

```json
{
  "yaraRule": "string"
}
```

A signature corresponding to a YARA rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|yaraRule|string|false|none|The name of the YARA rule.|
