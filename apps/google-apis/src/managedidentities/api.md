<h1 id="managed-service-for-microsoft-active-directory-api">Managed Service for Microsoft Active Directory API v1alpha1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Managed Service for Microsoft Active Directory API is used for managing a highly available, hardened service running Microsoft Active Directory (AD).

Base URLs:

* <a href="https://managedidentities.googleapis.com/">https://managedidentities.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/managed-microsoft-ad/">External documentation</a>

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

<h1 id="managed-service-for-microsoft-active-directory-api-projects">projects</h1>

## managedidentities.projects.locations.global.domains.checkMigrationPermission

<a id="opIdmanagedidentities.projects.locations.global.domains.checkMigrationPermission"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string:checkMigrationPermission \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1alpha1/{domain}:checkMigrationPermission`

AuditMigration API gets the current state of DomainMigration

> Body parameter

```json
{}
```

<h3 id="managedidentitiesprojectslocationsglobaldomainscheckmigrationpermission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|path|string|true|Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}`|
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
|body|body|[CheckMigrationPermissionRequest](#schemacheckmigrationpermissionrequest)|false|none|

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
  "onpremDomains": [
    {
      "name": "string",
      "sidFilteringState": "SID_FILTERING_STATE_UNSPECIFIED"
    }
  ],
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="managedidentitiesprojectslocationsglobaldomainscheckmigrationpermission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CheckMigrationPermissionResponse](#schemacheckmigrationpermissionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## managedidentities.projects.locations.global.domains.disableMigration

<a id="opIdmanagedidentities.projects.locations.global.domains.disableMigration"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string:disableMigration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1alpha1/{domain}:disableMigration`

Disable Domain Migration

> Body parameter

```json
{}
```

<h3 id="managedidentitiesprojectslocationsglobaldomainsdisablemigration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|path|string|true|Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}`|
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
|body|body|[DisableMigrationRequest](#schemadisablemigrationrequest)|false|none|

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

<h3 id="managedidentitiesprojectslocationsglobaldomainsdisablemigration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## managedidentities.projects.locations.global.domains.domainJoinMachine

<a id="opIdmanagedidentities.projects.locations.global.domains.domainJoinMachine"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string:domainJoinMachine \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "force": true,
    "ouName": "string",
    "vmIdToken": "string"
  }'
```

`POST /v1alpha1/{domain}:domainJoinMachine`

DomainJoinMachine API joins a Compute Engine VM to the domain

> Body parameter

```json
{
  "force": true,
  "ouName": "string",
  "vmIdToken": "string"
}
```

<h3 id="managedidentitiesprojectslocationsglobaldomainsdomainjoinmachine-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|path|string|true|Required. The domain resource name using the form: projects/{project_id}/locations/global/domains/{domain_name}|
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
|body|body|[DomainJoinMachineRequest](#schemadomainjoinmachinerequest)|false|none|
|» force|body|boolean|false|Optional. force if True, forces domain join even if the computer account already exists.|
|» ouName|body|string|false|Optional. OU name where the VM needs to be domain joined|
|» vmIdToken|body|string|false|Required. Full instance id token of compute engine VM to verify instance identity. More about this: https://cloud.google.com/compute/docs/instances/verifying-instance-identity#request_signature|

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
  "domainJoinBlob": "string"
}
```

<h3 id="managedidentitiesprojectslocationsglobaldomainsdomainjoinmachine-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DomainJoinMachineResponse](#schemadomainjoinmachineresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## managedidentities.projects.locations.global.domains.enableMigration

<a id="opIdmanagedidentities.projects.locations.global.domains.enableMigration"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string:enableMigration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "migratingDomains": [
      {
        "disableSidFiltering": true,
        "domainName": "string"
      }
    ]
  }'
```

`POST /v1alpha1/{domain}:enableMigration`

Enable Domain Migration

> Body parameter

```json
{
  "migratingDomains": [
    {
      "disableSidFiltering": true,
      "domainName": "string"
    }
  ]
}
```

<h3 id="managedidentitiesprojectslocationsglobaldomainsenablemigration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|path|string|true|Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}`|
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
|body|body|[EnableMigrationRequest](#schemaenablemigrationrequest)|false|none|
|» migratingDomains|body|[[OnPremDomainDetails](#schemaonpremdomaindetails)]|false|Required. List of the on-prem domains to be migrated.|

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

<h3 id="managedidentitiesprojectslocationsglobaldomainsenablemigration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## managedidentities.projects.locations.global.domains.extendSchema

<a id="opIdmanagedidentities.projects.locations.global.domains.extendSchema"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string:extendSchema \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "fileContents": "string",
    "gcsPath": "string"
  }'
```

`POST /v1alpha1/{domain}:extendSchema`

Extend Schema for Domain

> Body parameter

```json
{
  "description": "string",
  "fileContents": "string",
  "gcsPath": "string"
}
```

<h3 id="managedidentitiesprojectslocationsglobaldomainsextendschema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|path|string|true|Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}`|
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
|body|body|[ExtendSchemaRequest](#schemaextendschemarequest)|false|none|
|» description|body|string|false|Required. Description for Schema Change.|
|» fileContents|body|string(byte)|false|File uploaded as a byte stream input.|
|» gcsPath|body|string|false|File stored in Cloud Storage bucket and represented in the form projects/{project_id}/buckets/{bucket_name}/objects/{object_name} File should be in the same project as the domain.|

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

<h3 id="managedidentitiesprojectslocationsglobaldomainsextendschema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## managedidentities.projects.locations.global.peerings.get

<a id="opIdmanagedidentities.projects.locations.global.peerings.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{name}`

Gets details of a single Peering.

<h3 id="managedidentitiesprojectslocationsglobalpeeringsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Peering resource name using the form: `projects/{project_id}/locations/global/peerings/{peering_id}`|
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
  "authorizedNetwork": "string",
  "createTime": "string",
  "domainResource": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "statusMessage": "string",
  "updateTime": "string"
}
```

<h3 id="managedidentitiesprojectslocationsglobalpeeringsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Peering](#schemapeering)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## managedidentities.projects.locations.global.peerings.delete

<a id="opIdmanagedidentities.projects.locations.global.peerings.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1alpha1/{name}`

Deletes identified Peering.

<h3 id="managedidentitiesprojectslocationsglobalpeeringsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Peering resource name using the form: `projects/{project_id}/locations/global/peerings/{peering_id}`|
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

<h3 id="managedidentitiesprojectslocationsglobalpeeringsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## managedidentities.projects.locations.global.peerings.patch

<a id="opIdmanagedidentities.projects.locations.global.peerings.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "authorizedNetwork": "string",
    "domainResource": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`PATCH /v1alpha1/{name}`

Updates the labels for specified Peering.

> Body parameter

```json
{
  "authorizedNetwork": "string",
  "domainResource": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="managedidentitiesprojectslocationsglobalpeeringspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Output only. Unique name of the peering in this scope including projects and location using the form: `projects/{project_id}/locations/global/peerings/{peering_id}`.|
|updateMask|query|string|false|Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from Peering: * `labels`|
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
|body|body|[Peering](#schemapeering)|false|none|
|» authorizedNetwork|body|string|false|Required. The full names of the Google Compute Engine [networks](/compute/docs/networks-and-firewalls#networks) to which the instance is connected. Caller needs to make sure that CIDR subnets do not overlap between networks, else peering creation will fail.|
|» domainResource|body|string|false|Required. Full domain resource path for the Managed AD Domain involved in peering. The resource path should be in the form: `projects/{project_id}/locations/global/domains/{domain_name}`|
|» labels|body|object|false|Optional. Resource labels to represent user provided metadata.|
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

<h3 id="managedidentitiesprojectslocationsglobalpeeringspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## managedidentities.projects.locations.global.domains.getLdapssettings

<a id="opIdmanagedidentities.projects.locations.global.domains.getLdapssettings"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/ldapssettings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{name}/ldapssettings`

Gets the domain ldaps settings.

<h3 id="managedidentitiesprojectslocationsglobaldomainsgetldapssettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}`|
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
  "certificate": {
    "expireTime": "string",
    "issuingCertificate": {},
    "subject": "string",
    "subjectAlternativeName": [
      "string"
    ],
    "thumbprint": "string"
  },
  "certificatePassword": "string",
  "certificatePfx": "string",
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

<h3 id="managedidentitiesprojectslocationsglobaldomainsgetldapssettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LDAPSSettings](#schemaldapssettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## managedidentities.projects.locations.global.domains.updateLdapssettings

<a id="opIdmanagedidentities.projects.locations.global.domains.updateLdapssettings"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/ldapssettings \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "certificatePassword": "string",
    "certificatePfx": "string",
    "name": "string"
  }'
```

`PATCH /v1alpha1/{name}/ldapssettings`

Patches a single ldaps settings.

> Body parameter

```json
{
  "certificatePassword": "string",
  "certificatePfx": "string",
  "name": "string"
}
```

<h3 id="managedidentitiesprojectslocationsglobaldomainsupdateldapssettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource name of the LDAPS settings. Uses the form: `projects/{project}/locations/{location}/domains/{domain}`.|
|updateMask|query|string|false|Required. Mask of fields to update. At least one path must be supplied in this field. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask|
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
|body|body|[LDAPSSettings](#schemaldapssettings)|false|none|
|» certificatePassword|body|string|false|Input only. The password used to encrypt the uploaded pfx certificate.|
|» certificatePfx|body|string(byte)|false|Input only. The uploaded PKCS12-formatted certificate to configure LDAPS with. It will enable the domain controllers in this domain to accept LDAPS connections (either LDAP over SSL/TLS or the StartTLS operation). A valid certificate chain must form a valid x.509 certificate chain (or be comprised of a single self-signed certificate. It must be encrypted with either: 1) PBES2 + PBKDF2 + AES256 encryption and SHA256 PRF; or 2) pbeWithSHA1And3-KeyTripleDES-CBC Private key must be included for the leaf / single self-signed certificate. Note: For a fqdn your-example-domain.com, the wildcard fqdn is *.your-example-domain.com. Specifically the leaf certificate must have: - Either a blank subject or a subject with CN matching the wildcard fqdn. - Exactly two SANs - the fqdn and wildcard fqdn. - Encipherment and digital key signature key usages. - Server authentication extended key usage (OID=1.3.6.1.5.5.7.3.1) - Private key must be in one of the following formats: RSA, ECDSA, ED25519. - Private key must have appropriate key length: 2048 for RSA, 256 for ECDSA - Signature algorithm of the leaf certificate cannot be MD2, MD5 or SHA1.|
|» name|body|string|false|The resource name of the LDAPS settings. Uses the form: `projects/{project}/locations/{location}/domains/{domain}`.|

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

<h3 id="managedidentitiesprojectslocationsglobaldomainsupdateldapssettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## managedidentities.projects.locations.list

<a id="opIdmanagedidentities.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="managedidentitiesprojectslocationslist-parameters">Parameters</h3>

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

<h3 id="managedidentitiesprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## managedidentities.projects.locations.global.operations.list

<a id="opIdmanagedidentities.projects.locations.global.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="managedidentitiesprojectslocationsglobaloperationslist-parameters">Parameters</h3>

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

<h3 id="managedidentitiesprojectslocationsglobaloperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## managedidentities.projects.locations.global.domains.attachTrust

<a id="opIdmanagedidentities.projects.locations.global.domains.attachTrust"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string:attachTrust \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "trust": {
      "createTime": "string",
      "lastKnownTrustConnectedHeartbeatTime": "string",
      "selectiveAuthentication": true,
      "state": "STATE_UNSPECIFIED",
      "stateDescription": "string",
      "targetDnsIpAddresses": [
        "string"
      ],
      "targetDomainName": "string",
      "trustDirection": "TRUST_DIRECTION_UNSPECIFIED",
      "trustHandshakeSecret": "string",
      "trustType": "TRUST_TYPE_UNSPECIFIED",
      "updateTime": "string"
    }
  }'
```

`POST /v1alpha1/{name}:attachTrust`

Adds AD trust in a given domain. Operation

> Body parameter

```json
{
  "trust": {
    "createTime": "string",
    "lastKnownTrustConnectedHeartbeatTime": "string",
    "selectiveAuthentication": true,
    "state": "STATE_UNSPECIFIED",
    "stateDescription": "string",
    "targetDnsIpAddresses": [
      "string"
    ],
    "targetDomainName": "string",
    "trustDirection": "TRUST_DIRECTION_UNSPECIFIED",
    "trustHandshakeSecret": "string",
    "trustType": "TRUST_TYPE_UNSPECIFIED",
    "updateTime": "string"
  }
}
```

<h3 id="managedidentitiesprojectslocationsglobaldomainsattachtrust-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource domain name, project name and location using the form: `projects/{project_id}/locations/global/domains/{domain_name}`|
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
|body|body|[AttachTrustRequest](#schemaattachtrustrequest)|false|none|
|» trust|body|[Trust](#schematrust)|false|The domain trust resource.|

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

<h3 id="managedidentitiesprojectslocationsglobaldomainsattachtrust-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## managedidentities.projects.locations.global.operations.cancel

<a id="opIdmanagedidentities.projects.locations.global.operations.cancel"></a>

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

<h3 id="managedidentitiesprojectslocationsglobaloperationscancel-parameters">Parameters</h3>

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

<h3 id="managedidentitiesprojectslocationsglobaloperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## managedidentities.projects.locations.global.domains.detachTrust

<a id="opIdmanagedidentities.projects.locations.global.domains.detachTrust"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string:detachTrust \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "trust": {
      "createTime": "string",
      "lastKnownTrustConnectedHeartbeatTime": "string",
      "selectiveAuthentication": true,
      "state": "STATE_UNSPECIFIED",
      "stateDescription": "string",
      "targetDnsIpAddresses": [
        "string"
      ],
      "targetDomainName": "string",
      "trustDirection": "TRUST_DIRECTION_UNSPECIFIED",
      "trustHandshakeSecret": "string",
      "trustType": "TRUST_TYPE_UNSPECIFIED",
      "updateTime": "string"
    }
  }'
```

`POST /v1alpha1/{name}:detachTrust`

Removes identified trust. Operation

> Body parameter

```json
{
  "trust": {
    "createTime": "string",
    "lastKnownTrustConnectedHeartbeatTime": "string",
    "selectiveAuthentication": true,
    "state": "STATE_UNSPECIFIED",
    "stateDescription": "string",
    "targetDnsIpAddresses": [
      "string"
    ],
    "targetDomainName": "string",
    "trustDirection": "TRUST_DIRECTION_UNSPECIFIED",
    "trustHandshakeSecret": "string",
    "trustType": "TRUST_TYPE_UNSPECIFIED",
    "updateTime": "string"
  }
}
```

<h3 id="managedidentitiesprojectslocationsglobaldomainsdetachtrust-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource domain name, project name, and location using the form: `projects/{project_id}/locations/global/domains/{domain_name}`|
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
|body|body|[DetachTrustRequest](#schemadetachtrustrequest)|false|none|
|» trust|body|[Trust](#schematrust)|false|The domain trust resource to removed.|

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

<h3 id="managedidentitiesprojectslocationsglobaldomainsdetachtrust-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## managedidentities.projects.locations.global.domains.reconfigureTrust

<a id="opIdmanagedidentities.projects.locations.global.domains.reconfigureTrust"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string:reconfigureTrust \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "trust": {
      "createTime": "string",
      "lastKnownTrustConnectedHeartbeatTime": "string",
      "selectiveAuthentication": true,
      "state": "STATE_UNSPECIFIED",
      "stateDescription": "string",
      "targetDnsIpAddresses": [
        "string"
      ],
      "targetDomainName": "string",
      "trustDirection": "TRUST_DIRECTION_UNSPECIFIED",
      "trustHandshakeSecret": "string",
      "trustType": "TRUST_TYPE_UNSPECIFIED",
      "updateTime": "string"
    }
  }'
```

`POST /v1alpha1/{name}:reconfigureTrust`

Updates the dns conditional forwarder. Operation

> Body parameter

```json
{
  "trust": {
    "createTime": "string",
    "lastKnownTrustConnectedHeartbeatTime": "string",
    "selectiveAuthentication": true,
    "state": "STATE_UNSPECIFIED",
    "stateDescription": "string",
    "targetDnsIpAddresses": [
      "string"
    ],
    "targetDomainName": "string",
    "trustDirection": "TRUST_DIRECTION_UNSPECIFIED",
    "trustHandshakeSecret": "string",
    "trustType": "TRUST_TYPE_UNSPECIFIED",
    "updateTime": "string"
  }
}
```

<h3 id="managedidentitiesprojectslocationsglobaldomainsreconfiguretrust-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource domain name, project name and location using the form: `projects/{project_id}/locations/global/domains/{domain_name}`|
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
|body|body|[ReconfigureTrustRequest](#schemareconfiguretrustrequest)|false|none|
|» trust|body|[Trust](#schematrust)|false|The domain trust resource with updated dns conditional forwarder.|

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

<h3 id="managedidentitiesprojectslocationsglobaldomainsreconfiguretrust-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## managedidentities.projects.locations.global.domains.resetAdminPassword

<a id="opIdmanagedidentities.projects.locations.global.domains.resetAdminPassword"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string:resetAdminPassword \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1alpha1/{name}:resetAdminPassword`

Resets managed identities admin password identified by managed_identities_admin_name

> Body parameter

```json
{}
```

<h3 id="managedidentitiesprojectslocationsglobaldomainsresetadminpassword-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}`|
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
|body|body|[ResetAdminPasswordRequest](#schemaresetadminpasswordrequest)|false|none|

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
  "password": "string"
}
```

<h3 id="managedidentitiesprojectslocationsglobaldomainsresetadminpassword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ResetAdminPasswordResponse](#schemaresetadminpasswordresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## managedidentities.projects.locations.global.domains.restore

<a id="opIdmanagedidentities.projects.locations.global.domains.restore"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string:restore \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "backupId": "string"
  }'
```

`POST /v1alpha1/{name}:restore`

RestoreDomain restores domain backup mentioned in the RestoreDomainRequest

> Body parameter

```json
{
  "backupId": "string"
}
```

<h3 id="managedidentitiesprojectslocationsglobaldomainsrestore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. resource name for the domain to which the backup belongs|
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
|body|body|[RestoreDomainRequest](#schemarestoredomainrequest)|false|none|
|» backupId|body|string|false|Required. ID of the backup to be restored|

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

<h3 id="managedidentitiesprojectslocationsglobaldomainsrestore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## managedidentities.projects.locations.global.domains.validateTrust

<a id="opIdmanagedidentities.projects.locations.global.domains.validateTrust"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string:validateTrust \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "trust": {
      "createTime": "string",
      "lastKnownTrustConnectedHeartbeatTime": "string",
      "selectiveAuthentication": true,
      "state": "STATE_UNSPECIFIED",
      "stateDescription": "string",
      "targetDnsIpAddresses": [
        "string"
      ],
      "targetDomainName": "string",
      "trustDirection": "TRUST_DIRECTION_UNSPECIFIED",
      "trustHandshakeSecret": "string",
      "trustType": "TRUST_TYPE_UNSPECIFIED",
      "updateTime": "string"
    }
  }'
```

`POST /v1alpha1/{name}:validateTrust`

Validate the trust state Operation

> Body parameter

```json
{
  "trust": {
    "createTime": "string",
    "lastKnownTrustConnectedHeartbeatTime": "string",
    "selectiveAuthentication": true,
    "state": "STATE_UNSPECIFIED",
    "stateDescription": "string",
    "targetDnsIpAddresses": [
      "string"
    ],
    "targetDomainName": "string",
    "trustDirection": "TRUST_DIRECTION_UNSPECIFIED",
    "trustHandshakeSecret": "string",
    "trustType": "TRUST_TYPE_UNSPECIFIED",
    "updateTime": "string"
  }
}
```

<h3 id="managedidentitiesprojectslocationsglobaldomainsvalidatetrust-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource domain name, project name, and location using the form: `projects/{project_id}/locations/global/domains/{domain_name}`|
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
|body|body|[ValidateTrustRequest](#schemavalidatetrustrequest)|false|none|
|» trust|body|[Trust](#schematrust)|false|The domain trust to validate trust state for.|

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

<h3 id="managedidentitiesprojectslocationsglobaldomainsvalidatetrust-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## managedidentities.projects.locations.global.domains.backups.list

<a id="opIdmanagedidentities.projects.locations.global.domains.backups.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/backups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{parent}/backups`

Lists Backup in a given project.

<h3 id="managedidentitiesprojectslocationsglobaldomainsbackupslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}`|
|filter|query|string|false|Optional. Filter specifying constraints of a list operation.|
|orderBy|query|string|false|Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.|
|pageSize|query|integer|false|Optional. The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried.|
|pageToken|query|string|false|Optional. The next_page_token value returned from a previous List request, if any.|
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
  "backups": [
    {
      "createTime": "string",
      "description": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "statusMessage": "string",
      "type": "TYPE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="managedidentitiesprojectslocationsglobaldomainsbackupslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListBackupsResponse](#schemalistbackupsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## managedidentities.projects.locations.global.domains.backups.create

<a id="opIdmanagedidentities.projects.locations.global.domains.backups.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/backups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v1alpha1/{parent}/backups`

Creates a Backup for a domain.

> Body parameter

```json
{
  "description": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="managedidentitiesprojectslocationsglobaldomainsbackupscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}`|
|backupId|query|string|false|Required. Backup Id, unique name to identify the backups with the following restrictions: * Must be lowercase letters, numbers, and hyphens * Must start with a letter. * Must contain between 1-63 characters. * Must end with a number or a letter. * Must be unique within the domain.|
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
|body|body|[Backup](#schemabackup)|false|none|
|» description|body|string|false|Optional. A short description of the backup.|
|» labels|body|object|false|Optional. Resource labels to represent user provided metadata.|
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

<h3 id="managedidentitiesprojectslocationsglobaldomainsbackupscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## managedidentities.projects.locations.global.domains.list

<a id="opIdmanagedidentities.projects.locations.global.domains.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/domains \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{parent}/domains`

Lists Domains in a given project.

<h3 id="managedidentitiesprojectslocationsglobaldomainslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the domain location using the form: `projects/{project_id}/locations/global`|
|filter|query|string|false|Optional. Filter specifying constraints of a list operation. For example, `Domain.fqdn="mydomain.myorginization"`.|
|orderBy|query|string|false|Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.|
|pageSize|query|integer|false|If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried.|
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
  "domains": [
    {
      "auditLogsEnabled": true,
      "authorizedNetworks": [
        "string"
      ],
      "createTime": "string",
      "fqdn": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "locations": [
        "string"
      ],
      "managedIdentitiesAdminName": "string",
      "name": "string",
      "reservedIpRange": "string",
      "state": "STATE_UNSPECIFIED",
      "statusMessage": "string",
      "trusts": [
        {
          "createTime": "string",
          "lastKnownTrustConnectedHeartbeatTime": "string",
          "selectiveAuthentication": true,
          "state": "STATE_UNSPECIFIED",
          "stateDescription": "string",
          "targetDnsIpAddresses": [
            "string"
          ],
          "targetDomainName": "string",
          "trustDirection": "TRUST_DIRECTION_UNSPECIFIED",
          "trustHandshakeSecret": "string",
          "trustType": "TRUST_TYPE_UNSPECIFIED",
          "updateTime": "string"
        }
      ],
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

<h3 id="managedidentitiesprojectslocationsglobaldomainslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListDomainsResponse](#schemalistdomainsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## managedidentities.projects.locations.global.domains.create

<a id="opIdmanagedidentities.projects.locations.global.domains.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/domains \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "auditLogsEnabled": true,
    "authorizedNetworks": [
      "string"
    ],
    "createTime": "string",
    "fqdn": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "locations": [
      "string"
    ],
    "managedIdentitiesAdminName": "string",
    "name": "string",
    "reservedIpRange": "string",
    "state": "STATE_UNSPECIFIED",
    "statusMessage": "string",
    "trusts": [
      {
        "createTime": "string",
        "lastKnownTrustConnectedHeartbeatTime": "string",
        "selectiveAuthentication": true,
        "state": "STATE_UNSPECIFIED",
        "stateDescription": "string",
        "targetDnsIpAddresses": [
          "string"
        ],
        "targetDomainName": "string",
        "trustDirection": "TRUST_DIRECTION_UNSPECIFIED",
        "trustHandshakeSecret": "string",
        "trustType": "TRUST_TYPE_UNSPECIFIED",
        "updateTime": "string"
      }
    ],
    "updateTime": "string"
  }'
```

`POST /v1alpha1/{parent}/domains`

Creates a Microsoft AD Domain in a given project. Operation

> Body parameter

```json
{
  "auditLogsEnabled": true,
  "authorizedNetworks": [
    "string"
  ],
  "createTime": "string",
  "fqdn": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "locations": [
    "string"
  ],
  "managedIdentitiesAdminName": "string",
  "name": "string",
  "reservedIpRange": "string",
  "state": "STATE_UNSPECIFIED",
  "statusMessage": "string",
  "trusts": [
    {
      "createTime": "string",
      "lastKnownTrustConnectedHeartbeatTime": "string",
      "selectiveAuthentication": true,
      "state": "STATE_UNSPECIFIED",
      "stateDescription": "string",
      "targetDnsIpAddresses": [
        "string"
      ],
      "targetDomainName": "string",
      "trustDirection": "TRUST_DIRECTION_UNSPECIFIED",
      "trustHandshakeSecret": "string",
      "trustType": "TRUST_TYPE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "updateTime": "string"
}
```

<h3 id="managedidentitiesprojectslocationsglobaldomainscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Resource project name and location using the form: `projects/{project_id}/locations/global`|
|domainName|query|string|false|The fully qualified domain name. e.g. mydomain.myorganization.com, with the following restrictions: * Must contain only lowercase letters, numbers, periods and hyphens. * Must start with a letter. * Must contain between 2-64 characters. * Must end with a number or a letter. * Must not start with period. * Must be unique within the project. * First segment length (mydomain form example above) shouldn't exceed 15 chars. * The last segment cannot be fully numeric.|
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
|body|body|[Domain](#schemadomain)|false|none|
|» auditLogsEnabled|body|boolean|false|Optional. Configuration for audit logs. True if audit logs are enabled, else false. Default is audit logs disabled.|
|» authorizedNetworks|body|[string]|false|Optional. The full names of the Google Compute Engine [networks](/compute/docs/networks-and-firewalls#networks) to which the instance is connected. Network can be added using UpdateDomain later. Domain is only available on network part of authorized_networks. Caller needs to make sure that CIDR subnets do not overlap between networks, else domain creation will fail.|
|» createTime|body|string(google-datetime)|false|Output only. The time the instance was created. Synthetic field is populated automatically by CCFE. go/ccfe-synthetic-field-user-guide|
|» fqdn|body|string|false|Output only. Fully-qualified domain name of the exposed domain used by clients to connect to the service. Similar to what would be chosen for an Active Directory that is set up on an internal network.|
|» labels|body|object|false|Optional. Resource labels to represent user provided metadata|
|» » **additionalProperties**|body|string|false|none|
|» locations|body|[string]|false|Required. Locations where domain needs to be provisioned. regions e.g. us-west1 or us-east4 Service supports up to 4 locations at once. Each location will use a /26 block.|
|» managedIdentitiesAdminName|body|string|false|Optional. Name of customer-visible admin used to perform Active Directory operations. If not specified `setupadmin` would be used.|
|» name|body|string|false|Output only. Unique name of the domain in this scope including projects and location using the form: `projects/{project_id}/locations/global/domains/{domain_name}`.|
|» reservedIpRange|body|string|false|Required. The CIDR range of internal addresses that are reserved for this domain. Reserved networks must be /24 or larger. Ranges must be unique and non-overlapping with existing subnets in [Domain].[authorized_networks].|
|» state|body|string|false|Output only. The current state of this domain.|
|» statusMessage|body|string|false|Output only. Additional information about the current status of this domain, if available.|
|» trusts|body|[[Trust](#schematrust)]|false|Output only. The current trusts associated with the domain.|
|» updateTime|body|string(google-datetime)|false|Output only. Last update time. Synthetic field is populated automatically by CCFE.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» state|STATE_UNSPECIFIED|
|» state|CREATING|
|» state|READY|
|» state|UPDATING|
|» state|DELETING|
|» state|REPAIRING|
|» state|PERFORMING_MAINTENANCE|
|» state|DOWN|

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

<h3 id="managedidentitiesprojectslocationsglobaldomainscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## managedidentities.projects.locations.global.peerings.list

<a id="opIdmanagedidentities.projects.locations.global.peerings.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/peerings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{parent}/peerings`

Lists Peerings in a given project.

<h3 id="managedidentitiesprojectslocationsglobalpeeringslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the domain location using the form: `projects/{project_id}/locations/global`|
|filter|query|string|false|Optional. Filter specifying constraints of a list operation. For example, `peering.authoized_network ="/projects/myprojectid"`.|
|orderBy|query|string|false|Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.|
|pageSize|query|integer|false|Optional. The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried.|
|pageToken|query|string|false|Optional. The next_page_token value returned from a previous List request, if any.|
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
  "peerings": [
    {
      "authorizedNetwork": "string",
      "createTime": "string",
      "domainResource": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "statusMessage": "string",
      "updateTime": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

<h3 id="managedidentitiesprojectslocationsglobalpeeringslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListPeeringsResponse](#schemalistpeeringsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## managedidentities.projects.locations.global.peerings.create

<a id="opIdmanagedidentities.projects.locations.global.peerings.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/peerings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "authorizedNetwork": "string",
    "domainResource": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v1alpha1/{parent}/peerings`

Creates a Peering for Managed AD instance.

> Body parameter

```json
{
  "authorizedNetwork": "string",
  "domainResource": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="managedidentitiesprojectslocationsglobalpeeringscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Resource project name and location using the form: `projects/{project_id}/locations/global`|
|peeringId|query|string|false|Required. Peering Id, unique name to identify peering.|
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
|body|body|[Peering](#schemapeering)|false|none|
|» authorizedNetwork|body|string|false|Required. The full names of the Google Compute Engine [networks](/compute/docs/networks-and-firewalls#networks) to which the instance is connected. Caller needs to make sure that CIDR subnets do not overlap between networks, else peering creation will fail.|
|» domainResource|body|string|false|Required. Full domain resource path for the Managed AD Domain involved in peering. The resource path should be in the form: `projects/{project_id}/locations/global/domains/{domain_name}`|
|» labels|body|object|false|Optional. Resource labels to represent user provided metadata.|
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

<h3 id="managedidentitiesprojectslocationsglobalpeeringscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## managedidentities.projects.locations.global.domains.sqlIntegrations.list

<a id="opIdmanagedidentities.projects.locations.global.domains.sqlIntegrations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string/sqlIntegrations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{parent}/sqlIntegrations`

Lists SQLIntegrations in a given domain.

<h3 id="managedidentitiesprojectslocationsglobaldomainssqlintegrationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the SqlIntegrations using the form: `projects/{project_id}/locations/global/domains/*`|
|filter|query|string|false|Optional. Filter specifying constraints of a list operation. For example, `SqlIntegration.name="sql"`.|
|orderBy|query|string|false|Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.|
|pageSize|query|integer|false|Optional. The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response'ANIZATIONs next_page_token to determine if there are more instances left to be queried.|
|pageToken|query|string|false|Optional. The next_page_token value returned from a previous List request, if any.|
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
  "sqlIntegrations": [
    {
      "createTime": "string",
      "name": "string",
      "sqlInstance": "string",
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

<h3 id="managedidentitiesprojectslocationsglobaldomainssqlintegrationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListSQLIntegrationsResponse](#schemalistsqlintegrationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## managedidentities.projects.locations.global.peerings.getIamPolicy

<a id="opIdmanagedidentities.projects.locations.global.peerings.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string:getIamPolicy \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha1/{resource}:getIamPolicy`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

<h3 id="managedidentitiesprojectslocationsglobalpeeringsgetiampolicy-parameters">Parameters</h3>

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

<h3 id="managedidentitiesprojectslocationsglobalpeeringsgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## managedidentities.projects.locations.global.peerings.setIamPolicy

<a id="opIdmanagedidentities.projects.locations.global.peerings.setIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string:setIamPolicy \
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

`POST /v1alpha1/{resource}:setIamPolicy`

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

<h3 id="managedidentitiesprojectslocationsglobalpeeringssetiampolicy-parameters">Parameters</h3>

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

<h3 id="managedidentitiesprojectslocationsglobalpeeringssetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## managedidentities.projects.locations.global.peerings.testIamPermissions

<a id="opIdmanagedidentities.projects.locations.global.peerings.testIamPermissions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha1/string:testIamPermissions \
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

`POST /v1alpha1/{resource}:testIamPermissions`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

> Body parameter

```json
{
  "permissions": [
    "string"
  ]
}
```

<h3 id="managedidentitiesprojectslocationsglobalpeeringstestiampermissions-parameters">Parameters</h3>

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

<h3 id="managedidentitiesprojectslocationsglobalpeeringstestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TestIamPermissionsResponse](#schematestiampermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AttachTrustRequest">AttachTrustRequest</h2>
<!-- backwards compatibility -->
<a id="schemaattachtrustrequest"></a>
<a id="schema_AttachTrustRequest"></a>
<a id="tocSattachtrustrequest"></a>
<a id="tocsattachtrustrequest"></a>

```json
{
  "trust": {
    "createTime": "string",
    "lastKnownTrustConnectedHeartbeatTime": "string",
    "selectiveAuthentication": true,
    "state": "STATE_UNSPECIFIED",
    "stateDescription": "string",
    "targetDnsIpAddresses": [
      "string"
    ],
    "targetDomainName": "string",
    "trustDirection": "TRUST_DIRECTION_UNSPECIFIED",
    "trustHandshakeSecret": "string",
    "trustType": "TRUST_TYPE_UNSPECIFIED",
    "updateTime": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trust|[Trust](#schematrust)|false|none|The domain trust resource.|

<h2 id="tocS_Backup">Backup</h2>
<!-- backwards compatibility -->
<a id="schemabackup"></a>
<a id="schema_Backup"></a>
<a id="tocSbackup"></a>
<a id="tocsbackup"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "statusMessage": "string",
  "type": "TYPE_UNSPECIFIED",
  "updateTime": "string"
}
```

Represents a Managed Microsoft Identities backup.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time the backups was created.|
|description|string|false|none|Optional. A short description of the backup.|
|labels|object|false|none|Optional. Resource labels to represent user provided metadata.|
|name|string|false|read-only|Output only. The unique name of the Backup in the form of projects/{project_id}/locations/global/domains/{domain_name}/backups/{name}|
|state|string|false|read-only|Output only. The current state of the backup.|
|statusMessage|string|false|read-only|Output only. Additional information about the current status of this backup, if available.|
|type|string|false|read-only|Output only. Indicates whether it’s an on-demand backup or scheduled.|
|updateTime|string(google-datetime)|false|read-only|Output only. Last update time.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|ACTIVE|
|state|FAILED|
|state|DELETING|
|type|TYPE_UNSPECIFIED|
|type|ON_DEMAND|
|type|SCHEDULED|
|type|SCHEMA_EXTENSION|

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
  "expireTime": "string",
  "issuingCertificate": {
    "expireTime": "string",
    "issuingCertificate": {},
    "subject": "string",
    "subjectAlternativeName": [
      "string"
    ],
    "thumbprint": "string"
  },
  "subject": "string",
  "subjectAlternativeName": [
    "string"
  ],
  "thumbprint": "string"
}
```

Certificate used to configure LDAPS.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expireTime|string(google-datetime)|false|none|The certificate expire time.|
|issuingCertificate|[Certificate](#schemacertificate)|false|none|The issuer of this certificate.|
|subject|string|false|none|The certificate subject.|
|subjectAlternativeName|[string]|false|none|The additional hostnames for the domain.|
|thumbprint|string|false|none|The certificate thumbprint which uniquely identifies the certificate.|

<h2 id="tocS_CheckMigrationPermissionRequest">CheckMigrationPermissionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacheckmigrationpermissionrequest"></a>
<a id="schema_CheckMigrationPermissionRequest"></a>
<a id="tocScheckmigrationpermissionrequest"></a>
<a id="tocscheckmigrationpermissionrequest"></a>

```json
{}
```

CheckMigrationPermissionRequest is the request message for CheckMigrationPermission method.

<h2 id="tocS_CheckMigrationPermissionResponse">CheckMigrationPermissionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacheckmigrationpermissionresponse"></a>
<a id="schema_CheckMigrationPermissionResponse"></a>
<a id="tocScheckmigrationpermissionresponse"></a>
<a id="tocscheckmigrationpermissionresponse"></a>

```json
{
  "onpremDomains": [
    {
      "name": "string",
      "sidFilteringState": "SID_FILTERING_STATE_UNSPECIFIED"
    }
  ],
  "state": "STATE_UNSPECIFIED"
}
```

CheckMigrationPermissionResponse is the response message for CheckMigrationPermission method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|onpremDomains|[[OnPremDomainSIDDetails](#schemaonpremdomainsiddetails)]|false|none|The state of SID filtering of all the domains which has trust established.|
|state|string|false|none|The state of DomainMigration.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|DISABLED|
|state|ENABLED|
|state|NEEDS_MAINTENANCE|

<h2 id="tocS_DailyCycle">DailyCycle</h2>
<!-- backwards compatibility -->
<a id="schemadailycycle"></a>
<a id="schema_DailyCycle"></a>
<a id="tocSdailycycle"></a>
<a id="tocsdailycycle"></a>

```json
{
  "duration": "string",
  "startTime": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  }
}
```

Time window specified for daily operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duration|string(google-duration)|false|none|Output only. Duration of the time window, set by service producer.|
|startTime|[TimeOfDay](#schematimeofday)|false|none|Time within the day to start the operations.|

<h2 id="tocS_Date">Date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_Date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
{
  "day": 0,
  "month": 0,
  "year": 0
}
```

Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|false|none|Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.|
|month|integer(int32)|false|none|Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.|
|year|integer(int32)|false|none|Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.|

<h2 id="tocS_DenyMaintenancePeriod">DenyMaintenancePeriod</h2>
<!-- backwards compatibility -->
<a id="schemadenymaintenanceperiod"></a>
<a id="schema_DenyMaintenancePeriod"></a>
<a id="tocSdenymaintenanceperiod"></a>
<a id="tocsdenymaintenanceperiod"></a>

```json
{
  "endDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "startDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "time": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  }
}
```

DenyMaintenancePeriod definition. Maintenance is forbidden within the deny period. The start_date must be less than the end_date.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDate|[Date](#schemadate)|false|none|Deny period end date. This can be: * A full date, with non-zero year, month and day values. * A month and day value, with a zero year. Allows recurring deny periods each year. Date matching this period will have to be before the end.|
|startDate|[Date](#schemadate)|false|none|Deny period start date. This can be: * A full date, with non-zero year, month and day values. * A month and day value, with a zero year. Allows recurring deny periods each year. Date matching this period will have to be the same or after the start.|
|time|[TimeOfDay](#schematimeofday)|false|none|Time in UTC when the Blackout period starts on start_date and ends on end_date. This can be: * Full time. * All zeros for 00:00:00 UTC|

<h2 id="tocS_DetachTrustRequest">DetachTrustRequest</h2>
<!-- backwards compatibility -->
<a id="schemadetachtrustrequest"></a>
<a id="schema_DetachTrustRequest"></a>
<a id="tocSdetachtrustrequest"></a>
<a id="tocsdetachtrustrequest"></a>

```json
{
  "trust": {
    "createTime": "string",
    "lastKnownTrustConnectedHeartbeatTime": "string",
    "selectiveAuthentication": true,
    "state": "STATE_UNSPECIFIED",
    "stateDescription": "string",
    "targetDnsIpAddresses": [
      "string"
    ],
    "targetDomainName": "string",
    "trustDirection": "TRUST_DIRECTION_UNSPECIFIED",
    "trustHandshakeSecret": "string",
    "trustType": "TRUST_TYPE_UNSPECIFIED",
    "updateTime": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trust|[Trust](#schematrust)|false|none|The domain trust resource to removed.|

<h2 id="tocS_DisableMigrationRequest">DisableMigrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisablemigrationrequest"></a>
<a id="schema_DisableMigrationRequest"></a>
<a id="tocSdisablemigrationrequest"></a>
<a id="tocsdisablemigrationrequest"></a>

```json
{}
```

DisableMigrationRequest is the request message for DisableMigration method.

<h2 id="tocS_Domain">Domain</h2>
<!-- backwards compatibility -->
<a id="schemadomain"></a>
<a id="schema_Domain"></a>
<a id="tocSdomain"></a>
<a id="tocsdomain"></a>

```json
{
  "auditLogsEnabled": true,
  "authorizedNetworks": [
    "string"
  ],
  "createTime": "string",
  "fqdn": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "locations": [
    "string"
  ],
  "managedIdentitiesAdminName": "string",
  "name": "string",
  "reservedIpRange": "string",
  "state": "STATE_UNSPECIFIED",
  "statusMessage": "string",
  "trusts": [
    {
      "createTime": "string",
      "lastKnownTrustConnectedHeartbeatTime": "string",
      "selectiveAuthentication": true,
      "state": "STATE_UNSPECIFIED",
      "stateDescription": "string",
      "targetDnsIpAddresses": [
        "string"
      ],
      "targetDomainName": "string",
      "trustDirection": "TRUST_DIRECTION_UNSPECIFIED",
      "trustHandshakeSecret": "string",
      "trustType": "TRUST_TYPE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "updateTime": "string"
}
```

If the domain is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auditLogsEnabled|boolean|false|none|Optional. Configuration for audit logs. True if audit logs are enabled, else false. Default is audit logs disabled.|
|authorizedNetworks|[string]|false|none|Optional. The full names of the Google Compute Engine [networks](/compute/docs/networks-and-firewalls#networks) to which the instance is connected. Network can be added using UpdateDomain later. Domain is only available on network part of authorized_networks. Caller needs to make sure that CIDR subnets do not overlap between networks, else domain creation will fail.|
|createTime|string(google-datetime)|false|none|Output only. The time the instance was created. Synthetic field is populated automatically by CCFE. go/ccfe-synthetic-field-user-guide|
|fqdn|string|false|none|Output only. Fully-qualified domain name of the exposed domain used by clients to connect to the service. Similar to what would be chosen for an Active Directory that is set up on an internal network.|
|labels|object|false|none|Optional. Resource labels to represent user provided metadata|
|locations|[string]|false|none|Required. Locations where domain needs to be provisioned. regions e.g. us-west1 or us-east4 Service supports up to 4 locations at once. Each location will use a /26 block.|
|managedIdentitiesAdminName|string|false|none|Optional. Name of customer-visible admin used to perform Active Directory operations. If not specified `setupadmin` would be used.|
|name|string|false|none|Output only. Unique name of the domain in this scope including projects and location using the form: `projects/{project_id}/locations/global/domains/{domain_name}`.|
|reservedIpRange|string|false|none|Required. The CIDR range of internal addresses that are reserved for this domain. Reserved networks must be /24 or larger. Ranges must be unique and non-overlapping with existing subnets in [Domain].[authorized_networks].|
|state|string|false|none|Output only. The current state of this domain.|
|statusMessage|string|false|none|Output only. Additional information about the current status of this domain, if available.|
|trusts|[[Trust](#schematrust)]|false|none|Output only. The current trusts associated with the domain.|
|updateTime|string(google-datetime)|false|none|Output only. Last update time. Synthetic field is populated automatically by CCFE.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|READY|
|state|UPDATING|
|state|DELETING|
|state|REPAIRING|
|state|PERFORMING_MAINTENANCE|
|state|DOWN|

<h2 id="tocS_DomainJoinMachineRequest">DomainJoinMachineRequest</h2>
<!-- backwards compatibility -->
<a id="schemadomainjoinmachinerequest"></a>
<a id="schema_DomainJoinMachineRequest"></a>
<a id="tocSdomainjoinmachinerequest"></a>
<a id="tocsdomainjoinmachinerequest"></a>

```json
{
  "force": true,
  "ouName": "string",
  "vmIdToken": "string"
}
```

DomainJoinMachineRequest is the request message for DomainJoinMachine method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|force|boolean|false|none|Optional. force if True, forces domain join even if the computer account already exists.|
|ouName|string|false|none|Optional. OU name where the VM needs to be domain joined|
|vmIdToken|string|false|none|Required. Full instance id token of compute engine VM to verify instance identity. More about this: https://cloud.google.com/compute/docs/instances/verifying-instance-identity#request_signature|

<h2 id="tocS_DomainJoinMachineResponse">DomainJoinMachineResponse</h2>
<!-- backwards compatibility -->
<a id="schemadomainjoinmachineresponse"></a>
<a id="schema_DomainJoinMachineResponse"></a>
<a id="tocSdomainjoinmachineresponse"></a>
<a id="tocsdomainjoinmachineresponse"></a>

```json
{
  "domainJoinBlob": "string"
}
```

DomainJoinMachineResponse is the response message for DomainJoinMachine method

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainJoinBlob|string|false|none|Offline domain join blob as the response|

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

<h2 id="tocS_EnableMigrationRequest">EnableMigrationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenablemigrationrequest"></a>
<a id="schema_EnableMigrationRequest"></a>
<a id="tocSenablemigrationrequest"></a>
<a id="tocsenablemigrationrequest"></a>

```json
{
  "migratingDomains": [
    {
      "disableSidFiltering": true,
      "domainName": "string"
    }
  ]
}
```

EnableMigrationRequest is the request message for EnableMigration method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|migratingDomains|[[OnPremDomainDetails](#schemaonpremdomaindetails)]|false|none|Required. List of the on-prem domains to be migrated.|

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

<h2 id="tocS_ExtendSchemaRequest">ExtendSchemaRequest</h2>
<!-- backwards compatibility -->
<a id="schemaextendschemarequest"></a>
<a id="schema_ExtendSchemaRequest"></a>
<a id="tocSextendschemarequest"></a>
<a id="tocsextendschemarequest"></a>

```json
{
  "description": "string",
  "fileContents": "string",
  "gcsPath": "string"
}
```

ExtendSchemaRequest is the request message for ExtendSchema method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Required. Description for Schema Change.|
|fileContents|string(byte)|false|none|File uploaded as a byte stream input.|
|gcsPath|string|false|none|File stored in Cloud Storage bucket and represented in the form projects/{project_id}/buckets/{bucket_name}/objects/{object_name} File should be in the same project as the domain.|

<h2 id="tocS_GoogleCloudManagedidentitiesV1OpMetadata">GoogleCloudManagedidentitiesV1OpMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmanagedidentitiesv1opmetadata"></a>
<a id="schema_GoogleCloudManagedidentitiesV1OpMetadata"></a>
<a id="tocSgooglecloudmanagedidentitiesv1opmetadata"></a>
<a id="tocsgooglecloudmanagedidentitiesv1opmetadata"></a>

```json
{
  "apiVersion": "string",
  "createTime": "string",
  "endTime": "string",
  "requestedCancellation": true,
  "target": "string",
  "verb": "string"
}
```

Represents the metadata of the long-running operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|read-only|Output only. API version used to start the operation.|
|createTime|string(google-datetime)|false|read-only|Output only. The time the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. The time the operation finished running.|
|requestedCancellation|boolean|false|read-only|Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.|
|target|string|false|read-only|Output only. Server-defined resource path for the target of the operation.|
|verb|string|false|read-only|Output only. Name of the verb executed by the operation.|

<h2 id="tocS_GoogleCloudManagedidentitiesV1alpha1OpMetadata">GoogleCloudManagedidentitiesV1alpha1OpMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmanagedidentitiesv1alpha1opmetadata"></a>
<a id="schema_GoogleCloudManagedidentitiesV1alpha1OpMetadata"></a>
<a id="tocSgooglecloudmanagedidentitiesv1alpha1opmetadata"></a>
<a id="tocsgooglecloudmanagedidentitiesv1alpha1opmetadata"></a>

```json
{
  "apiVersion": "string",
  "createTime": "string",
  "endTime": "string",
  "requestedCancellation": true,
  "target": "string",
  "verb": "string"
}
```

Represents the metadata of the long-running operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|read-only|Output only. API version used to start the operation.|
|createTime|string(google-datetime)|false|read-only|Output only. The time the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. The time the operation finished running.|
|requestedCancellation|boolean|false|read-only|Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.|
|target|string|false|read-only|Output only. Server-defined resource path for the target of the operation.|
|verb|string|false|read-only|Output only. Name of the verb executed by the operation.|

<h2 id="tocS_GoogleCloudManagedidentitiesV1beta1OpMetadata">GoogleCloudManagedidentitiesV1beta1OpMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmanagedidentitiesv1beta1opmetadata"></a>
<a id="schema_GoogleCloudManagedidentitiesV1beta1OpMetadata"></a>
<a id="tocSgooglecloudmanagedidentitiesv1beta1opmetadata"></a>
<a id="tocsgooglecloudmanagedidentitiesv1beta1opmetadata"></a>

```json
{
  "apiVersion": "string",
  "createTime": "string",
  "endTime": "string",
  "requestedCancellation": true,
  "target": "string",
  "verb": "string"
}
```

Represents the metadata of the long-running operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|false|read-only|Output only. API version used to start the operation.|
|createTime|string(google-datetime)|false|read-only|Output only. The time the operation was created.|
|endTime|string(google-datetime)|false|read-only|Output only. The time the operation finished running.|
|requestedCancellation|boolean|false|read-only|Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.|
|target|string|false|read-only|Output only. Server-defined resource path for the target of the operation.|
|verb|string|false|read-only|Output only. Name of the verb executed by the operation.|

<h2 id="tocS_GoogleCloudSaasacceleratorManagementProvidersV1Instance">GoogleCloudSaasacceleratorManagementProvidersV1Instance</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsaasacceleratormanagementprovidersv1instance"></a>
<a id="schema_GoogleCloudSaasacceleratorManagementProvidersV1Instance"></a>
<a id="tocSgooglecloudsaasacceleratormanagementprovidersv1instance"></a>
<a id="tocsgooglecloudsaasacceleratormanagementprovidersv1instance"></a>

```json
{
  "consumerDefinedName": "string",
  "createTime": "string",
  "instanceType": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "maintenancePolicyNames": {
    "property1": "string",
    "property2": "string"
  },
  "maintenanceSchedules": {
    "property1": {
      "canReschedule": true,
      "endTime": "string",
      "rolloutManagementPolicy": "string",
      "scheduleDeadlineTime": "string",
      "startTime": "string"
    },
    "property2": {
      "canReschedule": true,
      "endTime": "string",
      "rolloutManagementPolicy": "string",
      "scheduleDeadlineTime": "string",
      "startTime": "string"
    }
  },
  "maintenanceSettings": {
    "exclude": true,
    "isRollback": true,
    "maintenancePolicies": {
      "property1": {
        "createTime": "string",
        "description": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "state": "STATE_UNSPECIFIED",
        "updatePolicy": {
          "channel": "UPDATE_CHANNEL_UNSPECIFIED",
          "denyMaintenancePeriods": [
            {
              "endDate": {
                "day": 0,
                "month": 0,
                "year": 0
              },
              "startDate": {
                "day": 0,
                "month": 0,
                "year": 0
              },
              "time": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              }
            }
          ],
          "window": {
            "dailyCycle": {
              "duration": "string",
              "startTime": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              }
            },
            "weeklyCycle": {
              "schedule": [
                {
                  "day": "DAY_OF_WEEK_UNSPECIFIED",
                  "duration": "string",
                  "startTime": {
                    "hours": 0,
                    "minutes": 0,
                    "nanos": 0,
                    "seconds": 0
                  }
                }
              ]
            }
          }
        },
        "updateTime": "string"
      },
      "property2": {
        "createTime": "string",
        "description": "string",
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "state": "STATE_UNSPECIFIED",
        "updatePolicy": {
          "channel": "UPDATE_CHANNEL_UNSPECIFIED",
          "denyMaintenancePeriods": [
            {
              "endDate": {
                "day": 0,
                "month": 0,
                "year": 0
              },
              "startDate": {
                "day": 0,
                "month": 0,
                "year": 0
              },
              "time": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              }
            }
          ],
          "window": {
            "dailyCycle": {
              "duration": "string",
              "startTime": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              }
            },
            "weeklyCycle": {
              "schedule": [
                {
                  "day": "DAY_OF_WEEK_UNSPECIFIED",
                  "duration": "string",
                  "startTime": {
                    "hours": 0,
                    "minutes": 0,
                    "nanos": 0,
                    "seconds": 0
                  }
                }
              ]
            }
          }
        },
        "updateTime": "string"
      }
    }
  },
  "name": "string",
  "notificationParameters": {
    "property1": {
      "values": [
        "string"
      ]
    },
    "property2": {
      "values": [
        "string"
      ]
    }
  },
  "producerMetadata": {
    "property1": "string",
    "property2": "string"
  },
  "provisionedResources": [
    {
      "resourceType": "string",
      "resourceUrl": "string"
    }
  ],
  "slmInstanceTemplate": "string",
  "sloMetadata": {
    "nodes": [
      {
        "location": "string",
        "nodeId": "string",
        "perSliEligibility": {
          "eligibilities": {
            "property1": {
              "eligible": true,
              "reason": "string"
            },
            "property2": {
              "eligible": true,
              "reason": "string"
            }
          }
        }
      }
    ],
    "perSliEligibility": {
      "eligibilities": {
        "property1": {
          "eligible": true,
          "reason": "string"
        },
        "property2": {
          "eligible": true,
          "reason": "string"
        }
      }
    },
    "tier": "string"
  },
  "softwareVersions": {
    "property1": "string",
    "property2": "string"
  },
  "state": "STATE_UNSPECIFIED",
  "tenantProjectId": "string",
  "updateTime": "string"
}
```

Instance represents the interface for SLM services to actuate the state of control plane resources. Example Instance in JSON, where consumer-project-number=123456, producer-project-id=cloud-sql: ```json Instance: { "name": "projects/123456/locations/us-east1/instances/prod-instance", "create_time": { "seconds": 1526406431, }, "labels": { "env": "prod", "foo": "bar" }, "state": READY, "software_versions": { "software_update": "cloud-sql-09-28-2018", }, "maintenance_policy_names": { "UpdatePolicy": "projects/123456/locations/us-east1/maintenancePolicies/prod-update-policy", } "tenant_project_id": "cloud-sql-test-tenant", "producer_metadata": { "cloud-sql-tier": "basic", "cloud-sql-instance-size": "1G", }, "provisioned_resources": [ { "resource-type": "compute-instance", "resource-url": "https://www.googleapis.com/compute/v1/projects/cloud-sql/zones/us-east1-b/instances/vm-1", } ], "maintenance_schedules": { "csa_rollout": { "start_time": { "seconds": 1526406431, }, "end_time": { "seconds": 1535406431, }, }, "ncsa_rollout": { "start_time": { "seconds": 1526406431, }, "end_time": { "seconds": 1535406431, }, } }, "consumer_defined_name": "my-sql-instance1", } ``` LINT.IfChange

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consumerDefinedName|string|false|none|consumer_defined_name is the name of the instance set by the service consumers. Generally this is different from the `name` field which reperesents the system-assigned id of the instance which the service consumers do not recognize. This is a required field for tenants onboarding to Maintenance Window notifications (go/slm-rollout-maintenance-policies#prerequisites).|
|createTime|string(google-datetime)|false|read-only|Output only. Timestamp when the resource was created.|
|instanceType|string|false|none|Optional. The instance_type of this instance of format: projects/{project_number}/locations/{location_id}/instanceTypes/{instance_type_id}. Instance Type represents a high-level tier or SKU of the service that this instance belong to. When enabled(eg: Maintenance Rollout), Rollout uses 'instance_type' along with 'software_versions' to determine whether instance needs an update or not.|
|labels|object|false|none|Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user.|
|maintenancePolicyNames|object|false|none|Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the referenced policy must define the same policy type. For details, please refer to go/cloud-saas-mw-ug. Should not be set if maintenance_settings.maintenance_policies is set.|
|maintenanceSchedules|object|false|none|The MaintenanceSchedule contains the scheduling information of published maintenance schedule with same key as software_versions.|
|maintenanceSettings|[GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings](#schemagooglecloudsaasacceleratormanagementprovidersv1maintenancesettings)|false|none|Optional. The MaintenanceSettings associated with instance.|
|name|string|false|none|Unique name of the resource. It uses the form: `projects/{project_number}/locations/{location_id}/instances/{instance_id}` Note: This name is passed, stored and logged across the rollout system. So use of consumer project_id or any other consumer PII in the name is strongly discouraged for wipeout (go/wipeout) compliance. See go/elysium/project_ids#storage-guidance for more details.|
|notificationParameters|object|false|none|Optional. notification_parameter are information that service producers may like to include that is not relevant to Rollout. This parameter will only be passed to Gamma and Cloud Logging for notification/logging purpose.|
|producerMetadata|object|false|read-only|Output only. Custom string attributes used primarily to expose producer-specific information in monitoring dashboards. See go/get-instance-metadata.|
|provisionedResources|[[GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource](#schemagooglecloudsaasacceleratormanagementprovidersv1provisionedresource)]|false|read-only|Output only. The list of data plane resources provisioned for this instance, e.g. compute VMs. See go/get-instance-metadata.|
|slmInstanceTemplate|string|false|none|Link to the SLM instance template. Only populated when updating SLM instances via SSA's Actuation service adaptor. Service producers with custom control plane (e.g. Cloud SQL) doesn't need to populate this field. Instead they should use software_versions.|
|sloMetadata|[GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata](#schemagooglecloudsaasacceleratormanagementprovidersv1slometadata)|false|none|Output only. SLO metadata for instance classification in the Standardized dataplane SLO platform. See go/cloud-ssa-standard-slo for feature description.|
|softwareVersions|object|false|none|Software versions that are used to deploy this instance. This can be mutated by rollout services.|
|state|string|false|read-only|Output only. Current lifecycle state of the resource (e.g. if it's being created or ready to use).|
|tenantProjectId|string|false|read-only|Output only. ID of the associated GCP tenant project. See go/get-instance-metadata.|
|updateTime|string(google-datetime)|false|read-only|Output only. Timestamp when the resource was last modified.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|READY|
|state|UPDATING|
|state|REPAIRING|
|state|DELETING|
|state|ERROR|

<h2 id="tocS_GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule">GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsaasacceleratormanagementprovidersv1maintenanceschedule"></a>
<a id="schema_GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule"></a>
<a id="tocSgooglecloudsaasacceleratormanagementprovidersv1maintenanceschedule"></a>
<a id="tocsgooglecloudsaasacceleratormanagementprovidersv1maintenanceschedule"></a>

```json
{
  "canReschedule": true,
  "endTime": "string",
  "rolloutManagementPolicy": "string",
  "scheduleDeadlineTime": "string",
  "startTime": "string"
}
```

Maintenance schedule which is exposed to customer and potentially end user, indicating published upcoming future maintenance schedule

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canReschedule|boolean|false|none|This field is deprecated, and will be always set to true since reschedule can happen multiple times now. This field should not be removed until all service producers remove this for their customers.|
|endTime|string(google-datetime)|false|none|The scheduled end time for the maintenance.|
|rolloutManagementPolicy|string|false|none|The rollout management policy this maintenance schedule is associated with. When doing reschedule update request, the reschedule should be against this given policy.|
|scheduleDeadlineTime|string(google-datetime)|false|none|schedule_deadline_time is the time deadline any schedule start time cannot go beyond, including reschedule. It's normally the initial schedule start time plus maintenance window length (1 day or 1 week). Maintenance cannot be scheduled to start beyond this deadline.|
|startTime|string(google-datetime)|false|none|The scheduled start time for the maintenance.|

<h2 id="tocS_GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings">GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsaasacceleratormanagementprovidersv1maintenancesettings"></a>
<a id="schema_GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings"></a>
<a id="tocSgooglecloudsaasacceleratormanagementprovidersv1maintenancesettings"></a>
<a id="tocsgooglecloudsaasacceleratormanagementprovidersv1maintenancesettings"></a>

```json
{
  "exclude": true,
  "isRollback": true,
  "maintenancePolicies": {
    "property1": {
      "createTime": "string",
      "description": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "updatePolicy": {
        "channel": "UPDATE_CHANNEL_UNSPECIFIED",
        "denyMaintenancePeriods": [
          {
            "endDate": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "startDate": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "time": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            }
          }
        ],
        "window": {
          "dailyCycle": {
            "duration": "string",
            "startTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            }
          },
          "weeklyCycle": {
            "schedule": [
              {
                "day": "DAY_OF_WEEK_UNSPECIFIED",
                "duration": "string",
                "startTime": {
                  "hours": 0,
                  "minutes": 0,
                  "nanos": 0,
                  "seconds": 0
                }
              }
            ]
          }
        }
      },
      "updateTime": "string"
    },
    "property2": {
      "createTime": "string",
      "description": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "updatePolicy": {
        "channel": "UPDATE_CHANNEL_UNSPECIFIED",
        "denyMaintenancePeriods": [
          {
            "endDate": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "startDate": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "time": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            }
          }
        ],
        "window": {
          "dailyCycle": {
            "duration": "string",
            "startTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            }
          },
          "weeklyCycle": {
            "schedule": [
              {
                "day": "DAY_OF_WEEK_UNSPECIFIED",
                "duration": "string",
                "startTime": {
                  "hours": 0,
                  "minutes": 0,
                  "nanos": 0,
                  "seconds": 0
                }
              }
            ]
          }
        }
      },
      "updateTime": "string"
    }
  }
}
```

Maintenance settings associated with instance. Allows service producers and end users to assign settings that controls maintenance on this instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exclude|boolean|false|none|Optional. Exclude instance from maintenance. When true, rollout service will not attempt maintenance on the instance. Rollout service will include the instance in reported rollout progress as not attempted.|
|isRollback|boolean|false|none|Optional. If the update call is triggered from rollback, set the value as true.|
|maintenancePolicies|object|false|none|Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the embedded policy must define the same policy type. For details, please refer to go/cloud-saas-mw-ug. Should not be set if maintenance_policy_names is set. If only the name is needed, then only populate MaintenancePolicy.name.|

<h2 id="tocS_GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata">GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsaasacceleratormanagementprovidersv1nodeslometadata"></a>
<a id="schema_GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata"></a>
<a id="tocSgooglecloudsaasacceleratormanagementprovidersv1nodeslometadata"></a>
<a id="tocsgooglecloudsaasacceleratormanagementprovidersv1nodeslometadata"></a>

```json
{
  "location": "string",
  "nodeId": "string",
  "perSliEligibility": {
    "eligibilities": {
      "property1": {
        "eligible": true,
        "reason": "string"
      },
      "property2": {
        "eligible": true,
        "reason": "string"
      }
    }
  }
}
```

Node information for custom per-node SLO implementations. SSA does not support per-node SLO, but producers can populate per-node information in SloMetadata for custom precomputations. SSA Eligibility Exporter will emit per-node metric based on this information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|string|false|none|The location of the node, if different from instance location.|
|nodeId|string|false|none|The id of the node. This should be equal to SaasInstanceNode.node_id.|
|perSliEligibility|[GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibility](#schemagooglecloudsaasacceleratormanagementprovidersv1perslisloeligibility)|false|none|If present, this will override eligibility for the node coming from instance or exclusions for specified SLIs.|

<h2 id="tocS_GoogleCloudSaasacceleratorManagementProvidersV1NotificationParameter">GoogleCloudSaasacceleratorManagementProvidersV1NotificationParameter</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsaasacceleratormanagementprovidersv1notificationparameter"></a>
<a id="schema_GoogleCloudSaasacceleratorManagementProvidersV1NotificationParameter"></a>
<a id="tocSgooglecloudsaasacceleratormanagementprovidersv1notificationparameter"></a>
<a id="tocsgooglecloudsaasacceleratormanagementprovidersv1notificationparameter"></a>

```json
{
  "values": [
    "string"
  ]
}
```

Contains notification related data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|values|[string]|false|none|Optional. Array of string values. e.g. instance's replica information.|

<h2 id="tocS_GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibility">GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibility</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsaasacceleratormanagementprovidersv1perslisloeligibility"></a>
<a id="schema_GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibility"></a>
<a id="tocSgooglecloudsaasacceleratormanagementprovidersv1perslisloeligibility"></a>
<a id="tocsgooglecloudsaasacceleratormanagementprovidersv1perslisloeligibility"></a>

```json
{
  "eligibilities": {
    "property1": {
      "eligible": true,
      "reason": "string"
    },
    "property2": {
      "eligible": true,
      "reason": "string"
    }
  }
}
```

PerSliSloEligibility is a mapping from an SLI name to eligibility.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eligibilities|object|false|none|An entry in the eligibilities map specifies an eligibility for a particular SLI for the given instance. The SLI key in the name must be a valid SLI name specified in the Eligibility Exporter binary flags otherwise an error will be emitted by Eligibility Exporter and the oncaller will be alerted. If an SLI has been defined in the binary flags but the eligibilities map does not contain it, the corresponding SLI time series will not be emitted by the Eligibility Exporter. This ensures a smooth rollout and compatibility between the data produced by different versions of the Eligibility Exporters. If eligibilities map contains a key for an SLI which has not been declared in the binary flags, there will be an error message emitted in the Eligibility Exporter log and the metric for the SLI in question will not be emitted.|

<h2 id="tocS_GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource">GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsaasacceleratormanagementprovidersv1provisionedresource"></a>
<a id="schema_GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource"></a>
<a id="tocSgooglecloudsaasacceleratormanagementprovidersv1provisionedresource"></a>
<a id="tocsgooglecloudsaasacceleratormanagementprovidersv1provisionedresource"></a>

```json
{
  "resourceType": "string",
  "resourceUrl": "string"
}
```

Describes provisioned dataplane resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|string|false|none|Type of the resource. This can be either a GCP resource or a custom one (e.g. another cloud provider's VM). For GCP compute resources use singular form of the names listed in GCP compute API documentation (https://cloud.google.com/compute/docs/reference/rest/v1/), prefixed with 'compute-', for example: 'compute-instance', 'compute-disk', 'compute-autoscaler'.|
|resourceUrl|string|false|none|URL identifying the resource, e.g. "https://www.googleapis.com/compute/v1/projects/...)".|

<h2 id="tocS_GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility">GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsaasacceleratormanagementprovidersv1sloeligibility"></a>
<a id="schema_GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility"></a>
<a id="tocSgooglecloudsaasacceleratormanagementprovidersv1sloeligibility"></a>
<a id="tocsgooglecloudsaasacceleratormanagementprovidersv1sloeligibility"></a>

```json
{
  "eligible": true,
  "reason": "string"
}
```

SloEligibility is a tuple containing eligibility value: true if an instance is eligible for SLO calculation or false if it should be excluded from all SLO-related calculations along with a user-defined reason.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eligible|boolean|false|none|Whether an instance is eligible or ineligible.|
|reason|string|false|none|User-defined reason for the current value of instance eligibility. Usually, this can be directly mapped to the internal state. An empty reason is allowed.|

<h2 id="tocS_GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata">GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudsaasacceleratormanagementprovidersv1slometadata"></a>
<a id="schema_GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata"></a>
<a id="tocSgooglecloudsaasacceleratormanagementprovidersv1slometadata"></a>
<a id="tocsgooglecloudsaasacceleratormanagementprovidersv1slometadata"></a>

```json
{
  "nodes": [
    {
      "location": "string",
      "nodeId": "string",
      "perSliEligibility": {
        "eligibilities": {
          "property1": {
            "eligible": true,
            "reason": "string"
          },
          "property2": {
            "eligible": true,
            "reason": "string"
          }
        }
      }
    }
  ],
  "perSliEligibility": {
    "eligibilities": {
      "property1": {
        "eligible": true,
        "reason": "string"
      },
      "property2": {
        "eligible": true,
        "reason": "string"
      }
    }
  },
  "tier": "string"
}
```

SloMetadata contains resources required for proper SLO classification of the instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nodes|[[GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata](#schemagooglecloudsaasacceleratormanagementprovidersv1nodeslometadata)]|false|none|Optional. List of nodes. Some producers need to use per-node metadata to calculate SLO. This field allows such producers to publish per-node SLO meta data, which will be consumed by SSA Eligibility Exporter and published in the form of per node metric to Monarch.|
|perSliEligibility|[GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibility](#schemagooglecloudsaasacceleratormanagementprovidersv1perslisloeligibility)|false|none|Optional. Multiple per-instance SLI eligibilities which apply for individual SLIs.|
|tier|string|false|none|Name of the SLO tier the Instance belongs to. This name will be expected to match the tiers specified in the service SLO configuration. Field is mandatory and must not be empty.|

<h2 id="tocS_LDAPSSettings">LDAPSSettings</h2>
<!-- backwards compatibility -->
<a id="schemaldapssettings"></a>
<a id="schema_LDAPSSettings"></a>
<a id="tocSldapssettings"></a>
<a id="tocsldapssettings"></a>

```json
{
  "certificate": {
    "expireTime": "string",
    "issuingCertificate": {},
    "subject": "string",
    "subjectAlternativeName": [
      "string"
    ],
    "thumbprint": "string"
  },
  "certificatePassword": "string",
  "certificatePfx": "string",
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

LDAPSSettings represents the ldaps settings for domain resource. LDAP is the Lightweight Directory Access Protocol, defined in https://tools.ietf.org/html/rfc4511. The settings object configures LDAP over SSL/TLS, whether it is over port 636 or the StartTLS operation. If LDAPSSettings is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificate|[Certificate](#schemacertificate)|false|none|Output only. The certificate used to configure LDAPS. Certificates can be chained with a maximum length of 15.|
|certificatePassword|string|false|none|Input only. The password used to encrypt the uploaded pfx certificate.|
|certificatePfx|string(byte)|false|none|Input only. The uploaded PKCS12-formatted certificate to configure LDAPS with. It will enable the domain controllers in this domain to accept LDAPS connections (either LDAP over SSL/TLS or the StartTLS operation). A valid certificate chain must form a valid x.509 certificate chain (or be comprised of a single self-signed certificate. It must be encrypted with either: 1) PBES2 + PBKDF2 + AES256 encryption and SHA256 PRF; or 2) pbeWithSHA1And3-KeyTripleDES-CBC Private key must be included for the leaf / single self-signed certificate. Note: For a fqdn your-example-domain.com, the wildcard fqdn is *.your-example-domain.com. Specifically the leaf certificate must have: - Either a blank subject or a subject with CN matching the wildcard fqdn. - Exactly two SANs - the fqdn and wildcard fqdn. - Encipherment and digital key signature key usages. - Server authentication extended key usage (OID=1.3.6.1.5.5.7.3.1) - Private key must be in one of the following formats: RSA, ECDSA, ED25519. - Private key must have appropriate key length: 2048 for RSA, 256 for ECDSA - Signature algorithm of the leaf certificate cannot be MD2, MD5 or SHA1.|
|name|string|false|none|The resource name of the LDAPS settings. Uses the form: `projects/{project}/locations/{location}/domains/{domain}`.|
|state|string|false|read-only|Output only. The current state of this LDAPS settings.|
|updateTime|string(google-datetime)|false|read-only|Output only. Last update time.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|UPDATING|
|state|ACTIVE|
|state|FAILED|

<h2 id="tocS_ListBackupsResponse">ListBackupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbackupsresponse"></a>
<a id="schema_ListBackupsResponse"></a>
<a id="tocSlistbackupsresponse"></a>
<a id="tocslistbackupsresponse"></a>

```json
{
  "backups": [
    {
      "createTime": "string",
      "description": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "statusMessage": "string",
      "type": "TYPE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

ListBackupsResponse is the response message for ListBackups method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backups|[[Backup](#schemabackup)]|false|none|A list of Cloud AD backups in the domain.|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|
|unreachable|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_ListDomainsResponse">ListDomainsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdomainsresponse"></a>
<a id="schema_ListDomainsResponse"></a>
<a id="tocSlistdomainsresponse"></a>
<a id="tocslistdomainsresponse"></a>

```json
{
  "domains": [
    {
      "auditLogsEnabled": true,
      "authorizedNetworks": [
        "string"
      ],
      "createTime": "string",
      "fqdn": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "locations": [
        "string"
      ],
      "managedIdentitiesAdminName": "string",
      "name": "string",
      "reservedIpRange": "string",
      "state": "STATE_UNSPECIFIED",
      "statusMessage": "string",
      "trusts": [
        {
          "createTime": "string",
          "lastKnownTrustConnectedHeartbeatTime": "string",
          "selectiveAuthentication": true,
          "state": "STATE_UNSPECIFIED",
          "stateDescription": "string",
          "targetDnsIpAddresses": [
            "string"
          ],
          "targetDomainName": "string",
          "trustDirection": "TRUST_DIRECTION_UNSPECIFIED",
          "trustHandshakeSecret": "string",
          "trustType": "TRUST_TYPE_UNSPECIFIED",
          "updateTime": "string"
        }
      ],
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string",
  "unreachable": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domains|[[Domain](#schemadomain)]|false|none|A list of Managed Identities Service domains in the project.|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|
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

<h2 id="tocS_ListPeeringsResponse">ListPeeringsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpeeringsresponse"></a>
<a id="schema_ListPeeringsResponse"></a>
<a id="tocSlistpeeringsresponse"></a>
<a id="tocslistpeeringsresponse"></a>

```json
{
  "nextPageToken": "string",
  "peerings": [
    {
      "authorizedNetwork": "string",
      "createTime": "string",
      "domainResource": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "statusMessage": "string",
      "updateTime": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

ListPeeringsResponse is the response message for ListPeerings method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|
|peerings|[[Peering](#schemapeering)]|false|none|A list of Managed Identities Service Peerings in the project.|
|unreachable|[string]|false|none|Locations that could not be reached.|

<h2 id="tocS_ListSQLIntegrationsResponse">ListSQLIntegrationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsqlintegrationsresponse"></a>
<a id="schema_ListSQLIntegrationsResponse"></a>
<a id="tocSlistsqlintegrationsresponse"></a>
<a id="tocslistsqlintegrationsresponse"></a>

```json
{
  "nextPageToken": "string",
  "sqlIntegrations": [
    {
      "createTime": "string",
      "name": "string",
      "sqlInstance": "string",
      "state": "STATE_UNSPECIFIED",
      "updateTime": "string"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

ListSQLIntegrationsResponse is the response message for ListSQLIntegrations method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|
|sqlIntegrations|[[SQLIntegration](#schemasqlintegration)]|false|none|A list of SQLIntegrations of a domain.|
|unreachable|[string]|false|none|A list of locations that could not be reached.|

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

<h2 id="tocS_MaintenancePolicy">MaintenancePolicy</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancepolicy"></a>
<a id="schema_MaintenancePolicy"></a>
<a id="tocSmaintenancepolicy"></a>
<a id="tocsmaintenancepolicy"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "updatePolicy": {
    "channel": "UPDATE_CHANNEL_UNSPECIFIED",
    "denyMaintenancePeriods": [
      {
        "endDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "startDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "time": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        }
      }
    ],
    "window": {
      "dailyCycle": {
        "duration": "string",
        "startTime": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        }
      },
      "weeklyCycle": {
        "schedule": [
          {
            "day": "DAY_OF_WEEK_UNSPECIFIED",
            "duration": "string",
            "startTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            }
          }
        ]
      }
    }
  },
  "updateTime": "string"
}
```

LINT.IfChange Defines policies to service maintenance events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Output only. The time when the resource was created.|
|description|string|false|none|Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512.|
|labels|object|false|none|Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user.|
|name|string|false|none|Required. MaintenancePolicy name using the form: `projects/{project_id}/locations/{location_id}/maintenancePolicies/{maintenance_policy_id}` where {project_id} refers to a GCP consumer project ID, {location_id} refers to a GCP region/zone, {maintenance_policy_id} must be 1-63 characters long and match the regular expression `[a-z0-9]([-a-z0-9]*[a-z0-9])?`.|
|state|string|false|none|Optional. The state of the policy.|
|updatePolicy|[UpdatePolicy](#schemaupdatepolicy)|false|none|Maintenance policy applicable to instance update.|
|updateTime|string(google-datetime)|false|none|Output only. The time when the resource was updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|READY|
|state|DELETING|

<h2 id="tocS_MaintenanceWindow">MaintenanceWindow</h2>
<!-- backwards compatibility -->
<a id="schemamaintenancewindow"></a>
<a id="schema_MaintenanceWindow"></a>
<a id="tocSmaintenancewindow"></a>
<a id="tocsmaintenancewindow"></a>

```json
{
  "dailyCycle": {
    "duration": "string",
    "startTime": {
      "hours": 0,
      "minutes": 0,
      "nanos": 0,
      "seconds": 0
    }
  },
  "weeklyCycle": {
    "schedule": [
      {
        "day": "DAY_OF_WEEK_UNSPECIFIED",
        "duration": "string",
        "startTime": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        }
      }
    ]
  }
}
```

MaintenanceWindow definition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dailyCycle|[DailyCycle](#schemadailycycle)|false|none|Daily cycle.|
|weeklyCycle|[WeeklyCycle](#schemaweeklycycle)|false|none|Weekly cycle.|

<h2 id="tocS_OnPremDomainDetails">OnPremDomainDetails</h2>
<!-- backwards compatibility -->
<a id="schemaonpremdomaindetails"></a>
<a id="schema_OnPremDomainDetails"></a>
<a id="tocSonpremdomaindetails"></a>
<a id="tocsonpremdomaindetails"></a>

```json
{
  "disableSidFiltering": true,
  "domainName": "string"
}
```

OnPremDomainDetails is the message which contains details of on-prem domain which is trusted and needs to be migrated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disableSidFiltering|boolean|false|none|Optional. Option to disable SID filtering.|
|domainName|string|false|none|Required. FQDN of the on-prem domain being migrated.|

<h2 id="tocS_OnPremDomainSIDDetails">OnPremDomainSIDDetails</h2>
<!-- backwards compatibility -->
<a id="schemaonpremdomainsiddetails"></a>
<a id="schema_OnPremDomainSIDDetails"></a>
<a id="tocSonpremdomainsiddetails"></a>
<a id="tocsonpremdomainsiddetails"></a>

```json
{
  "name": "string",
  "sidFilteringState": "SID_FILTERING_STATE_UNSPECIFIED"
}
```

OnPremDomainDetails is the message which contains details of on-prem domain which is trusted and needs to be migrated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|FQDN of the on-prem domain being migrated.|
|sidFilteringState|string|false|none|Current SID filtering state.|

#### Enumerated Values

|Property|Value|
|---|---|
|sidFilteringState|SID_FILTERING_STATE_UNSPECIFIED|
|sidFilteringState|ENABLED|
|sidFilteringState|DISABLED|

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

<h2 id="tocS_Peering">Peering</h2>
<!-- backwards compatibility -->
<a id="schemapeering"></a>
<a id="schema_Peering"></a>
<a id="tocSpeering"></a>
<a id="tocspeering"></a>

```json
{
  "authorizedNetwork": "string",
  "createTime": "string",
  "domainResource": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "statusMessage": "string",
  "updateTime": "string"
}
```

Represents a Managed Microsoft Identities Peering.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorizedNetwork|string|false|none|Required. The full names of the Google Compute Engine [networks](/compute/docs/networks-and-firewalls#networks) to which the instance is connected. Caller needs to make sure that CIDR subnets do not overlap between networks, else peering creation will fail.|
|createTime|string(google-datetime)|false|read-only|Output only. The time the instance was created.|
|domainResource|string|false|none|Required. Full domain resource path for the Managed AD Domain involved in peering. The resource path should be in the form: `projects/{project_id}/locations/global/domains/{domain_name}`|
|labels|object|false|none|Optional. Resource labels to represent user provided metadata.|
|name|string|false|read-only|Output only. Unique name of the peering in this scope including projects and location using the form: `projects/{project_id}/locations/global/peerings/{peering_id}`.|
|state|string|false|read-only|Output only. The current state of this Peering.|
|statusMessage|string|false|read-only|Output only. Additional information about the current status of this peering, if available.|
|updateTime|string(google-datetime)|false|read-only|Output only. Last update time.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|CONNECTED|
|state|DISCONNECTED|
|state|DELETING|

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

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

<h2 id="tocS_ReconfigureTrustRequest">ReconfigureTrustRequest</h2>
<!-- backwards compatibility -->
<a id="schemareconfiguretrustrequest"></a>
<a id="schema_ReconfigureTrustRequest"></a>
<a id="tocSreconfiguretrustrequest"></a>
<a id="tocsreconfiguretrustrequest"></a>

```json
{
  "trust": {
    "createTime": "string",
    "lastKnownTrustConnectedHeartbeatTime": "string",
    "selectiveAuthentication": true,
    "state": "STATE_UNSPECIFIED",
    "stateDescription": "string",
    "targetDnsIpAddresses": [
      "string"
    ],
    "targetDomainName": "string",
    "trustDirection": "TRUST_DIRECTION_UNSPECIFIED",
    "trustHandshakeSecret": "string",
    "trustType": "TRUST_TYPE_UNSPECIFIED",
    "updateTime": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trust|[Trust](#schematrust)|false|none|The domain trust resource with updated dns conditional forwarder.|

<h2 id="tocS_ResetAdminPasswordRequest">ResetAdminPasswordRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresetadminpasswordrequest"></a>
<a id="schema_ResetAdminPasswordRequest"></a>
<a id="tocSresetadminpasswordrequest"></a>
<a id="tocsresetadminpasswordrequest"></a>

```json
{}
```

<h2 id="tocS_ResetAdminPasswordResponse">ResetAdminPasswordResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresetadminpasswordresponse"></a>
<a id="schema_ResetAdminPasswordResponse"></a>
<a id="tocSresetadminpasswordresponse"></a>
<a id="tocsresetadminpasswordresponse"></a>

```json
{
  "password": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|string|false|none|A random password. See admin for more information.|

<h2 id="tocS_RestoreDomainRequest">RestoreDomainRequest</h2>
<!-- backwards compatibility -->
<a id="schemarestoredomainrequest"></a>
<a id="schema_RestoreDomainRequest"></a>
<a id="tocSrestoredomainrequest"></a>
<a id="tocsrestoredomainrequest"></a>

```json
{
  "backupId": "string"
}
```

RestoreDomainRequest is the request received by RestoreDomain rpc

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backupId|string|false|none|Required. ID of the backup to be restored|

<h2 id="tocS_SQLIntegration">SQLIntegration</h2>
<!-- backwards compatibility -->
<a id="schemasqlintegration"></a>
<a id="schema_SQLIntegration"></a>
<a id="tocSsqlintegration"></a>
<a id="tocssqlintegration"></a>

```json
{
  "createTime": "string",
  "name": "string",
  "sqlInstance": "string",
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

Represents the SQL instance integrated with AD.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time the instance was created.|
|name|string|false|none|The unique name of the sql integration in the form of `projects/{project_id}/locations/global/domains/{domain_name}/sqlIntegrations/{sql_integration}`|
|sqlInstance|string|false|none|The full resource name of an integrated sql instance|
|state|string|false|read-only|Output only. The current state of the managed OU.|
|updateTime|string(google-datetime)|false|read-only|Output only. Last update time for this SQL instance.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|DELETING|
|state|READY|

<h2 id="tocS_Schedule">Schedule</h2>
<!-- backwards compatibility -->
<a id="schemaschedule"></a>
<a id="schema_Schedule"></a>
<a id="tocSschedule"></a>
<a id="tocsschedule"></a>

```json
{
  "day": "DAY_OF_WEEK_UNSPECIFIED",
  "duration": "string",
  "startTime": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  }
}
```

Configure the schedule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|string|false|none|Allows to define schedule that runs specified day of the week.|
|duration|string(google-duration)|false|none|Output only. Duration of the time window, set by service producer.|
|startTime|[TimeOfDay](#schematimeofday)|false|none|Time within the window to start the operations.|

#### Enumerated Values

|Property|Value|
|---|---|
|day|DAY_OF_WEEK_UNSPECIFIED|
|day|MONDAY|
|day|TUESDAY|
|day|WEDNESDAY|
|day|THURSDAY|
|day|FRIDAY|
|day|SATURDAY|
|day|SUNDAY|

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
|policy|[Policy](#schemapolicy)|false|none|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|

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

<h2 id="tocS_TimeOfDay">TimeOfDay</h2>
<!-- backwards compatibility -->
<a id="schematimeofday"></a>
<a id="schema_TimeOfDay"></a>
<a id="tocStimeofday"></a>
<a id="tocstimeofday"></a>

```json
{
  "hours": 0,
  "minutes": 0,
  "nanos": 0,
  "seconds": 0
}
```

Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hours|integer(int32)|false|none|Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.|
|minutes|integer(int32)|false|none|Minutes of hour of day. Must be from 0 to 59.|
|nanos|integer(int32)|false|none|Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.|
|seconds|integer(int32)|false|none|Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.|

<h2 id="tocS_Trust">Trust</h2>
<!-- backwards compatibility -->
<a id="schematrust"></a>
<a id="schema_Trust"></a>
<a id="tocStrust"></a>
<a id="tocstrust"></a>

```json
{
  "createTime": "string",
  "lastKnownTrustConnectedHeartbeatTime": "string",
  "selectiveAuthentication": true,
  "state": "STATE_UNSPECIFIED",
  "stateDescription": "string",
  "targetDnsIpAddresses": [
    "string"
  ],
  "targetDomainName": "string",
  "trustDirection": "TRUST_DIRECTION_UNSPECIFIED",
  "trustHandshakeSecret": "string",
  "trustType": "TRUST_TYPE_UNSPECIFIED",
  "updateTime": "string"
}
```

Represents a relationship between two domains which makes it possible for users in one domain to be authenticated by a dc in another domain. Refer https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc731335(v%3dws.10) If the trust is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Output only. The time the instance was created.|
|lastKnownTrustConnectedHeartbeatTime|string(google-datetime)|false|none|Output only. The last heartbeat time when the trust was known to be connected.|
|selectiveAuthentication|boolean|false|none|The trust authentication type which decides whether the trusted side has forest/domain wide access or selective access to approved set of resources.|
|state|string|false|none|Output only. The current state of this trust.|
|stateDescription|string|false|none|Output only. Additional information about the current state of this trust, if available.|
|targetDnsIpAddresses|[string]|false|none|The target dns server ip addresses which can resolve the remote domain involved in trust.|
|targetDomainName|string|false|none|The fully qualified target domain name which will be in trust with current domain.|
|trustDirection|string|false|none|The trust direction decides the current domain is trusted, trusting or both.|
|trustHandshakeSecret|string|false|none|Input only, and will not be stored. The trust secret used for handshake with target domain.|
|trustType|string|false|none|The type of trust represented by the trust resource.|
|updateTime|string(google-datetime)|false|none|Output only. Last update time.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|CREATING|
|state|UPDATING|
|state|DELETING|
|state|CONNECTED|
|state|DISCONNECTED|
|trustDirection|TRUST_DIRECTION_UNSPECIFIED|
|trustDirection|INBOUND|
|trustDirection|OUTBOUND|
|trustDirection|BIDIRECTIONAL|
|trustType|TRUST_TYPE_UNSPECIFIED|
|trustType|FOREST|
|trustType|EXTERNAL|

<h2 id="tocS_UpdatePolicy">UpdatePolicy</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepolicy"></a>
<a id="schema_UpdatePolicy"></a>
<a id="tocSupdatepolicy"></a>
<a id="tocsupdatepolicy"></a>

```json
{
  "channel": "UPDATE_CHANNEL_UNSPECIFIED",
  "denyMaintenancePeriods": [
    {
      "endDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "startDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "time": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      }
    }
  ],
  "window": {
    "dailyCycle": {
      "duration": "string",
      "startTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      }
    },
    "weeklyCycle": {
      "schedule": [
        {
          "day": "DAY_OF_WEEK_UNSPECIFIED",
          "duration": "string",
          "startTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          }
        }
      ]
    }
  }
}
```

Maintenance policy applicable to instance updates.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel|string|false|none|Optional. Relative scheduling channel applied to resource.|
|denyMaintenancePeriods|[[DenyMaintenancePeriod](#schemadenymaintenanceperiod)]|false|none|Deny Maintenance Period that is applied to resource to indicate when maintenance is forbidden. User can specify zero or more non-overlapping deny periods. Maximum number of deny_maintenance_periods expected is one.|
|window|[MaintenanceWindow](#schemamaintenancewindow)|false|none|Optional. Maintenance window that is applied to resources covered by this policy.|

#### Enumerated Values

|Property|Value|
|---|---|
|channel|UPDATE_CHANNEL_UNSPECIFIED|
|channel|EARLIER|
|channel|LATER|
|channel|WEEK1|
|channel|WEEK2|
|channel|WEEK5|

<h2 id="tocS_ValidateTrustRequest">ValidateTrustRequest</h2>
<!-- backwards compatibility -->
<a id="schemavalidatetrustrequest"></a>
<a id="schema_ValidateTrustRequest"></a>
<a id="tocSvalidatetrustrequest"></a>
<a id="tocsvalidatetrustrequest"></a>

```json
{
  "trust": {
    "createTime": "string",
    "lastKnownTrustConnectedHeartbeatTime": "string",
    "selectiveAuthentication": true,
    "state": "STATE_UNSPECIFIED",
    "stateDescription": "string",
    "targetDnsIpAddresses": [
      "string"
    ],
    "targetDomainName": "string",
    "trustDirection": "TRUST_DIRECTION_UNSPECIFIED",
    "trustHandshakeSecret": "string",
    "trustType": "TRUST_TYPE_UNSPECIFIED",
    "updateTime": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trust|[Trust](#schematrust)|false|none|The domain trust to validate trust state for.|

<h2 id="tocS_WeeklyCycle">WeeklyCycle</h2>
<!-- backwards compatibility -->
<a id="schemaweeklycycle"></a>
<a id="schema_WeeklyCycle"></a>
<a id="tocSweeklycycle"></a>
<a id="tocsweeklycycle"></a>

```json
{
  "schedule": [
    {
      "day": "DAY_OF_WEEK_UNSPECIFIED",
      "duration": "string",
      "startTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      }
    }
  ]
}
```

Time window specified for weekly operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schedule|[[Schedule](#schemaschedule)]|false|none|User can specify multiple windows in a week. Minimum of 1 window.|
