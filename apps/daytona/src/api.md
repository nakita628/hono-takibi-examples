<h1 id="daytona">Daytona v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Daytona AI platform API Docs

Base URLs:

* <a href="http://localhost:3000">http://localhost:3000</a>

Email: <a href="mailto:support@daytona.com">Daytona Platforms Inc.</a> 
Web: <a href="https://www.daytona.io">Daytona Platforms Inc.</a> 
License: <a href="https://www.apache.org/licenses/LICENSE-2.0">Apache-2.0</a>

# Authentication

- HTTP Authentication, scheme: bearer API Key access

- OpenID Connect authentication.

    - OpenID Connect URL = [http://localhost:3000/.well-known/openid-configuration](http://localhost:3000/.well-known/openid-configuration)

<h1 id="daytona-config">config</h1>

## Get config

<a id="opIdConfigController_getConfig"></a>

> Code samples

```bash
curl http://localhost:3000/config \
  -H 'Accept: application/json'
```

`GET /config`

> Example responses

> 200 Response

```json
{
  "dashboardUrl": "https://dashboard.example.com",
  "rateLimit": "",
  "analyticsApiUrl": "https://analytics.example.com",
  "sshGatewayPublicKey": "ssh-gateway-public-key",
  "billingApiUrl": "https://billing.example.com",
  "linkedAccountsEnabled": true,
  "version": "0.0.1",
  "oidc": "",
  "proxyToolboxUrl": "https://proxy.example.com/toolbox",
  "posthog": "",
  "maxAutoArchiveInterval": 43200,
  "pylonAppId": "pylon-app-123",
  "proxyTemplateUrl": "https://{{PORT}}-{{sandboxId}}.proxy.example.com",
  "maintananceMode": false,
  "environment": "production",
  "defaultSnapshot": "ubuntu:22.04",
  "sshGatewayCommand": "ssh -p 2222 {{TOKEN}}@localhost",
  "announcements": {
    "feature-update": {
      "text": "New feature available!",
      "learnMoreUrl": "https://example.com"
    }
  }
}
```

<h3 id="get-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Daytona configuration|[DaytonaConfiguration](#schemadaytonaconfiguration)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="daytona-api-keys">api-keys</h1>

## List API keys

<a id="opIdlistApiKeys"></a>

> Code samples

```bash
curl http://localhost:3000/api-keys \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api-keys`

<h3 id="list-api-keys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|

> Example responses

> 200 Response

```json
[
  {
    "createdAt": "2024-03-14T12:00:00Z",
    "lastUsedAt": "2024-03-14T12:00:00Z",
    "permissions": [
      "write:registries",
      "write:registries"
    ],
    "name": "My API Key",
    "value": "bb_********************def",
    "userId": "123",
    "expiresAt": "2024-03-14T12:00:00Z"
  }
]
```

<h3 id="list-api-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|API keys retrieved successfully.|Inline|
|500|Internal Server Error|Error fetching API keys.|None|

<h3 id="list-api-keys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ApiKeyList](#schemaapikeylist)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Create API key

<a id="opIdcreateApiKey"></a>

> Code samples

```bash
curl http://localhost:3000/api-keys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "permissions": [
      "write:registries",
      "write:registries"
    ],
    "name": "My API Key",
    "expiresAt": "2025-06-09T12:00:00Z"
  }'
```

`POST /api-keys`

> Body parameter

```json
{
  "permissions": [
    "write:registries",
    "write:registries"
  ],
  "name": "My API Key",
  "expiresAt": "2025-06-09T12:00:00Z"
}
```

<h3 id="create-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|body|body|[CreateApiKey](#schemacreateapikey)|true|none|
|» name|body|string|true|The name of the API key|
|» permissions|body|[string]|true|The list of organization resource permissions explicitly assigned to the API key|
|» expiresAt|body|string(date-time) \| null|false|When the API key expires|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» permissions|write:registries|
|» permissions|delete:registries|
|» permissions|write:snapshots|
|» permissions|delete:snapshots|
|» permissions|write:sandboxes|
|» permissions|delete:sandboxes|
|» permissions|read:volumes|
|» permissions|write:volumes|
|» permissions|delete:volumes|
|» permissions|write:regions|
|» permissions|delete:regions|
|» permissions|read:runners|
|» permissions|write:runners|
|» permissions|delete:runners|
|» permissions|read:audit_logs|

> Example responses

> 201 Response

```json
{
  "createdAt": "2024-03-14T12:00:00Z",
  "permissions": [
    "write:registries",
    "write:registries"
  ],
  "name": "My API Key",
  "value": "bb_sk_1234567890abcdef",
  "expiresAt": "2025-06-09T12:00:00Z"
}
```

<h3 id="create-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|API key created successfully.|[ApiKeyResponse](#schemaapikeyresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get current API key's details

<a id="opIdgetCurrentApiKey"></a>

> Code samples

```bash
curl http://localhost:3000/api-keys/current \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api-keys/current`

<h3 id="get-current-api-keys-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|

> Example responses

> 200 Response

```json
{
  "createdAt": "2024-03-14T12:00:00Z",
  "lastUsedAt": "2024-03-14T12:00:00Z",
  "permissions": [
    "write:registries",
    "write:registries"
  ],
  "name": "My API Key",
  "value": "bb_********************def",
  "userId": "123",
  "expiresAt": "2024-03-14T12:00:00Z"
}
```

<h3 id="get-current-api-keys-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|API key retrieved successfully.|[ApiKeyList](#schemaapikeylist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get API key

<a id="opIdgetApiKey"></a>

> Code samples

```bash
curl http://localhost:3000/api-keys/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api-keys/{name}`

<h3 id="get-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|name|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "createdAt": "2024-03-14T12:00:00Z",
  "lastUsedAt": "2024-03-14T12:00:00Z",
  "permissions": [
    "write:registries",
    "write:registries"
  ],
  "name": "My API Key",
  "value": "bb_********************def",
  "userId": "123",
  "expiresAt": "2024-03-14T12:00:00Z"
}
```

<h3 id="get-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|API key retrieved successfully.|[ApiKeyList](#schemaapikeylist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Delete API key

<a id="opIddeleteApiKey"></a>

> Code samples

```bash
curl http://localhost:3000/api-keys/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api-keys/{name}`

<h3 id="delete-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|name|path|string|true|none|

<h3 id="delete-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|API key deleted successfully.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Delete API key for user

<a id="opIddeleteApiKeyForUser"></a>

> Code samples

```bash
curl http://localhost:3000/api-keys/string/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api-keys/{userId}/{name}`

<h3 id="delete-api-key-for-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|userId|path|string|true|none|
|name|path|string|true|none|

<h3 id="delete-api-key-for-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|API key deleted successfully.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

<h1 id="daytona-organizations">organizations</h1>

## List organization invitations for authenticated user

<a id="opIdlistOrganizationInvitationsForAuthenticatedUser"></a>

> Code samples

```bash
curl http://localhost:3000/organizations/invitations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/invitations`

> Example responses

> 200 Response

```json
[
  {
    "organizationId": "organizationId",
    "createdAt": "2000-01-23T04:56:07.000+00:00",
    "invitedBy": "invitedBy",
    "role": "owner",
    "organizationName": "organizationName",
    "assignedRoles": [
      {
        "createdAt": "2000-01-23T04:56:07.000+00:00",
        "permissions": [
          "write:registries",
          "write:registries"
        ],
        "name": "name",
        "isGlobal": true,
        "description": "description",
        "id": "id",
        "updatedAt": "2000-01-23T04:56:07.000+00:00"
      },
      {
        "createdAt": "2000-01-23T04:56:07.000+00:00",
        "permissions": [
          "write:registries",
          "write:registries"
        ],
        "name": "name",
        "isGlobal": true,
        "description": "description",
        "id": "id",
        "updatedAt": "2000-01-23T04:56:07.000+00:00"
      }
    ],
    "id": "id",
    "email": "email",
    "expiresAt": "2000-01-23T04:56:07.000+00:00",
    "status": "pending",
    "updatedAt": "2000-01-23T04:56:07.000+00:00"
  }
]
```

<h3 id="list-organization-invitations-for-authenticated-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of organization invitations|Inline|

<h3 id="list-organization-invitations-for-authenticated-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[OrganizationInvitation](#schemaorganizationinvitation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get count of organization invitations for authenticated user

<a id="opIdgetOrganizationInvitationsCountForAuthenticatedUser"></a>

> Code samples

```bash
curl http://localhost:3000/organizations/invitations/count \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/invitations/count`

> Example responses

> 200 Response

```json
0
```

<h3 id="get-count-of-organization-invitations-for-authenticated-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Count of organization invitations|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Accept organization invitation

<a id="opIdacceptOrganizationInvitation"></a>

> Code samples

```bash
curl http://localhost:3000/organizations/invitations/string/accept \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /organizations/invitations/{invitationId}/accept`

<h3 id="accept-organization-invitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invitationId|path|string|true|Invitation ID|

> Example responses

> 200 Response

```json
{
  "organizationId": "organizationId",
  "createdAt": "2000-01-23T04:56:07.000+00:00",
  "invitedBy": "invitedBy",
  "role": "owner",
  "organizationName": "organizationName",
  "assignedRoles": [
    {
      "createdAt": "2000-01-23T04:56:07.000+00:00",
      "permissions": [
        "write:registries",
        "write:registries"
      ],
      "name": "name",
      "isGlobal": true,
      "description": "description",
      "id": "id",
      "updatedAt": "2000-01-23T04:56:07.000+00:00"
    },
    {
      "createdAt": "2000-01-23T04:56:07.000+00:00",
      "permissions": [
        "write:registries",
        "write:registries"
      ],
      "name": "name",
      "isGlobal": true,
      "description": "description",
      "id": "id",
      "updatedAt": "2000-01-23T04:56:07.000+00:00"
    }
  ],
  "id": "id",
  "email": "email",
  "expiresAt": "2000-01-23T04:56:07.000+00:00",
  "status": "pending",
  "updatedAt": "2000-01-23T04:56:07.000+00:00"
}
```

<h3 id="accept-organization-invitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Organization invitation accepted successfully|[OrganizationInvitation](#schemaorganizationinvitation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Decline organization invitation

<a id="opIddeclineOrganizationInvitation"></a>

> Code samples

```bash
curl http://localhost:3000/organizations/invitations/string/decline \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /organizations/invitations/{invitationId}/decline`

<h3 id="decline-organization-invitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invitationId|path|string|true|Invitation ID|

<h3 id="decline-organization-invitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Organization invitation declined successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## List organizations

<a id="opIdlistOrganizations"></a>

> Code samples

```bash
curl http://localhost:3000/organizations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations`

> Example responses

> 200 Response

```json
[
  {
    "sandboxCreateRateLimit": 7.061401241503109,
    "sandboxLifecycleRateLimitTtlSeconds": 4.145608029883936,
    "createdAt": "2000-01-23T04:56:07.000+00:00",
    "sandboxLimitedNetworkEgress": true,
    "suspendedUntil": "2000-01-23T04:56:07.000+00:00",
    "snapshotDeactivationTimeoutMinutes": 5.637376656633329,
    "otelConfig": "",
    "authenticatedRateLimitTtlSeconds": 3.616076749251911,
    "id": "id",
    "experimentalConfig": "{}",
    "updatedAt": "2000-01-23T04:56:07.000+00:00",
    "defaultRegionId": "defaultRegionId",
    "sandboxCreateRateLimitTtlSeconds": 2.027123023002322,
    "suspensionReason": "suspensionReason",
    "sandboxLifecycleRateLimit": 9.301444243932576,
    "suspendedAt": "2000-01-23T04:56:07.000+00:00",
    "personal": true,
    "suspensionCleanupGracePeriodHours": 0.8008281904610115,
    "authenticatedRateLimit": 2.3021358869347655,
    "suspended": true,
    "maxCpuPerSandbox": 6.027456183070403,
    "maxDiskPerSandbox": 5.962133916683182,
    "createdBy": "createdBy",
    "name": "name",
    "maxMemoryPerSandbox": 1.4658129805029452
  }
]
```

<h3 id="list-organizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of organizations|Inline|

<h3 id="list-organizations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Organization](#schemaorganization)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Create organization

<a id="opIdcreateOrganization"></a>

> Code samples

```bash
curl http://localhost:3000/organizations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "defaultRegionId": "us",
    "name": "My Organization"
  }'
```

`POST /organizations`

> Body parameter

```json
{
  "defaultRegionId": "us",
  "name": "My Organization"
}
```

<h3 id="create-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateOrganization](#schemacreateorganization)|true|none|
|» name|body|string|true|The name of organization|
|» defaultRegionId|body|string|true|The ID of the default region for the organization|

> Example responses

> 201 Response

```json
{
  "sandboxCreateRateLimit": 7.061401241503109,
  "sandboxLifecycleRateLimitTtlSeconds": 4.145608029883936,
  "createdAt": "2000-01-23T04:56:07.000+00:00",
  "sandboxLimitedNetworkEgress": true,
  "suspendedUntil": "2000-01-23T04:56:07.000+00:00",
  "snapshotDeactivationTimeoutMinutes": 5.637376656633329,
  "otelConfig": "",
  "authenticatedRateLimitTtlSeconds": 3.616076749251911,
  "id": "id",
  "experimentalConfig": "{}",
  "updatedAt": "2000-01-23T04:56:07.000+00:00",
  "defaultRegionId": "defaultRegionId",
  "sandboxCreateRateLimitTtlSeconds": 2.027123023002322,
  "suspensionReason": "suspensionReason",
  "sandboxLifecycleRateLimit": 9.301444243932576,
  "suspendedAt": "2000-01-23T04:56:07.000+00:00",
  "personal": true,
  "suspensionCleanupGracePeriodHours": 0.8008281904610115,
  "authenticatedRateLimit": 2.3021358869347655,
  "suspended": true,
  "maxCpuPerSandbox": 6.027456183070403,
  "maxDiskPerSandbox": 5.962133916683182,
  "createdBy": "createdBy",
  "name": "name",
  "maxMemoryPerSandbox": 1.4658129805029452
}
```

<h3 id="create-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Organization created successfully|[Organization](#schemaorganization)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Set default region for organization

<a id="opIdsetOrganizationDefaultRegion"></a>

> Code samples

```bash
curl http://localhost:3000/organizations/string/default-region \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "defaultRegionId": "us"
  }'
```

`PATCH /organizations/{organizationId}/default-region`

> Body parameter

```json
{
  "defaultRegionId": "us"
}
```

<h3 id="set-default-region-for-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|Organization ID|
|body|body|[UpdateOrganizationDefaultRegion](#schemaupdateorganizationdefaultregion)|true|none|
|» defaultRegionId|body|string|true|The ID of the default region for the organization|

<h3 id="set-default-region-for-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Default region set successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get organization by ID

<a id="opIdgetOrganization"></a>

> Code samples

```bash
curl http://localhost:3000/organizations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{organizationId}`

<h3 id="get-organization-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|Organization ID|

> Example responses

> 200 Response

```json
{
  "sandboxCreateRateLimit": 7.061401241503109,
  "sandboxLifecycleRateLimitTtlSeconds": 4.145608029883936,
  "createdAt": "2000-01-23T04:56:07.000+00:00",
  "sandboxLimitedNetworkEgress": true,
  "suspendedUntil": "2000-01-23T04:56:07.000+00:00",
  "snapshotDeactivationTimeoutMinutes": 5.637376656633329,
  "otelConfig": "",
  "authenticatedRateLimitTtlSeconds": 3.616076749251911,
  "id": "id",
  "experimentalConfig": "{}",
  "updatedAt": "2000-01-23T04:56:07.000+00:00",
  "defaultRegionId": "defaultRegionId",
  "sandboxCreateRateLimitTtlSeconds": 2.027123023002322,
  "suspensionReason": "suspensionReason",
  "sandboxLifecycleRateLimit": 9.301444243932576,
  "suspendedAt": "2000-01-23T04:56:07.000+00:00",
  "personal": true,
  "suspensionCleanupGracePeriodHours": 0.8008281904610115,
  "authenticatedRateLimit": 2.3021358869347655,
  "suspended": true,
  "maxCpuPerSandbox": 6.027456183070403,
  "maxDiskPerSandbox": 5.962133916683182,
  "createdBy": "createdBy",
  "name": "name",
  "maxMemoryPerSandbox": 1.4658129805029452
}
```

<h3 id="get-organization-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Organization details|[Organization](#schemaorganization)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Delete organization

<a id="opIddeleteOrganization"></a>

> Code samples

```bash
curl http://localhost:3000/organizations/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /organizations/{organizationId}`

<h3 id="delete-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|Organization ID|

<h3 id="delete-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Organization deleted successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get organization current usage overview

<a id="opIdgetOrganizationUsageOverview"></a>

> Code samples

```bash
curl http://localhost:3000/organizations/string/usage \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{organizationId}/usage`

<h3 id="get-organization-current-usage-overview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|Organization ID|

> Example responses

> 200 Response

```json
{
  "totalSnapshotQuota": 6.84685269835264,
  "currentVolumeUsage": 4.965218492984954,
  "totalVolumeQuota": 1.1730742509559433,
  "currentSnapshotUsage": 7.457744773683766,
  "regionUsage": [
    {
      "totalCpuQuota": 0.8008281904610115,
      "currentGpuUsage": 9.301444243932576,
      "allowedGpuTypes": [
        "H100",
        "H100"
      ],
      "maxDiskPerGpuSandbox": 1.4894159098541704,
      "totalGpuQuota": 7.061401241503109,
      "maxCpuPerGpuSandbox": 1.2315135367772556,
      "maxCpuPerSandbox": 3.616076749251911,
      "maxDiskPerSandbox": 4.145608029883936,
      "maxDiskPerNonEphemeralSandbox": 7.386281948385884,
      "regionId": "regionId",
      "currentDiskUsage": 2.3021358869347655,
      "currentMemoryUsage": 5.962133916683182,
      "currentCpuUsage": 6.027456183070403,
      "maxMemoryPerSandbox": 2.027123023002322,
      "totalMemoryQuota": 1.4658129805029452,
      "totalDiskQuota": 5.637376656633329,
      "sandboxClass": "",
      "maxMemoryPerGpuSandbox": 1.0246457001441578
    },
    {
      "totalCpuQuota": 0.8008281904610115,
      "currentGpuUsage": 9.301444243932576,
      "allowedGpuTypes": [
        "H100",
        "H100"
      ],
      "maxDiskPerGpuSandbox": 1.4894159098541704,
      "totalGpuQuota": 7.061401241503109,
      "maxCpuPerGpuSandbox": 1.2315135367772556,
      "maxCpuPerSandbox": 3.616076749251911,
      "maxDiskPerSandbox": 4.145608029883936,
      "maxDiskPerNonEphemeralSandbox": 7.386281948385884,
      "regionId": "regionId",
      "currentDiskUsage": 2.3021358869347655,
      "currentMemoryUsage": 5.962133916683182,
      "currentCpuUsage": 6.027456183070403,
      "maxMemoryPerSandbox": 2.027123023002322,
      "totalMemoryQuota": 1.4658129805029452,
      "totalDiskQuota": 5.637376656633329,
      "sandboxClass": "",
      "maxMemoryPerGpuSandbox": 1.0246457001441578
    }
  ]
}
```

<h3 id="get-organization-current-usage-overview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Current usage overview|[OrganizationUsageOverview](#schemaorganizationusageoverview)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Update organization quota

<a id="opIdupdateOrganizationQuota"></a>

> Code samples

```bash
curl http://localhost:3000/organizations/string/quota \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "sandboxCreateRateLimitTtlSeconds": 4.145608029883936,
    "sandboxLifecycleRateLimit": 3.616076749251911,
    "volumeQuota": 2.3021358869347655,
    "maxSnapshotSize": 5.637376656633329,
    "authenticatedRateLimit": 7.061401241503109,
    "sandboxCreateRateLimit": 9.301444243932576,
    "snapshotQuota": 5.962133916683182,
    "sandboxLifecycleRateLimitTtlSeconds": 7.386281948385884,
    "maxCpuPerSandbox": 0.8008281904610115,
    "maxDiskPerSandbox": 1.4658129805029452,
    "snapshotDeactivationTimeoutMinutes": 1.2315135367772556,
    "maxMemoryPerSandbox": 6.027456183070403,
    "authenticatedRateLimitTtlSeconds": 2.027123023002322
  }'
```

`PATCH /organizations/{organizationId}/quota`

> Body parameter

```json
{
  "sandboxCreateRateLimitTtlSeconds": 4.145608029883936,
  "sandboxLifecycleRateLimit": 3.616076749251911,
  "volumeQuota": 2.3021358869347655,
  "maxSnapshotSize": 5.637376656633329,
  "authenticatedRateLimit": 7.061401241503109,
  "sandboxCreateRateLimit": 9.301444243932576,
  "snapshotQuota": 5.962133916683182,
  "sandboxLifecycleRateLimitTtlSeconds": 7.386281948385884,
  "maxCpuPerSandbox": 0.8008281904610115,
  "maxDiskPerSandbox": 1.4658129805029452,
  "snapshotDeactivationTimeoutMinutes": 1.2315135367772556,
  "maxMemoryPerSandbox": 6.027456183070403,
  "authenticatedRateLimitTtlSeconds": 2.027123023002322
}
```

<h3 id="update-organization-quota-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|Organization ID|
|body|body|[UpdateOrganizationQuota](#schemaupdateorganizationquota)|true|none|
|» maxCpuPerSandbox|body|number \| null|true|none|
|» maxMemoryPerSandbox|body|number \| null|true|none|
|» maxDiskPerSandbox|body|number \| null|true|none|
|» snapshotQuota|body|number \| null|true|none|
|» maxSnapshotSize|body|number \| null|true|none|
|» volumeQuota|body|number \| null|true|none|
|» authenticatedRateLimit|body|number \| null|true|none|
|» sandboxCreateRateLimit|body|number \| null|true|none|
|» sandboxLifecycleRateLimit|body|number \| null|true|none|
|» authenticatedRateLimitTtlSeconds|body|number \| null|true|none|
|» sandboxCreateRateLimitTtlSeconds|body|number \| null|true|none|
|» sandboxLifecycleRateLimitTtlSeconds|body|number \| null|true|none|
|» snapshotDeactivationTimeoutMinutes|body|number \| null|true|Time in minutes before an unused snapshot is deactivated|

<h3 id="update-organization-quota-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Organization quota updated successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Update organization region quota

<a id="opIdupdateOrganizationRegionQuota"></a>

> Code samples

```bash
curl http://localhost:3000/organizations/string/quota/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "totalCpuQuota": 0.8008281904610115,
    "allowedGpuTypes": [
      "H100",
      "H100"
    ],
    "maxDiskPerGpuSandbox": 4.145608029883936,
    "totalGpuQuota": 5.962133916683182,
    "maxCpuPerGpuSandbox": 3.616076749251911,
    "maxCpuPerSandbox": 5.637376656633329,
    "maxDiskPerSandbox": 7.061401241503109,
    "maxDiskPerNonEphemeralSandbox": 9.301444243932576,
    "maxMemoryPerSandbox": 2.3021358869347655,
    "totalMemoryQuota": 6.027456183070403,
    "totalDiskQuota": 1.4658129805029452,
    "sandboxClass": "",
    "maxMemoryPerGpuSandbox": 2.027123023002322
  }'
```

`PATCH /organizations/{organizationId}/quota/{regionId}`

> Body parameter

```json
{
  "totalCpuQuota": 0.8008281904610115,
  "allowedGpuTypes": [
    "H100",
    "H100"
  ],
  "maxDiskPerGpuSandbox": 4.145608029883936,
  "totalGpuQuota": 5.962133916683182,
  "maxCpuPerGpuSandbox": 3.616076749251911,
  "maxCpuPerSandbox": 5.637376656633329,
  "maxDiskPerSandbox": 7.061401241503109,
  "maxDiskPerNonEphemeralSandbox": 9.301444243932576,
  "maxMemoryPerSandbox": 2.3021358869347655,
  "totalMemoryQuota": 6.027456183070403,
  "totalDiskQuota": 1.4658129805029452,
  "sandboxClass": "",
  "maxMemoryPerGpuSandbox": 2.027123023002322
}
```

<h3 id="update-organization-region-quota-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|Organization ID|
|regionId|path|string|true|ID of the region where the updated quota will be applied|
|body|body|[UpdateOrganizationRegionQuota](#schemaupdateorganizationregionquota)|true|none|
|» sandboxClass|body|object|false|none|
|» totalCpuQuota|body|number \| null|true|none|
|» totalMemoryQuota|body|number \| null|true|none|
|» totalDiskQuota|body|number \| null|true|none|
|» totalGpuQuota|body|number \| null|true|none|
|» allowedGpuTypes|body|[[GpuType](#schemagputype)]|false|none|
|» maxCpuPerSandbox|body|number \| null|false|none|
|» maxMemoryPerSandbox|body|number \| null|false|none|
|» maxDiskPerSandbox|body|number \| null|false|none|
|» maxDiskPerNonEphemeralSandbox|body|number \| null|false|none|
|» maxCpuPerGpuSandbox|body|number \| null|false|none|
|» maxMemoryPerGpuSandbox|body|number \| null|false|none|
|» maxDiskPerGpuSandbox|body|number \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» allowedGpuTypes|H100|
|» allowedGpuTypes|RTX-PRO-6000|

<h3 id="update-organization-region-quota-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Region quota updated successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Leave organization

<a id="opIdleaveOrganization"></a>

> Code samples

```bash
curl http://localhost:3000/organizations/string/leave \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /organizations/{organizationId}/leave`

<h3 id="leave-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|Organization ID|

<h3 id="leave-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Organization left successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Suspend organization

<a id="opIdsuspendOrganization"></a>

> Code samples

```bash
curl http://localhost:3000/organizations/string/suspend \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "reason": "reason",
    "until": "2000-01-23T04:56:07.000+00:00",
    "suspensionCleanupGracePeriodHours": 0.08008281904610115
  }'
```

`POST /organizations/{organizationId}/suspend`

> Body parameter

```json
{
  "reason": "reason",
  "until": "2000-01-23T04:56:07.000+00:00",
  "suspensionCleanupGracePeriodHours": 0.08008281904610115
}
```

<h3 id="suspend-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|Organization ID|
|body|body|[OrganizationSuspension](#schemaorganizationsuspension)|false|none|
|» reason|body|string|true|Suspension reason|
|» until|body|string(date-time)|true|Suspension until|
|» suspensionCleanupGracePeriodHours|body|number|false|Suspension cleanup grace period hours|

<h3 id="suspend-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Organization suspended successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Unsuspend organization

<a id="opIdunsuspendOrganization"></a>

> Code samples

```bash
curl http://localhost:3000/organizations/string/unsuspend \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /organizations/{organizationId}/unsuspend`

<h3 id="unsuspend-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|Organization ID|

<h3 id="unsuspend-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Organization unsuspended successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get organization OTEL config by sandbox auth token

<a id="opIdgetOrganizationOtelConfigBySandboxAuthToken"></a>

> Code samples

```bash
curl http://localhost:3000/organizations/otel-config/by-sandbox-auth-token/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/otel-config/by-sandbox-auth-token/{authToken}`

<h3 id="get-organization-otel-config-by-sandbox-auth-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|authToken|path|string|true|Sandbox Auth Token|

> Example responses

> 200 Response

```json
{
  "headers": {
    "x-api-key": "my-api-key"
  },
  "endpoint": "endpoint"
}
```

<h3 id="get-organization-otel-config-by-sandbox-auth-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OTEL Config|[OtelConfig](#schemaotelconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get organization OTEL config by organization ID

<a id="opIdgetOrganizationOtelConfig"></a>

> Code samples

```bash
curl http://localhost:3000/organizations/string/otel-config \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{organizationId}/otel-config`

<h3 id="get-organization-otel-config-by-organization-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|Organization ID|

> Example responses

> 200 Response

```json
{
  "headers": {
    "x-api-key": "my-api-key"
  },
  "endpoint": "endpoint"
}
```

<h3 id="get-organization-otel-config-by-organization-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OTEL Config|[OtelConfig](#schemaotelconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Update organization OpenTelemetry configuration

<a id="opIdupdateOrganizationOtelConfig"></a>

> Code samples

```bash
curl http://localhost:3000/organizations/string/otel-config \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "headers": {
      "x-api-key": "my-api-key"
    },
    "endpoint": "endpoint"
  }'
```

`PUT /organizations/{organizationId}/otel-config`

> Body parameter

```json
{
  "headers": {
    "x-api-key": "my-api-key"
  },
  "endpoint": "endpoint"
}
```

<h3 id="update-organization-opentelemetry-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|Organization ID|
|body|body|[OtelConfig](#schemaotelconfig)|true|none|
|» endpoint|body|string|true|Endpoint|
|» headers|body|object \| null|false|Headers|
|» » **additionalProperties**|body|string|false|none|

<h3 id="update-organization-opentelemetry-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OpenTelemetry configuration updated successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Delete organization OpenTelemetry configuration

<a id="opIddeleteOrganizationOtelConfig"></a>

> Code samples

```bash
curl http://localhost:3000/organizations/string/otel-config \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /organizations/{organizationId}/otel-config`

<h3 id="delete-organization-opentelemetry-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|Organization ID|

<h3 id="delete-organization-opentelemetry-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OpenTelemetry configuration deleted successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Update sandbox default limited network egress

<a id="opIdupdateSandboxDefaultLimitedNetworkEgress"></a>

> Code samples

```bash
curl http://localhost:3000/organizations/string/sandbox-default-limited-network-egress \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "sandboxDefaultLimitedNetworkEgress": true
  }'
```

`POST /organizations/{organizationId}/sandbox-default-limited-network-egress`

> Body parameter

```json
{
  "sandboxDefaultLimitedNetworkEgress": true
}
```

<h3 id="update-sandbox-default-limited-network-egress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|Organization ID|
|body|body|[OrganizationSandboxDefaultLimitedNetworkEgress](#schemaorganizationsandboxdefaultlimitednetworkegress)|true|none|
|» sandboxDefaultLimitedNetworkEgress|body|boolean|true|Sandbox default limited network egress|

<h3 id="update-sandbox-default-limited-network-egress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Sandbox default limited network egress updated successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Update experimental configuration

<a id="opIdupdateExperimentalConfig"></a>

> Code samples

```bash
curl http://localhost:3000/organizations/string/experimental-config \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "otel": {
      "endpoint": "http://otel-collector:4317",
      "headers": {
        "api-key": "XXX"
      }
    }
  }'
```

`PUT /organizations/{organizationId}/experimental-config`

> Body parameter

```json
{
  "otel": {
    "endpoint": "http://otel-collector:4317",
    "headers": {
      "api-key": "XXX"
    }
  }
}
```

<h3 id="update-experimental-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|Organization ID|
|body|body|object|false|Experimental configuration as a JSON object. Set to null to clear the configuration.|

<h3 id="update-experimental-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## List organization roles

<a id="opIdlistOrganizationRoles"></a>

> Code samples

```bash
curl http://localhost:3000/organizations/string/roles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{organizationId}/roles`

<h3 id="list-organization-roles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|Organization ID|

> Example responses

> 200 Response

```json
[
  {
    "createdAt": "2000-01-23T04:56:07.000+00:00",
    "permissions": [
      "write:registries",
      "write:registries"
    ],
    "name": "name",
    "isGlobal": true,
    "description": "description",
    "id": "id",
    "updatedAt": "2000-01-23T04:56:07.000+00:00"
  }
]
```

<h3 id="list-organization-roles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of organization roles|Inline|

<h3 id="list-organization-roles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[OrganizationRole](#schemaorganizationrole)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Create organization role

<a id="opIdcreateOrganizationRole"></a>

> Code samples

```bash
curl http://localhost:3000/organizations/string/roles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "permissions": [
      "write:registries",
      "write:registries"
    ],
    "name": "Maintainer",
    "description": "Can manage all resources"
  }'
```

`POST /organizations/{organizationId}/roles`

> Body parameter

```json
{
  "permissions": [
    "write:registries",
    "write:registries"
  ],
  "name": "Maintainer",
  "description": "Can manage all resources"
}
```

<h3 id="create-organization-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|Organization ID|
|body|body|[CreateOrganizationRole](#schemacreateorganizationrole)|true|none|
|» name|body|string|true|The name of the role|
|» description|body|string|true|The description of the role|
|» permissions|body|[string]|true|The list of permissions assigned to the role|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» permissions|write:registries|
|» permissions|delete:registries|
|» permissions|write:snapshots|
|» permissions|delete:snapshots|
|» permissions|write:sandboxes|
|» permissions|delete:sandboxes|
|» permissions|read:volumes|
|» permissions|write:volumes|
|» permissions|delete:volumes|
|» permissions|write:regions|
|» permissions|delete:regions|
|» permissions|read:runners|
|» permissions|write:runners|
|» permissions|delete:runners|
|» permissions|read:audit_logs|

> Example responses

> 201 Response

```json
{
  "createdAt": "2000-01-23T04:56:07.000+00:00",
  "permissions": [
    "write:registries",
    "write:registries"
  ],
  "name": "name",
  "isGlobal": true,
  "description": "description",
  "id": "id",
  "updatedAt": "2000-01-23T04:56:07.000+00:00"
}
```

<h3 id="create-organization-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Organization role created successfully|[OrganizationRole](#schemaorganizationrole)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Update organization role

<a id="opIdupdateOrganizationRole"></a>

> Code samples

```bash
curl http://localhost:3000/organizations/string/roles/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "permissions": [
      "write:registries",
      "write:registries"
    ],
    "name": "Maintainer",
    "description": "Can manage all resources"
  }'
```

`PUT /organizations/{organizationId}/roles/{roleId}`

> Body parameter

```json
{
  "permissions": [
    "write:registries",
    "write:registries"
  ],
  "name": "Maintainer",
  "description": "Can manage all resources"
}
```

<h3 id="update-organization-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|Organization ID|
|roleId|path|string|true|Role ID|
|body|body|[UpdateOrganizationRole](#schemaupdateorganizationrole)|true|none|
|» name|body|string|true|The name of the role|
|» description|body|string|true|The description of the role|
|» permissions|body|[string]|true|The list of permissions assigned to the role|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» permissions|write:registries|
|» permissions|delete:registries|
|» permissions|write:snapshots|
|» permissions|delete:snapshots|
|» permissions|write:sandboxes|
|» permissions|delete:sandboxes|
|» permissions|read:volumes|
|» permissions|write:volumes|
|» permissions|delete:volumes|
|» permissions|write:regions|
|» permissions|delete:regions|
|» permissions|read:runners|
|» permissions|write:runners|
|» permissions|delete:runners|
|» permissions|read:audit_logs|

> Example responses

> 200 Response

```json
{
  "createdAt": "2000-01-23T04:56:07.000+00:00",
  "permissions": [
    "write:registries",
    "write:registries"
  ],
  "name": "name",
  "isGlobal": true,
  "description": "description",
  "id": "id",
  "updatedAt": "2000-01-23T04:56:07.000+00:00"
}
```

<h3 id="update-organization-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Role updated successfully|[OrganizationRole](#schemaorganizationrole)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Delete organization role

<a id="opIddeleteOrganizationRole"></a>

> Code samples

```bash
curl http://localhost:3000/organizations/string/roles/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /organizations/{organizationId}/roles/{roleId}`

<h3 id="delete-organization-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|Organization ID|
|roleId|path|string|true|Role ID|

<h3 id="delete-organization-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Organization role deleted successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## List organization members

<a id="opIdlistOrganizationMembers"></a>

> Code samples

```bash
curl http://localhost:3000/organizations/string/users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{organizationId}/users`

<h3 id="list-organization-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|Organization ID|

> Example responses

> 200 Response

```json
[
  {
    "organizationId": "organizationId",
    "createdAt": "2000-01-23T04:56:07.000+00:00",
    "role": "owner",
    "assignedRoles": [
      {
        "createdAt": "2000-01-23T04:56:07.000+00:00",
        "permissions": [
          "write:registries",
          "write:registries"
        ],
        "name": "name",
        "isGlobal": true,
        "description": "description",
        "id": "id",
        "updatedAt": "2000-01-23T04:56:07.000+00:00"
      },
      {
        "createdAt": "2000-01-23T04:56:07.000+00:00",
        "permissions": [
          "write:registries",
          "write:registries"
        ],
        "name": "name",
        "isGlobal": true,
        "description": "description",
        "id": "id",
        "updatedAt": "2000-01-23T04:56:07.000+00:00"
      }
    ],
    "name": "name",
    "userId": "userId",
    "email": "email",
    "updatedAt": "2000-01-23T04:56:07.000+00:00"
  }
]
```

<h3 id="list-organization-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of organization members|Inline|

<h3 id="list-organization-members-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[OrganizationUser](#schemaorganizationuser)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Update access for organization member

<a id="opIdupdateAccessForOrganizationMember"></a>

> Code samples

```bash
curl http://localhost:3000/organizations/string/users/string/access \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "role": "member",
    "assignedRoleIds": [
      "assignedRoleIds",
      "assignedRoleIds"
    ]
  }'
```

`POST /organizations/{organizationId}/users/{userId}/access`

> Body parameter

```json
{
  "role": "member",
  "assignedRoleIds": [
    "assignedRoleIds",
    "assignedRoleIds"
  ]
}
```

<h3 id="update-access-for-organization-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|Organization ID|
|userId|path|string|true|User ID|
|body|body|[UpdateOrganizationMemberAccess](#schemaupdateorganizationmemberaccess)|true|none|
|» role|body|string|true|Organization member role|
|» assignedRoleIds|body|[string]|true|Array of assigned role IDs|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» role|owner|
|» role|member|

> Example responses

> 200 Response

```json
{
  "organizationId": "organizationId",
  "createdAt": "2000-01-23T04:56:07.000+00:00",
  "role": "owner",
  "assignedRoles": [
    {
      "createdAt": "2000-01-23T04:56:07.000+00:00",
      "permissions": [
        "write:registries",
        "write:registries"
      ],
      "name": "name",
      "isGlobal": true,
      "description": "description",
      "id": "id",
      "updatedAt": "2000-01-23T04:56:07.000+00:00"
    },
    {
      "createdAt": "2000-01-23T04:56:07.000+00:00",
      "permissions": [
        "write:registries",
        "write:registries"
      ],
      "name": "name",
      "isGlobal": true,
      "description": "description",
      "id": "id",
      "updatedAt": "2000-01-23T04:56:07.000+00:00"
    }
  ],
  "name": "name",
  "userId": "userId",
  "email": "email",
  "updatedAt": "2000-01-23T04:56:07.000+00:00"
}
```

<h3 id="update-access-for-organization-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Access updated successfully|[OrganizationUser](#schemaorganizationuser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Delete organization member

<a id="opIddeleteOrganizationMember"></a>

> Code samples

```bash
curl http://localhost:3000/organizations/string/users/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /organizations/{organizationId}/users/{userId}`

<h3 id="delete-organization-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|Organization ID|
|userId|path|string|true|User ID|

<h3 id="delete-organization-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|User removed from organization successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## List pending organization invitations

<a id="opIdlistOrganizationInvitations"></a>

> Code samples

```bash
curl http://localhost:3000/organizations/string/invitations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{organizationId}/invitations`

<h3 id="list-pending-organization-invitations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|Organization ID|

> Example responses

> 200 Response

```json
[
  {
    "organizationId": "organizationId",
    "createdAt": "2000-01-23T04:56:07.000+00:00",
    "invitedBy": "invitedBy",
    "role": "owner",
    "organizationName": "organizationName",
    "assignedRoles": [
      {
        "createdAt": "2000-01-23T04:56:07.000+00:00",
        "permissions": [
          "write:registries",
          "write:registries"
        ],
        "name": "name",
        "isGlobal": true,
        "description": "description",
        "id": "id",
        "updatedAt": "2000-01-23T04:56:07.000+00:00"
      },
      {
        "createdAt": "2000-01-23T04:56:07.000+00:00",
        "permissions": [
          "write:registries",
          "write:registries"
        ],
        "name": "name",
        "isGlobal": true,
        "description": "description",
        "id": "id",
        "updatedAt": "2000-01-23T04:56:07.000+00:00"
      }
    ],
    "id": "id",
    "email": "email",
    "expiresAt": "2000-01-23T04:56:07.000+00:00",
    "status": "pending",
    "updatedAt": "2000-01-23T04:56:07.000+00:00"
  }
]
```

<h3 id="list-pending-organization-invitations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of pending organization invitations|Inline|

<h3 id="list-pending-organization-invitations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[OrganizationInvitation](#schemaorganizationinvitation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Create organization invitation

<a id="opIdcreateOrganizationInvitation"></a>

> Code samples

```bash
curl http://localhost:3000/organizations/string/invitations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "role": "member",
    "assignedRoleIds": [
      "assignedRoleIds",
      "assignedRoleIds"
    ],
    "email": "mail@example.com",
    "expiresAt": "2021-12-31T23:59:59Z"
  }'
```

`POST /organizations/{organizationId}/invitations`

> Body parameter

```json
{
  "role": "member",
  "assignedRoleIds": [
    "assignedRoleIds",
    "assignedRoleIds"
  ],
  "email": "mail@example.com",
  "expiresAt": "2021-12-31T23:59:59Z"
}
```

<h3 id="create-organization-invitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|Organization ID|
|body|body|[CreateOrganizationInvitation](#schemacreateorganizationinvitation)|true|none|
|» email|body|string|true|Email address of the invitee|
|» role|body|string|true|Organization member role for the invitee|
|» assignedRoleIds|body|[string]|true|Array of assigned role IDs for the invitee|
|» expiresAt|body|string(date-time)|false|Expiration date of the invitation|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» role|owner|
|» role|member|

> Example responses

> 201 Response

```json
{
  "organizationId": "organizationId",
  "createdAt": "2000-01-23T04:56:07.000+00:00",
  "invitedBy": "invitedBy",
  "role": "owner",
  "organizationName": "organizationName",
  "assignedRoles": [
    {
      "createdAt": "2000-01-23T04:56:07.000+00:00",
      "permissions": [
        "write:registries",
        "write:registries"
      ],
      "name": "name",
      "isGlobal": true,
      "description": "description",
      "id": "id",
      "updatedAt": "2000-01-23T04:56:07.000+00:00"
    },
    {
      "createdAt": "2000-01-23T04:56:07.000+00:00",
      "permissions": [
        "write:registries",
        "write:registries"
      ],
      "name": "name",
      "isGlobal": true,
      "description": "description",
      "id": "id",
      "updatedAt": "2000-01-23T04:56:07.000+00:00"
    }
  ],
  "id": "id",
  "email": "email",
  "expiresAt": "2000-01-23T04:56:07.000+00:00",
  "status": "pending",
  "updatedAt": "2000-01-23T04:56:07.000+00:00"
}
```

<h3 id="create-organization-invitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Organization invitation created successfully|[OrganizationInvitation](#schemaorganizationinvitation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Update organization invitation

<a id="opIdupdateOrganizationInvitation"></a>

> Code samples

```bash
curl http://localhost:3000/organizations/string/invitations/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "role": "owner",
    "assignedRoleIds": [
      "assignedRoleIds",
      "assignedRoleIds"
    ],
    "expiresAt": "2021-12-31T23:59:59Z"
  }'
```

`PUT /organizations/{organizationId}/invitations/{invitationId}`

> Body parameter

```json
{
  "role": "owner",
  "assignedRoleIds": [
    "assignedRoleIds",
    "assignedRoleIds"
  ],
  "expiresAt": "2021-12-31T23:59:59Z"
}
```

<h3 id="update-organization-invitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|Organization ID|
|invitationId|path|string|true|Invitation ID|
|body|body|[UpdateOrganizationInvitation](#schemaupdateorganizationinvitation)|true|none|
|» role|body|string|true|Organization member role|
|» assignedRoleIds|body|[string]|true|Array of role IDs|
|» expiresAt|body|string(date-time)|false|Expiration date of the invitation|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» role|owner|
|» role|member|

> Example responses

> 200 Response

```json
{
  "organizationId": "organizationId",
  "createdAt": "2000-01-23T04:56:07.000+00:00",
  "invitedBy": "invitedBy",
  "role": "owner",
  "organizationName": "organizationName",
  "assignedRoles": [
    {
      "createdAt": "2000-01-23T04:56:07.000+00:00",
      "permissions": [
        "write:registries",
        "write:registries"
      ],
      "name": "name",
      "isGlobal": true,
      "description": "description",
      "id": "id",
      "updatedAt": "2000-01-23T04:56:07.000+00:00"
    },
    {
      "createdAt": "2000-01-23T04:56:07.000+00:00",
      "permissions": [
        "write:registries",
        "write:registries"
      ],
      "name": "name",
      "isGlobal": true,
      "description": "description",
      "id": "id",
      "updatedAt": "2000-01-23T04:56:07.000+00:00"
    }
  ],
  "id": "id",
  "email": "email",
  "expiresAt": "2000-01-23T04:56:07.000+00:00",
  "status": "pending",
  "updatedAt": "2000-01-23T04:56:07.000+00:00"
}
```

<h3 id="update-organization-invitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Organization invitation updated successfully|[OrganizationInvitation](#schemaorganizationinvitation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Cancel organization invitation

<a id="opIdcancelOrganizationInvitation"></a>

> Code samples

```bash
curl http://localhost:3000/organizations/string/invitations/string/cancel \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /organizations/{organizationId}/invitations/{invitationId}/cancel`

<h3 id="cancel-organization-invitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|Organization ID|
|invitationId|path|string|true|Invitation ID|

<h3 id="cancel-organization-invitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Organization invitation cancelled successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## List all available regions for the organization

<a id="opIdlistAvailableRegions"></a>

> Code samples

```bash
curl http://localhost:3000/regions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /regions`

<h3 id="list-all-available-regions-for-the-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|

> Example responses

> 200 Response

```json
[
  {
    "organizationId": "123e4567-e89b-12d3-a456-426614174000",
    "createdAt": "2023-01-01T00:00:00.000Z",
    "snapshotManagerUrl": "http://snapshot-manager.example.com",
    "regionType": "shared",
    "proxyUrl": "https://proxy.example.com",
    "name": "us-east-1",
    "sshGatewayUrl": "http://ssh-gateway.example.com",
    "id": "123456789012",
    "updatedAt": "2023-01-01T00:00:00.000Z"
  }
]
```

<h3 id="list-all-available-regions-for-the-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all available regions|Inline|

<h3 id="list-all-available-regions-for-the-organization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Region](#schemaregion)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Create a new region

<a id="opIdcreateRegion"></a>

> Code samples

```bash
curl http://localhost:3000/regions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "snapshotManagerUrl": "https://snapshot-manager.example.com",
    "proxyUrl": "https://proxy.example.com",
    "name": "us-east-1",
    "sshGatewayUrl": "ssh://ssh-gateway.example.com"
  }'
```

`POST /regions`

> Body parameter

```json
{
  "snapshotManagerUrl": "https://snapshot-manager.example.com",
  "proxyUrl": "https://proxy.example.com",
  "name": "us-east-1",
  "sshGatewayUrl": "ssh://ssh-gateway.example.com"
}
```

<h3 id="create-a-new-region-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|body|body|[CreateRegion](#schemacreateregion)|true|none|
|» name|body|string|true|Region name|
|» proxyUrl|body|string \| null|false|Proxy URL for the region|
|» sshGatewayUrl|body|string \| null|false|SSH Gateway URL for the region|
|» snapshotManagerUrl|body|string \| null|false|Snapshot Manager URL for the region|

> Example responses

> 201 Response

```json
{
  "proxyApiKey": "proxy-api-key-xyz",
  "snapshotManagerUsername": "daytona",
  "snapshotManagerPassword": "snapshotManagerPassword",
  "id": "region_12345",
  "sshGatewayApiKey": "ssh-gateway-api-key-abc"
}
```

<h3 id="create-a-new-region-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The region has been successfully created.|[CreateRegionResponse](#schemacreateregionresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get region by ID

<a id="opIdgetRegionById"></a>

> Code samples

```bash
curl http://localhost:3000/regions/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /regions/{id}`

<h3 id="get-region-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|id|path|string|true|Region ID|

> Example responses

> 200 Response

```json
{
  "organizationId": "123e4567-e89b-12d3-a456-426614174000",
  "createdAt": "2023-01-01T00:00:00.000Z",
  "snapshotManagerUrl": "http://snapshot-manager.example.com",
  "regionType": "shared",
  "proxyUrl": "https://proxy.example.com",
  "name": "us-east-1",
  "sshGatewayUrl": "http://ssh-gateway.example.com",
  "id": "123456789012",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

<h3 id="get-region-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Region](#schemaregion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Delete a region

<a id="opIddeleteRegion"></a>

> Code samples

```bash
curl http://localhost:3000/regions/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /regions/{id}`

<h3 id="delete-a-region-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|id|path|string|true|Region ID|

<h3 id="delete-a-region-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The region has been successfully deleted.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Update region configuration

<a id="opIdupdateRegion"></a>

> Code samples

```bash
curl http://localhost:3000/regions/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "snapshotManagerUrl": "https://snapshot-manager.example.com",
    "proxyUrl": "https://proxy.example.com",
    "sshGatewayUrl": "ssh://ssh-gateway.example.com"
  }'
```

`PATCH /regions/{id}`

> Body parameter

```json
{
  "snapshotManagerUrl": "https://snapshot-manager.example.com",
  "proxyUrl": "https://proxy.example.com",
  "sshGatewayUrl": "ssh://ssh-gateway.example.com"
}
```

<h3 id="update-region-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|id|path|string|true|Region ID|
|body|body|[UpdateRegion](#schemaupdateregion)|true|none|
|» proxyUrl|body|string \| null|false|Proxy URL for the region|
|» sshGatewayUrl|body|string \| null|false|SSH Gateway URL for the region|
|» snapshotManagerUrl|body|string \| null|false|Snapshot Manager URL for the region|

<h3 id="update-region-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Regenerate proxy API key for a region

<a id="opIdregenerateProxyApiKey"></a>

> Code samples

```bash
curl http://localhost:3000/regions/string/regenerate-proxy-api-key \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /regions/{id}/regenerate-proxy-api-key`

<h3 id="regenerate-proxy-api-key-for-a-region-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|id|path|string|true|Region ID|

> Example responses

> 200 Response

```json
{
  "apiKey": "api-key-xyz123"
}
```

<h3 id="regenerate-proxy-api-key-for-a-region-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The proxy API key has been successfully regenerated.|[RegenerateApiKeyResponse](#schemaregenerateapikeyresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Regenerate SSH gateway API key for a region

<a id="opIdregenerateSshGatewayApiKey"></a>

> Code samples

```bash
curl http://localhost:3000/regions/string/regenerate-ssh-gateway-api-key \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /regions/{id}/regenerate-ssh-gateway-api-key`

<h3 id="regenerate-ssh-gateway-api-key-for-a-region-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|id|path|string|true|Region ID|

> Example responses

> 200 Response

```json
{
  "apiKey": "api-key-xyz123"
}
```

<h3 id="regenerate-ssh-gateway-api-key-for-a-region-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The SSH gateway API key has been successfully regenerated.|[RegenerateApiKeyResponse](#schemaregenerateapikeyresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Regenerate snapshot manager credentials for a region

<a id="opIdregenerateSnapshotManagerCredentials"></a>

> Code samples

```bash
curl http://localhost:3000/regions/string/regenerate-snapshot-manager-credentials \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /regions/{id}/regenerate-snapshot-manager-credentials`

<h3 id="regenerate-snapshot-manager-credentials-for-a-region-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|id|path|string|true|Region ID|

> Example responses

> 200 Response

```json
{
  "password": "password",
  "username": "daytona"
}
```

<h3 id="regenerate-snapshot-manager-credentials-for-a-region-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The snapshot manager credentials have been successfully regenerated.|[SnapshotManagerCredentials](#schemasnapshotmanagercredentials)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

<h1 id="daytona-users">users</h1>

## Get authenticated user

<a id="opIdgetAuthenticatedUser"></a>

> Code samples

```bash
curl http://localhost:3000/users/me \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/me`

> Example responses

> 200 Response

```json
{
  "createdAt": "2000-01-23T04:56:07.000+00:00",
  "publicKeys": [
    {
      "name": "name",
      "key": "key"
    },
    {
      "name": "name",
      "key": "key"
    }
  ],
  "name": "name",
  "id": "id",
  "email": "email"
}
```

<h3 id="get-authenticated-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User details|[User](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get available account providers

<a id="opIdgetAvailableAccountProviders"></a>

> Code samples

```bash
curl http://localhost:3000/users/account-providers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/account-providers`

> Example responses

> 200 Response

```json
[
  {
    "displayName": "displayName",
    "name": "name"
  }
]
```

<h3 id="get-available-account-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Available account providers|Inline|

<h3 id="get-available-account-providers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AccountProvider](#schemaaccountprovider)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Link account

<a id="opIdlinkAccount"></a>

> Code samples

```bash
curl http://localhost:3000/users/linked-accounts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "provider": "provider",
    "userId": "userId"
  }'
```

`POST /users/linked-accounts`

> Body parameter

```json
{
  "provider": "provider",
  "userId": "userId"
}
```

<h3 id="link-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateLinkedAccount](#schemacreatelinkedaccount)|true|none|
|» provider|body|string|true|The authentication provider of the secondary account|
|» userId|body|string|true|The user ID of the secondary account|

<h3 id="link-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Account linked successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Unlink account

<a id="opIdunlinkAccount"></a>

> Code samples

```bash
curl http://localhost:3000/users/linked-accounts/string/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /users/linked-accounts/{provider}/{providerUserId}`

<h3 id="unlink-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|provider|path|string|true|none|
|providerUserId|path|string|true|none|

<h3 id="unlink-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Account unlinked successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Enroll in SMS MFA

<a id="opIdenrollInSmsMfa"></a>

> Code samples

```bash
curl http://localhost:3000/users/mfa/sms/enroll \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /users/mfa/sms/enroll`

> Example responses

> 200 Response

```json
"string"
```

<h3 id="enroll-in-sms-mfa-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|SMS MFA enrollment URL|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

<h1 id="daytona-regions">regions</h1>

## List all shared regions

<a id="opIdlistSharedRegions"></a>

> Code samples

```bash
curl http://localhost:3000/shared-regions \
  -H 'Accept: application/json'
```

`GET /shared-regions`

> Example responses

> 200 Response

```json
[
  {
    "organizationId": "123e4567-e89b-12d3-a456-426614174000",
    "createdAt": "2023-01-01T00:00:00.000Z",
    "snapshotManagerUrl": "http://snapshot-manager.example.com",
    "regionType": "shared",
    "proxyUrl": "https://proxy.example.com",
    "name": "us-east-1",
    "sshGatewayUrl": "http://ssh-gateway.example.com",
    "id": "123456789012",
    "updatedAt": "2023-01-01T00:00:00.000Z"
  }
]
```

<h3 id="list-all-shared-regions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all shared regions|Inline|

<h3 id="list-all-shared-regions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Region](#schemaregion)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="daytona-sandbox">sandbox</h1>

## List sandboxes

<a id="opIdlistSandboxes"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sandbox`

Advanced filtering and ordering. Eventually consistent.

<h3 id="list-sandboxes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|cursor|query|string|false|Pagination cursor from a previous response|
|limit|query|number|false|Number of results per page|
|id|query|string|false|Filter by ID prefix (case-insensitive)|
|name|query|string|false|Filter by name prefix (case-insensitive)|
|labels|query|string|false|JSON encoded labels to filter by|
|includeErroredDeleted|query|boolean|false|Include results with errored state and deleted desired state|
|states|query|[[SandboxState](#schemasandboxstate)]|false|List of states to filter by.|
|snapshots|query|[string]|false|List of snapshot names to filter by|
|regionIds|query|[string]|false|List of regions IDs to filter by|
|sandboxClasses|query|[[SandboxClass](#schemasandboxclass)]|false|List of sandbox classes to filter by|
|minCpu|query|number|false|Minimum CPU|
|maxCpu|query|number|false|Maximum CPU|
|minMemoryGiB|query|number|false|Minimum memory in GiB|
|maxMemoryGiB|query|number|false|Maximum memory in GiB|
|minDiskGiB|query|number|false|Minimum disk space in GiB|
|maxDiskGiB|query|number|false|Maximum disk space in GiB|
|isPublic|query|boolean|false|Filter by public status|
|isRecoverable|query|boolean|false|Filter by recoverable status|
|createdAtAfter|query|string(date-time)|false|Include items created after this timestamp|
|createdAtBefore|query|string(date-time)|false|Include items created before this timestamp|
|lastEventAfter|query|string(date-time)|false|Include items with last event after this timestamp|
|lastEventBefore|query|string(date-time)|false|Include items with last event before this timestamp|
|sort|query|[SandboxListSortField](#schemasandboxlistsortfield)|false|Field to sort by|
|order|query|[SandboxListSortDirection](#schemasandboxlistsortdirection)|false|Direction to sort by|

#### Enumerated Values

|Parameter|Value|
|---|---|
|states|creating|
|states|restoring|
|states|destroyed|
|states|destroying|
|states|started|
|states|stopped|
|states|starting|
|states|stopping|
|states|error|
|states|build_failed|
|states|pending_build|
|states|building_snapshot|
|states|unknown|
|states|pulling_snapshot|
|states|archived|
|states|archiving|
|states|resizing|
|states|snapshotting|
|states|forking|
|states|pausing|
|states|paused|
|states|resuming|
|sandboxClasses|linux-vm|
|sandboxClasses|container|
|sandboxClasses|android|
|sandboxClasses|windows|
|sort|name|
|sort|cpu|
|sort|memoryGib|
|sort|diskGib|
|sort|lastActivityAt|
|sort|createdAt|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "nextCursor": "nextCursor",
  "items": [
    {
      "memory": 4,
      "toolboxProxyUrl": "https://proxy.app.daytona.io/toolbox",
      "lastActivityAt": "2024-10-01T12:00:00Z",
      "autoStopInterval": 30,
      "organizationId": "organization123",
      "createdAt": "2024-10-01T12:00:00Z",
      "autoDeleteInterval": 30,
      "public": false,
      "errorReason": "The sandbox is not running",
      "runnerId": "runner123",
      "id": "sandbox123",
      "state": "creating",
      "sandboxClass": "linux-vm",
      "gpuType": "H100",
      "updatedAt": "2024-10-01T12:00:00Z",
      "desiredState": "destroyed",
      "recoverable": true,
      "cpu": 2,
      "gpu": 0,
      "daemonVersion": "1.0.0",
      "target": "local",
      "labels": {
        "daytona.io/public": "true"
      },
      "disk": 10,
      "name": "MySandbox",
      "backupState": "None",
      "user": "daytona",
      "autoArchiveInterval": 10080,
      "snapshot": "daytonaio/sandbox:latest"
    },
    {
      "memory": 4,
      "toolboxProxyUrl": "https://proxy.app.daytona.io/toolbox",
      "lastActivityAt": "2024-10-01T12:00:00Z",
      "autoStopInterval": 30,
      "organizationId": "organization123",
      "createdAt": "2024-10-01T12:00:00Z",
      "autoDeleteInterval": 30,
      "public": false,
      "errorReason": "The sandbox is not running",
      "runnerId": "runner123",
      "id": "sandbox123",
      "state": "creating",
      "sandboxClass": "linux-vm",
      "gpuType": "H100",
      "updatedAt": "2024-10-01T12:00:00Z",
      "desiredState": "destroyed",
      "recoverable": true,
      "cpu": 2,
      "gpu": 0,
      "daemonVersion": "1.0.0",
      "target": "local",
      "labels": {
        "daytona.io/public": "true"
      },
      "disk": 10,
      "name": "MySandbox",
      "backupState": "None",
      "user": "daytona",
      "autoArchiveInterval": 10080,
      "snapshot": "daytonaio/sandbox:latest"
    }
  ]
}
```

<h3 id="list-sandboxes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ListSandboxesResponse](#schemalistsandboxesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Create a new sandbox

<a id="opIdcreateSandbox"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "memory": 1,
    "buildInfo": "",
    "networkAllowList": "192.168.1.0/16,10.0.0.0/24",
    "volumes": [
      {
        "mountPath": "/data",
        "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "subpath": "users/alice"
      },
      {
        "mountPath": "/data",
        "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "subpath": "users/alice"
      }
    ],
    "cpu": 2,
    "env": {
      "NODE_ENV": "production"
    },
    "gpu": 1,
    "autoStopInterval": 30,
    "labels": {
      "daytona.io/public": "true"
    },
    "target": "us",
    "networkBlockAll": false,
    "disk": 3,
    "autoDeleteInterval": 30,
    "domainAllowList": "example.com,*.daytona.io",
    "public": false,
    "linkedSandbox": "sandbox123",
    "name": "MySandbox",
    "user": "daytona",
    "autoArchiveInterval": 10080,
    "snapshot": "ubuntu-4vcpu-8ram-100gb",
    "gpuType": [
      "H100"
    ]
  }'
```

`POST /sandbox`

> Body parameter

```json
{
  "memory": 1,
  "buildInfo": "",
  "networkAllowList": "192.168.1.0/16,10.0.0.0/24",
  "volumes": [
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    },
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    }
  ],
  "cpu": 2,
  "env": {
    "NODE_ENV": "production"
  },
  "gpu": 1,
  "autoStopInterval": 30,
  "labels": {
    "daytona.io/public": "true"
  },
  "target": "us",
  "networkBlockAll": false,
  "disk": 3,
  "autoDeleteInterval": 30,
  "domainAllowList": "example.com,*.daytona.io",
  "public": false,
  "linkedSandbox": "sandbox123",
  "name": "MySandbox",
  "user": "daytona",
  "autoArchiveInterval": 10080,
  "snapshot": "ubuntu-4vcpu-8ram-100gb",
  "gpuType": [
    "H100"
  ]
}
```

<h3 id="create-a-new-sandbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|body|body|[CreateSandbox](#schemacreatesandbox)|true|none|
|» name|body|string|false|The name of the sandbox. If not provided, the sandbox ID will be used as the name|
|» snapshot|body|string|false|The ID or name of the snapshot used for the sandbox|
|» user|body|string|false|The user associated with the project|
|» env|body|object|false|Environment variables for the sandbox|
|» » **additionalProperties**|body|string|false|none|
|» labels|body|object|false|Labels for the sandbox|
|» » **additionalProperties**|body|string|false|none|
|» public|body|boolean|false|Whether the sandbox http preview is publicly accessible|
|» networkBlockAll|body|boolean|false|Whether to block all network access for the sandbox|
|» networkAllowList|body|string|false|Comma-separated list of allowed CIDR network addresses for the sandbox|
|» domainAllowList|body|string|false|Comma-separated list of allowed domains for the sandbox|
|» target|body|string|false|The target (region) where the sandbox will be created|
|» cpu|body|integer|false|CPU cores allocated to the sandbox|
|» gpu|body|integer|false|GPU units allocated to the sandbox|
|» gpuType|body|[[GpuType](#schemagputype)]|false|Preferred GPU type for the sandbox. Accepts a single value or an ordered preference list — the scheduler tries each in order and pins the sandbox to the first that has capacity.|
|» memory|body|integer|false|Memory allocated to the sandbox in GB|
|» disk|body|integer|false|Disk space allocated to the sandbox in GB|
|» autoStopInterval|body|integer|false|Auto-stop interval in minutes (0 means disabled)|
|» autoArchiveInterval|body|integer|false|Auto-archive interval in minutes (0 means the maximum interval will be used)|
|» autoDeleteInterval|body|integer|false|Auto-delete interval in minutes (negative value means disabled, 0 means delete immediately upon stopping)|
|» volumes|body|[[SandboxVolume](#schemasandboxvolume)]|false|Array of volumes to attach to the sandbox|
|» buildInfo|body|object|false|Build information for the sandbox|
|» » dockerfileContent|body|string|true|The Dockerfile content used for the build|
|» » contextHashes|body|[string]|false|The context hashes used for the build|
|» linkedSandbox|body|string|false|ID or name of an existing sandbox to link the new sandbox to. The new sandbox will be scheduled on the same runner as the linked sandbox so a local network can be established between them. Linked sandboxes must be ephemeral (autoDeleteInterval=0) and cannot themselves be linked to another sandbox.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» gpuType|H100|
|» gpuType|RTX-PRO-6000|

> Example responses

> 200 Response

```json
{
  "memory": 4,
  "linkedSandboxId": "sandbox123",
  "buildInfo": "",
  "toolboxProxyUrl": "https://proxy.app.daytona.io/toolbox",
  "lastActivityAt": "2024-10-01T12:00:00Z",
  "autoStopInterval": 30,
  "organizationId": "organization123",
  "createdAt": "2024-10-01T12:00:00Z",
  "networkBlockAll": false,
  "autoDeleteInterval": 30,
  "domainAllowList": "example.com,*.daytona.io",
  "public": false,
  "errorReason": "The sandbox is not running",
  "runnerId": "runner123",
  "id": "sandbox123",
  "state": "creating",
  "gpuType": "H100",
  "updatedAt": "2024-10-01T12:00:00Z",
  "sandboxClass": "linux-vm",
  "desiredState": "destroyed",
  "networkAllowList": "192.168.1.0/16,10.0.0.0/24",
  "volumes": [
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    },
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    }
  ],
  "cpu": 2,
  "recoverable": true,
  "env": {
    "NODE_ENV": "production"
  },
  "gpu": 0,
  "daemonVersion": "1.0.0",
  "backupCreatedAt": "2024-10-01T12:00:00Z",
  "labels": {
    "daytona.io/public": "true"
  },
  "target": "local",
  "disk": 10,
  "name": "MySandbox",
  "backupState": "None",
  "user": "daytona",
  "autoArchiveInterval": 10080,
  "snapshot": "daytonaio/sandbox:latest"
}
```

<h3 id="create-a-new-sandbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The sandbox has been successfully created.|[Sandbox](#schemasandbox)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] List all sandboxes paginated

<a id="opIdlistSandboxesPaginated_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox/paginated \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sandbox/paginated`

<aside class="warning">
This operation is deprecated
</aside>

<h3 id="deprecated-list-all-sandboxes-paginated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|page|query|number|false|Page number of the results|
|limit|query|number|false|Number of results per page|
|id|query|string|false|Filter by partial ID match|
|name|query|string|false|Filter by partial name match|
|labels|query|string|false|JSON encoded labels to filter by|
|includeErroredDeleted|query|boolean|false|Include results with errored state and deleted desired state|
|states|query|[string]|false|List of states to filter by|
|snapshots|query|[string]|false|List of snapshot names to filter by|
|regions|query|[string]|false|List of regions to filter by|
|minCpu|query|number|false|Minimum CPU|
|maxCpu|query|number|false|Maximum CPU|
|minMemoryGiB|query|number|false|Minimum memory in GiB|
|maxMemoryGiB|query|number|false|Maximum memory in GiB|
|minDiskGiB|query|number|false|Minimum disk space in GiB|
|maxDiskGiB|query|number|false|Maximum disk space in GiB|
|lastEventAfter|query|string(date-time)|false|Include items with last event after this timestamp|
|lastEventBefore|query|string(date-time)|false|Include items with last event before this timestamp|
|sort|query|string|false|Field to sort by|
|order|query|string|false|Direction to sort by|

#### Enumerated Values

|Parameter|Value|
|---|---|
|states|creating|
|states|restoring|
|states|destroying|
|states|started|
|states|stopped|
|states|starting|
|states|stopping|
|states|error|
|states|build_failed|
|states|pending_build|
|states|building_snapshot|
|states|unknown|
|states|pulling_snapshot|
|states|archived|
|states|archiving|
|states|resizing|
|states|snapshotting|
|states|forking|
|states|pausing|
|states|paused|
|states|resuming|
|sort|id|
|sort|name|
|sort|state|
|sort|snapshot|
|sort|region|
|sort|updatedAt|
|sort|createdAt|
|sort|lastActivityAt|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "total": 0.8008281904610115,
  "totalPages": 1.4658129805029452,
  "page": 6.027456183070403,
  "items": [
    {
      "memory": 4,
      "linkedSandboxId": "sandbox123",
      "buildInfo": "",
      "toolboxProxyUrl": "https://proxy.app.daytona.io/toolbox",
      "lastActivityAt": "2024-10-01T12:00:00Z",
      "autoStopInterval": 30,
      "organizationId": "organization123",
      "createdAt": "2024-10-01T12:00:00Z",
      "networkBlockAll": false,
      "autoDeleteInterval": 30,
      "domainAllowList": "example.com,*.daytona.io",
      "public": false,
      "errorReason": "The sandbox is not running",
      "runnerId": "runner123",
      "id": "sandbox123",
      "state": "creating",
      "gpuType": "H100",
      "updatedAt": "2024-10-01T12:00:00Z",
      "sandboxClass": "linux-vm",
      "desiredState": "destroyed",
      "networkAllowList": "192.168.1.0/16,10.0.0.0/24",
      "volumes": [
        {
          "mountPath": "/data",
          "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "subpath": "users/alice"
        },
        {
          "mountPath": "/data",
          "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "subpath": "users/alice"
        }
      ],
      "cpu": 2,
      "recoverable": true,
      "env": {
        "NODE_ENV": "production"
      },
      "gpu": 0,
      "daemonVersion": "1.0.0",
      "backupCreatedAt": "2024-10-01T12:00:00Z",
      "labels": {
        "daytona.io/public": "true"
      },
      "target": "local",
      "disk": 10,
      "name": "MySandbox",
      "backupState": "None",
      "user": "daytona",
      "autoArchiveInterval": 10080,
      "snapshot": "daytonaio/sandbox:latest"
    },
    {
      "memory": 4,
      "linkedSandboxId": "sandbox123",
      "buildInfo": "",
      "toolboxProxyUrl": "https://proxy.app.daytona.io/toolbox",
      "lastActivityAt": "2024-10-01T12:00:00Z",
      "autoStopInterval": 30,
      "organizationId": "organization123",
      "createdAt": "2024-10-01T12:00:00Z",
      "networkBlockAll": false,
      "autoDeleteInterval": 30,
      "domainAllowList": "example.com,*.daytona.io",
      "public": false,
      "errorReason": "The sandbox is not running",
      "runnerId": "runner123",
      "id": "sandbox123",
      "state": "creating",
      "gpuType": "H100",
      "updatedAt": "2024-10-01T12:00:00Z",
      "sandboxClass": "linux-vm",
      "desiredState": "destroyed",
      "networkAllowList": "192.168.1.0/16,10.0.0.0/24",
      "volumes": [
        {
          "mountPath": "/data",
          "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "subpath": "users/alice"
        },
        {
          "mountPath": "/data",
          "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "subpath": "users/alice"
        }
      ],
      "cpu": 2,
      "recoverable": true,
      "env": {
        "NODE_ENV": "production"
      },
      "gpu": 0,
      "daemonVersion": "1.0.0",
      "backupCreatedAt": "2024-10-01T12:00:00Z",
      "labels": {
        "daytona.io/public": "true"
      },
      "target": "local",
      "disk": 10,
      "name": "MySandbox",
      "backupState": "None",
      "user": "daytona",
      "autoArchiveInterval": 10080,
      "snapshot": "daytonaio/sandbox:latest"
    }
  ]
}
```

<h3 id="deprecated-list-all-sandboxes-paginated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Paginated list of all sandboxes|[PaginatedSandboxes_deprecated](#schemapaginatedsandboxes_deprecated)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get sandboxes for the authenticated runner

<a id="opIdgetSandboxesForRunner"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox/for-runner \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sandbox/for-runner`

<h3 id="get-sandboxes-for-the-authenticated-runner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|states|query|string|false|Comma-separated list of sandbox states to filter by|
|skipReconcilingSandboxes|query|boolean|false|Skip sandboxes where state differs from desired state|

> Example responses

> 200 Response

```json
[
  {
    "memory": 4,
    "linkedSandboxId": "sandbox123",
    "buildInfo": "",
    "toolboxProxyUrl": "https://proxy.app.daytona.io/toolbox",
    "lastActivityAt": "2024-10-01T12:00:00Z",
    "autoStopInterval": 30,
    "organizationId": "organization123",
    "createdAt": "2024-10-01T12:00:00Z",
    "networkBlockAll": false,
    "autoDeleteInterval": 30,
    "domainAllowList": "example.com,*.daytona.io",
    "public": false,
    "errorReason": "The sandbox is not running",
    "runnerId": "runner123",
    "id": "sandbox123",
    "state": "creating",
    "gpuType": "H100",
    "updatedAt": "2024-10-01T12:00:00Z",
    "sandboxClass": "linux-vm",
    "desiredState": "destroyed",
    "networkAllowList": "192.168.1.0/16,10.0.0.0/24",
    "volumes": [
      {
        "mountPath": "/data",
        "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "subpath": "users/alice"
      },
      {
        "mountPath": "/data",
        "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "subpath": "users/alice"
      }
    ],
    "cpu": 2,
    "recoverable": true,
    "env": {
      "NODE_ENV": "production"
    },
    "gpu": 0,
    "daemonVersion": "1.0.0",
    "backupCreatedAt": "2024-10-01T12:00:00Z",
    "labels": {
      "daytona.io/public": "true"
    },
    "target": "local",
    "disk": 10,
    "name": "MySandbox",
    "backupState": "None",
    "user": "daytona",
    "autoArchiveInterval": 10080,
    "snapshot": "daytonaio/sandbox:latest"
  }
]
```

<h3 id="get-sandboxes-for-the-authenticated-runner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of sandboxes for the authenticated runner|Inline|

<h3 id="get-sandboxes-for-the-authenticated-runner-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Sandbox](#schemasandbox)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get sandbox details

<a id="opIdgetSandbox"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sandbox/{sandboxIdOrName}`

<h3 id="get-sandbox-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxIdOrName|path|string|true|ID or name of the sandbox|
|verbose|query|boolean|false|Include verbose output|

> Example responses

> 200 Response

```json
{
  "memory": 4,
  "linkedSandboxId": "sandbox123",
  "buildInfo": "",
  "toolboxProxyUrl": "https://proxy.app.daytona.io/toolbox",
  "lastActivityAt": "2024-10-01T12:00:00Z",
  "autoStopInterval": 30,
  "organizationId": "organization123",
  "createdAt": "2024-10-01T12:00:00Z",
  "networkBlockAll": false,
  "autoDeleteInterval": 30,
  "domainAllowList": "example.com,*.daytona.io",
  "public": false,
  "errorReason": "The sandbox is not running",
  "runnerId": "runner123",
  "id": "sandbox123",
  "state": "creating",
  "gpuType": "H100",
  "updatedAt": "2024-10-01T12:00:00Z",
  "sandboxClass": "linux-vm",
  "desiredState": "destroyed",
  "networkAllowList": "192.168.1.0/16,10.0.0.0/24",
  "volumes": [
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    },
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    }
  ],
  "cpu": 2,
  "recoverable": true,
  "env": {
    "NODE_ENV": "production"
  },
  "gpu": 0,
  "daemonVersion": "1.0.0",
  "backupCreatedAt": "2024-10-01T12:00:00Z",
  "labels": {
    "daytona.io/public": "true"
  },
  "target": "local",
  "disk": 10,
  "name": "MySandbox",
  "backupState": "None",
  "user": "daytona",
  "autoArchiveInterval": 10080,
  "snapshot": "daytonaio/sandbox:latest"
}
```

<h3 id="get-sandbox-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sandbox details|[Sandbox](#schemasandbox)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Delete sandbox

<a id="opIddeleteSandbox"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /sandbox/{sandboxIdOrName}`

<h3 id="delete-sandbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxIdOrName|path|string|true|ID or name of the sandbox|

> Example responses

> 200 Response

```json
{
  "memory": 4,
  "linkedSandboxId": "sandbox123",
  "buildInfo": "",
  "toolboxProxyUrl": "https://proxy.app.daytona.io/toolbox",
  "lastActivityAt": "2024-10-01T12:00:00Z",
  "autoStopInterval": 30,
  "organizationId": "organization123",
  "createdAt": "2024-10-01T12:00:00Z",
  "networkBlockAll": false,
  "autoDeleteInterval": 30,
  "domainAllowList": "example.com,*.daytona.io",
  "public": false,
  "errorReason": "The sandbox is not running",
  "runnerId": "runner123",
  "id": "sandbox123",
  "state": "creating",
  "gpuType": "H100",
  "updatedAt": "2024-10-01T12:00:00Z",
  "sandboxClass": "linux-vm",
  "desiredState": "destroyed",
  "networkAllowList": "192.168.1.0/16,10.0.0.0/24",
  "volumes": [
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    },
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    }
  ],
  "cpu": 2,
  "recoverable": true,
  "env": {
    "NODE_ENV": "production"
  },
  "gpu": 0,
  "daemonVersion": "1.0.0",
  "backupCreatedAt": "2024-10-01T12:00:00Z",
  "labels": {
    "daytona.io/public": "true"
  },
  "target": "local",
  "disk": 10,
  "name": "MySandbox",
  "backupState": "None",
  "user": "daytona",
  "autoArchiveInterval": 10080,
  "snapshot": "daytonaio/sandbox:latest"
}
```

<h3 id="delete-sandbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sandbox has been deleted|[Sandbox](#schemasandbox)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Recover sandbox from error state

<a id="opIdrecoverSandbox"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox/string/recover \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /sandbox/{sandboxIdOrName}/recover`

<h3 id="recover-sandbox-from-error-state-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxIdOrName|path|string|true|ID or name of the sandbox|
|skipStart|query|boolean|false|If true, the sandbox is left in STOPPED after recovery instead of being started.|

> Example responses

> 200 Response

```json
{
  "memory": 4,
  "linkedSandboxId": "sandbox123",
  "buildInfo": "",
  "toolboxProxyUrl": "https://proxy.app.daytona.io/toolbox",
  "lastActivityAt": "2024-10-01T12:00:00Z",
  "autoStopInterval": 30,
  "organizationId": "organization123",
  "createdAt": "2024-10-01T12:00:00Z",
  "networkBlockAll": false,
  "autoDeleteInterval": 30,
  "domainAllowList": "example.com,*.daytona.io",
  "public": false,
  "errorReason": "The sandbox is not running",
  "runnerId": "runner123",
  "id": "sandbox123",
  "state": "creating",
  "gpuType": "H100",
  "updatedAt": "2024-10-01T12:00:00Z",
  "sandboxClass": "linux-vm",
  "desiredState": "destroyed",
  "networkAllowList": "192.168.1.0/16,10.0.0.0/24",
  "volumes": [
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    },
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    }
  ],
  "cpu": 2,
  "recoverable": true,
  "env": {
    "NODE_ENV": "production"
  },
  "gpu": 0,
  "daemonVersion": "1.0.0",
  "backupCreatedAt": "2024-10-01T12:00:00Z",
  "labels": {
    "daytona.io/public": "true"
  },
  "target": "local",
  "disk": 10,
  "name": "MySandbox",
  "backupState": "None",
  "user": "daytona",
  "autoArchiveInterval": 10080,
  "snapshot": "daytonaio/sandbox:latest"
}
```

<h3 id="recover-sandbox-from-error-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Recovery initiated|[Sandbox](#schemasandbox)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Start or resume sandbox

<a id="opIdstartSandbox"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox/string/start \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /sandbox/{sandboxIdOrName}/start`

Starts a stopped or archived sandbox, or resumes a paused sandbox. The transition taken depends on the current sandbox state.

<h3 id="start-or-resume-sandbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxIdOrName|path|string|true|ID or name of the sandbox|

> Example responses

> 200 Response

```json
{
  "memory": 4,
  "linkedSandboxId": "sandbox123",
  "buildInfo": "",
  "toolboxProxyUrl": "https://proxy.app.daytona.io/toolbox",
  "lastActivityAt": "2024-10-01T12:00:00Z",
  "autoStopInterval": 30,
  "organizationId": "organization123",
  "createdAt": "2024-10-01T12:00:00Z",
  "networkBlockAll": false,
  "autoDeleteInterval": 30,
  "domainAllowList": "example.com,*.daytona.io",
  "public": false,
  "errorReason": "The sandbox is not running",
  "runnerId": "runner123",
  "id": "sandbox123",
  "state": "creating",
  "gpuType": "H100",
  "updatedAt": "2024-10-01T12:00:00Z",
  "sandboxClass": "linux-vm",
  "desiredState": "destroyed",
  "networkAllowList": "192.168.1.0/16,10.0.0.0/24",
  "volumes": [
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    },
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    }
  ],
  "cpu": 2,
  "recoverable": true,
  "env": {
    "NODE_ENV": "production"
  },
  "gpu": 0,
  "daemonVersion": "1.0.0",
  "backupCreatedAt": "2024-10-01T12:00:00Z",
  "labels": {
    "daytona.io/public": "true"
  },
  "target": "local",
  "disk": 10,
  "name": "MySandbox",
  "backupState": "None",
  "user": "daytona",
  "autoArchiveInterval": 10080,
  "snapshot": "daytonaio/sandbox:latest"
}
```

<h3 id="start-or-resume-sandbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sandbox has been started, is being restored from archived state, or is being resumed from paused|[Sandbox](#schemasandbox)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Stop sandbox

<a id="opIdstopSandbox"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox/string/stop \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /sandbox/{sandboxIdOrName}/stop`

<h3 id="stop-sandbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxIdOrName|path|string|true|ID or name of the sandbox|
|force|query|boolean|false|Force stop the sandbox using SIGKILL instead of SIGTERM|

> Example responses

> 200 Response

```json
{
  "memory": 4,
  "linkedSandboxId": "sandbox123",
  "buildInfo": "",
  "toolboxProxyUrl": "https://proxy.app.daytona.io/toolbox",
  "lastActivityAt": "2024-10-01T12:00:00Z",
  "autoStopInterval": 30,
  "organizationId": "organization123",
  "createdAt": "2024-10-01T12:00:00Z",
  "networkBlockAll": false,
  "autoDeleteInterval": 30,
  "domainAllowList": "example.com,*.daytona.io",
  "public": false,
  "errorReason": "The sandbox is not running",
  "runnerId": "runner123",
  "id": "sandbox123",
  "state": "creating",
  "gpuType": "H100",
  "updatedAt": "2024-10-01T12:00:00Z",
  "sandboxClass": "linux-vm",
  "desiredState": "destroyed",
  "networkAllowList": "192.168.1.0/16,10.0.0.0/24",
  "volumes": [
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    },
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    }
  ],
  "cpu": 2,
  "recoverable": true,
  "env": {
    "NODE_ENV": "production"
  },
  "gpu": 0,
  "daemonVersion": "1.0.0",
  "backupCreatedAt": "2024-10-01T12:00:00Z",
  "labels": {
    "daytona.io/public": "true"
  },
  "target": "local",
  "disk": 10,
  "name": "MySandbox",
  "backupState": "None",
  "user": "daytona",
  "autoArchiveInterval": 10080,
  "snapshot": "daytonaio/sandbox:latest"
}
```

<h3 id="stop-sandbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sandbox has been stopped|[Sandbox](#schemasandbox)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Pause sandbox

<a id="opIdpauseSandbox"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox/string/pause \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /sandbox/{sandboxIdOrName}/pause`

<h3 id="pause-sandbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxIdOrName|path|string|true|ID or name of the sandbox|

> Example responses

> 200 Response

```json
{
  "memory": 4,
  "linkedSandboxId": "sandbox123",
  "buildInfo": "",
  "toolboxProxyUrl": "https://proxy.app.daytona.io/toolbox",
  "lastActivityAt": "2024-10-01T12:00:00Z",
  "autoStopInterval": 30,
  "organizationId": "organization123",
  "createdAt": "2024-10-01T12:00:00Z",
  "networkBlockAll": false,
  "autoDeleteInterval": 30,
  "domainAllowList": "example.com,*.daytona.io",
  "public": false,
  "errorReason": "The sandbox is not running",
  "runnerId": "runner123",
  "id": "sandbox123",
  "state": "creating",
  "gpuType": "H100",
  "updatedAt": "2024-10-01T12:00:00Z",
  "sandboxClass": "linux-vm",
  "desiredState": "destroyed",
  "networkAllowList": "192.168.1.0/16,10.0.0.0/24",
  "volumes": [
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    },
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    }
  ],
  "cpu": 2,
  "recoverable": true,
  "env": {
    "NODE_ENV": "production"
  },
  "gpu": 0,
  "daemonVersion": "1.0.0",
  "backupCreatedAt": "2024-10-01T12:00:00Z",
  "labels": {
    "daytona.io/public": "true"
  },
  "target": "local",
  "disk": 10,
  "name": "MySandbox",
  "backupState": "None",
  "user": "daytona",
  "autoArchiveInterval": 10080,
  "snapshot": "daytonaio/sandbox:latest"
}
```

<h3 id="pause-sandbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sandbox pause has been initiated|[Sandbox](#schemasandbox)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Resize sandbox resources

<a id="opIdresizeSandbox"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox/string/resize \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "disk": 20,
    "memory": 4,
    "cpu": 2
  }'
```

`POST /sandbox/{sandboxIdOrName}/resize`

> Body parameter

```json
{
  "disk": 20,
  "memory": 4,
  "cpu": 2
}
```

<h3 id="resize-sandbox-resources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxIdOrName|path|string|true|ID or name of the sandbox|
|body|body|[ResizeSandbox](#schemaresizesandbox)|true|none|
|» cpu|body|integer|false|CPU cores to allocate to the sandbox (minimum: 1)|
|» memory|body|integer|false|Memory in GB to allocate to the sandbox (minimum: 1)|
|» disk|body|integer|false|Disk space in GB to allocate to the sandbox (can only be increased)|

> Example responses

> 200 Response

```json
{
  "memory": 4,
  "linkedSandboxId": "sandbox123",
  "buildInfo": "",
  "toolboxProxyUrl": "https://proxy.app.daytona.io/toolbox",
  "lastActivityAt": "2024-10-01T12:00:00Z",
  "autoStopInterval": 30,
  "organizationId": "organization123",
  "createdAt": "2024-10-01T12:00:00Z",
  "networkBlockAll": false,
  "autoDeleteInterval": 30,
  "domainAllowList": "example.com,*.daytona.io",
  "public": false,
  "errorReason": "The sandbox is not running",
  "runnerId": "runner123",
  "id": "sandbox123",
  "state": "creating",
  "gpuType": "H100",
  "updatedAt": "2024-10-01T12:00:00Z",
  "sandboxClass": "linux-vm",
  "desiredState": "destroyed",
  "networkAllowList": "192.168.1.0/16,10.0.0.0/24",
  "volumes": [
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    },
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    }
  ],
  "cpu": 2,
  "recoverable": true,
  "env": {
    "NODE_ENV": "production"
  },
  "gpu": 0,
  "daemonVersion": "1.0.0",
  "backupCreatedAt": "2024-10-01T12:00:00Z",
  "labels": {
    "daytona.io/public": "true"
  },
  "target": "local",
  "disk": 10,
  "name": "MySandbox",
  "backupState": "None",
  "user": "daytona",
  "autoArchiveInterval": 10080,
  "snapshot": "daytonaio/sandbox:latest"
}
```

<h3 id="resize-sandbox-resources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sandbox has been resized|[Sandbox](#schemasandbox)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Replace sandbox labels

<a id="opIdreplaceLabels"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox/string/labels \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "labels": {
      "environment": "dev",
      "team": "backend"
    }
  }'
```

`PUT /sandbox/{sandboxIdOrName}/labels`

> Body parameter

```json
{
  "labels": {
    "environment": "dev",
    "team": "backend"
  }
}
```

<h3 id="replace-sandbox-labels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxIdOrName|path|string|true|ID or name of the sandbox|
|body|body|[SandboxLabels](#schemasandboxlabels)|true|none|
|» labels|body|object|true|Key-value pairs of labels|
|» » **additionalProperties**|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "labels": {
    "environment": "dev",
    "team": "backend"
  }
}
```

<h3 id="replace-sandbox-labels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Labels have been successfully replaced|[SandboxLabels](#schemasandboxlabels)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Update sandbox state

<a id="opIdupdateSandboxState"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox/string/state \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "errorReason": "Failed to pull snapshot image",
    "recoverable": true,
    "state": "started"
  }'
```

`PUT /sandbox/{sandboxId}/state`

> Body parameter

```json
{
  "errorReason": "Failed to pull snapshot image",
  "recoverable": true,
  "state": "started"
}
```

<h3 id="update-sandbox-state-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|ID of the sandbox|
|body|body|[UpdateSandboxStateDto](#schemaupdatesandboxstatedto)|true|none|
|» state|body|string|true|The new state for the sandbox|
|» errorReason|body|string|false|Optional error message when reporting an error state|
|» recoverable|body|boolean|false|Whether the sandbox is recoverable|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» state|creating|
|» state|restoring|
|» state|destroyed|
|» state|destroying|
|» state|started|
|» state|stopped|
|» state|starting|
|» state|stopping|
|» state|error|
|» state|build_failed|
|» state|pending_build|
|» state|building_snapshot|
|» state|unknown|
|» state|pulling_snapshot|
|» state|archived|
|» state|archiving|
|» state|resizing|
|» state|snapshotting|
|» state|forking|
|» state|pausing|
|» state|paused|
|» state|resuming|

<h3 id="update-sandbox-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sandbox state has been successfully updated|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Create sandbox backup

<a id="opIdcreateBackup"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox/string/backup \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /sandbox/{sandboxIdOrName}/backup`

<h3 id="create-sandbox-backup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxIdOrName|path|string|true|ID or name of the sandbox|

> Example responses

> 200 Response

```json
{
  "memory": 4,
  "linkedSandboxId": "sandbox123",
  "buildInfo": "",
  "toolboxProxyUrl": "https://proxy.app.daytona.io/toolbox",
  "lastActivityAt": "2024-10-01T12:00:00Z",
  "autoStopInterval": 30,
  "organizationId": "organization123",
  "createdAt": "2024-10-01T12:00:00Z",
  "networkBlockAll": false,
  "autoDeleteInterval": 30,
  "domainAllowList": "example.com,*.daytona.io",
  "public": false,
  "errorReason": "The sandbox is not running",
  "runnerId": "runner123",
  "id": "sandbox123",
  "state": "creating",
  "gpuType": "H100",
  "updatedAt": "2024-10-01T12:00:00Z",
  "sandboxClass": "linux-vm",
  "desiredState": "destroyed",
  "networkAllowList": "192.168.1.0/16,10.0.0.0/24",
  "volumes": [
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    },
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    }
  ],
  "cpu": 2,
  "recoverable": true,
  "env": {
    "NODE_ENV": "production"
  },
  "gpu": 0,
  "daemonVersion": "1.0.0",
  "backupCreatedAt": "2024-10-01T12:00:00Z",
  "labels": {
    "daytona.io/public": "true"
  },
  "target": "local",
  "disk": 10,
  "name": "MySandbox",
  "backupState": "None",
  "user": "daytona",
  "autoArchiveInterval": 10080,
  "snapshot": "daytonaio/sandbox:latest"
}
```

<h3 id="create-sandbox-backup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sandbox backup has been initiated|[Sandbox](#schemasandbox)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Create a snapshot from a sandbox

<a id="opIdcreateSandboxSnapshot"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox/string/snapshot \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "includeMemory": false,
    "name": "my-dev-env-v1"
  }'
```

`POST /sandbox/{sandboxIdOrName}/snapshot`

> Body parameter

```json
{
  "includeMemory": false,
  "name": "my-dev-env-v1"
}
```

<h3 id="create-a-snapshot-from-a-sandbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxIdOrName|path|string|true|none|
|body|body|[CreateSandboxSnapshot](#schemacreatesandboxsnapshot)|true|none|
|» name|body|string|true|Name for the new snapshot|
|» includeMemory|body|boolean|false|Include the VM's memory in the snapshot. VM sandboxes only. When true the sandbox must be STARTED; when false (default) VM sandboxes must be STOPPED. Container sandboxes do not support memory snapshots.|

> Example responses

> 200 Response

```json
{
  "memory": 4,
  "linkedSandboxId": "sandbox123",
  "buildInfo": "",
  "toolboxProxyUrl": "https://proxy.app.daytona.io/toolbox",
  "lastActivityAt": "2024-10-01T12:00:00Z",
  "autoStopInterval": 30,
  "organizationId": "organization123",
  "createdAt": "2024-10-01T12:00:00Z",
  "networkBlockAll": false,
  "autoDeleteInterval": 30,
  "domainAllowList": "example.com,*.daytona.io",
  "public": false,
  "errorReason": "The sandbox is not running",
  "runnerId": "runner123",
  "id": "sandbox123",
  "state": "creating",
  "gpuType": "H100",
  "updatedAt": "2024-10-01T12:00:00Z",
  "sandboxClass": "linux-vm",
  "desiredState": "destroyed",
  "networkAllowList": "192.168.1.0/16,10.0.0.0/24",
  "volumes": [
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    },
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    }
  ],
  "cpu": 2,
  "recoverable": true,
  "env": {
    "NODE_ENV": "production"
  },
  "gpu": 0,
  "daemonVersion": "1.0.0",
  "backupCreatedAt": "2024-10-01T12:00:00Z",
  "labels": {
    "daytona.io/public": "true"
  },
  "target": "local",
  "disk": 10,
  "name": "MySandbox",
  "backupState": "None",
  "user": "daytona",
  "autoArchiveInterval": 10080,
  "snapshot": "daytonaio/sandbox:latest"
}
```

<h3 id="create-a-snapshot-from-a-sandbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Snapshot creation has been initiated|[Sandbox](#schemasandbox)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Fork a sandbox

<a id="opIdforkSandbox"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox/string/fork \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "my-forked-sandbox"
  }'
```

`POST /sandbox/{sandboxIdOrName}/fork`

> Body parameter

```json
{
  "name": "my-forked-sandbox"
}
```

<h3 id="fork-a-sandbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxIdOrName|path|string|true|none|
|body|body|[ForkSandbox](#schemaforksandbox)|true|none|
|» name|body|string|false|The name for the forked sandbox. If not provided, a unique name will be generated.|

> Example responses

> 200 Response

```json
{
  "memory": 4,
  "linkedSandboxId": "sandbox123",
  "buildInfo": "",
  "toolboxProxyUrl": "https://proxy.app.daytona.io/toolbox",
  "lastActivityAt": "2024-10-01T12:00:00Z",
  "autoStopInterval": 30,
  "organizationId": "organization123",
  "createdAt": "2024-10-01T12:00:00Z",
  "networkBlockAll": false,
  "autoDeleteInterval": 30,
  "domainAllowList": "example.com,*.daytona.io",
  "public": false,
  "errorReason": "The sandbox is not running",
  "runnerId": "runner123",
  "id": "sandbox123",
  "state": "creating",
  "gpuType": "H100",
  "updatedAt": "2024-10-01T12:00:00Z",
  "sandboxClass": "linux-vm",
  "desiredState": "destroyed",
  "networkAllowList": "192.168.1.0/16,10.0.0.0/24",
  "volumes": [
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    },
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    }
  ],
  "cpu": 2,
  "recoverable": true,
  "env": {
    "NODE_ENV": "production"
  },
  "gpu": 0,
  "daemonVersion": "1.0.0",
  "backupCreatedAt": "2024-10-01T12:00:00Z",
  "labels": {
    "daytona.io/public": "true"
  },
  "target": "local",
  "disk": 10,
  "name": "MySandbox",
  "backupState": "None",
  "user": "daytona",
  "autoArchiveInterval": 10080,
  "snapshot": "daytonaio/sandbox:latest"
}
```

<h3 id="fork-a-sandbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Fork operation has been initiated|[Sandbox](#schemasandbox)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get sandbox fork children

<a id="opIdgetSandboxForks"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox/string/forks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sandbox/{sandboxIdOrName}/forks`

<h3 id="get-sandbox-fork-children-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxIdOrName|path|string|true|none|
|includeDestroyed|query|boolean|false|none|

> Example responses

> 200 Response

```json
[
  {
    "memory": 4,
    "linkedSandboxId": "sandbox123",
    "buildInfo": "",
    "toolboxProxyUrl": "https://proxy.app.daytona.io/toolbox",
    "lastActivityAt": "2024-10-01T12:00:00Z",
    "autoStopInterval": 30,
    "organizationId": "organization123",
    "createdAt": "2024-10-01T12:00:00Z",
    "networkBlockAll": false,
    "autoDeleteInterval": 30,
    "domainAllowList": "example.com,*.daytona.io",
    "public": false,
    "errorReason": "The sandbox is not running",
    "runnerId": "runner123",
    "id": "sandbox123",
    "state": "creating",
    "gpuType": "H100",
    "updatedAt": "2024-10-01T12:00:00Z",
    "sandboxClass": "linux-vm",
    "desiredState": "destroyed",
    "networkAllowList": "192.168.1.0/16,10.0.0.0/24",
    "volumes": [
      {
        "mountPath": "/data",
        "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "subpath": "users/alice"
      },
      {
        "mountPath": "/data",
        "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "subpath": "users/alice"
      }
    ],
    "cpu": 2,
    "recoverable": true,
    "env": {
      "NODE_ENV": "production"
    },
    "gpu": 0,
    "daemonVersion": "1.0.0",
    "backupCreatedAt": "2024-10-01T12:00:00Z",
    "labels": {
      "daytona.io/public": "true"
    },
    "target": "local",
    "disk": 10,
    "name": "MySandbox",
    "backupState": "None",
    "user": "daytona",
    "autoArchiveInterval": 10080,
    "snapshot": "daytonaio/sandbox:latest"
  }
]
```

<h3 id="get-sandbox-fork-children-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-sandbox-fork-children-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Sandbox](#schemasandbox)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get sandbox fork parent

<a id="opIdgetSandboxParent"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox/string/parent \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sandbox/{sandboxIdOrName}/parent`

<h3 id="get-sandbox-fork-parent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxIdOrName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "memory": 4,
  "linkedSandboxId": "sandbox123",
  "buildInfo": "",
  "toolboxProxyUrl": "https://proxy.app.daytona.io/toolbox",
  "lastActivityAt": "2024-10-01T12:00:00Z",
  "autoStopInterval": 30,
  "organizationId": "organization123",
  "createdAt": "2024-10-01T12:00:00Z",
  "networkBlockAll": false,
  "autoDeleteInterval": 30,
  "domainAllowList": "example.com,*.daytona.io",
  "public": false,
  "errorReason": "The sandbox is not running",
  "runnerId": "runner123",
  "id": "sandbox123",
  "state": "creating",
  "gpuType": "H100",
  "updatedAt": "2024-10-01T12:00:00Z",
  "sandboxClass": "linux-vm",
  "desiredState": "destroyed",
  "networkAllowList": "192.168.1.0/16,10.0.0.0/24",
  "volumes": [
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    },
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    }
  ],
  "cpu": 2,
  "recoverable": true,
  "env": {
    "NODE_ENV": "production"
  },
  "gpu": 0,
  "daemonVersion": "1.0.0",
  "backupCreatedAt": "2024-10-01T12:00:00Z",
  "labels": {
    "daytona.io/public": "true"
  },
  "target": "local",
  "disk": 10,
  "name": "MySandbox",
  "backupState": "None",
  "user": "daytona",
  "autoArchiveInterval": 10080,
  "snapshot": "daytonaio/sandbox:latest"
}
```

<h3 id="get-sandbox-fork-parent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Sandbox](#schemasandbox)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get sandbox fork ancestor chain

<a id="opIdgetSandboxAncestors"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox/string/ancestors \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sandbox/{sandboxIdOrName}/ancestors`

<h3 id="get-sandbox-fork-ancestor-chain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxIdOrName|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "memory": 4,
    "linkedSandboxId": "sandbox123",
    "buildInfo": "",
    "toolboxProxyUrl": "https://proxy.app.daytona.io/toolbox",
    "lastActivityAt": "2024-10-01T12:00:00Z",
    "autoStopInterval": 30,
    "organizationId": "organization123",
    "createdAt": "2024-10-01T12:00:00Z",
    "networkBlockAll": false,
    "autoDeleteInterval": 30,
    "domainAllowList": "example.com,*.daytona.io",
    "public": false,
    "errorReason": "The sandbox is not running",
    "runnerId": "runner123",
    "id": "sandbox123",
    "state": "creating",
    "gpuType": "H100",
    "updatedAt": "2024-10-01T12:00:00Z",
    "sandboxClass": "linux-vm",
    "desiredState": "destroyed",
    "networkAllowList": "192.168.1.0/16,10.0.0.0/24",
    "volumes": [
      {
        "mountPath": "/data",
        "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "subpath": "users/alice"
      },
      {
        "mountPath": "/data",
        "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "subpath": "users/alice"
      }
    ],
    "cpu": 2,
    "recoverable": true,
    "env": {
      "NODE_ENV": "production"
    },
    "gpu": 0,
    "daemonVersion": "1.0.0",
    "backupCreatedAt": "2024-10-01T12:00:00Z",
    "labels": {
      "daytona.io/public": "true"
    },
    "target": "local",
    "disk": 10,
    "name": "MySandbox",
    "backupState": "None",
    "user": "daytona",
    "autoArchiveInterval": 10080,
    "snapshot": "daytonaio/sandbox:latest"
  }
]
```

<h3 id="get-sandbox-fork-ancestor-chain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-sandbox-fork-ancestor-chain-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Sandbox](#schemasandbox)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Update public status

<a id="opIdupdatePublicStatus"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox/string/public/true \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /sandbox/{sandboxIdOrName}/public/{isPublic}`

<h3 id="update-public-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxIdOrName|path|string|true|ID or name of the sandbox|
|isPublic|path|boolean|true|Public status to set|

> Example responses

> 200 Response

```json
{
  "memory": 4,
  "linkedSandboxId": "sandbox123",
  "buildInfo": "",
  "toolboxProxyUrl": "https://proxy.app.daytona.io/toolbox",
  "lastActivityAt": "2024-10-01T12:00:00Z",
  "autoStopInterval": 30,
  "organizationId": "organization123",
  "createdAt": "2024-10-01T12:00:00Z",
  "networkBlockAll": false,
  "autoDeleteInterval": 30,
  "domainAllowList": "example.com,*.daytona.io",
  "public": false,
  "errorReason": "The sandbox is not running",
  "runnerId": "runner123",
  "id": "sandbox123",
  "state": "creating",
  "gpuType": "H100",
  "updatedAt": "2024-10-01T12:00:00Z",
  "sandboxClass": "linux-vm",
  "desiredState": "destroyed",
  "networkAllowList": "192.168.1.0/16,10.0.0.0/24",
  "volumes": [
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    },
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    }
  ],
  "cpu": 2,
  "recoverable": true,
  "env": {
    "NODE_ENV": "production"
  },
  "gpu": 0,
  "daemonVersion": "1.0.0",
  "backupCreatedAt": "2024-10-01T12:00:00Z",
  "labels": {
    "daytona.io/public": "true"
  },
  "target": "local",
  "disk": 10,
  "name": "MySandbox",
  "backupState": "None",
  "user": "daytona",
  "autoArchiveInterval": 10080,
  "snapshot": "daytonaio/sandbox:latest"
}
```

<h3 id="update-public-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Public status has been successfully updated|[Sandbox](#schemasandbox)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Update sandbox last activity

<a id="opIdupdateLastActivity"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox/string/last-activity \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /sandbox/{sandboxId}/last-activity`

<h3 id="update-sandbox-last-activity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|ID of the sandbox|

<h3 id="update-sandbox-last-activity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Last activity has been updated|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Set sandbox auto-stop interval

<a id="opIdsetAutostopInterval"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox/string/autostop/0 \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /sandbox/{sandboxIdOrName}/autostop/{interval}`

<h3 id="set-sandbox-auto-stop-interval-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxIdOrName|path|string|true|ID or name of the sandbox|
|interval|path|number|true|Auto-stop interval in minutes (0 to disable)|

> Example responses

> 200 Response

```json
{
  "memory": 4,
  "linkedSandboxId": "sandbox123",
  "buildInfo": "",
  "toolboxProxyUrl": "https://proxy.app.daytona.io/toolbox",
  "lastActivityAt": "2024-10-01T12:00:00Z",
  "autoStopInterval": 30,
  "organizationId": "organization123",
  "createdAt": "2024-10-01T12:00:00Z",
  "networkBlockAll": false,
  "autoDeleteInterval": 30,
  "domainAllowList": "example.com,*.daytona.io",
  "public": false,
  "errorReason": "The sandbox is not running",
  "runnerId": "runner123",
  "id": "sandbox123",
  "state": "creating",
  "gpuType": "H100",
  "updatedAt": "2024-10-01T12:00:00Z",
  "sandboxClass": "linux-vm",
  "desiredState": "destroyed",
  "networkAllowList": "192.168.1.0/16,10.0.0.0/24",
  "volumes": [
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    },
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    }
  ],
  "cpu": 2,
  "recoverable": true,
  "env": {
    "NODE_ENV": "production"
  },
  "gpu": 0,
  "daemonVersion": "1.0.0",
  "backupCreatedAt": "2024-10-01T12:00:00Z",
  "labels": {
    "daytona.io/public": "true"
  },
  "target": "local",
  "disk": 10,
  "name": "MySandbox",
  "backupState": "None",
  "user": "daytona",
  "autoArchiveInterval": 10080,
  "snapshot": "daytonaio/sandbox:latest"
}
```

<h3 id="set-sandbox-auto-stop-interval-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Auto-stop interval has been set|[Sandbox](#schemasandbox)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Set sandbox auto-archive interval

<a id="opIdsetAutoArchiveInterval"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox/string/autoarchive/0 \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /sandbox/{sandboxIdOrName}/autoarchive/{interval}`

<h3 id="set-sandbox-auto-archive-interval-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxIdOrName|path|string|true|ID or name of the sandbox|
|interval|path|number|true|Auto-archive interval in minutes (0 means the maximum interval will be used)|

> Example responses

> 200 Response

```json
{
  "memory": 4,
  "linkedSandboxId": "sandbox123",
  "buildInfo": "",
  "toolboxProxyUrl": "https://proxy.app.daytona.io/toolbox",
  "lastActivityAt": "2024-10-01T12:00:00Z",
  "autoStopInterval": 30,
  "organizationId": "organization123",
  "createdAt": "2024-10-01T12:00:00Z",
  "networkBlockAll": false,
  "autoDeleteInterval": 30,
  "domainAllowList": "example.com,*.daytona.io",
  "public": false,
  "errorReason": "The sandbox is not running",
  "runnerId": "runner123",
  "id": "sandbox123",
  "state": "creating",
  "gpuType": "H100",
  "updatedAt": "2024-10-01T12:00:00Z",
  "sandboxClass": "linux-vm",
  "desiredState": "destroyed",
  "networkAllowList": "192.168.1.0/16,10.0.0.0/24",
  "volumes": [
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    },
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    }
  ],
  "cpu": 2,
  "recoverable": true,
  "env": {
    "NODE_ENV": "production"
  },
  "gpu": 0,
  "daemonVersion": "1.0.0",
  "backupCreatedAt": "2024-10-01T12:00:00Z",
  "labels": {
    "daytona.io/public": "true"
  },
  "target": "local",
  "disk": 10,
  "name": "MySandbox",
  "backupState": "None",
  "user": "daytona",
  "autoArchiveInterval": 10080,
  "snapshot": "daytonaio/sandbox:latest"
}
```

<h3 id="set-sandbox-auto-archive-interval-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Auto-archive interval has been set|[Sandbox](#schemasandbox)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Set sandbox auto-delete interval

<a id="opIdsetAutoDeleteInterval"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox/string/autodelete/0 \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /sandbox/{sandboxIdOrName}/autodelete/{interval}`

<h3 id="set-sandbox-auto-delete-interval-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxIdOrName|path|string|true|ID or name of the sandbox|
|interval|path|number|true|Auto-delete interval in minutes (negative value means disabled, 0 means delete immediately upon stopping)|

> Example responses

> 200 Response

```json
{
  "memory": 4,
  "linkedSandboxId": "sandbox123",
  "buildInfo": "",
  "toolboxProxyUrl": "https://proxy.app.daytona.io/toolbox",
  "lastActivityAt": "2024-10-01T12:00:00Z",
  "autoStopInterval": 30,
  "organizationId": "organization123",
  "createdAt": "2024-10-01T12:00:00Z",
  "networkBlockAll": false,
  "autoDeleteInterval": 30,
  "domainAllowList": "example.com,*.daytona.io",
  "public": false,
  "errorReason": "The sandbox is not running",
  "runnerId": "runner123",
  "id": "sandbox123",
  "state": "creating",
  "gpuType": "H100",
  "updatedAt": "2024-10-01T12:00:00Z",
  "sandboxClass": "linux-vm",
  "desiredState": "destroyed",
  "networkAllowList": "192.168.1.0/16,10.0.0.0/24",
  "volumes": [
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    },
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    }
  ],
  "cpu": 2,
  "recoverable": true,
  "env": {
    "NODE_ENV": "production"
  },
  "gpu": 0,
  "daemonVersion": "1.0.0",
  "backupCreatedAt": "2024-10-01T12:00:00Z",
  "labels": {
    "daytona.io/public": "true"
  },
  "target": "local",
  "disk": 10,
  "name": "MySandbox",
  "backupState": "None",
  "user": "daytona",
  "autoArchiveInterval": 10080,
  "snapshot": "daytonaio/sandbox:latest"
}
```

<h3 id="set-sandbox-auto-delete-interval-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Auto-delete interval has been set|[Sandbox](#schemasandbox)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Update sandbox network settings

<a id="opIdupdateNetworkSettings"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox/string/network-settings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "networkBlockAll": false,
    "domainAllowList": "example.com,*.daytona.io",
    "networkAllowList": "192.168.1.0/16,10.0.0.0/24"
  }'
```

`POST /sandbox/{sandboxIdOrName}/network-settings`

Changes outbound network policy on the runner for a running sandbox (for example block all traffic, restore access, or set a CIDR allow list).

> Body parameter

```json
{
  "networkBlockAll": false,
  "domainAllowList": "example.com,*.daytona.io",
  "networkAllowList": "192.168.1.0/16,10.0.0.0/24"
}
```

<h3 id="update-sandbox-network-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxIdOrName|path|string|true|ID or name of the sandbox|
|body|body|[UpdateSandboxNetworkSettings](#schemaupdatesandboxnetworksettings)|true|none|
|» networkBlockAll|body|boolean|false|Whether to block all network access for the sandbox|
|» networkAllowList|body|string|false|Comma-separated list of allowed CIDR network addresses for the sandbox|
|» domainAllowList|body|string|false|Comma-separated list of allowed domains for the sandbox|

> Example responses

> 200 Response

```json
{
  "memory": 4,
  "linkedSandboxId": "sandbox123",
  "buildInfo": "",
  "toolboxProxyUrl": "https://proxy.app.daytona.io/toolbox",
  "lastActivityAt": "2024-10-01T12:00:00Z",
  "autoStopInterval": 30,
  "organizationId": "organization123",
  "createdAt": "2024-10-01T12:00:00Z",
  "networkBlockAll": false,
  "autoDeleteInterval": 30,
  "domainAllowList": "example.com,*.daytona.io",
  "public": false,
  "errorReason": "The sandbox is not running",
  "runnerId": "runner123",
  "id": "sandbox123",
  "state": "creating",
  "gpuType": "H100",
  "updatedAt": "2024-10-01T12:00:00Z",
  "sandboxClass": "linux-vm",
  "desiredState": "destroyed",
  "networkAllowList": "192.168.1.0/16,10.0.0.0/24",
  "volumes": [
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    },
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    }
  ],
  "cpu": 2,
  "recoverable": true,
  "env": {
    "NODE_ENV": "production"
  },
  "gpu": 0,
  "daemonVersion": "1.0.0",
  "backupCreatedAt": "2024-10-01T12:00:00Z",
  "labels": {
    "daytona.io/public": "true"
  },
  "target": "local",
  "disk": 10,
  "name": "MySandbox",
  "backupState": "None",
  "user": "daytona",
  "autoArchiveInterval": 10080,
  "snapshot": "daytonaio/sandbox:latest"
}
```

<h3 id="update-sandbox-network-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Network settings have been updated|[Sandbox](#schemasandbox)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Archive sandbox

<a id="opIdarchiveSandbox"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox/string/archive \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /sandbox/{sandboxIdOrName}/archive`

<h3 id="archive-sandbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxIdOrName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "memory": 4,
  "linkedSandboxId": "sandbox123",
  "buildInfo": "",
  "toolboxProxyUrl": "https://proxy.app.daytona.io/toolbox",
  "lastActivityAt": "2024-10-01T12:00:00Z",
  "autoStopInterval": 30,
  "organizationId": "organization123",
  "createdAt": "2024-10-01T12:00:00Z",
  "networkBlockAll": false,
  "autoDeleteInterval": 30,
  "domainAllowList": "example.com,*.daytona.io",
  "public": false,
  "errorReason": "The sandbox is not running",
  "runnerId": "runner123",
  "id": "sandbox123",
  "state": "creating",
  "gpuType": "H100",
  "updatedAt": "2024-10-01T12:00:00Z",
  "sandboxClass": "linux-vm",
  "desiredState": "destroyed",
  "networkAllowList": "192.168.1.0/16,10.0.0.0/24",
  "volumes": [
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    },
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    }
  ],
  "cpu": 2,
  "recoverable": true,
  "env": {
    "NODE_ENV": "production"
  },
  "gpu": 0,
  "daemonVersion": "1.0.0",
  "backupCreatedAt": "2024-10-01T12:00:00Z",
  "labels": {
    "daytona.io/public": "true"
  },
  "target": "local",
  "disk": 10,
  "name": "MySandbox",
  "backupState": "None",
  "user": "daytona",
  "autoArchiveInterval": 10080,
  "snapshot": "daytonaio/sandbox:latest"
}
```

<h3 id="archive-sandbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sandbox has been archived|[Sandbox](#schemasandbox)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get preview URL for a sandbox port

<a id="opIdgetPortPreviewUrl"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox/string/ports/0/preview-url \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sandbox/{sandboxIdOrName}/ports/{port}/preview-url`

<h3 id="get-preview-url-for-a-sandbox-port-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxIdOrName|path|string|true|ID or name of the sandbox|
|port|path|number|true|Port number to get preview URL for|

> Example responses

> 200 Response

```json
{
  "sandboxId": "123456",
  "url": "https://{port}-{sandboxId}.{proxyDomain}",
  "token": "ul67qtv-jl6wb9z5o3eii-ljqt9qed6l"
}
```

<h3 id="get-preview-url-for-a-sandbox-port-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Preview URL for the specified port|[PortPreviewUrl](#schemaportpreviewurl)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get signed preview URL for a sandbox port

<a id="opIdgetSignedPortPreviewUrl"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox/string/ports/0/signed-preview-url \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sandbox/{sandboxIdOrName}/ports/{port}/signed-preview-url`

<h3 id="get-signed-preview-url-for-a-sandbox-port-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxIdOrName|path|string|true|ID or name of the sandbox|
|port|path|integer|true|Port number to get signed preview URL for|
|expiresInSeconds|query|integer|false|Expiration time in seconds (default: 60 seconds)|

> Example responses

> 200 Response

```json
{
  "port": 3000,
  "sandboxId": "123456",
  "url": "https://{port}-{token}.{proxyDomain}",
  "token": "jl6wb9z5o3eii"
}
```

<h3 id="get-signed-preview-url-for-a-sandbox-port-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Signed preview URL for the specified port|[SignedPortPreviewUrl](#schemasignedportpreviewurl)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Expire signed preview URL for a sandbox port

<a id="opIdexpireSignedPortPreviewUrl"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox/string/ports/0/signed-preview-url/string/expire \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /sandbox/{sandboxIdOrName}/ports/{port}/signed-preview-url/{token}/expire`

<h3 id="expire-signed-preview-url-for-a-sandbox-port-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxIdOrName|path|string|true|ID or name of the sandbox|
|port|path|integer|true|Port number to expire signed preview URL for|
|token|path|string|true|Token to expire signed preview URL for|

<h3 id="expire-signed-preview-url-for-a-sandbox-port-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Signed preview URL has been expired|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get build logs

<a id="opIdgetBuildLogs"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox/string/build-logs \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sandbox/{sandboxIdOrName}/build-logs`

<aside class="warning">
This operation is deprecated
</aside>

This endpoint is deprecated. Use `getBuildLogsUrl` instead.

<h3 id="get-build-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxIdOrName|path|string|true|ID or name of the sandbox|
|follow|query|boolean|false|Whether to follow the logs stream|

<h3 id="get-build-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Build logs stream|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get build logs URL

<a id="opIdgetBuildLogsUrl"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox/string/build-logs-url \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sandbox/{sandboxIdOrName}/build-logs-url`

<h3 id="get-build-logs-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxIdOrName|path|string|true|ID or name of the sandbox|

> Example responses

> 200 Response

```json
{
  "url": "url"
}
```

<h3 id="get-build-logs-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Build logs URL|[Url](#schemaurl)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Create SSH access for sandbox

<a id="opIdcreateSshAccess"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox/string/ssh-access \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /sandbox/{sandboxIdOrName}/ssh-access`

<h3 id="create-ssh-access-for-sandbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxIdOrName|path|string|true|ID or name of the sandbox|
|expiresInMinutes|query|number|false|Expiration time in minutes (default: 60)|

> Example responses

> 200 Response

```json
{
  "createdAt": "2025-01-01T11:00:00Z",
  "sshCommand": "ssh -p 2222 token@localhost",
  "sandboxId": "123e4567-e89b-12d3-a456-426614174000",
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "expiresAt": "2025-01-01T12:00:00Z",
  "token": "abc123def456ghi789jkl012mno345pqr678stu901vwx234yz",
  "updatedAt": "2025-01-01T11:00:00Z"
}
```

<h3 id="create-ssh-access-for-sandbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|SSH access has been created|[SshAccessDto](#schemasshaccessdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Revoke SSH access for sandbox

<a id="opIdrevokeSshAccess"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox/string/ssh-access \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /sandbox/{sandboxIdOrName}/ssh-access`

<h3 id="revoke-ssh-access-for-sandbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxIdOrName|path|string|true|ID or name of the sandbox|
|token|query|string|false|SSH access token to revoke. If not provided, all SSH access for the sandbox will be revoked.|

> Example responses

> 200 Response

```json
{
  "memory": 4,
  "linkedSandboxId": "sandbox123",
  "buildInfo": "",
  "toolboxProxyUrl": "https://proxy.app.daytona.io/toolbox",
  "lastActivityAt": "2024-10-01T12:00:00Z",
  "autoStopInterval": 30,
  "organizationId": "organization123",
  "createdAt": "2024-10-01T12:00:00Z",
  "networkBlockAll": false,
  "autoDeleteInterval": 30,
  "domainAllowList": "example.com,*.daytona.io",
  "public": false,
  "errorReason": "The sandbox is not running",
  "runnerId": "runner123",
  "id": "sandbox123",
  "state": "creating",
  "gpuType": "H100",
  "updatedAt": "2024-10-01T12:00:00Z",
  "sandboxClass": "linux-vm",
  "desiredState": "destroyed",
  "networkAllowList": "192.168.1.0/16,10.0.0.0/24",
  "volumes": [
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    },
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    }
  ],
  "cpu": 2,
  "recoverable": true,
  "env": {
    "NODE_ENV": "production"
  },
  "gpu": 0,
  "daemonVersion": "1.0.0",
  "backupCreatedAt": "2024-10-01T12:00:00Z",
  "labels": {
    "daytona.io/public": "true"
  },
  "target": "local",
  "disk": 10,
  "name": "MySandbox",
  "backupState": "None",
  "user": "daytona",
  "autoArchiveInterval": 10080,
  "snapshot": "daytonaio/sandbox:latest"
}
```

<h3 id="revoke-ssh-access-for-sandbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|SSH access has been revoked|[Sandbox](#schemasandbox)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Validate SSH access for sandbox

<a id="opIdvalidateSshAccess"></a>

> Code samples

```bash
curl 'http://localhost:3000/sandbox/ssh-access/validate?token=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sandbox/ssh-access/validate`

<h3 id="validate-ssh-access-for-sandbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|token|query|string|true|SSH access token to validate|

> Example responses

> 200 Response

```json
{
  "valid": true,
  "sandboxId": "123e4567-e89b-12d3-a456-426614174000"
}
```

<h3 id="validate-ssh-access-for-sandbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|SSH access validation result|[SshAccessValidationDto](#schemasshaccessvalidationdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get toolbox proxy URL for a sandbox

<a id="opIdgetToolboxProxyUrl"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox/string/toolbox-proxy-url \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sandbox/{sandboxId}/toolbox-proxy-url`

<h3 id="get-toolbox-proxy-url-for-a-sandbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|ID of the sandbox|

> Example responses

> 200 Response

```json
{
  "url": "https://proxy.app.daytona.io/toolbox"
}
```

<h3 id="get-toolbox-proxy-url-for-a-sandbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Toolbox proxy URL for the specified sandbox|[ToolboxProxyUrl](#schematoolboxproxyurl)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get organization by sandbox ID

<a id="opIdgetOrganizationBySandboxId"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox/string/organization \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sandbox/{sandboxId}/organization`

<h3 id="get-organization-by-sandbox-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|ID of the sandbox|

> Example responses

> 200 Response

```json
{
  "sandboxCreateRateLimit": 7.061401241503109,
  "sandboxLifecycleRateLimitTtlSeconds": 4.145608029883936,
  "createdAt": "2000-01-23T04:56:07.000+00:00",
  "sandboxLimitedNetworkEgress": true,
  "suspendedUntil": "2000-01-23T04:56:07.000+00:00",
  "snapshotDeactivationTimeoutMinutes": 5.637376656633329,
  "otelConfig": "",
  "authenticatedRateLimitTtlSeconds": 3.616076749251911,
  "id": "id",
  "experimentalConfig": "{}",
  "updatedAt": "2000-01-23T04:56:07.000+00:00",
  "defaultRegionId": "defaultRegionId",
  "sandboxCreateRateLimitTtlSeconds": 2.027123023002322,
  "suspensionReason": "suspensionReason",
  "sandboxLifecycleRateLimit": 9.301444243932576,
  "suspendedAt": "2000-01-23T04:56:07.000+00:00",
  "personal": true,
  "suspensionCleanupGracePeriodHours": 0.8008281904610115,
  "authenticatedRateLimit": 2.3021358869347655,
  "suspended": true,
  "maxCpuPerSandbox": 6.027456183070403,
  "maxDiskPerSandbox": 5.962133916683182,
  "createdBy": "createdBy",
  "name": "name",
  "maxMemoryPerSandbox": 1.4658129805029452
}
```

<h3 id="get-organization-by-sandbox-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Organization|[Organization](#schemaorganization)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get region quota by sandbox ID

<a id="opIdgetRegionQuotaBySandboxId"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox/string/region-quota \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sandbox/{sandboxId}/region-quota`

<h3 id="get-region-quota-by-sandbox-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|ID of the sandbox|

> Example responses

> 200 Response

```json
{
  "totalCpuQuota": 0.8008281904610115,
  "allowedGpuTypes": [
    "H100",
    "H100"
  ],
  "maxDiskPerGpuSandbox": 4.145608029883936,
  "totalGpuQuota": 5.962133916683182,
  "maxCpuPerGpuSandbox": 3.616076749251911,
  "organizationId": "organizationId",
  "maxCpuPerSandbox": 5.637376656633329,
  "maxDiskPerSandbox": 7.061401241503109,
  "maxDiskPerNonEphemeralSandbox": 9.301444243932576,
  "regionId": "regionId",
  "maxMemoryPerSandbox": 2.3021358869347655,
  "totalMemoryQuota": 6.027456183070403,
  "totalDiskQuota": 1.4658129805029452,
  "sandboxClass": "",
  "maxMemoryPerGpuSandbox": 2.027123023002322
}
```

<h3 id="get-region-quota-by-sandbox-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Region quota|[RegionQuota](#schemaregionquota)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get sandbox logs

<a id="opIdgetSandboxLogs"></a>

> Code samples

```bash
curl 'http://localhost:3000/sandbox/string/telemetry/logs?from=1970-01-01T00%3A00%3A00Z&to=1970-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sandbox/{sandboxId}/telemetry/logs`

Retrieve OTEL logs for a sandbox within a time range

<h3 id="get-sandbox-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|ID of the sandbox|
|from|query|string(date-time)|true|Start of time range (ISO 8601)|
|to|query|string(date-time)|true|End of time range (ISO 8601)|
|page|query|number|false|Page number (1-indexed)|
|limit|query|number|false|Number of items per page|
|severities|query|[string]|false|Filter by severity levels (DEBUG, INFO, WARN, ERROR)|
|search|query|string|false|Search in log body|

> Example responses

> 200 Response

```json
{
  "total": 6.027456183070403,
  "totalPages": 5.962133916683182,
  "page": 1.4658129805029452,
  "items": [
    {
      "traceId": "traceId",
      "spanId": "spanId",
      "severityText": "severityText",
      "severityNumber": 0.8008281904610115,
      "logAttributes": {
        "key": "logAttributes"
      },
      "body": "body",
      "serviceName": "serviceName",
      "resourceAttributes": {
        "key": "resourceAttributes"
      },
      "timestamp": "timestamp"
    },
    {
      "traceId": "traceId",
      "spanId": "spanId",
      "severityText": "severityText",
      "severityNumber": 0.8008281904610115,
      "logAttributes": {
        "key": "logAttributes"
      },
      "body": "body",
      "serviceName": "serviceName",
      "resourceAttributes": {
        "key": "resourceAttributes"
      },
      "timestamp": "timestamp"
    }
  ]
}
```

<h3 id="get-sandbox-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Paginated list of log entries|[PaginatedLogs](#schemapaginatedlogs)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get sandbox traces

<a id="opIdgetSandboxTraces"></a>

> Code samples

```bash
curl 'http://localhost:3000/sandbox/string/telemetry/traces?from=1970-01-01T00%3A00%3A00Z&to=1970-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sandbox/{sandboxId}/telemetry/traces`

Retrieve OTEL traces for a sandbox within a time range

<h3 id="get-sandbox-traces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|ID of the sandbox|
|from|query|string(date-time)|true|Start of time range (ISO 8601)|
|to|query|string(date-time)|true|End of time range (ISO 8601)|
|page|query|number|false|Page number (1-indexed)|
|limit|query|number|false|Number of items per page|

> Example responses

> 200 Response

```json
{
  "total": 1.4658129805029452,
  "totalPages": 5.637376656633329,
  "page": 5.962133916683182,
  "items": [
    {
      "traceId": "traceId",
      "spanCount": 6.027456183070403,
      "rootSpanName": "rootSpanName",
      "startTime": "startTime",
      "endTime": "endTime",
      "durationMs": 0.8008281904610115,
      "statusCode": "statusCode"
    },
    {
      "traceId": "traceId",
      "spanCount": 6.027456183070403,
      "rootSpanName": "rootSpanName",
      "startTime": "startTime",
      "endTime": "endTime",
      "durationMs": 0.8008281904610115,
      "statusCode": "statusCode"
    }
  ]
}
```

<h3 id="get-sandbox-traces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Paginated list of trace summaries|[PaginatedTraces](#schemapaginatedtraces)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get trace spans

<a id="opIdgetSandboxTraceSpans"></a>

> Code samples

```bash
curl http://localhost:3000/sandbox/string/telemetry/traces/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sandbox/{sandboxId}/telemetry/traces/{traceId}`

Retrieve all spans for a specific trace

<h3 id="get-trace-spans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|ID of the sandbox|
|traceId|path|string|true|ID of the trace|

> Example responses

> 200 Response

```json
[
  {
    "traceId": "traceId",
    "spanId": "spanId",
    "spanAttributes": {
      "key": "spanAttributes"
    },
    "parentSpanId": "parentSpanId",
    "durationNs": 0.8008281904610115,
    "statusMessage": "statusMessage",
    "spanName": "spanName",
    "timestamp": "timestamp",
    "statusCode": "statusCode"
  }
]
```

<h3 id="get-trace-spans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of spans in the trace|Inline|

<h3 id="get-trace-spans-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TraceSpan](#schematracespan)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get sandbox metrics

<a id="opIdgetSandboxMetrics"></a>

> Code samples

```bash
curl 'http://localhost:3000/sandbox/string/telemetry/metrics?from=1970-01-01T00%3A00%3A00Z&to=1970-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sandbox/{sandboxId}/telemetry/metrics`

Retrieve OTEL metrics for a sandbox within a time range

<h3 id="get-sandbox-metrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|ID of the sandbox|
|from|query|string(date-time)|true|Start of time range (ISO 8601)|
|to|query|string(date-time)|true|End of time range (ISO 8601)|
|metricNames|query|[string]|false|Filter by metric names|

> Example responses

> 200 Response

```json
{
  "series": [
    {
      "metricName": "metricName",
      "dataPoints": [
        {
          "value": 0.8008281904610115,
          "timestamp": "timestamp"
        },
        {
          "value": 0.8008281904610115,
          "timestamp": "timestamp"
        }
      ]
    },
    {
      "metricName": "metricName",
      "dataPoints": [
        {
          "value": 0.8008281904610115,
          "timestamp": "timestamp"
        },
        {
          "value": 0.8008281904610115,
          "timestamp": "timestamp"
        }
      ]
    }
  ]
}
```

<h3 id="get-sandbox-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Metrics time series data|[MetricsResponse](#schemametricsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

<h1 id="daytona-runners">runners</h1>

## List all runners

<a id="opIdlistRunners"></a>

> Code samples

```bash
curl http://localhost:3000/runners \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /runners`

<h3 id="list-all-runners-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|regionId|query|string|false|Filter runners by region ID|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|

> Example responses

> 200 Response

```json
[
  {
    "currentStartedSandboxes": 5,
    "appVersion": "v0.0.0-dev",
    "memory": 16,
    "currentMemoryUsagePercentage": 68.2,
    "availabilityScore": 85,
    "currentDiskUsagePercentage": 33.8,
    "currentCpuUsagePercentage": 45.6,
    "createdAt": "2023-10-01T12:00:00Z",
    "apiVersion": "0",
    "apiUrl": "https://api.runner1.example.com",
    "id": "runner123",
    "state": "initializing",
    "unschedulable": false,
    "currentAllocatedDiskGiB": 50000,
    "currentAllocatedMemoryGiB": 8000,
    "gpuType": "gpuType",
    "sandboxClass": "linux-vm",
    "currentAllocatedCpu": 4000,
    "updatedAt": "2023-10-01T12:00:00Z",
    "proxyUrl": "https://proxy.runner1.example.com",
    "cpu": 8,
    "gpu": 1,
    "currentSnapshotCount": 12,
    "version": "0",
    "tags": [
      "gpu",
      "us-east"
    ],
    "disk": 100,
    "domain": "runner1.example.com",
    "name": "runner1",
    "runnerClass": "container",
    "region": "us",
    "lastChecked": "2024-10-01T12:00:00Z"
  }
]
```

<h3 id="list-all-runners-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="list-all-runners-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Runner](#schemarunner)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Create runner

<a id="opIdcreateRunner"></a>

> Code samples

```bash
curl http://localhost:3000/runners \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "regionId": "regionId",
    "name": "name",
    "tags": [
      "gpu",
      "us-east"
    ]
  }'
```

`POST /runners`

> Body parameter

```json
{
  "regionId": "regionId",
  "name": "name",
  "tags": [
    "gpu",
    "us-east"
  ]
}
```

<h3 id="create-runner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|body|body|[CreateRunner](#schemacreaterunner)|true|none|
|» regionId|body|string|true|none|
|» name|body|string|true|none|
|» tags|body|[string]|false|Tags to associate with the runner|

> Example responses

> 201 Response

```json
{
  "apiKey": "dtn_1234567890",
  "id": "runner123"
}
```

<h3 id="create-runner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[CreateRunnerResponse](#schemacreaterunnerresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get info for authenticated runner

<a id="opIdgetInfoForAuthenticatedRunner"></a>

> Code samples

```bash
curl http://localhost:3000/runners/me \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /runners/me`

> Example responses

> 200 Response

```json
{
  "currentStartedSandboxes": 5,
  "appVersion": "v0.0.0-dev",
  "memory": 16,
  "currentMemoryUsagePercentage": 68.2,
  "apiKey": "dtn_1234567890",
  "availabilityScore": 85,
  "currentDiskUsagePercentage": 33.8,
  "currentCpuUsagePercentage": 45.6,
  "createdAt": "2023-10-01T12:00:00Z",
  "apiVersion": "0",
  "apiUrl": "https://api.runner1.example.com",
  "regionType": "shared",
  "id": "runner123",
  "state": "initializing",
  "unschedulable": false,
  "currentAllocatedDiskGiB": 50000,
  "currentAllocatedMemoryGiB": 8000,
  "gpuType": "gpuType",
  "sandboxClass": "linux-vm",
  "currentAllocatedCpu": 4000,
  "updatedAt": "2023-10-01T12:00:00Z",
  "proxyUrl": "https://proxy.runner1.example.com",
  "cpu": 8,
  "gpu": 1,
  "currentSnapshotCount": 12,
  "version": "0",
  "tags": [
    "gpu",
    "us-east"
  ],
  "disk": 100,
  "domain": "runner1.example.com",
  "name": "runner1",
  "runnerClass": "container",
  "region": "us",
  "lastChecked": "2024-10-01T12:00:00Z"
}
```

<h3 id="get-info-for-authenticated-runner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Runner info|[RunnerFull](#schemarunnerfull)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get runner by sandbox ID

<a id="opIdgetRunnerBySandboxId"></a>

> Code samples

```bash
curl http://localhost:3000/runners/by-sandbox/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /runners/by-sandbox/{sandboxId}`

<h3 id="get-runner-by-sandbox-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sandboxId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "currentStartedSandboxes": 5,
  "appVersion": "v0.0.0-dev",
  "memory": 16,
  "currentMemoryUsagePercentage": 68.2,
  "apiKey": "dtn_1234567890",
  "availabilityScore": 85,
  "currentDiskUsagePercentage": 33.8,
  "currentCpuUsagePercentage": 45.6,
  "createdAt": "2023-10-01T12:00:00Z",
  "apiVersion": "0",
  "apiUrl": "https://api.runner1.example.com",
  "regionType": "shared",
  "id": "runner123",
  "state": "initializing",
  "unschedulable": false,
  "currentAllocatedDiskGiB": 50000,
  "currentAllocatedMemoryGiB": 8000,
  "gpuType": "gpuType",
  "sandboxClass": "linux-vm",
  "currentAllocatedCpu": 4000,
  "updatedAt": "2023-10-01T12:00:00Z",
  "proxyUrl": "https://proxy.runner1.example.com",
  "cpu": 8,
  "gpu": 1,
  "currentSnapshotCount": 12,
  "version": "0",
  "tags": [
    "gpu",
    "us-east"
  ],
  "disk": 100,
  "domain": "runner1.example.com",
  "name": "runner1",
  "runnerClass": "container",
  "region": "us",
  "lastChecked": "2024-10-01T12:00:00Z"
}
```

<h3 id="get-runner-by-sandbox-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RunnerFull](#schemarunnerfull)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get runners by snapshot ref

<a id="opIdgetRunnersBySnapshotRef"></a>

> Code samples

```bash
curl 'http://localhost:3000/runners/by-snapshot-ref?ref=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /runners/by-snapshot-ref`

<h3 id="get-runners-by-snapshot-ref-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ref|query|string|true|Snapshot ref|

> Example responses

> 200 Response

```json
[
  {
    "runnerDomain": "runner.example.com",
    "runnerId": "123e4567-e89b-12d3-a456-426614174000",
    "runnerSnapshotId": "123e4567-e89b-12d3-a456-426614174000"
  }
]
```

<h3 id="get-runners-by-snapshot-ref-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-runners-by-snapshot-ref-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RunnerSnapshotDto](#schemarunnersnapshotdto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get runner by ID

<a id="opIdgetRunnerById"></a>

> Code samples

```bash
curl http://localhost:3000/runners/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /runners/{id}`

<h3 id="get-runner-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Runner ID|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|

> Example responses

> 200 Response

```json
{
  "currentStartedSandboxes": 5,
  "appVersion": "v0.0.0-dev",
  "memory": 16,
  "currentMemoryUsagePercentage": 68.2,
  "availabilityScore": 85,
  "currentDiskUsagePercentage": 33.8,
  "currentCpuUsagePercentage": 45.6,
  "createdAt": "2023-10-01T12:00:00Z",
  "apiVersion": "0",
  "apiUrl": "https://api.runner1.example.com",
  "id": "runner123",
  "state": "initializing",
  "unschedulable": false,
  "currentAllocatedDiskGiB": 50000,
  "currentAllocatedMemoryGiB": 8000,
  "gpuType": "gpuType",
  "sandboxClass": "linux-vm",
  "currentAllocatedCpu": 4000,
  "updatedAt": "2023-10-01T12:00:00Z",
  "proxyUrl": "https://proxy.runner1.example.com",
  "cpu": 8,
  "gpu": 1,
  "currentSnapshotCount": 12,
  "version": "0",
  "tags": [
    "gpu",
    "us-east"
  ],
  "disk": 100,
  "domain": "runner1.example.com",
  "name": "runner1",
  "runnerClass": "container",
  "region": "us",
  "lastChecked": "2024-10-01T12:00:00Z"
}
```

<h3 id="get-runner-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Runner](#schemarunner)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Delete runner

<a id="opIddeleteRunner"></a>

> Code samples

```bash
curl http://localhost:3000/runners/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /runners/{id}`

<h3 id="delete-runner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Runner ID|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|

<h3 id="delete-runner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get runner by ID

<a id="opIdgetRunnerFullById"></a>

> Code samples

```bash
curl http://localhost:3000/runners/string/full \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /runners/{id}/full`

<h3 id="get-runner-by-id-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Runner ID|

> Example responses

> 200 Response

```json
{
  "currentStartedSandboxes": 5,
  "appVersion": "v0.0.0-dev",
  "memory": 16,
  "currentMemoryUsagePercentage": 68.2,
  "apiKey": "dtn_1234567890",
  "availabilityScore": 85,
  "currentDiskUsagePercentage": 33.8,
  "currentCpuUsagePercentage": 45.6,
  "createdAt": "2023-10-01T12:00:00Z",
  "apiVersion": "0",
  "apiUrl": "https://api.runner1.example.com",
  "regionType": "shared",
  "id": "runner123",
  "state": "initializing",
  "unschedulable": false,
  "currentAllocatedDiskGiB": 50000,
  "currentAllocatedMemoryGiB": 8000,
  "gpuType": "gpuType",
  "sandboxClass": "linux-vm",
  "currentAllocatedCpu": 4000,
  "updatedAt": "2023-10-01T12:00:00Z",
  "proxyUrl": "https://proxy.runner1.example.com",
  "cpu": 8,
  "gpu": 1,
  "currentSnapshotCount": 12,
  "version": "0",
  "tags": [
    "gpu",
    "us-east"
  ],
  "disk": 100,
  "domain": "runner1.example.com",
  "name": "runner1",
  "runnerClass": "container",
  "region": "us",
  "lastChecked": "2024-10-01T12:00:00Z"
}
```

<h3 id="get-runner-by-id-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RunnerFull](#schemarunnerfull)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Update runner scheduling status

<a id="opIdupdateRunnerScheduling"></a>

> Code samples

```bash
curl http://localhost:3000/runners/string/scheduling \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /runners/{id}/scheduling`

<h3 id="update-runner-scheduling-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Runner ID|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|

> Example responses

> 200 Response

```json
{
  "currentStartedSandboxes": 5,
  "appVersion": "v0.0.0-dev",
  "memory": 16,
  "currentMemoryUsagePercentage": 68.2,
  "availabilityScore": 85,
  "currentDiskUsagePercentage": 33.8,
  "currentCpuUsagePercentage": 45.6,
  "createdAt": "2023-10-01T12:00:00Z",
  "apiVersion": "0",
  "apiUrl": "https://api.runner1.example.com",
  "id": "runner123",
  "state": "initializing",
  "unschedulable": false,
  "currentAllocatedDiskGiB": 50000,
  "currentAllocatedMemoryGiB": 8000,
  "gpuType": "gpuType",
  "sandboxClass": "linux-vm",
  "currentAllocatedCpu": 4000,
  "updatedAt": "2023-10-01T12:00:00Z",
  "proxyUrl": "https://proxy.runner1.example.com",
  "cpu": 8,
  "gpu": 1,
  "currentSnapshotCount": 12,
  "version": "0",
  "tags": [
    "gpu",
    "us-east"
  ],
  "disk": 100,
  "domain": "runner1.example.com",
  "name": "runner1",
  "runnerClass": "container",
  "region": "us",
  "lastChecked": "2024-10-01T12:00:00Z"
}
```

<h3 id="update-runner-scheduling-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Runner](#schemarunner)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Update runner draining status

<a id="opIdupdateRunnerDraining"></a>

> Code samples

```bash
curl http://localhost:3000/runners/string/draining \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /runners/{id}/draining`

<h3 id="update-runner-draining-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Runner ID|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|

> Example responses

> 200 Response

```json
{
  "currentStartedSandboxes": 5,
  "appVersion": "v0.0.0-dev",
  "memory": 16,
  "currentMemoryUsagePercentage": 68.2,
  "availabilityScore": 85,
  "currentDiskUsagePercentage": 33.8,
  "currentCpuUsagePercentage": 45.6,
  "createdAt": "2023-10-01T12:00:00Z",
  "apiVersion": "0",
  "apiUrl": "https://api.runner1.example.com",
  "id": "runner123",
  "state": "initializing",
  "unschedulable": false,
  "currentAllocatedDiskGiB": 50000,
  "currentAllocatedMemoryGiB": 8000,
  "gpuType": "gpuType",
  "sandboxClass": "linux-vm",
  "currentAllocatedCpu": 4000,
  "updatedAt": "2023-10-01T12:00:00Z",
  "proxyUrl": "https://proxy.runner1.example.com",
  "cpu": 8,
  "gpu": 1,
  "currentSnapshotCount": 12,
  "version": "0",
  "tags": [
    "gpu",
    "us-east"
  ],
  "disk": 100,
  "domain": "runner1.example.com",
  "name": "runner1",
  "runnerClass": "container",
  "region": "us",
  "lastChecked": "2024-10-01T12:00:00Z"
}
```

<h3 id="update-runner-draining-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Runner](#schemarunner)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Runner healthcheck

<a id="opIdrunnerHealthcheck"></a>

> Code samples

```bash
curl http://localhost:3000/runners/healthcheck \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "appVersion": "v0.0.0-dev",
    "apiUrl": "http://api.daytona.example.com:8080",
    "proxyUrl": "http://proxy.daytona.example.com:8080",
    "domain": "runner-123.daytona.example.com",
    "serviceHealth": [
      {
        "healthy": false,
        "errorReason": "Cannot connect to the runner",
        "serviceName": "runner"
      },
      {
        "healthy": false,
        "errorReason": "Cannot connect to the runner",
        "serviceName": "runner"
      }
    ],
    "metrics": ""
  }'
```

`POST /runners/healthcheck`

Endpoint for version 2 runners to send healthcheck and metrics. Updates lastChecked timestamp and runner metrics.

> Body parameter

```json
{
  "appVersion": "v0.0.0-dev",
  "apiUrl": "http://api.daytona.example.com:8080",
  "proxyUrl": "http://proxy.daytona.example.com:8080",
  "domain": "runner-123.daytona.example.com",
  "serviceHealth": [
    {
      "healthy": false,
      "errorReason": "Cannot connect to the runner",
      "serviceName": "runner"
    },
    {
      "healthy": false,
      "errorReason": "Cannot connect to the runner",
      "serviceName": "runner"
    }
  ],
  "metrics": ""
}
```

<h3 id="runner-healthcheck-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RunnerHealthcheck](#schemarunnerhealthcheck)|true|none|
|» metrics|body|object|false|Runner metrics|
|» » currentCpuLoadAverage|body|number|true|Current CPU load average|
|» » currentCpuUsagePercentage|body|number|true|Current CPU usage percentage|
|» » currentMemoryUsagePercentage|body|number|true|Current memory usage percentage|
|» » currentDiskUsagePercentage|body|number|true|Current disk usage percentage|
|» » currentAllocatedCpu|body|number|true|Currently allocated CPU cores|
|» » currentAllocatedMemoryGiB|body|number|true|Currently allocated memory in GiB|
|» » currentAllocatedDiskGiB|body|number|true|Currently allocated disk in GiB|
|» » currentSnapshotCount|body|number|true|Number of snapshots currently stored|
|» » currentStartedSandboxes|body|number|true|Number of started sandboxes|
|» » cpu|body|number|true|Total CPU cores on the runner|
|» » memoryGiB|body|number|true|Total RAM in GiB on the runner|
|» » diskGiB|body|number|true|Total disk space in GiB on the runner|
|» » gpu|body|number|false|Total number of GPUs on the runner|
|» » gpuType|body|string|false|GPU model name|
|» serviceHealth|body|[[RunnerServiceHealth](#schemarunnerservicehealth)]|false|Health status of individual services on the runner|
|» domain|body|string|false|Runner domain|
|» proxyUrl|body|string|false|Runner proxy URL|
|» apiUrl|body|string|false|Runner API URL|
|» appVersion|body|string|true|Runner app version|

<h3 id="runner-healthcheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Healthcheck received|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

<h1 id="daytona-toolbox">toolbox</h1>

## [DEPRECATED] Get sandbox project dir

<a id="opIdgetProjectDir_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/project-dir \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolbox/{sandboxId}/toolbox/project-dir`

<aside class="warning">
This operation is deprecated
</aside>

<h3 id="deprecated-get-sandbox-project-dir-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "dir": "dir"
}
```

<h3 id="deprecated-get-sandbox-project-dir-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Project directory retrieved successfully|[ProjectDirResponse](#schemaprojectdirresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Get sandbox user home dir

<a id="opIdgetUserHomeDir_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/user-home-dir \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolbox/{sandboxId}/toolbox/user-home-dir`

<aside class="warning">
This operation is deprecated
</aside>

<h3 id="deprecated-get-sandbox-user-home-dir-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "dir": "dir"
}
```

<h3 id="deprecated-get-sandbox-user-home-dir-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User home directory retrieved successfully|[UserHomeDirResponse](#schemauserhomedirresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Get sandbox work-dir

<a id="opIdgetWorkDir_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/work-dir \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolbox/{sandboxId}/toolbox/work-dir`

<aside class="warning">
This operation is deprecated
</aside>

<h3 id="deprecated-get-sandbox-work-dir-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "dir": "dir"
}
```

<h3 id="deprecated-get-sandbox-work-dir-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Work-dir retrieved successfully|[WorkDirResponse](#schemaworkdirresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] List files

<a id="opIdlistFiles_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/files \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolbox/{sandboxId}/toolbox/files`

<aside class="warning">
This operation is deprecated
</aside>

<h3 id="deprecated-list-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|path|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "mode": "mode",
    "owner": "owner",
    "size": 0.8008281904610115,
    "modTime": "modTime",
    "permissions": "permissions",
    "name": "name",
    "isDir": true,
    "group": "group"
  }
]
```

<h3 id="deprecated-list-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Files listed successfully|Inline|

<h3 id="deprecated-list-files-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[FileInfo](#schemafileinfo)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Delete file

<a id="opIddeleteFile_deprecated"></a>

> Code samples

```bash
curl 'http://localhost:3000/toolbox/string/toolbox/files?path=string' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /toolbox/{sandboxId}/toolbox/files`

<aside class="warning">
This operation is deprecated
</aside>

Delete file inside sandbox

<h3 id="deprecated-delete-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|recursive|query|boolean|false|none|
|path|query|string|true|none|

<h3 id="deprecated-delete-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File deleted successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Download file

<a id="opIddownloadFile_deprecated"></a>

> Code samples

```bash
curl 'http://localhost:3000/toolbox/string/toolbox/files/download?path=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolbox/{sandboxId}/toolbox/files/download`

<aside class="warning">
This operation is deprecated
</aside>

Download file from sandbox

<h3 id="deprecated-download-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|path|query|string|true|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="deprecated-download-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File downloaded successfully|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Download multiple files

<a id="opIddownloadFiles_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/files/bulk-download \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "paths": [
      "paths",
      "paths"
    ]
  }'
```

`POST /toolbox/{sandboxId}/toolbox/files/bulk-download`

<aside class="warning">
This operation is deprecated
</aside>

Streams back a multipart/form-data bundle of the requested paths

> Body parameter

```json
{
  "paths": [
    "paths",
    "paths"
  ]
}
```

<h3 id="deprecated-download-multiple-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|body|body|[DownloadFiles](#schemadownloadfiles)|true|none|
|» paths|body|[string]|true|List of remote file paths to download|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="deprecated-download-multiple-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A multipart/form-data response with each file as a part|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Search for text/pattern in files

<a id="opIdfindInFiles_deprecated"></a>

> Code samples

```bash
curl 'http://localhost:3000/toolbox/string/toolbox/files/find?path=string&pattern=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolbox/{sandboxId}/toolbox/files/find`

<aside class="warning">
This operation is deprecated
</aside>

Search for text/pattern inside sandbox files

<h3 id="deprecated-search-for-textpattern-in-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|path|query|string|true|none|
|pattern|query|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "file": "file",
    "line": 0.8008281904610115,
    "content": "content"
  }
]
```

<h3 id="deprecated-search-for-textpattern-in-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Search completed successfully|Inline|

<h3 id="deprecated-search-for-textpattern-in-files-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Match](#schemamatch)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Create folder

<a id="opIdcreateFolder_deprecated"></a>

> Code samples

```bash
curl 'http://localhost:3000/toolbox/string/toolbox/files/folder?path=string&mode=string' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /toolbox/{sandboxId}/toolbox/files/folder`

<aside class="warning">
This operation is deprecated
</aside>

Create folder inside sandbox

<h3 id="deprecated-create-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|path|query|string|true|none|
|mode|query|string|true|none|

<h3 id="deprecated-create-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Folder created successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Get file info

<a id="opIdgetFileInfo_deprecated"></a>

> Code samples

```bash
curl 'http://localhost:3000/toolbox/string/toolbox/files/info?path=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolbox/{sandboxId}/toolbox/files/info`

<aside class="warning">
This operation is deprecated
</aside>

Get file info inside sandbox

<h3 id="deprecated-get-file-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|path|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "mode": "mode",
  "owner": "owner",
  "size": 0.8008281904610115,
  "modTime": "modTime",
  "permissions": "permissions",
  "name": "name",
  "isDir": true,
  "group": "group"
}
```

<h3 id="deprecated-get-file-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File info retrieved successfully|[FileInfo](#schemafileinfo)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Move file

<a id="opIdmoveFile_deprecated"></a>

> Code samples

```bash
curl 'http://localhost:3000/toolbox/string/toolbox/files/move?source=string&destination=string' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /toolbox/{sandboxId}/toolbox/files/move`

<aside class="warning">
This operation is deprecated
</aside>

Move file inside sandbox

<h3 id="deprecated-move-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|source|query|string|true|none|
|destination|query|string|true|none|

<h3 id="deprecated-move-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File moved successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Set file permissions

<a id="opIdsetFilePermissions_deprecated"></a>

> Code samples

```bash
curl 'http://localhost:3000/toolbox/string/toolbox/files/permissions?path=string' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /toolbox/{sandboxId}/toolbox/files/permissions`

<aside class="warning">
This operation is deprecated
</aside>

Set file owner/group/permissions inside sandbox

<h3 id="deprecated-set-file-permissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|path|query|string|true|none|
|owner|query|string|false|none|
|group|query|string|false|none|
|mode|query|string|false|none|

<h3 id="deprecated-set-file-permissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File permissions updated successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Replace in files

<a id="opIdreplaceInFiles_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/files/replace \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "newValue": "newValue",
    "pattern": "pattern",
    "files": [
      "files",
      "files"
    ]
  }'
```

`POST /toolbox/{sandboxId}/toolbox/files/replace`

<aside class="warning">
This operation is deprecated
</aside>

Replace text/pattern in multiple files inside sandbox

> Body parameter

```json
{
  "newValue": "newValue",
  "pattern": "pattern",
  "files": [
    "files",
    "files"
  ]
}
```

<h3 id="deprecated-replace-in-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|body|body|[ReplaceRequest](#schemareplacerequest)|true|none|
|» files|body|[string]|true|none|
|» pattern|body|string|true|none|
|» newValue|body|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "file": "file",
    "success": true,
    "error": "error"
  }
]
```

<h3 id="deprecated-replace-in-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Text replaced successfully|Inline|

<h3 id="deprecated-replace-in-files-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ReplaceResult](#schemareplaceresult)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Search files

<a id="opIdsearchFiles_deprecated"></a>

> Code samples

```bash
curl 'http://localhost:3000/toolbox/string/toolbox/files/search?path=string&pattern=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolbox/{sandboxId}/toolbox/files/search`

<aside class="warning">
This operation is deprecated
</aside>

Search for files inside sandbox

<h3 id="deprecated-search-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|path|query|string|true|none|
|pattern|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "files": [
    "files",
    "files"
  ]
}
```

<h3 id="deprecated-search-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Search completed successfully|[SearchFilesResponse](#schemasearchfilesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Upload file

<a id="opIduploadFile_deprecated"></a>

> Code samples

```bash
curl 'http://localhost:3000/toolbox/string/toolbox/files/upload?path=string' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'file=@/path/to/file'
```

`POST /toolbox/{sandboxId}/toolbox/files/upload`

<aside class="warning">
This operation is deprecated
</aside>

Upload file inside sandbox

> Body parameter

```yaml
file: string
```

<h3 id="deprecated-upload-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|path|query|string|true|none|
|body|body|[uploadFile_deprecated_request](#schemauploadfile_deprecated_request)|true|none|
|» file|body|string(binary)|false|none|

<h3 id="deprecated-upload-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File uploaded successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Upload multiple files

<a id="opIduploadFiles_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/files/bulk-upload \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /toolbox/{sandboxId}/toolbox/files/bulk-upload`

<aside class="warning">
This operation is deprecated
</aside>

Upload multiple files inside sandbox

> Body parameter

```yaml
-
  file: string
  path: string
```

<h3 id="deprecated-upload-multiple-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|body|body|[[UploadFile](#schemauploadfile)]|true|none|

<h3 id="deprecated-upload-multiple-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Files uploaded successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Add files

<a id="opIdgitAddFiles_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/git/add \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "path": "path",
    "files": [
      "files",
      "files"
    ]
  }'
```

`POST /toolbox/{sandboxId}/toolbox/git/add`

<aside class="warning">
This operation is deprecated
</aside>

Add files to git commit

> Body parameter

```json
{
  "path": "path",
  "files": [
    "files",
    "files"
  ]
}
```

<h3 id="deprecated-add-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|body|body|[GitAddRequest](#schemagitaddrequest)|true|none|
|» path|body|string|true|none|
|» files|body|[string]|true|files to add (use . for all files)|

<h3 id="deprecated-add-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Files added to git successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Get branch list

<a id="opIdgitListBranches_deprecated"></a>

> Code samples

```bash
curl 'http://localhost:3000/toolbox/string/toolbox/git/branches?path=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolbox/{sandboxId}/toolbox/git/branches`

<aside class="warning">
This operation is deprecated
</aside>

Get branch list from git repository

<h3 id="deprecated-get-branch-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|path|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "branches": [
    "branches",
    "branches"
  ]
}
```

<h3 id="deprecated-get-branch-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Branch list retrieved successfully|[ListBranchResponse](#schemalistbranchresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Create branch

<a id="opIdgitCreateBranch_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/git/branches \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "path": "path",
    "name": "name"
  }'
```

`POST /toolbox/{sandboxId}/toolbox/git/branches`

<aside class="warning">
This operation is deprecated
</aside>

Create branch on git repository

> Body parameter

```json
{
  "path": "path",
  "name": "name"
}
```

<h3 id="deprecated-create-branch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|body|body|[GitBranchRequest](#schemagitbranchrequest)|true|none|
|» path|body|string|true|none|
|» name|body|string|true|none|

<h3 id="deprecated-create-branch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Branch created successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Delete branch

<a id="opIdgitDeleteBranch_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/git/branches \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "path": "path",
    "name": "name"
  }'
```

`DELETE /toolbox/{sandboxId}/toolbox/git/branches`

<aside class="warning">
This operation is deprecated
</aside>

Delete branch on git repository

> Body parameter

```json
{
  "path": "path",
  "name": "name"
}
```

<h3 id="deprecated-delete-branch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|body|body|[GitDeleteBranchRequest](#schemagitdeletebranchrequest)|true|none|
|» path|body|string|true|none|
|» name|body|string|true|none|

<h3 id="deprecated-delete-branch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Branch deleted successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Clone repository

<a id="opIdgitCloneRepository_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/git/clone \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "path": "path",
    "password": "password",
    "branch": "branch",
    "commit_id": "commit_id",
    "url": "url",
    "username": "username"
  }'
```

`POST /toolbox/{sandboxId}/toolbox/git/clone`

<aside class="warning">
This operation is deprecated
</aside>

Clone git repository

> Body parameter

```json
{
  "path": "path",
  "password": "password",
  "branch": "branch",
  "commit_id": "commit_id",
  "url": "url",
  "username": "username"
}
```

<h3 id="deprecated-clone-repository-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|body|body|[GitCloneRequest](#schemagitclonerequest)|true|none|
|» url|body|string|true|none|
|» path|body|string|true|none|
|» username|body|string|false|none|
|» password|body|string|false|none|
|» branch|body|string|false|none|
|» commit_id|body|string|false|none|

<h3 id="deprecated-clone-repository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Repository cloned successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Commit changes

<a id="opIdgitCommitChanges_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/git/commit \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "path": "path",
    "author": "author",
    "message": "message",
    "email": "email",
    "allow_empty": false
  }'
```

`POST /toolbox/{sandboxId}/toolbox/git/commit`

<aside class="warning">
This operation is deprecated
</aside>

Commit changes to git repository

> Body parameter

```json
{
  "path": "path",
  "author": "author",
  "message": "message",
  "email": "email",
  "allow_empty": false
}
```

<h3 id="deprecated-commit-changes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|body|body|[GitCommitRequest](#schemagitcommitrequest)|true|none|
|» path|body|string|true|none|
|» message|body|string|true|none|
|» author|body|string|true|none|
|» email|body|string|true|none|
|» allow_empty|body|boolean|false|Allow creating an empty commit when no changes are staged|

> Example responses

> 200 Response

```json
{
  "hash": "hash"
}
```

<h3 id="deprecated-commit-changes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Changes committed successfully|[GitCommitResponse](#schemagitcommitresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Get commit history

<a id="opIdgitGetHistory_deprecated"></a>

> Code samples

```bash
curl 'http://localhost:3000/toolbox/string/toolbox/git/history?path=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolbox/{sandboxId}/toolbox/git/history`

<aside class="warning">
This operation is deprecated
</aside>

Get commit history from git repository

<h3 id="deprecated-get-commit-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|path|query|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "author": "author",
    "message": "message",
    "hash": "hash",
    "email": "email",
    "timestamp": "timestamp"
  }
]
```

<h3 id="deprecated-get-commit-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Commit history retrieved successfully|Inline|

<h3 id="deprecated-get-commit-history-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GitCommitInfo](#schemagitcommitinfo)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Pull changes

<a id="opIdgitPullChanges_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/git/pull \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "path": "path",
    "password": "password",
    "username": "username"
  }'
```

`POST /toolbox/{sandboxId}/toolbox/git/pull`

<aside class="warning">
This operation is deprecated
</aside>

Pull changes from remote

> Body parameter

```json
{
  "path": "path",
  "password": "password",
  "username": "username"
}
```

<h3 id="deprecated-pull-changes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|body|body|[GitRepoRequest](#schemagitreporequest)|true|none|
|» path|body|string|true|none|
|» username|body|string|false|none|
|» password|body|string|false|none|

<h3 id="deprecated-pull-changes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Changes pulled successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Push changes

<a id="opIdgitPushChanges_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/git/push \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "path": "path",
    "password": "password",
    "username": "username"
  }'
```

`POST /toolbox/{sandboxId}/toolbox/git/push`

<aside class="warning">
This operation is deprecated
</aside>

Push changes to remote

> Body parameter

```json
{
  "path": "path",
  "password": "password",
  "username": "username"
}
```

<h3 id="deprecated-push-changes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|body|body|[GitRepoRequest](#schemagitreporequest)|true|none|
|» path|body|string|true|none|
|» username|body|string|false|none|
|» password|body|string|false|none|

<h3 id="deprecated-push-changes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Changes pushed successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Checkout branch

<a id="opIdgitCheckoutBranch_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/git/checkout \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "path": "path",
    "branch": "branch"
  }'
```

`POST /toolbox/{sandboxId}/toolbox/git/checkout`

<aside class="warning">
This operation is deprecated
</aside>

Checkout branch or commit in git repository

> Body parameter

```json
{
  "path": "path",
  "branch": "branch"
}
```

<h3 id="deprecated-checkout-branch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|body|body|[GitCheckoutRequest](#schemagitcheckoutrequest)|true|none|
|» path|body|string|true|none|
|» branch|body|string|true|none|

<h3 id="deprecated-checkout-branch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Branch checked out successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Get git status

<a id="opIdgitGetStatus_deprecated"></a>

> Code samples

```bash
curl 'http://localhost:3000/toolbox/string/toolbox/git/status?path=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolbox/{sandboxId}/toolbox/git/status`

<aside class="warning">
This operation is deprecated
</aside>

Get status from git repository

<h3 id="deprecated-get-git-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|path|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "behind": 6.027456183070403,
  "fileStatus": [
    {
      "extra": "extra",
      "name": "name",
      "staging": "staging",
      "worktree": "worktree"
    },
    {
      "extra": "extra",
      "name": "name",
      "staging": "staging",
      "worktree": "worktree"
    }
  ],
  "ahead": 0.8008281904610115,
  "branchPublished": true,
  "currentBranch": "currentBranch"
}
```

<h3 id="deprecated-get-git-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Git status retrieved successfully|[GitStatus](#schemagitstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Execute command

<a id="opIdexecuteCommand_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/process/execute \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cwd": "cwd",
    "command": "command",
    "timeout": 0.8008281904610115
  }'
```

`POST /toolbox/{sandboxId}/toolbox/process/execute`

<aside class="warning">
This operation is deprecated
</aside>

Execute command synchronously inside sandbox

> Body parameter

```json
{
  "cwd": "cwd",
  "command": "command",
  "timeout": 0.8008281904610115
}
```

<h3 id="deprecated-execute-command-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|body|body|[ExecuteRequest](#schemaexecuterequest)|true|none|
|» command|body|string|true|none|
|» cwd|body|string|false|Current working directory|
|» timeout|body|number|false|Timeout in seconds, defaults to 10 seconds|

> Example responses

> 200 Response

```json
{
  "result": "Command output here",
  "exitCode": 0
}
```

<h3 id="deprecated-execute-command-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Command executed successfully|[ExecuteResponse](#schemaexecuteresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] List sessions

<a id="opIdlistSessions_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/process/session \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolbox/{sandboxId}/toolbox/process/session`

<aside class="warning">
This operation is deprecated
</aside>

List all active sessions in the sandbox

<h3 id="deprecated-list-sessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "sessionId": "session-123",
    "commands": [
      {
        "exitCode": 0,
        "id": "cmd-123",
        "command": "ls -la"
      },
      {
        "exitCode": 0,
        "id": "cmd-123",
        "command": "ls -la"
      }
    ]
  }
]
```

<h3 id="deprecated-list-sessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sessions retrieved successfully|Inline|

<h3 id="deprecated-list-sessions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Session](#schemasession)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Create session

<a id="opIdcreateSession_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/process/session \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "sessionId": "session-123"
  }'
```

`POST /toolbox/{sandboxId}/toolbox/process/session`

<aside class="warning">
This operation is deprecated
</aside>

Create a new session in the sandbox

> Body parameter

```json
{
  "sessionId": "session-123"
}
```

<h3 id="deprecated-create-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|body|body|[CreateSessionRequest](#schemacreatesessionrequest)|true|none|
|» sessionId|body|string|true|The ID of the session|

<h3 id="deprecated-create-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Get session

<a id="opIdgetSession_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/process/session/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolbox/{sandboxId}/toolbox/process/session/{sessionId}`

<aside class="warning">
This operation is deprecated
</aside>

Get session by ID

<h3 id="deprecated-get-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|sessionId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "sessionId": "session-123",
  "commands": [
    {
      "exitCode": 0,
      "id": "cmd-123",
      "command": "ls -la"
    },
    {
      "exitCode": 0,
      "id": "cmd-123",
      "command": "ls -la"
    }
  ]
}
```

<h3 id="deprecated-get-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Session retrieved successfully|[Session](#schemasession)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Delete session

<a id="opIddeleteSession_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/process/session/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /toolbox/{sandboxId}/toolbox/process/session/{sessionId}`

<aside class="warning">
This operation is deprecated
</aside>

Delete a specific session

<h3 id="deprecated-delete-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|sessionId|path|string|true|none|

<h3 id="deprecated-delete-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Session deleted successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Execute command in session

<a id="opIdexecuteSessionCommand_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/process/session/string/exec \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "async": false,
    "command": "ls -la",
    "runAsync": false
  }'
```

`POST /toolbox/{sandboxId}/toolbox/process/session/{sessionId}/exec`

<aside class="warning">
This operation is deprecated
</aside>

Execute a command in a specific session

> Body parameter

```json
{
  "async": false,
  "command": "ls -la",
  "runAsync": false
}
```

<h3 id="deprecated-execute-command-in-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|sessionId|path|string|true|none|
|body|body|[SessionExecuteRequest](#schemasessionexecuterequest)|true|none|
|» command|body|string|true|The command to execute|
|» runAsync|body|boolean|false|Whether to execute the command asynchronously|
|» async|body|boolean|false|**Deprecated.** Deprecated: Use runAsync instead. Whether to execute the command asynchronously|

> Example responses

> 200 Response

```json
{
  "output": "total 20\ndrwxr-xr-x  4 user group  128 Mar 15 10:30 .",
  "cmdId": "cmd-123",
  "exitCode": 0
}
```

> 202 Response

```json
{
  "output": "total 20\ndrwxr-xr-x  4 user group  128 Mar 15 10:30 .",
  "cmdId": "cmd-123",
  "exitCode": 0
}
```

<h3 id="deprecated-execute-command-in-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Command executed successfully|[SessionExecuteResponse](#schemasessionexecuteresponse)|
|202|Accepted|Command accepted and is being processed|[SessionExecuteResponse](#schemasessionexecuteresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Get session command

<a id="opIdgetSessionCommand_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/process/session/string/command/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolbox/{sandboxId}/toolbox/process/session/{sessionId}/command/{commandId}`

<aside class="warning">
This operation is deprecated
</aside>

Get session command by ID

<h3 id="deprecated-get-session-command-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|sessionId|path|string|true|none|
|commandId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "exitCode": 0,
  "id": "cmd-123",
  "command": "ls -la"
}
```

<h3 id="deprecated-get-session-command-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Session command retrieved successfully|[Command](#schemacommand)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Get command logs

<a id="opIdgetSessionCommandLogs_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/process/session/string/command/string/logs \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolbox/{sandboxId}/toolbox/process/session/{sessionId}/command/{commandId}/logs`

<aside class="warning">
This operation is deprecated
</aside>

Get logs for a specific command in a session

<h3 id="deprecated-get-command-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|sessionId|path|string|true|none|
|commandId|path|string|true|none|
|follow|query|boolean|false|Whether to stream the logs|

<h3 id="deprecated-get-command-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Command log stream marked with stdout and stderr prefixes|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] List PTY sessions

<a id="opIdlistPTYSessions_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/process/pty \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolbox/{sandboxId}/toolbox/process/pty`

<aside class="warning">
This operation is deprecated
</aside>

List all active PTY sessions in the sandbox

<h3 id="deprecated-list-pty-sessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "sessions": [
    {
      "cwd": "/home/user",
      "createdAt": "2024-01-15T10:30:45Z",
      "lazyStart": false,
      "envs": {
        "TERM": "xterm-256color",
        "PS1": "\\u@daytona:\\w$ "
      },
      "active": true,
      "id": "pty-session-12345",
      "rows": 24,
      "cols": 80
    },
    {
      "cwd": "/home/user",
      "createdAt": "2024-01-15T10:30:45Z",
      "lazyStart": false,
      "envs": {
        "TERM": "xterm-256color",
        "PS1": "\\u@daytona:\\w$ "
      },
      "active": true,
      "id": "pty-session-12345",
      "rows": 24,
      "cols": 80
    }
  ]
}
```

<h3 id="deprecated-list-pty-sessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|PTY sessions retrieved successfully|[PtyListResponse](#schemaptylistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Create PTY session

<a id="opIdcreatePTYSession_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/process/pty \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cwd": "/home/user",
    "lazyStart": false,
    "envs": {
      "TERM": "xterm-256color",
      "PS1": "\\u@daytona:\\w$ "
    },
    "id": "pty-session-12345",
    "rows": 24,
    "cols": 80
  }'
```

`POST /toolbox/{sandboxId}/toolbox/process/pty`

<aside class="warning">
This operation is deprecated
</aside>

Create a new PTY session in the sandbox

> Body parameter

```json
{
  "cwd": "/home/user",
  "lazyStart": false,
  "envs": {
    "TERM": "xterm-256color",
    "PS1": "\\u@daytona:\\w$ "
  },
  "id": "pty-session-12345",
  "rows": 24,
  "cols": 80
}
```

<h3 id="deprecated-create-pty-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|body|body|[PtyCreateRequest](#schemaptycreaterequest)|true|none|
|» id|body|string|true|The unique identifier for the PTY session|
|» cwd|body|string|false|Starting directory for the PTY session, defaults to the sandbox's working directory|
|» envs|body|object|false|Environment variables for the PTY session|
|» cols|body|number|false|Number of terminal columns|
|» rows|body|number|false|Number of terminal rows|
|» lazyStart|body|boolean|false|Whether to start the PTY session lazily (only start when first client connects)|

> Example responses

> 201 Response

```json
{
  "sessionId": "pty-session-12345"
}
```

<h3 id="deprecated-create-pty-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|PTY session created successfully|[PtyCreateResponse](#schemaptycreateresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Get PTY session

<a id="opIdgetPTYSession_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/process/pty/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolbox/{sandboxId}/toolbox/process/pty/{sessionId}`

<aside class="warning">
This operation is deprecated
</aside>

Get PTY session information by ID

<h3 id="deprecated-get-pty-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|sessionId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "cwd": "/home/user",
  "createdAt": "2024-01-15T10:30:45Z",
  "lazyStart": false,
  "envs": {
    "TERM": "xterm-256color",
    "PS1": "\\u@daytona:\\w$ "
  },
  "active": true,
  "id": "pty-session-12345",
  "rows": 24,
  "cols": 80
}
```

<h3 id="deprecated-get-pty-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|PTY session retrieved successfully|[PtySessionInfo](#schemaptysessioninfo)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Delete PTY session

<a id="opIddeletePTYSession_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/process/pty/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /toolbox/{sandboxId}/toolbox/process/pty/{sessionId}`

<aside class="warning">
This operation is deprecated
</aside>

Delete a PTY session and terminate the associated process

<h3 id="deprecated-delete-pty-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|sessionId|path|string|true|none|

<h3 id="deprecated-delete-pty-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|PTY session deleted successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Resize PTY session

<a id="opIdresizePTYSession_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/process/pty/string/resize \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "rows": 24,
    "cols": 80
  }'
```

`POST /toolbox/{sandboxId}/toolbox/process/pty/{sessionId}/resize`

<aside class="warning">
This operation is deprecated
</aside>

Resize a PTY session

> Body parameter

```json
{
  "rows": 24,
  "cols": 80
}
```

<h3 id="deprecated-resize-pty-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|sessionId|path|string|true|none|
|body|body|[PtyResizeRequest](#schemaptyresizerequest)|true|none|
|» cols|body|number|true|Number of terminal columns|
|» rows|body|number|true|Number of terminal rows|

> Example responses

> 200 Response

```json
{
  "cwd": "/home/user",
  "createdAt": "2024-01-15T10:30:45Z",
  "lazyStart": false,
  "envs": {
    "TERM": "xterm-256color",
    "PS1": "\\u@daytona:\\w$ "
  },
  "active": true,
  "id": "pty-session-12345",
  "rows": 24,
  "cols": 80
}
```

<h3 id="deprecated-resize-pty-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|PTY session resized successfully|[PtySessionInfo](#schemaptysessioninfo)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Get Lsp Completions

<a id="opIdLspCompletions_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/lsp/completions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "pathToProject": "pathToProject",
    "languageId": "languageId",
    "context": {
      "triggerCharacter": "triggerCharacter",
      "triggerKind": 1.4658129805029452
    },
    "position": {
      "character": 6.027456183070403,
      "line": 0.8008281904610115
    },
    "uri": "uri"
  }'
```

`POST /toolbox/{sandboxId}/toolbox/lsp/completions`

<aside class="warning">
This operation is deprecated
</aside>

The Completion request is sent from the client to the server to compute completion items at a given cursor position.

> Body parameter

```json
{
  "pathToProject": "pathToProject",
  "languageId": "languageId",
  "context": {
    "triggerCharacter": "triggerCharacter",
    "triggerKind": 1.4658129805029452
  },
  "position": {
    "character": 6.027456183070403,
    "line": 0.8008281904610115
  },
  "uri": "uri"
}
```

<h3 id="deprecated-get-lsp-completions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|body|body|[LspCompletionParams](#schemalspcompletionparams)|true|none|
|» languageId|body|string|true|Language identifier|
|» pathToProject|body|string|true|Path to the project|
|» uri|body|string|true|Document URI|
|» position|body|[Position](#schemaposition)|true|none|
|» context|body|[CompletionContext](#schemacompletioncontext)|false|none|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "insertText": "insertText",
      "kind": 0.8008281904610115,
      "sortText": "sortText",
      "documentation": "{}",
      "label": "label",
      "detail": "detail",
      "filterText": "filterText"
    },
    {
      "insertText": "insertText",
      "kind": 0.8008281904610115,
      "sortText": "sortText",
      "documentation": "{}",
      "label": "label",
      "detail": "detail",
      "filterText": "filterText"
    }
  ],
  "isIncomplete": true
}
```

<h3 id="deprecated-get-lsp-completions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CompletionList](#schemacompletionlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Call Lsp DidClose

<a id="opIdLspDidClose_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/lsp/did-close \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "pathToProject": "pathToProject",
    "languageId": "languageId",
    "uri": "uri"
  }'
```

`POST /toolbox/{sandboxId}/toolbox/lsp/did-close`

<aside class="warning">
This operation is deprecated
</aside>

The document close notification is sent from the client to the server when the document got closed in the client.

> Body parameter

```json
{
  "pathToProject": "pathToProject",
  "languageId": "languageId",
  "uri": "uri"
}
```

<h3 id="deprecated-call-lsp-didclose-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|body|body|[LspDocumentRequest](#schemalspdocumentrequest)|true|none|
|» languageId|body|string|true|Language identifier|
|» pathToProject|body|string|true|Path to the project|
|» uri|body|string|true|Document URI|

<h3 id="deprecated-call-lsp-didclose-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Call Lsp DidOpen

<a id="opIdLspDidOpen_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/lsp/did-open \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "pathToProject": "pathToProject",
    "languageId": "languageId",
    "uri": "uri"
  }'
```

`POST /toolbox/{sandboxId}/toolbox/lsp/did-open`

<aside class="warning">
This operation is deprecated
</aside>

The document open notification is sent from the client to the server to signal newly opened text documents.

> Body parameter

```json
{
  "pathToProject": "pathToProject",
  "languageId": "languageId",
  "uri": "uri"
}
```

<h3 id="deprecated-call-lsp-didopen-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|body|body|[LspDocumentRequest](#schemalspdocumentrequest)|true|none|
|» languageId|body|string|true|Language identifier|
|» pathToProject|body|string|true|Path to the project|
|» uri|body|string|true|Document URI|

<h3 id="deprecated-call-lsp-didopen-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Call Lsp DocumentSymbols

<a id="opIdLspDocumentSymbols_deprecated"></a>

> Code samples

```bash
curl 'http://localhost:3000/toolbox/string/toolbox/lsp/document-symbols?languageId=string&pathToProject=string&uri=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolbox/{sandboxId}/toolbox/lsp/document-symbols`

<aside class="warning">
This operation is deprecated
</aside>

The document symbol request is sent from the client to the server.

<h3 id="deprecated-call-lsp-documentsymbols-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|languageId|query|string|true|none|
|pathToProject|query|string|true|none|
|uri|query|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "kind": 0.8008281904610115,
    "name": "name",
    "location": {
      "range": {
        "start": {
          "character": 6.027456183070403,
          "line": 0.8008281904610115
        },
        "end": {
          "character": 6.027456183070403,
          "line": 0.8008281904610115
        }
      },
      "uri": "uri"
    }
  }
]
```

<h3 id="deprecated-call-lsp-documentsymbols-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="deprecated-call-lsp-documentsymbols-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[LspSymbol](#schemalspsymbol)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Start Lsp server

<a id="opIdLspStart_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/lsp/start \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "pathToProject": "pathToProject",
    "languageId": "languageId"
  }'
```

`POST /toolbox/{sandboxId}/toolbox/lsp/start`

<aside class="warning">
This operation is deprecated
</aside>

Start Lsp server process inside sandbox project

> Body parameter

```json
{
  "pathToProject": "pathToProject",
  "languageId": "languageId"
}
```

<h3 id="deprecated-start-lsp-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|body|body|[LspServerRequest](#schemalspserverrequest)|true|none|
|» languageId|body|string|true|Language identifier|
|» pathToProject|body|string|true|Path to the project|

<h3 id="deprecated-start-lsp-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Stop Lsp server

<a id="opIdLspStop_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/lsp/stop \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "pathToProject": "pathToProject",
    "languageId": "languageId"
  }'
```

`POST /toolbox/{sandboxId}/toolbox/lsp/stop`

<aside class="warning">
This operation is deprecated
</aside>

Stop Lsp server process inside sandbox project

> Body parameter

```json
{
  "pathToProject": "pathToProject",
  "languageId": "languageId"
}
```

<h3 id="deprecated-stop-lsp-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|body|body|[LspServerRequest](#schemalspserverrequest)|true|none|
|» languageId|body|string|true|Language identifier|
|» pathToProject|body|string|true|Path to the project|

<h3 id="deprecated-stop-lsp-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Call Lsp WorkspaceSymbols

<a id="opIdLspWorkspaceSymbols_deprecated"></a>

> Code samples

```bash
curl 'http://localhost:3000/toolbox/string/toolbox/lsp/workspace-symbols?languageId=string&pathToProject=string&query=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolbox/{sandboxId}/toolbox/lsp/workspace-symbols`

<aside class="warning">
This operation is deprecated
</aside>

The workspace symbol request is sent from the client to the server to list project-wide symbols matching the query string.

<h3 id="deprecated-call-lsp-workspacesymbols-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|languageId|query|string|true|none|
|pathToProject|query|string|true|none|
|query|query|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "kind": 0.8008281904610115,
    "name": "name",
    "location": {
      "range": {
        "start": {
          "character": 6.027456183070403,
          "line": 0.8008281904610115
        },
        "end": {
          "character": 6.027456183070403,
          "line": 0.8008281904610115
        }
      },
      "uri": "uri"
    }
  }
]
```

<h3 id="deprecated-call-lsp-workspacesymbols-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="deprecated-call-lsp-workspacesymbols-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[LspSymbol](#schemalspsymbol)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Start computer use processes

<a id="opIdstartComputerUse_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/computeruse/start \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /toolbox/{sandboxId}/toolbox/computeruse/start`

<aside class="warning">
This operation is deprecated
</aside>

Start all VNC desktop processes (Xvfb, xfce4, x11vnc, novnc)

<h3 id="deprecated-start-computer-use-processes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "message": "Computer use processes started successfully",
  "status": {
    "xvfb": {
      "running": true,
      "priority": 100,
      "autoRestart": true,
      "pid": 12345
    },
    "xfce4": {
      "running": true,
      "priority": 200,
      "autoRestart": true,
      "pid": 12346
    },
    "x11vnc": {
      "running": true,
      "priority": 300,
      "autoRestart": true,
      "pid": 12347
    },
    "novnc": {
      "running": true,
      "priority": 400,
      "autoRestart": true,
      "pid": 12348
    }
  }
}
```

<h3 id="deprecated-start-computer-use-processes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Computer use processes started successfully|[ComputerUseStartResponse](#schemacomputerusestartresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Stop computer use processes

<a id="opIdstopComputerUse_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/computeruse/stop \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /toolbox/{sandboxId}/toolbox/computeruse/stop`

<aside class="warning">
This operation is deprecated
</aside>

Stop all VNC desktop processes (Xvfb, xfce4, x11vnc, novnc)

<h3 id="deprecated-stop-computer-use-processes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "message": "Computer use processes stopped successfully",
  "status": {
    "xvfb": {
      "running": false,
      "priority": 100,
      "autoRestart": true
    },
    "xfce4": {
      "running": false,
      "priority": 200,
      "autoRestart": true
    },
    "x11vnc": {
      "running": false,
      "priority": 300,
      "autoRestart": true
    },
    "novnc": {
      "running": false,
      "priority": 400,
      "autoRestart": true
    }
  }
}
```

<h3 id="deprecated-stop-computer-use-processes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Computer use processes stopped successfully|[ComputerUseStopResponse](#schemacomputerusestopresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Get computer use status

<a id="opIdgetComputerUseStatus_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/computeruse/status \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolbox/{sandboxId}/toolbox/computeruse/status`

<aside class="warning">
This operation is deprecated
</aside>

Get status of all VNC desktop processes

<h3 id="deprecated-get-computer-use-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "active"
}
```

<h3 id="deprecated-get-computer-use-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Computer use status retrieved successfully|[ComputerUseStatusResponse](#schemacomputerusestatusresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Get process status

<a id="opIdgetProcessStatus_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/computeruse/process/string/status \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolbox/{sandboxId}/toolbox/computeruse/process/{processName}/status`

<aside class="warning">
This operation is deprecated
</aside>

Get status of a specific VNC process

<h3 id="deprecated-get-process-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|processName|path|string|true|none|
|sandboxId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "running": true,
  "processName": "xfce4"
}
```

<h3 id="deprecated-get-process-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Process status retrieved successfully|[ProcessStatusResponse](#schemaprocessstatusresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Restart process

<a id="opIdrestartProcess_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/computeruse/process/string/restart \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /toolbox/{sandboxId}/toolbox/computeruse/process/{processName}/restart`

<aside class="warning">
This operation is deprecated
</aside>

Restart a specific VNC process

<h3 id="deprecated-restart-process-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|processName|path|string|true|none|
|sandboxId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "processName": "xfce4",
  "message": "Process xfce4 restarted successfully"
}
```

<h3 id="deprecated-restart-process-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Process restarted successfully|[ProcessRestartResponse](#schemaprocessrestartresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Get process logs

<a id="opIdgetProcessLogs_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/computeruse/process/string/logs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolbox/{sandboxId}/toolbox/computeruse/process/{processName}/logs`

<aside class="warning">
This operation is deprecated
</aside>

Get logs for a specific VNC process

<h3 id="deprecated-get-process-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|processName|path|string|true|none|
|sandboxId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "processName": "novnc",
  "logs": "2024-01-15 10:30:45 [INFO] NoVNC server started on port 6080"
}
```

<h3 id="deprecated-get-process-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Process logs retrieved successfully|[ProcessLogsResponse](#schemaprocesslogsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Get process errors

<a id="opIdgetProcessErrors_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/computeruse/process/string/errors \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolbox/{sandboxId}/toolbox/computeruse/process/{processName}/errors`

<aside class="warning">
This operation is deprecated
</aside>

Get error logs for a specific VNC process

<h3 id="deprecated-get-process-errors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|processName|path|string|true|none|
|sandboxId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "processName": "x11vnc",
  "errors": "2024-01-15 10:30:45 [ERROR] Failed to bind to port 5901"
}
```

<h3 id="deprecated-get-process-errors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Process errors retrieved successfully|[ProcessErrorsResponse](#schemaprocesserrorsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Get mouse position

<a id="opIdgetMousePosition_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/computeruse/mouse/position \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolbox/{sandboxId}/toolbox/computeruse/mouse/position`

<aside class="warning">
This operation is deprecated
</aside>

Get current mouse cursor position

<h3 id="deprecated-get-mouse-position-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "x": 100,
  "y": 200
}
```

<h3 id="deprecated-get-mouse-position-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Mouse position retrieved successfully|[MousePosition](#schemamouseposition)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Move mouse

<a id="opIdmoveMouse_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/computeruse/mouse/move \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "x": 150,
    "y": 250
  }'
```

`POST /toolbox/{sandboxId}/toolbox/computeruse/mouse/move`

<aside class="warning">
This operation is deprecated
</aside>

Move mouse cursor to specified coordinates

> Body parameter

```json
{
  "x": 150,
  "y": 250
}
```

<h3 id="deprecated-move-mouse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|body|body|[MouseMoveRequest](#schemamousemoverequest)|true|none|
|» x|body|number|true|The target X coordinate to move the mouse cursor to|
|» y|body|number|true|The target Y coordinate to move the mouse cursor to|

> Example responses

> 200 Response

```json
{
  "x": 150,
  "y": 250
}
```

<h3 id="deprecated-move-mouse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Mouse moved successfully|[MouseMoveResponse](#schemamousemoveresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Click mouse

<a id="opIdclickMouse_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/computeruse/mouse/click \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "button": "left",
    "double": false,
    "x": 100,
    "y": 200
  }'
```

`POST /toolbox/{sandboxId}/toolbox/computeruse/mouse/click`

<aside class="warning">
This operation is deprecated
</aside>

Click mouse at specified coordinates

> Body parameter

```json
{
  "button": "left",
  "double": false,
  "x": 100,
  "y": 200
}
```

<h3 id="deprecated-click-mouse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|body|body|[MouseClickRequest](#schemamouseclickrequest)|true|none|
|» x|body|number|true|The X coordinate where to perform the mouse click|
|» y|body|number|true|The Y coordinate where to perform the mouse click|
|» button|body|string|false|The mouse button to click (left, right, middle). Defaults to left|
|» double|body|boolean|false|Whether to perform a double-click instead of a single click|

> Example responses

> 200 Response

```json
{
  "x": 100,
  "y": 200
}
```

<h3 id="deprecated-click-mouse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Mouse clicked successfully|[MouseClickResponse](#schemamouseclickresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Drag mouse

<a id="opIddragMouse_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/computeruse/mouse/drag \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "button": "left",
    "endY": 400,
    "endX": 300,
    "startY": 200,
    "startX": 100
  }'
```

`POST /toolbox/{sandboxId}/toolbox/computeruse/mouse/drag`

<aside class="warning">
This operation is deprecated
</aside>

Drag mouse from start to end coordinates

> Body parameter

```json
{
  "button": "left",
  "endY": 400,
  "endX": 300,
  "startY": 200,
  "startX": 100
}
```

<h3 id="deprecated-drag-mouse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|body|body|[MouseDragRequest](#schemamousedragrequest)|true|none|
|» startX|body|number|true|The starting X coordinate for the drag operation|
|» startY|body|number|true|The starting Y coordinate for the drag operation|
|» endX|body|number|true|The ending X coordinate for the drag operation|
|» endY|body|number|true|The ending Y coordinate for the drag operation|
|» button|body|string|false|The mouse button to use for dragging (left, right, middle). Defaults to left|

> Example responses

> 200 Response

```json
{
  "x": 300,
  "y": 400
}
```

<h3 id="deprecated-drag-mouse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Mouse dragged successfully|[MouseDragResponse](#schemamousedragresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Scroll mouse

<a id="opIdscrollMouse_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/computeruse/mouse/scroll \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "amount": 3,
    "x": 100,
    "y": 200,
    "direction": "down"
  }'
```

`POST /toolbox/{sandboxId}/toolbox/computeruse/mouse/scroll`

<aside class="warning">
This operation is deprecated
</aside>

Scroll mouse at specified coordinates

> Body parameter

```json
{
  "amount": 3,
  "x": 100,
  "y": 200,
  "direction": "down"
}
```

<h3 id="deprecated-scroll-mouse-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|body|body|[MouseScrollRequest](#schemamousescrollrequest)|true|none|
|» x|body|number|true|The X coordinate where to perform the scroll operation|
|» y|body|number|true|The Y coordinate where to perform the scroll operation|
|» direction|body|string|true|The scroll direction (up, down)|
|» amount|body|number|false|The number of scroll units to scroll. Defaults to 1|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="deprecated-scroll-mouse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Mouse scrolled successfully|[MouseScrollResponse](#schemamousescrollresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Type text

<a id="opIdtypeText_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/computeruse/keyboard/type \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "delay": 100,
    "text": "Hello, World!"
  }'
```

`POST /toolbox/{sandboxId}/toolbox/computeruse/keyboard/type`

<aside class="warning">
This operation is deprecated
</aside>

Type text using keyboard

> Body parameter

```json
{
  "delay": 100,
  "text": "Hello, World!"
}
```

<h3 id="deprecated-type-text-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|body|body|[KeyboardTypeRequest](#schemakeyboardtyperequest)|true|none|
|» text|body|string|true|The text to type using the keyboard|
|» delay|body|number|false|Delay in milliseconds between keystrokes. Defaults to 0|

<h3 id="deprecated-type-text-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Text typed successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Press key

<a id="opIdpressKey_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/computeruse/keyboard/key \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "modifiers": [
      "ctrl",
      "shift"
    ],
    "key": "enter"
  }'
```

`POST /toolbox/{sandboxId}/toolbox/computeruse/keyboard/key`

<aside class="warning">
This operation is deprecated
</aside>

Press a key with optional modifiers

> Body parameter

```json
{
  "modifiers": [
    "ctrl",
    "shift"
  ],
  "key": "enter"
}
```

<h3 id="deprecated-press-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|body|body|[KeyboardPressRequest](#schemakeyboardpressrequest)|true|none|
|» key|body|string|true|The key to press (e.g., a, b, c, enter, space, etc.)|
|» modifiers|body|[string]|false|Array of modifier keys to press along with the main key (ctrl, alt, shift, cmd)|

<h3 id="deprecated-press-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Key pressed successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Press hotkey

<a id="opIdpressHotkey_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/computeruse/keyboard/hotkey \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "keys": "ctrl+c"
  }'
```

`POST /toolbox/{sandboxId}/toolbox/computeruse/keyboard/hotkey`

<aside class="warning">
This operation is deprecated
</aside>

Press a hotkey combination

> Body parameter

```json
{
  "keys": "ctrl+c"
}
```

<h3 id="deprecated-press-hotkey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|body|body|[KeyboardHotkeyRequest](#schemakeyboardhotkeyrequest)|true|none|
|» keys|body|string|true|The hotkey combination to press (e.g., "ctrl+c", "cmd+v", "alt+tab")|

<h3 id="deprecated-press-hotkey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Hotkey pressed successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Take screenshot

<a id="opIdtakeScreenshot_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/computeruse/screenshot \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolbox/{sandboxId}/toolbox/computeruse/screenshot`

<aside class="warning">
This operation is deprecated
</aside>

Take a screenshot of the entire screen

<h3 id="deprecated-take-screenshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|show_cursor|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "cursorPosition": {
    "x": 500,
    "y": 300
  },
  "screenshot": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
  "sizeBytes": 24576
}
```

<h3 id="deprecated-take-screenshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Screenshot taken successfully|[ScreenshotResponse](#schemascreenshotresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Take region screenshot

<a id="opIdtakeRegionScreenshot_deprecated"></a>

> Code samples

```bash
curl 'http://localhost:3000/toolbox/string/toolbox/computeruse/screenshot/region?height=0&width=0&y=0&x=0' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolbox/{sandboxId}/toolbox/computeruse/screenshot/region`

<aside class="warning">
This operation is deprecated
</aside>

Take a screenshot of a specific region

<h3 id="deprecated-take-region-screenshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|show_cursor|query|boolean|false|none|
|height|query|number|true|none|
|width|query|number|true|none|
|y|query|number|true|none|
|x|query|number|true|none|

> Example responses

> 200 Response

```json
{
  "cursorPosition": {
    "x": 500,
    "y": 300
  },
  "screenshot": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
  "sizeBytes": 24576
}
```

<h3 id="deprecated-take-region-screenshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Region screenshot taken successfully|[RegionScreenshotResponse](#schemaregionscreenshotresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Take compressed screenshot

<a id="opIdtakeCompressedScreenshot_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/computeruse/screenshot/compressed \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolbox/{sandboxId}/toolbox/computeruse/screenshot/compressed`

<aside class="warning">
This operation is deprecated
</aside>

Take a compressed screenshot with format, quality, and scale options

<h3 id="deprecated-take-compressed-screenshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|scale|query|number|false|none|
|quality|query|number|false|none|
|format|query|string|false|none|
|show_cursor|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "cursorPosition": {
    "x": 250,
    "y": 150
  },
  "screenshot": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
  "sizeBytes": 12288
}
```

<h3 id="deprecated-take-compressed-screenshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Compressed screenshot taken successfully|[CompressedScreenshotResponse](#schemacompressedscreenshotresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Take compressed region screenshot

<a id="opIdtakeCompressedRegionScreenshot_deprecated"></a>

> Code samples

```bash
curl 'http://localhost:3000/toolbox/string/toolbox/computeruse/screenshot/region/compressed?height=0&width=0&y=0&x=0' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolbox/{sandboxId}/toolbox/computeruse/screenshot/region/compressed`

<aside class="warning">
This operation is deprecated
</aside>

Take a compressed screenshot of a specific region

<h3 id="deprecated-take-compressed-region-screenshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|
|scale|query|number|false|none|
|quality|query|number|false|none|
|format|query|string|false|none|
|show_cursor|query|boolean|false|none|
|height|query|number|true|none|
|width|query|number|true|none|
|y|query|number|true|none|
|x|query|number|true|none|

> Example responses

> 200 Response

```json
{
  "cursorPosition": {
    "x": 250,
    "y": 150
  },
  "screenshot": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
  "sizeBytes": 12288
}
```

<h3 id="deprecated-take-compressed-region-screenshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Compressed region screenshot taken successfully|[CompressedScreenshotResponse](#schemacompressedscreenshotresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Get display info

<a id="opIdgetDisplayInfo_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/computeruse/display/info \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolbox/{sandboxId}/toolbox/computeruse/display/info`

<aside class="warning">
This operation is deprecated
</aside>

Get information about displays

<h3 id="deprecated-get-display-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "displays": [
    {
      "id": 0,
      "x": 0,
      "y": 0,
      "width": 1920,
      "height": 1080,
      "is_active": true
    }
  ]
}
```

<h3 id="deprecated-get-display-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Display info retrieved successfully|[DisplayInfoResponse](#schemadisplayinforesponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## [DEPRECATED] Get windows

<a id="opIdgetWindows_deprecated"></a>

> Code samples

```bash
curl http://localhost:3000/toolbox/string/toolbox/computeruse/display/windows \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /toolbox/{sandboxId}/toolbox/computeruse/display/windows`

<aside class="warning">
This operation is deprecated
</aside>

Get list of open windows

<h3 id="deprecated-get-windows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|sandboxId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "count": 5,
  "windows": [
    {
      "id": 12345,
      "title": "Terminal"
    }
  ]
}
```

<h3 id="deprecated-get-windows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Windows list retrieved successfully|[WindowsResponse](#schemawindowsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

<h1 id="daytona-snapshots">snapshots</h1>

## List all snapshots

<a id="opIdgetAllSnapshots"></a>

> Code samples

```bash
curl http://localhost:3000/snapshots \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /snapshots`

<h3 id="list-all-snapshots-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|page|query|number|false|Page number of the results|
|limit|query|number|false|Number of results per page|
|name|query|string|false|Filter by partial name match|
|sort|query|string|false|Field to sort by|
|order|query|string|false|Direction to sort by|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|name|
|sort|state|
|sort|lastUsedAt|
|sort|createdAt|
|order|asc|
|order|desc|

> Example responses

> 200 Response

```json
{
  "total": 2.3021358869347655,
  "totalPages": 9.301444243932576,
  "page": 7.061401241503109,
  "items": [
    {
      "imageName": "imageName",
      "buildInfo": "",
      "cpu": 6.027456183070403,
      "regionIds": [
        "regionIds",
        "regionIds"
      ],
      "gpu": 1.4658129805029452,
      "organizationId": "organizationId",
      "general": true,
      "createdAt": "2000-01-23T04:56:07.000+00:00",
      "disk": 5.637376656633329,
      "ref": "daytonaio/sandbox:latest",
      "size": 0.8008281904610115,
      "mem": 5.962133916683182,
      "lastUsedAt": "2000-01-23T04:56:07.000+00:00",
      "entrypoint": [
        "entrypoint",
        "entrypoint"
      ],
      "errorReason": "errorReason",
      "name": "name",
      "id": "id",
      "state": "",
      "initialRunnerId": "runner123",
      "gpuType": "H100",
      "updatedAt": "2000-01-23T04:56:07.000+00:00",
      "sandboxClass": "linux-vm"
    },
    {
      "imageName": "imageName",
      "buildInfo": "",
      "cpu": 6.027456183070403,
      "regionIds": [
        "regionIds",
        "regionIds"
      ],
      "gpu": 1.4658129805029452,
      "organizationId": "organizationId",
      "general": true,
      "createdAt": "2000-01-23T04:56:07.000+00:00",
      "disk": 5.637376656633329,
      "ref": "daytonaio/sandbox:latest",
      "size": 0.8008281904610115,
      "mem": 5.962133916683182,
      "lastUsedAt": "2000-01-23T04:56:07.000+00:00",
      "entrypoint": [
        "entrypoint",
        "entrypoint"
      ],
      "errorReason": "errorReason",
      "name": "name",
      "id": "id",
      "state": "",
      "initialRunnerId": "runner123",
      "gpuType": "H100",
      "updatedAt": "2000-01-23T04:56:07.000+00:00",
      "sandboxClass": "linux-vm"
    }
  ]
}
```

<h3 id="list-all-snapshots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Paginated list of all snapshots|[PaginatedSnapshots](#schemapaginatedsnapshots)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Create a new snapshot

<a id="opIdcreateSnapshot"></a>

> Code samples

```bash
curl http://localhost:3000/snapshots \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "disk": 3,
    "imageName": "ubuntu:22.04",
    "memory": 1,
    "buildInfo": "",
    "regionId": "regionId",
    "entrypoint": "sleep infinity",
    "name": "ubuntu-4vcpu-8ram-100gb",
    "cpu": 1,
    "gpu": 0,
    "gpuType": [
      "H100"
    ],
    "sandboxClass": "linux-vm"
  }'
```

`POST /snapshots`

> Body parameter

```json
{
  "disk": 3,
  "imageName": "ubuntu:22.04",
  "memory": 1,
  "buildInfo": "",
  "regionId": "regionId",
  "entrypoint": "sleep infinity",
  "name": "ubuntu-4vcpu-8ram-100gb",
  "cpu": 1,
  "gpu": 0,
  "gpuType": [
    "H100"
  ],
  "sandboxClass": "linux-vm"
}
```

<h3 id="create-a-new-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|body|body|[CreateSnapshot](#schemacreatesnapshot)|true|none|
|» name|body|string|true|The name of the snapshot|
|» imageName|body|string|false|The image name of the snapshot|
|» entrypoint|body|[string]|false|The entrypoint command for the snapshot|
|» cpu|body|integer|false|CPU cores allocated to the resulting sandbox|
|» gpu|body|integer|false|GPU units allocated to the resulting sandbox|
|» gpuType|body|[[GpuType](#schemagputype)]|false|Preferred GPU type for the resulting sandbox.|
|» memory|body|integer|false|Memory allocated to the resulting sandbox in GB|
|» disk|body|integer|false|Disk space allocated to the sandbox in GB|
|» buildInfo|body|object|false|Build information for the snapshot|
|» » dockerfileContent|body|string|true|The Dockerfile content used for the build|
|» » contextHashes|body|[string]|false|The context hashes used for the build|
|» regionId|body|string|false|ID of the region where the snapshot will be available. Defaults to organization default region if not specified.|
|» sandboxClass|body|object|false|Target sandbox class. Determines which runners can host sandboxes created from this snapshot.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» gpuType|H100|
|» gpuType|RTX-PRO-6000|

> Example responses

> 200 Response

```json
{
  "imageName": "imageName",
  "buildInfo": "",
  "cpu": 6.027456183070403,
  "regionIds": [
    "regionIds",
    "regionIds"
  ],
  "gpu": 1.4658129805029452,
  "organizationId": "organizationId",
  "general": true,
  "createdAt": "2000-01-23T04:56:07.000+00:00",
  "disk": 5.637376656633329,
  "ref": "daytonaio/sandbox:latest",
  "size": 0.8008281904610115,
  "mem": 5.962133916683182,
  "lastUsedAt": "2000-01-23T04:56:07.000+00:00",
  "entrypoint": [
    "entrypoint",
    "entrypoint"
  ],
  "errorReason": "errorReason",
  "name": "name",
  "id": "id",
  "state": "",
  "initialRunnerId": "runner123",
  "gpuType": "H100",
  "updatedAt": "2000-01-23T04:56:07.000+00:00",
  "sandboxClass": "linux-vm"
}
```

<h3 id="create-a-new-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The snapshot has been successfully created.|[SnapshotDto](#schemasnapshotdto)|
|400|Bad Request|Bad request - Snapshots with tag ":latest" are not allowed|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get snapshot by ID or name

<a id="opIdgetSnapshot"></a>

> Code samples

```bash
curl http://localhost:3000/snapshots/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /snapshots/{id}`

<h3 id="get-snapshot-by-id-or-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|id|path|string|true|Snapshot ID or name|

> Example responses

> 200 Response

```json
{
  "imageName": "imageName",
  "buildInfo": "",
  "cpu": 6.027456183070403,
  "regionIds": [
    "regionIds",
    "regionIds"
  ],
  "gpu": 1.4658129805029452,
  "organizationId": "organizationId",
  "general": true,
  "createdAt": "2000-01-23T04:56:07.000+00:00",
  "disk": 5.637376656633329,
  "ref": "daytonaio/sandbox:latest",
  "size": 0.8008281904610115,
  "mem": 5.962133916683182,
  "lastUsedAt": "2000-01-23T04:56:07.000+00:00",
  "entrypoint": [
    "entrypoint",
    "entrypoint"
  ],
  "errorReason": "errorReason",
  "name": "name",
  "id": "id",
  "state": "",
  "initialRunnerId": "runner123",
  "gpuType": "H100",
  "updatedAt": "2000-01-23T04:56:07.000+00:00",
  "sandboxClass": "linux-vm"
}
```

<h3 id="get-snapshot-by-id-or-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The snapshot|[SnapshotDto](#schemasnapshotdto)|
|404|Not Found|Snapshot not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Delete snapshot

<a id="opIdremoveSnapshot"></a>

> Code samples

```bash
curl http://localhost:3000/snapshots/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /snapshots/{id}`

<h3 id="delete-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|id|path|string|true|Snapshot ID|

<h3 id="delete-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Snapshot has been deleted|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get snapshot build logs

<a id="opIdgetSnapshotBuildLogs"></a>

> Code samples

```bash
curl http://localhost:3000/snapshots/string/build-logs \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /snapshots/{id}/build-logs`

<aside class="warning">
This operation is deprecated
</aside>

This endpoint is deprecated. Use `getSnapshotBuildLogsUrl` instead.

<h3 id="get-snapshot-build-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|id|path|string|true|Snapshot ID|
|follow|query|boolean|false|Whether to follow the logs stream|

<h3 id="get-snapshot-build-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get snapshot build logs URL

<a id="opIdgetSnapshotBuildLogsUrl"></a>

> Code samples

```bash
curl http://localhost:3000/snapshots/string/build-logs-url \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /snapshots/{id}/build-logs-url`

<h3 id="get-snapshot-build-logs-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|id|path|string|true|Snapshot ID|

> Example responses

> 200 Response

```json
{
  "url": "url"
}
```

<h3 id="get-snapshot-build-logs-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The snapshot build logs URL|[Url](#schemaurl)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Activate a snapshot

<a id="opIdactivateSnapshot"></a>

> Code samples

```bash
curl http://localhost:3000/snapshots/string/activate \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /snapshots/{id}/activate`

<h3 id="activate-a-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|id|path|string|true|Snapshot ID|

> Example responses

> 200 Response

```json
{
  "imageName": "imageName",
  "buildInfo": "",
  "cpu": 6.027456183070403,
  "regionIds": [
    "regionIds",
    "regionIds"
  ],
  "gpu": 1.4658129805029452,
  "organizationId": "organizationId",
  "general": true,
  "createdAt": "2000-01-23T04:56:07.000+00:00",
  "disk": 5.637376656633329,
  "ref": "daytonaio/sandbox:latest",
  "size": 0.8008281904610115,
  "mem": 5.962133916683182,
  "lastUsedAt": "2000-01-23T04:56:07.000+00:00",
  "entrypoint": [
    "entrypoint",
    "entrypoint"
  ],
  "errorReason": "errorReason",
  "name": "name",
  "id": "id",
  "state": "",
  "initialRunnerId": "runner123",
  "gpuType": "H100",
  "updatedAt": "2000-01-23T04:56:07.000+00:00",
  "sandboxClass": "linux-vm"
}
```

<h3 id="activate-a-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The snapshot has been successfully activated.|[SnapshotDto](#schemasnapshotdto)|
|400|Bad Request|Bad request - Snapshot is already active, not in inactive state, or has associated snapshot runners|None|
|404|Not Found|Snapshot not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Deactivate a snapshot

<a id="opIddeactivateSnapshot"></a>

> Code samples

```bash
curl http://localhost:3000/snapshots/string/deactivate \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /snapshots/{id}/deactivate`

<h3 id="deactivate-a-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|id|path|string|true|Snapshot ID|

<h3 id="deactivate-a-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The snapshot has been successfully deactivated.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

<h1 id="daytona-preview">preview</h1>

## Check if sandbox is public

<a id="opIdisSandboxPublic"></a>

> Code samples

```bash
curl http://localhost:3000/preview/string/public \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /preview/{sandboxId}/public`

<h3 id="check-if-sandbox-is-public-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sandboxId|path|string|true|ID of the sandbox|

> Example responses

> 200 Response

```json
true
```

<h3 id="check-if-sandbox-is-public-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Public status of the sandbox|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Check if sandbox auth token is valid

<a id="opIdisValidAuthToken"></a>

> Code samples

```bash
curl http://localhost:3000/preview/string/validate/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /preview/{sandboxId}/validate/{authToken}`

<h3 id="check-if-sandbox-auth-token-is-valid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sandboxId|path|string|true|ID of the sandbox|
|authToken|path|string|true|Auth token of the sandbox|

> Example responses

> 200 Response

```json
true
```

<h3 id="check-if-sandbox-auth-token-is-valid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sandbox auth token validation status|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Check if user has access to the sandbox

<a id="opIdhasSandboxAccess"></a>

> Code samples

```bash
curl http://localhost:3000/preview/string/access \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /preview/{sandboxId}/access`

<h3 id="check-if-user-has-access-to-the-sandbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sandboxId|path|string|true|none|

> Example responses

> 200 Response

```json
true
```

<h3 id="check-if-user-has-access-to-the-sandbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User access status to the sandbox|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get sandbox ID from signed preview URL token

<a id="opIdgetSandboxIdFromSignedPreviewUrlToken"></a>

> Code samples

```bash
curl http://localhost:3000/preview/string/0/sandbox-id \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /preview/{signedPreviewToken}/{port}/sandbox-id`

<h3 id="get-sandbox-id-from-signed-preview-url-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|signedPreviewToken|path|string|true|Signed preview URL token|
|port|path|number|true|Port number to get sandbox ID from signed preview URL token|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="get-sandbox-id-from-signed-preview-url-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sandbox ID from signed preview URL token|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

<h1 id="daytona-volumes">volumes</h1>

## List all volumes

<a id="opIdlistVolumes"></a>

> Code samples

```bash
curl http://localhost:3000/volumes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /volumes`

<h3 id="list-all-volumes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|includeDeleted|query|boolean|false|Include deleted volumes in the response|

> Example responses

> 200 Response

```json
[
  {
    "organizationId": "123e4567-e89b-12d3-a456-426614174000",
    "createdAt": "2023-01-01T00:00:00.000Z",
    "lastUsedAt": "2023-01-01T00:00:00.000Z",
    "errorReason": "Error processing volume",
    "name": "my-volume",
    "id": "vol-12345678",
    "state": "ready",
    "updatedAt": "2023-01-01T00:00:00.000Z"
  }
]
```

<h3 id="list-all-volumes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all volumes|Inline|

<h3 id="list-all-volumes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[VolumeDto](#schemavolumedto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Create a new volume

<a id="opIdcreateVolume"></a>

> Code samples

```bash
curl http://localhost:3000/volumes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "name"
  }'
```

`POST /volumes`

> Body parameter

```json
{
  "name": "name"
}
```

<h3 id="create-a-new-volume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|body|body|[CreateVolume](#schemacreatevolume)|true|none|
|» name|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "organizationId": "123e4567-e89b-12d3-a456-426614174000",
  "createdAt": "2023-01-01T00:00:00.000Z",
  "lastUsedAt": "2023-01-01T00:00:00.000Z",
  "errorReason": "Error processing volume",
  "name": "my-volume",
  "id": "vol-12345678",
  "state": "ready",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

<h3 id="create-a-new-volume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The volume has been successfully created.|[VolumeDto](#schemavolumedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get volume details

<a id="opIdgetVolume"></a>

> Code samples

```bash
curl http://localhost:3000/volumes/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /volumes/{volumeId}`

<h3 id="get-volume-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|volumeId|path|string|true|ID of the volume|

> Example responses

> 200 Response

```json
{
  "organizationId": "123e4567-e89b-12d3-a456-426614174000",
  "createdAt": "2023-01-01T00:00:00.000Z",
  "lastUsedAt": "2023-01-01T00:00:00.000Z",
  "errorReason": "Error processing volume",
  "name": "my-volume",
  "id": "vol-12345678",
  "state": "ready",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

<h3 id="get-volume-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Volume details|[VolumeDto](#schemavolumedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Delete volume

<a id="opIddeleteVolume"></a>

> Code samples

```bash
curl http://localhost:3000/volumes/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /volumes/{volumeId}`

<h3 id="delete-volume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|volumeId|path|string|true|ID of the volume|

<h3 id="delete-volume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Volume has been marked for deletion|None|
|409|Conflict|Volume is in use by one or more sandboxes|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get volume details by name

<a id="opIdgetVolumeByName"></a>

> Code samples

```bash
curl http://localhost:3000/volumes/by-name/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /volumes/by-name/{name}`

<h3 id="get-volume-details-by-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|name|path|string|true|Name of the volume|

> Example responses

> 200 Response

```json
{
  "organizationId": "123e4567-e89b-12d3-a456-426614174000",
  "createdAt": "2023-01-01T00:00:00.000Z",
  "lastUsedAt": "2023-01-01T00:00:00.000Z",
  "errorReason": "Error processing volume",
  "name": "my-volume",
  "id": "vol-12345678",
  "state": "ready",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

<h3 id="get-volume-details-by-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Volume details|[VolumeDto](#schemavolumedto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

<h1 id="daytona-jobs">jobs</h1>

## List jobs for the runner

<a id="opIdlistJobs"></a>

> Code samples

```bash
curl http://localhost:3000/jobs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /jobs`

Returns a paginated list of jobs for the runner, optionally filtered by status.

<h3 id="list-jobs-for-the-runner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|false|Page number of the results|
|limit|query|number|false|Maximum number of jobs to return (default: 100, max: 500)|
|status|query|[JobStatus](#schemajobstatus)|false|Filter jobs by status|
|offset|query|number|false|Number of jobs to skip for pagination (default: 0)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|PENDING|
|status|IN_PROGRESS|
|status|COMPLETED|
|status|FAILED|

> Example responses

> 200 Response

```json
{
  "total": 0.8008281904610115,
  "totalPages": 1.4658129805029452,
  "page": 6.027456183070403,
  "items": [
    {
      "createdAt": "2024-10-01T12:00:00Z",
      "resourceId": "sandbox123",
      "payload": "payload",
      "errorMessage": "Failed to create sandbox",
      "id": "job123",
      "type": "CREATE_SANDBOX",
      "traceContext": {
        "traceparent": "00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01"
      },
      "status": "PENDING",
      "resourceType": "SANDBOX",
      "updatedAt": "2024-10-01T12:00:00Z"
    },
    {
      "createdAt": "2024-10-01T12:00:00Z",
      "resourceId": "sandbox123",
      "payload": "payload",
      "errorMessage": "Failed to create sandbox",
      "id": "job123",
      "type": "CREATE_SANDBOX",
      "traceContext": {
        "traceparent": "00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01"
      },
      "status": "PENDING",
      "resourceType": "SANDBOX",
      "updatedAt": "2024-10-01T12:00:00Z"
    }
  ]
}
```

<h3 id="list-jobs-for-the-runner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of jobs for the runner|[PaginatedJobs](#schemapaginatedjobs)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Long poll for jobs

<a id="opIdpollJobs"></a>

> Code samples

```bash
curl http://localhost:3000/jobs/poll \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /jobs/poll`

Long poll endpoint for runners to fetch pending jobs. Returns immediately if jobs are available, otherwise waits up to timeout seconds.

<h3 id="long-poll-for-jobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|timeout|query|number|false|Timeout in seconds for long polling (default: 30, max: 60)|
|limit|query|number|false|Maximum number of jobs to return (default: 10, max: 100)|

> Example responses

> 200 Response

```json
{
  "jobs": [
    {
      "createdAt": "2024-10-01T12:00:00Z",
      "resourceId": "sandbox123",
      "payload": "payload",
      "errorMessage": "Failed to create sandbox",
      "id": "job123",
      "type": "CREATE_SANDBOX",
      "traceContext": {
        "traceparent": "00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01"
      },
      "status": "PENDING",
      "resourceType": "SANDBOX",
      "updatedAt": "2024-10-01T12:00:00Z"
    },
    {
      "createdAt": "2024-10-01T12:00:00Z",
      "resourceId": "sandbox123",
      "payload": "payload",
      "errorMessage": "Failed to create sandbox",
      "id": "job123",
      "type": "CREATE_SANDBOX",
      "traceContext": {
        "traceparent": "00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01"
      },
      "status": "PENDING",
      "resourceType": "SANDBOX",
      "updatedAt": "2024-10-01T12:00:00Z"
    }
  ]
}
```

<h3 id="long-poll-for-jobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of jobs for the runner|[PollJobsResponse](#schemapolljobsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get job details

<a id="opIdgetJob"></a>

> Code samples

```bash
curl http://localhost:3000/jobs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /jobs/{jobId}`

<h3 id="get-job-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|ID of the job|

> Example responses

> 200 Response

```json
{
  "createdAt": "2024-10-01T12:00:00Z",
  "resourceId": "sandbox123",
  "payload": "payload",
  "errorMessage": "Failed to create sandbox",
  "id": "job123",
  "type": "CREATE_SANDBOX",
  "traceContext": {
    "traceparent": "00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01"
  },
  "status": "PENDING",
  "resourceType": "SANDBOX",
  "updatedAt": "2024-10-01T12:00:00Z"
}
```

<h3 id="get-job-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Job details|[Job](#schemajob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Update job status

<a id="opIdupdateJobStatus"></a>

> Code samples

```bash
curl http://localhost:3000/jobs/string/status \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "resultMetadata": "resultMetadata",
    "errorMessage": "Failed to create sandbox",
    "status": "IN_PROGRESS"
  }'
```

`POST /jobs/{jobId}/status`

> Body parameter

```json
{
  "resultMetadata": "resultMetadata",
  "errorMessage": "Failed to create sandbox",
  "status": "IN_PROGRESS"
}
```

<h3 id="update-job-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|ID of the job|
|body|body|[UpdateJobStatus](#schemaupdatejobstatus)|true|none|
|» status|body|object|true|The new status of the job|
|» errorMessage|body|string|false|Error message if the job failed|
|» resultMetadata|body|string|false|Result metadata for the job|

> Example responses

> 200 Response

```json
{
  "createdAt": "2024-10-01T12:00:00Z",
  "resourceId": "sandbox123",
  "payload": "payload",
  "errorMessage": "Failed to create sandbox",
  "id": "job123",
  "type": "CREATE_SANDBOX",
  "traceContext": {
    "traceparent": "00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01"
  },
  "status": "PENDING",
  "resourceType": "SANDBOX",
  "updatedAt": "2024-10-01T12:00:00Z"
}
```

<h3 id="update-job-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Job status updated successfully|[Job](#schemajob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

<h1 id="daytona-docker-registry">docker-registry</h1>

## List registries

<a id="opIdlistRegistries"></a>

> Code samples

```bash
curl http://localhost:3000/docker-registry \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /docker-registry`

<h3 id="list-registries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|

> Example responses

> 200 Response

```json
[
  {
    "registryType": "internal",
    "createdAt": "2024-01-31T12:00:00Z",
    "name": "My Docker Hub",
    "project": "my-project",
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "url": "https://registry.hub.docker.com",
    "username": "username",
    "updatedAt": "2024-01-31T12:00:00Z"
  }
]
```

<h3 id="list-registries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all docker registries|Inline|

<h3 id="list-registries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DockerRegistry](#schemadockerregistry)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Create registry

<a id="opIdcreateRegistry"></a>

> Code samples

```bash
curl http://localhost:3000/docker-registry \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "password": "password",
    "name": "name",
    "project": "project",
    "url": "url",
    "username": "username"
  }'
```

`POST /docker-registry`

> Body parameter

```json
{
  "password": "password",
  "name": "name",
  "project": "project",
  "url": "url",
  "username": "username"
}
```

<h3 id="create-registry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|body|body|[CreateDockerRegistry](#schemacreatedockerregistry)|true|none|
|» name|body|string|true|Registry name|
|» url|body|string|true|Registry URL|
|» username|body|string|true|Registry username|
|» password|body|string|true|Registry password|
|» project|body|string|false|Registry project|

> Example responses

> 201 Response

```json
{
  "registryType": "internal",
  "createdAt": "2024-01-31T12:00:00Z",
  "name": "My Docker Hub",
  "project": "my-project",
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "url": "https://registry.hub.docker.com",
  "username": "username",
  "updatedAt": "2024-01-31T12:00:00Z"
}
```

<h3 id="create-registry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The docker registry has been successfully created.|[DockerRegistry](#schemadockerregistry)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get temporary registry access for pushing snapshots

<a id="opIdgetTransientPushAccess"></a>

> Code samples

```bash
curl http://localhost:3000/docker-registry/registry-push-access \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /docker-registry/registry-push-access`

<h3 id="get-temporary-registry-access-for-pushing-snapshots-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|regionId|query|string|false|ID of the region where the snapshot will be available (defaults to organization default region)|

> Example responses

> 200 Response

```json
{
  "registryUrl": "registry.example.com",
  "registryId": "123e4567-e89b-12d3-a456-426614174000",
  "project": "library",
  "secret": "eyJhbGciOiJIUzI1NiIs...",
  "expiresAt": "2023-12-31T23:59:59Z",
  "username": "temp-user-123"
}
```

<h3 id="get-temporary-registry-access-for-pushing-snapshots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Temporary registry access has been generated|[RegistryPushAccessDto](#schemaregistrypushaccessdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get registry

<a id="opIdgetRegistry"></a>

> Code samples

```bash
curl http://localhost:3000/docker-registry/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /docker-registry/{id}`

<h3 id="get-registry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|id|path|string|true|ID of the docker registry|

> Example responses

> 200 Response

```json
{
  "registryType": "internal",
  "createdAt": "2024-01-31T12:00:00Z",
  "name": "My Docker Hub",
  "project": "my-project",
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "url": "https://registry.hub.docker.com",
  "username": "username",
  "updatedAt": "2024-01-31T12:00:00Z"
}
```

<h3 id="get-registry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The docker registry|[DockerRegistry](#schemadockerregistry)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Delete registry

<a id="opIddeleteRegistry"></a>

> Code samples

```bash
curl http://localhost:3000/docker-registry/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /docker-registry/{id}`

<h3 id="delete-registry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|id|path|string|true|ID of the docker registry|

<h3 id="delete-registry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The docker registry has been successfully deleted.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Update registry

<a id="opIdupdateRegistry"></a>

> Code samples

```bash
curl http://localhost:3000/docker-registry/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "password": "password",
    "name": "name",
    "project": "project",
    "url": "url",
    "username": "username"
  }'
```

`PATCH /docker-registry/{id}`

> Body parameter

```json
{
  "password": "password",
  "name": "name",
  "project": "project",
  "url": "url",
  "username": "username"
}
```

<h3 id="update-registry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|id|path|string|true|ID of the docker registry|
|body|body|[UpdateDockerRegistry](#schemaupdatedockerregistry)|true|none|
|» name|body|string|true|Registry name|
|» url|body|string|true|Registry URL|
|» username|body|string|true|Registry username|
|» password|body|string|false|Registry password|
|» project|body|string|false|Registry project|

> Example responses

> 200 Response

```json
{
  "registryType": "internal",
  "createdAt": "2024-01-31T12:00:00Z",
  "name": "My Docker Hub",
  "project": "my-project",
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "url": "https://registry.hub.docker.com",
  "username": "username",
  "updatedAt": "2024-01-31T12:00:00Z"
}
```

<h3 id="update-registry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The docker registry has been successfully updated.|[DockerRegistry](#schemadockerregistry)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

<h1 id="daytona-admin">admin</h1>

## List all runners

<a id="opIdadminListRunners"></a>

> Code samples

```bash
curl http://localhost:3000/admin/runners \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/runners`

<h3 id="list-all-runners-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|regionId|query|string|false|Filter runners by region ID|

> Example responses

> 200 Response

```json
[
  {
    "currentStartedSandboxes": 5,
    "appVersion": "v0.0.0-dev",
    "memory": 16,
    "currentMemoryUsagePercentage": 68.2,
    "apiKey": "dtn_1234567890",
    "availabilityScore": 85,
    "currentDiskUsagePercentage": 33.8,
    "currentCpuUsagePercentage": 45.6,
    "createdAt": "2023-10-01T12:00:00Z",
    "apiVersion": "0",
    "apiUrl": "https://api.runner1.example.com",
    "regionType": "shared",
    "id": "runner123",
    "state": "initializing",
    "unschedulable": false,
    "currentAllocatedDiskGiB": 50000,
    "currentAllocatedMemoryGiB": 8000,
    "gpuType": "gpuType",
    "sandboxClass": "linux-vm",
    "currentAllocatedCpu": 4000,
    "updatedAt": "2023-10-01T12:00:00Z",
    "proxyUrl": "https://proxy.runner1.example.com",
    "cpu": 8,
    "gpu": 1,
    "currentSnapshotCount": 12,
    "version": "0",
    "tags": [
      "gpu",
      "us-east"
    ],
    "disk": 100,
    "domain": "runner1.example.com",
    "name": "runner1",
    "runnerClass": "container",
    "region": "us",
    "lastChecked": "2024-10-01T12:00:00Z"
  }
]
```

<h3 id="list-all-runners-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="list-all-runners-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RunnerFull](#schemarunnerfull)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Create runner

<a id="opIdadminCreateRunner"></a>

> Code samples

```bash
curl http://localhost:3000/admin/runners \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "diskGiB": 100,
    "apiVersion": "2",
    "apiKey": "apiKey",
    "apiUrl": "https://api.runner1.example.com",
    "regionId": "regionId",
    "proxyUrl": "https://proxy.runner1.example.com",
    "memoryGiB": 16,
    "domain": "runner1.example.com",
    "name": "name",
    "cpu": 8,
    "tags": [
      "gpu",
      "us-east"
    ]
  }'
```

`POST /admin/runners`

> Body parameter

```json
{
  "diskGiB": 100,
  "apiVersion": "2",
  "apiKey": "apiKey",
  "apiUrl": "https://api.runner1.example.com",
  "regionId": "regionId",
  "proxyUrl": "https://proxy.runner1.example.com",
  "memoryGiB": 16,
  "domain": "runner1.example.com",
  "name": "name",
  "cpu": 8,
  "tags": [
    "gpu",
    "us-east"
  ]
}
```

<h3 id="create-runner-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminCreateRunner](#schemaadmincreaterunner)|true|none|
|» regionId|body|string|true|none|
|» name|body|string|true|none|
|» tags|body|[string]|false|Tags to associate with the runner|
|» apiKey|body|string|true|none|
|» apiVersion|body|string|true|The api version of the runner to create|
|» domain|body|string|false|The domain of the runner|
|» apiUrl|body|string|false|The API URL of the runner|
|» proxyUrl|body|string|false|The proxy URL of the runner|
|» cpu|body|number|false|The CPU capacity of the runner|
|» memoryGiB|body|number|false|The memory capacity of the runner in GiB|
|» diskGiB|body|number|false|The disk capacity of the runner in GiB|

> Example responses

> 201 Response

```json
{
  "apiKey": "dtn_1234567890",
  "id": "runner123"
}
```

<h3 id="create-runner-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[CreateRunnerResponse](#schemacreaterunnerresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get runner by ID

<a id="opIdadminGetRunnerById"></a>

> Code samples

```bash
curl http://localhost:3000/admin/runners/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/runners/{id}`

<h3 id="get-runner-by-id-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Runner ID|

> Example responses

> 200 Response

```json
{
  "currentStartedSandboxes": 5,
  "appVersion": "v0.0.0-dev",
  "memory": 16,
  "currentMemoryUsagePercentage": 68.2,
  "apiKey": "dtn_1234567890",
  "availabilityScore": 85,
  "currentDiskUsagePercentage": 33.8,
  "currentCpuUsagePercentage": 45.6,
  "createdAt": "2023-10-01T12:00:00Z",
  "apiVersion": "0",
  "apiUrl": "https://api.runner1.example.com",
  "regionType": "shared",
  "id": "runner123",
  "state": "initializing",
  "unschedulable": false,
  "currentAllocatedDiskGiB": 50000,
  "currentAllocatedMemoryGiB": 8000,
  "gpuType": "gpuType",
  "sandboxClass": "linux-vm",
  "currentAllocatedCpu": 4000,
  "updatedAt": "2023-10-01T12:00:00Z",
  "proxyUrl": "https://proxy.runner1.example.com",
  "cpu": 8,
  "gpu": 1,
  "currentSnapshotCount": 12,
  "version": "0",
  "tags": [
    "gpu",
    "us-east"
  ],
  "disk": 100,
  "domain": "runner1.example.com",
  "name": "runner1",
  "runnerClass": "container",
  "region": "us",
  "lastChecked": "2024-10-01T12:00:00Z"
}
```

<h3 id="get-runner-by-id-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[RunnerFull](#schemarunnerfull)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Delete runner

<a id="opIdadminDeleteRunner"></a>

> Code samples

```bash
curl http://localhost:3000/admin/runners/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /admin/runners/{id}`

<h3 id="delete-runner-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Runner ID|

<h3 id="delete-runner-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Update runner scheduling status

<a id="opIdadminUpdateRunnerScheduling"></a>

> Code samples

```bash
curl http://localhost:3000/admin/runners/string/scheduling \
  -X PATCH \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /admin/runners/{id}/scheduling`

<h3 id="update-runner-scheduling-status-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="update-runner-scheduling-status-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Recover sandbox from error state as an admin

<a id="opIdadminRecoverSandbox"></a>

> Code samples

```bash
curl http://localhost:3000/admin/sandbox/string/recover \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /admin/sandbox/{sandboxId}/recover`

<h3 id="recover-sandbox-from-error-state-as-an-admin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sandboxId|path|string|true|ID of the sandbox|

> Example responses

> 200 Response

```json
{
  "memory": 4,
  "linkedSandboxId": "sandbox123",
  "buildInfo": "",
  "toolboxProxyUrl": "https://proxy.app.daytona.io/toolbox",
  "lastActivityAt": "2024-10-01T12:00:00Z",
  "autoStopInterval": 30,
  "organizationId": "organization123",
  "createdAt": "2024-10-01T12:00:00Z",
  "networkBlockAll": false,
  "autoDeleteInterval": 30,
  "domainAllowList": "example.com,*.daytona.io",
  "public": false,
  "errorReason": "The sandbox is not running",
  "runnerId": "runner123",
  "id": "sandbox123",
  "state": "creating",
  "gpuType": "H100",
  "updatedAt": "2024-10-01T12:00:00Z",
  "sandboxClass": "linux-vm",
  "desiredState": "destroyed",
  "networkAllowList": "192.168.1.0/16,10.0.0.0/24",
  "volumes": [
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    },
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    }
  ],
  "cpu": 2,
  "recoverable": true,
  "env": {
    "NODE_ENV": "production"
  },
  "gpu": 0,
  "daemonVersion": "1.0.0",
  "backupCreatedAt": "2024-10-01T12:00:00Z",
  "labels": {
    "daytona.io/public": "true"
  },
  "target": "local",
  "disk": 10,
  "name": "MySandbox",
  "backupState": "None",
  "user": "daytona",
  "autoArchiveInterval": 10080,
  "snapshot": "daytonaio/sandbox:latest"
}
```

<h3 id="recover-sandbox-from-error-state-as-an-admin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Recovery initiated|[Sandbox](#schemasandbox)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## List all users

<a id="opIdadminListUsers"></a>

> Code samples

```bash
curl http://localhost:3000/admin/users \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/users`

<h3 id="list-all-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Create user

<a id="opIdadminCreateUser"></a>

> Code samples

```bash
curl http://localhost:3000/admin/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "emailVerified": true,
    "role": "admin",
    "name": "name",
    "personalOrganizationDefaultRegionId": "personalOrganizationDefaultRegionId",
    "id": "id",
    "personalOrganizationQuota": {
      "snapshotQuota": 7.061401241503109,
      "totalCpuQuota": 0.8008281904610115,
      "maxCpuPerSandbox": 5.962133916683182,
      "maxDiskPerSandbox": 2.3021358869347655,
      "maxMemoryPerSandbox": 5.637376656633329,
      "volumeQuota": 3.616076749251911,
      "totalMemoryQuota": 6.027456183070403,
      "maxSnapshotSize": 9.301444243932576,
      "totalDiskQuota": 1.4658129805029452
    },
    "email": "email"
  }'
```

`POST /admin/users`

> Body parameter

```json
{
  "emailVerified": true,
  "role": "admin",
  "name": "name",
  "personalOrganizationDefaultRegionId": "personalOrganizationDefaultRegionId",
  "id": "id",
  "personalOrganizationQuota": {
    "snapshotQuota": 7.061401241503109,
    "totalCpuQuota": 0.8008281904610115,
    "maxCpuPerSandbox": 5.962133916683182,
    "maxDiskPerSandbox": 2.3021358869347655,
    "maxMemoryPerSandbox": 5.637376656633329,
    "volumeQuota": 3.616076749251911,
    "totalMemoryQuota": 6.027456183070403,
    "maxSnapshotSize": 9.301444243932576,
    "totalDiskQuota": 1.4658129805029452
  },
  "email": "email"
}
```

<h3 id="create-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateUser](#schemacreateuser)|true|none|
|» id|body|string|true|none|
|» name|body|string|true|none|
|» email|body|string|false|none|
|» personalOrganizationQuota|body|[CreateOrganizationQuota](#schemacreateorganizationquota)|false|none|
|» personalOrganizationDefaultRegionId|body|string|false|none|
|» role|body|string|false|none|
|» emailVerified|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» role|admin|
|» role|user|

<h3 id="create-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Regenerate user key pair

<a id="opIdadminRegenerateKeyPair"></a>

> Code samples

```bash
curl http://localhost:3000/admin/users/string/regenerate-key-pair \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /admin/users/{id}/regenerate-key-pair`

<h3 id="regenerate-user-key-pair-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="regenerate-user-key-pair-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get user by ID

<a id="opIdadminGetUser"></a>

> Code samples

```bash
curl http://localhost:3000/admin/users/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/users/{id}`

<h3 id="get-user-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "createdAt": "2000-01-23T04:56:07.000+00:00",
  "publicKeys": [
    {
      "name": "name",
      "key": "key"
    },
    {
      "name": "name",
      "key": "key"
    }
  ],
  "name": "name",
  "id": "id",
  "email": "email"
}
```

<h3 id="get-user-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User details|[User](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Send a webhook message to an organization

<a id="opIdadminSendWebhook"></a>

> Code samples

```bash
curl http://localhost:3000/admin/webhooks/organizations/string/send \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "eventId": "evt_1234567890abcdef",
    "payload": {
      "id": "sandbox-123",
      "name": "My Sandbox"
    },
    "eventType": "sandbox.created"
  }'
```

`POST /admin/webhooks/organizations/{organizationId}/send`

> Body parameter

```json
{
  "eventId": "evt_1234567890abcdef",
  "payload": {
    "id": "sandbox-123",
    "name": "My Sandbox"
  },
  "eventType": "sandbox.created"
}
```

<h3 id="send-a-webhook-message-to-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|body|body|[SendWebhookDto](#schemasendwebhookdto)|true|none|
|» eventType|body|object|true|The type of event being sent|
|» payload|body|object|true|The payload data to send|
|» eventId|body|string|false|Optional event ID for idempotency|

<h3 id="send-a-webhook-message-to-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webhook message sent successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get delivery attempts for a webhook message

<a id="opIdadminGetMessageAttempts"></a>

> Code samples

```bash
curl http://localhost:3000/admin/webhooks/organizations/string/messages/string/attempts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/webhooks/organizations/{organizationId}/messages/{messageId}/attempts`

<h3 id="get-delivery-attempts-for-a-webhook-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|messageId|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {}
]
```

<h3 id="get-delivery-attempts-for-a-webhook-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of delivery attempts|Inline|

<h3 id="get-delivery-attempts-for-a-webhook-message-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get webhook service status

<a id="opIdadminGetWebhookStatus"></a>

> Code samples

```bash
curl http://localhost:3000/admin/webhooks/status \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/webhooks/status`

> Example responses

> 200 Response

```json
{
  "enabled": true
}
```

<h3 id="get-webhook-service-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webhook service status|[adminGetWebhookStatus_200_response](#schemaadmingetwebhookstatus_200_response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Initialize webhooks for an organization

<a id="opIdadminInitializeWebhooks"></a>

> Code samples

```bash
curl http://localhost:3000/admin/webhooks/organizations/string/initialize \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /admin/webhooks/organizations/{organizationId}/initialize`

<h3 id="initialize-webhooks-for-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|

<h3 id="initialize-webhooks-for-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Webhooks initialized successfully|None|
|404|Not Found|Organization not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Set default registry

<a id="opIdadminSetDefaultRegistry"></a>

> Code samples

```bash
curl http://localhost:3000/admin/docker-registry/string/set-default \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /admin/docker-registry/{id}/set-default`

<h3 id="set-default-registry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the docker registry|

> Example responses

> 200 Response

```json
{
  "registryType": "internal",
  "createdAt": "2024-01-31T12:00:00Z",
  "name": "My Docker Hub",
  "project": "my-project",
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "url": "https://registry.hub.docker.com",
  "username": "username",
  "updatedAt": "2024-01-31T12:00:00Z"
}
```

<h3 id="set-default-registry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The docker registry has been set as default.|[DockerRegistry](#schemadockerregistry)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Check if an image can be cleaned up

<a id="opIdadminCanCleanupImage"></a>

> Code samples

```bash
curl 'http://localhost:3000/admin/snapshots/can-cleanup-image?imageName=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/snapshots/can-cleanup-image`

<h3 id="check-if-an-image-can-be-cleaned-up-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageName|query|string|true|Image name with tag to check|

> Example responses

> 200 Response

```json
true
```

<h3 id="check-if-an-image-can-be-cleaned-up-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Boolean indicating if image can be cleaned up|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Set snapshot general status

<a id="opIdadminSetSnapshotGeneralStatus"></a>

> Code samples

```bash
curl http://localhost:3000/admin/snapshots/string/general \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "general": true
  }'
```

`PATCH /admin/snapshots/{id}/general`

> Body parameter

```json
{
  "general": true
}
```

<h3 id="set-snapshot-general-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Snapshot ID|
|body|body|[SetSnapshotGeneralStatusDto](#schemasetsnapshotgeneralstatusdto)|true|none|
|» general|body|boolean|true|Whether the snapshot is general|

> Example responses

> 200 Response

```json
{
  "imageName": "imageName",
  "buildInfo": "",
  "cpu": 6.027456183070403,
  "regionIds": [
    "regionIds",
    "regionIds"
  ],
  "gpu": 1.4658129805029452,
  "organizationId": "organizationId",
  "general": true,
  "createdAt": "2000-01-23T04:56:07.000+00:00",
  "disk": 5.637376656633329,
  "ref": "daytonaio/sandbox:latest",
  "size": 0.8008281904610115,
  "mem": 5.962133916683182,
  "lastUsedAt": "2000-01-23T04:56:07.000+00:00",
  "entrypoint": [
    "entrypoint",
    "entrypoint"
  ],
  "errorReason": "errorReason",
  "name": "name",
  "id": "id",
  "state": "",
  "initialRunnerId": "runner123",
  "gpuType": "H100",
  "updatedAt": "2000-01-23T04:56:07.000+00:00",
  "sandboxClass": "linux-vm"
}
```

<h3 id="set-snapshot-general-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Snapshot general status has been set|[SnapshotDto](#schemasnapshotdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get all audit logs

<a id="opIdadminGetAllAuditLogs"></a>

> Code samples

```bash
curl http://localhost:3000/admin/audit \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/audit`

<h3 id="get-all-audit-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|false|Page number of the results|
|limit|query|number|false|Number of results per page|
|from|query|string(date-time)|false|From date (ISO 8601 format)|
|to|query|string(date-time)|false|To date (ISO 8601 format)|
|nextToken|query|string|false|Token for cursor-based pagination. When provided, takes precedence over page parameter.|

> Example responses

> 200 Response

```json
{
  "total": 6.027456183070403,
  "nextToken": "nextToken",
  "totalPages": 5.962133916683182,
  "page": 1.4658129805029452,
  "items": [
    {
      "actorApiKeyPrefix": "actorApiKeyPrefix",
      "metadata": {
        "key": ""
      },
      "targetId": "targetId",
      "errorMessage": "errorMessage",
      "ipAddress": "ipAddress",
      "actorEmail": "actorEmail",
      "targetType": "targetType",
      "userAgent": "userAgent",
      "source": "source",
      "organizationId": "organizationId",
      "createdAt": "2000-01-23T04:56:07.000+00:00",
      "actorId": "actorId",
      "action": "action",
      "id": "id",
      "actorApiKeySuffix": "actorApiKeySuffix",
      "statusCode": 0.8008281904610115
    },
    {
      "actorApiKeyPrefix": "actorApiKeyPrefix",
      "metadata": {
        "key": ""
      },
      "targetId": "targetId",
      "errorMessage": "errorMessage",
      "ipAddress": "ipAddress",
      "actorEmail": "actorEmail",
      "targetType": "targetType",
      "userAgent": "userAgent",
      "source": "source",
      "organizationId": "organizationId",
      "createdAt": "2000-01-23T04:56:07.000+00:00",
      "actorId": "actorId",
      "action": "action",
      "id": "id",
      "actorApiKeySuffix": "actorApiKeySuffix",
      "statusCode": 0.8008281904610115
    }
  ]
}
```

<h3 id="get-all-audit-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Paginated list of all audit logs|[PaginatedAuditLogs](#schemapaginatedauditlogs)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Create organization region quota

<a id="opIdadminCreateOrganizationRegionQuota"></a>

> Code samples

```bash
curl http://localhost:3000/admin/organizations/string/quota/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "totalCpuQuota": 0.8008281904610115,
    "allowedGpuTypes": [
      "H100",
      "H100"
    ],
    "maxDiskPerGpuSandbox": 4.145608029883936,
    "totalGpuQuota": 5.962133916683182,
    "maxCpuPerGpuSandbox": 3.616076749251911,
    "maxCpuPerSandbox": 5.637376656633329,
    "maxDiskPerSandbox": 7.061401241503109,
    "maxDiskPerNonEphemeralSandbox": 9.301444243932576,
    "maxMemoryPerSandbox": 2.3021358869347655,
    "totalMemoryQuota": 6.027456183070403,
    "totalDiskQuota": 1.4658129805029452,
    "sandboxClass": "",
    "maxMemoryPerGpuSandbox": 2.027123023002322
  }'
```

`POST /admin/organizations/{organizationId}/quota/{regionId}`

> Body parameter

```json
{
  "totalCpuQuota": 0.8008281904610115,
  "allowedGpuTypes": [
    "H100",
    "H100"
  ],
  "maxDiskPerGpuSandbox": 4.145608029883936,
  "totalGpuQuota": 5.962133916683182,
  "maxCpuPerGpuSandbox": 3.616076749251911,
  "maxCpuPerSandbox": 5.637376656633329,
  "maxDiskPerSandbox": 7.061401241503109,
  "maxDiskPerNonEphemeralSandbox": 9.301444243932576,
  "maxMemoryPerSandbox": 2.3021358869347655,
  "totalMemoryQuota": 6.027456183070403,
  "totalDiskQuota": 1.4658129805029452,
  "sandboxClass": "",
  "maxMemoryPerGpuSandbox": 2.027123023002322
}
```

<h3 id="create-organization-region-quota-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|Organization ID|
|regionId|path|string|true|ID of the region the new quota applies to|
|body|body|[CreateOrganizationRegionQuota](#schemacreateorganizationregionquota)|true|none|
|» sandboxClass|body|object|true|none|
|» totalCpuQuota|body|number|true|none|
|» totalMemoryQuota|body|number|true|none|
|» totalDiskQuota|body|number|true|none|
|» totalGpuQuota|body|number|true|none|
|» allowedGpuTypes|body|[[GpuType](#schemagputype)]|false|none|
|» maxCpuPerSandbox|body|number \| null|false|none|
|» maxMemoryPerSandbox|body|number \| null|false|none|
|» maxDiskPerSandbox|body|number \| null|false|none|
|» maxDiskPerNonEphemeralSandbox|body|number \| null|false|none|
|» maxCpuPerGpuSandbox|body|number \| null|false|none|
|» maxMemoryPerGpuSandbox|body|number \| null|false|none|
|» maxDiskPerGpuSandbox|body|number \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» allowedGpuTypes|H100|
|» allowedGpuTypes|RTX-PRO-6000|

> Example responses

> 201 Response

```json
{
  "totalCpuQuota": 0.8008281904610115,
  "allowedGpuTypes": [
    "H100",
    "H100"
  ],
  "maxDiskPerGpuSandbox": 4.145608029883936,
  "totalGpuQuota": 5.962133916683182,
  "maxCpuPerGpuSandbox": 3.616076749251911,
  "organizationId": "organizationId",
  "maxCpuPerSandbox": 5.637376656633329,
  "maxDiskPerSandbox": 7.061401241503109,
  "maxDiskPerNonEphemeralSandbox": 9.301444243932576,
  "regionId": "regionId",
  "maxMemoryPerSandbox": 2.3021358869347655,
  "totalMemoryQuota": 6.027456183070403,
  "totalDiskQuota": 1.4658129805029452,
  "sandboxClass": "",
  "maxMemoryPerGpuSandbox": 2.027123023002322
}
```

<h3 id="create-organization-region-quota-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Region quota created successfully|[RegionQuota](#schemaregionquota)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Update organization region quota

<a id="opIdadminUpdateOrganizationRegionQuota"></a>

> Code samples

```bash
curl http://localhost:3000/admin/organizations/string/quota/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "totalCpuQuota": 0.8008281904610115,
    "allowedGpuTypes": [
      "H100",
      "H100"
    ],
    "maxDiskPerGpuSandbox": 4.145608029883936,
    "totalGpuQuota": 5.962133916683182,
    "maxCpuPerGpuSandbox": 3.616076749251911,
    "maxCpuPerSandbox": 5.637376656633329,
    "maxDiskPerSandbox": 7.061401241503109,
    "maxDiskPerNonEphemeralSandbox": 9.301444243932576,
    "maxMemoryPerSandbox": 2.3021358869347655,
    "totalMemoryQuota": 6.027456183070403,
    "totalDiskQuota": 1.4658129805029452,
    "sandboxClass": "",
    "maxMemoryPerGpuSandbox": 2.027123023002322
  }'
```

`PATCH /admin/organizations/{organizationId}/quota/{regionId}`

> Body parameter

```json
{
  "totalCpuQuota": 0.8008281904610115,
  "allowedGpuTypes": [
    "H100",
    "H100"
  ],
  "maxDiskPerGpuSandbox": 4.145608029883936,
  "totalGpuQuota": 5.962133916683182,
  "maxCpuPerGpuSandbox": 3.616076749251911,
  "maxCpuPerSandbox": 5.637376656633329,
  "maxDiskPerSandbox": 7.061401241503109,
  "maxDiskPerNonEphemeralSandbox": 9.301444243932576,
  "maxMemoryPerSandbox": 2.3021358869347655,
  "totalMemoryQuota": 6.027456183070403,
  "totalDiskQuota": 1.4658129805029452,
  "sandboxClass": "",
  "maxMemoryPerGpuSandbox": 2.027123023002322
}
```

<h3 id="update-organization-region-quota-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|Organization ID|
|regionId|path|string|true|Region ID|
|body|body|[UpdateOrganizationRegionQuota](#schemaupdateorganizationregionquota)|true|none|
|» sandboxClass|body|object|false|none|
|» totalCpuQuota|body|number \| null|true|none|
|» totalMemoryQuota|body|number \| null|true|none|
|» totalDiskQuota|body|number \| null|true|none|
|» totalGpuQuota|body|number \| null|true|none|
|» allowedGpuTypes|body|[[GpuType](#schemagputype)]|false|none|
|» maxCpuPerSandbox|body|number \| null|false|none|
|» maxMemoryPerSandbox|body|number \| null|false|none|
|» maxDiskPerSandbox|body|number \| null|false|none|
|» maxDiskPerNonEphemeralSandbox|body|number \| null|false|none|
|» maxCpuPerGpuSandbox|body|number \| null|false|none|
|» maxMemoryPerGpuSandbox|body|number \| null|false|none|
|» maxDiskPerGpuSandbox|body|number \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» allowedGpuTypes|H100|
|» allowedGpuTypes|RTX-PRO-6000|

<h3 id="update-organization-region-quota-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Region quota updated successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get organization region quota

<a id="opIdadminGetOrganizationRegionQuota"></a>

> Code samples

```bash
curl http://localhost:3000/admin/organizations/string/quota/string/linux-vm \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /admin/organizations/{organizationId}/quota/{regionId}/{sandboxClass}`

<h3 id="get-organization-region-quota-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|Organization ID|
|regionId|path|string|true|Region ID|
|sandboxClass|path|[SandboxClass](#schemasandboxclass)|true|Sandbox class|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sandboxClass|linux-vm|
|sandboxClass|container|
|sandboxClass|android|
|sandboxClass|windows|

> Example responses

> 200 Response

```json
{
  "totalCpuQuota": 0.8008281904610115,
  "allowedGpuTypes": [
    "H100",
    "H100"
  ],
  "maxDiskPerGpuSandbox": 4.145608029883936,
  "totalGpuQuota": 5.962133916683182,
  "maxCpuPerGpuSandbox": 3.616076749251911,
  "organizationId": "organizationId",
  "maxCpuPerSandbox": 5.637376656633329,
  "maxDiskPerSandbox": 7.061401241503109,
  "maxDiskPerNonEphemeralSandbox": 9.301444243932576,
  "regionId": "regionId",
  "maxMemoryPerSandbox": 2.3021358869347655,
  "totalMemoryQuota": 6.027456183070403,
  "totalDiskQuota": 1.4658129805029452,
  "sandboxClass": "",
  "maxMemoryPerGpuSandbox": 2.027123023002322
}
```

<h3 id="get-organization-region-quota-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Region quota|[RegionQuota](#schemaregionquota)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Delete organization region quota

<a id="opIdadminDeleteOrganizationRegionQuota"></a>

> Code samples

```bash
curl http://localhost:3000/admin/organizations/string/quota/string/linux-vm \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /admin/organizations/{organizationId}/quota/{regionId}/{sandboxClass}`

<h3 id="delete-organization-region-quota-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|Organization ID|
|regionId|path|string|true|Region ID|
|sandboxClass|path|[SandboxClass](#schemasandboxclass)|true|Sandbox class|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sandboxClass|linux-vm|
|sandboxClass|container|
|sandboxClass|android|
|sandboxClass|windows|

<h3 id="delete-organization-region-quota-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Region quota deleted successfully|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

<h1 id="daytona-webhooks">webhooks</h1>

## Get Svix Consumer App Portal access for an organization

<a id="opIdWebhookController_getAppPortalAccess"></a>

> Code samples

```bash
curl http://localhost:3000/webhooks/organizations/string/app-portal-access \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /webhooks/organizations/{organizationId}/app-portal-access`

<h3 id="get-svix-consumer-app-portal-access-for-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|organizationId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "url": "https://app.svix.com/app_1234567890",
  "token": "appsk_..."
}
```

<h3 id="get-svix-consumer-app-portal-access-for-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|App Portal access generated successfully|[WebhookAppPortalAccess](#schemawebhookappportalaccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Get webhook initialization status for an organization

<a id="opIdWebhookController_getInitializationStatus"></a>

> Code samples

```bash
curl http://localhost:3000/webhooks/organizations/string/initialization-status \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /webhooks/organizations/{organizationId}/initialization-status`

<h3 id="get-webhook-initialization-status-for-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|organizationId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "organizationId": "123e4567-e89b-12d3-a456-426614174000",
  "createdAt": "2023-01-01T00:00:00.000Z",
  "lastError": "Failed to create Svix application",
  "retryCount": 3,
  "svixApplicationId": "app_1234567890",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

<h3 id="get-webhook-initialization-status-for-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webhook initialization status|[WebhookInitializationStatus](#schemawebhookinitializationstatus)|
|404|Not Found|Webhook initialization status not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Initialize webhooks for an organization

<a id="opIdWebhookController_initializeWebhooks"></a>

> Code samples

```bash
curl http://localhost:3000/webhooks/organizations/string/initialize \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /webhooks/organizations/{organizationId}/initialize`

<h3 id="initialize-webhooks-for-an-organization-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|organizationId|path|string|true|Organization ID|

> Example responses

> 201 Response

```json
{
  "organizationId": "123e4567-e89b-12d3-a456-426614174000",
  "createdAt": "2023-01-01T00:00:00.000Z",
  "lastError": "Failed to create Svix application",
  "retryCount": 3,
  "svixApplicationId": "app_1234567890",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

<h3 id="initialize-webhooks-for-an-organization-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Webhooks initialized successfully|[WebhookInitializationStatus](#schemawebhookinitializationstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

## Refresh cached endpoint presence flag for an organization

<a id="opIdWebhookController_refreshEndpoints"></a>

> Code samples

```bash
curl http://localhost:3000/webhooks/organizations/string/refresh-endpoints \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /webhooks/organizations/{organizationId}/refresh-endpoints`

<h3 id="refresh-cached-endpoint-presence-flag-for-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|
|organizationId|path|string|true|none|

<h3 id="refresh-cached-endpoint-presence-flag-for-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Endpoint flag refreshed|None|
|404|Not Found|Webhook initialization status not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

<h1 id="daytona-audit">audit</h1>

## Get audit logs for organization

<a id="opIdgetOrganizationAuditLogs"></a>

> Code samples

```bash
curl http://localhost:3000/audit/organizations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /audit/organizations/{organizationId}`

<h3 id="get-audit-logs-for-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|Organization ID|
|page|query|number|false|Page number of the results|
|limit|query|number|false|Number of results per page|
|from|query|string(date-time)|false|From date (ISO 8601 format)|
|to|query|string(date-time)|false|To date (ISO 8601 format)|
|nextToken|query|string|false|Token for cursor-based pagination. When provided, takes precedence over page parameter.|

> Example responses

> 200 Response

```json
{
  "total": 6.027456183070403,
  "nextToken": "nextToken",
  "totalPages": 5.962133916683182,
  "page": 1.4658129805029452,
  "items": [
    {
      "actorApiKeyPrefix": "actorApiKeyPrefix",
      "metadata": {
        "key": ""
      },
      "targetId": "targetId",
      "errorMessage": "errorMessage",
      "ipAddress": "ipAddress",
      "actorEmail": "actorEmail",
      "targetType": "targetType",
      "userAgent": "userAgent",
      "source": "source",
      "organizationId": "organizationId",
      "createdAt": "2000-01-23T04:56:07.000+00:00",
      "actorId": "actorId",
      "action": "action",
      "id": "id",
      "actorApiKeySuffix": "actorApiKeySuffix",
      "statusCode": 0.8008281904610115
    },
    {
      "actorApiKeyPrefix": "actorApiKeyPrefix",
      "metadata": {
        "key": ""
      },
      "targetId": "targetId",
      "errorMessage": "errorMessage",
      "ipAddress": "ipAddress",
      "actorEmail": "actorEmail",
      "targetType": "targetType",
      "userAgent": "userAgent",
      "source": "source",
      "organizationId": "organizationId",
      "createdAt": "2000-01-23T04:56:07.000+00:00",
      "actorId": "actorId",
      "action": "action",
      "id": "id",
      "actorApiKeySuffix": "actorApiKeySuffix",
      "statusCode": 0.8008281904610115
    }
  ]
}
```

<h3 id="get-audit-logs-for-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Paginated list of organization audit logs|[PaginatedAuditLogs](#schemapaginatedauditlogs)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

<h1 id="daytona-object-storage">object-storage</h1>

## Get temporary storage access for pushing objects

<a id="opIdgetPushAccess"></a>

> Code samples

```bash
curl http://localhost:3000/object-storage/push-access \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /object-storage/push-access`

<h3 id="get-temporary-storage-access-for-pushing-objects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Daytona-Organization-ID|header|string|false|Use with JWT to specify the organization ID|

> Example responses

> 200 Response

```json
{
  "organizationId": "123e4567-e89b-12d3-a456-426614174000",
  "bucket": "daytona",
  "accessKey": "temp-user-123",
  "sessionToken": "eyJhbGciOiJIUzI1NiIs...",
  "secret": "abchbGciOiJIUzI1NiIs...",
  "storageUrl": "storage.example.com"
}
```

<h3 id="get-temporary-storage-access-for-pushing-objects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Temporary storage access has been generated|[StorageAccessDto](#schemastorageaccessdto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer, oauth2
</aside>

<h1 id="daytona-health">Health</h1>

## HealthController_live

<a id="opIdHealthController_live"></a>

> Code samples

```bash
curl http://localhost:3000/health
```

`GET /health`

<h3 id="healthcontrollerlive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## HealthController_check

<a id="opIdHealthController_check"></a>

> Code samples

```bash
curl http://localhost:3000/health/ready \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /health/ready`

> Example responses

> 200 Response

```json
{
  "details": {
    "database": {
      "status": "up"
    }
  },
  "error": {},
  "status": "ok",
  "info": {
    "database": {
      "status": "up"
    }
  }
}
```

> 503 Response

```json
{
  "details": {
    "database": {
      "status": "up"
    },
    "redis": {
      "status": "down",
      "message": "Could not connect"
    }
  },
  "error": {
    "redis": {
      "status": "down",
      "message": "Could not connect"
    }
  },
  "status": "error",
  "info": {
    "database": {
      "status": "up"
    }
  }
}
```

<h3 id="healthcontrollercheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Health Check is successful|[HealthController_check_200_response](#schemahealthcontroller_check_200_response)|
|503|Service Unavailable|The Health Check is not successful|[HealthController_check_503_response](#schemahealthcontroller_check_503_response)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

# Schemas

<h2 id="tocS_Announcement">Announcement</h2>
<!-- backwards compatibility -->
<a id="schemaannouncement"></a>
<a id="schema_Announcement"></a>
<a id="tocSannouncement"></a>
<a id="tocsannouncement"></a>

```json
{
  "text": "New feature available!",
  "learnMoreUrl": "https://example.com/learn-more"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|The announcement text|
|learnMoreUrl|string|false|none|URL to learn more about the announcement|

<h2 id="tocS_PosthogConfig">PosthogConfig</h2>
<!-- backwards compatibility -->
<a id="schemaposthogconfig"></a>
<a id="schema_PosthogConfig"></a>
<a id="tocSposthogconfig"></a>
<a id="tocsposthogconfig"></a>

```json
{
  "apiKey": "phc_abc123",
  "host": "https://app.posthog.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKey|string|true|none|PostHog API key|
|host|string|true|none|PostHog host URL|

<h2 id="tocS_OidcConfig">OidcConfig</h2>
<!-- backwards compatibility -->
<a id="schemaoidcconfig"></a>
<a id="schema_OidcConfig"></a>
<a id="tocSoidcconfig"></a>
<a id="tocsoidcconfig"></a>

```json
{
  "issuer": "https://auth.example.com",
  "clientId": "daytona-client",
  "audience": "daytona-api"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issuer|string|true|none|OIDC issuer|
|clientId|string|true|none|OIDC client ID|
|audience|string|true|none|OIDC audience|

<h2 id="tocS_RateLimitEntry">RateLimitEntry</h2>
<!-- backwards compatibility -->
<a id="schemaratelimitentry"></a>
<a id="schema_RateLimitEntry"></a>
<a id="tocSratelimitentry"></a>
<a id="tocsratelimitentry"></a>

```json
{
  "ttl": 60,
  "limit": 100
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ttl|number|false|none|Rate limit TTL in seconds|
|limit|number|false|none|Rate limit max requests|

<h2 id="tocS_RateLimitConfig">RateLimitConfig</h2>
<!-- backwards compatibility -->
<a id="schemaratelimitconfig"></a>
<a id="schema_RateLimitConfig"></a>
<a id="tocSratelimitconfig"></a>
<a id="tocsratelimitconfig"></a>

```json
{
  "failedAuth": {
    "ttl": 60,
    "limit": 100
  },
  "authenticated": {
    "ttl": 60,
    "limit": 100
  },
  "sandboxCreate": {
    "ttl": 60,
    "limit": 100
  },
  "sandboxLifecycle": {
    "ttl": 60,
    "limit": 100
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failedAuth|object|false|none|Failed authentication rate limit|
|authenticated|object|false|none|Authenticated rate limit|
|sandboxCreate|object|false|none|Sandbox create rate limit|
|sandboxLifecycle|object|false|none|Sandbox lifecycle rate limit|

<h2 id="tocS_DaytonaConfiguration">DaytonaConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadaytonaconfiguration"></a>
<a id="schema_DaytonaConfiguration"></a>
<a id="tocSdaytonaconfiguration"></a>
<a id="tocsdaytonaconfiguration"></a>

```json
{
  "dashboardUrl": "https://dashboard.example.com",
  "rateLimit": "",
  "analyticsApiUrl": "https://analytics.example.com",
  "sshGatewayPublicKey": "ssh-gateway-public-key",
  "billingApiUrl": "https://billing.example.com",
  "linkedAccountsEnabled": true,
  "version": "0.0.1",
  "oidc": "",
  "proxyToolboxUrl": "https://proxy.example.com/toolbox",
  "posthog": "",
  "maxAutoArchiveInterval": 43200,
  "pylonAppId": "pylon-app-123",
  "proxyTemplateUrl": "https://{{PORT}}-{{sandboxId}}.proxy.example.com",
  "maintananceMode": false,
  "environment": "production",
  "defaultSnapshot": "ubuntu:22.04",
  "sshGatewayCommand": "ssh -p 2222 {{TOKEN}}@localhost",
  "announcements": {
    "feature-update": {
      "text": "New feature available!",
      "learnMoreUrl": "https://example.com"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|true|none|Daytona version|
|posthog|object|false|none|PostHog configuration|
|oidc|object|true|none|OIDC configuration|
|linkedAccountsEnabled|boolean|true|none|Whether linked accounts are enabled|
|announcements|object|true|none|System announcements|
|pylonAppId|string|false|none|Pylon application ID|
|proxyTemplateUrl|string|true|none|Proxy template URL|
|proxyToolboxUrl|string|true|none|Toolbox template URL|
|defaultSnapshot|string|true|none|Default snapshot for sandboxes|
|dashboardUrl|string|true|none|Dashboard URL|
|maxAutoArchiveInterval|number|true|none|Maximum auto-archive interval in minutes|
|maintananceMode|boolean|true|none|Whether maintenance mode is enabled|
|environment|string|true|none|Current environment|
|billingApiUrl|string|false|none|Billing API URL|
|analyticsApiUrl|string|false|none|Analytics API URL|
|sshGatewayCommand|string|false|none|SSH Gateway command|
|sshGatewayPublicKey|string|false|none|Base64 encoded SSH Gateway public key|
|rateLimit|object|false|none|Rate limit configuration|

<h2 id="tocS_CreateApiKey">CreateApiKey</h2>
<!-- backwards compatibility -->
<a id="schemacreateapikey"></a>
<a id="schema_CreateApiKey"></a>
<a id="tocScreateapikey"></a>
<a id="tocscreateapikey"></a>

```json
{
  "permissions": [
    "write:registries",
    "write:registries"
  ],
  "name": "My API Key",
  "expiresAt": "2025-06-09T12:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the API key|
|permissions|[string]|true|none|The list of organization resource permissions explicitly assigned to the API key|
|expiresAt|string(date-time) \| null|false|none|When the API key expires|

#### Enumerated Values

|Property|Value|
|---|---|
|permissions|write:registries|
|permissions|delete:registries|
|permissions|write:snapshots|
|permissions|delete:snapshots|
|permissions|write:sandboxes|
|permissions|delete:sandboxes|
|permissions|read:volumes|
|permissions|write:volumes|
|permissions|delete:volumes|
|permissions|write:regions|
|permissions|delete:regions|
|permissions|read:runners|
|permissions|write:runners|
|permissions|delete:runners|
|permissions|read:audit_logs|

<h2 id="tocS_ApiKeyResponse">ApiKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyresponse"></a>
<a id="schema_ApiKeyResponse"></a>
<a id="tocSapikeyresponse"></a>
<a id="tocsapikeyresponse"></a>

```json
{
  "createdAt": "2024-03-14T12:00:00Z",
  "permissions": [
    "write:registries",
    "write:registries"
  ],
  "name": "My API Key",
  "value": "bb_sk_1234567890abcdef",
  "expiresAt": "2025-06-09T12:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the API key|
|value|string|true|none|The API key value|
|createdAt|string(date-time)|true|none|When the API key was created|
|permissions|[string]|true|none|The list of organization resource permissions assigned to the API key|
|expiresAt|string(date-time) \| null|true|none|When the API key expires|

#### Enumerated Values

|Property|Value|
|---|---|
|permissions|write:registries|
|permissions|delete:registries|
|permissions|write:snapshots|
|permissions|delete:snapshots|
|permissions|write:sandboxes|
|permissions|delete:sandboxes|
|permissions|read:volumes|
|permissions|write:volumes|
|permissions|delete:volumes|
|permissions|write:regions|
|permissions|delete:regions|
|permissions|read:runners|
|permissions|write:runners|
|permissions|delete:runners|
|permissions|read:audit_logs|

<h2 id="tocS_ApiKeyList">ApiKeyList</h2>
<!-- backwards compatibility -->
<a id="schemaapikeylist"></a>
<a id="schema_ApiKeyList"></a>
<a id="tocSapikeylist"></a>
<a id="tocsapikeylist"></a>

```json
{
  "createdAt": "2024-03-14T12:00:00Z",
  "lastUsedAt": "2024-03-14T12:00:00Z",
  "permissions": [
    "write:registries",
    "write:registries"
  ],
  "name": "My API Key",
  "value": "bb_********************def",
  "userId": "123",
  "expiresAt": "2024-03-14T12:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the API key|
|value|string|true|none|The masked API key value|
|createdAt|string(date-time)|true|none|When the API key was created|
|permissions|[string]|true|none|The list of organization resource permissions assigned to the API key|
|lastUsedAt|string(date-time) \| null|true|none|When the API key was last used|
|expiresAt|string(date-time) \| null|true|none|When the API key expires|
|userId|string|true|none|The user ID of the user who created the API key|

#### Enumerated Values

|Property|Value|
|---|---|
|permissions|write:registries|
|permissions|delete:registries|
|permissions|write:snapshots|
|permissions|delete:snapshots|
|permissions|write:sandboxes|
|permissions|delete:sandboxes|
|permissions|read:volumes|
|permissions|write:volumes|
|permissions|delete:volumes|
|permissions|write:regions|
|permissions|delete:regions|
|permissions|read:runners|
|permissions|write:runners|
|permissions|delete:runners|
|permissions|read:audit_logs|

<h2 id="tocS_OrganizationRole">OrganizationRole</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationrole"></a>
<a id="schema_OrganizationRole"></a>
<a id="tocSorganizationrole"></a>
<a id="tocsorganizationrole"></a>

```json
{
  "createdAt": "2000-01-23T04:56:07.000+00:00",
  "permissions": [
    "write:registries",
    "write:registries"
  ],
  "name": "name",
  "isGlobal": true,
  "description": "description",
  "id": "id",
  "updatedAt": "2000-01-23T04:56:07.000+00:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Role ID|
|name|string|true|none|Role name|
|description|string|true|none|Role description|
|permissions|[string]|true|none|Roles assigned to the user|
|isGlobal|boolean|true|none|Global role flag|
|createdAt|string(date-time)|true|none|Creation timestamp|
|updatedAt|string(date-time)|true|none|Last update timestamp|

#### Enumerated Values

|Property|Value|
|---|---|
|permissions|write:registries|
|permissions|delete:registries|
|permissions|write:snapshots|
|permissions|delete:snapshots|
|permissions|write:sandboxes|
|permissions|delete:sandboxes|
|permissions|read:volumes|
|permissions|write:volumes|
|permissions|delete:volumes|
|permissions|write:regions|
|permissions|delete:regions|
|permissions|read:runners|
|permissions|write:runners|
|permissions|delete:runners|
|permissions|read:audit_logs|

<h2 id="tocS_OrganizationInvitation">OrganizationInvitation</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationinvitation"></a>
<a id="schema_OrganizationInvitation"></a>
<a id="tocSorganizationinvitation"></a>
<a id="tocsorganizationinvitation"></a>

```json
{
  "organizationId": "organizationId",
  "createdAt": "2000-01-23T04:56:07.000+00:00",
  "invitedBy": "invitedBy",
  "role": "owner",
  "organizationName": "organizationName",
  "assignedRoles": [
    {
      "createdAt": "2000-01-23T04:56:07.000+00:00",
      "permissions": [
        "write:registries",
        "write:registries"
      ],
      "name": "name",
      "isGlobal": true,
      "description": "description",
      "id": "id",
      "updatedAt": "2000-01-23T04:56:07.000+00:00"
    },
    {
      "createdAt": "2000-01-23T04:56:07.000+00:00",
      "permissions": [
        "write:registries",
        "write:registries"
      ],
      "name": "name",
      "isGlobal": true,
      "description": "description",
      "id": "id",
      "updatedAt": "2000-01-23T04:56:07.000+00:00"
    }
  ],
  "id": "id",
  "email": "email",
  "expiresAt": "2000-01-23T04:56:07.000+00:00",
  "status": "pending",
  "updatedAt": "2000-01-23T04:56:07.000+00:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Invitation ID|
|email|string|true|none|Email address of the invitee|
|invitedBy|string|true|none|Email address of the inviter|
|organizationId|string|true|none|Organization ID|
|organizationName|string|true|none|Organization name|
|expiresAt|string(date-time)|true|none|Expiration date of the invitation|
|status|string|true|none|Invitation status|
|role|string|true|none|Member role|
|assignedRoles|[[OrganizationRole](#schemaorganizationrole)]|true|none|Assigned roles|
|createdAt|string(date-time)|true|none|Creation timestamp|
|updatedAt|string(date-time)|true|none|Last update timestamp|

#### Enumerated Values

|Property|Value|
|---|---|
|status|pending|
|status|accepted|
|status|declined|
|status|cancelled|
|role|owner|
|role|member|

<h2 id="tocS_CreateOrganization">CreateOrganization</h2>
<!-- backwards compatibility -->
<a id="schemacreateorganization"></a>
<a id="schema_CreateOrganization"></a>
<a id="tocScreateorganization"></a>
<a id="tocscreateorganization"></a>

```json
{
  "defaultRegionId": "us",
  "name": "My Organization"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of organization|
|defaultRegionId|string|true|none|The ID of the default region for the organization|

<h2 id="tocS_OtelConfig">OtelConfig</h2>
<!-- backwards compatibility -->
<a id="schemaotelconfig"></a>
<a id="schema_OtelConfig"></a>
<a id="tocSotelconfig"></a>
<a id="tocsotelconfig"></a>

```json
{
  "headers": {
    "x-api-key": "my-api-key"
  },
  "endpoint": "endpoint"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|string|true|none|Endpoint|
|headers|object \| null|false|none|Headers|

<h2 id="tocS_Organization">Organization</h2>
<!-- backwards compatibility -->
<a id="schemaorganization"></a>
<a id="schema_Organization"></a>
<a id="tocSorganization"></a>
<a id="tocsorganization"></a>

```json
{
  "sandboxCreateRateLimit": 7.061401241503109,
  "sandboxLifecycleRateLimitTtlSeconds": 4.145608029883936,
  "createdAt": "2000-01-23T04:56:07.000+00:00",
  "sandboxLimitedNetworkEgress": true,
  "suspendedUntil": "2000-01-23T04:56:07.000+00:00",
  "snapshotDeactivationTimeoutMinutes": 5.637376656633329,
  "otelConfig": "",
  "authenticatedRateLimitTtlSeconds": 3.616076749251911,
  "id": "id",
  "experimentalConfig": "{}",
  "updatedAt": "2000-01-23T04:56:07.000+00:00",
  "defaultRegionId": "defaultRegionId",
  "sandboxCreateRateLimitTtlSeconds": 2.027123023002322,
  "suspensionReason": "suspensionReason",
  "sandboxLifecycleRateLimit": 9.301444243932576,
  "suspendedAt": "2000-01-23T04:56:07.000+00:00",
  "personal": true,
  "suspensionCleanupGracePeriodHours": 0.8008281904610115,
  "authenticatedRateLimit": 2.3021358869347655,
  "suspended": true,
  "maxCpuPerSandbox": 6.027456183070403,
  "maxDiskPerSandbox": 5.962133916683182,
  "createdBy": "createdBy",
  "name": "name",
  "maxMemoryPerSandbox": 1.4658129805029452
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Organization ID|
|name|string|true|none|Organization name|
|createdBy|string|true|none|User ID of the organization creator|
|personal|boolean|true|none|Personal organization flag|
|createdAt|string(date-time)|true|none|Creation timestamp|
|updatedAt|string(date-time)|true|none|Last update timestamp|
|suspended|boolean|true|none|Suspended flag|
|suspendedAt|string(date-time)|true|none|Suspended at|
|suspensionReason|string|true|none|Suspended reason|
|suspendedUntil|string(date-time)|true|none|Suspended until|
|suspensionCleanupGracePeriodHours|number|true|none|Suspension cleanup grace period hours|
|maxCpuPerSandbox|number|true|none|Max CPU per sandbox|
|maxMemoryPerSandbox|number|true|none|Max memory per sandbox|
|maxDiskPerSandbox|number|true|none|Max disk per sandbox|
|snapshotDeactivationTimeoutMinutes|number|true|none|Time in minutes before an unused snapshot is deactivated|
|sandboxLimitedNetworkEgress|boolean|true|none|Sandbox default network block all|
|defaultRegionId|string|false|none|Default region ID|
|authenticatedRateLimit|number \| null|true|none|Authenticated rate limit per minute|
|sandboxCreateRateLimit|number \| null|true|none|Sandbox create rate limit per minute|
|sandboxLifecycleRateLimit|number \| null|true|none|Sandbox lifecycle rate limit per minute|
|experimentalConfig|object|true|none|Experimental configuration|
|otelConfig|object \| null|true|none|OpenTelemetry collection configuration|
|authenticatedRateLimitTtlSeconds|number \| null|true|none|Authenticated rate limit TTL in seconds|
|sandboxCreateRateLimitTtlSeconds|number \| null|true|none|Sandbox create rate limit TTL in seconds|
|sandboxLifecycleRateLimitTtlSeconds|number \| null|true|none|Sandbox lifecycle rate limit TTL in seconds|

<h2 id="tocS_UpdateOrganizationDefaultRegion">UpdateOrganizationDefaultRegion</h2>
<!-- backwards compatibility -->
<a id="schemaupdateorganizationdefaultregion"></a>
<a id="schema_UpdateOrganizationDefaultRegion"></a>
<a id="tocSupdateorganizationdefaultregion"></a>
<a id="tocsupdateorganizationdefaultregion"></a>

```json
{
  "defaultRegionId": "us"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultRegionId|string|true|none|The ID of the default region for the organization|

<h2 id="tocS_SandboxClass">SandboxClass</h2>
<!-- backwards compatibility -->
<a id="schemasandboxclass"></a>
<a id="schema_SandboxClass"></a>
<a id="tocSsandboxclass"></a>
<a id="tocssandboxclass"></a>

```json
"linux-vm"
```

<h2 id="tocS_GpuType">GpuType</h2>
<!-- backwards compatibility -->
<a id="schemagputype"></a>
<a id="schema_GpuType"></a>
<a id="tocSgputype"></a>
<a id="tocsgputype"></a>

```json
"H100"
```

<h2 id="tocS_RegionUsageOverview">RegionUsageOverview</h2>
<!-- backwards compatibility -->
<a id="schemaregionusageoverview"></a>
<a id="schema_RegionUsageOverview"></a>
<a id="tocSregionusageoverview"></a>
<a id="tocsregionusageoverview"></a>

```json
{
  "totalCpuQuota": 0.8008281904610115,
  "currentGpuUsage": 9.301444243932576,
  "allowedGpuTypes": [
    "H100",
    "H100"
  ],
  "maxDiskPerGpuSandbox": 1.4894159098541704,
  "totalGpuQuota": 7.061401241503109,
  "maxCpuPerGpuSandbox": 1.2315135367772556,
  "maxCpuPerSandbox": 3.616076749251911,
  "maxDiskPerSandbox": 4.145608029883936,
  "maxDiskPerNonEphemeralSandbox": 7.386281948385884,
  "regionId": "regionId",
  "currentDiskUsage": 2.3021358869347655,
  "currentMemoryUsage": 5.962133916683182,
  "currentCpuUsage": 6.027456183070403,
  "maxMemoryPerSandbox": 2.027123023002322,
  "totalMemoryQuota": 1.4658129805029452,
  "totalDiskQuota": 5.637376656633329,
  "sandboxClass": "",
  "maxMemoryPerGpuSandbox": 1.0246457001441578
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|regionId|string|true|none|none|
|sandboxClass|object|true|none|none|
|totalCpuQuota|number|true|none|none|
|currentCpuUsage|number|true|none|none|
|totalMemoryQuota|number|true|none|none|
|currentMemoryUsage|number|true|none|none|
|totalDiskQuota|number|true|none|none|
|currentDiskUsage|number|true|none|none|
|totalGpuQuota|number|true|none|none|
|currentGpuUsage|number|true|none|none|
|allowedGpuTypes|[[GpuType](#schemagputype)]|false|none|none|
|maxCpuPerSandbox|number \| null|true|none|none|
|maxMemoryPerSandbox|number \| null|true|none|none|
|maxDiskPerSandbox|number \| null|true|none|none|
|maxDiskPerNonEphemeralSandbox|number \| null|true|none|none|
|maxCpuPerGpuSandbox|number \| null|true|none|none|
|maxMemoryPerGpuSandbox|number \| null|true|none|none|
|maxDiskPerGpuSandbox|number \| null|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|allowedGpuTypes|H100|
|allowedGpuTypes|RTX-PRO-6000|

<h2 id="tocS_OrganizationUsageOverview">OrganizationUsageOverview</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationusageoverview"></a>
<a id="schema_OrganizationUsageOverview"></a>
<a id="tocSorganizationusageoverview"></a>
<a id="tocsorganizationusageoverview"></a>

```json
{
  "totalSnapshotQuota": 6.84685269835264,
  "currentVolumeUsage": 4.965218492984954,
  "totalVolumeQuota": 1.1730742509559433,
  "currentSnapshotUsage": 7.457744773683766,
  "regionUsage": [
    {
      "totalCpuQuota": 0.8008281904610115,
      "currentGpuUsage": 9.301444243932576,
      "allowedGpuTypes": [
        "H100",
        "H100"
      ],
      "maxDiskPerGpuSandbox": 1.4894159098541704,
      "totalGpuQuota": 7.061401241503109,
      "maxCpuPerGpuSandbox": 1.2315135367772556,
      "maxCpuPerSandbox": 3.616076749251911,
      "maxDiskPerSandbox": 4.145608029883936,
      "maxDiskPerNonEphemeralSandbox": 7.386281948385884,
      "regionId": "regionId",
      "currentDiskUsage": 2.3021358869347655,
      "currentMemoryUsage": 5.962133916683182,
      "currentCpuUsage": 6.027456183070403,
      "maxMemoryPerSandbox": 2.027123023002322,
      "totalMemoryQuota": 1.4658129805029452,
      "totalDiskQuota": 5.637376656633329,
      "sandboxClass": "",
      "maxMemoryPerGpuSandbox": 1.0246457001441578
    },
    {
      "totalCpuQuota": 0.8008281904610115,
      "currentGpuUsage": 9.301444243932576,
      "allowedGpuTypes": [
        "H100",
        "H100"
      ],
      "maxDiskPerGpuSandbox": 1.4894159098541704,
      "totalGpuQuota": 7.061401241503109,
      "maxCpuPerGpuSandbox": 1.2315135367772556,
      "maxCpuPerSandbox": 3.616076749251911,
      "maxDiskPerSandbox": 4.145608029883936,
      "maxDiskPerNonEphemeralSandbox": 7.386281948385884,
      "regionId": "regionId",
      "currentDiskUsage": 2.3021358869347655,
      "currentMemoryUsage": 5.962133916683182,
      "currentCpuUsage": 6.027456183070403,
      "maxMemoryPerSandbox": 2.027123023002322,
      "totalMemoryQuota": 1.4658129805029452,
      "totalDiskQuota": 5.637376656633329,
      "sandboxClass": "",
      "maxMemoryPerGpuSandbox": 1.0246457001441578
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|regionUsage|[[RegionUsageOverview](#schemaregionusageoverview)]|true|none|none|
|totalSnapshotQuota|number|true|none|none|
|currentSnapshotUsage|number|true|none|none|
|totalVolumeQuota|number|true|none|none|
|currentVolumeUsage|number|true|none|none|

<h2 id="tocS_UpdateOrganizationQuota">UpdateOrganizationQuota</h2>
<!-- backwards compatibility -->
<a id="schemaupdateorganizationquota"></a>
<a id="schema_UpdateOrganizationQuota"></a>
<a id="tocSupdateorganizationquota"></a>
<a id="tocsupdateorganizationquota"></a>

```json
{
  "sandboxCreateRateLimitTtlSeconds": 4.145608029883936,
  "sandboxLifecycleRateLimit": 3.616076749251911,
  "volumeQuota": 2.3021358869347655,
  "maxSnapshotSize": 5.637376656633329,
  "authenticatedRateLimit": 7.061401241503109,
  "sandboxCreateRateLimit": 9.301444243932576,
  "snapshotQuota": 5.962133916683182,
  "sandboxLifecycleRateLimitTtlSeconds": 7.386281948385884,
  "maxCpuPerSandbox": 0.8008281904610115,
  "maxDiskPerSandbox": 1.4658129805029452,
  "snapshotDeactivationTimeoutMinutes": 1.2315135367772556,
  "maxMemoryPerSandbox": 6.027456183070403,
  "authenticatedRateLimitTtlSeconds": 2.027123023002322
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxCpuPerSandbox|number \| null|true|none|none|
|maxMemoryPerSandbox|number \| null|true|none|none|
|maxDiskPerSandbox|number \| null|true|none|none|
|snapshotQuota|number \| null|true|none|none|
|maxSnapshotSize|number \| null|true|none|none|
|volumeQuota|number \| null|true|none|none|
|authenticatedRateLimit|number \| null|true|none|none|
|sandboxCreateRateLimit|number \| null|true|none|none|
|sandboxLifecycleRateLimit|number \| null|true|none|none|
|authenticatedRateLimitTtlSeconds|number \| null|true|none|none|
|sandboxCreateRateLimitTtlSeconds|number \| null|true|none|none|
|sandboxLifecycleRateLimitTtlSeconds|number \| null|true|none|none|
|snapshotDeactivationTimeoutMinutes|number \| null|true|none|Time in minutes before an unused snapshot is deactivated|

<h2 id="tocS_UpdateOrganizationRegionQuota">UpdateOrganizationRegionQuota</h2>
<!-- backwards compatibility -->
<a id="schemaupdateorganizationregionquota"></a>
<a id="schema_UpdateOrganizationRegionQuota"></a>
<a id="tocSupdateorganizationregionquota"></a>
<a id="tocsupdateorganizationregionquota"></a>

```json
{
  "totalCpuQuota": 0.8008281904610115,
  "allowedGpuTypes": [
    "H100",
    "H100"
  ],
  "maxDiskPerGpuSandbox": 4.145608029883936,
  "totalGpuQuota": 5.962133916683182,
  "maxCpuPerGpuSandbox": 3.616076749251911,
  "maxCpuPerSandbox": 5.637376656633329,
  "maxDiskPerSandbox": 7.061401241503109,
  "maxDiskPerNonEphemeralSandbox": 9.301444243932576,
  "maxMemoryPerSandbox": 2.3021358869347655,
  "totalMemoryQuota": 6.027456183070403,
  "totalDiskQuota": 1.4658129805029452,
  "sandboxClass": "",
  "maxMemoryPerGpuSandbox": 2.027123023002322
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sandboxClass|object|false|none|none|
|totalCpuQuota|number \| null|true|none|none|
|totalMemoryQuota|number \| null|true|none|none|
|totalDiskQuota|number \| null|true|none|none|
|totalGpuQuota|number \| null|true|none|none|
|allowedGpuTypes|[[GpuType](#schemagputype)]|false|none|none|
|maxCpuPerSandbox|number \| null|false|none|none|
|maxMemoryPerSandbox|number \| null|false|none|none|
|maxDiskPerSandbox|number \| null|false|none|none|
|maxDiskPerNonEphemeralSandbox|number \| null|false|none|none|
|maxCpuPerGpuSandbox|number \| null|false|none|none|
|maxMemoryPerGpuSandbox|number \| null|false|none|none|
|maxDiskPerGpuSandbox|number \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|allowedGpuTypes|H100|
|allowedGpuTypes|RTX-PRO-6000|

<h2 id="tocS_OrganizationSuspension">OrganizationSuspension</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationsuspension"></a>
<a id="schema_OrganizationSuspension"></a>
<a id="tocSorganizationsuspension"></a>
<a id="tocsorganizationsuspension"></a>

```json
{
  "reason": "reason",
  "until": "2000-01-23T04:56:07.000+00:00",
  "suspensionCleanupGracePeriodHours": 0.08008281904610115
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|true|none|Suspension reason|
|until|string(date-time)|true|none|Suspension until|
|suspensionCleanupGracePeriodHours|number|false|none|Suspension cleanup grace period hours|

<h2 id="tocS_OrganizationSandboxDefaultLimitedNetworkEgress">OrganizationSandboxDefaultLimitedNetworkEgress</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationsandboxdefaultlimitednetworkegress"></a>
<a id="schema_OrganizationSandboxDefaultLimitedNetworkEgress"></a>
<a id="tocSorganizationsandboxdefaultlimitednetworkegress"></a>
<a id="tocsorganizationsandboxdefaultlimitednetworkegress"></a>

```json
{
  "sandboxDefaultLimitedNetworkEgress": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sandboxDefaultLimitedNetworkEgress|boolean|true|none|Sandbox default limited network egress|

<h2 id="tocS_CreateOrganizationRole">CreateOrganizationRole</h2>
<!-- backwards compatibility -->
<a id="schemacreateorganizationrole"></a>
<a id="schema_CreateOrganizationRole"></a>
<a id="tocScreateorganizationrole"></a>
<a id="tocscreateorganizationrole"></a>

```json
{
  "permissions": [
    "write:registries",
    "write:registries"
  ],
  "name": "Maintainer",
  "description": "Can manage all resources"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the role|
|description|string|true|none|The description of the role|
|permissions|[string]|true|none|The list of permissions assigned to the role|

#### Enumerated Values

|Property|Value|
|---|---|
|permissions|write:registries|
|permissions|delete:registries|
|permissions|write:snapshots|
|permissions|delete:snapshots|
|permissions|write:sandboxes|
|permissions|delete:sandboxes|
|permissions|read:volumes|
|permissions|write:volumes|
|permissions|delete:volumes|
|permissions|write:regions|
|permissions|delete:regions|
|permissions|read:runners|
|permissions|write:runners|
|permissions|delete:runners|
|permissions|read:audit_logs|

<h2 id="tocS_UpdateOrganizationRole">UpdateOrganizationRole</h2>
<!-- backwards compatibility -->
<a id="schemaupdateorganizationrole"></a>
<a id="schema_UpdateOrganizationRole"></a>
<a id="tocSupdateorganizationrole"></a>
<a id="tocsupdateorganizationrole"></a>

```json
{
  "permissions": [
    "write:registries",
    "write:registries"
  ],
  "name": "Maintainer",
  "description": "Can manage all resources"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the role|
|description|string|true|none|The description of the role|
|permissions|[string]|true|none|The list of permissions assigned to the role|

#### Enumerated Values

|Property|Value|
|---|---|
|permissions|write:registries|
|permissions|delete:registries|
|permissions|write:snapshots|
|permissions|delete:snapshots|
|permissions|write:sandboxes|
|permissions|delete:sandboxes|
|permissions|read:volumes|
|permissions|write:volumes|
|permissions|delete:volumes|
|permissions|write:regions|
|permissions|delete:regions|
|permissions|read:runners|
|permissions|write:runners|
|permissions|delete:runners|
|permissions|read:audit_logs|

<h2 id="tocS_OrganizationUser">OrganizationUser</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationuser"></a>
<a id="schema_OrganizationUser"></a>
<a id="tocSorganizationuser"></a>
<a id="tocsorganizationuser"></a>

```json
{
  "organizationId": "organizationId",
  "createdAt": "2000-01-23T04:56:07.000+00:00",
  "role": "owner",
  "assignedRoles": [
    {
      "createdAt": "2000-01-23T04:56:07.000+00:00",
      "permissions": [
        "write:registries",
        "write:registries"
      ],
      "name": "name",
      "isGlobal": true,
      "description": "description",
      "id": "id",
      "updatedAt": "2000-01-23T04:56:07.000+00:00"
    },
    {
      "createdAt": "2000-01-23T04:56:07.000+00:00",
      "permissions": [
        "write:registries",
        "write:registries"
      ],
      "name": "name",
      "isGlobal": true,
      "description": "description",
      "id": "id",
      "updatedAt": "2000-01-23T04:56:07.000+00:00"
    }
  ],
  "name": "name",
  "userId": "userId",
  "email": "email",
  "updatedAt": "2000-01-23T04:56:07.000+00:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|string|true|none|User ID|
|organizationId|string|true|none|Organization ID|
|name|string|true|none|User name|
|email|string|true|none|User email|
|role|string|true|none|Member role|
|assignedRoles|[[OrganizationRole](#schemaorganizationrole)]|true|none|Roles assigned to the user|
|createdAt|string(date-time)|true|none|Creation timestamp|
|updatedAt|string(date-time)|true|none|Last update timestamp|

#### Enumerated Values

|Property|Value|
|---|---|
|role|owner|
|role|member|

<h2 id="tocS_UpdateOrganizationMemberAccess">UpdateOrganizationMemberAccess</h2>
<!-- backwards compatibility -->
<a id="schemaupdateorganizationmemberaccess"></a>
<a id="schema_UpdateOrganizationMemberAccess"></a>
<a id="tocSupdateorganizationmemberaccess"></a>
<a id="tocsupdateorganizationmemberaccess"></a>

```json
{
  "role": "member",
  "assignedRoleIds": [
    "assignedRoleIds",
    "assignedRoleIds"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|string|true|none|Organization member role|
|assignedRoleIds|[string]|true|none|Array of assigned role IDs|

#### Enumerated Values

|Property|Value|
|---|---|
|role|owner|
|role|member|

<h2 id="tocS_CreateOrganizationInvitation">CreateOrganizationInvitation</h2>
<!-- backwards compatibility -->
<a id="schemacreateorganizationinvitation"></a>
<a id="schema_CreateOrganizationInvitation"></a>
<a id="tocScreateorganizationinvitation"></a>
<a id="tocscreateorganizationinvitation"></a>

```json
{
  "role": "member",
  "assignedRoleIds": [
    "assignedRoleIds",
    "assignedRoleIds"
  ],
  "email": "mail@example.com",
  "expiresAt": "2021-12-31T23:59:59Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|Email address of the invitee|
|role|string|true|none|Organization member role for the invitee|
|assignedRoleIds|[string]|true|none|Array of assigned role IDs for the invitee|
|expiresAt|string(date-time)|false|none|Expiration date of the invitation|

#### Enumerated Values

|Property|Value|
|---|---|
|role|owner|
|role|member|

<h2 id="tocS_UpdateOrganizationInvitation">UpdateOrganizationInvitation</h2>
<!-- backwards compatibility -->
<a id="schemaupdateorganizationinvitation"></a>
<a id="schema_UpdateOrganizationInvitation"></a>
<a id="tocSupdateorganizationinvitation"></a>
<a id="tocsupdateorganizationinvitation"></a>

```json
{
  "role": "owner",
  "assignedRoleIds": [
    "assignedRoleIds",
    "assignedRoleIds"
  ],
  "expiresAt": "2021-12-31T23:59:59Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|string|true|none|Organization member role|
|assignedRoleIds|[string]|true|none|Array of role IDs|
|expiresAt|string(date-time)|false|none|Expiration date of the invitation|

#### Enumerated Values

|Property|Value|
|---|---|
|role|owner|
|role|member|

<h2 id="tocS_RegionType">RegionType</h2>
<!-- backwards compatibility -->
<a id="schemaregiontype"></a>
<a id="schema_RegionType"></a>
<a id="tocSregiontype"></a>
<a id="tocsregiontype"></a>

```json
"shared"
```

The type of the region

<h2 id="tocS_Region">Region</h2>
<!-- backwards compatibility -->
<a id="schemaregion"></a>
<a id="schema_Region"></a>
<a id="tocSregion"></a>
<a id="tocsregion"></a>

```json
{
  "organizationId": "123e4567-e89b-12d3-a456-426614174000",
  "createdAt": "2023-01-01T00:00:00.000Z",
  "snapshotManagerUrl": "http://snapshot-manager.example.com",
  "regionType": "shared",
  "proxyUrl": "https://proxy.example.com",
  "name": "us-east-1",
  "sshGatewayUrl": "http://ssh-gateway.example.com",
  "id": "123456789012",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Region ID|
|name|string|true|none|Region name|
|organizationId|string \| null|false|none|Organization ID|
|regionType|object|true|none|The type of the region|
|createdAt|string|true|none|Creation timestamp|
|updatedAt|string|true|none|Last update timestamp|
|proxyUrl|string \| null|false|none|Proxy URL for the region|
|sshGatewayUrl|string \| null|false|none|SSH Gateway URL for the region|
|snapshotManagerUrl|string \| null|false|none|Snapshot Manager URL for the region|

<h2 id="tocS_CreateRegion">CreateRegion</h2>
<!-- backwards compatibility -->
<a id="schemacreateregion"></a>
<a id="schema_CreateRegion"></a>
<a id="tocScreateregion"></a>
<a id="tocscreateregion"></a>

```json
{
  "snapshotManagerUrl": "https://snapshot-manager.example.com",
  "proxyUrl": "https://proxy.example.com",
  "name": "us-east-1",
  "sshGatewayUrl": "ssh://ssh-gateway.example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Region name|
|proxyUrl|string \| null|false|none|Proxy URL for the region|
|sshGatewayUrl|string \| null|false|none|SSH Gateway URL for the region|
|snapshotManagerUrl|string \| null|false|none|Snapshot Manager URL for the region|

<h2 id="tocS_CreateRegionResponse">CreateRegionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateregionresponse"></a>
<a id="schema_CreateRegionResponse"></a>
<a id="tocScreateregionresponse"></a>
<a id="tocscreateregionresponse"></a>

```json
{
  "proxyApiKey": "proxy-api-key-xyz",
  "snapshotManagerUsername": "daytona",
  "snapshotManagerPassword": "snapshotManagerPassword",
  "id": "region_12345",
  "sshGatewayApiKey": "ssh-gateway-api-key-abc"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of the created region|
|proxyApiKey|string \| null|false|none|Proxy API key for the region|
|sshGatewayApiKey|string \| null|false|none|SSH Gateway API key for the region|
|snapshotManagerUsername|string \| null|false|none|Snapshot Manager username for the region|
|snapshotManagerPassword|string \| null|false|none|Snapshot Manager password for the region|

<h2 id="tocS_RegenerateApiKeyResponse">RegenerateApiKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaregenerateapikeyresponse"></a>
<a id="schema_RegenerateApiKeyResponse"></a>
<a id="tocSregenerateapikeyresponse"></a>
<a id="tocsregenerateapikeyresponse"></a>

```json
{
  "apiKey": "api-key-xyz123"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKey|string|true|none|The newly generated API key|

<h2 id="tocS_UpdateRegion">UpdateRegion</h2>
<!-- backwards compatibility -->
<a id="schemaupdateregion"></a>
<a id="schema_UpdateRegion"></a>
<a id="tocSupdateregion"></a>
<a id="tocsupdateregion"></a>

```json
{
  "snapshotManagerUrl": "https://snapshot-manager.example.com",
  "proxyUrl": "https://proxy.example.com",
  "sshGatewayUrl": "ssh://ssh-gateway.example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|proxyUrl|string \| null|false|none|Proxy URL for the region|
|sshGatewayUrl|string \| null|false|none|SSH Gateway URL for the region|
|snapshotManagerUrl|string \| null|false|none|Snapshot Manager URL for the region|

<h2 id="tocS_SnapshotManagerCredentials">SnapshotManagerCredentials</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotmanagercredentials"></a>
<a id="schema_SnapshotManagerCredentials"></a>
<a id="tocSsnapshotmanagercredentials"></a>
<a id="tocssnapshotmanagercredentials"></a>

```json
{
  "password": "password",
  "username": "daytona"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|true|none|Snapshot Manager username for the region|
|password|string|true|none|Snapshot Manager password for the region|

<h2 id="tocS_UserPublicKey">UserPublicKey</h2>
<!-- backwards compatibility -->
<a id="schemauserpublickey"></a>
<a id="schema_UserPublicKey"></a>
<a id="tocSuserpublickey"></a>
<a id="tocsuserpublickey"></a>

```json
{
  "name": "name",
  "key": "key"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|Public key|
|name|string|true|none|Key name|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "createdAt": "2000-01-23T04:56:07.000+00:00",
  "publicKeys": [
    {
      "name": "name",
      "key": "key"
    },
    {
      "name": "name",
      "key": "key"
    }
  ],
  "name": "name",
  "id": "id",
  "email": "email"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|User ID|
|name|string|true|none|User name|
|email|string|true|none|User email|
|publicKeys|[[UserPublicKey](#schemauserpublickey)]|true|none|User public keys|
|createdAt|string(date-time)|true|none|Creation timestamp|

<h2 id="tocS_AccountProvider">AccountProvider</h2>
<!-- backwards compatibility -->
<a id="schemaaccountprovider"></a>
<a id="schema_AccountProvider"></a>
<a id="tocSaccountprovider"></a>
<a id="tocsaccountprovider"></a>

```json
{
  "displayName": "displayName",
  "name": "name"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|displayName|string|true|none|none|

<h2 id="tocS_CreateLinkedAccount">CreateLinkedAccount</h2>
<!-- backwards compatibility -->
<a id="schemacreatelinkedaccount"></a>
<a id="schema_CreateLinkedAccount"></a>
<a id="tocScreatelinkedaccount"></a>
<a id="tocscreatelinkedaccount"></a>

```json
{
  "provider": "provider",
  "userId": "userId"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|provider|string|true|none|The authentication provider of the secondary account|
|userId|string|true|none|The user ID of the secondary account|

<h2 id="tocS_SandboxState">SandboxState</h2>
<!-- backwards compatibility -->
<a id="schemasandboxstate"></a>
<a id="schema_SandboxState"></a>
<a id="tocSsandboxstate"></a>
<a id="tocssandboxstate"></a>

```json
"creating"
```

<h2 id="tocS_SandboxListSortField">SandboxListSortField</h2>
<!-- backwards compatibility -->
<a id="schemasandboxlistsortfield"></a>
<a id="schema_SandboxListSortField"></a>
<a id="tocSsandboxlistsortfield"></a>
<a id="tocssandboxlistsortfield"></a>

```json
"name"
```

<h2 id="tocS_SandboxListSortDirection">SandboxListSortDirection</h2>
<!-- backwards compatibility -->
<a id="schemasandboxlistsortdirection"></a>
<a id="schema_SandboxListSortDirection"></a>
<a id="tocSsandboxlistsortdirection"></a>
<a id="tocssandboxlistsortdirection"></a>

```json
"asc"
```

<h2 id="tocS_SandboxDesiredState">SandboxDesiredState</h2>
<!-- backwards compatibility -->
<a id="schemasandboxdesiredstate"></a>
<a id="schema_SandboxDesiredState"></a>
<a id="tocSsandboxdesiredstate"></a>
<a id="tocssandboxdesiredstate"></a>

```json
"destroyed"
```

The desired state of the sandbox

<h2 id="tocS_SandboxListItem">SandboxListItem</h2>
<!-- backwards compatibility -->
<a id="schemasandboxlistitem"></a>
<a id="schema_SandboxListItem"></a>
<a id="tocSsandboxlistitem"></a>
<a id="tocssandboxlistitem"></a>

```json
{
  "memory": 4,
  "toolboxProxyUrl": "https://proxy.app.daytona.io/toolbox",
  "lastActivityAt": "2024-10-01T12:00:00Z",
  "autoStopInterval": 30,
  "organizationId": "organization123",
  "createdAt": "2024-10-01T12:00:00Z",
  "autoDeleteInterval": 30,
  "public": false,
  "errorReason": "The sandbox is not running",
  "runnerId": "runner123",
  "id": "sandbox123",
  "state": "creating",
  "sandboxClass": "linux-vm",
  "gpuType": "H100",
  "updatedAt": "2024-10-01T12:00:00Z",
  "desiredState": "destroyed",
  "recoverable": true,
  "cpu": 2,
  "gpu": 0,
  "daemonVersion": "1.0.0",
  "target": "local",
  "labels": {
    "daytona.io/public": "true"
  },
  "disk": 10,
  "name": "MySandbox",
  "backupState": "None",
  "user": "daytona",
  "autoArchiveInterval": 10080,
  "snapshot": "daytonaio/sandbox:latest"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the sandbox|
|organizationId|string|true|none|The organization ID of the sandbox|
|name|string|true|none|The name of the sandbox|
|target|string|true|none|The target environment for the sandbox|
|runnerId|string|false|none|The runner ID of the sandbox|
|sandboxClass|object|false|none|The class of the sandbox|
|state|object|false|none|The state of the sandbox|
|desiredState|object|false|none|The desired state of the sandbox|
|snapshot|string|false|none|The snapshot used for the sandbox|
|user|string|true|none|The user associated with the project|
|errorReason|string|false|none|The error reason of the sandbox|
|recoverable|boolean|false|none|Whether the sandbox error is recoverable.|
|public|boolean|true|none|Whether the sandbox http preview is public|
|cpu|number|true|none|The CPU quota for the sandbox|
|gpu|number|true|none|The GPU quota for the sandbox|
|gpuType|object|false|none|The GPU type assigned to the sandbox|
|memory|number|true|none|The memory quota for the sandbox|
|disk|number|true|none|The disk quota for the sandbox|
|labels|object|true|none|Labels for the sandbox|
|backupState|string|false|none|The state of the backup|
|autoStopInterval|number|false|none|Auto-stop interval in minutes (0 means disabled)|
|autoArchiveInterval|number|false|none|Auto-archive interval in minutes|
|autoDeleteInterval|number|false|none|Auto-delete interval in minutes (negative value means disabled, 0 means delete immediately upon stopping)|
|createdAt|string|false|none|The creation timestamp of the sandbox|
|updatedAt|string|false|none|The last update timestamp of the sandbox|
|lastActivityAt|string|false|none|The last activity timestamp of the sandbox|
|daemonVersion|string|false|none|The version of the daemon running in the sandbox|
|toolboxProxyUrl|string|true|none|The toolbox proxy URL for the sandbox|

#### Enumerated Values

|Property|Value|
|---|---|
|backupState|None|
|backupState|Pending|
|backupState|InProgress|
|backupState|Completed|
|backupState|Error|

<h2 id="tocS_ListSandboxesResponse">ListSandboxesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsandboxesresponse"></a>
<a id="schema_ListSandboxesResponse"></a>
<a id="tocSlistsandboxesresponse"></a>
<a id="tocslistsandboxesresponse"></a>

```json
{
  "nextCursor": "nextCursor",
  "items": [
    {
      "memory": 4,
      "toolboxProxyUrl": "https://proxy.app.daytona.io/toolbox",
      "lastActivityAt": "2024-10-01T12:00:00Z",
      "autoStopInterval": 30,
      "organizationId": "organization123",
      "createdAt": "2024-10-01T12:00:00Z",
      "autoDeleteInterval": 30,
      "public": false,
      "errorReason": "The sandbox is not running",
      "runnerId": "runner123",
      "id": "sandbox123",
      "state": "creating",
      "sandboxClass": "linux-vm",
      "gpuType": "H100",
      "updatedAt": "2024-10-01T12:00:00Z",
      "desiredState": "destroyed",
      "recoverable": true,
      "cpu": 2,
      "gpu": 0,
      "daemonVersion": "1.0.0",
      "target": "local",
      "labels": {
        "daytona.io/public": "true"
      },
      "disk": 10,
      "name": "MySandbox",
      "backupState": "None",
      "user": "daytona",
      "autoArchiveInterval": 10080,
      "snapshot": "daytonaio/sandbox:latest"
    },
    {
      "memory": 4,
      "toolboxProxyUrl": "https://proxy.app.daytona.io/toolbox",
      "lastActivityAt": "2024-10-01T12:00:00Z",
      "autoStopInterval": 30,
      "organizationId": "organization123",
      "createdAt": "2024-10-01T12:00:00Z",
      "autoDeleteInterval": 30,
      "public": false,
      "errorReason": "The sandbox is not running",
      "runnerId": "runner123",
      "id": "sandbox123",
      "state": "creating",
      "sandboxClass": "linux-vm",
      "gpuType": "H100",
      "updatedAt": "2024-10-01T12:00:00Z",
      "desiredState": "destroyed",
      "recoverable": true,
      "cpu": 2,
      "gpu": 0,
      "daemonVersion": "1.0.0",
      "target": "local",
      "labels": {
        "daytona.io/public": "true"
      },
      "disk": 10,
      "name": "MySandbox",
      "backupState": "None",
      "user": "daytona",
      "autoArchiveInterval": 10080,
      "snapshot": "daytonaio/sandbox:latest"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[SandboxListItem](#schemasandboxlistitem)]|true|none|List of results for the current page|
|nextCursor|string \| null|true|none|Cursor for the next page of results|

<h2 id="tocS_SandboxVolume">SandboxVolume</h2>
<!-- backwards compatibility -->
<a id="schemasandboxvolume"></a>
<a id="schema_SandboxVolume"></a>
<a id="tocSsandboxvolume"></a>
<a id="tocssandboxvolume"></a>

```json
{
  "mountPath": "/data",
  "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "subpath": "users/alice"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|volumeId|string|true|none|The ID or name of the volume. Resolved to the volume ID on sandbox create.|
|mountPath|string|true|none|The mount path for the volume|
|subpath|string|false|none|Optional subpath within the volume to mount. When specified, only this S3 prefix will be accessible. When omitted, the entire volume is mounted.|

<h2 id="tocS_BuildInfo">BuildInfo</h2>
<!-- backwards compatibility -->
<a id="schemabuildinfo"></a>
<a id="schema_BuildInfo"></a>
<a id="tocSbuildinfo"></a>
<a id="tocsbuildinfo"></a>

```json
{
  "dockerfileContent": "FROM node:14\nWORKDIR /app\nCOPY . .\nRUN npm install\nCMD [\"npm\", \"start\"]",
  "contextHashes": [
    "hash1",
    "hash2"
  ],
  "createdAt": "1970-01-01T00:00:00Z",
  "updatedAt": "1970-01-01T00:00:00Z",
  "snapshotRef": "daytonaio/sandbox:latest"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dockerfileContent|string|false|none|The Dockerfile content used for the build|
|contextHashes|[string]|false|none|The context hashes used for the build|
|createdAt|string(date-time)|true|none|The creation timestamp|
|updatedAt|string(date-time)|true|none|The last update timestamp|
|snapshotRef|string|true|none|The snapshot reference|

<h2 id="tocS_Sandbox">Sandbox</h2>
<!-- backwards compatibility -->
<a id="schemasandbox"></a>
<a id="schema_Sandbox"></a>
<a id="tocSsandbox"></a>
<a id="tocssandbox"></a>

```json
{
  "memory": 4,
  "linkedSandboxId": "sandbox123",
  "buildInfo": "",
  "toolboxProxyUrl": "https://proxy.app.daytona.io/toolbox",
  "lastActivityAt": "2024-10-01T12:00:00Z",
  "autoStopInterval": 30,
  "organizationId": "organization123",
  "createdAt": "2024-10-01T12:00:00Z",
  "networkBlockAll": false,
  "autoDeleteInterval": 30,
  "domainAllowList": "example.com,*.daytona.io",
  "public": false,
  "errorReason": "The sandbox is not running",
  "runnerId": "runner123",
  "id": "sandbox123",
  "state": "creating",
  "gpuType": "H100",
  "updatedAt": "2024-10-01T12:00:00Z",
  "sandboxClass": "linux-vm",
  "desiredState": "destroyed",
  "networkAllowList": "192.168.1.0/16,10.0.0.0/24",
  "volumes": [
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    },
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    }
  ],
  "cpu": 2,
  "recoverable": true,
  "env": {
    "NODE_ENV": "production"
  },
  "gpu": 0,
  "daemonVersion": "1.0.0",
  "backupCreatedAt": "2024-10-01T12:00:00Z",
  "labels": {
    "daytona.io/public": "true"
  },
  "target": "local",
  "disk": 10,
  "name": "MySandbox",
  "backupState": "None",
  "user": "daytona",
  "autoArchiveInterval": 10080,
  "snapshot": "daytonaio/sandbox:latest"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the sandbox|
|organizationId|string|true|none|The organization ID of the sandbox|
|name|string|true|none|The name of the sandbox|
|snapshot|string|false|none|The snapshot used for the sandbox|
|user|string|true|none|The user associated with the project|
|env|object|true|none|Environment variables for the sandbox|
|labels|object|true|none|Labels for the sandbox|
|public|boolean|true|none|Whether the sandbox http preview is public|
|networkBlockAll|boolean|true|none|Whether to block all network access for the sandbox|
|networkAllowList|string|false|none|Comma-separated list of allowed CIDR network addresses for the sandbox|
|domainAllowList|string|false|none|Comma-separated list of allowed domains for the sandbox|
|target|string|true|none|The target environment for the sandbox|
|cpu|number|true|none|The CPU quota for the sandbox|
|gpu|number|true|none|The GPU quota for the sandbox|
|gpuType|object|false|none|The GPU type assigned to the sandbox|
|memory|number|true|none|The memory quota for the sandbox|
|disk|number|true|none|The disk quota for the sandbox|
|state|object|false|none|The state of the sandbox|
|desiredState|object|false|none|The desired state of the sandbox|
|errorReason|string|false|none|The error reason of the sandbox|
|recoverable|boolean|false|none|Whether the sandbox error is recoverable.|
|backupState|string|false|none|The state of the backup|
|backupCreatedAt|string|false|none|The creation timestamp of the last backup|
|autoStopInterval|number|false|none|Auto-stop interval in minutes (0 means disabled)|
|autoArchiveInterval|number|false|none|Auto-archive interval in minutes|
|autoDeleteInterval|number|false|none|Auto-delete interval in minutes (negative value means disabled, 0 means delete immediately upon stopping)|
|volumes|[[SandboxVolume](#schemasandboxvolume)]|false|none|Array of volumes attached to the sandbox|
|buildInfo|object|false|none|Build information for the sandbox|
|createdAt|string|false|none|The creation timestamp of the sandbox|
|updatedAt|string|false|none|The last update timestamp of the sandbox|
|lastActivityAt|string|false|none|The last activity timestamp of the sandbox|
|sandboxClass|string|false|none|The class of the sandbox|
|daemonVersion|string|false|none|The version of the daemon running in the sandbox|
|runnerId|string|false|none|The runner ID of the sandbox|
|linkedSandboxId|string|false|none|ID of the sandbox this sandbox is linked to. When set, the sandbox is co-located on the same runner as the linked sandbox.|
|toolboxProxyUrl|string|true|none|The toolbox proxy URL for the sandbox|

#### Enumerated Values

|Property|Value|
|---|---|
|backupState|None|
|backupState|Pending|
|backupState|InProgress|
|backupState|Completed|
|backupState|Error|
|sandboxClass|linux-vm|
|sandboxClass|container|
|sandboxClass|android|
|sandboxClass|windows|

<h2 id="tocS_PaginatedSandboxes_deprecated">PaginatedSandboxes_deprecated</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedsandboxes_deprecated"></a>
<a id="schema_PaginatedSandboxes_deprecated"></a>
<a id="tocSpaginatedsandboxes_deprecated"></a>
<a id="tocspaginatedsandboxes_deprecated"></a>

```json
{
  "total": 0.8008281904610115,
  "totalPages": 1.4658129805029452,
  "page": 6.027456183070403,
  "items": [
    {
      "memory": 4,
      "linkedSandboxId": "sandbox123",
      "buildInfo": "",
      "toolboxProxyUrl": "https://proxy.app.daytona.io/toolbox",
      "lastActivityAt": "2024-10-01T12:00:00Z",
      "autoStopInterval": 30,
      "organizationId": "organization123",
      "createdAt": "2024-10-01T12:00:00Z",
      "networkBlockAll": false,
      "autoDeleteInterval": 30,
      "domainAllowList": "example.com,*.daytona.io",
      "public": false,
      "errorReason": "The sandbox is not running",
      "runnerId": "runner123",
      "id": "sandbox123",
      "state": "creating",
      "gpuType": "H100",
      "updatedAt": "2024-10-01T12:00:00Z",
      "sandboxClass": "linux-vm",
      "desiredState": "destroyed",
      "networkAllowList": "192.168.1.0/16,10.0.0.0/24",
      "volumes": [
        {
          "mountPath": "/data",
          "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "subpath": "users/alice"
        },
        {
          "mountPath": "/data",
          "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "subpath": "users/alice"
        }
      ],
      "cpu": 2,
      "recoverable": true,
      "env": {
        "NODE_ENV": "production"
      },
      "gpu": 0,
      "daemonVersion": "1.0.0",
      "backupCreatedAt": "2024-10-01T12:00:00Z",
      "labels": {
        "daytona.io/public": "true"
      },
      "target": "local",
      "disk": 10,
      "name": "MySandbox",
      "backupState": "None",
      "user": "daytona",
      "autoArchiveInterval": 10080,
      "snapshot": "daytonaio/sandbox:latest"
    },
    {
      "memory": 4,
      "linkedSandboxId": "sandbox123",
      "buildInfo": "",
      "toolboxProxyUrl": "https://proxy.app.daytona.io/toolbox",
      "lastActivityAt": "2024-10-01T12:00:00Z",
      "autoStopInterval": 30,
      "organizationId": "organization123",
      "createdAt": "2024-10-01T12:00:00Z",
      "networkBlockAll": false,
      "autoDeleteInterval": 30,
      "domainAllowList": "example.com,*.daytona.io",
      "public": false,
      "errorReason": "The sandbox is not running",
      "runnerId": "runner123",
      "id": "sandbox123",
      "state": "creating",
      "gpuType": "H100",
      "updatedAt": "2024-10-01T12:00:00Z",
      "sandboxClass": "linux-vm",
      "desiredState": "destroyed",
      "networkAllowList": "192.168.1.0/16,10.0.0.0/24",
      "volumes": [
        {
          "mountPath": "/data",
          "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "subpath": "users/alice"
        },
        {
          "mountPath": "/data",
          "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "subpath": "users/alice"
        }
      ],
      "cpu": 2,
      "recoverable": true,
      "env": {
        "NODE_ENV": "production"
      },
      "gpu": 0,
      "daemonVersion": "1.0.0",
      "backupCreatedAt": "2024-10-01T12:00:00Z",
      "labels": {
        "daytona.io/public": "true"
      },
      "target": "local",
      "disk": 10,
      "name": "MySandbox",
      "backupState": "None",
      "user": "daytona",
      "autoArchiveInterval": 10080,
      "snapshot": "daytonaio/sandbox:latest"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Sandbox](#schemasandbox)]|true|none|none|
|total|number|true|none|none|
|page|number|true|none|none|
|totalPages|number|true|none|none|

<h2 id="tocS_CreateBuildInfo">CreateBuildInfo</h2>
<!-- backwards compatibility -->
<a id="schemacreatebuildinfo"></a>
<a id="schema_CreateBuildInfo"></a>
<a id="tocScreatebuildinfo"></a>
<a id="tocscreatebuildinfo"></a>

```json
{
  "dockerfileContent": "FROM node:14\nWORKDIR /app\nCOPY . .\nRUN npm install\nCMD [\"npm\", \"start\"]",
  "contextHashes": [
    "hash1",
    "hash2"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dockerfileContent|string|true|none|The Dockerfile content used for the build|
|contextHashes|[string]|false|none|The context hashes used for the build|

<h2 id="tocS_CreateSandbox">CreateSandbox</h2>
<!-- backwards compatibility -->
<a id="schemacreatesandbox"></a>
<a id="schema_CreateSandbox"></a>
<a id="tocScreatesandbox"></a>
<a id="tocscreatesandbox"></a>

```json
{
  "memory": 1,
  "buildInfo": "",
  "networkAllowList": "192.168.1.0/16,10.0.0.0/24",
  "volumes": [
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    },
    {
      "mountPath": "/data",
      "volumeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "subpath": "users/alice"
    }
  ],
  "cpu": 2,
  "env": {
    "NODE_ENV": "production"
  },
  "gpu": 1,
  "autoStopInterval": 30,
  "labels": {
    "daytona.io/public": "true"
  },
  "target": "us",
  "networkBlockAll": false,
  "disk": 3,
  "autoDeleteInterval": 30,
  "domainAllowList": "example.com,*.daytona.io",
  "public": false,
  "linkedSandbox": "sandbox123",
  "name": "MySandbox",
  "user": "daytona",
  "autoArchiveInterval": 10080,
  "snapshot": "ubuntu-4vcpu-8ram-100gb",
  "gpuType": [
    "H100"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the sandbox. If not provided, the sandbox ID will be used as the name|
|snapshot|string|false|none|The ID or name of the snapshot used for the sandbox|
|user|string|false|none|The user associated with the project|
|env|object|false|none|Environment variables for the sandbox|
|labels|object|false|none|Labels for the sandbox|
|public|boolean|false|none|Whether the sandbox http preview is publicly accessible|
|networkBlockAll|boolean|false|none|Whether to block all network access for the sandbox|
|networkAllowList|string|false|none|Comma-separated list of allowed CIDR network addresses for the sandbox|
|domainAllowList|string|false|none|Comma-separated list of allowed domains for the sandbox|
|target|string|false|none|The target (region) where the sandbox will be created|
|cpu|integer|false|none|CPU cores allocated to the sandbox|
|gpu|integer|false|none|GPU units allocated to the sandbox|
|gpuType|[[GpuType](#schemagputype)]|false|none|Preferred GPU type for the sandbox. Accepts a single value or an ordered preference list — the scheduler tries each in order and pins the sandbox to the first that has capacity.|
|memory|integer|false|none|Memory allocated to the sandbox in GB|
|disk|integer|false|none|Disk space allocated to the sandbox in GB|
|autoStopInterval|integer|false|none|Auto-stop interval in minutes (0 means disabled)|
|autoArchiveInterval|integer|false|none|Auto-archive interval in minutes (0 means the maximum interval will be used)|
|autoDeleteInterval|integer|false|none|Auto-delete interval in minutes (negative value means disabled, 0 means delete immediately upon stopping)|
|volumes|[[SandboxVolume](#schemasandboxvolume)]|false|none|Array of volumes to attach to the sandbox|
|buildInfo|object|false|none|Build information for the sandbox|
|linkedSandbox|string|false|none|ID or name of an existing sandbox to link the new sandbox to. The new sandbox will be scheduled on the same runner as the linked sandbox so a local network can be established between them. Linked sandboxes must be ephemeral (autoDeleteInterval=0) and cannot themselves be linked to another sandbox.|

#### Enumerated Values

|Property|Value|
|---|---|
|gpuType|H100|
|gpuType|RTX-PRO-6000|

<h2 id="tocS_ResizeSandbox">ResizeSandbox</h2>
<!-- backwards compatibility -->
<a id="schemaresizesandbox"></a>
<a id="schema_ResizeSandbox"></a>
<a id="tocSresizesandbox"></a>
<a id="tocsresizesandbox"></a>

```json
{
  "disk": 20,
  "memory": 4,
  "cpu": 2
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpu|integer|false|none|CPU cores to allocate to the sandbox (minimum: 1)|
|memory|integer|false|none|Memory in GB to allocate to the sandbox (minimum: 1)|
|disk|integer|false|none|Disk space in GB to allocate to the sandbox (can only be increased)|

<h2 id="tocS_SandboxLabels">SandboxLabels</h2>
<!-- backwards compatibility -->
<a id="schemasandboxlabels"></a>
<a id="schema_SandboxLabels"></a>
<a id="tocSsandboxlabels"></a>
<a id="tocssandboxlabels"></a>

```json
{
  "labels": {
    "environment": "dev",
    "team": "backend"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|object|true|none|Key-value pairs of labels|

<h2 id="tocS_UpdateSandboxStateDto">UpdateSandboxStateDto</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesandboxstatedto"></a>
<a id="schema_UpdateSandboxStateDto"></a>
<a id="tocSupdatesandboxstatedto"></a>
<a id="tocsupdatesandboxstatedto"></a>

```json
{
  "errorReason": "Failed to pull snapshot image",
  "recoverable": true,
  "state": "started"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|string|true|none|The new state for the sandbox|
|errorReason|string|false|none|Optional error message when reporting an error state|
|recoverable|boolean|false|none|Whether the sandbox is recoverable|

#### Enumerated Values

|Property|Value|
|---|---|
|state|creating|
|state|restoring|
|state|destroyed|
|state|destroying|
|state|started|
|state|stopped|
|state|starting|
|state|stopping|
|state|error|
|state|build_failed|
|state|pending_build|
|state|building_snapshot|
|state|unknown|
|state|pulling_snapshot|
|state|archived|
|state|archiving|
|state|resizing|
|state|snapshotting|
|state|forking|
|state|pausing|
|state|paused|
|state|resuming|

<h2 id="tocS_CreateSandboxSnapshot">CreateSandboxSnapshot</h2>
<!-- backwards compatibility -->
<a id="schemacreatesandboxsnapshot"></a>
<a id="schema_CreateSandboxSnapshot"></a>
<a id="tocScreatesandboxsnapshot"></a>
<a id="tocscreatesandboxsnapshot"></a>

```json
{
  "includeMemory": false,
  "name": "my-dev-env-v1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Name for the new snapshot|
|includeMemory|boolean|false|none|Include the VM's memory in the snapshot. VM sandboxes only. When true the sandbox must be STARTED; when false (default) VM sandboxes must be STOPPED. Container sandboxes do not support memory snapshots.|

<h2 id="tocS_ForkSandbox">ForkSandbox</h2>
<!-- backwards compatibility -->
<a id="schemaforksandbox"></a>
<a id="schema_ForkSandbox"></a>
<a id="tocSforksandbox"></a>
<a id="tocsforksandbox"></a>

```json
{
  "name": "my-forked-sandbox"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name for the forked sandbox. If not provided, a unique name will be generated.|

<h2 id="tocS_UpdateSandboxNetworkSettings">UpdateSandboxNetworkSettings</h2>
<!-- backwards compatibility -->
<a id="schemaupdatesandboxnetworksettings"></a>
<a id="schema_UpdateSandboxNetworkSettings"></a>
<a id="tocSupdatesandboxnetworksettings"></a>
<a id="tocsupdatesandboxnetworksettings"></a>

```json
{
  "networkBlockAll": false,
  "domainAllowList": "example.com,*.daytona.io",
  "networkAllowList": "192.168.1.0/16,10.0.0.0/24"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|networkBlockAll|boolean|false|none|Whether to block all network access for the sandbox|
|networkAllowList|string|false|none|Comma-separated list of allowed CIDR network addresses for the sandbox|
|domainAllowList|string|false|none|Comma-separated list of allowed domains for the sandbox|

<h2 id="tocS_PortPreviewUrl">PortPreviewUrl</h2>
<!-- backwards compatibility -->
<a id="schemaportpreviewurl"></a>
<a id="schema_PortPreviewUrl"></a>
<a id="tocSportpreviewurl"></a>
<a id="tocsportpreviewurl"></a>

```json
{
  "sandboxId": "123456",
  "url": "https://{port}-{sandboxId}.{proxyDomain}",
  "token": "ul67qtv-jl6wb9z5o3eii-ljqt9qed6l"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sandboxId|string|true|none|ID of the sandbox|
|url|string|true|none|Preview url|
|token|string|true|none|Access token|

<h2 id="tocS_SignedPortPreviewUrl">SignedPortPreviewUrl</h2>
<!-- backwards compatibility -->
<a id="schemasignedportpreviewurl"></a>
<a id="schema_SignedPortPreviewUrl"></a>
<a id="tocSsignedportpreviewurl"></a>
<a id="tocssignedportpreviewurl"></a>

```json
{
  "port": 3000,
  "sandboxId": "123456",
  "url": "https://{port}-{token}.{proxyDomain}",
  "token": "jl6wb9z5o3eii"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sandboxId|string|true|none|ID of the sandbox|
|port|integer|true|none|Port number of the signed preview URL|
|token|string|true|none|Token of the signed preview URL|
|url|string|true|none|Signed preview url|

<h2 id="tocS_Url">Url</h2>
<!-- backwards compatibility -->
<a id="schemaurl"></a>
<a id="schema_Url"></a>
<a id="tocSurl"></a>
<a id="tocsurl"></a>

```json
{
  "url": "url"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|URL response|

<h2 id="tocS_SshAccessDto">SshAccessDto</h2>
<!-- backwards compatibility -->
<a id="schemasshaccessdto"></a>
<a id="schema_SshAccessDto"></a>
<a id="tocSsshaccessdto"></a>
<a id="tocssshaccessdto"></a>

```json
{
  "createdAt": "2025-01-01T11:00:00Z",
  "sshCommand": "ssh -p 2222 token@localhost",
  "sandboxId": "123e4567-e89b-12d3-a456-426614174000",
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "expiresAt": "2025-01-01T12:00:00Z",
  "token": "abc123def456ghi789jkl012mno345pqr678stu901vwx234yz",
  "updatedAt": "2025-01-01T11:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the SSH access|
|sandboxId|string|true|none|ID of the sandbox this SSH access is for|
|token|string|true|none|SSH access token|
|expiresAt|string(date-time)|true|none|When the SSH access expires|
|createdAt|string(date-time)|true|none|When the SSH access was created|
|updatedAt|string(date-time)|true|none|When the SSH access was last updated|
|sshCommand|string|true|none|SSH command to connect to the sandbox|

<h2 id="tocS_SshAccessValidationDto">SshAccessValidationDto</h2>
<!-- backwards compatibility -->
<a id="schemasshaccessvalidationdto"></a>
<a id="schema_SshAccessValidationDto"></a>
<a id="tocSsshaccessvalidationdto"></a>
<a id="tocssshaccessvalidationdto"></a>

```json
{
  "valid": true,
  "sandboxId": "123e4567-e89b-12d3-a456-426614174000"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|valid|boolean|true|none|Whether the SSH access token is valid|
|sandboxId|string|true|none|ID of the sandbox this SSH access is for|

<h2 id="tocS_ToolboxProxyUrl">ToolboxProxyUrl</h2>
<!-- backwards compatibility -->
<a id="schematoolboxproxyurl"></a>
<a id="schema_ToolboxProxyUrl"></a>
<a id="tocStoolboxproxyurl"></a>
<a id="tocstoolboxproxyurl"></a>

```json
{
  "url": "https://proxy.app.daytona.io/toolbox"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|The toolbox proxy URL for the sandbox|

<h2 id="tocS_RegionQuota">RegionQuota</h2>
<!-- backwards compatibility -->
<a id="schemaregionquota"></a>
<a id="schema_RegionQuota"></a>
<a id="tocSregionquota"></a>
<a id="tocsregionquota"></a>

```json
{
  "totalCpuQuota": 0.8008281904610115,
  "allowedGpuTypes": [
    "H100",
    "H100"
  ],
  "maxDiskPerGpuSandbox": 4.145608029883936,
  "totalGpuQuota": 5.962133916683182,
  "maxCpuPerGpuSandbox": 3.616076749251911,
  "organizationId": "organizationId",
  "maxCpuPerSandbox": 5.637376656633329,
  "maxDiskPerSandbox": 7.061401241503109,
  "maxDiskPerNonEphemeralSandbox": 9.301444243932576,
  "regionId": "regionId",
  "maxMemoryPerSandbox": 2.3021358869347655,
  "totalMemoryQuota": 6.027456183070403,
  "totalDiskQuota": 1.4658129805029452,
  "sandboxClass": "",
  "maxMemoryPerGpuSandbox": 2.027123023002322
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|organizationId|string|true|none|none|
|regionId|string|true|none|none|
|sandboxClass|object|true|none|none|
|totalCpuQuota|number|true|none|none|
|totalMemoryQuota|number|true|none|none|
|totalDiskQuota|number|true|none|none|
|totalGpuQuota|number|true|none|none|
|allowedGpuTypes|[[GpuType](#schemagputype)]|false|none|none|
|maxCpuPerSandbox|number \| null|true|none|none|
|maxMemoryPerSandbox|number \| null|true|none|none|
|maxDiskPerSandbox|number \| null|true|none|none|
|maxDiskPerNonEphemeralSandbox|number \| null|true|none|none|
|maxCpuPerGpuSandbox|number \| null|true|none|none|
|maxMemoryPerGpuSandbox|number \| null|true|none|none|
|maxDiskPerGpuSandbox|number \| null|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|allowedGpuTypes|H100|
|allowedGpuTypes|RTX-PRO-6000|

<h2 id="tocS_CreateRunner">CreateRunner</h2>
<!-- backwards compatibility -->
<a id="schemacreaterunner"></a>
<a id="schema_CreateRunner"></a>
<a id="tocScreaterunner"></a>
<a id="tocscreaterunner"></a>

```json
{
  "regionId": "regionId",
  "name": "name",
  "tags": [
    "gpu",
    "us-east"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|regionId|string|true|none|none|
|name|string|true|none|none|
|tags|[string]|false|none|Tags to associate with the runner|

<h2 id="tocS_CreateRunnerResponse">CreateRunnerResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreaterunnerresponse"></a>
<a id="schema_CreateRunnerResponse"></a>
<a id="tocScreaterunnerresponse"></a>
<a id="tocscreaterunnerresponse"></a>

```json
{
  "apiKey": "dtn_1234567890",
  "id": "runner123"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the runner|
|apiKey|string|true|none|The API key for the runner|

<h2 id="tocS_RunnerState">RunnerState</h2>
<!-- backwards compatibility -->
<a id="schemarunnerstate"></a>
<a id="schema_RunnerState"></a>
<a id="tocSrunnerstate"></a>
<a id="tocsrunnerstate"></a>

```json
"initializing"
```

The state of the runner

<h2 id="tocS_RunnerClass">RunnerClass</h2>
<!-- backwards compatibility -->
<a id="schemarunnerclass"></a>
<a id="schema_RunnerClass"></a>
<a id="tocSrunnerclass"></a>
<a id="tocsrunnerclass"></a>

```json
"container"
```

The class of the runner. Deprecated and always returns "container" for backward compatibility - use sandboxClass instead.

<h2 id="tocS_RunnerFull">RunnerFull</h2>
<!-- backwards compatibility -->
<a id="schemarunnerfull"></a>
<a id="schema_RunnerFull"></a>
<a id="tocSrunnerfull"></a>
<a id="tocsrunnerfull"></a>

```json
{
  "currentStartedSandboxes": 5,
  "appVersion": "v0.0.0-dev",
  "memory": 16,
  "currentMemoryUsagePercentage": 68.2,
  "apiKey": "dtn_1234567890",
  "availabilityScore": 85,
  "currentDiskUsagePercentage": 33.8,
  "currentCpuUsagePercentage": 45.6,
  "createdAt": "2023-10-01T12:00:00Z",
  "apiVersion": "0",
  "apiUrl": "https://api.runner1.example.com",
  "regionType": "shared",
  "id": "runner123",
  "state": "initializing",
  "unschedulable": false,
  "currentAllocatedDiskGiB": 50000,
  "currentAllocatedMemoryGiB": 8000,
  "gpuType": "gpuType",
  "sandboxClass": "linux-vm",
  "currentAllocatedCpu": 4000,
  "updatedAt": "2023-10-01T12:00:00Z",
  "proxyUrl": "https://proxy.runner1.example.com",
  "cpu": 8,
  "gpu": 1,
  "currentSnapshotCount": 12,
  "version": "0",
  "tags": [
    "gpu",
    "us-east"
  ],
  "disk": 100,
  "domain": "runner1.example.com",
  "name": "runner1",
  "runnerClass": "container",
  "region": "us",
  "lastChecked": "2024-10-01T12:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the runner|
|domain|string|false|none|The domain of the runner|
|apiUrl|string|false|none|The API URL of the runner|
|proxyUrl|string|false|none|The proxy URL of the runner|
|cpu|number|true|none|The CPU capacity of the runner|
|memory|number|true|none|The memory capacity of the runner in GiB|
|disk|number|true|none|The disk capacity of the runner in GiB|
|gpu|number|false|none|The GPU capacity of the runner|
|gpuType|string|false|none|The type of GPU|
|sandboxClass|object|false|none|The sandbox class supported by this runner|
|currentCpuUsagePercentage|number|false|none|Current CPU usage percentage|
|currentMemoryUsagePercentage|number|false|none|Current RAM usage percentage|
|currentDiskUsagePercentage|number|false|none|Current disk usage percentage|
|currentAllocatedCpu|number|false|none|Current allocated CPU|
|currentAllocatedMemoryGiB|number|false|none|Current allocated memory in GiB|
|currentAllocatedDiskGiB|number|false|none|Current allocated disk in GiB|
|currentSnapshotCount|number|false|none|Current snapshot count|
|currentStartedSandboxes|number|false|none|Current number of started sandboxes|
|availabilityScore|number|false|none|Runner availability score|
|region|string|true|none|The region of the runner|
|name|string|true|none|The name of the runner|
|state|object|true|none|The state of the runner|
|lastChecked|string|false|none|The last time the runner was checked|
|unschedulable|boolean|true|none|Whether the runner is unschedulable|
|tags|[string]|true|none|Tags associated with the runner|
|createdAt|string|true|none|The creation timestamp of the runner|
|updatedAt|string|true|none|The last update timestamp of the runner|
|version|string|true|none|**Deprecated.** The version of the runner (deprecated in favor of apiVersion)|
|apiVersion|string|true|none|**Deprecated.** The api version of the runner|
|runnerClass|object|true|none|**Deprecated.** The class of the runner. Deprecated and always returns "container" for backward compatibility - use sandboxClass instead.|
|appVersion|string|false|none|**Deprecated.** The app version of the runner|
|apiKey|string|true|none|The API key for the runner|
|regionType|object|false|none|The region type of the runner|

<h2 id="tocS_RunnerSnapshotDto">RunnerSnapshotDto</h2>
<!-- backwards compatibility -->
<a id="schemarunnersnapshotdto"></a>
<a id="schema_RunnerSnapshotDto"></a>
<a id="tocSrunnersnapshotdto"></a>
<a id="tocsrunnersnapshotdto"></a>

```json
{
  "runnerDomain": "runner.example.com",
  "runnerId": "123e4567-e89b-12d3-a456-426614174000",
  "runnerSnapshotId": "123e4567-e89b-12d3-a456-426614174000"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|runnerSnapshotId|string|true|none|Runner snapshot ID|
|runnerId|string|true|none|Runner ID|
|runnerDomain|string|false|none|Runner domain|

<h2 id="tocS_Runner">Runner</h2>
<!-- backwards compatibility -->
<a id="schemarunner"></a>
<a id="schema_Runner"></a>
<a id="tocSrunner"></a>
<a id="tocsrunner"></a>

```json
{
  "currentStartedSandboxes": 5,
  "appVersion": "v0.0.0-dev",
  "memory": 16,
  "currentMemoryUsagePercentage": 68.2,
  "availabilityScore": 85,
  "currentDiskUsagePercentage": 33.8,
  "currentCpuUsagePercentage": 45.6,
  "createdAt": "2023-10-01T12:00:00Z",
  "apiVersion": "0",
  "apiUrl": "https://api.runner1.example.com",
  "id": "runner123",
  "state": "initializing",
  "unschedulable": false,
  "currentAllocatedDiskGiB": 50000,
  "currentAllocatedMemoryGiB": 8000,
  "gpuType": "gpuType",
  "sandboxClass": "linux-vm",
  "currentAllocatedCpu": 4000,
  "updatedAt": "2023-10-01T12:00:00Z",
  "proxyUrl": "https://proxy.runner1.example.com",
  "cpu": 8,
  "gpu": 1,
  "currentSnapshotCount": 12,
  "version": "0",
  "tags": [
    "gpu",
    "us-east"
  ],
  "disk": 100,
  "domain": "runner1.example.com",
  "name": "runner1",
  "runnerClass": "container",
  "region": "us",
  "lastChecked": "2024-10-01T12:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the runner|
|domain|string|false|none|The domain of the runner|
|apiUrl|string|false|none|The API URL of the runner|
|proxyUrl|string|false|none|The proxy URL of the runner|
|cpu|number|true|none|The CPU capacity of the runner|
|memory|number|true|none|The memory capacity of the runner in GiB|
|disk|number|true|none|The disk capacity of the runner in GiB|
|gpu|number|false|none|The GPU capacity of the runner|
|gpuType|string|false|none|The type of GPU|
|sandboxClass|object|false|none|The sandbox class supported by this runner|
|currentCpuUsagePercentage|number|false|none|Current CPU usage percentage|
|currentMemoryUsagePercentage|number|false|none|Current RAM usage percentage|
|currentDiskUsagePercentage|number|false|none|Current disk usage percentage|
|currentAllocatedCpu|number|false|none|Current allocated CPU|
|currentAllocatedMemoryGiB|number|false|none|Current allocated memory in GiB|
|currentAllocatedDiskGiB|number|false|none|Current allocated disk in GiB|
|currentSnapshotCount|number|false|none|Current snapshot count|
|currentStartedSandboxes|number|false|none|Current number of started sandboxes|
|availabilityScore|number|false|none|Runner availability score|
|region|string|true|none|The region of the runner|
|name|string|true|none|The name of the runner|
|state|object|true|none|The state of the runner|
|lastChecked|string|false|none|The last time the runner was checked|
|unschedulable|boolean|true|none|Whether the runner is unschedulable|
|tags|[string]|true|none|Tags associated with the runner|
|createdAt|string|true|none|The creation timestamp of the runner|
|updatedAt|string|true|none|The last update timestamp of the runner|
|version|string|true|none|**Deprecated.** The version of the runner (deprecated in favor of apiVersion)|
|apiVersion|string|true|none|**Deprecated.** The api version of the runner|
|runnerClass|object|true|none|**Deprecated.** The class of the runner. Deprecated and always returns "container" for backward compatibility - use sandboxClass instead.|
|appVersion|string|false|none|**Deprecated.** The app version of the runner|

<h2 id="tocS_RunnerHealthMetrics">RunnerHealthMetrics</h2>
<!-- backwards compatibility -->
<a id="schemarunnerhealthmetrics"></a>
<a id="schema_RunnerHealthMetrics"></a>
<a id="tocSrunnerhealthmetrics"></a>
<a id="tocsrunnerhealthmetrics"></a>

```json
{
  "currentCpuLoadAverage": 0.98,
  "currentCpuUsagePercentage": 45.5,
  "currentMemoryUsagePercentage": 60.2,
  "currentDiskUsagePercentage": 35.8,
  "currentAllocatedCpu": 8,
  "currentAllocatedMemoryGiB": 16,
  "currentAllocatedDiskGiB": 100,
  "currentSnapshotCount": 5,
  "currentStartedSandboxes": 10,
  "cpu": 8,
  "memoryGiB": 16,
  "diskGiB": 100,
  "gpu": 4,
  "gpuType": "NVIDIA H100 80GB HBM3"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentCpuLoadAverage|number|true|none|Current CPU load average|
|currentCpuUsagePercentage|number|true|none|Current CPU usage percentage|
|currentMemoryUsagePercentage|number|true|none|Current memory usage percentage|
|currentDiskUsagePercentage|number|true|none|Current disk usage percentage|
|currentAllocatedCpu|number|true|none|Currently allocated CPU cores|
|currentAllocatedMemoryGiB|number|true|none|Currently allocated memory in GiB|
|currentAllocatedDiskGiB|number|true|none|Currently allocated disk in GiB|
|currentSnapshotCount|number|true|none|Number of snapshots currently stored|
|currentStartedSandboxes|number|true|none|Number of started sandboxes|
|cpu|number|true|none|Total CPU cores on the runner|
|memoryGiB|number|true|none|Total RAM in GiB on the runner|
|diskGiB|number|true|none|Total disk space in GiB on the runner|
|gpu|number|false|none|Total number of GPUs on the runner|
|gpuType|string|false|none|GPU model name|

<h2 id="tocS_RunnerServiceHealth">RunnerServiceHealth</h2>
<!-- backwards compatibility -->
<a id="schemarunnerservicehealth"></a>
<a id="schema_RunnerServiceHealth"></a>
<a id="tocSrunnerservicehealth"></a>
<a id="tocsrunnerservicehealth"></a>

```json
{
  "healthy": false,
  "errorReason": "Cannot connect to the runner",
  "serviceName": "runner"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceName|string|true|none|Name of the service being checked|
|healthy|boolean|true|none|Whether the service is healthy|
|errorReason|string|false|none|Error reason if the service is unhealthy|

<h2 id="tocS_RunnerHealthcheck">RunnerHealthcheck</h2>
<!-- backwards compatibility -->
<a id="schemarunnerhealthcheck"></a>
<a id="schema_RunnerHealthcheck"></a>
<a id="tocSrunnerhealthcheck"></a>
<a id="tocsrunnerhealthcheck"></a>

```json
{
  "appVersion": "v0.0.0-dev",
  "apiUrl": "http://api.daytona.example.com:8080",
  "proxyUrl": "http://proxy.daytona.example.com:8080",
  "domain": "runner-123.daytona.example.com",
  "serviceHealth": [
    {
      "healthy": false,
      "errorReason": "Cannot connect to the runner",
      "serviceName": "runner"
    },
    {
      "healthy": false,
      "errorReason": "Cannot connect to the runner",
      "serviceName": "runner"
    }
  ],
  "metrics": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metrics|object|false|none|Runner metrics|
|serviceHealth|[[RunnerServiceHealth](#schemarunnerservicehealth)]|false|none|Health status of individual services on the runner|
|domain|string|false|none|Runner domain|
|proxyUrl|string|false|none|Runner proxy URL|
|apiUrl|string|false|none|Runner API URL|
|appVersion|string|true|none|Runner app version|

<h2 id="tocS_ProjectDirResponse">ProjectDirResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprojectdirresponse"></a>
<a id="schema_ProjectDirResponse"></a>
<a id="tocSprojectdirresponse"></a>
<a id="tocsprojectdirresponse"></a>

```json
{
  "dir": "dir"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dir|string|false|none|none|

<h2 id="tocS_UserHomeDirResponse">UserHomeDirResponse</h2>
<!-- backwards compatibility -->
<a id="schemauserhomedirresponse"></a>
<a id="schema_UserHomeDirResponse"></a>
<a id="tocSuserhomedirresponse"></a>
<a id="tocsuserhomedirresponse"></a>

```json
{
  "dir": "dir"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dir|string|false|none|none|

<h2 id="tocS_WorkDirResponse">WorkDirResponse</h2>
<!-- backwards compatibility -->
<a id="schemaworkdirresponse"></a>
<a id="schema_WorkDirResponse"></a>
<a id="tocSworkdirresponse"></a>
<a id="tocsworkdirresponse"></a>

```json
{
  "dir": "dir"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dir|string|false|none|none|

<h2 id="tocS_FileInfo">FileInfo</h2>
<!-- backwards compatibility -->
<a id="schemafileinfo"></a>
<a id="schema_FileInfo"></a>
<a id="tocSfileinfo"></a>
<a id="tocsfileinfo"></a>

```json
{
  "mode": "mode",
  "owner": "owner",
  "size": 0.8008281904610115,
  "modTime": "modTime",
  "permissions": "permissions",
  "name": "name",
  "isDir": true,
  "group": "group"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|isDir|boolean|true|none|none|
|size|number|true|none|none|
|modTime|string|true|none|none|
|mode|string|true|none|none|
|permissions|string|true|none|none|
|owner|string|true|none|none|
|group|string|true|none|none|

<h2 id="tocS_DownloadFiles">DownloadFiles</h2>
<!-- backwards compatibility -->
<a id="schemadownloadfiles"></a>
<a id="schema_DownloadFiles"></a>
<a id="tocSdownloadfiles"></a>
<a id="tocsdownloadfiles"></a>

```json
{
  "paths": [
    "paths",
    "paths"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paths|[string]|true|none|List of remote file paths to download|

<h2 id="tocS_Match">Match</h2>
<!-- backwards compatibility -->
<a id="schemamatch"></a>
<a id="schema_Match"></a>
<a id="tocSmatch"></a>
<a id="tocsmatch"></a>

```json
{
  "file": "file",
  "line": 0.8008281904610115,
  "content": "content"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string|true|none|none|
|line|number|true|none|none|
|content|string|true|none|none|

<h2 id="tocS_ReplaceRequest">ReplaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemareplacerequest"></a>
<a id="schema_ReplaceRequest"></a>
<a id="tocSreplacerequest"></a>
<a id="tocsreplacerequest"></a>

```json
{
  "newValue": "newValue",
  "pattern": "pattern",
  "files": [
    "files",
    "files"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|[string]|true|none|none|
|pattern|string|true|none|none|
|newValue|string|true|none|none|

<h2 id="tocS_ReplaceResult">ReplaceResult</h2>
<!-- backwards compatibility -->
<a id="schemareplaceresult"></a>
<a id="schema_ReplaceResult"></a>
<a id="tocSreplaceresult"></a>
<a id="tocsreplaceresult"></a>

```json
{
  "file": "file",
  "success": true,
  "error": "error"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string|false|none|none|
|success|boolean|false|none|none|
|error|string|false|none|none|

<h2 id="tocS_SearchFilesResponse">SearchFilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchfilesresponse"></a>
<a id="schema_SearchFilesResponse"></a>
<a id="tocSsearchfilesresponse"></a>
<a id="tocssearchfilesresponse"></a>

```json
{
  "files": [
    "files",
    "files"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|[string]|true|none|none|

<h2 id="tocS_UploadFile">UploadFile</h2>
<!-- backwards compatibility -->
<a id="schemauploadfile"></a>
<a id="schema_UploadFile"></a>
<a id="tocSuploadfile"></a>
<a id="tocsuploadfile"></a>

```json
{
  "file": "string",
  "path": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string(binary)|true|none|none|
|path|string|true|none|none|

<h2 id="tocS_GitAddRequest">GitAddRequest</h2>
<!-- backwards compatibility -->
<a id="schemagitaddrequest"></a>
<a id="schema_GitAddRequest"></a>
<a id="tocSgitaddrequest"></a>
<a id="tocsgitaddrequest"></a>

```json
{
  "path": "path",
  "files": [
    "files",
    "files"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|true|none|none|
|files|[string]|true|none|files to add (use . for all files)|

<h2 id="tocS_ListBranchResponse">ListBranchResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbranchresponse"></a>
<a id="schema_ListBranchResponse"></a>
<a id="tocSlistbranchresponse"></a>
<a id="tocslistbranchresponse"></a>

```json
{
  "branches": [
    "branches",
    "branches"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branches|[string]|true|none|none|

<h2 id="tocS_GitBranchRequest">GitBranchRequest</h2>
<!-- backwards compatibility -->
<a id="schemagitbranchrequest"></a>
<a id="schema_GitBranchRequest"></a>
<a id="tocSgitbranchrequest"></a>
<a id="tocsgitbranchrequest"></a>

```json
{
  "path": "path",
  "name": "name"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_GitDeleteBranchRequest">GitDeleteBranchRequest</h2>
<!-- backwards compatibility -->
<a id="schemagitdeletebranchrequest"></a>
<a id="schema_GitDeleteBranchRequest"></a>
<a id="tocSgitdeletebranchrequest"></a>
<a id="tocsgitdeletebranchrequest"></a>

```json
{
  "path": "path",
  "name": "name"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_GitCloneRequest">GitCloneRequest</h2>
<!-- backwards compatibility -->
<a id="schemagitclonerequest"></a>
<a id="schema_GitCloneRequest"></a>
<a id="tocSgitclonerequest"></a>
<a id="tocsgitclonerequest"></a>

```json
{
  "path": "path",
  "password": "password",
  "branch": "branch",
  "commit_id": "commit_id",
  "url": "url",
  "username": "username"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|none|
|path|string|true|none|none|
|username|string|false|none|none|
|password|string|false|none|none|
|branch|string|false|none|none|
|commit_id|string|false|none|none|

<h2 id="tocS_GitCommitRequest">GitCommitRequest</h2>
<!-- backwards compatibility -->
<a id="schemagitcommitrequest"></a>
<a id="schema_GitCommitRequest"></a>
<a id="tocSgitcommitrequest"></a>
<a id="tocsgitcommitrequest"></a>

```json
{
  "path": "path",
  "author": "author",
  "message": "message",
  "email": "email",
  "allow_empty": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|true|none|none|
|message|string|true|none|none|
|author|string|true|none|none|
|email|string|true|none|none|
|allow_empty|boolean|false|none|Allow creating an empty commit when no changes are staged|

<h2 id="tocS_GitCommitResponse">GitCommitResponse</h2>
<!-- backwards compatibility -->
<a id="schemagitcommitresponse"></a>
<a id="schema_GitCommitResponse"></a>
<a id="tocSgitcommitresponse"></a>
<a id="tocsgitcommitresponse"></a>

```json
{
  "hash": "hash"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hash|string|true|none|none|

<h2 id="tocS_GitCommitInfo">GitCommitInfo</h2>
<!-- backwards compatibility -->
<a id="schemagitcommitinfo"></a>
<a id="schema_GitCommitInfo"></a>
<a id="tocSgitcommitinfo"></a>
<a id="tocsgitcommitinfo"></a>

```json
{
  "author": "author",
  "message": "message",
  "hash": "hash",
  "email": "email",
  "timestamp": "timestamp"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hash|string|true|none|none|
|message|string|true|none|none|
|author|string|true|none|none|
|email|string|true|none|none|
|timestamp|string|true|none|none|

<h2 id="tocS_GitRepoRequest">GitRepoRequest</h2>
<!-- backwards compatibility -->
<a id="schemagitreporequest"></a>
<a id="schema_GitRepoRequest"></a>
<a id="tocSgitreporequest"></a>
<a id="tocsgitreporequest"></a>

```json
{
  "path": "path",
  "password": "password",
  "username": "username"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|true|none|none|
|username|string|false|none|none|
|password|string|false|none|none|

<h2 id="tocS_GitCheckoutRequest">GitCheckoutRequest</h2>
<!-- backwards compatibility -->
<a id="schemagitcheckoutrequest"></a>
<a id="schema_GitCheckoutRequest"></a>
<a id="tocSgitcheckoutrequest"></a>
<a id="tocsgitcheckoutrequest"></a>

```json
{
  "path": "path",
  "branch": "branch"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|true|none|none|
|branch|string|true|none|none|

<h2 id="tocS_FileStatus">FileStatus</h2>
<!-- backwards compatibility -->
<a id="schemafilestatus"></a>
<a id="schema_FileStatus"></a>
<a id="tocSfilestatus"></a>
<a id="tocsfilestatus"></a>

```json
{
  "extra": "extra",
  "name": "name",
  "staging": "staging",
  "worktree": "worktree"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|staging|string|true|none|none|
|worktree|string|true|none|none|
|extra|string|true|none|none|

<h2 id="tocS_GitStatus">GitStatus</h2>
<!-- backwards compatibility -->
<a id="schemagitstatus"></a>
<a id="schema_GitStatus"></a>
<a id="tocSgitstatus"></a>
<a id="tocsgitstatus"></a>

```json
{
  "behind": 6.027456183070403,
  "fileStatus": [
    {
      "extra": "extra",
      "name": "name",
      "staging": "staging",
      "worktree": "worktree"
    },
    {
      "extra": "extra",
      "name": "name",
      "staging": "staging",
      "worktree": "worktree"
    }
  ],
  "ahead": 0.8008281904610115,
  "branchPublished": true,
  "currentBranch": "currentBranch"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentBranch|string|true|none|none|
|fileStatus|[[FileStatus](#schemafilestatus)]|true|none|none|
|ahead|number|false|none|none|
|behind|number|false|none|none|
|branchPublished|boolean|false|none|none|

<h2 id="tocS_ExecuteRequest">ExecuteRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexecuterequest"></a>
<a id="schema_ExecuteRequest"></a>
<a id="tocSexecuterequest"></a>
<a id="tocsexecuterequest"></a>

```json
{
  "cwd": "cwd",
  "command": "command",
  "timeout": 0.8008281904610115
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|command|string|true|none|none|
|cwd|string|false|none|Current working directory|
|timeout|number|false|none|Timeout in seconds, defaults to 10 seconds|

<h2 id="tocS_ExecuteResponse">ExecuteResponse</h2>
<!-- backwards compatibility -->
<a id="schemaexecuteresponse"></a>
<a id="schema_ExecuteResponse"></a>
<a id="tocSexecuteresponse"></a>
<a id="tocsexecuteresponse"></a>

```json
{
  "result": "Command output here",
  "exitCode": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exitCode|number|true|none|Exit code|
|result|string|true|none|Command output|

<h2 id="tocS_Command">Command</h2>
<!-- backwards compatibility -->
<a id="schemacommand"></a>
<a id="schema_Command"></a>
<a id="tocScommand"></a>
<a id="tocscommand"></a>

```json
{
  "exitCode": 0,
  "id": "cmd-123",
  "command": "ls -la"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the command|
|command|string|true|none|The command that was executed|
|exitCode|number|false|none|The exit code of the command|

<h2 id="tocS_Session">Session</h2>
<!-- backwards compatibility -->
<a id="schemasession"></a>
<a id="schema_Session"></a>
<a id="tocSsession"></a>
<a id="tocssession"></a>

```json
{
  "sessionId": "session-123",
  "commands": [
    {
      "exitCode": 0,
      "id": "cmd-123",
      "command": "ls -la"
    },
    {
      "exitCode": 0,
      "id": "cmd-123",
      "command": "ls -la"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sessionId|string|true|none|The ID of the session|
|commands|[[Command](#schemacommand)]|true|none|The list of commands executed in this session|

<h2 id="tocS_CreateSessionRequest">CreateSessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatesessionrequest"></a>
<a id="schema_CreateSessionRequest"></a>
<a id="tocScreatesessionrequest"></a>
<a id="tocscreatesessionrequest"></a>

```json
{
  "sessionId": "session-123"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sessionId|string|true|none|The ID of the session|

<h2 id="tocS_SessionExecuteRequest">SessionExecuteRequest</h2>
<!-- backwards compatibility -->
<a id="schemasessionexecuterequest"></a>
<a id="schema_SessionExecuteRequest"></a>
<a id="tocSsessionexecuterequest"></a>
<a id="tocssessionexecuterequest"></a>

```json
{
  "async": false,
  "command": "ls -la",
  "runAsync": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|command|string|true|none|The command to execute|
|runAsync|boolean|false|none|Whether to execute the command asynchronously|
|async|boolean|false|none|**Deprecated.** Deprecated: Use runAsync instead. Whether to execute the command asynchronously|

<h2 id="tocS_SessionExecuteResponse">SessionExecuteResponse</h2>
<!-- backwards compatibility -->
<a id="schemasessionexecuteresponse"></a>
<a id="schema_SessionExecuteResponse"></a>
<a id="tocSsessionexecuteresponse"></a>
<a id="tocssessionexecuteresponse"></a>

```json
{
  "output": "total 20\ndrwxr-xr-x  4 user group  128 Mar 15 10:30 .",
  "cmdId": "cmd-123",
  "exitCode": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cmdId|string|false|none|The ID of the executed command|
|output|string|false|none|The output of the executed command marked with stdout and stderr prefixes|
|exitCode|number|false|none|The exit code of the executed command|

<h2 id="tocS_PtySessionInfo">PtySessionInfo</h2>
<!-- backwards compatibility -->
<a id="schemaptysessioninfo"></a>
<a id="schema_PtySessionInfo"></a>
<a id="tocSptysessioninfo"></a>
<a id="tocsptysessioninfo"></a>

```json
{
  "cwd": "/home/user",
  "createdAt": "2024-01-15T10:30:45Z",
  "lazyStart": false,
  "envs": {
    "TERM": "xterm-256color",
    "PS1": "\\u@daytona:\\w$ "
  },
  "active": true,
  "id": "pty-session-12345",
  "rows": 24,
  "cols": 80
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the PTY session|
|cwd|string|true|none|Starting directory for the PTY session, defaults to the sandbox's working directory|
|envs|object|true|none|Environment variables for the PTY session|
|cols|number|true|none|Number of terminal columns|
|rows|number|true|none|Number of terminal rows|
|createdAt|string|true|none|When the PTY session was created|
|active|boolean|true|none|Whether the PTY session is currently active|
|lazyStart|boolean|true|none|Whether the PTY session uses lazy start (only start when first client connects)|

<h2 id="tocS_PtyListResponse">PtyListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaptylistresponse"></a>
<a id="schema_PtyListResponse"></a>
<a id="tocSptylistresponse"></a>
<a id="tocsptylistresponse"></a>

```json
{
  "sessions": [
    {
      "cwd": "/home/user",
      "createdAt": "2024-01-15T10:30:45Z",
      "lazyStart": false,
      "envs": {
        "TERM": "xterm-256color",
        "PS1": "\\u@daytona:\\w$ "
      },
      "active": true,
      "id": "pty-session-12345",
      "rows": 24,
      "cols": 80
    },
    {
      "cwd": "/home/user",
      "createdAt": "2024-01-15T10:30:45Z",
      "lazyStart": false,
      "envs": {
        "TERM": "xterm-256color",
        "PS1": "\\u@daytona:\\w$ "
      },
      "active": true,
      "id": "pty-session-12345",
      "rows": 24,
      "cols": 80
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sessions|[[PtySessionInfo](#schemaptysessioninfo)]|true|none|List of active PTY sessions|

<h2 id="tocS_PtyCreateRequest">PtyCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaptycreaterequest"></a>
<a id="schema_PtyCreateRequest"></a>
<a id="tocSptycreaterequest"></a>
<a id="tocsptycreaterequest"></a>

```json
{
  "cwd": "/home/user",
  "lazyStart": false,
  "envs": {
    "TERM": "xterm-256color",
    "PS1": "\\u@daytona:\\w$ "
  },
  "id": "pty-session-12345",
  "rows": 24,
  "cols": 80
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the PTY session|
|cwd|string|false|none|Starting directory for the PTY session, defaults to the sandbox's working directory|
|envs|object|false|none|Environment variables for the PTY session|
|cols|number|false|none|Number of terminal columns|
|rows|number|false|none|Number of terminal rows|
|lazyStart|boolean|false|none|Whether to start the PTY session lazily (only start when first client connects)|

<h2 id="tocS_PtyCreateResponse">PtyCreateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaptycreateresponse"></a>
<a id="schema_PtyCreateResponse"></a>
<a id="tocSptycreateresponse"></a>
<a id="tocsptycreateresponse"></a>

```json
{
  "sessionId": "pty-session-12345"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sessionId|string|true|none|The unique identifier for the created PTY session|

<h2 id="tocS_PtyResizeRequest">PtyResizeRequest</h2>
<!-- backwards compatibility -->
<a id="schemaptyresizerequest"></a>
<a id="schema_PtyResizeRequest"></a>
<a id="tocSptyresizerequest"></a>
<a id="tocsptyresizerequest"></a>

```json
{
  "rows": 24,
  "cols": 80
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cols|number|true|none|Number of terminal columns|
|rows|number|true|none|Number of terminal rows|

<h2 id="tocS_Position">Position</h2>
<!-- backwards compatibility -->
<a id="schemaposition"></a>
<a id="schema_Position"></a>
<a id="tocSposition"></a>
<a id="tocsposition"></a>

```json
{
  "character": 6.027456183070403,
  "line": 0.8008281904610115
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|line|number|true|none|none|
|character|number|true|none|none|

<h2 id="tocS_CompletionContext">CompletionContext</h2>
<!-- backwards compatibility -->
<a id="schemacompletioncontext"></a>
<a id="schema_CompletionContext"></a>
<a id="tocScompletioncontext"></a>
<a id="tocscompletioncontext"></a>

```json
{
  "triggerCharacter": "triggerCharacter",
  "triggerKind": 1.4658129805029452
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|triggerKind|number|true|none|none|
|triggerCharacter|string|false|none|none|

<h2 id="tocS_LspCompletionParams">LspCompletionParams</h2>
<!-- backwards compatibility -->
<a id="schemalspcompletionparams"></a>
<a id="schema_LspCompletionParams"></a>
<a id="tocSlspcompletionparams"></a>
<a id="tocslspcompletionparams"></a>

```json
{
  "pathToProject": "pathToProject",
  "languageId": "languageId",
  "context": {
    "triggerCharacter": "triggerCharacter",
    "triggerKind": 1.4658129805029452
  },
  "position": {
    "character": 6.027456183070403,
    "line": 0.8008281904610115
  },
  "uri": "uri"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languageId|string|true|none|Language identifier|
|pathToProject|string|true|none|Path to the project|
|uri|string|true|none|Document URI|
|position|[Position](#schemaposition)|true|none|none|
|context|[CompletionContext](#schemacompletioncontext)|false|none|none|

<h2 id="tocS_CompletionItem">CompletionItem</h2>
<!-- backwards compatibility -->
<a id="schemacompletionitem"></a>
<a id="schema_CompletionItem"></a>
<a id="tocScompletionitem"></a>
<a id="tocscompletionitem"></a>

```json
{
  "insertText": "insertText",
  "kind": 0.8008281904610115,
  "sortText": "sortText",
  "documentation": "{}",
  "label": "label",
  "detail": "detail",
  "filterText": "filterText"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|none|
|kind|number|false|none|none|
|detail|string|false|none|none|
|documentation|object|false|none|none|
|sortText|string|false|none|none|
|filterText|string|false|none|none|
|insertText|string|false|none|none|

<h2 id="tocS_CompletionList">CompletionList</h2>
<!-- backwards compatibility -->
<a id="schemacompletionlist"></a>
<a id="schema_CompletionList"></a>
<a id="tocScompletionlist"></a>
<a id="tocscompletionlist"></a>

```json
{
  "items": [
    {
      "insertText": "insertText",
      "kind": 0.8008281904610115,
      "sortText": "sortText",
      "documentation": "{}",
      "label": "label",
      "detail": "detail",
      "filterText": "filterText"
    },
    {
      "insertText": "insertText",
      "kind": 0.8008281904610115,
      "sortText": "sortText",
      "documentation": "{}",
      "label": "label",
      "detail": "detail",
      "filterText": "filterText"
    }
  ],
  "isIncomplete": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isIncomplete|boolean|true|none|none|
|items|[[CompletionItem](#schemacompletionitem)]|true|none|none|

<h2 id="tocS_LspDocumentRequest">LspDocumentRequest</h2>
<!-- backwards compatibility -->
<a id="schemalspdocumentrequest"></a>
<a id="schema_LspDocumentRequest"></a>
<a id="tocSlspdocumentrequest"></a>
<a id="tocslspdocumentrequest"></a>

```json
{
  "pathToProject": "pathToProject",
  "languageId": "languageId",
  "uri": "uri"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languageId|string|true|none|Language identifier|
|pathToProject|string|true|none|Path to the project|
|uri|string|true|none|Document URI|

<h2 id="tocS_Range">Range</h2>
<!-- backwards compatibility -->
<a id="schemarange"></a>
<a id="schema_Range"></a>
<a id="tocSrange"></a>
<a id="tocsrange"></a>

```json
{
  "start": {
    "character": 6.027456183070403,
    "line": 0.8008281904610115
  },
  "end": {
    "character": 6.027456183070403,
    "line": 0.8008281904610115
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|[Position](#schemaposition)|true|none|none|
|end|[Position](#schemaposition)|true|none|none|

<h2 id="tocS_LspLocation">LspLocation</h2>
<!-- backwards compatibility -->
<a id="schemalsplocation"></a>
<a id="schema_LspLocation"></a>
<a id="tocSlsplocation"></a>
<a id="tocslsplocation"></a>

```json
{
  "range": {
    "start": {
      "character": 6.027456183070403,
      "line": 0.8008281904610115
    },
    "end": {
      "character": 6.027456183070403,
      "line": 0.8008281904610115
    }
  },
  "uri": "uri"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|range|[Range](#schemarange)|true|none|none|
|uri|string|true|none|none|

<h2 id="tocS_LspSymbol">LspSymbol</h2>
<!-- backwards compatibility -->
<a id="schemalspsymbol"></a>
<a id="schema_LspSymbol"></a>
<a id="tocSlspsymbol"></a>
<a id="tocslspsymbol"></a>

```json
{
  "kind": 0.8008281904610115,
  "name": "name",
  "location": {
    "range": {
      "start": {
        "character": 6.027456183070403,
        "line": 0.8008281904610115
      },
      "end": {
        "character": 6.027456183070403,
        "line": 0.8008281904610115
      }
    },
    "uri": "uri"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|number|true|none|none|
|location|[LspLocation](#schemalsplocation)|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_LspServerRequest">LspServerRequest</h2>
<!-- backwards compatibility -->
<a id="schemalspserverrequest"></a>
<a id="schema_LspServerRequest"></a>
<a id="tocSlspserverrequest"></a>
<a id="tocslspserverrequest"></a>

```json
{
  "pathToProject": "pathToProject",
  "languageId": "languageId"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languageId|string|true|none|Language identifier|
|pathToProject|string|true|none|Path to the project|

<h2 id="tocS_ComputerUseStartResponse">ComputerUseStartResponse</h2>
<!-- backwards compatibility -->
<a id="schemacomputerusestartresponse"></a>
<a id="schema_ComputerUseStartResponse"></a>
<a id="tocScomputerusestartresponse"></a>
<a id="tocscomputerusestartresponse"></a>

```json
{
  "message": "Computer use processes started successfully",
  "status": {
    "xvfb": {
      "running": true,
      "priority": 100,
      "autoRestart": true,
      "pid": 12345
    },
    "xfce4": {
      "running": true,
      "priority": 200,
      "autoRestart": true,
      "pid": 12346
    },
    "x11vnc": {
      "running": true,
      "priority": 300,
      "autoRestart": true,
      "pid": 12347
    },
    "novnc": {
      "running": true,
      "priority": 400,
      "autoRestart": true,
      "pid": 12348
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|A message indicating the result of starting computer use processes|
|status|object|true|none|Status information about all VNC desktop processes after starting|

<h2 id="tocS_ComputerUseStopResponse">ComputerUseStopResponse</h2>
<!-- backwards compatibility -->
<a id="schemacomputerusestopresponse"></a>
<a id="schema_ComputerUseStopResponse"></a>
<a id="tocScomputerusestopresponse"></a>
<a id="tocscomputerusestopresponse"></a>

```json
{
  "message": "Computer use processes stopped successfully",
  "status": {
    "xvfb": {
      "running": false,
      "priority": 100,
      "autoRestart": true
    },
    "xfce4": {
      "running": false,
      "priority": 200,
      "autoRestart": true
    },
    "x11vnc": {
      "running": false,
      "priority": 300,
      "autoRestart": true
    },
    "novnc": {
      "running": false,
      "priority": 400,
      "autoRestart": true
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|A message indicating the result of stopping computer use processes|
|status|object|true|none|Status information about all VNC desktop processes after stopping|

<h2 id="tocS_ComputerUseStatusResponse">ComputerUseStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemacomputerusestatusresponse"></a>
<a id="schema_ComputerUseStatusResponse"></a>
<a id="tocScomputerusestatusresponse"></a>
<a id="tocscomputerusestatusresponse"></a>

```json
{
  "status": "active"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|Status of computer use services (active, partial, inactive, error)|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|partial|
|status|inactive|
|status|error|

<h2 id="tocS_ProcessStatusResponse">ProcessStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprocessstatusresponse"></a>
<a id="schema_ProcessStatusResponse"></a>
<a id="tocSprocessstatusresponse"></a>
<a id="tocsprocessstatusresponse"></a>

```json
{
  "running": true,
  "processName": "xfce4"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|processName|string|true|none|The name of the VNC process being checked|
|running|boolean|true|none|Whether the specified VNC process is currently running|

<h2 id="tocS_ProcessRestartResponse">ProcessRestartResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprocessrestartresponse"></a>
<a id="schema_ProcessRestartResponse"></a>
<a id="tocSprocessrestartresponse"></a>
<a id="tocsprocessrestartresponse"></a>

```json
{
  "processName": "xfce4",
  "message": "Process xfce4 restarted successfully"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|A message indicating the result of restarting the process|
|processName|string|true|none|The name of the VNC process that was restarted|

<h2 id="tocS_ProcessLogsResponse">ProcessLogsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprocesslogsresponse"></a>
<a id="schema_ProcessLogsResponse"></a>
<a id="tocSprocesslogsresponse"></a>
<a id="tocsprocesslogsresponse"></a>

```json
{
  "processName": "novnc",
  "logs": "2024-01-15 10:30:45 [INFO] NoVNC server started on port 6080"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|processName|string|true|none|The name of the VNC process whose logs were retrieved|
|logs|string|true|none|The log output from the specified VNC process|

<h2 id="tocS_ProcessErrorsResponse">ProcessErrorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprocesserrorsresponse"></a>
<a id="schema_ProcessErrorsResponse"></a>
<a id="tocSprocesserrorsresponse"></a>
<a id="tocsprocesserrorsresponse"></a>

```json
{
  "processName": "x11vnc",
  "errors": "2024-01-15 10:30:45 [ERROR] Failed to bind to port 5901"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|processName|string|true|none|The name of the VNC process whose error logs were retrieved|
|errors|string|true|none|The error log output from the specified VNC process|

<h2 id="tocS_MousePosition">MousePosition</h2>
<!-- backwards compatibility -->
<a id="schemamouseposition"></a>
<a id="schema_MousePosition"></a>
<a id="tocSmouseposition"></a>
<a id="tocsmouseposition"></a>

```json
{
  "x": 100,
  "y": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|number|true|none|The X coordinate of the mouse cursor position|
|y|number|true|none|The Y coordinate of the mouse cursor position|

<h2 id="tocS_MouseMoveRequest">MouseMoveRequest</h2>
<!-- backwards compatibility -->
<a id="schemamousemoverequest"></a>
<a id="schema_MouseMoveRequest"></a>
<a id="tocSmousemoverequest"></a>
<a id="tocsmousemoverequest"></a>

```json
{
  "x": 150,
  "y": 250
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|number|true|none|The target X coordinate to move the mouse cursor to|
|y|number|true|none|The target Y coordinate to move the mouse cursor to|

<h2 id="tocS_MouseMoveResponse">MouseMoveResponse</h2>
<!-- backwards compatibility -->
<a id="schemamousemoveresponse"></a>
<a id="schema_MouseMoveResponse"></a>
<a id="tocSmousemoveresponse"></a>
<a id="tocsmousemoveresponse"></a>

```json
{
  "x": 150,
  "y": 250
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|number|true|none|The actual X coordinate where the mouse cursor ended up|
|y|number|true|none|The actual Y coordinate where the mouse cursor ended up|

<h2 id="tocS_MouseClickRequest">MouseClickRequest</h2>
<!-- backwards compatibility -->
<a id="schemamouseclickrequest"></a>
<a id="schema_MouseClickRequest"></a>
<a id="tocSmouseclickrequest"></a>
<a id="tocsmouseclickrequest"></a>

```json
{
  "button": "left",
  "double": false,
  "x": 100,
  "y": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|number|true|none|The X coordinate where to perform the mouse click|
|y|number|true|none|The Y coordinate where to perform the mouse click|
|button|string|false|none|The mouse button to click (left, right, middle). Defaults to left|
|double|boolean|false|none|Whether to perform a double-click instead of a single click|

<h2 id="tocS_MouseClickResponse">MouseClickResponse</h2>
<!-- backwards compatibility -->
<a id="schemamouseclickresponse"></a>
<a id="schema_MouseClickResponse"></a>
<a id="tocSmouseclickresponse"></a>
<a id="tocsmouseclickresponse"></a>

```json
{
  "x": 100,
  "y": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|number|true|none|The actual X coordinate where the click occurred|
|y|number|true|none|The actual Y coordinate where the click occurred|

<h2 id="tocS_MouseDragRequest">MouseDragRequest</h2>
<!-- backwards compatibility -->
<a id="schemamousedragrequest"></a>
<a id="schema_MouseDragRequest"></a>
<a id="tocSmousedragrequest"></a>
<a id="tocsmousedragrequest"></a>

```json
{
  "button": "left",
  "endY": 400,
  "endX": 300,
  "startY": 200,
  "startX": 100
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|startX|number|true|none|The starting X coordinate for the drag operation|
|startY|number|true|none|The starting Y coordinate for the drag operation|
|endX|number|true|none|The ending X coordinate for the drag operation|
|endY|number|true|none|The ending Y coordinate for the drag operation|
|button|string|false|none|The mouse button to use for dragging (left, right, middle). Defaults to left|

<h2 id="tocS_MouseDragResponse">MouseDragResponse</h2>
<!-- backwards compatibility -->
<a id="schemamousedragresponse"></a>
<a id="schema_MouseDragResponse"></a>
<a id="tocSmousedragresponse"></a>
<a id="tocsmousedragresponse"></a>

```json
{
  "x": 300,
  "y": 400
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|number|true|none|The actual X coordinate where the drag ended|
|y|number|true|none|The actual Y coordinate where the drag ended|

<h2 id="tocS_MouseScrollRequest">MouseScrollRequest</h2>
<!-- backwards compatibility -->
<a id="schemamousescrollrequest"></a>
<a id="schema_MouseScrollRequest"></a>
<a id="tocSmousescrollrequest"></a>
<a id="tocsmousescrollrequest"></a>

```json
{
  "amount": 3,
  "x": 100,
  "y": 200,
  "direction": "down"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|number|true|none|The X coordinate where to perform the scroll operation|
|y|number|true|none|The Y coordinate where to perform the scroll operation|
|direction|string|true|none|The scroll direction (up, down)|
|amount|number|false|none|The number of scroll units to scroll. Defaults to 1|

<h2 id="tocS_MouseScrollResponse">MouseScrollResponse</h2>
<!-- backwards compatibility -->
<a id="schemamousescrollresponse"></a>
<a id="schema_MouseScrollResponse"></a>
<a id="tocSmousescrollresponse"></a>
<a id="tocsmousescrollresponse"></a>

```json
{
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|Whether the mouse scroll operation was successful|

<h2 id="tocS_KeyboardTypeRequest">KeyboardTypeRequest</h2>
<!-- backwards compatibility -->
<a id="schemakeyboardtyperequest"></a>
<a id="schema_KeyboardTypeRequest"></a>
<a id="tocSkeyboardtyperequest"></a>
<a id="tocskeyboardtyperequest"></a>

```json
{
  "delay": 100,
  "text": "Hello, World!"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|The text to type using the keyboard|
|delay|number|false|none|Delay in milliseconds between keystrokes. Defaults to 0|

<h2 id="tocS_KeyboardPressRequest">KeyboardPressRequest</h2>
<!-- backwards compatibility -->
<a id="schemakeyboardpressrequest"></a>
<a id="schema_KeyboardPressRequest"></a>
<a id="tocSkeyboardpressrequest"></a>
<a id="tocskeyboardpressrequest"></a>

```json
{
  "modifiers": [
    "ctrl",
    "shift"
  ],
  "key": "enter"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|The key to press (e.g., a, b, c, enter, space, etc.)|
|modifiers|[string]|false|none|Array of modifier keys to press along with the main key (ctrl, alt, shift, cmd)|

<h2 id="tocS_KeyboardHotkeyRequest">KeyboardHotkeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemakeyboardhotkeyrequest"></a>
<a id="schema_KeyboardHotkeyRequest"></a>
<a id="tocSkeyboardhotkeyrequest"></a>
<a id="tocskeyboardhotkeyrequest"></a>

```json
{
  "keys": "ctrl+c"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keys|string|true|none|The hotkey combination to press (e.g., "ctrl+c", "cmd+v", "alt+tab")|

<h2 id="tocS_ScreenshotResponse">ScreenshotResponse</h2>
<!-- backwards compatibility -->
<a id="schemascreenshotresponse"></a>
<a id="schema_ScreenshotResponse"></a>
<a id="tocSscreenshotresponse"></a>
<a id="tocsscreenshotresponse"></a>

```json
{
  "cursorPosition": {
    "x": 500,
    "y": 300
  },
  "screenshot": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
  "sizeBytes": 24576
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|screenshot|string|true|none|Base64 encoded screenshot image data|
|cursorPosition|object|false|none|The current cursor position when the screenshot was taken|
|sizeBytes|number|false|none|The size of the screenshot data in bytes|

<h2 id="tocS_RegionScreenshotResponse">RegionScreenshotResponse</h2>
<!-- backwards compatibility -->
<a id="schemaregionscreenshotresponse"></a>
<a id="schema_RegionScreenshotResponse"></a>
<a id="tocSregionscreenshotresponse"></a>
<a id="tocsregionscreenshotresponse"></a>

```json
{
  "cursorPosition": {
    "x": 500,
    "y": 300
  },
  "screenshot": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
  "sizeBytes": 24576
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|screenshot|string|true|none|Base64 encoded screenshot image data of the specified region|
|cursorPosition|object|false|none|The current cursor position when the region screenshot was taken|
|sizeBytes|number|false|none|The size of the screenshot data in bytes|

<h2 id="tocS_CompressedScreenshotResponse">CompressedScreenshotResponse</h2>
<!-- backwards compatibility -->
<a id="schemacompressedscreenshotresponse"></a>
<a id="schema_CompressedScreenshotResponse"></a>
<a id="tocScompressedscreenshotresponse"></a>
<a id="tocscompressedscreenshotresponse"></a>

```json
{
  "cursorPosition": {
    "x": 250,
    "y": 150
  },
  "screenshot": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
  "sizeBytes": 12288
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|screenshot|string|true|none|Base64 encoded compressed screenshot image data|
|cursorPosition|object|false|none|The current cursor position when the compressed screenshot was taken|
|sizeBytes|number|false|none|The size of the compressed screenshot data in bytes|

<h2 id="tocS_DisplayInfoResponse">DisplayInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisplayinforesponse"></a>
<a id="schema_DisplayInfoResponse"></a>
<a id="tocSdisplayinforesponse"></a>
<a id="tocsdisplayinforesponse"></a>

```json
{
  "displays": [
    {
      "id": 0,
      "x": 0,
      "y": 0,
      "width": 1920,
      "height": 1080,
      "is_active": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displays|[object]|true|none|Array of display information for all connected displays|

<h2 id="tocS_WindowsResponse">WindowsResponse</h2>
<!-- backwards compatibility -->
<a id="schemawindowsresponse"></a>
<a id="schema_WindowsResponse"></a>
<a id="tocSwindowsresponse"></a>
<a id="tocswindowsresponse"></a>

```json
{
  "count": 5,
  "windows": [
    {
      "id": 12345,
      "title": "Terminal"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|windows|[object]|true|none|Array of window information for all visible windows|
|count|number|true|none|The total number of windows found|

<h2 id="tocS_CreateSnapshot">CreateSnapshot</h2>
<!-- backwards compatibility -->
<a id="schemacreatesnapshot"></a>
<a id="schema_CreateSnapshot"></a>
<a id="tocScreatesnapshot"></a>
<a id="tocscreatesnapshot"></a>

```json
{
  "disk": 3,
  "imageName": "ubuntu:22.04",
  "memory": 1,
  "buildInfo": "",
  "regionId": "regionId",
  "entrypoint": "sleep infinity",
  "name": "ubuntu-4vcpu-8ram-100gb",
  "cpu": 1,
  "gpu": 0,
  "gpuType": [
    "H100"
  ],
  "sandboxClass": "linux-vm"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the snapshot|
|imageName|string|false|none|The image name of the snapshot|
|entrypoint|[string]|false|none|The entrypoint command for the snapshot|
|cpu|integer|false|none|CPU cores allocated to the resulting sandbox|
|gpu|integer|false|none|GPU units allocated to the resulting sandbox|
|gpuType|[[GpuType](#schemagputype)]|false|none|Preferred GPU type for the resulting sandbox.|
|memory|integer|false|none|Memory allocated to the resulting sandbox in GB|
|disk|integer|false|none|Disk space allocated to the sandbox in GB|
|buildInfo|object|false|none|Build information for the snapshot|
|regionId|string|false|none|ID of the region where the snapshot will be available. Defaults to organization default region if not specified.|
|sandboxClass|object|false|none|Target sandbox class. Determines which runners can host sandboxes created from this snapshot.|

#### Enumerated Values

|Property|Value|
|---|---|
|gpuType|H100|
|gpuType|RTX-PRO-6000|

<h2 id="tocS_SnapshotState">SnapshotState</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotstate"></a>
<a id="schema_SnapshotState"></a>
<a id="tocSsnapshotstate"></a>
<a id="tocssnapshotstate"></a>

```json
"building"
```

<h2 id="tocS_SnapshotDto">SnapshotDto</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotdto"></a>
<a id="schema_SnapshotDto"></a>
<a id="tocSsnapshotdto"></a>
<a id="tocssnapshotdto"></a>

```json
{
  "imageName": "imageName",
  "buildInfo": "",
  "cpu": 6.027456183070403,
  "regionIds": [
    "regionIds",
    "regionIds"
  ],
  "gpu": 1.4658129805029452,
  "organizationId": "organizationId",
  "general": true,
  "createdAt": "2000-01-23T04:56:07.000+00:00",
  "disk": 5.637376656633329,
  "ref": "daytonaio/sandbox:latest",
  "size": 0.8008281904610115,
  "mem": 5.962133916683182,
  "lastUsedAt": "2000-01-23T04:56:07.000+00:00",
  "entrypoint": [
    "entrypoint",
    "entrypoint"
  ],
  "errorReason": "errorReason",
  "name": "name",
  "id": "id",
  "state": "",
  "initialRunnerId": "runner123",
  "gpuType": "H100",
  "updatedAt": "2000-01-23T04:56:07.000+00:00",
  "sandboxClass": "linux-vm"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|organizationId|string|false|none|none|
|general|boolean|true|none|none|
|name|string|true|none|none|
|imageName|string|false|none|none|
|state|object|true|none|none|
|size|number \| null|true|none|none|
|entrypoint|[string]|true|none|none|
|cpu|number|true|none|none|
|gpu|number|true|none|none|
|gpuType|object|false|none|The GPU type assigned to the snapshot|
|mem|number|true|none|none|
|disk|number|true|none|none|
|errorReason|string \| null|true|none|none|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|
|lastUsedAt|string(date-time) \| null|true|none|none|
|buildInfo|object|false|none|Build information for the snapshot|
|regionIds|[string]|false|none|IDs of regions where the snapshot is available|
|initialRunnerId|string|false|none|The initial runner ID of the snapshot|
|ref|string|false|none|The snapshot reference|
|sandboxClass|string|false|none|The sandbox class of the snapshot|

#### Enumerated Values

|Property|Value|
|---|---|
|sandboxClass|linux-vm|
|sandboxClass|container|
|sandboxClass|android|
|sandboxClass|windows|

<h2 id="tocS_PaginatedSnapshots">PaginatedSnapshots</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedsnapshots"></a>
<a id="schema_PaginatedSnapshots"></a>
<a id="tocSpaginatedsnapshots"></a>
<a id="tocspaginatedsnapshots"></a>

```json
{
  "total": 2.3021358869347655,
  "totalPages": 9.301444243932576,
  "page": 7.061401241503109,
  "items": [
    {
      "imageName": "imageName",
      "buildInfo": "",
      "cpu": 6.027456183070403,
      "regionIds": [
        "regionIds",
        "regionIds"
      ],
      "gpu": 1.4658129805029452,
      "organizationId": "organizationId",
      "general": true,
      "createdAt": "2000-01-23T04:56:07.000+00:00",
      "disk": 5.637376656633329,
      "ref": "daytonaio/sandbox:latest",
      "size": 0.8008281904610115,
      "mem": 5.962133916683182,
      "lastUsedAt": "2000-01-23T04:56:07.000+00:00",
      "entrypoint": [
        "entrypoint",
        "entrypoint"
      ],
      "errorReason": "errorReason",
      "name": "name",
      "id": "id",
      "state": "",
      "initialRunnerId": "runner123",
      "gpuType": "H100",
      "updatedAt": "2000-01-23T04:56:07.000+00:00",
      "sandboxClass": "linux-vm"
    },
    {
      "imageName": "imageName",
      "buildInfo": "",
      "cpu": 6.027456183070403,
      "regionIds": [
        "regionIds",
        "regionIds"
      ],
      "gpu": 1.4658129805029452,
      "organizationId": "organizationId",
      "general": true,
      "createdAt": "2000-01-23T04:56:07.000+00:00",
      "disk": 5.637376656633329,
      "ref": "daytonaio/sandbox:latest",
      "size": 0.8008281904610115,
      "mem": 5.962133916683182,
      "lastUsedAt": "2000-01-23T04:56:07.000+00:00",
      "entrypoint": [
        "entrypoint",
        "entrypoint"
      ],
      "errorReason": "errorReason",
      "name": "name",
      "id": "id",
      "state": "",
      "initialRunnerId": "runner123",
      "gpuType": "H100",
      "updatedAt": "2000-01-23T04:56:07.000+00:00",
      "sandboxClass": "linux-vm"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[SnapshotDto](#schemasnapshotdto)]|true|none|none|
|total|number|true|none|none|
|page|number|true|none|none|
|totalPages|number|true|none|none|

<h2 id="tocS_VolumeState">VolumeState</h2>
<!-- backwards compatibility -->
<a id="schemavolumestate"></a>
<a id="schema_VolumeState"></a>
<a id="tocSvolumestate"></a>
<a id="tocsvolumestate"></a>

```json
"creating"
```

Volume state

<h2 id="tocS_VolumeDto">VolumeDto</h2>
<!-- backwards compatibility -->
<a id="schemavolumedto"></a>
<a id="schema_VolumeDto"></a>
<a id="tocSvolumedto"></a>
<a id="tocsvolumedto"></a>

```json
{
  "organizationId": "123e4567-e89b-12d3-a456-426614174000",
  "createdAt": "2023-01-01T00:00:00.000Z",
  "lastUsedAt": "2023-01-01T00:00:00.000Z",
  "errorReason": "Error processing volume",
  "name": "my-volume",
  "id": "vol-12345678",
  "state": "ready",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Volume ID|
|name|string|true|none|Volume name|
|organizationId|string|true|none|Organization ID|
|state|object|true|none|Volume state|
|createdAt|string|true|none|Creation timestamp|
|updatedAt|string|true|none|Last update timestamp|
|lastUsedAt|string \| null|false|none|Last used timestamp|
|errorReason|string \| null|true|none|The error reason of the volume|

<h2 id="tocS_CreateVolume">CreateVolume</h2>
<!-- backwards compatibility -->
<a id="schemacreatevolume"></a>
<a id="schema_CreateVolume"></a>
<a id="tocScreatevolume"></a>
<a id="tocscreatevolume"></a>

```json
{
  "name": "name"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|

<h2 id="tocS_JobStatus">JobStatus</h2>
<!-- backwards compatibility -->
<a id="schemajobstatus"></a>
<a id="schema_JobStatus"></a>
<a id="tocSjobstatus"></a>
<a id="tocsjobstatus"></a>

```json
"PENDING"
```

<h2 id="tocS_JobType">JobType</h2>
<!-- backwards compatibility -->
<a id="schemajobtype"></a>
<a id="schema_JobType"></a>
<a id="tocSjobtype"></a>
<a id="tocsjobtype"></a>

```json
"CREATE_SANDBOX"
```

The type of the job

<h2 id="tocS_Job">Job</h2>
<!-- backwards compatibility -->
<a id="schemajob"></a>
<a id="schema_Job"></a>
<a id="tocSjob"></a>
<a id="tocsjob"></a>

```json
{
  "createdAt": "2024-10-01T12:00:00Z",
  "resourceId": "sandbox123",
  "payload": "payload",
  "errorMessage": "Failed to create sandbox",
  "id": "job123",
  "type": "CREATE_SANDBOX",
  "traceContext": {
    "traceparent": "00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01"
  },
  "status": "PENDING",
  "resourceType": "SANDBOX",
  "updatedAt": "2024-10-01T12:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the job|
|type|object|true|none|The type of the job|
|status|object|true|none|The status of the job|
|resourceType|string|true|none|The type of resource this job operates on|
|resourceId|string|true|none|The ID of the resource this job operates on (sandboxId, snapshotRef, etc.)|
|payload|string|false|none|Job-specific JSON-encoded payload data (operational metadata)|
|traceContext|object|false|none|OpenTelemetry trace context for distributed tracing (W3C Trace Context format)|
|errorMessage|string|false|none|Error message if the job failed|
|createdAt|string|true|none|The creation timestamp of the job|
|updatedAt|string|false|none|The last update timestamp of the job|

#### Enumerated Values

|Property|Value|
|---|---|
|resourceType|SANDBOX|
|resourceType|SNAPSHOT|
|resourceType|BACKUP|

<h2 id="tocS_PaginatedJobs">PaginatedJobs</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedjobs"></a>
<a id="schema_PaginatedJobs"></a>
<a id="tocSpaginatedjobs"></a>
<a id="tocspaginatedjobs"></a>

```json
{
  "total": 0.8008281904610115,
  "totalPages": 1.4658129805029452,
  "page": 6.027456183070403,
  "items": [
    {
      "createdAt": "2024-10-01T12:00:00Z",
      "resourceId": "sandbox123",
      "payload": "payload",
      "errorMessage": "Failed to create sandbox",
      "id": "job123",
      "type": "CREATE_SANDBOX",
      "traceContext": {
        "traceparent": "00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01"
      },
      "status": "PENDING",
      "resourceType": "SANDBOX",
      "updatedAt": "2024-10-01T12:00:00Z"
    },
    {
      "createdAt": "2024-10-01T12:00:00Z",
      "resourceId": "sandbox123",
      "payload": "payload",
      "errorMessage": "Failed to create sandbox",
      "id": "job123",
      "type": "CREATE_SANDBOX",
      "traceContext": {
        "traceparent": "00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01"
      },
      "status": "PENDING",
      "resourceType": "SANDBOX",
      "updatedAt": "2024-10-01T12:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Job](#schemajob)]|true|none|none|
|total|number|true|none|none|
|page|number|true|none|none|
|totalPages|number|true|none|none|

<h2 id="tocS_PollJobsResponse">PollJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemapolljobsresponse"></a>
<a id="schema_PollJobsResponse"></a>
<a id="tocSpolljobsresponse"></a>
<a id="tocspolljobsresponse"></a>

```json
{
  "jobs": [
    {
      "createdAt": "2024-10-01T12:00:00Z",
      "resourceId": "sandbox123",
      "payload": "payload",
      "errorMessage": "Failed to create sandbox",
      "id": "job123",
      "type": "CREATE_SANDBOX",
      "traceContext": {
        "traceparent": "00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01"
      },
      "status": "PENDING",
      "resourceType": "SANDBOX",
      "updatedAt": "2024-10-01T12:00:00Z"
    },
    {
      "createdAt": "2024-10-01T12:00:00Z",
      "resourceId": "sandbox123",
      "payload": "payload",
      "errorMessage": "Failed to create sandbox",
      "id": "job123",
      "type": "CREATE_SANDBOX",
      "traceContext": {
        "traceparent": "00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01"
      },
      "status": "PENDING",
      "resourceType": "SANDBOX",
      "updatedAt": "2024-10-01T12:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobs|[[Job](#schemajob)]|true|none|List of jobs|

<h2 id="tocS_UpdateJobStatus">UpdateJobStatus</h2>
<!-- backwards compatibility -->
<a id="schemaupdatejobstatus"></a>
<a id="schema_UpdateJobStatus"></a>
<a id="tocSupdatejobstatus"></a>
<a id="tocsupdatejobstatus"></a>

```json
{
  "resultMetadata": "resultMetadata",
  "errorMessage": "Failed to create sandbox",
  "status": "IN_PROGRESS"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|object|true|none|The new status of the job|
|errorMessage|string|false|none|Error message if the job failed|
|resultMetadata|string|false|none|Result metadata for the job|

<h2 id="tocS_CreateDockerRegistry">CreateDockerRegistry</h2>
<!-- backwards compatibility -->
<a id="schemacreatedockerregistry"></a>
<a id="schema_CreateDockerRegistry"></a>
<a id="tocScreatedockerregistry"></a>
<a id="tocscreatedockerregistry"></a>

```json
{
  "password": "password",
  "name": "name",
  "project": "project",
  "url": "url",
  "username": "username"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Registry name|
|url|string|true|none|Registry URL|
|username|string|true|none|Registry username|
|password|string|true|none|Registry password|
|project|string|false|none|Registry project|

<h2 id="tocS_DockerRegistry">DockerRegistry</h2>
<!-- backwards compatibility -->
<a id="schemadockerregistry"></a>
<a id="schema_DockerRegistry"></a>
<a id="tocSdockerregistry"></a>
<a id="tocsdockerregistry"></a>

```json
{
  "registryType": "internal",
  "createdAt": "2024-01-31T12:00:00Z",
  "name": "My Docker Hub",
  "project": "my-project",
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "url": "https://registry.hub.docker.com",
  "username": "username",
  "updatedAt": "2024-01-31T12:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Registry ID|
|name|string|true|none|Registry name|
|url|string|true|none|Registry URL|
|username|string|true|none|Registry username|
|project|string|true|none|Registry project|
|registryType|string|true|none|Registry type|
|createdAt|string(date-time)|true|none|Creation timestamp|
|updatedAt|string(date-time)|true|none|Last update timestamp|

#### Enumerated Values

|Property|Value|
|---|---|
|registryType|internal|
|registryType|organization|
|registryType|transient|
|registryType|backup|

<h2 id="tocS_RegistryPushAccessDto">RegistryPushAccessDto</h2>
<!-- backwards compatibility -->
<a id="schemaregistrypushaccessdto"></a>
<a id="schema_RegistryPushAccessDto"></a>
<a id="tocSregistrypushaccessdto"></a>
<a id="tocsregistrypushaccessdto"></a>

```json
{
  "registryUrl": "registry.example.com",
  "registryId": "123e4567-e89b-12d3-a456-426614174000",
  "project": "library",
  "secret": "eyJhbGciOiJIUzI1NiIs...",
  "expiresAt": "2023-12-31T23:59:59Z",
  "username": "temp-user-123"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|true|none|Temporary username for registry authentication|
|secret|string|true|none|Temporary secret for registry authentication|
|registryUrl|string|true|none|Registry URL|
|registryId|string|true|none|Registry ID|
|project|string|true|none|Registry project ID|
|expiresAt|string|true|none|Token expiration time in ISO format|

<h2 id="tocS_UpdateDockerRegistry">UpdateDockerRegistry</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedockerregistry"></a>
<a id="schema_UpdateDockerRegistry"></a>
<a id="tocSupdatedockerregistry"></a>
<a id="tocsupdatedockerregistry"></a>

```json
{
  "password": "password",
  "name": "name",
  "project": "project",
  "url": "url",
  "username": "username"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Registry name|
|url|string|true|none|Registry URL|
|username|string|true|none|Registry username|
|password|string|false|none|Registry password|
|project|string|false|none|Registry project|

<h2 id="tocS_AdminCreateRunner">AdminCreateRunner</h2>
<!-- backwards compatibility -->
<a id="schemaadmincreaterunner"></a>
<a id="schema_AdminCreateRunner"></a>
<a id="tocSadmincreaterunner"></a>
<a id="tocsadmincreaterunner"></a>

```json
{
  "diskGiB": 100,
  "apiVersion": "2",
  "apiKey": "apiKey",
  "apiUrl": "https://api.runner1.example.com",
  "regionId": "regionId",
  "proxyUrl": "https://proxy.runner1.example.com",
  "memoryGiB": 16,
  "domain": "runner1.example.com",
  "name": "name",
  "cpu": 8,
  "tags": [
    "gpu",
    "us-east"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|regionId|string|true|none|none|
|name|string|true|none|none|
|tags|[string]|false|none|Tags to associate with the runner|
|apiKey|string|true|none|none|
|apiVersion|string|true|none|The api version of the runner to create|
|domain|string|false|none|The domain of the runner|
|apiUrl|string|false|none|The API URL of the runner|
|proxyUrl|string|false|none|The proxy URL of the runner|
|cpu|number|false|none|The CPU capacity of the runner|
|memoryGiB|number|false|none|The memory capacity of the runner in GiB|
|diskGiB|number|false|none|The disk capacity of the runner in GiB|

<h2 id="tocS_CreateOrganizationQuota">CreateOrganizationQuota</h2>
<!-- backwards compatibility -->
<a id="schemacreateorganizationquota"></a>
<a id="schema_CreateOrganizationQuota"></a>
<a id="tocScreateorganizationquota"></a>
<a id="tocscreateorganizationquota"></a>

```json
{
  "snapshotQuota": 7.061401241503109,
  "totalCpuQuota": 0.8008281904610115,
  "maxCpuPerSandbox": 5.962133916683182,
  "maxDiskPerSandbox": 2.3021358869347655,
  "maxMemoryPerSandbox": 5.637376656633329,
  "volumeQuota": 3.616076749251911,
  "totalMemoryQuota": 6.027456183070403,
  "maxSnapshotSize": 9.301444243932576,
  "totalDiskQuota": 1.4658129805029452
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalCpuQuota|number|false|none|none|
|totalMemoryQuota|number|false|none|none|
|totalDiskQuota|number|false|none|none|
|maxCpuPerSandbox|number|false|none|none|
|maxMemoryPerSandbox|number|false|none|none|
|maxDiskPerSandbox|number|false|none|none|
|snapshotQuota|number|false|none|none|
|maxSnapshotSize|number|false|none|none|
|volumeQuota|number|false|none|none|

<h2 id="tocS_CreateUser">CreateUser</h2>
<!-- backwards compatibility -->
<a id="schemacreateuser"></a>
<a id="schema_CreateUser"></a>
<a id="tocScreateuser"></a>
<a id="tocscreateuser"></a>

```json
{
  "emailVerified": true,
  "role": "admin",
  "name": "name",
  "personalOrganizationDefaultRegionId": "personalOrganizationDefaultRegionId",
  "id": "id",
  "personalOrganizationQuota": {
    "snapshotQuota": 7.061401241503109,
    "totalCpuQuota": 0.8008281904610115,
    "maxCpuPerSandbox": 5.962133916683182,
    "maxDiskPerSandbox": 2.3021358869347655,
    "maxMemoryPerSandbox": 5.637376656633329,
    "volumeQuota": 3.616076749251911,
    "totalMemoryQuota": 6.027456183070403,
    "maxSnapshotSize": 9.301444243932576,
    "totalDiskQuota": 1.4658129805029452
  },
  "email": "email"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|
|email|string|false|none|none|
|personalOrganizationQuota|[CreateOrganizationQuota](#schemacreateorganizationquota)|false|none|none|
|personalOrganizationDefaultRegionId|string|false|none|none|
|role|string|false|none|none|
|emailVerified|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|admin|
|role|user|

<h2 id="tocS_WebhookEvent">WebhookEvent</h2>
<!-- backwards compatibility -->
<a id="schemawebhookevent"></a>
<a id="schema_WebhookEvent"></a>
<a id="tocSwebhookevent"></a>
<a id="tocswebhookevent"></a>

```json
"sandbox.created"
```

The type of event being sent

<h2 id="tocS_SendWebhookDto">SendWebhookDto</h2>
<!-- backwards compatibility -->
<a id="schemasendwebhookdto"></a>
<a id="schema_SendWebhookDto"></a>
<a id="tocSsendwebhookdto"></a>
<a id="tocssendwebhookdto"></a>

```json
{
  "eventId": "evt_1234567890abcdef",
  "payload": {
    "id": "sandbox-123",
    "name": "My Sandbox"
  },
  "eventType": "sandbox.created"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventType|object|true|none|The type of event being sent|
|payload|object|true|none|The payload data to send|
|eventId|string|false|none|Optional event ID for idempotency|

<h2 id="tocS_SetSnapshotGeneralStatusDto">SetSnapshotGeneralStatusDto</h2>
<!-- backwards compatibility -->
<a id="schemasetsnapshotgeneralstatusdto"></a>
<a id="schema_SetSnapshotGeneralStatusDto"></a>
<a id="tocSsetsnapshotgeneralstatusdto"></a>
<a id="tocssetsnapshotgeneralstatusdto"></a>

```json
{
  "general": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|general|boolean|true|none|Whether the snapshot is general|

<h2 id="tocS_AuditLog">AuditLog</h2>
<!-- backwards compatibility -->
<a id="schemaauditlog"></a>
<a id="schema_AuditLog"></a>
<a id="tocSauditlog"></a>
<a id="tocsauditlog"></a>

```json
{
  "actorApiKeyPrefix": "actorApiKeyPrefix",
  "metadata": {
    "key": ""
  },
  "targetId": "targetId",
  "errorMessage": "errorMessage",
  "ipAddress": "ipAddress",
  "actorEmail": "actorEmail",
  "targetType": "targetType",
  "userAgent": "userAgent",
  "source": "source",
  "organizationId": "organizationId",
  "createdAt": "2000-01-23T04:56:07.000+00:00",
  "actorId": "actorId",
  "action": "action",
  "id": "id",
  "actorApiKeySuffix": "actorApiKeySuffix",
  "statusCode": 0.8008281904610115
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|actorId|string|true|none|none|
|actorEmail|string|true|none|none|
|actorApiKeyPrefix|string|false|none|none|
|actorApiKeySuffix|string|false|none|none|
|organizationId|string|false|none|none|
|action|string|true|none|none|
|targetType|string|false|none|none|
|targetId|string|false|none|none|
|statusCode|number|false|none|none|
|errorMessage|string|false|none|none|
|ipAddress|string|false|none|none|
|userAgent|string|false|none|none|
|source|string|false|none|none|
|metadata|object|false|none|none|
|createdAt|string(date-time)|true|none|none|

<h2 id="tocS_PaginatedAuditLogs">PaginatedAuditLogs</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedauditlogs"></a>
<a id="schema_PaginatedAuditLogs"></a>
<a id="tocSpaginatedauditlogs"></a>
<a id="tocspaginatedauditlogs"></a>

```json
{
  "total": 6.027456183070403,
  "nextToken": "nextToken",
  "totalPages": 5.962133916683182,
  "page": 1.4658129805029452,
  "items": [
    {
      "actorApiKeyPrefix": "actorApiKeyPrefix",
      "metadata": {
        "key": ""
      },
      "targetId": "targetId",
      "errorMessage": "errorMessage",
      "ipAddress": "ipAddress",
      "actorEmail": "actorEmail",
      "targetType": "targetType",
      "userAgent": "userAgent",
      "source": "source",
      "organizationId": "organizationId",
      "createdAt": "2000-01-23T04:56:07.000+00:00",
      "actorId": "actorId",
      "action": "action",
      "id": "id",
      "actorApiKeySuffix": "actorApiKeySuffix",
      "statusCode": 0.8008281904610115
    },
    {
      "actorApiKeyPrefix": "actorApiKeyPrefix",
      "metadata": {
        "key": ""
      },
      "targetId": "targetId",
      "errorMessage": "errorMessage",
      "ipAddress": "ipAddress",
      "actorEmail": "actorEmail",
      "targetType": "targetType",
      "userAgent": "userAgent",
      "source": "source",
      "organizationId": "organizationId",
      "createdAt": "2000-01-23T04:56:07.000+00:00",
      "actorId": "actorId",
      "action": "action",
      "id": "id",
      "actorApiKeySuffix": "actorApiKeySuffix",
      "statusCode": 0.8008281904610115
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[AuditLog](#schemaauditlog)]|true|none|none|
|total|number|true|none|none|
|page|number|true|none|none|
|totalPages|number|true|none|none|
|nextToken|string|false|none|Token for next page in cursor-based pagination|

<h2 id="tocS_CreateOrganizationRegionQuota">CreateOrganizationRegionQuota</h2>
<!-- backwards compatibility -->
<a id="schemacreateorganizationregionquota"></a>
<a id="schema_CreateOrganizationRegionQuota"></a>
<a id="tocScreateorganizationregionquota"></a>
<a id="tocscreateorganizationregionquota"></a>

```json
{
  "totalCpuQuota": 0.8008281904610115,
  "allowedGpuTypes": [
    "H100",
    "H100"
  ],
  "maxDiskPerGpuSandbox": 4.145608029883936,
  "totalGpuQuota": 5.962133916683182,
  "maxCpuPerGpuSandbox": 3.616076749251911,
  "maxCpuPerSandbox": 5.637376656633329,
  "maxDiskPerSandbox": 7.061401241503109,
  "maxDiskPerNonEphemeralSandbox": 9.301444243932576,
  "maxMemoryPerSandbox": 2.3021358869347655,
  "totalMemoryQuota": 6.027456183070403,
  "totalDiskQuota": 1.4658129805029452,
  "sandboxClass": "",
  "maxMemoryPerGpuSandbox": 2.027123023002322
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sandboxClass|object|true|none|none|
|totalCpuQuota|number|true|none|none|
|totalMemoryQuota|number|true|none|none|
|totalDiskQuota|number|true|none|none|
|totalGpuQuota|number|true|none|none|
|allowedGpuTypes|[[GpuType](#schemagputype)]|false|none|none|
|maxCpuPerSandbox|number \| null|false|none|none|
|maxMemoryPerSandbox|number \| null|false|none|none|
|maxDiskPerSandbox|number \| null|false|none|none|
|maxDiskPerNonEphemeralSandbox|number \| null|false|none|none|
|maxCpuPerGpuSandbox|number \| null|false|none|none|
|maxMemoryPerGpuSandbox|number \| null|false|none|none|
|maxDiskPerGpuSandbox|number \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|allowedGpuTypes|H100|
|allowedGpuTypes|RTX-PRO-6000|

<h2 id="tocS_WebhookAppPortalAccess">WebhookAppPortalAccess</h2>
<!-- backwards compatibility -->
<a id="schemawebhookappportalaccess"></a>
<a id="schema_WebhookAppPortalAccess"></a>
<a id="tocSwebhookappportalaccess"></a>
<a id="tocswebhookappportalaccess"></a>

```json
{
  "url": "https://app.svix.com/app_1234567890",
  "token": "appsk_..."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|true|none|The authentication token for the Svix consumer app portal|
|url|string|true|none|The URL to the webhook app portal|

<h2 id="tocS_WebhookInitializationStatus">WebhookInitializationStatus</h2>
<!-- backwards compatibility -->
<a id="schemawebhookinitializationstatus"></a>
<a id="schema_WebhookInitializationStatus"></a>
<a id="tocSwebhookinitializationstatus"></a>
<a id="tocswebhookinitializationstatus"></a>

```json
{
  "organizationId": "123e4567-e89b-12d3-a456-426614174000",
  "createdAt": "2023-01-01T00:00:00.000Z",
  "lastError": "Failed to create Svix application",
  "retryCount": 3,
  "svixApplicationId": "app_1234567890",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|organizationId|string|true|none|Organization ID|
|svixApplicationId|string \| null|true|none|The ID of the Svix application|
|lastError|string \| null|true|none|The error reason for the last initialization attempt|
|retryCount|number|true|none|The number of times the initialization has been attempted|
|createdAt|string|true|none|When the webhook initialization was created|
|updatedAt|string|true|none|When the webhook initialization was last updated|

<h2 id="tocS_StorageAccessDto">StorageAccessDto</h2>
<!-- backwards compatibility -->
<a id="schemastorageaccessdto"></a>
<a id="schema_StorageAccessDto"></a>
<a id="tocSstorageaccessdto"></a>
<a id="tocsstorageaccessdto"></a>

```json
{
  "organizationId": "123e4567-e89b-12d3-a456-426614174000",
  "bucket": "daytona",
  "accessKey": "temp-user-123",
  "sessionToken": "eyJhbGciOiJIUzI1NiIs...",
  "secret": "abchbGciOiJIUzI1NiIs...",
  "storageUrl": "storage.example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessKey|string|true|none|Access key for storage authentication|
|secret|string|true|none|Secret key for storage authentication|
|sessionToken|string|true|none|Session token for storage authentication|
|storageUrl|string|true|none|Storage URL|
|organizationId|string|true|none|Organization ID|
|bucket|string|true|none|S3 bucket name|

<h2 id="tocS_LogEntry">LogEntry</h2>
<!-- backwards compatibility -->
<a id="schemalogentry"></a>
<a id="schema_LogEntry"></a>
<a id="tocSlogentry"></a>
<a id="tocslogentry"></a>

```json
{
  "traceId": "traceId",
  "spanId": "spanId",
  "severityText": "severityText",
  "severityNumber": 0.8008281904610115,
  "logAttributes": {
    "key": "logAttributes"
  },
  "body": "body",
  "serviceName": "serviceName",
  "resourceAttributes": {
    "key": "resourceAttributes"
  },
  "timestamp": "timestamp"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|string|true|none|Timestamp of the log entry|
|body|string|true|none|Log message body|
|severityText|string|true|none|Severity level text (e.g., INFO, WARN, ERROR)|
|severityNumber|number|false|none|Severity level number|
|serviceName|string|true|none|Service name that generated the log|
|resourceAttributes|object|true|none|Resource attributes from OTEL|
|logAttributes|object|true|none|Log-specific attributes|
|traceId|string|false|none|Associated trace ID if available|
|spanId|string|false|none|Associated span ID if available|

<h2 id="tocS_PaginatedLogs">PaginatedLogs</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedlogs"></a>
<a id="schema_PaginatedLogs"></a>
<a id="tocSpaginatedlogs"></a>
<a id="tocspaginatedlogs"></a>

```json
{
  "total": 6.027456183070403,
  "totalPages": 5.962133916683182,
  "page": 1.4658129805029452,
  "items": [
    {
      "traceId": "traceId",
      "spanId": "spanId",
      "severityText": "severityText",
      "severityNumber": 0.8008281904610115,
      "logAttributes": {
        "key": "logAttributes"
      },
      "body": "body",
      "serviceName": "serviceName",
      "resourceAttributes": {
        "key": "resourceAttributes"
      },
      "timestamp": "timestamp"
    },
    {
      "traceId": "traceId",
      "spanId": "spanId",
      "severityText": "severityText",
      "severityNumber": 0.8008281904610115,
      "logAttributes": {
        "key": "logAttributes"
      },
      "body": "body",
      "serviceName": "serviceName",
      "resourceAttributes": {
        "key": "resourceAttributes"
      },
      "timestamp": "timestamp"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[LogEntry](#schemalogentry)]|true|none|List of log entries|
|total|number|true|none|Total number of log entries matching the query|
|page|number|true|none|Current page number|
|totalPages|number|true|none|Total number of pages|

<h2 id="tocS_TraceSummary">TraceSummary</h2>
<!-- backwards compatibility -->
<a id="schematracesummary"></a>
<a id="schema_TraceSummary"></a>
<a id="tocStracesummary"></a>
<a id="tocstracesummary"></a>

```json
{
  "traceId": "traceId",
  "spanCount": 6.027456183070403,
  "rootSpanName": "rootSpanName",
  "startTime": "startTime",
  "endTime": "endTime",
  "durationMs": 0.8008281904610115,
  "statusCode": "statusCode"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|traceId|string|true|none|Unique trace identifier|
|rootSpanName|string|true|none|Name of the root span|
|startTime|string|true|none|Trace start time|
|endTime|string|true|none|Trace end time|
|durationMs|number|true|none|Total duration in milliseconds|
|spanCount|number|true|none|Number of spans in this trace|
|statusCode|string|false|none|Status code of the trace|

<h2 id="tocS_PaginatedTraces">PaginatedTraces</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedtraces"></a>
<a id="schema_PaginatedTraces"></a>
<a id="tocSpaginatedtraces"></a>
<a id="tocspaginatedtraces"></a>

```json
{
  "total": 1.4658129805029452,
  "totalPages": 5.637376656633329,
  "page": 5.962133916683182,
  "items": [
    {
      "traceId": "traceId",
      "spanCount": 6.027456183070403,
      "rootSpanName": "rootSpanName",
      "startTime": "startTime",
      "endTime": "endTime",
      "durationMs": 0.8008281904610115,
      "statusCode": "statusCode"
    },
    {
      "traceId": "traceId",
      "spanCount": 6.027456183070403,
      "rootSpanName": "rootSpanName",
      "startTime": "startTime",
      "endTime": "endTime",
      "durationMs": 0.8008281904610115,
      "statusCode": "statusCode"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[TraceSummary](#schematracesummary)]|true|none|List of trace summaries|
|total|number|true|none|Total number of traces matching the query|
|page|number|true|none|Current page number|
|totalPages|number|true|none|Total number of pages|

<h2 id="tocS_TraceSpan">TraceSpan</h2>
<!-- backwards compatibility -->
<a id="schematracespan"></a>
<a id="schema_TraceSpan"></a>
<a id="tocStracespan"></a>
<a id="tocstracespan"></a>

```json
{
  "traceId": "traceId",
  "spanId": "spanId",
  "spanAttributes": {
    "key": "spanAttributes"
  },
  "parentSpanId": "parentSpanId",
  "durationNs": 0.8008281904610115,
  "statusMessage": "statusMessage",
  "spanName": "spanName",
  "timestamp": "timestamp",
  "statusCode": "statusCode"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|traceId|string|true|none|Trace identifier|
|spanId|string|true|none|Span identifier|
|parentSpanId|string|false|none|Parent span identifier|
|spanName|string|true|none|Span name|
|timestamp|string|true|none|Span start timestamp|
|durationNs|number|true|none|Span duration in nanoseconds|
|spanAttributes|object|true|none|Span attributes|
|statusCode|string|false|none|Status code of the span|
|statusMessage|string|false|none|Status message|

<h2 id="tocS_MetricDataPoint">MetricDataPoint</h2>
<!-- backwards compatibility -->
<a id="schemametricdatapoint"></a>
<a id="schema_MetricDataPoint"></a>
<a id="tocSmetricdatapoint"></a>
<a id="tocsmetricdatapoint"></a>

```json
{
  "value": 0.8008281904610115,
  "timestamp": "timestamp"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|string|true|none|Timestamp of the data point|
|value|number|true|none|Value at this timestamp|

<h2 id="tocS_MetricSeries">MetricSeries</h2>
<!-- backwards compatibility -->
<a id="schemametricseries"></a>
<a id="schema_MetricSeries"></a>
<a id="tocSmetricseries"></a>
<a id="tocsmetricseries"></a>

```json
{
  "metricName": "metricName",
  "dataPoints": [
    {
      "value": 0.8008281904610115,
      "timestamp": "timestamp"
    },
    {
      "value": 0.8008281904610115,
      "timestamp": "timestamp"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metricName|string|true|none|Name of the metric|
|dataPoints|[[MetricDataPoint](#schemametricdatapoint)]|true|none|Data points for this metric|

<h2 id="tocS_MetricsResponse">MetricsResponse</h2>
<!-- backwards compatibility -->
<a id="schemametricsresponse"></a>
<a id="schema_MetricsResponse"></a>
<a id="tocSmetricsresponse"></a>
<a id="tocsmetricsresponse"></a>

```json
{
  "series": [
    {
      "metricName": "metricName",
      "dataPoints": [
        {
          "value": 0.8008281904610115,
          "timestamp": "timestamp"
        },
        {
          "value": 0.8008281904610115,
          "timestamp": "timestamp"
        }
      ]
    },
    {
      "metricName": "metricName",
      "dataPoints": [
        {
          "value": 0.8008281904610115,
          "timestamp": "timestamp"
        },
        {
          "value": 0.8008281904610115,
          "timestamp": "timestamp"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|series|[[MetricSeries](#schemametricseries)]|true|none|List of metric series|

<h2 id="tocS_uploadFile_deprecated_request">uploadFile_deprecated_request</h2>
<!-- backwards compatibility -->
<a id="schemauploadfile_deprecated_request"></a>
<a id="schema_uploadFile_deprecated_request"></a>
<a id="tocSuploadfile_deprecated_request"></a>
<a id="tocsuploadfile_deprecated_request"></a>

```json
{
  "file": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string(binary)|false|none|none|

<h2 id="tocS_adminGetWebhookStatus_200_response">adminGetWebhookStatus_200_response</h2>
<!-- backwards compatibility -->
<a id="schemaadmingetwebhookstatus_200_response"></a>
<a id="schema_adminGetWebhookStatus_200_response"></a>
<a id="tocSadmingetwebhookstatus_200_response"></a>
<a id="tocsadmingetwebhookstatus_200_response"></a>

```json
{
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|

<h2 id="tocS_HealthController_check_200_response_info_value">HealthController_check_200_response_info_value</h2>
<!-- backwards compatibility -->
<a id="schemahealthcontroller_check_200_response_info_value"></a>
<a id="schema_HealthController_check_200_response_info_value"></a>
<a id="tocShealthcontroller_check_200_response_info_value"></a>
<a id="tocshealthcontroller_check_200_response_info_value"></a>

```json
{
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|

<h2 id="tocS_HealthController_check_200_response">HealthController_check_200_response</h2>
<!-- backwards compatibility -->
<a id="schemahealthcontroller_check_200_response"></a>
<a id="schema_HealthController_check_200_response"></a>
<a id="tocShealthcontroller_check_200_response"></a>
<a id="tocshealthcontroller_check_200_response"></a>

```json
{
  "details": {
    "database": {
      "status": "up"
    }
  },
  "error": {},
  "status": "ok",
  "info": {
    "database": {
      "status": "up"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|
|info|object \| null|false|none|none|
|error|object \| null|false|none|none|
|details|object|false|none|none|

<h2 id="tocS_HealthController_check_503_response">HealthController_check_503_response</h2>
<!-- backwards compatibility -->
<a id="schemahealthcontroller_check_503_response"></a>
<a id="schema_HealthController_check_503_response"></a>
<a id="tocShealthcontroller_check_503_response"></a>
<a id="tocshealthcontroller_check_503_response"></a>

```json
{
  "details": {
    "database": {
      "status": "up"
    },
    "redis": {
      "status": "down",
      "message": "Could not connect"
    }
  },
  "error": {
    "redis": {
      "status": "down",
      "message": "Could not connect"
    }
  },
  "status": "error",
  "info": {
    "database": {
      "status": "up"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|
|info|object \| null|false|none|none|
|error|object \| null|false|none|none|
|details|object|false|none|none|
